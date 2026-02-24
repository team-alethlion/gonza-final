(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/carriage/CarriageInwardsTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
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
const CarriageInwardsTable = ({ carriageInwards, onEdit, onDelete, onView, isLoading })=>{
    _s();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { canViewCostPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFinancialVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinancialVisibility"])();
    const currency = settings.currency || 'USD';
    const totalAmount = carriageInwards.reduce((sum, record)=>sum + record.amount, 0);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center h-32",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-pulse",
                        children: "Loading carriage inwards records..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (carriageInwards.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-medium",
                            children: "No carriage inwards records found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: "Add your first transport cost record to get started."
                        }, void 0, false, {
                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Carriage Inwards Records"
                        }, void 0, false, {
                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        canViewCostPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Total Amount"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-bold",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCashCurrency"])(totalAmount, currency)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Supplier Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        canViewCostPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-right",
                                            children: "Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                            lineNumber: 82,
                                            columnNumber: 38
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            children: "Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                            className: "text-center",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                children: carriageInwards.map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(record.date, 'MMM dd, yyyy')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "font-medium",
                                                children: record.supplierName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-w-xs truncate",
                                                    title: record.details,
                                                    children: record.details
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            canViewCostPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                className: "text-right font-medium",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCashCurrency"])(record.amount, currency)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: record.cashAccountId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "secondary",
                                                    children: "Paid"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "outline",
                                                    children: "Not Linked"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            onClick: ()=>onView(record),
                                                            title: "View details",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            onClick: ()=>onEdit(record),
                                                            title: "Edit record",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            onClick: ()=>onDelete(record.id),
                                                            title: "Delete record",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-4 w-4 text-red-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, record.id, true, {
                                        fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/carriage/CarriageInwardsTable.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CarriageInwardsTable, "Ffoh2gCcfdZnVIrOJAGofQDpXA8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFinancialVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinancialVisibility"]
    ];
});
_c = CarriageInwardsTable;
const __TURBOPACK__default__export__ = CarriageInwardsTable;
var _c;
__turbopack_context__.k.register(_c, "CarriageInwardsTable");
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
"[project]/src/app/actions/data:29a8f5 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCashAccountsAction",
    ()=>$$RSC_SERVER_ACTION_13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"404e4c969fb4ed9517070820aa9238be69635d81df":"getCashAccountsAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("404e4c969fb4ed9517070820aa9238be69635d81df", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCashAccountsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gMS4gQ3JlYXRlIHRoZSBleHBlbnNlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBjYXNoQWNjb3VudElkOiBsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCA/IGRhdGEuY2FzaEFjY291bnRJZCA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAyLiBJZiBsaW5raW5nIHRvIGNhc2gsIGNyZWF0ZSBhIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgaWYgKGxpbmtUb0Nhc2ggJiYgZGF0YS5jYXNoQWNjb3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmNhc2hBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7ZGF0YS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGRhdGEucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZSB3aXRoIHRyYW5zYWN0aW9uIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleHBlbnNlLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZXhwZW5zZXMgPSBhd2FpdCBkYi5leHBlbnNlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IGRhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGV4cGVuc2VzLm1hcCgoZTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRXhwZW5zZSA9IGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkIHx8IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRMaW5rVG9DYXNoID0gISF1cGRhdGVzLmNhc2hBY2NvdW50SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhc0xpbmtlZFRvQ2FzaCA9ICEhY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiAhd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBjdXJyZW50RXhwZW5zZS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGN1cnJlbnRFeHBlbnNlLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSB8fCBjdXJyZW50RXhwZW5zZS5jYXRlZ29yeSB8fCAnRXhwZW5zZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRXhwZW5zZTogJHt1cGRhdGVzLmRlc2NyaXB0aW9uIHx8IGN1cnJlbnRFeHBlbnNlLmRlc2NyaXB0aW9ufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlIHx8IGN1cnJlbnRFeHBlbnNlLnBlcnNvbkluQ2hhcmdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHVwZGF0ZXMuZGF0ZSB8fCBjdXJyZW50RXhwZW5zZS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiB1cGRhdGVzLnBheW1lbnRNZXRob2QgfHwgY3VycmVudEV4cGVuc2UucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlIHx8IGN1cnJlbnRFeHBlbnNlLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBjYXNoVHguaWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzaG91bGRMaW5rVG9DYXNoICYmIHdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGV4aXN0aW5nIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXJyZW50RXhwZW5zZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkRXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBJTlNUQUxMTUVOVCBQQVlNRU5UUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnN0YWxsbWVudFBheW1lbnRzQWN0aW9uKHNhbGVJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRzID0gYXdhaXQgZGIuaW5zdGFsbG1lbnRQYXltZW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgc2FsZUlkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgcGF5bWVudERhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHBheW1lbnRzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgICAgICAgICAgICBzYWxlSWQ6IHAuc2FsZUlkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKHAuYW1vdW50KSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBwLnBheW1lbnREYXRlLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBub3RlczogcC5ub3RlcyxcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbklkOiBwLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW5zdGFsbG1lbnQgcGF5bWVudHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNhc2hUeElkID0gZGF0YS5jYXNoVHJhbnNhY3Rpb25JZDtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gY3JlYXRlIGEgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5hY2NvdW50SWQgJiYgZGF0YS5sb2NhdGlvbklkICYmICFjYXNoVHhJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FsZSA9IGF3YWl0IHR4LnNhbGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEuc2FsZUlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiB7IGN1c3RvbWVyTmFtZTogdHJ1ZSwgcmVjZWlwdE51bWJlcjogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHNhbGVcclxuICAgICAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3NhbGUuY3VzdG9tZXJOYW1lfSAtIFJlY2VpcHQgIyR7c2FsZS5yZWNlaXB0TnVtYmVyfWBcclxuICAgICAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciBzYWxlYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKGRhdGEucGF5bWVudERhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2hUeElkID0gY2FzaFR4LmlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZUlkOiBkYXRhLnNhbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBkYXRhLnBheW1lbnREYXRlID8gbmV3IERhdGUoZGF0YS5wYXltZW50RGF0ZSkgOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBheW1lbnQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGluc3RhbGxtZW50IHBheW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IHVwZGF0ZXMubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudERhdGU6IHVwZGF0ZXMucGF5bWVudERhdGUgPyBuZXcgRGF0ZSh1cGRhdGVzLnBheW1lbnREYXRlKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudC5jYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKHVwZGF0ZXMucGF5bWVudERhdGUpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBpbnN0YWxsbWVudCBwYXltZW50OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxtZW50UGF5bWVudEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogeyBjYXNoVHJhbnNhY3Rpb25JZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBheW1lbnQ/LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgaW5zdGFsbG1lbnQgcGF5bWVudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaW5rSW5zdGFsbG1lbnRUb0Nhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcsIGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogeyBzYWxlOiB0cnVlIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheW1lbnQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAocGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBhbHJlYWR5IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGF5bWVudC5zYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3BheW1lbnQuc2FsZS5jdXN0b21lck5hbWV9IC0gUmVjZWlwdCAjJHtwYXltZW50LnNhbGUucmVjZWlwdE51bWJlcn1gXHJcbiAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50ICMke3BheW1lbnRJZC5zdWJzdHJpbmcoMCwgOCl9YDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHBheW1lbnQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogcGF5bWVudC5wYXltZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBwYXltZW50SWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNhc2hUeDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbGlua2luZyBpbnN0YWxsbWVudCB0byBjYXNoOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua0luc3RhbGxtZW50RnJvbUNhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcGF5bWVudD8uY2FzaFRyYW5zYWN0aW9uSWQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnQuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogbnVsbCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdW5saW5raW5nIGluc3RhbGxtZW50IGZyb20gY2FzaDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBFWFBFTlNFIENBVEVHT1JJRVMgLS0tXHJcblxyXG4vLyAtLS0gRVhQRU5TRSBDQVRFR09SSUVTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VDYXRlZ29yaWVzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNhdGVnb3JpZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogYy5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogYy5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBleHBlbnNlIGNhdGVnb3JpZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXhwZW5zZUNhdGVnb3J5QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5leHBlbnNlQ2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogZGF0YS5pc0RlZmF1bHQgfHwgZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUV4cGVuc2VDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmV4cGVuc2VDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRFeHBlbnNlQ2F0ZWdvcmllc0FjdGlvbih1c2VySWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBjYXRlZ29yeU5hbWVzOiBzdHJpbmdbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gY2F0ZWdvcnlOYW1lcy5tYXAobmFtZSA9PiAoe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmNyZWF0ZU1hbnkoe1xyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBza2lwRHVwbGljYXRlczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZGVmYXVsdCBjYXRlZ29yaWVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCgodDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4udCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHQuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiB0LnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdC51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB0LmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uX2lkOiB0LmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiB0LnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IHQucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50X21ldGhvZDogdC5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgcmVjZWlwdF9pbWFnZTogdC5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXNoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoVHJhbnNhY3Rpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4SW4gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLnRvQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbdHhPdXQsIHR4SW5dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSA/IG5ldyBEYXRlKGRhdGEuZGF0ZSkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiB1cGRhdGVzLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgdGFnczogdXBkYXRlcy50YWdzLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlID8gbmV3IERhdGUodXBkYXRlcy5kYXRlKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRDYXNoVHJhbnNhY3Rpb25BY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGRiLmNhc2hUcmFuc2FjdGlvbi5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IGFjY291bnRJZDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRyYW5zYWN0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmluZGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBpbnN0YWxsbWVudCBwYXltZW50cyBsaW5rZWQgdG8gdGhpcyB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoVHJhbnNhY3Rpb25JZDogaWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggdHJhbnNhY3Rpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudE9wZW5pbmdCYWxhbmNlQWN0aW9uKGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogTnVtYmVyKGFjY291bnQ/Lm9wZW5pbmdCYWxhbmNlIHx8IDApIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3BlbmluZyBiYWxhbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1bGtDYXNoVHJhbnNhY3Rpb25zQWN0aW9uKHRyYW5zYWN0aW9uczogYW55W10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRyYW5zYWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXInICYmIGRhdGEudG9BY2NvdW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEudG9BY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBidWxrIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvU0FvZXNCLG9NQUFBIn0=
}),
"[project]/src/app/actions/data:18461f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCashAccountAction",
    ()=>$$RSC_SERVER_ACTION_14
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40dcb97687ff077761d5656c206c90b60da7e90768":"createCashAccountAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40dcb97687ff077761d5656c206c90b60da7e90768", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCashAccountAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gMS4gQ3JlYXRlIHRoZSBleHBlbnNlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBjYXNoQWNjb3VudElkOiBsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCA/IGRhdGEuY2FzaEFjY291bnRJZCA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAyLiBJZiBsaW5raW5nIHRvIGNhc2gsIGNyZWF0ZSBhIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgaWYgKGxpbmtUb0Nhc2ggJiYgZGF0YS5jYXNoQWNjb3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmNhc2hBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7ZGF0YS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGRhdGEucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZSB3aXRoIHRyYW5zYWN0aW9uIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleHBlbnNlLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZXhwZW5zZXMgPSBhd2FpdCBkYi5leHBlbnNlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IGRhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGV4cGVuc2VzLm1hcCgoZTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRXhwZW5zZSA9IGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkIHx8IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRMaW5rVG9DYXNoID0gISF1cGRhdGVzLmNhc2hBY2NvdW50SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhc0xpbmtlZFRvQ2FzaCA9ICEhY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiAhd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBjdXJyZW50RXhwZW5zZS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGN1cnJlbnRFeHBlbnNlLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSB8fCBjdXJyZW50RXhwZW5zZS5jYXRlZ29yeSB8fCAnRXhwZW5zZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRXhwZW5zZTogJHt1cGRhdGVzLmRlc2NyaXB0aW9uIHx8IGN1cnJlbnRFeHBlbnNlLmRlc2NyaXB0aW9ufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlIHx8IGN1cnJlbnRFeHBlbnNlLnBlcnNvbkluQ2hhcmdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHVwZGF0ZXMuZGF0ZSB8fCBjdXJyZW50RXhwZW5zZS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiB1cGRhdGVzLnBheW1lbnRNZXRob2QgfHwgY3VycmVudEV4cGVuc2UucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlIHx8IGN1cnJlbnRFeHBlbnNlLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBjYXNoVHguaWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzaG91bGRMaW5rVG9DYXNoICYmIHdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGV4aXN0aW5nIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXJyZW50RXhwZW5zZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkRXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBJTlNUQUxMTUVOVCBQQVlNRU5UUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnN0YWxsbWVudFBheW1lbnRzQWN0aW9uKHNhbGVJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRzID0gYXdhaXQgZGIuaW5zdGFsbG1lbnRQYXltZW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgc2FsZUlkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgcGF5bWVudERhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHBheW1lbnRzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgICAgICAgICAgICBzYWxlSWQ6IHAuc2FsZUlkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKHAuYW1vdW50KSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBwLnBheW1lbnREYXRlLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBub3RlczogcC5ub3RlcyxcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbklkOiBwLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW5zdGFsbG1lbnQgcGF5bWVudHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNhc2hUeElkID0gZGF0YS5jYXNoVHJhbnNhY3Rpb25JZDtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gY3JlYXRlIGEgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5hY2NvdW50SWQgJiYgZGF0YS5sb2NhdGlvbklkICYmICFjYXNoVHhJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FsZSA9IGF3YWl0IHR4LnNhbGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEuc2FsZUlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiB7IGN1c3RvbWVyTmFtZTogdHJ1ZSwgcmVjZWlwdE51bWJlcjogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHNhbGVcclxuICAgICAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3NhbGUuY3VzdG9tZXJOYW1lfSAtIFJlY2VpcHQgIyR7c2FsZS5yZWNlaXB0TnVtYmVyfWBcclxuICAgICAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciBzYWxlYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKGRhdGEucGF5bWVudERhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2hUeElkID0gY2FzaFR4LmlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZUlkOiBkYXRhLnNhbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBkYXRhLnBheW1lbnREYXRlID8gbmV3IERhdGUoZGF0YS5wYXltZW50RGF0ZSkgOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBheW1lbnQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGluc3RhbGxtZW50IHBheW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IHVwZGF0ZXMubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudERhdGU6IHVwZGF0ZXMucGF5bWVudERhdGUgPyBuZXcgRGF0ZSh1cGRhdGVzLnBheW1lbnREYXRlKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudC5jYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKHVwZGF0ZXMucGF5bWVudERhdGUpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBpbnN0YWxsbWVudCBwYXltZW50OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxtZW50UGF5bWVudEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogeyBjYXNoVHJhbnNhY3Rpb25JZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBheW1lbnQ/LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgaW5zdGFsbG1lbnQgcGF5bWVudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaW5rSW5zdGFsbG1lbnRUb0Nhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcsIGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogeyBzYWxlOiB0cnVlIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheW1lbnQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAocGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBhbHJlYWR5IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGF5bWVudC5zYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3BheW1lbnQuc2FsZS5jdXN0b21lck5hbWV9IC0gUmVjZWlwdCAjJHtwYXltZW50LnNhbGUucmVjZWlwdE51bWJlcn1gXHJcbiAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50ICMke3BheW1lbnRJZC5zdWJzdHJpbmcoMCwgOCl9YDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHBheW1lbnQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogcGF5bWVudC5wYXltZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBwYXltZW50SWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNhc2hUeDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbGlua2luZyBpbnN0YWxsbWVudCB0byBjYXNoOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua0luc3RhbGxtZW50RnJvbUNhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcGF5bWVudD8uY2FzaFRyYW5zYWN0aW9uSWQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnQuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogbnVsbCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdW5saW5raW5nIGluc3RhbGxtZW50IGZyb20gY2FzaDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBFWFBFTlNFIENBVEVHT1JJRVMgLS0tXHJcblxyXG4vLyAtLS0gRVhQRU5TRSBDQVRFR09SSUVTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VDYXRlZ29yaWVzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNhdGVnb3JpZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogYy5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogYy5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBleHBlbnNlIGNhdGVnb3JpZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXhwZW5zZUNhdGVnb3J5QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5leHBlbnNlQ2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogZGF0YS5pc0RlZmF1bHQgfHwgZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUV4cGVuc2VDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmV4cGVuc2VDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRFeHBlbnNlQ2F0ZWdvcmllc0FjdGlvbih1c2VySWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBjYXRlZ29yeU5hbWVzOiBzdHJpbmdbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gY2F0ZWdvcnlOYW1lcy5tYXAobmFtZSA9PiAoe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmNyZWF0ZU1hbnkoe1xyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBza2lwRHVwbGljYXRlczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZGVmYXVsdCBjYXRlZ29yaWVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCgodDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4udCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHQuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiB0LnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdC51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB0LmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uX2lkOiB0LmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiB0LnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IHQucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50X21ldGhvZDogdC5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgcmVjZWlwdF9pbWFnZTogdC5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXNoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoVHJhbnNhY3Rpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4SW4gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLnRvQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbdHhPdXQsIHR4SW5dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSA/IG5ldyBEYXRlKGRhdGEuZGF0ZSkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiB1cGRhdGVzLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgdGFnczogdXBkYXRlcy50YWdzLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlID8gbmV3IERhdGUodXBkYXRlcy5kYXRlKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRDYXNoVHJhbnNhY3Rpb25BY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGRiLmNhc2hUcmFuc2FjdGlvbi5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IGFjY291bnRJZDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRyYW5zYWN0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmluZGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBpbnN0YWxsbWVudCBwYXltZW50cyBsaW5rZWQgdG8gdGhpcyB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoVHJhbnNhY3Rpb25JZDogaWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggdHJhbnNhY3Rpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudE9wZW5pbmdCYWxhbmNlQWN0aW9uKGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogTnVtYmVyKGFjY291bnQ/Lm9wZW5pbmdCYWxhbmNlIHx8IDApIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3BlbmluZyBiYWxhbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1bGtDYXNoVHJhbnNhY3Rpb25zQWN0aW9uKHRyYW5zYWN0aW9uczogYW55W10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRyYW5zYWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXInICYmIGRhdGEudG9BY2NvdW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEudG9BY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBidWxrIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0E2ZnNCLHNNQUFBIn0=
}),
"[project]/src/app/actions/data:260401 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateCashAccountAction",
    ()=>$$RSC_SERVER_ACTION_15
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"608cfd9a6361204aef1789b1c8cec0c7a7251b5da6":"updateCashAccountAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("608cfd9a6361204aef1789b1c8cec0c7a7251b5da6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateCashAccountAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gMS4gQ3JlYXRlIHRoZSBleHBlbnNlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBjYXNoQWNjb3VudElkOiBsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCA/IGRhdGEuY2FzaEFjY291bnRJZCA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAyLiBJZiBsaW5raW5nIHRvIGNhc2gsIGNyZWF0ZSBhIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgaWYgKGxpbmtUb0Nhc2ggJiYgZGF0YS5jYXNoQWNjb3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmNhc2hBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7ZGF0YS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGRhdGEucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZSB3aXRoIHRyYW5zYWN0aW9uIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleHBlbnNlLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZXhwZW5zZXMgPSBhd2FpdCBkYi5leHBlbnNlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IGRhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGV4cGVuc2VzLm1hcCgoZTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRXhwZW5zZSA9IGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkIHx8IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRMaW5rVG9DYXNoID0gISF1cGRhdGVzLmNhc2hBY2NvdW50SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhc0xpbmtlZFRvQ2FzaCA9ICEhY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiAhd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBjdXJyZW50RXhwZW5zZS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGN1cnJlbnRFeHBlbnNlLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSB8fCBjdXJyZW50RXhwZW5zZS5jYXRlZ29yeSB8fCAnRXhwZW5zZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRXhwZW5zZTogJHt1cGRhdGVzLmRlc2NyaXB0aW9uIHx8IGN1cnJlbnRFeHBlbnNlLmRlc2NyaXB0aW9ufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlIHx8IGN1cnJlbnRFeHBlbnNlLnBlcnNvbkluQ2hhcmdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHVwZGF0ZXMuZGF0ZSB8fCBjdXJyZW50RXhwZW5zZS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiB1cGRhdGVzLnBheW1lbnRNZXRob2QgfHwgY3VycmVudEV4cGVuc2UucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlIHx8IGN1cnJlbnRFeHBlbnNlLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBjYXNoVHguaWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzaG91bGRMaW5rVG9DYXNoICYmIHdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGV4aXN0aW5nIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXJyZW50RXhwZW5zZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkRXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBJTlNUQUxMTUVOVCBQQVlNRU5UUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnN0YWxsbWVudFBheW1lbnRzQWN0aW9uKHNhbGVJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRzID0gYXdhaXQgZGIuaW5zdGFsbG1lbnRQYXltZW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgc2FsZUlkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgcGF5bWVudERhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHBheW1lbnRzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgICAgICAgICAgICBzYWxlSWQ6IHAuc2FsZUlkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKHAuYW1vdW50KSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBwLnBheW1lbnREYXRlLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBub3RlczogcC5ub3RlcyxcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbklkOiBwLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW5zdGFsbG1lbnQgcGF5bWVudHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNhc2hUeElkID0gZGF0YS5jYXNoVHJhbnNhY3Rpb25JZDtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gY3JlYXRlIGEgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5hY2NvdW50SWQgJiYgZGF0YS5sb2NhdGlvbklkICYmICFjYXNoVHhJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FsZSA9IGF3YWl0IHR4LnNhbGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEuc2FsZUlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiB7IGN1c3RvbWVyTmFtZTogdHJ1ZSwgcmVjZWlwdE51bWJlcjogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHNhbGVcclxuICAgICAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3NhbGUuY3VzdG9tZXJOYW1lfSAtIFJlY2VpcHQgIyR7c2FsZS5yZWNlaXB0TnVtYmVyfWBcclxuICAgICAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciBzYWxlYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKGRhdGEucGF5bWVudERhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2hUeElkID0gY2FzaFR4LmlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZUlkOiBkYXRhLnNhbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBkYXRhLnBheW1lbnREYXRlID8gbmV3IERhdGUoZGF0YS5wYXltZW50RGF0ZSkgOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBheW1lbnQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGluc3RhbGxtZW50IHBheW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IHVwZGF0ZXMubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudERhdGU6IHVwZGF0ZXMucGF5bWVudERhdGUgPyBuZXcgRGF0ZSh1cGRhdGVzLnBheW1lbnREYXRlKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudC5jYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKHVwZGF0ZXMucGF5bWVudERhdGUpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBpbnN0YWxsbWVudCBwYXltZW50OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxtZW50UGF5bWVudEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogeyBjYXNoVHJhbnNhY3Rpb25JZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBheW1lbnQ/LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgaW5zdGFsbG1lbnQgcGF5bWVudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaW5rSW5zdGFsbG1lbnRUb0Nhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcsIGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogeyBzYWxlOiB0cnVlIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheW1lbnQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAocGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBhbHJlYWR5IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGF5bWVudC5zYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3BheW1lbnQuc2FsZS5jdXN0b21lck5hbWV9IC0gUmVjZWlwdCAjJHtwYXltZW50LnNhbGUucmVjZWlwdE51bWJlcn1gXHJcbiAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50ICMke3BheW1lbnRJZC5zdWJzdHJpbmcoMCwgOCl9YDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHBheW1lbnQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogcGF5bWVudC5wYXltZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBwYXltZW50SWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNhc2hUeDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbGlua2luZyBpbnN0YWxsbWVudCB0byBjYXNoOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua0luc3RhbGxtZW50RnJvbUNhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcGF5bWVudD8uY2FzaFRyYW5zYWN0aW9uSWQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnQuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogbnVsbCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdW5saW5raW5nIGluc3RhbGxtZW50IGZyb20gY2FzaDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBFWFBFTlNFIENBVEVHT1JJRVMgLS0tXHJcblxyXG4vLyAtLS0gRVhQRU5TRSBDQVRFR09SSUVTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VDYXRlZ29yaWVzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNhdGVnb3JpZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogYy5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogYy5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBleHBlbnNlIGNhdGVnb3JpZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXhwZW5zZUNhdGVnb3J5QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5leHBlbnNlQ2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogZGF0YS5pc0RlZmF1bHQgfHwgZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUV4cGVuc2VDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmV4cGVuc2VDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRFeHBlbnNlQ2F0ZWdvcmllc0FjdGlvbih1c2VySWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBjYXRlZ29yeU5hbWVzOiBzdHJpbmdbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gY2F0ZWdvcnlOYW1lcy5tYXAobmFtZSA9PiAoe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmNyZWF0ZU1hbnkoe1xyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBza2lwRHVwbGljYXRlczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZGVmYXVsdCBjYXRlZ29yaWVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCgodDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4udCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHQuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiB0LnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdC51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB0LmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uX2lkOiB0LmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiB0LnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IHQucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50X21ldGhvZDogdC5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgcmVjZWlwdF9pbWFnZTogdC5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXNoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoVHJhbnNhY3Rpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4SW4gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLnRvQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbdHhPdXQsIHR4SW5dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSA/IG5ldyBEYXRlKGRhdGEuZGF0ZSkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiB1cGRhdGVzLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgdGFnczogdXBkYXRlcy50YWdzLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlID8gbmV3IERhdGUodXBkYXRlcy5kYXRlKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRDYXNoVHJhbnNhY3Rpb25BY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGRiLmNhc2hUcmFuc2FjdGlvbi5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IGFjY291bnRJZDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRyYW5zYWN0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmluZGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBpbnN0YWxsbWVudCBwYXltZW50cyBsaW5rZWQgdG8gdGhpcyB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoVHJhbnNhY3Rpb25JZDogaWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggdHJhbnNhY3Rpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudE9wZW5pbmdCYWxhbmNlQWN0aW9uKGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogTnVtYmVyKGFjY291bnQ/Lm9wZW5pbmdCYWxhbmNlIHx8IDApIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3BlbmluZyBiYWxhbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1bGtDYXNoVHJhbnNhY3Rpb25zQWN0aW9uKHRyYW5zYWN0aW9uczogYW55W10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRyYW5zYWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXInICYmIGRhdGEudG9BY2NvdW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEudG9BY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBidWxrIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0FraEJzQixzTUFBQSJ9
}),
"[project]/src/app/actions/data:ecf462 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCashAccountAction",
    ()=>$$RSC_SERVER_ACTION_16
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"606de6e888cd750a405cef95d0de94e1650793b224":"deleteCashAccountAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("606de6e888cd750a405cef95d0de94e1650793b224", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCashAccountAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gMS4gQ3JlYXRlIHRoZSBleHBlbnNlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBjYXNoQWNjb3VudElkOiBsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCA/IGRhdGEuY2FzaEFjY291bnRJZCA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAyLiBJZiBsaW5raW5nIHRvIGNhc2gsIGNyZWF0ZSBhIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgaWYgKGxpbmtUb0Nhc2ggJiYgZGF0YS5jYXNoQWNjb3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmNhc2hBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7ZGF0YS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGRhdGEucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZSB3aXRoIHRyYW5zYWN0aW9uIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleHBlbnNlLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZXhwZW5zZXMgPSBhd2FpdCBkYi5leHBlbnNlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IGRhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGV4cGVuc2VzLm1hcCgoZTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRXhwZW5zZSA9IGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkIHx8IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRMaW5rVG9DYXNoID0gISF1cGRhdGVzLmNhc2hBY2NvdW50SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhc0xpbmtlZFRvQ2FzaCA9ICEhY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiAhd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBjdXJyZW50RXhwZW5zZS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGN1cnJlbnRFeHBlbnNlLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSB8fCBjdXJyZW50RXhwZW5zZS5jYXRlZ29yeSB8fCAnRXhwZW5zZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRXhwZW5zZTogJHt1cGRhdGVzLmRlc2NyaXB0aW9uIHx8IGN1cnJlbnRFeHBlbnNlLmRlc2NyaXB0aW9ufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlIHx8IGN1cnJlbnRFeHBlbnNlLnBlcnNvbkluQ2hhcmdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHVwZGF0ZXMuZGF0ZSB8fCBjdXJyZW50RXhwZW5zZS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiB1cGRhdGVzLnBheW1lbnRNZXRob2QgfHwgY3VycmVudEV4cGVuc2UucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlIHx8IGN1cnJlbnRFeHBlbnNlLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBjYXNoVHguaWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzaG91bGRMaW5rVG9DYXNoICYmIHdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGV4aXN0aW5nIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXJyZW50RXhwZW5zZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkRXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBJTlNUQUxMTUVOVCBQQVlNRU5UUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnN0YWxsbWVudFBheW1lbnRzQWN0aW9uKHNhbGVJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRzID0gYXdhaXQgZGIuaW5zdGFsbG1lbnRQYXltZW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgc2FsZUlkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgcGF5bWVudERhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHBheW1lbnRzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgICAgICAgICAgICBzYWxlSWQ6IHAuc2FsZUlkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKHAuYW1vdW50KSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBwLnBheW1lbnREYXRlLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBub3RlczogcC5ub3RlcyxcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbklkOiBwLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW5zdGFsbG1lbnQgcGF5bWVudHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNhc2hUeElkID0gZGF0YS5jYXNoVHJhbnNhY3Rpb25JZDtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gY3JlYXRlIGEgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5hY2NvdW50SWQgJiYgZGF0YS5sb2NhdGlvbklkICYmICFjYXNoVHhJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FsZSA9IGF3YWl0IHR4LnNhbGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEuc2FsZUlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiB7IGN1c3RvbWVyTmFtZTogdHJ1ZSwgcmVjZWlwdE51bWJlcjogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHNhbGVcclxuICAgICAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3NhbGUuY3VzdG9tZXJOYW1lfSAtIFJlY2VpcHQgIyR7c2FsZS5yZWNlaXB0TnVtYmVyfWBcclxuICAgICAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciBzYWxlYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKGRhdGEucGF5bWVudERhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2hUeElkID0gY2FzaFR4LmlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZUlkOiBkYXRhLnNhbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBkYXRhLnBheW1lbnREYXRlID8gbmV3IERhdGUoZGF0YS5wYXltZW50RGF0ZSkgOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBheW1lbnQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGluc3RhbGxtZW50IHBheW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IHVwZGF0ZXMubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudERhdGU6IHVwZGF0ZXMucGF5bWVudERhdGUgPyBuZXcgRGF0ZSh1cGRhdGVzLnBheW1lbnREYXRlKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudC5jYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKHVwZGF0ZXMucGF5bWVudERhdGUpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBpbnN0YWxsbWVudCBwYXltZW50OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxtZW50UGF5bWVudEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogeyBjYXNoVHJhbnNhY3Rpb25JZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBheW1lbnQ/LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgaW5zdGFsbG1lbnQgcGF5bWVudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaW5rSW5zdGFsbG1lbnRUb0Nhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcsIGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogeyBzYWxlOiB0cnVlIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheW1lbnQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAocGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBhbHJlYWR5IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGF5bWVudC5zYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3BheW1lbnQuc2FsZS5jdXN0b21lck5hbWV9IC0gUmVjZWlwdCAjJHtwYXltZW50LnNhbGUucmVjZWlwdE51bWJlcn1gXHJcbiAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50ICMke3BheW1lbnRJZC5zdWJzdHJpbmcoMCwgOCl9YDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHBheW1lbnQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogcGF5bWVudC5wYXltZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBwYXltZW50SWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNhc2hUeDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbGlua2luZyBpbnN0YWxsbWVudCB0byBjYXNoOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua0luc3RhbGxtZW50RnJvbUNhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcGF5bWVudD8uY2FzaFRyYW5zYWN0aW9uSWQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnQuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogbnVsbCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdW5saW5raW5nIGluc3RhbGxtZW50IGZyb20gY2FzaDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBFWFBFTlNFIENBVEVHT1JJRVMgLS0tXHJcblxyXG4vLyAtLS0gRVhQRU5TRSBDQVRFR09SSUVTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VDYXRlZ29yaWVzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNhdGVnb3JpZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogYy5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogYy5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBleHBlbnNlIGNhdGVnb3JpZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXhwZW5zZUNhdGVnb3J5QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5leHBlbnNlQ2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogZGF0YS5pc0RlZmF1bHQgfHwgZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUV4cGVuc2VDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmV4cGVuc2VDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRFeHBlbnNlQ2F0ZWdvcmllc0FjdGlvbih1c2VySWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBjYXRlZ29yeU5hbWVzOiBzdHJpbmdbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gY2F0ZWdvcnlOYW1lcy5tYXAobmFtZSA9PiAoe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmNyZWF0ZU1hbnkoe1xyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBza2lwRHVwbGljYXRlczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZGVmYXVsdCBjYXRlZ29yaWVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCgodDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4udCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHQuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiB0LnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdC51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB0LmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uX2lkOiB0LmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiB0LnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IHQucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50X21ldGhvZDogdC5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgcmVjZWlwdF9pbWFnZTogdC5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXNoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoVHJhbnNhY3Rpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4SW4gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLnRvQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbdHhPdXQsIHR4SW5dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSA/IG5ldyBEYXRlKGRhdGEuZGF0ZSkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiB1cGRhdGVzLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgdGFnczogdXBkYXRlcy50YWdzLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlID8gbmV3IERhdGUodXBkYXRlcy5kYXRlKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRDYXNoVHJhbnNhY3Rpb25BY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGRiLmNhc2hUcmFuc2FjdGlvbi5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IGFjY291bnRJZDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRyYW5zYWN0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmluZGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBpbnN0YWxsbWVudCBwYXltZW50cyBsaW5rZWQgdG8gdGhpcyB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoVHJhbnNhY3Rpb25JZDogaWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggdHJhbnNhY3Rpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudE9wZW5pbmdCYWxhbmNlQWN0aW9uKGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogTnVtYmVyKGFjY291bnQ/Lm9wZW5pbmdCYWxhbmNlIHx8IDApIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3BlbmluZyBiYWxhbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1bGtDYXNoVHJhbnNhY3Rpb25zQWN0aW9uKHRyYW5zYWN0aW9uczogYW55W10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRyYW5zYWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXInICYmIGRhdGEudG9BY2NvdW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEudG9BY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBidWxrIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0FzaUJzQixzTUFBQSJ9
}),
"[project]/src/app/actions/data:7ff3a3 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteCashAccountWithTransactionsAction",
    ()=>$$RSC_SERVER_ACTION_17
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"70cc14e48c776d93c255f39bea0884a4cc9308abf7":"deleteCashAccountWithTransactionsAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("70cc14e48c776d93c255f39bea0884a4cc9308abf7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCashAccountWithTransactionsAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gMS4gQ3JlYXRlIHRoZSBleHBlbnNlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBjYXNoQWNjb3VudElkOiBsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCA/IGRhdGEuY2FzaEFjY291bnRJZCA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAyLiBJZiBsaW5raW5nIHRvIGNhc2gsIGNyZWF0ZSBhIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgaWYgKGxpbmtUb0Nhc2ggJiYgZGF0YS5jYXNoQWNjb3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmNhc2hBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7ZGF0YS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGRhdGEucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZSB3aXRoIHRyYW5zYWN0aW9uIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleHBlbnNlLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZXhwZW5zZXMgPSBhd2FpdCBkYi5leHBlbnNlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IGRhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGV4cGVuc2VzLm1hcCgoZTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRXhwZW5zZSA9IGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkIHx8IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRMaW5rVG9DYXNoID0gISF1cGRhdGVzLmNhc2hBY2NvdW50SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhc0xpbmtlZFRvQ2FzaCA9ICEhY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiAhd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBjdXJyZW50RXhwZW5zZS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGN1cnJlbnRFeHBlbnNlLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSB8fCBjdXJyZW50RXhwZW5zZS5jYXRlZ29yeSB8fCAnRXhwZW5zZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRXhwZW5zZTogJHt1cGRhdGVzLmRlc2NyaXB0aW9uIHx8IGN1cnJlbnRFeHBlbnNlLmRlc2NyaXB0aW9ufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlIHx8IGN1cnJlbnRFeHBlbnNlLnBlcnNvbkluQ2hhcmdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHVwZGF0ZXMuZGF0ZSB8fCBjdXJyZW50RXhwZW5zZS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiB1cGRhdGVzLnBheW1lbnRNZXRob2QgfHwgY3VycmVudEV4cGVuc2UucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlIHx8IGN1cnJlbnRFeHBlbnNlLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBjYXNoVHguaWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzaG91bGRMaW5rVG9DYXNoICYmIHdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGV4aXN0aW5nIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXJyZW50RXhwZW5zZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkRXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBJTlNUQUxMTUVOVCBQQVlNRU5UUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnN0YWxsbWVudFBheW1lbnRzQWN0aW9uKHNhbGVJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRzID0gYXdhaXQgZGIuaW5zdGFsbG1lbnRQYXltZW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgc2FsZUlkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgcGF5bWVudERhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHBheW1lbnRzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgICAgICAgICAgICBzYWxlSWQ6IHAuc2FsZUlkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKHAuYW1vdW50KSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBwLnBheW1lbnREYXRlLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBub3RlczogcC5ub3RlcyxcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbklkOiBwLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW5zdGFsbG1lbnQgcGF5bWVudHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNhc2hUeElkID0gZGF0YS5jYXNoVHJhbnNhY3Rpb25JZDtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gY3JlYXRlIGEgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5hY2NvdW50SWQgJiYgZGF0YS5sb2NhdGlvbklkICYmICFjYXNoVHhJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FsZSA9IGF3YWl0IHR4LnNhbGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEuc2FsZUlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiB7IGN1c3RvbWVyTmFtZTogdHJ1ZSwgcmVjZWlwdE51bWJlcjogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHNhbGVcclxuICAgICAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3NhbGUuY3VzdG9tZXJOYW1lfSAtIFJlY2VpcHQgIyR7c2FsZS5yZWNlaXB0TnVtYmVyfWBcclxuICAgICAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciBzYWxlYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKGRhdGEucGF5bWVudERhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2hUeElkID0gY2FzaFR4LmlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZUlkOiBkYXRhLnNhbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBkYXRhLnBheW1lbnREYXRlID8gbmV3IERhdGUoZGF0YS5wYXltZW50RGF0ZSkgOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBheW1lbnQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGluc3RhbGxtZW50IHBheW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IHVwZGF0ZXMubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudERhdGU6IHVwZGF0ZXMucGF5bWVudERhdGUgPyBuZXcgRGF0ZSh1cGRhdGVzLnBheW1lbnREYXRlKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudC5jYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKHVwZGF0ZXMucGF5bWVudERhdGUpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBpbnN0YWxsbWVudCBwYXltZW50OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxtZW50UGF5bWVudEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogeyBjYXNoVHJhbnNhY3Rpb25JZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBheW1lbnQ/LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgaW5zdGFsbG1lbnQgcGF5bWVudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaW5rSW5zdGFsbG1lbnRUb0Nhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcsIGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogeyBzYWxlOiB0cnVlIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheW1lbnQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAocGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBhbHJlYWR5IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGF5bWVudC5zYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3BheW1lbnQuc2FsZS5jdXN0b21lck5hbWV9IC0gUmVjZWlwdCAjJHtwYXltZW50LnNhbGUucmVjZWlwdE51bWJlcn1gXHJcbiAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50ICMke3BheW1lbnRJZC5zdWJzdHJpbmcoMCwgOCl9YDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHBheW1lbnQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogcGF5bWVudC5wYXltZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBwYXltZW50SWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNhc2hUeDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbGlua2luZyBpbnN0YWxsbWVudCB0byBjYXNoOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua0luc3RhbGxtZW50RnJvbUNhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcGF5bWVudD8uY2FzaFRyYW5zYWN0aW9uSWQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnQuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogbnVsbCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdW5saW5raW5nIGluc3RhbGxtZW50IGZyb20gY2FzaDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBFWFBFTlNFIENBVEVHT1JJRVMgLS0tXHJcblxyXG4vLyAtLS0gRVhQRU5TRSBDQVRFR09SSUVTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VDYXRlZ29yaWVzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNhdGVnb3JpZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogYy5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogYy5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBleHBlbnNlIGNhdGVnb3JpZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXhwZW5zZUNhdGVnb3J5QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5leHBlbnNlQ2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogZGF0YS5pc0RlZmF1bHQgfHwgZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUV4cGVuc2VDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmV4cGVuc2VDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRFeHBlbnNlQ2F0ZWdvcmllc0FjdGlvbih1c2VySWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBjYXRlZ29yeU5hbWVzOiBzdHJpbmdbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gY2F0ZWdvcnlOYW1lcy5tYXAobmFtZSA9PiAoe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmNyZWF0ZU1hbnkoe1xyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBza2lwRHVwbGljYXRlczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZGVmYXVsdCBjYXRlZ29yaWVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCgodDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4udCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHQuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiB0LnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdC51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB0LmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uX2lkOiB0LmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiB0LnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IHQucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50X21ldGhvZDogdC5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgcmVjZWlwdF9pbWFnZTogdC5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXNoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoVHJhbnNhY3Rpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4SW4gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLnRvQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbdHhPdXQsIHR4SW5dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSA/IG5ldyBEYXRlKGRhdGEuZGF0ZSkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiB1cGRhdGVzLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgdGFnczogdXBkYXRlcy50YWdzLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlID8gbmV3IERhdGUodXBkYXRlcy5kYXRlKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRDYXNoVHJhbnNhY3Rpb25BY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGRiLmNhc2hUcmFuc2FjdGlvbi5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IGFjY291bnRJZDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRyYW5zYWN0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmluZGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBpbnN0YWxsbWVudCBwYXltZW50cyBsaW5rZWQgdG8gdGhpcyB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoVHJhbnNhY3Rpb25JZDogaWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggdHJhbnNhY3Rpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudE9wZW5pbmdCYWxhbmNlQWN0aW9uKGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogTnVtYmVyKGFjY291bnQ/Lm9wZW5pbmdCYWxhbmNlIHx8IDApIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3BlbmluZyBiYWxhbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1bGtDYXNoVHJhbnNhY3Rpb25zQWN0aW9uKHRyYW5zYWN0aW9uczogYW55W10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRyYW5zYWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXInICYmIGRhdGEudG9BY2NvdW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEudG9BY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBidWxrIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzVEF5a0JzQixzTkFBQSJ9
}),
"[project]/src/app/actions/data:f890d8 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCashAccountBalanceAction",
    ()=>$$RSC_SERVER_ACTION_18
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6022d2e7f9e9a35853d5428f52c9618bc015f7bda3":"getCashAccountBalanceAction"},"src/app/actions/finance.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6022d2e7f9e9a35853d5428f52c9618bc015f7bda3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCashAccountBalanceAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmluYW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBkYiwgUGF5bWVudFN0YXR1cywgQWN0aXZpdHlUeXBlLCBBY3Rpdml0eU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XHJcblxyXG4vLyAtLS0gRVhQRU5TRVMgLS0tXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV4cGVuc2VJbnB1dCB7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjYXRlZ29yeT86IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBwYXltZW50TWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcGVyc29uSW5DaGFyZ2U/OiBzdHJpbmc7XHJcbiAgICByZWNlaXB0SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBjYXNoQWNjb3VudElkPzogc3RyaW5nO1xyXG4gICAgdXNlcklkOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVFeHBlbnNlQWN0aW9uKGRhdGE6IEV4cGVuc2VJbnB1dCwgbGlua1RvQ2FzaDogYm9vbGVhbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gMS4gQ3JlYXRlIHRoZSBleHBlbnNlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGVuc2UgPSBhd2FpdCB0eC5leHBlbnNlLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2UgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBjYXNoQWNjb3VudElkOiBsaW5rVG9DYXNoICYmIGRhdGEuY2FzaEFjY291bnRJZCA/IGRhdGEuY2FzaEFjY291bnRJZCA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAyLiBJZiBsaW5raW5nIHRvIGNhc2gsIGNyZWF0ZSBhIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgaWYgKGxpbmtUb0Nhc2ggJiYgZGF0YS5jYXNoQWNjb3VudElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmNhc2hBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfb3V0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7ZGF0YS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogZGF0YS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGRhdGEucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IGRhdGEucmVjZWlwdEltYWdlIHx8IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZSB3aXRoIHRyYW5zYWN0aW9uIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBleHBlbnNlLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogY2FzaFR4LmlkIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFeHBlbnNlc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZXhwZW5zZXMgPSBhd2FpdCBkYi5leHBlbnNlLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7IGRhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGV4cGVuc2VzLm1hcCgoZTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4uZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IGUuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBlLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGUucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IGUucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICByZWNlaXB0X2ltYWdlOiBlLnJlY2VpcHRJbWFnZSxcclxuICAgICAgICAgICAgICAgIGNhc2hfYWNjb3VudF9pZDogZS5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgY2FzaF90cmFuc2FjdGlvbl9pZDogZS5jYXNoVHJhbnNhY3Rpb25JZFxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGV4cGVuc2VzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2VBY3Rpb24oaWQ6IHN0cmluZywgdXBkYXRlczogYW55LCBjdXJyZW50RXhwZW5zZTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgZXhwZW5zZVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRXhwZW5zZSA9IGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaEFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkIHx8IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRMaW5rVG9DYXNoID0gISF1cGRhdGVzLmNhc2hBY2NvdW50SWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhc0xpbmtlZFRvQ2FzaCA9ICEhY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiAhd2FzTGlua2VkVG9DYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBjdXJyZW50RXhwZW5zZS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGN1cnJlbnRFeHBlbnNlLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlcy5jYXRlZ29yeSB8fCBjdXJyZW50RXhwZW5zZS5jYXRlZ29yeSB8fCAnRXhwZW5zZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgRXhwZW5zZTogJHt1cGRhdGVzLmRlc2NyaXB0aW9uIHx8IGN1cnJlbnRFeHBlbnNlLmRlc2NyaXB0aW9ufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbkluQ2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlIHx8IGN1cnJlbnRFeHBlbnNlLnBlcnNvbkluQ2hhcmdlIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHVwZGF0ZXMuZGF0ZSB8fCBjdXJyZW50RXhwZW5zZS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiB1cGRhdGVzLnBheW1lbnRNZXRob2QgfHwgY3VycmVudEV4cGVuc2UucGF5bWVudE1ldGhvZCB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXB0SW1hZ2U6IHVwZGF0ZXMucmVjZWlwdEltYWdlIHx8IGN1cnJlbnRFeHBlbnNlLnJlY2VpcHRJbWFnZSB8fCBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5leHBlbnNlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hUcmFuc2FjdGlvbklkOiBjYXNoVHguaWQgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkTGlua1RvQ2FzaCAmJiB3YXNMaW5rZWRUb0Nhc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudEV4cGVuc2UuY2FzaFRyYW5zYWN0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5jYXNoQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50IHx8IGN1cnJlbnRFeHBlbnNlLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHVwZGF0ZXMuY2F0ZWdvcnkgfHwgY3VycmVudEV4cGVuc2UuY2F0ZWdvcnkgfHwgJ0V4cGVuc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYEV4cGVuc2U6ICR7dXBkYXRlcy5kZXNjcmlwdGlvbiB8fCBjdXJyZW50RXhwZW5zZS5kZXNjcmlwdGlvbn1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25JbkNoYXJnZTogdXBkYXRlcy5wZXJzb25JbkNoYXJnZSB8fCBjdXJyZW50RXhwZW5zZS5wZXJzb25JbkNoYXJnZSB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB1cGRhdGVzLmRhdGUgfHwgY3VycmVudEV4cGVuc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogdXBkYXRlcy5wYXltZW50TWV0aG9kIHx8IGN1cnJlbnRFeHBlbnNlLnBheW1lbnRNZXRob2QgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiB1cGRhdGVzLnJlY2VpcHRJbWFnZSB8fCBjdXJyZW50RXhwZW5zZS5yZWNlaXB0SW1hZ2UgfHwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzaG91bGRMaW5rVG9DYXNoICYmIHdhc0xpbmtlZFRvQ2FzaCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGV4aXN0aW5nIGNhc2ggdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBjdXJyZW50RXhwZW5zZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkRXhwZW5zZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgZXhwZW5zZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBJTlNUQUxMTUVOVCBQQVlNRU5UUyAtLS1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnN0YWxsbWVudFBheW1lbnRzQWN0aW9uKHNhbGVJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRzID0gYXdhaXQgZGIuaW5zdGFsbG1lbnRQYXltZW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgc2FsZUlkIH0sXHJcbiAgICAgICAgICAgIG9yZGVyQnk6IHsgcGF5bWVudERhdGU6ICdkZXNjJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHBheW1lbnRzLm1hcCgocDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgICAgICAgICAgICBzYWxlSWQ6IHAuc2FsZUlkLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKHAuYW1vdW50KSxcclxuICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBwLnBheW1lbnREYXRlLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBub3RlczogcC5ub3RlcyxcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbklkOiBwLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBwLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBwLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaW5zdGFsbG1lbnQgcGF5bWVudHM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNhc2hUeElkID0gZGF0YS5jYXNoVHJhbnNhY3Rpb25JZDtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gY3JlYXRlIGEgY2FzaCB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5hY2NvdW50SWQgJiYgZGF0YS5sb2NhdGlvbklkICYmICFjYXNoVHhJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2FsZSA9IGF3YWl0IHR4LnNhbGUuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEuc2FsZUlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiB7IGN1c3RvbWVyTmFtZTogdHJ1ZSwgcmVjZWlwdE51bWJlcjogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHNhbGVcclxuICAgICAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3NhbGUuY3VzdG9tZXJOYW1lfSAtIFJlY2VpcHQgIyR7c2FsZS5yZWNlaXB0TnVtYmVyfWBcclxuICAgICAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciBzYWxlYDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXNoVHggPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAnY2FzaF9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKGRhdGEucGF5bWVudERhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhc2hUeElkID0gY2FzaFR4LmlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FsZUlkOiBkYXRhLnNhbGVJZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IGRhdGEubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnREYXRlOiBkYXRhLnBheW1lbnREYXRlID8gbmV3IERhdGUoZGF0YS5wYXltZW50RGF0ZSkgOiBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBheW1lbnQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGluc3RhbGxtZW50IHBheW1lbnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW5zdGFsbG1lbnRQYXltZW50QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY3VycmVudCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBub3QgZm91bmRcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdXBkYXRlcy5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgbm90ZXM6IHVwZGF0ZXMubm90ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudERhdGU6IHVwZGF0ZXMucGF5bWVudERhdGUgPyBuZXcgRGF0ZSh1cGRhdGVzLnBheW1lbnREYXRlKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24udXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogY3VycmVudC5jYXNoVHJhbnNhY3Rpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB1cGRhdGVzLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5wYXltZW50RGF0ZSA/IG5ldyBEYXRlKHVwZGF0ZXMucGF5bWVudERhdGUpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBpbnN0YWxsbWVudCBwYXltZW50OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxtZW50UGF5bWVudEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogeyBjYXNoVHJhbnNhY3Rpb25JZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBheW1lbnQ/LmNhc2hUcmFuc2FjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgaW5zdGFsbG1lbnQgcGF5bWVudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaW5rSW5zdGFsbG1lbnRUb0Nhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcsIGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50ID0gYXdhaXQgdHguaW5zdGFsbG1lbnRQYXltZW50LmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogeyBzYWxlOiB0cnVlIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXBheW1lbnQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGZvdW5kXCIpO1xyXG4gICAgICAgICAgICBpZiAocGF5bWVudC5jYXNoVHJhbnNhY3Rpb25JZCkgdGhyb3cgbmV3IEVycm9yKFwiUGF5bWVudCBhbHJlYWR5IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGF5bWVudC5zYWxlXHJcbiAgICAgICAgICAgICAgICA/IGBJbnN0YWxsbWVudCBwYXltZW50IGZvciAke3BheW1lbnQuc2FsZS5jdXN0b21lck5hbWV9IC0gUmVjZWlwdCAjJHtwYXltZW50LnNhbGUucmVjZWlwdE51bWJlcn1gXHJcbiAgICAgICAgICAgICAgICA6IGBJbnN0YWxsbWVudCBwYXltZW50ICMke3BheW1lbnRJZC5zdWJzdHJpbmcoMCwgOCl9YDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhc2hUeCA9IGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHBheW1lbnQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ2Nhc2hfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnSW5zdGFsbG1lbnQgcGF5bWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogcGF5bWVudC5wYXltZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlKHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBwYXltZW50SWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IGNhc2hUeC5pZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNhc2hUeDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbGlua2luZyBpbnN0YWxsbWVudCB0byBjYXNoOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVubGlua0luc3RhbGxtZW50RnJvbUNhc2hBY3Rpb24ocGF5bWVudElkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBheW1lbnQgPSBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogcGF5bWVudElkIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IHRydWUgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcGF5bWVudD8uY2FzaFRyYW5zYWN0aW9uSWQpIHRocm93IG5ldyBFcnJvcihcIlBheW1lbnQgbm90IGxpbmtlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnQuY2FzaFRyYW5zYWN0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4Lmluc3RhbGxtZW50UGF5bWVudC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHBheW1lbnRJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBjYXNoVHJhbnNhY3Rpb25JZDogbnVsbCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdW5saW5raW5nIGluc3RhbGxtZW50IGZyb20gY2FzaDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC0tLSBFWFBFTlNFIENBVEVHT1JJRVMgLS0tXHJcblxyXG4vLyAtLS0gRVhQRU5TRSBDQVRFR09SSUVTIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEV4cGVuc2VDYXRlZ29yaWVzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGNhdGVnb3JpZXMubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpZDogYy5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogYy5pc0RlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGMuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBleHBlbnNlIGNhdGVnb3JpZXM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXhwZW5zZUNhdGVnb3J5QWN0aW9uKGRhdGE6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5leHBlbnNlQ2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogZGF0YS5pc0RlZmF1bHQgfHwgZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUV4cGVuc2VDYXRlZ29yeUFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLmV4cGVuc2VDYXRlZ29yeS5kZWxldGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBleHBlbnNlIGNhdGVnb3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRFeHBlbnNlQ2F0ZWdvcmllc0FjdGlvbih1c2VySWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBjYXRlZ29yeU5hbWVzOiBzdHJpbmdbXSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gY2F0ZWdvcnlOYW1lcy5tYXAobmFtZSA9PiAoe1xyXG4gICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGlzRGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgYXdhaXQgZGIuZXhwZW5zZUNhdGVnb3J5LmNyZWF0ZU1hbnkoe1xyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBza2lwRHVwbGljYXRlczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZGVmYXVsdCBjYXRlZ29yaWVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIENBU0ggQUNDT1VOVFMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaEFjY291bnRzQWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBpc0RlZmF1bHQ6ICdkZXNjJyB9LCB7IG5hbWU6ICdhc2MnIH1dXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjY291bnRzLm1hcCgoYTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGEuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG9wZW5pbmdCYWxhbmNlOiBOdW1iZXIoYS5vcGVuaW5nQmFsYW5jZSksXHJcbiAgICAgICAgICAgICAgICBpc0RlZmF1bHQ6IGEuaXNEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBhLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBhLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FzaCBhY2NvdW50czonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoQWNjb3VudEFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogZGF0YS5vcGVuaW5nQmFsYW5jZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgaXNEZWZhdWx0OiBkYXRhLmlzRGVmYXVsdCB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZmluYW5jZScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXNoQWNjb3VudEFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaEFjY291bnQudXBkYXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nQmFsYW5jZTogdXBkYXRlcy5vcGVuaW5nQmFsYW5jZSxcclxuICAgICAgICAgICAgICAgIGlzRGVmYXVsdDogdXBkYXRlcy5pc0RlZmF1bHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIGFjY291bnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2FzaEFjY291bnRBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdHJhbnNhY3Rpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IHR4Q291bnQgPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY291bnQoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZXhwQ291bnQgPSBhd2FpdCB0eC5leHBlbnNlLmNvdW50KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IGNhc2hBY2NvdW50SWQ6IGlkLCBsb2NhdGlvbklkIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHhDb3VudCA+IDAgfHwgZXhwQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zYWN0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiBgQWNjb3VudCBoYXMgJHt0eENvdW50fSB0cmFuc2FjdGlvbnMgYW5kICR7ZXhwQ291bnR9IGV4cGVuc2VzLmBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hBY2NvdW50LmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaGFzVHJhbnNhY3Rpb25zOiBmYWxzZSB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXNoQWNjb3VudFdpdGhUcmFuc2FjdGlvbnNBY3Rpb24oaWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBkZWxldGVUcmFuc2FjdGlvbnM6IGJvb2xlYW4pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVUcmFuc2FjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIERlbGV0ZSBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIEV4cGVuc2VzIGFyZSBsaW5rZWQsIGJldHRlciB0byBqdXN0IG51bGwgdGhlbSBvdXQgb3IgZGVsZXRlPyBcclxuICAgICAgICAgICAgICAgIC8vIEluIG9yaWdpbmFsIGl0IHVubGlua2VkIGV4cGVuc2VzLlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguZXhwZW5zZS51cGRhdGVNYW55KHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoQWNjb3VudElkOiBpZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaEFjY291bnRJZDogbnVsbCwgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVbmxpbmsgZXZlcnl0aGluZ1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFjY291bnRJZDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHR4LmV4cGVuc2UudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6IHsgY2FzaEFjY291bnRJZDogaWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNhc2hBY2NvdW50SWQ6IG51bGwsIGNhc2hUcmFuc2FjdGlvbklkOiBudWxsIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5jYXNoQWNjb3VudC5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggYWNjb3VudCB3aXRoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXNoQWNjb3VudEJhbGFuY2VBY3Rpb24oYWNjb3VudElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgZGIuY2FzaEFjY291bnQuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdBY2NvdW50IG5vdCBmb3VuZCcgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYWNjb3VudElkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIHNlbGVjdDogeyBhbW91bnQ6IHRydWUsIHRyYW5zYWN0aW9uVHlwZTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gTnVtYmVyKGFjY291bnQub3BlbmluZ0JhbGFuY2UpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdHggb2YgdHJhbnNhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcih0eC5hbW91bnQpO1xyXG4gICAgICAgICAgICBpZiAodHgudHJhbnNhY3Rpb25UeXBlID09PSAnY2FzaF9pbicgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBiYWxhbmNlICs9IGFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eC50cmFuc2FjdGlvblR5cGUgPT09ICdjYXNoX291dCcgfHwgdHgudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXJfb3V0Jykge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZSAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGJhbGFuY2UgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBhY2NvdW50IGJhbGFuY2U6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAtLS0gQ0FTSCBUUkFOU0FDVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzaFRyYW5zYWN0aW9uc0FjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKGFjY291bnRJZCkgd2hlcmUuYWNjb3VudElkID0gYWNjb3VudElkO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBkYi5jYXNoVHJhbnNhY3Rpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgb3JkZXJCeTogW3sgZGF0ZTogJ2Rlc2MnIH0sIHsgY3JlYXRlZEF0OiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdHJhbnNhY3Rpb25zLm1hcCgodDogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4udCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHQuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiB0LnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogdC51c2VySWQsXHJcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB0LmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uX2lkOiB0LmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl90eXBlOiB0LnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHBlcnNvbl9pbl9jaGFyZ2U6IHQucGVyc29uSW5DaGFyZ2UsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50X21ldGhvZDogdC5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgcmVjZWlwdF9pbWFnZTogdC5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXNoIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXNoVHJhbnNhY3Rpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLiR0cmFuc2FjdGlvbihhc3luYyAodHg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2FjdGlvblR5cGUgPT09ICd0cmFuc2ZlcicgJiYgZGF0YS50b0FjY291bnRJZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHR3byB0cmFuc2FjdGlvbnMgZm9yIGEgdHJhbnNmZXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4T3V0ID0gYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHR4SW4gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLnRvQWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvblR5cGU6ICd0cmFuc2Zlcl9pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUgPyBuZXcgRGF0ZShkYXRhLmRhdGUpIDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnkgfHwgJ1RyYW5zZmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBbdHhPdXQsIHR4SW5dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkOiBkYXRhLmFjY291bnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSA/IG5ldyBEYXRlKGRhdGEuZGF0ZSkgOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kOiBkYXRhLnBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogZGF0YS5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCB1cGRhdGVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjY291bnRJZDogdXBkYXRlcy5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHVwZGF0ZXMuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiB1cGRhdGVzLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB1cGRhdGVzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHVwZGF0ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiB1cGRhdGVzLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgdGFnczogdXBkYXRlcy50YWdzLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogdXBkYXRlcy5kYXRlID8gbmV3IERhdGUodXBkYXRlcy5kYXRlKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHVwZGF0ZXMucGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHRJbWFnZTogdXBkYXRlcy5yZWNlaXB0SW1hZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRDYXNoVHJhbnNhY3Rpb25BY3Rpb24oaWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGRiLmNhc2hUcmFuc2FjdGlvbi5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IGFjY291bnRJZDogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRyYW5zYWN0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmluZGluZyBjYXNoIHRyYW5zYWN0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNhc2hUcmFuc2FjdGlvbkFjdGlvbihpZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBpbnN0YWxsbWVudCBwYXltZW50cyBsaW5rZWQgdG8gdGhpcyB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICBhd2FpdCB0eC5pbnN0YWxsbWVudFBheW1lbnQudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBjYXNoVHJhbnNhY3Rpb25JZDogaWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgY2FzaFRyYW5zYWN0aW9uSWQ6IG51bGwgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LmNhc2hUcmFuc2FjdGlvbi5kZWxldGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9maW5hbmNlJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNhc2ggdHJhbnNhY3Rpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudE9wZW5pbmdCYWxhbmNlQWN0aW9uKGFjY291bnRJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IGRiLmNhc2hBY2NvdW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBhY2NvdW50SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7IG9wZW5pbmdCYWxhbmNlOiB0cnVlIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogTnVtYmVyKGFjY291bnQ/Lm9wZW5pbmdCYWxhbmNlIHx8IDApIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3BlbmluZyBiYWxhbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJ1bGtDYXNoVHJhbnNhY3Rpb25zQWN0aW9uKHRyYW5zYWN0aW9uczogYW55W10pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRyYW5zYWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNhY3Rpb25UeXBlID09PSAndHJhbnNmZXInICYmIGRhdGEudG9BY2NvdW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEuYWNjb3VudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uVHlwZTogJ3RyYW5zZmVyX291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGEuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5IHx8ICdUcmFuc2ZlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkLnB1c2goYXdhaXQgdHguY2FzaFRyYW5zYWN0aW9uLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkOiBkYXRhLmxvY2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQ6IGRhdGEudG9BY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiAndHJhbnNmZXJfaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRhLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSB8fCAnVHJhbnNmZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQucHVzaChhd2FpdCB0eC5jYXNoVHJhbnNhY3Rpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJZDogZGF0YS5hY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGRhdGEuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBkYXRhLnRyYW5zYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25faW5fY2hhcmdlOiBkYXRhLnBlcnNvbkluQ2hhcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogZGF0YS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YS5wYXltZW50TWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWlwdEltYWdlOiBkYXRhLnJlY2VpcHRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ZpbmFuY2UnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBidWxrIHRyYW5zYWN0aW9uczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIwU0FnbkJzQiwwTUFBQSJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$29a8f5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:29a8f5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$18461f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:18461f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$260401__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:260401 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ecf462__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:ecf462 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7ff3a3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:7ff3a3 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f890d8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:f890d8 [app-client] (ecmascript) <text/javascript>");
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$29a8f5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCashAccountsAction"])(currentBusiness.id);
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$18461f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCashAccountAction"])({
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$260401__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCashAccountAction"])(id, {
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ecf462__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCashAccountAction"])(id, currentBusiness.id);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$7ff3a3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCashAccountWithTransactionsAction"])(id, currentBusiness.id, deleteTransactions);
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$f890d8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCashAccountBalanceAction"])(accountId, currentBusiness.id);
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
"[project]/src/components/carriage/CarriageInwardsForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/calendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as CalendarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCashAccounts.ts [app-client] (ecmascript)");
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
const CarriageInwardsForm = ({ onSubmit, onCancel, initialData, isEditing = false })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        supplierName: initialData?.supplierName || '',
        details: initialData?.details || '',
        amount: initialData?.amount || 0,
        date: initialData?.date || new Date(),
        cashAccountId: initialData?.cashAccountId || undefined
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { accounts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashAccounts"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formData.supplierName.trim() || !formData.details.trim() || formData.amount <= 0) {
            return;
        }
        setIsSubmitting(true);
        try {
            await onSubmit(formData);
        } finally{
            setIsSubmitting(false);
        }
    };
    // Get the current select value, ensuring it's never undefined for the Select component
    const selectValue = formData.cashAccountId || 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "w-full max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: isEditing ? 'Edit Carriage Inwards' : 'Add New Carriage Inwards'
                }, void 0, false, {
                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "supplierName",
                                    children: "Supplier Name *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "supplierName",
                                    value: formData.supplierName,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            supplierName: e.target.value
                                        }),
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            document.getElementById('details')?.focus();
                                        }
                                    },
                                    placeholder: "Enter supplier name",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "details",
                                    children: "Details *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    id: "details",
                                    value: formData.details,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            details: e.target.value
                                        }),
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            document.getElementById('amount')?.focus();
                                        }
                                    },
                                    placeholder: "Enter transport details",
                                    rows: 3,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "amount",
                                    children: "Amount *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "amount",
                                    type: "number",
                                    step: "0.01",
                                    min: "0",
                                    value: formData.amount,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            amount: parseFloat(e.target.value) || 0
                                        }),
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            const dateButton = document.querySelector('[role="combobox"]');
                                            if (dateButton) {
                                                dateButton.focus();
                                            }
                                        }
                                    },
                                    placeholder: "0.00",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    children: "Date *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full justify-start text-left font-normal", !formData.date && "text-muted-foreground"),
                                                onKeyDown: (e)=>{
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        const cashAccountSelect = document.querySelector('button[role="combobox"]:last-of-type');
                                                        if (cashAccountSelect) {
                                                            cashAccountSelect.focus();
                                                        }
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    formData.date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(formData.date, "PPP") : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Pick a date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 67
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                            className: "w-auto p-0",
                                            align: "start",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                                mode: "single",
                                                selected: formData.date,
                                                onSelect: (date)=>date && setFormData({
                                                        ...formData,
                                                        date
                                                    }),
                                                disabled: (date)=>date > new Date(),
                                                initialFocus: true,
                                                className: "p-3 pointer-events-auto"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "cashAccount",
                                    children: "Cash Account (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: selectValue,
                                    onValueChange: (value)=>{
                                        setFormData({
                                            ...formData,
                                            cashAccountId: value === 'none' ? undefined : value
                                        });
                                        // Focus submit button after selection
                                        setTimeout(()=>{
                                            const submitButton = document.querySelector('button[type="submit"]');
                                            submitButton?.focus();
                                        }, 100);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    setTimeout(()=>{
                                                        const submitButton = document.querySelector('button[type="submit"]');
                                                        submitButton?.focus();
                                                    }, 100);
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "Select a cash account"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "none",
                                                    children: "No cash account"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                accounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: account.id,
                                                        children: account.name
                                                    }, account.id, false, {
                                                        fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isSubmitting || !formData.supplierName.trim() || !formData.details.trim() || formData.amount <= 0,
                                    className: "flex-1",
                                    children: isSubmitting ? 'Saving...' : isEditing ? 'Update' : 'Add'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: onCancel,
                                    disabled: isSubmitting,
                                    className: "flex-1",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/carriage/CarriageInwardsForm.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CarriageInwardsForm, "KTbhQoTz1Aj+qON7PQQfldlsfn4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCashAccounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCashAccounts"]
    ];
});
_c = CarriageInwardsForm;
const __TURBOPACK__default__export__ = CarriageInwardsForm;
var _c;
__turbopack_context__.k.register(_c, "CarriageInwardsForm");
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
"[project]/src/pages/CarriageInwards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carriage$2f$CarriageInwardsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carriage/CarriageInwardsTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carriage$2f$CarriageInwardsForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/carriage/CarriageInwardsForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCarriageInwards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCarriageInwards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-mobile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LoadingSpinner.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
const CarriageInwards = ()=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness, isLoading: businessLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { hasPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const canCreate = hasPermission('inventory', 'create');
    const canEdit = hasPermission('inventory', 'edit');
    const canDelete = hasPermission('inventory', 'delete');
    const { carriageInwards, isLoading, createCarriageInward, updateCarriageInward, deleteCarriageInward } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCarriageInwards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarriageInwards"])();
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate summary statistics
    const totalAmount = carriageInwards.reduce((sum, item)=>sum + Number(item.amount), 0);
    const totalEntries = carriageInwards.length;
    const uniqueSuppliers = [
        ...new Set(carriageInwards.map((item)=>item.supplierName))
    ].length;
    const thisMonthEntries = carriageInwards.filter((item)=>{
        const itemDate = new Date(item.date);
        const now = new Date();
        return itemDate.getMonth() === now.getMonth() && itemDate.getFullYear() === now.getFullYear();
    }).length;
    const handleRefresh = ()=>{
        // The hook already handles loading, so we just show a toast
        toast({
            title: "Data refreshed",
            description: "Carriage inwards data has been updated."
        });
    };
    const handleEdit = (record)=>{
        // TODO: Implement edit functionality
        console.log('Edit record:', record);
    };
    const handleView = (record)=>{
        // TODO: Implement view functionality
        console.log('View record:', record);
    };
    if (businessLoading || !currentBusiness || isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[60vh] space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/pages/CarriageInwards.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "Loading carriage inwards data..."
                }, void 0, false, {
                    fileName: "[project]/src/pages/CarriageInwards.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/CarriageInwards.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 md:p-6 space-y-4 md:space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 md:space-y-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ()=>navigate('/inventory'),
                                    className: "shrink-0 h-8 w-8",
                                    title: "Back to inventory",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/CarriageInwards.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg md:text-2xl lg:text-3xl font-bold text-sales-dark",
                                            children: "Carriage Inwards"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs md:text-base text-muted-foreground",
                                            children: "Track transportation and delivery costs for your inventory"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/CarriageInwards.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    canCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setShowForm(!showForm),
                                        className: "flex-1 gap-2 h-9",
                                        variant: showForm ? "outline" : "default",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/CarriageInwards.tsx",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            showForm ? 'Cancel' : 'Add Entry'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleRefresh,
                                        variant: "outline",
                                        size: "icon",
                                        disabled: isLoading,
                                        className: "shrink-0 h-9 w-9",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: `h-4 w-4 ${isLoading ? 'animate-spin' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/CarriageInwards.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : // Desktop Action Buttons
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleRefresh,
                                    variant: "outline",
                                    size: "icon",
                                    disabled: isLoading,
                                    title: "Refresh data",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: `h-4 w-4 ${isLoading ? 'animate-spin' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/CarriageInwards.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                canCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>setShowForm(!showForm),
                                    className: "gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        showForm ? 'Cancel' : 'Add Entry'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/CarriageInwards.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/CarriageInwards.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/CarriageInwards.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-3 md:p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Total Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl font-bold",
                                        children: [
                                            settings.currency || 'USD',
                                            " ",
                                            totalAmount.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/CarriageInwards.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-3 md:p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Total Entries"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl font-bold",
                                        children: totalEntries
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/CarriageInwards.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-3 md:p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Suppliers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl font-bold",
                                        children: uniqueSuppliers
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/CarriageInwards.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-3 md:p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "This Month"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl font-bold",
                                        children: thisMonthEntries
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/CarriageInwards.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/CarriageInwards.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2 md:pb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm md:text-lg",
                            children: "Add New Carriage Entry"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carriage$2f$CarriageInwardsForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onSubmit: async (data)=>{
                                try {
                                    await createCarriageInward(data);
                                    setShowForm(false);
                                    toast({
                                        title: "Entry created",
                                        description: "Carriage inwards entry has been successfully created."
                                    });
                                } catch (error) {
                                    toast({
                                        title: "Error",
                                        description: "Failed to create carriage inwards entry.",
                                        variant: "destructive"
                                    });
                                }
                            },
                            onCancel: ()=>setShowForm(false)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/CarriageInwards.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "pb-2 md:pb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-sm md:text-lg",
                            children: "Carriage Inwards Entries"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$carriage$2f$CarriageInwardsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            carriageInwards: carriageInwards,
                            isLoading: isLoading,
                            onEdit: canEdit ? handleEdit : undefined,
                            onDelete: canDelete ? deleteCarriageInward : undefined,
                            onView: handleView
                        }, void 0, false, {
                            fileName: "[project]/src/pages/CarriageInwards.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/CarriageInwards.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/CarriageInwards.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/CarriageInwards.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CarriageInwards, "uBOjQ9cOkXc05jLBLM835mkDcbQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCarriageInwards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarriageInwards"]
    ];
});
_c = CarriageInwards;
const __TURBOPACK__default__export__ = CarriageInwards;
var _c;
__turbopack_context__.k.register(_c, "CarriageInwards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a26f7254._.js.map