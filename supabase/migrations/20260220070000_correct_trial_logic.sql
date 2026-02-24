-- Migration: Correct Trial Logic (14 days default, 30 days for verified)
-- Created: 2026-02-20
-- Purpose: 
-- 1. Set future DB defaults to 14 days / 1 location limit.
-- 2. Update existing "verified" users (completed onboarding) to 30 days.
-- 3. Update existing "unverified" users to 14 days.
-- 4. Update Admin RPC to reflect these logic branches.

-- 1. Update defaults for NEW users (Future signups)
ALTER TABLE public.user_account_status 
ALTER COLUMN days_remaining SET DEFAULT 14,
ALTER COLUMN next_billing_date SET DEFAULT (now() + interval '14 days'),
ALTER COLUMN location_limit SET DEFAULT 1;

-- 2. Update EXISTING users based on verification status

-- A. Verified Users (Have completed business onboarding): Set to 30 days
UPDATE public.user_account_status uas
SET 
    days_remaining = 30,
    next_billing_date = now() + interval '30 days',
    updated_at = now()
FROM public.business_onboarding bo
WHERE uas.user_id = bo.user_id 
AND bo.completed = true;

-- B. Unverified Users (Incomplete onboarding): Set to 14 days (treating as new trials)
-- We use a NOT EXISTS check to identify users who don't have a completed onboarding record
UPDATE public.user_account_status uas
SET 
    days_remaining = 14,
    next_billing_date = now() + interval '14 days',
    updated_at = now()
WHERE NOT EXISTS (
    SELECT 1 
    FROM public.business_onboarding bo 
    WHERE bo.user_id = uas.user_id 
    AND bo.completed = true
);

-- 3. Update get_my_account_status to reflect new defaults (14 days, 1 location)
CREATE OR REPLACE FUNCTION public.get_my_account_status()
RETURNS TABLE (
    is_frozen BOOLEAN, 
    location_limit INTEGER,
    billing_amount NUMERIC,
    billing_duration TEXT,
    days_remaining INTEGER,
    next_billing_date TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth, extensions
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COALESCE(uas.is_frozen, false) as is_frozen,
        -- Default location limit is 1
        COALESCE(uas.location_limit, 1) as location_limit,
        COALESCE(uas.billing_amount, 50000) as billing_amount,
        COALESCE(uas.billing_duration, 'Monthly') as billing_duration,
        CASE 
            WHEN uas.next_billing_date <= now() THEN 0
            WHEN uas.next_billing_date IS NULL AND uas.billing_amount > 0 THEN 0
            -- Default days remaining is 14 for users without a record
            ELSE COALESCE(uas.days_remaining, 14)
        END as days_remaining,
        uas.next_billing_date
    FROM auth.users u
    LEFT JOIN public.user_account_status uas ON uas.user_id = u.id
    WHERE u.id = auth.uid();
END;
$$;

-- 4. Update Admin RPC (get_platform_user_summary) to match new logic
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

    WITH location_activity AS (
        SELECT 
            bl.id as location_id,
            GREATEST(
                bl.updated_at,
                bo.updated_at,
                (SELECT MAX(created_at) FROM public.sales WHERE location_id = bl.id),
                (SELECT MAX(created_at) FROM public.expenses WHERE location_id = bl.id),
                (SELECT MAX(created_at) FROM public.cash_transactions WHERE location_id = bl.id)
            ) as last_active
        FROM public.business_locations bl
        LEFT JOIN public.business_onboarding bo ON bo.location_id = bl.id
    ),
    location_stats AS (
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
                'created_at', bl.created_at,
                'last_active_at', la.last_active,
                'billing_amount', COALESCE(bo.billing_amount, 0),
                'billing_duration', COALESCE(bo.billing_duration, 'Monthly'),
                'days_remaining', COALESCE(bo.days_remaining, 0),
                'next_billing_date', bo.next_billing_date
            ) ORDER BY bl.created_at DESC) as locs,
            COUNT(*) as l_count,
            MIN(bl.created_at) as first_created,
            bool_or(COALESCE(bo.is_frozen, false)) as any_onboarding_frozen,
            (array_agg(bl.name ORDER BY bl.created_at DESC))[1] as primary_name,
            (array_agg(COALESCE(bo.business_phone, '') ORDER BY bl.created_at DESC))[1] as primary_phone
        FROM public.business_locations bl
        LEFT JOIN public.business_onboarding bo ON bo.location_id = bl.id
        LEFT JOIN location_activity la ON la.location_id = bl.id
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
        -- Default location limit is 1
        'location_limit', COALESCE(uas.location_limit, 1),
        'billing_amount', COALESCE(uas.billing_amount, 50000),
        'billing_duration', COALESCE(uas.billing_duration, 'Monthly'),
        -- Default days remaining logic:
        -- If billing date is past -> 0
        -- If no record -> 14 (New Trial Default)
        'days_remaining', CASE 
            WHEN uas.next_billing_date IS NOT NULL AND uas.next_billing_date <= now() THEN 0 
            ELSE COALESCE(uas.days_remaining, 14) 
        END,
        'next_billing_date', uas.next_billing_date,
        'created_at', COALESCE(ls.first_created, u.created_at)
    ) ORDER BY COALESCE(ls.first_created, u.created_at) DESC)
    INTO result
    FROM auth.users u
    LEFT JOIN location_stats ls ON ls.user_id = u.id
    LEFT JOIN public.user_account_status uas ON uas.user_id = u.id;

    RETURN COALESCE(result, '[]'::jsonb);
END;
$$;
