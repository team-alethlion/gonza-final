"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProfilesAction, createProfileAction, updateProfileAction, deleteProfileAction } from '@/app/actions/profiles';
import { useBusiness } from './BusinessContext';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from 'sonner';

export interface BusinessRole {
  id: string;
  business_location_id: string;
  name: string;
  description?: string | null;
  permissions: Record<string, string[]>;
  created_at: string;
  updated_at: string;
}

export interface BusinessProfile {
  id: string;
  business_location_id: string;
  profile_name: string;
  email: string;
  phone_number?: string;
  role: string;
  pin: string;
  role_id: string | null;
  business_role?: BusinessRole;
  is_active: boolean;
  sms_credits: number;
  created_by: string;
  created_at: string;
  updated_at: string;
}

interface ProfileContextType {
  profiles: BusinessProfile[];
  currentProfile: BusinessProfile | null;
  isProfileVerified: boolean;
  isLoading: boolean;
  setCurrentProfile: (profile: BusinessProfile | null) => void;
  loadProfiles: () => Promise<void>;
  createProfile: (data: Omit<BusinessProfile, 'id' | 'created_at' | 'updated_at' | 'created_by' | 'business_location_id' | 'business_role'>) => Promise<BusinessProfile | null>;
  updateProfile: (id: string, data: Partial<BusinessProfile>) => Promise<boolean>;
  deleteProfile: (id: string) => Promise<boolean>;
  toggleProfileStatus: (id: string, isActive: boolean) => Promise<boolean>;
  verifyPin: (pin: string) => Promise<boolean>;
  changePin: (oldPin: string, newPin: string) => Promise<boolean>;
  resetProfilePin: (id: string, newPin: string) => Promise<boolean>;
  logoutProfile: () => Promise<void>;
  hasPermission: (module: string, action?: string) => boolean;
  isFirstTimeSetupNeeded: boolean;
  dismissFirstTimeSetup: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const userId = user?.id;
  const { currentBusiness, isLoading: businessLoading } = useBusiness();
  const { signOut } = useAuth();
  const [profiles, setProfiles] = useState<BusinessProfile[]>([]);
  const [currentProfile, setCurrentProfile] = useState<BusinessProfile | null>(null);
  const [isProfileVerified, setIsProfileVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstTimeSetupNeeded, setIsFirstTimeSetupNeeded] = useState(false);

  // Restore verification state from sessionStorage when business and profile are loaded
  useEffect(() => {
    if (currentBusiness?.id && currentProfile?.id && !isProfileVerified) {
      const verifiedKey = `profileVerified_${currentBusiness.id}_${currentProfile.id}`;
      const isVerified = sessionStorage.getItem(verifiedKey) === 'true';
      if (isVerified) {
        setIsProfileVerified(true);
      }
    }
  }, [currentBusiness?.id, currentProfile?.id, isProfileVerified]);

  const loadProfiles = async () => {
    if (!userId || !currentBusiness?.id) return;

    setIsLoading(true);
    try {
      const data = await getProfilesAction(currentBusiness.id);
      setProfiles(data as unknown as BusinessProfile[]);
    } catch (error) {
      console.error('Error loading profiles:', error);
      toast.error('Failed to load profiles');
    } finally {
      setIsLoading(false);
    }
  };

  const createProfile = async (data: Omit<BusinessProfile, 'id' | 'created_at' | 'updated_at' | 'created_by' | 'business_location_id'>): Promise<BusinessProfile | null> => {
    if (!userId || !currentBusiness?.id) return null;

    try {
      const result = await createProfileAction(currentBusiness.id, data);

      if (!result.success) {
        throw new Error(result.error);
      }

      // Re-fetch profiles to get the full joined data (especially business_role)
      await loadProfiles();

      toast.success(`Profile "${data.profile_name}" created successfully`);
      return result.data as unknown as BusinessProfile;
    } catch (error) {
      console.error('Error creating profile:', error);
      toast.error('Failed to create profile');
      return null;
    }
  };

  const updateProfile = async (id: string, data: Partial<BusinessProfile>): Promise<boolean> => {
    try {
      const result = await updateProfileAction(id, data);

      if (!result.success) throw new Error(result.error);

      // Re-fetch profiles to get the updated joined data
      await loadProfiles();

      toast.success('Profile updated successfully');
      return true;
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
      return false;
    }
  };

