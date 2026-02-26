import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
}

function numberToWords(num: number): string {
    const specialNames = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'];
    const tensNames = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const onesNames = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const convertLessThanOneThousand = (n: number): string => {
        if (n === 0) return '';
        let result = '';
        if (n >= 100) {
            result = `${onesNames[Math.floor(n / 100)]} hundred `;
            n %= 100;
        }
        if (n < 20) {
            result += onesNames[n];
        } else {
            result += `${tensNames[Math.floor(n / 10)]}`;
            if (n % 10 > 0) result += `-${onesNames[n % 10]}`;
        }
        return result.trim();
    };

    const convertNumberToWords = (n: number): string => {
        if (n === 0) return 'zero';
        let result = '';
        let numIndex = 0;
        let temp = Math.abs(n);
        while (temp > 0) {
            if (temp % 1000 !== 0) {
                result = `${convertLessThanOneThousand(temp % 1000)} ${specialNames[numIndex]} ${result}`;
            }
            temp = Math.floor(temp / 1000);
            numIndex++;
        }
        return result.trim();
    };

    const numStr = num.toFixed(2);
    const parts = numStr.split('.');
    const wholeStr = convertNumberToWords(parseInt(parts[0]));
    let finalStr = wholeStr;
    if (parts.length > 1 && parseInt(parts[1]) > 0) {
        finalStr = `${wholeStr} and ${parts[1]}/100`;
    }
    return finalStr.charAt(0).toUpperCase() + finalStr.slice(1);
}

function formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(num);
}

const parsePaymentInfo = (paymentInfo: string) => {
    if (!paymentInfo || typeof paymentInfo !== 'string') return [];
    const lines = paymentInfo.split(/\n/).map(l => l.trim()).filter(l => l !== '');
    const methods: any[] = [];
    for (let i = 0; i < lines.length; i += 3) {
        const method = lines[i] || '';
        const accNum = lines[i + 1] || '';
        const accName = lines[i + 2] || '';
        if (method || accNum || accName) {
            methods.push({ method, accountNumber: accNum, accountName: accName });
        }
    }
    return methods;
};

