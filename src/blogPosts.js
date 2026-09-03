// ── Blog Posts Data ───────────────────────────────────────────────────────
// To add a new post: copy one object, update the fields, add to the TOP of
// the array (newest first). The slug becomes the URL: /blog/your-slug
// ─────────────────────────────────────────────────────────────────────────

export const blogPosts = [
  // ── DRAFTS: set draft: false to publish ─────────────────────────────────
  {
    draft: true,
    slug: 'how-exam-advice-changed-2021-2026-california-journeyman',
    title: "CA Journeyman Exam Advice in 2021 vs 2026: What Changed",
    date: 'October 2026',
    category: 'Exam Prep',
    excerpt: "We tracked the same exam advice topics across five years of YouTube comments. Some things got more urgent. Some faded. Here is what the data actually shows.",
    readTime: '4 min read',
    content: `
Study advice for the California journeyman exam is not static. What people talk about in 2021 is not quite what they talk about in 2026. We tracked it.

Our dataset covers 2,987 YouTube comments from 44 videos, pulled between February 2021 and September 2026. We coded every comment by topic, then broke the numbers down by year. Here is what moved.

![How CA journeyman exam advice topics shifted between 2021 and 2026. Each row shows a topic with its percentage in each year and the change over time.|How the top advice topics shifted between 2021 and 2026. Source: westcoastwirepro.com](/blog/chart_slope.png)

---

## What Got More Urgent

**Calculation practice went up.** More people are specifically calling out voltage drop, motor sizing, and box fill as things you need to drill before exam day. This tracks with what instructors and testing center staff have noted anecdotally: candidates who fail often cite the math sections as where they lost the most time.

The exam itself has not changed dramatically. What has changed is how well-informed test-takers are going in. The ones who prepare specifically for calculations are passing. The ones who skim over them are not, and they are saying so in the comments.

**NEC navigation is still the top topic.** That has not changed year over year. Every year, the most consistent advice is some version of: know your way around the code book. The open-book format rewards preparation, not reading speed.

---

## What Faded

**General "study hard" advice dropped.** Earlier comments had a lot of vague encouragement: study every day, read the whole NEC, put in the hours. Newer comments are more specific. People are not just saying to study. They are saying which sections, which calculation types, which tables.

That is good news for you. The crowd is getting smarter about what actually works. You do not have to figure it out from scratch.

---

## What Stayed Flat

Field experience stayed consistent as a topic at around 8% of comments every year. People keep saying it matters. That is because it does. But it is not something you can manufacture quickly, which is why the rest of the advice has gotten more specific over time: if you cannot replicate field experience, you compensate with deliberate practice.

---

## What This Means for You

The trend in the data is toward specificity. Vague advice is out. People who passed are now telling you exactly which calculation types showed up, which NEC sections tripped them up, and what they wish they had practiced more.

West Coast Wire Pro was built with that specificity in mind. 500 questions tied to NEC sections, four free calculators covering the exact math that shows up on the exam. Not general prep. California prep.
`,
  },
  {
    draft: true,
    slug: 'resources-people-recommend-california-journeyman-exam',
    title: "What Resources Do People Actually Recommend for the CA Journeyman Exam?",
    date: 'October 2026',
    category: 'Exam Prep',
    excerpt: "We tracked every specific resource mentioned across 2,987 comments. The numbers are lower than you'd expect. Here's what that tells you about the state of CA exam prep.",
    readTime: '4 min read',
    content: `
When someone asks for study advice on the CA journeyman exam, you expect a flood of recommendations. Books, courses, apps, websites. But when we tracked every specific resource mentioned across 2,987 YouTube comments, something interesting happened: the numbers were tiny.

![Resources and products mentioned by name across 2,987 comments about the CA journeyman exam. Community college prep classes came up most, at 0.9 percent.|Specific resources mentioned across 2,987 comments. Source: westcoastwirepro.com](/blog/chart_resources.png)

The most-mentioned resource appeared in less than 1% of comments. Not 10%, not 20%. Less than 1%.

---

## Breaking Down What People Mentioned

**Community college and trade school prep classes (0.9%)** topped the list. These are often affiliated with JATC programs or local unions. Quality varies a lot by location. Some people swear by them. Others say they covered material that did not show up on their exam.

**The NEC itself (0.5% for 2023 edition, 0.3% for 2020)** came up as a resource people had to specifically track down or buy for personal use before the test, since PSI provides an unmarked copy at the testing center. If you have not spent time with your own copy before exam day, you are navigating a book cold under pressure.

**Ugly's Electrical Reference (0.4%)** is a pocket reference that gets mentioned as a general trade tool more than a specific exam prep resource. Useful for field work. Not a study guide.

**Tom Henry books (0.2%)** showed up occasionally. These are workbooks used in some prep courses, particularly in Florida and other states. Less common in California-specific prep.

---

## Why the Numbers Are So Low

This is the real takeaway. The California journeyman exam does not have a dominant prep resource the way some other licensing exams do. There is no single book or course that the community has rallied around and collectively endorsed.

That absence is why so many people end up on YouTube at 11pm the week before their test, piecing together advice from comments sections.

It is also why passing rates sit around 40 to 50 percent on the first attempt. Not because the exam is impossible. Because most people go in underprepared, using general resources that were not built for this specific test.

---

## What a California-Specific Tool Actually Looks Like

The exam has a specific content outline. Specific calculation types appear with predictable frequency. Specific NEC articles are tested more than others. A prep tool built for this exam should reflect all of that.

West Coast Wire Pro was built specifically for the California journeyman exam. 500 practice questions tied to NEC sections, four free calculators covering voltage drop, motor sizing, transformer calculations, and box fill. Not a general electrical study tool. A California exam tool.

If you are going to spend time studying, spend it somewhere that knows which exam you are taking.
`,
  },
  {
    draft: true,
    slug: 'managing-exam-anxiety-california-journeyman-electrician',
    title: "You Studied. You're Still Nervous. Here's How to Handle Exam Anxiety on the CA Journeyman Test.",
    date: 'October 2026',
    category: 'Exam Prep',
    excerpt: "5.3% of comments in our dataset were specifically about anxiety, panic, and mental prep. People who felt ready still struggled on test day. Here is what actually helps.",
    readTime: '4 min read',
    content: `
Here is something that surprised us in the data: 5.3% of comments across 2,987 total were specifically about anxiety, staying calm, and the mental side of the exam. Not about what to study. About how to handle the pressure once you are sitting down at the testing center.

These were not comments from people who did not prepare. A lot of them came from people who passed. Preparation does not automatically fix anxiety. Knowing that ahead of time is worth something.

---

## Why This Exam Creates Pressure

The CA journeyman exam is timed and it moves fast. 110 questions in 4.5 hours works out to about 2 minutes and 27 seconds per question. Some questions are quick reads. Some require multi-step calculations. That time pressure builds.

Add in the fact that a fail means a 60-day wait before you can retest, and the stakes feel high in the room. People describe going blank on material they absolutely knew. Spending too long on one question and losing the rest of the exam to it. That is not a preparation failure. That is pressure doing what pressure does.

---

## The Pacing Strategy That Actually Helps

The advice that shows up consistently in the comments is not "believe in yourself." It is more tactical than that.

**Know you are allowed to skip questions.** Flag anything you are not sure about and come back. Do not spend five minutes on question 14 when you still have 96 questions ahead of you.

**Set a rough checkpoint.** By the halfway mark of your time, you should be at least halfway through the questions. If you are behind, pick up the pace on easier reads.

**Treat guessing as a last resort, not a first resort.** If you are stuck, eliminate the obviously wrong answers and make a reasoned pick. There is no penalty for wrong answers, so leaving something blank is always worse than an educated guess.

**Do not catastrophize mid-test.** One hard question is not a sign that you are failing. The exam has 110 questions. A rough stretch of three or four does not define your result.

---

## The Part That Actually Reduces Anxiety

Tactics help. But the real anxiety reducer is the one nobody wants to hear: being genuinely prepared.

Not prepared-ish. Not "I read through the NEC" prepared. Prepared in the sense that you have looked up answers under time pressure before. That you have worked through voltage drop problems and box fill problems until the process is familiar. That you know roughly where to go in the code book before you need to go there.

When the exam feels familiar, the anxiety drops. You have been here before. The room is new. The material is not.

West Coast Wire Pro's 500 practice questions are designed to create that familiarity. Not just knowing the answers, but knowing the process. Use timed mode before exam day. The pressure you feel during timed practice is intentional. It is cheaper than feeling it for the first time at PSI.
`,
  },
  {
    draft: true,
    slug: 'what-to-expect-psi-testing-center-california-journeyman-exam',
    title: "What to Expect at the PSI Testing Center for the CA Journeyman Exam",
    date: 'October 2026',
    category: 'Exam Prep',
    excerpt: "Test day has nothing to do with electrical knowledge. It's logistics. Knowing what to expect removes variables so you can focus on the exam.",
    readTime: '4 min read',
    content: `
Everything about test day that can be sorted out in advance should be sorted out in advance. Surprises at the testing center do not help your score. Here is exactly what to expect.

![Timeline of what happens on CA journeyman exam day at the PSI testing center, from arrival through results.|What happens at the PSI testing center, step by step. Source: westcoastwirepro.com](/blog/chart_testday.png)

---

## Before You Walk In

**Arrive 30 minutes early.** This is not a suggestion from PSI. It is a requirement. If you are late, you forfeit your exam and your fee. Build in buffer for traffic, parking, and finding the suite inside the building.

**Bring government-issued photo ID.** Your name on the ID must match your name on your exam registration exactly. A driver's license or passport works. An expired ID does not. No ID, no exam, no refund.

**Know the address.** PSI has multiple testing center locations throughout California. Verify you are going to the right one before the day of.

---

## When You Check In

The proctor will verify your ID, take your photo, and have you sign in. You will empty your pockets. No phones, no watches, no notes, no personal copy of the NEC. If you have earplugs, some centers allow them and some require you to use theirs. Bring your own and ask.

You get scratch paper and a pencil. You will use these for calculations. Write down your formulas before you start the exam questions.

---

## The Code Book They Give You

PSI provides an unmarked 2023 NEC at your workstation. You do not bring your own. It is not tabbed. It is not highlighted. It is a clean copy.

This is exactly why practicing with an unmarked copy matters. If your entire prep strategy involved tabs and color coding, you are navigating a different book on exam day.

---

## The Exam Itself

110 multiple choice questions. 4.5 hours. Computer-based. You can flag questions and return to them. Use that feature.

10 of the 110 questions are unscored pretests. PSI uses them to evaluate new questions for future exams. You will not know which ones they are, so you work all 110 as if they count.

You need 77 correct answers to pass. That is 70%.

---

## When You Finish

Submit your answers and your pass or fail result appears on screen. No waiting, no mail. You know immediately.

If you pass, you will receive documentation from the California Division of Labor Standards Enforcement to move forward with your license application.

If you fail, you wait 60 days before you can retest. Use that time. A fail with a specific score report tells you exactly where you lost points. That is information. Use it.

---

## The Only Variable Left Is the Exam Itself

Everything above is knowable before exam day. The logistics, the rules, the format. The only remaining variable is whether you know the material well enough to work through 110 questions in 4.5 hours with an unmarked code book.

That part is on you. West Coast Wire Pro's 500 practice questions are built to make that variable as small as possible before you walk in.
`,
  },
  {
    draft: true,
    slug: 'how-to-use-practice-tests-california-journeyman-exam',
    title: "How to Use Practice Tests for the CA Journeyman Exam (Most People Get the Timing Wrong)",
    date: 'October 2026',
    category: 'Exam Prep',
    excerpt: "Practice tests work. But starting them too early or using them the wrong way kills your confidence and wastes time. Here is the sequence that actually builds toward a passing score.",
    readTime: '5 min read',
    content: `
Practice tests are the right tool. But they only work if you use them at the right point in your prep, and in the right way.

The most common mistake: starting practice tests on day one of studying. You do not know enough yet to learn from getting things wrong. You just feel bad about it and start doubting whether you can pass. That is not useful.

![Diagram showing the wrong way and right way to sequence practice tests for the CA journeyman exam. The wrong way is to start with tests immediately. The right way is code study first, then targeted practice, then full timed simulations.|The three phases of effective practice test prep. Source: westcoastwirepro.com](/blog/chart_practice_timing.png)

---

## Phase 1: Learn the Code First (2 to 4 Weeks)

Before you do a single practice question, spend time in the NEC. Not reading it cover to cover. Using it. Work through problems that force you to look things up. Practice finding conductor ampacity in Table 310.15. Find the grounding electrode requirements in Article 250. Pull motor FLA from Table 430.250.

The goal is not to memorize. The goal is to build a mental map of where things live so that when the exam asks you something, you know where to go.

This phase is where most people skip ahead and regret it.

---

## Phase 2: First Practice Tests, Used for Diagnosis (1 to 2 Weeks)

Once you have a working familiarity with the code, start practice questions. But do not use them to measure yourself yet. Use them to find your gaps.

When you get something wrong, stop. Go to the NEC. Find where that answer lives. Read the section. Understand why the right answer is right, not just what it is.

This is the phase where West Coast Wire Pro's format is useful. Every question is tied to a specific NEC section. When you miss a question, the NEC reference tells you exactly where to go. You are not guessing about what you need to study next.

Track which categories you keep missing. Article 250 questions? Calculation questions? Wiring methods? That tells you where to spend your remaining time.

---

## Phase 3: Full Timed Simulations (Final Week)

The last week before your exam, run full timed practice sessions. Sit down with a timer, work through a full set of questions, and do not allow yourself to pause or look anything up outside of the NEC.

This phase has two purposes. First, it tells you whether your pace is good enough. If you are regularly finishing with time to spare, you are ready. If you are always running out of time, you need to work on your code book navigation speed before exam day.

Second, it removes the novelty of the pressure. The first time you feel time pressure on 110 questions, you do not want it to be inside a PSI testing room. Feel it during practice first.

---

## What Practice Tests Cannot Do

They cannot replace understanding. If you are just doing questions until you memorize the answer patterns, you will pass the practice tests and fail the real exam. The questions on your exam will not be the same ones. The underlying concepts will be.

Use practice tests to check your understanding, not to build it. The code study in Phase 1 builds it. The practice questions in Phase 2 and 3 verify it.

West Coast Wire Pro has 500 practice questions across 12 modules, all tied to NEC sections and written specifically for the California journeyman exam. Modules 1 and 2 are free with no account needed. Start there, see where you stand, and build your study plan around the gaps you find.
`,
  },
  {
    draft: true,
    slug: 'field-experience-california-journeyman-exam',
    title: "Does Field Experience Actually Help You Pass the CA Journeyman Exam?",
    date: 'October 2026',
    category: 'Exam Prep',
    excerpt: "8.1% of comments in our dataset specifically brought up field experience as a factor in passing. Here's what it actually gives you, and what to do if you don't have much of it.",
    readTime: '4 min read',
    content: `
In our dataset of 2,987 YouTube comments, 8.1% specifically mentioned field experience as a factor in passing or failing the CA journeyman exam. That puts it third on the list of most-discussed topics, behind NEC navigation and calculation practice.

It is real advice. And it is also the most frustrating kind, because you cannot manufacture years of field experience in the weeks before your exam.

![Comparison showing what 5+ years of field experience gives you vs what you can do with less experience. Field experience helps you picture scenarios. Less experience requires more deliberate code study.|What field experience gives you and how to compensate without it. Source: westcoastwirepro.com](/blog/chart_field_experience.png)

---

## What Field Experience Actually Gives You

People who work in the trade for years before sitting the exam tend to pass at higher rates, and it is not because they memorized more code. It is because they have context.

When an exam question describes a 200-amp residential service entrance, someone with field experience can picture it. They know what the equipment looks like, how it connects, what goes wrong, why certain code requirements exist. That context makes it easier to reason through an answer even when you are not 100% sure of the exact code citation.

When a question asks about motor branch circuit protection, someone who has wired motors knows the sequence intuitively. They are not learning the concept from scratch. They are confirming what they already understand.

Field experience is not a substitute for knowing the code. But it makes the code make sense faster.

---

## What to Do If You Are Earlier in Your Career

If you have two or three years in and you are eligible to sit the exam, you can still pass. You just need to compensate deliberately.

**Work through the NEC actively, not passively.** Do not read it like a book. Use it like a reference. Find the answer to specific questions. Look up why a requirement exists, not just what it says. The more you use the code to solve problems, the more it starts to feel like field experience built on paper.

**Prioritize the sections the exam leans on.** Wiring methods (Articles 300 to 392), grounding and bonding (Article 250), branch circuits and feeders (Articles 210 and 220), and motor circuits (Article 430) are the areas where field experience pays the biggest dividend. Spend extra time there.

**Do not skip the calculations.** People with more field experience often have better intuition for whether an answer is in the right ballpark, which helps them catch calculation errors. If you are light on field experience, you need to practice calculations until the process is second nature and you can spot your own mistakes.

---

## The Honest Answer

Yes, field experience helps. Electricians with more time in the trade pass at higher rates. That is real.

But the exam tests code knowledge and calculation ability. Both of those are learnable before exam day, regardless of how much time you have spent in the field.

West Coast Wire Pro's 500 NEC-tied practice questions are designed to build the kind of deliberate familiarity that supplements field experience. Every wrong answer sends you somewhere specific in the code to learn. Over time, that builds the context that field experience usually provides.

You cannot fake the years. But you can close the gap.
`,
  },
  {
    draft: true,
    slug: 'ca-journeyman-exam-calculations-voltage-drop-motor-box-fill',
    title: "The 5 Calculations That Show Up on the CA Journeyman Exam",
    date: 'October 2026',
    category: 'Exam Prep',
    excerpt: "10% of comments in our dataset specifically called out calculation practice as critical. These are the five types that show up on the exam, what trips people up on each, and how to prepare.",
    readTime: '5 min read',
    content: `
Calculation questions on the CA journeyman exam are not the majority of the test. But they are the ones that eat time if you are not ready for them. A multi-step problem that should take 90 seconds can swallow six minutes if you have to figure out the process mid-exam.

10% of comments across our entire 2,987-comment dataset specifically called out calculation practice as something test-takers should prioritize. That is a real number. These are the five calculation types that keep coming up.

![Chart showing the five calculations on the CA journeyman exam: voltage drop, motor sizing, transformer calculations, box fill, and conduit fill. Each row shows the formula and key note for that calculation type.|The five calculations you need to know cold. Source: westcoastwirepro.com](/blog/chart_calculations.png)

---

## 1. Voltage Drop

Single phase: VD = (2 x K x I x D) / CM

Three phase: VD = (1.732 x K x I x D) / CM

K is 12.9 for copper and 21.2 for aluminum. D is the one-way distance in feet. CM is the circular mils of the conductor from Chapter 9, Table 8.

The most common mistakes: forgetting to double the distance for single phase (the formula already accounts for it with the 2), using the wrong K value, or pulling from the wrong conductor table. The NEC does not mandate a specific voltage drop percentage as a code violation, but the commonly tested standard is 3% for branch circuits and 5% for the combined feeder and branch circuit.

West Coast Wire Pro's Voltage Drop calculator lets you verify your hand calculations. If you get a different answer, trace back through each variable until you find where you went wrong.

## 2. Motor Sizing

Motor problems test whether you know which table to use and in which order. Start with Table 430.248 for single phase or Table 430.250 for three phase to find the full-load amperes (FLA) for the given horsepower and voltage.

From there, the exam may ask you to size the branch circuit conductors (125% of FLA per 430.22), the overcurrent protection (varies by type and whether the motor is code letter rated), or the disconnecting means. Article 430 lays this out in sequence. Know the sequence.

## 3. Transformer Calculations

The two formulas you need: I = VA / V and I = KVA x 1000 / V.

The exam will give you a transformer's KVA rating and voltage on one side, and ask you to find the current on the other. Know how to solve for primary current when given secondary specs, and vice versa. Also know that primary overcurrent protection for transformers is generally sized at 125% of primary FLA, per Article 450.

## 4. Box Fill

Box fill is a point-based system. Table 314.16(B) tells you how many cubic inches each item takes up: conductors by size, clamps, support fittings, devices, and equipment grounding conductors.

The rules that trip people up: all equipment grounding conductors in the box count as a single conductor based on the largest EGC. A wiring device like a switch or outlet counts as two conductors based on the largest conductor connected to it. Count everything. Miss one category and your total is wrong.

West Coast Wire Pro's Box Fill calculator walks through each component category. Use it until the system is second nature.

## 5. Conduit Fill

Maximum fill percentages: one conductor is 53%, two conductors is 31%, three or more conductors is 40%. These percentages apply to the internal cross-sectional area of the conduit.

The actual area values for conductors are in Chapter 9, Table 5 (for insulated conductors). The conduit interior area values are in Chapter 9, Table 4, broken out by conduit type. The conduit type matters. EMT tables and RMC tables are different.

The most common error: using the wrong conduit type's table, or mixing conductors of different sizes without looking up each one individually.

---

## How to Prepare for These

Do not just read the formulas. Work through problems until the process is automatic. That means setting up the formula, identifying each variable, pulling the right table value, and checking your answer.

West Coast Wire Pro's four free calculators cover voltage drop, motor sizing, transformer calculations, and box fill. Use them to check your hand work. When your answer does not match, that is where the learning happens. By exam day, the process should feel familiar enough that you are not discovering it under time pressure.
`,
  },
  {
    draft: true,
    slug: 'nec-open-book-california-journeyman-exam',
    title: "The CA Journeyman Exam Is Open Book. Here's Why That's Not as Easy as It Sounds.",
    date: 'October 2026',
    category: 'Exam Prep',
    excerpt: "Open book sounds like a safety net. It isn't. The NEC is 1,000+ pages and you get 2 minutes 27 seconds per question. Here's what open book actually means for how you prepare.",
    readTime: '5 min read',
    content: `
When people hear the CA journeyman exam is open book, they relax a little. That is a mistake.

The NEC is over 1,000 pages. You have 4.5 hours and 110 questions. Do the math.

![Infographic showing the time math of the CA journeyman exam: 110 questions, 4.5 hours, 2 minutes 27 seconds per question, 15 seconds to find something in the NEC.|The open book time trap. Source: westcoastwirepro.com](/blog/chart_time_math.png)

2 minutes and 27 seconds per question on average. Some questions are quick reads. Some require multi-step calculations. That means some questions will eat 4 to 5 minutes, which means others need to go faster.

If your plan is to look up most of your answers in the NEC, you will not finish in time. This is not a theory. It is what people who failed report over and over in the comments.

---

## What "Open Book" Actually Means

The candidates who pass are not the ones who read the most. They are the ones who know where to look, fast.

There is a difference between being able to find an answer eventually and being able to find it in 15 to 20 seconds under pressure. The first is passive familiarity. The second is active navigation.

You build active navigation by using the code repeatedly over time. Not reading it. Using it. Working through problems that make you go find the answer. Every trip into the NEC builds a mental map: conductor ampacity lives in 310.15, grounding electrode requirements are in Part III of Article 250, motor FLA is in Tables 430.248 and 430.250, exceptions to fill requirements are at the end of the relevant table, not the beginning.

By exam day, you are not searching. You are navigating.

---

## The Book PSI Gives You

PSI provides an unmarked copy of the 2023 NEC at your workstation. You do not bring your own. It is a clean copy, no tabs, no highlights.

If your entire prep strategy involved a heavily tabbed personal copy, you are walking into a different exam than the one you prepared for. The tabs helped you. Now they are gone.

This is why understanding the structure of the NEC matters more than knowing where your tabs are. The structure does not change between your copy and PSI's copy. The tabs do.

---

## The Sections That Actually Show Up

The exam does not test all 1,000 pages equally. It draws heavily from:

**Wiring methods and materials (Articles 300 to 392).** This is the most commonly failed section. Conduit types, fill calculations, bend limits, support intervals, and what is permitted where. The rules are specific and easy to confuse between methods.

**Grounding and bonding (Article 250).** The longest article in the NEC. Grounding electrode conductors, bonding jumpers, equipment grounding, when conductors need to be insulated versus bare. Heavily tested.

**Branch circuits and feeders (Articles 210 and 220).** Sizing, protection, calculation methods for loads.

**Motor circuits (Article 430).** Branch circuit conductors, overcurrent protection, disconnecting means.

**Overcurrent protection (Article 240).** Where protection is required, where it can be omitted, sizing rules.

If you know these sections well enough to navigate them in under 20 seconds, you have covered the majority of what you will be asked.

---

## Building the Navigation Speed

The only way to build it is repetition with the code book open. Every time you work through a practice question and look up the answer, you are building the map.

West Coast Wire Pro's 500 practice questions are each tied to a specific NEC section. Every question answered is one more trip into the code with a purpose. By the time you sit down at PSI, the relevant sections will not feel like strangers.

Open book is an advantage. But only if you have done the work.
`,
  },
  // ── END DRAFTS ─────────────────────────────────────────────────────────────
  {
    slug: 'what-nobody-tells-you-california-journeyman-exam',
    title: "What Nobody on YouTube Tells You About the CA Journeyman Exam",
    date: 'September 3, 2026',
    category: 'Exam Prep',
    excerpt: "We analyzed 2,987 comments from people who took the CA journeyman exam. The advice people give is real. But there are gaps nobody talks about and those gaps are where most people fail.",
    readTime: '4 min read',
    content: `
We pulled 2,987 comments from 44 YouTube videos about the California journeyman electrician exam. Real people, real advice, five years of data.

Most of what they say is true. Tab your book. Practice calculations. Know the NEC. That advice holds up in the data.

But when you look at what is missing from those 2,987 comments, a different picture comes into focus.

---

## Nobody Recommends a Specific Resource With Confidence

We tracked every mention of a specific product or resource across the full dataset. The most-mentioned resource appeared in less than 1% of comments. Tom Henry books came up in 0.2% of comments. Ugly's Electrical Reference: 0.4%. Community college prep classes: 0.9%.

Those are not endorsements. Those are scattered mentions across thousands of comments, with no clear consensus behind any of them.

What that tells you: people who passed the CA journeyman exam largely figured it out on their own, piecing together whatever they could find. There is no standard resource the community has rallied around for this exam the way other licensing exams have a go-to prep tool.

That gap is real. And it is part of why the pass rate on this exam sits around 40 to 50 percent on the first attempt.

## The Advice Splits Into Two Camps That Never Connect

Read the comment sections long enough and a pattern shows up. About half the advice is about studying the code book. The other half is about doing practice problems. Almost nobody talks about doing both in a way that connects them.

![Venn diagram showing the two camps of CA journeyman exam prep - studying the NEC vs doing practice problems - with WCW Pro in the overlap|The overlap is where passing happens. Most study advice lives in one circle or the other. Source: westcoastwirepro.com](/blog/chart_venn.png)

The most effective way to prepare for an open-book exam is to practice problems that force you to use the book. When you get a question wrong, you go find the answer in the NEC. You learn where it lives. You build the mental map that makes you fast on exam day.

That is not what scattered YouTube advice produces. It produces people who read the NEC and people who do practice questions, operating in parallel, neither one reinforcing the other.

## California-Specific Prep Is Almost Invisible

The NEC applies nationwide. The California journeyman exam does not test the NEC the same way every other state does. It has a specific code year, a specific content outline, and calculation types that appear with predictable frequency on this exam specifically.

The resources that get recommended in the comments are general electrical references. Books written for any electrician anywhere. Prep materials not built around the California exam.

If you study from generic materials, you will be prepared for a generic exam. The California journeyman exam is not that.

---

## What This Means for How You Prepare

The crowd knows the right categories of advice: navigate the NEC, practice calculations, do timed practice. What the crowd has not solved is where to go to do all of that in one place, built specifically for this exam.

That is what West Coast Wire Pro is. 500 practice questions tied directly to NEC sections, so every wrong answer points you somewhere in the code to go learn. Four free calculators covering the exact calculation types that show up on the California exam: Voltage Drop, Motor Sizing, Transformer, and Box Fill.

You do not need to spend weeks in comment sections. The pattern is already clear. The only question is whether you have the right tool to act on it.
`,
  },
  {
    slug: 'what-people-say-about-passing-california-journeyman-exam',
    title: "We Analyzed 2,987 Comments on the California Journeyman Exam. Here's What Actually Helps.",
    date: 'September 2, 2026',
    category: 'Exam Prep',
    excerpt: "We pulled 2,987 YouTube comments from people who sat for the CA journeyman exam and coded every piece of advice into categories. Here are the real numbers on what actually comes up and what the crowd-sourced advice misses.",
    readTime: '7 min read',
    content: `
When I was studying for the California journeyman electrician exam, I did what most people do: went to YouTube, Reddit, and Facebook groups and started reading. Weeks later I had dozens of tabs open and a list of conflicting advice that got longer every day.

Nobody agreed on anything. And nobody had numbers.

So we built the numbers.

---

## The Methodology

We pulled 2,987 comments from 44 YouTube videos about passing the California journeyman electrician exam, published between February 2021 and September 2026. We filtered for comments that contained actual advice rather than congratulations or off-topic replies. 1,255 comments (42.0% of the dataset) contained at least one identifiable piece of advice. We coded those into 16 distinct categories. Every percentage uses 2,987 as the denominator. No cherry-picking.

![What people actually say about passing the CA journeyman exam. Bar chart of 16 advice categories ranked by how often they appeared across 2,987 YouTube comments from 2021 to 2026.|Advice categories by % of all 2,987 comments. Source: westcoastwirepro.com](/blog/chart_advice_categories.png)

The top finding: NEC navigation and tabbing together account for 11.5% of all comments, making it the most discussed topic. Calculation practice is second at 10.0%. Field experience is third at 8.1%.

This data is the foundation for a full series of posts. Each one goes deep on a single topic from the dataset.

---

## The Full Series

**[What Nobody on YouTube Tells You About the CA Journeyman Exam](blog-post:what-nobody-tells-you-california-journeyman-exam)**: The two gaps in crowd-sourced advice that nobody talks about.

**The CA Journeyman Exam Is Open Book. Here's Why That's Not as Easy as It Sounds.**: Coming soon.

**The 5 Calculations That Show Up on the CA Journeyman Exam**: Coming soon.

**Does Field Experience Actually Help You Pass?**: Coming soon.

**How to Use Practice Tests (Most People Get the Timing Wrong)**: Coming soon.

**What to Expect at the PSI Testing Center**: Coming soon.

**You Studied. You're Still Nervous. Here's How to Handle Exam Anxiety.**: Coming soon.

**What Resources Do People Actually Recommend?**: Coming soon.

**CA Journeyman Exam Advice in 2021 vs 2026: What Changed**: Coming soon.

---

[West Coast Wire Pro](https://westcoastwirepro.com) was built specifically for this exam. 500 NEC-tied practice questions and four free calculators covering voltage drop, motor sizing, transformer calculations, and box fill. Start with Modules 1 and 2 free.
`,
  },
  {
    slug: 'how-hard-is-california-journeyman-electrician-exam',
    title: "How Hard Is the California Journeyman Electrician Exam?",
    date: 'September 2, 2026',
    category: 'Exam Prep',
    excerpt: "Fewer than half of first-time test-takers pass. Here's why the CA journeyman exam is harder than most people expect and what that actually means for how you prepare.",
    readTime: '5 min read',
    content: `
The honest answer: harder than most people expect, for reasons that have nothing to do with electrical work itself.

Fewer than half of first-time test-takers pass the California General Electrician (Journeyman) exam on their first attempt. The commonly cited figure is around 40-50%. That's not a rumor: it's consistent across trade school data, industry reports, and IBEW training center numbers.

If you've got your 8,000 hours and you know your way around a panel, that number might surprise you. It surprised a lot of people sitting in the PSI testing center.

## What the Exam Actually Is

The California Journeyman Electrician exam is administered by PSI on behalf of the California Division of Labor Standards Enforcement. It's 110 questions, 4.5 hours, multiple choice, computer-based. You need 70% to pass: 77 correct answers out of 110.

It's open book. PSI provides an unmarked 2023 NEC codebook at the testing center. You don't bring your own, and you can't bring personal notes or tabs.

That open-book format is the first thing that misleads people about the difficulty.

## Why "Open Book" Doesn't Mean What People Think

The NEC is over 1,000 pages. If you plan to look up most of your answers, you will run out of time. 4.5 hours sounds like a lot until you're 60 questions in and the clock says 90 minutes left.

The candidates who pass use the codebook to *confirm* answers they already know. They flip to a table in 15 seconds, verify a number, and move on. The candidates who fail are still reading Article 250 on question 40.

Open book is an advantage only if you've done the work beforehand. If you haven't, it's a liability.

## The Format That Catches People Off Guard

**110 questions, 4.5 hours.** That's 2.5 minutes per question on average and some of those minutes need to go to multi-step calculations. Voltage drop, motor sizing, box fill, conduit fill. Each one takes setup time.

If you've never practiced under a clock, your first time doing it in a PSI testing room is a bad time to find out what that feels like.

**10 questions are unscored pretests.** They're mixed in with the real questions and you won't know which ones. So you work all 110 as if they count.

**Results are immediate.** You submit, the screen shows your score and pass/fail. If you fail, you wait 60 days to retest.

## What the Content Actually Covers

The exam draws from the PSI content outline, which maps to the NEC by subject area. The heavily weighted areas:

**Wiring Methods and Materials (Articles 300-392)**: the most commonly failed section. Covers conduit types, fill calculations, bend limits, support intervals, and permitted and prohibited locations for each wiring method. The rules are specific and easy to confuse between methods.

**Grounding and Bonding (Article 250)**: the longest article in the NEC. GEC sizing, bonding jumpers, grounding electrode requirements, when conductors need to be insulated vs. bare. Heavily tested and genuinely complex.

**Calculations**: voltage drop, conductor sizing with derating, motor circuits, load calculations. Not conceptually difficult, but multi-step. One wrong table lookup early throws off everything after it.

**California-specific rules**: Title 8 Cal/OSHA and Title 24 CEC content. Most general electrician study materials don't cover this, which is why people who study from non-CA-specific resources miss questions they shouldn't.

## So How Hard Is It?

It depends entirely on how you prepare.

The material itself isn't beyond someone who's put in their apprenticeship hours. You've seen most of it in the field. The difficulty is the format: retrieval under time pressure, from a 1,000-page book, on topics you may not have used hands-on in years.

People who fail aren't generally failing because they don't know electrical work. They're failing because:

- They studied passively: re-reading instead of answering questions
- They never practiced under a clock
- They had weak spots in specific modules and didn't drill them
- They couldn't navigate the codebook fast enough under pressure

Every one of those is fixable before your exam date.

## What Preparing the Right Way Looks Like

**Practice answering questions, not reading.** Active recall builds the memory that works under test pressure. Re-reading the NEC feels productive but doesn't build the retrieval pathways you need.

**Time yourself from day one.** If you practice at your own pace and then sit a timed exam, the clock will feel different. It always does. Train at exam pace so it isn't a surprise.

**Know your weak modules and drill them specifically.** Grounding and bonding, wiring methods, and calculations are where most points are lost. Strength in easy areas doesn't compensate for weakness in heavily tested ones.

**Learn to navigate the codebook before exam day.** You should be able to get from any scenario to the right NEC article in under 30 seconds. That's a trainable skill: but only if you practice it deliberately.

The exam is hard. It doesn't have to beat you. [West Coast Wire Pro](https://westcoastwirepro.com) was built specifically for the California Journeyman exam: 500 practice questions tied to the 2023 NEC, organized by the same content areas PSI tests, with full explanations for every answer. Modules 1 and 2 are free, no account needed.
    `.trim(),
  },
  {
    slug: 'nec-calculators-free',
    title: "We Just Made Every Calculator on This Site Free. Here's Why.",
    date: 'September 2, 2026',
    category: 'Exam Prep',
    excerpt: "Voltage drop, motor sizing, transformer, and box fill calculators are now free: no account, no purchase, no catch. Here's what changed and why.",
    readTime: '4 min read',
    content: `
Voltage drop. Motor sizing. Transformer calculations. Box fill. These four calculations show up on almost every California journeyman exam, and they're exactly the kind of thing you either know cold or you don't. There's no faking your way through a box fill problem under a timer.

We built calculators for all four a while back as part of the paid exam prep package. Starting today, they're free. No account, no purchase, no catch. Here's what changed and why.

## The Free Calculators

**Voltage Drop Calculator**
Handles single phase and three phase circuits. Enter your values and get the full step by step solution, not just a final number, so you can see exactly how the math works instead of just trusting a black box.

**Motor Sizing Calculator**
Covers FLA, branch conductor sizing, and OCPD sizing in one place. This is one of the calculations people freeze on during the actual exam because it's a multi step process, not a single formula.

**Transformer Calculator**
Works out primary and secondary FLA along with OCPD sizing. Same idea as motor sizing: several steps chained together, and missing one step early throws off everything after it.

**Box Fill Calculator**
Runs the NEC 314.16 volume calculations. Deceptively simple looking, easy to get wrong if you're not careful about what actually counts toward fill.

Every calculator shows the full solution path and references the relevant NEC article, because memorizing an answer without understanding where it comes from doesn't help you on exam day when the numbers are different.

## Why We're Giving This Away

Simple version: because charging for a calculator was never really the point. The point is helping people pass the California journeyman exam, and a tool that sits behind a paywall doesn't help anyone who doesn't already know we exist.

If you use these calculators, get comfortable with them, and decide you want the full 500 question practice exam with every answer tied to its NEC 2023 code section, that's available too. But you don't have to buy anything to use the calculators. That part is just free now, permanently.

## How to Use Them

Head to the calculators page, pick the one you need, plug in your values, and you'll get the same step by step format you'll need to show on the actual exam. No sign up screen in your way.

If you're studying for the California Journeyman Electrician exam and voltage drop, motor sizing, transformer, or box fill calculations have been giving you trouble, this is built for exactly that problem.
    `.trim(),
  },
  {
    slug: 'sce-undergrounding-altadena-malibu-electrician-work',
    title: "SCE Is Burying 153 Miles of Power Lines in LA. That's Years of Electrical Work.",
    date: 'July 23, 2026',
    category: 'Industry News',
    excerpt: "After the January wildfires, Southern California Edison released its plan to underground power lines across Altadena and Malibu. Here's what that actually means in terms of work, timeline, and what kind of electricians get hired for it.",
    readTime: '4 min read',
    content: `
Southern California Edison released its distribution infrastructure rebuilding plan after the January 2026 wildfires, and the numbers are worth paying attention to if you're in the trade.

153 circuit miles of overhead distribution lines are getting put underground. 130 of those miles are in high fire risk areas inside the burn scars of Altadena and Malibu. The remaining 23 miles cover parts of Altadena outside the high fire risk zone but still affected by the fires.

The reason is pretty straightforward: overhead lines in dry, steep terrain ignite fires. Undergrounding removes that risk. California's been pushing utilities toward this for years, and the January fires accelerated the timeline considerably.

## What undergrounding actually involves

This isn't a quick job. Undergrounding distribution lines means trenching, conduit installation, pulling new cable, installing pad-mounted transformers and switchgear, terminating at every service point, and commissioning the whole system before the overhead lines come down. In dense residential neighborhoods like Altadena, that's slow, methodical, permit-heavy work street by street.

The crews doing this aren't just digging trenches. You need licensed electricians for the termination work, transformer connections, metering, and switchgear. The trenching might go to general labor but the electrical side requires journeyman-level credentials.

## How long does a project like this take?

SCE hasn't published a specific completion timeline but projects of this scope in similar terrain run 3-5 years minimum. Altadena alone has roughly 11,000 structures in the affected area. Working street by street through that kind of density, with underground work in areas that also need to be rebuilt from the ground up, is not fast.

This is sustained work. Not a 6-month spike that disappears.

## This is one utility's response to one fire season

SCE covers Southern California. PG&E has been doing its own undergrounding push in Northern California fire risk areas for the past several years. The state has mandated billions in grid hardening spending across multiple utilities.

What happened in January 2026 didn't create a new policy direction, accelerated one that was already in motion. The electrical infrastructure work tied to wildfire mitigation in California is a long-term pipeline, not a single project.

## What this means if you're getting licensed

The type of work SCE is funding is exactly the type of work a journeyman electrician does. If you're working toward your California General Electrician (Journeyman) license, the job market you're walking into has this pipeline running in the background on top of everything else already driving demand.

The exam is a real obstacle: 100 questions from the 2023 NEC, roughly 40% pass rate on the first attempt. [West Coast Wire Pro](https://westcoastwirepro.com) was built specifically for the California Journeyman exam, with 500 practice questions tied to the 2023 code and explanations that tell you why each answer is right, not just what to pick.

The work is there. The question is whether you're licensed for it.
    `.trim(),
  },
  {
    slug: 'la-2028-olympics-electrician-jobs-california',
    title: "The 2028 LA Olympics Construction Window Is Closing. Are You Licensed?",
    date: 'July 23, 2026',
    category: 'Industry News',
    excerpt: "The bulk of Olympic construction in Los Angeles has to be done before 2028, not during it. If you get your journeyman license in the next year, you're walking into the build. Wait two years and you're cleaning up after the party.",
    readTime: '4 min read',
    content: `
Los Angeles is hosting the 2028 Summer Olympics. Two years out, the construction picture looks like this: venue upgrades, athlete villages, broadcast infrastructure, transportation improvements, and temporary power systems for events across the city: all of it needs to be substantially complete before athletes and cameras arrive.

That's the thing about Olympic construction people outside the industry don't always think about. The work doesn't happen during the Games. It has to be done before them. The 2028 opening ceremony is July 14, 2028. That's not a soft deadline.

## What's actually being built

The LA 2028 footprint is different from some past Olympics because LA already has existing venues from the 1984 Games. The approach has been renovation and upgrade rather than building from scratch, which actually means more retrofit electrical work: older buildings getting brought up to current code, new power distribution systems going into existing structures, broadcast and telecom infrastructure layered onto venues that weren't designed for it.

Athlete housing is going in at UCLA and USC. New and upgraded venues are being prepared across the metro area. The transportation corridor improvements that feed into the Olympic experience include electrified bus rapid transit and station infrastructure. All of this has significant electrical scope.

## The timeline pressure is real

Most of the heavy construction needs to be done 6-12 months before the Games for testing, commissioning, and logistics setup. That puts the real crunch window in 2026-2027. We're in it right now.

Contractors working Olympic-adjacent projects in LA right now need licensed electricians. Not apprentices waiting on hours, not helpers: licensed journeymen who can pull permits, sign off on work, and run jobs. The credential gap is what separates who gets called for this work and who doesn't.

## After 2028

The legacy infrastructure from the Olympics doesn't disappear. Upgraded venues stay in use. Improved transit runs. Athlete housing at UCLA and USC becomes student housing. The work done for 2028 has a long tail.

But the build cycle itself: the part with the most concentrated electrical work: is happening now. If you're working toward your California Journeyman license, this is the context you're walking into.

## The exam is the gate

The California General Electrician exam through PSI is 100 questions based on the 2023 NEC. Roughly 40% of people pass on the first try. It's not a rubber stamp.

[West Coast Wire Pro](https://westcoastwirepro.com) has 500 practice questions built specifically for this exam, organized by the same content areas PSI tests. Every question has a full explanation so you understand the underlying code, not just the answer to that one question.

The construction window is open. The question is whether your license is.
    `.trim(),
  },
  {
    slug: 'california-electrician-shortage-wages-retirement-wave',
    title: "California Is Running Out of Journeyman Electricians. Here's What That Means for Wages.",
    date: 'July 23, 2026',
    category: 'Industry News',
    excerpt: "A large share of California's licensed journeymen are near retirement age. The people replacing them aren't coming fast enough. That supply gap is already showing up in wages and it's not going away.",
    readTime: '4 min read',
    content: `
The median hourly wage for electricians in California hit $36.80 in 2024. The top 10% are clearing $52 an hour. That puts the top earners well above $100,000 a year in a trade that doesn't require a four-year degree.

Those numbers aren't the result of some organized wage campaign. They're basic supply and demand. And the supply side of the equation is getting tighter, not looser.

## Who's leaving

A significant portion of California's licensed journeymen are at or near retirement age. The people who got their credentials in the 1980s and 1990s, who built careers through the construction booms of the following decades, are getting out. Some are already gone.

The trade doesn't replace itself automatically. Becoming a licensed journeyman in California takes years of documented field experience before you even sit for the exam. You can't fast-track it. There's no shortcut from zero to licensed in 12 months.

That lag between demand rising and supply responding is where wages live.

## The demand side isn't softening

California EDD projects 9% job growth for electricians through 2030. That projection was published before the January 2026 wildfires created a separate multi-year infrastructure rebuilding pipeline. Before SCE announced its plan to underground 153 miles of distribution lines. Before the 2028 Olympics construction crunch fully hit.

The number of things pulling on licensed electricians in California right now is unusually high. Wildfire grid hardening. Olympic construction. EV charging infrastructure going into commercial buildings across the state. Data centers. Residential and commercial construction that never really stopped.

Add it all up and the gap between how many licensed journeymen California has and how many it needs isn't closing anytime soon.

## What this means in practice

If you're already in the trade and working your hours, you're in the right place. The credentials matter more than they ever have because the work exists and the licensed people to do it are getting scarcer.

Some certification programs around the state have reported filling available spots within minutes of posting openings. That's not hype: it's the market working.

## The exam is the actual bottleneck

None of the wage or demand picture helps you if you're not licensed. The California Journeyman Electrician exam (PSI, 100 questions, 2023 NEC) has roughly a 40% first-attempt pass rate. It's the gate between working in the trade and being licensed to run work in the trade.

[West Coast Wire Pro](https://westcoastwirepro.com) is 500 practice questions built specifically for the CA Journeyman exam. Not a general electrical study tool: questions written from the 2023 NEC, organized by the same modules PSI uses, with full explanations for every answer. The goal is to go into the test having already seen the concepts, not encountering them cold.

The wages are there. The work is there. The only question is whether you're licensed to go get it.
    `.trim(),
  },
  {
    slug: 'california-ev-charging-data-centers-electrician-jobs-2026',
    title: "EV Charging and Data Centers Are Quietly Driving Massive Electrician Demand in California",
    date: 'July 23, 2026',
    category: 'Industry News',
    excerpt: "Before the wildfires and the Olympics, two other forces were already reshaping electrical work in California. EV charging infrastructure and data center construction aren't going away and they need licensed journeymen to build them.",
    readTime: '4 min read',
    content: `
The wildfire rebuilding and the 2028 Olympics get the headlines right now, but there are two other demand drivers for California electricians that were already running before any of that and will keep running long after.

EV charging infrastructure and data centers. Neither is a temporary project. Both are baseline, ongoing work that's going to need licensed electricians in California for the foreseeable future.

## EV charging: it's not just Tesla superchargers

The visible part of EV charging is the stuff you see at highway rest stops and mall parking lots. The less visible part and the part with more sustained electrical work: is the commercial and multifamily buildout happening across the state.

California law now requires EV-ready infrastructure in new construction. Existing commercial properties are retrofitting. Multifamily buildings are getting charging added to parking structures. Fleet operators: delivery companies, municipalities, school districts with electric buses: are building out dedicated charging depots.

All of that is electrical work. Panel upgrades, new circuits, conduit runs, load calculations, metering. The residential end is relatively simple. The commercial and fleet end is not. A fleet depot for 50 electric buses has significant electrical scope. A parking structure retrofit for a commercial building is a real job.

This work is being driven by a mandate, not a trend. California's EV targets aren't going away, which means the infrastructure buildout isn't going away either.

## Data centers: the AI buildout is real

Every major tech company is adding data center capacity. AI applications are power-hungry. Training and inference workloads require massive, stable power supply with redundant systems. California's existing data center footprint is being expanded, and new facilities are being permitted and built.

Data center electrical work is specialized. These facilities run on large UPS systems, redundant feeders, precision cooling tied to electrical distribution, emergency generators, and monitoring systems that touch every circuit in the building. They need licensed electricians who understand commercial power distribution at scale, not just residential work.

The demand for this isn't cyclical. Companies aren't building data centers to mothball them. Once built, data centers need ongoing maintenance, upgrades, and expansion. It's recurring work.

## California's grid is being restructured underneath all of this

The EV load and the data center load are both landing on a grid that California is simultaneously rebuilding for renewable energy. Solar and wind add power intermittently, which means more battery storage infrastructure, more sophisticated grid management, more points where the grid needs physical electrical work done.

California EDD's 9% job growth projection for electricians through 2030 is built on this baseline. The wildfire rebuilding and Olympic construction are additions to that baseline, not replacements for it.

## The credential gap

All of this work requires licensed journeymen in California: people who can pull permits, take legal responsibility for the work, and sign off on inspections. The ratio of available work to available licensed electricians is favorable right now and getting more so.

The California Journeyman Electrician exam is the credential that opens the door to this work. 100 questions, 2023 NEC, roughly 40% first-attempt pass rate.

[West Coast Wire Pro](https://westcoastwirepro.com) has 500 practice questions built specifically for the CA Journeyman exam: organized by PSI's content areas, with full explanations for every answer. If you're putting in hours and working toward the exam, it's the most direct prep available for what's actually tested.

The work is there. Build toward the license.
    `.trim(),
  },
  {
    slug: 'nec-table-310-16-conductor-ampacity-guide',
    title: "How to Read NEC Table 310.16 for the California Journeyman Exam",
    date: 'June 5, 2026',
    category: 'Exam Prep',
    excerpt: "Table 310.16 is the most-referenced table on the California journeyman exam. Here's exactly how to read it, which column to use, and the values you need to have memorized cold.",
    readTime: '6 min read',
    content: `
Table 310.16: officially titled "Allowable Ampacities of Insulated Conductors Rated Up to and Including 2000 Volts, 60°C Through 90°C, Not More Than Three Current-Carrying Conductors in Raceway, Cable, or Earth": is the single most important table in the NEC for the CA journeyman exam.

You will use it on virtually every conductor sizing question. If you walk into the PSI test center and can't read it fluently, you will miss points you shouldn't miss.

This article breaks it down completely.

## The Three Temperature Columns

Table 310.16 has three conductor ampacity columns based on insulation temperature rating:

**60°C column**: Use this for older wiring, simple applications, or when the conductor type requires it (e.g., TW). Lowest ampacities.

**75°C column**: This is the column you'll use most often. Most modern commercial and industrial equipment (panelboard lugs, breaker terminals, switch terminals) is rated 75°C. Most exam questions resolve here.

**90°C column**: Used for conductors with 90°C-rated insulation (THHN, THWN-2, XHHW-2). You can use this column for **derating calculations**: but you typically can't use it for the final connected ampacity unless the equipment is specifically listed for 90°C terminations.

## The Termination Rule (NEC 110.14(C))

This is the rule that trips people up most:

The final ampacity of a conductor is limited by the **lowest-rated component** in the circuit: the conductor, the termination, or the equipment.

In practice: almost all equipment you'll encounter in the field and on the exam is rated 75°C. So even if you're installing THHN (rated 90°C), you use the **75°C column** for your ampacity at the termination.

Exception: equipment rated over 100A (or conductors larger than 1 AWG): use 75°C column. Smaller equipment: use 60°C column unless marked otherwise.

The 90°C rating isn't wasted: it's used as the **starting point for correction and adjustment calculations** (temperature derating, conduit fill factors). But the result gets capped at 75°C for the termination.

## Key Values to Memorize

For the exam, you need these 75°C copper values cold:

- **14 AWG: 20A** (but max OCPD = 15A per 240.4(D))
- **12 AWG: 25A** (but max OCPD = 20A per 240.4(D))
- **10 AWG: 35A** (max OCPD = 30A per 240.4(D))
- **8 AWG: 50A**
- **6 AWG: 65A**
- **4 AWG: 85A**
- **3 AWG: 100A**
- **2 AWG: 115A**
- **1 AWG: 130A**
- **1/0 AWG: 150A**
- **2/0 AWG: 175A**
- **3/0 AWG: 200A**
- **4/0 AWG: 230A**

The ones that catch people: 3/0 AWG = 200A (commonly used for 200A services), and the small-conductor limits where 240.4(D) overrides the table ampacity for OCPD sizing.

## Temperature Derating (Correction Factors)

Table 310.16 assumes an ambient temperature of 30°C (86°F). If the installation environment is hotter, you must derate.

The correction factors are listed at the bottom of Table 310.16. Key ones for the exam:

- **31-35°C ambient:** 90°C conductors × 0.91
- **36-40°C ambient:** 90°C conductors × 0.82
- **41-45°C ambient:** 90°C conductors × 0.71

Attic installations on a hot day, conduit running through a boiler room, conductors in direct sun: these trigger derating.

## Conduit Fill Derating (NEC 310.15(C)(1))

If more than 3 current-carrying conductors are in a raceway, you must also apply conduit fill adjustment factors from Table 310.15(C)(1):

- **4-6 conductors: 80%**
- **7-9 conductors: 70%**
- **10-20 conductors: 50%**

These multiply against the conductor's table ampacity. If both temperature correction and conduit fill apply, both factors multiply together.

**Example:** THHN 12 AWG in a raceway with 6 current-carrying conductors, 40°C ambient.
- Start with 90°C column: 30A
- Temperature correction at 40°C: × 0.82 = 24.6A
- Conduit fill (6 conductors): × 0.80 = 19.7A
- Final derated ampacity: 19.7A

The OCPD is still capped at 20A per 240.4(D), and the termination ampacity uses 75°C = 25A. The derated value (19.7A) tells you what the conductor can actually carry continuously under those conditions: which is below both limits, so the 20A breaker adequately protects the conductor at this load.

## What the Exam Tests

Exam questions on Table 310.16 typically test one of these scenarios:

1. **Direct lookup:** "What is the ampacity of 2 AWG copper THWN at 75°C?" → 115A
2. **Termination column selection:** "A 90°C conductor connects to a 75°C-rated lug. Which column applies?" → 75°C
3. **Derating calculation:** Temperature correction and/or fill factor applied to find adjusted ampacity
4. **Small conductor limits:** Does 240.4(D) override the calculated ampacity for OCPD sizing?

Know the 75°C copper column cold, understand the termination rule, and practice derating calculations. Those three areas cover the vast majority of Table 310.16 questions on the CA exam.
    `,
  },
  {
    slug: 'voltage-drop-calculation-ca-journeyman-exam',
    title: "Voltage Drop Calculations for the CA Journeyman Exam: The Formula, the Steps, and What the NEC Actually Says",
    date: 'May 30, 2026',
    category: 'Exam Prep',
    excerpt: "Voltage drop is on every CA journeyman exam. Here's the exact formula, a step-by-step example, and the NEC limits you need to know: including the difference between what's required and what's recommended.",
    readTime: '7 min read',
    content: `
Voltage drop questions appear on every California journeyman exam. They're calculation questions, which means you either know the formula and work the numbers, or you don't.

The good news: once you understand what the formula is actually calculating, it's not complicated. The bad news: most study materials explain it in ways that create confusion about what the NEC actually requires.

Here's the straight version.

## What Is Voltage Drop?

Voltage drop is the reduction in voltage between the source (panel) and the load (device) caused by the resistance of the conductors.

Every conductor has resistance. Current flowing through that resistance creates a voltage drop. Long runs, small conductors, and high currents all make it worse.

At the load, voltage drop means less voltage: which means motors run hotter, lights are dimmer, and sensitive electronics can malfunction or fail.

## What the NEC Actually Requires (and Recommends)

Here's where most people get confused.

**The NEC does not mandate voltage drop limits as a general rule.** There is no Article 230 code section that says "thou shalt not exceed 3%." What the NEC does is include **informational notes**: which are not enforceable requirements: recommending:

- **Branch circuits:** Voltage drop should not exceed **3%** (NEC 210.19(A)(1) Informational Note No. 4)
- **Feeders:** Voltage drop should not exceed **3%** (NEC 215.2(A)(1) Informational Note No. 2)
- **Combined total** (feeder + branch circuit): Should not exceed **5%**

For the CA exam, the PSI content outline tests voltage drop calculations. Use the 3% branch circuit and 5% combined limits when the question asks you to verify compliance or find the minimum wire size.

## The Formula

For single-phase circuits (and for the exam, this is what you'll almost always use):

**VD = (2 × K × I × L) / CM**

Where:
- **VD** = voltage drop (in volts)
- **K** = resistivity constant (**12.9 for copper**, 21.2 for aluminum)
- **I** = current in amperes (the load current)
- **L** = one-way length of the circuit in feet
- **CM** = circular mil area of the conductor (from NEC Chapter 9, Table 9)

The factor of **2** accounts for the round-trip path: current goes out on the hot conductor and returns on the neutral.

To find **percent voltage drop:** VD% = (VD / Source Voltage) × 100

## Common Circular Mil Values

You'll need these from memory or the table:

- **14 AWG: 4,110 CM**
- **12 AWG: 6,530 CM**
- **10 AWG: 10,380 CM**
- **8 AWG: 16,510 CM**
- **6 AWG: 26,240 CM**
- **4 AWG: 41,740 CM**
- **2 AWG: 66,360 CM**

## Step-by-Step Example

**Problem:** A 120V, 20A single-phase circuit runs 75 feet (one-way) to a load. What is the voltage drop using 12 AWG copper THWN? Is it within the 3% limit?

**Step 1: Identify values:**
- K = 12.9 (copper)
- I = 20A
- L = 75 ft (one-way)
- CM = 6,530 (12 AWG)

**Step 2: Calculate VD:**
VD = (2 × 12.9 × 20 × 75) / 6,530
VD = 38,700 / 6,530
**VD = 5.93 volts**

**Step 3: Calculate percent:**
VD% = (5.93 / 120) × 100
**VD% = 4.9%**

**Step 4: Check against limit:**
4.9% exceeds the 3% recommendation. 12 AWG is not adequate for this run at this load.

**Step 5: Find minimum wire size:**

Rearrange the formula to solve for CM:
CM = (2 × K × I × L) / VD allowed

Maximum VD allowed = 120V × 0.03 = 3.6V

CM = (2 × 12.9 × 20 × 75) / 3.6
CM = 38,700 / 3.6
CM = **10,750**

Next standard conductor above 10,750 CM: **10 AWG = 10,380 CM**: not quite enough. Go to **8 AWG = 16,510 CM** ✓

## Finding the Minimum Wire Size

The process is always:

1. Calculate max allowable VD in volts (source voltage × % limit)
2. Rearrange formula to solve for CM
3. Look up the next standard conductor size that meets or exceeds that CM value

This is the most commonly tested voltage drop scenario on the CA exam.

## Three-Phase Circuits

For three-phase circuits, remove the factor of 2 and replace with √3 (1.732):

**VD = (1.732 × K × I × L) / CM**

Three-phase voltage drop questions are less common on the journeyman exam but do appear. Know which formula to use.

## What to Practice

- Work at least 10 single-phase voltage drop problems from start to finish
- Practice finding the minimum conductor size (solving for CM, then looking up the next standard conductor)
- Know the K value for copper (12.9) cold: aluminum (21.2) appears occasionally
- Know the CM values for 12, 10, 8, and 6 AWG copper: these come up most often
    `,
  },
  {
    slug: 'california-journeyman-electrician-exam-pass-rate',
    title: "California Journeyman Electrician Exam Pass Rate: What the Numbers Mean and How to Beat Them",
    date: 'May 18, 2026',
    category: 'Exam Prep',
    excerpt: "The California General Electrician exam has a first-time pass rate under 50%. Here's what that number actually tells you, which modules cause the most failures, and what separates the people who pass from those who retake.",
    readTime: '5 min read',
    content: `
Let's be direct about what you're walking into.

The California General Electrician (Journeyman) exam: administered by PSI on behalf of the California Division of Labor Standards Enforcement: has a **first-attempt pass rate under 50%** for most testing periods. The exact number isn't published by the state, but industry data and reporting from trade schools consistently put it in the **40-50% range**.

That means more people who sit for this exam fail it the first time than pass it.

Understanding why matters more than the number itself.

## What the Exam Actually Tests

The exam is 110 questions. You have 4.5 hours. The passing score is 70%. PSI publishes a content outline that breaks down the question distribution by subject area: this is the closest thing to a blueprint you'll find.

The heavily weighted areas are where the first-time failures happen most:

**Wiring Methods and Materials (Articles 300-392)** consistently produces the most missed questions. It covers conduit types, bend limits, support requirements, fill calculations, and wiring in special locations. The rules are specific, numerous, and easy to confuse.

**Grounding and Bonding (Article 250)** is the second most common failure point. Article 250 is long, technically precise, and has numerous exceptions and special cases. The distinction between grounding electrode conductors, equipment grounding conductors, grounding electrode conductors, and bonding jumpers trips up experienced electricians.

**Calculations**: voltage drop, conduit fill, load calculations, motor circuit sizing: require math under time pressure. People who haven't drilled calculations enough guess on these and lose 5-10 points they should have.

**California-specific rules** (Title 8 Cal/OSHA, Title 24 CEC) are tested and not covered in most NEC-only prep materials.

## Why People Fail on the First Attempt

The most common failure patterns:

**They studied the wrong way.** Re-reading the NEC or a textbook builds familiarity, not recall. The exam asks you to retrieve information, not recognize it. Active practice: answering questions without looking at notes: is the only way to build the retrieval pathways that work under exam pressure.

**They ran out of time.** 4.5 hours for 110 questions is 2.5 minutes per question. That sounds like a lot until you're on question 80 and the clock is at 30 minutes. People who haven't trained at exam pace discover this problem at the worst possible time.

**They couldn't navigate the codebook.** The PSI exam is open book: they hand you an **unmarked NEC codebook** with no tabs, no highlights, no personal notes. Candidates who relied on memorized article numbers without understanding the book's structure waste critical minutes searching. Candidates who've drilled the codebook's organization find the reference they need in 20 seconds and move on.

**They under-studied specific modules.** A candidate who scored 90% on Definitions and 40% on Wiring Methods will fail. The exam weights modules proportionally: if you're weak in a heavily tested area, no amount of strength elsewhere compensates.

## What Separates the People Who Pass

From pattern analysis across exam prep programs and trade school data:

**Consistent daily practice over weeks, not cramming.** Memory consolidates during sleep. Ten days of 45-minute sessions builds stronger recall than one 7-hour day the week before the exam.

**Drilling missed questions specifically.** Every wrong answer is information about a knowledge gap. The most effective final-week preparation is targeted review of your weakest areas, not re-doing questions you already know.

**Timed practice sessions.** Pacing is a skill. You build it by practicing under time pressure, not by knowing the material.

**Codebook navigation practice.** The open-book format is an advantage only if you know how to use it quickly. It becomes a liability if you're searching during the exam.

## How to Use This

The 40-50% first-attempt pass rate isn't a reason to be discouraged. It's a reason to prepare differently than the people who fail.

Most first-time failures come from recognizable gaps: wrong study method, untrained pacing, weak codebook navigation, or specific module deficiencies. Every one of those is fixable before your exam date.

The people who pass aren't more intelligent or more experienced than the people who fail. They practiced in a way that built the right skills. That's it.
    `,
  },
  {
    slug: 'nec-article-430-motor-branch-circuit-calculations',
    title: "NEC Article 430 Motor Calculations: What Every CA Journeyman Candidate Needs to Know",
    date: 'May 8, 2026',
    category: 'Exam Prep',
    excerpt: "Motor branch circuit calculations follow a specific NEC framework that's heavily tested on the CA journeyman exam. Here's the step-by-step process for conductor sizing, OCPD selection, and feeder calculations.",
    readTime: '8 min read',
    content: `
Motor circuits in NEC Article 430 follow a different sizing framework than general branch circuits. The rules are specific, the percentages matter, and the exam tests them repeatedly.

Here's the complete framework you need.

## The Key Distinction: FLA vs. FLC

Before anything else: know the difference between **FLA** and **FLC**.

**FLA (Full Load Amperes)**: the actual ampere draw on the motor nameplate.

**FLC (Full Load Current)**: the value from the NEC motor tables (Tables 430.247 through 430.250).

For conductor sizing and OCPD selection, the NEC uses **FLC from the tables**: not the nameplate FLA. The nameplate is used for overload protection sizing.

This is one of the most-tested distinctions on the CA exam. Read the question carefully to know which value it's asking for.

## Step 1: Find the FLC

The NEC provides FLC tables for:
- **Table 430.248**: Single-phase AC motors
- **Table 430.250**: Three-phase AC motors

Look up the motor horsepower and voltage to get the FLC. These tables are open-book, but knowing the common values speeds you up:

Three-phase, 460V motors (Table 430.250):
- **1 HP: 2.1A**
- **5 HP: 7.6A**
- **10 HP: 14A**
- **15 HP: 21A**
- **20 HP: 27A**
- **25 HP: 34A**
- **30 HP: 40A**
- **50 HP: 65A**

## Step 2: Size the Branch Circuit Conductors

Per **NEC 430.22**, branch circuit conductors supplying a single motor shall have an ampacity of not less than **125% of the motor FLC**.

**Formula:** Conductor ampacity ≥ FLC × 1.25

**Example:** 10 HP, 460V, three-phase motor.
FLC = 14A (from Table 430.250)
Minimum conductor ampacity = 14 × 1.25 = **17.5A**

From Table 310.16 at 75°C: 12 AWG copper = 25A → adequate (next size up from 17.5A isn't needed since 25A ≥ 17.5A).

## Step 3: Select the Short-Circuit and Ground-Fault Protection

This is where Article 430 diverges significantly from general circuit rules. Motor overcurrent protection has two separate functions:

1. **Short-circuit and ground-fault protection** (branch circuit OCPD: the breaker or fuse)
2. **Overload protection** (separate device sized for actual motor nameplate current)

For short-circuit and ground-fault protection, use **Table 430.52**. Maximum ratings:

| Protection Type | Single-Phase | Three-Phase |
|---|---|---|
| Non-time-delay fuse | 300% of FLC | 300% of FLC |
| Dual-element (time-delay) fuse | 175% | 175% |
| Inverse time breaker | 250% | 250% |

**Example:** 10 HP, 460V, three-phase motor with inverse time breaker.
Maximum OCPD = 14A × 2.50 = 35A
Next standard size at or below 35A: **35A circuit breaker**

**Important:** If the calculated maximum doesn't correspond to a standard OCPD size, use the next lower standard size: unless the motor won't start on that size, in which case the next higher is permitted up to the maximum percentages.

## Step 4: Size the Overload Protection

Overload protection is separate from branch circuit protection. It protects the motor from sustained overloads that won't trip a standard breaker fast enough to prevent motor damage.

Per **NEC 430.52(C)(1)**, individual overload protection rating:
- Motors with a service factor of 1.15 or higher, or with a temperature rise of 40°C or less: **125% of nameplate FLA**
- All other motors: **115% of nameplate FLA**

Note: This uses **nameplate FLA**, not table FLC.

## Motor Feeder Calculations

When a feeder supplies multiple motors, the calculation is different from a single motor circuit.

Per **NEC 430.24**:
Feeder ampacity = **(Largest motor FLC × 1.25) + (sum of all other motor FLCs)**

**Example:** A feeder serves three motors:
- Motor A: 20 HP, 460V (FLC = 27A): largest
- Motor B: 10 HP, 460V (FLC = 14A)
- Motor C: 5 HP, 460V (FLC = 7.6A)

Feeder ampacity = (27 × 1.25) + 14 + 7.6
= 33.75 + 14 + 7.6
= **55.35A minimum**

From Table 310.16 at 75°C, 6 AWG copper = 65A → use 6 AWG.

## The Motor Feeder OCPD

For the feeder overcurrent device, use the largest branch circuit OCPD for any motor in the group, plus the FLC of all other motors.

Per **NEC 430.62**:
Maximum feeder OCPD = (largest motor branch OCPD rating) + (sum of FLC of all other motors)

## What the Exam Tests

Motor questions on the CA exam typically fall into one of these categories:

1. **Conductor sizing:** "What is the minimum ampacity for branch circuit conductors supplying a [X] HP, [voltage] motor?" → FLC × 1.25
2. **OCPD selection:** "What is the maximum [fuse/breaker] rating for a [X] HP motor?" → FLC × Table 430.52 percentage
3. **Feeder calculation:** "A feeder supplies three motors with FLCs of X, Y, and Z. What is the minimum feeder ampacity?" → largest FLC × 1.25 + sum of rest
4. **FLA vs FLC distinction:** "Which value is used to size branch circuit conductors for a motor?" → FLC from the table, not nameplate FLA

Know the 125% conductor rule, the Table 430.52 percentages, and the feeder formula. Those three cover the majority of Article 430 exam questions.
    `,
  },
  {
    slug: 'ai-data-centers-california-electrician-demand-2026',
    title: "AI Is Building Data Centers Across California. Someone Has to Wire Them.",
    date: 'May 25, 2026',
    category: 'Industry News',
    excerpt: "Every AI data center under construction in California needs thousands of hours of licensed electrical work. The buildout is accelerating and the state doesn't have enough journeymen to keep up.",
    readTime: '3 min read',
    content: `
The AI infrastructure boom isn't abstract. It's happening in Livermore, Sacramento, San Jose, the Inland Empire, and a dozen other California markets right now: in the form of massive data center campuses that need more electrical capacity than most small cities.

Microsoft. Google. Meta. Amazon. Oracle. Every one of them has announced or broken ground on new California facilities in the past 18 months. A single hyperscale data center can draw 100 to 500 megawatts of power. The electrical work to get there: switchgear, feeders, distribution panels, UPS systems, emergency generators, grounding: is enormous. And it all requires licensed journeymen.

## The Numbers

The U.S. data center construction market is projected to grow from $37 billion in 2024 to over $60 billion by 2027. California is one of the top three states for new capacity. The construction pipeline is full.

Meanwhile, the Bureau of Labor Statistics projects electrician employment to grow 11% nationally through 2033: faster than almost any other trade. In California, the growth is steeper. The combination of electrification mandates, EV infrastructure, wildfire grid hardening, and now AI data centers has pushed demand past what the licensed workforce can absorb.

## What This Means If You're Studying Right Now

Data center work pays at the top of the journeyman scale. The projects are long: years, not months. Union and non-union shops alike are chasing the same pool of licensed electricians.

Your journeyman card is the entry point. Without it, you're doing the labor. With it, you're doing the work that can't be delegated: the sizing, the code compliance, the inspections. That's where the leverage is.

## The Exam Is Still the Gate

The license exam doesn't care about the market. It cares whether you know the NEC. But the market is a good reason to pass it sooner rather than later.

The buildout isn't slowing down. The licensing backlog in California means every passing exam date matters more than it did a year ago. Get through the gate while the demand is there.
    `,
  },
  {
    slug: 'lowes-250-million-electrician-training-2026',
    title: "Lowe's Just Bet $250 Million on Electricians. Your Timing Just Got Better.",
    date: 'April 22, 2026',
    category: 'Industry News',
    excerpt: "Lowe's is putting $250 million toward training new electricians. Here's what it actually means if you're already studying for the California journeyman exam.",
    readTime: '3 min read',
    content: `
On April 7, 2026, Lowe's announced they're putting $250 million toward training 250,000 new tradespeople by 2035: electricians included. That's five times what they committed back in 2023.

What it means for you: the industry knows it's short on electricians, and that shortage isn't going away anytime soon.

## What's Actually Happening in California Right Now

EV chargers going in on every other street. Solar on every other roof. Data centers popping up across the Inland Empire. Panel upgrades to handle heat pumps and induction ranges. Every one of those jobs needs a licensed electrician, and there aren't enough of us to go around.

The Associated Builders and Contractors estimates the country is short about 350,000 construction workers this year. Next year, 456,000. Lowe's CEO Marvin Ellison put it plainly: as AI takes over the desk jobs, the hands-on trades matter more, not less. You can't write a line of code that pulls wire.

## The Catch in the Lowe's News

That $250 million goes to community colleges and nonprofits to train new apprentices. Even if every dollar lands tomorrow, those folks are years away from sitting for the journeyman exam. You, on the other hand, are studying right now.

That's your edge. You're not the pipeline: you're already in it. Pass the exam, get your license, and you're in the market before the Lowe's-funded apprentices finish their first year of school.

Keep studying. The work is coming.
    `,
  },
  {
    slug: 'how-to-pass-california-journeyman-exam',
    title: "How to Pass the California Journeyman Electrician Exam (What Actually Trips People Up)",
    date: 'April 14, 2026',
    category: 'Exam Prep',
    excerpt: "The material isn't the hard part: you've got 8,000 hours in. What kills people on this exam is speed and navigation. Here's what actually trips people up, and what to do about it.",
    readTime: '7 min read',
    content: `
If you're reading this, you're probably a few weeks out from your exam date and starting to feel that low hum of dread. Good. That means you're taking it seriously. Let's talk about what actually matters.

## How Hard Is the California Journeyman Electrician Exam, Really?

Here's the honest answer from guys who've been through it: the material isn't the hard part. You've already got 8,000 hours in. You know how to wire a panel, size a feeder, terminate a service. What kills people on this exam is speed and navigation: 110 questions (10 of these are unscored pretest questions, but you won't know which ones), 4 hours and 30 minutes, open book.

That "open book" part sounds like a gift until you're sitting there with the 2023 NEC in front of you, the clock running, and you can't remember if the answer is in Article 250 or Article 408. You know the concept. You just can't find it fast enough.

Pass rate estimates for the general electrician exam hover around 50% or lower on first attempts. That's not because half the test-takers don't know electrical work. It's because half of them run out of time, second-guess themselves into changing right answers to wrong ones, or get stuck flipping through the same three chapters looking for one table.

## What's the Hardest Part of the Exam?

Ask around and you'll hear the same categories come up over and over:

Wiring Methods and Materials. Article 300 general requirements, then the specific articles for each wiring method: NM, MC, EMT, conduit fill, support spacing. There's a lot of "permitted/not permitted" detail that's easy to mix up between methods.

Calculations. Voltage drop, conductor sizing with derating, motor circuits, load calculations. These aren't conceptually hard: they're formula-and-table problems. But under time pressure, one wrong table lookup early in a multi-step problem tanks the whole answer.

Grounding and Bonding. Article 250. Everyone's weak here because it's genuinely confusing: GEC sizing, EGC sizing, bonding jumpers, when something needs to be insulated vs. bare. The tables (250.66, 250.122) get tested hard.

Motors. Article 430. FLA tables, the 125%/115%/250% rules for different components, and knowing which percentage applies to which part of the circuit (conductors vs. OCPD vs. controller).

If you came out of your apprenticeship strong in residential and you're weak on motors and three-phase calculations, that's normal and it's exactly the kind of gap that shows up on your score report if you fail.

## How to Study for the California Journeyman Exam

1. Stop reading and start retrieving. Reading the codebook cover to cover feels productive. It isn't: not by itself. Your brain needs to practice finding information under pressure, not just recognizing it when you see it. Practice questions that force you to produce an answer, then check it, build the kind of memory that survives a testing room.

2. Time yourself from day one. Don't wait until the week before to start practicing under a clock. If you consistently take 3 minutes per question in practice, you're going to run out of time on the real thing: 110 questions in 270 minutes is about 2.5 minutes per question, and some of those minutes need to go toward calculations.

3. Drill your weak categories, not your strong ones. It feels good to breeze through questions on stuff you already know. It doesn't move your score. If grounding and bonding is your weak spot, that's where your study time needs to go: even though it's less fun.

4. Learn to navigate the code by keyword, not by memory. You will not memorize the entire NEC, and you don't need to. What you need is the ability to take a question, identify the keyword ("dwelling unit," "continuous load," "wet location"), and go straight to the right article without wandering. This is a trainable skill: but only if you practice it specifically, which most study methods don't do.

5. Take a full practice exam under real conditions. Same time limit, same question count, no pausing. The first time most people do this, they're shocked at how the clock feels different than doing 20 questions at a time. Better to get that shock in practice than on exam day.

## How Many Questions Is the California Journeyman Exam?

110 questions (10 unscored pretest questions mixed in, indistinguishable from the rest), 4 hours and 30 minutes, multiple choice, computer-based through PSI. You need 70% to pass. Results are immediate.

## What Should I Bring to the Exam?

Your NEC codebook (the current adopted edition: California is transitioning to the 2023 NEC), two forms of government-issued photo ID, and nothing else. PSI provides scratch paper, a pencil, and an on-screen calculator. You can tab your codebook with manufacturer tabs, highlight it, and write in it ahead of time: just not during the exam.

## The Bottom Line

The guys who pass aren't necessarily the best electricians in the room. They're the ones who can move through 110 questions without getting stuck, who know their weak spots and shored them up beforehand, and who've practiced finding answers in the code fast enough that the clock doesn't beat them.

That's a different skill than field work, and it's a skill you can build: but it takes the right kind of practice.

---

West Coast Wire Pro is built around exactly this: Code Sprint trains article navigation under time pressure, High-Priority Drill focuses on the categories that fail people most, and the Full Exam Simulator runs the real 110-question, 4.5-hour format so exam day isn't a surprise. [Start free: Modules 1 & 2, no account needed.](/)
    `,
  },
  {
    slug: 'ca-journeyman-exam-day-guide',
    title: "What to Expect at the PSI Testing Center: CA Journeyman Exam Day",
    date: 'March 21, 2026',
    category: 'Exam Strategy',
    excerpt: "You've studied for weeks. Now it's the day before your California Journeyman exam and you have no idea what actually happens at the PSI testing center. Here's exactly what to expect: from the parking lot to the score screen.",
    readTime: '5 min read',
    content: `
You've studied for weeks. Now it's the day before your California Journeyman exam and you have no idea what actually happens at the PSI testing center. Here's exactly what to expect: from the parking lot to the score screen.

## What PSI Actually Is

PSI Exams is the third-party testing company that administers the California Journeyman (and Residential) electrician exam on behalf of the California Division of Labor Standards Enforcement (DLSE). You schedule your exam at PSI's website, choose a test center location, and show up at your appointment time.

## What to Bring

- **Two forms of valid ID**: one must be government-issued with a photo.
- **Your PSI appointment confirmation**: screenshot or printed.
- Nothing else. No phones, no scratch paper from home, no food or drinks in the testing room.

## The Codebook: PSI Provides It

The California Journeyman exam is open book, but **PSI provides the NEC 2020 codebook at the testing center. You do not bring your own.** No tabs, no highlights, no handwritten notes, is a clean, unmarked copy. Anything you wrote in your personal codebook stays home.

This is confirmed by WECA (Western Electrical Contractors Association) and multiple official sources: the NEC code books are provided at the testing sites. Personal calculators are not permitted: PSI provides an on-screen calculator in the testing software. Everything else stays in the locker PSI provides.

## What Happens When You Arrive

Check in with the front desk, show your IDs, and store everything except your codebook in a provided locker. PSI will give you scratch paper and a pencil at your station. You'll be photographed or fingerprinted. Then you sit at a computer terminal and begin.

## The Test Itself

110 questions, 4 hours and 30 minutes. Most candidates finish in 2.5-3 hours.

Questions are multiple choice: four options, one correct answer. You can flag questions and come back to them. Use this feature: don't spend 10 minutes on one calculation when you have 109 others to get through.

Your codebook is there. Use it strategically. If you flip to it for every question, you will run out of time. The candidates who pass have studied enough to confirm answers quickly: not discover them.

## What the Score Screen Looks Like

When you submit, your score appears immediately. 70% is passing. The screen shows your percentage and pass/fail status: not a breakdown by topic. If you pass, your license application proceeds through the CSLB. If you fail, you must wait 60 days before you can retest.

Your access to West Coast Wire Pro doesn't expire. If you need a second attempt, every question, every drill, and every tool is still there.

## What Trips People Up on Exam Day

**Calculation questions when the book isn't memorized**: you need Table 310.16, Annex C, and Chapter 9 accessible in under 30 seconds. If you're spending 3 minutes finding the right table, you're already behind.

**Misreading the question**: "which of the following is NOT permitted" catches more people than any code section. Read every question twice.

**Running out of time on motors and services**: practice these calculations until they're mechanical.

## The Best Way to Prepare for These Conditions

Run full exam simulations before your test date. West Coast Wire Pro's Exam Simulator gives you 110 questions on a timed 4.5-hour clock: exactly the real exam format. The PSI exam questions are proprietary and owned by the DLSE. No one has them. The edge comes from knowing the NEC cold enough that you're confirming, not searching.

Do at least two full simulations in the week before your exam.

Start with Modules 1 & 2 free at westcoastwirepro.com: no account needed.
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

The NEC has 9 chapters and hundreds of articles. Trying to memorize all of them before your exam is a losing strategy. The California Journeyman exam draws heavily from a subset of articles that govern the most common residential and commercial electrical work. Know these cold and you'll recognize 70-80% of what you see on test day.

## The 12 Most-Tested Articles

**Article 100: Definitions:** More questions start with "According to the NEC..." than any other article. Know: accessible, approved, ampacity, listed, service, feeder, branch circuit.

**Article 110: Requirements for Electrical Installations:** Working clearances, voltage ratings, equipment examination. The 3-foot workspace clearance rule and Table 110.26 appear constantly.

**Article 210: Branch Circuits:** GFCI locations, AFCI expansion in 2020 NEC, small appliance circuits, outdoor receptacle requirements.

**Article 230: Services:** Service entrance conductors, number of disconnects (six-disconnect rule), service drop clearances.

**Article 240: Overcurrent Protection:** Where to locate OCPDs, next-size-up rule (240.4(B)), tap rules. Calculation-heavy.

**Article 250: Grounding & Bonding:** The biggest article in the NEC. GEC sizing, bonding jumpers, grounding electrode requirements, rod spacing. Budget more study time here than anywhere else.

**Article 300: Wiring Methods (General):** Underground burial depths (Table 300.5), protection from physical damage, the nail plate rule.

**Article 310: Conductors:** Table 310.16 is tested constantly: wire sizing, temperature ratings, correction factors.

**Article 334: NM Cable (Romex):** Support intervals (every 4.5 ft, within 12" of box), permitted and prohibited locations.

**Article 358: EMT:** Support intervals (every 10 ft, within 3 ft of box), number of bends, fill.

**Article 408: Panelboards:** Directory requirements, overcurrent protection for panel buses.

**Article 430: Motors:** 125% FLA rule for conductors, OCPD sizing from Table 430.52, disconnecting means location and requirements.

## How to Study These Articles

Don't just read: answer questions. Every article on this list has 5-10 frequently-tested facts. West Coast Wire Pro's practice questions are mapped to these exact articles, so you see the question formats the exam actually uses.

## The One Thing Most People Miss: Article Location Under Pressure

One of the hardest parts of the open-book exam is finding things fast. If you don't know that motors live in Chapter 4, that grounding is Article 250, or that working clearances are in 110.26, you'll burn your time budget looking for answers rather than confirming them.

The Code Sprint drill at West Coast Wire Pro was built specifically for this. It gives you a scenario and 22 seconds to identify the correct NEC article: training the spatial memory that makes the open-book exam work in your favor instead of against you.

The actual PSI exam questions are proprietary and owned by the DLSE. No prep site anywhere has them. What separates candidates is how deeply they know the NEC.

Start with Modules 1 & 2 free at westcoastwirepro.com: no account needed.
    `,
  },
  {
    slug: 'how-to-pass-ca-journeyman-exam',
    title: "How to Pass the California Journeyman Electrician Exam: A Straight-Talk Study Guide",
    date: 'March 15, 2026',
    category: 'Exam Strategy',
    excerpt: "Most people who fail the CA Journeyman exam don't fail because the material is too hard. They fail because they studied the wrong things, ran out of time on calculations, or froze on NEC articles they'd never actually opened. Here's what actually works.",
    readTime: '7 min read',
    content: `
Most people who fail the California Journeyman exam don't fail because the material is too hard. They fail because they studied the wrong things, ran out of time on calculations, or froze on NEC articles they'd never actually opened. Here's what actually works.

## Know What You're Actually Being Tested On

The CA General Electrician exam is 110 questions drawn from the NEC 2020. It is open book: PSI provides an unmarked NEC 2020 codebook at the testing center. You do not bring your own book. No personal tabs, highlights, or notes permitted.

This is both a gift and a trap. If you know the code, you can verify answers. If you don't know it, you'll spend 4.5 hours desperately flipping pages and run out of time. The open book doesn't help you if you don't know which article to turn to.

## The 5 Modules That Make or Break Most People

**Module 1: Definitions & General Requirements (Articles 90-110):** More questions come from Article 100 definitions than most people expect. Know the language cold: accessible, ampacity, approved, feeder, branch circuit, service.

**Module 4: Grounding & Bonding (Article 250):** The longest article in the NEC. It's complex and heavily tested. GEC sizing, bonding jumpers, grounding electrode requirements: budget extra study time here.

**Module 8: Motors (Article 430):** The 125% rule, FLA sizing from Table 430.248/250, disconnect requirements: know these cold. Motor questions tend to involve calculations, and calculations take time.

**Module 5: Wiring Methods:** Conduit fill (Chapter 9), support intervals, burial depths: all testable and calculable. These questions reward people who have actually drilled the numbers.

**Module 6: Equipment:** Panels, switches, receptacles: straightforward if you've read the articles.

## Build a Mental Map of the Book

Speed matters. You don't have time to discover where Article 430 lives during the exam. You need to know that motors = Chapter 4, grounding = Article 250, branch circuits = Article 210, services = Article 230.

The Code Sprint drill on West Coast Wire Pro was built specifically for this, trains you to locate any NEC article in seconds under time pressure, which is exactly what the open-book exam requires.

## Calculations: Don't Skip Them

- **Conduit fill (Chapter 9 + Annex C):** Practice until it's mechanical
- **Voltage drop:** Know the formula, know when to apply it
- **Motor branch circuit sizing:** 125% of FLC for conductors, then OCPD from Table 430.52
- **Service load calculations:** Standard method vs. optional method: know the difference

## A Study Timeline That Actually Works

**8 weeks before:** Start Module 1, run the Diagnostic to establish your baseline.
**6 weeks out:** Modules 2-4, focus on grounding and wiring methods.
**4 weeks out:** Modules 5-8, drill calculations daily.
**2 weeks out:** Full exam simulations only: 110 questions, timed.
**Final week:** Review missed questions deck. No new material.

## The Actual PSI Exam Questions Are Not Available Anywhere

No prep site, training provider, or instructor has access to the real PSI exam questions: they are proprietary and owned by the DLSE. Every prep resource works from the same starting point: the NEC and the PSI content outline. The edge goes to whoever knows the code best.

Start with Modules 1 & 2 free at westcoastwirepro.com: no account needed.
    `,
  },
  {
    slug: 'blackrock-electrician-shortage',
    title: "BlackRock Just Said America Is Running Out of Electricians: Here's What That Means for Your License",
    date: 'March 11, 2026',
    category: 'Industry News',
    excerpt: "The world's largest asset manager committed $100M to skilled trades training in early 2026 and electricians are at the center of it. Here's why your California Journeyman license has never been worth more.",
    readTime: '5 min read',
    content: `
BlackRock: the world's largest asset manager, managing $14 trillion: announced a $100 million initiative specifically to train skilled trades workers. Electricians were named first.

CEO Larry Fink put it plainly: "We're going to run out of electricians that we need to build out AI data centers. We just don't have enough."

He said this to the Trump administration. He's been saying it at energy conferences for over a year. And now they're putting $100 million behind it.

This isn't just news. For anyone working toward their California Journeyman license, this is a green light.

## Why Electricians Are the Bottleneck for the AI Era

AI doesn't run on code alone. It runs on power: massive amounts of it. Every data center being built for Meta, Microsoft, Google, and OpenAI requires enormous electrical infrastructure. And that infrastructure requires licensed electricians.

According to the International Brotherhood of Electrical Workers (IBEW), electrical work accounts for **45% to 70% of total data center construction costs**. Microsoft's President Brad Smith called electrical talent shortages the *"single biggest challenge for data center expansion in the U.S."*

Google recently pledged $15 million to the Electrical Training Alliance just to grow the pipeline of electrical workers. These are trillion-dollar companies saying they can't build fast enough because there aren't enough licensed electricians.

Over the next decade, the U.S. will need more than **300,000 new electricians**: on top of the 200,000+ who are expected to retire. Skilled trades employment is projected to grow more than 5%, outpacing the national average of 3%.

## What This Means If You're in California

California is at the center of this buildout. Data centers, clean energy infrastructure, grid modernization: it's all happening here, and it all requires licensed Journeyman electricians.

Your California General Electrician (Journeyman) license isn't just a piece of paper. It's your legal authorization to do the work that the entire tech industry is desperate for. It's leverage. It's job security. It's negotiating power.

And right now, the gap between demand and supply is widening every day.

## The Window Is Now

BlackRock's announcement signals something important: this isn't a trend anymore. It's a national priority. The world's most powerful investors, the biggest tech companies, and the federal government are all pointing at the same problem: not enough licensed electricians.

If you've been sitting on your apprenticeship hours or putting off the exam, this is the moment. The people who get licensed now are going to be the ones positioned for the work that's coming.

At West Coast Wire Pro, we built our exam prep specifically for California: 462 original practice questions across all 11 modules of the General Electrician exam, every answer referenced directly to the NEC 2020. Modules 1 and 2 are always free. No account needed.
    `,
  },
]

export function getPost(slug) {
  return blogPosts.find(p => p.slug === slug) || null
}
