/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "@/auth";
import { db } from "../../prisma/db";

/**
 * Validates that the current session user matches the requested userId 
 * or has superadmin privileges.
 */
export async function verifyUserAccess(userId: string) {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized: No active session");
  }

  const sessionUser = session.user as any;
  const isSuperAdmin = sessionUser.role?.toLowerCase() === "superadmin";

  if (!isSuperAdmin && sessionUser.id !== userId) {
    throw new Error("Unauthorized: User access denied");
  }

  return sessionUser;
}

/**
 * Validates that the current session user has access to the requested branch.
 * 
 * Rules:
 * - Superadmins: Access any branch.
 * - Agency Admins: Access any branch within their agency.
 * - Others (Managers/Staff): Access only their assigned branchId.
 */
export async function verifyBranchAccess(branchId: string) {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("Unauthorized: No active session");
  }

  const sessionUser = session.user as any;
  const userRole = sessionUser.role?.toLowerCase();
  const userAgencyId = sessionUser.agencyId;
  const userBranchId = sessionUser.branchId;

  // 1. Superadmin bypass
  if (userRole === "superadmin") {
    return sessionUser;
  }

  // 2. Agency Admin check
  if (userRole === "admin" && userAgencyId) {
    const branch = await db.branch.findUnique({
      where: { id: branchId },
      select: { agencyId: true },
    });

    if (!branch || branch.agencyId !== userAgencyId) {
      throw new Error("Unauthorized: Branch does not belong to your agency");
    }
    return sessionUser;
  }

  // 3. Manager/Staff check (Strict branch match)
  if (userBranchId !== branchId) {
    throw new Error("Unauthorized: You do not have access to this branch");
  }

  return sessionUser;
}

/**
 * Optional: Verifies that the current session user belongs to the requested agency.
 */
export async function verifyAgencyAccess(agencyId: string) {
    const session = await auth();
    if (!session || !session.user) {
      throw new Error("Unauthorized: No active session");
    }
  
    const sessionUser = session.user as any;
    const userRole = sessionUser.role?.toLowerCase();
    const userAgencyId = sessionUser.agencyId;
  
    if (userRole === "superadmin") {
      return sessionUser;
    }
  
    if (userAgencyId !== agencyId) {
      throw new Error("Unauthorized: Agency access denied");
    }
  
    return sessionUser;
}
