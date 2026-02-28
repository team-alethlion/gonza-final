/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';

export async function getCustomerStatsAction(userId: string, branchId: string) {
    try {
        const thisMonth = new Date();
        const startOfMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1);

        // 1. Count customers created this month
        const thisMonthCount = await db.customer.count({
            where: {
                branchId: branchId,
                createdAt: {
                    gte: startOfMonth
                }
            }
        });

        // 2. Count customers with upcoming backgrounds
        const withBirthdays = await db.customer.count({
            where: {
                branchId: branchId,
                birthday: {
                    not: null
                }
            }
        });

        return {
            success: true,
            data: {
                withBirthdays,
                thisMonth: thisMonthCount
            }
        };
    } catch (error: any) {
        console.error('Error fetching customer stats:', error);
        return { success: false, error: error.message };
    }
}

export async function mergeCustomersAction(branchId: string, primaryCustomerId: string, duplicateIds: string[]) {
    try {
        if (!primaryCustomerId || duplicateIds.length === 0) {
            return { success: false, error: 'Invalid selection' };
        }

        // Use a transaction to ensure all operations succeed or fail together
        await db.$transaction(async (tx: any) => {
            // Verify all customers belong to the branch
            const count = await tx.customer.count({
                where: {
                    id: { in: [primaryCustomerId, ...duplicateIds] },
                    branchId: branchId
                }
            });

            if (count !== duplicateIds.length + 1) {
                throw new Error("Unauthorized: One or more customers do not belong to this branch");
            }

            // 1. Update sales to point to primary customer
            await tx.sale.updateMany({
                where: {
                    customerId: { in: duplicateIds },
                    branchId: branchId
                },
                data: {
                    customerId: primaryCustomerId
                }
            });

            // 3. Delete duplicate customers
            await tx.customer.deleteMany({
                where: {
                    id: { in: duplicateIds },
                    branchId: branchId
                }
            });
        });

        revalidatePath('/customers');
        return { success: true };
    } catch (error: any) {
        console.error('Error merging customers:', error);
        return { success: false, error: error.message || 'Failed to merge customers' };
    }
}

export async function getCustomersAction(branchId: string, skip: number = 0, take: number = 50) {
    try {
        const customers: any[] = await db.$queryRaw`
            SELECT 
                c.*,
                COALESCE(s.total_spent, 0) as "lifetimeValue",
                COALESCE(s.order_count, 0) as "orderCount"
            FROM "Customer" c
            LEFT JOIN (
                SELECT 
                    "customerName", 
                    SUM(total) as total_spent, 
                    COUNT(id) as order_count
                FROM "Sale"
                WHERE "branchId" = ${branchId} AND "paymentStatus" != 'QUOTE'
                GROUP BY "customerName"
            ) s ON LOWER(c.name) = LOWER(s."customerName")
            WHERE c."branchId" = ${branchId}
            ORDER BY c.name ASC
            LIMIT ${take}
            OFFSET ${skip}
        `;

        const count = await db.customer.count({
            where: { branchId }
        });

        const mappedCustomers = customers.map((c: any) => ({
            id: c.id,
            fullName: c.name,
            phoneNumber: c.phone,
            email: c.email,
            birthday: c.birthday ? c.birthday.toISOString() : null,
            gender: c.gender,
            location: c.address,
            categoryId: c.categoryId,
            notes: c.notes,
            tags: c.tags || [],
            socialMedia: c.socialMedia || null,
            createdAt: c.createdAt.toISOString(),
            updatedAt: c.updatedAt.toISOString(),
            lifetimeValue: Number(c.lifetimeValue),
            orderCount: Number(c.orderCount)
        }));

        return { success: true, data: { customers: mappedCustomers, count } };
    } catch (error: any) {
        console.error('Error fetching customers:', error);
        return { success: false, error: error.message };
    }
}

