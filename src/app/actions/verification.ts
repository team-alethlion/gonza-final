/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "../../../prisma/db";
import { hash } from "bcryptjs";
import { sendVerificationEmail } from "@/lib/email";
import { addMinutes } from "date-fns";

/**
 * Validates email availability and sends an OTP.
 * This is the first step of the signup process.
 */
export async function initiateSignupAction(email: string) {
  try {
    // Debug: Check if emailVerification exists on db
    if (!('emailVerification' in db)) {
      console.error('[Verification] emailVerification model is MISSING from db instance');
      return { success: false, error: "Database configuration error. Please contact support." };
    }

    // 1. Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, error: "User with this email already exists" };
    }

    // 2. Generate a 6-digit OTP
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = addMinutes(new Date(), 10); // 10 minutes expiry

    // 3. Store the OTP (Upsert to handle retries)
    await db.emailVerification.upsert({
      where: { email },
      update: {
        code,
        expiresAt,
      },
      create: {
        email,
        code,
        expiresAt,
      },
    });

    // 4. Send the email
    const emailResult = await sendVerificationEmail(email, code);
    if (!emailResult.success) {
      return { success: false, error: emailResult.error || "Failed to send verification email. Please try again." };
    }

    return { 
      success: true, 
      message: "Verification code sent to your email."
    };
  } catch (error: any) {
    console.error("Error in initiateSignupAction:", error);
    return { success: false, error: error.message || "An unexpected error occurred." };
  }
}

/**
 * Verifies the OTP and creates the Agency, User, and Branch.
 * This is the second and final step of the signup process.
 */
export async function verifyAndCreateAccountAction(data: any) {
  const { email, password, name, code } = data;

  try {
    // Debug: Check if emailVerification exists on db
    if (!('emailVerification' in db)) {
      console.error('[Verification] emailVerification model is MISSING from db instance');
      return { success: false, error: "Database configuration error. Please contact support." };
    }

    // 1. Verify the OTP
    const verification = await db.emailVerification.findUnique({
      where: { email },
    });

    if (!verification || verification.code !== code) {
      return { success: false, error: "Invalid verification code" };
    }

    if (new Date() > verification.expiresAt) {
      return { success: false, error: "Verification code has expired. Please request a new one." };
    }

    const hashedPassword = await hash(password, 10);

    const result = await db.$transaction(async (tx) => {
      const crypto = await import('crypto');
      const uniqueId = crypto.randomBytes(3).toString('hex');

      // 1. Create Agency
      const agency = await tx.agency.create({
        data: {
          name: `${name || 'New'} Agency (${uniqueId})`,
          subscriptionStatus: "expired",
          trialEndDate: null,
          hadTrialBefore: false,
        },
      });

      // 2. Create 'admin' Role (without branchId initially)
      const role = await tx.role.create({
        data: {
          name: 'admin',
          description: 'Agency Admin'
        }
      });

      // 3. Create User (with roleId and agencyId, but no branchId yet)
      const user = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          roleId: role.id,
          agencyId: agency.id,
          status: "ACTIVE",
          emailVerified: new Date(),
        },
      });

      // 4. Create Default Branch (now we have a valid user.id for adminId)
      const branchName = `Main Branch (${uniqueId})`;
      const branch = await tx.branch.create({
        data: {
          name: branchName,
          location: "Default Location",
          agencyId: agency.id,
          adminId: user.id,
        },
      });

      // 5. Update User and Role with the new branchId
      await tx.user.update({
        where: { id: user.id },
        data: { branchId: branch.id }
      });

      await tx.role.update({
        where: { id: role.id },
        data: { branchId: branch.id }
      });

      // 6. Clean up verification record
      await tx.emailVerification.delete({
        where: { email },
      });

      return { user, agency, role, branch };
    }, {
        timeout: 15000
    });

    return { 
      success: true, 
      user: { 
        id: result.user.id, 
        email: result.user.email,
        name: result.user.name,
        role: result.role.name,
        agency: result.agency
      } 
    };
  } catch (error: any) {
    console.error("Error in verifyAndCreateAccountAction:", error);
    return { success: false, error: error.message || "Failed to complete signup." };
  }
}
