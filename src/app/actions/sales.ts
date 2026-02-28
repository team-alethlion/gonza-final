/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { PaymentStatus } from '@prisma/client';
import { checkSalesQuota } from '@/lib/quota-check';
import { auth } from '@/auth';

const saleItemSchema = z.object({
    productId: z.string().optional().nullable(),
    productName: z.string().min(1, "Product name is required"),
    quantity: z.number().positive("Quantity must be positive"),
    price: z.number().nonnegative("Price cannot be negative"),
    cost: z.number().nonnegative("Cost cannot be negative"),
    discountType: z.string().optional().nullable(),
    discountAmount: z.number().optional().nullable(),
    discountPercentage: z.number().optional().nullable()
});

const createReceiptSchema = z.object({
    receiptNumber: z.string().min(1, "Receipt number is required"),
    customerName: z.string().optional().nullable().default(""),
    customerId: z.string().optional().nullable(),
    date: z.string().or(z.date()),
    items: z.array(saleItemSchema).min(1, "At least one item is required").max(100, "Maximum 100 items per sale"),
    paymentStatus: z.string(),
    amountPaid: z.number().nonnegative().optional().default(0),
    amountDue: z.number().nonnegative().optional().default(0),
    cashAccountId: z.string().optional().nullable(),
    notes: z.string().optional().nullable(),
    taxRate: z.number().nonnegative().optional().default(0)
});

function calculateSaleFinancials(items: any[], taxRate: number) {
    let subtotal = 0;
    let totalCost = 0;
    let totalDiscount = 0;

    if (!items || !Array.isArray(items)) {
        return { subtotal: 0, total: 0, totalCost: 0, profit: 0, discount: 0, taxAmount: 0 };
    }

    items.forEach((item: any) => {
        const qty = Number(item.quantity) || 0;
        const price = Number(item.price) || 0;
        const cost = Number(item.cost) || 0;
        const itemSubtotal = price * qty;
        
        const discountAmount = item.discountType === 'amount'
            ? (Number(item.discountAmount) || 0)
            : (itemSubtotal * (Number(item.discountPercentage) || 0)) / 100;
        
        subtotal += (itemSubtotal - discountAmount);
        totalDiscount += discountAmount;
        totalCost += cost * qty;
    });

    const taxAmount = subtotal * (Number(taxRate || 0) / 100);
    const total = subtotal + taxAmount;
    const profit = total - totalCost;

    return {
        subtotal,
        total,
        totalCost,
        profit,
        discount: totalDiscount,
        taxAmount
    };
}

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
            profit: Number(item.profit || 0),
            date: item.date.toISOString(),
            tax_rate: item.taxRate ? Number(item.taxRate) : 0,
            created_at: item.createdAt.toISOString(),
            updated_at: item.updatedAt.toISOString(),
            cash_transaction_id: item.cashTransactionId,
            amount_paid: Number(item.amountPaid),
            amount_due: Number(item.balance),
            category_id: item.categoryId,
            notes: item.notes,
            total: Number(item.total || 0),
            total_cost: Number(item.totalCost || 0),
            subtotal: Number(item.subtotal || 0),
            discount: Number(item.discount || 0),
            tax_amount: Number(item.taxAmount || 0)
        }));
    } catch (error) {
        console.error('Error fetching sales:', error);
        return [];
    }
}

