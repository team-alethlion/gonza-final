/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db, ActivityType, ActivityModule } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';

export interface ActivityLogInput {
    userId: string;
    locationId: string;
    activityType: ActivityType;
    module: ActivityModule;
    entityType: string;
    entityId?: string;
    entityName: string;
    description: string;
    metadata?: any;
    profileId?: string;
    profileName?: string;
}

export async function logActivityAction(data: ActivityLogInput) {
    try {
        await db.activityHistory.create({
            data: {
                userId: data.userId,
                locationId: data.locationId,
                activityType: data.activityType,
                module: data.module,
                entityType: data.entityType,
                entityId: data.entityId || null,
                entityName: data.entityName,
                description: data.description,
                metadata: data.metadata || null,
                profileId: data.profileId || null,
                profileName: data.profileName || null
            }
        });

        // revalidatePath('/history'); // Typically history page might need refresh
        return { success: true };
    } catch (error: any) {
        console.error('Error logging activity:', error);
        return { success: false, error: error.message };
    }
}

export interface ActivityFilters {
    activityType?: string;
    module?: string;
    search?: string;
    dateFrom?: string;
    dateTo?: string;
}

export async function getActivityHistoryAction(
    locationId: string,
    userId: string,
    page: number = 1,
    pageSize: number = 20,
    filters?: ActivityFilters
) {
    try {
        // Ensure inputs are numbers and have sane defaults
        const actualPage = Math.max(1, Number(page) || 1);
        const actualPageSize = Math.max(1, Number(pageSize) || 20);
        const skip = (actualPage - 1) * actualPageSize;

        const where: any = {
            locationId
        };

        // Only filter by userId if it's provided and not a special 'ALL' string
        if (userId && userId !== 'ALL') {
            where.userId = userId;
        }

        if (filters) {
            if (filters.activityType && filters.activityType !== 'ALL') {
                where.activityType = filters.activityType;
            }
            if (filters.module && filters.module !== 'ALL') {
                where.module = filters.module;
            }
            if (filters.search) {
                where.OR = [
                    { entityName: { contains: filters.search, mode: 'insensitive' } },
                    { description: { contains: filters.search, mode: 'insensitive' } }
                ];
            }
            if (filters.dateFrom || filters.dateTo) {
                where.createdAt = {};
                if (filters.dateFrom) {
                    where.createdAt.gte = new Date(filters.dateFrom);
                }
                if (filters.dateTo) {
                    const toDate = new Date(filters.dateTo);
                    toDate.setHours(23, 59, 59, 999);
                    where.createdAt.lte = toDate;
                }
            }
        }

        const [activities, count] = await Promise.all([
            db.activityHistory.findMany({
                where,
                skip,
                take: actualPageSize,
                orderBy: {
                    createdAt: 'desc'
                }
            }),
            db.activityHistory.count({ where })
        ]);

        return {
            success: true,
            data: {
                activities: activities.map((a: any) => ({
                    ...a,
                    created_at: a.createdAt.toISOString(), // Map back to shape expected by hook
                    activity_type: a.activityType,
                    location_id: a.locationId,
                    user_id: a.userId,
                    entity_type: a.entityType,
                    entity_id: a.entityId,
                    entity_name: a.entityName,
                    profile_id: a.profileId,
                    profile_name: a.profileName
                })),
                count
            }
        };
    } catch (error: any) {
        console.error('Error fetching activity history:', error);
        return { success: false, error: error.message };
    }
}

export async function getActivityHistoryByTypeAction(locationId: string, module: string, activityType: string) {
    try {
        const records = await db.activityHistory.findMany({
            where: { locationId, module: module as any, activityType: activityType as any },
            orderBy: { createdAt: 'desc' }
        });
        return {
            success: true,
            data: records.map((a: any) => ({
                ...a,
                createdAt: a.createdAt.toISOString(),
                profileName: a.profileName
            }))
        };
    } catch (error: any) {
        console.error('Error fetching activity history by type:', error);
        return { success: false, error: error.message, data: [] };
    }
}
