// LandingPage — v2
import React, { useState, useEffect } from 'react'

// ── Stripe checkout ───────────────────────────────────────────────────────────
// Calls the /api/create-checkout serverless function, which creates a
// Stripe Checkout Session and returns a redirect URL.
async function startCheckout(tier, setLoading) {
  setLoading(tier)
  try {
    const res = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tier }),
    })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url   // → Stripe hosted checkout page
    } else {
      setPayError('Payment error: ' + (data.error || 'Please try again.'))
      setLoading(null)
    }
  } catch (err) {
    setPayError('Could not reach payment server. Please try again.')
    console.error(err)
    setLoading(null)
  }
}


// ── Scroll Buttons ────────────────────────────────────────────────────────

export default function LandingPage({ onLaunchApp, onNavigate }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTier, setModalTier] = useState('standard')
  const [loading, setLoading] = useState(null)
  const [payError, setPayError] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on outside click


  const openModal = (tier) => { setModalTier(tier); setModalOpen(true) }
  const handlePurchase = (tier) => startCheckout(tier, setLoading)

  const s = styles

  return (
    <div style={s.root}>

      {/* HERO */}
      <header style={s.hero}>
        <div style={s.heroGlow} />
        <div style={s.heroGrid} />
        <div style={s.heroContent}>
          <button onClick={() => onNavigate && onNavigate('blog-post:blackrock-electrician-shortage')} style={{background:'rgba(200,168,75,0.08)',border:'1px solid rgba(200,168,75,0.3)',borderRadius:'4px',padding:'10px 16px',marginBottom:'20px',display:'inline-block',cursor:'pointer',transition:'background 0.2s'}} onMouseEnter={e=>e.currentTarget.style.background='rgba(200,168,75,0.15)'} onMouseLeave={e=>e.currentTarget.style.background='rgba(200,168,75,0.08)'}>
            <span style={{color:'#c8a84b',fontSize:'12px',fontWeight:'700',letterSpacing:'1px',textTransform:'uppercase',fontFamily:"'Courier New',monospace"}}>⚡ BlackRock just committed $100M to electrician training — demand has never been higher →</span>
          </button>
          <div style={s.heroBadge}>
            <span style={s.badgeDot} />
            California · As of 2026, the exam is based on the 2020 NEC
          </div>
          <h1 style={s.h1}>
            <div style={s.h1Line1}>Electricians Are</div>
            <div style={s.h1Line2}>Building The Future.</div>
            <div style={s.h1Line3}>Get Licensed.</div>
          </h1>
          <p style={s.heroSub}>
            The world's largest asset manager says America is running out of electricians. <strong style={{color:'#d8e0e8'}}>Your California Journeyman license is your ticket in.</strong> 462 original practice questions, every answer NEC referenced.
          </p>
          <div style={s.heroCtas}>
            <button style={s.btnPrimary} onClick={onLaunchApp}>⚡ Start Free — Modules 1 & 2</button>
            <button style={{...s.btnGhost, background:'none', border:'none', cursor:'pointer', fontFamily:'inherit'}}
              onClick={() => onLaunchApp()}>Start Free — No Account Needed →</button>
          </div>
          <div style={{marginTop:'12px'}}>
            <button onClick={() => onNavigate && onNavigate('demo')}
              style={{background:'none', border:'none', color:'#4a5a6a', fontSize:'12px', cursor:'pointer', padding:0, textDecoration:'underline'}}>
              Try a 5-question demo first →
            </button>
          </div>
          <div style={{marginTop:'4px'}}>
            <button
              onClick={() => onNavigate && onNavigate('redeem')}
              style={{background:'none', border:'1px solid rgba(200,168,75,0.4)', color:'#c8a84b', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'700', fontSize:'13px', textTransform:'uppercase', letterSpacing:'0.5px', padding:'10px 20px', borderRadius:'4px', cursor:'pointer'}}>
              Already Purchased? Restore Access →
            </button>
          </div>
          <div style={s.heroStats}>
            {[
              ['462','Practice Questions'],
              ['11','Exam Modules'],
              ['3','Difficulty Levels'],
              ['100%','NEC Referenced'],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={s.statNum}>{num}</div>
                <div style={s.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

            {/* TRUST SIGNAL */}
      <div style={{background:'rgba(200,168,75,0.04)', borderTop:'1px solid rgba(200,168,75,0.1)', borderBottom:'1px solid rgba(200,168,75,0.1)', padding:'18px clamp(16px,5vw,60px)', display:'flex', alignItems:'center', justifyContent:'center', gap:'16px', flexWrap:'wrap'}}>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={s.sectionDark2}>
        <SectionLabel>// HOW IT WORKS</SectionLabel>
        <SectionTitle>Built on how<br/>memory actually works.</SectionTitle>
        <p style={{color:'#7a8a9a', maxWidth:'520px', margin:'0 auto 40px', fontSize:'14px', lineHeight:'1.7', textAlign:'center'}}>
          Built on active recall and spaced repetition — the two study methods with the strongest evidence base in learning science.
        </p>
        <div style={s.steps}>
          {[
            ['01','🎯','Answer First, Always','Every session starts with a question, not a reading. Forcing your brain to retrieve an answer — even wrong — builds stronger memory than re-reading ever does. This is active recall, the most evidence-backed study method in cognitive psychology.'],
            ['02','⚡','Timed Like the Real Exam','4.5 hours for 110 questions is 2.5 minutes each. Timed mode trains you to work at exam pace, not study pace. Research shows that practicing under test conditions — same time pressure, same format — directly improves test performance.'],
            ['03','📖','Every Answer Cites the Code','After each question you see the exact NEC article, the reasoning, and what the code actually says. You learn where the rule lives, not just what it is. On an open-book exam, that is the difference between confirming an answer in 20 seconds and spending 3 minutes searching.'],
            ['04','🔁','Wrong Answers Come Back','Your missed questions automatically build their own review deck. Your brain forgets on a predictable curve — reviewing right before you forget resets it. This is spaced repetition, and drilling your missed questions in the final week is the highest-ROI study move you can make.'],
          ].map(([num, icon, title, text]) => (
            <div key={num} style={s.step}>
              <div style={s.stepNum}>{num}</div>
              <div style={s.stepIcon}>{icon}</div>
              <div style={s.stepTitle}>{title}</div>
              <p style={s.stepText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" style={s.sectionDark}>
        <SectionLabel>// EXAM COVERAGE</SectionLabel>
        <SectionTitle>All 11 Modules.<br/>Every Topic.</SectionTitle>
        <div style={s.modulesGrid}>
          {MODULES_DATA.map(m => (
            <div key={m.id} style={{...s.moduleCard, '--accent': m.color}}>
              <div style={{height:'2px', background: m.color, borderRadius:'1px', marginBottom:'16px'}} />
              <div style={s.modNum}>MODULE {String(m.displayId || m.id).padStart(2,'0')}</div>
              <div style={s.modName}>{m.name}</div>
              <div style={s.modArticles}>{m.articles}</div>
              <div>
                <span style={s.modCount}>{m.qCount} Questions</span>
                {(m.id === 1 || m.id === 2) && <span style={s.freeTag}>FREE</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      {payError && <div style={{background:'rgba(231,76,60,0.15)', border:'1px solid rgba(231,76,60,0.4)', color:'#e74c3c', padding:'12px 20px', borderRadius:'8px', margin:'0 clamp(20px,5vw,40px) 16px', fontSize:'14px', textAlign:'center'}}>{payError}</div>}
      <section id="pricing" style={s.sectionDark2}>
        <SectionLabel>// PRICING</SectionLabel>
        <SectionTitle>One-Time Payment.<br/>Yours Forever.</SectionTitle>
        <p style={{color:'#7a8a9a', maxWidth:'480px', marginTop:'12px', fontSize:'15px', lineHeight:'1.6'}}>
          No subscriptions. No monthly fees. Pay once, study as long as you need until you pass.
        </p>
        <div style={s.pricingGrid}>
          <PlanCard
            name="Free"
            price="$0"
            priceSub="No account required"
            features={[
              {text:'Module 1 — Definitions & General', locked:false},
              {text:'Module 2 — Wiring & Overcurrent', locked:false},
              {text:'76 practice questions (Modules 1 & 2)', locked:false},
              {text:'Detailed NEC explanations', locked:false},
              {text:'Timed mode', locked:false},
              {text:'Table 310.16 & Conduit Fill drills', locked:false},
              {text:'Set your exam date & see your countdown', locked:false},
              {text:'Modules 3–11 (386 questions)', locked:true},
              {text:'Table Mastery — 8 more NEC tables', locked:true},
              {text:'Progress saved & missed question deck', locked:true},
            ]}
            btnLabel="Start Free →"
            btnStyle="dark"
            onBuy={onLaunchApp}
          />
          <PlanCard
            name="Standard"
            price="$29.99"
            priceSub="One-time · Instant access"
            featured
            features={[
              {text:'All 11 modules — 462 questions', locked:false},
              {text:'Detailed NEC explanations', locked:false},
              {text:'Timed & untimed modes', locked:false},
              {text:'Exam Simulator (full 110Q)', locked:false},
              {text:'Diagnostic Quiz', locked:false},
              {text:'Study Planner + Progress Dashboard', locked:false},
              {text:'NEC Reference & Calculations tools', locked:false},
              {text:'Progress saved across sessions', locked:false},
              {text:'Code Sprint, Table Mastery, Missed Questions, High-Priority Drill', locked:true},
            ]}
            btnLabel="Get Standard Access ⚡"
            btnStyle="gold"
            onBuy={() => openModal('standard')}
            isLoading={loading === 'standard'}
          />
          <PlanCard
            name="Pro"
            price="$59.99"
            priceSub="One-time · Instant access"
            tagline="For the candidate who wants every available edge."
            features={[
              {text:'Everything in Standard', locked:false},
              {text:'Code Sprint — train NEC article navigation under pressure', locked:false},
              {text:'Full Table Mastery — 10 tables, 113 flashcards', locked:false},
              {text:'Missed Questions deck — spaced repetition on your wrong answers', locked:false},
              {text:'High-Priority Drill — 25 questions on the most-tested CA exam topics', locked:false},
            ]}
            btnLabel="Get Pro Access"
            btnStyle="outline"
            onBuy={() => openModal('pro')}
            isLoading={loading === 'pro'}
          />
        </div>
      </section>

      
      {/* FAQ */}
      <section id="faq" style={s.sectionDark2}>
        <SectionLabel>// FAQ</SectionLabel>
        <SectionTitle>Common Questions.</SectionTitle>
        <div style={s.faqGrid}>
          {[
            ['Which exam does this prepare me for?','The California General Electrician (Journeyman) certification exam administered by PSI Services on behalf of DLSE/DIR. Questions based on 2020 NEC and California codes (Title 8 Cal/OSHA and Title 24 CEC).'],
            ['Is this the actual exam content?','No — these are original practice questions developed from NEC 2020 content and electrical trade resources using AI, then reviewed by a licensed California journeyman electrician. The actual PSI exam questions are proprietary, owned by the DLSE, and not available to any prep company or training site anywhere.'],
            ['What NEC edition is used?','The 2020 NEC (NFPA 70), which is the current adopted edition in California.'],
            ['Do I need a codebook to use this app?','Not to study here — every answer includes the exact NEC article, the reasoning, and the relevant code language so you learn the rule, not just the letter. That said, having your own NEC 2020 is a good idea. Flipping to the actual article after drilling a question builds the book familiarity you will need on exam day, when PSI hands you an unmarked codebook and the clock starts.'],
            ['Is this a subscription?','No. One-time payment, yours forever. No recurring charges, no expiration dates. Study at your own pace until you pass.'],
            ['Does it work on my phone?','Yes. West Coast Wire Pro is fully mobile-optimized. Works on phone, tablet, and laptop.'],
          ].map(([q, a]) => (
            <div key={q} style={s.faqItem}>
              <div style={s.faqQ}>{q}</div>
              <div style={s.faqA}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={s.ctaBanner}>
        <div style={s.ctaBannerEmoji}>⚡</div>
        <h2 style={s.ctaH2}>Ready to <span style={{color:'#c8a84b'}}>Wire Up</span><br/>Your Future?</h2>
        <p style={s.ctaP}>Modules 1 & 2 + 2 Table Mastery drills — free. No account, no credit card.</p>
        <button style={s.btnPrimary} onClick={onLaunchApp}>⚡ Start Studying Free</button>
        <div style={{marginTop:'16px'}}>
          <button
            onClick={() => onNavigate && onNavigate('redeem')}
            style={{background:'none', border:'1px solid rgba(200,168,75,0.4)', color:'#c8a84b', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'700', fontSize:'13px', textTransform:'uppercase', letterSpacing:'0.5px', padding:'10px 20px', borderRadius:'4px', cursor:'pointer'}}>
            Already Purchased? Restore Access →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{...s.footer, alignItems:'flex-start', flexWrap:'wrap', gap:'32px'}}>
        <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
          <div style={s.footerLogo}>⚡ West Coast Wire Pro</div>
          <div style={{fontSize:'11px', color:'#4a5a6a', maxWidth:'200px', lineHeight:'1.5'}}>California Electrician Exam Prep by West Coast Wire Pro Training</div>
        </div>
        <div style={{display:'flex', gap:'40px', flexWrap:'wrap'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'7px'}}>
            <div style={{fontSize:'10px', color:'#c8a84b', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'2px'}}>Study Tools</div>
            {[['Am I Ready?','diagnostic'],['Full Exam Sim','simulator'],['Missed Questions','missed'],['Study Planner','planner'],['NEC Reference','nec-ref'],['Calculations','calculations'],['Progress','progress'],['Glossary','glossary']].map(([l,p]) => (
              <button key={p} style={{...s.footerLink, background:'none', border:'none', cursor:'pointer', textAlign:'left', padding:0}} onClick={() => onNavigate && onNavigate(p)}>{l}</button>
            ))}
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'7px'}}>
            <div style={{fontSize:'10px', color:'#c8a84b', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'2px'}}>Articles</div>
            {[['Blog','blog'],['Exam Guide','exam-info'],['How to Pass','study-tips'],['Exam Day Guide','exam-day'],['Electrician Salary','salary'],['Contractor vs. Electrician','contractor-vs-electrician']].map(([l,p]) => (
              <button key={p} style={{...s.footerLink, background:'none', border:'none', cursor:'pointer', textAlign:'left', padding:0}} onClick={() => onNavigate && onNavigate(p)}>{l}</button>
            ))}
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'7px'}}>
            <div style={{fontSize:'10px', color:'#c8a84b', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'2px'}}>Company</div>
            {[['About','about'],['FAQ','faq'],['Contact & Support','contact']].map(([l,p]) => (
              <button key={p} style={{...s.footerLink, background:'none', border:'none', cursor:'pointer', textAlign:'left', padding:0}} onClick={() => onNavigate && onNavigate(p)}>{l}</button>
            ))}
            <div style={{fontSize:'10px', color:'#4a5a6a', fontWeight:'700', letterSpacing:'1px', textTransform:'uppercase', margin:'8px 0 2px'}}>Legal</div>
            {[['Privacy Policy','privacy'],['Terms of Service','terms'],['Refund Policy','refund'],['Redeem Code','redeem']].map(([l,p]) => (
              <button key={p} style={{...s.footerLink, background:'none', border:'none', cursor:'pointer', fontSize:'11px', color:'#4a5a6a', textAlign:'left', padding:0}} onClick={() => onNavigate && onNavigate(p)}>{l}</button>
            ))}
          </div>
        </div>
        <div style={{width:'100%', borderTop:'1px solid rgba(200,168,75,0.08)', paddingTop:'16px'}}>
          <div style={s.footerCopy}>© 2026 West Coast Wire Pro Training. Built for California electricians.</div>
        </div>
      </footer>


      {/* PURCHASE MODAL */}
      {modalOpen && (
        <div style={s.modalOverlay} onClick={() => setModalOpen(false)}>
          <div style={s.modal} onClick={e => e.stopPropagation()}>
            <button style={s.modalClose} onClick={() => setModalOpen(false)}>✕</button>
            <div style={s.modalTitle}>
              {modalTier === 'standard' ? 'Standard Access — $29.99' : 'Pro Access — $59.99'}
            </div>
            <div style={s.modalSub}>
              One-time payment — no subscription, no expiration date.
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'12px', marginBottom:'20px'}}>
              {modalTier === 'pro' && (
                <ModalOption
                  name="Pro — Full Suite"
                  desc="Everything in Standard + Code Sprint, Table Mastery, saved progress & updates"
                  price="$59.99"
                  onClick={() => handlePurchase('pro')}
                />
              )}
              <ModalOption
                name={modalTier === 'standard' ? 'Standard — All 12 Modules' : 'Standard instead'}
                desc="462 questions · Timed mode · Score tracking"
                price="$29.99"
                onClick={() => handlePurchase('standard')}
                dim={modalTier === 'pro'}
              />
            </div>
            <div style={{fontSize:'12px', color:'#7a8a9a', textAlign:'center'}}>
              🔒 Secure checkout · Instant access · 7-day money-back guarantee
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

// ── Sub-components ──────────────────────────────────────────
function SectionLabel({ children }) {
  return <div style={{fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', letterSpacing:'3px', textTransform:'uppercase', marginBottom:'16px'}}>{children}</div>
}

function SectionTitle({ children }) {
  return <h2 style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'clamp(32px, 5vw, 54px)', fontWeight:'900', textTransform:'uppercase', lineHeight:'1', marginBottom:'12px'}}>{children}</h2>
}

function PlanCard({ name, price, priceSub, tagline, featured, features, btnLabel, btnStyle, onBuy, isLoading }) {
  const planCard = {
    background: featured ? '#1a2840' : '#131e2c',
    border: featured ? '1px solid rgba(200,168,75,0.5)' : '1px solid rgba(255,255,255,0.06)',
    borderRadius: '8px',
    padding: '36px 28px',
    position: 'relative',
    flex: '1',
    minWidth: '260px',
  }
  const btnStyles = {
    gold: {background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0f1923'},
    outline: {background:'transparent', border:'1px solid rgba(200,168,75,0.5)', color:'#c8a84b'},
    dark: {background:'#1a2840', color:'#7a8a9a'},
  }
  return (
    <div style={planCard}>
      {featured && <div style={{position:'absolute', top:'-1px', left:'50%', transform:'translateX(-50%)', background:'#c8a84b', color:'#0f1923', fontWeight:'800', fontSize:'11px', letterSpacing:'2px', textTransform:'uppercase', padding:'4px 16px', borderRadius:'0 0 4px 4px'}}>MOST POPULAR</div>}
      <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'24px', fontWeight:'900', textTransform:'uppercase', marginBottom:'8px', marginTop: featured?'16px':'0'}}>{name}</div>
      <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'52px', fontWeight:'900', color:'#c8a84b', lineHeight:'1', margin:'16px 0 4px'}}>{price}</div>
      <div style={{fontSize:'13px', color:'#7a8a9a', marginBottom: tagline ? '12px' : '24px'}}>{priceSub}</div>
      {tagline && <div style={{fontSize:'12px', color:'#c8a84b', fontStyle:'italic', marginBottom:'20px', lineHeight:'1.5'}}>{tagline}</div>}
      <ul style={{listStyle:'none', marginBottom:'28px'}}>
        {features.map((f, i) => (
          <li key={i} style={{fontSize:'13px', color: f.locked ? '#3a4a5a' : '#aabbcc', padding:'7px 0', borderBottom:'1px solid rgba(255,255,255,0.04)', display:'flex', gap:'8px', alignItems:'flex-start'}}>
            <span style={{color: f.locked ? '#3a4a5a' : '#27ae60', flexShrink:0}}>{f.locked ? '○' : '✓'}</span>
            {f.text}
          </li>
        ))}
      </ul>
      <button style={{...{padding:'14px', width:'100%', borderRadius:'6px', border:'none', cursor: isLoading ? 'wait' : 'pointer', fontWeight:'800', fontSize:'16px', textTransform:'uppercase', letterSpacing:'0.5px', fontFamily:"'Arial Black', Arial, sans-serif", opacity: isLoading ? 0.7 : 1}, ...btnStyles[btnStyle]}} onClick={isLoading ? undefined : onBuy}>
        {isLoading ? 'Connecting to Stripe...' : btnLabel}
      </button>
    </div>
  )
}

function ModalOption({ name, desc, price, onClick, dim, isLoading }) {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', background:'#1a2840', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'6px', padding:'16px 20px', cursor: isLoading ? 'wait' : 'pointer', opacity: dim ? 0.6 : 1, transition:'border-color 0.2s'}}
      onClick={isLoading ? undefined : onClick}
      onMouseEnter={e => !isLoading && (e.currentTarget.style.borderColor='#c8a84b')}
      onMouseLeave={e => e.currentTarget.style.borderColor='rgba(200,168,75,0.2)'}>
      <div>
        <div style={{fontWeight:'700', fontSize:'16px', marginBottom:'4px'}}>{name}</div>
        <div style={{fontSize:'12px', color:'#7a8a9a'}}>{desc}</div>
      </div>
      <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'22px', fontWeight:'900', color:'#c8a84b', marginLeft:'16px', flexShrink:0}}>
        {isLoading ? '⏳' : price}
      </div>
    </div>
  )
}

// ── Data ────────────────────────────────────────────────────

const MODULES_DATA = [
  {id:1, name:'Definitions & General', articles:'Articles 90, 100, 110', qCount:30, color:'#e74c3c'},
  {id:2, name:'Wiring & Overcurrent', articles:'Articles 210, 215, 220, 240', qCount:45, color:'#e67e22'},
  {id:3, name:'Services & Feeders', articles:'Articles 215, 225, 230', qCount:35, color:'#f39c12'},
  {id:4, name:'Grounding & Bonding', articles:'Article 250', qCount:40, color:'#27ae60'},
  {id:5, name:'Wiring', articles:'Articles 300–392', qCount:55, color:'#16a085'},
  {id:6, name:'Equipment General Use', articles:'Articles 400–490', qCount:35, color:'#2980b9'},
  {id:7, name:'Special Occupancies', articles:'Articles 500–590', qCount:30, color:'#8e44ad'},
  {id:8, name:'Motors & Transformers', articles:'Articles 430, 450', qCount:40, color:'#c0392b'},
  {id:9, name:'Communications & Emergency', articles:'Articles 700–820', qCount:25, color:'#d35400'},
  {id:10, name:'Calculations & Trade Math', articles:'Chapter 9, Table 310.16', qCount:60, color:'#1abc9c'},
  {id:12, name:'Safety & Maintenance', articles:'NFPA 70E, Cal/OSHA', qCount:55, color:'#2c3e50', displayId:11},
]

// ── Styles ──────────────────────────────────────────────────

const styles = {
  root: {fontFamily:"'Segoe UI', Arial, sans-serif", background:'#0a1016', color:'#d8e0e8', overflowX:'hidden'},
  bolt: {fontSize:'22px'},
  wordmark: {fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'20px', color:'#c8a84b', letterSpacing:'1px', textTransform:'uppercase'},
  wordmarkThin: {color:'#d8e0e8', fontWeight:'400'},
  navBtn: {background:'none', border:'none', cursor:'pointer', color:'#7a8a9a', fontSize:'13px', fontWeight:'500', letterSpacing:'0.5px', textTransform:'uppercase', padding:0, transition:'color 0.2s'},
  hero: {minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'120px clamp(20px,5vw,40px) 80px', position:'relative', overflow:'hidden', background:'#0a1016'},
  heroGlow: {position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)', width:'700px', height:'700px', background:'radial-gradient(circle, rgba(200,168,75,0.07) 0%, transparent 70%)', pointerEvents:'none'},
  heroGrid: {position:'absolute', inset:0, opacity:0.05, backgroundImage:'linear-gradient(rgba(200,168,75,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,1) 1px, transparent 1px)', backgroundSize:'50px 50px', pointerEvents:'none'},
  heroContent: {maxWidth:'880px', position:'relative', zIndex:1},
  heroBadge: {display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(200,168,75,0.1)', border:'1px solid rgba(200,168,75,0.35)', color:'#c8a84b', fontFamily:"'Courier New', monospace", fontSize:'12px', padding:'6px 14px', borderRadius:'2px', marginBottom:'28px', letterSpacing:'0.5px'},
  badgeDot: {width:'6px', height:'6px', background:'#27ae60', borderRadius:'50%', boxShadow:'0 0 6px #27ae60'},
  h1: {fontFamily:"'Arial Black', Arial, sans-serif", lineHeight:'0.9', textTransform:'uppercase', letterSpacing:'-1px', marginBottom:'8px'},
  h1Line1: {fontSize:'clamp(38px, 9vw, 108px)', fontWeight:'900', color:'#d8e0e8'},
  h1Line2: {fontSize:'clamp(38px, 9vw, 108px)', fontWeight:'900', color:'#c8a84b'},
  h1Line3: {fontSize:'clamp(38px, 9vw, 108px)', fontWeight:'900', color:'transparent', WebkitTextStroke:'1px rgba(200,168,75,0.35)'},
  heroSub: {fontSize:'clamp(15px, 1.8vw, 19px)', color:'#7a8a9a', maxWidth:'540px', lineHeight:'1.7', margin:'28px 0 36px', fontWeight:'300'},
  heroCtas: {display:'flex', gap:'16px', alignItems:'center', flexWrap:'wrap'},
  btnPrimary: {display:'inline-flex', alignItems:'center', gap:'8px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'17px', fontWeight:'900', letterSpacing:'0.5px', textTransform:'uppercase', padding:'15px 32px', borderRadius:'4px', border:'none', cursor:'pointer', boxShadow:'0 0 30px rgba(200,168,75,0.2)'},
  btnGhost: {color:'#7a8a9a', fontSize:'14px', textDecoration:'none', padding:'15px 0'},
  heroStats: {display:'flex', gap:'clamp(20px,6vw,44px)', marginTop:'60px', paddingTop:'36px', borderTop:'1px solid rgba(200,168,75,0.12)', flexWrap:'wrap'},
  statNum: {fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'40px', fontWeight:'900', color:'#c8a84b', lineHeight:'1'},
  statLabel: {fontSize:'11px', color:'#7a8a9a', textTransform:'uppercase', letterSpacing:'1px', marginTop:'4px'},
  sectionDark: {padding:'80px clamp(20px,5vw,40px)', background:'#0a1016'},
  sectionDark2: {padding:'80px clamp(20px,5vw,40px)', background:'#111820', borderTop:'1px solid rgba(200,168,75,0.08)', borderBottom:'1px solid rgba(200,168,75,0.08)'},
  steps: {display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))', gap:'1px', marginTop:'50px', background:'rgba(200,168,75,0.08)'},
  step: {background:'#111820', padding:'36px 28px', transition:'background 0.2s'},
  stepNum: {fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'48px', fontWeight:'900', color:'rgba(200,168,75,0.5)', lineHeight:'1', marginBottom:'12px', letterSpacing:'-2px'},
  stepIcon: {fontSize:'26px', marginBottom:'12px'},
  stepTitle: {fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'20px', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', marginBottom:'8px'},
  stepText: {fontSize:'13px', color:'#7a8a9a', lineHeight:'1.6'},
  modulesGrid: {display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(230px,1fr))', gap:'1px', background:'rgba(200,168,75,0.06)', marginTop:'50px', border:'1px solid rgba(200,168,75,0.06)'},
  moduleCard: {background:'#0a1016', padding:'24px 20px', transition:'background 0.2s'},
  modNum: {fontFamily:"'Courier New', monospace", fontSize:'10px', color:'#7a8a9a', letterSpacing:'2px', marginBottom:'6px'},
  modName: {fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'17px', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', marginBottom:'5px', lineHeight:'1.2'},
  modArticles: {fontSize:'11px', color:'#7a8a9a', marginBottom:'10px'},
  modCount: {display:'inline-block', background:'rgba(200,168,75,0.1)', color:'#c8a84b', fontFamily:"'Courier New', monospace", fontSize:'10px', padding:'3px 8px', borderRadius:'2px'},
  freeTag: {display:'inline-block', background:'rgba(39,174,96,0.12)', color:'#27ae60', fontFamily:"'Courier New', monospace", fontSize:'10px', padding:'2px 8px', borderRadius:'2px', marginLeft:'6px', border:'1px solid rgba(39,174,96,0.25)'},
  pricingGrid: {display:'flex', gap:'2px', marginTop:'50px', flexWrap:'wrap'},
  proofBar: {display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap', gap:'44px', padding:'44px', background:'#111820', border:'1px solid rgba(200,168,75,0.1)', borderRadius:'4px', marginTop:'50px'},
  proofNum: {fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'44px', fontWeight:'900', color:'#c8a84b', textAlign:'center'},
  proofLabel: {fontSize:'11px', color:'#7a8a9a', textTransform:'uppercase', letterSpacing:'1px', marginTop:'4px', textAlign:'center'},
  tQuote: {fontSize:'14px', lineHeight:'1.7', color:'#d8e0e8', marginBottom:'16px', fontStyle:'italic'},
  tName: {fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', letterSpacing:'1px'},
  tRole: {fontSize:'11px', color:'#7a8a9a', marginTop:'3px'},
  faqGrid: {display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px,1fr))', gap:'1px', background:'rgba(200,168,75,0.06)', marginTop:'50px'},
  faqItem: {background:'#111820', padding:'28px'},
  faqQ: {fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'17px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', marginBottom:'10px'},
  faqA: {fontSize:'13px', color:'#7a8a9a', lineHeight:'1.7'},
  ctaBanner: {background:'linear-gradient(135deg,#111820,#1a2535)', borderTop:'2px solid #c8a84b', padding:'80px clamp(20px,5vw,40px)', textAlign:'center', position:'relative', overflow:'hidden'},
  ctaBannerEmoji: {position:'absolute', fontSize:'260px', opacity:'0.03', top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none'},
  ctaH2: {fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'clamp(32px, 6vw, 68px)', fontWeight:'900', textTransform:'uppercase', lineHeight:'1', marginBottom:'16px'},
  ctaP: {fontSize:'17px', color:'#7a8a9a', maxWidth:'480px', margin:'0 auto 32px', lineHeight:'1.6'},
  footer: {background:'#0a1016', borderTop:'1px solid rgba(200,168,75,0.1)', padding:'32px clamp(20px,5vw,40px)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px'},
  footerLogo: {fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'16px', color:'#c8a84b'},
  footerLinks: {display:'flex', gap:'20px', alignItems:'center'},
  footerLink: {fontSize:'12px', color:'#7a8a9a', textDecoration:'none'},
  footerCopy: {fontSize:'11px', color:'#4a5a6a'},
  modalOverlay: {position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', zIndex:500, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'},
  modal: {background:'#111820', border:'1px solid rgba(200,168,75,0.3)', borderRadius:'8px', padding:'36px', maxWidth:'480px', width:'100%', position:'relative'},
  modalClose: {position:'absolute', top:'14px', right:'18px', background:'none', border:'none', color:'#7a8a9a', fontSize:'22px', cursor:'pointer'},
  modalTitle: {fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'24px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', marginBottom:'6px'},
  modalSub: {fontSize:'13px', color:'#7a8a9a', marginBottom:'24px', lineHeight:'1.6'},
}
