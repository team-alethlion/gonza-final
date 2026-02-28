import { useState, useEffect, useMemo } from 'react';
import { Sale, AnalyticsData } from '@/types';
import {
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
} from 'date-fns';
import { useBusiness } from '@/contexts/BusinessContext';
import { getAnalyticsSummaryAction } from '@/app/actions/analytics';

interface UseAnalyticsDataProps {
  sales: Sale[];
  dateFilter: string;
  dateRange: { from: Date | undefined; to: Date | undefined; };
  specificDate?: Date | undefined;
  isCustomRange: boolean;
  isSpecificDate?: boolean;
}

export function useAnalyticsData({ sales, dateFilter, dateRange, specificDate, isCustomRange, isSpecificDate }: UseAnalyticsDataProps) {
  const [summary, setSummary] = useState<any>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(true);
  const { currentBusiness } = useBusiness();

  // Fetch analytics summary from server based on filters
  useEffect(() => {
    const fetchSummary = async () => {
      if (!currentBusiness) {
        setSummary(null);
        setIsLoadingSummary(false);
        return;
      }

      setIsLoadingSummary(true);
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

        const result = await getAnalyticsSummaryAction(currentBusiness.id, startDate, endDate);

        if (result.success) {
          setSummary(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch analytics summary:', error);
      } finally {
        setIsLoadingSummary(false);
      }
    };

    fetchSummary();
  }, [dateFilter, isCustomRange, isSpecificDate, dateRange.from, dateRange.to, specificDate, currentBusiness]);

  // Transform summary into AnalyticsData format
  const analyticsData = useMemo((): AnalyticsData => {
    if (!summary) {
      return {
        totalSales: 0,
        totalProfit: 0,
        totalCost: 0,
        paidSalesCount: 0,
        pendingSalesCount: 0,
      };
    }
    return {
      totalSales: summary.totalSales,
      totalProfit: summary.totalProfit,
      totalCost: summary.totalCost,
      paidSalesCount: summary.paidSalesCount,
      pendingSalesCount: summary.pendingSalesCount,
    };
  }, [summary]);

  // Memoize bar chart data
  const barChartData = useMemo(() => [
    { name: 'Total Sales', amount: analyticsData.totalSales },
    { name: 'Total Cost', amount: analyticsData.totalCost },
    { name: 'Total Expenses', amount: summary?.totalExpenses || 0 },
    { name: 'Total Profit', amount: analyticsData.totalProfit },
  ], [analyticsData, summary]);

  // Memoize recent sales (already filtered/limited by the caller usually)
  const recentSales = useMemo(() => {
    return [...sales]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 20);
  }, [sales]);

  // Non-quote count (from summary if available, else from list)
  const nonQuoteSalesCount = useMemo(() => {
    if (summary) return summary.paidSalesCount + summary.pendingSalesCount;
    return sales.filter(s => s.paymentStatus !== 'Quote').length;
  }, [summary, sales]);

  return {
    filteredSales: sales,
    analyticsData,
    barChartData,
    recentSales,
    nonQuoteSalesCount,
    expenses: summary?.totalExpenses || 0,
    isLoadingExpenses: isLoadingSummary
  };
}
