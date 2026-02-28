/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

async function verifySuperAdmin() {
    const session = await auth();
    if (!session || (session.user as any).role?.toLowerCase() !== 'superadmin') {
        throw new Error("Unauthorized: Super Admin access required");
    }
    return session;
}

/**
 * Fetches all packages (active and inactive) for admin management.
 */
export async function getAllPackagesForAdminAction() {
    try {
        await verifySuperAdmin();
        const packages = await db.package.findMany({
            orderBy: { createdAt: 'desc' }
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
        return { success: false, error: error.message };
    }
}

/**
 * Fetches only active subscription packages for the client app.
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

export async function createPackageAction(data: any) {
    try {
        await verifySuperAdmin();
        const pkg = await db.package.create({
            data: {
                name: data.name,
                description: data.description,
                monthlyPrice: data.monthlyPrice,
                yearlyPrice: data.yearlyPrice,
                maxUsers: data.maxUsers,
                unlimitedUsers: data.unlimitedUsers || false,
                maxProducts: data.maxProducts,
                unlimitedProducts: data.unlimitedProducts || false,
                maxSalesPerMonth: data.maxSalesPerMonth,
                unlimitedSales: data.unlimitedSales || false,
                maxCustomers: data.maxCustomers,
                unlimitedCustomers: data.unlimitedCustomers || false,
                hasFreeTrial: data.hasFreeTrial || false,
                trialDays: data.trialDays || 14,
                features: data.features || {},
                isDefault: data.isDefault || false
            }
        });

        revalidatePath('/(admin)/packages');
        return { success: true, data: pkg };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function updatePackageAction(id: string, data: any) {
    try {
        await verifySuperAdmin();
        const pkg = await db.package.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description,
                monthlyPrice: data.monthlyPrice,
                yearlyPrice: data.yearlyPrice,
                maxUsers: data.maxUsers,
                unlimitedUsers: data.unlimitedUsers,
                maxProducts: data.maxProducts,
                unlimitedProducts: data.unlimitedProducts,
                maxSalesPerMonth: data.maxSalesPerMonth,
                unlimitedSales: data.unlimitedSales,
                maxCustomers: data.maxCustomers,
                unlimitedCustomers: data.unlimitedCustomers,
                hasFreeTrial: data.hasFreeTrial,
                trialDays: data.trialDays,
                features: data.features,
                isActive: data.isActive
            }
        });

        revalidatePath('/(admin)/packages');
        return { success: true, data: pkg };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function togglePackageStatusAction(id: string, isActive: boolean) {
    try {
        await verifySuperAdmin();
        await db.package.update({
            where: { id },
            data: { isActive }
        });
        revalidatePath('/(admin)/packages');
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
