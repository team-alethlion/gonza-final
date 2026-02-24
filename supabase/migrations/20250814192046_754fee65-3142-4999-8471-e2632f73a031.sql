-- Create business_profiles table
CREATE TABLE public.business_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  business_location_id UUID NOT NULL,
  profile_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT,
  role TEXT NOT NULL DEFAULT 'staff',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(business_location_id, email)
);

-- Enable RLS
ALTER TABLE public.business_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for business_profiles
CREATE POLICY "Users can view profiles for their businesses"
ON public.business_profiles
FOR SELECT
USING (business_location_id IN (
  SELECT id FROM public.business_locations 
  WHERE user_id = auth.uid()
));

CREATE POLICY "Users can create profiles for their businesses"
ON public.business_profiles
FOR INSERT
WITH CHECK (
  business_location_id IN (
    SELECT id FROM public.business_locations 
    WHERE user_id = auth.uid()
  ) AND created_by = auth.uid()
);

CREATE POLICY "Users can update profiles for their businesses"
ON public.business_profiles
FOR UPDATE
USING (business_location_id IN (
  SELECT id FROM public.business_locations 
  WHERE user_id = auth.uid()
));

CREATE POLICY "Users can delete profiles for their businesses"
ON public.business_profiles
FOR DELETE
USING (business_location_id IN (
  SELECT id FROM public.business_locations 
  WHERE user_id = auth.uid()
));

-- Add profile tracking to activity_history table
ALTER TABLE public.activity_history 
ADD COLUMN profile_id UUID REFERENCES public.business_profiles(id) ON DELETE SET NULL,
ADD COLUMN profile_name TEXT;

-- Create trigger for updated_at
CREATE TRIGGER update_business_profiles_updated_at
BEFORE UPDATE ON public.business_profiles
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();