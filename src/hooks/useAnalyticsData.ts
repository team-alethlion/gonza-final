import { useState, useEffect, useMemo, useCallback } from 'react';
import { Sale, AnalyticsData } from '@/types';
import {
  isWithinInterval,
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  subDays,
  subWeeks,
  subMonths,
  isSameDay
} from 'date-fns';
import { useBusiness } from '@/contexts/BusinessContext';
import { getTotalExpensesAction } from '@/app/actions/analytics';

interface UseAnalyticsDataProps {
  sales: Sale[];
  dateFilter: string;
  dateRange: { from: Date | undefined; to: Date | undefined; };
  specificDate?: Date | undefined;
  isCustomRange: boolean;
  isSpecificDate?: boolean;
}

export function useAnalyticsData({ sales, dateFilter, dateRange, specificDate, isCustomRange, isSpecificDate }: UseAnalyticsDataProps) {
  const [expenses, setExpenses] = useState<number>(0);
  const [isLoadingExpenses, setIsLoadingExpenses] = useState(true);
  const { currentBusiness } = useBusiness();

  // Memoize the expensive calculations
  const calculateSaleTotals = useCallback((sale: Sale) => {
    // Calculate total sale price after discounts (same logic as revenue calculation)
    const totalSalePrice = sale.items && Array.isArray(sale.items)
      ? sale.items.reduce((sum, item) => {
        const subtotal = item.price * item.quantity;
        const discountAmount = item.discountType === 'amount'
          ? (item.discountAmount || 0)
          : (subtotal * (item.discountPercentage || 0)) / 100;
        return sum + (subtotal - discountAmount);
      }, 0)
      : 0;

    const totalCost = sale.items && Array.isArray(sale.items)
      ? sale.items.reduce((sum, item) => sum + (item.cost * item.quantity), 0)
      : 0;

    return { totalSalePrice, totalCost };
  }, []);

  // Memoize date filtering function
  const matchesDateFilter = useCallback((saleDate: Date): boolean => {
    // Validate the sale date
    if (isNaN(saleDate.getTime())) {
      return false;
    }

    if (dateFilter === 'all') return true;

    if (dateFilter === 'custom' && isCustomRange) {
      if (dateRange.from && dateRange.to) {
        return isWithinInterval(saleDate, {
          start: startOfDay(dateRange.from),
          end: endOfDay(dateRange.to)
        });
      }
      return true;
    }

    if (dateFilter === 'specific' && isSpecificDate) {
      if (specificDate) {
        return isSameDay(saleDate, specificDate);
      }
      return true;
    }

    const today = new Date();

    switch (dateFilter) {
      case 'today':
        return isWithinInterval(saleDate, {
          start: startOfDay(today),
          end: endOfDay(today)
        });
      case 'yesterday':
        const yesterday = subDays(today, 1);
        return isWithinInterval(saleDate, {
          start: startOfDay(yesterday),
          end: endOfDay(yesterday)
        });
      case 'this-week':
        return isWithinInterval(saleDate, {
          start: startOfWeek(today, { weekStartsOn: 1 }),
          end: endOfWeek(today, { weekStartsOn: 1 })
        });
      case 'last-week':
        const lastWeekStart = subWeeks(startOfWeek(today, { weekStartsOn: 1 }), 1);
        const lastWeekEnd = endOfWeek(lastWeekStart, { weekStartsOn: 1 });
        return isWithinInterval(saleDate, {
          start: lastWeekStart,
          end: lastWeekEnd
        });
      case 'this-month':
        return isWithinInterval(saleDate, {
          start: startOfMonth(today),
          end: endOfMonth(today)
        });
      case 'last-month':
        const lastMonth = subMonths(today, 1);
        return isWithinInterval(saleDate, {
          start: startOfMonth(lastMonth),
          end: endOfMonth(lastMonth)
        });
      case 'this-year':
        return isWithinInterval(saleDate, {
          start: startOfYear(today),
          end: endOfYear(today)
        });
      default:
        return true;
    }
  }, [dateFilter, isCustomRange, isSpecificDate, dateRange, specificDate]);

  // Memoize filtered sales calculation
  const filteredSalesData = useMemo(() => {
    const filtered = sales.filter(sale => {
      const saleDate = new Date(sale.date);
      return matchesDateFilter(saleDate);
    });

    return {
      all: filtered,
      nonQuotes: filtered.filter(sale => sale.paymentStatus !== 'Quote')
    };
  }, [sales, matchesDateFilter]);

  // Memoize analytics data calculation
  const analyticsData = useMemo((): AnalyticsData => {
    return filteredSalesData.nonQuotes.reduce((acc, sale) => {
      const { totalSalePrice, totalCost } = calculateSaleTotals(sale);
      // Calculate profit from actual revenue and cost to handle old sales correctly
      const actualProfit = totalSalePrice - totalCost;

      return {
        totalSales: acc.totalSales + totalSalePrice,
        totalProfit: acc.totalProfit + actualProfit,
        totalCost: acc.totalCost + totalCost,
        paidSalesCount: acc.paidSalesCount + (sale.paymentStatus === 'Paid' ? 1 : 0),
        pendingSalesCount: acc.pendingSalesCount + (sale.paymentStatus === 'NOT PAID' ? 1 : 0),
      };
    }, {
      totalSales: 0,
      totalProfit: 0,
      totalCost: 0,
      paidSalesCount: 0,
      pendingSalesCount: 0,
    });
  }, [filteredSalesData.nonQuotes, calculateSaleTotals]);

  // Memoize bar chart data
  const barChartData = useMemo(() => [
    { name: 'Total Sales', amount: analyticsData.totalSales },
    { name: 'Total Cost', amount: analyticsData.totalCost },
    { name: 'Total Expenses', amount: expenses },
    { name: 'Total Profit', amount: analyticsData.totalProfit },
  ], [analyticsData, expenses]);

  // Memoize recent sales calculation
  const recentSales = useMemo(() => {
    return [...filteredSalesData.all]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 20);
  }, [filteredSalesData.all]);

  // Memoize non-quote sales count
  const nonQuoteSalesCount = useMemo(() => {
    return filteredSalesData.nonQuotes.length;
  }, [filteredSalesData.nonQuotes]);

  // Fetch expenses data based on the current date filter and business location
  useEffect(() => {
    const fetchExpenses = async () => {
      if (!currentBusiness) {
        setExpenses(0);
        setIsLoadingExpenses(false);
        return;
      }

      setIsLoadingExpenses(true);
      try {
        let startDate: string | undefined;
        let endDate: string | undefined;

        if (isCustomRange && dateRange.from && dateRange.to) {
          startDate = dateRange.from.toISOString();
          endDate = dateRange.to.toISOString();
        } else if (isSpecificDate && specificDate) {
          startDate = startOfDay(specificDate).toISOString();
          endDate = endOfDay(specificDate).toISOString();
        } else if (dateFilter !== 'all') {
          const today = new Date();
          switch (dateFilter) {
            case 'today':
              startDate = startOfDay(today).toISOString();
              endDate = endOfDay(today).toISOString();
              break;
            case 'yesterday':
              const yesterday = subDays(today, 1);
              startDate = startOfDay(yesterday).toISOString();
              endDate = endOfDay(yesterday).toISOString();
              break;
            case 'this-week':
              startDate = startOfWeek(today, { weekStartsOn: 1 }).toISOString();
              endDate = endOfWeek(today, { weekStartsOn: 1 }).toISOString();
              break;
            case 'last-week':
              const lastWeekStart = subWeeks(startOfWeek(today, { weekStartsOn: 1 }), 1);
              startDate = lastWeekStart.toISOString();
              endDate = endOfWeek(lastWeekStart, { weekStartsOn: 1 }).toISOString();
              break;
            case 'this-month':
              startDate = startOfMonth(today).toISOString();
              endDate = endOfMonth(today).toISOString();
              break;
            case 'last-month':
              const lastMonth = subMonths(today, 1);
              startDate = startOfMonth(lastMonth).toISOString();
              endDate = endOfMonth(lastMonth).toISOString();
              break;
            case 'this-year':
              startDate = startOfYear(today).toISOString();
              endDate = endOfYear(today).toISOString();
              break;
          }
        }

        const result = await getTotalExpensesAction(currentBusiness.id, startDate, endDate);

        if (!result.success) {
          console.error('Error fetching expenses:', result.error);
          return;
        }

        setExpenses(result.data || 0);
      } catch (error) {
        console.error('Failed to fetch expenses:', error);
      } finally {
        setIsLoadingExpenses(false);
      }
    };

    fetchExpenses();
  }, [dateFilter, isCustomRange, isSpecificDate, dateRange.from, dateRange.to, specificDate, currentBusiness]);

  return {
    filteredSales: filteredSalesData.all,
    nonQuoteSales: filteredSalesData.nonQuotes,
    analyticsData,
    barChartData,
    recentSales,
    nonQuoteSalesCount,
    expenses,
    isLoadingExpenses
  };
}
