'use server';

import { db, PaymentStatus, ActivityType, ActivityModule } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';

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
        const result = await db.$transaction(async (tx: any) => {
            // 1. Create the expense
            const expense = await tx.expense.create({
                data: {
                    userId: data.userId,
                    branchId: data.locationId,
                    amount: data.amount,
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
                        userId: data.userId,
                        branchId: data.locationId,
                        accountId: data.cashAccountId,
                        amount: data.amount,
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
                    where: { id: expense.id },
                    data: { cashTransactionId: cashTx.id }
                });
            }

            return expense;
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
        const expenses = await db.expense.findMany({
            where: { branchId: locationId },
            orderBy: { date: 'desc' }
        });

        return {
            success: true,
            data: expenses.map((e: any) => ({
                ...e,
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

export async function updateExpenseAction(id: string, updates: any, currentExpense: any) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            // Update expense
            const updatedExpense = await tx.expense.update({
                where: { id },
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
                        branchId: currentExpense.branchId || currentExpense.locationId,
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
                    where: { id },
                    data: { cashTransactionId: cashTx.id }
                });
            } else if (shouldLinkToCash && wasLinkedToCash) {
                // Update existing cash transaction
                await tx.cashTransaction.update({
                    where: { id: currentExpense.cashTransactionId },
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
                    where: { id: currentExpense.cashTransactionId }
                });
                await tx.expense.update({
                    where: { id },
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

export async function deleteExpenseAction(id: string) {
    try {
        await db.$transaction(async (tx: any) => {
            const expense = await tx.expense.findUnique({
                where: { id },
                select: { cashTransactionId: true }
            });

            if (expense?.cashTransactionId) {
                await tx.cashTransaction.delete({
                    where: { id: expense.cashTransactionId }
                });
            }

            await tx.expense.delete({
                where: { id }
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

export async function getInstallmentPaymentsAction(saleId: string) {
    try {
        const payments = await db.installmentPayment.findMany({
            where: { saleId },
            orderBy: { paymentDate: 'desc' }
        });

        return {
            success: true,
            data: payments.map((p: any) => ({
                id: p.id,
                saleId: p.saleId,
                userId: p.userId,
                amount: Number(p.amount),
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
        const result = await db.$transaction(async (tx: any) => {
            let cashTxId = data.cashTransactionId;

            if (data.accountId && data.locationId && !cashTxId) {
                const sale = await tx.sale.findUnique({
                    where: { id: data.saleId },
                    select: { customerName: true, receiptNumber: true }
                });

                const description = sale
                    ? `Installment payment for ${sale.customerName} - Receipt #${sale.receiptNumber}`
                    : `Installment payment for sale`;

                const cashTx = await tx.cashTransaction.create({
                    data: {
                        userId: data.userId,
                        branchId: data.locationId,
                        accountId: data.accountId,
                        amount: data.amount,
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
                    userId: data.userId,
                    amount: data.amount,
                    notes: data.notes,
                    cashTransactionId: cashTxId,
                    paymentDate: data.paymentDate ? new Date(data.paymentDate) : new Date()
                }
            });

            return payment;
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error creating installment payment:', error);
        return { success: false, error: error.message };
    }
}

export async function updateInstallmentPaymentAction(id: string, updates: any) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            const current = await tx.installmentPayment.findUnique({
                where: { id },
                select: { cashTransactionId: true }
            });

            if (!current) throw new Error("Payment not found");

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
                    where: { id: current.cashTransactionId },
                    data: {
                        amount: updates.amount,
                        date: updates.paymentDate ? new Date(updates.paymentDate) : undefined
                    }
                });
            }

            return updated;
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error updating installment payment:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteInstallmentPaymentAction(id: string) {
    try {
        await db.$transaction(async (tx: any) => {
            const payment = await tx.installmentPayment.findUnique({
                where: { id },
                select: { cashTransactionId: true }
            });

            if (payment?.cashTransactionId) {
                await tx.cashTransaction.delete({
                    where: { id: payment.cashTransactionId }
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

export async function linkInstallmentToCashAction(paymentId: string, accountId: string, locationId: string, userId: string) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            const payment = await tx.installmentPayment.findUnique({
                where: { id: paymentId },
                include: { sale: true }
            });

            if (!payment) throw new Error("Payment not found");
            if (payment.cashTransactionId) throw new Error("Payment already linked");

            const description = payment.sale
                ? `Installment payment for ${payment.sale.customerName} - Receipt #${payment.sale.receiptNumber}`
                : `Installment payment #${paymentId.substring(0, 8)}`;

            const cashTx = await tx.cashTransaction.create({
                data: {
                    userId,
                    branchId: locationId,
                    accountId,
                    amount: payment.amount,
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

export async function unlinkInstallmentFromCashAction(paymentId: string) {
    try {
        await db.$transaction(async (tx: any) => {
            const payment = await tx.installmentPayment.findUnique({
                where: { id: paymentId },
                select: { cashTransactionId: true }
            });

            if (!payment?.cashTransactionId) throw new Error("Payment not linked");

            await tx.cashTransaction.delete({
                where: { id: payment.cashTransactionId }
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

export async function deleteExpenseCategoryAction(id: string) {
    try {
        await db.expenseCategory.delete({
            where: { id }
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
        const data = categoryNames.map(name => ({
            userId,
            branchId: locationId,
            name,
            isDefault: true
        }));

        await db.expenseCategory.createMany({
            data,
            skipDuplicates: true
        });

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
                openingBalance: Number(a.initialBalance),
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
        const result = await db.cashAccount.create({
            data: {
                userId: data.userId,
                branchId: data.locationId,
                name: data.name,
                description: data.description || null,
                initialBalance: data.openingBalance || 0,
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

export async function updateCashAccountAction(id: string, updates: any) {
    try {
        const result = await db.cashAccount.update({
            where: { id },
            data: {
                name: updates.name,
                description: updates.description,
                initialBalance: updates.openingBalance,
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
                where: { id, locationId }
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
        const account = await db.cashAccount.findUnique({
            where: { id: accountId },
            select: { initialBalance: true }
        });

        if (!account) return { success: false, error: 'Account not found' };

        const transactions = await db.cashTransaction.findMany({
            where: { accountId, branchId: locationId },
            select: { amount: true, transactionType: true }
        });

        let balance = Number(account.initialBalance);
        for (const tx of transactions) {
            const amount = Number(tx.amount);
            if (tx.transactionType === 'cash_in' || tx.transactionType === 'transfer_in') {
                balance += amount;
            } else if (tx.transactionType === 'cash_out' || tx.transactionType === 'transfer_out') {
                balance -= amount;
            }
        }

        return { success: true, data: balance };
    } catch (error: any) {
        console.error('Error calculating account balance:', error);
        return { success: false, error: error.message };
    }
}

// --- CASH TRANSACTIONS ---

export async function getCashTransactionsAction(locationId: string, accountId?: string) {
    try {
        const where: any = { branchId: locationId };
        if (accountId) where.accountId = accountId;

        const transactions = await db.cashTransaction.findMany({
            where,
            orderBy: [{ date: 'desc' }, { createdAt: 'desc' }]
        });

        return {
            success: true,
            data: transactions.map((t: any) => ({
                ...t,
                created_at: t.createdAt.toISOString(),
                updated_at: t.updatedAt.toISOString(),
                user_id: t.userId,
                account_id: t.accountId,
                location_id: t.locationId,
                transaction_type: t.transactionType,
                person_in_charge: t.personInCharge,
                payment_method: t.paymentMethod,
                receipt_image: t.receiptImage
            }))
        };
    } catch (error: any) {
        console.error('Error fetching cash transactions:', error);
        return { success: false, error: error.message };
    }
}

export async function createCashTransactionAction(data: any) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            if (data.transactionType === 'transfer' && data.toAccountId) {
                const txOut = await tx.cashTransaction.create({
                    data: {
                        userId: data.userId,
                        locationId: data.locationId,
                        accountId: data.accountId,
                        amount: data.amount,
                        transactionType: 'transfer_out',
                        description: data.description,
                        date: data.date ? new Date(data.date) : new Date(),
                        category: data.category || 'Transfer'
                    }
                });

                const txIn = await tx.cashTransaction.create({
                    data: {
                        userId: data.userId,
                        locationId: data.locationId,
                        accountId: data.toAccountId,
                        amount: data.amount,
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
                        userId: data.userId,
                        branchId: data.locationId,
                        accountId: data.accountId,
                        amount: data.amount,
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

export async function updateCashTransactionAction(id: string, updates: any) {
    try {
        const result = await db.cashTransaction.update({
            where: { id },
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

export async function findCashTransactionAction(id: string) {
    try {
        const transaction = await db.cashTransaction.findUnique({
            where: { id },
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
        await db.$transaction(async (tx: any) => {
            await tx.installmentPayment.updateMany({
                where: { cashTransactionId: id },
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
        const account = await db.cashAccount.findFirst({
            where: { id: accountId, branchId: locationId },
            select: { initialBalance: true }
        });

        return { success: true, data: Number(account?.initialBalance || 0) };
    } catch (error: any) {
        console.error('Error fetching opening balance:', error);
        return { success: false, error: error.message };
    }
}

export async function createBulkCashTransactionsAction(transactions: any[]) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            const created = [];
            for (const data of transactions) {
                if (data.transactionType === 'transfer' && data.toAccountId) {
                    created.push(await tx.cashTransaction.create({
                        data: {
                            userId: data.userId,
                            branchId: data.locationId,
                            accountId: data.accountId,
                            amount: data.amount,
                            transactionType: 'transfer_out',
                            description: data.description,
                            date: data.date ? new Date(data.date) : new Date(),
                            category: data.category || 'Transfer'
                        }
                    }));
                    created.push(await tx.cashTransaction.create({
                        data: {
                            userId: data.userId,
                            branchId: data.locationId,
                            accountId: data.toAccountId,
                            amount: data.amount,
                            transactionType: 'transfer_in',
                            description: data.description,
                            date: data.date ? new Date(data.date) : new Date(),
                            category: data.category || 'Transfer'
                        }
                    }));
                } else {
                    created.push(await tx.cashTransaction.create({
                        data: {
                            userId: data.userId,
                            branchId: data.locationId,
                            accountId: data.accountId,
                            amount: data.amount,
                            transactionType: data.transactionType,
                            category: data.category,
                            description: data.description,
                            personInCharge: data.personInCharge,
                            tags: data.tags,
                            date: data.date ? new Date(data.date) : new Date(),
                            paymentMethod: data.paymentMethod,
                            receiptImage: data.receiptImage
                        }
                    }));
                }
            }
            return created;
        });

        revalidatePath('/finance');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error creating bulk transactions:', error);
        return { success: false, error: error.message };
    }
}
