"use client";

import * as React from 'react';
import { useState, useContext, createContext, useEffect } from 'react';
import { toast } from 'sonner';
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut, useSession } from 'next-auth/react';

import { signInAction, signUpAction } from '@/app/actions/auth';

// Simplified type declarations for our mock
interface User {
  id: string;
  email?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string, options?: { data?: Record<string, any> }) => Promise<{ error: Error | null; user?: User | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Sync with next-auth session
  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      setUser({
        id: session.user.id || '',
        email: session.user.email || undefined
      });
    } else if (status === 'unauthenticated') {
      setUser(null);
    }
    setLoading(status === 'loading');
  }, [session, status]);

  const signIn = async (email: string, password: string) => {
    const result = await nextAuthSignIn('credentials', {
      email,
      password,
      redirect: false
    });

    if (result?.error) {
      throw new Error(result.error);
    }
    
    toast.success('Signed in successfully');
  };

  const signInWithGoogle = async () => {
    await nextAuthSignIn('google', { callbackUrl: '/' });
  };

  const signUp = async (email: string, password: string, options?: { data?: Record<string, any> }) => {
    const result = await signUpAction({ email, password, name: options?.data?.name });
    if (result.success && result.user) {
      // Auto-signin with NextAuth after successful signup
      await nextAuthSignIn('credentials', {
        email,
        password,
        redirect: false
      });
      
      toast.success('Account created and signed in successfully.');
      return { error: null, user: result.user };
    } else {
      return { error: new Error(result.error || 'Sign up failed'), user: null };
    }
  };

  const signOut = async () => {
    await nextAuthSignOut({ redirect: true, callbackUrl: '/' });
  };

  const resetPassword = async (email: string) => {
    toast.success('Password reset email sent');
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

