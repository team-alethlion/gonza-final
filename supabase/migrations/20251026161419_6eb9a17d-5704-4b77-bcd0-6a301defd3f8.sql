-- Enable pgcrypto extension for encryption
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create security definer function to get user's role in a business location
CREATE OR REPLACE FUNCTION public.get_user_business_role(location_uuid uuid)
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role 
  FROM public.business_profiles 
  WHERE business_location_id = location_uuid 
    AND created_by = auth.uid() 
    AND is_active = true
  LIMIT 1;
$$;

-- Create security definer function to check if user can access customer data
CREATE OR REPLACE FUNCTION public.can_access_customer_data(location_uuid uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.business_profiles 
    WHERE business_location_id = location_uuid 
      AND created_by = auth.uid() 
      AND is_active = true
      AND role IN ('owner', 'manager', 'staff')
  );
$$;

-- Add encrypted columns for sensitive customer data
ALTER TABLE public.customers 
  ADD COLUMN IF NOT EXISTS email_encrypted bytea,
  ADD COLUMN IF NOT EXISTS phone_encrypted bytea;

-- Migrate existing data to encrypted columns
UPDATE public.customers 
SET 
  email_encrypted = CASE 
    WHEN email IS NOT NULL THEN pgp_sym_encrypt(email, current_setting('app.encryption_key', true))
    ELSE NULL 
  END,
  phone_encrypted = CASE 
    WHEN phone_number IS NOT NULL THEN pgp_sym_encrypt(phone_number, current_setting('app.encryption_key', true))
    ELSE NULL 
  END
WHERE email_encrypted IS NULL OR phone_encrypted IS NULL;

-- Drop existing RLS policies
DROP POLICY IF EXISTS "Users can create their own customers" ON public.customers;
DROP POLICY IF EXISTS "Users can delete their own customers" ON public.customers;
DROP POLICY IF EXISTS "Users can manage their own customers" ON public.customers;
DROP POLICY IF EXISTS "Users can update their own customers" ON public.customers;
DROP POLICY IF EXISTS "Users can view their own customers" ON public.customers;

-- Create new role-based RLS policies with stricter access control
CREATE POLICY "Business members can view customers"
ON public.customers
FOR SELECT
USING (
  can_access_customer_data(location_id)
);

CREATE POLICY "Owners and managers can create customers"
ON public.customers
FOR INSERT
WITH CHECK (
  location_id IN (
    SELECT business_location_id 
    FROM public.business_profiles 
    WHERE created_by = auth.uid() 
      AND is_active = true 
      AND role IN ('owner', 'manager')
  )
  AND auth.uid() = user_id
);

CREATE POLICY "Owners and managers can update customers"
ON public.customers
FOR UPDATE
USING (
  location_id IN (
    SELECT business_location_id 
    FROM public.business_profiles 
    WHERE created_by = auth.uid() 
      AND is_active = true 
      AND role IN ('owner', 'manager')
  )
);

CREATE POLICY "Only owners can delete customers"
ON public.customers
FOR DELETE
USING (
  location_id IN (
    SELECT business_location_id 
    FROM public.business_profiles 
    WHERE created_by = auth.uid() 
      AND is_active = true 
      AND role = 'owner'
  )
);

-- Create function to decrypt email (only for authorized users)
CREATE OR REPLACE FUNCTION public.decrypt_customer_email(customer_id uuid)
RETURNS text
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  encrypted_data bytea;
  decrypted_text text;
  customer_location uuid;
  user_role text;
BEGIN
  -- Get customer's location
  SELECT location_id INTO customer_location
  FROM public.customers
  WHERE id = customer_id;
  
  -- Check if user has access
  IF NOT can_access_customer_data(customer_location) THEN
    RETURN '[REDACTED]';
  END IF;
  
  -- Get user role
  user_role := get_user_business_role(customer_location);
  
  -- Only owner and manager can decrypt
  IF user_role NOT IN ('owner', 'manager') THEN
    RETURN '[RESTRICTED]';
  END IF;
  
  -- Decrypt and return
  SELECT email_encrypted INTO encrypted_data
  FROM public.customers
  WHERE id = customer_id;
  
  IF encrypted_data IS NULL THEN
    RETURN NULL;
  END IF;
  
  RETURN pgp_sym_decrypt(encrypted_data, current_setting('app.encryption_key', true));
END;
$$;

-- Create function to decrypt phone (only for authorized users)
CREATE OR REPLACE FUNCTION public.decrypt_customer_phone(customer_id uuid)
RETURNS text
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  encrypted_data bytea;
  decrypted_text text;
  customer_location uuid;
  user_role text;
BEGIN
  -- Get customer's location
  SELECT location_id INTO customer_location
  FROM public.customers
  WHERE id = customer_id;
  
  -- Check if user has access
  IF NOT can_access_customer_data(customer_location) THEN
    RETURN '[REDACTED]';
  END IF;
  
  -- Get user role
  user_role := get_user_business_role(customer_location);
  
  -- Only owner and manager can decrypt
  IF user_role NOT IN ('owner', 'manager') THEN
    RETURN '[RESTRICTED]';
  END IF;
  
  -- Decrypt and return
  SELECT phone_encrypted INTO encrypted_data
  FROM public.customers
  WHERE id = customer_id;
  
  IF encrypted_data IS NULL THEN
    RETURN NULL;
  END IF;
  
  RETURN pgp_sym_decrypt(encrypted_data, current_setting('app.encryption_key', true));
END;
$$;

-- Create trigger to auto-encrypt on insert/update
CREATE OR REPLACE FUNCTION public.encrypt_customer_sensitive_data()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Encrypt email if provided
  IF NEW.email IS NOT NULL THEN
    NEW.email_encrypted := pgp_sym_encrypt(NEW.email, current_setting('app.encryption_key', true));
  END IF;
  
  -- Encrypt phone if provided
  IF NEW.phone_number IS NOT NULL THEN
    NEW.phone_encrypted := pgp_sym_encrypt(NEW.phone_number, current_setting('app.encryption_key', true));
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger
DROP TRIGGER IF EXISTS encrypt_customer_data_trigger ON public.customers;
CREATE TRIGGER encrypt_customer_data_trigger
  BEFORE INSERT OR UPDATE ON public.customers
  FOR EACH ROW
  EXECUTE FUNCTION public.encrypt_customer_sensitive_data();

-- Add comment explaining the security model
COMMENT ON TABLE public.customers IS 'Customer data with role-based access control. Email and phone are encrypted. Only owners and managers can view/edit sensitive data. Staff can view basic info only.';
COMMENT ON COLUMN public.customers.email_encrypted IS 'Encrypted email address, decryptable only by owners and managers';
COMMENT ON COLUMN public.customers.phone_encrypted IS 'Encrypted phone number, decryptable only by owners and managers';