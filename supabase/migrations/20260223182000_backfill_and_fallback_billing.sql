-- Migration: Backfill and Fallback Billing Logic
-- Created: 2026-02-23
-- Purpose: 
-- 1. Initialize missing user_account_status and business_onboarding records for existing users.
-- 2. Update RPCs to provide fallback billing dates (14 days from signup) if none are set.

-- 1. Backfill missing user_account_status records
INSERT INTO public.user_account_status (user_id, billing_amount, billing_duration, days_remaining, next_billing_date, updated_at)
SELECT 
    id, 
    50000, -- Default amount
    'Monthly', -- Default duration
    14, -- Default days
    (created_at + interval '14 days'), -- Default date
    now()
FROM auth.users u
WHERE NOT EXISTS (
    SELECT 1 FROM public.user_account_status uas WHERE uas.user_id = u.id
)
ON CONFLICT (user_id) DO NOTHING;

-- 2. Backfill missing/null billing info in business_onboarding (optional but helpful for syncing)
UPDATE public.business_onboarding bo
SET 
    billing_amount = COALESCE(bo.billing_amount, 50000),
    billing_duration = COALESCE(bo.billing_duration, 'Monthly'),
    days_remaining = COALESCE(bo.days_remaining, 14),
    next_billing_date = COALESCE(bo.next_billing_date, (u.created_at + interval '14 days'))
FROM auth.users u
WHERE bo.user_id = u.id
AND (bo.next_billing_date IS NULL OR bo.billing_amount IS NULL);

-- 3. Update get_my_account_status with fallback
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
        COALESCE(uas.location_limit, 1) as location_limit,
        COALESCE(uas.billing_amount, 50000) as billing_amount,
        COALESCE(uas.billing_duration, 'Monthly') as billing_duration,
        -- Fallback: Use u.created_at + 14 days if next_billing_date is NULL
        CASE 
            WHEN COALESCE(uas.next_billing_date, u.created_at + interval '14 days') IS NOT NULL THEN 
                GREATEST(0, CEIL(EXTRACT(EPOCH FROM (COALESCE(uas.next_billing_date, u.created_at + interval '14 days') - now())) / 86400)::integer)
            ELSE 14
        END as days_remaining,
        COALESCE(uas.next_billing_date, u.created_at + interval '14 days') as next_billing_date
    FROM auth.users u
    LEFT JOIN public.user_account_status uas ON uas.user_id = u.id
    WHERE u.id = auth.uid();
END;
$$;

-- 4. Update get_platform_user_summary with fallback
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
                'billing_amount', COALESCE(bo.billing_amount, 50000),
                'billing_duration', COALESCE(bo.billing_duration, 'Monthly'),
                'days_remaining', CASE 
                    WHEN COALESCE(bo.next_billing_date, u.created_at + interval '14 days') IS NOT NULL THEN 
                        GREATEST(0, CEIL(EXTRACT(EPOCH FROM (COALESCE(bo.next_billing_date, u.created_at + interval '14 days') - now())) / 86400)::integer)
                    ELSE 14
                END,
                'next_billing_date', COALESCE(bo.next_billing_date, u.created_at + interval '14 days')
            ) ORDER BY bl.created_at DESC) as locs,
            COUNT(*) as l_count,
            MIN(bl.created_at) as first_created,
            bool_or(COALESCE(bo.is_frozen, false)) as any_onboarding_frozen,
            (array_agg(bl.name ORDER BY bl.created_at DESC))[1] as primary_name,
            (array_agg(COALESCE(bo.business_phone, '') ORDER BY bl.created_at DESC))[1] as primary_phone
        FROM auth.users u
        JOIN public.business_locations bl ON bl.user_id = u.id
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
        -- Dynamic days remaining logic with fallback to u.created_at:
        'days_remaining', CASE 
            WHEN COALESCE(uas.next_billing_date, u.created_at + interval '14 days') IS NOT NULL THEN 
                GREATEST(0, CEIL(EXTRACT(EPOCH FROM (COALESCE(uas.next_billing_date, u.created_at + interval '14 days') - now())) / 86400)::integer)
            ELSE 14 
        END,
        'next_billing_date', COALESCE(uas.next_billing_date, u.created_at + interval '14 days'),
        'created_at', COALESCE(ls.first_created, u.created_at)
    ) ORDER BY COALESCE(ls.first_created, u.created_at) DESC)
    INTO result
    FROM auth.users u
    LEFT JOIN location_stats ls ON ls.user_id = u.id
    LEFT JOIN public.user_account_status uas ON uas.user_id = u.id;

    RETURN COALESCE(result, '[]'::jsonb);
END;
$$;
