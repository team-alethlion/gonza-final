
-- Create a function to reset all data for a specific business location
CREATE OR REPLACE FUNCTION public.reset_business_location(location_uuid uuid, user_uuid uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Verify that the location belongs to the user
  IF NOT EXISTS (
    SELECT 1 FROM public.business_locations 
    WHERE id = location_uuid AND user_id = user_uuid
  ) THEN
    RAISE EXCEPTION 'Business location not found or access denied';
  END IF;

  -- Delete all data for this location in the correct order to handle foreign keys
  DELETE FROM public.installment_payments 
  WHERE sale_id IN (SELECT id FROM public.sales WHERE location_id = location_uuid);
  
  DELETE FROM public.stock_history WHERE location_id = location_uuid;
  DELETE FROM public.cash_transactions WHERE location_id = location_uuid;
  DELETE FROM public.expenses WHERE location_id = location_uuid;
  DELETE FROM public.carriage_inwards WHERE location_id = location_uuid;
  DELETE FROM public.sales WHERE location_id = location_uuid;
  DELETE FROM public.products WHERE location_id = location_uuid;
  DELETE FROM public.customers WHERE location_id = location_uuid;
  DELETE FROM public.cash_accounts WHERE location_id = location_uuid;
  DELETE FROM public.tasks WHERE location_id = location_uuid;
  DELETE FROM public.sales_goals WHERE location_id = location_uuid;
  DELETE FROM public.product_categories WHERE location_id = location_uuid;
  DELETE FROM public.customer_categories WHERE location_id = location_uuid;
  DELETE FROM public.expense_categories WHERE location_id = location_uuid;
  DELETE FROM public.task_categories WHERE location_id = location_uuid;
  DELETE FROM public.notification_history WHERE location_id = location_uuid;
  DELETE FROM public.notification_preferences WHERE location_id = location_uuid;
  DELETE FROM public.push_subscriptions WHERE location_id = location_uuid;
  
  -- Reset product counter
  DELETE FROM public.product_counters WHERE location_id = location_uuid;
  
  -- Reset business settings to defaults
  DELETE FROM public.business_settings WHERE location_id = location_uuid;
  INSERT INTO public.business_settings (
    user_id, 
    location_id, 
    business_name, 
    business_address, 
    business_phone, 
    business_email, 
    currency,
    metadata
  ) VALUES (
    user_uuid,
    location_uuid,
    'Your Business Name',
    'Your Business Address',
    '(123) 456-7890',
    'support@yourbusiness.com',
    'USD',
    '{"payment_info": ""}'::jsonb
  );
  
  RETURN true;
END;
$$;
