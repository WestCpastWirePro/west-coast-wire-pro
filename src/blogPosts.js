// ── Blog Posts Data ───────────────────────────────────────────────────────
// To add a new post: copy one object, update the fields, add to the TOP of
// the array (newest first). The slug becomes the URL: /blog/your-slug
// ─────────────────────────────────────────────────────────────────────────

export const blogPosts = [
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

At West Coast Wire Pro, we built our exam prep specifically for California — 512 questions across all 12 modules of the General Electrician exam, every answer referenced directly to the NEC. It's what I used to pass my own Journeyman exam, and it's what we've been refining ever since.
    `,
  },
]

export function getPost(slug) {
  return blogPosts.find(p => p.slug === slug) || null
}
