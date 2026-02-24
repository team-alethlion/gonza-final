-- Migration: Include Negative Stock in Valuation
-- Date: 2026-01-08
-- Purpose: Updates get_inventory_stats to count negative quantities towards total values.

CREATE OR REPLACE FUNCTION public.get_inventory_stats(p_location_id UUID)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_stats JSON;
BEGIN
    SELECT json_build_object(
        'totalCostValue', COALESCE(SUM(quantity * cost_price), 0),
        'totalStockValue', COALESCE(SUM(quantity * selling_price), 0),
        'lowStockCount', COUNT(*) FILTER (WHERE quantity > 0 AND quantity <= minimum_stock),
        'outOfStockCount', COUNT(*) FILTER (WHERE quantity <= 0)
    ) INTO v_stats
    FROM public.products
    WHERE location_id = p_location_id;

    RETURN v_stats;
END;
$$;
