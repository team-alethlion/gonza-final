-- Migration: Platform Admin Security
-- Created: 2026-02-18

-- 1. Create platform_admins table
CREATE TABLE IF NOT EXISTS public.platform_admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id)
);

-- Index for fast lookup
CREATE INDEX IF NOT EXISTS idx_platform_admins_user ON public.platform_admins(user_id);

-- 2. Enable RLS
ALTER TABLE public.platform_admins ENABLE ROW LEVEL SECURITY;

-- 3. Policies for platform_admins
-- Only platform admins can see who else is an admin
CREATE POLICY "Platform admins can view other admins" ON public.platform_admins
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.platform_admins WHERE user_id = auth.uid()
        )
    );

-- 4. Update RLS policies for business_onboarding
-- Allow platform admins to read ALL onboarding data across all businesses
CREATE POLICY "Platform admins can view all onboarding records" ON public.business_onboarding
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.platform_admins WHERE user_id = auth.uid()
        )
    );

-- 5. Helper function to check if user is platform admin
CREATE OR REPLACE FUNCTION public.is_platform_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.platform_admins WHERE user_id = auth.uid()
    );
END;
$$;
