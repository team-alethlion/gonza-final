-- SQL to protect the 'Owner' role AND specifically the unique Account Creator profile
-- Also fixes RLS to allow delegated administration by other owners

-- 1. Ensure business_locations has owner_email for easy lookup
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_locations' AND column_name = 'owner_email') THEN
        ALTER TABLE public.business_locations ADD COLUMN owner_email TEXT;
        
        -- Sync existing emails
        UPDATE public.business_locations l
        SET owner_email = u.email
        FROM auth.users u
        WHERE l.user_id = u.id;
    END IF;
END $$;

-- Update the setup trigger to populate owner_email
CREATE OR REPLACE FUNCTION public.handle_new_business_location()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    owner_role_id UUID;
    manager_role_id UUID;
    staff_role_id UUID;
    u_email TEXT;
BEGIN
    -- Get user email
    SELECT email INTO u_email FROM auth.users WHERE id = NEW.user_id;
    
    -- Store email in location for easier reference
    UPDATE public.business_locations SET owner_email = u_email WHERE id = NEW.id;

    -- Create Owner Role
    INSERT INTO public.business_roles (business_location_id, name, description, permissions)
    VALUES (NEW.id, 'Owner', 'Full access to all modules and management', 
    '{"dashboard": ["view", "view_total_sales", "view_gross_profit", "view_total_expenses", "view_inventory_value", "view_sales_types"], "sales": ["view", "create", "edit", "delete", "refund"], "inventory": ["view", "create", "edit", "delete", "stock_adjustment", "view_cost_price", "view_profit", "view_selling_price"], "finance": ["view", "create", "edit", "delete", "manage_accounts"], "expenses": ["view", "create", "edit", "delete"], "customers": ["view", "manage"], "messages": ["view", "send"], "tasks": ["view", "manage"], "profiles": ["view", "manage"], "settings": ["view", "manage"]}')
    RETURNING id INTO owner_role_id;

    -- Create Manager Role
    INSERT INTO public.business_roles (business_location_id, name, description, permissions)
    VALUES (NEW.id, 'Manager', 'Access to sales, inventory and reports', 
    '{"dashboard": ["view", "view_total_sales", "view_gross_profit", "view_total_expenses", "view_inventory_value", "view_sales_types"], "sales": ["view", "create", "edit", "refund"], "inventory": ["view", "create", "edit", "stock_adjustment"], "finance": ["view"], "expenses": ["view", "create", "edit", "delete"], "customers": ["view", "manage"], "messages": ["view", "send"], "tasks": ["view", "manage"], "profiles": ["view"], "settings": ["view"]}')
    RETURNING id INTO manager_role_id;

    -- Create Staff Role
    INSERT INTO public.business_roles (business_location_id, name, description, permissions)
    VALUES (NEW.id, 'Staff', 'Basic sales and inventory access', 
    '{"dashboard": ["view", "view_total_sales", "view_sales_types"], "sales": ["view", "create"], "inventory": ["view"], "expenses": ["view", "create"], "customers": ["view"], "messages": ["view"], "tasks": ["view"]}')
    RETURNING id INTO staff_role_id;

    -- Create Owner Profile for the location creator
    INSERT INTO public.business_profiles (
        business_location_id, 
        profile_name, 
        email, 
        role, 
        role_id, 
        pin, 
        is_active, 
        created_by
    )
    VALUES (
        NEW.id, 
        'Owner', 
        COALESCE(u_email, 'owner@gonza.local'), 
        'owner', 
        owner_role_id, 
        '0000', 
        true, 
        NEW.user_id
    );

    RETURN NEW;
END;
$$;

-- 2. Protect business_roles from deletion or name modification of 'Owner' role
CREATE OR REPLACE FUNCTION public.protect_owner_role()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
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

DROP TRIGGER IF EXISTS on_business_role_protect ON public.business_roles;
CREATE TRIGGER on_business_role_protect
    BEFORE UPDATE OR DELETE ON public.business_roles
    FOR EACH ROW
    EXECUTE FUNCTION public.protect_owner_role();

