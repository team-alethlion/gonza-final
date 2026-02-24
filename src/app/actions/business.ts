'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';

export async function getBusinessLocationsAction(userId: string) {
    try {
        const branches = await db.branch.findMany({
            where: {
                adminId: userId
            },
            orderBy: [
                {
                    createdAt: 'desc'
                },
                {
                    name: 'asc'
                }
            ]
        });

        // The previous context expected an is_default field, but it's not in the model.
        // We will make the first branch the default if is_default is missing.
        return branches.map((b: any, index: number) => ({
            id: b.id,
            name: b.name,
            user_id: b.adminId,
            is_default: index === 0, // Mocking is_default
            created_at: b.createdAt.toISOString(),
            updated_at: b.updatedAt.toISOString(),
            switch_password_hash: b.accessPassword
        }));
    } catch (error) {
        console.error('Error fetching business locations:', error);
        return [];
    }
}

export async function createBusinessAction(userId: string, name: string) {
    try {
        const branch = await db.branch.create({
            data: {
                name: name,
                location: 'Main Location', // Default location
                adminId: userId
            }
        });

        return {
            success: true,
            data: {
                id: branch.id,
                name: branch.name,
                user_id: branch.adminId,
                is_default: false,
                created_at: branch.createdAt.toISOString(),
                updated_at: branch.updatedAt.toISOString(),
                switch_password_hash: branch.accessPassword
            }
        };
    } catch (error) {
        console.error('Error creating business:', error);
        return { success: false, error: 'Failed to create business' };
    }
}

export async function updateBusinessAction(id: string, userId: string, name: string) {
    try {
        const branch = await db.branch.update({
            where: {
                id: id,
                adminId: userId
            },
            data: {
                name: name
            }
        });

        return {
            success: true,
            data: {
                id: branch.id,
                name: branch.name,
                user_id: branch.adminId,
                is_default: false, // Update logic handles defaultness elsewhere
                created_at: branch.createdAt.toISOString(),
                updated_at: branch.updatedAt.toISOString(),
                switch_password_hash: branch.accessPassword
            }
        };
    } catch (error) {
        console.error('Error updating business:', error);
        return { success: false, error: 'Failed to update business' };
    }
}

export async function deleteBusinessAction(id: string, userId: string) {
    try {
        await db.branch.delete({
            where: {
                id: id,
                adminId: userId
            }
        });

        return { success: true };
    } catch (error) {
        console.error('Error deleting business:', error);
        return { success: false, error: 'Failed to delete business' };
    }
}

// --- BUSINESS RESET ---

export async function resetBusinessAction(id: string, userId: string) {
    try {
        // Delete all business data in a transaction (products, sales, stock history, etc.)
        await db.$transaction(async (tx: any) => {
            // Delete stock history first (references products)
            await tx.productHistory.deleteMany({ where: { locationId: id } });
            // Delete sale items related data
            await tx.sale.deleteMany({ where: { branchId: id } });
            // Delete products
            await tx.product.deleteMany({ where: { branchId: id } });
            // Delete customers
            await tx.customer.deleteMany({ where: { branchId: id } });
            // Delete activity history
            await tx.activityHistory.deleteMany({ where: { branchId: id } });
        });

        return { success: true };
    } catch (error: any) {
        console.error('Error resetting business:', error);
        return { success: false, error: error.message };
    }
}

// --- BUSINESS PASSWORD ---

import bcrypt from 'bcryptjs';

export async function setBusinessPasswordAction(businessId: string, password: string) {
    try {
        const hash = await bcrypt.hash(password, 10);
        await db.branch.update({
            where: { id: businessId },
            data: { accessPassword: hash }
        });
        return { success: true };
    } catch (error: any) {
        console.error('Error setting business password:', error);
        return { success: false, error: error.message };
    }
}

export async function verifyBusinessPasswordAction(businessId: string, password: string) {
    try {
        const branch = await db.branch.findUnique({
            where: { id: businessId },
            select: { accessPassword: true }
        });

        if (!branch?.accessPassword) {
            return { success: true, verified: true }; // No password set
        }

        const verified = await bcrypt.compare(password, branch.accessPassword);
        return { success: true, verified };
    } catch (error: any) {
        console.error('Error verifying business password:', error);
        return { success: false, verified: false, error: error.message };
    }
}

export async function removeBusinessPasswordAction(businessId: string) {
    try {
        await db.branch.update({
            where: { id: businessId },
            data: { accessPassword: null }
        });
        return { success: true };
    } catch (error: any) {
        console.error('Error removing business password:', error);
        return { success: false, error: error.message };
    }
}
