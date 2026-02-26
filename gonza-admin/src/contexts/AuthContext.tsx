import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface AuthContextType {
    user: { username: string } | null;
    isAdmin: boolean;
    loading: boolean;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<{ username: string } | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Restore session from localStorage
        const savedSession = localStorage.getItem('platform_admin_session');
        if (savedSession) {
            try {
                const session = JSON.parse(atob(savedSession));
                setUser({ username: session.username });
                setIsAdmin(true);
            } catch (e) {
                console.error('Failed to restore session:', e);
                localStorage.removeItem('platform_admin_session');
            }
        }
        setLoading(false);
    }, []);

    const signIn = async (username: string, password: string) => {
        setLoading(true);
        try {
            const { data: isValid, error } = await supabase.rpc('verify_platform_admin', {
                p_username: username,
                p_password: password
            });

            if (error) throw error;

            if (isValid) {
                const sessionData = { username, password };
                localStorage.setItem('platform_admin_session', btoa(JSON.stringify(sessionData)));
                setUser({ username });
                setIsAdmin(true);
                return;
            } else {
                throw new Error('Invalid credentials');
            }
        } finally {
            setLoading(false);
        }
    };

    const signOut = async () => {
        localStorage.removeItem('platform_admin_session');
        setUser(null);
        setIsAdmin(false);
    };


    return (
        <AuthContext.Provider value={{ user, isAdmin, loading, signIn, signOut }}>
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
