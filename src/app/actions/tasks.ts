/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db, TaskPriority, RecurrenceType } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';
import { addDays, addWeeks, addMonths, format, parseISO } from 'date-fns';

// --- TASKS ---

export interface CreateTaskInput {
    userId: string;
    locationId: string;
    title: string;
    description?: string | null;
    priority: TaskPriority;
    dueDate: Date;
    category?: string | null;
    reminderEnabled?: boolean;
    reminderTime?: string | null;
    isRecurring?: boolean;
    recurrenceType?: RecurrenceType | null;
    recurrenceEndDate?: Date | null;
}

export async function getTasksAction(userId: string, locationId: string) {
    try {
        const tasks = await db.task.findMany({
            where: {
                createdById: userId,
                branchId: locationId,
            },
            orderBy: {
                dueDate: 'asc'
            }
        });

        return {
            success: true,
            data: tasks.map((t: any) => ({
                ...t,
                user_id: t.userId,
                location_id: t.locationId,
                due_date: t.dueDate.toISOString().split('T')[0],
                completed_at: t.completedAt?.toISOString() || null,
                created_at: t.createdAt.toISOString(),
                updated_at: t.updatedAt.toISOString(),
                reminder_enabled: t.reminderEnabled,
                reminder_time: t.reminderTime,
                is_recurring: t.isRecurring,
                recurrence_type: t.recurrenceType,
                recurrence_end_date: t.recurrenceEndDate?.toISOString().split('T')[0] || null,
                parent_task_id: t.parentTaskId,
                recurrence_count: t.recurrenceCount
            }))
        };
    } catch (error: any) {
        console.error('Error fetching tasks:', error);
        return { success: false, error: error.message };
    }
}

export async function createTaskAction(data: CreateTaskInput) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            // 1. Create the main task
            const task = await tx.task.create({
                data: {
                    createdById: data.userId,
                    branchId: data.locationId,
                    title: data.title,
                    description: data.description || null,
                    priority: data.priority,
                    dueDate: data.dueDate,
                    category: data.category || null,
                    reminderEnabled: data.reminderEnabled || false,
                    reminderTime: data.reminderTime || null,
                    isRecurring: data.isRecurring || false,
                    recurrenceType: data.recurrenceType || null,
                    recurrenceEndDate: data.recurrenceEndDate || null
                }
            });

            // 2. If it's recurring, create instances
            if (task.isRecurring && task.recurrenceType && task.recurrenceEndDate) {
                const instances = [];
                let currentDate = task.dueDate;
                const endDate = task.recurrenceEndDate;
                let count = 0;

                while (count < 365) {
                    let nextDate: Date;
                    switch (task.recurrenceType) {
                        case 'daily': nextDate = addDays(currentDate, 1); break;
                        case 'weekly': nextDate = addWeeks(currentDate, 1); break;
                        case 'monthly': nextDate = addMonths(currentDate, 1); break;
                        default: nextDate = currentDate;
                    }

                    if (nextDate > endDate) break;

                    instances.push({
                        createdById: task.createdById,
                        branchId: task.branchId,
                        title: task.title,
                        description: task.description,
                        priority: task.priority,
                        dueDate: nextDate,
                        category: task.category,
                        completed: false,
                        reminderEnabled: task.reminderEnabled,
                        reminderTime: task.reminderTime,
                        isRecurring: false,
                        parentTaskId: task.id,
                        recurrenceCount: count + 1
                    });

                    currentDate = nextDate;
                    count++;
                }

                if (instances.length > 0) {
                    await tx.task.createMany({
                        data: instances
                    });
                }
            }

            return task;
        });

        revalidatePath('/tasks');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error creating task:', error);
        return { success: false, error: error.message };
    }
}

