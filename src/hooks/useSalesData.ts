import { useState, useEffect, useMemo, useCallback } from 'react';
import { Sale, DbSale, mapDbSaleToSale } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useActivityLogger } from '@/hooks/useActivityLogger';
import { useBusiness } from '@/contexts/BusinessContext';
import { useProducts } from '@/hooks/useProducts';
import { useInventoryActions } from '@/hooks/useInventoryActions';
import { clearInventoryCaches } from '@/utils/inventoryCacheUtils';
import { getSalesAction, deleteSaleAction } from '@/app/actions/sales';

export interface TopCustomer {
  id?: string;
  name: string;
  totalPurchases: number;
  orderCount: number;
}

export const useSalesData = (
  userId: string | undefined,
  sortOrder: string = 'desc',
  pageSize?: number,
  enabled: boolean = true
) => {

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { logActivity } = useActivityLogger();
  const { currentBusiness } = useBusiness();

  const loadSales = useCallback(async (): Promise<Sale[]> => {
    try {
      if (!userId || !currentBusiness) {
        return [];
      }

      // If pageSize is specified, load only that many records
      const salesData = await getSalesAction(currentBusiness.id, sortOrder as any, pageSize);

      const formattedSales: Sale[] = salesData ? salesData.map((item: any) => {
        const dbSale: DbSale = {
          id: item.id,
          user_id: item.user_id,
          location_id: item.location_id,
          receipt_number: item.receipt_number,
          customer_name: item.customer_name,
          customer_address: item.customer_address,
          customer_contact: item.customer_contact,
          customer_id: item.customer_id,
          items: item.items as any,
          payment_status: item.payment_status,
          profit: item.profit ? Number(item.profit) : 0,
          total: item.total ? Number(item.total) : 0,
          total_cost: item.total_cost ? Number(item.total_cost) : 0,
          subtotal: item.subtotal ? Number(item.subtotal) : 0,
          discount: item.discount ? Number(item.discount) : 0,
          tax_amount: item.tax_amount ? Number(item.tax_amount) : 0,
          date: item.date,
          tax_rate: item.tax_rate || 0,
          created_at: item.created_at,
          updated_at: item.updated_at,
          cash_transaction_id: item.cash_transaction_id,
          amount_paid: item.amount_paid ? Number(item.amount_paid) : undefined,
          amount_due: item.amount_due ? Number(item.amount_due) : undefined,
          category_id: item.category_id,
          notes: item.notes
        };
        return mapDbSaleToSale(dbSale);
      }) : [];

      return formattedSales;

    } catch (error) {
      console.error('Error loading sales:', error);
      toast({
        title: "Error",
        description: "Failed to load sales data. Please try again.",
        variant: "destructive"
      });
      return [];
    }
  }, [userId, currentBusiness?.id, sortOrder, pageSize, toast]);

  // React Query caching with persistent storage for improved performance
  const baseQueryKey = useMemo(() => ['sales', currentBusiness?.id, userId], [currentBusiness?.id, userId]);
  const queryKey = useMemo(() => [...baseQueryKey, sortOrder, pageSize], [baseQueryKey, sortOrder, pageSize]);

  const {
    data: sales = [],
    isLoading: isQueryLoading,
    isFetching,
    refetch
  } = useQuery({
    queryKey,
    queryFn: loadSales,
    enabled: enabled && !!userId && !!currentBusiness?.id,
    staleTime: 30_000,
    gcTime: 30 * 60_000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  // Derived loading state
  const isLoading = isQueryLoading || (isFetching && sales.length === 0);

  const getTopCustomers = useMemo((): TopCustomer[] => {
    // Skip quotes since they're not actual purchases
    const nonQuoteSales = sales.filter(sale => sale.paymentStatus !== "Quote");

    // Group sales by customer name
    const customerMap = new Map<string, { total: number, count: number, customerId?: string }>();

    nonQuoteSales.forEach(sale => {
      const customerName = sale.customerName;
      const saleTotal = sale.total; // Use pre-calculated total

      if (!customerMap.has(customerName)) {
        customerMap.set(customerName, {
          total: saleTotal,
          count: 1,
          customerId: sale.customerId
        });
      } else {
        const current = customerMap.get(customerName)!;
        customerMap.set(customerName, {
          total: current.total + saleTotal,
          count: current.count + 1,
          customerId: current.customerId || sale.customerId
        });
      }
    });

    // Convert map to array and sort by total purchases
    return Array.from(customerMap.entries())
      .map(([name, data]) => ({
        id: data.customerId,
        name,
        totalPurchases: data.total,
        orderCount: data.count
      }))
      .sort((a, b) => b.totalPurchases - a.totalPurchases);
  }, [sales]);

  // Memoize customer lifetime purchases function
  const getCustomerLifetimePurchases = useMemo(() => {
    return (customerName: string) => {
      // Filter sales by customer name and exclude quotes
      const customerSales = sales.filter(sale =>
        sale.customerName.toLowerCase() === customerName.toLowerCase() &&
        sale.paymentStatus !== "Quote"
      );

      // Calculate total purchase amount and count
      const total = customerSales.reduce((sum, sale) => sum + sale.total, 0);

      return {
        total,
        count: customerSales.length
      };
    };
  }, [sales]);

  const deleteSale = async (id: string) => {
    try {
      // First, find the sale to get its details for logging
      const saleToDelete = sales.find(sale => sale.id === id);
      if (!saleToDelete) {
        throw new Error('Sale not found');
      }

      // NOTE: Inventory restoration is now handled atomically on the server 
      // inside deleteSaleAction Prisma transaction.

      // Proceed to delete the sale via API Action
      if (!currentBusiness?.id) {
        throw new Error('Business context missing for deletion');
      }

      const result = await deleteSaleAction(id, currentBusiness.id);

      if (!result.success) {
        throw new Error(result.error);
      }

      // Update React Query cache
      queryClient.setQueryData(queryKey, (oldData: Sale[] | undefined) => {
        return oldData ? oldData.filter(sale => sale.id !== id) : [];
      });
      queryClient.invalidateQueries({ queryKey: baseQueryKey });

      // Clear sold items cache after deletion
      clearSoldItemsCache();

      // Log activity for sale deletion
      await logActivity({
        activityType: 'DELETE',
        module: 'SALES',
        entityType: 'sale',
        entityId: id,
        entityName: `Sale #${saleToDelete.receiptNumber}`,
        description: `Deleted sale for ${saleToDelete.customerName} - Total: UGX ${((saleToDelete.amountPaid || 0) + (saleToDelete.amountDue || 0)).toLocaleString()} (Stock restored)`,
        metadata: {
          receiptNumber: saleToDelete.receiptNumber,
          customerName: saleToDelete.customerName,
          customerAddress: saleToDelete.customerAddress,
          customerContact: saleToDelete.customerContact,
          totalAmount: (saleToDelete.amountPaid || 0) + (saleToDelete.amountDue || 0),
          amountPaid: saleToDelete.amountPaid,
          profit: saleToDelete.profit,
          paymentStatus: saleToDelete.paymentStatus,
          taxRate: saleToDelete.taxRate,
          itemCount: saleToDelete.items.length,
          items: saleToDelete.items.map(item => ({
            description: item.description,
            quantity: item.quantity,
            price: item.price,
            cost: item.cost,
            total: item.quantity * item.price,
            discountPercentage: item.discountPercentage,
            discountAmount: item.discountAmount
          })),
          notes: saleToDelete.notes,
          cashTransactionDeleted: !!saleToDelete.cashTransactionId
        }
      });

      toast({
        title: "Sale Deleted",
        description: "The sale record and associated data have been successfully deleted."
      });

      clearInventoryCaches();
      return true;
    } catch (error) {
      console.error('Error deleting sale:', error);
      toast({
        title: "Error",
        description: "Failed to delete sale. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const clearSoldItemsCache = useCallback(() => {
    if (!currentBusiness?.id) return;
    const key = `soldItemsFilters_${currentBusiness.id}`;
    localStorage.removeItem(key);

    // Also clear legacy keys for safety
    localStorage.removeItem('soldItemsFilters');
  }, [currentBusiness?.id]);

  const addSale = useCallback((newSale: Sale) => {
    queryClient.setQueryData(queryKey, (oldData: Sale[] | undefined) => {
      return oldData ? [newSale, ...oldData] : [newSale];
    });
    queryClient.invalidateQueries({ queryKey: baseQueryKey });
    clearSoldItemsCache();
    clearInventoryCaches();
  }, [queryClient, queryKey, baseQueryKey, clearSoldItemsCache, clearInventoryCaches]);

  const updateSale = useCallback((updatedSale: Sale) => {
    queryClient.setQueryData(queryKey, (oldData: Sale[] | undefined) => {
      return oldData ? oldData.map(s => s.id === updatedSale.id ? updatedSale : s) : [updatedSale];
    });
    queryClient.invalidateQueries({ queryKey: baseQueryKey });
    clearSoldItemsCache();
    clearInventoryCaches();
  }, [queryClient, queryKey, baseQueryKey, clearSoldItemsCache, clearInventoryCaches]);

  return {
    sales,
    isLoading,
    deleteSale,
    addSale,
    updateSale,
    getTopCustomers,
    getCustomerLifetimePurchases,
    clearSoldItemsCache,
    refetch,
    isFetching
  };
};
