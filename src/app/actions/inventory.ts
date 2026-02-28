/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';

// --- STOCK HISTORY ---

export async function getStockHistoryAction(locationId: string, productId?: string) {
    try {
        const where: any = { locationId };
        if (productId) where.productId = productId;

        const history = await db.productHistory.findMany({
            where,
            include: {
                product: {
                    select: {
                        name: true,
                        costPrice: true,
                        sellingPrice: true,
                        sku: true
                    }
                }
            },
            orderBy: [{ createdAt: 'desc' }, { id: 'desc' }]
        });

        return {
            success: true,
            data: history.map((h: any) => ({
                id: h.id,
                productId: h.productId,
                oldQuantity: h.previousQuantity,
                newQuantity: h.newQuantity,
                changeReason: h.changeReason,
                createdAt: h.createdAt.toISOString(),
                referenceId: h.referenceId,
                receiptNumber: h.receiptNumber,
                product: h.product ? {
                    name: h.product.name,
                    costPrice: h.product.costPrice,
                    sellingPrice: h.product.sellingPrice,
                    itemNumber: h.product.sku
                } : undefined
            }))
        };
    } catch (error: any) {
        console.error('Error fetching stock history:', error);
        return { success: false, error: error.message };
    }
}

export async function createStockHistoryAction(data: any) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            const entry = await tx.productHistory.create({
                data: {
                    userId: data.userId,
                    locationId: data.locationId,
                    productId: data.productId,
                    previousQuantity: data.previousQuantity,
                    newQuantity: data.newQuantity,
                    changeReason: data.changeReason,
                    referenceId: data.referenceId || null,
                    receiptNumber: data.receiptNumber || null,
                    createdAt: data.createdAt ? new Date(data.createdAt) : undefined
                }
            });

            // Update product stock as well
            await tx.product.update({
                where: { id: data.productId },
                data: { stock: data.newQuantity }
            });

            return entry;
        });

        revalidatePath('/inventory');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error creating stock history:', error);
        return { success: false, error: error.message };
    }
}

export async function recalculateStockChainAction(productId: string, locationId: string) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            const history = await tx.productHistory.findMany({
                where: { productId, locationId },
                orderBy: [{ createdAt: 'asc' }, { id: 'asc' }]
            });

            if (history.length === 0) return { finalQuantity: 0 };

            let runningQuantity = 0;
            const updates = [];

            for (const entry of history) {
                const change = entry.newQuantity - entry.previousQuantity;
                const newPrev = runningQuantity;
                const newNext = newPrev + change;

                if (entry.previousQuantity !== newPrev || entry.newQuantity !== newNext) {
                    updates.push(tx.productHistory.update({
                        where: { id: entry.id },
                        data: { previousQuantity: newPrev, newQuantity: newNext }
                    }));
                }
                runningQuantity = newNext;
            }

            if (updates.length > 0) {
                await Promise.all(updates);
            }

            // Update product
            await tx.product.update({
                where: { id: productId },
                data: { stock: runningQuantity }
            });

            return { finalQuantity: runningQuantity };
        });

        revalidatePath('/inventory');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error recalculating stock chain:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteStockHistoryEntriesByReferenceAction(referenceId: string, locationId: string) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            const entries = await tx.productHistory.findMany({
                where: { referenceId, locationId },
                select: { productId: true }
            });

            const productIds = [...new Set(entries.map((e: any) => e.productId as string))];

            await tx.productHistory.deleteMany({
                where: { referenceId, locationId }
            });

            // Recalculate chains for affected products
            for (const productId of productIds) {
                await recalculateStockChainInternal(tx, productId as string, locationId);
            }

            return { affectedProducts: productIds.length };
        });

        revalidatePath('/inventory');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error deleting stock history by reference:', error);
        return { success: false, error: error.message };
    }
}

export async function updateStockHistoryDatesByReferenceAction(referenceId: string, locationId: string, newDate: string) {
    try {
        const result = await db.productHistory.updateMany({
            where: { referenceId, locationId },
            data: { createdAt: new Date(newDate) }
        });

        revalidatePath('/inventory');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error updating stock history dates:', error);
        return { success: false, error: error.message };
    }
}

