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
        const products = await db.product.findMany({
            where: {
                branchId: businessId,
            },
            select: {
                stock: true,
                minStock: true,
                costPrice: true,
                sellingPrice: true
            }
        });

        const stats: InventoryStats = products.reduce((acc: InventoryStats, p: any) => {
            const stock = p.stock || 0;
            const cost = p.costPrice || 0;
            const price = p.sellingPrice || 0;
            const minStock = p.minStock || 0;

            acc.totalCostValue += stock * cost;
            acc.totalStockValue += stock * price;

            if (stock <= 0) {
                acc.outOfStockCount += 1;
            } else if (stock <= minStock) {
                acc.lowStockCount += 1;
            }

            return acc;
        }, {
            totalCostValue: 0,
            totalStockValue: 0,
            lowStockCount: 0,
            outOfStockCount: 0
        });

        return { success: true, data: stats };
    } catch (error: any) {
        console.error('Error fetching global inventory stats:', error);
        return { success: false, error: error.message };
    }
}

export async function getTotalExpensesAction(businessId: string, startDate?: string, endDate?: string) {
    try {
        const where: any = {
            branchId: businessId
        };

        if (startDate || endDate) {
            where.date = {};
            if (startDate) {
                where.date.gte = new Date(startDate);
            }
            if (endDate) {
                where.date.lte = new Date(endDate);
            }
        }

        const expenses = await db.expense.findMany({
            where,
            select: {
                amount: true
            }
        });

        const total = expenses.reduce((sum: number, e: any) => sum + Number(e.amount), 0);

        return { success: true, data: total };
    } catch (error: any) {
        console.error('Error fetching total expenses:', error);
        return { success: false, error: error.message };
    }
}
