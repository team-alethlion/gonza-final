/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { auth } from '@/auth';
import { getBusinessLocationsAction } from './business';
import { getProfilesAction } from './profiles';
import { getAccountStatusAction } from './business-settings';

import { getAnalyticsSummaryAction } from './analytics';
import { getBusinessSettingsAction } from './business-settings';

export async function getInitialAppDataAction() {
    const start = Date.now();
    
    try {
        const session = await auth();
        if (!session || !session.user) {
            return { 
                success: true, 
                data: {
                    session: null,
                    locations: [],
                    accountStatus: null,
                    profiles: [],
                    currentBranchId: null,
                    businessSettings: null,
                    analyticsSummary: null
                } 
            };
        }
const userId = session.user.id as string;
const branchId = (session.user as any).branchId;
const userRole = (session.user as any).role?.toLowerCase();
const userAgencyId = (session.user as any).agencyId;

console.log(`[PERF] AppInit starting for user ${userId} (${userRole})`);

// 1. Fetch Locations & Account Status in parallel
// We bypass the action wrappers to avoid redundant auth() calls inside them
const [locationsData, accountStatusData] = await Promise.all([
    db.branch.findMany({
        where: userRole === "admin" && userAgencyId ? { agencyId: userAgencyId } : {
            OR: [{ adminId: userId }, { users: { some: { id: userId } } }],
        },
        orderBy: [{ type: "asc" }, { createdAt: "asc" }],
    }),
    getAccountStatusAction(userId)
]);

        const locations = locationsData.map((b: any, index: number) => ({
            id: b.id,
            name: b.name,
            user_id: b.adminId,
            is_default: b.id === branchId || (index === 0 && !branchId),
            created_at: b.createdAt.toISOString(),
            updated_at: b.updatedAt.toISOString(),
            switch_password_hash: b.accessPassword,
        }));

        let targetBranchId = branchId;
        if (!targetBranchId && locations.length > 0) {
            targetBranchId = locations.find(l => l.is_default)?.id || locations[0].id;
        }

        // 2. Fetch Profiles, Settings, and Analytics only if we have a branch
        let profiles: any[] = [];
        let businessSettings = null;
        let analyticsSummary = null;

        if (targetBranchId) {
            // We can fetch these 3 in parallel too
            const [profilesData, settingsData, analyticsData] = await Promise.all([
                getProfilesAction(targetBranchId),
                getBusinessSettingsAction(targetBranchId),
                getAnalyticsSummaryAction(targetBranchId)
            ]);
            
            profiles = profilesData;
            businessSettings = settingsData;
            analyticsSummary = analyticsData.success ? analyticsData.data : null;
        }

        const end = Date.now();
        console.log(`[PERF] AppInit total took ${end - start}ms`);

        return {
            success: true,
            data: {
                session: session,
                locations: locations,
                accountStatus: accountStatusData,
                profiles: profiles,
                currentBranchId: targetBranchId,
                businessSettings,
                analyticsSummary
            }
        };
    } catch (error: any) {
        console.error('[AppInit] Error:', error);
        return { success: false, error: error.message };
    }
}
