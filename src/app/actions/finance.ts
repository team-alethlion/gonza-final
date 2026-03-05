/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db, PaymentStatus, ActivityType, ActivityModule } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { verifyBranchAccess, verifyUserAccess } from '@/lib/auth-guard';
import { verifyEntitiesBelongToBranch } from '@/lib/data-integrity';

/**
 * Robust number conversion to eliminate potential floating-point or null value issues.
 */
const toSafeNumber = (val: any): number => {
    if (val === null || val === undefined) return 0;
    const num = typeof val === 'number' ? val : parseFloat(val);
    if (isNaN(num)) return 0;
    // Round to 2 decimal places to avoid floating point issues
    return Math.round(num * 100) / 100;
};

const cashTransactionSchema = z.object({
    userId: z.string().min(1),
    locationId: z.string().min(1),
    accountId: z.string().min(1),
    amount: z.number().positive(),
    transactionType: z.string(),
    toAccountId: z.string().optional().nullable(),
    category: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    personInCharge: z.string().optional().nullable(),
    tags: z.array(z.string()).optional(),
    date: z.string().or(z.date()).optional(),
    paymentMethod: z.string().optional().nullable(),
    receiptImage: z.string().optional().nullable()
});

const bulkCashTransactionSchema = z.array(cashTransactionSchema).max(100, "Maximum 100 transactions can be created at once");

// --- EXPENSES ---

export interface ExpenseInput {
    amount: number;
    description: string;
    category?: string;
    date: Date;
    paymentMethod?: string;
    personInCharge?: string;
    receiptImage?: string;
    cashAccountId?: string;
    userId: string;
    locationId: string;
}

