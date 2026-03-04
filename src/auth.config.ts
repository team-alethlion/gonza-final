/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthConfig } from "next-auth"
import adminProxy from "./app/(admin)/proxy";
import agencyProxy from "./app/(agency)/proxy";
import publicProxy from "./app/(public)/proxy";
import subscriptionProxy from "./app/(subscription)/proxy";
import onboardingProxy from "./app/(onboarding)/proxy";
import paymentsProxy from "./app/(payments)/proxy";

export const authConfig = {
  pages: {
    signIn: "/login",
    newUser: "/signup",
    error: '/auth/error',
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.role = (user as any).role
        token.status = (user as any).status
        token.branchId = (user as any).branchId
        token.agencyId = (user as any).agencyId
        token.isOnboarded = (user as any).isOnboarded
        token.agencyOnboarded = (user as any).agencyOnboarded
        token.subscriptionStatus = (user as any).subscriptionStatus
        token.subscriptionExpiry = (user as any).subscriptionExpiry
        token.trialEndDate = (user as any).trialEndDate
      }
      
      if (trigger === "update") {
        if (session?.branchId) token.branchId = session.branchId;
        if (session?.status) token.status = session.status;
        if (session?.isOnboarded !== undefined) token.isOnboarded = session.isOnboarded;
        if (session?.agencyOnboarded !== undefined) token.agencyOnboarded = session.agencyOnboarded;
        if (session?.subscriptionStatus) token.subscriptionStatus = session.subscriptionStatus;
        if (session?.subscriptionExpiry) token.subscriptionExpiry = session.subscriptionExpiry;
        if (session?.trialEndDate) token.trialEndDate = session.trialEndDate;
      }

      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        if (token.id) session.user.id = token.id as string
        if (token.role) (session.user as any).role = token.role as string
        if (token.status) (session.user as any).status = token.status as string
        if (token.branchId) (session.user as any).branchId = token.branchId as string
        if (token.agencyId) (session.user as any).agencyId = token.agencyId as string
        if (token.isOnboarded !== undefined) (session.user as any).isOnboarded = token.isOnboarded as boolean
        if (token.agencyOnboarded !== undefined) (session.user as any).agencyOnboarded = token.agencyOnboarded as boolean
        if (token.subscriptionStatus) (session.user as any).subscriptionStatus = token.subscriptionStatus as string
        if (token.subscriptionExpiry) (session.user as any).subscriptionExpiry = token.subscriptionExpiry as string
        if (token.trialEndDate) (session.user as any).trialEndDate = token.trialEndDate as string
        
        if (token.impersonatingAgencyId) {
           (session as any).impersonatingAgencyId = token.impersonatingAgencyId;
        }
      }
      return session
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const role = (auth?.user as any)?.role?.toLowerCase()
      const status = (auth?.user as any)?.status
      const isOnboarded = (auth?.user as any)?.isOnboarded
      const agencyOnboarded = (auth?.user as any)?.agencyOnboarded
      const subStatus = (auth?.user as any)?.subscriptionStatus
      const subExpiry = (auth?.user as any)?.subscriptionExpiry
      const trialEnd = (auth?.user as any)?.trialEndDate

      const isSuperAdminPath = nextUrl.pathname.startsWith("/admin") || nextUrl.pathname.startsWith("/packages") || nextUrl.pathname.startsWith("/admin_login")
      const isPublicPath = ["/public", "/login", "/signup", "/privacy-policy", "/auth/error", "/verify-email"].includes(nextUrl.pathname)
      const isSubscriptionPath = nextUrl.pathname === "/subscription"
      const isOnboardingPath = nextUrl.pathname === "/onboarding"
      const isRootPath = nextUrl.pathname === "/"

      console.log(`[Middleware] Path: ${nextUrl.pathname}, Role: ${role}, Status: ${status}, Onboarded: ${isOnboarded}, Sub: ${subStatus}`);

      // 1. Handle Public Paths and Authentication via delegating to sub-proxies
      if (isPublicPath || isRootPath) {
        return publicProxy(auth, nextUrl);
      }

      // 2. Base Authentication Check (required for all other paths)
      if (!isLoggedIn) {
        const adminPathSecret = process.env.ADMIN_PATH_SECRET;
        if (isSuperAdminPath && adminPathSecret) {
          return Response.redirect(new URL(`/admin/${adminPathSecret}`, nextUrl))
        }
        return false 
      }

      // 3. Handle Email Verification & Account Status (Global checks)
      if (status === 'PENDING_VERIFICATION' && nextUrl.pathname !== "/verify-email" && !nextUrl.pathname.startsWith('/api/auth')) {
        return Response.redirect(new URL("/verify-email", nextUrl))
      }

      // 4. Handle Account Status (Global check)
      if ((status === 'EXPIRED' || status === 'SUSPENDED') && !isSubscriptionPath && !nextUrl.pathname.startsWith('/api/auth')) {
        console.log(`[Middleware] Account ${status}. Redirecting to /subscription`);
        return Response.redirect(new URL("/subscription", nextUrl))
      }

      // 5. Handle Subscription (Global check for non-superadmins)
      if (role !== 'superadmin' && !isSubscriptionPath && !nextUrl.pathname.startsWith('/api/auth') && !nextUrl.pathname.startsWith('/verify-email')) {
        const now = new Date();
        const isTrialActive = subStatus === 'trial' && trialEnd && new Date(trialEnd) > now;
        const isSubActive = subStatus === 'active' && subExpiry && new Date(subExpiry) > now;

        if (!isTrialActive && !isSubActive) {
          console.log(`[Middleware] Subscription Invalid (Status: ${subStatus}). Redirecting to /subscription`);
          return Response.redirect(new URL("/subscription", nextUrl))
        }
      }

      // 6. Handle Onboarding (Only after subscription is valid)
      if (role !== 'superadmin' && !isOnboarded && !isOnboardingPath && !nextUrl.pathname.startsWith('/api/auth') && !nextUrl.pathname.startsWith('/verify-email')) {
        console.log(`[Middleware] Not Onboarded. Redirecting to /onboarding`);
        return Response.redirect(new URL("/onboarding", nextUrl))
      }

      // 7. Specialized Proxy Delegation (The "Multilevel Proxy" structure)
      if (isSuperAdminPath) {
        return adminProxy(auth, nextUrl);
      }

      if (nextUrl.pathname.startsWith("/agency")) {
        return agencyProxy(auth, nextUrl);
      }

      if (nextUrl.pathname.startsWith("/onboarding")) {
        return onboardingProxy(auth, nextUrl);
      }

      if (isSubscriptionPath) {
        return subscriptionProxy(auth, nextUrl);
      }

      if (nextUrl.pathname.startsWith("/payments") || nextUrl.pathname.startsWith("/api/payments")) {
        console.log(`[Middleware] Delegating to Payments Proxy for: ${nextUrl.pathname}`);
        return paymentsProxy(auth, nextUrl);
      }

      return true;
    },
  },
  providers: [], 
} satisfies NextAuthConfig
