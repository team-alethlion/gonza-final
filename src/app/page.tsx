import { auth } from "@/auth";

// Import the specific Index views from your Route Groups
// Note: We name them specifically here to avoid "Index" vs "Index" conflicts
import AdminDashboard from "./(admin)/view";
import AgencyDashboard from "./(agency)/view";
import PublicLandingPage from "./(public)/view";

export default async function RootPage() {
  const session = await auth();

  // 1. Handle Unauthenticated users
  if (!session || !session.user) {
    return <PublicLandingPage />;
  }

  // 2. Role-Based Switching
  // This renders the correct "Index" without changing the URL from "/"
  const role = (session.user as any).role;

  switch (role) {
    case "superadmin":
    case "Admin": // Adding "Admin" as I saw it in actions/auth.ts
      return <AdminDashboard />;
    case "admin":
    case "agency":
    case "manager":
      return <AgencyDashboard />;
    default:
      // Fallback for authenticated users with no specific role
      return <PublicLandingPage />;
  }
}
