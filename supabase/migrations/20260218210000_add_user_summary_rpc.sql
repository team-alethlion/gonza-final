-- Migration: Add User-Centric Data Aggregation
-- Created: 2026-02-18

-- 1. Create RPC to fetch user-centric summaries
-- Returns a JSONB array for maximum compatibility with PostgREST
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
            bool_or(COALESCE(bo.is_frozen, false)) as any_frozen,
            (array_agg(bl.name ORDER BY bl.created_at DESC))[1] as primary_name
        FROM public.business_locations bl
        LEFT JOIN public.business_onboarding bo ON bo.location_id = bl.id
        GROUP BY bl.user_id
    )
    SELECT jsonb_agg(jsonb_build_object(
        'user_id', u.id,
        'email', u.email,
        'business_name', COALESCE(ls.primary_name, 'New User'),
        'location_count', COALESCE(ls.l_count, 0),
        'locations', COALESCE(ls.locs, '[]'::jsonb),
        'is_frozen', CASE 
            WHEN ls.l_count > 0 THEN ls.any_frozen 
            ELSE false 
        END,
        'created_at', COALESCE(ls.first_created, u.created_at)
    ) ORDER BY COALESCE(ls.first_created, u.created_at) DESC)
    INTO result
    FROM auth.users u
    LEFT JOIN location_stats ls ON ls.user_id = u.id;

    RETURN COALESCE(result, '[]'::jsonb);
END;
$$;

-- 2. Create RPC to toggle freeze for an entire USER
CREATE OR REPLACE FUNCTION public.toggle_user_freeze(
    p_username TEXT, 
    p_password TEXT, 
    p_user_id UUID, 
    p_is_frozen BOOLEAN
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
        -- Update the frozen status for ALL locations belonging to this user
        -- We update based on the shared user_id in business_onboarding
        UPDATE public.business_onboarding
        SET is_frozen = p_is_frozen,
            updated_at = now()
        WHERE user_id = p_user_id;

        -- Also ensure that any existing locations are covered
        -- (In case some are in business_onboarding and some are not, 
        -- but currently is_frozen only exists in business_onboarding)
        
        RETURN TRUE;
    ELSE
        RAISE EXCEPTION 'Unauthorized';
    END IF;
END;
$$;
