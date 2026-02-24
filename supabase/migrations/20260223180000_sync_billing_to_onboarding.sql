-- Migration: Sync Billing Data to Onboarding
-- Created: 2026-02-23
-- Purpose: Ensure billing data is synced to both user_account_status AND business_onboarding 
--          to maintain consistency across different Admin App views.

CREATE OR REPLACE FUNCTION public.update_platform_onboarding_data(
    p_username TEXT,
    p_password TEXT,
    p_location_id UUID,
    p_user_id UUID DEFAULT NULL,
    p_business_name TEXT DEFAULT NULL,
    p_business_email TEXT DEFAULT NULL,
    p_business_phone TEXT DEFAULT NULL,
    p_business_address TEXT DEFAULT NULL,
    p_nature_of_business TEXT DEFAULT NULL,
    p_business_size TEXT DEFAULT NULL,
    p_billing_amount NUMERIC DEFAULT NULL,
    p_billing_duration TEXT DEFAULT NULL,
    p_days_remaining INTEGER DEFAULT NULL,
    p_next_billing_date TIMESTAMPTZ DEFAULT NULL,
    p_completed BOOLEAN DEFAULT NULL
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth, extensions
AS $$
DECLARE
    v_actual_user_id UUID;
BEGIN
    -- Verify admin credentials
    IF NOT EXISTS (
        SELECT 1 FROM public.platform_super_admins
        WHERE username = p_username
        AND password_hash = crypt(p_password, password_hash)
    ) THEN
        RAISE EXCEPTION 'Unauthorized';
    END IF;

    -- Identify user
    IF p_user_id IS NOT NULL THEN
        v_actual_user_id := p_user_id;
    ELSE
        SELECT user_id INTO v_actual_user_id FROM public.business_onboarding WHERE location_id = p_location_id;
    END IF;

    -- 1. Update location-specific data (Onboarding)
    -- We sync ALL billing columns here as well so the summary (locs array) stays current
    IF p_location_id IS NOT NULL THEN
        INSERT INTO public.business_onboarding (
            location_id, user_id, business_name, business_email, business_phone, 
            business_address, nature_of_business, business_size, completed,
            billing_amount, billing_duration, days_remaining, next_billing_date
        )
        VALUES (
            p_location_id, v_actual_user_id, COALESCE(p_business_name, 'New Business'), 
            COALESCE(p_business_email, ''), COALESCE(p_business_phone, ''), 
            COALESCE(p_business_address, ''), p_nature_of_business, p_business_size, 
            COALESCE(p_completed, false),
            p_billing_amount, p_billing_duration, p_days_remaining, p_next_billing_date
        )
        ON CONFLICT (location_id) DO UPDATE SET
            business_name      = COALESCE(p_business_name,       business_onboarding.business_name),
            business_email     = COALESCE(p_business_email,      business_onboarding.business_email),
            business_phone     = COALESCE(p_business_phone,      business_onboarding.business_phone),
            business_address   = COALESCE(p_business_address,    business_onboarding.business_address),
            nature_of_business = COALESCE(p_nature_of_business,  business_onboarding.nature_of_business),
            business_size      = COALESCE(p_business_size,       business_onboarding.business_size),
            completed          = COALESCE(p_completed,           business_onboarding.completed),
            billing_amount     = COALESCE(p_billing_amount,      business_onboarding.billing_amount),
            billing_duration   = COALESCE(p_billing_duration,    business_onboarding.billing_duration),
            days_remaining     = COALESCE(p_days_remaining,      business_onboarding.days_remaining),
            next_billing_date  = COALESCE(p_next_billing_date,   business_onboarding.next_billing_date),
            updated_at         = now();

        -- Sync the name to the business_locations table as well
        IF p_business_name IS NOT NULL THEN
            UPDATE public.business_locations
            SET name = p_business_name
            WHERE id = p_location_id;
        END IF;
    END IF;

    -- 2. Update user-centric status & billing (UPSERT)
    IF v_actual_user_id IS NOT NULL THEN
        INSERT INTO public.user_account_status (user_id, billing_amount, billing_duration, days_remaining, next_billing_date, updated_at)
        VALUES (
            v_actual_user_id, 
            COALESCE(p_billing_amount, 0), 
            COALESCE(p_billing_duration, 'Monthly'), 
            COALESCE(p_days_remaining, 14), 
            COALESCE(p_next_billing_date, now() + interval '14 days'),
            now()
        )
        ON CONFLICT (user_id) DO UPDATE SET
            billing_amount    = COALESCE(p_billing_amount,     user_account_status.billing_amount),
            billing_duration  = COALESCE(p_billing_duration,   user_account_status.billing_duration),
            days_remaining    = COALESCE(p_days_remaining,     user_account_status.days_remaining),
            next_billing_date = COALESCE(
                p_next_billing_date,
                CASE 
                    WHEN p_days_remaining IS NOT NULL THEN (now() + (p_days_remaining || ' days')::interval)
                    ELSE user_account_status.next_billing_date
                END
            ),
            updated_at = now();
    END IF;

    RETURN true;
END;
$$;
