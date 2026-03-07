import Stripe from 'stripe';

// Price IDs — you'll fill these in after creating products in Stripe dashboard
// See SETUP_GUIDE.md Step 3 for instructions
const PRICES = {
  standard: process.env.STRIPE_PRICE_STANDARD, // e.g. price_1ABC123...
  pro:      process.env.STRIPE_PRICE_PRO,       // e.g. price_1DEF456...
};

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Validate environment
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY not set');
    return res.status(500).json({ error: 'Payment system not configured' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { tier } = req.body;

  if (!tier || !PRICES[tier]) {
    return res.status(400).json({ error: 'Invalid plan selected' });
  }

  const priceId = PRICES[tier];
  if (!priceId) {
    return res.status(500).json({ error: `Price ID for "${tier}" not configured. See SETUP_GUIDE.md.` });
  }

  const origin = req.headers.origin || process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],

      // Where to send the customer after payment
      success_url: `${origin}/?success=true&tier=${tier}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${origin}/?cancelled=true`,

      // Collect email so you can follow up with buyers
      customer_email: undefined, // Stripe will ask for it on checkout page
      billing_address_collection: 'auto',

      // Metadata — stored with the payment in your Stripe dashboard
      metadata: {
        product: 'west-coast-wire-pro',
        tier,
      },

      // Nice custom text on the Stripe checkout page
      custom_text: {
        submit: {
          message: 'Instant access after payment. One-time charge — no subscription.',
        },
      },
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ url: session.url });

  } catch (err) {
    console.error('Stripe error:', err.message);
    return res.status(500).json({ error: 'Could not create checkout session', detail: err.message });
  }
}
