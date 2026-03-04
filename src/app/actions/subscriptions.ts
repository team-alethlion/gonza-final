/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { db } from "../../../prisma/db";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { addDays, format } from "date-fns";
import { sendSubscriptionNotificationEmail } from "@/lib/email";
import { initiatePesapalPayment } from "@/lib/pesapal";

export async function getAgencySubscriptionAction() {
  const session = await auth();
  if (!session || !session.user) {
    return { success: false, error: "Unauthorized" };
  }

  const agencyId = (session.user as any).agencyId;
  if (!agencyId) return { success: false, error: "No agency found" };

  try {
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
  const session = await auth();
  if (!session || !session.user) {
    return { success: false, error: "Unauthorized" };
  }

  const agencyId = (session.user as any).agencyId;
  if (!agencyId) return { success: false, error: "No agency found" };

  try {
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
    if (session.user?.email) {
      await sendSubscriptionNotificationEmail(session.user.email, {
        userName: session.user.name || "Subscriber",
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
  const session = await auth();
  if (!session || !session.user) {
    return { success: false, error: "Unauthorized" };
  }

  const userId = session.user.id;
  const agencyId = (session.user as any).agencyId;
  if (!agencyId) return { success: false, error: "No agency found" };

  try {
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
      email: session.user.email || "billing@gonzasystems.com",
      phoneNumber: (session.user as any).phone || "0700000000",
      reference: reference,
      description: `Upgrade to ${pkg.name} (${duration})`,
      firstName: session.user.name?.split(' ')[0] || "Client",
      lastName: session.user.name?.split(' ').slice(1).join(' ') || "Admin"
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