  const deleteProfile = async (id: string): Promise<boolean> => {
    try {
      const result = await deleteProfileAction(id);

      if (!result.success) throw new Error(result.error);

      setProfiles(prev => prev.filter(profile => profile.id !== id));

      if (currentProfile?.id === id) {
        setCurrentProfile(null);
      }

      toast.success('Profile deleted successfully');
      return true;
    } catch (error) {
      console.error('Error deleting profile:', error);
      toast.error('Failed to delete profile');
      return false;
    }
  };

  const toggleProfileStatus = async (id: string, isActive: boolean): Promise<boolean> => {
    return updateProfile(id, { is_active: isActive });
  };

  const verifyPin = async (pin: string): Promise<boolean> => {
    if (!currentProfile) return false;

    if (currentProfile.pin === pin) {
      setIsProfileVerified(true);

      // Save verification to sessionStorage (persists during page reload)
      if (currentBusiness?.id && currentProfile?.id) {
        sessionStorage.setItem(`profileVerified_${currentBusiness.id}_${currentProfile.id}`, 'true');
      }

      // Check if user is using default PIN and hasn't dismissed the setup dialog yet
      if (pin === '0000' && currentBusiness?.id) {
        const dismissedKey = `firstTimeSetupDismissed_${currentBusiness.id}_${currentProfile.id}`;
        const wasDismissed = localStorage.getItem(dismissedKey) === 'true';
        if (!wasDismissed) {
          setIsFirstTimeSetupNeeded(true);
        }
      }

      return true;
    }

    toast.error('Incorrect PIN');
    return false;
  };

  const changePin = async (oldPin: string, newPin: string): Promise<boolean> => {
    if (!currentProfile) return false;

    if (currentProfile.pin !== oldPin) {
      toast.error('Current PIN is incorrect');
      return false;
    }

    if (newPin.length !== 4 || !/^\d+$/.test(newPin)) {
      toast.error('PIN must be 4 digits');
      return false;
    }

    const success = await updateProfile(currentProfile.id, { pin: newPin });
    if (success) {
      toast.success('PIN changed successfully');

      // Clear the first-time setup dismissed flag since PIN is no longer default
      if (currentBusiness?.id && oldPin === '0000') {
        const dismissedKey = `firstTimeSetupDismissed_${currentBusiness.id}_${currentProfile.id}`;
        localStorage.removeItem(dismissedKey);
      }
    }
    return success;
  };

  const resetProfilePin = async (id: string, newPin: string): Promise<boolean> => {
    // This method is intended for owners/admins to reset PINs without the old one
    if (newPin.length !== 4 || !/^\d+$/.test(newPin)) {
      toast.error('PIN must be 4 digits');
      return false;
    }

    const success = await updateProfile(id, { pin: newPin });
    if (success) {
      toast.success('PIN reset successfully');
    }
    return success;
  };

  const logoutProfile = async () => {
    // Clear sessionStorage verification for current profile
    if (currentBusiness?.id && currentProfile?.id) {
      sessionStorage.removeItem(`profileVerified_${currentBusiness.id}_${currentProfile.id}`);
    }

    // Clear profile state
    setCurrentProfile(null);
    setIsProfileVerified(false);
    setIsFirstTimeSetupNeeded(false);
    if (currentBusiness?.id) {
      localStorage.removeItem(`currentProfile_${currentBusiness.id}`);
    }

    // Sign out of Supabase session
    await signOut();
  };

  const dismissFirstTimeSetup = () => {
    setIsFirstTimeSetupNeeded(false);
    // Remember that user has dismissed this dialog for this profile
    if (currentBusiness?.id && currentProfile?.id) {
      const dismissedKey = `firstTimeSetupDismissed_${currentBusiness.id}_${currentProfile.id}`;
      localStorage.setItem(dismissedKey, 'true');
    }
  };

