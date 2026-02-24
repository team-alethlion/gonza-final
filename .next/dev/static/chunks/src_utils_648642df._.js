(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/utils/generateSubscriptionInvoice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateSubscriptionInvoice",
    ()=>generateSubscriptionInvoice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$numberToWords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/numberToWords.ts [app-client] (ecmascript)");
;
;
;
;
const generateSubscriptionInvoice = async (payment, type = 'invoice')=>{
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    const pageWidth = doc.internal.pageSize.getWidth();
    const margins = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    };
    const innerWidth = pageWidth - margins.left - margins.right;
    let currentY = margins.top;
    const isReceipt = type === 'receipt';
    const docTitle = isReceipt ? 'SALES RECEIPT' : 'INVOICE';
    const docPrefix = isReceipt ? 'Receipt' : 'Invoice';
    // 1. Logo & Business Info Header
    // Logo on the left
    const logoUrl = '/lovable-uploads/798d07d7-1db7-498c-92f3-6f6346827d59.png';
    try {
        const img = new Image();
        img.src = logoUrl;
        await new Promise((resolve)=>{
            img.onload = ()=>{
                const aspectRatio = img.width / img.height;
                const logoHeight = 20; // Slightly larger logo
                const logoWidth = logoHeight * aspectRatio;
                doc.addImage(img, 'PNG', margins.left, currentY, logoWidth, logoHeight);
                resolve(null);
            };
            img.onerror = ()=>resolve(null);
        });
    } catch (e) {
        console.warn('Could not load logo for PDF');
    }
    // Business info on the right
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('GONZA BUSINESS SYSTEMS', pageWidth - margins.right, currentY + 5, {
        align: 'right'
    });
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Rubaga ROYZ PLAZA room A04', pageWidth - margins.right, currentY + 10, {
        align: 'right'
    });
    doc.text('Phone: +256 758519696', pageWidth - margins.right, currentY + 14, {
        align: 'right'
    });
    doc.text('Email: gonzasystems@gmail.com', pageWidth - margins.right, currentY + 18, {
        align: 'right'
    });
    currentY += 28;
    // 2. Document Title
    doc.setLineWidth(0.5);
    doc.line(margins.left, currentY, pageWidth - margins.right, currentY);
    currentY += 7;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(docTitle, pageWidth / 2, currentY, {
        align: 'center'
    });
    currentY += 4;
    doc.line(margins.left, currentY, pageWidth - margins.right, currentY);
    currentY += 10;
    // 3. Document Details
    const invoiceSlug = payment.invoice_number ? payment.invoice_number.toString().padStart(4, '0') : payment.id.split('-')[0].toUpperCase();
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`${docPrefix} #: ${invoiceSlug}`, margins.left, currentY);
    const isPaid = [
        'completed',
        'success'
    ].includes(payment.payment_status?.toLowerCase());
    const statusText = isPaid ? 'Paid' : 'Pending';
    doc.text(`Status: ${statusText}`, pageWidth - margins.right, currentY, {
        align: 'right'
    });
    currentY += 5;
    doc.setFont('helvetica', 'normal');
    doc.text(`Date: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(payment.created_at), 'MMM dd, yyyy')}`, margins.left, currentY);
    // Add Due Date if provided (important for upcoming invoices)
    if (payment.due_date) {
        doc.text(`Due Date: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(payment.due_date), 'MMM dd, yyyy')}`, pageWidth - margins.right, currentY, {
            align: 'right'
        });
    }
    currentY += 5;
    doc.text(`Time: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(payment.created_at), 'hh:mm aa')}`, margins.left, currentY);
    currentY += 10;
    // 4. Customer Information
    doc.setFont('helvetica', 'bold');
    doc.text('Customer Information:', margins.left, currentY);
    currentY += 5;
    doc.setFont('helvetica', 'normal');
    doc.text(payment.business_name || 'Gonzo System User', margins.left, currentY);
    currentY += 12;
    // 5. Items Table
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: currentY,
        margin: {
            left: margins.left,
            right: margins.right
        },
        head: [
            [
                'Description',
                'Qty',
                'Unit Price',
                'Amount'
            ]
        ],
        body: [
            [
                `${payment.billing_cycle} subscription for gonza system`,
                '1',
                `UGX ${payment.amount.toLocaleString()}`,
                `UGX ${payment.amount.toLocaleString()}`
            ]
        ],
        headStyles: {
            fillColor: [
                240,
                240,
                240
            ],
            textColor: [
                0,
                0,
                0
            ],
            fontSize: 10,
            fontStyle: 'bold',
            lineWidth: 0.1,
            lineColor: [
                200,
                200,
                200
            ]
        },
        bodyStyles: {
            fontSize: 9,
            lineWidth: 0.1,
            lineColor: [
                200,
                200,
                200
            ]
        },
        columnStyles: {
            0: {
                cellWidth: 80
            },
            1: {
                halign: 'center',
                cellWidth: 20
            },
            2: {
                halign: 'right',
                cellWidth: 35
            },
            3: {
                halign: 'right',
                cellWidth: 35
            }
        }
    });
    currentY = doc.lastAutoTable.finalY;
    // 6. Totals Section
    const totalsWidth = 90;
    const totalsX = pageWidth - margins.right - totalsWidth;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: currentY,
        margin: {
            left: totalsX
        },
        body: [
            [
                'Subtotal:',
                `UGX ${payment.amount.toLocaleString()}`
            ],
            [
                'TOTAL:',
                `UGX ${payment.amount.toLocaleString()}`
            ]
        ],
        theme: 'plain',
        styles: {
            fontSize: 10,
            cellPadding: 2
        },
        columnStyles: {
            0: {
                cellWidth: 45,
                fontStyle: 'normal'
            },
            1: {
                cellWidth: 45,
                halign: 'right',
                fontStyle: 'bold'
            }
        },
        didParseCell: (data)=>{
            if (data.row.index === 1) {
                data.cell.styles.fillColor = [
                    220,
                    220,
                    220
                ];
                data.cell.styles.fontSize = 12;
            }
            data.cell.styles.lineWidth = 0.1;
            data.cell.styles.lineColor = [
                200,
                200,
                200
            ];
        }
    });
    currentY = doc.lastAutoTable.finalY + 10;
    // 7. Amount in Words
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('Amount in words:', margins.left, currentY);
    currentY += 5;
    doc.setFont('helvetica', 'italic');
    doc.text(`UGX ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$numberToWords$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToWords"])(payment.amount)} only`, margins.left, currentY);
    currentY += 15;
    currentY += 5;
    // 9. Footer
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Thank you for your business!', pageWidth / 2, currentY, {
        align: 'center'
    });
    currentY += 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Created by Gonza Systems', pageWidth / 2, currentY, {
        align: 'center'
    });
    // Save the PDF
    doc.save(`${docPrefix}-GS-${payment.id.split('-')[0].toUpperCase()}.pdf`);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_utils_648642df._.js.map