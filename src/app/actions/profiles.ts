/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';
import { checkUserQuota } from '@/lib/quota-check';
import { verifyBranchAccess } from '@/lib/auth-guard';

// Profiles Server Actions (Using the User model from Prisma Auth map)
export async function getProfilesAction(branchId: string) {
    try {
        await verifyBranchAccess(branchId);

        const branch = await db.branch.findUnique({
            where: { id: branchId },
            select: { adminId: true, agencyId: true }
        });

        const users = await db.user.findMany({
            where: {
                OR: [
                    { branchId: branchId },
                    { id: branch?.adminId },
                ]
            },
            include: {
                role: {
                    include: {
                        permissions: true
                    }
                }
            },
            orderBy: {
                createdAt: 'asc'
            }
        });

        // Map Prisma User model to the shape expected by ProfileContext
        return users.map((u: any) => {
            let roleName = u.role?.name || 'staff';
            
            if (roleName.toLowerCase() === 'admin') {
                roleName = 'Admin';
            } else if (roleName.toLowerCase() === 'superadmin') {
                roleName = 'superadmin';
            } else {
                // Capitalize other roles
                roleName = roleName.charAt(0).toUpperCase() + roleName.slice(1).toLowerCase();
            }

            return {
                id: u.id,
                business_location_id: u.branchId,
                profile_name: u.name,
                email: u.email,
                phone_number: undefined,
                role: roleName,
                pin: u.pin || '0000',
                role_id: u.roleId,
                business_role: u.role ? {
                    id: u.role.id,
                    name: roleName,
                    permissions: u.role.permissions.reduce((acc: any, p: any) => {
                        const [module, action] = p.name.split(':');
                        if (!acc[module]) acc[module] = [];
                        acc[module].push(action);
                        return acc;
                    }, {})
                } : undefined,
                is_active: u.status === 'ACTIVE',
                sms_credits: u.credits,
                created_by: u.agencyId || u.id,
                created_at: u.createdAt.toISOString(),
                updated_at: u.updatedAt.toISOString(),
            };
        });
    } catch (error) {
        console.error('Error fetching profiles:', error);
        return [];
    }
}

export async function createProfileAction(branchId: string, profileData: any) {
    try {
        const sessionUser = await verifyBranchAccess(branchId);
        const userAgencyId = (sessionUser as any).agencyId;
        
        if (userAgencyId) { 
            await checkUserQuota(userAgencyId); 
        }
        // We'll need a default role if not provided
        let roleId = profileData.role_id;

        if (!roleId) {
            const defaultRole = await db.role.findFirst({
                where: { 
                    name: profileData.role || 'Staff',
                    OR: [
                        { branchId: branchId },
                        { branchId: null }
                    ]
                }
            });
            roleId = defaultRole?.id;
        }

        const newUser = await db.user.create({
            data: {
                email: profileData.email,
                name: profileData.profile_name,
                pin: profileData.pin,
                status: profileData.is_active !== undefined ? (profileData.is_active ? 'ACTIVE' : 'INACTIVE') : 'ACTIVE',
                roleId: roleId,
                branchId: branchId,
                agencyId: userAgencyId
            }
        });

        revalidatePath('/profiles');
        return { success: true, data: newUser };
    } catch (error: any) {
        console.error('Error creating profile:', error);
        return { success: false, error: error.message };
    }
}

export async function updateProfileAction(userId: string, branchId: string, updateData: any) {
    try {
        await verifyBranchAccess(branchId);

        const data: any = {};
        if (updateData.profile_name !== undefined) data.name = updateData.profile_name;
        if (updateData.email !== undefined) data.email = updateData.email;
        if (updateData.pin !== undefined) data.pin = updateData.pin;
        if (updateData.is_active !== undefined) data.status = updateData.is_active ? 'ACTIVE' : 'INACTIVE';
        if (updateData.role_id !== undefined) data.roleId = updateData.role_id;

        const updatedUser = await db.user.update({
            where: { id: userId, branchId: branchId },
            data: data
        });

        revalidatePath('/profiles');
        return { success: true, data: updatedUser };
    } catch (error: any) {
        console.error('Error updating profile:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteProfileAction(userId: string, branchId: string) {
    try {
        await verifyBranchAccess(branchId);
        await db.user.delete({
            where: { id: userId, branchId: branchId }
        });

        revalidatePath('/profiles');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting profile:', error);
        return { success: false, error: error.message };
    }
}

export async function getRolesAction(branchId: string) {
    try {
        await verifyBranchAccess(branchId);
        const roles = await db.role.findMany({
            where: {
                OR: [
                    { branchId: branchId },
                    { branchId: null } // System default roles
                ]
            },
            include: {
                permissions: true
            }
        });

        return roles.map((r: any) => ({
            id: r.id,
            name: r.name,
            description: r.description,
            business_location_id: r.branchId,
            permissions: r.permissions.reduce((acc: any, p: any) => {
                const [module, action] = p.name.split(':');
                if (!acc[module]) acc[module] = [];
                acc[module].push(action);
                return acc;
            }, {})
        }));
    } catch (error: any) {
        console.error("Error getRolesAction", error);
        return [];
    }
}

export async function upsertRoleAction(branchId: string, roleData: any) {
    try {
        await verifyBranchAccess(branchId);
        const flatPermissions: string[] = [];
        if (roleData.permissions) {
            Object.keys(roleData.permissions).forEach(module => {
                roleData.permissions[module].forEach((action: string) => {
                    flatPermissions.push(`${module}:${action}`);
                });
            });
        }

        const permissionRecords = await Promise.all(
            flatPermissions.map(async (name) => {
                let perm = await db.permission.findUnique({ where: { name } });
                if (!perm) {
                    perm = await db.permission.create({ data: { name } });
                }
                return perm;
            })
        );

        let upserted;

        if (roleData.id) {
            // Update
            upserted = await db.role.update({
                where: { id: roleData.id, branchId: branchId },
                data: {
                    name: roleData.name,
                    description: roleData.description,
                    permissions: {
                        set: permissionRecords.map(p => ({ id: p.id }))
                    }
                }
            });
        } else {
            // Create
            upserted = await db.role.create({
                data: {
                    name: roleData.name,
                    description: roleData.description,
                    branchId: branchId,
                    permissions: {
                        connect: permissionRecords.map(p => ({ id: p.id }))
                    }
                }
            });
        }

        revalidatePath('/profiles');
        return { success: true, data: upserted };
    } catch (error: any) {
        console.error('Error upserting role:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteRoleAction(roleId: string, branchId: string) {
    try {
        await verifyBranchAccess(branchId);
        await db.role.delete({
            where: { id: roleId, branchId: branchId }
        });
        revalidatePath('/profiles');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting role:', error);
        return { success: false, error: error.message };
    }
}
