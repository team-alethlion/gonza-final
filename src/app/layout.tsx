import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import "@/app/(agency)/globals.css";
import { Providers } from "@/components/Providers";
import { auth } from "@/auth";
import { getBusinessLocationsAction } from "@/app/actions/business";
import { getProfilesAction } from "@/app/actions/profiles";

export const metadata: Metadata = {
  title: "Gonza Systems",
  description: "Sales and Inventory Tracking Application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userId = session?.user?.id;
  const branchId = (session?.user as any)?.branchId;
  
  let initialBusinessLocations: any[] = [];
  let initialProfiles: any[] = [];
  
  if (userId) {
    try {
      const locations = await getBusinessLocationsAction(userId);
      if (locations) initialBusinessLocations = locations as any[];
      
      if (branchId) {
        const profiles = await getProfilesAction(branchId);
        if (profiles) initialProfiles = profiles as any[];
      } else if (initialBusinessLocations.length > 0) {
        const defaultBusiness = initialBusinessLocations.find(b => b.is_default) || initialBusinessLocations[0];
        const profiles = await getProfilesAction(defaultBusiness.id);
        if (profiles) initialProfiles = profiles as any[];
      }
    } catch (error) {
       console.error("Error fetching initial SSR data:", error);
    }
  }

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>
      <body>
        <Providers
          initialBusinessLocations={initialBusinessLocations}
          initialProfiles={initialProfiles}
        >
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
