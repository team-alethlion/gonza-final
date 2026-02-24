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
"[project]/src/hooks/useStockHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStockHistory",
    ()=>useStockHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f1ad99__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f1ad99 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$05d61d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:05d61d [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3e62f2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:3e62f2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0daaeb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:0daaeb [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useStockHistory = (userId, productId)=>{
    _s();
    const [stockHistory, setStockHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const loadStockHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStockHistory.useCallback[loadStockHistory]": async ()=>{
            if (!userId || !currentBusiness) {
                setStockHistory([]);
                setIsLoading(false);
                return;
            }
            try {
                setIsLoading(true);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f1ad99__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getStockHistoryAction"])(currentBusiness.id, productId);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$05d61d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createStockHistoryAction"])({
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0daaeb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteStockHistoryEntriesByReferenceAction"])(referenceId, currentBusiness.id);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3e62f2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["recalculateStockChainAction"])(targetProductId, currentBusiness.id);
            if (!result.success) throw new Error(result.error);
            await loadStockHistory();
            return true;
        } catch (error) {
            console.error('Error recalculating stock chain:', error);
            return false;
        }
    };
    // Remaining repair functions (previewStockChainRepairs, repairStockChain, repairAllStockChains)
    // are complex and could be moved to server incrementally.
    // For now, I've simplified the core history management.
    return {
        stockHistory,
        isLoading,
        createStockHistoryEntry,
        deleteMultipleStockHistoryEntriesByReference,
        recalculateStockChain,
        refreshHistory: loadStockHistory
    };
};
_s(useStockHistory, "O5v37XtXENZ11imfgyOIeZC6eV8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9c2417__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:9c2417 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a288c4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:a288c4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7dee8a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:7dee8a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$73b381__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:73b381 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0774a6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:0774a6 [app-client] (ecmascript) <text/javascript>");
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9c2417__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductsAction"])({
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
            const newProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a288c4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProductAction"])({
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7dee8a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductAction"])(id, {
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$73b381__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProductAction"])(id);
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
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0774a6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductsBulkAction"])(updates.map((u)=>({
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
"[project]/src/hooks/useProductSuggestions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProductSuggestions",
    ()=>useProductSuggestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/searchUtils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useProductSuggestions = (products, searchTerm)=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get filtered suggestions based on search term
    const suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProductSuggestions.useMemo[suggestions]": ()=>{
            if (!searchTerm || searchTerm.length < 1) {
                return [];
            }
            // Use unified search utility for consistency
            const filtered = products.filter({
                "useProductSuggestions.useMemo[suggestions].filtered": (product)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchProductSearch"])(product, searchTerm)
            }["useProductSuggestions.useMemo[suggestions].filtered"]);
            // Sort by relevance (exact matches first, then starts with, then contains)
            const searchLower = searchTerm.toLowerCase();
            return filtered.sort({
                "useProductSuggestions.useMemo[suggestions]": (a, b)=>{
                    const aNameLower = String(a.name || '').toLowerCase();
                    const bNameLower = String(b.name || '').toLowerCase();
                    const aItemLower = String(a.itemNumber || '').toLowerCase();
                    const bItemLower = String(b.itemNumber || '').toLowerCase();
                    // Exact match on item number (highest priority)
                    if (aItemLower === searchLower) return -1;
                    if (bItemLower === searchLower) return 1;
                    // Exact match on name
                    if (aNameLower === searchLower) return -1;
                    if (bNameLower === searchLower) return 1;
                    // Starts with on item number
                    if (aItemLower.startsWith(searchLower) && !bItemLower.startsWith(searchLower)) return -1;
                    if (bItemLower.startsWith(searchLower) && !aItemLower.startsWith(searchLower)) return 1;
                    // Starts with on name
                    if (aNameLower.startsWith(searchLower) && !bNameLower.startsWith(searchLower)) return -1;
                    if (bNameLower.startsWith(searchLower) && !aNameLower.startsWith(searchLower)) return 1;
                    // Alphabetical by name
                    return aNameLower.localeCompare(bNameLower);
                }
            }["useProductSuggestions.useMemo[suggestions]"]).slice(0, 100); // Increased to 100 suggestions for better user experience
        }
    }["useProductSuggestions.useMemo[suggestions]"], [
        products,
        searchTerm
    ]);
    // Open panel when there are suggestions and search term is present
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useProductSuggestions.useEffect": ()=>{
            if (searchTerm.length >= 1 && suggestions.length > 0) {
                setIsOpen(true);
            } else if (searchTerm.length === 0) {
                setIsOpen(false);
            }
        }
    }["useProductSuggestions.useEffect"], [
        searchTerm,
        suggestions.length
    ]);
    const openPanel = ()=>{
        setIsOpen(true);
    };
    const closePanel = ()=>{
        setIsOpen(false);
    };
    return {
        suggestions,
        isOpen,
        openPanel,
        closePanel
    };
};
_s(useProductSuggestions, "wQsTwM25rVT8U1tCbLpsfce7oRw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useActivityLogger.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/hooks/useActivityLogger.ts'\n\nExpected a semicolon");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/hooks/useInventoryActions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInventoryActions",
    ()=>useInventoryActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0388ba__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:0388ba [app-client] (ecmascript) <text/javascript>");
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0388ba__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductsByIdsAction"])(productIds, locationId);
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
"[project]/src/hooks/useSoldItemsData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSoldItemsData",
    ()=>useSoldItemsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSalesData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateFilters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$discountCalculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/discountCalculations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
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
const useSoldItemsData = (dateFilter, dateRange, specificDate, showOnlyNotInInventory)=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { sales, isLoading: salesLoading, clearSoldItemsCache } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"])(user?.id, 'desc');
    // Fetch product inventory status for checking if items exist in inventory
    const { data: dbInventoryMap, isLoading: inventoryLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'inventory_check_map',
            currentBusiness?.id
        ],
        queryFn: {
            "useSoldItemsData.useQuery": async ()=>{
                if (!currentBusiness?.id) return new Map();
                const { data: dbProducts } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('id, name').eq('location_id', currentBusiness.id).limit(10000);
                const invMap = new Map();
                (dbProducts || []).forEach({
                    "useSoldItemsData.useQuery": (p)=>{
                        if (p.id) invMap.set(p.id, true);
                        if (p.name) invMap.set(p.name.trim().toLowerCase(), true);
                    }
                }["useSoldItemsData.useQuery"]);
                return invMap;
            }
        }["useSoldItemsData.useQuery"],
        enabled: !!currentBusiness?.id,
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000 // 30 minutes
    });
    // Calculate sold items derived from sales and inventory map
    const soldItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSoldItemsData.useMemo[soldItems]": ()=>{
            if (!sales || sales.length === 0) return [];
            let from, to;
            if (dateFilter === 'specific-date' && specificDate) {
                from = new Date(specificDate);
                from.setHours(0, 0, 0, 0);
                to = new Date(specificDate);
                to.setHours(23, 59, 59, 999);
            } else if (dateFilter === 'custom' && dateRange.from && dateRange.to) {
                from = dateRange.from;
                to = dateRange.to;
            } else {
                const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDateRangeFromFilter"])(dateFilter);
                from = range.from;
                to = range.to;
            }
            const filteredSales = sales.filter({
                "useSoldItemsData.useMemo[soldItems].filteredSales": (sale)=>{
                    const saleDate = new Date(sale.date);
                    if (dateFilter === 'specific-date' && specificDate) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(saleDate, specificDate) && sale.paymentStatus !== 'Quote';
                    }
                    return saleDate >= from && saleDate <= to && sale.paymentStatus !== 'Quote';
                }
            }["useSoldItemsData.useMemo[soldItems].filteredSales"]);
            const itemsMap = new Map();
            filteredSales.forEach({
                "useSoldItemsData.useMemo[soldItems]": (sale)=>{
                    sale.items.forEach({
                        "useSoldItemsData.useMemo[soldItems]": (item)=>{
                            const key = item.description;
                            const subtotal = item.price * item.quantity;
                            const amount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$discountCalculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateItemActualAmount"])(item);
                            const discount = subtotal - amount;
                            const cost = (item.cost || 0) * item.quantity;
                            const profit = amount - cost;
                            const actualPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$discountCalculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateItemActualPrice"])(item);
                            if (itemsMap.has(key)) {
                                const existing = itemsMap.get(key);
                                existing.totalQuantity += item.quantity;
                                existing.totalAmount += amount;
                                existing.totalCost += cost;
                                existing.totalProfit += profit;
                                existing.totalDiscount += discount;
                                existing.prices.push(actualPrice);
                                existing.costs.push(item.cost || 0);
                                if (item.productId && !existing.productIds.includes(item.productId)) {
                                    existing.productIds.push(item.productId);
                                }
                            } else {
                                itemsMap.set(key, {
                                    totalQuantity: item.quantity,
                                    totalAmount: amount,
                                    totalCost: cost,
                                    totalProfit: profit,
                                    totalDiscount: discount,
                                    prices: [
                                        actualPrice
                                    ],
                                    costs: [
                                        item.cost || 0
                                    ],
                                    productIds: item.productId ? [
                                        item.productId
                                    ] : []
                                });
                            }
                        }
                    }["useSoldItemsData.useMemo[soldItems]"]);
                }
            }["useSoldItemsData.useMemo[soldItems]"]);
            const result = Array.from(itemsMap.entries()).map({
                "useSoldItemsData.useMemo[soldItems].result": ([description, data])=>({
                        description,
                        totalQuantity: data.totalQuantity,
                        averagePrice: data.prices.reduce({
                            "useSoldItemsData.useMemo[soldItems].result": (sum, price)=>sum + price
                        }["useSoldItemsData.useMemo[soldItems].result"], 0) / data.prices.length,
                        totalAmount: data.totalAmount,
                        totalCost: data.totalCost,
                        totalProfit: data.totalProfit,
                        totalDiscount: data.totalDiscount,
                        averageCost: data.costs.reduce({
                            "useSoldItemsData.useMemo[soldItems].result": (sum, cost)=>sum + cost
                        }["useSoldItemsData.useMemo[soldItems].result"], 0) / data.costs.length,
                        productIds: data.productIds
                    })
            }["useSoldItemsData.useMemo[soldItems].result"]);
            const sortedResult = result.sort({
                "useSoldItemsData.useMemo[soldItems].sortedResult": (a, b)=>b.totalAmount - a.totalAmount
            }["useSoldItemsData.useMemo[soldItems].sortedResult"]);
            // Apply inventory filter if needed
            if (showOnlyNotInInventory && dbInventoryMap) {
                return sortedResult.filter({
                    "useSoldItemsData.useMemo[soldItems]": (item)=>{
                        const existsById = item.productIds.some({
                            "useSoldItemsData.useMemo[soldItems].existsById": (id)=>dbInventoryMap.has(id)
                        }["useSoldItemsData.useMemo[soldItems].existsById"]);
                        if (existsById) return false;
                        const trimmedDesc = item.description.trim().toLowerCase();
                        return !dbInventoryMap.has(trimmedDesc);
                    }
                }["useSoldItemsData.useMemo[soldItems]"]);
            }
            return sortedResult;
        }
    }["useSoldItemsData.useMemo[soldItems]"], [
        sales,
        dateFilter,
        dateRange,
        specificDate,
        dbInventoryMap,
        showOnlyNotInInventory
    ]);
    return {
        soldItems,
        isLoading: salesLoading || inventoryLoading,
        loadSoldItemsData: ()=>{
            // Force reload by invalidating sales query (since we rely on it)
            clearSoldItemsCache(); // This helper from useSalesData will clear caches, but real reload comes from useSalesData invalidation
        }
    };
};
_s(useSoldItemsData, "sQABeCwJFbIMTJ2ujSkNAfTqIk4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMobileOptimization.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMobileOptimization",
    ()=>useMobileOptimization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useMobileOptimization = ()=>{
    _s();
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        pageSize: 20,
        enableVirtualScrolling: false,
        reducedAnimations: false,
        compactView: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMobileOptimization.useEffect": ()=>{
            const updateConfig = {
                "useMobileOptimization.useEffect.updateConfig": ()=>{
                    const isMobile = window.innerWidth < 768;
                    const isSlowConnection = 'connection' in navigator && navigator.connection?.effectiveType === 'slow-2g' || navigator.connection?.effectiveType === '2g';
                    setConfig({
                        pageSize: isMobile ? 15 : 20,
                        enableVirtualScrolling: isMobile,
                        reducedAnimations: isSlowConnection,
                        compactView: isMobile
                    });
                }
            }["useMobileOptimization.useEffect.updateConfig"];
            updateConfig();
            window.addEventListener('resize', updateConfig);
            return ({
                "useMobileOptimization.useEffect": ()=>window.removeEventListener('resize', updateConfig)
            })["useMobileOptimization.useEffect"];
        }
    }["useMobileOptimization.useEffect"], []);
    return config;
};
_s(useMobileOptimization, "sFMr+J1dAJolDiZ67511BoV9+Ps=");
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
"[project]/src/hooks/useStockSummaryData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStockSummaryData",
    ()=>useStockSummaryData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useStockSummaryData = (dateRange)=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const fetchStockSummary = async ()=>{
        if (!user?.id || !currentBusiness?.id || !dateRange?.from || !dateRange?.to) return [];
        console.log('[StockSummary] Fetching report...', {
            location: currentBusiness.id,
            from: dateRange.from.toISOString(),
            to: dateRange.to.toISOString()
        });
        // We use "as any" to bypass strict type checking during this debug phase
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('get_stock_summary_report', {
            p_location_id: currentBusiness.id,
            p_start_date: dateRange.from.toISOString(),
            p_end_date: dateRange.to.toISOString()
        });
        if (error) {
            // LOG AS STRING SO IT IS VISIBLE IN THE USER LOGS
            console.error('[StockSummary] CRITICAL ERROR MESSAGE:', error.message);
            console.error('[StockSummary] FULL ERROR OBJECT:', JSON.stringify(error, null, 2));
            throw error;
        }
        console.log('[StockSummary] SUCCESS. Rows received:', data?.length || 0);
        return data || [];
    };
    const { data: stockSummaryData = [], isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'stockSummary',
            currentBusiness?.id,
            dateRange.from?.toISOString(),
            dateRange.to?.toISOString()
        ],
        queryFn: fetchStockSummary,
        enabled: !!user?.id && !!currentBusiness?.id && !!dateRange?.from && !!dateRange?.to,
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000
    });
    return {
        stockSummaryData,
        isLoading,
        loadStockSummaryData: refetch,
        clearCache: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'stockSummary'
                ]
            });
        },
        clearAllLocationCaches: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'stockSummary'
                ]
            });
        }
    };
};
_s(useStockSummaryData, "bDknAxpiP0elGCc4YoAZ9KwbY3c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCategories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const useCategories = (userId)=>{
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const loadCategories = async ()=>{
        try {
            if (!userId || !currentBusiness) return;
            setIsLoading(true);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('product_categories').select('*').eq('location_id', currentBusiness.id).order('name');
            if (error) {
                throw error;
            }
            const formattedCategories = data ? data.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbProductCategoryToProductCategory"])(item)) : [];
            setCategories(formattedCategories);
        } catch (error) {
            console.error('Error loading categories:', error);
            toast({
                title: "Error",
                description: "Failed to load product categories. Please try again.",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCategories.useEffect": ()=>{
            loadCategories();
        }
    }["useCategories.useEffect"], [
        userId,
        currentBusiness?.id
    ]);
    const createCategory = async (name)=>{
        try {
            if (!userId || !currentBusiness) return null;
            // Check if category already exists
            const existingCategory = categories.find((cat)=>cat.name.toLowerCase() === name.toLowerCase());
            if (existingCategory) {
                toast({
                    title: "Category exists",
                    description: "This category already exists.",
                    variant: "default"
                });
                return existingCategory;
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('product_categories').insert({
                user_id: userId,
                location_id: currentBusiness.id,
                name
            }).select().single();
            if (error) throw error;
            if (data) {
                const newCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbProductCategoryToProductCategory"])(data);
                setCategories([
                    ...categories,
                    newCategory
                ]);
                return newCategory;
            }
            return null;
        } catch (error) {
            console.error('Error creating category:', error);
            toast({
                title: "Error",
                description: "Failed to create category. Please try again.",
                variant: "destructive"
            });
            return null;
        }
    };
    const updateCategory = async (id, name)=>{
        try {
            if (!userId) return false;
            // Check if category already exists
            const existingCategory = categories.find((cat)=>cat.name.toLowerCase() === name.toLowerCase() && cat.id !== id);
            if (existingCategory) {
                toast({
                    title: "Category exists",
                    description: "Another category with this name already exists.",
                    variant: "default"
                });
                return false;
            }
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('product_categories').update({
                name
            }).eq('id', id).select().single();
            if (error) throw error;
            if (data) {
                const updatedCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbProductCategoryToProductCategory"])(data);
                setCategories(categories.map((c)=>c.id === id ? updatedCategory : c));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error updating category:', error);
            toast({
                title: "Error",
                description: "Failed to update category. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    const deleteCategory = async (id)=>{
        try {
            if (!userId) return false;
            // First check if there are any products using this category
            const { data: products, error: productsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('id').eq('category', categories.find((c)=>c.id === id)?.name || '');
            if (productsError) throw productsError;
            if (products && products.length > 0) {
                toast({
                    title: "Cannot delete category",
                    description: "This category is being used by one or more products.",
                    variant: "destructive"
                });
                return false;
            }
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('product_categories').delete().eq('id', id);
            if (error) throw error;
            setCategories(categories.filter((c)=>c.id !== id));
            return true;
        } catch (error) {
            console.error('Error deleting category:', error);
            toast({
                title: "Error",
                description: "Failed to delete category. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    return {
        categories,
        isLoading,
        loadCategories,
        createCategory,
        updateCategory,
        deleteCategory
    };
};
_s(useCategories, "2PyiX+AsPfk3V7Bgi94lbE+MRno=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useBulkProducts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBulkProducts",
    ()=>useBulkProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCategories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const useBulkProducts = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { createProduct } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])(user?.id);
    const { categories, createCategory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"])(user?.id);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const createMissingCategories = async (productCategories)=>{
        const existingCategoryNames = categories.map((cat)=>cat.name.toLowerCase());
        const uniqueCategories = [
            ...new Set(productCategories.filter((cat)=>cat.trim() !== ''))
        ];
        const missingCategories = uniqueCategories.filter((category)=>!existingCategoryNames.includes(category.toLowerCase()));
        const createdCategories = [];
        const failedCategories = [];
        for (const categoryName of missingCategories){
            try {
                const result = await createCategory(categoryName);
                if (result) {
                    createdCategories.push(categoryName);
                } else {
                    failedCategories.push(categoryName);
                }
            } catch (error) {
                console.error(`Failed to create category ${categoryName}:`, error);
                failedCategories.push(categoryName);
            }
        }
        return {
            createdCategories,
            failedCategories
        };
    };
    const bulkCreateProducts = async (products, progressCallback)=>{
        if (!user?.id) {
            throw new Error('User not authenticated');
        }
        setIsUploading(true);
        let successCount = 0;
        let failureCount = 0;
        const errors = [];
        try {
            // Extract all categories from products
            const productCategories = products.map((p)=>p.category).filter(Boolean);
            // Create missing categories first
            if (productCategories.length > 0) {
                const { createdCategories, failedCategories } = await createMissingCategories(productCategories);
                if (createdCategories.length > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Created ${createdCategories.length} new categories`);
                }
                if (failedCategories.length > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Failed to create ${failedCategories.length} categories`);
                }
            }
            // Now create products with progress tracking
            for(let i = 0; i < products.length; i++){
                const productData = products[i];
                try {
                    const result = await createProduct(productData);
                    if (result) {
                        successCount++;
                    } else {
                        failureCount++;
                        errors.push(`Failed to create product: ${productData.name}`);
                    }
                } catch (error) {
                    failureCount++;
                    errors.push(`Error creating ${productData.name}: ${error}`);
                    console.error(`Error creating product ${productData.name}:`, error);
                }
                // Update progress after each product
                if (progressCallback) {
                    progressCallback(successCount + failureCount, products.length);
                }
            }
            // Show summary toast only if no progress callback (for regular usage)
            if (!progressCallback) {
                if (successCount > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Successfully created ${successCount} products`);
                }
                if (failureCount > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`${failureCount} products failed to upload`);
                }
            }
            return {
                successCount,
                failureCount,
                errors
            };
        } finally{
            setIsUploading(false);
        }
    };
    const detectNewCategories = (products)=>{
        const existingCategoryNames = categories.map((cat)=>cat.name.toLowerCase());
        const productCategories = products.map((p)=>p.category).filter(Boolean);
        const uniqueCategories = [
            ...new Set(productCategories)
        ];
        return uniqueCategories.filter((category)=>!existingCategoryNames.includes(category.toLowerCase()));
    };
    return {
        bulkCreateProducts,
        detectNewCategories,
        isUploading
    };
};
_s(useBulkProducts, "AzeVZx6D4lgZcqja7fUXFgcXjvc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useRequisitions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRequisitions",
    ()=>useRequisitions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const mapDbRequisitionToRequisition = (dbRequisition)=>{
    return {
        id: dbRequisition.id,
        userId: dbRequisition.user_id,
        locationId: dbRequisition.location_id,
        requisitionNumber: dbRequisition.requisition_number,
        title: dbRequisition.title,
        items: dbRequisition.items,
        notes: dbRequisition.notes,
        status: dbRequisition.status,
        createdAt: new Date(dbRequisition.created_at),
        updatedAt: new Date(dbRequisition.updated_at)
    };
};
const useRequisitions = (userId, locationId)=>{
    _s();
    const [requisitions, setRequisitions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const loadRequisitions = async ()=>{
        if (!userId || !locationId) {
            setRequisitions([]);
            setIsLoading(false);
            return;
        }
        try {
            setIsLoading(true);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('requisitions').select('*').eq('user_id', userId).eq('location_id', locationId).order('created_at', {
                ascending: false
            });
            if (error) {
                throw error;
            }
            const formattedRequisitions = data ? data.map(mapDbRequisitionToRequisition) : [];
            setRequisitions(formattedRequisitions);
        } catch (error) {
            console.error('Error loading requisitions:', error);
            toast({
                title: "Error",
                description: "Failed to load requisitions. Please try again.",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRequisitions.useEffect": ()=>{
            loadRequisitions();
        }
    }["useRequisitions.useEffect"], [
        userId,
        locationId
    ]);
    const createRequisition = async (title, items, notes)=>{
        if (!userId || !locationId) return null;
        try {
            const requisitionNumber = generateRequisitionNumber();
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('requisitions').insert({
                user_id: userId,
                location_id: locationId,
                requisition_number: requisitionNumber,
                title: title,
                items: items,
                notes: notes || null,
                status: 'draft'
            }).select().single();
            if (error) {
                throw error;
            }
            const newRequisition = mapDbRequisitionToRequisition(data);
            setRequisitions((prev)=>[
                    newRequisition,
                    ...prev
                ]);
            toast({
                title: "Requisition created",
                description: `Requisition ${requisitionNumber} has been created successfully.`
            });
            return newRequisition;
        } catch (error) {
            console.error('Error creating requisition:', error);
            toast({
                title: "Error",
                description: "Failed to create requisition. Please try again.",
                variant: "destructive"
            });
            return null;
        }
    };
    const updateRequisition = async (id, updates)=>{
        if (!userId) return false;
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('requisitions').update({
                ...updates,
                items: updates.items,
                updated_at: new Date().toISOString()
            }).eq('id', id).eq('user_id', userId).select().single();
            if (error) {
                throw error;
            }
            const updatedRequisition = mapDbRequisitionToRequisition(data);
            setRequisitions((prev)=>prev.map((req)=>req.id === id ? updatedRequisition : req));
            toast({
                title: "Requisition updated",
                description: "Requisition has been updated successfully."
            });
            return true;
        } catch (error) {
            console.error('Error updating requisition:', error);
            toast({
                title: "Error",
                description: "Failed to update requisition. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    const deleteRequisition = async (id)=>{
        if (!userId) return false;
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('requisitions').delete().eq('id', id).eq('user_id', userId);
            if (error) {
                throw error;
            }
            setRequisitions((prev)=>prev.filter((req)=>req.id !== id));
            toast({
                title: "Requisition deleted",
                description: "Requisition has been deleted successfully."
            });
            return true;
        } catch (error) {
            console.error('Error deleting requisition:', error);
            toast({
                title: "Error",
                description: "Failed to delete requisition. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    return {
        requisitions,
        isLoading,
        loadRequisitions,
        createRequisition,
        updateRequisition,
        deleteRequisition
    };
};
_s(useRequisitions, "3LIPQW2+CmXIxSSJSNXk0VLw04s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
const generateRequisitionNumber = ()=>{
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const time = date.getTime().toString().slice(-4);
    return `REQ${year}${month}${day}${time}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/usePagination.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePagination",
    ()=>usePagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function usePagination({ items, itemsPerPage = 20 // Increased from 10 to 20 for better UX with larger datasets
 }) {
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePagination.useMemo[totalPages]": ()=>{
            return Math.max(1, Math.ceil(items.length / itemsPerPage));
        }
    }["usePagination.useMemo[totalPages]"], [
        items,
        itemsPerPage
    ]);
    // Adjust current page if it's out of bounds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePagination.useMemo": ()=>{
            if (currentPage > totalPages) {
                setCurrentPage(totalPages);
            }
        }
    }["usePagination.useMemo"], [
        totalPages,
        currentPage
    ]);
    const paginatedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePagination.useMemo[paginatedItems]": ()=>{
            const startIndex = (currentPage - 1) * itemsPerPage;
            return items.slice(startIndex, startIndex + itemsPerPage);
        }
    }["usePagination.useMemo[paginatedItems]"], [
        items,
        currentPage,
        itemsPerPage
    ]);
    return {
        currentPage,
        setCurrentPage,
        paginatedItems,
        totalPages
    };
}
_s(usePagination, "7IZwhTzVWbHvi/PzHyh+UJgrNQQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useInventoryData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInventoryData",
    ()=>useInventoryData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$discountCalculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/discountCalculations.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useInventoryData = (filteredProducts, sales, period)=>{
    _s();
    // Calculate date range based on selected period
    const dateRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useInventoryData.useMemo[dateRange]": ()=>{
            const now = new Date();
            switch(period){
                case 'today':
                    return {
                        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(now),
                        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(now)
                    };
                case 'yesterday':
                    const yesterday = new Date(now);
                    yesterday.setDate(yesterday.getDate() - 1);
                    return {
                        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(yesterday),
                        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(yesterday)
                    };
                case 'this-week':
                    return {
                        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(now),
                        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(now)
                    };
                case 'last-week':
                    const lastWeek = new Date(now);
                    lastWeek.setDate(lastWeek.getDate() - 7);
                    return {
                        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(lastWeek),
                        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(lastWeek)
                    };
                case 'this-month':
                    return {
                        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(now),
                        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(now)
                    };
                case 'last-month':
                    const lastMonth = new Date(now);
                    lastMonth.setMonth(lastMonth.getMonth() - 1);
                    return {
                        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(lastMonth),
                        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(lastMonth)
                    };
                case 'all-time':
                default:
                    return {
                        from: new Date(0),
                        to: now
                    };
            }
        }
    }["useInventoryData.useMemo[dateRange]"], [
        period
    ]);
    // Memoize top selling products (aggregated by item description from sales)
    const topSellingProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useInventoryData.useMemo[topSellingProducts]": ()=>{
            try {
                // Early return if no data
                if (!sales || sales.length === 0) {
                    return [];
                }
                // Filter sales by date range and payment status with safer date handling
                const filteredSales = sales.filter({
                    "useInventoryData.useMemo[topSellingProducts].filteredSales": (sale)=>{
                        try {
                            if (!sale || sale.paymentStatus === 'Quote') return false;
                            const saleDate = new Date(sale.date);
                            // Check for invalid date
                            if (isNaN(saleDate.getTime())) return false;
                            return saleDate >= dateRange.from && saleDate <= dateRange.to;
                        } catch (error) {
                            console.warn('Error filtering sale:', error);
                            return false;
                        }
                    }
                }["useInventoryData.useMemo[topSellingProducts].filteredSales"]);
                // Aggregate items by description (same logic as useSoldItemsData)
                const itemsMap = new Map();
                filteredSales.forEach({
                    "useInventoryData.useMemo[topSellingProducts]": (sale)=>{
                        try {
                            if (!sale.items || !Array.isArray(sale.items)) return;
                            sale.items.forEach({
                                "useInventoryData.useMemo[topSellingProducts]": (item)=>{
                                    const key = item.description;
                                    const subtotal = item.price * item.quantity;
                                    const amount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$discountCalculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateItemActualAmount"])(item);
                                    const discount = subtotal - amount;
                                    const cost = (item.cost || 0) * item.quantity;
                                    const profit = amount - cost;
                                    const actualPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$discountCalculations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateItemActualPrice"])(item);
                                    if (itemsMap.has(key)) {
                                        const existing = itemsMap.get(key);
                                        existing.totalQuantity += item.quantity;
                                        existing.totalAmount += amount;
                                        existing.totalCost += cost;
                                        existing.totalProfit += profit;
                                        existing.totalDiscount += discount;
                                        existing.prices.push(actualPrice);
                                        existing.costs.push(item.cost || 0);
                                        if (item.productId && !existing.productIds.includes(item.productId)) {
                                            existing.productIds.push(item.productId);
                                        }
                                    } else {
                                        itemsMap.set(key, {
                                            totalQuantity: item.quantity,
                                            totalAmount: amount,
                                            totalCost: cost,
                                            totalProfit: profit,
                                            totalDiscount: discount,
                                            prices: [
                                                actualPrice
                                            ],
                                            costs: [
                                                item.cost || 0
                                            ],
                                            productIds: item.productId ? [
                                                item.productId
                                            ] : []
                                        });
                                    }
                                }
                            }["useInventoryData.useMemo[topSellingProducts]"]);
                        } catch (error) {
                            console.warn('Error processing sale items:', error);
                        }
                    }
                }["useInventoryData.useMemo[topSellingProducts]"]);
                // Convert to array and sort by total quantity sold
                const result = Array.from(itemsMap.entries()).map({
                    "useInventoryData.useMemo[topSellingProducts].result": ([description, data])=>({
                            description,
                            totalQuantity: data.totalQuantity,
                            averagePrice: data.prices.reduce({
                                "useInventoryData.useMemo[topSellingProducts].result": (sum, price)=>sum + price
                            }["useInventoryData.useMemo[topSellingProducts].result"], 0) / data.prices.length,
                            totalAmount: data.totalAmount,
                            totalCost: data.totalCost,
                            totalProfit: data.totalProfit,
                            totalDiscount: data.totalDiscount,
                            averageCost: data.costs.reduce({
                                "useInventoryData.useMemo[topSellingProducts].result": (sum, cost)=>sum + cost
                            }["useInventoryData.useMemo[topSellingProducts].result"], 0) / data.costs.length,
                            productIds: data.productIds
                        })
                }["useInventoryData.useMemo[topSellingProducts].result"]);
                // Sort by total quantity and return all
                return result.sort({
                    "useInventoryData.useMemo[topSellingProducts]": (a, b)=>b.totalQuantity - a.totalQuantity
                }["useInventoryData.useMemo[topSellingProducts]"]);
            } catch (error) {
                console.error('Error calculating top selling products:', error);
                return [];
            }
        }
    }["useInventoryData.useMemo[topSellingProducts]"], [
        sales,
        dateRange
    ]);
    return {
        topSellingProducts,
        dateRange
    };
};
_s(useInventoryData, "ucBa+E+TTCZsPqdTkZYjr4QODIQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useGlobalInventoryStats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGlobalInventoryStats",
    ()=>useGlobalInventoryStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bad412__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:bad412 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
const useGlobalInventoryStats = (businessId)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'inventory_global_stats',
            businessId
        ],
        queryFn: {
            "useGlobalInventoryStats.useQuery": async ()=>{
                if (!businessId) {
                    return {
                        totalCostValue: 0,
                        totalStockValue: 0,
                        lowStockCount: 0,
                        outOfStockCount: 0
                    };
                }
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bad412__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getGlobalInventoryStatsAction"])(businessId);
                if (!result.success || !result.data) {
                    console.error('Error fetching global stats:', result.error);
                    throw new Error(result.error || 'Failed to fetch global stats');
                }
                return result.data;
            }
        }["useGlobalInventoryStats.useQuery"],
        enabled: !!businessId,
        staleTime: 30 * 1000,
        gcTime: 5 * 60 * 1000
    });
};
_s(useGlobalInventoryStats, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_hooks_e0d8a58f._.js.map