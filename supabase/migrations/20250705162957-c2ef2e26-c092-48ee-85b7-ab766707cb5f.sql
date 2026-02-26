-- Update the reset_business_location function to use UGX as default currency
CREATE OR REPLACE FUNCTION public.reset_business_location(location_uuid uuid, user_uuid uuid)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  -- Verify that the location belongs to the user
  IF NOT EXISTS (
    SELECT 1 FROM public.business_locations 
    WHERE id = location_uuid AND user_id = user_uuid
  ) THEN
    RAISE EXCEPTION 'Business location not found or access denied';
  END IF;

  -- Delete all data for this location in the correct order to handle foreign keys
  -- First delete installment payments that reference sales
  DELETE FROM public.installment_payments 
  WHERE sale_id IN (SELECT id FROM public.sales WHERE location_id = location_uuid);
  
  -- Delete cash transactions that reference cash accounts from this location
  DELETE FROM public.cash_transactions 
  WHERE account_id IN (SELECT id FROM public.cash_accounts WHERE location_id = location_uuid);
  
  -- Now delete cash transactions directly for this location
  DELETE FROM public.cash_transactions WHERE location_id = location_uuid;
  
  -- Delete stock history
  DELETE FROM public.stock_history WHERE location_id = location_uuid;
  
  -- Delete expenses (these might reference cash accounts, so delete before cash accounts)
  DELETE FROM public.expenses WHERE location_id = location_uuid;
  
  -- Delete carriage inwards
  DELETE FROM public.carriage_inwards WHERE location_id = location_uuid;
  
  -- Delete sales
  DELETE FROM public.sales WHERE location_id = location_uuid;
  
  -- Delete products
  DELETE FROM public.products WHERE location_id = location_uuid;
  
  -- Delete customers
  DELETE FROM public.customers WHERE location_id = location_uuid;
  
  -- Now safe to delete cash accounts
  DELETE FROM public.cash_accounts WHERE location_id = location_uuid;
  
  -- Delete tasks
  DELETE FROM public.tasks WHERE location_id = location_uuid;
  
  -- Delete sales goals
  DELETE FROM public.sales_goals WHERE location_id = location_uuid;
  
  -- Delete categories
  DELETE FROM public.product_categories WHERE location_id = location_uuid;
  DELETE FROM public.customer_categories WHERE location_id = location_uuid;
  DELETE FROM public.expense_categories WHERE location_id = location_uuid;
  DELETE FROM public.task_categories WHERE location_id = location_uuid;
  
  -- Delete notification data
  DELETE FROM public.notification_history WHERE location_id = location_uuid;
  DELETE FROM public.notification_preferences WHERE location_id = location_uuid;
  DELETE FROM public.push_subscriptions WHERE location_id = location_uuid;
  
  -- Reset product counter
  DELETE FROM public.product_counters WHERE location_id = location_uuid;
  
  -- Reset business settings to defaults with UGX currency
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
    'UGX',
    '{"payment_info": ""}'::jsonb
  );
  
  RETURN true;
END;
$function$;