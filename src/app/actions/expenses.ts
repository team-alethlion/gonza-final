/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';

export async function getExpensesForChartAction(
    branchId: string,
    from?: string,
    to?: string
): Promise<{ date: string; amount: number }[]> {
    try {
        const where: any = { branchId };
        if (from || to) {
            where.date = {};
            if (from) where.date.gte = new Date(from);
            if (to) where.date.lte = new Date(to);
        }
        const expenses = await db.expense.findMany({
            where,
            select: { date: true, amount: true },
        });
        return expenses.map((e: any) => ({
            date: e.date.toISOString(),
            amount: Number(e.amount),
        }));
    } catch (error) {
        console.error('[getExpensesForChartAction]', error);
        return [];
    }
}

export async function getBusinessBackupDataAction(userId: string, branchId: string) {
    try {
        const [
            products,
            categories,
            stockHistory,
            sales,
            customers,
            expenses,
            expenseCategories,
            tasks,
            taskCategories,
            carriageInwards,
        ] = await Promise.all([
            db.product.findMany({ where: { branchId } }),
            db.category.findMany({ where: { branchId } }),
            db.productHistory.findMany({ where: { locationId: branchId } }),
            db.sale.findMany({ where: { branchId } }),
            db.customer.findMany({ where: { branchId } }),
            db.expense.findMany({ where: { branchId } }),
            db.expenseCategory.findMany({ where: { branchId } }),
            db.task.findMany({ where: { branchId } }),
            db.taskCategory.findMany({ where: { branchId } }),
            db.carriageInward.findMany({ where: { branchId } }),
        ]);

        return {
            success: true,
            data: {
                products,
                product_categories: categories,
                stock_history: stockHistory,
                sales,
                customers,
                expenses,
                expense_categories: expenseCategories,
                tasks,
                task_categories: taskCategories,
                carriage_inwards: carriageInwards,
            },
        };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function createSubscriptionPaymentAction(
    purchaseId: string,
    userId: string,
    branchId: string,
    amount: number,
    billingCycle: string
) {
    try {
        // Use a raw query or custom model if subscription_payments is not in Prisma schema
        // For now, log and return – implement when schema supports it
        console.log('[createSubscriptionPaymentAction] Payment record:', { purchaseId, userId, branchId, amount, billingCycle });
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function getLatestSubscriptionPaymentAction(userId: string) {
    try {
        // Return null if subscription_payments table isn't in Prisma schema yet
        return { success: true, data: null };
    } catch (error: any) {
        return { success: false, data: null, error: error.message };
    }
}
