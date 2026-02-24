-- Fix the function search path warning
ALTER FUNCTION public.update_updated_at_column() SET search_path = public;