import { useState, useEffect, useMemo, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/components/auth/AuthProvider';
import { useBusiness } from '@/contexts/BusinessContext';
import { useToast } from '@/hooks/use-toast';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  CashTransaction,
  DbCashTransaction,
  CashTransactionFormData,
  DailyCashSummary,
  mapDbCashTransactionToCashTransaction,
  mapCashTransactionFormToDbInsert
} from '@/types/cash';

export const useCashTransactions = (accountId?: string) => {
  const { user } = useAuth();
  const { currentBusiness } = useBusiness();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Chunked transaction loading to bypass Supabase 1000 row limit
  const loadTransactions = useCallback(async (): Promise<CashTransaction[]> => {
    try {
      if (!user || !currentBusiness) {
        return [];
      }

      // First, get the total count
      let countQuery = supabase
        .from('cash_transactions')
        .select('*', { count: 'exact', head: true })
        .eq('location_id', currentBusiness.id);

      if (accountId) {
        countQuery = countQuery.eq('account_id', accountId);
      }

      const { count, error: countError } = await countQuery;

      if (countError) {
        console.error('Error getting transaction count:', countError);
        throw countError;
      }

      // Load transactions in chunks of 1000 to bypass limit
      const allTransactions: any[] = [];
      const chunkSize = 1000;
      let start = 0;

      while (start < (count || 0)) {
        let chunkQuery = supabase
          .from('cash_transactions')
          .select(`
            id,
            user_id,
            account_id,
            amount,
            transaction_type,
            category,
            description,
            person_in_charge,
            tags,
            date,
            payment_method,
            receipt_image,
            created_at,
            updated_at
          `)
          .eq('location_id', currentBusiness.id)
          .order('date', { ascending: false })
          .order('created_at', { ascending: false })
          .range(start, start + chunkSize - 1);

        // Apply account filter if specified
        if (accountId) {
          chunkQuery = chunkQuery.eq('account_id', accountId);
        }

        const { data: chunkData, error: chunkError } = await chunkQuery;

        if (chunkError) {
          console.error('Error loading transaction chunk:', chunkError);
          throw chunkError;
        }

        if (chunkData && chunkData.length > 0) {
          allTransactions.push(...chunkData);
        }

        // If we got less than chunkSize, we've reached the end
        if (!chunkData || chunkData.length < chunkSize) {
          break;
        }

        start += chunkSize;
      }

      // Format all transactions
      const formattedTransactions = allTransactions.map((item: any) => {
        const dbTransaction: DbCashTransaction = {
          id: item.id,
          user_id: item.user_id,
          account_id: item.account_id,
          amount: item.amount,
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

      // Sort transactions by date and created_at descending (most recent first)
      formattedTransactions.sort((a, b) => {
        const dateCompare = new Date(b.date).getTime() - new Date(a.date).getTime();
        if (dateCompare !== 0) return dateCompare;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });

      return formattedTransactions;
    } catch (error) {
      console.error('Error loading cash transactions:', error);
      toast({
        title: "Error",
        description: "Failed to load cash transactions. Please try again.",
        variant: "destructive"
      });
      return [];
    }
  }, [user, currentBusiness?.id, accountId, toast]);

  // React Query caching
  const queryKey = useMemo(() => ['cash_transactions', currentBusiness?.id, user?.id, accountId], [currentBusiness?.id, user?.id, accountId]);

  const { data: transactions = [], isLoading: isQueryLoading } = useQuery({
    queryKey,
    queryFn: loadTransactions,
    enabled: !!user && !!currentBusiness?.id,
    staleTime: 0,
    gcTime: 30 * 60_000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  // Derived loading state to avoid flash on background refetch
  const isLoading = isQueryLoading && transactions.length === 0;

  const createTransaction = async (transactionData: CashTransactionFormData) => {
    try {
      if (!user || !currentBusiness) throw new Error('User not authenticated or no business selected');

      // Get account names for proper transfer descriptions
      const getAccountName = async (accountId: string) => {
        const { data, error } = await supabase
          .from('cash_accounts')
          .select('name')
          .eq('id', accountId)
          .eq('location_id', currentBusiness.id)
          .single();

        if (error) throw error;
        return data?.name || 'Unknown Account';
      };

      // Handle transfer transaction - create two transactions
      if (transactionData.transactionType === 'transfer' && transactionData.toAccountId) {
        const fromAccountName = await getAccountName(transactionData.accountId);
        const toAccountName = await getAccountName(transactionData.toAccountId);

        const transferOutData: CashTransactionFormData = {
          ...transactionData,
          transactionType: 'cash_out',
          description: `Transfer to ${toAccountName}: ${transactionData.description}`
        };

        const transferInData: CashTransactionFormData = {
          ...transactionData,
          accountId: transactionData.toAccountId,
          transactionType: 'cash_in',
          description: `Transfer from ${fromAccountName}: ${transactionData.description}`
        };

        const dbTransferOut = {
          ...mapCashTransactionFormToDbInsert(transferOutData, user.id),
          location_id: currentBusiness.id,
          transaction_type: 'transfer_out'
        };
        const dbTransferIn = {
          ...mapCashTransactionFormToDbInsert(transferInData, user.id),
          location_id: currentBusiness.id,
          transaction_type: 'transfer_in'
        };

        const { error: error1 } = await supabase
          .from('cash_transactions')
          .insert(dbTransferOut);

        const { error: error2 } = await supabase
          .from('cash_transactions')
          .insert(dbTransferIn);

        if (error1 || error2) throw error1 || error2;

        toast({
          title: "Success",
          description: "Transfer completed successfully"
        });

        queryClient.invalidateQueries({ queryKey });
        return;
      }

      const dbInsertData = {
        ...mapCashTransactionFormToDbInsert(transactionData, user.id),
        location_id: currentBusiness.id
      };

      const { data, error } = await supabase
        .from('cash_transactions')
        .insert(dbInsertData)
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Cash transaction created successfully"
      });

      queryClient.invalidateQueries({ queryKey });
      return mapDbCashTransactionToCashTransaction(data);
    } catch (error) {
      console.error('Error creating cash transaction:', error);
      toast({
        title: "Error",
        description: "Failed to create cash transaction. Please try again.",
        variant: "destructive"
      });
      throw error;
    }
  };

  const createBulkTransactions = async (transactionsData: CashTransactionFormData[]) => {
    try {
      if (!user || !currentBusiness) throw new Error('User not authenticated or no business selected');

      // Optimization: Fetch all accounts once for transfer descriptions
      const { data: allAccounts, error: accountsError } = await (supabase as any)
        .from('cash_accounts')
        .select('id, name')
        .eq('location_id', currentBusiness.id);

      if (accountsError) throw accountsError;

      const accountMap = new Map(allAccounts?.map((acc: any) => [acc.id, acc.name]));
      const getAccountName = (id: string) => accountMap.get(id) || 'Unknown Account';

      const dbInserts: any[] = [];

      for (const transactionData of transactionsData) {
        if (transactionData.transactionType === 'transfer' && transactionData.toAccountId) {
          const fromAccountName = getAccountName(transactionData.accountId);
          const toAccountName = getAccountName(transactionData.toAccountId);

          dbInserts.push({
            ...mapCashTransactionFormToDbInsert({
              ...transactionData,
              transactionType: 'cash_out',
              description: `Transfer to ${toAccountName}: ${transactionData.description}`
            }, user.id),
            location_id: currentBusiness.id,
            transaction_type: 'transfer_out'
          });

          dbInserts.push({
            ...mapCashTransactionFormToDbInsert({
              ...transactionData,
              accountId: transactionData.toAccountId,
              transactionType: 'cash_in',
              description: `Transfer from ${fromAccountName}: ${transactionData.description}`
            }, user.id),
            location_id: currentBusiness.id,
            transaction_type: 'transfer_in'
          });
        } else {
          const finalTransactionType = transactionData.transactionType === 'transfer'
            ? 'cash_out'
            : transactionData.transactionType;

          dbInserts.push({
            ...mapCashTransactionFormToDbInsert({
              ...transactionData,
              transactionType: finalTransactionType as any
            }, user.id),
            location_id: currentBusiness.id,
            transaction_type: finalTransactionType === 'cash_out' ? 'cash_out' : finalTransactionType
          });
        }
      }

      const { data, error } = await (supabase as any)
        .from('cash_transactions')
        .insert(dbInserts)
        .select();

      if (error) throw error;

      toast({
        title: "Success",
        description: `Successfully created ${transactionsData.length} transactions`
      });

      queryClient.invalidateQueries({ queryKey });
      return data.map((item: any) => mapDbCashTransactionToCashTransaction(item));
    } catch (error) {
      console.error('Error creating bulk transactions:', error);
      toast({
        title: "Error",
        description: "Failed to create bulk transactions. Please try again.",
        variant: "destructive"
      });
      throw error;
    }
  };

  const updateTransaction = async (id: string, updates: Partial<CashTransactionFormData>) => {
    try {
      if (!user || !currentBusiness) throw new Error('User not authenticated or no business selected');

      const updateData: any = {};
      if (updates.amount !== undefined) updateData.amount = updates.amount;
      if (updates.category !== undefined) updateData.category = updates.category;
      if (updates.description !== undefined) updateData.description = updates.description;
      if (updates.personInCharge !== undefined) updateData.person_in_charge = updates.personInCharge || null;
      if (updates.tags !== undefined) updateData.tags = updates.tags.length > 0 ? updates.tags : null;
      if (updates.date !== undefined) updateData.date = updates.date.toISOString().split('T')[0];
      if (updates.paymentMethod !== undefined) updateData.payment_method = updates.paymentMethod || null;
      if (updates.receiptImage !== undefined) updateData.receipt_image = updates.receiptImage || null;

      const { data, error } = await supabase
        .from('cash_transactions')
        .update(updateData)
        .eq('id', id)
        .eq('location_id', currentBusiness.id)
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Transaction updated successfully"
      });

      queryClient.invalidateQueries({ queryKey });
      return mapDbCashTransactionToCashTransaction(data);
    } catch (error) {
      console.error('Error updating cash transaction:', error);
      toast({
        title: "Error",
        description: "Failed to update transaction. Please try again.",
        variant: "destructive"
      });
      throw error;
    }
  };

  const deleteTransaction = async (id: string, onDeleted?: () => void) => {
    try {
      if (!currentBusiness) throw new Error('No business selected');

      const { data: installmentPayments } = await supabase
        .from('installment_payments')
        .select('id')
        .eq('cash_transaction_id', id);

      if (installmentPayments && installmentPayments.length > 0) {
        const { error: unlinkError } = await supabase
          .from('installment_payments')
          .update({ cash_transaction_id: null })
          .eq('cash_transaction_id', id);

        if (unlinkError) throw unlinkError;
      }

      const { error } = await supabase
        .from('cash_transactions')
        .delete()
        .eq('id', id)
        .eq('location_id', currentBusiness.id);

      if (error) throw error;

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
        description: "Failed to delete cash transaction. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };

  const getAccountOpeningBalance = useCallback(async (accountId: string): Promise<number> => {
    try {
      if (!currentBusiness) return 0;
      const { data, error } = await supabase
        .from('cash_accounts')
        .select('opening_balance')
        .eq('id', accountId)
        .eq('location_id', currentBusiness.id)
        .single();

      if (error) return 0;
      return Number(data?.opening_balance || 0);
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

  useEffect(() => {
    if (!user || !currentBusiness?.id) return;

    const channel = supabase
      .channel(`cash-tx-${currentBusiness.id}-${accountId || 'all'}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'cash_transactions',
        filter: `location_id=eq.${currentBusiness.id}`
      }, () => {
        queryClient.invalidateQueries({ queryKey });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, currentBusiness?.id, accountId, queryClient, queryKey]);

  return useMemo(() => ({
    transactions,
    isLoading,
    createTransaction,
    createBulkTransactions,
    updateTransaction,
    deleteTransaction,
    getDailySummary,
    getDateRangeSummary,
    refreshTransactions
  }), [transactions, isLoading, createTransaction, createBulkTransactions, updateTransaction, deleteTransaction, getDailySummary, getDateRangeSummary, refreshTransactions]);
};
