-- Drop potential conflicting triggers that might be causing double inventory deduction
-- and incorrect timestamps (e.g. 3:00 AM / Midnight UTC).

-- Drop triggers on sales table
DROP TRIGGER IF EXISTS update_inventory_on_sale ON public.sales;
DROP TRIGGER IF EXISTS deduct_stock_on_sale ON public.sales;
DROP TRIGGER IF EXISTS update_stock_on_sale ON public.sales;

-- Drop triggers on products table
DROP TRIGGER IF EXISTS update_stock_history ON public.products;
DROP TRIGGER IF EXISTS track_stock_changes ON public.products;
DROP TRIGGER IF EXISTS log_stock_history ON public.products;

-- Drop associated functions
DROP FUNCTION IF EXISTS public.update_inventory_on_sale();
DROP FUNCTION IF EXISTS public.deduct_stock_on_sale();
DROP FUNCTION IF EXISTS public.update_stock_on_sale();
DROP FUNCTION IF EXISTS public.update_stock_history();
DROP FUNCTION IF EXISTS public.track_stock_changes();
DROP FUNCTION IF EXISTS public.log_stock_history();
