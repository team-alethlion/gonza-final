import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/../prisma/db';

/**
 * Impending Expiry Notifier Cron Job
 * 
 * Logic:
 * 1. Calculate dates for 3 days from now and 1 day from now.
 * 2. Find Agencies whose trial or subscription ends on those dates.
 * 3. Create in-app Notifications for the admins of those agencies.
 */
export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', { status: 401 });
    }

    try {
        const now = new Date();
        const threeDaysOut = new Date(now);
        threeDaysOut.setDate(now.getDate() + 3);
        
        const oneDayOut = new Date(now);
        oneDayOut.setDate(now.getDate() + 1);

        // Helper to get start and end of a specific day
        const getDayRange = (date: Date) => {
            const start = new Date(date.setHours(0, 0, 0, 0));
            const end = new Date(date.setHours(23, 59, 59, 999));
            return { start, end };
        };

        const range3 = getDayRange(threeDaysOut);
        const range1 = getDayRange(oneDayOut);

        const agenciesToNotify = await db.agency.findMany({
            where: {
                OR: [
                    // Trial ending in 1 or 3 days
                    { trialEndDate: { gte: range3.start, lte: range3.end } },
                    { trialEndDate: { gte: range1.start, lte: range1.end } },
                    // Subscription ending in 1 or 3 days
                    { subscriptionExpiry: { gte: range3.start, lte: range3.end } },
                    { subscriptionExpiry: { gte: range1.start, lte: range1.end } }
                ],
                subscriptionStatus: {
                    in: ['trial', 'active']
                }
            },
            include: {
                users: {
                    where: {
                        role: {
                            name: {
                                equals: 'admin',
                                mode: 'insensitive'
                            }
                        }
                    }
                }
            }
        });

        if (agenciesToNotify.length === 0) {
            return NextResponse.json({ success: true, message: "No agencies requiring notification today." });
        }

        let notificationCount = 0;

        await db.$transaction(async (tx) => {
            for (const agency of agenciesToNotify) {
                const expiryDate = agency.subscriptionExpiry || agency.trialEndDate;
                if (!expiryDate) continue;

                const daysLeft = Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
                const type = agency.subscriptionExpiry ? 'Subscription' : 'Trial';

                // Create notification for each admin user in the agency
                for (const user of agency.users) {
                    await tx.notification.create({
                        data: {
                            title: `${type} Expiring Soon`,
                            message: `Your business ${type} will expire in ${daysLeft} day${daysLeft === 1 ? '' : 's'}. Please renew to avoid service interruption.`,
                            type: "ALERT",
                            priority: daysLeft === 1 ? "HIGH" : "MEDIUM",
                            userId: user.id,
                            agencyId: agency.id,
                            actionUrl: "/billing"
                        }
                    });
                    notificationCount++;
                }
            }
        });

        return NextResponse.json({
            success: true,
            processedAgencies: agenciesToNotify.length,
            notificationsCreated: notificationCount
        });

    } catch (error: any) {
        console.error('[Cron: expiry-notifier] Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
