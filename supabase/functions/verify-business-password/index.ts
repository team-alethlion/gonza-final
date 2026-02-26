
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface VerifyPasswordRequest {
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

    const { businessId, password }: VerifyPasswordRequest = await req.json();

    if (!businessId || !password) {
      return new Response(
        JSON.stringify({ error: 'Business ID and password are required' }),
        { status: 400, headers: corsHeaders }
      );
    }

    console.log('Verifying password for business:', businessId);

    // Get the business and its password hash
    const { data: business, error: businessError } = await supabaseClient
      .from('business_locations')
      .select('id, user_id, switch_password_hash')
      .eq('id', businessId)
      .eq('user_id', user.id)
      .single();

    if (businessError || !business) {
      console.error('Business not found:', businessError);
      return new Response(
        JSON.stringify({ 
          error: 'Business not found or access denied',
          verified: false 
        }),
        { status: 404, headers: corsHeaders }
      );
    }

    console.log('Business found, has password hash:', !!business.switch_password_hash);

    if (!business.switch_password_hash) {
      // No password set - allow access
      console.log('No password set, allowing access');
      return new Response(
        JSON.stringify({ verified: true }),
        { 
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Verify the password using PBKDF2
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    
    try {
      // Decode the stored hash using proper base64 decoding
      const decodedString = atob(business.switch_password_hash);
      const combined = new Uint8Array(decodedString.length);
      for (let i = 0; i < decodedString.length; i++) {
        combined[i] = decodedString.charCodeAt(i);
      }
      
      // Extract salt (first 16 bytes) and hash (remaining bytes)
      const salt = combined.slice(0, 16);
      const storedHash = combined.slice(16);
      
      // Import the password as a key
      const key = await crypto.subtle.importKey(
        'raw',
        data,
        { name: 'PBKDF2' },
        false,
        ['deriveBits']
      );
      
      // Derive the hash using the same parameters
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
      
      // Compare the hashes
      const derivedHash = new Uint8Array(hashBuffer);
      const isValid = derivedHash.length === storedHash.length && 
        derivedHash.every((byte, index) => byte === storedHash[index]);
      
      console.log('Password verification result:', isValid);
      
      return new Response(
        JSON.stringify({ verified: isValid }),
        { 
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    } catch (error) {
      console.error('Error verifying password:', error);
      return new Response(
        JSON.stringify({ 
          verified: false,
          error: 'Password verification failed'
        }),
        { 
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

  } catch (error) {
    console.error('Error in verify-business-password function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: corsHeaders }
    );
  }
});
