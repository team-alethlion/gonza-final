-- Add receipt_number column to stock_history table to preserve receipt numbers even after sale deletion
ALTER TABLE stock_history 
ADD COLUMN receipt_number TEXT;