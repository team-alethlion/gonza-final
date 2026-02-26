-- Create activity_history table for tracking all user activities
CREATE TABLE public.activity_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  location_id UUID NOT NULL,
  activity_type TEXT NOT NULL CHECK (activity_type IN ('CREATE', 'UPDATE', 'DELETE')),
  module TEXT NOT NULL CHECK (module IN ('SALES', 'INVENTORY', 'EXPENSES', 'FINANCE', 'CUSTOMERS', 'TASKS')),
  entity_type TEXT NOT NULL,
  entity_id UUID,
  entity_name TEXT NOT NULL,
  description TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.activity_history ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own activity history" 
ON public.activity_history 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own activity history" 
ON public.activity_history 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create index for better performance
CREATE INDEX idx_activity_history_user_location ON public.activity_history(user_id, location_id);
CREATE INDEX idx_activity_history_created_at ON public.activity_history(created_at DESC);
CREATE INDEX idx_activity_history_module ON public.activity_history(module);
CREATE INDEX idx_activity_history_entity_type ON public.activity_history(entity_type);