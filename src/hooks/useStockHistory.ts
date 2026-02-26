
import { useState, useEffect, useCallback } from 'react';
import { StockHistoryEntry } from '@/types';
import { useBusiness } from '@/contexts/BusinessContext';
import {
  getStockHistoryAction,
  createStockHistoryAction,
  recalculateStockChainAction,
  deleteStockHistoryEntriesByReferenceAction,
  updateStockHistoryDatesByReferenceAction,
  repairStockChainsAction,
  getStockRepairsPreviewAction
} from '@/app/actions/inventory';
import { useAuth } from '@/components/auth/AuthProvider';

export interface ChainRepairBreakEntry {
  entryId: string;
  createdAt: string;
  changeReason: string;
  currentPrevQty: number;
  currentNewQty: number;
  fixedPrevQty: number;
  fixedNewQty: number;
}

export interface ChainRepairPreview {
  productId: string;
  productName: string;
  totalEntries: number;
  brokenEntries: ChainRepairBreakEntry[];
  finalFixedQty: number;
  currentProductQty: number;
}

export const useStockHistory = (userId: string | undefined, productId?: string) => {
  const [stockHistory, setStockHistory] = useState<StockHistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentBusiness } = useBusiness();

  const loadStockHistory = useCallback(async () => {
    if (!userId || !currentBusiness) {
      setStockHistory([]);
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const result = await getStockHistoryAction(currentBusiness.id, productId);

      if (!result.success || !result.data) {
        throw new Error(result.error || 'Failed to fetch stock history');
      }

      const formattedHistory: StockHistoryEntry[] = result.data.map((entry: any) => ({
        id: entry.id,
        productId: entry.productId,
        oldQuantity: entry.oldQuantity,
        newQuantity: entry.newQuantity,
        changeReason: entry.changeReason,
        createdAt: new Date(entry.createdAt),
        referenceId: entry.referenceId,
        receiptNumber: entry.receiptNumber,
        product: entry.product
      }));

      setStockHistory(formattedHistory);
    } catch (error) {
      console.error('Error loading stock history:', error);
    } finally {
      setIsLoading(false);
    }
  }, [userId, currentBusiness?.id, productId]);

  useEffect(() => {
    loadStockHistory();
  }, [loadStockHistory]);

  const createStockHistoryEntry = async (
    targetProductId: string,
    previousQuantity: number,
    newQuantity: number,
    reason: string,
    referenceId?: string,
    entryDate?: Date,
    receiptNumber?: string,
    productName?: string
  ) => {
    try {
      if (!userId || !currentBusiness) return false;

      const snapshottedReason = productName
        ? `[${productName}] | ${reason}`
        : reason;

      const result = await createStockHistoryAction({
        userId,
        locationId: currentBusiness.id,
        productId: targetProductId,
        previousQuantity,
        newQuantity,
        changeReason: snapshottedReason,
        referenceId,
        receiptNumber,
        createdAt: entryDate?.toISOString()
      });

      if (!result.success) {
        console.error('Error creating stock history entry:', result.error);
        return false;
      }

      await loadStockHistory();
      return true;
    } catch (error) {
      console.error('Error creating stock history:', error);
      return false;
    }
  };

  const deleteMultipleStockHistoryEntriesByReference = async (referenceId: string) => {
    try {
      if (!currentBusiness) return false;
      const result = await deleteStockHistoryEntriesByReferenceAction(referenceId, currentBusiness.id);
      if (!result.success) throw new Error(result.error);

      await loadStockHistory();
      return true;
    } catch (error) {
      console.error('Error deleting stock history entries:', error);
      return false;
    }
  };

  const recalculateStockChain = async (targetProductId: string) => {
    try {
      if (!currentBusiness) return false;
      const result = await recalculateStockChainAction(targetProductId, currentBusiness.id);
      if (!result.success) throw new Error(result.error);

      await loadStockHistory();
      return true;
    } catch (error) {
      console.error('Error recalculating stock chain:', error);
      return false;
    }
  };

  const updateStockHistoryDatesBySaleId = async (saleId: string, newDate: Date) => {
    try {
      if (!currentBusiness) return false;
      const result = await updateStockHistoryDatesByReferenceAction(saleId, currentBusiness.id, newDate.toISOString());
      if (!result.success) throw new Error(result.error);

      await loadStockHistory();
      return true;
    } catch (error) {
      console.error('Error updating stock history dates:', error);
      return false;
    }
  };

  const repairAllStockChains = async (progressCallback?: (current: number, total: number) => void) => {
    try {
      if (!currentBusiness) return { repaired: 0, failed: 0 };
      const result = await repairStockChainsAction(currentBusiness.id);
      if (result.success && result.data) return result.data;
      return { repaired: 0, failed: 0 };
    } catch (error) {
      console.error('Error repairing all chains:', error);
      return { repaired: 0, failed: 0 };
    }
  }

  const previewStockChainRepairs = async (progressCallback?: (current: number, total: number) => void) => {
    try {
      if (!currentBusiness) return [];
      const result = await getStockRepairsPreviewAction(currentBusiness.id);
      if (result.success && result.data) return result.data;
      return [];
    } catch (error) {
      console.error('Error previewing repairs:', error);
      return [];
    }
  }

  return {
    stockHistory,
    isLoading,
    createStockHistoryEntry,
    deleteMultipleStockHistoryEntriesByReference,
    recalculateStockChain,
    updateStockHistoryDatesBySaleId,
    repairAllStockChains,
    previewStockChainRepairs,
    refreshHistory: loadStockHistory
  };
};
