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

        const data = {
            businessName: updateData.business_name,
            address: updateData.business_address,
            phone: updateData.business_phone,
            email: updateData.business_email,
            logo: updateData.business_logo,
            currency: updateData.currency,
            signatureImage: updateData.signature,
            metadata: updateData.metadata
        };

        const upserted = await db.branchSettings.upsert({
            where: { branchId: branchId },
            update: data,
            create: {
                branchId: branchId,
                ...data
            }
        });

        return {
            success: true,
            data: {
                id: upserted.id,
                business_name: upserted.businessName,
                business_address: upserted.address,
                business_phone: upserted.phone,
                business_email: upserted.email,
                business_logo: upserted.logo,
                currency: upserted.currency,
                signature: upserted.signatureImage,
                metadata: upserted.metadata
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
                isActive: true,
                createdAt: true,
                agency: {
                    select: {
                        subscriptionStatus: true,
                        subscriptionExpiry: true,
                        package: true
                    }
                }
            }
        });

        if (!user) return null;

        const isFrozen = user.status === 'suspended' || user.status === 'expired' || !user.isActive;
        const agency = user.agency;
        const now = new Date();

        let daysRemaining = 30;
        let billingAmount = 50000;
        let nextBillingDate = '';

        if (agency && agency.subscriptionExpiry) {
            daysRemaining = Math.max(0, Math.ceil((agency.subscriptionExpiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
            nextBillingDate = agency.subscriptionExpiry.toISOString();
        }

        if (agency && agency.package) {
            billingAmount = agency.package.monthlyPrice || 50000;
        }

        return {
            is_frozen: isFrozen,
            location_limit: 1, // Traditional limit or from subscription
            billing_amount: billingAmount,
            billing_duration: 'Monthly',
            days_remaining: daysRemaining,
            next_billing_date: nextBillingDate
        };
    } catch (error) {
        console.error('Error fetching account status:', error);
        return { is_frozen: false, location_limit: 1, billing_amount: 50000, billing_duration: 'Monthly', days_remaining: 30, next_billing_date: '' };
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
