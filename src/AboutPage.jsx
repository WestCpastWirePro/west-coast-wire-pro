import { useState } from 'react'

export default function AboutPage({ onLaunchApp, onNavigate }) {
  return (
    <div style={s.root}>
      <AboutNav onHome={() => onNavigate('landing')} onLaunchApp={onLaunchApp} />

      {/* HERO */}
      <header style={s.hero}>
        <div style={s.heroGrid} />
        <div style={s.heroGlow} />
        <div style={s.heroInner}>
          <div style={s.label}>// ABOUT WIREREADY PRO</div>
          <h1 style={s.h1}>
            Built by an Electrician.<br />
            <span style={s.h1Gold}>For Electricians.</span>
          </h1>
          <p style={s.heroSub}>
            14 years in the trade. 4 years teaching at a trade school.
            No head start, no connections, no mentors — just the work.
            And a decision to be the resource that didn't exist.
          </p>
        </div>
      </header>

      {/* ORIGIN STORY */}
      <section style={s.section}>
        <div style={s.prose}>

          <div style={s.pullQuote}>
            "I didn't grow up in a family of tradesmen. I didn't have any leg up in this industry. I drove seven hours to Oakland — that's where the California DLSE (Department of Labor Standards Enforcement) office is — just trying to get information. Everything I built in this trade, I built myself."
          </div>

          <h2 style={s.h2}>No Head Start. No Shortcuts.</h2>
          <p style={s.p}>
            I didn't come from a family in the trades. Nobody handed me an apprenticeship
            connection or told me which exam prep resources actually worked. When I was trying
            to break into this industry and figure out how to get ahead, I was on my own —
            researching, asking questions, and hitting walls.
          </p>
          <p style={s.p}>
            At one point I drove seven hours to Oakland — that's where the California DLSE (Department of Labor Standards Enforcement) office is — just to try to get
            real information about passing the journeyman exam and finding apprenticeship work.
            Seven hours. Because I couldn't find what I needed any other way, and I wasn't
            willing to give up.
          </p>
          <p style={s.p}>
            That's the background I carry into everything I do in this trade. I know what it
            feels like to be the person with no connections, no family in the industry, no mentor
            pointing you in the right direction. I built my career from scratch, and I built
            West Coast Wire Pro the same way — because I couldn't find what I needed, so I made it.
          </p>

          <h2 style={s.h2}>The Problem I Couldn't Ignore</h2>
          <p style={s.p}>
            The California General Electrician exam has one of the lowest pass rates of any
            skilled trades license in the state. When I sat down to study for it, I went looking
            for resources — and found the same two or three options everyone gets pointed to.
            I tried them. They weren't bad. But they didn't work the way I needed them to work.
          </p>
          <p style={s.p}>
            I was studying by printing out papers, timing myself on my iPhone, and working
            through questions with a pen and a book. I needed to pick up questions on a 15-minute
            break between jobs, see the exact NEC article number tied to every answer, and have
            a timer running automatically — not one I had to manage on a separate device. I needed
            something built for the way a working electrician actually studies: in short bursts,
            on a phone, without a stack of papers.
          </p>
          <p style={s.p}>
            Nothing like that existed. So I built it.
          </p>

          <h2 style={s.h2}>14 Years in the Field</h2>
          <p style={s.p}>
            I've been a working electrician for 14 years — residential, commercial, and industrial.
            I know what it feels like to go from apprentice to journeyman: the gap in responsibility,
            the jump in knowledge expected of you, and the weight of knowing that one exam stands
            between you and the next level of your career.
          </p>
          <p style={s.p}>
            Along the way I worked in residential and commercial solar — installing rooftop systems
            on homes and larger commercial builds across California. Solar gave me a different lens
            on the code: you're dealing with DC systems, rapid shutdown requirements, inverter
            configurations, and utility interconnection rules that most electricians don't touch
            until they're deep into their career. That work sharpened how I think about Article 690
            and the California-specific energy code rules that show up on the journeyman exam and
            catch a lot of people off guard.
          </p>
          <p style={s.p}>
            That breadth of experience shapes every question in West Coast Wire Pro. The questions aren't written by
            someone who read the NEC once. They're written by someone who has applied it across
            residential, commercial, industrial, and solar job sites for over a decade — and who
            knows which sections actually show up in the field, and which ones trip people up on the exam.
          </p>

          <h2 style={s.h2}>4 Years Teaching the Trade</h2>
          <p style={s.p}>
            For the past four years I've been an instructor in an electrical program at a trade school,
            working with hundreds of students every semester. A lot of those students are in the same
            position I was when I started — no family connections in the industry, no one telling them
            the shortcuts or what to focus on, just determination and a willingness to put in the work.
          </p>
          <p style={s.p}>
            I didn't have mentors in this trade when I was coming up. That shaped everything about
            how I teach. I try to be the person I wish I'd had — someone who explains the why behind
            the rules, who meets students where they are, and who understands that people learn
            differently. Some need repetition. Some need to understand the reasoning before the rule
            sticks. Some need to see it timed and under pressure before it clicks.
          </p>
          <p style={s.p}>
            I hope I've been that for my students. West Coast Wire Pro is my attempt to extend that to
            every apprentice in California preparing for this exam — whether they have a mentor or not.
          </p>

          <div style={s.credBar}>
            <CredItem num="14" label="Years in the Trade" />
            <CredItem num="4" label="Years Teaching Electricians" />
            <CredItem num="100s" label="Students Per Semester" />
            <CredItem num="500" label="Questions Written" />
          </div>

          <h2 style={s.h2}>Why I Built This for California Specifically</h2>
          <p style={s.p}>
            California isn't like other states. The exam doesn't just test the NEC — it tests
            California-specific amendments, Title 8 Cal/OSHA requirements, and Title 24 energy
            code rules that most generic prep materials completely ignore. When my students asked
            me what to study, I kept having to tell them: "The resource you're using doesn't cover
            the California stuff."
          </p>
          <p style={s.p}>
            West Coast Wire Pro has an entire module — Module 11 — dedicated exclusively to
            California-specific rules. Because if you're taking the CA exam, that content is on
            the test, and it matters.
          </p>

          <h2 style={s.h2}>What West Coast Wire Pro Is</h2>
          <p style={s.p}>
            It's the study tool I wish I'd had when I was sitting at my kitchen table with printed
            papers and an iPhone timer. It's what I recommend to every student I teach who is
            preparing for the journeyman exam. It's built for the 15-minute break, the commute,
            the lunch hour — for the way real electricians actually find time to study.
          </p>
          <p style={s.p}>
            I built it for the person who doesn't have anyone in their corner telling them exactly
            what to study. The person who is figuring it out on their own, the way I had to.
            Nobody should have to drive seven hours to Oakland just to find out how to get started in this industry.
          </p>
          <p style={s.p}>
            500 questions. 12 modules. Every answer tied to the exact NEC or California code
            section. Timed mode built in. Module 1 always free.
          </p>
          <p style={s.p}>
            If you're an apprentice in California working toward your journeyman license —
            with or without a mentor, with or without connections — this was built for you.
          </p>

          {/* CTA */}
          <div style={s.ctaBlock}>
            <div style={s.ctaTitle}>Ready to Start?</div>
            <div style={s.ctaSub}>Module 1 is free. No account, no credit card.</div>
            <div style={s.ctaBtns}>
              <button style={s.btnGold} onClick={onLaunchApp}>⚡ Start Free — Module 1</button>
              <button style={s.btnGhost} onClick={() => onNavigate('demo')}>Try 5 Sample Questions</button>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <PageFooter onNavigate={onNavigate} />
    </div>
  )
}

