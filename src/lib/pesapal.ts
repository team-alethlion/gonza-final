/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from '../../prisma/db';

export async function getPesapalToken() {
    const pesapalUrl = process.env.PESAPAL_BASE_URL;
    const consumerKey = process.env.PESAPAL_CONSUMER_KEY;
    const consumerSecret = process.env.PESAPAL_CONSUMER_SECRET;

    if (!pesapalUrl || !consumerKey || !consumerSecret) {
        throw new Error("Missing Pesapal environment variables");
    }

    const response = await fetch(`${pesapalUrl}/api/Auth/RequestToken`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            consumer_key: consumerKey,
            consumer_secret: consumerSecret,
        }),
    });

    const data = await response.json();
    if (!data.token) {
        throw new Error(`Failed to get PesaPal token: ${JSON.stringify(data)}`);
    }
    return data.token;
}

export async function verifyPesapalTransaction(trackingId: string) {
    const token = await getPesapalToken();
    const pesapalUrl = process.env.PESAPAL_BASE_URL;

    const response = await fetch(`${pesapalUrl}/api/Transactions/GetTransactionStatus?orderTrackingId=${trackingId}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch transaction status from Pesapal");
    }

    const statusData = await response.json();
    return statusData;
}

export async function processSuccessfulSubscription(transactionId: string, pesapalData: any) {
    return await db.$transaction(async (tx) => {
        // 1. Fetch the transaction
        const transaction = await tx.transaction.findUnique({
            where: { id: transactionId },
            include: { user: { include: { agency: true } } }
        });

        if (!transaction || transaction.status === 'completed') {
            return { success: true, message: "Transaction already processed or not found" };
        }

        // 2. Validate amount (Security check)
        const paidAmount = Number(pesapalData.amount);
        const expectedAmount = Number(transaction.amount);

        if (Math.abs(paidAmount - expectedAmount) > 1) { // Allow small rounding difference if any
            console.error(`CRITICAL: Amount mismatch for transaction ${transactionId}. Expected: ${expectedAmount}, Paid: ${paidAmount}`);
            await tx.transaction.update({
                where: { id: transactionId },
                data: { 
                    status: 'failed',
                    description: `Amount mismatch: Expected ${expectedAmount}, Paid ${paidAmount}`
                }
            });
            return { success: false, error: "Amount mismatch" };
        }

        // 3. Update Transaction status
        await tx.transaction.update({
            where: { id: transactionId },
            data: { 
                status: 'completed',
                updatedAt: new Date()
            }
        });

        // 4. Update Agency subscription
        if (transaction.type === 'subscription' && transaction.agencyId) {
            const now = new Date();
            let newExpiry = new Date();
            
            // If current subscription is still active, extend from expiry date
            const currentExpiry = transaction.user.agency?.subscriptionExpiry;
            if (currentExpiry && currentExpiry > now) {
                newExpiry = new Date(currentExpiry);
            }

            if (transaction.billingCycle?.toLowerCase() === 'yearly') {
                newExpiry.setFullYear(newExpiry.getFullYear() + 1);
            } else {
                newExpiry.setMonth(newExpiry.getMonth() + 1);
            }

            await tx.agency.update({
                where: { id: transaction.agencyId },
                data: {
                    subscriptionStatus: 'active',
                    subscriptionExpiry: newExpiry,
                    packageId: transaction.packageId || undefined,
                    updatedAt: now
                }
            });
        }

        return { success: true };
    });
}
