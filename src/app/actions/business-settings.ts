/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';
import { verifyBranchAccess, verifyUserAccess } from '@/lib/auth-guard';

export async function getBusinessSettingsAction(branchId: string) {
    await verifyBranchAccess(branchId);
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
    await verifyBranchAccess(branchId);
    await verifyUserAccess(userId);
    try {
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

export async function completeInitialOnboardingAction(data: any) {
    const { userId } = data;
    if (!userId) throw new Error("User ID is required for onboarding.");
    
    await verifyUserAccess(userId);
    try {
        const { 
            agencyId: providedAgencyId, 
            branchId: providedBranchId,
            businessName, 
            businessAddress, 
            businessPhone, 
            businessEmail,
            businessLogo,
            userName,
            userPhone,
            userPin,
            packageId,
            subscriptionStatus,
            trialEndDate
        } = data;

        await db.$transaction(async (tx) => {
            // 0. Resolve User and Agency
            const userRecord = await tx.user.findUnique({
                where: { id: userId },
                select: { id: true, agencyId: true }
            });

            if (!userRecord) {
                throw new Error("User record not found.");
            }

            let targetAgencyId = providedAgencyId || userRecord.agencyId;

            // 0.1 If no agency exists, create one (Safety fallback)
            if (!targetAgencyId) {
                const crypto = await import('crypto');
                const uniqueId = crypto.randomBytes(3).toString('hex');
                const newAgency = await tx.agency.create({
                    data: {
                        name: businessName || `Agency ${uniqueId}`,
                        subscriptionStatus: subscriptionStatus || "trial",
                        hadTrialBefore: false,
                    }
                });
                targetAgencyId = newAgency.id;
            }

            // 0.2 Resolve Branch
            let targetBranchId = providedBranchId;
            if (!targetBranchId) {
                const branch = await tx.branch.findFirst({
                    where: { agencyId: targetAgencyId }
                });
                
                if (branch) {
                    targetBranchId = branch.id;
                } else {
                    // Create branch if missing
                    const newBranch = await tx.branch.create({
                        data: {
                            name: businessName || "Main Branch",
                            location: businessAddress || "Default Location",
                            agencyId: targetAgencyId,
                            adminId: userId
                        }
                    });
                    targetBranchId = newBranch.id;
                }
            }

            // 1. Update Agency
            await tx.agency.update({
                where: { id: targetAgencyId },
                data: {
                    name: businessName,
                    isOnboarded: true,
                    packageId: packageId || undefined,
                    subscriptionStatus: subscriptionStatus || undefined,
                    trialEndDate: subscriptionStatus === 'trial' ? (trialEndDate ? new Date(trialEndDate) : undefined) : undefined,
                    subscriptionExpiry: subscriptionStatus === 'active' ? (trialEndDate ? new Date(trialEndDate) : undefined) : undefined
                }
            });

            // 2. Update User
            await tx.user.update({
                where: { id: userId },
                data: {
                    name: userName,
                    phone: userPhone,
                    pin: userPin,
                    isOnboarded: true,
                    branchId: targetBranchId,
                    agencyId: targetAgencyId
                }
            });

            // 3. Update Branch Settings
            await tx.branchSettings.upsert({
                where: { branchId: targetBranchId },
                update: {
                    businessName,
                    address: businessAddress,
                    phone: businessPhone,
                    email: businessEmail,
                    logo: businessLogo,
                    needsOnboarding: false,
                    metadata: {
                        natureOfBusiness: data.natureOfBusiness,
                        businessSize: data.businessSize
                    }
                },
                create: {
                    branchId: targetBranchId,
                    businessName,
                    address: businessAddress,
                    phone: businessPhone,
                    email: businessEmail,
                    logo: businessLogo,
                    needsOnboarding: false,
                    metadata: {
                        natureOfBusiness: data.natureOfBusiness,
                        businessSize: data.businessSize
                    }
                }
            });

            // 4. Update the Branch name itself for consistency
            await tx.branch.update({
                where: { id: targetBranchId },
                data: { 
                    name: businessName,
                    location: businessAddress,
                    phone: businessPhone
                }
            });
        }, {
            timeout: 15000, // 15 seconds for robustness
            maxWait: 5000   // 5 seconds
        });

        revalidatePath('/');
        return { success: true };
    } catch (error: any) {
        console.error('Error completing initial onboarding:', error);
        return { success: false, error: error.message || 'Failed to complete onboarding' };
    }
}

export async function getAccountStatusAction(userId: string) {
    await verifyUserAccess(userId);
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
                const expiryDateObj = new Date(expiryDate);
                daysRemaining = Math.max(0, Math.ceil((expiryDateObj.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
                
                // Only set next billing date if it's in the future
                if (expiryDateObj > now) {
                    nextBillingDate = expiryDateObj.toISOString();
                }
            }
        }

        // 3. Billing & Limits Info
        let billingAmount = 50000;
        let locationLimit = 1;
        const isTrial = agency?.subscriptionStatus === 'trial';

        if (agency && agency.package) {
            billingAmount = Number(agency.package.monthlyPrice) || 50000;
            
            // If in trial, we strictly limit to 1 location regardless of the package
            if (isTrial) {
                locationLimit = 1;
            } else if (agency.package.unlimitedLocations) {
                locationLimit = 999;
            } else {
                locationLimit = agency.package.maxLocations || 1;
            }
        }

        return {
            is_frozen: isFrozen,
            location_limit: locationLimit,
            billing_amount: billingAmount,
            billing_duration: 'Monthly',
            days_remaining: daysRemaining,
            next_billing_date: nextBillingDate,
            package_id: agency?.packageId || null,
            subscription_status: agency?.subscriptionStatus || 'trial',
            is_trial: isTrial
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
    await verifyBranchAccess(locationId);
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

