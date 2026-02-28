import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/../prisma/db';
import { UserStatus } from '@prisma/client';

/**
 * Subscription & Trial Monitor Cron Job
 * 
 * Logic:
 * 1. Find Expired Trials: subscriptionStatus == 'trial' AND trialEndDate < now
 * 2. Find Expired Subscriptions: subscriptionStatus == 'active' AND subscriptionExpiry < now
 * 3. Update Agency status to 'expired'
 * 4. Update all associated users to 'EXPIRED'
 * 
 * Scheduled to run daily via vercel.json
 */
export async function GET(req: NextRequest) {
    // 1. Security Check: Verify Cron Secret
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', { status: 401 });
    }

    try {
        const now = new Date();

        // 2. Perform transitions in a transaction for safety
        const result = await db.$transaction(async (tx) => {
            // A. Find agencies whose trials have ended
            const expiredTrials = await tx.agency.findMany({
                where: {
                    subscriptionStatus: 'trial',
                    trialEndDate: {
                        lt: now
                    }
                },
                select: { id: true, name: true }
            });

            // B. Find agencies whose active subscriptions have ended
            const expiredSubscriptions = await tx.agency.findMany({
                where: {
                    subscriptionStatus: 'active',
                    subscriptionExpiry: {
                        lt: now
                    }
                },
                select: { id: true, name: true }
            });

            const allExpiredAgencies = [...expiredTrials, ...expiredSubscriptions];
            const expiredAgencyIds = allExpiredAgencies.map(a => a.id);

            if (expiredAgencyIds.length === 0) {
                return { processed: 0, message: "No expired accounts found today." };
            }

            // C. Update Agency statuses
            await tx.agency.updateMany({
                where: {
                    id: { in: expiredAgencyIds }
                },
                data: {
                    subscriptionStatus: 'expired'
                }
            });

            // D. Update User statuses for all users in those agencies
            await tx.user.updateMany({
                where: {
                    agencyId: { in: expiredAgencyIds }
                },
                data: {
                    status: UserStatus.EXPIRED
                }
            });

            // E. Create System Notifications for the transition (Optional/Audit)
            for (const agency of allExpiredAgencies) {
                await tx.systemNotification.create({
                    data: {
                        title: "Subscription Expired",
                        message: `The subscription/trial for ${agency.name} has expired. Access has been restricted.`,
                        type: "SECURITY",
                        priority: "HIGH",
                        agencyId: agency.id
                    }
                });
            }

            return { 
                processed: expiredAgencyIds.length, 
                agencies: allExpiredAgencies.map(a => a.name) 
            };
        });

        console.log(`[Cron: subscription-monitor] Processed ${result.processed} expired agencies.`);
        
        return NextResponse.json({
            success: true,
            ...result
        });

    } catch (error: any) {
        console.error('[Cron: subscription-monitor] Error:', error);
        return NextResponse.json({ 
            success: false, 
            error: error.message 
        }, { status: 500 });
    }
}
