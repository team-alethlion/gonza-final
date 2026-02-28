"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { useBusinessPassword } from '@/hooks/useBusinessPassword';
import { useQuery } from '@tanstack/react-query';
import { toast } from '@/hooks/use-toast';
import { getBusinessLocationsAction, createBusinessAction, updateBusinessAction, deleteBusinessAction, resetBusinessAction } from '@/app/actions/business';


export interface BusinessLocation {
  id: string;
  name: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
  switch_password_hash?: string;
}

interface BusinessContextType {
  currentBusiness: BusinessLocation | null;
  businessLocations: BusinessLocation[];
  switchBusiness: (businessId: string, onPasswordPrompt?: (businessId: string, businessName: string, onVerified: () => void) => void) => void;
  loadBusinessLocations: () => Promise<void>;
  createBusiness: (name: string) => Promise<BusinessLocation | null>;
  updateBusiness: (id: string, name: string) => Promise<boolean>;
  deleteBusiness: (id: string) => Promise<boolean>;
  resetBusiness: (id: string) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
  locationLimit: number;
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};

export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [currentBusiness, setCurrentBusiness] = useState<BusinessLocation | null>(null);
  const [businessLocations, setBusinessLocations] = useState<BusinessLocation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isBusinessVerified } = useBusinessPassword();

  // Static default – limit can be driven from Prisma user profile if needed.
  const locationLimit = 3;


  const getStorageKey = () => user ? `selected_business_${user.id}` : null;

  const loadBusinessLocations = async () => {
    console.log('BusinessContext: loadBusinessLocations starting, user:', user?.id);
    if (!user) {
      setIsLoading(false);
      setError(null);
      setCurrentBusiness(null);
      setBusinessLocations([]);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const data = await getBusinessLocationsAction(user.id);
      console.log('BusinessContext: getBusinessLocationsAction result:', data?.length, 'locations found');

      if (!data) {
        throw new Error('Failed to load locations');
      }

      setBusinessLocations((data as any) || []);

      // Always try to set a current business if we have locations
      if (data && data.length > 0) {
        // First check localStorage for saved business
        const storageKey = getStorageKey();
        const savedBusinessId = storageKey ? localStorage.getItem(storageKey) : null;
        let businessToSet = (data as any[]).find(b => b.id === savedBusinessId);

        // If no saved business or saved business not found, use default or first
        if (!businessToSet) {
          businessToSet = (data as any[]).find(b => b.is_default) || data[0];
        }

        if (businessToSet) {
          console.log('BusinessContext: Setting current business to:', businessToSet.name);
          setCurrentBusiness(businessToSet);
          if (storageKey) {
            localStorage.setItem(storageKey, businessToSet.id);
          }
        }
      } else {
        console.log('BusinessContext: No locations found');
        // No business locations found, clear current business
        setCurrentBusiness(null);
        const storageKey = getStorageKey();
        if (storageKey) {
          localStorage.removeItem(storageKey);
        }
      }
    } catch (error) {
      console.error('Error loading business locations:', error);
      setError('Failed to load business data');
      setCurrentBusiness(null);
      setBusinessLocations([]);
    } finally {
      setIsLoading(false);
    }
  };

  const switchBusiness = (businessId: string, onPasswordPrompt?: (businessId: string, businessName: string, onVerified: () => void) => void) => {
    const business = businessLocations.find(b => b.id === businessId);
    if (!business) {
      console.error('Business not found:', businessId);
      return;
    }

    // If business has password protection and is not verified in this session
    if (business.switch_password_hash && !isBusinessVerified(businessId)) {
      if (onPasswordPrompt) {
        onPasswordPrompt(businessId, business.name, () => {
          // This callback is called after successful password verification
          setCurrentBusiness(business);
          const storageKey = getStorageKey();
          if (storageKey) {
            localStorage.setItem(storageKey, business.id);
          }
        });
        return;
      } else {
        console.warn('Password required but no prompt handler provided');
        return;
      }
    }

    // No password protection or already verified
    setCurrentBusiness(business);
    const storageKey = getStorageKey();
    if (storageKey) {
      localStorage.setItem(storageKey, business.id);
    }
  };

  const createBusiness = async (name: string): Promise<BusinessLocation | null> => {
    if (!user) {
      console.error('No user found when creating business');
      return null;
    }

    try {
      // Check location limit
      if (businessLocations.length >= locationLimit) {
        toast({
          title: "Limit Reached",
          description: `You have reached the maximum allowed limit of ${locationLimit} locations. Please contact support to increase your limit.`,
          variant: "destructive"
        });
        return null;
      }

      const response = await createBusinessAction(user.id, name.trim());

      if (!response.success || !response.data) {
        console.error('Error creating business:', response.error);
        throw new Error(response.error || 'Unknown error');
      }

      const data = response.data;

      if (data) {
        const newBusiness: BusinessLocation = {
          id: (data as any).id,
          name: (data as any).name,
          is_default: (data as any).is_default,
          created_at: (data as any).created_at,
          updated_at: (data as any).updated_at,
          switch_password_hash: (data as any).switch_password_hash
        };

        setBusinessLocations(prev => [...prev, newBusiness]);

        // If this is the first business or it's set as default, make it current
        if (businessLocations.length === 0 || newBusiness.is_default) {
          setCurrentBusiness(newBusiness);
          const storageKey = getStorageKey();
          if (storageKey) {
            localStorage.setItem(storageKey, newBusiness.id);
          }
        }

        return newBusiness;
      }

      return null;
    } catch (error) {
      console.error('Error creating business:', error);
      return null;
    }
  };

  const updateBusiness = async (id: string, name: string): Promise<boolean> => {
    if (!user) return false;

    try {
      const response = await updateBusinessAction(id, user.id, name);

      if (!response.success) {
        throw new Error(response.error);
      }

      const data = response.data;

      if (data) {
        const updatedBusiness: BusinessLocation = {
          id: (data as any).id,
          name: (data as any).name,
          is_default: (data as any).is_default,
          created_at: (data as any).created_at,
          updated_at: (data as any).updated_at,
          switch_password_hash: (data as any).switch_password_hash
        };

        setBusinessLocations(prev => prev.map(b => b.id === id ? updatedBusiness : b));

        if (currentBusiness?.id === id) {
          setCurrentBusiness(updatedBusiness);
        }

        return true;
      }

      return false;
    } catch (error) {
      console.error('Error updating business:', error);
      return false;
    }
  };

  const deleteBusiness = async (id: string): Promise<boolean> => {
    if (!user) return false;

    try {
      const response = await deleteBusinessAction(id, user.id);

      if (!response.success) throw new Error(response.error);

      setBusinessLocations(prev => prev.filter(b => b.id !== id));

      // If deleted business was current, switch to default or first available
      if (currentBusiness?.id === id) {
        const remaining = businessLocations.filter(b => b.id !== id);
        const defaultBusiness = remaining.find(b => b.is_default);
        const nextBusiness = defaultBusiness || remaining[0] || null;

        setCurrentBusiness(nextBusiness);
        const storageKey = getStorageKey();
        if (storageKey) {
          if (nextBusiness) {
            localStorage.setItem(storageKey, nextBusiness.id);
          } else {
            localStorage.removeItem(storageKey);
          }
        }
      }

      return true;
    } catch (error) {
      console.error('Error deleting business:', error);
      return false;
    }
  };

  const resetBusiness = async (id: string): Promise<boolean> => {
    if (!user) {
      console.error('No user found when resetting business');
      return false;
    }

    try {
      const response = await resetBusinessAction(id, user.id);
      if (!response.success) throw new Error(response.error);

      // Reload business locations to refresh the data
      await loadBusinessLocations();

      return true;
    } catch (error) {
      console.error('Error resetting business:', error);
      return false;
    }
  };

  useEffect(() => {
    if (user) {
      loadBusinessLocations();
    } else {
      setCurrentBusiness(null);
      setBusinessLocations([]);
      setIsLoading(false);
      setError(null);
      // We don't remove user-specific keys here as they will be ignored next time
    }
  }, [user?.id]);

  return (
    <BusinessContext.Provider
      value={{
        currentBusiness,
        businessLocations,
        switchBusiness,
        loadBusinessLocations,
        createBusiness,
        updateBusiness,
        deleteBusiness,
        resetBusiness,
        isLoading,
        error,
        locationLimit
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};
