import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const pesapalUrl = Deno.env.get('PESAPAL_BASE_URL')
        const consumerKey = Deno.env.get('PESAPAL_CONSUMER_KEY')
        const consumerSecret = Deno.env.get('PESAPAL_CONSUMER_SECRET')

        console.log('Checking IPN Configuration...')
        console.log('URL:', pesapalUrl)

        // Get Token
        const tokenResponse = await fetch(`${pesapalUrl}/api/Auth/RequestToken`, {
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

        const tokenData = await tokenResponse.json()
        const token = tokenData.token

        if (!token) {
            throw new Error('Failed to get token')
        }

        // Get IPN List
        const ipnResponse = await fetch(`${pesapalUrl}/api/URLSetup/GetIpnList`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            },
        })

        const ipns = await ipnResponse.json()

        return new Response(
            JSON.stringify({
                success: true,
                ipns,
                env: {
                    pesapalUrl,
                    hasKey: !!consumerKey,
                    hasSecret: !!consumerSecret
                }
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }
})
