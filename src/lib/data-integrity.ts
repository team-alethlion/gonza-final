/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "../../prisma/db";

/**
 * Ensures that multiple entities belong to the same branch to prevent cross-tenant data corruption.
 */
export async function verifyEntitiesBelongToBranch(branchId: string, entities: {
    customerId?: string | null;
    productId?: string | null;
    cashAccountId?: string | null;
    categoryId?: string | null;
    saleId?: string | null;
}) {
    const checks: Promise<void>[] = [];

    if (entities.customerId) {
        checks.push((async () => {
            const customer = await db.customer.findUnique({
                where: { id: entities.customerId! },
                select: { branchId: true }
            });
            if (!customer || customer.branchId !== branchId) {
                throw new Error("Data Integrity Error: Customer does not belong to this branch.");
            }
        })());
    }

    if (entities.productId) {
        checks.push((async () => {
            const product = await db.product.findUnique({
                where: { id: entities.productId! },
                select: { branchId: true }
            });
            if (!product || product.branchId !== branchId) {
                throw new Error("Data Integrity Error: Product does not belong to this branch.");
            }
        })());
    }

    if (entities.cashAccountId) {
        checks.push((async () => {
            const account = await db.cashAccount.findUnique({
                where: { id: entities.cashAccountId! },
                select: { branchId: true }
            });
            if (!account || account.branchId !== branchId) {
                throw new Error("Data Integrity Error: Cash account does not belong to this branch.");
            }
        })());
    }

    if (entities.saleId) {
        checks.push((async () => {
            const sale = await db.sale.findUnique({
                where: { id: entities.saleId! },
                select: { branchId: true }
            });
            if (!sale || sale.branchId !== branchId) {
                throw new Error("Data Integrity Error: Sale does not belong to this branch.");
            }
        })());
    }

    await Promise.all(checks);
}

/**
 * Validates that a list of items (e.g. sale items) are all valid and belong to the branch.
 */
export async function validateSaleItems(branchId: string, items: any[]) {
    const productIds = items.filter(i => i.productId).map(i => i.productId);
    if (productIds.length === 0) return;

    const products = await db.product.findMany({
        where: {
            id: { in: productIds },
            branchId: branchId
        },
        select: { id: true }
    });

    if (products.length !== productIds.length) {
        throw new Error("Data Integrity Error: One or more products do not belong to this branch.");
    }
}