export async function createExpenseAction(data: ExpenseInput, linkToCash: boolean) {
    try {
        const sessionUser = await verifyBranchAccess(data.locationId);
        
        // Ensure cash account belongs to this branch if provided
        if (linkToCash && data.cashAccountId) {
            await verifyEntitiesBelongToBranch(data.locationId, {
                cashAccountId: data.cashAccountId
            });
        }

        const result = await db.$transaction(async (tx: any) => {
            // 1. Create the expense
            const expense = await tx.expense.create({
                data: {
                    userId: sessionUser.id,
                    branchId: data.locationId,
                    amount: toSafeNumber(data.amount),
                    description: data.description,
                    category: data.category || null,
                    date: data.date,
                    paymentMethod: data.paymentMethod || null,
                    personInCharge: data.personInCharge || null,
                    receiptImage: data.receiptImage || null,
                    cashAccountId: linkToCash && data.cashAccountId ? data.cashAccountId : null
                }
            });

            // 2. If linking to cash, create a cash transaction
            if (linkToCash && data.cashAccountId) {
                const cashTx = await tx.cashTransaction.create({
                    data: {
                        userId: sessionUser.id,
                        branchId: data.locationId,
                        accountId: data.cashAccountId,
                        amount: toSafeNumber(data.amount),
                        transactionType: 'cash_out',
                        category: data.category || 'Expense',
                        description: `Expense: ${data.description}`,
                        personInCharge: data.personInCharge || null,
                        date: data.date,
                        paymentMethod: data.paymentMethod || null,
                        receiptImage: data.receiptImage || null
                    }
                });

                // Update expense with transaction reference
                await tx.expense.update({
                    where: { id: expense.id, branchId: data.locationId },
                    data: { cashTransactionId: cashTx.id }
                });
            }

            return {
                ...expense,
                amount: Number(expense.amount),
                createdAt: expense.createdAt.toISOString(),
                updatedAt: expense.updatedAt.toISOString(),
                date: expense.date.toISOString()
            };
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error creating expense:', error);
        return { success: false, error: error.message };
    }
}

export async function getExpensesAction(locationId: string) {
    try {
        await verifyBranchAccess(locationId);

        const expenses = await db.expense.findMany({
            where: { branchId: locationId },
            orderBy: { date: 'desc' }
        });

        return {
            success: true,
            data: expenses.map((e: any) => ({
                ...e,
                amount: toSafeNumber(e.amount),
                created_at: e.createdAt.toISOString(),
                updated_at: e.updatedAt.toISOString(),
                payment_method: e.paymentMethod,
                person_in_charge: e.personInCharge,
                receipt_image: e.receiptImage,
                cash_account_id: e.cashAccountId,
                cash_transaction_id: e.cashTransactionId
            }))
        };
    } catch (error: any) {
        console.error('Error fetching expenses:', error);
        return { success: false, error: error.message };
    }
}

export async function updateExpenseAction(id: string, branchId: string, updates: any, currentExpense: any) {
    try {
        await verifyBranchAccess(branchId);
        const result = await db.$transaction(async (tx: any) => {
            // Update expense
            const updatedExpense = await tx.expense.update({
                where: { id, branchId },
                data: {
                    amount: updates.amount,
                    description: updates.description,
                    category: updates.category,
                    date: updates.date,
                    paymentMethod: updates.paymentMethod,
                    personInCharge: updates.personInCharge,
                    receiptImage: updates.receiptImage,
                    cashAccountId: updates.cashAccountId || null
                }
            });

            const shouldLinkToCash = !!updates.cashAccountId;
            const wasLinkedToCash = !!currentExpense.cashTransactionId;

            if (shouldLinkToCash && !wasLinkedToCash) {
                // Create new cash transaction
                const cashTx = await tx.cashTransaction.create({
                    data: {
                        userId: currentExpense.userId,
                        branchId: branchId,
                        accountId: updates.cashAccountId,
                        amount: updates.amount || currentExpense.amount,
                        transactionType: 'cash_out',
                        category: updates.category || currentExpense.category || 'Expense',
                        description: `Expense: ${updates.description || currentExpense.description}`,
                        personInCharge: updates.personInCharge || currentExpense.personInCharge || null,
                        date: updates.date || currentExpense.date,
                        paymentMethod: updates.paymentMethod || currentExpense.paymentMethod || null,
                        receiptImage: updates.receiptImage || currentExpense.receiptImage || null
                    }
                });
                await tx.expense.update({
                    where: { id, branchId },
                    data: { cashTransactionId: cashTx.id }
                });
            } else if (shouldLinkToCash && wasLinkedToCash) {
                // Update existing cash transaction
                await tx.cashTransaction.update({
                    where: { id: currentExpense.cashTransactionId, branchId: branchId },
                    data: {
                        accountId: updates.cashAccountId,
                        amount: updates.amount || currentExpense.amount,
                        category: updates.category || currentExpense.category || 'Expense',
                        description: `Expense: ${updates.description || currentExpense.description}`,
                        personInCharge: updates.personInCharge || currentExpense.personInCharge || null,
                        date: updates.date || currentExpense.date,
                        paymentMethod: updates.paymentMethod || currentExpense.paymentMethod || null,
                        receiptImage: updates.receiptImage || currentExpense.receiptImage || null
                    }
                });
            } else if (!shouldLinkToCash && wasLinkedToCash) {
                // Delete existing cash transaction
                await tx.cashTransaction.delete({
                    where: { id: currentExpense.cashTransactionId, branchId: branchId }
                });
                await tx.expense.update({
                    where: { id, branchId },
                    data: { cashTransactionId: null }
                });
            }

            return updatedExpense;
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error updating expense:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteExpenseAction(id: string, branchId: string) {
    try {
        await verifyBranchAccess(branchId);
        await db.$transaction(async (tx: any) => {
            const expense = await tx.expense.findUnique({
                where: { id, branchId },
                select: { cashTransactionId: true }
            });

            if (!expense) throw new Error("Expense not found or unauthorized");

            if (expense.cashTransactionId) {
                await tx.cashTransaction.delete({
                    where: { id: expense.cashTransactionId, branchId }
                });
            }

            await tx.expense.delete({
                where: { id, branchId }
            });
        });

        revalidatePath('/finance');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting expense:', error);
        return { success: false, error: error.message };
    }
}

// --- INSTALLMENT PAYMENTS ---

export async function getInstallmentPaymentsAction(saleId: string, branchId: string) {
    try {
        await verifyBranchAccess(branchId);
        const payments = await db.installmentPayment.findMany({
            where: { 
                saleId,
                sale: { branchId } // Verify through relation
            },
            orderBy: { paymentDate: 'desc' }
        });

        return {
            success: true,
            data: payments.map((p: any) => ({
                id: p.id,
                saleId: p.saleId,
                userId: p.userId,
                amount: toSafeNumber(p.amount),
                paymentDate: p.paymentDate.toISOString(),
                notes: p.notes,
                cashTransactionId: p.cashTransactionId,
                createdAt: p.createdAt.toISOString(),
                updatedAt: p.updatedAt.toISOString()
            }))
        };
    } catch (error: any) {
        console.error('Error fetching installment payments:', error);
        return { success: false, error: error.message };
    }
}

export async function createInstallmentPaymentAction(data: any) {
    try {
        const sessionUser = await verifyBranchAccess(data.locationId);
        
        // Ensure entities belong to the correct branch
        await verifyEntitiesBelongToBranch(data.locationId, {
            saleId: data.saleId,
            cashAccountId: data.accountId
        });

        const result = await db.$transaction(async (tx: any) => {
            let cashTxId = data.cashTransactionId;

            if (data.accountId && data.locationId && !cashTxId) {
                const sale = await tx.sale.findUnique({
                    where: { id: data.saleId, branchId: data.locationId },
                    select: { customerName: true, saleNumber: true }
                });

                if (!sale) throw new Error("Sale not found or unauthorized");

                const description = `Installment payment for ${sale.customerName} - Receipt #${sale.saleNumber}`;

                const cashTx = await tx.cashTransaction.create({
                    data: {
                        userId: sessionUser.id,
                        branchId: data.locationId,
                        accountId: data.accountId,
                        amount: toSafeNumber(data.amount),
                        transactionType: 'cash_in',
                        category: 'Installment payment',
                        description: description,
                        date: data.paymentDate ? new Date(data.paymentDate) : new Date(),
                    }
                });
                cashTxId = cashTx.id;
            }

            const payment = await tx.installmentPayment.create({
                data: {
                    saleId: data.saleId,
                    userId: sessionUser.id,
                    amount: toSafeNumber(data.amount),
                    notes: data.notes,
                    cashTransactionId: cashTxId,
                    paymentDate: data.paymentDate ? new Date(data.paymentDate) : new Date()
                }
            });

            return {
                ...payment,
                amount: toSafeNumber(payment.amount),
                paymentDate: payment.paymentDate.toISOString(),
                createdAt: payment.createdAt.toISOString(),
                updatedAt: payment.updatedAt.toISOString()
            };
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error creating installment payment:', error);
        return { success: false, error: error.message };
    }
}

export async function updateInstallmentPaymentAction(id: string, branchId: string, updates: any) {
    try {
        await verifyBranchAccess(branchId);
        const result = await db.$transaction(async (tx: any) => {
            const current = await tx.installmentPayment.findUnique({
                where: { id },
                include: { sale: { select: { branchId: true } } }
            });

            if (!current || current.sale.branchId !== branchId) {
                throw new Error("Payment not found or unauthorized");
            }

            const updated = await tx.installmentPayment.update({
                where: { id },
                data: {
                    amount: updates.amount,
                    notes: updates.notes,
                    paymentDate: updates.paymentDate ? new Date(updates.paymentDate) : undefined
                }
            });

            if (current.cashTransactionId) {
                await tx.cashTransaction.update({
                    where: { id: current.cashTransactionId, branchId },
                    data: {
                        amount: updates.amount,
                        date: updates.paymentDate ? new Date(updates.paymentDate) : undefined
                    }
                });
            }

            return {
                ...updated,
                amount: toSafeNumber(updated.amount),
                paymentDate: updated.paymentDate.toISOString(),
                createdAt: updated.createdAt.toISOString(),
                updatedAt: updated.updatedAt.toISOString()
            };
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error updating installment payment:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteInstallmentPaymentAction(id: string, branchId: string) {
    try {
        await verifyBranchAccess(branchId);
        await db.$transaction(async (tx: any) => {
            const payment = await tx.installmentPayment.findUnique({
                where: { id },
                include: { sale: { select: { branchId: true } } }
            });

            if (!payment || payment.sale.branchId !== branchId) {
                throw new Error("Payment not found or unauthorized");
            }

            if (payment.cashTransactionId) {
                await tx.cashTransaction.delete({
                    where: { id: payment.cashTransactionId, branchId }
                });
            }

            await tx.installmentPayment.delete({
                where: { id }
            });
        });

        revalidatePath('/finance');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting installment payment:', error);
        return { success: false, error: error.message };
    }
}

export async function linkInstallmentToCashAction(paymentId: string, branchId: string, accountId: string, locationId: string, userId: string) {
    try {
        const sessionUser = await verifyBranchAccess(branchId);
        
        // Ensure cash account belongs to this branch
        await verifyEntitiesBelongToBranch(branchId, {
            cashAccountId: accountId
        });

        const result = await db.$transaction(async (tx: any) => {
            const payment = await tx.installmentPayment.findUnique({
                where: { id: paymentId },
                include: { sale: true }
            });

            if (!payment || payment.sale.branchId !== branchId) throw new Error("Payment not found or unauthorized");
            if (payment.cashTransactionId) throw new Error("Payment already linked");

            const description = payment.sale
                ? `Installment payment for ${payment.sale.customerName} - Receipt #${payment.sale.saleNumber}`
                : `Installment payment #${paymentId.substring(0, 8)}`;

            const cashTx = await tx.cashTransaction.create({
                data: {
                    userId: sessionUser.id,
                    branchId: branchId,
                    accountId,
                    amount: toSafeNumber(payment.amount),
                    transactionType: 'cash_in',
                    category: 'Installment payment',
                    description,
                    date: payment.paymentDate,
                }
            });

            await tx.installmentPayment.update({
                where: { id: paymentId },
                data: { cashTransactionId: cashTx.id }
            });

            return cashTx;
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error linking installment to cash:', error);
        return { success: false, error: error.message };
    }
}

export async function unlinkInstallmentFromCashAction(paymentId: string, branchId: string) {
    try {
        await verifyBranchAccess(branchId);
        await db.$transaction(async (tx: any) => {
            const payment = await tx.installmentPayment.findUnique({
                where: { id: paymentId },
                include: { sale: { select: { branchId: true } } }
            });

            if (!payment || payment.sale.branchId !== branchId) throw new Error("Payment not found or unauthorized");
            if (!payment.cashTransactionId) throw new Error("Payment not linked");

            await tx.cashTransaction.delete({
                where: { id: payment.cashTransactionId, branchId }
            });

            await tx.installmentPayment.update({
                where: { id: paymentId },
                data: { cashTransactionId: null }
            });
        });

        revalidatePath('/finance');
        return { success: true };
    } catch (error: any) {
        console.error('Error unlinking installment from cash:', error);
        return { success: false, error: error.message };
    }
}

// --- EXPENSE CATEGORIES ---

export async function getExpenseCategoriesAction(locationId: string) {
    try {
        await verifyBranchAccess(locationId);
        const categories = await db.expenseCategory.findMany({
            where: { branchId: locationId },
            orderBy: [{ isDefault: 'desc' }, { name: 'asc' }]
        });

        return {
            success: true,
            data: categories.map((c: any) => ({
                id: c.id,
                name: c.name,
                isDefault: c.isDefault,
                createdAt: c.createdAt.toISOString()
            }))
        };
    } catch (error: any) {
        console.error('Error fetching expense categories:', error);
        return { success: false, error: error.message };
    }
}

export async function createExpenseCategoryAction(data: any) {
    try {
        await verifyBranchAccess(data.locationId);
        await verifyUserAccess(data.userId);
        const result = await db.expenseCategory.create({
            data: {
                userId: data.userId,
                branchId: data.locationId,
                name: data.name,
                isDefault: data.isDefault || false
            }
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error creating expense category:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteExpenseCategoryAction(id: string, branchId: string) {
    try {
        await verifyBranchAccess(branchId);
        await db.expenseCategory.delete({
            where: { id, branchId }
        });

        revalidatePath('/finance');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting expense category:', error);
        return { success: false, error: error.message };
    }
}

export async function createDefaultExpenseCategoriesAction(userId: string, locationId: string, categoryNames: string[]) {
    try {
        await verifyBranchAccess(locationId);
        await verifyUserAccess(userId);
        for (const name of categoryNames) {
            await db.expenseCategory.upsert({
                where: {
                    branchId_name: {
                        branchId: locationId,
                        name: name
                    }
                },
                update: {}, // Do nothing if it exists
                create: {
                    userId,
                    branchId: locationId,
                    name,
                    isDefault: true
                }
            });
        }

        revalidatePath('/finance');
        return { success: true };
    } catch (error: any) {
        console.error('Error creating default categories:', error);
        return { success: false, error: error.message };
    }
}

// --- CASH ACCOUNTS ---

export async function getCashAccountsAction(locationId: string) {
    try {
        await verifyBranchAccess(locationId);
        const accounts = await db.cashAccount.findMany({
            where: { branchId: locationId },
            orderBy: [{ isDefault: 'desc' }, { name: 'asc' }]
        });

        return {
            success: true,
            data: accounts.map((a: any) => ({
                id: a.id,
                name: a.name,
                description: a.description,
                openingBalance: toSafeNumber(a.initialBalance),
                isDefault: a.isDefault,
                createdAt: a.createdAt.toISOString(),
                updatedAt: a.updatedAt.toISOString()
            }))
        };
    } catch (error: any) {
        console.error('Error fetching cash accounts:', error);
        return { success: false, error: error.message };
    }
}

export async function createCashAccountAction(data: any) {
    try {
        await verifyBranchAccess(data.locationId);
        await verifyUserAccess(data.userId);
        const result = await db.cashAccount.create({
            data: {
                userId: data.userId,
                branchId: data.locationId,
                name: data.name,
                description: data.description || null,
                initialBalance: toSafeNumber(data.openingBalance),
                isDefault: data.isDefault || false
            }
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error creating cash account:', error);
        return { success: false, error: error.message };
    }
}

export async function updateCashAccountAction(id: string, branchId: string, updates: any) {
    try {
        await verifyBranchAccess(branchId);
        const result = await db.cashAccount.update({
            where: { id, branchId },
            data: {
                name: updates.name,
                description: updates.description,
                initialBalance: toSafeNumber(updates.openingBalance),
                isDefault: updates.isDefault
            }
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error updating cash account:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteCashAccountAction(id: string, locationId: string) {
    try {
        await verifyBranchAccess(locationId);
        const result = await db.$transaction(async (tx: any) => {
            const txCount = await tx.cashTransaction.count({
                where: { accountId: id, branchId: locationId }
            });

            const expCount = await tx.expense.count({
                where: { cashAccountId: id, branchId: locationId }
            });

            if (txCount > 0 || expCount > 0) {
                return {
                    success: false,
                    hasTransactions: true,
                    details: `Account has ${txCount} transactions and ${expCount} expenses.`
                };
            }

            await tx.cashAccount.delete({
                where: { id, branchId: locationId }
            });

            return { success: true, hasTransactions: false };
        });

        revalidatePath('/finance');
        return result;
    } catch (error: any) {
        console.error('Error deleting cash account:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteCashAccountWithTransactionsAction(id: string, locationId: string, deleteTransactions: boolean) {
    try {
        await verifyBranchAccess(locationId);
        await db.$transaction(async (tx: any) => {
            if (deleteTransactions) {
                await tx.cashTransaction.deleteMany({
                    where: { accountId: id, branchId: locationId }
                });
                await tx.expense.updateMany({
                    where: { cashAccountId: id, branchId: locationId },
                    data: { cashAccountId: null, cashTransactionId: null }
                });
            } else {
                await tx.cashTransaction.updateMany({
                    where: { accountId: id, branchId: locationId },
                    data: { accountId: null }
                });
                await tx.expense.updateMany({
                    where: { cashAccountId: id, branchId: locationId },
                    data: { cashAccountId: null, cashTransactionId: null }
                });
            }

            await tx.cashAccount.delete({
                where: { id, branchId: locationId }
            });
        });

        revalidatePath('/finance');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting cash account with transactions:', error);
        return { success: false, error: error.message };
    }
}

export async function getCashAccountBalanceAction(accountId: string, locationId: string) {
    try {
        await verifyBranchAccess(locationId);
        const account = await db.cashAccount.findUnique({
            where: { id: accountId, branchId: locationId },
            select: { initialBalance: true }
        });

        if (!account) return { success: false, error: 'Account not found' };

        // Efficiently aggregate sums by transaction type in the database
        const aggregates = await db.cashTransaction.groupBy({
            by: ['transactionType'],
            where: { accountId, branchId: locationId },
            _sum: {
                amount: true
            }
        });

        let balance = toSafeNumber(account.initialBalance);

        for (const agg of aggregates) {
            const sum = toSafeNumber(agg._sum.amount);
            if (agg.transactionType === 'cash_in' || agg.transactionType === 'transfer_in') {
                balance = toSafeNumber(balance + sum);
            } else if (agg.transactionType === 'cash_out' || agg.transactionType === 'transfer_out') {
                balance = toSafeNumber(balance - sum);
            }
        }

        return { success: true, data: balance };
    } catch (error: any) {
        console.error('Error calculating account balance:', error);
        return { success: false, error: error.message };
    }
}

// --- CASH TRANSACTIONS ---

export async function getCashTransactionsAction(locationId: string, accountId?: string, skip: number = 0, take: number = 50) {
    try {
        await verifyBranchAccess(locationId);
        const where: any = { branchId: locationId };
        if (accountId) where.accountId = accountId;

        const [transactions, count] = await Promise.all([
            db.cashTransaction.findMany({
                where,
                orderBy: [{ date: 'desc' }, { createdAt: 'desc' }],
                skip,
                take
            }),
            db.cashTransaction.count({ where })
        ]);

        return {
            success: true,
            data: transactions.map((t: any) => ({
                ...t,
                amount: toSafeNumber(t.amount),
                created_at: t.createdAt.toISOString(),
                updated_at: t.updatedAt.toISOString(),
                user_id: t.userId,
                account_id: t.accountId,
                location_id: t.branchId,
                transaction_type: t.transactionType,
                person_in_charge: t.personInCharge,
                payment_method: t.paymentMethod,
                receipt_image: t.receiptImage
            })),
            count
        };
    } catch (error: any) {
        console.error('Error fetching cash transactions:', error);
        return { success: false, error: error.message };
    }
}

export async function createCashTransactionAction(data: any) {
    try {
        const sessionUser = await verifyBranchAccess(data.locationId);
        
        // Verify source account
        await verifyEntitiesBelongToBranch(data.locationId, {
            cashAccountId: data.accountId
        });

        // Verify destination account for transfers
        if (data.transactionType === 'transfer' && data.toAccountId) {
            await verifyEntitiesBelongToBranch(data.locationId, {
                cashAccountId: data.toAccountId
            });
        }

        const result = await db.$transaction(async (tx: any) => {
            if (data.transactionType === 'transfer' && data.toAccountId) {
                const txOut = await tx.cashTransaction.create({
                    data: {
                        userId: sessionUser.id,
                        branchId: data.locationId,
                        accountId: data.accountId,
                        amount: toSafeNumber(data.amount),
                        transactionType: 'transfer_out',
                        description: data.description,
                        date: data.date ? new Date(data.date) : new Date(),
                        category: data.category || 'Transfer'
                    }
                });

                const txIn = await tx.cashTransaction.create({
                    data: {
                        userId: sessionUser.id,
                        branchId: data.locationId,
                        accountId: data.toAccountId,
                        amount: toSafeNumber(data.amount),
                        transactionType: 'transfer_in',
                        description: data.description,
                        date: data.date ? new Date(data.date) : new Date(),
                        category: data.category || 'Transfer'
                    }
                });

                return [txOut, txIn];
            } else {
                const transaction = await tx.cashTransaction.create({
                    data: {
                        userId: sessionUser.id,
                        branchId: data.locationId,
                        accountId: data.accountId,
                        amount: toSafeNumber(data.amount),
                        transactionType: data.transactionType,
                        category: data.category,
                        description: data.description,
                        personInCharge: data.personInCharge,
                        tags: data.tags,
                        date: data.date ? new Date(data.date) : new Date(),
                        paymentMethod: data.paymentMethod,
                        receiptImage: data.receiptImage
                    }
                });
                return transaction;
            }
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error creating cash transaction:', error);
        return { success: false, error: error.message };
    }
}

export async function updateCashTransactionAction(id: string, branchId: string, updates: any) {
    try {
        await verifyBranchAccess(branchId);
        const result = await db.cashTransaction.update({
            where: { id, branchId },
            data: {
                accountId: updates.accountId,
                amount: updates.amount,
                transactionType: updates.transactionType,
                category: updates.category,
                description: updates.description,
                personInCharge: updates.personInCharge,
                tags: updates.tags,
                date: updates.date ? new Date(updates.date) : undefined,
                paymentMethod: updates.paymentMethod,
                receiptImage: updates.receiptImage
            }
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error updating cash transaction:', error);
        return { success: false, error: error.message };
    }
}

export async function findCashTransactionAction(id: string, branchId: string) {
    try {
        await verifyBranchAccess(branchId);
        const transaction = await db.cashTransaction.findUnique({
            where: { id, branchId },
            select: { accountId: true }
        });

        return { success: true, data: transaction };
    } catch (error: any) {
        console.error('Error finding cash transaction:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteCashTransactionAction(id: string, locationId: string) {
    try {
        await verifyBranchAccess(locationId);
        await db.$transaction(async (tx: any) => {
            // Verify ownership through where clause in updateMany/delete
            await tx.installmentPayment.updateMany({
                where: { 
                    cashTransactionId: id,
                    sale: { branchId: locationId }
                },
                data: { cashTransactionId: null }
            });

            await tx.cashTransaction.delete({
                where: { id, branchId: locationId }
            });
        });

        revalidatePath('/finance');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting cash transaction:', error);
        return { success: false, error: error.message };
    }
}

export async function getAccountOpeningBalanceAction(accountId: string, locationId: string) {
    try {
        await verifyBranchAccess(locationId);
        const account = await db.cashAccount.findFirst({
            where: { id: accountId, branchId: locationId },
            select: { initialBalance: true }
        });

        return { success: true, data: toSafeNumber(account?.initialBalance) };
    } catch (error: any) {
        console.error('Error fetching opening balance:', error);
        return { success: false, error: error.message };
    }
}

export async function createBulkCashTransactionsAction(transactions: any[]) {
    try {
        if (!transactions || transactions.length === 0) return { success: true, data: [] };

        // 1. Verify access for all unique branches
        const uniqueLocationIds = Array.from(new Set(transactions.map(t => t.locationId)));
        let sessionUser: any;
        for (const locId of uniqueLocationIds) {
            sessionUser = await verifyBranchAccess(locId);
        }

        // 2. Verify access for all unique users
        const uniqueUserIds = Array.from(new Set(transactions.map(t => t.userId)));
        for (const uId of uniqueUserIds) {
            await verifyUserAccess(uId);
        }

        // 3. Validate input data schema
        const validatedTransactions = bulkCashTransactionSchema.parse(transactions);

        // 4. Verify that all accounts belong to their respective branches
        for (const t of validatedTransactions) {
            await verifyEntitiesBelongToBranch(t.locationId, {
                cashAccountId: t.accountId
            });
            if (t.transactionType === 'transfer' && t.toAccountId) {
                await verifyEntitiesBelongToBranch(t.locationId, {
                    cashAccountId: t.toAccountId
                });
            }
        }

        const result = await db.$transaction(async (tx: any) => {
            const created = [];
            for (const data of validatedTransactions) {
                const amount = toSafeNumber(data.amount);
                if (data.transactionType === 'transfer' && data.toAccountId) {
                    created.push(await tx.cashTransaction.create({
                        data: {
                            userId: sessionUser.id,
                            branchId: data.locationId,
                            accountId: data.accountId,
                            amount: amount,
                            transactionType: 'transfer_out',
                            description: data.description || '',
                            date: data.date ? new Date(data.date) : new Date(),
                            category: data.category || 'Transfer'
                        }
                    }));
                    created.push(await tx.cashTransaction.create({
                        data: {
                            userId: sessionUser.id,
                            branchId: data.locationId,
                            accountId: data.toAccountId,
                            amount: amount,
                            transactionType: 'transfer_in',
                            description: data.description || '',
                            date: data.date ? new Date(data.date) : new Date(),
                            category: data.category || 'Transfer'
                        }
                    }));
                } else {
                    created.push(await tx.cashTransaction.create({
                        data: {
                            userId: sessionUser.id,
                            branchId: data.locationId,
                            accountId: data.accountId,
                            amount: amount,
                            transactionType: data.transactionType,
                            category: data.category || null,
                            description: data.description || null,
                            personInCharge: data.personInCharge || null,
                            tags: data.tags || [],
                            date: data.date ? new Date(data.date) : new Date(),
                            paymentMethod: data.paymentMethod || null,
                            receiptImage: data.receiptImage || null
                        }
                    }));
                }
            }
            return created;
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            console.error('Validation error for bulk transactions:', error.errors);
            return { success: false, error: `Validation failed: ${error.errors.map(e => e.message).join(', ')}` };
        }
        console.error('Error creating bulk transactions:', error);
        return { success: false, error: error.message };
    }
}
