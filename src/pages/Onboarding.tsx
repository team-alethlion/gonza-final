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

    const [saving, setSaving] = useState(false);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

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

    const uploadLogo = async (): Promise<string | null> => {
        // Mock image upload for now – in a real app this would call a server action
        console.warn('Logo upload placeholder – integration with Prisma server action required');
        return logoPreview;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setSaving(true);
        try {
            const logoUrl = logoFile ? await uploadLogo() : logoPreview;

            const saved = await saveOnboarding({
                business_logo: logoUrl ?? undefined,
                business_name: form.businessName.trim(),
                business_address: form.businessAddress.trim(),
                business_phone: form.businessPhone.trim(),
                business_email: form.businessEmail.trim(),
                nature_of_business: form.natureOfBusiness.trim() || undefined,
                business_size: form.businessSize || undefined,
                completed: true,
            });

            if (!saved) { toast.error('Failed to save onboarding data. Please try again.'); return; }

            await updateSettings({
                businessName: form.businessName.trim(),
                businessAddress: form.businessAddress.trim(),
                businessPhone: form.businessPhone.trim(),
                businessEmail: form.businessEmail.trim(),
                ...(logoUrl ? { businessLogo: logoUrl } : {}),
            });

            toast.success('Business profile set up! Welcome aboard 🎉');
            router.replace('/');
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

                <div className="relative z-10 mt-6 lg:mt-auto lg:mb-auto space-y-4">
                    <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                        <Sparkles className="h-3.5 w-3.5" />
                        One-time setup
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                        Let's get your<br className="hidden sm:block" /> business ready.
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                        Fill in your business details to personalise your workspace. You can always update these later in Settings.
                    </p>
                    <ul className="hidden sm:flex flex-col gap-2.5 text-sm text-white/80 pt-2">
                        {[
                            'Appears on receipts & invoices',
                            'Pre-fills your Settings page',
                            'Helps your team identify the business',
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-white/50 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="relative z-10 hidden lg:block text-white/30 text-xs mt-auto pt-8">
                    © {new Date().getFullYear()} Gonzo Systems
                </p>
            </div>

            <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="flex-1 flex items-start justify-center px-4 sm:px-8 py-8 lg:py-16">
                    <div className="w-full max-w-xl">
                        <div className="flex justify-between items-start mb-6 font-geist">
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-foreground">Set up your business</h1>
                                <p className="text-muted-foreground text-sm mt-1">
                                    This information will appear on your receipts and reports.
                                </p>
                            </div>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => signOut()}
                                className="text-muted-foreground hover:text-foreground gap-2"
                            >
                                <LogOut className="h-4 w-4" />
                                Logout
                            </Button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-1.5">
                                <Label className="text-sm font-medium">
                                    Business Logo{' '}
                                    <span className="text-muted-foreground font-normal text-xs">(optional)</span>
                                </Label>
                                {logoPreview ? (
                                    <div className="flex items-center gap-3 p-3 border border-border rounded-lg bg-muted/30">
                                        <img
                                            src={logoPreview}
                                            alt="Logo preview"
                                            className="h-12 w-12 object-contain rounded-md border border-border bg-white shrink-0"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate">{logoFile?.name || 'Logo'}</p>
                                            {logoFile && (
                                                <p className="text-xs text-muted-foreground">{(logoFile.size / 1024).toFixed(0)} KB</p>
                                            )}
                                        </div>
                                        <Button type="button" variant="ghost" size="sm" onClick={removeLogo}
                                            className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0 h-8 w-8 p-0">
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ) : (
                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                        onDragLeave={() => setIsDragging(false)}
                                        onClick={() => fileInputRef.current?.click()}
                                        className={`flex items-center gap-3 p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${isDragging
                                            ? 'border-primary bg-primary/5'
                                            : 'border-border hover:border-primary/40 hover:bg-muted/20'
                                            }`}
                                    >
                                        <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                                            <Upload className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">
                                                {isDragging ? 'Drop here' : 'Click or drag to upload'}
                                            </p>
                                            <p className="text-xs text-muted-foreground">PNG, JPG, SVG — max 5MB</p>
                                        </div>
                                    </div>
                                )}
                                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="businessName" className="text-sm font-medium flex items-center gap-1.5">
                                    <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                                    Business Name <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="businessName"
                                    value={form.businessName}
                                    onChange={(e) => handleChange('businessName', e.target.value)}
                                    placeholder=""
                                    className={errors.businessName ? 'border-destructive' : ''}
                                />
                                {errors.businessName && <p className="text-xs text-destructive">{errors.businessName}</p>}
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="businessAddress" className="text-sm font-medium flex items-center gap-1.5">
                                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                                    Location / Address <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="businessAddress"
                                    value={form.businessAddress}
                                    onChange={(e) => handleChange('businessAddress', e.target.value)}
                                    placeholder=""
                                    className={errors.businessAddress ? 'border-destructive' : ''}
                                />
                                {errors.businessAddress && <p className="text-xs text-destructive">{errors.businessAddress}</p>}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="businessPhone" className="text-sm font-medium flex items-center gap-1.5">
                                        <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                                        Phone <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="businessPhone"
                                        type="tel"
                                        value={form.businessPhone}
                                        onChange={(e) => handleChange('businessPhone', e.target.value)}
                                        placeholder=""
                                        className={errors.businessPhone ? 'border-destructive' : ''}
                                    />
                                    {errors.businessPhone && <p className="text-xs text-destructive">{errors.businessPhone}</p>}
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="businessEmail" className="text-sm font-medium flex items-center gap-1.5">
                                        <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                                        Email <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="businessEmail"
                                        type="email"
                                        value={form.businessEmail}
                                        onChange={(e) => handleChange('businessEmail', e.target.value)}
                                        placeholder=""
                                        className={errors.businessEmail ? 'border-destructive' : ''}
                                    />
                                    {errors.businessEmail && <p className="text-xs text-destructive">{errors.businessEmail}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="natureOfBusiness" className="text-sm font-medium flex items-center gap-1.5">
                                        <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                                        Nature of Business <span className="text-muted-foreground font-normal text-xs">(optional)</span>
                                    </Label>
                                    <Input
                                        id="natureOfBusiness"
                                        value={form.natureOfBusiness}
                                        onChange={(e) => handleChange('natureOfBusiness', e.target.value)}
                                        placeholder=""
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="businessSize" className="text-sm font-medium flex items-center gap-1.5">
                                        <Users className="h-3.5 w-3.5 text-muted-foreground" />
                                        Business Size <span className="text-muted-foreground font-normal text-xs">(optional)</span>
                                    </Label>
                                    <Select value={form.businessSize} onValueChange={(val) => handleChange('businessSize', val)}>
                                        <SelectTrigger id="businessSize">
                                            <SelectValue placeholder="No. of employees" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {BUSINESS_SIZES.map((s) => (
                                                <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="pt-2 pb-4">
                                <Button type="submit" disabled={saving} className="w-full h-11 font-semibold gap-2">
                                    {saving ? (
                                        <><Loader2 className="h-4 w-4 animate-spin" /> Setting up your business...</>
                                    ) : (
                                        <>Complete Setup <ArrowRight className="h-4 w-4" /></>
                                    )}
                                </Button>
                                <p className="text-center text-xs text-muted-foreground mt-3">
                                    You can update all of this later in <span className="font-medium">Settings</span>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;
