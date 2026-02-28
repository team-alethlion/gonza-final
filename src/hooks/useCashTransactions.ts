import { useState, useEffect, useMemo, useCallback } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { useBusiness } from '@/contexts/BusinessContext';
import { useToast } from '@/hooks/use-toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  CashTransaction,
  DbCashTransaction,
  CashTransactionFormData,
  DailyCashSummary,
  mapDbCashTransactionToCashTransaction
} from '@/types/cash';
import {
  getCashTransactionsAction,
  createCashTransactionAction,
  updateCashTransactionAction,
  deleteCashTransactionAction,
  getAccountOpeningBalanceAction,
  createBulkCashTransactionsAction
} from '@/app/actions/finance';

export const useCashTransactions = (accountId?: string, initialPageSize: number = 50) => {
  const { user } = useAuth();
  const { currentBusiness } = useBusiness();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [totalCount, setTotalCount] = useState(0);

  const loadTransactions = useCallback(async (): Promise<CashTransaction[]> => {
    try {
      if (!user || !currentBusiness) {
        return [];
      }

      const skip = (page - 1) * pageSize;
      const result = await getCashTransactionsAction(currentBusiness.id, accountId, skip, pageSize);

      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to fetch transactions');
      }

      if (result.count !== undefined) {
        setTotalCount(result.count);
      }

      // Format all transactions
      const formattedTransactions = result.data.map((item: any) => {
        const dbTransaction: DbCashTransaction = {
          id: item.id,
          user_id: item.user_id,
          account_id: item.account_id,
          amount: Number(item.amount),
          transaction_type: item.transaction_type,
          category: item.category,
          description: item.description,
          person_in_charge: item.person_in_charge,
          tags: item.tags,
          date: item.date,
          payment_method: item.payment_method,
          receipt_image: item.receipt_image,
          created_at: item.created_at,
          updated_at: item.updated_at
        };
        return mapDbCashTransactionToCashTransaction(dbTransaction);
      });

      return formattedTransactions;
    } catch (error) {
      console.error('Error loading cash transactions:', error);
      toast({
        title: "Error",
        description: "Failed to load cash transactions",
        variant: "destructive"
      });
      return [];
    }
  }, [user, currentBusiness?.id, accountId, page, pageSize, toast]);

  const queryKey = useMemo(() => ['cash_transactions', currentBusiness?.id, user?.id, accountId, page, pageSize], [currentBusiness?.id, user?.id, accountId, page, pageSize]);

  const { data: transactions = [], isLoading: isQueryLoading } = useQuery({
    queryKey,
    queryFn: loadTransactions,
    enabled: !!user && !!currentBusiness?.id,
    staleTime: 30_000,
  });

  const isLoading = isQueryLoading && transactions.length === 0;

  const createTransaction = async (transactionData: CashTransactionFormData) => {
    try {
      if (!user || !currentBusiness) throw new Error('User not authenticated');

      const result = await createCashTransactionAction({
        ...transactionData,
        userId: user.id,
        locationId: currentBusiness.id
      });

      if (!result.success) throw new Error(result.error);

      toast({
        title: "Success",
        description: transactionData.transactionType === 'transfer'
          ? "Transfer completed successfully"
          : "Cash transaction created successfully"
      });

      queryClient.invalidateQueries({ queryKey });

      return Array.isArray(result.data)
        ? mapDbCashTransactionToCashTransaction(result.data[0])
        : mapDbCashTransactionToCashTransaction(result.data as any);
    } catch (error) {
      console.error('Error creating cash transaction:', error);
      toast({
        title: "Error",
        description: "Failed to create cash transaction",
        variant: "destructive"
      });
      throw error;
    }
  };

  const createBulkTransactions = async (transactionsData: CashTransactionFormData[]) => {
    try {
      if (!user || !currentBusiness) throw new Error('User not authenticated');

      const payloads = transactionsData.map(t => ({
        ...t,
        userId: user.id,
        locationId: currentBusiness.id
      }));

      const result = await createBulkCashTransactionsAction(payloads);

      if (!result.success) throw new Error(result.error);

      toast({
        title: "Success",
        description: `Successfully created ${transactionsData.length} transactions`
      });

      queryClient.invalidateQueries({ queryKey });
      return (result.data as any[]).map((item: any) => mapDbCashTransactionToCashTransaction(item));
    } catch (error) {
      console.error('Error creating bulk transactions:', error);
      toast({
        title: "Error",
        description: "Failed to create bulk transactions",
        variant: "destructive"
      });
      throw error;
    }
  };

  const updateTransaction = async (id: string, updates: Partial<CashTransactionFormData>) => {
    try {
      if (!currentBusiness) throw new Error('No business selected');
      const result = await updateCashTransactionAction(id, currentBusiness.id, updates);
      if (!result.success) throw new Error(result.error);

      toast({
        title: "Success",
        description: "Transaction updated successfully"
      });

      queryClient.invalidateQueries({ queryKey });
      return mapDbCashTransactionToCashTransaction(result.data as any);
    } catch (error) {
      console.error('Error updating cash transaction:', error);
      toast({
        title: "Error",
        description: "Failed to update transaction",
        variant: "destructive"
      });
      return null;
    }
  };

  const deleteTransaction = async (id: string, onDeleted?: () => void) => {
    try {
      if (!currentBusiness) throw new Error('No business selected');
      const result = await deleteCashTransactionAction(id, currentBusiness.id);
      if (!result.success) throw new Error(result.error);

      toast({
        title: "Success",
        description: "Cash transaction deleted successfully"
      });

      queryClient.invalidateQueries({ queryKey });
      if (onDeleted) onDeleted();
      return true;
    } catch (error) {
      console.error('Error deleting cash transaction:', error);
      toast({
        title: "Error",
        description: "Failed to delete cash transaction",
        variant: "destructive"
      });
      return false;
    }
  };

  const getAccountOpeningBalance = useCallback(async (accountId: string): Promise<number> => {
    try {
      if (!currentBusiness) return 0;
      const result = await getAccountOpeningBalanceAction(accountId, currentBusiness.id);
      return result.success ? (result.data ?? 0) : 0;
    } catch (error) {
      return 0;
    }
  }, [currentBusiness?.id]);

  const getDailySummary = useCallback(async (date: Date, accountId?: string): Promise<DailyCashSummary> => {
    const dateStr = date.toISOString().split('T')[0];

    let filteredTransactions = transactions.filter(t =>
      t.date.toISOString().split('T')[0] === dateStr
    );

    if (accountId) {
      filteredTransactions = filteredTransactions.filter(t => t.accountId === accountId);
    }

    const cashIn = filteredTransactions
      .filter(t => t.transactionType === 'cash_in' || t.transactionType === 'transfer_in')
      .reduce((sum, t) => sum + t.amount, 0);

    const cashOut = filteredTransactions
      .filter(t => t.transactionType === 'cash_out' || t.transactionType === 'transfer_out')
      .reduce((sum, t) => sum + t.amount, 0);

    const transfersIn = filteredTransactions
      .filter(t => t.transactionType === 'transfer_in')
      .reduce((sum, t) => sum + t.amount, 0);

    const transfersOut = filteredTransactions
      .filter(t => t.transactionType === 'transfer_out')
      .reduce((sum, t) => sum + t.amount, 0);

    const yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    let yesterdayTransactions = transactions.filter(t =>
      t.date.toISOString().split('T')[0] <= yesterdayStr
    );

    if (accountId) {
      yesterdayTransactions = yesterdayTransactions.filter(t => t.accountId === accountId);
    }

    const yesterdayCashIn = yesterdayTransactions
      .filter(t => t.transactionType === 'cash_in' || t.transactionType === 'transfer_in')
      .reduce((sum, t) => sum + t.amount, 0);

    const yesterdayCashOut = yesterdayTransactions
      .filter(t => t.transactionType === 'cash_out' || t.transactionType === 'transfer_out')
      .reduce((sum, t) => sum + t.amount, 0);

    let accountOpeningBalance = 0;
    if (accountId) {
      accountOpeningBalance = await getAccountOpeningBalance(accountId);
    }

    const openingBalance = accountOpeningBalance + yesterdayCashIn - yesterdayCashOut;
    const closingBalance = openingBalance + cashIn - cashOut;

    return {
      date,
      openingBalance,
      cashIn,
      cashOut,
      transfersIn,
      transfersOut,
      closingBalance
    };
  }, [transactions, getAccountOpeningBalance]);

  const getDateRangeSummary = useCallback(async (startDate: Date, endDate: Date, accountId?: string): Promise<DailyCashSummary> => {
    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];

    let filteredTransactions = transactions.filter(t => {
      const transactionDateStr = t.date.toISOString().split('T')[0];
      return transactionDateStr >= startDateStr && transactionDateStr <= endDateStr;
    });

    if (accountId) {
      filteredTransactions = filteredTransactions.filter(t => t.accountId === accountId);
    }

    const cashIn = filteredTransactions
      .filter(t => t.transactionType === 'cash_in' || t.transactionType === 'transfer_in')
      .reduce((sum, t) => sum + t.amount, 0);

    const cashOut = filteredTransactions
      .filter(t => t.transactionType === 'cash_out' || t.transactionType === 'transfer_out')
      .reduce((sum, t) => sum + t.amount, 0);

    const transfersIn = filteredTransactions
      .filter(t => t.transactionType === 'transfer_in')
      .reduce((sum, t) => sum + t.amount, 0);

    const transfersOut = filteredTransactions
      .filter(t => t.transactionType === 'transfer_out')
      .reduce((sum, t) => sum + t.amount, 0);

    const dayBeforeStart = new Date(startDate);
    dayBeforeStart.setDate(dayBeforeStart.getDate() - 1);
    const dayBeforeStartStr = dayBeforeStart.toISOString().split('T')[0];

    let transactionsBeforeRange = transactions.filter(t =>
      t.date.toISOString().split('T')[0] <= dayBeforeStartStr
    );

    if (accountId) {
      transactionsBeforeRange = transactionsBeforeRange.filter(t => t.accountId === accountId);
    }

    const cashInBeforeRange = transactionsBeforeRange
      .filter(t => t.transactionType === 'cash_in' || t.transactionType === 'transfer_in')
      .reduce((sum, t) => sum + t.amount, 0);

    const cashOutBeforeRange = transactionsBeforeRange
      .filter(t => t.transactionType === 'cash_out' || t.transactionType === 'transfer_out')
      .reduce((sum, t) => sum + t.amount, 0);

    let accountOpeningBalance = 0;
    if (accountId) {
      accountOpeningBalance = await getAccountOpeningBalance(accountId);
    }

    const openingBalance = accountOpeningBalance + cashInBeforeRange - cashOutBeforeRange;
    const closingBalance = openingBalance + cashIn - cashOut;

    return {
      date: startDate,
      openingBalance,
      cashIn,
      cashOut,
      transfersIn,
      transfersOut,
      closingBalance
    };
  }, [transactions, getAccountOpeningBalance]);

  const refreshTransactions = useCallback(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [queryClient, queryKey]);

  return useMemo(() => ({
    transactions,
    isLoading,
    createTransaction,
    createBulkTransactions,
    updateTransaction,
    deleteTransaction,
    getDailySummary,
    getDateRangeSummary,
    refreshTransactions,
    page,
    setPage,
    pageSize,
    setPageSize,
    totalCount
  }), [transactions, isLoading, createTransaction, createBulkTransactions, updateTransaction, deleteTransaction, getDailySummary, getDateRangeSummary, refreshTransactions, page, pageSize, totalCount]);
};
