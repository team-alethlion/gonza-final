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
"[project]/src/utils/exportCustomersToCSV.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportCustomersToCSV",
    ()=>exportCustomersToCSV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
const exportCustomersToCSV = (customers, currency = 'UGX', getCategoryName, getCustomerLifetimePurchases)=>{
    if (customers.length === 0) {
        alert('No customers to export');
        return;
    }
    const headers = [
        'Full Name',
        'Phone Number',
        'Email',
        'Gender',
        'Location',
        'Birthday',
        'Category',
        'Lifetime Value',
        'Total Orders',
        'Notes',
        'Tags',
        'Created Date'
    ];
    const csvData = customers.map((customer)=>{
        const lifetimeData = getCustomerLifetimePurchases ? getCustomerLifetimePurchases(customer.fullName) : {
            total: 0,
            count: 0
        };
        return [
            `"${(customer.fullName || '').replace(/"/g, '""')}"`,
            `"${(customer.phoneNumber || '').replace(/"/g, '""')}"`,
            `"${(customer.email || '').replace(/"/g, '""')}"`,
            `"${(customer.gender || '').replace(/"/g, '""')}"`,
            `"${(customer.location || '').replace(/"/g, '""')}"`,
            customer.birthday ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(customer.birthday), 'yyyy-MM-dd') : '',
            `"${getCategoryName(customer.categoryId || null).replace(/"/g, '""')}"`,
            lifetimeData.total.toFixed(2),
            lifetimeData.count.toString(),
            `"${(customer.notes || '').replace(/"/g, '""')}"`,
            `"${(customer.tags || []).join(', ').replace(/"/g, '""')}"`,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(customer.createdAt), 'yyyy-MM-dd HH:mm:ss')
        ];
    });
    const csvContent = [
        headers,
        ...csvData
    ].map((row)=>row.join(',')).join('\n');
    const blob = new Blob([
        csvContent
    ], {
        type: 'text/csv;charset=utf-8;'
    });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `customers-${currency}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'yyyy-MM-dd')}.csv`);
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
"[project]/src/utils/exportCustomersToPDF.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportCustomersToPDF",
    ()=>exportCustomersToPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
;
const exportCustomersToPDF = (customers, getCategoryName, currency, businessName, businessLogo, getCustomerLifetimePurchases)=>{
    if (customers.length === 0) {
        alert('No customers to export');
        return;
    }
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('landscape', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 10;
    const lineHeight = 6;
    let yPosition = margin;
    // Add header
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(businessName || 'Business Name', margin, yPosition);
    yPosition += 8;
    doc.setFontSize(14);
    doc.text('Customer Report', margin, yPosition);
    yPosition += 6;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Generated on: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'MMMM dd, yyyy')}`, margin, yPosition);
    yPosition += 4;
    doc.text(`Currency: ${currency || 'UGX'}`, margin, yPosition);
    yPosition += 10;
    // Summary section
    const totalCustomers = customers.length;
    const categoryCounts = {};
    customers.forEach((customer)=>{
        const categoryName = getCategoryName(customer.categoryId || null);
        categoryCounts[categoryName] = (categoryCounts[categoryName] || 0) + 1;
    });
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Summary:', margin, yPosition);
    yPosition += lineHeight;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Total Customers: ${totalCustomers}`, margin + 5, yPosition);
    yPosition += lineHeight;
    // Category breakdown
    Object.entries(categoryCounts).forEach(([category, count])=>{
        doc.text(`${category}: ${count}`, margin + 5, yPosition);
        yPosition += lineHeight;
    });
    yPosition += 5;
    // Table headers
    const headers = [
        'Name',
        'Phone',
        'Email',
        'Gender',
        'Location',
        'Birthday',
        'Category',
        'Lifetime Value',
        'Orders'
    ];
    const columnWidths = [
        30,
        20,
        30,
        12,
        25,
        18,
        20,
        25,
        15
    ];
    const tableWidth = columnWidths.reduce((sum, width)=>sum + width, 0);
    const startX = (pageWidth - tableWidth) / 2;
    // Function to add page if needed
    const checkPageBreak = (requiredHeight)=>{
        if (yPosition + requiredHeight > pageHeight - margin) {
            doc.addPage();
            yPosition = margin;
            // Add table title on new page
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text('Customer List', margin, yPosition);
            yPosition += 8;
            // Add table header on new page
            drawTableHeader();
            return true;
        }
        return false;
    };
    // Function to draw table header
    const drawTableHeader = ()=>{
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setFillColor(240, 240, 240);
        doc.rect(startX, yPosition, tableWidth, 8, 'F');
        let xPosition = startX;
        headers.forEach((header, index)=>{
            doc.text(header, xPosition + 2, yPosition + 5);
            xPosition += columnWidths[index];
        });
        yPosition += 8;
    };
    // Add initial table title
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Customer List', margin, yPosition);
    yPosition += 8;
    // Draw table header
    checkPageBreak(15);
    drawTableHeader();
    // Draw table rows
    doc.setFont('helvetica', 'normal');
    customers.forEach((customer, index)=>{
        checkPageBreak(8);
        // Alternate row colors
        if (index % 2 === 0) {
            doc.setFillColor(248, 248, 248);
            doc.rect(startX, yPosition, tableWidth, 6, 'F');
        }
        const lifetimeData = getCustomerLifetimePurchases ? getCustomerLifetimePurchases(customer.fullName) : {
            total: 0,
            count: 0
        };
        let xPosition = startX;
        const rowData = [
            customer.fullName || '',
            customer.phoneNumber || '',
            customer.email || '',
            customer.gender || '',
            customer.location || '',
            customer.birthday ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(customer.birthday), 'MMM dd') : '',
            getCategoryName(customer.categoryId || null),
            `${currency || 'UGX'} ${lifetimeData.total.toLocaleString()}`,
            lifetimeData.count.toString()
        ];
        rowData.forEach((data, colIndex)=>{
            const cellWidth = columnWidths[colIndex];
            const text = data.toString();
            // Truncate text if too long
            const maxChars = Math.floor(cellWidth / 2.5);
            const truncatedText = text.length > maxChars ? text.substring(0, maxChars - 3) + '...' : text;
            doc.text(truncatedText, xPosition + 2, yPosition + 4);
            xPosition += cellWidth;
        });
        yPosition += 6;
    });
    // Add footer with page numbers
    const totalPages = doc.getNumberOfPages();
    for(let i = 1; i <= totalPages; i++){
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 25, pageHeight - 5);
    }
    // Save the PDF
    const filename = `customers_report_${currency || 'UGX'}_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'yyyy-MM-dd')}.pdf`;
    doc.save(filename);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/generateNoticePDF.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateNoticePDF",
    ()=>generateNoticePDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
