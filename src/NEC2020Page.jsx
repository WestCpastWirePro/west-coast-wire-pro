import React from 'react'
export default function NEC2020ChangesPage({ onLaunchApp, onNavigate, onHome }) {
  const [isMobile, setIsMobile] = React.useState(typeof window !== "undefined" && window.innerWidth < 768)
  React.useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", h)
    return () => window.removeEventListener("resize", h)
  }, [])
  return (
    <div style={s.root}>

      <header style={s.hero}>
        <div style={s.heroGrid} />
        <div style={s.heroInner}>
          <div style={s.breadcrumb}>
            <button style={s.breadcrumbLink} onClick={() => onNavigate('landing')}>Home</button>
            <span style={s.breadcrumbSep}>/</span>
            <button style={s.breadcrumbLink} onClick={() => onNavigate('landing')}>Articles</button>
            <span style={s.breadcrumbSep}>/</span>
            <span style={s.breadcrumbCurrent}>NEC 2020 Changes</span>
          </div>
          <div style={s.label}>// CODE UPDATE GUIDE</div>
          <h1 style={s.h1}>
            NEC 2020 vs 2017:<br />
            <span style={s.h1Gold}>What Changed and Why It Matters for the California Exam</span>
          </h1>
          <div style={s.meta}>
            <span style={s.metaItem}>⚡ West Coast Wire Pro</span>
            <span style={s.metaDot}>·</span>
            <span style={s.metaItem}>California Exam Prep</span>
            <span style={s.metaDot}>·</span>
            <span style={s.metaItem}>2020 NEC</span>
          </div>
          <p style={s.heroSub}>
            California adopted the 2020 NEC. If you studied from older materials or learned
            the code under the 2017 edition, several rules you know have changed — and the
            exam will test the current version. Here's what's different and what you need to know.
          </p>
        </div>
      </header>

      {/* ALERT BAR */}
      <div style={s.alertBar}>
        <span style={s.alertIcon}>⚠️</span>
        <span style={s.alertText}>
          <strong style={{color:'#e8c878'}}>California exam note:</strong> The CA General Electrician exam is based on the 2020 NEC with California amendments. If your study materials reference the 2017 edition, several rules covered below will be wrong on the exam.
        </span>
      </div>

      <div style={{...s.layout, flexDirection: isMobile ? "column" : "row", padding: isMobile ? "32px 20px 60px" : "48px 40px 80px"}}>
        <main style={{...s.main, width: isMobile ? "100%" : undefined}}>

          {/* TOC */}
          <div style={s.toc}>
            <div style={s.tocTitle}>Changes Covered</div>
            {[
              ['#afci',     'AFCI — Expanded to Entire Dwelling'],
              ['#gfci',     'GFCI — More Locations Added'],
              ['#ev',       'EV Charging — New Requirements'],
              ['#solar',    'Solar & Storage — New Articles'],
              ['#arc',      'Arc Energy Reduction — New Requirement'],
              ['#grounding','Grounding & Bonding Clarifications'],
              ['#tamper',   'Tamper-Resistant Receptacles'],
              ['#temp',     'Temporary Wiring Changes'],
              ['#summary',  'Quick Reference Summary'],
            ].map(([href, text]) => (
              <a key={href} href={href} style={s.tocLink}>{text}</a>
            ))}
          </div>

          <Article>

            <Intro>
              The NEC is updated on a three-year cycle. California adopted the 2020 edition,
              replacing the 2017 edition that many working electricians learned under.
              For the journeyman exam, the 2020 NEC is the governing document — which means
              if you answer based on what you learned in the field under the old code,
              you may get questions wrong even if you know your craft cold.
              <br /><br />
              The changes below are the ones most likely to appear on the exam and most
              likely to trip up experienced electricians who haven't specifically reviewed
              the 2020 updates.
            </Intro>

            <Section id="afci" title="1. AFCI Protection — Expanded to All Rooms">
              <P>
                This is the biggest change for residential electricians and one of the
                most-tested topics on the CA exam.
              </P>
              <ChangeBox
                was="2017 NEC 210.12 — AFCI protection required in bedrooms only (and a few other specifically listed spaces in later 2017 amendments)."
                now="2020 NEC 210.12(A) — AFCI protection required for ALL 120V, 15A and 20A branch circuits in ALL rooms of a dwelling unit — including kitchens, living rooms, dining rooms, hallways, closets, bathrooms, and garages."
                impact="High — exam questions will specifically test the expanded scope. 'Bedrooms only' is now a wrong answer."
              />
              <P>
                The practical effect: virtually every branch circuit in a new residential
                installation now requires AFCI protection. Combination-type AFCI breakers
                at the panel are the most common compliance method, though AFCI receptacles
                at the first outlet in a circuit are also acceptable.
              </P>
              <P>
                Know this distinction: AFCI and GFCI serve different purposes. AFCI detects
                arcing faults (damaged insulation, loose connections) that can cause fires.
                GFCI detects ground faults that can cause electrocution. Some locations
                now require both — a dual-function AFCI/GFCI breaker or receptacle satisfies
                both requirements.
              </P>
              <CallOut>
                Exam tip: If a question asks about AFCI protection in a kitchen, living room,
                or hallway — the 2020 NEC answer is yes, required. Under 2017 NEC those rooms
                were not covered. The exam tests the 2020 edition.
              </CallOut>
            </Section>

            <Section id="gfci" title="2. GFCI Protection — More Locations">
              <P>
                GFCI requirements were also significantly expanded in 2020. Several locations
                that were not previously covered are now required.
              </P>
              <ChangeBox
                was="2017 NEC 210.8 — GFCI required in bathrooms, garages, outdoors, crawl spaces, unfinished basements, kitchen countertop surfaces, boathouses, and boat hoisting areas."
                now="2020 NEC 210.8 — Added: washing machine locations (new), dishwasher branch circuits (new in 210.8(D)), indoor damp locations, and clarified that all kitchen countertop receptacles within 6 feet of a sink require GFCI — not just those 'serving countertop surfaces.'"
                impact="Medium-High — washing machine receptacle GFCI requirement is new and testable. Dishwasher circuit requirement is new."
              />
              <P>
                The 2020 NEC added a dedicated section <strong style={s.strong}>210.8(D)</strong> specifically
                requiring GFCI protection for dishwasher branch circuits — a location not
                previously called out. This is a frequently tested detail because it's
                counterintuitive (the dishwasher isn't a "countertop appliance" in the
                traditional sense) and because it's new.
              </P>
              <P>
                The washing machine location requirement comes from an understanding that
                laundry areas frequently involve water contact and are now treated the same
                as other wet/damp residential locations.
              </P>
              <CallOut>
                Remember: GFCI protection can be provided by a GFCI circuit breaker at the
                panel, a GFCI receptacle at the first outlet in the circuit, or a GFCI
                receptacle directly at the appliance location. All three methods are
                code-compliant for most applications.
              </CallOut>
            </Section>

            <Section id="ev" title="3. Electric Vehicle Charging — New Article 625 Requirements">
              <P>
                EV charging saw significant attention in the 2020 NEC, reflecting the
                rapid growth of electric vehicle adoption. California's exam now tests
                this more heavily than previous editions.
              </P>
              <ChangeBox
                was="2017 NEC Article 625 — Basic requirements for EV supply equipment (EVSE). Limited guidance on load calculations and installation specifics."
                now="2020 NEC Article 625 — Significant expansion. New requirements for ventilation of enclosed parking areas with EV charging, load management systems, and updated EVSE installation requirements. New 625.42 requires EVSE in dwelling units to be on a dedicated branch circuit."
                impact="Medium — EV-related questions are increasingly common on the CA exam. California's aggressive EV adoption policies make this especially relevant."
              />
              <P>
                Key 2020 NEC Article 625 points for the exam:
              </P>
              <Ul items={[
                'EVSE must be listed and identified for the purpose — 625.5',
                'Cord-and-plug connected EVSE: cord length limits apply — 625.44',
                'Continuous load rules apply: EVSE is treated as a continuous load (125% sizing applies)',
                'Ventilation requirements for enclosed parking with charging — 625.52',
                'California Title 24 adds additional EV readiness requirements beyond the NEC',
              ]} />
            </Section>

            <Section id="solar" title="4. Solar PV and Energy Storage — Updated Articles 690 & 706">
              <P>
                The 2020 NEC substantially revised the solar photovoltaic and energy storage
                articles. With California's solar mandate for new residential construction
                (effective 2020 under Title 24), this content is especially relevant for
                the CA exam.
              </P>
              <ChangeBox
                was="2017 NEC Article 690 — PV system requirements. Article 706 added as new in 2017 for energy storage systems."
                now="2020 NEC Articles 690 & 706 — Major reorganization of Article 690. Rapid shutdown requirements expanded. Article 706 (energy storage) significantly expanded for battery storage systems. New requirements for arc-fault protection in PV systems (690.11)."
                impact="Medium — California's solar mandate makes PV questions more likely on the CA exam than in other states."
              />
              <P>
                The rapid shutdown requirement under <strong style={s.strong}>690.12</strong> is heavily tested.
                For rooftop PV systems, the 2020 NEC requires that conductors within
                array boundaries be limited to 80V or less within 30 seconds of rapid
                shutdown initiation. This essentially requires module-level power electronics
                (MLPE) — optimizers or microinverters — on most residential systems.
              </P>
              <CallOut>
                California-specific note: California's Title 24 2022 update extended the solar
                mandate to multi-family buildings and added battery storage requirements.
                The CA exam may test the intersection of NEC Article 706 and California's
                energy storage requirements. Module 11 in West Coast Wire Pro covers this.
              </CallOut>
            </Section>

            <Section id="arc" title="5. Arc Energy Reduction — New 240.67 and 240.87">
              <P>
                The 2020 NEC added requirements for arc energy reduction on overcurrent
                protective devices above certain ratings — a topic that didn't exist in
                the 2017 edition and catches many experienced electricians off guard.
              </P>
              <ChangeBox
                was="2017 NEC — No specific arc energy reduction requirement for fuses. 240.87 required arc energy reduction for circuit breakers 1200A and above."
                now="2020 NEC 240.67 — New section requires arc energy reduction methods for fuses rated 1200A or higher. 240.87 (circuit breakers) retained and clarified. Acceptable methods include: zone-selective interlocking, differential relaying, energy-reducing maintenance switching, energy-reducing active arc flash mitigation system, or an instantaneous trip setting."
                impact="Medium — This appears in commercial/industrial calculations questions and safety module questions. New enough that many experienced electricians don't know it."
              />
            </Section>

            <Section id="grounding" title="6. Grounding & Bonding — Key Clarifications">
              <P>
                Article 250 didn't undergo dramatic restructuring, but several clarifications
                in the 2020 NEC affect exam answers.
              </P>
              <ChangeBox
                was="2017 NEC 250.53(A)(2) — Ground rod electrode: if a single ground rod doesn't achieve 25 ohms or less resistance, a supplemental electrode must be added."
                now="2020 NEC 250.53(A)(2) — Same requirement, but clarified that the supplemental electrode must be bonded to the grounding electrode system. Also clarified spacing requirements between electrodes (must be at least 6 feet apart, but 20 feet is optimal for independent effectiveness)."
                impact="Low-Medium — The 25-ohm rule and supplemental electrode requirement are heavily tested. The 2020 clarifications on spacing may appear."
              />
              <P>
                Additionally, <strong style={s.strong}>250.68(C)</strong> was updated to clarify
                bonding connections to structural steel and metal water piping — relevant
                for commercial grounding questions.
              </P>
            </Section>

            <Section id="tamper" title="7. Tamper-Resistant Receptacles — Expanded Locations">
              <ChangeBox
                was="2017 NEC 406.12 — Tamper-resistant receptacles required in dwelling units (all 15A and 20A, 125V receptacles), guest rooms of hotels/motels, child care facilities, and preschools."
                now="2020 NEC 406.12 — Expanded to include: waiting rooms, emergency rooms, and clinics of pediatric facilities; business offices in daycare facilities. Also clarified that listed tamper-resistant receptacles must be marked 'TR' and visually distinguishable."
                impact="Low — Mainly affects commercial/healthcare applications. Know the residential rule cold; the new locations are secondary."
              />
            </Section>

            <Section id="temp" title="8. Temporary Wiring — Updated 590.4">
              <ChangeBox
                was="2017 NEC 590.4 — Temporary wiring methods. GFCI protection required for all temporary 125V, 15/20/30A receptacle outlets on construction sites."
                now="2020 NEC 590.4(D) — GFCI or an assured equipment grounding conductor program (AEGCP) required. Added clarity that GFCI protection applies to all temporary power on construction sites, including 240V single-phase equipment in some jurisdictions. Updated requirements for temporary lighting."
                impact="Low-Medium — Construction site temporary wiring questions appear occasionally. Know the GFCI vs AEGCP option."
              />
            </Section>

            <Section id="summary" title="Quick Reference Summary">
              <P>The changes most likely to appear on the California exam, ranked by probability:</P>
              <div style={s.summaryTable}>
                {[
                  ['🔴 High', 'AFCI expanded to ALL dwelling rooms', '2020 NEC 210.12(A)'],
                  ['🔴 High', 'GFCI now required at washing machine locations', '2020 NEC 210.8(A)(10)'],
                  ['🔴 High', 'GFCI required for dishwasher branch circuits', '2020 NEC 210.8(D)'],
                  ['🟡 Medium', 'EV charging: dedicated circuit required in dwellings', '2020 NEC 625.42'],
                  ['🟡 Medium', 'Rapid shutdown for rooftop PV: 80V within 30 seconds', '2020 NEC 690.12'],
                  ['🟡 Medium', 'Arc energy reduction required ≥1200A fuses', '2020 NEC 240.67'],
                  ['🟢 Lower', 'Tamper-resistant receptacles: expanded locations', '2020 NEC 406.12'],
                  ['🟢 Lower', 'Temporary wiring GFCI/AEGCP clarification', '2020 NEC 590.4(D)'],
                ].map(([priority, change, ref]) => (
                  <div key={change} style={s.summaryRow}>
                    <span style={s.summaryPriority}>{priority}</span>
                    <span style={s.summaryChange}>{change}</span>
                    <span style={s.summaryRef}>{ref}</span>
                  </div>
                ))}
              </div>

              <CallOut>
                West Coast Wire Pro is based entirely on the 2020 NEC with California amendments.
                Every question in the AFCI, GFCI, and wiring modules reflects the current
                code — not the 2017 edition.
              </CallOut>
            </Section>

          </Article>

          {/* CTA */}
          <div style={s.ctaBlock}>
            <div style={s.ctaBolt}>⚡</div>
            <div style={s.ctaTitle}>Practice 2020 NEC Questions</div>
            <div style={s.ctaBody}>
              Every question in West Coast Wire Pro is written to the 2020 NEC and California
              amendments. Modules 1 & 2 + 2 Table Mastery drills free — no account needed.
            </div>
            <div style={s.ctaBtns}>
              <button style={s.btnGold} onClick={onLaunchApp}>Start Free — Modules 1 & 2 ⚡</button>
              <button style={s.btnGhost} onClick={() => onLaunchApp()}>Start Free — No Account Needed</button>
            </div>
          </div>

          {/* Related articles */}
          <div style={s.related}>
            <div style={s.relatedTitle}>Related Articles</div>
            <div style={s.relatedGrid}>
              <div style={s.relatedCard} onClick={() => onNavigate('study-tips')}>
                <div style={s.relatedLabel}>Study Guide</div>
                <div style={s.relatedName}>How to Pass the CA Journeyman Exam</div>
                <div style={s.relatedArrow}>→</div>
              </div>
              <div style={s.relatedCard} onClick={() => onNavigate('exam-info')}>
                <div style={s.relatedLabel}>Exam Guide</div>
                <div style={s.relatedName}>CA General Electrician Exam — Complete Overview</div>
                <div style={s.relatedArrow}>→</div>
              </div>
            </div>
          </div>

        </main>

        {/* SIDEBAR */}
        <aside style={{...s.sidebar, display: isMobile ? "none" : "flex"}}>
          <div style={s.sideCard}>
            <div style={s.sideTitle}>Key Facts</div>
            {[
              ['Current edition', '2020 NEC'],
              ['Previous edition', '2017 NEC'],
              ['CA adoption', '2023'],
              ['Next edition', '2023 NEC (not yet adopted in CA)'],
            ].map(([k, v]) => (
              <div key={k} style={s.sideRow}>
                <span style={s.sideKey}>{k}</span>
                <span style={s.sideVal}>{v}</span>
              </div>
            ))}
          </div>
          <div style={s.sideCard}>
            <div style={s.sideTitle}>Most Tested Changes</div>
            {['AFCI — all dwelling rooms', 'GFCI — washing machines', 'GFCI — dishwashers', 'EV charging circuits', 'PV rapid shutdown'].map(item => (
              <div key={item} style={{fontSize:'13px', color:'#aabbcc', padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.04)', display:'flex', gap:'8px'}}>
                <span style={{color:'#c8a84b'}}>—</span>{item}
              </div>
            ))}
          </div>
          <div style={{...s.sideCard, borderColor:'rgba(200,168,75,0.3)', background:'rgba(200,168,75,0.04)'}}>
            <div style={s.sideTitle}>Practice 2020 NEC</div>
            <p style={{fontSize:'13px', color:'#7a8a9a', lineHeight:1.6, marginBottom:'14px'}}>512 questions written to the 2020 NEC. Modules 1 & 2 always free.</p>
            <button style={{...s.btnGold, fontSize:'13px', padding:'10px', width:'100%'}} onClick={onLaunchApp}>Try Free ⚡</button>
          </div>
        </aside>
      </div>

      <PageFooter onNavigate={onNavigate} />
    </div>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Article({ children }) { return <article>{children}</article> }

function Intro({ children }) {
  return <p style={{fontSize:'16px', color:'#aabbcc', lineHeight:1.85, marginBottom:'40px', padding:'20px 24px', background:'#111820', borderRadius:'6px', border:'1px solid rgba(200,168,75,0.1)', fontFamily:"'Georgia', serif"}}>{children}</p>
}

function Section({ id, title, children }) {
  return (
    <section id={id} style={{marginBottom:'52px', paddingBottom:'52px', borderBottom:'1px solid rgba(200,168,75,0.07)', scrollMarginTop:'80px'}}>
      <h2 style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'19px', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', letterSpacing:'0.5px', marginBottom:'16px', marginTop:0}}>{title}</h2>
      {children}
    </section>
  )
}

function P({ children }) {
  return <p style={{fontSize:'15px', color:'#aabbcc', lineHeight:1.85, marginBottom:'16px', marginTop:0, fontFamily:"'Georgia', serif"}}>{children}</p>
}

function Ul({ items }) {
  return (
    <ul style={{listStyle:'none', padding:0, margin:'0 0 16px'}}>
      {items.map((item, i) => (
        <li key={i} style={{display:'flex', gap:'10px', fontSize:'14px', color:'#aabbcc', padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.03)', fontFamily:"'Georgia', serif", lineHeight:1.7}}>
          <span style={{color:'#c8a84b', flexShrink:0}}>—</span><span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CallOut({ children }) {
  return <div style={{background:'rgba(200,168,75,0.06)', borderLeft:'3px solid #c8a84b', padding:'13px 18px', borderRadius:'0 5px 5px 0', margin:'16px 0', fontSize:'14px', color:'#aabbcc', lineHeight:1.7, fontFamily:"'Georgia', serif"}}>{children}</div>
}

function ChangeBox({ was, now, impact }) {
  return (
    <div style={{margin:'16px 0 20px', border:'1px solid rgba(200,168,75,0.12)', borderRadius:'6px', overflow:'hidden'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px', background:'rgba(200,168,75,0.08)'}}>
        <div style={{background:'#0f1820', padding:'14px 16px'}}>
          <div style={{fontFamily:"'Courier New', monospace", fontSize:'10px', color:'#e74c3c', letterSpacing:'2px', marginBottom:'8px', fontWeight:'700'}}>2017 NEC</div>
          <div style={{fontSize:'13px', color:'#7a8a9a', lineHeight:1.65}}>{was}</div>
        </div>
        <div style={{background:'#0a1a14', padding:'14px 16px'}}>
          <div style={{fontFamily:"'Courier New', monospace", fontSize:'10px', color:'#27ae60', letterSpacing:'2px', marginBottom:'8px', fontWeight:'700'}}>2020 NEC ✓</div>
          <div style={{fontSize:'13px', color:'#aabbcc', lineHeight:1.65}}>{now}</div>
        </div>
      </div>
      <div style={{background:'#111820', padding:'10px 16px', display:'flex', gap:'8px', alignItems:'flex-start'}}>
        <span style={{fontFamily:"'Courier New', monospace", fontSize:'10px', color:'#c8a84b', letterSpacing:'1px', flexShrink:0, marginTop:'1px'}}>EXAM IMPACT</span>
        <span style={{fontSize:'13px', color:'#c8a84b', lineHeight:1.5}}>{impact}</span>
      </div>
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
  const btn = (label, to) => <button key={to} style={{background:'none', border:'none', color:'#4a5a6a', fontSize:'12px', cursor:'pointer', padding:0}} onClick={() => onNavigate(to)}>{label}</button>
  return (
    <footer style={{borderTop:'1px solid rgba(200,168,75,0.1)', padding:'28px clamp(16px,4vw,40px)', background:'#0a1016', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px'}}>
      <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'16px', color:'#c8a84b'}}>⚡ West Coast Wire Pro</div>
      <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
        {btn('Home','landing')}{btn('Exam Guide','exam-info')}{btn('About','about')}{btn('Privacy','privacy')}
      </div>
      <div style={{fontSize:'11px', color:'#4a5a6a'}}>© 2026 West Coast Wire Pro Training</div>
    </footer>
  )
}

// ── Styles ────────────────────────────────────────────────────────────────────
const s = {
  root: { minHeight:'100vh', background:'#0a1016', color:'#d8e0e8', fontFamily:"'Georgia', serif" },
  hero: { padding:'clamp(32px,6vw,64px) clamp(20px,4vw,40px) clamp(24px,4vw,48px)', position:'relative', overflow:'hidden', borderBottom:'1px solid rgba(200,168,75,0.08)' },
  heroGrid: { position:'absolute', inset:0, opacity:0.03, backgroundImage:'linear-gradient(rgba(200,168,75,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,1) 1px, transparent 1px)', backgroundSize:'50px 50px', pointerEvents:'none' },
  heroInner: { maxWidth:'820px', position:'relative', zIndex:1 },
  breadcrumb: { display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px' },
  breadcrumbLink: { background:'none', border:'none', color:'#7a8a9a', fontSize:'12px', cursor:'pointer', padding:0, fontFamily:"'Courier New', monospace" },
  breadcrumbSep: { color:'#2a3a4a', fontSize:'12px' },
  breadcrumbCurrent: { color:'#c8a84b', fontSize:'12px', fontFamily:"'Courier New', monospace" },
  label: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', letterSpacing:'3px', marginBottom:'14px' },
  h1: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'clamp(26px, 4vw, 44px)', fontWeight:'900', textTransform:'uppercase', lineHeight:1.05, marginBottom:'14px', marginTop:0 },
  h1Gold: { color:'#c8a84b' },
  meta: { display:'flex', gap:'8px', alignItems:'center', marginBottom:'16px' },
  metaItem: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#4a5a6a' },
  metaDot: { color:'#2a3a4a' },
  heroSub: { fontSize:'16px', color:'#7a8a9a', lineHeight:1.7, maxWidth:'640px', margin:0, fontFamily:"'Georgia', serif" },
  alertBar: { background:'rgba(232,200,120,0.06)', borderBottom:'1px solid rgba(200,168,75,0.2)', padding:'12px clamp(16px, 4vw, 40px)', display:'flex', gap:'12px', alignItems:'flex-start', flexWrap:'wrap' },
  alertIcon: { fontSize:'16px', flexShrink:0 },
  alertText: { fontSize:'13px', color:'#aabbcc', lineHeight:1.6 },
  layout: { display:'flex', gap:'48px', padding:'48px 40px 80px', maxWidth:'1100px', margin:'0 auto', alignItems:'flex-start' },
  main: { flex:'1', minWidth:'280px' },
  sidebar: { width:'260px', flexShrink:0, position:'sticky', top:'80px', display:'flex', flexDirection:'column', gap:'16px' },
  toc: { background:'#111820', border:'1px solid rgba(200,168,75,0.1)', borderRadius:'6px', padding:'18px', marginBottom:'36px', display:'flex', flexDirection:'column', gap:'2px' },
  tocTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'11px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'8px' },
  tocLink: { color:'#7a8a9a', textDecoration:'none', fontSize:'13px', lineHeight:1.5, padding:'5px 0', borderBottom:'1px solid rgba(255,255,255,0.03)', fontFamily:"'Segoe UI', sans-serif" },
  strong: { color:'#d8e0e8', fontWeight:'700' },
  summaryTable: { display:'flex', flexDirection:'column', gap:'1px', background:'rgba(200,168,75,0.07)', margin:'16px 0', border:'1px solid rgba(200,168,75,0.07)' },
  summaryRow: { display:'grid', gridTemplateColumns:'90px 1fr 160px', gap:'12px', background:'#0a1016', padding:'10px 14px', alignItems:'center' },
  summaryPriority: { fontSize:'12px', flexShrink:0 },
  summaryChange: { fontSize:'13px', color:'#aabbcc' },
  summaryRef: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', textAlign:'right' },
  ctaBlock: { background:'linear-gradient(135deg,#111820,#1a2535)', border:'1px solid rgba(200,168,75,0.25)', borderRadius:'8px', padding:'36px', textAlign:'center', margin:'40px 0' },
  ctaBolt: { fontSize:'36px', marginBottom:'8px' },
  ctaTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'20px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', marginBottom:'10px' },
  ctaBody: { fontSize:'14px', color:'#7a8a9a', lineHeight:1.7, marginBottom:'20px', fontFamily:"'Georgia', serif" },
  ctaBtns: { display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' },
  related: { marginTop:'48px' },
  relatedTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'14px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'12px' },
  relatedGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px,1fr))', gap:'2px', background:'rgba(200,168,75,0.07)' },
  relatedCard: { background:'#0a1016', padding:'20px', cursor:'pointer', display:'flex', flexDirection:'column', gap:'6px' },
  relatedLabel: { fontFamily:"'Courier New', monospace", fontSize:'10px', color:'#c8a84b', letterSpacing:'2px' },
  relatedName: { fontSize:'15px', color:'#d8e0e8', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'700', lineHeight:1.3 },
  relatedArrow: { color:'#c8a84b', fontSize:'18px', marginTop:'4px' },
  sideCard: { background:'#111820', border:'1px solid rgba(200,168,75,0.12)', borderRadius:'6px', padding:'18px', display:'flex', flexDirection:'column', gap:'6px' },
  sideTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'11px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'6px' },
  sideRow: { display:'flex', justifyContent:'space-between', gap:'8px', padding:'5px 0', borderBottom:'1px solid rgba(255,255,255,0.04)', fontSize:'12px' },
  sideKey: { color:'#4a5a6a', fontFamily:"'Courier New', monospace" },
  sideVal: { color:'#aabbcc', textAlign:'right', fontSize:'11px' },
  btnGold: { padding:'12px 24px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'14px', textTransform:'uppercase', letterSpacing:'0.5px', border:'none', borderRadius:'5px', cursor:'pointer' },
  btnGhost: { padding:'12px 20px', background:'transparent', color:'#c8a84b', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'13px', textTransform:'uppercase', letterSpacing:'0.5px', border:'1px solid rgba(200,168,75,0.3)', borderRadius:'5px', cursor:'pointer' },
}
