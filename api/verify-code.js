import Stripe from 'stripe';
import crypto from 'crypto';

function generateAccessCode(sessionId, tier) {
  const secret = process.env.WIREREADY_ACCESS_SECRET || 'dev-secret-replace-me';
  const payload = `${sessionId}:${tier}`;
  const hash = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  const raw = hash.substring(0, 12).toUpperCase();
  return `${raw.slice(0,4)}-${raw.slice(4,8)}-${raw.slice(8,12)}`;
}

function generateManualCode(email, tier, secret) {
  const payload = `manual:${email.toLowerCase().trim()}:${tier}`;
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

  const { code, sessionId, email } = req.body;
  if (!code) return res.status(400).json({ valid: false, error: 'No code provided' });

  const accessSecret = process.env.WIREREADY_ACCESS_SECRET || 'dev-secret-replace-me';

  // ── Manual grant token (has email param) ──────────────────────────────────
  if (email) {
    for (const tier of ['standard', 'pro']) {
      const expected = generateManualCode(email, tier, accessSecret);
      if (code.toUpperCase() === expected) {
        return res.status(200).json({ valid: true, tier });
      }
    }
    return res.status(200).json({ valid: false, error: 'Invalid access link' });
  }

  // ── Stripe session AUTO_VERIFY ────────────────────────────────────────────
  if (sessionId) {
    if (code === 'AUTO_VERIFY') {
      try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if (session.payment_status === 'paid') {
          const tier = session.metadata?.tier || 'standard';
          return res.status(200).json({ valid: true, tier });
        } else {
          return res.status(200).json({ valid: false, error: 'Payment not confirmed' });
        }
      } catch (err) {
        return res.status(500).json({ valid: false, error: 'Session verification failed' });
      }
    }
    for (const tier of ['standard', 'pro']) {
      const expected = generateAccessCode(sessionId, tier);
      if (code.toUpperCase() === expected) {
        return res.status(200).json({ valid: true, tier });
      }
    }
    return res.status(200).json({ valid: false, error: 'Code does not match this session' });
  }

  // ── Stripe session lookup (fallback) ──────────────────────────────────────
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ valid: false, error: 'Payment system not configured' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const sessions = await stripe.checkout.sessions.list({ limit: 100 });
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
