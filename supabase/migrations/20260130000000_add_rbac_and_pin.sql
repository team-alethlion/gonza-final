-- Add RBAC and PIN support to business system

-- 1. Create business_roles table
CREATE TABLE IF NOT EXISTS public.business_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_location_id UUID REFERENCES public.business_locations(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    permissions JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_business_roles_location ON public.business_roles(business_location_id);

-- 2. Update business_profiles table
ALTER TABLE public.business_profiles 
ADD COLUMN IF NOT EXISTS pin TEXT DEFAULT '0000',
ADD COLUMN IF NOT EXISTS role_id UUID REFERENCES public.business_roles(id) ON DELETE SET NULL;

-- 3. Add check constraint for 4-digit PIN (optional, but good for data integrity)
-- Note: Using simple text check here, can be refined if needed.
ALTER TABLE public.business_profiles 
ADD CONSTRAINT check_pin_length CHECK (char_length(pin) = 4);

-- 4. Enable RLS on business_roles
ALTER TABLE public.business_roles ENABLE ROW LEVEL SECURITY;

-- 5. Policies for business_roles
-- Owners (main user_id) can do everything
CREATE POLICY "Owners can manage roles for their business" ON public.business_roles
    FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.business_locations
            WHERE id = business_location_id AND user_id = auth.uid()
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.business_locations
            WHERE id = business_location_id AND user_id = auth.uid()
        )
    );

-- Everyone in the business can read roles
CREATE POLICY "Members can read roles" ON public.business_roles
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.business_profiles
            WHERE business_location_id = business_roles.business_location_id 
            -- We don't check profile_id here because we need to read roles to assign them
            -- or to check permissions.
        )
        OR
        EXISTS (
            SELECT 1 FROM public.business_locations
            WHERE id = business_location_id AND user_id = auth.uid()
        )
    );

-- 6. Function to sync roles (Initial migration helper)
-- This is a one-time setup to create default roles for existing businesses
DO $$
DECLARE
    loc_record RECORD;
    owner_role_id UUID;
    manager_role_id UUID;
    staff_role_id UUID;
BEGIN
    FOR loc_record IN SELECT id FROM public.business_locations LOOP
        -- Create Owner Role
        INSERT INTO public.business_roles (business_location_id, name, description, permissions)
        VALUES (loc_record.id, 'Owner', 'Full access to all modules and management', 
        '{"sales": ["view", "create", "edit", "delete", "refund"], "inventory": ["view", "create", "edit", "delete", "stock_adjustment"], "finance": ["view", "manage_accounts"], "customers": ["view", "manage"], "messages": ["view", "send"], "tasks": ["view", "manage"], "profiles": ["view", "manage"], "settings": ["view", "manage"]}')
        RETURNING id INTO owner_role_id;

        -- Create Manager Role
        INSERT INTO public.business_roles (business_location_id, name, description, permissions)
        VALUES (loc_record.id, 'Manager', 'Access to sales, inventory and reports', 
        '{"sales": ["view", "create", "edit", "refund"], "inventory": ["view", "create", "edit", "stock_adjustment"], "finance": ["view"], "customers": ["view", "manage"], "messages": ["view", "send"], "tasks": ["view", "manage"], "profiles": ["view"], "settings": ["view"]}')
        RETURNING id INTO manager_role_id;

        -- Create Staff Role
        INSERT INTO public.business_roles (business_location_id, name, description, permissions)
        VALUES (loc_record.id, 'Staff', 'Basic sales and inventory access', 
        '{"sales": ["view", "create"], "inventory": ["view"], "customers": ["view"], "messages": ["view"], "tasks": ["view"]}')
        RETURNING id INTO staff_role_id;

        -- Update existing profiles for this business
        UPDATE public.business_profiles
        SET role_id = CASE 
            WHEN role = 'owner' THEN owner_role_id
            WHEN role = 'manager' THEN manager_role_id
            ELSE staff_role_id
        END,
        pin = '0000'
        WHERE business_location_id = loc_record.id;
    END LOOP;
END $$;
