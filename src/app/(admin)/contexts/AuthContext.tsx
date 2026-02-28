"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
    user: { username: string } | null;
    isAdmin: boolean;
    loading: boolean;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [user, setUser] = useState<{ username: string } | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (status === 'authenticated' && session?.user) {
            const role = (session.user as any).role?.toLowerCase();
            if (role === 'superadmin') {
                setUser({ username: session.user.email || 'Admin' });
                setIsAdmin(true);
            } else {
                // Not a superadmin, but authenticated
                setIsAdmin(false);
                setUser(null);
            }
        } else {
            setIsAdmin(false);
            setUser(null);
        }
    }, [session, status]);

    const signIn = async (username: string, password: string) => {
        const result = await nextAuthSignIn('credentials', {
            email: username,
            password: password,
            redirect: false
        });

        if (result?.error) {
            throw new Error(result.error);
        }
        
        // NextAuth will update the session, and the useEffect above will handle the state
    };

    const signOut = async () => {
        await nextAuthSignOut({ redirect: true, callbackUrl: '/admin_login' });
    };

    return (
        <AuthContext.Provider value={{ user, isAdmin, loading: status === 'loading', signIn, signOut }}>
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
