-- SQL Migration: Optimized Inventory Reconciliation and Deduplication
-- Date: 2026-01-08
-- Purpose: Deduplicate products, sync missing sales, and rebuild stock history chains.

SET statement_timeout = '5min';

-- ==========================================
-- STEP 1: DEDUPLICATE PRODUCTS WITHIN LOCATIONS
-- ==========================================
-- We merge products with the same name + location_id to prevent join multiplication.

DO $$
DECLARE
    r RECORD;
    master_id UUID;
    total_qty DECIMAL;
BEGIN
    -- Only process locations that actually have duplicates
    FOR r IN (
        SELECT name, location_id, count(*), MIN(id) as first_id
        FROM public.products
        GROUP BY name, location_id
        HAVING count(*) > 1
    ) LOOP
        -- Select the 'master' ID (latest updated or first created)
        SELECT id INTO master_id 
        FROM public.products 
        WHERE name = r.name AND location_id = r.location_id
        ORDER BY updated_at DESC, created_at ASC 
        LIMIT 1;

        -- Calculate total quantity from all duplicates
        SELECT SUM(quantity) INTO total_qty
        FROM public.products
        WHERE name = r.name AND location_id = r.location_id;

        -- Update master product with consolidated quantity
        -- Note: We only update this as a starting point; the re-chaining step will set the true value.
        UPDATE public.products 
        SET quantity = total_qty 
        WHERE id = master_id;

        -- Update stock history references to point to the master product
        UPDATE public.stock_history
        SET product_id = master_id
        WHERE product_id IN (
            SELECT id FROM public.products 
            WHERE name = r.name AND location_id = r.location_id AND id != master_id
        );

        -- Delete the duplicates
        DELETE FROM public.products
        WHERE name = r.name AND location_id = r.location_id AND id != master_id;
        
        RAISE NOTICE 'Merged duplicates for product % in location %', r.name, r.location_id;
    END LOOP;
END $$;

-- ==========================================
-- STEP 2: CLEANUP AUDIT NOISE
-- ==========================================
-- Remove failed audit entries that might be confusing the totals.
DELETE FROM public.stock_history
WHERE change_reason LIKE '%Audit%' 
   OR change_reason LIKE '%Auto-Restored%'
   OR change_reason LIKE '%Benchmarking%';

-- ==========================================
-- STEP 3: SYNC MISSING SALES
-- ==========================================
-- Find sales in the main table that aren't reflected in stock history and insert them.
INSERT INTO public.stock_history (
    user_id,
    product_id,
    location_id,
    change_amount, -- We use change_amount (delta) for simple re-chaining
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
JOIN public.products p ON (
    -- Strict ID match
    (CASE WHEN (item->>'productId') ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' 
          THEN (item->>'productId')::uuid = p.id 
          ELSE FALSE 
     END)
    OR 
    -- Fallback Name match (now safe because we deduplicated products above)
    ((item->>'productId' IS NULL OR NOT (item->>'productId' ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'))
     AND p.name = item->>'description' AND p.location_id = s.location_id)
)
WHERE s.payment_status != 'Quote'
  AND NOT EXISTS (
      SELECT 1 FROM public.stock_history sh 
      WHERE sh.product_id = p.id
        AND (sh.reference_id = s.id OR (sh.receipt_number = s.receipt_number AND sh.change_reason = 'Sale'))
  );

-- ==========================================
-- STEP 4: REBUILD STOCK HISTORY CHAINS
-- ==========================================
-- Recalculate 'balance_after' for every product sequentially.
DO $$
DECLARE
    target_location_id UUID;
BEGIN
    FOR target_location_id IN (SELECT id FROM public.business_locations) LOOP
        
        RAISE NOTICE 'Re-chaining Location: %', target_location_id;

        -- 1. Use a temporary running balance update
        WITH OrderedHistory AS (
            SELECT 
                id,
                product_id,
                -- We assume change_amount is the source of truth for the delta
                CASE 
                    WHEN change_amount IS NOT NULL THEN change_amount
                    ELSE (new_quantity - previous_quantity)
                END as delta,
                ROW_NUMBER() OVER (PARTITION BY product_id ORDER BY created_at ASC, id ASC) as seq
            FROM public.stock_history
            WHERE location_id = target_location_id
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

        -- 2. Sync final Product table quantities
        WITH FinalBalances AS (
            SELECT DISTINCT ON (product_id)
                product_id,
                balance_after
            FROM public.stock_history
            WHERE location_id = target_location_id
            ORDER BY product_id, created_at DESC, id DESC
        )
        UPDATE public.products p
        SET quantity = f.balance_after
        FROM FinalBalances f
        WHERE p.id = f.product_id;

    END LOOP;
END $$;
