"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { 
    getAllPackagesForAdminAction, 
    createPackageAction, 
    updatePackageAction, 
    togglePackageStatusAction 
} from "@/app/actions/packages";
import { 
    LayoutDashboard, 
    Plus, 
    Settings2, 
    Users, 
    Package, 
    TrendingUp, 
    CheckCircle2, 
    XCircle, 
    Edit2, 
    Trash2,
    Save,
    X,
    Loader2,
    DollarSign,
    Box,
    ShoppingCart,
    UserCheck,
    Calendar,
    Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function AdminPackagesPage() {
    const { user } = useAuth();
    const queryClient = useQueryClient();
    const [isAdding, setIsAdding] = useState(false);
    const [editingPkg, setEditingPkg] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { data: packages, isLoading } = useQuery({
        queryKey: ["admin-packages"],
        queryFn: async () => {
            const result = await getAllPackagesForAdminAction();
            if (!result.success) throw new Error(result.error);
            return result.data || [];
        }
    });

    const [formData, setForm] = useState({
        name: "",
        description: "",
        monthlyPrice: 0,
        yearlyPrice: 0,
        maxUsers: 5,
        unlimitedUsers: false,
        maxProducts: 50,
        unlimitedProducts: false,
        maxSalesPerMonth: 100,
        unlimitedSales: false,
        maxCustomers: 100,
        unlimitedCustomers: false,
        hasFreeTrial: true,
        trialDays: 14,
        isDefault: false
    });

    useEffect(() => {
        if (editingPkg) {
            setForm({
                name: editingPkg.name,
                description: editingPkg.description || "",
                monthlyPrice: Number(editingPkg.monthlyPrice),
                yearlyPrice: Number(editingPkg.yearlyPrice),
                maxUsers: editingPkg.maxUsers,
                unlimitedUsers: editingPkg.unlimitedUsers,
                maxProducts: editingPkg.maxProducts,
                unlimitedProducts: editingPkg.unlimitedProducts,
                maxSalesPerMonth: editingPkg.maxSalesPerMonth,
                unlimitedSales: editingPkg.unlimitedSales,
                maxCustomers: editingPkg.maxCustomers,
                unlimitedCustomers: editingPkg.unlimitedCustomers,
                hasFreeTrial: editingPkg.hasFreeTrial,
                trialDays: editingPkg.trialDays,
                isDefault: editingPkg.isDefault
            });
        } else {
            setForm({
                name: "",
                description: "",
                monthlyPrice: 0,
                yearlyPrice: 0,
                maxUsers: 5,
                unlimitedUsers: false,
                maxProducts: 50,
                unlimitedProducts: false,
                maxSalesPerMonth: 100,
                unlimitedSales: false,
                maxCustomers: 100,
                unlimitedCustomers: false,
                hasFreeTrial: true,
                trialDays: 14,
                isDefault: false
            });
        }
    }, [editingPkg]);

    const handleToggleStatus = async (pkgId: string, currentStatus: boolean) => {
        try {
            const result = await togglePackageStatusAction(pkgId, !currentStatus);
            if (result.success) {
                toast.success(`Package ${currentStatus ? 'deactivated' : 'activated'}`);
                queryClient.invalidateQueries({ queryKey: ["admin-packages"] });
            } else {
                toast.error(result.error);
            }
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const result = editingPkg 
                ? await updatePackageAction(editingPkg.id, formData)
                : await createPackageAction(formData);

            if (result.success) {
                toast.success(`Package ${editingPkg ? 'updated' : 'created'} successfully`);
                setIsAdding(false);
                setEditingPkg(null);
                queryClient.invalidateQueries({ queryKey: ["admin-packages"] });
            } else {
                toast.error(result.error);
            }
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
                    <p className="text-slate-500 font-medium animate-pulse">Loading package configuration...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 lg:p-10 font-sans">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-blue-600">
                            <Settings2 className="h-4 w-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Platform Management</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Subscription Packages</h1>
                        <p className="text-slate-500 text-sm font-medium">Create and manage tiers for your business clients.</p>
                    </div>
                    <button 
                        onClick={() => { setIsAdding(true); setEditingPkg(null); }}
                        className="h-12 px-6 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200 active:scale-95"
                    >
                        <Plus className="h-5 w-5" />
                        Create New Package
                    </button>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 gap-8">
                    {(isAdding || editingPkg) && (
                        <div className="linear-card bg-white p-8 animate-in fade-in slide-in-from-top-4 duration-500 border-2 border-blue-100 shadow-2xl shadow-blue-100/50">
                            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-50">
                                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                        <Package className="h-5 w-5 text-blue-600" />
                                    </div>
                                    {editingPkg ? 'Edit Package Tier' : 'Configure New Tier'}
                                </h2>
                                <button onClick={() => { setIsAdding(false); setEditingPkg(null); }} className="text-slate-400 hover:text-slate-900 transition-colors">
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Column 1: Identity & Pricing */}
                                    <div className="space-y-6">
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-blue-600 pl-3">General Information</h3>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Tier Name</label>
                                                <input 
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setForm({...formData, name: e.target.value})}
                                                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all font-medium"
                                                    placeholder="e.g. Pro Growth"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Description</label>
                                                <textarea 
                                                    value={formData.description}
                                                    onChange={(e) => setForm({...formData, description: e.target.value})}
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all font-medium min-h-[100px]"
                                                    placeholder="Describe the value proposition..."
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 pt-2">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1 flex items-center gap-2">
                                                        <DollarSign className="h-3 w-3" /> Monthly (UGX)
                                                    </label>
                                                    <input 
                                                        type="number"
                                                        required
                                                        value={formData.monthlyPrice}
                                                        onChange={(e) => setForm({...formData, monthlyPrice: Number(e.target.value)})}
                                                        className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 font-bold"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1 flex items-center gap-2">
                                                        <DollarSign className="h-3 w-3" /> Yearly (UGX)
                                                    </label>
                                                    <input 
                                                        type="number"
                                                        required
                                                        value={formData.yearlyPrice}
                                                        onChange={(e) => setForm({...formData, yearlyPrice: Number(e.target.value)})}
                                                        className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-blue-600 font-bold"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column 2: Quotas & Trials */}
                                    <div className="space-y-6">
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-amber-500 pl-3">Resource Quotas</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {/* Users */}
                                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 font-bold text-slate-700 text-xs">
                                                        <Users className="h-3.5 w-3.5" /> Max Users
                                                    </div>
                                                    <input 
                                                        type="checkbox"
                                                        checked={formData.unlimitedUsers}
                                                        onChange={(e) => setForm({...formData, unlimitedUsers: e.target.checked})}
                                                        className="rounded text-blue-600"
                                                    />
                                                </div>
                                                <input 
                                                    type="number"
                                                    disabled={formData.unlimitedUsers}
                                                    value={formData.maxUsers}
                                                    onChange={(e) => setForm({...formData, maxUsers: Number(e.target.value)})}
                                                    className="w-full h-10 px-3 rounded-lg border border-slate-200 font-bold disabled:opacity-50"
                                                />
                                            </div>

                                            {/* Products */}
                                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 font-bold text-slate-700 text-xs">
                                                        <Box className="h-3.5 w-3.5" /> Max Products
                                                    </div>
                                                    <input 
                                                        type="checkbox"
                                                        checked={formData.unlimitedProducts}
                                                        onChange={(e) => setForm({...formData, unlimitedProducts: e.target.checked})}
                                                        className="rounded text-blue-600"
                                                    />
                                                </div>
                                                <input 
                                                    type="number"
                                                    disabled={formData.unlimitedProducts}
                                                    value={formData.maxProducts}
                                                    onChange={(e) => setForm({...formData, maxProducts: Number(e.target.value)})}
                                                    className="w-full h-10 px-3 rounded-lg border border-slate-200 font-bold disabled:opacity-50"
                                                />
                                            </div>

                                            {/* Sales */}
                                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 font-bold text-slate-700 text-xs">
                                                        <ShoppingCart className="h-3.5 w-3.5" /> Sales/Month
                                                    </div>
                                                    <input 
                                                        type="checkbox"
                                                        checked={formData.unlimitedSales}
                                                        onChange={(e) => setForm({...formData, unlimitedSales: e.target.checked})}
                                                        className="rounded text-blue-600"
                                                    />
                                                </div>
                                                <input 
                                                    type="number"
                                                    disabled={formData.unlimitedSales}
                                                    value={formData.maxSalesPerMonth}
                                                    onChange={(e) => setForm({...formData, maxSalesPerMonth: Number(e.target.value)})}
                                                    className="w-full h-10 px-3 rounded-lg border border-slate-200 font-bold disabled:opacity-50"
                                                />
                                            </div>

                                            {/* Trial Setting */}
                                            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2 font-bold text-emerald-700 text-xs">
                                                        <Sparkles className="h-3.5 w-3.5" /> Free Trial
                                                    </div>
                                                    <input 
                                                        type="checkbox"
                                                        checked={formData.hasFreeTrial}
                                                        onChange={(e) => setForm({...formData, hasFreeTrial: e.target.checked})}
                                                        className="rounded text-emerald-600"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input 
                                                        type="number"
                                                        disabled={!formData.hasFreeTrial}
                                                        value={formData.trialDays}
                                                        onChange={(e) => setForm({...formData, trialDays: Number(e.target.value)})}
                                                        className="w-full h-10 px-3 rounded-lg border border-emerald-200 font-bold disabled:opacity-50"
                                                    />
                                                    <span className="text-[10px] font-bold text-emerald-600 uppercase">Days</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-4 pt-6 border-t border-slate-50">
                                    <button 
                                        type="button"
                                        onClick={() => { setIsAdding(false); setEditingPkg(null); }}
                                        className="h-12 px-6 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="h-12 px-10 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-all flex items-center gap-2 shadow-xl active:scale-95"
                                    >
                                        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                                        {editingPkg ? 'Update Tier' : 'Save Package'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Packages Table */}
                    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/50 border-b border-slate-100">
                                        <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Package Details</th>
                                        <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Pricing</th>
                                        <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Limits</th>
                                        <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Trial</th>
                                        <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Status</th>
                                        <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {packages && packages.length > 0 ? (
                                        packages.map((pkg: any) => (
                                            <tr key={pkg.id} className="hover:bg-slate-50/30 transition-colors group">
                                                <td className="px-8 py-6">
                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-slate-900">{pkg.name}</span>
                                                            {pkg.isDefault && (
                                                                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md text-[8px] font-bold uppercase border border-blue-100">Default</span>
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-slate-500 font-medium line-clamp-1">{pkg.description || 'No description provided'}</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6 text-center">
                                                    <div className="space-y-0.5">
                                                        <p className="text-sm font-bold text-slate-900">UGX {pkg.monthlyPrice.toLocaleString()}</p>
                                                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">UGX {pkg.yearlyPrice.toLocaleString()} / Yr</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6">
                                                    <div className="flex flex-wrap justify-center gap-2">
                                                        <div className="px-2 py-1 bg-slate-100 rounded-md text-[9px] font-bold text-slate-600 uppercase">
                                                            {pkg.unlimitedUsers ? '∞' : pkg.maxUsers} Users
                                                        </div>
                                                        <div className="px-2 py-1 bg-slate-100 rounded-md text-[9px] font-bold text-slate-600 uppercase">
                                                            {pkg.unlimitedProducts ? '∞' : pkg.maxProducts} Prods
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-6 text-center">
                                                    {pkg.hasFreeTrial ? (
                                                        <div className="inline-flex items-center gap-1 text-emerald-600">
                                                            <Sparkles className="h-3 w-3" />
                                                            <span className="text-[10px] font-bold">{pkg.trialDays}d</span>
                                                        </div>
                                                    ) : (
                                                        <span className="text-[10px] font-bold text-slate-300 uppercase">No Trial</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-6 text-center text-[10px]">
                                                    <button 
                                                        onClick={() => handleToggleStatus(pkg.id, pkg.isActive)}
                                                        className={cn(
                                                            "px-3 py-1 rounded-full font-bold uppercase tracking-widest border transition-all",
                                                            pkg.isActive 
                                                                ? "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100" 
                                                                : "bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100"
                                                        )}
                                                    >
                                                        {pkg.isActive ? 'Active' : 'Inactive'}
                                                    </button>
                                                </td>
                                                <td className="px-8 py-6 text-right">
                                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button 
                                                            onClick={() => setEditingPkg(pkg)}
                                                            className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"
                                                        >
                                                            <Edit2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="px-8 py-20 text-center">
                                                <div className="flex flex-col items-center gap-4">
                                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center">
                                                        <Package className="h-8 w-8 text-slate-300" />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <p className="text-slate-900 font-bold">No packages defined</p>
                                                        <p className="text-slate-500 text-sm max-w-xs">Create your first subscription tier to allow businesses to onboard and pay for your services.</p>
                                                    </div>
                                                    <button 
                                                        onClick={() => setIsAdding(true)}
                                                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl font-bold text-xs"
                                                    >
                                                        Add Starter Tier
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
