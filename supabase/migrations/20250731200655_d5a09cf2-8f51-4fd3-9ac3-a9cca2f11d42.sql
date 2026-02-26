-- Function to handle sales category deletion
CREATE OR REPLACE FUNCTION handle_sales_category_deletion()
RETURNS TRIGGER AS $$
BEGIN
  -- Update all sales that reference the deleted category to have no category
  UPDATE public.sales 
  SET category_id = NULL 
  WHERE category_id = OLD.id;
  
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for sales category deletion
CREATE TRIGGER on_sales_category_delete
  BEFORE DELETE ON public.sales_categories
  FOR EACH ROW
  EXECUTE FUNCTION handle_sales_category_deletion();