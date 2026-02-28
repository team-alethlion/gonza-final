/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';

/**
 * Fetches all active subscription packages from the database.
 */
export async function getPackagesAction() {
    try {
        const packages = await db.package.findMany({
            where: { isActive: true },
            orderBy: { monthlyPrice: 'asc' }
        });

        return { 
            success: true, 
            data: packages.map((pkg: any) => ({
                ...pkg,
                monthlyPrice: Number(pkg.monthlyPrice),
                yearlyPrice: Number(pkg.yearlyPrice)
            }))
        };
    } catch (error: any) {
        console.error('Error fetching packages:', error);
        return { success: false, error: error.message };
    }
}