function CredItem({ num, label }) {
  return (
    <div style={{textAlign:'center', padding:'20px 0'}}>
      <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'40px', fontWeight:'900', color:'#c8a84b', lineHeight:1}}>{num}</div>
      <div style={{fontSize:'12px', color:'#7a8a9a', textTransform:'uppercase', letterSpacing:'1px', marginTop:'6px'}}>{label}</div>
    </div>
  )
}

function AboutNav({ onHome, onLaunchApp }) {
  return (
    <nav style={{position:'sticky', top:0, zIndex:100, padding:'12px 40px', display:'flex', alignItems:'center', justifyContent:'space-between', background:'rgba(10,16,22,0.96)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(200,168,75,0.15)'}}>
      <button onClick={onHome} style={{display:'flex', alignItems:'center', gap:'8px', background:'none', border:'none', cursor:'pointer', padding:0}}>
        <span style={{fontSize:'20px'}}>⚡</span>
        <span style={{fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'18px', color:'#c8a84b', textTransform:'uppercase', letterSpacing:'1px'}}>
          West Coast <span style={{color:'#d8e0e8', fontWeight:'400'}}>Wire Pro</span>
        </span>
      </button>
      <button style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'13px', padding:'8px 18px', borderRadius:'4px', border:'none', cursor:'pointer', textTransform:'uppercase', letterSpacing:'0.5px'}}
        onClick={onLaunchApp}>Try Free ⚡</button>
    </nav>
  )
}

