(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/hooks/useActivityLogger.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/hooks/useActivityLogger.ts'\n\nExpected a semicolon");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/app/actions/data:4ba2de [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCustomersAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40f8d9f2f555d9760b7559497b4da6e7b46c8bc0bc":"getCustomersAction"},"src/app/actions/customers.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40f8d9f2f555d9760b7559497b4da6e7b46c8bc0bc", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCustomersAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3VzdG9tZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2RiJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lclN0YXRzQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBicmFuY2hJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRPZk1vbnRoID0gbmV3IERhdGUodGhpc01vbnRoLmdldEZ1bGxZZWFyKCksIHRoaXNNb250aC5nZXRNb250aCgpLCAxKTtcclxuXHJcbiAgICAgICAgLy8gMS4gQ291bnQgY3VzdG9tZXJzIGNyZWF0ZWQgdGhpcyBtb250aFxyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aENvdW50ID0gYXdhaXQgZGIuY3VzdG9tZXIuY291bnQoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgd2UgdXNlIGFnZW5jeUlkIGZvciB1c2VySWQgaWYgdGhleSBhcmUgYW4gb3duZXIsIG9yIGl0J3MgY29ubmVjdGVkIHNvbWVob3dcclxuICAgICAgICAgICAgICAgIC8vIEZvciBub3csIGZvY3VzaW5nIG9uIGJyYW5jaElkIGFzIHRoYXQncyBub3JtYWxseSB0aGUgdGVuYW50IGlzb2xhdGlvbiBpbiB0aGUgc2NoZW1hXHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogYnJhbmNoSWQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBndGU6IHN0YXJ0T2ZNb250aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDIuIENvdW50IGN1c3RvbWVycyB3aXRoIHVwY29taW5nIGJhY2tncm91bmRzIChmb3Igbm93IGp1c3QgY291bnQgdGhvc2Ugd2hvIGhhdmUgYSBiaXJ0aGRheSBzZXQpXHJcbiAgICAgICAgY29uc3Qgd2l0aEJpcnRoZGF5cyA9IGF3YWl0IGRiLmN1c3RvbWVyLmNvdW50KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgIGJpcnRoZGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90OiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgd2l0aEJpcnRoZGF5cyxcclxuICAgICAgICAgICAgICAgIHRoaXNNb250aDogdGhpc01vbnRoQ291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXIgc3RhdHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWVyZ2VDdXN0b21lcnNBY3Rpb24ocHJpbWFyeUN1c3RvbWVySWQ6IHN0cmluZywgZHVwbGljYXRlSWRzOiBzdHJpbmdbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXByaW1hcnlDdXN0b21lcklkIHx8IGR1cGxpY2F0ZUlkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBzZWxlY3Rpb24nIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2UgYSB0cmFuc2FjdGlvbiB0byBlbnN1cmUgYWxsIG9wZXJhdGlvbnMgc3VjY2VlZCBvciBmYWlsIHRvZ2V0aGVyXHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIFVwZGF0ZSBzYWxlcyB0byBwb2ludCB0byBwcmltYXJ5IGN1c3RvbWVyXHJcbiAgICAgICAgICAgIC8vIEluIFByaXNtYSwgYXNzdW1pbmcgcmVsYXRpb24gaXMgdGhyb3VnaCBjdXN0b21lcklkXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LnNhbGUudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVySWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW46IGR1cGxpY2F0ZUlkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJJZDogcHJpbWFyeUN1c3RvbWVySWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBOb3RlOiBUaGUgb3JpZ2luYWwgY29kZSBhbHNvIHVwZGF0ZWQgbWVzc2FnZXMuIFxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgTWVzc2FnZSBtb2RlbCBjb25uZWN0ZWQgdG8gY3VzdG9tZXJzLCBhZGQgaXQgaGVyZS5cclxuICAgICAgICAgICAgLy8gYXdhaXQgdHgubWVzc2FnZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgLy8gICAgIHdoZXJlOiB7IGN1c3RvbWVySWQ6IHsgaW46IGR1cGxpY2F0ZUlkcyB9IH0sXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhOiB7IGN1c3RvbWVySWQ6IHByaW1hcnlDdXN0b21lcklkIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAzLiBEZWxldGUgZHVwbGljYXRlIGN1c3RvbWVyc1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5jdXN0b21lci5kZWxldGVNYW55KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW46IGR1cGxpY2F0ZUlkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJldmFsaWRhdGUgY3VzdG9tZXJzIGxpc3RcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtZXJnaW5nIGN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gbWVyZ2UgY3VzdG9tZXJzJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY3VzdG9tZXJzID0gYXdhaXQgZGIuY3VzdG9tZXIuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IGZ1bGxOYW1lOiAnYXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgZGIuY3VzdG9tZXIuY291bnQoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE1hcCBQcmlzbWEgQ3VzdG9tZXIgbW9kZWwgdG8gdGhlIHNoYXBlIGV4cGVjdGVkIGJ5IHVzZUN1c3RvbWVycyBob29rXHJcbiAgICAgICAgY29uc3QgbWFwcGVkQ3VzdG9tZXJzID0gY3VzdG9tZXJzLm1hcCgoYzogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogYy5pZCxcclxuICAgICAgICAgICAgZnVsbE5hbWU6IGMuZnVsbE5hbWUsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBjLnBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICBlbWFpbDogYy5lbWFpbCxcclxuICAgICAgICAgICAgYmlydGhkYXk6IGMuYmlydGhkYXkgPyBjLmJpcnRoZGF5LnRvSVNPU3RyaW5nKCkgOiBudWxsLFxyXG4gICAgICAgICAgICBnZW5kZXI6IGMuZ2VuZGVyLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogYy5sb2NhdGlvbixcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogYy5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICBub3RlczogYy5ub3RlcyxcclxuICAgICAgICAgICAgdGFnczogYy50YWdzIHx8IFtdLFxyXG4gICAgICAgICAgICBzb2NpYWxNZWRpYTogYy5zb2NpYWxNZWRpYSB8fCBudWxsLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYy51cGRhdGVkQXQudG9JU09TdHJpbmcoKVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBjdXN0b21lcnM6IG1hcHBlZEN1c3RvbWVycywgY291bnQgfSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDdXN0b21lckFjdGlvbihicmFuY2hJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG5ld0N1c3RvbWVyID0gYXdhaXQgZGIuY3VzdG9tZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsIC8vIEFzc3VtaW5nIHVzZXIgd2hvIGNyZWF0ZWQgaXRcclxuICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiBkYXRhLmZ1bGxOYW1lLFxyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGRhdGEucGhvbmVOdW1iZXIgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheTogZGF0YS5iaXJ0aGRheSA/IG5ldyBEYXRlKGRhdGEuYmlydGhkYXkpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogZGF0YS5nZW5kZXIgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBzb2NpYWxNZWRpYTogZGF0YS5zb2NpYWxNZWRpYSB8fCBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5ld0N1c3RvbWVyIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJBY3Rpb24oY3VzdG9tZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgaWYgKGRhdGEuZnVsbE5hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5mdWxsTmFtZSA9IGRhdGEuZnVsbE5hbWU7XHJcbiAgICAgICAgaWYgKGRhdGEucGhvbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5waG9uZU51bWJlciA9IGRhdGEucGhvbmVOdW1iZXI7XHJcbiAgICAgICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5lbWFpbCA9IGRhdGEuZW1haWw7XHJcbiAgICAgICAgaWYgKGRhdGEuYmlydGhkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5iaXJ0aGRheSA9IGRhdGEuYmlydGhkYXkgPyBuZXcgRGF0ZShkYXRhLmJpcnRoZGF5KSA6IG51bGw7XHJcbiAgICAgICAgaWYgKGRhdGEuZ2VuZGVyICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuZ2VuZGVyID0gZGF0YS5nZW5kZXI7XHJcbiAgICAgICAgaWYgKGRhdGEubG9jYXRpb24gIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5sb2NhdGlvbiA9IGRhdGEubG9jYXRpb247XHJcbiAgICAgICAgaWYgKGRhdGEuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmNhdGVnb3J5SWQgPSBkYXRhLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgaWYgKGRhdGEubm90ZXMgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5ub3RlcyA9IGRhdGEubm90ZXM7XHJcbiAgICAgICAgaWYgKGRhdGEudGFncyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnRhZ3MgPSBkYXRhLnRhZ3M7XHJcbiAgICAgICAgaWYgKGRhdGEuc29jaWFsTWVkaWEgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5zb2NpYWxNZWRpYSA9IGRhdGEuc29jaWFsTWVkaWE7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDdXN0b21lciA9IGF3YWl0IGRiLmN1c3RvbWVyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXN0b21lcklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHVwZGF0ZURhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVwZGF0ZWRDdXN0b21lciB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGN1c3RvbWVyOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUN1c3RvbWVyQWN0aW9uKGN1c3RvbWVySWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYi5jdXN0b21lci5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogY3VzdG9tZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jdXN0b21lcnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJDYXRlZ29yaWVzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmN1c3RvbWVyQ2F0ZWdvcnkuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBjLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBjLm5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVmYXVsdDogYy5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYy5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBjLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBmb3JtYXR0ZWRDYXRlZ29yaWVzIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXIgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDdXN0b21lckNhdGVnb3J5QWN0aW9uKGJyYW5jaElkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBhd2FpdCBkYi5jdXN0b21lckNhdGVnb3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5ld0NhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJDYXRlZ29yeUFjdGlvbihjYXRlZ29yeUlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcnkgPSBhd2FpdCBkYi5jdXN0b21lckNhdGVnb3J5LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjYXRlZ29yeUlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgbmFtZTogbmFtZS50cmltKCkgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvY3VzdG9tZXJzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXBkYXRlZENhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ3VzdG9tZXJDYXRlZ29yeUFjdGlvbihjYXRlZ29yeUlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuY3VzdG9tZXJDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogY2F0ZWdvcnlJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jdXN0b21lcnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBNEZzQiwrTEFBQSJ9
}),
"[project]/src/app/actions/data:464e4e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCustomerAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"70314a3bbe70ea6a18afed28d07df50ff92f9adf66":"createCustomerAction"},"src/app/actions/customers.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("70314a3bbe70ea6a18afed28d07df50ff92f9adf66", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCustomerAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3VzdG9tZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2RiJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lclN0YXRzQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBicmFuY2hJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRPZk1vbnRoID0gbmV3IERhdGUodGhpc01vbnRoLmdldEZ1bGxZZWFyKCksIHRoaXNNb250aC5nZXRNb250aCgpLCAxKTtcclxuXHJcbiAgICAgICAgLy8gMS4gQ291bnQgY3VzdG9tZXJzIGNyZWF0ZWQgdGhpcyBtb250aFxyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aENvdW50ID0gYXdhaXQgZGIuY3VzdG9tZXIuY291bnQoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgd2UgdXNlIGFnZW5jeUlkIGZvciB1c2VySWQgaWYgdGhleSBhcmUgYW4gb3duZXIsIG9yIGl0J3MgY29ubmVjdGVkIHNvbWVob3dcclxuICAgICAgICAgICAgICAgIC8vIEZvciBub3csIGZvY3VzaW5nIG9uIGJyYW5jaElkIGFzIHRoYXQncyBub3JtYWxseSB0aGUgdGVuYW50IGlzb2xhdGlvbiBpbiB0aGUgc2NoZW1hXHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogYnJhbmNoSWQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBndGU6IHN0YXJ0T2ZNb250aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDIuIENvdW50IGN1c3RvbWVycyB3aXRoIHVwY29taW5nIGJhY2tncm91bmRzIChmb3Igbm93IGp1c3QgY291bnQgdGhvc2Ugd2hvIGhhdmUgYSBiaXJ0aGRheSBzZXQpXHJcbiAgICAgICAgY29uc3Qgd2l0aEJpcnRoZGF5cyA9IGF3YWl0IGRiLmN1c3RvbWVyLmNvdW50KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgIGJpcnRoZGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90OiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgd2l0aEJpcnRoZGF5cyxcclxuICAgICAgICAgICAgICAgIHRoaXNNb250aDogdGhpc01vbnRoQ291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXIgc3RhdHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWVyZ2VDdXN0b21lcnNBY3Rpb24ocHJpbWFyeUN1c3RvbWVySWQ6IHN0cmluZywgZHVwbGljYXRlSWRzOiBzdHJpbmdbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXByaW1hcnlDdXN0b21lcklkIHx8IGR1cGxpY2F0ZUlkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBzZWxlY3Rpb24nIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2UgYSB0cmFuc2FjdGlvbiB0byBlbnN1cmUgYWxsIG9wZXJhdGlvbnMgc3VjY2VlZCBvciBmYWlsIHRvZ2V0aGVyXHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIFVwZGF0ZSBzYWxlcyB0byBwb2ludCB0byBwcmltYXJ5IGN1c3RvbWVyXHJcbiAgICAgICAgICAgIC8vIEluIFByaXNtYSwgYXNzdW1pbmcgcmVsYXRpb24gaXMgdGhyb3VnaCBjdXN0b21lcklkXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LnNhbGUudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVySWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW46IGR1cGxpY2F0ZUlkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJJZDogcHJpbWFyeUN1c3RvbWVySWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBOb3RlOiBUaGUgb3JpZ2luYWwgY29kZSBhbHNvIHVwZGF0ZWQgbWVzc2FnZXMuIFxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgTWVzc2FnZSBtb2RlbCBjb25uZWN0ZWQgdG8gY3VzdG9tZXJzLCBhZGQgaXQgaGVyZS5cclxuICAgICAgICAgICAgLy8gYXdhaXQgdHgubWVzc2FnZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgLy8gICAgIHdoZXJlOiB7IGN1c3RvbWVySWQ6IHsgaW46IGR1cGxpY2F0ZUlkcyB9IH0sXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhOiB7IGN1c3RvbWVySWQ6IHByaW1hcnlDdXN0b21lcklkIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAzLiBEZWxldGUgZHVwbGljYXRlIGN1c3RvbWVyc1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5jdXN0b21lci5kZWxldGVNYW55KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW46IGR1cGxpY2F0ZUlkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJldmFsaWRhdGUgY3VzdG9tZXJzIGxpc3RcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtZXJnaW5nIGN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gbWVyZ2UgY3VzdG9tZXJzJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY3VzdG9tZXJzID0gYXdhaXQgZGIuY3VzdG9tZXIuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IGZ1bGxOYW1lOiAnYXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgZGIuY3VzdG9tZXIuY291bnQoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE1hcCBQcmlzbWEgQ3VzdG9tZXIgbW9kZWwgdG8gdGhlIHNoYXBlIGV4cGVjdGVkIGJ5IHVzZUN1c3RvbWVycyBob29rXHJcbiAgICAgICAgY29uc3QgbWFwcGVkQ3VzdG9tZXJzID0gY3VzdG9tZXJzLm1hcCgoYzogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogYy5pZCxcclxuICAgICAgICAgICAgZnVsbE5hbWU6IGMuZnVsbE5hbWUsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBjLnBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICBlbWFpbDogYy5lbWFpbCxcclxuICAgICAgICAgICAgYmlydGhkYXk6IGMuYmlydGhkYXkgPyBjLmJpcnRoZGF5LnRvSVNPU3RyaW5nKCkgOiBudWxsLFxyXG4gICAgICAgICAgICBnZW5kZXI6IGMuZ2VuZGVyLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogYy5sb2NhdGlvbixcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogYy5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICBub3RlczogYy5ub3RlcyxcclxuICAgICAgICAgICAgdGFnczogYy50YWdzIHx8IFtdLFxyXG4gICAgICAgICAgICBzb2NpYWxNZWRpYTogYy5zb2NpYWxNZWRpYSB8fCBudWxsLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYy51cGRhdGVkQXQudG9JU09TdHJpbmcoKVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBjdXN0b21lcnM6IG1hcHBlZEN1c3RvbWVycywgY291bnQgfSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDdXN0b21lckFjdGlvbihicmFuY2hJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG5ld0N1c3RvbWVyID0gYXdhaXQgZGIuY3VzdG9tZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsIC8vIEFzc3VtaW5nIHVzZXIgd2hvIGNyZWF0ZWQgaXRcclxuICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiBkYXRhLmZ1bGxOYW1lLFxyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGRhdGEucGhvbmVOdW1iZXIgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheTogZGF0YS5iaXJ0aGRheSA/IG5ldyBEYXRlKGRhdGEuYmlydGhkYXkpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogZGF0YS5nZW5kZXIgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBzb2NpYWxNZWRpYTogZGF0YS5zb2NpYWxNZWRpYSB8fCBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5ld0N1c3RvbWVyIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJBY3Rpb24oY3VzdG9tZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgaWYgKGRhdGEuZnVsbE5hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5mdWxsTmFtZSA9IGRhdGEuZnVsbE5hbWU7XHJcbiAgICAgICAgaWYgKGRhdGEucGhvbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5waG9uZU51bWJlciA9IGRhdGEucGhvbmVOdW1iZXI7XHJcbiAgICAgICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5lbWFpbCA9IGRhdGEuZW1haWw7XHJcbiAgICAgICAgaWYgKGRhdGEuYmlydGhkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5iaXJ0aGRheSA9IGRhdGEuYmlydGhkYXkgPyBuZXcgRGF0ZShkYXRhLmJpcnRoZGF5KSA6IG51bGw7XHJcbiAgICAgICAgaWYgKGRhdGEuZ2VuZGVyICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuZ2VuZGVyID0gZGF0YS5nZW5kZXI7XHJcbiAgICAgICAgaWYgKGRhdGEubG9jYXRpb24gIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5sb2NhdGlvbiA9IGRhdGEubG9jYXRpb247XHJcbiAgICAgICAgaWYgKGRhdGEuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmNhdGVnb3J5SWQgPSBkYXRhLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgaWYgKGRhdGEubm90ZXMgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5ub3RlcyA9IGRhdGEubm90ZXM7XHJcbiAgICAgICAgaWYgKGRhdGEudGFncyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnRhZ3MgPSBkYXRhLnRhZ3M7XHJcbiAgICAgICAgaWYgKGRhdGEuc29jaWFsTWVkaWEgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5zb2NpYWxNZWRpYSA9IGRhdGEuc29jaWFsTWVkaWE7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDdXN0b21lciA9IGF3YWl0IGRiLmN1c3RvbWVyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXN0b21lcklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHVwZGF0ZURhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVwZGF0ZWRDdXN0b21lciB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGN1c3RvbWVyOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUN1c3RvbWVyQWN0aW9uKGN1c3RvbWVySWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYi5jdXN0b21lci5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogY3VzdG9tZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jdXN0b21lcnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJDYXRlZ29yaWVzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmN1c3RvbWVyQ2F0ZWdvcnkuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBjLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBjLm5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVmYXVsdDogYy5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYy5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBjLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBmb3JtYXR0ZWRDYXRlZ29yaWVzIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXIgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDdXN0b21lckNhdGVnb3J5QWN0aW9uKGJyYW5jaElkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBhd2FpdCBkYi5jdXN0b21lckNhdGVnb3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5ld0NhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJDYXRlZ29yeUFjdGlvbihjYXRlZ29yeUlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcnkgPSBhd2FpdCBkYi5jdXN0b21lckNhdGVnb3J5LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjYXRlZ29yeUlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgbmFtZTogbmFtZS50cmltKCkgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvY3VzdG9tZXJzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXBkYXRlZENhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ3VzdG9tZXJDYXRlZ29yeUFjdGlvbihjYXRlZ29yeUlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuY3VzdG9tZXJDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogY2F0ZWdvcnlJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jdXN0b21lcnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVNBK0hzQixpTUFBQSJ9
}),
"[project]/src/app/actions/data:fa2d0d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateCustomerAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60b95fb64fc1e58da975d039fb349ba34b92a7c4a3":"updateCustomerAction"},"src/app/actions/customers.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60b95fb64fc1e58da975d039fb349ba34b92a7c4a3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateCustomerAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3VzdG9tZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2RiJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lclN0YXRzQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBicmFuY2hJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRPZk1vbnRoID0gbmV3IERhdGUodGhpc01vbnRoLmdldEZ1bGxZZWFyKCksIHRoaXNNb250aC5nZXRNb250aCgpLCAxKTtcclxuXHJcbiAgICAgICAgLy8gMS4gQ291bnQgY3VzdG9tZXJzIGNyZWF0ZWQgdGhpcyBtb250aFxyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aENvdW50ID0gYXdhaXQgZGIuY3VzdG9tZXIuY291bnQoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgd2UgdXNlIGFnZW5jeUlkIGZvciB1c2VySWQgaWYgdGhleSBhcmUgYW4gb3duZXIsIG9yIGl0J3MgY29ubmVjdGVkIHNvbWVob3dcclxuICAgICAgICAgICAgICAgIC8vIEZvciBub3csIGZvY3VzaW5nIG9uIGJyYW5jaElkIGFzIHRoYXQncyBub3JtYWxseSB0aGUgdGVuYW50IGlzb2xhdGlvbiBpbiB0aGUgc2NoZW1hXHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogYnJhbmNoSWQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBndGU6IHN0YXJ0T2ZNb250aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDIuIENvdW50IGN1c3RvbWVycyB3aXRoIHVwY29taW5nIGJhY2tncm91bmRzIChmb3Igbm93IGp1c3QgY291bnQgdGhvc2Ugd2hvIGhhdmUgYSBiaXJ0aGRheSBzZXQpXHJcbiAgICAgICAgY29uc3Qgd2l0aEJpcnRoZGF5cyA9IGF3YWl0IGRiLmN1c3RvbWVyLmNvdW50KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgIGJpcnRoZGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90OiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgd2l0aEJpcnRoZGF5cyxcclxuICAgICAgICAgICAgICAgIHRoaXNNb250aDogdGhpc01vbnRoQ291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXIgc3RhdHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWVyZ2VDdXN0b21lcnNBY3Rpb24ocHJpbWFyeUN1c3RvbWVySWQ6IHN0cmluZywgZHVwbGljYXRlSWRzOiBzdHJpbmdbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXByaW1hcnlDdXN0b21lcklkIHx8IGR1cGxpY2F0ZUlkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBzZWxlY3Rpb24nIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2UgYSB0cmFuc2FjdGlvbiB0byBlbnN1cmUgYWxsIG9wZXJhdGlvbnMgc3VjY2VlZCBvciBmYWlsIHRvZ2V0aGVyXHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIFVwZGF0ZSBzYWxlcyB0byBwb2ludCB0byBwcmltYXJ5IGN1c3RvbWVyXHJcbiAgICAgICAgICAgIC8vIEluIFByaXNtYSwgYXNzdW1pbmcgcmVsYXRpb24gaXMgdGhyb3VnaCBjdXN0b21lcklkXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LnNhbGUudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVySWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW46IGR1cGxpY2F0ZUlkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJJZDogcHJpbWFyeUN1c3RvbWVySWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBOb3RlOiBUaGUgb3JpZ2luYWwgY29kZSBhbHNvIHVwZGF0ZWQgbWVzc2FnZXMuIFxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgTWVzc2FnZSBtb2RlbCBjb25uZWN0ZWQgdG8gY3VzdG9tZXJzLCBhZGQgaXQgaGVyZS5cclxuICAgICAgICAgICAgLy8gYXdhaXQgdHgubWVzc2FnZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgLy8gICAgIHdoZXJlOiB7IGN1c3RvbWVySWQ6IHsgaW46IGR1cGxpY2F0ZUlkcyB9IH0sXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhOiB7IGN1c3RvbWVySWQ6IHByaW1hcnlDdXN0b21lcklkIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAzLiBEZWxldGUgZHVwbGljYXRlIGN1c3RvbWVyc1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5jdXN0b21lci5kZWxldGVNYW55KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW46IGR1cGxpY2F0ZUlkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJldmFsaWRhdGUgY3VzdG9tZXJzIGxpc3RcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtZXJnaW5nIGN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gbWVyZ2UgY3VzdG9tZXJzJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY3VzdG9tZXJzID0gYXdhaXQgZGIuY3VzdG9tZXIuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IGZ1bGxOYW1lOiAnYXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgZGIuY3VzdG9tZXIuY291bnQoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE1hcCBQcmlzbWEgQ3VzdG9tZXIgbW9kZWwgdG8gdGhlIHNoYXBlIGV4cGVjdGVkIGJ5IHVzZUN1c3RvbWVycyBob29rXHJcbiAgICAgICAgY29uc3QgbWFwcGVkQ3VzdG9tZXJzID0gY3VzdG9tZXJzLm1hcCgoYzogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogYy5pZCxcclxuICAgICAgICAgICAgZnVsbE5hbWU6IGMuZnVsbE5hbWUsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBjLnBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICBlbWFpbDogYy5lbWFpbCxcclxuICAgICAgICAgICAgYmlydGhkYXk6IGMuYmlydGhkYXkgPyBjLmJpcnRoZGF5LnRvSVNPU3RyaW5nKCkgOiBudWxsLFxyXG4gICAgICAgICAgICBnZW5kZXI6IGMuZ2VuZGVyLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogYy5sb2NhdGlvbixcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogYy5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICBub3RlczogYy5ub3RlcyxcclxuICAgICAgICAgICAgdGFnczogYy50YWdzIHx8IFtdLFxyXG4gICAgICAgICAgICBzb2NpYWxNZWRpYTogYy5zb2NpYWxNZWRpYSB8fCBudWxsLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYy51cGRhdGVkQXQudG9JU09TdHJpbmcoKVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBjdXN0b21lcnM6IG1hcHBlZEN1c3RvbWVycywgY291bnQgfSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDdXN0b21lckFjdGlvbihicmFuY2hJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG5ld0N1c3RvbWVyID0gYXdhaXQgZGIuY3VzdG9tZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsIC8vIEFzc3VtaW5nIHVzZXIgd2hvIGNyZWF0ZWQgaXRcclxuICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiBkYXRhLmZ1bGxOYW1lLFxyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGRhdGEucGhvbmVOdW1iZXIgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheTogZGF0YS5iaXJ0aGRheSA/IG5ldyBEYXRlKGRhdGEuYmlydGhkYXkpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogZGF0YS5nZW5kZXIgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBzb2NpYWxNZWRpYTogZGF0YS5zb2NpYWxNZWRpYSB8fCBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5ld0N1c3RvbWVyIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJBY3Rpb24oY3VzdG9tZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgaWYgKGRhdGEuZnVsbE5hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5mdWxsTmFtZSA9IGRhdGEuZnVsbE5hbWU7XHJcbiAgICAgICAgaWYgKGRhdGEucGhvbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5waG9uZU51bWJlciA9IGRhdGEucGhvbmVOdW1iZXI7XHJcbiAgICAgICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5lbWFpbCA9IGRhdGEuZW1haWw7XHJcbiAgICAgICAgaWYgKGRhdGEuYmlydGhkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5iaXJ0aGRheSA9IGRhdGEuYmlydGhkYXkgPyBuZXcgRGF0ZShkYXRhLmJpcnRoZGF5KSA6IG51bGw7XHJcbiAgICAgICAgaWYgKGRhdGEuZ2VuZGVyICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuZ2VuZGVyID0gZGF0YS5nZW5kZXI7XHJcbiAgICAgICAgaWYgKGRhdGEubG9jYXRpb24gIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5sb2NhdGlvbiA9IGRhdGEubG9jYXRpb247XHJcbiAgICAgICAgaWYgKGRhdGEuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmNhdGVnb3J5SWQgPSBkYXRhLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgaWYgKGRhdGEubm90ZXMgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5ub3RlcyA9IGRhdGEubm90ZXM7XHJcbiAgICAgICAgaWYgKGRhdGEudGFncyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnRhZ3MgPSBkYXRhLnRhZ3M7XHJcbiAgICAgICAgaWYgKGRhdGEuc29jaWFsTWVkaWEgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5zb2NpYWxNZWRpYSA9IGRhdGEuc29jaWFsTWVkaWE7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDdXN0b21lciA9IGF3YWl0IGRiLmN1c3RvbWVyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXN0b21lcklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHVwZGF0ZURhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVwZGF0ZWRDdXN0b21lciB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGN1c3RvbWVyOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUN1c3RvbWVyQWN0aW9uKGN1c3RvbWVySWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYi5jdXN0b21lci5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogY3VzdG9tZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jdXN0b21lcnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJDYXRlZ29yaWVzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmN1c3RvbWVyQ2F0ZWdvcnkuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBjLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBjLm5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVmYXVsdDogYy5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYy5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBjLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBmb3JtYXR0ZWRDYXRlZ29yaWVzIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXIgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDdXN0b21lckNhdGVnb3J5QWN0aW9uKGJyYW5jaElkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBhd2FpdCBkYi5jdXN0b21lckNhdGVnb3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5ld0NhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJDYXRlZ29yeUFjdGlvbihjYXRlZ29yeUlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcnkgPSBhd2FpdCBkYi5jdXN0b21lckNhdGVnb3J5LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjYXRlZ29yeUlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgbmFtZTogbmFtZS50cmltKCkgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvY3VzdG9tZXJzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXBkYXRlZENhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ3VzdG9tZXJDYXRlZ29yeUFjdGlvbihjYXRlZ29yeUlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuY3VzdG9tZXJDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogY2F0ZWdvcnlJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jdXN0b21lcnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVNBeUpzQixpTUFBQSJ9
}),
"[project]/src/app/actions/data:213b58 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCustomerAction",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40d2f67e571ebda4bb73ccbe35cb363220b139330d":"deleteCustomerAction"},"src/app/actions/customers.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d2f67e571ebda4bb73ccbe35cb363220b139330d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCustomerAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY3VzdG9tZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2RiJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXN0b21lclN0YXRzQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBicmFuY2hJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRPZk1vbnRoID0gbmV3IERhdGUodGhpc01vbnRoLmdldEZ1bGxZZWFyKCksIHRoaXNNb250aC5nZXRNb250aCgpLCAxKTtcclxuXHJcbiAgICAgICAgLy8gMS4gQ291bnQgY3VzdG9tZXJzIGNyZWF0ZWQgdGhpcyBtb250aFxyXG4gICAgICAgIGNvbnN0IHRoaXNNb250aENvdW50ID0gYXdhaXQgZGIuY3VzdG9tZXIuY291bnQoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgLy8gQXNzdW1pbmcgd2UgdXNlIGFnZW5jeUlkIGZvciB1c2VySWQgaWYgdGhleSBhcmUgYW4gb3duZXIsIG9yIGl0J3MgY29ubmVjdGVkIHNvbWVob3dcclxuICAgICAgICAgICAgICAgIC8vIEZvciBub3csIGZvY3VzaW5nIG9uIGJyYW5jaElkIGFzIHRoYXQncyBub3JtYWxseSB0aGUgdGVuYW50IGlzb2xhdGlvbiBpbiB0aGUgc2NoZW1hXHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogYnJhbmNoSWQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBndGU6IHN0YXJ0T2ZNb250aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDIuIENvdW50IGN1c3RvbWVycyB3aXRoIHVwY29taW5nIGJhY2tncm91bmRzIChmb3Igbm93IGp1c3QgY291bnQgdGhvc2Ugd2hvIGhhdmUgYSBiaXJ0aGRheSBzZXQpXHJcbiAgICAgICAgY29uc3Qgd2l0aEJpcnRoZGF5cyA9IGF3YWl0IGRiLmN1c3RvbWVyLmNvdW50KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgIGJpcnRoZGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90OiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgd2l0aEJpcnRoZGF5cyxcclxuICAgICAgICAgICAgICAgIHRoaXNNb250aDogdGhpc01vbnRoQ291bnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXIgc3RhdHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWVyZ2VDdXN0b21lcnNBY3Rpb24ocHJpbWFyeUN1c3RvbWVySWQ6IHN0cmluZywgZHVwbGljYXRlSWRzOiBzdHJpbmdbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXByaW1hcnlDdXN0b21lcklkIHx8IGR1cGxpY2F0ZUlkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBzZWxlY3Rpb24nIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2UgYSB0cmFuc2FjdGlvbiB0byBlbnN1cmUgYWxsIG9wZXJhdGlvbnMgc3VjY2VlZCBvciBmYWlsIHRvZ2V0aGVyXHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIDEuIFVwZGF0ZSBzYWxlcyB0byBwb2ludCB0byBwcmltYXJ5IGN1c3RvbWVyXHJcbiAgICAgICAgICAgIC8vIEluIFByaXNtYSwgYXNzdW1pbmcgcmVsYXRpb24gaXMgdGhyb3VnaCBjdXN0b21lcklkXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LnNhbGUudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVySWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW46IGR1cGxpY2F0ZUlkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJJZDogcHJpbWFyeUN1c3RvbWVySWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBOb3RlOiBUaGUgb3JpZ2luYWwgY29kZSBhbHNvIHVwZGF0ZWQgbWVzc2FnZXMuIFxyXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgTWVzc2FnZSBtb2RlbCBjb25uZWN0ZWQgdG8gY3VzdG9tZXJzLCBhZGQgaXQgaGVyZS5cclxuICAgICAgICAgICAgLy8gYXdhaXQgdHgubWVzc2FnZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgLy8gICAgIHdoZXJlOiB7IGN1c3RvbWVySWQ6IHsgaW46IGR1cGxpY2F0ZUlkcyB9IH0sXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhOiB7IGN1c3RvbWVySWQ6IHByaW1hcnlDdXN0b21lcklkIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAzLiBEZWxldGUgZHVwbGljYXRlIGN1c3RvbWVyc1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5jdXN0b21lci5kZWxldGVNYW55KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW46IGR1cGxpY2F0ZUlkc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJldmFsaWRhdGUgY3VzdG9tZXJzIGxpc3RcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtZXJnaW5nIGN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gbWVyZ2UgY3VzdG9tZXJzJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY3VzdG9tZXJzID0gYXdhaXQgZGIuY3VzdG9tZXIuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IGZ1bGxOYW1lOiAnYXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgZGIuY3VzdG9tZXIuY291bnQoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIE1hcCBQcmlzbWEgQ3VzdG9tZXIgbW9kZWwgdG8gdGhlIHNoYXBlIGV4cGVjdGVkIGJ5IHVzZUN1c3RvbWVycyBob29rXHJcbiAgICAgICAgY29uc3QgbWFwcGVkQ3VzdG9tZXJzID0gY3VzdG9tZXJzLm1hcCgoYzogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICBpZDogYy5pZCxcclxuICAgICAgICAgICAgZnVsbE5hbWU6IGMuZnVsbE5hbWUsXHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBjLnBob25lTnVtYmVyLFxyXG4gICAgICAgICAgICBlbWFpbDogYy5lbWFpbCxcclxuICAgICAgICAgICAgYmlydGhkYXk6IGMuYmlydGhkYXkgPyBjLmJpcnRoZGF5LnRvSVNPU3RyaW5nKCkgOiBudWxsLFxyXG4gICAgICAgICAgICBnZW5kZXI6IGMuZ2VuZGVyLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogYy5sb2NhdGlvbixcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogYy5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICBub3RlczogYy5ub3RlcyxcclxuICAgICAgICAgICAgdGFnczogYy50YWdzIHx8IFtdLFxyXG4gICAgICAgICAgICBzb2NpYWxNZWRpYTogYy5zb2NpYWxNZWRpYSB8fCBudWxsLFxyXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogYy51cGRhdGVkQXQudG9JU09TdHJpbmcoKVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogeyBjdXN0b21lcnM6IG1hcHBlZEN1c3RvbWVycywgY291bnQgfSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGN1c3RvbWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDdXN0b21lckFjdGlvbihicmFuY2hJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG5ld0N1c3RvbWVyID0gYXdhaXQgZGIuY3VzdG9tZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsIC8vIEFzc3VtaW5nIHVzZXIgd2hvIGNyZWF0ZWQgaXRcclxuICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiBkYXRhLmZ1bGxOYW1lLFxyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGRhdGEucGhvbmVOdW1iZXIgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBiaXJ0aGRheTogZGF0YS5iaXJ0aGRheSA/IG5ldyBEYXRlKGRhdGEuYmlydGhkYXkpIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGdlbmRlcjogZGF0YS5nZW5kZXIgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBzb2NpYWxNZWRpYTogZGF0YS5zb2NpYWxNZWRpYSB8fCBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5ld0N1c3RvbWVyIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJBY3Rpb24oY3VzdG9tZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgaWYgKGRhdGEuZnVsbE5hbWUgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5mdWxsTmFtZSA9IGRhdGEuZnVsbE5hbWU7XHJcbiAgICAgICAgaWYgKGRhdGEucGhvbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5waG9uZU51bWJlciA9IGRhdGEucGhvbmVOdW1iZXI7XHJcbiAgICAgICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5lbWFpbCA9IGRhdGEuZW1haWw7XHJcbiAgICAgICAgaWYgKGRhdGEuYmlydGhkYXkgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5iaXJ0aGRheSA9IGRhdGEuYmlydGhkYXkgPyBuZXcgRGF0ZShkYXRhLmJpcnRoZGF5KSA6IG51bGw7XHJcbiAgICAgICAgaWYgKGRhdGEuZ2VuZGVyICE9PSB1bmRlZmluZWQpIHVwZGF0ZURhdGEuZ2VuZGVyID0gZGF0YS5nZW5kZXI7XHJcbiAgICAgICAgaWYgKGRhdGEubG9jYXRpb24gIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5sb2NhdGlvbiA9IGRhdGEubG9jYXRpb247XHJcbiAgICAgICAgaWYgKGRhdGEuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLmNhdGVnb3J5SWQgPSBkYXRhLmNhdGVnb3J5SWQ7XHJcbiAgICAgICAgaWYgKGRhdGEubm90ZXMgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5ub3RlcyA9IGRhdGEubm90ZXM7XHJcbiAgICAgICAgaWYgKGRhdGEudGFncyAhPT0gdW5kZWZpbmVkKSB1cGRhdGVEYXRhLnRhZ3MgPSBkYXRhLnRhZ3M7XHJcbiAgICAgICAgaWYgKGRhdGEuc29jaWFsTWVkaWEgIT09IHVuZGVmaW5lZCkgdXBkYXRlRGF0YS5zb2NpYWxNZWRpYSA9IGRhdGEuc29jaWFsTWVkaWE7XHJcblxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDdXN0b21lciA9IGF3YWl0IGRiLmN1c3RvbWVyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXN0b21lcklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHVwZGF0ZURhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVwZGF0ZWRDdXN0b21lciB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGN1c3RvbWVyOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUN1c3RvbWVyQWN0aW9uKGN1c3RvbWVySWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYi5jdXN0b21lci5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogY3VzdG9tZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jdXN0b21lcnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VzdG9tZXJDYXRlZ29yaWVzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmN1c3RvbWVyQ2F0ZWdvcnkuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IG5hbWU6ICdhc2MnIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBjLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBjLm5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVmYXVsdDogYy5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogYy5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgdXBkYXRlZEF0OiBjLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBmb3JtYXR0ZWRDYXRlZ29yaWVzIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY3VzdG9tZXIgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDdXN0b21lckNhdGVnb3J5QWN0aW9uKGJyYW5jaElkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBhd2FpdCBkYi5jdXN0b21lckNhdGVnb3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5ld0NhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJDYXRlZ29yeUFjdGlvbihjYXRlZ29yeUlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcnkgPSBhd2FpdCBkYi5jdXN0b21lckNhdGVnb3J5LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjYXRlZ29yeUlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgbmFtZTogbmFtZS50cmltKCkgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvY3VzdG9tZXJzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXBkYXRlZENhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ3VzdG9tZXJDYXRlZ29yeUFjdGlvbihjYXRlZ29yeUlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuY3VzdG9tZXJDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogY2F0ZWdvcnlJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9jdXN0b21lcnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgY3VzdG9tZXIgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVNBbUxzQixpTUFBQSJ9
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
"[project]/src/components/messages/MessageHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
const MessageHeader = ({ onNewMessage, onNewTemplate, onTopUp, onBulkMessage, smsCredits, canCreate = true })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "w-8 h-8 text-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageHeader.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Messages"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/MessageHeader.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mt-1",
                        children: "Send SMS to your customers"
                    }, void 0, false, {
                        fileName: "[project]/src/components/messages/MessageHeader.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/messages/MessageHeader.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: canCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onTopUp,
                            variant: "outline",
                            className: "flex items-center gap-2 border-green-500 text-green-700 hover:bg-green-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageHeader.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Top Up"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/MessageHeader.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onNewTemplate,
                            variant: "outline",
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageHeader.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "New Template"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/MessageHeader.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onBulkMessage,
                            variant: "outline",
                            className: "flex items-center gap-2 border-purple-500 text-purple-700 hover:bg-purple-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageHeader.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Bulk SMS"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/MessageHeader.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onNewMessage,
                            className: "flex items-center gap-2 bg-blue-600 hover:bg-blue-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageHeader.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "New Message"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/MessageHeader.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/messages/MessageHeader.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/messages/MessageHeader.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MessageHeader;
const __TURBOPACK__default__export__ = MessageHeader;
var _c;
__turbopack_context__.k.register(_c, "MessageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/messages/MessageStatsCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
;
;
const MessageStatsCards = ({ stats })=>{
    const isLowBalance = stats.creditsRemaining <= 50;
    const isCritical = stats.creditsRemaining <= 20;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-5 rounded-xl shadow-sm border-2 transition-all hover:shadow-lg ${isCritical ? 'bg-red-50 border-red-400' : isLowBalance ? 'bg-amber-50 border-amber-400' : 'bg-emerald-50 border-emerald-400'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-3 mb-2 ${isCritical ? 'text-red-700' : isLowBalance ? 'text-amber-700' : 'text-emerald-700'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Credit Bal."
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-3xl font-bold ${isCritical ? 'text-red-700' : isLowBalance ? 'text-amber-700' : 'text-emerald-700'}`,
                        children: stats.creditsRemaining.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-gray-600 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Total"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-gray-900",
                        children: stats.total.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-green-600 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Sent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-green-600",
                        children: stats.sent.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-amber-600 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Pending"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-amber-600",
                        children: stats.pending
                    }, void 0, false, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-red-600 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Failed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-red-600",
                        children: stats.failed
                    }, void 0, false, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-blue-600 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Credits Used"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl font-bold text-blue-600",
                        children: stats.totalCreditsUsed.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/messages/MessageStatsCards.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MessageStatsCards;
const __TURBOPACK__default__export__ = MessageStatsCards;
var _c;
__turbopack_context__.k.register(_c, "MessageStatsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/messages/MessageContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
;
;
;
;
const MessageContent = ({ messages, customers, searchTerm, setSearchTerm, statusFilter, setStatusFilter })=>{
    const getCustomer = (customerId)=>{
        if (!customerId) return null;
        return customers.find((c)=>c.id === customerId);
    };
    const getStatusBadge = (status)=>{
        const styles = {
            pending: 'bg-amber-100 text-amber-800',
            sent: 'bg-green-100 text-green-800',
            delivered: 'bg-blue-100 text-blue-800',
            failed: 'bg-red-100 text-red-800'
        };
        return styles[status] || 'bg-gray-100 text-gray-800';
    };
    // Filter messages by search and status
    const filteredMessages = messages.filter((msg)=>{
        const customer = getCustomer(msg.customerId);
        const name = customer ? customer.full_name || customer.fullName || customer.name : '';
        const phone = msg.phoneNumber;
        const content = msg.content;
        const matchesSearch = searchTerm ? name.toLowerCase().includes(searchTerm.toLowerCase()) || phone.toLowerCase().includes(searchTerm.toLowerCase()) || content.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        const matchesStatus = statusFilter === 'all' || msg.status === statusFilter;
        return matchesSearch && matchesStatus;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageContent.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "text",
                                placeholder: "Search messages...",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value),
                                className: "pl-10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageContent.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: statusFilter,
                        onValueChange: setStatusFilter,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-full md:w-48",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                        placeholder: "Filter by status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/messages/MessageContent.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "all",
                                        children: "All Messages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "pending",
                                        children: "Pending"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "sent",
                                        children: "Sent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "failed",
                                        children: "Failed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/messages/MessageContent.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/messages/MessageContent.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: filteredMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12 bg-white rounded-lg border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                            className: "w-12 h-12 text-gray-300 mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/MessageContent.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No messages found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/MessageContent.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/MessageContent.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : filteredMessages.map((msg)=>{
                    const customer = getCustomer(msg.customerId);
                    const name = customer ? customer.full_name || customer.fullName || customer.name : '';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-lg shadow border hover:shadow-md transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-gray-900",
                                                    children: name ? `${name} (${msg.phoneNumber})` : msg.phoneNumber
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/MessageContent.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-2 py-1 rounded-full ${getStatusBadge(msg.status)}`,
                                                    children: msg.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/MessageContent.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/MessageContent.tsx",
                                            lineNumber: 107,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: new Date(msg.createdAt).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/MessageContent.tsx",
                                                lineNumber: 117,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: new Date(msg.createdAt).toLocaleTimeString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/MessageContent.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/messages/MessageContent.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-2",
                                children: msg.content
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageContent.tsx",
                                lineNumber: 122,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center text-xs text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            msg.smsCreditsUsed,
                                            " credit",
                                            msg.smsCreditsUsed > 1 ? 's' : '',
                                            " used"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    msg.errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-600",
                                        children: msg.errorMessage
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                                        lineNumber: 126,
                                        columnNumber: 40
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/messages/MessageContent.tsx",
                                lineNumber: 124,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, msg.id, true, {
                        fileName: "[project]/src/components/messages/MessageContent.tsx",
                        lineNumber: 101,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/messages/MessageContent.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/messages/MessageContent.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MessageContent;
const __TURBOPACK__default__export__ = MessageContent;
var _c;
__turbopack_context__.k.register(_c, "MessageContent");
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
"[project]/src/components/messages/NewMessageDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const NewMessageDialog = ({ open, onClose, onSend, customers, templates })=>{
    _s();
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCustomer, setSelectedCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('none');
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('none');
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sendResult, setSendResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Reset state when dialog closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewMessageDialog.useEffect": ()=>{
            if (!open) {
                setPhoneNumber('');
                setContent('');
                setSelectedCustomer('none');
                setSelectedTemplate('none');
                setSendResult(null);
                setSearchTerm('');
            }
        }
    }["NewMessageDialog.useEffect"], [
        open
    ]);
    // Populate phone number when customer is selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewMessageDialog.useEffect": ()=>{
            if (selectedCustomer && selectedCustomer !== 'none') {
                const customer = customers.find({
                    "NewMessageDialog.useEffect.customer": (c)=>c.id === selectedCustomer
                }["NewMessageDialog.useEffect.customer"]);
                const phone = getCustomerPhone(customer);
                setPhoneNumber(phone);
            }
        }
    }["NewMessageDialog.useEffect"], [
        selectedCustomer,
        customers
    ]);
    // Populate message content when template is selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewMessageDialog.useEffect": ()=>{
            if (selectedTemplate && selectedTemplate !== 'none') {
                const template = templates.find({
                    "NewMessageDialog.useEffect.template": (t)=>t.id === selectedTemplate
                }["NewMessageDialog.useEffect.template"]);
                if (template) setContent(template.content);
            }
        }
    }["NewMessageDialog.useEffect"], [
        selectedTemplate,
        templates
    ]);
    const getCustomerPhone = (customer)=>(customer?.phone_number || customer?.phoneNumber || customer?.phone || customer?.contact || '').trim();
    const filteredCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewMessageDialog.useMemo[filteredCustomers]": ()=>{
            const term = (searchTerm || '').toLowerCase();
            return customers.filter({
                "NewMessageDialog.useMemo[filteredCustomers]": (c)=>getCustomerPhone(c)
            }["NewMessageDialog.useMemo[filteredCustomers]"]) // only customers with phone
            .filter({
                "NewMessageDialog.useMemo[filteredCustomers]": (c)=>{
                    const name = (c.full_name || c.fullName || c.name || '').toLowerCase();
                    const phone = getCustomerPhone(c).toLowerCase();
                    return !term || name.includes(term) || phone.includes(term);
                }
            }["NewMessageDialog.useMemo[filteredCustomers]"]);
        }
    }["NewMessageDialog.useMemo[filteredCustomers]"], [
        customers,
        searchTerm
    ]);
    const handleSend = async ()=>{
        if (!phoneNumber || !content) return;
        setIsSending(true);
        const result = await onSend({
            phoneNumber,
            content,
            customerId: selectedCustomer && selectedCustomer !== 'none' ? selectedCustomer : undefined,
            templateId: selectedTemplate && selectedTemplate !== 'none' ? selectedTemplate : undefined
        });
        setIsSending(false);
        setSendResult({
            success: result.success,
            failed: result.failed,
            errors: result.errors || []
        });
        if ((result.failed || 0) === 0) {
            setTimeout(()=>onClose(), 3000); // auto-close if all succeed
        }
    };
    const messageLength = content.length;
    const smsCredits = Math.ceil(messageLength / 160) || 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-lg max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Send New Message"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                sendResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-4 rounded-lg border ${sendResult.failed === 0 ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-lg mb-2",
                                    children: sendResult.failed === 0 ? '✅ Message Sent Successfully!' : '⚠️ Sending Completed with Errors'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-700",
                                            children: [
                                                "✓ Successfully sent: ",
                                                sendResult.success
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        sendResult.failed > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-700",
                                            children: [
                                                "✗ Failed: ",
                                                sendResult.failed
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                            lineNumber: 116,
                                            columnNumber: 43
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        sendResult.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-red-900 mb-2",
                                    children: "Errors:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-red-800 space-y-1 max-h-[200px] overflow-y-auto",
                                    children: sendResult.errors.map((err, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• ",
                                                err
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                            lineNumber: 124,
                                            columnNumber: 56
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onClose,
                            className: "w-full",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Select Customer (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: selectedCustomer,
                                    onValueChange: setSelectedCustomer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Search or select a customer..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            className: "max-h-[300px] overflow-y-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "text",
                                                        placeholder: "Type to search...",
                                                        value: searchTerm,
                                                        onChange: (e)=>setSearchTerm(e.target.value),
                                                        className: "mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "none",
                                                    children: "None - Enter Customer Name or Phone Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                filteredCustomers.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: c.id,
                                                        children: [
                                                            c.full_name || c.fullName || c.name || 'Unnamed Customer',
                                                            " - ",
                                                            getCustomerPhone(c)
                                                        ]
                                                    }, c.id, true, {
                                                        fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Phone Number *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "tel",
                                    placeholder: "+256700000000",
                                    value: phoneNumber,
                                    onChange: (e)=>setPhoneNumber(e.target.value),
                                    className: "w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Use Template (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: selectedTemplate,
                                    onValueChange: setSelectedTemplate,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Choose a template..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            className: "max-h-[300px] overflow-y-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "none",
                                                    children: "None - Type custom message"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                templates.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: t.id,
                                                        children: t.name
                                                    }, t.id, false, {
                                                        fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 39
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Message * (Max 160 Characters)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    placeholder: "Type your message...",
                                    value: content,
                                    onChange: (e)=>setContent(e.target.value),
                                    rows: 5,
                                    required: true,
                                    className: "w-full resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-1 text-xs text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                messageLength,
                                                " characters"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                smsCredits,
                                                " SMS credit",
                                                smsCredits > 1 ? 's' : '',
                                                " will be used"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-4 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: onClose,
                                    disabled: isSending,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSend,
                                    disabled: !phoneNumber || !content || isSending,
                                    className: "bg-blue-600 hover:bg-blue-700",
                                    children: isSending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-spin mr-2",
                                        children: "⏳"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                        lineNumber: 205,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Send Message"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/messages/NewMessageDialog.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NewMessageDialog, "qf2M9E7XGHuQwjWhMBt1lh6IrtI=");
_c = NewMessageDialog;
const __TURBOPACK__default__export__ = NewMessageDialog;
var _c;
__turbopack_context__.k.register(_c, "NewMessageDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/messages/MessageTemplateDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
// Predefined SMS Categories with Custom option
const TEMPLATE_CATEGORIES = [
    {
        value: "ThankYou",
        label: "Thank You (After Sale)"
    },
    {
        value: "Birthday",
        label: "Birthday Wishes"
    },
    {
        value: "PaymentReminder",
        label: "Payment Reminder"
    },
    {
        value: "Holiday",
        label: "Public Holiday"
    },
    {
        value: "Inactive",
        label: "We Miss You / Inactive Customer"
    },
    {
        value: "Custom",
        label: "Custom"
    } // Custom option
];
const MessageTemplateDialog = ({ open, onClose, onSave, initialData })=>{
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [customCategory, setCustomCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''); // For typing custom category
    const [variables, setVariables] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MessageTemplateDialog.useEffect": ()=>{
            if (open && initialData) {
                setName(initialData.name);
                setContent(initialData.content);
                setCategory(initialData.category || '');
                setCustomCategory(initialData.category && !TEMPLATE_CATEGORIES.some({
                    "MessageTemplateDialog.useEffect": (c)=>c.value === initialData.category
                }["MessageTemplateDialog.useEffect"]) ? initialData.category : '');
                setVariables(initialData.variables || []);
            } else if (!open) {
                setName('');
                setContent('');
                setCategory('');
                setCustomCategory('');
                setVariables([]);
            }
        }
    }["MessageTemplateDialog.useEffect"], [
        open,
        initialData
    ]);
    const handleSave = async ()=>{
        if (!name || !content) return;
        const finalCategory = category === "Custom" ? customCategory : category;
        setIsSaving(true);
        const success = await onSave({
            name,
            content,
            category: finalCategory || undefined,
            variables,
            isDefault: false
        });
        setIsSaving(false);
        if (success) {
            onClose();
        }
    };
    const extractVariables = (text)=>{
        const regex = /\{([^}]+)\}/g;
        const matches = text.match(regex);
        if (matches) {
            const vars = matches.map((m)=>m.slice(1, -1));
            setVariables([
                ...new Set(vars)
            ]);
        } else {
            setVariables([]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: (isOpen)=>{
            if (!isOpen) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-lg max-h-[80vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            initialData ? 'Edit Template' : 'Create New Template'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Template Name *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    placeholder: "e.g., Welcome Message",
                                    value: name,
                                    onChange: (e)=>setName(e.target.value),
                                    rows: 1,
                                    className: "resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Category *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: category,
                                    onValueChange: setCategory,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Select category..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: TEMPLATE_CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: c.value,
                                                    children: c.label
                                                }, c.value, false, {
                                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                category === "Custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    placeholder: "Type custom category...",
                                    value: customCategory,
                                    onChange: (e)=>setCustomCategory(e.target.value),
                                    rows: 1,
                                    className: "mt-2 resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Message Content *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    placeholder: "Type your template here... Use {variable} for dynamic content",
                                    value: content,
                                    onChange: (e)=>{
                                        setContent(e.target.value);
                                        extractVariables(e.target.value);
                                    },
                                    rows: 6,
                                    className: "resize-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: [
                                        "Use curly braces for variables: ",
                                        '{customer_name}',
                                        ", ",
                                        '{customer_phone}',
                                        ", etc."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        variables.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Detected Variables"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: variables.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded",
                                            children: v
                                        }, v, false, {
                                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 border border-blue-200 rounded-lg p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-blue-900 mb-2",
                                    children: "Available Variables"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-blue-800 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "bg-blue-100 px-1 rounded",
                                                    children: '{customer_name}'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " - Full customer name"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "bg-blue-100 px-1 rounded",
                                                    children: '{first_name}'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " - Customer first name"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "bg-blue-100 px-1 rounded",
                                                    children: '{last_name}'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " - Customer last name"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "bg-blue-100 px-1 rounded",
                                                    children: '{customer_phone}'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " - Customer phone number"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "• ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "bg-blue-100 px-1 rounded",
                                                    children: '{customer_email}'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " - Customer email"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-blue-700 mt-2",
                                    children: "These will be automatically replaced when sending to a customer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: onClose,
                                    disabled: isSaving,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSave,
                                    disabled: !name || !content || !category || category === "Custom" && !customCategory || isSaving,
                                    className: "bg-blue-600 hover:bg-blue-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isSaving ? 'Saving...' : 'Save Template'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/messages/MessageTemplateDialog.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MessageTemplateDialog, "TDty7q1VIHT5YgC7x4DXC+XMnRM=");
_c = MessageTemplateDialog;
const __TURBOPACK__default__export__ = MessageTemplateDialog;
var _c;
__turbopack_context__.k.register(_c, "MessageTemplateDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/messages/TopUpCreditsDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("src/components/messages/TopUpCreditsDialog.tsx")}`;
    }
};
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const TopUpCreditsDialog = ({ open, onClose, onTopUp })=>{
    _s();
    const [credits, setCredits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const creditCost = Number(__TURBOPACK__import$2e$meta__.env.VITE_SMS_CREDIT_COST || 100);
    const totalCost = credits * creditCost;
    // Debug: Dialog opened / closed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopUpCreditsDialog.useEffect": ()=>{
            console.log('[TopUpCreditsDialog] Dialog open state:', open);
            if (open) {
                console.log('[TopUpCreditsDialog] Dialog opened — resetting form');
                setCredits(10);
                setPhoneNumber('');
                setIsProcessing(false);
            }
        }
    }["TopUpCreditsDialog.useEffect"], [
        open
    ]);
    // Debug: Form state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopUpCreditsDialog.useEffect": ()=>{
            console.log('[TopUpCreditsDialog] Current state → Credits:', credits, '| Phone:', phoneNumber, '| Total Cost: UGX', totalCost.toLocaleString());
        }
    }["TopUpCreditsDialog.useEffect"], [
        credits,
        phoneNumber,
        totalCost
    ]);
    const handleTopUp = async ()=>{
        console.log('[TopUpCreditsDialog] Top-up requested!');
        console.log('   → Credits:', credits);
        console.log('   → Phone Number:', phoneNumber);
        console.log('   → Total Cost: UGX', totalCost.toLocaleString());
        if (!phoneNumber || credits < 1) {
            console.warn('[TopUpCreditsDialog] Invalid input — blocking submit');
            return;
        }
        setIsProcessing(true);
        console.log('[TopUpCreditsDialog] Calling onTopUp...');
        try {
            const success = await onTopUp(credits, phoneNumber);
            console.log('[TopUpCreditsDialog] onTopUp result:', success ? 'SUCCESS' : 'FAILED');
            if (success) {
                console.log('[TopUpCreditsDialog] Payment successful → closing dialog');
                onClose();
            } else {
                console.error('[TopUpCreditsDialog] Payment failed (returned false)');
            }
        } catch (err) {
            console.error('[TopUpCreditsDialog] onTopUp threw an error:', err);
        } finally{
            setIsProcessing(false);
        }
    };
    const quickAmounts = [
        10,
        25,
        50,
        100
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Top Up SMS Credits"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-2 block",
                                    children: "Number of Credits *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "number",
                                    min: "1",
                                    value: credits,
                                    onChange: (e)=>{
                                        const val = Math.max(1, parseInt(e.target.value) || 1);
                                        console.log('[TopUpCreditsDialog] Credits input changed →', val);
                                        setCredits(val);
                                    },
                                    className: "text-lg font-semibold"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-2",
                                    children: quickAmounts.map((amount)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                console.log('[TopUpCreditsDialog] Quick amount clicked →', amount, 'credits');
                                                setCredits(amount);
                                            },
                                            className: `px-3 py-1 text-sm rounded-md border transition-colors ${credits === amount ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`,
                                            children: [
                                                amount,
                                                " credits"
                                            ]
                                        }, amount, true, {
                                            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-600",
                                            children: "Credit Cost:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: [
                                                "UGX ",
                                                creditCost,
                                                " per credit"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-600",
                                            children: "Quantity:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: [
                                                credits,
                                                " credits"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-blue-300 pt-2 mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-semibold text-gray-900",
                                                children: "Total Amount:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold text-blue-600",
                                                children: [
                                                    "UGX ",
                                                    totalCost.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Mobile Money Phone Number *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "tel",
                                    placeholder: "+256700000000",
                                    value: phoneNumber,
                                    onChange: (e)=>{
                                        console.log('[TopUpCreditsDialog] Phone number changed →', e.target.value);
                                        setPhoneNumber(e.target.value);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: "You will receive a payment prompt on this number"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: onClose,
                                    disabled: isProcessing,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleTopUp,
                                    disabled: !phoneNumber || credits < 1 || isProcessing,
                                    className: "bg-green-600 hover:bg-green-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isProcessing ? 'Processing...' : `Pay UGX ${totalCost.toLocaleString()}`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/messages/TopUpCreditsDialog.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TopUpCreditsDialog, "MqnaUn4TrRQCSBtqgLvUqxuyDhc=");
_c = TopUpCreditsDialog;
const __TURBOPACK__default__export__ = TopUpCreditsDialog;
var _c;
__turbopack_context__.k.register(_c, "TopUpCreditsDialog");
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
"[project]/src/app/actions/data:bb05cf [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocCkgPT4gKHtcclxuICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiBwLmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgIHNlbGxpbmdQcmljZTogcC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHAuY3JlYXRlZEF0LFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0cyBieSBpZHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBUXNCLDhMQUFBIn0=
}),
"[project]/src/app/actions/data:49b7eb [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocCkgPT4gKHtcclxuICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiBwLmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgIHNlbGxpbmdQcmljZTogcC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHAuY3JlYXRlZEF0LFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0cyBieSBpZHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBZ0pzQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:b08857 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocCkgPT4gKHtcclxuICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiBwLmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgIHNlbGxpbmdQcmljZTogcC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHAuY3JlYXRlZEF0LFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0cyBieSBpZHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBMkxzQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:114e11 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocCkgPT4gKHtcclxuICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiBwLmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgIHNlbGxpbmdQcmljZTogcC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHAuY3JlYXRlZEF0LFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0cyBieSBpZHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBdU5zQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:0dd213 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocCkgPT4gKHtcclxuICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiBwLmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgIHNlbGxpbmdQcmljZTogcC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHAuY3JlYXRlZEF0LFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0cyBieSBpZHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1NBb09zQixxTUFBQSJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bb05cf__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:bb05cf [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$49b7eb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:49b7eb [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b08857__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:b08857 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$114e11__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:114e11 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0dd213__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:0dd213 [app-client] (ecmascript) <text/javascript>");
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bb05cf__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductsAction"])({
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
            const newProduct = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$49b7eb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProductAction"])({
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$b08857__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductAction"])(id, {
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$114e11__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProductAction"])(id);
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
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0dd213__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProductsBulkAction"])(updates.map((u)=>({
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
"[project]/src/app/actions/data:371cb7 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocCkgPT4gKHtcclxuICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiBwLmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgIHNlbGxpbmdQcmljZTogcC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHAuY3JlYXRlZEF0LFxyXG4gICAgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0cyBieSBpZHM6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1NBMEdzQixtTUFBQSJ9
}),
"[project]/src/hooks/useInventoryActions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInventoryActions",
    ()=>useInventoryActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useProducts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useProducts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$371cb7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:371cb7 [app-client] (ecmascript) <text/javascript>");
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$371cb7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProductsByIdsAction"])(productIds, locationId);
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
"[project]/src/components/messages/BulkMessageDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSalesData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subYears.js [app-client] (ecmascript)");
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
const BulkMessageDialog = ({ open, onClose, onSend, customers, templates = [], searchTerm, setSearchTerm })=>{
    _s();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCustomers, setSelectedCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('none');
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusSelection, setStatusSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [inactivityPeriod, setInactivityPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('90days');
    const [sendResult, setSendResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { sales, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"])(currentBusiness?.id);
    // Capitalize utility
    const capitalize = (s)=>s.charAt(0).toUpperCase() + s.slice(1);
    // Map customers to statuses including inactive
    const customerStatusesMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BulkMessageDialog.useMemo[customerStatusesMap]": ()=>{
            const map = {};
            if (!sales || sales.length === 0) return map;
            const now = new Date();
            let cutoffDate = now;
            switch(inactivityPeriod){
                case '30days':
                    cutoffDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 30);
                    break;
                case '60days':
                    cutoffDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 60);
                    break;
                case '90days':
                    cutoffDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(now, 90);
                    break;
                case '6months':
                    cutoffDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(now, 6);
                    break;
                case '1year':
                    cutoffDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subYears"])(now, 1);
                    break;
            }
            customers.forEach({
                "BulkMessageDialog.useMemo[customerStatusesMap]": (customer)=>{
                    const customerName = (customer.full_name || customer.fullName || customer.name || '').toLowerCase();
                    const customerSales = sales.filter({
                        "BulkMessageDialog.useMemo[customerStatusesMap].customerSales": (s)=>s.customerId === customer.id || s.customerName?.toLowerCase().trim() === customerName
                    }["BulkMessageDialog.useMemo[customerStatusesMap].customerSales"]);
                    const statuses = new Set();
                    if (customerSales.length === 0) {
                        statuses.add('inactive');
                    } else {
                        const lastPurchaseDate = new Date(Math.max(...customerSales.map({
                            "BulkMessageDialog.useMemo[customerStatusesMap]": (s)=>new Date(s.date).getTime()
                        }["BulkMessageDialog.useMemo[customerStatusesMap]"])));
                        if (lastPurchaseDate < cutoffDate) statuses.add('inactive');
                        customerSales.forEach({
                            "BulkMessageDialog.useMemo[customerStatusesMap]": (sale)=>{
                                const status = (sale.paymentStatus || '').toUpperCase().trim();
                                if (status === 'PAID') statuses.add('paid');
                                else if (status === 'QUOTE') statuses.add('quote');
                                else if (status === 'INSTALLMENT SALE') statuses.add('installment');
                                else if ([
                                    'NOT PAID',
                                    'UNPAID',
                                    'OPEN'
                                ].includes(status)) statuses.add('unpaid');
                            }
                        }["BulkMessageDialog.useMemo[customerStatusesMap]"]);
                    }
                    map[customer.id] = statuses;
                }
            }["BulkMessageDialog.useMemo[customerStatusesMap]"]);
            return map;
        }
    }["BulkMessageDialog.useMemo[customerStatusesMap]"], [
        customers,
        sales,
        inactivityPeriod
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BulkMessageDialog.useEffect": ()=>{
            if (!open) {
                setContent('');
                setSelectedCustomers([]);
                setSelectedTemplate('none');
                setStatusSelection('all');
                setSendResult(null);
            }
        }
    }["BulkMessageDialog.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BulkMessageDialog.useEffect": ()=>{
            if (selectedTemplate && selectedTemplate !== 'none') {
                const template = templates.find({
                    "BulkMessageDialog.useEffect.template": (t)=>t.id === selectedTemplate
                }["BulkMessageDialog.useEffect.template"]);
                if (template) setContent(template.content);
            }
        }
    }["BulkMessageDialog.useEffect"], [
        selectedTemplate,
        templates
    ]);
    const getCustomerPhone = (customer)=>customer.phone_number || customer.phoneNumber || customer.phone || customer.contact || '';
    const filteredCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BulkMessageDialog.useMemo[filteredCustomers]": ()=>{
            return customers.filter({
                "BulkMessageDialog.useMemo[filteredCustomers]": (customer)=>{
                    const phone = getCustomerPhone(customer) || '';
                    if (!phone) return false;
                    const name = (customer.full_name || customer.fullName || customer.name || '').toLowerCase();
                    const term = (searchTerm || '').toLowerCase();
                    const searchMatch = !term || name.includes(term) || phone.toLowerCase().includes(term);
                    const statuses = customerStatusesMap[customer.id] || new Set();
                    let statusMatch = true;
                    if (statusSelection !== 'all') {
                        statusMatch = statuses.has(statusSelection);
                    }
                    return searchMatch && statusMatch;
                }
            }["BulkMessageDialog.useMemo[filteredCustomers]"]);
        }
    }["BulkMessageDialog.useMemo[filteredCustomers]"], [
        customers,
        searchTerm,
        statusSelection,
        customerStatusesMap
    ]);
    const handleToggleCustomer = (id)=>{
        setSelectedCustomers((prev)=>prev.includes(id) ? prev.filter((c)=>c !== id) : [
                ...prev,
                id
            ]);
    };
    // Select all / deselect all
    const handleToggleAll = ()=>{
        if (selectedCustomers.length === filteredCustomers.length) {
            setSelectedCustomers([]);
        } else {
            setSelectedCustomers(filteredCustomers.map((c)=>c.id));
        }
    };
    const handleSend = async ()=>{
        if (!content || selectedCustomers.length === 0) return;
        setIsSending(true);
        const result = await onSend({
            customerIds: selectedCustomers,
            content,
            templateId: selectedTemplate !== 'none' ? selectedTemplate : undefined
        });
        setIsSending(false);
        setSendResult(result);
        if (result.failed === 0) setTimeout(()=>onClose(), 3000);
    };
    const totalSMS = selectedCustomers.length * Math.ceil((content.length || 1) / 160);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: open,
            onOpenChange: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-3xl max-h-[90vh] overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 text-center text-gray-500",
                    children: "Loading sales data..."
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-3xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Send Bulk SMS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                sendResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-4 rounded-lg border ${sendResult.failed === 0 ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-lg mb-2",
                                    children: sendResult.failed === 0 ? '✅ Messages Sent Successfully!' : '⚠️ Sending Complete with Errors'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-green-700",
                                            children: [
                                                "✓ Successfully sent: ",
                                                sendResult.success
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        sendResult.failed > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-700",
                                            children: [
                                                "✗ Failed: ",
                                                sendResult.failed
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 192,
                                            columnNumber: 43
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        sendResult.errors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold text-red-900 mb-2",
                                    children: "Errors:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-red-800 space-y-1 max-h-[200px] overflow-y-auto",
                                    children: sendResult.errors.map((err, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• ",
                                                err
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 200,
                                            columnNumber: 56
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                            lineNumber: 197,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onClose,
                            className: "w-full",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Use Template (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: selectedTemplate,
                                    onValueChange: setSelectedTemplate,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Choose a template..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            className: "max-h-[300px] overflow-y-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "none",
                                                    children: "None - Type custom message"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                templates.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: t.id,
                                                        children: t.name
                                                    }, t.id, false, {
                                                        fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 39
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-gray-700 mb-1 block",
                                    children: "Message * (Max 160 Characters)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    placeholder: "Type your message here... Use {customer_name} for personalization",
                                    value: content,
                                    onChange: (e)=>setContent(e.target.value),
                                    rows: 4,
                                    maxLength: 160,
                                    required: true,
                                    className: "resize-none w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-1 text-xs text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                content.length,
                                                " characters"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-blue-600",
                                            children: [
                                                totalSMS,
                                                " total SMS credits will be used"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mb-2 flex-wrap items-center",
                            children: [
                                [
                                    'all',
                                    'paid',
                                    'unpaid',
                                    'quote',
                                    'installment',
                                    'inactive'
                                ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: statusSelection === status ? 'default' : 'outline',
                                        onClick: ()=>setStatusSelection(status),
                                        children: capitalize(status)
                                    }, status, false, {
                                        fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))),
                                statusSelection === 'inactive' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: inactivityPeriod,
                                    onValueChange: (v)=>setInactivityPeriod(v),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-[120px] text-xs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Select period"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                lineNumber: 258,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 257,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "30days",
                                                    children: "30 days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "60days",
                                                    children: "60 days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "90days",
                                                    children: "90 days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "6months",
                                                    children: "6 months"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "1year",
                                                    children: "1 year"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 260,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 256,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: handleToggleAll,
                                    children: selectedCustomers.length === filteredCustomers.length ? `Deselect All ${capitalize(statusSelection)} Customers` : `Select All ${capitalize(statusSelection)} Customers`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            type: "text",
                            placeholder: "Search customers...",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            className: "mb-2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-lg max-h-[300px] overflow-y-auto",
                            children: filteredCustomers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 text-center text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "w-8 h-8 mx-auto mb-2 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                        lineNumber: 285,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No customers match your search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                        lineNumber: 286,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                lineNumber: 284,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : filteredCustomers.map((customer)=>{
                                const phone = getCustomerPhone(customer);
                                const statuses = Array.from(customerStatusesMap[customer.id] || []);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-3 hover:bg-gray-50 border-b last:border-b-0 cursor-pointer",
                                    onClick: ()=>handleToggleCustomer(customer.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            checked: selectedCustomers.includes(customer.id),
                                            onCheckedChange: ()=>handleToggleCustomer(customer.id)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 298,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-gray-900",
                                                    children: customer.full_name || customer.fullName || customer.name || 'Unnamed Customer'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400",
                                                    children: [
                                                        "Status: ",
                                                        statuses.map((s)=>s.toUpperCase()).join(', ')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                            lineNumber: 299,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, customer.id, true, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 293,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 pt-4 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: onClose,
                                    disabled: isSending,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSend,
                                    disabled: selectedCustomers.length === 0 || !content || isSending,
                                    className: "bg-blue-600 hover:bg-blue-700",
                                    children: isSending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-spin mr-2",
                                        children: "⏳"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                        lineNumber: 319,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                                lineNumber: 322,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Send to ",
                                            selectedCustomers.length,
                                            " Customer",
                                            selectedCustomers.length !== 1 ? 's' : ''
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/messages/BulkMessageDialog.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BulkMessageDialog, "R8EQbvqsGom2OIp8yd462YVURsw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"]
    ];
});
_c = BulkMessageDialog;
const __TURBOPACK__default__export__ = BulkMessageDialog;
var _c;
__turbopack_context__.k.register(_c, "BulkMessageDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/messages/PurchaseHistoryTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
;
const formatDate = (dateString)=>{
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
const PurchaseHistoryTable = ({ purchases })=>{
    const getStatusBadge = (status)=>{
        switch(status.toLowerCase()){
            case 'completed':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                            lineNumber: 41,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Completed"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                    lineNumber: 40,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'pending':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                            lineNumber: 48,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Pending"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                    lineNumber: 47,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'failed':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                            lineNumber: 55,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Failed"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                    lineNumber: 54,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800",
                    children: status
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                    lineNumber: 61,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    if (purchases.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow border p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                    className: "w-12 h-12 mx-auto text-gray-400 mb-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-medium text-gray-900 mb-1",
                    children: "No Purchase History"
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Your credit purchase history will appear here."
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
            lineNumber: 70,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow border overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-900 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Purchase History"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                        lineNumber: 90,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Credits"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                        lineNumber: 93,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Total Cost"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Payment Phone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                        lineNumber: 99,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Payment Method"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                lineNumber: 89,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: purchases.map((purchase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: formatDate(purchase.created_at || purchase.createdAt || '')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                            lineNumber: 113,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                            children: [
                                                (purchase.credits_amount || purchase.creditsAmount || 0).toLocaleString(),
                                                " credits"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                            lineNumber: 116,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: [
                                                "UGX ",
                                                (purchase.total_cost || purchase.totalCost || 0).toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                            lineNumber: 119,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                            children: purchase.payment_phone_number || purchase.paymentPhoneNumber || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                            lineNumber: 122,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: getStatusBadge(purchase.payment_status || purchase.paymentStatus || 'pending')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                            lineNumber: 125,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                            children: purchase.payment_method || purchase.paymentMethod || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, purchase.id, true, {
                                    fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                            lineNumber: 110,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/messages/PurchaseHistoryTable.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PurchaseHistoryTable;
const __TURBOPACK__default__export__ = PurchaseHistoryTable;
var _c;
__turbopack_context__.k.register(_c, "PurchaseHistoryTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/messages/UsageHistoryTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
;
var _s = __turbopack_context__.k.signature();
;
;
const formatDate = (dateString)=>{
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
const UsageHistoryTable = ({ messages })=>{
    _s();
    const [expandedMessageId, setExpandedMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getStatusBadge = (status)=>{
        switch(status.toLowerCase()){
            case 'sent':
            case 'delivered':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                            lineNumber: 42,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        status === 'delivered' ? 'Delivered' : 'Sent'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                    lineNumber: 41,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'pending':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Pending"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                    lineNumber: 48,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'failed':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                            lineNumber: 56,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Failed"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                    lineNumber: 55,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800",
                    children: status
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                    lineNumber: 62,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    const truncateMessage = (content, maxLength = 50)=>{
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength) + '...';
    };
    if (messages.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow border p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                    className: "w-12 h-12 mx-auto text-gray-400 mb-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-medium text-gray-900 mb-1",
                    children: "No Usage History"
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Your sent messages will appear here."
                }, void 0, false, {
                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
            lineNumber: 76,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow border overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-gray-900 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Usage History"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Date Sent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Phone Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                        lineNumber: 99,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Credits Used"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                        lineNumber: 108,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: messages.map((message)=>{
                                const creditsUsed = message.sms_credits_used || message.smsCreditsUsed || 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: formatDate(message.sent_at || message.sentAt || message.created_at || message.createdAt || '')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                            lineNumber: 118,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600",
                                            children: message.phone_number || message.phoneNumber || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                            lineNumber: 121,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: expandedMessageId === message.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "whitespace-pre-wrap",
                                                    children: [
                                                        message.content,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setExpandedMessageId(null),
                                                            className: "text-blue-600 hover:text-blue-800 ml-2 text-xs",
                                                            children: "Show less"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        truncateMessage(message.content),
                                                        message.content.length > 50 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setExpandedMessageId(message.id),
                                                            className: "text-blue-600 hover:text-blue-800 ml-2 text-xs",
                                                            children: "Show more"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 57
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                                lineNumber: 125,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                            lineNumber: 124,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",
                                            children: [
                                                creditsUsed,
                                                " credit",
                                                creditsUsed > 1 ? 's' : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                            lineNumber: 151,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 whitespace-nowrap",
                                            children: getStatusBadge(message.status)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                            lineNumber: 154,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, message.id, true, {
                                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                                    lineNumber: 117,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                            lineNumber: 113,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
                lineNumber: 92,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/messages/UsageHistoryTable.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UsageHistoryTable, "N4LLJjQbDWsRGy0jibtkN2GOlb0=");
_c = UsageHistoryTable;
const __TURBOPACK__default__export__ = UsageHistoryTable;
var _c;
__turbopack_context__.k.register(_c, "UsageHistoryTable");
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
"[project]/src/pages/Messages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCustomers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$MessageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/messages/MessageHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$MessageStatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/messages/MessageStatsCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$MessageContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/messages/MessageContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$NewMessageDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/messages/NewMessageDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$MessageTemplateDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/messages/MessageTemplateDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$TopUpCreditsDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/messages/TopUpCreditsDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$BulkMessageDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/messages/BulkMessageDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$PurchaseHistoryTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/messages/PurchaseHistoryTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$UsageHistoryTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/messages/UsageHistoryTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
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
const Messages = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness, isLoading: businessLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { currentProfile, hasPermission, isLoading: profilesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    // Permissions
    const canView = hasPermission('messages', 'view');
    const canCreate = hasPermission('messages', 'create');
    const canEdit = hasPermission('messages', 'edit');
    const canDelete = hasPermission('messages', 'delete');
    const { messages, templates, purchases, isLoading, createMessage, createBulkMessages, createTemplate, updateTemplate, deleteTemplate, initiateCreditPurchase, getMessageStats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"])(user?.id);
    const { customers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomers"])();
    const [newMessageOpen, setNewMessageOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newTemplateOpen, setNewTemplateOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bulkMessageOpen, setBulkMessageOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [topUpOpen, setTopUpOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('messages');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const stats = getMessageStats();
    const handleSendMessage = async (messageData)=>{
        try {
            await createMessage(messageData);
            return {
                success: 1,
                failed: 0,
                errors: []
            };
        } catch (error) {
            console.error('Failed to send message:', error);
            return {
                success: 0,
                failed: 1,
                errors: [
                    error instanceof Error ? error.message : 'Unknown error'
                ]
            };
        }
    };
    const handleBulkSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Messages.useCallback[handleBulkSend]": async (data)=>{
            try {
                const result = await createBulkMessages(data);
                return result;
            } catch (error) {
                console.error('Failed to send bulk messages:', error);
                alert(error instanceof Error ? error.message : 'Failed to send messages');
                return {
                    success: 0,
                    failed: 0,
                    errors: [
                        error instanceof Error ? error.message : 'Unknown error'
                    ]
                };
            }
        }
    }["Messages.useCallback[handleBulkSend]"], [
        createBulkMessages
    ]);
    const handleSaveTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Messages.useCallback[handleSaveTemplate]": async (templateData)=>{
            if (selectedTemplate) {
                await updateTemplate(selectedTemplate.id, templateData);
            } else {
                await createTemplate(templateData);
            }
            setNewTemplateOpen(false);
            setSelectedTemplate(undefined);
            return true;
        }
    }["Messages.useCallback[handleSaveTemplate]"], [
        selectedTemplate,
        updateTemplate,
        createTemplate
    ]);
    const handleEditTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Messages.useCallback[handleEditTemplate]": (template)=>{
            setSelectedTemplate(template);
            setNewTemplateOpen(true);
        }
    }["Messages.useCallback[handleEditTemplate]"], []);
    const handleDeleteTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Messages.useCallback[handleDeleteTemplate]": async (templateId)=>{
            if (confirm('Are you sure you want to delete this template?')) {
                await deleteTemplate(templateId);
            }
        }
    }["Messages.useCallback[handleDeleteTemplate]"], [
        deleteTemplate
    ]);
    const handleTopUpCredits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Messages.useCallback[handleTopUpCredits]": async (credits, phoneNumber)=>{
            try {
                const result = await initiateCreditPurchase(credits, phoneNumber);
                // Redirect to payment page
                window.open(result.redirectUrl, '_blank');
                setTopUpOpen(false);
                return true;
            } catch (error) {
                console.error('Failed to initiate top-up:', error);
                alert(error instanceof Error ? error.message : 'Failed to initiate payment');
                return false;
            }
        }
    }["Messages.useCallback[handleTopUpCredits]"], [
        initiateCreditPurchase
    ]);
    if (businessLoading || !currentBusiness || isLoading || profilesLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
            }, void 0, false, {
                fileName: "[project]/src/pages/Messages.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/pages/Messages.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!canView) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                    variant: "destructive",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Messages.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                            children: "Access Denied"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Messages.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            children: "You do not have permission to view the messaging module. Please contact your administrator if you believe this is an error."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Messages.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Messages.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>navigate('/'),
                        variant: "outline",
                        className: "gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Messages.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Back to Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Messages.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/Messages.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/Messages.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const filteredMessages = messages.filter((msg)=>{
        const phone = msg.phoneNumber || '';
        const text = msg.content || '';
        const matchesSearch = phone.toLowerCase().includes(searchTerm.toLowerCase()) || text.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || msg.status === statusFilter;
        return matchesSearch && matchesStatus;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$MessageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onNewMessage: ()=>setNewMessageOpen(true),
                onNewTemplate: ()=>{
                    setSelectedTemplate(undefined);
                    setNewTemplateOpen(true);
                },
                onTopUp: ()=>setTopUpOpen(true),
                onBulkMessage: ()=>setBulkMessageOpen(true),
                smsCredits: currentProfile?.sms_credits || 0,
                canCreate: canCreate
            }, void 0, false, {
                fileName: "[project]/src/pages/Messages.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$MessageStatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                stats: stats
            }, void 0, false, {
                fileName: "[project]/src/pages/Messages.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                value: activeTab,
                onValueChange: setActiveTab,
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                        className: "grid w-full max-w-2xl grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "messages",
                                children: "Messages"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Messages.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "templates",
                                children: "Templates"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Messages.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "history",
                                children: "History"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Messages.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Messages.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "messages",
                        className: "space-y-4 mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$MessageContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            messages: filteredMessages,
                            customers: customers,
                            searchTerm: searchTerm,
                            setSearchTerm: setSearchTerm,
                            statusFilter: statusFilter,
                            setStatusFilter: setStatusFilter
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Messages.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Messages.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "templates",
                        className: "space-y-4 mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: templates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg shadow border hover:shadow-md transition-shadow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-lg",
                                                    children: template.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/Messages.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleEditTemplate(template),
                                                            className: "text-blue-600 hover:text-blue-800 text-sm",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Messages.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        canDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteTemplate(template.id),
                                                            className: "text-red-600 hover:text-red-800 text-sm",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/Messages.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/Messages.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/Messages.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        template.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600",
                                            children: template.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Messages.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mt-2 line-clamp-3",
                                            children: template.content
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Messages.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        template.variables.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap gap-1",
                                            children: template.variables.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded",
                                                    children: v
                                                }, v, false, {
                                                    fileName: "[project]/src/pages/Messages.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/Messages.tsx",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, template.id, true, {
                                    fileName: "[project]/src/pages/Messages.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Messages.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/Messages.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "history",
                        className: "space-y-6 mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$PurchaseHistoryTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                purchases: purchases
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Messages.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$UsageHistoryTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                messages: messages
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Messages.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Messages.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/Messages.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$MessageTemplateDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: newTemplateOpen,
                onClose: ()=>{
                    setNewTemplateOpen(false);
                    setSelectedTemplate(undefined);
                },
                onSave: handleSaveTemplate,
                initialData: selectedTemplate
            }, void 0, false, {
                fileName: "[project]/src/pages/Messages.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$TopUpCreditsDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: topUpOpen,
                onClose: ()=>setTopUpOpen(false),
                onTopUp: handleTopUpCredits
            }, void 0, false, {
                fileName: "[project]/src/pages/Messages.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$NewMessageDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: newMessageOpen,
                onClose: ()=>setNewMessageOpen(false),
                onSend: handleSendMessage,
                customers: customers,
                templates: templates
            }, void 0, false, {
                fileName: "[project]/src/pages/Messages.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$messages$2f$BulkMessageDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: bulkMessageOpen,
                onClose: ()=>setBulkMessageOpen(false),
                onSend: handleBulkSend,
                customers: customers,
                templates: templates,
                searchTerm: searchTerm,
                setSearchTerm: setSearchTerm
            }, void 0, false, {
                fileName: "[project]/src/pages/Messages.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/Messages.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Messages, "kP1rgnGJYcMyZq39aVZYPe6nBKA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomers"]
    ];
});
_c = Messages;
const __TURBOPACK__default__export__ = Messages;
var _c;
__turbopack_context__.k.register(_c, "Messages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4d184172._.js.map