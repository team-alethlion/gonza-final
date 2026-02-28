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
                // Assuming we use agencyId for userId if they are an owner, or it's connected somehow
                // For now, focusing on branchId as that's normally the tenant isolation in the schema
                branchId: branchId,
                createdAt: {
                    gte: startOfMonth
                }
            }
        });

        // 2. Count customers with upcoming backgrounds (for now just count those who have a birthday set)
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

export async function mergeCustomersAction(primaryCustomerId: string, duplicateIds: string[]) {
    try {
        if (!primaryCustomerId || duplicateIds.length === 0) {
            return { success: false, error: 'Invalid selection' };
        }

        // Use a transaction to ensure all operations succeed or fail together
        await db.$transaction(async (tx: any) => {
            // 1. Update sales to point to primary customer
            // In Prisma, assuming relation is through customerId
            await tx.sale.updateMany({
                where: {
                    customerId: {
                        in: duplicateIds
                    }
                },
                data: {
                    customerId: primaryCustomerId
                }
            });

            // Note: The original code also updated messages. 
            // If there's a Message model connected to customers, add it here.
            // await tx.message.updateMany({
            //     where: { customerId: { in: duplicateIds } },
            //     data: { customerId: primaryCustomerId }
            // });

            // 3. Delete duplicate customers
            await tx.customer.deleteMany({
                where: {
                    id: {
                        in: duplicateIds
                    }
                }
            });
        });

        // Revalidate customers list
        revalidatePath('/customers');
        return { success: true };
    } catch (error: any) {
        console.error('Error merging customers:', error);
        return { success: false, error: error.message || 'Failed to merge customers' };
    }
}

export async function getCustomersAction(branchId: string) {
    try {
        const customers = await db.customer.findMany({
            where: { branchId },
            orderBy: { name: 'asc' }
        });

        const count = await db.customer.count({
            where: { branchId }
        });

        // Map Prisma Customer model to the shape expected by useCustomers hook
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
            updatedAt: c.updatedAt.toISOString()
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
                adminId: userId, // Assuming user who created it is the admin/owner
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

export async function updateCustomerAction(customerId: string, data: any) {
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
            where: { id: customerId },
            data: updateData
        });
        revalidatePath('/customers');
        return { success: true, data: updatedCustomer };
    } catch (error: any) {
        console.error('Error updating customer:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteCustomerAction(customerId: string) {
    try {
        await db.customer.delete({
            where: { id: customerId }
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

export async function updateCustomerCategoryAction(categoryId: string, name: string) {
    try {
        const updatedCategory = await db.customerCategory.update({
            where: { id: categoryId },
            data: { name: name.trim() }
        });
        revalidatePath('/customers');
        return { success: true, data: updatedCategory };
    } catch (error: any) {
        console.error('Error updating customer category:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteCustomerCategoryAction(categoryId: string) {
    try {
        await db.customerCategory.delete({
            where: { id: categoryId }
        });
        revalidatePath('/customers');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting customer category:', error);
        return { success: false, error: error.message };
    }
}
