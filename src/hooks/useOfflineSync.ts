import { useEffect, useState, useCallback } from 'react';
import { localDb, PendingSale } from '../lib/dexie';
import { createReceiptAction } from '@/app/actions/sales';
import { useToast } from '@/hooks/use-toast';

export const useOfflineSync = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const { toast } = useToast();

  const syncPendingSales = useCallback(async () => {
    if (isSyncing || !navigator.onLine) return;

    try {
      const pending = await localDb.pendingSales
        .where('status')
        .anyOf(['pending', 'failed'])
        .toArray();

      if (pending.length === 0) return;

      setIsSyncing(true);
      console.log(`[OfflineSync] Attempting to sync ${pending.length} pending sales...`);

      for (const sale of pending) {
        try {
          // Mark as syncing
          await localDb.pendingSales.update(sale.id!, { status: 'syncing' });

          const result = await createReceiptAction(
            sale.saleData,
            sale.branchId,
            sale.userId
          );

          if (result.success) {
            // Remove from local queue on success
            await localDb.pendingSales.delete(sale.id!);
            console.log(`[OfflineSync] Successfully synced sale: ${sale.saleData.receiptNumber}`);
          } else {
            throw new Error(result.error || 'Unknown sync error');
          }
        } catch (error: any) {
          console.error(`[OfflineSync] Failed to sync sale ${sale.id}:`, error);
          
          // Update retry count and status
          await localDb.pendingSales.update(sale.id!, {
            status: 'failed',
            error: error.message,
            retryCount: (sale.retryCount || 0) + 1
          });
        }
      }
    } catch (dbError) {
      console.error('[OfflineSync] Database error:', dbError);
    } finally {
      setIsSyncing(false);
    }
  }, [isSyncing]);

  // Sync when coming back online
  useEffect(() => {
    const handleOnline = () => {
      toast({
        title: "Back Online",
        description: "Attempting to sync offline transactions...",
      });
      syncPendingSales();
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, [syncPendingSales, toast]);

  // Periodic sync attempt (every 2 minutes)
  useEffect(() => {
    const interval = setInterval(syncPendingSales, 120000);
    return () => clearInterval(interval);
  }, [syncPendingSales]);

  return {
    isSyncing,
    syncPendingSales
  };
};

export const queueOfflineSale = async (saleData: any, branchId: string, userId: string) => {
  try {
    const pendingSale: PendingSale = {
      saleData,
      branchId,
      userId,
      createdAt: Date.now(),
      status: 'pending',
      retryCount: 0
    };

    await localDb.pendingSales.add(pendingSale);
  } catch (error) {
    console.error('[OfflineSync] Failed to queue sale:', error);
    throw error;
  }
};
