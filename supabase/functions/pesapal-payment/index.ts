import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface PaymentRequest {
  purchaseId: string
  amount: number
  phoneNumber: string
  description: string
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

async function getOrRegisterIPN(token: string): Promise<string> {
  console.log('=== Getting or Registering IPN ===');

  const pesapalUrl = Deno.env.get('PESAPAL_BASE_URL');
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const ipnUrl = `${supabaseUrl}/functions/v1/pesapal-ipn`;

  console.log('Expected IPN URL:', ipnUrl);

  // Get list of registered IPNs
  const listResponse = await fetch(`${pesapalUrl}/api/URLSetup/GetIpnList`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  const ipns = await listResponse.json();
  console.log('Registered IPNs count:', ipns.length);

  // Check if our IPN URL is already registered and active
  const existingIPN = ipns.find((ipn: any) =>
    ipn.url === ipnUrl && ipn.ipn_status === 1
  );

  if (existingIPN) {
    console.log('✅ IPN already registered, ID:', existingIPN.ipn_id);
    return existingIPN.ipn_id;
  }

  // Register new IPN
  console.log('📝 Registering new IPN...');
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
  console.log('IPN registration response:', registered);

  if (!registered.ipn_id || registered.error) {
    throw new Error(`Failed to register IPN: ${registered.error?.message || 'Unknown error'}`);
  }

  console.log('✅ New IPN registered, ID:', registered.ipn_id);
  return registered.ipn_id;
}

async function submitOrder(token: string, orderData: any) {
  console.log('=== Submitting Order to PesaPal ===');

  const pesapalUrl = Deno.env.get('PESAPAL_BASE_URL');

  const response = await fetch(`${pesapalUrl}/api/Transactions/SubmitOrderRequest`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(orderData),
  })

  const responseData = await response.json();

  return responseData;
}

function normalizeUgPhoneNumber(raw: string): string {
  let phone = raw.trim().replace(/\s+/g, '');

  // Remove + or 256 country code
  if (phone.startsWith('+256')) {
    phone = phone.substring(4);
  } else if (phone.startsWith('256')) {
    phone = phone.substring(3);
  }

  // Ensure it starts with 0
  if (!phone.startsWith('0')) {
    phone = '0' + phone;
  }

  // Validate final format: 07XXXXXXXX (10 digits total)
  if (!/^07\d{8}$/.test(phone)) {
    throw new Error(`Invalid Ugandan phone number format: ${raw}`);
  }

  return phone;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('=== PesaPal Payment Function Called ===');

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser()

    if (!user) {
      throw new Error('Unauthorized - No user found')
    }

    const requestBody = await req.json();
    const { purchaseId, amount, phoneNumber, description }: PaymentRequest = requestBody;

    if (!purchaseId || !amount || !phoneNumber) {
      throw new Error('Missing required fields: purchaseId, amount, or phoneNumber');
    }

    const formattedPhone = normalizeUgPhoneNumber(phoneNumber);

    // Get PesaPal token
    const token = await getPesapalToken()

    // Get or register IPN (auto-registers if not exists)
    const ipnId = await getOrRegisterIPN(token);
    console.log('Using IPN ID:', ipnId);

    // Use the provided purchaseId as the merchant reference so we can find it in IPN
    const merchantReference = purchaseId;
    const callbackUrl = Deno.env.get('PESAPAL_CALLBACK_URL');

    const orderData = {
      id: merchantReference,
      currency: 'UGX',
      amount: amount,
      description: description,
      callback_url: `${callbackUrl}?purchase_id=${purchaseId}`,
      notification_id: ipnId,  // ✅ Now using auto-registered IPN ID
      billing_address: {
        email_address: user.email || '',
        phone_number: formattedPhone,
        country_code: 'UG',
        first_name: user.user_metadata?.full_name?.split(' ')[0] || 'Customer',
        last_name: user.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '',
        line_1: '',
        line_2: '',
        city: '',
        state: '',
        postal_code: '',
        zip_code: ''
      },
      account_number: user.id
    }

    const paymentResponse = await submitOrder(token, orderData)

    if (!paymentResponse.redirect_url) {
      throw new Error(`PesaPal order submission failed: ${JSON.stringify(paymentResponse)}`);
    }

    return new Response(
      JSON.stringify(paymentResponse),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error: any) {
    console.error('=== Payment Function Error ===');
    console.error('Error:', error.message);

    return new Response(
      JSON.stringify({
        error: error.message,
        details: error.stack
      }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})