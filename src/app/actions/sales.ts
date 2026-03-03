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

// Robust number conversion to prevent null/NaN in DB
const toValidNum = (val: any) => {
    const num = Number(val);
    return isNaN(num) ? 0 : num;
};

export async function getSalesAction(businessId: string, sortOrder: 'asc' | 'desc' = 'desc', pageSize?: number) {
    try {
        const session = await auth();
        if (!session || !session.user) return [];
        
        const userRole = (session.user as any).role?.toLowerCase();
        const userBranchId = (session.user as any).branchId;
        const userAgencyId = (session.user as any).agencyId;

        // Authorization check
        if (userRole !== 'superadmin' && userRole !== 'admin' && userBranchId && userBranchId !== businessId) {
            return [];
        }

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
            profit: toValidNum(item.profit),
            date: item.date.toISOString(),
            tax_rate: toValidNum(item.taxRate),
            created_at: item.createdAt.toISOString(),
            updated_at: item.updatedAt.toISOString(),
            cash_transaction_id: item.cashTransactionId,
            amount_paid: toValidNum(item.amountPaid),
            amount_due: toValidNum(item.balance),
            category_id: item.categoryId,
            notes: item.notes,
            total: toValidNum(item.total),
            total_cost: toValidNum(item.totalCost),
            subtotal: toValidNum(item.subtotal),
            discount: toValidNum(item.discount),
            tax_amount: toValidNum(item.taxAmount)
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

        const quantitySold = toValidNum(item.quantity);
        const previousStock = toValidNum(product.stock);
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
    const session = await auth();
    if (!session || !session.user) return { success: false, error: 'Unauthorized' };
    
    const userRole = (session.user as any).role?.toLowerCase();
    const userBranchId = (session.user as any).branchId;
    const userAgencyId = (session.user as any).agencyId;

    // Authorization check
    if (userRole !== 'superadmin' && userRole !== 'admin' && userBranchId && userBranchId !== businessId) {
        return { success: false, error: 'Unauthorized: Branch mismatch' };
    }

    try {
        // For Admin role, ensure they belong to the same agency
        if (userRole === 'admin' && userAgencyId) {
            const branch = await db.branch.findUnique({
                where: { id: businessId },
                select: { agencyId: true, adminId: true }
            });
            if (branch?.agencyId !== userAgencyId && session.user.id !== branch?.adminId) {
                return { success: false, error: 'Unauthorized: Agency mismatch' };
            }
        }

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
                            const quantityToRestore = toValidNum(item.quantity);
                            const previousStock = toValidNum(product.stock);
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
                amountPaid: toValidNum(sale.amountPaid),
                amountDue: toValidNum(sale.balance),
                profit: toValidNum(sale.profit),
                taxRate: toValidNum(sale.taxRate),
                taxAmount: toValidNum(sale.taxAmount),
                discount: toValidNum(sale.discount),
                notes: sale.notes,
                total: toValidNum(sale.total),
                totalCost: toValidNum(sale.totalCost)
            }
        };
    } catch (error: any) {
        console.error('Error deleting sale:', error);
        return { success: false, error: error.message || 'Failed to delete sale' };
    }
}

