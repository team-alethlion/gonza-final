
-- Drop all existing foreign key constraints first, then recreate with CASCADE

-- Drop existing foreign key constraints (some may not exist, so we use IF EXISTS)
ALTER TABLE cash_accounts DROP CONSTRAINT IF EXISTS cash_accounts_location_id_fkey;
ALTER TABLE cash_transactions DROP CONSTRAINT IF EXISTS cash_transactions_location_id_fkey;
ALTER TABLE products DROP CONSTRAINT IF EXISTS products_location_id_fkey;
ALTER TABLE sales DROP CONSTRAINT IF EXISTS sales_location_id_fkey;
ALTER TABLE customers DROP CONSTRAINT IF EXISTS customers_location_id_fkey;
ALTER TABLE expenses DROP CONSTRAINT IF EXISTS expenses_location_id_fkey;
ALTER TABLE carriage_inwards DROP CONSTRAINT IF EXISTS carriage_inwards_location_id_fkey;
ALTER TABLE product_categories DROP CONSTRAINT IF EXISTS product_categories_location_id_fkey;
ALTER TABLE customer_categories DROP CONSTRAINT IF EXISTS customer_categories_location_id_fkey;
ALTER TABLE expense_categories DROP CONSTRAINT IF EXISTS expense_categories_location_id_fkey;
ALTER TABLE task_categories DROP CONSTRAINT IF EXISTS task_categories_location_id_fkey;
ALTER TABLE tasks DROP CONSTRAINT IF EXISTS tasks_location_id_fkey;
ALTER TABLE sales_goals DROP CONSTRAINT IF EXISTS sales_goals_location_id_fkey;
ALTER TABLE stock_history DROP CONSTRAINT IF EXISTS stock_history_location_id_fkey;
ALTER TABLE business_settings DROP CONSTRAINT IF EXISTS business_settings_location_id_fkey;
ALTER TABLE notification_preferences DROP CONSTRAINT IF EXISTS notification_preferences_location_id_fkey;
ALTER TABLE notification_history DROP CONSTRAINT IF EXISTS notification_history_location_id_fkey;
ALTER TABLE push_subscriptions DROP CONSTRAINT IF EXISTS push_subscriptions_location_id_fkey;
ALTER TABLE product_counters DROP CONSTRAINT IF EXISTS product_counters_location_id_fkey;

-- Clean up orphaned data
UPDATE sales SET customer_id = NULL 
WHERE customer_id IS NOT NULL AND customer_id NOT IN (SELECT id FROM customers WHERE location_id IN (SELECT id FROM business_locations));

DELETE FROM customers 
WHERE location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM products 
WHERE location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM cash_accounts 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM cash_transactions 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM sales 
WHERE location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM expenses 
WHERE location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM carriage_inwards 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM product_categories 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM customer_categories 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM expense_categories 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM task_categories 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM tasks 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM sales_goals 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM stock_history 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM business_settings 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM notification_preferences 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM notification_history 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM push_subscriptions 
WHERE location_id IS NOT NULL AND location_id NOT IN (SELECT id FROM business_locations);

DELETE FROM product_counters 
WHERE location_id NOT IN (SELECT id FROM business_locations);

-- Now recreate all foreign key constraints with CASCADE deletion
ALTER TABLE products ADD CONSTRAINT products_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE cash_accounts ADD CONSTRAINT cash_accounts_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE cash_transactions ADD CONSTRAINT cash_transactions_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE sales ADD CONSTRAINT sales_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE customers ADD CONSTRAINT customers_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE expenses ADD CONSTRAINT expenses_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE carriage_inwards ADD CONSTRAINT carriage_inwards_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE product_categories ADD CONSTRAINT product_categories_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE customer_categories ADD CONSTRAINT customer_categories_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE expense_categories ADD CONSTRAINT expense_categories_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE task_categories ADD CONSTRAINT task_categories_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE tasks ADD CONSTRAINT tasks_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE sales_goals ADD CONSTRAINT sales_goals_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE stock_history ADD CONSTRAINT stock_history_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE business_settings ADD CONSTRAINT business_settings_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE notification_preferences ADD CONSTRAINT notification_preferences_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE notification_history ADD CONSTRAINT notification_history_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE push_subscriptions ADD CONSTRAINT push_subscriptions_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;

ALTER TABLE product_counters ADD CONSTRAINT product_counters_location_id_fkey 
  FOREIGN KEY (location_id) REFERENCES business_locations(id) ON DELETE CASCADE;
