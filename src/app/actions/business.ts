/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import bcrypt from 'bcryptjs';

export async function getBusinessLocationsAction(userId: string) {
    const session = await auth();
    if (!session || !session.user) return [];
    if (session.user.id !== userId && (session.user as any).role?.toLowerCase() !== 'superadmin') return [];

    try {
        const branches = await db.branch.findMany({
            where: {
                OR: [
                    { adminId: userId },
                    { users: { some: { id: userId } } }
                ]
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
    const session = await auth();
    if (!session || !session.user || session.user.id !== userId) throw new Error("Unauthorized");

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
    const session = await auth();
    if (!session || !session.user || (session.user.id !== userId && (session.user as any).role?.toLowerCase() !== 'superadmin')) throw new Error("Unauthorized");

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
                is_default: false,
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
    const session = await auth();
    if (!session || !session.user || (session.user.id !== userId && (session.user as any).role?.toLowerCase() !== 'superadmin')) throw new Error("Unauthorized");

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
    const session = await auth();
    if (!session || !session.user || (session.user.id !== userId && (session.user as any).role?.toLowerCase() !== 'superadmin')) throw new Error("Unauthorized");

    try {
        // VERIFY OWNERSHIP BEFORE WIPE
        const branch = await db.branch.findUnique({
            where: { id },
            select: { adminId: true }
        });

        if (!branch || (branch.adminId !== userId && (session.user as any).role?.toLowerCase() !== 'superadmin')) {
            throw new Error("Unauthorized: You do not have permission to reset this business.");
        }

        // Delete all business data in a transaction
        await db.$transaction(async (tx: any) => {
            await tx.productHistory.deleteMany({ where: { locationId: id } });
            await tx.sale.deleteMany({ where: { branchId: id } });
            await tx.product.deleteMany({ where: { branchId: id } });
            await tx.customer.deleteMany({ where: { branchId: id } });
            await tx.activityHistory.deleteMany({ where: { locationId: id } });
        });

        return { success: true };
    } catch (error: any) {
        console.error('Error resetting business:', error);
        return { success: false, error: error.message };
    }
}

// --- BUSINESS PASSWORD ---

export async function setBusinessPasswordAction(businessId: string, password: string) {
    const session = await auth();
    if (!session || !session.user) throw new Error("Unauthorized");
    
    // Authorization: only branch users or superadmins can set password
    const userBranchId = (session.user as any).branchId;
    const isSuperAdmin = (session.user as any).role?.toLowerCase() === 'superadmin';
    if (userBranchId && userBranchId !== businessId && !isSuperAdmin) throw new Error("Unauthorized");

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
            return { success: true, verified: true };
        }

        const verified = await bcrypt.compare(password, branch.accessPassword);
        return { success: true, verified };
    } catch (error: any) {
        console.error('Error verifying business password:', error);
        return { success: false, verified: false, error: error.message };
    }
}

export async function removeBusinessPasswordAction(businessId: string) {
    const session = await auth();
    if (!session || !session.user) throw new Error("Unauthorized");
    
    // Verification: only admin of the branch or superadmin
    const isSuperAdmin = (session.user as any).role?.toLowerCase() === 'superadmin';
    const branch = await db.branch.findUnique({
        where: { id: businessId },
        select: { adminId: true }
    });

    if (!isSuperAdmin && branch?.adminId !== session.user.id) throw new Error("Unauthorized");

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
