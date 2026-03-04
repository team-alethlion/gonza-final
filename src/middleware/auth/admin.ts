import { NextResponse } from "next/server";

export const adminProxy = (auth: any, nextUrl: any) => {
  const role = auth?.user?.role?.toLowerCase();
  
  if (role === 'superadmin') return true;
  
  // If not superadmin but on admin path, redirect to agency
  return NextResponse.redirect(new URL("/agency", nextUrl));
};
