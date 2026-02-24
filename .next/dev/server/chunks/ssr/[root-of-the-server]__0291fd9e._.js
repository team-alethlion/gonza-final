module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotenv$2f$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dotenv/config.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const connectionString = process.env.DATABASE_URL;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString
});
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaPg"](pool);
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
// Force re-initialization if new models like 'branch' or 'productHistory' are missing from the cached instance
const isStale = globalForPrisma.prisma && (!('branch' in globalForPrisma.prisma) || !('productHistory' in globalForPrisma.prisma));
const db = globalForPrisma.prisma && !isStale ? globalForPrisma.prisma : new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    adapter,
    log: [
        'error',
        'warn'
    ]
});
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = db;
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00aa8616b1e6ce510bd5df30bc84289180790af450":"signOutAction","40f21a04e6586927430257bf00ea5ca3c45eca2b7d":"signUpAction","6036f1f99a1b3d974e4d189690f94033b414d17a5b":"resetPasswordAction","60b6dc3852b559049fe1f9789fecf76233156c843c":"signInAction"},"",""] */ __turbopack_context__.s([
    "resetPasswordAction",
    ()=>resetPasswordAction,
    "signInAction",
    ()=>signInAction,
    "signOutAction",
    ()=>signOutAction,
    "signUpAction",
    ()=>signUpAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function signUpAction(data) {
    try {
        const { email, password, name } = data;
        // Check if user already exists
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.findUnique({
            where: {
                email
            }
        });
        if (existingUser) {
            return {
                success: false,
                error: "User already exists"
            };
        }
        const hashedPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hash"])(password, 10);
        // Find or create a default role (assuming "Admin" for the first user or similar)
        let role = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].role.findFirst({
            where: {
                name: "Admin"
            }
        });
        if (!role) {
            role = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].role.create({
                data: {
                    name: "Admin",
                    description: "Default Admin Role"
                }
            });
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                roleId: role.id
            }
        });
        return {
            success: true,
            user: {
                id: user.id,
                email: user.email
            }
        };
    } catch (error) {
        console.error('Error in signUpAction:', error);
        return {
            success: false,
            error: error.message || 'Failed to sign up'
        };
    }
}
async function signInAction(email, password) {
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.findUnique({
            where: {
                email
            },
            include: {
                role: true
            }
        });
        if (!user || !user.password) {
            return {
                success: false,
                error: "Invalid email or password"
            };
        }
        const isPasswordValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compare"])(password, user.password);
        if (!isPasswordValid) {
            return {
                success: false,
                error: "Invalid email or password"
            };
        }
        return {
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role?.name
            }
        };
    } catch (error) {
        console.error('Error in signInAction:', error);
        return {
            success: false,
            error: error.message || 'Failed to sign in'
        };
    }
}
async function resetPasswordAction(newPassword, resetToken) {
    try {
        if (!resetToken) {
            return {
                success: false,
                error: "Reset token is missing or invalid"
            };
        }
        // Ideally here you'd verify the resetToken against a secure token store 
        // For the sake of this migration, we are bypassing token verification logic 
        // to focus on Prisma replacement for Supabase. This logic MUST be updated.
        const userId = "extract-from-token";
        // Hash the new password before storing it
        const hashedPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hash"])(newPassword, 10);
        // Update the password in database
        // await db.user.update({
        //     where: { id: userId },
        //     data: {
        //         password: hashedPassword // Assuming you add a password field to the User model
        //     }
        // });
        // Note: For actual proper authentication you'd integrate this closely with NextAuth
        // and its reset password flow (which usually involves sending a new verification token 
        // and updating credentials).
        return {
            success: true
        };
    } catch (error) {
        console.error('Error resetting password:', error);
        return {
            success: false,
            error: error.message || 'Failed to reset password'
        };
    }
}
async function signOutAction() {
    // With NextAuth, signing out is handled by the `signOut` function from `next-auth/react`
    // on the client side. We don't strictly need a server action for this if we use NextAuth. 
    // Adding a dummy action here to satisfy the `ResetPassword` component's import.
    console.log("signOutAction called. If using NextAuth, call client-side signOut() instead.");
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signUpAction,
    signInAction,
    resetPasswordAction,
    signOutAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signUpAction, "40f21a04e6586927430257bf00ea5ca3c45eca2b7d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signInAction, "60b6dc3852b559049fe1f9789fecf76233156c843c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(resetPasswordAction, "6036f1f99a1b3d974e4d189690f94033b414d17a5b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOutAction, "00aa8616b1e6ce510bd5df30bc84289180790af450", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/business.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40042ed86f5c3c67bbe3a34b4e59c7e9f7036a54f1":"removeBusinessPasswordAction","40b9b369f2de89a30b7e0d238c556a8097e8124448":"getBusinessLocationsAction","600e5e52b25ce768683c897c333052b9b8de86582b":"resetBusinessAction","6047687338d37d1542a65b820f4238160558fb7482":"verifyBusinessPasswordAction","606ff718e40150a307a01cb6af6d3476260edbd5ee":"setBusinessPasswordAction","60870607066785573be74a9960cf5220573a81fdb0":"deleteBusinessAction","60c2a6126733bf689eb827deaad62c6af7a740cdff":"createBusinessAction","70f760ccd96fa67791a24441282558148d0226c736":"updateBusinessAction"},"",""] */ __turbopack_context__.s([
    "createBusinessAction",
    ()=>createBusinessAction,
    "deleteBusinessAction",
    ()=>deleteBusinessAction,
    "getBusinessLocationsAction",
    ()=>getBusinessLocationsAction,
    "removeBusinessPasswordAction",
    ()=>removeBusinessPasswordAction,
    "resetBusinessAction",
    ()=>resetBusinessAction,
    "setBusinessPasswordAction",
    ()=>setBusinessPasswordAction,
    "updateBusinessAction",
    ()=>updateBusinessAction,
    "verifyBusinessPasswordAction",
    ()=>verifyBusinessPasswordAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
// --- BUSINESS PASSWORD ---
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function getBusinessLocationsAction(userId) {
    try {
        const branches = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branch.findMany({
            where: {
                adminId: userId
            },
            orderBy: [
                {
                    createdAt: 'desc'
                },
                {
                    name: 'asc'
                }
            ]
        });
        // The previous context expected an is_default field, but it's not in the model.
        // We will make the first branch the default if is_default is missing.
        return branches.map((b, index)=>({
                id: b.id,
                name: b.name,
                user_id: b.adminId,
                is_default: index === 0,
                created_at: b.createdAt.toISOString(),
                updated_at: b.updatedAt.toISOString(),
                switch_password_hash: b.accessPassword
            }));
    } catch (error) {
        console.error('Error fetching business locations:', error);
        return [];
    }
}
async function createBusinessAction(userId, name) {
    try {
        const branch = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branch.create({
            data: {
                name: name,
                location: 'Main Location',
                adminId: userId
            }
        });
        return {
            success: true,
            data: {
                id: branch.id,
                name: branch.name,
                user_id: branch.adminId,
                is_default: false,
                created_at: branch.createdAt.toISOString(),
                updated_at: branch.updatedAt.toISOString(),
                switch_password_hash: branch.accessPassword
            }
        };
    } catch (error) {
        console.error('Error creating business:', error);
        return {
            success: false,
            error: 'Failed to create business'
        };
    }
}
async function updateBusinessAction(id, userId, name) {
    try {
        const branch = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branch.update({
            where: {
                id: id,
                adminId: userId
            },
            data: {
                name: name
            }
        });
        return {
            success: true,
            data: {
                id: branch.id,
                name: branch.name,
                user_id: branch.adminId,
                is_default: false,
                created_at: branch.createdAt.toISOString(),
                updated_at: branch.updatedAt.toISOString(),
                switch_password_hash: branch.accessPassword
            }
        };
    } catch (error) {
        console.error('Error updating business:', error);
        return {
            success: false,
            error: 'Failed to update business'
        };
    }
}
async function deleteBusinessAction(id, userId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branch.delete({
            where: {
                id: id,
                adminId: userId
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting business:', error);
        return {
            success: false,
            error: 'Failed to delete business'
        };
    }
}
async function resetBusinessAction(id, userId) {
    try {
        // Delete all business data in a transaction (products, sales, stock history, etc.)
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            // Delete stock history first (references products)
            await tx.productHistory.deleteMany({
                where: {
                    locationId: id
                }
            });
            // Delete sale items related data
            await tx.sale.deleteMany({
                where: {
                    branchId: id
                }
            });
            // Delete products
            await tx.product.deleteMany({
                where: {
                    branchId: id
                }
            });
            // Delete customers
            await tx.customer.deleteMany({
                where: {
                    branchId: id
                }
            });
            // Delete activity history
            await tx.activityHistory.deleteMany({
                where: {
                    branchId: id
                }
            });
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('Error resetting business:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
async function setBusinessPasswordAction(businessId, password) {
    try {
        const hash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branch.update({
            where: {
                id: businessId
            },
            data: {
                accessPassword: hash
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('Error setting business password:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function verifyBusinessPasswordAction(businessId, password) {
    try {
        const branch = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branch.findUnique({
            where: {
                id: businessId
            },
            select: {
                accessPassword: true
            }
        });
        if (!branch?.accessPassword) {
            return {
                success: true,
                verified: true
            }; // No password set
        }
        const verified = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, branch.accessPassword);
        return {
            success: true,
            verified
        };
    } catch (error) {
        console.error('Error verifying business password:', error);
        return {
            success: false,
            verified: false,
            error: error.message
        };
    }
}
async function removeBusinessPasswordAction(businessId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branch.update({
            where: {
                id: businessId
            },
            data: {
                accessPassword: null
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('Error removing business password:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBusinessLocationsAction,
    createBusinessAction,
    updateBusinessAction,
    deleteBusinessAction,
    resetBusinessAction,
    setBusinessPasswordAction,
    verifyBusinessPasswordAction,
    removeBusinessPasswordAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessLocationsAction, "40b9b369f2de89a30b7e0d238c556a8097e8124448", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBusinessAction, "60c2a6126733bf689eb827deaad62c6af7a740cdff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBusinessAction, "70f760ccd96fa67791a24441282558148d0226c736", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBusinessAction, "60870607066785573be74a9960cf5220573a81fdb0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(resetBusinessAction, "600e5e52b25ce768683c897c333052b9b8de86582b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setBusinessPasswordAction, "606ff718e40150a307a01cb6af6d3476260edbd5ee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyBusinessPasswordAction, "6047687338d37d1542a65b820f4238160558fb7482", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeBusinessPasswordAction, "40042ed86f5c3c67bbe3a34b4e59c7e9f7036a54f1", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/profiles.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40051aa179bf5d22d421c179a423c08eb51aa784b6":"deleteRoleAction","401b0f1621bb692b1502cfc9167eb112b241fa213b":"getRolesAction","4044f66848049a050e121cf2436741285f5fe57d29":"deleteProfileAction","40d1def1d4b8b420e098a261e791a8443f4e2fa1fe":"getProfilesAction","604f673e62b6216bb802c07c39e431edda48cee74a":"updateProfileAction","60570f3a231bf44a90cdc4aadeaeedb2a72c0d0cff":"createProfileAction","60d8ccdac2f8bf69318d6a979b8819e9981c611ad6":"upsertRoleAction"},"",""] */ __turbopack_context__.s([
    "createProfileAction",
    ()=>createProfileAction,
    "deleteProfileAction",
    ()=>deleteProfileAction,
    "deleteRoleAction",
    ()=>deleteRoleAction,
    "getProfilesAction",
    ()=>getProfilesAction,
    "getRolesAction",
    ()=>getRolesAction,
    "updateProfileAction",
    ()=>updateProfileAction,
    "upsertRoleAction",
    ()=>upsertRoleAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function getProfilesAction(branchId) {
    try {
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.findMany({
            where: {
                branchId: branchId
            },
            include: {
                role: {
                    include: {
                        permissions: true
                    }
                }
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
        // Map Prisma User model to the shape expected by ProfileContext
        return users.map((u)=>({
                id: u.id,
                business_location_id: u.branchId,
                profile_name: u.name,
                email: u.email,
                phone_number: undefined,
                role: u.role?.name || 'staff',
                pin: u.pin || '0000',
                role_id: u.roleId,
                business_role: u.role ? {
                    id: u.role.id,
                    name: u.role.name,
                    permissions: u.role.permissions.reduce((acc, p)=>{
                        const [module, action] = p.name.split(':');
                        if (!acc[module]) acc[module] = [];
                        acc[module].push(action);
                        return acc;
                    }, {})
                } : undefined,
                is_active: u.isActive,
                sms_credits: u.credits,
                created_by: u.agencyId || u.id,
                created_at: u.createdAt.toISOString(),
                updated_at: u.updatedAt.toISOString()
            }));
    } catch (error) {
        console.error('Error fetching profiles:', error);
        return [];
    }
}
async function createProfileAction(branchId, profileData) {
    try {
        // We'll need a default role if not provided
        let roleId = profileData.role_id;
        if (!roleId) {
            const defaultRole = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].role.findFirst({
                where: {
                    name: profileData.role || 'Staff'
                }
            });
            roleId = defaultRole?.id;
        }
        const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.create({
            data: {
                email: profileData.email,
                name: profileData.profile_name,
                pin: profileData.pin,
                isActive: profileData.is_active !== undefined ? profileData.is_active : true,
                roleId: roleId,
                branchId: branchId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profiles');
        return {
            success: true,
            data: newUser
        };
    } catch (error) {
        console.error('Error creating profile:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateProfileAction(userId, updateData) {
    try {
        const data = {};
        if (updateData.profile_name !== undefined) data.name = updateData.profile_name;
        if (updateData.email !== undefined) data.email = updateData.email;
        if (updateData.pin !== undefined) data.pin = updateData.pin;
        if (updateData.is_active !== undefined) data.isActive = updateData.is_active;
        if (updateData.role_id !== undefined) data.roleId = updateData.role_id;
        const updatedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.update({
            where: {
                id: userId
            },
            data: data
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profiles');
        return {
            success: true,
            data: updatedUser
        };
    } catch (error) {
        console.error('Error updating profile:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteProfileAction(userId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.delete({
            where: {
                id: userId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profiles');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting profile:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getRolesAction(branchId) {
    try {
        const roles = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].role.findMany({
            where: {
                OR: [
                    {
                        branchId: branchId
                    },
                    {
                        branchId: null
                    } // System default roles
                ]
            },
            include: {
                permissions: true
            }
        });
        return roles.map((r)=>({
                id: r.id,
                name: r.name,
                description: r.description,
                business_location_id: r.branchId,
                permissions: r.permissions.reduce((acc, p)=>{
                    const [module, action] = p.name.split(':');
                    if (!acc[module]) acc[module] = [];
                    acc[module].push(action);
                    return acc;
                }, {})
            }));
    } catch (error) {
        console.error("Error getRolesAction", error);
        return [];
    }
}
async function upsertRoleAction(branchId, roleData) {
    try {
        // Flatten permissions map to flat array like "sales:view"
        let flatPermissions = [];
        if (roleData.permissions) {
            Object.keys(roleData.permissions).forEach((module)=>{
                roleData.permissions[module].forEach((action)=>{
                    flatPermissions.push(`${module}:${action}`);
                });
            });
        }
        // Make sure all these permissions exist in the DB, create them if not
        const permissionRecords = await Promise.all(flatPermissions.map(async (name)=>{
            let perm = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].permission.findUnique({
                where: {
                    name
                }
            });
            if (!perm) {
                perm = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].permission.create({
                    data: {
                        name
                    }
                });
            }
            return perm;
        }));
        let upserted;
        if (roleData.id) {
            // Update
            upserted = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].role.update({
                where: {
                    id: roleData.id
                },
                data: {
                    name: roleData.name,
                    description: roleData.description,
                    permissions: {
                        set: permissionRecords.map((p)=>({
                                id: p.id
                            }))
                    }
                }
            });
        } else {
            // Create
            upserted = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].role.create({
                data: {
                    name: roleData.name,
                    description: roleData.description,
                    branchId: branchId,
                    permissions: {
                        connect: permissionRecords.map((p)=>({
                                id: p.id
                            }))
                    }
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profiles');
        return {
            success: true,
            data: upserted
        };
    } catch (error) {
        console.error('Error upserting role:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteRoleAction(roleId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].role.delete({
            where: {
                id: roleId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/profiles');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting role:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProfilesAction,
    createProfileAction,
    updateProfileAction,
    deleteProfileAction,
    getRolesAction,
    upsertRoleAction,
    deleteRoleAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProfilesAction, "40d1def1d4b8b420e098a261e791a8443f4e2fa1fe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProfileAction, "60570f3a231bf44a90cdc4aadeaeedb2a72c0d0cff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProfileAction, "604f673e62b6216bb802c07c39e431edda48cee74a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProfileAction, "4044f66848049a050e121cf2436741285f5fe57d29", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRolesAction, "401b0f1621bb692b1502cfc9167eb112b241fa213b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(upsertRoleAction, "60d8ccdac2f8bf69318d6a979b8819e9981c611ad6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteRoleAction, "40051aa179bf5d22d421c179a423c08eb51aa784b6", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/business-settings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40073ee25d9bf200442f2ce2592c46436bdf9f3f2a":"getOnboardingStatusAction","40e10c069514f306d97842d59c289da46a20add653":"getBusinessSettingsAction","40f9eb6b821e58b8ee2ba7cfb4a7c1c22fa7b44891":"getAccountStatusAction","70c5da04836758bcdb8175461942b246221af76885":"upsertBusinessSettingsAction"},"",""] */ __turbopack_context__.s([
    "getAccountStatusAction",
    ()=>getAccountStatusAction,
    "getBusinessSettingsAction",
    ()=>getBusinessSettingsAction,
    "getOnboardingStatusAction",
    ()=>getOnboardingStatusAction,
    "upsertBusinessSettingsAction",
    ()=>upsertBusinessSettingsAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function getBusinessSettingsAction(branchId) {
    try {
        const settings = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branchSettings.findUnique({
            where: {
                branchId
            }
        });
        if (!settings) {
            return null;
        }
        return {
            id: settings.id,
            business_name: settings.businessName,
            business_address: settings.address,
            business_phone: settings.phone,
            business_email: settings.email,
            business_logo: settings.logo,
            currency: settings.currency,
            signature: settings.signatureImage,
            metadata: settings.metadata || {}
        };
    } catch (error) {
        console.error('Error fetching business settings:', error);
        return null;
    }
}
async function upsertBusinessSettingsAction(branchId, userId, updateData) {
    try {
        // Validate user access to branch
        const branch = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branch.findFirst({
            where: {
                id: branchId,
                OR: [
                    {
                        adminId: userId
                    },
                    {
                        users: {
                            some: {
                                id: userId
                            }
                        }
                    }
                ]
            }
        });
        if (!branch) {
            return {
                success: false,
                error: 'Unauthorized to update branch settings'
            };
        }
        const data = {
            businessName: updateData.business_name,
            address: updateData.business_address,
            phone: updateData.business_phone,
            email: updateData.business_email,
            logo: updateData.business_logo,
            currency: updateData.currency,
            signatureImage: updateData.signature,
            metadata: updateData.metadata
        };
        const upserted = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branchSettings.upsert({
            where: {
                branchId: branchId
            },
            update: data,
            create: {
                branchId: branchId,
                ...data
            }
        });
        return {
            success: true,
            data: {
                id: upserted.id,
                business_name: upserted.businessName,
                business_address: upserted.address,
                business_phone: upserted.phone,
                business_email: upserted.email,
                business_logo: upserted.logo,
                currency: upserted.currency,
                signature: upserted.signatureImage,
                metadata: upserted.metadata
            }
        };
    } catch (error) {
        console.error('Error upserting business settings:', error);
        return {
            success: false,
            error: error.message || 'Failed to update settings'
        };
    }
}
async function getAccountStatusAction(userId) {
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.findUnique({
            where: {
                id: userId
            },
            select: {
                isFrozen: true,
                createdAt: true,
                subscriptions: {
                    where: {
                        status: 'active'
                    },
                    orderBy: {
                        endDate: 'desc'
                    },
                    take: 1
                },
                branches: {
                    select: {
                        id: true
                    }
                }
            }
        });
        if (!user) return null;
        const activeSub = user.subscriptions[0];
        const now = new Date();
        const daysRemaining = activeSub ? Math.ceil((activeSub.endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) : 0;
        return {
            is_frozen: user.isFrozen,
            location_limit: 1,
            billing_amount: activeSub ? Number(activeSub.amount) : 50000,
            billing_duration: 'Monthly',
            days_remaining: Math.max(0, daysRemaining),
            next_billing_date: activeSub?.endDate.toISOString() || ''
        };
    } catch (error) {
        console.error('Error fetching account status:', error);
        return {
            is_frozen: false,
            location_limit: 1,
            billing_amount: 50000,
            billing_duration: 'Monthly',
            days_remaining: 30,
            next_billing_date: ''
        };
    }
}
async function getOnboardingStatusAction(locationId) {
    try {
        const settings = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].branchSettings.findUnique({
            where: {
                branchId: locationId
            }
        });
        if (!settings) return null;
        return {
            id: settings.id,
            location_id: settings.branchId,
            business_name: settings.businessName,
            business_address: settings.address,
            business_phone: settings.phone,
            business_email: settings.email,
            business_logo: settings.logo,
            completed: !!settings.businessName && !!settings.phone,
            is_frozen: false // Should come from branch or user status
        };
    } catch (error) {
        console.error('Error fetching onboarding status:', error);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBusinessSettingsAction,
    upsertBusinessSettingsAction,
    getAccountStatusAction,
    getOnboardingStatusAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessSettingsAction, "40e10c069514f306d97842d59c289da46a20add653", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(upsertBusinessSettingsAction, "70c5da04836758bcdb8175461942b246221af76885", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAccountStatusAction, "40f9eb6b821e58b8ee2ba7cfb4a7c1c22fa7b44891", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getOnboardingStatusAction, "40073ee25d9bf200442f2ce2592c46436bdf9f3f2a", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40075324c8acb894ef7059746c65a1e926913a88fd":"getProductsForBarcodeScannerAction","4034881b33ece4d2c3bb0e25c4e68c3715e705d9ab":"deleteProductCategoryAction","404dd4aaa90e099e06b884512b16abb99178afa8f9":"getProductCategoriesAction","4067b4df65a668010fc5081a80928c8b7ed310e2f4":"getProductsAction","40d77c7a950f7558001cd1309943b62b2f2b6ba221":"deleteProductAction","40de351351ef1c777658488fc7d0ea14a31652fa0f":"createProductAction","40f8ff4d50c48e201bfa61facb063e2eae6b253480":"getProductStatsAction","600e96d17baa6280af8fa4338d2f2ba09c3eab361e":"getAllProductsAction","609b8c32a570899b81791858dba0aee579337a2235":"updateProductsBulkAction","60a58b9c853990a56fd3557c84abc33029186281e2":"getFilteredProductsForExportAction","60c24e83b6be5d002fb79164133677812fae403d94":"updateProductCategoryAction","60c39f510779a90656f2e7a2d8e6d5d4b163e1175c":"lookupProductByBarcodeAction","60d199ed6ebdb264ab3569d97f92202a15a4ea5a1e":"updateProductAction","60d2e6658abc20e397c389a36fe10b6b5461fb97b4":"getProductsByIdsAction","60d714856b594297f3f7728ab4c8b1083c1f69633a":"updateSaleCashTransactionAction","70fdf92ee6bb656be2d437fb23f40f7daa4c0c88c1":"createProductCategoryAction"},"",""] */ __turbopack_context__.s([
    "createProductAction",
    ()=>createProductAction,
    "createProductCategoryAction",
    ()=>createProductCategoryAction,
    "deleteProductAction",
    ()=>deleteProductAction,
    "deleteProductCategoryAction",
    ()=>deleteProductCategoryAction,
    "getAllProductsAction",
    ()=>getAllProductsAction,
    "getFilteredProductsForExportAction",
    ()=>getFilteredProductsForExportAction,
    "getProductCategoriesAction",
    ()=>getProductCategoriesAction,
    "getProductStatsAction",
    ()=>getProductStatsAction,
    "getProductsAction",
    ()=>getProductsAction,
    "getProductsByIdsAction",
    ()=>getProductsByIdsAction,
    "getProductsForBarcodeScannerAction",
    ()=>getProductsForBarcodeScannerAction,
    "lookupProductByBarcodeAction",
    ()=>lookupProductByBarcodeAction,
    "updateProductAction",
    ()=>updateProductAction,
    "updateProductCategoryAction",
    ()=>updateProductCategoryAction,
    "updateProductsBulkAction",
    ()=>updateProductsBulkAction,
    "updateSaleCashTransactionAction",
    ()=>updateSaleCashTransactionAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function getProductsAction({ userId, businessId, page, pageSize, search, category, stockStatus }) {
    if (!userId || !businessId) return {
        products: [],
        count: 0
    };
    const skip = (page - 1) * pageSize;
    const take = pageSize;
    let whereClause = {
        userId: userId,
        branchId: businessId
    };
    if (search) {
        whereClause.OR = [
            {
                name: {
                    contains: search,
                    mode: 'insensitive'
                }
            },
            {
                description: {
                    contains: search,
                    mode: 'insensitive'
                }
            },
            {
                sku: {
                    contains: search,
                    mode: 'insensitive'
                }
            },
            {
                barcode: {
                    contains: search,
                    mode: 'insensitive'
                }
            }
        ];
    }
    if (category) {
        whereClause.category = {
            name: category
        };
    }
    if (stockStatus === 'outOfStock') {
        whereClause.stock = 0;
    } else if (stockStatus === 'inStock') {
        whereClause.stock = {
            gt: 0
        };
    } else if (stockStatus === 'lowStock') {
    // Handling lowStock is complex because minStock is compared locally or using direct SQL in Prisma
    // For now, we will handle it with Prisma's raw query or by filtering in memory if necessary
    // Fortunately, since PRISMA 5.0, column comparison still needs raw queries or we can fetch and filter if small
    // Here we'll fetch them all if lowStock is enabled, or add a generated column. 
    // We will do a basic fetch and filter later if needed.
    }
    try {
        const [productsData, totalCount] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
                where: whereClause,
                skip,
                take,
                orderBy: [
                    {
                        createdAt: 'desc'
                    },
                    {
                        id: 'desc'
                    }
                ],
                include: {
                    category: true,
                    supplier: true
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.count({
                where: whereClause
            })
        ]);
        // Map the Prisma product model back to the application's Product type
        let formattedProducts = productsData.map((p)=>{
            // Assuming mapping exists, we will map it
            return {
                id: p.id,
                name: p.name,
                description: p.description || '',
                category: p.category?.name || 'Uncategorized',
                quantity: p.stock,
                costPrice: p.costPrice,
                sellingPrice: p.sellingPrice,
                supplier: p.supplier?.name,
                imageUrl: p.image,
                barcode: p.barcode,
                itemNumber: p.sku || '',
                minimumStock: p.minStock,
                createdAt: p.createdAt
            };
        });
        if (stockStatus === 'lowStock') {
            formattedProducts = formattedProducts.filter((p)=>p.quantity > 0 && p.quantity <= p.minimumStock);
        }
        return {
            products: formattedProducts,
            count: totalCount
        };
    } catch (error) {
        console.error('Error fetching products from DB:', error);
        return {
            products: [],
            count: 0
        };
    }
}
async function getAllProductsAction(userId, businessId) {
    if (!userId || !businessId) return [];
    try {
        const productsData = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
            where: {
                userId: userId,
                branchId: businessId
            },
            orderBy: [
                {
                    createdAt: 'desc'
                },
                {
                    id: 'desc'
                }
            ],
            include: {
                category: true,
                supplier: true
            }
        });
        return productsData.map((p)=>({
                id: p.id,
                name: p.name,
                description: p.description || '',
                category: p.category?.name || 'Uncategorized',
                quantity: Number(p.stock),
                costPrice: Number(p.costPrice),
                sellingPrice: Number(p.sellingPrice),
                supplier: p.supplier?.name,
                imageUrl: p.image,
                barcode: p.barcode,
                itemNumber: p.sku || '',
                minimumStock: Number(p.minStock),
                createdAt: p.createdAt
            }));
    } catch (error) {
        console.error('Error fetching all products from DB:', error);
        return [];
    }
}
async function getProductsByIdsAction(ids, businessId) {
    try {
        const where = {
            id: {
                in: ids
            }
        };
        if (businessId) {
            where.branchId = businessId;
        }
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
            where,
            include: {
                category: true,
                supplier: true
            }
        });
        return products.map((p)=>({
                id: p.id,
                name: p.name,
                description: p.description || '',
                category: p.category?.name || 'Uncategorized',
                quantity: p.stock,
                costPrice: p.costPrice,
                sellingPrice: p.sellingPrice,
                supplier: p.supplier?.name,
                imageUrl: p.image,
                barcode: p.barcode,
                itemNumber: p.sku || '',
                minimumStock: p.minStock,
                createdAt: p.createdAt
            }));
    } catch (error) {
        console.error('Error fetching products by ids:', error);
        return [];
    }
}
async function createProductAction(data) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            // 1. Generate next SKU/itemNumber for this branch
            const lastProduct = await tx.product.findFirst({
                where: {
                    branchId: data.businessId
                },
                orderBy: {
                    sku: 'desc'
                },
                select: {
                    sku: true
                }
            });
            let nextSku = "PROD-0001";
            if (lastProduct && lastProduct.sku) {
                const currentNumber = parseInt(lastProduct.sku.replace("PROD-", "")) || 0;
                nextSku = `PROD-${(currentNumber + 1).toString().padStart(4, '0')}`;
            }
            // 2. Create the product
            const product = await tx.product.create({
                data: {
                    name: data.name,
                    description: data.description,
                    branchId: data.businessId,
                    userId: data.userId,
                    categoryId: data.categoryId || null,
                    supplierId: data.supplierId || null,
                    sku: nextSku,
                    barcode: data.barcode,
                    image: data.imageUrl,
                    costPrice: data.costPrice || 0,
                    sellingPrice: data.sellingPrice || 0,
                    stock: data.quantity || 0,
                    minStock: data.minimumStock || 0,
                    createdAt: data.createdAt ? new Date(data.createdAt) : new Date()
                },
                include: {
                    category: true,
                    supplier: true
                }
            });
            // 3. Create initial stock history if quantity > 0
            if (data.quantity > 0) {
                await tx.productHistory.create({
                    data: {
                        userId: data.userId,
                        productId: product.id,
                        type: 'CREATED',
                        oldStock: 0,
                        newStock: data.quantity,
                        quantityChange: data.quantity,
                        reason: `[${product.name}] | Initial stock`,
                        createdAt: data.createdAt ? new Date(data.createdAt) : new Date()
                    }
                });
            }
            return product;
        });
        return {
            id: result.id,
            name: result.name,
            description: result.description || '',
            category: result.category?.name || 'Uncategorized',
            quantity: result.stock,
            costPrice: result.costPrice,
            sellingPrice: result.sellingPrice,
            supplier: result.supplier?.name,
            imageUrl: result.image,
            barcode: result.barcode,
            itemNumber: result.sku || '',
            minimumStock: result.minStock,
            createdAt: result.createdAt
        };
    } catch (error) {
        console.error('Error creating product:', error);
        return null;
    }
}
async function updateProductAction(id, updates) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            // 1. Get current product state
            const current = await tx.product.findUnique({
                where: {
                    id
                },
                select: {
                    stock: true,
                    name: true
                }
            });
            if (!current) throw new Error("Product not found");
            // 2. Perform update
            const updated = await tx.product.update({
                where: {
                    id
                },
                data: {
                    name: updates.name,
                    description: updates.description,
                    categoryId: updates.categoryId !== undefined ? updates.categoryId : undefined,
                    supplierId: updates.supplierId !== undefined ? updates.supplierId : undefined,
                    sku: updates.itemNumber || updates.sku,
                    barcode: updates.barcode,
                    image: updates.imageUrl,
                    costPrice: updates.costPrice,
                    sellingPrice: updates.sellingPrice,
                    stock: updates.quantity,
                    minStock: updates.minimumStock
                }
            });
            // 3. Create history if quantity changed
            if (updates.quantity !== undefined && updates.quantity !== current.stock && updates.customChangeReason !== 'skip-history') {
                let changeReason = updates.customChangeReason;
                if (!changeReason) {
                    if (updates.isFromSale) changeReason = "Sale";
                    else if (updates.quantity > current.stock) changeReason = "Manual stock addition";
                    else changeReason = "Manual stock reduction";
                }
                const snapshottedReason = `[${updated.name}] | ${changeReason}`;
                await tx.productHistory.create({
                    data: {
                        userId: updates.userId,
                        productId: updated.id,
                        type: updates.isFromSale ? 'SALE' : updates.quantity > current.stock ? 'RESTOCK' : 'ADJUSTMENT',
                        oldStock: current.stock,
                        newStock: updates.quantity,
                        quantityChange: updates.quantity - current.stock,
                        reason: snapshottedReason,
                        referenceId: updates.referenceId || null
                    }
                });
            }
            return updated;
        });
        return result;
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
}
async function deleteProductAction(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.delete({
            where: {
                id
            }
        });
        // revalidatePath('/inventory/products');
        return true;
    } catch (error) {
        console.error('Error deleting product:', error);
        return false;
    }
}
async function updateProductsBulkAction(updates, businessId) {
    try {
        // Prisma transaction for bulk updates
        const updatePromises = updates.map((u)=>__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.update({
                where: {
                    id: u.id
                },
                data: {
                    ...u.updated.name && {
                        name: u.updated.name
                    },
                    ...u.updated.description !== undefined && {
                        description: u.updated.description
                    },
                    ...u.updated.categoryId !== undefined && {
                        categoryId: u.updated.categoryId
                    },
                    ...u.updated.supplierId !== undefined && {
                        supplierId: u.updated.supplierId
                    },
                    ...u.updated.sku !== undefined && {
                        sku: u.updated.sku
                    },
                    ...u.updated.barcode !== undefined && {
                        barcode: u.updated.barcode
                    },
                    ...u.updated.costPrice !== undefined && {
                        costPrice: u.updated.costPrice
                    },
                    ...u.updated.sellingPrice !== undefined && {
                        sellingPrice: u.updated.sellingPrice
                    },
                    ...u.updated.quantity !== undefined && {
                        stock: u.updated.quantity
                    },
                    ...u.updated.minimumStock !== undefined && {
                        minStock: u.updated.minimumStock
                    }
                }
            }));
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(updatePromises);
        return true;
    } catch (error) {
        console.error('Error performing bulk update:', error);
        return false;
    }
}
async function getProductCategoriesAction(locationId) {
    try {
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].category.findMany({
            where: {
                branchId: locationId
            },
            orderBy: {
                name: 'asc'
            }
        });
        return {
            success: true,
            data: categories.map((c)=>({
                    id: c.id,
                    name: c.name,
                    created_at: c.createdAt.toISOString()
                }))
        };
    } catch (error) {
        console.error('Error fetching categories:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createProductCategoryAction(locationId, userId, name) {
    try {
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].category.create({
            data: {
                branchId: locationId,
                userId,
                name
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/inventory');
        return {
            success: true,
            data: category
        };
    } catch (error) {
        console.error('Error creating category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateProductCategoryAction(id, name) {
    try {
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].category.update({
            where: {
                id
            },
            data: {
                name
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/inventory');
        return {
            success: true,
            data: category
        };
    } catch (error) {
        console.error('Error updating category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteProductCategoryAction(id) {
    try {
        // Check if any products are using this category
        const usageCount = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.count({
            where: {
                categoryId: id
            }
        });
        if (usageCount > 0) {
            return {
                success: false,
                error: 'Cannot delete category: it is being used by one or more products.'
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].category.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/inventory');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getProductStatsAction(businessId) {
    if (!businessId) return {
        costValue: 0,
        lowStock: 0,
        outOfStock: 0,
        stockValue: 0
    };
    try {
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
            where: {
                branchId: businessId
            },
            select: {
                stock: true,
                costPrice: true,
                sellingPrice: true,
                minStock: true
            }
        });
        let costValue = 0;
        let lowStock = 0;
        let outOfStock = 0;
        let stockValue = 0;
        products.forEach((p)=>{
            const qty = Number(p.stock) || 0;
            const cost = Number(p.costPrice) || 0;
            const selling = Number(p.sellingPrice) || 0;
            const minStock = Number(p.minStock) || 0;
            costValue += cost * qty;
            stockValue += selling * qty;
            if (qty === 0) {
                outOfStock++;
            } else if (qty > 0 && qty <= minStock) {
                lowStock++;
            }
        });
        return {
            costValue,
            lowStock,
            outOfStock,
            stockValue
        };
    } catch (error) {
        console.error('Error fetching product stats:', error);
        return {
            costValue: 0,
            lowStock: 0,
            outOfStock: 0,
            stockValue: 0
        };
    }
}
async function lookupProductByBarcodeAction(code, branchId) {
    if (!code || !branchId) return null;
    try {
        const lowerCode = code.toLowerCase();
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findFirst({
            where: {
                branchId,
                OR: [
                    {
                        barcode: {
                            contains: lowerCode,
                            mode: 'insensitive'
                        }
                    },
                    {
                        sku: {
                            contains: lowerCode,
                            mode: 'insensitive'
                        }
                    }
                ]
            }
        });
        return product;
    } catch (error) {
        console.error('[lookupProductByBarcodeAction] Error:', error);
        return null;
    }
}
async function getProductsForBarcodeScannerAction(branchId) {
    if (!branchId) return [];
    try {
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
            where: {
                branchId
            },
            select: {
                id: true,
                name: true,
                barcode: true,
                sku: true,
                sellingPrice: true,
                costPrice: true,
                stock: true,
                description: true,
                categoryId: true,
                branchId: true,
                minStock: true,
                imageUrl: true,
                createdAt: true,
                updatedAt: true
            }
        });
        return products;
    } catch (error) {
        console.error('[getProductsForBarcodeScannerAction] Error:', error);
        return [];
    }
}
async function updateSaleCashTransactionAction(saleId, cashTransactionId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.update({
            where: {
                id: saleId
            },
            data: {
                cashTransactionId
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('[updateSaleCashTransactionAction] Error:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getFilteredProductsForExportAction(branchId, filters) {
    if (!branchId) return [];
    try {
        const where = {
            branchId
        };
        if (filters?.search) {
            const s = filters.search;
            where.OR = [
                {
                    name: {
                        contains: s,
                        mode: 'insensitive'
                    }
                },
                {
                    description: {
                        contains: s,
                        mode: 'insensitive'
                    }
                },
                {
                    sku: {
                        contains: s,
                        mode: 'insensitive'
                    }
                }
            ];
        }
        if (filters?.stockStatus === 'outOfStock') {
            where.stock = 0;
        } else if (filters?.stockStatus === 'inStock') {
            where.stock = {
                gt: 0
            };
        }
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
            where,
            orderBy: {
                createdAt: 'desc'
            }
        });
        return products;
    } catch (error) {
        console.error('[getFilteredProductsForExportAction] Error:', error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProductsAction,
    getAllProductsAction,
    getProductsByIdsAction,
    createProductAction,
    updateProductAction,
    deleteProductAction,
    updateProductsBulkAction,
    getProductCategoriesAction,
    createProductCategoryAction,
    updateProductCategoryAction,
    deleteProductCategoryAction,
    getProductStatsAction,
    lookupProductByBarcodeAction,
    getProductsForBarcodeScannerAction,
    updateSaleCashTransactionAction,
    getFilteredProductsForExportAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductsAction, "4067b4df65a668010fc5081a80928c8b7ed310e2f4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllProductsAction, "600e96d17baa6280af8fa4338d2f2ba09c3eab361e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductsByIdsAction, "60d2e6658abc20e397c389a36fe10b6b5461fb97b4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProductAction, "40de351351ef1c777658488fc7d0ea14a31652fa0f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductAction, "60d199ed6ebdb264ab3569d97f92202a15a4ea5a1e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProductAction, "40d77c7a950f7558001cd1309943b62b2f2b6ba221", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductsBulkAction, "609b8c32a570899b81791858dba0aee579337a2235", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductCategoriesAction, "404dd4aaa90e099e06b884512b16abb99178afa8f9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProductCategoryAction, "70fdf92ee6bb656be2d437fb23f40f7daa4c0c88c1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductCategoryAction, "60c24e83b6be5d002fb79164133677812fae403d94", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProductCategoryAction, "4034881b33ece4d2c3bb0e25c4e68c3715e705d9ab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductStatsAction, "40f8ff4d50c48e201bfa61facb063e2eae6b253480", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(lookupProductByBarcodeAction, "60c39f510779a90656f2e7a2d8e6d5d4b163e1175c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductsForBarcodeScannerAction, "40075324c8acb894ef7059746c65a1e926913a88fd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSaleCashTransactionAction, "60d714856b594297f3f7728ab4c8b1083c1f69633a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getFilteredProductsForExportAction, "60a58b9c853990a56fd3557c84abc33029186281e2", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"403d03ebd9e84dcdccfe86665d922ccea6d0a3727f":"getStockRepairsPreviewAction","4087f77070d72c1160296631642063d84397e184d9":"createStockHistoryAction","40d5b96536ea3c10ea4d2018a712fa2a14c62694d6":"getActivityByEntityIdsAction","40daf39292ed77bac86e68b053e063b099dadbda22":"getNextReceiptNumberAction","40eba5290c662a74f9b17731241be6565b6ba17367":"createRequisitionAction","600857ecf6299f015defc0184c1ff16628fa38538c":"getStockHistoryAction","607241ec6de7cf4ac80578c30a3a4bc051ec9a9cae":"deleteStockHistoryEntriesByReferenceAction","607c22123dc2728e830f8ac8e642f36c1a0f3d0e07":"getRequisitionsAction","608cb60a1da7b007825f807be3e16906d959f678c7":"repairStockChainsAction","6090b87835c33a95a5aafe79519f44f481abd623fa":"getProductReconciliationAction","60c80b6e8d70c1cd11332fb59eec3790b8c4260c46":"deleteRequisitionAction","60d319d4137f823c456bc42755496f39a009c6cdb2":"updateStockHistoryDatesAction","60f90d7549882485fed7a54035a4162448a711ca11":"recalculateStockChainAction","7025d373c4892871d9a0aa001c21511f9ccf0a431e":"getStockSummaryReportAction","7083475c4a77fdc0d468e38b20907db3bcf79e040f":"updateStockHistoryDatesByReferenceAction","709e5344eeca43879345dcb626f1f2ab7ca9393a20":"updateRequisitionAction"},"",""] */ __turbopack_context__.s([
    "createRequisitionAction",
    ()=>createRequisitionAction,
    "createStockHistoryAction",
    ()=>createStockHistoryAction,
    "deleteRequisitionAction",
    ()=>deleteRequisitionAction,
    "deleteStockHistoryEntriesByReferenceAction",
    ()=>deleteStockHistoryEntriesByReferenceAction,
    "getActivityByEntityIdsAction",
    ()=>getActivityByEntityIdsAction,
    "getNextReceiptNumberAction",
    ()=>getNextReceiptNumberAction,
    "getProductReconciliationAction",
    ()=>getProductReconciliationAction,
    "getRequisitionsAction",
    ()=>getRequisitionsAction,
    "getStockHistoryAction",
    ()=>getStockHistoryAction,
    "getStockRepairsPreviewAction",
    ()=>getStockRepairsPreviewAction,
    "getStockSummaryReportAction",
    ()=>getStockSummaryReportAction,
    "recalculateStockChainAction",
    ()=>recalculateStockChainAction,
    "repairStockChainsAction",
    ()=>repairStockChainsAction,
    "updateRequisitionAction",
    ()=>updateRequisitionAction,
    "updateStockHistoryDatesAction",
    ()=>updateStockHistoryDatesAction,
    "updateStockHistoryDatesByReferenceAction",
    ()=>updateStockHistoryDatesByReferenceAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function getStockHistoryAction(locationId, productId) {
    try {
        const where = {
            locationId
        };
        if (productId) where.productId = productId;
        const history = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].productHistory.findMany({
            where,
            include: {
                product: {
                    select: {
                        name: true,
                        costPrice: true,
                        sellingPrice: true,
                        sku: true
                    }
                }
            },
            orderBy: [
                {
                    createdAt: 'desc'
                },
                {
                    id: 'desc'
                }
            ]
        });
        return {
            success: true,
            data: history.map((h)=>({
                    id: h.id,
                    productId: h.productId,
                    oldQuantity: h.previousQuantity,
                    newQuantity: h.newQuantity,
                    changeReason: h.changeReason,
                    createdAt: h.createdAt.toISOString(),
                    referenceId: h.referenceId,
                    receiptNumber: h.receiptNumber,
                    product: h.product ? {
                        name: h.product.name,
                        costPrice: h.product.costPrice,
                        sellingPrice: h.product.sellingPrice,
                        itemNumber: h.product.sku
                    } : undefined
                }))
        };
    } catch (error) {
        console.error('Error fetching stock history:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createStockHistoryAction(data) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const entry = await tx.productHistory.create({
                data: {
                    userId: data.userId,
                    locationId: data.locationId,
                    productId: data.productId,
                    previousQuantity: data.previousQuantity,
                    newQuantity: data.newQuantity,
                    changeReason: data.changeReason,
                    referenceId: data.referenceId || null,
                    receiptNumber: data.receiptNumber || null,
                    createdAt: data.createdAt ? new Date(data.createdAt) : undefined
                }
            });
            // Update product stock as well
            await tx.product.update({
                where: {
                    id: data.productId
                },
                data: {
                    stock: data.newQuantity
                }
            });
            return entry;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/inventory');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error creating stock history:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function recalculateStockChainAction(productId, locationId) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const history = await tx.productHistory.findMany({
                where: {
                    productId,
                    locationId
                },
                orderBy: [
                    {
                        createdAt: 'asc'
                    },
                    {
                        id: 'asc'
                    }
                ]
            });
            if (history.length === 0) return {
                finalQuantity: 0
            };
            let runningQuantity = 0;
            const updates = [];
            for (const entry of history){
                const change = entry.newQuantity - entry.previousQuantity;
                const newPrev = runningQuantity;
                const newNext = newPrev + change;
                if (entry.previousQuantity !== newPrev || entry.newQuantity !== newNext) {
                    updates.push(tx.productHistory.update({
                        where: {
                            id: entry.id
                        },
                        data: {
                            previousQuantity: newPrev,
                            newQuantity: newNext
                        }
                    }));
                }
                runningQuantity = newNext;
            }
            if (updates.length > 0) {
                await Promise.all(updates);
            }
            // Update product
            await tx.product.update({
                where: {
                    id: productId
                },
                data: {
                    stock: runningQuantity
                }
            });
            return {
                finalQuantity: runningQuantity
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/inventory');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error recalculating stock chain:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteStockHistoryEntriesByReferenceAction(referenceId, locationId) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const entries = await tx.productHistory.findMany({
                where: {
                    referenceId,
                    locationId
                },
                select: {
                    productId: true
                }
            });
            const productIds = [
                ...new Set(entries.map((e)=>e.productId))
            ];
            await tx.productHistory.deleteMany({
                where: {
                    referenceId,
                    locationId
                }
            });
            // Recalculate chains for affected products
            for (const productId of productIds){
                await recalculateStockChainInternal(tx, productId, locationId);
            }
            return {
                affectedProducts: productIds.length
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/inventory');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error deleting stock history by reference:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateStockHistoryDatesByReferenceAction(referenceId, locationId, newDate) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].productHistory.updateMany({
            where: {
                referenceId,
                locationId
            },
            data: {
                createdAt: new Date(newDate)
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/inventory');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error updating stock history dates:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
// Internal helper for use within transactions
async function recalculateStockChainInternal(tx, productId, locationId) {
    const history = await tx.productHistory.findMany({
        where: {
            productId,
            locationId
        },
        orderBy: [
            {
                createdAt: 'asc'
            },
            {
                id: 'asc'
            }
        ]
    });
    let runningQuantity = 0;
    for (const entry of history){
        const change = entry.newQuantity - entry.previousQuantity;
        const newPrev = runningQuantity;
        const newNext = newPrev + change;
        if (entry.previousQuantity !== newPrev || entry.newQuantity !== newNext) {
            await tx.productHistory.update({
                where: {
                    id: entry.id
                },
                data: {
                    previousQuantity: newPrev,
                    newQuantity: newNext
                }
            });
        }
        runningQuantity = newNext;
    }
    await tx.product.update({
        where: {
            id: productId
        },
        data: {
            stock: runningQuantity
        }
    });
}
async function getRequisitionsAction(userId, locationId) {
    try {
        const requisitions = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].requisition.findMany({
            where: {
                userId,
                locationId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return {
            success: true,
            data: requisitions.map((req)=>({
                    id: req.id,
                    userId: req.userId,
                    locationId: req.branchId,
                    requisitionNumber: req.requisitionNumber,
                    title: req.title || '',
                    items: req.items || [],
                    notes: req.notes,
                    status: req.status,
                    createdAt: req.createdAt.toISOString(),
                    updatedAt: req.updatedAt.toISOString()
                }))
        };
    } catch (error) {
        console.error('Error fetching requisitions:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createRequisitionAction(data) {
    try {
        const requisition = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].requisition.create({
            data: {
                userId: data.userId,
                branchId: data.locationId,
                requisitionNumber: data.requisitionNumber,
                title: data.title,
                items: data.items,
                notes: data.notes,
                status: data.status || 'draft'
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/requisitions');
        return {
            success: true,
            data: {
                id: requisition.id,
                userId: requisition.userId,
                locationId: requisition.branchId,
                requisitionNumber: requisition.requisitionNumber,
                title: requisition.title || '',
                items: requisition.items || [],
                notes: requisition.notes,
                status: requisition.status,
                createdAt: requisition.createdAt.toISOString(),
                updatedAt: requisition.updatedAt.toISOString()
            }
        };
    } catch (error) {
        console.error('Error creating requisition:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateRequisitionAction(id, userId, data) {
    try {
        const requisition = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].requisition.update({
            where: {
                id,
                userId
            },
            data: {
                title: data.title,
                items: data.items,
                notes: data.notes,
                status: data.status,
                updatedAt: new Date()
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/requisitions');
        return {
            success: true,
            data: {
                id: requisition.id,
                userId: requisition.userId,
                locationId: requisition.branchId,
                requisitionNumber: requisition.requisitionNumber,
                title: requisition.title || '',
                items: requisition.items || [],
                notes: requisition.notes,
                status: requisition.status,
                createdAt: requisition.createdAt.toISOString(),
                updatedAt: requisition.updatedAt.toISOString()
            }
        };
    } catch (error) {
        console.error('Error updating requisition:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteRequisitionAction(id, userId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].requisition.delete({
            where: {
                id,
                userId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/requisitions');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting requisition:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getStockSummaryReportAction(locationId, startDate, endDate) {
    try {
        const start = new Date(startDate);
        const end = new Date(endDate);
        // Fetch all products for the location
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
            where: {
                branchId: locationId
            },
            include: {
                category: true
            }
        });
        const reportData = await Promise.all(products.map(async (product)=>{
            // This is a simplified version of the logic that was likely in the RPC
            // In a real production app, we'd use complex SQL or dedicated aggregate tables
            // Get history for this product in the date range
            const history = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].productHistory.findMany({
                where: {
                    productId: product.id,
                    locationId,
                    createdAt: {
                        gte: start,
                        lte: end
                    }
                },
                orderBy: {
                    createdAt: 'asc'
                }
            });
            // Calculate metrics from history
            let itemsSold = 0;
            let stockIn = 0;
            let adjustmentsIn = 0;
            let adjustmentsOut = 0;
            history.forEach((h)=>{
                const change = h.newQuantity - h.previousQuantity;
                if (h.changeReason === 'SALE') {
                    itemsSold += Math.abs(change);
                } else if (h.changeReason === 'STOCK_IN' || h.changeReason === 'RESTOCK') {
                    stockIn += change;
                } else if (change > 0) {
                    adjustmentsIn += change;
                } else {
                    adjustmentsOut += Math.abs(change);
                }
            });
            // Get closing stock at end date (or current if after end date)
            const closingStockEntry = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].productHistory.findFirst({
                where: {
                    productId: product.id,
                    locationId,
                    createdAt: {
                        lte: end
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            const closingStock = closingStockEntry ? closingStockEntry.newQuantity : 0;
            const openingStock = closingStock - (stockIn + adjustmentsIn - itemsSold - adjustmentsOut);
            return {
                productId: product.id,
                productName: product.name,
                itemNumber: product.sku || product.id,
                imageUrl: product.imageUrl,
                costPrice: Number(product.costPrice),
                sellingPrice: Number(product.sellingPrice),
                category: product.category?.name,
                openingStock,
                itemsSold,
                stockIn,
                transferOut: 0,
                returnIn: 0,
                returnOut: 0,
                adjustmentsIn,
                adjustmentsOut,
                closingStock,
                revaluation: closingStock * Number(product.costPrice)
            };
        }));
        return {
            success: true,
            data: reportData
        };
    } catch (error) {
        console.error('Error generating stock summary report:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getProductReconciliationAction(businessId, productId) {
    try {
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findUnique({
            where: {
                id: productId
            },
            include: {
                category: true
            }
        });
        if (!product) return {
            success: false,
            error: 'Product not found'
        };
        // Fetch all history entries
        const history = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].productHistory.findMany({
            where: {
                productId,
                locationId: businessId
            },
            orderBy: [
                {
                    createdAt: 'asc'
                },
                {
                    id: 'asc'
                }
            ]
        });
        // Fetch all sales containing this product
        const sales = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.findMany({
            where: {
                branchId: businessId
            },
            orderBy: {
                date: 'asc'
            }
        });
        const openingStock = history.length > 0 ? history[0].newStock : 0;
        const openingDate = history.length > 0 ? history[0].createdAt : null;
        const dailyTransactions = new Map();
        let excludedSalesQty = 0;
        sales.forEach((sale)=>{
            const items = sale.items || [];
            const soldQty = items.filter((item)=>item.productId === productId).reduce((sum, item)=>sum + (Number(item.quantity) || 0), 0);
            if (soldQty > 0) {
                if (openingDate && sale.date < openingDate) {
                    excludedSalesQty += soldQty;
                } else {
                    const dateStr = sale.date.toISOString().split('T')[0];
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
            }
        });
        // Movements (excluding initial entry)
        const movements = history.slice(1);
        movements.forEach((h)=>{
            const dateStr = h.createdAt.toISOString().split('T')[0];
            const delta = h.newStock - h.oldStock;
            const reason = (h.changeReason || '').toLowerCase();
            const day = dailyTransactions.get(dateStr) || {
                itemsSold: 0,
                stockAdded: 0,
                transferOut: 0,
                returnIn: 0,
                returnOut: 0,
                adjustments: 0
            };
            if (h.type === 'RESTOCK' || reason.includes('purchase') || reason.includes('addition')) {
                day.stockAdded += delta;
            } else if (reason.includes('transfer out')) {
                day.transferOut += Math.abs(delta);
            } else if (reason.includes('customer return')) {
                day.returnIn += delta;
            } else if (reason.includes('return to supplier')) {
                day.returnOut += Math.abs(delta);
            } else if (h.type !== 'SALE') {
                day.adjustments += delta;
            }
            dailyTransactions.set(dateStr, day);
        });
        const sortedDates = Array.from(dailyTransactions.keys()).sort();
        const dailyBreakdown = [];
        let runningStock = openingStock;
        for (const date of sortedDates){
            const day = dailyTransactions.get(date);
            const startingStock = runningStock;
            const endingStock = startingStock - day.itemsSold + day.stockAdded - day.transferOut + day.returnIn - day.returnOut + day.adjustments;
            dailyBreakdown.push({
                date,
                startingStock,
                ...day,
                endingStock
            });
            runningStock = endingStock;
        }
        return {
            success: true,
            data: {
                product: {
                    id: product.id,
                    name: product.name,
                    quantity: product.stock,
                    itemNumber: product.sku
                },
                currentStock: product.stock,
                calculatedStock: runningStock,
                discrepancy: product.stock - runningStock,
                openingStock,
                openingDate: openingDate?.toISOString(),
                excludedSalesQty,
                dailyBreakdown
            }
        };
    } catch (error) {
        console.error('Error in reconciliation action:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getStockRepairsPreviewAction(businessId) {
    try {
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
            where: {
                branchId: businessId
            },
            select: {
                id: true,
                name: true,
                stock: true
            }
        });
        const brokenChains = [];
        for (const product of products){
            const history = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].productHistory.findMany({
                where: {
                    productId: product.id,
                    locationId: businessId
                },
                orderBy: [
                    {
                        createdAt: 'asc'
                    },
                    {
                        id: 'asc'
                    }
                ]
            });
            if (history.length === 0) continue;
            let runningQuantity = 0;
            const brokenEntries = [];
            for (const entry of history){
                const change = entry.newStock - entry.oldStock;
                const expectedPrev = runningQuantity;
                const expectedNext = expectedPrev + change;
                if (entry.oldStock !== expectedPrev || entry.newStock !== expectedNext) {
                    brokenEntries.push({
                        entryId: entry.id,
                        createdAt: entry.createdAt.toISOString(),
                        changeReason: entry.changeReason,
                        currentPrevQty: entry.oldStock,
                        currentNewQty: entry.newStock,
                        fixedPrevQty: expectedPrev,
                        fixedNewQty: expectedNext
                    });
                }
                runningQuantity = expectedNext;
            }
            if (brokenEntries.length > 0 || Math.abs(product.stock - runningQuantity) > 0.001) {
                brokenChains.push({
                    productId: product.id,
                    productName: product.name,
                    totalEntries: history.length,
                    brokenEntries,
                    finalFixedQty: runningQuantity,
                    currentProductQty: product.stock
                });
            }
        }
        return {
            success: true,
            data: brokenChains
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function repairStockChainsAction(businessId, productIds) {
    try {
        const ids = productIds || (await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
            where: {
                branchId: businessId
            },
            select: {
                id: true
            }
        })).map((p)=>p.id);
        let repaired = 0;
        let failed = 0;
        for (const id of ids){
            try {
                await recalculateStockChainAction(id, businessId);
                repaired++;
            } catch (err) {
                failed++;
            }
        }
        return {
            success: true,
            data: {
                repaired,
                failed
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getActivityByEntityIdsAction(entityIds) {
    try {
        const records = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].activityHistory.findMany({
            where: {
                entityId: {
                    in: entityIds
                }
            },
            select: {
                entityId: true,
                entityName: true
            }
        });
        return {
            success: true,
            data: records
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            data: []
        };
    }
}
async function updateStockHistoryDatesAction(entryIds, newDate) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].productHistory.updateMany({
            where: {
                id: {
                    in: entryIds
                }
            },
            data: {
                createdAt: new Date(newDate)
            }
        });
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getNextReceiptNumberAction(branchId) {
    try {
        const lastSale = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.findFirst({
            where: {
                branchId
            },
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                saleNumber: true
            }
        });
        let nextNum = 1;
        if (lastSale?.saleNumber) {
            // saleNumber format is "SAL-YYYY-NNNNNN" or plain digits
            const parts = lastSale.saleNumber.split('-');
            const lastDigits = parseInt(parts[parts.length - 1], 10);
            if (!isNaN(lastDigits)) nextNum = lastDigits + 1;
        }
        const formatted = String(nextNum).padStart(6, '0');
        return {
            success: true,
            data: formatted
        };
    } catch (error) {
        console.error('Error getting next receipt number:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getStockHistoryAction,
    createStockHistoryAction,
    recalculateStockChainAction,
    deleteStockHistoryEntriesByReferenceAction,
    updateStockHistoryDatesByReferenceAction,
    getRequisitionsAction,
    createRequisitionAction,
    updateRequisitionAction,
    deleteRequisitionAction,
    getStockSummaryReportAction,
    getProductReconciliationAction,
    getStockRepairsPreviewAction,
    repairStockChainsAction,
    getActivityByEntityIdsAction,
    updateStockHistoryDatesAction,
    getNextReceiptNumberAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStockHistoryAction, "600857ecf6299f015defc0184c1ff16628fa38538c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createStockHistoryAction, "4087f77070d72c1160296631642063d84397e184d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(recalculateStockChainAction, "60f90d7549882485fed7a54035a4162448a711ca11", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteStockHistoryEntriesByReferenceAction, "607241ec6de7cf4ac80578c30a3a4bc051ec9a9cae", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateStockHistoryDatesByReferenceAction, "7083475c4a77fdc0d468e38b20907db3bcf79e040f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRequisitionsAction, "607c22123dc2728e830f8ac8e642f36c1a0f3d0e07", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createRequisitionAction, "40eba5290c662a74f9b17731241be6565b6ba17367", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateRequisitionAction, "709e5344eeca43879345dcb626f1f2ab7ca9393a20", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteRequisitionAction, "60c80b6e8d70c1cd11332fb59eec3790b8c4260c46", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStockSummaryReportAction, "7025d373c4892871d9a0aa001c21511f9ccf0a431e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductReconciliationAction, "6090b87835c33a95a5aafe79519f44f481abd623fa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStockRepairsPreviewAction, "403d03ebd9e84dcdccfe86665d922ccea6d0a3727f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(repairStockChainsAction, "608cb60a1da7b007825f807be3e16906d959f678c7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActivityByEntityIdsAction, "40d5b96536ea3c10ea4d2018a712fa2a14c62694d6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateStockHistoryDatesAction, "60d319d4137f823c456bc42755496f39a009c6cdb2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNextReceiptNumberAction, "40daf39292ed77bac86e68b053e063b099dadbda22", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/sales.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"4015e0e0d53fa37fce5fedeed35974e2fca4ebd10b":"getSalesCategoriesAction","402f4a409f748bd34ce4e9c8485a0fab492cca0147":"deleteSalesCategoryAction","6024f56e078e458896c223d462d138a5f485546baf":"deleteSaleAction","6025943fc262cab9b5aa8df539c3b5c25e1776ba60":"updateSaleCustomerAction","60287df686caf7605998e84cab3df776727e94dada":"getCustomerByNameAction","603140a0abaf8a1d2222432df4c288e4c92ca1012e":"updateSalesCategoryAction","7072a61fc50b40b4df0015e41a92c970c553e1c424":"createReceiptAction","7075bde107094bcee88803531f90399cdcae549f4b":"getSalesAction","70f9b04ea9060f2491ffc9e84115aa6bd70c3d4d47":"upsertSaleAction","70fc86dbaaefaebd36e09983d0830c45b4753829bc":"getPeriodSalesAction","782e2a43abf5b8996f45d01a958fb4c58e331d99ca":"createSalesCategoryAction","7891a105b2f8bdfdc900473c987edee0dadfa0a065":"getSalesGoalAction","7e71a0330bb45c9acc463904f5bfec2c9b040ddd25":"upsertSalesGoalAction"},"",""] */ __turbopack_context__.s([
    "createReceiptAction",
    ()=>createReceiptAction,
    "createSalesCategoryAction",
    ()=>createSalesCategoryAction,
    "deleteSaleAction",
    ()=>deleteSaleAction,
    "deleteSalesCategoryAction",
    ()=>deleteSalesCategoryAction,
    "getCustomerByNameAction",
    ()=>getCustomerByNameAction,
    "getPeriodSalesAction",
    ()=>getPeriodSalesAction,
    "getSalesAction",
    ()=>getSalesAction,
    "getSalesCategoriesAction",
    ()=>getSalesCategoriesAction,
    "getSalesGoalAction",
    ()=>getSalesGoalAction,
    "updateSaleCustomerAction",
    ()=>updateSaleCustomerAction,
    "updateSalesCategoryAction",
    ()=>updateSalesCategoryAction,
    "upsertSaleAction",
    ()=>upsertSaleAction,
    "upsertSalesGoalAction",
    ()=>upsertSalesGoalAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function getSalesAction(businessId, sortOrder = 'desc', pageSize) {
    try {
        const queryOptions = {
            where: {
                branchId: businessId
            },
            orderBy: {
                createdAt: sortOrder
            },
            include: {
                cashTransaction: true
            }
        };
        if (pageSize && pageSize > 0) {
            queryOptions.take = pageSize;
        }
        const sales = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.findMany(queryOptions);
        // Provide default mappings to existing React components
        return sales.map((item)=>({
                id: item.id,
                user_id: item.userId,
                location_id: item.branchId,
                receipt_number: item.saleNumber,
                customer_name: item.customerName,
                customer_address: item.customerAddress,
                customer_contact: item.customerPhone,
                customer_id: item.customerId,
                items: item.items,
                payment_status: item.paymentStatus,
                profit: 0,
                date: item.date.toISOString(),
                tax_rate: item.taxRate ? Number(item.taxRate) : 0,
                created_at: item.createdAt.toISOString(),
                updated_at: item.updatedAt.toISOString(),
                cash_transaction_id: item.cashTransactionId,
                amount_paid: Number(item.amountPaid),
                amount_due: Number(item.balance),
                category_id: item.categoryId,
                notes: item.notes
            }));
    } catch (error) {
        console.error('Error fetching sales:', error);
        return [];
    }
}
async function deleteSaleAction(id, businessId) {
    try {
        const sale = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.findUnique({
            where: {
                id
            },
            include: {
                cashTransaction: true,
                installmentPayments: true
            }
        });
        if (!sale || sale.branchId !== businessId) {
            return {
                success: false,
                error: 'Sale not found or unauthorized'
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            // Delete installments
            await tx.installmentPayment.deleteMany({
                where: {
                    saleId: id
                }
            });
            // Delete associated cash transaction
            if (sale.cashTransactionId) {
                await tx.cashTransaction.delete({
                    where: {
                        id: sale.cashTransactionId
                    }
                });
            }
            // Delete the sale itself
            await tx.sale.delete({
                where: {
                    id
                }
            });
        });
        return {
            success: true,
            sale: {
                receiptNumber: sale.saleNumber,
                customerName: sale.customerName,
                customerAddress: sale.customerAddress,
                customerContact: sale.customerPhone,
                paymentStatus: sale.paymentStatus,
                cashTransactionId: sale.cashTransactionId,
                items: sale.items,
                amountPaid: Number(sale.amountPaid),
                amountDue: Number(sale.balance),
                profit: 0,
                taxRate: Number(sale.taxRate),
                notes: sale.notes
            }
        };
    } catch (error) {
        console.error('Error deleting sale:', error);
        return {
            success: false,
            error: error.message || 'Failed to delete sale'
        };
    }
}
async function upsertSaleAction(saleDbData, isUpdate, updateId) {
    try {
        // Map PaymentStatus if needed
        let status = saleDbData.payment_status;
        if (status === 'NOT PAID') status = 'UNPAID';
        else if (status === 'Installment Sale') status = 'INSTALLMENT';
        else if (status === 'Paid') status = 'PAID';
        else if (status === 'Quote') status = 'QUOTE';
        const prismaData = {
            userId: saleDbData.user_id,
            branchId: saleDbData.location_id,
            saleNumber: saleDbData.receipt_number,
            customerName: saleDbData.customer_name,
            customerAddress: saleDbData.customer_address,
            customerPhone: saleDbData.customer_contact,
            customerId: saleDbData.customer_id,
            items: saleDbData.items,
            paymentStatus: status,
            date: new Date(saleDbData.date),
            taxRate: saleDbData.tax_rate,
            cashTransactionId: saleDbData.cash_transaction_id,
            amountPaid: saleDbData.amount_paid,
            balance: saleDbData.amount_due,
            categoryId: saleDbData.category_id,
            notes: saleDbData.notes,
            subtotal: 0,
            total: 0
        };
        if (isUpdate && updateId) {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.update({
                where: {
                    id: updateId
                },
                data: prismaData
            });
            return {
                success: true,
                data: updated
            };
        } else {
            const created = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.create({
                data: prismaData
            });
            return {
                success: true,
                data: created
            };
        }
    } catch (error) {
        console.error('Error upserting sale:', error);
        return {
            success: false,
            error: error.message || 'Failed to preserve sale'
        };
    }
}
async function createReceiptAction(saleData, businessId, userId) {
    try {
        let status = saleData.paymentStatus;
        if (status === 'NOT PAID') status = 'UNPAID';
        else if (status === 'Installment Sale') status = 'INSTALLMENT';
        else if (status === 'Paid') status = 'PAID';
        else if (status === 'Quote') status = 'QUOTE';
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.create({
            data: {
                userId: userId,
                branchId: businessId,
                saleNumber: saleData.receiptNumber,
                customerName: saleData.customerName,
                customerId: saleData.customerId,
                date: new Date(saleData.date),
                items: saleData.items,
                paymentStatus: status,
                amountPaid: saleData.amountPaid || 0,
                balance: saleData.amountDue || 0,
                cashAccountId: saleData.cashAccountId,
                notes: saleData.notes,
                subtotal: 0,
                total: 0
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/sales');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/customers');
        return {
            success: true,
            data: created
        };
    } catch (error) {
        console.error('Error creating receipt:', error);
        return {
            success: false,
            error: error.message || 'Failed to create receipt'
        };
    }
}
async function getSalesCategoriesAction(businessId) {
    try {
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].saleCategory.findMany({
            where: {
                branchId: businessId
            },
            orderBy: {
                name: 'asc'
            }
        });
        return {
            success: true,
            data: categories
        };
    } catch (error) {
        console.error('Error fetching sales categories:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createSalesCategoryAction(businessId, userId, name, isDefault = false) {
    try {
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].saleCategory.create({
            data: {
                branchId: businessId,
                userId,
                name,
                is_default: isDefault
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/sales');
        return {
            success: true,
            data: category
        };
    } catch (error) {
        console.error('Error creating sales category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateSalesCategoryAction(id, name) {
    try {
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].saleCategory.update({
            where: {
                id
            },
            data: {
                name
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/sales');
        return {
            success: true,
            data: category
        };
    } catch (error) {
        console.error('Error updating sales category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteSalesCategoryAction(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].saleCategory.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/sales');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting sales category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getCustomerByNameAction(branchId, name) {
    if (!branchId || !name) return null;
    try {
        const customer = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customer.findFirst({
            where: {
                branchId,
                name: {
                    contains: name,
                    mode: 'insensitive'
                }
            },
            select: {
                id: true,
                name: true
            }
        });
        return customer;
    } catch (error) {
        console.error('Error looking up customer by name:', error);
        return null;
    }
}
async function updateSaleCustomerAction(saleId, customerId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.update({
            where: {
                id: saleId
            },
            data: {
                customerId
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('Error updating sale customer:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getSalesGoalAction(userId, branchId, month, year) {
    try {
        const goal = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].salesGoal.findFirst({
            where: {
                userId,
                branchId,
                period: `${year}-${String(month).padStart(2, '0')}`
            }
        });
        return {
            success: true,
            data: goal
        };
    } catch (error) {
        console.error('Error fetching sales goal:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function upsertSalesGoalAction(userId, branchId, month, year, amount, existingGoalId) {
    try {
        const period = `${year}-${String(month).padStart(2, '0')}`;
        if (existingGoalId) {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].salesGoal.update({
                where: {
                    id: existingGoalId
                },
                data: {
                    target: amount
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
            return {
                success: true,
                data: updated
            };
        } else {
            const created = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].salesGoal.create({
                data: {
                    userId,
                    branchId,
                    target: amount,
                    current: 0,
                    period,
                    startDate: new Date(year, month - 1, 1),
                    endDate: new Date(year, month, 0),
                    status: 'active'
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
            return {
                success: true,
                data: created
            };
        }
    } catch (error) {
        console.error('Error upserting sales goal:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getPeriodSalesAction(branchId, startDate, endDate) {
    try {
        const sales = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.findMany({
            where: {
                branchId,
                date: {
                    gte: startDate,
                    lte: endDate
                },
                paymentStatus: {
                    not: 'QUOTE'
                }
            },
            select: {
                amountPaid: true
            }
        });
        const total = sales.reduce((sum, sale)=>sum + Number(sale.amountPaid || 0), 0);
        return {
            success: true,
            data: total
        };
    } catch (error) {
        console.error('Error fetching period sales:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getSalesAction,
    deleteSaleAction,
    upsertSaleAction,
    createReceiptAction,
    getSalesCategoriesAction,
    createSalesCategoryAction,
    updateSalesCategoryAction,
    deleteSalesCategoryAction,
    getCustomerByNameAction,
    updateSaleCustomerAction,
    getSalesGoalAction,
    upsertSalesGoalAction,
    getPeriodSalesAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSalesAction, "7075bde107094bcee88803531f90399cdcae549f4b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSaleAction, "6024f56e078e458896c223d462d138a5f485546baf", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(upsertSaleAction, "70f9b04ea9060f2491ffc9e84115aa6bd70c3d4d47", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createReceiptAction, "7072a61fc50b40b4df0015e41a92c970c553e1c424", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSalesCategoriesAction, "4015e0e0d53fa37fce5fedeed35974e2fca4ebd10b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSalesCategoryAction, "782e2a43abf5b8996f45d01a958fb4c58e331d99ca", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSalesCategoryAction, "603140a0abaf8a1d2222432df4c288e4c92ca1012e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSalesCategoryAction, "402f4a409f748bd34ce4e9c8485a0fab492cca0147", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCustomerByNameAction, "60287df686caf7605998e84cab3df776727e94dada", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSaleCustomerAction, "6025943fc262cab9b5aa8df539c3b5c25e1776ba60", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSalesGoalAction, "7891a105b2f8bdfdc900473c987edee0dadfa0a065", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(upsertSalesGoalAction, "7e71a0330bb45c9acc463904f5bfec2c9b040ddd25", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPeriodSalesAction, "70fc86dbaaefaebd36e09983d0830c45b4753829bc", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/finance.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"402b1004e42a9e932de1baf2f2c3eb1ff7f9959fb0":"deleteExpenseAction","40312ab6f2fef038b5dfa6085e408edb82463f6967":"deleteInstallmentPaymentAction","404980a34b93d7900c1999c99de5e9c34a721b6cb1":"createInstallmentPaymentAction","4079a85d4e128c8e2611caa52132542d6725da2976":"findCashTransactionAction","408ccb982c2e454f89ae93ad2af855fb96040e5a57":"getExpenseCategoriesAction","409470390141cd715e0cd220cb79667b8149d7d73e":"getExpensesAction","409ef47fe7c43e580ce73d1c617fbf3a84524c288e":"getCashAccountsAction","409fc128a9613fdf42306f06ed612bc6570ab58cd3":"getInstallmentPaymentsAction","40a86180a574b0d32fb30c9c96c568cbd2f459d9b8":"createBulkCashTransactionsAction","40b2fa4f4e24346d700affbbfa7ac2a56ad27ee177":"createCashAccountAction","40b6e9530f5a2f90f42791650b0ed5394ce737c3a3":"deleteExpenseCategoryAction","40e27ea01694c068cec3727a5ec76f4f8a00869aeb":"unlinkInstallmentFromCashAction","40fa982818a8acf554af8995eb77b9f6f23aec611f":"createExpenseCategoryAction","40fc001cac4e34868dbc29be60beb7bc57962d1f28":"createCashTransactionAction","601898048ee5b7a83933d537bd12b51141bff3c075":"updateInstallmentPaymentAction","603bcdf9dca15e0d76dc5d53bc6fdc08399006b424":"updateCashTransactionAction","60585d60facf780ea203e9a513a345131d92a44647":"createExpenseAction","605be1e591b32585aca8484f92d9f43c2f161c0751":"updateCashAccountAction","60c095365f08f3c0aa12126c29d79f890f743053b3":"deleteCashAccountAction","60c1e787ca13f5ea88d5f76ab898522279d36799ed":"getCashTransactionsAction","60d997afdc2c23a833e4c53d9161d85013dc00cc91":"deleteCashTransactionAction","60e5b42466b6d684ad910d160f56d8fa9090db65f5":"getCashAccountBalanceAction","60f6b72ce829331ecdac4a22477911b3d058b44a08":"getAccountOpeningBalanceAction","701a9e53345c4e0bac6a976c440e9fb430f30a0bd7":"deleteCashAccountWithTransactionsAction","70224fdc0bcebdc294431f28757b4c0854ee26605f":"createDefaultExpenseCategoriesAction","706dbbbf1c39b7797302e603abda3f1f3fe9b7b97f":"updateExpenseAction","787558103b6686223e72b23ffe2cac99e0e46da6bc":"linkInstallmentToCashAction"},"",""] */ __turbopack_context__.s([
    "createBulkCashTransactionsAction",
    ()=>createBulkCashTransactionsAction,
    "createCashAccountAction",
    ()=>createCashAccountAction,
    "createCashTransactionAction",
    ()=>createCashTransactionAction,
    "createDefaultExpenseCategoriesAction",
    ()=>createDefaultExpenseCategoriesAction,
    "createExpenseAction",
    ()=>createExpenseAction,
    "createExpenseCategoryAction",
    ()=>createExpenseCategoryAction,
    "createInstallmentPaymentAction",
    ()=>createInstallmentPaymentAction,
    "deleteCashAccountAction",
    ()=>deleteCashAccountAction,
    "deleteCashAccountWithTransactionsAction",
    ()=>deleteCashAccountWithTransactionsAction,
    "deleteCashTransactionAction",
    ()=>deleteCashTransactionAction,
    "deleteExpenseAction",
    ()=>deleteExpenseAction,
    "deleteExpenseCategoryAction",
    ()=>deleteExpenseCategoryAction,
    "deleteInstallmentPaymentAction",
    ()=>deleteInstallmentPaymentAction,
    "findCashTransactionAction",
    ()=>findCashTransactionAction,
    "getAccountOpeningBalanceAction",
    ()=>getAccountOpeningBalanceAction,
    "getCashAccountBalanceAction",
    ()=>getCashAccountBalanceAction,
    "getCashAccountsAction",
    ()=>getCashAccountsAction,
    "getCashTransactionsAction",
    ()=>getCashTransactionsAction,
    "getExpenseCategoriesAction",
    ()=>getExpenseCategoriesAction,
    "getExpensesAction",
    ()=>getExpensesAction,
    "getInstallmentPaymentsAction",
    ()=>getInstallmentPaymentsAction,
    "linkInstallmentToCashAction",
    ()=>linkInstallmentToCashAction,
    "unlinkInstallmentFromCashAction",
    ()=>unlinkInstallmentFromCashAction,
    "updateCashAccountAction",
    ()=>updateCashAccountAction,
    "updateCashTransactionAction",
    ()=>updateCashTransactionAction,
    "updateExpenseAction",
    ()=>updateExpenseAction,
    "updateInstallmentPaymentAction",
    ()=>updateInstallmentPaymentAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function createExpenseAction(data, linkToCash) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            // 1. Create the expense
            const expense = await tx.expense.create({
                data: {
                    userId: data.userId,
                    branchId: data.locationId,
                    amount: data.amount,
                    description: data.description,
                    category: data.category || null,
                    date: data.date,
                    paymentMethod: data.paymentMethod || null,
                    personInCharge: data.personInCharge || null,
                    receiptImage: data.receiptImage || null,
                    cashAccountId: linkToCash && data.cashAccountId ? data.cashAccountId : null
                }
            });
            // 2. If linking to cash, create a cash transaction
            if (linkToCash && data.cashAccountId) {
                const cashTx = await tx.cashTransaction.create({
                    data: {
                        userId: data.userId,
                        branchId: data.locationId,
                        accountId: data.cashAccountId,
                        amount: data.amount,
                        transactionType: 'cash_out',
                        category: data.category || 'Expense',
                        description: `Expense: ${data.description}`,
                        personInCharge: data.personInCharge || null,
                        date: data.date,
                        paymentMethod: data.paymentMethod || null,
                        receiptImage: data.receiptImage || null
                    }
                });
                // Update expense with transaction reference
                await tx.expense.update({
                    where: {
                        id: expense.id
                    },
                    data: {
                        cashTransactionId: cashTx.id
                    }
                });
            }
            return expense;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error creating expense:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getExpensesAction(locationId) {
    try {
        const expenses = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].expense.findMany({
            where: {
                branchId: locationId
            },
            orderBy: {
                date: 'desc'
            }
        });
        return {
            success: true,
            data: expenses.map((e)=>({
                    ...e,
                    created_at: e.createdAt.toISOString(),
                    updated_at: e.updatedAt.toISOString(),
                    payment_method: e.paymentMethod,
                    person_in_charge: e.personInCharge,
                    receipt_image: e.receiptImage,
                    cash_account_id: e.cashAccountId,
                    cash_transaction_id: e.cashTransactionId
                }))
        };
    } catch (error) {
        console.error('Error fetching expenses:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateExpenseAction(id, updates, currentExpense) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            // Update expense
            const updatedExpense = await tx.expense.update({
                where: {
                    id
                },
                data: {
                    amount: updates.amount,
                    description: updates.description,
                    category: updates.category,
                    date: updates.date,
                    paymentMethod: updates.paymentMethod,
                    personInCharge: updates.personInCharge,
                    receiptImage: updates.receiptImage,
                    cashAccountId: updates.cashAccountId || null
                }
            });
            const shouldLinkToCash = !!updates.cashAccountId;
            const wasLinkedToCash = !!currentExpense.cashTransactionId;
            if (shouldLinkToCash && !wasLinkedToCash) {
                // Create new cash transaction
                const cashTx = await tx.cashTransaction.create({
                    data: {
                        userId: currentExpense.userId,
                        branchId: currentExpense.branchId || currentExpense.locationId,
                        accountId: updates.cashAccountId,
                        amount: updates.amount || currentExpense.amount,
                        transactionType: 'cash_out',
                        category: updates.category || currentExpense.category || 'Expense',
                        description: `Expense: ${updates.description || currentExpense.description}`,
                        personInCharge: updates.personInCharge || currentExpense.personInCharge || null,
                        date: updates.date || currentExpense.date,
                        paymentMethod: updates.paymentMethod || currentExpense.paymentMethod || null,
                        receiptImage: updates.receiptImage || currentExpense.receiptImage || null
                    }
                });
                await tx.expense.update({
                    where: {
                        id
                    },
                    data: {
                        cashTransactionId: cashTx.id
                    }
                });
            } else if (shouldLinkToCash && wasLinkedToCash) {
                // Update existing cash transaction
                await tx.cashTransaction.update({
                    where: {
                        id: currentExpense.cashTransactionId
                    },
                    data: {
                        accountId: updates.cashAccountId,
                        amount: updates.amount || currentExpense.amount,
                        category: updates.category || currentExpense.category || 'Expense',
                        description: `Expense: ${updates.description || currentExpense.description}`,
                        personInCharge: updates.personInCharge || currentExpense.personInCharge || null,
                        date: updates.date || currentExpense.date,
                        paymentMethod: updates.paymentMethod || currentExpense.paymentMethod || null,
                        receiptImage: updates.receiptImage || currentExpense.receiptImage || null
                    }
                });
            } else if (!shouldLinkToCash && wasLinkedToCash) {
                // Delete existing cash transaction
                await tx.cashTransaction.delete({
                    where: {
                        id: currentExpense.cashTransactionId
                    }
                });
                await tx.expense.update({
                    where: {
                        id
                    },
                    data: {
                        cashTransactionId: null
                    }
                });
            }
            return updatedExpense;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error updating expense:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteExpenseAction(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const expense = await tx.expense.findUnique({
                where: {
                    id
                },
                select: {
                    cashTransactionId: true
                }
            });
            if (expense?.cashTransactionId) {
                await tx.cashTransaction.delete({
                    where: {
                        id: expense.cashTransactionId
                    }
                });
            }
            await tx.expense.delete({
                where: {
                    id
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting expense:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getInstallmentPaymentsAction(saleId) {
    try {
        const payments = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].installmentPayment.findMany({
            where: {
                saleId
            },
            orderBy: {
                paymentDate: 'desc'
            }
        });
        return {
            success: true,
            data: payments.map((p)=>({
                    id: p.id,
                    saleId: p.saleId,
                    userId: p.userId,
                    amount: Number(p.amount),
                    paymentDate: p.paymentDate.toISOString(),
                    notes: p.notes,
                    cashTransactionId: p.cashTransactionId,
                    createdAt: p.createdAt.toISOString(),
                    updatedAt: p.updatedAt.toISOString()
                }))
        };
    } catch (error) {
        console.error('Error fetching installment payments:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createInstallmentPaymentAction(data) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            let cashTxId = data.cashTransactionId;
            if (data.accountId && data.locationId && !cashTxId) {
                const sale = await tx.sale.findUnique({
                    where: {
                        id: data.saleId
                    },
                    select: {
                        customerName: true,
                        receiptNumber: true
                    }
                });
                const description = sale ? `Installment payment for ${sale.customerName} - Receipt #${sale.receiptNumber}` : `Installment payment for sale`;
                const cashTx = await tx.cashTransaction.create({
                    data: {
                        userId: data.userId,
                        branchId: data.locationId,
                        accountId: data.accountId,
                        amount: data.amount,
                        transactionType: 'cash_in',
                        category: 'Installment payment',
                        description: description,
                        date: data.paymentDate ? new Date(data.paymentDate) : new Date()
                    }
                });
                cashTxId = cashTx.id;
            }
            const payment = await tx.installmentPayment.create({
                data: {
                    saleId: data.saleId,
                    userId: data.userId,
                    amount: data.amount,
                    notes: data.notes,
                    cashTransactionId: cashTxId,
                    paymentDate: data.paymentDate ? new Date(data.paymentDate) : new Date()
                }
            });
            return payment;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error creating installment payment:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateInstallmentPaymentAction(id, updates) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const current = await tx.installmentPayment.findUnique({
                where: {
                    id
                },
                select: {
                    cashTransactionId: true
                }
            });
            if (!current) throw new Error("Payment not found");
            const updated = await tx.installmentPayment.update({
                where: {
                    id
                },
                data: {
                    amount: updates.amount,
                    notes: updates.notes,
                    paymentDate: updates.paymentDate ? new Date(updates.paymentDate) : undefined
                }
            });
            if (current.cashTransactionId) {
                await tx.cashTransaction.update({
                    where: {
                        id: current.cashTransactionId
                    },
                    data: {
                        amount: updates.amount,
                        date: updates.paymentDate ? new Date(updates.paymentDate) : undefined
                    }
                });
            }
            return updated;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error updating installment payment:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteInstallmentPaymentAction(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const payment = await tx.installmentPayment.findUnique({
                where: {
                    id
                },
                select: {
                    cashTransactionId: true
                }
            });
            if (payment?.cashTransactionId) {
                await tx.cashTransaction.delete({
                    where: {
                        id: payment.cashTransactionId
                    }
                });
            }
            await tx.installmentPayment.delete({
                where: {
                    id
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting installment payment:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function linkInstallmentToCashAction(paymentId, accountId, locationId, userId) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const payment = await tx.installmentPayment.findUnique({
                where: {
                    id: paymentId
                },
                include: {
                    sale: true
                }
            });
            if (!payment) throw new Error("Payment not found");
            if (payment.cashTransactionId) throw new Error("Payment already linked");
            const description = payment.sale ? `Installment payment for ${payment.sale.customerName} - Receipt #${payment.sale.receiptNumber}` : `Installment payment #${paymentId.substring(0, 8)}`;
            const cashTx = await tx.cashTransaction.create({
                data: {
                    userId,
                    branchId: locationId,
                    accountId,
                    amount: payment.amount,
                    transactionType: 'cash_in',
                    category: 'Installment payment',
                    description,
                    date: payment.paymentDate
                }
            });
            await tx.installmentPayment.update({
                where: {
                    id: paymentId
                },
                data: {
                    cashTransactionId: cashTx.id
                }
            });
            return cashTx;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error linking installment to cash:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function unlinkInstallmentFromCashAction(paymentId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const payment = await tx.installmentPayment.findUnique({
                where: {
                    id: paymentId
                },
                select: {
                    cashTransactionId: true
                }
            });
            if (!payment?.cashTransactionId) throw new Error("Payment not linked");
            await tx.cashTransaction.delete({
                where: {
                    id: payment.cashTransactionId
                }
            });
            await tx.installmentPayment.update({
                where: {
                    id: paymentId
                },
                data: {
                    cashTransactionId: null
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error unlinking installment from cash:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getExpenseCategoriesAction(locationId) {
    try {
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].expenseCategory.findMany({
            where: {
                branchId: locationId
            },
            orderBy: [
                {
                    isDefault: 'desc'
                },
                {
                    name: 'asc'
                }
            ]
        });
        return {
            success: true,
            data: categories.map((c)=>({
                    id: c.id,
                    name: c.name,
                    isDefault: c.isDefault,
                    createdAt: c.createdAt.toISOString()
                }))
        };
    } catch (error) {
        console.error('Error fetching expense categories:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createExpenseCategoryAction(data) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].expenseCategory.create({
            data: {
                userId: data.userId,
                branchId: data.locationId,
                name: data.name,
                isDefault: data.isDefault || false
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error creating expense category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteExpenseCategoryAction(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].expenseCategory.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting expense category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createDefaultExpenseCategoriesAction(userId, locationId, categoryNames) {
    try {
        const data = categoryNames.map((name)=>({
                userId,
                branchId: locationId,
                name,
                isDefault: true
            }));
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].expenseCategory.createMany({
            data,
            skipDuplicates: true
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error creating default categories:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getCashAccountsAction(locationId) {
    try {
        const accounts = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].cashAccount.findMany({
            where: {
                branchId: locationId
            },
            orderBy: [
                {
                    isDefault: 'desc'
                },
                {
                    name: 'asc'
                }
            ]
        });
        return {
            success: true,
            data: accounts.map((a)=>({
                    id: a.id,
                    name: a.name,
                    description: a.description,
                    openingBalance: Number(a.initialBalance),
                    isDefault: a.isDefault,
                    createdAt: a.createdAt.toISOString(),
                    updatedAt: a.updatedAt.toISOString()
                }))
        };
    } catch (error) {
        console.error('Error fetching cash accounts:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createCashAccountAction(data) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].cashAccount.create({
            data: {
                userId: data.userId,
                branchId: data.locationId,
                name: data.name,
                description: data.description || null,
                initialBalance: data.openingBalance || 0,
                isDefault: data.isDefault || false
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error creating cash account:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateCashAccountAction(id, updates) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].cashAccount.update({
            where: {
                id
            },
            data: {
                name: updates.name,
                description: updates.description,
                initialBalance: updates.openingBalance,
                isDefault: updates.isDefault
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error updating cash account:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteCashAccountAction(id, locationId) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const txCount = await tx.cashTransaction.count({
                where: {
                    accountId: id,
                    branchId: locationId
                }
            });
            const expCount = await tx.expense.count({
                where: {
                    cashAccountId: id,
                    branchId: locationId
                }
            });
            if (txCount > 0 || expCount > 0) {
                return {
                    success: false,
                    hasTransactions: true,
                    details: `Account has ${txCount} transactions and ${expCount} expenses.`
                };
            }
            await tx.cashAccount.delete({
                where: {
                    id,
                    locationId
                }
            });
            return {
                success: true,
                hasTransactions: false
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return result;
    } catch (error) {
        console.error('Error deleting cash account:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteCashAccountWithTransactionsAction(id, locationId, deleteTransactions) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            if (deleteTransactions) {
                await tx.cashTransaction.deleteMany({
                    where: {
                        accountId: id,
                        branchId: locationId
                    }
                });
                await tx.expense.updateMany({
                    where: {
                        cashAccountId: id,
                        branchId: locationId
                    },
                    data: {
                        cashAccountId: null,
                        cashTransactionId: null
                    }
                });
            } else {
                await tx.cashTransaction.updateMany({
                    where: {
                        accountId: id,
                        branchId: locationId
                    },
                    data: {
                        accountId: null
                    }
                });
                await tx.expense.updateMany({
                    where: {
                        cashAccountId: id,
                        branchId: locationId
                    },
                    data: {
                        cashAccountId: null,
                        cashTransactionId: null
                    }
                });
            }
            await tx.cashAccount.delete({
                where: {
                    id,
                    branchId: locationId
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting cash account with transactions:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getCashAccountBalanceAction(accountId, locationId) {
    try {
        const account = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].cashAccount.findUnique({
            where: {
                id: accountId
            },
            select: {
                initialBalance: true
            }
        });
        if (!account) return {
            success: false,
            error: 'Account not found'
        };
        const transactions = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].cashTransaction.findMany({
            where: {
                accountId,
                branchId: locationId
            },
            select: {
                amount: true,
                transactionType: true
            }
        });
        let balance = Number(account.initialBalance);
        for (const tx of transactions){
            const amount = Number(tx.amount);
            if (tx.transactionType === 'cash_in' || tx.transactionType === 'transfer_in') {
                balance += amount;
            } else if (tx.transactionType === 'cash_out' || tx.transactionType === 'transfer_out') {
                balance -= amount;
            }
        }
        return {
            success: true,
            data: balance
        };
    } catch (error) {
        console.error('Error calculating account balance:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getCashTransactionsAction(locationId, accountId) {
    try {
        const where = {
            branchId: locationId
        };
        if (accountId) where.accountId = accountId;
        const transactions = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].cashTransaction.findMany({
            where,
            orderBy: [
                {
                    date: 'desc'
                },
                {
                    createdAt: 'desc'
                }
            ]
        });
        return {
            success: true,
            data: transactions.map((t)=>({
                    ...t,
                    created_at: t.createdAt.toISOString(),
                    updated_at: t.updatedAt.toISOString(),
                    user_id: t.userId,
                    account_id: t.accountId,
                    location_id: t.locationId,
                    transaction_type: t.transactionType,
                    person_in_charge: t.personInCharge,
                    payment_method: t.paymentMethod,
                    receipt_image: t.receiptImage
                }))
        };
    } catch (error) {
        console.error('Error fetching cash transactions:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createCashTransactionAction(data) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            if (data.transactionType === 'transfer' && data.toAccountId) {
                const txOut = await tx.cashTransaction.create({
                    data: {
                        userId: data.userId,
                        locationId: data.locationId,
                        accountId: data.accountId,
                        amount: data.amount,
                        transactionType: 'transfer_out',
                        description: data.description,
                        date: data.date ? new Date(data.date) : new Date(),
                        category: data.category || 'Transfer'
                    }
                });
                const txIn = await tx.cashTransaction.create({
                    data: {
                        userId: data.userId,
                        locationId: data.locationId,
                        accountId: data.toAccountId,
                        amount: data.amount,
                        transactionType: 'transfer_in',
                        description: data.description,
                        date: data.date ? new Date(data.date) : new Date(),
                        category: data.category || 'Transfer'
                    }
                });
                return [
                    txOut,
                    txIn
                ];
            } else {
                const transaction = await tx.cashTransaction.create({
                    data: {
                        userId: data.userId,
                        branchId: data.locationId,
                        accountId: data.accountId,
                        amount: data.amount,
                        transactionType: data.transactionType,
                        category: data.category,
                        description: data.description,
                        personInCharge: data.personInCharge,
                        tags: data.tags,
                        date: data.date ? new Date(data.date) : new Date(),
                        paymentMethod: data.paymentMethod,
                        receiptImage: data.receiptImage
                    }
                });
                return transaction;
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error creating cash transaction:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateCashTransactionAction(id, updates) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].cashTransaction.update({
            where: {
                id
            },
            data: {
                accountId: updates.accountId,
                amount: updates.amount,
                transactionType: updates.transactionType,
                category: updates.category,
                description: updates.description,
                personInCharge: updates.personInCharge,
                tags: updates.tags,
                date: updates.date ? new Date(updates.date) : undefined,
                paymentMethod: updates.paymentMethod,
                receiptImage: updates.receiptImage
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error updating cash transaction:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function findCashTransactionAction(id) {
    try {
        const transaction = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].cashTransaction.findUnique({
            where: {
                id
            },
            select: {
                accountId: true
            }
        });
        return {
            success: true,
            data: transaction
        };
    } catch (error) {
        console.error('Error finding cash transaction:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteCashTransactionAction(id, locationId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            await tx.installmentPayment.updateMany({
                where: {
                    cashTransactionId: id
                },
                data: {
                    cashTransactionId: null
                }
            });
            await tx.cashTransaction.delete({
                where: {
                    id,
                    branchId: locationId
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting cash transaction:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getAccountOpeningBalanceAction(accountId, locationId) {
    try {
        const account = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].cashAccount.findFirst({
            where: {
                id: accountId,
                branchId: locationId
            },
            select: {
                initialBalance: true
            }
        });
        return {
            success: true,
            data: Number(account?.initialBalance || 0)
        };
    } catch (error) {
        console.error('Error fetching opening balance:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createBulkCashTransactionsAction(transactions) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const created = [];
            for (const data of transactions){
                if (data.transactionType === 'transfer' && data.toAccountId) {
                    created.push(await tx.cashTransaction.create({
                        data: {
                            userId: data.userId,
                            branchId: data.locationId,
                            accountId: data.accountId,
                            amount: data.amount,
                            transactionType: 'transfer_out',
                            description: data.description,
                            date: data.date ? new Date(data.date) : new Date(),
                            category: data.category || 'Transfer'
                        }
                    }));
                    created.push(await tx.cashTransaction.create({
                        data: {
                            userId: data.userId,
                            branchId: data.locationId,
                            accountId: data.toAccountId,
                            amount: data.amount,
                            transactionType: 'transfer_in',
                            description: data.description,
                            date: data.date ? new Date(data.date) : new Date(),
                            category: data.category || 'Transfer'
                        }
                    }));
                } else {
                    created.push(await tx.cashTransaction.create({
                        data: {
                            userId: data.userId,
                            branchId: data.locationId,
                            accountId: data.accountId,
                            amount: data.amount,
                            transactionType: data.transactionType,
                            category: data.category,
                            description: data.description,
                            personInCharge: data.personInCharge,
                            tags: data.tags,
                            date: data.date ? new Date(data.date) : new Date(),
                            paymentMethod: data.paymentMethod,
                            receiptImage: data.receiptImage
                        }
                    }));
                }
            }
            return created;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/finance');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error creating bulk transactions:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createExpenseAction,
    getExpensesAction,
    updateExpenseAction,
    deleteExpenseAction,
    getInstallmentPaymentsAction,
    createInstallmentPaymentAction,
    updateInstallmentPaymentAction,
    deleteInstallmentPaymentAction,
    linkInstallmentToCashAction,
    unlinkInstallmentFromCashAction,
    getExpenseCategoriesAction,
    createExpenseCategoryAction,
    deleteExpenseCategoryAction,
    createDefaultExpenseCategoriesAction,
    getCashAccountsAction,
    createCashAccountAction,
    updateCashAccountAction,
    deleteCashAccountAction,
    deleteCashAccountWithTransactionsAction,
    getCashAccountBalanceAction,
    getCashTransactionsAction,
    createCashTransactionAction,
    updateCashTransactionAction,
    findCashTransactionAction,
    deleteCashTransactionAction,
    getAccountOpeningBalanceAction,
    createBulkCashTransactionsAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createExpenseAction, "60585d60facf780ea203e9a513a345131d92a44647", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getExpensesAction, "409470390141cd715e0cd220cb79667b8149d7d73e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateExpenseAction, "706dbbbf1c39b7797302e603abda3f1f3fe9b7b97f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteExpenseAction, "402b1004e42a9e932de1baf2f2c3eb1ff7f9959fb0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getInstallmentPaymentsAction, "409fc128a9613fdf42306f06ed612bc6570ab58cd3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createInstallmentPaymentAction, "404980a34b93d7900c1999c99de5e9c34a721b6cb1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateInstallmentPaymentAction, "601898048ee5b7a83933d537bd12b51141bff3c075", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteInstallmentPaymentAction, "40312ab6f2fef038b5dfa6085e408edb82463f6967", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(linkInstallmentToCashAction, "787558103b6686223e72b23ffe2cac99e0e46da6bc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(unlinkInstallmentFromCashAction, "40e27ea01694c068cec3727a5ec76f4f8a00869aeb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getExpenseCategoriesAction, "408ccb982c2e454f89ae93ad2af855fb96040e5a57", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createExpenseCategoryAction, "40fa982818a8acf554af8995eb77b9f6f23aec611f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteExpenseCategoryAction, "40b6e9530f5a2f90f42791650b0ed5394ce737c3a3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createDefaultExpenseCategoriesAction, "70224fdc0bcebdc294431f28757b4c0854ee26605f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCashAccountsAction, "409ef47fe7c43e580ce73d1c617fbf3a84524c288e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCashAccountAction, "40b2fa4f4e24346d700affbbfa7ac2a56ad27ee177", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCashAccountAction, "605be1e591b32585aca8484f92d9f43c2f161c0751", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCashAccountAction, "60c095365f08f3c0aa12126c29d79f890f743053b3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCashAccountWithTransactionsAction, "701a9e53345c4e0bac6a976c440e9fb430f30a0bd7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCashAccountBalanceAction, "60e5b42466b6d684ad910d160f56d8fa9090db65f5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCashTransactionsAction, "60c1e787ca13f5ea88d5f76ab898522279d36799ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCashTransactionAction, "40fc001cac4e34868dbc29be60beb7bc57962d1f28", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCashTransactionAction, "603bcdf9dca15e0d76dc5d53bc6fdc08399006b424", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(findCashTransactionAction, "4079a85d4e128c8e2611caa52132542d6725da2976", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCashTransactionAction, "60d997afdc2c23a833e4c53d9161d85013dc00cc91", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAccountOpeningBalanceAction, "60f6b72ce829331ecdac4a22477911b3d058b44a08", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBulkCashTransactionsAction, "40a86180a574b0d32fb30c9c96c568cbd2f459d9b8", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/carriageInwards.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"401a40126a6be3c97dd25d14cfc873ca400bc6c426":"getCarriageInwardsAction","6067cf8b61c5027d38f0988b8967474e412b5d26d2":"deleteCarriageInwardAction","705bdf7fd490736332f02c668b59820283a4b3c612":"createCarriageInwardAction","707d68c6f165357503733ab94bca948941d99cb8cd":"updateCarriageInwardAction"},"",""] */ __turbopack_context__.s([
    "createCarriageInwardAction",
    ()=>createCarriageInwardAction,
    "deleteCarriageInwardAction",
    ()=>deleteCarriageInwardAction,
    "getCarriageInwardsAction",
    ()=>getCarriageInwardsAction,
    "updateCarriageInwardAction",
    ()=>updateCarriageInwardAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function getCarriageInwardsAction(branchId) {
    try {
        const records = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].carriageInward.findMany({
            where: {
                branchId
            },
            orderBy: [
                {
                    date: 'desc'
                },
                {
                    createdAt: 'desc'
                }
            ]
        });
        return {
            success: true,
            data: records.map((r)=>({
                    id: r.id,
                    userId: r.userId,
                    locationId: r.branchId,
                    supplierName: r.supplierName,
                    details: r.details,
                    amount: Number(r.amount),
                    date: r.date.toISOString(),
                    cashAccountId: r.cashAccountId,
                    cashTransactionId: r.cashTransactionId,
                    createdAt: r.createdAt.toISOString(),
                    updatedAt: r.updatedAt.toISOString()
                }))
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function createCarriageInwardAction(userId, branchId, data) {
    try {
        const record = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].carriageInward.create({
            data: {
                userId,
                branchId,
                supplierName: data.supplierName,
                details: data.details,
                amount: data.amount,
                date: data.date,
                cashAccountId: data.cashAccountId || null
            }
        });
        return {
            success: true,
            data: record
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateCarriageInwardAction(id, branchId, updates) {
    try {
        const updateData = {};
        if (updates.supplierName !== undefined) updateData.supplierName = updates.supplierName;
        if (updates.details !== undefined) updateData.details = updates.details;
        if (updates.amount !== undefined) updateData.amount = updates.amount;
        if (updates.date !== undefined) updateData.date = updates.date;
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].carriageInward.update({
            where: {
                id,
                branchId
            },
            data: updateData
        });
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteCarriageInwardAction(id, branchId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].carriageInward.delete({
            where: {
                id,
                branchId
            }
        });
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCarriageInwardsAction,
    createCarriageInwardAction,
    updateCarriageInwardAction,
    deleteCarriageInwardAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCarriageInwardsAction, "401a40126a6be3c97dd25d14cfc873ca400bc6c426", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCarriageInwardAction, "705bdf7fd490736332f02c668b59820283a4b3c612", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCarriageInwardAction, "707d68c6f165357503733ab94bca948941d99cb8cd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCarriageInwardAction, "6067cf8b61c5027d38f0988b8967474e412b5d26d2", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/messaging.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"402d6990bf87525bb3854033a9cea19b6568dd6301":"createMessageAction","408d48237f21d8d00476f00993221728748460299d":"deleteMessageTemplateAction","40ef0b5b24c05f24dfcf6d1d8ff434a0feeabc5a2f":"createMessageTemplateAction","6058be61cc56724e7e9369bd82e1c32a689abb28ad":"getMessagesAction","6075905953a900422571f548e265b28fd66f4231db":"updateMessageTemplateAction","60c3e1442b619ba5d91f6962028c77ebc9a6508cf2":"getMessageTemplatesAction"},"",""] */ __turbopack_context__.s([
    "createMessageAction",
    ()=>createMessageAction,
    "createMessageTemplateAction",
    ()=>createMessageTemplateAction,
    "deleteMessageTemplateAction",
    ()=>deleteMessageTemplateAction,
    "getMessageTemplatesAction",
    ()=>getMessageTemplatesAction,
    "getMessagesAction",
    ()=>getMessagesAction,
    "updateMessageTemplateAction",
    ()=>updateMessageTemplateAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function getMessagesAction(userId, businessId) {
    try {
        const messages = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].message.findMany({
            where: {
                userId,
                locationId: businessId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return {
            success: true,
            data: messages.map((msg)=>({
                    id: msg.id,
                    userId: msg.userId,
                    locationId: msg.locationId,
                    profileId: msg.profileId,
                    customerId: msg.customerId,
                    phoneNumber: msg.phoneNumber,
                    content: msg.content,
                    status: msg.status,
                    smsCreditsUsed: msg.smsCreditsUsed,
                    templateId: msg.templateId,
                    errorMessage: msg.errorMessage,
                    sentAt: msg.sentAt?.toISOString(),
                    deliveredAt: msg.deliveredAt?.toISOString(),
                    createdAt: msg.createdAt.toISOString(),
                    updatedAt: msg.updatedAt.toISOString(),
                    metadata: msg.metadata
                }))
        };
    } catch (error) {
        console.error('Error fetching messages:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createMessageAction(data) {
    try {
        const message = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].message.create({
            data: {
                userId: data.userId,
                locationId: data.locationId,
                profileId: data.profileId,
                customerId: data.customerId,
                phoneNumber: data.phoneNumber,
                content: data.content,
                status: data.status || 'pending',
                smsCreditsUsed: data.smsCreditsUsed || 0,
                templateId: data.templateId,
                metadata: data.metadata
            }
        });
        // If status is 'sent', deduct credits from profile
        if (message.status === 'sent' && data.profileId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].user.update({
                where: {
                    id: data.profileId
                },
                data: {
                    credits: {
                        decrement: message.smsCreditsUsed
                    }
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/messages');
        return {
            success: true,
            data: message
        };
    } catch (error) {
        console.error('Error creating message:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getMessageTemplatesAction(userId, businessId) {
    try {
        const templates = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].messageTemplate.findMany({
            where: {
                userId,
                locationId: businessId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return {
            success: true,
            data: templates
        };
    } catch (error) {
        console.error('Error fetching message templates:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createMessageTemplateAction(data) {
    try {
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].messageTemplate.create({
            data: {
                userId: data.userId,
                locationId: data.locationId,
                name: data.name,
                content: data.content,
                category: data.category,
                variables: data.variables,
                isDefault: data.isDefault || false
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/messages');
        return {
            success: true,
            data: template
        };
    } catch (error) {
        console.error('Error creating message template:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateMessageTemplateAction(id, data) {
    try {
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].messageTemplate.update({
            where: {
                id
            },
            data: {
                name: data.name,
                content: data.content,
                category: data.category,
                variables: data.variables,
                isDefault: data.isDefault
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/messages');
        return {
            success: true,
            data: template
        };
    } catch (error) {
        console.error('Error updating message template:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteMessageTemplateAction(id) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].messageTemplate.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/messages');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting message template:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getMessagesAction,
    createMessageAction,
    getMessageTemplatesAction,
    createMessageTemplateAction,
    updateMessageTemplateAction,
    deleteMessageTemplateAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMessagesAction, "6058be61cc56724e7e9369bd82e1c32a689abb28ad", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createMessageAction, "402d6990bf87525bb3854033a9cea19b6568dd6301", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMessageTemplatesAction, "60c3e1442b619ba5d91f6962028c77ebc9a6508cf2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createMessageTemplateAction, "40ef0b5b24c05f24dfcf6d1d8ff434a0feeabc5a2f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateMessageTemplateAction, "6075905953a900422571f548e265b28fd66f4231db", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteMessageTemplateAction, "408d48237f21d8d00476f00993221728748460299d", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/customers.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"4018502dbacd3480bffc7b657617ae20f87bae4850":"getCustomerCategoriesAction","40769b7bb26994c005a97106db7b318f1c6e7c381d":"getCustomersAction","4093fbb0e6231db43245a7bc49eb7600ea92032eeb":"deleteCustomerAction","40f7da7e0b6a4622b91b6c1e2f97b2e949af46a767":"deleteCustomerCategoryAction","6019e8f42ae998bfb4b0fa46230e9b231290eaaca9":"mergeCustomersAction","60506bd748152e14f9013fa21d20fd165c498282f1":"updateCustomerAction","60a216718df530b28fa0078c87698f02430b4ef94f":"getCustomerStatsAction","60fa0abb237eb21c2263eb71ed8d7bcef4a93668c5":"updateCustomerCategoryAction","705eae4bc56e302859593c985f8fa243ffd4d03541":"createCustomerAction","70883541b91ebe6d6d86fb8dcec2fcfd3f2c72a128":"createCustomerCategoryAction"},"",""] */ __turbopack_context__.s([
    "createCustomerAction",
    ()=>createCustomerAction,
    "createCustomerCategoryAction",
    ()=>createCustomerCategoryAction,
    "deleteCustomerAction",
    ()=>deleteCustomerAction,
    "deleteCustomerCategoryAction",
    ()=>deleteCustomerCategoryAction,
    "getCustomerCategoriesAction",
    ()=>getCustomerCategoriesAction,
    "getCustomerStatsAction",
    ()=>getCustomerStatsAction,
    "getCustomersAction",
    ()=>getCustomersAction,
    "mergeCustomersAction",
    ()=>mergeCustomersAction,
    "updateCustomerAction",
    ()=>updateCustomerAction,
    "updateCustomerCategoryAction",
    ()=>updateCustomerCategoryAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function getCustomerStatsAction(userId, branchId) {
    try {
        const thisMonth = new Date();
        const startOfMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1);
        // 1. Count customers created this month
        const thisMonthCount = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customer.count({
            where: {
                // Assuming we use agencyId for userId if they are an owner, or it's connected somehow
                // For now, focusing on branchId as that's normally the tenant isolation in the schema
                branchId: branchId,
                createdAt: {
                    gte: startOfMonth
                }
            }
        });
        // 2. Count customers with upcoming backgrounds (for now just count those who have a birthday set)
        const withBirthdays = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customer.count({
            where: {
                branchId: branchId,
                birthday: {
                    not: null
                }
            }
        });
        return {
            success: true,
            data: {
                withBirthdays,
                thisMonth: thisMonthCount
            }
        };
    } catch (error) {
        console.error('Error fetching customer stats:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function mergeCustomersAction(primaryCustomerId, duplicateIds) {
    try {
        if (!primaryCustomerId || duplicateIds.length === 0) {
            return {
                success: false,
                error: 'Invalid selection'
            };
        }
        // Use a transaction to ensure all operations succeed or fail together
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            // 1. Update sales to point to primary customer
            // In Prisma, assuming relation is through customerId
            await tx.sale.updateMany({
                where: {
                    customerId: {
                        in: duplicateIds
                    }
                },
                data: {
                    customerId: primaryCustomerId
                }
            });
            // Note: The original code also updated messages. 
            // If there's a Message model connected to customers, add it here.
            // await tx.message.updateMany({
            //     where: { customerId: { in: duplicateIds } },
            //     data: { customerId: primaryCustomerId }
            // });
            // 3. Delete duplicate customers
            await tx.customer.deleteMany({
                where: {
                    id: {
                        in: duplicateIds
                    }
                }
            });
        });
        // Revalidate customers list
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/customers');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error merging customers:', error);
        return {
            success: false,
            error: error.message || 'Failed to merge customers'
        };
    }
}
async function getCustomersAction(branchId) {
    try {
        const customers = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customer.findMany({
            where: {
                branchId
            },
            orderBy: {
                name: 'asc'
            }
        });
        const count = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customer.count({
            where: {
                branchId
            }
        });
        // Map Prisma Customer model to the shape expected by useCustomers hook
        const mappedCustomers = customers.map((c)=>({
                id: c.id,
                fullName: c.name,
                phoneNumber: c.phone,
                email: c.email,
                birthday: c.birthday ? c.birthday.toISOString() : null,
                gender: c.gender,
                location: c.address,
                categoryId: c.categoryId,
                notes: c.notes,
                tags: c.tags || [],
                socialMedia: c.socialMedia || null,
                createdAt: c.createdAt.toISOString(),
                updatedAt: c.updatedAt.toISOString()
            }));
        return {
            success: true,
            data: {
                customers: mappedCustomers,
                count
            }
        };
    } catch (error) {
        console.error('Error fetching customers:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createCustomerAction(branchId, userId, data) {
    try {
        const newCustomer = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customer.create({
            data: {
                branchId: branchId,
                adminId: userId,
                name: data.fullName,
                phone: data.phoneNumber || null,
                email: data.email || null,
                birthday: data.birthday ? new Date(data.birthday) : null,
                gender: data.gender || null,
                address: data.location || null,
                categoryId: data.categoryId || null,
                notes: data.notes || null,
                tags: data.tags || [],
                socialMedia: data.socialMedia || null
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/customers');
        return {
            success: true,
            data: newCustomer
        };
    } catch (error) {
        console.error('Error creating customer:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateCustomerAction(customerId, data) {
    try {
        const updateData = {};
        if (data.fullName !== undefined) updateData.name = data.fullName;
        if (data.phoneNumber !== undefined) updateData.phone = data.phoneNumber;
        if (data.email !== undefined) updateData.email = data.email;
        if (data.birthday !== undefined) updateData.birthday = data.birthday ? new Date(data.birthday) : null;
        if (data.gender !== undefined) updateData.gender = data.gender;
        if (data.location !== undefined) updateData.address = data.location;
        if (data.categoryId !== undefined) updateData.categoryId = data.categoryId;
        if (data.notes !== undefined) updateData.notes = data.notes;
        if (data.tags !== undefined) updateData.tags = data.tags;
        if (data.socialMedia !== undefined) updateData.socialMedia = data.socialMedia;
        const updatedCustomer = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customer.update({
            where: {
                id: customerId
            },
            data: updateData
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/customers');
        return {
            success: true,
            data: updatedCustomer
        };
    } catch (error) {
        console.error('Error updating customer:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteCustomerAction(customerId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customer.delete({
            where: {
                id: customerId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/customers');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting customer:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getCustomerCategoriesAction(branchId) {
    try {
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customerCategory.findMany({
            where: {
                branchId
            },
            orderBy: {
                name: 'asc'
            }
        });
        const formattedCategories = categories.map((c)=>({
                id: c.id,
                name: c.name,
                isDefault: c.isDefault,
                createdAt: c.createdAt.toISOString(),
                updatedAt: c.updatedAt.toISOString()
            }));
        return {
            success: true,
            data: formattedCategories
        };
    } catch (error) {
        console.error('Error fetching customer categories:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createCustomerCategoryAction(branchId, userId, name) {
    try {
        const newCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customerCategory.create({
            data: {
                branchId: branchId,
                name: name.trim(),
                isDefault: false,
                userId: userId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/customers');
        return {
            success: true,
            data: newCategory
        };
    } catch (error) {
        console.error('Error creating customer category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateCustomerCategoryAction(categoryId, name) {
    try {
        const updatedCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customerCategory.update({
            where: {
                id: categoryId
            },
            data: {
                name: name.trim()
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/customers');
        return {
            success: true,
            data: updatedCategory
        };
    } catch (error) {
        console.error('Error updating customer category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteCustomerCategoryAction(categoryId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customerCategory.delete({
            where: {
                id: categoryId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/customers');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting customer category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCustomerStatsAction,
    mergeCustomersAction,
    getCustomersAction,
    createCustomerAction,
    updateCustomerAction,
    deleteCustomerAction,
    getCustomerCategoriesAction,
    createCustomerCategoryAction,
    updateCustomerCategoryAction,
    deleteCustomerCategoryAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCustomerStatsAction, "60a216718df530b28fa0078c87698f02430b4ef94f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(mergeCustomersAction, "6019e8f42ae998bfb4b0fa46230e9b231290eaaca9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCustomersAction, "40769b7bb26994c005a97106db7b318f1c6e7c381d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCustomerAction, "705eae4bc56e302859593c985f8fa243ffd4d03541", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCustomerAction, "60506bd748152e14f9013fa21d20fd165c498282f1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCustomerAction, "4093fbb0e6231db43245a7bc49eb7600ea92032eeb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCustomerCategoriesAction, "4018502dbacd3480bffc7b657617ae20f87bae4850", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCustomerCategoryAction, "70883541b91ebe6d6d86fb8dcec2fcfd3f2c72a128", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCustomerCategoryAction, "60fa0abb237eb21c2263eb71ed8d7bcef4a93668c5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteCustomerCategoryAction, "40f7da7e0b6a4622b91b6c1e2f97b2e949af46a767", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/tasks.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"408665a9c99831807561be76f45a20476f335b6d29":"createTaskAction","60516af22bac482e52c1c8e79b0cf53666369f4f75":"createDefaultTaskCategoriesAction","6078d5808b2257e82dfa865fc986f90117bd88dde2":"getTasksAction","609476198f66b25325259a2209d0f8835abe35284c":"getTaskCategoriesAction","60a75b73cc55d4450e4ebea98673483ce5cd918788":"deleteTaskCategoryAction","60ce990979d11eff8ba3f5ddde2ad95f27760eca3f":"deleteTaskAction","7006e03c6072cbb7dece29e39d895ac857b4a713fc":"updateTaskAction","701a7f434219bd8878fff6d4b3b75946a1b530c33b":"bulkUpdateTasksAction","705aff83b2b9e1aba71aad2466fd6b8fea51208291":"createTaskCategoryAction","706e3fbb522a276a36fc917483899cbce414828e41":"updateTaskCategoryAction"},"",""] */ __turbopack_context__.s([
    "bulkUpdateTasksAction",
    ()=>bulkUpdateTasksAction,
    "createDefaultTaskCategoriesAction",
    ()=>createDefaultTaskCategoriesAction,
    "createTaskAction",
    ()=>createTaskAction,
    "createTaskCategoryAction",
    ()=>createTaskCategoryAction,
    "deleteTaskAction",
    ()=>deleteTaskAction,
    "deleteTaskCategoryAction",
    ()=>deleteTaskCategoryAction,
    "getTaskCategoriesAction",
    ()=>getTaskCategoriesAction,
    "getTasksAction",
    ()=>getTasksAction,
    "updateTaskAction",
    ()=>updateTaskAction,
    "updateTaskCategoryAction",
    ()=>updateTaskCategoryAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addWeeks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMonths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function getTasksAction(userId, locationId) {
    try {
        const tasks = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].task.findMany({
            where: {
                createdById: userId,
                branchId: locationId
            },
            orderBy: {
                dueDate: 'asc'
            }
        });
        return {
            success: true,
            data: tasks.map((t)=>({
                    ...t,
                    user_id: t.userId,
                    location_id: t.locationId,
                    due_date: t.dueDate.toISOString().split('T')[0],
                    completed_at: t.completedAt?.toISOString() || null,
                    created_at: t.createdAt.toISOString(),
                    updated_at: t.updatedAt.toISOString(),
                    reminder_enabled: t.reminderEnabled,
                    reminder_time: t.reminderTime,
                    is_recurring: t.isRecurring,
                    recurrence_type: t.recurrenceType,
                    recurrence_end_date: t.recurrenceEndDate?.toISOString().split('T')[0] || null,
                    parent_task_id: t.parentTaskId,
                    recurrence_count: t.recurrenceCount
                }))
        };
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createTaskAction(data) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            // 1. Create the main task
            const task = await tx.task.create({
                data: {
                    createdById: data.userId,
                    branchId: data.locationId,
                    title: data.title,
                    description: data.description || null,
                    priority: data.priority,
                    dueDate: data.dueDate,
                    category: data.category || null,
                    reminderEnabled: data.reminderEnabled || false,
                    reminderTime: data.reminderTime || null,
                    isRecurring: data.isRecurring || false,
                    recurrenceType: data.recurrenceType || null,
                    recurrenceEndDate: data.recurrenceEndDate || null
                }
            });
            // 2. If it's recurring, create instances
            if (task.isRecurring && task.recurrenceType && task.recurrenceEndDate) {
                const instances = [];
                let currentDate = task.dueDate;
                const endDate = task.recurrenceEndDate;
                let count = 0;
                while(count < 365){
                    let nextDate;
                    switch(task.recurrenceType){
                        case 'daily':
                            nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(currentDate, 1);
                            break;
                        case 'weekly':
                            nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addWeeks"])(currentDate, 1);
                            break;
                        case 'monthly':
                            nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addMonths"])(currentDate, 1);
                            break;
                        default:
                            nextDate = currentDate;
                    }
                    if (nextDate > endDate) break;
                    instances.push({
                        createdById: task.createdById,
                        branchId: task.branchId,
                        title: task.title,
                        description: task.description,
                        priority: task.priority,
                        dueDate: nextDate,
                        category: task.category,
                        completed: false,
                        reminderEnabled: task.reminderEnabled,
                        reminderTime: task.reminderTime,
                        isRecurring: false,
                        parentTaskId: task.id,
                        recurrenceCount: count + 1
                    });
                    currentDate = nextDate;
                    count++;
                }
                if (instances.length > 0) {
                    await tx.task.createMany({
                        data: instances
                    });
                }
            }
            return task;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/tasks');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error creating task:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateTaskAction(id, userId, updates) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            const task = await tx.task.update({
                where: {
                    id,
                    createdById: userId
                },
                data: {
                    ...updates
                }
            });
            // If recurring settings changed, we might need to recreate instances
            if (task.isRecurring && (updates.recurrenceType || updates.recurrenceEndDate)) {
                // Delete existing pending instances
                await tx.task.deleteMany({
                    where: {
                        parentTaskId: id,
                        completed: false
                    }
                });
                // Create new ones
                if (task.recurrenceType && task.recurrenceEndDate) {
                    const instances = [];
                    let currentDate = task.dueDate;
                    const endDate = task.recurrenceEndDate;
                    let count = 0;
                    while(count < 365){
                        let nextDate;
                        switch(task.recurrenceType){
                            case 'daily':
                                nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addDays"])(currentDate, 1);
                                break;
                            case 'weekly':
                                nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addWeeks"])(currentDate, 1);
                                break;
                            case 'monthly':
                                nextDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addMonths"])(currentDate, 1);
                                break;
                            default:
                                nextDate = currentDate;
                        }
                        if (nextDate > endDate) break;
                        instances.push({
                            createdById: task.createdById,
                            branchId: task.branchId,
                            title: task.title,
                            description: task.description,
                            priority: task.priority,
                            dueDate: nextDate,
                            category: task.category,
                            isRecurring: false,
                            parentTaskId: task.id,
                            recurrenceCount: count + 1
                        });
                        currentDate = nextDate;
                        count++;
                    }
                    if (instances.length > 0) {
                        await tx.task.createMany({
                            data: instances
                        });
                    }
                }
            }
            return task;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/tasks');
        return {
            success: true,
            data: result
        };
    } catch (error) {
        console.error('Error updating task:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteTaskAction(id, userId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].$transaction(async (tx)=>{
            // Delete instances first
            await tx.task.deleteMany({
                where: {
                    parentTaskId: id,
                    completed: false
                }
            });
            await tx.task.delete({
                where: {
                    id,
                    createdById: userId
                }
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/tasks');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting task:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function bulkUpdateTasksAction(ids, userId, updates) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].task.updateMany({
            where: {
                id: {
                    in: ids
                },
                createdById: userId
            },
            data: updates
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/tasks');
        return {
            success: true
        };
    } catch (error) {
        console.error('Error bulk updating tasks:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getTaskCategoriesAction(userId, locationId) {
    try {
        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].taskCategory.findMany({
            where: {
                userId,
                branchId: locationId
            },
            orderBy: {
                name: 'asc'
            }
        });
        return {
            success: true,
            data: categories.map((c)=>({
                    ...c,
                    user_id: c.userId,
                    location_id: c.locationId,
                    created_at: c.createdAt.toISOString(),
                    updated_at: c.updatedAt.toISOString()
                }))
        };
    } catch (error) {
        console.error('Error fetching categories:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createTaskCategoryAction(userId, locationId, name) {
    try {
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].taskCategory.create({
            data: {
                userId,
                branchId: locationId,
                name
            }
        });
        return {
            success: true,
            data: category
        };
    } catch (error) {
        console.error('Error creating category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function updateTaskCategoryAction(id, userId, name) {
    try {
        const category = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].taskCategory.update({
            where: {
                id,
                userId
            },
            data: {
                name
            }
        });
        return {
            success: true,
            data: category
        };
    } catch (error) {
        console.error('Error updating category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function deleteTaskCategoryAction(id, userId) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].taskCategory.delete({
            where: {
                id,
                userId
            }
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('Error deleting category:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function createDefaultTaskCategoriesAction(userId, locationId) {
    try {
        const defaultNames = [
            'General',
            'Marketing',
            'Operations',
            'Finance',
            'Follow-up'
        ];
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].taskCategory.findMany({
            where: {
                userId,
                branchId: locationId,
                name: {
                    in: defaultNames
                }
            },
            select: {
                name: true
            }
        });
        const existingNames = new Set(existing.map((e)=>e.name));
        const toCreate = defaultNames.filter((n)=>!existingNames.has(n)).map((name)=>({
                userId,
                branchId: locationId,
                name
            }));
        if (toCreate.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].taskCategory.createMany({
                data: toCreate
            });
        }
        return {
            success: true
        };
    } catch (error) {
        console.error('Error creating default categories:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getTasksAction,
    createTaskAction,
    updateTaskAction,
    deleteTaskAction,
    bulkUpdateTasksAction,
    getTaskCategoriesAction,
    createTaskCategoryAction,
    updateTaskCategoryAction,
    deleteTaskCategoryAction,
    createDefaultTaskCategoriesAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTasksAction, "6078d5808b2257e82dfa865fc986f90117bd88dde2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTaskAction, "408665a9c99831807561be76f45a20476f335b6d29", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTaskAction, "7006e03c6072cbb7dece29e39d895ac857b4a713fc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTaskAction, "60ce990979d11eff8ba3f5ddde2ad95f27760eca3f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bulkUpdateTasksAction, "701a7f434219bd8878fff6d4b3b75946a1b530c33b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTaskCategoriesAction, "609476198f66b25325259a2209d0f8835abe35284c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTaskCategoryAction, "705aff83b2b9e1aba71aad2466fd6b8fea51208291", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTaskCategoryAction, "706e3fbb522a276a36fc917483899cbce414828e41", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTaskCategoryAction, "60a75b73cc55d4450e4ebea98673483ce5cd918788", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createDefaultTaskCategoriesAction, "60516af22bac482e52c1c8e79b0cf53666369f4f75", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/activity.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40b04c541d9ff35205d318046476e78cb072b4d271":"logActivityAction","7095e398211380ba519f0a68c6104d3001be48ab8a":"getActivityHistoryByTypeAction","7ca4e77183ddba6391bfc83235d1b209e6a56a061b":"getActivityHistoryAction"},"",""] */ __turbopack_context__.s([
    "getActivityHistoryAction",
    ()=>getActivityHistoryAction,
    "getActivityHistoryByTypeAction",
    ()=>getActivityHistoryByTypeAction,
    "logActivityAction",
    ()=>logActivityAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function logActivityAction(data) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].activityHistory.create({
            data: {
                userId: data.userId,
                locationId: data.locationId,
                activityType: data.activityType,
                module: data.module,
                entityType: data.entityType,
                entityId: data.entityId || null,
                entityName: data.entityName,
                description: data.description,
                metadata: data.metadata || null,
                profileId: data.profileId || null,
                profileName: data.profileName || null
            }
        });
        // revalidatePath('/history'); // Typically history page might need refresh
        return {
            success: true
        };
    } catch (error) {
        console.error('Error logging activity:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getActivityHistoryAction(locationId, userId, page = 1, pageSize = 20, filters) {
    try {
        const skip = (page - 1) * pageSize;
        const where = {
            locationId,
            userId
        };
        if (filters) {
            if (filters.activityType && filters.activityType !== 'ALL') {
                where.activityType = filters.activityType;
            }
            if (filters.module && filters.module !== 'ALL') {
                where.module = filters.module;
            }
            if (filters.search) {
                where.OR = [
                    {
                        entityName: {
                            contains: filters.search,
                            mode: 'insensitive'
                        }
                    },
                    {
                        description: {
                            contains: filters.search,
                            mode: 'insensitive'
                        }
                    }
                ];
            }
            if (filters.dateFrom || filters.dateTo) {
                where.createdAt = {};
                if (filters.dateFrom) {
                    where.createdAt.gte = new Date(filters.dateFrom);
                }
                if (filters.dateTo) {
                    const toDate = new Date(filters.dateTo);
                    toDate.setHours(23, 59, 59, 999);
                    where.createdAt.lte = toDate;
                }
            }
        }
        const [activities, count] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].activityHistory.findMany({
                where,
                skip,
                take: pageSize,
                orderBy: {
                    createdAt: 'desc'
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].activityHistory.count({
                where
            })
        ]);
        return {
            success: true,
            data: {
                activities: activities.map((a)=>({
                        ...a,
                        created_at: a.createdAt.toISOString(),
                        activity_type: a.activityType,
                        location_id: a.locationId,
                        user_id: a.userId,
                        entity_type: a.entityType,
                        entity_id: a.entityId,
                        entity_name: a.entityName,
                        profile_id: a.profileId,
                        profile_name: a.profileName
                    })),
                count
            }
        };
    } catch (error) {
        console.error('Error fetching activity history:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getActivityHistoryByTypeAction(locationId, module, activityType) {
    try {
        const records = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].activityHistory.findMany({
            where: {
                locationId,
                module: module,
                activityType: activityType
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return {
            success: true,
            data: records.map((a)=>({
                    ...a,
                    createdAt: a.createdAt.toISOString(),
                    profileName: a.profileName
                }))
        };
    } catch (error) {
        console.error('Error fetching activity history by type:', error);
        return {
            success: false,
            error: error.message,
            data: []
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    logActivityAction,
    getActivityHistoryAction,
    getActivityHistoryByTypeAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logActivityAction, "40b04c541d9ff35205d318046476e78cb072b4d271", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActivityHistoryAction, "7ca4e77183ddba6391bfc83235d1b209e6a56a061b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getActivityHistoryByTypeAction, "7095e398211380ba519f0a68c6104d3001be48ab8a", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/analytics.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40eed2520912c359198a3f78f64a53e466c47a8e83":"getGlobalInventoryStatsAction","700a664ea90ae36ba9cc8af94f8cdb2189b309aa19":"getTotalExpensesAction"},"",""] */ __turbopack_context__.s([
    "getGlobalInventoryStatsAction",
    ()=>getGlobalInventoryStatsAction,
    "getTotalExpensesAction",
    ()=>getTotalExpensesAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function getGlobalInventoryStatsAction(businessId) {
    try {
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
            where: {
                branchId: businessId
            },
            select: {
                stock: true,
                minStock: true,
                costPrice: true,
                sellingPrice: true
            }
        });
        const stats = products.reduce((acc, p)=>{
            const stock = p.stock || 0;
            const cost = p.costPrice || 0;
            const price = p.sellingPrice || 0;
            const minStock = p.minStock || 0;
            acc.totalCostValue += stock * cost;
            acc.totalStockValue += stock * price;
            if (stock <= 0) {
                acc.outOfStockCount += 1;
            } else if (stock <= minStock) {
                acc.lowStockCount += 1;
            }
            return acc;
        }, {
            totalCostValue: 0,
            totalStockValue: 0,
            lowStockCount: 0,
            outOfStockCount: 0
        });
        return {
            success: true,
            data: stats
        };
    } catch (error) {
        console.error('Error fetching global inventory stats:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function getTotalExpensesAction(businessId, startDate, endDate) {
    try {
        const where = {
            branchId: businessId
        };
        if (startDate || endDate) {
            where.date = {};
            if (startDate) {
                where.date.gte = new Date(startDate);
            }
            if (endDate) {
                where.date.lte = new Date(endDate);
            }
        }
        const expenses = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].expense.findMany({
            where,
            select: {
                amount: true
            }
        });
        const total = expenses.reduce((sum, e)=>sum + Number(e.amount), 0);
        return {
            success: true,
            data: total
        };
    } catch (error) {
        console.error('Error fetching total expenses:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getGlobalInventoryStatsAction,
    getTotalExpensesAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getGlobalInventoryStatsAction, "40eed2520912c359198a3f78f64a53e466c47a8e83", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTotalExpensesAction, "700a664ea90ae36ba9cc8af94f8cdb2189b309aa19", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/actions/expenses.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"4090e08c9c15013930484002c83ca635f4ecae6e08":"getLatestSubscriptionPaymentAction","60b80bd2ba6babca9e823b6adbcf493420f365af39":"getBusinessBackupDataAction","70a745e4fbb6ba5f390975a2c8f214da73e85e5a26":"getExpensesForChartAction","7c3f8071e7e9f15983577bb14f0b27bb8ee4f8335b":"createSubscriptionPaymentAction"},"",""] */ __turbopack_context__.s([
    "createSubscriptionPaymentAction",
    ()=>createSubscriptionPaymentAction,
    "getBusinessBackupDataAction",
    ()=>getBusinessBackupDataAction,
    "getExpensesForChartAction",
    ()=>getExpensesForChartAction,
    "getLatestSubscriptionPaymentAction",
    ()=>getLatestSubscriptionPaymentAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/prisma/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function getExpensesForChartAction(branchId, from, to) {
    try {
        const where = {
            branchId
        };
        if (from || to) {
            where.date = {};
            if (from) where.date.gte = new Date(from);
            if (to) where.date.lte = new Date(to);
        }
        const expenses = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].expense.findMany({
            where,
            select: {
                date: true,
                amount: true
            }
        });
        return expenses.map((e)=>({
                date: e.date.toISOString(),
                amount: Number(e.amount)
            }));
    } catch (error) {
        console.error('[getExpensesForChartAction]', error);
        return [];
    }
}
async function getBusinessBackupDataAction(userId, branchId) {
    try {
        const [products, categories, stockHistory, sales, customers, expenses, expenseCategories, tasks, taskCategories, carriageInwards] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].product.findMany({
                where: {
                    branchId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].category.findMany({
                where: {
                    branchId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].productHistory.findMany({
                where: {
                    locationId: branchId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].sale.findMany({
                where: {
                    branchId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].customer.findMany({
                where: {
                    branchId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].expense.findMany({
                where: {
                    branchId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].expenseCategory.findMany({
                where: {
                    branchId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].task.findMany({
                where: {
                    branchId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].taskCategory.findMany({
                where: {
                    branchId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].carriageInward.findMany({
                where: {
                    branchId
                }
            })
        ]);
        return {
            success: true,
            data: {
                products,
                product_categories: categories,
                stock_history: stockHistory,
                sales,
                customers,
                expenses,
                expense_categories: expenseCategories,
                tasks,
                task_categories: taskCategories,
                carriage_inwards: carriageInwards
            }
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function createSubscriptionPaymentAction(purchaseId, userId, branchId, amount, billingCycle) {
    try {
        // Use a raw query or custom model if subscription_payments is not in Prisma schema
        // For now, log and return – implement when schema supports it
        console.log('[createSubscriptionPaymentAction] Payment record:', {
            purchaseId,
            userId,
            branchId,
            amount,
            billingCycle
        });
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}
async function getLatestSubscriptionPaymentAction(userId) {
    try {
        // Return null if subscription_payments table isn't in Prisma schema yet
        return {
            success: true,
            data: null
        };
    } catch (error) {
        return {
            success: false,
            data: null,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getExpensesForChartAction,
    getBusinessBackupDataAction,
    createSubscriptionPaymentAction,
    getLatestSubscriptionPaymentAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getExpensesForChartAction, "70a745e4fbb6ba5f390975a2c8f214da73e85e5a26", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBusinessBackupDataAction, "60b80bd2ba6babca9e823b6adbcf493420f365af39", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSubscriptionPaymentAction, "7c3f8071e7e9f15983577bb14f0b27bb8ee4f8335b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLatestSubscriptionPaymentAction, "4090e08c9c15013930484002c83ca635f4ecae6e08", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/[[...slug]]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/business.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/actions/profiles.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/actions/business-settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/actions/products.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/src/app/actions/sales.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE7 => \"[project]/src/app/actions/finance.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE8 => \"[project]/src/app/actions/carriageInwards.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE9 => \"[project]/src/app/actions/messaging.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE10 => \"[project]/src/app/actions/customers.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE11 => \"[project]/src/app/actions/tasks.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE12 => \"[project]/src/app/actions/activity.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE13 => \"[project]/src/app/actions/analytics.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE14 => \"[project]/src/app/actions/expenses.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/business.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/profiles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/business-settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/sales.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/finance.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/carriageInwards.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/messaging.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/customers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/tasks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/activity.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/analytics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$expenses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/expenses.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$expenses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$expenses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/[[...slug]]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions/business.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/app/actions/profiles.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/app/actions/business-settings.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/app/actions/products.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/src/app/actions/sales.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE7 => \"[project]/src/app/actions/finance.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE8 => \"[project]/src/app/actions/carriageInwards.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE9 => \"[project]/src/app/actions/messaging.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE10 => \"[project]/src/app/actions/customers.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE11 => \"[project]/src/app/actions/tasks.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE12 => \"[project]/src/app/actions/activity.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE13 => \"[project]/src/app/actions/analytics.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE14 => \"[project]/src/app/actions/expenses.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "40042ed86f5c3c67bbe3a34b4e59c7e9f7036a54f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeBusinessPasswordAction"],
    "40073ee25d9bf200442f2ce2592c46436bdf9f3f2a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOnboardingStatusAction"],
    "40075324c8acb894ef7059746c65a1e926913a88fd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsForBarcodeScannerAction"],
    "4015e0e0d53fa37fce5fedeed35974e2fca4ebd10b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSalesCategoriesAction"],
    "4018502dbacd3480bffc7b657617ae20f87bae4850",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomerCategoriesAction"],
    "401a40126a6be3c97dd25d14cfc873ca400bc6c426",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCarriageInwardsAction"],
    "402b1004e42a9e932de1baf2f2c3eb1ff7f9959fb0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteExpenseAction"],
    "402d6990bf87525bb3854033a9cea19b6568dd6301",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMessageAction"],
    "402f4a409f748bd34ce4e9c8485a0fab492cca0147",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSalesCategoryAction"],
    "40312ab6f2fef038b5dfa6085e408edb82463f6967",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteInstallmentPaymentAction"],
    "4034881b33ece4d2c3bb0e25c4e68c3715e705d9ab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProductCategoryAction"],
    "403d03ebd9e84dcdccfe86665d922ccea6d0a3727f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStockRepairsPreviewAction"],
    "4044f66848049a050e121cf2436741285f5fe57d29",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProfileAction"],
    "404980a34b93d7900c1999c99de5e9c34a721b6cb1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createInstallmentPaymentAction"],
    "404dd4aaa90e099e06b884512b16abb99178afa8f9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductCategoriesAction"],
    "4067b4df65a668010fc5081a80928c8b7ed310e2f4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsAction"],
    "40769b7bb26994c005a97106db7b318f1c6e7c381d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomersAction"],
    "4079a85d4e128c8e2611caa52132542d6725da2976",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findCashTransactionAction"],
    "408665a9c99831807561be76f45a20476f335b6d29",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTaskAction"],
    "4087f77070d72c1160296631642063d84397e184d9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStockHistoryAction"],
    "408ccb982c2e454f89ae93ad2af855fb96040e5a57",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExpenseCategoriesAction"],
    "408d48237f21d8d00476f00993221728748460299d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteMessageTemplateAction"],
    "4093fbb0e6231db43245a7bc49eb7600ea92032eeb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCustomerAction"],
    "409470390141cd715e0cd220cb79667b8149d7d73e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExpensesAction"],
    "409ef47fe7c43e580ce73d1c617fbf3a84524c288e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCashAccountsAction"],
    "409fc128a9613fdf42306f06ed612bc6570ab58cd3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInstallmentPaymentsAction"],
    "40a86180a574b0d32fb30c9c96c568cbd2f459d9b8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBulkCashTransactionsAction"],
    "40b04c541d9ff35205d318046476e78cb072b4d271",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logActivityAction"],
    "40b2fa4f4e24346d700affbbfa7ac2a56ad27ee177",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCashAccountAction"],
    "40b6e9530f5a2f90f42791650b0ed5394ce737c3a3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteExpenseCategoryAction"],
    "40b9b369f2de89a30b7e0d238c556a8097e8124448",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessLocationsAction"],
    "40d1def1d4b8b420e098a261e791a8443f4e2fa1fe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProfilesAction"],
    "40d5b96536ea3c10ea4d2018a712fa2a14c62694d6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActivityByEntityIdsAction"],
    "40d77c7a950f7558001cd1309943b62b2f2b6ba221",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProductAction"],
    "40daf39292ed77bac86e68b053e063b099dadbda22",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextReceiptNumberAction"],
    "40de351351ef1c777658488fc7d0ea14a31652fa0f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProductAction"],
    "40e10c069514f306d97842d59c289da46a20add653",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBusinessSettingsAction"],
    "40e27ea01694c068cec3727a5ec76f4f8a00869aeb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unlinkInstallmentFromCashAction"],
    "40eba5290c662a74f9b17731241be6565b6ba17367",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRequisitionAction"],
    "40ef0b5b24c05f24dfcf6d1d8ff434a0feeabc5a2f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMessageTemplateAction"],
    "40f21a04e6586927430257bf00ea5ca3c45eca2b7d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signUpAction"],
    "40f7da7e0b6a4622b91b6c1e2f97b2e949af46a767",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCustomerCategoryAction"],
    "40f8ff4d50c48e201bfa61facb063e2eae6b253480",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductStatsAction"],
    "40f9eb6b821e58b8ee2ba7cfb4a7c1c22fa7b44891",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAccountStatusAction"],
    "40fa982818a8acf554af8995eb77b9f6f23aec611f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createExpenseCategoryAction"],
    "40fc001cac4e34868dbc29be60beb7bc57962d1f28",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCashTransactionAction"],
    "600857ecf6299f015defc0184c1ff16628fa38538c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStockHistoryAction"],
    "600e5e52b25ce768683c897c333052b9b8de86582b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resetBusinessAction"],
    "600e96d17baa6280af8fa4338d2f2ba09c3eab361e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProductsAction"],
    "601898048ee5b7a83933d537bd12b51141bff3c075",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateInstallmentPaymentAction"],
    "6024f56e078e458896c223d462d138a5f485546baf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSaleAction"],
    "6025943fc262cab9b5aa8df539c3b5c25e1776ba60",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSaleCustomerAction"],
    "60287df686caf7605998e84cab3df776727e94dada",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomerByNameAction"],
    "603140a0abaf8a1d2222432df4c288e4c92ca1012e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSalesCategoryAction"],
    "603bcdf9dca15e0d76dc5d53bc6fdc08399006b424",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCashTransactionAction"],
    "6047687338d37d1542a65b820f4238160558fb7482",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyBusinessPasswordAction"],
    "604f673e62b6216bb802c07c39e431edda48cee74a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProfileAction"],
    "60506bd748152e14f9013fa21d20fd165c498282f1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCustomerAction"],
    "60516af22bac482e52c1c8e79b0cf53666369f4f75",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDefaultTaskCategoriesAction"],
    "60570f3a231bf44a90cdc4aadeaeedb2a72c0d0cff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProfileAction"],
    "60585d60facf780ea203e9a513a345131d92a44647",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createExpenseAction"],
    "6058be61cc56724e7e9369bd82e1c32a689abb28ad",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessagesAction"],
    "605be1e591b32585aca8484f92d9f43c2f161c0751",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCashAccountAction"],
    "6067cf8b61c5027d38f0988b8967474e412b5d26d2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCarriageInwardAction"],
    "606ff718e40150a307a01cb6af6d3476260edbd5ee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setBusinessPasswordAction"],
    "607241ec6de7cf4ac80578c30a3a4bc051ec9a9cae",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteStockHistoryEntriesByReferenceAction"],
    "6075905953a900422571f548e265b28fd66f4231db",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateMessageTemplateAction"],
    "6078d5808b2257e82dfa865fc986f90117bd88dde2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTasksAction"],
    "607c22123dc2728e830f8ac8e642f36c1a0f3d0e07",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequisitionsAction"],
    "60870607066785573be74a9960cf5220573a81fdb0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBusinessAction"],
    "608cb60a1da7b007825f807be3e16906d959f678c7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["repairStockChainsAction"],
    "6090b87835c33a95a5aafe79519f44f481abd623fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductReconciliationAction"],
    "609476198f66b25325259a2209d0f8835abe35284c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTaskCategoriesAction"],
    "609b8c32a570899b81791858dba0aee579337a2235",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductsBulkAction"],
    "60a75b73cc55d4450e4ebea98673483ce5cd918788",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTaskCategoryAction"],
    "60b6dc3852b559049fe1f9789fecf76233156c843c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signInAction"],
    "60c095365f08f3c0aa12126c29d79f890f743053b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCashAccountAction"],
    "60c1e787ca13f5ea88d5f76ab898522279d36799ed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCashTransactionsAction"],
    "60c24e83b6be5d002fb79164133677812fae403d94",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductCategoryAction"],
    "60c2a6126733bf689eb827deaad62c6af7a740cdff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBusinessAction"],
    "60c39f510779a90656f2e7a2d8e6d5d4b163e1175c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lookupProductByBarcodeAction"],
    "60c3e1442b619ba5d91f6962028c77ebc9a6508cf2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessageTemplatesAction"],
    "60c80b6e8d70c1cd11332fb59eec3790b8c4260c46",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteRequisitionAction"],
    "60ce990979d11eff8ba3f5ddde2ad95f27760eca3f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTaskAction"],
    "60d199ed6ebdb264ab3569d97f92202a15a4ea5a1e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductAction"],
    "60d2e6658abc20e397c389a36fe10b6b5461fb97b4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsByIdsAction"],
    "60d319d4137f823c456bc42755496f39a009c6cdb2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateStockHistoryDatesAction"],
    "60d714856b594297f3f7728ab4c8b1083c1f69633a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSaleCashTransactionAction"],
    "60d997afdc2c23a833e4c53d9161d85013dc00cc91",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCashTransactionAction"],
    "60e5b42466b6d684ad910d160f56d8fa9090db65f5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCashAccountBalanceAction"],
    "60f6b72ce829331ecdac4a22477911b3d058b44a08",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAccountOpeningBalanceAction"],
    "60f90d7549882485fed7a54035a4162448a711ca11",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recalculateStockChainAction"],
    "60fa0abb237eb21c2263eb71ed8d7bcef4a93668c5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCustomerCategoryAction"],
    "7006e03c6072cbb7dece29e39d895ac857b4a713fc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTaskAction"],
    "700a664ea90ae36ba9cc8af94f8cdb2189b309aa19",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTotalExpensesAction"],
    "701a7f434219bd8878fff6d4b3b75946a1b530c33b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bulkUpdateTasksAction"],
    "701a9e53345c4e0bac6a976c440e9fb430f30a0bd7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCashAccountWithTransactionsAction"],
    "70224fdc0bcebdc294431f28757b4c0854ee26605f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDefaultExpenseCategoriesAction"],
    "7025d373c4892871d9a0aa001c21511f9ccf0a431e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStockSummaryReportAction"],
    "705aff83b2b9e1aba71aad2466fd6b8fea51208291",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTaskCategoryAction"],
    "705bdf7fd490736332f02c668b59820283a4b3c612",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCarriageInwardAction"],
    "705eae4bc56e302859593c985f8fa243ffd4d03541",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCustomerAction"],
    "706dbbbf1c39b7797302e603abda3f1f3fe9b7b97f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateExpenseAction"],
    "706e3fbb522a276a36fc917483899cbce414828e41",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTaskCategoryAction"],
    "7075bde107094bcee88803531f90399cdcae549f4b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSalesAction"],
    "707d68c6f165357503733ab94bca948941d99cb8cd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCarriageInwardAction"],
    "7083475c4a77fdc0d468e38b20907db3bcf79e040f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateStockHistoryDatesByReferenceAction"],
    "70883541b91ebe6d6d86fb8dcec2fcfd3f2c72a128",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCustomerCategoryAction"],
    "709e5344eeca43879345dcb626f1f2ab7ca9393a20",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateRequisitionAction"],
    "70a745e4fbb6ba5f390975a2c8f214da73e85e5a26",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$expenses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExpensesForChartAction"],
    "70c5da04836758bcdb8175461942b246221af76885",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertBusinessSettingsAction"],
    "70f760ccd96fa67791a24441282558148d0226c736",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBusinessAction"],
    "70f9b04ea9060f2491ffc9e84115aa6bd70c3d4d47",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertSaleAction"],
    "70fc86dbaaefaebd36e09983d0830c45b4753829bc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPeriodSalesAction"],
    "70fdf92ee6bb656be2d437fb23f40f7daa4c0c88c1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProductCategoryAction"],
    "782e2a43abf5b8996f45d01a958fb4c58e331d99ca",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSalesCategoryAction"],
    "787558103b6686223e72b23ffe2cac99e0e46da6bc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["linkInstallmentToCashAction"],
    "7891a105b2f8bdfdc900473c987edee0dadfa0a065",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSalesGoalAction"],
    "7ca4e77183ddba6391bfc83235d1b209e6a56a061b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getActivityHistoryAction"],
    "7e71a0330bb45c9acc463904f5bfec2c9b040ddd25",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertSalesGoalAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b5b2e2e2e$slug$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE8__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE9__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE10__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE11__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE12__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE13__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE14__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$expenses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[[...slug]]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions/business.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/app/actions/profiles.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/app/actions/business-settings.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/app/actions/products.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)", ACTIONS_MODULE6 => "[project]/src/app/actions/sales.ts [app-rsc] (ecmascript)", ACTIONS_MODULE7 => "[project]/src/app/actions/finance.ts [app-rsc] (ecmascript)", ACTIONS_MODULE8 => "[project]/src/app/actions/carriageInwards.ts [app-rsc] (ecmascript)", ACTIONS_MODULE9 => "[project]/src/app/actions/messaging.ts [app-rsc] (ecmascript)", ACTIONS_MODULE10 => "[project]/src/app/actions/customers.ts [app-rsc] (ecmascript)", ACTIONS_MODULE11 => "[project]/src/app/actions/tasks.ts [app-rsc] (ecmascript)", ACTIONS_MODULE12 => "[project]/src/app/actions/activity.ts [app-rsc] (ecmascript)", ACTIONS_MODULE13 => "[project]/src/app/actions/analytics.ts [app-rsc] (ecmascript)", ACTIONS_MODULE14 => "[project]/src/app/actions/expenses.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/business.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/profiles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/business-settings.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/inventory.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/sales.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/finance.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/carriageInwards.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/messaging.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/customers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/tasks.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/activity.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/analytics.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$expenses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/expenses.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b5b2e2e2e$slug$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE8__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE9__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE10__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE11__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE12__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE13__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE14__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$expenses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$expenses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b5b2e2e2e$slug$5d5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE8__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE9__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE10__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE11__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE12__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE13__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE14__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$expenses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$profiles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$business$2d$settings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$sales$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$finance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$carriageInwards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$messaging$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$customers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$tasks$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$activity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$analytics$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$expenses$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0291fd9e._.js.map