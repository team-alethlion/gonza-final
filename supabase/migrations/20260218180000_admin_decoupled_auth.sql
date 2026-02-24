-- Migration: Decoupled Platform Admin Authentication
-- Created: 2026-02-18

-- 1. Enable pgcrypto for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 2. Create platform_super_admins table (Independent of auth.users)
CREATE TABLE IF NOT EXISTS public.platform_super_admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable RLS (Strict: no one can read/write directly via standard API)
ALTER TABLE public.platform_super_admins ENABLE ROW LEVEL SECURITY;

-- 4. Auth RPC: Verify Credentials
-- Returns TRUE if credentials match, FALSE otherwise
CREATE OR REPLACE FUNCTION public.verify_platform_admin(p_username TEXT, p_password TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 
        FROM public.platform_super_admins 
        WHERE username = p_username 
        AND password_hash = crypt(p_password, password_hash)
    );
END;
$$;

-- 5. Data RPC: Fetch Onboarding Data securely
-- Only returns data if credentials are valid
CREATE OR REPLACE FUNCTION public.get_platform_onboarding_data(p_username TEXT, p_password TEXT)
RETURNS SETOF public.business_onboarding
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- First verify credentials
    IF EXISTS (
        SELECT 1 
        FROM public.platform_super_admins 
        WHERE username = p_username 
        AND password_hash = crypt(p_password, password_hash)
    ) THEN
        -- If valid, return all data
        RETURN QUERY SELECT * FROM public.business_onboarding ORDER BY created_at DESC;
    ELSE
        -- If invalid, return nothing
        RETURN;
    END IF;
END;
$$;

-- 6. Helper: Function to create an admin (since it's decoupled, we need a way to insert)
-- Usage: SELECT public.create_platform_admin('admin', 'password123');
CREATE OR REPLACE FUNCTION public.create_platform_admin(p_username TEXT, p_password TEXT)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_id UUID;
BEGIN
    INSERT INTO public.platform_super_admins (username, password_hash)
    VALUES (p_username, crypt(p_password, gen_salt('bf')))
    RETURNING id INTO v_id;
    RETURN v_id;
END;
$$;
