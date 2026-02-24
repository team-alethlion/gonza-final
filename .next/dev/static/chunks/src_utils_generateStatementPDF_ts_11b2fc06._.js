(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/generateStatementPDF.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateStatementPDF",
    ()=>generateStatementPDF
]);
// Helper to format date as 'Nov 24th, 2025'
function formatFriendlyDate(dateStr) {
    const date = new Date(dateStr);
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const day = date.getDate();
    const daySuffix = (d)=>{
        if (d >= 11 && d <= 13) return 'th';
        switch(d % 10){
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    };
    return `${months[date.getMonth()]} ${day}${daySuffix(day)}, ${date.getFullYear()}`;
}
const generateStatementPDF = async (rows, options)=>{
    const { filename, orientation = 'portrait', format = 'a4', margins = {
        top: 15,
        right: 15,
        bottom: 15,
        left: 15
    }, currency = '', customerName = '' } = options;
    // Dynamically import jsPDF to avoid ReferenceError
    const { jsPDF } = await __turbopack_context__.A("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript, async loader)");
    const pdf = new jsPDF({
        orientation,
        unit: 'mm',
        format,
        compress: true
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const contentWidth = pageWidth - margins.left - margins.right;
    let y = margins.top;
    // Header
    pdf.setFontSize(14);
    pdf.setTextColor(40, 53, 149);
    pdf.text('Customer Statement', margins.left, y);
    pdf.setFontSize(10);
    pdf.setTextColor(60, 60, 60);
    pdf.text(`Customer: ${customerName}`, margins.left, y + 6);
    pdf.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - margins.right - 40, y + 6);
    y += 14;
    // Table header
    pdf.setFontSize(11);
    pdf.setTextColor(40, 53, 149);
    const headers = [
        'Date',
        'Details (Receipt/Invoice)',
        `Amount ${currency}`,
        `Balance ${currency}`
    ];
    const colWidths = [
        30,
        85,
        30,
        30
    ];
    let x = margins.left;
    headers.forEach((header, i)=>{
        pdf.text(header, x + 2, y);
        x += colWidths[i];
    });
    y += 6;
    pdf.setDrawColor(200, 200, 200);
    pdf.line(margins.left, y, pageWidth - margins.right, y);
    y += 2;
    // Table rows
    pdf.setFontSize(10);
    pdf.setTextColor(30, 30, 30);
    let totalAmountRowValue = 0, totalBalance = 0;
    rows.forEach((row, idx)=>{
        x = margins.left;
        pdf.setFillColor(idx % 2 === 0 ? 255 : 245, idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 255);
        pdf.rect(x, y - 4, contentWidth, 10, 'F');
        pdf.text(formatFriendlyDate(row.date), x + 2, y + 2);
        x += colWidths[0];
        pdf.text(row.details, x + 2, y + 2, {
            maxWidth: colWidths[1] - 4
        });
        x += colWidths[1];
        const isPayment = row.amount < 0;
        if (isPayment) {
            pdf.setTextColor(0, 128, 0); // Green for payments
            pdf.text(`- ${Math.abs(row.amount).toLocaleString()}`, x + colWidths[2] - 2, y + 2, {
                align: 'right'
            });
        } else {
            pdf.setTextColor(30, 30, 30);
            pdf.text(`${row.amount.toLocaleString()}`, x + colWidths[2] - 2, y + 2, {
                align: 'right'
            });
        }
        x += colWidths[2];
        pdf.setTextColor(30, 30, 30);
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${row.balance.toLocaleString()}`, x + colWidths[3] - 2, y + 2, {
            align: 'right'
        });
        pdf.setFont('helvetica', 'normal');
        totalAmountRowValue += row.amount;
        totalBalance = row.balance; // Last row's balance is the final balance
        y += 10;
        // Reset text color for next row
        pdf.setTextColor(30, 30, 30);
        // Page break if needed
        if (y > pageHeight - margins.bottom - 20) {
            pdf.addPage();
            y = margins.top;
        // Re-draw header on new page? (Simple version, just continue)
        }
    });
    // Table footer (totals)
    pdf.setFontSize(11);
    pdf.setTextColor(40, 53, 149);
    x = margins.left;
    pdf.setFillColor(230, 240, 255);
    pdf.rect(x, y - 4, contentWidth, 7, 'F');
    pdf.text(`FINAL BALANCE ${currency}`, x + colWidths[0] + colWidths[1] - 2, y, {
        align: 'right'
    });
    x += colWidths[0] + colWidths[1];
    // Empty space for "Amount" column in footer or show net?
    x += colWidths[2];
    pdf.setFont('helvetica', 'bold');
    pdf.text(`${totalBalance.toLocaleString()}`, x + colWidths[3] - 2, y, {
        align: 'right'
    });
    pdf.setFont('helvetica', 'normal');
    y += 10;
    // Footer
    pdf.setFontSize(10);
    pdf.setTextColor(120, 120, 120);
    pdf.text('Thank you for your business!', margins.left, pageHeight - margins.bottom - 8);
    pdf.setFontSize(8);
    pdf.setTextColor(150, 150, 150);
    pdf.text('Generated by Gonza System', pageWidth / 2, pageHeight - 8, {
        align: 'center'
    });
    pdf.save(filename);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_utils_generateStatementPDF_ts_11b2fc06._.js.map