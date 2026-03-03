/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthConfig } from "next-auth"

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
        token.branchId = (user as any).branchId
        token.agencyId = (user as any).agencyId
      }
      
      if (trigger === "update" && session?.branchId) {
        token.branchId = session.branchId;
      }

      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        if (token.id) session.user.id = token.id as string
        if (token.role) (session.user as any).role = token.role as string
        if (token.branchId) (session.user as any).branchId = token.branchId as string
        if (token.agencyId) (session.user as any).agencyId = token.agencyId as string
        
        if (token.impersonatingAgencyId) {
           (session as any).impersonatingAgencyId = token.impersonatingAgencyId;
        }
      }
      return session
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const role = (auth?.user as any)?.role?.toLowerCase()

      const isSuperAdminPath = nextUrl.pathname.startsWith("/packages") || nextUrl.pathname.startsWith("/admin_login")
      const isPublicPath = ["/login", "/signup", "/privacy-policy", "/auth/error"].includes(nextUrl.pathname)
      const isRootPath = nextUrl.pathname === "/"

      // 1. Handle Public Paths
      if (isPublicPath) {
        if (isLoggedIn && (nextUrl.pathname === "/login" || nextUrl.pathname === "/signup")) {
          return Response.redirect(new URL("/", nextUrl))
        }
        return true
      }

      // 2. Handle Authentication
      if (!isLoggedIn) {
        // Redirect to admin login for superadmin paths
        if (isSuperAdminPath && nextUrl.pathname !== "/admin_login") {
          return Response.redirect(new URL("/admin_login", nextUrl))
        }
        // Redirect to standard login for everything else
        return false // Redirects to authConfig.pages.signIn
      }

      // 3. Handle Role-Based Authorization
      
      // Superadmin path protection
      if (isSuperAdminPath) {
        if (role === 'superadmin') return true
        // If not superadmin but on admin path, redirect to root
        return Response.redirect(new URL("/", nextUrl))
      }

      // Agency paths (everything else)
      // Allow Superadmin to see agency view as well (for management)
      if (role === 'superadmin') return true

      // Admins (Agency Owners) and Managers (Branch Managers/Supervisors)
      // These roles are allowed on the main app
      if (role === 'admin' || role === 'manager' || role === 'supervisor') {
        // Protect specific high-level management routes from non-admins if needed
        const isAdminOnlyPath = nextUrl.pathname.startsWith("/business-management")
        if (isAdminOnlyPath && role !== 'admin') {
          return Response.redirect(new URL("/", nextUrl))
        }
        return true
      }

      // Default: If they have a session but no valid role for the path, sign them out or redirect to root
      return Response.redirect(new URL("/login", nextUrl))
    },
  },
  providers: [], 
} satisfies NextAuthConfig
