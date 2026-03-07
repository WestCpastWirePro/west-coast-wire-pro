# West Coast Wire Pro — Complete Setup Guide
# From zero to taking real payments in about 45 minutes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OVERVIEW OF STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Step 1 — Install Node.js on your computer
  Step 2 — Create a Stripe account
  Step 3 — Create your products in Stripe
  Step 4 — Create a GitHub account and upload your code
  Step 5 — Create a Vercel account and deploy
  Step 6 — Add your secret keys to Vercel
  Step 7 — Set up the Stripe webhook
  Step 8 — Test the whole flow
  Step 9 — Go live (flip from test mode to live mode)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


──────────────────────────────────────────────────────────
STEP 1 — Install Node.js
──────────────────────────────────────────────────────────

1. Go to: https://nodejs.org
2. Click the big "LTS" button to download
3. Run the installer — click Next through everything
4. Open Terminal (Mac: press Cmd+Space, type "Terminal")
   or Command Prompt (Windows: press Win+R, type "cmd")
5. Type this and press Enter to confirm it worked:
      node --version
   You should see something like: v20.11.0


──────────────────────────────────────────────────────────
STEP 2 — Create a Stripe Account
──────────────────────────────────────────────────────────

1. Go to: https://stripe.com
2. Click "Start now" — sign up with your email
3. You'll land in the Stripe Dashboard
4. IMPORTANT: Notice the "Test mode" toggle in the top right.
   Make sure it says "Test mode" for now — you'll flip it live in Step 9.


──────────────────────────────────────────────────────────
STEP 3 — Create Your Products in Stripe
──────────────────────────────────────────────────────────

You need to create two products: Standard ($29.99) and Pro ($49.99).

3a. Create Standard product:
    → In Stripe Dashboard, click "Product catalog" in left sidebar
    → Click "+ Add product"
    → Name: "West Coast Wire Pro Standard"
    → Description: "All 12 modules — 500 California electrician exam questions"
    → Pricing: One time · $29.99 · USD
    → Click Save product
    → On the product page, you'll see the Price ID — it looks like: price_1ABC123defGHI456
    → COPY IT — you'll need it in Step 6

3b. Create Pro product:
    → Click "+ Add product" again
    → Name: "West Coast Wire Pro"
    → Description: "Full suite — 500 questions, saved progress, exam simulation, future updates"
    → Pricing: One time · $49.99 · USD
    → Click Save product
    → COPY the Price ID for this one too

3c. Get your Secret Key:
    → Click "Developers" in the top right of Stripe Dashboard
    → Click "API keys"
    → You'll see "Secret key" — it starts with sk_test_
    → Click "Reveal test key" and COPY IT


──────────────────────────────────────────────────────────
STEP 4 — Put Your Code on GitHub
──────────────────────────────────────────────────────────

GitHub stores your code so Vercel can deploy it.

4a. Create a GitHub account:
    → Go to: https://github.com
    → Sign up (free)

