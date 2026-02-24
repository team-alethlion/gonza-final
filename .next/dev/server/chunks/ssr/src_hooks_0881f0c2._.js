module.exports = [
"[project]/src/hooks/useCashAccounts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCashAccounts",
    ()=>useCashAccounts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3aabc2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:3aabc2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bf746d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:bf746d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cac4e7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:cac4e7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd0249__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:fd0249 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5b472f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:5b472f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$99019c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:99019c [app-ssr] (ecmascript) <text/javascript>");
;
;
;
;
;
;
const useCashAccounts = ()=>{
    const [accounts, setAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const loadAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!currentBusiness?.id) return [];
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$3aabc2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCashAccountsAction"])(currentBusiness.id);
            if (!result.success || !result.data) {
                throw new Error(result.error || 'Failed to fetch accounts');
            }
            return result.data.map((account)=>({
                    ...account,
                    createdAt: new Date(account.createdAt),
                    updatedAt: new Date(account.updatedAt)
                }));
        } catch (error) {
            console.error('Error loading cash accounts:', error);
            toast({
                title: "Error",
                description: "Failed to load cash accounts",
                variant: "destructive"
            });
            return [];
        }
    }, [
        currentBusiness?.id,
        toast
    ]);
    const queryKey = [
        'cash_accounts',
        currentBusiness?.id
    ];
    const { data: queriedAccounts, isLoading: isQueryLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadAccounts,
        enabled: !!currentBusiness?.id,
        staleTime: 30_000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queriedAccounts) {
            setAccounts(queriedAccounts);
        }
    }, [
        queriedAccounts
    ]);
    const isLoading = isQueryLoading && !queriedAccounts;
    const refreshAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        queryClient.invalidateQueries({
            queryKey
        });
    }, [
        queryClient,
        queryKey
    ]);
    const createAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (accountData)=>{
        if (!currentBusiness?.id || !user?.id) return null;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bf746d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCashAccountAction"])({
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
    }, [
        currentBusiness?.id,
        user?.id,
        queryClient,
        queryKey,
        toast
    ]);
    const updateAccount = async (id, updates)=>{
        if (!currentBusiness?.id) return false;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cac4e7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCashAccountAction"])(id, {
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd0249__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCashAccountAction"])(id, currentBusiness.id);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5b472f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCashAccountWithTransactionsAction"])(id, currentBusiness.id, deleteTransactions);
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
    const getAccountBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (accountId)=>{
        if (!currentBusiness?.id) return 0;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$99019c__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCashAccountBalanceAction"])(accountId, currentBusiness.id);
            if (result.success) return result.data;
            return 0;
        } catch (error) {
            console.error('Error getting balance:', error);
            return 0;
        }
    }, [
        currentBusiness?.id
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            accounts,
            isLoading,
            createAccount,
            updateAccount,
            deleteAccount,
            deleteAccountWithTransactions,
            getAccountBalance,
            loadAccounts,
            refreshAccounts
        }), [
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
}),
"[project]/src/hooks/useCashTransactions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCashTransactions",
    ()=>useCashTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/cash.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$941082__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:941082 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c53c0b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:c53c0b [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cf9be1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:cf9be1 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5a5529__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:5a5529 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$57d85a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:57d85a [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$aae0bd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:aae0bd [app-ssr] (ecmascript) <text/javascript>");
;
;
;
;
;
;
;
const useCashTransactions = (accountId)=>{
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const loadTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            if (!user || !currentBusiness) {
                return [];
            }
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$941082__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCashTransactionsAction"])(currentBusiness.id, accountId);
            if (!result.success || !result.data) {
                throw new Error(result.error || 'Failed to fetch transactions');
            }
            // Format all transactions
            const formattedTransactions = result.data.map((item)=>{
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(dbTransaction);
            });
            // Sort
            formattedTransactions.sort((a, b)=>{
                const dateCompare = new Date(b.date).getTime() - new Date(a.date).getTime();
                if (dateCompare !== 0) return dateCompare;
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            });
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
    }, [
        user,
        currentBusiness?.id,
        accountId,
        toast
    ]);
    const queryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            'cash_transactions',
            currentBusiness?.id,
            user?.id,
            accountId
        ], [
        currentBusiness?.id,
        user?.id,
        accountId
    ]);
    const { data: transactions = [], isLoading: isQueryLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadTransactions,
        enabled: !!user && !!currentBusiness?.id,
        staleTime: 30_000
    });
    const isLoading = isQueryLoading && transactions.length === 0;
    const createTransaction = async (transactionData)=>{
        try {
            if (!user || !currentBusiness) throw new Error('User not authenticated');
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c53c0b__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCashTransactionAction"])({
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
            return Array.isArray(result.data) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(result.data[0]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(result.data);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$aae0bd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBulkCashTransactionsAction"])(payloads);
            if (!result.success) throw new Error(result.error);
            toast({
                title: "Success",
                description: `Successfully created ${transactionsData.length} transactions`
            });
            queryClient.invalidateQueries({
                queryKey
            });
            return result.data.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(item));
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$cf9be1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCashTransactionAction"])(id, updates);
            if (!result.success) throw new Error(result.error);
            toast({
                title: "Success",
                description: "Transaction updated successfully"
            });
            queryClient.invalidateQueries({
                queryKey
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(result.data);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5a5529__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCashTransactionAction"])(id, currentBusiness.id);
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
    const getAccountOpeningBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (accountId)=>{
        try {
            if (!currentBusiness) return 0;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$57d85a__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAccountOpeningBalanceAction"])(accountId, currentBusiness.id);
            return result.success ? result.data : 0;
        } catch (error) {
            return 0;
        }
    }, [
        currentBusiness?.id
    ]);
    const getDailySummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (date, accountId)=>{
        const dateStr = date.toISOString().split('T')[0];
        let filteredTransactions = transactions.filter((t)=>t.date.toISOString().split('T')[0] === dateStr);
        if (accountId) {
            filteredTransactions = filteredTransactions.filter((t)=>t.accountId === accountId);
        }
        const cashIn = filteredTransactions.filter((t)=>t.transactionType === 'cash_in' || t.transactionType === 'transfer_in').reduce((sum, t)=>sum + t.amount, 0);
        const cashOut = filteredTransactions.filter((t)=>t.transactionType === 'cash_out' || t.transactionType === 'transfer_out').reduce((sum, t)=>sum + t.amount, 0);
        const transfersIn = filteredTransactions.filter((t)=>t.transactionType === 'transfer_in').reduce((sum, t)=>sum + t.amount, 0);
        const transfersOut = filteredTransactions.filter((t)=>t.transactionType === 'transfer_out').reduce((sum, t)=>sum + t.amount, 0);
        const yesterday = new Date(date);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        let yesterdayTransactions = transactions.filter((t)=>t.date.toISOString().split('T')[0] <= yesterdayStr);
        if (accountId) {
            yesterdayTransactions = yesterdayTransactions.filter((t)=>t.accountId === accountId);
        }
        const yesterdayCashIn = yesterdayTransactions.filter((t)=>t.transactionType === 'cash_in' || t.transactionType === 'transfer_in').reduce((sum, t)=>sum + t.amount, 0);
        const yesterdayCashOut = yesterdayTransactions.filter((t)=>t.transactionType === 'cash_out' || t.transactionType === 'transfer_out').reduce((sum, t)=>sum + t.amount, 0);
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
    }, [
        transactions,
        getAccountOpeningBalance
    ]);
    const getDateRangeSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (startDate, endDate, accountId)=>{
        const startDateStr = startDate.toISOString().split('T')[0];
        const endDateStr = endDate.toISOString().split('T')[0];
        let filteredTransactions = transactions.filter((t)=>{
            const transactionDateStr = t.date.toISOString().split('T')[0];
            return transactionDateStr >= startDateStr && transactionDateStr <= endDateStr;
        });
        if (accountId) {
            filteredTransactions = filteredTransactions.filter((t)=>t.accountId === accountId);
        }
        const cashIn = filteredTransactions.filter((t)=>t.transactionType === 'cash_in' || t.transactionType === 'transfer_in').reduce((sum, t)=>sum + t.amount, 0);
        const cashOut = filteredTransactions.filter((t)=>t.transactionType === 'cash_out' || t.transactionType === 'transfer_out').reduce((sum, t)=>sum + t.amount, 0);
        const transfersIn = filteredTransactions.filter((t)=>t.transactionType === 'transfer_in').reduce((sum, t)=>sum + t.amount, 0);
        const transfersOut = filteredTransactions.filter((t)=>t.transactionType === 'transfer_out').reduce((sum, t)=>sum + t.amount, 0);
        const dayBeforeStart = new Date(startDate);
        dayBeforeStart.setDate(dayBeforeStart.getDate() - 1);
        const dayBeforeStartStr = dayBeforeStart.toISOString().split('T')[0];
        let transactionsBeforeRange = transactions.filter((t)=>t.date.toISOString().split('T')[0] <= dayBeforeStartStr);
        if (accountId) {
            transactionsBeforeRange = transactionsBeforeRange.filter((t)=>t.accountId === accountId);
        }
        const cashInBeforeRange = transactionsBeforeRange.filter((t)=>t.transactionType === 'cash_in' || t.transactionType === 'transfer_in').reduce((sum, t)=>sum + t.amount, 0);
        const cashOutBeforeRange = transactionsBeforeRange.filter((t)=>t.transactionType === 'cash_out' || t.transactionType === 'transfer_out').reduce((sum, t)=>sum + t.amount, 0);
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
    }, [
        transactions,
        getAccountOpeningBalance
    ]);
    const refreshTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        queryClient.invalidateQueries({
            queryKey
        });
    }, [
        queryClient,
        queryKey
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            transactions,
            isLoading,
            createTransaction,
            createBulkTransactions,
            updateTransaction,
            deleteTransaction,
            getDailySummary,
            getDateRangeSummary,
            refreshTransactions
        }), [
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
}),
"[project]/src/hooks/useBusinessSettings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertPaymentMethodsToString",
    ()=>convertPaymentMethodsToString,
    "parsePaymentInfo",
    ()=>parsePaymentInfo,
    "useBusinessSettings",
    ()=>useBusinessSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8cf71__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b8cf71 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8b3703__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:8b3703 [app-ssr] (ecmascript) <text/javascript>");
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
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getDefaultSettings());
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusiness"])();
    const loadSettings = async ()=>{
        if (!currentBusiness) {
            return getDefaultSettings();
        }
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b8cf71__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBusinessSettingsAction"])(currentBusiness.id);
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
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8b3703__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["upsertBusinessSettingsAction"])(currentBusiness.id, userData.user.id, updateData);
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
    const { data: queriedData, isLoading: isQueryLoading, isFetching, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queriedData) {
            setSettings(queriedData);
        } else if (!currentBusiness) {
            setSettings(getDefaultSettings());
        }
    }, [
        queriedData,
        currentBusiness
    ]);
    // Sync loading state from React Query
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsLoading(isQueryLoading || isFetching);
    }, [
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
}),
"[project]/src/hooks/useFinancialVisibility.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFinancialVisibility",
    ()=>useFinancialVisibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-ssr] (ecmascript)");
