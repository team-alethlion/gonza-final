(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertPaymentMethodsToString",
    ()=>convertPaymentMethodsToString,
    "parsePaymentInfo",
    ()=>parsePaymentInfo,
    "useBusinessSettings",
    ()=>useBusinessSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8cf71__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b8cf71 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8b3703__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:8b3703 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const parsePaymentInfo = (paymentInfo)=>{
    if (!paymentInfo || paymentInfo.trim() === '') {
        return [];
    }
    const lines = paymentInfo.split('\n').filter((line)=>line.trim() !== '');
    const methods = [];
    for(let i = 0; i < lines.length; i += 3){
        if (i + 2 < lines.length) {
            methods.push({
                method: lines[i].trim(),
                accountNumber: lines[i + 1].trim(),
                accountName: lines[i + 2].trim()
            });
        }
    }
    return methods;
};
const convertPaymentMethodsToString = (paymentMethods)=>{
    return paymentMethods.filter((pm)=>pm.method.trim() !== '' || pm.accountNumber.trim() !== '' || pm.accountName.trim() !== '').map((pm)=>`${pm.method}\n${pm.accountNumber}\n${pm.accountName}`).join('\n');
};
// Default settings for new businesses
const getDefaultSettings = ()=>({
        businessName: '',
        businessAddress: '',
        businessPhone: '',
        businessEmail: '',
        currency: 'UGX',
        paymentInfo: '',
        defaultPrintFormat: 'standard'
    });
const useBusinessSettings = ()=>{
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getDefaultSettings());
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const loadSettings = async ()=>{
        if (!currentBusiness) {
            return getDefaultSettings();
        }
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8cf71__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBusinessSettingsAction"])(currentBusiness.id);
            if (data) {
                // Extract payment info from metadata
                const paymentInfo = data.metadata && typeof data.metadata === 'object' ? data.metadata.payment_info || '' : '';
                return {
                    id: data.id,
                    businessName: data.business_name || '',
                    businessAddress: data.business_address || '',
                    businessPhone: data.business_phone || '',
                    businessEmail: data.business_email || '',
                    businessLogo: data.business_logo || undefined,
                    currency: data.currency || 'UGX',
                    signature: data.signature || undefined,
                    paymentInfo: paymentInfo,
                    defaultPrintFormat: data.metadata && typeof data.metadata === 'object' ? data.metadata.default_print_format || 'standard' : 'standard',
                    defaultPrinterName: data.metadata && typeof data.metadata === 'object' ? data.metadata.default_printer_name || '' : '',
                    defaultPrinterType: data.metadata && typeof data.metadata === 'object' ? data.metadata.default_printer_type || 'USB' : 'USB',
                    printerPaperSize: data.metadata && typeof data.metadata === 'object' ? data.metadata.printer_paper_size || '58mm' : '58mm'
                };
            } else {
                return getDefaultSettings();
            }
        } catch (error) {
            console.error('Error loading business settings:', error);
            toast({
                title: "Error",
                description: "Failed to load business settings. Please try again.",
                variant: "destructive"
            });
            return getDefaultSettings();
        }
    };
    const updateSettings = async (newSettings)=>{
        if (!currentBusiness) {
            console.error('No business selected for updating settings');
            toast({
                title: "Error",
                description: "No business selected",
                variant: "destructive"
            });
            return false;
        }
        try {
            const userData = {
                user: {
                    id: '00000000-0000-0000-0000-000000000000'
                }
            }; // Mocked user id for now
            // Prepare the metadata object with payment info
            const metadata = {
                payment_info: newSettings.hasOwnProperty('paymentInfo') ? newSettings.paymentInfo : settings.paymentInfo || '',
                default_print_format: newSettings.hasOwnProperty('defaultPrintFormat') ? newSettings.defaultPrintFormat : settings.defaultPrintFormat || 'standard',
                default_printer_name: newSettings.hasOwnProperty('defaultPrinterName') ? newSettings.defaultPrinterName : settings.defaultPrinterName || '',
                default_printer_type: newSettings.hasOwnProperty('defaultPrinterType') ? newSettings.defaultPrinterType : settings.defaultPrinterType || 'USB',
                printer_paper_size: newSettings.hasOwnProperty('printerPaperSize') ? newSettings.printerPaperSize : settings.printerPaperSize || '58mm'
            };
            const updateData = {
                business_name: newSettings.hasOwnProperty('businessName') ? newSettings.businessName : settings.businessName,
                business_address: newSettings.hasOwnProperty('businessAddress') ? newSettings.businessAddress : settings.businessAddress,
                business_phone: newSettings.hasOwnProperty('businessPhone') ? newSettings.businessPhone : settings.businessPhone,
                business_email: newSettings.hasOwnProperty('businessEmail') ? newSettings.businessEmail : settings.businessEmail,
                business_logo: newSettings.hasOwnProperty('businessLogo') ? newSettings.businessLogo : settings.businessLogo,
                currency: newSettings.hasOwnProperty('currency') ? newSettings.currency : settings.currency,
                signature: newSettings.hasOwnProperty('signature') ? newSettings.signature : settings.signature,
                metadata: metadata
            };
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8b3703__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["upsertBusinessSettingsAction"])(currentBusiness.id, userData.user.id, updateData);
            if (!response.success) {
                console.error('Supabase error updating business settings:', response.error);
                throw new Error(response.error);
            }
            toast({
                title: "Success",
                description: "Business settings updated successfully"
            });
            // Refetch settings after update
            refetch();
            return true;
        } catch (error) {
            console.error('Error updating business settings:', error);
            toast({
                title: "Error",
                description: "Failed to update business settings. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    // React Query for settings loading with proper caching
    const { data: queriedData, isLoading: isQueryLoading, isFetching, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'businessSettings',
            currentBusiness?.id
        ],
        queryFn: loadSettings,
        enabled: !!currentBusiness?.id,
        staleTime: 5 * 60_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });
    // Sync React Query data with local state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBusinessSettings.useEffect": ()=>{
            if (queriedData) {
                setSettings(queriedData);
            } else if (!currentBusiness) {
                setSettings(getDefaultSettings());
            }
        }
    }["useBusinessSettings.useEffect"], [
        queriedData,
        currentBusiness
    ]);
    // Sync loading state from React Query
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBusinessSettings.useEffect": ()=>{
            setIsLoading(isQueryLoading || isFetching);
        }
    }["useBusinessSettings.useEffect"], [
        isQueryLoading,
        isFetching
    ]);
    return {
        settings,
        isLoading,
        updateSettings,
        loadSettings
    };
};
_s(useBusinessSettings, "dklKO9yddrbRT3y7xGA5LdyaCTk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSaleDraft.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSaleDraft",
    ()=>useSaleDraft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useSaleDraft = ()=>{
    _s();
    const [hasDraft, setHasDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const DRAFT_STORAGE_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSaleDraft.useMemo[DRAFT_STORAGE_KEY]": ()=>currentBusiness?.id ? `sale_draft_${currentBusiness.id}` : 'sale_draft'
    }["useSaleDraft.useMemo[DRAFT_STORAGE_KEY]"], [
        currentBusiness?.id
    ]);
    // Check if draft exists
    const checkForDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleDraft.useCallback[checkForDraft]": ()=>{
            const draft = localStorage.getItem(DRAFT_STORAGE_KEY);
            const draftExists = !!draft;
            setHasDraft(draftExists);
            return draftExists;
        }
    }["useSaleDraft.useCallback[checkForDraft]"], [
        DRAFT_STORAGE_KEY
    ]);
    // Check for draft on mount and when business changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSaleDraft.useEffect": ()=>{
            if (currentBusiness?.id) {
                checkForDraft();
            }
        }
    }["useSaleDraft.useEffect"], [
        checkForDraft,
        currentBusiness?.id
    ]);
    const saveDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleDraft.useCallback[saveDraft]": (formData, selectedDate)=>{
            if (!currentBusiness?.id) return;
            const draftData = {
                formData,
                selectedDate: selectedDate.toISOString(),
                savedAt: new Date().toISOString()
            };
            localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draftData));
            setHasDraft(true);
        }
    }["useSaleDraft.useCallback[saveDraft]"], [
        DRAFT_STORAGE_KEY,
        currentBusiness?.id
    ]);
    const loadDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleDraft.useCallback[loadDraft]": ()=>{
            const draft = localStorage.getItem(DRAFT_STORAGE_KEY);
            if (draft) {
                try {
                    const parsedDraft = JSON.parse(draft);
                    return {
                        formData: parsedDraft.formData,
                        selectedDate: new Date(parsedDraft.selectedDate),
                        savedAt: new Date(parsedDraft.savedAt)
                    };
                } catch (error) {
                    console.error('Error parsing draft:', error);
                    localStorage.removeItem(DRAFT_STORAGE_KEY);
                    setHasDraft(false);
                    return null;
                }
            }
            return null;
        }
    }["useSaleDraft.useCallback[loadDraft]"], [
        DRAFT_STORAGE_KEY
    ]);
    const clearDraft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleDraft.useCallback[clearDraft]": ()=>{
            localStorage.removeItem(DRAFT_STORAGE_KEY);
            setHasDraft(false);
        }
    }["useSaleDraft.useCallback[clearDraft]"], [
        DRAFT_STORAGE_KEY
    ]);
    return {
        hasDraft,
        saveDraft,
        loadDraft,
        clearDraft,
        checkForDraft
    };
};
_s(useSaleDraft, "qQDf8QUCmq2zVVKoK052ocRKoHc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useNewSaleDraft.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNewSaleDraft",
    ()=>useNewSaleDraft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaleDraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSaleDraft.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useNewSaleDraft = (editSale)=>{
    _s();
    const [showDraftNotification, setShowDraftNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draftData, setDraftData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { hasDraft, loadDraft, clearDraft, checkForDraft } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaleDraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaleDraft"])();
    // Automatically load draft on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNewSaleDraft.useEffect": ()=>{
            if (!editSale) {
                const loadDraftAutomatically = {
                    "useNewSaleDraft.useEffect.loadDraftAutomatically": ()=>{
                        if (checkForDraft()) {
                            const draft = loadDraft();
                            if (draft) {
                                setDraftData(draft);
                            }
                        }
                    }
                }["useNewSaleDraft.useEffect.loadDraftAutomatically"];
                // Load immediately
                loadDraftAutomatically();
            }
        }
    }["useNewSaleDraft.useEffect"], [
        editSale,
        checkForDraft,
        loadDraft
    ]);
    const handleLoadDraft = ()=>{
        // Clear the draft data after it's been loaded into the form
        setDraftData(null);
    };
    const handleDismissDraft = ()=>{
        clearDraft();
        setShowDraftNotification(false);
        setDraftData(null);
    };
    return {
        showDraftNotification: false,
        draftData,
        handleLoadDraft,
        handleDismissDraft,
        clearDraft
    };
};
_s(useNewSaleDraft, "vTSP2H9aU+r2+X5kZr3J4DcDZIo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaleDraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaleDraft"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCurrentUser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentUser",
    ()=>useCurrentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useCurrentUser = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    return {
        userId: user?.id
    };
};
_s(useCurrentUser, "9ep4vdl3mBfipxjmc+tQCDhw6Ik=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useActivityLogger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActivityLogger",
    ()=>useActivityLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9a4f8d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:9a4f8d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCurrentUser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useActivityLogger = ()=>{
    _s();
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUser"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    // Safely get current profile, handle case where ProfileProvider isn't available
    let currentProfile = null;
    try {
        const { currentProfile: profile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
        currentProfile = profile;
    } catch  {
        // ProfileProvider not available, continue without profile
        currentProfile = null;
    }
    const logActivity = async (data)=>{
        if (!userId || !currentBusiness?.id) {
            console.warn('Cannot log activity: missing user or business context');
            return;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9a4f8d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["logActivityAction"])({
                userId: userId,
                locationId: currentBusiness.id,
                activityType: data.activityType,
                module: data.module,
                entityType: data.entityType,
                entityId: data.entityId || undefined,
                entityName: data.entityName,
                description: data.description,
                metadata: data.metadata || undefined,
                profileId: currentProfile?.id || undefined,
                profileName: currentProfile?.profile_name || undefined
            });
            if (!result.success) {
                console.error('Error logging activity:', result.error);
            }
        } catch (error) {
            console.error('Failed to log activity:', error);
        }
    };
    return {
        logActivity
    };
};
_s(useActivityLogger, "yo3YCtPOiA5SUUr9A8oszaj9EU0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCustomers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomers",
    ()=>useCustomers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useActivityLogger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd15f2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:fd15f2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$2ea232__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:2ea232 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f8d6c2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f8d6c2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$d1a9cd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:d1a9cd [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const useCustomers = (initialPageSize = 50)=>{
    _s();
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPageSize);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { logActivity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogger"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const loadCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCustomers.useCallback[loadCustomers]": async ()=>{
            if (!currentBusiness) {
                return {
                    customers: [],
                    count: 0
                };
            }
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd15f2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCustomersAction"])(currentBusiness.id);
                if (!result.success) {
                    throw new Error(result.error);
                }
                const formattedCustomers = (result.data?.customers || []).map({
                    "useCustomers.useCallback[loadCustomers].formattedCustomers": (customer)=>({
                            id: customer.id,
                            fullName: customer.fullName || customer.name,
                            phoneNumber: customer.phoneNumber || customer.phone,
                            email: customer.email,
                            birthday: customer.birthday ? new Date(customer.birthday) : null,
                            gender: customer.gender,
                            location: customer.location || customer.address,
                            categoryId: customer.categoryId,
                            notes: customer.notes,
                            tags: customer.tags,
                            socialMedia: customer.socialMedia || null,
                            createdAt: new Date(customer.createdAt),
                            updatedAt: new Date(customer.updatedAt)
                        })
                }["useCustomers.useCallback[loadCustomers].formattedCustomers"]);
                return {
                    customers: formattedCustomers,
                    count: result.data?.count || 0
                };
            } catch (error) {
                console.error('Error loading customers:', error);
                toast({
                    title: "Error",
                    description: "Failed to load customers. Please try again.",
                    variant: "destructive"
                });
                return {
                    customers: [],
                    count: 0
                };
            }
        }
    }["useCustomers.useCallback[loadCustomers]"], [
        currentBusiness?.id,
        toast
    ]);
    // React Query caching
    const queryKey = [
        'customers',
        currentBusiness?.id
    ];
    const { data: queriedData, isLoading: isQueryLoading, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadCustomers,
        enabled: !!currentBusiness?.id,
        staleTime: 5 * 60_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCustomers.useEffect": ()=>{
            if (queriedData) {
                setCustomers(queriedData.customers);
                setTotalCount(queriedData.count);
            }
        }
    }["useCustomers.useEffect"], [
        queriedData
    ]);
    // Derived loading state to avoid flash on background refetch
    const isLoading = isQueryLoading && !queriedData;
    const createCustomer = async (customerData)=>{
        if (!currentBusiness) {
            toast({
                title: "Error",
                description: "No business selected",
                variant: "destructive"
            });
            return null;
        }
        try {
            if (!user) throw new Error('User not authenticated');
            const insertData = {
                fullName: customerData.fullName,
                phoneNumber: customerData.phoneNumber || null,
                email: customerData.email || null,
                birthday: customerData.birthday?.toISOString().split('T')[0] || null,
                gender: customerData.gender || null,
                location: customerData.location || null,
                categoryId: customerData.categoryId || null,
                notes: customerData.notes || null,
                tags: customerData.tags || null,
                socialMedia: customerData.socialMedia || null
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$2ea232__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCustomerAction"])(currentBusiness.id, user.id, insertData);
            if (!result.success || !result.data) {
                throw new Error(result.error || 'Failed to create customer');
            }
            const data = result.data;
            // Format the new customer and update cache immediately
            const newCustomer = {
                id: data.id,
                fullName: data.name || data.fullName,
                phoneNumber: data.phone || data.phoneNumber,
                email: data.email,
                birthday: data.birthday ? new Date(data.birthday) : null,
                gender: data.gender,
                location: data.address || data.location,
                categoryId: data.categoryId,
                notes: data.notes,
                tags: data.tags,
                socialMedia: data.socialMedia,
                createdAt: new Date(data.createdAt),
                updatedAt: new Date(data.updatedAt)
            };
            // Update local state immediately
            setCustomers((prev)=>[
                    newCustomer,
                    ...prev
                ]);
            setTotalCount((c)=>c + 1);
            // Update React Query cache immediately
            queryClient.setQueryData(queryKey, (oldData)=>{
                if (!oldData) return {
                    customers: [
                        newCustomer
                    ],
                    count: 1
                };
                return {
                    customers: [
                        newCustomer,
                        ...oldData.customers
                    ],
                    count: (oldData.count || 0) + 1
                };
            });
            // Log activity
            await logActivity({
                activityType: 'CREATE',
                module: 'CUSTOMERS',
                entityType: 'customer',
                entityId: data.id,
                entityName: customerData.fullName,
                description: `Created customer "${customerData.fullName}"`,
                metadata: {
                    phoneNumber: customerData.phoneNumber,
                    email: customerData.email,
                    location: customerData.location
                }
            });
            toast({
                title: "Success",
                description: "Customer created successfully"
            });
            return data;
        } catch (error) {
            console.error('Error creating customer:', error);
            toast({
                title: "Error",
                description: "Failed to create customer. Please try again.",
                variant: "destructive"
            });
            return null;
        }
    };
    const addCustomer = createCustomer;
    const updateCustomer = async (id, updates)=>{
        try {
            const updateData = {};
            if (updates.fullName !== undefined) updateData.fullName = updates.fullName;
            if (updates.phoneNumber !== undefined) updateData.phoneNumber = updates.phoneNumber;
            if (updates.email !== undefined) updateData.email = updates.email;
            if (updates.birthday !== undefined) updateData.birthday = updates.birthday?.toISOString();
            if (updates.gender !== undefined) updateData.gender = updates.gender;
            if (updates.location !== undefined) updateData.location = updates.location;
            if (updates.categoryId !== undefined) updateData.categoryId = updates.categoryId;
            if (updates.notes !== undefined) updateData.notes = updates.notes;
            if (updates.tags !== undefined) updateData.tags = updates.tags;
            if (updates.socialMedia !== undefined) updateData.socialMedia = updates.socialMedia;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f8d6c2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCustomerAction"])(id, updateData);
            if (!result.success) throw new Error(result.error || 'Failed to update customer');
            // Update local state immediately
            setCustomers((prev)=>prev.map((c)=>c.id === id ? {
                        ...c,
                        ...updates
                    } : c));
            // Update React Query cache immediately
            queryClient.setQueryData(queryKey, (oldData)=>{
                if (!oldData) return oldData;
                return {
                    ...oldData,
                    customers: oldData.customers.map((c)=>c.id === id ? {
                            ...c,
                            ...updates
                        } : c)
                };
            });
            // Log activity
            const customer = customers.find((c)=>c.id === id);
            if (customer) {
                await logActivity({
                    activityType: 'UPDATE',
                    module: 'CUSTOMERS',
                    entityType: 'customer',
                    entityId: id,
                    entityName: customer.fullName,
                    description: `Updated customer "${customer.fullName}"`,
                    metadata: {
                        updates
                    }
                });
            }
            toast({
                title: "Success",
                description: "Customer updated successfully"
            });
            return true;
        } catch (error) {
            console.error('Error updating customer:', error);
            toast({
                title: "Error",
                description: "Failed to update customer. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    const deleteCustomer = async (id)=>{
        try {
            // Get customer details before deletion
            const customer = customers.find((c)=>c.id === id);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$d1a9cd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCustomerAction"])(id);
            if (!result.success) throw new Error(result.error || 'Failed to delete customer');
            // Optimistic update: remove locally
            setCustomers((prev)=>prev.filter((c)=>c.id !== id));
            setTotalCount((c)=>Math.max(0, c - 1));
            // Update cache immediately for current page
            queryClient.setQueryData(queryKey, (old)=>{
                if (!old) return old;
                const { customers: oldCustomers, count } = old;
                const newCustomers = oldCustomers.filter((c)=>c.id !== id);
                return {
                    customers: newCustomers,
                    count: Math.max(0, (count || 0) - 1)
                };
            });
            queryClient.invalidateQueries({
                queryKey
            });
            // Log activity
            if (customer) {
                await logActivity({
                    activityType: 'DELETE',
                    module: 'CUSTOMERS',
                    entityType: 'customer',
                    entityId: id,
                    entityName: customer.fullName,
                    description: `Deleted customer "${customer.fullName}"`,
                    metadata: {
                        phoneNumber: customer.phoneNumber,
                        email: customer.email
                    }
                });
            }
            toast({
                title: "Success",
                description: "Customer deleted successfully"
            });
            return true;
        } catch (error) {
            console.error('Error deleting customer:', error);
            toast({
                title: "Error",
                description: "Failed to delete customer. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    // Initial load handled by React Query; no manual trigger needed
    // Realtime: invalidate customer list when changes occur for this location
    // Commented out since we are moving away from Supabase client realtime subscriptions
    // useEffect(() => {
    //   if (!currentBusiness?.id) return;
    //   const channel = supabase
    //     .channel('customers_changes')
    //     .on('postgres_changes', {
    //       event: '*',
    //       schema: 'public',
    //       table: 'customers',
    //       filter: `location_id=eq.${currentBusiness.id}`
    //     }, () => {
    //       queryClient.invalidateQueries({ queryKey });
    //     })
    //     .subscribe();
    //   return () => {
    //     supabase.removeChannel(channel);
    //   };
    // }, [currentBusiness?.id, page, pageSize]);
    return {
        customers,
        isLoading,
        createCustomer,
        addCustomer,
        updateCustomer,
        deleteCustomer,
        loadCustomers,
        page,
        setPage,
        pageSize,
        setPageSize,
        totalCount
    };
};
_s(useCustomers, "s9EEuyHvpD7m3/acjaIJ1x+5fIg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogger"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useProducts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/inventoryCacheUtils.ts [app-client] (ecmascript)");
// Import our new Server Actions
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$93bcad__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:93bcad [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$377d5e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:377d5e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$169405__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:169405 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$feeb96__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:feeb96 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$d22ceb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:d22ceb [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const useProducts = (userId, initialPageSize = 50)=>{
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPageSize);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        search: '',
        category: 'all',
        stockStatus: 'all'
    });
    const [typingTimer, setTypingTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const setFiltersWithTypingState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProducts.useCallback[setFiltersWithTypingState]": (newFilters)=>{
            if (newFilters.search !== filters.search) {
                setIsTyping(true);
                if (typingTimer) clearTimeout(typingTimer);
                const timer = setTimeout({
                    "useProducts.useCallback[setFiltersWithTypingState].timer": ()=>{
                        setIsTyping(false);
                    }
                }["useProducts.useCallback[setFiltersWithTypingState].timer"], 600);
                setTypingTimer(timer);
            }
            setFilters(newFilters);
        }
    }["useProducts.useCallback[setFiltersWithTypingState]"], [
        filters.search,
        typingTimer
    ]);
    // Use Server Action instead of Supabase
    const loadProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProducts.useCallback[loadProducts]": async ()=>{
            if (!userId || !currentBusiness) {
                return {
                    products: [],
                    count: 0
                };
            }
            try {
                // Server Action call
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$93bcad__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductsAction"])({
                    userId,
                    businessId: currentBusiness.id,
                    page,
                    pageSize,
                    search: filters.search,
                    category: filters.category === 'all' ? undefined : filters.category,
                    stockStatus: filters.stockStatus
                });
                return result;
            } catch (error) {
                console.error('Error loading products from server action:', error);
                return {
                    products: [],
                    count: 0
                };
            }
        }
    }["useProducts.useCallback[loadProducts]"], [
        userId,
        currentBusiness?.id,
        page,
        pageSize,
        filters.search,
        filters.category,
        filters.stockStatus
    ]);
    const baseQueryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProducts.useMemo[baseQueryKey]": ()=>[
                'products',
                userId,
                currentBusiness?.id
            ]
    }["useProducts.useMemo[baseQueryKey]"], [
        userId,
        currentBusiness?.id
    ]);
    const queryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProducts.useMemo[queryKey]": ()=>[
                ...baseQueryKey,
                page,
                pageSize,
                filters.search,
                filters.category,
                filters.stockStatus
            ]
    }["useProducts.useMemo[queryKey]"], [
        baseQueryKey,
        page,
        pageSize,
        filters.search,
        filters.category,
        filters.stockStatus
    ]);
    const { data: queriedData, isLoading: isQueryLoading, isFetching, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadProducts,
        enabled: !!userId && !!currentBusiness?.id,
        staleTime: 30_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProducts.useEffect": ()=>{
            if (queriedData) {
                setProducts(queriedData.products);
                setTotalCount(queriedData.count);
            }
        }
    }["useProducts.useEffect"], [
        queriedData
    ]);
    const isLoading = isQueryLoading && !queriedData && !isTyping;
    // Supabase Storage remains untouched since Prisma doesn't do file storage
    // but we isolate it here.
    const uploadProductImage = async (imageFile)=>{
        try {
            if (!userId) return null;
            // We will implement a server action for this. 
            // For now, let's assume we have an uploadImageAction.
            // const formData = new FormData();
            // formData.append('file', imageFile);
            // formData.append('userId', userId);
            // const result = await uploadImageAction(formData);
            // return result.url;
            console.warn('Image upload redirecting to server action (TODO)');
            return null;
        } catch (error) {
            console.error('Error in uploadProductImage:', error);
            return null;
        }
    };
    const createProduct = async (productData)=>{
        try {
            if (!userId || !currentBusiness) return null;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$377d5e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProductAction"])({
                ...productData,
                userId,
                businessId: currentBusiness.id
            });
            if (!result) return null;
            const newProduct = result;
            setProducts((prev)=>[
                    newProduct,
                    ...prev
                ]);
            setTotalCount((c)=>c + 1);
            queryClient.invalidateQueries({
                queryKey: baseQueryKey
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"])(queryClient);
            return newProduct;
        } catch (error) {
            console.error('Error creating product:', error);
            return null;
        }
    };
    const updateProduct = async (id, updates, imageFile, isFromSale = false, customChangeReason, adjustmentDate, referenceId, receiptNumber)=>{
        try {
            if (!userId || !currentBusiness) return false;
            let imageUrl = updates.imageUrl;
            if (imageFile) {
                imageUrl = await uploadProductImage(imageFile);
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$169405__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductAction"])(id, {
                ...updates,
                imageUrl,
                userId,
                businessId: currentBusiness.id,
                isFromSale,
                customChangeReason,
                referenceId
            });
            if (!result) return false;
            queryClient.invalidateQueries({
                queryKey: baseQueryKey
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"])(queryClient);
            return true;
        } catch (error) {
            console.error('Error updating product:', error);
            return false;
        }
    };
    const deleteProduct = async (id)=>{
        try {
            if (!userId) return false;
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$feeb96__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProductAction"])(id);
            if (success) {
                queryClient.invalidateQueries({
                    queryKey: baseQueryKey
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"])(queryClient);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error deleting product:', error);
            return false;
        }
    };
    const updateProductsBulk = async (updates, userIdForHistory, changeReason, referenceId, adjustmentDate, receiptNumber)=>{
        try {
            if (!userId || !currentBusiness) return false;
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$d22ceb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductsBulkAction"])(updates.map((u)=>({
                    id: u.id,
                    updated: u.updated
                })), currentBusiness.id);
            if (success) {
                queryClient.invalidateQueries({
                    queryKey: baseQueryKey
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"])(queryClient);
            }
            return success;
        } catch (error) {
            console.error('Error in bulk update:', error);
            return false;
        }
    };
    return {
        products,
        isLoading,
        loadProducts,
        page,
        setPage,
        pageSize,
        setPageSize,
        totalCount,
        createProduct,
        updateProduct,
        updateProductsBulk,
        deleteProduct,
        uploadProductImage,
        refetch,
        isFetching,
        filters,
        setFilters: setFiltersWithTypingState
    };
};
_s(useProducts, "pjZLNf7eBWdUbjThWqeYhdI9xEU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useInventoryActions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInventoryActions",
    ()=>useInventoryActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7dc706__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:7dc706 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
const useInventoryActions = (userId)=>{
    _s();
    const { updateProductsBulk } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])(userId);
    /**
     * Helper to fetch fresh product data from DB to avoid race conditions/stale data
     */ const fetchFreshProducts = async (productIds, locationId)=>{
        if (!productIds.length) return [];
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7dc706__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductsByIdsAction"])(productIds, locationId);
            return result;
        } catch (error) {
            console.error('Error fetching fresh products:', error);
            throw error;
        }
    };
    /**
     * Deduct stock for a new sale
     */ const deductStockForSale = async (items, saleId, saleDate, receiptNumber, locationId)=>{
        if (!userId) return false;
        try {
            const itemsWithProductIds = items.filter((item)=>item.productId);
            if (itemsWithProductIds.length === 0) return true;
            const uniqueIds = [
                ...new Set(itemsWithProductIds.map((item)=>item.productId))
            ];
            const freshProducts = await fetchFreshProducts(uniqueIds, locationId);
            if (freshProducts.length === 0) return false;
            // Calculate total quantity to deduct per product
            const quantityChanges = new Map();
            for (const item of itemsWithProductIds){
                const existing = quantityChanges.get(item.productId) || 0;
                quantityChanges.set(item.productId, existing + item.quantity);
            }
            const bulkUpdates = [];
            for (const [productId, quantityToDeduct] of quantityChanges.entries()){
                const product = freshProducts.find((p)=>p.id === productId);
                if (!product) continue;
                const newQuantity = product.quantity - quantityToDeduct;
                bulkUpdates.push({
                    id: productId,
                    updated: {
                        ...product,
                        quantity: newQuantity
                    }
                });
                if (newQuantity < 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning(`${product.name} inventory is now negative (${newQuantity}). Please restock soon.`);
                }
            }
            if (bulkUpdates.length > 0) {
                await updateProductsBulk(bulkUpdates, userId, 'Sale', saleId, saleDate, receiptNumber);
            }
            return true;
        } catch (error) {
            console.error('Error deducting stock for sale:', error);
            return false;
        }
    };
    /**
     * Restore stock (e.g. when deleting a sale)
     */ const restoreStockForSale = async (items, saleId, receiptNumber, locationId)=>{
        if (!userId) return false;
        try {
            const itemsWithProductIds = items.filter((item)=>item.productId);
            if (itemsWithProductIds.length === 0) return true;
            const uniqueIds = [
                ...new Set(itemsWithProductIds.map((item)=>item.productId))
            ];
            const freshProducts = await fetchFreshProducts(uniqueIds, locationId);
            // Calculate total quantity to restore
            const quantityChanges = new Map();
            for (const item of itemsWithProductIds){
                const existing = quantityChanges.get(item.productId) || 0;
                quantityChanges.set(item.productId, existing + item.quantity);
            }
            const bulkUpdates = [];
            for (const [productId, quantityToRestore] of quantityChanges.entries()){
                const product = freshProducts.find((p)=>p.id === productId);
                if (!product) continue;
                const newQuantity = product.quantity + quantityToRestore;
                bulkUpdates.push({
                    id: productId,
                    updated: {
                        ...product,
                        quantity: newQuantity
                    }
                });
            }
            if (bulkUpdates.length > 0) {
                await updateProductsBulk(bulkUpdates, userId, 'Deleted Sale', saleId, undefined, receiptNumber);
            }
            return true;
        } catch (error) {
            console.error('Error restoring stock for sale:', error);
            return false;
        }
    };
    /**
     * Adjust stock for an edited sale (Handle both adding and removing items)
     */ const adjustStockForEditedSale = async (originalItems, newItems, saleId, saleDate, receiptNumber, locationId)=>{
        if (!userId) return false;
        try {
            const allProductIds = [
                ...originalItems.filter((i)=>i.productId).map((i)=>i.productId),
                ...newItems.filter((i)=>i.productId).map((i)=>i.productId)
            ];
            const uniqueIds = [
                ...new Set(allProductIds)
            ];
            if (uniqueIds.length === 0) return true;
            const freshProducts = await fetchFreshProducts(uniqueIds, locationId);
            const productNetChanges = new Map();
            // 1. Restore original items (add back to stock)
            for (const item of originalItems.filter((i)=>i.productId)){
                const current = productNetChanges.get(item.productId) || 0;
                productNetChanges.set(item.productId, current + item.quantity);
            }
            // 2. Deduct new items (remove from stock)
            for (const item of newItems.filter((i)=>i.productId)){
                const current = productNetChanges.get(item.productId) || 0;
                productNetChanges.set(item.productId, current - item.quantity);
            }
            const bulkUpdates = [];
            for (const [productId, netChange] of productNetChanges.entries()){
                if (netChange === 0) continue;
                const product = freshProducts.find((p)=>p.id === productId);
                if (!product) continue;
                const newQuantity = product.quantity + netChange;
                bulkUpdates.push({
                    id: productId,
                    updated: {
                        ...product,
                        quantity: newQuantity
                    }
                });
                if (newQuantity < 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning(`${product.name} inventory is now negative (${newQuantity}). Please restock soon.`);
                }
            }
            if (bulkUpdates.length > 0) {
                await updateProductsBulk(bulkUpdates, userId, 'Sale Status/Qty Edit', saleId, saleDate, receiptNumber);
            }
            return true;
        } catch (error) {
            console.error('Error adjusting stock for edited sale:', error);
            return false;
        }
    };
    return {
        deductStockForSale,
        restoreStockForSale,
        adjustStockForEditedSale
    };
};
_s(useInventoryActions, "fPLICZ3dt9FdLAUL7oUBn/aQzSc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSalesData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSalesData",
    ()=>useSalesData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useActivityLogger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInventoryActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInventoryActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/inventoryCacheUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f9bffa__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f9bffa [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$4ed61d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:4ed61d [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const useSalesData = (userId, sortOrder = 'desc', pageSize)=>{
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { logActivity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogger"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { restoreStockForSale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInventoryActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryActions"])(userId);
    const loadSales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesData.useCallback[loadSales]": async ()=>{
            try {
                if (!userId || !currentBusiness) {
                    return [];
                }
                // If pageSize is specified, load only that many records
                const salesData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f9bffa__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getSalesAction"])(currentBusiness.id, sortOrder, pageSize);
                const formattedSales = salesData ? salesData.map({
                    "useSalesData.useCallback[loadSales]": (item)=>{
                        const dbSale = {
                            id: item.id,
                            user_id: item.user_id,
                            location_id: item.location_id,
                            receipt_number: item.receipt_number,
                            customer_name: item.customer_name,
                            customer_address: item.customer_address,
                            customer_contact: item.customer_contact,
                            customer_id: item.customer_id,
                            items: item.items,
                            payment_status: item.payment_status,
                            profit: item.profit ? Number(item.profit) : 0,
                            date: item.date,
                            tax_rate: item.tax_rate || 0,
                            created_at: item.created_at,
                            updated_at: item.updated_at,
                            cash_transaction_id: item.cash_transaction_id,
                            amount_paid: item.amount_paid ? Number(item.amount_paid) : undefined,
                            amount_due: item.amount_due ? Number(item.amount_due) : undefined,
                            category_id: item.category_id,
                            notes: item.notes
                        };
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbSaleToSale"])(dbSale);
                    }
                }["useSalesData.useCallback[loadSales]"]) : [];
                return formattedSales;
            } catch (error) {
                console.error('Error loading sales:', error);
                toast({
                    title: "Error",
                    description: "Failed to load sales data. Please try again.",
                    variant: "destructive"
                });
                return [];
            }
        }
    }["useSalesData.useCallback[loadSales]"], [
        userId,
        currentBusiness?.id,
        sortOrder,
        pageSize,
        toast
    ]);
    // React Query caching with persistent storage for improved performance
    const baseQueryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSalesData.useMemo[baseQueryKey]": ()=>[
                'sales',
                currentBusiness?.id,
                userId
            ]
    }["useSalesData.useMemo[baseQueryKey]"], [
        currentBusiness?.id,
        userId
    ]);
    const queryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSalesData.useMemo[queryKey]": ()=>[
                ...baseQueryKey,
                sortOrder,
                pageSize
            ]
    }["useSalesData.useMemo[queryKey]"], [
        baseQueryKey,
        sortOrder,
        pageSize
    ]);
    const { data: sales = [], isLoading: isQueryLoading, isFetching, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadSales,
        enabled: !!userId && !!currentBusiness?.id,
        staleTime: 30_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true
    });
    // Derived loading state
    const isLoading = isQueryLoading || isFetching && sales.length === 0;
    const getTopCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSalesData.useMemo[getTopCustomers]": ()=>{
            // Skip quotes since they're not actual purchases
            const nonQuoteSales = sales.filter({
                "useSalesData.useMemo[getTopCustomers].nonQuoteSales": (sale)=>sale.paymentStatus !== "Quote"
            }["useSalesData.useMemo[getTopCustomers].nonQuoteSales"]);
            // Group sales by customer name
            const customerMap = new Map();
            nonQuoteSales.forEach({
                "useSalesData.useMemo[getTopCustomers]": (sale)=>{
                    const customerName = sale.customerName;
                    const saleTotal = sale.items.reduce({
                        "useSalesData.useMemo[getTopCustomers].saleTotal": (sum, item)=>sum + item.price * item.quantity
                    }["useSalesData.useMemo[getTopCustomers].saleTotal"], 0);
                    if (!customerMap.has(customerName)) {
                        customerMap.set(customerName, {
                            total: saleTotal,
                            count: 1,
                            customerId: sale.customerId
                        });
                    } else {
                        const current = customerMap.get(customerName);
                        customerMap.set(customerName, {
                            total: current.total + saleTotal,
                            count: current.count + 1,
                            customerId: current.customerId || sale.customerId
                        });
                    }
                }
            }["useSalesData.useMemo[getTopCustomers]"]);
            // Convert map to array and sort by total purchases
            return Array.from(customerMap.entries()).map({
                "useSalesData.useMemo[getTopCustomers]": ([name, data])=>({
                        id: data.customerId,
                        name,
                        totalPurchases: data.total,
                        orderCount: data.count
                    })
            }["useSalesData.useMemo[getTopCustomers]"]).sort({
                "useSalesData.useMemo[getTopCustomers]": (a, b)=>b.totalPurchases - a.totalPurchases
            }["useSalesData.useMemo[getTopCustomers]"]);
        }
    }["useSalesData.useMemo[getTopCustomers]"], [
        sales
    ]);
    // Memoize customer lifetime purchases function
    const getCustomerLifetimePurchases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSalesData.useMemo[getCustomerLifetimePurchases]": ()=>{
            return ({
                "useSalesData.useMemo[getCustomerLifetimePurchases]": (customerName)=>{
                    // Filter sales by customer name and exclude quotes
                    const customerSales = sales.filter({
                        "useSalesData.useMemo[getCustomerLifetimePurchases].customerSales": (sale)=>sale.customerName.toLowerCase() === customerName.toLowerCase() && sale.paymentStatus !== "Quote"
                    }["useSalesData.useMemo[getCustomerLifetimePurchases].customerSales"]);
                    // Calculate total purchase amount and count
                    const total = customerSales.reduce({
                        "useSalesData.useMemo[getCustomerLifetimePurchases].total": (sum, sale)=>sum + sale.items.reduce({
                                "useSalesData.useMemo[getCustomerLifetimePurchases].total": (itemSum, item)=>itemSum + item.price * item.quantity
                            }["useSalesData.useMemo[getCustomerLifetimePurchases].total"], 0)
                    }["useSalesData.useMemo[getCustomerLifetimePurchases].total"], 0);
                    return {
                        total,
                        count: customerSales.length
                    };
                }
            })["useSalesData.useMemo[getCustomerLifetimePurchases]"];
        }
    }["useSalesData.useMemo[getCustomerLifetimePurchases]"], [
        sales
    ]);
    const deleteSale = async (id)=>{
        try {
            // First, find the sale to get its details for logging
            const saleToDelete = sales.find((sale)=>sale.id === id);
            if (!saleToDelete) {
                throw new Error('Sale not found');
            }
            // Restore product quantities back to inventory (Only if it wasn't a quote which doesn't deduct stock)
            if (saleToDelete.paymentStatus !== 'Quote' && saleToDelete.items.length > 0) {
                console.log('Restoring product quantities via useInventoryActions...');
                const success = await restoreStockForSale(saleToDelete.items, id, saleToDelete.receiptNumber, currentBusiness?.id);
                if (!success) {
                    toast({
                        title: "Inventory Update Warning",
                        description: "Sale deleted, but inventory restoration might have failed. Please check your stock levels.",
                        variant: "destructive"
                    });
                }
            }
            // Proceed to delete the sale via API Action
            if (!currentBusiness?.id) {
                throw new Error('Business context missing for deletion');
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$4ed61d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteSaleAction"])(id, currentBusiness.id);
            if (!result.success) {
                throw new Error(result.error);
            }
            // Update React Query cache
            queryClient.setQueryData(queryKey, (oldData)=>{
                return oldData ? oldData.filter((sale)=>sale.id !== id) : [];
            });
            queryClient.invalidateQueries({
                queryKey: baseQueryKey
            });
            // Clear sold items cache after deletion
            clearSoldItemsCache();
            // Log activity for sale deletion
            await logActivity({
                activityType: 'DELETE',
                module: 'SALES',
                entityType: 'sale',
                entityId: id,
                entityName: `Sale #${saleToDelete.receiptNumber}`,
                description: `Deleted sale for ${saleToDelete.customerName} - Total: UGX ${((saleToDelete.amountPaid || 0) + (saleToDelete.amountDue || 0)).toLocaleString()} (Stock restored)`,
                metadata: {
                    receiptNumber: saleToDelete.receiptNumber,
                    customerName: saleToDelete.customerName,
                    customerAddress: saleToDelete.customerAddress,
                    customerContact: saleToDelete.customerContact,
                    totalAmount: (saleToDelete.amountPaid || 0) + (saleToDelete.amountDue || 0),
                    amountPaid: saleToDelete.amountPaid,
                    profit: saleToDelete.profit,
                    paymentStatus: saleToDelete.paymentStatus,
                    taxRate: saleToDelete.taxRate,
                    itemCount: saleToDelete.items.length,
                    items: saleToDelete.items.map((item)=>({
                            description: item.description,
                            quantity: item.quantity,
                            price: item.price,
                            cost: item.cost,
                            total: item.quantity * item.price,
                            discountPercentage: item.discountPercentage,
                            discountAmount: item.discountAmount
                        })),
                    notes: saleToDelete.notes,
                    cashTransactionDeleted: !!saleToDelete.cashTransactionId
                }
            });
            toast({
                title: "Sale Deleted",
                description: "The sale record and associated data have been successfully deleted."
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"])();
            return true;
        } catch (error) {
            console.error('Error deleting sale:', error);
            toast({
                title: "Error",
                description: "Failed to delete sale. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    const clearSoldItemsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesData.useCallback[clearSoldItemsCache]": ()=>{
            if (!currentBusiness?.id) return;
            const key = `soldItemsFilters_${currentBusiness.id}`;
            localStorage.removeItem(key);
            // Also clear legacy keys for safety
            localStorage.removeItem('soldItemsFilters');
        }
    }["useSalesData.useCallback[clearSoldItemsCache]"], [
        currentBusiness?.id
    ]);
    const addSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesData.useCallback[addSale]": (newSale)=>{
            queryClient.setQueryData(queryKey, {
                "useSalesData.useCallback[addSale]": (oldData)=>{
                    return oldData ? [
                        newSale,
                        ...oldData
                    ] : [
                        newSale
                    ];
                }
            }["useSalesData.useCallback[addSale]"]);
            queryClient.invalidateQueries({
                queryKey: baseQueryKey
            });
            clearSoldItemsCache();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"])();
        }
    }["useSalesData.useCallback[addSale]"], [
        queryClient,
        queryKey,
        baseQueryKey,
        clearSoldItemsCache,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"]
    ]);
    const updateSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesData.useCallback[updateSale]": (updatedSale)=>{
            queryClient.setQueryData(queryKey, {
                "useSalesData.useCallback[updateSale]": (oldData)=>{
                    return oldData ? oldData.map({
                        "useSalesData.useCallback[updateSale]": (s)=>s.id === updatedSale.id ? updatedSale : s
                    }["useSalesData.useCallback[updateSale]"]) : [
                        updatedSale
                    ];
                }
            }["useSalesData.useCallback[updateSale]"]);
            queryClient.invalidateQueries({
                queryKey: baseQueryKey
            });
            clearSoldItemsCache();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"])();
        }
    }["useSalesData.useCallback[updateSale]"], [
        queryClient,
        queryKey,
        baseQueryKey,
        clearSoldItemsCache,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"]
    ]);
    return {
        sales,
        isLoading,
        deleteSale,
        addSale,
        updateSale,
        getTopCustomers,
        getCustomerLifetimePurchases,
        clearSoldItemsCache,
        refetch,
        isFetching
    };
};
_s(useSalesData, "WVwPKXCR+GoHLB311zwc1ZQTIMA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogger"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInventoryActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSaleProductSelection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSaleProductSelection",
    ()=>useSaleProductSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInventoryActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInventoryActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useSaleProductSelection = (userId)=>{
    _s();
    const { products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])(userId);
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { deductStockForSale, adjustStockForEditedSale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInventoryActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryActions"])(userId);
    const [selectedProducts, setSelectedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const selectProduct = (itemIndex, productId)=>{
        setSelectedProducts((prev)=>({
                ...prev,
                [itemIndex]: productId
            }));
    };
    const getProductForItem = (itemIndex)=>{
        const productId = selectedProducts[itemIndex];
        if (!productId) return null;
        return products.find((p)=>p.id === productId) || null;
    };
    const updateInventoryForSale = async (items, paymentStatus, saleDate, saleId, receiptNumber)=>{
        // Only skip inventory if still a quote
        if (paymentStatus === 'Quote') return true;
        return deductStockForSale(items, saleId, saleDate, receiptNumber, currentBusiness?.id);
    };
    const updateInventoryForEditedSale = async (originalItems, newItems, newStatus, saleDate, saleId, receiptNumber, originalStatus)=>{
        // Determine if we should add back original items and deduct new items
        const shouldRestoreOriginal = originalStatus !== 'Quote';
        const shouldDeductNew = newStatus !== 'Quote';
        // If neither status affects inventory, we can skip
        if (!shouldRestoreOriginal && !shouldDeductNew) return true;
        // Filter lists based on status. 
        // If original was Quote, we DO NOT restore (empty list).
        // If new is Quote, we DO NOT deduct (empty list).
        const itemsToRestore = shouldRestoreOriginal ? originalItems : [];
        const itemsToDeduct = shouldDeductNew ? newItems : [];
        return adjustStockForEditedSale(itemsToRestore, itemsToDeduct, saleId, saleDate, receiptNumber, currentBusiness?.id);
    };
    return {
        products,
        selectedProducts,
        selectProduct,
        getProductForItem,
        updateInventoryForSale,
        updateInventoryForEditedSale
    };
};
_s(useSaleProductSelection, "XtppOejc7oVncGT0LxVsVvLaqWM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInventoryActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryActions"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useNewSaleActions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNewSaleActions",
    ()=>useNewSaleActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCustomers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSalesData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaleProductSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSaleProductSelection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useActivityLogger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateThermalReceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/generateThermalReceipt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$thermalPrinterPlug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/thermalPrinterPlug.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$522d00__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:522d00 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8cdf9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b8cdf9 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$4ed61d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:4ed61d [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const useNewSaleActions = (editSale, onSaveSuccess)=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { toast: uiToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { customers, createCustomer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomers"])();
    const { addSale, updateSale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"])(user?.id);
    const { updateInventoryForSale, updateInventoryForEditedSale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaleProductSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaleProductSelection"])(user?.id);
    const { logActivity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogger"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const [isReceiptOpen, setIsReceiptOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [completedSale, setCompletedSale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newCustomerDialogOpen, setNewCustomerDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [includePaymentInfo, setIncludePaymentInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleSaleComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNewSaleActions.useCallback[handleSaleComplete]": async (sale, showReceipt = false, includePaymentInfo = true, selectedCategoryId, clearDraft, saleDate, thermalPrintAfterSave = false)=>{
            // Clear draft when sale is completed
            if (!editSale && clearDraft) {
                clearDraft();
            }
            // Only save customer to customers database if they don't exist already
            if (user?.id && sale.customerName.trim()) {
                let customerId = sale.customerId;
                // If no customerId provided, check if customer already exists by name
                if (!customerId) {
                    const existingCustomer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$522d00__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCustomerByNameAction"])(currentBusiness?.id || '', sale.customerName.trim());
                    if (existingCustomer) {
                        customerId = existingCustomer.id;
                    } else {
                        try {
                            const newCustomer = await createCustomer({
                                fullName: sale.customerName,
                                phoneNumber: sale.customerContact || null,
                                location: sale.customerAddress || null,
                                email: null,
                                birthday: null,
                                gender: null,
                                categoryId: selectedCategoryId || null,
                                notes: null,
                                tags: null,
                                socialMedia: null
                            });
                            if (newCustomer) {
                                customerId = newCustomer.id;
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Added ${sale.customerName} to your customers list`);
                            }
                        } catch (error) {
                            console.error('Error adding customer:', error);
                        }
                    }
                }
                if (customerId && sale.id) {
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8cdf9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateSaleCustomerAction"])(sale.id, customerId);
                    } catch (error) {
                        console.error('Error associating sale with customer:', error);
                    }
                }
            }
            // Update inventory for sale (new or edit)
            let inventorySuccess = false;
            if (editSale) {
                // For edits, restore original items and subtract new ones
                inventorySuccess = await updateInventoryForEditedSale(editSale.items, sale.items, sale.paymentStatus, undefined, sale.id, sale.receiptNumber, editSale.paymentStatus);
            } else {
                // For new sale, subtract sold items
                // Use provided saleDate or undefined (which defaults to current time in updateInventoryForSale)
                inventorySuccess = await updateInventoryForSale(sale.items, sale.paymentStatus, saleDate, sale.id, sale.receiptNumber);
            }
            if (!inventorySuccess) {
                console.error('Inventory update failed. Initiating rollback...');
                // ROLLBACK STRATEGY
                if (!editSale) {
                    const rollbackSuccess = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$4ed61d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteSaleAction"])(sale.id, currentBusiness?.id || '');
                    if (!rollbackSuccess) {
                        console.error('CRITICAL: Failed to rollback sale after inventory failure');
                        uiToast({
                            title: "Critical Error",
                            description: "Inventory failed to update, and we could not cancel the sale. Please contact support.",
                            variant: "destructive"
                        });
                    } else {
                        uiToast({
                            title: "Sale Cancelled",
                            description: "Inventory update failed, so the sale was cancelled to ensure data consistency.",
                            variant: "destructive"
                        });
                    }
                } else {
                    // If it was an edit, we might want to revert the sale changes in the database
                    // For now, we just warn the user that inventory wasn't updated
                    uiToast({
                        title: "Inventory Update Failed",
                        description: "The sale was saved, but inventory could not be updated. Please check stock levels manually.",
                        variant: "destructive"
                    });
                // Ideally we would revert the DB update here too, but that requires passing the original DB state
                }
                // STOP PROCESSING
                throw new Error('Inventory update failed');
            }
            // Calculate total amount from items for accurate logging
            const itemsTotal = sale.items.reduce({
                "useNewSaleActions.useCallback[handleSaleComplete].itemsTotal": (sum, item)=>{
                    const itemTotal = item.price * item.quantity;
                    const discountAmount = item.discountType === 'amount' ? item.discountAmount || 0 : itemTotal * (item.discountPercentage || 0) / 100;
                    return sum + (itemTotal - discountAmount);
                }
            }["useNewSaleActions.useCallback[handleSaleComplete].itemsTotal"], 0);
            const taxAmount = sale.taxRate ? itemsTotal * sale.taxRate / 100 : 0;
            const grandTotal = itemsTotal + taxAmount;
            // Log activity with comprehensive details
            await logActivity({
                activityType: editSale ? 'UPDATE' : 'CREATE',
                module: 'SALES',
                entityType: 'sale',
                entityId: sale.id,
                entityName: `Sale #${sale.receiptNumber}`,
                description: `${editSale ? 'Updated' : 'Created'} sale for ${sale.customerName} - Total: UGX ${grandTotal.toLocaleString()}`,
                metadata: {
                    receiptNumber: sale.receiptNumber,
                    customerName: sale.customerName,
                    customerAddress: sale.customerAddress,
                    customerContact: sale.customerContact,
                    totalAmount: grandTotal,
                    amountPaid: sale.amountPaid,
                    profit: sale.profit,
                    paymentStatus: sale.paymentStatus,
                    taxRate: sale.taxRate,
                    itemCount: sale.items.length,
                    items: sale.items.map({
                        "useNewSaleActions.useCallback[handleSaleComplete]": (item)=>({
                                description: item.description,
                                quantity: item.quantity,
                                price: item.price,
                                cost: item.cost,
                                total: item.quantity * item.price,
                                discountPercentage: item.discountPercentage,
                                discountAmount: item.discountAmount
                            })
                    }["useNewSaleActions.useCallback[handleSaleComplete]"]),
                    notes: sale.notes
                }
            });
            uiToast({
                title: editSale ? "Sale Updated" : "Sale Created",
                description: `${editSale ? "Updated" : "Created"} sale for ${sale.customerName}. ${sale.paymentStatus === 'NOT PAID' ? 'Inventory has been updated for this credit sale.' : ''}`
            });
            // Clear sold items cache to force refresh
            const keys = Object.keys(localStorage);
            keys.forEach({
                "useNewSaleActions.useCallback[handleSaleComplete]": (key)=>{
                    if (key.startsWith('soldItems_')) {
                        localStorage.removeItem(key);
                    }
                }
            }["useNewSaleActions.useCallback[handleSaleComplete]"]);
            // Store the completed sale
            setCompletedSale(sale);
            // ⚡️ INSTANT UPDATE: Add/update sale in cache immediately (like your campaign example)
            if (editSale) {
                updateSale(sale);
            } else {
                addSale(sale);
            }
            // Store payment info preference
            setIncludePaymentInfo(includePaymentInfo);
            // Show receipt dialog if requested
            if (showReceipt) {
                setIsReceiptOpen(true);
                // If thermal auto-print is enabled, trigger it
                if (thermalPrintAfterSave) {
                    try {
                        const thermalData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateThermalReceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateThermalReceipt"])(sale, settings);
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$thermalPrinterPlug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["print"])(thermalData, settings.defaultPrinterName);
                    } catch (printErr) {
                        console.error('Auto-print failed:', printErr);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Automated thermal printing failed');
                    }
                }
            } else {
                // If it's a new sale and we have a success callback, use it (to clear form)
                // Otherwise navigate to sales list
                if (!editSale && onSaveSuccess) {
                    onSaveSuccess();
                } else {
                    router.push('/sales');
                }
            }
        }
    }["useNewSaleActions.useCallback[handleSaleComplete]"], [
        user?.id,
        createCustomer,
        editSale,
        uiToast,
        router,
        logActivity,
        addSale,
        updateSale,
        onSaveSuccess
    ]);
    const handleReceiptClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNewSaleActions.useCallback[handleReceiptClose]": ()=>{
            setIsReceiptOpen(false);
            // If it's a new sale and we have a success callback, use it (to clear form)
            // Otherwise navigate to sales list
            if (!editSale && onSaveSuccess) {
                onSaveSuccess();
            } else {
                router.push('/sales');
            }
        }
    }["useNewSaleActions.useCallback[handleReceiptClose]"], [
        router,
        editSale,
        onSaveSuccess
    ]);
    const handleAddCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNewSaleActions.useCallback[handleAddCustomer]": async (customerData)=>{
            if (!user?.id) return false;
            try {
                const newCustomer = await createCustomer(customerData);
                if (newCustomer) {
                    setNewCustomerDialogOpen(false);
                    return true;
                }
                return false;
            } catch (error) {
                console.error('Error adding customer:', error);
                return false;
            }
        }
    }["useNewSaleActions.useCallback[handleAddCustomer]"], [
        user?.id,
        createCustomer
    ]);
    const handleOpenNewCustomerDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNewSaleActions.useCallback[handleOpenNewCustomerDialog]": ()=>{
            setNewCustomerDialogOpen(true);
        }
    }["useNewSaleActions.useCallback[handleOpenNewCustomerDialog]"], []);
    return {
        isReceiptOpen,
        completedSale,
        newCustomerDialogOpen,
        includePaymentInfo,
        customers,
        handleSaleComplete,
        handleReceiptClose,
        handleAddCustomer,
        handleOpenNewCustomerDialog,
        setNewCustomerDialogOpen
    };
};
_s(useNewSaleActions, "bpblT2sAKmibSYmDamAnC/ZRpNY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaleProductSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaleProductSelection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogger"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCashAccounts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCashAccounts",
    ()=>useCashAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3aabc2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:3aabc2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bf746d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:bf746d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cac4e7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:cac4e7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd0249__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:fd0249 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5b472f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:5b472f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$99019c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:99019c [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const useCashAccounts = ()=>{
    _s();
    const [accounts, setAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const loadAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashAccounts.useCallback[loadAccounts]": async ()=>{
            if (!currentBusiness?.id) return [];
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3aabc2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCashAccountsAction"])(currentBusiness.id);
                if (!result.success || !result.data) {
                    throw new Error(result.error || 'Failed to fetch accounts');
                }
                return result.data.map({
                    "useCashAccounts.useCallback[loadAccounts]": (account)=>({
                            ...account,
                            createdAt: new Date(account.createdAt),
                            updatedAt: new Date(account.updatedAt)
                        })
                }["useCashAccounts.useCallback[loadAccounts]"]);
            } catch (error) {
                console.error('Error loading cash accounts:', error);
                toast({
                    title: "Error",
                    description: "Failed to load cash accounts",
                    variant: "destructive"
                });
                return [];
            }
        }
    }["useCashAccounts.useCallback[loadAccounts]"], [
        currentBusiness?.id,
        toast
    ]);
    const queryKey = [
        'cash_accounts',
        currentBusiness?.id
    ];
    const { data: queriedAccounts, isLoading: isQueryLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadAccounts,
        enabled: !!currentBusiness?.id,
        staleTime: 30_000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCashAccounts.useEffect": ()=>{
            if (queriedAccounts) {
                setAccounts(queriedAccounts);
            }
        }
    }["useCashAccounts.useEffect"], [
        queriedAccounts
    ]);
    const isLoading = isQueryLoading && !queriedAccounts;
    const refreshAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashAccounts.useCallback[refreshAccounts]": ()=>{
            queryClient.invalidateQueries({
                queryKey
            });
        }
    }["useCashAccounts.useCallback[refreshAccounts]"], [
        queryClient,
        queryKey
    ]);
    const createAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashAccounts.useCallback[createAccount]": async (accountData)=>{
            if (!currentBusiness?.id || !user?.id) return null;
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bf746d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCashAccountAction"])({
                    ...accountData,
                    userId: user.id,
                    locationId: currentBusiness.id
                });
                if (!result.success || !result.data) throw new Error(result.error);
                queryClient.invalidateQueries({
                    queryKey
                });
                toast({
                    title: "Success",
                    description: "Cash account created successfully"
                });
                return result.data;
            } catch (error) {
                console.error('Error creating cash account:', error);
                toast({
                    title: "Error",
                    description: "Failed to create cash account",
                    variant: "destructive"
                });
                return null;
            }
        }
    }["useCashAccounts.useCallback[createAccount]"], [
        currentBusiness?.id,
        user?.id,
        queryClient,
        queryKey,
        toast
    ]);
    const updateAccount = async (id, updates)=>{
        if (!currentBusiness?.id) return false;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cac4e7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCashAccountAction"])(id, {
                ...updates,
                locationId: currentBusiness.id
            });
            if (!result.success) throw new Error(result.error);
            queryClient.invalidateQueries({
                queryKey
            });
            toast({
                title: "Success",
                description: "Cash account updated successfully"
            });
            return true;
        } catch (error) {
            console.error('Error updating cash account:', error);
            toast({
                title: "Error",
                description: "Failed to update cash account",
                variant: "destructive"
            });
            return false;
        }
    };
    const deleteAccount = async (id, onDeleted)=>{
        if (!currentBusiness?.id) return {
            success: false,
            hasTransactions: false
        };
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd0249__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCashAccountAction"])(id, currentBusiness.id);
            if (result.success) {
                queryClient.invalidateQueries({
                    queryKey
                });
                toast({
                    title: "Success",
                    description: "Cash account deleted successfully"
                });
                if (onDeleted) onDeleted();
            }
            return result;
        } catch (error) {
            console.error('Error deleting cash account:', error);
            toast({
                title: "Error",
                description: "Failed to delete cash account",
                variant: "destructive"
            });
            return {
                success: false,
                hasTransactions: false
            };
        }
    };
    const deleteAccountWithTransactions = async (id, deleteTransactions = false, onDeleted)=>{
        if (!currentBusiness?.id) return false;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5b472f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCashAccountWithTransactionsAction"])(id, currentBusiness.id, deleteTransactions);
            if (!result.success) throw new Error(result.error);
            queryClient.invalidateQueries({
                queryKey
            });
            toast({
                title: "Success",
                description: deleteTransactions ? "Account and transactions deleted" : "Account deleted (records unlinked)"
            });
            if (onDeleted) onDeleted();
            return true;
        } catch (error) {
            console.error('Error deleting cash account:', error);
            toast({
                title: "Error",
                description: "Failed to delete cash account",
                variant: "destructive"
            });
            return false;
        }
    };
    const getAccountBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashAccounts.useCallback[getAccountBalance]": async (accountId)=>{
            if (!currentBusiness?.id) return 0;
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$99019c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCashAccountBalanceAction"])(accountId, currentBusiness.id);
                if (result.success) return result.data;
                return 0;
            } catch (error) {
                console.error('Error getting balance:', error);
                return 0;
            }
        }
    }["useCashAccounts.useCallback[getAccountBalance]"], [
        currentBusiness?.id
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCashAccounts.useMemo": ()=>({
                accounts,
                isLoading,
                createAccount,
                updateAccount,
                deleteAccount,
                deleteAccountWithTransactions,
                getAccountBalance,
                loadAccounts,
                refreshAccounts
            })
    }["useCashAccounts.useMemo"], [
        accounts,
        isLoading,
        createAccount,
        updateAccount,
        deleteAccount,
        deleteAccountWithTransactions,
        getAccountBalance,
        loadAccounts,
        refreshAccounts
    ]);
};
_s(useCashAccounts, "9f0ZhEp6Qq/+vBDdqxgRq3KSh+4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/sale-form/useFormState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormState",
    ()=>useFormState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const emptyItem = {
    description: '',
    quantity: 1,
    price: 0,
    cost: 0
};
const useFormState = ({ initialData, defaultPaymentStatus })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customerName: initialData?.customerName || '',
        customerAddress: initialData?.customerAddress || '',
        customerContact: initialData?.customerContact || '',
        customerId: initialData?.customerId || '',
        items: initialData?.items || [
            {
                ...emptyItem
            }
        ],
        paymentStatus: defaultPaymentStatus,
        taxRate: initialData?.taxRate || 0,
        amountPaid: initialData && initialData.paymentStatus === 'Installment Sale' ? 0 : initialData?.amountPaid || 0,
        amountDue: initialData?.amountDue || 0,
        notes: initialData?.notes || '',
        categoryId: initialData?.categoryId || ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [taxRateInput, setTaxRateInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.taxRate ? initialData.taxRate.toString() : '');
    const [printAfterSave, setPrintAfterSave] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [thermalPrintAfterSave, setThermalPrintAfterSave] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [includePaymentInfo, setIncludePaymentInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedCustomerCategoryId, setSelectedCustomerCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [paymentDate, setPaymentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    // Cash account integration states
    const [linkToCash, setLinkToCash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCashAccountId, setSelectedCashAccountId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [cashTransactionId, setCashTransactionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [originalPaymentStatus, setOriginalPaymentStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultPaymentStatus);
    const [formRecentlyCleared, setFormRecentlyCleared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const clearFormState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormState.useCallback[clearFormState]": (onDateReset)=>{
            setFormData({
                customerName: '',
                customerAddress: '',
                customerContact: '',
                customerId: '',
                items: [
                    {
                        ...emptyItem
                    }
                ],
                paymentStatus: defaultPaymentStatus,
                taxRate: 0,
                amountPaid: 0,
                amountDue: 0,
                notes: '',
                categoryId: ''
            });
            setTaxRateInput('');
            setSelectedCustomerCategoryId('');
            setPaymentDate(new Date());
            setLinkToCash(false);
            setErrors({});
            setFormRecentlyCleared(true);
            if (onDateReset) {
                onDateReset();
            }
        }
    }["useFormState.useCallback[clearFormState]"], [
        defaultPaymentStatus
    ]);
    // Sync with initialData if it arrives late or changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFormState.useEffect": ()=>{
            if (initialData) {
                setFormData({
                    "useFormState.useEffect": (prev)=>({
                            ...prev,
                            customerName: initialData.customerName || prev.customerName,
                            customerAddress: initialData.customerAddress || prev.customerAddress,
                            customerContact: initialData.customerContact || prev.customerContact,
                            customerId: initialData.customerId || prev.customerId,
                            // Only override items if we have them in initialData and current items are empty/default
                            items: initialData.items && initialData.items.length > 0 ? initialData.items : prev.items,
                            // Ensure payment status syncs
                            paymentStatus: initialData.paymentStatus || prev.paymentStatus,
                            taxRate: initialData.taxRate !== undefined ? initialData.taxRate : prev.taxRate,
                            amountPaid: initialData.amountPaid !== undefined ? initialData.amountPaid : prev.amountPaid,
                            amountDue: initialData.amountDue !== undefined ? initialData.amountDue : prev.amountDue,
                            notes: initialData.notes || prev.notes,
                            categoryId: initialData.categoryId || prev.categoryId // Sync Category ID
                        })
                }["useFormState.useEffect"]);
                if (initialData.categoryId) {
                    // Also ensure formRecentlyCleared doesn't block it
                    setFormRecentlyCleared(false);
                }
                // Update tax rate input too
                if (initialData.taxRate !== undefined) {
                    setTaxRateInput(initialData.taxRate.toString());
                }
            }
        }
    }["useFormState.useEffect"], [
        initialData
    ]);
    return {
        // State
        formData,
        errors,
        taxRateInput,
        printAfterSave,
        thermalPrintAfterSave,
        includePaymentInfo,
        selectedCustomerCategoryId,
        paymentDate,
        linkToCash,
        selectedCashAccountId,
        cashTransactionId,
        originalPaymentStatus,
        formRecentlyCleared,
        // Setters
        setFormData,
        setErrors,
        setTaxRateInput,
        setPrintAfterSave,
        setThermalPrintAfterSave,
        setIncludePaymentInfo,
        setSelectedCustomerCategoryId,
        setPaymentDate,
        setLinkToCash,
        setSelectedCashAccountId,
        setCashTransactionId,
        setOriginalPaymentStatus,
        setFormRecentlyCleared,
        // Actions
        clearFormState
    };
};
_s(useFormState, "OfE/H6QU2I8lBwH6Dt8Wwj96zAg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/sale-form/useFormHandlers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormHandlers",
    ()=>useFormHandlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useFormHandlers = ({ formData, setFormData, errors, setErrors, setTaxRateInput, setLinkToCash })=>{
    _s();
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormHandlers.useCallback[handleChange]": (e)=>{
            const { name, value } = e.target;
            if (name === 'taxRate') {
                setTaxRateInput(value);
                const normalizedValue = value.replace(/,/g, '');
                const numValue = normalizedValue === '' ? 0 : parseFloat(normalizedValue);
                setFormData({
                    "useFormHandlers.useCallback[handleChange]": (prev)=>({
                            ...prev,
                            taxRate: isNaN(numValue) ? 0 : numValue
                        })
                }["useFormHandlers.useCallback[handleChange]"]);
            } else {
                setFormData({
                    "useFormHandlers.useCallback[handleChange]": (prev)=>({
                            ...prev,
                            [name]: value
                        })
                }["useFormHandlers.useCallback[handleChange]"]);
            }
            if (errors[name]) {
                setErrors({
                    "useFormHandlers.useCallback[handleChange]": (prev)=>({
                            ...prev,
                            [name]: undefined
                        })
                }["useFormHandlers.useCallback[handleChange]"]);
            }
        }
    }["useFormHandlers.useCallback[handleChange]"], [
        errors,
        setFormData,
        setErrors,
        setTaxRateInput
    ]);
    const handleSelectChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormHandlers.useCallback[handleSelectChange]": (value)=>{
            const newPaymentStatus = value;
            setFormData({
                "useFormHandlers.useCallback[handleSelectChange]": (prev)=>({
                        ...prev,
                        paymentStatus: newPaymentStatus
                    })
            }["useFormHandlers.useCallback[handleSelectChange]"]);
            if (value !== 'Paid' && value !== 'Installment Sale') {
                setLinkToCash(false);
            }
            if (value !== 'Installment Sale') {
                setFormData({
                    "useFormHandlers.useCallback[handleSelectChange]": (prev)=>({
                            ...prev,
                            paymentStatus: newPaymentStatus,
                            amountPaid: 0,
                            amountDue: 0
                        })
                }["useFormHandlers.useCallback[handleSelectChange]"]);
            }
        }
    }["useFormHandlers.useCallback[handleSelectChange]"], [
        setFormData,
        setLinkToCash
    ]);
    const handleAmountPaidChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormHandlers.useCallback[handleAmountPaidChange]": (amount, grandTotal)=>{
            const amountDue = Math.max(0, grandTotal - amount);
            setFormData({
                "useFormHandlers.useCallback[handleAmountPaidChange]": (prev)=>({
                        ...prev,
                        amountPaid: amount,
                        amountDue: amountDue
                    })
            }["useFormHandlers.useCallback[handleAmountPaidChange]"]);
        }
    }["useFormHandlers.useCallback[handleAmountPaidChange]"], [
        setFormData
    ]);
    const handlePaymentDateChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormHandlers.useCallback[handlePaymentDateChange]": (date)=>{
        // This will be handled by the parent component's setPaymentDate
        }
    }["useFormHandlers.useCallback[handlePaymentDateChange]"], []);
    return {
        handleChange,
        handleSelectChange,
        handleAmountPaidChange,
        handlePaymentDateChange
    };
};
_s(useFormHandlers, "TLOpc92MfZoNHfVnn7P2ostjMEI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/sale-form/useItemManagement.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useItemManagement",
    ()=>useItemManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const emptyItem = {
    description: '',
    quantity: 1,
    price: 0,
    cost: 0
};
const useItemManagement = ({ formData, setFormData })=>{
    _s();
    const handleAddItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useItemManagement.useCallback[handleAddItem]": ()=>{
            setFormData({
                "useItemManagement.useCallback[handleAddItem]": (prev)=>({
                        ...prev,
                        items: [
                            ...prev.items,
                            {
                                ...emptyItem
                            }
                        ]
                    })
            }["useItemManagement.useCallback[handleAddItem]"]);
        }
    }["useItemManagement.useCallback[handleAddItem]"], [
        setFormData
    ]);
    const handleAddItemWithProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useItemManagement.useCallback[handleAddItemWithProduct]": (product)=>{
            setFormData({
                "useItemManagement.useCallback[handleAddItemWithProduct]": (prev)=>{
                    // Check if product already exists in items
                    const existingItemIndex = prev.items.findIndex({
                        "useItemManagement.useCallback[handleAddItemWithProduct].existingItemIndex": (item)=>item.productId === product.id
                    }["useItemManagement.useCallback[handleAddItemWithProduct].existingItemIndex"]);
                    if (existingItemIndex !== -1) {
                        const newItems = [
                            ...prev.items
                        ];
                        newItems[existingItemIndex] = {
                            ...newItems[existingItemIndex],
                            quantity: newItems[existingItemIndex].quantity + 1
                        };
                        return {
                            ...prev,
                            items: newItems
                        };
                    }
                    const newItem = {
                        productId: product.id,
                        description: product.name,
                        quantity: 1,
                        price: product.sellingPrice,
                        cost: product.costPrice
                    };
                    // If the first item is empty, replace it
                    if (prev.items.length === 1 && !prev.items[0].description && !prev.items[0].productId) {
                        return {
                            ...prev,
                            items: [
                                newItem
                            ]
                        };
                    }
                    return {
                        ...prev,
                        items: [
                            ...prev.items,
                            newItem
                        ]
                    };
                }
            }["useItemManagement.useCallback[handleAddItemWithProduct]"]);
        }
    }["useItemManagement.useCallback[handleAddItemWithProduct]"], [
        setFormData
    ]);
    const handleUpdateItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useItemManagement.useCallback[handleUpdateItem]": (index, updatedItem)=>{
            setFormData({
                "useItemManagement.useCallback[handleUpdateItem]": (prev)=>{
                    // If this item has a productId, check if it already exists in another row
                    if (updatedItem.productId) {
                        const existingItemIndex = prev.items.findIndex({
                            "useItemManagement.useCallback[handleUpdateItem].existingItemIndex": (item, i)=>i !== index && item.productId === updatedItem.productId
                        }["useItemManagement.useCallback[handleUpdateItem].existingItemIndex"]);
                        if (existingItemIndex !== -1) {
                            // Duplicate found! Merge this item into the existing one
                            const newItems = [
                                ...prev.items
                            ];
                            const existingItem = newItems[existingItemIndex];
                            newItems[existingItemIndex] = {
                                ...existingItem,
                                quantity: existingItem.quantity + updatedItem.quantity
                            };
                            // If there's more than one item, remove the current (duplicate) row
                            if (newItems.length > 1) {
                                newItems.splice(index, 1);
                            } else {
                                // If it's the only item (unlikely for a duplicate but safe), reset it
                                newItems[index] = {
                                    ...emptyItem
                                };
                            }
                            return {
                                ...prev,
                                items: newItems
                            };
                        }
                    }
                    const newItems = [
                        ...prev.items
                    ];
                    newItems[index] = updatedItem;
                    return {
                        ...prev,
                        items: newItems
                    };
                }
            }["useItemManagement.useCallback[handleUpdateItem]"]);
        }
    }["useItemManagement.useCallback[handleUpdateItem]"], [
        setFormData
    ]);
    const handleRemoveItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useItemManagement.useCallback[handleRemoveItem]": (index)=>{
            setFormData({
                "useItemManagement.useCallback[handleRemoveItem]": (prev)=>{
                    if (prev.items.length === 1) return prev;
                    const newItems = prev.items.filter({
                        "useItemManagement.useCallback[handleRemoveItem].newItems": (_, i)=>i !== index
                    }["useItemManagement.useCallback[handleRemoveItem].newItems"]);
                    return {
                        ...prev,
                        items: newItems
                    };
                }
            }["useItemManagement.useCallback[handleRemoveItem]"]);
        }
    }["useItemManagement.useCallback[handleRemoveItem]"], [
        setFormData
    ]);
    return {
        handleAddItem,
        handleAddItemWithProduct,
        handleUpdateItem,
        handleRemoveItem
    };
};
_s(useItemManagement, "xR1VY5e7Ls148reMSJEfHq0XUkM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/sale-form/useCustomerSelection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomerSelection",
    ()=>useCustomerSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useCustomerSelection = ({ setFormData, setSelectedCustomerCategoryId })=>{
    _s();
    const handleSelectCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCustomerSelection.useCallback[handleSelectCustomer]": (customer)=>{
            setFormData({
                "useCustomerSelection.useCallback[handleSelectCustomer]": (prev)=>({
                        ...prev,
                        customerName: customer.fullName,
                        customerAddress: customer.location || '',
                        customerContact: customer.phoneNumber || '',
                        customerId: customer.id
                    })
            }["useCustomerSelection.useCallback[handleSelectCustomer]"]);
            setSelectedCustomerCategoryId(customer.categoryId || '');
        }
    }["useCustomerSelection.useCallback[handleSelectCustomer]"], [
        setFormData,
        setSelectedCustomerCategoryId
    ]);
    const handleCategoryChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCustomerSelection.useCallback[handleCategoryChange]": (categoryId)=>{
            setSelectedCustomerCategoryId(categoryId);
        }
    }["useCustomerSelection.useCallback[handleCategoryChange]"], [
        setSelectedCustomerCategoryId
    ]);
    return {
        handleSelectCustomer,
        handleCategoryChange
    };
};
_s(useCustomerSelection, "1fuBIj+mQ0ACSEZE0yZgCrxtXq4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/sale-form/useFormValidation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormValidation",
    ()=>useFormValidation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useFormValidation = ({ formData, linkToCash, selectedCashAccountId, initialData, formRecentlyCleared, setErrors })=>{
    _s();
    const validateForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormValidation.useCallback[validateForm]": (grandTotal, saleDate)=>{
            const newErrors = {};
            if (!formData.customerName.trim()) {
                newErrors.customerName = 'Customer name is required';
            }
            if (formData.taxRate < 0) {
                newErrors.taxRate = 'Tax rate cannot be negative';
            }
            // Filter out completely empty items (placeholder items)
            const nonEmptyItems = formData.items.filter({
                "useFormValidation.useCallback[validateForm].nonEmptyItems": (item)=>item.description.trim() !== '' || item.quantity > 0 || item.price > 0
            }["useFormValidation.useCallback[validateForm].nonEmptyItems"]);
            const hasInvalidItems = nonEmptyItems.some({
                "useFormValidation.useCallback[validateForm].hasInvalidItems": (item)=>!item.description.trim() || item.quantity <= 0 || item.price < 0 || item.cost < 0
            }["useFormValidation.useCallback[validateForm].hasInvalidItems"]);
            if (hasInvalidItems) {
                newErrors.items = 'All items must have a description, positive quantity, and non-negative price/cost';
            }
            // Note: Removed product creation date validation as it was too strict
            // and prevented loading drafts. Products can exist before a sale is backdated.
            // The validation was: if product createdAt > saleDate, reject the sale
            // This is overly restrictive for legitimate use cases like loading drafts.
            if (linkToCash && (formData.paymentStatus === 'Paid' || formData.paymentStatus === 'Installment Sale') && !selectedCashAccountId) {
                newErrors.cashAccount = 'Select a cash account when linking payments';
            }
            if (formData.paymentStatus === 'Installment Sale' && !initialData) {
                if (!formData.amountPaid || formData.amountPaid <= 0) {
                    newErrors.amountPaid = 'Enter an initial payment greater than 0';
                }
                if (formData.amountPaid && formData.amountPaid > grandTotal) {
                    newErrors.amountPaid = 'Amount paid cannot exceed total';
                }
            }
            if (formData.paymentStatus === 'Installment Sale' && initialData && formData.amountPaid) {
                if (formData.amountPaid > grandTotal) {
                    newErrors.amountPaid = 'Amount paid cannot exceed total';
                }
            }
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        }
    }["useFormValidation.useCallback[validateForm]"], [
        formData,
        linkToCash,
        selectedCashAccountId,
        initialData,
        formRecentlyCleared,
        setErrors
    ]);
    return {
        validateForm
    };
};
_s(useFormValidation, "niILnZIWhXGSRF+BJ5Ob6WEpTJs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/sale-form/useFormCalculations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormCalculations",
    ()=>useFormCalculations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useFormCalculations = ({ taxRate })=>{
    _s();
    const calculateTotalAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormCalculations.useCallback[calculateTotalAmount]": (items)=>{
            return items.reduce({
                "useFormCalculations.useCallback[calculateTotalAmount]": (total, item)=>{
                    const subtotal = item.price * item.quantity;
                    const discountAmount = item.discountType === 'amount' ? item.discountAmount || 0 : subtotal * (item.discountPercentage || 0) / 100;
                    return total + (subtotal - discountAmount);
                }
            }["useFormCalculations.useCallback[calculateTotalAmount]"], 0);
        }
    }["useFormCalculations.useCallback[calculateTotalAmount]"], []);
    const calculateTaxAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFormCalculations.useCallback[calculateTaxAmount]": (total)=>{
            return total * (taxRate / 100);
        }
    }["useFormCalculations.useCallback[calculateTaxAmount]"], [
        taxRate
    ]);
    return {
        calculateTotalAmount,
        calculateTaxAmount
    };
};
_s(useFormCalculations, "2bi073PH58bsj1HeHV8kz13pQT8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useInstallmentPayments.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInstallmentPayments",
    ()=>useInstallmentPayments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$47c6c6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:47c6c6 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$036460__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:036460 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$02d05b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:02d05b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9e7cbf__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:9e7cbf [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9f0c68__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:9f0c68 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$16b8a3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:16b8a3 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useInstallmentPayments = (saleId)=>{
    _s();
    const [payments, setPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const fetchPayments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInstallmentPayments.useCallback[fetchPayments]": async (targetSaleId)=>{
            try {
                setIsLoading(true);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$47c6c6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getInstallmentPaymentsAction"])(targetSaleId);
                if (!result.success || !result.data) throw new Error(result.error);
                const formattedPayments = result.data.map({
                    "useInstallmentPayments.useCallback[fetchPayments].formattedPayments": (payment)=>({
                            ...payment,
                            paymentDate: new Date(payment.paymentDate),
                            createdAt: new Date(payment.createdAt),
                            updatedAt: new Date(payment.updatedAt)
                        })
                }["useInstallmentPayments.useCallback[fetchPayments].formattedPayments"]);
                setPayments(formattedPayments);
            } catch (error) {
                console.error('Error fetching installment payments:', error);
                toast({
                    title: "Error",
                    description: "Failed to load payment history",
                    variant: "destructive"
                });
            } finally{
                setIsLoading(false);
            }
        }
    }["useInstallmentPayments.useCallback[fetchPayments]"], [
        toast
    ]);
    const createPayment = async (payment)=>{
        if (!user) return null;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$036460__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createInstallmentPaymentAction"])({
                ...payment,
                userId: user.id,
                paymentDate: payment.paymentDate?.toISOString()
            });
            if (!result.success || !result.data) throw new Error(result.error);
            const newPayment = {
                ...result.data,
                paymentDate: new Date(result.data.paymentDate),
                createdAt: new Date(result.data.createdAt),
                updatedAt: new Date(result.data.updatedAt)
            };
            setPayments((prev)=>[
                    newPayment,
                    ...prev
                ]);
            return newPayment;
        } catch (error) {
            console.error('Error creating payment:', error);
            toast({
                title: "Error",
                description: "Failed to record payment",
                variant: "destructive"
            });
            return null;
        }
    };
    const updatePayment = async (paymentId, updates)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$02d05b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateInstallmentPaymentAction"])(paymentId, {
                ...updates,
                paymentDate: updates.paymentDate?.toISOString()
            });
            if (!result.success || !result.data) throw new Error(result.error);
            const updatedPayment = {
                ...result.data,
                paymentDate: new Date(result.data.paymentDate),
                createdAt: new Date(result.data.createdAt),
                updatedAt: new Date(result.data.updatedAt)
            };
            setPayments((prev)=>prev.map((p)=>p.id === paymentId ? updatedPayment : p));
            toast({
                title: "Success",
                description: "Payment updated successfully"
            });
            return updatedPayment;
        } catch (error) {
            console.error('Error updating payment:', error);
            toast({
                title: "Error",
                description: error.message || "Failed to update payment",
                variant: "destructive"
            });
            return null;
        }
    };
    const deletePayment = async (paymentId)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9e7cbf__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteInstallmentPaymentAction"])(paymentId);
            if (!result.success) throw new Error(result.error);
            setPayments((prev)=>prev.filter((p)=>p.id !== paymentId));
            toast({
                title: "Success",
                description: "Payment deleted successfully"
            });
            return true;
        } catch (error) {
            console.error('Error deleting payment:', error);
            toast({
                title: "Error",
                description: "Failed to delete payment",
                variant: "destructive"
            });
            return false;
        }
    };
    const linkPaymentToCashAccount = async (paymentId, accountId, locationId)=>{
        if (!user) return;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9f0c68__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["linkInstallmentToCashAction"])(paymentId, accountId, locationId, user.id);
            if (!result.success || !result.data) throw new Error(result.error);
            setPayments((prev)=>prev.map((p)=>p.id === paymentId ? {
                        ...p,
                        cashTransactionId: result.data.id
                    } : p));
            toast({
                title: "Success",
                description: "Payment linked to cash account successfully"
            });
        } catch (error) {
            console.error('Error linking payment:', error);
            toast({
                title: "Error",
                description: error.message || "Failed to link payment",
                variant: "destructive"
            });
        }
    };
    const unlinkPaymentFromCashAccount = async (paymentId)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$16b8a3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["unlinkInstallmentFromCashAction"])(paymentId);
            if (!result.success) throw new Error(result.error);
            setPayments((prev)=>prev.map((p)=>p.id === paymentId ? {
                        ...p,
                        cashTransactionId: undefined
                    } : p));
            toast({
                title: "Success",
                description: "Payment unlinked from cash account successfully"
            });
        } catch (error) {
            console.error('Error unlinking payment:', error);
            toast({
                title: "Error",
                description: error.message || "Failed to unlink payment",
                variant: "destructive"
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInstallmentPayments.useEffect": ()=>{
            if (saleId) {
                fetchPayments(saleId);
            }
        }
    }["useInstallmentPayments.useEffect"], [
        saleId,
        fetchPayments
    ]);
    return {
        payments,
        isLoading,
        fetchPayments,
        createPayment,
        updatePayment,
        deletePayment,
        linkPaymentToCashAccount,
        unlinkPaymentFromCashAccount
    };
};
_s(useInstallmentPayments, "zYY1rlYhJzFJdr+4bAxejSWokuU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useLocalPaymentChanges.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocalPaymentChanges",
    ()=>useLocalPaymentChanges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useLocalPaymentChanges = ()=>{
    _s();
    const [pendingChanges, setPendingChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addPaymentChange = (change)=>{
        setPendingChanges((prev)=>{
            // Remove any existing change for this payment
            const filtered = prev.filter((c)=>c.id !== change.id);
            return [
                ...filtered,
                change
            ];
        });
    };
    const removePaymentChange = (paymentId)=>{
        setPendingChanges((prev)=>prev.filter((c)=>c.id !== paymentId));
    };
    const clearChanges = ()=>{
        setPendingChanges([]);
    };
    const getModifiedPayments = (originalPayments)=>{
        return originalPayments.filter((payment)=>{
            // Filter out deleted payments
            const deleteChange = pendingChanges.find((c)=>c.id === payment.id && c.type === 'delete');
            return !deleteChange;
        }).map((payment)=>{
            // Apply updates to payments
            const updateChange = pendingChanges.find((c)=>c.id === payment.id && c.type === 'update');
            if (updateChange && updateChange.updatedData) {
                return {
                    ...payment,
                    amount: updateChange.updatedData.amount ?? payment.amount,
                    notes: updateChange.updatedData.notes ?? payment.notes,
                    paymentDate: updateChange.updatedData.paymentDate ?? payment.paymentDate
                };
            }
            return payment;
        });
    };
    const hasChanges = pendingChanges.length > 0;
    return {
        pendingChanges,
        addPaymentChange,
        removePaymentChange,
        clearChanges,
        getModifiedPayments,
        hasChanges
    };
};
_s(useLocalPaymentChanges, "pwXyz7Nz/8gL7kimcBeVo/CQocE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/sale-form/usePaymentOperations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePaymentOperations",
    ()=>usePaymentOperations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInstallmentPayments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInstallmentPayments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalPaymentChanges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLocalPaymentChanges.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const usePaymentOperations = ({ initialDataId })=>{
    _s();
    const { payments, createPayment: createInstallmentPayment, updatePayment: updateInstallmentPayment, deletePayment: deleteInstallmentPayment } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInstallmentPayments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInstallmentPayments"])(initialDataId);
    const { pendingChanges, addPaymentChange, clearChanges, getModifiedPayments, hasChanges } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalPaymentChanges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalPaymentChanges"])();
    const processPendingPaymentChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePaymentOperations.useCallback[processPendingPaymentChanges]": async ()=>{
            for (const change of pendingChanges){
                if (change.type === 'update') {
                    await updateInstallmentPayment(change.id, change.updatedData);
                } else if (change.type === 'delete') {
                    await deleteInstallmentPayment(change.id);
                }
            }
            clearChanges();
        }
    }["usePaymentOperations.useCallback[processPendingPaymentChanges]"], [
        pendingChanges,
        updateInstallmentPayment,
        deleteInstallmentPayment,
        clearChanges
    ]);
    return {
        // Payment state
        payments,
        pendingChanges,
        hasChanges,
        // Payment methods
        createInstallmentPayment,
        updateInstallmentPayment,
        deleteInstallmentPayment,
        addPaymentChange,
        clearChanges,
        getModifiedPayments,
        processPendingPaymentChanges
    };
};
_s(usePaymentOperations, "4m+p4U9NaCUWEAN9vW5KpjS2p3g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInstallmentPayments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInstallmentPayments"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalPaymentChanges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalPaymentChanges"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSaleFormLogic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSaleFormLogic",
    ()=>useSaleFormLogic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/sale-form/useFormState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/sale-form/useFormHandlers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useItemManagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/sale-form/useItemManagement.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useCustomerSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/sale-form/useCustomerSelection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/sale-form/useFormValidation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormCalculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/sale-form/useFormCalculations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$usePaymentOperations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/sale-form/usePaymentOperations.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const useSaleFormLogic = ({ initialData, defaultPaymentStatus, cashAccounts })=>{
    _s();
    // Form state management
    const { formData, errors, taxRateInput, printAfterSave, thermalPrintAfterSave, includePaymentInfo, selectedCustomerCategoryId, paymentDate, linkToCash, selectedCashAccountId, cashTransactionId, originalPaymentStatus, formRecentlyCleared, setFormData, setErrors, setTaxRateInput, setPrintAfterSave, setThermalPrintAfterSave, setIncludePaymentInfo, setSelectedCustomerCategoryId, setPaymentDate, setLinkToCash, setSelectedCashAccountId, setCashTransactionId, setOriginalPaymentStatus, setFormRecentlyCleared, clearFormState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormState"])({
        initialData,
        defaultPaymentStatus
    });
    // Form handlers
    const { handleChange, handleSelectChange, handleAmountPaidChange, handlePaymentDateChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"])({
        formData,
        setFormData,
        errors,
        setErrors,
        setTaxRateInput,
        setLinkToCash
    });
    // Item management
    const { handleAddItem, handleAddItemWithProduct, handleUpdateItem, handleRemoveItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useItemManagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItemManagement"])({
        formData,
        setFormData
    });
    // Customer selection
    const { handleSelectCustomer, handleCategoryChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useCustomerSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomerSelection"])({
        setFormData,
        setSelectedCustomerCategoryId
    });
    // Form validation
    const { validateForm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormValidation"])({
        formData,
        linkToCash,
        selectedCashAccountId,
        initialData,
        formRecentlyCleared,
        setErrors
    });
    // Calculations
    const { calculateTotalAmount, calculateTaxAmount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormCalculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormCalculations"])({
        taxRate: formData.taxRate
    });
    // Payment operations
    const { payments, pendingChanges, hasChanges, createInstallmentPayment, updateInstallmentPayment, deleteInstallmentPayment, addPaymentChange, clearChanges, getModifiedPayments, processPendingPaymentChanges } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$usePaymentOperations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentOperations"])({
        initialDataId: initialData?.id
    });
    // Enhanced payment date change handler
    const handlePaymentDateChangeEnhanced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleFormLogic.useCallback[handlePaymentDateChangeEnhanced]": (date)=>{
            setPaymentDate(date);
        }
    }["useSaleFormLogic.useCallback[handlePaymentDateChangeEnhanced]"], [
        setPaymentDate
    ]);
    // Enhanced clear form that can reset date and draft
    const clearForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleFormLogic.useCallback[clearForm]": (onDateReset, onDraftClear)=>{
            clearFormState(onDateReset);
            clearChanges();
            if (onDraftClear) {
                onDraftClear();
            }
        }
    }["useSaleFormLogic.useCallback[clearForm]"], [
        clearFormState,
        clearChanges
    ]);
    // Enhanced handlers that reset the formRecentlyCleared flag
    const handleChangeEnhanced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleFormLogic.useCallback[handleChangeEnhanced]": (e)=>{
            if (formRecentlyCleared) {
                setFormRecentlyCleared(false);
            }
            handleChange(e);
        }
    }["useSaleFormLogic.useCallback[handleChangeEnhanced]"], [
        formRecentlyCleared,
        setFormRecentlyCleared,
        handleChange
    ]);
    const handleSelectChangeEnhanced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleFormLogic.useCallback[handleSelectChangeEnhanced]": (value)=>{
            if (formRecentlyCleared) {
                setFormRecentlyCleared(false);
            }
            handleSelectChange(value);
        }
    }["useSaleFormLogic.useCallback[handleSelectChangeEnhanced]"], [
        formRecentlyCleared,
        setFormRecentlyCleared,
        handleSelectChange
    ]);
    // Enhanced item handlers that reset the formRecentlyCleared flag
    const handleAddItemEnhanced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleFormLogic.useCallback[handleAddItemEnhanced]": (product)=>{
            if (formRecentlyCleared) {
                setFormRecentlyCleared(false);
            }
            // Check if product is actually an event (from onClick) or a valid product object
            // Events have 'type' or 'target' properties, products have 'id' or 'name'
            const isEvent = product && (product.nativeEvent || product.preventDefault || product.stopPropagation || product.type && product.target);
            if (product && !isEvent) {
                handleAddItemWithProduct(product);
            } else {
                handleAddItem();
            }
        }
    }["useSaleFormLogic.useCallback[handleAddItemEnhanced]"], [
        formRecentlyCleared,
        setFormRecentlyCleared,
        handleAddItem,
        handleAddItemWithProduct
    ]);
    const handleUpdateItemEnhanced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleFormLogic.useCallback[handleUpdateItemEnhanced]": (index, updatedItem)=>{
            if (formRecentlyCleared) {
                setFormRecentlyCleared(false);
            }
            handleUpdateItem(index, updatedItem);
        }
    }["useSaleFormLogic.useCallback[handleUpdateItemEnhanced]"], [
        formRecentlyCleared,
        setFormRecentlyCleared,
        handleUpdateItem
    ]);
    const handleRemoveItemEnhanced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleFormLogic.useCallback[handleRemoveItemEnhanced]": (index)=>{
            if (formRecentlyCleared) {
                setFormRecentlyCleared(false);
            }
            handleRemoveItem(index);
        }
    }["useSaleFormLogic.useCallback[handleRemoveItemEnhanced]"], [
        formRecentlyCleared,
        setFormRecentlyCleared,
        handleRemoveItem
    ]);
    // Enhanced customer handlers that reset the formRecentlyCleared flag
    const handleSelectCustomerEnhanced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleFormLogic.useCallback[handleSelectCustomerEnhanced]": (customer)=>{
            if (formRecentlyCleared) {
                setFormRecentlyCleared(false);
            }
            handleSelectCustomer(customer);
        }
    }["useSaleFormLogic.useCallback[handleSelectCustomerEnhanced]"], [
        formRecentlyCleared,
        setFormRecentlyCleared,
        handleSelectCustomer
    ]);
    const handleCategoryChangeEnhanced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleFormLogic.useCallback[handleCategoryChangeEnhanced]": (categoryId)=>{
            if (formRecentlyCleared) {
                setFormRecentlyCleared(false);
            }
            handleCategoryChange(categoryId);
        }
    }["useSaleFormLogic.useCallback[handleCategoryChangeEnhanced]"], [
        formRecentlyCleared,
        setFormRecentlyCleared,
        handleCategoryChange
    ]);
    // Sales category change handler
    const handleSalesCategoryChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSaleFormLogic.useCallback[handleSalesCategoryChange]": (categoryId)=>{
            if (formRecentlyCleared) {
                setFormRecentlyCleared(false);
            }
            setFormData({
                "useSaleFormLogic.useCallback[handleSalesCategoryChange]": (prev)=>({
                        ...prev,
                        categoryId
                    })
            }["useSaleFormLogic.useCallback[handleSalesCategoryChange]"]);
        }
    }["useSaleFormLogic.useCallback[handleSalesCategoryChange]"], [
        formRecentlyCleared,
        setFormRecentlyCleared,
        setFormData
    ]);
    return {
        // State
        formData,
        errors,
        taxRateInput,
        printAfterSave,
        thermalPrintAfterSave,
        includePaymentInfo,
        selectedCustomerCategoryId,
        paymentDate,
        linkToCash,
        selectedCashAccountId,
        cashTransactionId,
        originalPaymentStatus,
        formRecentlyCleared,
        payments,
        pendingChanges,
        hasChanges,
        // Setters
        setFormData,
        setTaxRateInput,
        setPrintAfterSave,
        setThermalPrintAfterSave,
        setIncludePaymentInfo,
        setLinkToCash,
        setSelectedCashAccountId,
        setCashTransactionId,
        setOriginalPaymentStatus,
        // Handlers
        handleChange: handleChangeEnhanced,
        handleSelectChange: handleSelectChangeEnhanced,
        handleAddItem: handleAddItemEnhanced,
        handleUpdateItem: handleUpdateItemEnhanced,
        handleRemoveItem: handleRemoveItemEnhanced,
        handleSelectCustomer: handleSelectCustomerEnhanced,
        handleCategoryChange: handleCategoryChangeEnhanced,
        handleSalesCategoryChange,
        handleAmountPaidChange,
        handlePaymentDateChange: handlePaymentDateChangeEnhanced,
        clearForm,
        // Utils
        calculateTotalAmount,
        calculateTaxAmount,
        validateForm,
        processPendingPaymentChanges,
        // Payment methods
        createInstallmentPayment,
        updateInstallmentPayment,
        deleteInstallmentPayment,
        addPaymentChange,
        clearChanges,
        getModifiedPayments
    };
};
_s(useSaleFormLogic, "2QKFNKMakXPobPFF8G9UgaTe1PI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormHandlers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useItemManagement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useItemManagement"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useCustomerSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomerSelection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormValidation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormValidation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$useFormCalculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormCalculations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$sale$2d$form$2f$usePaymentOperations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentOperations"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCashTransactions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCashTransactions",
    ()=>useCashTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/cash.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$941082__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:941082 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c53c0b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:c53c0b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cf9be1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:cf9be1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5a5529__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:5a5529 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$57d85a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:57d85a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$aae0bd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:aae0bd [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const useCashTransactions = (accountId)=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const loadTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactions.useCallback[loadTransactions]": async ()=>{
            try {
                if (!user || !currentBusiness) {
                    return [];
                }
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$941082__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCashTransactionsAction"])(currentBusiness.id, accountId);
                if (!result.success || !result.data) {
                    throw new Error(result.error || 'Failed to fetch transactions');
                }
                // Format all transactions
                const formattedTransactions = result.data.map({
                    "useCashTransactions.useCallback[loadTransactions].formattedTransactions": (item)=>{
                        const dbTransaction = {
                            id: item.id,
                            user_id: item.user_id,
                            account_id: item.account_id,
                            amount: Number(item.amount),
                            transaction_type: item.transaction_type,
                            category: item.category,
                            description: item.description,
                            person_in_charge: item.person_in_charge,
                            tags: item.tags,
                            date: item.date,
                            payment_method: item.payment_method,
                            receipt_image: item.receipt_image,
                            created_at: item.created_at,
                            updated_at: item.updated_at
                        };
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(dbTransaction);
                    }
                }["useCashTransactions.useCallback[loadTransactions].formattedTransactions"]);
                // Sort
                formattedTransactions.sort({
                    "useCashTransactions.useCallback[loadTransactions]": (a, b)=>{
                        const dateCompare = new Date(b.date).getTime() - new Date(a.date).getTime();
                        if (dateCompare !== 0) return dateCompare;
                        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                    }
                }["useCashTransactions.useCallback[loadTransactions]"]);
                return formattedTransactions;
            } catch (error) {
                console.error('Error loading cash transactions:', error);
                toast({
                    title: "Error",
                    description: "Failed to load cash transactions",
                    variant: "destructive"
                });
                return [];
            }
        }
    }["useCashTransactions.useCallback[loadTransactions]"], [
        user,
        currentBusiness?.id,
        accountId,
        toast
    ]);
    const queryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCashTransactions.useMemo[queryKey]": ()=>[
                'cash_transactions',
                currentBusiness?.id,
                user?.id,
                accountId
            ]
    }["useCashTransactions.useMemo[queryKey]"], [
        currentBusiness?.id,
        user?.id,
        accountId
    ]);
    const { data: transactions = [], isLoading: isQueryLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadTransactions,
        enabled: !!user && !!currentBusiness?.id,
        staleTime: 30_000
    });
    const isLoading = isQueryLoading && transactions.length === 0;
    const createTransaction = async (transactionData)=>{
        try {
            if (!user || !currentBusiness) throw new Error('User not authenticated');
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c53c0b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCashTransactionAction"])({
                ...transactionData,
                userId: user.id,
                locationId: currentBusiness.id
            });
            if (!result.success) throw new Error(result.error);
            toast({
                title: "Success",
                description: transactionData.transactionType === 'transfer' ? "Transfer completed successfully" : "Cash transaction created successfully"
            });
            queryClient.invalidateQueries({
                queryKey
            });
            return Array.isArray(result.data) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(result.data[0]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(result.data);
        } catch (error) {
            console.error('Error creating cash transaction:', error);
            toast({
                title: "Error",
                description: "Failed to create cash transaction",
                variant: "destructive"
            });
            throw error;
        }
    };
    const createBulkTransactions = async (transactionsData)=>{
        try {
            if (!user || !currentBusiness) throw new Error('User not authenticated');
            const payloads = transactionsData.map((t)=>({
                    ...t,
                    userId: user.id,
                    locationId: currentBusiness.id
                }));
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$aae0bd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBulkCashTransactionsAction"])(payloads);
            if (!result.success) throw new Error(result.error);
            toast({
                title: "Success",
                description: `Successfully created ${transactionsData.length} transactions`
            });
            queryClient.invalidateQueries({
                queryKey
            });
            return result.data.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(item));
        } catch (error) {
            console.error('Error creating bulk transactions:', error);
            toast({
                title: "Error",
                description: "Failed to create bulk transactions",
                variant: "destructive"
            });
            throw error;
        }
    };
    const updateTransaction = async (id, updates)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cf9be1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCashTransactionAction"])(id, updates);
            if (!result.success) throw new Error(result.error);
            toast({
                title: "Success",
                description: "Transaction updated successfully"
            });
            queryClient.invalidateQueries({
                queryKey
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(result.data);
        } catch (error) {
            console.error('Error updating cash transaction:', error);
            toast({
                title: "Error",
                description: "Failed to update transaction",
                variant: "destructive"
            });
            return null;
        }
    };
    const deleteTransaction = async (id, onDeleted)=>{
        try {
            if (!currentBusiness) throw new Error('No business selected');
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5a5529__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCashTransactionAction"])(id, currentBusiness.id);
            if (!result.success) throw new Error(result.error);
            toast({
                title: "Success",
                description: "Cash transaction deleted successfully"
            });
            queryClient.invalidateQueries({
                queryKey
            });
            if (onDeleted) onDeleted();
            return true;
        } catch (error) {
            console.error('Error deleting cash transaction:', error);
            toast({
                title: "Error",
                description: "Failed to delete cash transaction",
                variant: "destructive"
            });
            return false;
        }
    };
    const getAccountOpeningBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactions.useCallback[getAccountOpeningBalance]": async (accountId)=>{
            try {
                if (!currentBusiness) return 0;
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$57d85a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAccountOpeningBalanceAction"])(accountId, currentBusiness.id);
                return result.success ? result.data : 0;
            } catch (error) {
                return 0;
            }
        }
    }["useCashTransactions.useCallback[getAccountOpeningBalance]"], [
        currentBusiness?.id
    ]);
    const getDailySummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactions.useCallback[getDailySummary]": async (date, accountId)=>{
            const dateStr = date.toISOString().split('T')[0];
            let filteredTransactions = transactions.filter({
                "useCashTransactions.useCallback[getDailySummary].filteredTransactions": (t)=>t.date.toISOString().split('T')[0] === dateStr
            }["useCashTransactions.useCallback[getDailySummary].filteredTransactions"]);
            if (accountId) {
                filteredTransactions = filteredTransactions.filter({
                    "useCashTransactions.useCallback[getDailySummary]": (t)=>t.accountId === accountId
                }["useCashTransactions.useCallback[getDailySummary]"]);
            }
            const cashIn = filteredTransactions.filter({
                "useCashTransactions.useCallback[getDailySummary].cashIn": (t)=>t.transactionType === 'cash_in' || t.transactionType === 'transfer_in'
            }["useCashTransactions.useCallback[getDailySummary].cashIn"]).reduce({
                "useCashTransactions.useCallback[getDailySummary].cashIn": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDailySummary].cashIn"], 0);
            const cashOut = filteredTransactions.filter({
                "useCashTransactions.useCallback[getDailySummary].cashOut": (t)=>t.transactionType === 'cash_out' || t.transactionType === 'transfer_out'
            }["useCashTransactions.useCallback[getDailySummary].cashOut"]).reduce({
                "useCashTransactions.useCallback[getDailySummary].cashOut": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDailySummary].cashOut"], 0);
            const transfersIn = filteredTransactions.filter({
                "useCashTransactions.useCallback[getDailySummary].transfersIn": (t)=>t.transactionType === 'transfer_in'
            }["useCashTransactions.useCallback[getDailySummary].transfersIn"]).reduce({
                "useCashTransactions.useCallback[getDailySummary].transfersIn": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDailySummary].transfersIn"], 0);
            const transfersOut = filteredTransactions.filter({
                "useCashTransactions.useCallback[getDailySummary].transfersOut": (t)=>t.transactionType === 'transfer_out'
            }["useCashTransactions.useCallback[getDailySummary].transfersOut"]).reduce({
                "useCashTransactions.useCallback[getDailySummary].transfersOut": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDailySummary].transfersOut"], 0);
            const yesterday = new Date(date);
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];
            let yesterdayTransactions = transactions.filter({
                "useCashTransactions.useCallback[getDailySummary].yesterdayTransactions": (t)=>t.date.toISOString().split('T')[0] <= yesterdayStr
            }["useCashTransactions.useCallback[getDailySummary].yesterdayTransactions"]);
            if (accountId) {
                yesterdayTransactions = yesterdayTransactions.filter({
                    "useCashTransactions.useCallback[getDailySummary]": (t)=>t.accountId === accountId
                }["useCashTransactions.useCallback[getDailySummary]"]);
            }
            const yesterdayCashIn = yesterdayTransactions.filter({
                "useCashTransactions.useCallback[getDailySummary].yesterdayCashIn": (t)=>t.transactionType === 'cash_in' || t.transactionType === 'transfer_in'
            }["useCashTransactions.useCallback[getDailySummary].yesterdayCashIn"]).reduce({
                "useCashTransactions.useCallback[getDailySummary].yesterdayCashIn": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDailySummary].yesterdayCashIn"], 0);
            const yesterdayCashOut = yesterdayTransactions.filter({
                "useCashTransactions.useCallback[getDailySummary].yesterdayCashOut": (t)=>t.transactionType === 'cash_out' || t.transactionType === 'transfer_out'
            }["useCashTransactions.useCallback[getDailySummary].yesterdayCashOut"]).reduce({
                "useCashTransactions.useCallback[getDailySummary].yesterdayCashOut": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDailySummary].yesterdayCashOut"], 0);
            let accountOpeningBalance = 0;
            if (accountId) {
                accountOpeningBalance = await getAccountOpeningBalance(accountId);
            }
            const openingBalance = accountOpeningBalance + yesterdayCashIn - yesterdayCashOut;
            const closingBalance = openingBalance + cashIn - cashOut;
            return {
                date,
                openingBalance,
                cashIn,
                cashOut,
                transfersIn,
                transfersOut,
                closingBalance
            };
        }
    }["useCashTransactions.useCallback[getDailySummary]"], [
        transactions,
        getAccountOpeningBalance
    ]);
    const getDateRangeSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactions.useCallback[getDateRangeSummary]": async (startDate, endDate, accountId)=>{
            const startDateStr = startDate.toISOString().split('T')[0];
            const endDateStr = endDate.toISOString().split('T')[0];
            let filteredTransactions = transactions.filter({
                "useCashTransactions.useCallback[getDateRangeSummary].filteredTransactions": (t)=>{
                    const transactionDateStr = t.date.toISOString().split('T')[0];
                    return transactionDateStr >= startDateStr && transactionDateStr <= endDateStr;
                }
            }["useCashTransactions.useCallback[getDateRangeSummary].filteredTransactions"]);
            if (accountId) {
                filteredTransactions = filteredTransactions.filter({
                    "useCashTransactions.useCallback[getDateRangeSummary]": (t)=>t.accountId === accountId
                }["useCashTransactions.useCallback[getDateRangeSummary]"]);
            }
            const cashIn = filteredTransactions.filter({
                "useCashTransactions.useCallback[getDateRangeSummary].cashIn": (t)=>t.transactionType === 'cash_in' || t.transactionType === 'transfer_in'
            }["useCashTransactions.useCallback[getDateRangeSummary].cashIn"]).reduce({
                "useCashTransactions.useCallback[getDateRangeSummary].cashIn": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDateRangeSummary].cashIn"], 0);
            const cashOut = filteredTransactions.filter({
                "useCashTransactions.useCallback[getDateRangeSummary].cashOut": (t)=>t.transactionType === 'cash_out' || t.transactionType === 'transfer_out'
            }["useCashTransactions.useCallback[getDateRangeSummary].cashOut"]).reduce({
                "useCashTransactions.useCallback[getDateRangeSummary].cashOut": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDateRangeSummary].cashOut"], 0);
            const transfersIn = filteredTransactions.filter({
                "useCashTransactions.useCallback[getDateRangeSummary].transfersIn": (t)=>t.transactionType === 'transfer_in'
            }["useCashTransactions.useCallback[getDateRangeSummary].transfersIn"]).reduce({
                "useCashTransactions.useCallback[getDateRangeSummary].transfersIn": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDateRangeSummary].transfersIn"], 0);
            const transfersOut = filteredTransactions.filter({
                "useCashTransactions.useCallback[getDateRangeSummary].transfersOut": (t)=>t.transactionType === 'transfer_out'
            }["useCashTransactions.useCallback[getDateRangeSummary].transfersOut"]).reduce({
                "useCashTransactions.useCallback[getDateRangeSummary].transfersOut": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDateRangeSummary].transfersOut"], 0);
            const dayBeforeStart = new Date(startDate);
            dayBeforeStart.setDate(dayBeforeStart.getDate() - 1);
            const dayBeforeStartStr = dayBeforeStart.toISOString().split('T')[0];
            let transactionsBeforeRange = transactions.filter({
                "useCashTransactions.useCallback[getDateRangeSummary].transactionsBeforeRange": (t)=>t.date.toISOString().split('T')[0] <= dayBeforeStartStr
            }["useCashTransactions.useCallback[getDateRangeSummary].transactionsBeforeRange"]);
            if (accountId) {
                transactionsBeforeRange = transactionsBeforeRange.filter({
                    "useCashTransactions.useCallback[getDateRangeSummary]": (t)=>t.accountId === accountId
                }["useCashTransactions.useCallback[getDateRangeSummary]"]);
            }
            const cashInBeforeRange = transactionsBeforeRange.filter({
                "useCashTransactions.useCallback[getDateRangeSummary].cashInBeforeRange": (t)=>t.transactionType === 'cash_in' || t.transactionType === 'transfer_in'
            }["useCashTransactions.useCallback[getDateRangeSummary].cashInBeforeRange"]).reduce({
                "useCashTransactions.useCallback[getDateRangeSummary].cashInBeforeRange": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDateRangeSummary].cashInBeforeRange"], 0);
            const cashOutBeforeRange = transactionsBeforeRange.filter({
                "useCashTransactions.useCallback[getDateRangeSummary].cashOutBeforeRange": (t)=>t.transactionType === 'cash_out' || t.transactionType === 'transfer_out'
            }["useCashTransactions.useCallback[getDateRangeSummary].cashOutBeforeRange"]).reduce({
                "useCashTransactions.useCallback[getDateRangeSummary].cashOutBeforeRange": (sum, t)=>sum + t.amount
            }["useCashTransactions.useCallback[getDateRangeSummary].cashOutBeforeRange"], 0);
            let accountOpeningBalance = 0;
            if (accountId) {
                accountOpeningBalance = await getAccountOpeningBalance(accountId);
            }
            const openingBalance = accountOpeningBalance + cashInBeforeRange - cashOutBeforeRange;
            const closingBalance = openingBalance + cashIn - cashOut;
            return {
                date: startDate,
                openingBalance,
                cashIn,
                cashOut,
                transfersIn,
                transfersOut,
                closingBalance
            };
        }
    }["useCashTransactions.useCallback[getDateRangeSummary]"], [
        transactions,
        getAccountOpeningBalance
    ]);
    const refreshTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactions.useCallback[refreshTransactions]": ()=>{
            queryClient.invalidateQueries({
                queryKey
            });
        }
    }["useCashTransactions.useCallback[refreshTransactions]"], [
        queryClient,
        queryKey
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCashTransactions.useMemo": ()=>({
                transactions,
                isLoading,
                createTransaction,
                createBulkTransactions,
                updateTransaction,
                deleteTransaction,
                getDailySummary,
                getDateRangeSummary,
                refreshTransactions
            })
    }["useCashTransactions.useMemo"], [
        transactions,
        isLoading,
        createTransaction,
        createBulkTransactions,
        updateTransaction,
        deleteTransaction,
        getDailySummary,
        getDateRangeSummary,
        refreshTransactions
    ]);
};
_s(useCashTransactions, "edPIuxnnRNMK1jacF+U0OYUU6yU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCashTransactionOperations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCashTransactionOperations",
    ()=>useCashTransactionOperations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashTransactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCashTransactions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$15d212__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:15d212 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useCashTransactionOperations = ()=>{
    _s();
    const { createTransaction: createCashTransaction, updateTransaction: updateCashTransaction, deleteTransaction: deleteCashTransaction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashTransactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashTransactions"])();
    const createCashTransactionForSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactionOperations.useCallback[createCashTransactionForSale]": async (sale, amount, linkToCash, selectedCashAccountId, selectedDate, paymentStatus)=>{
            if (!linkToCash || !selectedCashAccountId || paymentStatus !== 'Paid') {
                return null;
            }
            try {
                const description = `Sale to ${sale.customerName || sale.customer_name || 'Customer'} - Receipt #${sale.receiptNumber || sale.receipt_number || 'N/A'}`;
                const cashTransaction = await createCashTransaction({
                    accountId: selectedCashAccountId,
                    amount: amount,
                    transactionType: 'cash_in',
                    category: 'Cash sale',
                    description: description,
                    date: selectedDate,
                    personInCharge: '',
                    tags: [],
                    paymentMethod: '',
                    receiptImage: ''
                });
                return cashTransaction?.id || null;
            } catch (error) {
                console.error('Error creating cash transaction:', error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to create cash transaction');
                return null;
            }
        }
    }["useCashTransactionOperations.useCallback[createCashTransactionForSale]"], [
        createCashTransaction
    ]);
    const updateCashTransactionForSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactionOperations.useCallback[updateCashTransactionForSale]": async (sale, amount, cashTransactionId, originalPaymentStatus, paymentStatus, linkToCash, selectedCashAccountId, selectedDate)=>{
            try {
                const description = `Sale to ${sale.customerName || sale.customer_name || 'Customer'} - Receipt #${sale.receiptNumber || sale.receipt_number || 'N/A'}`;
                const validCashAccountId = selectedCashAccountId && selectedCashAccountId.trim() !== '';
                if (!cashTransactionId && linkToCash && paymentStatus === 'Paid' && validCashAccountId) {
                    const cashTransaction = await createCashTransaction({
                        accountId: selectedCashAccountId,
                        amount: amount,
                        transactionType: 'cash_in',
                        category: 'Cash sale',
                        description: description,
                        date: selectedDate,
                        personInCharge: '',
                        tags: [],
                        paymentMethod: '',
                        receiptImage: ''
                    });
                    return cashTransaction?.id || null;
                }
                if (!cashTransactionId) {
                    return null;
                }
                if (originalPaymentStatus === 'Paid' && paymentStatus === 'Installment Sale') {
                    await deleteCashTransaction(cashTransactionId);
                    return null;
                }
                if (linkToCash && paymentStatus === 'Paid' && validCashAccountId) {
                    await updateCashTransaction(cashTransactionId, {
                        amount: amount,
                        category: 'Cash sale',
                        description: description,
                        date: selectedDate
                    });
                    return cashTransactionId;
                } else {
                    await deleteCashTransaction(cashTransactionId);
                    return null;
                }
            } catch (error) {
                console.error('Error updating cash transaction:', error);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to update cash transaction');
                return cashTransactionId;
            }
        }
    }["useCashTransactionOperations.useCallback[updateCashTransactionForSale]"], [
        createCashTransaction,
        updateCashTransaction,
        deleteCashTransaction
    ]);
    const createInstallmentPaymentWithCash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactionOperations.useCallback[createInstallmentPaymentWithCash]": async (saleId, amount, saleDescription, linkToCash, selectedCashAccountId, locationId, createInstallmentPayment)=>{
            if (amount <= 0) {
                return null;
            }
            if (!linkToCash || !selectedCashAccountId) {
                return await createInstallmentPayment({
                    saleId,
                    amount
                });
            }
            return await createInstallmentPayment({
                saleId,
                amount,
                accountId: selectedCashAccountId,
                locationId,
                date: new Date()
            });
        }
    }["useCashTransactionOperations.useCallback[createInstallmentPaymentWithCash]"], []);
    const findCashTransactionForSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactionOperations.useCallback[findCashTransactionForSale]": async (cashTransactionId)=>{
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$15d212__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["findCashTransactionAction"])(cashTransactionId);
                if (result.success && result.data) {
                    return result.data.accountId;
                }
            } catch (error) {
                console.error('Error finding cash transaction:', error);
            }
            return null;
        }
    }["useCashTransactionOperations.useCallback[findCashTransactionForSale]"], []);
    return {
        createCashTransactionForSale,
        updateCashTransactionForSale,
        createInstallmentPaymentWithCash,
        findCashTransactionForSale
    };
};
_s(useCashTransactionOperations, "rhUtTK3eRBGAGoCmt+xeCVHpQOk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashTransactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashTransactions"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useStockHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStockHistory",
    ()=>useStockHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$98f618__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:98f618 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cd63f5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:cd63f5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fce372__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:fce372 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$22803a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:22803a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$82ad24__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:82ad24 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$2e5734__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:2e5734 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1ee1ea__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:1ee1ea [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
const useStockHistory = (userId, productId)=>{
    _s();
    const [stockHistory, setStockHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const loadStockHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStockHistory.useCallback[loadStockHistory]": async ()=>{
            if (!userId || !currentBusiness) {
                setStockHistory([]);
                setIsLoading(false);
                return;
            }
            try {
                setIsLoading(true);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$98f618__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getStockHistoryAction"])(currentBusiness.id, productId);
                if (!result.success || !result.data) {
                    throw new Error(result.error || 'Failed to fetch stock history');
                }
                const formattedHistory = result.data.map({
                    "useStockHistory.useCallback[loadStockHistory].formattedHistory": (entry)=>({
                            id: entry.id,
                            productId: entry.productId,
                            oldQuantity: entry.oldQuantity,
                            newQuantity: entry.newQuantity,
                            changeReason: entry.changeReason,
                            createdAt: new Date(entry.createdAt),
                            referenceId: entry.referenceId,
                            receiptNumber: entry.receiptNumber,
                            product: entry.product
                        })
                }["useStockHistory.useCallback[loadStockHistory].formattedHistory"]);
                setStockHistory(formattedHistory);
            } catch (error) {
                console.error('Error loading stock history:', error);
            } finally{
                setIsLoading(false);
            }
        }
    }["useStockHistory.useCallback[loadStockHistory]"], [
        userId,
        currentBusiness?.id,
        productId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStockHistory.useEffect": ()=>{
            loadStockHistory();
        }
    }["useStockHistory.useEffect"], [
        loadStockHistory
    ]);
    const createStockHistoryEntry = async (targetProductId, previousQuantity, newQuantity, reason, referenceId, entryDate, receiptNumber, productName)=>{
        try {
            if (!userId || !currentBusiness) return false;
            const snapshottedReason = productName ? `[${productName}] | ${reason}` : reason;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cd63f5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createStockHistoryAction"])({
                userId,
                locationId: currentBusiness.id,
                productId: targetProductId,
                previousQuantity,
                newQuantity,
                changeReason: snapshottedReason,
                referenceId,
                receiptNumber,
                createdAt: entryDate?.toISOString()
            });
            if (!result.success) {
                console.error('Error creating stock history entry:', result.error);
                return false;
            }
            await loadStockHistory();
            return true;
        } catch (error) {
            console.error('Error creating stock history:', error);
            return false;
        }
    };
    const deleteMultipleStockHistoryEntriesByReference = async (referenceId)=>{
        try {
            if (!currentBusiness) return false;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$22803a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteStockHistoryEntriesByReferenceAction"])(referenceId, currentBusiness.id);
            if (!result.success) throw new Error(result.error);
            await loadStockHistory();
            return true;
        } catch (error) {
            console.error('Error deleting stock history entries:', error);
            return false;
        }
    };
    const recalculateStockChain = async (targetProductId)=>{
        try {
            if (!currentBusiness) return false;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fce372__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["recalculateStockChainAction"])(targetProductId, currentBusiness.id);
            if (!result.success) throw new Error(result.error);
            await loadStockHistory();
            return true;
        } catch (error) {
            console.error('Error recalculating stock chain:', error);
            return false;
        }
    };
    const updateStockHistoryDatesBySaleId = async (saleId, newDate)=>{
        try {
            if (!currentBusiness) return false;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$82ad24__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateStockHistoryDatesByReferenceAction"])(saleId, currentBusiness.id, newDate.toISOString());
            if (!result.success) throw new Error(result.error);
            await loadStockHistory();
            return true;
        } catch (error) {
            console.error('Error updating stock history dates:', error);
            return false;
        }
    };
    const repairAllStockChains = async (progressCallback)=>{
        try {
            if (!currentBusiness) return {
                repaired: 0,
                failed: 0
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$2e5734__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["repairStockChainsAction"])(currentBusiness.id);
            if (result.success && result.data) return result.data;
            return {
                repaired: 0,
                failed: 0
            };
        } catch (error) {
            console.error('Error repairing all chains:', error);
            return {
                repaired: 0,
                failed: 0
            };
        }
    };
    const previewStockChainRepairs = async (progressCallback)=>{
        try {
            if (!currentBusiness) return [];
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1ee1ea__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getStockRepairsPreviewAction"])(currentBusiness.id);
            if (result.success && result.data) return result.data;
            return [];
        } catch (error) {
            console.error('Error previewing repairs:', error);
            return [];
        }
    };
    return {
        stockHistory,
        isLoading,
        createStockHistoryEntry,
        deleteMultipleStockHistoryEntriesByReference,
        recalculateStockChain,
        updateStockHistoryDatesBySaleId,
        repairAllStockChains,
        previewStockChainRepairs,
        refreshHistory: loadStockHistory
    };
};
_s(useStockHistory, "cWkjzLfORVpFCicsVT0W9a9vRaA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMessages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMessages",
    ()=>useMessages
]);
// hooks/useMessages.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$2e41f4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:2e41f4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b32e85__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b32e85 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$368d09__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:368d09 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$51785e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:51785e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1d475a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:1d475a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b058f3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b058f3 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const formatPhoneNumber = (phone)=>{
    let cleaned = phone.replace(/[\s\-\(\)]/g, '');
    if (cleaned.startsWith('+')) return cleaned;
    if (cleaned.startsWith('256')) return '+' + cleaned;
    if (cleaned.startsWith('0')) return '+256' + cleaned.substring(1);
    if (cleaned.length === 9 && cleaned.match(/^[7]\d{8}$/)) return '+256' + cleaned;
    return '+256' + cleaned;
};
const useMessages = (userId)=>{
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [purchases, setPurchases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [liveCredits, setLiveCredits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { currentProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const fetchLiveCredits = async ()=>{
        // In our new system, credits might be on the user or profile model
        // but for now we simplify by using currentProfile state if it's already refactored
        if (currentProfile?.sms_credits !== undefined) {
            setLiveCredits(currentProfile.sms_credits);
        }
    };
    const createTemplate = async (templateData)=>{
        if (!userId || !currentBusiness?.id) return null;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$51785e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createMessageTemplateAction"])({
                userId,
                locationId: currentBusiness.id,
                name: templateData.name,
                content: templateData.content,
                category: templateData.category,
                variables: templateData.variables,
                isDefault: templateData.isDefault
            });
            if (result.success && result.data) {
                fetchTemplates();
                return result.data;
            }
            throw new Error(result.error);
        } catch (error) {
            console.error('Error creating template:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Error',
                description: 'Failed to create template',
                variant: 'destructive'
            });
            return null;
        }
    };
    const updateTemplate = async (id, updates)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1d475a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateMessageTemplateAction"])(id, updates);
            if (result.success) {
                fetchTemplates();
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error updating template:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Error',
                description: 'Failed to update template',
                variant: 'destructive'
            });
        }
    };
    const deleteTemplate = async (id)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b058f3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteMessageTemplateAction"])(id);
            if (result.success) {
                setTemplates((prev)=>prev.filter((t)=>t.id !== id));
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error deleting template:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Error',
                description: 'Failed to delete template',
                variant: 'destructive'
            });
        }
    };
    const fetchMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessages.useCallback[fetchMessages]": async ()=>{
            if (!userId || !currentBusiness?.id) return [];
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$2e41f4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getMessagesAction"])(userId, currentBusiness.id);
                if (result.success && result.data) {
                    return result.data;
                }
                return [];
            } catch (error) {
                console.error('Error fetching messages:', error);
                return [];
            }
        }
    }["useMessages.useCallback[fetchMessages]"], [
        userId,
        currentBusiness?.id
    ]);
    const messagesQueryKey = [
        'messages',
        userId,
        currentBusiness?.id
    ];
    const { data: queriedMessages, isLoading: messagesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: messagesQueryKey,
        queryFn: fetchMessages,
        enabled: !!userId && !!currentBusiness?.id
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMessages.useEffect": ()=>{
            if (queriedMessages) setMessages(queriedMessages);
        }
    }["useMessages.useEffect"], [
        queriedMessages
    ]);
    const fetchTemplates = async ()=>{
        if (!userId || !currentBusiness?.id) return;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$368d09__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getMessageTemplatesAction"])(userId, currentBusiness.id);
            if (result.success && result.data) {
                setTemplates(result.data);
            }
        } catch (error) {
            console.error('Error fetching templates:', error);
        }
    };
    const fetchPurchases = async ()=>{
        // Placeholder - implement when billing is migrated
        setPurchases([]);
    };
    const createMessage = async (messageData)=>{
        if (!userId || !currentBusiness?.id || !currentProfile) return null;
        const formattedPhone = formatPhoneNumber(messageData.phoneNumber);
        const creditsNeeded = Math.ceil(messageData.content.length / 160);
        // Basic credit check before calling action
        if (currentProfile.sms_credits < creditsNeeded) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Error',
                description: 'Insufficient credits',
                variant: 'destructive'
            });
            return null;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b32e85__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createMessageAction"])({
                userId,
                locationId: currentBusiness.id,
                profileId: currentProfile.id,
                customerId: messageData.customerId,
                phoneNumber: formattedPhone,
                content: messageData.content,
                templateId: messageData.templateId,
                smsCreditsUsed: creditsNeeded,
                status: 'sent',
                metadata: messageData.metadata
            });
            if (result.success && result.data) {
                const newMessage = {
                    ...result.data,
                    createdAt: result.data.createdAt.toISOString()
                };
                setMessages((prev)=>[
                        newMessage,
                        ...prev
                    ]);
                queryClient.invalidateQueries({
                    queryKey: messagesQueryKey
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Success',
                    description: 'Message sent successfully'
                });
                return newMessage;
            }
            throw new Error(result.error);
        } catch (error) {
            console.error('Error sending message:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Error',
                description: 'Failed to send message',
                variant: 'destructive'
            });
            return null;
        }
    };
    const createBulkMessages = async (messageData)=>{
        // Simplified bulk implementation for now
        let successCount = 0;
        for (const customerId of messageData.customerIds){
            // In a real app we'd fetch the customer phone first
            // But for this migration, we are just proving the Prisma works
            successCount++;
        }
        return {
            success: successCount,
            failed: 0,
            errors: []
        };
    };
    const initiateCreditPurchase = async (creditsAmount, phoneNumber)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
            title: 'Info',
            description: 'Credit purchase migration in progress'
        });
        return null;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMessages.useEffect": ()=>{
            if (userId && currentBusiness?.id) {
                fetchTemplates();
                fetchPurchases();
                fetchLiveCredits();
            }
        }
    }["useMessages.useEffect"], [
        userId,
        currentBusiness?.id,
        currentProfile?.id
    ]);
    const isLoading = messagesLoading && !queriedMessages;
    const getMessageStats = ()=>{
        const total = messages.length;
        const sent = messages.filter((m)=>m.status === 'sent' || m.status === 'delivered').length;
        const failed = messages.filter((m)=>m.status === 'failed').length;
        const pending = messages.filter((m)=>m.status === 'pending').length;
        const totalCreditsUsed = messages.reduce((sum, m)=>sum + m.smsCreditsUsed, 0);
        return {
            total,
            sent,
            failed,
            pending,
            totalCreditsUsed,
            creditsRemaining: liveCredits
        };
    };
    return {
        messages,
        templates,
        purchases,
        liveCredits,
        isLoading,
        createMessage,
        createBulkMessages,
        createTemplate,
        updateTemplate,
        deleteTemplate,
        getMessageStats,
        initiateCreditPurchase,
        refresh: ()=>{
            queryClient.invalidateQueries({
                queryKey: messagesQueryKey
            });
            fetchTemplates();
            fetchPurchases();
            fetchLiveCredits();
        }
    };
};
_s(useMessages, "QRX7wPlDiIxgs9uMTjcdeCx5jEU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCustomerCategories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomerCategories",
    ()=>useCustomerCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1fc0cb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:1fc0cb [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3d76f2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:3d76f2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c26fcb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:c26fcb [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9029cb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:9029cb [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const useCustomerCategories = ()=>{
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const fetchCategories = async ()=>{
        if (!currentBusiness) {
            setCategories([]);
            setIsLoading(false);
            return;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1fc0cb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCustomerCategoriesAction"])(currentBusiness.id);
            if (result.success && result.data) {
                setCategories(result.data);
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error fetching customer categories:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to fetch customer categories",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCustomerCategories.useEffect": ()=>{
            fetchCategories();
        }
    }["useCustomerCategories.useEffect"], [
        currentBusiness
    ]);
    const createCategory = async (name)=>{
        if (!currentBusiness || !user) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "No business selected or user not authenticated",
                variant: "destructive"
            });
            return false;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3d76f2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCustomerCategoryAction"])(currentBusiness.id, user.id, name);
            if (result.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Success",
                    description: "Customer category created successfully"
                });
                fetchCategories();
                return true;
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error creating customer category:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to create customer category",
                variant: "destructive"
            });
            return false;
        }
    };
    const updateCategory = async (id, name)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c26fcb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCustomerCategoryAction"])(id, name);
            if (result.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Success",
                    description: "Customer category updated successfully"
                });
                fetchCategories();
                return true;
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error updating customer category:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to update customer category",
                variant: "destructive"
            });
            return false;
        }
    };
    const deleteCategory = async (id)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9029cb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCustomerCategoryAction"])(id);
            if (result.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Success",
                    description: "Customer category deleted successfully"
                });
                fetchCategories();
                return true;
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error deleting customer category:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to delete customer category",
                variant: "destructive"
            });
            return false;
        }
    };
    return {
        categories,
        isLoading,
        createCategory,
        updateCategory,
        deleteCategory,
        refetch: fetchCategories
    };
};
_s(useCustomerCategories, "mxlFfzK1WTQZdZdY1k074wHAhgA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useFinancialVisibility.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFinancialVisibility",
    ()=>useFinancialVisibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useFinancialVisibility = ()=>{
    _s();
    const { hasPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const canViewCostPrice = hasPermission('inventory', 'view_cost_price');
    const canViewProfit = hasPermission('inventory', 'view_profit');
    const canViewSellingPrice = hasPermission('inventory', 'view_selling_price');
    // Dashboard-specific permissions
    const canViewTotalSales = hasPermission('dashboard', 'view_total_sales');
    const canViewTotalGrossProfit = hasPermission('dashboard', 'view_gross_profit');
    const canViewTotalExpenses = hasPermission('dashboard', 'view_total_expenses');
    const canViewInventoryValue = hasPermission('dashboard', 'view_inventory_value');
    const canViewSalesTypes = hasPermission('dashboard', 'view_sales_types');
    const canViewAvgPrice = hasPermission('dashboard', 'view_avg_price');
    const canViewTotalAmount = hasPermission('dashboard', 'view_total_amount');
    // Finance and Expenses permissions
    const canManageFinanceAccounts = hasPermission('finance', 'manage_accounts');
    const canViewFinance = hasPermission('finance', 'view');
    const canViewExpenses = hasPermission('expenses', 'view');
    const canCreateExpenses = hasPermission('expenses', 'create');
    const canEditExpenses = hasPermission('expenses', 'edit');
    const canDeleteExpenses = hasPermission('expenses', 'delete');
    /**
     * Format a financial value or return a hidden indicator
     */ const formatFinancial = (value, type)=>{
        const hasAccess = type === 'cost' && canViewCostPrice || type === 'selling' && canViewSellingPrice || type === 'profit' && canViewProfit;
        if (!hasAccess) {
            return '•••';
        }
        return value?.toLocaleString() || '0';
    };
    return {
        canViewCostPrice,
        canViewProfit,
        canViewSellingPrice,
        canViewTotalSales,
        canViewTotalGrossProfit,
        canViewTotalExpenses,
        canViewInventoryValue,
        canViewSalesTypes,
        canViewAvgPrice,
        canViewTotalAmount,
        canManageFinanceAccounts,
        canViewFinance,
        canViewExpenses,
        canCreateExpenses,
        canEditExpenses,
        canDeleteExpenses,
        formatFinancial
    };
};
_s(useFinancialVisibility, "v8grbxV0CF/Dy9QLi6cpiHti2GU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSalesCategories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSalesCategories",
    ()=>useSalesCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ff6a3d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:ff6a3d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9d1369__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:9d1369 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3c8036__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:3c8036 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f33dfa__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f33dfa [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const useSalesCategories = ()=>{
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const fetchCategories = async ()=>{
        if (!currentBusiness) {
            setCategories([]);
            setIsLoading(false);
            return;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ff6a3d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getSalesCategoriesAction"])(currentBusiness.id);
            if (result.success && result.data) {
                setCategories(result.data);
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error fetching sales categories:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to fetch sales categories",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSalesCategories.useEffect": ()=>{
            fetchCategories();
        }
    }["useSalesCategories.useEffect"], [
        currentBusiness
    ]);
    const createCategory = async (name)=>{
        if (!currentBusiness || !user) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "No business selected or user not authenticated",
                variant: "destructive"
            });
            return false;
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9d1369__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createSalesCategoryAction"])(currentBusiness.id, user.id, name);
            if (result.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Success",
                    description: "Sales category created successfully"
                });
                fetchCategories();
                return true;
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error creating sales category:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to create sales category",
                variant: "destructive"
            });
            return false;
        }
    };
    const updateCategory = async (id, name)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3c8036__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateSalesCategoryAction"])(id, name);
            if (result.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Success",
                    description: "Sales category updated successfully"
                });
                fetchCategories();
                return true;
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error updating sales category:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to update sales category",
                variant: "destructive"
            });
            return false;
        }
    };
    const deleteCategory = async (id)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f33dfa__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteSalesCategoryAction"])(id);
            if (result.success) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Success",
                    description: "Sales category deleted successfully"
                });
                fetchCategories();
                return true;
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error deleting sales category:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Failed to delete sales category",
                variant: "destructive"
            });
            return false;
        }
    };
    const createDefaultCategories = async ()=>{
        if (!currentBusiness || !user) return;
        const defaultCategories = [
            'Retail',
            'Online',
            'Wholesale'
        ];
        try {
            for (const name of defaultCategories){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9d1369__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createSalesCategoryAction"])(currentBusiness.id, user.id, name, true);
            }
            fetchCategories();
        } catch (error) {
            console.error('Error creating default categories:', error);
        }
    };
    return {
        categories,
        isLoading,
        createCategory,
        updateCategory,
        deleteCategory,
        createDefaultCategories,
        refetch: fetchCategories
    };
};
_s(useSalesCategories, "mxlFfzK1WTQZdZdY1k074wHAhgA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_hooks_3ca9b5d0._.js.map