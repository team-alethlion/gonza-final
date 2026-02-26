-- Migration: Automate Owner Profile and Role Creation
-- Created: 2026-01-31

-- 1. Create function to handle new business location setup
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
BEGIN
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
        (SELECT COALESCE(email, 'owner@gonza.local') FROM auth.users WHERE id = NEW.user_id), 
        'owner', 
        owner_role_id, 
        '0000', 
        true, 
        NEW.user_id
    );

    RETURN NEW;
END;
$$;

-- 2. Create trigger to automate setup for NEW locations
DROP TRIGGER IF EXISTS on_business_location_created_setup ON public.business_locations;
CREATE TRIGGER on_business_location_created_setup
    AFTER INSERT ON public.business_locations
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_business_location();

-- 3. Sync script for EXISTING locations missing owner profiles
DO $$
DECLARE
    loc_record RECORD;
    existing_owner_profile_id UUID;
    owner_role_id UUID;
    manager_role_id UUID;
    staff_role_id UUID;
    user_email TEXT;
BEGIN
    FOR loc_record IN SELECT id, user_id FROM public.business_locations LOOP
        -- Check if roles exist for this location
        IF NOT EXISTS (SELECT 1 FROM public.business_roles WHERE business_location_id = loc_record.id) THEN
            -- Create Owner Role
            INSERT INTO public.business_roles (business_location_id, name, description, permissions)
            VALUES (loc_record.id, 'Owner', 'Full access to all modules and management', 
            '{"dashboard": ["view", "view_total_sales", "view_gross_profit", "view_total_expenses", "view_inventory_value", "view_sales_types"], "sales": ["view", "create", "edit", "delete", "refund"], "inventory": ["view", "create", "edit", "delete", "stock_adjustment", "view_cost_price", "view_profit", "view_selling_price"], "finance": ["view", "create", "edit", "delete", "manage_accounts"], "expenses": ["view", "create", "edit", "delete"], "customers": ["view", "manage"], "messages": ["view", "send"], "tasks": ["view", "manage"], "profiles": ["view", "manage"], "settings": ["view", "manage"]}')
            RETURNING id INTO owner_role_id;

            -- Create Manager Role
            INSERT INTO public.business_roles (business_location_id, name, description, permissions)
            VALUES (loc_record.id, 'Manager', 'Access to sales, inventory and reports', 
            '{"dashboard": ["view", "view_total_sales", "view_gross_profit", "view_total_expenses", "view_inventory_value", "view_sales_types"], "sales": ["view", "create", "edit", "refund"], "inventory": ["view", "create", "edit", "stock_adjustment"], "finance": ["view"], "expenses": ["view", "create", "edit", "delete"], "customers": ["view", "manage"], "messages": ["view", "send"], "tasks": ["view", "manage"], "profiles": ["view"], "settings": ["view"]}')
            RETURNING id INTO manager_role_id;

            -- Create Staff Role
            INSERT INTO public.business_roles (business_location_id, name, description, permissions)
            VALUES (loc_record.id, 'Staff', 'Basic sales and inventory access', 
            '{"dashboard": ["view", "view_total_sales", "view_sales_types"], "sales": ["view", "create"], "inventory": ["view"], "expenses": ["view", "create"], "customers": ["view"], "messages": ["view"], "tasks": ["view"]}')
            RETURNING id INTO staff_role_id;
        ELSE
            SELECT id INTO owner_role_id FROM public.business_roles WHERE business_location_id = loc_record.id AND name = 'Owner';
        END IF;

        -- Check if owner profile exists
        SELECT id INTO existing_owner_profile_id 
        FROM public.business_profiles 
        WHERE business_location_id = loc_record.id 
          AND (role = 'owner' OR created_by = loc_record.user_id)
        LIMIT 1;

        IF existing_owner_profile_id IS NULL THEN
            -- Get user email
            SELECT COALESCE(email, 'owner@gonza.local') INTO user_email FROM auth.users WHERE id = loc_record.user_id;

            -- Create Owner Profile
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
                loc_record.id, 
                'Owner', 
                user_email, 
                'owner', 
                owner_role_id, 
                '0000', 
                true, 
                loc_record.user_id
            );
        ELSE
            -- Ensure existing profile has the owner role_id if it's missing
            UPDATE public.business_profiles
            SET role_id = owner_role_id, role = 'owner'
            WHERE id = existing_owner_profile_id AND (role_id IS NULL OR role != 'owner');
        END IF;
    END LOOP;
END $$;
