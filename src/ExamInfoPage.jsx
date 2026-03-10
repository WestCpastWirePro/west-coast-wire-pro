import React from 'react'
export default function ExamInfoPage({ onLaunchApp, onNavigate }) {
  const [isMobile, setIsMobile] = React.useState(typeof window !== "undefined" && window.innerWidth < 768)
  React.useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", h)
    return () => window.removeEventListener("resize", h)
  }, [])
  return (
    <div style={s.root}>
      <SiteNav onNavigate={onNavigate} onHome={() => onNavigate('landing')} onLaunchApp={onLaunchApp} />

      {/* HERO */}
      <header style={s.hero}>
        <div style={s.heroGrid} />
        <div style={s.heroInner}>
          <div style={s.label}>// EXAM GUIDE</div>
          <h1 style={s.h1}>
            California General Electrician<br />
            <span style={s.h1Gold}>(Journeyman) Exam</span>
          </h1>
          <p style={s.heroSub}>
            Everything you need to know before you sit for the exam —
            eligibility, format, what's tested, pass rates, and how to prepare.
          </p>
          <div style={s.heroBreadcrumb}>
            <span style={s.crumb}>California DIR / DLSE</span>
            <span style={s.crumbDot}>·</span>
            <span style={s.crumb}>PSI Services</span>
            <span style={s.crumbDot}>·</span>
            <span style={s.crumb}>2020 NEC</span>
            <span style={s.crumbDot}>·</span>
            <span style={s.crumb}>Updated 2026</span>
          </div>
        </div>
      </header>

      {/* QUICK FACTS */}
      <div style={s.quickFacts}>
        {[
          ['100', 'Questions'],
          ['4.5 hrs', 'Time Limit'],
          ['70%', 'Passing Score'],
          ['$175', 'Exam Fee (approx)'],
          ['PSI', 'Testing Provider'],
          ['Low', 'Pass Rate'],
        ].map(([val, label]) => (
          <div key={label} style={s.factItem}>
            <div style={s.factVal}>{val}</div>
            <div style={s.factLabel}>{label}</div>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div style={{...s.layout, flexDirection: isMobile ? "column" : "row", padding: isMobile ? "32px 20px 60px" : "52px 40px"}}>
        <main style={{...s.main, width: isMobile ? "100%" : undefined}}>

          {/* TOC */}
          <div style={s.toc}>
            <div style={s.tocTitle}>On This Page</div>
            {[
              ['#overview',      'What Is the Exam?'],
              ['#eligibility',   'Eligibility Requirements'],
              ['#format',        'Exam Format & Structure'],
              ['#topics',        'What Topics Are Tested'],
              ['#codes',         'Which Codes to Study'],
              ['#passrate',      'Pass Rate & Difficulty'],
              ['#apply',         'How to Apply'],

              ['#prep',          'How to Prepare'],
            ].map(([href, text]) => (
              <a key={href} href={href} style={s.tocLink}>{text}</a>
            ))}
          </div>

          <Article>

            <Section id="overview" title="What Is the California General Electrician Exam?">
              <P>
                The California General Electrician exam — commonly called the Journeyman exam —
                is a licensing examination required by the California Department of Industrial
                Relations (DIR) Division of Labor Standards Enforcement (DLSE) for electricians
                seeking to work as a General Electrician (Journeyman) in the state.
              </P>
              <P>
                Passing the exam is one of two requirements for licensure — the other being
                documented work experience (8,000 hours as an apprentice or equivalent). The
                exam itself is administered by PSI Services at testing centers throughout California.
              </P>
              <CallOut>
                The General Electrician (C-10) license is required to work unsupervised on
                electrical systems in California. Without it, electricians must work under the
                supervision of a licensed journeyman or contractor.
              </CallOut>
            </Section>

            <Section id="eligibility" title="Eligibility Requirements">
              <P>To be eligible to sit for the California General Electrician exam, you must:</P>
              <Ul items={[
                '8,000 hours of on-the-job training as an electrical apprentice, OR completion of a state-approved apprenticeship program',
                'Be at least 18 years of age',
                'Submit a completed application to the DLSE with supporting documentation of your work experience',
                'Pay the applicable application and examination fees',
              ]} />
              <P>
                Work experience must be documented with employer verifications, pay stubs,
                W-2s, or similar records. The DLSE reviews applications and will notify you
                when you are approved to schedule your exam through PSI.
              </P>
              <P>
                Apprenticeship program graduates from a state-certified program may have their
                hours automatically verified through their program. Check with your JATC or
                program administrator.
              </P>
            </Section>

            <Section id="format" title="Exam Format & Structure">
              <P>
                The California General Electrician exam consists of <strong style={s.strong}>110 multiple-choice questions</strong> with
                a time limit of <strong style={s.strong}>4.5 hours (270 minutes)</strong>. All questions have four answer choices.
                There is no penalty for guessing — unanswered questions count as wrong, so
                always fill in an answer.
              </P>
              <P>
                The exam is computer-based at PSI testing centers. You will be seated at a
                testing station and work through questions on screen. The exam is open book —
                PSI provides an unmarked NEC codebook at the testing center. You cannot bring
                your own. No personal notes, annotations, or tabs are permitted.
              </P>
              <P>
                A passing score is <strong style={s.strong}>70% or higher</strong> (77 correct out of 110 questions).
                You will receive your result immediately upon finishing at the testing center.
                If you do not pass, you may retake the exam after a waiting period and payment
                of another examination fee.
              </P>
              <CallOut>
                The 4.5-hour time limit works out to about 2.5 minutes per question. Most
                test-takers report the time is sufficient if you've prepared well — the real
                challenge is knowledge, not speed.
              </CallOut>
            </Section>

            <Section id="topics" title="What Topics Are Tested">
              <P>
                The exam covers the full scope of the National Electrical Code (NEC) as adopted
                in California, plus California-specific amendments and safety regulations.
                Topics are roughly distributed across these major areas:
              </P>

              <div style={s.topicsGrid}>
                {[
                  {mod:'Definitions & General Requirements', arts:'Articles 90, 100, 110', note:'Definitions, working clearances, equipment approval'},
                  {mod:'Wiring & Overcurrent Protection', arts:'Articles 210, 215, 220, 240', note:'Branch circuits, feeders, load calculations, GFCI/AFCI'},
                  {mod:'Services & Feeders', arts:'Articles 215, 225, 230', note:'Service entrance, service equipment, disconnects'},
                  {mod:'Grounding & Bonding', arts:'Article 250', note:'Grounding electrodes, bonding, EGC sizing — heavily tested'},
                  {mod:'Wiring & Materials', arts:'Articles 300–392', note:'Conduit, cable methods, raceways, boxes'},
                  {mod:'Equipment for General Use', arts:'Articles 400–490', note:'Cords, switches, receptacles, panelboards'},
                  {mod:'Special Occupancies', arts:'Articles 500–590', note:'Hazardous locations, healthcare, temporary wiring'},
                  {mod:'Motors & Transformers', arts:'Articles 430, 450', note:'Motor circuit sizing, overload, transformer protection'},
                  {mod:'Communications & Emergency', arts:'Articles 700–820', note:'Emergency systems, standby power, low voltage'},
                  {mod:'Trade Calculations', arts:'Chapter 9, Table 310.16', note:'Conduit fill, load calcs, wire sizing — math-heavy'},
                  {mod:'California-Specific Rules', arts:'Title 8, Title 24, CEC', note:'Cal/OSHA, energy code — unique to CA exam'},
                  {mod:'Safety & Maintenance', arts:'NFPA 70E, Cal/OSHA', note:'Arc flash, lockout/tagout, PPE requirements'},
                ].map(t => (
                  <div key={t.mod} style={s.topicCard}>
                    <div style={s.topicMod}>{t.mod}</div>
                    <div style={s.topicArts}>{t.arts}</div>
                    <div style={s.topicNote}>{t.note}</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="codes" title="Which Codes to Study">
              <P>
                The California exam is based primarily on the <strong style={s.strong}>2020 National Electrical Code
                (NFPA 70)</strong>, which is the current edition adopted in California.
                However, California adds its own amendments and additional requirements
                that are equally testable.
              </P>

              <div style={s.codeList}>
                {[
                  {code:'2020 NEC (NFPA 70)', desc:'The foundation. Articles 90 through 830 are fair game. Focus heavily on Chapters 1–4, which cover the most common work.', badge:'Primary'},
                  {code:'California Electrical Code (CEC)', desc:'California\'s amendments to the NEC. Where the CEC differs from the NEC, the CEC governs. Know the differences.', badge:'Required'},
                  {code:'Title 8, California Code of Regulations', desc:'Cal/OSHA electrical safety orders. Particularly 8 CCR § 2940 (electrical safety) and § 3314 (lockout/tagout). Tested in safety module.', badge:'Required'},
                  {code:'Title 24, California Building Code', desc:'Energy efficiency requirements for electrical systems. LED lighting, occupancy sensors, solar interconnection. Module 11 focus.', badge:'Required'},
                  {code:'NFPA 70E', desc:'Standard for Electrical Safety in the Workplace. Arc flash, PPE categories, approach boundaries. Shows up in safety questions.', badge:'Supplemental'},
                ].map(c => (
                  <div key={c.code} style={s.codeItem}>
                    <div style={s.codeHeader}>
                      <span style={s.codeName}>{c.code}</span>
                      <span style={{...s.codeBadge, background: c.badge === 'Primary' ? 'rgba(200,168,75,0.15)' : c.badge === 'Required' ? 'rgba(231,76,60,0.12)' : 'rgba(39,174,96,0.1)', color: c.badge === 'Primary' ? '#c8a84b' : c.badge === 'Required' ? '#e74c3c' : '#27ae60'}}>{c.badge}</span>
                    </div>
                    <div style={s.codeDesc}>{c.desc}</div>
                  </div>
                ))}
              </div>

              <CallOut>
                The California General Electrician exam is open book — you can bring your NEC
                codebook. However, time is tight. You need to know the code well enough to
                find answers quickly. Candidates who rely too heavily on looking everything up
                run out of time.
              </CallOut>
            </Section>

            <Section id="passrate" title="Pass Rate & Difficulty">
              <P>
                The California General Electrician exam is known for its low pass rate.
                Exact pass rate data is not publicly published by the DLSE, but industry
                experience and anecdotal reports consistently put the first-attempt pass
                rate below 50% — and in some reporting periods, significantly lower.
              </P>
              <P>
                Several factors contribute to the difficulty:
              </P>
              <Ul items={[
                'Broad scope — 110 questions spanning 12+ content areas means no single topic can be ignored',
                'California-specific content — most prep resources focus only on the NEC and skip Title 8, Title 24, and CEC amendments',
                'Calculation questions — trade math (load calculations, conduit fill, motor sizing) requires actual computation under time pressure',
                'Time pressure — the exam is open book, but 4.5 hours for 110 questions goes fast if you\'re looking up every answer',
                'Question wording — questions often test nuance and exception clauses, not just the general rule',
              ]} />
              <P>
                Candidates who pass on their first attempt typically report studying consistently
                for 8–16 weeks, focusing on understanding the reasoning behind the code rather
                than memorizing rules in isolation.
              </P>
            </Section>

            <Section id="apply" title="How to Apply">
              <P>The application process for the California General Electrician exam:</P>
              <Ul items={[
                'Complete the DLSE Electrician Certification application (available at dir.ca.gov)',
                'Gather documentation of your 8,000 hours of work experience — employer letters, pay stubs, W-2s',
                'Submit your application and fee to the DLSE by mail or online',
                'Wait for DLSE approval — processing times vary but typically take several weeks',
                'Once approved, you\'ll receive an Authorization to Test (ATT) from PSI Services',
                'Schedule your exam at a PSI testing center (locations throughout California)',
                'Pay the PSI examination fee at the time of scheduling',
              ]} />
              <P>
                For current fees, processing times, and the most up-to-date application
                requirements, visit the official California DIR website at{' '}
                <a href="https://www.dir.ca.gov/dlse/electrician-certification.html"
                  target="_blank" rel="noopener noreferrer" style={s.link}>
                  dir.ca.gov
                </a>.
              </P>
            </Section>


            <Section id="prep" title="How to Prepare">
              <P>
                The most effective preparation strategy for the California General Electrician
                exam combines three things: <strong style={s.strong}>understanding the code</strong>,{' '}
                <strong style={s.strong}>practicing with realistic questions</strong>, and{' '}
                <strong style={s.strong}>drilling your weak areas until they're strong</strong>.
              </P>
              <Ul items={[
                'Start with a diagnostic — take a timed practice set across all modules and find out where your gaps are',
                'Study by module — go deep on one topic area before moving to the next',
                'Don\'t just memorize answers — read the explanation for every question you get wrong (and right)',
                'Pay special attention to California-specific content (Title 8, Title 24) — this is where many candidates lose points',
                'Practice calculations until they\'re automatic — motor sizing, conduit fill, load calculations',
                'Simulate exam conditions — 110 questions, 4.5 hours, open book just like the real exam',
                'In the final week before your exam, focus on your weakest modules only',
              ]} />

              {/* CTA */}
              <div style={s.ctaBlock}>
                <div style={s.ctaBolt}>⚡</div>
                <div style={s.ctaTitle}>West Coast Wire Pro is built for this exam.</div>
                <div style={s.ctaBody}>
                  512 questions across all 12 modules. Every answer tied to the exact NEC or
                  California code section. Timed mode, module filtering, difficulty levels.
                  Built by a California journeyman electrician and trade school instructor.
                </div>
                <div style={s.ctaBtns}>
                  <button style={s.btnGold} onClick={onLaunchApp}>⚡ Start Free — Module 1</button>
                  <button style={s.btnGhost} onClick={() => onNavigate('demo')}>Try 5 Sample Questions</button>
                </div>
                <div style={s.ctaNote}>Module 1 (30 questions) is always free. No account required.</div>
              </div>

            </Section>

          </Article>
        </main>

        {/* SIDEBAR */}
        <aside style={{...s.sidebar, display: isMobile ? "none" : "flex"}}>
          <div style={s.sideCard}>
            <div style={s.sideTitle}>At a Glance</div>
            {[
              ['Questions', '110 multiple choice'],
              ['Time', '4.5 hours'],
              ['Passing', '70% (77/110)'],
              ['Format', 'Computer-based'],
              ['Location', 'PSI Testing Centers'],
              ['Reference', 'Open book — NEC permitted'],
              ['Calculator', 'Provided on-screen'],
              ['Code', '2020 NEC + CA amendments'],
            ].map(([k, v]) => (
              <div key={k} style={s.sideRow}>
                <span style={s.sideKey}>{k}</span>
                <span style={s.sideVal}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{...s.sideCard, background:'linear-gradient(135deg, rgba(200,168,75,0.08), rgba(200,168,75,0.03))', border:'1px solid rgba(200,168,75,0.3)'}}>
            <div style={s.sideTitle}>Start Preparing</div>
            <p style={{fontSize:'13px', color:'#7a8a9a', lineHeight:1.6, marginBottom:'16px'}}>
              512 questions. 12 modules. Every answer NEC-referenced. Module 1 always free.
            </p>
            <button style={{...s.btnGold, fontSize:'13px', padding:'11px 16px', width:'100%'}} onClick={onLaunchApp}>
              ⚡ Try Free Now
            </button>
          </div>
        </aside>
      </div>

      <PageFooter onNavigate={onNavigate} />
    </div>
  )
}

// ── Sub-components ──────────────────────────────────────────

function Article({ children }) {
  return <article style={{maxWidth:'680px'}}>{children}</article>
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{marginBottom:'56px', paddingBottom:'56px', borderBottom:'1px solid rgba(200,168,75,0.07)'}}>
      <h2 style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'20px', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', letterSpacing:'0.5px', marginBottom:'20px', marginTop:0, scrollMarginTop:'80px'}}>{title}</h2>
      {children}
    </section>
  )
}

function P({ children }) {
  return <p style={{fontSize:'15px', color:'#aabbcc', lineHeight:1.85, marginBottom:'16px', marginTop:0, fontFamily:"'Georgia', serif"}}>{children}</p>
}

function Ul({ items }) {
  return (
    <ul style={{listStyle:'none', padding:0, margin:'0 0 20px 0'}}>
      {items.map((item, i) => (
        <li key={i} style={{display:'flex', gap:'12px', fontSize:'15px', color:'#aabbcc', lineHeight:1.7, padding:'7px 0', borderBottom:'1px solid rgba(255,255,255,0.03)', fontFamily:"'Georgia', serif"}}>
          <span style={{color:'#c8a84b', fontFamily:"'Courier New', monospace", flexShrink:0, marginTop:'2px'}}>—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CallOut({ children }) {
  return (
    <div style={{background:'rgba(200,168,75,0.06)', borderLeft:'3px solid #c8a84b', padding:'14px 20px', borderRadius:'0 5px 5px 0', margin:'20px 0', fontSize:'14px', color:'#aabbcc', lineHeight:1.7, fontFamily:"'Georgia', serif"}}>
      {children}
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
            {[['Start Studying — Free','landing'],['Try 5 Demo Questions','demo'],['Am I Ready? Diagnostic','diagnostic'],['Full Exam Simulator','simulator'],['Missed Questions Review','missed'],['Study Planner','planner'],['NEC Reference Guide','nec-ref'],['Calculations Helper','calculations'],['Progress Dashboard','progress'],['Glossary','glossary']].map(([l,p])=>nav(l,p))}
          </div>
          <div style={{height:'1px',background:'rgba(200,168,75,0.15)',margin:'4px 20px'}}/>
          <div style={{padding:'12px 20px 4px'}}>
            <div style={{fontFamily:"'Courier New',monospace",fontSize:'10px',color:'#c8a84b',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'8px',paddingLeft:'4px'}}>📋 Exam Resources</div>
            {[['CA Journeyman Exam Guide','exam-info'],['How to Pass — Study Tips','study-tips'],['Exam Day Guide','exam-day'],['NEC 2020 Changes for CA','nec-2020-changes'],['Electrician Salary in CA','salary'],['Contractor vs. Electrician','contractor-vs-electrician']].map(([l,p])=>nav(l,p))}
          </div>
          <div style={{height:'1px',background:'rgba(200,168,75,0.15)',margin:'4px 20px'}}/>
          <div style={{padding:'12px 20px 4px'}}>
            <div style={{fontFamily:"'Courier New',monospace",fontSize:'10px',color:'#c8a84b',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'8px',paddingLeft:'4px'}}>🔧 Company</div>
            {[['About','about'],['Reviews & Testimonials','testimonials'],['FAQ','faq'],['Contact & Support','contact']].map(([l,p])=>nav(l,p))}
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
      <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
        {link('Home', 'landing')}
        {link('About', 'about')}
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
  hero: { padding:'clamp(36px,6vw,72px) clamp(20px,4vw,40px) clamp(26px,4vw,52px)', position:'relative', overflow:'hidden', background:'#0a1016', borderBottom:'1px solid rgba(200,168,75,0.08)' },
  heroGrid: { position:'absolute', inset:0, opacity:0.03, backgroundImage:'linear-gradient(rgba(200,168,75,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,1) 1px, transparent 1px)', backgroundSize:'50px 50px', pointerEvents:'none' },
  heroInner: { maxWidth:'820px', position:'relative', zIndex:1 },
  label: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', letterSpacing:'3px', marginBottom:'16px' },
  h1: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'clamp(28px, 4.5vw, 50px)', fontWeight:'900', textTransform:'uppercase', lineHeight:1.05, marginBottom:'16px', marginTop:0 },
  h1Gold: { color:'#c8a84b' },
  heroSub: { fontSize:'16px', color:'#7a8a9a', lineHeight:1.7, maxWidth:'560px', margin:'0 0 20px', fontFamily:"'Georgia', serif" },
  heroBreadcrumb: { display:'flex', gap:'8px', alignItems:'center', flexWrap:'wrap' },
  crumb: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#4a5a6a', background:'#111820', border:'1px solid rgba(200,168,75,0.08)', padding:'3px 10px', borderRadius:'2px' },
  crumbDot: { color:'#2a3a4a', fontSize:'10px' },

  quickFacts: { display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'1px', background:'rgba(200,168,75,0.08)', borderBottom:'1px solid rgba(200,168,75,0.08)' },
  factItem: { background:'#111820', padding:'20px 32px', textAlign:'center', flex:'1', minWidth:'100px' },
  factVal: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'26px', fontWeight:'900', color:'#c8a84b', lineHeight:1 },
  factLabel: { fontSize:'11px', color:'#7a8a9a', textTransform:'uppercase', letterSpacing:'1px', marginTop:'6px', fontFamily:"'Courier New', monospace" },

  layout: { display:'flex', gap:'48px', padding:'52px 40px', maxWidth:'1100px', margin:'0 auto', alignItems:'flex-start' },
  main: { flex:'1', minWidth:'280px' },
  sidebar: { width:'260px', flexShrink:0, position:'sticky', top:'80px', display:'flex', flexDirection:'column', gap:'16px' },

  toc: { background:'#111820', border:'1px solid rgba(200,168,75,0.12)', borderRadius:'6px', padding:'20px', marginBottom:'40px', display:'flex', flexDirection:'column', gap:'4px' },
  tocTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'12px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'10px' },
  tocLink: { color:'#7a8a9a', textDecoration:'none', fontSize:'13px', lineHeight:1.5, padding:'4px 0', borderBottom:'1px solid rgba(255,255,255,0.03)', fontFamily:"'Segoe UI', sans-serif" },

  topicsGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1px', background:'rgba(200,168,75,0.07)', margin:'16px 0 24px', border:'1px solid rgba(200,168,75,0.07)' },
  topicCard: { background:'#0a1016', padding:'16px 18px' },
  topicMod: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'13px', fontWeight:'900', color:'#d8e0e8', marginBottom:'4px', textTransform:'uppercase' },
  topicArts: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', marginBottom:'6px' },
  topicNote: { fontSize:'12px', color:'#7a8a9a', lineHeight:1.5 },

  codeList: { display:'flex', flexDirection:'column', gap:'2px', margin:'16px 0' },
  codeItem: { background:'#111820', padding:'16px 20px' },
  codeHeader: { display:'flex', alignItems:'center', gap:'10px', marginBottom:'8px' },
  codeName: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'14px', fontWeight:'900', color:'#d8e0e8', textTransform:'uppercase' },
  codeBadge: { fontSize:'10px', fontFamily:"'Courier New', monospace", padding:'2px 8px', borderRadius:'2px', fontWeight:'700' },
  codeDesc: { fontSize:'13px', color:'#7a8a9a', lineHeight:1.65, fontFamily:"'Georgia', serif" },

  strong: { color:'#d8e0e8', fontWeight:'700' },
  link: { color:'#c8a84b', textDecoration:'none', borderBottom:'1px solid rgba(200,168,75,0.3)' },

  ctaBlock: { background:'linear-gradient(135deg, #111820, #1a2535)', border:'1px solid rgba(200,168,75,0.25)', borderRadius:'8px', padding:'36px', textAlign:'center', marginTop:'16px' },
  ctaBolt: { fontSize:'40px', marginBottom:'8px' },
  ctaTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'20px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', marginBottom:'12px' },
  ctaBody: { fontSize:'14px', color:'#7a8a9a', lineHeight:1.7, marginBottom:'24px', fontFamily:"'Georgia', serif" },
  ctaBtns: { display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap', marginBottom:'12px' },
  ctaNote: { fontSize:'12px', color:'#4a5a6a' },

  sideCard: { background:'#111820', border:'1px solid rgba(200,168,75,0.12)', borderRadius:'6px', padding:'20px', display:'flex', flexDirection:'column', gap:'8px' },
  sideTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'12px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'4px' },
  sideLink: { color:'#7a8a9a', textDecoration:'none', fontSize:'13px', padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.04)' },
  sideRow: { display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'8px', padding:'5px 0', borderBottom:'1px solid rgba(255,255,255,0.04)', fontSize:'12px' },
  sideKey: { color:'#4a5a6a', fontFamily:"'Courier New', monospace", flexShrink:0 },
  sideVal: { color:'#aabbcc', textAlign:'right' },

  btnGold: { padding:'12px 24px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'14px', textTransform:'uppercase', letterSpacing:'0.5px', border:'none', borderRadius:'5px', cursor:'pointer' },
  btnGhost: { padding:'12px 20px', background:'transparent', color:'#c8a84b', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'13px', textTransform:'uppercase', letterSpacing:'0.5px', border:'1px solid rgba(200,168,75,0.3)', borderRadius:'5px', cursor:'pointer' },
}
