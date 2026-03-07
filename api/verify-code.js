import Stripe from 'stripe';
import crypto from 'crypto';

// Regenerate the access code the same way webhook.js does
// Same inputs → same output (no database needed)
function generateAccessCode(sessionId, tier) {
  const secret = process.env.WIREREADY_ACCESS_SECRET || 'dev-secret-replace-me';
  const payload = `${sessionId}:${tier}`;
  const hash = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  const raw = hash.substring(0, 12).toUpperCase();
  return `${raw.slice(0,4)}-${raw.slice(4,8)}-${raw.slice(8,12)}`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { code, sessionId } = req.body;

  if (!code) return res.status(400).json({ valid: false, error: 'No code provided' });

  // If sessionId provided (from success redirect URL), verify directly
  if (sessionId) {
    for (const tier of ['standard', 'pro']) {
      const expected = generateAccessCode(sessionId, tier);
      if (code.toUpperCase() === expected) {
        return res.status(200).json({ valid: true, tier });
      }
    }
    return res.status(200).json({ valid: false, error: 'Code does not match this session' });
  }

  // If no sessionId, verify against Stripe — look up the session by checking
  // recent completed checkout sessions (fallback for manual code entry)
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ valid: false, error: 'Payment system not configured' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    // Search recent sessions (last 100) for a matching code
    // This is acceptable for low volume — upgrade to a DB lookup if you scale
    const sessions = await stripe.checkout.sessions.list({
      limit: 100,
      expand: ['data.line_items'],
    });

    for (const session of sessions.data) {
      if (session.payment_status !== 'paid') continue;
      const tier = session.metadata?.tier || 'standard';
      const expected = generateAccessCode(session.id, tier);
      if (code.toUpperCase() === expected) {
        return res.status(200).json({ valid: true, tier, sessionId: session.id });
      }
    }

    return res.status(200).json({ valid: false, error: 'Code not found' });

  } catch (err) {
    console.error('Verify error:', err.message);
    return res.status(500).json({ valid: false, error: 'Verification failed' });
  }
}
