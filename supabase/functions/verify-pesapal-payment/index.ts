import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

async function getPesapalToken() {
  console.log('=== Getting PesaPal Token ===');
  const pesapalUrl = Deno.env.get('PESAPAL_BASE_URL');
  const consumerKey = Deno.env.get('PESAPAL_CONSUMER_KEY');
  const consumerSecret = Deno.env.get('PESAPAL_CONSUMER_SECRET');

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
  })

  const data = await response.json()

  if (!data.token) {
    throw new Error(`Failed to get PesaPal token: ${JSON.stringify(data)}`);
  }

  return data.token
}

async function getTransactionStatus(token: string, orderTrackingId: string) {
  console.log('=== Getting Transaction Status ===');
  console.log('Order Tracking ID:', orderTrackingId);

  const pesapalUrl = Deno.env.get('PESAPAL_BASE_URL');

  const response = await fetch(
    `${pesapalUrl}/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    }
  )

  const data = await response.json();
  console.log('Transaction status response:', data);

  return data;
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('=== [START] verify-pesapal-payment ===');

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    const pesapalUrl = Deno.env.get('PESAPAL_BASE_URL') ?? '';
    const consumerKey = Deno.env.get('PESAPAL_CONSUMER_KEY') ?? '';
    const consumerSecret = Deno.env.get('PESAPAL_CONSUMER_SECRET') ?? '';

    console.log('Environment Check:', {
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseServiceKey,
      pesapalUrl,
      hasConsumerKey: !!consumerKey,
      hasConsumerSecret: !!consumerSecret
    });

    if (!supabaseUrl || !supabaseServiceKey || !pesapalUrl) {
      throw new Error('Missing critical environment variables (SUPABASE_URL, SERVICE_KEY, or PESAPAL_BASE_URL)');
    }

    const serviceSupabase = createClient(supabaseUrl, supabaseServiceKey);

    let body: any = {};
    try {
      body = await req.json();
    } catch (e) {
      throw new Error('Invalid JSON payload');
    }

    const { orderTrackingId, purchaseId } = body;
    console.log('Incoming Payload:', { orderTrackingId, purchaseId });

    if (!orderTrackingId) throw new Error('Missing orderTrackingId');

    // 1. Get PesaPal Token
    let token: string;
    try {
      console.log('1. Getting PesaPal Token...');
      token = await getPesapalToken();
    } catch (e: any) {
      console.error('PesaPal Token Error:', e.message);
      throw new Error(`PesaPal Authentication Failed: ${e.message}`);
    }

    // 2. Fetch Transaction Status
    let transactionStatus: any;
    try {
      console.log('2. Fetching Transaction Status for:', orderTrackingId);
      transactionStatus = await getTransactionStatus(token, orderTrackingId);
      console.log('PesaPal Status Response:', {
        status_code: transactionStatus.status_code,
        payment_status: transactionStatus.payment_status_description,
        amount: transactionStatus.amount,
        merchant_reference: transactionStatus.merchant_reference,
        payment_method: transactionStatus.payment_method
      });
    } catch (e: any) {
      console.error('Transaction Status Check Error:', e.message);
      throw new Error(`PesaPal Status Check Failed: ${e.message}`);
    }

    // ---------------------------------------------------------
    // Subscription Record Recovery
    // ---------------------------------------------------------
    let purchase: any = null;

    // 1. Try search by Tracking ID (Most Reliable)
    console.log('3. Searching by Tracking ID...');
    const { data: subTrack, error: subTrackErr } = await serviceSupabase
      .from('subscription_payments')
      .select('*')
      .eq('pesapal_tracking_id', orderTrackingId)
      .maybeSingle();

    if (subTrackErr) console.log('Subscription tracking lookup error:', subTrackErr);

    if (subTrack) {
      console.log('Found in [subscription_payments] by Tracking ID');
      purchase = subTrack;
    }

    // 2. Try search by Merchant Reference (purchaseId or status.merchant_reference)
    if (!purchase) {
      const ref = purchaseId || transactionStatus.merchant_reference;
      if (ref) {
        console.log('4. Searching by Merchant Reference:', ref);
        const { data: subRef, error: subRefErr } = await serviceSupabase
          .from('subscription_payments')
          .select('*')
          .eq('id', ref)
          .maybeSingle();

        if (subRefErr) console.log('Subscription reference lookup error:', subRefErr);

        if (subRef) {
          console.log('Found in [subscription_payments] by Merchant Ref');
          purchase = subRef;
        }
      }
    }

    if (!purchase) {
      console.log('❌ FATAL: Could not recover record for Tracking ID:', orderTrackingId, 'Ref:', purchaseId);
      throw new Error(`Record not found in database for ${orderTrackingId} or ${purchaseId}`);
    }

    console.log('5. Record discovered in: Subscriptions, Record ID:', purchase.id);

    // Fulfillment logic
    const normalizedStatus = transactionStatus.payment_status_description?.toLowerCase();
    const isCompleted = normalizedStatus === 'completed' || transactionStatus.status_code === 1;
    const isFailed = normalizedStatus === 'failed' || transactionStatus.status_code === 2;

    console.log('6. Status check:', { normalizedStatus, isCompleted, isFailed, currentDBStatus: purchase.payment_status });

    let paymentStatus = purchase.payment_status;
    let addedValue = 0;

    if (isCompleted && purchase.payment_status !== 'completed') {
      paymentStatus = 'completed';
      console.log('7. Processing fulfillment (Applying value)...');

      // Update purchase record
      const { error: updErr } = await serviceSupabase.from('subscription_payments').update({
        payment_status: 'completed',
        payment_method: transactionStatus.payment_method,
        updated_at: new Date().toISOString(),
        pesapal_tracking_id: orderTrackingId
      }).eq('id', purchase.id);

      if (updErr) {
        console.error('Error updating purchase record:', updErr);
        throw new Error(`Failed to update payment record: ${updErr.message}`);
      }
      console.log('✅ Purchase record updated to COMPLETED');

      // Apply Subscription Days
      const { data: status, error: statusErr } = await serviceSupabase
        .from('user_account_status')
        .select('*')
        .eq('user_id', purchase.user_id)
        .maybeSingle();

      if (statusErr) {
        console.error('Error fetching user status:', statusErr);
        throw new Error(`Failed to fetch account status: ${statusErr.message}`);
      }

      let daysToAdd = 30;
      const cycle = purchase.billing_cycle || status?.billing_duration || 'Monthly';

      if (cycle === 'Daily') daysToAdd = 1;
      else if (cycle === 'Weekly') daysToAdd = 7;
      else if (cycle === 'Monthly') daysToAdd = 30;
      else if (cycle === 'Yearly') daysToAdd = 365;

      const currentDays = status?.days_remaining || 0;
      // Safety: If user was already expired (currentDays <= 0), start counting from NOW.
      // Otherwise, ADD to their current remaining days.
      const baseDays = currentDays > 0 ? currentDays : 0;
      const newDays = baseDays + daysToAdd;

      const nextBilling = new Date();
      nextBilling.setDate(nextBilling.getDate() + newDays);

      console.log(`Extending subscription for ${purchase.user_id}: ${currentDays} (Base: ${baseDays}) -> ${newDays} days`);

      const { error: upsertErr } = await serviceSupabase.from('user_account_status').upsert({
        user_id: purchase.user_id,
        days_remaining: newDays,
        next_billing_date: nextBilling.toISOString(),
        billing_amount: purchase.amount,
        billing_duration: cycle,
        updated_at: new Date().toISOString()
      });

      if (upsertErr) {
        console.error('Error upserting user status:', upsertErr);
        throw new Error(`Failed to update subscription status: ${upsertErr.message}`);
      }

      addedValue = daysToAdd;
      console.log('✅ User account status updated via Master Record');
    } else if (isFailed) {
      console.log('🛑 Transaction marked as FAILED by PesaPal');
      paymentStatus = 'failed';
    } else if (purchase.payment_status === 'completed') {
      console.log('ℹ️ Transaction was already processed as completed.');
      paymentStatus = 'completed';
    } else {
      console.log('ℹ️ Transaction in state:', normalizedStatus);
    }

    const responseData = {
      success: true,
      payment_status: paymentStatus,
      value_added: addedValue,
      is_subscription: true,
      amount: transactionStatus.amount,
      tracking_id: orderTrackingId,
      merchant_reference: purchase.id
    };

    console.log('=== [SUCCESS] Returning response ===');
    return new Response(JSON.stringify(responseData), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  } catch (error: any) {
    console.error('=== [ERROR] verify-pesapal-payment ===');
    console.error('Error detail:', error.message);

    // We return a 200 with success: false so the client can READ the error message
    // instead of it being blocked by the invoke() HTTP catch.
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
})