-- 3. Refine profile protection: Target the UNIQUE Account Creator by email
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
BEGIN
    -- Get the ID of the 'Owner' role and the owner's email for this location
    SELECT r.id, l.owner_email INTO owner_role_id, l_owner_email
    FROM public.business_roles r
    JOIN public.business_locations l ON l.id = r.business_location_id
    WHERE r.business_location_id = COALESCE(NEW.business_location_id, OLD.business_location_id) 
      AND r.name = 'Owner'
    LIMIT 1;

    -- UNIQUE CREATOR IDENTIFICATION: Check if this profile's email matches the location owner's email
    is_account_creator := (OLD.email = l_owner_email);

    -- IF ACCOUNT CREATOR: Strictly block ALL updates or deletion
    IF is_account_creator THEN
        IF (TG_OP = 'DELETE') THEN
            RAISE EXCEPTION 'The Account Creator profile is system-protected and cannot be deleted.';
        ELSIF (TG_OP = 'UPDATE') THEN
            RAISE EXCEPTION 'The Account Creator profile is system-protected and cannot be modified.';
        END IF;
    END IF;

    -- GENERAL PROTECTION: Ensure at least one active owner remains
    IF (TG_OP = 'DELETE' OR (TG_OP = 'UPDATE' AND NEW.is_active = false)) THEN
        -- Check if current profile is an owner
        IF (OLD.role = 'owner' OR OLD.role_id = owner_role_id) THEN
            -- Check if other active owners exist
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

    -- Prevent changing the owner status of the last owner
    IF (TG_OP = 'UPDATE' AND OLD.is_active = true AND NEW.is_active = true) THEN
        IF (OLD.role = 'owner' OR OLD.role_id = owner_role_id) THEN
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

    -- Auto-assign Owner role to the first profile of a location (legacy compatibility)
    IF TG_OP = 'INSERT' THEN
        IF NOT EXISTS (
            SELECT 1 
            FROM public.business_profiles 
            WHERE business_location_id = NEW.business_location_id
        ) THEN
            NEW.role := 'owner';
            NEW.role_id := owner_role_id;
        END IF;
    END IF;

    IF TG_OP = 'DELETE' THEN
        RETURN OLD;
    ELSE
        RETURN NEW;
    END IF;
END;
$$;

-- 4. Fix RLS to allow delegated administration
-- We need to check if the auth user has an ACTIVE profile with 'Owner' role for the location

CREATE OR REPLACE FUNCTION public.is_business_owner(location_uuid uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.business_profiles p
    JOIN public.business_roles r ON p.role_id = r.id
    WHERE p.business_location_id = location_uuid 
      AND p.created_by = auth.uid() 
      AND p.is_active = true
      AND (p.role = 'owner' OR r.name = 'Owner')
  );
$$;

-- Update Business Roles Policies
DROP POLICY IF EXISTS "Owners can manage roles for their business" ON public.business_roles;
CREATE POLICY "Owners can manage roles for their business" ON public.business_roles
    FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.business_locations
            WHERE id = business_location_id AND user_id = auth.uid()
        )
        OR 
        is_business_owner(business_location_id)
    );

-- Update Business Profiles Policies
-- Update creates and updates to allow secondary owners
DROP POLICY IF EXISTS "Users can update profiles for their businesses" ON public.business_profiles;
CREATE POLICY "Owners can update profiles for their business" ON public.business_profiles
    FOR UPDATE
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.business_locations
            WHERE id = business_location_id AND user_id = auth.uid()
        )
        OR 
        is_business_owner(business_location_id)
    );

DROP POLICY IF EXISTS "Users can create profiles for their businesses" ON public.business_profiles;
CREATE POLICY "Owners can create profiles for their business" ON public.business_profiles
    FOR INSERT
    TO authenticated
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.business_locations
            WHERE id = business_location_id AND user_id = auth.uid()
        )
        OR 
        is_business_owner(business_location_id)
    );

-- Apply triggers
DROP TRIGGER IF EXISTS on_business_role_protect ON public.business_roles;
CREATE TRIGGER on_business_role_protect
    BEFORE UPDATE OR DELETE ON public.business_roles
    FOR EACH ROW
    EXECUTE FUNCTION public.protect_owner_role();

DROP TRIGGER IF EXISTS ensure_owner_exists_trigger ON public.business_profiles;
DROP TRIGGER IF EXISTS on_business_profile_insert_owner ON public.business_profiles;

CREATE TRIGGER ensure_owner_exists_trigger
    BEFORE INSERT OR UPDATE OR DELETE ON public.business_profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.ensure_owner_exists_v2();
