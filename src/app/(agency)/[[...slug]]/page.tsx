"use client";

import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/components/auth/AuthProvider";
import { BusinessProvider } from "@/contexts/BusinessContext";
import { ProfileProvider } from "@/contexts/ProfileContext";
import Layout from "@/components/Layout";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { WifiOff, RefreshCw } from "lucide-react";
import { useSaleNotifications } from "@/hooks/useNotifications";
import { RequiredSetupGate } from "@/components/auth/RequiredSetupGate";
import { SubscriptionGate } from "@/components/auth/SubscriptionGate";
import React, { useState, Suspense, lazy, useEffect } from "react";

// Lazy load all page components for code splitting
// ⚡️ Critical routes loaded first (likely to be accessed immediately)
const Index = lazy(() => import("@/pages/Index"));
const Login = lazy(() => import("@/pages/Login"));
const SignUp = lazy(() => import("@/pages/SignUp"));
const LandingPage = lazy(() => import("@/pages/LandingPage"));

// 📊 Main feature routes
const Sales = lazy(() => import("@/pages/Sales"));
const NewSale = lazy(() => import("@/pages/NewSale"));
const Expenses = lazy(() => import("@/pages/Expenses"));
const Inventory = lazy(() => import("@/pages/Inventory"));
const Cash = lazy(() => import("@/pages/Cash"));

// 🛠️ Secondary feature routes
const Products = lazy(() => import("@/pages/Products"));
const Categories = lazy(() => import("@/pages/Categories"));
const NewProduct = lazy(() => import("@/pages/NewProduct"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const CarriageInwards = lazy(() => import("@/pages/CarriageInwards"));
const StockReconciliationPage = lazy(() => import("@/pages/StockReconciliationPage"));
const CashAccount = lazy(() => import("@/pages/CashAccount"));
const Messages = lazy(() => import("@/pages/Messages"));
const Tasks = lazy(() => import("@/pages/Tasks"));
const HistoryPage = lazy(() => import("@/pages/History"));

// ⚙️ Settings and utility routes
const BusinessSettings = lazy(() => import("@/components/BusinessSettings"));
const PaymentCallback = lazy(() => import("@/pages/PaymentCallback"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const DeletePersonalData = lazy(() => import("@/pages/DeletePersonalData"));
const Help = lazy(() => import("@/pages/Help"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Onboarding = lazy(() => import("@/pages/Onboarding"));
const BillingHistory = lazy(() => import("@/pages/BillingHistory"));

// Create a new QueryClient with defaultOptions that include retry configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry failed queries once
      staleTime: 5 * 60_000, // 5 minutes - data stays fresh
      gcTime: 30 * 60_000, // 30 minutes - cache persists
      refetchOnWindowFocus: false, // Prevent refetching on window focus
    },
  },
});

const AuthenticatedApp = () => {
  const { user, loading } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    setIsOffline(!navigator.onLine);
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useSaleNotifications();

  const handleRefresh = () => {
    setIsRefreshing(true);
    window.location.reload();
  };

  // Check if user is offline - show this regardless of loading state
  if (isOffline) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <img
            src="/lovable-uploads/798d07d7-1db7-498c-92f3-6f6346827d59.png"
            alt="Gonzo Systems Logo"
            className="h-16 mx-auto mb-6"
          />
          <WifiOff className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">No Internet Connection</h2>
          <p className="text-gray-600 mb-6">
            Please check your internet connection and try again. Make sure you're connected to WiFi or mobile data.
          </p>
          <Button
            onClick={handleRefresh}
            className="gap-2"
            size="lg"
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Refreshing...' : 'Refresh App'}
          </Button>
        </div>
      </div>
    );
  }

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner message="Loading authentication..." />
      </div>
    );
  }

  // If no user, show public routes
  if (!user) {
    return (
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><LoadingSpinner message="Loading..." /></div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/delete-personal-data" element={<DeletePersonalData />} />
          <Route path="/payment-callback" element={<PaymentCallback />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    );
  }

  // If user is authenticated, show protected routes
  return (
    <BusinessProvider>
      <ProfileProvider>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><LoadingSpinner message="Loading page..." /></div>}>
          <Routes>
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/signup" element={<Navigate to="/" replace />} />
            <Route path="/delete-personal-data" element={<DeletePersonalData />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route
              element={
                <SubscriptionGate>
                  <RequiredSetupGate>
                    <Layout />
                  </RequiredSetupGate>
                </SubscriptionGate>
              }
            >
              <Route path="/" element={<Index />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/new-sale" element={<NewSale />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/settings" element={<BusinessSettings />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* Inventory routes - specific routes first, then dynamic routes */}
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/inventory/carriage-inwards" element={<CarriageInwards />} />
              <Route path="/inventory/reconcile" element={<StockReconciliationPage />} />
              <Route path="/inventory/new" element={<NewProduct />} />
              <Route path="/inventory/edit/:id" element={<NewProduct />} />
              <Route path="/inventory/:id" element={<ProductDetail />} />
              <Route path="/products" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
              {/* Cash routes */}
              <Route path="/cash" element={<Cash />} />
              <Route path="/cash/:accountId" element={<CashAccount />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/payment-callback" element={<PaymentCallback />} />
              {/* Tasks route */}
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/billing" element={<BillingHistory />} />
              {/* Help route */}
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ProfileProvider>
    </BusinessProvider>
  );
};

// The App component with corrected provider ordering
function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <AuthenticatedApp />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
