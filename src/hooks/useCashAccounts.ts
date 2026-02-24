import { useState, useEffect, useMemo, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useBusiness } from '@/contexts/BusinessContext';
import { useAuth } from '@/components/auth/AuthProvider';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { CashAccount } from '@/types/cash';
import {
  getCashAccountsAction,
  createCashAccountAction,
  updateCashAccountAction,
  deleteCashAccountAction,
  deleteCashAccountWithTransactionsAction,
  getCashAccountBalanceAction
} from '@/app/actions/finance';

export const useCashAccounts = () => {
  const [accounts, setAccounts] = useState<CashAccount[]>([]);
  const { toast } = useToast();
  const { currentBusiness } = useBusiness();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const loadAccounts = useCallback(async (): Promise<CashAccount[]> => {
    if (!currentBusiness?.id) return [];

    try {
      const result = await getCashAccountsAction(currentBusiness.id);

      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to fetch accounts');
      }

      return result.data.map((account: any) => ({
        ...account,
        createdAt: new Date(account.createdAt),
        updatedAt: new Date(account.updatedAt)
      }));
    } catch (error) {
      console.error('Error loading cash accounts:', error);
      toast({
        title: "Error",
        description: "Failed to load cash accounts",
        variant: "destructive"
      });
      return [];
    }
  }, [currentBusiness?.id, toast]);

  const queryKey = ['cash_accounts', currentBusiness?.id];
  const { data: queriedAccounts, isLoading: isQueryLoading } = useQuery({
    queryKey,
    queryFn: loadAccounts,
    enabled: !!currentBusiness?.id,
    staleTime: 30_000,
  });

  useEffect(() => {
    if (queriedAccounts) {
      setAccounts(queriedAccounts);
    }
  }, [queriedAccounts]);

  const isLoading = isQueryLoading && !queriedAccounts;

  const refreshAccounts = useCallback(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [queryClient, queryKey]);

  const createAccount = useCallback(async (accountData: {
    name: string;
    description?: string;
    openingBalance: number;
    isDefault?: boolean;
  }) => {
    if (!currentBusiness?.id || !user?.id) return null;

    try {
      const result = await createCashAccountAction({
        ...accountData,
        userId: user.id,
        locationId: currentBusiness.id
      });

      if (!result.success || !result.data) throw new Error(result.error);

      queryClient.invalidateQueries({ queryKey });
      toast({
        title: "Success",
        description: "Cash account created successfully"
      });

      return result.data;
    } catch (error) {
      console.error('Error creating cash account:', error);
      toast({
        title: "Error",
        description: "Failed to create cash account",
        variant: "destructive"
      });
      return null;
    }
  }, [currentBusiness?.id, user?.id, queryClient, queryKey, toast]);

  const updateAccount = async (id: string, updates: Partial<CashAccount>) => {
    if (!currentBusiness?.id) return false;

    try {
      const result = await updateCashAccountAction(id, {
        ...updates,
        locationId: currentBusiness.id
      });

      if (!result.success) throw new Error(result.error);

      queryClient.invalidateQueries({ queryKey });
      toast({
        title: "Success",
        description: "Cash account updated successfully"
      });

      return true;
    } catch (error) {
      console.error('Error updating cash account:', error);
      toast({
        title: "Error",
        description: "Failed to update cash account",
        variant: "destructive"
      });
      return false;
    }
  };

  const deleteAccount = async (id: string, onDeleted?: () => void) => {
    if (!currentBusiness?.id) return { success: false, hasTransactions: false };

    try {
      const result = await deleteCashAccountAction(id, currentBusiness.id);

      if (result.success) {
        queryClient.invalidateQueries({ queryKey });
        toast({
          title: "Success",
          description: "Cash account deleted successfully"
        });
        if (onDeleted) onDeleted();
      }

      return result as any;
    } catch (error) {
      console.error('Error deleting cash account:', error);
      toast({
        title: "Error",
        description: "Failed to delete cash account",
        variant: "destructive"
      });
      return { success: false, hasTransactions: false };
    }
  };

  const deleteAccountWithTransactions = async (id: string, deleteTransactions: boolean = false, onDeleted?: () => void) => {
    if (!currentBusiness?.id) return false;

    try {
      const result = await deleteCashAccountWithTransactionsAction(id, currentBusiness.id, deleteTransactions);

      if (!result.success) throw new Error(result.error);

      queryClient.invalidateQueries({ queryKey });
      toast({
        title: "Success",
        description: deleteTransactions
          ? "Account and transactions deleted"
          : "Account deleted (records unlinked)"
      });
      if (onDeleted) onDeleted();
      return true;
    } catch (error) {
      console.error('Error deleting cash account:', error);
      toast({
        title: "Error",
        description: "Failed to delete cash account",
        variant: "destructive"
      });
      return false;
    }
  };

  const getAccountBalance = useCallback(async (accountId: string): Promise<number> => {
    if (!currentBusiness?.id) return 0;
    try {
      const result = await getCashAccountBalanceAction(accountId, currentBusiness.id);
      if (result.success) return result.data as number;
      return 0;
    } catch (error) {
      console.error('Error getting balance:', error);
      return 0;
    }
  }, [currentBusiness?.id]);

  return useMemo(() => ({
    accounts,
    isLoading,
    createAccount,
    updateAccount,
    deleteAccount,
    deleteAccountWithTransactions,
    getAccountBalance,
    loadAccounts,
    refreshAccounts
  }), [accounts, isLoading, createAccount, updateAccount, deleteAccount, deleteAccountWithTransactions, getAccountBalance, loadAccounts, refreshAccounts]);
};
