
-- 20260107223000_add_inventory_rpc.sql
-- Function to get global inventory stats for a specific location
-- HARDENED: Explicitly isolated by location_id and follows negative-stock valuation rules.

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
        -- We include negatives as they represent a liability/loss in value
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

-- 20260107223000_add_inventory_rpc.sql (Final Fix)
DROP FUNCTION IF EXISTS public.get_stock_summary_report(UUID, TIMESTAMP, TIMESTAMP);
DROP FUNCTION IF EXISTS public.get_stock_summary_report(UUID, TIMESTAMPTZ, TIMESTAMPTZ);

CREATE OR REPLACE FUNCTION public.get_stock_summary_report(
    p_location_id UUID,
    p_start_date TIMESTAMPTZ,
    p_end_date TIMESTAMPTZ
)
RETURNS TABLE (
    "productId" UUID,
    "productName" TEXT,
    "itemNumber" TEXT,
    "imageUrl" TEXT,
    "costPrice" NUMERIC,
    "sellingPrice" NUMERIC,
    "category" TEXT,
    "openingStock" NUMERIC,
    "stockIn" NUMERIC,
    "itemsSold" NUMERIC,
    "transferOut" NUMERIC,
    "returnIn" NUMERIC,
    "returnOut" NUMERIC,
    "adjustmentsIn" NUMERIC,
    "adjustmentsOut" NUMERIC,
    "closingStock" NUMERIC,
    "revaluation" NUMERIC
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    RETURN QUERY
    WITH product_list AS (
        SELECT 
            p.id, 
            p.name, 
            p.item_number, 
            p.image_url, 
            p.cost_price, 
            p.selling_price, 
            p.category, 
            p.quantity
        FROM public.products p
        WHERE p.location_id = p_location_id
    ),
    opening_balances AS (
        SELECT DISTINCT ON (product_id)
            product_id,
            new_quantity as balance
        FROM public.stock_history
        WHERE location_id = p_location_id
          AND created_at < p_start_date
        ORDER BY product_id, created_at DESC, id DESC
    ),
    movements AS (
        SELECT 
            sh.product_id,
            -- Stock In: Purchases, Restocks, Initial Stock
            SUM(CASE 
                WHEN (sh.new_quantity > sh.previous_quantity) 
                AND (sh.change_reason ILIKE '%Purchase%' OR sh.change_reason ILIKE '%Restock%' OR sh.change_reason ILIKE '%Initial stock%') 
                THEN (sh.new_quantity - sh.previous_quantity) ELSE 0 END) as in_qty,
            -- Sales
            SUM(CASE 
                WHEN (sh.new_quantity < sh.previous_quantity) 
                AND (sh.change_reason ILIKE '%sale%') 
                THEN (sh.previous_quantity - sh.new_quantity) ELSE 0 END) as out_qty,
            -- Transfers
            SUM(CASE 
                WHEN (sh.new_quantity < sh.previous_quantity) 
                AND (sh.change_reason ILIKE '%Transfer Out%') 
                THEN (sh.previous_quantity - sh.new_quantity) ELSE 0 END) as t_out,
            -- Returns In
            SUM(CASE 
                WHEN (sh.new_quantity > sh.previous_quantity) AND (sh.change_reason ILIKE '%return%') THEN (sh.new_quantity - sh.previous_quantity) ELSE 0 END) as r_in,
            -- Returns Out
            SUM(CASE 
                WHEN (sh.new_quantity < sh.previous_quantity) AND (sh.change_reason ILIKE '%return%') THEN (sh.previous_quantity - sh.new_quantity) ELSE 0 END) as r_out,
                -- Manual In (Positive)
            SUM(CASE 
                WHEN (sh.new_quantity > sh.previous_quantity) 
                AND (sh.change_reason ILIKE '%Stock In%' OR sh.change_reason ILIKE '%Manual stock addition%' OR sh.change_reason ILIKE '%Sale Status/Qty Edit%')
                THEN (sh.new_quantity - sh.previous_quantity) ELSE 0 END) as adj_in,
            -- Manual Out (Negative)
            SUM(CASE 
                WHEN (sh.new_quantity < sh.previous_quantity) 
                AND (sh.change_reason ILIKE '%Stock Out%' OR sh.change_reason ILIKE '%Manual stock reduction%' OR sh.change_reason ILIKE '%Sale Status/Qty Edit%') 
                THEN (sh.previous_quantity - sh.new_quantity) ELSE 0 END) as adj_out
        FROM public.stock_history sh
        WHERE sh.location_id = p_location_id
          AND sh.created_at >= p_start_date
          AND sh.created_at <= p_end_date
        GROUP BY sh.product_id
    )
    SELECT 
        p.id as "productId",
        p.name as "productName",
        p.item_number as "itemNumber",
        p.image_url as "imageUrl",
        p.cost_price::NUMERIC as "costPrice",
        p.selling_price::NUMERIC as "sellingPrice",
        p.category as "category",
        COALESCE(ob.balance, 0)::NUMERIC as "openingStock",
        COALESCE(m.in_qty, 0)::NUMERIC as "stockIn",
        COALESCE(m.out_qty, 0)::NUMERIC as "itemsSold",
        COALESCE(m.t_out, 0)::NUMERIC as "transferOut",
        COALESCE(m.r_in, 0)::NUMERIC as "returnIn",
        COALESCE(m.r_out, 0)::NUMERIC as "returnOut",
        COALESCE(m.adj_in, 0)::NUMERIC as "adjustmentsIn",
        COALESCE(m.adj_out, 0)::NUMERIC as "adjustmentsOut",
        (COALESCE(ob.balance, 0) + COALESCE(m.in_qty, 0) + COALESCE(m.r_in, 0) + COALESCE(m.adj_in, 0) - COALESCE(m.out_qty, 0) - COALESCE(m.r_out, 0) - COALESCE(m.t_out, 0) - COALESCE(m.adj_out, 0))::NUMERIC as "closingStock",
        0::NUMERIC as "revaluation"
    FROM product_list p
    LEFT JOIN opening_balances ob ON p.id = ob.product_id
    LEFT JOIN movements m ON p.id = m.product_id
    WHERE (m.product_id IS NOT NULL OR COALESCE(ob.balance, 0) != 0 OR p.quantity != 0);
END;
$$;
