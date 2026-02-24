import { useMemo } from 'react';
import { Product } from '@/types';
import { Sale } from '@/types';
import { format, startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth } from 'date-fns';
import { calculateItemActualAmount, calculateItemActualPrice } from '@/utils/discountCalculations';

export interface TopSellingItem {
  description: string;
  totalQuantity: number;
  averagePrice: number;
  totalAmount: number;
  totalCost: number;
  totalProfit: number;
  totalDiscount: number;
  averageCost?: number;
  productIds: string[];
}

export const useInventoryData = (
  filteredProducts: Product[],
  sales: Sale[],
  period: 'today' | 'yesterday' | 'this-week' | 'last-week' | 'this-month' | 'last-month' | 'all-time'
) => {
  // Calculate date range based on selected period
  const dateRange = useMemo(() => {
    const now = new Date();
    switch (period) {
      case 'today':
        return { from: startOfDay(now), to: endOfDay(now) };
      case 'yesterday':
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        return { from: startOfDay(yesterday), to: endOfDay(yesterday) };
      case 'this-week':
        return { from: startOfWeek(now), to: endOfWeek(now) };
      case 'last-week':
        const lastWeek = new Date(now);
        lastWeek.setDate(lastWeek.getDate() - 7);
        return { from: startOfWeek(lastWeek), to: endOfWeek(lastWeek) };
      case 'this-month':
        return { from: startOfMonth(now), to: endOfMonth(now) };
      case 'last-month':
        const lastMonth = new Date(now);
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        return { from: startOfMonth(lastMonth), to: endOfMonth(lastMonth) };
      case 'all-time':
      default:
        return { from: new Date(0), to: now };
    }
  }, [period]);

  // Memoize top selling products (aggregated by item description from sales)
  const topSellingProducts = useMemo(() => {
    try {
      // Early return if no data
      if (!sales || sales.length === 0) {
        return [];
      }

      // Filter sales by date range and payment status with safer date handling
      const filteredSales = sales.filter(sale => {
        try {
          if (!sale || sale.paymentStatus === 'Quote') return false;
          const saleDate = new Date(sale.date);
          // Check for invalid date
          if (isNaN(saleDate.getTime())) return false;
          return saleDate >= dateRange.from && saleDate <= dateRange.to;
        } catch (error) {
          console.warn('Error filtering sale:', error);
          return false;
        }
      });

      // Aggregate items by description (same logic as useSoldItemsData)
      const itemsMap = new Map<string, {
        totalQuantity: number;
        totalAmount: number;
        totalCost: number;
        totalProfit: number;
        totalDiscount: number;
        prices: number[];
        costs: number[];
        productIds: string[]
      }>();

      filteredSales.forEach(sale => {
        try {
          if (!sale.items || !Array.isArray(sale.items)) return;

          sale.items.forEach(item => {
            const key = item.description;
            const subtotal = item.price * item.quantity;
            const amount = calculateItemActualAmount(item);
            const discount = subtotal - amount;
            const cost = (item.cost || 0) * item.quantity;
            const profit = amount - cost;
            const actualPrice = calculateItemActualPrice(item);

            if (itemsMap.has(key)) {
              const existing = itemsMap.get(key)!;
              existing.totalQuantity += item.quantity;
              existing.totalAmount += amount;
              existing.totalCost += cost;
              existing.totalProfit += profit;
              existing.totalDiscount += discount;
              existing.prices.push(actualPrice);
              existing.costs.push(item.cost || 0);
              if (item.productId && !existing.productIds.includes(item.productId)) {
                existing.productIds.push(item.productId);
              }
            } else {
              itemsMap.set(key, {
                totalQuantity: item.quantity,
                totalAmount: amount,
                totalCost: cost,
                totalProfit: profit,
                totalDiscount: discount,
                prices: [actualPrice],
                costs: [item.cost || 0],
                productIds: item.productId ? [item.productId] : []
              });
            }
          });
        } catch (error) {
          console.warn('Error processing sale items:', error);
        }
      });

      // Convert to array and sort by total quantity sold
      const result: TopSellingItem[] = Array.from(itemsMap.entries()).map(([description, data]) => ({
        description,
        totalQuantity: data.totalQuantity,
        averagePrice: data.prices.reduce((sum, price) => sum + price, 0) / data.prices.length,
        totalAmount: data.totalAmount,
        totalCost: data.totalCost,
        totalProfit: data.totalProfit,
        totalDiscount: data.totalDiscount,
        averageCost: data.costs.reduce((sum, cost) => sum + cost, 0) / data.costs.length,
        productIds: data.productIds
      }));

      // Sort by total quantity and return all
      return result
        .sort((a, b) => b.totalQuantity - a.totalQuantity);
    } catch (error) {
      console.error('Error calculating top selling products:', error);
      return [];
    }
  }, [sales, dateRange]);

  return {
    topSellingProducts,
    dateRange
  };
};