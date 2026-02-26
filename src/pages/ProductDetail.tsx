
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/auth/AuthProvider';
import { useProducts } from '@/hooks/useProducts';
import { useStockHistory } from '@/hooks/useStockHistory';
import { useStockSummaryData } from '@/hooks/useStockSummaryData';
import { Product } from '@/types';
import { toast } from 'sonner';
import ProductDetails from '@/components/inventory/ProductDetails';
import ProductStockHistory from '@/components/inventory/ProductStockHistory';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { products, isLoading, loadProducts, refetch } = useProducts(user?.id, 10000); // Load all products
  const [product, setProduct] = useState<Product | null>(null);
  const { stockHistory, isLoading: isLoadingHistory, loadStockHistory, updateStockHistoryEntry, deleteStockHistoryEntry, recalculateProductStock } = useStockHistory(user?.id, id);
  const { clearAllLocationCaches } = useStockSummaryData({ from: undefined, to: undefined });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const loadProductData = async () => {
    if (id) {
      setIsRefreshing(true);
      const { data: refetchedData } = await refetch();
      const fetchedProducts = refetchedData?.products || [];

      const foundProduct = fetchedProducts.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        toast.error('Product not found');
        navigate('/inventory');
      }

      setIsRefreshing(false);
    }
  };

  // Handle stock update callback - refresh both product and stock history
  const handleStockUpdate = async () => {
    await loadProductData();
    if (id && loadStockHistory) {
      await loadStockHistory();
    }
    setRefreshKey(prev => prev + 1);
  };

  // Stock history handlers
  const handleEditStockHistory = async (entryId: string, newQuantity: number, newReason: string, newDate?: Date) => {
    const success = await updateStockHistoryEntry(entryId, newQuantity, newReason, newDate);
    if (success) {
      // Clear stock summary cache to ensure data consistency
      clearAllLocationCaches();
      // updateStockHistoryEntry already recalculates the entire stock chain
      // Just refresh the UI data
      await Promise.all([
        loadStockHistory(),
        loadProductData()
      ]);
    }
    return success;
  };

  const handleDeleteStockHistory = async (entryId: string) => {
    const success = await deleteStockHistoryEntry(entryId);
    if (success) {
      // Clear stock summary cache to ensure data consistency
      clearAllLocationCaches();
      await Promise.all([
        recalculateProductStock(product!.id),
        loadStockHistory(),
        loadProductData()
      ]);
    }
    return success;
  };

  useEffect(() => {
    if (!isLoading && products.length > 0 && id) {
      const foundProduct = products.find(p => p.id === id);

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        toast.error('Product not found');
        navigate('/inventory');
      }
    }
  }, [id, products, isLoading, navigate]);

  // Listen for stock updates from other components
  useEffect(() => {
    const handleStockUpdateEvent = () => {
      console.log('Stock updated, refreshing product data');
      handleStockUpdate();
    };

    window.addEventListener('stock-updated', handleStockUpdateEvent);

    return () => {
      window.removeEventListener('stock-updated', handleStockUpdateEvent);
    };
  }, [handleStockUpdate]);

  if (isLoading || isRefreshing || !product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <img
          src="/lovable-uploads/7f7549a3-e9df-4762-b8b9-8e041e34f55d.png"
          alt="Loading"
          className="w-16 h-16 animate-spin"
        />
        <p className="text-muted-foreground">Loading product data...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Product Details Section */}
      <ProductDetails
        key={`details-${refreshKey}`}
        product={product}
        stockHistory={stockHistory}
        isLoadingHistory={isLoadingHistory}
        onStockUpdate={handleStockUpdate}
      />

      {/* Stock History Section */}
      <ProductStockHistory
        key={`history-${refreshKey}`}
        stockHistory={stockHistory}
        isLoadingHistory={isLoadingHistory}
        onEditStockHistory={handleEditStockHistory}
        onDeleteStockHistory={handleDeleteStockHistory}
        products={products}
      />
    </div>
  );
};

export default ProductDetail;
