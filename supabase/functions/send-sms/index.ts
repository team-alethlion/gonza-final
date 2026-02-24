import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-api-key, x-account-id, x-client-info, apikey, content-type',
}

async function sendSMSViaEazireach(phoneNumber: string, message: string, businessName: string = "Gonza") {
  console.log('=== Calling Eazireach API ===');
  console.log('Phone:', phoneNumber);
  console.log('Message length:', message.length);
  console.log('Business Name:', businessName);

  const apiKey = Deno.env.get('EAZIREACH_API_KEY');
  const accountId = Deno.env.get('EAZIREACH_ACCOUNT_ID');

  console.log('API Key exists:', !!apiKey);
  console.log('Account ID exists:', !!accountId);

  if (!apiKey || !accountId) {
    throw new Error('Eazireach API credentials not configured');
  }

  const requestBody = {
    recipients: [
      { phone: phoneNumber }
    ],
    message: message,
    channel: ["sms"],
    businessName: businessName
  };

  console.log('Request body:', JSON.stringify(requestBody));

  const response = await fetch('https://api.eazireach.com/api/v1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey,
      'X-Account-ID': accountId
    },
    body: JSON.stringify(requestBody)
  });

  console.log('Eazireach response status:', response.status);

  const result = await response.json();
  console.log('Eazireach response:', JSON.stringify(result));

  return result;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('=== Send SMS Function Called ===');
    console.log('Request method:', req.method);

    // Create Supabase client with service role key for full access
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Parse request body
    const { messageId } = await req.json();
    console.log('Message ID:', messageId);

    if (!messageId) {
      throw new Error('Missing messageId');
    }

    // Get message details from database
    const { data: message, error: fetchError } = await supabaseClient
      .from('messages')
      .select('*')
      .eq('id', messageId)
      .single();

    if (fetchError) {
      console.error('Fetch error:', fetchError);
      throw new Error(`Failed to fetch message: ${fetchError.message}`);
    }

    if (!message) {
      throw new Error('Message not found');
    }

    console.log('Message found:', {
      id: message.id,
      phone: message.phone_number,
      status: message.status,
      content_length: message.content.length
    });

    // Check if message is already sent
    if (message.status === 'sent' || message.status === 'delivered') {
      console.log('Message already sent, skipping');
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Message already sent',
          alreadySent: true
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get business settings for the location
    const { data: settings, error: settingsError } = await supabaseClient
      .from('business_settings')
      .select('business_name')
      .eq('location_id', message.location_id)
      .maybeSingle();

    if (settingsError) {
      console.error('Settings fetch error:', settingsError);
    }

    const businessName = settings?.business_name || "Gonza";
    console.log('Using business name:', businessName);

    // Sanitize message content: Replace non-breaking spaces and other special whitespace with standard spaces
    const sanitizedContent = message.content.replace(/[\u00A0\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000]/g, ' ');

    // Send SMS via Eazireach
    console.log('Sending SMS...');
    const result = await sendSMSViaEazireach(message.phone_number, sanitizedContent, businessName);

    console.log('SMS send result:', result);

    // Determine if sending was successful based on Eazireach API response structure
    // API returns: { success: true, summary: {...}, details: [...] }
    const isSuccess = result.success === true;

    console.log('Is success:', isSuccess);

    // Update message status in database
    if (isSuccess) {
      console.log('Updating message status to sent');

      const { error: updateError } = await supabaseClient
        .from('messages')
        .update({
          status: 'sent',
          sent_at: new Date().toISOString(),
          metadata: result
        })
        .eq('id', messageId);

      if (updateError) {
        console.error('Update error:', updateError);
        throw updateError;
      }

      console.log('Message status updated successfully');
    } else {
      console.log('Updating message status to failed');

      const { error: updateError } = await supabaseClient
        .from('messages')
        .update({
          status: 'failed',
          error_message: result.error || result.message || 'Failed to send SMS',
          metadata: result
        })
        .eq('id', messageId);

      if (updateError) {
        console.error('Update error:', updateError);
        throw updateError;
      }

      console.log('Message marked as failed');
    }

    return new Response(
      JSON.stringify({
        success: isSuccess,
        result,
        messageId: message.id,
        status: isSuccess ? 'sent' : 'failed'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('=== Send SMS Error ===');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        details: error.stack
      }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
})