// Internal helper for use within transactions
async function recalculateStockChainInternal(tx: any, productId: string, locationId: string) {
    const history = await tx.productHistory.findMany({
        where: { productId, locationId },
        orderBy: [{ createdAt: 'asc' }, { id: 'asc' }]
    });

    let runningQuantity = 0;
    for (const entry of history) {
        const change = entry.newQuantity - entry.previousQuantity;
        const newPrev = runningQuantity;
        const newNext = newPrev + change;

        if (entry.previousQuantity !== newPrev || entry.newQuantity !== newNext) {
            await tx.productHistory.update({
                where: { id: entry.id },
                data: { previousQuantity: newPrev, newQuantity: newNext }
            });
        }
        runningQuantity = newNext;
    }

    await tx.product.update({
        where: { id: productId },
        data: { stock: runningQuantity }
    });
}

// --- REQUISITIONS ---

export async function getRequisitionsAction(userId: string, locationId: string) {
    try {
        const requisitions = await db.requisition.findMany({
            where: {
                userId,
                locationId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return {
            success: true,
            data: requisitions.map((req: any) => ({
                id: req.id,
                userId: req.userId,
                locationId: req.branchId,
                requisitionNumber: req.requisitionNumber,
                title: req.title || '',
                items: (req.items as any) || [],
                notes: req.notes,
                status: req.status,
                createdAt: req.createdAt.toISOString(),
                updatedAt: req.updatedAt.toISOString()
            }))
        };
    } catch (error: any) {
        console.error('Error fetching requisitions:', error);
        return { success: false, error: error.message };
    }
}

export async function createRequisitionAction(data: any) {
    try {
        const requisition = await db.requisition.create({
            data: {
                userId: data.userId,
                branchId: data.locationId,
                requisitionNumber: data.requisitionNumber,
                title: data.title,
                items: data.items,
                notes: data.notes,
                status: data.status || 'draft'
            }
        });

        revalidatePath('/requisitions');
        return {
            success: true,
            data: {
                id: requisition.id,
                userId: requisition.userId,
                locationId: requisition.branchId,
                requisitionNumber: requisition.requisitionNumber,
                title: requisition.title || '',
                items: ((requisition as any).items as any) || [],
                notes: requisition.notes,
                status: requisition.status,
                createdAt: requisition.createdAt.toISOString(),
                updatedAt: requisition.updatedAt.toISOString()
            }
        };
    } catch (error: any) {
        console.error('Error creating requisition:', error);
        return { success: false, error: error.message };
    }
}

export async function updateRequisitionAction(id: string, userId: string, data: any) {
    try {
        const requisition = await db.requisition.update({
            where: { id, userId },
            data: {
                title: data.title,
                items: data.items,
                notes: data.notes,
                status: data.status,
                updatedAt: new Date()
            }
        });

        revalidatePath('/requisitions');
        return {
            success: true,
            data: {
                id: requisition.id,
                userId: requisition.userId,
                locationId: requisition.branchId,
                requisitionNumber: requisition.requisitionNumber,
                title: requisition.title || '',
                items: ((requisition as any).items as any) || [],
                notes: requisition.notes,
                status: requisition.status,
                createdAt: requisition.createdAt.toISOString(),
                updatedAt: requisition.updatedAt.toISOString()
            }
        };
    } catch (error: any) {
        console.error('Error updating requisition:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteRequisitionAction(id: string, userId: string) {
    try {
        await db.requisition.delete({
            where: { id, userId }
        });

        revalidatePath('/requisitions');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting requisition:', error);
        return { success: false, error: error.message };
    }
}

// --- REPORTS / ANALYTICS ---

export async function getStockSummaryReportAction(locationId: string, startDate: string, endDate: string) {
    try {
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Fetch all products for the location
        const products = await db.product.findMany({
            where: { branchId: locationId },
            include: { category: true }
        });

        const reportData = await Promise.all(products.map(async (product: any) => {
            // This is a simplified version of the logic that was likely in the RPC
            // In a real production app, we'd use complex SQL or dedicated aggregate tables

            // Get history for this product in the date range
            const history = await db.productHistory.findMany({
                where: {
                    productId: product.id,
                    locationId,
                    createdAt: {
                        gte: start,
                        lte: end
                    }
                },
                orderBy: { createdAt: 'asc' }
            });

            // Calculate metrics from history
            let itemsSold = 0;
            let stockIn = 0;
            let adjustmentsIn = 0;
            let adjustmentsOut = 0;

            history.forEach((h: any) => {
                const change = h.newQuantity - h.previousQuantity;
                if (h.changeReason === 'SALE') {
                    itemsSold += Math.abs(change);
                } else if (h.changeReason === 'STOCK_IN' || h.changeReason === 'RESTOCK') {
                    stockIn += change;
                } else if (change > 0) {
                    adjustmentsIn += change;
                } else {
                    adjustmentsOut += Math.abs(change);
                }
            });

            // Get closing stock at end date (or current if after end date)
            const closingStockEntry = await db.productHistory.findFirst({
                where: {
                    productId: product.id,
                    locationId,
                    createdAt: { lte: end }
                },
                orderBy: { createdAt: 'desc' }
            });

            const closingStock = closingStockEntry?.newQuantity ?? 0;
            const openingStock = closingStock - (stockIn + adjustmentsIn - itemsSold - adjustmentsOut);

            return {
                productId: product.id,
                productName: product.name,
                itemNumber: product.sku || product.id,
                imageUrl: product.imageUrl,
                costPrice: Number(product.costPrice),
                sellingPrice: Number(product.sellingPrice),
                category: product.category?.name,
                openingStock,
                itemsSold,
                stockIn,
                transferOut: 0,
                returnIn: 0,
                returnOut: 0,
                adjustmentsIn,
                adjustmentsOut,
                closingStock,
                revaluation: closingStock * Number(product.costPrice)
            };
        }));

        return { success: true, data: reportData };
    } catch (error: any) {
        console.error('Error generating stock summary report:', error);
        return { success: false, error: error.message };
    }
}

// --- STOCK RECONCILIATION & REPAIRS ---

export async function getProductReconciliationAction(businessId: string, productId: string) {
    try {
        const product = await db.product.findUnique({
            where: { id: productId },
            include: { category: true }
        });

        if (!product) return { success: false, error: 'Product not found' };

        // Fetch all history entries
        const history = await db.productHistory.findMany({
            where: { productId, locationId: businessId },
            orderBy: [{ createdAt: 'asc' }, { id: 'asc' }]
        });

        // Fetch all sales containing this product
        const sales = await db.sale.findMany({
            where: { branchId: businessId },
            orderBy: { date: 'asc' }
        });

        const openingStock = history.length > 0 ? history[0].newStock : 0;
        const openingDate = history.length > 0 ? history[0].createdAt : null;

        const dailyTransactions = new Map<string, any>();
        let excludedSalesQty = 0;

        sales.forEach(sale => {
            const items = (sale.items as any[]) || [];
            const soldQty = items
                .filter(item => item.productId === productId)
                .reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);

            if (soldQty > 0) {
                if (openingDate && sale.date < openingDate) {
                    excludedSalesQty += soldQty;
                } else {
                    const dateStr = sale.date.toISOString().split('T')[0];
                    const day = dailyTransactions.get(dateStr) || { itemsSold: 0, stockAdded: 0, transferOut: 0, returnIn: 0, returnOut: 0, adjustments: 0 };
                    day.itemsSold += soldQty;
                    dailyTransactions.set(dateStr, day);
                }
            }
        });

        // Movements (excluding initial entry)
        const movements = history.slice(1);
        movements.forEach(h => {
            const dateStr = h.createdAt.toISOString().split('T')[0];
            const delta = h.newStock - h.oldStock;
            const reason = (h.changeReason || '').toLowerCase();

            const day = dailyTransactions.get(dateStr) || { itemsSold: 0, stockAdded: 0, transferOut: 0, returnIn: 0, returnOut: 0, adjustments: 0 };

            if (h.type === 'RESTOCK' || reason.includes('purchase') || reason.includes('addition')) {
                day.stockAdded += delta;
            } else if (reason.includes('transfer out')) {
                day.transferOut += Math.abs(delta);
            } else if (reason.includes('customer return')) {
                day.returnIn += delta;
            } else if (reason.includes('return to supplier')) {
                day.returnOut += Math.abs(delta);
            } else if (h.type !== 'SALE') {
                day.adjustments += delta;
            }
            dailyTransactions.set(dateStr, day);
        });

        const sortedDates = Array.from(dailyTransactions.keys()).sort();
        const dailyBreakdown = [];
        let runningStock = openingStock;

        for (const date of sortedDates) {
            const day = dailyTransactions.get(date);
            const startingStock = runningStock;
            const endingStock = startingStock - day.itemsSold + day.stockAdded - day.transferOut + day.returnIn - day.returnOut + day.adjustments;

            dailyBreakdown.push({
                date,
                startingStock,
                ...day,
                endingStock
            });
            runningStock = endingStock;
        }

        return {
            success: true,
            data: {
                product: {
                    id: product.id,
                    name: product.name,
                    quantity: product.stock,
                    itemNumber: product.sku
                },
                currentStock: product.stock,
                calculatedStock: runningStock,
                discrepancy: product.stock - runningStock,
                openingStock,
                openingDate: openingDate?.toISOString(),
                excludedSalesQty,
                dailyBreakdown
            }
        };
    } catch (error: any) {
        console.error('Error in reconciliation action:', error);
        return { success: false, error: error.message };
    }
}

export async function getStockRepairsPreviewAction(businessId: string) {
    try {
        const products = await db.product.findMany({
            where: { branchId: businessId },
            select: { id: true, name: true, stock: true }
        });

        const brokenChains = [];

        for (const product of products) {
            const history = await db.productHistory.findMany({
                where: { productId: product.id, locationId: businessId },
                orderBy: [{ createdAt: 'asc' }, { id: 'asc' }]
            });

            if (history.length === 0) continue;

            let runningQuantity = 0;
            const brokenEntries = [];

            for (const entry of history) {
                const change = entry.newStock - entry.oldStock;
                const expectedPrev = runningQuantity;
                const expectedNext = expectedPrev + change;

                if (entry.oldStock !== expectedPrev || entry.newStock !== expectedNext) {
                    brokenEntries.push({
                        entryId: entry.id,
                        createdAt: entry.createdAt.toISOString(),
                        changeReason: entry.changeReason,
                        currentPrevQty: entry.oldStock,
                        currentNewQty: entry.newStock,
                        fixedPrevQty: expectedPrev,
                        fixedNewQty: expectedNext
                    });
                }
                runningQuantity = expectedNext;
            }

            if (brokenEntries.length > 0 || Math.abs(product.stock - runningQuantity) > 0.001) {
                brokenChains.push({
                    productId: product.id,
                    productName: product.name,
                    totalEntries: history.length,
                    brokenEntries,
                    finalFixedQty: runningQuantity,
                    currentProductQty: product.stock
                });
            }
        }

        return { success: true, data: brokenChains };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function repairStockChainsAction(businessId: string, productIds?: string[]) {
    try {
        const ids = productIds || (await db.product.findMany({
            where: { branchId: businessId },
            select: { id: true }
        })).map(p => p.id);

        let repaired = 0;
        let failed = 0;

        for (const id of ids) {
            try {
                await recalculateStockChainAction(id, businessId);
                repaired++;
            } catch (err) {
                failed++;
            }
        }

        return { success: true, data: { repaired, failed } };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function getActivityByEntityIdsAction(entityIds: string[]) {
    try {
        const records = await db.activityHistory.findMany({
            where: { entityId: { in: entityIds } },
            select: { entityId: true, entityName: true }
        });
        return { success: true, data: records };
    } catch (error: any) {
        return { success: false, error: error.message, data: [] };
    }
}

export async function updateStockHistoryDatesAction(entryIds: string[], newDate: string) {
    try {
        await db.productHistory.updateMany({
            where: { id: { in: entryIds } },
            data: { createdAt: new Date(newDate) }
        });
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

// --- RECEIPT NUMBER GENERATION ---

export async function getNextReceiptNumberAction(branchId: string) {
    try {
        const lastSale = await db.sale.findFirst({
            where: { branchId },
            orderBy: { createdAt: 'desc' },
            select: { saleNumber: true }
        });

        let nextNum = 1;
        if (lastSale?.saleNumber) {
            // saleNumber format is "SAL-YYYY-NNNNNN" or plain digits
            const parts = lastSale.saleNumber.split('-');
            const lastDigits = parseInt(parts[parts.length - 1], 10);
            if (!isNaN(lastDigits)) nextNum = lastDigits + 1;
        }

        const formatted = String(nextNum).padStart(6, '0');
        return { success: true, data: formatted };
    } catch (error: any) {
        console.error('Error getting next receipt number:', error);
        return { success: false, error: error.message };
    }
}
