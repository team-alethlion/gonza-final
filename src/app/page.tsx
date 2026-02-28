import { auth } from "@/auth";

// Import the specific Index views from your Route Groups
import AdminDashboard from "./(admin)/view";
import AgencyDashboard from "./(agency)/view";
import PublicLandingPage from "./(public)/view";

// Import Layouts to wrap the views since they are all at "/"
import AgencyLayoutWrapper from "./(agency)/layout";
import AdminLayoutWrapper from "./(admin)/layout";
import PublicLayoutWrapper from "./(public)/layout";

export default async function RootPage() {
  const session = await auth();

  console.log("RootPage: Session data:", JSON.stringify({
    user: session?.user ? {
      email: session.user.email,
      role: (session.user as any).role,
      id: session.user.id
    } : null
  }, null, 2));

  // 1. Handle Unauthenticated users
  if (!session || !session.user) {
    console.log("RootPage: No session found, rendering landing page");
    return (
      <PublicLayoutWrapper>
        <PublicLandingPage />
      </PublicLayoutWrapper>
    );
  }

  // 2. Role-Based Switching
  const role = ((session.user as any).role || "").toLowerCase();
  console.log("RootPage: Detected role:", role);

  switch (role) {
    case "superadmin":
      return (
        <AdminLayoutWrapper>
          <AdminDashboard />
        </AdminLayoutWrapper>
      );
    case "admin":
    case "manager":
    case "agency": // Keeping for compatibility during transition
      return (
        <AgencyLayoutWrapper>
          <AgencyDashboard />
        </AgencyLayoutWrapper>
      );
    default:
      return (
        <PublicLayoutWrapper>
          <PublicLandingPage />
        </PublicLayoutWrapper>
      );
  }
}
