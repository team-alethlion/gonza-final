(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useActivityLogger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
                // Get total count first
                const { count: totalCountResult } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customers').select('*', {
                    count: 'exact',
                    head: true
                }).eq('location_id', currentBusiness.id);
                // Load all customers with chunked pagination (no page limit)
                let allCustomers = [];
                let start = 0;
                const chunkSize = 1000;
                let hasMore = true;
                while(hasMore){
                    const { data: chunk, error: chunkError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customers').select('*').eq('location_id', currentBusiness.id).order('full_name').range(start, start + chunkSize - 1);
                    if (chunkError) throw chunkError;
                    if (chunk && chunk.length > 0) {
                        allCustomers.push(...chunk);
                        start += chunkSize;
                        hasMore = chunk.length === chunkSize;
                    } else {
                        hasMore = false;
                    }
                }
                const formattedCustomers = allCustomers.map({
                    "useCustomers.useCallback[loadCustomers].formattedCustomers": (customer)=>({
                            id: customer.id,
                            fullName: customer.full_name,
                            phoneNumber: customer.phone_number,
                            email: customer.email,
                            birthday: customer.birthday ? new Date(customer.birthday) : null,
                            gender: customer.gender,
                            location: customer.location,
                            categoryId: customer.category_id,
                            notes: customer.notes,
                            tags: customer.tags,
                            socialMedia: customer.social_media || null,
                            createdAt: new Date(customer.created_at),
                            updatedAt: new Date(customer.updated_at)
                        })
                }["useCustomers.useCallback[loadCustomers].formattedCustomers"]);
                return {
                    customers: formattedCustomers,
                    count: totalCountResult || 0
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
            const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!userData.user) throw new Error('User not authenticated');
            const insertData = {
                user_id: userData.user.id,
                location_id: currentBusiness.id,
                full_name: customerData.fullName,
                phone_number: customerData.phoneNumber || null,
                email: customerData.email || null,
                birthday: customerData.birthday?.toISOString().split('T')[0] || null,
                gender: customerData.gender || null,
                location: customerData.location || null,
                category_id: customerData.categoryId || null,
                notes: customerData.notes || null,
                tags: customerData.tags || null,
                social_media: customerData.socialMedia || null
            };
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customers').insert(insertData).select().single();
            if (error) throw error;
            // Format the new customer and update cache immediately
            const newCustomer = {
                id: data.id,
                fullName: data.full_name,
                phoneNumber: data.phone_number,
                email: data.email,
                birthday: data.birthday ? new Date(data.birthday) : null,
                gender: data.gender,
                location: data.location,
                categoryId: data.category_id,
                notes: data.notes,
                tags: data.tags,
                socialMedia: data.social_media,
                createdAt: new Date(data.created_at),
                updatedAt: new Date(data.updated_at)
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
            if (updates.fullName !== undefined) updateData.full_name = updates.fullName;
            if (updates.phoneNumber !== undefined) updateData.phone_number = updates.phoneNumber;
            if (updates.email !== undefined) updateData.email = updates.email;
            if (updates.birthday !== undefined) updateData.birthday = updates.birthday?.toISOString().split('T')[0];
            if (updates.gender !== undefined) updateData.gender = updates.gender;
            if (updates.location !== undefined) updateData.location = updates.location;
            if (updates.categoryId !== undefined) updateData.category_id = updates.categoryId; // Added category update
            if (updates.notes !== undefined) updateData.notes = updates.notes;
            if (updates.tags !== undefined) updateData.tags = updates.tags;
            if (updates.socialMedia !== undefined) updateData.social_media = updates.socialMedia;
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customers').update(updateData).eq('id', id);
            if (error) throw error;
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customers').delete().eq('id', id);
            if (error) throw error;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCustomers.useEffect": ()=>{
            if (!currentBusiness?.id) return;
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('customers_changes').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'customers',
                filter: `location_id=eq.${currentBusiness.id}`
            }, {
                "useCustomers.useEffect.channel": ()=>{
                    queryClient.invalidateQueries({
                        queryKey
                    });
                }
            }["useCustomers.useEffect.channel"]).subscribe();
            return ({
                "useCustomers.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["useCustomers.useEffect"];
        }
    }["useCustomers.useEffect"], [
        currentBusiness?.id,
        page,
        pageSize
    ]);
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
_s(useCustomers, "rBSz+76th81HmpUztiGESS6QH/E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useActivityLogger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogger"],
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
    const loadCategories = async ()=>{
        if (!currentBusiness) {
            setCategories([]);
            setIsLoading(false);
            return;
        }
        try {
            setIsLoading(true);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customer_categories').select('*').eq('location_id', currentBusiness.id).order('name');
            if (error) throw error;
            const formattedCategories = data?.map((category)=>({
                    id: category.id,
                    name: category.name,
                    isDefault: category.is_default,
                    createdAt: new Date(category.created_at),
                    updatedAt: new Date(category.updated_at)
                })) || [];
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
            const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!userData.user) throw new Error('User not authenticated');
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customer_categories').insert({
                user_id: userData.user.id,
                location_id: currentBusiness.id,
                name: name.trim(),
                is_default: false
            }).select().single();
            if (error) throw error;
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customer_categories').update({
                name: name.trim()
            }).eq('id', id);
            if (error) throw error;
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
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customer_categories').delete().eq('id', id);
            if (error) throw error;
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
_s(useCustomerCategories, "2PyiX+AsPfk3V7Bgi94lbE+MRno=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useCustomerData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCustomerData",
    ()=>useCustomerData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useCustomerData = (customers, categories, searchTerm, selectedCategory, totalCount, customersWithBirthdaysOverride, customersThisMonthOverride)=>{
    _s();
    // Filter out any categories with empty IDs to prevent Select errors
    const validCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCustomerData.useMemo[validCategories]": ()=>{
            return categories.filter({
                "useCustomerData.useMemo[validCategories]": (category)=>category.id && category.id.trim() !== ''
            }["useCustomerData.useMemo[validCategories]"]);
        }
    }["useCustomerData.useMemo[validCategories]"], [
        categories
    ]);
    // Enhanced filtered customers with category filter
    const filteredCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCustomerData.useMemo[filteredCustomers]": ()=>{
            return customers.filter({
                "useCustomerData.useMemo[filteredCustomers]": (customer)=>{
                    const matchesSearch = customer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || customer.email && customer.email.toLowerCase().includes(searchTerm.toLowerCase()) || customer.phoneNumber && customer.phoneNumber.includes(searchTerm);
                    const matchesCategory = selectedCategory === 'all' || customer.categoryId === selectedCategory;
                    return matchesSearch && matchesCategory;
                }
            }["useCustomerData.useMemo[filteredCustomers]"]);
        }
    }["useCustomerData.useMemo[filteredCustomers]"], [
        customers,
        searchTerm,
        selectedCategory
    ]);
    // Enhanced customer stats calculations with category breakdown
    const customerStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCustomerData.useMemo[customerStats]": ()=>{
            const totalCustomers = typeof totalCount === 'number' ? totalCount : customers.length;
            const customersWithBirthdays = typeof customersWithBirthdaysOverride === 'number' ? customersWithBirthdaysOverride : customers.filter({
                "useCustomerData.useMemo[customerStats]": (c)=>c.birthday
            }["useCustomerData.useMemo[customerStats]"]).length;
            const customersThisMonth = typeof customersThisMonthOverride === 'number' ? customersThisMonthOverride : customers.filter({
                "useCustomerData.useMemo[customerStats]": (c)=>{
                    const thisMonth = new Date();
                    const customerDate = new Date(c.createdAt);
                    return customerDate.getMonth() === thisMonth.getMonth() && customerDate.getFullYear() === thisMonth.getFullYear();
                }
            }["useCustomerData.useMemo[customerStats]"]).length;
            const categoryBreakdown = categories.reduce({
                "useCustomerData.useMemo[customerStats].categoryBreakdown": (acc, category)=>{
                    acc[category.id] = customers.filter({
                        "useCustomerData.useMemo[customerStats].categoryBreakdown": (c)=>c.categoryId === category.id
                    }["useCustomerData.useMemo[customerStats].categoryBreakdown"]).length;
                    return acc;
                }
            }["useCustomerData.useMemo[customerStats].categoryBreakdown"], {});
            return {
                totalCustomers,
                customersWithBirthdays,
                customersThisMonth,
                categoryBreakdown
            };
        }
    }["useCustomerData.useMemo[customerStats]"], [
        customers,
        categories,
        totalCount,
        customersWithBirthdaysOverride,
        customersThisMonthOverride
    ]);
    // Get category name helper
    const getCategoryName = (categoryId)=>{
        if (!categoryId) return 'Uncategorized';
        const category = validCategories.find((cat)=>cat.id === categoryId);
        return category?.name || 'Unknown Category';
    };
    return {
        validCategories,
        filteredCustomers,
        customerStats,
        getCategoryName
    };
};
_s(useCustomerData, "dpM5lcsYzIKAeKhd6IZwZh/dqRI=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$dc92fc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:dc92fc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6af24c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:6af24c [app-client] (ecmascript) <text/javascript>");
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
                const salesData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$dc92fc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getSalesAction"])(currentBusiness.id, sortOrder, pageSize);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$6af24c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteSaleAction"])(id, currentBusiness.id);
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
]);

//# sourceMappingURL=src_hooks_4ea7dfa0._.js.map