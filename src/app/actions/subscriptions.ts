/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "../../../prisma/db";
import { revalidatePath } from "next/cache";
import { addDays, format } from "date-fns";
import { sendSubscriptionNotificationEmail } from "@/lib/email";
import { initiatePesapalPayment } from "@/lib/pesapal";
import { verifyAgencyAccess, verifyUserAccess } from "@/lib/auth-guard";

export async function getAgencySubscriptionAction() {
  try {
    const session = await import("@/auth").then(m => m.auth());
    const agencyId = (session?.user as any)?.agencyId;
    if (!agencyId) return { success: false, error: "No agency found" };

    await verifyAgencyAccess(agencyId);

    const agency = await db.agency.findUnique({
      where: { id: agencyId },
      include: {
        package: true,
      },
    });

    if (!agency) return { success: false, error: "Agency not found" };

    // Serialize Decimal fields for Client Components
    if (agency.package) {
      (agency.package as any).monthlyPrice = Number(agency.package.monthlyPrice);
      (agency.package as any).yearlyPrice = Number(agency.package.yearlyPrice);
    }

    return { success: true, data: agency };
  } catch (error: any) {
    console.error("Error fetching subscription:", error);
    return { success: false, error: error.message };
  }
}

export async function activateTrialAction(packageId: string) {
  try {
    const sessionUser = await import("@/auth").then(m => m.auth()).then(s => s?.user as any);
    const agencyId = sessionUser?.agencyId;
    if (!agencyId) return { success: false, error: "No agency found" };

    await verifyAgencyAccess(agencyId);

    const agency = await db.agency.findUnique({
      where: { id: agencyId },
    });

    if (!agency) return { success: false, error: "Agency not found" };

    if (agency.hadTrialBefore) {
      return { success: false, error: "You have already used a free trial." };
    }

    const pkg = await db.package.findUnique({
      where: { id: packageId },
    });

    if (!pkg || !pkg.hasFreeTrial) {
      return { success: false, error: "This package does not offer a free trial." };
    }

    const trialEndDate = addDays(new Date(), pkg.trialDays);

    await db.agency.update({
      where: { id: agencyId },
      data: {
        packageId: packageId,
        subscriptionStatus: "trial",
        trialEndDate: trialEndDate,
        hadTrialBefore: true,
      },
    });

    // Send confirmation email
    if (sessionUser?.email) {
      await sendSubscriptionNotificationEmail(sessionUser.email, {
        userName: sessionUser.name || "Subscriber",
        planName: pkg.name,
        status: "Free Trial",
        expiryDate: format(trialEndDate, "PPP"),
        price: "UGX 0 (Trial)",
        limits: {
          users: pkg.unlimitedUsers ? "Unlimited" : pkg.maxUsers.toString(),
          products: pkg.unlimitedProducts ? "Unlimited" : pkg.maxProducts.toString(),
          sales: pkg.unlimitedSales ? "Unlimited" : pkg.maxSalesPerMonth.toString()
        },
        isTrial: true
      });
    }

    revalidatePath("/subscription");
    return { success: true };
  } catch (error: any) {
    console.error("Error activating trial:", error);
    return { success: false, error: error.message };
  }
}

export async function upgradeSubscriptionAction(packageId: string, duration: "monthly" | "yearly") {
  try {
    const sessionUser = await import("@/auth").then(m => m.auth()).then(s => s?.user as any);
    const userId = sessionUser?.id;
    const agencyId = sessionUser?.agencyId;
    
    if (!userId || !agencyId) return { success: false, error: "Authentication required" };

    await verifyUserAccess(userId);
    await verifyAgencyAccess(agencyId);

    const pkg = await db.package.findUnique({
      where: { id: packageId },
    });

    if (!pkg) return { success: false, error: "Package not found" };

    const price = duration === "monthly" ? Number(pkg.monthlyPrice) : Number(pkg.yearlyPrice);
    
    // 1. Create a unique reference for this transaction
    const reference = `SUB-${Date.now()}-${userId.substring(0, 8)}`;

    // 2. Create Transaction record in database
    await db.transaction.create({
      data: {
        userId,
        agencyId,
        packageId,
        amount: price,
        type: "subscription",
        billingCycle: duration,
        status: "pending",
        pesapalMerchantReference: reference,
        description: `Subscription upgrade to ${pkg.name} (${duration})`
      }
    });

    // 3. Initiate Pesapal Payment
    const pesapalResult = await initiatePesapalPayment({
      amount: price,
      email: sessionUser.email || "billing@gonzasystems.com",
      phoneNumber: sessionUser.phone || "0700000000",
      reference: reference,
      description: `Upgrade to ${pkg.name} (${duration})`,
      firstName: sessionUser.name?.split(' ')[0] || "Client",
      lastName: sessionUser.name?.split(' ').slice(1).join(' ') || "Admin"
    });

    if (!pesapalResult.redirect_url) {
      throw new Error("Failed to get redirect URL from Pesapal");
    }

    // 4. Return the redirect URL to the client
    return { 
      success: true, 
      redirectUrl: pesapalResult.redirect_url,
      merchantReference: reference
    };
  } catch (error: any) {
    console.error("Error upgrading subscription:", error);
    return { success: false, error: error.message };
  }
}

