import { NextResponse } from "next/server";

export const subscriptionProxy = (auth: any, nextUrl: any) => {
  const isLoggedIn = !!auth?.user
  const role = (auth?.user as any)?.role?.toLowerCase()

  if (!isLoggedIn) {
     return NextResponse.redirect(new URL("/login", nextUrl));
  }
  
  if (role === 'superadmin') return true;
  return true; // Subscription page is open to any authenticated user who needs it
};
