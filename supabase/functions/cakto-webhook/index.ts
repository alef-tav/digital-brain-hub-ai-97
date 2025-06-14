
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface CaktoWebhookPayload {
  event: string;
  data: {
    transaction_id: string;
    status: string;
    amount: number;
    customer: {
      email: string;
      name: string;
    };
    metadata?: {
      user_id?: string;
    };
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify webhook signature
    const signature = req.headers.get('x-cakto-signature');
    const webhookSecret = Deno.env.get('CAKTO_WEBHOOK_SECRET');
    
    if (!signature || !webhookSecret) {
      console.error('Missing signature or webhook secret');
      return new Response('Unauthorized', { 
        status: 401,
        headers: corsHeaders 
      });
    }

    const body = await req.text();
    
    // Create expected signature
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(webhookSecret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    const signatureBytes = await crypto.subtle.sign('HMAC', key, encoder.encode(body));
    const expectedSignature = Array.from(new Uint8Array(signatureBytes))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    if (signature !== expectedSignature) {
      console.error('Invalid webhook signature');
      return new Response('Invalid signature', { 
        status: 401,
        headers: corsHeaders 
      });
    }

    const payload: CaktoWebhookPayload = JSON.parse(body);
    console.log('Cakto webhook received:', payload);

    // Only process payment approved events
    if (payload.event !== 'payment.approved') {
      console.log('Ignoring non-approved payment event:', payload.event);
      return new Response('Event ignored', { 
        status: 200,
        headers: corsHeaders 
      });
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Find user by email
    const { data: authUser, error: authError } = await supabase.auth.admin.listUsers();
    
    if (authError) {
      console.error('Error fetching users:', authError);
      return new Response('Error processing payment', { 
        status: 500,
        headers: corsHeaders 
      });
    }

    const user = authUser.users.find(u => u.email === payload.data.customer.email);
    
    if (!user) {
      console.error('User not found for email:', payload.data.customer.email);
      return new Response('User not found', { 
        status: 404,
        headers: corsHeaders 
      });
    }

    // Create or update subscription
    const { data: existingSubscription } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (existingSubscription) {
      // Update existing subscription
      const { error: updateError } = await supabase
        .from('subscriptions')
        .update({
          status: 'active',
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (updateError) {
        console.error('Error updating subscription:', updateError);
        return new Response('Error updating subscription', { 
          status: 500,
          headers: corsHeaders 
        });
      }
    } else {
      // Create new subscription
      const { error: insertError } = await supabase
        .from('subscriptions')
        .insert({
          user_id: user.id,
          status: 'active',
          plan_id: 'lifetime',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });

      if (insertError) {
        console.error('Error creating subscription:', insertError);
        return new Response('Error creating subscription', { 
          status: 500,
          headers: corsHeaders 
        });
      }
    }

    console.log(`Subscription activated for user: ${user.email}`);

    return new Response('Subscription activated', { 
      status: 200,
      headers: corsHeaders 
    });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return new Response('Internal server error', { 
      status: 500,
      headers: corsHeaders 
    });
  }
});
