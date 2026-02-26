-- RELAXED PROTECTION & FIX BUSINESS DELETION
-- This script modifies the triggers to:
-- 1. Allow deleting a business (by detecting the cascade)
-- 2. Allow editing the owner profile (name, email, etc) while protecting critical fields (role, active)

-- 0. Ensure owner_email column exists (Vital dependency)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_locations' AND column_name = 'owner_email') THEN
        ALTER TABLE public.business_locations ADD COLUMN owner_email TEXT;
        
        -- Sync existing emails (Disable user triggers to prevent conflicts)
        ALTER TABLE public.business_locations DISABLE TRIGGER USER;
        
        UPDATE public.business_locations l
        SET owner_email = u.email
        FROM auth.users u
        WHERE l.user_id = u.id;
        
        ALTER TABLE public.business_locations ENABLE TRIGGER USER;
    END IF;
END $$;

-- A. Create a trigger on business_locations to flag when a business is being deleted
CREATE OR REPLACE FUNCTION public.flag_business_deletion()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    -- Set a session variable that we can check in the profile trigger
    PERFORM set_config('app.deleting_business', 'true', true);
    RETURN OLD;
END;
$$;

DROP TRIGGER IF EXISTS on_business_delete_flag ON public.business_locations;
CREATE TRIGGER on_business_delete_flag
    BEFORE DELETE ON public.business_locations
    FOR EACH ROW
    EXECUTE FUNCTION public.flag_business_deletion();


-- B. Update the Profile Protection Trigger to be smarter and more relaxed
CREATE OR REPLACE FUNCTION public.ensure_owner_exists_v2()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    owner_role_id UUID;
    l_owner_email TEXT;
    is_account_creator BOOLEAN;
    is_business_deleting BOOLEAN;
BEGIN
    -- 1. CHECK FOR BUSINESS DELETION FLAG
    BEGIN
        is_business_deleting := current_setting('app.deleting_business', true)::BOOLEAN;
    EXCEPTION WHEN OTHERS THEN
        is_business_deleting := false;
    END;

    -- If the business is being deleted, ALLOW EVERYTHING (Cascading delete)
    IF is_business_deleting IS TRUE THEN
        RETURN OLD;
    END IF;

    -- 2. Identify the Account Creator
    -- Get the owner email for this location from business_locations (user added column)
    SELECT r.id, l.owner_email INTO owner_role_id, l_owner_email
    FROM public.business_roles r
    JOIN public.business_locations l ON l.id = r.business_location_id
    WHERE r.business_location_id = COALESCE(NEW.business_location_id, OLD.business_location_id) 
      AND r.name = 'Owner'
    LIMIT 1;

    -- Check if this profile belongs to the account creator
    is_account_creator := (OLD.email = l_owner_email);

    -- 3. PROTECTION LOGIC
    IF is_account_creator THEN
        -- BLOCK DELETION of the account creator profile (unless business is deleting, handled above)
        IF (TG_OP = 'DELETE') THEN
            RAISE EXCEPTION 'The Account Creator profile cannot be deleted directly. To remove it, delete the Business.';
        END IF;

        -- RELAXED UPDATE PROTECTION
        -- Only block changing ROLE or DEACTIVATING
        IF (TG_OP = 'UPDATE') THEN
            -- Function to check if critical fields are changing
            IF (NEW.role != OLD.role) OR (NEW.role_id != OLD.role_id) THEN
                 RAISE EXCEPTION 'You cannot change the Role of the Account Creator.';
            END IF;
            
            IF (NEW.is_active = false AND OLD.is_active = true) THEN
                 RAISE EXCEPTION 'You cannot deactivate the Account Creator.';
            END IF;
            
            -- Allow other updates (Name, Email, PIN, etc.)
        END IF;
    END IF;

    -- 4. GENERAL OWNER PROTECTION (Keep at least one owner)
    IF (TG_OP = 'DELETE' OR (TG_OP = 'UPDATE' AND NEW.is_active = false)) THEN
        IF (OLD.role = 'owner' OR OLD.role_id = owner_role_id) THEN
            -- Only enforce this check if we are NOT the account creator (who is handled above)
            -- or if we passed the above checks.
            IF NOT EXISTS (
                SELECT 1 
                FROM public.business_profiles 
                WHERE business_location_id = OLD.business_location_id 
                  AND (role = 'owner' OR role_id = owner_role_id)
                  AND is_active = true 
                  AND id != OLD.id
            ) THEN
                RAISE EXCEPTION 'Cannot delete or deactivate the last owner of a business location.';
            END IF;
        END IF;
    END IF;

    IF (TG_OP = 'UPDATE' AND OLD.is_active = true AND NEW.is_active = true) THEN
        IF (OLD.role = 'owner' OR OLD.role_id = owner_role_id) THEN
             -- If demoting an owner
            IF (NEW.role != 'owner' AND NEW.role_id != owner_role_id) THEN
                IF NOT EXISTS (
                    SELECT 1 
                    FROM public.business_profiles 
                    WHERE business_location_id = OLD.business_location_id 
                      AND (role = 'owner' OR role_id = owner_role_id)
                      AND is_active = true 
                      AND id != OLD.id
                ) THEN
                    RAISE EXCEPTION 'Cannot change the role of the last owner of a business location.';
                END IF;
            END IF;
        END IF;
    END IF;

    -- Legacy: Auto-assign owner on insert
    IF TG_OP = 'INSERT' THEN
        IF NOT EXISTS (SELECT 1 FROM public.business_profiles WHERE business_location_id = NEW.business_location_id) THEN
            NEW.role := 'owner';
            NEW.role_id := owner_role_id;
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN RETURN OLD; ELSE RETURN NEW; END IF;
END;
$$;

-- C. Update the Role Protection Trigger to allow cascading delete
CREATE OR REPLACE FUNCTION public.protect_owner_role()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    is_business_deleting BOOLEAN;
BEGIN
    -- 1. CHECK FOR BUSINESS DELETION FLAG
    BEGIN
        is_business_deleting := current_setting('app.deleting_business', true)::BOOLEAN;
    EXCEPTION WHEN OTHERS THEN
        is_business_deleting := false;
    END;

    -- If the business is being deleted, ALLOW EVERYTHING (Cascading delete)
    IF is_business_deleting IS TRUE THEN
        RETURN OLD;
    END IF;

    -- Prevent deletion of the 'Owner' role
    IF (TG_OP = 'DELETE') THEN
        IF (OLD.name = 'Owner') THEN
            RAISE EXCEPTION 'The Owner role is system-protected and cannot be deleted.';
        END IF;
        RETURN OLD;
    END IF;

    -- Prevent modification of 'Owner' role name
    IF (TG_OP = 'UPDATE') THEN
        IF (OLD.name = 'Owner' AND NEW.name != 'Owner') THEN
            RAISE EXCEPTION 'The Owner role name is system-protected and cannot be modified.';
        END IF;
        RETURN NEW;
    END IF;

    RETURN NEW;
END;
$$;
