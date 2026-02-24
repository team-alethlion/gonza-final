-- Update RLS policies to allow deletion of default categories

-- Update sales_categories policy to allow deletion of default categories
DROP POLICY IF EXISTS "Users can delete their own sales categories except default" ON public.sales_categories;
CREATE POLICY "Users can delete their own sales categories" 
ON public.sales_categories 
FOR DELETE 
USING (auth.uid() = user_id);

-- Update expense_categories policy to allow deletion of default categories
DROP POLICY IF EXISTS "Users can delete their own expense categories" ON public.expense_categories;
CREATE POLICY "Users can delete their own expense categories" 
ON public.expense_categories 
FOR DELETE 
USING (auth.uid() = user_id);