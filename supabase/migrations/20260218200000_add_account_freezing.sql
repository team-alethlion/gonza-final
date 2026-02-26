-- Migration: Add Real Account Freezing Capability
-- Created: 2026-02-18

-- 1. Add is_frozen column to business_onboarding
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_onboarding' AND column_name = 'is_frozen') THEN
        ALTER TABLE public.business_onboarding ADD COLUMN is_frozen BOOLEAN NOT NULL DEFAULT false;
    END IF;
END $$;

-- 2. Create RPC to toggle business frozen status
-- Only platform super admins can execute this
CREATE OR REPLACE FUNCTION public.toggle_business_freeze(
    p_username TEXT, 
    p_password TEXT, 
    p_record_id UUID, 
    p_is_frozen BOOLEAN
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Verify credentials
    IF EXISTS (
        SELECT 1 
        FROM public.platform_super_admins 
        WHERE username = p_username 
        AND password_hash = crypt(p_password, password_hash)
    ) THEN
        -- Update the frozen status
        UPDATE public.business_onboarding
        SET is_frozen = p_is_frozen,
            updated_at = now()
        WHERE id = p_record_id;
        
        RETURN TRUE;
    ELSE
        RAISE EXCEPTION 'Unauthorized';
    END IF;
END;
$$;

-- 3. Re-deploy the onboarding data RPC to ensure it picks up the new SETOF columns
CREATE OR REPLACE FUNCTION public.get_platform_onboarding_data(p_username TEXT, p_password TEXT)
RETURNS SETOF public.business_onboarding
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- First verify credentials
    IF EXISTS (
        SELECT 1 
        FROM public.platform_super_admins 
        WHERE username = p_username 
        AND password_hash = crypt(p_password, password_hash)
    ) THEN
        -- If valid, return all data
        RETURN QUERY SELECT * FROM public.business_onboarding ORDER BY created_at DESC;
    ELSE
        -- If invalid, return nothing
        RETURN;
    END IF;
END;
$$;
