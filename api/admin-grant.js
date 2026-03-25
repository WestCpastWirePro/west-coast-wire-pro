import crypto from 'crypto';

// ── Admin Magic Link Generator ─────────────────────────────────────────────
// Generates a personal magic link for a customer.
// Protected by WIREREADY_ACCESS_SECRET env var.
// Usage: POST /api/admin-grant { adminSecret, email, tier }
// ──────────────────────────────────────────────────────────────────────────

function generateToken(email, tier, secret) {
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

  const { adminSecret, email, tier } = req.body;

  // Check against WIREREADY_ACCESS_SECRET (already set in Vercel)
  const expectedSecret = process.env.WIREREADY_ACCESS_SECRET;
  if (!expectedSecret || adminSecret !== expectedSecret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!email || !tier) {
    return res.status(400).json({ error: 'email and tier required' });
  }

  const token = generateToken(email, tier, expectedSecret);
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://westcoastwirepro.com';
  const magicLink = `https://westcoastwirepro.com/?grant=${tier}&token=${token}&email=${encodeURIComponent(email.toLowerCase().trim())}`;

  return res.status(200).json({ token, email, tier, magicLink });
}
