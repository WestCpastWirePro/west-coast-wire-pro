import React, { useState } from 'react'

export default function AboutPage({ onHome, onLaunchApp, onNavigate }) {
  return (
    <div style={s.root}>

      {/* HERO */}
      <header style={s.hero}>
        <div style={s.heroGrid} />
        <div style={s.heroGlow} />
        <div style={s.heroInner}>
          <div style={s.label}>// THE METHOD</div>
          <h1 style={s.h1}>
            Why This Works.<br />
            <span style={s.h1Gold}>The Science Behind It.</span>
          </h1>
          <p style={s.heroSub}>
            West Coast Wire Pro is built around how memory actually works under pressure — active recall, spaced repetition, and exam simulation. The same methods top-stakes test-takers in medicine and law have used for decades, applied to the NEC.
          </p>
        </div>
      </header>


      {/* SECTION NAV */}
      <div style={{position:'sticky', top:0, zIndex:10, background:'rgba(10,16,22,0.97)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(200,168,75,0.1)', display:'flex', justifyContent:'center', gap:0}}>
        <button onClick={() => document.getElementById('method')?.scrollIntoView({behavior:'smooth'})} style={{padding:'14px 28px', fontSize:'12px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'1px', color:'#c8a84b', background:'none', border:'none', borderBottom:'2px solid #c8a84b', cursor:'pointer'}}>The Method</button>
        <button onClick={() => document.getElementById('story')?.scrollIntoView({behavior:'smooth'})} style={{padding:'14px 28px', fontSize:'12px', fontWeight:'700', textTransform:'uppercase', letterSpacing:'1px', color:'#7a8a9a', background:'none', border:'none', borderBottom:'2px solid transparent', cursor:'pointer'}}>Our Story</button>
      </div>

      {/* SCIENCE */}
      <section id="method" style={s.section}>
        <div style={s.prose}>

          <h2 style={s.h2}>The Science Behind How This Works</h2>
          <p style={s.p}>
            West Coast Wire Pro is built around what memory research actually says about how people retain information under pressure — not how it feels like you should study.
          </p>

          <h3 style={{...s.h2, fontSize:'17px', color:'#c8a84b', marginTop:'24px'}}>Active Recall Beats Passive Review</h3>
          <p style={s.p}>
            Reading your notes feels productive. Re-reading a chapter feels like studying. But memory research — going back to Roediger and Karpicke's 2006 landmark study and replicated dozens of times since — shows that <strong style={{color:'#d8e0e8'}}>the act of retrieving information is what builds durable memory</strong>, not the act of reviewing it. Every time you force your brain to recall an answer before seeing it, you strengthen the neural pathway. Every time you just re-read, you don't.
          </p>
          <p style={s.p}>
            This is why every feature in West Coast Wire Pro is built around answering, not reading. You don't browse explanations — you attempt a question, commit to an answer, then see whether you were right and why. That sequence — attempt, feedback, explanation — is the core of spaced retrieval practice, the most evidence-backed study method in cognitive psychology.
          </p>

          <h3 style={{...s.h2, fontSize:'17px', color:'#c8a84b', marginTop:'24px'}}>Spaced Repetition and the Missed Questions Deck</h3>
          <p style={s.p}>
            Your brain forgets things on a predictable curve — steeply at first, then more gradually over time. Reviewing material right before you forget it interrupts that curve and resets the clock. This is spaced repetition, and it's why the Missed Questions deck is one of the most powerful tools in the app. It automatically resurfaces the exact questions you got wrong, targeting the specific gaps in your knowledge rather than making you re-drill material you already know.
          </p>

          <h3 style={{...s.h2, fontSize:'17px', color:'#c8a84b', marginTop:'24px'}}>Spatial Memory and the Open-Book Exam</h3>
          <p style={s.p}>
            The CA Journeyman exam is open book — but the book only helps you if you know where to look. Research on spatial memory shows that people who regularly navigate a physical reference (like a codebook) build a mental map of where information lives. They stop "reading" and start "navigating." This is why the <strong style={{color:'#d8e0e8'}}>Code Sprint drill</strong> exists: it trains your brain to associate topics with NEC chapter and article locations under time pressure, building exactly the kind of book-navigation speed the exam rewards.
          </p>

          <h3 style={{...s.h2, fontSize:'17px', color:'#c8a84b', marginTop:'24px'}}>Desirable Difficulty</h3>
          <p style={s.p}>
            Cognitive psychologist Robert Bjork introduced the concept of "desirable difficulties" — the counterintuitive finding that <strong style={{color:'#d8e0e8'}}>studying that feels harder in the moment produces stronger long-term retention</strong>. Timed questions feel harder than untimed ones. Mixed-module drilling feels harder than blocking one topic at a time. Both of these are features, not bugs. The discomfort of not immediately knowing the answer is the signal that learning is actually happening.
          </p>
          <p style={s.p}>
            This is why the app offers timed mode, difficulty filtering, and mixed-module drilling — not to make studying more stressful, but because the research is clear: harder retrieval practice produces better exam performance.
          </p>

          <h3 style={{...s.h2, fontSize:'17px', color:'#c8a84b', marginTop:'24px'}}>Test-Taking Simulation</h3>
          <p style={s.p}>
            One of the most consistent findings in learning science is that <strong style={{color:'#d8e0e8'}}>practicing under conditions that match the test improves performance on the test</strong>. This is called encoding specificity. The CA Journeyman exam is timed, open book, and computer-based. The Exam Simulator replicates all three: 110 questions, a running 4.5-hour clock, no explanations during the exam (just like the real thing), and your full NEC sitting beside you. Doing at least two full simulations before your exam date isn't just helpful — it's one of the highest-ROI things you can do in the final two weeks.
          </p>

          <div style={{background:'rgba(200,168,75,0.06)', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'8px', padding:'20px 20px', marginTop:'24px', marginBottom:'8px'}}>
            <div style={{fontSize:'13px', fontWeight:'700', color:'#c8a84b', marginBottom:'12px', textTransform:'uppercase', letterSpacing:'0.5px'}}>The Bottom Line</div>
            <p style={{...s.p, margin:0, lineHeight:'1.8'}}>
              Most study tools are built around content delivery. West Coast Wire Pro is built around <strong style={{color:'#d8e0e8'}}>retrieval practice, spaced repetition, desirable difficulty, and exam simulation</strong> — the four interventions with the strongest evidence base in learning science. Not because it sounds good, but because these are the methods that produce the highest pass rates, and passing this exam is the only outcome that matters.
            </p>
          </div>

          <div style={{height:'1px', background:'rgba(200,168,75,0.15)', margin:'40px 0'}} />
          <p style={{...s.p, color:'#c8a84b', fontWeight:'700', fontSize:'15px'}}>
            Who built it — and why.
          </p>

        </div>
      </section>

      {/* ORIGIN STORY */}
      <section id="story" style={s.section}>
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
            The DLSE office is in Oakland — seven hours from where I was living. I made that drive because I couldn't find the information I needed anywhere else, and giving up wasn't an option.
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
            skilled trades license in the state. There are study resources out there — some of
            them solid, well-established tools. But most are built around a particular kind of
            studying: sit-down, scheduled, organized. A textbook. A printed practice set.
            A dedicated block of time at a desk.
          </p>
          <p style={s.p}>
            That's not how most working electricians actually find time to study. I was picking
            up 15 minutes between jobs. Studying on my phone during lunch in a truck. I needed
            a built-in timer that started automatically, not one I had to manage on a separate
            device. I needed to see the exact NEC article behind every answer right there on the
            screen — not look it up in a book afterward. I needed to drill the NEC tables that
            show up on the exam until they were second nature, with a tool that tracked where
            I was weak. I needed a calculator that handled the trade math without switching apps.
          </p>
          <p style={s.p}>
            I needed something that worked the way my actual life worked. So I built it.
          </p>

          <h2 style={s.h2}>14 Years in the Field</h2>
          <p style={s.p}>
            I've been a working electrician for 14 years — residential, commercial, and industrial.
            I know what it feels like to go from apprentice to journeyman: the gap in responsibility,
            the jump in knowledge expected of you, and the weight of knowing that one exam stands
            between you and the next level of your career.
          </p>

          <p style={s.p}>
            That breadth of experience shapes every question in West Coast Wire Pro. Every question is
            NEC-referenced and exam-style — built to reflect what actually shows up on the California
            Journeyman exam. The focus throughout is on the sections that trip people up in the field
            and on the test, drawn from over a decade of hands-on electrical work.
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
            <CredItem num="462" label="Practice Questions" />
          </div>



          <h2 style={s.h2}>What West Coast Wire Pro Is</h2>
          <p style={s.p}>
            It's the study tool I wish I'd had when I was coming up in this trade. It lives on
            your phone. It runs in the time you actually have — a break between pulls, a commute,
            ten minutes before a job starts. No setup, no papers, no separate timer.
          </p>
          <p style={s.p}>
            Every question is tied to the exact NEC or California code section. The NEC tables
            that show up on the exam have their own dedicated flashcard module so you can drill
            them until they're automatic. The calculations tool handles the trade math the exam
            tests. Timed mode is built in. Your missed questions build their own review deck
            automatically. You can see by module exactly where you're strong and where you need
            more reps.
          </p>
          <p style={s.p}>
            It's what I recommend to every student I teach who is preparing for the journeyman
            exam. It's built for the person who is figuring it out on their own — with or without
            a mentor, with or without connections — and needs a tool that fits into a working
            electrician's life, not the other way around.
          </p>
          <p style={s.p}>
            462 questions. 11 modules. Modules 1 & 2 + 2 Table Mastery drills always free.
          </p>

          {/* CTA */}
          <div style={s.ctaBlock}>
            <div style={s.ctaTitle}>Ready to Start?</div>
            <div style={s.ctaSub}>Modules 1 & 2 + 2 Table Mastery drills — free. No account, no credit card.</div>
            <div style={s.ctaBtns}>
              <button style={s.btnGold} onClick={onLaunchApp}>⚡ Start Free — Modules 1 & 2</button>
              
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

function SiteNav({ onHome, onLaunchApp, onNavigate }) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  React.useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [menuOpen])
  const nav = (label, page) => (
    <button key={page} style={{display:'block',width:'100%',background:'none',border:'none',textAlign:'left',padding:'10px 4px',color:'#aabbcc',fontSize:'14px',cursor:'pointer',borderBottom:'1px solid rgba(255,255,255,0.04)',fontFamily:"'Segoe UI',Arial,sans-serif"}}
      onMouseEnter={e=>e.currentTarget.style.color='#c8a84b'} onMouseLeave={e=>e.currentTarget.style.color='#aabbcc'}
      onClick={() => { onNavigate && onNavigate(page); setMenuOpen(false) }}>{label}</button>
  )
  return (
    <>
      <style>{`
        @media (max-width: 768px) { .wcwp-snav-hamburger { display: flex !important; } }
        .wcwp-snav-hamburger { display: none; align-items: center; gap: 10px; }
        .wcwp-snav-bar { display:block; width:22px; height:2px; background:#c8a84b; border-radius:2px; transition:all 0.25s; }
        .wcwp-snav-menu-item:hover { color: #c8a84b !important; background: rgba(200,168,75,0.06) !important; }
      `}</style>
      <nav style={{position:'sticky',top:0,zIndex:200,padding:'10px clamp(16px,4vw,40px)',display:'flex',alignItems:'center',justifyContent:'space-between',background:'rgba(10,16,22,0.97)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(200,168,75,0.15)'}}>
        <button onClick={onHome} style={{display:'flex',alignItems:'center',background:'none',border:'none',cursor:'pointer',padding:0}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" style={{height:'34px',width:'auto'}}>
            <defs>
              <linearGradient id="snbolt" x1="0%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" style={{stopColor:'#FFD84D'}}/>
                <stop offset="60%" style={{stopColor:'#C9A227'}}/>
                <stop offset="100%" style={{stopColor:'#9B7A1A'}}/>
              </linearGradient>
              <linearGradient id="snline" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#C9A227',stopOpacity:0}}/>
                <stop offset="20%" style={{stopColor:'#C9A227'}}/>
                <stop offset="80%" style={{stopColor:'#C9A227'}}/>
                <stop offset="100%" style={{stopColor:'#C9A227',stopOpacity:0}}/>
              </linearGradient>
            </defs>
            <rect x="32" y="38" width="3" height="124" fill="#C9A227" opacity="0.9" rx="1.5"/>
            <g transform="translate(52,52)">
              <polygon points="28,0 14,42 26,42 18,96 50,38 36,38 52,0" fill="#C9A227" opacity="0.15"/>
              <polygon points="26,2 12,44 24,44 16,94 48,36 34,36 50,2" fill="url(#snbolt)"/>
              <polygon points="26,2 20,22 30,22 26,2" fill="#FFE88A" opacity="0.6"/>
            </g>
            <line x1="118" y1="80" x2="135" y2="80" stroke="#C9A227" strokeWidth="1" opacity="0.5"/>
            <line x1="118" y1="120" x2="135" y2="120" stroke="#C9A227" strokeWidth="1" opacity="0.5"/>
            <g transform="translate(148,0)">
              <text x="0" y="82" fontFamily="'Arial Black',Arial,sans-serif" fontSize="18" fontWeight="900" letterSpacing="8" fill="#CCCCCC">WEST COAST</text>
              <text x="-2" y="128" fontFamily="'Arial Black',Arial,sans-serif" fontSize="52" fontWeight="900" letterSpacing="2" fill="#FFFFFF">WIRE <tspan fill="#C9A227">PRO</tspan></text>
              <rect x="0" y="138" width="358" height="2" fill="url(#snline)" rx="1"/>
              <text x="0" y="163" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="400" letterSpacing="10" fill="#C9A227">TRAINING</text>
            </g>
          </svg>
        </button>
        <div className="wcwp-snav-hamburger" onClick={e=>e.stopPropagation()}>
          <button style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)',color:'#0a1016',fontFamily:"'Arial Black',Arial,sans-serif",fontWeight:'900',fontSize:'12px',padding:'7px 14px',borderRadius:'4px',border:'none',cursor:'pointer',textTransform:'uppercase',letterSpacing:'0.5px'}} onClick={onLaunchApp}>Try Free ⚡</button>
          <button style={{background:'none',border:'none',cursor:'pointer',padding:'4px',display:'flex',flexDirection:'column',gap:'5px'}} onClick={e=>{e.stopPropagation();setMenuOpen(o=>!o)}} aria-label="Menu">
            <span className="wcwp-snav-bar" style={menuOpen?{transform:'rotate(45deg) translate(5px,5px)'}:{}}/>
            <span className="wcwp-snav-bar" style={menuOpen?{opacity:0}:{}}/>
            <span className="wcwp-snav-bar" style={menuOpen?{transform:'rotate(-45deg) translate(5px,-5px)'}:{}}/>
          </button>
        </div>
        <button style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)',color:'#0a1016',fontFamily:"'Arial Black',Arial,sans-serif",fontWeight:'900',fontSize:'13px',padding:'8px 18px',borderRadius:'4px',border:'none',cursor:'pointer',textTransform:'uppercase',letterSpacing:'0.5px'}} onClick={onLaunchApp}>Try Free ⚡</button>
      </nav>
      {menuOpen && (
        <div style={{position:'fixed',top:'58px',left:0,right:0,zIndex:199,background:'#0d1520',borderBottom:'2px solid #c8a84b',boxShadow:'0 8px 32px rgba(0,0,0,0.7)',maxHeight:'calc(100vh - 58px)',overflowY:'auto'}} onClick={e=>e.stopPropagation()}>
          <div style={{padding:'12px 20px 4px'}}>
            <div style={{fontFamily:"'Courier New',monospace",fontSize:'10px',color:'#c8a84b',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'8px',paddingLeft:'4px'}}>⚡ Study App</div>
            {[['Start Studying — Free','landing'],['Start Free — No Account Needed','landing'],['Am I Ready? Diagnostic','diagnostic'],['Full Exam Simulator','simulator'],['Missed Questions Review','missed'],['Study Planner','planner'],['NEC Reference Guide','nec-ref'],['Calculations Helper','calculations'],['Progress Dashboard','progress'],['Glossary','glossary']].map(([l,p])=>nav(l,p))}
          </div>
          <div style={{height:'1px',background:'rgba(200,168,75,0.15)',margin:'4px 20px'}}/>
          <div style={{padding:'12px 20px 4px'}}>
            <div style={{fontFamily:"'Courier New',monospace",fontSize:'10px',color:'#c8a84b',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'8px',paddingLeft:'4px'}}>📋 Exam Resources</div>
            {[['CA Journeyman Exam Guide','exam-info'],['How to Pass — Study Tips','study-tips'],['Exam Day Guide','exam-day'],['Electrician Salary in CA','salary'],['Contractor vs. Electrician','contractor-vs-electrician']].map(([l,p])=>nav(l,p))}
          </div>
          <div style={{height:'1px',background:'rgba(200,168,75,0.15)',margin:'4px 20px'}}/>
          <div style={{padding:'12px 20px 4px'}}>
            <div style={{fontFamily:"'Courier New',monospace",fontSize:'10px',color:'#c8a84b',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'8px',paddingLeft:'4px'}}>🔧 Company</div>
            {[['About','about'],['FAQ','faq'],['Contact & Support','contact']].map(([l,p])=>nav(l,p))}
          </div>
          <div style={{padding:'16px 20px'}}>
            <button style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)',color:'#0a1016',fontFamily:"'Arial Black',Arial,sans-serif",fontWeight:'900',fontSize:'15px',padding:'14px',borderRadius:'6px',border:'none',cursor:'pointer',textTransform:'uppercase',letterSpacing:'0.5px',width:'100%'}} onClick={()=>{onLaunchApp();setMenuOpen(false)}}>⚡ Start Studying Free</button>
          </div>
        </div>
      )}
    </>
  )
}

