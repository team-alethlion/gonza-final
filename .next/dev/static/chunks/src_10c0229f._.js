(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/UpdateNotificationButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const UpdateNotificationButton = ({ onUpdate, isUpdating })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isMobile ? 'mb-3' : 'mb-4'} w-full`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: onUpdate,
            disabled: isUpdating,
            className: `
          w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold
          ${isMobile ? 'h-10 text-sm' : 'h-12 text-base'}
          transition-all duration-200 shadow-md hover:shadow-lg
          ${isUpdating ? 'opacity-75' : ''}
        `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                    className: `${isMobile ? 'h-4 w-4' : 'h-5 w-5'} mr-2 ${isUpdating ? 'animate-spin' : ''}`
                }, void 0, false, {
                    fileName: "[project]/src/components/UpdateNotificationButton.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isUpdating ? 'UPDATING APP...' : 'NEW FEATURES AVAILABLE, UPDATE APP'
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UpdateNotificationButton.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/UpdateNotificationButton.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UpdateNotificationButton, "zdJ8C3X+YlDYVai5EPOd8CzoqSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = UpdateNotificationButton;
const __TURBOPACK__default__export__ = UpdateNotificationButton;
var _c;
__turbopack_context__.k.register(_c, "UpdateNotificationButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/DashboardSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
;
const DashboardSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-6 md:h-8 w-32 md:w-48 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                            lineNumber: 9,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                        lineNumber: 8,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-8 w-8 md:h-9 md:w-9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                                lineNumber: 12,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-8 w-16 md:h-9 md:w-24"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                                lineNumber: 13,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                        lineNumber: 11,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                lineNumber: 7,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 max-w-4xl",
                children: [
                    ...Array(4)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-10 md:h-12"
                    }, i, false, {
                        fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
                children: [
                    ...Array(6)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-24 md:h-32"
                    }, i, false, {
                        fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 xl:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-64 md:h-80"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                            lineNumber: 34,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                        lineNumber: 33,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "xl:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-64 md:h-80"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                        lineNumber: 36,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-6 w-32"
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                        lineNumber: 43,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    [
                        ...Array(5)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-12"
                        }, i, false, {
                            fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                            lineNumber: 45,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/DashboardSkeleton.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = DashboardSkeleton;
const __TURBOPACK__default__export__ = DashboardSkeleton;
var _c;
__turbopack_context__.k.register(_c, "DashboardSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/DashboardHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const DashboardHeader = ({ pageTitle, isRefreshing, isLoading, onRefresh })=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex justify-between items-center ${isMobile ? 'mb-4' : 'mb-6'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: `${isMobile ? 'text-xl' : 'text-3xl'} font-bold text-sales-dark truncate`,
                children: pageTitle
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/DashboardHeader.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onRefresh,
                                variant: "outline",
                                size: isMobile ? "sm" : "icon",
                                disabled: isRefreshing || isLoading,
                                className: "relative",
                                title: "Update app for latest features and data",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: `h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/DashboardHeader.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Update app"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/dashboard/DashboardHeader.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/dashboard/DashboardHeader.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500 mt-1 hidden md:block",
                                children: "Update App"
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/DashboardHeader.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/DashboardHeader.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>navigate('/new-sale'),
                        className: "gap-2",
                        size: isMobile ? "sm" : "default",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/dashboard/DashboardHeader.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isMobile && "New Sale"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/DashboardHeader.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/DashboardHeader.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/DashboardHeader.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DashboardHeader, "d2Y9RwTI8FQKp3y+ehm0x/+UiVE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = DashboardHeader;
