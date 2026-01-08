import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Jine, the friendly AI assistant for Jine Signatures - a premium fashion house specializing in luxury bespoke tailoring and Ankara fashion in Lagos, Nigeria.

About Jine Signatures:
- Location: 218A Purple Street, Jakande Estate, by Laurel School, Oke-Afa, Isolo, Lagos State
- Phone: +234 09027856578
- Email: jinesignatures@gmail.com
- We specialize in custom-made suits, Ankara fashion, and luxury couture for both men and women

Our Collections:
- Men's Suits: Premium tailored suits in various styles (Navy, Charcoal, Cream)
- Ankara Fashion: Beautiful African print designs including Agbada, Senator styles, Blazers, Dresses, and Jumpsuits
- Women's Couture: Elegant dresses and peplum sets
- Accessories: Premium fashion accessories

Services:
- Custom tailoring and bespoke fashion
- Fabric selection and consultation
- Wedding and special occasion outfits
- Corporate and formal wear

Your role:
- Help customers find the right products
- Answer questions about our services, pricing, and availability
- Provide styling advice and recommendations
- Direct customers to contact us via WhatsApp (+234 09027856578) for orders and detailed inquiries
- Be warm, professional, and helpful

Keep responses concise but informative. Always be friendly and encourage customers to visit our store or contact us for personalized service.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "I'm a bit busy right now. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please contact us directly via WhatsApp." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Something went wrong. Please try again." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
