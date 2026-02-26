-- Migration: Centralize User Freeze Status
-- Created: 2026-02-19

-- 1. Create a centralized table for user-level status
CREATE TABLE IF NOT EXISTS public.user_account_status (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    is_frozen BOOLEAN DEFAULT false,
    location_limit INTEGER DEFAULT 3,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_user_account_status_user_id ON public.user_account_status(user_id);

-- Ensure location_limit column exists (for DBs where table was created before this column was added)
ALTER TABLE public.user_account_status 
ADD COLUMN IF NOT EXISTS location_limit INTEGER DEFAULT 3;

-- Enable RLS (Internal use only, strictly for admin RPCs)
ALTER TABLE public.user_account_status ENABLE ROW LEVEL SECURITY;

-- Allow users to see their own status
DROP POLICY IF EXISTS "Users can view their own account status" ON public.user_account_status;
CREATE POLICY "Users can view their own account status"
ON public.user_account_status FOR SELECT
USING (auth.uid() = user_id);

-- RPC for users to check their own status (including fallback)
-- Drop first in case a prior version has a different return type
DROP FUNCTION IF EXISTS public.get_my_account_status();
CREATE OR REPLACE FUNCTION public.get_my_account_status()
RETURNS TABLE (is_frozen BOOLEAN, location_limit INTEGER)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth, extensions
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COALESCE(uas.is_frozen, bool_or(bo.is_frozen), false) as is_frozen,
        COALESCE(uas.location_limit, 3) as location_limit
    FROM auth.users u
    LEFT JOIN public.user_account_status uas ON uas.user_id = u.id
    LEFT JOIN public.business_onboarding bo ON bo.user_id = u.id
    WHERE u.id = auth.uid()
    GROUP BY u.id, uas.is_frozen, uas.location_limit;
END;
$$;

-- 2. Update status and limit for a user
CREATE OR REPLACE FUNCTION public.update_user_account_status(
    p_username TEXT,
    p_password TEXT,
    p_user_id UUID,
    p_is_frozen BOOLEAN,
    p_location_limit INTEGER
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth, extensions
AS $$
BEGIN
    -- Verify credentials
    IF EXISTS (
        SELECT 1
        FROM public.platform_super_admins
        WHERE username = p_username
        AND password_hash = crypt(p_password, password_hash)
    ) THEN
        -- 1. Update centralized status (UPSERT)
        INSERT INTO public.user_account_status (user_id, is_frozen, location_limit, updated_at)
        VALUES (p_user_id, p_is_frozen, p_location_limit, now())
        ON CONFLICT (user_id) DO UPDATE
        SET is_frozen = EXCLUDED.is_frozen,
            location_limit = EXCLUDED.location_limit,
            updated_at = now();

        -- 2. Update ALL locations for backward compatibility with the main app's gate
        UPDATE public.business_onboarding
        SET is_frozen = p_is_frozen,
            updated_at = now()
        WHERE user_id = p_user_id;

        RETURN TRUE;
    ELSE
        RAISE EXCEPTION 'Unauthorized';
    END IF;
END;
$$;

-- 3. Update get_platform_user_summary to prioritize centralized status
DROP FUNCTION IF EXISTS public.get_platform_user_summary(TEXT, TEXT);
CREATE OR REPLACE FUNCTION public.get_platform_user_summary(p_username TEXT, p_password TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth, extensions
AS $$
DECLARE
    result JSONB;
BEGIN
    -- Verify credentials
    IF NOT EXISTS (
        SELECT 1 
        FROM public.platform_super_admins 
        WHERE username = p_username 
        AND password_hash = crypt(p_password, password_hash)
    ) THEN
        RETURN '[]'::jsonb;
    END IF;

    WITH location_stats AS (
        SELECT 
            bl.user_id,
            jsonb_agg(jsonb_build_object(
                'id', bl.id,
                'onboarding_id', bo.id,
                'name', bl.name,
                'address', COALESCE(bo.business_address, ''),
                'is_frozen', COALESCE(bo.is_frozen, false),
                'completed', COALESCE(bo.completed, false),
                'business_email', COALESCE(bo.business_email, ''),
                'business_phone', COALESCE(bo.business_phone, ''),
                'created_at', bl.created_at
            ) ORDER BY bl.created_at DESC) as locs,
            COUNT(*) as l_count,
            MIN(bl.created_at) as first_created,
            bool_or(COALESCE(bo.is_frozen, false)) as any_onboarding_frozen,
            (array_agg(bl.name ORDER BY bl.created_at DESC))[1] as primary_name,
            (array_agg(COALESCE(bo.business_phone, '') ORDER BY bl.created_at DESC))[1] as primary_phone
        FROM public.business_locations bl
        LEFT JOIN public.business_onboarding bo ON bo.location_id = bl.id
        GROUP BY bl.user_id
    )
    SELECT jsonb_agg(jsonb_build_object(
        'user_id', u.id,
        'email', u.email,
        'business_name', COALESCE(ls.primary_name, 'New User'),
        'business_phone', COALESCE(
            NULLIF(ls.primary_phone, ''), 
            NULLIF(u.phone, ''), 
            NULLIF(u.raw_user_meta_data->>'phone', ''),
            NULLIF(u.raw_user_meta_data->>'business_phone', ''),
            ''
        ),
        'location_count', COALESCE(ls.l_count, 0),
        'locations', COALESCE(ls.locs, '[]'::jsonb),
        'is_frozen', COALESCE(uas.is_frozen, ls.any_onboarding_frozen, false),
        'location_limit', COALESCE(uas.location_limit, 3),
        'created_at', COALESCE(ls.first_created, u.created_at)
    ) ORDER BY COALESCE(ls.first_created, u.created_at) DESC)
    INTO result
    FROM auth.users u
    LEFT JOIN location_stats ls ON ls.user_id = u.id
    LEFT JOIN public.user_account_status uas ON uas.user_id = u.id;

    RETURN COALESCE(result, '[]'::jsonb);
END;
$$;
