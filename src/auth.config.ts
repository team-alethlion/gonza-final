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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as any).role
        token.branchId = (user as any).branchId
        token.agencyId = (user as any).agencyId
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
      const role = (auth?.user as any)?.role

      const isSuperAdminPath = nextUrl.pathname.startsWith("/(admin)") || nextUrl.pathname.startsWith("/admin_login")
      const isAgencyPath = nextUrl.pathname.startsWith("/(agency)")
      const isPublicPath = nextUrl.pathname.startsWith("/(public)") || ["/login", "/signup", "/privacy-policy"].includes(nextUrl.pathname)

      // Note: With Route Groups, the actual URL doesn't include the group name.
      // We check the requested path.
      
      const isOnLogin = nextUrl.pathname === "/login" || nextUrl.pathname === "/signup"

      if (isLoggedIn && isOnLogin) {
        // Redirect to root, the RootPage component in src/app/page.tsx handles the final view
        return Response.redirect(new URL("/", nextUrl))
      }

      return true // Allow the flow, page.tsx will handle granular checks
    },
  },
  providers: [], 
} satisfies NextAuthConfig