;
const generateNoticePDF = async (noticeData, businessSettings)=>{
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    let yPosition = margin;
    // Function to add watermark to current page
    const addWatermark = ()=>{
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(150, 150, 150); // Light gray color
        doc.text('Created By Gonza Systems', pageWidth / 2, pageHeight - 10, {
            align: 'center'
        });
        doc.setTextColor(0, 0, 0); // Reset to black
    };
    try {
        // Set default font
        doc.setFont('helvetica', 'normal');
        // Helper function to check if we need a new page
        const checkPageBreak = (requiredSpace)=>{
            if (yPosition + requiredSpace > pageHeight - margin - 15) {
                addWatermark(); // Add watermark to current page before creating new one
                doc.addPage();
                yPosition = margin;
            }
        };
        // Helper function to add text with proper word wrapping and page breaks
        const addWrappedText = (text, x, y, maxWidth, fontSize = 11)=>{
            doc.setFontSize(fontSize);
            const splitText = doc.splitTextToSize(text, maxWidth);
            let currentY = y;
            splitText.forEach((line)=>{
                // Check if we need a new page before adding the line
                checkPageBreak(6); // 6 units space needed for a line
                doc.text(line, x, yPosition);
                yPosition += 5; // Line spacing
            });
            return yPosition;
        };
        // Business Header with Logo on left and details on right
        const headerHeight = 25;
        // Business Logo on the left (if available)
        if (businessSettings.businessLogo) {
            try {
                // Create a temporary image to get actual dimensions
                const img = new Image();
                img.src = businessSettings.businessLogo;
                // Wait for image to load to get dimensions
                await new Promise((resolve, reject)=>{
                    img.onload = resolve;
                    img.onerror = reject;
                    // If already loaded (cached), resolve immediately
                    if (img.complete) resolve(img);
                });
                // Calculate proper dimensions maintaining aspect ratio
                const maxLogoWidth = 40;
                const maxLogoHeight = 20;
                const aspectRatio = img.width / img.height;
                let logoWidth = maxLogoWidth;
                let logoHeight = logoWidth / aspectRatio;
                // If height exceeds max, scale down based on height
                if (logoHeight > maxLogoHeight) {
                    logoHeight = maxLogoHeight;
                    logoWidth = logoHeight * aspectRatio;
                }
                // Add logo on the left
                doc.addImage(businessSettings.businessLogo, 'JPEG', margin, yPosition, logoWidth, logoHeight);
            } catch (error) {
                console.error('Error adding business logo:', error);
            }
        }
        // Business Details on the right with right alignment
        const rightMargin = pageWidth - margin;
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text(businessSettings.businessName || 'Business Name', rightMargin, yPosition + 5, {
            align: 'right'
        });
        // Add spacing between business name and details
        yPosition += 12;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        if (businessSettings.businessAddress) {
            const addressLines = doc.splitTextToSize(businessSettings.businessAddress, 80);
            addressLines.forEach((line, index)=>{
                doc.text(line, rightMargin, yPosition + index * 4, {
                    align: 'right'
                });
            });
            yPosition += addressLines.length * 4 - 4;
        }
        if (businessSettings.businessPhone) {
            yPosition += 4;
            doc.text(`Phone: ${businessSettings.businessPhone}`, rightMargin, yPosition, {
                align: 'right'
            });
        }
        if (businessSettings.businessEmail) {
            yPosition += 4;
            doc.text(`Email: ${businessSettings.businessEmail}`, rightMargin, yPosition, {
                align: 'right'
            });
        }
        yPosition += 8;
        // Horizontal line under the header
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 15;
        // Date
        checkPageBreak(15);
        doc.setFontSize(11);
        const currentDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'MMMM d, yyyy');
        doc.text(`Date: ${currentDate}`, margin, yPosition);
        yPosition += 12;
        // Customer Address Block
        checkPageBreak(25);
        doc.setFont('helvetica', 'bold');
        doc.text(noticeData.customer.fullName || 'Valued Customer', margin, yPosition);
        yPosition += 5;
        doc.setFont('helvetica', 'normal');
        if (noticeData.customer.location) {
            yPosition = addWrappedText(noticeData.customer.location, margin, yPosition, pageWidth - 2 * margin, 11);
            yPosition += 2;
        }
        if (noticeData.customer.email) {
            checkPageBreak(8);
            doc.text(noticeData.customer.email, margin, yPosition);
            yPosition += 5;
        }
        yPosition += 8;
        // Subject Line
        if (noticeData.subject) {
            checkPageBreak(15);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            yPosition = addWrappedText(`Re: ${noticeData.subject}`, margin, yPosition, pageWidth - 2 * margin, 12);
            yPosition += 6;
        }
        // Salutation
        checkPageBreak(15);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.text(`Dear ${noticeData.customer.fullName || 'Valued Customer'},`, margin, yPosition);
        yPosition += 8;
        // Main Content - Split by paragraphs and handle page breaks
        if (noticeData.content) {
            const paragraphs = noticeData.content.split('\n\n').filter((p)=>p.trim() !== '');
            paragraphs.forEach((paragraph, index)=>{
                // Estimate space needed for this paragraph
                const estimatedLines = Math.ceil(paragraph.length / 80); // Rough estimate
                const estimatedSpace = estimatedLines * 5 + 10; // Line height + some padding
                checkPageBreak(estimatedSpace);
                yPosition = addWrappedText(paragraph.trim(), margin, yPosition, pageWidth - 2 * margin, 11);
                // Add smaller gap between paragraphs (only if not the last paragraph)
                if (index < paragraphs.length - 1) {
                    yPosition += 6;
                }
            });
            yPosition += 10;
        }
        // Closing and signature section
        checkPageBreak(60); // Reserve space for closing, signature, and sender info
        doc.text('Yours faithfully,', margin, yPosition);
        yPosition += 20; // Space for signature
        // Signature (if available from business settings)
        if (businessSettings.signature) {
            try {
                // Create a temporary image to get actual dimensions for signature
                const sigImg = new Image();
                sigImg.src = businessSettings.signature;
                // Wait for signature image to load to get dimensions
                await new Promise((resolve, reject)=>{
                    sigImg.onload = resolve;
                    sigImg.onerror = reject;
                    // If already loaded (cached), resolve immediately
                    if (sigImg.complete) resolve(sigImg);
                });
                // Calculate proper dimensions maintaining aspect ratio for signature
                const maxSigWidth = 50;
                const maxSigHeight = 25;
                const sigAspectRatio = sigImg.width / sigImg.height;
                let signatureWidth = maxSigWidth;
                let signatureHeight = signatureWidth / sigAspectRatio;
                // If height exceeds max, scale down based on height
                if (signatureHeight > maxSigHeight) {
                    signatureHeight = maxSigHeight;
                    signatureWidth = signatureHeight * sigAspectRatio;
                }
                // Add signature
                doc.addImage(businessSettings.signature, 'JPEG', margin, yPosition, signatureWidth, signatureHeight);
                yPosition += signatureHeight + 5;
            } catch (error) {
                console.error('Error adding signature:', error);
                yPosition += 15; // Add space even if signature fails
            }
        } else {
            yPosition += 15; // Add space for manual signature
        }
        // Sender name and business
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        const senderName = noticeData.senderName || businessSettings.businessName || 'Management';
        doc.text(senderName, margin, yPosition);
        yPosition += 5;
        if (businessSettings.businessName && noticeData.senderName) {
            doc.setFont('helvetica', 'normal');
            doc.text(businessSettings.businessName, margin, yPosition);
        }
        // Add watermark to the final page
        addWatermark();
        // Generate filename
        const customerName = noticeData.customer.fullName?.replace(/[^a-zA-Z0-9]/g, '_') || 'Customer';
        const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'yyyy-MM-dd');
        const filename = `Notice_${customerName}_${dateStr}.pdf`;
        // Save the PDF
        doc.save(filename);
    } catch (error) {
        console.error('Error generating notice PDF:', error);
        throw new Error('Failed to generate notice PDF. Please try again.');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/formalizeText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Transforms casual text into formal business language
 */ __turbopack_context__.s([
    "enhanceForBusiness",
    ()=>enhanceForBusiness,
    "formalizeText",
    ()=>formalizeText
]);
const formalizeText = (text)=>{
    if (!text || text.trim() === '') return text;
    // Common casual to formal replacements
    const replacements = {
        // Contractions
        "can't": "cannot",
        "won't": "will not",
        "don't": "do not",
        "didn't": "did not",
        "haven't": "have not",
        "hasn't": "has not",
        "isn't": "is not",
        "aren't": "are not",
        "wasn't": "was not",
        "weren't": "were not",
        "I'm": "I am",
        "you're": "you are",
        "we're": "we are",
        "they're": "they are",
        "it's": "it is",
        "that's": "that is",
        "here's": "here is",
        "there's": "there is",
        "we've": "we have",
        "they've": "they have",
        "I've": "I have",
        "you've": "you have",
        // Casual words to formal
        "ok": "acceptable",
        "okay": "acceptable",
        "thanks": "thank you",
        "hi": "greetings",
        "bye": "goodbye",
        "asap": "as soon as possible",
        "fyi": "for your information",
        "btw": "incidentally",
        "etc": "and so forth",
        "gonna": "going to",
        "wanna": "want to",
        "gotta": "have to",
        "kinda": "somewhat",
        "sorta": "somewhat",
        // Business improvements
        "get": "receive",
        "got": "received",
        "give": "provide",
        "gave": "provided",
        "ask": "request",
        "asked": "requested",
        "tell": "inform",
        "told": "informed",
        "show": "demonstrate",
        "showed": "demonstrated",
        "help": "assist",
        "helped": "assisted",
        "fix": "resolve",
        "fixed": "resolved",
        "buy": "purchase",
        "bought": "purchased",
        "sell": "offer",
        "sold": "provided"
    };
    let formalizedText = text;
    // Apply replacements (case-insensitive for whole words only)
    Object.entries(replacements).forEach(([casual, formal])=>{
        const regex = new RegExp(`\\b${casual}\\b`, 'gi');
        formalizedText = formalizedText.replace(regex, formal);
    });
    // Capitalize first letter of sentences
    formalizedText = formalizedText.replace(/(^|\. )([a-z])/g, (match, prefix, letter)=>{
        return prefix + letter.toUpperCase();
    });
    // Ensure proper sentence ending
    formalizedText = formalizedText.trim();
    if (!formalizedText.endsWith('.') && !formalizedText.endsWith('!') && !formalizedText.endsWith('?')) {
        formalizedText += '.';
    }
    return formalizedText;
};
const enhanceForBusiness = (text)=>{
    if (!text || text.trim() === '') return text;
    let enhanced = formalizeText(text);
    // Add professional opening phrases if the text seems too direct
    if (!enhanced.toLowerCase().includes('we are') && !enhanced.toLowerCase().includes('we would like') && !enhanced.toLowerCase().includes('please')) {
        if (enhanced.toLowerCase().startsWith('our') || enhanced.toLowerCase().startsWith('the')) {
            enhanced = `We would like to inform you that ${enhanced.charAt(0).toLowerCase() + enhanced.slice(1)}`;
        }
    }
    // Ensure polite language
    if (enhanced.toLowerCase().includes('you must') || enhanced.toLowerCase().includes('you have to')) {
        enhanced = enhanced.replace(/you must/gi, 'we kindly request that you');
        enhanced = enhanced.replace(/you have to/gi, 'we would appreciate if you could');
    }
    return enhanced;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/noticeTemplates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTemplateById",
    ()=>getTemplateById,
    "getTemplatesByCategory",
    ()=>getTemplatesByCategory,
    "noticeTemplates",
    ()=>noticeTemplates
]);
const noticeTemplates = [
    {
        id: 'payment_reminder',
        name: 'Payment Reminder',
        subject: 'Payment Reminder - Account Status',
        content: `We hope this letter finds you well. We are writing to kindly remind you about your outstanding payment.

We appreciate your prompt attention to this matter and thank you for your continued business.`,
        category: 'payment'
    },
    {
        id: 'policy_update',
        name: 'Policy Update',
        subject: 'Important Update to Our Business Policies',
        content: `We are writing to inform you of important updates to our business policies that may affect your account.

These changes will take effect shortly. We appreciate your understanding and continued partnership.`,
        category: 'policy'
    },
    {
        id: 'thank_you',
        name: 'Thank You Letter',
        subject: 'Thank You for Your Business',
        content: `We wanted to take a moment to express our sincere gratitude for your continued support and trust in our business.

We look forward to serving you for many years to come.`,
        category: 'gratitude'
    },
    {
        id: 'service_announcement',
        name: 'Service Announcement',
        subject: 'Important Service Update',
        content: `We are excited to share some important updates about our services that will enhance your experience with us.

We believe these improvements will provide you with even better service and value.`,
        category: 'announcement'
    },
    {
        id: 'account_update',
        name: 'Account Status Update',
        subject: 'Account Status Update',
        content: `We are writing to provide you with an important update regarding your account with us.

If you have any questions or concerns, please don't hesitate to contact us.`,
        category: 'general'
    },
    {
        id: 'general_notice',
        name: 'General Business Communication',
        subject: 'Business Communication',
        content: `We hope this message finds you well. We wanted to reach out to you regarding an important matter.

Thank you for your attention to this matter.`,
        category: 'general'
    }
];
const getTemplateById = (id)=>{
    return noticeTemplates.find((template)=>template.id === id);
};
const getTemplatesByCategory = (category)=>{
    if (category === 'all') return noticeTemplates;
    return noticeTemplates.filter((template)=>template.category === category);
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
"[project]/src/utils/smsUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canSendSMS",
    ()=>canSendSMS,
    "formatMessageForSMS",
    ()=>formatMessageForSMS,
    "formatPhoneForSMS",
    ()=>formatPhoneForSMS,
    "getBirthdayMessage",
    ()=>getBirthdayMessage,
    "getThankYouMessage",
    ()=>getThankYouMessage,
    "getWeMissYouMessage",
    ()=>getWeMissYouMessage,
    "openSMSApp",
    ()=>openSMSApp,
    "openWhatsApp",
    ()=>openWhatsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$deviceDetection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/deviceDetection.ts [app-client] (ecmascript)");
;
const formatPhoneForSMS = (phoneNumber)=>{
    // Remove all non-digit characters except + at the beginning
    const cleaned = phoneNumber.replace(/[^\d+]/g, '');
    // If it starts with +, keep it, otherwise just return the digits
    if (cleaned.startsWith('+')) {
        return cleaned;
    }
    return cleaned;
};
const formatMessageForSMS = (content, businessName)=>{
    // Replace non-breaking spaces and other special whitespace with standard spaces
    // \u00A0 is non-breaking space, \u200B is zero-width space, etc.
    let sanitized = content.replace(/[\u00A0\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000]/g, ' ');
    // Remove excessive whitespace and format for SMS
    let formatted = sanitized.replace(/\n\s*\n/g, '\n\n') // Clean up multiple line breaks
    .replace(/^\s+|\s+$/g, '') // Trim whitespace
    .substring(0, 800); // Limit to reasonable SMS length
    // Add business signature if provided
    if (businessName) {
        formatted += `\n\n- ${businessName}`;
    }
    return formatted;
};
const getBirthdayMessage = (customerName)=>{
    return `🎉 Happy Birthday ${customerName}! 🎉

Wishing you a day filled with joy, love, and great memories. Thank you for being a valued part of our family. We're grateful for your support and wish you nothing but happiness in the year ahead!

May this new year of your life bring you wonderful opportunities and amazing experiences.`;
};
const getWeMissYouMessage = (customerName)=>{
    return `Dear ${customerName},

We Miss You!

It's been a while since we last heard from you, and we just wanted to reach out. We truly value you as a customer and would love to see you again.

If there's anything we can do to assist you or if you need any help, we're always here for you!

We hope to serve you again soon.

Yours faithfully,`;
};
const getThankYouMessage = (sale, settings)=>{
    const saleTotal = sale.items.reduce((total, item)=>{
        const itemSubtotal = item.price * item.quantity;
        const discountAmount = item.discountType === 'amount' ? item.discountAmount || 0 : itemSubtotal * (item.discountPercentage || 0) / 100;
        return total + (itemSubtotal - discountAmount);
    }, 0);
    // Add tax if applicable
    const taxAmount = saleTotal * ((sale.taxRate || 0) / 100);
    const totalWithTax = saleTotal + taxAmount;
    // Create items list
    const itemsList = sale.items.map((item)=>`• ${item.description} (Qty: ${item.quantity})`).join('\n');
    return `Dear ${sale.customerName},

We wanted to take a moment to express our sincere gratitude for your continued support and trust in our business.

Receipt Number: ${sale.receiptNumber}

Items Purchased:
${itemsList}

Total Amount: ${settings.currency} ${totalWithTax.toLocaleString()}

In case of any inquiries please call ${settings.businessPhone && settings.businessPhone !== '(123) 456-7890' ? settings.businessPhone : 'our office'}.

We appreciate your business and look forward to serving you again.

Yours faithfully,
${settings.businessName || 'Management'}`;
};
const openSMSApp = (options)=>{
    const { phoneNumber, message } = options;
    const formattedPhone = formatPhoneForSMS(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
    let smsUrl;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$deviceDetection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIOS"])()) {
        // iOS uses sms: scheme
        smsUrl = `sms:${formattedPhone}&body=${encodedMessage}`;
    } else {
        // Android uses sms: scheme with different parameter format
        smsUrl = `sms:${formattedPhone}?body=${encodedMessage}`;
    }
    try {
        window.open(smsUrl, '_self');
    } catch (error) {
        console.error('Failed to open SMS app:', error);
        // Fallback: copy message to clipboard
        navigator.clipboard?.writeText(message).then(()=>{
            alert('SMS app not available. Message copied to clipboard.');
        }).catch(()=>{
            alert('SMS app not available and clipboard access denied.');
        });
    }
};
const openWhatsApp = (options)=>{
    const { phoneNumber, message } = options;
    const formattedPhone = formatPhoneForSMS(phoneNumber);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    try {
        window.open(whatsappUrl, '_blank');
    } catch (error) {
        console.error('Failed to open WhatsApp:', error);
        // Fallback: copy message to clipboard
        navigator.clipboard?.writeText(message).then(()=>{
            alert('WhatsApp not available. Message copied to clipboard.');
        }).catch(()=>{
            alert('WhatsApp not available and clipboard access denied.');
        });
    }
};
const canSendSMS = (customer)=>{
    return !!(customer.phoneNumber && customer.phoneNumber.trim());
};
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
"[project]/src/utils/generatePaymentReminderPDF.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generatePaymentReminderPDF",
    ()=>generatePaymentReminderPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
;
;
;
;
;
const fetchInstallmentPayments = async (saleId)=>{
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('installment_payments').select('id, amount, payment_date').eq('sale_id', saleId).order('payment_date', {
            ascending: false
        });
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error('Error fetching installment payments:', error);
        return [];
    }
};
const generatePaymentReminderPDF = async (customer, unpaidSales, totalAmountDue, settings, customMessage, outputType = 'save')=>{
    try {
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const pageWidth = doc.internal.pageSize.width;
        const pageHeight = doc.internal.pageSize.height;
        const margin = 20;
        // Function to add watermark to current page
        const addWatermark = ()=>{
            doc.setFontSize(8);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(150, 150, 150); // Light gray color
            doc.text('Created By Gonza Systems', pageWidth / 2, pageHeight - 10, {
                align: 'center'
            });
            doc.setTextColor(0, 0, 0); // Reset to black
        };
        // Header
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('PAYMENT REMINDER NOTICE', pageWidth / 2, 30, {
            align: 'center'
        });
        // Business details
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        let yPos = 50;
        doc.text(settings.businessName, margin, yPos);
        yPos += 6;
        doc.text(settings.businessAddress, margin, yPos);
        yPos += 6;
        doc.text(`Phone: ${settings.businessPhone}`, margin, yPos);
        yPos += 6;
        doc.text(`Email: ${settings.businessEmail}`, margin, yPos);
        yPos += 15;
        // Date and customer info
        doc.text(`Date: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'MMMM d, yyyy')}`, pageWidth - margin - 60, 50, {
            align: 'left'
        });
        doc.setFont('helvetica', 'bold');
        doc.text('TO:', margin, yPos);
        yPos += 8;
        doc.setFont('helvetica', 'normal');
        doc.text(customer.fullName, margin, yPos);
        yPos += 6;
        if (customer.phoneNumber) {
            doc.text(`Phone: ${customer.phoneNumber}`, margin, yPos);
            yPos += 6;
        }
        if (customer.email) {
            doc.text(`Email: ${customer.email}`, margin, yPos);
            yPos += 6;
        }
        if (customer.location) {
            doc.text(`Address: ${customer.location}`, margin, yPos);
            yPos += 6;
        }
        yPos += 15;
        // Reminder message
        doc.setFont('helvetica', 'normal');
        doc.text(`Dear ${customer.fullName},`, margin, yPos);
        yPos += 8;
        // Use custom message if provided, otherwise use default based on sale type
        const hasInstallmentSales = unpaidSales.some((sale)=>sale.paymentStatus === 'Installment Sale');
        const defaultMessage = hasInstallmentSales ? 'Our records show that you have outstanding installment payments for the items purchased. We kindly request you to complete the remaining payments according to your payment schedule.\n\nPlease reach out to us if you need any assistance or clarification regarding your installment plan.' : 'Our records show that you have pending payments for the following items purchased on credit. We kindly request you to complete payment at your earliest convenience.\n\nPlease reach out to us if you need any assistance or clarification.';
        const reminderText = customMessage || defaultMessage;
        const splitText = doc.splitTextToSize(reminderText, pageWidth - 2 * margin);
        doc.text(splitText, margin, yPos);
        yPos += splitText.length * 6 + 10;
        // Separate regular unpaid sales and installment sales
        const regularUnpaidSales = unpaidSales.filter((sale)=>sale.paymentStatus !== 'Installment Sale');
        const installmentSales = unpaidSales.filter((sale)=>sale.paymentStatus === 'Installment Sale');
        // Determine table headers based on sale types
        const hasInstallmentSalesWithDue = installmentSales.length > 0;
        const tableHeaders = hasInstallmentSalesWithDue ? [
            'Invoice #',
            'Product Name',
            'Qty',
            'Paid Amount',
            'Outstanding',
            'Sale Date',
            'Total Sale'
        ] : [
            'Invoice #',
            'Product Name',
            'Qty',
            'Price',
            'Total',
            'Sale Date',
            'Sale Total'
        ];
        // Prepare table data - start with regular unpaid sales
        const unpaidItems = regularUnpaidSales.flatMap((sale)=>{
            const saleTotal = sale.items.reduce((itemSum, item)=>itemSum + item.price * item.quantity, 0);
            const taxAmount = saleTotal * ((sale.taxRate || 0) / 100);
            const totalWithTax = saleTotal + taxAmount;
            return sale.items.map((item)=>[
                    sale.receiptNumber,
                    item.description,
                    item.quantity.toString(),
                    `${settings.currency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(item.price)}`,
                    `${settings.currency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(item.price * item.quantity)}`,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(sale.date, 'MMM d, yyyy'),
                    `${settings.currency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(totalWithTax)}` // Add total sale amount
                ]);
        });
        // Add installment sales with their outstanding balances
        const installmentItems = await Promise.all(installmentSales.map(async (sale)=>{
            const payments = await fetchInstallmentPayments(sale.id);
            const totalPaid = payments.reduce((sum, payment)=>sum + payment.amount, 0);
            const saleTotal = sale.items.reduce((itemSum, item)=>itemSum + item.price * item.quantity, 0);
            const taxAmount = saleTotal * ((sale.taxRate || 0) / 100);
            const totalWithTax = saleTotal + taxAmount;
            const outstandingBalance = Math.max(0, totalWithTax - totalPaid);
            // For installment sales, show only a single row with the outstanding balance
            if (outstandingBalance > 0) {
                const mainItem = sale.items[0]; // Use first item as representative
                const itemsDescription = sale.items.length > 1 ? `${mainItem.description} (+${sale.items.length - 1} more items)` : mainItem.description;
                return [
                    [
                        sale.receiptNumber,
                        itemsDescription + ' (Installment)',
                        sale.items.reduce((sum, item)=>sum + item.quantity, 0).toString(),
                        `${settings.currency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(totalPaid)}`,
                        `${settings.currency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(outstandingBalance)}`,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(sale.date, 'MMM d, yyyy'),
                        `${settings.currency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(totalWithTax)}` // Add total sale amount
                    ]
                ];
            }
            return [];
        }));
        // Flatten installment items
        const flattenedInstallmentItems = installmentItems.flat();
        // Combine all items
        const allItems = [
            ...unpaidItems,
            ...flattenedInstallmentItems
        ];
        // Calculate outstanding balance 
        const regularOutstanding = regularUnpaidSales.reduce((sum, sale)=>{
            const saleTotal = sale.items.reduce((itemSum, item)=>itemSum + item.price * item.quantity, 0);
            const taxAmount = saleTotal * ((sale.taxRate || 0) / 100);
            return sum + saleTotal + taxAmount;
        }, 0);
        // Calculate installment outstanding
        const installmentOutstanding = await Promise.all(installmentSales.map(async (sale)=>{
            const payments = await fetchInstallmentPayments(sale.id);
            const totalPaid = payments.reduce((sum, payment)=>sum + payment.amount, 0);
            const saleTotal = sale.items.reduce((itemSum, item)=>itemSum + item.price * item.quantity, 0);
            const taxAmount = saleTotal * ((sale.taxRate || 0) / 100);
            const totalWithTax = saleTotal + taxAmount;
            return Math.max(0, totalWithTax - totalPaid);
        }));
        const totalInstallmentOutstanding = (await Promise.all(installmentOutstanding)).reduce((sum, amount)=>sum + amount, 0);
        // Total outstanding balance
        const correctedOutstandingBalance = regularOutstanding + totalInstallmentOutstanding;
        // Add total row
        allItems.push([
            '',
            '',
            '',
            '',
            'TOTAL OUTSTANDING:',
            `${settings.currency} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(correctedOutstandingBalance)}`,
            ''
        ]);
        // Create table using autoTable
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
            startY: yPos,
            head: [
                tableHeaders
            ],
            body: allItems,
            theme: 'grid',
            headStyles: {
                fillColor: [
                    255,
                    145,
                    77
                ],
                textColor: 255,
                fontStyle: 'bold'
            },
            bodyStyles: {
                fontSize: 10
            },
            didParseCell: function(data) {
                // Style the total row
                if (data.row.index === allItems.length - 1) {
                    data.cell.styles.fillColor = [
                        255,
                        200,
                        150
                    ];
                    data.cell.styles.fontStyle = 'bold';
                }
                // Style payment status rows (rows that contain payment information)
                if (data.cell.text && data.cell.text[0] && data.cell.text[0].includes('Payment Status:')) {
                    data.cell.styles.fillColor = [
                        230,
                        230,
                        255
                    ]; // Light blue background
                    data.cell.styles.fontStyle = 'italic';
                    data.cell.styles.fontSize = 9;
                }
            },
            margin: {
                left: margin,
                right: margin
            }
        });
        // Footer message
        const finalY = doc.lastAutoTable.finalY + 20;
        doc.setFont('helvetica', 'bold');
        doc.text('Thank you for your continued support.', margin, finalY);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(`${settings.businessName} - Payment Reminder`, margin, finalY + 15);
        // Add watermark to the final page
        addWatermark();
        // Output based on requested type
        const fileName = `Payment_Reminder_${customer.fullName.replace(/\s+/g, '_')}_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), 'yyyy-MM-dd')}.pdf`;
        if (outputType === 'blob') {
            return doc.output('blob');
        } else if (outputType === 'dataurl') {
            return doc.output('datauristring');
        } else {
            doc.save(fileName);
        }
    } catch (error) {
        console.error('Error generating payment reminder PDF:', error);
        throw new Error('Failed to generate payment reminder PDF');
    }
};
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
;
const generateReceiptNumber = async (locationId)=>{
    try {
        if (!locationId) {
            console.error('Location ID is required for receipt number generation');
            return '000001';
        }
        // Use the database function to atomically get the next receipt number
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('get_next_receipt_number', {
            location_uuid: locationId
        });
        if (error) {
            console.error('Error generating receipt number:', error);
            // Fallback: get max from existing sales and add 1
            return await getFallbackReceiptNumber(locationId);
        }
        return data || '000001';
    } catch (error) {
        console.error('Error generating receipt number:', error);
        // Fallback: get max from existing sales and add 1
        return await getFallbackReceiptNumber(locationId);
    }
};
/**
 * Fallback method to generate receipt number if database function fails
 */ async function getFallbackReceiptNumber(locationId) {
    try {
        const { data: salesData, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sales').select('receipt_number').eq('location_id', locationId).order('created_at', {
            ascending: false
        }).limit(100); // Only check recent sales for performance
        if (error) {
            console.error('Error in fallback receipt generation:', error);
            return '000001';
        }
        let maxNumber = 0;
        if (salesData && salesData.length > 0) {
            salesData.forEach((sale)=>{
                const receiptNumber = sale.receipt_number;
                const numericValue = parseInt(receiptNumber, 10);
                if (!isNaN(numericValue) && numericValue > maxNumber) {
                    maxNumber = numericValue;
                }
            });
        }
        const nextNumber = maxNumber + 1;
        return nextNumber.toString().padStart(6, '0');
    } catch (error) {
        console.error('Error in fallback receipt generation:', error);
        return '000001';
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:ffe39b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVNBUXNCLDhMQUFBIn0=
}),
"[project]/src/app/actions/data:f41722 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProductAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40e6e2b9a239ff8e25973462e2f5dc757886e88d1b":"createProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40e6e2b9a239ff8e25973462e2f5dc757886e88d1b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBMEdzQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:e024ee [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProductAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"602c8c093fd55f10cf6448331ef557904f8ffb11d1":"updateProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("602c8c093fd55f10cf6448331ef557904f8ffb11d1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBcUpzQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:6f6d23 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProductAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4089b1e5ac12760970ad4a96e3e40bfb40acd5e25c":"deleteProductAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4089b1e5ac12760970ad4a96e3e40bfb40acd5e25c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoibVNBaUxzQixnTUFBQSJ9
}),
"[project]/src/app/actions/data:d6d5ee [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProductsBulkAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6083b4208f9a28840524118f0b30dd5fb47ce18d37":"updateProductsBulkAction"},"src/app/actions/products.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6083b4208f9a28840524118f0b30dd5fb47ce18d37", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProductsBulkAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZHVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uLy4uLy4uL3ByaXNtYS9kYic7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RGb3JtRGF0YSwgbWFwRGJQcm9kdWN0VG9Qcm9kdWN0LCBtYXBQcm9kdWN0VG9EYlByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJztcclxuXHJcbi8vIFdlIGltcGxlbWVudCBzZXJ2ZXIgYWN0aW9ucyBmb3IgdGhlIHByb2R1Y3RzIGhlcmVcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0c0FjdGlvbih7XHJcbiAgdXNlcklkLFxyXG4gIGJ1c2luZXNzSWQsXHJcbiAgcGFnZSxcclxuICBwYWdlU2l6ZSxcclxuICBzZWFyY2gsXHJcbiAgY2F0ZWdvcnksXHJcbiAgc3RvY2tTdGF0dXMsXHJcbn06IHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBidXNpbmVzc0lkOiBzdHJpbmc7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgc2VhcmNoPzogc3RyaW5nO1xyXG4gIGNhdGVnb3J5Pzogc3RyaW5nO1xyXG4gIHN0b2NrU3RhdHVzPzogJ2luU3RvY2snIHwgJ291dE9mU3RvY2snIHwgJ2xvd1N0b2NrJyB8ICdhbGwnO1xyXG59KSB7XHJcbiAgaWYgKCF1c2VySWQgfHwgIWJ1c2luZXNzSWQpIHJldHVybiB7IHByb2R1Y3RzOiBbXSwgY291bnQ6IDAgfTtcclxuXHJcbiAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICBjb25zdCB0YWtlID0gcGFnZVNpemU7XHJcblxyXG4gIGxldCB3aGVyZUNsYXVzZTogYW55ID0ge1xyXG4gICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICB9O1xyXG5cclxuICBpZiAoc2VhcmNoKSB7XHJcbiAgICB3aGVyZUNsYXVzZS5PUiA9IFtcclxuICAgICAgeyBuYW1lOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgICB7IHNrdTogeyBjb250YWluczogc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcclxuICAgICAgeyBiYXJjb2RlOiB7IGNvbnRhaW5zOiBzZWFyY2gsIG1vZGU6ICdpbnNlbnNpdGl2ZScgfSB9LFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGlmIChjYXRlZ29yeSkge1xyXG4gICAgd2hlcmVDbGF1c2UuY2F0ZWdvcnkgPSB7IG5hbWU6IGNhdGVnb3J5IH07XHJcbiAgfVxyXG5cclxuICBpZiAoc3RvY2tTdGF0dXMgPT09ICdvdXRPZlN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSAwO1xyXG4gIH0gZWxzZSBpZiAoc3RvY2tTdGF0dXMgPT09ICdpblN0b2NrJykge1xyXG4gICAgd2hlcmVDbGF1c2Uuc3RvY2sgPSB7IGd0OiAwIH07XHJcbiAgfSBlbHNlIGlmIChzdG9ja1N0YXR1cyA9PT0gJ2xvd1N0b2NrJykge1xyXG4gICAgLy8gSGFuZGxpbmcgbG93U3RvY2sgaXMgY29tcGxleCBiZWNhdXNlIG1pblN0b2NrIGlzIGNvbXBhcmVkIGxvY2FsbHkgb3IgdXNpbmcgZGlyZWN0IFNRTCBpbiBQcmlzbWFcclxuICAgIC8vIEZvciBub3csIHdlIHdpbGwgaGFuZGxlIGl0IHdpdGggUHJpc21hJ3MgcmF3IHF1ZXJ5IG9yIGJ5IGZpbHRlcmluZyBpbiBtZW1vcnkgaWYgbmVjZXNzYXJ5XHJcbiAgICAvLyBGb3J0dW5hdGVseSwgc2luY2UgUFJJU01BIDUuMCwgY29sdW1uIGNvbXBhcmlzb24gc3RpbGwgbmVlZHMgcmF3IHF1ZXJpZXMgb3Igd2UgY2FuIGZldGNoIGFuZCBmaWx0ZXIgaWYgc21hbGxcclxuICAgIC8vIEhlcmUgd2UnbGwgZmV0Y2ggdGhlbSBhbGwgaWYgbG93U3RvY2sgaXMgZW5hYmxlZCwgb3IgYWRkIGEgZ2VuZXJhdGVkIGNvbHVtbi4gXHJcbiAgICAvLyBXZSB3aWxsIGRvIGEgYmFzaWMgZmV0Y2ggYW5kIGZpbHRlciBsYXRlciBpZiBuZWVkZWQuXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzRGF0YSwgdG90YWxDb3VudF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGRiLnByb2R1Y3QuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB3aGVyZUNsYXVzZSxcclxuICAgICAgICBza2lwLFxyXG4gICAgICAgIHRha2UsXHJcbiAgICAgICAgb3JkZXJCeTogW3sgY3JlYXRlZEF0OiAnZGVzYycgfSwgeyBpZDogJ2Rlc2MnIH1dLFxyXG4gICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxyXG4gICAgICAgICAgc3VwcGxpZXI6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgZGIucHJvZHVjdC5jb3VudCh7IHdoZXJlOiB3aGVyZUNsYXVzZSB9KVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gTWFwIHRoZSBQcmlzbWEgcHJvZHVjdCBtb2RlbCBiYWNrIHRvIHRoZSBhcHBsaWNhdGlvbidzIFByb2R1Y3QgdHlwZVxyXG4gICAgbGV0IGZvcm1hdHRlZFByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLm1hcCgocCkgPT4ge1xyXG4gICAgICAvLyBBc3N1bWluZyBtYXBwaW5nIGV4aXN0cywgd2Ugd2lsbCBtYXAgaXRcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHAuY2F0ZWdvcnk/Lm5hbWUgfHwgJ1VuY2F0ZWdvcml6ZWQnLFxyXG4gICAgICAgIHF1YW50aXR5OiBwLnN0b2NrLFxyXG4gICAgICAgIGNvc3RQcmljZTogcC5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiBwLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdXBwbGllcjogcC5zdXBwbGllcj8ubmFtZSxcclxuICAgICAgICBpbWFnZVVybDogcC5pbWFnZSxcclxuICAgICAgICBiYXJjb2RlOiBwLmJhcmNvZGUsXHJcbiAgICAgICAgaXRlbU51bWJlcjogcC5za3UgfHwgJycsXHJcbiAgICAgICAgbWluaW11bVN0b2NrOiBwLm1pblN0b2NrLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogcC5jcmVhdGVkQXQsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc3RvY2tTdGF0dXMgPT09ICdsb3dTdG9jaycpIHtcclxuICAgICAgZm9ybWF0dGVkUHJvZHVjdHMgPSBmb3JtYXR0ZWRQcm9kdWN0cy5maWx0ZXIocCA9PiBwLnF1YW50aXR5ID4gMCAmJiBwLnF1YW50aXR5IDw9IHAubWluaW11bVN0b2NrKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9kdWN0czogZm9ybWF0dGVkUHJvZHVjdHMgYXMgYW55W10sIGNvdW50OiB0b3RhbENvdW50IH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzIGZyb20gREI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IFtdLCBjb3VudDogMCB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RBY3Rpb24oZGF0YTogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LmNyZWF0ZSh7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgYnJhbmNoSWQ6IGRhdGEuYnVzaW5lc3NJZCxcclxuICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkLFxyXG4gICAgICAgIC8vIE9wdGlvbmFsIHJlbGF0aW9uc1xyXG4gICAgICAgIC4uLihkYXRhLmNhdGVnb3J5SWQgJiYgeyBjYXRlZ29yeUlkOiBkYXRhLmNhdGVnb3J5SWQgfSksXHJcbiAgICAgICAgLi4uKGRhdGEuc3VwcGxpZXJJZCAmJiB7IHN1cHBsaWVySWQ6IGRhdGEuc3VwcGxpZXJJZCB9KSxcclxuICAgICAgICBza3U6IGRhdGEuaXRlbU51bWJlciB8fCBkYXRhLnNrdSxcclxuICAgICAgICBiYXJjb2RlOiBkYXRhLmJhcmNvZGUsXHJcbiAgICAgICAgaW1hZ2U6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICAgICAgY29zdFByaWNlOiBkYXRhLmNvc3RQcmljZSxcclxuICAgICAgICBzZWxsaW5nUHJpY2U6IGRhdGEuc2VsbGluZ1ByaWNlLFxyXG4gICAgICAgIHN0b2NrOiBkYXRhLnF1YW50aXR5IHx8IDAsXHJcbiAgICAgICAgbWluU3RvY2s6IGRhdGEubWluaW11bVN0b2NrIHx8IDAsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgIGNhdGVnb3J5OiAnVW5jYXRlZ29yaXplZCcsIC8vIFdvdWxkIG5lZWQgcmVhbCBtYXBwaW5nXHJcbiAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnN0b2NrLFxyXG4gICAgICBjb3N0UHJpY2U6IHByb2R1Y3QuY29zdFByaWNlLFxyXG4gICAgICBzZWxsaW5nUHJpY2U6IHByb2R1Y3Quc2VsbGluZ1ByaWNlLFxyXG4gICAgICBpbWFnZVVybDogcHJvZHVjdC5pbWFnZSxcclxuICAgICAgYmFyY29kZTogcHJvZHVjdC5iYXJjb2RlLFxyXG4gICAgICBpdGVtTnVtYmVyOiBwcm9kdWN0LnNrdSB8fCAnJyxcclxuICAgICAgbWluaW11bVN0b2NrOiBwcm9kdWN0Lm1pblN0b2NrLFxyXG4gICAgICBjcmVhdGVkQXQ6IHByb2R1Y3QuY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvZHVjdDonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9kdWN0QWN0aW9uKGlkOiBzdHJpbmcsIHVwZGF0ZXM6IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICB3aGVyZTogeyBpZCB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogdXBkYXRlcy5uYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiB1cGRhdGVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIC4uLih1cGRhdGVzLmNhdGVnb3J5SWQgIT09IHVuZGVmaW5lZCAmJiB7IGNhdGVnb3J5SWQ6IHVwZGF0ZXMuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAuLi4odXBkYXRlcy5zdXBwbGllcklkICE9PSB1bmRlZmluZWQgJiYgeyBzdXBwbGllcklkOiB1cGRhdGVzLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgc2t1OiB1cGRhdGVzLml0ZW1OdW1iZXIgfHwgdXBkYXRlcy5za3UsXHJcbiAgICAgICAgYmFyY29kZTogdXBkYXRlcy5iYXJjb2RlLFxyXG4gICAgICAgIGltYWdlOiB1cGRhdGVzLmltYWdlVXJsLFxyXG4gICAgICAgIGNvc3RQcmljZTogdXBkYXRlcy5jb3N0UHJpY2UsXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlOiB1cGRhdGVzLnNlbGxpbmdQcmljZSxcclxuICAgICAgICBzdG9jazogdXBkYXRlcy5xdWFudGl0eSxcclxuICAgICAgICBtaW5TdG9jazogdXBkYXRlcy5taW5pbXVtU3RvY2ssXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJldmFsaWRhdGVQYXRoKCcvaW52ZW50b3J5L3Byb2R1Y3RzJyk7XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZWQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFjdGlvbihpZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiLnByb2R1Y3QuZGVsZXRlKHtcclxuICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgfSk7XHJcbiAgICAvLyByZXZhbGlkYXRlUGF0aCgnL2ludmVudG9yeS9wcm9kdWN0cycpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2R1Y3Q6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RzQnVsa0FjdGlvbihcclxuICB1cGRhdGVzOiBBcnJheTx7IGlkOiBzdHJpbmc7IHVwZGF0ZWQ6IFBhcnRpYWw8YW55PiB9PixcclxuICBidXNpbmVzc0lkOiBzdHJpbmdcclxuKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIFByaXNtYSB0cmFuc2FjdGlvbiBmb3IgYnVsayB1cGRhdGVzXHJcbiAgICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IHVwZGF0ZXMubWFwKHUgPT5cclxuICAgICAgZGIucHJvZHVjdC51cGRhdGUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkOiB1LmlkIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5uYW1lICYmIHsgbmFtZTogdS51cGRhdGVkLm5hbWUgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgeyBkZXNjcmlwdGlvbjogdS51cGRhdGVkLmRlc2NyaXB0aW9uIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5jYXRlZ29yeUlkICE9PSB1bmRlZmluZWQgJiYgeyBjYXRlZ29yeUlkOiB1LnVwZGF0ZWQuY2F0ZWdvcnlJZCB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuc3VwcGxpZXJJZCAhPT0gdW5kZWZpbmVkICYmIHsgc3VwcGxpZXJJZDogdS51cGRhdGVkLnN1cHBsaWVySWQgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNrdSAhPT0gdW5kZWZpbmVkICYmIHsgc2t1OiB1LnVwZGF0ZWQuc2t1IH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5iYXJjb2RlICE9PSB1bmRlZmluZWQgJiYgeyBiYXJjb2RlOiB1LnVwZGF0ZWQuYmFyY29kZSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQuY29zdFByaWNlICE9PSB1bmRlZmluZWQgJiYgeyBjb3N0UHJpY2U6IHUudXBkYXRlZC5jb3N0UHJpY2UgfSksXHJcbiAgICAgICAgICAuLi4odS51cGRhdGVkLnNlbGxpbmdQcmljZSAhPT0gdW5kZWZpbmVkICYmIHsgc2VsbGluZ1ByaWNlOiB1LnVwZGF0ZWQuc2VsbGluZ1ByaWNlIH0pLFxyXG4gICAgICAgICAgLi4uKHUudXBkYXRlZC5xdWFudGl0eSAhPT0gdW5kZWZpbmVkICYmIHsgc3RvY2s6IHUudXBkYXRlZC5xdWFudGl0eSB9KSxcclxuICAgICAgICAgIC4uLih1LnVwZGF0ZWQubWluaW11bVN0b2NrICE9PSB1bmRlZmluZWQgJiYgeyBtaW5TdG9jazogdS51cGRhdGVkLm1pbmltdW1TdG9jayB9KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGRiLiR0cmFuc2FjdGlvbih1cGRhdGVQcm9taXNlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcGVyZm9ybWluZyBidWxrIHVwZGF0ZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1NBOExzQixxTUFBQSJ9
}),
"[project]/src/app/actions/data:dc92fc [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2FsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhbGVzQWN0aW9uKGJ1c2luZXNzSWQ6IHN0cmluZywgc29ydE9yZGVyOiAnYXNjJyB8ICdkZXNjJyA9ICdkZXNjJywgcGFnZVNpemU/OiBudW1iZXIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBzb3J0T3JkZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChwYWdlU2l6ZSAmJiBwYWdlU2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgcXVlcnlPcHRpb25zLnRha2UgPSBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbGVzID0gYXdhaXQgZGIuc2FsZS5maW5kTWFueShxdWVyeU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBQcm92aWRlIGRlZmF1bHQgbWFwcGluZ3MgdG8gZXhpc3RpbmcgUmVhY3QgY29tcG9uZW50c1xyXG4gICAgICAgIHJldHVybiBzYWxlcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGl0ZW0udXNlcklkLFxyXG4gICAgICAgICAgICBsb2NhdGlvbl9pZDogaXRlbS5icmFuY2hJZCxcclxuICAgICAgICAgICAgcmVjZWlwdF9udW1iZXI6IGl0ZW0ucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgY3VzdG9tZXJfbmFtZTogaXRlbS5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyX2FkZHJlc3M6IGl0ZW0uY3VzdG9tZXJBZGRyZXNzLFxyXG4gICAgICAgICAgICBjdXN0b21lcl9jb250YWN0OiBpdGVtLmN1c3RvbWVyQ29udGFjdCxcclxuICAgICAgICAgICAgY3VzdG9tZXJfaWQ6IGl0ZW0uY3VzdG9tZXJJZCxcclxuICAgICAgICAgICAgaXRlbXM6IGl0ZW0uaXRlbXMgYXMgYW55LCAvLyBqc29uYiB0eXBlXHJcbiAgICAgICAgICAgIHBheW1lbnRfc3RhdHVzOiBpdGVtLnBheW1lbnRTdGF0dXMsXHJcbiAgICAgICAgICAgIHByb2ZpdDogaXRlbS5wcm9maXQsXHJcbiAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB0YXhfcmF0ZTogaXRlbS50YXhSYXRlID8gTnVtYmVyKGl0ZW0udGF4UmF0ZSkgOiAwLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBpdGVtLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBpdGVtLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBjYXNoX3RyYW5zYWN0aW9uX2lkOiBpdGVtLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICBhbW91bnRfcGFpZDogaXRlbS5hbW91bnRQYWlkLFxyXG4gICAgICAgICAgICBhbW91bnRfZHVlOiBpdGVtLmFtb3VudER1ZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGl0ZW0uY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgbm90ZXM6IGl0ZW0ubm90ZXNcclxuICAgICAgICB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNhbGVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTYWxlQWN0aW9uKGlkOiBzdHJpbmcsIGJ1c2luZXNzSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzYWxlID0gYXdhaXQgZGIuc2FsZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBjYXNoVHJhbnNhY3Rpb246IHRydWUsIGluc3RhbGxtZW50czogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc2FsZSB8fCBzYWxlLmJyYW5jaElkICE9PSBidXNpbmVzc0lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1NhbGUgbm90IGZvdW5kIG9yIHVuYXV0aG9yaXplZCcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERlbGV0ZSBpbnN0YWxsbWVudHNcclxuICAgICAgICBpZiAoc2FsZS5pbnN0YWxsbWVudHMgJiYgc2FsZS5pbnN0YWxsbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYi5pbnN0YWxsbWVudFBheW1lbnQuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBzYWxlSWQ6IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEZWxldGUgYXNzb2NpYXRlZCBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgaWYgKHNhbGUuY2FzaFRyYW5zYWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogc2FsZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGVsZXRlIHRoZSBzYWxlIGl0c2VsZlxyXG4gICAgICAgIGF3YWl0IGRiLnNhbGUuZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBzYWxlOiB7XHJcbiAgICAgICAgICAgICAgICByZWNlaXB0TnVtYmVyOiBzYWxlLnJlY2VpcHROdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IHNhbGUuY3VzdG9tZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJBZGRyZXNzOiBzYWxlLmN1c3RvbWVyQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyQ29udGFjdDogc2FsZS5jdXN0b21lckNvbnRhY3QsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50U3RhdHVzOiBzYWxlLnBheW1lbnRTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBjYXNoVHJhbnNhY3Rpb25JZDogc2FsZS5jYXNoVHJhbnNhY3Rpb25JZCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBzYWxlLml0ZW1zIGFzIGFueSxcclxuICAgICAgICAgICAgICAgIGFtb3VudFBhaWQ6IHNhbGUuYW1vdW50UGFpZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudER1ZTogc2FsZS5hbW91bnREdWUsXHJcbiAgICAgICAgICAgICAgICBwcm9maXQ6IHNhbGUucHJvZml0LFxyXG4gICAgICAgICAgICAgICAgdGF4UmF0ZTogc2FsZS50YXhSYXRlLFxyXG4gICAgICAgICAgICAgICAgbm90ZXM6IHNhbGUubm90ZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHNhbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgc2FsZScgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwc2VydFNhbGVBY3Rpb24oc2FsZURiRGF0YTogYW55LCBpc1VwZGF0ZTogYm9vbGVhbiwgdXBkYXRlSWQ/OiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hRGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzYWxlRGJEYXRhLnVzZXJfaWQsXHJcbiAgICAgICAgICAgIGJyYW5jaElkOiBzYWxlRGJEYXRhLmxvY2F0aW9uX2lkLFxyXG4gICAgICAgICAgICByZWNlaXB0TnVtYmVyOiBzYWxlRGJEYXRhLnJlY2VpcHRfbnVtYmVyLFxyXG4gICAgICAgICAgICBjdXN0b21lck5hbWU6IHNhbGVEYkRhdGEuY3VzdG9tZXJfbmFtZSxcclxuICAgICAgICAgICAgY3VzdG9tZXJBZGRyZXNzOiBzYWxlRGJEYXRhLmN1c3RvbWVyX2FkZHJlc3MsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyQ29udGFjdDogc2FsZURiRGF0YS5jdXN0b21lcl9jb250YWN0LFxyXG4gICAgICAgICAgICBjdXN0b21lcklkOiBzYWxlRGJEYXRhLmN1c3RvbWVyX2lkLFxyXG4gICAgICAgICAgICBpdGVtczogc2FsZURiRGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgcGF5bWVudFN0YXR1czogc2FsZURiRGF0YS5wYXltZW50X3N0YXR1cyxcclxuICAgICAgICAgICAgcHJvZml0OiBzYWxlRGJEYXRhLnByb2ZpdCxcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoc2FsZURiRGF0YS5kYXRlKSxcclxuICAgICAgICAgICAgdGF4UmF0ZTogc2FsZURiRGF0YS50YXhfcmF0ZSxcclxuICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IHNhbGVEYkRhdGEuY2FzaF90cmFuc2FjdGlvbl9pZCxcclxuICAgICAgICAgICAgYW1vdW50UGFpZDogc2FsZURiRGF0YS5hbW91bnRfcGFpZCxcclxuICAgICAgICAgICAgYW1vdW50RHVlOiBzYWxlRGJEYXRhLmFtb3VudF9kdWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHNhbGVEYkRhdGEuY2F0ZWdvcnlfaWQsXHJcbiAgICAgICAgICAgIG5vdGVzOiBzYWxlRGJEYXRhLm5vdGVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGlzVXBkYXRlICYmIHVwZGF0ZUlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5zYWxlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogdXBkYXRlSWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByaXNtYURhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVwZGF0ZWQgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgZGIuc2FsZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcHJpc21hRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3JlYXRlZCB9O1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cHNlcnRpbmcgc2FsZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gcHJlc2VydmUgc2FsZScgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJSQUtzQiwyTEFBQSJ9
}),
"[project]/src/app/actions/data:6af24c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2FsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi8uLi9wcmlzbWEvZGInO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhbGVzQWN0aW9uKGJ1c2luZXNzSWQ6IHN0cmluZywgc29ydE9yZGVyOiAnYXNjJyB8ICdkZXNjJyA9ICdkZXNjJywgcGFnZVNpemU/OiBudW1iZXIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICBicmFuY2hJZDogYnVzaW5lc3NJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3JkZXJCeToge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBzb3J0T3JkZXIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIGNhc2hUcmFuc2FjdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChwYWdlU2l6ZSAmJiBwYWdlU2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgcXVlcnlPcHRpb25zLnRha2UgPSBwYWdlU2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNhbGVzID0gYXdhaXQgZGIuc2FsZS5maW5kTWFueShxdWVyeU9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyBQcm92aWRlIGRlZmF1bHQgbWFwcGluZ3MgdG8gZXhpc3RpbmcgUmVhY3QgY29tcG9uZW50c1xyXG4gICAgICAgIHJldHVybiBzYWxlcy5tYXAoKGl0ZW06IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGl0ZW0udXNlcklkLFxyXG4gICAgICAgICAgICBsb2NhdGlvbl9pZDogaXRlbS5icmFuY2hJZCxcclxuICAgICAgICAgICAgcmVjZWlwdF9udW1iZXI6IGl0ZW0ucmVjZWlwdE51bWJlcixcclxuICAgICAgICAgICAgY3VzdG9tZXJfbmFtZTogaXRlbS5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyX2FkZHJlc3M6IGl0ZW0uY3VzdG9tZXJBZGRyZXNzLFxyXG4gICAgICAgICAgICBjdXN0b21lcl9jb250YWN0OiBpdGVtLmN1c3RvbWVyQ29udGFjdCxcclxuICAgICAgICAgICAgY3VzdG9tZXJfaWQ6IGl0ZW0uY3VzdG9tZXJJZCxcclxuICAgICAgICAgICAgaXRlbXM6IGl0ZW0uaXRlbXMgYXMgYW55LCAvLyBqc29uYiB0eXBlXHJcbiAgICAgICAgICAgIHBheW1lbnRfc3RhdHVzOiBpdGVtLnBheW1lbnRTdGF0dXMsXHJcbiAgICAgICAgICAgIHByb2ZpdDogaXRlbS5wcm9maXQsXHJcbiAgICAgICAgICAgIGRhdGU6IGl0ZW0uZGF0ZS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB0YXhfcmF0ZTogaXRlbS50YXhSYXRlID8gTnVtYmVyKGl0ZW0udGF4UmF0ZSkgOiAwLFxyXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBpdGVtLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiBpdGVtLnVwZGF0ZWRBdC50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICBjYXNoX3RyYW5zYWN0aW9uX2lkOiBpdGVtLmNhc2hUcmFuc2FjdGlvbklkLFxyXG4gICAgICAgICAgICBhbW91bnRfcGFpZDogaXRlbS5hbW91bnRQYWlkLFxyXG4gICAgICAgICAgICBhbW91bnRfZHVlOiBpdGVtLmFtb3VudER1ZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlfaWQ6IGl0ZW0uY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgbm90ZXM6IGl0ZW0ubm90ZXNcclxuICAgICAgICB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNhbGVzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTYWxlQWN0aW9uKGlkOiBzdHJpbmcsIGJ1c2luZXNzSWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzYWxlID0gYXdhaXQgZGIuc2FsZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZTogeyBjYXNoVHJhbnNhY3Rpb246IHRydWUsIGluc3RhbGxtZW50czogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghc2FsZSB8fCBzYWxlLmJyYW5jaElkICE9PSBidXNpbmVzc0lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1NhbGUgbm90IGZvdW5kIG9yIHVuYXV0aG9yaXplZCcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERlbGV0ZSBpbnN0YWxsbWVudHNcclxuICAgICAgICBpZiAoc2FsZS5pbnN0YWxsbWVudHMgJiYgc2FsZS5pbnN0YWxsbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYi5pbnN0YWxsbWVudFBheW1lbnQuZGVsZXRlTWFueSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBzYWxlSWQ6IGlkIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEZWxldGUgYXNzb2NpYXRlZCBjYXNoIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgaWYgKHNhbGUuY2FzaFRyYW5zYWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgYXdhaXQgZGIuY2FzaFRyYW5zYWN0aW9uLmRlbGV0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogc2FsZS5jYXNoVHJhbnNhY3Rpb25JZCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGVsZXRlIHRoZSBzYWxlIGl0c2VsZlxyXG4gICAgICAgIGF3YWl0IGRiLnNhbGUuZGVsZXRlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBzYWxlOiB7XHJcbiAgICAgICAgICAgICAgICByZWNlaXB0TnVtYmVyOiBzYWxlLnJlY2VpcHROdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IHNhbGUuY3VzdG9tZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJBZGRyZXNzOiBzYWxlLmN1c3RvbWVyQWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyQ29udGFjdDogc2FsZS5jdXN0b21lckNvbnRhY3QsXHJcbiAgICAgICAgICAgICAgICBwYXltZW50U3RhdHVzOiBzYWxlLnBheW1lbnRTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBjYXNoVHJhbnNhY3Rpb25JZDogc2FsZS5jYXNoVHJhbnNhY3Rpb25JZCxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBzYWxlLml0ZW1zIGFzIGFueSxcclxuICAgICAgICAgICAgICAgIGFtb3VudFBhaWQ6IHNhbGUuYW1vdW50UGFpZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudER1ZTogc2FsZS5hbW91bnREdWUsXHJcbiAgICAgICAgICAgICAgICBwcm9maXQ6IHNhbGUucHJvZml0LFxyXG4gICAgICAgICAgICAgICAgdGF4UmF0ZTogc2FsZS50YXhSYXRlLFxyXG4gICAgICAgICAgICAgICAgbm90ZXM6IHNhbGUubm90ZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHNhbGU6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBkZWxldGUgc2FsZScgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwc2VydFNhbGVBY3Rpb24oc2FsZURiRGF0YTogYW55LCBpc1VwZGF0ZTogYm9vbGVhbiwgdXBkYXRlSWQ/OiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJpc21hRGF0YSA9IHtcclxuICAgICAgICAgICAgdXNlcklkOiBzYWxlRGJEYXRhLnVzZXJfaWQsXHJcbiAgICAgICAgICAgIGJyYW5jaElkOiBzYWxlRGJEYXRhLmxvY2F0aW9uX2lkLFxyXG4gICAgICAgICAgICByZWNlaXB0TnVtYmVyOiBzYWxlRGJEYXRhLnJlY2VpcHRfbnVtYmVyLFxyXG4gICAgICAgICAgICBjdXN0b21lck5hbWU6IHNhbGVEYkRhdGEuY3VzdG9tZXJfbmFtZSxcclxuICAgICAgICAgICAgY3VzdG9tZXJBZGRyZXNzOiBzYWxlRGJEYXRhLmN1c3RvbWVyX2FkZHJlc3MsXHJcbiAgICAgICAgICAgIGN1c3RvbWVyQ29udGFjdDogc2FsZURiRGF0YS5jdXN0b21lcl9jb250YWN0LFxyXG4gICAgICAgICAgICBjdXN0b21lcklkOiBzYWxlRGJEYXRhLmN1c3RvbWVyX2lkLFxyXG4gICAgICAgICAgICBpdGVtczogc2FsZURiRGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgcGF5bWVudFN0YXR1czogc2FsZURiRGF0YS5wYXltZW50X3N0YXR1cyxcclxuICAgICAgICAgICAgcHJvZml0OiBzYWxlRGJEYXRhLnByb2ZpdCxcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoc2FsZURiRGF0YS5kYXRlKSxcclxuICAgICAgICAgICAgdGF4UmF0ZTogc2FsZURiRGF0YS50YXhfcmF0ZSxcclxuICAgICAgICAgICAgY2FzaFRyYW5zYWN0aW9uSWQ6IHNhbGVEYkRhdGEuY2FzaF90cmFuc2FjdGlvbl9pZCxcclxuICAgICAgICAgICAgYW1vdW50UGFpZDogc2FsZURiRGF0YS5hbW91bnRfcGFpZCxcclxuICAgICAgICAgICAgYW1vdW50RHVlOiBzYWxlRGJEYXRhLmFtb3VudF9kdWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHNhbGVEYkRhdGEuY2F0ZWdvcnlfaWQsXHJcbiAgICAgICAgICAgIG5vdGVzOiBzYWxlRGJEYXRhLm5vdGVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGlzVXBkYXRlICYmIHVwZGF0ZUlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi5zYWxlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogdXBkYXRlSWQgfSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByaXNtYURhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVwZGF0ZWQgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgZGIuc2FsZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcHJpc21hRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY3JlYXRlZCB9O1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cHNlcnRpbmcgc2FsZTonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gcHJlc2VydmUgc2FsZScgfTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZSQXNEc0IsNkxBQUEifQ==
}),
"[project]/src/pages/Customers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/AuthProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/BusinessContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCustomers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomerCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCustomerCategories.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomerData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useCustomerData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useBusinessSettings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSalesData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/integrations/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$CustomerPageSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customers/CustomerPageSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$CustomerHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customers/CustomerHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$CustomerStatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customers/CustomerStatsCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$CustomerContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customers/CustomerContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$BirthdayCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customers/BirthdayCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$CustomerCategoryManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customers/CustomerCategoryManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$NewCustomerDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customers/NewCustomerDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$MergeCustomersDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/customers/MergeCustomersDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ProfileContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
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
;
;
;
;
;
;
const Customers = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { currentBusiness, isLoading: businessLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"])();
    const { customers, isLoading, createCustomer, updateCustomer, deleteCustomer, page, setPage, pageSize, setPageSize, totalCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomers"])(50);
    const { categories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomerCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomerCategories"])();
    const { settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"])();
    const { getCustomerLifetimePurchases } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"])(user?.id);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [dateFilter, setDateFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        from: undefined,
        to: undefined
    });
    const [selectedCustomer, setSelectedCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newCustomerDialogOpen, setNewCustomerDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customerToEdit, setCustomerToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('list');
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocation"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"])();
    const { hasPermission, isLoading: profilesLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"])();
    // Permissions
    const canView = hasPermission('customers', 'view');
    const canCreate = hasPermission('customers', 'create');
    const canEdit = hasPermission('customers', 'edit');
    const canDelete = hasPermission('customers', 'delete');
    // Duplicate detection
    const [showDuplicatesDialog, setShowDuplicatesDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [duplicateGroups, setDuplicateGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDuplicateGroup, setSelectedDuplicateGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showMergeDialog, setShowMergeDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Global customer stats
    const [customersWithBirthdaysAll, setCustomersWithBirthdaysAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [customersThisMonthAll, setCustomersThisMonthAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // Fetch global customer stats with 5-min cache
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Customers.useEffect": ()=>{
            let cancelled = false;
            const loadGlobalStats = {
                "Customers.useEffect.loadGlobalStats": async ()=>{
                    if (!user?.id || !currentBusiness?.id) return;
                    const cacheKey = `allCustomerStats_${currentBusiness.id}`;
                    const cachedRaw = localStorage.getItem(cacheKey);
                    try {
                        if (cachedRaw) {
                            const cached = JSON.parse(cachedRaw);
                            if (Date.now() - cached.ts < 5 * 60 * 1000) {
                                setCustomersWithBirthdaysAll(cached.withBirthdays);
                                setCustomersThisMonthAll(cached.thisMonth);
                                return;
                            }
                        }
                    } catch  {}
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$integrations$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('customers').select('birthday, created_at').eq('user_id', user.id).eq('location_id', currentBusiness.id);
                    if (!cancelled && !error && data) {
                        const thisMonth = new Date();
                        let withBirthdays = 0;
                        let thisMonthCount = 0;
                        data.forEach({
                            "Customers.useEffect.loadGlobalStats": (row)=>{
                                if (row.birthday) withBirthdays++;
                                if (row.created_at) {
                                    const customerDate = new Date(row.created_at);
                                    if (customerDate.getMonth() === thisMonth.getMonth() && customerDate.getFullYear() === thisMonth.getFullYear()) {
                                        thisMonthCount++;
                                    }
                                }
                            }
                        }["Customers.useEffect.loadGlobalStats"]);
                        setCustomersWithBirthdaysAll(withBirthdays);
                        setCustomersThisMonthAll(thisMonthCount);
                        try {
                            localStorage.setItem(cacheKey, JSON.stringify({
                                withBirthdays,
                                thisMonth: thisMonthCount,
                                ts: Date.now()
                            }));
                        } catch  {}
                    }
                }
            }["Customers.useEffect.loadGlobalStats"];
            loadGlobalStats();
            return ({
                "Customers.useEffect": ()=>{
                    cancelled = true;
                }
            })["Customers.useEffect"];
        }
    }["Customers.useEffect"], [
        user?.id,
        currentBusiness?.id
    ]);
    // Use customer data hook for all calculations
    const { validCategories, filteredCustomers, customerStats, getCategoryName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomerData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomerData"])(customers, categories, searchTerm, selectedCategory, totalCount, customersWithBirthdaysAll, customersThisMonthAll);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Customers.useEffect": ()=>{
            // Check for action=new parameter to auto-open the new customer dialog
            const searchParams = new URLSearchParams(location.search);
            if (searchParams.get('action') === 'new') {
                setNewCustomerDialogOpen(true);
                // Remove the query parameter after processing
                const newUrl = window.location.pathname;
                window.history.replaceState({}, '', newUrl);
            }
            // Check for view parameter to auto-select a customer
            const viewCustomerId = searchParams.get('view');
            if (viewCustomerId && customers.length > 0) {
                const customer = customers.find({
                    "Customers.useEffect.customer": (c)=>c.id === viewCustomerId
                }["Customers.useEffect.customer"]);
                if (customer) {
                    setSelectedCustomer(customer);
                    setActiveTab('details');
                }
            }
        }
    }["Customers.useEffect"], [
        location,
        customers
    ]);
    // Memoize handlers to prevent unnecessary re-renders
    const handleAddNewCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Customers.useCallback[handleAddNewCustomer]": async (customerData)=>{
            if (customerToEdit) {
                await updateCustomer(customerToEdit.id, customerData);
            } else {
                await createCustomer(customerData);
            }
            setNewCustomerDialogOpen(false);
            setCustomerToEdit(undefined);
            return true;
        }
    }["Customers.useCallback[handleAddNewCustomer]"], [
        customerToEdit,
        updateCustomer,
        createCustomer
    ]);
    const handleSelectCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Customers.useCallback[handleSelectCustomer]": (customer)=>{
            setSelectedCustomer(customer);
            setActiveTab('details');
        }
    }["Customers.useCallback[handleSelectCustomer]"], []);
    const handleEditCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Customers.useCallback[handleEditCustomer]": (customer)=>{
            setCustomerToEdit(customer);
            setNewCustomerDialogOpen(true);
        }
    }["Customers.useCallback[handleEditCustomer]"], []);
    const handleAddNewCustomerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Customers.useCallback[handleAddNewCustomerClick]": ()=>{
            setCustomerToEdit(undefined);
            setNewCustomerDialogOpen(true);
        }
    }["Customers.useCallback[handleAddNewCustomerClick]"], []);
    const findDuplicates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Customers.useCallback[findDuplicates]": ()=>{
            // Group customers by normalized name (lowercase, trimmed)
            const nameMap = new Map();
            customers.forEach({
                "Customers.useCallback[findDuplicates]": (customer)=>{
                    const normalizedName = customer.fullName.toLowerCase().trim();
                    if (!nameMap.has(normalizedName)) {
                        nameMap.set(normalizedName, []);
                    }
                    nameMap.get(normalizedName).push(customer);
                }
            }["Customers.useCallback[findDuplicates]"]);
            // Filter groups with more than 1 customer (duplicates)
            const duplicates = [];
            nameMap.forEach({
                "Customers.useCallback[findDuplicates]": (group)=>{
                    if (group.length > 1) {
                        duplicates.push(group);
                    }
                }
            }["Customers.useCallback[findDuplicates]"]);
            if (duplicates.length === 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info('No duplicate customers found');
                return;
            }
            setDuplicateGroups(duplicates);
            setShowDuplicatesDialog(true);
        }
    }["Customers.useCallback[findDuplicates]"], [
        customers
    ]);
    const handleMergeGroup = (group)=>{
        setSelectedDuplicateGroup(group);
        setShowMergeDialog(true);
    };
    const handleMergeComplete = ()=>{
        // Reload customers after merge
        window.location.reload();
    };
    if (businessLoading || !currentBusiness || isLoading || profilesLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$CustomerPageSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/pages/Customers.tsx",
            lineNumber: 223,
            columnNumber: 12
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
                            fileName: "[project]/src/pages/Customers.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                            children: "Access Denied"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Customers.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                            children: "You do not have permission to view the customers module. Please contact your administrator if you believe this is an error."
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Customers.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Customers.tsx",
                    lineNumber: 229,
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
                                fileName: "[project]/src/pages/Customers.tsx",
                                lineNumber: 239,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Back to Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Customers.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/Customers.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/Customers.tsx",
            lineNumber: 228,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$CustomerHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onAddNewCustomer: handleAddNewCustomerClick,
                onFindDuplicates: canEdit ? findDuplicates : undefined,
                customers: filteredCustomers,
                currency: settings.currency,
                businessName: settings.businessName,
                businessLogo: settings.businessLogo,
                getCategoryName: getCategoryName,
                getCustomerLifetimePurchases: getCustomerLifetimePurchases,
                canCreate: canCreate
            }, void 0, false, {
                fileName: "[project]/src/pages/Customers.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$CustomerStatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                customerStats: customerStats
            }, void 0, false, {
                fileName: "[project]/src/pages/Customers.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$BirthdayCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                customers: customers
            }, void 0, false, {
                fileName: "[project]/src/pages/Customers.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$CustomerCategoryManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/Customers.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$CustomerContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                activeTab: activeTab,
                setActiveTab: setActiveTab,
                selectedCustomer: selectedCustomer,
                searchTerm: searchTerm,
                setSearchTerm: setSearchTerm,
                selectedCategory: selectedCategory,
                setSelectedCategory: setSelectedCategory,
                dateFilter: dateFilter,
                setDateFilter: setDateFilter,
                dateRange: dateRange,
                setDateRange: setDateRange,
                validCategories: validCategories,
                filteredCustomers: filteredCustomers,
                customers: customers,
                customerStats: customerStats,
                getCategoryName: getCategoryName,
                onSelectCustomer: handleSelectCustomer,
                onEditCustomer: handleEditCustomer,
                onDeleteCustomer: deleteCustomer,
                onUpdateCustomer: updateCustomer,
                setSelectedCustomer: setSelectedCustomer,
                canCreate: canCreate,
                canEdit: canEdit,
                canDelete: canDelete
            }, void 0, false, {
                fileName: "[project]/src/pages/Customers.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-3 md:p-4 border rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs md:text-sm text-muted-foreground",
                        children: [
                            "Showing ",
                            (page - 1) * pageSize + 1,
                            "–",
                            Math.min(page * pageSize, totalCount),
                            " of ",
                            totalCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Customers.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border rounded px-2 py-1 text-xs md:text-sm",
                                value: pageSize,
                                onChange: (e)=>setPageSize(Number(e.target.value)),
                                children: [
                                    20,
                                    50,
                                    100
                                ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: size,
                                        children: [
                                            size,
                                            " / page"
                                        ]
                                    }, size, true, {
                                        fileName: "[project]/src/pages/Customers.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Customers.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "border rounded px-2 py-1 text-xs md:text-sm",
                                disabled: page === 1 || isLoading,
                                onClick: ()=>setPage(Math.max(1, page - 1)),
                                type: "button",
                                children: "Prev"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Customers.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "border rounded px-2 py-1 text-xs md:text-sm",
                                disabled: page * pageSize >= totalCount || isLoading,
                                onClick: ()=>setPage(page + 1),
                                type: "button",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/Customers.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/Customers.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/Customers.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$NewCustomerDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: newCustomerDialogOpen,
                onClose: ()=>{
                    setNewCustomerDialogOpen(false);
                    setCustomerToEdit(undefined);
                },
                onAddCustomer: handleAddNewCustomer,
                initialData: customerToEdit
            }, void 0, false, {
                fileName: "[project]/src/pages/Customers.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showDuplicatesDialog,
                onOpenChange: setShowDuplicatesDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-3xl max-h-[80vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "Duplicate Customers Found"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/Customers.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: [
                                        "Found ",
                                        duplicateGroups.length,
                                        " group(s) of duplicate customers. Select a group to merge."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/Customers.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/Customers.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: duplicateGroups.map((group, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-lg",
                                                                children: group[0].fullName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/Customers.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "secondary",
                                                                className: "mt-1",
                                                                children: [
                                                                    group.length,
                                                                    " duplicates"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/Customers.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/Customers.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        onClick: ()=>handleMergeGroup(group),
                                                        size: "sm",
                                                        children: "Merge"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/Customers.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/Customers.tsx",
                                                lineNumber: 357,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-sm",
                                                children: group.map((customer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between border-l-2 border-gray-200 pl-3 py-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: customer.phoneNumber || 'No phone'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/pages/Customers.tsx",
                                                                        lineNumber: 372,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-muted-foreground text-xs",
                                                                        children: [
                                                                            "Created: ",
                                                                            customer.createdAt.toLocaleDateString()
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/pages/Customers.tsx",
                                                                        lineNumber: 373,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/pages/Customers.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            customer.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: customer.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/Customers.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, customer.id, true, {
                                                        fileName: "[project]/src/pages/Customers.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/Customers.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/Customers.tsx",
                                        lineNumber: 356,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, index, false, {
                                    fileName: "[project]/src/pages/Customers.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/pages/Customers.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/Customers.tsx",
                    lineNumber: 345,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/Customers.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedDuplicateGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$customers$2f$MergeCustomersDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showMergeDialog,
                onOpenChange: setShowMergeDialog,
                customers: selectedDuplicateGroup,
                onMergeComplete: handleMergeComplete
            }, void 0, false, {
                fileName: "[project]/src/pages/Customers.tsx",
                lineNumber: 392,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/Customers.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Customers, "tq0xqfc4/FCuF9JrIilLdASIcGI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$BusinessContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusiness"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomerCategories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomerCategories"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useBusinessSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBusinessSettings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSalesData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalesData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useNavigate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ProfileContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomerData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCustomerData"]
    ];
});
_c = Customers;
const __TURBOPACK__default__export__ = Customers;
var _c;
__turbopack_context__.k.register(_c, "Customers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ee3442ef._.js.map