4b. Create a new repository:
    → Click the "+" icon → "New repository"
    → Name it: west-coast-wire-pro
    → Set to Private (so your code isn't public)
    → Click "Create repository"

4c. Upload your code:
    → In Terminal/Command Prompt, navigate to your project folder:
          cd path/to/west-coast-wire-pro
      (On Mac, you can drag the folder into Terminal to get the path)
    
    → Run these commands one by one:
          npm install
          git init
          git add .
          git commit -m "Initial commit"
          git branch -M main
          git remote add origin https://github.com/YOUR_USERNAME/west-coast-wire-pro.git
          git push -u origin main

    Replace YOUR_USERNAME with your actual GitHub username.
    GitHub will ask for your password — use a Personal Access Token
    (GitHub → Settings → Developer Settings → Personal Access Tokens → Generate new token)


──────────────────────────────────────────────────────────
STEP 5 — Deploy to Vercel
──────────────────────────────────────────────────────────

5a. Create a Vercel account:
    → Go to: https://vercel.com
    → Click "Sign Up" → choose "Continue with GitHub"
    → Authorize Vercel to access your GitHub

5b. Import your project:
    → Click "Add New..." → "Project"
    → You'll see your west-coast-wire-pro repository — click "Import"
    → Vercel auto-detects Vite — don't change any settings
    → Click "Deploy"

5c. Wait ~2 minutes. Vercel will give you a URL like:
    https://west-coast-wire-pro-abc123.vercel.app

    Your site is live! (But payments won't work yet — need Step 6)


──────────────────────────────────────────────────────────
STEP 6 — Add Your Secret Keys to Vercel
──────────────────────────────────────────────────────────

NEVER put secret keys in your code files. Vercel stores them securely.

6a. In your Vercel project → click "Settings" → "Environment Variables"

6b. Add each of these — click "Add" after each one:

    Name: STRIPE_SECRET_KEY
    Value: sk_test_... (your secret key from Step 3c)

    Name: STRIPE_PRICE_STANDARD
    Value: price_... (Standard product Price ID from Step 3a)

    Name: STRIPE_PRICE_PRO
    Value: price_... (Pro product Price ID from Step 3b)

    Name: WIREREADY_ACCESS_SECRET
    Value: (make up a long random string, like: xK9mP2qR8nL5vB3wY7cZ4tA6uJ1sD0eF)
           Go to https://generate-secret.vercel.app/32 for a random one

6c. After adding all variables:
    → Go to "Deployments" tab → click the three dots on latest deployment → "Redeploy"
    → This applies the new environment variables


──────────────────────────────────────────────────────────
STEP 7 — Set Up the Stripe Webhook
──────────────────────────────────────────────────────────

The webhook tells your app when a payment succeeds.

7a. In Stripe Dashboard → Developers → Webhooks
    → Click "+ Add endpoint"

7b. Endpoint URL:
    https://YOUR-VERCEL-URL.vercel.app/api/webhook
    (Replace YOUR-VERCEL-URL with your actual Vercel URL from Step 5c)

7c. Events to listen to:
    → Click "Select events"
    → Search for and select: checkout.session.completed
    → Click "Add events"

7d. Click "Add endpoint"

7e. On the webhook page, click "Reveal" next to "Signing secret"
    → It starts with whsec_
    → COPY IT

7f. Go back to Vercel → Settings → Environment Variables → Add:
    Name: STRIPE_WEBHOOK_SECRET
    Value: whsec_... (from 7e)

7g. Redeploy again (Deployments → Redeploy)


──────────────────────────────────────────────────────────
STEP 8 — Test the Whole Flow
──────────────────────────────────────────────────────────

Stripe provides fake credit card numbers for testing.

8a. Go to your live Vercel URL
8b. Click "Get Standard Access"
8c. On the Stripe checkout page, use these fake card details:
    Card number: 4242 4242 4242 4242
    Expiry: Any future date (e.g. 12/28)
    CVC: Any 3 digits (e.g. 123)
    Name/email: Anything

8d. Click "Pay"
8e. You should be redirected back to your app with the success page
8f. The app should now be unlocked (all modules accessible)

If something doesn't work:
→ Check Vercel → your project → "Functions" tab for error logs
→ Check Stripe → Developers → Logs for API errors
→ Check Stripe → Developers → Webhooks → your endpoint → Recent deliveries


──────────────────────────────────────────────────────────
STEP 9 — Go Live (Real Payments)
──────────────────────────────────────────────────────────

When you're ready to accept real money:

9a. Complete Stripe's business verification:
    → Stripe Dashboard → complete your business profile
    → Add bank account for payouts
    → Verify your identity (takes 1–2 business days)

9b. In Stripe Dashboard, toggle OFF "Test mode" (top right)

9c. Get your LIVE secret key:
    → Developers → API Keys → Reveal live key (starts with sk_live_)

9d. Create LIVE versions of your products:
    → Product catalog → recreate both products in live mode
    → Get the live Price IDs (price_...)

9e. Update Vercel environment variables with LIVE values:
    → Replace STRIPE_SECRET_KEY with sk_live_...
    → Replace STRIPE_PRICE_STANDARD with live price_...
    → Replace STRIPE_PRICE_PRO with live price_...

9f. Create a new LIVE webhook endpoint (same process as Step 7,
    but in live mode) and update STRIPE_WEBHOOK_SECRET

9g. Redeploy. You're now taking real payments. 🎉


──────────────────────────────────────────────────────────
OPTIONAL — Custom Domain
──────────────────────────────────────────────────────────

westcoastwirepro.com costs about $12/year.

1. Buy domain at Namecheap.com or Google Domains
2. In Vercel → your project → Settings → Domains
3. Add your domain → follow the DNS instructions
4. Takes 10–30 minutes to propagate


──────────────────────────────────────────────────────────
OPTIONAL — Send Access Code Emails
──────────────────────────────────────────────────────────

Right now buyers get unlocked automatically on the success page.
To also email them their access code (for use on other devices):

1. Create free account at https://resend.com
2. Get your API key
3. Add to Vercel environment variables: RESEND_API_KEY=re_...
4. Open api/webhook.js and uncomment the email section
5. Redeploy

Resend's free tier allows 3,000 emails/month — more than enough to start.


──────────────────────────────────────────────────────────
NEED HELP?
──────────────────────────────────────────────────────────

Common issues:

"Payment not configured" error
→ Check that STRIPE_SECRET_KEY is set in Vercel environment variables
→ Make sure you redeployed after adding variables

Webhook not firing
→ Verify the webhook URL is exactly: https://your-url.vercel.app/api/webhook
→ Check Stripe → Webhooks → your endpoint → Recent deliveries for errors

App not unlocking after payment
→ Check browser console for errors (F12 → Console)
→ Make sure WIREREADY_ACCESS_SECRET is the same value you used when deploying

Buyer can't access on a second device
→ Email integration not set up yet — direct them to use the access code
   from their Stripe receipt email (coming in optional email step above)
