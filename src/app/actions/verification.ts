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

    // 2. Proceed with account creation (Logic from original signUpAction)
    const hashedPassword = await hash(password, 10);

    // Find or create the 'admin' role
    let role = await db.role.findFirst({
      where: {
        name: {
          equals: "admin",
          mode: "insensitive",
        },
      },
    });

    if (!role) {
      role = await db.role.create({
        data: { name: "admin", description: "Agency Owner / Admin" },
      });
    }

    const finalRole = role;

    const result = await db.$transaction(async (tx) => {
      const crypto = await import('crypto');
      const uniqueId = crypto.randomBytes(3).toString('hex');

      // Create Agency
      const agency = await tx.agency.create({
        data: {
          name: `${name || 'New'} Agency (${uniqueId})`,
          subscriptionStatus: "expired",
          trialEndDate: null,
          hadTrialBefore: false,
        },
      });

      // Create User
      const user = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          roleId: finalRole.id,
          agencyId: agency.id,
          status: "ACTIVE",
          emailVerified: new Date(), // Mark as verified since they just used an OTP
        },
      });

      // Create Default Branch with unique suffix to avoid constraint failure
      const branchName = `Main Branch (${uniqueId})`;
      
      const branch = await tx.branch.create({
        data: {
          name: branchName,
          location: "Default Location",
          agencyId: agency.id,
          adminId: user.id,
        },
      });

      // Update User with branchId
      const updatedUser = await tx.user.update({
        where: { id: user.id },
        data: { branchId: branch.id },
        include: {
          agency: true,
          role: true
        }
      });

      // 3. Clean up verification record
      await tx.emailVerification.delete({
        where: { email },
      });

      return updatedUser;
    });

    return { 
      success: true, 
      user: { 
        id: result.id, 
        email: result.email,
        name: result.name,
        role: result.role?.name,
        agency: result.agency
      } 
    };
  } catch (error: any) {
    console.error("Error in verifyAndCreateAccountAction:", error);
    return { success: false, error: error.message || "Failed to complete signup." };
  }
}
