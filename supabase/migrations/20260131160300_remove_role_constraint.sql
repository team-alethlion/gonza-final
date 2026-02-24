-- Remove the strict check constraint on roles to allow for custom roles
ALTER TABLE public.business_profiles DROP CONSTRAINT IF EXISTS business_profiles_role_check;
