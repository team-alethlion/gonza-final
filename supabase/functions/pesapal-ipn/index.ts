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

  console.log('PesaPal URL:', pesapalUrl);
  console.log('Consumer Key exists:', !!consumerKey);
  console.log('Consumer Secret exists:', !!consumerSecret);

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

  console.log('Token response status:', response.status);
  const data = await response.json()
  console.log('Token response:', data);

  if (!data.token) {
    throw new Error(`Failed to get PesaPal token: ${JSON.stringify(data)}`);
  }

  return data.token
}

async function getTransactionStatus(token: string, orderTrackingId: string) {
  const response = await fetch(
    `${Deno.env.get('PESAPAL_BASE_URL')}/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  )

  return await response.json()
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Log request details for debugging
    const url = new URL(req.url)
    console.log('Request URL:', req.url)
    console.log('Request Method:', req.method)

    let OrderTrackingId: string | null = null
    let OrderMerchantReference: string | null = null

    // 1. Try to get from URL Query Params (Common for PesaPal IPN)
    if (url.searchParams.has('OrderTrackingId')) {
      OrderTrackingId = url.searchParams.get('OrderTrackingId')
      OrderMerchantReference = url.searchParams.get('OrderMerchantReference')
      console.log('Found params in URL:', { OrderTrackingId, OrderMerchantReference })
    }

    // 2. If not in URL, try Body (JSON or URL Encoded)
    if (!OrderTrackingId) {
      try {
        const body = await req.text()
        if (body && body.length > 0) {
          // Try JSON first
          try {
            const json = JSON.parse(body)
            OrderTrackingId = json.OrderTrackingId
            OrderMerchantReference = json.OrderMerchantReference
            console.log('Found params in JSON body')
          } catch (e) {
            // If not JSON, try URL Encoded (application/x-www-form-urlencoded)
            const params = new URLSearchParams(body)
            OrderTrackingId = params.get('OrderTrackingId')
            OrderMerchantReference = params.get('OrderMerchantReference')
            if (OrderTrackingId) {
              console.log('Found params in URL Encoded body')
            }
          }
        }
      } catch (e) {
        console.log('Error reading body:', e)
      }
    }

    if (!OrderTrackingId) {
      throw new Error('OrderTrackingId not found in request (URL, JSON, or Form Body)')
    }

    // Get PesaPal authentication token
    const token = await getPesapalToken()

    // Get transaction status
    const status = await getTransactionStatus(token, OrderTrackingId)

    console.log('Transaction status:', status)

    // ---------------------------------------------------------
    // Subscription Record Recovery
    // ---------------------------------------------------------
    let purchase: any = null;

    console.log('=== [IPN] Starting Record Recovery ===');

    // 1. Try search by Tracking ID (Most Reliable)
    console.log('🔍 Searching by Tracking ID:', OrderTrackingId);
    const { data: subTrack, error: subTrackErr } = await supabaseClient
      .from('subscription_payments')
      .select('*')
      .eq('pesapal_tracking_id', OrderTrackingId)
      .maybeSingle();

    if (subTrackErr) console.log('Subscription lookup error:', subTrackErr);

    if (subTrack) {
      console.log('Found in [subscription_payments] by Tracking ID');
      purchase = subTrack;
    }

    // 2. Try search by Merchant Reference (OrderMerchantReference)
    if (!purchase && OrderMerchantReference) {
      console.log('🔍 Searching by Merchant Reference:', OrderMerchantReference);
      const { data: subRef } = await supabaseClient
        .from('subscription_payments')
        .select('*')
        .eq('id', OrderMerchantReference)
        .maybeSingle();

      if (subRef) {
        console.log('Found in [subscription_payments] by Merchant Ref');
        purchase = subRef;
      }
    }

    if (!purchase) {
      console.log('❌ FATAL: IPN record recovery failed for ID:', OrderTrackingId, 'Ref:', OrderMerchantReference);
      throw new Error(`Record recovery failed for Tracking ID: ${OrderTrackingId} Reference: ${OrderMerchantReference}`);
    }

    console.log('✅ IPN: Record discovered in: Subscriptions');

    // Update purchase status and apply value (idempotency protection)
    const normalizedStatus = status.payment_status_description?.toLowerCase();
    const isCompleted = normalizedStatus === 'completed' || status.status_code === 1;
    const isFailed = normalizedStatus === 'failed' || status.status_code === 2;

    if (isCompleted) {
      const wasAlreadyCompleted = purchase.payment_status === 'completed';
      console.log('Payment status:', wasAlreadyCompleted ? 'ALREADY COMPLETED (Skipping Value)' : 'NEW COMPLETION (Applying Value)');

      // 1. Update purchase record status
      const { error: updateError } = await supabaseClient.from('subscription_payments').update({
        payment_status: 'completed',
        payment_method: status.payment_method,
        updated_at: new Date().toISOString(),
        pesapal_tracking_id: OrderTrackingId
      }).eq('id', purchase.id);

      if (updateError) {
        console.error('IPN: Error updating purchase record:', updateError);
        throw updateError;
      }

      // 2. Apply the subscription days if NOT already completed
      if (!wasAlreadyCompleted) {
        console.log('📅 IPN: Extending subscription days...');
        const { data: userStatus } = await supabaseClient
          .from('user_account_status')
          .select('*')
          .eq('user_id', purchase.user_id)
          .maybeSingle();

        let daysToAdd = 30;
        const cycle = purchase.billing_cycle || userStatus?.billing_duration || 'Monthly';
        if (cycle === 'Daily') daysToAdd = 1;
        else if (cycle === 'Weekly') daysToAdd = 7;
        else if (cycle === 'Monthly') daysToAdd = 30;
        else if (cycle === 'Yearly') daysToAdd = 365;

        const currentDays = userStatus?.days_remaining || 0;
        // Safety: If user was already expired (currentDays <= 0), start counting from NOW.
        // Otherwise, ADD to their current remaining days.
        const baseDays = currentDays > 0 ? currentDays : 0;
        const newDays = baseDays + daysToAdd;

        const nextBilling = new Date();
        nextBilling.setDate(nextBilling.getDate() + newDays);

        console.log(`IPN: Extending status for ${purchase.user_id}: ${currentDays} (Base: ${baseDays}) -> ${newDays} days`);

        const { error: statusUpdateError } = await supabaseClient.from('user_account_status').upsert({
          user_id: purchase.user_id,
          days_remaining: newDays,
          next_billing_date: nextBilling.toISOString(),
          billing_amount: purchase.amount,
          billing_duration: cycle,
          updated_at: new Date().toISOString()
        });

        if (statusUpdateError) {
          console.error('IPN: Error upserting user status:', statusUpdateError);
          throw statusUpdateError;
        }
        console.log(`✅ IPN: Extended ${daysToAdd} days`);
      }
    } else if (isFailed) {
      console.log('🛑 IPN: Transaction marked as FAILED');
      await supabaseClient.from('subscription_payments').update({
        payment_status: 'failed',
        updated_at: new Date().toISOString()
      }).eq('id', purchase.id);
    }

    return new Response(
      JSON.stringify({ success: true, status }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error: any) {
    console.error('IPN Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})