;
const useFinancialVisibility = ()=>{
    const { hasPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProfiles"])();
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
}),
"[project]/src/hooks/useCurrentUser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentUser",
    ()=>useCurrentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)");
;
const useCurrentUser = ()=>{
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return {
        userId: user?.id
    };
};
}),
"[project]/src/hooks/useActivityLogger.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActivityLogger",
    ()=>useActivityLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9a4f8d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:9a4f8d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCurrentUser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-ssr] (ecmascript)");
;
;
;
;
const useActivityLogger = ()=>{
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCurrentUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentUser"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusiness"])();
    // Safely get current profile, handle case where ProfileProvider isn't available
    let currentProfile = null;
    try {
        const { currentProfile: profile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProfiles"])();
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9a4f8d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["logActivityAction"])({
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
}),
"[project]/src/hooks/useProducts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProducts",
    ()=>useProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/inventoryCacheUtils.ts [app-ssr] (ecmascript)");
// Import our new Server Actions
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$93bcad__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:93bcad [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$377d5e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:377d5e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$169405__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:169405 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$feeb96__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:feeb96 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$d22ceb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:d22ceb [app-ssr] (ecmascript) <text/javascript>");
;
;
;
;
;
;
const useProducts = (userId, initialPageSize = 50)=>{
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialPageSize);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusiness"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        search: '',
        category: 'all',
        stockStatus: 'all'
    });
    const [typingTimer, setTypingTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const setFiltersWithTypingState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newFilters)=>{
        if (newFilters.search !== filters.search) {
            setIsTyping(true);
            if (typingTimer) clearTimeout(typingTimer);
            const timer = setTimeout(()=>{
                setIsTyping(false);
            }, 600);
            setTypingTimer(timer);
        }
        setFilters(newFilters);
    }, [
        filters.search,
        typingTimer
    ]);
    // Use Server Action instead of Supabase
    const loadProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!userId || !currentBusiness) {
            return {
                products: [],
                count: 0
            };
        }
        try {
            // Server Action call
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$93bcad__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductsAction"])({
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
    }, [
        userId,
        currentBusiness?.id,
        page,
        pageSize,
        filters.search,
        filters.category,
        filters.stockStatus
    ]);
    const baseQueryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            'products',
            userId,
            currentBusiness?.id
        ], [
        userId,
        currentBusiness?.id
    ]);
    const queryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...baseQueryKey,
            page,
            pageSize,
            filters.search,
            filters.category,
            filters.stockStatus
        ], [
        baseQueryKey,
        page,
        pageSize,
        filters.search,
        filters.category,
        filters.stockStatus
    ]);
    const { data: queriedData, isLoading: isQueryLoading, isFetching, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadProducts,
        enabled: !!userId && !!currentBusiness?.id,
        staleTime: 30_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queriedData) {
            setProducts(queriedData.products);
            setTotalCount(queriedData.count);
        }
    }, [
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$377d5e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProductAction"])({
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearInventoryCaches"])(queryClient);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$169405__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductAction"])(id, {
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearInventoryCaches"])(queryClient);
            return true;
        } catch (error) {
            console.error('Error updating product:', error);
            return false;
        }
    };
    const deleteProduct = async (id)=>{
        try {
            if (!userId) return false;
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$feeb96__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProductAction"])(id);
            if (success) {
                queryClient.invalidateQueries({
                    queryKey: baseQueryKey
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearInventoryCaches"])(queryClient);
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
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$d22ceb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductsBulkAction"])(updates.map((u)=>({
                    id: u.id,
                    updated: u.updated
                })), currentBusiness.id);
            if (success) {
                queryClient.invalidateQueries({
                    queryKey: baseQueryKey
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearInventoryCaches"])(queryClient);
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
}),
"[project]/src/hooks/useInventoryActions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInventoryActions",
    ()=>useInventoryActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7dc706__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:7dc706 [app-ssr] (ecmascript) <text/javascript>");
;
;
;
const useInventoryActions = (userId)=>{
    const { updateProductsBulk } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProducts"])(userId);
    /**
     * Helper to fetch fresh product data from DB to avoid race conditions/stale data
     */ const fetchFreshProducts = async (productIds, locationId)=>{
        if (!productIds.length) return [];
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7dc706__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductsByIdsAction"])(productIds, locationId);
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning(`${product.name} inventory is now negative (${newQuantity}). Please restock soon.`);
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning(`${product.name} inventory is now negative (${newQuantity}). Please restock soon.`);
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
}),
"[project]/src/hooks/useSalesData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSalesData",
    ()=>useSalesData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useActivityLogger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInventoryActions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInventoryActions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/inventoryCacheUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f9bffa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f9bffa [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$4ed61d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:4ed61d [app-ssr] (ecmascript) <text/javascript>");
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
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const { logActivity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActivityLogger"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { restoreStockForSale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInventoryActions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInventoryActions"])(userId);
    const loadSales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            if (!userId || !currentBusiness) {
                return [];
            }
            // If pageSize is specified, load only that many records
            const salesData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f9bffa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getSalesAction"])(currentBusiness.id, sortOrder, pageSize);
            const formattedSales = salesData ? salesData.map((item)=>{
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
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapDbSaleToSale"])(dbSale);
            }) : [];
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
    }, [
        userId,
        currentBusiness?.id,
        sortOrder,
        pageSize,
        toast
    ]);
    // React Query caching with persistent storage for improved performance
    const baseQueryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            'sales',
            currentBusiness?.id,
            userId
        ], [
        currentBusiness?.id,
        userId
    ]);
    const queryKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            ...baseQueryKey,
            sortOrder,
            pageSize
        ], [
        baseQueryKey,
        sortOrder,
        pageSize
    ]);
    const { data: sales = [], isLoading: isQueryLoading, isFetching, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
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
    const getTopCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Skip quotes since they're not actual purchases
        const nonQuoteSales = sales.filter((sale)=>sale.paymentStatus !== "Quote");
        // Group sales by customer name
        const customerMap = new Map();
        nonQuoteSales.forEach((sale)=>{
            const customerName = sale.customerName;
            const saleTotal = sale.items.reduce((sum, item)=>sum + item.price * item.quantity, 0);
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
        });
        // Convert map to array and sort by total purchases
        return Array.from(customerMap.entries()).map(([name, data])=>({
                id: data.customerId,
                name,
                totalPurchases: data.total,
                orderCount: data.count
            })).sort((a, b)=>b.totalPurchases - a.totalPurchases);
    }, [
        sales
    ]);
    // Memoize customer lifetime purchases function
    const getCustomerLifetimePurchases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return (customerName)=>{
            // Filter sales by customer name and exclude quotes
            const customerSales = sales.filter((sale)=>sale.customerName.toLowerCase() === customerName.toLowerCase() && sale.paymentStatus !== "Quote");
            // Calculate total purchase amount and count
            const total = customerSales.reduce((sum, sale)=>sum + sale.items.reduce((itemSum, item)=>itemSum + item.price * item.quantity, 0), 0);
            return {
                total,
                count: customerSales.length
            };
        };
    }, [
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$4ed61d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteSaleAction"])(id, currentBusiness.id);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearInventoryCaches"])();
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
    const clearSoldItemsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!currentBusiness?.id) return;
        const key = `soldItemsFilters_${currentBusiness.id}`;
        localStorage.removeItem(key);
        // Also clear legacy keys for safety
        localStorage.removeItem('soldItemsFilters');
    }, [
        currentBusiness?.id
    ]);
    const addSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newSale)=>{
        queryClient.setQueryData(queryKey, (oldData)=>{
            return oldData ? [
                newSale,
                ...oldData
            ] : [
                newSale
            ];
        });
        queryClient.invalidateQueries({
            queryKey: baseQueryKey
        });
        clearSoldItemsCache();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearInventoryCaches"])();
    }, [
        queryClient,
        queryKey,
        baseQueryKey,
        clearSoldItemsCache,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearInventoryCaches"]
    ]);
    const updateSale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((updatedSale)=>{
        queryClient.setQueryData(queryKey, (oldData)=>{
            return oldData ? oldData.map((s)=>s.id === updatedSale.id ? updatedSale : s) : [
                updatedSale
            ];
        });
        queryClient.invalidateQueries({
            queryKey: baseQueryKey
        });
        clearSoldItemsCache();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearInventoryCaches"])();
    }, [
        queryClient,
        queryKey,
        baseQueryKey,
        clearSoldItemsCache,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$inventoryCacheUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearInventoryCaches"]
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
}),
"[project]/src/hooks/useExpenses.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExpenses",
    ()=>useExpenses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$65c514__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:65c514 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd3eae__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:fd3eae [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1212cb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:1212cb [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$73fd20__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:73fd20 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const useExpenses = ()=>{
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const loadExpenses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!currentBusiness) {
            return [];
        }
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$65c514__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getExpensesAction"])(currentBusiness.id);
            if (!result.success || !result.data) {
                throw new Error(result.error || 'Failed to fetch expenses');
            }
            const formattedExpenses = result.data.map((expense)=>({
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
                }));
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
    }, [
        currentBusiness?.id,
        toast
    ]);
    // React Query caching
    const queryKey = [
        'expenses',
        currentBusiness?.id
    ];
    const { data: queriedExpenses, isLoading: isQueryLoading, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey,
        queryFn: loadExpenses,
        enabled: !!currentBusiness?.id,
        staleTime: 5 * 60_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queriedExpenses) {
            setExpenses(queriedExpenses);
        }
    }, [
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd3eae__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createExpenseAction"])(input, !!expenseData.linkToCash);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$1212cb__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateExpenseAction"])(id, updatePayload, currentExpense);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$73fd20__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteExpenseAction"])(id);
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fd3eae__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createExpenseAction"])(input, !!data.linkToCash);
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
}),
"[project]/src/hooks/useStockSummaryData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStockSummaryData",
    ()=>useStockSummaryData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5828d9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:5828d9 [app-ssr] (ecmascript) <text/javascript>");