async function processSaleInventory(tx: any, items: any[], branchId: string, userId: string, receiptNumber: string, date: Date) {
    for (const item of items) {
        if (!item.productId) continue;

        const product = await tx.product.findUnique({
            where: { id: item.productId },
            select: { stock: true, name: true }
        });

        if (!product) continue;

        const quantitySold = Number(item.quantity) || 0;
        const previousStock = Number(product.stock);
        const newStock = previousStock - quantitySold;

        // 1. Update Product Stock Atomically
        await tx.product.update({
            where: { id: item.productId },
            data: { stock: { decrement: quantitySold } }
        });

        // 2. Create Product History Entry
        await tx.productHistory.create({
            data: {
                userId,
                locationId: branchId,
                productId: item.productId,
                oldStock: previousStock,
                newStock: newStock,
                type: 'SALE',
                changeReason: 'SALE',
                reason: `Sale #${receiptNumber}`,
                referenceId: receiptNumber,
                referenceType: 'SALE',
                createdAt: date
            }
        });
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
            // 1. Restore Stock if it wasn't a quote
            if (sale.paymentStatus !== 'QUOTE') {
                const items = sale.items as any[];
                if (items && Array.isArray(items)) {
                    for (const item of items) {
                        if (!item.productId) continue;

                        const product = await tx.product.findUnique({
                            where: { id: item.productId },
                            select: { stock: true }
                        });

                        if (product) {
                            const quantityToRestore = Number(item.quantity) || 0;
                            const previousStock = Number(product.stock);
                            const newStock = previousStock + quantityToRestore;

                            // Atomic increment
                            await tx.product.update({
                                where: { id: item.productId },
                                data: { stock: { increment: quantityToRestore } }
                            });

                            // History entry for restoration
                            await tx.productHistory.create({
                                data: {
                                    userId: sale.userId,
                                    locationId: sale.branchId,
                                    productId: item.productId,
                                    oldStock: previousStock,
                                    newStock: newStock,
                                    type: 'RETURN_IN',
                                    changeReason: 'SALE_CANCELLED',
                                    reason: `Cancelled Sale #${sale.saleNumber}`,
                                    referenceId: sale.saleNumber,
                                    referenceType: 'SALE_CANCEL'
                                }
                            });
                        }
                    }
                }
            }

            // 2. Delete installments
            await tx.installmentPayment.deleteMany({
                where: { saleId: id }
            });

            // 3. Delete associated cash transaction
            if (sale.cashTransactionId) {
                await tx.cashTransaction.delete({
                    where: { id: sale.cashTransactionId }
                });
            }

            // 4. Delete the sale itself
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
                profit: Number(sale.profit || 0),
                taxRate: Number(sale.taxRate),
                notes: sale.notes,
                total: Number(sale.total || 0),
                totalCost: Number(sale.totalCost || 0)
            }
        };
    } catch (error: any) {
        console.error('Error deleting sale:', error);
        return { success: false, error: error.message || 'Failed to delete sale' };
    }
}

export async function upsertSaleAction(saleDbData: any, isUpdate: boolean, updateId?: string) {
    try {
        let status = saleDbData.payment_status;
        if (status === 'NOT PAID') status = 'UNPAID';
        else if (status === 'Installment Sale') status = 'INSTALLMENT';
        else if (status === 'Paid') status = 'PAID';
        else if (status === 'Quote') status = 'QUOTE';

        const financials = calculateSaleFinancials(saleDbData.items, saleDbData.tax_rate);

        const prismaData: any = {
            userId: saleDbData.user_id,
            branchId: saleDbData.location_id,
            saleNumber: saleDbData.receipt_number,
            customerName: saleDbData.customer_name,
            customerAddress: saleDbData.customer_address,
            customerPhone: saleDbData.customer_contact,
            customerId: saleDbData.customer_id,
            items: saleDbData.items,
            paymentStatus: status as PaymentStatus,
            date: new Date(saleDbData.date),
            taxRate: saleDbData.tax_rate,
            cashTransactionId: saleDbData.cash_transaction_id,
            amountPaid: saleDbData.amount_paid,
            balance: saleDbData.amount_due,
            categoryId: saleDbData.category_id,
            notes: saleDbData.notes,
            subtotal: financials.subtotal,
            discount: financials.discount,
            taxAmount: financials.taxAmount,
            total: financials.total,
            totalCost: financials.totalCost,
            profit: financials.profit,
        };

        const result = await db.$transaction(async (tx) => {
            let sale;
            if (isUpdate && updateId) {
                const existingSale = await tx.sale.findUnique({
                    where: { id: updateId },
                    select: { items: true, paymentStatus: true }
                });

                if (!existingSale) throw new Error("Existing sale not found");

                sale = await tx.sale.update({
                    where: { id: updateId },
                    data: prismaData
                });

                // Adjust inventory for updates
                if (existingSale.paymentStatus !== 'QUOTE' || status !== 'QUOTE') {
                    const oldItems = (existingSale.items as any[]) || [];
                    const newItems = (saleDbData.items as any[]) || [];

                    if (existingSale.paymentStatus !== 'QUOTE') {
                        for (const item of oldItems) {
                            if (item.productId) {
                                await tx.product.update({
                                    where: { id: item.productId },
                                    data: { stock: { increment: Number(item.quantity) || 0 } }
                                });
                            }
                        }
                    }

                    if (status !== 'QUOTE') {
                        await processSaleInventory(tx, newItems, saleDbData.location_id, saleDbData.user_id, saleDbData.receipt_number, prismaData.date);
                    }
                }
            } else {
                sale = await tx.sale.create({
                    data: prismaData
                });

                if (status !== 'QUOTE') {
                    await processSaleInventory(tx, saleDbData.items, saleDbData.location_id, saleDbData.user_id, saleDbData.receipt_number, prismaData.date);
                }
            }
            return sale;
        });

        return { 
            success: true, 
            data: {
                ...result,
                amountPaid: Number(result.amountPaid),
                balance: Number(result.balance),
                taxRate: Number(result.taxRate),
                subtotal: Number(result.subtotal),
                total: Number(result.total),
                totalCost: Number(result.totalCost),
                profit: Number(result.profit),
                date: result.date.toISOString(),
                createdAt: result.createdAt.toISOString(),
                updatedAt: result.updatedAt.toISOString()
            } 
        };
    } catch (error: any) {
        console.error('Error upserting sale:', error);
        return { success: false, error: error.message || 'Failed to preserve sale' };
    }
}

