'use server';

import { db as prisma } from '../../../prisma/db';
import { auth } from '@/auth';
import { differenceInDays } from 'date-fns';

export async function verifyPlatformAdmin(params: any) {
    try {
        const { p_username, p_password } = params;
        
        // This is a special internal admin check.
        // In a real app, you'd check against a specific superadmin table or a hardcoded config.
        // For now, let's check if a user with superadmin role exists with these credentials.
        // Or if it's the specific admin user.
        
        const user = await prisma.user.findFirst({
            where: {
                email: p_username,
                role: {
                    name: 'superadmin'
                }
            }
        });

        if (!user || !user.password) return { success: true, data: false };

        // We should use bcrypt compare here
        const isPasswordValid = await import('bcryptjs').then(b => b.compare(p_password, user.password!));
        
        return { success: true, data: isPasswordValid };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function getPlatformUserSummary() {
    const session = await auth();
    if (!session || (session.user as any).role !== 'superadmin' && (session.user as any).role !== 'Admin') {
        throw new Error('Unauthorized');
    }

    const now = new Date();

    try {
        const users = await prisma.user.findMany({
            where: {
                role: {
                    name: {
                        in: ['admin', 'agency', 'manager']
                    }
                }
            },
            include: {
                agency: {
                    include: {
                        package: true,
                        branches: {
                            include: {
                                settings: true
                            }
                        }
                    }
                },
                role: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const summary = users.map(user => {
            const agency = user.agency;
            const branches = agency?.branches || [];
            
            const locations = branches.map(branch => {
                const settings = branch.settings;
                const daysRemaining = agency?.subscriptionExpiry 
                    ? differenceInDays(new Date(agency.subscriptionExpiry), now) 
                    : agency?.trialEndDate 
                        ? differenceInDays(new Date(agency.trialEndDate), now)
                        : 0;

                return {
                    id: branch.id,
                    onboarding_id: null,
                    name: branch.name,
                    address: settings?.address || branch.location,
                    completed: !(settings?.needsOnboarding ?? true),
                    business_email: settings?.email || branch.email || '',
                    business_phone: settings?.phone || branch.phone || '',
                    billing_amount: Number(agency?.package?.monthlyPrice || 0),
                    billing_duration: agency?.package?.name || agency?.subscriptionStatus || 'trial',
                    days_remaining: daysRemaining,
                    next_billing_date: agency?.subscriptionExpiry?.toISOString() || agency?.trialEndDate?.toISOString() || '',
                    last_active_at: (user.lastSeen || branch.updatedAt || branch.createdAt).toISOString(),
                    created_at: branch.createdAt.toISOString()
                };
            });

            const primaryBranch = branches.find(b => b.type === 'MAIN') || branches[0];
            const primarySettings = primaryBranch?.settings;
            
            const daysRemaining = agency?.subscriptionExpiry 
                ? differenceInDays(new Date(agency.subscriptionExpiry), now) 
                : agency?.trialEndDate 
                    ? differenceInDays(new Date(agency.trialEndDate), now)
                    : 0;

            let locationLimit = (user.user_metadata as any)?.location_limit || 1;
            if (agency?.package) {
                locationLimit = agency.package.unlimitedLocations ? 999 : (agency.package.maxLocations || 1);
            }

            const expiryDate = agency?.subscriptionExpiry || agency?.trialEndDate;
            const nextBillingDate = (expiryDate && new Date(expiryDate) > now) 
                ? expiryDate.toISOString() 
                : '';

            return {
                user_id: user.id,
                email: user.email,
                business_name: agency?.name || 'N/A',
                business_phone: primarySettings?.phone || user.phone || '',
                location_count: branches.length,
                locations: locations,
                is_frozen: user.status === 'SUSPENDED',
                created_at: user.createdAt.toISOString(),
                location_limit: locationLimit,
                billing_amount: Number(agency?.package?.monthlyPrice || 0),
                billing_duration: agency?.package?.name || agency?.subscriptionStatus || 'trial',
                days_remaining: daysRemaining,
                next_billing_date: nextBillingDate
            };
        });

        return { success: true, data: summary };
    } catch (error: any) {
        console.error('Error fetching platform user summary:', error);
        return { success: false, error: error.message };
    }
}

export async function toggleUserFreeze(userId: string, isFrozen: boolean) {
    const session = await auth();
    if (!session || (session.user as any).role !== 'superadmin' && (session.user as any).role !== 'Admin') {
        throw new Error('Unauthorized');
    }

    try {
        await prisma.user.update({
            where: { id: userId },
            data: {
                status: isFrozen ? 'SUSPENDED' : 'ACTIVE'
            }
        });
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function getPlatformUserDetail(userId: string) {
    const session = await auth();
    if (!session || (session.user as any).role !== 'superadmin' && (session.user as any).role !== 'Admin') {
        throw new Error('Unauthorized');
    }

    const now = new Date();

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                agency: {
                    include: {
                        package: true,
                        branches: {
                            include: {
                                settings: true
                            }
                        }
                    }
                },
                role: true
            }
        });

        if (!user) return { success: false, error: 'User not found' };

        const agency = user.agency;
        const branches = agency?.branches || [];
        
        const locations = branches.map(branch => {
            const settings = branch.settings;
            const daysRemaining = agency?.subscriptionExpiry 
                ? differenceInDays(new Date(agency.subscriptionExpiry), now) 
                : agency?.trialEndDate 
                    ? differenceInDays(new Date(agency.trialEndDate), now)
                    : 0;

            return {
                id: branch.id,
                onboarding_id: null,
                name: branch.name,
                address: settings?.address || branch.location,
                is_frozen: user.status === 'SUSPENDED',
                completed: !(settings?.needsOnboarding ?? true),
                business_email: settings?.email || branch.email || '',
                business_phone: settings?.phone || branch.phone || '',
                billing_amount: Number(agency?.package?.monthlyPrice || 0),
                billing_duration: agency?.package?.name || agency?.subscriptionStatus || 'trial',
                days_remaining: daysRemaining,
                next_billing_date: agency?.subscriptionExpiry?.toISOString() || agency?.trialEndDate?.toISOString() || '',
                last_active_at: (user.lastSeen || branch.updatedAt || branch.createdAt).toISOString(),
                created_at: branch.createdAt.toISOString()
            };
        });

        const primaryBranch = branches.find(b => b.type === 'MAIN') || branches[0];
        const primarySettings = primaryBranch?.settings;
        
        const daysRemaining = agency?.subscriptionExpiry 
            ? differenceInDays(new Date(agency.subscriptionExpiry), now) 
            : agency?.trialEndDate 
                ? differenceInDays(new Date(agency.trialEndDate), now)
                : 0;

        let locationLimit = (user.user_metadata as any)?.location_limit || 1;
        if (agency?.package) {
            locationLimit = agency.package.unlimitedLocations ? 999 : (agency.package.maxLocations || 1);
        }

        const expiryDate = agency?.subscriptionExpiry || agency?.trialEndDate;
        const nextBillingDate = (expiryDate && new Date(expiryDate) > now) 
            ? expiryDate.toISOString() 
            : '';

        const data = {
            user_id: user.id,
            email: user.email,
            business_name: agency?.name || 'N/A',
            location_count: branches.length,
            locations: locations,
            is_frozen: user.status === 'SUSPENDED',
            location_limit: locationLimit,
            billing_amount: Number(agency?.package?.monthlyPrice || 0),
            billing_duration: agency?.package?.name || agency?.subscriptionStatus || 'trial',
            days_remaining: daysRemaining,
            next_billing_date: nextBillingDate,
            created_at: user.createdAt.toISOString()
        };

        return { success: true, data };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function getPlatformOnboardingData() {
    const session = await auth();
    if (!session || (session.user as any).role !== 'superadmin' && (session.user as any).role !== 'Admin') {
        throw new Error('Unauthorized');
    }

    const now = new Date();

    try {
        const branches = await prisma.branch.findMany({
            include: {
                settings: true,
                agency: {
                    include: {
                        package: true
                    }
                }
            }
        });

        const data = branches.map(branch => {
            const expiryDate = branch.agency?.subscriptionExpiry || branch.agency?.trialEndDate;
            const nextBillingDate = (expiryDate && new Date(expiryDate) > now) 
                ? expiryDate.toISOString() 
                : '';

            return {
                id: branch.id, // Not exactly onboarding ID but maps to it
                location_id: branch.id,
                business_name: branch.settings?.businessName || branch.name,
                business_email: branch.settings?.email || branch.email || '',
                business_phone: branch.settings?.phone || branch.phone || '',
                business_address: branch.settings?.address || branch.location,
                nature_of_business: branch.settings?.metadata ? (branch.settings.metadata as any).nature_of_business : '',
                business_size: branch.settings?.metadata ? (branch.settings.metadata as any).business_size : '',
                billing_duration: branch.agency?.package?.name || branch.agency?.subscriptionStatus || 'trial',
                billing_amount: Number(branch.agency?.package?.monthlyPrice || 0),
                days_remaining: expiryDate 
                    ? Math.max(0, differenceInDays(new Date(expiryDate), now)) 
                    : 0,
                next_billing_date: nextBillingDate,
                completed: !(branch.settings?.needsOnboarding ?? true),
                created_at: branch.createdAt.toISOString(),
                user_id: branch.adminId
            };
        });

        return { success: true, data };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function deletePlatformUserAccount(userId: string) {
    const session = await auth();
    if (!session || (session.user as any).role !== 'superadmin' && (session.user as any).role !== 'Admin') {
        throw new Error('Unauthorized');
    }

    try {
        await prisma.user.delete({
            where: { id: userId }
        });
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

export async function updatePlatformOnboardingData(params: any) {
    const session = await auth();
    if (!session || (session.user as any).role !== 'superadmin' && (session.user as any).role !== 'Admin') {
        throw new Error('Unauthorized');
    }

    try {
        const { 
            p_location_id, 
            p_user_id, 
            p_business_name, 
            p_business_email, 
            p_business_phone, 
            p_business_address, 
            p_nature_of_business, 
            p_business_size, 
            p_billing_duration, 
            p_next_billing_date, 
            p_completed 
        } = params;

        // 1. Update Branch Settings (The commercial identity of the specific branch)
        if (p_location_id) {
            await prisma.branchSettings.upsert({
                where: { branchId: p_location_id },
                create: {
                    branchId: p_location_id,
                    businessName: p_business_name,
                    email: p_business_email,
                    phone: p_business_phone,
                    address: p_business_address,
                    needsOnboarding: !p_completed,
                    metadata: {
                        nature_of_business: p_nature_of_business,
                        business_size: p_business_size
                    }
                },
                update: {
                    businessName: p_business_name,
                    email: p_business_email,
                    phone: p_business_phone,
                    address: p_business_address,
                    needsOnboarding: p_completed === null ? undefined : !p_completed,
                    metadata: {
                        nature_of_business: p_nature_of_business,
                        business_size: p_business_size
                    }
                }
            });
        }

        // 2. Update Agency (The billing and subscription container)
        if (p_user_id) {
            const user = await prisma.user.findUnique({
                where: { id: p_user_id },
                select: { agencyId: true }
            });

            if (user?.agencyId) {
                // Map frontend status names back to backend enums if necessary
                let validStatus = p_billing_duration;
                const statusOptions = ['trial', 'active', 'expired', 'blocked'];
                if (!statusOptions.includes(validStatus)) {
                    validStatus = undefined; // Don't overwrite if it's a plan name like "Starter"
                }

                await prisma.agency.update({
                    where: { id: user.agencyId },
                    data: {
                        name: p_business_name || undefined,
                        subscriptionStatus: validStatus,
                        subscriptionExpiry: p_next_billing_date ? new Date(p_next_billing_date) : undefined
                    }
                });
            }
        }

        return { success: true };
    } catch (error: any) {
        console.error('Error updating platform onboarding data:', error);
        return { success: false, error: error.message };
    }
}

export async function getSystemStatsAction() {
    const session = await auth();
    if (!session || (session.user as any).role !== 'superadmin' && (session.user as any).role !== 'Admin') {
        throw new Error('Unauthorized');
    }

    try {
        const [userCount, branchCount, frozenCount] = await Promise.all([
            // Managed users only
            prisma.user.count({
                where: {
                    role: {
                        name: {
                            in: ['admin', 'agency', 'manager']
                        }
                    }
                }
            }),
            prisma.branch.count(),
            prisma.user.count({
                where: {
                    status: 'SUSPENDED',
                    role: {
                        name: {
                            in: ['admin', 'agency', 'manager']
                        }
                    }
                }
            })
        ]);

        return {
            success: true,
            data: {
                totalUsers: userCount,
                totalLocations: branchCount,
                totalFrozen: frozenCount
            }
        };
    } catch (error: any) {
        console.error('Error fetching system stats:', error);
        return { success: false, error: error.message };
    }
}

export async function updateUserAccountStatus(params: any) {
    const session = await auth();
    if (!session || (session.user as any).role !== 'superadmin' && (session.user as any).role !== 'Admin') {
        throw new Error('Unauthorized');
    }

    try {
        const { p_user_id, p_is_frozen, p_location_limit } = params;

        // Fetch current metadata to merge
        const user = await prisma.user.findUnique({
            where: { id: p_user_id },
            select: { user_metadata: true }
        });

        const currentMetadata = (user?.user_metadata as any) || {};

        await prisma.user.update({
            where: { id: p_user_id },
            data: {
                status: p_is_frozen ? 'SUSPENDED' : 'ACTIVE',
                user_metadata: {
                    ...currentMetadata,
                    location_limit: p_location_limit
                }
            }
        });

        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
