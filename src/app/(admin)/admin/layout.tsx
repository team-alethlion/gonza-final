import { AuthProvider } from "./contexts/AuthContext";
import AdminShell from "./components/AdminShell";
import "./admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adminPathSecret = process.env.ADMIN_PATH_SECRET || "";

  return (
    <AuthProvider adminPathSecret={adminPathSecret}>
      <div className="admin-theme admin-scope min-h-screen">
        <AdminShell>{children}</AdminShell>
      </div>
    </AuthProvider>
  );
}
