-- Migration: Unified User Deletion RPC
-- Created: 2026-02-19

CREATE OR REPLACE FUNCTION public.delete_platform_user_account(
    p_username TEXT, 
    p_password TEXT, 
    p_user_id UUID
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth, extensions
AS $$
BEGIN
    -- 1. Verify credentials
    IF NOT EXISTS (
        SELECT 1 
        FROM public.platform_super_admins 
        WHERE username = p_username 
        AND password_hash = crypt(p_password, password_hash)
    ) THEN
        RAISE EXCEPTION 'Unauthorized';
    END IF;

    -- 2. Set deletion flag to bypass profile protection triggers
    -- This flag is checked in ensure_owner_exists_v2 and protect_owner_role
    BEGIN
        PERFORM set_config('app.deleting_business', 'true', true);
    EXCEPTION WHEN OTHERS THEN
        -- Non-critical if config cannot be set
    END;

    -- 3. Sequential deletion to avoid constraint violations and handle triggers
    
    -- Delete from application-level tables first
    -- These usually contain the bulk of the data (Sales, Expenses, Inventory)
    -- Most should be linked to business_locations or business_profiles
    
    -- Deleting locations will trigger cascading deletes for most tables 
    -- if foreign keys were set up with ON DELETE CASCADE.
    -- However, we explicitly delete profiles and locations to ensure triggers are bypassed.

    -- Profiles for all user locations
    DELETE FROM public.business_profiles 
    WHERE business_location_id IN (SELECT id FROM public.business_locations WHERE user_id = p_user_id);

    -- Onboarding data
    DELETE FROM public.business_onboarding WHERE user_id = p_user_id;

    -- Payments & Purchases
    DELETE FROM public.subscription_payments WHERE user_id = p_user_id;
    DELETE FROM public.sms_credit_purchases WHERE user_id = p_user_id;

    -- Local status record
    DELETE FROM public.user_account_status WHERE user_id = p_user_id;

    -- Business Locations (The core anchor)
    DELETE FROM public.business_locations WHERE user_id = p_user_id;

    -- 4. Finally, remove the Auth Identity
    -- This is the "nuclear option" that completes the account removal
    DELETE FROM auth.users WHERE id = p_user_id;

    RETURN TRUE;
END;
$$;
