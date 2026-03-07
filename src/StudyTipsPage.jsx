export default function StudyTipsPage({ onLaunchApp, onNavigate }) {
  return (
    <div style={s.root}>
      <BlogNav onHome={() => onNavigate('landing')} onLaunchApp={onLaunchApp} />

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

      <div style={s.layout}>
        <main style={s.main}>

          <div style={s.toc}>
            <div style={s.tocTitle}>In This Guide</div>
            {[
              ['#reality',    'The Honest Reality About This Exam'],
              ['#mistakes',   'Why Most People Fail (And How to Not Be One of Them)'],
              ['#timeline',   'How Long to Study — Realistic Timelines'],
              ['#modules',    'Which Modules to Prioritize'],
              ['#calc',       'Trade Math — The Make-or-Break Section'],
              ['#california', 'The California-Specific Content Nobody Prepares For'],
              ['#method',     'The Study Method That Actually Works'],
              ['#final',      'The Final 2 Weeks'],
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

              <TipBlock icon="✗" color="#e74c3c" title="Skipping the California-specific content">
                Most exam prep tools focus exclusively on the NEC. The California exam also
                tests Title 8 (Cal/OSHA), Title 24 (energy code), and California Electrical
                Code amendments. This content is unique to the CA exam and accounts for a
                meaningful portion of questions. It's easy to skip. Don't.
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
                    detail: 'Need to relearn some rules, refresh 2020 NEC changes, and drill California-specific content.',
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
                  { mod:'Wiring & Overcurrent', priority:'🔴 High', note:'AFCI, GFCI, branch circuit rules. Lots of "2020 NEC changed this" traps. Know the current rules cold.', time:'Extra time' },
                  { mod:'California-Specific Rules', priority:'🔴 High', note:'Title 8, Title 24, CEC. Often entirely skipped. If you skip it, you give up ~8–10% of questions for free.', time:'Extra time' },
                  { mod:'Wiring', priority:'🟡 Medium', note:'Articles 300–392. Conduit types, fill rules, installation requirements. Broad but learnable.', time:'Standard' },
                  { mod:'Motors & Transformers', priority:'🟡 Medium', note:'430 and 450. Table-heavy. Know Table 430.52 (breaker sizing) and 430.22 (conductor sizing).', time:'Standard' },
                  { mod:'Services & Feeders', priority:'🟡 Medium', note:'Articles 215, 225, and 230. Service entrance rules, disconnects, clearances.', time:'Standard' },
                  { mod:'Definitions & General', priority:'🟢 Foundation', note:'Start here regardless — Article 100 definitions underpin everything. Solid week to build vocabulary.', time:'Week 1' },
                  { mod:'Equipment General Use', priority:'🟡 Medium', note:'Articles 400–490. Receptacles, switches, panelboards, cords. Practical everyday material — don\'t overlook it.', time:'Standard' },
                  { mod:'Communications & Emergency', priority:'🟢 Lower', note:'Articles 700–820. Emergency systems and standby power. Lighter on the exam but worth knowing the basics.', time:'Light' },
                  { mod:'Special Occupancies', priority:'🟢 Lower', note:'Articles 500–590. Hazardous locations. Study the classification system but don\'t over-invest.', time:'Light' },
                  { mod:'Safety, Maintenance & Repair', priority:'🟢 Lower', note:'NFPA 70E, Cal/OSHA. Arc flash, lockout/tagout, PPE. California-specific safety rules show up here.', time:'Light' },
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

            <Section id="california" title="The California-Specific Content Nobody Prepares For">
              <P>
                This is the section where prepared candidates separate from unprepared ones.
                California's exam tests content that doesn't exist in any other state's exam.
                Most generic prep materials don't cover it at all.
              </P>
              <P>Focus on these California-specific areas:</P>

              <TipBlock icon="⚡" color="#c8a84b" title="Title 8, California Code of Regulations — Cal/OSHA">
                8 CCR electrical safety orders govern electrical work safety in California.
                Key sections: § 2940 series (electrical safety orders for general industry),
                § 3314 (lockout/tagout), and § 1509 (injury and illness prevention program).
                These appear in the safety module questions and are entirely absent from
                NEC-only study materials.
              </TipBlock>

              <TipBlock icon="⚡" color="#c8a84b" title="Title 24, California Building Code — Energy Efficiency">
                California's energy code adds requirements beyond the NEC for lighting
                controls, occupancy sensors, daylight controls, and solar-ready wiring.
                The 2022 Title 24 update expanded requirements significantly. Know the
                residential and commercial lighting control requirements.
              </TipBlock>

              <TipBlock icon="⚡" color="#c8a84b" title="California Electrical Code (CEC) Amendments">
                California amends the NEC for its own adoption. Where the CEC differs
                from the NEC, the CEC governs. Key amendment areas include fire alarm wiring,
                seismic bracing requirements, and some grounding rules.
              </TipBlock>

              <P>
                Allocate at least 2 full weeks of your study time to California-specific
                content. It feels like extra work because it's outside the NEC, but on
                the CA exam it's not extra — it's required.
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
                    title:'California-Specific Content',
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
                'Do a final pass on California-specific content. It\'s easy to forget over a long study period.',
                'The night before: stop studying at 6pm. Eat a real dinner. Sleep. You\'re not going to learn anything new in the last 12 hours that will help you — but being tired will definitely hurt.',
              ]} />
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
              500 questions. 12 modules. Every answer tied to the exact NEC section.
              Built by the instructor who wrote this guide. Module 1 always free.
            </div>
            <div style={s.ctaBtns}>
              <button style={s.btnGold} onClick={onLaunchApp}>Start Free — Module 1 ⚡</button>
              <button style={s.btnGhost} onClick={() => onNavigate('demo')}>Try 5 Sample Questions</button>
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
        <aside style={s.sidebar}>
          <div style={s.sideCard}>
            <div style={s.sideTitle}>Quick Stats</div>
            {[['Questions','110'],['Time','4.5 hours'],['Passing','70%'],['Edition','2020 NEC'],['Pass rate','Low']].map(([k,v]) => (
              <div key={k} style={s.sideRow}><span style={s.sideKey}>{k}</span><span style={s.sideVal}>{v}</span></div>
            ))}
          </div>
          <div style={s.sideCard}>
            <div style={s.sideTitle}>Top Priorities</div>
            {['Grounding & Bonding','Trade Calculations','Wiring & Overcurrent','California-Specific (Title 8/24)','Motors & Transformers'].map((item, i) => (
              <div key={item} style={{fontSize:'13px', color:'#aabbcc', padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.04)', display:'flex', gap:'8px'}}>
                <span style={{color:'#c8a84b', fontFamily:"'Courier New', monospace", fontSize:'11px', flexShrink:0}}>{i+1}.</span>{item}
              </div>
            ))}
          </div>
          <div style={{...s.sideCard, borderColor:'rgba(200,168,75,0.3)', background:'rgba(200,168,75,0.04)'}}>
            <div style={s.sideTitle}>Practice the Exam</div>
            <p style={{fontSize:'13px', color:'#7a8a9a', lineHeight:1.6, marginBottom:'14px'}}>
              500 questions covering everything in this guide. Module 1 always free.
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

function BlogNav({ onHome, onLaunchApp }) {
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
  const btn = (label, to) => <button key={to} style={{background:'none', border:'none', color:'#4a5a6a', fontSize:'12px', cursor:'pointer', padding:0}} onClick={() => onNavigate(to)}>{label}</button>
  return (
    <footer style={{borderTop:'1px solid rgba(200,168,75,0.1)', padding:'28px 40px', background:'#0a1016', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px'}}>
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
  hero: { padding:'64px 40px 48px', position:'relative', overflow:'hidden', borderBottom:'1px solid rgba(200,168,75,0.08)' },
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
  main: { flex:'1', minWidth:0 },
  sidebar: { width:'260px', flexShrink:0, position:'sticky', top:'80px', display:'flex', flexDirection:'column', gap:'16px' },
  toc: { background:'#111820', border:'1px solid rgba(200,168,75,0.1)', borderRadius:'6px', padding:'18px', marginBottom:'36px', display:'flex', flexDirection:'column', gap:'2px' },
  tocTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'11px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'8px' },
  tocLink: { color:'#7a8a9a', textDecoration:'none', fontSize:'13px', lineHeight:1.5, padding:'5px 0', borderBottom:'1px solid rgba(255,255,255,0.03)', fontFamily:"'Segoe UI', sans-serif" },
  strong: { color:'#d8e0e8', fontWeight:'700' },
  timelineGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:'2px', background:'rgba(200,168,75,0.07)', margin:'16px 0 20px', border:'1px solid rgba(200,168,75,0.07)' },
  timelineCard: { background:'#0a1016', padding:'20px 18px' },
  moduleGrid: { display:'flex', flexDirection:'column', gap:'1px', background:'rgba(200,168,75,0.07)', margin:'16px 0' },
  moduleRow: { background:'#0a1016', padding:'14px 16px', display:'flex', gap:'16px', justifyContent:'space-between', alignItems:'flex-start' },
  methodSteps: { display:'flex', flexDirection:'column', gap:'2px', background:'rgba(200,168,75,0.07)', margin:'16px 0' },
  methodStep: { background:'#0a1016', padding:'18px', display:'flex', gap:'20px', alignItems:'flex-start' },
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