export async function createReceiptAction(saleData: any, businessId: string, userId: string) {
    try {
        const session = await auth();
        const agencyId = (session?.user as any)?.agencyId;
        if (agencyId) {
            await checkSalesQuota(agencyId);
        }

        // Validate input data
        const validatedData = createReceiptSchema.parse(saleData);

        let status = validatedData.paymentStatus;
        if (status === 'NOT PAID') status = 'UNPAID';
        else if (status === 'Installment Sale') status = 'INSTALLMENT';
        else if (status === 'Paid') status = 'PAID';
        else if (status === 'Quote') status = 'QUOTE';

        const financials = calculateSaleFinancials(validatedData.items, validatedData.taxRate);
        const saleDate = new Date(validatedData.date);

        const result = await db.$transaction(async (tx) => {
            const created = await tx.sale.create({
                data: {
                    userId: userId,
                    branchId: businessId,
                    saleNumber: validatedData.receiptNumber,
                    customerName: validatedData.customerName || "",
                    customerId: validatedData.customerId || null,
                    date: saleDate,
                    items: validatedData.items,
                    paymentStatus: status as PaymentStatus,
                    amountPaid: validatedData.amountPaid || 0,
                    balance: validatedData.amountDue || 0,
                    cashAccountId: validatedData.cashAccountId || null,
                    notes: validatedData.notes || null,
                    taxRate: validatedData.taxRate || 0,
                    subtotal: financials.subtotal,
                    discount: financials.discount,
                    taxAmount: financials.taxAmount,
                    total: financials.total,
                    totalCost: financials.totalCost,
                    profit: financials.profit,
                }
            });

            if (status !== 'QUOTE') {
                await processSaleInventory(tx, validatedData.items, businessId, userId, validatedData.receiptNumber, saleDate);
            }
            return created;
        });

        revalidatePath('/sales');
        revalidatePath('/customers');

        return { 
            success: true, 
            data: {
                ...result,
                amountPaid: Number(result.amountPaid),
                balance: Number(result.balance),
                taxRate: Number(result.taxRate),
                subtotal: Number(result.subtotal),
                total: Number(result.total),
                totalCost: Number(result.totalCost),
                profit: Number(result.profit),
                date: result.date.toISOString(),
                createdAt: result.createdAt.toISOString(),
                updatedAt: result.updatedAt.toISOString()
            } 
        };
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            console.error('Validation error for receipt:', error.errors);
            return { success: false, error: `Validation failed: ${error.errors.map(e => e.message).join(', ')}` };
        }
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
        return { 
            success: true, 
            data: goal ? {
                ...goal,
                target: Number(goal.target),
                current: Number(goal.current),
                startDate: goal.startDate.toISOString(),
                endDate: goal.endDate.toISOString(),
                createdAt: goal.createdAt.toISOString(),
                updatedAt: goal.updatedAt.toISOString()
            } : null
        };
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
        const aggregate = await db.sale.aggregate({
            where: {
                branchId,
                date: { gte: startDate, lte: endDate },
                paymentStatus: { not: 'QUOTE' }
            },
            _sum: {
                amountPaid: true
            }
        });

        return { success: true, data: Number(aggregate._sum.amountPaid || 0) };
    } catch (error: any) {
        console.error('Error fetching period sales:', error);
        return { success: false, error: error.message };
    }
}
