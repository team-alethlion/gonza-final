import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/../prisma/db';
import { UserStatus } from '@prisma/client';

/**
 * Orphaned Account Cleanup Cron Job
 * 
 * Logic:
 * 1. Find Agencies where subscriptionStatus is 'expired' and (subscriptionExpiry OR trialEndDate) is older than 90 days.
 * 2. Delete those agencies. (Cascading deletes handle everything else).
 * 3. Find Users who are INACTIVE and lastSeen is older than 90 days.
 * 4. Delete those users.
 */
export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', { status: 401 });
    }

    try {
        const now = new Date();
        const ninetyDaysAgo = new Date(now);
        ninetyDaysAgo.setDate(now.getDate() - 90);

        const result = await db.$transaction(async (tx) => {
            // 1. Delete expired agencies older than 90 days
            const expiredAgencies = await tx.agency.findMany({
                where: {
                    subscriptionStatus: 'expired',
                    OR: [
                        { subscriptionExpiry: { lt: ninetyDaysAgo } },
                        { trialEndDate: { lt: ninetyDaysAgo } }
                    ]
                },
                select: { id: true, name: true }
            });

            const agencyIds = expiredAgencies.map(a => a.id);
            let deletedAgenciesCount = 0;
            if (agencyIds.length > 0) {
                const deletion = await tx.agency.deleteMany({
                    where: { id: { in: agencyIds } }
                });
                deletedAgenciesCount = deletion.count;
            }

            // 2. Delete inactive users older than 90 days (who might not be tied to an agency or whose agency is still active but they are not)
            const staleUsers = await tx.user.deleteMany({
                where: {
                    status: UserStatus.INACTIVE,
                    lastSeen: {
                        lt: ninetyDaysAgo
                    }
                }
            });

            return {
                deletedAgencies: deletedAgenciesCount,
                agencyNames: expiredAgencies.map(a => a.name),
                deletedUsers: staleUsers.count
            };
        });

        console.log(`[Cron: orphaned-cleanup] Deleted ${result.deletedAgencies} agencies and ${result.deletedUsers} users.`);

        return NextResponse.json({
            success: true,
            ...result
        });

    } catch (error: any) {
        console.error('[Cron: orphaned-cleanup] Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