const __TURBOPACK__default__export__ = DashboardHeader;
var _c;
__turbopack_context__.k.register(_c, "DashboardHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/QuickActionButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const QuickActionButtons = ({ onQuickCreate })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isMobile ? 'mb-4' : 'mb-6'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-2 lg:grid-cols-4 gap-4'} max-w-4xl`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>onQuickCreate('Paid'),
                    variant: "outline",
                    className: `gap-2 ${isMobile ? 'h-10 text-xs' : 'h-12'} justify-start`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                            className: "h-4 w-4 text-green-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: isMobile ? 'Receipt' : 'Create Receipt'
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>onQuickCreate('NOT PAID'),
                    variant: "outline",
                    className: `gap-2 ${isMobile ? 'h-10 text-xs' : 'h-12'} justify-start`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "h-4 w-4 text-orange-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: isMobile ? 'Invoice' : 'Create Invoice'
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>onQuickCreate('Installment Sale'),
                    variant: "outline",
                    className: `gap-2 ${isMobile ? 'h-10 text-xs' : 'h-12'} justify-start`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                            className: "h-4 w-4 text-purple-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: isMobile ? 'Installment' : 'Create Installment Sale'
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>onQuickCreate('Quote'),
                    variant: "outline",
                    className: `gap-2 ${isMobile ? 'h-10 text-xs' : 'h-12'} justify-start`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                            className: "h-4 w-4 text-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: isMobile ? 'Quote' : 'Create Quotation'
                        }, void 0, false, {
                            fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/QuickActionButtons.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(QuickActionButtons, "zdJ8C3X+YlDYVai5EPOd8CzoqSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = QuickActionButtons;
const __TURBOPACK__default__export__ = QuickActionButtons;
var _c;
__turbopack_context__.k.register(_c, "QuickActionButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BusinessSettingsCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
;
;
;
;
;
const BusinessSettingsCard = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "mb-6 border-primary/20 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-xl text-sales-primary",
                        children: "Setup Your Business Details First"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BusinessSettingsCard.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        children: "Set up your business details to personalize your sales records and receipts"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BusinessSettingsCard.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BusinessSettingsCard.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Adding your business name, contact information, and preferred currency will ensure your sales records and customer receipts display your correct business information."
                }, void 0, false, {
                    fileName: "[project]/src/components/BusinessSettingsCard.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/BusinessSettingsCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    variant: "secondary",
                    className: "gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                        to: "/settings",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/BusinessSettingsCard.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Configure Settings"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BusinessSettingsCard.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/BusinessSettingsCard.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/BusinessSettingsCard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BusinessSettingsCard.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BusinessSettingsCard;
const __TURBOPACK__default__export__ = BusinessSettingsCard;
var _c;
__turbopack_context__.k.register(_c, "BusinessSettingsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/WelcomeState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BusinessSettingsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BusinessSettingsCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const WelcomeState = ()=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BusinessSettingsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/dashboard/WelcomeState.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg md:text-xl lg:text-2xl font-semibold text-sales-primary mb-4",
                children: "Welcome to Your Sales Tracker"
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/WelcomeState.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-4 md:mb-6 lg:mb-8 max-w-lg mx-auto text-sm md:text-base",
                children: "Start by creating your first sale record. Once you have sales data, you'll see analytics and insights here on your dashboard."
            }, void 0, false, {
                fileName: "[project]/src/components/dashboard/WelcomeState.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>navigate('/new-sale'),
                size: isMobile ? "default" : "lg",
                className: "gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/dashboard/WelcomeState.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Record Your First Sale"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/dashboard/WelcomeState.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/dashboard/WelcomeState.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(WelcomeState, "d2Y9RwTI8FQKp3y+ehm0x/+UiVE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = WelcomeState;
const __TURBOPACK__default__export__ = WelcomeState;
var _c;
__turbopack_context__.k.register(_c, "WelcomeState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:b8cf71 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBusinessSettingsAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40e10c069514f306d97842d59c289da46a20add653":"getBusinessSettingsAction"},"src/app/actions/business-settings.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40e10c069514f306d97842d59c289da46a20add653", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getBusinessSettingsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3Mtc2V0dGluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1c2luZXNzU2V0dGluZ3NBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGRiLmJyYW5jaFNldHRpbmdzLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogc2V0dGluZ3MuaWQsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX25hbWU6IHNldHRpbmdzLmJ1c2luZXNzTmFtZSxcclxuICAgICAgICAgICAgYnVzaW5lc3NfYWRkcmVzczogc2V0dGluZ3MuYWRkcmVzcyxcclxuICAgICAgICAgICAgYnVzaW5lc3NfcGhvbmU6IHNldHRpbmdzLnBob25lLFxyXG4gICAgICAgICAgICBidXNpbmVzc19lbWFpbDogc2V0dGluZ3MuZW1haWwsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2xvZ286IHNldHRpbmdzLmxvZ28sXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBzZXR0aW5ncy5jdXJyZW5jeSxcclxuICAgICAgICAgICAgc2lnbmF0dXJlOiBzZXR0aW5ncy5zaWduYXR1cmVJbWFnZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHNldHRpbmdzLm1ldGFkYXRhIHx8IHt9XHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYnVzaW5lc3Mgc2V0dGluZ3M6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0QnVzaW5lc3NTZXR0aW5nc0FjdGlvbihicmFuY2hJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgdXBkYXRlRGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFZhbGlkYXRlIHVzZXIgYWNjZXNzIHRvIGJyYW5jaFxyXG4gICAgICAgIGNvbnN0IGJyYW5jaCA9IGF3YWl0IGRiLmJyYW5jaC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgT1I6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IGFkbWluSWQ6IHVzZXJJZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdXNlcnM6IHsgc29tZTogeyBpZDogdXNlcklkIH0gfSB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFicmFuY2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnVW5hdXRob3JpemVkIHRvIHVwZGF0ZSBicmFuY2ggc2V0dGluZ3MnIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBidXNpbmVzc05hbWU6IHVwZGF0ZURhdGEuYnVzaW5lc3NfbmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogdXBkYXRlRGF0YS5idXNpbmVzc19hZGRyZXNzLFxyXG4gICAgICAgICAgICBwaG9uZTogdXBkYXRlRGF0YS5idXNpbmVzc19waG9uZSxcclxuICAgICAgICAgICAgZW1haWw6IHVwZGF0ZURhdGEuYnVzaW5lc3NfZW1haWwsXHJcbiAgICAgICAgICAgIGxvZ286IHVwZGF0ZURhdGEuYnVzaW5lc3NfbG9nbyxcclxuICAgICAgICAgICAgY3VycmVuY3k6IHVwZGF0ZURhdGEuY3VycmVuY3ksXHJcbiAgICAgICAgICAgIHNpZ25hdHVyZUltYWdlOiB1cGRhdGVEYXRhLnNpZ25hdHVyZSxcclxuICAgICAgICAgICAgbWV0YWRhdGE6IHVwZGF0ZURhdGEubWV0YWRhdGFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB1cHNlcnRlZCA9IGF3YWl0IGRiLmJyYW5jaFNldHRpbmdzLnVwc2VydCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBicmFuY2hJZCB9LFxyXG4gICAgICAgICAgICB1cGRhdGU6IGRhdGEsXHJcbiAgICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgLi4uZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB1cHNlcnRlZC5pZCxcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX25hbWU6IHVwc2VydGVkLmJ1c2luZXNzTmFtZSxcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzX2FkZHJlc3M6IHVwc2VydGVkLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19waG9uZTogdXBzZXJ0ZWQucGhvbmUsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19lbWFpbDogdXBzZXJ0ZWQuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc19sb2dvOiB1cHNlcnRlZC5sb2dvLFxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IHVwc2VydGVkLmN1cnJlbmN5LFxyXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlOiB1cHNlcnRlZC5zaWduYXR1cmVJbWFnZSxcclxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB1cHNlcnRlZC5tZXRhZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cHNlcnRpbmcgYnVzaW5lc3Mgc2V0dGluZ3M6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHVwZGF0ZSBzZXR0aW5ncycgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRTdGF0dXNBY3Rpb24odXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBpc0Zyb3plbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBzdGF0dXM6ICdhY3RpdmUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJCeTogeyBlbmREYXRlOiAnZGVzYycgfSxcclxuICAgICAgICAgICAgICAgICAgICB0YWtlOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYnJhbmNoZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgaWQ6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVN1YiA9IHVzZXIuc3Vic2NyaXB0aW9uc1swXTtcclxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRheXNSZW1haW5pbmcgPSBhY3RpdmVTdWIgPyBNYXRoLmNlaWwoKGFjdGl2ZVN1Yi5lbmREYXRlLmdldFRpbWUoKSAtIG5vdy5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKSA6IDA7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzX2Zyb3plbjogdXNlci5pc0Zyb3plbixcclxuICAgICAgICAgICAgbG9jYXRpb25fbGltaXQ6IDEsIC8vIFRyYWRpdGlvbmFsIGxpbWl0IG9yIGZyb20gc3Vic2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGJpbGxpbmdfYW1vdW50OiBhY3RpdmVTdWIgPyBOdW1iZXIoYWN0aXZlU3ViLmFtb3VudCkgOiA1MDAwMCxcclxuICAgICAgICAgICAgYmlsbGluZ19kdXJhdGlvbjogJ01vbnRobHknLFxyXG4gICAgICAgICAgICBkYXlzX3JlbWFpbmluZzogTWF0aC5tYXgoMCwgZGF5c1JlbWFpbmluZyksXHJcbiAgICAgICAgICAgIG5leHRfYmlsbGluZ19kYXRlOiBhY3RpdmVTdWI/LmVuZERhdGUudG9JU09TdHJpbmcoKSB8fCAnJ1xyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFjY291bnQgc3RhdHVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBpc19mcm96ZW46IGZhbHNlLCBsb2NhdGlvbl9saW1pdDogMSwgYmlsbGluZ19hbW91bnQ6IDUwMDAwLCBiaWxsaW5nX2R1cmF0aW9uOiAnTW9udGhseScsIGRheXNfcmVtYWluaW5nOiAzMCwgbmV4dF9iaWxsaW5nX2RhdGU6ICcnIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPbmJvYXJkaW5nU3RhdHVzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGRiLmJyYW5jaFNldHRpbmdzLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBicmFuY2hJZDogbG9jYXRpb25JZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc2V0dGluZ3MpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogc2V0dGluZ3MuaWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uX2lkOiBzZXR0aW5ncy5icmFuY2hJZCxcclxuICAgICAgICAgICAgYnVzaW5lc3NfbmFtZTogc2V0dGluZ3MuYnVzaW5lc3NOYW1lLFxyXG4gICAgICAgICAgICBidXNpbmVzc19hZGRyZXNzOiBzZXR0aW5ncy5hZGRyZXNzLFxyXG4gICAgICAgICAgICBidXNpbmVzc19waG9uZTogc2V0dGluZ3MucGhvbmUsXHJcbiAgICAgICAgICAgIGJ1c2luZXNzX2VtYWlsOiBzZXR0aW5ncy5lbWFpbCxcclxuICAgICAgICAgICAgYnVzaW5lc3NfbG9nbzogc2V0dGluZ3MubG9nbyxcclxuICAgICAgICAgICAgY29tcGxldGVkOiAhIXNldHRpbmdzLmJ1c2luZXNzTmFtZSAmJiAhIXNldHRpbmdzLnBob25lLCAvLyBTaW1wbGlmaWVkIGNvbXBsZXRpb24gY2hlY2tcclxuICAgICAgICAgICAgaXNfZnJvemVuOiBmYWxzZSAvLyBTaG91bGQgY29tZSBmcm9tIGJyYW5jaCBvciB1c2VyIHN0YXR1c1xyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG9uYm9hcmRpbmcgc3RhdHVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtUQUtzQixzTUFBQSJ9
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
"[project]/src/app/actions/data:9a4f8d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logActivityAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40b04c541d9ff35205d318046476e78cb072b4d271":"logActivityAction"},"src/app/actions/activity.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b04c541d9ff35205d318046476e78cb072b4d271", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "logActivityAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aXZpdHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIsIEFjdGl2aXR5VHlwZSwgQWN0aXZpdHlNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpdml0eUxvZ0lucHV0IHtcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG4gICAgbG9jYXRpb25JZDogc3RyaW5nO1xyXG4gICAgYWN0aXZpdHlUeXBlOiBBY3Rpdml0eVR5cGU7XHJcbiAgICBtb2R1bGU6IEFjdGl2aXR5TW9kdWxlO1xyXG4gICAgZW50aXR5VHlwZTogc3RyaW5nO1xyXG4gICAgZW50aXR5SWQ/OiBzdHJpbmc7XHJcbiAgICBlbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgbWV0YWRhdGE/OiBhbnk7XHJcbiAgICBwcm9maWxlSWQ/OiBzdHJpbmc7XHJcbiAgICBwcm9maWxlTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ0FjdGl2aXR5QWN0aW9uKGRhdGE6IEFjdGl2aXR5TG9nSW5wdXQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuYWN0aXZpdHlIaXN0b3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICBhY3Rpdml0eVR5cGU6IGRhdGEuYWN0aXZpdHlUeXBlLFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlOiBkYXRhLm1vZHVsZSxcclxuICAgICAgICAgICAgICAgIGVudGl0eVR5cGU6IGRhdGEuZW50aXR5VHlwZSxcclxuICAgICAgICAgICAgICAgIGVudGl0eUlkOiBkYXRhLmVudGl0eUlkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlbnRpdHlOYW1lOiBkYXRhLmVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBkYXRhLm1ldGFkYXRhIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlSWQ6IGRhdGEucHJvZmlsZUlkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlTmFtZTogZGF0YS5wcm9maWxlTmFtZSB8fCBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9oaXN0b3J5Jyk7IC8vIFR5cGljYWxseSBoaXN0b3J5IHBhZ2UgbWlnaHQgbmVlZCByZWZyZXNoXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ2dpbmcgYWN0aXZpdHk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5RmlsdGVycyB7XHJcbiAgICBhY3Rpdml0eVR5cGU/OiBzdHJpbmc7XHJcbiAgICBtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICBzZWFyY2g/OiBzdHJpbmc7XHJcbiAgICBkYXRlRnJvbT86IHN0cmluZztcclxuICAgIGRhdGVUbz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2aXR5SGlzdG9yeUFjdGlvbihcclxuICAgIGxvY2F0aW9uSWQ6IHN0cmluZyxcclxuICAgIHVzZXJJZDogc3RyaW5nLFxyXG4gICAgcGFnZTogbnVtYmVyID0gMSxcclxuICAgIHBhZ2VTaXplOiBudW1iZXIgPSAyMCxcclxuICAgIGZpbHRlcnM/OiBBY3Rpdml0eUZpbHRlcnNcclxuKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNraXAgPSAocGFnZSAtIDEpICogcGFnZVNpemU7XHJcblxyXG4gICAgICAgIGNvbnN0IHdoZXJlOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzLmFjdGl2aXR5VHlwZSAmJiBmaWx0ZXJzLmFjdGl2aXR5VHlwZSAhPT0gJ0FMTCcpIHtcclxuICAgICAgICAgICAgICAgIHdoZXJlLmFjdGl2aXR5VHlwZSA9IGZpbHRlcnMuYWN0aXZpdHlUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzLm1vZHVsZSAmJiBmaWx0ZXJzLm1vZHVsZSAhPT0gJ0FMTCcpIHtcclxuICAgICAgICAgICAgICAgIHdoZXJlLm1vZHVsZSA9IGZpbHRlcnMubW9kdWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzLnNlYXJjaCkge1xyXG4gICAgICAgICAgICAgICAgd2hlcmUuT1IgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBlbnRpdHlOYW1lOiB7IGNvbnRhaW5zOiBmaWx0ZXJzLnNlYXJjaCwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogeyBjb250YWluczogZmlsdGVycy5zZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzLmRhdGVGcm9tIHx8IGZpbHRlcnMuZGF0ZVRvKSB7XHJcbiAgICAgICAgICAgICAgICB3aGVyZS5jcmVhdGVkQXQgPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJzLmRhdGVGcm9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmUuY3JlYXRlZEF0Lmd0ZSA9IG5ldyBEYXRlKGZpbHRlcnMuZGF0ZUZyb20pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlcnMuZGF0ZVRvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9EYXRlID0gbmV3IERhdGUoZmlsdGVycy5kYXRlVG8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvRGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlLmNyZWF0ZWRBdC5sdGUgPSB0b0RhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IFthY3Rpdml0aWVzLCBjb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGRiLmFjdGl2aXR5SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgICAgIHNraXAsXHJcbiAgICAgICAgICAgICAgICB0YWtlOiBwYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgIG9yZGVyQnk6IHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGIuYWN0aXZpdHlIaXN0b3J5LmNvdW50KHsgd2hlcmUgfSlcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZpdGllczogYWN0aXZpdGllcy5tYXAoKGE6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5hLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGEuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksIC8vIE1hcCBiYWNrIHRvIHNoYXBlIGV4cGVjdGVkIGJ5IGhvb2tcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eV90eXBlOiBhLmFjdGl2aXR5VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbl9pZDogYS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eV90eXBlOiBhLmVudGl0eVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5X2lkOiBhLmVudGl0eUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eV9uYW1lOiBhLmVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZV9pZDogYS5wcm9maWxlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZV9uYW1lOiBhLnByb2ZpbGVOYW1lXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhY3Rpdml0eSBoaXN0b3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2aXR5SGlzdG9yeUJ5VHlwZUFjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIG1vZHVsZTogc3RyaW5nLCBhY3Rpdml0eVR5cGU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZGIuYWN0aXZpdHlIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCwgbW9kdWxlOiBtb2R1bGUgYXMgYW55LCBhY3Rpdml0eVR5cGU6IGFjdGl2aXR5VHlwZSBhcyBhbnkgfSxcclxuICAgICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogcmVjb3Jkcy5tYXAoKGE6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIC4uLmEsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGEuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlTmFtZTogYS5wcm9maWxlTmFtZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFjdGl2aXR5IGhpc3RvcnkgYnkgdHlwZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBkYXRhOiBbXSB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBbUJzQiw4TEFBQSJ9
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
"[project]/src/app/actions/data:93bcad [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductsAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4067b4df65a668010fc5081a80928c8b7ed310e2f4":"getProductsAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4067b4df65a668010fc5081a80928c8b7ed310e2f4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProductsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RzQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIXVzZXJJZCB8fCAhYnVzaW5lc3NJZCkgcmV0dXJuIFtdO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJvZHVjdHNEYXRhID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgYnJhbmNoSWQ6IGJ1c2luZXNzSWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IFt7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sIHsgaWQ6ICdkZXNjJyB9XSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgIHN1cHBsaWVyOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogTnVtYmVyKHAuc3RvY2spLFxyXG4gICAgICBjb3N0UHJpY2U6IE51bWJlcihwLmNvc3RQcmljZSksXHJcbiAgICAgIHNlbGxpbmdQcmljZTogTnVtYmVyKHAuc2VsbGluZ1ByaWNlKSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IE51bWJlcihwLm1pblN0b2NrKSxcclxuICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICB0eXBlOiAnQ1JFQVRFRCcsXHJcbiAgICAgICAgICAgIG9sZFN0b2NrOiAwLFxyXG4gICAgICAgICAgICBuZXdTdG9jazogZGF0YS5xdWFudGl0eSxcclxuICAgICAgICAgICAgcXVhbnRpdHlDaGFuZ2U6IGRhdGEucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHJlYXNvbjogYFske3Byb2R1Y3QubmFtZX1dIHwgSW5pdGlhbCBzdG9ja2AsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgIG5hbWU6IHJlc3VsdC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcmVzdWx0LmRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgICBjYXRlZ29yeTogcmVzdWx0LmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHJlc3VsdC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiByZXN1bHQuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHJlc3VsdC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiByZXN1bHQuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiByZXN1bHQuaW1hZ2UsXHJcbiAgICAgIGJhcmNvZGU6IHJlc3VsdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiByZXN1bHQuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHJlc3VsdC5taW5TdG9jayxcclxuICAgICAgY3JlYXRlZEF0OiByZXN1bHQuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgLy8gMS4gR2V0IGN1cnJlbnQgcHJvZHVjdCBzdGF0ZVxyXG4gICAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBzdG9jazogdHJ1ZSwgbmFtZTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFjdXJyZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9kdWN0IG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgIC8vIDIuIFBlcmZvcm0gdXBkYXRlXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB0eC5wcm9kdWN0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiB1cGRhdGVzLm5hbWUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5jYXRlZ29yeUlkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogdXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgPyB1cGRhdGVzLnN1cHBsaWVySWQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBza3U6IHVwZGF0ZXMuaXRlbU51bWJlciB8fCB1cGRhdGVzLnNrdSxcclxuICAgICAgICAgIGJhcmNvZGU6IHVwZGF0ZXMuYmFyY29kZSxcclxuICAgICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgICAgY29zdFByaWNlOiB1cGRhdGVzLmNvc3RQcmljZSxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogdXBkYXRlcy5zZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgIG1pblN0b2NrOiB1cGRhdGVzLm1pbmltdW1TdG9jayxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGhpc3RvcnkgaWYgcXVhbnRpdHkgY2hhbmdlZFxyXG4gICAgICBpZiAodXBkYXRlcy5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHVwZGF0ZXMucXVhbnRpdHkgIT09IGN1cnJlbnQuc3RvY2sgJiYgdXBkYXRlcy5jdXN0b21DaGFuZ2VSZWFzb24gIT09ICdza2lwLWhpc3RvcnknKSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZVJlYXNvbiA9IHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uO1xyXG4gICAgICAgIGlmICghY2hhbmdlUmVhc29uKSB7XHJcbiAgICAgICAgICBpZiAodXBkYXRlcy5pc0Zyb21TYWxlKSBjaGFuZ2VSZWFzb24gPSBcIlNhbGVcIjtcclxuICAgICAgICAgIGVsc2UgaWYgKHVwZGF0ZXMucXVhbnRpdHkgPiBjdXJyZW50LnN0b2NrKSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayBhZGRpdGlvblwiO1xyXG4gICAgICAgICAgZWxzZSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayByZWR1Y3Rpb25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBzaG90dGVkUmVhc29uID0gYFske3VwZGF0ZWQubmFtZX1dIHwgJHtjaGFuZ2VSZWFzb259YDtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1cGRhdGVzLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICB0eXBlOiB1cGRhdGVzLmlzRnJvbVNhbGUgPyAnU0FMRScgOiAodXBkYXRlcy5xdWFudGl0eSA+IGN1cnJlbnQuc3RvY2sgPyAnUkVTVE9DSycgOiAnQURKVVNUTUVOVCcpLFxyXG4gICAgICAgICAgICBvbGRTdG9jazogY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgbmV3U3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHF1YW50aXR5Q2hhbmdlOiB1cGRhdGVzLnF1YW50aXR5IC0gY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgcmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFBST0RVQ1QgQ0FURUdPUklFUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0ZWdvcmllc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiBjYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiBjLmlkLFxyXG4gICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBjLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0Q2F0ZWdvcnlBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJyYW5jaElkOiBsb2NhdGlvbklkLFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjYXRlZ29yeSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5jYXRlZ29yeS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IG5hbWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNhdGVnb3J5IH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdENhdGVnb3J5QWN0aW9uKGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgLy8gQ2hlY2sgaWYgYW55IHByb2R1Y3RzIGFyZSB1c2luZyB0aGlzIGNhdGVnb3J5XHJcbiAgICBjb25zdCB1c2FnZUNvdW50ID0gYXdhaXQgZGIucHJvZHVjdC5jb3VudCh7XHJcbiAgICAgIHdoZXJlOiB7IGNhdGVnb3J5SWQ6IGlkIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh1c2FnZUNvdW50ID4gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeTogaXQgaXMgYmVpbmcgdXNlZCBieSBvbmUgb3IgbW9yZSBwcm9kdWN0cy4nXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgZGIuY2F0ZWdvcnkuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXRlZ29yeTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLSBQUk9EVUNUIFNUQVRTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RTdGF0c0FjdGlvbihidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIWJ1c2luZXNzSWQpIHJldHVybiB7IGNvc3RWYWx1ZTogMCwgbG93U3RvY2s6IDAsIG91dE9mU3RvY2s6IDAsIHN0b2NrVmFsdWU6IDAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBidXNpbmVzc0lkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIHN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGNvc3RQcmljZTogdHJ1ZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBjb3N0VmFsdWUgPSAwO1xyXG4gICAgbGV0IGxvd1N0b2NrID0gMDtcclxuICAgIGxldCBvdXRPZlN0b2NrID0gMDtcclxuICAgIGxldCBzdG9ja1ZhbHVlID0gMDtcclxuXHJcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcXR5ID0gTnVtYmVyKHAuc3RvY2spIHx8IDA7XHJcbiAgICAgIGNvbnN0IGNvc3QgPSBOdW1iZXIocC5jb3N0UHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHNlbGxpbmcgPSBOdW1iZXIocC5zZWxsaW5nUHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IG1pblN0b2NrID0gTnVtYmVyKHAubWluU3RvY2spIHx8IDA7XHJcblxyXG4gICAgICBjb3N0VmFsdWUgKz0gY29zdCAqIHF0eTtcclxuICAgICAgc3RvY2tWYWx1ZSArPSBzZWxsaW5nICogcXR5O1xyXG5cclxuICAgICAgaWYgKHF0eSA9PT0gMCkge1xyXG4gICAgICAgIG91dE9mU3RvY2srKztcclxuICAgICAgfSBlbHNlIGlmIChxdHkgPiAwICYmIHF0eSA8PSBtaW5TdG9jaykge1xyXG4gICAgICAgIGxvd1N0b2NrKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGNvc3RWYWx1ZSwgbG93U3RvY2ssIG91dE9mU3RvY2ssIHN0b2NrVmFsdWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBzdGF0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBjb3N0VmFsdWU6IDAsIGxvd1N0b2NrOiAwLCBvdXRPZlN0b2NrOiAwLCBzdG9ja1ZhbHVlOiAwIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBMT09LVVAgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbihjb2RlOiBzdHJpbmcsIGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICBpZiAoIWNvZGUgfHwgIWJyYW5jaElkKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbG93ZXJDb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBicmFuY2hJZCxcclxuICAgICAgICBPUjogW1xyXG4gICAgICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBsb3dlckNvZGUsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgICAgeyBza3U6IHsgY29udGFpbnM6IGxvd2VyQ29kZSwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm9kdWN0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBTQ0FOTkVSIChhbGwgcHJvZHVjdHMgZm9yIHNjYW5uZXIgcHJlbG9hZCkgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbihicmFuY2hJZDogc3RyaW5nKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFyY29kZTogdHJ1ZSwgc2t1OiB0cnVlLFxyXG4gICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSwgY29zdFByaWNlOiB0cnVlLCBzdG9jazogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSwgY2F0ZWdvcnlJZDogdHJ1ZSwgYnJhbmNoSWQ6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsIGltYWdlVXJsOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUsIHVwZGF0ZWRBdDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFNBTEUgQ0FTSCBUUkFOU0FDVElPTiBJRCBVUERBVEUgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2FsZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihzYWxlSWQ6IHN0cmluZywgY2FzaFRyYW5zYWN0aW9uSWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5zYWxlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBzYWxlSWQgfSxcclxuICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW3VwZGF0ZVNhbGVDYXNoVHJhbnNhY3Rpb25BY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIEZJTFRFUkVEIFBST0RVQ1RTIEZPUiBFWFBPUlQgKGFsbCBwYWdlcykgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsdGVyZWRQcm9kdWN0c0ZvckV4cG9ydEFjdGlvbihcclxuICBicmFuY2hJZDogc3RyaW5nLFxyXG4gIGZpbHRlcnM/OiB7IHNlYXJjaD86IHN0cmluZzsgY2F0ZWdvcnk/OiBzdHJpbmc7IHN0b2NrU3RhdHVzPzogc3RyaW5nIH1cclxuKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0geyBicmFuY2hJZCB9O1xyXG5cclxuICAgIGlmIChmaWx0ZXJzPy5zZWFyY2gpIHtcclxuICAgICAgY29uc3QgcyA9IGZpbHRlcnMuc2VhcmNoO1xyXG4gICAgICB3aGVyZS5PUiA9IFtcclxuICAgICAgICB7IG5hbWU6IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgc2t1OiB7IGNvbnRhaW5zOiBzLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVycz8uc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgICB3aGVyZS5zdG9jayA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKGZpbHRlcnM/LnN0b2NrU3RhdHVzID09PSAnaW5TdG9jaycpIHtcclxuICAgICAgd2hlcmUuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0cztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignW2dldEZpbHRlcmVkUHJvZHVjdHNGb3JFeHBvcnRBY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpU0FRc0IsOExBQUEifQ==
}),
"[project]/src/app/actions/data:377d5e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProductAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40de351351ef1c777658488fc7d0ea14a31652fa0f":"createProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40de351351ef1c777658488fc7d0ea14a31652fa0f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RzQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIXVzZXJJZCB8fCAhYnVzaW5lc3NJZCkgcmV0dXJuIFtdO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJvZHVjdHNEYXRhID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgYnJhbmNoSWQ6IGJ1c2luZXNzSWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IFt7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sIHsgaWQ6ICdkZXNjJyB9XSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgIHN1cHBsaWVyOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogTnVtYmVyKHAuc3RvY2spLFxyXG4gICAgICBjb3N0UHJpY2U6IE51bWJlcihwLmNvc3RQcmljZSksXHJcbiAgICAgIHNlbGxpbmdQcmljZTogTnVtYmVyKHAuc2VsbGluZ1ByaWNlKSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IE51bWJlcihwLm1pblN0b2NrKSxcclxuICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICB0eXBlOiAnQ1JFQVRFRCcsXHJcbiAgICAgICAgICAgIG9sZFN0b2NrOiAwLFxyXG4gICAgICAgICAgICBuZXdTdG9jazogZGF0YS5xdWFudGl0eSxcclxuICAgICAgICAgICAgcXVhbnRpdHlDaGFuZ2U6IGRhdGEucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHJlYXNvbjogYFske3Byb2R1Y3QubmFtZX1dIHwgSW5pdGlhbCBzdG9ja2AsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgIG5hbWU6IHJlc3VsdC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcmVzdWx0LmRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgICBjYXRlZ29yeTogcmVzdWx0LmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHJlc3VsdC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiByZXN1bHQuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHJlc3VsdC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiByZXN1bHQuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiByZXN1bHQuaW1hZ2UsXHJcbiAgICAgIGJhcmNvZGU6IHJlc3VsdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiByZXN1bHQuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHJlc3VsdC5taW5TdG9jayxcclxuICAgICAgY3JlYXRlZEF0OiByZXN1bHQuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgLy8gMS4gR2V0IGN1cnJlbnQgcHJvZHVjdCBzdGF0ZVxyXG4gICAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBzdG9jazogdHJ1ZSwgbmFtZTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFjdXJyZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9kdWN0IG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgIC8vIDIuIFBlcmZvcm0gdXBkYXRlXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB0eC5wcm9kdWN0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiB1cGRhdGVzLm5hbWUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5jYXRlZ29yeUlkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogdXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgPyB1cGRhdGVzLnN1cHBsaWVySWQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBza3U6IHVwZGF0ZXMuaXRlbU51bWJlciB8fCB1cGRhdGVzLnNrdSxcclxuICAgICAgICAgIGJhcmNvZGU6IHVwZGF0ZXMuYmFyY29kZSxcclxuICAgICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgICAgY29zdFByaWNlOiB1cGRhdGVzLmNvc3RQcmljZSxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogdXBkYXRlcy5zZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgIG1pblN0b2NrOiB1cGRhdGVzLm1pbmltdW1TdG9jayxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGhpc3RvcnkgaWYgcXVhbnRpdHkgY2hhbmdlZFxyXG4gICAgICBpZiAodXBkYXRlcy5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHVwZGF0ZXMucXVhbnRpdHkgIT09IGN1cnJlbnQuc3RvY2sgJiYgdXBkYXRlcy5jdXN0b21DaGFuZ2VSZWFzb24gIT09ICdza2lwLWhpc3RvcnknKSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZVJlYXNvbiA9IHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uO1xyXG4gICAgICAgIGlmICghY2hhbmdlUmVhc29uKSB7XHJcbiAgICAgICAgICBpZiAodXBkYXRlcy5pc0Zyb21TYWxlKSBjaGFuZ2VSZWFzb24gPSBcIlNhbGVcIjtcclxuICAgICAgICAgIGVsc2UgaWYgKHVwZGF0ZXMucXVhbnRpdHkgPiBjdXJyZW50LnN0b2NrKSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayBhZGRpdGlvblwiO1xyXG4gICAgICAgICAgZWxzZSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayByZWR1Y3Rpb25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBzaG90dGVkUmVhc29uID0gYFske3VwZGF0ZWQubmFtZX1dIHwgJHtjaGFuZ2VSZWFzb259YDtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1cGRhdGVzLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICB0eXBlOiB1cGRhdGVzLmlzRnJvbVNhbGUgPyAnU0FMRScgOiAodXBkYXRlcy5xdWFudGl0eSA+IGN1cnJlbnQuc3RvY2sgPyAnUkVTVE9DSycgOiAnQURKVVNUTUVOVCcpLFxyXG4gICAgICAgICAgICBvbGRTdG9jazogY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgbmV3U3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHF1YW50aXR5Q2hhbmdlOiB1cGRhdGVzLnF1YW50aXR5IC0gY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgcmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFBST0RVQ1QgQ0FURUdPUklFUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0ZWdvcmllc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiBjYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiBjLmlkLFxyXG4gICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBjLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0Q2F0ZWdvcnlBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJyYW5jaElkOiBsb2NhdGlvbklkLFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjYXRlZ29yeSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5jYXRlZ29yeS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IG5hbWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNhdGVnb3J5IH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdENhdGVnb3J5QWN0aW9uKGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgLy8gQ2hlY2sgaWYgYW55IHByb2R1Y3RzIGFyZSB1c2luZyB0aGlzIGNhdGVnb3J5XHJcbiAgICBjb25zdCB1c2FnZUNvdW50ID0gYXdhaXQgZGIucHJvZHVjdC5jb3VudCh7XHJcbiAgICAgIHdoZXJlOiB7IGNhdGVnb3J5SWQ6IGlkIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh1c2FnZUNvdW50ID4gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeTogaXQgaXMgYmVpbmcgdXNlZCBieSBvbmUgb3IgbW9yZSBwcm9kdWN0cy4nXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgZGIuY2F0ZWdvcnkuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXRlZ29yeTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLSBQUk9EVUNUIFNUQVRTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RTdGF0c0FjdGlvbihidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIWJ1c2luZXNzSWQpIHJldHVybiB7IGNvc3RWYWx1ZTogMCwgbG93U3RvY2s6IDAsIG91dE9mU3RvY2s6IDAsIHN0b2NrVmFsdWU6IDAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBidXNpbmVzc0lkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIHN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGNvc3RQcmljZTogdHJ1ZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBjb3N0VmFsdWUgPSAwO1xyXG4gICAgbGV0IGxvd1N0b2NrID0gMDtcclxuICAgIGxldCBvdXRPZlN0b2NrID0gMDtcclxuICAgIGxldCBzdG9ja1ZhbHVlID0gMDtcclxuXHJcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcXR5ID0gTnVtYmVyKHAuc3RvY2spIHx8IDA7XHJcbiAgICAgIGNvbnN0IGNvc3QgPSBOdW1iZXIocC5jb3N0UHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHNlbGxpbmcgPSBOdW1iZXIocC5zZWxsaW5nUHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IG1pblN0b2NrID0gTnVtYmVyKHAubWluU3RvY2spIHx8IDA7XHJcblxyXG4gICAgICBjb3N0VmFsdWUgKz0gY29zdCAqIHF0eTtcclxuICAgICAgc3RvY2tWYWx1ZSArPSBzZWxsaW5nICogcXR5O1xyXG5cclxuICAgICAgaWYgKHF0eSA9PT0gMCkge1xyXG4gICAgICAgIG91dE9mU3RvY2srKztcclxuICAgICAgfSBlbHNlIGlmIChxdHkgPiAwICYmIHF0eSA8PSBtaW5TdG9jaykge1xyXG4gICAgICAgIGxvd1N0b2NrKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGNvc3RWYWx1ZSwgbG93U3RvY2ssIG91dE9mU3RvY2ssIHN0b2NrVmFsdWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBzdGF0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBjb3N0VmFsdWU6IDAsIGxvd1N0b2NrOiAwLCBvdXRPZlN0b2NrOiAwLCBzdG9ja1ZhbHVlOiAwIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBMT09LVVAgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbihjb2RlOiBzdHJpbmcsIGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICBpZiAoIWNvZGUgfHwgIWJyYW5jaElkKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbG93ZXJDb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBicmFuY2hJZCxcclxuICAgICAgICBPUjogW1xyXG4gICAgICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBsb3dlckNvZGUsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgICAgeyBza3U6IHsgY29udGFpbnM6IGxvd2VyQ29kZSwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm9kdWN0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBTQ0FOTkVSIChhbGwgcHJvZHVjdHMgZm9yIHNjYW5uZXIgcHJlbG9hZCkgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbihicmFuY2hJZDogc3RyaW5nKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFyY29kZTogdHJ1ZSwgc2t1OiB0cnVlLFxyXG4gICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSwgY29zdFByaWNlOiB0cnVlLCBzdG9jazogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSwgY2F0ZWdvcnlJZDogdHJ1ZSwgYnJhbmNoSWQ6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsIGltYWdlVXJsOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUsIHVwZGF0ZWRBdDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFNBTEUgQ0FTSCBUUkFOU0FDVElPTiBJRCBVUERBVEUgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2FsZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihzYWxlSWQ6IHN0cmluZywgY2FzaFRyYW5zYWN0aW9uSWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5zYWxlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBzYWxlSWQgfSxcclxuICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW3VwZGF0ZVNhbGVDYXNoVHJhbnNhY3Rpb25BY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIEZJTFRFUkVEIFBST0RVQ1RTIEZPUiBFWFBPUlQgKGFsbCBwYWdlcykgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsdGVyZWRQcm9kdWN0c0ZvckV4cG9ydEFjdGlvbihcclxuICBicmFuY2hJZDogc3RyaW5nLFxyXG4gIGZpbHRlcnM/OiB7IHNlYXJjaD86IHN0cmluZzsgY2F0ZWdvcnk/OiBzdHJpbmc7IHN0b2NrU3RhdHVzPzogc3RyaW5nIH1cclxuKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0geyBicmFuY2hJZCB9O1xyXG5cclxuICAgIGlmIChmaWx0ZXJzPy5zZWFyY2gpIHtcclxuICAgICAgY29uc3QgcyA9IGZpbHRlcnMuc2VhcmNoO1xyXG4gICAgICB3aGVyZS5PUiA9IFtcclxuICAgICAgICB7IG5hbWU6IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgc2t1OiB7IGNvbnRhaW5zOiBzLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVycz8uc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgICB3aGVyZS5zdG9jayA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKGZpbHRlcnM/LnN0b2NrU3RhdHVzID09PSAnaW5TdG9jaycpIHtcclxuICAgICAgd2hlcmUuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0cztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignW2dldEZpbHRlcmVkUHJvZHVjdHNGb3JFeHBvcnRBY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0FxTHNCLGdNQUFBIn0=
}),
"[project]/src/app/actions/data:169405 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProductAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60d199ed6ebdb264ab3569d97f92202a15a4ea5a1e":"updateProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60d199ed6ebdb264ab3569d97f92202a15a4ea5a1e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RzQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIXVzZXJJZCB8fCAhYnVzaW5lc3NJZCkgcmV0dXJuIFtdO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJvZHVjdHNEYXRhID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgYnJhbmNoSWQ6IGJ1c2luZXNzSWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IFt7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sIHsgaWQ6ICdkZXNjJyB9XSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgIHN1cHBsaWVyOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogTnVtYmVyKHAuc3RvY2spLFxyXG4gICAgICBjb3N0UHJpY2U6IE51bWJlcihwLmNvc3RQcmljZSksXHJcbiAgICAgIHNlbGxpbmdQcmljZTogTnVtYmVyKHAuc2VsbGluZ1ByaWNlKSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IE51bWJlcihwLm1pblN0b2NrKSxcclxuICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICB0eXBlOiAnQ1JFQVRFRCcsXHJcbiAgICAgICAgICAgIG9sZFN0b2NrOiAwLFxyXG4gICAgICAgICAgICBuZXdTdG9jazogZGF0YS5xdWFudGl0eSxcclxuICAgICAgICAgICAgcXVhbnRpdHlDaGFuZ2U6IGRhdGEucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHJlYXNvbjogYFske3Byb2R1Y3QubmFtZX1dIHwgSW5pdGlhbCBzdG9ja2AsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgIG5hbWU6IHJlc3VsdC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcmVzdWx0LmRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgICBjYXRlZ29yeTogcmVzdWx0LmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHJlc3VsdC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiByZXN1bHQuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHJlc3VsdC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiByZXN1bHQuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiByZXN1bHQuaW1hZ2UsXHJcbiAgICAgIGJhcmNvZGU6IHJlc3VsdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiByZXN1bHQuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHJlc3VsdC5taW5TdG9jayxcclxuICAgICAgY3JlYXRlZEF0OiByZXN1bHQuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgLy8gMS4gR2V0IGN1cnJlbnQgcHJvZHVjdCBzdGF0ZVxyXG4gICAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBzdG9jazogdHJ1ZSwgbmFtZTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFjdXJyZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9kdWN0IG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgIC8vIDIuIFBlcmZvcm0gdXBkYXRlXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB0eC5wcm9kdWN0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiB1cGRhdGVzLm5hbWUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5jYXRlZ29yeUlkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogdXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgPyB1cGRhdGVzLnN1cHBsaWVySWQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBza3U6IHVwZGF0ZXMuaXRlbU51bWJlciB8fCB1cGRhdGVzLnNrdSxcclxuICAgICAgICAgIGJhcmNvZGU6IHVwZGF0ZXMuYmFyY29kZSxcclxuICAgICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgICAgY29zdFByaWNlOiB1cGRhdGVzLmNvc3RQcmljZSxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogdXBkYXRlcy5zZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgIG1pblN0b2NrOiB1cGRhdGVzLm1pbmltdW1TdG9jayxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGhpc3RvcnkgaWYgcXVhbnRpdHkgY2hhbmdlZFxyXG4gICAgICBpZiAodXBkYXRlcy5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHVwZGF0ZXMucXVhbnRpdHkgIT09IGN1cnJlbnQuc3RvY2sgJiYgdXBkYXRlcy5jdXN0b21DaGFuZ2VSZWFzb24gIT09ICdza2lwLWhpc3RvcnknKSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZVJlYXNvbiA9IHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uO1xyXG4gICAgICAgIGlmICghY2hhbmdlUmVhc29uKSB7XHJcbiAgICAgICAgICBpZiAodXBkYXRlcy5pc0Zyb21TYWxlKSBjaGFuZ2VSZWFzb24gPSBcIlNhbGVcIjtcclxuICAgICAgICAgIGVsc2UgaWYgKHVwZGF0ZXMucXVhbnRpdHkgPiBjdXJyZW50LnN0b2NrKSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayBhZGRpdGlvblwiO1xyXG4gICAgICAgICAgZWxzZSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayByZWR1Y3Rpb25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBzaG90dGVkUmVhc29uID0gYFske3VwZGF0ZWQubmFtZX1dIHwgJHtjaGFuZ2VSZWFzb259YDtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1cGRhdGVzLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICB0eXBlOiB1cGRhdGVzLmlzRnJvbVNhbGUgPyAnU0FMRScgOiAodXBkYXRlcy5xdWFudGl0eSA+IGN1cnJlbnQuc3RvY2sgPyAnUkVTVE9DSycgOiAnQURKVVNUTUVOVCcpLFxyXG4gICAgICAgICAgICBvbGRTdG9jazogY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgbmV3U3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHF1YW50aXR5Q2hhbmdlOiB1cGRhdGVzLnF1YW50aXR5IC0gY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgcmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFBST0RVQ1QgQ0FURUdPUklFUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0ZWdvcmllc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiBjYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiBjLmlkLFxyXG4gICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBjLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0Q2F0ZWdvcnlBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJyYW5jaElkOiBsb2NhdGlvbklkLFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjYXRlZ29yeSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5jYXRlZ29yeS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IG5hbWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNhdGVnb3J5IH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdENhdGVnb3J5QWN0aW9uKGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgLy8gQ2hlY2sgaWYgYW55IHByb2R1Y3RzIGFyZSB1c2luZyB0aGlzIGNhdGVnb3J5XHJcbiAgICBjb25zdCB1c2FnZUNvdW50ID0gYXdhaXQgZGIucHJvZHVjdC5jb3VudCh7XHJcbiAgICAgIHdoZXJlOiB7IGNhdGVnb3J5SWQ6IGlkIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh1c2FnZUNvdW50ID4gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeTogaXQgaXMgYmVpbmcgdXNlZCBieSBvbmUgb3IgbW9yZSBwcm9kdWN0cy4nXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgZGIuY2F0ZWdvcnkuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXRlZ29yeTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLSBQUk9EVUNUIFNUQVRTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RTdGF0c0FjdGlvbihidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIWJ1c2luZXNzSWQpIHJldHVybiB7IGNvc3RWYWx1ZTogMCwgbG93U3RvY2s6IDAsIG91dE9mU3RvY2s6IDAsIHN0b2NrVmFsdWU6IDAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBidXNpbmVzc0lkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIHN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGNvc3RQcmljZTogdHJ1ZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBjb3N0VmFsdWUgPSAwO1xyXG4gICAgbGV0IGxvd1N0b2NrID0gMDtcclxuICAgIGxldCBvdXRPZlN0b2NrID0gMDtcclxuICAgIGxldCBzdG9ja1ZhbHVlID0gMDtcclxuXHJcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcXR5ID0gTnVtYmVyKHAuc3RvY2spIHx8IDA7XHJcbiAgICAgIGNvbnN0IGNvc3QgPSBOdW1iZXIocC5jb3N0UHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHNlbGxpbmcgPSBOdW1iZXIocC5zZWxsaW5nUHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IG1pblN0b2NrID0gTnVtYmVyKHAubWluU3RvY2spIHx8IDA7XHJcblxyXG4gICAgICBjb3N0VmFsdWUgKz0gY29zdCAqIHF0eTtcclxuICAgICAgc3RvY2tWYWx1ZSArPSBzZWxsaW5nICogcXR5O1xyXG5cclxuICAgICAgaWYgKHF0eSA9PT0gMCkge1xyXG4gICAgICAgIG91dE9mU3RvY2srKztcclxuICAgICAgfSBlbHNlIGlmIChxdHkgPiAwICYmIHF0eSA8PSBtaW5TdG9jaykge1xyXG4gICAgICAgIGxvd1N0b2NrKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGNvc3RWYWx1ZSwgbG93U3RvY2ssIG91dE9mU3RvY2ssIHN0b2NrVmFsdWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBzdGF0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBjb3N0VmFsdWU6IDAsIGxvd1N0b2NrOiAwLCBvdXRPZlN0b2NrOiAwLCBzdG9ja1ZhbHVlOiAwIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBMT09LVVAgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbihjb2RlOiBzdHJpbmcsIGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICBpZiAoIWNvZGUgfHwgIWJyYW5jaElkKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbG93ZXJDb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBicmFuY2hJZCxcclxuICAgICAgICBPUjogW1xyXG4gICAgICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBsb3dlckNvZGUsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgICAgeyBza3U6IHsgY29udGFpbnM6IGxvd2VyQ29kZSwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm9kdWN0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBTQ0FOTkVSIChhbGwgcHJvZHVjdHMgZm9yIHNjYW5uZXIgcHJlbG9hZCkgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbihicmFuY2hJZDogc3RyaW5nKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFyY29kZTogdHJ1ZSwgc2t1OiB0cnVlLFxyXG4gICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSwgY29zdFByaWNlOiB0cnVlLCBzdG9jazogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSwgY2F0ZWdvcnlJZDogdHJ1ZSwgYnJhbmNoSWQ6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsIGltYWdlVXJsOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUsIHVwZGF0ZWRBdDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFNBTEUgQ0FTSCBUUkFOU0FDVElPTiBJRCBVUERBVEUgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2FsZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihzYWxlSWQ6IHN0cmluZywgY2FzaFRyYW5zYWN0aW9uSWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5zYWxlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBzYWxlSWQgfSxcclxuICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW3VwZGF0ZVNhbGVDYXNoVHJhbnNhY3Rpb25BY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIEZJTFRFUkVEIFBST0RVQ1RTIEZPUiBFWFBPUlQgKGFsbCBwYWdlcykgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsdGVyZWRQcm9kdWN0c0ZvckV4cG9ydEFjdGlvbihcclxuICBicmFuY2hJZDogc3RyaW5nLFxyXG4gIGZpbHRlcnM/OiB7IHNlYXJjaD86IHN0cmluZzsgY2F0ZWdvcnk/OiBzdHJpbmc7IHN0b2NrU3RhdHVzPzogc3RyaW5nIH1cclxuKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0geyBicmFuY2hJZCB9O1xyXG5cclxuICAgIGlmIChmaWx0ZXJzPy5zZWFyY2gpIHtcclxuICAgICAgY29uc3QgcyA9IGZpbHRlcnMuc2VhcmNoO1xyXG4gICAgICB3aGVyZS5PUiA9IFtcclxuICAgICAgICB7IG5hbWU6IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgc2t1OiB7IGNvbnRhaW5zOiBzLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVycz8uc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgICB3aGVyZS5zdG9jayA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKGZpbHRlcnM/LnN0b2NrU3RhdHVzID09PSAnaW5TdG9jaycpIHtcclxuICAgICAgd2hlcmUuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0cztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignW2dldEZpbHRlcmVkUHJvZHVjdHNGb3JFeHBvcnRBY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0FxUXNCLGdNQUFBIn0=
}),
"[project]/src/app/actions/data:feeb96 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProductAction",
    ()=>$$RSC_SERVER_ACTION_5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40d77c7a950f7558001cd1309943b62b2f2b6ba221":"deleteProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40d77c7a950f7558001cd1309943b62b2f2b6ba221", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RzQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIXVzZXJJZCB8fCAhYnVzaW5lc3NJZCkgcmV0dXJuIFtdO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJvZHVjdHNEYXRhID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgYnJhbmNoSWQ6IGJ1c2luZXNzSWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IFt7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sIHsgaWQ6ICdkZXNjJyB9XSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgIHN1cHBsaWVyOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogTnVtYmVyKHAuc3RvY2spLFxyXG4gICAgICBjb3N0UHJpY2U6IE51bWJlcihwLmNvc3RQcmljZSksXHJcbiAgICAgIHNlbGxpbmdQcmljZTogTnVtYmVyKHAuc2VsbGluZ1ByaWNlKSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IE51bWJlcihwLm1pblN0b2NrKSxcclxuICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICB0eXBlOiAnQ1JFQVRFRCcsXHJcbiAgICAgICAgICAgIG9sZFN0b2NrOiAwLFxyXG4gICAgICAgICAgICBuZXdTdG9jazogZGF0YS5xdWFudGl0eSxcclxuICAgICAgICAgICAgcXVhbnRpdHlDaGFuZ2U6IGRhdGEucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHJlYXNvbjogYFske3Byb2R1Y3QubmFtZX1dIHwgSW5pdGlhbCBzdG9ja2AsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgIG5hbWU6IHJlc3VsdC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcmVzdWx0LmRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgICBjYXRlZ29yeTogcmVzdWx0LmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHJlc3VsdC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiByZXN1bHQuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHJlc3VsdC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiByZXN1bHQuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiByZXN1bHQuaW1hZ2UsXHJcbiAgICAgIGJhcmNvZGU6IHJlc3VsdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiByZXN1bHQuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHJlc3VsdC5taW5TdG9jayxcclxuICAgICAgY3JlYXRlZEF0OiByZXN1bHQuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgLy8gMS4gR2V0IGN1cnJlbnQgcHJvZHVjdCBzdGF0ZVxyXG4gICAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBzdG9jazogdHJ1ZSwgbmFtZTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFjdXJyZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9kdWN0IG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgIC8vIDIuIFBlcmZvcm0gdXBkYXRlXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB0eC5wcm9kdWN0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiB1cGRhdGVzLm5hbWUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5jYXRlZ29yeUlkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogdXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgPyB1cGRhdGVzLnN1cHBsaWVySWQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBza3U6IHVwZGF0ZXMuaXRlbU51bWJlciB8fCB1cGRhdGVzLnNrdSxcclxuICAgICAgICAgIGJhcmNvZGU6IHVwZGF0ZXMuYmFyY29kZSxcclxuICAgICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgICAgY29zdFByaWNlOiB1cGRhdGVzLmNvc3RQcmljZSxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogdXBkYXRlcy5zZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgIG1pblN0b2NrOiB1cGRhdGVzLm1pbmltdW1TdG9jayxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGhpc3RvcnkgaWYgcXVhbnRpdHkgY2hhbmdlZFxyXG4gICAgICBpZiAodXBkYXRlcy5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHVwZGF0ZXMucXVhbnRpdHkgIT09IGN1cnJlbnQuc3RvY2sgJiYgdXBkYXRlcy5jdXN0b21DaGFuZ2VSZWFzb24gIT09ICdza2lwLWhpc3RvcnknKSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZVJlYXNvbiA9IHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uO1xyXG4gICAgICAgIGlmICghY2hhbmdlUmVhc29uKSB7XHJcbiAgICAgICAgICBpZiAodXBkYXRlcy5pc0Zyb21TYWxlKSBjaGFuZ2VSZWFzb24gPSBcIlNhbGVcIjtcclxuICAgICAgICAgIGVsc2UgaWYgKHVwZGF0ZXMucXVhbnRpdHkgPiBjdXJyZW50LnN0b2NrKSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayBhZGRpdGlvblwiO1xyXG4gICAgICAgICAgZWxzZSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayByZWR1Y3Rpb25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBzaG90dGVkUmVhc29uID0gYFske3VwZGF0ZWQubmFtZX1dIHwgJHtjaGFuZ2VSZWFzb259YDtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1cGRhdGVzLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICB0eXBlOiB1cGRhdGVzLmlzRnJvbVNhbGUgPyAnU0FMRScgOiAodXBkYXRlcy5xdWFudGl0eSA+IGN1cnJlbnQuc3RvY2sgPyAnUkVTVE9DSycgOiAnQURKVVNUTUVOVCcpLFxyXG4gICAgICAgICAgICBvbGRTdG9jazogY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgbmV3U3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHF1YW50aXR5Q2hhbmdlOiB1cGRhdGVzLnF1YW50aXR5IC0gY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgcmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFBST0RVQ1QgQ0FURUdPUklFUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0ZWdvcmllc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiBjYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiBjLmlkLFxyXG4gICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBjLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0Q2F0ZWdvcnlBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJyYW5jaElkOiBsb2NhdGlvbklkLFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjYXRlZ29yeSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5jYXRlZ29yeS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IG5hbWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNhdGVnb3J5IH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdENhdGVnb3J5QWN0aW9uKGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgLy8gQ2hlY2sgaWYgYW55IHByb2R1Y3RzIGFyZSB1c2luZyB0aGlzIGNhdGVnb3J5XHJcbiAgICBjb25zdCB1c2FnZUNvdW50ID0gYXdhaXQgZGIucHJvZHVjdC5jb3VudCh7XHJcbiAgICAgIHdoZXJlOiB7IGNhdGVnb3J5SWQ6IGlkIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh1c2FnZUNvdW50ID4gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeTogaXQgaXMgYmVpbmcgdXNlZCBieSBvbmUgb3IgbW9yZSBwcm9kdWN0cy4nXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgZGIuY2F0ZWdvcnkuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXRlZ29yeTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLSBQUk9EVUNUIFNUQVRTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RTdGF0c0FjdGlvbihidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIWJ1c2luZXNzSWQpIHJldHVybiB7IGNvc3RWYWx1ZTogMCwgbG93U3RvY2s6IDAsIG91dE9mU3RvY2s6IDAsIHN0b2NrVmFsdWU6IDAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBidXNpbmVzc0lkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIHN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGNvc3RQcmljZTogdHJ1ZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBjb3N0VmFsdWUgPSAwO1xyXG4gICAgbGV0IGxvd1N0b2NrID0gMDtcclxuICAgIGxldCBvdXRPZlN0b2NrID0gMDtcclxuICAgIGxldCBzdG9ja1ZhbHVlID0gMDtcclxuXHJcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcXR5ID0gTnVtYmVyKHAuc3RvY2spIHx8IDA7XHJcbiAgICAgIGNvbnN0IGNvc3QgPSBOdW1iZXIocC5jb3N0UHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHNlbGxpbmcgPSBOdW1iZXIocC5zZWxsaW5nUHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IG1pblN0b2NrID0gTnVtYmVyKHAubWluU3RvY2spIHx8IDA7XHJcblxyXG4gICAgICBjb3N0VmFsdWUgKz0gY29zdCAqIHF0eTtcclxuICAgICAgc3RvY2tWYWx1ZSArPSBzZWxsaW5nICogcXR5O1xyXG5cclxuICAgICAgaWYgKHF0eSA9PT0gMCkge1xyXG4gICAgICAgIG91dE9mU3RvY2srKztcclxuICAgICAgfSBlbHNlIGlmIChxdHkgPiAwICYmIHF0eSA8PSBtaW5TdG9jaykge1xyXG4gICAgICAgIGxvd1N0b2NrKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGNvc3RWYWx1ZSwgbG93U3RvY2ssIG91dE9mU3RvY2ssIHN0b2NrVmFsdWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBzdGF0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBjb3N0VmFsdWU6IDAsIGxvd1N0b2NrOiAwLCBvdXRPZlN0b2NrOiAwLCBzdG9ja1ZhbHVlOiAwIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBMT09LVVAgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbihjb2RlOiBzdHJpbmcsIGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICBpZiAoIWNvZGUgfHwgIWJyYW5jaElkKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbG93ZXJDb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBicmFuY2hJZCxcclxuICAgICAgICBPUjogW1xyXG4gICAgICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBsb3dlckNvZGUsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgICAgeyBza3U6IHsgY29udGFpbnM6IGxvd2VyQ29kZSwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm9kdWN0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBTQ0FOTkVSIChhbGwgcHJvZHVjdHMgZm9yIHNjYW5uZXIgcHJlbG9hZCkgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbihicmFuY2hJZDogc3RyaW5nKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFyY29kZTogdHJ1ZSwgc2t1OiB0cnVlLFxyXG4gICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSwgY29zdFByaWNlOiB0cnVlLCBzdG9jazogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSwgY2F0ZWdvcnlJZDogdHJ1ZSwgYnJhbmNoSWQ6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsIGltYWdlVXJsOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUsIHVwZGF0ZWRBdDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFNBTEUgQ0FTSCBUUkFOU0FDVElPTiBJRCBVUERBVEUgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2FsZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihzYWxlSWQ6IHN0cmluZywgY2FzaFRyYW5zYWN0aW9uSWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5zYWxlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBzYWxlSWQgfSxcclxuICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW3VwZGF0ZVNhbGVDYXNoVHJhbnNhY3Rpb25BY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIEZJTFRFUkVEIFBST0RVQ1RTIEZPUiBFWFBPUlQgKGFsbCBwYWdlcykgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsdGVyZWRQcm9kdWN0c0ZvckV4cG9ydEFjdGlvbihcclxuICBicmFuY2hJZDogc3RyaW5nLFxyXG4gIGZpbHRlcnM/OiB7IHNlYXJjaD86IHN0cmluZzsgY2F0ZWdvcnk/OiBzdHJpbmc7IHN0b2NrU3RhdHVzPzogc3RyaW5nIH1cclxuKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0geyBicmFuY2hJZCB9O1xyXG5cclxuICAgIGlmIChmaWx0ZXJzPy5zZWFyY2gpIHtcclxuICAgICAgY29uc3QgcyA9IGZpbHRlcnMuc2VhcmNoO1xyXG4gICAgICB3aGVyZS5PUiA9IFtcclxuICAgICAgICB7IG5hbWU6IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgc2t1OiB7IGNvbnRhaW5zOiBzLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVycz8uc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgICB3aGVyZS5zdG9jayA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKGZpbHRlcnM/LnN0b2NrU3RhdHVzID09PSAnaW5TdG9jaycpIHtcclxuICAgICAgd2hlcmUuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0cztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignW2dldEZpbHRlcmVkUHJvZHVjdHNGb3JFeHBvcnRBY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtU0FxVXNCLGdNQUFBIn0=
}),
"[project]/src/app/actions/data:d22ceb [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProductsBulkAction",
    ()=>$$RSC_SERVER_ACTION_6
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"609b8c32a570899b81791858dba0aee579337a2235":"updateProductsBulkAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("609b8c32a570899b81791858dba0aee579337a2235", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProductsBulkAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RzQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIXVzZXJJZCB8fCAhYnVzaW5lc3NJZCkgcmV0dXJuIFtdO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJvZHVjdHNEYXRhID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgYnJhbmNoSWQ6IGJ1c2luZXNzSWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IFt7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sIHsgaWQ6ICdkZXNjJyB9XSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgIHN1cHBsaWVyOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogTnVtYmVyKHAuc3RvY2spLFxyXG4gICAgICBjb3N0UHJpY2U6IE51bWJlcihwLmNvc3RQcmljZSksXHJcbiAgICAgIHNlbGxpbmdQcmljZTogTnVtYmVyKHAuc2VsbGluZ1ByaWNlKSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IE51bWJlcihwLm1pblN0b2NrKSxcclxuICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICB0eXBlOiAnQ1JFQVRFRCcsXHJcbiAgICAgICAgICAgIG9sZFN0b2NrOiAwLFxyXG4gICAgICAgICAgICBuZXdTdG9jazogZGF0YS5xdWFudGl0eSxcclxuICAgICAgICAgICAgcXVhbnRpdHlDaGFuZ2U6IGRhdGEucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHJlYXNvbjogYFske3Byb2R1Y3QubmFtZX1dIHwgSW5pdGlhbCBzdG9ja2AsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgIG5hbWU6IHJlc3VsdC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcmVzdWx0LmRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgICBjYXRlZ29yeTogcmVzdWx0LmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHJlc3VsdC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiByZXN1bHQuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHJlc3VsdC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiByZXN1bHQuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiByZXN1bHQuaW1hZ2UsXHJcbiAgICAgIGJhcmNvZGU6IHJlc3VsdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiByZXN1bHQuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHJlc3VsdC5taW5TdG9jayxcclxuICAgICAgY3JlYXRlZEF0OiByZXN1bHQuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgLy8gMS4gR2V0IGN1cnJlbnQgcHJvZHVjdCBzdGF0ZVxyXG4gICAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBzdG9jazogdHJ1ZSwgbmFtZTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFjdXJyZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9kdWN0IG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgIC8vIDIuIFBlcmZvcm0gdXBkYXRlXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB0eC5wcm9kdWN0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiB1cGRhdGVzLm5hbWUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5jYXRlZ29yeUlkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogdXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgPyB1cGRhdGVzLnN1cHBsaWVySWQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBza3U6IHVwZGF0ZXMuaXRlbU51bWJlciB8fCB1cGRhdGVzLnNrdSxcclxuICAgICAgICAgIGJhcmNvZGU6IHVwZGF0ZXMuYmFyY29kZSxcclxuICAgICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgICAgY29zdFByaWNlOiB1cGRhdGVzLmNvc3RQcmljZSxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogdXBkYXRlcy5zZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgIG1pblN0b2NrOiB1cGRhdGVzLm1pbmltdW1TdG9jayxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGhpc3RvcnkgaWYgcXVhbnRpdHkgY2hhbmdlZFxyXG4gICAgICBpZiAodXBkYXRlcy5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHVwZGF0ZXMucXVhbnRpdHkgIT09IGN1cnJlbnQuc3RvY2sgJiYgdXBkYXRlcy5jdXN0b21DaGFuZ2VSZWFzb24gIT09ICdza2lwLWhpc3RvcnknKSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZVJlYXNvbiA9IHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uO1xyXG4gICAgICAgIGlmICghY2hhbmdlUmVhc29uKSB7XHJcbiAgICAgICAgICBpZiAodXBkYXRlcy5pc0Zyb21TYWxlKSBjaGFuZ2VSZWFzb24gPSBcIlNhbGVcIjtcclxuICAgICAgICAgIGVsc2UgaWYgKHVwZGF0ZXMucXVhbnRpdHkgPiBjdXJyZW50LnN0b2NrKSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayBhZGRpdGlvblwiO1xyXG4gICAgICAgICAgZWxzZSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayByZWR1Y3Rpb25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBzaG90dGVkUmVhc29uID0gYFske3VwZGF0ZWQubmFtZX1dIHwgJHtjaGFuZ2VSZWFzb259YDtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1cGRhdGVzLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICB0eXBlOiB1cGRhdGVzLmlzRnJvbVNhbGUgPyAnU0FMRScgOiAodXBkYXRlcy5xdWFudGl0eSA+IGN1cnJlbnQuc3RvY2sgPyAnUkVTVE9DSycgOiAnQURKVVNUTUVOVCcpLFxyXG4gICAgICAgICAgICBvbGRTdG9jazogY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgbmV3U3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHF1YW50aXR5Q2hhbmdlOiB1cGRhdGVzLnF1YW50aXR5IC0gY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgcmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFBST0RVQ1QgQ0FURUdPUklFUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0ZWdvcmllc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiBjYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiBjLmlkLFxyXG4gICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBjLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0Q2F0ZWdvcnlBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJyYW5jaElkOiBsb2NhdGlvbklkLFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjYXRlZ29yeSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5jYXRlZ29yeS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IG5hbWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNhdGVnb3J5IH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdENhdGVnb3J5QWN0aW9uKGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgLy8gQ2hlY2sgaWYgYW55IHByb2R1Y3RzIGFyZSB1c2luZyB0aGlzIGNhdGVnb3J5XHJcbiAgICBjb25zdCB1c2FnZUNvdW50ID0gYXdhaXQgZGIucHJvZHVjdC5jb3VudCh7XHJcbiAgICAgIHdoZXJlOiB7IGNhdGVnb3J5SWQ6IGlkIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh1c2FnZUNvdW50ID4gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeTogaXQgaXMgYmVpbmcgdXNlZCBieSBvbmUgb3IgbW9yZSBwcm9kdWN0cy4nXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgZGIuY2F0ZWdvcnkuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXRlZ29yeTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLSBQUk9EVUNUIFNUQVRTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RTdGF0c0FjdGlvbihidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIWJ1c2luZXNzSWQpIHJldHVybiB7IGNvc3RWYWx1ZTogMCwgbG93U3RvY2s6IDAsIG91dE9mU3RvY2s6IDAsIHN0b2NrVmFsdWU6IDAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBidXNpbmVzc0lkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIHN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGNvc3RQcmljZTogdHJ1ZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBjb3N0VmFsdWUgPSAwO1xyXG4gICAgbGV0IGxvd1N0b2NrID0gMDtcclxuICAgIGxldCBvdXRPZlN0b2NrID0gMDtcclxuICAgIGxldCBzdG9ja1ZhbHVlID0gMDtcclxuXHJcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcXR5ID0gTnVtYmVyKHAuc3RvY2spIHx8IDA7XHJcbiAgICAgIGNvbnN0IGNvc3QgPSBOdW1iZXIocC5jb3N0UHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHNlbGxpbmcgPSBOdW1iZXIocC5zZWxsaW5nUHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IG1pblN0b2NrID0gTnVtYmVyKHAubWluU3RvY2spIHx8IDA7XHJcblxyXG4gICAgICBjb3N0VmFsdWUgKz0gY29zdCAqIHF0eTtcclxuICAgICAgc3RvY2tWYWx1ZSArPSBzZWxsaW5nICogcXR5O1xyXG5cclxuICAgICAgaWYgKHF0eSA9PT0gMCkge1xyXG4gICAgICAgIG91dE9mU3RvY2srKztcclxuICAgICAgfSBlbHNlIGlmIChxdHkgPiAwICYmIHF0eSA8PSBtaW5TdG9jaykge1xyXG4gICAgICAgIGxvd1N0b2NrKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGNvc3RWYWx1ZSwgbG93U3RvY2ssIG91dE9mU3RvY2ssIHN0b2NrVmFsdWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBzdGF0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBjb3N0VmFsdWU6IDAsIGxvd1N0b2NrOiAwLCBvdXRPZlN0b2NrOiAwLCBzdG9ja1ZhbHVlOiAwIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBMT09LVVAgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbihjb2RlOiBzdHJpbmcsIGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICBpZiAoIWNvZGUgfHwgIWJyYW5jaElkKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbG93ZXJDb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBicmFuY2hJZCxcclxuICAgICAgICBPUjogW1xyXG4gICAgICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBsb3dlckNvZGUsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgICAgeyBza3U6IHsgY29udGFpbnM6IGxvd2VyQ29kZSwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm9kdWN0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBTQ0FOTkVSIChhbGwgcHJvZHVjdHMgZm9yIHNjYW5uZXIgcHJlbG9hZCkgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbihicmFuY2hJZDogc3RyaW5nKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFyY29kZTogdHJ1ZSwgc2t1OiB0cnVlLFxyXG4gICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSwgY29zdFByaWNlOiB0cnVlLCBzdG9jazogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSwgY2F0ZWdvcnlJZDogdHJ1ZSwgYnJhbmNoSWQ6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsIGltYWdlVXJsOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUsIHVwZGF0ZWRBdDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFNBTEUgQ0FTSCBUUkFOU0FDVElPTiBJRCBVUERBVEUgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2FsZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihzYWxlSWQ6IHN0cmluZywgY2FzaFRyYW5zYWN0aW9uSWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5zYWxlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBzYWxlSWQgfSxcclxuICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW3VwZGF0ZVNhbGVDYXNoVHJhbnNhY3Rpb25BY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIEZJTFRFUkVEIFBST0RVQ1RTIEZPUiBFWFBPUlQgKGFsbCBwYWdlcykgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsdGVyZWRQcm9kdWN0c0ZvckV4cG9ydEFjdGlvbihcclxuICBicmFuY2hJZDogc3RyaW5nLFxyXG4gIGZpbHRlcnM/OiB7IHNlYXJjaD86IHN0cmluZzsgY2F0ZWdvcnk/OiBzdHJpbmc7IHN0b2NrU3RhdHVzPzogc3RyaW5nIH1cclxuKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0geyBicmFuY2hJZCB9O1xyXG5cclxuICAgIGlmIChmaWx0ZXJzPy5zZWFyY2gpIHtcclxuICAgICAgY29uc3QgcyA9IGZpbHRlcnMuc2VhcmNoO1xyXG4gICAgICB3aGVyZS5PUiA9IFtcclxuICAgICAgICB7IG5hbWU6IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgc2t1OiB7IGNvbnRhaW5zOiBzLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVycz8uc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgICB3aGVyZS5zdG9jayA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKGZpbHRlcnM/LnN0b2NrU3RhdHVzID09PSAnaW5TdG9jaycpIHtcclxuICAgICAgd2hlcmUuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0cztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignW2dldEZpbHRlcmVkUHJvZHVjdHNGb3JFeHBvcnRBY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0FrVnNCLHFNQUFBIn0=
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
"[project]/src/app/actions/data:7dc706 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductsByIdsAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60d2e6658abc20e397c389a36fe10b6b5461fb97b4":"getProductsByIdsAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60d2e6658abc20e397c389a36fe10b6b5461fb97b4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProductsByIdsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiB7XHJcbiAgICAgIC8vIEFzc3VtaW5nIG1hcHBpbmcgZXhpc3RzLCB3ZSB3aWxsIG1hcCBpdFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgICBjYXRlZ29yeTogcC5jYXRlZ29yeT8ubmFtZSB8fCAnVW5jYXRlZ29yaXplZCcsXHJcbiAgICAgICAgcXVhbnRpdHk6IHAuc3RvY2ssXHJcbiAgICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHAuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN1cHBsaWVyOiBwLnN1cHBsaWVyPy5uYW1lLFxyXG4gICAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICAgIGJhcmNvZGU6IHAuYmFyY29kZSxcclxuICAgICAgICBpdGVtTnVtYmVyOiBwLnNrdSB8fCAnJyxcclxuICAgICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgICBmb3JtYXR0ZWRQcm9kdWN0cyA9IGZvcm1hdHRlZFByb2R1Y3RzLmZpbHRlcigocDogYW55KSA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFByb2R1Y3RzQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIXVzZXJJZCB8fCAhYnVzaW5lc3NJZCkgcmV0dXJuIFtdO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJvZHVjdHNEYXRhID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgYnJhbmNoSWQ6IGJ1c2luZXNzSWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnk6IFt7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sIHsgaWQ6ICdkZXNjJyB9XSxcclxuICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgIHN1cHBsaWVyOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvZHVjdHNEYXRhLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogTnVtYmVyKHAuc3RvY2spLFxyXG4gICAgICBjb3N0UHJpY2U6IE51bWJlcihwLmNvc3RQcmljZSksXHJcbiAgICAgIHNlbGxpbmdQcmljZTogTnVtYmVyKHAuc2VsbGluZ1ByaWNlKSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IE51bWJlcihwLm1pblN0b2NrKSxcclxuICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdCxcclxuICAgIH0pKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWxsIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlJZHNBY3Rpb24oaWRzOiBzdHJpbmdbXSwgYnVzaW5lc3NJZD86IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0ge1xyXG4gICAgICBpZDogeyBpbjogaWRzIH1cclxuICAgIH07XHJcbiAgICBpZiAoYnVzaW5lc3NJZCkge1xyXG4gICAgICB3aGVyZS5icmFuY2hJZCA9IGJ1c2luZXNzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcclxuICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICBpZDogcC5pZCxcclxuICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvbiB8fCAnJyxcclxuICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICBxdWFudGl0eTogcC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiBwLmNvc3RQcmljZSxcclxuICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgc3VwcGxpZXI6IHAuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiBwLmltYWdlLFxyXG4gICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgIGl0ZW1OdW1iZXI6IHAuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHAubWluU3RvY2ssXHJcbiAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICB9KSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGJ5IGlkczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgIC8vIDEuIEdlbmVyYXRlIG5leHQgU0tVL2l0ZW1OdW1iZXIgZm9yIHRoaXMgYnJhbmNoXHJcbiAgICAgIGNvbnN0IGxhc3RQcm9kdWN0ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBkYXRhLmJ1c2luZXNzSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IHNrdTogJ2Rlc2MnIH0sXHJcbiAgICAgICAgc2VsZWN0OiB7IHNrdTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IG5leHRTa3UgPSBcIlBST0QtMDAwMVwiO1xyXG4gICAgICBpZiAobGFzdFByb2R1Y3QgJiYgbGFzdFByb2R1Y3Quc2t1KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlciA9IHBhcnNlSW50KGxhc3RQcm9kdWN0LnNrdS5yZXBsYWNlKFwiUFJPRC1cIiwgXCJcIikpIHx8IDA7XHJcbiAgICAgICAgbmV4dFNrdSA9IGBQUk9ELSR7KGN1cnJlbnROdW1iZXIgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJyl9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gMi4gQ3JlYXRlIHRoZSBwcm9kdWN0XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCB0eC5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBicmFuY2hJZDogZGF0YS5idXNpbmVzc0lkLFxyXG4gICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IGRhdGEuY2F0ZWdvcnlJZCB8fCBudWxsLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogZGF0YS5zdXBwbGllcklkIHx8IG51bGwsXHJcbiAgICAgICAgICBza3U6IG5leHRTa3UsXHJcbiAgICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZVVybCxcclxuICAgICAgICAgIGNvc3RQcmljZTogZGF0YS5jb3N0UHJpY2UgfHwgMCxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogZGF0YS5zZWxsaW5nUHJpY2UgfHwgMCxcclxuICAgICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgICBtaW5TdG9jazogZGF0YS5taW5pbXVtU3RvY2sgfHwgMCxcclxuICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IHRydWUsXHJcbiAgICAgICAgICBzdXBwbGllcjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGluaXRpYWwgc3RvY2sgaGlzdG9yeSBpZiBxdWFudGl0eSA+IDBcclxuICAgICAgaWYgKGRhdGEucXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICB0eXBlOiAnQ1JFQVRFRCcsXHJcbiAgICAgICAgICAgIG9sZFN0b2NrOiAwLFxyXG4gICAgICAgICAgICBuZXdTdG9jazogZGF0YS5xdWFudGl0eSxcclxuICAgICAgICAgICAgcXVhbnRpdHlDaGFuZ2U6IGRhdGEucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHJlYXNvbjogYFske3Byb2R1Y3QubmFtZX1dIHwgSW5pdGlhbCBzdG9ja2AsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogZGF0YS5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiByZXN1bHQuaWQsXHJcbiAgICAgIG5hbWU6IHJlc3VsdC5uYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbjogcmVzdWx0LmRlc2NyaXB0aW9uIHx8ICcnLFxyXG4gICAgICBjYXRlZ29yeTogcmVzdWx0LmNhdGVnb3J5Py5uYW1lIHx8ICdVbmNhdGVnb3JpemVkJyxcclxuICAgICAgcXVhbnRpdHk6IHJlc3VsdC5zdG9jayxcclxuICAgICAgY29zdFByaWNlOiByZXN1bHQuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHJlc3VsdC5zZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN1cHBsaWVyOiByZXN1bHQuc3VwcGxpZXI/Lm5hbWUsXHJcbiAgICAgIGltYWdlVXJsOiByZXN1bHQuaW1hZ2UsXHJcbiAgICAgIGJhcmNvZGU6IHJlc3VsdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiByZXN1bHQuc2t1IHx8ICcnLFxyXG4gICAgICBtaW5pbXVtU3RvY2s6IHJlc3VsdC5taW5TdG9jayxcclxuICAgICAgY3JlYXRlZEF0OiByZXN1bHQuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgLy8gMS4gR2V0IGN1cnJlbnQgcHJvZHVjdCBzdGF0ZVxyXG4gICAgICBjb25zdCBjdXJyZW50ID0gYXdhaXQgdHgucHJvZHVjdC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgIHNlbGVjdDogeyBzdG9jazogdHJ1ZSwgbmFtZTogdHJ1ZSB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFjdXJyZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJQcm9kdWN0IG5vdCBmb3VuZFwiKTtcclxuXHJcbiAgICAgIC8vIDIuIFBlcmZvcm0gdXBkYXRlXHJcbiAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB0eC5wcm9kdWN0LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBuYW1lOiB1cGRhdGVzLm5hbWUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkID8gdXBkYXRlcy5jYXRlZ29yeUlkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc3VwcGxpZXJJZDogdXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgPyB1cGRhdGVzLnN1cHBsaWVySWQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICBza3U6IHVwZGF0ZXMuaXRlbU51bWJlciB8fCB1cGRhdGVzLnNrdSxcclxuICAgICAgICAgIGJhcmNvZGU6IHVwZGF0ZXMuYmFyY29kZSxcclxuICAgICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgICAgY29zdFByaWNlOiB1cGRhdGVzLmNvc3RQcmljZSxcclxuICAgICAgICAgIHNlbGxpbmdQcmljZTogdXBkYXRlcy5zZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICAgIG1pblN0b2NrOiB1cGRhdGVzLm1pbmltdW1TdG9jayxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gMy4gQ3JlYXRlIGhpc3RvcnkgaWYgcXVhbnRpdHkgY2hhbmdlZFxyXG4gICAgICBpZiAodXBkYXRlcy5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHVwZGF0ZXMucXVhbnRpdHkgIT09IGN1cnJlbnQuc3RvY2sgJiYgdXBkYXRlcy5jdXN0b21DaGFuZ2VSZWFzb24gIT09ICdza2lwLWhpc3RvcnknKSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZVJlYXNvbiA9IHVwZGF0ZXMuY3VzdG9tQ2hhbmdlUmVhc29uO1xyXG4gICAgICAgIGlmICghY2hhbmdlUmVhc29uKSB7XHJcbiAgICAgICAgICBpZiAodXBkYXRlcy5pc0Zyb21TYWxlKSBjaGFuZ2VSZWFzb24gPSBcIlNhbGVcIjtcclxuICAgICAgICAgIGVsc2UgaWYgKHVwZGF0ZXMucXVhbnRpdHkgPiBjdXJyZW50LnN0b2NrKSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayBhZGRpdGlvblwiO1xyXG4gICAgICAgICAgZWxzZSBjaGFuZ2VSZWFzb24gPSBcIk1hbnVhbCBzdG9jayByZWR1Y3Rpb25cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBzaG90dGVkUmVhc29uID0gYFske3VwZGF0ZWQubmFtZX1dIHwgJHtjaGFuZ2VSZWFzb259YDtcclxuXHJcbiAgICAgICAgYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB1cGRhdGVzLnVzZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdElkOiB1cGRhdGVkLmlkLFxyXG4gICAgICAgICAgICB0eXBlOiB1cGRhdGVzLmlzRnJvbVNhbGUgPyAnU0FMRScgOiAodXBkYXRlcy5xdWFudGl0eSA+IGN1cnJlbnQuc3RvY2sgPyAnUkVTVE9DSycgOiAnQURKVVNUTUVOVCcpLFxyXG4gICAgICAgICAgICBvbGRTdG9jazogY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgbmV3U3RvY2s6IHVwZGF0ZXMucXVhbnRpdHksXHJcbiAgICAgICAgICAgIHF1YW50aXR5Q2hhbmdlOiB1cGRhdGVzLnF1YW50aXR5IC0gY3VycmVudC5zdG9jayxcclxuICAgICAgICAgICAgcmVhc29uOiBzbmFwc2hvdHRlZFJlYXNvbixcclxuICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHVwZGF0ZXMucmVmZXJlbmNlSWQgfHwgbnVsbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RBY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5wcm9kdWN0LmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkIH1cclxuICAgIH0pO1xyXG4gICAgLy8gcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnkvcHJvZHVjdHMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBwcm9kdWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0c0J1bGtBY3Rpb24oXHJcbiAgdXBkYXRlczogQXJyYXk8eyBpZDogc3RyaW5nOyB1cGRhdGVkOiBQYXJ0aWFsPGFueT4gfT4sXHJcbiAgYnVzaW5lc3NJZDogc3RyaW5nXHJcbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBQcmlzbWEgdHJhbnNhY3Rpb24gZm9yIGJ1bGsgdXBkYXRlc1xyXG4gICAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSB1cGRhdGVzLm1hcCh1ID0+XHJcbiAgICAgIGRiLnByb2R1Y3QudXBkYXRlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogdS5pZCB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubmFtZSAmJiB7IG5hbWU6IHUudXBkYXRlZC5uYW1lIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIHsgZGVzY3JpcHRpb246IHUudXBkYXRlZC5kZXNjcmlwdGlvbiB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY2F0ZWdvcnlJZCAhPT0gdW5kZWZpbmVkICYmIHsgY2F0ZWdvcnlJZDogdS51cGRhdGVkLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnN1cHBsaWVySWQgIT09IHVuZGVmaW5lZCAmJiB7IHN1cHBsaWVySWQ6IHUudXBkYXRlZC5zdXBwbGllcklkIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5za3UgIT09IHVuZGVmaW5lZCAmJiB7IHNrdTogdS51cGRhdGVkLnNrdSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuYmFyY29kZSAhPT0gdW5kZWZpbmVkICYmIHsgYmFyY29kZTogdS51cGRhdGVkLmJhcmNvZGUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmNvc3RQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgY29zdFByaWNlOiB1LnVwZGF0ZWQuY29zdFByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5zZWxsaW5nUHJpY2UgIT09IHVuZGVmaW5lZCAmJiB7IHNlbGxpbmdQcmljZTogdS51cGRhdGVkLnNlbGxpbmdQcmljZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQucXVhbnRpdHkgIT09IHVuZGVmaW5lZCAmJiB7IHN0b2NrOiB1LnVwZGF0ZWQucXVhbnRpdHkgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLm1pbmltdW1TdG9jayAhPT0gdW5kZWZpbmVkICYmIHsgbWluU3RvY2s6IHUudXBkYXRlZC5taW5pbXVtU3RvY2sgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24odXBkYXRlUHJvbWlzZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBlcmZvcm1pbmcgYnVsayB1cGRhdGU6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFBST0RVQ1QgQ0FURUdPUklFUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0ZWdvcmllc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLmNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgb3JkZXJCeTogeyBuYW1lOiAnYXNjJyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBkYXRhOiBjYXRlZ29yaWVzLm1hcCgoYzogYW55KSA9PiAoe1xyXG4gICAgICAgIGlkOiBjLmlkLFxyXG4gICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICBjcmVhdGVkX2F0OiBjLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICB9KSlcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0Q2F0ZWdvcnlBY3Rpb24obG9jYXRpb25JZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZGIuY2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGJyYW5jaElkOiBsb2NhdGlvbklkLFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjYXRlZ29yeSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5jYXRlZ29yeS51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7IG5hbWUgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNhdGVnb3J5IH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdENhdGVnb3J5QWN0aW9uKGlkOiBzdHJpbmcpIHtcclxuICB0cnkge1xyXG4gICAgLy8gQ2hlY2sgaWYgYW55IHByb2R1Y3RzIGFyZSB1c2luZyB0aGlzIGNhdGVnb3J5XHJcbiAgICBjb25zdCB1c2FnZUNvdW50ID0gYXdhaXQgZGIucHJvZHVjdC5jb3VudCh7XHJcbiAgICAgIHdoZXJlOiB7IGNhdGVnb3J5SWQ6IGlkIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh1c2FnZUNvdW50ID4gMCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGVycm9yOiAnQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeTogaXQgaXMgYmVpbmcgdXNlZCBieSBvbmUgb3IgbW9yZSBwcm9kdWN0cy4nXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgZGIuY2F0ZWdvcnkuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBjYXRlZ29yeTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLSBQUk9EVUNUIFNUQVRTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RTdGF0c0FjdGlvbihidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICBpZiAoIWJ1c2luZXNzSWQpIHJldHVybiB7IGNvc3RWYWx1ZTogMCwgbG93U3RvY2s6IDAsIG91dE9mU3RvY2s6IDAsIHN0b2NrVmFsdWU6IDAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZGIucHJvZHVjdC5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBidXNpbmVzc0lkIH0sXHJcbiAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgIHN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGNvc3RQcmljZTogdHJ1ZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBjb3N0VmFsdWUgPSAwO1xyXG4gICAgbGV0IGxvd1N0b2NrID0gMDtcclxuICAgIGxldCBvdXRPZlN0b2NrID0gMDtcclxuICAgIGxldCBzdG9ja1ZhbHVlID0gMDtcclxuXHJcbiAgICBwcm9kdWN0cy5mb3JFYWNoKChwOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcXR5ID0gTnVtYmVyKHAuc3RvY2spIHx8IDA7XHJcbiAgICAgIGNvbnN0IGNvc3QgPSBOdW1iZXIocC5jb3N0UHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IHNlbGxpbmcgPSBOdW1iZXIocC5zZWxsaW5nUHJpY2UpIHx8IDA7XHJcbiAgICAgIGNvbnN0IG1pblN0b2NrID0gTnVtYmVyKHAubWluU3RvY2spIHx8IDA7XHJcblxyXG4gICAgICBjb3N0VmFsdWUgKz0gY29zdCAqIHF0eTtcclxuICAgICAgc3RvY2tWYWx1ZSArPSBzZWxsaW5nICogcXR5O1xyXG5cclxuICAgICAgaWYgKHF0eSA9PT0gMCkge1xyXG4gICAgICAgIG91dE9mU3RvY2srKztcclxuICAgICAgfSBlbHNlIGlmIChxdHkgPiAwICYmIHF0eSA8PSBtaW5TdG9jaykge1xyXG4gICAgICAgIGxvd1N0b2NrKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IGNvc3RWYWx1ZSwgbG93U3RvY2ssIG91dE9mU3RvY2ssIHN0b2NrVmFsdWUgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBzdGF0czonLCBlcnJvcik7XHJcbiAgICByZXR1cm4geyBjb3N0VmFsdWU6IDAsIGxvd1N0b2NrOiAwLCBvdXRPZlN0b2NrOiAwLCBzdG9ja1ZhbHVlOiAwIH07XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBMT09LVVAgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbihjb2RlOiBzdHJpbmcsIGJyYW5jaElkOiBzdHJpbmcpIHtcclxuICBpZiAoIWNvZGUgfHwgIWJyYW5jaElkKSByZXR1cm4gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbG93ZXJDb2RlID0gY29kZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBicmFuY2hJZCxcclxuICAgICAgICBPUjogW1xyXG4gICAgICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBsb3dlckNvZGUsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgICAgeyBza3U6IHsgY29udGFpbnM6IGxvd2VyQ29kZSwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm9kdWN0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbbG9va3VwUHJvZHVjdEJ5QmFyY29kZUFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0gQkFSQ09ERSBTQ0FOTkVSIChhbGwgcHJvZHVjdHMgZm9yIHNjYW5uZXIgcHJlbG9hZCkgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbihicmFuY2hJZDogc3RyaW5nKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBicmFuY2hJZCB9LFxyXG4gICAgICBzZWxlY3Q6IHtcclxuICAgICAgICBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSwgYmFyY29kZTogdHJ1ZSwgc2t1OiB0cnVlLFxyXG4gICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSwgY29zdFByaWNlOiB0cnVlLCBzdG9jazogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSwgY2F0ZWdvcnlJZDogdHJ1ZSwgYnJhbmNoSWQ6IHRydWUsXHJcbiAgICAgICAgbWluU3RvY2s6IHRydWUsIGltYWdlVXJsOiB0cnVlLCBjcmVhdGVkQXQ6IHRydWUsIHVwZGF0ZWRBdDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb2R1Y3RzO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdbZ2V0UHJvZHVjdHNGb3JCYXJjb2RlU2Nhbm5lckFjdGlvbl0gRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIFNBTEUgQ0FTSCBUUkFOU0FDVElPTiBJRCBVUERBVEUgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2FsZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihzYWxlSWQ6IHN0cmluZywgY2FzaFRyYW5zYWN0aW9uSWQ6IHN0cmluZykge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBkYi5zYWxlLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBzYWxlSWQgfSxcclxuICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignW3VwZGF0ZVNhbGVDYXNoVHJhbnNhY3Rpb25BY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tIEZJTFRFUkVEIFBST0RVQ1RTIEZPUiBFWFBPUlQgKGFsbCBwYWdlcykgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsdGVyZWRQcm9kdWN0c0ZvckV4cG9ydEFjdGlvbihcclxuICBicmFuY2hJZDogc3RyaW5nLFxyXG4gIGZpbHRlcnM/OiB7IHNlYXJjaD86IHN0cmluZzsgY2F0ZWdvcnk/OiBzdHJpbmc7IHN0b2NrU3RhdHVzPzogc3RyaW5nIH1cclxuKSB7XHJcbiAgaWYgKCFicmFuY2hJZCkgcmV0dXJuIFtdO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB3aGVyZTogYW55ID0geyBicmFuY2hJZCB9O1xyXG5cclxuICAgIGlmIChmaWx0ZXJzPy5zZWFyY2gpIHtcclxuICAgICAgY29uc3QgcyA9IGZpbHRlcnMuc2VhcmNoO1xyXG4gICAgICB3aGVyZS5PUiA9IFtcclxuICAgICAgICB7IG5hbWU6IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHMsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICAgIHsgc2t1OiB7IGNvbnRhaW5zOiBzLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVycz8uc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgICB3aGVyZS5zdG9jayA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKGZpbHRlcnM/LnN0b2NrU3RhdHVzID09PSAnaW5TdG9jaycpIHtcclxuICAgICAgd2hlcmUuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgd2hlcmUsXHJcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0cztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignW2dldEZpbHRlcmVkUHJvZHVjdHNGb3JFeHBvcnRBY3Rpb25dIEVycm9yOicsIGVycm9yKTtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0ErSXNCLG1NQUFBIn0=
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
"[project]/src/app/actions/data:f9bffa [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSalesAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"7075bde107094bcee88803531f90399cdcae549f4b":"getSalesAction"},"src/app/actions/sales.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7075bde107094bcee88803531f90399cdcae549f4b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getSalesAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2FsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhbGVzQWN0aW9uKGJ1c2luZXNzSWQ6IHN0cmluZywgc29ydE9yZGVyOiAnYXNjJyB8ICdkZXNjJyA9ICdkZXNjJywgcGFnZVNpemU/OiBudW1iZXIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBzb3J0T3JkZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChwYWdlU2l6ZSAmJiBwYWdlU2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgcXVlcnlPcHRpb25zLnRha2UgPSBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbGVzID0gYXdhaXQgZGIuc2FsZS5maW5kTWFueShxdWVyeU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBQcm92aWRlIGRlZmF1bHQgbWFwcGluZ3MgdG8gZXhpc3RpbmcgUmVhY3QgY29tcG9uZW50c1xyXG4gICAgICAgIHJldHVybiBzYWxlcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGl0ZW0udXNlcklkLFxyXG4gICAgICAgICAgICBsb2NhdGlvbl9pZDogaXRlbS5icmFuY2hJZCxcclxuICAgICAgICAgICAgcmVjZWlwdF9udW1iZXI6IGl0ZW0uc2FsZU51bWJlcixcclxuICAgICAgICAgICAgY3VzdG9tZXJfbmFtZTogaXRlbS5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyX2FkZHJlc3M6IGl0ZW0uY3VzdG9tZXJBZGRyZXNzLFxyXG4gICAgICAgICAgICBjdXN0b21lcl9jb250YWN0OiBpdGVtLmN1c3RvbWVyUGhvbmUsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyX2lkOiBpdGVtLmN1c3RvbWVySWQsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtLml0ZW1zIGFzIGFueSwgLy8ganNvbmIgdHlwZVxyXG4gICAgICAgICAgICBwYXltZW50X3N0YXR1czogaXRlbS5wYXltZW50U3RhdHVzLFxyXG4gICAgICAgICAgICBwcm9maXQ6IDAsIC8vIFByb2ZpdCBub3Qgc3RvcmVkIGRpcmVjdGx5XHJcbiAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB0YXhfcmF0ZTogaXRlbS50YXhSYXRlID8gTnVtYmVyKGl0ZW0udGF4UmF0ZSkgOiAwLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBpdGVtLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBpdGVtLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBjYXNoX3RyYW5zYWN0aW9uX2lkOiBpdGVtLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICBhbW91bnRfcGFpZDogTnVtYmVyKGl0ZW0uYW1vdW50UGFpZCksXHJcbiAgICAgICAgICAgIGFtb3VudF9kdWU6IE51bWJlcihpdGVtLmJhbGFuY2UpLFxyXG4gICAgICAgICAgICBjYXRlZ29yeV9pZDogaXRlbS5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICBub3RlczogaXRlbS5ub3Rlc1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2FsZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNhbGVBY3Rpb24oaWQ6IHN0cmluZywgYnVzaW5lc3NJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNhbGUgPSBhd2FpdCBkYi5zYWxlLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICBpbmNsdWRlOiB7IGNhc2hUcmFuc2FjdGlvbjogdHJ1ZSwgaW5zdGFsbG1lbnRQYXltZW50czogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc2FsZSB8fCBzYWxlLmJyYW5jaElkICE9PSBidXNpbmVzc0lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1NhbGUgbm90IGZvdW5kIG9yIHVuYXV0aG9yaXplZCcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gRGVsZXRlIGluc3RhbGxtZW50c1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBzYWxlSWQ6IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZWxldGUgYXNzb2NpYXRlZCBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChzYWxlLmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogc2FsZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBzYWxlIGl0c2VsZlxyXG4gICAgICAgICAgICBhd2FpdCB0eC5zYWxlLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBzYWxlOiB7XHJcbiAgICAgICAgICAgICAgICByZWNlaXB0TnVtYmVyOiBzYWxlLnNhbGVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IHNhbGUuY3VzdG9tZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJBZGRyZXNzOiBzYWxlLmN1c3RvbWVyQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyQ29udGFjdDogc2FsZS5jdXN0b21lclBob25lLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudFN0YXR1czogc2FsZS5wYXltZW50U3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IHNhbGUuY2FzaFRyYW5zYWN0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogc2FsZS5pdGVtcyBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICBhbW91bnRQYWlkOiBOdW1iZXIoc2FsZS5hbW91bnRQYWlkKSxcclxuICAgICAgICAgICAgICAgIGFtb3VudER1ZTogTnVtYmVyKHNhbGUuYmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBwcm9maXQ6IDAsXHJcbiAgICAgICAgICAgICAgICB0YXhSYXRlOiBOdW1iZXIoc2FsZS50YXhSYXRlKSxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBzYWxlLm5vdGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHNhbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGRlbGV0ZSBzYWxlJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0U2FsZUFjdGlvbihzYWxlRGJEYXRhOiBhbnksIGlzVXBkYXRlOiBib29sZWFuLCB1cGRhdGVJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNYXAgUGF5bWVudFN0YXR1cyBpZiBuZWVkZWRcclxuICAgICAgICBsZXQgc3RhdHVzID0gc2FsZURiRGF0YS5wYXltZW50X3N0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnTk9UIFBBSUQnKSBzdGF0dXMgPSAnVU5QQUlEJztcclxuICAgICAgICBlbHNlIGlmIChzdGF0dXMgPT09ICdJbnN0YWxsbWVudCBTYWxlJykgc3RhdHVzID0gJ0lOU1RBTExNRU5UJztcclxuICAgICAgICBlbHNlIGlmIChzdGF0dXMgPT09ICdQYWlkJykgc3RhdHVzID0gJ1BBSUQnO1xyXG4gICAgICAgIGVsc2UgaWYgKHN0YXR1cyA9PT0gJ1F1b3RlJykgc3RhdHVzID0gJ1FVT1RFJztcclxuXHJcbiAgICAgICAgY29uc3QgcHJpc21hRGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHNhbGVEYkRhdGEudXNlcl9pZCxcclxuICAgICAgICAgICAgYnJhbmNoSWQ6IHNhbGVEYkRhdGEubG9jYXRpb25faWQsXHJcbiAgICAgICAgICAgIHNhbGVOdW1iZXI6IHNhbGVEYkRhdGEucmVjZWlwdF9udW1iZXIsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyTmFtZTogc2FsZURiRGF0YS5jdXN0b21lcl9uYW1lLFxyXG4gICAgICAgICAgICBjdXN0b21lckFkZHJlc3M6IHNhbGVEYkRhdGEuY3VzdG9tZXJfYWRkcmVzcyxcclxuICAgICAgICAgICAgY3VzdG9tZXJQaG9uZTogc2FsZURiRGF0YS5jdXN0b21lcl9jb250YWN0LFxyXG4gICAgICAgICAgICBjdXN0b21lcklkOiBzYWxlRGJEYXRhLmN1c3RvbWVyX2lkLFxyXG4gICAgICAgICAgICBpdGVtczogc2FsZURiRGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgcGF5bWVudFN0YXR1czogc3RhdHVzLFxyXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShzYWxlRGJEYXRhLmRhdGUpLFxyXG4gICAgICAgICAgICB0YXhSYXRlOiBzYWxlRGJEYXRhLnRheF9yYXRlLFxyXG4gICAgICAgICAgICBjYXNoVHJhbnNhY3Rpb25JZDogc2FsZURiRGF0YS5jYXNoX3RyYW5zYWN0aW9uX2lkLFxyXG4gICAgICAgICAgICBhbW91bnRQYWlkOiBzYWxlRGJEYXRhLmFtb3VudF9wYWlkLFxyXG4gICAgICAgICAgICBiYWxhbmNlOiBzYWxlRGJEYXRhLmFtb3VudF9kdWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHNhbGVEYkRhdGEuY2F0ZWdvcnlfaWQsXHJcbiAgICAgICAgICAgIG5vdGVzOiBzYWxlRGJEYXRhLm5vdGVzLFxyXG4gICAgICAgICAgICBzdWJ0b3RhbDogMCwgLy8gUGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgdG90YWw6IDAsICAgICAvLyBQbGFjZWhvbGRlclxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChpc1VwZGF0ZSAmJiB1cGRhdGVJZCkge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuc2FsZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHVwZGF0ZUlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwcmlzbWFEYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1cGRhdGVkIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IGRiLnNhbGUuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByaXNtYURhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNyZWF0ZWQgfTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBzZXJ0aW5nIHNhbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHByZXNlcnZlIHNhbGUnIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWNlaXB0QWN0aW9uKHNhbGVEYXRhOiBhbnksIGJ1c2luZXNzSWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IHNhbGVEYXRhLnBheW1lbnRTdGF0dXM7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ05PVCBQQUlEJykgc3RhdHVzID0gJ1VOUEFJRCc7XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdHVzID09PSAnSW5zdGFsbG1lbnQgU2FsZScpIHN0YXR1cyA9ICdJTlNUQUxMTUVOVCc7XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdHVzID09PSAnUGFpZCcpIHN0YXR1cyA9ICdQQUlEJztcclxuICAgICAgICBlbHNlIGlmIChzdGF0dXMgPT09ICdRdW90ZScpIHN0YXR1cyA9ICdRVU9URSc7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBkYi5zYWxlLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJ1c2luZXNzSWQsXHJcbiAgICAgICAgICAgICAgICBzYWxlTnVtYmVyOiBzYWxlRGF0YS5yZWNlaXB0TnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJOYW1lOiBzYWxlRGF0YS5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcklkOiBzYWxlRGF0YS5jdXN0b21lcklkLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoc2FsZURhdGEuZGF0ZSksXHJcbiAgICAgICAgICAgICAgICBpdGVtczogc2FsZURhdGEuaXRlbXMsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50U3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBhbW91bnRQYWlkOiBzYWxlRGF0YS5hbW91bnRQYWlkIHx8IDAsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiBzYWxlRGF0YS5hbW91bnREdWUgfHwgMCxcclxuICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHNhbGVEYXRhLmNhc2hBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICBub3Rlczogc2FsZURhdGEubm90ZXMsXHJcbiAgICAgICAgICAgICAgICBzdWJ0b3RhbDogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvc2FsZXMnKTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjcmVhdGVkIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcmVjZWlwdDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gY3JlYXRlIHJlY2VpcHQnIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBTQUxFUyBDQVRFR09SSUVTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhbGVzQ2F0ZWdvcmllc0FjdGlvbihidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLnNhbGVDYXRlZ29yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBidXNpbmVzc0lkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjYXRlZ29yaWVzIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2FsZXMgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTYWxlc0NhdGVnb3J5QWN0aW9uKGJ1c2luZXNzSWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5zYWxlQ2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJ1c2luZXNzSWQsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgaXNfZGVmYXVsdDogaXNEZWZhdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9zYWxlcycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgc2FsZXMgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2FsZXNDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5zYWxlQ2F0ZWdvcnkudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YTogeyBuYW1lIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9zYWxlcycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgc2FsZXMgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2FsZXNDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLnNhbGVDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvc2FsZXMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgc2FsZXMgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ1VTVE9NRVIgTE9PS1VQIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyQnlOYW1lQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKCFicmFuY2hJZCB8fCAhbmFtZSkgcmV0dXJuIG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgZGIuY3VzdG9tZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogeyBjb250YWluczogbmFtZSwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb29raW5nIHVwIGN1c3RvbWVyIGJ5IG5hbWU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2FsZUN1c3RvbWVyQWN0aW9uKHNhbGVJZDogc3RyaW5nLCBjdXN0b21lcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuc2FsZS51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2FsZUlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgY3VzdG9tZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHNhbGUgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gU0FMRVMgR09BTFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2FsZXNHb2FsQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBicmFuY2hJZDogc3RyaW5nLCBtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZ29hbCA9IGF3YWl0IGRiLnNhbGVzR29hbC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyB1c2VySWQsIGJyYW5jaElkLCBwZXJpb2Q6IGAke3llYXJ9LSR7U3RyaW5nKG1vbnRoKS5wYWRTdGFydCgyLCAnMCcpfWAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGdvYWwgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzYWxlcyBnb2FsOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwc2VydFNhbGVzR29hbEFjdGlvbihcclxuICAgIHVzZXJJZDogc3RyaW5nLFxyXG4gICAgYnJhbmNoSWQ6IHN0cmluZyxcclxuICAgIG1vbnRoOiBudW1iZXIsXHJcbiAgICB5ZWFyOiBudW1iZXIsXHJcbiAgICBhbW91bnQ6IG51bWJlcixcclxuICAgIGV4aXN0aW5nR29hbElkPzogc3RyaW5nIHwgbnVsbFxyXG4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGVyaW9kID0gYCR7eWVhcn0tJHtTdHJpbmcobW9udGgpLnBhZFN0YXJ0KDIsICcwJyl9YDtcclxuXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nR29hbElkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5zYWxlc0dvYWwudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleGlzdGluZ0dvYWxJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0YXJnZXQ6IGFtb3VudCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1cGRhdGVkIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IGRiLnNhbGVzR29hbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoeWVhciwgbW9udGgsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2FjdGl2ZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNyZWF0ZWQgfTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBzZXJ0aW5nIHNhbGVzIGdvYWw6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyaW9kU2FsZXNBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZywgc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNhbGVzID0gYXdhaXQgZGIuc2FsZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHsgZ3RlOiBzdGFydERhdGUsIGx0ZTogZW5kRGF0ZSB9LFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudFN0YXR1czogeyBub3Q6ICdRVU9URScgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHsgYW1vdW50UGFpZDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gc2FsZXMucmVkdWNlKChzdW0sIHNhbGUpID0+IHN1bSArIE51bWJlcihzYWxlLmFtb3VudFBhaWQgfHwgMCksIDApO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRvdGFsIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGVyaW9kIHNhbGVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJSQUtzQiwyTEFBQSJ9
}),
"[project]/src/app/actions/data:4ed61d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteSaleAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6024f56e078e458896c223d462d138a5f485546baf":"deleteSaleAction"},"src/app/actions/sales.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6024f56e078e458896c223d462d138a5f485546baf", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteSaleAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2FsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhbGVzQWN0aW9uKGJ1c2luZXNzSWQ6IHN0cmluZywgc29ydE9yZGVyOiAnYXNjJyB8ICdkZXNjJyA9ICdkZXNjJywgcGFnZVNpemU/OiBudW1iZXIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBzb3J0T3JkZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChwYWdlU2l6ZSAmJiBwYWdlU2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgcXVlcnlPcHRpb25zLnRha2UgPSBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbGVzID0gYXdhaXQgZGIuc2FsZS5maW5kTWFueShxdWVyeU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBQcm92aWRlIGRlZmF1bHQgbWFwcGluZ3MgdG8gZXhpc3RpbmcgUmVhY3QgY29tcG9uZW50c1xyXG4gICAgICAgIHJldHVybiBzYWxlcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGl0ZW0udXNlcklkLFxyXG4gICAgICAgICAgICBsb2NhdGlvbl9pZDogaXRlbS5icmFuY2hJZCxcclxuICAgICAgICAgICAgcmVjZWlwdF9udW1iZXI6IGl0ZW0uc2FsZU51bWJlcixcclxuICAgICAgICAgICAgY3VzdG9tZXJfbmFtZTogaXRlbS5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyX2FkZHJlc3M6IGl0ZW0uY3VzdG9tZXJBZGRyZXNzLFxyXG4gICAgICAgICAgICBjdXN0b21lcl9jb250YWN0OiBpdGVtLmN1c3RvbWVyUGhvbmUsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyX2lkOiBpdGVtLmN1c3RvbWVySWQsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBpdGVtLml0ZW1zIGFzIGFueSwgLy8ganNvbmIgdHlwZVxyXG4gICAgICAgICAgICBwYXltZW50X3N0YXR1czogaXRlbS5wYXltZW50U3RhdHVzLFxyXG4gICAgICAgICAgICBwcm9maXQ6IDAsIC8vIFByb2ZpdCBub3Qgc3RvcmVkIGRpcmVjdGx5XHJcbiAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB0YXhfcmF0ZTogaXRlbS50YXhSYXRlID8gTnVtYmVyKGl0ZW0udGF4UmF0ZSkgOiAwLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBpdGVtLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBpdGVtLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBjYXNoX3RyYW5zYWN0aW9uX2lkOiBpdGVtLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICBhbW91bnRfcGFpZDogTnVtYmVyKGl0ZW0uYW1vdW50UGFpZCksXHJcbiAgICAgICAgICAgIGFtb3VudF9kdWU6IE51bWJlcihpdGVtLmJhbGFuY2UpLFxyXG4gICAgICAgICAgICBjYXRlZ29yeV9pZDogaXRlbS5jYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICBub3RlczogaXRlbS5ub3Rlc1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2FsZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNhbGVBY3Rpb24oaWQ6IHN0cmluZywgYnVzaW5lc3NJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNhbGUgPSBhd2FpdCBkYi5zYWxlLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICBpbmNsdWRlOiB7IGNhc2hUcmFuc2FjdGlvbjogdHJ1ZSwgaW5zdGFsbG1lbnRQYXltZW50czogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc2FsZSB8fCBzYWxlLmJyYW5jaElkICE9PSBidXNpbmVzc0lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1NhbGUgbm90IGZvdW5kIG9yIHVuYXV0aG9yaXplZCcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcclxuICAgICAgICAgICAgLy8gRGVsZXRlIGluc3RhbGxtZW50c1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBzYWxlSWQ6IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZWxldGUgYXNzb2NpYXRlZCBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChzYWxlLmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogc2FsZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBzYWxlIGl0c2VsZlxyXG4gICAgICAgICAgICBhd2FpdCB0eC5zYWxlLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBzYWxlOiB7XHJcbiAgICAgICAgICAgICAgICByZWNlaXB0TnVtYmVyOiBzYWxlLnNhbGVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IHNhbGUuY3VzdG9tZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJBZGRyZXNzOiBzYWxlLmN1c3RvbWVyQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyQ29udGFjdDogc2FsZS5jdXN0b21lclBob25lLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudFN0YXR1czogc2FsZS5wYXltZW50U3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IHNhbGUuY2FzaFRyYW5zYWN0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogc2FsZS5pdGVtcyBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICBhbW91bnRQYWlkOiBOdW1iZXIoc2FsZS5hbW91bnRQYWlkKSxcclxuICAgICAgICAgICAgICAgIGFtb3VudER1ZTogTnVtYmVyKHNhbGUuYmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBwcm9maXQ6IDAsXHJcbiAgICAgICAgICAgICAgICB0YXhSYXRlOiBOdW1iZXIoc2FsZS50YXhSYXRlKSxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBzYWxlLm5vdGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHNhbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGRlbGV0ZSBzYWxlJyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0U2FsZUFjdGlvbihzYWxlRGJEYXRhOiBhbnksIGlzVXBkYXRlOiBib29sZWFuLCB1cGRhdGVJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNYXAgUGF5bWVudFN0YXR1cyBpZiBuZWVkZWRcclxuICAgICAgICBsZXQgc3RhdHVzID0gc2FsZURiRGF0YS5wYXltZW50X3N0YXR1cztcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAnTk9UIFBBSUQnKSBzdGF0dXMgPSAnVU5QQUlEJztcclxuICAgICAgICBlbHNlIGlmIChzdGF0dXMgPT09ICdJbnN0YWxsbWVudCBTYWxlJykgc3RhdHVzID0gJ0lOU1RBTExNRU5UJztcclxuICAgICAgICBlbHNlIGlmIChzdGF0dXMgPT09ICdQYWlkJykgc3RhdHVzID0gJ1BBSUQnO1xyXG4gICAgICAgIGVsc2UgaWYgKHN0YXR1cyA9PT0gJ1F1b3RlJykgc3RhdHVzID0gJ1FVT1RFJztcclxuXHJcbiAgICAgICAgY29uc3QgcHJpc21hRGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHNhbGVEYkRhdGEudXNlcl9pZCxcclxuICAgICAgICAgICAgYnJhbmNoSWQ6IHNhbGVEYkRhdGEubG9jYXRpb25faWQsXHJcbiAgICAgICAgICAgIHNhbGVOdW1iZXI6IHNhbGVEYkRhdGEucmVjZWlwdF9udW1iZXIsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyTmFtZTogc2FsZURiRGF0YS5jdXN0b21lcl9uYW1lLFxyXG4gICAgICAgICAgICBjdXN0b21lckFkZHJlc3M6IHNhbGVEYkRhdGEuY3VzdG9tZXJfYWRkcmVzcyxcclxuICAgICAgICAgICAgY3VzdG9tZXJQaG9uZTogc2FsZURiRGF0YS5jdXN0b21lcl9jb250YWN0LFxyXG4gICAgICAgICAgICBjdXN0b21lcklkOiBzYWxlRGJEYXRhLmN1c3RvbWVyX2lkLFxyXG4gICAgICAgICAgICBpdGVtczogc2FsZURiRGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgcGF5bWVudFN0YXR1czogc3RhdHVzLFxyXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShzYWxlRGJEYXRhLmRhdGUpLFxyXG4gICAgICAgICAgICB0YXhSYXRlOiBzYWxlRGJEYXRhLnRheF9yYXRlLFxyXG4gICAgICAgICAgICBjYXNoVHJhbnNhY3Rpb25JZDogc2FsZURiRGF0YS5jYXNoX3RyYW5zYWN0aW9uX2lkLFxyXG4gICAgICAgICAgICBhbW91bnRQYWlkOiBzYWxlRGJEYXRhLmFtb3VudF9wYWlkLFxyXG4gICAgICAgICAgICBiYWxhbmNlOiBzYWxlRGJEYXRhLmFtb3VudF9kdWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHNhbGVEYkRhdGEuY2F0ZWdvcnlfaWQsXHJcbiAgICAgICAgICAgIG5vdGVzOiBzYWxlRGJEYXRhLm5vdGVzLFxyXG4gICAgICAgICAgICBzdWJ0b3RhbDogMCwgLy8gUGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgdG90YWw6IDAsICAgICAvLyBQbGFjZWhvbGRlclxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChpc1VwZGF0ZSAmJiB1cGRhdGVJZCkge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIuc2FsZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHVwZGF0ZUlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwcmlzbWFEYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1cGRhdGVkIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IGRiLnNhbGUuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByaXNtYURhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNyZWF0ZWQgfTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBzZXJ0aW5nIHNhbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHByZXNlcnZlIHNhbGUnIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZWNlaXB0QWN0aW9uKHNhbGVEYXRhOiBhbnksIGJ1c2luZXNzSWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IHNhbGVEYXRhLnBheW1lbnRTdGF0dXM7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ05PVCBQQUlEJykgc3RhdHVzID0gJ1VOUEFJRCc7XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdHVzID09PSAnSW5zdGFsbG1lbnQgU2FsZScpIHN0YXR1cyA9ICdJTlNUQUxMTUVOVCc7XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdHVzID09PSAnUGFpZCcpIHN0YXR1cyA9ICdQQUlEJztcclxuICAgICAgICBlbHNlIGlmIChzdGF0dXMgPT09ICdRdW90ZScpIHN0YXR1cyA9ICdRVU9URSc7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBkYi5zYWxlLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJ1c2luZXNzSWQsXHJcbiAgICAgICAgICAgICAgICBzYWxlTnVtYmVyOiBzYWxlRGF0YS5yZWNlaXB0TnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJOYW1lOiBzYWxlRGF0YS5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lcklkOiBzYWxlRGF0YS5jdXN0b21lcklkLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoc2FsZURhdGEuZGF0ZSksXHJcbiAgICAgICAgICAgICAgICBpdGVtczogc2FsZURhdGEuaXRlbXMsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50U3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBhbW91bnRQYWlkOiBzYWxlRGF0YS5hbW91bnRQYWlkIHx8IDAsXHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiBzYWxlRGF0YS5hbW91bnREdWUgfHwgMCxcclxuICAgICAgICAgICAgICAgIGNhc2hBY2NvdW50SWQ6IHNhbGVEYXRhLmNhc2hBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICBub3Rlczogc2FsZURhdGEubm90ZXMsXHJcbiAgICAgICAgICAgICAgICBzdWJ0b3RhbDogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvc2FsZXMnKTtcclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2N1c3RvbWVycycpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjcmVhdGVkIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcmVjZWlwdDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gY3JlYXRlIHJlY2VpcHQnIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBTQUxFUyBDQVRFR09SSUVTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhbGVzQ2F0ZWdvcmllc0FjdGlvbihidXNpbmVzc0lkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGRiLnNhbGVDYXRlZ29yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGJyYW5jaElkOiBidXNpbmVzc0lkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgbmFtZTogJ2FzYycgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjYXRlZ29yaWVzIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2FsZXMgY2F0ZWdvcmllczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTYWxlc0NhdGVnb3J5QWN0aW9uKGJ1c2luZXNzSWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5zYWxlQ2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYnJhbmNoSWQ6IGJ1c2luZXNzSWQsXHJcbiAgICAgICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgaXNfZGVmYXVsdDogaXNEZWZhdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9zYWxlcycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgc2FsZXMgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2FsZXNDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBkYi5zYWxlQ2F0ZWdvcnkudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YTogeyBuYW1lIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9zYWxlcycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNhdGVnb3J5IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgc2FsZXMgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2FsZXNDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLnNhbGVDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvc2FsZXMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgc2FsZXMgY2F0ZWdvcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ1VTVE9NRVIgTE9PS1VQIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1c3RvbWVyQnlOYW1lQWN0aW9uKGJyYW5jaElkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKCFicmFuY2hJZCB8fCAhbmFtZSkgcmV0dXJuIG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyID0gYXdhaXQgZGIuY3VzdG9tZXIuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIGJyYW5jaElkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogeyBjb250YWluczogbmFtZSwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgbmFtZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb29raW5nIHVwIGN1c3RvbWVyIGJ5IG5hbWU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2FsZUN1c3RvbWVyQWN0aW9uKHNhbGVJZDogc3RyaW5nLCBjdXN0b21lcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuc2FsZS51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZDogc2FsZUlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgY3VzdG9tZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHNhbGUgY3VzdG9tZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gU0FMRVMgR09BTFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2FsZXNHb2FsQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBicmFuY2hJZDogc3RyaW5nLCBtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZ29hbCA9IGF3YWl0IGRiLnNhbGVzR29hbC5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyB1c2VySWQsIGJyYW5jaElkLCBwZXJpb2Q6IGAke3llYXJ9LSR7U3RyaW5nKG1vbnRoKS5wYWRTdGFydCgyLCAnMCcpfWAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGdvYWwgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzYWxlcyBnb2FsOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwc2VydFNhbGVzR29hbEFjdGlvbihcclxuICAgIHVzZXJJZDogc3RyaW5nLFxyXG4gICAgYnJhbmNoSWQ6IHN0cmluZyxcclxuICAgIG1vbnRoOiBudW1iZXIsXHJcbiAgICB5ZWFyOiBudW1iZXIsXHJcbiAgICBhbW91bnQ6IG51bWJlcixcclxuICAgIGV4aXN0aW5nR29hbElkPzogc3RyaW5nIHwgbnVsbFxyXG4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcGVyaW9kID0gYCR7eWVhcn0tJHtTdHJpbmcobW9udGgpLnBhZFN0YXJ0KDIsICcwJyl9YDtcclxuXHJcbiAgICAgICAgaWYgKGV4aXN0aW5nR29hbElkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5zYWxlc0dvYWwudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleGlzdGluZ0dvYWxJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0YXJnZXQ6IGFtb3VudCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXZhbGlkYXRlUGF0aCgnLycpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1cGRhdGVkIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IGRiLnNhbGVzR29hbC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmlvZCxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoeWVhciwgbW9udGgsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2FjdGl2ZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldmFsaWRhdGVQYXRoKCcvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNyZWF0ZWQgfTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBzZXJ0aW5nIHNhbGVzIGdvYWw6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVyaW9kU2FsZXNBY3Rpb24oYnJhbmNoSWQ6IHN0cmluZywgc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHNhbGVzID0gYXdhaXQgZGIuc2FsZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHsgZ3RlOiBzdGFydERhdGUsIGx0ZTogZW5kRGF0ZSB9LFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudFN0YXR1czogeyBub3Q6ICdRVU9URScgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHsgYW1vdW50UGFpZDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gc2FsZXMucmVkdWNlKChzdW0sIHNhbGUpID0+IHN1bSArIE51bWJlcihzYWxlLmFtb3VudFBhaWQgfHwgMCksIDApO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRvdGFsIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGVyaW9kIHNhbGVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZSQXNEc0IsNkxBQUEifQ==
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
"[project]/src/hooks/useDashboardData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDashboardData",
    ()=>useDashboardData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSalesData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAppUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAppUpdate.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const useDashboardData = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { isLoading: businessLoading, error: businessError, currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { settings, isLoading: settingsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    // Load all sales for accurate analytics calculations
    // The AnalyticsDashboard component is already lazy-loaded, so this won't block initial render
    const { sales, isLoading: salesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"])(user?.id, 'desc');
    const { updateAvailable, isUpdating, triggerUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAppUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppUpdate"])();
    // Memoize page title computation with more efficient logic
    const pageTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDashboardData.useMemo[pageTitle]": ()=>{
            if (!settings.businessName || settings.businessName === 'Your Business Name') {
                return 'Dashboard';
            }
            return settings.businessName;
        }
    }["useDashboardData.useMemo[pageTitle]"], [
        settings.businessName
    ]);
    // Memoize non-quote sales count with early return optimization
    const nonQuoteSalesCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDashboardData.useMemo[nonQuoteSalesCount]": ()=>{
            if (!sales.length) return 0;
            return sales.filter({
                "useDashboardData.useMemo[nonQuoteSalesCount]": (sale)=>sale.paymentStatus !== 'Quote'
            }["useDashboardData.useMemo[nonQuoteSalesCount]"]).length;
        }
    }["useDashboardData.useMemo[nonQuoteSalesCount]"], [
        sales
    ]);
    // Optimize loading state calculation
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDashboardData.useMemo[isLoading]": ()=>{
            return salesLoading || settingsLoading || businessLoading;
        }
    }["useDashboardData.useMemo[isLoading]"], [
        salesLoading,
        settingsLoading,
        businessLoading
    ]);
    return {
        user,
        businessError,
        currentBusiness,
        settings,
        sales,
        pageTitle,
        nonQuoteSalesCount,
        isLoading,
        updateAvailable,
        isUpdating,
        triggerUpdate
    };
};
_s(useDashboardData, "RlzNJ9B+3gDxXivgiQRVjwXPHW0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAppUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppUpdate"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useDashboardActions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDashboardActions",
    ()=>useDashboardActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useDashboardActions = ()=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Optimized refresh handler with mobile considerations
    const handleRefresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboardActions.useCallback[handleRefresh]": async ()=>{
            setIsRefreshing(true);
            toast({
                title: "Updating app",
                description: "Getting the latest updates and refreshing data..."
            });
            try {
                // Clear caches more efficiently for mobile
                if ('caches' in window) {
                    const cacheNames = await caches.keys();
                    await Promise.all(cacheNames.map({
                        "useDashboardActions.useCallback[handleRefresh]": (name)=>caches.delete(name)
                    }["useDashboardActions.useCallback[handleRefresh]"]));
                }
                // Clear sessionStorage
                sessionStorage.clear();
                // Force complete reload from server
                setTimeout({
                    "useDashboardActions.useCallback[handleRefresh]": ()=>{
                        window.location.reload();
                    }
                }["useDashboardActions.useCallback[handleRefresh]"], 800); // Shorter delay for mobile
            } catch (error) {
                console.error('Error during app update:', error);
                setIsRefreshing(false);
                toast({
                    title: "Update failed",
                    description: "There was an error updating the app. Please try again.",
                    variant: "destructive"
                });
            }
        }
    }["useDashboardActions.useCallback[handleRefresh]"], [
        toast
    ]);
    const handleQuickCreate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDashboardActions.useCallback[handleQuickCreate]": (paymentStatus)=>{
            navigate('/new-sale', {
                state: {
                    defaultPaymentStatus: paymentStatus
                }
            });
        }
    }["useDashboardActions.useCallback[handleQuickCreate]"], [
        navigate
    ]);
    return {
        isRefreshing,
        handleRefresh,
        handleQuickCreate
    };
};
_s(useDashboardActions, "MiykkyygW/f7ll8Gs3cdI4t8Z3g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/Index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UpdateNotificationButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UpdateNotificationButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$DashboardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/DashboardSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/DashboardHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$QuickActionButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/QuickActionButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$WelcomeState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/WelcomeState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDashboardData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDashboardData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDashboardActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDashboardActions.ts [app-client] (ecmascript)");
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
// Lazy load the heavy analytics dashboard
const AnalyticsDashboard = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/src/components/AnalyticsDashboard.tsx [app-client] (ecmascript, async loader)"));
_c = AnalyticsDashboard;
const Index = ()=>{
    _s();
    const { hasPermission, isLoading: profilesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const { businessError, settings, sales, pageTitle, nonQuoteSalesCount, isLoading, updateAvailable, isUpdating, triggerUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDashboardData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardData"])();
    const { isRefreshing, handleRefresh, handleQuickCreate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDashboardActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardActions"])();
    // Handle loading and permissions
    if (profilesLoading || isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary"
            }, void 0, false, {
                fileName: "[project]/src/pages/Index.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/pages/Index.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Dashboard is accessible to everyone, but data is masked inside components based on permissions
    const showWelcome = !isLoading && nonQuoteSalesCount === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$DashboardHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                pageTitle: pageTitle,
                isRefreshing: isRefreshing,
                isLoading: isLoading,
                onRefresh: handleRefresh
            }, void 0, false, {
                fileName: "[project]/src/pages/Index.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            updateAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UpdateNotificationButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onUpdate: triggerUpdate,
                isUpdating: isUpdating
            }, void 0, false, {
                fileName: "[project]/src/pages/Index.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$QuickActionButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onQuickCreate: handleQuickCreate
            }, void 0, false, {
                fileName: "[project]/src/pages/Index.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showWelcome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$WelcomeState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/Index.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$DashboardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/pages/Index.tsx",
                    lineNumber: 67,
                    columnNumber: 29
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnalyticsDashboard, {
                    sales: sales,
                    currency: settings.currency
                }, void 0, false, {
                    fileName: "[project]/src/pages/Index.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/Index.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Index, "/v2CssXi0HqTYlFer5sCSJzT7T4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDashboardData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDashboardActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDashboardActions"]
    ];
});
_c1 = Index;
const __TURBOPACK__default__export__ = Index;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnalyticsDashboard");
__turbopack_context__.k.register(_c1, "Index");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_10c0229f._.js.map