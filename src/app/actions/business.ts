/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "../../../prisma/db";
import { revalidatePath } from "next/cache";
import { verifyBranchAccess, verifyUserAccess } from "@/lib/auth-guard";
import bcrypt from "bcryptjs";

export async function getBusinessLocationsAction(userId: string) {
  try {
    const sessionUser = await verifyUserAccess(userId);
    const userRole = (sessionUser as any).role?.toLowerCase();
    const userAgencyId = (sessionUser as any).agencyId;
    const sessionBranchId = (sessionUser as any).branchId;

    let whereClause: any = {
      OR: [{ adminId: userId }, { users: { some: { id: userId } } }],
    };

    // If user is an admin, show all branches in their agency
    if (userRole === "admin" && userAgencyId) {
      whereClause = {
        agencyId: userAgencyId,
      };
    }

    const branches = await db.branch.findMany({
      where: whereClause,
      orderBy: [
        {
          type: "asc", // MAIN first, then SUB
        },
        {
          createdAt: "asc",
        },
      ],
    });

    return branches.map((b: any, index: number) => ({
      id: b.id,
      name: b.name,
      user_id: b.adminId,
      // Prioritize the branch ID in the session, otherwise first one is default
      is_default: b.id === sessionBranchId || (index === 0 && !sessionBranchId),
      created_at: b.createdAt.toISOString(),
      updated_at: b.updatedAt.toISOString(),
      switch_password_hash: b.accessPassword,
    }));
  } catch (error) {
    console.error("Error fetching business locations:", error);
    return [];
  }
}

export async function createBusinessAction(userId: string, name: string) {
  try {
    await verifyUserAccess(userId);
    const branch = await db.branch.create({
      data: {
        name: name,
        location: "Main Location", // Default location
        adminId: userId,
      },
    });

    return {
      success: true,
      data: {
        id: branch.id,
        name: branch.name,
        user_id: branch.adminId,
        is_default: false,
        created_at: branch.createdAt.toISOString(),
        updated_at: branch.updatedAt.toISOString(),
        switch_password_hash: branch.accessPassword,
      },
    };
  } catch (error: any) {
    console.error("Error creating business:", error);
    return { success: false, error: error.message || "Failed to create business" };
  }
}

export async function updateBusinessAction(
  id: string,
  userId: string,
  name: string,
) {
  try {
    await verifyUserAccess(userId);
    await verifyBranchAccess(id);

    const branch = await db.branch.update({
      where: {
        id: id,
        adminId: userId,
      },
      data: {
        name: name,
      },
    });

    return {
      success: true,
      data: {
        id: branch.id,
        name: branch.name,
        user_id: branch.adminId,
        is_default: false,
        created_at: branch.createdAt.toISOString(),
        updated_at: branch.updatedAt.toISOString(),
        switch_password_hash: branch.accessPassword,
      },
    };
  } catch (error: any) {
    console.error("Error updating business:", error);
    return { success: false, error: error.message || "Failed to update business" };
  }
}

export async function deleteBusinessAction(id: string, userId: string) {
  try {
    await verifyUserAccess(userId);
    await verifyBranchAccess(id);

    await db.branch.delete({
      where: {
        id: id,
        adminId: userId,
      },
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error deleting business:", error);
    return { success: false, error: error.message || "Failed to delete business" };
  }
}

// --- BUSINESS RESET ---

export async function resetBusinessAction(id: string, userId: string) {
  try {
    await verifyUserAccess(userId);
    await verifyBranchAccess(id);

    // VERIFY OWNERSHIP BEFORE WIPE
    const branch = await db.branch.findUnique({
      where: { id },
      select: { adminId: true },
    });

    if (!branch) {
      throw new Error("Branch not found");
    }

    // Delete all business data in a transaction
    await db.$transaction(async (tx: any) => {
      await tx.productHistory.deleteMany({ where: { locationId: id } });
      await tx.sale.deleteMany({ where: { branchId: id } });
      await tx.product.deleteMany({ where: { branchId: id } });
      await tx.customer.deleteMany({ where: { branchId: id } });
      await tx.activityHistory.deleteMany({ where: { locationId: id } });
    });

    return { success: true };
  } catch (error: any) {
    console.error("Error resetting business:", error);
    return { success: false, error: error.message };
  }
}

// --- BUSINESS PASSWORD ---

export async function setBusinessPasswordAction(
  businessId: string,
  password: string,
) {
  try {
    await verifyBranchAccess(businessId);
    const hash = await bcrypt.hash(password, 10);
    await db.branch.update({
      where: { id: businessId },
      data: { accessPassword: hash },
    });
    return { success: true };
  } catch (error: any) {
    console.error("Error setting business password:", error);
    return { success: false, error: error.message };
  }
}

export async function verifyBusinessPasswordAction(
  businessId: string,
  password: string,
) {
  try {
    const branch = await db.branch.findUnique({
      where: { id: businessId },
      select: { accessPassword: true },
    });

    if (!branch?.accessPassword) {
      return { success: true, verified: true };
    }

    const verified = await bcrypt.compare(password, branch.accessPassword);
    return { success: true, verified };
  } catch (error: any) {
    console.error("Error verifying business password:", error);
    return { success: false, verified: false, error: error.message };
  }
}

export async function removeBusinessPasswordAction(businessId: string) {
  try {
    await verifyBranchAccess(businessId);
    await db.branch.update({
      where: { id: businessId },
      data: { accessPassword: null },
    });
    return { success: true };
  } catch (error: any) {
    console.error("Error removing business password:", error);
    return { success: false, error: error.message };
  }
}
