"use client";

import { AuthProvider } from "./contexts/AuthContext";
import AdminShell from "./components/AdminShell";
import "./admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="admin-theme admin-scope min-h-screen">
        <AdminShell>{children}</AdminShell>
      </div>
    </AuthProvider>
  );
}
