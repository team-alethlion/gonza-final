/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// Validation schema for requisition items
const requisitionItemSchema = z.object({
    productName: z.string().min(1, "Product name is required"),
    sku: z.string().optional().nullable(),
    quantity: z.number().positive("Quantity must be positive")
});

// Validation schema for the entire requisition
const createRequisitionSchema = z.object({
    branchId: z.string().min(1, "Branch ID is required"),
    userId: z.string().min(1, "User ID is required"),
    requisitionNumber: z.string().min(1, "Requisition number is required"),
    title: z.string().optional().nullable(),
    notes: z.string().optional().nullable(),
    priority: z.string().optional().default("NORMAL"),
    items: z.array(requisitionItemSchema).min(1, "At least one item is required").max(100, "Maximum 100 items per requisition")
});

// --- STOCK HISTORY ---

export async function getStockHistoryAction(locationId: string, productId?: string) {
    try {
        const where: any = { locationId };
        if (productId) where.productId = productId;

        const history = await db.productHistory.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            include: {
                user: {
                    select: { name: true }
                },
                product: {
                    select: { name: true, sku: true }
                }
            }
        });

        return {
            success: true,
            data: history.map((h: any) => ({
                id: h.id,
                productId: h.productId,
                date: h.createdAt.toISOString(),
                createdAt: h.createdAt.toISOString(),
                userName: h.user?.name || 'Unknown',
                oldQuantity: h.oldStock,
                newQuantity: h.newStock,
                change: h.newStock - h.oldStock,
                changeReason: h.changeReason || h.reason || 'Manual adjustment',
                reason: h.reason || h.changeReason || 'Manual adjustment',
                referenceId: h.referenceId,
                receiptNumber: h.receiptNumber,
                product: h.product
            }))
        };
    } catch (error: any) {
        console.error('Error fetching stock history:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteStockHistoryEntriesByReferenceAction(referenceId: string, locationId: string) {
    try {
        await db.productHistory.deleteMany({
            where: { referenceId, locationId }
        });
        revalidatePath('/inventory');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting stock history entries:', error);
        return { success: false, error: error.message };
    }
}

export async function updateStockHistoryDatesByReferenceAction(referenceId: string, locationId: string, newDate: string) {
    try {
        await db.productHistory.updateMany({
            where: { referenceId, locationId },
            data: { createdAt: new Date(newDate) }
        });
        revalidatePath('/inventory');
        return { success: true };
    } catch (error: any) {
        console.error('Error updating stock history dates:', error);
        return { success: false, error: error.message };
    }
}

export async function updateStockHistoryDatesAction(entryIds: string[], newDate: string) {
    try {
        await db.productHistory.updateMany({
            where: { id: { in: entryIds } },
            data: { createdAt: new Date(newDate) }
        });
        revalidatePath('/inventory');
        return { success: true };
    } catch (error: any) {
        console.error('Error updating stock history dates:', error);
        return { success: false, error: error.message };
    }
}

export async function getActivityByEntityIdsAction(entityIds: string[]) {
    try {
        const history = await db.activityHistory.findMany({
            where: { entityId: { in: entityIds } },
            select: { entityId: true, entityName: true }
        });
        return { success: true, data: history };
    } catch (error: any) {
        console.error('Error fetching activity history:', error);
        return { success: false, error: error.message };
    }
}

export async function repairStockChainsAction(locationId: string) {
    return repairAllStockChainsAction(locationId);
}

export async function createStockHistoryAction(data: any) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            // Get current stock first to ensure atomic increment/decrement later or to calculate change
            const product = await tx.product.findUnique({
                where: { id: data.productId },
                select: { stock: true }
            });

            if (!product) throw new Error("Product not found");

            const change = data.newQuantity - data.previousQuantity;

            const entry = await tx.productHistory.create({
                data: {
                    userId: data.userId,
                    locationId: data.locationId,
                    productId: data.productId,
                    oldStock: data.previousQuantity,
                    newStock: data.newQuantity,
                    type: data.type || (change >= 0 ? 'RESTOCK' : 'ADJUSTMENT'),
                    changeReason: data.changeReason,
                    referenceId: data.referenceId || null,
                    receiptNumber: data.receiptNumber || null,
                    createdAt: data.createdAt ? new Date(data.createdAt) : undefined
                }
            });

            // Update product stock ATOMICALLY
            await tx.product.update({
                where: { id: data.productId },
                data: { 
                    stock: { 
                        increment: change 
                    } 
                }
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

            if (history.length === 0) {
                const product = await tx.product.findUnique({ where: { id: productId }, select: { stock: true } });
                return { finalQuantity: product?.stock || 0 };
            }

            let runningQuantity = 0;
            
            for (const entry of history) {
                const change = entry.newStock - entry.oldStock;
                const newPrev = runningQuantity;
                const newNext = newPrev + change;

                if (entry.oldStock !== newPrev || entry.newStock !== newNext) {
                    await tx.productHistory.update({
                        where: { id: entry.id },
                        data: { oldStock: newPrev, newStock: newNext }
                    });
                }
                runningQuantity = newNext;
            }

            // Sync product master stock with the end of the chain
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

export async function repairAllStockChainsAction(locationId: string) {
    try {
        const products = await db.product.findMany({
            where: { branchId: locationId },
            select: { id: true }
        });

        let repaired = 0;
        let failed = 0;

        for (const product of products) {
            try {
                await recalculateStockChainAction(product.id, locationId);
                repaired++;
            } catch (err) {
                console.error(`Failed to repair product ${product.id}:`, err);
                failed++;
            }
        }

        return { success: true, data: { repaired, failed } };
    } catch (error: any) {
        console.error('Error repairing all stock chains:', error);
        return { success: false, error: error.message };
    }
}

// --- REPORTS ---

export async function getStockSummaryReportAction(locationId: string, startDate: string, endDate: string) {
    try {
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Optimized single query to get all metrics for all products at once
        const reportDataRaw: any[] = await db.$queryRaw`
            WITH ProductMetrics AS (
                SELECT 
                    "productId",
                    SUM(CASE WHEN "type" = 'SALE' THEN ABS("newStock" - "oldStock") ELSE 0 END) as "itemsSold",
                    SUM(CASE WHEN "type" IN ('STOCK_IN', 'RESTOCK') THEN ("newStock" - "oldStock") ELSE 0 END) as "stockIn",
                    SUM(CASE WHEN ("newStock" - "oldStock") > 0 AND "type" NOT IN ('STOCK_IN', 'RESTOCK', 'SALE') THEN ("newStock" - "oldStock") ELSE 0 END) as "adjustmentsIn",
                    SUM(CASE WHEN ("newStock" - "oldStock") < 0 AND "type" NOT IN ('STOCK_IN', 'RESTOCK', 'SALE') THEN ABS("newStock" - "oldStock") ELSE 0 END) as "adjustmentsOut"
                FROM "ProductHistory"
                WHERE "locationId" = ${locationId} AND "createdAt" BETWEEN ${start} AND ${end}
                GROUP BY "productId"
            ),
            ClosingStock AS (
                SELECT DISTINCT ON ("productId")
                    "productId",
                    "newStock" as "closingStock"
                FROM "ProductHistory"
                WHERE "locationId" = ${locationId} AND "createdAt" <= ${end}
                ORDER BY "productId", "createdAt" DESC, "id" DESC
            )
            SELECT 
                p.id as "productId",
                p.name as "productName",
                p.sku as "itemNumber",
                p.image as "imageUrl",
                p."costPrice",
                p."sellingPrice",
                c.name as "category",
                COALESCE(cs."closingStock", 0) as "closingStock",
                COALESCE(pm."itemsSold", 0) as "itemsSold",
                COALESCE(pm."stockIn", 0) as "stockIn",
                COALESCE(pm."adjustmentsIn", 0) as "adjustmentsIn",
                COALESCE(pm."adjustmentsOut", 0) as "adjustmentsOut"
            FROM "Product" p
            LEFT JOIN "Category" c ON p."categoryId" = c.id
            LEFT JOIN ProductMetrics pm ON p.id = pm."productId"
            LEFT JOIN ClosingStock cs ON p.id = cs."productId"
            WHERE p."branchId" = ${locationId}
        `;

        const reportData = reportDataRaw.map((row: any) => {
            const closingStock = Number(row.closingStock || 0);
            const itemsSold = Number(row.itemsSold || 0);
            const stockIn = Number(row.stockIn || 0);
            const adjustmentsIn = Number(row.adjustmentsIn || 0);
            const adjustmentsOut = Number(row.adjustmentsOut || 0);

            const openingStock = closingStock - (stockIn + adjustmentsIn) + (itemsSold + adjustmentsOut);

            return {
                productId: row.productId,
                productName: row.productName,
                itemNumber: row.itemNumber || row.productId,
                imageUrl: row.imageUrl,
                costPrice: Number(row.costPrice),
                sellingPrice: Number(row.sellingPrice),
                category: row.category,
                openingStock,
                itemsSold,
                stockIn,
                transferOut: 0,
                returnIn: 0,
                returnOut: 0,
                adjustmentsIn,
                adjustmentsOut,
                closingStock,
                revaluation: closingStock * Number(row.costPrice)
            };
        });

        return { success: true, data: reportData };
    } catch (error: any) {
        console.error('Error generating stock summary report:', error);
        return { success: false, error: error.message };
    }
}

export async function getStockRepairsPreviewAction(businessId: string) {
    try {
        const discrepancies: any[] = await db.$queryRaw`
            WITH HistoryLag AS (
                SELECT 
                    h.id,
                    h."productId",
                    p.name as "productName",
                    h."oldStock",
                    h."newStock",
                    h."type",
                    h."createdAt",
                    p.stock as "currentProductStock",
                    COALESCE(LAG(h."newStock") OVER (PARTITION BY h."productId" ORDER BY h."createdAt" ASC, h.id ASC), 0) as "expectedPrev"
                FROM "ProductHistory" h
                JOIN "Product" p ON h."productId" = p.id
                WHERE h."locationId" = ${businessId}
            ),
            BrokenEntries AS (
                SELECT * FROM HistoryLag 
                WHERE "oldStock" != "expectedPrev"
            ),
            FinalStockCheck AS (
                SELECT DISTINCT ON ("productId")
                    "productId",
                    "productName",
                    "newStock" as "finalHistoryStock",
                    "currentProductStock"
                FROM HistoryLag
                ORDER BY "productId", "createdAt" DESC, id DESC
            )
            SELECT 
                f."productId",
                f."productName",
                f."finalHistoryStock",
                f."currentProductStock",
                COALESCE(json_agg(b.*) FILTER (WHERE b.id IS NOT NULL), '[]') as "brokenEntries"
            FROM FinalStockCheck f
            LEFT JOIN BrokenEntries b ON f."productId" = b."productId"
            GROUP BY f."productId", f."productName", f."finalHistoryStock", f."currentProductStock"
            HAVING f."finalHistoryStock" != f."currentProductStock" OR json_array_length(COALESCE(json_agg(b.*) FILTER (WHERE b.id IS NOT NULL), '[]')) > 0
        `;

        return {
            success: true,
            data: discrepancies.map((d: any) => ({
                productId: d.productId,
                productName: d.productName,
                totalEntries: 0,
                brokenEntries: d.brokenEntries.map((b: any) => ({
                    entryId: b.id,
                    createdAt: new Date(b.createdAt).toISOString(),
                    changeReason: b.type,
                    currentPrevQty: b.oldStock,
                    currentNewQty: b.newStock,
                    fixedPrevQty: b.expectedPrev,
                    fixedNewQty: b.expectedPrev + (b.newStock - b.oldStock)
                })),
                finalFixedQty: d.finalHistoryStock,
                currentProductQty: d.currentProductStock
            }))
        };
    } catch (error: any) {
        console.error('Error fetching stock repairs preview:', error);
        return { success: false, error: error.message };
    }
}

// --- REQUISITIONS ---

export async function getRequisitionsAction(userId: string, branchId: string) {
    try {
        const records = await db.requisition.findMany({
            where: { branchId },
            include: {
                user: { select: { name: true } },
                items: true
            },
            orderBy: { createdAt: 'desc' }
        });

        return {
            success: true,
            data: records.map((r: any) => ({
                ...r,
                date: r.date.toISOString(),
                createdAt: r.createdAt.toISOString(),
                updatedAt: r.updatedAt.toISOString(),
                userName: r.user?.name || 'Unknown',
                itemCount: r.items.length
            }))
        };
    } catch (error: any) {
        console.error('Error fetching requisitions:', error);
        return { success: false, error: error.message };
    }
}

export async function createRequisitionAction(data: any) {
    try {
        // Map locationId to branchId for Zod validation if needed
        const payload = {
            ...data,
            branchId: data.locationId || data.branchId
        };
        
        // Validate input data
        const validatedData = createRequisitionSchema.parse(payload);

        const result = await db.requisition.create({
            data: {
                branchId: validatedData.branchId,
                userId: validatedData.userId,
                requisitionNumber: validatedData.requisitionNumber,
                title: validatedData.title || '',
                notes: validatedData.notes || null,
                status: 'PENDING',
                priority: validatedData.priority || 'NORMAL',
                items: {
                    create: validatedData.items.map((item: any) => ({
                        productName: item.productName,
                        sku: item.sku || null,
                        quantity: Number(item.quantity)
                    }))
                }
            },
            include: {
                items: true
            }
        });

        revalidatePath('/inventory/requisitions');
        return { success: true, data: result };
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            console.error('Validation error for requisition:', error.errors);
            return { success: false, error: `Validation failed: ${error.errors.map(e => e.message).join(', ')}` };
        }
        console.error('Error creating requisition:', error);
        return { success: false, error: error.message };
    }
}

export async function updateRequisitionAction(id: string, userId: string, updates: any) {
    try {
        const result = await db.requisition.update({
            where: { id },
            data: {
                title: updates.title,
                notes: updates.notes,
                status: updates.status,
                priority: updates.priority,
            },
            include: {
                items: true
            }
        });

        revalidatePath('/inventory/requisitions');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error updating requisition:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteRequisitionAction(id: string, userId: string) {
    try {
        await db.requisition.delete({
            where: { id }
        });

        revalidatePath('/inventory/requisitions');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting requisition:', error);
        return { success: false, error: error.message };
    }
}

export async function updateStockHistoryEntryAction(id: string, branchId: string, updates: any) {
    try {
        const result = await db.productHistory.update({
            where: { id, locationId: branchId },
            data: {
                newStock: updates.newQuantity,
                changeReason: updates.changeReason,
                createdAt: updates.createdAt ? new Date(updates.createdAt) : undefined
            }
        });
        revalidatePath('/inventory');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error updating stock history entry:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteStockHistoryEntryAction(id: string, branchId: string) {
    try {
        await db.productHistory.delete({
            where: { id, locationId: branchId }
        });
        revalidatePath('/inventory');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting stock history entry:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteMultipleStockHistoryEntriesAction(ids: string[], branchId: string) {
    try {
        await db.productHistory.deleteMany({
            where: { id: { in: ids }, locationId: branchId }
        });
        revalidatePath('/inventory');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting multiple stock history entries:', error);
        return { success: false, error: error.message };
    }
}

// --- RECEIPT NUMBERS ---

export async function getNextReceiptNumberAction(locationId: string) {
    try {
        const counter = await db.branchCounter.upsert({
            where: {
                branchId_type: {
                    branchId: locationId,
                    type: 'sale'
                }
            },
            update: {
                count: { increment: 1 }
            },
            create: {
                branchId: locationId,
                type: 'sale',
                count: 1
            }
        });

        const formatted = String(counter.count).padStart(6, '0');
        return { success: true, data: formatted };
    } catch (error: any) {
        console.error('Error getting next receipt number:', error);
        return { success: false, error: error.message };
    }
}
