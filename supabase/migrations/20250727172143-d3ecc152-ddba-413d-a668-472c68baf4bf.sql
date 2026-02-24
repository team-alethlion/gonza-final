-- Update products table to support decimal quantities
ALTER TABLE public.products 
ALTER COLUMN quantity TYPE numeric,
ALTER COLUMN minimum_stock TYPE numeric;

-- Update stock_history table to support decimal quantities
ALTER TABLE public.stock_history 
ALTER COLUMN previous_quantity TYPE numeric,
ALTER COLUMN new_quantity TYPE numeric;