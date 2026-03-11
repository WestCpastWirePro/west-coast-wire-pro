import crypto from 'crypto';

// ── Admin Code Generator ───────────────────────────────────────────────────
// Generates a manual access code for a customer who didn't receive theirs.
// Protected by ADMIN_SECRET env var — never exposed to the public.
// Usage: POST /api/admin-grant { adminSecret, email, tier }
// ──────────────────────────────────────────────────────────────────────────

function generateManualCode(email, tier, secret) {
  // Use email+tier as the payload for manual grants
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

  // Verify admin secret
  const expectedSecret = process.env.ADMIN_SECRET;
  if (!expectedSecret || adminSecret !== expectedSecret) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!email || !tier) {
    return res.status(400).json({ error: 'email and tier required' });
  }

  const accessSecret = process.env.WIREREADY_ACCESS_SECRET || 'dev-secret-replace-me';
  const code = generateManualCode(email, tier, accessSecret);

  return res.status(200).json({ code, email, tier });
}
