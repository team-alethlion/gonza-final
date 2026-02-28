/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';

export interface InventoryStats {
    totalCostValue: number;
    totalStockValue: number;
    lowStockCount: number;
    outOfStockCount: number;
}

export async function getGlobalInventoryStatsAction(businessId: string) {
    try {
        const stats = await db.$queryRaw`
            SELECT 
                COALESCE(SUM(CAST(stock AS DECIMAL) * CAST("sellingPrice" AS DECIMAL)), 0) as "totalStockValue",
                COALESCE(SUM(CAST(stock AS DECIMAL) * CAST("costPrice" AS DECIMAL)), 0) as "totalCostValue",
                CAST(COUNT(CASE WHEN stock <= 0 THEN 1 END) AS INTEGER) as "outOfStockCount",
                CAST(COUNT(CASE WHEN stock > 0 AND stock <= "minStock" THEN 1 END) AS INTEGER) as "lowStockCount"
            FROM "Product"
            WHERE "branchId" = ${businessId}
        `;

        const result = (stats as any)[0];

        return {
            success: true,
            data: {
                totalCostValue: Number(result.totalCostValue),
                totalStockValue: Number(result.totalStockValue),
                outOfStockCount: Number(result.outOfStockCount),
                lowStockCount: Number(result.lowStockCount)
            }
        };
    } catch (error: any) {
        console.error('Error fetching global inventory stats:', error);
        return { success: false, error: error.message };
    }
}

export async function getAnalyticsSummaryAction(branchId: string, startDate?: string, endDate?: string) {
    try {
        const start = startDate ? new Date(startDate) : undefined;
        const end = endDate ? new Date(endDate) : undefined;

        const where: any = {
            branchId,
            paymentStatus: { not: 'QUOTE' }
        };

        if (start || end) {
            where.date = {};
            if (start) where.date.gte = start;
            if (end) where.date.lte = end;
        }

        // Aggregate Sales Data
        const stats = await db.sale.aggregate({
            where,
            _sum: {
                total: true,
                totalCost: true,
                profit: true
            }
        });

        // Get Status Counts
        const [paidCount, unpaidCount, installmentCount] = await Promise.all([
            db.sale.count({ where: { ...where, paymentStatus: 'PAID' } }),
            db.sale.count({ where: { ...where, paymentStatus: 'UNPAID' } }),
            db.sale.count({ where: { ...where, paymentStatus: 'INSTALLMENT' } })
        ]);

        // Aggregate Expenses
        const expensesWhere: any = { branchId };
        if (start || end) {
            expensesWhere.date = {};
            if (start) expensesWhere.date.gte = start;
            if (end) expensesWhere.date.lte = end;
        }

        const expensesAggregate = await db.expense.aggregate({
            where: expensesWhere,
            _sum: {
                amount: true
            }
        });

        return {
            success: true,
            data: {
                totalSales: Number(stats._sum.total || 0),
                totalCost: Number(stats._sum.totalCost || 0),
                totalProfit: Number(stats._sum.profit || 0),
                paidSalesCount: paidCount,
                pendingSalesCount: unpaidCount + installmentCount,
                totalExpenses: Number(expensesAggregate._sum.amount || 0)
            }
        };
    } catch (error: any) {
        console.error('Error fetching analytics summary:', error);
        return { success: false, error: error.message };
    }
}
