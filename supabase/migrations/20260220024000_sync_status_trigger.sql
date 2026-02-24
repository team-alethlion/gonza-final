-- Migration: Sync User Account Status to Business Onboarding
-- Created: 2026-02-20
-- Purpose: Ensures central subscription updates are propagated to all business locations automatically.

CREATE OR REPLACE FUNCTION public.sync_user_account_status_to_onboarding()
RETURNS TRIGGER AS $$
BEGIN
    -- Synchronize billing and status fields from the central account table
    -- to all individual business location records for this user.
    -- This handles the "Split Brain" issue by making user_account_status the MASTER.
    UPDATE public.business_onboarding
    SET 
        days_remaining = NEW.days_remaining,
        next_billing_date = NEW.next_billing_date,
        is_frozen = NEW.is_frozen,
        billing_amount = COALESCE(NEW.billing_amount, 0),
        billing_duration = COALESCE(NEW.billing_duration, 'Monthly'),
        updated_at = now()
    WHERE user_id = NEW.user_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger on user_account_status
DROP TRIGGER IF EXISTS tr_sync_user_status_to_onboarding ON public.user_account_status;
CREATE TRIGGER tr_sync_user_status_to_onboarding
AFTER INSERT OR UPDATE ON public.user_account_status
FOR EACH ROW
EXECUTE FUNCTION public.sync_user_account_status_to_onboarding();

-- Initial Sync: Make sure all existing records are aligned right now
UPDATE public.business_onboarding bo
SET 
    days_remaining = uas.days_remaining,
    next_billing_date = uas.next_billing_date,
    is_frozen = uas.is_frozen,
    billing_amount = COALESCE(uas.billing_amount, 0),
    billing_duration = COALESCE(uas.billing_duration, 'Monthly'),
    updated_at = now()
FROM public.user_account_status uas
WHERE bo.user_id = uas.user_id;
