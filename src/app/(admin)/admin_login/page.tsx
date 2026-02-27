"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { Loader2, Lock, User, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function Login() {
    const { signIn, user } = useAuth();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Redirect if already authenticated
    useEffect(() => {
        if (user) {
            router.replace('/');
        }
    }, [user, router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await signIn(username, password);
            toast.success('Access granted. Welcome to the Console.');
            router.replace('/');
        } catch (error: any) {
            toast.error(error.message || 'Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col lg:flex-row font-geist selection:bg-primary/10">
            {/* Left Panel - Branding */}
            <div
                className="w-full lg:w-2/5 xl:w-1/3 flex flex-col p-8 lg:p-12 relative overflow-hidden lg:min-h-screen"
                style={{ background: 'hsl(var(--primary))' }}
            >
                {/* Decorative Elements */}
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-10 bg-white pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-10 bg-white pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.03] bg-white pointer-events-none" />

                {/* Logo Area */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded flex items-center justify-center border border-white/20">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Gonza Console</span>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto mb-auto space-y-6 max-w-sm">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                        <Sparkles className="h-3.5 w-3.5" />
                        Platform Administration
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-[1.15]">
                        Secure access to your business network.
                    </h2>

                    <p className="text-white/70 text-sm leading-relaxed">
                        Internal administrative terminal for managing enterprise operations, entity verification, and system parameters across the Gonza ecosystem.
                    </p>
                </div>

                {/* Footer */}
                <div className="relative z-10 mt-auto pt-8 flex items-center justify-between border-t border-white/10">
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Gonzo Systems
                    </p>
                    <div className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 bg-[#fafafa]">
                <div className="w-full max-w-[360px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="mb-10">
                        <h1 className="text-2xl font-bold text-foreground tracking-tight">System Authentication</h1>
                        <p className="text-muted-foreground text-xs font-medium mt-1">
                            Enter your credentials to access the administrative console.
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-0.5">
                                Account Identifier
                            </label>
                            <div className="relative group">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="linear-input pl-10 h-11 border-border/40 bg-white"
                                    placeholder="Username or Email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-0.5">
                                    Security Key
                                </label>
                                <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors">
                                    Reset
                                </button>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="linear-input pl-10 h-11 border-border/40 bg-white"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-primary-foreground h-11 rounded-[5px] font-bold text-[11px] uppercase tracking-widest hover:bg-primary/95 active:scale-[0.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
                        >
                            {loading ? (
                                <Loader2 className="w-4 h-4 animate-spin opacity-50" />
                            ) : (
                                <>
                                    <span>Secure Sign In</span>
                                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-12 text-center">
                        <div className="flex items-center gap-2 justify-center mb-4">
                            <div className="h-px bg-border/40 flex-1" />
                            <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em]">Authorized Access Only</span>
                            <div className="h-px bg-border/40 flex-1" />
                        </div>
                        <p className="text-[10px] text-muted-foreground/40 leading-relaxed px-4">
                            By signing in, you agree to the protocols governing internal data processing and security compliance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
