import { useState, useEffect, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useBusiness } from '@/contexts/BusinessContext';
import { useAuth } from '@/components/auth/AuthProvider';

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

            const { data, error } = await (supabase
                .from('business_onboarding' as any)
                .select('*')
                .eq('location_id', currentBusiness.id)
                .maybeSingle()) as { data: any; error: any };

            if (error && error.code !== 'PGRST116') {
                console.error('Error fetching onboarding data:', error);
                throw error;
            }

            return data as OnboardingData | null;
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

            const { data, error } = await (supabase as any).rpc('get_my_account_status');

            if (error) {
                console.error('Error fetching global account status:', error);
                return { is_frozen: false, location_limit: 1, billing_amount: 50000, billing_duration: 'Monthly', days_remaining: 30, next_billing_date: '' }; // Fallback to safe state
            }

            // data is an array since it returns TABLE
            const statusArray = (data as any[]) || [];
            return (statusArray[0] || { is_frozen: false, location_limit: 1, billing_amount: 50000, billing_duration: 'Monthly', days_remaining: 30, next_billing_date: '' }) as any;
        },
        enabled: !!user?.id,
        staleTime: 10 * 1000,
        refetchInterval: 30000, // Poll every 30 seconds for real-time expiration enforcement
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
                const payload = {
                    user_id: user.id,
                    location_id: currentBusiness.id,
                    business_logo: formData.business_logo ?? null,
                    business_name: formData.business_name,
                    business_address: formData.business_address,
                    business_phone: formData.business_phone,
                    business_email: formData.business_email,
                    nature_of_business: formData.nature_of_business ?? null,
                    business_size: formData.business_size ?? null,
                    completed: formData.completed,
                };

                const { error } = await (supabase
                    .from('business_onboarding' as any)
                    .upsert(payload, { onConflict: 'location_id' })
                    .select()
                    .single()) as { data: any; error: any };

                if (error) {
                    console.error('Error saving onboarding data:', error);
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
