"use client";

import React from 'react';
import { useOnboarding } from '@/hooks/useOnboarding';
import { useQuery } from '@tanstack/react-query';
import { getSubscriptionPaymentsAction, initiateSubscriptionPaymentAction } from '@/app/actions/billing';
import {
    CreditCard,
    Calendar,
    Clock,
    CheckCircle2,
    AlertCircle,
    Download,
    Receipt,
    Building2,
    ChevronRight,
    FileText,
    TrendingUp
} from 'lucide-react';
import { format, addMonths, addDays } from 'date-fns';
import { cn } from '@/lib/utils';
import { useAuth } from '@/components/auth/AuthProvider';
import { useBusiness } from '@/contexts/BusinessContext';
import { generateSubscriptionInvoice } from '@/utils/generateSubscriptionInvoice';
import LoadingSpinner from '@/components/LoadingSpinner';

interface SubscriptionPayment {
    id: string;
    created_at: string;
    billing_cycle: string | null;
    amount: number;
    payment_status: string | null;
}

export default function BillingHistory() {
    const { user } = useAuth();
    const { currentBusiness } = useBusiness();
    const [isInitiatingPayment, setIsInitiatingPayment] = React.useState(false);
    const [pesapalRedirectUrl, setPesapalRedirectUrl] = React.useState<string | null>(null);

    const {
        daysRemaining,
        billingAmount,
        billingDuration,
        nextBillingDate,
        isFrozen,
        isLoading: isSubscriptionLoading,
        refetch: refetchOnboarding
    } = useOnboarding();

    const { data: rawPayments, isLoading: isPaymentsLoading } = useQuery({
        queryKey: ['subscription-payments', user?.id],
        queryFn: async () => {
            if (!user?.id) return [];
            const data = await getSubscriptionPaymentsAction(user.id);
            return data as SubscriptionPayment[];
        },
        enabled: !!user
    });

    const payments = React.useMemo(() => {
        if (!rawPayments) return [];
        return rawPayments.map((p, index) => ({
            ...p,
            invoice_number: index + 1,
            business_name: currentBusiness?.name || 'Gonzo System User'
        })).sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }, [rawPayments, currentBusiness]);

    const getStatusColor = (days: number, frozen: boolean) => {
        if (frozen || days <= 0) return 'text-red-600 bg-red-50 border-red-100';
        if (days <= 7) return 'text-amber-600 bg-amber-50 border-amber-100';
        return 'text-emerald-600 bg-emerald-50 border-emerald-100';
    };

    const getStatusText = (days: number, frozen: boolean) => {
        if (frozen) return 'Account Paused';
        if (days <= 0) return 'Expired';
        if (days <= 7) return 'Expiring Soon';
        return 'Active';
    };

    const handleDownloadInvoice = async (payment: any, type: 'receipt' | 'invoice' = 'invoice') => {
        await generateSubscriptionInvoice(payment, type);
    };

    const handleRenew = async () => {
        if (!user || !billingAmount) return;

        setIsInitiatingPayment(true);
        try {
            const purchaseId = crypto.randomUUID();
            const locationId = currentBusiness?.id || (user as any).location_id || '00000000-0000-0000-0000-000000000000';

            const phone = user.user_metadata?.phone || user.phone || '0700000000';

            const result = await initiateSubscriptionPaymentAction(
                user.id,
                locationId,
                billingAmount,
                billingDuration || 'monthly',
                phone
            );

            if (!result.success) {
                throw new Error(result.error);
            }

            if (result.redirect_url) {
                setPesapalRedirectUrl(result.redirect_url);
            }
        } catch (error: any) {
            console.error('Subscription Renewal Error:', error);

            const errorMsg = error.message || error.error || "Failed to connect to Pesapal.";
            alert(`Payment Error: ${errorMsg}. Please try again later.`);
        } finally {
            setIsInitiatingPayment(false);
        }
    };

    const handleDownloadUpcomingInvoice = async () => {
        if (!nextBillingDate || !billingAmount) return;

        // Create a mock payment object for the upcoming renewal
        const upcomingPayment = {
            id: `PRO-FORMA-${format(new Date(), 'yyyyMMdd')}`,
            created_at: new Date().toISOString(), // Today's date for creation
            due_date: nextBillingDate, // Renewal date as due date
            amount: billingAmount,
            billing_cycle: billingDuration || 'Monthly',
            payment_status: 'pending',
            user_id: user?.id,
            isProForma: true,
            business_name: currentBusiness?.name || 'Gonzo System User',
            invoice_number: (payments?.length || 0) + 1 // Next in sequence
        };

        await generateSubscriptionInvoice(upcomingPayment, 'invoice');
    };

    if (isSubscriptionLoading || isPaymentsLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <LoadingSpinner message="Loading billing data..." />
            </div>
        );
    }

    return (
        <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {pesapalRedirectUrl && (
                <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-4">
                    <div className="w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl border border-border/40 overflow-hidden relative flex flex-col scale-in-center">
                        <div className="p-4 border-b border-border/40 flex items-center justify-between bg-white">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                    <CreditCard className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider">Secure Payment</h3>
                                    <p className="text-[10px] text-muted-foreground font-mono italic">Powered by Pesapal</p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setPesapalRedirectUrl(null);
                                    refetchOnboarding();
                                }}
                                className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                            >
                                Close & Sync
                            </button>
                        </div>
                        <iframe
                            src={pesapalRedirectUrl}
                            className="w-full flex-1 border-none"
                            title="Pesapal Payment"
                        />
                    </div>
                    <p className="mt-4 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium opacity-60">
                        Do not close this window until the payment is complete
                    </p>
                </div>
            )}

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Billing & Subscription</h1>
                    <p className="text-muted-foreground mt-1 text-sm">Manage your plan, track payments, and download invoices.</p>
                </div>
                <div className="flex items-center flex-wrap gap-3">
                    <button
                        onClick={handleRenew}
                        disabled={isInitiatingPayment}
                        className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200 disabled:opacity-50"
                    >
                        {isInitiatingPayment ? (
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <CreditCard className="w-4 h-4" />
                        )}
                        Renew / Pay Now
                    </button>
                    <button
                        onClick={handleDownloadUpcomingInvoice}
                        className="px-4 py-2.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center gap-2"
                    >
                        <FileText className="w-4 h-4" />
                        Upcoming Invoice
                    </button>
                    <div className={cn(
                        "px-4 py-2.5 rounded-xl border text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 w-fit",
                        getStatusColor(daysRemaining, isFrozen)
                    )}>
                        {isFrozen || daysRemaining <= 0 ? <AlertCircle className="w-3.5 h-3.5" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                        {getStatusText(daysRemaining, isFrozen)}
                    </div>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-border/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Receipt className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Current Plan</span>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-2xl font-bold">UGX {billingAmount?.toLocaleString()}</h3>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{billingDuration}</p>
                    </div>
                </div>

                <div className="bg-white border border-border/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Clock className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Days Remaining</span>
                    </div>
                    <div className="space-y-1">
                        <h3 className={cn("text-2xl font-bold", daysRemaining <= 7 ? "text-orange-600" : "text-foreground")}>
                            {daysRemaining <= 0 ? '0' : daysRemaining} Days
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Left on Subscription</p>
                    </div>
                </div>

                <div className="bg-white border border-border/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Next Billing</span>
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-2xl font-bold">
                            {nextBillingDate ? format(new Date(nextBillingDate), 'MMM dd, yyyy') : 'No Date Set'}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Scheduled Renewal</p>
                    </div>
                </div>
            </div>

            {/* History Table */}
            <div className="bg-white border border-border/40 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-6 border-b border-border/40 bg-muted/5 flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                        <HistoryIcon className="w-4 h-4 text-muted-foreground" />
                        Payment History
                    </h3>
                    <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 tracking-tighter uppercase">
                        Finalized Payments
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-muted/10 h-12">
                                <th className="px-6 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Date</th>
                                <th className="px-6 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Description</th>
                                <th className="px-6 text-right text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Amount</th>
                                <th className="px-6 text-center text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Status</th>
                                <th className="px-6 text-right text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/20">
                            {payments && payments.length > 0 ? (
                                payments.map((payment) => (
                                    <tr key={payment.id} className="h-16 hover:bg-muted/5 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-[13px] font-bold">{format(new Date(payment.created_at), 'MMM dd, yyyy')}</span>
                                                <span className="text-[10px] text-muted-foreground font-mono">{payment.id.split('-')[0].toUpperCase()}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <CreditCard className="w-3.5 h-3.5 text-muted-foreground" />
                                                <span className="text-[13px] font-medium text-foreground">
                                                    {payment.billing_cycle} Subscription Renewal
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className="text-[13px] font-bold">UGX {payment.amount.toLocaleString()}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center">
                                                <span className={cn(
                                                    "px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-tight border",
                                                    payment.payment_status === 'completed' || payment.payment_status === 'success'
                                                        ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                                        : payment.payment_status === 'pending'
                                                            ? "bg-amber-50 text-amber-600 border-amber-100"
                                                            : "bg-red-50 text-red-600 border-red-100"
                                                )}>
                                                    {payment.payment_status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => handleDownloadInvoice(payment, 'invoice')}
                                                    className="p-2 hover:bg-primary/5 rounded-lg text-primary transition-colors inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest"
                                                    title="Download Invoice"
                                                >
                                                    <FileText className="w-3.5 h-3.5" />
                                                    <span className="hidden sm:inline">Invoice</span>
                                                </button>
                                                <button
                                                    onClick={() => handleDownloadInvoice(payment, 'receipt')}
                                                    className="p-2 hover:bg-emerald-50 rounded-lg text-emerald-600 transition-colors inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest"
                                                    title="Download Receipt"
                                                >
                                                    <Download className="w-3.5 h-3.5" />
                                                    <span className="hidden sm:inline">Receipt</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="py-20 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center">
                                                <Receipt className="w-6 h-6 text-muted-foreground/30" />
                                            </div>
                                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">No transaction history found</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer Support */}
            <div className="bg-blue-600 rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-md text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">Need a custom plan or help?</h3>
                        <p className="text-blue-100 text-sm">Our team is here to help you scale your business with the right tools and support.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="mailto:support@gonzasystems.com"
                            className="px-6 py-3 bg-white text-blue-600 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            Contact Support
                        </a>
                        <a
                            href="tel:+256758519696"
                            className="px-6 py-3 bg-blue-500 text-white border border-blue-400 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-blue-400 transition-colors"
                        >
                            Call +256 758519696
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HistoryIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M12 7v5l4 2" />
        </svg>
    );
}
