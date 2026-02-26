import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import { Building2, ArrowLeft, CalendarClock, CreditCard, Edit3 } from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';

interface LocationRecord {
    id: string;
    onboarding_id: string | null;
    name: string;
    address: string | null;
    is_frozen: boolean;
    completed: boolean;
    business_email: string;
    business_phone: string;
    created_at: string;
    last_active_at?: string;
}

interface UserSummary {
    user_id: string;
    email: string;
    business_name: string;
    location_count: number;
    locations: LocationRecord[];
    is_frozen: boolean;
    location_limit: number;
    billing_amount: number;
    billing_duration: string;
    days_remaining: number;
    next_billing_date: string;
    created_at: string;
}

export default function ShowRecord() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: user, isLoading } = useQuery<UserSummary>({
        queryKey: ['admin-user-detail', id],
        queryFn: async () => {
            const savedSession = localStorage.getItem('platform_admin_session');
            if (!savedSession) throw new Error('Not authenticated');
            const { username, password } = JSON.parse(atob(savedSession));

            const { data, error } = await supabase.rpc('get_platform_user_summary', {
                p_username: username,
                p_password: password
            });

            if (error) throw error;
            const users = data as any[];
            const foundUser = users.find(u => u.user_id === id);

            if (!foundUser) throw new Error('User not found');
            return foundUser as UserSummary;
        }
    });

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
                <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                <p className="mt-4 text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Synchronizing...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">User Not Found</p>
                <button onClick={() => navigate(-1)} className="mt-4 text-xs font-bold text-primary hover:underline">Go Back</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafafa] font-geist selection:bg-primary/10 overflow-x-hidden pb-12">
            <header className="h-16 border-b border-border/40 bg-white/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-4 lg:px-8">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/records')}
                        className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <h1 className="text-[10px] font-bold text-foreground uppercase tracking-[0.2em]">Platform Management</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(`/records/${id}/edit`)}
                        className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary/5 rounded transition-colors"
                    >
                        <Edit3 className="w-3.5 h-3.5" />
                        Manage Record
                    </button>
                </div>
            </header>

            <main className="p-4 lg:p-10 max-w-[1200px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4 lg:gap-6">
                        <div className="w-16 h-16 rounded bg-muted/20 border border-border/30 flex items-center justify-center shrink-0">
                            <Building2 className="w-8 h-8 text-muted-foreground/30" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-foreground tracking-tight">{user?.business_name || 'Account Setup'}</h2>
                            <div className="flex items-center gap-3 mt-1.5">
                                <span className={`text-[8px] px-2 py-0.5 rounded font-bold uppercase tracking-widest ${user?.is_frozen ? 'bg-red-500/10 text-red-600' : 'bg-emerald-500/10 text-emerald-600'}`}>
                                    {user?.is_frozen ? 'Status: Frozen' : 'Status: Active'}
                                </span>
                                <span className="text-[10px] text-muted-foreground font-medium">{user?.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="linear-card bg-white p-6 lg:p-10 space-y-8 lg:space-y-12">
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded bg-white border border-border/40 flex items-center justify-center shrink-0 overflow-hidden">
                            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-primary/40" />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3 mb-1">
                                <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-foreground truncate">{user.business_name || 'New User Account'}</h2>
                                <div className="flex items-center gap-1.5 lg:pl-2 lg:border-l lg:border-border/40">
                                    {user.is_frozen ? (
                                        <span className="text-[9px] font-bold text-blue-600 uppercase tracking-[0.15em] flex items-center gap-1.5">
                                            <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                                            Account Suspended
                                        </span>
                                    ) : user.locations?.some(l => l.completed) ? (
                                        <span className="text-[9px] font-bold text-green-600 uppercase tracking-[0.15em] flex items-center gap-1.5">
                                            <div className="w-1 h-1 rounded-full bg-green-500" />
                                            Active Access
                                        </span>
                                    ) : (
                                        <span className="text-[9px] font-bold text-amber-500 uppercase tracking-[0.15em] flex items-center gap-1.5">
                                            <div className="w-1 h-1 rounded-full bg-amber-400" />
                                            Provisioning
                                        </span>
                                    )}
                                </div>
                            </div>
                            <p className="text-muted-foreground text-[10px] lg:text-[11px] font-bold uppercase tracking-widest truncate">{user.email}</p>
                        </div>
                    </div>

                    <div className="space-y-8 lg:space-y-12 pt-8 border-t border-border/40">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            <div className="space-y-6">
                                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Account Management</h3>
                                <div className="space-y-5">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-tight mb-1">Registration Identifier</span>
                                        <span className="text-[11px] font-mono text-foreground font-bold break-all">{user.user_id}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-tight mb-1">Account Visibility</span>
                                        <span className="text-sm font-medium text-foreground">{user.is_frozen ? 'Global suspension active' : 'Full system privileges'}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Network Scale</h3>
                                <div className="space-y-5">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-tight mb-1">Registered Units</span>
                                        <span className="text-sm font-medium text-foreground uppercase tracking-wider">{user.location_count} Locations Discovered</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-tight mb-1">Service Onboarding</span>
                                        <span className="text-sm font-medium text-foreground">{user.locations?.filter(l => l.completed).length} Verified Branches</span>
                                    </div>
                                    <div className="flex flex-col pt-4 border-t border-border/20">
                                        <span className="text-[9px] font-bold text-blue-600/50 uppercase tracking-tight mb-1">Location Multiplier Limit</span>
                                        <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded w-fit uppercase tracking-widest">{user.location_limit} Allowed Units</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 lg:pt-12 border-t border-border/40">
                        <div className="flex items-center gap-2 mb-6">
                            <CreditCard className="w-3.5 h-3.5 text-muted-foreground/50" />
                            <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Account Subscription</h3>
                        </div>
                        {user.billing_amount > 0 || user.days_remaining > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-white border border-border/40 rounded-xl overflow-hidden divide-x divide-border/30">
                                <div className="px-5 py-5">
                                    <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-tight block mb-1">Plan Amount</span>
                                    <span className="text-sm font-bold text-foreground">UGX {user.billing_amount.toLocaleString()}</span>
                                    <span className="text-[9px] text-muted-foreground block mt-0.5">{user.billing_duration}</span>
                                </div>
                                <div className="px-5 py-5">
                                    <div className="flex items-center gap-1 mb-1">
                                        <CalendarClock className="w-3 h-3 text-muted-foreground/40" />
                                        <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-tight">Days Remaining</span>
                                    </div>
                                    <span className={`text-xl font-bold ${user.days_remaining <= 0 ? 'text-red-500' : user.days_remaining <= 7 ? 'text-amber-500' : 'text-green-600'}`}>
                                        {user.days_remaining <= 0 ? 'Expired' : user.days_remaining}
                                    </span>
                                    {user.days_remaining > 0 && <span className="text-[9px] text-muted-foreground block">days left</span>}
                                </div>
                                <div className="px-5 py-5">
                                    <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-tight block mb-1">Next Billing</span>
                                    <span className="text-[11px] font-medium text-foreground">
                                        {user.next_billing_date ? format(new Date(user.next_billing_date), 'MMM dd, yyyy') : '—'}
                                    </span>
                                </div>
                                <div className="px-5 py-5">
                                    <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-tight block mb-1">Status</span>
                                    {user.days_remaining <= 0 ? (
                                        <span className="text-[9px] font-bold bg-red-500/10 text-red-600 px-2 py-0.5 rounded uppercase tracking-tighter">Expired</span>
                                    ) : user.days_remaining <= 7 ? (
                                        <span className="text-[9px] font-bold bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded uppercase tracking-tighter">Expiring Soon</span>
                                    ) : (
                                        <span className="text-[9px] font-bold bg-green-500/10 text-green-600 px-2 py-0.5 rounded uppercase tracking-tighter">Active</span>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <p className="text-[11px] text-muted-foreground italic">No subscription configured for this account.</p>
                        )}
                    </div>

                    <div className="pt-8 lg:pt-12 border-t border-border/40">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Operational Footprint</h3>
                            <span className="text-[9px] font-bold text-muted-foreground/40 uppercase bg-muted/30 px-2 py-0.5 rounded">
                                {user.location_count} Units
                            </span>
                        </div>
                        <div className="bg-white border border-border/40 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[500px]">
                                    <thead>
                                        <tr className="bg-[#fafafa] border-b border-border/40 h-10">
                                            <th className="px-5 text-[9px] font-bold text-muted-foreground uppercase tracking-widest w-1/4">Branch Name</th>
                                            <th className="px-5 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Address</th>
                                            <th className="px-5 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Contact Number</th>
                                            <th className="px-5 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Last Active</th>
                                            <th className="px-5 text-[9px] font-bold text-muted-foreground uppercase tracking-widest w-40 text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/20">
                                        {user.locations?.map((loc) => (
                                            <tr key={loc.id} className="h-12 hover:bg-[#fafafa]/50 transition-colors">
                                                <td className="px-5 py-3">
                                                    <div className="flex flex-col">
                                                        <span className="text-[11px] font-bold text-foreground mb-0.5">{loc.name}</span>
                                                        <span className="text-[9px] font-mono text-muted-foreground/40">{loc.id.split('-')[0]}</span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3">
                                                    <span className="text-[11px] text-muted-foreground italic line-clamp-1">{loc.address || '—'}</span>
                                                </td>
                                                <td className="px-5 py-3">
                                                    <span className="text-[11px] font-medium text-foreground">{loc.business_phone || '—'}</span>
                                                </td>
                                                <td className="px-5 py-3">
                                                    <div className="flex flex-col">
                                                        <span className="text-[11px] text-foreground font-medium">
                                                            {loc.last_active_at ? formatDistanceToNow(new Date(loc.last_active_at), { addSuffix: true }) : 'Never'}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3 text-right">
                                                    {loc.completed ? (
                                                        <span className="text-[8px] font-bold bg-green-500/10 text-green-600 px-1.5 py-0.5 rounded uppercase tracking-tighter">Verified</span>
                                                    ) : (
                                                        <span className="text-[8px] font-bold bg-amber-500/10 text-amber-600 px-1.5 py-0.5 rounded uppercase tracking-tighter">Draft</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