  const hasPermission = (module: string, action: string = 'view'): boolean => {
    if (!currentProfile) return false;

    // Default Owner permission if role field is 'owner' (backward compatibility) OR if the assigned role is named 'Owner'
    if (currentProfile.role === 'owner' || currentProfile.business_role?.name === 'Owner') return true;

    const permissions = currentProfile.business_role?.permissions;
    if (!permissions) {
      // Fallback for default permissions based on the text role field if no business_role is assigned
      if (currentProfile.role === 'manager') {
        // Managers get view/create/edit on most things
        const managerModules = ['sales', 'inventory', 'customers', 'messages', 'tasks'];
        if (managerModules.includes(module.toLowerCase())) {
          return true;
        }
      }
      if (currentProfile.role === 'staff') {
        // Staff get view on most, create on sales/tasks
        if (action === 'view') return true;
        if (['sales', 'tasks'].includes(module.toLowerCase()) && action === 'create') return true;
      }
      return false;
    }

    const modulePermissions = permissions[module.toLowerCase()];
    if (!modulePermissions) return false;

    return modulePermissions.includes(action.toLowerCase());
  };

  // Load profiles when business changes
  useEffect(() => {
    console.log('ProfileContext: Business/User changed', {
      businessId: currentBusiness?.id,
      businessLoading,
      userId
    });

    // Reset profile state immediately when business or user changes
    setProfiles([]);
    setCurrentProfile(null);
    setIsProfileVerified(false);
    setIsFirstTimeSetupNeeded(false);

    // If business is still loading, stay in loading state
    if (businessLoading) {
      console.log('ProfileContext: Business still loading, keeping spinner');
      setIsLoading(true);
      return;
    }

    if (currentBusiness?.id) {
      console.log('ProfileContext: Calling loadProfiles');
      loadProfiles();
    } else {
      console.log('ProfileContext: No business found, clearing profiles');
      setIsLoading(false);
    }
  }, [currentBusiness?.id, businessLoading, userId]);

  // Load current profile from localStorage or auto-select first profile
  useEffect(() => {
    if (profiles.length > 0 && currentBusiness?.id && !currentProfile) {
      const savedProfileId = localStorage.getItem(`currentProfile_${currentBusiness.id}`);
      if (savedProfileId) {
        const profile = profiles.find(p => p.id === savedProfileId);
        if (profile) {
          console.log(`ProfileContext: Restoring profile ${profile.profile_name} from localStorage`);
          setCurrentProfile(profile);
          setIsProfileVerified(false);
          return;
        }
      }

      // Auto-select if there is only one profile and none is selected
      if (profiles.length === 1 && !currentProfile) {
        console.log(`ProfileContext: Auto-selecting single profile ${profiles[0].profile_name}`);
        handleSetCurrentProfile(profiles[0]);
      } else if (profiles.length > 1 && !currentProfile) {
        console.log(`ProfileContext: Multiple profiles available (${profiles.length}), waiting for selection`);
      }
    }
  }, [profiles, currentBusiness?.id, currentProfile]);

  // Save current profile to localStorage
  const handleSetCurrentProfile = (profile: BusinessProfile | null) => {
    setCurrentProfile(profile);
    setIsProfileVerified(false); // Reset verification on manual switch

    if (currentBusiness?.id) {
      if (profile) {
        localStorage.setItem(`currentProfile_${currentBusiness.id}`, profile.id);
        // Clear verification from sessionStorage when switching profiles
        sessionStorage.removeItem(`profileVerified_${currentBusiness.id}_${profile.id}`);
      } else {
        localStorage.removeItem(`currentProfile_${currentBusiness.id}`);
      }
    }
  };

  // Keep currentProfile in sync with fresh data from profiles list
  useEffect(() => {
    if (currentProfile && profiles.length > 0) {
      const freshProfile = profiles.find(p => p.id === currentProfile.id);
      if (freshProfile) {
        // Only update if something actually changed to avoid infinite loops
        const { business_role: oldRole, ...oldData } = currentProfile;
        const { business_role: newRole, ...newData } = freshProfile;

        const dataChanged = JSON.stringify(oldData) !== JSON.stringify(newData);
        const roleChanged = JSON.stringify(oldRole) !== JSON.stringify(newRole);

        if (dataChanged || roleChanged) {
          setCurrentProfile(freshProfile);
        }
      }
    }
  }, [profiles]);

  return (
    <ProfileContext.Provider value={{
      profiles,
      currentProfile,
      isProfileVerified,
      isLoading,
      setCurrentProfile: handleSetCurrentProfile,
      loadProfiles,
      createProfile,
      updateProfile,
      deleteProfile,
      toggleProfileStatus,
      verifyPin,
      changePin,
      resetProfilePin,
      logoutProfile,
      hasPermission,
      isFirstTimeSetupNeeded,
      dismissFirstTimeSetup
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfiles = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfiles must be used within a ProfileProvider');
  }
  return context;
};