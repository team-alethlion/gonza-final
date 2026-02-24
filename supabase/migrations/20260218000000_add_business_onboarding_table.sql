-- Create business_onboarding table for one-time user onboarding setup
CREATE TABLE IF NOT EXISTS public.business_onboarding (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  location_id UUID NOT NULL REFERENCES public.business_locations(id) ON DELETE CASCADE,
  business_logo TEXT,
  business_name TEXT NOT NULL DEFAULT '',
  business_address TEXT NOT NULL DEFAULT '',
  business_phone TEXT NOT NULL DEFAULT '',
  business_email TEXT NOT NULL DEFAULT '',
  nature_of_business TEXT,
  business_size TEXT,
  completed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(location_id)
);

-- Enable Row Level Security
ALTER TABLE public.business_onboarding ENABLE ROW LEVEL SECURITY;

-- Users can only manage their own onboarding record
CREATE POLICY "Users can view own onboarding"
  ON public.business_onboarding
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own onboarding"
  ON public.business_onboarding
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own onboarding"
  ON public.business_onboarding
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own onboarding"
  ON public.business_onboarding
  FOR DELETE
  USING (auth.uid() = user_id);

-- Auto-update updated_at on row changes
CREATE TRIGGER handle_business_onboarding_updated_at
  BEFORE UPDATE ON public.business_onboarding
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Index for fast lookups by user and location
CREATE INDEX IF NOT EXISTS idx_business_onboarding_user_id ON public.business_onboarding(user_id);
CREATE INDEX IF NOT EXISTS idx_business_onboarding_location_id ON public.business_onboarding(location_id);
