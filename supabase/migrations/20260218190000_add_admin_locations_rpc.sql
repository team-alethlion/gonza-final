-- Migration: Add RPC for platform admin to fetch all business locations for a user
-- Created: 2026-02-18

CREATE OR REPLACE FUNCTION public.get_platform_business_locations(p_username TEXT, p_password TEXT, p_user_id UUID)
RETURNS TABLE (
    id UUID,
    name TEXT,
    address TEXT,
    created_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ,
    is_default BOOLEAN
) 
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
        -- If valid, return locations for that user
        RETURN QUERY 
        SELECT bl.id, bl.name, bl.address, bl.created_at, bl.updated_at, bl.is_default
        FROM public.business_locations bl
        WHERE bl.user_id = p_user_id 
        ORDER BY bl.is_default DESC, bl.created_at DESC;
    ELSE
        -- If invalid, return nothing
        RETURN;
    END IF;
END;
$$;
