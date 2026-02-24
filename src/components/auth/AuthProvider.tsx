
import * as React from 'react';
import { useState, useEffect, useContext, createContext } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User, Session, AuthError } from '@supabase/supabase-js';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string, options?: { data?: Record<string, any> }) => Promise<{ error: AuthError | null; user?: User | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialCheckComplete, setInitialCheckComplete] = useState(false);

  useEffect(() => {
    let mounted = true;

    console.log('AuthProvider: Setting up auth state listener');

    // Set up the auth state change listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      console.log('Auth state change:', event, {
        userId: newSession?.user?.id,
        hasSession: !!newSession,
        sessionExpiry: newSession?.expires_at,
        provider: newSession?.user?.app_metadata?.provider,
        url: window.location.href
      });

      if (!mounted) return;

      // Handle different auth events
      switch (event) {
        case 'SIGNED_IN':
          console.log('User signed in successfully');
          // Check if this is a password recovery flow
          const isRecovery = window.location.hash.includes('type=recovery');
          if (isRecovery) {
            console.log('Password recovery detected, staying on reset page');
          }
          // Clear any loading states immediately
          setLoading(false);
          break;
        case 'SIGNED_OUT':
          console.log('User signed out');
          break;
        case 'TOKEN_REFRESHED':
          console.log('Token refreshed successfully');
          break;
        case 'USER_UPDATED':
          console.log('User updated');
          break;
        case 'PASSWORD_RECOVERY':
          console.log('Password recovery initiated');
          break;
      }

      // Only update state if session or user has actually changed
      const sessionChanged = newSession?.access_token !== session?.access_token ||
        newSession?.user?.id !== session?.user?.id;

      if (sessionChanged) {
        setSession(newSession);
        setUser(newSession?.user ?? null);
      }

      // Always set loading to false after any auth state change
      if (initialCheckComplete || event === 'SIGNED_IN') {
        setLoading(false);
      }
    });

    // Check for existing session
    const initializeAuth = async () => {
      try {
        // Check if we're handling an OAuth callback
        const isOAuthCallback = window.location.hash.includes('access_token') ||
          window.location.search.includes('code=');

        if (isOAuthCallback) {
          // For OAuth callbacks, wait a bit for the session to be established
          await new Promise(resolve => setTimeout(resolve, 1000));
        }

        const { data: { session: currentSession }, error } = await supabase.auth.getSession();

        if (error) {
          console.error('Error getting session:', error);
          throw error;
        }

        if (!mounted) return;

        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setInitialCheckComplete(true);

        // If we have a valid session, verify it's not expired
        if (currentSession) {
          const now = Math.floor(Date.now() / 1000);
          const expiresAt = currentSession.expires_at || 0;

          if (expiresAt < now) {
            try {
              const { data: { session: refreshedSession }, error: refreshError } = await supabase.auth.refreshSession();
              if (refreshError) {
                console.error('Error refreshing session:', refreshError);
                setSession(null);
                setUser(null);
              } else {
                setSession(refreshedSession);
                setUser(refreshedSession?.user ?? null);
              }
            } catch (refreshError) {
              console.error('Unexpected error refreshing session:', refreshError);
              setSession(null);
              setUser(null);
            }
          }
        }
      } catch (error) {
        console.error('Error during auth initialization:', error);
        if (!mounted) return;
        setUser(null);
        setSession(null);
        setInitialCheckComplete(true);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    initializeAuth();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []); // Only run once on mount

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        }
      });

      if (error) {
        console.error('Google sign in error:', error);
        throw error;
      }
    } catch (error) {
      console.error('Unexpected error during Google sign in:', error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, options?: { data?: Record<string, any> }) => {
    const userData = {
      ...options?.data
    };

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
          emailRedirectTo: `${window.location.origin}/login`
        }
      });

      if (error) {
        console.error('Signup error details:', error.message, error.status);
      }

      return { error, user: data?.user };
    } catch (e) {
      console.error('Unexpected error during signup:', e);
      return { error: e as AuthError, user: null };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut({
        scope: 'local'
      });

      if (error) {
        console.error('Logout error:', error);
        throw error;
      }

      toast.success('Successfully signed out');

      // Clear state
      setUser(null);
      setSession(null);

      // Clear any cached auth data and business password verifications
      try {
        localStorage.removeItem('sb-ujgxxcgemmfmfsbngnqo-auth-token');
        // Clear verified businesses so password is required again on re-login
        sessionStorage.removeItem('verified_businesses');
      } catch (storageError) {
        console.warn('Error clearing localStorage:', storageError);
      }

    } catch (error) {
      console.error('Unexpected error during logout:', error);
      toast.error('Error signing out');
      // Still clear state even if there's an error
      setUser(null);
      setSession(null);
    }
  };

  const resetPassword = async (email: string) => {
    const redirectUrl = `${window.location.origin}/reset-password`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl,
    });
    if (error) {
      console.error('Password reset error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
      signInWithGoogle,
      signUp,
      signOut,
      resetPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
