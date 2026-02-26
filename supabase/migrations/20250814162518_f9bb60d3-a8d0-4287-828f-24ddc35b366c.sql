-- Add password protection field to business_locations table
ALTER TABLE public.business_locations 
ADD COLUMN switch_password_hash text;

-- Add comment to explain the column
COMMENT ON COLUMN public.business_locations.switch_password_hash IS 'Bcrypt hashed password for business switching protection (optional)';