-- Migration: Add missing payment_completed_at column to subscription_payments
-- Created: 2026-02-20

ALTER TABLE public.subscription_payments 
ADD COLUMN IF NOT EXISTS payment_completed_at TIMESTAMPTZ;

-- Re-grant permissions just in case
GRANT ALL ON TABLE public.subscription_payments TO postgres;
GRANT ALL ON TABLE public.subscription_payments TO service_role;
GRANT ALL ON TABLE public.subscription_payments TO anon;
GRANT ALL ON TABLE public.subscription_payments TO authenticated;
