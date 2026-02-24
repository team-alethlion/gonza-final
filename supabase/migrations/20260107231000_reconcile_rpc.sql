-- 20260107231000_reconcile_rpc.sql
-- Optimized reconciliation RPC for Supabase.
-- This version is hardened to prevent stock leakage and valuation doubling.

CREATE OR REPLACE FUNCTION public.reconcile_inventory(p_location_id UUID)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_start_time TIMESTAMP := clock_timestamp();
    v_affected_products INTEGER := 0;
    v_sales_synced INTEGER := 0;
BEGIN
    -- 1. Increase timeout for this session
    SET LOCAL statement_timeout = '60s';

    -- 2. Clean up stock history: Purge all adjustments and manual edits to restore pure valuation
    -- We only keep: Sales, Purchases/Stock In, and Returns.
    DELETE FROM public.stock_history
    WHERE location_id = p_location_id
      AND NOT (
          change_reason ILIKE '%Sale%' OR 
          change_reason ILIKE '%Purchase%' OR 
          change_reason ILIKE '%Stock In%' OR 
          change_reason ILIKE '%Restock%' OR 
          change_reason ILIKE '%Return%' OR
          change_reason ILIKE '%Initial stock%'
      );

    -- 3. SYNC MISSING SALES
    -- Uses DISTINCT ON to prevent multiplying rows if duplicates exist in products.
    INSERT INTO public.stock_history (
        user_id,
        product_id,
        location_id,
        change_amount,
        change_reason,
        reference_id,
        receipt_number,
        created_at,
        change_type
    )
    SELECT 
        s.user_id,
        p.id,
        s.location_id,
        - ( (item->>'quantity')::DECIMAL ),
        'Sale',
        s.id,
        s.receipt_number,
        s.created_at,
        'reduction'
    FROM public.sales s
    CROSS JOIN LATERAL jsonb_array_elements(CASE WHEN jsonb_typeof(s.items) = 'array' THEN s.items ELSE '[]'::jsonb END) AS item
    JOIN (
        SELECT DISTINCT ON (name, location_id) id, name, location_id
        FROM public.products
        WHERE location_id = p_location_id
        ORDER BY name, location_id, updated_at DESC
    ) p ON (
        -- Strict ID match check
        (CASE WHEN (item->>'productId') ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' 
              THEN (item->>'productId')::uuid = p.id 
              ELSE FALSE 
         END)
        OR 
        -- Fallback Name match
        ((item->>'productId' IS NULL OR NOT (item->>'productId' ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'))
         AND LOWER(TRIM(p.name)) = LOWER(TRIM(item->>'description')))
    )
    WHERE s.location_id = p_location_id
      AND s.payment_status != 'Quote'
      AND NOT EXISTS (
          SELECT 1 FROM public.stock_history sh 
          WHERE sh.product_id = p.id
            AND (sh.reference_id = s.id OR (sh.receipt_number = s.receipt_number AND sh.change_reason = 'Sale'))
      );

    GET DIAGNOSTICS v_sales_synced = ROW_COUNT;

    -- 4. RE-CHAIN STOCK HISTORY
    -- Optimized set-based balance recalculation
    WITH OrderedHistory AS (
        SELECT 
            id,
            product_id,
            CASE 
                WHEN change_amount IS NOT NULL THEN change_amount
                ELSE (new_quantity - previous_quantity)
            END as delta,
            ROW_NUMBER() OVER (PARTITION BY product_id ORDER BY created_at ASC, id ASC) as seq
        FROM public.stock_history
        WHERE location_id = p_location_id
    ),
    RunningBalances AS (
        SELECT 
            id,
            SUM(delta) OVER (PARTITION BY product_id ORDER BY seq) as calculated_balance
        FROM OrderedHistory
    )
    UPDATE public.stock_history h
    SET balance_after = b.calculated_balance,
        previous_quantity = b.calculated_balance - 
            (CASE WHEN h.change_amount IS NOT NULL THEN h.change_amount ELSE (h.new_quantity - h.previous_quantity) END),
        new_quantity = b.calculated_balance
    FROM RunningBalances b
    WHERE h.id = b.id;

    -- 5. SYNC FINAL PRODUCT QUANTITIES
    WITH final_stats AS (
        SELECT DISTINCT ON (product_id)
            product_id,
            new_quantity
        FROM public.stock_history
        WHERE location_id = p_location_id
        ORDER BY product_id, created_at DESC, id DESC
    )
    UPDATE public.products p
    SET quantity = fs.new_quantity
    FROM final_stats fs
    WHERE p.id = fs.product_id
      AND p.location_id = p_location_id; 

    GET DIAGNOSTICS v_affected_products = ROW_COUNT;

    RETURN json_build_object(
        'status', 'success',
        'salesSynced', v_sales_synced,
        'productsUpdated', v_affected_products,
        'executionTime', (clock_timestamp() - v_start_time)
    );
END;
$$;
