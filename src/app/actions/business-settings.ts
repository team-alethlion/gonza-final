/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';

export async function getBusinessSettingsAction(branchId: string) {
    try {
        const settings = await db.branchSettings.findUnique({
            where: { branchId }
        });

        if (!settings) {
            return null;
        }

        return {
            id: settings.id,
            business_name: settings.businessName,
            business_address: settings.address,
            business_phone: settings.phone,
            business_email: settings.email,
            business_logo: settings.logo,
            currency: settings.currency,
            signature: settings.signatureImage,
            metadata: settings.metadata || {}
        };
    } catch (error) {
        console.error('Error fetching business settings:', error);
        return null;
    }
}

export async function upsertBusinessSettingsAction(branchId: string, userId: string, updateData: any) {
    try {
        // Validate user access to branch
        const branch = await db.branch.findFirst({
            where: {
                id: branchId,
                OR: [
                    { adminId: userId },
                    { users: { some: { id: userId } } }
                ]
            }
        });

        if (!branch) {
            return { success: false, error: 'Unauthorized to update branch settings' };
        }

        const result = await db.$transaction(async (tx) => {
            const data = {
                businessName: updateData.business_name,
                address: updateData.business_address,
                phone: updateData.business_phone,
                email: updateData.business_email,
                logo: updateData.business_logo,
                currency: updateData.currency,
                signatureImage: updateData.signature,
                metadata: updateData.metadata,
                needsOnboarding: updateData.completed === true ? false : undefined
            };

            const upserted = await tx.branchSettings.upsert({
                where: { branchId: branchId },
                update: data,
                create: {
                    branchId: branchId,
                    ...data
                }
            });

            // Handle Package selection if provided
            if (updateData.packageId) {
                const user = await tx.user.findUnique({
                    where: { id: userId },
                    select: { agencyId: true }
                });

                if (user?.agencyId) {
                    await tx.agency.update({
                        where: { id: user.agencyId },
                        data: {
                            packageId: updateData.packageId,
                            subscriptionStatus: updateData.subscriptionStatus || 'trial',
                            subscriptionExpiry: updateData.subscriptionExpiry ? new Date(updateData.subscriptionExpiry) : undefined,
                            trialEndDate: updateData.trialEndDate ? new Date(updateData.trialEndDate) : undefined
                        }
                    });
                }
            }

            return upserted;
        });

        return {
            success: true,
            data: {
                id: result.id,
                business_name: result.businessName,
                business_address: result.address,
                business_phone: result.phone,
                business_email: result.email,
                business_logo: result.logo,
                currency: result.currency,
                signature: result.signatureImage,
                metadata: result.metadata
            }
        };
    } catch (error: any) {
        console.error('Error upserting business settings:', error);
        return { success: false, error: error.message || 'Failed to update settings' };
    }
}

export async function getAccountStatusAction(userId: string) {
    try {
        const user = await db.user.findUnique({
            where: { id: userId },
            select: {
                status: true,
                createdAt: true,
                agencyId: true,
                agency: {
                    select: {
                        id: true,
                        subscriptionStatus: true,
                        subscriptionExpiry: true,
                        trialEndDate: true,
                        packageId: true,
                        package: true
                    }
                }
            }
        });

        if (!user) return null;

        const agency = user.agency;
        const now = new Date();

        // 1. Calculate isFrozen based on User status
        const isFrozen = user.status === 'SUSPENDED' || user.status === 'EXPIRED' || user.status === 'INACTIVE';

        // 2. Calculate days remaining
        let daysRemaining = 0;
        let nextBillingDate = '';

        if (agency) {
            const expiryDate = agency.subscriptionExpiry || agency.trialEndDate;
            if (expiryDate) {
                daysRemaining = Math.max(0, Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
                nextBillingDate = expiryDate.toISOString();
            }
        }

        // 3. Billing Info
        let billingAmount = 50000;
        if (agency && agency.package) {
            billingAmount = Number(agency.package.monthlyPrice) || 50000;
        }

        return {
            is_frozen: isFrozen,
            location_limit: 1, // Traditional default
            billing_amount: billingAmount,
            billing_duration: 'Monthly',
            days_remaining: daysRemaining,
            next_billing_date: nextBillingDate,
            package_id: agency?.packageId || null
        };
    } catch (error) {
        console.error('Error fetching account status:', error);
        return { 
            is_frozen: false, 
            location_limit: 1, 
            billing_amount: 50000, 
            billing_duration: 'Monthly', 
            days_remaining: 30, 
            next_billing_date: '', 
            package_id: null 
        };
    }
}

export async function getOnboardingStatusAction(locationId: string) {
    try {
        const settings = await db.branchSettings.findUnique({
            where: { branchId: locationId }
        });

        if (!settings) return null;

        return {
            id: settings.id,
            location_id: settings.branchId,
            business_name: settings.businessName,
            business_address: settings.address,
            business_phone: settings.phone,
            business_email: settings.email,
            business_logo: settings.logo,
            completed: !!settings.businessName && !!settings.phone, // Simplified completion check
            is_frozen: false // Should come from branch or user status
        };
    } catch (error) {
        console.error('Error fetching onboarding status:', error);
        return null;
    }
}
