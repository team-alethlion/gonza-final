-- Add performance indexes for sales table queries
-- This migration optimizes the most common query patterns for sales data

-- Composite index for location-based queries with date ordering
-- Optimizes: SELECT * FROM sales WHERE location_id = ? ORDER BY created_at DESC
CREATE INDEX IF NOT EXISTS idx_sales_location_created 
ON public.sales(location_id, created_at DESC);

-- Index for date range filtering (analytics date filters)
-- Optimizes: SELECT * FROM sales WHERE date BETWEEN ? AND ?
CREATE INDEX IF NOT EXISTS idx_sales_date 
ON public.sales(date DESC);

-- Composite index for location + date range queries
-- Optimizes: SELECT * FROM sales WHERE location_id = ? AND date BETWEEN ? AND ?
CREATE INDEX IF NOT EXISTS idx_sales_location_date 
ON public.sales(location_id, date DESC);

-- Index for user-based queries
-- Optimizes: SELECT * FROM sales WHERE user_id = ?
CREATE INDEX IF NOT EXISTS idx_sales_user_id 
ON public.sales(user_id);

-- Index for payment status filtering
-- Optimizes: SELECT * FROM sales WHERE payment_status != 'Quote'
CREATE INDEX IF NOT EXISTS idx_sales_payment_status 
ON public.sales(payment_status);

-- Index for customer lookup
-- Optimizes: SELECT * FROM sales WHERE customer_id = ?
CREATE INDEX IF NOT EXISTS idx_sales_customer_id 
ON public.sales(customer_id) WHERE customer_id IS NOT NULL;

-- Partial index for category filtering (excludes NULL categories)
-- Optimizes: SELECT * FROM sales WHERE category_id = ?
CREATE INDEX IF NOT EXISTS idx_sales_category_id 
ON public.sales(category_id) WHERE category_id IS NOT NULL;

-- Comment explaining the sales indexes
COMMENT ON INDEX idx_sales_location_created IS 'Optimizes location-based queries with date ordering - primary dashboard query';
COMMENT ON INDEX idx_sales_date IS 'Optimizes date range filtering for analytics';
COMMENT ON INDEX idx_sales_location_date IS 'Optimizes location + date range queries';
COMMENT ON INDEX idx_sales_user_id IS 'Optimizes user-specific sales queries';
COMMENT ON INDEX idx_sales_payment_status IS 'Optimizes payment status filtering';
COMMENT ON INDEX idx_sales_customer_id IS 'Optimizes customer sales history lookup';
COMMENT ON INDEX idx_sales_category_id IS 'Optimizes category-based sales filtering';

-- ============================================================================
-- PRODUCTS TABLE INDEXES
-- ============================================================================

-- Composite index for location-based product queries
-- Optimizes: SELECT * FROM products WHERE location_id = ? ORDER BY created_at DESC
CREATE INDEX IF NOT EXISTS idx_products_location_created 
ON public.products(location_id, created_at DESC);

-- Index for user-based product queries
-- Optimizes: SELECT * FROM products WHERE user_id = ?
CREATE INDEX IF NOT EXISTS idx_products_user_id 
ON public.products(user_id);

-- Index for category filtering
-- Optimizes: SELECT * FROM products WHERE category = ?
CREATE INDEX IF NOT EXISTS idx_products_category 
ON public.products(category) WHERE category IS NOT NULL;

-- Comment explaining the product indexes
COMMENT ON INDEX idx_products_location_created IS 'Optimizes location-based product listing with pagination';
COMMENT ON INDEX idx_products_user_id IS 'Optimizes user-specific product queries';
COMMENT ON INDEX idx_products_category IS 'Optimizes category filtering';

-- ============================================================================
-- EXPENSES TABLE INDEXES
-- ============================================================================

-- Composite index for location + date queries (most common)
-- Optimizes: SELECT * FROM expenses WHERE location_id = ? AND date BETWEEN ? AND ?
CREATE INDEX IF NOT EXISTS idx_expenses_location_date 
ON public.expenses(location_id, date DESC);

-- Index for date range filtering
-- Optimizes: SELECT * FROM expenses WHERE date BETWEEN ? AND ?
CREATE INDEX IF NOT EXISTS idx_expenses_date 
ON public.expenses(date DESC);

-- Index for user-based expense queries
-- Optimizes: SELECT * FROM expenses WHERE user_id = ?
CREATE INDEX IF NOT EXISTS idx_expenses_user_id 
ON public.expenses(user_id);

-- Index for category filtering
-- Optimizes: SELECT * FROM expenses WHERE category = ?
CREATE INDEX IF NOT EXISTS idx_expenses_category 
ON public.expenses(category) WHERE category IS NOT NULL;

-- Index for cash account transactions
-- Optimizes: SELECT * FROM expenses WHERE cash_account_id = ?
CREATE INDEX IF NOT EXISTS idx_expenses_cash_account 
ON public.expenses(cash_account_id) WHERE cash_account_id IS NOT NULL;

-- Comment explaining the expense indexes
COMMENT ON INDEX idx_expenses_location_date IS 'Optimizes location + date range expense queries for analytics';
COMMENT ON INDEX idx_expenses_date IS 'Optimizes date range filtering';
COMMENT ON INDEX idx_expenses_user_id IS 'Optimizes user-specific expense queries';
COMMENT ON INDEX idx_expenses_category IS 'Optimizes expense category filtering';
COMMENT ON INDEX idx_expenses_cash_account IS 'Optimizes cash account expense tracking';

