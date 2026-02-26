-- Update the default currency value in business_settings table
ALTER TABLE public.business_settings ALTER COLUMN currency SET DEFAULT 'UGX';