export async function updateTaskAction(id: string, userId: string, updates: any) {
    try {
        const result = await db.$transaction(async (tx: any) => {
            const task = await tx.task.update({
                where: { id, createdById: userId },
                data: {
                    ...updates,
                    // Map camelCase to PascalCase if necessary, but prisma models use camelCase for fields
                }
            });

            // If recurring settings changed, we might need to recreate instances
            if (task.isRecurring && (updates.recurrenceType || updates.recurrenceEndDate)) {
                // Delete existing pending instances
                await tx.task.deleteMany({
                    where: { parentTaskId: id, completed: false }
                });

                // Create new ones
                if (task.recurrenceType && task.recurrenceEndDate) {
                    const instances = [];
                    let currentDate = task.dueDate;
                    const endDate = task.recurrenceEndDate;
                    let count = 0;

                    while (count < 365) {
                        let nextDate: Date;
                        switch (task.recurrenceType!) {
                            case 'daily': nextDate = addDays(currentDate, 1); break;
                            case 'weekly': nextDate = addWeeks(currentDate, 1); break;
                            case 'monthly': nextDate = addMonths(currentDate, 1); break;
                            default: nextDate = currentDate;
                        }
                        if (nextDate > endDate) break;

                        instances.push({
                            createdById: task.createdById,
                            branchId: task.branchId,
                            title: task.title,
                            description: task.description,
                            priority: task.priority,
                            dueDate: nextDate,
                            category: task.category,
                            isRecurring: false,
                            parentTaskId: task.id,
                            recurrenceCount: count + 1
                        });
                        currentDate = nextDate;
                        count++;
                    }
                    if (instances.length > 0) {
                        await tx.task.createMany({ data: instances });
                    }
                }
            }

            return task;
        });

        revalidatePath('/tasks');
        return { success: true, data: result };
    } catch (error: any) {
        console.error('Error updating task:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteTaskAction(id: string, userId: string) {
    try {
        await db.$transaction(async (tx: any) => {
            // Delete instances first
            await tx.task.deleteMany({
                where: { parentTaskId: id, completed: false }
            });

            await tx.task.delete({
                where: { id, createdById: userId }
            });
        });

        revalidatePath('/tasks');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting task:', error);
        return { success: false, error: error.message };
    }
}

export async function bulkUpdateTasksAction(ids: string[], userId: string, updates: any) {
    try {
        await db.task.updateMany({
            where: { id: { in: ids }, createdById: userId },
            data: updates
        });

        revalidatePath('/tasks');
        return { success: true };
    } catch (error: any) {
        console.error('Error bulk updating tasks:', error);
        return { success: false, error: error.message };
    }
}

// --- CATEGORIES ---

export async function getTaskCategoriesAction(userId: string, locationId: string) {
    try {
        const categories = await db.taskCategory.findMany({
            where: { branchId: locationId },
            orderBy: { name: 'asc' }
        });

        return {
            success: true,
            data: categories.map((c: any) => ({
                ...c,
                user_id: c.userId,
                location_id: c.locationId,
                created_at: c.createdAt.toISOString(),
                updated_at: c.updatedAt.toISOString()
            }))
        };
    } catch (error: any) {
        console.error('Error fetching categories:', error);
        return { success: false, error: error.message };
    }
}

export async function createTaskCategoryAction(userId: string, locationId: string, name: string) {
    try {
        const category = await db.taskCategory.create({
            data: { userId, branchId: locationId, name }
        });

        return { success: true, data: category };
    } catch (error: any) {
        console.error('Error creating category:', error);
        return { success: false, error: error.message };
    }
}

export async function updateTaskCategoryAction(id: string, userId: string, name: string) {
    try {
        const category = await db.taskCategory.update({
            where: { id, userId },
            data: { name }
        });

        return { success: true, data: category };
    } catch (error: any) {
        console.error('Error updating category:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteTaskCategoryAction(id: string, userId: string) {
    try {
        await db.taskCategory.delete({
            where: { id, userId }
        });

        return { success: true };
    } catch (error: any) {
        console.error('Error deleting category:', error);
        return { success: false, error: error.message };
    }
}

export async function createDefaultTaskCategoriesAction(userId: string, locationId: string) {
    try {
        const defaultNames = ['General', 'Marketing', 'Operations', 'Finance', 'Follow-up'];

        // Using individual upserts to be absolutely safe across all environments and race conditions
        for (const name of defaultNames) {
            await db.taskCategory.upsert({
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
                    name
                }
            });
        }

        return { success: true };
    } catch (error: any) {
        console.error('Error creating default categories:', error);
        return { success: false, error: error.message };
    }
}
