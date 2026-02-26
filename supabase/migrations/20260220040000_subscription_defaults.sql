-- Migration: Set default subscription values
-- Created: 2026-02-20

-- 1. Update user_account_status defaults
ALTER TABLE public.user_account_status 
ALTER COLUMN billing_amount SET DEFAULT 50000,
ALTER COLUMN billing_duration SET DEFAULT 'Monthly';

-- 2. Update business_onboarding defaults (legacy compatibility)
ALTER TABLE public.business_onboarding
ALTER COLUMN billing_amount SET DEFAULT 50000,
ALTER COLUMN billing_duration SET DEFAULT 'Monthly';

-- 3. Update existing records that have 0 or null
UPDATE public.user_account_status 
SET billing_amount = 50000 
WHERE billing_amount IS NULL OR billing_amount = 0;

UPDATE public.user_account_status 
SET billing_duration = 'Monthly' 
WHERE billing_duration IS NULL;

UPDATE public.business_onboarding 
SET billing_amount = 50000 
WHERE billing_amount IS NULL OR billing_amount = 0;

UPDATE public.business_onboarding 
SET billing_duration = 'Monthly' 
WHERE billing_duration IS NULL;
