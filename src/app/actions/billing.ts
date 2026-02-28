/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';
import { getPesapalToken } from '@/lib/pesapal';

export async function getSubscriptionPaymentsAction(userId: string) {
    try {
        const transactions = await db.transaction.findMany({
            where: {
                userId: userId,
                type: 'subscription',
                status: {
                    in: ['completed', 'success']
                }
            },
            orderBy: {
                createdAt: 'desc' // Changed to desc usually better for history
            }
        });

        // Map to match the shape expected by BillingHistory for now
        return transactions.map((t: any) => ({
            id: t.id,
            created_at: t.createdAt.toISOString(),
            billing_cycle: t.billingCycle,
            amount: Number(t.amount),
            payment_status: t.status,
            pesapal_tracking_id: t.pesapalOrderTrackingId
        }));
    } catch (error) {
        console.error('Error fetching subscription payments:', error);
        return [];
    }
}

// --- PESAPAL INTEGRATION UTILS ---

async function getOrRegisterIPN(token: string): Promise<string> {
    const pesapalUrl = process.env.PESAPAL_BASE_URL;
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.VERCEL_URL || 'http://localhost:3000';
    const ipnUrl = `${baseUrl.startsWith('http') ? baseUrl : 'https://' + baseUrl}/api/pesapal/ipn`;

    const listResponse = await fetch(`${pesapalUrl}/api/URLSetup/GetIpnList`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const ipns = await listResponse.json();
    const existingIPN = ipns.find((ipn: any) => ipn.url === ipnUrl && ipn.ipn_status === 1);

    if (existingIPN) {
        return existingIPN.ipn_id;
    }

    const registerResponse = await fetch(`${pesapalUrl}/api/URLSetup/RegisterIPN`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            url: ipnUrl,
            ipn_notification_type: 'POST'
        })
    });

    const registered = await registerResponse.json();
    if (!registered.ipn_id || registered.error) {
        throw new Error(`Failed to register IPN: ${registered.error?.message || 'Unknown error'}`);
    }
    return registered.ipn_id;
}

function normalizeUgPhoneNumber(raw: string): string {
    let phone = raw.trim().replace(/\s+/g, '');
    if (phone.startsWith('+256')) phone = phone.substring(4);
    else if (phone.startsWith('256')) phone = phone.substring(3);
    if (!phone.startsWith('0')) phone = '0' + phone;
    if (!/^07\d{8}$/.test(phone)) throw new Error(`Invalid Ugandan phone number format: ${raw}`);
    return phone;
}

export async function initiateSubscriptionPaymentAction(userId: string, locationId: string, billingCycle: string, phone: string) {
    try {
        // 1. Fetch user, agency, and package to get the correct price
        const user = await db.user.findUnique({
            where: { id: userId },
            include: {
                agency: {
                    include: {
                        package: true
                    }
                }
            }
        });

        if (!user || !user.agency || !user.agency.package) {
            throw new Error("No subscription package found for this user.");
        }

        const pkg = user.agency.package;
        const billingCycleLower = billingCycle.toLowerCase();
        
        // Calculate amount server-side - DO NOT TRUST CLIENT AMOUNT
        const amount = billingCycleLower === 'yearly' 
            ? Number(pkg.yearlyPrice) 
            : Number(pkg.monthlyPrice);

        if (!amount || amount <= 0) {
            throw new Error("Invalid subscription amount calculated.");
        }

        const purchaseId = crypto.randomUUID();

        // 2. Create a pending Transaction record
        await db.transaction.create({
            data: {
                id: purchaseId,
                userId: userId,
                pesapalMerchantReference: purchaseId,
                amount: amount,
                status: 'pending',
                type: 'subscription',
                billingCycle: billingCycle,
                packageId: pkg.id,
                agencyId: user.agencyId
            }
        });

        // 3. Invoke Pesapal directly
        const formattedPhone = normalizeUgPhoneNumber(phone);
        const token = await getPesapalToken();
        const ipnId = await getOrRegisterIPN(token);
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.VERCEL_URL || 'http://localhost:3000';
        const callbackUrl = `${baseUrl.startsWith('http') ? baseUrl : 'https://' + baseUrl}/api/pesapal/callback`;

        const orderData = {
            id: purchaseId,
            currency: 'UGX',
            amount: amount,
            description: `Subscription Renewal - ${pkg.name} (${billingCycle})`,
            callback_url: `${callbackUrl}?purchase_id=${purchaseId}`,
            notification_id: ipnId,
            billing_address: {
                email_address: user.email || '',
                phone_number: formattedPhone,
                country_code: 'UG',
                first_name: user.name?.split(' ')[0] || 'Customer',
                last_name: user.name?.split(' ').slice(1).join(' ') || '',
                line_1: '', line_2: '', city: '', state: '', postal_code: '', zip_code: ''
            },
            account_number: userId
        };

        const pesapalUrl = process.env.PESAPAL_BASE_URL;
        const submitResponse = await fetch(`${pesapalUrl}/api/Transactions/SubmitOrderRequest`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(orderData),
        });

        if (!submitResponse.ok) {
            const errorData = await submitResponse.json();
            throw new Error(errorData.error?.message || 'Failed to submit order to Pesapal');
        }

        const data = await submitResponse.json();

        if (data?.redirect_url) {
            // 3. Update Transaction with Pesapal tracking ID
            await db.transaction.update({
                where: { id: purchaseId },
                data: {
                    pesapalOrderTrackingId: data.order_tracking_id
                }
            });

            return { success: true, redirect_url: data.redirect_url };
        } else {
            throw new Error("No redirect URL returned from Pesapal");
        }

    } catch (error: any) {
        console.error('Error initiating subscription payment:', error);
        return { success: false, error: error.message };
    }
}
