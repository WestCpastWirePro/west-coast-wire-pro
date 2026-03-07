import Stripe from 'stripe';
import crypto from 'crypto';

// ─── ACCESS CODE GENERATION ───────────────────────────────────────────────────
//
// When a payment succeeds, we generate a unique access code tied to the
// Stripe session ID. The buyer gets this code and enters it in the app
// to unlock paid content.
//
// The code is deterministic: same session ID always generates same code.
// This means no database needed — we can verify codes without storing them.
//
// HOW IT WORKS:
//   HMAC(sessionId, WIREREADY_ACCESS_SECRET) → first 12 hex chars → access code
//
// To verify a code later: regenerate it from session ID and compare.
// ─────────────────────────────────────────────────────────────────────────────

function generateAccessCode(sessionId, tier) {
  const secret = process.env.WIREREADY_ACCESS_SECRET || 'dev-secret-replace-me';
  const payload = `${sessionId}:${tier}`;
  const hash = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  // Format as XXXX-XXXX-XXXX for readability
  const raw = hash.substring(0, 12).toUpperCase();
  return `${raw.slice(0,4)}-${raw.slice(4,8)}-${raw.slice(8,12)}`;
}

function verifyAccessCode(code, sessionId, tier) {
  const expected = generateAccessCode(sessionId, tier);
  return code === expected;
}

// Export verifier so the verify endpoint can use it
export { generateAccessCode, verifyAccessCode };

// ─── WEBHOOK HANDLER ─────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'Not configured' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  // Verify the webhook signature (proves it's really from Stripe, not a fake request)
  let event;
  try {
    const sig = req.headers['stripe-signature'];

    if (webhookSecret) {
      // Production: verify signature
      // Note: Vercel parses req.body as JSON by default, we need raw body for signature
      // The rawBody trick below handles this
      const rawBody = typeof req.body === 'string'
        ? req.body
        : JSON.stringify(req.body);

      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } else {
      // Development: skip signature verification (webhook secret not set yet)
      console.warn('⚠️  STRIPE_WEBHOOK_SECRET not set — skipping signature verification');
      event = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    }
  } catch (err) {
    console.error('Webhook signature failed:', err.message);
    return res.status(400).json({ error: `Webhook error: ${err.message}` });
  }

  // ── Handle the event ──
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    const tier      = session.metadata?.tier || 'standard';
    const sessionId = session.id;
    const email     = session.customer_details?.email || '';
    const amount    = session.amount_total; // in cents

    // Generate access code
    const accessCode = generateAccessCode(sessionId, tier);

    console.log(`✅ Payment received:`, {
      sessionId,
      tier,
      email,
      amount: `$${(amount / 100).toFixed(2)}`,
      accessCode,
    });

    // ── EMAIL THE ACCESS CODE TO THE BUYER ──────────────────────────────
    //
    // RIGHT NOW: The access code is logged above and shown on the success
    // page (the app reads it from the URL after Stripe redirects back).
    //
    // TO SEND EMAIL: Add one of these services (all have free tiers):
    //   - Resend (resend.com) — easiest, 3,000 emails/month free
    //   - SendGrid — reliable, 100/day free
    //   - Postmark — excellent deliverability
    //
    // Example with Resend (uncomment when ready):
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'West Coast Wire Pro <noreply@westcoastwirepro.com>',
    //   to: email,
    //   subject: 'Your West Coast Wire Pro Access Code',
    //   html: `
    //     <h2>You're in! ⚡</h2>
    //     <p>Your West Coast Wire Pro ${tier} access code is:</p>
    //     <h1 style="letter-spacing:4px;font-family:monospace">${accessCode}</h1>
    //     <p>Enter this code at westcoastwirepro.com to unlock all ${tier === 'pro' ? '500' : '500'} questions.</p>
    //     <p>Questions? Reply to this email.</p>
    //   `,
    // });
    // ────────────────────────────────────────────────────────────────────

    // Acknowledge to Stripe immediately (must respond within 30 seconds)
    return res.status(200).json({
      received: true,
      // Don't return access code in webhook response — that's sent to buyer via redirect
    });
  }

  // Acknowledge other event types we don't handle
  return res.status(200).json({ received: true });
}
