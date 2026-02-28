/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { hash, compare } from 'bcryptjs';

export async function signUpAction(data: any) {
    try {
        const { email, password, name } = data;

        // Check if user already exists
        const existingUser = await db.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return { success: false, error: "User already exists" };
        }

        const hashedPassword = await hash(password, 10);

        // Find or create the 'admin' role
        let role = await db.role.findFirst({
            where: { 
                name: {
                    equals: 'admin',
                    mode: 'insensitive'
                }
            }
        });

        if (!role) {
            role = await db.role.create({
                data: { name: "admin", description: "Agency Owner / Admin" }
            });
        }

        const finalRole = role;

        // Perform everything in a transaction to ensure data integrity
        const result = await db.$transaction(async (tx) => {
            // 1. Create the Agency
            const agency = await tx.agency.create({
                data: {
                    name: `${name}'s Agency`,
                    subscriptionStatus: 'trial',
                    trialEndDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 days trial
                }
            });

            // 2. Create the User (linked to agency)
            const user = await tx.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name,
                    roleId: finalRole.id,
                    agencyId: agency.id,
                    status: 'ACTIVE'
                }
            });

            // 3. Create the Default Branch (linked to user and agency)
            const branch = await tx.branch.create({
                data: {
                    name: "Main Branch",
                    location: "Default Location",
                    agencyId: agency.id,
                    adminId: user.id
                }
            });

            // 4. Update the user with the branchId
            const updatedUser = await tx.user.update({
                where: { id: user.id },
                data: { branchId: branch.id }
            });

            return updatedUser;
        });

        return { success: true, user: { id: result.id, email: result.email } };
    } catch (error: any) {
        console.error('Error in signUpAction:', error);
        return { success: false, error: error.message || 'Failed to sign up' };
    }
}

export async function signInAction(email: string, password: string) {
    try {
        const user = await db.user.findUnique({
            where: { email },
            include: { role: true }
        });

        if (!user || !user.password) {
            return { success: false, error: "Invalid email or password" };
        }

        const isPasswordValid = await compare(password, user.password);

        if (!isPasswordValid) {
            return { success: false, error: "Invalid email or password" };
        }

        return {
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role?.name
            }
        };
    } catch (error: any) {
        console.error('Error in signInAction:', error);
        return { success: false, error: error.message || 'Failed to sign in' };
    }
}

export async function resetPasswordAction(newPassword: string, resetToken?: string) {
    try {
        if (!resetToken) {
            return { success: false, error: "Reset token is missing or invalid" };
        }

        const result = await db.$transaction(async (tx) => {
            // 1. Find the token and ensure it's valid
            const tokenRecord = await tx.passwordResetToken.findUnique({
                where: { token: resetToken }
            });

            if (!tokenRecord) {
                throw new Error("Invalid or expired reset token");
            }

            // 2. Check if token is expired
            if (new Date() > tokenRecord.expires) {
                // Cleanup expired token
                await tx.passwordResetToken.delete({ where: { id: tokenRecord.id } });
                throw new Error("Reset token has expired");
            }

            // 3. Find the associated user
            const user = await tx.user.findUnique({
                where: { email: tokenRecord.email }
            });

            if (!user) {
                throw new Error("User associated with this token no longer exists");
            }

            // 4. Hash the new password
            const hashedPassword = await hash(newPassword, 10);

            // 5. Update user password
            await tx.user.update({
                where: { id: user.id },
                data: { password: hashedPassword }
            });

            // 6. Delete the used token
            await tx.passwordResetToken.delete({
                where: { id: tokenRecord.id }
            });

            return { success: true };
        });

        return result;
    } catch (error: any) {
        console.error('Error resetting password:', error);
        return { success: false, error: error.message || 'Failed to reset password' };
    }
}

export async function generatePasswordResetToken(email: string) {
    try {
        // Check if user exists
        const user = await db.user.findUnique({
            where: { email }
        });

        if (!user) {
            // For security, don't reveal if user exists or not
            return { success: true }; 
        }

        // Generate a high-entropy token
        const token = crypto.randomUUID();
        const expires = new Date(Date.now() + 3600000); // 1 hour expiry

        // Create or update reset token
        await db.passwordResetToken.upsert({
            where: { email_token: { email, token } }, // This assumes @@unique([email, token])
            create: {
                email,
                token,
                expires
            },
            update: {
                token,
                expires
            }
        });

        // In a real app, you would send this token via email
        console.log(`Password reset token for ${email}: ${token}`);
        
        return { success: true, token }; // Returning token for demo/testing, but in production, just return success
    } catch (error: any) {
        console.error('Error generating reset token:', error);
        return { success: false, error: error.message };
    }
}

export async function signOutAction() {
    // With NextAuth, signing out is handled by the `signOut` function from `next-auth/react`
    // on the client side. We don't strictly need a server action for this if we use NextAuth. 
    // Adding a dummy action here to satisfy the `ResetPassword` component's import.
    console.log("signOutAction called. If using NextAuth, call client-side signOut() instead.");
    return { success: true };
}
