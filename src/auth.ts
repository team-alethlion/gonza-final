/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

import { db as prisma } from "../prisma/db";

const nextAuth = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
          include: { 
            role: true,
            agency: true,
          },
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password,
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role.name,
          branchId: user.branchId || undefined,
          agencyId: user.agencyId || undefined,
          isOnboarded: user.isOnboarded,
          agencyOnboarded: user.agency?.isOnboarded || false,
          subscriptionStatus: user.agency?.subscriptionStatus,
          subscriptionExpiry: user.agency?.subscriptionExpiry,
          trialEndDate: user.agency?.trialEndDate,
        };
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
        token.branchId = (user as any).branchId;
        token.agencyId = (user as any).agencyId;
        token.isOnboarded = (user as any).isOnboarded;
        token.agencyOnboarded = (user as any).agencyOnboarded;
        token.subscriptionStatus = (user as any).subscriptionStatus;
        token.subscriptionExpiry = (user as any).subscriptionExpiry;
        token.trialEndDate = (user as any).trialEndDate;
      } else if (token.id && token.isOnboarded === undefined) {
        // Fallback for session recovery
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          include: { 
            role: true,
            agency: true 
          },
        });
        if (dbUser) {
          token.role = dbUser.role.name;
          token.branchId = dbUser.branchId;
          token.agencyId = dbUser.agencyId;
          token.isOnboarded = dbUser.isOnboarded;
          token.agencyOnboarded = dbUser.agency?.isOnboarded || false;
          token.subscriptionStatus = dbUser.agency?.subscriptionStatus;
          token.subscriptionExpiry = dbUser.agency?.subscriptionExpiry;
          token.trialEndDate = dbUser.agency?.trialEndDate;
        }
      }

      if (trigger === "update") {
        if (session?.impersonatingAgencyId) token.impersonatingAgencyId = session.impersonatingAgencyId;
        if (session?.clearImpersonation) delete token.impersonatingAgencyId;
        if (session?.branchId) token.branchId = session.branchId;
        
        // Handle onboarding updates
        if (session?.isOnboarded !== undefined) token.isOnboarded = session.isOnboarded;
        if (session?.agencyOnboarded !== undefined) token.agencyOnboarded = session.agencyOnboarded;

        // Handle subscription updates
        if (session?.subscriptionStatus) token.subscriptionStatus = session.subscriptionStatus;
        if (session?.subscriptionExpiry) token.subscriptionExpiry = session.subscriptionExpiry;
        if (session?.trialEndDate) token.trialEndDate = session.trialEndDate;
      }

      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        (session.user as any).role = token.role as string;
        (session.user as any).branchId = token.branchId as string;
        (session.user as any).agencyId = token.agencyId as string;
        (session.user as any).isOnboarded = token.isOnboarded;
        (session.user as any).agencyOnboarded = token.agencyOnboarded;
        (session.user as any).subscriptionStatus = token.subscriptionStatus;
        (session.user as any).subscriptionExpiry = token.subscriptionExpiry;
        (session.user as any).trialEndDate = token.trialEndDate;

        if (token.impersonatingAgencyId) {
          (session as any).impersonatingAgencyId = token.impersonatingAgencyId;
        }
      }
      return session;
    },
  },
});

export const auth = nextAuth.auth;
export const handlers = nextAuth.handlers;
export const signIn = nextAuth.signIn;
export const signOut = nextAuth.signOut;
