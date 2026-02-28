/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '../../prisma/db';

/**
 * Checks if an agency has exceeded its user quota.
 */
export async function checkUserQuota(agencyId: string) {
    const agency = await db.agency.findUnique({
        where: { id: agencyId },
        include: { package: true }
    });

    if (!agency || !agency.package) return true; // Default to allow if no package set
    if (agency.package.unlimitedUsers) return true;

    const userCount = await db.user.count({
        where: { agencyId: agencyId }
    });

    if (userCount >= agency.package.maxUsers) {
        throw new Error(`User limit reached (${agency.package.maxUsers}). Please upgrade your plan to add more team members.`);
    }

    return true;
}

/**
 * Checks if an agency has exceeded its product quota.
 */
export async function checkProductQuota(agencyId: string) {
    const agency = await db.agency.findUnique({
        where: { id: agencyId },
        include: { package: true }
    });

    if (!agency || !agency.package) return true;
    if (agency.package.unlimitedProducts) return true;

    const productCount = await db.product.count({
        where: { agencyId: agencyId }
    });

    if (productCount >= agency.package.maxProducts) {
        throw new Error(`Product limit reached (${agency.package.maxProducts}). Please upgrade your plan to add more products.`);
    }

    return true;
}

/**
 * Checks if an agency has exceeded its sales quota for the current month.
 */
export async function checkSalesQuota(agencyId: string) {
    const agency = await db.agency.findUnique({
        where: { id: agencyId },
        include: { package: true }
    });

    if (!agency || !agency.package) return true;
    if (agency.package.unlimitedSales) return true;

    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const salesCount = await db.sale.count({
        where: { 
            agencyId: agencyId,
            createdAt: { gte: firstDayOfMonth }
        }
    });

    if (salesCount >= agency.package.maxSalesPerMonth) {
        throw new Error(`Monthly sales limit reached (${agency.package.maxSalesPerMonth}). Please upgrade your plan to continue recording sales.`);
    }

    return true;
}
