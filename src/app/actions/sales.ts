/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';

export async function getSalesAction(businessId: string, sortOrder: 'asc' | 'desc' = 'desc', pageSize?: number) {
    try {
        const queryOptions: any = {
            where: {
                branchId: businessId,
            },
            orderBy: {
                createdAt: sortOrder,
            },
            include: {
                cashTransaction: true,
            }
        };

        if (pageSize && pageSize > 0) {
            queryOptions.take = pageSize;
        }

        const sales = await db.sale.findMany(queryOptions);

        // Provide default mappings to existing React components
        return sales.map((item: any) => ({
            id: item.id,
            user_id: item.userId,
            location_id: item.branchId,
            receipt_number: item.saleNumber,
            customer_name: item.customerName,
            customer_address: item.customerAddress,
            customer_contact: item.customerPhone,
            customer_id: item.customerId,
            items: item.items as any, // jsonb type
            payment_status: item.paymentStatus,
            profit: 0, // Profit not stored directly
            date: item.date.toISOString(),
            tax_rate: item.taxRate ? Number(item.taxRate) : 0,
            created_at: item.createdAt.toISOString(),
            updated_at: item.updatedAt.toISOString(),
            cash_transaction_id: item.cashTransactionId,
            amount_paid: Number(item.amountPaid),
            amount_due: Number(item.balance),
            category_id: item.categoryId,
            notes: item.notes
        }));
    } catch (error) {
        console.error('Error fetching sales:', error);
        return [];
    }
}

export async function deleteSaleAction(id: string, businessId: string) {
    try {
        const sale = await db.sale.findUnique({
            where: { id },
            include: { cashTransaction: true, installmentPayments: true }
        });

        if (!sale || sale.branchId !== businessId) {
            return { success: false, error: 'Sale not found or unauthorized' };
        }

        await db.$transaction(async (tx) => {
            // Delete installments
            await tx.installmentPayment.deleteMany({
                where: { saleId: id }
            });

            // Delete associated cash transaction
            if (sale.cashTransactionId) {
                await tx.cashTransaction.delete({
                    where: { id: sale.cashTransactionId }
                });
            }

            // Delete the sale itself
            await tx.sale.delete({
                where: { id }
            });
        });

        return {
            success: true,
            sale: {
                receiptNumber: sale.saleNumber,
                customerName: sale.customerName,
                customerAddress: sale.customerAddress,
                customerContact: sale.customerPhone,
                paymentStatus: sale.paymentStatus,
                cashTransactionId: sale.cashTransactionId,
                items: sale.items as any,
                amountPaid: Number(sale.amountPaid),
                amountDue: Number(sale.balance),
                profit: 0,
                taxRate: Number(sale.taxRate),
                notes: sale.notes
            }
        };
    } catch (error: any) {
        console.error('Error deleting sale:', error);
        return { success: false, error: error.message || 'Failed to delete sale' };
    }
}

export async function upsertSaleAction(saleDbData: any, isUpdate: boolean, updateId?: string) {
    try {
        // Map PaymentStatus if needed
        let status = saleDbData.payment_status;
        if (status === 'NOT PAID') status = 'UNPAID';
        else if (status === 'Installment Sale') status = 'INSTALLMENT';
        else if (status === 'Paid') status = 'PAID';
        else if (status === 'Quote') status = 'QUOTE';

        const prismaData: any = {
            userId: saleDbData.user_id,
            branchId: saleDbData.location_id,
            saleNumber: saleDbData.receipt_number,
            customerName: saleDbData.customer_name,
            customerAddress: saleDbData.customer_address,
            customerPhone: saleDbData.customer_contact,
            customerId: saleDbData.customer_id,
            items: saleDbData.items,
            paymentStatus: status,
            date: new Date(saleDbData.date),
            taxRate: saleDbData.tax_rate,
            cashTransactionId: saleDbData.cash_transaction_id,
            amountPaid: saleDbData.amount_paid,
            balance: saleDbData.amount_due,
            categoryId: saleDbData.category_id,
            notes: saleDbData.notes,
            subtotal: 0, // Placeholder
            total: 0,     // Placeholder
        };

        if (isUpdate && updateId) {
            const updated = await db.sale.update({
                where: { id: updateId },
                data: prismaData
            });
            return { success: true, data: updated };
        } else {
            const created = await db.sale.create({
                data: prismaData
            });
            return { success: true, data: created };
        }
    } catch (error: any) {
        console.error('Error upserting sale:', error);
        return { success: false, error: error.message || 'Failed to preserve sale' };
    }
}

