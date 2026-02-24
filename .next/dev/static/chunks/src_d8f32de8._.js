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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
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
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('business_settings').select('*').eq('location_id', currentBusiness.id).maybeSingle();
            if (error && error.code !== 'PGRST116') {
                console.error('Error loading business settings:', error);
                throw error;
            }
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
            const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!userData.user) {
                console.error('User not authenticated');
                throw new Error('User not authenticated');
            }
            // Prepare the metadata object with payment info
            const metadata = {
                payment_info: newSettings.hasOwnProperty('paymentInfo') ? newSettings.paymentInfo : settings.paymentInfo || '',
                default_print_format: newSettings.hasOwnProperty('defaultPrintFormat') ? newSettings.defaultPrintFormat : settings.defaultPrintFormat || 'standard',
                default_printer_name: newSettings.hasOwnProperty('defaultPrinterName') ? newSettings.defaultPrinterName : settings.defaultPrinterName || '',
                default_printer_type: newSettings.hasOwnProperty('defaultPrinterType') ? newSettings.defaultPrinterType : settings.defaultPrinterType || 'USB',
                printer_paper_size: newSettings.hasOwnProperty('printerPaperSize') ? newSettings.printerPaperSize : settings.printerPaperSize || '58mm'
            };
            const updateData = {
                user_id: userData.user.id,
                location_id: currentBusiness.id,
                business_name: newSettings.hasOwnProperty('businessName') ? newSettings.businessName : settings.businessName,
                business_address: newSettings.hasOwnProperty('businessAddress') ? newSettings.businessAddress : settings.businessAddress,
                business_phone: newSettings.hasOwnProperty('businessPhone') ? newSettings.businessPhone : settings.businessPhone,
                business_email: newSettings.hasOwnProperty('businessEmail') ? newSettings.businessEmail : settings.businessEmail,
                business_logo: newSettings.hasOwnProperty('businessLogo') ? newSettings.businessLogo : settings.businessLogo,
                currency: newSettings.hasOwnProperty('currency') ? newSettings.currency : settings.currency,
                signature: newSettings.hasOwnProperty('signature') ? newSettings.signature : settings.signature,
                metadata: metadata
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('business_settings').upsert(updateData, {
                onConflict: 'location_id'
            }).select().single();
            if (error) {
                console.error('Supabase error updating business settings:', error);
                throw error;
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
"[project]/src/utils/searchUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchProductSearch",
    ()=>matchProductSearch
]);
const matchProductSearch = (product, searchTerm)=>{
    if (!searchTerm || !searchTerm.trim()) return true;
    const words = searchTerm.toLowerCase().trim().split(/\s+/);
    const searchableText = [
        String(product.name || ''),
        String(product.description || ''),
        String(product.category || ''),
        String(product.supplier || ''),
        String(product.itemNumber || ''),
        String(product.barcode || ''),
        String(product.manufacturerBarcode || '')
    ].map((s)=>s.toLowerCase());
    // Every word in the search must match at least one searchable field
    return words.every((word)=>searchableText.some((field)=>field.includes(word)));
};
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
"[project]/src/utils/inventoryCacheUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearInventoryCaches",
    ()=>clearInventoryCaches
]);
const clearInventoryCaches = (queryClient)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // 1. Clear LocalStorage (Legacy / Manual caches)
    const keys = Object.keys(localStorage);
    const patterns = [
        'allProductsStats_',
        'stockSummary_',
        'soldItems_',
        'dashboardData_',
        'analyticsData_'
    ];
    let clearedCount = 0;
    keys.forEach((key)=>{
        if (patterns.some((pattern)=>key.startsWith(pattern))) {
            localStorage.removeItem(key);
            clearedCount++;
        }
    });
    if (clearedCount > 0) {
        console.log(`[Cache] Cleared ${clearedCount} inventory-related localStorage entries.`);
    }
    // 2. Invalidate React Query Keys (Modern State)
    if (queryClient) {
        console.log('[Cache] Invalidating React Query inventory keys...');
        // Invalidate specific keys used in the inventory module
        queryClient.invalidateQueries({
            queryKey: [
                'inventory_global_stats'
            ]
        });
        queryClient.invalidateQueries({
            queryKey: [
                'stockSummary'
            ]
        });
        queryClient.invalidateQueries({
            queryKey: [
                'products'
            ]
        });
        queryClient.invalidateQueries({
            queryKey: [
                'sales'
            ]
        });
        queryClient.invalidateQueries({
            queryKey: [
                'all-products-for-scanner'
            ]
        });
        queryClient.invalidateQueries({
            queryKey: [
                'all-products'
            ]
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:ffe39b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductsAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"407a9994ed3893150c0e9f4ad16603957f3e17e9be":"getProductsAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("407a9994ed3893150c0e9f4ad16603957f3e17e9be", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProductsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBUXNCLDhMQUFBIn0=
}),
"[project]/src/app/actions/data:f41722 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProductAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40e6e2b9a239ff8e25973462e2f5dc757886e88d1b":"createProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40e6e2b9a239ff8e25973462e2f5dc757886e88d1b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBMEdzQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:e024ee [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProductAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"602c8c093fd55f10cf6448331ef557904f8ffb11d1":"updateProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("602c8c093fd55f10cf6448331ef557904f8ffb11d1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBcUpzQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:6f6d23 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProductAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4089b1e5ac12760970ad4a96e3e40bfb40acd5e25c":"deleteProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4089b1e5ac12760970ad4a96e3e40bfb40acd5e25c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBaUxzQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:d6d5ee [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProductsBulkAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6083b4208f9a28840524118f0b30dd5fb47ce18d37":"updateProductsBulkAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6083b4208f9a28840524118f0b30dd5fb47ce18d37", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProductsBulkAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1NBOExzQixxTUFBQSJ9
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
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground",
            warning: "border-transparent bg-amber-500 text-white hover:bg-amber-600",
            success: "border-transparent bg-green-600 text-white hover:bg-green-700"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/exportBarcodeToJPEG.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportBarcodeToJPEG",
    ()=>exportBarcodeToJPEG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$barcode$2f$lib$2f$react$2d$barcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-barcode/lib/react-barcode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)");
;
;
;
;
const exportBarcodeToJPEG = async (options)=>{
    const { productName, barcodeValue, price, currency = 'KES', showPrice = true } = options;
    // Create a temporary container
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.width = '340px'; // Approx 45mm width label (scaled 2x)
    container.style.padding = '20px';
    container.style.backgroundColor = 'white';
    container.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(container);
    try {
        // Create the barcode container with styling
        const barcodeContainer = document.createElement('div');
        barcodeContainer.style.display = 'flex';
        barcodeContainer.style.flexDirection = 'column';
        barcodeContainer.style.alignItems = 'center';
        barcodeContainer.style.gap = '10px';
        // Product name
        const nameElement = document.createElement('div');
        nameElement.textContent = productName;
        nameElement.style.fontSize = '18px';
        nameElement.style.fontWeight = 'bold';
        nameElement.style.textAlign = 'center';
        nameElement.style.maxWidth = '100%';
        nameElement.style.wordWrap = 'break-word';
        barcodeContainer.appendChild(nameElement);
        // Barcode SVG container
        const svgContainer = document.createElement('div');
        svgContainer.id = 'barcode-svg-container';
        barcodeContainer.appendChild(svgContainer);
        // Price (if applicable)
        if (showPrice && price !== undefined) {
            const priceElement = document.createElement('div');
            priceElement.textContent = `${currency} ${price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;
            priceElement.style.fontSize = '18px';
            priceElement.style.fontWeight = 'bold';
            priceElement.style.textAlign = 'center';
            barcodeContainer.appendChild(priceElement);
        }
        container.appendChild(barcodeContainer);
        // Render the barcode using React
        const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRoot"])(svgContainer);
        await new Promise((resolve)=>{
            const BarcodeComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$barcode$2f$lib$2f$react$2d$barcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            root.render(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(BarcodeComponent, {
                value: barcodeValue,
                width: 2,
                height: 80,
                fontSize: 16
            }));
            // Give React time to render
            setTimeout(()=>resolve(), 100);
        });
        // Convert to canvas
        const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(container, {
            backgroundColor: '#ffffff',
            scale: 2
        });
        // Convert canvas to JPEG blob
        canvas.toBlob((blob)=>{
            if (blob) {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                const sanitizedName = productName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                link.download = `barcode_${sanitizedName}_${Date.now()}.jpg`;
                link.href = url;
                link.click();
                URL.revokeObjectURL(url);
            }
        }, 'image/jpeg', 0.95);
        // Cleanup
        root.unmount();
    } catch (error) {
        console.error('Error exporting barcode to JPEG:', error);
        throw error;
    } finally{
        // Remove the temporary container
        document.body.removeChild(container);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/exportBarcodeToPDF.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportBulkBarcodesToPDF",
    ()=>exportBulkBarcodesToPDF,
    "exportSingleBarcodeToPDF",
    ()=>exportSingleBarcodeToPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html2canvas/dist/html2canvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$barcode$2f$lib$2f$react$2d$barcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-barcode/lib/react-barcode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Render barcode to canvas and return image data URL
 */ const renderBarcodeToImage = async (options)=>{
    const { productName, barcodeValue, price, currency = 'KES', showPrice = true } = options;
    // Create a temporary container
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.width = '300px'; // Base width for 50mm label
    container.style.padding = '15px';
    container.style.backgroundColor = 'white';
    container.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(container);
    try {
        // Create the barcode container with styling
        const barcodeContainer = document.createElement('div');
        barcodeContainer.style.display = 'flex';
        barcodeContainer.style.flexDirection = 'column';
        barcodeContainer.style.alignItems = 'center';
        barcodeContainer.style.gap = '8px';
        // Product name
        const nameElement = document.createElement('div');
        nameElement.textContent = productName.length > 30 ? productName.substring(0, 27) + '...' : productName;
        nameElement.style.fontSize = '14px';
        nameElement.style.fontWeight = 'bold';
        nameElement.style.textAlign = 'center';
        nameElement.style.maxWidth = '100%';
        nameElement.style.wordWrap = 'break-word';
        barcodeContainer.appendChild(nameElement);
        // Barcode SVG container
        const svgContainer = document.createElement('div');
        svgContainer.id = 'barcode-svg-container';
        barcodeContainer.appendChild(svgContainer);
        // Price (if applicable)
        if (showPrice && price !== undefined) {
            const priceElement = document.createElement('div');
            priceElement.textContent = `${currency} ${price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;
            priceElement.style.fontSize = '14px';
            priceElement.style.fontWeight = 'bold';
            priceElement.style.textAlign = 'center';
            barcodeContainer.appendChild(priceElement);
        }
        container.appendChild(barcodeContainer);
        // Render the barcode using React
        const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRoot"])(svgContainer);
        await new Promise((resolve)=>{
            const BarcodeComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$barcode$2f$lib$2f$react$2d$barcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            root.render(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(BarcodeComponent, {
                value: barcodeValue,
                width: 1.5,
                height: 60,
                fontSize: 12
            }));
            // Give React time to render
            setTimeout(()=>resolve(), 100);
        });
        // Convert to canvas
        const canvas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html2canvas$2f$dist$2f$html2canvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(container, {
            backgroundColor: '#ffffff',
            scale: 2
        });
        // Get image data URL
        const imageDataUrl = canvas.toDataURL('image/jpeg', 0.95);
        // Cleanup
        root.unmount();
        document.body.removeChild(container);
        return imageDataUrl;
    } catch (error) {
        document.body.removeChild(container);
        throw error;
    }
};
const exportSingleBarcodeToPDF = async (options)=>{
    try {
        const imageDataUrl = await renderBarcodeToImage(options);
        // Create PDF
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        // Add title
        pdf.setFontSize(16);
        pdf.text('Product Barcode', 105, 20, {
            align: 'center'
        });
        // Add barcode image centered - Fixed 45x30mm
        const imgWidth = 45;
        const imgHeight = 30;
        const x = (210 - imgWidth) / 2; // Center on A4 width (210mm)
        const y = 40;
        pdf.addImage(imageDataUrl, 'JPEG', x, y, imgWidth, imgHeight);
        // Save PDF
        const sanitizedName = options.productName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        pdf.save(`barcode_${sanitizedName}_${Date.now()}.pdf`);
    } catch (error) {
        console.error('Error exporting barcode to PDF:', error);
        throw error;
    }
};
const exportBulkBarcodesToPDF = async (products, options = {})=>{
    const { showPrice = true, currency = 'KES' } = options;
    try {
        // Filter products with barcodes
        const productsWithBarcodes = products.filter((p)=>p.barcode);
        if (productsWithBarcodes.length === 0) {
            throw new Error('No products with barcodes to export');
        }
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        // Layout configuration - Standardized 45x30mm labels
        const labelWidth = 45;
        const labelHeight = 30;
        const spacing = 2; // Reduced spacing for better fit
        const pageWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const margin = 10;
        // Calculate how many labels fit across (columns)
        const cols = Math.floor((pageWidth - 2 * margin + spacing) / (labelWidth + spacing));
        // Calculate how many labels fit down (rows)
        const rows = Math.floor((pageHeight - 2 * margin + spacing) / (labelHeight + spacing));
        const itemsPerPage = cols * rows;
        // Calculate centered margins based on calculated grid
        const totalGridWidth = cols * labelWidth + (cols - 1) * spacing;
        const totalGridHeight = rows * labelHeight + (rows - 1) * spacing;
        const marginX = (pageWidth - totalGridWidth) / 2;
        const marginY = (pageHeight - totalGridHeight) / 2;
        let itemCount = 0;
        for (const product of productsWithBarcodes){
            if (itemCount > 0 && itemCount % itemsPerPage === 0) {
                pdf.addPage();
            }
            const pageIndex = itemCount % itemsPerPage;
            const row = Math.floor(pageIndex / cols);
            const col = pageIndex % cols;
            const x = marginX + col * (labelWidth + spacing);
            const y = marginY + row * (labelHeight + spacing);
            // Render barcode to image
            const imageDataUrl = await renderBarcodeToImage({
                productName: product.name,
                barcodeValue: product.barcode,
                price: product.sellingPrice,
                currency,
                showPrice
            });
            // Add border for visual separation (optional)
            pdf.setDrawColor(200, 200, 200);
            pdf.rect(x, y, labelWidth, labelHeight);
            // Add barcode image
            const imgWidth = labelWidth - 4;
            const imgHeight = labelHeight - 4;
            pdf.addImage(imageDataUrl, 'JPEG', x + 2, y + 2, imgWidth, imgHeight);
            itemCount++;
        }
        // Add summary on first page
        pdf.setPage(1);
        pdf.setFontSize(10);
        pdf.setTextColor(100, 100, 100);
        pdf.text(`Total barcodes: ${productsWithBarcodes.length}`, 105, 5, {
            align: 'center'
        });
        // Save PDF
        const timestamp = new Date().toISOString().split('T')[0];
        pdf.save(`barcodes_bulk_${timestamp}_${productsWithBarcodes.length}_items.pdf`);
    } catch (error) {
        console.error('Error exporting bulk barcodes to PDF:', error);
        throw error;
    }
};
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
"[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>AlertDialog,
    "AlertDialogAction",
    ()=>AlertDialogAction,
    "AlertDialogCancel",
    ()=>AlertDialogCancel,
    "AlertDialogContent",
    ()=>AlertDialogContent,
    "AlertDialogDescription",
    ()=>AlertDialogDescription,
    "AlertDialogFooter",
    ()=>AlertDialogFooter,
    "AlertDialogHeader",
    ()=>AlertDialogHeader,
    "AlertDialogOverlay",
    ()=>AlertDialogOverlay,
    "AlertDialogPortal",
    ()=>AlertDialogPortal,
    "AlertDialogTitle",
    ()=>AlertDialogTitle,
    "AlertDialogTrigger",
    ()=>AlertDialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
;
;
const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const AlertDialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = AlertDialogOverlay;
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const AlertDialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 33,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = AlertDialogContent;
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = AlertDialogHeader;
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = AlertDialogFooter;
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 78,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = AlertDialogTitle;
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const AlertDialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 90,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = AlertDialogDescription;
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
const AlertDialogAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c9 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c10 = AlertDialogAction;
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const AlertDialogCancel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c11 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 115,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c12 = AlertDialogCancel;
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "AlertDialogOverlay");
__turbopack_context__.k.register(_c1, "AlertDialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "AlertDialogContent");
__turbopack_context__.k.register(_c3, "AlertDialogHeader");
__turbopack_context__.k.register(_c4, "AlertDialogFooter");
__turbopack_context__.k.register(_c5, "AlertDialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "AlertDialogTitle");
__turbopack_context__.k.register(_c7, "AlertDialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "AlertDialogDescription");
__turbopack_context__.k.register(_c9, "AlertDialogAction$React.forwardRef");
__turbopack_context__.k.register(_c10, "AlertDialogAction");
__turbopack_context__.k.register(_c11, "AlertDialogCancel$React.forwardRef");
__turbopack_context__.k.register(_c12, "AlertDialogCancel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/inventory/DeleteProductDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
;
;
const DeleteProductDialog = ({ open, onOpenChange, product, onConfirm })=>{
    const handleConfirm = ()=>{
        onConfirm();
        onOpenChange(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                            children: "Are you sure?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/DeleteProductDialog.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                            children: [
                                'This will delete the product "',
                                product?.name,
                                '" and all its associated data. This action cannot be undone.'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/DeleteProductDialog.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/DeleteProductDialog.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/DeleteProductDialog.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                            onClick: handleConfirm,
                            className: "bg-red-600 hover:bg-red-700",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/DeleteProductDialog.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/DeleteProductDialog.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/inventory/DeleteProductDialog.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/inventory/DeleteProductDialog.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DeleteProductDialog;
const __TURBOPACK__default__export__ = DeleteProductDialog;
var _c;
__turbopack_context__.k.register(_c, "DeleteProductDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 18,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/switch.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Switch;
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$React.forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/inventory/ProductDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// @ts-ignore - react-barcode may not have types installed
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$barcode$2f$lib$2f$react$2d$barcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-barcode/lib/react-barcode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportBarcodeToJPEG$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/exportBarcodeToJPEG.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportBarcodeToPDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/exportBarcodeToPDF.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFinancialVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFinancialVisibility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$DeleteProductDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inventory/DeleteProductDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStockHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
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
;
;
const ProductDetails = ({ product, stockHistory, isLoadingHistory, onStockUpdate })=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { updateProduct, deleteProduct } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])(user?.id);
    const { createStockHistoryEntry, stockHistory: allStockHistory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockHistory"])(user?.id, product.id);
    const { hasPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const [deleteDialogOpen, setDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [adjustmentType, setAdjustmentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Stock In');
    const [adjustmentQuantity, setAdjustmentQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [adjustmentReason, setAdjustmentReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [adjustmentDate, setAdjustmentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split('T')[0]);
    const [adjustmentTime, setAdjustmentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toTimeString().split(' ')[0]);
    const [isApplying, setIsApplying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [barcodeDialogOpen, setBarcodeDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPriceOnBarcode, setShowPriceOnBarcode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [printQuantity, setPrintQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { formatFinancial, canViewCostPrice, canViewProfit, canViewSellingPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFinancialVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinancialVisibility"])();
    const handleDeleteProduct = async ()=>{
        const result = await deleteProduct(product.id);
        if (result) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Product deleted successfully");
            navigate('/inventory');
            return true;
        }
        return false;
    };
    const handleDuplicateProduct = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Duplicating product...");
        // Navigate to new product page with product data for duplication
        navigate('/inventory/new', {
            state: {
                duplicateData: {
                    name: `${product.name} (Copy)`,
                    description: product.description,
                    category: product.category,
                    supplier: product.supplier,
                    costPrice: product.costPrice,
                    sellingPrice: product.sellingPrice,
                    imageUrl: product.imageUrl,
                    createdAt: product.createdAt,
                    minimumStock: product.minimumStock
                }
            }
        });
    };
    const getStockStatusBadge = ()=>{
        if (product.quantity === 0) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "destructive",
                className: "text-sm",
                children: "Out of stock"
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                lineNumber: 101,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (product.quantity <= product.minimumStock) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "warning",
                className: "bg-amber-500 text-sm",
                children: "Low stock"
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                lineNumber: 105,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "success",
            className: "bg-green-600 text-sm",
            children: "In stock"
        }, void 0, false, {
            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
            lineNumber: 108,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Get the initial stock date (chronologically first entry)
    const getInitialStockDate = ()=>{
        const historyToCheck = stockHistory.length > 0 ? stockHistory : allStockHistory;
        if (historyToCheck.length === 0) return null;
        const sortedHistory = [
            ...historyToCheck
        ].sort((a, b)=>a.createdAt.getTime() - b.createdAt.getTime());
        return sortedHistory[0]?.createdAt || null;
    };
    const validateAdjustmentDateTime = (dateStr, timeStr)=>{
        if (!dateStr) return '';
        const initialStockDate = getInitialStockDate();
        if (!initialStockDate) return '';
        // Create the proposed datetime with selected date and time
        const [year, month, day] = dateStr.split('-').map(Number);
        const timeParts = timeStr.split(':').map(Number);
        const [hours, minutes, seconds = 0] = timeParts;
        const proposedDateTime = new Date(year, month - 1, day, hours, minutes, seconds);
        if (proposedDateTime < initialStockDate) {
            return `Date and time cannot be before the initial stock date and time (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(initialStockDate, 'PPP p')})`;
        }
        return '';
    };
    const handleStockAdjustment = async ()=>{
        if (!adjustmentQuantity || adjustmentQuantity <= 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid quantity greater than zero");
            return;
        }
        // Validate adjustment date and time
        const dateTimeError = validateAdjustmentDateTime(adjustmentDate, adjustmentTime);
        if (dateTimeError) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(dateTimeError);
            return;
        }
        setIsApplying(true);
        try {
            const previousQuantity = product.quantity;
            let newQuantity = previousQuantity;
            // Use standardized reason format
            let changeReason = adjustmentReason.trim() ? `${adjustmentType}: ${adjustmentReason}` : adjustmentType;
            if (adjustmentType === 'Stock In') {
                newQuantity = previousQuantity + adjustmentQuantity;
            } else if (adjustmentType === 'Stock Out') {
                newQuantity = Math.max(0, previousQuantity - adjustmentQuantity);
                if (newQuantity === 0 && previousQuantity < adjustmentQuantity) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning(`Attempted to remove ${adjustmentQuantity} items but only ${previousQuantity} were available. Stock is now 0.`);
                }
            }
            // Create proper datetime for the adjustment using selected date and time
            const [year, month, day] = adjustmentDate.split('-').map(Number);
            const timeParts = adjustmentTime.split(':').map(Number);
            const [hours, minutes, seconds = 0] = timeParts;
            const adjustmentDateTime = new Date(year, month - 1, day, hours, minutes, seconds);
            // Create the stock history entry which will automatically recalculate the stock chain
            const success = await createStockHistoryEntry(product.id, previousQuantity, newQuantity, changeReason, undefined, adjustmentDateTime, undefined, product.name);
            if (success) {
                // IMPORTANT: Also update the product record directly to ensure consistency
                const updated = await updateProduct(product.id, {
                    quantity: newQuantity
                }, undefined, false, 'skip-history');
                if (updated) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Stock updated successfully");
                    if (onStockUpdate) {
                        onStockUpdate();
                    }
                    setAdjustmentQuantity(0);
                    setAdjustmentReason('');
                    setAdjustmentDate(new Date().toISOString().split('T')[0]);
                    setAdjustmentTime(new Date().toTimeString().split(' ')[0]);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("History logged, but failed to update product quantity.");
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update stock history");
            }
        } catch (error) {
            console.error('Error applying stock adjustment:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to apply stock adjustment. Please try again.");
        } finally{
            setIsApplying(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border border-gray-200 rounded-lg p-3 md:p-4 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col space-y-3 lg:flex-row lg:justify-between lg:items-center lg:space-y-0 lg:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>navigate('/products'),
                                    className: "flex items-center gap-2 hover:bg-gray-50 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Back to Products"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: onStockUpdate,
                                    className: "flex items-center gap-1 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Refresh Data"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:gap-2",
                            children: [
                                hasPermission('inventory', 'create') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: handleDuplicateProduct,
                                    className: "flex items-center justify-center gap-2 w-full lg:w-auto hover:bg-blue-50 hover:border-blue-300 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Duplicate"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                hasPermission('inventory', 'edit') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>navigate(`/inventory/edit/${product.id}`),
                                    className: "flex items-center justify-center gap-2 w-full lg:w-auto bg-secondary hover:bg-secondary/90 text-sm",
                                    size: "sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Edit Product"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                                    open: barcodeDialogOpen,
                                    onOpenChange: setBarcodeDialogOpen,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                className: "flex items-center justify-center gap-2 w-full lg:w-auto hover:bg-green-50 hover:border-green-300 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Barcode Label"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                            className: "sm:max-w-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                        children: "Barcode Label Preview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center justify-center py-6 bg-gray-50 rounded-lg border border-dashed",
                                                    children: product.barcode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white p-6 shadow-sm rounded-md flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg font-bold mb-2 truncate max-w-[280px]",
                                                                children: product.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$barcode$2f$lib$2f$react$2d$barcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: product.barcode,
                                                                width: 2,
                                                                height: 80,
                                                                fontSize: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            showPriceOnBarcode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg font-bold mt-2",
                                                                children: [
                                                                    settings.currency,
                                                                    " ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(product.sellingPrice)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center p-6 text-muted-foreground",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                className: "h-10 w-10 mx-auto mb-2 opacity-50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "No barcode available for this selection."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 pt-4 border-t",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            className: "text-sm font-medium",
                                                                            children: "Show Price"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                            lineNumber: 320,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground",
                                                                            children: "Include price on the printed label"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                            lineNumber: 321,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                                    checked: showPriceOnBarcode,
                                                                    onCheckedChange: setShowPriceOnBarcode
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                    lineNumber: 323,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            className: "text-sm font-medium",
                                                                            children: "Quantity to Print"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                            lineNumber: 331,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground",
                                                                            children: "Number of labels to print"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                            lineNumber: 332,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                    lineNumber: 330,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    type: "number",
                                                                    min: "1",
                                                                    className: "w-20",
                                                                    value: printQuantity,
                                                                    onChange: (e)=>setPrintQuantity(parseInt(e.target.value) || 1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    className: "w-full gap-2",
                                                                    disabled: !product.barcode,
                                                                    onClick: ()=>{
                                                                        const priceText = showPriceOnBarcode ? `TEXT 15,180,"3",0,1,1,"${settings.currency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(product.sellingPrice)}"\n` : '';
                                                                        fetch('http://localhost:5000/print/label', {
                                                                            method: 'POST',
                                                                            headers: {
                                                                                'Content-Type': 'application/json'
                                                                            },
                                                                            mode: 'cors',
                                                                            body: JSON.stringify({
                                                                                PrinterName: settings.defaultPrinterName || 'Label Printer',
                                                                                Content: `SIZE 50 mm, 30 mm\nGAP 3 mm, 0 mm\nCLS\nTEXT 15,20,"3",0,1,1,"${product.name}"\nBARCODE 15,70,"128",60,1,0,2,2,"${product.barcode}"\n${priceText}PRINT ${printQuantity}\n`
                                                                            })
                                                                        }).then(()=>{
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${printQuantity} label${printQuantity > 1 ? 's' : ''} sent to printer`);
                                                                        }).catch((err)=>{
                                                                            console.error('Failed to print label:', err);
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Printing failed. Make sure Printer Bridge is running.');
                                                                        });
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                            lineNumber: 369,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        "Print ",
                                                                        printQuantity,
                                                                        " Label",
                                                                        printQuantity > 1 ? 's' : ''
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                    lineNumber: 345,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 flex items-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "w-full border-t"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                                lineNumber: 376,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                            lineNumber: 375,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative flex justify-center text-xs uppercase",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "bg-background px-2 text-muted-foreground",
                                                                                children: "Or Download"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                                lineNumber: 379,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                            lineNumber: 378,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                    lineNumber: 374,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            className: "gap-2",
                                                                            disabled: !product.barcode || isExporting,
                                                                            onClick: async ()=>{
                                                                                setIsExporting(true);
                                                                                try {
                                                                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportBarcodeToJPEG$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportBarcodeToJPEG"])({
                                                                                        productName: product.name,
                                                                                        barcodeValue: product.barcode,
                                                                                        price: product.sellingPrice,
                                                                                        currency: settings.currency,
                                                                                        showPrice: showPriceOnBarcode
                                                                                    });
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Barcode exported as JPEG');
                                                                                } catch (error) {
                                                                                    console.error('Export failed:', error);
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to export barcode');
                                                                                } finally{
                                                                                    setIsExporting(false);
                                                                                }
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                                    lineNumber: 408,
                                                                                    columnNumber: 25
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                "JPEG"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                            lineNumber: 385,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "outline",
                                                                            className: "gap-2",
                                                                            disabled: !product.barcode || isExporting,
                                                                            onClick: async ()=>{
                                                                                setIsExporting(true);
                                                                                try {
                                                                                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportBarcodeToPDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportSingleBarcodeToPDF"])({
                                                                                        productName: product.name,
                                                                                        barcodeValue: product.barcode,
                                                                                        price: product.sellingPrice,
                                                                                        currency: settings.currency,
                                                                                        showPrice: showPriceOnBarcode
                                                                                    });
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Barcode exported as PDF');
                                                                                } catch (error) {
                                                                                    console.error('Export failed:', error);
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to export barcode');
                                                                                } finally{
                                                                                    setIsExporting(false);
                                                                                }
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                                    lineNumber: 434,
                                                                                    columnNumber: 25
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                "PDF"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                            lineNumber: 411,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "outline",
                                                                    className: "w-full",
                                                                    onClick: ()=>setBarcodeDialogOpen(false),
                                                                    children: "Close"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                    lineNumber: 439,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                hasPermission('inventory', 'delete') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>setDeleteDialogOpen(true),
                                    className: "flex items-center justify-center gap-2 w-full lg:w-auto text-red-600 hover:text-red-700 border-red-200 hover:border-red-300 hover:bg-red-50 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Delete"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                    lineNumber: 449,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Product Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        getStockStatusBadge()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row gap-6",
                                        children: [
                                            product.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:w-1/3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: product.imageUrl,
                                                    alt: product.name,
                                                    className: "w-full h-auto object-contain border rounded-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 474,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: product.imageUrl ? 'md:w-2/3' : 'w-full',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold mb-2",
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 flex flex-wrap gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                children: product.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 487,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "secondary",
                                                                children: [
                                                                    "#",
                                                                    product.itemNumber
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 488,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    product.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 mb-4",
                                                        children: product.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 492,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                        className: "grid grid-cols-2 gap-x-4 gap-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-gray-500",
                                                                children: "Item Number:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                className: "font-semibold",
                                                                children: [
                                                                    "#",
                                                                    product.itemNumber
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 497,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            product.manufacturerBarcode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                        className: "text-gray-500",
                                                                        children: "Manufacturer Barcode:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                        lineNumber: 501,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                        className: "font-semibold",
                                                                        children: product.manufacturerBarcode
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                        lineNumber: 502,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-gray-500",
                                                                children: "Quantity in Stock:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                className: "font-semibold",
                                                                children: product.quantity % 1 === 0 ? product.quantity : product.quantity.toFixed(2)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-gray-500",
                                                                children: "Minimum Stock Level:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                children: product.minimumStock
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 510,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-gray-500",
                                                                children: "Cost Price:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 512,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                children: canViewCostPrice ? `${settings.currency} ${formatFinancial(product.costPrice, 'cost')}` : '•••'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-gray-500",
                                                                children: "Selling Price:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                children: canViewSellingPrice ? `${settings.currency} ${formatFinancial(product.sellingPrice, 'selling')}` : '•••'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-gray-500",
                                                                children: "Total Cost:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                className: "font-semibold",
                                                                children: canViewCostPrice ? `${settings.currency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(product.quantity * product.costPrice)}` : '•••'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-gray-500",
                                                                children: "Profit Margin:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 521,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                children: canViewProfit ? `${((product.sellingPrice - product.costPrice) / product.sellingPrice * 100).toFixed(2)}%` : '•••'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 522,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            product.supplier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                        className: "text-gray-500",
                                                                        children: "Supplier:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                        children: product.supplier
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                        lineNumber: 531,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-gray-500",
                                                                children: "Created:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(product.createdAt, 'MMM d, yyyy')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-gray-500",
                                                                children: "Last Updated:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(product.updatedAt, 'MMM d, yyyy')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 483,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                        lineNumber: 472,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-4",
                                        children: product.quantity <= product.minimumStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-amber-50 border border-amber-200 rounded-md p-4 w-full flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "text-amber-600 h-6 w-6 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-medium text-amber-800",
                                                            children: "Low Stock Alert"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-amber-700",
                                                            children: [
                                                                "Current stock (",
                                                                product.quantity,
                                                                ") is below or equal to the minimum threshold (",
                                                                product.minimumStock,
                                                                ")."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                            lineNumber: 546,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                        lineNumber: 544,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-lg",
                                        children: "Stock Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                        lineNumber: 563,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                    lineNumber: 562,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: hasPermission('inventory', 'stock_adjustment') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Adjustment Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-4 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                type: "button",
                                                                variant: adjustmentType === 'Stock In' ? 'default' : 'outline',
                                                                onClick: ()=>setAdjustmentType('Stock In'),
                                                                className: `w-full ${adjustmentType === 'Stock In' ? 'bg-orange-600 hover:bg-orange-700' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                        lineNumber: 577,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Stock In"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                type: "button",
                                                                variant: adjustmentType === 'Stock Out' ? 'default' : 'outline',
                                                                onClick: ()=>setAdjustmentType('Stock Out'),
                                                                className: `w-full ${adjustmentType === 'Stock Out' ? 'bg-orange-600 hover:bg-orange-700' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                        lineNumber: 586,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Stock Out"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 580,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 568,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Quantity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "number",
                                                        min: "0.01",
                                                        step: "0.01",
                                                        value: adjustmentQuantity || '',
                                                        onChange: (e)=>setAdjustmentQuantity(parseFloat(e.target.value) || 0),
                                                        placeholder: "Enter quantity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 592,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium mb-1",
                                                        children: "Reason (Optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "text",
                                                        value: adjustmentReason,
                                                        onChange: (e)=>setAdjustmentReason(e.target.value),
                                                        placeholder: "e.g., Weekly restock, Damaged goods",
                                                        maxLength: 100
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 604,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium mb-1",
                                                                children: "Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 617,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "date",
                                                                value: adjustmentDate,
                                                                onChange: (e)=>setAdjustmentDate(e.target.value),
                                                                min: product.createdAt ? new Date(product.createdAt).toISOString().split('T')[0] : undefined,
                                                                max: new Date().toISOString().split('T')[0],
                                                                className: validateAdjustmentDateTime(adjustmentDate, adjustmentTime) ? 'border-destructive border-2 bg-destructive/5' : ''
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 618,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium mb-1",
                                                                children: "Time"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 628,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "time",
                                                                step: "1",
                                                                value: adjustmentTime,
                                                                onChange: (e)=>setAdjustmentTime(e.target.value),
                                                                className: validateAdjustmentDateTime(adjustmentDate, adjustmentTime) ? 'border-destructive border-2 bg-destructive/5' : ''
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                                lineNumber: 629,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 615,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            validateAdjustmentDateTime(adjustmentDate, adjustmentTime) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-destructive mt-1",
                                                children: validateAdjustmentDateTime(adjustmentDate, adjustmentTime)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 639,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleStockAdjustment,
                                                disabled: isApplying || adjustmentQuantity <= 0 || !!validateAdjustmentDateTime(adjustmentDate, adjustmentTime),
                                                className: "w-full bg-orange-600 hover:bg-orange-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                        lineNumber: 647,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    isApplying ? 'Applying...' : `Apply ${adjustmentType}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 642,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                        lineNumber: 567,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-4 text-center space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "h-8 w-8 text-muted-foreground mx-auto opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 653,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "You do not have permission to perform stock adjustments."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                                lineNumber: 654,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                        lineNumber: 652,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                            lineNumber: 561,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                        lineNumber: 560,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$DeleteProductDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: deleteDialogOpen,
                onOpenChange: setDeleteDialogOpen,
                product: product,
                onConfirm: handleDeleteProduct
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductDetails.tsx",
                lineNumber: 664,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/inventory/ProductDetails.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductDetails, "3W2grjHzhVMfBxXH5QwtxzvsGC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockHistory"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFinancialVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinancialVisibility"]
    ];
});
_c = ProductDetails;
const __TURBOPACK__default__export__ = ProductDetails;
var _c;
__turbopack_context__.k.register(_c, "ProductDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/inventory/EditStockHistoryDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
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
const EditStockHistoryDialog = ({ open, onOpenChange, entry, onConfirm, isInitialStock = false, stockHistory = [], productCreatedAt })=>{
    _s();
    const [quantityChange, setQuantityChange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [newReason, setNewReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { hasPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    // Get the initial stock date (chronologically first entry)
    const getInitialStockDate = ()=>{
        if (stockHistory.length === 0) return null;
        const sortedHistory = [
            ...stockHistory
        ].sort((a, b)=>a.createdAt.getTime() - b.createdAt.getTime());
        return sortedHistory[0]?.createdAt || null;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditStockHistoryDialog.useEffect": ()=>{
            if (entry) {
                setQuantityChange(entry.newQuantity - entry.oldQuantity);
                setNewReason(entry.changeReason);
                setValidationError(''); // Clear validation error when entry changes
            }
        }
    }["EditStockHistoryDialog.useEffect"], [
        entry
    ]);
    const validateQuantityChange = (newChange, currentChange)=>{
        // If current change is negative, don't allow changing to positive
        if (currentChange < 0 && newChange > 0) {
            return 'Cannot change from negative to positive value.';
        }
        // If current change is positive, don't allow changing to negative
        if (currentChange > 0 && newChange < 0) {
            return 'Cannot change from positive to negative value.';
        }
        return '';
    };
    const handleQuantityChange = (value)=>{
        // Always allow empty string so users can clear the field
        if (value === '') {
            setQuantityChange('');
            setValidationError('');
            return;
        }
        const numericValue = parseInt(value) || 0;
        const currentChange = quantityChange === '' ? 0 : quantityChange;
        const error = validateQuantityChange(numericValue, currentChange);
        // Only update the input if validation passes
        if (!error) {
            setQuantityChange(numericValue);
            setValidationError('');
        } else {
            // Show validation error but don't update the input
            setValidationError(error);
        }
    };
    const handleReasonChange = (value)=>{
        setNewReason(value);
    };
    const handleSubmit = async (skipDateUpdate = false)=>{
        if (!entry) return;
        const changeAmount = quantityChange === '' ? 0 : quantityChange;
        // Validate quantity change before submitting
        const originalChange = entry.newQuantity - entry.oldQuantity;
        const error = validateQuantityChange(changeAmount, originalChange);
        if (error) {
            toast({
                title: "Invalid quantity change",
                description: error,
                variant: "destructive"
            });
            return;
        }
        const newQuantity = entry.oldQuantity + changeAmount;
        if (!newReason.trim()) {
            toast({
                title: "Invalid reason",
                description: "Please provide a reason for this stock change",
                variant: "destructive"
            });
            return;
        }
        setIsSubmitting(true);
        try {
            const success = await onConfirm(entry.id, newQuantity, newReason.trim());
            if (success) {
                toast({
                    title: "Stock history updated",
                    description: "The stock history entry has been updated successfully."
                });
                onOpenChange(false);
            } else {
                toast({
                    title: "Update failed",
                    description: "Failed to update stock history entry. Please try again.",
                    variant: "destructive"
                });
            }
        } catch (error) {
            console.error('Error updating stock history:', error);
            toast({
                title: "Error",
                description: "An error occurred while updating the stock history.",
                variant: "destructive"
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleCancel = ()=>{
        onOpenChange(false);
    };
    if (!entry) return null;
    // Check if this entry was created by a sale operation
    const isSaleRelatedEntry = (entry)=>{
        const saleReasons = [
            'Sale',
            'Delete sale',
            'Deleted Sale',
            'Sale qty edit'
        ];
        return saleReasons.some((reason)=>entry.changeReason.toLowerCase().includes(reason.toLowerCase()));
    };
    const formatChangeReason = (reason)=>{
        return reason.replace('Deleted sale', 'Deleted Sale');
    };
    // If this is initial stock, show form with date editing enabled but with validation
    if (isInitialStock) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: open,
            onOpenChange: onOpenChange,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Edit Initial Stock Entry"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: "This is the initial stock entry. You can modify quantity, reason, and date, but the date must be earlier than all other stock transactions."
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "quantity",
                                        children: "Quantity Change"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "quantity",
                                        type: "number",
                                        value: quantityChange,
                                        onChange: (e)=>handleQuantityChange(e.target.value),
                                        className: validationError ? 'border-destructive border-2 bg-destructive/5 focus:border-destructive focus:ring-destructive' : ''
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    validationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-destructive",
                                        children: validationError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "reason",
                                        children: "Change Reason"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "reason",
                                        value: newReason,
                                        onChange: (e)=>setNewReason(e.target.value),
                                        placeholder: "Enter reason for stock change"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-2 mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: handleCancel,
                                disabled: isSubmitting,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>handleSubmit(),
                                disabled: isSubmitting || !hasPermission('inventory', 'stock_adjustment'),
                                children: isSubmitting ? 'Updating...' : 'Update Entry'
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // If this is a sale-related entry, show a restricted message
    if (isSaleRelatedEntry(entry)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: open,
            onOpenChange: onOpenChange,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "Cannot Edit Sale-Related Entry"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: "This stock history entry was created by a sales operation and can only be modified through the Edit Sale form."
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted p-3 rounded-lg space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: "Entry Details:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Date:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(entry.createdAt, 'PPP p')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Change:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    entry.oldQuantity,
                                                    " → ",
                                                    entry.newQuantity
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Reason:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    formatChangeReason(entry.changeReason)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-50 border border-blue-200 p-3 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-blue-800 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Note:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " To modify this entry, please use the Edit Sale form in the Sales section."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-2 mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
            lineNumber: 234,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const originalChange = entry.newQuantity - entry.oldQuantity;
    const changeAmount = quantityChange === '' ? 0 : quantityChange;
    const newQuantity = entry.oldQuantity + changeAmount;
    const newChange = changeAmount;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Edit Stock History Entry"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Modify the details of this stock history entry. The product's current stock will be recalculated after saving."
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-muted-foreground",
                                            children: "Original"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: [
                                                entry.oldQuantity,
                                                " → ",
                                                entry.newQuantity
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-xs ${originalChange >= 0 ? 'text-green-600' : 'text-red-600'}`,
                                            children: [
                                                originalChange >= 0 ? '+' : '',
                                                originalChange
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-muted-foreground",
                                            children: "New"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: [
                                                entry.oldQuantity,
                                                " → ",
                                                newQuantity
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-xs ${newChange >= 0 ? 'text-green-600' : 'text-red-600'}`,
                                            children: [
                                                newChange >= 0 ? '+' : '',
                                                newChange
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "quantity",
                                    children: "Quantity Change"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "quantity",
                                    type: "number",
                                    value: quantityChange,
                                    onChange: (e)=>handleQuantityChange(e.target.value),
                                    className: validationError ? 'border-destructive border-2 bg-destructive/5 focus:border-destructive focus:ring-destructive' : ''
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                entry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: [
                                        "⚠️ ",
                                        (quantityChange === '' ? 0 : quantityChange) < 0 ? "Current change is negative - you cannot change to positive values" : "Current change is positive - you cannot change to negative values"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                validationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-destructive",
                                    children: validationError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "reason",
                                    children: "Change Reason"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "reason",
                                    value: newReason,
                                    onChange: (e)=>setNewReason(e.target.value),
                                    placeholder: "Enter reason for stock change"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: handleCancel,
                            disabled: isSubmitting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>handleSubmit(),
                            disabled: isSubmitting || !hasPermission('inventory', 'stock_adjustment'),
                            children: isSubmitting ? 'Updating...' : 'Update Entry'
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
            lineNumber: 277,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/inventory/EditStockHistoryDialog.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EditStockHistoryDialog, "018KlM6EMZvnBhaZKkR94ifZgY0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"]
    ];
});
_c = EditStockHistoryDialog;
const __TURBOPACK__default__export__ = EditStockHistoryDialog;
var _c;
__turbopack_context__.k.register(_c, "EditStockHistoryDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/inventory/DeleteStockHistoryDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const DeleteStockHistoryDialog = ({ open, onOpenChange, entry, onConfirm })=>{
    _s();
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleDelete = async ()=>{
        if (!entry) return;
        setIsDeleting(true);
        try {
            const success = await onConfirm(entry.id);
            if (success) {
                toast({
                    title: "Stock history deleted",
                    description: "The stock history entry has been deleted and stock recalculated."
                });
                onOpenChange(false);
            } else {
                toast({
                    title: "Delete failed",
                    description: "Failed to delete stock history entry. Please try again.",
                    variant: "destructive"
                });
            }
        } catch (error) {
            console.error('Error deleting stock history:', error);
            toast({
                title: "Error",
                description: "An error occurred while deleting the stock history.",
                variant: "destructive"
            });
        } finally{
            setIsDeleting(false);
        }
    };
    if (!entry) return null;
    // Check if this entry was created by a sale operation
    const isSaleRelatedEntry = (entry)=>{
        const saleReasons = [
            'Sale',
            'Delete sale',
            'Deleted Sale',
            'Sale qty edit'
        ];
        return saleReasons.some((reason)=>entry.changeReason.toLowerCase().includes(reason.toLowerCase()));
    };
    const formatChangeReason = (reason)=>{
        return reason.replace('Deleted sale', 'Deleted Sale');
    };
    // If this is a sale-related entry, show a restricted message
    if (isSaleRelatedEntry(entry)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
            open: open,
            onOpenChange: onOpenChange,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "h-5 w-5 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Cannot Delete Sale-Related Entry"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "This stock history entry was created by a sales operation and cannot be deleted directly."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-muted p-3 rounded-lg space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium",
                                                children: "Entry Details:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Date:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 24
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(entry.createdAt, 'PPP p')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Change:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 24
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            entry.oldQuantity,
                                                            " → ",
                                                            entry.newQuantity
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Reason:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 24
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " ",
                                                            formatChangeReason(entry.changeReason)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 border border-blue-200 p-3 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-blue-800 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Note:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " To remove this entry, please edit or delete the corresponding sale in the Sales section."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const stockChange = entry.newQuantity - entry.oldQuantity;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "h-5 w-5 text-destructive"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Delete Stock History Entry"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Are you sure you want to delete this stock history entry? This action cannot be undone."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-muted p-3 rounded-lg space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium",
                                            children: "Entry Details:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Date:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 22
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(entry.createdAt, 'PPP p')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Change:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 22
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        entry.oldQuantity,
                                                        " → ",
                                                        entry.newQuantity
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${stockChange >= 0 ? 'text-green-600' : 'text-red-600'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Impact:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        stockChange >= 0 ? '+' : '',
                                                        stockChange,
                                                        " units"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Reason:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 22
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        formatChangeReason(entry.changeReason)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-amber-50 border border-amber-200 p-3 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-amber-800 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Warning:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " After deletion, the product's current stock will be automatically recalculated based on the remaining stock history entries."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                            disabled: isDeleting,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                            onClick: handleDelete,
                            disabled: isDeleting,
                            className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            children: isDeleting ? 'Deleting...' : 'Delete Entry'
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/inventory/DeleteStockHistoryDialog.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DeleteStockHistoryDialog, "kYKKmoSw1FjpjJWqCsahQJXMW5M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = DeleteStockHistoryDialog;
const __TURBOPACK__default__export__ = DeleteStockHistoryDialog;
var _c;
__turbopack_context__.k.register(_c, "DeleteStockHistoryDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/inventory/ProductStockHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$EditStockHistoryDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inventory/EditStockHistoryDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$DeleteStockHistoryDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inventory/DeleteStockHistoryDialog.tsx [app-client] (ecmascript)");
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
const ProductStockHistory = ({ stockHistory, isLoadingHistory, onEditStockHistory, onDeleteStockHistory, products })=>{
    _s();
    const { hasPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const [editHistoryDialog, setEditHistoryDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        entry: null
    });
    const [deleteHistoryDialog, setDeleteHistoryDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        entry: null
    });
    const [expandedSale, setExpandedSale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedManual, setExpandedManual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Check if a stock history entry was created by a sale operation
    const isSaleRelatedEntry = (entry)=>{
        const saleReasons = [
            'Sale',
            'Delete sale',
            'Deleted Sale',
            'Sale qty edit'
        ];
        return saleReasons.some((reason)=>entry.changeReason.toLowerCase().includes(reason.toLowerCase()));
    };
    const formatChangeReason = (reason)=>{
        return reason.replace('Deleted sale', 'Deleted Sale');
    };
    // Check if a stock history entry is initial stock (first entry chronologically)
    const isInitialStockEntry = (entry)=>{
        if (stockHistory.length === 0) return false;
        // Sort by creation date to find the chronologically first entry
        const sortedHistory = [
            ...stockHistory
        ].sort((a, b)=>a.createdAt.getTime() - b.createdAt.getTime());
        return sortedHistory[0]?.id === entry.id;
    };
    // Prepare unified display items
    const displayItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductStockHistory.useMemo[displayItems]": ()=>{
            const saleGroups = {};
            const singles = [];
            // 1. Organize entries
            stockHistory.forEach({
                "ProductStockHistory.useMemo[displayItems]": (entry)=>{
                    if (isSaleRelatedEntry(entry)) {
                        const key = entry.receiptNumber || entry.referenceId || entry.id;
                        if (!saleGroups[key]) saleGroups[key] = [];
                        saleGroups[key].push(entry);
                    } else {
                        singles.push(entry);
                    }
                }
            }["ProductStockHistory.useMemo[displayItems]"]);
            // 2. Create standardized items
            const items = [
                // Add sale groups
                ...Object.values(saleGroups).map({
                    "ProductStockHistory.useMemo[displayItems]": (group)=>{
                        // Sort inside group by date (Oldest -> Newest for correct timeline in details)
                        // If you want details to be Newest on top, swap a and b.
                        // User asked for "Progressive order", so let's stick to Oldest -> Newest for details too to be consistent.
                        // BUT current UI logic for "main" uses sorted[0] as display. Let's see.
                        // If I strictly follow chronological, details should be Oldest -> Newest.
                        // The previous code had `new Date(b.createdAt) - new Date(a.createdAt)` (Newest first).
                        // Let's sort Newest First for the "main" display (so we show the latest state),
                        // but for the sorting of the *Card* itself, we use the LATEST date (what is displayed) to avoid visual confusion.
                        const sortedForMain = [
                            ...group
                        ].sort({
                            "ProductStockHistory.useMemo[displayItems].sortedForMain": (a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                        }["ProductStockHistory.useMemo[displayItems].sortedForMain"]);
                        // const sortedForTimeline = [...group].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
                        return {
                            type: 'sale',
                            main: sortedForMain[0],
                            all: sortedForMain,
                            // Sort Key: Use the *displayed* date (Latest) to place it chronologically in the timeline relative to other events
                            sortDate: sortedForMain[0].createdAt
                        };
                    }
                }["ProductStockHistory.useMemo[displayItems]"]),
                // Add single entries
                ...singles.map({
                    "ProductStockHistory.useMemo[displayItems]": (entry)=>({
                            type: 'single',
                            entry,
                            sortDate: entry.createdAt
                        })
                }["ProductStockHistory.useMemo[displayItems]"])
            ];
            // 3. Sort main list Descending (Newest at Top, Oldest at Bottom)
            // Ensure progressive order from bottom to top
            return items.sort({
                "ProductStockHistory.useMemo[displayItems]": (a, b)=>{
                    const dateA = new Date(a.sortDate).getTime();
                    const dateB = new Date(b.sortDate).getTime();
                    // console.log('Sort comparison:', { dateA, dateB, diff: dateB - dateA });
                    return dateB - dateA;
                }
            }["ProductStockHistory.useMemo[displayItems]"]);
        }
    }["ProductStockHistory.useMemo[displayItems]"], [
        stockHistory
    ]);
    const stockHistoryList = isLoadingHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-pulse text-center py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500",
                children: "Loading stock history..."
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : stockHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-8 text-gray-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                size: 48,
                className: "mx-auto mb-4 opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No stock history available for this product"
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm mt-2",
                children: "Stock changes will appear here once you make adjustments"
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: displayItems.map((item)=>{
            // SALE ITEM RENDER
            if (item.type === 'sale') {
                const { main, all } = item;
                const saleKey = main.receiptNumber || main.referenceId || main.id;
                const isExpanded = expandedSale === saleKey;
                // Per-sale summary data (all is sorted Newest -> Oldest)
                const currentRef = all[0];
                const originalRef = all[all.length - 1];
                const hasHistory = all.length > 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `border rounded-lg p-4 transition-colors ${main.newQuantity > main.oldQuantity ? 'bg-green-50 border-green-200 hover:bg-green-100' : main.newQuantity < main.oldQuantity ? 'bg-red-50 border-red-200 hover:bg-red-100' : 'border-gray-200 hover:bg-gray-50'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: "text-xs",
                                                    children: [
                                                        "Sale - ",
                                                        main.receiptNumber || main.referenceId || main.id
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                hasHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "secondary",
                                                    className: "text-[10px] h-5",
                                                    children: "Edited"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1",
                                            children: [
                                                hasHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            className: "text-xs bg-muted/50 font-normal",
                                                            children: [
                                                                "Original: ",
                                                                originalRef.oldQuantity,
                                                                " → ",
                                                                originalRef.newQuantity,
                                                                " (",
                                                                originalRef.newQuantity - originalRef.oldQuantity > 0 ? '+' : '',
                                                                originalRef.newQuantity - originalRef.oldQuantity,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "secondary",
                                                            className: "text-xs font-normal",
                                                            children: [
                                                                "Current: ",
                                                                currentRef.oldQuantity,
                                                                " → ",
                                                                currentRef.newQuantity,
                                                                " (",
                                                                currentRef.newQuantity - currentRef.oldQuantity > 0 ? '+' : '',
                                                                currentRef.newQuantity - currentRef.oldQuantity,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: "text-xs bg-muted/50 font-normal",
                                                    children: [
                                                        "Qty: ",
                                                        main.oldQuantity,
                                                        " → ",
                                                        main.newQuantity,
                                                        " (",
                                                        main.newQuantity - main.oldQuantity > 0 ? '+' : '',
                                                        main.newQuantity - main.oldQuantity,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                !hasHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-500 flex items-center gap-1 ml-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "inline-block w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(main.createdAt, 'MMM d, yyyy h:mm a')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                hasHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-500 flex items-center gap-1 ml-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "inline-block w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentRef.createdAt, 'MMM d, yyyy h:mm a')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "h-8 px-2 text-xs",
                                        onClick: ()=>setExpandedSale(isExpanded ? null : saleKey),
                                        children: isExpanded ? 'Hide Details' : 'View Details'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                            lineNumber: 152,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 border-t pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold mb-2 text-sm text-muted-foreground",
                                    children: "Sale Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                    lineNumber: 209,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full text-xs border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "bg-muted/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-1 text-left",
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-1 text-left",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-1 text-left",
                                                            children: "Qty Change"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                lineNumber: 212,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: all.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b last:border-b-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-2 py-1 font-medium",
                                                                children: formatChangeReason(entry.changeReason)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-2 py-1 text-muted-foreground",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(entry.createdAt, 'MMM d, yyyy h:mm a')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-2 py-1",
                                                                children: [
                                                                    entry.oldQuantity,
                                                                    " → ",
                                                                    entry.newQuantity,
                                                                    " (",
                                                                    entry.newQuantity - entry.oldQuantity > 0 ? '+' : '',
                                                                    entry.newQuantity - entry.oldQuantity,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, entry.id, true, {
                                                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                lineNumber: 219,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                        lineNumber: 211,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                    lineNumber: 210,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                            lineNumber: 208,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, main.id, true, {
                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                    lineNumber: 146,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            } else {
                // SINGLE ENTRY RENDER
                const { entry } = item;
                const isExpanded = expandedManual === entry.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `border rounded-lg p-4 transition-colors ${entry.newQuantity > entry.oldQuantity ? 'bg-green-50 border-green-200 hover:bg-green-100' : entry.newQuantity < entry.oldQuantity ? 'bg-red-50 border-red-200 hover:bg-red-100' : 'border-gray-200 hover:bg-gray-50'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: "outline",
                                                className: "text-xs",
                                                children: [
                                                    formatChangeReason(entry.changeReason),
                                                    entry.receiptNumber && ` - #${entry.receiptNumber}`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                lineNumber: 248,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                            lineNumber: 247,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    className: "text-xs bg-muted/50 font-normal",
                                                    children: [
                                                        "Qty: ",
                                                        entry.oldQuantity,
                                                        " → ",
                                                        entry.newQuantity,
                                                        " (",
                                                        entry.newQuantity - entry.oldQuantity > 0 ? '+' : '',
                                                        entry.newQuantity - entry.oldQuantity,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-500 flex items-center gap-1 ml-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "inline-block w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(entry.createdAt, 'MMM d, yyyy h:mm a')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "h-8 px-2 text-xs",
                                            onClick: ()=>setExpandedManual(isExpanded ? null : entry.id),
                                            children: isExpanded ? 'Hide Details' : 'View Details'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                            lineNumber: 264,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isInitialStockEntry(entry) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                hasPermission('inventory', 'edit') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>setEditHistoryDialog({
                                                            open: true,
                                                            entry
                                                        }),
                                                    className: "h-8 px-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-muted-foreground px-2 py-1 bg-blue-100 text-blue-800 rounded",
                                                    children: "Initial Stock"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                hasPermission('inventory', 'edit') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>setEditHistoryDialog({
                                                            open: true,
                                                            entry
                                                        }),
                                                    className: "h-8 px-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                hasPermission('inventory', 'delete') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: ()=>setDeleteHistoryDialog({
                                                            open: true,
                                                            entry
                                                        }),
                                                    className: "h-8 px-2 text-destructive hover:text-destructive",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                    lineNumber: 263,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                            lineNumber: 245,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 border-t pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold mb-2 text-sm text-muted-foreground",
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                    lineNumber: 316,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full text-xs border",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "bg-muted/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-1 text-left",
                                                            children: "Reason"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-1 text-left",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-1 text-left",
                                                            children: "Qty Change"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                lineNumber: 319,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b last:border-b-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-1 font-medium",
                                                            children: formatChangeReason(entry.changeReason)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-1 text-muted-foreground",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(entry.createdAt, 'MMM d, yyyy h:mm a')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-1",
                                                            children: [
                                                                entry.oldQuantity,
                                                                " → ",
                                                                entry.newQuantity,
                                                                " (",
                                                                entry.newQuantity - entry.oldQuantity > 0 ? '+' : '',
                                                                entry.newQuantity - entry.oldQuantity,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                                lineNumber: 326,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                        lineNumber: 318,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                    lineNumber: 317,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                            lineNumber: 315,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, entry.id, true, {
                    fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                    lineNumber: 239,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            }
        })
    }, void 0, false, {
        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Stock History",
                                    stockHistory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "secondary",
                                        className: "ml-2",
                                        children: [
                                            stockHistory.length,
                                            " entries"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                        lineNumber: 353,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: stockHistoryList
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$EditStockHistoryDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: editHistoryDialog.open,
                onOpenChange: (open)=>setEditHistoryDialog({
                        open,
                        entry: null
                    }),
                entry: editHistoryDialog.entry,
                onConfirm: onEditStockHistory,
                isInitialStock: editHistoryDialog.entry ? isInitialStockEntry(editHistoryDialog.entry) : false,
                stockHistory: stockHistory,
                productCreatedAt: editHistoryDialog.entry ? (()=>{
                    const product = products.find((p)=>p.id === editHistoryDialog.entry?.productId);
                    return product ? new Date(product.createdAt) : undefined;
                })() : undefined
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$DeleteStockHistoryDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: deleteHistoryDialog.open,
                onOpenChange: (open)=>setDeleteHistoryDialog({
                        open,
                        entry: null
                    }),
                entry: deleteHistoryDialog.entry,
                onConfirm: onDeleteStockHistory
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/ProductStockHistory.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ProductStockHistory, "F2uCK7JFpcJmX7bAImLZvpizd9o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"]
    ];
});
_c = ProductStockHistory;
const __TURBOPACK__default__export__ = ProductStockHistory;
var _c;
__turbopack_context__.k.register(_c, "ProductStockHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/ProductDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStockHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockSummaryData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStockSummaryData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$ProductDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inventory/ProductDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$ProductStockHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inventory/ProductStockHistory.tsx [app-client] (ecmascript)");
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
const ProductDetail = ()=>{
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useParams"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { products, isLoading, loadProducts, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])(user?.id, 10000); // Load all products
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { stockHistory, isLoading: isLoadingHistory, loadStockHistory, updateStockHistoryEntry, deleteStockHistoryEntry, recalculateProductStock } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockHistory"])(user?.id, id);
    const { clearAllLocationCaches } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockSummaryData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockSummaryData"])({
        from: undefined,
        to: undefined
    });
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const loadProductData = async ()=>{
        if (id) {
            setIsRefreshing(true);
            const { data: refetchedData } = await refetch();
            const fetchedProducts = refetchedData?.products || [];
            const foundProduct = fetchedProducts.find((p)=>p.id === id);
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Product not found');
                navigate('/inventory');
            }
            setIsRefreshing(false);
        }
    };
    // Handle stock update callback - refresh both product and stock history
    const handleStockUpdate = async ()=>{
        await loadProductData();
        if (id && loadStockHistory) {
            await loadStockHistory();
        }
        setRefreshKey((prev)=>prev + 1);
    };
    // Stock history handlers
    const handleEditStockHistory = async (entryId, newQuantity, newReason, newDate)=>{
        const success = await updateStockHistoryEntry(entryId, newQuantity, newReason, newDate);
        if (success) {
            // Clear stock summary cache to ensure data consistency
            clearAllLocationCaches();
            // updateStockHistoryEntry already recalculates the entire stock chain
            // Just refresh the UI data
            await Promise.all([
                loadStockHistory(),
                loadProductData()
            ]);
        }
        return success;
    };
    const handleDeleteStockHistory = async (entryId)=>{
        const success = await deleteStockHistoryEntry(entryId);
        if (success) {
            // Clear stock summary cache to ensure data consistency
            clearAllLocationCaches();
            await Promise.all([
                recalculateProductStock(product.id),
                loadStockHistory(),
                loadProductData()
            ]);
        }
        return success;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetail.useEffect": ()=>{
            if (!isLoading && products.length > 0 && id) {
                const foundProduct = products.find({
                    "ProductDetail.useEffect.foundProduct": (p)=>p.id === id
                }["ProductDetail.useEffect.foundProduct"]);
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Product not found');
                    navigate('/inventory');
                }
            }
        }
    }["ProductDetail.useEffect"], [
        id,
        products,
        isLoading,
        navigate
    ]);
    // Listen for stock updates from other components
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetail.useEffect": ()=>{
            const handleStockUpdateEvent = {
                "ProductDetail.useEffect.handleStockUpdateEvent": ()=>{
                    console.log('Stock updated, refreshing product data');
                    handleStockUpdate();
                }
            }["ProductDetail.useEffect.handleStockUpdateEvent"];
            window.addEventListener('stock-updated', handleStockUpdateEvent);
            return ({
                "ProductDetail.useEffect": ()=>{
                    window.removeEventListener('stock-updated', handleStockUpdateEvent);
                }
            })["ProductDetail.useEffect"];
        }
    }["ProductDetail.useEffect"], [
        handleStockUpdate
    ]);
    if (isLoading || isRefreshing || !product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[60vh] space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/lovable-uploads/7f7549a3-e9df-4762-b8b9-8e041e34f55d.png",
                    alt: "Loading",
                    className: "w-16 h-16 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/pages/ProductDetail.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Loading product data..."
                }, void 0, false, {
                    fileName: "[project]/src/pages/ProductDetail.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/ProductDetail.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$ProductDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                product: product,
                stockHistory: stockHistory,
                isLoadingHistory: isLoadingHistory,
                onStockUpdate: handleStockUpdate
            }, `details-${refreshKey}`, false, {
                fileName: "[project]/src/pages/ProductDetail.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$ProductStockHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                stockHistory: stockHistory,
                isLoadingHistory: isLoadingHistory,
                onEditStockHistory: handleEditStockHistory,
                onDeleteStockHistory: handleDeleteStockHistory,
                products: products
            }, `history-${refreshKey}`, false, {
                fileName: "[project]/src/pages/ProductDetail.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/ProductDetail.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductDetail, "0sZKFg8E669xFuBtA/aZmPKz4ag=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockHistory"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockSummaryData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockSummaryData"]
    ];
});
_c = ProductDetail;
const __TURBOPACK__default__export__ = ProductDetail;
var _c;
__turbopack_context__.k.register(_c, "ProductDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d8f32de8._.js.map