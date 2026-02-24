
import { useState, useCallback, useEffect } from 'react';
import { useBusiness } from '@/contexts/BusinessContext';
import { useCurrentUser } from './useCurrentUser';
import { getActivityHistoryAction } from '@/app/actions/activity';

export interface DeletedSale {
    id: string;
    receiptNumber: string;
    customerName: string;
    amount: number;
    totalQuantity: number;
    deletedAt: string;
    deletedBy: string;
    items: any[];
    fullMetadata: any;
}

export const useDeletedSales = () => {
    const [deletedSales, setDeletedSales] = useState<DeletedSale[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { currentBusiness } = useBusiness();
    const { userId } = useCurrentUser();

    const fetchDeletedSales = useCallback(async () => {
        if (!currentBusiness?.id || !userId) return;

        setIsLoading(true);
        try {
            const result = await getActivityHistoryAction(currentBusiness.id, 'SALES', 'DELETE');

            if (!result.success) throw new Error(result.error);

            const formatted: DeletedSale[] = (result.data || []).map((log: any) => {
                const metadata = log.metadata || {};
                const items = Array.isArray(metadata.items) ? metadata.items : [];

                let amount = Number(metadata.totalAmount || 0);
                if (amount === 0 && items.length > 0) {
                    amount = items.reduce((sum: number, item: any) => {
                        const itemTotal = Number(item.total) || (Number(item.price || 0) * Number(item.quantity || 0));
                        return sum + itemTotal;
                    }, 0);
                }

                const totalQuantity = items.reduce((sum: number, item: any) => sum + (Number(item.quantity ?? item.qty ?? 0)), 0);

                return {
                    id: log.id,
                    receiptNumber: metadata.receiptNumber || 'N/A',
                    customerName: metadata.customerName || 'Unknown',
                    amount,
                    totalQuantity,
                    deletedAt: log.createdAt,
                    deletedBy: log.profileName || 'Admin',
                    items,
                    fullMetadata: metadata
                };
            });

            setDeletedSales(formatted);
        } catch (error) {
            console.error('Error fetching deleted sales:', error);
        } finally {
            setIsLoading(false);
        }
    }, [currentBusiness?.id, userId]);

    useEffect(() => {
        fetchDeletedSales();
    }, [fetchDeletedSales]);

    return {
        deletedSales,
        isLoading,
        refetch: fetchDeletedSales
    };
};
