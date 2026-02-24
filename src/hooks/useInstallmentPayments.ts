import { useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/components/auth/AuthProvider';
import {
  getInstallmentPaymentsAction,
  createInstallmentPaymentAction,
  updateInstallmentPaymentAction,
  deleteInstallmentPaymentAction,
  linkInstallmentToCashAction,
  unlinkInstallmentFromCashAction
} from '@/app/actions/finance';

export interface InstallmentPayment {
  id: string;
  saleId: string;
  userId: string;
  amount: number;
  paymentDate: Date;
  notes?: string;
  cashTransactionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export const useInstallmentPayments = (saleId?: string) => {
  const [payments, setPayments] = useState<InstallmentPayment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const fetchPayments = useCallback(async (targetSaleId: string) => {
    try {
      setIsLoading(true);
      const result = await getInstallmentPaymentsAction(targetSaleId);

      if (!result.success || !result.data) throw new Error(result.error);

      const formattedPayments: InstallmentPayment[] = result.data.map((payment: any) => ({
        ...payment,
        paymentDate: new Date(payment.paymentDate),
        createdAt: new Date(payment.createdAt),
        updatedAt: new Date(payment.updatedAt)
      }));

      setPayments(formattedPayments);
    } catch (error) {
      console.error('Error fetching installment payments:', error);
      toast({
        title: "Error",
        description: "Failed to load payment history",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const createPayment = async (payment: {
    saleId: string;
    amount: number;
    notes?: string;
    accountId?: string;
    locationId?: string;
    paymentDate?: Date;
  }) => {
    if (!user) return null;

    try {
      const result = await createInstallmentPaymentAction({
        ...payment,
        userId: user.id,
        paymentDate: payment.paymentDate?.toISOString()
      });

      if (!result.success || !result.data) throw new Error(result.error);

      const newPayment: InstallmentPayment = {
        ...result.data,
        paymentDate: new Date(result.data.paymentDate),
        createdAt: new Date(result.data.createdAt),
        updatedAt: new Date(result.data.updatedAt)
      };

      setPayments(prev => [newPayment, ...prev]);
      return newPayment;
    } catch (error) {
      console.error('Error creating payment:', error);
      toast({
        title: "Error",
        description: "Failed to record payment",
        variant: "destructive"
      });
      return null;
    }
  };

  const updatePayment = async (paymentId: string, updates: {
    amount?: number;
    notes?: string;
    paymentDate?: Date;
  }) => {
    try {
      const result = await updateInstallmentPaymentAction(paymentId, {
        ...updates,
        paymentDate: updates.paymentDate?.toISOString()
      });

      if (!result.success || !result.data) throw new Error(result.error);

      const updatedPayment: InstallmentPayment = {
        ...result.data,
        paymentDate: new Date(result.data.paymentDate),
        createdAt: new Date(result.data.createdAt),
        updatedAt: new Date(result.data.updatedAt)
      };

      setPayments(prev => prev.map(p => p.id === paymentId ? updatedPayment : p));
      toast({
        title: "Success",
        description: "Payment updated successfully",
      });
      return updatedPayment;
    } catch (error: any) {
      console.error('Error updating payment:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to update payment",
        variant: "destructive"
      });
      return null;
    }
  };

  const deletePayment = async (paymentId: string) => {
    try {
      const result = await deleteInstallmentPaymentAction(paymentId);
      if (!result.success) throw new Error(result.error);

      setPayments(prev => prev.filter(p => p.id !== paymentId));
      toast({
        title: "Success",
        description: "Payment deleted successfully",
      });
      return true;
    } catch (error) {
      console.error('Error deleting payment:', error);
      toast({
        title: "Error",
        description: "Failed to delete payment",
        variant: "destructive"
      });
      return false;
    }
  };

  const linkPaymentToCashAccount = async (paymentId: string, accountId: string, locationId: string) => {
    if (!user) return;
    try {
      const result = await linkInstallmentToCashAction(paymentId, accountId, locationId, user.id);
      if (!result.success || !result.data) throw new Error(result.error);

      setPayments(prev => prev.map(p =>
        p.id === paymentId
          ? { ...p, cashTransactionId: result.data.id }
          : p
      ));

      toast({
        title: "Success",
        description: "Payment linked to cash account successfully",
      });
    } catch (error: any) {
      console.error('Error linking payment:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to link payment",
        variant: "destructive"
      });
    }
  };

  const unlinkPaymentFromCashAccount = async (paymentId: string) => {
    try {
      const result = await unlinkInstallmentFromCashAction(paymentId);
      if (!result.success) throw new Error(result.error);

      setPayments(prev => prev.map(p =>
        p.id === paymentId
          ? { ...p, cashTransactionId: undefined }
          : p
      ));

      toast({
        title: "Success",
        description: "Payment unlinked from cash account successfully",
      });
    } catch (error: any) {
      console.error('Error unlinking payment:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to unlink payment",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    if (saleId) {
      fetchPayments(saleId);
    }
  }, [saleId, fetchPayments]);

  return {
    payments,
    isLoading,
    fetchPayments,
    createPayment,
    updatePayment,
    deletePayment,
    linkPaymentToCashAccount,
    unlinkPaymentFromCashAccount
  };
};
