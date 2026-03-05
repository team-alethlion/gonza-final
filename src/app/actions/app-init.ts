/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { auth } from '@/auth';
import { getBusinessLocationsAction } from './business';
import { getProfilesAction } from './profiles';
import { getAccountStatusAction } from './business-settings';

export async function getInitialAppDataAction() {
    console.log('[AppInit] Fetching initial data...');
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
                    currentBranchId: null
                } 
            };
        }

        const userId = session.user.id;
        if (!userId) {
             return { success: false, error: 'User ID missing' };
        }
        const branchId = (session.user as any).branchId;

        // Fetch everything in parallel
        const [locations, accountStatus] = await Promise.all([
            getBusinessLocationsAction(userId),
            getAccountStatusAction(userId)
        ]);

        let profiles: any[] = [];
        let targetBranchId = branchId;

        // If no branchId in session, find default from locations
        if (!targetBranchId && locations && locations.length > 0) {
            const defaultLoc = (locations as any[]).find(l => l.is_default) || locations[0];
            targetBranchId = defaultLoc.id;
        }

        if (targetBranchId) {
            profiles = await getProfilesAction(targetBranchId);
        }

        const end = Date.now();
        console.log(`[AppInit] Data fetched in ${end - start}ms`);

        return {
            success: true,
            data: {
                session: session,
                locations: locations || [],
                accountStatus: accountStatus,
                profiles: profiles || [],
                currentBranchId: targetBranchId
            }
        };
    } catch (error: any) {
        console.error('[AppInit] Error:', error);
        return { success: false, error: error.message };
    }
}
