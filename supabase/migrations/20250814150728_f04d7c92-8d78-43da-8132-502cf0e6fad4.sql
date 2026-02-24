-- Create a table to store receipt counters per location
CREATE TABLE public.receipt_counters (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  location_id UUID NOT NULL UNIQUE,
  next_number INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.receipt_counters ENABLE ROW LEVEL SECURITY;

-- Create policies for receipt counters
CREATE POLICY "Users can view their location receipt counters" 
ON public.receipt_counters 
FOR SELECT 
USING (location_id IN (
  SELECT id FROM public.business_locations 
  WHERE user_id = auth.uid()
));

CREATE POLICY "Users can insert their location receipt counters" 
ON public.receipt_counters 
FOR INSERT 
WITH CHECK (location_id IN (
  SELECT id FROM public.business_locations 
  WHERE user_id = auth.uid()
));

CREATE POLICY "Users can update their location receipt counters" 
ON public.receipt_counters 
FOR UPDATE 
USING (location_id IN (
  SELECT id FROM public.business_locations 
  WHERE user_id = auth.uid()
));

-- Create function to get next receipt number atomically
CREATE OR REPLACE FUNCTION public.get_next_receipt_number(location_uuid uuid)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  next_num INTEGER;
  formatted_number TEXT;
BEGIN
  -- Insert or update the counter for this location atomically
  INSERT INTO public.receipt_counters (location_id, next_number)
  VALUES (location_uuid, 2)
  ON CONFLICT (location_id)
  DO UPDATE SET 
    next_number = receipt_counters.next_number + 1,
    updated_at = now()
  RETURNING next_number - 1 INTO next_num;
  
  -- Format the number as 6-digit zero-padded string for receipt numbers
  formatted_number := LPAD(next_num::TEXT, 6, '0');
  
  RETURN formatted_number;
END;
$function$;