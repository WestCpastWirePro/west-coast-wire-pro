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
    if (email && process.env.RESEND_API_KEY) {
      try {
        const tierLabel = tier === 'pro' ? 'Pro' : 'Standard';
        const tierFeatures = tier === 'pro'
          ? 'All 512 questions, exam simulation mode, missed question review, and saved progress across sessions.'
          : 'All 512 questions across all 12 modules, timed & untimed modes, and difficulty filtering.';

        const magicLink = `https://westcoastwirepro.com/?grant=${tier}&token=${accessCode}`;

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'West Coast Wire Pro <noreply@westcoastwirepro.com>',
            to: email,
            subject: `⚡ Your West Coast Wire Pro ${tierLabel} Access — One Click to Start`,
            html: `
              <div style="background:#0a1016;padding:40px 20px;font-family:'Segoe UI',Arial,sans-serif;max-width:520px;margin:0 auto;">
                <div style="text-align:center;margin-bottom:32px;">
                  <span style="font-size:40px;">⚡</span>
                  <h1 style="color:#c8a84b;font-family:'Arial Black',Arial,sans-serif;font-size:22px;text-transform:uppercase;letter-spacing:2px;margin:12px 0 4px;">West Coast Wire Pro</h1>
                  <div style="color:#7a8a9a;font-size:13px;">California Journeyman Exam Prep</div>
                </div>

                <div style="background:#111820;border:1px solid rgba(200,168,75,0.3);border-radius:12px;padding:32px;margin-bottom:24px;text-align:center;">
                  <div style="color:#27ae60;font-size:28px;font-weight:900;font-family:'Arial Black',Arial,sans-serif;text-transform:uppercase;margin-bottom:8px;">You're In!</div>
                  <div style="display:inline-block;background:rgba(200,168,75,0.12);border:1px solid rgba(200,168,75,0.3);color:#c8a84b;font-family:'Courier New',monospace;font-size:12px;letter-spacing:2px;padding:5px 14px;border-radius:3px;margin-bottom:20px;">${tierLabel.toUpperCase()} ACCESS UNLOCKED</div>
                  <p style="color:#7a8a9a;font-size:14px;line-height:1.7;margin-bottom:28px;">${tierFeatures}</p>

                  <a href="${magicLink}" style="display:block;background:linear-gradient(135deg,#c8a84b,#e8c878);color:#0a1016;font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:18px;text-transform:uppercase;text-decoration:none;padding:20px;border-radius:6px;letter-spacing:0.5px;margin-bottom:16px;">
                    ⚡ Start Studying Now — One Click
                  </a>
                  <div style="color:#4a5a6a;font-size:12px;margin-bottom:0;">Bookmark this email — click the button any time to restore access on any device.</div>
                </div>

                <div style="background:#1a0a0a;border:1px solid rgba(231,76,60,0.4);border-radius:8px;padding:16px 20px;margin-bottom:24px;">
                  <div style="color:#e74c3c;font-size:13px;font-weight:700;margin-bottom:6px;">⚠️ Save This Email — Don't Lose Access</div>
                  <div style="color:#8899aa;font-size:12px;line-height:1.7;">Your access is stored in your browser. If you ever <strong style="color:#aabbcc;">clear your browser data, switch devices, or use a different browser</strong>, just click the button above to instantly restore access — no password needed. Keep this email somewhere safe.</div>
                </div>

                <div style="background:#111820;border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:20px;margin-bottom:24px;">
                  <div style="color:#d8e0e8;font-size:13px;font-weight:700;margin-bottom:8px;">Button not working?</div>
                  <div style="color:#7a8a9a;font-size:12px;line-height:1.8;">Copy and paste this link into your browser:<br>
                    <span style="color:#c8a84b;word-break:break-all;">${magicLink}</span>
                  </div>
                </div>

                <div style="text-align:center;color:#4a5a6a;font-size:12px;line-height:1.8;">
                  Questions? <a href="https://westcoastwirepro.com/contact" style="color:#c8a84b;">Contact us via our support form</a><br>
                  West Coast Wire Pro · California Journeyman Exam Prep
                </div>
              </div>
            `,
          }),
        });
        console.log(`✅ Access code email sent to ${email}`);
      } catch (emailErr) {
        // Don't fail the webhook if email fails — payment was still processed
        console.error('Email send failed:', emailErr.message);
      }
    }
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
