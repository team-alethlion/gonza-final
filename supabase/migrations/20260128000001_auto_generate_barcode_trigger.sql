-- 1. Create a safer function to generate unique barcodes
CREATE OR REPLACE FUNCTION generate_unique_barcode(p_id UUID, p_item_number TEXT)
RETURNS TEXT AS $$
BEGIN
    -- Use a combination of 'B', item_number (sanitized), and a short hash of the UUID
    -- This ensures it's human-readable-ish but also globally unique
    RETURN UPPER(
        'B' || 
        COALESCE(REGEXP_REPLACE(p_item_number, '[^a-zA-Z0-9]', '', 'g'), '') || 
        SUBSTRING(MD5(p_id::text), 1, 6)
    );
END;
$$ LANGUAGE plpgsql;

-- 2. Update ALL existing products with new unique barcodes
UPDATE products 
SET barcode = generate_unique_barcode(id, item_number);

-- 3. Add the UNIQUE constraint
-- We use a partial unique index or just a unique constraint on (user_id, barcode) 
-- usually barcodes are unique per system, but let's do global unique if possible.
-- If the user wants absolute uniqueness, we do it on barcode column.
ALTER TABLE products ADD CONSTRAINT unique_product_barcode UNIQUE (barcode);

-- 4. Update the trigger function to use the same logic
CREATE OR REPLACE FUNCTION generate_product_barcode_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.barcode IS NULL OR NEW.barcode = '' THEN
        NEW.barcode := generate_unique_barcode(NEW.id, NEW.item_number);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 5. Re-create the trigger
DROP TRIGGER IF EXISTS tr_generate_product_barcode ON products;
CREATE TRIGGER tr_generate_product_barcode
BEFORE INSERT OR UPDATE OF item_number ON products
FOR EACH ROW
WHEN (NEW.barcode IS NULL OR NEW.barcode = '')
EXECUTE FUNCTION generate_product_barcode_trigger();
