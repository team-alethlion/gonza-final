
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface HashPasswordRequest {
  businessId: string;
  password: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get the current user
    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');
    const { data: { user } } = await supabaseClient.auth.getUser(token);

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: corsHeaders }
      );
    }

    const { businessId, password }: HashPasswordRequest = await req.json();

    if (!businessId || !password) {
      return new Response(
        JSON.stringify({ error: 'Business ID and password are required' }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Verify user owns this business
    const { data: business, error: businessError } = await supabaseClient
      .from('business_locations')
      .select('id, user_id')
      .eq('id', businessId)
      .eq('user_id', user.id)
      .single();

    if (businessError || !business) {
      return new Response(
        JSON.stringify({ error: 'Business not found or access denied' }),
        { status: 404, headers: corsHeaders }
      );
    }

    // Hash the password using PBKDF2
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    
    // Generate a random salt
    const salt = crypto.getRandomValues(new Uint8Array(16));
    
    // Import the password as a key
    const key = await crypto.subtle.importKey(
      'raw',
      data,
      { name: 'PBKDF2' },
      false,
      ['deriveBits']
    );
    
    // Derive the hash using PBKDF2
    const hashBuffer = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000,
        hash: 'SHA-256'
      },
      key,
      256
    );
    
    // Combine salt and hash for storage
    const hashArray = new Uint8Array(hashBuffer);
    const combined = new Uint8Array(salt.length + hashArray.length);
    combined.set(salt);
    combined.set(hashArray, salt.length);
    
    // Convert to base64 using proper encoding
    const base64String = btoa(Array.from(combined, byte => String.fromCharCode(byte)).join(''));

    console.log('Setting password hash for business:', businessId);
    console.log('Hash length:', base64String.length);

    // Update the business with the hashed password
    const { data: updateData, error: updateError } = await supabaseClient
      .from('business_locations')
      .update({ switch_password_hash: base64String })
      .eq('id', businessId)
      .eq('user_id', user.id)
      .select();

    if (updateError) {
      console.error('Error updating business password:', updateError);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to set password',
          details: updateError.message,
          success: false 
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    if (!updateData || updateData.length === 0) {
      console.error('No business was updated - business not found or access denied');
      return new Response(
        JSON.stringify({ 
          error: 'Business not found or access denied',
          success: false 
        }),
        { status: 404, headers: corsHeaders }
      );
    }

    console.log('Password hash set successfully for business:', businessId);
    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error in hash-business-password function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: corsHeaders }
    );
  }
});
