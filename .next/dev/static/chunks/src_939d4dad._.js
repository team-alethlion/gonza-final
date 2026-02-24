(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-4 w-full overflow-hidden rounded-full bg-gray-200", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`,
                backgroundColor: "#16a34a"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progress.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Progress;
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Progress$React.forwardRef");
__turbopack_context__.k.register(_c1, "Progress");
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
"[project]/src/components/inventory/StockReconciliation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-plus.js [app-client] (ecmascript) <export default as PackagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageMinus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-minus.js [app-client] (ecmascript) <export default as PackageMinus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
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
;
;
;
;
const StockReconciliation = ({ product, onClose, onReconciled })=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { canViewCostPrice, canViewSellingPrice, formatFinancial } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFinancialVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinancialVisibility"])();
    const [isApplying, setIsApplying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPreview, setShowPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [reconciliationData, setReconciliationData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        currentStock: 0,
        openingStock: 0,
        itemsSold: 0,
        stockAdded: 0,
        stockIn: 0,
        transferOut: 0,
        returnIn: 0,
        returnOut: 0,
        adjustments: 0,
        calculatedClosingStock: 0,
        discrepancy: 0,
        dailyBreakdown: []
    });
    // New state for price adjustments
    const [adjustedCostPrice, setAdjustedCostPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(product.costPrice || 0);
    const [adjustedSellingPrice, setAdjustedSellingPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(product.sellingPrice || 0);
    // Initialize prices when product changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StockReconciliation.useEffect": ()=>{
            setAdjustedCostPrice(product.costPrice || 0);
            setAdjustedSellingPrice(product.sellingPrice || 0);
        }
    }["StockReconciliation.useEffect"], [
        product.id,
        product.costPrice,
        product.sellingPrice
    ]);
    const isValidUUID = (str)=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StockReconciliation.useEffect": ()=>{
            const calculateReconciliation = {
                "StockReconciliation.useEffect.calculateReconciliation": async ()=>{
                    if (!user?.id || !currentBusiness?.id) return;
                    console.group(`Individual Reconciliation Debug: ${product.name} (${product.itemNumber})`);
                    setIsLoading(true);
                    try {
                        const chunkSize = 1000;
                        // Support both UUID and itemNumber as product identifiers
                        // BUT only use valid UUIDs for the stock_history product_id column
                        const historyProductIds = [
                            product.id,
                            product.itemNumber
                        ].filter({
                            "StockReconciliation.useEffect.calculateReconciliation.historyProductIds": (id)=>!!id && isValidUUID(id)
                        }["StockReconciliation.useEffect.calculateReconciliation.historyProductIds"]);
                        // 1. Get Opening Stock from first stock history entry (initial stock)
                        const { data: firstEntry } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('new_quantity, created_at, change_reason').in('product_id', historyProductIds).eq('location_id', currentBusiness.id).order('created_at', {
                            ascending: true
                        }).order('id', {
                            ascending: true
                        }).limit(1).maybeSingle();
                        const openingStock = firstEntry ? Number(firstEntry.new_quantity) || 0 : 0;
                        const openingDate = firstEntry ? new Date(firstEntry.created_at) : null;
                        console.log('Opening State:', {
                            openingStock,
                            openingDate: openingDate?.toISOString(),
                            reason: firstEntry?.change_reason
                        });
                        // 2. Load all sales
                        let allSalesData = [];
                        let salesStart = 0;
                        let hasSalesMore = true;
                        while(hasSalesMore){
                            const { data: salesChunk, error: salesError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales').select('items, date, receipt_number').eq('location_id', currentBusiness.id).range(salesStart, salesStart + chunkSize - 1).order('date', {
                                ascending: true
                            });
                            if (salesError) throw salesError;
                            if (salesChunk && salesChunk.length > 0) {
                                allSalesData.push(...salesChunk);
                                salesStart += chunkSize;
                                hasSalesMore = salesChunk.length === chunkSize;
                            } else {
                                hasSalesMore = false;
                            }
                        }
                        console.log(`Total Sales Records found: ${allSalesData.length}`);
                        // 3. Load ALL stock history movements in one go
                        let allHistory = [];
                        let historyStart = 0;
                        let hasHistoryMore = true;
                        while(hasHistoryMore){
                            const { data: chunk, error: historyError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').eq('location_id', currentBusiness.id).in('product_id', historyProductIds).order('created_at', {
                                ascending: true
                            }).order('id', {
                                ascending: true
                            }).range(historyStart, historyStart + chunkSize - 1);
                            if (historyError) throw historyError;
                            if (chunk && chunk.length > 0) {
                                allHistory.push(...chunk);
                                historyStart += chunkSize;
                                hasHistoryMore = chunk.length === chunkSize;
                            } else {
                                hasHistoryMore = false;
                            }
                        }
                        console.log(`Total History Records found: ${allHistory.length}`);
                        const movements = allHistory.slice(1);
                        // 4. Build daily transactions map
                        const dailyTransactions = new Map();
                        let trackedSalesQty = 0;
                        // Process sales by date
                        allSalesData.forEach({
                            "StockReconciliation.useEffect.calculateReconciliation": (sale)=>{
                                const saleDate = new Date(sale.date);
                                const items = Array.isArray(sale.items) ? sale.items : [];
                                const soldQty = items.filter({
                                    "StockReconciliation.useEffect.calculateReconciliation.soldQty": (item)=>item.productId === product.id || product.itemNumber && item.productId === product.itemNumber
                                }["StockReconciliation.useEffect.calculateReconciliation.soldQty"]).reduce({
                                    "StockReconciliation.useEffect.calculateReconciliation.soldQty": (sum, item)=>sum + (Number(item.quantity) || 0)
                                }["StockReconciliation.useEffect.calculateReconciliation.soldQty"], 0);
                                if (openingDate && saleDate < openingDate) {
                                    return;
                                }
                                const dateStr = saleDate.toISOString().split('T')[0];
                                if (soldQty > 0) {
                                    trackedSalesQty += soldQty;
                                    const existing = dailyTransactions.get(dateStr) || {
                                        itemsSold: 0,
                                        stockAdded: 0,
                                        stockIn: 0,
                                        transferOut: 0,
                                        returnIn: 0,
                                        returnOut: 0,
                                        adjustments: 0,
                                        adjustmentReasons: []
                                    };
                                    existing.itemsSold += soldQty;
                                    dailyTransactions.set(dateStr, existing);
                                }
                            }
                        }["StockReconciliation.useEffect.calculateReconciliation"]);
                        console.log('Sales Processing Done:', {
                            trackedSalesQty
                        });
                        let histAdded = 0, histIn = 0, histTrans = 0, histRetIn = 0, histRetOut = 0, histAdj = 0;
                        // Process movement history
                        movements.forEach({
                            "StockReconciliation.useEffect.calculateReconciliation": (entry)=>{
                                const date = new Date(entry.created_at).toISOString().split('T')[0];
                                const delta = Number(entry.new_quantity) - Number(entry.previous_quantity);
                                const reason = (entry.change_reason || '').toLowerCase();
                                const isSaleRelated = reason.includes('sale') || reason.includes('receipt');
                                const isReturn = reason.includes('return');
                                const isPurchase = reason.includes('purchase') || reason.includes('addition') || reason.includes('initial');
                                if (isSaleRelated && !isReturn && !isPurchase) {
                                    return;
                                }
                                const day = dailyTransactions.get(date) || {
                                    itemsSold: 0,
                                    stockAdded: 0,
                                    stockIn: 0,
                                    transferOut: 0,
                                    returnIn: 0,
                                    returnOut: 0,
                                    adjustments: 0,
                                    adjustmentReasons: []
                                };
                                if (reason.includes('purchase')) {
                                    day.stockAdded += delta;
                                    histAdded += delta;
                                } else if (reason.includes('addition') || reason.includes('initial')) {
                                    // Carriage or initial setup after first entry
                                    day.stockIn += delta;
                                    histIn += delta;
                                } else if (reason.includes('transfer out')) {
                                    day.transferOut += Math.abs(delta);
                                    histTrans += Math.abs(delta);
                                } else if (reason.includes('customer return') || reason.includes('return') && delta > 0) {
                                    day.returnIn += delta;
                                    histRetIn += delta;
                                } else if (reason.includes('return to supplier') || reason.includes('return') && delta < 0) {
                                    day.returnOut += Math.abs(delta);
                                    histRetOut += Math.abs(delta);
                                } else {
                                    day.adjustments += delta;
                                    histAdj += delta;
                                    if (entry.change_reason) {
                                        day.adjustmentReasons.push(`${entry.change_reason} (${delta > 0 ? '+' : ''}${delta})`);
                                    }
                                    console.log(`- Adjustment Record: [${entry.change_reason}] Change: ${delta > 0 ? '+' : ''}${delta}`);
                                }
                                dailyTransactions.set(date, day);
                            }
                        }["StockReconciliation.useEffect.calculateReconciliation"]);
                        console.log('History Processing Done:', {
                            histAdded,
                            histIn,
                            histTrans,
                            histRetIn,
                            histRetOut,
                            histAdj
                        });
                        // Sort dates and calculate daily breakdown
                        const sortedDates = Array.from(dailyTransactions.keys()).sort();
                        const dailyBreakdown = [];
                        let runningStock = openingStock;
                        sortedDates.forEach({
                            "StockReconciliation.useEffect.calculateReconciliation": (date)=>{
                                const day = dailyTransactions.get(date);
                                const startingStock = runningStock;
                                const endingStock = startingStock - day.itemsSold + day.stockAdded + day.stockIn - day.transferOut + day.returnIn - day.returnOut + day.adjustments;
                                dailyBreakdown.push({
                                    date,
                                    startingStock,
                                    itemsSold: day.itemsSold,
                                    stockAdded: day.stockAdded,
                                    stockIn: day.stockIn,
                                    transferOut: day.transferOut,
                                    returnIn: day.returnIn,
                                    returnOut: day.returnOut,
                                    adjustments: day.adjustments,
                                    adjustmentReasons: day.adjustmentReasons,
                                    endingStock
                                });
                                runningStock = endingStock;
                            }
                        }["StockReconciliation.useEffect.calculateReconciliation"]);
                        const calculatedClosingStock = runningStock;
                        const { data: productData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('quantity').eq('id', product.id).single();
                        const currentStock = Number(productData?.quantity) || 0;
                        const discrepancy = currentStock - calculatedClosingStock;
                        console.log('Final Totals:', {
                            openingStock,
                            calculatedClosingStock,
                            currentStock,
                            discrepancy
                        });
                        console.groupEnd();
                        setReconciliationData({
                            currentStock,
                            openingStock,
                            itemsSold: dailyBreakdown.reduce({
                                "StockReconciliation.useEffect.calculateReconciliation": (sum, d)=>sum + d.itemsSold
                            }["StockReconciliation.useEffect.calculateReconciliation"], 0),
                            stockAdded: dailyBreakdown.reduce({
                                "StockReconciliation.useEffect.calculateReconciliation": (sum, d)=>sum + d.stockAdded
                            }["StockReconciliation.useEffect.calculateReconciliation"], 0),
                            stockIn: dailyBreakdown.reduce({
                                "StockReconciliation.useEffect.calculateReconciliation": (sum, d)=>sum + d.stockIn
                            }["StockReconciliation.useEffect.calculateReconciliation"], 0),
                            transferOut: dailyBreakdown.reduce({
                                "StockReconciliation.useEffect.calculateReconciliation": (sum, d)=>sum + d.transferOut
                            }["StockReconciliation.useEffect.calculateReconciliation"], 0),
                            returnIn: dailyBreakdown.reduce({
                                "StockReconciliation.useEffect.calculateReconciliation": (sum, d)=>sum + d.returnIn
                            }["StockReconciliation.useEffect.calculateReconciliation"], 0),
                            returnOut: dailyBreakdown.reduce({
                                "StockReconciliation.useEffect.calculateReconciliation": (sum, d)=>sum + d.returnOut
                            }["StockReconciliation.useEffect.calculateReconciliation"], 0),
                            adjustments: dailyBreakdown.reduce({
                                "StockReconciliation.useEffect.calculateReconciliation": (sum, d)=>sum + d.adjustments
                            }["StockReconciliation.useEffect.calculateReconciliation"], 0),
                            calculatedClosingStock,
                            discrepancy,
                            dailyBreakdown
                        });
                    } catch (error) {
                        console.error('Error calculating reconciliation:', error);
                        console.groupEnd();
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to calculate reconciliation data');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["StockReconciliation.useEffect.calculateReconciliation"];
            calculateReconciliation();
        }
    }["StockReconciliation.useEffect"], [
        user?.id,
        currentBusiness?.id,
        product.id
    ]);
    // Valuation calculations
    const currentCostValue = reconciliationData.currentStock * (product.costPrice || 0);
    const currentStockValue = reconciliationData.currentStock * (product.sellingPrice || 0);
    const reconciledCostValue = reconciliationData.calculatedClosingStock * adjustedCostPrice;
    const reconciledStockValue = reconciliationData.calculatedClosingStock * adjustedSellingPrice;
    const costValueDiff = reconciledCostValue - currentCostValue;
    const stockValueDiff = reconciledStockValue - currentStockValue;
    const hasDiscrepancy = Math.abs(reconciliationData.discrepancy) > 0.01;
    const handleApplyCorrection = async ()=>{
        if (!user?.id || !currentBusiness?.id) return;
        setIsApplying(true);
        try {
            // Update product quantity and prices
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').update({
                quantity: reconciliationData.calculatedClosingStock,
                cost_price: adjustedCostPrice,
                selling_price: adjustedSellingPrice
            }).eq('id', product.id).eq('user_id', user.id);
            if (updateError) throw updateError;
            // Create a stock history entry for the correction
            const { error: historyError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').insert({
                product_id: product.id,
                user_id: user.id,
                location_id: currentBusiness.id,
                previous_quantity: reconciliationData.currentStock,
                new_quantity: reconciliationData.calculatedClosingStock,
                change_reason: 'Stock Reconciliation',
                reference_id: null,
                created_at: new Date().toISOString()
            });
            if (historyError) throw historyError;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Stock reconciled successfully! Corrected ${Math.abs(reconciliationData.discrepancy).toFixed(2)} units.`);
            onReconciled();
            onClose();
        } catch (error) {
            console.error('Error reconciling stock:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to reconcile stock. Please try again.');
        } finally{
            setIsApplying(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: true,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                hasDiscrepancy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "h-5 w-5 text-orange-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 403,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "h-5 w-5 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 405,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Stock Reconciliation - ",
                                product.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Review stock calculations and apply corrections if needed"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-muted-foreground",
                        children: "Loading reconciliation data..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                        lineNumber: 416,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                    lineNumber: 415,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "pb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-sm font-medium",
                                                children: "Current Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                lineNumber: 424,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold",
                                                children: reconciliationData.currentStock.toFixed(2)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 426,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "pb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-sm font-medium",
                                                children: "Calculated Stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                lineNumber: 435,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold",
                                                children: reconciliationData.calculatedClosingStock.toFixed(2)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                lineNumber: 440,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                            lineNumber: 421,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "border-sales-primary/20 bg-sales-primary/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "pb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-base flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "h-4 w-4 text-sales-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Valuation & Price Adjustment"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 449,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-6",
                                            children: [
                                                canViewCostPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                                                            children: "Adjustment Cost Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm",
                                                                    children: settings.currency
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: adjustedCostPrice,
                                                                    onChange: (e)=>setAdjustedCostPrice(Number(e.target.value)),
                                                                    className: "w-full pl-12 pr-4 py-2 bg-white border rounded-md text-sm focus:ring-2 focus:ring-sales-primary/20 outline-none transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 462,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Affects Cost Value"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                canViewSellingPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                                                            children: "Adjustment Selling Price"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 474,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm",
                                                                    children: settings.currency
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: adjustedSellingPrice,
                                                                    onChange: (e)=>setAdjustedSellingPrice(Number(e.target.value)),
                                                                    className: "w-full pl-12 pr-4 py-2 bg-white border rounded-md text-sm focus:ring-2 focus:ring-sales-primary/20 outline-none transition-all"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-muted-foreground",
                                                            children: "Affects Stock Value"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 pt-4 border-t border-sales-primary/10 grid grid-cols-2 gap-4",
                                            children: [
                                                canViewCostPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg bg-white border shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold text-muted-foreground uppercase mb-1",
                                                            children: "Cost Valuation Impact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-end justify-between",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-base font-bold ${costValueDiff >= 0 ? 'text-emerald-600' : 'text-rose-600'}`,
                                                                children: [
                                                                    costValueDiff >= 0 ? '+' : '',
                                                                    formatFinancial(costValueDiff, 'cost')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                lineNumber: 494,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                canViewSellingPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg bg-white border shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold text-muted-foreground uppercase mb-1",
                                                            children: "Stock Valuation Impact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-end justify-between",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-base font-bold ${stockValueDiff >= 0 ? 'text-violet-600' : 'text-rose-600'}`,
                                                                children: [
                                                                    stockValueDiff >= 0 ? '+' : '',
                                                                    formatFinancial(stockValueDiff, 'selling')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                lineNumber: 504,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 503,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 489,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 455,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                            lineNumber: 448,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-base",
                                        children: "Stock Calculation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                        lineNumber: 517,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 516,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Opening Stock"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: reconciliationData.openingStock.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 520,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-red-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Items Sold"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: [
                                                        "- ",
                                                        reconciliationData.itemsSold.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 527,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-emerald-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Stock Added (Purchase)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: [
                                                        "+ ",
                                                        reconciliationData.stockAdded.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 537,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-green-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Stock In (Carriage)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: [
                                                        "+ ",
                                                        reconciliationData.stockIn.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 547,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-orange-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageMinus$3e$__["PackageMinus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Transfer Out"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: [
                                                        "- ",
                                                        reconciliationData.transferOut.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 557,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-blue-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Return In"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: [
                                                        "+ ",
                                                        reconciliationData.returnIn.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 567,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-purple-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageMinus$3e$__["PackageMinus"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 579,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Return Out"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: [
                                                        "- ",
                                                        reconciliationData.returnOut.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 577,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-amber-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 589,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Manual Adjustments"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: [
                                                        reconciliationData.adjustments > 0 ? '+' : '',
                                                        reconciliationData.adjustments.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 587,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t pt-3 flex justify-between items-center font-semibold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Calculated Closing Stock"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: reconciliationData.calculatedClosingStock.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 597,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        hasDiscrepancy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `border-t pt-3 flex justify-between items-center ${reconciliationData.discrepancy > 0 ? 'text-green-600' : 'text-red-600'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Discrepancy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: reconciliationData.discrepancy > 0 ? 'default' : 'destructive',
                                                    children: [
                                                        reconciliationData.discrepancy > 0 ? '+' : '',
                                                        reconciliationData.discrepancy.toFixed(2),
                                                        " units"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 604,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 519,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                            lineNumber: 515,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-base",
                                        children: "Daily Breakdown"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                        lineNumber: 627,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 626,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                        className: "h-[300px] pr-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: reconciliationData.dailyBreakdown.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-muted-foreground py-8",
                                                children: "No transactions found for this product"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                lineNumber: 633,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : reconciliationData.dailyBreakdown.map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    className: "p-3 bg-slate-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-sm mb-2 text-slate-700",
                                                            children: new Date(day.date).toLocaleDateString('en-US', {
                                                                weekday: 'short',
                                                                year: 'numeric',
                                                                month: 'short',
                                                                day: 'numeric'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1.5 text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-muted-foreground",
                                                                            children: "Starting Stock:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 649,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: day.startingStock.toFixed(2)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 650,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 648,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                day.itemsSold > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-red-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Items Sold:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 654,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                "-",
                                                                                day.itemsSold.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 655,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 653,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                day.stockAdded > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-emerald-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Stock Added:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 660,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                "+",
                                                                                day.stockAdded.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 661,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 659,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                day.stockIn > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-green-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Stock In:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 666,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                "+",
                                                                                day.stockIn.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 667,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 665,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                day.transferOut > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-orange-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Transfer Out:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 672,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                "-",
                                                                                day.transferOut.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 673,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                day.returnIn > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-blue-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Return In:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 678,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                "+",
                                                                                day.returnIn.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 679,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 677,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                day.returnOut > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between text-purple-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Return Out:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 684,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                "-",
                                                                                day.returnOut.toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 685,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 683,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                day.adjustments !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col gap-1 text-amber-600",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Adjustments:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                                    lineNumber: 691,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: [
                                                                                        day.adjustments > 0 ? '+' : '',
                                                                                        day.adjustments.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                                    lineNumber: 692,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 690,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        day.adjustmentReasons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] pl-2 border-l border-amber-200 text-amber-500 italic",
                                                                            children: day.adjustmentReasons.join(', ')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 695,
                                                                            columnNumber: 35
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 689,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between pt-1.5 border-t border-slate-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold text-slate-700",
                                                                            children: "Ending Stock:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 702,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-slate-900",
                                                                            children: day.endingStock.toFixed(2)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                            lineNumber: 703,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                                    lineNumber: 701,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 631,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                        lineNumber: 630,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 629,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                            lineNumber: 625,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        hasDiscrepancy && showPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-blue-50 border-blue-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-base text-blue-900",
                                        children: "Preview Changes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                        lineNumber: 718,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 717,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-blue-800",
                                                    children: "Before:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-blue-900",
                                                    children: [
                                                        reconciliationData.currentStock.toFixed(2),
                                                        " units"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 723,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-blue-800",
                                                    children: "After:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-blue-900",
                                                    children: [
                                                        reconciliationData.calculatedClosingStock.toFixed(2),
                                                        " units"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 729,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between pt-2 border-t border-blue-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-blue-800",
                                                    children: "Change:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-blue-900",
                                                    children: [
                                                        reconciliationData.discrepancy > 0 ? '+' : '',
                                                        Math.abs(reconciliationData.discrepancy).toFixed(2),
                                                        " units"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                                    lineNumber: 739,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                            lineNumber: 735,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 722,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                            lineNumber: 716,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        !hasDiscrepancy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                    className: "h-5 w-5 text-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 751,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-green-800",
                                    children: "Stock levels are accurate. No reconciliation needed."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                    lineNumber: 752,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                            lineNumber: 750,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                    lineNumber: 419,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                            lineNumber: 761,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        hasDiscrepancy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: !showPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setShowPreview(true),
                                children: "Preview Changes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                lineNumber: 767,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleApplyCorrection,
                                disabled: isApplying,
                                className: "bg-blue-600 hover:bg-blue-700",
                                children: isApplying ? 'Applying...' : 'Apply Correction'
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                                lineNumber: 771,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
                    lineNumber: 760,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
            lineNumber: 399,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/inventory/StockReconciliation.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StockReconciliation, "o1lUHPPbEj25ein31A5u38YzGnw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFinancialVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFinancialVisibility"]
    ];
});
_c = StockReconciliation;
const __TURBOPACK__default__export__ = StockReconciliation;
var _c;
__turbopack_context__.k.register(_c, "StockReconciliation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/inventory/InventoryPageSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
;
const InventoryPageSkeleton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-8 w-48 mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                                lineNumber: 8,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-4 w-64"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                                lineNumber: 9,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                        lineNumber: 7,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-9 w-9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                                lineNumber: 12,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-9 w-24"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                                lineNumber: 13,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-9 w-32"
                            }, void 0, false, {
                                fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                                lineNumber: 14,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                        lineNumber: 11,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                lineNumber: 6,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-10 w-full max-w-md"
                }, void 0, false, {
                    fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                    children: [
                        ...Array(4)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-24"
                        }, i, false, {
                            fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                    lineNumber: 23,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-64 mb-6"
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-96"
            }, void 0, false, {
                fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/inventory/InventoryPageSkeleton.tsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = InventoryPageSkeleton;
const __TURBOPACK__default__export__ = InventoryPageSkeleton;
var _c;
__turbopack_context__.k.register(_c, "InventoryPageSkeleton");
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
"[project]/src/app/actions/data:584725 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStockHistoryAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6094ef551b9d65f2b9e76486c2d5a1deea99aacc02":"getStockHistoryAction"},"src/app/actions/inventory.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6094ef551b9d65f2b9e76486c2d5a1deea99aacc02", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getStockHistoryAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2RiJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIC0tLSBTVE9DSyBISVNUT1JZIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b2NrSGlzdG9yeUFjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIHByb2R1Y3RJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJZCkgd2hlcmUucHJvZHVjdElkID0gcHJvZHVjdElkO1xyXG5cclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gYXdhaXQgZGIucHJvZHVjdEhpc3RvcnkuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2t1OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCB7IGlkOiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogaGlzdG9yeS5tYXAoKGg6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBoLmlkLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkOiBoLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgIG9sZFF1YW50aXR5OiBoLnByZXZpb3VzUXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBuZXdRdWFudGl0eTogaC5uZXdRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVJlYXNvbjogaC5jaGFuZ2VSZWFzb24sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGguY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VJZDogaC5yZWZlcmVuY2VJZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHROdW1iZXI6IGgucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGgucHJvZHVjdCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBoLnByb2R1Y3QubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IGgucHJvZHVjdC5jb3N0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbGluZ1ByaWNlOiBoLnByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OdW1iZXI6IGgucHJvZHVjdC5za3VcclxuICAgICAgICAgICAgICAgIH0gOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzdG9jayBoaXN0b3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0b2NrSGlzdG9yeUFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IGRhdGEucHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IGRhdGEucHJldmlvdXNRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdRdWFudGl0eTogZGF0YS5uZXdRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VSZWFzb246IGRhdGEuY2hhbmdlUmVhc29uLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUlkOiBkYXRhLnJlZmVyZW5jZUlkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWlwdE51bWJlcjogZGF0YS5yZWNlaXB0TnVtYmVyIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBkYXRhLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IHN0b2NrIGFzIHdlbGxcclxuICAgICAgICAgICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEucHJvZHVjdElkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHN0b2NrOiBkYXRhLm5ld1F1YW50aXR5IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgc3RvY2sgaGlzdG9yeTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNhbGN1bGF0ZVN0b2NrQ2hhaW5BY3Rpb24ocHJvZHVjdElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHByb2R1Y3RJZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnYXNjJyB9LCB7IGlkOiAnYXNjJyB9XVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgZmluYWxRdWFudGl0eTogMCB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IHJ1bm5pbmdRdWFudGl0eSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGlzdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gZW50cnkubmV3UXVhbnRpdHkgLSBlbnRyeS5wcmV2aW91c1F1YW50aXR5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJldiA9IHJ1bm5pbmdRdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05leHQgPSBuZXdQcmV2ICsgY2hhbmdlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5wcmV2aW91c1F1YW50aXR5ICE9PSBuZXdQcmV2IHx8IGVudHJ5Lm5ld1F1YW50aXR5ICE9PSBuZXdOZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlcy5wdXNoKHR4LnByb2R1Y3RIaXN0b3J5LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBlbnRyeS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByZXZpb3VzUXVhbnRpdHk6IG5ld1ByZXYsIG5ld1F1YW50aXR5OiBuZXdOZXh0IH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5uaW5nUXVhbnRpdHkgPSBuZXdOZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh1cGRhdGVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3RcclxuICAgICAgICAgICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBzdG9jazogcnVubmluZ1F1YW50aXR5IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBmaW5hbFF1YW50aXR5OiBydW5uaW5nUXVhbnRpdHkgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWNhbGN1bGF0aW5nIHN0b2NrIGNoYWluOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVN0b2NrSGlzdG9yeUVudHJpZXNCeVJlZmVyZW5jZUFjdGlvbihyZWZlcmVuY2VJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCB0eC5wcm9kdWN0SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyByZWZlcmVuY2VJZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB7IHByb2R1Y3RJZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9IFsuLi5uZXcgU2V0KGVudHJpZXMubWFwKChlOiBhbnkpID0+IGUucHJvZHVjdElkIGFzIHN0cmluZykpXTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgcmVmZXJlbmNlSWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGNoYWlucyBmb3IgYWZmZWN0ZWQgcHJvZHVjdHNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0SWQgb2YgcHJvZHVjdElkcykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVjYWxjdWxhdGVTdG9ja0NoYWluSW50ZXJuYWwodHgsIHByb2R1Y3RJZCBhcyBzdHJpbmcsIGxvY2F0aW9uSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBhZmZlY3RlZFByb2R1Y3RzOiBwcm9kdWN0SWRzLmxlbmd0aCB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHN0b2NrIGhpc3RvcnkgYnkgcmVmZXJlbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0b2NrSGlzdG9yeURhdGVzQnlSZWZlcmVuY2VBY3Rpb24ocmVmZXJlbmNlSWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBuZXdEYXRlOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIucHJvZHVjdEhpc3RvcnkudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IHJlZmVyZW5jZUlkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgY3JlYXRlZEF0OiBuZXcgRGF0ZShuZXdEYXRlKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgc3RvY2sgaGlzdG9yeSBkYXRlczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEludGVybmFsIGhlbHBlciBmb3IgdXNlIHdpdGhpbiB0cmFuc2FjdGlvbnNcclxuYXN5bmMgZnVuY3Rpb24gcmVjYWxjdWxhdGVTdG9ja0NoYWluSW50ZXJuYWwodHg6IGFueSwgcHJvZHVjdElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBwcm9kdWN0SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdhc2MnIH0sIHsgaWQ6ICdhc2MnIH1dXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcnVubmluZ1F1YW50aXR5ID0gMDtcclxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGlzdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZSA9IGVudHJ5Lm5ld1F1YW50aXR5IC0gZW50cnkucHJldmlvdXNRdWFudGl0eTtcclxuICAgICAgICBjb25zdCBuZXdQcmV2ID0gcnVubmluZ1F1YW50aXR5O1xyXG4gICAgICAgIGNvbnN0IG5ld05leHQgPSBuZXdQcmV2ICsgY2hhbmdlO1xyXG5cclxuICAgICAgICBpZiAoZW50cnkucHJldmlvdXNRdWFudGl0eSAhPT0gbmV3UHJldiB8fCBlbnRyeS5uZXdRdWFudGl0eSAhPT0gbmV3TmV4dCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5wcm9kdWN0SGlzdG9yeS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGVudHJ5LmlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHByZXZpb3VzUXVhbnRpdHk6IG5ld1ByZXYsIG5ld1F1YW50aXR5OiBuZXdOZXh0IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJ1bm5pbmdRdWFudGl0eSA9IG5ld05leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwcm9kdWN0SWQgfSxcclxuICAgICAgICBkYXRhOiB7IHN0b2NrOiBydW5uaW5nUXVhbnRpdHkgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIC0tLSBSRVFVSVNJVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVxdWlzaXRpb25zQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRpb25zID0gYXdhaXQgZGIucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlcXVpc2l0aW9ucy5tYXAoKHJlcTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJlcS5pZCxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogcmVxLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHJlcS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlzaXRpb25OdW1iZXI6IHJlcS5yZXF1aXNpdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogcmVxLml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgbm90ZXM6IHJlcS5ub3RlcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVxLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogcmVxLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiByZXEudXBkYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZXF1aXNpdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVxdWlzaXRpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpc2l0aW9uID0gYXdhaXQgZGIucmVxdWlzaXRpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uTnVtYmVyOiBkYXRhLnJlcXVpc2l0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCAnZHJhZnQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9yZXF1aXNpdGlvbnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXF1aXNpdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHJlcXVpc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJlcXVpc2l0aW9uQWN0aW9uKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRpb24gPSBhd2FpdCBkYi5yZXF1aXNpdGlvbi51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCwgdXNlcklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMsXHJcbiAgICAgICAgICAgICAgICBub3RlczogZGF0YS5ub3RlcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3JlcXVpc2l0aW9ucycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcXVpc2l0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcmVxdWlzaXRpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVxdWlzaXRpb25BY3Rpb24oaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIucmVxdWlzaXRpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQsIHVzZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcmVxdWlzaXRpb25zJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJlcXVpc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIFJFUE9SVFMgLyBBTkFMWVRJQ1MgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RvY2tTdW1tYXJ5UmVwb3J0QWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZywgc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoZW5kRGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIEZldGNoIGFsbCBwcm9kdWN0cyBmb3IgdGhlIGxvY2F0aW9uXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBjYXRlZ29yeTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9kdWN0cy5tYXAoYXN5bmMgKHByb2R1Y3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoZSBsb2dpYyB0aGF0IHdhcyBsaWtlbHkgaW4gdGhlIFJQQ1xyXG4gICAgICAgICAgICAvLyBJbiBhIHJlYWwgcHJvZHVjdGlvbiBhcHAsIHdlJ2QgdXNlIGNvbXBsZXggU1FMIG9yIGRlZGljYXRlZCBhZ2dyZWdhdGUgdGFibGVzXHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgaGlzdG9yeSBmb3IgdGhpcyBwcm9kdWN0IGluIHRoZSBkYXRlIHJhbmdlXHJcbiAgICAgICAgICAgIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBkYi5wcm9kdWN0SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBndGU6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsdGU6IGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2FzYycgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtZXRyaWNzIGZyb20gaGlzdG9yeVxyXG4gICAgICAgICAgICBsZXQgaXRlbXNTb2xkID0gMDtcclxuICAgICAgICAgICAgbGV0IHN0b2NrSW4gPSAwO1xyXG4gICAgICAgICAgICBsZXQgYWRqdXN0bWVudHNJbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhZGp1c3RtZW50c091dCA9IDA7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5LmZvckVhY2goKGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gaC5uZXdRdWFudGl0eSAtIGgucHJldmlvdXNRdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGlmIChoLmNoYW5nZVJlYXNvbiA9PT0gJ1NBTEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNTb2xkICs9IE1hdGguYWJzKGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGguY2hhbmdlUmVhc29uID09PSAnU1RPQ0tfSU4nIHx8IGguY2hhbmdlUmVhc29uID09PSAnUkVTVE9DSycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9ja0luICs9IGNoYW5nZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnRzSW4gKz0gY2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50c091dCArPSBNYXRoLmFicyhjaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBjbG9zaW5nIHN0b2NrIGF0IGVuZCBkYXRlIChvciBjdXJyZW50IGlmIGFmdGVyIGVuZCBkYXRlKVxyXG4gICAgICAgICAgICBjb25zdCBjbG9zaW5nU3RvY2tFbnRyeSA9IGF3YWl0IGRiLnByb2R1Y3RIaXN0b3J5LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogeyBsdGU6IGVuZCB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xvc2luZ1N0b2NrID0gY2xvc2luZ1N0b2NrRW50cnkgPyBjbG9zaW5nU3RvY2tFbnRyeS5uZXdRdWFudGl0eSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdTdG9jayA9IGNsb3NpbmdTdG9jayAtIChzdG9ja0luICsgYWRqdXN0bWVudHNJbiAtIGl0ZW1zU29sZCAtIGFkanVzdG1lbnRzT3V0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaXRlbU51bWJlcjogcHJvZHVjdC5za3UgfHwgcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBwcm9kdWN0LmltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgY29zdFByaWNlOiBOdW1iZXIocHJvZHVjdC5jb3N0UHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgc2VsbGluZ1ByaWNlOiBOdW1iZXIocHJvZHVjdC5zZWxsaW5nUHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHByb2R1Y3QuY2F0ZWdvcnk/Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nU3RvY2ssXHJcbiAgICAgICAgICAgICAgICBpdGVtc1NvbGQsXHJcbiAgICAgICAgICAgICAgICBzdG9ja0luLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJPdXQ6IDAsXHJcbiAgICAgICAgICAgICAgICByZXR1cm5JbjogMCxcclxuICAgICAgICAgICAgICAgIHJldHVybk91dDogMCxcclxuICAgICAgICAgICAgICAgIGFkanVzdG1lbnRzSW4sXHJcbiAgICAgICAgICAgICAgICBhZGp1c3RtZW50c091dCxcclxuICAgICAgICAgICAgICAgIGNsb3NpbmdTdG9jayxcclxuICAgICAgICAgICAgICAgIHJldmFsdWF0aW9uOiBjbG9zaW5nU3RvY2sgKiBOdW1iZXIocHJvZHVjdC5jb3N0UHJpY2UpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvcnREYXRhIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBzdG9jayBzdW1tYXJ5IHJlcG9ydDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0FPc0Isa01BQUEifQ==
}),
"[project]/src/app/actions/data:ac4252 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStockHistoryAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"405aa3433556341183b127cf1e60489f223aaf7fc6":"createStockHistoryAction"},"src/app/actions/inventory.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("405aa3433556341183b127cf1e60489f223aaf7fc6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createStockHistoryAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2RiJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIC0tLSBTVE9DSyBISVNUT1JZIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b2NrSGlzdG9yeUFjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIHByb2R1Y3RJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJZCkgd2hlcmUucHJvZHVjdElkID0gcHJvZHVjdElkO1xyXG5cclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gYXdhaXQgZGIucHJvZHVjdEhpc3RvcnkuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2t1OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCB7IGlkOiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogaGlzdG9yeS5tYXAoKGg6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBoLmlkLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkOiBoLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgIG9sZFF1YW50aXR5OiBoLnByZXZpb3VzUXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBuZXdRdWFudGl0eTogaC5uZXdRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVJlYXNvbjogaC5jaGFuZ2VSZWFzb24sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGguY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VJZDogaC5yZWZlcmVuY2VJZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHROdW1iZXI6IGgucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGgucHJvZHVjdCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBoLnByb2R1Y3QubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IGgucHJvZHVjdC5jb3N0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbGluZ1ByaWNlOiBoLnByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OdW1iZXI6IGgucHJvZHVjdC5za3VcclxuICAgICAgICAgICAgICAgIH0gOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzdG9jayBoaXN0b3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0b2NrSGlzdG9yeUFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IGRhdGEucHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IGRhdGEucHJldmlvdXNRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdRdWFudGl0eTogZGF0YS5uZXdRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VSZWFzb246IGRhdGEuY2hhbmdlUmVhc29uLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUlkOiBkYXRhLnJlZmVyZW5jZUlkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWlwdE51bWJlcjogZGF0YS5yZWNlaXB0TnVtYmVyIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBkYXRhLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IHN0b2NrIGFzIHdlbGxcclxuICAgICAgICAgICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEucHJvZHVjdElkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHN0b2NrOiBkYXRhLm5ld1F1YW50aXR5IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgc3RvY2sgaGlzdG9yeTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNhbGN1bGF0ZVN0b2NrQ2hhaW5BY3Rpb24ocHJvZHVjdElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHByb2R1Y3RJZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnYXNjJyB9LCB7IGlkOiAnYXNjJyB9XVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgZmluYWxRdWFudGl0eTogMCB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IHJ1bm5pbmdRdWFudGl0eSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGlzdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gZW50cnkubmV3UXVhbnRpdHkgLSBlbnRyeS5wcmV2aW91c1F1YW50aXR5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJldiA9IHJ1bm5pbmdRdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05leHQgPSBuZXdQcmV2ICsgY2hhbmdlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5wcmV2aW91c1F1YW50aXR5ICE9PSBuZXdQcmV2IHx8IGVudHJ5Lm5ld1F1YW50aXR5ICE9PSBuZXdOZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlcy5wdXNoKHR4LnByb2R1Y3RIaXN0b3J5LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBlbnRyeS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByZXZpb3VzUXVhbnRpdHk6IG5ld1ByZXYsIG5ld1F1YW50aXR5OiBuZXdOZXh0IH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5uaW5nUXVhbnRpdHkgPSBuZXdOZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh1cGRhdGVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3RcclxuICAgICAgICAgICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBzdG9jazogcnVubmluZ1F1YW50aXR5IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBmaW5hbFF1YW50aXR5OiBydW5uaW5nUXVhbnRpdHkgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWNhbGN1bGF0aW5nIHN0b2NrIGNoYWluOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVN0b2NrSGlzdG9yeUVudHJpZXNCeVJlZmVyZW5jZUFjdGlvbihyZWZlcmVuY2VJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCB0eC5wcm9kdWN0SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyByZWZlcmVuY2VJZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB7IHByb2R1Y3RJZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9IFsuLi5uZXcgU2V0KGVudHJpZXMubWFwKChlOiBhbnkpID0+IGUucHJvZHVjdElkIGFzIHN0cmluZykpXTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgcmVmZXJlbmNlSWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGNoYWlucyBmb3IgYWZmZWN0ZWQgcHJvZHVjdHNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0SWQgb2YgcHJvZHVjdElkcykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVjYWxjdWxhdGVTdG9ja0NoYWluSW50ZXJuYWwodHgsIHByb2R1Y3RJZCBhcyBzdHJpbmcsIGxvY2F0aW9uSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBhZmZlY3RlZFByb2R1Y3RzOiBwcm9kdWN0SWRzLmxlbmd0aCB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHN0b2NrIGhpc3RvcnkgYnkgcmVmZXJlbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0b2NrSGlzdG9yeURhdGVzQnlSZWZlcmVuY2VBY3Rpb24ocmVmZXJlbmNlSWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBuZXdEYXRlOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIucHJvZHVjdEhpc3RvcnkudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IHJlZmVyZW5jZUlkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgY3JlYXRlZEF0OiBuZXcgRGF0ZShuZXdEYXRlKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgc3RvY2sgaGlzdG9yeSBkYXRlczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEludGVybmFsIGhlbHBlciBmb3IgdXNlIHdpdGhpbiB0cmFuc2FjdGlvbnNcclxuYXN5bmMgZnVuY3Rpb24gcmVjYWxjdWxhdGVTdG9ja0NoYWluSW50ZXJuYWwodHg6IGFueSwgcHJvZHVjdElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBwcm9kdWN0SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdhc2MnIH0sIHsgaWQ6ICdhc2MnIH1dXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcnVubmluZ1F1YW50aXR5ID0gMDtcclxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGlzdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZSA9IGVudHJ5Lm5ld1F1YW50aXR5IC0gZW50cnkucHJldmlvdXNRdWFudGl0eTtcclxuICAgICAgICBjb25zdCBuZXdQcmV2ID0gcnVubmluZ1F1YW50aXR5O1xyXG4gICAgICAgIGNvbnN0IG5ld05leHQgPSBuZXdQcmV2ICsgY2hhbmdlO1xyXG5cclxuICAgICAgICBpZiAoZW50cnkucHJldmlvdXNRdWFudGl0eSAhPT0gbmV3UHJldiB8fCBlbnRyeS5uZXdRdWFudGl0eSAhPT0gbmV3TmV4dCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5wcm9kdWN0SGlzdG9yeS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGVudHJ5LmlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHByZXZpb3VzUXVhbnRpdHk6IG5ld1ByZXYsIG5ld1F1YW50aXR5OiBuZXdOZXh0IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJ1bm5pbmdRdWFudGl0eSA9IG5ld05leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwcm9kdWN0SWQgfSxcclxuICAgICAgICBkYXRhOiB7IHN0b2NrOiBydW5uaW5nUXVhbnRpdHkgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIC0tLSBSRVFVSVNJVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVxdWlzaXRpb25zQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRpb25zID0gYXdhaXQgZGIucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlcXVpc2l0aW9ucy5tYXAoKHJlcTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJlcS5pZCxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogcmVxLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHJlcS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlzaXRpb25OdW1iZXI6IHJlcS5yZXF1aXNpdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogcmVxLml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgbm90ZXM6IHJlcS5ub3RlcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVxLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogcmVxLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiByZXEudXBkYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZXF1aXNpdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVxdWlzaXRpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpc2l0aW9uID0gYXdhaXQgZGIucmVxdWlzaXRpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uTnVtYmVyOiBkYXRhLnJlcXVpc2l0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCAnZHJhZnQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9yZXF1aXNpdGlvbnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXF1aXNpdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHJlcXVpc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJlcXVpc2l0aW9uQWN0aW9uKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRpb24gPSBhd2FpdCBkYi5yZXF1aXNpdGlvbi51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCwgdXNlcklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMsXHJcbiAgICAgICAgICAgICAgICBub3RlczogZGF0YS5ub3RlcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3JlcXVpc2l0aW9ucycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcXVpc2l0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcmVxdWlzaXRpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVxdWlzaXRpb25BY3Rpb24oaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIucmVxdWlzaXRpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQsIHVzZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcmVxdWlzaXRpb25zJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJlcXVpc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIFJFUE9SVFMgLyBBTkFMWVRJQ1MgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RvY2tTdW1tYXJ5UmVwb3J0QWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZywgc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoZW5kRGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIEZldGNoIGFsbCBwcm9kdWN0cyBmb3IgdGhlIGxvY2F0aW9uXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBjYXRlZ29yeTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9kdWN0cy5tYXAoYXN5bmMgKHByb2R1Y3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoZSBsb2dpYyB0aGF0IHdhcyBsaWtlbHkgaW4gdGhlIFJQQ1xyXG4gICAgICAgICAgICAvLyBJbiBhIHJlYWwgcHJvZHVjdGlvbiBhcHAsIHdlJ2QgdXNlIGNvbXBsZXggU1FMIG9yIGRlZGljYXRlZCBhZ2dyZWdhdGUgdGFibGVzXHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgaGlzdG9yeSBmb3IgdGhpcyBwcm9kdWN0IGluIHRoZSBkYXRlIHJhbmdlXHJcbiAgICAgICAgICAgIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBkYi5wcm9kdWN0SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBndGU6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsdGU6IGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2FzYycgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtZXRyaWNzIGZyb20gaGlzdG9yeVxyXG4gICAgICAgICAgICBsZXQgaXRlbXNTb2xkID0gMDtcclxuICAgICAgICAgICAgbGV0IHN0b2NrSW4gPSAwO1xyXG4gICAgICAgICAgICBsZXQgYWRqdXN0bWVudHNJbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhZGp1c3RtZW50c091dCA9IDA7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5LmZvckVhY2goKGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gaC5uZXdRdWFudGl0eSAtIGgucHJldmlvdXNRdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGlmIChoLmNoYW5nZVJlYXNvbiA9PT0gJ1NBTEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNTb2xkICs9IE1hdGguYWJzKGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGguY2hhbmdlUmVhc29uID09PSAnU1RPQ0tfSU4nIHx8IGguY2hhbmdlUmVhc29uID09PSAnUkVTVE9DSycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9ja0luICs9IGNoYW5nZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnRzSW4gKz0gY2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50c091dCArPSBNYXRoLmFicyhjaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBjbG9zaW5nIHN0b2NrIGF0IGVuZCBkYXRlIChvciBjdXJyZW50IGlmIGFmdGVyIGVuZCBkYXRlKVxyXG4gICAgICAgICAgICBjb25zdCBjbG9zaW5nU3RvY2tFbnRyeSA9IGF3YWl0IGRiLnByb2R1Y3RIaXN0b3J5LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogeyBsdGU6IGVuZCB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xvc2luZ1N0b2NrID0gY2xvc2luZ1N0b2NrRW50cnkgPyBjbG9zaW5nU3RvY2tFbnRyeS5uZXdRdWFudGl0eSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdTdG9jayA9IGNsb3NpbmdTdG9jayAtIChzdG9ja0luICsgYWRqdXN0bWVudHNJbiAtIGl0ZW1zU29sZCAtIGFkanVzdG1lbnRzT3V0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaXRlbU51bWJlcjogcHJvZHVjdC5za3UgfHwgcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBwcm9kdWN0LmltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgY29zdFByaWNlOiBOdW1iZXIocHJvZHVjdC5jb3N0UHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgc2VsbGluZ1ByaWNlOiBOdW1iZXIocHJvZHVjdC5zZWxsaW5nUHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHByb2R1Y3QuY2F0ZWdvcnk/Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nU3RvY2ssXHJcbiAgICAgICAgICAgICAgICBpdGVtc1NvbGQsXHJcbiAgICAgICAgICAgICAgICBzdG9ja0luLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJPdXQ6IDAsXHJcbiAgICAgICAgICAgICAgICByZXR1cm5JbjogMCxcclxuICAgICAgICAgICAgICAgIHJldHVybk91dDogMCxcclxuICAgICAgICAgICAgICAgIGFkanVzdG1lbnRzSW4sXHJcbiAgICAgICAgICAgICAgICBhZGp1c3RtZW50c091dCxcclxuICAgICAgICAgICAgICAgIGNsb3NpbmdTdG9jayxcclxuICAgICAgICAgICAgICAgIHJldmFsdWF0aW9uOiBjbG9zaW5nU3RvY2sgKiBOdW1iZXIocHJvZHVjdC5jb3N0UHJpY2UpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvcnREYXRhIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBzdG9jayBzdW1tYXJ5IHJlcG9ydDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5U0FvRHNCLHFNQUFBIn0=
}),
"[project]/src/app/actions/data:50fbe4 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recalculateStockChainAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"600d6e9169619c3623d7861924ed79fa391dcffa70":"recalculateStockChainAction"},"src/app/actions/inventory.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("600d6e9169619c3623d7861924ed79fa391dcffa70", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "recalculateStockChainAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2RiJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIC0tLSBTVE9DSyBISVNUT1JZIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b2NrSGlzdG9yeUFjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIHByb2R1Y3RJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJZCkgd2hlcmUucHJvZHVjdElkID0gcHJvZHVjdElkO1xyXG5cclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gYXdhaXQgZGIucHJvZHVjdEhpc3RvcnkuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2t1OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCB7IGlkOiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogaGlzdG9yeS5tYXAoKGg6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBoLmlkLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkOiBoLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgIG9sZFF1YW50aXR5OiBoLnByZXZpb3VzUXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBuZXdRdWFudGl0eTogaC5uZXdRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVJlYXNvbjogaC5jaGFuZ2VSZWFzb24sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGguY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VJZDogaC5yZWZlcmVuY2VJZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHROdW1iZXI6IGgucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGgucHJvZHVjdCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBoLnByb2R1Y3QubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IGgucHJvZHVjdC5jb3N0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbGluZ1ByaWNlOiBoLnByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OdW1iZXI6IGgucHJvZHVjdC5za3VcclxuICAgICAgICAgICAgICAgIH0gOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzdG9jayBoaXN0b3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0b2NrSGlzdG9yeUFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IGRhdGEucHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IGRhdGEucHJldmlvdXNRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdRdWFudGl0eTogZGF0YS5uZXdRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VSZWFzb246IGRhdGEuY2hhbmdlUmVhc29uLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUlkOiBkYXRhLnJlZmVyZW5jZUlkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWlwdE51bWJlcjogZGF0YS5yZWNlaXB0TnVtYmVyIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBkYXRhLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IHN0b2NrIGFzIHdlbGxcclxuICAgICAgICAgICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEucHJvZHVjdElkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHN0b2NrOiBkYXRhLm5ld1F1YW50aXR5IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgc3RvY2sgaGlzdG9yeTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNhbGN1bGF0ZVN0b2NrQ2hhaW5BY3Rpb24ocHJvZHVjdElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHByb2R1Y3RJZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnYXNjJyB9LCB7IGlkOiAnYXNjJyB9XVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgZmluYWxRdWFudGl0eTogMCB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IHJ1bm5pbmdRdWFudGl0eSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGlzdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gZW50cnkubmV3UXVhbnRpdHkgLSBlbnRyeS5wcmV2aW91c1F1YW50aXR5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJldiA9IHJ1bm5pbmdRdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05leHQgPSBuZXdQcmV2ICsgY2hhbmdlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5wcmV2aW91c1F1YW50aXR5ICE9PSBuZXdQcmV2IHx8IGVudHJ5Lm5ld1F1YW50aXR5ICE9PSBuZXdOZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlcy5wdXNoKHR4LnByb2R1Y3RIaXN0b3J5LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBlbnRyeS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByZXZpb3VzUXVhbnRpdHk6IG5ld1ByZXYsIG5ld1F1YW50aXR5OiBuZXdOZXh0IH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5uaW5nUXVhbnRpdHkgPSBuZXdOZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh1cGRhdGVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3RcclxuICAgICAgICAgICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBzdG9jazogcnVubmluZ1F1YW50aXR5IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBmaW5hbFF1YW50aXR5OiBydW5uaW5nUXVhbnRpdHkgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWNhbGN1bGF0aW5nIHN0b2NrIGNoYWluOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVN0b2NrSGlzdG9yeUVudHJpZXNCeVJlZmVyZW5jZUFjdGlvbihyZWZlcmVuY2VJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCB0eC5wcm9kdWN0SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyByZWZlcmVuY2VJZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB7IHByb2R1Y3RJZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9IFsuLi5uZXcgU2V0KGVudHJpZXMubWFwKChlOiBhbnkpID0+IGUucHJvZHVjdElkIGFzIHN0cmluZykpXTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgcmVmZXJlbmNlSWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGNoYWlucyBmb3IgYWZmZWN0ZWQgcHJvZHVjdHNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0SWQgb2YgcHJvZHVjdElkcykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVjYWxjdWxhdGVTdG9ja0NoYWluSW50ZXJuYWwodHgsIHByb2R1Y3RJZCBhcyBzdHJpbmcsIGxvY2F0aW9uSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBhZmZlY3RlZFByb2R1Y3RzOiBwcm9kdWN0SWRzLmxlbmd0aCB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHN0b2NrIGhpc3RvcnkgYnkgcmVmZXJlbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0b2NrSGlzdG9yeURhdGVzQnlSZWZlcmVuY2VBY3Rpb24ocmVmZXJlbmNlSWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBuZXdEYXRlOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIucHJvZHVjdEhpc3RvcnkudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IHJlZmVyZW5jZUlkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgY3JlYXRlZEF0OiBuZXcgRGF0ZShuZXdEYXRlKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgc3RvY2sgaGlzdG9yeSBkYXRlczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEludGVybmFsIGhlbHBlciBmb3IgdXNlIHdpdGhpbiB0cmFuc2FjdGlvbnNcclxuYXN5bmMgZnVuY3Rpb24gcmVjYWxjdWxhdGVTdG9ja0NoYWluSW50ZXJuYWwodHg6IGFueSwgcHJvZHVjdElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBwcm9kdWN0SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdhc2MnIH0sIHsgaWQ6ICdhc2MnIH1dXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcnVubmluZ1F1YW50aXR5ID0gMDtcclxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGlzdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZSA9IGVudHJ5Lm5ld1F1YW50aXR5IC0gZW50cnkucHJldmlvdXNRdWFudGl0eTtcclxuICAgICAgICBjb25zdCBuZXdQcmV2ID0gcnVubmluZ1F1YW50aXR5O1xyXG4gICAgICAgIGNvbnN0IG5ld05leHQgPSBuZXdQcmV2ICsgY2hhbmdlO1xyXG5cclxuICAgICAgICBpZiAoZW50cnkucHJldmlvdXNRdWFudGl0eSAhPT0gbmV3UHJldiB8fCBlbnRyeS5uZXdRdWFudGl0eSAhPT0gbmV3TmV4dCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5wcm9kdWN0SGlzdG9yeS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGVudHJ5LmlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHByZXZpb3VzUXVhbnRpdHk6IG5ld1ByZXYsIG5ld1F1YW50aXR5OiBuZXdOZXh0IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJ1bm5pbmdRdWFudGl0eSA9IG5ld05leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwcm9kdWN0SWQgfSxcclxuICAgICAgICBkYXRhOiB7IHN0b2NrOiBydW5uaW5nUXVhbnRpdHkgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIC0tLSBSRVFVSVNJVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVxdWlzaXRpb25zQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRpb25zID0gYXdhaXQgZGIucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlcXVpc2l0aW9ucy5tYXAoKHJlcTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJlcS5pZCxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogcmVxLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHJlcS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlzaXRpb25OdW1iZXI6IHJlcS5yZXF1aXNpdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogcmVxLml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgbm90ZXM6IHJlcS5ub3RlcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVxLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogcmVxLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiByZXEudXBkYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZXF1aXNpdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVxdWlzaXRpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpc2l0aW9uID0gYXdhaXQgZGIucmVxdWlzaXRpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uTnVtYmVyOiBkYXRhLnJlcXVpc2l0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCAnZHJhZnQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9yZXF1aXNpdGlvbnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXF1aXNpdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHJlcXVpc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJlcXVpc2l0aW9uQWN0aW9uKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRpb24gPSBhd2FpdCBkYi5yZXF1aXNpdGlvbi51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCwgdXNlcklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMsXHJcbiAgICAgICAgICAgICAgICBub3RlczogZGF0YS5ub3RlcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3JlcXVpc2l0aW9ucycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcXVpc2l0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcmVxdWlzaXRpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVxdWlzaXRpb25BY3Rpb24oaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIucmVxdWlzaXRpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQsIHVzZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcmVxdWlzaXRpb25zJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJlcXVpc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIFJFUE9SVFMgLyBBTkFMWVRJQ1MgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RvY2tTdW1tYXJ5UmVwb3J0QWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZywgc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoZW5kRGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIEZldGNoIGFsbCBwcm9kdWN0cyBmb3IgdGhlIGxvY2F0aW9uXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBjYXRlZ29yeTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9kdWN0cy5tYXAoYXN5bmMgKHByb2R1Y3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoZSBsb2dpYyB0aGF0IHdhcyBsaWtlbHkgaW4gdGhlIFJQQ1xyXG4gICAgICAgICAgICAvLyBJbiBhIHJlYWwgcHJvZHVjdGlvbiBhcHAsIHdlJ2QgdXNlIGNvbXBsZXggU1FMIG9yIGRlZGljYXRlZCBhZ2dyZWdhdGUgdGFibGVzXHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgaGlzdG9yeSBmb3IgdGhpcyBwcm9kdWN0IGluIHRoZSBkYXRlIHJhbmdlXHJcbiAgICAgICAgICAgIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBkYi5wcm9kdWN0SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBndGU6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsdGU6IGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2FzYycgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtZXRyaWNzIGZyb20gaGlzdG9yeVxyXG4gICAgICAgICAgICBsZXQgaXRlbXNTb2xkID0gMDtcclxuICAgICAgICAgICAgbGV0IHN0b2NrSW4gPSAwO1xyXG4gICAgICAgICAgICBsZXQgYWRqdXN0bWVudHNJbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhZGp1c3RtZW50c091dCA9IDA7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5LmZvckVhY2goKGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gaC5uZXdRdWFudGl0eSAtIGgucHJldmlvdXNRdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGlmIChoLmNoYW5nZVJlYXNvbiA9PT0gJ1NBTEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNTb2xkICs9IE1hdGguYWJzKGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGguY2hhbmdlUmVhc29uID09PSAnU1RPQ0tfSU4nIHx8IGguY2hhbmdlUmVhc29uID09PSAnUkVTVE9DSycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9ja0luICs9IGNoYW5nZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnRzSW4gKz0gY2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50c091dCArPSBNYXRoLmFicyhjaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBjbG9zaW5nIHN0b2NrIGF0IGVuZCBkYXRlIChvciBjdXJyZW50IGlmIGFmdGVyIGVuZCBkYXRlKVxyXG4gICAgICAgICAgICBjb25zdCBjbG9zaW5nU3RvY2tFbnRyeSA9IGF3YWl0IGRiLnByb2R1Y3RIaXN0b3J5LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogeyBsdGU6IGVuZCB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xvc2luZ1N0b2NrID0gY2xvc2luZ1N0b2NrRW50cnkgPyBjbG9zaW5nU3RvY2tFbnRyeS5uZXdRdWFudGl0eSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdTdG9jayA9IGNsb3NpbmdTdG9jayAtIChzdG9ja0luICsgYWRqdXN0bWVudHNJbiAtIGl0ZW1zU29sZCAtIGFkanVzdG1lbnRzT3V0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaXRlbU51bWJlcjogcHJvZHVjdC5za3UgfHwgcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBwcm9kdWN0LmltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgY29zdFByaWNlOiBOdW1iZXIocHJvZHVjdC5jb3N0UHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgc2VsbGluZ1ByaWNlOiBOdW1iZXIocHJvZHVjdC5zZWxsaW5nUHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHByb2R1Y3QuY2F0ZWdvcnk/Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nU3RvY2ssXHJcbiAgICAgICAgICAgICAgICBpdGVtc1NvbGQsXHJcbiAgICAgICAgICAgICAgICBzdG9ja0luLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJPdXQ6IDAsXHJcbiAgICAgICAgICAgICAgICByZXR1cm5JbjogMCxcclxuICAgICAgICAgICAgICAgIHJldHVybk91dDogMCxcclxuICAgICAgICAgICAgICAgIGFkanVzdG1lbnRzSW4sXHJcbiAgICAgICAgICAgICAgICBhZGp1c3RtZW50c091dCxcclxuICAgICAgICAgICAgICAgIGNsb3NpbmdTdG9jayxcclxuICAgICAgICAgICAgICAgIHJldmFsdWF0aW9uOiBjbG9zaW5nU3RvY2sgKiBOdW1iZXIocHJvZHVjdC5jb3N0UHJpY2UpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvcnREYXRhIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBzdG9jayBzdW1tYXJ5IHJlcG9ydDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI0U0FzRnNCLHdNQUFBIn0=
}),
"[project]/src/app/actions/data:272456 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteStockHistoryEntriesByReferenceAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"608ac522acb7bd3a2eb971f85e6145765470001c4a":"deleteStockHistoryEntriesByReferenceAction"},"src/app/actions/inventory.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("608ac522acb7bd3a2eb971f85e6145765470001c4a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteStockHistoryEntriesByReferenceAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2RiJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIC0tLSBTVE9DSyBISVNUT1JZIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b2NrSGlzdG9yeUFjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIHByb2R1Y3RJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJZCkgd2hlcmUucHJvZHVjdElkID0gcHJvZHVjdElkO1xyXG5cclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gYXdhaXQgZGIucHJvZHVjdEhpc3RvcnkuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2t1OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCB7IGlkOiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogaGlzdG9yeS5tYXAoKGg6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBoLmlkLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkOiBoLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgIG9sZFF1YW50aXR5OiBoLnByZXZpb3VzUXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBuZXdRdWFudGl0eTogaC5uZXdRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVJlYXNvbjogaC5jaGFuZ2VSZWFzb24sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGguY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VJZDogaC5yZWZlcmVuY2VJZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHROdW1iZXI6IGgucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGgucHJvZHVjdCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBoLnByb2R1Y3QubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IGgucHJvZHVjdC5jb3N0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbGluZ1ByaWNlOiBoLnByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OdW1iZXI6IGgucHJvZHVjdC5za3VcclxuICAgICAgICAgICAgICAgIH0gOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzdG9jayBoaXN0b3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0b2NrSGlzdG9yeUFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IGRhdGEucHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IGRhdGEucHJldmlvdXNRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdRdWFudGl0eTogZGF0YS5uZXdRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VSZWFzb246IGRhdGEuY2hhbmdlUmVhc29uLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUlkOiBkYXRhLnJlZmVyZW5jZUlkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWlwdE51bWJlcjogZGF0YS5yZWNlaXB0TnVtYmVyIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBkYXRhLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IHN0b2NrIGFzIHdlbGxcclxuICAgICAgICAgICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEucHJvZHVjdElkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHN0b2NrOiBkYXRhLm5ld1F1YW50aXR5IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgc3RvY2sgaGlzdG9yeTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNhbGN1bGF0ZVN0b2NrQ2hhaW5BY3Rpb24ocHJvZHVjdElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHByb2R1Y3RJZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnYXNjJyB9LCB7IGlkOiAnYXNjJyB9XVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgZmluYWxRdWFudGl0eTogMCB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IHJ1bm5pbmdRdWFudGl0eSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGlzdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gZW50cnkubmV3UXVhbnRpdHkgLSBlbnRyeS5wcmV2aW91c1F1YW50aXR5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJldiA9IHJ1bm5pbmdRdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05leHQgPSBuZXdQcmV2ICsgY2hhbmdlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5wcmV2aW91c1F1YW50aXR5ICE9PSBuZXdQcmV2IHx8IGVudHJ5Lm5ld1F1YW50aXR5ICE9PSBuZXdOZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlcy5wdXNoKHR4LnByb2R1Y3RIaXN0b3J5LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBlbnRyeS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByZXZpb3VzUXVhbnRpdHk6IG5ld1ByZXYsIG5ld1F1YW50aXR5OiBuZXdOZXh0IH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5uaW5nUXVhbnRpdHkgPSBuZXdOZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh1cGRhdGVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3RcclxuICAgICAgICAgICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBzdG9jazogcnVubmluZ1F1YW50aXR5IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBmaW5hbFF1YW50aXR5OiBydW5uaW5nUXVhbnRpdHkgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWNhbGN1bGF0aW5nIHN0b2NrIGNoYWluOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVN0b2NrSGlzdG9yeUVudHJpZXNCeVJlZmVyZW5jZUFjdGlvbihyZWZlcmVuY2VJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCB0eC5wcm9kdWN0SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyByZWZlcmVuY2VJZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB7IHByb2R1Y3RJZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9IFsuLi5uZXcgU2V0KGVudHJpZXMubWFwKChlOiBhbnkpID0+IGUucHJvZHVjdElkIGFzIHN0cmluZykpXTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgcmVmZXJlbmNlSWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGNoYWlucyBmb3IgYWZmZWN0ZWQgcHJvZHVjdHNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0SWQgb2YgcHJvZHVjdElkcykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVjYWxjdWxhdGVTdG9ja0NoYWluSW50ZXJuYWwodHgsIHByb2R1Y3RJZCBhcyBzdHJpbmcsIGxvY2F0aW9uSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBhZmZlY3RlZFByb2R1Y3RzOiBwcm9kdWN0SWRzLmxlbmd0aCB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHN0b2NrIGhpc3RvcnkgYnkgcmVmZXJlbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0b2NrSGlzdG9yeURhdGVzQnlSZWZlcmVuY2VBY3Rpb24ocmVmZXJlbmNlSWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBuZXdEYXRlOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIucHJvZHVjdEhpc3RvcnkudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IHJlZmVyZW5jZUlkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgY3JlYXRlZEF0OiBuZXcgRGF0ZShuZXdEYXRlKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgc3RvY2sgaGlzdG9yeSBkYXRlczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEludGVybmFsIGhlbHBlciBmb3IgdXNlIHdpdGhpbiB0cmFuc2FjdGlvbnNcclxuYXN5bmMgZnVuY3Rpb24gcmVjYWxjdWxhdGVTdG9ja0NoYWluSW50ZXJuYWwodHg6IGFueSwgcHJvZHVjdElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBwcm9kdWN0SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdhc2MnIH0sIHsgaWQ6ICdhc2MnIH1dXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcnVubmluZ1F1YW50aXR5ID0gMDtcclxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGlzdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZSA9IGVudHJ5Lm5ld1F1YW50aXR5IC0gZW50cnkucHJldmlvdXNRdWFudGl0eTtcclxuICAgICAgICBjb25zdCBuZXdQcmV2ID0gcnVubmluZ1F1YW50aXR5O1xyXG4gICAgICAgIGNvbnN0IG5ld05leHQgPSBuZXdQcmV2ICsgY2hhbmdlO1xyXG5cclxuICAgICAgICBpZiAoZW50cnkucHJldmlvdXNRdWFudGl0eSAhPT0gbmV3UHJldiB8fCBlbnRyeS5uZXdRdWFudGl0eSAhPT0gbmV3TmV4dCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5wcm9kdWN0SGlzdG9yeS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGVudHJ5LmlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHByZXZpb3VzUXVhbnRpdHk6IG5ld1ByZXYsIG5ld1F1YW50aXR5OiBuZXdOZXh0IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJ1bm5pbmdRdWFudGl0eSA9IG5ld05leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwcm9kdWN0SWQgfSxcclxuICAgICAgICBkYXRhOiB7IHN0b2NrOiBydW5uaW5nUXVhbnRpdHkgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIC0tLSBSRVFVSVNJVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVxdWlzaXRpb25zQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRpb25zID0gYXdhaXQgZGIucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlcXVpc2l0aW9ucy5tYXAoKHJlcTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJlcS5pZCxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogcmVxLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHJlcS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlzaXRpb25OdW1iZXI6IHJlcS5yZXF1aXNpdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogcmVxLml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgbm90ZXM6IHJlcS5ub3RlcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVxLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogcmVxLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiByZXEudXBkYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZXF1aXNpdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVxdWlzaXRpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpc2l0aW9uID0gYXdhaXQgZGIucmVxdWlzaXRpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uTnVtYmVyOiBkYXRhLnJlcXVpc2l0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCAnZHJhZnQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9yZXF1aXNpdGlvbnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXF1aXNpdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHJlcXVpc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJlcXVpc2l0aW9uQWN0aW9uKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRpb24gPSBhd2FpdCBkYi5yZXF1aXNpdGlvbi51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCwgdXNlcklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMsXHJcbiAgICAgICAgICAgICAgICBub3RlczogZGF0YS5ub3RlcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3JlcXVpc2l0aW9ucycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcXVpc2l0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcmVxdWlzaXRpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVxdWlzaXRpb25BY3Rpb24oaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIucmVxdWlzaXRpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQsIHVzZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcmVxdWlzaXRpb25zJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJlcXVpc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIFJFUE9SVFMgLyBBTkFMWVRJQ1MgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RvY2tTdW1tYXJ5UmVwb3J0QWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZywgc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoZW5kRGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIEZldGNoIGFsbCBwcm9kdWN0cyBmb3IgdGhlIGxvY2F0aW9uXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBjYXRlZ29yeTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9kdWN0cy5tYXAoYXN5bmMgKHByb2R1Y3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoZSBsb2dpYyB0aGF0IHdhcyBsaWtlbHkgaW4gdGhlIFJQQ1xyXG4gICAgICAgICAgICAvLyBJbiBhIHJlYWwgcHJvZHVjdGlvbiBhcHAsIHdlJ2QgdXNlIGNvbXBsZXggU1FMIG9yIGRlZGljYXRlZCBhZ2dyZWdhdGUgdGFibGVzXHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgaGlzdG9yeSBmb3IgdGhpcyBwcm9kdWN0IGluIHRoZSBkYXRlIHJhbmdlXHJcbiAgICAgICAgICAgIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBkYi5wcm9kdWN0SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBndGU6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsdGU6IGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2FzYycgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtZXRyaWNzIGZyb20gaGlzdG9yeVxyXG4gICAgICAgICAgICBsZXQgaXRlbXNTb2xkID0gMDtcclxuICAgICAgICAgICAgbGV0IHN0b2NrSW4gPSAwO1xyXG4gICAgICAgICAgICBsZXQgYWRqdXN0bWVudHNJbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhZGp1c3RtZW50c091dCA9IDA7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5LmZvckVhY2goKGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gaC5uZXdRdWFudGl0eSAtIGgucHJldmlvdXNRdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGlmIChoLmNoYW5nZVJlYXNvbiA9PT0gJ1NBTEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNTb2xkICs9IE1hdGguYWJzKGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGguY2hhbmdlUmVhc29uID09PSAnU1RPQ0tfSU4nIHx8IGguY2hhbmdlUmVhc29uID09PSAnUkVTVE9DSycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9ja0luICs9IGNoYW5nZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnRzSW4gKz0gY2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50c091dCArPSBNYXRoLmFicyhjaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBjbG9zaW5nIHN0b2NrIGF0IGVuZCBkYXRlIChvciBjdXJyZW50IGlmIGFmdGVyIGVuZCBkYXRlKVxyXG4gICAgICAgICAgICBjb25zdCBjbG9zaW5nU3RvY2tFbnRyeSA9IGF3YWl0IGRiLnByb2R1Y3RIaXN0b3J5LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogeyBsdGU6IGVuZCB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xvc2luZ1N0b2NrID0gY2xvc2luZ1N0b2NrRW50cnkgPyBjbG9zaW5nU3RvY2tFbnRyeS5uZXdRdWFudGl0eSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdTdG9jayA9IGNsb3NpbmdTdG9jayAtIChzdG9ja0luICsgYWRqdXN0bWVudHNJbiAtIGl0ZW1zU29sZCAtIGFkanVzdG1lbnRzT3V0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaXRlbU51bWJlcjogcHJvZHVjdC5za3UgfHwgcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBwcm9kdWN0LmltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgY29zdFByaWNlOiBOdW1iZXIocHJvZHVjdC5jb3N0UHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgc2VsbGluZ1ByaWNlOiBOdW1iZXIocHJvZHVjdC5zZWxsaW5nUHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHByb2R1Y3QuY2F0ZWdvcnk/Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nU3RvY2ssXHJcbiAgICAgICAgICAgICAgICBpdGVtc1NvbGQsXHJcbiAgICAgICAgICAgICAgICBzdG9ja0luLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJPdXQ6IDAsXHJcbiAgICAgICAgICAgICAgICByZXR1cm5JbjogMCxcclxuICAgICAgICAgICAgICAgIHJldHVybk91dDogMCxcclxuICAgICAgICAgICAgICAgIGFkanVzdG1lbnRzSW4sXHJcbiAgICAgICAgICAgICAgICBhZGp1c3RtZW50c091dCxcclxuICAgICAgICAgICAgICAgIGNsb3NpbmdTdG9jayxcclxuICAgICAgICAgICAgICAgIHJldmFsdWF0aW9uOiBjbG9zaW5nU3RvY2sgKiBOdW1iZXIocHJvZHVjdC5jb3N0UHJpY2UpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvcnREYXRhIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBzdG9jayBzdW1tYXJ5IHJlcG9ydDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyVEFzSXNCLHVOQUFBIn0=
}),
"[project]/src/app/actions/data:a3eb7b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateStockHistoryDatesByReferenceAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"7004cbe75e8420ade214cd7ce56b3e6c0723a54a87":"updateStockHistoryDatesByReferenceAction"},"src/app/actions/inventory.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7004cbe75e8420ade214cd7ce56b3e6c0723a54a87", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateStockHistoryDatesByReferenceAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vcHJpc21hL2RiJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIC0tLSBTVE9DSyBISVNUT1JZIC0tLVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0b2NrSGlzdG9yeUFjdGlvbihsb2NhdGlvbklkOiBzdHJpbmcsIHByb2R1Y3RJZD86IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3aGVyZTogYW55ID0geyBsb2NhdGlvbklkIH07XHJcbiAgICAgICAgaWYgKHByb2R1Y3RJZCkgd2hlcmUucHJvZHVjdElkID0gcHJvZHVjdElkO1xyXG5cclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gYXdhaXQgZGIucHJvZHVjdEhpc3RvcnkuZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxpbmdQcmljZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2t1OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdkZXNjJyB9LCB7IGlkOiAnZGVzYycgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogaGlzdG9yeS5tYXAoKGg6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiBoLmlkLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkOiBoLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgIG9sZFF1YW50aXR5OiBoLnByZXZpb3VzUXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBuZXdRdWFudGl0eTogaC5uZXdRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVJlYXNvbjogaC5jaGFuZ2VSZWFzb24sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IGguY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VJZDogaC5yZWZlcmVuY2VJZCxcclxuICAgICAgICAgICAgICAgIHJlY2VpcHROdW1iZXI6IGgucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGgucHJvZHVjdCA/IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBoLnByb2R1Y3QubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb3N0UHJpY2U6IGgucHJvZHVjdC5jb3N0UHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsbGluZ1ByaWNlOiBoLnByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1OdW1iZXI6IGgucHJvZHVjdC5za3VcclxuICAgICAgICAgICAgICAgIH0gOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzdG9jayBoaXN0b3J5OicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0b2NrSGlzdG9yeUFjdGlvbihkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdHgucHJvZHVjdEhpc3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IGRhdGEucHJvZHVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUXVhbnRpdHk6IGRhdGEucHJldmlvdXNRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdRdWFudGl0eTogZGF0YS5uZXdRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VSZWFzb246IGRhdGEuY2hhbmdlUmVhc29uLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUlkOiBkYXRhLnJlZmVyZW5jZUlkIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWlwdE51bWJlcjogZGF0YS5yZWNlaXB0TnVtYmVyIHx8IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBkYXRhLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IHN0b2NrIGFzIHdlbGxcclxuICAgICAgICAgICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGRhdGEucHJvZHVjdElkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHN0b2NrOiBkYXRhLm5ld1F1YW50aXR5IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZW50cnk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgc3RvY2sgaGlzdG9yeTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNhbGN1bGF0ZVN0b2NrQ2hhaW5BY3Rpb24ocHJvZHVjdElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oYXN5bmMgKHR4OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgICAgIHdoZXJlOiB7IHByb2R1Y3RJZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnYXNjJyB9LCB7IGlkOiAnYXNjJyB9XVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHsgZmluYWxRdWFudGl0eTogMCB9O1xyXG5cclxuICAgICAgICAgICAgbGV0IHJ1bm5pbmdRdWFudGl0eSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGlzdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gZW50cnkubmV3UXVhbnRpdHkgLSBlbnRyeS5wcmV2aW91c1F1YW50aXR5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJldiA9IHJ1bm5pbmdRdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05leHQgPSBuZXdQcmV2ICsgY2hhbmdlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5wcmV2aW91c1F1YW50aXR5ICE9PSBuZXdQcmV2IHx8IGVudHJ5Lm5ld1F1YW50aXR5ICE9PSBuZXdOZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlcy5wdXNoKHR4LnByb2R1Y3RIaXN0b3J5LnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlOiB7IGlkOiBlbnRyeS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByZXZpb3VzUXVhbnRpdHk6IG5ld1ByZXYsIG5ld1F1YW50aXR5OiBuZXdOZXh0IH1cclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5uaW5nUXVhbnRpdHkgPSBuZXdOZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodXBkYXRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh1cGRhdGVzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3RcclxuICAgICAgICAgICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHByb2R1Y3RJZCB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBzdG9jazogcnVubmluZ1F1YW50aXR5IH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBmaW5hbFF1YW50aXR5OiBydW5uaW5nUXVhbnRpdHkgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9pbnZlbnRvcnknKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWNhbGN1bGF0aW5nIHN0b2NrIGNoYWluOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVN0b2NrSGlzdG9yeUVudHJpZXNCeVJlZmVyZW5jZUFjdGlvbihyZWZlcmVuY2VJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuJHRyYW5zYWN0aW9uKGFzeW5jICh0eDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCB0eC5wcm9kdWN0SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyByZWZlcmVuY2VJZCwgbG9jYXRpb25JZCB9LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OiB7IHByb2R1Y3RJZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9IFsuLi5uZXcgU2V0KGVudHJpZXMubWFwKChlOiBhbnkpID0+IGUucHJvZHVjdElkIGFzIHN0cmluZykpXTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmRlbGV0ZU1hbnkoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgcmVmZXJlbmNlSWQsIGxvY2F0aW9uSWQgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGNoYWlucyBmb3IgYWZmZWN0ZWQgcHJvZHVjdHNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0SWQgb2YgcHJvZHVjdElkcykge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVjYWxjdWxhdGVTdG9ja0NoYWluSW50ZXJuYWwodHgsIHByb2R1Y3RJZCBhcyBzdHJpbmcsIGxvY2F0aW9uSWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBhZmZlY3RlZFByb2R1Y3RzOiBwcm9kdWN0SWRzLmxlbmd0aCB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeScpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHN0b2NrIGhpc3RvcnkgYnkgcmVmZXJlbmNlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0b2NrSGlzdG9yeURhdGVzQnlSZWZlcmVuY2VBY3Rpb24ocmVmZXJlbmNlSWQ6IHN0cmluZywgbG9jYXRpb25JZDogc3RyaW5nLCBuZXdEYXRlOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIucHJvZHVjdEhpc3RvcnkudXBkYXRlTWFueSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IHJlZmVyZW5jZUlkLCBsb2NhdGlvbklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHsgY3JlYXRlZEF0OiBuZXcgRGF0ZShuZXdEYXRlKSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5Jyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0IH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgc3RvY2sgaGlzdG9yeSBkYXRlczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEludGVybmFsIGhlbHBlciBmb3IgdXNlIHdpdGhpbiB0cmFuc2FjdGlvbnNcclxuYXN5bmMgZnVuY3Rpb24gcmVjYWxjdWxhdGVTdG9ja0NoYWluSW50ZXJuYWwodHg6IGFueSwgcHJvZHVjdElkOiBzdHJpbmcsIGxvY2F0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IGF3YWl0IHR4LnByb2R1Y3RIaXN0b3J5LmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBwcm9kdWN0SWQsIGxvY2F0aW9uSWQgfSxcclxuICAgICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdhc2MnIH0sIHsgaWQ6ICdhc2MnIH1dXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcnVubmluZ1F1YW50aXR5ID0gMDtcclxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGlzdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZSA9IGVudHJ5Lm5ld1F1YW50aXR5IC0gZW50cnkucHJldmlvdXNRdWFudGl0eTtcclxuICAgICAgICBjb25zdCBuZXdQcmV2ID0gcnVubmluZ1F1YW50aXR5O1xyXG4gICAgICAgIGNvbnN0IG5ld05leHQgPSBuZXdQcmV2ICsgY2hhbmdlO1xyXG5cclxuICAgICAgICBpZiAoZW50cnkucHJldmlvdXNRdWFudGl0eSAhPT0gbmV3UHJldiB8fCBlbnRyeS5uZXdRdWFudGl0eSAhPT0gbmV3TmV4dCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0eC5wcm9kdWN0SGlzdG9yeS51cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IGVudHJ5LmlkIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHByZXZpb3VzUXVhbnRpdHk6IG5ld1ByZXYsIG5ld1F1YW50aXR5OiBuZXdOZXh0IH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJ1bm5pbmdRdWFudGl0eSA9IG5ld05leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgdHgucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiBwcm9kdWN0SWQgfSxcclxuICAgICAgICBkYXRhOiB7IHN0b2NrOiBydW5uaW5nUXVhbnRpdHkgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIC0tLSBSRVFVSVNJVElPTlMgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVxdWlzaXRpb25zQWN0aW9uKHVzZXJJZDogc3RyaW5nLCBsb2NhdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRpb25zID0gYXdhaXQgZGIucmVxdWlzaXRpb24uZmluZE1hbnkoe1xyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcmRlckJ5OiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6ICdkZXNjJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlcXVpc2l0aW9ucy5tYXAoKHJlcTogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJlcS5pZCxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogcmVxLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IHJlcS5sb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlzaXRpb25OdW1iZXI6IHJlcS5yZXF1aXNpdGlvbk51bWJlcixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogcmVxLml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgbm90ZXM6IHJlcS5ub3RlcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVxLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogcmVxLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0OiByZXEudXBkYXRlZEF0LnRvSVNPU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZXF1aXNpdGlvbnM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUmVxdWlzaXRpb25BY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVpc2l0aW9uID0gYXdhaXQgZGIucmVxdWlzaXRpb24uY3JlYXRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBkYXRhLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ6IGRhdGEubG9jYXRpb25JZCxcclxuICAgICAgICAgICAgICAgIHJlcXVpc2l0aW9uTnVtYmVyOiBkYXRhLnJlcXVpc2l0aW9uTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgICAgIG5vdGVzOiBkYXRhLm5vdGVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyB8fCAnZHJhZnQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9yZXF1aXNpdGlvbnMnKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXF1aXNpdGlvbiB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHJlcXVpc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJlcXVpc2l0aW9uQWN0aW9uKGlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWlzaXRpb24gPSBhd2FpdCBkYi5yZXF1aXNpdGlvbi51cGRhdGUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBpZCwgdXNlcklkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMsXHJcbiAgICAgICAgICAgICAgICBub3RlczogZGF0YS5ub3RlcyxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3JlcXVpc2l0aW9ucycpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlcXVpc2l0aW9uIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcmVxdWlzaXRpb246JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUmVxdWlzaXRpb25BY3Rpb24oaWQ6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGIucmVxdWlzaXRpb24uZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQsIHVzZXJJZCB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvcmVxdWlzaXRpb25zJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJlcXVpc2l0aW9uOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLS0tIFJFUE9SVFMgLyBBTkFMWVRJQ1MgLS0tXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RvY2tTdW1tYXJ5UmVwb3J0QWN0aW9uKGxvY2F0aW9uSWQ6IHN0cmluZywgc3RhcnREYXRlOiBzdHJpbmcsIGVuZERhdGU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoZW5kRGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIEZldGNoIGFsbCBwcm9kdWN0cyBmb3IgdGhlIGxvY2F0aW9uXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBkYi5wcm9kdWN0LmZpbmRNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgYnJhbmNoSWQ6IGxvY2F0aW9uSWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBjYXRlZ29yeTogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9kdWN0cy5tYXAoYXN5bmMgKHByb2R1Y3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgc2ltcGxpZmllZCB2ZXJzaW9uIG9mIHRoZSBsb2dpYyB0aGF0IHdhcyBsaWtlbHkgaW4gdGhlIFJQQ1xyXG4gICAgICAgICAgICAvLyBJbiBhIHJlYWwgcHJvZHVjdGlvbiBhcHAsIHdlJ2QgdXNlIGNvbXBsZXggU1FMIG9yIGRlZGljYXRlZCBhZ2dyZWdhdGUgdGFibGVzXHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgaGlzdG9yeSBmb3IgdGhpcyBwcm9kdWN0IGluIHRoZSBkYXRlIHJhbmdlXHJcbiAgICAgICAgICAgIGNvbnN0IGhpc3RvcnkgPSBhd2FpdCBkYi5wcm9kdWN0SGlzdG9yeS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBndGU6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsdGU6IGVuZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2FzYycgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtZXRyaWNzIGZyb20gaGlzdG9yeVxyXG4gICAgICAgICAgICBsZXQgaXRlbXNTb2xkID0gMDtcclxuICAgICAgICAgICAgbGV0IHN0b2NrSW4gPSAwO1xyXG4gICAgICAgICAgICBsZXQgYWRqdXN0bWVudHNJbiA9IDA7XHJcbiAgICAgICAgICAgIGxldCBhZGp1c3RtZW50c091dCA9IDA7XHJcblxyXG4gICAgICAgICAgICBoaXN0b3J5LmZvckVhY2goKGg6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0gaC5uZXdRdWFudGl0eSAtIGgucHJldmlvdXNRdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGlmIChoLmNoYW5nZVJlYXNvbiA9PT0gJ1NBTEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNTb2xkICs9IE1hdGguYWJzKGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGguY2hhbmdlUmVhc29uID09PSAnU1RPQ0tfSU4nIHx8IGguY2hhbmdlUmVhc29uID09PSAnUkVTVE9DSycpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9ja0luICs9IGNoYW5nZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnRzSW4gKz0gY2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50c091dCArPSBNYXRoLmFicyhjaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBjbG9zaW5nIHN0b2NrIGF0IGVuZCBkYXRlIChvciBjdXJyZW50IGlmIGFmdGVyIGVuZCBkYXRlKVxyXG4gICAgICAgICAgICBjb25zdCBjbG9zaW5nU3RvY2tFbnRyeSA9IGF3YWl0IGRiLnByb2R1Y3RIaXN0b3J5LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogeyBsdGU6IGVuZCB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6ICdkZXNjJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xvc2luZ1N0b2NrID0gY2xvc2luZ1N0b2NrRW50cnkgPyBjbG9zaW5nU3RvY2tFbnRyeS5uZXdRdWFudGl0eSA6IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdTdG9jayA9IGNsb3NpbmdTdG9jayAtIChzdG9ja0luICsgYWRqdXN0bWVudHNJbiAtIGl0ZW1zU29sZCAtIGFkanVzdG1lbnRzT3V0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogcHJvZHVjdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaXRlbU51bWJlcjogcHJvZHVjdC5za3UgfHwgcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBwcm9kdWN0LmltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgY29zdFByaWNlOiBOdW1iZXIocHJvZHVjdC5jb3N0UHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgc2VsbGluZ1ByaWNlOiBOdW1iZXIocHJvZHVjdC5zZWxsaW5nUHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHByb2R1Y3QuY2F0ZWdvcnk/Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBvcGVuaW5nU3RvY2ssXHJcbiAgICAgICAgICAgICAgICBpdGVtc1NvbGQsXHJcbiAgICAgICAgICAgICAgICBzdG9ja0luLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJPdXQ6IDAsXHJcbiAgICAgICAgICAgICAgICByZXR1cm5JbjogMCxcclxuICAgICAgICAgICAgICAgIHJldHVybk91dDogMCxcclxuICAgICAgICAgICAgICAgIGFkanVzdG1lbnRzSW4sXHJcbiAgICAgICAgICAgICAgICBhZGp1c3RtZW50c091dCxcclxuICAgICAgICAgICAgICAgIGNsb3NpbmdTdG9jayxcclxuICAgICAgICAgICAgICAgIHJldmFsdWF0aW9uOiBjbG9zaW5nU3RvY2sgKiBOdW1iZXIocHJvZHVjdC5jb3N0UHJpY2UpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXBvcnREYXRhIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBzdG9jayBzdW1tYXJ5IHJlcG9ydDonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5VEFvS3NCLHFOQUFBIn0=
}),
"[project]/src/hooks/useStockHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStockHistory",
    ()=>useStockHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$584725__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:584725 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ac4252__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:ac4252 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$50fbe4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:50fbe4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$272456__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:272456 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a3eb7b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:a3eb7b [app-client] (ecmascript) <text/javascript>");
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
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$584725__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getStockHistoryAction"])(currentBusiness.id, productId);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$ac4252__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createStockHistoryAction"])({
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$272456__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteStockHistoryEntriesByReferenceAction"])(referenceId, currentBusiness.id);
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$50fbe4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["recalculateStockChainAction"])(targetProductId, currentBusiness.id);
            if (!result.success) throw new Error(result.error);
            await loadStockHistory();
            return true;
        } catch (error) {
            console.error('Error recalculating stock chain:', error);
            return false;
        }
    };
    const updateStockHistoryDatesBySaleId = async (saleId, newDate)=>{
        try {
            if (!currentBusiness) return false;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$a3eb7b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateStockHistoryDatesByReferenceAction"])(saleId, currentBusiness.id, newDate.toISOString());
            if (!result.success) throw new Error(result.error);
            await loadStockHistory();
            return true;
        } catch (error) {
            console.error('Error updating stock history dates:', error);
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
        updateStockHistoryDatesBySaleId,
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
"[project]/src/pages/StockReconciliationPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$StockReconciliation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inventory/StockReconciliation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$InventoryPageSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/inventory/InventoryPageSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-plus.js [app-client] (ecmascript) <export default as PackagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageMinus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-minus.js [app-client] (ecmascript) <export default as PackageMinus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useStockHistory.ts [app-client] (ecmascript)");
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
const StockReconciliationPage = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const { currentBusiness, isLoading: businessLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { hasPermission, isLoading: profilesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const { repairAllStockChains, previewStockChainRepairs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockHistory"])(user?.id);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dialogProduct, setDialogProduct] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [isBulkReconciling, setIsBulkReconciling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCalculatingPreview, setIsCalculatingPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBulkPreview, setShowBulkPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reconciliationPreviews, setReconciliationPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPreview, setSelectedPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRepairingChains, setIsRepairingChains] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [repairProgress, setRepairProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [repairPreviews, setRepairPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showRepairPreview, setShowRepairPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCalculatingRepairPreview, setIsCalculatingRepairPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load ALL products using chunked pagination
    const { data: allProducts = [], isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'all-products-reconciliation',
            user?.id,
            currentBusiness?.id
        ],
        queryFn: {
            "StockReconciliationPage.useQuery": async ()=>{
                if (!user?.id || !currentBusiness?.id) return [];
                const chunkSize = 1000;
                let allProductsData = [];
                let start = 0;
                let hasMore = true;
                while(hasMore){
                    const { data: chunk, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*').eq('user_id', user.id).eq('location_id', currentBusiness.id).order('created_at', {
                        ascending: false
                    }).order('id', {
                        ascending: false
                    }).range(start, start + chunkSize - 1);
                    if (error) throw error;
                    if (chunk && chunk.length > 0) {
                        allProductsData.push(...chunk);
                        start += chunkSize;
                        hasMore = chunk.length === chunkSize;
                    } else {
                        hasMore = false;
                    }
                }
                return allProductsData.map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapDbProductToProduct"]);
            }
        }["StockReconciliationPage.useQuery"],
        enabled: !!user?.id && !!currentBusiness?.id,
        staleTime: 2 * 60_000
    });
    // Client-side filtering
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StockReconciliationPage.useMemo[filteredProducts]": ()=>{
            if (!search.trim()) return [];
            const searchLower = search.toLowerCase();
            return allProducts.filter({
                "StockReconciliationPage.useMemo[filteredProducts]": (p)=>p.name.toLowerCase().includes(searchLower) || p.itemNumber?.toLowerCase().includes(searchLower) || p.category?.toLowerCase().includes(searchLower) || p.supplier?.toLowerCase().includes(searchLower) || p.description?.toLowerCase().includes(searchLower)
            }["StockReconciliationPage.useMemo[filteredProducts]"]);
        }
    }["StockReconciliationPage.useMemo[filteredProducts]"], [
        allProducts,
        search
    ]);
    const handleRepairAllChains = async ()=>{
        if (!user?.id || !currentBusiness?.id) return;
        setIsRepairingChains(true);
        setRepairProgress(null);
        try {
            const { repaired, failed } = await repairAllStockChains((current, total)=>{
                setRepairProgress({
                    current,
                    total
                });
            });
            if (failed === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Stock chains repaired successfully for ${repaired} product(s).`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning(`Repaired ${repaired} product(s). ${failed} failed — check the console for details.`);
            }
        } catch (error) {
            console.error('Error repairing stock chains:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to repair stock chains.');
        } finally{
            setIsRepairingChains(false);
            setRepairProgress(null);
            setShowRepairPreview(false);
        }
    };
    const handleRepairPreview = async ()=>{
        if (!user?.id || !currentBusiness?.id) return;
        setIsCalculatingRepairPreview(true);
        setRepairProgress(null);
        try {
            const broken = await previewStockChainRepairs((current, total)=>{
                setRepairProgress({
                    current,
                    total
                });
            });
            setRepairPreviews(broken);
            if (broken.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("No broken stock chains found! Everything is consistent.");
            } else {
                setShowRepairPreview(true);
            }
        } catch (error) {
            console.error('Error previewing stock repairs:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to preview stock repairs.');
        } finally{
            setIsCalculatingRepairPreview(false);
            setRepairProgress(null);
        }
    };
    const calculateBulkPreview = async ()=>{
        if (!user?.id || !currentBusiness?.id) return;
        setIsCalculatingPreview(true);
        const previews = [];
        try {
            for (const product of allProducts){
                const preview = await calculateProductReconciliation(product);
                if (preview && Math.abs(preview.discrepancy) > 0.01) {
                    previews.push(preview);
                }
            }
            setReconciliationPreviews(previews);
            setShowBulkPreview(true);
        } catch (error) {
            console.error('Error calculating preview:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to calculate reconciliation preview.');
        } finally{
            setIsCalculatingPreview(false);
        }
    };
    const isValidUUID = (str)=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
    const calculateProductReconciliation = async (product)=>{
        if (!user?.id || !currentBusiness?.id) return null;
        console.group(`Reconciliation Debug: ${product.name} (${product.item_number})`);
        console.log('Product Identifiers:', {
            id: product.id,
            itemNumber: product.item_number
        });
        try {
            const chunkSize = 1000;
            // Support both UUID and itemNumber as product identifiers
            // BUT only use valid UUIDs for the stock_history product_id column
            const historyProductIds = [
                product.id,
                product.itemNumber
            ].filter((id)=>!!id && isValidUUID(id));
            // 1. Get opening stock from the very first entry
            const { data: firstEntry } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('new_quantity, created_at, change_reason').in('product_id', historyProductIds).eq('location_id', currentBusiness.id).order('created_at', {
                ascending: true
            }).order('id', {
                ascending: true
            }).limit(1).maybeSingle();
            const openingStock = firstEntry ? Number(firstEntry.new_quantity) || 0 : 0;
            const openingDate = firstEntry ? new Date(firstEntry.created_at) : null;
            console.log('Opening State:', {
                openingStock,
                openingDate: openingDate?.toISOString(),
                reason: firstEntry?.change_reason
            });
            // 2. Load all sales for this product to cross-verify
            let allSalesData = [];
            let salesStart = 0;
            let hasSalesMore = true;
            while(hasSalesMore){
                const { data: salesChunk } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales').select('items, date, receipt_number').eq('location_id', currentBusiness.id).range(salesStart, salesStart + chunkSize - 1).order('date', {
                    ascending: true
                });
                if (salesChunk && salesChunk.length > 0) {
                    allSalesData.push(...salesChunk);
                    salesStart += chunkSize;
                    hasSalesMore = salesChunk.length === chunkSize;
                } else {
                    hasSalesMore = false;
                }
            }
            console.log(`Total Sales Records found: ${allSalesData.length}`);
            // 3. Load ALL stock history movements in one go
            let allHistory = [];
            let historyStart = 0;
            let hasHistoryMore = true;
            while(hasHistoryMore){
                let query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').select('*').eq('location_id', currentBusiness.id).order('created_at', {
                    ascending: true
                }).order('id', {
                    ascending: true
                }).range(historyStart, historyStart + chunkSize - 1);
                // Support both UUID and itemNumber as product identifiers
                // BUT only use valid UUIDs for the stock_history product_id column
                const ids = [
                    product.id,
                    product.itemNumber
                ].filter((id)=>!!id && isValidUUID(id));
                query = query.in('product_id', ids);
                const { data: chunk, error } = await query;
                if (error) throw error;
                if (chunk && chunk.length > 0) {
                    allHistory.push(...chunk);
                    historyStart += chunkSize;
                    hasHistoryMore = chunk.length === chunkSize;
                } else {
                    hasHistoryMore = false;
                }
            }
            console.log(`Total History Records found: ${allHistory.length}`);
            const movements = allHistory.slice(1);
            // 4. Build daily transactions map
            const dailyTransactions = new Map();
            let excludedSalesCount = 0;
            let excludedSalesQty = 0;
            let trackedSalesQty = 0;
            // Process Sales table source
            allSalesData.forEach((sale)=>{
                const saleDate = new Date(sale.date);
                const items = Array.isArray(sale.items) ? sale.items : [];
                const soldQty = items.filter((item)=>item.productId === product.id || product.itemNumber && item.productId === product.itemNumber).reduce((sum, item)=>sum + (Number(item.quantity) || 0), 0);
                if (openingDate && saleDate < openingDate) {
                    if (soldQty > 0) {
                        excludedSalesCount++;
                        excludedSalesQty += soldQty;
                    }
                    return;
                }
                const dateStr = saleDate.toISOString().split('T')[0];
                if (soldQty > 0) {
                    trackedSalesQty += soldQty;
                    const day = dailyTransactions.get(dateStr) || {
                        itemsSold: 0,
                        stockAdded: 0,
                        transferOut: 0,
                        returnIn: 0,
                        returnOut: 0,
                        adjustments: 0
                    };
                    day.itemsSold += soldQty;
                    dailyTransactions.set(dateStr, day);
                }
            });
            console.log('Sales Processing Done:', {
                trackedSalesQty,
                excludedSalesQty,
                excludedSalesCount
            });
            let histAdded = 0, histTrans = 0, histRetIn = 0, histRetOut = 0, histAdj = 0;
            // Process History table source
            movements.forEach((entry)=>{
                const date = new Date(entry.created_at).toISOString().split('T')[0];
                const delta = Number(entry.new_quantity) - Number(entry.previous_quantity);
                const reason = (entry.change_reason || '').toLowerCase();
                const isSaleRelated = reason.includes('sale') || reason.includes('receipt');
                const isReturn = reason.includes('return');
                const isPurchase = reason.includes('purchase') || reason.includes('addition') || reason.includes('initial');
                if (isSaleRelated && !isReturn && !isPurchase) {
                    return;
                }
                const day = dailyTransactions.get(date) || {
                    itemsSold: 0,
                    stockAdded: 0,
                    transferOut: 0,
                    returnIn: 0,
                    returnOut: 0,
                    adjustments: 0
                };
                if (reason.includes('purchase') || reason.includes('addition') || reason.includes('initial')) {
                    day.stockAdded += delta;
                    histAdded += delta;
                } else if (reason.includes('transfer out')) {
                    day.transferOut += Math.abs(delta);
                    histTrans += Math.abs(delta);
                } else if (reason.includes('customer return') || reason.includes('return') && delta > 0) {
                    day.returnIn += delta;
                    histRetIn += delta;
                } else if (reason.includes('return to supplier') || reason.includes('return') && delta < 0) {
                    day.returnOut += Math.abs(delta);
                    histRetOut += Math.abs(delta);
                } else {
                    day.adjustments += delta;
                    histAdj += delta;
                    console.log(`- Adjustment Record: [${entry.change_reason}] Change: ${delta > 0 ? '+' : ''}${delta}`);
                }
                dailyTransactions.set(date, day);
            });
            console.log('History Processing Done:', {
                histAdded,
                histTrans,
                histRetIn,
                histRetOut,
                histAdj
            });
            // 5. Calculate daily breakdown and final balance
            const sortedDates = Array.from(dailyTransactions.keys()).sort();
            const dailyBreakdown = [];
            let runningStock = openingStock;
            sortedDates.forEach((date)=>{
                const day = dailyTransactions.get(date);
                const startingStock = runningStock;
                const endingStock = startingStock - day.itemsSold + day.stockAdded - day.transferOut + day.returnIn - day.returnOut + day.adjustments;
                dailyBreakdown.push({
                    date,
                    startingStock,
                    itemsSold: day.itemsSold,
                    stockAdded: day.stockAdded,
                    transferOut: day.transferOut,
                    returnIn: day.returnIn,
                    returnOut: day.returnOut,
                    adjustments: day.adjustments,
                    endingStock
                });
                runningStock = endingStock;
            });
            const calculatedStock = runningStock;
            const currentStock = Number(product.quantity) || 0;
            const discrepancy = currentStock - calculatedStock;
            console.log('Final Totals:', {
                openingStock,
                calculatedStock,
                currentStock,
                discrepancy
            });
            console.groupEnd();
            return {
                product,
                currentStock,
                calculatedStock,
                discrepancy,
                openingStock,
                itemsSold: dailyBreakdown.reduce((sum, d)=>sum + d.itemsSold, 0),
                stockAdded: dailyBreakdown.reduce((sum, d)=>sum + d.stockAdded, 0),
                transferOut: dailyBreakdown.reduce((sum, d)=>sum + d.transferOut, 0),
                returnIn: dailyBreakdown.reduce((sum, d)=>sum + d.returnIn, 0),
                returnOut: dailyBreakdown.reduce((sum, d)=>sum + d.returnOut, 0),
                adjustments: dailyBreakdown.reduce((sum, d)=>sum + d.adjustments, 0),
                excludedSalesCount,
                excludedSalesQty,
                openingDate,
                dailyBreakdown
            };
        } catch (error) {
            console.error(`Error calculating reconciliation for ${product.name}:`, error);
            console.groupEnd();
            return null;
        }
    };
    const handleBulkReconciliation = async ()=>{
        if (!user?.id || !currentBusiness?.id || reconciliationPreviews.length === 0) return;
        setIsBulkReconciling(true);
        try {
            let successCount = 0;
            let errorCount = 0;
            for (const preview of reconciliationPreviews){
                try {
                    // Update product quantity
                    const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').update({
                        quantity: preview.calculatedStock
                    }).eq('id', preview.product.id).eq('user_id', user.id);
                    if (updateError) throw updateError;
                    // Create stock history entry
                    const { error: historyError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('stock_history').insert({
                        product_id: preview.product.id,
                        user_id: user.id,
                        location_id: currentBusiness.id,
                        previous_quantity: preview.currentStock,
                        new_quantity: preview.calculatedStock,
                        change_reason: 'Bulk Stock Reconciliation',
                        reference_id: null,
                        created_at: new Date().toISOString()
                    });
                    if (historyError) throw historyError;
                    successCount++;
                } catch (error) {
                    errorCount++;
                    console.error(`Failed to reconcile ${preview.product.name}:`, error);
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Bulk reconciliation complete! Updated ${successCount} product(s).`);
            if (errorCount > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`${errorCount} product(s) failed.`);
            }
            setShowBulkPreview(false);
            setReconciliationPreviews([]);
        } catch (error) {
            console.error('Bulk reconciliation error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Failed to complete bulk reconciliation.');
        } finally{
            setIsBulkReconciling(false);
        }
    };
    if (businessLoading || profilesLoading || !currentBusiness) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$InventoryPageSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
            lineNumber: 478,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!hasPermission('inventory', 'stock_adjustment')) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                    variant: "destructive",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 485,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                            children: "Access Denied"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 486,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            children: "You do not have permission to access stock reconciliation. Please contact your administrator if you believe this is an error."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 487,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                    lineNumber: 484,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>navigate('/inventory'),
                        variant: "outline",
                        children: "Back to Inventory"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                        lineNumber: 493,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                    lineNumber: 492,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
            lineNumber: 483,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-2 md:p-6 space-y-4 md:space-y-6 max-w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl md:text-2xl lg:text-3xl font-bold text-sales-dark",
                                children: "Stock Reconciliation"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                lineNumber: 505,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm md:text-base text-muted-foreground",
                                children: "Select a product, preview the correction, then apply."
                            }, void 0, false, {
                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                        lineNumber: 504,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleRepairPreview,
                                disabled: isRepairingChains || isCalculatingRepairPreview || isLoading || allProducts.length === 0,
                                variant: "outline",
                                size: "lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                        lineNumber: 515,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isCalculatingRepairPreview ? 'Scanning...' : 'Preview Repairs'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleRepairAllChains,
                                disabled: isRepairingChains || isCalculatingRepairPreview || isLoading || allProducts.length === 0,
                                variant: "secondary",
                                size: "lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isRepairingChains ? 'Repairing...' : 'Quick Repair All'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                lineNumber: 518,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: calculateBulkPreview,
                                disabled: isCalculatingPreview || isLoading || allProducts.length === 0,
                                size: "lg",
                                children: isCalculatingPreview ? 'Calculating...' : 'Reconcile All Products'
                            }, void 0, false, {
                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                lineNumber: 527,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            (isRepairingChains || isCalculatingRepairPreview) && repairProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-4 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-sm text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isRepairingChains ? 'Repairing stock chains…' : 'Scanning for broken chains…'
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        repairProgress.current,
                                        " / ",
                                        repairProgress.total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 541,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                            value: Math.round(repairProgress.current / repairProgress.total * 100)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 545,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                    lineNumber: 540,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                lineNumber: 539,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-base",
                            children: "Search Product"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 552,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Search by name, item number, category, or supplier",
                                value: search,
                                onChange: (e)=>setSearch(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                lineNumber: 555,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                        className: "max-h-96",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "divide-y",
                                            children: [
                                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "p-3 text-sm text-muted-foreground",
                                                    children: "Loading all products..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                !isLoading && filteredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "p-3 text-sm text-muted-foreground",
                                                    children: "No matching products found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                (!isLoading && filteredProducts).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "p-3 hover:bg-muted/40 cursor-pointer",
                                                        onClick: ()=>setDialogProduct(p),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: p.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: [
                                                                    p.itemNumber ? `Item: ${p.itemNumber}` : '—',
                                                                    " • Qty: ",
                                                                    p.quantity,
                                                                    " • Cat: ",
                                                                    p.category || '—'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, p.id, true, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                        lineNumber: 562,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !isLoading && filteredProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 border-t text-xs text-muted-foreground",
                                        children: [
                                            "Showing ",
                                            filteredProducts.length,
                                            " of ",
                                            allProducts.length,
                                            " total products"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                        lineNumber: 581,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                lineNumber: 561,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                        lineNumber: 554,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            dialogProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$inventory$2f$StockReconciliation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                product: dialogProduct,
                onClose: ()=>setDialogProduct(null),
                onReconciled: ()=>setDialogProduct(null)
            }, void 0, false, {
                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                lineNumber: 591,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showBulkPreview,
                onOpenChange: setShowBulkPreview,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-6xl max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "h-5 w-5 text-orange-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 603,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Bulk Reconciliation Preview"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 602,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: [
                                        reconciliationPreviews.length,
                                        " product(s) with discrepancies found. Review and apply corrections."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 606,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 601,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "pb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-sm",
                                                        children: "Products to Update"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold",
                                                        children: reconciliationPreviews.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 614,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "pb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-sm",
                                                        children: "Total Adjustment"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold",
                                                        children: [
                                                            reconciliationPreviews.reduce((sum, p)=>sum + Math.abs(p.discrepancy), 0).toFixed(2),
                                                            " units"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 622,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 613,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-base",
                                                children: "Products with Discrepancies"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                lineNumber: 637,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 636,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                                className: "h-[400px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: reconciliationPreviews.map((preview)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                            className: "p-3 cursor-pointer hover:bg-muted/50",
                                                            onClick: ()=>setSelectedPreview(preview),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-semibold",
                                                                                children: preview.product.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                lineNumber: 650,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: preview.product.itemNumber && `Item: ${preview.product.itemNumber}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                lineNumber: 651,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                        lineNumber: 649,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-muted-foreground",
                                                                                        children: "Current:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                        lineNumber: 657,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    " ",
                                                                                    preview.currentStock.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                lineNumber: 656,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-sm",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-muted-foreground",
                                                                                        children: "Calculated:"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                        lineNumber: 660,
                                                                                        columnNumber: 31
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    " ",
                                                                                    preview.calculatedStock.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                lineNumber: 659,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: preview.discrepancy > 0 ? 'default' : 'destructive',
                                                                                className: "mt-1",
                                                                                children: [
                                                                                    preview.discrepancy > 0 ? '+' : '',
                                                                                    preview.discrepancy.toFixed(2)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                lineNumber: 662,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                        lineNumber: 655,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                lineNumber: 648,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, preview.product.id, false, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 643,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                lineNumber: 640,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 639,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 635,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 611,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setShowBulkPreview(false),
                                    disabled: isBulkReconciling,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 676,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleBulkReconciliation,
                                    disabled: isBulkReconciling,
                                    children: isBulkReconciling ? 'Applying...' : `Apply Reconciliation (${reconciliationPreviews.length} products)`
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 679,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 675,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                    lineNumber: 600,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                lineNumber: 599,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!selectedPreview,
                onOpenChange: ()=>setSelectedPreview(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-4xl max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: selectedPreview.product.name
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 691,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Detailed reconciliation breakdown"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 692,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 690,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "pb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-sm",
                                                        children: "Current Stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold",
                                                        children: selectedPreview.currentStock.toFixed(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 698,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    className: "pb-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-sm",
                                                        children: "Calculated Stock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold",
                                                        children: selectedPreview.calculatedStock.toFixed(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 706,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 697,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-base",
                                                children: "Stock Calculation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                lineNumber: 719,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 718,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Opening Stock"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 723,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: selectedPreview.openingStock.toFixed(2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 724,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 722,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-red-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                    lineNumber: 728,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Items Sold (Since ",
                                                                selectedPreview.openingDate ? format(selectedPreview.openingDate, 'MMM d, yyyy') : 'Start',
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 727,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                "-",
                                                                selectedPreview.itemsSold.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 726,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                selectedPreview.excludedSalesQty > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-muted-foreground italic bg-slate-50 px-2 py-1 rounded text-[11px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Note: ",
                                                            selectedPreview.excludedSalesQty.toFixed(2),
                                                            " units sold before tracking began were ignored."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-emerald-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Stock Added"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                "+",
                                                                selectedPreview.stockAdded.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-orange-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageMinus$3e$__["PackageMinus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Transfer Out"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 744,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                "-",
                                                                selectedPreview.transferOut.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 747,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-blue-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                    lineNumber: 751,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Return In"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                "+",
                                                                selectedPreview.returnIn.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 749,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-purple-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageMinus$3e$__["PackageMinus"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                    lineNumber: 757,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Return Out"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                "-",
                                                                selectedPreview.returnOut.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 759,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 755,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                selectedPreview.adjustments !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex justify-between ${selectedPreview.adjustments > 0 ? 'text-emerald-600' : 'text-red-600'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Adjustments"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 763,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                selectedPreview.adjustments > 0 ? '+' : '',
                                                                selectedPreview.adjustments.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 766,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t pt-3 flex justify-between font-semibold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Calculated Closing Stock"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: selectedPreview.calculatedStock.toFixed(2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 773,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `border-t pt-3 flex justify-between font-semibold ${selectedPreview.discrepancy > 0 ? 'text-green-600' : 'text-red-600'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Discrepancy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 776,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: selectedPreview.discrepancy > 0 ? 'default' : 'destructive',
                                                            children: [
                                                                selectedPreview.discrepancy > 0 ? '+' : '',
                                                                selectedPreview.discrepancy.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 721,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 717,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-base",
                                                children: "Daily Breakdown"
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                lineNumber: 787,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 786,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                                className: "h-[300px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: selectedPreview.dailyBreakdown.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center text-muted-foreground py-8",
                                                        children: "No transactions found"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)) : selectedPreview.dailyBreakdown.map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                            className: "p-3 bg-slate-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-sm mb-2",
                                                                    children: new Date(day.date).toLocaleDateString('en-US', {
                                                                        weekday: 'short',
                                                                        year: 'numeric',
                                                                        month: 'short',
                                                                        day: 'numeric'
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                    lineNumber: 797,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-muted-foreground",
                                                                                    children: "Starting:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 802,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: day.startingStock.toFixed(2)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 803,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 801,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        day.itemsSold > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between text-red-600",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Sold:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 807,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: [
                                                                                        "-",
                                                                                        day.itemsSold.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 808,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 806,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        day.stockAdded > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between text-emerald-600",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Added:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 813,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: [
                                                                                        "+",
                                                                                        day.stockAdded.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 814,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 812,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        day.transferOut > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between text-orange-600",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Transfer Out:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 819,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: [
                                                                                        "-",
                                                                                        day.transferOut.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 820,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 818,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        day.adjustments !== 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `flex justify-between ${day.adjustments > 0 ? 'text-emerald-600' : 'text-red-600'}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Adjustments:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 825,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: [
                                                                                        day.adjustments > 0 ? '+' : '',
                                                                                        day.adjustments.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 826,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 824,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        day.returnIn > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between text-blue-600",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Return In:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 833,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: [
                                                                                        "+",
                                                                                        day.returnIn.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 834,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 832,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        day.returnOut > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between text-purple-600",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Return Out:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 839,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: [
                                                                                        "-",
                                                                                        day.returnOut.toFixed(2)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 840,
                                                                                    columnNumber: 35
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 838,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between pt-1 border-t",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-semibold",
                                                                                    children: "Ending:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 844,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-bold",
                                                                                    children: day.endingStock.toFixed(2)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 845,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 843,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                    lineNumber: 800,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 796,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                lineNumber: 790,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 789,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 785,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 695,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setSelectedPreview(null),
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                lineNumber: 858,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 857,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                    lineNumber: 689,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                lineNumber: 688,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showRepairPreview,
                onOpenChange: setShowRepairPreview,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-4xl max-h-[90vh] flex flex-col p-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            className: "p-6 pb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                            className: "h-5 w-5 text-sales-dark"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                            lineNumber: 867,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Stock Chain Repair Preview"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 866,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "The following products have broken stock history chains. Committing repairs will fix the previous/new quantity sequences without deleting data."
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 870,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 865,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "flex-1 px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-4 space-y-6",
                                children: repairPreviews.map((preview)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-slate-200 rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-50 px-4 py-3 flex justify-between items-center border-b border-slate-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-sales-dark",
                                                        children: preview.productName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 880,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "outline",
                                                        className: "text-amber-600 border-amber-200 bg-amber-50",
                                                        children: [
                                                            preview.brokenEntries.length,
                                                            " entries broken"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 881,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                lineNumber: 879,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-white overflow-x-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "text-left text-muted-foreground border-b border-slate-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "pb-2 font-medium",
                                                                        children: "Date"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                        lineNumber: 889,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "pb-2 font-medium",
                                                                        children: "Reason"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                        lineNumber: 890,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "pb-2 font-medium",
                                                                        children: "Current Sequence"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                        lineNumber: 891,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "pb-2 font-medium",
                                                                        children: "Fixed Sequence"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                        lineNumber: 892,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                lineNumber: 888,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 887,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: preview.brokenEntries.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "border-b border-slate-50 last:border-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-2 text-muted-foreground whitespace-nowrap",
                                                                            children: new Date(entry.createdAt).toLocaleDateString()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 898,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-2 italic max-w-xs truncate",
                                                                            children: entry.changeReason
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 901,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-2 font-mono text-xs",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500",
                                                                                    children: entry.currentPrevQty
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 903,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " → ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500",
                                                                                    children: entry.currentNewQty
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 903,
                                                                                    columnNumber: 94
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 902,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-2 font-mono text-xs",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600",
                                                                                    children: entry.fixedPrevQty
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 906,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                " → ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-600",
                                                                                    children: entry.fixedNewQty
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                                    lineNumber: 906,
                                                                                    columnNumber: 94
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                            lineNumber: 905,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                    lineNumber: 897,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                lineNumber: 885,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-50 px-4 py-2 text-xs flex justify-between text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Final stock will correct from ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: preview.currentProductQty
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                lineNumber: 914,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            " to ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: preview.finalFixedQty
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                                lineNumber: 914,
                                                                columnNumber: 95
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 914,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            preview.totalEntries,
                                                            " total history rows"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                        lineNumber: 915,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                                lineNumber: 913,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, preview.productId, true, {
                                        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                        lineNumber: 878,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                lineNumber: 876,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 875,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "p-6 pt-2 bg-slate-50 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setShowRepairPreview(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 923,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleRepairAllChains,
                                    disabled: isRepairingChains,
                                    children: isRepairingChains ? 'Committing Reforms...' : `Repair All ${repairPreviews.length} Products`
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                                    lineNumber: 926,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                            lineNumber: 922,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                    lineNumber: 864,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/StockReconciliationPage.tsx",
                lineNumber: 863,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/StockReconciliationPage.tsx",
        lineNumber: 502,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StockReconciliationPage, "mswPoFzxnw8jG7zeNrvcU+uFrfY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useStockHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStockHistory"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = StockReconciliationPage;
const __TURBOPACK__default__export__ = StockReconciliationPage;
var _c;
__turbopack_context__.k.register(_c, "StockReconciliationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_939d4dad._.js.map