import * as React from 'react';
import { useState, useContext, createContext, useEffect } from 'react';
import { toast } from 'sonner';

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
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Auto-login for development while migrating
  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('gonza_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    const result = await signInAction(email, password);
    if (result.success && result.user) {
      const userData = { id: result.user.id, email: result.user.email };
      setUser(userData);
      localStorage.setItem('gonza_user', JSON.stringify(userData));
      toast.success('Signed in successfully');
    } else {
      throw new Error(result.error || 'Login failed');
    }
  };

  const signInWithGoogle = async () => {
    // Mock for now, will integrate with actual OAuth later
    toast.error('Google sign-in not yet implemented with Prisma');
  };

  const signUp = async (email: string, password: string, options?: { data?: Record<string, any> }) => {
    const result = await signUpAction({ email, password, name: options?.data?.name });
    if (result.success && result.user) {
      toast.success('Account created successfully. Please sign in.');
      return { error: null, user: result.user };
    } else {
      return { error: new Error(result.error || 'Sign up failed'), user: null };
    }
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('gonza_user');
    toast.success('Successfully signed out');
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

