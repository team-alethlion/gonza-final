-- Create requisitions table for storing purchase requisitions
CREATE TABLE public.requisitions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  location_id UUID,
  requisition_number TEXT NOT NULL,
  title TEXT NOT NULL,
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.requisitions ENABLE ROW LEVEL SECURITY;

-- Create policies for requisitions
CREATE POLICY "Users can view their own requisitions" 
ON public.requisitions 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own requisitions" 
ON public.requisitions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requisitions" 
ON public.requisitions 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own requisitions" 
ON public.requisitions 
FOR DELETE 
USING (auth.uid() = user_id);