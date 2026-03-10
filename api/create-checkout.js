import Stripe from 'stripe';

// Price IDs — set these in your Vercel environment variables
// See SETUP_GUIDE.md Step 3 for instructions
const PRICES = {
  standard:    process.env.STRIPE_PRICE_STANDARD,    // $29.99 — full access
  pro:         process.env.STRIPE_PRICE_PRO,          // $59.99 — new Pro purchase
  pro_upgrade: process.env.STRIPE_PRICE_PRO_UPGRADE,  // $30.00 — Standard → Pro upgrade
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

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY not set');
    return res.status(500).json({ error: 'Payment system not configured' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { tier, upgrade } = req.body;

  // Resolve which price to use
  // upgrade:true means Standard user paying the $30 difference to reach Pro
  const priceKey = (tier === 'pro' && upgrade) ? 'pro_upgrade' : tier;

  if (!tier || !PRICES[priceKey] === undefined) {
    return res.status(400).json({ error: 'Invalid plan selected' });
  }

  const priceId = PRICES[priceKey];
  if (!priceId) {
    return res.status(500).json({
      error: `Price ID for "${priceKey}" not configured.`,
      hint: priceKey === 'pro_upgrade'
        ? 'Create a $30 one-time price in Stripe and set STRIPE_PRICE_PRO_UPGRADE in Vercel env vars.'
        : 'See SETUP_GUIDE.md.',
    });
  }

  const origin = req.headers.origin ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

  // success_url always passes tier=pro so SuccessPage grants Pro access
  const successTier = (tier === 'pro' || upgrade) ? 'pro' : tier;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],

      success_url: `${origin}/?success=true&tier=${successTier}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${origin}/?cancelled=true`,

      billing_address_collection: 'auto',

      metadata: {
        product: 'west-coast-wire-pro',
        tier: successTier,
        upgrade: upgrade ? 'true' : 'false',
      },

      custom_text: {
        submit: {
          message: upgrade
            ? 'Upgrading from Standard to Pro — one-time charge, no subscription.'
            : 'Instant access after payment. One-time charge — no subscription.',
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
