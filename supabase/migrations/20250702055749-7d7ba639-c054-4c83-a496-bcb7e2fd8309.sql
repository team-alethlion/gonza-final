-- Add UPDATE and DELETE policies for stock_history table
CREATE POLICY "Users can update their own stock history" 
ON public.stock_history 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own stock history" 
ON public.stock_history 
FOR DELETE 
USING (auth.uid() = user_id);