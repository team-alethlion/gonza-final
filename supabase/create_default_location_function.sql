
-- Create function to add a default business location for new users
CREATE OR REPLACE FUNCTION public.create_default_location()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.business_locations (user_id, name, is_default)
  VALUES (NEW.id, 'Main Location', true);
  RETURN NEW;
END;
$$;

-- Create trigger to call the function when a new user is created
CREATE TRIGGER on_auth_user_created_add_location
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.create_default_location();
