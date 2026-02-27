"use client";

import React, { Suspense, lazy } from "react";
import { useProfiles } from "@/contexts/ProfileContext";
import UpdateNotificationButton from "@/components/UpdateNotificationButton";
import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import QuickActionButtons from "@/components/dashboard/QuickActionButtons";
import WelcomeState from "@/components/dashboard/WelcomeState";
import { useDashboardData } from "@/hooks/useDashboardData";
import { useDashboardActions } from "@/hooks/useDashboardActions";

// Lazy load the heavy analytics dashboard
const AnalyticsDashboard = lazy(
  () => import("@/components/AnalyticsDashboard"),
);

export default function AgencyDashboardClient() {
  const { isLoading: profilesLoading } = useProfiles();
  const {
    settings,
    sales,
    pageTitle,
    nonQuoteSalesCount,
    isLoading,
    updateAvailable,
    isUpdating,
    triggerUpdate,
  } = useDashboardData();

  const { isRefreshing, handleRefresh, handleQuickCreate } =
    useDashboardActions();

  if (profilesLoading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const showWelcome = !isLoading && nonQuoteSalesCount === 0;

  return (
    <>
      <DashboardHeader
        pageTitle={pageTitle}
        isRefreshing={isRefreshing}
        isLoading={isLoading}
        onRefresh={handleRefresh}
      />

      {updateAvailable && (
        <UpdateNotificationButton
          onUpdate={triggerUpdate}
          isUpdating={isUpdating}
        />
      )}

      <QuickActionButtons onQuickCreate={handleQuickCreate} />

      {showWelcome ? (
        <WelcomeState />
      ) : (
        <Suspense fallback={<DashboardSkeleton />}>
          <AnalyticsDashboard sales={sales} currency={settings.currency} />
        </Suspense>
      )}
    </>
  );
}
