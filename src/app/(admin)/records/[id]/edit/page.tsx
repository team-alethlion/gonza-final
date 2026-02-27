"use client";

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase';
import { ArrowLeft, Trash2, Loader2, Save, X, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import { format, differenceInDays, addDays, startOfDay } from 'date-fns';

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

interface OnboardingRecord {
    id: string;
    location_id: string;
    business_name: string;
    business_email: string;
    business_phone: string;
    business_address: string;
    business_logo?: string;
    nature_of_business?: string;
    business_size?: string;
    billing_duration?: 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly' | 'Yearly';
    billing_amount?: number;
    days_remaining?: number;
    next_billing_date?: string;
    completed: boolean;
    location_limit?: number;
    is_frozen?: boolean;
    created_at: string;
    user_id?: string;
}

export default function EditRecord() {
    const params = useParams();
    const id = params?.id as string;
    const router = useRouter();
    const queryClient = useQueryClient();
    const [isDeleting, setIsDeleting] = useState(false);
    const [formData, setFormData] = useState<Partial<OnboardingRecord & { location_limit?: number; is_frozen?: boolean }>>({});
    const hasInitializedRef = useRef(false);

    const { data: user, isLoading: isUserLoading } = useQuery<UserSummary>({
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

    const firstLoc = user?.locations?.[0];
    const { data: record, isLoading: isRecordLoading } = useQuery<OnboardingRecord>({
        queryKey: ['admin-location-onboarding', firstLoc?.id],
        enabled: !!firstLoc?.id,
        queryFn: async () => {
            const savedSession = localStorage.getItem('platform_admin_session');
            if (!savedSession) throw new Error('Not authenticated');
            const { username, password } = JSON.parse(atob(savedSession));

            const { data, error } = await supabase.rpc('get_platform_onboarding_data', {
                p_username: username,
                p_password: password
            });

            if (error) throw error;
            const records = data as any[];
            const foundRecord = records.find(r => r.location_id === firstLoc?.id);

            return foundRecord || {
                id: '',
                location_id: firstLoc?.id,
                business_name: firstLoc?.name || '',
                business_email: user?.email || '',
                business_phone: '',
                business_address: firstLoc?.address || '',
                completed: false,
                created_at: new Date().toISOString()
            } as OnboardingRecord;
        }
    });

    // Only initialize form data once to prevent overrides during editing
    useEffect(() => {
        if (record && user && !hasInitializedRef.current) {
            setFormData({
                ...record,
                location_limit: user.location_limit,
                is_frozen: user.is_frozen,
                billing_amount: user.billing_amount,
                billing_duration: user.billing_duration as any,
                days_remaining: user.days_remaining,
                next_billing_date: user.next_billing_date
            });
            hasInitializedRef.current = true;
        }
    }, [record, user]);

    const updateMutation = useMutation({
        mutationFn: async (updatedData: Partial<OnboardingRecord & { location_limit?: number; is_frozen?: boolean }>) => {
            const savedSession = localStorage.getItem('platform_admin_session');
            if (!savedSession) throw new Error('Not authenticated');
            const { username, password } = JSON.parse(atob(savedSession));

            const { location_limit, is_frozen, ...onboardingData } = updatedData;

            const { error: onboardingError } = await supabase.rpc('update_platform_onboarding_data', {
                p_username: username,
                p_password: password,
                p_location_id: record?.location_id,
                p_user_id: user?.user_id,
                p_business_name: onboardingData.business_name ?? null,
                p_business_email: onboardingData.business_email ?? null,
                p_business_phone: onboardingData.business_phone ?? null,
                p_business_address: onboardingData.business_address ?? null,
                p_nature_of_business: onboardingData.nature_of_business ?? null,
                p_business_size: onboardingData.business_size ?? null,
                p_billing_amount: onboardingData.billing_amount ?? null,
                p_billing_duration: onboardingData.billing_duration ?? null,
                p_days_remaining: onboardingData.days_remaining ?? null,
                p_next_billing_date: onboardingData.next_billing_date ?? null,
                p_completed: onboardingData.completed ?? null,
            });

            if (onboardingError) throw onboardingError;

            if (location_limit !== undefined || is_frozen !== undefined) {
                const { error: statusError } = await supabase.rpc('update_user_account_status', {
                    p_username: username,
                    p_password: password,
                    p_user_id: user?.user_id,
                    p_is_frozen: is_frozen ?? user?.is_frozen ?? false,
                    p_location_limit: location_limit ?? user?.location_limit ?? 3
                });

                if (statusError) throw statusError;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-user-summary'] });
            queryClient.invalidateQueries({ queryKey: ['admin-user-detail', id] });
            queryClient.invalidateQueries({ queryKey: ['admin-location-onboarding', firstLoc?.id] });
            toast.success('Record and limits updated successfully');
            router.push(`/records/${id}`);
        },
        onError: (error: any) => {
            toast.error(error.message || 'Failed to save record');
        }
    });

    const handleDelete = async () => {
        if (!window.confirm(`CAUTION: Are you sure you want to PERMANENTLY delete the account for "${user?.business_name}"? This action cannot be undone.`)) {
            return;
        }

        setIsDeleting(true);
        try {
            const savedSession = localStorage.getItem('platform_admin_session');
            if (!savedSession) throw new Error('Not authenticated');
            const { username, password } = JSON.parse(atob(savedSession));

            const { error } = await supabase.rpc('delete_platform_user_account', {
                p_username: username,
                p_password: password,
                p_user_id: id
            });

            if (error) throw error;

            toast.success('Account deleted successfully');
            router.push('/records');
        } catch (err: any) {
            toast.error(err.message || 'Deletion failed');
        } finally {
            setIsDeleting(false);
        }
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        updateMutation.mutate(formData);
    };

    if (isUserLoading || isRecordLoading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
                <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                <p className="mt-4 text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Synchronizing...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fafafa] font-geist selection:bg-primary/10 overflow-x-hidden pb-12">
            <header className="h-16 border-b border-border/40 bg-white/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-4 lg:px-8">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push(`/records/${id}`)}
                        className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <h1 className="text-[10px] font-bold text-foreground uppercase tracking-[0.2em]">Platform Management</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => router.push(`/records/${id}`)}
                        className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:bg-muted rounded transition-colors"
                    >
                        <X className="w-3.5 h-3.5" />
                        Cancel
                    </button>
                </div>
            </header>

            <main className="p-4 lg:p-10 max-w-[1200px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="linear-card bg-white p-6 lg:p-10 space-y-8 lg:space-y-12">
                    <form onSubmit={handleSave} className="space-y-8 lg:space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <div className="space-y-1.5">
                                <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-0.5">Commercial Name</label>
                                <input
                                    type="text"
                                    value={formData.business_name || ''}
                                    onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                                    className="linear-input h-10 border-border/40 focus:border-primary/40 bg-white"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-0.5">Operational Sector</label>
                                <input
                                    type="text"
                                    value={formData.nature_of_business || ''}
                                    onChange={(e) => setFormData({ ...formData, nature_of_business: e.target.value })}
                                    className="linear-input h-10 border-border/40 focus:border-primary/40 bg-white"
                                    placeholder="e.g. Fintech, Logistics"
                                />
                            </div>
                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-0.5">Physical Distribution Address</label>
                                <textarea
                                    value={formData.business_address || ''}
                                    onChange={(e) => setFormData({ ...formData, business_address: e.target.value })}
                                    className="linear-input min-h-[80px] py-3 italic border-border/40 focus:border-primary/40 bg-white"
                                />
                            </div>
                        </div>

                        <div className="pt-8 lg:pt-10 border-t border-border/40">
                            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-6 lg:mb-8">Communication Channels</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                <div className="space-y-1.5">
                                    <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-0.5">Business Network Email</label>
                                    <input
                                        type="email"
                                        value={formData.business_email || ''}
                                        onChange={(e) => setFormData({ ...formData, business_email: e.target.value })}
                                        className="linear-input h-10 border-border/40 focus:border-primary/40 bg-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-0.5">Contact Verification Number</label>
                                    <input
                                        type="text"
                                        value={formData.business_phone || ''}
                                        onChange={(e) => setFormData({ ...formData, business_phone: e.target.value })}
                                        className="linear-input h-10 border-border/40 focus:border-primary/40 bg-white"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 lg:pt-10 border-t border-border/40">
                            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-6 lg:mb-8">Service & Billing Details</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-0.5">Days To Renewal</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={formData.days_remaining !== undefined ? formData.days_remaining : ''}
                                            onChange={(e) => {
                                                const rawValue = e.target.value.replace(/,/g, '');
                                                const numValue = parseInt(rawValue);
                                                if (!isNaN(numValue)) {
                                                    const nextDate = addDays(startOfDay(new Date()), numValue);
                                                    setFormData({
                                                        ...formData,
                                                        days_remaining: numValue,
                                                        next_billing_date: nextDate.toISOString()
                                                    });
                                                } else {
                                                    setFormData({ ...formData, days_remaining: undefined });
                                                }
                                            }}
                                            className="linear-input h-10 border-border/40 focus:border-primary/40 bg-white font-mono"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-0.5">Next Billing Date</label>
                                    <div className="relative group">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/40 group-focus-within:text-primary/40 transition-colors pointer-events-none" />
                                        <input
                                            type="date"
                                            value={formData.next_billing_date ? format(new Date(formData.next_billing_date), 'yyyy-MM-dd') : ''}
                                            onChange={(e) => {
                                                const selectedDate = startOfDay(new Date(e.target.value));
                                                const today = startOfDay(new Date());
                                                const diffDays = differenceInDays(selectedDate, today);

                                                setFormData({
                                                    ...formData,
                                                    days_remaining: diffDays,
                                                    next_billing_date: selectedDate.toISOString()
                                                });
                                            }}
                                            className="linear-input h-10 pl-9 border-border/40 focus:border-primary/40 bg-white font-mono"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-0.5">Committed Amount (UGX)</label>
                                    <input
                                        type="text"
                                        value={formData.billing_amount !== undefined ? formData.billing_amount.toLocaleString() : ''}
                                        onChange={(e) => {
                                            const rawValue = e.target.value.replace(/,/g, '');
                                            const numValue = parseFloat(rawValue);
                                            if (!isNaN(numValue)) {
                                                setFormData({ ...formData, billing_amount: numValue });
                                            } else {
                                                setFormData({ ...formData, billing_amount: undefined });
                                            }
                                        }}
                                        className="linear-input h-10 border-border/40 focus:border-primary/40 bg-white font-mono"
                                        placeholder="0"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground/60 ml-0.5">Service Cycle</label>
                                    <select
                                        value={formData.billing_duration || ''}
                                        onChange={(e) => setFormData({ ...formData, billing_duration: e.target.value as any })}
                                        className="linear-input h-10 border-border/40 focus:border-primary/40 bg-white px-2 cursor-pointer w-full"
                                    >
                                        <option value="">Select Cycle</option>
                                        <option value="Daily">Daily</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Quarterly">Quarterly</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-1.5">
                                    <label className="text-[9px] uppercase tracking-widest font-bold text-blue-600/80 ml-0.5">Location Multiplier Limit</label>
                                    <input
                                        type="text"
                                        value={formData.location_limit !== undefined ? formData.location_limit.toLocaleString() : ''}
                                        onChange={(e) => {
                                            const rawValue = e.target.value.replace(/,/g, '');
                                            const numValue = parseInt(rawValue);
                                            if (!isNaN(numValue)) {
                                                setFormData({ ...formData, location_limit: numValue });
                                            } else {
                                                setFormData({ ...formData, location_limit: undefined });
                                            }
                                        }}
                                        className="linear-input h-10 border-blue-200 focus:border-blue-500/40 bg-blue-50/10 font-mono"
                                        placeholder="3"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] uppercase tracking-widest font-bold text-red-600/80 ml-0.5">Account Security Status</label>
                                    <div className="flex items-center gap-3 bg-red-50/10 border border-red-200/50 p-3 rounded-lg">
                                        <input
                                            type="checkbox"
                                            id="freeze_account"
                                            checked={formData.is_frozen || false}
                                            onChange={(e) => setFormData({ ...formData, is_frozen: e.target.checked })}
                                            className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-600 cursor-pointer"
                                        />
                                        <label htmlFor="freeze_account" className="text-[10px] font-bold text-red-700 uppercase tracking-wider cursor-pointer select-none">
                                            {formData.is_frozen ? 'Suspend Account Access (Frozen)' : 'Account Access Normal'}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-8 border-t border-border/40">
                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={isDeleting}
                                className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-red-600 hover:bg-red-50 rounded transition-colors disabled:opacity-50"
                            >
                                {isDeleting ? (
                                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                    <Trash2 className="w-3.5 h-3.5" />
                                )}
                                Delete Account
                            </button>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => router.push(`/records/${id}`)}
                                    className="px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:bg-muted rounded transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={updateMutation.isPending}
                                    className="bg-primary text-white px-8 py-2.5 rounded-[5px] text-[10px] font-bold uppercase tracking-widest hover:bg-primary/95 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                                >
                                    {updateMutation.isPending ? (
                                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                    ) : (
                                        <Save className="w-3.5 h-3.5" />
                                    )}
                                    Commit Updates
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