export async function createReceiptAction(saleData: any, businessId: string, userId: string) {
    try {
        let status = saleData.paymentStatus;
        if (status === 'NOT PAID') status = 'UNPAID';
        else if (status === 'Installment Sale') status = 'INSTALLMENT';
        else if (status === 'Paid') status = 'PAID';
        else if (status === 'Quote') status = 'QUOTE';

        const created = await db.sale.create({
            data: {
                userId: userId,
                branchId: businessId,
                saleNumber: saleData.receiptNumber,
                customerName: saleData.customerName,
                customerId: saleData.customerId,
                date: new Date(saleData.date),
                items: saleData.items,
                paymentStatus: status,
                amountPaid: saleData.amountPaid || 0,
                balance: saleData.amountDue || 0,
                cashAccountId: saleData.cashAccountId,
                notes: saleData.notes,
                subtotal: 0,
                total: 0,
            }
        });

        revalidatePath('/sales');
        revalidatePath('/customers');

        return { success: true, data: created };
    } catch (error: any) {
        console.error('Error creating receipt:', error);
        return { success: false, error: error.message || 'Failed to create receipt' };
    }
}

// --- SALES CATEGORIES ---

export async function getSalesCategoriesAction(businessId: string) {
    try {
        const categories = await db.saleCategory.findMany({
            where: { branchId: businessId },
            orderBy: { name: 'asc' }
        });

        return { success: true, data: categories };
    } catch (error: any) {
        console.error('Error fetching sales categories:', error);
        return { success: false, error: error.message };
    }
}

export async function createSalesCategoryAction(businessId: string, userId: string, name: string, isDefault: boolean = false) {
    try {
        const category = await db.saleCategory.create({
            data: {
                branchId: businessId,
                userId,
                name,
            }
        });

        revalidatePath('/sales');
        return { success: true, data: category };
    } catch (error: any) {
        console.error('Error creating sales category:', error);
        return { success: false, error: error.message };
    }
}

export async function updateSalesCategoryAction(id: string, name: string) {
    try {
        const category = await db.saleCategory.update({
            where: { id },
            data: { name }
        });

        revalidatePath('/sales');
        return { success: true, data: category };
    } catch (error: any) {
        console.error('Error updating sales category:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteSalesCategoryAction(id: string) {
    try {
        await db.saleCategory.delete({
            where: { id }
        });

        revalidatePath('/sales');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting sales category:', error);
        return { success: false, error: error.message };
    }
}

// --- CUSTOMER LOOKUP ---

export async function getCustomerByNameAction(branchId: string, name: string) {
    if (!branchId || !name) return null;
    try {
        const customer = await db.customer.findFirst({
            where: {
                branchId,
                name: { contains: name, mode: 'insensitive' }
            },
            select: { id: true, name: true }
        });
        return customer;
    } catch (error) {
        console.error('Error looking up customer by name:', error);
        return null;
    }
}

export async function updateSaleCustomerAction(saleId: string, customerId: string) {
    try {
        await db.sale.update({
            where: { id: saleId },
            data: { customerId }
        });
        return { success: true };
    } catch (error: any) {
        console.error('Error updating sale customer:', error);
        return { success: false, error: error.message };
    }
}

// --- SALES GOALS ---

export async function getSalesGoalAction(userId: string, branchId: string, month: number, year: number) {
    try {
        const goal = await db.salesGoal.findFirst({
            where: { userId, branchId, period: `${year}-${String(month).padStart(2, '0')}` }
        });
        return { success: true, data: goal };
    } catch (error: any) {
        console.error('Error fetching sales goal:', error);
        return { success: false, error: error.message };
    }
}

export async function upsertSalesGoalAction(
    userId: string,
    branchId: string,
    month: number,
    year: number,
    amount: number,
    existingGoalId?: string | null
) {
    try {
        const period = `${year}-${String(month).padStart(2, '0')}`;

        if (existingGoalId) {
            const updated = await db.salesGoal.update({
                where: { id: existingGoalId },
                data: { target: amount }
            });
            revalidatePath('/');
            return { success: true, data: updated };
        } else {
            const created = await db.salesGoal.create({
                data: {
                    userId,
                    branchId,
                    target: amount,
                    current: 0,
                    period,
                    startDate: new Date(year, month - 1, 1),
                    endDate: new Date(year, month, 0),
                    status: 'active'
                }
            });
            revalidatePath('/');
            return { success: true, data: created };
        }
    } catch (error: any) {
        console.error('Error upserting sales goal:', error);
        return { success: false, error: error.message };
    }
}

export async function getPeriodSalesAction(branchId: string, startDate: Date, endDate: Date) {
    try {
        const sales = await db.sale.findMany({
            where: {
                branchId,
                date: { gte: startDate, lte: endDate },
                paymentStatus: { not: 'QUOTE' }
            },
            select: { amountPaid: true }
        });

        const total = sales.reduce((sum, sale) => sum + Number(sale.amountPaid || 0), 0);
        return { success: true, data: total };
    } catch (error: any) {
        console.error('Error fetching period sales:', error);
        return { success: false, error: error.message };
    }
}
