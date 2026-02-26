"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { BusinessProvider } from "@/contexts/BusinessContext";
import { ProfileProvider } from "@/contexts/ProfileContext";

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 1, // Retry failed queries once
                        staleTime: 5 * 60_000, // 5 minutes - data stays fresh
                        gcTime: 30 * 60_000, // 30 minutes - cache persists
                        refetchOnWindowFocus: false, // Prevent refetching on window focus
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <BusinessProvider>
                    <ProfileProvider>
                        {children}
                    </ProfileProvider>
                </BusinessProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
}
