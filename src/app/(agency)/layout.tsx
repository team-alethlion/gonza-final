import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import "@/app/(agency)/globals.css";

import { Providers } from "@/components/Providers";
import AgencyLayout from "@/components/AgencyLayout";

export const metadata: Metadata = {
  title: "Gonza Systems",
  description: "Sales and Inventory Tracking Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body>
        <Providers>
          <AgencyLayout>
            {children}
          </AgencyLayout>
        </Providers>
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}
