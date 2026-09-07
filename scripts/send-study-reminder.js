/**
 * One-time script: send a friendly study reminder to all paid customers.
 * Run with: node --env-file=.env.local scripts/send-study-reminder.js
 */

import Stripe from 'stripe';
import { Resend } from 'resend';
import crypto from 'crypto';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

const SECRET = process.env.WIREREADY_ACCESS_SECRET || 'dev-secret-replace-me';
const APP_URL = 'https://westcoastwirepro.com';

function generateCode(sessionId, tier) {
  const hash = crypto.createHmac('sha256', SECRET).update(`${sessionId}:${tier}`).digest('hex');
  const raw = hash.substring(0, 12).toUpperCase();
  return `${raw.slice(0,4)}-${raw.slice(4,8)}-${raw.slice(8,12)}`;
}

async function getAllPaidSessions() {
  const sessions = [];
  let starting_after;

  while (true) {
    const batch = await stripe.checkout.sessions.list({
      limit: 100,
      ...(starting_after ? { starting_after } : {}),
    });

    for (const s of batch.data) {
      if (s.payment_status === 'paid' && s.metadata?.product === 'west-coast-wire-pro') {
        sessions.push(s);
      }
    }

    if (!batch.has_more) break;
    starting_after = batch.data[batch.data.length - 1].id;
  }

  return sessions;
}

function buildEmail(magicLink) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Still studying?</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

    <div style="background:#1a1a1a;padding:36px 32px;text-align:center;border-bottom:4px solid #DAA520;">
      <div style="font-size:32px;margin-bottom:8px;">⚡</div>
      <div style="color:#DAA520;font-size:20px;font-weight:700;letter-spacing:-0.3px;">West Coast Wire Pro</div>
      <div style="color:#aaa;font-size:13px;margin-top:4px;">CA Journeyman Exam Prep</div>
    </div>

    <div style="padding:40px 32px;">
      <p style="font-size:17px;font-weight:600;color:#1a1a1a;margin:0 0 16px;">Hey — how's the studying coming along?</p>

      <p style="font-size:15px;color:#555;line-height:1.7;margin:0 0 14px;">
        Just checking in. The CA Journeyman exam is one of those things that rewards the people who put in consistent reps — even 20 minutes a day adds up fast.
      </p>

      <p style="font-size:15px;color:#555;line-height:1.7;margin:0 0 28px;">
        Your study materials are ready whenever you are. Click below to jump back in right where you left off.
      </p>

      <div style="text-align:center;margin:36px 0;">
        <a href="${magicLink}" style="display:inline-block;background:#DAA520;color:#1a1a1a;padding:16px 48px;text-decoration:none;border-radius:6px;font-weight:700;font-size:16px;">
          Jump Back In ⚡
        </a>
      </div>

      <p style="font-size:14px;color:#777;line-height:1.7;margin:0 0 14px;">
        If the button doesn't work, paste this into your browser:
      </p>
      <p style="font-size:12px;color:#999;word-break:break-all;margin:0 0 28px;">
        ${magicLink}
      </p>

      <div style="border-top:1px solid #eee;padding-top:24px;">
        <p style="font-size:14px;color:#777;line-height:1.7;margin:0;">
          You've already put in the work to get here. The exam is just the last step.<br>
          Good luck out there. ⚡
        </p>
      </div>
    </div>

    <div style="background:#fafafa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
      <p style="font-size:12px;color:#aaa;margin:0;">
        West Coast Wire Pro · CA Journeyman Electrician Exam Prep<br>
        <a href="https://westcoastwirepro.com" style="color:#DAA520;text-decoration:none;">westcoastwirepro.com</a>
      </p>
    </div>

  </div>
</body>
</html>`;
}

async function main() {
  console.log('Fetching paid sessions from Stripe...');
  const sessions = await getAllPaidSessions();
  console.log(`Found ${sessions.length} paid WCW Pro sessions`);

  // Deduplicate by email — if a customer bought twice, use their best tier
  const byEmail = new Map();
  for (const session of sessions) {
    const email = session.customer_details?.email?.toLowerCase().trim();
    if (!email) continue;

    const tier = session.metadata?.tier || 'standard';
    const existing = byEmail.get(email);

    if (!existing || (tier === 'pro' && existing.tier !== 'pro')) {
      byEmail.set(email, { session, tier, email });
    }
  }

  console.log(`Sending to ${byEmail.size} unique customers...\n`);

  let sent = 0;
  let failed = 0;

  for (const { session, tier, email } of byEmail.values()) {
    const code      = generateCode(session.id, tier);
    const magicLink = `${APP_URL}/?grant=${tier}&token=${code}&session_id=${session.id}`;

    try {
      await resend.emails.send({
        from: 'West Coast Wire Pro <noreply@westcoastwirepro.com>',
        to: email,
        subject: `How's your exam prep going? ⚡`,
        html: buildEmail(magicLink),
      });
      console.log(`✅ ${email}`);
      sent++;
    } catch (err) {
      console.error(`❌ ${email} — ${err.message}`);
      failed++;
    }

    await new Promise(r => setTimeout(r, 250));
  }

  console.log(`\nDone. Sent: ${sent}  Failed: ${failed}`);
}

main().catch(console.error);
