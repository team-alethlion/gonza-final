-- Create sales_categories table
CREATE TABLE public.sales_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  location_id UUID,
  name TEXT NOT NULL,
  is_default BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.sales_categories ENABLE ROW LEVEL SECURITY;

-- Create policies for sales_categories
CREATE POLICY "Users can view their own sales categories" 
ON public.sales_categories 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own sales categories" 
ON public.sales_categories 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own sales categories" 
ON public.sales_categories 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own sales categories except default" 
ON public.sales_categories 
FOR DELETE 
USING (auth.uid() = user_id AND is_default = false);

-- Add category_id column to sales table
ALTER TABLE public.sales ADD COLUMN category_id UUID;

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_sales_categories_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_sales_categories_updated_at
BEFORE UPDATE ON public.sales_categories
FOR EACH ROW
EXECUTE FUNCTION public.update_sales_categories_updated_at_column();