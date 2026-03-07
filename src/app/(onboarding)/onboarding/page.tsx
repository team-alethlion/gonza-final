/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { useBusiness } from "@/contexts/BusinessContext";
import {
  completeInitialOnboardingAction,
  getAccountStatusAction,
} from "@/app/actions/business-settings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
  ShieldAlert,
  Upload,
  LogOut,
  Layout,
  Store,
  Globe,
  Users,
  TrendingUp,
  MapPin,
  Phone,
  Briefcase,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const BUSINESS_SIZES = [
  { value: "1-5", label: "1–5 People" },
  { value: "6-20", label: "6–20 People" },
  { value: "21-50", label: "21–50 People" },
  { value: "50+", label: "Over 50 People" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const {
    user,
    signOut,
    updateSession,
    loading: authLoading,
    status,
  } = useAuth();
  const { currentBusiness } = useBusiness();

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [accountStatus, setAccountStatus] = useState<any>(null);

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
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processImageFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }
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
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) processImageFile(file);
    },
    [processImageFile],
  );

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    async function fetchAccountStatus() {
      if (user?.id) {
        const status = await getAccountStatusAction(user.id);
        setAccountStatus(status);
      }
    }
    fetchAccountStatus();
  }, [user?.id]);

  useEffect(() => {
    if (user?.isOnboarded || (user as any)?.agencyOnboarded) {
      console.log("[Onboarding] User already onboarded, redirecting...");
      router.replace("/agency");
    }
  }, [user?.isOnboarded, (user as any)?.agencyOnboarded, router]);

  const updateForm = (updates: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const validateStep1 = () => {
    if (
      !formData.businessName ||
      !formData.businessAddress ||
      !formData.businessPhone
    ) {
      toast.error(
        "Please fill in your business name, address, and contact number.",
      );
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.userName || !formData.userPhone) {
      toast.error("Your name and contact number are required.");
      return false;
    }
    if (formData.userPin.length !== 4 || !/^\d+$/.test(formData.userPin)) {
      toast.error("Your security PIN must be exactly 4 digits.");
      return false;
    }
    return true;
  };

  const handleComplete = async () => {
    if (!user?.id) {
      toast.error("Session expired. Please log in again.");
      return;
    }
    setLoading(true);
    try {
      // Use existing subscription info from account status
      const subStatus =
        accountStatus?.subscription_status ||
        user?.subscriptionStatus ||
        "trial";
      const trialEndDate =
        accountStatus?.next_billing_date || user?.trialEndDate;
      const packageId = accountStatus?.package_id;

      const res = await completeInitialOnboardingAction({
        userId: user?.id,
        agencyId: user?.agencyId,
        branchId: currentBusiness?.id,
        businessName: formData.businessName,
        businessAddress: formData.businessAddress,
        businessPhone: formData.businessPhone,
        businessEmail: formData.businessEmail,
        businessLogo: formData.businessLogo,
        natureOfBusiness: formData.natureOfBusiness,
        businessSize: formData.businessSize,
        userName: formData.userName,
        userPhone: formData.userPhone,
        userPin: formData.userPin,
        packageId: packageId,
        subscriptionStatus: subStatus,
        trialEndDate: trialEndDate,
      });

      if (res.success) {
        toast.success("Welcome aboard! Your setup is complete.");
        await updateSession({
          isOnboarded: true,
          agencyOnboarded: true,
          subscriptionStatus: subStatus,
        });
        router.replace("/agency");
      } else {
        toast.error(res.error || "Something went wrong during setup.");
      }
    } catch (error) {
      console.error("Onboarding error:", error);
      toast.error("Connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const calculateProgress = () => {
    const step1Fields = [
      "businessName",
      "businessAddress",
      "businessPhone",
      "natureOfBusiness",
      "businessSize",
    ];
    const step2Fields = ["userName", "userPhone", "userPin"];

    const filledStep1 = step1Fields.filter(
      (f) => !!(formData as any)[f],
    ).length;
    const filledStep2 = step2Fields.filter(
      (f) => !!(formData as any)[f],
    ).length;

    // Total fields = 8
    const totalFields = step1Fields.length + step2Fields.length;
    const totalFilled = filledStep1 + filledStep2;

    return (totalFilled / totalFields) * 100;
  };

  const progress = calculateProgress();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
          <p className="text-slate-500 font-bold animate-pulse">
            Initializing your setup...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-inter text-[#0F172A]">
      {status === "unauthenticated" && (
        <div className="bg-red-600 text-white px-6 py-3 flex items-center justify-between animate-in slide-in-from-top duration-500 sticky top-0 z-[60]">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5" />
            <p className="text-sm font-bold">
              Your session has expired. Please log out and sign back in to
              continue.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => signOut()}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold">
            Log Out Now
          </Button>
        </div>
      )}
      {/* Navigation Header */}
      <header className="w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center p-1 bg-primary rounded-xl shadow-lg shadow-primary/20">
              <img
                src="/lovable-uploads/logo sys white-01.png"
                alt="Gonza Logo"
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="text-slate-500 hover:text-red-600 font-bold text-sm transition-colors flex items-center gap-2">
            <LogOut className="w-4 h-4" /> Log Out
          </button>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-4 p-8 lg:p-12 bg-slate-50/50 border-r border-slate-100 flex flex-col">
          <div className="space-y-12">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-none font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                Step {currentStep} of 2
              </Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                  {currentStep === 1 ? "Business Info" : "Your Profile"}
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {currentStep === 1
                    ? "Tell us about your business to help us personalize your experience."
                    : "Set up your admin profile and security PIN for your account."}
                </p>
              </div>
            </div>

            <nav className="space-y-6">
              {[
                {
                  s: 1,
                  title: "Your Business",
                  desc: "Basic Information",
                  icon: Store,
                },
                {
                  s: 2,
                  title: "Your Profile",
                  desc: "Personal Security",
                  icon: User,
                },
              ].map((step) => (
                <div key={step.s} className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      currentStep > step.s
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-100"
                        : currentStep === step.s
                        ? "bg-white border-2 border-primary text-primary shadow-xl shadow-primary/5"
                        : "bg-white border border-slate-200 text-slate-300"
                    }`}>
                    {currentStep > step.s ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h4
                      className={`text-xs font-bold uppercase tracking-wider ${
                        currentStep === step.s
                          ? "text-primary"
                          : "text-slate-400"
                      }`}>
                      {step.title}
                    </h4>
                    <span
                      className={`text-sm font-semibold ${
                        currentStep === step.s
                          ? "text-slate-900"
                          : "text-slate-400"
                      }`}>
                      {step.desc}
                    </span>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Form Content */}
        <main className="lg:col-span-8 p-8 lg:p-16 flex flex-col items-center overflow-y-auto">
          <div className="w-full max-w-xl space-y-12">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-primary/60">
                <span>Overall Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-700 ease-in-out rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* STEP 1: BUSINESS SETUP */}
              {currentStep === 1 && (
                <div className="space-y-10">
                  {accountStatus?.is_trial && (
                    <div className="flex flex-col gap-3 p-6 bg-amber-50 rounded-3xl border border-amber-100 text-amber-900 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
                      <div className="flex items-center gap-2">
                        <div className="bg-amber-100 p-1.5 rounded-full">
                          <ShieldAlert className="w-5 h-5 text-amber-600" />
                        </div>
                        <span className="font-bold text-sm tracking-tight">
                          Free Trial Protocol Active
                        </span>
                      </div>
                      <p className="text-xs font-medium text-amber-800/80 leading-relaxed ml-1">
                        During your trial, you can explore all features with a
                        limit of{" "}
                        <span className="font-bold text-amber-900">
                          1 business location
                        </span>
                        . Complete setup to start your evaluation.
                      </p>
                    </div>
                  )}

                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`flex flex-col items-center gap-8 p-10 bg-slate-50/50 rounded-[2.5rem] border-2 border-dashed transition-all duration-300 ${
                      isDragging
                        ? "border-primary bg-primary/[0.03] scale-[1.02]"
                        : "border-slate-100 hover:border-slate-200"
                    }`}>
                    <div className="relative group">
                      <div
                        className={`w-36 h-36 rounded-[2rem] border-2 transition-all duration-500 flex items-center justify-center overflow-hidden shadow-2xl shadow-slate-200/50 ${
                          logoPreview
                            ? "border-primary bg-white rotate-1"
                            : "border-white bg-white"
                        }`}>
                        {logoPreview ? (
                          <img
                            src={logoPreview}
                            alt="Preview"
                            className="w-full h-full object-contain p-4"
                          />
                        ) : (
                          <Layout className="w-12 h-12 text-slate-200" />
                        )}
                      </div>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute -bottom-2 -right-2 bg-primary text-white p-3.5 rounded-2xl shadow-xl hover:scale-110 hover:rotate-6 transition-all active:scale-95">
                        <Upload className="w-5 h-5" />
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) processImageFile(file);
                        }}
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold tracking-tight">
                        Business Logo
                      </h3>
                      <p className="text-sm text-slate-500 max-w-[320px] font-medium leading-relaxed">
                        Drag and drop your logo here or click upload. This will
                        appear on all your receipts.
                      </p>
                      {logoPreview && (
                        <button
                          onClick={() => {
                            setLogoPreview(null);
                            updateForm({ businessLogo: "" });
                          }}
                          className="text-xs font-bold text-red-500 hover:underline pt-2 uppercase tracking-widest">
                          Purge Logo
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-slate-700">
                        Business Name
                      </Label>
                      <div className="relative">
                        <Store className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          value={formData.businessName}
                          onChange={(e) =>
                            updateForm({ businessName: e.target.value })
                          }
                          className="h-12 pl-12 bg-white border-slate-200 rounded-xl focus:border-primary font-medium"
                          placeholder="e.g. Gonza Retail Shop"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <Input
                            value={formData.businessPhone}
                            onChange={(e) =>
                              updateForm({ businessPhone: e.target.value })
                            }
                            className="h-12 pl-12 bg-white border-slate-200 rounded-xl focus:border-primary font-medium"
                            placeholder="+256 ..."
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">
                          Business Type
                        </Label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                          <Input
                            value={formData.natureOfBusiness}
                            onChange={(e) =>
                              updateForm({ natureOfBusiness: e.target.value })
                            }
                            className="h-12 pl-12 bg-white border-slate-200 rounded-xl focus:border-primary font-medium"
                            placeholder="e.g. Retail, Pharmacy"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-slate-700">
                        Address
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          value={formData.businessAddress}
                          onChange={(e) =>
                            updateForm({ businessAddress: e.target.value })
                          }
                          className="h-12 pl-12 bg-white border-slate-200 rounded-xl focus:border-primary font-medium"
                          placeholder="City, Street, Building"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-slate-700">
                        Team Size
                      </Label>
                      <Select
                        value={formData.businessSize}
                        onValueChange={(v) => updateForm({ businessSize: v })}>
                        <SelectTrigger className="h-12 bg-white border-slate-200 rounded-xl font-medium px-4">
                          <SelectValue placeholder="How many people work here?" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-slate-100">
                          {BUSINESS_SIZES.map((s) => (
                            <SelectItem
                              key={s.value}
                              value={s.value}
                              className="py-3 px-4 rounded-lg font-medium">
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    onClick={() => validateStep1() && setCurrentStep(2)}
                    className="w-full h-14 bg-primary hover:bg-primary/95 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/10 transition-all hover:translate-y-[-2px]">
                    Continue
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              )}

              {/* STEP 2: PROFILE SETUP */}
              {currentStep === 2 && (
                <div className="space-y-10">
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-slate-700">
                        Your Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          value={formData.userName}
                          onChange={(e) =>
                            updateForm({ userName: e.target.value })
                          }
                          className="h-12 pl-12 bg-white border-slate-200 rounded-xl focus:border-primary font-medium"
                          placeholder="What's your name?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-slate-700">
                        Your Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                          value={formData.userPhone}
                          onChange={(e) =>
                            updateForm({ userPhone: e.target.value })
                          }
                          className="h-12 pl-12 bg-white border-slate-200 rounded-xl focus:border-primary font-medium"
                          placeholder="Personal contact number"
                        />
                      </div>
                    </div>

                    <div className="p-8 bg-slate-900 rounded-3xl text-white space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="font-bold text-xl">Security PIN</h3>
                          <p className="text-slate-400 text-xs">
                            Create a 4-digit code to protect your account
                          </p>
                        </div>
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                          <Key className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Input
                          type="password"
                          maxLength={4}
                          value={formData.userPin}
                          onChange={(e) =>
                            updateForm({
                              userPin: e.target.value.replace(/\D/g, ""),
                            })
                          }
                          className="h-16 text-center text-4xl tracking-[0.5em] font-bold bg-white/5 border-none rounded-2xl focus:ring-2 focus:ring-primary/50 text-white placeholder:text-white/10"
                          placeholder="0000"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(1)}
                      className="h-14 flex-1 rounded-xl font-bold text-slate-500 border-slate-200 hover:bg-slate-50">
                      Back
                    </Button>
                    <Button
                      onClick={handleComplete}
                      disabled={loading}
                      className="h-14 flex-[2] bg-primary hover:bg-primary/95 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:translate-y-[-2px]">
                      {loading ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        "Complete Setup"
                      )}
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Your data is securely encrypted
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
