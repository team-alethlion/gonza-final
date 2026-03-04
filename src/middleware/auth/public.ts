import { NextResponse } from "next/server";

export const publicProxy = (auth: any, nextUrl: any) => {
  const isLoggedIn = !!auth?.user
  const role = (auth?.user as any)?.role?.toLowerCase()
  const status = (auth?.user as any)?.status

  if (isLoggedIn) {
    if (role === 'superadmin') {
      return NextResponse.redirect(new URL("/admin", nextUrl))
    } else if (['admin', 'manager', 'supervisor'].includes(role)) {
      // Check status first
      if (status === 'PENDING_VERIFICATION') {
        return NextResponse.redirect(new URL("/verify-email", nextUrl))
      }
      return NextResponse.redirect(new URL("/agency", nextUrl))
    }
  }
  return true
};
