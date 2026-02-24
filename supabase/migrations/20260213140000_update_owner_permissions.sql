-- Update Owner role permissions to include all new granular permissions
-- This ensures that existing Owner roles in the database align with the updated application logic

DO $$
DECLARE
    loc_record RECORD;
    owner_permissions JSONB;
BEGIN
    -- Define the full set of permissions for the Owner role
    owner_permissions := '{
        "dashboard": ["view", "view_total_sales", "view_gross_profit", "view_total_expenses", "view_inventory_value", "view_sales_types", "view_avg_price", "view_total_amount"], 
        "sales": ["view", "create", "edit", "delete", "refund"], 
        "inventory": ["view", "create", "edit", "delete", "stock_adjustment", "view_cost_price", "view_profit", "view_selling_price"], 
        "finance": ["view", "create", "edit", "manage_accounts"], 
        "expenses": ["view", "create", "edit", "delete"], 
        "customers": ["view", "create", "edit", "delete", "manage"], 
        "messages": ["view", "create", "edit", "delete", "send"], 
        "tasks": ["view", "create", "edit", "delete", "manage"], 
        "profiles": ["view", "manage"], 
        "settings": ["view", "manage"]
    }'::jsonb;

    -- Update all existing 'Owner' roles through the entire system
    UPDATE public.business_roles
    SET permissions = owner_permissions
    WHERE name = 'Owner';

    -- Also update the handle_new_business_location function to use these new permissions for future businesses
    -- We need to recreate the function with the updated JSON
END $$;

-- Re-run the function definition for handle_new_business_location to ensure new businesses get the correct permissions
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
    '{"dashboard": ["view", "view_total_sales", "view_gross_profit", "view_total_expenses", "view_inventory_value", "view_sales_types", "view_avg_price", "view_total_amount"], "sales": ["view", "create", "edit", "delete", "refund"], "inventory": ["view", "create", "edit", "delete", "stock_adjustment", "view_cost_price", "view_profit", "view_selling_price"], "finance": ["view", "create", "edit", "manage_accounts"], "expenses": ["view", "create", "edit", "delete"], "customers": ["view", "create", "edit", "delete", "manage"], "messages": ["view", "create", "edit", "delete", "send"], "tasks": ["view", "create", "edit", "delete", "manage"], "profiles": ["view", "manage"], "settings": ["view", "manage"]}')
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