;
;
;
;
const useStockSummaryData = (dateRange)=>{
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusiness"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const fetchStockSummary = async ()=>{
        if (!user?.id || !currentBusiness?.id || !dateRange?.from || !dateRange?.to) return [];
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5828d9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getStockSummaryReportAction"])(currentBusiness.id, dateRange.from.toISOString(), dateRange.to.toISOString());
            if (result.success && result.data) {
                return result.data;
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('[StockSummary] Error fetching report:', error.message);
            throw error;
        }
    };
    const { data: stockSummaryData = [], isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
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
}),
"[project]/src/hooks/useCarriageInwards.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCarriageInwards",
    ()=>useCarriageInwards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c54ac8__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:c54ac8 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$01908d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:01908d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$07677f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:07677f [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$26a821__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:26a821 [app-ssr] (ecmascript) <text/javascript>");
;
;
;
;
;
const useCarriageInwards = ()=>{
    const [carriageInwards, setCarriageInwards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const loadCarriageInwards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!user || !currentBusiness) {
            setCarriageInwards([]);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$c54ac8__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCarriageInwardsAction"])(currentBusiness.id);
            if (!result.success) throw new Error(result.error);
            setCarriageInwards((result.data || []).map((item)=>({
                    ...item,
                    date: new Date(item.date),
                    createdAt: new Date(item.createdAt),
                    updatedAt: new Date(item.updatedAt)
                })));
        } catch (error) {
            console.error('Error loading carriage inwards:', error);
            toast({
                title: 'Error',
                description: 'Failed to load carriage inwards records.',
                variant: 'destructive'
            });
        } finally{
            setIsLoading(false);
        }
    }, [
        user,
        currentBusiness?.id,
        toast
    ]);
    const createCarriageInward = async (data)=>{
        if (!user || !currentBusiness) throw new Error('User not authenticated or no business selected');
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$01908d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCarriageInwardAction"])(user.id, currentBusiness.id, data);
        if (!result.success) throw new Error(result.error);
        await loadCarriageInwards();
        toast({
            title: 'Success',
            description: 'Carriage inwards record created successfully'
        });
        return result.data;
    };
    const updateCarriageInward = async (id, updates)=>{
        if (!currentBusiness) throw new Error('No business selected');
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$07677f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCarriageInwardAction"])(id, currentBusiness.id, updates);
        if (!result.success) throw new Error(result.error);
        await loadCarriageInwards();
        toast({
            title: 'Success',
            description: 'Carriage inwards record updated successfully'
        });
        return true;
    };
    const deleteCarriageInward = async (id)=>{
        if (!currentBusiness) throw new Error('No business selected');
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$26a821__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCarriageInwardAction"])(id, currentBusiness.id);
        if (!result.success) throw new Error(result.error);
        await loadCarriageInwards();
        toast({
            title: 'Success',
            description: 'Carriage inwards record deleted successfully'
        });
        return true;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadCarriageInwards();
    }, [
        loadCarriageInwards
    ]);
    return {
        carriageInwards,
        isLoading,
        createCarriageInward,
        updateCarriageInward,
        deleteCarriageInward,
        refreshCarriageInwards: loadCarriageInwards
    };
};
}),
"[project]/src/hooks/useProfitLossData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProfitLossData",
    ()=>useProfitLossData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSalesData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useExpenses.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockSummaryData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStockSummaryData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCarriageInwards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCarriageInwards.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateFilters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const useProfitLossData = (dateFilter, dateRange, specificDate, taxPercentage = 0)=>{
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBusiness"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get data from existing hooks
    const { sales, isLoading: salesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSalesData"])(user?.id);
    const { expenses, isLoading: expensesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenses$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExpenses"])();
    const { stockSummaryData, isLoading: stockLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockSummaryData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStockSummaryData"])(dateRange);
    const { carriageInwards, isLoading: carriageLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCarriageInwards$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarriageInwards"])();
    const profitLossData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Calculate date range using the same logic as sold items report
        let from, to;
        if (dateFilter === 'specific' && specificDate) {
            from = new Date(specificDate);
            from.setHours(0, 0, 0, 0);
            to = new Date(specificDate);
            to.setHours(23, 59, 59, 999);
        } else if (dateFilter === 'custom' && dateRange.from && dateRange.to) {
            from = dateRange.from;
            to = dateRange.to;
        } else {
            const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDateRangeFromFilter"])(dateFilter);
            from = range.from;
            to = range.to;
        }
        // Filter sales by date range and exclude quotes using same logic as sold items report
        const filteredSales = sales.filter((sale)=>{
            const saleDate = new Date(sale.date);
            if (dateFilter === 'specific' && specificDate) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(saleDate, specificDate) && sale.paymentStatus !== 'Quote';
            }
            return saleDate >= from && saleDate <= to && sale.paymentStatus !== 'Quote';
        });
        // Filter expenses by date range using same logic
        const filteredExpenses = expenses.filter((expense)=>{
            const expenseDate = new Date(expense.date);
            if (dateFilter === 'specific' && specificDate) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(expenseDate, specificDate);
            }
            return expenseDate >= from && expenseDate <= to;
        });
        // Filter carriage inwards by date range using same logic
        const filteredCarriageInwards = carriageInwards.filter((record)=>{
            const recordDate = new Date(record.date);
            if (dateFilter === 'specific' && specificDate) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameDay"])(recordDate, specificDate);
            }
            return recordDate >= from && recordDate <= to;
        });
        // Calculate Sales/Revenue
        const totalSales = filteredSales.reduce((sum, sale)=>{
            return sum + sale.items.reduce((itemSum, item)=>itemSum + item.price * item.quantity, 0);
        }, 0);
        // Calculate Sales Returns (Return In using selling price)
        const totalSalesReturns = stockSummaryData.reduce((sum, item)=>{
            return sum + item.returnIn * item.sellingPrice;
        }, 0);
        // Net Sales
        const netSales = totalSales - totalSalesReturns;
        // Calculate Opening Stock value (using cost price)
        const totalOpeningStock = stockSummaryData.reduce((sum, item)=>{
            return sum + item.openingStock * item.costPrice;
        }, 0);
        // Calculate Purchases (Stock In value using cost price)
        const totalPurchases = stockSummaryData.reduce((sum, item)=>{
            return sum + item.stockIn * item.costPrice;
        }, 0);
        // Calculate Carriage Inwards
        const totalCarriageInwards = filteredCarriageInwards.reduce((sum, record)=>{
            return sum + record.amount;
        }, 0);
        // Calculate Closing Stock value (using cost price)
        const totalClosingStock = stockSummaryData.reduce((sum, item)=>{
            return sum + item.closingStock * item.costPrice;
        }, 0);
        // Calculate Total Cost of Sales (cost price of all items sold)
        const totalCostSales = filteredSales.reduce((sum, sale)=>{
            return sum + sale.items.reduce((itemSum, item)=>itemSum + (item.cost || 0) * item.quantity, 0);
        }, 0);
        // Total COGS = Total Cost Sales + Carriage Inwards
        const totalCOGS = totalCostSales + totalCarriageInwards;
        // Gross Profit
        const grossProfit = netSales - totalCOGS;
        // Group expenses by category
        const expensesByCategory = {};
        filteredExpenses.forEach((expense)=>{
            const category = expense.category || 'Uncategorized';
            expensesByCategory[category] = (expensesByCategory[category] || 0) + expense.amount;
        });
        // Total Expenses
        const totalExpenses = Object.values(expensesByCategory).reduce((sum, amount)=>sum + amount, 0);
        // Net Profit/Loss
        const netProfitLoss = grossProfit - totalExpenses;
        // Tax calculations
        const taxAmount = netProfitLoss > 0 ? netProfitLoss * taxPercentage / 100 : 0;
        const finalProfitAfterTax = netProfitLoss - taxAmount;
        return {
            sales: totalSales,
            salesReturns: totalSalesReturns,
            netSales,
            openingStock: totalOpeningStock,
            purchases: totalPurchases,
            carriageInwards: totalCarriageInwards,
            closingStock: totalClosingStock,
            totalCostSales,
            totalCOGS,
            grossProfit,
            expensesByCategory,
            totalExpenses,
            netProfitLoss,
            taxPercentage,
            taxAmount,
            finalProfitAfterTax
        };
    }, [
        sales,
        expenses,
        stockSummaryData,
        carriageInwards,
        dateFilter,
        dateRange,
        specificDate,
        taxPercentage
    ]);
    const loading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return salesLoading || expensesLoading || stockLoading || carriageLoading;
    }, [
        salesLoading,
        expensesLoading,
        stockLoading,
        carriageLoading
    ]);
    return {
        profitLossData,
        isLoading: loading
    };
};
}),
"[project]/src/hooks/useCashAccountRedirect.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCashAccountRedirect",
    ()=>useCashAccountRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-ssr] (ecmascript) <locals>");
;
;
const useCashAccountRedirect = (accounts)=>{
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const [hasCheckedRedirect, setHasCheckedRedirect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for last visited cash account and redirect if found
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hasCheckedRedirect && accounts.length > 0) {
            const lastVisitedAccountId = localStorage.getItem('lastVisitedCashAccount');
            const lastVisitedUrl = localStorage.getItem('lastVisitedCashAccountUrl');
            if (lastVisitedAccountId && lastVisitedUrl) {
                // Verify the account still exists
                const accountExists = accounts.some((acc)=>acc.id === lastVisitedAccountId);
                if (accountExists) {
                    // Use the complete URL to preserve filters and pagination
                    navigate(lastVisitedUrl.replace(window.location.origin, ''));
                    return;
                } else {
                    // Clean up invalid stored account data
                    localStorage.removeItem('lastVisitedCashAccount');
                    localStorage.removeItem('lastVisitedCashAccountUrl');
                }
            }
            setHasCheckedRedirect(true);
        }
    }, [
        accounts,
        hasCheckedRedirect,
        navigate
    ]);
    return {
        hasCheckedRedirect
    };
};
}),
];

//# sourceMappingURL=src_hooks_0881f0c2._.js.map