export async function createCustomerAction(branchId: string, userId: string, data: any) {
    try {
        const newCustomer = await db.customer.create({
            data: {
                branchId: branchId,
                adminId: userId,
                name: data.fullName,
                phone: data.phoneNumber || null,
                email: data.email || null,
                birthday: data.birthday ? new Date(data.birthday) : null,
                gender: data.gender || null,
                address: data.location || null,
                categoryId: data.categoryId || null,
                notes: data.notes || null,
                tags: data.tags || [],
                socialMedia: data.socialMedia || null
            }
        });
        revalidatePath('/customers');
        return { success: true, data: newCustomer };
    } catch (error: any) {
        console.error('Error creating customer:', error);
        return { success: false, error: error.message };
    }
}

export async function updateCustomerAction(customerId: string, branchId: string, data: any) {
    try {
        const updateData: any = {};
        if (data.fullName !== undefined) updateData.name = data.fullName;
        if (data.phoneNumber !== undefined) updateData.phone = data.phoneNumber;
        if (data.email !== undefined) updateData.email = data.email;
        if (data.birthday !== undefined) updateData.birthday = data.birthday ? new Date(data.birthday) : null;
        if (data.gender !== undefined) updateData.gender = data.gender;
        if (data.location !== undefined) updateData.address = data.location;
        if (data.categoryId !== undefined) updateData.categoryId = data.categoryId;
        if (data.notes !== undefined) updateData.notes = data.notes;
        if (data.tags !== undefined) updateData.tags = data.tags;
        if (data.socialMedia !== undefined) updateData.socialMedia = data.socialMedia;

        const updatedCustomer = await db.customer.update({
            where: { id: customerId, branchId: branchId },
            data: updateData
        });
        revalidatePath('/customers');
        return { success: true, data: updatedCustomer };
    } catch (error: any) {
        console.error('Error updating customer:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteCustomerAction(customerId: string, branchId: string) {
    try {
        await db.customer.delete({
            where: { id: customerId, branchId: branchId }
        });
        revalidatePath('/customers');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting customer:', error);
        return { success: false, error: error.message };
    }
}

export async function getCustomerCategoriesAction(branchId: string) {
    try {
        const categories = await db.customerCategory.findMany({
            where: { branchId },
            orderBy: { name: 'asc' }
        });

        const formattedCategories = categories.map((c: any) => ({
            id: c.id,
            name: c.name,
            isDefault: c.isDefault,
            createdAt: c.createdAt.toISOString(),
            updatedAt: c.updatedAt.toISOString()
        }));

        return { success: true, data: formattedCategories };
    } catch (error: any) {
        console.error('Error fetching customer categories:', error);
        return { success: false, error: error.message };
    }
}

export async function createCustomerCategoryAction(branchId: string, userId: string, name: string) {
    try {
        const newCategory = await db.customerCategory.create({
            data: {
                branchId: branchId,
                name: name.trim(),
                isDefault: false,
                userId: userId
            }
        });
        revalidatePath('/customers');
        return { success: true, data: newCategory };
    } catch (error: any) {
        console.error('Error creating customer category:', error);
        return { success: false, error: error.message };
    }
}

export async function updateCustomerCategoryAction(categoryId: string, branchId: string, name: string) {
    try {
        const updatedCategory = await db.customerCategory.update({
            where: { id: categoryId, branchId: branchId },
            data: { name: name.trim() }
        });
        revalidatePath('/customers');
        return { success: true, data: updatedCategory };
    } catch (error: any) {
        console.error('Error updating customer category:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteCustomerCategoryAction(categoryId: string, branchId: string) {
    try {
        await db.customerCategory.delete({
            where: { id: categoryId, branchId: branchId }
        });
        revalidatePath('/customers');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting customer category:', error);
        return { success: false, error: error.message };
    }
}

export async function getCustomerLifetimeStatsAction(branchId: string, customerName: string) {
    try {
        const stats = await db.sale.aggregate({
            where: {
                branchId,
                customerName: { equals: customerName, mode: 'insensitive' },
                paymentStatus: { not: 'QUOTE' }
            },
            _sum: {
                total: true
            },
            _count: {
                id: true
            }
        });

        return {
            success: true,
            data: {
                total: Number(stats._sum.total || 0),
                count: stats._count.id
            }
        };
    } catch (error: any) {
        console.error('Error fetching customer lifetime stats:', error);
        return { success: false, error: error.message };
    }
}
