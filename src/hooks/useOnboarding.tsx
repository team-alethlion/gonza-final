import { useState, useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useBusiness } from '@/contexts/BusinessContext';
import { useAuth } from '@/components/auth/AuthProvider';
import {
    getOnboardingStatusAction,
    getAccountStatusAction,
    upsertBusinessSettingsAction
} from '@/app/actions/business-settings';

export interface OnboardingData {
    id?: string;
    user_id?: string;
    location_id?: string;
    business_logo?: string;
    business_name: string;
    business_address: string;
    business_phone: string;
    business_email: string;
    nature_of_business?: string;
    business_size?: string;
    completed: boolean;
    is_frozen: boolean;
    created_at?: string;
    updated_at?: string;
}

const ONBOARDING_QUERY_KEY = 'businessOnboarding';

export const useOnboarding = () => {
    const { currentBusiness } = useBusiness();
    const { user } = useAuth();
    const queryClient = useQueryClient();

    // Fetch onboarding record for current business location
    const {
        data: onboarding,
        isLoading: isOnboardingLoading,
        refetch: refetchOnboarding,
    } = useQuery({
        queryKey: [ONBOARDING_QUERY_KEY, currentBusiness?.id],
        queryFn: async (): Promise<OnboardingData | null> => {
            if (!currentBusiness?.id || !user?.id) return null;

            const data = await getOnboardingStatusAction(currentBusiness.id);
            return data as unknown as OnboardingData | null;
        },
        enabled: !!currentBusiness?.id && !!user?.id,
        staleTime: 5 * 60_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: false,
    });

    // Fetch global freeze status (robust fallback)
    const {
        data: globalStatus,
        isLoading: isGlobalLoading,
        refetch: refetchGlobal,
    } = useQuery({
        queryKey: ['globalAccountStatus', user?.id],
        queryFn: async (): Promise<{ is_frozen: boolean, location_limit: number, billing_amount: number, billing_duration: string, days_remaining: number, next_billing_date: string } | null> => {
            if (!user?.id) return null;

            const data = await getAccountStatusAction(user.id);
            return data;
        },
        enabled: !!user?.id,
        staleTime: 10 * 1000,
        refetchInterval: 30000,
    });

    const isLoading = isOnboardingLoading || isGlobalLoading;
    const isCompleted = onboarding?.completed === true;
    const isFrozen = onboarding?.is_frozen === true || globalStatus?.is_frozen === true;

    const refetch = useCallback(() => {
        refetchOnboarding();
        refetchGlobal();
    }, [refetchOnboarding, refetchGlobal]);

    // Save (upsert) onboarding data
    const saveOnboarding = useCallback(
        async (formData: Omit<OnboardingData, 'id' | 'user_id' | 'location_id' | 'created_at' | 'updated_at'>): Promise<boolean> => {
            if (!currentBusiness?.id || !user?.id) {
                console.error('useOnboarding: No business or user found');
                return false;
            }

            try {
                const result = await upsertBusinessSettingsAction(currentBusiness.id, user.id, formData);

                if (!result.success) {
                    console.error('Error saving onboarding data:', result.error);
                    return false;
                }

                // Invalidate cache so RequiredSetupGate re-checks
                queryClient.invalidateQueries({ queryKey: [ONBOARDING_QUERY_KEY, currentBusiness.id] });
                queryClient.invalidateQueries({ queryKey: ['user-onboarding-complete', user.id] });

                return true;
            } catch (err) {
                console.error('Unexpected error saving onboarding:', err);
                return false;
            }
        },
        [currentBusiness?.id, user?.id, queryClient]
    );

    return {
        onboarding,
        isLoading,
        isCompleted,
        isFrozen,
        locationLimit: globalStatus?.location_limit || 1,
        billingAmount: globalStatus?.billing_amount || 50000,
        billingDuration: globalStatus?.billing_duration || 'Monthly',
        daysRemaining: globalStatus?.days_remaining || 0,
        nextBillingDate: globalStatus?.next_billing_date,
        saveOnboarding,
        refetch,
    };
};
