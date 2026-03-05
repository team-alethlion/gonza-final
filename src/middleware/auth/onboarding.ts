import { NextResponse } from "next/server";

export const onboardingProxy = (auth: any, nextUrl: any) => {
  const isLoggedIn = !!auth?.user
  const role = (auth?.user as any)?.role?.toLowerCase()
  const isOnboarded = (auth?.user as any)?.isOnboarded
  const isAgencyOnboarded = (auth?.user as any)?.agencyOnboarded

  if (!isLoggedIn) {
     return NextResponse.redirect(new URL("/login", nextUrl));
  }
  
  if (role === 'superadmin') {
    return NextResponse.redirect(new URL("/admin", nextUrl));
  }

  // If already onboarded, don't let them stay here
  if (isOnboarded || isAgencyOnboarded) {
    return NextResponse.redirect(new URL("/agency", nextUrl));
  }

  return true; 
};
