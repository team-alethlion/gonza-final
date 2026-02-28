/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';

/**
 * Updates the lastSeen timestamp for a user.
 * Throttled by the client to once every 5 minutes.
 */
export async function updateLastSeenAction(userId: string) {
    try {
        if (!userId) return { success: false, error: "User ID is required" };

        await db.user.update({
            where: { id: userId },
            data: { lastSeen: new Date() }
        });

        return { success: true };
    } catch (error: any) {
        console.error('Error updating lastSeen:', error);
        return { success: false, error: error.message };
    }
}
