# West Coast Wire Pro — Deployment Guide

## What's in this package

```
west-coast-wire-pro/
├── src/
│   ├── main.jsx          — Entry point
│   ├── App.jsx           — Router (landing vs quiz app)
│   ├── LandingPage.jsx   — Landing + pricing page
│   ├── WestCoastWirePro.jsx  — The quiz app (500 questions)
│   └── index.css         — Global reset
├── public/
│   └── favicon.svg
├── index.html
├── package.json
└── vite.config.js
```

---

## Step 1 — Install Node.js (if you haven't)

Download from: https://nodejs.org (click "LTS" version)
Run the installer. That's it.

---

## Step 2 — Set up the project locally

Open Terminal (Mac) or Command Prompt (Windows).

```bash
cd west-coast-wire-pro
npm install
npm run dev
```

Open http://localhost:5173 — you'll see the app running locally.

---

## Step 3 — Add your payment link

### Option A: Gumroad (Easiest — no coding)

1. Go to https://gumroad.com and create an account
2. Create a product called "West Coast Wire Pro Standard" — set price $19.99
3. Copy your product URL (looks like: https://yourname.gumroad.com/l/west-coast-wire-pro-standard)
4. Open `src/LandingPage.jsx` in any text editor
5. Find this block near the top:

```js
const PAYMENT_LINKS = {
  standard: 'https://your-store.gumroad.com/l/west-coast-wire-pro-standard',
  pro:      'https://your-store.gumroad.com/l/west-coast-wire-pro',
}
```

6. Replace the URLs with your actual Gumroad links

### Option B: Stripe Payment Links (More professional)

1. Go to https://dashboard.stripe.com
2. Products → Add Product → set price $19.99 one-time
3. Payment Links → Create Link
4. Copy the payment link URL
5. Paste into PAYMENT_LINKS in LandingPage.jsx (same as above)

---

## Step 4 — Deploy to Vercel (Free)

### Option A: Deploy via Vercel website (no command line)

1. Go to https://vercel.com — sign up free with GitHub
2. Push your project to GitHub (or use the Vercel CLI below)
3. Click "Add New Project" → Import your GitHub repo
4. Vercel auto-detects Vite — click Deploy
5. Your site is live at: https://west-coast-wire-pro.vercel.app (or custom domain)

### Option B: Deploy via command line

```bash
npm install -g vercel
vercel
```

Follow the prompts. Done in 2 minutes.

---

## Step 5 — Custom domain (Optional)

In your Vercel project → Settings → Domains → Add your domain.
Example: westcoastwirepro.com (~$12/year at Namecheap or Google Domains)

---

## Unlocking paid access for buyers

Right now the app gates paid content with a localStorage flag.
When someone buys, you need to give them access. Options:

### Simple (manual for now):
- After Gumroad purchase, email buyer a "unlock code"
- Add a simple unlock code field to the paywall screen

### Automated (when you're ready to scale):
- Use Gumroad's webhook + a simple serverless function to set a JWT
- Or use Firebase Auth + Firestore to manage access properly

The app is built so this can be added later without rebuilding.

---

## Replacing placeholder testimonials

Edit `src/LandingPage.jsx` — find the testimonials array and replace
with real reviews once you have them.

---

## Quick reference: files to edit

| What you want to change | File |
|------------------------|------|
| Payment links | `src/LandingPage.jsx` → PAYMENT_LINKS |
| Pricing | `src/LandingPage.jsx` → PlanCard sections |
| Questions | `src/WestCoastWirePro.jsx` → ALL_QUESTIONS array |
| Testimonials | `src/LandingPage.jsx` → testimonials array |
| Site title/meta | `index.html` |
| Colors/fonts | `src/WestCoastWirePro.jsx` → styles object |
