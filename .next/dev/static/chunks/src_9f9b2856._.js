(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = TabsList;
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"].displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TabsTrigger;
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TabsContent;
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TabsList$React.forwardRef");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "TabsTrigger");
__turbopack_context__.k.register(_c4, "TabsContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cash/CashAccountsHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const CashAccountsHeader = ({ onCreateAccount, canCreate = true })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold",
                children: "Cash Accounts"
            }, void 0, false, {
                fileName: "[project]/src/components/cash/CashAccountsHeader.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            canCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: onCreateAccount,
                className: "gap-2",
                size: isMobile ? "default" : "default",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/CashAccountsHeader.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "New Cash Account"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cash/CashAccountsHeader.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cash/CashAccountsHeader.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CashAccountsHeader, "zdJ8C3X+YlDYVai5EPOd8CzoqSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = CashAccountsHeader;
const __TURBOPACK__default__export__ = CashAccountsHeader;
var _c;
__turbopack_context__.k.register(_c, "CashAccountsHeader");
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
"[project]/src/types/cash.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cash management types
__turbopack_context__.s([
    "mapCashAccountFormToDbInsert",
    ()=>mapCashAccountFormToDbInsert,
    "mapCashAccountFormToDbUpdate",
    ()=>mapCashAccountFormToDbUpdate,
    "mapCashTransactionFormToDbInsert",
    ()=>mapCashTransactionFormToDbInsert,
    "mapDbCashAccountToCashAccount",
    ()=>mapDbCashAccountToCashAccount,
    "mapDbCashTransactionToCashTransaction",
    ()=>mapDbCashTransactionToCashTransaction
]);
const mapDbCashAccountToCashAccount = (dbAccount)=>{
    return {
        id: dbAccount.id,
        name: dbAccount.name,
        description: dbAccount.description,
        openingBalance: Number(dbAccount.opening_balance),
        isDefault: dbAccount.is_default,
        createdAt: new Date(dbAccount.created_at),
        updatedAt: new Date(dbAccount.updated_at)
    };
};
const mapCashAccountFormToDbInsert = (formData, userId)=>{
    return {
        user_id: userId,
        name: formData.name,
        description: formData.description || null,
        opening_balance: formData.openingBalance,
        is_default: formData.isDefault
    };
};
const mapCashAccountFormToDbUpdate = (formData)=>{
    const result = {};
    if (formData.name !== undefined) result.name = formData.name;
    if (formData.description !== undefined) result.description = formData.description || null;
    if (formData.openingBalance !== undefined) result.opening_balance = formData.openingBalance;
    if (formData.isDefault !== undefined) result.is_default = formData.isDefault;
    return result;
};
const mapDbCashTransactionToCashTransaction = (dbTransaction)=>{
    return {
        id: dbTransaction.id,
        accountId: dbTransaction.account_id,
        amount: Number(dbTransaction.amount),
        transactionType: dbTransaction.transaction_type,
        category: dbTransaction.category,
        description: dbTransaction.description,
        personInCharge: dbTransaction.person_in_charge,
        tags: dbTransaction.tags,
        date: new Date(dbTransaction.date),
        paymentMethod: dbTransaction.payment_method,
        receiptImage: dbTransaction.receipt_image,
        createdAt: new Date(dbTransaction.created_at),
        updatedAt: new Date(dbTransaction.updated_at)
    };
};
const mapCashTransactionFormToDbInsert = (formData, userId)=>{
    return {
        user_id: userId,
        account_id: formData.accountId,
        amount: formData.amount,
        transaction_type: formData.transactionType,
        category: formData.category,
        description: formData.description,
        person_in_charge: formData.personInCharge || null,
        tags: formData.tags.length > 0 ? formData.tags : null,
        date: formData.date.toISOString().split('T')[0],
        payment_method: formData.paymentMethod || null,
        receipt_image: formData.receiptImage || null
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:16d29a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCashTransactionsAction",
    ()=>$$RSC_SERVER_ACTION_10
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60389137ce9ee1ee3cd68070b85fc7f1754001dd4e":"getCashTransactionsAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60389137ce9ee1ee3cd68070b85fc7f1754001dd4e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCashTransactionsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSB0aGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogbGlua1RvQ2FzaCAmJiBkYXRhLmNhc2hBY2NvdW50SWQgPyBkYXRhLmNhc2hBY2NvdW50SWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMi4gSWYgbGlua2luZyB0byBjYXNoLCBjcmVhdGUgYSBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FzaFR4ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICdjYXNoX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke2RhdGEuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2Ugd2l0aCB0cmFuc2FjdGlvbiByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZXNBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4cGVuc2VzID0gYXdhaXQgZGIuZXhwZW5zZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBleHBlbnNlcy5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2VcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkTGlua1RvQ2FzaCA9ICEhdXBkYXRlcy5jYXNoQWNjb3VudElkO1xyXG4gICAgICAgICAgICBjb25zdCB3YXNMaW5rZWRUb0Nhc2ggPSAhIWN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgIXdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY3VycmVudEV4cGVuc2UudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBjdXJyZW50RXhwZW5zZS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5IHx8IGN1cnJlbnRFeHBlbnNlLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke3VwZGF0ZXMuZGVzY3JpcHRpb24gfHwgY3VycmVudEV4cGVuc2UuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IHVwZGF0ZXMucGVyc29uSW5DaGFyZ2UgfHwgY3VycmVudEV4cGVuc2UucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlIHx8IGN1cnJlbnRFeHBlbnNlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCB8fCBjdXJyZW50RXhwZW5zZS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UgfHwgY3VycmVudEV4cGVuc2UucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZEV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHBlbnNlPy5jYXNoVHJhbnNhY3Rpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCh0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHQudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0LnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHQuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHQubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6IHQudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgcGVyc29uX2luX2NoYXJnZTogdC5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB0LnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiB0LnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhc2ggdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eEluID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0eE91dCwgdHhJbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgaW5zdGFsbG1lbnQgcGF5bWVudHMgbGlua2VkIHRvIHRoaXMgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRPcGVuaW5nQmFsYW5jZUFjdGlvbihhY2NvdW50SWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBkYi5jYXNoQWNjb3VudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBvcGVuaW5nQmFsYW5jZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IE51bWJlcihhY2NvdW50Py5vcGVuaW5nQmFsYW5jZSB8fCAwKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9wZW5pbmcgYmFsYW5jZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdWxrQ2FzaFRyYW5zYWN0aW9uc0FjdGlvbih0cmFuc2FjdGlvbnM6IGFueVtdKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZC5wdXNoKGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1bGsgdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQThYc0Isd01BQUEifQ==
}),
"[project]/src/app/actions/data:482b77 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCashTransactionAction",
    ()=>$$RSC_SERVER_ACTION_11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"409955a4b0696ef68a877be47dd95ec6e5b80a07dd":"createCashTransactionAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("409955a4b0696ef68a877be47dd95ec6e5b80a07dd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCashTransactionAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSB0aGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogbGlua1RvQ2FzaCAmJiBkYXRhLmNhc2hBY2NvdW50SWQgPyBkYXRhLmNhc2hBY2NvdW50SWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMi4gSWYgbGlua2luZyB0byBjYXNoLCBjcmVhdGUgYSBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FzaFR4ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICdjYXNoX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke2RhdGEuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2Ugd2l0aCB0cmFuc2FjdGlvbiByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZXNBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4cGVuc2VzID0gYXdhaXQgZGIuZXhwZW5zZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBleHBlbnNlcy5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2VcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkTGlua1RvQ2FzaCA9ICEhdXBkYXRlcy5jYXNoQWNjb3VudElkO1xyXG4gICAgICAgICAgICBjb25zdCB3YXNMaW5rZWRUb0Nhc2ggPSAhIWN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgIXdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY3VycmVudEV4cGVuc2UudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBjdXJyZW50RXhwZW5zZS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5IHx8IGN1cnJlbnRFeHBlbnNlLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke3VwZGF0ZXMuZGVzY3JpcHRpb24gfHwgY3VycmVudEV4cGVuc2UuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IHVwZGF0ZXMucGVyc29uSW5DaGFyZ2UgfHwgY3VycmVudEV4cGVuc2UucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlIHx8IGN1cnJlbnRFeHBlbnNlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCB8fCBjdXJyZW50RXhwZW5zZS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UgfHwgY3VycmVudEV4cGVuc2UucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZEV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHBlbnNlPy5jYXNoVHJhbnNhY3Rpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCh0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHQudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0LnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHQuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHQubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6IHQudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgcGVyc29uX2luX2NoYXJnZTogdC5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB0LnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiB0LnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhc2ggdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eEluID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0eE91dCwgdHhJbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgaW5zdGFsbG1lbnQgcGF5bWVudHMgbGlua2VkIHRvIHRoaXMgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRPcGVuaW5nQmFsYW5jZUFjdGlvbihhY2NvdW50SWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBkYi5jYXNoQWNjb3VudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBvcGVuaW5nQmFsYW5jZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IE51bWJlcihhY2NvdW50Py5vcGVuaW5nQmFsYW5jZSB8fCAwKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9wZW5pbmcgYmFsYW5jZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdWxrQ2FzaFRyYW5zYWN0aW9uc0FjdGlvbih0cmFuc2FjdGlvbnM6IGFueVtdKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZC5wdXNoKGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1bGsgdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBTQTZac0IsME1BQUEifQ==
}),
"[project]/src/app/actions/data:8f514f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCashTransactionAction",
    ()=>$$RSC_SERVER_ACTION_12
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60d286abc5ef9707c41497745661a3c8e51b62a678":"deleteCashTransactionAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60d286abc5ef9707c41497745661a3c8e51b62a678", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCashTransactionAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSB0aGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogbGlua1RvQ2FzaCAmJiBkYXRhLmNhc2hBY2NvdW50SWQgPyBkYXRhLmNhc2hBY2NvdW50SWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMi4gSWYgbGlua2luZyB0byBjYXNoLCBjcmVhdGUgYSBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FzaFR4ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICdjYXNoX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke2RhdGEuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2Ugd2l0aCB0cmFuc2FjdGlvbiByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZXNBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4cGVuc2VzID0gYXdhaXQgZGIuZXhwZW5zZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBleHBlbnNlcy5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2VcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkTGlua1RvQ2FzaCA9ICEhdXBkYXRlcy5jYXNoQWNjb3VudElkO1xyXG4gICAgICAgICAgICBjb25zdCB3YXNMaW5rZWRUb0Nhc2ggPSAhIWN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgIXdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY3VycmVudEV4cGVuc2UudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBjdXJyZW50RXhwZW5zZS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5IHx8IGN1cnJlbnRFeHBlbnNlLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke3VwZGF0ZXMuZGVzY3JpcHRpb24gfHwgY3VycmVudEV4cGVuc2UuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IHVwZGF0ZXMucGVyc29uSW5DaGFyZ2UgfHwgY3VycmVudEV4cGVuc2UucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlIHx8IGN1cnJlbnRFeHBlbnNlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCB8fCBjdXJyZW50RXhwZW5zZS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UgfHwgY3VycmVudEV4cGVuc2UucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZEV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHBlbnNlPy5jYXNoVHJhbnNhY3Rpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCh0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHQudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0LnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHQuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHQubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6IHQudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgcGVyc29uX2luX2NoYXJnZTogdC5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB0LnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiB0LnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhc2ggdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eEluID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0eE91dCwgdHhJbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgaW5zdGFsbG1lbnQgcGF5bWVudHMgbGlua2VkIHRvIHRoaXMgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRPcGVuaW5nQmFsYW5jZUFjdGlvbihhY2NvdW50SWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBkYi5jYXNoQWNjb3VudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBvcGVuaW5nQmFsYW5jZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IE51bWJlcihhY2NvdW50Py5vcGVuaW5nQmFsYW5jZSB8fCAwKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9wZW5pbmcgYmFsYW5jZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdWxrQ2FzaFRyYW5zYWN0aW9uc0FjdGlvbih0cmFuc2FjdGlvbnM6IGFueVtdKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZC5wdXNoKGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1bGsgdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBTQTBkc0IsME1BQUEifQ==
}),
"[project]/src/app/actions/data:a62370 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAccountOpeningBalanceAction",
    ()=>$$RSC_SERVER_ACTION_13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"602745085d261a1821e6975156716f5f6606705a44":"getAccountOpeningBalanceAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("602745085d261a1821e6975156716f5f6606705a44", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAccountOpeningBalanceAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSB0aGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogbGlua1RvQ2FzaCAmJiBkYXRhLmNhc2hBY2NvdW50SWQgPyBkYXRhLmNhc2hBY2NvdW50SWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMi4gSWYgbGlua2luZyB0byBjYXNoLCBjcmVhdGUgYSBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FzaFR4ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICdjYXNoX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke2RhdGEuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2Ugd2l0aCB0cmFuc2FjdGlvbiByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZXNBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4cGVuc2VzID0gYXdhaXQgZGIuZXhwZW5zZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBleHBlbnNlcy5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2VcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkTGlua1RvQ2FzaCA9ICEhdXBkYXRlcy5jYXNoQWNjb3VudElkO1xyXG4gICAgICAgICAgICBjb25zdCB3YXNMaW5rZWRUb0Nhc2ggPSAhIWN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgIXdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY3VycmVudEV4cGVuc2UudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBjdXJyZW50RXhwZW5zZS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5IHx8IGN1cnJlbnRFeHBlbnNlLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke3VwZGF0ZXMuZGVzY3JpcHRpb24gfHwgY3VycmVudEV4cGVuc2UuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IHVwZGF0ZXMucGVyc29uSW5DaGFyZ2UgfHwgY3VycmVudEV4cGVuc2UucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlIHx8IGN1cnJlbnRFeHBlbnNlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCB8fCBjdXJyZW50RXhwZW5zZS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UgfHwgY3VycmVudEV4cGVuc2UucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZEV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHBlbnNlPy5jYXNoVHJhbnNhY3Rpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCh0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHQudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0LnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHQuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHQubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6IHQudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgcGVyc29uX2luX2NoYXJnZTogdC5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB0LnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiB0LnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhc2ggdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eEluID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0eE91dCwgdHhJbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgaW5zdGFsbG1lbnQgcGF5bWVudHMgbGlua2VkIHRvIHRoaXMgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRPcGVuaW5nQmFsYW5jZUFjdGlvbihhY2NvdW50SWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBkYi5jYXNoQWNjb3VudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBvcGVuaW5nQmFsYW5jZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IE51bWJlcihhY2NvdW50Py5vcGVuaW5nQmFsYW5jZSB8fCAwKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9wZW5pbmcgYmFsYW5jZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdWxrQ2FzaFRyYW5zYWN0aW9uc0FjdGlvbih0cmFuc2FjdGlvbnM6IGFueVtdKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZC5wdXNoKGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1bGsgdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZTQWdmc0IsNk1BQUEifQ==
}),
"[project]/src/app/actions/data:8f9e2f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBulkCashTransactionsAction",
    ()=>$$RSC_SERVER_ACTION_14
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"404119614222c3b7f3e202640160ed902a393e63e2":"createBulkCashTransactionsAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("404119614222c3b7f3e202640160ed902a393e63e2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createBulkCashTransactionsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSB0aGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogbGlua1RvQ2FzaCAmJiBkYXRhLmNhc2hBY2NvdW50SWQgPyBkYXRhLmNhc2hBY2NvdW50SWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMi4gSWYgbGlua2luZyB0byBjYXNoLCBjcmVhdGUgYSBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FzaFR4ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICdjYXNoX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke2RhdGEuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2Ugd2l0aCB0cmFuc2FjdGlvbiByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZXNBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4cGVuc2VzID0gYXdhaXQgZGIuZXhwZW5zZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBleHBlbnNlcy5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2VcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkTGlua1RvQ2FzaCA9ICEhdXBkYXRlcy5jYXNoQWNjb3VudElkO1xyXG4gICAgICAgICAgICBjb25zdCB3YXNMaW5rZWRUb0Nhc2ggPSAhIWN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgIXdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY3VycmVudEV4cGVuc2UudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBjdXJyZW50RXhwZW5zZS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5IHx8IGN1cnJlbnRFeHBlbnNlLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke3VwZGF0ZXMuZGVzY3JpcHRpb24gfHwgY3VycmVudEV4cGVuc2UuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IHVwZGF0ZXMucGVyc29uSW5DaGFyZ2UgfHwgY3VycmVudEV4cGVuc2UucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlIHx8IGN1cnJlbnRFeHBlbnNlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCB8fCBjdXJyZW50RXhwZW5zZS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UgfHwgY3VycmVudEV4cGVuc2UucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZEV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHBlbnNlPy5jYXNoVHJhbnNhY3Rpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCh0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHQudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0LnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHQuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHQubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6IHQudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgcGVyc29uX2luX2NoYXJnZTogdC5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB0LnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiB0LnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhc2ggdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eEluID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0eE91dCwgdHhJbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgaW5zdGFsbG1lbnQgcGF5bWVudHMgbGlua2VkIHRvIHRoaXMgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRPcGVuaW5nQmFsYW5jZUFjdGlvbihhY2NvdW50SWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBkYi5jYXNoQWNjb3VudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBvcGVuaW5nQmFsYW5jZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IE51bWJlcihhY2NvdW50Py5vcGVuaW5nQmFsYW5jZSB8fCAwKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9wZW5pbmcgYmFsYW5jZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdWxrQ2FzaFRyYW5zYWN0aW9uc0FjdGlvbih0cmFuc2FjdGlvbnM6IGFueVtdKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZC5wdXNoKGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1bGsgdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitTQThmc0IsK01BQUEifQ==
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$16d29a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:16d29a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$482b77__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:482b77 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8f514f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:8f514f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a62370__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:a62370 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8f9e2f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:8f9e2f [app-client] (ecmascript) <text/javascript>");
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$16d29a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCashTransactionsAction"])(currentBusiness.id, accountId);
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
                // Server action already sorts, but we can ensure it here
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
        staleTime: 30_000,
        gcTime: 30 * 60_000,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true
    });
    // Derived loading state to avoid flash on background refetch
    const isLoading = isQueryLoading && transactions.length === 0;
    const createTransaction = async (transactionData)=>{
        try {
            if (!user || !currentBusiness) throw new Error('User not authenticated or no business selected');
            // Note: Transfer logic is handled inside the server action now
            const payload = {
                ...transactionData,
                userId: user.id,
                locationId: currentBusiness.id
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$482b77__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCashTransactionAction"])(payload);
            if (!result.success) throw new Error(result.error);
            toast({
                title: "Success",
                description: transactionData.transactionType === 'transfer' ? "Transfer completed successfully" : "Cash transaction created successfully"
            });
            queryClient.invalidateQueries({
                queryKey
            });
            // If result.data is an array (transfer), return the first one as before
            return Array.isArray(result.data) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(result.data[0]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$cash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbCashTransactionToCashTransaction"])(result.data);
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
            const payloads = transactionsData.map((t)=>({
                    ...t,
                    userId: user.id,
                    locationId: currentBusiness.id
                }));
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8f9e2f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBulkCashTransactionsAction"])(payloads);
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
                description: "Failed to create bulk transactions. Please try again.",
                variant: "destructive"
            });
            throw error;
        }
    };
    const updateTransaction = async (id, updates)=>{
        try {
            if (!user || !currentBusiness) throw new Error('User not authenticated or no business selected');
            // Note: finance.ts updateTransactionAction is missing, I should've called it updateTransactionAction or similar
            // For now, let's assume I'll add it or call updateExpenseAction if I were updating via expense.
            // Actually, I'll add updateCashTransactionAction to finance.ts.
            // Temporary fallback until I update finance.ts
            console.warn('Update logic for standalone cash transactions moving to server soon');
            return null;
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8f514f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCashTransactionAction"])(id, currentBusiness.id);
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a62370__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAccountOpeningBalanceAction"])(accountId, currentBusiness.id);
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
"[project]/src/app/actions/data:6d0100 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBusinessSettingsAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"409fca4033c47a8ce32274ee5d84a1bf7b5ddd0ee6":"getBusinessSettingsAction"},"src/app/actions/business-settings.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("409fca4033c47a8ce32274ee5d84a1bf7b5ddd0ee6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getBusinessSettingsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3Mtc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1c2luZXNzU2V0dGluZ3NBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGRiLmJyYW5jaFNldHRpbmdzLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogc2V0dGluZ3MuaWQsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX25hbWU6IHNldHRpbmdzLmJ1c2luZXNzTmFtZSxcclxuICAgICAgICAgICAgYnVzaW5lc3NfYWRkcmVzczogc2V0dGluZ3MuYWRkcmVzcyxcclxuICAgICAgICAgICAgYnVzaW5lc3NfcGhvbmU6IHNldHRpbmdzLnBob25lLFxyXG4gICAgICAgICAgICBidXNpbmVzc19lbWFpbDogc2V0dGluZ3MuZW1haWwsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2xvZ286IHNldHRpbmdzLmxvZ28sXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBzZXR0aW5ncy5jdXJyZW5jeSxcclxuICAgICAgICAgICAgc2lnbmF0dXJlOiBzZXR0aW5ncy5zaWduYXR1cmVJbWFnZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHNldHRpbmdzLm1ldGFkYXRhIHx8IHt9XHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYnVzaW5lc3Mgc2V0dGluZ3M6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0QnVzaW5lc3NTZXR0aW5nc0FjdGlvbihicmFuY2hJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgdXBkYXRlRGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFZhbGlkYXRlIHVzZXIgYWNjZXNzIHRvIGJyYW5jaFxyXG4gICAgICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IGRiLmJyYW5jaC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgT1I6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGFkbWluSWQ6IHVzZXJJZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdXNlcnM6IHsgc29tZTogeyBpZDogdXNlcklkIH0gfSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFicmFuY2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVW5hdXRob3JpemVkIHRvIHVwZGF0ZSBicmFuY2ggc2V0dGluZ3MnIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBidXNpbmVzc05hbWU6IHVwZGF0ZURhdGEuYnVzaW5lc3NfbmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogdXBkYXRlRGF0YS5idXNpbmVzc19hZGRyZXNzLFxyXG4gICAgICAgICAgICBwaG9uZTogdXBkYXRlRGF0YS5idXNpbmVzc19waG9uZSxcclxuICAgICAgICAgICAgZW1haWw6IHVwZGF0ZURhdGEuYnVzaW5lc3NfZW1haWwsXHJcbiAgICAgICAgICAgIGxvZ286IHVwZGF0ZURhdGEuYnVzaW5lc3NfbG9nbyxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHVwZGF0ZURhdGEuY3VycmVuY3ksXHJcbiAgICAgICAgICAgIHNpZ25hdHVyZUltYWdlOiB1cGRhdGVEYXRhLnNpZ25hdHVyZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHVwZGF0ZURhdGEubWV0YWRhdGFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB1cHNlcnRlZCA9IGF3YWl0IGRiLmJyYW5jaFNldHRpbmdzLnVwc2VydCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICB1cGRhdGU6IGRhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgLi4uZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB1cHNlcnRlZC5pZCxcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX25hbWU6IHVwc2VydGVkLmJ1c2luZXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX2FkZHJlc3M6IHVwc2VydGVkLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19waG9uZTogdXBzZXJ0ZWQucGhvbmUsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19lbWFpbDogdXBzZXJ0ZWQuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19sb2dvOiB1cHNlcnRlZC5sb2dvLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHVwc2VydGVkLmN1cnJlbmN5LFxyXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlOiB1cHNlcnRlZC5zaWduYXR1cmVJbWFnZSxcclxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB1cHNlcnRlZC5tZXRhZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cHNlcnRpbmcgYnVzaW5lc3Mgc2V0dGluZ3M6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHVwZGF0ZSBzZXR0aW5ncycgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtUQUtzQixzTUFBQSJ9
}),
"[project]/src/app/actions/data:01c0b4 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "upsertBusinessSettingsAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"7030790b3d20fcf62d9c199d3ecacadd25d0d7ec17":"upsertBusinessSettingsAction"},"src/app/actions/business-settings.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7030790b3d20fcf62d9c199d3ecacadd25d0d7ec17", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "upsertBusinessSettingsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3Mtc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1c2luZXNzU2V0dGluZ3NBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGRiLmJyYW5jaFNldHRpbmdzLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogc2V0dGluZ3MuaWQsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX25hbWU6IHNldHRpbmdzLmJ1c2luZXNzTmFtZSxcclxuICAgICAgICAgICAgYnVzaW5lc3NfYWRkcmVzczogc2V0dGluZ3MuYWRkcmVzcyxcclxuICAgICAgICAgICAgYnVzaW5lc3NfcGhvbmU6IHNldHRpbmdzLnBob25lLFxyXG4gICAgICAgICAgICBidXNpbmVzc19lbWFpbDogc2V0dGluZ3MuZW1haWwsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2xvZ286IHNldHRpbmdzLmxvZ28sXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBzZXR0aW5ncy5jdXJyZW5jeSxcclxuICAgICAgICAgICAgc2lnbmF0dXJlOiBzZXR0aW5ncy5zaWduYXR1cmVJbWFnZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHNldHRpbmdzLm1ldGFkYXRhIHx8IHt9XHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYnVzaW5lc3Mgc2V0dGluZ3M6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0QnVzaW5lc3NTZXR0aW5nc0FjdGlvbihicmFuY2hJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgdXBkYXRlRGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFZhbGlkYXRlIHVzZXIgYWNjZXNzIHRvIGJyYW5jaFxyXG4gICAgICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IGRiLmJyYW5jaC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgT1I6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGFkbWluSWQ6IHVzZXJJZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdXNlcnM6IHsgc29tZTogeyBpZDogdXNlcklkIH0gfSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFicmFuY2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVW5hdXRob3JpemVkIHRvIHVwZGF0ZSBicmFuY2ggc2V0dGluZ3MnIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBidXNpbmVzc05hbWU6IHVwZGF0ZURhdGEuYnVzaW5lc3NfbmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogdXBkYXRlRGF0YS5idXNpbmVzc19hZGRyZXNzLFxyXG4gICAgICAgICAgICBwaG9uZTogdXBkYXRlRGF0YS5idXNpbmVzc19waG9uZSxcclxuICAgICAgICAgICAgZW1haWw6IHVwZGF0ZURhdGEuYnVzaW5lc3NfZW1haWwsXHJcbiAgICAgICAgICAgIGxvZ286IHVwZGF0ZURhdGEuYnVzaW5lc3NfbG9nbyxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHVwZGF0ZURhdGEuY3VycmVuY3ksXHJcbiAgICAgICAgICAgIHNpZ25hdHVyZUltYWdlOiB1cGRhdGVEYXRhLnNpZ25hdHVyZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHVwZGF0ZURhdGEubWV0YWRhdGFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB1cHNlcnRlZCA9IGF3YWl0IGRiLmJyYW5jaFNldHRpbmdzLnVwc2VydCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICB1cGRhdGU6IGRhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgLi4uZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB1cHNlcnRlZC5pZCxcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX25hbWU6IHVwc2VydGVkLmJ1c2luZXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX2FkZHJlc3M6IHVwc2VydGVkLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19waG9uZTogdXBzZXJ0ZWQucGhvbmUsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19lbWFpbDogdXBzZXJ0ZWQuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19sb2dvOiB1cHNlcnRlZC5sb2dvLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHVwc2VydGVkLmN1cnJlbmN5LFxyXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlOiB1cHNlcnRlZC5zaWduYXR1cmVJbWFnZSxcclxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB1cHNlcnRlZC5tZXRhZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cHNlcnRpbmcgYnVzaW5lc3Mgc2V0dGluZ3M6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHVwZGF0ZSBzZXR0aW5ncycgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFUQWdDc0IseU1BQUEifQ==
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
"[project]/src/components/cash/DeleteCashAccountDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
;
;
const DeleteCashAccountDialog = ({ open, onOpenChange, account, transactionCount = 0, details, onConfirm })=>{
    if (!account) return null;
    const hasTransactions = transactionCount > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                            children: "Delete Cash Account"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block",
                                    children: [
                                        'Are you sure you want to delete the cash account "',
                                        account.name,
                                        '"?'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                hasTransactions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-amber-600 font-medium",
                                    children: [
                                        "This account has ",
                                        details || `${transactionCount} linked records`,
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                    className: hasTransactions ? "flex-col gap-2 sm:flex-col" : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        hasTransactions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    onClick: ()=>onConfirm(false),
                                    className: "bg-blue-600 hover:bg-blue-700",
                                    children: "Delete Account Only (Unlink Records)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    onClick: ()=>onConfirm(true),
                                    className: "bg-red-600 hover:bg-red-700",
                                    children: "Delete Account & All Records"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                            onClick: ()=>onConfirm(false),
                            className: "bg-red-600 hover:bg-red-700",
                            children: "Delete Account"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/cash/DeleteCashAccountDialog.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DeleteCashAccountDialog;
const __TURBOPACK__default__export__ = DeleteCashAccountDialog;
var _c;
__turbopack_context__.k.register(_c, "DeleteCashAccountDialog");
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
"[project]/src/components/cash/CashAccountCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-right.js [app-client] (ecmascript) <export default as ArrowDownRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCashAccounts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashTransactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCashTransactions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$DeleteCashAccountDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cash/DeleteCashAccountDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFinancialVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFinancialVisibility.ts [app-client] (ecmascript)");
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
const CashAccountCard = ({ account, onAccountDeleted })=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const { deleteAccount, deleteAccountWithTransactions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashAccounts"])();
    const { getDailySummary } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashTransactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashTransactions"])(account.id);
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { hasPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const { canManageFinanceAccounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFinancialVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinancialVisibility"])();
    const canDelete = hasPermission('finance', 'delete');
    const [isLoadingSummary, setIsLoadingSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [deleteDialogOpen, setDeleteDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transactionCount, setTransactionCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [deleteDetails, setDeleteDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [todaysSummary, setTodaysSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        date: new Date(),
        openingBalance: 0,
        cashIn: 0,
        cashOut: 0,
        transfersIn: 0,
        transfersOut: 0,
        closingBalance: 0
    });
    // Memoize currency formatter
    const formatCurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CashAccountCard.useMemo[formatCurrency]": ()=>{
            return ({
                "CashAccountCard.useMemo[formatCurrency]": (amount)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCashAmount"])(amount, settings.currency || 'USD');
                }
            })["CashAccountCard.useMemo[formatCurrency]"];
        }
    }["CashAccountCard.useMemo[formatCurrency]"], [
        settings.currency
    ]);
    // Load today's summary to get opening, closing, and current balance
    const loadTodaysSummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CashAccountCard.useCallback[loadTodaysSummary]": async ()=>{
            setIsLoadingSummary(true);
            try {
                const summary = await getDailySummary(new Date(), account.id);
                setTodaysSummary(summary);
            } catch (error) {
                console.error('Error loading today\'s summary:', error);
            } finally{
                setIsLoadingSummary(false);
            }
        }
    }["CashAccountCard.useCallback[loadTodaysSummary]"], [
        getDailySummary,
        account.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CashAccountCard.useEffect": ()=>{
            loadTodaysSummary();
        }
    }["CashAccountCard.useEffect"], [
        loadTodaysSummary
    ]);
    // Memoized handlers
    const handleDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CashAccountCard.useCallback[handleDelete]": async ()=>{
            console.log('Delete button clicked for account:', account.id);
            try {
                const result = await deleteAccount(account.id, onAccountDeleted);
                console.log('Delete result:', result);
                if (result && typeof result === 'object' && 'hasTransactions' in result) {
                    if (result.hasTransactions) {
                        console.log('Account has transactions, showing dialog');
                        // Show dialog with transaction count and details
                        setTransactionCount(result.transactionCount || 0);
                        setDeleteDetails(result.details || '');
                        setDeleteDialogOpen(true);
                    } else if (result.success) {
                        console.log('Account deleted successfully without dialog');
                    // Account was deleted successfully
                    } else {
                        console.log('Account deletion failed');
                    // Deletion failed, error was already shown in toast
                    }
                }
            } catch (error) {
                console.error('Unexpected error during deletion:', error);
            }
        }
    }["CashAccountCard.useCallback[handleDelete]"], [
        deleteAccount,
        account.id,
        onAccountDeleted
    ]);
    const handleConfirmDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CashAccountCard.useCallback[handleConfirmDelete]": async (deleteTransactions)=>{
            console.log('Confirm delete called with deleteTransactions:', deleteTransactions);
            try {
                const success = await deleteAccountWithTransactions(account.id, deleteTransactions, onAccountDeleted);
                console.log('Delete with transactions result:', success);
                if (success) {
                    setDeleteDialogOpen(false);
                    console.log('Deletion successful, dialog closed');
                } else {
                    console.log('Deletion failed');
                }
            } catch (error) {
                console.error('Error in handleConfirmDelete:', error);
            }
        }
    }["CashAccountCard.useCallback[handleConfirmDelete]"], [
        deleteAccountWithTransactions,
        account.id,
        onAccountDeleted
    ]);
    const handleCardClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CashAccountCard.useCallback[handleCardClick]": ()=>{
            navigate(`/cash/${account.id}`);
        }
    }["CashAccountCard.useCallback[handleCardClick]"], [
        navigate,
        account.id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: `hover:shadow-lg transition-all duration-200 cursor-pointer ${isMobile ? 'shadow-sm border-gray-200' : 'hover:shadow-md'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: `flex flex-row items-center justify-between space-y-0 ${isMobile ? 'pb-3' : 'pb-2'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: `${isMobile ? 'text-base' : 'text-sm'} font-semibold flex items-center gap-2 text-gray-900`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                        className: `${isMobile ? 'h-5 w-5' : 'h-4 w-4'} text-primary`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: account.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    account.isDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "secondary",
                                        className: `${isMobile ? 'text-xs px-2 py-0.5' : 'text-xs'} bg-primary/10 text-primary border-primary/20`,
                                        children: "Default"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            className: `${isMobile ? 'h-8 w-8' : 'h-8 w-8'} p-0 hover:bg-gray-100`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                className: "h-4 w-4 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "end",
                                        className: "bg-white border border-gray-200 shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: handleCardClick,
                                                className: "hover:bg-gray-50",
                                                children: "View Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            canDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: handleDelete,
                                                className: "text-red-600 hover:bg-red-50",
                                                children: "Delete Account"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        onClick: handleCardClick,
                        className: isMobile ? 'px-4 pb-4' : '',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `space-y-${isMobile ? '4' : '3'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: isMobile ? 'space-y-1' : '',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${isMobile ? 'text-2xl' : 'text-2xl'} font-bold text-gray-900 flex items-center`,
                                            children: isLoadingSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-6 w-6 animate-spin text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : canManageFinanceAccounts ? formatCurrency(todaysSummary.closingBalance) : '•••'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${isMobile ? 'text-sm' : 'text-xs'} text-gray-500 font-medium`,
                                            children: "Current Balance"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                account.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${isMobile ? 'text-sm leading-relaxed' : 'text-sm'} text-gray-600 line-clamp-2`,
                                    children: account.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid grid-cols-1 ${isMobile ? 'gap-3' : 'gap-2'} ${isMobile ? 'text-sm' : 'text-sm'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-2 bg-green-50 rounded-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-green-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Opening"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-green-800 flex items-center",
                                                    children: isLoadingSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 animate-spin text-green-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)) : canManageFinanceAccounts ? formatCurrency(todaysSummary.openingBalance) : '•••'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-2 bg-blue-50 rounded-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-blue-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownRight$3e$__["ArrowDownRight"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Today's Close"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-blue-800 flex items-center",
                                                    children: isLoadingSummary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                        className: "h-4 w-4 animate-spin text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)) : canManageFinanceAccounts ? formatCurrency(todaysSummary.closingBalance) : '•••'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${isMobile ? 'pt-2' : 'pt-2'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: isMobile ? "default" : "sm",
                                        className: `w-full font-medium hover:bg-primary hover:text-white transition-colors ${isMobile ? 'h-10' : ''}`,
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            handleCardClick();
                                        },
                                        children: "Manage Account"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$DeleteCashAccountDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: deleteDialogOpen,
                onOpenChange: setDeleteDialogOpen,
                account: account,
                transactionCount: transactionCount,
                details: deleteDetails,
                onConfirm: handleConfirmDelete
            }, void 0, false, {
                fileName: "[project]/src/components/cash/CashAccountCard.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CashAccountCard, "Iuok79zHy9z4cTJSJ7Q57J8nuME=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashAccounts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashTransactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashTransactions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFinancialVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinancialVisibility"]
    ];
});
_c = CashAccountCard;
const __TURBOPACK__default__export__ = CashAccountCard;
var _c;
__turbopack_context__.k.register(_c, "CashAccountCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cash/CashAccountsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$CashAccountCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cash/CashAccountCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const CashAccountsList = ({ accounts, isLoading, onCreateAccount, onAccountDeleted, canCreate = true })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
            children: [
                1,
                2,
                3
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-64 bg-gray-100 animate-pulse rounded-lg"
                }, i, false, {
                    fileName: "[project]/src/components/cash/CashAccountsList.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/cash/CashAccountsList.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (accounts.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-medium text-gray-900 mb-2",
                    children: "No cash accounts"
                }, void 0, false, {
                    fileName: "[project]/src/components/cash/CashAccountsList.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mb-4",
                    children: "Get started by creating your first cash account."
                }, void 0, false, {
                    fileName: "[project]/src/components/cash/CashAccountsList.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                canCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: onCreateAccount,
                    className: "gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cash/CashAccountsList.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Create Cash Account"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cash/CashAccountsList.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cash/CashAccountsList.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
        children: accounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$CashAccountCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                account: account,
                onAccountDeleted: onAccountDeleted
            }, account.id, false, {
                fileName: "[project]/src/components/cash/CashAccountsList.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/cash/CashAccountsList.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CashAccountsList, "zdJ8C3X+YlDYVai5EPOd8CzoqSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = CashAccountsList;
const __TURBOPACK__default__export__ = CashAccountsList;
var _c;
__turbopack_context__.k.register(_c, "CashAccountsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 11,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/checkbox.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/checkbox.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/checkbox.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Checkbox;
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Checkbox$React.forwardRef");
__turbopack_context__.k.register(_c1, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cash/CashAccountDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
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
const CashAccountDialog = ({ open, onOpenChange, onSubmit, title, initialData, isSubmitting = false })=>{
    _s();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        defaultValues: {
            name: '',
            description: '',
            isDefault: false,
            ...initialData
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "CashAccountDialog.useEffect": ()=>{
            if (open && initialData) {
                reset({
                    name: initialData.name || '',
                    description: initialData.description || '',
                    openingBalance: initialData.openingBalance || 0,
                    isDefault: initialData.isDefault || false
                });
            } else if (open) {
                reset({
                    name: '',
                    description: '',
                    openingBalance: undefined,
                    isDefault: false
                });
            }
        }
    }["CashAccountDialog.useEffect"], [
        open,
        initialData,
        reset
    ]);
    const isDefault = watch('isDefault');
    const handleFormSubmit = (data)=>{
        onSubmit(data);
    };
    // Use business settings currency, default to UGX if not set
    const currency = settings.currency || 'UGX';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[425px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit(handleFormSubmit),
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "name",
                                    children: "Account Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "name",
                                    ...register('name', {
                                        required: 'Account name is required'
                                    }),
                                    placeholder: "e.g., Main Cash, Petty Cash",
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600",
                                    children: errors.name.message
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "description",
                                    children: "Description (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    id: "description",
                                    ...register('description'),
                                    placeholder: "Brief description of this account",
                                    rows: 3,
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "openingBalance",
                                    children: [
                                        "Opening Balance (",
                                        currency,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "openingBalance",
                                    type: "number",
                                    step: "0.01",
                                    ...register('openingBalance', {
                                        required: 'Opening balance is required',
                                        min: {
                                            value: 0,
                                            message: 'Opening balance cannot be negative'
                                        }
                                    }),
                                    placeholder: "0.00",
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                errors.openingBalance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600",
                                    children: errors.openingBalance.message
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                    id: "isDefault",
                                    checked: isDefault,
                                    onCheckedChange: (checked)=>setValue('isDefault', checked),
                                    disabled: isSubmitting
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "isDefault",
                                    className: "text-sm",
                                    children: "Set as default account"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-2 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: ()=>onOpenChange(false),
                                    disabled: isSubmitting,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isSubmitting,
                                    children: isSubmitting ? initialData ? 'Updating...' : 'Creating...' : initialData ? 'Update Account' : 'Create Account'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/cash/CashAccountDialog.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CashAccountDialog, "BwevhjQvG9wNKZVDNJSEdEBg8T0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = CashAccountDialog;
const __TURBOPACK__default__export__ = CashAccountDialog;
var _c;
__turbopack_context__.k.register(_c, "CashAccountDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Sale item type definition
__turbopack_context__.s([
    "mapBusinessSettingsToDbBusinessSettings",
    ()=>mapBusinessSettingsToDbBusinessSettings,
    "mapCustomerToDbCustomer",
    ()=>mapCustomerToDbCustomer,
    "mapDbBusinessSettingsToBusinessSettings",
    ()=>mapDbBusinessSettingsToBusinessSettings,
    "mapDbCustomerToCustomer",
    ()=>mapDbCustomerToCustomer,
    "mapDbExpenseToExpense",
    ()=>mapDbExpenseToExpense,
    "mapDbProductCategoryToProductCategory",
    ()=>mapDbProductCategoryToProductCategory,
    "mapDbProductToProduct",
    ()=>mapDbProductToProduct,
    "mapDbSaleToSale",
    ()=>mapDbSaleToSale,
    "mapDbStockHistoryToStockHistory",
    ()=>mapDbStockHistoryToStockHistory,
    "mapExpenseToDbExpense",
    ()=>mapExpenseToDbExpense,
    "mapProductToDbProduct",
    ()=>mapProductToDbProduct,
    "mapSaleToDbSale",
    ()=>mapSaleToDbSale
]);
const mapDbSaleToSale = (dbSale)=>{
    // Parse items and ensure numeric fields are numbers, not strings
    // This is critical for discount calculations to work correctly
    const items = (Array.isArray(dbSale.items) ? dbSale.items : []).map((item)=>{
        const discountPercentage = item.discountPercentage !== undefined ? Number(item.discountPercentage) : undefined;
        const discountAmount = item.discountAmount !== undefined ? Number(item.discountAmount) : undefined;
        // Infer discountType if missing (for legacy data)
        let discountType = item.discountType;
        if (!discountType) {
            if (discountPercentage && discountPercentage > 0) {
                discountType = 'percentage';
            } else if (discountAmount && discountAmount > 0) {
                discountType = 'amount';
            }
        }
        return {
            description: item.description || '',
            quantity: Number(item.quantity) || 0,
            price: Number(item.price) || 0,
            cost: Number(item.cost) || 0,
            productId: item.productId || undefined,
            discountType,
            discountPercentage,
            discountAmount,
            createdAt: item.createdAt || undefined
        };
    });
    return {
        id: dbSale.id,
        receiptNumber: dbSale.receipt_number,
        customerName: dbSale.customer_name,
        customerAddress: dbSale.customer_address || '',
        customerContact: dbSale.customer_contact || '',
        customerId: dbSale.customer_id || undefined,
        items,
        paymentStatus: dbSale.payment_status,
        profit: Number(dbSale.profit),
        date: new Date(dbSale.date),
        taxRate: dbSale.tax_rate ? Number(dbSale.tax_rate) : 0,
        cashTransactionId: dbSale.cash_transaction_id || undefined,
        amountPaid: dbSale.amount_paid ? Number(dbSale.amount_paid) : undefined,
        amountDue: dbSale.amount_due ? Number(dbSale.amount_due) : undefined,
        notes: dbSale.notes || '',
        categoryId: dbSale.category_id || undefined,
        createdAt: new Date(dbSale.created_at)
    };
};
const mapSaleToDbSale = (saleData, selectedDate, profit, receiptNumber, userId, locationId, cashTransactionId)=>{
    return {
        user_id: userId,
        location_id: locationId,
        receipt_number: receiptNumber,
        customer_name: saleData.customerName,
        customer_address: saleData.customerAddress || null,
        customer_contact: saleData.customerContact || null,
        customer_id: saleData.customerId || null,
        items: saleData.items,
        payment_status: saleData.paymentStatus,
        profit: profit,
        date: selectedDate.toISOString().split('T')[0],
        tax_rate: saleData.taxRate || 0,
        cash_transaction_id: cashTransactionId || null,
        amount_paid: saleData.amountPaid || null,
        amount_due: saleData.amountDue || null,
        notes: saleData.notes || null,
        category_id: saleData.categoryId || null
    };
};
const mapDbBusinessSettingsToBusinessSettings = (dbSettings)=>{
    return {
        businessName: dbSettings.business_name,
        businessAddress: dbSettings.business_address,
        businessPhone: dbSettings.business_phone,
        businessEmail: dbSettings.business_email,
        businessLogo: dbSettings.business_logo,
        currency: dbSettings.currency,
        signature: dbSettings.signature,
        paymentInfo: dbSettings.metadata && typeof dbSettings.metadata === 'object' ? dbSettings.metadata.payment_info || '' : '',
        defaultPrintFormat: dbSettings.metadata && typeof dbSettings.metadata === 'object' ? dbSettings.metadata.default_print_format || 'standard' : 'standard',
        defaultPrinterName: dbSettings.metadata && typeof dbSettings.metadata === 'object' ? dbSettings.metadata.default_printer_name || '' : '',
        defaultPrinterType: dbSettings.metadata && typeof dbSettings.metadata === 'object' ? dbSettings.metadata.default_printer_type || 'USB' : 'USB'
    };
};
const mapBusinessSettingsToDbBusinessSettings = (settings, userId)=>{
    // Create metadata object with payment_info
    const metadata = {
        payment_info: settings.paymentInfo || '',
        default_print_format: settings.defaultPrintFormat || 'standard',
        default_printer_name: settings.defaultPrinterName || '',
        default_printer_type: settings.defaultPrinterType || 'USB'
    };
    return {
        user_id: userId,
        business_name: settings.businessName,
        business_address: settings.businessAddress,
        business_phone: settings.businessPhone,
        business_email: settings.businessEmail,
        business_logo: settings.businessLogo,
        currency: settings.currency,
        signature: settings.signature,
        metadata: metadata,
        updated_at: new Date().toISOString()
    };
};
const mapDbProductToProduct = (dbProduct)=>{
    return {
        id: dbProduct.id,
        itemNumber: dbProduct.item_number,
        barcode: dbProduct.barcode,
        manufacturerBarcode: dbProduct.manufacturer_barcode,
        name: dbProduct.name,
        description: dbProduct.description,
        category: dbProduct.category,
        quantity: dbProduct.quantity,
        costPrice: Number(dbProduct.cost_price),
        sellingPrice: Number(dbProduct.selling_price),
        supplier: dbProduct.supplier,
        imageUrl: dbProduct.image_url,
        minimumStock: dbProduct.minimum_stock,
        createdAt: new Date(dbProduct.created_at),
        updatedAt: new Date(dbProduct.updated_at)
    };
};
const mapProductToDbProduct = (product, userId)=>{
    const result = {
        user_id: userId
    };
    if (product.id) result.id = product.id;
    if (product.itemNumber) result.item_number = product.itemNumber; // Added item number mapping
    if (product.barcode !== undefined) result.barcode = product.barcode; // Added barcode mapping
    if (product.manufacturerBarcode !== undefined) result.manufacturer_barcode = product.manufacturerBarcode; // Added manufacturer barcode mapping
    if (product.name) result.name = product.name;
    result.description = product.description;
    if (product.category) result.category = product.category;
    if (product.quantity !== undefined) result.quantity = product.quantity;
    if (product.costPrice !== undefined) {
        result.cost_price = product.costPrice;
        console.log(`DEBUG: Mapping costPrice ${product.costPrice} to cost_price`);
    }
    if (product.sellingPrice !== undefined) {
        result.selling_price = product.sellingPrice;
        console.log(`DEBUG: Mapping sellingPrice ${product.sellingPrice} to selling_price`);
    }
    result.supplier = product.supplier;
    result.image_url = product.imageUrl;
    if (product.minimumStock !== undefined) result.minimum_stock = product.minimumStock;
    return result;
};
const mapDbProductCategoryToProductCategory = (dbCategory)=>{
    return {
        id: dbCategory.id,
        name: dbCategory.name
    };
};
const mapDbStockHistoryToStockHistory = (dbHistory)=>{
    return {
        id: dbHistory.id,
        productId: dbHistory.product_id,
        oldQuantity: dbHistory.previous_quantity,
        newQuantity: dbHistory.new_quantity,
        changeReason: dbHistory.change_reason,
        referenceId: dbHistory.reference_id || null,
        createdAt: new Date(dbHistory.created_at)
    };
};
const mapDbCustomerToCustomer = (dbCustomer)=>{
    let birthday = null;
    if (dbCustomer.birthday) {
        try {
            const birthdayStr = String(dbCustomer.birthday);
            const [year, month, day] = birthdayStr.split('-').map(Number);
            if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
                birthday = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
                console.log('Converting DB birthday to Date object:', dbCustomer.birthday, '→', birthday, '(UTC string:', birthday.toISOString(), ')');
            } else {
                console.error('Invalid date components in birthday:', dbCustomer.birthday);
            }
        } catch (error) {
            console.error('Error parsing birthday:', error, dbCustomer.birthday);
        }
    }
    return {
        id: dbCustomer.id,
        fullName: dbCustomer.full_name,
        email: dbCustomer.email,
        phoneNumber: dbCustomer.phone_number,
        birthday: birthday,
        location: dbCustomer.location,
        categoryId: dbCustomer.category_id,
        socialMedia: dbCustomer.social_media,
        gender: dbCustomer.gender,
        tags: dbCustomer.tags,
        notes: dbCustomer.notes,
        createdAt: new Date(dbCustomer.created_at),
        updatedAt: new Date(dbCustomer.updated_at)
    };
};
const mapCustomerToDbCustomer = (customer, userId)=>{
    const result = {
        user_id: userId
    };
    if (customer.id) result.id = customer.id;
    if (customer.fullName) result.full_name = customer.fullName;
    result.email = customer.email;
    result.phone_number = customer.phoneNumber;
    if (customer.birthday) result.birthday = customer.birthday.toISOString().split('T')[0];
    result.location = customer.location;
    result.category_id = customer.categoryId; // Added category mapping
    result.social_media = customer.socialMedia;
    result.gender = customer.gender;
    result.tags = customer.tags;
    result.notes = customer.notes;
    return result;
};
const mapDbExpenseToExpense = (dbExpense)=>{
    return {
        id: dbExpense.id,
        amount: Number(dbExpense.amount),
        description: dbExpense.description,
        category: dbExpense.category,
        date: new Date(dbExpense.date),
        paymentMethod: dbExpense.payment_method,
        personInCharge: dbExpense.person_in_charge,
        receiptImage: dbExpense.receipt_image,
        cashAccountId: dbExpense.cash_account_id,
        cashTransactionId: dbExpense.cash_transaction_id,
        createdAt: new Date(dbExpense.created_at),
        updatedAt: new Date(dbExpense.updated_at)
    };
};
const mapExpenseToDbExpense = (expense, userId)=>{
    const result = {
        user_id: userId
    };
    if (expense.id) result.id = expense.id;
    if (expense.amount !== undefined) result.amount = expense.amount;
    if (expense.description) result.description = expense.description;
    result.category = expense.category;
    if (expense.date) result.date = expense.date.toISOString().split('T')[0];
    result.payment_method = expense.paymentMethod;
    result.person_in_charge = expense.personInCharge;
    result.receipt_image = expense.receiptImage;
    result.cash_account_id = expense.cashAccountId;
    result.cash_transaction_id = expense.cashTransactionId;
    return result;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useActivityLogger.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/hooks/useActivityLogger.ts'\n\nExpected a semicolon");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
"[project]/src/app/actions/data:9c2417 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgIG5ld1F1YW50aXR5OiBkYXRhLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBjaGFuZ2VSZWFzb246IGBbJHtwcm9kdWN0Lm5hbWV9XSB8IEluaXRpYWwgc3RvY2tgLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGRhdGEuY3JlYXRlZEF0ID8gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogcmVzdWx0LmlkLFxyXG4gICAgICBuYW1lOiByZXN1bHQubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHJlc3VsdC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHJlc3VsdC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgIHF1YW50aXR5OiByZXN1bHQuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcmVzdWx0LmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiByZXN1bHQuc2VsbGluZ1ByaWNlLFxyXG4gICAgICBzdXBwbGllcjogcmVzdWx0LnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcmVzdWx0LmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiByZXN1bHQuYmFyY29kZSxcclxuICAgICAgaXRlbU51bWJlcjogcmVzdWx0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiByZXN1bHQubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmNyZWF0ZWRBdCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdldCBjdXJyZW50IHByb2R1Y3Qgc3RhdGVcclxuICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4LnByb2R1Y3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgc3RvY2s6IHRydWUsIG5hbWU6IHRydWUgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAvLyAyLiBQZXJmb3JtIHVwZGF0ZVxyXG4gICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiB1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCA/IHVwZGF0ZXMuY2F0ZWdvcnlJZCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHN1cHBsaWVySWQ6IHVwZGF0ZXMuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5zdXBwbGllcklkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiB1cGRhdGVzLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogdXBkYXRlcy5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgICBzZWxsaW5nUHJpY2U6IHVwZGF0ZXMuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuIENyZWF0ZSBoaXN0b3J5IGlmIHF1YW50aXR5IGNoYW5nZWRcclxuICAgICAgaWYgKHVwZGF0ZXMucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB1cGRhdGVzLnF1YW50aXR5ICE9PSBjdXJyZW50LnN0b2NrICYmIHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uICE9PSAnc2tpcC1oaXN0b3J5Jykge1xyXG4gICAgICAgIGxldCBjaGFuZ2VSZWFzb24gPSB1cGRhdGVzLmN1c3RvbUNoYW5nZVJlYXNvbjtcclxuICAgICAgICBpZiAoIWNoYW5nZVJlYXNvbikge1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZXMuaXNGcm9tU2FsZSkgY2hhbmdlUmVhc29uID0gXCJTYWxlXCI7XHJcbiAgICAgICAgICBlbHNlIGlmICh1cGRhdGVzLnF1YW50aXR5ID4gY3VycmVudC5zdG9jaykgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgYWRkaXRpb25cIjtcclxuICAgICAgICAgIGVsc2UgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgcmVkdWN0aW9uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzbmFwc2hvdHRlZFJlYXNvbiA9IGBbJHt1cGRhdGVkLm5hbWV9XSB8ICR7Y2hhbmdlUmVhc29ufWA7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXBkYXRlcy51c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHVwZGF0ZXMuYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICBwcmV2aW91c1F1YW50aXR5OiBjdXJyZW50LnN0b2NrLFxyXG4gICAgICAgICAgICBuZXdRdWFudGl0eTogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgICAgY2hhbmdlUmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlTQVFzQiw4TEFBQSJ9
}),
"[project]/src/app/actions/data:a288c4 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProductAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40e6e2b9a239ff8e25973462e2f5dc757886e88d1b":"createProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40e6e2b9a239ff8e25973462e2f5dc757886e88d1b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgIG5ld1F1YW50aXR5OiBkYXRhLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBjaGFuZ2VSZWFzb246IGBbJHtwcm9kdWN0Lm5hbWV9XSB8IEluaXRpYWwgc3RvY2tgLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGRhdGEuY3JlYXRlZEF0ID8gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogcmVzdWx0LmlkLFxyXG4gICAgICBuYW1lOiByZXN1bHQubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHJlc3VsdC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHJlc3VsdC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgIHF1YW50aXR5OiByZXN1bHQuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcmVzdWx0LmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiByZXN1bHQuc2VsbGluZ1ByaWNlLFxyXG4gICAgICBzdXBwbGllcjogcmVzdWx0LnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcmVzdWx0LmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiByZXN1bHQuYmFyY29kZSxcclxuICAgICAgaXRlbU51bWJlcjogcmVzdWx0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiByZXN1bHQubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmNyZWF0ZWRBdCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdldCBjdXJyZW50IHByb2R1Y3Qgc3RhdGVcclxuICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4LnByb2R1Y3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgc3RvY2s6IHRydWUsIG5hbWU6IHRydWUgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAvLyAyLiBQZXJmb3JtIHVwZGF0ZVxyXG4gICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiB1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCA/IHVwZGF0ZXMuY2F0ZWdvcnlJZCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHN1cHBsaWVySWQ6IHVwZGF0ZXMuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5zdXBwbGllcklkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiB1cGRhdGVzLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogdXBkYXRlcy5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgICBzZWxsaW5nUHJpY2U6IHVwZGF0ZXMuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuIENyZWF0ZSBoaXN0b3J5IGlmIHF1YW50aXR5IGNoYW5nZWRcclxuICAgICAgaWYgKHVwZGF0ZXMucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB1cGRhdGVzLnF1YW50aXR5ICE9PSBjdXJyZW50LnN0b2NrICYmIHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uICE9PSAnc2tpcC1oaXN0b3J5Jykge1xyXG4gICAgICAgIGxldCBjaGFuZ2VSZWFzb24gPSB1cGRhdGVzLmN1c3RvbUNoYW5nZVJlYXNvbjtcclxuICAgICAgICBpZiAoIWNoYW5nZVJlYXNvbikge1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZXMuaXNGcm9tU2FsZSkgY2hhbmdlUmVhc29uID0gXCJTYWxlXCI7XHJcbiAgICAgICAgICBlbHNlIGlmICh1cGRhdGVzLnF1YW50aXR5ID4gY3VycmVudC5zdG9jaykgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgYWRkaXRpb25cIjtcclxuICAgICAgICAgIGVsc2UgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgcmVkdWN0aW9uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzbmFwc2hvdHRlZFJlYXNvbiA9IGBbJHt1cGRhdGVkLm5hbWV9XSB8ICR7Y2hhbmdlUmVhc29ufWA7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXBkYXRlcy51c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHVwZGF0ZXMuYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICBwcmV2aW91c1F1YW50aXR5OiBjdXJyZW50LnN0b2NrLFxyXG4gICAgICAgICAgICBuZXdRdWFudGl0eTogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgICAgY2hhbmdlUmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQWdKc0IsZ01BQUEifQ==
}),
"[project]/src/app/actions/data:7dee8a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProductAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"602c8c093fd55f10cf6448331ef557904f8ffb11d1":"updateProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("602c8c093fd55f10cf6448331ef557904f8ffb11d1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgIG5ld1F1YW50aXR5OiBkYXRhLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBjaGFuZ2VSZWFzb246IGBbJHtwcm9kdWN0Lm5hbWV9XSB8IEluaXRpYWwgc3RvY2tgLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGRhdGEuY3JlYXRlZEF0ID8gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogcmVzdWx0LmlkLFxyXG4gICAgICBuYW1lOiByZXN1bHQubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHJlc3VsdC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHJlc3VsdC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgIHF1YW50aXR5OiByZXN1bHQuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcmVzdWx0LmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiByZXN1bHQuc2VsbGluZ1ByaWNlLFxyXG4gICAgICBzdXBwbGllcjogcmVzdWx0LnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcmVzdWx0LmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiByZXN1bHQuYmFyY29kZSxcclxuICAgICAgaXRlbU51bWJlcjogcmVzdWx0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiByZXN1bHQubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmNyZWF0ZWRBdCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdldCBjdXJyZW50IHByb2R1Y3Qgc3RhdGVcclxuICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4LnByb2R1Y3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgc3RvY2s6IHRydWUsIG5hbWU6IHRydWUgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAvLyAyLiBQZXJmb3JtIHVwZGF0ZVxyXG4gICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiB1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCA/IHVwZGF0ZXMuY2F0ZWdvcnlJZCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHN1cHBsaWVySWQ6IHVwZGF0ZXMuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5zdXBwbGllcklkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiB1cGRhdGVzLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogdXBkYXRlcy5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgICBzZWxsaW5nUHJpY2U6IHVwZGF0ZXMuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuIENyZWF0ZSBoaXN0b3J5IGlmIHF1YW50aXR5IGNoYW5nZWRcclxuICAgICAgaWYgKHVwZGF0ZXMucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB1cGRhdGVzLnF1YW50aXR5ICE9PSBjdXJyZW50LnN0b2NrICYmIHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uICE9PSAnc2tpcC1oaXN0b3J5Jykge1xyXG4gICAgICAgIGxldCBjaGFuZ2VSZWFzb24gPSB1cGRhdGVzLmN1c3RvbUNoYW5nZVJlYXNvbjtcclxuICAgICAgICBpZiAoIWNoYW5nZVJlYXNvbikge1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZXMuaXNGcm9tU2FsZSkgY2hhbmdlUmVhc29uID0gXCJTYWxlXCI7XHJcbiAgICAgICAgICBlbHNlIGlmICh1cGRhdGVzLnF1YW50aXR5ID4gY3VycmVudC5zdG9jaykgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgYWRkaXRpb25cIjtcclxuICAgICAgICAgIGVsc2UgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgcmVkdWN0aW9uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzbmFwc2hvdHRlZFJlYXNvbiA9IGBbJHt1cGRhdGVkLm5hbWV9XSB8ICR7Y2hhbmdlUmVhc29ufWA7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXBkYXRlcy51c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHVwZGF0ZXMuYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICBwcmV2aW91c1F1YW50aXR5OiBjdXJyZW50LnN0b2NrLFxyXG4gICAgICAgICAgICBuZXdRdWFudGl0eTogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgICAgY2hhbmdlUmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQStOc0IsZ01BQUEifQ==
}),
"[project]/src/app/actions/data:73b381 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProductAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4089b1e5ac12760970ad4a96e3e40bfb40acd5e25c":"deleteProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4089b1e5ac12760970ad4a96e3e40bfb40acd5e25c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgIG5ld1F1YW50aXR5OiBkYXRhLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBjaGFuZ2VSZWFzb246IGBbJHtwcm9kdWN0Lm5hbWV9XSB8IEluaXRpYWwgc3RvY2tgLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGRhdGEuY3JlYXRlZEF0ID8gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogcmVzdWx0LmlkLFxyXG4gICAgICBuYW1lOiByZXN1bHQubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHJlc3VsdC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHJlc3VsdC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgIHF1YW50aXR5OiByZXN1bHQuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcmVzdWx0LmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiByZXN1bHQuc2VsbGluZ1ByaWNlLFxyXG4gICAgICBzdXBwbGllcjogcmVzdWx0LnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcmVzdWx0LmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiByZXN1bHQuYmFyY29kZSxcclxuICAgICAgaXRlbU51bWJlcjogcmVzdWx0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiByZXN1bHQubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmNyZWF0ZWRBdCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdldCBjdXJyZW50IHByb2R1Y3Qgc3RhdGVcclxuICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4LnByb2R1Y3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgc3RvY2s6IHRydWUsIG5hbWU6IHRydWUgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAvLyAyLiBQZXJmb3JtIHVwZGF0ZVxyXG4gICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiB1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCA/IHVwZGF0ZXMuY2F0ZWdvcnlJZCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHN1cHBsaWVySWQ6IHVwZGF0ZXMuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5zdXBwbGllcklkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiB1cGRhdGVzLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogdXBkYXRlcy5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgICBzZWxsaW5nUHJpY2U6IHVwZGF0ZXMuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuIENyZWF0ZSBoaXN0b3J5IGlmIHF1YW50aXR5IGNoYW5nZWRcclxuICAgICAgaWYgKHVwZGF0ZXMucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB1cGRhdGVzLnF1YW50aXR5ICE9PSBjdXJyZW50LnN0b2NrICYmIHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uICE9PSAnc2tpcC1oaXN0b3J5Jykge1xyXG4gICAgICAgIGxldCBjaGFuZ2VSZWFzb24gPSB1cGRhdGVzLmN1c3RvbUNoYW5nZVJlYXNvbjtcclxuICAgICAgICBpZiAoIWNoYW5nZVJlYXNvbikge1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZXMuaXNGcm9tU2FsZSkgY2hhbmdlUmVhc29uID0gXCJTYWxlXCI7XHJcbiAgICAgICAgICBlbHNlIGlmICh1cGRhdGVzLnF1YW50aXR5ID4gY3VycmVudC5zdG9jaykgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgYWRkaXRpb25cIjtcclxuICAgICAgICAgIGVsc2UgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgcmVkdWN0aW9uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzbmFwc2hvdHRlZFJlYXNvbiA9IGBbJHt1cGRhdGVkLm5hbWV9XSB8ICR7Y2hhbmdlUmVhc29ufWA7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXBkYXRlcy51c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHVwZGF0ZXMuYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICBwcmV2aW91c1F1YW50aXR5OiBjdXJyZW50LnN0b2NrLFxyXG4gICAgICAgICAgICBuZXdRdWFudGl0eTogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgICAgY2hhbmdlUmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1TQThSc0IsZ01BQUEifQ==
}),
"[project]/src/app/actions/data:0774a6 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProductsBulkAction",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6083b4208f9a28840524118f0b30dd5fb47ce18d37":"updateProductsBulkAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6083b4208f9a28840524118f0b30dd5fb47ce18d37", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProductsBulkAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgIG5ld1F1YW50aXR5OiBkYXRhLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBjaGFuZ2VSZWFzb246IGBbJHtwcm9kdWN0Lm5hbWV9XSB8IEluaXRpYWwgc3RvY2tgLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGRhdGEuY3JlYXRlZEF0ID8gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogcmVzdWx0LmlkLFxyXG4gICAgICBuYW1lOiByZXN1bHQubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHJlc3VsdC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHJlc3VsdC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgIHF1YW50aXR5OiByZXN1bHQuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcmVzdWx0LmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiByZXN1bHQuc2VsbGluZ1ByaWNlLFxyXG4gICAgICBzdXBwbGllcjogcmVzdWx0LnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcmVzdWx0LmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiByZXN1bHQuYmFyY29kZSxcclxuICAgICAgaXRlbU51bWJlcjogcmVzdWx0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiByZXN1bHQubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmNyZWF0ZWRBdCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdldCBjdXJyZW50IHByb2R1Y3Qgc3RhdGVcclxuICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4LnByb2R1Y3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgc3RvY2s6IHRydWUsIG5hbWU6IHRydWUgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAvLyAyLiBQZXJmb3JtIHVwZGF0ZVxyXG4gICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiB1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCA/IHVwZGF0ZXMuY2F0ZWdvcnlJZCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHN1cHBsaWVySWQ6IHVwZGF0ZXMuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5zdXBwbGllcklkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiB1cGRhdGVzLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogdXBkYXRlcy5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgICBzZWxsaW5nUHJpY2U6IHVwZGF0ZXMuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuIENyZWF0ZSBoaXN0b3J5IGlmIHF1YW50aXR5IGNoYW5nZWRcclxuICAgICAgaWYgKHVwZGF0ZXMucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB1cGRhdGVzLnF1YW50aXR5ICE9PSBjdXJyZW50LnN0b2NrICYmIHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uICE9PSAnc2tpcC1oaXN0b3J5Jykge1xyXG4gICAgICAgIGxldCBjaGFuZ2VSZWFzb24gPSB1cGRhdGVzLmN1c3RvbUNoYW5nZVJlYXNvbjtcclxuICAgICAgICBpZiAoIWNoYW5nZVJlYXNvbikge1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZXMuaXNGcm9tU2FsZSkgY2hhbmdlUmVhc29uID0gXCJTYWxlXCI7XHJcbiAgICAgICAgICBlbHNlIGlmICh1cGRhdGVzLnF1YW50aXR5ID4gY3VycmVudC5zdG9jaykgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgYWRkaXRpb25cIjtcclxuICAgICAgICAgIGVsc2UgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgcmVkdWN0aW9uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzbmFwc2hvdHRlZFJlYXNvbiA9IGBbJHt1cGRhdGVkLm5hbWV9XSB8ICR7Y2hhbmdlUmVhc29ufWA7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXBkYXRlcy51c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHVwZGF0ZXMuYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICBwcmV2aW91c1F1YW50aXR5OiBjdXJyZW50LnN0b2NrLFxyXG4gICAgICAgICAgICBuZXdRdWFudGl0eTogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgICAgY2hhbmdlUmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQTJTc0IscU1BQUEifQ==
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$9c2417__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductsAction"])({
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a288c4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProductAction"])({
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7dee8a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductAction"])(id, {
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
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$73b381__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProductAction"])(id);
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
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0774a6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductsBulkAction"])(updates.map((u)=>({
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
"[project]/src/app/actions/data:0388ba [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductsByIdsAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60e1f4a7f9cb88e5a865a4684f752904c3b2862c65":"getProductsByIdsAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60e1f4a7f9cb88e5a865a4684f752904c3b2862c65", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProductsByIdsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgIG5ld1F1YW50aXR5OiBkYXRhLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBjaGFuZ2VSZWFzb246IGBbJHtwcm9kdWN0Lm5hbWV9XSB8IEluaXRpYWwgc3RvY2tgLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGRhdGEuY3JlYXRlZEF0ID8gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogcmVzdWx0LmlkLFxyXG4gICAgICBuYW1lOiByZXN1bHQubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHJlc3VsdC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHJlc3VsdC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgIHF1YW50aXR5OiByZXN1bHQuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcmVzdWx0LmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiByZXN1bHQuc2VsbGluZ1ByaWNlLFxyXG4gICAgICBzdXBwbGllcjogcmVzdWx0LnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcmVzdWx0LmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiByZXN1bHQuYmFyY29kZSxcclxuICAgICAgaXRlbU51bWJlcjogcmVzdWx0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiByZXN1bHQubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcmVzdWx0LmNyZWF0ZWRBdCxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdldCBjdXJyZW50IHByb2R1Y3Qgc3RhdGVcclxuICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4LnByb2R1Y3QuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBzZWxlY3Q6IHsgc3RvY2s6IHRydWUsIG5hbWU6IHRydWUgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUHJvZHVjdCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAvLyAyLiBQZXJmb3JtIHVwZGF0ZVxyXG4gICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBjYXRlZ29yeUlkOiB1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCA/IHVwZGF0ZXMuY2F0ZWdvcnlJZCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIHN1cHBsaWVySWQ6IHVwZGF0ZXMuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5zdXBwbGllcklkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiB1cGRhdGVzLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogdXBkYXRlcy5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgICBzZWxsaW5nUHJpY2U6IHVwZGF0ZXMuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIDMuIENyZWF0ZSBoaXN0b3J5IGlmIHF1YW50aXR5IGNoYW5nZWRcclxuICAgICAgaWYgKHVwZGF0ZXMucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB1cGRhdGVzLnF1YW50aXR5ICE9PSBjdXJyZW50LnN0b2NrICYmIHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uICE9PSAnc2tpcC1oaXN0b3J5Jykge1xyXG4gICAgICAgIGxldCBjaGFuZ2VSZWFzb24gPSB1cGRhdGVzLmN1c3RvbUNoYW5nZVJlYXNvbjtcclxuICAgICAgICBpZiAoIWNoYW5nZVJlYXNvbikge1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZXMuaXNGcm9tU2FsZSkgY2hhbmdlUmVhc29uID0gXCJTYWxlXCI7XHJcbiAgICAgICAgICBlbHNlIGlmICh1cGRhdGVzLnF1YW50aXR5ID4gY3VycmVudC5zdG9jaykgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgYWRkaXRpb25cIjtcclxuICAgICAgICAgIGVsc2UgY2hhbmdlUmVhc29uID0gXCJNYW51YWwgc3RvY2sgcmVkdWN0aW9uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzbmFwc2hvdHRlZFJlYXNvbiA9IGBbJHt1cGRhdGVkLm5hbWV9XSB8ICR7Y2hhbmdlUmVhc29ufWA7XHJcblxyXG4gICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXBkYXRlcy51c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHVwZGF0ZXMuYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICBwcmV2aW91c1F1YW50aXR5OiBjdXJyZW50LnN0b2NrLFxyXG4gICAgICAgICAgICBuZXdRdWFudGl0eTogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgICAgY2hhbmdlUmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InNTQTBHc0IsbU1BQUEifQ==
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
"[project]/src/app/actions/data:84e781 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSalesAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"700f4d6861c0a8d3947abd3febeb47408d7da7fcc6":"getSalesAction"},"src/app/actions/sales.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("700f4d6861c0a8d3947abd3febeb47408d7da7fcc6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getSalesAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2FsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhbGVzQWN0aW9uKGJ1c2luZXNzSWQ6IHN0cmluZywgc29ydE9yZGVyOiAnYXNjJyB8ICdkZXNjJyA9ICdkZXNjJywgcGFnZVNpemU/OiBudW1iZXIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBzb3J0T3JkZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChwYWdlU2l6ZSAmJiBwYWdlU2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgcXVlcnlPcHRpb25zLnRha2UgPSBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbGVzID0gYXdhaXQgZGIuc2FsZS5maW5kTWFueShxdWVyeU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBQcm92aWRlIGRlZmF1bHQgbWFwcGluZ3MgdG8gZXhpc3RpbmcgUmVhY3QgY29tcG9uZW50c1xyXG4gICAgICAgIHJldHVybiBzYWxlcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGl0ZW0udXNlcklkLFxyXG4gICAgICAgICAgICBsb2NhdGlvbl9pZDogaXRlbS5icmFuY2hJZCxcclxuICAgICAgICAgICAgcmVjZWlwdF9udW1iZXI6IGl0ZW0ucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgY3VzdG9tZXJfbmFtZTogaXRlbS5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyX2FkZHJlc3M6IGl0ZW0uY3VzdG9tZXJBZGRyZXNzLFxyXG4gICAgICAgICAgICBjdXN0b21lcl9jb250YWN0OiBpdGVtLmN1c3RvbWVyQ29udGFjdCxcclxuICAgICAgICAgICAgY3VzdG9tZXJfaWQ6IGl0ZW0uY3VzdG9tZXJJZCxcclxuICAgICAgICAgICAgaXRlbXM6IGl0ZW0uaXRlbXMgYXMgYW55LCAvLyBqc29uYiB0eXBlXHJcbiAgICAgICAgICAgIHBheW1lbnRfc3RhdHVzOiBpdGVtLnBheW1lbnRTdGF0dXMsXHJcbiAgICAgICAgICAgIHByb2ZpdDogaXRlbS5wcm9maXQsXHJcbiAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB0YXhfcmF0ZTogaXRlbS50YXhSYXRlID8gTnVtYmVyKGl0ZW0udGF4UmF0ZSkgOiAwLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBpdGVtLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBpdGVtLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBjYXNoX3RyYW5zYWN0aW9uX2lkOiBpdGVtLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICBhbW91bnRfcGFpZDogaXRlbS5hbW91bnRQYWlkLFxyXG4gICAgICAgICAgICBhbW91bnRfZHVlOiBpdGVtLmFtb3VudER1ZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGl0ZW0uY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgbm90ZXM6IGl0ZW0ubm90ZXNcclxuICAgICAgICB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNhbGVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTYWxlQWN0aW9uKGlkOiBzdHJpbmcsIGJ1c2luZXNzSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzYWxlID0gYXdhaXQgZGIuc2FsZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBjYXNoVHJhbnNhY3Rpb246IHRydWUsIGluc3RhbGxtZW50czogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc2FsZSB8fCBzYWxlLmJyYW5jaElkICE9PSBidXNpbmVzc0lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1NhbGUgbm90IGZvdW5kIG9yIHVuYXV0aG9yaXplZCcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERlbGV0ZSBpbnN0YWxsbWVudHNcclxuICAgICAgICBpZiAoc2FsZS5pbnN0YWxsbWVudHMgJiYgc2FsZS5pbnN0YWxsbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYi5pbnN0YWxsbWVudFBheW1lbnQuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBzYWxlSWQ6IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEZWxldGUgYXNzb2NpYXRlZCBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgaWYgKHNhbGUuY2FzaFRyYW5zYWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogc2FsZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGVsZXRlIHRoZSBzYWxlIGl0c2VsZlxyXG4gICAgICAgIGF3YWl0IGRiLnNhbGUuZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBzYWxlOiB7XHJcbiAgICAgICAgICAgICAgICByZWNlaXB0TnVtYmVyOiBzYWxlLnJlY2VpcHROdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IHNhbGUuY3VzdG9tZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJBZGRyZXNzOiBzYWxlLmN1c3RvbWVyQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyQ29udGFjdDogc2FsZS5jdXN0b21lckNvbnRhY3QsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50U3RhdHVzOiBzYWxlLnBheW1lbnRTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBjYXNoVHJhbnNhY3Rpb25JZDogc2FsZS5jYXNoVHJhbnNhY3Rpb25JZCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBzYWxlLml0ZW1zIGFzIGFueSxcclxuICAgICAgICAgICAgICAgIGFtb3VudFBhaWQ6IHNhbGUuYW1vdW50UGFpZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudER1ZTogc2FsZS5hbW91bnREdWUsXHJcbiAgICAgICAgICAgICAgICBwcm9maXQ6IHNhbGUucHJvZml0LFxyXG4gICAgICAgICAgICAgICAgdGF4UmF0ZTogc2FsZS50YXhSYXRlLFxyXG4gICAgICAgICAgICAgICAgbm90ZXM6IHNhbGUubm90ZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHNhbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgc2FsZScgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwc2VydFNhbGVBY3Rpb24oc2FsZURiRGF0YTogYW55LCBpc1VwZGF0ZTogYm9vbGVhbiwgdXBkYXRlSWQ/OiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hRGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzYWxlRGJEYXRhLnVzZXJfaWQsXHJcbiAgICAgICAgICAgIGJyYW5jaElkOiBzYWxlRGJEYXRhLmxvY2F0aW9uX2lkLFxyXG4gICAgICAgICAgICByZWNlaXB0TnVtYmVyOiBzYWxlRGJEYXRhLnJlY2VpcHRfbnVtYmVyLFxyXG4gICAgICAgICAgICBjdXN0b21lck5hbWU6IHNhbGVEYkRhdGEuY3VzdG9tZXJfbmFtZSxcclxuICAgICAgICAgICAgY3VzdG9tZXJBZGRyZXNzOiBzYWxlRGJEYXRhLmN1c3RvbWVyX2FkZHJlc3MsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyQ29udGFjdDogc2FsZURiRGF0YS5jdXN0b21lcl9jb250YWN0LFxyXG4gICAgICAgICAgICBjdXN0b21lcklkOiBzYWxlRGJEYXRhLmN1c3RvbWVyX2lkLFxyXG4gICAgICAgICAgICBpdGVtczogc2FsZURiRGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgcGF5bWVudFN0YXR1czogc2FsZURiRGF0YS5wYXltZW50X3N0YXR1cyxcclxuICAgICAgICAgICAgcHJvZml0OiBzYWxlRGJEYXRhLnByb2ZpdCxcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoc2FsZURiRGF0YS5kYXRlKSxcclxuICAgICAgICAgICAgdGF4UmF0ZTogc2FsZURiRGF0YS50YXhfcmF0ZSxcclxuICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IHNhbGVEYkRhdGEuY2FzaF90cmFuc2FjdGlvbl9pZCxcclxuICAgICAgICAgICAgYW1vdW50UGFpZDogc2FsZURiRGF0YS5hbW91bnRfcGFpZCxcclxuICAgICAgICAgICAgYW1vdW50RHVlOiBzYWxlRGJEYXRhLmFtb3VudF9kdWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHNhbGVEYkRhdGEuY2F0ZWdvcnlfaWQsXHJcbiAgICAgICAgICAgIG5vdGVzOiBzYWxlRGJEYXRhLm5vdGVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGlzVXBkYXRlICYmIHVwZGF0ZUlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5zYWxlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogdXBkYXRlSWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByaXNtYURhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVwZGF0ZWQgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgZGIuc2FsZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcHJpc21hRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3JlYXRlZCB9O1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cHNlcnRpbmcgc2FsZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gcHJlc2VydmUgc2FsZScgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlY2VpcHRBY3Rpb24oc2FsZURhdGE6IGFueSwgYnVzaW5lc3NJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgZGIuc2FsZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBidXNpbmVzc0lkLFxyXG4gICAgICAgICAgICAgICAgcmVjZWlwdE51bWJlcjogc2FsZURhdGEucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyTmFtZTogc2FsZURhdGEuY3VzdG9tZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJJZDogc2FsZURhdGEuY3VzdG9tZXJJZCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHNhbGVEYXRhLmRhdGUpLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHNhbGVEYXRhLml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudFN0YXR1czogc2FsZURhdGEucGF5bWVudFN0YXR1cyxcclxuICAgICAgICAgICAgICAgIHByb2ZpdDogc2FsZURhdGEucHJvZml0LFxyXG4gICAgICAgICAgICAgICAgYW1vdW50UGFpZDogc2FsZURhdGEuYW1vdW50UGFpZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudER1ZTogc2FsZURhdGEuYW1vdW50RHVlLFxyXG4gICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogc2FsZURhdGEuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBzYWxlRGF0YS5ub3Rlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvc2FsZXMnKTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjcmVhdGVkIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcmVjZWlwdDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gY3JlYXRlIHJlY2VpcHQnIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyUkFLc0IsMkxBQUEifQ==
}),
"[project]/src/app/actions/data:1a9a3e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSaleAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6020a32420899311129eb3b012e47785de297b62fc":"deleteSaleAction"},"src/app/actions/sales.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6020a32420899311129eb3b012e47785de297b62fc", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteSaleAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2FsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhbGVzQWN0aW9uKGJ1c2luZXNzSWQ6IHN0cmluZywgc29ydE9yZGVyOiAnYXNjJyB8ICdkZXNjJyA9ICdkZXNjJywgcGFnZVNpemU/OiBudW1iZXIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBzb3J0T3JkZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChwYWdlU2l6ZSAmJiBwYWdlU2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgcXVlcnlPcHRpb25zLnRha2UgPSBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbGVzID0gYXdhaXQgZGIuc2FsZS5maW5kTWFueShxdWVyeU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBQcm92aWRlIGRlZmF1bHQgbWFwcGluZ3MgdG8gZXhpc3RpbmcgUmVhY3QgY29tcG9uZW50c1xyXG4gICAgICAgIHJldHVybiBzYWxlcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGl0ZW0udXNlcklkLFxyXG4gICAgICAgICAgICBsb2NhdGlvbl9pZDogaXRlbS5icmFuY2hJZCxcclxuICAgICAgICAgICAgcmVjZWlwdF9udW1iZXI6IGl0ZW0ucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgY3VzdG9tZXJfbmFtZTogaXRlbS5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyX2FkZHJlc3M6IGl0ZW0uY3VzdG9tZXJBZGRyZXNzLFxyXG4gICAgICAgICAgICBjdXN0b21lcl9jb250YWN0OiBpdGVtLmN1c3RvbWVyQ29udGFjdCxcclxuICAgICAgICAgICAgY3VzdG9tZXJfaWQ6IGl0ZW0uY3VzdG9tZXJJZCxcclxuICAgICAgICAgICAgaXRlbXM6IGl0ZW0uaXRlbXMgYXMgYW55LCAvLyBqc29uYiB0eXBlXHJcbiAgICAgICAgICAgIHBheW1lbnRfc3RhdHVzOiBpdGVtLnBheW1lbnRTdGF0dXMsXHJcbiAgICAgICAgICAgIHByb2ZpdDogaXRlbS5wcm9maXQsXHJcbiAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB0YXhfcmF0ZTogaXRlbS50YXhSYXRlID8gTnVtYmVyKGl0ZW0udGF4UmF0ZSkgOiAwLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBpdGVtLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBpdGVtLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBjYXNoX3RyYW5zYWN0aW9uX2lkOiBpdGVtLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICBhbW91bnRfcGFpZDogaXRlbS5hbW91bnRQYWlkLFxyXG4gICAgICAgICAgICBhbW91bnRfZHVlOiBpdGVtLmFtb3VudER1ZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGl0ZW0uY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgbm90ZXM6IGl0ZW0ubm90ZXNcclxuICAgICAgICB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNhbGVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTYWxlQWN0aW9uKGlkOiBzdHJpbmcsIGJ1c2luZXNzSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzYWxlID0gYXdhaXQgZGIuc2FsZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBjYXNoVHJhbnNhY3Rpb246IHRydWUsIGluc3RhbGxtZW50czogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc2FsZSB8fCBzYWxlLmJyYW5jaElkICE9PSBidXNpbmVzc0lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1NhbGUgbm90IGZvdW5kIG9yIHVuYXV0aG9yaXplZCcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERlbGV0ZSBpbnN0YWxsbWVudHNcclxuICAgICAgICBpZiAoc2FsZS5pbnN0YWxsbWVudHMgJiYgc2FsZS5pbnN0YWxsbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYi5pbnN0YWxsbWVudFBheW1lbnQuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBzYWxlSWQ6IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEZWxldGUgYXNzb2NpYXRlZCBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgaWYgKHNhbGUuY2FzaFRyYW5zYWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogc2FsZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGVsZXRlIHRoZSBzYWxlIGl0c2VsZlxyXG4gICAgICAgIGF3YWl0IGRiLnNhbGUuZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBzYWxlOiB7XHJcbiAgICAgICAgICAgICAgICByZWNlaXB0TnVtYmVyOiBzYWxlLnJlY2VpcHROdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IHNhbGUuY3VzdG9tZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJBZGRyZXNzOiBzYWxlLmN1c3RvbWVyQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyQ29udGFjdDogc2FsZS5jdXN0b21lckNvbnRhY3QsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50U3RhdHVzOiBzYWxlLnBheW1lbnRTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBjYXNoVHJhbnNhY3Rpb25JZDogc2FsZS5jYXNoVHJhbnNhY3Rpb25JZCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBzYWxlLml0ZW1zIGFzIGFueSxcclxuICAgICAgICAgICAgICAgIGFtb3VudFBhaWQ6IHNhbGUuYW1vdW50UGFpZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudER1ZTogc2FsZS5hbW91bnREdWUsXHJcbiAgICAgICAgICAgICAgICBwcm9maXQ6IHNhbGUucHJvZml0LFxyXG4gICAgICAgICAgICAgICAgdGF4UmF0ZTogc2FsZS50YXhSYXRlLFxyXG4gICAgICAgICAgICAgICAgbm90ZXM6IHNhbGUubm90ZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHNhbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgc2FsZScgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwc2VydFNhbGVBY3Rpb24oc2FsZURiRGF0YTogYW55LCBpc1VwZGF0ZTogYm9vbGVhbiwgdXBkYXRlSWQ/OiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hRGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzYWxlRGJEYXRhLnVzZXJfaWQsXHJcbiAgICAgICAgICAgIGJyYW5jaElkOiBzYWxlRGJEYXRhLmxvY2F0aW9uX2lkLFxyXG4gICAgICAgICAgICByZWNlaXB0TnVtYmVyOiBzYWxlRGJEYXRhLnJlY2VpcHRfbnVtYmVyLFxyXG4gICAgICAgICAgICBjdXN0b21lck5hbWU6IHNhbGVEYkRhdGEuY3VzdG9tZXJfbmFtZSxcclxuICAgICAgICAgICAgY3VzdG9tZXJBZGRyZXNzOiBzYWxlRGJEYXRhLmN1c3RvbWVyX2FkZHJlc3MsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyQ29udGFjdDogc2FsZURiRGF0YS5jdXN0b21lcl9jb250YWN0LFxyXG4gICAgICAgICAgICBjdXN0b21lcklkOiBzYWxlRGJEYXRhLmN1c3RvbWVyX2lkLFxyXG4gICAgICAgICAgICBpdGVtczogc2FsZURiRGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgcGF5bWVudFN0YXR1czogc2FsZURiRGF0YS5wYXltZW50X3N0YXR1cyxcclxuICAgICAgICAgICAgcHJvZml0OiBzYWxlRGJEYXRhLnByb2ZpdCxcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoc2FsZURiRGF0YS5kYXRlKSxcclxuICAgICAgICAgICAgdGF4UmF0ZTogc2FsZURiRGF0YS50YXhfcmF0ZSxcclxuICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IHNhbGVEYkRhdGEuY2FzaF90cmFuc2FjdGlvbl9pZCxcclxuICAgICAgICAgICAgYW1vdW50UGFpZDogc2FsZURiRGF0YS5hbW91bnRfcGFpZCxcclxuICAgICAgICAgICAgYW1vdW50RHVlOiBzYWxlRGJEYXRhLmFtb3VudF9kdWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHNhbGVEYkRhdGEuY2F0ZWdvcnlfaWQsXHJcbiAgICAgICAgICAgIG5vdGVzOiBzYWxlRGJEYXRhLm5vdGVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGlzVXBkYXRlICYmIHVwZGF0ZUlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5zYWxlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogdXBkYXRlSWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByaXNtYURhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVwZGF0ZWQgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgZGIuc2FsZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcHJpc21hRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3JlYXRlZCB9O1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cHNlcnRpbmcgc2FsZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gcHJlc2VydmUgc2FsZScgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVJlY2VpcHRBY3Rpb24oc2FsZURhdGE6IGFueSwgYnVzaW5lc3NJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgZGIuc2FsZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBidXNpbmVzc0lkLFxyXG4gICAgICAgICAgICAgICAgcmVjZWlwdE51bWJlcjogc2FsZURhdGEucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyTmFtZTogc2FsZURhdGEuY3VzdG9tZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJJZDogc2FsZURhdGEuY3VzdG9tZXJJZCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKHNhbGVEYXRhLmRhdGUpLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHNhbGVEYXRhLml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudFN0YXR1czogc2FsZURhdGEucGF5bWVudFN0YXR1cyxcclxuICAgICAgICAgICAgICAgIHByb2ZpdDogc2FsZURhdGEucHJvZml0LFxyXG4gICAgICAgICAgICAgICAgYW1vdW50UGFpZDogc2FsZURhdGEuYW1vdW50UGFpZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudER1ZTogc2FsZURhdGEuYW1vdW50RHVlLFxyXG4gICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogc2FsZURhdGEuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBzYWxlRGF0YS5ub3Rlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvc2FsZXMnKTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjcmVhdGVkIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcmVjZWlwdDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gY3JlYXRlIHJlY2VpcHQnIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI2UkFzRHNCLDZMQUFBIn0=
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
"[project]/src/app/actions/data:d310ee [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExpensesAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"402e37ae5f317e45e7c2b4d0c5adab499af81d14d0":"getExpensesAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402e37ae5f317e45e7c2b4d0c5adab499af81d14d0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getExpensesAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSB0aGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogbGlua1RvQ2FzaCAmJiBkYXRhLmNhc2hBY2NvdW50SWQgPyBkYXRhLmNhc2hBY2NvdW50SWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMi4gSWYgbGlua2luZyB0byBjYXNoLCBjcmVhdGUgYSBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FzaFR4ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICdjYXNoX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke2RhdGEuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2Ugd2l0aCB0cmFuc2FjdGlvbiByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZXNBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4cGVuc2VzID0gYXdhaXQgZGIuZXhwZW5zZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBleHBlbnNlcy5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2VcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkTGlua1RvQ2FzaCA9ICEhdXBkYXRlcy5jYXNoQWNjb3VudElkO1xyXG4gICAgICAgICAgICBjb25zdCB3YXNMaW5rZWRUb0Nhc2ggPSAhIWN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgIXdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY3VycmVudEV4cGVuc2UudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBjdXJyZW50RXhwZW5zZS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5IHx8IGN1cnJlbnRFeHBlbnNlLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke3VwZGF0ZXMuZGVzY3JpcHRpb24gfHwgY3VycmVudEV4cGVuc2UuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IHVwZGF0ZXMucGVyc29uSW5DaGFyZ2UgfHwgY3VycmVudEV4cGVuc2UucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlIHx8IGN1cnJlbnRFeHBlbnNlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCB8fCBjdXJyZW50RXhwZW5zZS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UgfHwgY3VycmVudEV4cGVuc2UucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZEV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHBlbnNlPy5jYXNoVHJhbnNhY3Rpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCh0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHQudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0LnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHQuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHQubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6IHQudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgcGVyc29uX2luX2NoYXJnZTogdC5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB0LnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiB0LnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhc2ggdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eEluID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0eE91dCwgdHhJbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgaW5zdGFsbG1lbnQgcGF5bWVudHMgbGlua2VkIHRvIHRoaXMgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRPcGVuaW5nQmFsYW5jZUFjdGlvbihhY2NvdW50SWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBkYi5jYXNoQWNjb3VudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBvcGVuaW5nQmFsYW5jZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IE51bWJlcihhY2NvdW50Py5vcGVuaW5nQmFsYW5jZSB8fCAwKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9wZW5pbmcgYmFsYW5jZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdWxrQ2FzaFRyYW5zYWN0aW9uc0FjdGlvbih0cmFuc2FjdGlvbnM6IGFueVtdKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZC5wdXNoKGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1bGsgdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQTJFc0IsOExBQUEifQ==
}),
"[project]/src/app/actions/data:8ae33a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createExpenseAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"605e3bb4746b8859e06f2fe24bb8c29c89434c1100":"createExpenseAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("605e3bb4746b8859e06f2fe24bb8c29c89434c1100", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createExpenseAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSB0aGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogbGlua1RvQ2FzaCAmJiBkYXRhLmNhc2hBY2NvdW50SWQgPyBkYXRhLmNhc2hBY2NvdW50SWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMi4gSWYgbGlua2luZyB0byBjYXNoLCBjcmVhdGUgYSBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FzaFR4ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICdjYXNoX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke2RhdGEuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2Ugd2l0aCB0cmFuc2FjdGlvbiByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZXNBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4cGVuc2VzID0gYXdhaXQgZGIuZXhwZW5zZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBleHBlbnNlcy5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2VcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkTGlua1RvQ2FzaCA9ICEhdXBkYXRlcy5jYXNoQWNjb3VudElkO1xyXG4gICAgICAgICAgICBjb25zdCB3YXNMaW5rZWRUb0Nhc2ggPSAhIWN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgIXdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY3VycmVudEV4cGVuc2UudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBjdXJyZW50RXhwZW5zZS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5IHx8IGN1cnJlbnRFeHBlbnNlLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke3VwZGF0ZXMuZGVzY3JpcHRpb24gfHwgY3VycmVudEV4cGVuc2UuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IHVwZGF0ZXMucGVyc29uSW5DaGFyZ2UgfHwgY3VycmVudEV4cGVuc2UucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlIHx8IGN1cnJlbnRFeHBlbnNlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCB8fCBjdXJyZW50RXhwZW5zZS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UgfHwgY3VycmVudEV4cGVuc2UucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZEV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHBlbnNlPy5jYXNoVHJhbnNhY3Rpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCh0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHQudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0LnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHQuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHQubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6IHQudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgcGVyc29uX2luX2NoYXJnZTogdC5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB0LnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiB0LnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhc2ggdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eEluID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0eE91dCwgdHhJbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgaW5zdGFsbG1lbnQgcGF5bWVudHMgbGlua2VkIHRvIHRoaXMgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRPcGVuaW5nQmFsYW5jZUFjdGlvbihhY2NvdW50SWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBkYi5jYXNoQWNjb3VudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBvcGVuaW5nQmFsYW5jZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IE51bWJlcihhY2NvdW50Py5vcGVuaW5nQmFsYW5jZSB8fCAwKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9wZW5pbmcgYmFsYW5jZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdWxrQ2FzaFRyYW5zYWN0aW9uc0FjdGlvbih0cmFuc2FjdGlvbnM6IGFueVtdKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZC5wdXNoKGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1bGsgdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQW9Cc0IsZ01BQUEifQ==
}),
"[project]/src/app/actions/data:54a70b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateExpenseAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"7077a08a1130225a7b61a1e58b625150fa2464c027":"updateExpenseAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7077a08a1130225a7b61a1e58b625150fa2464c027", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateExpenseAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSB0aGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogbGlua1RvQ2FzaCAmJiBkYXRhLmNhc2hBY2NvdW50SWQgPyBkYXRhLmNhc2hBY2NvdW50SWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMi4gSWYgbGlua2luZyB0byBjYXNoLCBjcmVhdGUgYSBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FzaFR4ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICdjYXNoX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke2RhdGEuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2Ugd2l0aCB0cmFuc2FjdGlvbiByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZXNBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4cGVuc2VzID0gYXdhaXQgZGIuZXhwZW5zZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBleHBlbnNlcy5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2VcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkTGlua1RvQ2FzaCA9ICEhdXBkYXRlcy5jYXNoQWNjb3VudElkO1xyXG4gICAgICAgICAgICBjb25zdCB3YXNMaW5rZWRUb0Nhc2ggPSAhIWN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgIXdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY3VycmVudEV4cGVuc2UudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBjdXJyZW50RXhwZW5zZS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5IHx8IGN1cnJlbnRFeHBlbnNlLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke3VwZGF0ZXMuZGVzY3JpcHRpb24gfHwgY3VycmVudEV4cGVuc2UuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IHVwZGF0ZXMucGVyc29uSW5DaGFyZ2UgfHwgY3VycmVudEV4cGVuc2UucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlIHx8IGN1cnJlbnRFeHBlbnNlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCB8fCBjdXJyZW50RXhwZW5zZS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UgfHwgY3VycmVudEV4cGVuc2UucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZEV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHBlbnNlPy5jYXNoVHJhbnNhY3Rpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCh0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHQudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0LnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHQuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHQubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6IHQudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgcGVyc29uX2luX2NoYXJnZTogdC5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB0LnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiB0LnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhc2ggdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eEluID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0eE91dCwgdHhJbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgaW5zdGFsbG1lbnQgcGF5bWVudHMgbGlua2VkIHRvIHRoaXMgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRPcGVuaW5nQmFsYW5jZUFjdGlvbihhY2NvdW50SWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBkYi5jYXNoQWNjb3VudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBvcGVuaW5nQmFsYW5jZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IE51bWJlcihhY2NvdW50Py5vcGVuaW5nQmFsYW5jZSB8fCAwKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9wZW5pbmcgYmFsYW5jZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdWxrQ2FzaFRyYW5zYWN0aW9uc0FjdGlvbih0cmFuc2FjdGlvbnM6IGFueVtdKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZC5wdXNoKGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1bGsgdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQXFHc0IsZ01BQUEifQ==
}),
"[project]/src/app/actions/data:e6b661 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteExpenseAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"403af43ad5cffacca8895380711b09eea48b602a18":"deleteExpenseAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("403af43ad5cffacca8895380711b09eea48b602a18", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteExpenseAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIENyZWF0ZSB0aGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogbGlua1RvQ2FzaCAmJiBkYXRhLmNhc2hBY2NvdW50SWQgPyBkYXRhLmNhc2hBY2NvdW50SWQgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMi4gSWYgbGlua2luZyB0byBjYXNoLCBjcmVhdGUgYSBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FzaFR4ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICdjYXNoX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke2RhdGEuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2Ugd2l0aCB0cmFuc2FjdGlvbiByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogZXhwZW5zZS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RXhwZW5zZXNBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGV4cGVuc2VzID0gYXdhaXQgZGIuZXhwZW5zZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBkYXRlOiAnZGVzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBleHBlbnNlcy5tYXAoZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIGV4cGVuc2VcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkTGlua1RvQ2FzaCA9ICEhdXBkYXRlcy5jYXNoQWNjb3VudElkO1xyXG4gICAgICAgICAgICBjb25zdCB3YXNMaW5rZWRUb0Nhc2ggPSAhIWN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgIXdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogY3VycmVudEV4cGVuc2UudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBjdXJyZW50RXhwZW5zZS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZExpbmtUb0Nhc2ggJiYgd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGN1cnJlbnRFeHBlbnNlLmNhc2hUcmFuc2FjdGlvbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IHVwZGF0ZXMuY2FzaEFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCB8fCBjdXJyZW50RXhwZW5zZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5IHx8IGN1cnJlbnRFeHBlbnNlLmNhdGVnb3J5IHx8ICdFeHBlbnNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGBFeHBlbnNlOiAke3VwZGF0ZXMuZGVzY3JpcHRpb24gfHwgY3VycmVudEV4cGVuc2UuZGVzY3JpcHRpb259YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uSW5DaGFyZ2U6IHVwZGF0ZXMucGVyc29uSW5DaGFyZ2UgfHwgY3VycmVudEV4cGVuc2UucGVyc29uSW5DaGFyZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlIHx8IGN1cnJlbnRFeHBlbnNlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCB8fCBjdXJyZW50RXhwZW5zZS5wYXltZW50TWV0aG9kIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UgfHwgY3VycmVudEV4cGVuc2UucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZEV4cGVuc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGV4cGVuc2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgdHguZXhwZW5zZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChleHBlbnNlPy5jYXNoVHJhbnNhY3Rpb25JZCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UuZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCh0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi50LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZF9hdDogdC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IHQudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiB0LnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFjY291bnRfaWQ6IHQuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25faWQ6IHQubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX3R5cGU6IHQudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgcGVyc29uX2luX2NoYXJnZTogdC5wZXJzb25JbkNoYXJnZSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB0LnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiB0LnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhc2ggdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eEluID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFt0eE91dCwgdHhJbl07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgaW5zdGFsbG1lbnQgcGF5bWVudHMgbGlua2VkIHRvIHRoaXMgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRPcGVuaW5nQmFsYW5jZUFjdGlvbihhY2NvdW50SWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBkYi5jYXNoQWNjb3VudC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBvcGVuaW5nQmFsYW5jZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IE51bWJlcihhY2NvdW50Py5vcGVuaW5nQmFsYW5jZSB8fCAwKSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9wZW5pbmcgYmFsYW5jZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdWxrQ2FzaFRyYW5zYWN0aW9uc0FjdGlvbih0cmFuc2FjdGlvbnM6IGFueVtdKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS50b0FjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZC5wdXNoKGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZDogZGF0YS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6IGRhdGEudHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGRhdGEucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1bGsgdHJhbnNhY3Rpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtTQW9Mc0IsZ01BQUEifQ==
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$d310ee__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:d310ee [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8ae33a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:8ae33a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$54a70b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:54a70b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e6b661__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:e6b661 [app-client] (ecmascript) <text/javascript>");
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$d310ee__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getExpensesAction"])(currentBusiness.id);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8ae33a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createExpenseAction"])(input, !!expenseData.linkToCash);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$54a70b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateExpenseAction"])(id, updatePayload, currentExpense);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e6b661__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteExpenseAction"])(id);
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$8ae33a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createExpenseAction"])(input, !!data.linkToCash);
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
"[project]/src/hooks/useCarriageInwards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCarriageInwards",
    ()=>useCarriageInwards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const useCarriageInwards = ()=>{
    _s();
    const [carriageInwards, setCarriageInwards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const loadCarriageInwards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCarriageInwards.useCallback[loadCarriageInwards]": async ()=>{
            try {
                if (!user || !currentBusiness) {
                    setCarriageInwards([]);
                    setIsLoading(false);
                    return;
                }
                setIsLoading(true);
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('carriage_inwards').select('*').eq('location_id', currentBusiness.id).order('date', {
                    ascending: false
                }).order('created_at', {
                    ascending: false
                });
                if (error) throw error;
                const formattedData = data?.map({
                    "useCarriageInwards.useCallback[loadCarriageInwards]": (item)=>({
                            id: item.id,
                            userId: item.user_id,
                            locationId: item.location_id,
                            supplierName: item.supplier_name,
                            details: item.details,
                            amount: Number(item.amount),
                            date: new Date(item.date),
                            cashAccountId: item.cash_account_id,
                            cashTransactionId: item.cash_transaction_id,
                            createdAt: new Date(item.created_at),
                            updatedAt: new Date(item.updated_at)
                        })
                }["useCarriageInwards.useCallback[loadCarriageInwards]"]) || [];
                setCarriageInwards(formattedData);
            } catch (error) {
                console.error('Error loading carriage inwards:', error);
                toast({
                    title: "Error",
                    description: "Failed to load carriage inwards records. Please try again.",
                    variant: "destructive"
                });
            } finally{
                setIsLoading(false);
            }
        }
    }["useCarriageInwards.useCallback[loadCarriageInwards]"], [
        user,
        currentBusiness?.id,
        toast
    ]);
    const createCarriageInward = async (data)=>{
        try {
            if (!user || !currentBusiness) throw new Error('User not authenticated or no business selected');
            let cashTransactionId = null;
            // Create cash transaction if cash account is selected
            if (data.cashAccountId) {
                const { data: cashTransaction, error: cashError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').insert({
                    user_id: user.id,
                    location_id: currentBusiness.id,
                    account_id: data.cashAccountId,
                    amount: data.amount,
                    transaction_type: 'cash_out',
                    category: 'Transport',
                    description: `Carriage inwards - ${data.supplierName}: ${data.details}`,
                    date: data.date.toISOString().split('T')[0]
                }).select().single();
                if (cashError) throw cashError;
                cashTransactionId = cashTransaction.id;
            }
            const { data: carriageData, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('carriage_inwards').insert({
                user_id: user.id,
                location_id: currentBusiness.id,
                supplier_name: data.supplierName,
                details: data.details,
                amount: data.amount,
                date: data.date.toISOString().split('T')[0],
                cash_account_id: data.cashAccountId || null,
                cash_transaction_id: cashTransactionId
            }).select().single();
            if (error) throw error;
            await loadCarriageInwards();
            toast({
                title: "Success",
                description: "Carriage inwards record created successfully"
            });
            return carriageData;
        } catch (error) {
            console.error('Error creating carriage inwards:', error);
            toast({
                title: "Error",
                description: "Failed to create carriage inwards record. Please try again.",
                variant: "destructive"
            });
            throw error;
        }
    };
    const updateCarriageInward = async (id, updates)=>{
        try {
            if (!currentBusiness) throw new Error('No business selected');
            const updateData = {};
            if (updates.supplierName !== undefined) updateData.supplier_name = updates.supplierName;
            if (updates.details !== undefined) updateData.details = updates.details;
            if (updates.amount !== undefined) updateData.amount = updates.amount;
            if (updates.date !== undefined) updateData.date = updates.date.toISOString().split('T')[0];
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('carriage_inwards').update(updateData).eq('id', id).eq('location_id', currentBusiness.id);
            if (error) throw error;
            await loadCarriageInwards();
            toast({
                title: "Success",
                description: "Carriage inwards record updated successfully"
            });
            return true;
        } catch (error) {
            console.error('Error updating carriage inwards:', error);
            toast({
                title: "Error",
                description: "Failed to update carriage inwards record. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    const deleteCarriageInward = async (id)=>{
        try {
            if (!currentBusiness) throw new Error('No business selected');
            // Get the record to check if it has an associated cash transaction
            const { data: record, error: fetchError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('carriage_inwards').select('cash_transaction_id').eq('id', id).eq('location_id', currentBusiness.id).single();
            if (fetchError) throw fetchError;
            // Delete associated cash transaction if exists
            if (record.cash_transaction_id) {
                const { error: cashError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cash_transactions').delete().eq('id', record.cash_transaction_id).eq('location_id', currentBusiness.id);
                if (cashError) throw cashError;
            }
            // Delete the carriage inwards record
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('carriage_inwards').delete().eq('id', id).eq('location_id', currentBusiness.id);
            if (error) throw error;
            await loadCarriageInwards();
            toast({
                title: "Success",
                description: "Carriage inwards record deleted successfully"
            });
            return true;
        } catch (error) {
            console.error('Error deleting carriage inwards:', error);
            toast({
                title: "Error",
                description: "Failed to delete carriage inwards record. Please try again.",
                variant: "destructive"
            });
            return false;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCarriageInwards.useEffect": ()=>{
            loadCarriageInwards();
        }
    }["useCarriageInwards.useEffect"], [
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
_s(useCarriageInwards, "FS1VLqqGdsAV2QffXj0k+cu/VO0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
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
"[project]/src/hooks/useProfitLossData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProfitLossData",
    ()=>useProfitLossData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSalesData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useExpenses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockSummaryData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStockSummaryData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCarriageInwards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCarriageInwards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateFilters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
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
const useProfitLossData = (dateFilter, dateRange, specificDate, taxPercentage = 0)=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get data from existing hooks
    const { sales, isLoading: salesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"])(user?.id);
    const { expenses, isLoading: expensesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"])();
    const { stockSummaryData, isLoading: stockLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockSummaryData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockSummaryData"])(dateRange);
    const { carriageInwards, isLoading: carriageLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCarriageInwards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarriageInwards"])();
    const profitLossData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProfitLossData.useMemo[profitLossData]": ()=>{
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
                const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDateRangeFromFilter"])(dateFilter);
                from = range.from;
                to = range.to;
            }
            // Filter sales by date range and exclude quotes using same logic as sold items report
            const filteredSales = sales.filter({
                "useProfitLossData.useMemo[profitLossData].filteredSales": (sale)=>{
                    const saleDate = new Date(sale.date);
                    if (dateFilter === 'specific' && specificDate) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(saleDate, specificDate) && sale.paymentStatus !== 'Quote';
                    }
                    return saleDate >= from && saleDate <= to && sale.paymentStatus !== 'Quote';
                }
            }["useProfitLossData.useMemo[profitLossData].filteredSales"]);
            // Filter expenses by date range using same logic
            const filteredExpenses = expenses.filter({
                "useProfitLossData.useMemo[profitLossData].filteredExpenses": (expense)=>{
                    const expenseDate = new Date(expense.date);
                    if (dateFilter === 'specific' && specificDate) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(expenseDate, specificDate);
                    }
                    return expenseDate >= from && expenseDate <= to;
                }
            }["useProfitLossData.useMemo[profitLossData].filteredExpenses"]);
            // Filter carriage inwards by date range using same logic
            const filteredCarriageInwards = carriageInwards.filter({
                "useProfitLossData.useMemo[profitLossData].filteredCarriageInwards": (record)=>{
                    const recordDate = new Date(record.date);
                    if (dateFilter === 'specific' && specificDate) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(recordDate, specificDate);
                    }
                    return recordDate >= from && recordDate <= to;
                }
            }["useProfitLossData.useMemo[profitLossData].filteredCarriageInwards"]);
            // Calculate Sales/Revenue
            const totalSales = filteredSales.reduce({
                "useProfitLossData.useMemo[profitLossData].totalSales": (sum, sale)=>{
                    return sum + sale.items.reduce({
                        "useProfitLossData.useMemo[profitLossData].totalSales": (itemSum, item)=>itemSum + item.price * item.quantity
                    }["useProfitLossData.useMemo[profitLossData].totalSales"], 0);
                }
            }["useProfitLossData.useMemo[profitLossData].totalSales"], 0);
            // Calculate Sales Returns (Return In using selling price)
            const totalSalesReturns = stockSummaryData.reduce({
                "useProfitLossData.useMemo[profitLossData].totalSalesReturns": (sum, item)=>{
                    return sum + item.returnIn * item.sellingPrice;
                }
            }["useProfitLossData.useMemo[profitLossData].totalSalesReturns"], 0);
            // Net Sales
            const netSales = totalSales - totalSalesReturns;
            // Calculate Opening Stock value (using cost price)
            const totalOpeningStock = stockSummaryData.reduce({
                "useProfitLossData.useMemo[profitLossData].totalOpeningStock": (sum, item)=>{
                    return sum + item.openingStock * item.costPrice;
                }
            }["useProfitLossData.useMemo[profitLossData].totalOpeningStock"], 0);
            // Calculate Purchases (Stock In value using cost price)
            const totalPurchases = stockSummaryData.reduce({
                "useProfitLossData.useMemo[profitLossData].totalPurchases": (sum, item)=>{
                    return sum + item.stockIn * item.costPrice;
                }
            }["useProfitLossData.useMemo[profitLossData].totalPurchases"], 0);
            // Calculate Carriage Inwards
            const totalCarriageInwards = filteredCarriageInwards.reduce({
                "useProfitLossData.useMemo[profitLossData].totalCarriageInwards": (sum, record)=>{
                    return sum + record.amount;
                }
            }["useProfitLossData.useMemo[profitLossData].totalCarriageInwards"], 0);
            // Calculate Closing Stock value (using cost price)
            const totalClosingStock = stockSummaryData.reduce({
                "useProfitLossData.useMemo[profitLossData].totalClosingStock": (sum, item)=>{
                    return sum + item.closingStock * item.costPrice;
                }
            }["useProfitLossData.useMemo[profitLossData].totalClosingStock"], 0);
            // Calculate Total Cost of Sales (cost price of all items sold)
            const totalCostSales = filteredSales.reduce({
                "useProfitLossData.useMemo[profitLossData].totalCostSales": (sum, sale)=>{
                    return sum + sale.items.reduce({
                        "useProfitLossData.useMemo[profitLossData].totalCostSales": (itemSum, item)=>itemSum + (item.cost || 0) * item.quantity
                    }["useProfitLossData.useMemo[profitLossData].totalCostSales"], 0);
                }
            }["useProfitLossData.useMemo[profitLossData].totalCostSales"], 0);
            // Total COGS = Total Cost Sales + Carriage Inwards
            const totalCOGS = totalCostSales + totalCarriageInwards;
            // Gross Profit
            const grossProfit = netSales - totalCOGS;
            // Group expenses by category
            const expensesByCategory = {};
            filteredExpenses.forEach({
                "useProfitLossData.useMemo[profitLossData]": (expense)=>{
                    const category = expense.category || 'Uncategorized';
                    expensesByCategory[category] = (expensesByCategory[category] || 0) + expense.amount;
                }
            }["useProfitLossData.useMemo[profitLossData]"]);
            // Total Expenses
            const totalExpenses = Object.values(expensesByCategory).reduce({
                "useProfitLossData.useMemo[profitLossData].totalExpenses": (sum, amount)=>sum + amount
            }["useProfitLossData.useMemo[profitLossData].totalExpenses"], 0);
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
        }
    }["useProfitLossData.useMemo[profitLossData]"], [
        sales,
        expenses,
        stockSummaryData,
        carriageInwards,
        dateFilter,
        dateRange,
        specificDate,
        taxPercentage
    ]);
    const loading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useProfitLossData.useMemo[loading]": ()=>{
            return salesLoading || expensesLoading || stockLoading || carriageLoading;
        }
    }["useProfitLossData.useMemo[loading]"], [
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
_s(useProfitLossData, "ROXvrBkhbzyot7+iLiElKoZgSnM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useExpenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockSummaryData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockSummaryData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCarriageInwards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarriageInwards"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const PopoverContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = PopoverContent;
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PopoverContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "PopoverContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/calendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-day-picker/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
;
;
function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayPicker"], {
        showOutsideDays: showOutsideDays,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3 pointer-events-auto", className),
        classNames: {
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            caption_dropdowns: "flex justify-center gap-1",
            nav: "space-x-1 flex items-center",
            nav_button: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                variant: "outline"
            }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                variant: "ghost"
            }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
            day_range_end: "day-range-end",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            dropdown: "bg-background rounded-md border p-1 shadow-md",
            dropdown_month: "w-[var(--rdp-caption-dropdown-month-width)]",
            dropdown_year: "w-[var(--rdp-caption-dropdown-year-width)]",
            dropdown_icon: "w-4 h-4",
            button_reset: "appearance-none bg-transparent border-none p-0 m-0",
            vhidden: "sr-only",
            ...classNames
        },
        components: {
            IconLeft: ({ ..._props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/calendar.tsx",
                    lineNumber: 63,
                    columnNumber: 38
                }, void 0),
            IconRight: ({ ..._props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/calendar.tsx",
                    lineNumber: 64,
                    columnNumber: 39
                }, void 0)
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/calendar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Calendar;
Calendar.displayName = "Calendar";
;
var _c;
__turbopack_context__.k.register(_c, "Calendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/analytics/DateRangeFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/calendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
const DateRangeFilter = ({ dateFilter, dateRange, specificDate, isCustomRange, isSpecificDate = false, onDateFilterChange, onDateRangeChange, onSpecificDateChange })=>{
    // Simplified event prevention
    const preventPropagation = (e)=>{
        e.stopPropagation();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-4 items-center flex-wrap mb-4",
        onClick: preventPropagation,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[240px] relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: dateFilter,
                    onValueChange: onDateFilterChange,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "bg-white shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: "Select date range"
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            className: "z-[9999] bg-white shadow-lg border border-border/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "today",
                                    children: "Today"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "yesterday",
                                    children: "Yesterday"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "this-week",
                                    children: "This Week"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "last-week",
                                    children: "Last Week"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "this-month",
                                    children: "This Month"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "last-month",
                                    children: "Last Month"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "this-year",
                                    children: "This Year"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "all",
                                    children: "All Time"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "specific",
                                    children: "Specific Date"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: "custom",
                                    children: "Custom Range"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isSpecificDate && onSpecificDateChange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "bg-white flex items-center gap-2 h-10 pl-3 text-left font-normal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: specificDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(specificDate, "MMM d, yyyy") : "Select Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                            className: "w-auto p-0 z-[9999] bg-white shadow-lg",
                            align: "start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                initialFocus: true,
                                mode: "single",
                                defaultMonth: specificDate,
                                selected: specificDate,
                                onSelect: onSpecificDateChange,
                                className: "p-3 pointer-events-auto",
                                showOutsideDays: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isCustomRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "bg-white flex items-center gap-2 h-10 pl-3 text-left font-normal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: dateRange.from ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, "MMM d, yyyy") : "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                className: "w-auto p-0 z-[9999] bg-white shadow-lg",
                                align: "start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                    initialFocus: true,
                                    mode: "single",
                                    defaultMonth: dateRange?.from,
                                    selected: dateRange?.from,
                                    onSelect: (date)=>onDateRangeChange({
                                            ...dateRange,
                                            from: date
                                        }),
                                    className: "p-3 pointer-events-auto",
                                    showOutsideDays: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-muted-foreground",
                        children: "to"
                    }, void 0, false, {
                        fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "bg-white flex items-center gap-2 h-10 pl-3 text-left font-normal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: dateRange.to ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.to, "MMM d, yyyy") : "End Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                className: "w-auto p-0 z-[9999] bg-white shadow-lg",
                                align: "start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                    initialFocus: true,
                                    mode: "single",
                                    defaultMonth: dateRange?.to,
                                    selected: dateRange?.to,
                                    onSelect: (date)=>onDateRangeChange({
                                            ...dateRange,
                                            to: date
                                        }),
                                    className: "p-3 pointer-events-auto",
                                    showOutsideDays: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/analytics/DateRangeFilter.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DateRangeFilter;
const __TURBOPACK__default__export__ = DateRangeFilter;
var _c;
__turbopack_context__.k.register(_c, "DateRangeFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Table;
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c13 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Table$React.forwardRef");
__turbopack_context__.k.register(_c1, "Table");
__turbopack_context__.k.register(_c2, "TableHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "TableHeader");
__turbopack_context__.k.register(_c4, "TableBody$React.forwardRef");
__turbopack_context__.k.register(_c5, "TableBody");
__turbopack_context__.k.register(_c6, "TableFooter$React.forwardRef");
__turbopack_context__.k.register(_c7, "TableFooter");
__turbopack_context__.k.register(_c8, "TableRow$React.forwardRef");
__turbopack_context__.k.register(_c9, "TableRow");
__turbopack_context__.k.register(_c10, "TableHead$React.forwardRef");
__turbopack_context__.k.register(_c11, "TableHead");
__turbopack_context__.k.register(_c12, "TableCell$React.forwardRef");
__turbopack_context__.k.register(_c13, "TableCell");
__turbopack_context__.k.register(_c14, "TableCaption$React.forwardRef");
__turbopack_context__.k.register(_c15, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cash/TaxCalculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
;
;
;
const TaxCalculator = ({ taxPercentage, onTaxChange, netProfitLoss, formatCurrency })=>{
    const handleTaxChange = (e)=>{
        const value = parseFloat(e.target.value) || 0;
        onTaxChange(Math.max(0, Math.min(100, value))); // Clamp between 0-100
    };
    const taxAmount = netProfitLoss > 0 ? netProfitLoss * taxPercentage / 100 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 p-4 bg-gray-50 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "tax-percentage",
                        className: "text-sm font-medium",
                        children: "Tax %:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/TaxCalculator.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "tax-percentage",
                        type: "number",
                        min: "0",
                        max: "100",
                        step: "0.1",
                        value: taxPercentage,
                        onChange: handleTaxChange,
                        className: "w-20 h-8 text-center"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/TaxCalculator.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cash/TaxCalculator.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-muted-foreground",
                        children: "Tax Amount: "
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/TaxCalculator.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium",
                        children: formatCurrency(taxAmount)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/TaxCalculator.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cash/TaxCalculator.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cash/TaxCalculator.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TaxCalculator;
const __TURBOPACK__default__export__ = TaxCalculator;
var _c;
__turbopack_context__.k.register(_c, "TaxCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/exportProfitLossToCSV.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportProfitLossToCSV",
    ()=>exportProfitLossToCSV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
const getPeriodDescription = (dateFilter, dateRange)=>{
    if (dateRange.from && dateRange.to) {
        const isSameMonth = dateRange.from.getMonth() === dateRange.to.getMonth() && dateRange.from.getFullYear() === dateRange.to.getFullYear();
        const isSameDay = dateRange.from.toDateString() === dateRange.to.toDateString();
        if (isSameDay) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MMM dd, yyyy');
        } else if (isSameMonth && dateFilter === 'this-month') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MMMM yyyy');
        } else if (dateFilter === 'this-year') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'yyyy');
        } else if (dateFilter === 'last-month') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MMMM yyyy');
        } else if (dateFilter === 'this-week' || dateFilter === 'last-week') {
            return `Week of ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MMM dd')} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.to, 'MMM dd, yyyy')}`;
        } else {
            return `Custom Period: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MM/dd/yyyy')} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.to, 'MM/dd/yyyy')}`;
        }
    } else if (dateRange.from) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MMM dd, yyyy');
    } else {
        return 'All Periods';
    }
};
const exportProfitLossToCSV = (options)=>{
    const { data, dateRange, currency, businessName, dateFilter } = options;
    const formatAmount = (amount, showNegativeSign = false)=>{
        if (showNegativeSign && amount < 0) {
            return `-${Math.abs(amount).toFixed(0)}`;
        }
        return amount.toFixed(0);
    };
    const csvRows = [];
    // Header information
    csvRows.push('PROFIT & LOSS ACCOUNT');
    csvRows.push('');
    if (businessName) {
        csvRows.push(`Business,${businessName}`);
    }
    csvRows.push(`Period,${getPeriodDescription(dateFilter, dateRange)}`);
    csvRows.push(`Generated,${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'MMM dd yyyy HH:mm')}`);
    csvRows.push(`Currency,${currency}`);
    csvRows.push('');
    // Table headers
    csvRows.push('DETAILS,AMOUNT');
    // SALES/REVENUE Section
    csvRows.push('');
    csvRows.push('SALES/REVENUE,');
    csvRows.push(`Sales/Revenue,${formatAmount(data.sales)}`);
    csvRows.push(`Sales Returns,(${formatAmount(data.salesReturns)})`);
    csvRows.push(`NET SALES,${formatAmount(data.netSales)}`);
    // COST OF GOODS SOLD Section
    csvRows.push('');
    csvRows.push('COST OF GOODS SOLD (COGS),');
    csvRows.push(`Total Cost Sales,${formatAmount(data.totalCostSales)}`);
    csvRows.push(`Carriage Inwards,${formatAmount(data.carriageInwards)}`);
    csvRows.push(`TOTAL COST OF GOODS SOLD (COGS),${formatAmount(data.totalCOGS)}`);
    // GROSS PROFIT
    csvRows.push('');
    csvRows.push(`GROSS PROFIT,${formatAmount(data.grossProfit, true)}`);
    // EXPENSES Section
    csvRows.push('');
    csvRows.push('EXPENSES,');
    Object.entries(data.expensesByCategory).forEach(([category, amount])=>{
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        csvRows.push(`${categoryName},${formatAmount(amount)}`);
    });
    csvRows.push(`TOTAL EXPENSES,${formatAmount(data.totalExpenses)}`);
    // FINAL CALCULATIONS
    csvRows.push('');
    csvRows.push(`NET PROFIT / LOSS,${formatAmount(data.netProfitLoss, true)}`);
    csvRows.push(`Tax (${data.taxPercentage}%),${formatAmount(data.taxAmount)}`);
    csvRows.push(`FINAL PROFIT AFTER TAX,${formatAmount(data.finalProfitAfterTax, true)}`);
    // Create and download CSV
    const csvContent = csvRows.join('\n');
    const blob = new Blob([
        csvContent
    ], {
        type: 'text/csv;charset=utf-8;'
    });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        const fileName = `profit_loss_${dateRange.from ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'yyyy-MM-dd') : 'current'}_to_${dateRange.to ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.to, 'yyyy-MM-dd') : 'current'}.csv`;
        link.setAttribute('download', fileName);
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
"[project]/src/utils/exportProfitLossToPDF.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportProfitLossToPDF",
    ()=>exportProfitLossToPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
;
const getPeriodDescription = (dateFilter, dateRange)=>{
    if (dateRange.from && dateRange.to) {
        const isSameMonth = dateRange.from.getMonth() === dateRange.to.getMonth() && dateRange.from.getFullYear() === dateRange.to.getFullYear();
        const isSameDay = dateRange.from.toDateString() === dateRange.to.toDateString();
        if (isSameDay) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MMM dd, yyyy');
        } else if (isSameMonth && dateFilter === 'this-month') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MMMM yyyy');
        } else if (dateFilter === 'this-year') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'yyyy');
        } else if (dateFilter === 'last-month') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MMMM yyyy');
        } else if (dateFilter === 'this-week' || dateFilter === 'last-week') {
            return `Week of ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MMM dd')} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.to, 'MMM dd, yyyy')}`;
        } else {
            return `Custom Period: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MM/dd/yyyy')} - ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.to, 'MM/dd/yyyy')}`;
        }
    } else if (dateRange.from) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'MMM dd, yyyy');
    } else {
        return 'All Periods';
    }
};
const exportProfitLossToPDF = async (options)=>{
    const { data, dateRange, currency, businessName, dateFilter } = options;
    const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    };
    let currentY = margins.top;
    // Function to add watermark to current page
    const addWatermark = ()=>{
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(150, 150, 150); // Light gray color
        pdf.text('Created By Gonza Systems', pageWidth / 2, pageHeight - 10, {
            align: 'center'
        });
        pdf.setTextColor(0, 0, 0); // Reset to black
    };
    const formatCurrency = (amount)=>{
        return `${currency} ${amount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    };
    // Business name - centered and bold
    if (businessName) {
        pdf.setFontSize(18);
        pdf.setFont('helvetica', 'bold');
        const businessNameWidth = pdf.getTextWidth(businessName);
        pdf.text(businessName, (pageWidth - businessNameWidth) / 2, currentY);
        currentY += 10; // Reduced from 12
    }
    // Report title - centered and bold
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    const title = 'Profit & Loss Account';
    const titleWidth = pdf.getTextWidth(title);
    pdf.text(title, (pageWidth - titleWidth) / 2, currentY);
    currentY += 8; // Reduced from 10
    // Date range - centered (This is the report period, not generation date)
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    const periodText = getPeriodDescription(dateFilter, dateRange);
    const periodWidth = pdf.getTextWidth(periodText);
    pdf.text(periodText, (pageWidth - periodWidth) / 2, currentY);
    currentY += 15;
    // Helper function to add a section header
    const addSectionHeader = (title)=>{
        if (currentY > pageHeight - 40) {
            addWatermark(); // Add watermark to current page before creating new one
            pdf.addPage();
            currentY = margins.top;
        }
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text(title, margins.left, currentY);
        currentY += 6; // Reduced from 8
    };
    // Helper function to add a row
    const addRow = (label, amount, options = {})=>{
        const { isBold = false, isSubtraction = false, isTotal = false, indent = false, showNegativeSign = false } = options;
        if (currentY > pageHeight - 25) {
            addWatermark(); // Add watermark to current page before creating new one
            pdf.addPage();
            currentY = margins.top;
        }
        pdf.setFontSize(10);
        pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
        const labelX = indent ? margins.left + 10 : margins.left;
        pdf.text(label, labelX, currentY);
        if (amount !== null) {
            let amountText;
            if (showNegativeSign && amount < 0) {
                amountText = `-${formatCurrency(Math.abs(amount))}`;
            } else if (isSubtraction) {
                amountText = `(${formatCurrency(Math.abs(amount))})`;
            } else {
                amountText = formatCurrency(Math.abs(amount));
            }
            const amountWidth = pdf.getTextWidth(amountText);
            pdf.text(amountText, pageWidth - margins.right - amountWidth, currentY);
        }
        // Add line for totals
        if (isTotal) {
            pdf.setLineWidth(0.3);
            pdf.line(margins.left, currentY + 2, pageWidth - margins.right, currentY + 2);
            currentY += 2; // Reduced from 3
        }
        currentY += 5; // Reduced from 6
    };
    // Add spacer with reduced height
    const addSpacer = (height = 3)=>{
        currentY += height;
    };
    // SALES/REVENUE Section
    addSectionHeader('SALES/REVENUE');
    addRow('Sales/Revenue', data.sales, {
        indent: true
    });
    addRow('Sales Returns', data.salesReturns, {
        isSubtraction: true,
        indent: true
    });
    addRow('NET SALES', data.netSales, {
        isBold: true,
        isTotal: true
    });
    addSpacer(5); // Reduced from 8
    // COST OF GOODS SOLD Section
    addSectionHeader('COST OF GOODS SOLD (COGS)');
    addRow('Total Cost Sales', data.totalCostSales, {
        indent: true
    });
    addRow('Carriage Inwards', data.carriageInwards, {
        indent: true
    });
    addRow('TOTAL COST OF GOODS SOLD (COGS)', data.totalCOGS, {
        isBold: true,
        isTotal: true
    });
    addSpacer(5); // Reduced from 8
    // GROSS PROFIT
    addRow('GROSS PROFIT', data.grossProfit, {
        isBold: true,
        isTotal: true,
        showNegativeSign: true
    });
    addSpacer(3); // Reduced from 4
    // EXPENSES Section
    addSectionHeader('EXPENSES');
    Object.entries(data.expensesByCategory).forEach(([category, amount])=>{
        addRow(category.charAt(0).toUpperCase() + category.slice(1).toLowerCase(), amount, {
            indent: true
        });
    });
    addRow('TOTAL EXPENSES', data.totalExpenses, {
        isBold: true,
        isTotal: true
    });
    addSpacer(5); // Reduced from 8
    // FINAL CALCULATIONS
    addRow('NET PROFIT / LOSS', data.netProfitLoss, {
        isBold: true,
        isTotal: true,
        showNegativeSign: true
    });
    addRow(`Tax (${data.taxPercentage}%)`, data.taxAmount, {
        indent: true
    });
    addRow('FINAL PROFIT AFTER TAX', data.finalProfitAfterTax, {
        isBold: true,
        isTotal: true,
        showNegativeSign: true
    });
    // Add watermark to the final page
    addWatermark();
    // Save the PDF
    const fileName = `profit_loss_${dateRange.from ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.from, 'yyyy-MM-dd') : 'current'}_to_${dateRange.to ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateRange.to, 'yyyy-MM-dd') : 'current'}.pdf`;
    pdf.save(fileName);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cash/PLExportButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportProfitLossToCSV$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/exportProfitLossToCSV.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportProfitLossToPDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/exportProfitLossToPDF.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const PLExportButton = ({ data, dateRange, currency, businessName, businessLogo, dateFilter })=>{
    _s();
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleExportCSV = async ()=>{
        try {
            setIsExporting(true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportProfitLossToCSV$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportProfitLossToCSV"])({
                data,
                dateRange,
                currency,
                businessName,
                dateFilter
            });
            toast({
                title: "Export Successful",
                description: "Profit & Loss Account exported to CSV successfully."
            });
        } catch (error) {
            console.error('Error exporting CSV:', error);
            toast({
                title: "Export Failed",
                description: "Failed to export Profit & Loss Account to CSV.",
                variant: "destructive"
            });
        } finally{
            setIsExporting(false);
        }
    };
    const handleExportPDF = async ()=>{
        try {
            setIsExporting(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$exportProfitLossToPDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportProfitLossToPDF"])({
                data,
                dateRange,
                currency,
                businessName,
                businessLogo,
                dateFilter
            });
            toast({
                title: "Export Successful",
                description: "Profit & Loss Account exported to PDF successfully."
            });
        } catch (error) {
            console.error('Error exporting PDF:', error);
            toast({
                title: "Export Failed",
                description: "Failed to export Profit & Loss Account to PDF.",
                variant: "destructive"
            });
        } finally{
            setIsExporting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    disabled: isExporting,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                            className: "h-4 w-4 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cash/PLExportButton.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Export"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cash/PLExportButton.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cash/PLExportButton.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: handleExportCSV,
                        disabled: isExporting,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cash/PLExportButton.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Export as CSV"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cash/PLExportButton.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: handleExportPDF,
                        disabled: isExporting,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cash/PLExportButton.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Export as PDF"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cash/PLExportButton.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cash/PLExportButton.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cash/PLExportButton.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PLExportButton, "HuJLa3830MK3PezYXaF1M78yEs8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = PLExportButton;
const __TURBOPACK__default__export__ = PLExportButton;
var _c;
__turbopack_context__.k.register(_c, "PLExportButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cash/ProfitLossTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$TaxCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cash/TaxCalculator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$PLExportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cash/PLExportButton.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
const ProfitLossTable = ({ data, isLoading, formatCurrency, onTaxChange, dateRange, businessName, businessLogo, currency, dateFilter })=>{
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Profit & Loss Account"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            ...Array(15)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-8 w-full"
                            }, i, false, {
                                fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const tableRows = [
        // Sales Section
        {
            detail: 'SALES/REVENUE',
            amount: data.sales,
            isBold: true
        },
        {
            detail: 'SALES RETURNS',
            amount: data.salesReturns,
            isSubtraction: true
        },
        {
            detail: 'NET SALES',
            amount: data.netSales,
            isBold: true,
            isTotal: true
        },
        // Spacer
        {
            detail: '',
            amount: null,
            isSpacer: true
        },
        // COGS Section - Updated structure with new formula
        {
            detail: 'COST OF GOODS SOLD (COGS)',
            amount: null,
            isHeader: true
        },
        {
            detail: 'TOTAL COST SALES',
            amount: data.totalCostSales
        },
        {
            detail: 'CARRIAGE INWARDS',
            amount: data.carriageInwards
        },
        {
            detail: 'TOTAL COST OF GOODS SOLD (COGS)',
            amount: data.totalCOGS,
            isBold: true,
            isTotal: true
        },
        // Spacer
        {
            detail: '',
            amount: null,
            isSpacer: true
        },
        // Gross Profit
        {
            detail: 'GROSS PROFIT',
            amount: data.grossProfit,
            isBold: true,
            isTotal: true
        },
        // Spacer
        {
            detail: '',
            amount: null,
            isSpacer: true
        },
        // Expenses Section
        {
            detail: 'EXPENSES',
            amount: null,
            isHeader: true
        }
    ];
    // Add expense categories
    Object.entries(data.expensesByCategory).forEach(([category, amount])=>{
        tableRows.push({
            detail: category.toUpperCase(),
            amount: amount
        });
    });
    // Continue with totals
    tableRows.push({
        detail: 'TOTAL EXPENSES',
        amount: data.totalExpenses,
        isBold: true,
        isTotal: true
    }, {
        detail: '',
        amount: null,
        isSpacer: true
    }, {
        detail: 'NET PROFIT / LOSS',
        amount: data.netProfitLoss,
        isBold: true,
        isTotal: true
    }, {
        detail: 'TAX',
        amount: data.taxAmount
    }, {
        detail: 'FINAL PROFIT AFTER TAX',
        amount: data.finalProfitAfterTax,
        isBold: true,
        isTotal: true
    });
    const getRowColor = (row)=>{
        if (row.amount < 0) return 'text-red-600';
        if (row.detail?.includes('PROFIT') && row.amount > 0) return 'text-green-600';
        if (row.detail?.includes('EXPENSE') || row.detail?.includes('TAX')) return 'text-red-600';
        return 'text-gray-900';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Profit & Loss Account"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$PLExportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: data,
                            dateRange: dateRange,
                            currency: currency,
                            businessName: businessName,
                            businessLogo: businessLogo,
                            dateFilter: dateFilter
                        }, void 0, false, {
                            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$TaxCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        taxPercentage: data.taxPercentage,
                        onTaxChange: onTaxChange,
                        netProfitLoss: data.netProfitLoss,
                        formatCurrency: formatCurrency
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "font-bold text-left",
                                                children: "DETAILS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "font-bold text-right",
                                                children: "AMOUNT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: tableRows.map((row, index)=>{
                                        if (row.isSpacer) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    colSpan: 2,
                                                    className: "h-4 border-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        }
                                        if (row.isHeader) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    colSpan: 2,
                                                    className: "font-bold text-gray-800 bg-gray-50 border-0",
                                                    children: row.detail
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, index, false, {
                                                fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0));
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            className: row.isTotal ? 'border-t-2 border-gray-300' : '',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: `${row.isBold ? 'font-bold' : ''} ${getRowColor(row)}`,
                                                    children: row.detail
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: `text-right ${row.isBold ? 'font-bold' : ''} ${getRowColor(row)}`,
                                                    children: row.amount !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            row.isSubtraction && '(',
                                                            formatCurrency(Math.abs(row.amount)),
                                                            row.isSubtraction && ')'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-blue-200 bg-blue-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-blue-600 font-medium",
                                            children: "Gross Profit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold text-blue-800",
                                            children: formatCurrency(data.grossProfit)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: `border-${data.netProfitLoss >= 0 ? 'green' : 'red'}-200 bg-${data.netProfitLoss >= 0 ? 'green' : 'red'}-50`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm text-${data.netProfitLoss >= 0 ? 'green' : 'red'}-600 font-medium`,
                                            children: [
                                                "Net ",
                                                data.netProfitLoss >= 0 ? 'Profit' : 'Loss'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-lg font-bold text-${data.netProfitLoss >= 0 ? 'green' : 'red'}-800`,
                                            children: formatCurrency(Math.abs(data.netProfitLoss))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: `border-${data.finalProfitAfterTax >= 0 ? 'green' : 'red'}-200 bg-${data.finalProfitAfterTax >= 0 ? 'green' : 'red'}-50`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm text-${data.finalProfitAfterTax >= 0 ? 'green' : 'red'}-600 font-medium`,
                                            children: [
                                                "Final ",
                                                data.finalProfitAfterTax >= 0 ? 'Profit' : 'Loss',
                                                " After Tax"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-lg font-bold text-${data.finalProfitAfterTax >= 0 ? 'green' : 'red'}-800`,
                                            children: formatCurrency(Math.abs(data.finalProfitAfterTax))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cash/ProfitLossTable.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProfitLossTable;
const __TURBOPACK__default__export__ = ProfitLossTable;
var _c;
__turbopack_context__.k.register(_c, "ProfitLossTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cash/ProfitLossTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProfitLossData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProfitLossData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2f$DateRangeFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/analytics/DateRangeFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$ProfitLossTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cash/ProfitLossTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/dateFilters.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const ProfitLossTab = ()=>{
    _s();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    // Date filter state - default to current month
    const [dateFilter, setDateFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('this-month');
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        from: undefined,
        to: undefined
    });
    const [specificDate, setSpecificDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // Tax percentage state
    const [taxPercentage, setTaxPercentage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Calculate derived states based on dateFilter
    const isCustomRange = dateFilter === 'custom';
    const isSpecificDate = dateFilter === 'specific';
    // Reset relevant states when filter changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfitLossTab.useEffect": ()=>{
            if (dateFilter === 'custom') {
                // Clear specific date when switching to custom
                setSpecificDate(undefined);
            } else if (dateFilter === 'specific') {
                // Clear date range when switching to specific
                setDateRange({
                    from: undefined,
                    to: undefined
                });
            } else {
                // Clear both when switching to predefined filters
                setDateRange({
                    from: undefined,
                    to: undefined
                });
                setSpecificDate(undefined);
            }
        }
    }["ProfitLossTab.useEffect"], [
        dateFilter
    ]);
    // Get the currency from settings, defaulting to USD only if settings is null
    const currency = settings?.currency || 'USD';
    // Get profit & loss data using same parameters as sold items report
    const { profitLossData, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProfitLossData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfitLossData"])(dateFilter, dateRange, specificDate, taxPercentage);
    // Calculate the effective date range for exports (either custom range or calculated from filter)
    const effectiveDateRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProfitLossTab.useMemo[effectiveDateRange]": ()=>{
            if (dateFilter === 'custom' && dateRange.from && dateRange.to) {
                return dateRange;
            } else if (dateFilter === 'specific' && specificDate) {
                return {
                    from: specificDate,
                    to: specificDate
                };
            } else if (dateFilter !== 'custom' && dateFilter !== 'specific') {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$dateFilters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDateRangeFromFilter"])(dateFilter);
            }
            return {
                from: undefined,
                to: undefined
            };
        }
    }["ProfitLossTab.useMemo[effectiveDateRange]"], [
        dateFilter,
        dateRange,
        specificDate
    ]);
    // Format currency function using the settings currency
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2
        }).format(amount);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-4",
                        children: "Profit & Loss Account"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/ProfitLossTab.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$analytics$2f$DateRangeFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        dateFilter: dateFilter,
                        dateRange: dateRange,
                        specificDate: specificDate,
                        isCustomRange: isCustomRange,
                        isSpecificDate: isSpecificDate,
                        onDateFilterChange: setDateFilter,
                        onDateRangeChange: setDateRange,
                        onSpecificDateChange: setSpecificDate
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/ProfitLossTab.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cash/ProfitLossTab.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$ProfitLossTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: profitLossData,
                isLoading: isLoading,
                formatCurrency: formatCurrency,
                onTaxChange: setTaxPercentage,
                dateRange: effectiveDateRange,
                businessName: currentBusiness?.name,
                businessLogo: settings?.businessLogo,
                currency: currency,
                dateFilter: dateFilter
            }, void 0, false, {
                fileName: "[project]/src/components/cash/ProfitLossTab.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cash/ProfitLossTab.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProfitLossTab, "zGA/ikqa8aea1N2HBy0KetG1WTE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProfitLossData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfitLossData"]
    ];
});
_c = ProfitLossTab;
const __TURBOPACK__default__export__ = ProfitLossTab;
var _c;
__turbopack_context__.k.register(_c, "ProfitLossTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cash/CashContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$CashAccountsHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cash/CashAccountsHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$CashAccountsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cash/CashAccountsList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$CashAccountDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cash/CashAccountDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$ProfitLossTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cash/ProfitLossTab.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const CashContent = ({ accounts, isLoading, isDialogOpen, onDialogOpenChange, onCreateAccount, onAccountDeleted, canCreate = true })=>{
    _s();
    const [isSubmitting, setIsSubmitting] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const handleOpenDialog = ()=>onDialogOpenChange(true);
    const handleCreateAccount = async (data)=>{
        setIsSubmitting(true);
        try {
            await onCreateAccount(data);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
        defaultValue: "cash-accounts",
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                className: "grid w-full grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                        value: "cash-accounts",
                        children: "Cash Accounts"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/CashContent.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                        value: "profit-loss",
                        children: "Profit & Loss"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/CashContent.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cash/CashContent.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "cash-accounts",
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$CashAccountsHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onCreateAccount: handleOpenDialog,
                        canCreate: canCreate
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/CashContent.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$CashAccountsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        accounts: accounts,
                        isLoading: isLoading,
                        onCreateAccount: handleOpenDialog,
                        onAccountDeleted: onAccountDeleted,
                        canCreate: canCreate
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/CashContent.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$CashAccountDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        open: isDialogOpen,
                        onOpenChange: onDialogOpenChange,
                        onSubmit: handleCreateAccount,
                        title: "Create New Cash Account",
                        isSubmitting: isSubmitting
                    }, void 0, false, {
                        fileName: "[project]/src/components/cash/CashContent.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cash/CashContent.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "profit-loss",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$ProfitLossTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/cash/CashContent.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/cash/CashContent.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cash/CashContent.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CashContent, "oafqrj090+oRf5bsyDQJHsshgoc=");
_c = CashContent;
const __TURBOPACK__default__export__ = CashContent;
var _c;
__turbopack_context__.k.register(_c, "CashContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCashAccountRedirect.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCashAccountRedirect",
    ()=>useCashAccountRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
;
;
const useCashAccountRedirect = (accounts)=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const [hasCheckedRedirect, setHasCheckedRedirect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check for last visited cash account and redirect if found
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCashAccountRedirect.useEffect": ()=>{
            if (!hasCheckedRedirect && accounts.length > 0) {
                const lastVisitedAccountId = localStorage.getItem('lastVisitedCashAccount');
                const lastVisitedUrl = localStorage.getItem('lastVisitedCashAccountUrl');
                if (lastVisitedAccountId && lastVisitedUrl) {
                    // Verify the account still exists
                    const accountExists = accounts.some({
                        "useCashAccountRedirect.useEffect.accountExists": (acc)=>acc.id === lastVisitedAccountId
                    }["useCashAccountRedirect.useEffect.accountExists"]);
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
        }
    }["useCashAccountRedirect.useEffect"], [
        accounts,
        hasCheckedRedirect,
        navigate
    ]);
    return {
        hasCheckedRedirect
    };
};
_s(useCashAccountRedirect, "n7M7i1Xtx+PaWv272jYwCA5EtDw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Cash.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCashAccounts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$CashContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cash/CashContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccountRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCashAccountRedirect.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
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
const Cash = ()=>{
    _s();
    const { currentBusiness, isLoading: businessLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const { accounts, isLoading, createAccount, refreshAccounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashAccounts"])();
    const { hasPermission, isLoading: profilesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle redirect to last visited cash account
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccountRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashAccountRedirect"])(accounts);
    const handleCreateAccount = async (data)=>{
        try {
            await createAccount(data);
            setIsDialogOpen(false);
        } catch (error) {
            console.error('Error creating account:', error);
        }
    };
    const handleAccountDeleted = async ()=>{
        // Refresh accounts list when an account is deleted
        await refreshAccounts();
    };
    if (businessLoading || isLoading || profilesLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
            }, void 0, false, {
                fileName: "[project]/src/pages/Cash.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/pages/Cash.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!hasPermission('finance', 'view')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                    variant: "destructive",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Cash.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                            children: "Access Denied"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Cash.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            children: "You do not have permission to view finance/cash accounts. Please contact your administrator if you believe this is an error."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Cash.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Cash.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>navigate('/'),
                        variant: "outline",
                        children: "Back to Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Cash.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/Cash.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/Cash.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const canCreate = hasPermission('finance', 'create');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 p-4 md:p-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl md:text-3xl font-bold",
                children: "Finance"
            }, void 0, false, {
                fileName: "[project]/src/pages/Cash.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cash$2f$CashContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                accounts: accounts,
                isLoading: businessLoading || !currentBusiness || isLoading,
                isDialogOpen: isDialogOpen,
                onDialogOpenChange: setIsDialogOpen,
                onCreateAccount: handleCreateAccount,
                onAccountDeleted: handleAccountDeleted,
                canCreate: canCreate
            }, void 0, false, {
                fileName: "[project]/src/pages/Cash.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/Cash.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Cash, "1MMGrfACqnEFvQJefZ9Sj6b4vBs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashAccounts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccountRedirect$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashAccountRedirect"]
    ];
});
_c = Cash;
const __TURBOPACK__default__export__ = Cash;
var _c;
__turbopack_context__.k.register(_c, "Cash");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9f9b2856._.js.map