function PageFooter({ onNavigate }) {
  const link = (label, to) => (
    <button key={to} style={{background:'none', border:'none', color:'#4a5a6a', fontSize:'12px', cursor:'pointer', padding:0}}
      onClick={() => onNavigate(to)}>{label}</button>
  )
  return (
    <footer style={{borderTop:'1px solid rgba(200,168,75,0.1)', padding:'28px clamp(16px,4vw,40px)', background:'#0a1016', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px'}}>
      <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'16px', color:'#c8a84b'}}>⚡ West Coast Wire Pro</div>
      <div style={{display:'flex', gap:'20px'}}>
        {link('Home', 'landing')}
        {link('Exam Info', 'exam-info')}
        {link('Start Free', 'landing')}
        {link('Privacy', 'privacy')}
        {link('Terms', 'terms')}
      </div>
      <div style={{fontSize:'11px', color:'#4a5a6a'}}>© 2026 West Coast Wire Pro Training</div>
    </footer>
  )
}

const s = {
  root: { minHeight:'100vh', background:'#0a1016', color:'#d8e0e8', fontFamily:"'Georgia', serif" },
  hero: { padding:'80px clamp(20px,5vw,40px) 64px', position:'relative', overflow:'hidden', background:'#0a1016' },
  heroGrid: { position:'absolute', inset:0, opacity:0.04, backgroundImage:'linear-gradient(rgba(200,168,75,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,1) 1px, transparent 1px)', backgroundSize:'50px 50px', pointerEvents:'none' },
  heroGlow: { position:'absolute', top:0, right:0, width:'500px', height:'500px', background:'radial-gradient(circle, rgba(200,168,75,0.06) 0%, transparent 70%)', pointerEvents:'none' },
  heroInner: { maxWidth:'760px', position:'relative', zIndex:1 },
  label: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', letterSpacing:'3px', marginBottom:'16px' },
  h1: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'clamp(36px, 5.5vw, 60px)', fontWeight:'900', textTransform:'uppercase', lineHeight:1, marginBottom:'20px', marginTop:0 },
  h1Gold: { color:'#c8a84b' },
  heroSub: { fontSize:'18px', color:'#7a8a9a', lineHeight:1.7, maxWidth:'560px', fontFamily:"'Georgia', serif", fontWeight:'normal', margin:0 },

  section: { padding:'64px clamp(20px,5vw,40px) 80px' },
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