function PageFooter({ onNavigate }) {
  const link = (label, to) => (
    <button key={to} style={{background:'none', border:'none', color:'#4a5a6a', fontSize:'12px', cursor:'pointer', padding:0}}
      onClick={() => onNavigate(to)}>{label}</button>
  )
  return (
    <footer style={{borderTop:'1px solid rgba(200,168,75,0.1)', padding:'28px 40px', background:'#0a1016', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px'}}>
      <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'16px', color:'#c8a84b'}}>⚡ West Coast Wire Pro</div>
      <div style={{display:'flex', gap:'20px'}}>
        {link('Home', 'landing')}
        {link('Exam Info', 'exam-info')}
        {link('Demo', 'demo')}
        {link('Privacy', 'privacy')}
        {link('Terms', 'terms')}
      </div>
      <div style={{fontSize:'11px', color:'#4a5a6a'}}>© 2026 West Coast Wire Pro Training</div>
    </footer>
  )
}

const s = {
  root: { minHeight:'100vh', background:'#0a1016', color:'#d8e0e8', fontFamily:"'Georgia', serif" },
  hero: { padding:'80px 40px 64px', position:'relative', overflow:'hidden', background:'#0a1016' },
  heroGrid: { position:'absolute', inset:0, opacity:0.04, backgroundImage:'linear-gradient(rgba(200,168,75,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,1) 1px, transparent 1px)', backgroundSize:'50px 50px', pointerEvents:'none' },
  heroGlow: { position:'absolute', top:0, right:0, width:'500px', height:'500px', background:'radial-gradient(circle, rgba(200,168,75,0.06) 0%, transparent 70%)', pointerEvents:'none' },
  heroInner: { maxWidth:'760px', position:'relative', zIndex:1 },
  label: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', letterSpacing:'3px', marginBottom:'16px' },
  h1: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'clamp(36px, 5.5vw, 60px)', fontWeight:'900', textTransform:'uppercase', lineHeight:1, marginBottom:'20px', marginTop:0 },
  h1Gold: { color:'#c8a84b' },
  heroSub: { fontSize:'18px', color:'#7a8a9a', lineHeight:1.7, maxWidth:'560px', fontFamily:"'Georgia', serif", fontWeight:'normal', margin:0 },

  section: { padding:'64px 40px 80px' },
  prose: { maxWidth:'680px', margin:'0 auto' },

  pullQuote: { fontFamily:"'Georgia', serif", fontSize:'20px', fontStyle:'italic', color:'#c8a84b', lineHeight:1.6, padding:'24px 32px', borderLeft:'3px solid #c8a84b', background:'rgba(200,168,75,0.05)', marginBottom:'48px', borderRadius:'0 6px 6px 0' },

  h2: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'20px', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', letterSpacing:'0.5px', marginBottom:'16px', marginTop:'40px' },
  p: { fontSize:'16px', color:'#aabbcc', lineHeight:1.85, marginBottom:'20px', marginTop:0 },

  credBar: { display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(120px, 1fr))', gap:'1px', background:'rgba(200,168,75,0.1)', margin:'40px 0', border:'1px solid rgba(200,168,75,0.1)', borderRadius:'4px', overflow:'hidden' },

  ctaBlock: { background:'linear-gradient(135deg, #111820, #1a2535)', border:'1px solid rgba(200,168,75,0.25)', borderRadius:'8px', padding:'36px', textAlign:'center', marginTop:'48px' },
  ctaTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'24px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', marginBottom:'8px' },
  ctaSub: { fontSize:'14px', color:'#7a8a9a', marginBottom:'24px' },
  ctaBtns: { display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' },
  btnGold: { padding:'13px 28px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'15px', textTransform:'uppercase', letterSpacing:'0.5px', border:'none', borderRadius:'5px', cursor:'pointer' },
  btnGhost: { padding:'13px 24px', background:'transparent', color:'#c8a84b', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'14px', textTransform:'uppercase', letterSpacing:'0.5px', border:'1px solid rgba(200,168,75,0.3)', borderRadius:'5px', cursor:'pointer' },
}
