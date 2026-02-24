-- Add barcode column to products table if it doesn't exist
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'products' AND COLUMN_NAME = 'barcode') THEN
        ALTER TABLE products ADD COLUMN barcode TEXT;
    END IF;
END $$;

-- Populate barcode for existing products if they are null
-- We use the item_number as the barcode for existing products, 
-- or a fallback if item_number is missing.
UPDATE products 
SET barcode = COALESCE(item_number, 'B' || UPPER(SUBSTRING(id::text, 1, 8)))
WHERE barcode IS NULL;

-- Add a unique constraint if desired, but skip for now to avoid issues with duplicates if items have same numbers
-- ALTER TABLE products ADD CONSTRAINT unique_product_barcode UNIQUE (user_id, barcode);