-- ============================================================================
-- CASH TRANSACTIONS TABLE INDEXES
-- ============================================================================

-- Composite index for cash account + date queries (most common)
-- Optimizes: SELECT * FROM cash_transactions WHERE account_id = ? ORDER BY date DESC
CREATE INDEX IF NOT EXISTS idx_cash_transactions_account_date 
ON public.cash_transactions(account_id, date DESC);

-- Index for location-based transaction queries
-- Optimizes: SELECT * FROM cash_transactions WHERE location_id = ?
CREATE INDEX IF NOT EXISTS idx_cash_transactions_location_id 
ON public.cash_transactions(location_id);

-- Index for transaction type filtering
-- Optimizes: SELECT * FROM cash_transactions WHERE transaction_type = ?
CREATE INDEX IF NOT EXISTS idx_cash_transactions_type 
ON public.cash_transactions(transaction_type);

-- Index for date range filtering
-- Optimizes: SELECT * FROM cash_transactions WHERE date BETWEEN ? AND ?
CREATE INDEX IF NOT EXISTS idx_cash_transactions_date 
ON public.cash_transactions(date DESC);

-- Comment explaining the cash transaction indexes
COMMENT ON INDEX idx_cash_transactions_account_date IS 'Optimizes cash account transaction history queries';
COMMENT ON INDEX idx_cash_transactions_location_id IS 'Optimizes location-based transaction queries';
COMMENT ON INDEX idx_cash_transactions_type IS 'Optimizes transaction type filtering';
COMMENT ON INDEX idx_cash_transactions_date IS 'Optimizes date range transaction filtering';

-- ============================================================================
-- INSTALLMENT PAYMENTS TABLE INDEXES
-- ============================================================================

-- Composite index for sale-based installment queries
-- Optimizes: SELECT * FROM installment_payments WHERE sale_id = ? ORDER BY payment_date
CREATE INDEX IF NOT EXISTS idx_installment_payments_sale_date 
ON public.installment_payments(sale_id, payment_date DESC);

-- Index for date range filtering
-- Optimizes: SELECT * FROM installment_payments WHERE payment_date BETWEEN ? AND ?
CREATE INDEX IF NOT EXISTS idx_installment_payments_date 
ON public.installment_payments(payment_date DESC);

-- Index for user-based payment queries
-- Optimizes: SELECT * FROM installment_payments WHERE user_id = ?
CREATE INDEX IF NOT EXISTS idx_installment_payments_user_id 
ON public.installment_payments(user_id);

-- Index for cash transaction lookup
-- Optimizes: SELECT * FROM installment_payments WHERE cash_transaction_id = ?
CREATE INDEX IF NOT EXISTS idx_installment_payments_cash_transaction 
ON public.installment_payments(cash_transaction_id) WHERE cash_transaction_id IS NOT NULL;

-- Comment explaining the installment payment indexes
COMMENT ON INDEX idx_installment_payments_sale_date IS 'Optimizes sale installment payment history queries';
COMMENT ON INDEX idx_installment_payments_date IS 'Optimizes date range payment filtering';
COMMENT ON INDEX idx_installment_payments_user_id IS 'Optimizes user-specific payment queries';
COMMENT ON INDEX idx_installment_payments_cash_transaction IS 'Optimizes cash transaction lookup for payments';

-- ============================================================================
-- REQUISITIONS TABLE INDEXES
-- ============================================================================

-- Composite index for location + status queries
-- Optimizes: SELECT * FROM requisitions WHERE location_id = ? AND status = ?
CREATE INDEX IF NOT EXISTS idx_requisitions_location_status 
ON public.requisitions(location_id, status);

-- Index for user-based requisition queries
-- Optimizes: SELECT * FROM requisitions WHERE user_id = ?
CREATE INDEX IF NOT EXISTS idx_requisitions_user_id 
ON public.requisitions(user_id);

-- Index for date filtering
-- Optimizes: SELECT * FROM requisitions WHERE created_at >= ? ORDER BY created_at DESC
CREATE INDEX IF NOT EXISTS idx_requisitions_created 
ON public.requisitions(created_at DESC);

-- Comment explaining the requisition indexes
COMMENT ON INDEX idx_requisitions_location_status IS 'Optimizes location + status requisition queries';
COMMENT ON INDEX idx_requisitions_user_id IS 'Optimizes user-specific requisition queries';
COMMENT ON INDEX idx_requisitions_created IS 'Optimizes recent requisition queries';

-- ============================================================================
-- MESSAGE TEMPLATES TABLE INDEXES
-- ============================================================================

-- Index for user-based template queries
-- Optimizes: SELECT * FROM message_templates WHERE user_id = ?
CREATE INDEX IF NOT EXISTS idx_message_templates_user_id 
ON public.message_templates(user_id);

-- Comment explaining the message template indexes
COMMENT ON INDEX idx_message_templates_user_id IS 'Optimizes user-specific message template queries';

-- ============================================================================
-- BUSINESS PROFILES TABLE INDEXES
-- ============================================================================

-- Index for business location lookup
-- Optimizes: SELECT * FROM business_profiles WHERE business_location_id = ?
CREATE INDEX IF NOT EXISTS idx_business_profiles_location 
ON public.business_profiles(business_location_id);

-- Comment explaining the business profile indexes
COMMENT ON INDEX idx_business_profiles_location IS 'Optimizes business location profile queries';
