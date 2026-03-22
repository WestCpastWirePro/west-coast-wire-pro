// ── Blog Posts Data ───────────────────────────────────────────────────────
// To add a new post: copy one object, update the fields, add to the TOP of
// the array (newest first). The slug becomes the URL: /blog/your-slug
// ─────────────────────────────────────────────────────────────────────────

export const blogPosts = [
  {
    slug: 'ca-journeyman-exam-day-guide',
    title: "What to Expect at the PSI Testing Center — CA Journeyman Exam Day",
    date: 'March 21, 2026',
    category: 'Exam Strategy',
    excerpt: "You've studied for weeks. Now it's the day before your California Journeyman exam and you have no idea what actually happens at the PSI testing center. Here's exactly what to expect — from the parking lot to the score screen.",
    readTime: '5 min read',
    content: `
You've studied for weeks. Now it's the day before your California Journeyman exam and you have no idea what actually happens at the PSI testing center. Here's exactly what to expect — from the parking lot to the score screen.

## What PSI Actually Is

PSI Exams is the third-party testing company that administers the California Journeyman (and Residential) electrician exam on behalf of the California Division of Labor Standards Enforcement (DLSE). You schedule your exam at PSI's website, choose a test center location, and show up at your appointment time.

## What to Bring

- **Two forms of valid ID** — one must be government-issued with a photo.
- **Your PSI appointment confirmation** — screenshot or printed.
- Nothing else. No phones, no scratch paper from home, no food or drinks in the testing room.

## The Codebook — PSI Provides It

The California Journeyman exam is open book, but **PSI provides the NEC 2020 codebook at the testing center. You do not bring your own.** No tabs, no highlights, no handwritten notes — it is a clean, unmarked copy. Anything you wrote in your personal codebook stays home.

This is confirmed by WECA (Western Electrical Contractors Association) and multiple official sources: the NEC code books are provided at the testing sites. You are allowed to bring a basic, non-programmable calculator. Everything else stays in the locker PSI provides.

## What Happens When You Arrive

Check in with the front desk, show your IDs, and store everything except your codebook in a provided locker. PSI will give you scratch paper and a pencil at your station. You'll be photographed or fingerprinted. Then you sit at a computer terminal and begin.

## The Test Itself

110 questions, 4 hours and 30 minutes. Most candidates finish in 2.5–3 hours.

Questions are multiple choice — four options, one correct answer. You can flag questions and come back to them. Use this feature — don't spend 10 minutes on one calculation when you have 109 others to get through.

Your codebook is there. Use it strategically. If you flip to it for every question, you will run out of time. The candidates who pass have studied enough to confirm answers quickly — not discover them.

## What the Score Screen Looks Like

When you submit, your score appears immediately. 70% is passing (77 out of 110 correct). The screen shows your percentage and pass/fail status — not a breakdown by topic. If you pass, your license application proceeds through the CSLB. If you fail, you must wait 30 days before you can retest.

Your access to West Coast Wire Pro doesn't expire. If you need a second attempt, every question, every drill, and every tool is still there.

## What Trips People Up on Exam Day

**Calculation questions when the book isn't memorized** — you need Table 310.16, Annex C, and Chapter 9 accessible in under 30 seconds. If you're spending 3 minutes finding the right table, you're already behind.

**Misreading the question** — "which of the following is NOT permitted" catches more people than any code section. Read every question twice.

**Running out of time on motors and services** — practice these calculations until they're mechanical.

## The Best Way to Prepare for These Conditions

Run full exam simulations before your test date. West Coast Wire Pro's Exam Simulator gives you 110 questions on a timed 4.5-hour clock — exactly the real exam format. The PSI exam questions are proprietary and owned by the DLSE. No one has them. The edge comes from knowing the NEC cold enough that you're confirming, not searching.

Do at least two full simulations in the week before your exam.

Start with Modules 1 & 2 free at westcoastwirepro.com — no account needed.
    `,
  },
  {
    slug: 'nec-articles-california-journeyman-exam',
    title: "The 12 NEC Articles That Show Up Most on the California Journeyman Exam",
    date: 'March 18, 2026',
    category: 'NEC Reference',
    excerpt: "After drilling hundreds of practice questions built from real CA exam patterns, a clear picture emerges: certain NEC articles get hit repeatedly while others are barely touched. Here's where to focus your time.",
    readTime: '6 min read',
    content: `
After drilling hundreds of practice questions built from real CA exam patterns, a clear picture emerges: certain NEC articles get hit repeatedly while others are barely touched. Here's where to focus your time.

## Why This List Matters

The NEC has 9 chapters and hundreds of articles. Trying to memorize all of them before your exam is a losing strategy. The California Journeyman exam draws heavily from a subset of articles that govern the most common residential and commercial electrical work. Know these cold and you'll recognize 70–80% of what you see on test day.

## The 12 Most-Tested Articles

**Article 100 — Definitions:** More questions start with "According to the NEC..." than any other article. Know: accessible, approved, ampacity, listed, service, feeder, branch circuit.

**Article 110 — Requirements for Electrical Installations:** Working clearances, voltage ratings, equipment examination. The 3-foot workspace clearance rule and Table 110.26 appear constantly.

**Article 210 — Branch Circuits:** GFCI locations, AFCI expansion in 2020 NEC, small appliance circuits, outdoor receptacle requirements.

**Article 230 — Services:** Service entrance conductors, number of disconnects (six-disconnect rule), service drop clearances.

**Article 240 — Overcurrent Protection:** Where to locate OCPDs, next-size-up rule (240.4(B)), tap rules. Calculation-heavy.

**Article 250 — Grounding & Bonding:** The biggest article in the NEC. GEC sizing, bonding jumpers, grounding electrode requirements, rod spacing. Budget more study time here than anywhere else.

**Article 300 — Wiring Methods (General):** Underground burial depths (Table 300.5), protection from physical damage, the nail plate rule.

**Article 310 — Conductors:** Table 310.16 is tested constantly — wire sizing, temperature ratings, correction factors.

**Article 334 — NM Cable (Romex):** Support intervals (every 4.5 ft, within 12" of box), permitted and prohibited locations.

**Article 358 — EMT:** Support intervals (every 10 ft, within 3 ft of box), number of bends, fill.

**Article 408 — Panelboards:** Directory requirements, overcurrent protection for panel buses.

**Article 430 — Motors:** 125% FLA rule for conductors, OCPD sizing from Table 430.52, disconnecting means location and requirements.

## How to Study These Articles

Don't just read — answer questions. Every article on this list has 5–10 frequently-tested facts. West Coast Wire Pro's practice questions are mapped to these exact articles, so you see the question formats the exam actually uses.

## The One Thing Most People Miss: Article Location Under Pressure

One of the hardest parts of the open-book exam is finding things fast. If you don't know that motors live in Chapter 4, that grounding is Article 250, or that working clearances are in 110.26, you'll burn your time budget looking for answers rather than confirming them.

The Code Sprint drill at West Coast Wire Pro was built specifically for this. It gives you a scenario and 22 seconds to identify the correct NEC article — training the spatial memory that makes the open-book exam work in your favor instead of against you.

The actual PSI exam questions are proprietary and owned by the DLSE. No prep site anywhere has them. What separates candidates is how deeply they know the NEC.

Start with Modules 1 & 2 free at westcoastwirepro.com — no account needed.
    `,
  },
  {
    slug: 'how-to-pass-ca-journeyman-exam',
    title: "How to Pass the California Journeyman Electrician Exam — A Straight-Talk Study Guide",
    date: 'March 15, 2026',
    category: 'Exam Strategy',
    excerpt: "Most people who fail the CA Journeyman exam don't fail because the material is too hard. They fail because they studied the wrong things, ran out of time on calculations, or froze on NEC articles they'd never actually opened. Here's what actually works.",
    readTime: '7 min read',
    content: `
Most people who fail the California Journeyman exam don't fail because the material is too hard. They fail because they studied the wrong things, ran out of time on calculations, or froze on NEC articles they'd never actually opened. Here's what actually works.

## Know What You're Actually Being Tested On

The CA General Electrician exam is 110 questions drawn from the NEC 2020. It is open book — PSI provides an unmarked NEC 2020 codebook at the testing center. You do not bring your own book. No personal tabs, highlights, or notes permitted.

This is both a gift and a trap. If you know the code, you can verify answers. If you don't know it, you'll spend 4.5 hours desperately flipping pages and run out of time. The open book doesn't help you if you don't know which article to turn to.

## The 5 Modules That Make or Break Most People

**Module 1 — Definitions & General Requirements (Articles 90–110):** More questions come from Article 100 definitions than most people expect. Know the language cold: accessible, ampacity, approved, feeder, branch circuit, service.

**Module 4 — Grounding & Bonding (Article 250):** The longest article in the NEC. It's complex and heavily tested. GEC sizing, bonding jumpers, grounding electrode requirements — budget extra study time here.

**Module 8 — Motors (Article 430):** The 125% rule, FLA sizing from Table 430.248/250, disconnect requirements — know these cold. Motor questions tend to involve calculations, and calculations take time.

**Module 5 — Wiring Methods:** Conduit fill (Chapter 9), support intervals, burial depths — all testable and calculable. These questions reward people who have actually drilled the numbers.

**Module 6 — Equipment:** Panels, switches, receptacles — straightforward if you've read the articles.

## Build a Mental Map of the Book

Speed matters. You don't have time to discover where Article 430 lives during the exam. You need to know that motors = Chapter 4, grounding = Article 250, branch circuits = Article 210, services = Article 230.

The Code Sprint drill on West Coast Wire Pro was built specifically for this — it trains you to locate any NEC article in seconds under time pressure, which is exactly what the open-book exam requires.

## Calculations — Don't Skip Them

- **Conduit fill (Chapter 9 + Annex C):** Practice until it's mechanical
- **Voltage drop:** Know the formula, know when to apply it
- **Motor branch circuit sizing:** 125% of FLC for conductors, then OCPD from Table 430.52
- **Service load calculations:** Standard method vs. optional method — know the difference

## A Study Timeline That Actually Works

**8 weeks before:** Start Module 1, run the Diagnostic to establish your baseline.
**6 weeks out:** Modules 2–4, focus on grounding and wiring methods.
**4 weeks out:** Modules 5–8, drill calculations daily.
**2 weeks out:** Full exam simulations only — 110 questions, timed.
**Final week:** Review missed questions deck. No new material.

## The Actual PSI Exam Questions Are Not Available Anywhere

No prep site, training provider, or instructor has access to the real PSI exam questions — they are proprietary and owned by the DLSE. Every prep resource works from the same starting point: the NEC and the PSI content outline. The edge goes to whoever knows the code best.

Start with Modules 1 & 2 free at westcoastwirepro.com — no account needed.
    `,
  },
  {
    slug: 'blackrock-electrician-shortage',
    title: "BlackRock Just Said America Is Running Out of Electricians — Here's What That Means for Your License",
    date: 'March 11, 2026',
    category: 'Industry News',
    excerpt: "The world's largest asset manager committed $100M to skilled trades training today — and electricians are at the center of it. Here's why your California Journeyman license has never been worth more.",
    readTime: '5 min read',
    content: `
BlackRock — the world's largest asset manager, managing $14 trillion — announced a $100 million initiative today specifically to train skilled trades workers. Electricians were named first.

CEO Larry Fink put it plainly: "We're going to run out of electricians that we need to build out AI data centers. We just don't have enough."

He said this to the Trump administration. He's been saying it at energy conferences for over a year. And now they're putting $100 million behind it.

This isn't just news. For anyone working toward their California Journeyman license, this is a green light.

## Why Electricians Are the Bottleneck for the AI Era

AI doesn't run on code alone. It runs on power — massive amounts of it. Every data center being built for Meta, Microsoft, Google, and OpenAI requires enormous electrical infrastructure. And that infrastructure requires licensed electricians.

According to the International Brotherhood of Electrical Workers (IBEW), electrical work accounts for **45% to 70% of total data center construction costs**. Microsoft's President Brad Smith called electrical talent shortages the *"single biggest challenge for data center expansion in the U.S."*

Google recently pledged $15 million to the Electrical Training Alliance just to grow the pipeline of electrical workers. These are trillion-dollar companies saying they can't build fast enough because there aren't enough licensed electricians.

Over the next decade, the U.S. will need more than **300,000 new electricians** — on top of the 200,000+ who are expected to retire. Skilled trades employment is projected to grow more than 5%, outpacing the national average of 3%.

## What This Means If You're in California

California is at the center of this buildout. Data centers, clean energy infrastructure, grid modernization — it's all happening here, and it all requires licensed Journeyman electricians.

Your California General Electrician (Journeyman) license isn't just a piece of paper. It's your legal authorization to do the work that the entire tech industry is desperate for. It's leverage. It's job security. It's negotiating power.

And right now, the gap between demand and supply is widening every day.

## The Window Is Now

BlackRock's announcement signals something important: this isn't a trend anymore. It's a national priority. The world's most powerful investors, the biggest tech companies, and the federal government are all pointing at the same problem — not enough licensed electricians.

If you've been sitting on your apprenticeship hours or putting off the exam, this is the moment. The people who get licensed now are going to be the ones positioned for the work that's coming.

At West Coast Wire Pro, we built our exam prep specifically for California — 462 original practice questions across all 11 modules of the General Electrician exam, every answer referenced directly to the NEC 2020. Modules 1 and 2 are always free. No account needed.
    `,
  },
]

export function getPost(slug) {
  return blogPosts.find(p => p.slug === slug) || null
}
