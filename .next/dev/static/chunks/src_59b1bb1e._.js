(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatCashAmount",
    ()=>formatCashAmount,
    "formatCashCurrency",
    ()=>formatCashCurrency,
    "formatLargeNumber",
    ()=>formatLargeNumber,
    "formatNumber",
    ()=>formatNumber,
    "formatNumberInput",
    ()=>formatNumberInput,
    "parseNumberInput",
    ()=>parseNumberInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatNumber(value) {
    return value.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
}
function formatCashCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}
function formatCashAmount(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}
function formatLargeNumber(value) {
    if (value >= 1000000000) {
        return (value / 1000000000).toFixed(1) + 'B';
    } else if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'K';
    }
    return formatNumber(value);
}
function formatNumberInput(input) {
    // Handle empty or invalid input
    if (!input || input === '') return '';
    // Remove all existing commas first
    const cleaned = input.replace(/,/g, '');
    // Check if it's just a decimal point
    if (cleaned === '.') return '0.';
    // Split into integer and decimal parts
    const parts = cleaned.split('.');
    const integerPart = parts[0] || '0';
    const decimalPart = parts[1];
    // Format integer part with commas
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // Reconstruct with decimal part if it exists
    if (parts.length > 1) {
        // User has typed a decimal point
        return decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : `${formattedInteger}.`;
    }
    return formattedInteger;
}
function parseNumberInput(input) {
    if (!input || input === '') return 0;
    const cleaned = input.replace(/,/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ToastViewport$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToastViewport");
__turbopack_context__.k.register(_c2, "Toast$React.forwardRef");
__turbopack_context__.k.register(_c3, "Toast");
__turbopack_context__.k.register(_c4, "ToastAction$React.forwardRef");
__turbopack_context__.k.register(_c5, "ToastAction");
__turbopack_context__.k.register(_c6, "ToastClose$React.forwardRef");
__turbopack_context__.k.register(_c7, "ToastClose");
__turbopack_context__.k.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_context__.k.register(_c9, "ToastTitle");
__turbopack_context__.k.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_context__.k.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/toaster.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sonner.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Toaster = ({ ...props })=>{
    _s();
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        position: "top-right",
        expand: true,
        visibleToasts: 4,
        closeButton: true,
        richColors: true,
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Toaster, "EriOrahfenYKDCErPq+L6926Dw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sonner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Toaster"],
    "toast",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/sonner.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
}),
"[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// MOCK USER FOR DEVELOPMENT/MIGRATION PURPOSES
// Replace with next-auth later
const MOCK_USER = {
    id: '00000000-0000-0000-0000-000000000000',
    email: 'admin@gonza.com'
};
const AuthProvider = ({ children })=>{
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Auto-login for development while migrating
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Check if user is logged in
            const storedUser = localStorage.getItem('gonza_mock_user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            setLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const signIn = async (email, password)=>{
        // Mock successful sign in
        setUser(MOCK_USER);
        localStorage.setItem('gonza_mock_user', JSON.stringify(MOCK_USER));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Signed in successfully');
    };
    const signInWithGoogle = async ()=>{
        setUser(MOCK_USER);
        localStorage.setItem('gonza_mock_user', JSON.stringify(MOCK_USER));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Signed in with Google');
    };
    const signUp = async (email, password, options)=>{
        return {
            error: null,
            user: MOCK_USER
        };
    };
    const signOut = async ()=>{
        setUser(null);
        localStorage.removeItem('gonza_mock_user');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Successfully signed out');
    };
    const resetPassword = async (email)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Password reset email sent');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            signIn,
            signInWithGoogle,
            signUp,
            signOut,
            resetPassword
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/auth/AuthProvider.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file is automatically generated. Do not edit it directly.
// import { createClient } from '@supabase/supabase-js';
__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const SUPABASE_URL = ("TURBOPACK compile-time value", "https://ujgxxcgemmfmfsbngnqo.supabase.co") || 'http://localhost';
const SUPABASE_PUBLISHABLE_KEY = ("TURBOPACK compile-time value", "") || 'mock-key';
const supabase = {
    auth: {
        getUser: async ()=>({
                data: {
                    user: {
                        id: '00000000-0000-0000-0000-000000000000'
                    }
                },
                error: null
            }),
        getSession: async ()=>({
                data: {
                    session: null
                },
                error: null
            }),
        onAuthStateChange: ()=>({
                data: {
                    subscription: {
                        unsubscribe: ()=>{}
                    }
                }
            })
    },
    from: (table)=>({
            select: ()=>({
                    eq: ()=>({
                            maybeSingle: async ()=>({
                                    data: null,
                                    error: null
                                }),
                            single: async ()=>({
                                    data: null,
                                    error: null
                                }),
                            order: ()=>({
                                    maybeSingle: async ()=>({
                                            data: null,
                                            error: null
                                        }),
                                    single: async ()=>({
                                            data: null,
                                            error: null
                                        }),
                                    then: (cb)=>cb({
                                            data: [],
                                            error: null
                                        })
                                }),
                            then: (cb)=>cb({
                                    data: [],
                                    error: null
                                })
                        })
                }),
            insert: ()=>({
                    select: ()=>({
                            single: async ()=>({
                                    data: null,
                                    error: null
                                })
                        }),
                    then: (cb)=>cb({
                            data: null,
                            error: null
                        })
                }),
            update: ()=>({
                    eq: ()=>({
                            eq: ()=>({
                                    select: ()=>({
                                            single: async ()=>({
                                                    data: null,
                                                    error: null
                                                })
                                        })
                                }),
                            select: ()=>({
                                    single: async ()=>({
                                            data: null,
                                            error: null
                                        })
                                })
                        })
                }),
            upsert: ()=>({
                    select: ()=>({
                            single: async ()=>({
                                    data: null,
                                    error: null
                                })
                        })
                }),
            delete: ()=>({
                    eq: ()=>({
                            eq: ()=>({
                                    then: (cb)=>cb({
                                            data: null,
                                            error: null
                                        })
                                })
                        })
                })
        }),
    rpc: async ()=>({
            data: null,
            error: null
        }),
    channel: ()=>({
            on: ()=>({
                    subscribe: ()=>({
                            unsubscribe: ()=>{}
                        })
                }),
            subscribe: ()=>({
                    unsubscribe: ()=>{}
                })
        }),
    removeChannel: ()=>{},
    storage: {
        from: ()=>({
                upload: async ()=>({
                        data: null,
                        error: null
                    }),
                getPublicUrl: ()=>({
                        data: {
                            publicUrl: ''
                        }
                    })
            })
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useBusinessPassword.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBusinessPassword",
    ()=>useBusinessPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useBusinessPassword = ()=>{
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    // Session storage key for verified businesses
    const VERIFIED_BUSINESSES_KEY = 'verified_businesses';
    const getVerifiedBusinesses = ()=>{
        try {
            const stored = sessionStorage.getItem(VERIFIED_BUSINESSES_KEY);
            return stored ? new Set(JSON.parse(stored)) : new Set();
        } catch  {
            return new Set();
        }
    };
    const setBusinessVerified = (businessId)=>{
        try {
            const verified = getVerifiedBusinesses();
            verified.add(businessId);
            sessionStorage.setItem(VERIFIED_BUSINESSES_KEY, JSON.stringify(Array.from(verified)));
        } catch (error) {
            console.error('Error storing verified business:', error);
        }
    };
    const isBusinessVerified = (businessId)=>{
        return getVerifiedBusinesses().has(businessId);
    };
    const clearVerifiedBusinesses = ()=>{
        try {
            sessionStorage.removeItem(VERIFIED_BUSINESSES_KEY);
        } catch (error) {
            console.error('Error clearing verified businesses:', error);
        }
    };
    const setBusinessPassword = async (businessId, password)=>{
        setIsLoading(true);
        try {
            console.log('Setting password for business:', businessId);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].functions.invoke('hash-business-password', {
                body: {
                    businessId,
                    password
                }
            });
            console.log('Edge function response:', {
                data,
                error
            });
            if (error) {
                console.error('Error setting business password:', error);
                toast({
                    title: "Failed to Set Password",
                    description: error.message || "Please try again later.",
                    variant: "destructive"
                });
                return false;
            }
            // Check if the response indicates success
            if (data?.success === true) {
                toast({
                    title: "Password Set Successfully",
                    description: "Your business is now password protected."
                });
                return true;
            } else {
                console.error('Password setting failed:', data);
                const errorMessage = data?.error || data?.details || "Please try again later.";
                toast({
                    title: "Failed to Set Password",
                    description: errorMessage,
                    variant: "destructive"
                });
                return false;
            }
        } catch (error) {
            console.error('Error setting business password:', error);
            toast({
                title: "Failed to Set Password",
                description: "An unexpected error occurred. Please try again later.",
                variant: "destructive"
            });
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const verifyBusinessPassword = async (businessId, password)=>{
        setIsLoading(true);
        try {
            console.log('Verifying password for business:', businessId);
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].functions.invoke('verify-business-password', {
                body: {
                    businessId,
                    password
                }
            });
            console.log('Verification response:', {
                data,
                error
            });
            if (error) {
                console.error('Error verifying business password:', error);
                toast({
                    title: "Verification Failed",
                    description: "Could not verify password. Please try again.",
                    variant: "destructive"
                });
                return false;
            }
            const isVerified = data?.verified === true;
            if (isVerified) {
                setBusinessVerified(businessId);
                console.log('Password verified successfully for business:', businessId);
            } else {
                console.log('Password verification failed for business:', businessId);
                toast({
                    title: "Incorrect Password",
                    description: "The password you entered is incorrect.",
                    variant: "destructive"
                });
            }
            return isVerified;
        } catch (error) {
            console.error('Error verifying business password:', error);
            toast({
                title: "Verification Error",
                description: "An unexpected error occurred during verification.",
                variant: "destructive"
            });
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const removeBusinessPassword = async (businessId)=>{
        setIsLoading(true);
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('business_locations').update({
                switch_password_hash: null
            }).eq('id', businessId);
            if (error) {
                console.error('Error removing business password:', error);
                toast({
                    title: "Failed to Remove Password",
                    description: error.message || "Please try again later.",
                    variant: "destructive"
                });
                return false;
            }
            // Remove from verified list since password is removed
            const verified = getVerifiedBusinesses();
            verified.delete(businessId);
            sessionStorage.setItem(VERIFIED_BUSINESSES_KEY, JSON.stringify(Array.from(verified)));
            return true;
        } catch (error) {
            console.error('Error removing business password:', error);
            toast({
                title: "Failed to Remove Password",
                description: "Please try again later.",
                variant: "destructive"
            });
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    return {
        isLoading,
        setBusinessPassword,
        verifyBusinessPassword,
        removeBusinessPassword,
        isBusinessVerified,
        setBusinessVerified,
        clearVerifiedBusinesses
    };
};
_s(useBusinessPassword, "jE+b7crzsfsLGk3pelWoNo4DYjU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:910bed [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBusinessLocationsAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40005a92f66b2acbec01d6176fad0740279eec7b11":"getBusinessLocationsAction"},"src/app/actions/business.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40005a92f66b2acbec01d6176fad0740279eec7b11", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getBusinessLocationsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1c2luZXNzTG9jYXRpb25zQWN0aW9uKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJyYW5jaGVzID0gYXdhaXQgZGIuYnJhbmNoLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGFkbWluSWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FzYydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUaGUgcHJldmlvdXMgY29udGV4dCBleHBlY3RlZCBhbiBpc19kZWZhdWx0IGZpZWxkLCBidXQgaXQncyBub3QgaW4gdGhlIG1vZGVsLlxyXG4gICAgICAgIC8vIFdlIHdpbGwgbWFrZSB0aGUgZmlyc3QgYnJhbmNoIHRoZSBkZWZhdWx0IGlmIGlzX2RlZmF1bHQgaXMgbWlzc2luZy5cclxuICAgICAgICByZXR1cm4gYnJhbmNoZXMubWFwKChiOiBhbnksIGluZGV4OiBudW1iZXIpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBiLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBiLm5hbWUsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGIuYWRtaW5JZCxcclxuICAgICAgICAgICAgaXNfZGVmYXVsdDogaW5kZXggPT09IDAsIC8vIE1vY2tpbmcgaXNfZGVmYXVsdFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBiLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBiLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBzd2l0Y2hfcGFzc3dvcmRfaGFzaDogYi5hY2Nlc3NQYXNzd29yZFxyXG4gICAgICAgIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYnVzaW5lc3MgbG9jYXRpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdXNpbmVzc0FjdGlvbih1c2VySWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IGRiLmJyYW5jaC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246ICdNYWluIExvY2F0aW9uJywgLy8gRGVmYXVsdCBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgYWRtaW5JZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaC5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGJyYW5jaC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogYnJhbmNoLmFkbWluSWQsXHJcbiAgICAgICAgICAgICAgICBpc19kZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGJyYW5jaC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IGJyYW5jaC51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHN3aXRjaF9wYXNzd29yZF9oYXNoOiBicmFuY2guYWNjZXNzUGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1c2luZXNzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIGJ1c2luZXNzJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQnVzaW5lc3NBY3Rpb24oaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBicmFuY2ggPSBhd2FpdCBkYi5icmFuY2gudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIGFkbWluSWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaC5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGJyYW5jaC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogYnJhbmNoLmFkbWluSWQsXHJcbiAgICAgICAgICAgICAgICBpc19kZWZhdWx0OiBmYWxzZSwgLy8gVXBkYXRlIGxvZ2ljIGhhbmRsZXMgZGVmYXVsdG5lc3MgZWxzZXdoZXJlXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBicmFuY2guY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBicmFuY2gudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hfcGFzc3dvcmRfaGFzaDogYnJhbmNoLmFjY2Vzc1Bhc3N3b3JkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBidXNpbmVzczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBidXNpbmVzcycgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJ1c2luZXNzQWN0aW9uKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmJyYW5jaC5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgYWRtaW5JZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBidXNpbmVzczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGRlbGV0ZSBidXNpbmVzcycgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBTQUtzQix1TUFBQSJ9
}),
"[project]/src/app/actions/data:eb490b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBusinessAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6005018ab89e8f86bc11176f23c22e59734adacf18":"createBusinessAction"},"src/app/actions/business.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6005018ab89e8f86bc11176f23c22e59734adacf18", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createBusinessAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1c2luZXNzTG9jYXRpb25zQWN0aW9uKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJyYW5jaGVzID0gYXdhaXQgZGIuYnJhbmNoLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGFkbWluSWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FzYydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUaGUgcHJldmlvdXMgY29udGV4dCBleHBlY3RlZCBhbiBpc19kZWZhdWx0IGZpZWxkLCBidXQgaXQncyBub3QgaW4gdGhlIG1vZGVsLlxyXG4gICAgICAgIC8vIFdlIHdpbGwgbWFrZSB0aGUgZmlyc3QgYnJhbmNoIHRoZSBkZWZhdWx0IGlmIGlzX2RlZmF1bHQgaXMgbWlzc2luZy5cclxuICAgICAgICByZXR1cm4gYnJhbmNoZXMubWFwKChiOiBhbnksIGluZGV4OiBudW1iZXIpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBiLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBiLm5hbWUsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGIuYWRtaW5JZCxcclxuICAgICAgICAgICAgaXNfZGVmYXVsdDogaW5kZXggPT09IDAsIC8vIE1vY2tpbmcgaXNfZGVmYXVsdFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBiLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBiLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBzd2l0Y2hfcGFzc3dvcmRfaGFzaDogYi5hY2Nlc3NQYXNzd29yZFxyXG4gICAgICAgIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYnVzaW5lc3MgbG9jYXRpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdXNpbmVzc0FjdGlvbih1c2VySWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IGRiLmJyYW5jaC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246ICdNYWluIExvY2F0aW9uJywgLy8gRGVmYXVsdCBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgYWRtaW5JZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaC5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGJyYW5jaC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogYnJhbmNoLmFkbWluSWQsXHJcbiAgICAgICAgICAgICAgICBpc19kZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGJyYW5jaC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IGJyYW5jaC51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHN3aXRjaF9wYXNzd29yZF9oYXNoOiBicmFuY2guYWNjZXNzUGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1c2luZXNzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIGJ1c2luZXNzJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQnVzaW5lc3NBY3Rpb24oaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBicmFuY2ggPSBhd2FpdCBkYi5icmFuY2gudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIGFkbWluSWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaC5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGJyYW5jaC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogYnJhbmNoLmFkbWluSWQsXHJcbiAgICAgICAgICAgICAgICBpc19kZWZhdWx0OiBmYWxzZSwgLy8gVXBkYXRlIGxvZ2ljIGhhbmRsZXMgZGVmYXVsdG5lc3MgZWxzZXdoZXJlXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBicmFuY2guY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBicmFuY2gudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hfcGFzc3dvcmRfaGFzaDogYnJhbmNoLmFjY2Vzc1Bhc3N3b3JkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBidXNpbmVzczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBidXNpbmVzcycgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJ1c2luZXNzQWN0aW9uKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmJyYW5jaC5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgYWRtaW5JZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBidXNpbmVzczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGRlbGV0ZSBidXNpbmVzcycgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQXNDc0IsaU1BQUEifQ==
}),
"[project]/src/app/actions/data:fe8204 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateBusinessAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"70af216f9788edf317f8062c659bbd2cdd402f9894":"updateBusinessAction"},"src/app/actions/business.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("70af216f9788edf317f8062c659bbd2cdd402f9894", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateBusinessAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1c2luZXNzTG9jYXRpb25zQWN0aW9uKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJyYW5jaGVzID0gYXdhaXQgZGIuYnJhbmNoLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGFkbWluSWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FzYydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUaGUgcHJldmlvdXMgY29udGV4dCBleHBlY3RlZCBhbiBpc19kZWZhdWx0IGZpZWxkLCBidXQgaXQncyBub3QgaW4gdGhlIG1vZGVsLlxyXG4gICAgICAgIC8vIFdlIHdpbGwgbWFrZSB0aGUgZmlyc3QgYnJhbmNoIHRoZSBkZWZhdWx0IGlmIGlzX2RlZmF1bHQgaXMgbWlzc2luZy5cclxuICAgICAgICByZXR1cm4gYnJhbmNoZXMubWFwKChiOiBhbnksIGluZGV4OiBudW1iZXIpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBiLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBiLm5hbWUsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGIuYWRtaW5JZCxcclxuICAgICAgICAgICAgaXNfZGVmYXVsdDogaW5kZXggPT09IDAsIC8vIE1vY2tpbmcgaXNfZGVmYXVsdFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBiLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBiLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBzd2l0Y2hfcGFzc3dvcmRfaGFzaDogYi5hY2Nlc3NQYXNzd29yZFxyXG4gICAgICAgIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYnVzaW5lc3MgbG9jYXRpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdXNpbmVzc0FjdGlvbih1c2VySWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IGRiLmJyYW5jaC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246ICdNYWluIExvY2F0aW9uJywgLy8gRGVmYXVsdCBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgYWRtaW5JZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaC5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGJyYW5jaC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogYnJhbmNoLmFkbWluSWQsXHJcbiAgICAgICAgICAgICAgICBpc19kZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGJyYW5jaC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IGJyYW5jaC51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHN3aXRjaF9wYXNzd29yZF9oYXNoOiBicmFuY2guYWNjZXNzUGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1c2luZXNzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIGJ1c2luZXNzJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQnVzaW5lc3NBY3Rpb24oaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBicmFuY2ggPSBhd2FpdCBkYi5icmFuY2gudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIGFkbWluSWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaC5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGJyYW5jaC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogYnJhbmNoLmFkbWluSWQsXHJcbiAgICAgICAgICAgICAgICBpc19kZWZhdWx0OiBmYWxzZSwgLy8gVXBkYXRlIGxvZ2ljIGhhbmRsZXMgZGVmYXVsdG5lc3MgZWxzZXdoZXJlXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBicmFuY2guY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBicmFuY2gudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hfcGFzc3dvcmRfaGFzaDogYnJhbmNoLmFjY2Vzc1Bhc3N3b3JkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBidXNpbmVzczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBidXNpbmVzcycgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJ1c2luZXNzQWN0aW9uKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmJyYW5jaC5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgYWRtaW5JZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBidXNpbmVzczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGRlbGV0ZSBidXNpbmVzcycgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQWtFc0IsaU1BQUEifQ==
}),
"[project]/src/app/actions/data:0065c0 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteBusinessAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60db80bf399e1ac0f31348663c234cf0e0fee5af43":"deleteBusinessAction"},"src/app/actions/business.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60db80bf399e1ac0f31348663c234cf0e0fee5af43", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteBusinessAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1c2luZXNzTG9jYXRpb25zQWN0aW9uKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJyYW5jaGVzID0gYXdhaXQgZGIuYnJhbmNoLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGFkbWluSWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiAnZGVzYydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FzYydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUaGUgcHJldmlvdXMgY29udGV4dCBleHBlY3RlZCBhbiBpc19kZWZhdWx0IGZpZWxkLCBidXQgaXQncyBub3QgaW4gdGhlIG1vZGVsLlxyXG4gICAgICAgIC8vIFdlIHdpbGwgbWFrZSB0aGUgZmlyc3QgYnJhbmNoIHRoZSBkZWZhdWx0IGlmIGlzX2RlZmF1bHQgaXMgbWlzc2luZy5cclxuICAgICAgICByZXR1cm4gYnJhbmNoZXMubWFwKChiOiBhbnksIGluZGV4OiBudW1iZXIpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiBiLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBiLm5hbWUsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGIuYWRtaW5JZCxcclxuICAgICAgICAgICAgaXNfZGVmYXVsdDogaW5kZXggPT09IDAsIC8vIE1vY2tpbmcgaXNfZGVmYXVsdFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBiLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBiLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBzd2l0Y2hfcGFzc3dvcmRfaGFzaDogYi5hY2Nlc3NQYXNzd29yZFxyXG4gICAgICAgIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYnVzaW5lc3MgbG9jYXRpb25zOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVCdXNpbmVzc0FjdGlvbih1c2VySWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IGRiLmJyYW5jaC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb246ICdNYWluIExvY2F0aW9uJywgLy8gRGVmYXVsdCBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgYWRtaW5JZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaC5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGJyYW5jaC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogYnJhbmNoLmFkbWluSWQsXHJcbiAgICAgICAgICAgICAgICBpc19kZWZhdWx0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGJyYW5jaC5jcmVhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRfYXQ6IGJyYW5jaC51cGRhdGVkQXQudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHN3aXRjaF9wYXNzd29yZF9oYXNoOiBicmFuY2guYWNjZXNzUGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGJ1c2luZXNzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gY3JlYXRlIGJ1c2luZXNzJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQnVzaW5lc3NBY3Rpb24oaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBicmFuY2ggPSBhd2FpdCBkYi5icmFuY2gudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIGFkbWluSWQ6IHVzZXJJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaC5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGJyYW5jaC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogYnJhbmNoLmFkbWluSWQsXHJcbiAgICAgICAgICAgICAgICBpc19kZWZhdWx0OiBmYWxzZSwgLy8gVXBkYXRlIGxvZ2ljIGhhbmRsZXMgZGVmYXVsdG5lc3MgZWxzZXdoZXJlXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkX2F0OiBicmFuY2guY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBicmFuY2gudXBkYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hfcGFzc3dvcmRfaGFzaDogYnJhbmNoLmFjY2Vzc1Bhc3N3b3JkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBidXNpbmVzczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBidXNpbmVzcycgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUJ1c2luZXNzQWN0aW9uKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmJyYW5jaC5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgYWRtaW5JZDogdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBidXNpbmVzczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGRlbGV0ZSBidXNpbmVzcycgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im9TQWdHc0IsaU1BQUEifQ==
}),
"[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BusinessProvider",
    ()=>BusinessProvider,
    "useBusiness",
    ()=>useBusiness
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessPassword$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessPassword.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$910bed__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:910bed [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$eb490b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:eb490b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fe8204__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:fe8204 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0065c0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:0065c0 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const BusinessContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useBusiness = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BusinessContext);
    if (context === undefined) {
        throw new Error('useBusiness must be used within a BusinessProvider');
    }
    return context;
};
_s(useBusiness, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const BusinessProvider = ({ children })=>{
    _s1();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [currentBusiness, setCurrentBusiness] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [businessLocations, setBusinessLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isBusinessVerified } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessPassword$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessPassword"])();
    // Fetch location limit directly to avoid circular dependency with useOnboarding
    const { data: globalStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'globalAccountStatus',
            user?.id
        ],
        queryFn: {
            "BusinessProvider.useQuery": async ()=>{
                if (!user?.id) return null;
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('get_my_account_status');
                if (error) return {
                    location_limit: 3
                };
                return data?.[0] || {
                    location_limit: 3
                };
            }
        }["BusinessProvider.useQuery"],
        enabled: !!user?.id,
        staleTime: 5 * 60_000
    });
    const locationLimit = globalStatus?.location_limit || 3;
    const loadBusinessLocations = async ()=>{
        if (!user) {
            setIsLoading(false);
            setError(null);
            setCurrentBusiness(null);
            setBusinessLocations([]);
            return;
        }
        try {
            setIsLoading(true);
            setError(null);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$910bed__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getBusinessLocationsAction"])(user.id);
            if (!data) {
                throw new Error('Failed to load locations');
            }
            setBusinessLocations(data || []);
            // Always try to set a current business if we have locations
            if (data && data.length > 0) {
                // First check localStorage for saved business
                const savedBusinessId = localStorage.getItem('currentBusinessId');
                let businessToSet = data.find((b)=>b.id === savedBusinessId);
                // If no saved business or saved business not found, use default or first
                if (!businessToSet) {
                    businessToSet = data.find((b)=>b.is_default) || data[0];
                }
                if (businessToSet) {
                    setCurrentBusiness(businessToSet);
                    localStorage.setItem('currentBusinessId', businessToSet.id);
                }
            } else {
                // No business locations found, clear current business
                setCurrentBusiness(null);
                localStorage.removeItem('currentBusinessId');
            }
        } catch (error) {
            console.error('Error loading business locations:', error);
            setError('Failed to load business data');
            setCurrentBusiness(null);
            setBusinessLocations([]);
        } finally{
            setIsLoading(false);
        }
    };
    const switchBusiness = (businessId, onPasswordPrompt)=>{
        const business = businessLocations.find((b)=>b.id === businessId);
        if (!business) {
            console.error('Business not found:', businessId);
            return;
        }
        // If business has password protection and is not verified in this session
        if (business.switch_password_hash && !isBusinessVerified(businessId)) {
            if (onPasswordPrompt) {
                onPasswordPrompt(businessId, business.name, ()=>{
                    // This callback is called after successful password verification
                    setCurrentBusiness(business);
                    localStorage.setItem('currentBusinessId', business.id);
                });
                return;
            } else {
                console.warn('Password required but no prompt handler provided');
                return;
            }
        }
        // No password protection or already verified
        setCurrentBusiness(business);
        localStorage.setItem('currentBusinessId', business.id);
    };
    const createBusiness = async (name)=>{
        if (!user) {
            console.error('No user found when creating business');
            return null;
        }
        try {
            // Check location limit
            if (businessLocations.length >= locationLimit) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "Limit Reached",
                    description: `You have reached the maximum allowed limit of ${locationLimit} locations. Please contact support to increase your limit.`,
                    variant: "destructive"
                });
                return null;
            }
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$eb490b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createBusinessAction"])(user.id, name.trim());
            if (!response.success || !response.data) {
                console.error('Error creating business:', response.error);
                throw new Error(response.error || 'Unknown error');
            }
            const data = response.data;
            if (data) {
                const newBusiness = {
                    id: data.id,
                    name: data.name,
                    is_default: data.is_default,
                    created_at: data.created_at,
                    updated_at: data.updated_at,
                    switch_password_hash: data.switch_password_hash
                };
                setBusinessLocations((prev)=>[
                        ...prev,
                        newBusiness
                    ]);
                // If this is the first business or it's set as default, make it current
                if (businessLocations.length === 0 || newBusiness.is_default) {
                    setCurrentBusiness(newBusiness);
                    localStorage.setItem('currentBusinessId', newBusiness.id);
                }
                return newBusiness;
            }
            return null;
        } catch (error) {
            console.error('Error creating business:', error);
            return null;
        }
    };
    const updateBusiness = async (id, name)=>{
        if (!user) return false;
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$fe8204__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateBusinessAction"])(id, user.id, name);
            if (!response.success) {
                throw new Error(response.error);
            }
            const data = response.data;
            if (data) {
                const updatedBusiness = {
                    id: data.id,
                    name: data.name,
                    is_default: data.is_default,
                    created_at: data.created_at,
                    updated_at: data.updated_at,
                    switch_password_hash: data.switch_password_hash
                };
                setBusinessLocations((prev)=>prev.map((b)=>b.id === id ? updatedBusiness : b));
                if (currentBusiness?.id === id) {
                    setCurrentBusiness(updatedBusiness);
                }
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error updating business:', error);
            return false;
        }
    };
    const deleteBusiness = async (id)=>{
        if (!user) return false;
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0065c0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteBusinessAction"])(id, user.id);
            if (!response.success) throw new Error(response.error);
            setBusinessLocations((prev)=>prev.filter((b)=>b.id !== id));
            // If deleted business was current, switch to default or first available
            if (currentBusiness?.id === id) {
                const remaining = businessLocations.filter((b)=>b.id !== id);
                const defaultBusiness = remaining.find((b)=>b.is_default);
                const nextBusiness = defaultBusiness || remaining[0] || null;
                setCurrentBusiness(nextBusiness);
                if (nextBusiness) {
                    localStorage.setItem('currentBusinessId', nextBusiness.id);
                } else {
                    localStorage.removeItem('currentBusinessId');
                }
            }
            return true;
        } catch (error) {
            console.error('Error deleting business:', error);
            return false;
        }
    };
    const resetBusiness = async (id)=>{
        if (!user) {
            console.error('No user found when resetting business');
            return false;
        }
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('reset_business_location', {
                location_uuid: id,
                user_uuid: user.id
            });
            if (error) {
                console.error('Error from reset function:', error);
                throw error;
            }
            // Reload business locations to refresh the data
            await loadBusinessLocations();
            return true;
        } catch (error) {
            console.error('Error resetting business:', error);
            return false;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BusinessProvider.useEffect": ()=>{
            if (user) {
                loadBusinessLocations();
            } else {
                setCurrentBusiness(null);
                setBusinessLocations([]);
                setIsLoading(false);
                setError(null);
                localStorage.removeItem('currentBusinessId');
            }
        }
    }["BusinessProvider.useEffect"], [
        user?.id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BusinessContext.Provider, {
        value: {
            currentBusiness,
            businessLocations,
            switchBusiness,
            loadBusinessLocations,
            createBusiness,
            updateBusiness,
            deleteBusiness,
            resetBusiness,
            isLoading,
            error,
            locationLimit
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/BusinessContext.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(BusinessProvider, "RJCKiqTSGZ1Je76V/WyiRGbKulo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessPassword$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessPassword"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = BusinessProvider;
var _c;
__turbopack_context__.k.register(_c, "BusinessProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:bb962e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProfilesAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40d50c4c6f775480f87632bcd725fb979b90a28bd1":"getProfilesAction"},"src/app/actions/profiles.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d50c4c6f775480f87632bcd725fb979b90a28bd1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProfilesAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZmlsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuLy8gUHJvZmlsZXMgU2VydmVyIEFjdGlvbnMgKFVzaW5nIHRoZSBVc2VyIG1vZGVsIGZyb20gUHJpc21hIEF1dGggbWFwKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZXNBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGRiLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICdhc2MnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTWFwIFByaXNtYSBVc2VyIG1vZGVsIHRvIHRoZSBzaGFwZSBleHBlY3RlZCBieSBQcm9maWxlQ29udGV4dFxyXG4gICAgICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2xvY2F0aW9uX2lkOiB1LmJyYW5jaElkLFxyXG4gICAgICAgICAgICBwcm9maWxlX25hbWU6IHUubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lX251bWJlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByb2xlOiB1LnJvbGU/Lm5hbWUgfHwgJ3N0YWZmJyxcclxuICAgICAgICAgICAgcGluOiB1LnBpbiB8fCAnMDAwMCcsXHJcbiAgICAgICAgICAgIHJvbGVfaWQ6IHUucm9sZUlkLFxyXG4gICAgICAgICAgICBidXNpbmVzc19yb2xlOiB1LnJvbGUgPyB7XHJcbiAgICAgICAgICAgICAgICBpZDogdS5yb2xlLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdS5yb2xlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogdS5yb2xlLnBlcm1pc3Npb25zLnJlZHVjZSgoYWNjOiBhbnksIHA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFttb2R1bGUsIGFjdGlvbl0gPSBwLm5hbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY1ttb2R1bGVdKSBhY2NbbW9kdWxlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY1ttb2R1bGVdLnB1c2goYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGlzX2FjdGl2ZTogdS5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgc21zX2NyZWRpdHM6IHUuY3JlZGl0cyxcclxuICAgICAgICAgICAgY3JlYXRlZF9ieTogdS5hZ2VuY3lJZCB8fCB1LmlkLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiB1LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiB1LnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZmlsZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2ZpbGVBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZywgcHJvZmlsZURhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBXZSdsbCBuZWVkIGEgZGVmYXVsdCByb2xlIGlmIG5vdCBwcm92aWRlZFxyXG4gICAgICAgIGxldCByb2xlSWQgPSBwcm9maWxlRGF0YS5yb2xlX2lkO1xyXG5cclxuICAgICAgICBpZiAoIXJvbGVJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Um9sZSA9IGF3YWl0IGRiLnJvbGUuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IG5hbWU6IHByb2ZpbGVEYXRhLnJvbGUgfHwgJ1N0YWZmJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb2xlSWQgPSBkZWZhdWx0Um9sZT8uaWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZURhdGEuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlRGF0YS5wcm9maWxlX25hbWUsXHJcbiAgICAgICAgICAgICAgICBwaW46IHByb2ZpbGVEYXRhLnBpbixcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBwcm9maWxlRGF0YS5pc19hY3RpdmUgIT09IHVuZGVmaW5lZCA/IHByb2ZpbGVEYXRhLmlzX2FjdGl2ZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByb2xlSWQ6IHJvbGVJZCxcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZXMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBuZXdVc2VyIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZmlsZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9maWxlQWN0aW9uKHVzZXJJZDogc3RyaW5nLCB1cGRhdGVEYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge307XHJcbiAgICAgICAgaWYgKHVwZGF0ZURhdGEucHJvZmlsZV9uYW1lICE9PSB1bmRlZmluZWQpIGRhdGEubmFtZSA9IHVwZGF0ZURhdGEucHJvZmlsZV9uYW1lO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLmVtYWlsICE9PSB1bmRlZmluZWQpIGRhdGEuZW1haWwgPSB1cGRhdGVEYXRhLmVtYWlsO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLnBpbiAhPT0gdW5kZWZpbmVkKSBkYXRhLnBpbiA9IHVwZGF0ZURhdGEucGluO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLmlzX2FjdGl2ZSAhPT0gdW5kZWZpbmVkKSBkYXRhLmlzQWN0aXZlID0gdXBkYXRlRGF0YS5pc19hY3RpdmU7XHJcbiAgICAgICAgaWYgKHVwZGF0ZURhdGEucm9sZV9pZCAhPT0gdW5kZWZpbmVkKSBkYXRhLnJvbGVJZCA9IHVwZGF0ZURhdGEucm9sZV9pZDtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBkYi51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGVzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXBkYXRlZFVzZXIgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9maWxlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2ZpbGVBY3Rpb24odXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIudXNlci5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogdXNlcklkIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlcycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9maWxlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvbGVzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgcm9sZXMgPSBhd2FpdCBkYi5yb2xlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIE9SOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBicmFuY2hJZDogYnJhbmNoSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGJyYW5jaElkOiBudWxsIH0gLy8gU3lzdGVtIGRlZmF1bHQgcm9sZXNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcm9sZXMubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiByLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiByLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBidXNpbmVzc19sb2NhdGlvbl9pZDogci5icmFuY2hJZCxcclxuICAgICAgICAgICAgcGVybWlzc2lvbnM6IHIucGVybWlzc2lvbnMucmVkdWNlKChhY2M6IGFueSwgcDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbW9kdWxlLCBhY3Rpb25dID0gcC5uYW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjY1ttb2R1bGVdKSBhY2NbbW9kdWxlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYWNjW21vZHVsZV0ucHVzaChhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXRSb2xlc0FjdGlvblwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0Um9sZUFjdGlvbihicmFuY2hJZDogc3RyaW5nLCByb2xlRGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEZsYXR0ZW4gcGVybWlzc2lvbnMgbWFwIHRvIGZsYXQgYXJyYXkgbGlrZSBcInNhbGVzOnZpZXdcIlxyXG4gICAgICAgIGxldCBmbGF0UGVybWlzc2lvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKHJvbGVEYXRhLnBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvbGVEYXRhLnBlcm1pc3Npb25zKS5mb3JFYWNoKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb2xlRGF0YS5wZXJtaXNzaW9uc1ttb2R1bGVdLmZvckVhY2goKGFjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdFBlcm1pc3Npb25zLnB1c2goYCR7bW9kdWxlfToke2FjdGlvbn1gKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgdGhlc2UgcGVybWlzc2lvbnMgZXhpc3QgaW4gdGhlIERCLCBjcmVhdGUgdGhlbSBpZiBub3RcclxuICAgICAgICBjb25zdCBwZXJtaXNzaW9uUmVjb3JkcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICBmbGF0UGVybWlzc2lvbnMubWFwKGFzeW5jIChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGVybSA9IGF3YWl0IGRiLnBlcm1pc3Npb24uZmluZFVuaXF1ZSh7IHdoZXJlOiB7IG5hbWUgfSB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghcGVybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcm0gPSBhd2FpdCBkYi5wZXJtaXNzaW9uLmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcm07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHVwc2VydGVkO1xyXG5cclxuICAgICAgICBpZiAocm9sZURhdGEuaWQpIHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlXHJcbiAgICAgICAgICAgIHVwc2VydGVkID0gYXdhaXQgZGIucm9sZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHJvbGVEYXRhLmlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcm9sZURhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcm9sZURhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBwZXJtaXNzaW9uUmVjb3Jkcy5tYXAocCA9PiAoeyBpZDogcC5pZCB9KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZVxyXG4gICAgICAgICAgICB1cHNlcnRlZCA9IGF3YWl0IGRiLnJvbGUuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByb2xlRGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByb2xlRGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2hJZDogYnJhbmNoSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogcGVybWlzc2lvblJlY29yZHMubWFwKHAgPT4gKHsgaWQ6IHAuaWQgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZXMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1cHNlcnRlZCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwc2VydGluZyByb2xlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJvbGVBY3Rpb24ocm9sZUlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIucm9sZS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcm9sZUlkIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGVzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJvbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBTXNCLDhMQUFBIn0=
}),
"[project]/src/app/actions/data:06e109 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProfileAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60f8e2a14d674e098db66199edd083580e368f7bbb":"createProfileAction"},"src/app/actions/profiles.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60f8e2a14d674e098db66199edd083580e368f7bbb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProfileAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZmlsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuLy8gUHJvZmlsZXMgU2VydmVyIEFjdGlvbnMgKFVzaW5nIHRoZSBVc2VyIG1vZGVsIGZyb20gUHJpc21hIEF1dGggbWFwKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZXNBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGRiLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICdhc2MnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTWFwIFByaXNtYSBVc2VyIG1vZGVsIHRvIHRoZSBzaGFwZSBleHBlY3RlZCBieSBQcm9maWxlQ29udGV4dFxyXG4gICAgICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2xvY2F0aW9uX2lkOiB1LmJyYW5jaElkLFxyXG4gICAgICAgICAgICBwcm9maWxlX25hbWU6IHUubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lX251bWJlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByb2xlOiB1LnJvbGU/Lm5hbWUgfHwgJ3N0YWZmJyxcclxuICAgICAgICAgICAgcGluOiB1LnBpbiB8fCAnMDAwMCcsXHJcbiAgICAgICAgICAgIHJvbGVfaWQ6IHUucm9sZUlkLFxyXG4gICAgICAgICAgICBidXNpbmVzc19yb2xlOiB1LnJvbGUgPyB7XHJcbiAgICAgICAgICAgICAgICBpZDogdS5yb2xlLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdS5yb2xlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogdS5yb2xlLnBlcm1pc3Npb25zLnJlZHVjZSgoYWNjOiBhbnksIHA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFttb2R1bGUsIGFjdGlvbl0gPSBwLm5hbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY1ttb2R1bGVdKSBhY2NbbW9kdWxlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY1ttb2R1bGVdLnB1c2goYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGlzX2FjdGl2ZTogdS5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgc21zX2NyZWRpdHM6IHUuY3JlZGl0cyxcclxuICAgICAgICAgICAgY3JlYXRlZF9ieTogdS5hZ2VuY3lJZCB8fCB1LmlkLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiB1LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiB1LnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZmlsZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2ZpbGVBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZywgcHJvZmlsZURhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBXZSdsbCBuZWVkIGEgZGVmYXVsdCByb2xlIGlmIG5vdCBwcm92aWRlZFxyXG4gICAgICAgIGxldCByb2xlSWQgPSBwcm9maWxlRGF0YS5yb2xlX2lkO1xyXG5cclxuICAgICAgICBpZiAoIXJvbGVJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Um9sZSA9IGF3YWl0IGRiLnJvbGUuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IG5hbWU6IHByb2ZpbGVEYXRhLnJvbGUgfHwgJ1N0YWZmJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb2xlSWQgPSBkZWZhdWx0Um9sZT8uaWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZURhdGEuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlRGF0YS5wcm9maWxlX25hbWUsXHJcbiAgICAgICAgICAgICAgICBwaW46IHByb2ZpbGVEYXRhLnBpbixcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBwcm9maWxlRGF0YS5pc19hY3RpdmUgIT09IHVuZGVmaW5lZCA/IHByb2ZpbGVEYXRhLmlzX2FjdGl2ZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByb2xlSWQ6IHJvbGVJZCxcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZXMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBuZXdVc2VyIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZmlsZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9maWxlQWN0aW9uKHVzZXJJZDogc3RyaW5nLCB1cGRhdGVEYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge307XHJcbiAgICAgICAgaWYgKHVwZGF0ZURhdGEucHJvZmlsZV9uYW1lICE9PSB1bmRlZmluZWQpIGRhdGEubmFtZSA9IHVwZGF0ZURhdGEucHJvZmlsZV9uYW1lO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLmVtYWlsICE9PSB1bmRlZmluZWQpIGRhdGEuZW1haWwgPSB1cGRhdGVEYXRhLmVtYWlsO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLnBpbiAhPT0gdW5kZWZpbmVkKSBkYXRhLnBpbiA9IHVwZGF0ZURhdGEucGluO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLmlzX2FjdGl2ZSAhPT0gdW5kZWZpbmVkKSBkYXRhLmlzQWN0aXZlID0gdXBkYXRlRGF0YS5pc19hY3RpdmU7XHJcbiAgICAgICAgaWYgKHVwZGF0ZURhdGEucm9sZV9pZCAhPT0gdW5kZWZpbmVkKSBkYXRhLnJvbGVJZCA9IHVwZGF0ZURhdGEucm9sZV9pZDtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBkYi51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGVzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXBkYXRlZFVzZXIgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9maWxlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2ZpbGVBY3Rpb24odXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIudXNlci5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogdXNlcklkIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlcycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9maWxlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvbGVzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgcm9sZXMgPSBhd2FpdCBkYi5yb2xlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIE9SOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBicmFuY2hJZDogYnJhbmNoSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGJyYW5jaElkOiBudWxsIH0gLy8gU3lzdGVtIGRlZmF1bHQgcm9sZXNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcm9sZXMubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiByLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiByLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBidXNpbmVzc19sb2NhdGlvbl9pZDogci5icmFuY2hJZCxcclxuICAgICAgICAgICAgcGVybWlzc2lvbnM6IHIucGVybWlzc2lvbnMucmVkdWNlKChhY2M6IGFueSwgcDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbW9kdWxlLCBhY3Rpb25dID0gcC5uYW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjY1ttb2R1bGVdKSBhY2NbbW9kdWxlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYWNjW21vZHVsZV0ucHVzaChhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXRSb2xlc0FjdGlvblwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0Um9sZUFjdGlvbihicmFuY2hJZDogc3RyaW5nLCByb2xlRGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEZsYXR0ZW4gcGVybWlzc2lvbnMgbWFwIHRvIGZsYXQgYXJyYXkgbGlrZSBcInNhbGVzOnZpZXdcIlxyXG4gICAgICAgIGxldCBmbGF0UGVybWlzc2lvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKHJvbGVEYXRhLnBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvbGVEYXRhLnBlcm1pc3Npb25zKS5mb3JFYWNoKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb2xlRGF0YS5wZXJtaXNzaW9uc1ttb2R1bGVdLmZvckVhY2goKGFjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdFBlcm1pc3Npb25zLnB1c2goYCR7bW9kdWxlfToke2FjdGlvbn1gKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgdGhlc2UgcGVybWlzc2lvbnMgZXhpc3QgaW4gdGhlIERCLCBjcmVhdGUgdGhlbSBpZiBub3RcclxuICAgICAgICBjb25zdCBwZXJtaXNzaW9uUmVjb3JkcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICBmbGF0UGVybWlzc2lvbnMubWFwKGFzeW5jIChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGVybSA9IGF3YWl0IGRiLnBlcm1pc3Npb24uZmluZFVuaXF1ZSh7IHdoZXJlOiB7IG5hbWUgfSB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghcGVybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcm0gPSBhd2FpdCBkYi5wZXJtaXNzaW9uLmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcm07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHVwc2VydGVkO1xyXG5cclxuICAgICAgICBpZiAocm9sZURhdGEuaWQpIHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlXHJcbiAgICAgICAgICAgIHVwc2VydGVkID0gYXdhaXQgZGIucm9sZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHJvbGVEYXRhLmlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcm9sZURhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcm9sZURhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBwZXJtaXNzaW9uUmVjb3Jkcy5tYXAocCA9PiAoeyBpZDogcC5pZCB9KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZVxyXG4gICAgICAgICAgICB1cHNlcnRlZCA9IGF3YWl0IGRiLnJvbGUuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByb2xlRGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByb2xlRGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2hJZDogYnJhbmNoSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogcGVybWlzc2lvblJlY29yZHMubWFwKHAgPT4gKHsgaWQ6IHAuaWQgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZXMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1cHNlcnRlZCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwc2VydGluZyByb2xlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJvbGVBY3Rpb24ocm9sZUlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIucm9sZS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcm9sZUlkIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGVzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJvbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBd0RzQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:39e74e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProfileAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60ae65f6559e612c909bafb9631ac255bad39d950e":"updateProfileAction"},"src/app/actions/profiles.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60ae65f6559e612c909bafb9631ac255bad39d950e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProfileAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZmlsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuLy8gUHJvZmlsZXMgU2VydmVyIEFjdGlvbnMgKFVzaW5nIHRoZSBVc2VyIG1vZGVsIGZyb20gUHJpc21hIEF1dGggbWFwKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZXNBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGRiLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICdhc2MnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTWFwIFByaXNtYSBVc2VyIG1vZGVsIHRvIHRoZSBzaGFwZSBleHBlY3RlZCBieSBQcm9maWxlQ29udGV4dFxyXG4gICAgICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2xvY2F0aW9uX2lkOiB1LmJyYW5jaElkLFxyXG4gICAgICAgICAgICBwcm9maWxlX25hbWU6IHUubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lX251bWJlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByb2xlOiB1LnJvbGU/Lm5hbWUgfHwgJ3N0YWZmJyxcclxuICAgICAgICAgICAgcGluOiB1LnBpbiB8fCAnMDAwMCcsXHJcbiAgICAgICAgICAgIHJvbGVfaWQ6IHUucm9sZUlkLFxyXG4gICAgICAgICAgICBidXNpbmVzc19yb2xlOiB1LnJvbGUgPyB7XHJcbiAgICAgICAgICAgICAgICBpZDogdS5yb2xlLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdS5yb2xlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogdS5yb2xlLnBlcm1pc3Npb25zLnJlZHVjZSgoYWNjOiBhbnksIHA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFttb2R1bGUsIGFjdGlvbl0gPSBwLm5hbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY1ttb2R1bGVdKSBhY2NbbW9kdWxlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY1ttb2R1bGVdLnB1c2goYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGlzX2FjdGl2ZTogdS5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgc21zX2NyZWRpdHM6IHUuY3JlZGl0cyxcclxuICAgICAgICAgICAgY3JlYXRlZF9ieTogdS5hZ2VuY3lJZCB8fCB1LmlkLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiB1LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiB1LnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZmlsZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2ZpbGVBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZywgcHJvZmlsZURhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBXZSdsbCBuZWVkIGEgZGVmYXVsdCByb2xlIGlmIG5vdCBwcm92aWRlZFxyXG4gICAgICAgIGxldCByb2xlSWQgPSBwcm9maWxlRGF0YS5yb2xlX2lkO1xyXG5cclxuICAgICAgICBpZiAoIXJvbGVJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Um9sZSA9IGF3YWl0IGRiLnJvbGUuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IG5hbWU6IHByb2ZpbGVEYXRhLnJvbGUgfHwgJ1N0YWZmJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb2xlSWQgPSBkZWZhdWx0Um9sZT8uaWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZURhdGEuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlRGF0YS5wcm9maWxlX25hbWUsXHJcbiAgICAgICAgICAgICAgICBwaW46IHByb2ZpbGVEYXRhLnBpbixcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBwcm9maWxlRGF0YS5pc19hY3RpdmUgIT09IHVuZGVmaW5lZCA/IHByb2ZpbGVEYXRhLmlzX2FjdGl2ZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByb2xlSWQ6IHJvbGVJZCxcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZXMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBuZXdVc2VyIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZmlsZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9maWxlQWN0aW9uKHVzZXJJZDogc3RyaW5nLCB1cGRhdGVEYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge307XHJcbiAgICAgICAgaWYgKHVwZGF0ZURhdGEucHJvZmlsZV9uYW1lICE9PSB1bmRlZmluZWQpIGRhdGEubmFtZSA9IHVwZGF0ZURhdGEucHJvZmlsZV9uYW1lO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLmVtYWlsICE9PSB1bmRlZmluZWQpIGRhdGEuZW1haWwgPSB1cGRhdGVEYXRhLmVtYWlsO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLnBpbiAhPT0gdW5kZWZpbmVkKSBkYXRhLnBpbiA9IHVwZGF0ZURhdGEucGluO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLmlzX2FjdGl2ZSAhPT0gdW5kZWZpbmVkKSBkYXRhLmlzQWN0aXZlID0gdXBkYXRlRGF0YS5pc19hY3RpdmU7XHJcbiAgICAgICAgaWYgKHVwZGF0ZURhdGEucm9sZV9pZCAhPT0gdW5kZWZpbmVkKSBkYXRhLnJvbGVJZCA9IHVwZGF0ZURhdGEucm9sZV9pZDtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBkYi51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGVzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXBkYXRlZFVzZXIgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9maWxlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2ZpbGVBY3Rpb24odXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIudXNlci5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogdXNlcklkIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlcycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9maWxlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvbGVzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgcm9sZXMgPSBhd2FpdCBkYi5yb2xlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIE9SOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBicmFuY2hJZDogYnJhbmNoSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGJyYW5jaElkOiBudWxsIH0gLy8gU3lzdGVtIGRlZmF1bHQgcm9sZXNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcm9sZXMubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiByLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiByLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBidXNpbmVzc19sb2NhdGlvbl9pZDogci5icmFuY2hJZCxcclxuICAgICAgICAgICAgcGVybWlzc2lvbnM6IHIucGVybWlzc2lvbnMucmVkdWNlKChhY2M6IGFueSwgcDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbW9kdWxlLCBhY3Rpb25dID0gcC5uYW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjY1ttb2R1bGVdKSBhY2NbbW9kdWxlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYWNjW21vZHVsZV0ucHVzaChhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXRSb2xlc0FjdGlvblwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0Um9sZUFjdGlvbihicmFuY2hJZDogc3RyaW5nLCByb2xlRGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEZsYXR0ZW4gcGVybWlzc2lvbnMgbWFwIHRvIGZsYXQgYXJyYXkgbGlrZSBcInNhbGVzOnZpZXdcIlxyXG4gICAgICAgIGxldCBmbGF0UGVybWlzc2lvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKHJvbGVEYXRhLnBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvbGVEYXRhLnBlcm1pc3Npb25zKS5mb3JFYWNoKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb2xlRGF0YS5wZXJtaXNzaW9uc1ttb2R1bGVdLmZvckVhY2goKGFjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdFBlcm1pc3Npb25zLnB1c2goYCR7bW9kdWxlfToke2FjdGlvbn1gKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgdGhlc2UgcGVybWlzc2lvbnMgZXhpc3QgaW4gdGhlIERCLCBjcmVhdGUgdGhlbSBpZiBub3RcclxuICAgICAgICBjb25zdCBwZXJtaXNzaW9uUmVjb3JkcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICBmbGF0UGVybWlzc2lvbnMubWFwKGFzeW5jIChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGVybSA9IGF3YWl0IGRiLnBlcm1pc3Npb24uZmluZFVuaXF1ZSh7IHdoZXJlOiB7IG5hbWUgfSB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghcGVybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcm0gPSBhd2FpdCBkYi5wZXJtaXNzaW9uLmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcm07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHVwc2VydGVkO1xyXG5cclxuICAgICAgICBpZiAocm9sZURhdGEuaWQpIHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlXHJcbiAgICAgICAgICAgIHVwc2VydGVkID0gYXdhaXQgZGIucm9sZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHJvbGVEYXRhLmlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcm9sZURhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcm9sZURhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBwZXJtaXNzaW9uUmVjb3Jkcy5tYXAocCA9PiAoeyBpZDogcC5pZCB9KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZVxyXG4gICAgICAgICAgICB1cHNlcnRlZCA9IGF3YWl0IGRiLnJvbGUuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByb2xlRGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByb2xlRGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2hJZDogYnJhbmNoSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogcGVybWlzc2lvblJlY29yZHMubWFwKHAgPT4gKHsgaWQ6IHAuaWQgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZXMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1cHNlcnRlZCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwc2VydGluZyByb2xlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJvbGVBY3Rpb24ocm9sZUlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIucm9sZS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcm9sZUlkIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGVzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJvbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBdUZzQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:89e0b4 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProfileAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4053a6550dd14e6b0ae223d6221c08521c51b9f8c8":"deleteProfileAction"},"src/app/actions/profiles.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4053a6550dd14e6b0ae223d6221c08521c51b9f8c8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProfileAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZmlsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuLy8gUHJvZmlsZXMgU2VydmVyIEFjdGlvbnMgKFVzaW5nIHRoZSBVc2VyIG1vZGVsIGZyb20gUHJpc21hIEF1dGggbWFwKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZXNBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGRiLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIHJvbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICdhc2MnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTWFwIFByaXNtYSBVc2VyIG1vZGVsIHRvIHRoZSBzaGFwZSBleHBlY3RlZCBieSBQcm9maWxlQ29udGV4dFxyXG4gICAgICAgIHJldHVybiB1c2Vycy5tYXAoKHU6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IHUuaWQsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2xvY2F0aW9uX2lkOiB1LmJyYW5jaElkLFxyXG4gICAgICAgICAgICBwcm9maWxlX25hbWU6IHUubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHUuZW1haWwsXHJcbiAgICAgICAgICAgIHBob25lX251bWJlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByb2xlOiB1LnJvbGU/Lm5hbWUgfHwgJ3N0YWZmJyxcclxuICAgICAgICAgICAgcGluOiB1LnBpbiB8fCAnMDAwMCcsXHJcbiAgICAgICAgICAgIHJvbGVfaWQ6IHUucm9sZUlkLFxyXG4gICAgICAgICAgICBidXNpbmVzc19yb2xlOiB1LnJvbGUgPyB7XHJcbiAgICAgICAgICAgICAgICBpZDogdS5yb2xlLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdS5yb2xlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogdS5yb2xlLnBlcm1pc3Npb25zLnJlZHVjZSgoYWNjOiBhbnksIHA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFttb2R1bGUsIGFjdGlvbl0gPSBwLm5hbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY1ttb2R1bGVdKSBhY2NbbW9kdWxlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY1ttb2R1bGVdLnB1c2goYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGlzX2FjdGl2ZTogdS5pc0FjdGl2ZSxcclxuICAgICAgICAgICAgc21zX2NyZWRpdHM6IHUuY3JlZGl0cyxcclxuICAgICAgICAgICAgY3JlYXRlZF9ieTogdS5hZ2VuY3lJZCB8fCB1LmlkLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiB1LmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiB1LnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZmlsZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2ZpbGVBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZywgcHJvZmlsZURhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBXZSdsbCBuZWVkIGEgZGVmYXVsdCByb2xlIGlmIG5vdCBwcm92aWRlZFxyXG4gICAgICAgIGxldCByb2xlSWQgPSBwcm9maWxlRGF0YS5yb2xlX2lkO1xyXG5cclxuICAgICAgICBpZiAoIXJvbGVJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0Um9sZSA9IGF3YWl0IGRiLnJvbGUuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IG5hbWU6IHByb2ZpbGVEYXRhLnJvbGUgfHwgJ1N0YWZmJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByb2xlSWQgPSBkZWZhdWx0Um9sZT8uaWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZURhdGEuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlRGF0YS5wcm9maWxlX25hbWUsXHJcbiAgICAgICAgICAgICAgICBwaW46IHByb2ZpbGVEYXRhLnBpbixcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBwcm9maWxlRGF0YS5pc19hY3RpdmUgIT09IHVuZGVmaW5lZCA/IHByb2ZpbGVEYXRhLmlzX2FjdGl2ZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByb2xlSWQ6IHJvbGVJZCxcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkOiBicmFuY2hJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZXMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBuZXdVc2VyIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZmlsZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9maWxlQWN0aW9uKHVzZXJJZDogc3RyaW5nLCB1cGRhdGVEYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge307XHJcbiAgICAgICAgaWYgKHVwZGF0ZURhdGEucHJvZmlsZV9uYW1lICE9PSB1bmRlZmluZWQpIGRhdGEubmFtZSA9IHVwZGF0ZURhdGEucHJvZmlsZV9uYW1lO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLmVtYWlsICE9PSB1bmRlZmluZWQpIGRhdGEuZW1haWwgPSB1cGRhdGVEYXRhLmVtYWlsO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLnBpbiAhPT0gdW5kZWZpbmVkKSBkYXRhLnBpbiA9IHVwZGF0ZURhdGEucGluO1xyXG4gICAgICAgIGlmICh1cGRhdGVEYXRhLmlzX2FjdGl2ZSAhPT0gdW5kZWZpbmVkKSBkYXRhLmlzQWN0aXZlID0gdXBkYXRlRGF0YS5pc19hY3RpdmU7XHJcbiAgICAgICAgaWYgKHVwZGF0ZURhdGEucm9sZV9pZCAhPT0gdW5kZWZpbmVkKSBkYXRhLnJvbGVJZCA9IHVwZGF0ZURhdGEucm9sZV9pZDtcclxuXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBkYi51c2VyLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGVzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXBkYXRlZFVzZXIgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9maWxlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2ZpbGVBY3Rpb24odXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIudXNlci5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogdXNlcklkIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9maWxlcycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9maWxlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJvbGVzQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgcm9sZXMgPSBhd2FpdCBkYi5yb2xlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIE9SOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBicmFuY2hJZDogYnJhbmNoSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IGJyYW5jaElkOiBudWxsIH0gLy8gU3lzdGVtIGRlZmF1bHQgcm9sZXNcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcm9sZXMubWFwKChyOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgIGlkOiByLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiByLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBidXNpbmVzc19sb2NhdGlvbl9pZDogci5icmFuY2hJZCxcclxuICAgICAgICAgICAgcGVybWlzc2lvbnM6IHIucGVybWlzc2lvbnMucmVkdWNlKChhY2M6IGFueSwgcDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbbW9kdWxlLCBhY3Rpb25dID0gcC5uYW1lLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjY1ttb2R1bGVdKSBhY2NbbW9kdWxlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYWNjW21vZHVsZV0ucHVzaChhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSwge30pXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXRSb2xlc0FjdGlvblwiLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0Um9sZUFjdGlvbihicmFuY2hJZDogc3RyaW5nLCByb2xlRGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEZsYXR0ZW4gcGVybWlzc2lvbnMgbWFwIHRvIGZsYXQgYXJyYXkgbGlrZSBcInNhbGVzOnZpZXdcIlxyXG4gICAgICAgIGxldCBmbGF0UGVybWlzc2lvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKHJvbGVEYXRhLnBlcm1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvbGVEYXRhLnBlcm1pc3Npb25zKS5mb3JFYWNoKG1vZHVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb2xlRGF0YS5wZXJtaXNzaW9uc1ttb2R1bGVdLmZvckVhY2goKGFjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhdFBlcm1pc3Npb25zLnB1c2goYCR7bW9kdWxlfToke2FjdGlvbn1gKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgdGhlc2UgcGVybWlzc2lvbnMgZXhpc3QgaW4gdGhlIERCLCBjcmVhdGUgdGhlbSBpZiBub3RcclxuICAgICAgICBjb25zdCBwZXJtaXNzaW9uUmVjb3JkcyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICBmbGF0UGVybWlzc2lvbnMubWFwKGFzeW5jIChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGVybSA9IGF3YWl0IGRiLnBlcm1pc3Npb24uZmluZFVuaXF1ZSh7IHdoZXJlOiB7IG5hbWUgfSB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghcGVybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcm0gPSBhd2FpdCBkYi5wZXJtaXNzaW9uLmNyZWF0ZSh7IGRhdGE6IHsgbmFtZSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcm07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHVwc2VydGVkO1xyXG5cclxuICAgICAgICBpZiAocm9sZURhdGEuaWQpIHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlXHJcbiAgICAgICAgICAgIHVwc2VydGVkID0gYXdhaXQgZGIucm9sZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHJvbGVEYXRhLmlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcm9sZURhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcm9sZURhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBwZXJtaXNzaW9uUmVjb3Jkcy5tYXAocCA9PiAoeyBpZDogcC5pZCB9KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZVxyXG4gICAgICAgICAgICB1cHNlcnRlZCA9IGF3YWl0IGRiLnJvbGUuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByb2xlRGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByb2xlRGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2hJZDogYnJhbmNoSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdDogcGVybWlzc2lvblJlY29yZHMubWFwKHAgPT4gKHsgaWQ6IHAuaWQgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvZmlsZXMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1cHNlcnRlZCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwc2VydGluZyByb2xlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJvbGVBY3Rpb24ocm9sZUlkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIucm9sZS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogcm9sZUlkIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2ZpbGVzJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJvbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBNkdzQixnTUFBQSJ9
}),
"[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileProvider",
    ()=>ProfileProvider,
    "useProfiles",
    ()=>useProfiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bb962e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:bb962e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$06e109__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:06e109 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$39e74e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:39e74e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$89e0b4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:89e0b4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
const ProfileContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ProfileProvider = ({ children })=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const userId = user?.id;
    const { currentBusiness, isLoading: businessLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentProfile, setCurrentProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProfileVerified, setIsProfileVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isFirstTimeSetupNeeded, setIsFirstTimeSetupNeeded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Restore verification state from sessionStorage when business and profile are loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileProvider.useEffect": ()=>{
            if (currentBusiness?.id && currentProfile?.id && !isProfileVerified) {
                const verifiedKey = `profileVerified_${currentBusiness.id}_${currentProfile.id}`;
                const isVerified = sessionStorage.getItem(verifiedKey) === 'true';
                if (isVerified) {
                    setIsProfileVerified(true);
                }
            }
        }
    }["ProfileProvider.useEffect"], [
        currentBusiness?.id,
        currentProfile?.id,
        isProfileVerified
    ]);
    const loadProfiles = async ()=>{
        if (!userId || !currentBusiness?.id) return;
        setIsLoading(true);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bb962e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProfilesAction"])(currentBusiness.id);
            setProfiles(data);
        } catch (error) {
            console.error('Error loading profiles:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to load profiles');
        } finally{
            setIsLoading(false);
        }
    };
    const createProfile = async (data)=>{
        if (!userId || !currentBusiness?.id) return null;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$06e109__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProfileAction"])(currentBusiness.id, data);
            if (!result.success) {
                throw new Error(result.error);
            }
            // Re-fetch profiles to get the full joined data (especially business_role)
            await loadProfiles();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Profile "${data.profile_name}" created successfully`);
            return result.data;
        } catch (error) {
            console.error('Error creating profile:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to create profile');
            return null;
        }
    };
    const updateProfile = async (id, data)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$39e74e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProfileAction"])(id, data);
            if (!result.success) throw new Error(result.error);
            // Re-fetch profiles to get the updated joined data
            await loadProfiles();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Profile updated successfully');
            return true;
        } catch (error) {
            console.error('Error updating profile:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to update profile');
            return false;
        }
    };
    const deleteProfile = async (id)=>{
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$89e0b4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProfileAction"])(id);
            if (!result.success) throw new Error(result.error);
            setProfiles((prev)=>prev.filter((profile)=>profile.id !== id));
            if (currentProfile?.id === id) {
                setCurrentProfile(null);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Profile deleted successfully');
            return true;
        } catch (error) {
            console.error('Error deleting profile:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to delete profile');
            return false;
        }
    };
    const toggleProfileStatus = async (id, isActive)=>{
        return updateProfile(id, {
            is_active: isActive
        });
    };
    const verifyPin = async (pin)=>{
        if (!currentProfile) return false;
        if (currentProfile.pin === pin) {
            setIsProfileVerified(true);
            // Save verification to sessionStorage (persists during page reload)
            if (currentBusiness?.id && currentProfile?.id) {
                sessionStorage.setItem(`profileVerified_${currentBusiness.id}_${currentProfile.id}`, 'true');
            }
            // Check if user is using default PIN and hasn't dismissed the setup dialog yet
            if (pin === '0000' && currentBusiness?.id) {
                const dismissedKey = `firstTimeSetupDismissed_${currentBusiness.id}_${currentProfile.id}`;
                const wasDismissed = localStorage.getItem(dismissedKey) === 'true';
                if (!wasDismissed) {
                    setIsFirstTimeSetupNeeded(true);
                }
            }
            return true;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Incorrect PIN');
        return false;
    };
    const changePin = async (oldPin, newPin)=>{
        if (!currentProfile) return false;
        if (currentProfile.pin !== oldPin) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Current PIN is incorrect');
            return false;
        }
        if (newPin.length !== 4 || !/^\d+$/.test(newPin)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('PIN must be 4 digits');
            return false;
        }
        const success = await updateProfile(currentProfile.id, {
            pin: newPin
        });
        if (success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('PIN changed successfully');
            // Clear the first-time setup dismissed flag since PIN is no longer default
            if (currentBusiness?.id && oldPin === '0000') {
                const dismissedKey = `firstTimeSetupDismissed_${currentBusiness.id}_${currentProfile.id}`;
                localStorage.removeItem(dismissedKey);
            }
        }
        return success;
    };
    const resetProfilePin = async (id, newPin)=>{
        // This method is intended for owners/admins to reset PINs without the old one
        if (newPin.length !== 4 || !/^\d+$/.test(newPin)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('PIN must be 4 digits');
            return false;
        }
        const success = await updateProfile(id, {
            pin: newPin
        });
        if (success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('PIN reset successfully');
        }
        return success;
    };
    const logoutProfile = async ()=>{
        // Clear sessionStorage verification for current profile
        if (currentBusiness?.id && currentProfile?.id) {
            sessionStorage.removeItem(`profileVerified_${currentBusiness.id}_${currentProfile.id}`);
        }
        // Clear profile state
        setCurrentProfile(null);
        setIsProfileVerified(false);
        setIsFirstTimeSetupNeeded(false);
        if (currentBusiness?.id) {
            localStorage.removeItem(`currentProfile_${currentBusiness.id}`);
        }
        // Sign out of Supabase session
        await signOut();
    };
    const dismissFirstTimeSetup = ()=>{
        setIsFirstTimeSetupNeeded(false);
        // Remember that user has dismissed this dialog for this profile
        if (currentBusiness?.id && currentProfile?.id) {
            const dismissedKey = `firstTimeSetupDismissed_${currentBusiness.id}_${currentProfile.id}`;
            localStorage.setItem(dismissedKey, 'true');
        }
    };
    const hasPermission = (module, action = 'view')=>{
        if (!currentProfile) return false;
        // Default Owner permission if role field is 'owner' (backward compatibility) OR if the assigned role is named 'Owner'
        if (currentProfile.role === 'owner' || currentProfile.business_role?.name === 'Owner') return true;
        const permissions = currentProfile.business_role?.permissions;
        if (!permissions) {
            // Fallback for default permissions based on the text role field if no business_role is assigned
            if (currentProfile.role === 'manager') {
                // Managers get view/create/edit on most things
                const managerModules = [
                    'sales',
                    'inventory',
                    'customers',
                    'messages',
                    'tasks'
                ];
                if (managerModules.includes(module.toLowerCase())) {
                    return true;
                }
            }
            if (currentProfile.role === 'staff') {
                // Staff get view on most, create on sales/tasks
                if (action === 'view') return true;
                if ([
                    'sales',
                    'tasks'
                ].includes(module.toLowerCase()) && action === 'create') return true;
            }
            return false;
        }
        const modulePermissions = permissions[module.toLowerCase()];
        if (!modulePermissions) return false;
        return modulePermissions.includes(action.toLowerCase());
    };
    // Load profiles when business changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileProvider.useEffect": ()=>{
            console.log('ProfileContext: Business/User changed', {
                businessId: currentBusiness?.id,
                businessLoading,
                userId
            });
            // Reset profile state immediately when business or user changes
            setProfiles([]);
            setCurrentProfile(null);
            setIsProfileVerified(false);
            setIsFirstTimeSetupNeeded(false);
            // If business is still loading, stay in loading state
            if (businessLoading) {
                console.log('ProfileContext: Business still loading, keeping spinner');
                setIsLoading(true);
                return;
            }
            if (currentBusiness?.id) {
                console.log('ProfileContext: Calling loadProfiles');
                loadProfiles();
            } else {
                console.log('ProfileContext: No business found, clearing profiles');
                setIsLoading(false);
            }
        }
    }["ProfileProvider.useEffect"], [
        currentBusiness?.id,
        businessLoading,
        userId
    ]);
    // Load current profile from localStorage or auto-select first profile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileProvider.useEffect": ()=>{
            if (profiles.length > 0 && currentBusiness?.id && !currentProfile) {
                const savedProfileId = localStorage.getItem(`currentProfile_${currentBusiness.id}`);
                if (savedProfileId) {
                    const profile = profiles.find({
                        "ProfileProvider.useEffect.profile": (p)=>p.id === savedProfileId
                    }["ProfileProvider.useEffect.profile"]);
                    if (profile) {
                        console.log(`ProfileContext: Restoring profile ${profile.profile_name} from localStorage`);
                        setCurrentProfile(profile);
                        setIsProfileVerified(false);
                        return;
                    }
                }
                // Auto-select if there is only one profile and none is selected
                if (profiles.length === 1 && !currentProfile) {
                    console.log(`ProfileContext: Auto-selecting single profile ${profiles[0].profile_name}`);
                    handleSetCurrentProfile(profiles[0]);
                } else if (profiles.length > 1 && !currentProfile) {
                    console.log(`ProfileContext: Multiple profiles available (${profiles.length}), waiting for selection`);
                }
            }
        }
    }["ProfileProvider.useEffect"], [
        profiles,
        currentBusiness?.id,
        currentProfile
    ]);
    // Save current profile to localStorage
    const handleSetCurrentProfile = (profile)=>{
        setCurrentProfile(profile);
        setIsProfileVerified(false); // Reset verification on manual switch
        if (currentBusiness?.id) {
            if (profile) {
                localStorage.setItem(`currentProfile_${currentBusiness.id}`, profile.id);
                // Clear verification from sessionStorage when switching profiles
                sessionStorage.removeItem(`profileVerified_${currentBusiness.id}_${profile.id}`);
            } else {
                localStorage.removeItem(`currentProfile_${currentBusiness.id}`);
            }
        }
    };
    // Keep currentProfile in sync with fresh data from profiles list
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileProvider.useEffect": ()=>{
            if (currentProfile && profiles.length > 0) {
                const freshProfile = profiles.find({
                    "ProfileProvider.useEffect.freshProfile": (p)=>p.id === currentProfile.id
                }["ProfileProvider.useEffect.freshProfile"]);
                if (freshProfile) {
                    // Only update if something actually changed to avoid infinite loops
                    const { business_role: oldRole, ...oldData } = currentProfile;
                    const { business_role: newRole, ...newData } = freshProfile;
                    const dataChanged = JSON.stringify(oldData) !== JSON.stringify(newData);
                    const roleChanged = JSON.stringify(oldRole) !== JSON.stringify(newRole);
                    if (dataChanged || roleChanged) {
                        setCurrentProfile(freshProfile);
                    }
                }
            }
        }
    }["ProfileProvider.useEffect"], [
        profiles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileContext.Provider, {
        value: {
            profiles,
            currentProfile,
            isProfileVerified,
            isLoading,
            setCurrentProfile: handleSetCurrentProfile,
            loadProfiles,
            createProfile,
            updateProfile,
            deleteProfile,
            toggleProfileStatus,
            verifyPin,
            changePin,
            resetProfilePin,
            logoutProfile,
            hasPermission,
            isFirstTimeSetupNeeded,
            dismissFirstTimeSetup
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/ProfileContext.tsx",
        lineNumber: 373,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProfileProvider, "ee/tIJfOcNAIGP04+OWwYErSFv0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ProfileProvider;
const useProfiles = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProfileContext);
    if (context === undefined) {
        throw new Error('useProfiles must be used within a ProfileProvider');
    }
    return context;
};
_s1(useProfiles, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ProfileProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Providers({ children }) {
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Providers.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        retry: 1,
                        staleTime: 5 * 60_000,
                        gcTime: 30 * 60_000,
                        refetchOnWindowFocus: false
                    }
                }
            })
    }["Providers.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BusinessProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileProvider"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/Providers.tsx",
                    lineNumber: 28,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Providers.tsx",
                lineNumber: 27,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Providers.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Providers.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(Providers, "wH15XPjr36Ryv7Whq3KQQ1uB/v0=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_59b1bb1e._.js.map