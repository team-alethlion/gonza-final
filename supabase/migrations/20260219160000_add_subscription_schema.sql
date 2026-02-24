-- Migration: Add Subscription Schema for Pesapal
-- Created: 2026-02-19

-- 1. Add subscription columns to business_onboarding
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_account_status' AND column_name = 'billing_amount') THEN
        ALTER TABLE public.user_account_status ADD COLUMN billing_amount NUMERIC DEFAULT 0;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_account_status' AND column_name = 'billing_duration') THEN
        ALTER TABLE public.user_account_status ADD COLUMN billing_duration TEXT DEFAULT 'Monthly';
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_account_status' AND column_name = 'days_remaining') THEN
        ALTER TABLE public.user_account_status ADD COLUMN days_remaining INTEGER DEFAULT 14;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_account_status' AND column_name = 'next_billing_date') THEN
        ALTER TABLE public.user_account_status ADD COLUMN next_billing_date TIMESTAMPTZ DEFAULT (now() + interval '14 days');
    END IF;
END $$;

-- 1.1 Migrate initial data to user_account_status
DO $$
BEGIN
    -- This moves the "best" available billing info from individual branches to the central user record
    INSERT INTO public.user_account_status (user_id, billing_amount, billing_duration, days_remaining, next_billing_date, updated_at)
    SELECT 
        user_id,
        MAX(COALESCE(billing_amount, 0)) as billing_amount,
        COALESCE((array_agg(billing_duration ORDER BY created_at DESC))[1], 'Monthly') as billing_duration,
        MAX(COALESCE(days_remaining, 0)) as days_remaining,
        MAX(next_billing_date) as next_billing_date,
        now()
    FROM public.business_onboarding
    GROUP BY user_id
    ON CONFLICT (user_id) DO UPDATE SET
        billing_amount    = COALESCE(EXCLUDED.billing_amount,    user_account_status.billing_amount),
        billing_duration  = COALESCE(EXCLUDED.billing_duration,  user_account_status.billing_duration),
        days_remaining    = COALESCE(EXCLUDED.days_remaining,    user_account_status.days_remaining),
        next_billing_date = COALESCE(EXCLUDED.next_billing_date, user_account_status.next_billing_date),
        updated_at = now();
END $$;


-- 2. Create subscription_payments table
CREATE TABLE IF NOT EXISTS public.subscription_payments (
    id TEXT PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    location_id UUID NOT NULL REFERENCES public.business_locations(id) ON DELETE CASCADE,
    amount NUMERIC NOT NULL,
    currency TEXT NOT NULL DEFAULT 'UGX',
    payment_status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'failed'
    pesapal_tracking_id TEXT UNIQUE,
    payment_method TEXT,
    billing_cycle TEXT, -- Recorded for history
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Fix existing table if it was created with UUID during previous attempts
DO $$ 
BEGIN 
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'subscription_payments' 
        AND column_name = 'id' 
        AND data_type = 'uuid'
    ) THEN
        ALTER TABLE public.subscription_payments ALTER COLUMN id TYPE TEXT;
    END IF;
END $$;

-- Enable RLS
ALTER TABLE public.subscription_payments ENABLE ROW LEVEL SECURITY;

-- Users can view their own payments
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'subscription_payments' 
    AND policyname = 'Users can view own subscription payments'
  ) THEN
    CREATE POLICY "Users can view own subscription payments"
      ON public.subscription_payments FOR SELECT
      USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'subscription_payments' 
    AND policyname = 'Users can insert own subscription payments'
  ) THEN
    CREATE POLICY "Users can insert own subscription payments"
      ON public.subscription_payments FOR INSERT
      WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'subscription_payments' 
    AND policyname = 'Users can update own subscription payments'
  ) THEN
    CREATE POLICY "Users can update own subscription payments"
      ON public.subscription_payments FOR UPDATE
      USING (auth.uid() = user_id);
  END IF;
END $$;

-- 3. Update get_my_account_status to return billing info
-- Must drop first because return type changed (added billing columns)
DROP FUNCTION IF EXISTS public.get_my_account_status();
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
        COALESCE(uas.is_frozen, bool_or(bo.is_frozen), false) as is_frozen,
        COALESCE(uas.location_limit, 3) as location_limit,
        MAX(COALESCE(bo.billing_amount, 0)) as billing_amount,
        (array_agg(bo.billing_duration ORDER BY bo.created_at DESC))[1] as billing_duration,
        MAX(COALESCE(bo.days_remaining, 0)) as days_remaining,
        MAX(bo.next_billing_date) as next_billing_date
    FROM auth.users u
    LEFT JOIN public.user_account_status uas ON uas.user_id = u.id
    LEFT JOIN public.business_onboarding bo ON bo.user_id = u.id
    WHERE u.id = auth.uid()
    GROUP BY u.id, uas.is_frozen, uas.location_limit;
END;
$$;

-- 4. Daily Subscription Sweep Function
CREATE OR REPLACE FUNCTION public.daily_subscription_decrement()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    UPDATE public.user_account_status
    SET days_remaining = GREATEST(0, days_remaining - 1),
        updated_at = now()
    WHERE billing_amount > 0;
END;
$$;

-- 5. Update get_platform_user_summary to include billing info (Centric)
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
        'is_frozen', COALESCE(uas.is_frozen, false),
        'location_limit', COALESCE(uas.location_limit, 3),
        'billing_amount', COALESCE(uas.billing_amount, 0),
        'billing_duration', COALESCE(uas.billing_duration, 'Monthly'),
        'days_remaining', CASE WHEN uas.next_billing_date <= now() THEN 0 ELSE COALESCE(uas.days_remaining, 0) END,
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

-- 6. Admin RPC to update data (Centric)
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

    -- 1. Update location-specific data
    IF p_location_id IS NOT NULL THEN
        INSERT INTO public.business_onboarding (location_id, user_id, business_name, business_email, business_phone, business_address, nature_of_business, business_size, completed)
        VALUES (p_location_id, v_actual_user_id, COALESCE(p_business_name, 'New Business'), COALESCE(p_business_email, ''), COALESCE(p_business_phone, ''), COALESCE(p_business_address, ''), p_nature_of_business, p_business_size, COALESCE(p_completed, false))
        ON CONFLICT (location_id) DO UPDATE SET
            business_name     = COALESCE(p_business_name,      business_onboarding.business_name),
            business_email    = COALESCE(p_business_email,     business_onboarding.business_email),
            business_phone    = COALESCE(p_business_phone,     business_onboarding.business_phone),
            business_address  = COALESCE(p_business_address,   business_onboarding.business_address),
            nature_of_business= COALESCE(p_nature_of_business, business_onboarding.nature_of_business),
            business_size     = COALESCE(p_business_size,      business_onboarding.business_size),
            completed         = COALESCE(p_completed,          business_onboarding.completed);
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

-- 7. Final Refinement for get_my_account_status
DROP FUNCTION IF EXISTS public.get_my_account_status();
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
        COALESCE(uas.location_limit, 3) as location_limit,
        COALESCE(uas.billing_amount, 0) as billing_amount,
        COALESCE(uas.billing_duration, 'Monthly') as billing_duration,
        CASE 
            WHEN uas.next_billing_date <= now() THEN 0
            WHEN uas.next_billing_date IS NULL AND uas.billing_amount > 0 THEN 0
            ELSE COALESCE(uas.days_remaining, 14)
        END as days_remaining,
        uas.next_billing_date
    FROM auth.users u
    LEFT JOIN public.user_account_status uas ON uas.user_id = u.id
    WHERE u.id = auth.uid();
END;
$$;