export async function upsertSaleAction(saleDbData: any, isUpdate: boolean, updateId?: string) {
    try {
        const session = await auth();
        if (!session || !session.user) throw new Error("Unauthorized");
        
        const agencyId = (session?.user as any)?.agencyId;

        if (!saleDbData.location_id) throw new Error("Location ID is required");
        if (!saleDbData.user_id) throw new Error("User ID is required");

        let status = saleDbData.payment_status;
        if (status === 'NOT PAID') status = 'UNPAID';
        else if (status === 'Installment Sale') status = 'INSTALLMENT';
        else if (status === 'Paid') status = 'PAID';
        else if (status === 'Quote') status = 'QUOTE';

        // Filter out empty items
        const validItems = (saleDbData.items || []).filter((item: any) => item.description?.trim());
        if (validItems.length === 0) throw new Error("At least one valid item is required");

        const financials = calculateSaleFinancials(validItems, saleDbData.tax_rate);

        const prismaData: any = {
            user: { connect: { id: saleDbData.user_id } },
            branch: { connect: { id: saleDbData.location_id } },
            saleNumber: saleDbData.receipt_number,
            customerName: saleDbData.customer_name || "Valued Customer",
            customerAddress: saleDbData.customer_address || null,
            customerPhone: saleDbData.customer_contact || null,
            items: validItems,
            paymentStatus: status as PaymentStatus,
            date: new Date(saleDbData.date || new Date()),
            taxRate: toValidNum(saleDbData.tax_rate),
            amountPaid: toValidNum(saleDbData.amount_paid),
            balance: toValidNum(saleDbData.amount_due),
            notes: saleDbData.notes || null,
            subtotal: toValidNum(financials.subtotal),
            discount: toValidNum(financials.discount),
            taxAmount: toValidNum(financials.taxAmount),
            total: toValidNum(financials.total),
            totalCost: toValidNum(financials.totalCost),
            profit: toValidNum(financials.profit),
        };

        // Add optional relations
        if (agencyId) prismaData.agency = { connect: { id: agencyId } };
        if (saleDbData.customer_id) prismaData.customer = { connect: { id: saleDbData.customer_id } };
        if (saleDbData.category_id) prismaData.category = { connect: { id: saleDbData.category_id } };
        if (saleDbData.cash_transaction_id) prismaData.cashTransaction = { connect: { id: saleDbData.cash_transaction_id } };

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
                    const newItems = validItems;

                    if (existingSale.paymentStatus !== 'QUOTE') {
                        for (const item of oldItems) {
                            if (item.productId) {
                                await tx.product.update({
                                    where: { id: item.productId },
                                    data: { stock: { increment: toValidNum(item.quantity) } }
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
                    await processSaleInventory(tx, validItems, saleDbData.location_id, saleDbData.user_id, saleDbData.receipt_number, prismaData.date);
                }
            }
            return sale;
        });

        return { 
            success: true, 
            data: {
                ...result,
                amountPaid: toValidNum(result.amountPaid),
                balance: toValidNum(result.balance),
                taxRate: toValidNum(result.taxRate),
                subtotal: toValidNum(result.subtotal),
                total: toValidNum(result.total),
                totalCost: toValidNum(result.totalCost),
                profit: toValidNum(result.profit),
                discount: toValidNum(result.discount),
                taxAmount: toValidNum(result.taxAmount),
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
        if (!session || !session.user) return { success: false, error: 'Unauthorized' };
        
        const userRole = (session.user as any).role?.toLowerCase();
        const userBranchId = (session.user as any).branchId;
        const userAgencyId = (session.user as any).agencyId;

        // Authorization check
        if (userRole !== 'superadmin' && userRole !== 'admin' && userBranchId && userBranchId !== businessId) {
            return { success: false, error: 'Unauthorized: Branch mismatch' };
        }

        if (userAgencyId) {
            await checkSalesQuota(userAgencyId);
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

        const prismaData: any = {
            user: { connect: { id: userId } },
            branch: { connect: { id: businessId } },
            saleNumber: validatedData.receiptNumber,
            customerName: validatedData.customerName || "Valued Customer",
            customerAddress: saleData.customer_address || null,
            customerPhone: saleData.customer_contact || null,
            date: saleDate,
            items: validatedData.items || [],
            paymentStatus: status as PaymentStatus,
            amountPaid: toValidNum(validatedData.amountPaid),
            balance: toValidNum(validatedData.amountDue),
            notes: validatedData.notes || null,
            taxRate: toValidNum(validatedData.taxRate),
            subtotal: toValidNum(financials.subtotal),
            discount: toValidNum(financials.discount),
            taxAmount: toValidNum(financials.taxAmount),
            total: toValidNum(financials.total),
            totalCost: toValidNum(financials.totalCost),
            profit: toValidNum(financials.profit),
        };

        if (userAgencyId) prismaData.agency = { connect: { id: userAgencyId } };
        if (validatedData.customerId) prismaData.customer = { connect: { id: validatedData.customerId } };
        if (validatedData.cashAccountId) prismaData.cashAccount = { connect: { id: validatedData.cashAccountId } };

        const result = await db.$transaction(async (tx) => {
            const created = await tx.sale.create({
                data: prismaData
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
                amountPaid: toValidNum(result.amountPaid),
                balance: toValidNum(result.balance),
                taxRate: toValidNum(result.taxRate),
                subtotal: toValidNum(result.subtotal),
                total: toValidNum(result.total),
                totalCost: toValidNum(result.totalCost),
                profit: toValidNum(result.profit),
                discount: toValidNum(result.discount),
                taxAmount: toValidNum(result.taxAmount),
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
                branch: { connect: { id: businessId } },
                user: { connect: { id: userId } },
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
                target: toValidNum(goal.target),
                current: toValidNum(goal.current),
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
                    user: { connect: { id: userId } },
                    branch: { connect: { id: branchId } },
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

        return { success: true, data: toValidNum(aggregate._sum.amountPaid) };
    } catch (error: any) {
        console.error('Error fetching period sales:', error);
        return { success: false, error: error.message };
    }
}
