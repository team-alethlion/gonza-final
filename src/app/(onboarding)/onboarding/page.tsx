"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { useBusiness } from "@/contexts/BusinessContext";
import { getPackagesAction } from "@/app/actions/packages";
import { completeInitialOnboardingAction } from "@/app/actions/business-settings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  User, 
  Key, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Loader2, 
  ShieldCheck,
  Package as PackageIcon,
  Upload,
  CreditCard,
  Building,
  ChevronRight,
  Zap,
  LogOut,
  Target,
  Layout,
  Store,
  Globe,
  Users,
  Box,
  TrendingUp
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const BUSINESS_SIZES = [
  { value: "1-5", label: "1–5 Team Members" },
  { value: "6-20", label: "6–20 Team Members" },
  { value: "21-50", label: "21–50 Team Members" },
  { value: "50+", label: "50+ Team Members" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const { user, signOut, updateSession } = useAuth();
  const { currentBusiness } = useBusiness();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState<any[]>([]);
  const [packagesLoading, setPackagesLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    businessName: "",
    businessAddress: "",
    businessPhone: "",
    businessEmail: user?.email || "",
    natureOfBusiness: "",
    businessSize: "",
    businessLogo: "",
    userName: user?.name || "",
    userPhone: "",
    userPin: "",
    selectedPackageId: ""
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchPackages() {
      setPackagesLoading(true);
      const res = await getPackagesAction();
      if (res.success) setPackages(res.data || []);
      setPackagesLoading(false);
    }
    fetchPackages();
  }, []);

  useEffect(() => {
    if (user?.isOnboarded) {
      router.replace("/agency");
    }
  }, [user, router]);

  const updateForm = (updates: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Logo must be smaller than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setLogoPreview(base64);
        updateForm({ businessLogo: base64 });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateStep1 = () => {
    if (!formData.businessName || !formData.businessAddress || !formData.businessPhone) {
      toast.error("Please provide your trading name, headquarters address, and contact number.");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.userName || !formData.userPhone) {
      toast.error("Full name and contact number are required for security compliance.");
      return false;
    }
    if (formData.userPin.length !== 4 || !/^\d+$/.test(formData.userPin)) {
      toast.error("Your master PIN must be exactly 4 digits.");
      return false;
    }
    return true;
  };

  const handleComplete = async () => {
    if (!formData.selectedPackageId) {
      toast.error("Please select an enterprise tier to proceed.");
      return;
    }

    setLoading(true);
    try {
      const pkg = packages.find(p => p.id === formData.selectedPackageId);
      
      const res = await completeInitialOnboardingAction({
        userId: user?.id,
        agencyId: user?.agencyId,
        branchId: currentBusiness?.id,
        businessName: formData.businessName,
        businessAddress: formData.businessAddress,
        businessPhone: formData.businessPhone,
        businessEmail: formData.businessEmail,
        businessLogo: formData.businessLogo,
        userName: formData.userName,
        userPhone: formData.userPhone,
        userPin: formData.userPin,
        packageId: pkg.id,
        subscriptionStatus: pkg.hasFreeTrial ? "trial" : "expired",
        trialEndDate: pkg.hasFreeTrial ? new Date(Date.now() + pkg.trialDays * 24 * 60 * 60 * 1000).toISOString() : undefined
      });

      if (res.success) {
        toast.success("Enterprise deployment successful.");
        await updateSession({
          isOnboarded: true,
          agencyOnboarded: true,
          subscriptionStatus: pkg.hasFreeTrial ? "trial" : "expired"
        });
        router.replace("/agency");
      } else {
        toast.error(res.error || "Configuration error detected.");
      }
    } catch (error) {
      console.error("Onboarding error:", error);
      toast.error("System synchronization failed.");
    } finally {
      setLoading(false);
    }
  };

  const progress = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen bg-white flex flex-col font-inter text-[#0F172A]">
      {/* Dynamic Navigation Header */}
      <header className="w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 transition-transform hover:rotate-3">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight leading-none">Gonza Systems</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Enterprise Cloud</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-3 py-2 px-4 bg-slate-50 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-500">Secure Protocol Active</span>
            </div>
            <button 
              onClick={() => signOut()} 
              className="text-slate-400 hover:text-red-600 font-black text-[11px] uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" /> Termination
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
        
        {/* Navigation & Contextual Intelligence */}
        <aside className="lg:col-span-4 p-10 lg:p-16 bg-[#FAFAFA] border-r border-slate-100 flex flex-col justify-between">
          <div className="space-y-16">
            <div className="space-y-6">
              <Badge className="bg-primary text-white border-none font-black text-[10px] px-3 py-1 tracking-widest rounded-lg">STAGE 0{currentStep}</Badge>
              <div className="space-y-4">
                <h2 className="text-5xl font-black leading-[1.1] tracking-tighter text-slate-900">
                  {currentStep === 1 && "Global Entity Setup."}
                  {currentStep === 2 && "Command Security."}
                  {currentStep === 3 && "License Deployment."}
                </h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">
                  {currentStep === 1 && "Initialize your organization's presence in our high-availability commerce network."}
                  {currentStep === 2 && "Establish the primary administrative identity and secure your master access protocols."}
                  {currentStep === 3 && "Deploy the necessary system quotas and licensing for your operational scale."}
                </p>
              </div>
            </div>

            <nav className="space-y-8">
              {[
                { s: 1, title: "Organization", desc: "Corporate Identity", icon: Store },
                { s: 2, title: "Security", desc: "Access Control", icon: ShieldCheck },
                { s: 3, title: "Licensing", desc: "Tier Selection", icon: Zap },
              ].map((step) => (
                <div key={step.s} className="relative flex items-center gap-6">
                  <div className={`z-10 w-12 h-12 rounded-[1.25rem] flex items-center justify-center transition-all duration-700 border-2 ${
                    currentStep > step.s ? "bg-emerald-500 border-emerald-500 text-white shadow-2xl shadow-emerald-200" :
                    currentStep === step.s ? "bg-white border-primary text-primary shadow-2xl shadow-primary/10 scale-110" :
                    "bg-white border-slate-200 text-slate-300"
                  }`}>
                    {currentStep > step.s ? <Check className="w-6 h-6 font-black" /> : <step.icon className="w-6 h-6" />}
                  </div>
                  <div className="flex flex-col">
                    <h4 className={`text-[11px] font-black uppercase tracking-[0.2em] ${currentStep === step.s ? "text-primary" : "text-slate-400"}`}>{step.title}</h4>
                    <span className={`text-base font-bold ${currentStep === step.s ? "text-slate-900" : "text-slate-400"}`}>{step.desc}</span>
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h5 className="font-black text-xs uppercase tracking-widest text-slate-900">Regional Compliance</h5>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">
                  System parameters are automatically adjusted for high-concurrency retail environments in East Africa.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Primary Functional Interface */}
        <main className="lg:col-span-8 p-10 lg:p-24 flex flex-col items-center overflow-y-auto">
          <div className="w-full max-w-2xl space-y-16">
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Deployment Status</span>
                <span className="text-sm font-black tabular-nums">{Math.round(progress)}%</span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full p-1 shadow-inner">
                <div 
                  className="h-full bg-primary transition-all duration-1000 ease-in-out rounded-full shadow-[0_0_15px_rgba(37,40,97,0.4)]" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
              
              {/* STEP 1: ORGANIZATION SETUP */}
              {currentStep === 1 && (
                <div className="space-y-12">
                  <div className="flex flex-col sm:flex-row items-center gap-12 p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl shadow-slate-200/20">
                    <div className="relative group">
                      <div className={`w-40 h-40 rounded-[3rem] border-2 border-dashed transition-all duration-700 flex items-center justify-center overflow-hidden ${
                        logoPreview ? "border-primary bg-primary/[0.01]" : "border-slate-200 bg-slate-50/50 hover:border-primary/50"
                      }`}>
                        {logoPreview ? (
                          <img src={logoPreview} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          <Layout className="w-12 h-12 text-slate-300" />
                        )}
                      </div>
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute -bottom-3 -right-3 bg-primary text-white p-4 rounded-[1.5rem] shadow-2xl hover:scale-110 hover:rotate-6 transition-all active:scale-95"
                      >
                        <Upload className="w-6 h-6" />
                      </button>
                      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleLogoChange} />
                    </div>
                    <div className="space-y-3 text-center sm:text-left">
                      <h3 className="text-2xl font-black tracking-tight">Corporate Branding</h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        Upload your high-resolution logo. This asset will be used for system headers and thermal receipt generation.
                      </p>
                      {logoPreview && (
                        <button onClick={() => {setLogoPreview(null); updateForm({businessLogo: ""})}} className="text-[10px] font-black text-red-500 uppercase tracking-widest hover:underline pt-2">
                          Purge Asset
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Trading Identity</Label>
                        <Input 
                          value={formData.businessName} 
                          onChange={e => updateForm({businessName: e.target.value})} 
                          className="h-16 bg-white border-slate-200 rounded-2xl focus:border-primary focus:ring-8 focus:ring-primary/5 font-black px-6 text-xl transition-all" 
                          placeholder="e.g. Gonza Retail" 
                        />
                      </div>
                      <div className="space-y-3">
                        <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Primary Hotline</Label>
                        <Input 
                          value={formData.businessPhone} 
                          onChange={e => updateForm({businessPhone: e.target.value})} 
                          className="h-16 bg-white border-slate-200 rounded-2xl focus:border-primary focus:ring-8 focus:ring-primary/5 font-black px-6 text-xl transition-all" 
                          placeholder="+256 ..." 
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Global Headquarters</Label>
                      <Input 
                        value={formData.businessAddress} 
                        onChange={e => updateForm({businessAddress: e.target.value})} 
                        className="h-16 bg-white border-slate-200 rounded-2xl focus:border-primary focus:ring-8 focus:ring-primary/5 font-black px-6 text-xl transition-all" 
                        placeholder="Plot, Street, City, Country" 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Team Scale</Label>
                        <Select value={formData.businessSize} onValueChange={v => updateForm({businessSize: v})}>
                          <SelectTrigger className="h-16 bg-white border-slate-200 rounded-2xl font-black px-6 text-lg focus:ring-8 focus:ring-primary/5 transition-all">
                            <SelectValue placeholder="Select Size" />
                          </SelectTrigger>
                          <SelectContent className="rounded-[2rem] border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                            {BUSINESS_SIZES.map(s => <SelectItem key={s.value} value={s.value} className="py-4 px-6 rounded-2xl font-bold">{s.label}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Operational Vertical</Label>
                        <Input 
                          value={formData.natureOfBusiness} 
                          onChange={e => updateForm({natureOfBusiness: e.target.value})} 
                          className="h-16 bg-white border-slate-200 rounded-2xl focus:border-primary focus:ring-8 focus:ring-primary/5 font-black px-6 text-xl transition-all" 
                          placeholder="e.g. Retail, Pharmacy" 
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={() => validateStep1() && setCurrentStep(2)} 
                    className="w-full h-24 bg-primary hover:bg-primary/95 text-white rounded-[2.5rem] font-black text-2xl uppercase tracking-[0.1em] shadow-[0_20px_40px_-5px_rgba(37,40,97,0.3)] transition-all hover:translate-y-[-4px] active:translate-y-[2px]"
                  >
                    Proceed to Security
                    <ChevronRight className="ml-4 w-8 h-8" />
                  </Button>
                </div>
              )}

              {/* STEP 2: SECURITY CONFIGURATION */}
              {currentStep === 2 && (
                <div className="space-y-12">
                  <div className="grid gap-10">
                    <div className="space-y-3">
                      <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Legal Full Name</Label>
                      <Input 
                        value={formData.userName} 
                        onChange={e => updateForm({userName: e.target.value})} 
                        className="h-16 bg-white border-slate-200 rounded-2xl focus:border-primary focus:ring-8 focus:ring-primary/5 font-black px-6 text-xl transition-all" 
                        placeholder="Full Administrator Name" 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Direct Contact Hub</Label>
                      <Input 
                        value={formData.userPhone} 
                        onChange={e => updateForm({userPhone: e.target.value})} 
                        className="h-16 bg-white border-slate-200 rounded-2xl focus:border-primary focus:ring-8 focus:ring-primary/5 font-black px-6 text-xl transition-all" 
                        placeholder="Personal verification number" 
                      />
                    </div>

                    <div className="p-12 bg-[#0F172A] rounded-[4rem] text-white space-y-10 shadow-3xl">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <h3 className="font-black text-2xl tracking-tighter">Security Protocol</h3>
                          <Badge className="bg-primary text-white border-none font-black text-[9px] uppercase tracking-widest px-3 py-1">Master Override</Badge>
                        </div>
                        <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center backdrop-blur-3xl border border-white/10 shadow-inner">
                          <Key className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <Input 
                          type="password" 
                          maxLength={4}
                          value={formData.userPin} 
                          onChange={e => updateForm({userPin: e.target.value.replace(/\D/g, '')})} 
                          className="h-24 text-center text-6xl tracking-[1.5em] font-black bg-white/[0.03] border-none rounded-3xl focus:ring-8 focus:ring-primary/20 text-white placeholder:text-white/5" 
                          placeholder="0000" 
                        />
                        <p className="text-[11px] text-white/30 font-bold text-center uppercase tracking-[0.25em] px-8 leading-relaxed">
                          This code is required for cross-branch transitions and critical data authorization.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <Button variant="outline" onClick={() => setCurrentStep(1)} className="h-20 flex-1 rounded-[2rem] font-black uppercase tracking-widest border-slate-200 text-slate-400 hover:bg-slate-50 transition-all">
                      <ArrowLeft className="mr-3 w-5 h-5" /> Previous
                    </Button>
                    <Button onClick={() => validateStep2() && setCurrentStep(3)} className="h-20 flex-[2] bg-primary hover:bg-primary/95 text-white rounded-[2rem] font-black text-xl uppercase tracking-wider shadow-2xl shadow-primary/20 transition-all hover:translate-y-[-4px]">
                      Lock & Proceed <ArrowRight className="ml-3 w-6 h-6" />
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3: LICENSING DEPLOYMENT */}
              {currentStep === 3 && (
                <div className="space-y-12">
                  <div className="text-center space-y-4">
                    <h3 className="text-3xl font-black tracking-tighter">Operational Licensing</h3>
                    <p className="text-slate-500 font-medium text-lg">Initialize your deployment with a tier that matches your business scale.</p>
                  </div>

                  {packagesLoading ? (
                    <div className="py-24 flex flex-col items-center justify-center gap-6 text-primary">
                      <div className="relative">
                        <Loader2 className="h-16 w-16 animate-spin text-primary opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Globe className="w-6 h-6 animate-pulse" />
                        </div>
                      </div>
                      <p className="font-black text-[11px] uppercase tracking-[0.3em]">Accessing System Quotas...</p>
                    </div>
                  ) : (
                    <div className="grid gap-6">
                      {packages.filter(p => p.isActive).map((pkg) => (
                        <div 
                          key={pkg.id}
                          onClick={() => updateForm({selectedPackageId: pkg.id})}
                          className={`relative cursor-pointer p-10 rounded-[3.5rem] border-2 transition-all duration-700 flex items-center justify-between group overflow-hidden ${formData.selectedPackageId === pkg.id 
                            ? "border-primary bg-primary/[0.02] shadow-[0_40px_80px_-20px_rgba(37,40,97,0.2)] scale-[1.02]" 
                            : "border-slate-100 hover:border-slate-200 bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-8">
                            <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-700 ${formData.selectedPackageId === pkg.id ? "bg-primary text-white scale-110 shadow-2xl rotate-3" : "bg-slate-50 text-slate-300"}`}>
                              <Zap className={`w-10 h-10 ${formData.selectedPackageId === pkg.id ? "fill-current" : ""}`} />
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-4">
                                <h4 className="font-black text-slate-900 text-2xl tracking-tighter">{pkg.name}</h4>
                                {pkg.isDefault && <Badge className="bg-primary text-white border-none text-[10px] font-black tracking-widest px-3 py-1 rounded-full">OPTIMAL</Badge>}
                              </div>
                              <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-slate-400">
                                  <Users className="w-4 h-4" />
                                  <span className="text-xs font-black uppercase tracking-widest">{pkg.unlimitedUsers ? "Unlimited" : pkg.maxUsers} Users</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400">
                                  <TrendingUp className="w-4 h-4" />
                                  <span className="text-xs font-black uppercase tracking-widest">{pkg.unlimitedSales ? "Unlimited" : pkg.maxSalesPerMonth} Sales</span>
                                </div>
                              </div>
                              <p className="text-sm font-black text-primary uppercase tracking-[0.1em] mt-2">
                                UGX {Number(pkg.monthlyPrice).toLocaleString()} / Billing Cycle
                              </p>
                            </div>
                          </div>
                          
                          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${formData.selectedPackageId === pkg.id ? "bg-emerald-500 border-emerald-500 shadow-2xl shadow-emerald-200" : "bg-slate-50 border-slate-100"}`}>
                            {formData.selectedPackageId === pkg.id && <Check className="w-6 h-6 text-white font-black" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-10 pt-10 border-t border-slate-100">
                    <Button 
                      onClick={handleComplete} 
                      disabled={loading || !formData.selectedPackageId} 
                      className="w-full h-28 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-[3.5rem] font-black text-3xl uppercase tracking-[0.15em] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.4)] transition-all hover:translate-y-[-6px] active:translate-y-[2px]"
                    >
                      {loading ? <Loader2 className="w-10 h-10 animate-spin" /> : "Deploy System"}
                    </Button>
                    
                    <div className="flex flex-col items-center gap-4 text-slate-300">
                      <div className="flex items-center gap-3 font-black uppercase tracking-[0.3em] text-[11px]">
                        <ShieldCheck className="w-5 h-5" />
                        AES-256 Bit Encrypted Deployment
                      </div>
                      <p className="text-[10px] font-bold text-center opacity-50 px-12 leading-relaxed uppercase tracking-widest">
                        System configuration requires up to 60 seconds for global database propagation. 
                        Do not terminate the session.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
