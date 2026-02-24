-- Fix security vulnerabilities in database functions
-- Set search_path to public for all security definer functions

-- Fix get_next_item_number function
CREATE OR REPLACE FUNCTION public.get_next_item_number(location_uuid uuid)
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
DECLARE
  next_num INTEGER;
  formatted_number TEXT;
BEGIN
  -- Insert or update the counter for this location
  INSERT INTO public.product_counters (location_id, next_number)
  VALUES (location_uuid, 2)
  ON CONFLICT (location_id)
  DO UPDATE SET 
    next_number = product_counters.next_number + 1,
    updated_at = now()
  RETURNING next_number - 1 INTO next_num;
  
  -- Format the number as 4-digit zero-padded string
  formatted_number := LPAD(next_num::TEXT, 4, '0');
  
  RETURN formatted_number;
END;
$function$;

-- Fix create_default_location function
CREATE OR REPLACE FUNCTION public.create_default_location()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
BEGIN
  INSERT INTO public.business_locations (user_id, name, is_default)
  VALUES (NEW.id, 'Main Location', true);
  RETURN NEW;
END;
$function$;

-- Fix get_next_receipt_number function
CREATE OR REPLACE FUNCTION public.get_next_receipt_number(location_uuid uuid)
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
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

-- Fix get_user_default_location function
CREATE OR REPLACE FUNCTION public.get_user_default_location(user_uuid uuid)
 RETURNS uuid
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path = public
AS $function$
  SELECT id FROM public.business_locations 
  WHERE user_id = user_uuid AND is_default = true 
  LIMIT 1;
$function$;

-- Fix validate_recurrence_duration function
CREATE OR REPLACE FUNCTION public.validate_recurrence_duration()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = public
AS $function$
BEGIN
  IF NEW.is_recurring = true AND NEW.recurrence_end_date IS NOT NULL THEN
    IF NEW.recurrence_end_date > (NEW.due_date + INTERVAL '12 months') THEN
      RAISE EXCEPTION 'Recurring tasks cannot exceed 12 months duration';
    END IF;
  END IF;
  RETURN NEW;
END;
$function$;

-- Fix handle_updated_at function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Fix is_profile_owner function
CREATE OR REPLACE FUNCTION public.is_profile_owner(location_uuid uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path = public
AS $function$
  SELECT EXISTS (
    SELECT 1 
    FROM public.business_profiles 
    WHERE business_location_id = location_uuid 
      AND created_by = auth.uid() 
      AND role = 'owner'
      AND is_active = true
  );
$function$;

-- Fix update_modified_column function
CREATE OR REPLACE FUNCTION public.update_modified_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = public
AS $function$
BEGIN
   NEW.updated_at = now(); 
   RETURN NEW;
END;
$function$;

-- Fix get_current_user_profile_id function
CREATE OR REPLACE FUNCTION public.get_current_user_profile_id(location_uuid uuid)
 RETURNS uuid
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path = public
AS $function$
  SELECT id 
  FROM public.business_profiles 
  WHERE business_location_id = location_uuid 
    AND created_by = auth.uid() 
    AND is_active = true
  LIMIT 1;
$function$;

-- Fix ensure_single_default_location function
CREATE OR REPLACE FUNCTION public.ensure_single_default_location()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = public
AS $function$
BEGIN
  IF NEW.is_default = true THEN
    -- Set all other locations for this user to not default
    UPDATE public.business_locations 
    SET is_default = false 
    WHERE user_id = NEW.user_id AND id != NEW.id;
  END IF;
  
  RETURN NEW;
END;
$function$;

-- Fix handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
AS $function$
BEGIN
  INSERT INTO public.profiles (id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$function$;

-- Fix handle_sales_category_deletion function
CREATE OR REPLACE FUNCTION public.handle_sales_category_deletion()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = public
AS $function$
BEGIN
  -- Update all sales that reference the deleted category to have no category
  UPDATE public.sales 
  SET category_id = NULL 
  WHERE category_id = OLD.id;
  
  RETURN OLD;
END;
$function$;

-- Fix update_sales_categories_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_sales_categories_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Fix ensure_owner_exists function
CREATE OR REPLACE FUNCTION public.ensure_owner_exists()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = public
AS $function$
BEGIN
  -- If we're deleting or deactivating the last owner, prevent it
  IF (TG_OP = 'DELETE' OR (TG_OP = 'UPDATE' AND NEW.is_active = false)) THEN
    IF OLD.role = 'owner' THEN
      IF (SELECT COUNT(*) 
          FROM public.business_profiles 
          WHERE business_location_id = OLD.business_location_id 
            AND role = 'owner' 
            AND is_active = true 
            AND id != OLD.id) = 0 THEN
        RAISE EXCEPTION 'Cannot delete or deactivate the last owner of a business location';
      END IF;
    END IF;
  END IF;
  
  -- If we're inserting the first profile for a location, make it an owner
  IF TG_OP = 'INSERT' THEN
    IF (SELECT COUNT(*) 
        FROM public.business_profiles 
        WHERE business_location_id = NEW.business_location_id) = 0 THEN
      NEW.role = 'owner';
    END IF;
  END IF;
  
  IF TG_OP = 'DELETE' THEN
    RETURN OLD;
  ELSE
    RETURN NEW;
  END IF;
END;
$function$;

-- Fix reset_business_location function
CREATE OR REPLACE FUNCTION public.reset_business_location(location_uuid uuid, user_uuid uuid)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = public
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