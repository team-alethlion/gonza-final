/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';

// Profiles Server Actions (Using the User model from Prisma Auth map)
export async function getProfilesAction(branchId: string) {
    const session = await auth();
    if (!session || !session.user) throw new Error("Unauthorized");
    
    const userBranchId = (session.user as any).branchId;
    if (userBranchId && userBranchId !== branchId) {
        const role = (session.user as any).role?.toLowerCase();
        if (role !== 'superadmin') throw new Error("Unauthorized: Branch mismatch");
    }

    try {
        const branch = await db.branch.findUnique({
            where: { id: branchId },
            select: { adminId: true }
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
            is_active: u.status === 'ACTIVE',
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
    const session = await auth();
    if (!session || !session.user) throw new Error("Unauthorized");
    if ((session.user as any).branchId && (session.user as any).branchId !== branchId) throw new Error("Unauthorized");

    try {
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

export async function updateProfileAction(userId: string, branchId: string, updateData: any) {
    const session = await auth();
    if (!session || !session.user) throw new Error("Unauthorized");
    
    // Authorization check
    if ((session.user as any).branchId && (session.user as any).branchId !== branchId) {
        if ((session.user as any).role?.toLowerCase() !== 'superadmin') throw new Error("Unauthorized");
    }

    try {
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
    const session = await auth();
    if (!session || !session.user) throw new Error("Unauthorized");
    if ((session.user as any).branchId && (session.user as any).branchId !== branchId) throw new Error("Unauthorized");

    try {
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
    const session = await auth();
    if (!session || !session.user) throw new Error("Unauthorized");
    if ((session.user as any).branchId && (session.user as any).branchId !== branchId) throw new Error("Unauthorized");

    try {
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
    const session = await auth();
    if (!session || !session.user) throw new Error("Unauthorized");
    if ((session.user as any).branchId && (session.user as any).branchId !== branchId) throw new Error("Unauthorized");

    try {
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
