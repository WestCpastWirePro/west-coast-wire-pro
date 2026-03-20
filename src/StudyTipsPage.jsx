import React from 'react'
export default function StudyTipsPage({ onLaunchApp, onNavigate }) {
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
            <span style={s.breadcrumbCurrent}>How to Pass</span>
          </div>
          <div style={s.label}>// STUDY GUIDE</div>
          <h1 style={s.h1}>
            How to Pass the California<br />
            <span style={s.h1Gold}>Journeyman Electrician Exam</span>
          </h1>
          <div style={s.meta}>
            <span style={s.metaItem}>⚡ West Coast Wire Pro</span>
            <span style={s.metaDot}>·</span>
            <span style={s.metaItem}>Written by a CA Journeyman &amp; Trade School Instructor</span>
          </div>
          <p style={s.heroSub}>
            The California journeyman exam has a low pass rate — but not because it's
            impossible. Most people who fail do so for predictable, fixable reasons.
            Here's a straight-talk guide on how to actually prepare, from someone who
            has been through it and taught hundreds of students to do the same.
          </p>
        </div>
      </header>

      <div style={{...s.layout, flexDirection: isMobile ? "column" : "row", padding: isMobile ? "32px 20px 60px" : "48px 40px 80px"}}>
        <main style={{...s.main, width: isMobile ? "100%" : undefined}}>

          <div style={s.toc}>
            <div style={s.tocTitle}>In This Guide</div>
            {[
              ['#reality',    'The Honest Reality About This Exam'],
              ['#mistakes',   'Why Most People Fail (And How to Not Be One of Them)'],
              ['#timeline',   'How Long to Study — Realistic Timelines'],
              ['#modules',    'Which Modules to Prioritize'],
              ['#calc',       'Trade Math — The Make-or-Break Section'],
              ['#method',     'The Study Method That Actually Works'],
              ['#final',      'The Final 2 Weeks'],
              ['#openbooktactics', 'Open Book Exam Tactics That Actually Save Time'],
              ['#testday',    'Test Day Strategy'],
            ].map(([href, text]) => (
              <a key={href} href={href} style={s.tocLink}>{text}</a>
            ))}
          </div>

          <Article>

            <Section id="reality" title="The Honest Reality About This Exam">
              <P>
                The California General Electrician exam is hard. Not artificially hard —
                genuinely hard. The pass rate is low because the exam tests a wide range of
                material at a meaningful depth, and many candidates underestimate how much
                preparation it actually requires.
              </P>
              <P>
                Here's what 14 years in the trade and four years teaching this material has
                taught me: <strong style={s.strong}>experience in the field is not the same as being ready for the exam.</strong> I've
                watched journeymen with 10+ years on job sites fail this exam because they
                assumed their field knowledge would be enough. It isn't — not because the
                exam is disconnected from real work, but because it tests code knowledge
                specifically, and real-world work involves a lot of habit and shortcut that
                doesn't map cleanly to code questions.
              </P>
              <P>
                The good news: the exam tests a defined body of material. It isn't random.
                There are knowable topics, knowable tables, and knowable rules. If you prepare
                methodically, the pass rate stops being your problem.
              </P>
              <CallOut>
                One thing I tell every student: the exam doesn't care how good of an
                electrician you are. It cares whether you know the NEC. They are related but
                not the same thing. Prepare for the exam on those terms.
              </CallOut>
            </Section>

            <Section id="mistakes" title="Why Most People Fail">
              <P>In my experience, failed attempts fall into a few consistent patterns:</P>

              <TipBlock icon="✗" color="#e74c3c" title="Studying only from field experience">
                Your field knowledge is valuable context, but habits built on the job — especially
                on older installations — may not match current code. The exam tests 2020 NEC.
                Some things you do every day might be wrong by the book. Study the book.
              </TipBlock>

              <TipBlock icon="✗" color="#e74c3c" title="Using 2017 NEC materials for a 2020 exam">
                AFCI expanded to all dwelling rooms in 2020. GFCI now covers washing machines
                and dishwashers. If your study materials are based on the 2017 edition, several
                of your answers will be wrong. Verify which edition your materials use before
                you start.
              </TipBlock>

              <TipBlock icon="✗" color="#e74c3c" title="Memorizing answers instead of understanding rules">
                If you study by memorizing which letter goes with which question, you'll be
                lost when the exam paraphrases a question differently. You need to understand
                why an answer is correct — which code section, which principle, which exception.
                That understanding is what transfers to the exam.
              </TipBlock>

              <TipBlock icon="✗" color="#e74c3c" title="Not practicing under time pressure">
                110 questions in 4.5 hours sounds generous until you're on question 60 with
                90 minutes left and you've been second-guessing yourself for two hours. Practice
                timed. Get comfortable making a decision and moving on.
              </TipBlock>
            </Section>

            <Section id="timeline" title="How Long to Study — Realistic Timelines">
              <P>
                The honest answer depends on your current knowledge, how recently you've
                worked with the code, and how consistently you can study. Here are realistic
                ranges based on what I've seen:
              </P>

              <div style={s.timelineGrid}>
                {[
                  {
                    profile: 'Active apprentice, current with code',
                    time: '8–10 weeks',
                    color: '#27ae60',
                    detail: 'Daily study, 45–60 min. Strong foundation — main work is filling gaps and drilling calculations.',
                  },
                  {
                    profile: 'Working journeyman, haven\'t studied in years',
                    time: '10–14 weeks',
                    color: '#c8a84b',
                    detail: 'Need to relearn some rules and focus on the modules that need the most work.',
                  },
                  {
                    profile: 'Returning to the trade or studying part-time',
                    time: '14–20 weeks',
                    color: '#e67e22',
                    detail: 'Steady pace matters more than intensity. Consistent 30 min/day beats irregular 3-hour sessions.',
                  },
                ].map(t => (
                  <div key={t.profile} style={{...s.timelineCard, borderTop:`3px solid ${t.color}`}}>
                    <div style={{fontSize:'12px', color:'#7a8a9a', marginBottom:'6px'}}>{t.profile}</div>
                    <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'28px', fontWeight:'900', color:t.color, marginBottom:'8px'}}>{t.time}</div>
                    <div style={{fontSize:'13px', color:'#aabbcc', lineHeight:1.6}}>{t.detail}</div>
                  </div>
                ))}
              </div>

              <P>
                The single most consistent finding: <strong style={s.strong}>daily short sessions outperform
                weekend cramming</strong> for this material. The NEC is dense. Your brain needs
                time to consolidate what you've read. An hour a day for 12 weeks
                will do more than 12 hours the weekend before the exam.
              </P>
            </Section>

            <Section id="modules" title="Which Modules to Prioritize">
              <P>
                Not all modules are equal. Some carry more exam weight. Some are harder.
                Some are both. Here's how to allocate your time:
              </P>

              <div style={s.moduleGrid}>
                {[
                  { mod:'Grounding & Bonding', priority:'🔴 High', note:'Article 250 is dense, frequently tested, and heavily calculation-based. Most candidates are weak here. Start early.', time:'Extra time' },
                  { mod:'Calculations & Trade Math', priority:'🔴 High', note:'10–15% of the exam is math. Conduit fill, load calcs, motor sizing. Can\'t wing it — needs practice.', time:'Extra time' },
                  { mod:'Wiring & Overcurrent', priority:'🔴 High', note:'AFCI, GFCI, branch circuit rules. Frequently tested — know which spaces require AFCI and GFCI protection cold.', time:'Extra time' },
                  { mod:'Wiring', priority:'🟡 Medium', note:'Articles 300–392. Conduit types, fill rules, installation requirements. Broad but learnable.', time:'Standard' },
                  { mod:'Motors & Transformers', priority:'🟡 Medium', note:'430 and 450. Table-heavy. Know Table 430.52 (breaker sizing) and 430.22 (conductor sizing).', time:'Standard' },
                  { mod:'Services & Feeders', priority:'🟡 Medium', note:'Articles 215, 225, and 230. Service entrance rules, disconnects, clearances.', time:'Standard' },
                  { mod:'Definitions & General', priority:'🟢 Foundation', note:'Start here regardless — Article 100 definitions underpin everything. Solid week to build vocabulary.', time:'Week 1' },
                  { mod:'Equipment General Use', priority:'🟡 Medium', note:'Articles 400–490. Receptacles, switches, panelboards, cords. Practical everyday material — don\'t overlook it.', time:'Standard' },
                  { mod:'Communications & Emergency', priority:'🟢 Lower', note:'Articles 700–820. Emergency systems and standby power. Lighter on the exam but worth knowing the basics.', time:'Light' },
                  { mod:'Special Occupancies', priority:'🟢 Lower', note:'Articles 500–590. Hazardous locations. Study the classification system but don\'t over-invest.', time:'Light' },
                  { mod:'Safety, Maintenance & Repair', priority:'🟢 Lower', note:'NFPA 70E, Cal/OSHA. Arc flash, lockout/tagout, PPE requirements.', time:'Light' },
                ].map(m => (
                  <div key={m.mod} style={s.moduleRow}>
                    <div style={{flex:1}}>
                      <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'14px', fontWeight:'900', color:'#d8e0e8', textTransform:'uppercase', marginBottom:'4px'}}>{m.mod}</div>
                      <div style={{fontSize:'12px', color:'#7a8a9a', lineHeight:1.5}}>{m.note}</div>
                    </div>
                    <div style={{textAlign:'right', flexShrink:0}}>
                      <div style={{fontSize:'13px', marginBottom:'4px'}}>{m.priority}</div>
                      <div style={{fontFamily:"'Courier New', monospace", fontSize:'10px', color:'#c8a84b'}}>{m.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="calc" title="Trade Math — The Make-or-Break Section">
              <P>
                Calculation questions are where many candidates lose the most points —
                not because they can't do the math, but because they haven't practiced
                the specific calculation types the exam uses.
              </P>
              <P>Know these cold before exam day:</P>
              <Ul items={[
                'Conduit fill calculations — using Chapter 9 tables and Annex C. Know how to find conductor area, apply fill percentages (1 wire: 53%, 2 wires: 31%, 3+ wires: 40%)',
                'Load calculations for dwelling units — NEC 220.12 lighting load, 220.54 dryer, 220.55 ranges, demand factors',
                'Motor circuit sizing — full-load current from Tables 430.247–430.250, conductor at 125% FLC, breaker from Table 430.52',
                'Transformer sizing — kVA calculations, primary/secondary current, primary overcurrent protection at 125% or 250% depending on type',
                'Voltage drop calculations — 2% for branch circuits, 3% for feeders, 5% combined. Conductor sizing formula.',
                'Box fill calculations — Article 314. Volume per conductor by wire size, device fill, clamp fill.',
              ]} />
              <CallOut>
                A basic calculator is provided on-screen at PSI testing centers. Practice
                all calculations with a simple calculator — not a scientific or programmable one.
                If you're slower without complex calculator functions, practice until you're not.
              </CallOut>
              <P>
                The most reliable way to get good at calculations is repetition.
                Work 5–10 calculation problems every single day in the two months before
                your exam. By test day they should feel automatic.
              </P>
            </Section>



            <Section id="method" title="The Study Method That Actually Works">
              <P>
                After teaching this material for four years, I've seen what works and what
                doesn't. Here's the method I recommend:
              </P>

              <div style={s.methodSteps}>
                {[
                  {
                    step:'Week 1–2',
                    title:'Vocabulary and Foundation',
                    body:'Start with Article 100 definitions. Don\'t skip this. The entire rest of the code is written in the language of Article 100. If you don\'t know what "feeder" vs "branch circuit" means precisely, you\'ll misread questions all the way through the exam.',
                  },
                  {
                    step:'Weeks 3–8',
                    title:'Module-by-Module Deep Study',
                    body:'Take one module per week. Read the relevant NEC articles first — don\'t just practice questions. Understand the structure of the article, the main rules, and the key exceptions. Then drill questions on that module. Review every wrong answer until you understand why you got it wrong.',
                  },
                  {
                    step:'Throughout',
                    title:'Daily Calculation Practice',
                    body:'Don\'t save calculations for a single week. Work 5 calculation problems every day from Week 3 onward. The types you\'ll encounter: conduit fill, load calculation, motor sizing, transformer sizing, voltage drop.',
                  },
                  {
                    step:'Weeks 9–11',
                    title:'Calculations & Trade Math',
                    body:'Dedicate these weeks to Title 8, Title 24, and CEC amendments. This feels disconnected from the NEC work you\'ve been doing, but treat it with the same discipline. It\'s on the exam.',
                  },
                  {
                    step:'Week 12+',
                    title:'Mixed Practice and Simulation',
                    body:'Stop studying module-by-module. Start mixing questions across all modules — this is how the real exam works. Run full 110-question timed simulations. Identify which modules you\'re still weakest on and concentrate there.',
                  },
                ].map((m, i) => (
                  <div key={i} style={s.methodStep}>
                    <div style={s.methodStepNum}>{m.step}</div>
                    <div>
                      <div style={s.methodStepTitle}>{m.title}</div>
                      <div style={s.methodStepBody}>{m.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="final" title="The Final 2 Weeks">
              <P>
                Two weeks out from your exam date, change your approach completely.
                Stop learning new material. You don't have time to absorb anything new —
                and trying to will create anxiety without improving your score.
              </P>
              <Ul items={[
                'Identify your three weakest modules from your practice scores. Study only those.',
                'Run at least two full 110-question timed simulations — 4.5 hours each, open book like the real exam.',
                'Review every question you got wrong in those simulations. Don\'t just note the right answer — understand the reasoning.',
                
                'The night before: stop studying at 6pm. Eat a real dinner. Sleep. You\'re not going to learn anything new in the last 12 hours that will help you — but being tired will definitely hurt.',
              ]} />
            </Section>

            <Section id="openbooktactics" title="Open Book Exam Tactics That Actually Save Time">
              <P>
                The exam is open book — but that only helps you if you can find answers
                quickly. Most candidates who fail don't run out of knowledge. They run out
                of time. Electricians who pass on the first attempt tend to use the same
                three codebook strategies. Here's exactly what they do.
              </P>

              <TipBlock icon="📇" color="#c8a84b" title="Use the index — not the chapters">
                <P>
                  The single biggest time-saver in the exam is the NEC index in the back
                  of the codebook. Experienced electricians skip the chapter pages entirely
                  and go straight to the index first.
                </P>
                <P>
                  The workflow is straightforward: identify the keyword in the question,
                  look it up in the index, jump to the article listed, then verify the
                  answer inside that section. That's it.
                </P>
                <P>
                  For example — a question about GFCI requirements for a garage. Instead
                  of flipping through Chapter 2 hoping to find it, go straight to the index:
                  GFCI → garages → Article 210.8. You're there in 15 seconds instead of 90.
                </P>
                <P>
                  The key is getting comfortable with the index before exam day. Practice
                  looking up keywords while you study so the motion is automatic by the time
                  you sit down at PSI.
                </P>
              </TipBlock>

              <TipBlock icon="🧠" color="#c8a84b" title="Memorize where key sections live — the codebook is unfamiliar">
                <P>
                  PSI provides an unmarked NEC codebook at the testing center. You cannot
                  bring your own. That means no personal tabs, no annotations — just a
                  clean book you've never touched before.
                </P>
                <P>
                  This makes it even more important to know the codebook's structure cold
                  before you walk in. The goal is to navigate a stranger's book without
                  hesitation. The articles that show up most on the exam are:
                </P>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:'8px', margin:'16px 0'}}>
                  {[
                    ['110', 'General Requirements'],
                    ['200', 'Neutral Conductors'],
                    ['210', 'Branch Circuits'],
                    ['215', 'Feeders'],
                    ['220', 'Load Calculations'],
                    ['240', 'Overcurrent Protection'],
                    ['250', 'Grounding & Bonding'],
                    ['300', 'Wiring Methods'],
                    ['310', 'Conductor Ampacity'],
                    ['314', 'Box Fill'],
                    ['430', 'Motors'],
                  ].map(([art, name]) => (
                    <div key={art} style={{background:'#0a1016', border:'1px solid rgba(200,168,75,0.12)', borderRadius:'4px', padding:'8px 12px', display:'flex', gap:'10px', alignItems:'center'}}>
                      <span style={{fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', fontWeight:'700', flexShrink:0}}>Art. {art}</span>
                      <span style={{fontSize:'12px', color:'#7a8a9a'}}>{name}</span>
                    </div>
                  ))}
                </div>
                <P>
                  Two tables need to be second nature: Table 310.16 (conductor ampacity,
                  in Article 310) and Table 8 (conductor properties / circular mil area,
                  in Chapter 9). These appear on nearly every exam. Knowing their location
                  and their key values without hunting saves several minutes total.
                </P>
              </TipBlock>

              <TipBlock icon="⏭" color="#c8a84b" title="Skip calculation questions on the first pass">
                <P>
                  This is one of the most consistently useful test-taking strategies for
                  this exam. Not all 110 questions take the same amount of time. Code
                  lookup questions — where you're confirming a rule or a requirement —
                  can be answered in 20 to 40 seconds with the index and a little
                  familiarity. Calculation questions — load calcs, voltage drop, motor
                  sizing — can easily take 2 to 3 minutes each.
                </P>
                <P>
                  The strategy: on your first pass through the exam, answer every code
                  question you can confidently handle, and flag any calculation question
                  for later. Once you've cleared the lookup questions, go back and work
                  through the math.
                </P>
                <P>
                  Why it works: code questions are worth the same points as calculation
                  questions. Spending 10 minutes on two hard calculations while leaving
                  five quick code questions unanswered is a losing trade. Secure the fast
                  points first, then tackle the time-consuming ones with whatever time
                  remains.
                </P>
              </TipBlock>

              <CallOut>
                Practice all three of these tactics before exam day — not just on the
                actual exam. Run through index lookups during your study sessions.
                Drill the key ampacity and conductor values until they're automatic. And in
                every timed practice session, skip calculation questions on the first pass.
                By exam day, these should be reflexes.
              </CallOut>

            </Section>

            <Section id="testday" title="Test Day Strategy">
              <P>
                A few things that make a real difference on exam day:
              </P>

              <TipBlock icon="✓" color="#27ae60" title="Read the entire question before reading the answers">
                Sounds obvious. Under pressure, most people read half a question and start
                eliminating answers. Read the whole thing. Pay attention to words like
                "minimum," "maximum," "not permitted," and "required" — these change the
                correct answer entirely.
              </TipBlock>

              <TipBlock icon="✓" color="#27ae60" title="Answer every question">
                There is no penalty for guessing. If you don't know, eliminate what you can
                and pick from what's left. A guess has at least a 25% chance of being right.
                A blank has 0%.
              </TipBlock>

              <TipBlock icon="✓" color="#27ae60" title="Flag and move on">
                If a question is taking more than 2 minutes, mark it and move forward.
                Spending 10 minutes on one question while leaving 5 others unanswered is
                a losing trade. Come back to flagged questions at the end.
              </TipBlock>

              <TipBlock icon="✓" color="#27ae60" title="Watch for 'except' and 'not' questions">
                The exam regularly asks which option is NOT correct, or which installation is
                NOT permitted. It's easy to miss the negative qualifier and pick the right
                answer to the wrong question. Underline or mentally highlight "EXCEPT" and
                "NOT" when you see them.
              </TipBlock>

              <TipBlock icon="✓" color="#27ae60" title="Trust your preparation on calculation questions">
                For calculation questions, work the math. Don't guess based on feel.
                If you've been practicing calculations daily, trust the process — do the
                calculation, check your units, pick the answer.
              </TipBlock>
            </Section>

          </Article>

          {/* CTA */}
          <div style={s.ctaBlock}>
            <div style={s.ctaBolt}>⚡</div>
            <div style={s.ctaTitle}>Start Practicing Today</div>
            <div style={s.ctaBody}>
              462 questions. 11 modules. Every answer tied to the exact NEC section.
              Built by the instructor who wrote this guide. Modules 1 & 2 + 2 Table Mastery drills always free.
            </div>
            <div style={s.ctaBtns}>
              <button style={s.btnGold} onClick={onLaunchApp}>Start Free — Modules 1 & 2 ⚡</button>
              <button style={s.btnGhost} onClick={() => onLaunchApp()}>Start Free — No Account Needed</button>
            </div>
          </div>

          {/* Related */}
          <div style={s.related}>
            <div style={s.relatedTitle}>Related Articles</div>
            <div style={s.relatedGrid}>
              <div style={s.relatedCard} onClick={() => onNavigate('nec-2020-changes')}>
                <div style={s.relatedLabel}>Code Changes</div>
                <div style={s.relatedName}>NEC 2020 vs 2017 — What Changed</div>
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
            <div style={s.sideTitle}>Quick Stats</div>
            {[['Questions','110'],['Time','4.5 hours'],['Passing','70%'],['Edition','2020 NEC'],['Pass rate','Low']].map(([k,v]) => (
              <div key={k} style={s.sideRow}><span style={s.sideKey}>{k}</span><span style={s.sideVal}>{v}</span></div>
            ))}
          </div>
          <div style={s.sideCard}>
            <div style={s.sideTitle}>Top Priorities</div>
            {['Grounding & Bonding','Trade Calculations','Wiring & Overcurrent','Motors & Transformers','Services & Feeders'].map((item, i) => (
              <div key={item} style={{fontSize:'13px', color:'#aabbcc', padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.04)', display:'flex', gap:'8px'}}>
                <span style={{color:'#c8a84b', fontFamily:"'Courier New', monospace", fontSize:'11px', flexShrink:0}}>{i+1}.</span>{item}
              </div>
            ))}
          </div>
          <div style={{...s.sideCard, borderColor:'rgba(200,168,75,0.3)', background:'rgba(200,168,75,0.04)'}}>
            <div style={s.sideTitle}>Practice the Exam</div>
            <p style={{fontSize:'13px', color:'#7a8a9a', lineHeight:1.6, marginBottom:'14px'}}>
              462 questions covering everything in this guide. Modules 1 & 2 + 2 Table Mastery drills always free.
            </p>
            <button style={{...s.btnGold, fontSize:'13px', padding:'10px', width:'100%'}} onClick={onLaunchApp}>
              Try Free ⚡
            </button>
          </div>
        </aside>
      </div>

      <PageFooter onNavigate={onNavigate} />
    </div>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Article({ children }) { return <article>{children}</article> }

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
        <li key={i} style={{display:'flex', gap:'10px', fontSize:'14px', color:'#aabbcc', padding:'7px 0', borderBottom:'1px solid rgba(255,255,255,0.03)', fontFamily:"'Georgia', serif", lineHeight:1.7}}>
          <span style={{color:'#c8a84b', flexShrink:0}}>—</span><span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CallOut({ children }) {
  return <div style={{background:'rgba(200,168,75,0.06)', borderLeft:'3px solid #c8a84b', padding:'13px 18px', borderRadius:'0 5px 5px 0', margin:'16px 0', fontSize:'14px', color:'#aabbcc', lineHeight:1.7, fontFamily:"'Georgia', serif"}}>{children}</div>
}

function TipBlock({ icon, color, title, children }) {
  return (
    <div style={{background:'#111820', border:`1px solid ${color}22`, borderLeft:`3px solid ${color}`, borderRadius:'0 6px 6px 0', padding:'16px 20px', marginBottom:'12px'}}>
      <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'14px', fontWeight:'900', textTransform:'uppercase', color, marginBottom:'8px', display:'flex', alignItems:'center', gap:'8px'}}>
        <span>{icon}</span><span>{title}</span>
      </div>
      <div style={{fontSize:'14px', color:'#aabbcc', lineHeight:1.7, fontFamily:"'Georgia', serif"}}>{children}</div>
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
  layout: { display:'flex', gap:'48px', padding:'48px 40px 80px', maxWidth:'1100px', margin:'0 auto', alignItems:'flex-start' },
  main: { flex:'1', minWidth:'280px' },
  sidebar: { width:'260px', flexShrink:0, position:'sticky', top:'80px', display:'flex', flexDirection:'column', gap:'16px' },
  toc: { background:'#111820', border:'1px solid rgba(200,168,75,0.1)', borderRadius:'6px', padding:'18px', marginBottom:'36px', display:'flex', flexDirection:'column', gap:'2px' },
  tocTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'11px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'8px' },
  tocLink: { color:'#7a8a9a', textDecoration:'none', fontSize:'13px', lineHeight:1.5, padding:'5px 0', borderBottom:'1px solid rgba(255,255,255,0.03)', fontFamily:"'Segoe UI', sans-serif" },
  strong: { color:'#d8e0e8', fontWeight:'700' },
  timelineGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:'2px', background:'rgba(200,168,75,0.07)', margin:'16px 0 20px', border:'1px solid rgba(200,168,75,0.07)' },
  timelineCard: { background:'#0a1016', padding:'20px 18px' },
  moduleGrid: { display:'flex', flexDirection:'column', gap:'1px', background:'rgba(200,168,75,0.07)', margin:'16px 0' },
  moduleRow: { background:'#0a1016', padding:'14px 16px', display:'flex', gap:'16px', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap' },
  methodSteps: { display:'flex', flexDirection:'column', gap:'2px', background:'rgba(200,168,75,0.07)', margin:'16px 0' },
  methodStep: { background:'#0a1016', padding:'18px', display:'flex', gap:'20px', alignItems:'flex-start', flexWrap:'wrap' },
  methodStepNum: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', letterSpacing:'1px', flexShrink:0, marginTop:'2px', width:'72px' },
  methodStepTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'14px', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', marginBottom:'6px' },
  methodStepBody: { fontSize:'13px', color:'#aabbcc', lineHeight:1.7, fontFamily:"'Georgia', serif" },
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
  sideVal: { color:'#aabbcc', textAlign:'right' },
  btnGold: { padding:'12px 24px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'14px', textTransform:'uppercase', letterSpacing:'0.5px', border:'none', borderRadius:'5px', cursor:'pointer' },
  btnGhost: { padding:'12px 20px', background:'transparent', color:'#c8a84b', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'13px', textTransform:'uppercase', letterSpacing:'0.5px', border:'1px solid rgba(200,168,75,0.3)', borderRadius:'5px', cursor:'pointer' },
}
