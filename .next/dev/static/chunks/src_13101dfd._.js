(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useExpenses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExpenses",
    ()=>useExpenses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$65c514__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:65c514 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd3eae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:fd3eae [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1212cb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:1212cb [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$73fd20__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:73fd20 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const useExpenses = ()=>{
    _s();
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const loadExpenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useExpenses.useCallback[loadExpenses]": async ()=>{
            if (!currentBusiness) {
                return [];
            }
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$65c514__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getExpensesAction"])(currentBusiness.id);
                if (!result.success || !result.data) {
                    throw new Error(result.error || 'Failed to fetch expenses');
                }
                const formattedExpenses = result.data.map({
                    "useExpenses.useCallback[loadExpenses].formattedExpenses": (expense)=>({
                            id: expense.id,
                            amount: Number(expense.amount),
                            description: expense.description,
                            category: expense.category,
                            date: new Date(expense.date),
                            paymentMethod: expense.paymentMethod,
                            personInCharge: expense.personInCharge,
                            receiptImage: expense.receiptImage,
                            cashAccountId: expense.cashAccountId,
                            cashTransactionId: expense.cashTransactionId,
                            createdAt: new Date(expense.createdAt),
                            updatedAt: new Date(expense.updatedAt)
                        })
                }["useExpenses.useCallback[loadExpenses].formattedExpenses"]);
                return formattedExpenses;
            } catch (error) {
                console.error('Error loading expenses:', error);
                toast({
                    title: "Error",
                    description: "Failed to load expenses. Please try again.",
                    variant: "destructive"
                });
                return [];
            }
        }
    }["useExpenses.useCallback[loadExpenses]"], [
        currentBusiness?.id,
        toast
    ]);
    // React Query caching
    const queryKey = [
        'expenses',
        currentBusiness?.id
    ];
    const { data: queriedExpenses, isLoading: isQueryLoading, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadExpenses,
        enabled: !!currentBusiness?.id,
        staleTime: 5 * 60_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useExpenses.useEffect": ()=>{
            if (queriedExpenses) {
                setExpenses(queriedExpenses);
            }
        }
    }["useExpenses.useEffect"], [
        queriedExpenses
    ]);
    // Only report loading when there is no cached data yet to avoid skeleton flash
    const isLoading = isQueryLoading && !queriedExpenses;
    const createExpense = async (expenseData)=>{
        if (!currentBusiness || !user) {
            toast({
                title: "Error",
                description: !currentBusiness ? "No business selected" : "User not authenticated",
                variant: "destructive"
            });
            return;
        }
        try {
            const input = {
                amount: expenseData.amount,
                description: expenseData.description,
                category: expenseData.category,
                date: expenseData.date,
                paymentMethod: expenseData.paymentMethod,
                personInCharge: expenseData.personInCharge,
                receiptImage: expenseData.receiptImage,
                cashAccountId: expenseData.cashAccountId,
                userId: user.id,
                locationId: currentBusiness.id
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd3eae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createExpenseAction"])(input, !!expenseData.linkToCash);
            if (!result.success || !result.data) {
                throw new Error(result.error);
            }
            const data = result.data;
            const newExpense = {
                id: data.id,
                amount: Number(data.amount),
                description: data.description,
                category: data.category,
                date: new Date(data.date),
                paymentMethod: data.paymentMethod,
                personInCharge: data.personInCharge,
                receiptImage: data.receiptImage,
                cashAccountId: data.cashAccountId,
                cashTransactionId: data.cashTransactionId,
                createdAt: new Date(data.createdAt),
                updatedAt: new Date(data.updatedAt)
            };
            // Update local state and cache
            setExpenses((prev)=>[
                    newExpense,
                    ...prev
                ]);
            queryClient.setQueryData(queryKey, (oldData)=>{
                return oldData ? [
                    newExpense,
                    ...oldData
                ] : [
                    newExpense
                ];
            });
            queryClient.invalidateQueries({
                queryKey
            });
            toast({
                title: "Success",
                description: "Expense created successfully"
            });
            return newExpense;
        } catch (error) {
            console.error('Error creating expense:', error);
            toast({
                title: "Error",
                description: "Failed to create expense. Please try again.",
                variant: "destructive"
            });
        }
    };
    const updateExpense = async (id, updates)=>{
        try {
            const currentExpense = expenses.find((exp)=>exp.id === id);
            if (!currentExpense) throw new Error('Expense not found');
            // Prepare update payload
            const updatePayload = {
                amount: updates.amount !== undefined ? updates.amount : currentExpense.amount,
                description: updates.description !== undefined ? updates.description : currentExpense.description,
                category: updates.category !== undefined ? updates.category : currentExpense.category,
                date: updates.date !== undefined ? updates.date : currentExpense.date,
                paymentMethod: updates.paymentMethod !== undefined ? updates.paymentMethod : currentExpense.paymentMethod,
                personInCharge: updates.personInCharge !== undefined ? updates.personInCharge : currentExpense.personInCharge,
                receiptImage: updates.receiptImage !== undefined ? updates.receiptImage : currentExpense.receiptImage,
                cashAccountId: updates.linkToCash ? updates.cashAccountId : updates.linkToCash === false ? null : currentExpense.cashAccountId
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1212cb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateExpenseAction"])(id, updatePayload, currentExpense);
            if (!result.success) throw new Error(result.error);
            queryClient.invalidateQueries({
                queryKey
            });
            toast({
                title: "Success",
                description: "Expense updated successfully"
            });
        } catch (error) {
            console.error('Error updating expense:', error);
            toast({
                title: "Error",
                description: "Failed to update expense. Please try again.",
                variant: "destructive"
            });
        }
    };
    const deleteExpense = async (id)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$73fd20__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteExpenseAction"])(id);
            if (!result.success) throw new Error(result.error);
            // Optimistic update
            setExpenses((prev)=>prev.filter((e)=>e.id !== id));
            queryClient.setQueryData(queryKey, (old)=>{
                if (!old) return old;
                return old.filter((e)=>e.id !== id);
            });
            queryClient.invalidateQueries({
                queryKey
            });
            toast({
                title: "Success",
                description: "Expense deleted successfully"
            });
            return true;
        } catch (error) {
            console.error('Error deleting expense:', error);
            toast({
                title: "Error",
                description: "Failed to delete expense. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    const refreshExpenses = async ()=>{
        queryClient.invalidateQueries({
            queryKey
        });
    };
    const createBulkExpenses = async (expensesData)=>{
        if (!currentBusiness || !user) {
            toast({
                title: "Error",
                description: !currentBusiness ? "No business selected" : "User not authenticated",
                variant: "destructive"
            });
            return;
        }
        try {
            const bulkResults = [];
            // For bulk, since each might need individual linking logic in the action, 
            // we'll loop calling the createExpenseAction or we could implement a bulk action.
            // Reusing createExpenseAction is simpler for now as it handles the transaction.
            for (const data of expensesData){
                const input = {
                    amount: data.amount,
                    description: data.description,
                    category: data.category,
                    date: data.date,
                    paymentMethod: data.paymentMethod,
                    personInCharge: data.personInCharge,
                    receiptImage: data.receiptImage,
                    cashAccountId: data.cashAccountId,
                    userId: user.id,
                    locationId: currentBusiness.id
                };
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd3eae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createExpenseAction"])(input, !!data.linkToCash);
                if (result.success && result.data) {
                    const e = result.data;
                    bulkResults.push({
                        id: e.id,
                        amount: Number(e.amount),
                        description: e.description,
                        category: e.category,
                        date: new Date(e.date),
                        paymentMethod: e.paymentMethod,
                        personInCharge: e.personInCharge,
                        receiptImage: e.receiptImage,
                        cashAccountId: e.cashAccountId,
                        cashTransactionId: e.cashTransactionId,
                        createdAt: new Date(e.createdAt),
                        updatedAt: new Date(e.updatedAt)
                    });
                }
            }
            queryClient.invalidateQueries({
                queryKey
            });
            toast({
                title: "Success",
                description: `Successfully created ${bulkResults.length} expenses`
            });
            return bulkResults;
        } catch (error) {
            console.error('Error creating bulk expenses:', error);
            toast({
                title: "Error",
                description: "Failed to create bulk expenses. Please try again.",
                variant: "destructive"
            });
            throw error;
        }
    };
    return {
        expenses,
        isLoading,
        createExpense,
        createBulkExpenses,
        updateExpense,
        deleteExpense,
        refreshExpenses
    };
};
_s(useExpenses, "fMVWHnNZpAXyeZy0hDmpSIFJAOM=", false, function() {
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
"[project]/src/hooks/useExpenseData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExpenseData",
    ()=>useExpenseData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateFilters.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useExpenseData = (expenses, dateFilter, customDateRange)=>{
    _s();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    // Memoize currency formatter
    const formatCurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useExpenseData.useMemo[formatCurrency]": ()=>{
            const currency = settings.currency || 'USD';
            return ({
                "useExpenseData.useMemo[formatCurrency]": (amount)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCashCurrency"])(amount, currency);
                }
            })["useExpenseData.useMemo[formatCurrency]"];
        }
    }["useExpenseData.useMemo[formatCurrency]"], [
        settings.currency
    ]);
    // Memoize filtered expenses based on selected date range
    const filteredExpenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useExpenseData.useMemo[filteredExpenses]": ()=>{
            if (dateFilter === 'all') {
                return expenses;
            }
            let from;
            let to;
            if (dateFilter === 'custom') {
                from = customDateRange.from;
                to = customDateRange.to;
            } else {
                const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDateRangeFromFilter"])(dateFilter);
                from = range.from;
                to = range.to;
            }
            return expenses.filter({
                "useExpenseData.useMemo[filteredExpenses]": (expense)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDateInRange"])(expense.date, from, to)
            }["useExpenseData.useMemo[filteredExpenses]"]);
        }
    }["useExpenseData.useMemo[filteredExpenses]"], [
        expenses,
        dateFilter,
        customDateRange
    ]);
    // Memoize calculated values
    const expenseStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useExpenseData.useMemo[expenseStats]": ()=>{
            const totalExpenses = filteredExpenses.reduce({
                "useExpenseData.useMemo[expenseStats].totalExpenses": (sum, expense)=>sum + expense.amount
            }["useExpenseData.useMemo[expenseStats].totalExpenses"], 0);
            const thisMonthExpenses = filteredExpenses.filter({
                "useExpenseData.useMemo[expenseStats].thisMonthExpenses": (expense)=>{
                    const expenseMonth = expense.date.getMonth();
                    const currentMonth = new Date().getMonth();
                    const expenseYear = expense.date.getFullYear();
                    const currentYear = new Date().getFullYear();
                    return expenseMonth === currentMonth && expenseYear === currentYear;
                }
            }["useExpenseData.useMemo[expenseStats].thisMonthExpenses"]).reduce({
                "useExpenseData.useMemo[expenseStats].thisMonthExpenses": (sum, expense)=>sum + expense.amount
            }["useExpenseData.useMemo[expenseStats].thisMonthExpenses"], 0);
            return {
                totalExpenses,
                thisMonthExpenses,
                transactionCount: filteredExpenses.length
            };
        }
    }["useExpenseData.useMemo[expenseStats]"], [
        filteredExpenses
    ]);
    return {
        filteredExpenses,
        expenseStats,
        formatCurrency
    };
};
_s(useExpenseData, "mXqBRKChTPQZmQGsumAFRCKoda8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useExpenseCategories.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExpenseCategories",
    ()=>useExpenseCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f06a8a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f06a8a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1d4d37__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:1d4d37 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6974b9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:6974b9 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ee5d6f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:ee5d6f [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const DEFAULT_CATEGORIES = [
    'Rent & Utilities',
    'Salaries & Wages',
    'Marketing & Advertising',
    'Office Supplies & Equipment',
    'Professional Services',
    'Cost of bringing Goods',
    'Delivery To Customer',
    'Insurance',
    'Licenses, Permits & Fees',
    'Software & Subscriptions',
    'Depreciation & Amortization',
    'Training & Development',
    'Communication',
    'Bank & Transaction Fees',
    'Miscellaneous'
];
const useExpenseCategories = ()=>{
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const loadCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useExpenseCategories.useCallback[loadCategories]": async ()=>{
            if (!currentBusiness?.id) {
                setCategories([]);
                setIsLoading(false);
                return;
            }
            try {
                setIsLoading(true);
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f06a8a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getExpenseCategoriesAction"])(currentBusiness.id);
                if (!result.success || !result.data) {
                    throw new Error(result.error || 'Failed to fetch categories');
                }
                const formattedCategories = result.data.map({
                    "useExpenseCategories.useCallback[loadCategories].formattedCategories": (category)=>({
                            ...category,
                            createdAt: new Date(category.createdAt)
                        })
                }["useExpenseCategories.useCallback[loadCategories].formattedCategories"]);
                if (formattedCategories.length === 0) {
                    await createDefaultCategories();
                    return;
                }
                setCategories(formattedCategories);
            } catch (error) {
                console.error('Error loading expense categories:', error);
                toast({
                    title: "Error",
                    description: "Failed to load expense categories",
                    variant: "destructive"
                });
            } finally{
                setIsLoading(false);
            }
        }
    }["useExpenseCategories.useCallback[loadCategories]"], [
        currentBusiness?.id,
        toast
    ]);
    const createDefaultCategories = async ()=>{
        if (!currentBusiness?.id || !user?.id) return;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ee5d6f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createDefaultExpenseCategoriesAction"])(user.id, currentBusiness.id, DEFAULT_CATEGORIES);
            if (result.success) {
                await loadCategories();
            }
        } catch (error) {
            console.error('Error creating default categories:', error);
        }
    };
    const createCategory = async (name)=>{
        if (!currentBusiness?.id || !user?.id) return null;
        try {
            // Check if category already exists (case-insensitive)
            const existingCategory = categories.find((cat)=>cat.name.toLowerCase() === name.toLowerCase());
            if (existingCategory) {
                toast({
                    title: "Category exists",
                    description: "This category already exists."
                });
                return existingCategory;
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1d4d37__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createExpenseCategoryAction"])({
                userId: user.id,
                locationId: currentBusiness.id,
                name,
                isDefault: false
            });
            if (!result.success || !result.data) throw new Error(result.error);
            const newCategory = {
                ...result.data,
                createdAt: new Date(result.data.createdAt)
            };
            setCategories((prev)=>[
                    ...prev,
                    newCategory
                ]);
            return newCategory;
        } catch (error) {
            console.error('Error creating category:', error);
            toast({
                title: "Error",
                description: "Failed to create category",
                variant: "destructive"
            });
            return null;
        }
    };
    const deleteCategory = async (id)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6974b9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteExpenseCategoryAction"])(id);
            if (!result.success) throw new Error(result.error);
            setCategories((prev)=>prev.filter((c)=>c.id !== id));
            toast({
                title: "Success",
                description: "Category deleted successfully"
            });
            return true;
        } catch (error) {
            console.error('Error deleting category:', error);
            toast({
                title: "Error",
                description: "Failed to delete category",
                variant: "destructive"
            });
            return false;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useExpenseCategories.useEffect": ()=>{
            loadCategories();
        }
    }["useExpenseCategories.useEffect"], [
        loadCategories
    ]);
    return {
        categories,
        isLoading,
        createCategory,
        deleteCategory,
        refreshCategories: loadCategories
    };
};
_s(useExpenseCategories, "TWD+QZaAhX6F2P3UXMiJprxf7J0=", false, function() {
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
"[project]/src/utils/dateFilters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDateRangeFromFilter",
    ()=>getDateRangeFromFilter,
    "isDateInRange",
    ()=>isDateInRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-client] (ecmascript)");
;
const getDateRangeFromFilter = (filter)=>{
    const now = new Date();
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(now);
    switch(filter){
        case 'today':
            return {
                from: today,
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(now)
            };
        case 'yesterday':
            const yesterday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(today, 1);
            return {
                from: yesterday,
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(yesterday)
            };
        case 'this-week':
            return {
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(now),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(now)
            };
        case 'last-week':
            const lastWeekStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subWeeks"])(now, 1));
            return {
                from: lastWeekStart,
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(lastWeekStart)
            };
        case 'this-month':
            return {
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(now),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(now)
            };
        case 'last-month':
            const lastMonthStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(now, 1));
            return {
                from: lastMonthStart,
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(lastMonthStart)
            };
        case 'this-year':
            return {
                from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfYear"])(now),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfYear"])(now)
            };
        default:
            // For 'all' or any other case, return a very wide range
            return {
                from: new Date(2000, 0, 1),
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(now)
            };
    }
};
const isDateInRange = (date, from, to)=>{
    if (!from && !to) return true;
    if (!from) return date <= to;
    if (!to) return date >= from;
    return date >= from && date <= to;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/csvParser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractUniqueCategories",
    ()=>extractUniqueCategories,
    "generateErrorLogCSV",
    ()=>generateErrorLogCSV,
    "parseCSV",
    ()=>parseCSV,
    "parseExpenseCSV",
    ()=>parseExpenseCSV,
    "parseTransactionCSV",
    ()=>parseTransactionCSV,
    "validateExpenseCSVRow",
    ()=>validateExpenseCSVRow,
    "validateTransactionCSVRow",
    ()=>validateTransactionCSVRow
]);
// Proper CSV parser that handles quoted fields with commas
const parseCSVLine = (line)=>{
    const result = [];
    let current = '';
    let inQuotes = false;
    let i = 0;
    while(i < line.length){
        const char = line[i];
        const nextChar = line[i + 1];
        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                // Escaped quote - add single quote to current field
                current += '"';
                i += 2; // Skip both quotes
                continue;
            } else {
                // Toggle quote state
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            // Field separator - push current field and reset
            result.push(current.trim());
            current = '';
        } else {
            // Regular character - add to current field
            current += char;
        }
        i++;
    }
    // Push the last field
    result.push(current.trim());
    return result;
};
const parseCSV = (csvText)=>{
    const lines = csvText.trim().split('\n');
    const headers = parseCSVLine(lines[0]).map((h)=>h.trim());
    const validRows = [];
    const errors = [];
    for(let i = 1; i < lines.length; i++){
        const values = parseCSVLine(lines[i]).map((v)=>v.trim());
        const row = {};
        // Map values to headers
        headers.forEach((header, index)=>{
            row[header] = values[index] || '';
        });
        // Validate required fields
        const rowErrors = validateCSVRow(row, i + 1);
        if (rowErrors.length === 0) {
            validRows.push(row);
        } else {
            errors.push(...rowErrors);
        }
    }
    return {
        validRows,
        errors,
        totalRows: lines.length - 1
    };
};
const parseTransactionCSV = (csvText)=>{
    const lines = csvText.trim().split('\n');
    if (lines.length < 1) return {
        validRows: [],
        errors: [],
        totalRows: 0
    };
    const headers = parseCSVLine(lines[0]).map((h)=>h.trim());
    const validRows = [];
    const errors = [];
    for(let i = 1; i < lines.length; i++){
        if (!lines[i].trim()) continue;
        const values = parseCSVLine(lines[i]).map((v)=>v.trim());
        const row = {};
        // Map values to headers
        headers.forEach((header, index)=>{
            row[header] = values[index] || '';
        });
        // Validate required fields
        const rowErrors = validateTransactionCSVRow(row, i + 1);
        if (rowErrors.length === 0) {
            validRows.push(row);
        } else {
            errors.push(...rowErrors);
        }
    }
    return {
        validRows,
        errors,
        totalRows: lines.length - 1
    };
};
const parseExpenseCSV = (csvText)=>{
    const lines = csvText.trim().split('\n');
    if (lines.length < 1) return {
        validRows: [],
        errors: [],
        totalRows: 0
    };
    const headers = parseCSVLine(lines[0]).map((h)=>h.trim());
    const validRows = [];
    const errors = [];
    for(let i = 1; i < lines.length; i++){
        if (!lines[i].trim()) continue;
        const values = parseCSVLine(lines[i]).map((v)=>v.trim());
        const row = {};
        // Map values to headers
        headers.forEach((header, index)=>{
            row[header] = values[index] || '';
        });
        // Validate required fields
        const rowErrors = validateExpenseCSVRow(row, i + 1);
        if (rowErrors.length === 0) {
            validRows.push(row);
        } else {
            errors.push(...rowErrors);
        }
    }
    return {
        validRows,
        errors,
        totalRows: lines.length - 1
    };
};
const validateCSVRow = (row, rowNumber)=>{
    const errors = [];
    // Only validate that Product Name is present
    if (!row['Product Name']?.trim()) {
        errors.push({
            row: rowNumber,
            field: 'Product Name',
            message: 'Product Name is required'
        });
    }
    return errors;
};
const validateTransactionCSVRow = (row, rowNumber)=>{
    const errors = [];
    if (!row['Amount'] || isNaN(Number(row['Amount'])) || Number(row['Amount']) <= 0) {
        errors.push({
            row: rowNumber,
            field: 'Amount',
            message: 'Amount must be a positive number'
        });
    }
    if (!row['Type'] || ![
        'cash_in',
        'cash_out',
        'transfer'
    ].includes(row['Type'].toLowerCase())) {
        errors.push({
            row: rowNumber,
            field: 'Type',
            message: 'Type must be "cash_in", "cash_out", or "transfer"'
        });
    }
    if (!row['Description']?.trim()) {
        errors.push({
            row: rowNumber,
            field: 'Description',
            message: 'Description is required'
        });
    }
    if (row['Type']?.toLowerCase() === 'transfer' && !row['To Account']) {
        errors.push({
            row: rowNumber,
            field: 'To Account',
            message: 'To Account is required for transfers'
        });
    }
    return errors;
};
const validateExpenseCSVRow = (row, rowNumber)=>{
    const errors = [];
    if (!row['Amount'] || isNaN(Number(row['Amount'])) || Number(row['Amount']) <= 0) {
        errors.push({
            row: rowNumber,
            field: 'Amount',
            message: 'Amount must be a positive number'
        });
    }
    if (!row['Description']?.trim()) {
        errors.push({
            row: rowNumber,
            field: 'Description',
            message: 'Description is required'
        });
    }
    const linkToFinance = row['Link to Finance']?.toString().toLowerCase();
    if (linkToFinance === 'true' && !row['Finance Account']?.trim()) {
        errors.push({
            row: rowNumber,
            field: 'Finance Account',
            message: 'Finance Account is required when Link to Finance is true'
        });
    }
    return errors;
};
const generateErrorLogCSV = (errors, filename = 'upload_errors.csv')=>{
    const headers = [
        'Row',
        'Field',
        'Error Message'
    ];
    const csvContent = [
        headers.join(','),
        ...errors.map((error)=>[
                error.row,
                error.field,
                `"${error.message}"`
            ].join(','))
    ].join('\n');
    const blob = new Blob([
        csvContent
    ], {
        type: 'text/csv'
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
};
const extractUniqueCategories = (validRows)=>{
    const categories = validRows.map((row)=>row['Category']?.trim()).filter((category)=>category && category !== '');
    return [
        ...new Set(categories)
    ];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/exportExpensesToCSV.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportExpensesToCSV",
    ()=>exportExpensesToCSV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
const exportExpensesToCSV = (expenses, formatCurrency, currency = 'USD')=>{
    if (expenses.length === 0) {
        alert('No expenses to export');
        return;
    }
    const headers = [
        'Date',
        'Description',
        'Category',
        'Amount',
        'Payment Method',
        'Person in Charge',
        'Cash Account',
        'Receipt Available'
    ];
    const csvData = expenses.map((expense)=>[
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(expense.date, 'yyyy-MM-dd'),
            `"${expense.description.replace(/"/g, '""')}"`,
            expense.category || '',
            expense.amount.toString(),
            expense.paymentMethod || '',
            expense.personInCharge || '',
            expense.cashAccountId ? 'Yes' : 'No',
            expense.receiptImage ? 'Yes' : 'No'
        ]);
    const csvContent = [
        headers,
        ...csvData
    ].map((row)=>row.join(',')).join('\n');
    const blob = new Blob([
        csvContent
    ], {
        type: 'text/csv;charset=utf-8;'
    });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `expenses-${currency}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'yyyy-MM-dd')}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/exportExpensesToPDF.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportExpensesToPDF",
    ()=>exportExpensesToPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
;
;
const exportExpensesToPDF = (expenses, formatCurrency, currency = 'USD', businessName, businessLogo, dateFilter, customDateRange)=>{
    if (expenses.length === 0) {
        alert('No expenses to export');
        return;
    }
    // Create PDF document in landscape orientation for better table layout
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
    });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 8;
    let yPosition = margin;
    // Business name and title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    const title = businessName || 'Business';
    doc.text(title, margin, yPosition);
    yPosition += 12;
    doc.setFontSize(16);
    doc.text('Expenses Report', margin, yPosition);
    // Report period
    yPosition += 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    let periodText = '';
    if (dateFilter && dateFilter !== 'all') {
        switch(dateFilter){
            case 'today':
                periodText = `Period: Today (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'MMM dd, yyyy')})`;
                break;
            case 'yesterday':
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);
                periodText = `Period: Yesterday (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(yesterday, 'MMM dd, yyyy')})`;
                break;
            case 'this-week':
                periodText = 'Period: This Week';
                break;
            case 'last-week':
                periodText = 'Period: Last Week';
                break;
            case 'this-month':
                periodText = `Period: This Month (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'MMMM yyyy')})`;
                break;
            case 'last-month':
                const lastMonth = new Date();
                lastMonth.setMonth(lastMonth.getMonth() - 1);
                periodText = `Period: Last Month (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(lastMonth, 'MMMM yyyy')})`;
                break;
            case 'this-year':
                periodText = `Period: This Year (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'yyyy')})`;
                break;
            case 'custom':
                if (customDateRange?.from && customDateRange?.to) {
                    periodText = `Period: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(customDateRange.from, 'MMM dd, yyyy')} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(customDateRange.to, 'MMM dd, yyyy')}`;
                } else if (customDateRange?.from) {
                    periodText = `Period: From ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(customDateRange.from, 'MMM dd, yyyy')}`;
                } else if (customDateRange?.to) {
                    periodText = `Period: Until ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(customDateRange.to, 'MMM dd, yyyy')}`;
                } else {
                    periodText = 'Period: Custom Range';
                }
                break;
            default:
                periodText = 'Period: All Time';
        }
    } else {
        periodText = 'Period: All Time';
    }
    doc.text(periodText, margin, yPosition);
    // Generation date
    yPosition += 6;
    doc.setFontSize(10);
    doc.text(`Generated on: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'MMM dd, yyyy HH:mm')}`, margin, yPosition);
    yPosition += 10;
    // Calculate totals
    const totalAmount = expenses.reduce((sum, expense)=>sum + expense.amount, 0);
    // Draw table manually using pure jsPDF vector graphics
    const tableStartY = yPosition;
    const rowHeight = 6;
    const headerHeight = 8;
    // Define column widths and positions
    const columns = [
        {
            header: 'Date',
            width: 25,
            x: margin
        },
        {
            header: 'Description',
            width: 65,
            x: margin + 25
        },
        {
            header: 'Category',
            width: 30,
            x: margin + 90
        },
        {
            header: `Amount (${currency})`,
            width: 30,
            x: margin + 120
        },
        {
            header: 'Payment',
            width: 30,
            x: margin + 150
        },
        {
            header: 'Person',
            width: 35,
            x: margin + 180
        },
        {
            header: 'Cash',
            width: 20,
            x: margin + 215
        },
        {
            header: 'Receipt',
            width: 20,
            x: margin + 235
        }
    ];
    // Draw table header
    doc.setFillColor(240, 240, 240);
    doc.rect(margin, tableStartY, pageWidth - 2 * margin, headerHeight, 'F');
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    columns.forEach((col)=>{
        doc.text(col.header, col.x + 2, tableStartY + 6);
    });
    // Draw header border
    doc.setLineWidth(0.5);
    doc.setDrawColor(0, 0, 0);
    doc.rect(margin, tableStartY, pageWidth - 2 * margin, headerHeight);
    // Draw table data
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    let currentY = tableStartY + headerHeight;
    const maxRowsPerPage = Math.floor((pageHeight - currentY - 20) / rowHeight);
    expenses.forEach((expense, index)=>{
        // Check if we need a new page
        if (index > 0 && index % maxRowsPerPage === 0) {
            doc.addPage();
            currentY = margin;
            // Redraw header on new page
            doc.setFillColor(240, 240, 240);
            doc.rect(margin, currentY, pageWidth - 2 * margin, headerHeight, 'F');
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(9);
            columns.forEach((col)=>{
                doc.text(col.header, col.x + 2, currentY + 6);
            });
            doc.rect(margin, currentY, pageWidth - 2 * margin, headerHeight);
            currentY += headerHeight;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
        }
        // Alternate row colors
        if (index % 2 === 1) {
            doc.setFillColor(248, 248, 248);
            doc.rect(margin, currentY, pageWidth - 2 * margin, rowHeight, 'F');
        }
        // Draw row data
        const rowData = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(expense.date, 'MM/dd/yyyy'),
            expense.description.length > 30 ? expense.description.substring(0, 27) + '...' : expense.description,
            expense.category || '-',
            formatCurrency(expense.amount),
            expense.paymentMethod?.substring(0, 12) || '-',
            expense.personInCharge?.substring(0, 15) || '-',
            expense.cashAccountId ? 'Yes' : 'No',
            expense.receiptImage ? 'Yes' : 'No'
        ];
        columns.forEach((col, colIndex)=>{
            const text = rowData[colIndex];
            const textX = col.x + 2;
            // Right align amount column
            if (colIndex === 3) {
                const textWidth = doc.getTextWidth(text);
                doc.text(text, col.x + col.width - textWidth - 2, currentY + 4.5);
            } else {
                doc.text(text, textX, currentY + 4.5);
            }
        });
        // Draw row border
        doc.setLineWidth(0.1);
        doc.rect(margin, currentY, pageWidth - 2 * margin, rowHeight);
        currentY += rowHeight;
    });
    // Add summary
    currentY += 8;
    // Check if summary fits on current page
    if (currentY + 25 > pageHeight - margin) {
        doc.addPage();
        currentY = margin + 12;
    }
    // Summary section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Summary', margin, currentY);
    currentY += 12;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    const summaryData = [
        [
            'Total Expenses:',
            expenses.length.toString()
        ],
        [
            'Total Amount:',
            formatCurrency(totalAmount)
        ],
        [
            'With Receipts:',
            expenses.filter((e)=>e.receiptImage).length.toString()
        ],
        [
            'Cash Linked:',
            expenses.filter((e)=>e.cashAccountId).length.toString()
        ]
    ];
    summaryData.forEach((row, index)=>{
        const y = currentY + index * 5;
        doc.setFont('helvetica', 'bold');
        doc.text(row[0], margin, y);
        doc.setFont('helvetica', 'normal');
        doc.text(row[1], margin + 50, y);
    });
    // Add page numbers and watermark to all pages
    const totalPages = doc.getNumberOfPages();
    for(let i = 1; i <= totalPages; i++){
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 20, pageHeight - 10);
        // Add watermark
        doc.setFontSize(10);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(150, 150, 150);
        doc.text('Created By Gonza Systems', margin, pageHeight - 5);
        doc.setTextColor(0, 0, 0); // Reset color
    }
    // Save the PDF
    const fileName = `expenses_report_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'yyyy-MM-dd')}.pdf`;
    doc.save(fileName);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/generateExpenseTemplate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateExpenseTemplate",
    ()=>generateExpenseTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
;
const generateExpenseTemplate = ()=>{
    const headers = [
        'Date',
        'Amount',
        'Description',
        'Category',
        'Payment Method',
        'Person In Charge',
        'Link to Finance',
        'Finance Account'
    ];
    const sampleData = [
        {
            'Date': '22/12/2025',
            'Amount': '450.00',
            'Description': 'Office Rent',
            'Category': 'Rent',
            'Payment Method': 'Bank',
            'Person In Charge': 'Admin',
            'Link to Finance': 'true',
            'Finance Account': 'Company Wallet'
        },
        {
            'Date': '23/12/2025',
            'Amount': '120.00',
            'Description': 'Stationery',
            'Category': 'Supplies',
            'Payment Method': 'Cash',
            'Person In Charge': 'Manager',
            'Link to Finance': 'false',
            'Finance Account': ''
        }
    ];
    const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(sampleData, {
        header: headers
    });
    const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "Expenses Template");
    // Generate and download
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](workbook, "expense_import_template.xlsx");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Expenses.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useExpenses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenseData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useExpenseData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/expenses/ExpenseHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/expenses/ExpenseContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpensesDateFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/expenses/ExpensesDateFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/expenses/ExpenseForm.tsx [app-client] (ecmascript)"); // Use ExpenseForm directly or in a Dialog
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseBulkAddDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/expenses/ExpenseBulkAddDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseCSVUploadDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/expenses/ExpenseCSVUploadDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseCenter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/expenses/ExpenseCenter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportExpensesToCSV$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/exportExpensesToCSV.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportExpensesToPDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/exportExpensesToPDF.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateExpenseTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/generateExpenseTemplate.ts [app-client] (ecmascript)");
;
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
;
;
;
;
;
;
;
;
const Expenses = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const { hasPermission, isLoading: profilesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { expenses, isLoading, createExpense, updateExpense, deleteExpense, refreshExpenses } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [isFormDialogOpen, setIsFormDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBulkEntryOpen, setIsBulkEntryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCSVUploadOpen, setIsCSVUploadOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dateFilter, setDateFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [customDateRange, setCustomDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        from: undefined,
        to: undefined
    });
    const { filteredExpenses, expenseStats, formatCurrency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenseData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenseData"])(expenses || [], dateFilter, customDateRange);
    const handleCreateExpense = async (data)=>{
        try {
            await createExpense(data);
            setIsFormDialogOpen(false);
        } catch (error) {
            console.error('Error creating expense:', error);
        }
    };
    const handleExportCSV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Expenses.useCallback[handleExportCSV]": ()=>{
            const currency = settings?.currency || 'USD';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportExpensesToCSV$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportExpensesToCSV"])(filteredExpenses, formatCurrency, currency);
        }
    }["Expenses.useCallback[handleExportCSV]"], [
        filteredExpenses,
        formatCurrency,
        settings?.currency
    ]);
    const handleExportPDF = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Expenses.useCallback[handleExportPDF]": ()=>{
            const currency = settings?.currency || 'USD';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportExpensesToPDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportExpensesToPDF"])(filteredExpenses, formatCurrency, currency, settings?.businessName, settings?.businessLogo, dateFilter, customDateRange);
        }
    }["Expenses.useCallback[handleExportPDF]"], [
        filteredExpenses,
        formatCurrency,
        settings,
        dateFilter,
        customDateRange
    ]);
    if (profilesLoading || isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
            }, void 0, false, {
                fileName: "[project]/src/pages/Expenses.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/pages/Expenses.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!hasPermission('expenses', 'view')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                    variant: "destructive",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Expenses.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                            children: "Access Denied"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Expenses.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            children: "You do not have permission to view expenses. Please contact your administrator if you believe this is an error."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Expenses.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Expenses.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>navigate('/'),
                        variant: "outline",
                        children: "Back to Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Expenses.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/Expenses.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/Expenses.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const canCreate = hasPermission('expenses', 'create');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onAddExpense: ()=>setIsFormDialogOpen(true),
                isRefreshing: isLoading,
                onRefresh: refreshExpenses,
                onAddBulkExpense: ()=>setIsBulkEntryOpen(true),
                onImportExpenses: ()=>setIsCSVUploadOpen(true),
                onExportCSV: handleExportCSV,
                onExportPDF: handleExportPDF,
                onDownloadTemplate: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateExpenseTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateExpenseTemplate"])(),
                canCreate: canCreate
            }, void 0, false, {
                fileName: "[project]/src/pages/Expenses.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isFormDialogOpen,
                onOpenChange: setIsFormDialogOpen,
                onSubmit: handleCreateExpense
            }, void 0, false, {
                fileName: "[project]/src/pages/Expenses.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseBulkAddDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isBulkEntryOpen,
                onOpenChange: setIsBulkEntryOpen,
                onSuccess: ()=>{
                    setIsBulkEntryOpen(false);
                    refreshExpenses();
                }
            }, void 0, false, {
                fileName: "[project]/src/pages/Expenses.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseCSVUploadDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isCSVUploadOpen,
                onOpenChange: setIsCSVUploadOpen,
                onUploadComplete: ()=>{
                    setIsCSVUploadOpen(false);
                    refreshExpenses();
                }
            }, void 0, false, {
                fileName: "[project]/src/pages/Expenses.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 md:px-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                    value: activeTab,
                    onValueChange: setActiveTab,
                    className: "w-full space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                            className: `grid w-full ${isMobile ? 'grid-cols-2 gap-1 h-auto py-1' : 'grid-cols-2'} bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-xl`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "overview",
                                    className: "flex items-center gap-2 py-2.5 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Expenses.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Overview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Expenses.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Expenses.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "expenses-list",
                                    className: "flex items-center gap-2 py-2.5 rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Expenses.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "List"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Expenses.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Expenses.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Expenses.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "overview",
                            className: "space-y-6 animate-in fade-in-50 duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseCenter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onNewEntry: ()=>setIsFormDialogOpen(true),
                                    onBulkEntry: ()=>setIsBulkEntryOpen(true),
                                    onImportCSV: ()=>setIsCSVUploadOpen(true),
                                    canCreate: canCreate
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Expenses.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpensesDateFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    dateFilter: dateFilter,
                                    dateRange: customDateRange,
                                    onDateFilterChange: setDateFilter,
                                    onDateRangeChange: setCustomDateRange
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Expenses.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    filteredExpenses: filteredExpenses,
                                    expenseStats: expenseStats,
                                    formatCurrency: formatCurrency,
                                    dateFilter: dateFilter,
                                    onUpdateExpense: updateExpense,
                                    onDeleteExpense: deleteExpense,
                                    showOnlyOverview: true
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Expenses.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Expenses.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "expenses-list",
                            className: "space-y-6 animate-in fade-in-50 duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpensesDateFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    dateFilter: dateFilter,
                                    dateRange: customDateRange,
                                    onDateFilterChange: setDateFilter,
                                    onDateRangeChange: setCustomDateRange
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Expenses.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$expenses$2f$ExpenseContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    filteredExpenses: filteredExpenses,
                                    expenseStats: expenseStats,
                                    formatCurrency: formatCurrency,
                                    dateFilter: dateFilter,
                                    onUpdateExpense: updateExpense,
                                    onDeleteExpense: deleteExpense,
                                    showOnlyList: true
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Expenses.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Expenses.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Expenses.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/Expenses.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/Expenses.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Expenses, "EIG3upkHdr5nUVfmPpctVXVAevs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenseData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenseData"]
    ];
});
_c = Expenses;
const __TURBOPACK__default__export__ = Expenses;
var _c;
__turbopack_context__.k.register(_c, "Expenses");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_13101dfd._.js.map