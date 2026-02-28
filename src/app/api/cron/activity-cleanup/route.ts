import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/../prisma/db';
import { UserStatus } from '@prisma/client';

/**
 * Activity & Session Cleanup Cron Job
 * 
 * Logic:
 * 1. Cleanup Tokens: Delete all PasswordResetToken records where expires < now.
 * 2. Cleanup Notifications: Delete read notifications older than 30 days.
 * 3. Identify Stale Users: Flag users who haven't been "seen" (lastSeen) in over 60 days as INACTIVE.
 */
export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', { status: 401 });
    }

    try {
        const now = new Date();
        const thirtyDaysAgo = new Date(now);
        thirtyDaysAgo.setDate(now.getDate() - 30);

        const sixtyDaysAgo = new Date(now);
        sixtyDaysAgo.setDate(now.getDate() - 60);

        const result = await db.$transaction(async (tx) => {
            // 1. Delete expired password reset tokens
            const deletedTokens = await tx.passwordResetToken.deleteMany({
                where: {
                    expires: {
                        lt: now
                    }
                }
            });

            // 2. Delete old read notifications (housekeeping)
            const deletedNotifications = await tx.notification.deleteMany({
                where: {
                    read: true,
                    updatedAt: {
                        lt: thirtyDaysAgo
                    }
                }
            });

            // 3. Flag stale users as INACTIVE
            // Only update users who are currently ACTIVE or EXPIRED but haven't been seen in 60 days
            const staleUsers = await tx.user.updateMany({
                where: {
                    status: {
                        in: [UserStatus.ACTIVE, UserStatus.EXPIRED]
                    },
                    lastSeen: {
                        lt: sixtyDaysAgo
                    }
                },
                data: {
                    status: UserStatus.INACTIVE
                }
            });

            return {
                deletedTokens: deletedTokens.count,
                deletedNotifications: deletedNotifications.count,
                flaggedStaleUsers: staleUsers.count
            };
        });

        return NextResponse.json({
            success: true,
            ...result
        });

    } catch (error: any) {
        console.error('[Cron: activity-cleanup] Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
