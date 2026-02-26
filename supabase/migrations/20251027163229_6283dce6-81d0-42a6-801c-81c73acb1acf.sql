-- Create business_locations table
CREATE TABLE IF NOT EXISTS public.business_locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on business_locations
ALTER TABLE public.business_locations ENABLE ROW LEVEL SECURITY;

-- RLS policies for business_locations
CREATE POLICY "Users can view their own business locations"
  ON public.business_locations FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own business locations"
  ON public.business_locations FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own business locations"
  ON public.business_locations FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own business locations"
  ON public.business_locations FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

-- Create customers table
CREATE TABLE IF NOT EXISTS public.customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  location_id UUID NOT NULL REFERENCES public.business_locations(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  phone_number TEXT,
  email TEXT,
  birthday DATE,
  gender TEXT,
  location TEXT,
  category_id UUID,
  notes TEXT,
  tags TEXT[],
  social_media JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on customers
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- RLS policies for customers
CREATE POLICY "Users can view their location customers"
  ON public.customers FOR SELECT
  TO authenticated
  USING (
    location_id IN (
      SELECT id FROM public.business_locations WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert customers to their locations"
  ON public.customers FOR INSERT
  TO authenticated
  WITH CHECK (
    location_id IN (
      SELECT id FROM public.business_locations WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their location customers"
  ON public.customers FOR UPDATE
  TO authenticated
  USING (
    location_id IN (
      SELECT id FROM public.business_locations WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete their location customers"
  ON public.customers FOR DELETE
  TO authenticated
  USING (
    location_id IN (
      SELECT id FROM public.business_locations WHERE user_id = auth.uid()
    )
  );

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_customers_location_id ON public.customers(location_id);
CREATE INDEX IF NOT EXISTS idx_customers_user_id ON public.customers(user_id);
CREATE INDEX IF NOT EXISTS idx_customers_full_name ON public.customers(full_name);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for customers updated_at
CREATE TRIGGER update_customers_updated_at
  BEFORE UPDATE ON public.customers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for business_locations updated_at
CREATE TRIGGER update_business_locations_updated_at
  BEFORE UPDATE ON public.business_locations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();