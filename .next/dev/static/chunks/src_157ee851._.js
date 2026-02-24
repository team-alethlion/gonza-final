(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/utils/numberToWords.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts a number to words representation
 * @param num The number to convert to words
 * @returns The number expressed in words
 */ __turbopack_context__.s([
    "numberToWords",
    ()=>numberToWords
]);
function numberToWords(num) {
    const specialNames = [
        '',
        'thousand',
        'million',
        'billion',
        'trillion',
        'quadrillion'
    ];
    const tensNames = [
        '',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];
    const onesNames = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    // Handles decimals by splitting the number into whole and decimal parts
    const handleDecimals = (n)=>{
        const numStr = n.toFixed(2);
        const parts = numStr.split('.');
        const wholeStr = convertNumberToWords(parseInt(parts[0]));
        // If there are meaningful decimals (not just .00)
        if (parts.length > 1 && parseInt(parts[1]) > 0) {
            // Format the decimal part as cents
            return `${wholeStr} and ${parts[1]}/100`;
        }
        return wholeStr;
    };
    // Core conversion function for whole numbers
    const convertNumberToWords = (n)=>{
        // Handle zero
        if (n === 0) return 'zero';
        // Handle negative numbers
        if (n < 0) return `negative ${convertNumberToWords(Math.abs(n))}`;
        let result = '';
        let numIndex = 0;
        // Process the number in chunks of three digits
        while(n > 0){
            if (n % 1000 !== 0) {
                result = `${convertLessThanOneThousand(n % 1000)} ${specialNames[numIndex]} ${result}`;
            }
            n = Math.floor(n / 1000);
            numIndex++;
        }
        return result.trim();
    };
    // Converts a number less than 1000 to words
    const convertLessThanOneThousand = (n)=>{
        if (n === 0) return '';
        let result = '';
        // Handle hundreds
        if (n >= 100) {
            result = `${onesNames[Math.floor(n / 100)]} hundred `;
            n %= 100;
            if (n === 0) return result.trim();
        }
        // Handle tens and ones places
        if (n < 20) {
            // For numbers less than 20, use the direct name
            result += onesNames[n];
        } else {
            // For numbers 20 and above, combine tens and ones names
            result += `${tensNames[Math.floor(n / 10)]}`;
            if (n % 10 > 0) {
                result += `-${onesNames[n % 10]}`;
            }
        }
        return result.trim();
    };
    // Start the conversion process
    return handleDecimals(num).trim().charAt(0).toUpperCase() + handleDecimals(num).trim().slice(1);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/generateThermalReceipt.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateThermalReceipt",
    ()=>generateThermalReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$esc$2d$pos$2d$encoder$2f$dist$2f$esc$2d$pos$2d$encoder$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/esc-pos-encoder/dist/esc-pos-encoder.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$numberToWords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/numberToWords.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
;
;
;
;
;
async function generateThermalReceipt(sale, settings, currency) {
    const displayCurrency = currency || settings.currency || '';
    const encoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$esc$2d$pos$2d$encoder$2f$dist$2f$esc$2d$pos$2d$encoder$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    encoder.initialize();
    const is80mm = settings.printerPaperSize === '80mm';
    if (is80mm) {
        encoder.raw([
            0x1d,
            0x57,
            0x40,
            0x02
        ]); // GS W: Set width to 576 dots (80mm)
        encoder.align('left'); // User requested "far left" for everything
    } else {
        encoder.raw([
            0x1d,
            0x4c,
            0,
            0
        ]); // GS L: Reset left margin to 0
        encoder.raw([
            0x1d,
            0x57,
            0x80,
            0x01
        ]); // GS W: Set printable area width (384 dots = 58mm)
        encoder.align('left');
    }
    // ===== Business Header =====
    encoder.align('left');
    encoder.line(is80mm ? '='.repeat(42) : '='.repeat(32));
    if (settings.businessName) {
        encoder.size('double').bold(true).line(settings.businessName.toUpperCase()).bold(false).size('normal');
    }
    encoder.line(is80mm ? '='.repeat(42) : '='.repeat(32));
    if (settings.businessAddress) encoder.line(settings.businessAddress);
    if (settings.businessPhone) encoder.line(`Tel: ${settings.businessPhone}`);
    if (settings.businessEmail) encoder.line(settings.businessEmail);
    encoder.line(is80mm ? '-'.repeat(42) : '-'.repeat(32)); // Wider line for 80mm
    // ===== Document Title =====
    const titleMap = {
        "Quote": "QUOTATION",
        "Paid": "SALES RECEIPT",
        "Installment Sale": "INSTALLMENT SALE",
        "NOT PAID": "INVOICE"
    };
    const docTitle = titleMap[sale.paymentStatus] || "INVOICE";
    encoder.bold(true).line(docTitle).bold(false);
    encoder.line(is80mm ? '-'.repeat(42) : '-'.repeat(32));
    // ===== Receipt Info (Apply 10mm margin) =====
    encoder.raw([
        0x1d,
        0x4c,
        0,
        0
    ]);
    encoder.align('left');
    encoder.table([
        {
            width: 12,
            align: 'left'
        },
        {
            width: 16,
            align: 'right'
        }
    ], [
        [
            'Receipt #:',
            sale.receiptNumber || ''
        ],
        [
            'Date:',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(sale.date || Date.now()), "MMM dd, yyyy")
        ],
        [
            'Status:',
            sale.paymentStatus || ''
        ]
    ]);
    encoder.line(is80mm ? '-'.repeat(42) : '-'.repeat(32));
    // ===== Customer Info =====
    if (sale.customerName) {
        encoder.line(`Customer: ${sale.customerName}`);
        if (sale.customerAddress) encoder.line(`Address: ${sale.customerAddress}`);
        if (sale.customerContact) encoder.line(`Contact: ${sale.customerContact}`);
        encoder.line(is80mm ? '-'.repeat(42) : '-'.repeat(32));
    }
    // ===== Items Table Definition =====
    // 58mm (32 chars): Item(14) + Spacer(3) + Qty(5) + Tot(10) = 32
    // 80mm (42 chars): Item(22) + Spacer(4) + Qty(6) + Tot(10) = 42
    // 58mm (32 chars): Item(12) + Spacer(1) + Qty(5) + Tot(14) = 32
    // 80mm (42 chars): Item(21) + Spacer(1) + Qty(6) + Tot(14) = 42
    const tableColumns = is80mm ? [
        {
            width: 21,
            align: 'left'
        },
        {
            width: 1,
            align: 'center'
        },
        {
            width: 6,
            align: 'right'
        },
        {
            width: 14,
            align: 'right'
        }
    ] : [
        {
            width: 12,
            align: 'left'
        },
        {
            width: 1,
            align: 'center'
        },
        {
            width: 5,
            align: 'right'
        },
        {
            width: 14,
            align: 'right'
        }
    ];
    encoder.table(tableColumns, [
        [
            'Item',
            '',
            'Qty',
            `Total`
        ]
    ]);
    encoder.line(is80mm ? '-'.repeat(42) : '-'.repeat(32));
    let subtotalBeforeDiscount = 0;
    let totalDiscountAmount = 0;
    Array.isArray(sale.items) && sale.items.forEach((item)=>{
        const quantity = item.quantity || 0;
        const price = item.price || 0;
        const subtotal = quantity * price;
        const discount = item.discountAmount ?? subtotal * (item.discountPercentage || 0) / 100;
        const total = subtotal - discount;
        subtotalBeforeDiscount += subtotal;
        totalDiscountAmount += discount;
        encoder.table(tableColumns, [
            [
                item.description || '',
                '',
                String(quantity),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(total)
            ]
        ]);
        if (discount > 0) {
            const discText = item.discountType === "amount" ? "" : `(${item.discountPercentage || 0}%)`;
            encoder.italic(true).table([
                {
                    width: 22,
                    align: 'left'
                },
                {
                    width: 10,
                    align: 'right'
                }
            ], [
                [
                    `  Discount ${discText}`,
                    `-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(discount)}`
                ]
            ]).italic(false);
        }
        encoder.line(is80mm ? '-'.repeat(42) : '-'.repeat(32));
    });
    // ===== Totals (Vertical Layout as requested) =====
    const subtotalAfterDiscount = subtotalBeforeDiscount - totalDiscountAmount;
    const taxRate = sale.taxRate || 0;
    const taxAmount = subtotalAfterDiscount * (taxRate / 100);
    const totalAmount = subtotalAfterDiscount + taxAmount;
    // For installment sales, sum up all payments from history if available
    const totalPaidFromHistory = Array.isArray(sale.payments) ? sale.payments.reduce((sum, p)=>sum + (Number(p.amount) || 0), 0) : 0;
    const amountPaid = sale.paymentStatus === 'Installment Sale' && totalPaidFromHistory > 0 ? totalPaidFromHistory : Number(sale.amountPaid) || 0;
    const amountDue = sale.paymentStatus === 'Installment Sale' ? Math.max(0, totalAmount - totalPaidFromHistory) : Math.max(0, totalAmount - amountPaid);
    encoder.newline();
    const totalsColumns = [
        {
            width: 14,
            align: 'left'
        },
        {
            width: is80mm ? 28 : 18,
            align: 'right'
        }
    ];
    encoder.table(totalsColumns, [
        [
            "Subtotal:",
            `${displayCurrency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(subtotalBeforeDiscount)}`
        ]
    ]);
    if (totalDiscountAmount > 0) {
        encoder.table(totalsColumns, [
            [
                "Total Discount:",
                `-${displayCurrency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(totalDiscountAmount)}`
            ]
        ]);
    }
    if (taxRate > 0) {
        encoder.table(totalsColumns, [
            [
                `Tax (${taxRate}%):`,
                `${displayCurrency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(taxAmount)}`
            ]
        ]);
    }
    encoder.bold(true).table(totalsColumns, [
        [
            "TOTAL:",
            `${displayCurrency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(totalAmount)}`
        ]
    ]).bold(false);
    if (sale.paymentStatus === "Installment Sale") {
        encoder.table(totalsColumns, [
            [
                "Amount Paid:",
                `${displayCurrency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(amountPaid)}`
            ],
            [
                "Amount Due:",
                `${displayCurrency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(amountDue)}`
            ]
        ]);
    }
    encoder.line(is80mm ? '-'.repeat(42) : '-'.repeat(32));
    encoder.text(`Amount in words:\n${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$numberToWords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToWords"])(totalAmount)} only\n`);
    encoder.line(is80mm ? '-'.repeat(42) : '-'.repeat(32));
    // Reset margin for the rest of the receipt (Payment Info, Signature, Footer)
    encoder.raw([
        0x1d,
        0x4c,
        0,
        0
    ]);
    encoder.align('left');
    // ===== Payment Info =====
    const paymentMethods = settings.paymentInfo ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePaymentInfo"])(settings.paymentInfo) : [];
    if (Array.isArray(paymentMethods) && paymentMethods.length > 0) {
        paymentMethods.forEach((p)=>{
            if (p.method || p.accountNumber || p.accountName) {
                encoder.bold(true).line(p.method || '').bold(false);
                if (p.accountNumber) encoder.line(`Acc: ${p.accountNumber}`);
                if (p.accountName) encoder.line(`Name: ${p.accountName}`);
                encoder.line(is80mm ? '-'.repeat(42) : '-'.repeat(32));
            }
        });
    }
    // ===== Footer =====
    encoder.line("Thank you for your business!");
    encoder.size('small').line("Created by Gonza Systems").size('normal');
    encoder.line(is80mm ? '='.repeat(42) : '='.repeat(32));
    // Cut paper
    encoder.newline().newline().newline().cut();
    return encoder.encode();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/thermalPrinterPlug.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkBridgeStatus",
    ()=>checkBridgeStatus,
    "print",
    ()=>print
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
;
async function checkBridgeStatus() {
    const addresses = [
        'http://localhost:5000',
        'http://127.0.0.1:5000'
    ];
    for (const addr of addresses){
        try {
            const response = await fetch(`${addr}/printers`, {
                signal: AbortSignal.timeout(2000),
                mode: 'cors'
            });
            if (response.ok) {
                return true;
            }
        } catch (error) {
        // Continue to next address
        }
    }
    return false;
}
async function print(data, printerNameOverride) {
    const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform();
    if (platform === 'web') {
        // Prefer Printer Bridge if on web
        try {
            const isBinary = data instanceof Uint8Array;
            const endpoint = 'http://localhost:5000/print/receipt';
            // Use provided printer name, or try to get it from localStorage (fallback to Receipt Printer)
            let printerName = printerNameOverride;
            if (!printerName) {
                try {
                    const settings = JSON.parse(localStorage.getItem('business-settings') || '{}');
                    printerName = settings.defaultPrinterName;
                } catch (e) {
                // Ignore parse errors
                }
            }
            if (!printerName) printerName = 'Receipt Printer';
            const body = {
                PrinterName: printerName,
                Content: isBinary ? String.fromCharCode(...data) : data
            };
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(body)
            });
            if (response.ok) {
                return {
                    success: true,
                    message: 'Print command sent to bridge.'
                };
            }
        } catch (err) {
            console.warn('Printer Bridge not available, falling back to Web Serial', err);
        }
        // Fallback to Web Serial for standard text data
        if (typeof data === 'string') {
            const { printWeb } = await __turbopack_context__.A("[project]/src/utils/thermalPrinterWeb.ts [app-client] (ecmascript, async loader)");
            return await printWeb(data);
        } else {
            return {
                success: false,
                message: 'Printer Bridge required for binary ESC/POS printing.'
            };
        }
    } else {
        // Native platforms use Bluetooth
        const { printBluetooth } = await __turbopack_context__.A("[project]/src/utils/thermalPrinterNative.ts [app-client] (ecmascript, async loader)");
        // Native print might only support strings for now, convert if needed
        const stringData = typeof data === 'string' ? data : new TextDecoder().decode(data);
        return await printBluetooth(stringData);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/generateReceiptNumber.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateReceiptNumber",
    ()=>generateReceiptNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$4bd0b6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:4bd0b6 [app-client] (ecmascript) <text/javascript>");
;
const generateReceiptNumber = async (locationId)=>{
    try {
        if (!locationId) {
            console.error('Location ID is required for receipt number generation');
            return '000001';
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$4bd0b6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getNextReceiptNumberAction"])(locationId);
        if (result.success && result.data) {
            return result.data;
        }
        console.error('Error generating receipt number:', result.error);
        return '000001';
    } catch (error) {
        console.error('Error generating receipt number:', error);
        return '000001';
    }
};
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
"[project]/src/utils/generateReceiptVectorPDF.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateReceiptVectorPDF",
    ()=>generateReceiptVectorPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
;
// Helper function to format currency properly (e.g., "Ush 25,000")
const formatCurrency = (amount, currency = 'Ush')=>{
    const formatted = Math.round(amount).toLocaleString();
    return `${currency} ${formatted}`;
};
const generateReceiptVectorPDF = async (receiptData, options)=>{
    const { filename, orientation = 'portrait', format = 'a4', margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    }, returnBlob = false } = options;
    const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        orientation,
        unit: 'mm',
        format,
        compress: true
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const contentWidth = pageWidth - margins.left - margins.right;
    let currentY = margins.top;
    // Define thinner line width
    const STANDARD_LINE_WIDTH = 0.2;
    // Helper functions
    const setStandardLineWidth = ()=>{
        pdf.setLineWidth(STANDARD_LINE_WIDTH);
    };
    const addText = (text, x, y, options = {})=>{
        const { fontSize = 10, fontStyle = 'normal', align = 'left', maxWidth } = options;
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', fontStyle);
        if (maxWidth) {
            const lines = pdf.splitTextToSize(text, maxWidth);
            pdf.text(lines, x, y, {
                align
            });
            return lines.length * (fontSize * 0.35);
        } else {
            pdf.text(text, x, y, {
                align
            });
            return fontSize * 0.35;
        }
    };
    const addMultilineText = (text, x, y, maxWidth, options = {})=>{
        const { fontSize = 10, fontStyle = 'normal', align = 'left', lineHeight = 1.2 } = options;
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', fontStyle);
        const lines = pdf.splitTextToSize(text, maxWidth);
        const lineSpacing = fontSize * 0.35 * lineHeight;
        lines.forEach((line, index)=>{
            pdf.text(line, x, y + index * lineSpacing, {
                align
            });
        });
        return lines.length * lineSpacing;
    };
    const addLine = (x1, y1, x2, y2)=>{
        setStandardLineWidth();
        pdf.line(x1, y1, x2, y2);
    };
    const addRect = (x, y, width, height, style = 'S')=>{
        setStandardLineWidth();
        pdf.rect(x, y, width, height, style);
    };
    // Function to draw page border
    const drawPageBorder = ()=>{
        addRect(margins.left, margins.top, contentWidth, pageHeight - margins.top - margins.bottom, 'S');
    };
    // Check if we need a new page and draw border
    const checkPageBreak = (requiredSpace)=>{
        if (currentY + requiredSpace > pageHeight - margins.bottom) {
            pdf.addPage();
            currentY = margins.top + 10; // Add some top margin on new page
            drawPageBorder(); // Draw border on new page
            return true;
        }
        return false;
    };
    // Draw initial page border
    drawPageBorder();
    // Add padding inside border
    const innerMargin = 8;
    const innerLeft = margins.left + innerMargin;
    const innerWidth = contentWidth - innerMargin * 2;
    currentY += innerMargin;
    // Header section with logo on left, business info on right
    const headerStartY = currentY;
    // Logo on the left (if available) - reduced size
    if (receiptData.businessLogo) {
        try {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            await new Promise((resolve, reject)=>{
                img.onload = ()=>{
                    try {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                            canvas.width = img.width;
                            canvas.height = img.height;
                            ctx.drawImage(img, 0, 0);
                            const dataURL = canvas.toDataURL('image/png');
                            // Logo dimensions - reduced size for more professional look
                            const maxLogoHeight = 15; // Further reduced from 18
                            const aspectRatio = img.width / img.height;
                            const logoHeight = Math.min(maxLogoHeight, 15);
                            const logoWidth = logoHeight * aspectRatio;
                            // Position logo on the left
                            pdf.addImage(dataURL, 'PNG', innerLeft, currentY, logoWidth, logoHeight);
                        }
                    } catch (error) {
                        console.error('Error adding logo to PDF:', error);
                    }
                    resolve();
                };
                img.onerror = ()=>{
                    console.error('Error loading logo image');
                    resolve();
                };
                img.src = receiptData.businessLogo;
            });
        } catch (error) {
            console.error('Error processing logo:', error);
        }
    }
    // Business information on the right - extended area with right alignment
    const businessInfoX = innerLeft + innerWidth * 0.25; // Extended area starts earlier
    const businessInfoWidth = innerWidth * 0.75; // Wider area for business info
    const businessInfoRightX = innerLeft + innerWidth; // Right edge for alignment
    let businessY = currentY;
    if (receiptData.businessName) {
        businessY += addText(receiptData.businessName, businessInfoRightX, businessY, {
            fontSize: 14,
            fontStyle: 'bold',
            align: 'right'
        });
        businessY += 1.5; // Reduced spacing
    }
    if (receiptData.businessAddress) {
        const lines = pdf.splitTextToSize(receiptData.businessAddress, businessInfoWidth);
        const lineHeight = 10 * 0.35 * 0.9; // Further reduced line height
        lines.forEach((line, index)=>{
            pdf.setFontSize(10);
            pdf.setFont('helvetica', 'normal');
            pdf.text(line, businessInfoRightX, businessY + index * lineHeight, {
                align: 'right'
            });
        });
        businessY += lines.length * lineHeight + 0.5; // Reduced spacing
    }
    if (receiptData.businessPhone) {
        businessY += addText(`Phone: ${receiptData.businessPhone}`, businessInfoRightX, businessY, {
            fontSize: 9,
            align: 'right'
        });
        businessY += 0.5; // Reduced spacing
    }
    if (receiptData.businessEmail) {
        businessY += addText(`Email: ${receiptData.businessEmail}`, businessInfoRightX, businessY, {
            fontSize: 9,
            align: 'right'
        });
        businessY += 0.5; // Reduced spacing
    }
    // Move currentY to after header section - reduced spacing
    currentY = Math.max(currentY + 18, businessY) + 5; // Further reduced spacing
    // Check for page break after header
    checkPageBreak(20);
    // Horizontal line after header
    addLine(innerLeft, currentY, innerLeft + innerWidth, currentY);
    currentY += 6; // Reduced from 8
    // Document title centered
    currentY += addText(receiptData.documentTitle.toUpperCase(), pageWidth / 2, currentY, {
        fontSize: 16,
        fontStyle: 'bold',
        align: 'center'
    });
    currentY += 4; // Reduced from 6
    // Receipt details section - further reduced spacing
    const detailsStartY = currentY;
    // Left side - Receipt details with minimal spacing
    let leftY = detailsStartY;
    leftY += addText(`${receiptData.documentNumberLabel} ${receiptData.receiptNumber}`, innerLeft, leftY, {
        fontSize: 11,
        fontStyle: 'bold'
    });
    leftY += 2; // Further reduced from 3
    leftY += addText(`Date: ${receiptData.date}`, innerLeft, leftY, {
        fontSize: 10
    });
    leftY += 2; // Further reduced from 3
    leftY += addText(`Time: ${receiptData.time}`, innerLeft, leftY, {
        fontSize: 10
    });
    // Right side - Payment status
    const rightX = innerLeft + innerWidth * 0.7;
    addText(`Status: ${receiptData.status}`, rightX, detailsStartY, {
        fontSize: 11,
        fontStyle: 'bold',
        align: 'left'
    });
    currentY = leftY + 4; // Reduced from 6
    // Customer information without labels
    if (receiptData.customerName && receiptData.customerName.trim() !== '') {
        checkPageBreak(30);
        currentY += addText('Customer Information:', innerLeft, currentY, {
            fontSize: 11,
            fontStyle: 'bold'
        });
        currentY += 3; // Reduced from 4
        // Customer name without "Name:" label
        currentY += addText(receiptData.customerName, innerLeft, currentY, {
            fontSize: 10
        });
        currentY += 2.5; // Reduced spacing
        if (receiptData.customerAddress && receiptData.customerAddress.trim() !== '') {
            // Customer address without "Address:" label
            const addressHeight = addMultilineText(receiptData.customerAddress, innerLeft, currentY, innerWidth * 0.8, {
                fontSize: 10,
                lineHeight: 1.0 // Reduced from 1.1
            });
            currentY += addressHeight;
            currentY += 2.5; // Reduced spacing
        }
        if (receiptData.customerContact && receiptData.customerContact.trim() !== '') {
            // Customer contact without "Contact:" label
            currentY += addText(receiptData.customerContact, innerLeft, currentY, {
                fontSize: 10
            });
            currentY += 2.5; // Reduced spacing
        }
        currentY += 3; // Reduced from 6
    }
    // Items table - check if any items have discounts to add discount column
    const hasDiscounts = receiptData.items.some((item)=>(item.discountPercentage || 0) > 0 || (item.discountAmount || 0) > 0);
    const tableHeaders = hasDiscounts ? [
        'Description',
        'Qty',
        'Unit Price',
        'Discount',
        'Amount'
    ] : [
        'Description',
        'Qty',
        'Unit Price',
        'Amount'
    ];
    const colWidths = hasDiscounts ? [
        innerWidth * 0.35,
        innerWidth * 0.15,
        innerWidth * 0.18,
        innerWidth * 0.12,
        innerWidth * 0.2
    ] : [
        innerWidth * 0.45,
        innerWidth * 0.15,
        innerWidth * 0.2,
        innerWidth * 0.2
    ];
    // Table header background
    pdf.setFillColor(245, 245, 245);
    addRect(innerLeft, currentY - 2, innerWidth, 10, 'F');
    // Table header borders
    addRect(innerLeft, currentY - 2, innerWidth, 10, 'S');
    // Table header text
    let tableX = innerLeft;
    tableHeaders.forEach((header, index)=>{
        addText(header, tableX + 3, currentY + 4, {
            fontSize: 10,
            fontStyle: 'bold'
        });
        // Add vertical lines between columns
        if (index < tableHeaders.length - 1) {
            addLine(tableX + colWidths[index], currentY - 2, tableX + colWidths[index], currentY + 8);
        }
        tableX += colWidths[index];
    });
    currentY += 10;
    // Table rows with proper text wrapping and row separation
    let subtotal = 0;
    const minRowHeight = 8; // Minimum row height
    receiptData.items.forEach((item, index)=>{
        // Calculate required row height based on description text wrapping
        pdf.setFontSize(9);
        const descriptionLines = pdf.splitTextToSize(item.description, colWidths[0] - 6);
        const calculatedRowHeight = Math.max(minRowHeight, descriptionLines.length * 3.5 + 4);
        // Check if we need a new page for this item
        checkPageBreak(calculatedRowHeight + 5);
        const itemSubtotal = item.unitPrice * item.quantity;
        const discountAmount = item.discountAmount || 0;
        const itemTotal = item.amount; // This should already be calculated with discount applied
        subtotal += itemTotal;
        // Alternate row background for better readability
        if (index % 2 === 1) {
            pdf.setFillColor(250, 250, 250);
            addRect(innerLeft, currentY, innerWidth, calculatedRowHeight, 'F');
        }
        // Row border
        addRect(innerLeft, currentY, innerWidth, calculatedRowHeight, 'S');
        tableX = innerLeft;
        // Description with proper text wrapping
        addMultilineText(item.description, tableX + 3, currentY + 4, colWidths[0] - 6, {
            fontSize: 9,
            lineHeight: 1.1
        });
        tableX += colWidths[0];
        // Add vertical line after description
        addLine(tableX, currentY, tableX, currentY + calculatedRowHeight);
        // Quantity - centered in cell
        addText(item.quantity.toString(), tableX + colWidths[1] - 3, currentY + calculatedRowHeight / 2 + 1.5, {
            fontSize: 9,
            align: 'right'
        });
        tableX += colWidths[1];
        // Add vertical line after quantity
        addLine(tableX, currentY, tableX, currentY + calculatedRowHeight);
        // Unit Price - right aligned
        addText(formatCurrency(item.unitPrice, receiptData.currency), tableX + colWidths[2] - 3, currentY + calculatedRowHeight / 2 + 1.5, {
            fontSize: 9,
            align: 'right'
        });
        tableX += colWidths[2];
        // Add vertical line after unit price
        addLine(tableX, currentY, tableX, currentY + calculatedRowHeight);
        // Discount column (if applicable)
        if (hasDiscounts) {
            let discountText = '-';
            if ((item.discountPercentage || 0) > 0) {
                discountText = `${item.discountPercentage}%`;
            } else if ((item.discountAmount || 0) > 0) {
                discountText = formatCurrency(item.discountAmount, receiptData.currency);
            }
            addText(discountText, tableX + colWidths[3] - 3, currentY + calculatedRowHeight / 2 + 1.5, {
                fontSize: 9,
                align: 'right'
            });
            tableX += colWidths[3];
            // Add vertical line after discount
            addLine(tableX, currentY, tableX, currentY + calculatedRowHeight);
        }
        // Amount - right aligned (final amount after discount)
        const finalColumnIndex = hasDiscounts ? 4 : 3;
        addText(formatCurrency(itemTotal, receiptData.currency), tableX + colWidths[finalColumnIndex] - 3, currentY + calculatedRowHeight / 2 + 1.5, {
            fontSize: 9,
            align: 'right'
        });
        currentY += calculatedRowHeight;
        // Add separator line between items (except for the last item)
        if (index < receiptData.items.length - 1) {
            addLine(innerLeft, currentY, innerLeft + innerWidth, currentY);
        }
    });
    currentY += 5; // Reduced from 10
    // Professional totals section with improved layout for large figures
    checkPageBreak(70); // Increased space requirement for installment sales
    // Create a proper totals table without header
    const totalsStartX = innerLeft + innerWidth * 0.45;
    const totalsWidth = innerWidth * 0.55;
    const labelWidth = totalsWidth * 0.55;
    const valueWidth = totalsWidth * 0.45;
    // Calculate total discount for the totals section
    const totalDiscount = receiptData.items.reduce((total, item)=>{
        const itemSubtotal = item.unitPrice * item.quantity;
        const discountAmount = item.discountType === 'amount' ? item.discountAmount || 0 : itemSubtotal * (item.discountPercentage || 0) / 100;
        return total + discountAmount;
    }, 0);
    // Subtotal (before discount) row - only show if there are discounts
    if (totalDiscount > 0) {
        addRect(totalsStartX, currentY, totalsWidth, 8, 'S');
        pdf.setFillColor(248, 248, 248);
        addRect(totalsStartX, currentY, totalsWidth, 8, 'F');
        addText('Subtotal (before discount):', totalsStartX + 4, currentY + 5.5, {
            fontSize: 10,
            fontStyle: 'normal'
        });
        // Vertical line separating label and value
        addLine(totalsStartX + labelWidth, currentY, totalsStartX + labelWidth, currentY + 8);
        addText(formatCurrency(subtotal + totalDiscount, receiptData.currency), totalsStartX + labelWidth + valueWidth - 4, currentY + 5.5, {
            fontSize: 10,
            fontStyle: 'normal',
            align: 'right'
        });
        currentY += 8;
        // Total discount row
        addRect(totalsStartX, currentY, totalsWidth, 8, 'S');
        pdf.setFillColor(255, 240, 220); // Light orange background
        addRect(totalsStartX, currentY, totalsWidth, 8, 'F');
        addText('Total Discount:', totalsStartX + 4, currentY + 5.5, {
            fontSize: 10,
            fontStyle: 'normal'
        });
        // Vertical line separating label and value
        addLine(totalsStartX + labelWidth, currentY, totalsStartX + labelWidth, currentY + 8);
        addText(`-${formatCurrency(totalDiscount, receiptData.currency)}`, totalsStartX + labelWidth + valueWidth - 4, currentY + 5.5, {
            fontSize: 10,
            fontStyle: 'normal',
            align: 'right'
        });
        currentY += 8;
    }
    // Subtotal row (after discount or just subtotal if no discounts)
    addRect(totalsStartX, currentY, totalsWidth, 8, 'S');
    pdf.setFillColor(248, 248, 248);
    addRect(totalsStartX, currentY, totalsWidth, 8, 'F');
    addText(totalDiscount > 0 ? 'Subtotal (after discount):' : 'Subtotal:', totalsStartX + 4, currentY + 5.5, {
        fontSize: 10,
        fontStyle: 'normal'
    });
    // Vertical line separating label and value
    addLine(totalsStartX + labelWidth, currentY, totalsStartX + labelWidth, currentY + 8);
    addText(formatCurrency(subtotal, receiptData.currency), totalsStartX + labelWidth + valueWidth - 4, currentY + 5.5, {
        fontSize: 10,
        fontStyle: 'normal',
        align: 'right'
    });
    currentY += 8;
    // Tax row (if applicable)
    if (receiptData.showTaxRow && receiptData.taxAmount > 0) {
        addRect(totalsStartX, currentY, totalsWidth, 8, 'S');
        pdf.setFillColor(250, 250, 250);
        addRect(totalsStartX, currentY, totalsWidth, 8, 'F');
        addText(`Tax (${receiptData.taxRate}%):`, totalsStartX + 4, currentY + 5.5, {
            fontSize: 10,
            fontStyle: 'normal'
        });
        // Vertical line separating label and value
        addLine(totalsStartX + labelWidth, currentY, totalsStartX + labelWidth, currentY + 8);
        addText(formatCurrency(receiptData.taxAmount, receiptData.currency), totalsStartX + labelWidth + valueWidth - 4, currentY + 5.5, {
            fontSize: 10,
            fontStyle: 'normal',
            align: 'right'
        });
        currentY += 8;
    }
    // Total row with emphasis and larger height for big figures
    addRect(totalsStartX, currentY, totalsWidth, 12, 'S');
    pdf.setFillColor(220, 220, 220);
    addRect(totalsStartX, currentY, totalsWidth, 12, 'F');
    addText('TOTAL:', totalsStartX + 4, currentY + 7.5, {
        fontSize: 12,
        fontStyle: 'bold'
    });
    // Vertical line separating label and value
    addLine(totalsStartX + labelWidth, currentY, totalsStartX + labelWidth, currentY + 12);
    addText(formatCurrency(receiptData.totalAmount, receiptData.currency), totalsStartX + labelWidth + valueWidth - 4, currentY + 7.5, {
        fontSize: 12,
        fontStyle: 'bold',
        align: 'right'
    });
    currentY += 12;
    // Add Amount Paid and Amount Due for installment sales
    if (receiptData.isInstallmentSale) {
        // Amount Paid row
        if (receiptData.amountPaid !== undefined) {
            addRect(totalsStartX, currentY, totalsWidth, 8, 'S');
            pdf.setFillColor(240, 248, 255); // Light blue background
            addRect(totalsStartX, currentY, totalsWidth, 8, 'F');
            addText('Amount Paid:', totalsStartX + 4, currentY + 5.5, {
                fontSize: 10,
                fontStyle: 'bold'
            });
            // Vertical line separating label and value
            addLine(totalsStartX + labelWidth, currentY, totalsStartX + labelWidth, currentY + 8);
            addText(formatCurrency(receiptData.amountPaid, receiptData.currency), totalsStartX + labelWidth + valueWidth - 4, currentY + 5.5, {
                fontSize: 10,
                fontStyle: 'bold',
                align: 'right'
            });
            currentY += 8;
        }
        // Amount Due row
        if (receiptData.amountDue !== undefined) {
            addRect(totalsStartX, currentY, totalsWidth, 8, 'S');
            pdf.setFillColor(255, 240, 240); // Light red background
            addRect(totalsStartX, currentY, totalsWidth, 8, 'F');
            addText('Amount Due:', totalsStartX + 4, currentY + 5.5, {
                fontSize: 10,
                fontStyle: 'bold'
            });
            // Vertical line separating label and value
            addLine(totalsStartX + labelWidth, currentY, totalsStartX + labelWidth, currentY + 8);
            addText(formatCurrency(receiptData.amountDue, receiptData.currency), totalsStartX + labelWidth + valueWidth - 4, currentY + 5.5, {
                fontSize: 10,
                fontStyle: 'bold',
                align: 'right'
            });
            currentY += 8;
        }
    }
    currentY += 7; // Reduced from 15
    // Amount in words with slightly increased spacing
    if (receiptData.totalAmountInWords) {
        checkPageBreak(20);
        currentY += 2; // Keep existing spacing
        addText('Amount in words:', innerLeft, currentY, {
            fontSize: 10,
            fontStyle: 'bold'
        });
        currentY += 4; // Increased from 3 to 4
        // Better text wrapping for amount in words with increased line height
        const amountText = `${receiptData.currency} ${receiptData.totalAmountInWords} only`;
        const wordsHeight = addMultilineText(amountText, innerLeft, currentY, innerWidth * 0.9, {
            fontSize: 10,
            fontStyle: 'italic',
            lineHeight: 1.4 // Increased from 1.2 to 1.4 for better spacing
        });
        currentY += wordsHeight + 4; // Increased from 3 to 4
    }
    // Improved Payment information table with reduced spacing
    if (receiptData.hasPaymentInfo && receiptData.paymentMethods && receiptData.paymentMethods.length > 0) {
        checkPageBreak(40);
        // Strong separator line with reduced spacing
        addLine(innerLeft, currentY, innerLeft + innerWidth, currentY);
        currentY += 5; // Reduced from 8
        addText('Payment Information:', innerLeft, currentY, {
            fontSize: 11,
            fontStyle: 'bold'
        });
        currentY += 4; // Reduced from 6
        // Payment table with better proportions
        const paymentHeaders = [
            'Payment Method',
            'Account Number',
            'Account Name'
        ];
        const paymentColWidths = [
            innerWidth * 0.28,
            innerWidth * 0.36,
            innerWidth * 0.36
        ];
        // Header background with stronger color
        pdf.setFillColor(240, 240, 240);
        const headerHeight = 10;
        addRect(innerLeft, currentY - 2, innerWidth, headerHeight, 'F');
        addRect(innerLeft, currentY - 2, innerWidth, headerHeight, 'S');
        // Header text with proper spacing
        let paymentX = innerLeft;
        paymentHeaders.forEach((header, index)=>{
            addText(header, paymentX + 4, currentY + 4, {
                fontSize: 9,
                fontStyle: 'bold'
            });
            if (index < paymentHeaders.length - 1) {
                addLine(paymentX + paymentColWidths[index], currentY - 2, paymentX + paymentColWidths[index], currentY + headerHeight - 2);
            }
            paymentX += paymentColWidths[index];
        });
        currentY += headerHeight;
        // Payment rows with consistent formatting
        const validPayments = receiptData.paymentMethods.filter((payment)=>payment.method.trim() || payment.accountNumber.trim() || payment.accountName.trim());
        validPayments.forEach((payment, index)=>{
            const rowHeight = 10;
            checkPageBreak(rowHeight + 5);
            // Alternating row colors
            if (index % 2 === 1) {
                pdf.setFillColor(248, 248, 248);
                addRect(innerLeft, currentY, innerWidth, rowHeight, 'F');
            }
            // Row border
            addRect(innerLeft, currentY, innerWidth, rowHeight, 'S');
            paymentX = innerLeft;
            // Payment method
            addText(payment.method, paymentX + 4, currentY + 5, {
                fontSize: 9,
                fontStyle: 'bold'
            });
            paymentX += paymentColWidths[0];
            addLine(paymentX, currentY, paymentX, currentY + rowHeight);
            // Account number
            addText(payment.accountNumber, paymentX + 4, currentY + 5, {
                fontSize: 9
            });
            paymentX += paymentColWidths[1];
            addLine(paymentX, currentY, paymentX, currentY + rowHeight);
            // Account name
            addText(payment.accountName, paymentX + 4, currentY + 5, {
                fontSize: 9
            });
            currentY += rowHeight;
        });
        currentY += 4; // Reduced from 8
    }
    // Notes section (if available)
    if (receiptData.notes && receiptData.notes.trim()) {
        checkPageBreak(25);
        // Add separator line
        addLine(innerLeft, currentY, innerLeft + innerWidth, currentY);
        currentY += 4;
        // Notes title
        addText('Notes:', innerLeft, currentY, {
            fontSize: 11,
            fontStyle: 'bold'
        });
        currentY += 6;
        // Notes content with text wrapping
        const maxWidth = innerWidth - 8;
        const lines = pdf.splitTextToSize(receiptData.notes, maxWidth);
        lines.forEach((line)=>{
            checkPageBreak(8);
            addText(line, innerLeft + 4, currentY, {
                fontSize: 10
            });
            currentY += 5;
        });
        currentY += 4;
    }
    // Signature section (if available) with reduced spacing
    if (receiptData.signature) {
        try {
            checkPageBreak(35);
            const img = new Image();
            img.crossOrigin = 'anonymous';
            await new Promise((resolve)=>{
                img.onload = ()=>{
                    try {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        if (ctx) {
                            canvas.width = img.width;
                            canvas.height = img.height;
                            ctx.drawImage(img, 0, 0);
                            const dataURL = canvas.toDataURL('image/png');
                            // Calculate signature dimensions while maintaining aspect ratio
                            const maxSigWidth = 40;
                            const maxSigHeight = 20;
                            const aspectRatio = img.width / img.height;
                            let sigWidth, sigHeight;
                            // Calculate dimensions based on aspect ratio
                            if (aspectRatio > maxSigWidth / maxSigHeight) {
                                // Image is wider, constrain by width
                                sigWidth = maxSigWidth;
                                sigHeight = maxSigWidth / aspectRatio;
                            } else {
                                // Image is taller, constrain by height
                                sigHeight = maxSigHeight;
                                sigWidth = maxSigHeight * aspectRatio;
                            }
                            // Position signature on the right
                            const sigX = innerLeft + innerWidth - sigWidth;
                            addLine(innerLeft, currentY, innerLeft + innerWidth, currentY);
                            currentY += 4; // Reduced from 6
                            pdf.addImage(dataURL, 'PNG', sigX, currentY, sigWidth, sigHeight);
                            currentY += sigHeight + 2; // Reduced from 3
                            addText('Authorized Signature', sigX + sigWidth / 2, currentY, {
                                fontSize: 8,
                                align: 'center'
                            });
                            currentY += 4; // Reduced from 6
                        }
                    } catch (error) {
                        console.error('Error adding signature to PDF:', error);
                    }
                    resolve();
                };
                img.onerror = ()=>{
                    console.error('Error loading signature image');
                    resolve();
                };
                img.src = receiptData.signature;
            });
        } catch (error) {
            console.error('Error processing signature:', error);
        }
    }
    // Footer message with reduced spacing
    checkPageBreak(25);
    currentY += 6; // Reduced from 8
    addText('Thank you for your business!', pageWidth / 2, currentY, {
        fontSize: 11,
        fontStyle: 'bold',
        align: 'center'
    });
    currentY += 5; // Add spacing between messages
    addText('Created by Gonza Systems', pageWidth / 2, currentY, {
        fontSize: 9,
        align: 'center'
    });
    // Return blob or download
    if (returnBlob) {
        return pdf.output('blob');
    } else if (filename) {
        pdf.save(filename);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/deviceDetection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Function to detect iOS devices
__turbopack_context__.s([
    "isAndroid",
    ()=>isAndroid,
    "isIOS",
    ()=>isIOS
]);
const isIOS = ()=>{
    const ua = navigator.userAgent || "";
    // If it's Android, it's NOT iOS
    if (/android/i.test(ua)) return false;
    return /iPad|iPhone|iPod/.test(ua) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
};
const isAndroid = ()=>{
    const ua = navigator.userAgent || "";
    return /android/i.test(ua);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/generatePDF.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generatePDF",
    ()=>generatePDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generateReceiptVectorPDF$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/generateReceiptVectorPDF.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$deviceDetection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/deviceDetection.ts [app-client] (ecmascript)");
;
;
// Legacy function for non-receipt PDFs (keeping image-based approach for now)
const generateImagePDF = async (element, filename, options = {})=>{
    const { generateVectorPDF } = await __turbopack_context__.A("[project]/src/utils/generateVectorPDF.ts [app-client] (ecmascript, async loader)");
    await generateVectorPDF(element, {
        filename,
        orientation: 'landscape',
        format: 'a4',
        margins: {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
        }
    });
};
const generatePDF = async (element, filename, options = {})=>{
    const { autoPrint = false, isReceipt = false } = options;
    try {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$deviceDetection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"])()) {
            // For iOS, use the original approach
            await generateImagePDF(element, filename, options);
        } else {
            // For receipts, we'll need to extract data from the element
            // For now, fall back to image-based approach for non-receipt PDFs
            if (!isReceipt) {
                await generateImagePDF(element, filename, options);
            } else {
                // This will be handled by the PrintableReceipt component
                // which will call generateReceiptVectorPDF directly with structured data
                await generateImagePDF(element, filename, options);
            }
            if (autoPrint) {
                setTimeout(()=>{
                    window.print();
                }, 500);
            }
        }
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/directPrint.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Triggers the device's native print functionality
 * Works on iOS, Android, and desktop browsers
 */ __turbopack_context__.s([
    "directPrint",
    ()=>directPrint
]);
const directPrint = (element, documentName, isThermal)=>{
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        // Fallback: use current window print if popup is blocked
        window.print();
        return;
    }
    // Get all stylesheets from the current document
    const stylesheets = Array.from(document.styleSheets);
    let stylesHtml = '';
    // Include all CSS rules
    stylesheets.forEach((stylesheet)=>{
        try {
            if (stylesheet.href) {
                // External stylesheet
                stylesHtml += `<link rel="stylesheet" href="${stylesheet.href}">`;
            } else if (stylesheet.cssRules) {
                // Inline stylesheet
                stylesHtml += '<style>';
                Array.from(stylesheet.cssRules).forEach((rule)=>{
                    stylesHtml += rule.cssText;
                });
                stylesHtml += '</style>';
            }
        } catch (e) {
            // Some stylesheets might not be accessible due to CORS
            console.warn('Could not access stylesheet:', e);
        }
    });
    // Use the provided document name or default to "Print"
    const title = documentName || 'Print';
    // Thermal-specific CSS for single-sheet printing
    const thermalCSS = isThermal ? `
    @page { 
      size: 80mm auto; 
      margin: 0; 
    }
    .thermal-receipt { 
      font-size: 14px !important; 
      font-weight: 800 !important;
      padding: 8px !important;
      page-break-after: avoid !important;
    }
    .thermal-receipt .font-extrabold { 
      font-weight: 900 !important; 
    }
    .thermal-receipt .font-bold { 
      font-weight: 800 !important; 
    }
  ` : '';
    // Create the print document
    printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${stylesHtml}
        <style>
          @media print {
            body { margin: 0; }
            .print\\:hidden { display: none !important; }
            ${thermalCSS}
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: ${isThermal ? '0' : '20px'};
          }
        </style>
      </head>
      <body>
        ${element.outerHTML}
      </body>
    </html>
  `);
    printWindow.document.close();
    // Track if we've already handled the cleanup
    let cleanupHandled = false;
    // Cleanup function to avoid duplicate redirects
    const handleCleanup = ()=>{
        if (cleanupHandled) return;
        cleanupHandled = true;
        try {
            if (!printWindow.closed) {
                printWindow.close();
            }
        } catch (error) {
            console.warn('Could not close print window:', error);
        }
    // No redirect needed - user stays on current page after printing
    };
    // Wait for content to load, then trigger print
    printWindow.onload = ()=>{
        printWindow.focus();
        printWindow.print();
        // Listen for when the print dialog is closed
        printWindow.onafterprint = ()=>{
            handleCleanup();
        };
        // Listen for beforeunload to detect cancel scenarios
        printWindow.onbeforeunload = ()=>{
            if (!cleanupHandled) {
                setTimeout(handleCleanup, 100);
            }
        };
        // Reduced timeout for better UX - close after 1.5 seconds
        setTimeout(()=>{
            handleCleanup();
        }, 1500);
    };
    // Error handling for window load failure
    printWindow.onerror = ()=>{
        console.warn('Print window failed to load');
        handleCleanup();
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/NewSale.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewSaleDraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNewSaleDraft.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewSaleActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNewSaleActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sales$2f$NewSaleLoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sales/NewSaleLoadingState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sales$2f$NewSaleNoBusinessState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sales/NewSaleNoBusinessState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sales$2f$NewSaleAuthWarning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sales/NewSaleAuthWarning.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sales$2f$NewSaleContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sales/NewSaleContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
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
const NewSale = ()=>{
    _s();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocation"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { currentBusiness, isLoading: businessLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { hasPermission, isLoading: profilesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    const editSale = location.state?.editSale;
    // Use a key to force re-mounting of the form component to clear all state
    const [formKey, setFormKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const handleResetForm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "NewSale.useCallback[handleResetForm]": ()=>{
            setFormKey({
                "NewSale.useCallback[handleResetForm]": (prev)=>prev + 1
            }["NewSale.useCallback[handleResetForm]"]);
        }
    }["NewSale.useCallback[handleResetForm]"], []);
    const { showDraftNotification, draftData, handleLoadDraft, handleDismissDraft, clearDraft } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewSaleDraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNewSaleDraft"])(editSale);
    const { isReceiptOpen, completedSale, newCustomerDialogOpen, includePaymentInfo, customers, handleSaleComplete, handleReceiptClose, handleAddCustomer, handleOpenNewCustomerDialog, setNewCustomerDialogOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewSaleActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNewSaleActions"])(editSale, handleResetForm);
    // Show loading while business context or profiles is loading
    if (businessLoading || profilesLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sales$2f$NewSaleLoadingState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/pages/NewSale.tsx",
            lineNumber: 58,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Show message if no business is selected
    if (!currentBusiness) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sales$2f$NewSaleNoBusinessState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/pages/NewSale.tsx",
            lineNumber: 63,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Permission Check
    const canEdit = editSale ? hasPermission('sales', 'edit') : true;
    const canCreate = !editSale ? hasPermission('sales', 'create') : true;
    if (!canEdit || !canCreate) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                    variant: "destructive",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/NewSale.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                            children: "Access Denied"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/NewSale.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            children: [
                                "You do not have permission to ",
                                editSale ? 'edit this sale' : 'create a new sale',
                                ". Please contact your administrator if you believe this is an error."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/NewSale.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/NewSale.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>navigate('/sales'),
                        variant: "outline",
                        children: "Back to Sales"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/NewSale.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/NewSale.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/NewSale.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const wrappedHandleSaleComplete = (sale, showReceipt, includePaymentInfo, selectedCategoryId, onClearDraft, saleDate, thermalPrintAfterSave)=>{
        return handleSaleComplete(sale, showReceipt, includePaymentInfo, selectedCategoryId, clearDraft || onClearDraft, saleDate, thermalPrintAfterSave);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto",
        children: [
            !user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sales$2f$NewSaleAuthWarning$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/NewSale.tsx",
                lineNumber: 96,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sales$2f$NewSaleContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                editSale: editSale,
                currency: settings.currency,
                showDraftNotification: showDraftNotification,
                draftData: draftData,
                onLoadDraft: handleLoadDraft,
                onDismissDraft: handleDismissDraft,
                onSaleComplete: wrappedHandleSaleComplete,
                onClearDraft: clearDraft,
                customers: customers || [],
                onAddNewCustomer: handleOpenNewCustomerDialog,
                isReceiptOpen: isReceiptOpen,
                completedSale: completedSale,
                includePaymentInfo: includePaymentInfo,
                onReceiptClose: handleReceiptClose,
                newCustomerDialogOpen: newCustomerDialogOpen,
                onCloseNewCustomerDialog: ()=>setNewCustomerDialogOpen(false),
                onAddCustomer: handleAddCustomer
            }, formKey, false, {
                fileName: "[project]/src/pages/NewSale.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/NewSale.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NewSale, "wt4tV8yDKRznzw6EaHCM9Wt6s7A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewSaleDraft$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNewSaleDraft"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNewSaleActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNewSaleActions"]
    ];
});
_c = NewSale;
const __TURBOPACK__default__export__ = NewSale;
var _c;
__turbopack_context__.k.register(_c, "NewSale");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_157ee851._.js.map