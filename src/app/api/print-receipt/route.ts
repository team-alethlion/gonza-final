import { NextResponse } from 'next/server';
import { db } from '../../../../prisma/db';
import { auth } from '@/auth';

function numberToWords(num: number): string {
    const specialNames = ['', 'thousand', 'million', 'billion', 'trillion'];
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (num === 0) return 'zero';

    function convertGroup(n: number): string {
        let res = '';
        if (n >= 100) {
            res += ones[Math.floor(n / 100)] + ' hundred ';
            n %= 100;
        }
        if (n >= 20) {
            res += tens[Math.floor(n / 10)] + ' ';
            n %= 10;
        } else if (n >= 10) {
            res += teens[n - 10] + ' ';
            return res;
        }
        if (n > 0) {
            res += ones[n] + ' ';
        }
        return res;
    }

    let result = '';
    let groupIdx = 0;

    while (num > 0) {
        let group = num % 1000;
        if (group !== 0) {
            result = convertGroup(group) + (specialNames[groupIdx] ? specialNames[groupIdx] + ' ' : '') + result;
        }
        num = Math.floor(num / 1000);
        groupIdx++;
    }

    return result.trim();
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const saleId = searchParams.get('saleId');

    if (!saleId) {
        return NextResponse.json({ error: 'Sale ID is required' }, { status: 400 });
    }

    try {
        const session = await auth();
        if (!session || !session.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const sale = await db.sale.findUnique({
            where: { id: saleId },
            include: {
                branch: {
                    include: {
                        settings: true
                    }
                }
            }
        });

        if (!sale) {
            return NextResponse.json({ error: 'Sale not found' }, { status: 404 });
        }

        // AUTHORIZATION: Ensure sale belongs to the user's branch
        const userBranchId = (session.user as any).branchId;
        if (userBranchId && userBranchId !== sale.branchId) {
            const role = (session.user as any).role?.toLowerCase();
            if (role !== 'superadmin') {
                return NextResponse.json({ error: 'Unauthorized: Branch mismatch' }, { status: 403 });
            }
        }

        const items = Array.isArray(sale.items) ? sale.items : [];
        const subtotal = Number(sale.subtotal || 0);
        const taxAmount = Number(sale.taxAmount || 0);
        const total = Number(sale.total || 0);
        const amountPaid = Number(sale.amountPaid || 0);
        const balance = Number(sale.balance || 0);

        const finalData = {
            receiptNumber: sale.saleNumber,
            date: sale.date.toISOString(),
            customerName: sale.customerName,
            customerAddress: sale.customerAddress,
            customerPhone: sale.customerPhone,
            paymentStatus: sale.paymentStatus,
            notes: sale.notes,
            taxRate: Number(sale.taxRate || 0),
            subtotal,
            taxAmount,
            total,
            amountPaid,
            balance,
            amountInWords: numberToWords(total),
            items: items.map((item: any) => ({
                description: item.description,
                quantity: Number(item.quantity || 0),
                price: Number(item.price || 0),
                discountAmount: Number(item.discountAmount || 0),
                discountPercentage: Number(item.discountPercentage || 0),
                total: (Number(item.quantity || 0) * Number(item.price || 0)) - Number(item.discountAmount || 0)
            })),
            businessSettings: {
                businessName: sale.branch.settings?.businessName || sale.branch.name,
                businessAddress: sale.branch.settings?.address || sale.branch.location,
                businessPhone: sale.branch.settings?.phone || sale.branch.phone,
                businessEmail: sale.branch.settings?.email || sale.branch.email,
                currency: sale.branch.settings?.currency || 'UGX',
                businessLogo: sale.branch.settings?.businessLogo
            }
        };

        return NextResponse.json(finalData);

    } catch (err: any) {
        console.error('API Route Error:', err);
        return NextResponse.json({ error: err?.message || 'Unknown processing error' }, { status: 400 });
    }
}
