-- Migration: Update Trial Defaults (30 days, 1 location for new users)
-- Created: 2026-02-20

-- 1. Update defaults for NEW users
ALTER TABLE public.user_account_status 
ALTER COLUMN days_remaining SET DEFAULT 30,
ALTER COLUMN next_billing_date SET DEFAULT (now() + interval '30 days'),
ALTER COLUMN location_limit SET DEFAULT 1;

-- 2. Update EXISTING users: Give them 30 days coverage from now
-- Note: We are NOT changing location_limit for existing users, as requested.
UPDATE public.user_account_status
SET 
    days_remaining = 30,
    next_billing_date = now() + interval '30 days',
    updated_at = now();

-- 3. Update get_my_account_status to reflect new defaults (30 days, 1 location)
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
        -- Default location limit is now 1 for users without a record (new)
        COALESCE(uas.location_limit, 1) as location_limit,
        COALESCE(uas.billing_amount, 50000) as billing_amount,
        COALESCE(uas.billing_duration, 'Monthly') as billing_duration,
        CASE 
            WHEN uas.next_billing_date <= now() THEN 0
            WHEN uas.next_billing_date IS NULL AND uas.billing_amount > 0 THEN 0
            -- Default days remaining is now 30 for users without a record
            ELSE COALESCE(uas.days_remaining, 30)
        END as days_remaining,
        uas.next_billing_date
    FROM auth.users u
    LEFT JOIN public.user_account_status uas ON uas.user_id = u.id
    WHERE u.id = auth.uid();
END;
$$;
