import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface BirthdayCustomer {
  id: string
  user_id: string
  location_id: string
  full_name: string
  phone_number: string
  email: string
  birthday: string
}

interface BirthdayTemplate {
  id: string
  content: string
  user_id: string
  location_id: string
}

interface BusinessProfile {
  id: string
  sms_credits: number
}

// Format phone number to international format
function formatPhoneNumber(phone: string): string {
  let cleaned = phone.replace(/[\s\-\(\)]/g, '');
  if (cleaned.startsWith('+')) return cleaned;
  if (cleaned.startsWith('256')) return '+' + cleaned;
  if (cleaned.startsWith('0')) return '+256' + cleaned.substring(1);
  if (cleaned.length === 9 && cleaned.match(/^[7]\d{8}$/)) return '+256' + cleaned;
  return '+256' + cleaned;
}

// Send SMS via Eazireach
async function sendSMSViaEazireach(phoneNumber: string, message: string, businessName: string = "Gonza") {
  console.log('Sending SMS via Eazireach to:', phoneNumber);

  const apiKey = Deno.env.get('EAZIREACH_API_KEY');
  const accountId = Deno.env.get('EAZIREACH_ACCOUNT_ID');

  if (!apiKey || !accountId) {
    throw new Error('Eazireach API credentials not configured');
  }

  const response = await fetch('https://api.eazireach.com/api/v1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey,
      'X-Account-ID': accountId
    },
    body: JSON.stringify({
      recipients: [
        { phone: phoneNumber }
      ],
      message: message,
      channel: ["sms"],
      businessName: businessName
    })
  });

  const result = await response.json();
  return result;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('=== Birthday SMS Cron Job Started ===');
    console.log('Time:', new Date().toISOString());

    // Create Supabase client with service role key
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get today's date in MM-DD format for birthday matching
    const today = new Date();
    const todayMonth = String(today.getMonth() + 1).padStart(2, '0');
    const todayDay = String(today.getDate()).padStart(2, '0');

    console.log(`Looking for birthdays on: ${todayMonth}-${todayDay}`);

    // Find all customers with birthdays today
    const { data: allCustomers, error: customersError } = await supabaseClient
      .from('customers')
      .select('id, user_id, location_id, full_name, phone_number, email, birthday')
      .not('birthday', 'is', null)
      .not('phone_number', 'is', null);

    if (customersError) {
      throw new Error(`Error fetching customers: ${customersError.message}`);
    }

    console.log(`Total customers with birthdays: ${allCustomers?.length || 0}`);

    // Filter customers whose birthday is today
    const birthdayCustomers = (allCustomers || []).filter((customer: BirthdayCustomer) => {
      const birthday = new Date(customer.birthday);

      const birthMonth = String(birthday.getMonth() + 1).padStart(2, '0');
      const birthDay = String(birthday.getDate()).padStart(2, '0');

      console.log(`Checking: ${customer.full_name}`);
      console.log(` - Stored birthday:`, customer.birthday);
      console.log(` - Parsed: Month=${birthMonth}, Day=${birthDay}`);
      console.log(` - Today: Month=${todayMonth}, Day=${todayDay}`);

      return birthMonth === todayMonth && birthDay === todayDay;
    });

    console.log(`Customers with birthday today: ${birthdayCustomers.length}`);

    if (birthdayCustomers.length === 0) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'No birthdays today ' + { birthdayCustomers },
          sent: 0
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Group customers by location
    const customersByLocation = birthdayCustomers.reduce((acc: any, customer: BirthdayCustomer) => {
      if (!acc[customer.location_id]) {
        acc[customer.location_id] = [];
      }
      acc[customer.location_id].push(customer);
      return acc;
    }, {});

    console.log(`Unique locations: ${Object.keys(customersByLocation).length}`);

    const results = {
      totalCustomers: birthdayCustomers.length,
      sent: 0,
      failed: 0,
      skipped: 0,
      errors: [] as string[]
    };

    // Process each location
    for (const [locationId, customers] of Object.entries(customersByLocation)) {
      console.log(`\nProcessing location: ${locationId}`);
      console.log(`Customers: ${(customers as BirthdayCustomer[]).length}`);

      const locationCustomers = customers as BirthdayCustomer[];
      const firstCustomer = locationCustomers[0];

      // Get birthday template for this location
      const { data: templates, error: templateError } = await supabaseClient
        .from('message_templates')
        .select('id, content, user_id, location_id')
        .eq('user_id', firstCustomer.user_id)
        .eq('location_id', locationId)
        .ilike('category', 'birthday')
        .limit(1);

      if (templateError || !templates || templates.length === 0) {
        console.log(`No birthday template found for location ${locationId}`);
        results.skipped += locationCustomers.length;
        results.errors.push(`Location ${locationId}: No birthday template found`);
        continue;
      }

      const template = templates[0] as BirthdayTemplate;
      console.log(`Found birthday template: ${template.id}`);

      // Get business profile for this location to check credits
      const { data: profiles, error: profileError } = await supabaseClient
        .from('business_profiles')
        .select('id, sms_credits')
        .eq('business_location_id', locationId)
        .order('created_at', { ascending: true })
        .limit(1);

      if (profileError || !profiles || profiles.length === 0) {
        console.log(`No business profile found for location ${locationId}`);
        results.skipped += locationCustomers.length;
        results.errors.push(`Location ${locationId}: No business profile found`);
        continue;
      }

      let businessProfile = profiles[0] as BusinessProfile;
      console.log(`Business profile: ${businessProfile.id}, Credits: ${businessProfile.sms_credits}`);

      // Get business settings for the location
      const { data: settings, error: settingsError } = await supabaseClient
        .from('business_settings')
        .select('business_name')
        .eq('location_id', locationId)
        .maybeSingle();

      if (settingsError) {
        console.error('Settings fetch error:', settingsError);
      }

      const businessName = settings?.business_name || "Gonza";
      console.log('Using business name:', businessName);

      // Send to each customer
      for (const customer of locationCustomers) {
        try {
          console.log(`\nProcessing customer: ${customer.full_name}`);

          // Personalize message
          const personalizedMessage = template.content
            .replace(/\{customer_name\}/gi, customer.full_name || 'Customer')
            .replace(/\{first_name\}/gi, customer.full_name?.split(' ')[0] || 'Customer')
            .replace(/\{last_name\}/gi, customer.full_name?.split(' ').slice(1).join(' ') || '')
            .replace(/\{customer_phone\}/gi, customer.phone_number || '')
            .replace(/\{customer_email\}/gi, customer.email || '');

          // Sanitize message: Replace non-breaking spaces and other special whitespace with standard spaces
          const sanitizedMessage = personalizedMessage.replace(/[\u00A0\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000]/g, ' ');

          const creditsNeeded = Math.ceil(sanitizedMessage.length / 160);
          console.log(`Credits needed: ${creditsNeeded}, Available: ${businessProfile.sms_credits}`);

          // Check if enough credits
          if (businessProfile.sms_credits < creditsNeeded) {
            console.log('Insufficient credits');
            results.skipped++;
            results.errors.push(`${customer.full_name}: Insufficient credits`);

            // Create message record as failed
            await supabaseClient.from('messages').insert({
              user_id: customer.user_id,
              location_id: customer.location_id,
              profile_id: businessProfile.id,
              customer_id: customer.id,
              phone_number: formatPhoneNumber(customer.phone_number),
              content: personalizedMessage,
              template_id: template.id,
              sms_credits_used: creditsNeeded,
              status: 'failed',
              error_message: 'Insufficient SMS credits',
              metadata: { birthday_message: true, auto_sent: true }
            });

            continue;
          }

          // Format phone number
          const formattedPhone = formatPhoneNumber(customer.phone_number);

          // Create message record
          const { data: messageRecord, error: messageError } = await supabaseClient
            .from('messages')
            .insert({
              user_id: customer.user_id,
              location_id: customer.location_id,
              profile_id: businessProfile.id,
              customer_id: customer.id,
              phone_number: formattedPhone,
              content: personalizedMessage,
              template_id: template.id,
              sms_credits_used: creditsNeeded,
              status: 'pending',
              metadata: { birthday_message: true, auto_sent: true }
            })
            .select()
            .single();

          if (messageError || !messageRecord) {
            console.log('Error creating message record:', messageError);
            results.failed++;
            results.errors.push(`${customer.full_name}: Failed to create message record`);
            continue;
          }

          console.log(`Message record created: ${messageRecord.id}`);

          // Send SMS via Eazireach
          const smsResult = await sendSMSViaEazireach(formattedPhone, personalizedMessage, businessName);
          console.log('Eazireach response:', smsResult);

          const isSuccess = smsResult.success === true || smsResult.status === 'success' || smsResult.code === 200;

          if (isSuccess) {
            console.log('SMS sent successfully');

            // Update message status
            await supabaseClient
              .from('messages')
              .update({
                status: 'sent',
                sent_at: new Date().toISOString(),
                metadata: {
                  birthday_message: true,
                  auto_sent: true,
                  eazireach_response: smsResult
                }
              })
              .eq('id', messageRecord.id);

            // Deduct credits
            businessProfile.sms_credits -= creditsNeeded;
            await supabaseClient
              .from('business_profiles')
              .update({ sms_credits: businessProfile.sms_credits })
              .eq('id', businessProfile.id);

            console.log(`Credits deducted. New balance: ${businessProfile.sms_credits}`);

            results.sent++;
          } else {
            console.log('SMS failed:', smsResult);

            // Update message as failed
            await supabaseClient
              .from('messages')
              .update({
                status: 'failed',
                error_message: smsResult.error || smsResult.message || 'SMS sending failed',
                metadata: {
                  birthday_message: true,
                  auto_sent: true,
                  eazireach_response: smsResult
                }
              })
              .eq('id', messageRecord.id);

            results.failed++;
            results.errors.push(`${customer.full_name}: ${smsResult.error || 'SMS failed'}`);
          }

        } catch (error) {
          console.error(`Error processing customer ${customer.full_name}:`, error);
          results.failed++;
          results.errors.push(`${customer.full_name}: ${error.message}`);
        }
      }
    }

    console.log('\n=== Birthday SMS Cron Job Completed ===');
    console.log('Results:', results);

    return new Response(
      JSON.stringify({
        success: true,
        timestamp: new Date().toISOString(),
        results
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('=== Birthday SMS Cron Job Error ===');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        stack: error.stack
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
})