serve(async (req) => {
    if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

    try {
        const url = new URL(req.url);
        const saleId = url.searchParams.get('id');
        const platform = url.searchParams.get('platform');

        if (!saleId) throw new Error('Missing sale ID');

        const supabaseClient = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        );

        const { data: dbSale, error: saleError } = await supabaseClient
            .from('sales')
            .select('*')
            .eq('id', saleId)
            .single();

        if (saleError || !dbSale) throw new Error('Sale not found');

        const { data: dbPayments } = await supabaseClient
            .from('installment_payments')
            .select('amount')
            .eq('sale_id', saleId);

        const totalPaidFromHistory = (dbPayments || []).reduce((sum, p) => sum + (p.amount || 0), 0);

        let { data: dbSettings } = await supabaseClient
            .from('business_settings')
            .select('*')
            .eq('location_id', dbSale.location_id)
            .maybeSingle();

        if (!dbSettings) {
            const { data: userSettings } = await supabaseClient
                .from('business_settings')
                .select('*')
                .eq('user_id', dbSale.user_id)
                .limit(1)
                .maybeSingle();
            dbSettings = userSettings;
        }

        let metadata = {};
        try {
            metadata = typeof dbSettings?.metadata === 'string'
                ? JSON.parse(dbSettings.metadata)
                : (dbSettings?.metadata || {});
        } catch (e) {
            console.error('Metadata parse error', e);
        }

        const settings = {
            businessName: dbSettings?.business_name || 'Gonza System',
            businessAddress: dbSettings?.business_address || '',
            businessPhone: dbSettings?.business_phone || '',
            businessEmail: dbSettings?.business_email || '',
            currency: dbSettings?.currency || 'UGX',
            paymentInfo: metadata?.payment_info || ''
        };

        const list: any[] = [];
        const addText = (content: string, bold: number = 0, align: number = 0, format: number = 0) => {
            list.push({ type: 0, content, bold, align, format });
        };
        const addSeparator = (char: string = '-') => addText(char.repeat(32), 0, 0, 0);

        // Header
        addSeparator('=');
        if (settings.businessName) addText(settings.businessName, 1, 1, 0);
        if (settings.businessAddress) addText(settings.businessAddress, 0, 1, 0);
        if (settings.businessPhone) addText(`Tel: ${settings.businessPhone}`, 0, 1, 0);
        addSeparator('=');

        const titleMap: Record<string, string> = {
            "Quote": "Quotation",
            "Paid": "Sales Receipt",
            "Installment Sale": "Installment Sale",
            "NOT PAID": "Invoice",
        };
        addText(titleMap[dbSale.payment_status] || "Invoice", 1, 1, 0);
        addSeparator('-');

        addText(`ID: ${dbSale.receipt_number || ''}`, 0, 0, 0);

        // Format Date: MMM dd, yyyy
        const dateOptions: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
        const dateStr = new Date(dbSale.date).toLocaleDateString('en-US', dateOptions);
        addText(`Date: ${dateStr}`, 0, 0, 0);
        if (dbSale.customer_name) {
            addText(`Customer: ${dbSale.customer_name}`, 0, 0, 0);
        }
        addSeparator('-');

        // --- 58mm (32 Col) TEXT TABLE ---
        // Final Rebuild: Uniform fonts (format 0), Dot-Anchored for alignment

        // iOS Thermer/Bluetooth Print apps often strip multiple spaces.
        // We use a safe filler character for iOS to maintain alignment.
        const spacer = platform === 'ios' ? '.' : ' ';

        const headerRow = "Item".padEnd(14, spacer) + " Qty ".padStart(6, spacer) + "Total".padStart(12, spacer);
        addText(headerRow, 1, 0, 0);
        addSeparator('-');

        let subtotalBeforeDiscount = 0;
        let totalDiscountAmount = 0;
        const items = Array.isArray(dbSale.items) ? dbSale.items : [];

        const wrapText = (text: string, maxLength: number): string[] => {
            const words = text.split(' ');
            const lines: string[] = [];
            let currentLine = words[0];

            for (let i = 1; i < words.length; i++) {
                if (currentLine.length + 1 + words[i].length <= maxLength) {
                    currentLine += ' ' + words[i];
                } else {
                    lines.push(currentLine);
                    currentLine = words[i];
                }
            }
            lines.push(currentLine);

            // Handle cases where a single word is longer than maxLength
            const finalLines: string[] = [];
            lines.forEach(line => {
                if (line.length > maxLength) {
                    for (let i = 0; i < line.length; i += maxLength) {
                        finalLines.push(line.substring(i, i + maxLength));
                    }
                } else {
                    finalLines.push(line);
                }
            });

            return finalLines;
        };

        items.forEach((item: any) => {
            const q = Number(item.quantity) || 0;
            const p = Number(item.price) || 0;
            const itemSubtotal = q * p;
            let disc = item.discountType === 'amount'
                ? (Number(item.discountAmount) || 0)
                : (itemSubtotal * (Number(item.discountPercentage) || 0)) / 100;
            const itemTotal = itemSubtotal - disc;
            subtotalBeforeDiscount += itemSubtotal;
            totalDiscountAmount += disc;

            const desc = (item.description || '');
            const qtyStr = String(q);
            const totStr = formatNumber(itemTotal);

            const colQty = qtyStr.padStart(3, spacer).padEnd(6, spacer);
            const colTotal = totStr.padStart(12, spacer);

            // Wrap description to 14 chars
            const descLines = wrapText(desc, 14);

            descLines.forEach((line, index) => {
                const colItem = line.padEnd(14, spacer);
                if (index === 0) {
                    // First line: Item + Qty + Total
                    addText(colItem + colQty + colTotal, 0, 0, 0);
                } else {
                    // Subsequent lines: Item only
                    addText(colItem, 0, 0, 0);
                }
            });

            addSeparator('-');
        });

        const subtotalAfterDiscount = subtotalBeforeDiscount - totalDiscountAmount;
        const taxAmount = subtotalAfterDiscount * ((Number(dbSale.tax_rate) || 0) / 100);
        const totalAmount = subtotalAfterDiscount + taxAmount;
        const cur = settings.currency;

        addSeparator('-');
        addText(`Subtotal: ${cur} ${formatNumber(subtotalBeforeDiscount)}`, 0, 2, 0);
        if (totalDiscountAmount > 0) addText(`Discount: -${cur} ${formatNumber(totalDiscountAmount)}`, 0, 2, 0);
        if (Number(dbSale.tax_rate) > 0) addText(`Tax: ${cur} ${formatNumber(taxAmount)}`, 0, 2, 0);
        addSeparator('-');

        addText(`Total: ${cur} ${formatNumber(totalAmount)}`, 1, 2, 0);

        if (dbSale.payment_status === 'Installment Sale' || (dbSale.payment_status === 'Paid' && totalPaidFromHistory > 0)) {
            const paid = totalPaidFromHistory > 0 ? totalPaidFromHistory : (Number(dbSale.amount_paid) || totalAmount);
            const due = Math.max(0, totalAmount - paid);
            addText(`Paid: ${cur} ${formatNumber(paid)}`, 0, 2, 0);
            addText(`Due: ${cur} ${formatNumber(due)}`, 1, 2, 0);
        }

        // Standardized Text (Format 0)
        addText(`Words: ${cur} ${numberToWords(totalAmount)} only.`, 0, 0, 0);
        addSeparator('-');

        const paymentMethods = parsePaymentInfo(settings.paymentInfo);
        if (paymentMethods.length > 0) {
            addText("Payment Channels:", 1, 0, 0);
            paymentMethods.forEach((p) => {
                addText(`${p.method}: ${p.accountNumber}`, 1, 0, 0);
                if (p.accountName) addText(`${p.accountName}`, 0, 0, 0);
                addSeparator('-');
            });
        }


        addText("Thank you!", 1, 1, 0);
        addText("Created by Gonza Systems", 0, 1, 0);
        addText("\n\n\n", 0, 0, 0);

        // Create indexed dictionary for printing apps
        const finalData: any = {};
        list.forEach((textLine, index) => {
            // iOS Thermer / Android Bluetooth Print typically expect numeric keys
            // iOS sorting fix: pad keys to ensure order 001, 002...
            const key = (platform === 'ios')
                ? index.toString().padStart(3, '0')
                : index.toString();
            finalData[key] = textLine;
        });

        return new Response(JSON.stringify(finalData), {
            headers: {
                ...corsHeaders,
                'Content-Type': 'application/json'
            },
            status: 200,
        });

    } catch (err: any) {
        console.error('Edge Function Error:', err);
        return new Response(JSON.stringify({ error: err?.message || 'Unknown processing error' }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 400,
        });
    }
});
