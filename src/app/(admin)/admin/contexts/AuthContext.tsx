/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  useSession,
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
} from "next-auth/react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: { username: string } | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{
  children: React.ReactNode;
  adminPathSecret?: string;
}> = ({ children, adminPathSecret }) => {
  const { data: session, status } = useSession();

  const { user, isAdmin } = React.useMemo(() => {
    if (status === "authenticated" && session?.user) {
      const role = (session.user as any).role?.toLowerCase();
      if (role === "superadmin") {
        return {
          user: { username: session.user.email || "Admin" },
          isAdmin: true,
        };
      }
    }
    return { user: null, isAdmin: false };
  }, [session, status]);

  const signIn = async (username: string, password: string) => {
    const result = await nextAuthSignIn("credentials", {
      email: username,
      password: password,
      redirect: false,
    });

    if (result?.error) {
      throw new Error(result.error);
    }

    // NextAuth will update the session, and the useEffect above will handle the state
  };

  const signOut = async () => {
    const callbackUrl = adminPathSecret
      ? `/admin/${adminPathSecret}`
      : "/login";
    await nextAuthSignOut({ redirect: true, callbackUrl });
  };

  return (
    <AuthContext.Provider
      value={{ user, isAdmin, loading: status === "loading", signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
