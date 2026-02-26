-- Migration: Add Admin Access for Onboarding Data
-- Created: 2026-02-18

-- 1. Create system_admins table
CREATE TABLE IF NOT EXISTS public.system_admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT, -- cached for convenience
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id)
);

-- Index for UID
CREATE INDEX IF NOT EXISTS idx_system_admins_user ON public.system_admins(user_id);

-- 2. Enable RLS
ALTER TABLE public.system_admins ENABLE ROW LEVEL SECURITY;

-- 3. Policies for system_admins
-- Only system admins can see who else is an admin
CREATE POLICY "System admins can view other admins" ON public.system_admins
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.system_admins WHERE user_id = auth.uid()
        )
    );

-- 4. Update RLS policies for business_onboarding
-- Allow system admins to read ALL onboarding data
CREATE POLICY "System admins can view all onboarding data" ON public.business_onboarding
    FOR SELECT
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.system_admins WHERE user_id = auth.uid()
        )
    );

-- 5. Helper function to check if user is admin (optional but useful for RPC/UI)
CREATE OR REPLACE FUNCTION public.is_system_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.system_admins WHERE user_id = auth.uid()
    );
END;
$$;
