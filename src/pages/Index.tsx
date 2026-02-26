import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfiles } from '@/contexts/ProfileContext';
import UpdateNotificationButton from '@/components/UpdateNotificationButton';
import DashboardSkeleton from '@/components/dashboard/DashboardSkeleton';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import QuickActionButtons from '@/components/dashboard/QuickActionButtons';
import WelcomeState from '@/components/dashboard/WelcomeState';
import ErrorState from '@/components/dashboard/ErrorState';
import { useDashboardData } from '@/hooks/useDashboardData';
import { useDashboardActions } from '@/hooks/useDashboardActions';

// Lazy load the heavy analytics dashboard
const AnalyticsDashboard = lazy(() => import('@/components/AnalyticsDashboard'));

const Index = () => {
  const { hasPermission, isLoading: profilesLoading } = useProfiles();
  const navigate = useNavigate();
  const {
    businessError,
    settings,
    sales,
    pageTitle,
    nonQuoteSalesCount,
    isLoading,
    updateAvailable,
    isUpdating,
    triggerUpdate
  } = useDashboardData();

  const { isRefreshing, handleRefresh, handleQuickCreate } = useDashboardActions();

  // Handle loading and permissions
  if (profilesLoading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Dashboard is accessible to everyone, but data is masked inside components based on permissions
  const showWelcome = !isLoading && nonQuoteSalesCount === 0;

  return (
    <>
      <DashboardHeader
        pageTitle={pageTitle}
        isRefreshing={isRefreshing}
        isLoading={isLoading}
        onRefresh={handleRefresh}
      />

      {/* Update Notification Button */}
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
          {/* While loading, dashboard skeleton shows; once ready, render analytics */}
          <AnalyticsDashboard sales={sales} currency={settings.currency} />
        </Suspense>
      )}
    </>
  );
};

export default Index;
