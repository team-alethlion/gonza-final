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

  // The middleware already handles:
  // - Subscription status (SUSPENDED/EXPIRED)
  // - Onboarding status
  // - Role-based access
  // We can safely render the layout here to avoid redundant DB/Session checks.

  return <AgencyLayout>{children}</AgencyLayout>;
}
