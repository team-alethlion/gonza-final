"use client";

import { AuthProvider } from "./contexts/AuthContext";
import "./admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="admin-theme admin-scope min-h-screen">{children}</div>
    </AuthProvider>
  );
}
