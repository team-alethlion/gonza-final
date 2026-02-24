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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6d0100__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:6d0100 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$01c0b4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:01c0b4 [app-client] (ecmascript) <text/javascript>");
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
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6d0100__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBusinessSettingsAction"])(currentBusiness.id);
            if (data) {
                // Extract payment info from metadata
                const paymentInfo = data.metadata && typeof data.metadata === 'object' ? data.metadata.payment_info || '' : '';
                return {
                    id: data.id,
                    businessName: data.business_name,
                    businessAddress: data.business_address,
                    businessPhone: data.business_phone,
                    businessEmail: data.business_email,
                    businessLogo: data.business_logo,
                    currency: data.currency,
                    signature: data.signature,
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
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$01c0b4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["upsertBusinessSettingsAction"])(currentBusiness.id, userData.user.id, updateData);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useCurrentUser = ()=>{
    _s();
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // Get current user with faster initial check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCurrentUser.useEffect": ()=>{
            const getCurrentUser = {
                "useCurrentUser.useEffect.getCurrentUser": async ()=>{
                    try {
                        // Try to get user from session first (faster)
                        const { data: sessionData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                        if (sessionData.session?.user) {
                            setUserId(sessionData.session.user.id);
                            return;
                        }
                        // Fallback to getUser if no session
                        const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                        setUserId(userData.user?.id);
                    } catch (error) {
                        console.error('Error getting user:', error);
                        setUserId(undefined);
                    }
                }
            }["useCurrentUser.useEffect.getCurrentUser"];
            getCurrentUser();
        }
    }["useCurrentUser.useEffect"], []);
    return {
        userId
    };
};
_s(useCurrentUser, "NIeo4QqhSfMY046n86zDe+Clp8A=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('activity_history').insert({
                user_id: userId,
                location_id: currentBusiness.id,
                activity_type: data.activityType,
                module: data.module,
                entity_type: data.entityType,
                entity_id: data.entityId || null,
                entity_name: data.entityName,
                description: data.description,
                metadata: data.metadata || null,
                profile_id: currentProfile?.id || null,
                profile_name: currentProfile?.profile_name || null
            });
            if (error) {
                console.error('Error logging activity:', error);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$4ba2de__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:4ba2de [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$464e4e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:464e4e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fa2d0d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:fa2d0d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$213b58__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:213b58 [app-client] (ecmascript) <text/javascript>");
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$4ba2de__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCustomersAction"])(currentBusiness.id);
                if (!result.success) {
                    throw new Error(result.error);
                }
                const formattedCustomers = (result.data?.customers || []).map({
                    "useCustomers.useCallback[loadCustomers].formattedCustomers": (customer)=>({
                            id: customer.id,
                            fullName: customer.fullName,
                            phoneNumber: customer.phoneNumber,
                            email: customer.email,
                            birthday: customer.birthday ? new Date(customer.birthday) : null,
                            gender: customer.gender,
                            location: customer.location,
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$464e4e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCustomerAction"])(currentBusiness.id, user.id, insertData);
            if (!result.success || !result.data) {
                throw new Error(result.error || 'Failed to create customer');
            }
            const data = result.data;
            // Format the new customer and update cache immediately
            const newCustomer = {
                id: data.id,
                fullName: data.fullName,
                phoneNumber: data.phoneNumber,
                email: data.email,
                birthday: data.birthday ? new Date(data.birthday) : null,
                gender: data.gender,
                location: data.location,
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fa2d0d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCustomerAction"])(id, updateData);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$213b58__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCustomerAction"])(id);
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
"[project]/src/hooks/useStockHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStockHistory",
    ()=>useStockHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useStockHistory = (userId, productId)=>{
    _s();
    const [stockHistory, setStockHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    // Memoize the load function to prevent infinite re-renders
    const loadStockHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStockHistory.useCallback[loadStockHistory]": async ()=>{
            if (!userId || !currentBusiness) {
                setStockHistory([]);
                setIsLoading(false);
                return;
            }
            try {
                setIsLoading(true);
                // Fetch all stock history without any limits
                // We'll implement a recursive fetch to get all records
                let allData = [];
                let hasMore = true;
                let offset = 0;
                const batchSize = 1000; // Fetch in smaller, more manageable batches
                while(hasMore){
                    let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*, products(name, cost_price, selling_price, item_number)').eq('location_id', currentBusiness.id).order('created_at', {
                        ascending: true
                    }).order('id', {
                        ascending: true
                    }).range(offset, offset + batchSize - 1);
                    // If productId is provided, filter by it
                    if (productId) {
                        query = query.eq('product_id', productId);
                    }
                    const { data: batchData, error: batchError } = await query;
                    if (batchError) {
                        throw batchError;
                    }
                    if (batchData && batchData.length > 0) {
                        allData = [
                            ...allData,
                            ...batchData
                        ];
                        // If we got less than the batch size, we've reached the end
                        if (batchData.length < batchSize) {
                            hasMore = false;
                        } else {
                            offset += batchSize;
                        }
                    } else {
                        hasMore = false;
                    }
                }
                const data = allData;
                // Remove the individual query as it's now handled in the batch loop above
                const error = null; // No error if we reached this point
                if (error) {
                    throw error;
                }
                if (data) {
                    const formattedHistory = data.map({
                        "useStockHistory.useCallback[loadStockHistory].formattedHistory": (entry)=>{
                            const productData = entry.products;
                            return {
                                id: entry.id,
                                productId: entry.product_id,
                                oldQuantity: entry.previous_quantity,
                                newQuantity: entry.new_quantity,
                                changeReason: entry.change_reason,
                                createdAt: new Date(entry.created_at),
                                referenceId: entry.reference_id,
                                receiptNumber: entry.receipt_number,
                                product: productData ? {
                                    name: productData.name,
                                    costPrice: productData.cost_price,
                                    sellingPrice: productData.selling_price,
                                    itemNumber: productData.item_number
                                } : undefined
                            };
                        }
                    }["useStockHistory.useCallback[loadStockHistory].formattedHistory"]);
                    // Reverse for display (newest first for UI)
                    setStockHistory(formattedHistory.reverse());
                }
            } catch (error) {
                console.error('Error loading stock history:', error);
            } finally{
                setIsLoading(false);
            }
        }
    }["useStockHistory.useCallback[loadStockHistory]"], [
        userId,
        currentBusiness,
        productId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStockHistory.useEffect": ()=>{
            loadStockHistory();
        }
    }["useStockHistory.useEffect"], [
        loadStockHistory
    ]);
    // Create stock history entry with standardized reasons and recalculate stock chain
    const createStockHistoryEntry = async (productId, previousQuantity, newQuantity, reason, referenceId, entryDate, receiptNumber, productName)=>{
        console.log('📝 createStockHistoryEntry CALLED', {
            productId,
            productName,
            prevQty: previousQuantity,
            newQty: newQuantity,
            reason,
            refId: referenceId,
            receipt: receiptNumber,
            entryDate: entryDate?.toISOString(),
            stack: new Error().stack
        });
        try {
            if (!userId || !currentBusiness) return false;
            // Prefix reason with product name for future retrieval if product is deleted
            const snapshottedReason = productName ? `[${productName}] | ${reason}` : reason;
            const insertData = {
                user_id: userId,
                product_id: productId,
                previous_quantity: previousQuantity,
                new_quantity: newQuantity,
                change_reason: snapshottedReason,
                reference_id: referenceId,
                receipt_number: receiptNumber,
                location_id: currentBusiness.id
            };
            // ONLY use explicit date if provided AND it includes a real time component
            // Otherwise let database use now() to avoid midnight UTC issues (which show as 3:00 AM in EAT)
            if (entryDate) {
                const hours = entryDate.getHours();
                const minutes = entryDate.getMinutes();
                const seconds = entryDate.getSeconds();
                // Skip midnight (00:00:00) - this is from date pickers, let DB use now() instead
                // Also skip noon (12:00:00) from our date picker fix - let DB use now()
                const isMidnight = hours === 0 && minutes === 0 && seconds === 0;
                const isNoon = hours === 12 && minutes === 0 && seconds === 0;
                if (!isMidnight && !isNoon) {
                    insertData.created_at = entryDate.toISOString();
                }
            // If it's midnight or noon, don't set created_at - let DB use now() for accurate timestamp
            }
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').insert(insertData);
            if (error) {
                console.error('Error creating stock history entry:', error);
                return false;
            }
            // Chain recalculation disabled to prevent cascading errors
            // Use the Reconciliation tool to fix stock discrepancies instead
            // const recalcSuccess = await recalculateStockChain(productId);
            // Refresh stock history after creating new entry
            await loadStockHistory();
            return true;
        } catch (error) {
            console.error('Error creating stock history:', error);
            return false;
        }
    };
    // Update stock history entry and recalculate all subsequent entries
    const updateStockHistoryEntry = async (entryId, newQuantity, newChangeReason, newDate)=>{
        try {
            if (!userId || !currentBusiness) return false;
            // First, get the current entry to understand the change
            const { data: currentEntry, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').eq('id', entryId).single();
            if (fetchError || !currentEntry) {
                console.error('Error fetching current entry:', fetchError);
                return false;
            }
            // Check if this is the initial stock entry by getting all stock history for this product
            const { data: allStockHistory, error: stockHistoryError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').eq('product_id', currentEntry.product_id).eq('location_id', currentBusiness.id).order('created_at', {
                ascending: true
            }).order('id', {
                ascending: true
            });
            if (stockHistoryError || !allStockHistory) {
                console.error('Error fetching stock history:', stockHistoryError);
                return false;
            }
            const isInitialStock = allStockHistory.length > 0 && allStockHistory[0].id === entryId;
            // Update the current entry
            const updateData = {
                new_quantity: newQuantity,
                change_reason: newChangeReason
            };
            if (newDate) {
                // Use toISOString() to preserve the exact local time without timezone conversion
                updateData.created_at = newDate.toISOString();
            }
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').update(updateData).eq('id', entryId);
            if (updateError) {
                console.error('Error updating stock history entry:', updateError);
                return false;
            }
            // If this is initial stock and date is being updated, also update product creation date
            if (isInitialStock && newDate) {
                const { error: productDateUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').update({
                    created_at: newDate.toISOString()
                }).eq('id', currentEntry.product_id);
                if (productDateUpdateError) {
                    console.error('Error updating product creation date:', productDateUpdateError);
                    return false;
                }
            }
            // Use the already fetched stock history to avoid duplicate queries
            const allHistory = allStockHistory;
            // Find the index of the updated entry
            const updatedEntryIndex = allHistory.findIndex((entry)=>entry.id === entryId);
            if (updatedEntryIndex === -1) return false;
            // Calculate the user's intended change amount for the edited entry
            const userChangeAmount = newQuantity - currentEntry.previous_quantity;
            // Recalculate the entire chain from the beginning
            const updatesToMake = [];
            let runningQuantity = 0; // Start from initial stock of 0
            for(let i = 0; i < allHistory.length; i++){
                const entry = allHistory[i];
                if (i === updatedEntryIndex) {
                    // For the updated entry, preserve the user's intended change amount
                    const newPreviousQuantity = runningQuantity;
                    const newNewQuantity = newPreviousQuantity + userChangeAmount;
                    // Update both previous and new quantities to preserve user's change amount
                    if (entry.previous_quantity !== newPreviousQuantity || entry.new_quantity !== newNewQuantity) {
                        updatesToMake.push({
                            id: entry.id,
                            previous_quantity: newPreviousQuantity,
                            new_quantity: newNewQuantity
                        });
                    }
                    runningQuantity = newNewQuantity;
                } else {
                    // For all other entries, recalculate based on their original change amount
                    const originalChange = entry.new_quantity - entry.previous_quantity;
                    const newPreviousQuantity = runningQuantity;
                    const newNewQuantity = newPreviousQuantity + originalChange;
                    // Only update if values have changed
                    if (entry.previous_quantity !== newPreviousQuantity || entry.new_quantity !== newNewQuantity) {
                        updatesToMake.push({
                            id: entry.id,
                            previous_quantity: newPreviousQuantity,
                            new_quantity: newNewQuantity
                        });
                    }
                    runningQuantity = newNewQuantity;
                }
            }
            // Perform batch updates for all subsequent entries
            if (updatesToMake.length > 0) {
                for (const update of updatesToMake){
                    const { error: batchUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').update({
                        previous_quantity: update.previous_quantity,
                        new_quantity: update.new_quantity
                    }).eq('id', update.id);
                    if (batchUpdateError) {
                        console.error('Error updating subsequent entry:', batchUpdateError);
                    // Continue with other updates even if one fails
                    }
                }
            }
            // Update the final product quantity
            const finalQuantity = runningQuantity;
            const { error: productUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').update({
                quantity: finalQuantity
            }).eq('id', currentEntry.product_id);
            if (productUpdateError) {
                console.error('Error updating product quantity:', productUpdateError);
                return false;
            }
            // Refresh stock history to show updated chain
            await loadStockHistory();
            return true;
        } catch (error) {
            console.error('Error updating stock history:', error);
            return false;
        }
    };
    // Delete multiple stock history entries (for bulk operations like deleting entire invoice)
    const deleteMultipleStockHistoryEntries = async (entryIds)=>{
        try {
            if (!userId || !currentBusiness || entryIds.length === 0) return false;
            // Get all entries to be deleted
            const { data: entriesToDelete, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').in('id', entryIds);
            if (fetchError || !entriesToDelete) {
                console.error('Error fetching entries to delete:', fetchError);
                return false;
            }
            // Group entries by product_id to handle recalculation properly
            const entriesByProduct = entriesToDelete.reduce((acc, entry)=>{
                if (!acc[entry.product_id]) {
                    acc[entry.product_id] = [];
                }
                acc[entry.product_id].push(entry);
                return acc;
            }, {});
            // Delete all entries in a single batch
            const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').delete().in('id', entryIds);
            if (deleteError) {
                console.error('Error deleting stock history entries:', deleteError);
                return false;
            }
            // Re-enable chain recalculation for affected products only.
            // We only recalculate the specific product IDs that were deleted — not all products.
            for (const productId of Object.keys(entriesByProduct)){
                await recalculateStockChain(productId);
            }
            return true;
        } catch (error) {
            console.error('Error deleting multiple stock history entries:', error);
            return false;
        }
    };
    // Delete stock history entry and recalculate all subsequent entries
    const deleteStockHistoryEntry = async (entryId)=>{
        try {
            if (!userId || !currentBusiness) return false;
            // First, get the entry to be deleted
            const { data: entryToDelete, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').eq('id', entryId).single();
            if (fetchError || !entryToDelete) {
                console.error('Error fetching entry to delete:', fetchError);
                return false;
            }
            // Get all stock history for this product in chronological order
            const { data: allHistory, error: historyError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').eq('product_id', entryToDelete.product_id).eq('location_id', currentBusiness.id).order('created_at', {
                ascending: true
            }).order('id', {
                ascending: true
            });
            if (historyError || !allHistory) {
                console.error('Error fetching stock history:', historyError);
                return false;
            }
            // Find the index of the entry to delete
            const deleteIndex = allHistory.findIndex((entry)=>entry.id === entryId);
            if (deleteIndex === -1) return false;
            // Delete the entry
            const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').delete().eq('id', entryId);
            if (deleteError) {
                console.error('Error deleting stock history entry:', deleteError);
                return false;
            }
            // Recalculate all subsequent entries
            const updatesToMake = [];
            // If this was the first entry, the next entry's previous_quantity should be 0
            // If this was a middle entry, the next entry's previous_quantity should be the previous entry's new_quantity
            let newPreviousQuantity = 0;
            if (deleteIndex > 0) {
                newPreviousQuantity = allHistory[deleteIndex - 1].new_quantity;
            }
            // Recalculate all entries after the deleted one
            for(let i = deleteIndex + 1; i < allHistory.length; i++){
                const entry = allHistory[i];
                const originalChange = entry.new_quantity - entry.previous_quantity;
                const newNewQuantity = newPreviousQuantity + originalChange;
                updatesToMake.push({
                    id: entry.id,
                    previous_quantity: newPreviousQuantity,
                    new_quantity: newNewQuantity
                });
                newPreviousQuantity = newNewQuantity;
            }
            // Perform batch updates for all subsequent entries
            if (updatesToMake.length > 0) {
                for (const update of updatesToMake){
                    const { error: batchUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').update({
                        previous_quantity: update.previous_quantity,
                        new_quantity: update.new_quantity
                    }).eq('id', update.id);
                    if (batchUpdateError) {
                        console.error('Error updating subsequent entry:', batchUpdateError);
                    // Continue with other updates even if one fails
                    }
                }
            }
            // Update the final product quantity
            const finalQuantity = updatesToMake.length > 0 ? updatesToMake[updatesToMake.length - 1].new_quantity : deleteIndex > 0 ? allHistory[deleteIndex - 1].new_quantity : 0;
            const { error: productUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').update({
                quantity: finalQuantity
            }).eq('id', entryToDelete.product_id);
            if (productUpdateError) {
                console.error('Error updating product quantity:', productUpdateError);
                return false;
            }
            return true;
        } catch (error) {
            console.error('Error deleting stock history:', error);
            return false;
        }
    };
    // Recalculate the entire stock chain for a product to maintain proper flow
    const recalculateStockChain = async (productId)=>{
        try {
            if (!userId || !currentBusiness) return false;
            // Get all stock history for this product in chronological order
            const { data: allHistory, error: historyError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').eq('product_id', productId).eq('location_id', currentBusiness.id).order('created_at', {
                ascending: true
            }).order('id', {
                ascending: true
            });
            if (historyError || !allHistory) {
                console.error('Error fetching stock history for recalculation:', historyError);
                return false;
            }
            if (allHistory.length === 0) return true;
            // Recalculate the entire chain from the beginning
            const updatesToMake = [];
            let runningQuantity = 0; // Start from initial stock of 0
            for(let i = 0; i < allHistory.length; i++){
                const entry = allHistory[i];
                // Calculate the original change amount for this entry
                const originalChange = entry.new_quantity - entry.previous_quantity;
                // Set the correct previous quantity and recalculated new quantity
                const newPreviousQuantity = runningQuantity;
                const newNewQuantity = newPreviousQuantity + originalChange;
                // Only update if values have changed
                if (entry.previous_quantity !== newPreviousQuantity || entry.new_quantity !== newNewQuantity) {
                    updatesToMake.push({
                        id: entry.id,
                        previous_quantity: newPreviousQuantity,
                        new_quantity: newNewQuantity
                    });
                }
                runningQuantity = newNewQuantity;
            }
            // Perform batch updates for all entries that need updating
            if (updatesToMake.length > 0) {
                for (const update of updatesToMake){
                    const { error: batchUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').update({
                        previous_quantity: update.previous_quantity,
                        new_quantity: update.new_quantity
                    }).eq('id', update.id);
                    if (batchUpdateError) {
                        console.error('Error updating entry during chain recalculation:', batchUpdateError);
                    // Continue with other updates even if one fails
                    }
                }
            }
            // Update the final product quantity
            const finalQuantity = runningQuantity;
            const { error: productUpdateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').update({
                quantity: finalQuantity
            }).eq('id', productId);
            if (productUpdateError) {
                console.error('Error updating product quantity during chain recalculation:', productUpdateError);
                return false;
            }
            return true;
        } catch (error) {
            console.error('Error recalculating stock chain:', error);
            return false;
        }
    };
    // Recalculate product stock based on remaining history
    // Update stock history dates for a specific sale
    const updateStockHistoryDatesBySaleId = async (saleId, newDate)=>{
        try {
            if (!userId || !currentBusiness) {
                console.log('Missing userId or currentBusiness for stock history update');
                return false;
            }
            console.log('Updating stock history dates for sale:', saleId, 'to date:', newDate);
            // Find all stock history entries with this sale as reference_id
            const { data: stockEntries, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').eq('reference_id', saleId).eq('location_id', currentBusiness.id);
            if (fetchError) {
                console.error('Error fetching stock history entries for sale:', fetchError);
                return false;
            }
            console.log('Found stock history entries for sale:', stockEntries?.length || 0);
            if (!stockEntries || stockEntries.length === 0) {
                console.log('No stock entries found for sale:', saleId);
                return true; // No stock entries to update
            }
            // Group entries by product_id to handle recalculation properly
            const entriesByProduct = stockEntries.reduce((acc, entry)=>{
                if (!acc[entry.product_id]) {
                    acc[entry.product_id] = [];
                }
                acc[entry.product_id].push(entry);
                return acc;
            }, {});
            // Update each stock history entry's date
            for (const entry of stockEntries){
                console.log('Updating stock history entry:', entry.id, 'from date:', entry.created_at, 'to:', newDate.toISOString());
                const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').update({
                    created_at: newDate.toISOString()
                }).eq('id', entry.id);
                if (updateError) {
                    console.error('Error updating stock history date:', updateError);
                    return false;
                }
            }
            console.log('Successfully updated', stockEntries.length, 'stock history entries');
            // Re-run chain recalculation for each affected product after date reorder.
            // Date changes can reorder entries in the chain so recalculation is mandatory.
            for (const productId of Object.keys(entriesByProduct)){
                const recalcSuccess = await recalculateStockChain(productId);
                if (!recalcSuccess) {
                    console.error('Failed to recalculate stock chain for product:', productId);
                }
            }
            // Refresh stock history to reflect the updated dates
            await loadStockHistory();
            return true;
        } catch (error) {
            console.error('Error updating stock history dates by sale ID:', error);
            return false;
        }
    };
    const recalculateProductStock = async (productId)=>{
        try {
            if (!userId || !currentBusiness) return null;
            // Get all stock history for this product in chronological order
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').eq('product_id', productId).eq('location_id', currentBusiness.id).order('created_at', {
                ascending: true
            }).order('id', {
                ascending: true
            });
            if (error) {
                console.error('Error fetching stock history for recalculation:', error);
                return null;
            }
            // Calculate final stock quantity from history
            let currentStock = 0;
            if (data && data.length > 0) {
                // Start with the first entry's new quantity
                currentStock = data[0].new_quantity;
                // Process remaining entries sequentially
                for(let i = 1; i < data.length; i++){
                    const entry = data[i];
                    const previousEntry = data[i - 1];
                    // Calculate the change based on the difference
                    const change = entry.new_quantity - entry.previous_quantity;
                    currentStock = previousEntry.new_quantity + change;
                }
                // The final stock is the new_quantity of the last entry
                if (data.length > 0) {
                    currentStock = data[data.length - 1].new_quantity;
                }
            }
            // Update the product's quantity
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').update({
                quantity: currentStock
            }).eq('id', productId);
            if (updateError) {
                console.error('Error updating product quantity:', updateError);
                return null;
            }
            return currentStock;
        } catch (error) {
            console.error('Error recalculating product stock:', error);
            return null;
        }
    };
    /**
   * Dry-run preview: walks every product's stock chain and returns the list of
   * products that have broken chains, with per-product detail.
   * Does NOT write anything to the database.
   */ const previewStockChainRepairs = async (onProgress)=>{
        if (!userId || !currentBusiness) return [];
        // Collect all distinct product IDs in this business's stock history
        let allProductIds = [];
        let offset = 0;
        const batch = 1000;
        let hasMore = true;
        while(hasMore){
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('product_id').eq('location_id', currentBusiness.id).range(offset, offset + batch - 1);
            if (error) {
                console.error('previewStockChainRepairs: error fetching product IDs', error);
                break;
            }
            if (data && data.length > 0) {
                allProductIds.push(...data.map((r)=>r.product_id));
                offset += batch;
                hasMore = data.length === batch;
            } else {
                hasMore = false;
            }
        }
        const uniqueProductIds = [
            ...new Set(allProductIds)
        ];
        const total = uniqueProductIds.length;
        const broken = [];
        for(let i = 0; i < uniqueProductIds.length; i++){
            const productId = uniqueProductIds[i];
            const { data: allHistory, error: historyError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').eq('product_id', productId).eq('location_id', currentBusiness.id).order('created_at', {
                ascending: true
            }).order('id', {
                ascending: true
            });
            if (historyError || !allHistory || allHistory.length === 0) {
                onProgress?.(i + 1, total);
                continue;
            }
            // Fetch product name separately to avoid TS join-resolution issues
            let productName = productId;
            const { data: productRow } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('name').eq('id', productId).maybeSingle();
            if (productRow?.name) productName = productRow.name;
            const brokenEntries = [];
            let runningQuantity = 0;
            for (const entry of allHistory){
                const originalChange = entry.new_quantity - entry.previous_quantity;
                const expectedPrev = runningQuantity;
                const expectedNew = runningQuantity + originalChange;
                if (entry.previous_quantity !== expectedPrev || entry.new_quantity !== expectedNew) {
                    brokenEntries.push({
                        entryId: entry.id,
                        createdAt: entry.created_at,
                        changeReason: entry.change_reason ?? '',
                        currentPrevQty: entry.previous_quantity,
                        currentNewQty: entry.new_quantity,
                        fixedPrevQty: expectedPrev,
                        fixedNewQty: expectedNew
                    });
                }
                runningQuantity = expectedNew;
            }
            if (brokenEntries.length > 0) {
                broken.push({
                    productId,
                    productName,
                    totalEntries: allHistory.length,
                    brokenEntries,
                    finalFixedQty: runningQuantity,
                    currentProductQty: allHistory[allHistory.length - 1].new_quantity
                });
            }
            onProgress?.(i + 1, total);
        }
        return broken;
    };
    /**
   * Repairs all broken stock chains for the current business by iterating
   * every product and re-running recalculateStockChain.
   * Use this to fix historical data corruption caused by past disabled recalculations.
   * Returns { repaired, failed } counts.
   */ const repairAllStockChains = async (onProgress)=>{
        if (!userId || !currentBusiness) return {
            repaired: 0,
            failed: 0
        };
        // Fetch all distinct product IDs that have stock history for this business
        let allProductIds = [];
        let offset = 0;
        const batch = 1000;
        let hasMore = true;
        while(hasMore){
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('product_id').eq('location_id', currentBusiness.id).range(offset, offset + batch - 1);
            if (error) {
                console.error('repairAllStockChains: error fetching product IDs', error);
                break;
            }
            if (data && data.length > 0) {
                allProductIds.push(...data.map((r)=>r.product_id));
                offset += batch;
                hasMore = data.length === batch;
            } else {
                hasMore = false;
            }
        }
        // Deduplicate
        const uniqueProductIds = [
            ...new Set(allProductIds)
        ];
        const total = uniqueProductIds.length;
        let repaired = 0;
        let failed = 0;
        for(let i = 0; i < uniqueProductIds.length; i++){
            const productId = uniqueProductIds[i];
            const success = await recalculateStockChain(productId);
            if (success) {
                repaired++;
            } else {
                failed++;
                console.warn('repairAllStockChains: failed for product', productId);
            }
            onProgress?.(i + 1, total);
        }
        // Refresh UI after full repair
        await loadStockHistory();
        return {
            repaired,
            failed
        };
    };
    return {
        stockHistory,
        isLoading,
        createStockHistoryEntry,
        updateStockHistoryEntry,
        deleteStockHistoryEntry,
        deleteMultipleStockHistoryEntries,
        recalculateStockChain,
        repairAllStockChains,
        previewStockChainRepairs,
        updateStockHistoryDatesBySaleId,
        recalculateProductStock,
        loadStockHistory
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
"[project]/src/hooks/useProductFilters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProductFilters",
    ()=>useProductFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/searchUtils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useProductFilters = (products)=>{
    _s();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const FILTER_STORAGE_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProductFilters.useMemo[FILTER_STORAGE_KEY]": ()=>currentBusiness?.id ? `productFilters_${currentBusiness.id}` : 'productFilters'
    }["useProductFilters.useMemo[FILTER_STORAGE_KEY]"], [
        currentBusiness?.id
    ]);
    // Load initial filters from localStorage or use defaults
    const loadFiltersFromStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProductFilters.useCallback[loadFiltersFromStorage]": ()=>{
            try {
                const stored = localStorage.getItem(FILTER_STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    return {
                        search: parsed.search || '',
                        category: parsed.category || '',
                        stockStatus: parsed.stockStatus || 'all'
                    };
                }
            } catch (error) {
                console.error('Failed to load filters from localStorage:', error);
            }
            return {
                search: '',
                category: '',
                stockStatus: 'all'
            };
        }
    }["useProductFilters.useCallback[loadFiltersFromStorage]"], [
        FILTER_STORAGE_KEY
    ]);
    const [filters, setFiltersState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(loadFiltersFromStorage);
    // Reload filters when business changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProductFilters.useEffect": ()=>{
            if (currentBusiness?.id) {
                setFiltersState(loadFiltersFromStorage());
            }
        }
    }["useProductFilters.useEffect"], [
        currentBusiness?.id,
        loadFiltersFromStorage
    ]);
    // Save filters to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProductFilters.useEffect": ()=>{
            try {
                localStorage.setItem(FILTER_STORAGE_KEY, JSON.stringify(filters));
            } catch (error) {
                console.error('Failed to save filters to localStorage:', error);
            }
        }
    }["useProductFilters.useEffect"], [
        filters,
        FILTER_STORAGE_KEY
    ]);
    // Wrapper function to update filters
    const setFilters = (newFilters)=>{
        setFiltersState(newFilters);
    };
    const applyFilters = (products, filters)=>{
        return products.filter((product)=>{
            // Search filter - now uses multi-word matching
            if (filters.search) {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchProductSearch"])(product, filters.search)) {
                    return false;
                }
            }
            // Category filter
            if (filters.category && filters.category !== product.category) {
                return false;
            }
            // Stock status filter
            if (filters.stockStatus !== 'all') {
                if (filters.stockStatus === 'inStock' && product.quantity <= product.minimumStock) {
                    return false;
                }
                if (filters.stockStatus === 'lowStock' && (product.quantity === 0 || product.quantity > product.minimumStock)) {
                    return false;
                }
                if (filters.stockStatus === 'outOfStock' && product.quantity > 0) {
                    return false;
                }
            }
            return true;
        });
    };
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProductFilters.useMemo[filteredProducts]": ()=>{
            return applyFilters(products, filters);
        }
    }["useProductFilters.useMemo[filteredProducts]"], [
        products,
        filters
    ]);
    return {
        filters,
        setFilters,
        filteredProducts,
        applyFilters
    };
};
_s(useProductFilters, "sla8kLXbcQOHa3WtywWyvxXyQEk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStockHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProductFilters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/inventoryCacheUtils.ts [app-client] (ecmascript)");
// Import our new Server Actions
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ffe39b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:ffe39b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f41722__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f41722 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e024ee__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:e024ee [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6f6d23__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:6f6d23 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$d6d5ee__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:d6d5ee [app-client] (ecmascript) <text/javascript>");
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
const useProducts = (userId, initialPageSize = 50)=>{
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPageSize);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { createStockHistoryEntry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockHistory"])(userId);
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { filters, setFilters, filteredProducts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductFilters"])(products);
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
        typingTimer,
        setFilters
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ffe39b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductsAction"])({
                    userId,
                    businessId: currentBusiness.id,
                    page,
                    pageSize,
                    search: filters.search,
                    category: filters.category,
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
    const uploadProductImage = async (imageFile)=>{
        try {
            if (!userId) return null;
            const fileExt = imageFile.name.split('.').pop();
            const fileName = `${Date.now()}.${fileExt}`;
            const filePath = `${userId}/${fileName}`;
            const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('product-images').upload(filePath, imageFile, {
                upsert: true
            });
            if (uploadError) {
                console.error('Error uploading image:', uploadError);
                return null;
            }
            const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('product-images').getPublicUrl(filePath);
            return publicUrl;
        } catch (error) {
            console.error('Error in uploadProductImage:', error);
            return null;
        }
    };
    const createProduct = async (productData)=>{
        try {
            if (!userId || !currentBusiness) return null;
            // Assuming createProductAction exists and is fully implemented:
            const newProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f41722__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProductAction"])({
                ...productData,
                userId,
                businessId: currentBusiness.id
            });
            if (!newProduct) return null;
            if (newProduct.quantity > 0) {
                await createStockHistoryEntry(newProduct.id, 0, newProduct.quantity, 'Initial stock', undefined, productData.createdAt, undefined, newProduct.name);
            }
            setProducts((prev)=>[
                    newProduct,
                    ...prev
                ]);
            setTotalCount((c)=>c + 1);
            queryClient.setQueryData(queryKey, (oldData)=>{
                if (!oldData) return {
                    products: [
                        newProduct
                    ],
                    count: 1
                };
                return {
                    products: [
                        newProduct,
                        ...oldData.products
                    ],
                    count: (oldData.count || 0) + 1
                };
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
            if (!userId) return false;
            let currentProduct = products.find((p)=>p.id === id);
            if (!currentProduct) return false;
            let imageUrl = updates.imageUrl;
            if (imageFile) {
                imageUrl = await uploadProductImage(imageFile);
            }
            const updatedData = {
                ...updates,
                imageUrl,
                barcode: updates.barcode !== undefined ? updates.barcode : currentProduct.barcode
            };
            // We will create the update updateProductAction next
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e024ee__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductAction"])(id, {
                ...updatedData,
                userId,
                businessId: currentBusiness?.id
            });
            setProducts((prev)=>prev.map((p)=>p.id === id ? {
                        ...p,
                        ...updatedData
                    } : p));
            queryClient.setQueryData(queryKey, (oldData)=>{
                if (!oldData) return oldData;
                return {
                    ...oldData,
                    products: oldData.products.map((p)=>p.id === id ? {
                            ...p,
                            ...updatedData
                        } : p)
                };
            });
            if (updates.quantity !== undefined && updates.quantity !== currentProduct.quantity && customChangeReason !== 'skip-history') {
                let changeReason = customChangeReason || (isFromSale ? 'Sale' : updates.quantity > currentProduct.quantity ? 'Manual stock addition' : 'Manual stock reduction');
                await createStockHistoryEntry(id, currentProduct.quantity, updates.quantity, changeReason, referenceId, adjustmentDate, receiptNumber, currentProduct.name);
            }
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6f6d23__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProductAction"])(id);
            setProducts((prev)=>prev.filter((p)=>p.id !== id));
            queryClient.setQueryData(queryKey, (old)=>{
                if (!old) return old;
                const { products: oldProducts, count } = old;
                const newProducts = oldProducts.filter((p)=>p.id !== id);
                return {
                    products: newProducts,
                    count: Math.max(0, (count || 0) - 1)
                };
            });
            queryClient.invalidateQueries({
                queryKey: baseQueryKey
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"])(queryClient);
            return true;
        } catch (error) {
            console.error('Error deleting product:', error);
            return false;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProducts.useEffect": ()=>{
        // In Prisma, we either use WebSockets, polling, or React Query's built-in focus/refetch handlers
        // Disabled Supabase Realtime Channels since we moved off the raw Supabase client for data fetches
        }
    }["useProducts.useEffect"], [
        userId,
        currentBusiness?.id,
        baseQueryKey
    ]);
    const updateProductsBulk = async (updates, userIdForHistory, changeReason, referenceId, adjustmentDate, receiptNumber)=>{
        try {
            if (!userId || !currentBusiness) return false;
            // Basic implementation without handling independent image uploads for bulk right now
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$d6d5ee__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductsBulkAction"])(updates.map((u)=>({
                    id: u.id,
                    updated: u.updated
                })), currentBusiness.id);
            if (success) {
                // Optimistically update UI
                setProducts((prev)=>{
                    const updatedMap = new Map(updates.map((u)=>[
                            u.id,
                            u.updated
                        ]));
                    return prev.map((p)=>{
                        const updatedItem = updatedMap.get(p.id);
                        return updatedItem ? {
                            ...p,
                            ...updatedItem
                        } : p;
                    });
                });
                // Add history for quantity changes
                for (const update of updates){
                    const currentProduct = products.find((p)=>p.id === update.id);
                    if (currentProduct && update.updated.quantity !== undefined && update.updated.quantity !== currentProduct.quantity) {
                        await createStockHistoryEntry(update.id, currentProduct.quantity, update.updated.quantity, changeReason || 'Bulk update', referenceId, adjustmentDate, receiptNumber, currentProduct.name);
                    }
                }
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
        setFilters: setFiltersWithTypingState,
        filteredProducts
    };
};
_s(useProducts, "N8HZMMT4S0DMUnEGZmQjoiPU/G4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockHistory"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProductFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductFilters"],
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useInventoryActions = (userId)=>{
    _s();
    const { updateProductsBulk, products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])(userId);
    /**
     * Helper to fetch fresh product data from DB to avoid race conditions/stale data
     */ const fetchFreshProducts = async (productIds, locationId)=>{
        if (!productIds.length) return [];
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*').in('id', productIds);
        if (locationId) {
            query = query.eq('location_id', locationId);
        }
        const { data: dbProducts, error } = await query;
        if (error) {
            console.error('Error fetching fresh products:', error);
            throw error;
        }
        return (dbProducts || []).map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbProductToProduct"]);
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
_s(useInventoryActions, "ZxttdYZqHr+gdfQVvp3C3ERt9Os=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useActivityLogger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInventoryActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInventoryActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/inventoryCacheUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$84e781__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:84e781 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1a9a3e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:1a9a3e [app-client] (ecmascript) <text/javascript>");
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
const useSalesData = (userId, sortOrder = 'desc', pageSize)=>{
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { logActivity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogger"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { updateProduct, loadProducts, updateProductsBulk } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])(userId);
    const { restoreStockForSale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInventoryActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryActions"])(userId);
    const loadSales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalesData.useCallback[loadSales]": async ()=>{
            try {
                if (!userId || !currentBusiness) {
                    return [];
                }
                // If pageSize is specified, load only that many records
                const salesData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$84e781__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getSalesAction"])(currentBusiness.id, sortOrder, pageSize);
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
    // Set up real-time subscription with optimized incremental updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSalesData.useEffect": ()=>{
            if (!userId || !currentBusiness?.id) return;
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('sales_changes').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'sales',
                filter: `location_id=eq.${currentBusiness.id}`
            }, {
                "useSalesData.useEffect.channel": (payload)=>{
                    // Invalidate cache to trigger refetch or handle optimistic updates via setQueryData if needed
                    // For now, invalidation is safer to ensure consistency
                    queryClient.invalidateQueries({
                        queryKey: baseQueryKey
                    });
                    clearSoldItemsCache();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInventoryCaches"])();
                }
            }["useSalesData.useEffect.channel"]).subscribe();
            return ({
                "useSalesData.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["useSalesData.useEffect"];
        }
    }["useSalesData.useEffect"], [
        userId,
        currentBusiness?.id,
        baseQueryKey,
        queryClient
    ]);
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
            console.log('Deleting sale:', id, 'with cash transaction:', saleToDelete.cashTransactionId);
            // Delete associated installment payments first (they might reference cash transactions)
            const { error: installmentError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').delete().eq('sale_id', id);
            if (installmentError) {
                console.error('Error deleting installment payments:', installmentError);
            // Continue with sale deletion even if installment deletion fails
            }
            // If there's an associated cash transaction, delete it
            if (saleToDelete.cashTransactionId) {
                console.log('Deleting associated cash transaction:', saleToDelete.cashTransactionId);
                const { error: cashError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').delete().eq('id', saleToDelete.cashTransactionId);
                if (cashError) {
                    console.error('Error deleting cash transaction:', cashError);
                    toast({
                        title: "Warning",
                        description: "Sale deleted but failed to remove associated cash transaction. Please check your cash accounts.",
                        variant: "destructive"
                    });
                } else {
                    console.log('Successfully deleted cash transaction');
                }
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
            } else {
                console.log('Skipping product restoration (Quote or No items)');
            }
            // If we made it here, proceed to delete the sale via API Action
            if (!currentBusiness?.id) {
                throw new Error('Business context missing for deletion');
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1a9a3e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteSaleAction"])(id, currentBusiness.id);
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
                description: saleToDelete.cashTransactionId ? "The sale record and associated cash transaction have been successfully deleted." : "The sale record has been successfully deleted."
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
        // Removed setSales to prevent manual manipulation outside of mutations
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
_s(useSalesData, "takPQP88fHNXiLe6NNEJdriIhAw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogger"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"],
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useActivityLogger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateThermalReceipt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/generateThermalReceipt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$thermalPrinterPlug$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/thermalPrinterPlug.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
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
                    const { data: existingCustomers } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customers').select('id, full_name').eq('location_id', currentBusiness?.id).ilike('full_name', sale.customerName.trim());
                    // Use the existing customer ID if found
                    if (existingCustomers && existingCustomers.length > 0) {
                        customerId = existingCustomers[0].id;
                    } else {
                        // Only add if the customer doesn't exist
                        try {
                            // Add customer to database with the selected category
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
                // If we have a valid customerId that was NOT already saved with the sale in DB, update the sale with it
                // Note: mapSaleToDbSale now includes customer_id, so for NEW sales it's already there if selected.
                // This update is a safeguard or for cases where name was typed but matched an existing record during this check.
                if (customerId && sale.id) {
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales').update({
                            customer_id: customerId
                        }).eq('id', sale.id);
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
                    // If it was a new sale, delete it
                    const { error: deleteError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales').delete().eq('id', sale.id);
                    if (deleteError) {
                        console.error('CRITICAL: Failed to rollback sale after inventory failure:', deleteError);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    // Memoize the load function to prevent unnecessary re-renders
    const loadAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashAccounts.useCallback[loadAccounts]": async ()=>{
            try {
                if (!currentBusiness) {
                    return [];
                }
                // Optimize query - only select needed fields and limit for faster loading
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_accounts').select('id, name, description, opening_balance, is_default, created_at, updated_at').eq('location_id', currentBusiness.id).order('is_default', {
                    ascending: false
                }).order('name'); // Load all cash accounts
                if (error) throw error;
                const formattedAccounts = data?.map({
                    "useCashAccounts.useCallback[loadAccounts]": (account)=>({
                            id: account.id,
                            name: account.name,
                            description: account.description,
                            openingBalance: account.opening_balance,
                            isDefault: account.is_default,
                            createdAt: new Date(account.created_at),
                            updatedAt: new Date(account.updated_at)
                        })
                }["useCashAccounts.useCallback[loadAccounts]"]) || [];
                return formattedAccounts;
            } catch (error) {
                console.error('Error loading cash accounts:', error);
                toast({
                    title: "Error",
                    description: "Failed to load cash accounts. Please try again.",
                    variant: "destructive"
                });
                return [];
            }
        }
    }["useCashAccounts.useCallback[loadAccounts]"], [
        currentBusiness?.id,
        toast
    ]);
    // React Query caching
    const queryKey = [
        'cash_accounts',
        currentBusiness?.id
    ];
    const { data: queriedAccounts, isLoading: isQueryLoading, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadAccounts,
        enabled: !!currentBusiness?.id,
        staleTime: 0,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true
    });
    // Sync React Query data with local state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCashAccounts.useEffect": ()=>{
            if (queriedAccounts) {
                setAccounts(queriedAccounts);
            }
        }
    }["useCashAccounts.useEffect"], [
        queriedAccounts
    ]);
    // Derived loading state: only true when first loading (pre cache)
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
    // Memoize create account function
    const createAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashAccounts.useCallback[createAccount]": async (accountData)=>{
            try {
                if (!currentBusiness) {
                    toast({
                        title: "Error",
                        description: "No business selected",
                        variant: "destructive"
                    });
                    return null;
                }
                const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                if (!userData.user) throw new Error('User not authenticated');
                const insertData = {
                    user_id: userData.user.id,
                    location_id: currentBusiness.id,
                    name: accountData.name,
                    description: accountData.description || null,
                    opening_balance: accountData.openingBalance,
                    is_default: accountData.isDefault || false
                };
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_accounts').insert(insertData).select().single();
                if (error) throw error;
                // Format the new account and update cache immediately
                const newAccount = {
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    openingBalance: data.opening_balance,
                    isDefault: data.is_default,
                    createdAt: new Date(data.created_at),
                    updatedAt: new Date(data.updated_at)
                };
                // Update local state immediately
                setAccounts({
                    "useCashAccounts.useCallback[createAccount]": (prev)=>[
                            newAccount,
                            ...prev
                        ]
                }["useCashAccounts.useCallback[createAccount]"]);
                // Update React Query cache immediately
                queryClient.setQueryData(queryKey, {
                    "useCashAccounts.useCallback[createAccount]": (oldData)=>{
                        return oldData ? [
                            newAccount,
                            ...oldData
                        ] : [
                            newAccount
                        ];
                    }
                }["useCashAccounts.useCallback[createAccount]"]);
                toast({
                    title: "Success",
                    description: "Cash account created successfully"
                });
                return data;
            } catch (error) {
                console.error('Error creating cash account:', error);
                toast({
                    title: "Error",
                    description: "Failed to create cash account. Please try again.",
                    variant: "destructive"
                });
                return null;
            }
        }
    }["useCashAccounts.useCallback[createAccount]"], [
        currentBusiness,
        loadAccounts,
        toast
    ]);
    const updateAccount = async (id, updates)=>{
        try {
            const updateData = {};
            if (updates.name !== undefined) updateData.name = updates.name;
            if (updates.description !== undefined) updateData.description = updates.description;
            if (updates.openingBalance !== undefined) updateData.opening_balance = updates.openingBalance;
            if (updates.isDefault !== undefined) updateData.is_default = updates.isDefault;
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_accounts').update(updateData).eq('id', id).eq('location_id', currentBusiness?.id);
            if (error) throw error;
            // Optimistic update - update local state
            setAccounts((prev)=>prev.map((a)=>a.id === id ? {
                        ...a,
                        name: updates.name ?? a.name,
                        description: updates.description ?? a.description,
                        openingBalance: updates.openingBalance ?? a.openingBalance,
                        isDefault: updates.isDefault ?? a.isDefault,
                        updatedAt: new Date()
                    } : a));
            // Update React Query cache immediately
            queryClient.setQueryData(queryKey, (oldData)=>{
                return oldData ? oldData.map((a)=>a.id === id ? {
                        ...a,
                        name: updates.name ?? a.name,
                        description: updates.description ?? a.description,
                        openingBalance: updates.openingBalance ?? a.openingBalance,
                        isDefault: updates.isDefault ?? a.isDefault,
                        updatedAt: new Date()
                    } : a) : [];
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
                description: "Failed to update cash account. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    const deleteAccount = async (id, onDeleted)=>{
        try {
            if (!currentBusiness) return {
                success: false,
                hasTransactions: false
            };
            // Check if account has transactions
            const { data: transactions, error: transactionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').select('id').eq('account_id', id).eq('location_id', currentBusiness.id);
            if (transactionError) throw transactionError;
            // Check if account has linked expenses
            const { data: expenses, error: expenseError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').select('id').eq('cash_account_id', id).eq('location_id', currentBusiness.id);
            if (expenseError) throw expenseError;
            const transactionCount = transactions?.length || 0;
            const expenseCount = expenses?.length || 0;
            const totalLinkedRecords = transactionCount + expenseCount;
            if (totalLinkedRecords > 0) {
                // Return an object indicating the account has linked records
                const details = [];
                if (transactionCount > 0) details.push(`${transactionCount} transaction(s)`);
                if (expenseCount > 0) details.push(`${expenseCount} expense(s)`);
                return {
                    hasTransactions: true,
                    transactionCount: totalLinkedRecords,
                    details: `This account has ${details.join(' and ')}. What would you like to do?`,
                    success: false
                };
            }
            // If no linked records, delete the account
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_accounts').delete().eq('id', id).eq('location_id', currentBusiness.id);
            if (error) throw error;
            // Optimistic remove
            setAccounts((prev)=>prev.filter((a)=>a.id !== id));
            queryClient.invalidateQueries({
                queryKey
            });
            toast({
                title: "Success",
                description: "Cash account deleted successfully"
            });
            // Call the callback function if provided
            if (onDeleted) {
                onDeleted();
            }
            return {
                success: true,
                hasTransactions: false
            };
        } catch (error) {
            console.error('Error deleting cash account:', error);
            toast({
                title: "Error",
                description: "Failed to delete cash account. Please try again.",
                variant: "destructive"
            });
            return {
                success: false,
                hasTransactions: false
            };
        }
    };
    const deleteAccountWithTransactions = async (id, deleteTransactions = false, onDeleted)=>{
        try {
            if (!currentBusiness) return false;
            if (deleteTransactions) {
                // First delete associated cash transactions
                const { error: transactionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').delete().eq('account_id', id).eq('location_id', currentBusiness.id);
                if (transactionError) throw transactionError;
                // Then unlink or delete associated expenses
                const { error: expenseError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').update({
                    cash_account_id: null,
                    cash_transaction_id: null
                }).eq('cash_account_id', id).eq('location_id', currentBusiness.id);
                if (expenseError) throw expenseError;
            } else {
                // Just unlink expenses (set cash_account_id to null)
                const { error: expenseError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').update({
                    cash_account_id: null,
                    cash_transaction_id: null
                }).eq('cash_account_id', id).eq('location_id', currentBusiness.id);
                if (expenseError) throw expenseError;
            }
            // Then delete the account
            const { error: accountError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_accounts').delete().eq('id', id).eq('location_id', currentBusiness.id);
            if (accountError) throw accountError;
            // Optimistic remove
            setAccounts((prev)=>prev.filter((a)=>a.id !== id));
            queryClient.invalidateQueries({
                queryKey
            });
            toast({
                title: "Success",
                description: deleteTransactions ? "Cash account and all associated records deleted successfully" : "Cash account deleted successfully (linked records unlinked)"
            });
            // Call the callback function if provided
            if (onDeleted) {
                onDeleted();
            }
            return true;
        } catch (error) {
            console.error('Error deleting cash account with transactions:', error);
            toast({
                title: "Error",
                description: "Failed to delete cash account. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    // Updated balance calculation to use chunked loading like useCashTransactions
    const getAccountBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashAccounts.useCallback[getAccountBalance]": async (accountId)=>{
            try {
                if (!currentBusiness) return 0;
                // Get the account's opening balance
                const { data: account, error: accountError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_accounts').select('opening_balance').eq('id', accountId).eq('location_id', currentBusiness.id).single();
                if (accountError) throw accountError;
                // Get transaction count first to enable chunked loading
                const { count, error: countError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').select('*', {
                    count: 'exact',
                    head: true
                }).eq('account_id', accountId).eq('location_id', currentBusiness.id);
                if (countError) {
                    console.error('Error getting transaction count for balance calculation:', countError);
                    throw countError;
                }
                console.log(`Calculating balance for account ${accountId}: ${count || 0} transactions found`);
                // Load all transactions in chunks of 1000 to bypass Supabase limit
                const allTransactions = [];
                const chunkSize = 1000;
                let start = 0;
                while(start < (count || 0)){
                    console.log(`Loading balance chunk ${Math.floor(start / chunkSize) + 1}: rows ${start} to ${start + chunkSize - 1}`);
                    const { data: chunk, error: chunkError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').select('amount, transaction_type').eq('account_id', accountId).eq('location_id', currentBusiness.id).order('date', {
                        ascending: true
                    }).order('created_at', {
                        ascending: true
                    }).range(start, start + chunkSize - 1);
                    if (chunkError) {
                        console.error('Error loading transaction chunk for balance:', chunkError);
                        throw chunkError;
                    }
                    if (chunk && chunk.length > 0) {
                        allTransactions.push(...chunk);
                        console.log(`Balance chunk ${Math.floor(start / chunkSize) + 1}: loaded ${chunk.length} transactions`);
                    }
                    start += chunkSize;
                }
                console.log(`Total transactions loaded for balance calculation: ${allTransactions.length}`);
                // Calculate balance using the same logic as the summary - exactly matching DailyCashSummary calculation
                let balance = Number(account.opening_balance);
                allTransactions.forEach({
                    "useCashAccounts.useCallback[getAccountBalance]": (transaction)=>{
                        const amount = Number(transaction.amount);
                        if (transaction.transaction_type === 'cash_in' || transaction.transaction_type === 'transfer_in') {
                            balance += amount;
                        } else if (transaction.transaction_type === 'cash_out' || transaction.transaction_type === 'transfer_out') {
                            balance -= amount;
                        }
                    }
                }["useCashAccounts.useCallback[getAccountBalance]"]);
                console.log(`Final calculated balance for account ${accountId}: ${balance}`);
                return balance;
            } catch (error) {
                console.error('Error calculating account balance:', error);
                return 0;
            }
        }
    }["useCashAccounts.useCallback[getAccountBalance]"], [
        currentBusiness?.id
    ]);
    // Initial load handled by React Query (no manual call)
    // Realtime: invalidate cash accounts cache on changes for current location
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCashAccounts.useEffect": ()=>{
            if (!currentBusiness?.id) return;
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('cash_accounts_and_transactions_changes').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'cash_accounts',
                filter: `location_id=eq.${currentBusiness.id}`
            }, {
                "useCashAccounts.useEffect.channel": ()=>{
                    queryClient.invalidateQueries({
                        queryKey
                    });
                }
            }["useCashAccounts.useEffect.channel"]).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'cash_transactions',
                filter: `location_id=eq.${currentBusiness.id}`
            }, {
                "useCashAccounts.useEffect.channel": ()=>{
                    // Refresh account balances when transactions change
                    queryClient.invalidateQueries({
                        queryKey
                    });
                }
            }["useCashAccounts.useEffect.channel"]).subscribe();
            return ({
                "useCashAccounts.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["useCashAccounts.useEffect"];
        }
    }["useCashAccounts.useEffect"], [
        currentBusiness?.id
    ]);
    // Memoize return object to prevent unnecessary re-renders
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
        getAccountBalance,
        loadAccounts
    ]);
};
_s(useCashAccounts, "40vGq0D4/MDXv6wLHFBIp48jOfg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useInstallmentPayments = (saleId)=>{
    _s();
    const [payments, setPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const fetchPayments = async (targetSaleId)=>{
        try {
            setIsLoading(true);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').select('*').eq('sale_id', targetSaleId).order('payment_date', {
                ascending: false
            });
            if (error) throw error;
            const formattedPayments = data?.map((payment)=>({
                    id: payment.id,
                    saleId: payment.sale_id,
                    userId: payment.user_id,
                    amount: Number(payment.amount),
                    paymentDate: new Date(payment.payment_date),
                    notes: payment.notes || undefined,
                    cashTransactionId: payment.cash_transaction_id || undefined,
                    createdAt: new Date(payment.created_at),
                    updatedAt: new Date(payment.updated_at)
                })) || [];
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
    };
    const createCashTransactionForPayment = async (payment)=>{
        try {
            const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!userData.user) throw new Error('User not authenticated');
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').insert({
                user_id: userData.user.id,
                account_id: payment.accountId,
                location_id: payment.locationId,
                amount: payment.amount,
                transaction_type: 'cash_in',
                category: 'Installment payment',
                description: payment.description,
                date: payment.date.toISOString().split('T')[0],
                person_in_charge: '',
                tags: [],
                payment_method: '',
                receipt_image: ''
            }).select().single();
            if (error) throw error;
            return data.id;
        } catch (error) {
            console.error('Error creating cash transaction:', error);
            return null;
        }
    };
    const createPayment = async (payment)=>{
        try {
            const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!userData.user) throw new Error('User not authenticated');
            // Count existing payments to determine if this is the first payment
            const { data: existingPayments, error: countError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').select('id').eq('sale_id', payment.saleId);
            if (countError) throw countError;
            // Determine the note based on payment count
            const isFirstPayment = !existingPayments || existingPayments.length === 0;
            const automaticNote = isFirstPayment ? 'Initial payment' : 'Payment update';
            // Use provided notes or automatic note
            const finalNotes = payment.notes || automaticNote;
            let cashTransactionId = null;
            // Create cash transaction if account ID and location ID are provided
            if (payment.accountId && payment.locationId) {
                // Get sale details for better description
                const { data: saleData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales').select('customer_name, receipt_number').eq('id', payment.saleId).single();
                const description = saleData ? `Installment payment for ${saleData.customer_name} - Receipt #${saleData.receipt_number}` : `Installment payment for sale`;
                cashTransactionId = await createCashTransactionForPayment({
                    amount: payment.amount,
                    description: description,
                    date: payment.paymentDate || new Date(),
                    accountId: payment.accountId,
                    locationId: payment.locationId
                });
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').insert({
                sale_id: payment.saleId,
                user_id: userData.user.id,
                amount: payment.amount,
                notes: finalNotes,
                cash_transaction_id: cashTransactionId,
                payment_date: payment.paymentDate?.toISOString() || new Date().toISOString()
            }).select().single();
            if (error) throw error;
            const newPayment = {
                id: data.id,
                saleId: data.sale_id,
                userId: data.user_id,
                amount: Number(data.amount),
                paymentDate: new Date(data.payment_date),
                notes: data.notes || undefined,
                cashTransactionId: data.cash_transaction_id || undefined,
                createdAt: new Date(data.created_at),
                updatedAt: new Date(data.updated_at)
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
            const payment = payments.find((p)=>p.id === paymentId);
            if (!payment) throw new Error('Payment not found');
            // Prepare update data
            const updateData = {};
            if (updates.amount !== undefined) updateData.amount = updates.amount;
            if (updates.notes !== undefined) updateData.notes = updates.notes;
            if (updates.paymentDate !== undefined) updateData.payment_date = updates.paymentDate.toISOString();
            // Update installment payment
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').update(updateData).eq('id', paymentId).select().single();
            if (error) throw error;
            // Update associated cash transaction if it exists
            if (payment.cashTransactionId) {
                const cashUpdateData = {};
                if (updates.amount !== undefined) cashUpdateData.amount = updates.amount;
                if (updates.paymentDate !== undefined) cashUpdateData.date = updates.paymentDate.toISOString().split('T')[0];
                if (Object.keys(cashUpdateData).length > 0) {
                    const { error: cashError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').update(cashUpdateData).eq('id', payment.cashTransactionId);
                    if (cashError) {
                        console.error('Error updating cash transaction:', cashError);
                    }
                }
            }
            const updatedPayment = {
                id: data.id,
                saleId: data.sale_id,
                userId: data.user_id,
                amount: Number(data.amount),
                paymentDate: new Date(data.payment_date),
                notes: data.notes || undefined,
                cashTransactionId: data.cash_transaction_id || undefined,
                createdAt: new Date(data.created_at),
                updatedAt: new Date(data.updated_at)
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
                description: "Failed to update payment",
                variant: "destructive"
            });
            return null;
        }
    };
    const deletePayment = async (paymentId)=>{
        try {
            const payment = payments.find((p)=>p.id === paymentId);
            if (!payment) throw new Error('Payment not found');
            // Delete associated cash transaction first if it exists
            if (payment.cashTransactionId) {
                const { error: cashError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').delete().eq('id', payment.cashTransactionId);
                if (cashError) {
                    console.error('Error deleting cash transaction:', cashError);
                }
            }
            // Delete installment payment
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').delete().eq('id', paymentId);
            if (error) throw error;
            setPayments((prev)=>prev.filter((p)=>p.id !== paymentId));
            toast({
                title: "Success",
                description: "Payment deleted successfully"
            });
        } catch (error) {
            console.error('Error deleting payment:', error);
            toast({
                title: "Error",
                description: "Failed to delete payment",
                variant: "destructive"
            });
        }
    };
    const linkPaymentToCashAccount = async (paymentId, accountId)=>{
        try {
            const payment = payments.find((p)=>p.id === paymentId);
            if (!payment) throw new Error('Payment not found');
            if (payment.cashTransactionId) {
                throw new Error('Payment is already linked to a cash account');
            }
            const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!userData.user) throw new Error('User not authenticated');
            // Get account info for location_id
            const { data: accountData, error: accountError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_accounts').select('location_id').eq('id', accountId).single();
            if (accountError) throw accountError;
            // Get sale details for better description
            const { data: saleData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales').select('customer_name, receipt_number').eq('id', payment.saleId).single();
            const description = saleData ? `Installment payment for ${saleData.customer_name} - Receipt #${saleData.receipt_number}` : `Installment payment #${payment.id.substring(0, 8)}`;
            // Create cash transaction
            const cashTransactionId = await createCashTransactionForPayment({
                amount: payment.amount,
                description: description,
                date: payment.paymentDate,
                accountId,
                locationId: accountData.location_id
            });
            if (!cashTransactionId) throw new Error('Failed to create cash transaction');
            // Update payment with cash transaction ID
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').update({
                cash_transaction_id: cashTransactionId
            }).eq('id', paymentId);
            if (updateError) throw updateError;
            // Update local state
            setPayments((prev)=>prev.map((p)=>p.id === paymentId ? {
                        ...p,
                        cashTransactionId
                    } : p));
            toast({
                title: "Success",
                description: "Payment linked to cash account successfully"
            });
        } catch (error) {
            console.error('Error linking payment to cash account:', error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to link payment to cash account",
                variant: "destructive"
            });
            throw error;
        }
    };
    const unlinkPaymentFromCashAccount = async (paymentId)=>{
        try {
            const payment = payments.find((p)=>p.id === paymentId);
            if (!payment) throw new Error('Payment not found');
            if (!payment.cashTransactionId) {
                throw new Error('Payment is not linked to a cash account');
            }
            // Delete cash transaction
            const { error: cashError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').delete().eq('id', payment.cashTransactionId);
            if (cashError) throw cashError;
            // Update payment to remove cash transaction ID
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').update({
                cash_transaction_id: null
            }).eq('id', paymentId);
            if (updateError) throw updateError;
            // Update local state
            setPayments((prev)=>prev.map((p)=>p.id === paymentId ? {
                        ...p,
                        cashTransactionId: undefined
                    } : p));
            toast({
                title: "Success",
                description: "Payment unlinked from cash account successfully"
            });
        } catch (error) {
            console.error('Error unlinking payment from cash account:', error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to unlink payment from cash account",
                variant: "destructive"
            });
            throw error;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInstallmentPayments.useEffect": ()=>{
            if (saleId) {
                fetchPayments(saleId);
            }
        }
    }["useInstallmentPayments.useEffect"], [
        saleId
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
_s(useInstallmentPayments, "+PcV+CNSNFMU9EFFssmRKEWgKtQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/cash.ts [app-client] (ecmascript)");
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
    // Chunked transaction loading to bypass Supabase 1000 row limit
    const loadTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactions.useCallback[loadTransactions]": async ()=>{
            try {
                if (!user || !currentBusiness) {
                    return [];
                }
                // First, get the total count
                let countQuery = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').select('*', {
                    count: 'exact',
                    head: true
                }).eq('location_id', currentBusiness.id);
                if (accountId) {
                    countQuery = countQuery.eq('account_id', accountId);
                }
                const { count, error: countError } = await countQuery;
                if (countError) {
                    console.error('Error getting transaction count:', countError);
                    throw countError;
                }
                // Load transactions in chunks of 1000 to bypass limit
                const allTransactions = [];
                const chunkSize = 1000;
                let start = 0;
                while(start < (count || 0)){
                    let chunkQuery = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').select(`
            id,
            user_id,
            account_id,
            amount,
            transaction_type,
            category,
            description,
            person_in_charge,
            tags,
            date,
            payment_method,
            receipt_image,
            created_at,
            updated_at
          `).eq('location_id', currentBusiness.id).order('date', {
                        ascending: false
                    }).order('created_at', {
                        ascending: false
                    }).range(start, start + chunkSize - 1);
                    // Apply account filter if specified
                    if (accountId) {
                        chunkQuery = chunkQuery.eq('account_id', accountId);
                    }
                    const { data: chunkData, error: chunkError } = await chunkQuery;
                    if (chunkError) {
                        console.error('Error loading transaction chunk:', chunkError);
                        throw chunkError;
                    }
                    if (chunkData && chunkData.length > 0) {
                        allTransactions.push(...chunkData);
                    }
                    // If we got less than chunkSize, we've reached the end
                    if (!chunkData || chunkData.length < chunkSize) {
                        break;
                    }
                    start += chunkSize;
                }
                // Format all transactions
                const formattedTransactions = allTransactions.map({
                    "useCashTransactions.useCallback[loadTransactions].formattedTransactions": (item)=>{
                        const dbTransaction = {
                            id: item.id,
                            user_id: item.user_id,
                            account_id: item.account_id,
                            amount: item.amount,
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
                // Sort transactions by date and created_at descending (most recent first)
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
                    description: "Failed to load cash transactions. Please try again.",
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
    // React Query caching
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
        staleTime: 0,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true
    });
    // Derived loading state to avoid flash on background refetch
    const isLoading = isQueryLoading && transactions.length === 0;
    const createTransaction = async (transactionData)=>{
        try {
            if (!user || !currentBusiness) throw new Error('User not authenticated or no business selected');
            // Get account names for proper transfer descriptions
            const getAccountName = async (accountId)=>{
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_accounts').select('name').eq('id', accountId).eq('location_id', currentBusiness.id).single();
                if (error) throw error;
                return data?.name || 'Unknown Account';
            };
            // Handle transfer transaction - create two transactions
            if (transactionData.transactionType === 'transfer' && transactionData.toAccountId) {
                const fromAccountName = await getAccountName(transactionData.accountId);
                const toAccountName = await getAccountName(transactionData.toAccountId);
                const transferOutData = {
                    ...transactionData,
                    transactionType: 'cash_out',
                    description: `Transfer to ${toAccountName}: ${transactionData.description}`
                };
                const transferInData = {
                    ...transactionData,
                    accountId: transactionData.toAccountId,
                    transactionType: 'cash_in',
                    description: `Transfer from ${fromAccountName}: ${transactionData.description}`
                };
                const dbTransferOut = {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapCashTransactionFormToDbInsert"])(transferOutData, user.id),
                    location_id: currentBusiness.id,
                    transaction_type: 'transfer_out'
                };
                const dbTransferIn = {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapCashTransactionFormToDbInsert"])(transferInData, user.id),
                    location_id: currentBusiness.id,
                    transaction_type: 'transfer_in'
                };
                const { error: error1 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').insert(dbTransferOut);
                const { error: error2 } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').insert(dbTransferIn);
                if (error1 || error2) throw error1 || error2;
                toast({
                    title: "Success",
                    description: "Transfer completed successfully"
                });
                queryClient.invalidateQueries({
                    queryKey
                });
                return;
            }
            const dbInsertData = {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapCashTransactionFormToDbInsert"])(transactionData, user.id),
                location_id: currentBusiness.id
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').insert(dbInsertData).select().single();
            if (error) throw error;
            toast({
                title: "Success",
                description: "Cash transaction created successfully"
            });
            queryClient.invalidateQueries({
                queryKey
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(data);
        } catch (error) {
            console.error('Error creating cash transaction:', error);
            toast({
                title: "Error",
                description: "Failed to create cash transaction. Please try again.",
                variant: "destructive"
            });
            throw error;
        }
    };
    const createBulkTransactions = async (transactionsData)=>{
        try {
            if (!user || !currentBusiness) throw new Error('User not authenticated or no business selected');
            // Optimization: Fetch all accounts once for transfer descriptions
            const { data: allAccounts, error: accountsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_accounts').select('id, name').eq('location_id', currentBusiness.id);
            if (accountsError) throw accountsError;
            const accountMap = new Map(allAccounts?.map((acc)=>[
                    acc.id,
                    acc.name
                ]));
            const getAccountName = (id)=>accountMap.get(id) || 'Unknown Account';
            const dbInserts = [];
            for (const transactionData of transactionsData){
                if (transactionData.transactionType === 'transfer' && transactionData.toAccountId) {
                    const fromAccountName = getAccountName(transactionData.accountId);
                    const toAccountName = getAccountName(transactionData.toAccountId);
                    dbInserts.push({
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapCashTransactionFormToDbInsert"])({
                            ...transactionData,
                            transactionType: 'cash_out',
                            description: `Transfer to ${toAccountName}: ${transactionData.description}`
                        }, user.id),
                        location_id: currentBusiness.id,
                        transaction_type: 'transfer_out'
                    });
                    dbInserts.push({
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapCashTransactionFormToDbInsert"])({
                            ...transactionData,
                            accountId: transactionData.toAccountId,
                            transactionType: 'cash_in',
                            description: `Transfer from ${fromAccountName}: ${transactionData.description}`
                        }, user.id),
                        location_id: currentBusiness.id,
                        transaction_type: 'transfer_in'
                    });
                } else {
                    const finalTransactionType = transactionData.transactionType === 'transfer' ? 'cash_out' : transactionData.transactionType;
                    dbInserts.push({
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapCashTransactionFormToDbInsert"])({
                            ...transactionData,
                            transactionType: finalTransactionType
                        }, user.id),
                        location_id: currentBusiness.id,
                        transaction_type: finalTransactionType === 'cash_out' ? 'cash_out' : finalTransactionType
                    });
                }
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').insert(dbInserts).select();
            if (error) throw error;
            toast({
                title: "Success",
                description: `Successfully created ${transactionsData.length} transactions`
            });
            queryClient.invalidateQueries({
                queryKey
            });
            return data.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(item));
        } catch (error) {
            console.error('Error creating bulk transactions:', error);
            toast({
                title: "Error",
                description: "Failed to create bulk transactions. Please try again.",
                variant: "destructive"
            });
            throw error;
        }
    };
    const updateTransaction = async (id, updates)=>{
        try {
            if (!user || !currentBusiness) throw new Error('User not authenticated or no business selected');
            const updateData = {};
            if (updates.amount !== undefined) updateData.amount = updates.amount;
            if (updates.category !== undefined) updateData.category = updates.category;
            if (updates.description !== undefined) updateData.description = updates.description;
            if (updates.personInCharge !== undefined) updateData.person_in_charge = updates.personInCharge || null;
            if (updates.tags !== undefined) updateData.tags = updates.tags.length > 0 ? updates.tags : null;
            if (updates.date !== undefined) updateData.date = updates.date.toISOString().split('T')[0];
            if (updates.paymentMethod !== undefined) updateData.payment_method = updates.paymentMethod || null;
            if (updates.receiptImage !== undefined) updateData.receipt_image = updates.receiptImage || null;
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').update(updateData).eq('id', id).eq('location_id', currentBusiness.id).select().single();
            if (error) throw error;
            toast({
                title: "Success",
                description: "Transaction updated successfully"
            });
            queryClient.invalidateQueries({
                queryKey
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(data);
        } catch (error) {
            console.error('Error updating cash transaction:', error);
            toast({
                title: "Error",
                description: "Failed to update transaction. Please try again.",
                variant: "destructive"
            });
            throw error;
        }
    };
    const deleteTransaction = async (id, onDeleted)=>{
        try {
            if (!currentBusiness) throw new Error('No business selected');
            const { data: installmentPayments } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').select('id').eq('cash_transaction_id', id);
            if (installmentPayments && installmentPayments.length > 0) {
                const { error: unlinkError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').update({
                    cash_transaction_id: null
                }).eq('cash_transaction_id', id);
                if (unlinkError) throw unlinkError;
            }
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').delete().eq('id', id).eq('location_id', currentBusiness.id);
            if (error) throw error;
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
                description: "Failed to delete cash transaction. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    const getAccountOpeningBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactions.useCallback[getAccountOpeningBalance]": async (accountId)=>{
            try {
                if (!currentBusiness) return 0;
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_accounts').select('opening_balance').eq('id', accountId).eq('location_id', currentBusiness.id).single();
                if (error) return 0;
                return Number(data?.opening_balance || 0);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCashTransactions.useEffect": ()=>{
            if (!user || !currentBusiness?.id) return;
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel(`cash-tx-${currentBusiness.id}-${accountId || 'all'}`).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'cash_transactions',
                filter: `location_id=eq.${currentBusiness.id}`
            }, {
                "useCashTransactions.useEffect.channel": ()=>{
                    queryClient.invalidateQueries({
                        queryKey
                    });
                }
            }["useCashTransactions.useEffect.channel"]).subscribe();
            return ({
                "useCashTransactions.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["useCashTransactions.useEffect"];
        }
    }["useCashTransactions.useEffect"], [
        user,
        currentBusiness?.id,
        accountId,
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
_s(useCashTransactions, "IIQMePag8MOM/Nw1lzrEyNkRJOk=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashTransactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCashTransactions.ts [app-client] (ecmascript)");
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
                console.log('Sale object for cash transaction:', sale);
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
                console.log('updateCashTransactionForSale called with:', {
                    cashTransactionId,
                    linkToCash,
                    paymentStatus,
                    selectedCashAccountId: selectedCashAccountId || 'EMPTY',
                    amount
                });
                const description = `Sale to ${sale.customerName || sale.customer_name || 'Customer'} - Receipt #${sale.receiptNumber || sale.receipt_number || 'N/A'}`;
                // Validate selectedCashAccountId is not empty when linking to cash
                const validCashAccountId = selectedCashAccountId && selectedCashAccountId.trim() !== '';
                // If no existing cash transaction but user wants to link to cash account
                if (!cashTransactionId && linkToCash && paymentStatus === 'Paid' && validCashAccountId) {
                    console.log('Creating new cash transaction for sale update');
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
                    console.log('Created cash transaction:', cashTransaction?.id);
                    return cashTransaction?.id || null;
                }
                // If no existing cash transaction and not linking to cash, return null
                if (!cashTransactionId) {
                    console.log('No cash transaction to update, returning null');
                    return null;
                }
                // Handle existing cash transaction
                if (originalPaymentStatus === 'Paid' && paymentStatus === 'Installment Sale') {
                    console.log('Deleting cash transaction due to status change to Installment Sale');
                    await deleteCashTransaction(cashTransactionId);
                    return null;
                }
                if (linkToCash && paymentStatus === 'Paid' && validCashAccountId) {
                    console.log('Updating existing cash transaction');
                    await updateCashTransaction(cashTransactionId, {
                        amount: amount,
                        category: 'Cash sale',
                        description: description,
                        date: selectedDate
                    });
                    return cashTransactionId;
                } else {
                    console.log('Deleting cash transaction - not linking to cash or not paid');
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
                saleDescription,
                locationId,
                date: new Date()
            });
        }
    }["useCashTransactionOperations.useCallback[createInstallmentPaymentWithCash]"], []);
    const findCashTransactionForSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCashTransactionOperations.useCallback[findCashTransactionForSale]": async (cashTransactionId)=>{
            try {
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').select('account_id').eq('id', cashTransactionId).single();
                if (!error && data) {
                    return data.account_id;
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
_s(useCashTransactionOperations, "Rnlo92YM0TatWa6BIhCvs6sdUeI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashTransactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashTransactions"]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// hooks/useMessages.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("src/hooks/useMessages.ts")}`;
    }
};
var _s = __turbopack_context__.k.signature();
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
    // Remove manual loading state; derive from React Query for messages
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { currentProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    // -----------------------------
    // FETCH LIVE CREDITS
    // -----------------------------
    const fetchLiveCredits = async ()=>{
        if (!currentProfile?.id) return;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('business_profiles').select('sms_credits').eq('id', currentProfile.id).single();
        if (!error && data) setLiveCredits(data.sms_credits);
    };
    // Templates
    const createTemplate = async (templateData)=>{
        if (!userId || !currentBusiness?.id) return null;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('message_templates').insert({
            user_id: userId,
            location_id: currentBusiness.id,
            name: templateData.name,
            content: templateData.content,
            category: templateData.category,
            variables: templateData.variables,
            is_default: templateData.isDefault
        }).select().single();
        if (!error && data) {
            const newTemplate = {
                id: data.id,
                userId: data.user_id,
                locationId: data.location_id,
                name: data.name,
                content: data.content,
                category: data.category,
                variables: data.variables,
                isDefault: data.is_default,
                createdAt: data.created_at,
                updatedAt: data.updated_at
            };
            setTemplates((prev)=>[
                    newTemplate,
                    ...prev
                ]);
            return newTemplate;
        }
        return null;
    };
    const updateTemplate = async (id, updates)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('message_templates').update({
            name: updates.name,
            content: updates.content,
            category: updates.category,
            variables: updates.variables,
            is_default: updates.isDefault,
            updated_at: new Date().toISOString()
        }).eq('id', id);
        if (!error) {
            await fetchTemplates();
        }
    };
    const deleteTemplate = async (id)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('message_templates').delete().eq('id', id);
        if (!error) {
            setTemplates((prev)=>prev.filter((t)=>t.id !== id));
        }
    };
    // -----------------------------
    // FETCH MESSAGES
    // -----------------------------
    const fetchMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMessages.useCallback[fetchMessages]": async ()=>{
            if (!userId || !currentBusiness?.id) return [];
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('messages').select('*').eq('user_id', userId).eq('location_id', currentBusiness.id).order('created_at', {
                ascending: false
            });
            if (!error && data) {
                const formattedMessages = data.map({
                    "useMessages.useCallback[fetchMessages].formattedMessages": (msg)=>({
                            id: msg.id,
                            userId: msg.user_id,
                            locationId: msg.location_id,
                            profileId: msg.profile_id,
                            customerId: msg.customer_id,
                            phoneNumber: msg.phone_number,
                            content: msg.content,
                            status: msg.status,
                            smsCreditsUsed: msg.sms_credits_used,
                            templateId: msg.template_id,
                            errorMessage: msg.error_message,
                            sentAt: msg.sent_at,
                            deliveredAt: msg.delivered_at,
                            createdAt: msg.created_at,
                            updatedAt: msg.updated_at,
                            metadata: msg.metadata
                        })
                }["useMessages.useCallback[fetchMessages].formattedMessages"]);
                return formattedMessages;
            }
            return [];
        }
    }["useMessages.useCallback[fetchMessages]"], [
        userId,
        currentBusiness?.id
    ]);
    // React Query caching for messages
    const messagesQueryKey = [
        'messages',
        userId,
        currentBusiness?.id
    ];
    const { data: queriedMessages, isLoading: messagesLoading, isFetching: messagesFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: messagesQueryKey,
        queryFn: fetchMessages,
        enabled: !!userId && !!currentBusiness?.id,
        staleTime: 5 * 60_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMessages.useEffect": ()=>{
            if (queriedMessages) {
                setMessages(queriedMessages);
            }
        }
    }["useMessages.useEffect"], [
        queriedMessages
    ]);
    // -----------------------------
    // FETCH TEMPLATES
    // -----------------------------
    const fetchTemplates = async ()=>{
        if (!userId || !currentBusiness?.id) return;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('message_templates').select('*').eq('user_id', userId).eq('location_id', currentBusiness.id).order('created_at', {
            ascending: false
        });
        if (!error) setTemplates(data || []);
    };
    // -----------------------------
    // FETCH PURCHASES
    // -----------------------------
    const fetchPurchases = async ()=>{
        if (!userId || !currentBusiness?.id) return;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sms_credit_purchases').select('*').eq('user_id', userId).eq('location_id', currentBusiness.id).order('created_at', {
            ascending: false
        }).limit(10);
        if (!error && data) setPurchases(data);
    };
    // -----------------------------
    // SEND SMS EDGE
    // -----------------------------
    const sendSMSViaEdgeFunction = async (messageId)=>{
        const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
        if (!session?.access_token) throw new Error('No active session');
        const supabaseUrl = ("TURBOPACK compile-time value", "https://ujgxxcgemmfmfsbngnqo.supabase.co");
        const response = await fetch(`${supabaseUrl}/functions/v1/send-sms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.access_token}`
            },
            body: JSON.stringify({
                messageId
            })
        });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error(JSON.stringify(result));
        return result;
    };
    // -----------------------------
    // CREATE SINGLE MESSAGE
    // -----------------------------
    const createMessage = async (messageData)=>{
        if (!userId || !currentBusiness?.id || !currentProfile) return null;
        const formattedPhone = formatPhoneNumber(messageData.phoneNumber);
        let finalContent = messageData.content;
        if (messageData.customerId) {
            const { data: customer } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customers').select('full_name, phone_number, email').eq('id', messageData.customerId).single();
            if (customer) {
                finalContent = finalContent.replace(/\{customer_name\}/gi, customer.full_name || 'Customer').replace(/\{customer_phone\}/gi, customer.phone_number || '').replace(/\{customer_email\}/gi, customer.email || '').replace(/\{first_name\}/gi, customer.full_name?.split(' ')[0] || 'Customer').replace(/\{last_name\}/gi, customer.full_name?.split(' ').slice(1).join(' ') || '');
            }
        }
        const creditsNeeded = Math.ceil(finalContent.length / 160);
        if (currentProfile.sms_credits < creditsNeeded) throw new Error(`Insufficient credits`);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('messages').insert({
            user_id: userId,
            location_id: currentBusiness.id,
            profile_id: currentProfile.id,
            customer_id: messageData.customerId,
            phone_number: formattedPhone,
            content: finalContent,
            template_id: messageData.templateId,
            sms_credits_used: creditsNeeded,
            status: 'pending',
            metadata: messageData.metadata
        }).select().single();
        if (error || !data) throw error;
        // Note: Credits will be automatically deducted by database trigger when message status becomes 'sent'
        // This prevents charging for failed messages
        const newMessage = {
            ...data,
            userId: data.user_id,
            locationId: data.location_id
        };
        // Update local state immediately
        setMessages((prev)=>[
                newMessage,
                ...prev
            ]);
        // Update React Query cache immediately
        queryClient.setQueryData(messagesQueryKey, (oldData)=>{
            return oldData ? [
                newMessage,
                ...oldData
            ] : [
                newMessage
            ];
        });
        // Send SMS asynchronously - edge function will update status which triggers credit deduction
        sendSMSViaEdgeFunction(data.id).catch((err)=>{
            console.error('Failed to send SMS:', err);
        // Message status will remain 'pending', no credits deducted
        });
        return newMessage;
    };
    // -----------------------------
    // CREATE BULK MESSAGES
    // -----------------------------
    const createBulkMessages = async (messageData)=>{
        if (!userId || !currentBusiness?.id || !currentProfile) return {
            success: 0,
            failed: 0,
            errors: []
        };
        const { data: customers } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customers').select('id, full_name, phone_number, email').in('id', messageData.customerIds);
        let totalCreditsNeeded = 0;
        const messagesToInsert = [];
        (customers || []).forEach((customer)=>{
            if (!customer.phone_number) return;
            const content = messageData.content.replace(/\{customer_name\}/gi, customer.full_name || 'Customer').replace(/\{customer_phone\}/gi, customer.phone_number || '').replace(/\{customer_email\}/gi, customer.email || '').replace(/\{first_name\}/gi, customer.full_name?.split(' ')[0] || 'Customer').replace(/\{last_name\}/gi, customer.full_name?.split(' ').slice(1).join(' ') || '');
            const credits = Math.ceil(content.length / 160);
            totalCreditsNeeded += credits;
            messagesToInsert.push({
                user_id: userId,
                location_id: currentBusiness.id,
                profile_id: currentProfile.id,
                customer_id: customer.id,
                phone_number: formatPhoneNumber(customer.phone_number),
                content,
                template_id: messageData.templateId,
                sms_credits_used: credits,
                status: 'pending',
                metadata: {
                    ...messageData.metadata,
                    bulk: true
                }
            });
        });
        if (currentProfile.sms_credits < totalCreditsNeeded) throw new Error(`Insufficient credits`);
        const { data: insertedMessages } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('messages').insert(messagesToInsert).select();
        // Note: Credits will be automatically deducted by database trigger as each message status becomes 'sent'
        // This ensures customers are only charged for messages that successfully send
        // Send each message asynchronously - edge function will update status which triggers credit deduction
        insertedMessages?.forEach((msg)=>{
            sendSMSViaEdgeFunction(msg.id).catch((err)=>{
                console.error('Failed to send SMS:', msg.id, err);
            // Message status will remain 'pending', no credits deducted
            });
        });
        queryClient.invalidateQueries({
            queryKey: messagesQueryKey
        });
        return {
            success: insertedMessages?.length || 0,
            failed: messagesToInsert.length - (insertedMessages?.length || 0),
            errors: []
        };
    };
    // Initialize credit purchase via Edge Function
    const initiateCreditPurchase = async (creditsAmount, phoneNumber)=>{
        if (!userId || !currentBusiness?.id || !currentProfile) {
            throw new Error('Missing user or business context');
        }
        try {
            console.log('=== Initiating Credit Purchase ===');
            console.log('Credits:', creditsAmount);
            console.log('Phone:', phoneNumber);
            console.log('User ID:', userId);
            console.log('Business ID:', currentBusiness.id);
            console.log('Profile ID:', currentProfile.id);
            const creditCost = Number(__TURBOPACK__import$2e$meta__.env.VITE_SMS_CREDIT_COST || 100);
            const totalCost = creditsAmount * creditCost;
            console.log('Credit cost:', creditCost);
            console.log('Total cost:', totalCost);
            // Create purchase record
            const { data: purchaseData, error: purchaseError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sms_credit_purchases').insert({
                user_id: userId,
                location_id: currentBusiness.id,
                profile_id: currentProfile.id,
                credits_amount: creditsAmount,
                total_cost: totalCost,
                payment_phone_number: phoneNumber,
                payment_status: 'pending'
            }).select().single();
            if (purchaseError || !purchaseData) {
                console.error('Purchase error:', purchaseError);
                throw new Error('Failed to create purchase record');
            }
            console.log('Purchase record created:', purchaseData.id);
            // Get the current session token
            const { data: { session }, error: sessionError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
            console.log('Session check:');
            console.log('- Session exists:', !!session);
            console.log('- Session error:', sessionError);
            console.log('- Access token exists:', !!session?.access_token);
            console.log('- Token preview:', session?.access_token?.substring(0, 30) + '...');
            if (!session || !session.access_token) {
                throw new Error('No active session or access token. Please log in again.');
            }
            const supabaseUrl = ("TURBOPACK compile-time value", "https://ujgxxcgemmfmfsbngnqo.supabase.co") || 'https://ujgxxcgemmfmfsbngnqo.supabase.co';
            const functionUrl = `${supabaseUrl}/functions/v1/pesapal-payment`;
            console.log('Calling function URL:', functionUrl);
            const paymentData = {
                purchaseId: purchaseData.id,
                amount: totalCost,
                phoneNumber: phoneNumber,
                description: `Purchase of ${creditsAmount} SMS credits`
            };
            console.log('Payment data:', paymentData);
            // Initiate PesaPal payment with proper headers
            const response = await fetch(functionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.access_token}`,
                    'apikey': __TURBOPACK__import$2e$meta__.env.VITE_SUPABASE_ANON_KEY || ''
                },
                body: JSON.stringify(paymentData)
            });
            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);
            const responseData = await response.json();
            console.log('Response data:', responseData);
            if (!response.ok) {
                throw new Error(responseData.error || `Payment initiation failed: ${response.status}`);
            }
            // Update purchase with PesaPal details
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sms_credit_purchases').update({
                pesapal_tracking_id: responseData.order_tracking_id,
                pesapal_merchant_reference: responseData.merchant_reference,
                pesapal_redirect_url: responseData.redirect_url
            }).eq('id', purchaseData.id);
            console.log('Purchase updated with PesaPal details');
            await fetchPurchases();
            return {
                purchaseId: purchaseData.id,
                redirectUrl: responseData.redirect_url,
                trackingId: responseData.order_tracking_id
            };
        } catch (error) {
            console.error('=== Credit Purchase Error ===');
            console.error(error);
            throw error;
        }
    };
    // -----------------------------
    // REALTIME SUBSCRIPTIONS
    // -----------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMessages.useEffect": ()=>{
            if (!userId || !currentBusiness?.id) return;
            const messageChannel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('messages_changes').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'messages',
                filter: `location_id=eq.${currentBusiness.id}`
            }, {
                "useMessages.useEffect.messageChannel": ()=>{
                    queryClient.invalidateQueries({
                        queryKey: messagesQueryKey
                    });
                }
            }["useMessages.useEffect.messageChannel"]).subscribe();
            const templateChannel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('templates_changes').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'message_templates',
                filter: `location_id=eq.${currentBusiness.id}`
            }, fetchTemplates).subscribe();
            const creditsChannel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('credits_changes').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'business_profiles',
                filter: `id=eq.${currentProfile?.id}`
            }, fetchLiveCredits).subscribe();
            return ({
                "useMessages.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(messageChannel);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(templateChannel);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(creditsChannel);
                }
            })["useMessages.useEffect"];
        }
    }["useMessages.useEffect"], [
        userId,
        currentBusiness?.id,
        currentProfile?.id
    ]);
    // -----------------------------
    // INITIAL LOAD
    // -----------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMessages.useEffect": ()=>{
            if (userId && currentBusiness?.id) {
                // Background load ancillary data; messages handled by React Query
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
    // Derived loading: only true on initial message fetch with no cached data
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
            fetchMessages();
            fetchTemplates();
            fetchPurchases();
            fetchLiveCredits();
        }
    };
};
_s(useMessages, "oR9uQuFHuaeZ3kXzmQii1tDaY10=", false, function() {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$df9258__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:df9258 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$10a9a5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:10a9a5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b22fbc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b22fbc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ec2d05__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:ec2d05 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
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
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const loadCategories = async ()=>{
        if (!currentBusiness) {
            setCategories([]);
            setIsLoading(false);
            return;
        }
        try {
            setIsLoading(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$df9258__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCustomerCategoriesAction"])(currentBusiness.id);
            if (!result.success) throw new Error(result.error);
            const formattedCategories = (result.data || []).map((category)=>({
                    id: category.id,
                    name: category.name,
                    isDefault: category.isDefault,
                    createdAt: new Date(category.createdAt),
                    updatedAt: new Date(category.updatedAt)
                }));
            setCategories(formattedCategories);
        } catch (error) {
            console.error('Error loading customer categories:', error);
            toast({
                title: "Error",
                description: "Failed to load customer categories. Please try again.",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    const createCategory = async (name)=>{
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$10a9a5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCustomerCategoryAction"])(currentBusiness.id, user.id, name);
            if (!result.success || !result.data) throw new Error(result.error || 'Failed to create category');
            const data = result.data;
            await loadCategories();
            toast({
                title: "Success",
                description: "Customer category created successfully"
            });
            return data;
        } catch (error) {
            console.error('Error creating customer category:', error);
            toast({
                title: "Error",
                description: "Failed to create customer category. Please try again.",
                variant: "destructive"
            });
            return null;
        }
    };
    const updateCategory = async (id, name)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b22fbc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCustomerCategoryAction"])(id, name);
            if (!result.success) throw new Error(result.error || 'Failed to update category');
            await loadCategories();
            toast({
                title: "Success",
                description: "Customer category updated successfully"
            });
            return true;
        } catch (error) {
            console.error('Error updating customer category:', error);
            toast({
                title: "Error",
                description: "Failed to update customer category. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    const deleteCategory = async (id)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ec2d05__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCustomerCategoryAction"])(id);
            if (!result.success) throw new Error(result.error || 'Failed to delete category');
            await loadCategories();
            toast({
                title: "Success",
                description: "Customer category deleted successfully"
            });
            return true;
        } catch (error) {
            console.error('Error deleting customer category:', error);
            toast({
                title: "Error",
                description: "Failed to delete customer category. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCustomerCategories.useEffect": ()=>{
            loadCategories();
        }
    }["useCustomerCategories.useEffect"], [
        currentBusiness?.id
    ]);
    return {
        categories,
        isLoading,
        createCategory,
        updateCategory,
        deleteCategory,
        loadCategories
    };
};
_s(useCustomerCategories, "O4c065o2stsxCArAc1mEUDievd8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
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
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales_categories').select('*').eq('location_id', currentBusiness.id).order('name');
            if (error) throw error;
            setCategories(data || []);
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales_categories').insert({
                name,
                user_id: user.id,
                location_id: currentBusiness.id
            });
            if (error) throw error;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Success",
                description: "Sales category created successfully"
            });
            fetchCategories();
            return true;
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales_categories').update({
                name
            }).eq('id', id);
            if (error) throw error;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Success",
                description: "Sales category updated successfully"
            });
            fetchCategories();
            return true;
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales_categories').delete().eq('id', id);
            if (error) throw error;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Success",
                description: "Sales category deleted successfully"
            });
            fetchCategories();
            return true;
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
            {
                name: 'Retail',
                is_default: true
            },
            {
                name: 'Online',
                is_default: true
            },
            {
                name: 'Wholesale',
                is_default: true
            }
        ];
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales_categories').insert(defaultCategories.map((category)=>({
                    ...category,
                    user_id: user.id,
                    location_id: currentBusiness.id
                })));
            if (error) throw error;
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

//# sourceMappingURL=src_hooks_a98086c2._.js.map