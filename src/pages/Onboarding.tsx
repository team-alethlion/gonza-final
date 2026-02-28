import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import LoadingSpinner from '@/components/LoadingSpinner';
import { toast } from 'sonner';
import { useOnboarding } from '@/hooks/useOnboarding';
import { useBusinessSettings } from '@/hooks/useBusinessSettings';
import { useAuth } from '@/components/auth/AuthProvider';
import { getPackagesAction } from '@/app/actions/packages';
import {
    Building2,
    MapPin,
    Phone,
    Mail,
    Briefcase,
    Users,
    X,
    Loader2,
    CheckCircle2,
    Upload,
    ArrowRight,
    Sparkles,
    LogOut,
    Check,
    ArrowLeft,
    Box
} from 'lucide-react';

const BUSINESS_SIZES = [
    { value: '1-5', label: '1–5 employees' },
    { value: '6-20', label: '6–20 employees' },
    { value: '21-50', label: '21–50 employees' },
    { value: '50+', label: '50+ employees' },
];

const Onboarding = () => {
    const router = useRouter();
    const { user, signOut } = useAuth();
    const { onboarding, isLoading: onboardingLoading, isCompleted, saveOnboarding } = useOnboarding();
    const { settings, isLoading: settingsLoading, updateSettings } = useBusinessSettings();

    const [currentStep, setCurrentStep] = useState(1);
    const [saving, setSaving] = useState(false);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [packages, setPackages] = useState<any[]>([]);
    const [packagesLoading, setPackagesLoading] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<any>(null);

    const [form, setForm] = useState({
        businessName: '',
        businessAddress: '',
        businessPhone: '',
        businessEmail: user?.email || '',
        natureOfBusiness: '',
        businessSize: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    // Redirect if already completed
    useEffect(() => {
        if (!onboardingLoading && isCompleted) {
            console.log('Onboarding: Already completed, redirecting to dashboard');
            router.replace('/');
        }
    }, [onboardingLoading, isCompleted, router]);

    // Fetch packages
    useEffect(() => {
        const fetchPackages = async () => {
            setPackagesLoading(true);
            try {
                const result = await getPackagesAction();
                if (result.success) {
                    setPackages(result.data || []);
                }
            } catch (err) {
                console.error('Error fetching packages:', err);
            } finally {
                setPackagesLoading(false);
            }
        };
        fetchPackages();
    }, []);

    // Auto-fill form from existing settings once loaded
    useEffect(() => {
        if (settingsLoading || !settings) return;
        setForm((prev) => ({
            ...prev,
            businessName: settings.businessName || prev.businessName,
            businessAddress: settings.businessAddress || prev.businessAddress,
            businessPhone: settings.businessPhone || prev.businessPhone,
            businessEmail: settings.businessEmail || prev.businessEmail,
        }));
        if (settings.businessLogo) {
            setLogoPreview(settings.businessLogo);
        }
    }, [settingsLoading, settings]);

    const processImageFile = useCallback((file: File) => {
        if (!file.type.startsWith('image/')) { toast.error('Please upload an image file'); return; }
        if (file.size > 5 * 1024 * 1024) { toast.error('Image must be smaller than 5MB'); return; }
        setLogoFile(file);
        const reader = new FileReader();
        reader.onloadend = () => setLogoPreview(reader.result as string);
        reader.readAsDataURL(file);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) processImageFile(file);
    }, [processImageFile]);

    if (onboardingLoading || settingsLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoadingSpinner message="Loading your profile..." />
            </div>
        );
    }

    const handleChange = (field: string, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) processImageFile(file);
    };

    const removeLogo = () => {
        setLogoPreview(null);
        setLogoFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!form.businessName.trim()) newErrors.businessName = 'Business name is required';
        if (!form.businessAddress.trim()) newErrors.businessAddress = 'Address is required';
        if (!form.businessPhone.trim()) newErrors.businessPhone = 'Phone number is required';
        if (!form.businessEmail.trim()) {
            newErrors.businessEmail = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail)) {
            newErrors.businessEmail = 'Please enter a valid email';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (currentStep === 1) {
            if (validate()) {
                setCurrentStep(2);
            }
        }
    };

    const prevStep = () => {
        setCurrentStep(1);
    };

    const uploadLogo = async (): Promise<string | null> => {
        // Mock image upload for now
        return logoPreview;
    };

    const handleSubmit = async () => {
        if (!selectedPackage) {
            toast.error('Please select a subscription package to continue');
            return;
        }

        setSaving(true);
        try {
            const logoUrl = logoFile ? await uploadLogo() : logoPreview;

            // Calculate expiry dates
            let subscriptionStatus = 'trial';
            let trialEndDate = undefined;
            let subscriptionExpiry = undefined;

            if (selectedPackage.hasFreeTrial) {
                const now = new Date();
                trialEndDate = new Date(now.setDate(now.getDate() + selectedPackage.trialDays)).toISOString();
                subscriptionStatus = 'trial';
            } else {
                subscriptionStatus = 'expired'; // Forces them to pay immediately to use
            }

            const saved = await saveOnboarding({
                business_logo: logoUrl ?? undefined,
                business_name: form.businessName.trim(),
                business_address: form.businessAddress.trim(),
                business_phone: form.businessPhone.trim(),
                business_email: form.businessEmail.trim(),
                nature_of_business: form.natureOfBusiness.trim() || undefined,
                business_size: form.businessSize || undefined,
                completed: true,
                // These will be processed by our updated upsert action
                packageId: selectedPackage.id,
                subscriptionStatus,
                trialEndDate,
                subscriptionExpiry
            } as any);

            if (!saved) { toast.error('Failed to save onboarding data. Please try again.'); return; }

            // Update settings local state
            await updateSettings({
                businessName: form.businessName.trim(),
                businessAddress: form.businessAddress.trim(),
                businessPhone: form.businessPhone.trim(),
                businessEmail: form.businessEmail.trim(),
                ...(logoUrl ? { businessLogo: logoUrl } : {}),
            });

            toast.success('Your business is ready! Redirecting... 🎉');
            setTimeout(() => {
                router.replace('/');
            }, 1500);
        } catch (err) {
            console.error('Onboarding submit error:', err);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col lg:flex-row">
            <div
                className="w-full lg:w-2/5 xl:w-1/3 flex flex-col px-6 py-8 lg:p-10 relative overflow-hidden lg:min-h-screen"
                style={{ background: 'hsl(var(--primary))' }}
            >
                <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full opacity-10 bg-white pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full opacity-10 bg-white pointer-events-none" />

                <div className="relative z-10">
                    <img
                        src="/lovable-uploads/798d07d7-1db7-498c-92f3-6f6346827d59.png"
                        alt="Gonzo Systems"
                        className="h-10 object-contain brightness-0 invert"
                    />
                </div>

                <div className="relative z-10 mt-auto mb-auto space-y-6 max-w-sm">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                        <Sparkles className="h-3.5 w-3.5" />
                        Step {currentStep} of 2
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {currentStep === 1 ? "Let's set up your business profile." : "Choose the perfect plan for your business."}
                    </h2>

                    <p className="text-white/80 text-lg">
                        {currentStep === 1 
                            ? "Provide your details to customize your experience and generate professional invoices."
                            : "Select a package that fits your current needs. You can upgrade or downgrade at any time."
                        }
                    </p>
                </div>

                <div className="relative z-10 mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <div className={`h-1.5 rounded-full transition-all duration-300 ${currentStep === 1 ? 'w-8 bg-white' : 'w-1.5 bg-white/30'}`} />
                        <div className={`h-1.5 rounded-full transition-all duration-300 ${currentStep === 2 ? 'w-8 bg-white' : 'w-1.5 bg-white/30'}`} />
                    </div>
                    <button
                        onClick={() => signOut()}
                        className="text-white/60 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 bg-gray-50/50">
                <div className="w-full max-w-2xl">
                    {currentStep === 1 ? (
                        /* STEP 1: BUSINESS PROFILE */
                        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 lg:p-10 border border-gray-100 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900">Business Details</h3>
                                <p className="text-gray-500 text-sm mt-1">Information used for your store profile and receipts.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group transition-all focus-within:ring-2 focus-within:ring-primary/20">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                                            <Building2 className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <div className="flex-1">
                                            <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Business Name</Label>
                                            <Input
                                                value={form.businessName}
                                                onChange={(e) => handleChange('businessName', e.target.value)}
                                                className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 text-gray-900 placeholder:text-gray-300 font-medium"
                                                placeholder="e.g. Gonza Enterprises"
                                            />
                                        </div>
                                    </div>
                                    {errors.businessName && <p className="text-destructive text-xs ml-4">{errors.businessName}</p>}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group transition-all focus-within:ring-2 focus-within:ring-primary/20">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                                                <Phone className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <div className="flex-1">
                                                <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Contact Phone</Label>
                                                <Input
                                                    value={form.businessPhone}
                                                    onChange={(e) => handleChange('businessPhone', e.target.value)}
                                                    className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 text-gray-900 placeholder:text-gray-300 font-medium"
                                                    placeholder="0700 000 000"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group transition-all focus-within:ring-2 focus-within:ring-primary/20">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <div className="flex-1">
                                                <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Public Email</Label>
                                                <Input
                                                    value={form.businessEmail}
                                                    onChange={(e) => handleChange('businessEmail', e.target.value)}
                                                    className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 text-gray-900 placeholder:text-gray-300 font-medium"
                                                    placeholder="hello@gonza.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {errors.businessPhone && <p className="text-destructive text-xs ml-4">{errors.businessPhone}</p>}
                                    {errors.businessEmail && <p className="text-destructive text-xs ml-4">{errors.businessEmail}</p>}

                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group transition-all focus-within:ring-2 focus-within:ring-primary/20">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                                            <MapPin className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <div className="flex-1">
                                            <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Store Address</Label>
                                            <Input
                                                value={form.businessAddress}
                                                onChange={(e) => handleChange('businessAddress', e.target.value)}
                                                className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 text-gray-900 placeholder:text-gray-300 font-medium"
                                                placeholder="Kampala, Uganda"
                                            />
                                        </div>
                                    </div>
                                    {errors.businessAddress && <p className="text-destructive text-xs ml-4">{errors.businessAddress}</p>}
                                </div>

                                <div className="space-y-4">
                                    <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Business Nature & Size</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Select value={form.businessSize} onValueChange={(val) => handleChange('businessSize', val)}>
                                            <SelectTrigger className="rounded-2xl border-gray-100 bg-gray-50 h-14 text-gray-900 font-medium">
                                                <div className="flex items-center gap-3">
                                                    <Users className="h-4 w-4 text-gray-400" />
                                                    <SelectValue placeholder="Team Size" />
                                                </div>
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-gray-100">
                                                {BUSINESS_SIZES.map((size) => (
                                                    <SelectItem key={size.value} value={size.value}>{size.label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>

                                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 focus-within:ring-2 focus-within:ring-primary/20">
                                            <Briefcase className="h-4 w-4 text-gray-400 shrink-0" />
                                            <Input
                                                value={form.natureOfBusiness}
                                                onChange={(e) => handleChange('natureOfBusiness', e.target.value)}
                                                className="border-none bg-transparent p-0 h-auto focus-visible:ring-0 text-gray-900 placeholder:text-gray-300 font-medium"
                                                placeholder="Industry (e.g. Retail)"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Business Logo</Label>
                                    <div
                                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                        onDragLeave={() => setIsDragging(false)}
                                        onDrop={handleDrop}
                                        className={`relative group border-2 border-dashed rounded-3xl p-8 transition-all flex flex-col items-center justify-center gap-4 ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-100 bg-gray-50 hover:border-gray-200'}`}
                                    >
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleLogoChange}
                                            accept="image/*"
                                            className="hidden"
                                        />

                                        {logoPreview ? (
                                            <div className="relative group/logo">
                                                <img src={logoPreview} alt="Logo" className="h-24 w-24 object-contain rounded-2xl" />
                                                <button
                                                    onClick={removeLogo}
                                                    className="absolute -top-2 -right-2 bg-white text-gray-900 p-1.5 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover/logo:opacity-100 transition-opacity"
                                                >
                                                    <X className="h-3.5 w-3.5" />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform">
                                                    <Upload className="h-6 w-6" />
                                                </div>
                                                <div className="text-center">
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        onClick={() => fileInputRef.current?.click()}
                                                        className="text-primary font-bold hover:bg-transparent p-0 h-auto"
                                                    >
                                                        Click to upload
                                                    </Button>
                                                    <p className="text-xs text-gray-400 mt-1">or drag and drop here</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    className="w-full bg-primary hover:bg-primary/95 text-white h-14 rounded-2xl text-base font-bold shadow-xl shadow-primary/20 transition-all active:scale-[0.98] group"
                                >
                                    Continue to Plans
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </div>
                    ) : (
                        /* STEP 2: PACKAGE SELECTION */
                        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 lg:p-10 border border-gray-100 animate-in fade-in slide-in-from-left-4 duration-500">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Select Subscription Plan</h3>
                                    <p className="text-gray-500 text-sm mt-1">Transparent pricing for every business stage.</p>
                                </div>
                                <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    onClick={prevStep}
                                    className="text-gray-400 hover:text-gray-900 font-bold"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back
                                </Button>
                            </div>

                            {packagesLoading ? (
                                <div className="py-20 flex flex-col items-center justify-center gap-4">
                                    <Loader2 className="h-8 w-8 text-primary animate-spin" />
                                    <p className="text-gray-400 text-sm font-medium">Fetching available plans...</p>
                                </div>
                            ) : packages.length === 0 ? (
                                <div className="py-16 text-center space-y-4">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto">
                                        <X className="h-8 w-8 text-red-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">No Packages Available</h4>
                                        <p className="text-gray-500 text-sm max-w-xs mx-auto">We couldn't load subscription plans. Please contact Gonza support to continue.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {packages.map((pkg) => (
                                        <div 
                                            key={pkg.id}
                                            onClick={() => setSelectedPackage(pkg)}
                                            className={`relative cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300 ${selectedPackage?.id === pkg.id 
                                                ? 'border-primary bg-primary/[0.02] shadow-lg shadow-primary/10' 
                                                : 'border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-gray-50'
                                            }`}
                                        >
                                            {selectedPackage?.id === pkg.id && (
                                                <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                                                    <Check className="h-3.5 w-3.5 text-white" />
                                                </div>
                                            )}

                                            {pkg.hasFreeTrial && (
                                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-100 mb-4">
                                                    <Sparkles className="h-3 w-3" />
                                                    {pkg.trialDays} Day Trial
                                                </div>
                                            )}

                                            <h4 className="text-lg font-bold text-gray-900">{pkg.name}</h4>
                                            <div className="mt-2 flex items-baseline gap-1">
                                                <span className="text-2xl font-bold text-gray-900">UGX {pkg.monthlyPrice.toLocaleString()}</span>
                                                <span className="text-gray-400 text-xs font-medium">/month</span>
                                            </div>

                                            <div className="mt-6 space-y-3">
                                                <div className="flex items-center gap-3 text-sm">
                                                    <Users className="h-4 w-4 text-gray-400" />
                                                    <span className="text-gray-600">Up to <span className="font-bold text-gray-900">{pkg.unlimitedUsers ? '∞' : pkg.maxUsers}</span> users</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm">
                                                    <Box className="h-4 w-4 text-gray-400" />
                                                    <span className="text-gray-600">Up to <span className="font-bold text-gray-900">{pkg.unlimitedProducts ? '∞' : pkg.maxProducts}</span> products</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-gray-400" />
                                                    <span className="text-gray-600">Standard support</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="space-y-4">
                                <Button
                                    disabled={saving || !selectedPackage}
                                    onClick={handleSubmit}
                                    className="w-full bg-primary hover:bg-primary/95 text-white h-14 rounded-2xl text-base font-bold shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
                                >
                                    {saving ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : selectedPackage?.hasFreeTrial ? (
                                        `Activate ${selectedPackage.trialDays}-Day Free Trial`
                                    ) : (
                                        "Continue to Payment"
                                    )}
                                </Button>
                                
                                <p className="text-center text-[10px] text-gray-400 px-8 leading-relaxed uppercase tracking-widest font-medium">
                                    By continuing, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
