import AgencyLayout from "@/components/AgencyLayout";
import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";

export default async function AgencyLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  if (!session || !session.user) {
    redirect("/public/login");
  }

  const role = (session.user as any).role?.toLowerCase();
  const isOnboarded = (session.user as any).isOnboarded;
  
  // Superadmins bypass everything
  if (role === "superadmin") {
    return <AgencyLayout>{children}</AgencyLayout>;
  }

  // 1. SUBSCRIPTION CHECK (First Priority)
  const status = (session.user as any).status;
  const subStatus = (session.user as any).subscriptionStatus;
  const subExpiry = (session.user as any).subscriptionExpiry;
  const trialEnd = (session.user as any).trialEndDate;

  const now = new Date();
  const isTrialActive = subStatus === "trial" && trialEnd && new Date(trialEnd) > now;
  const isSubActive = subStatus === "active" && subExpiry && new Date(subExpiry) > now;

  if (status === "EXPIRED" || status === "SUSPENDED" || (!isTrialActive && !isSubActive)) {
    console.log(`[AgencyLayout] Blocking access due to subscription. Status: ${status}, SubStatus: ${subStatus}`);
    redirect("/subscription");
  }

  // 2. STRICT ONBOARDING CHECK (Only if subscription is valid)
  if (!isOnboarded) {
    console.log(`[AgencyLayout] REDIRECTING TO ONBOARDING. User not onboarded.`);
    redirect("/onboarding");
  }

  return <AgencyLayout>{children}</AgencyLayout>;
}
