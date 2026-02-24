'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';

// Profiles Server Actions (Using the User model from Prisma Auth map)
export async function getProfilesAction(branchId: string) {
    try {
        const users = await db.user.findMany({
            where: {
                branchId: branchId
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
        return users.map((u: any) => ({
            id: u.id,
            business_location_id: u.branchId,
            profile_name: u.name,
            email: u.email,
            phone_number: undefined,
            role: u.role?.name || 'staff',
            pin: u.pin || '0000',
            role_id: u.roleId,
            business_role: u.role ? {
                id: u.role.id,
                name: u.role.name,
                permissions: u.role.permissions.reduce((acc: any, p: any) => {
                    const [module, action] = p.name.split(':');
                    if (!acc[module]) acc[module] = [];
                    acc[module].push(action);
                    return acc;
                }, {})
            } : undefined,
            is_active: u.isActive,
            sms_credits: u.credits,
            created_by: u.agencyId || u.id,
            created_at: u.createdAt.toISOString(),
            updated_at: u.updatedAt.toISOString(),
        }));
    } catch (error) {
        console.error('Error fetching profiles:', error);
        return [];
    }
}

export async function createProfileAction(branchId: string, profileData: any) {
    try {
        // We'll need a default role if not provided
        let roleId = profileData.role_id;

        if (!roleId) {
            const defaultRole = await db.role.findFirst({
                where: { name: profileData.role || 'Staff' }
            });
            roleId = defaultRole?.id;
        }

        const newUser = await db.user.create({
            data: {
                email: profileData.email,
                name: profileData.profile_name,
                pin: profileData.pin,
                isActive: profileData.is_active !== undefined ? profileData.is_active : true,
                roleId: roleId,
                branchId: branchId
            }
        });

        revalidatePath('/profiles');
        return { success: true, data: newUser };
    } catch (error: any) {
        console.error('Error creating profile:', error);
        return { success: false, error: error.message };
    }
}

export async function updateProfileAction(userId: string, updateData: any) {
    try {
        const data: any = {};
        if (updateData.profile_name !== undefined) data.name = updateData.profile_name;
        if (updateData.email !== undefined) data.email = updateData.email;
        if (updateData.pin !== undefined) data.pin = updateData.pin;
        if (updateData.is_active !== undefined) data.isActive = updateData.is_active;
        if (updateData.role_id !== undefined) data.roleId = updateData.role_id;

        const updatedUser = await db.user.update({
            where: { id: userId },
            data: data
        });

        revalidatePath('/profiles');
        return { success: true, data: updatedUser };
    } catch (error: any) {
        console.error('Error updating profile:', error);
        return { success: false, error: error.message };
    }
}

export async function deleteProfileAction(userId: string) {
    try {
        await db.user.delete({
            where: { id: userId }
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
        // Flatten permissions map to flat array like "sales:view"
        let flatPermissions: string[] = [];
        if (roleData.permissions) {
            Object.keys(roleData.permissions).forEach(module => {
                roleData.permissions[module].forEach((action: string) => {
                    flatPermissions.push(`${module}:${action}`);
                });
            });
        }

        // Make sure all these permissions exist in the DB, create them if not
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
                where: { id: roleData.id },
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

export async function deleteRoleAction(roleId: string) {
    try {
        await db.role.delete({
            where: { id: roleId }
        });
        revalidatePath('/profiles');
        return { success: true };
    } catch (error: any) {
        console.error('Error deleting role:', error);
        return { success: false, error: error.message };
    }
}
