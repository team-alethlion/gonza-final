/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import { db } from '../../../prisma/db';
import { revalidatePath } from 'next/cache';

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
            amount: t.amount,
            payment_status: t.status,
            pesapal_tracking_id: t.pesapalOrderTrackingId
        }));
    } catch (error) {
        console.error('Error fetching subscription payments:', error);
        return [];
    }
}

export async function initiateSubscriptionPaymentAction(userId: string, locationId: string, amount: number, billingCycle: string, phone: string) {
    try {
        const purchaseId = crypto.randomUUID();

        // 1. Create a pending Transaction record
        await db.transaction.create({
            data: {
                id: purchaseId,
                userId: userId,
                // Assuming we use pesapalMerchantReference for our internal ID matching pesapal body
                pesapalMerchantReference: purchaseId,
                amount: amount,
                status: 'pending',
                type: 'subscription',
                billingCycle: billingCycle,
                // agencyId could be inferred from user or location
            }
        });

        // 2. Invoke Pesapal edge function
        // For server actions relying on Supabase Edge functions, we still need to call the edge function HTTP endpoint
        // You'll need SUPABASE_URL and ANON_KEY available on the server
        const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
        const anonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !anonKey) {
            throw new Error("Supabase credentials missing for Edge Function invocation");
        }

        const response = await fetch(`${supabaseUrl}/functions/v1/pesapal-payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${anonKey}`
            },
            body: JSON.stringify({
                purchaseId: purchaseId,
                amount: amount,
                phoneNumber: phone,
                description: `Subscription Renewal - ${billingCycle} Plan`
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to invoke payment function');
        }

        const data = await response.json();

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
