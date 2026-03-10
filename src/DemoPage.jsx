import { useState } from 'react'

// 5 handpicked demo questions — one from each of 5 different modules
// Chosen to be engaging, representative, and not too easy
const DEMO_QUESTIONS = [
  {
    id: 1,
    mod: 'Module 1 — Definitions & General',
    modColor: '#e74c3c',
    ref: 'NEC Article 100',
    diff: 'Easy',
    q: "What is the definition of 'ampacity'?",
    opts: [
      'Maximum voltage a conductor can carry',
      'Current in amperes a conductor can carry continuously without exceeding its temperature rating',
      'Resistance per 1,000 feet of conductor',
      'Cross-sectional area measured in circular mils',
    ],
    ans: 1,
    exp: "Ampacity = the current a conductor can carry continuously without exceeding its temperature rating. Every conductor sizing decision flows from this definition — it's the foundation of Chapter 3.",
  },
  {
    id: 2,
    mod: 'Module 2 — Wiring & Overcurrent',
    modColor: '#e67e22',
    ref: 'NEC 210.8(A)',
    diff: 'Medium',
    q: 'GFCI protection is required in which dwelling locations per the 2020 NEC?',
    opts: [
      'Bathrooms and kitchens only',
      'Anywhere within 6 feet of water',
      'Bathrooms, garages, outdoors, crawl spaces, unfinished basements, kitchen countertop within 6 ft of sink, and boathouses',
      'All receptacles in the dwelling unit',
    ],
    ans: 2,
    exp: "The 2020 NEC significantly expanded GFCI requirements. The full list now includes bathrooms, garages, outdoors, crawl spaces, unfinished basements, kitchen countertops within 6 feet of a sink, and boathouses. This is one of the most-updated and most-tested areas on the CA exam.",
  },
  {
    id: 3,
    mod: 'Module 4 — Grounding & Bonding',
    modColor: '#27ae60',
    ref: 'NEC Table 250.122',
    diff: 'Hard',
    q: 'What is the minimum size equipment grounding conductor (EGC) for a circuit protected by a 60-ampere overcurrent device?',
    opts: [
      '14 AWG copper',
      '12 AWG copper',
      '10 AWG copper',
      '8 AWG copper',
    ],
    ans: 2,
    exp: "Per NEC Table 250.122: a 60A OCPD requires a minimum 10 AWG copper EGC. The EGC is sized from this table based on the rating of the OCPD — not the load current. Know Table 250.122 cold for the exam.",
  },
  {
    id: 4,
    mod: 'Module 8 — Motors & Transformers',
    modColor: '#c0392b',
    ref: 'NEC Table 430.52',
    diff: 'Hard',
    q: 'The maximum rating of an inverse time circuit breaker for a single-phase AC motor branch circuit is:',
    opts: [
      '125% of motor full-load current',
      '150% of motor full-load current',
      '250% of motor full-load current',
      '400% of motor full-load current',
    ],
    ans: 2,
    exp: "Per NEC Table 430.52: inverse time circuit breakers for single-phase and AC motors may be sized up to 250% of motor FLC. This is higher than standard overcurrent protection to allow for motor starting inrush current without nuisance tripping.",
  },
  {
    id: 5,
    mod: 'Module 11 — California-Specific',
    modColor: '#8e44ad',
    ref: '8 CCR § 3314',
    diff: 'Medium',
    q: "Under California's lockout/tagout regulations (8 CCR § 3314), who is authorized to remove a lockout or tagout device?",
    opts: [
      'Any qualified electrician on site',
      'The foreman or supervisor in charge',
      'Only the employee who installed it, with limited exceptions for shift changes',
      'Any licensed journeyman electrician',
    ],
    ans: 2,
    exp: "8 CCR § 3314 requires that only the employee who installed the lockout/tagout device may remove it. If that employee is unavailable (e.g., end of shift), a specific documented procedure must be followed. This protects against someone re-energizing equipment while another worker is still exposed. California-specific LOTO rules are heavily tested.",
  },
]

export default function DemoPage({ onLaunchApp, onNavigate }) {
  const [current, setCurrent]   = useState(0)
  const [selected, setSelected] = useState(null)
  const [showExp, setShowExp]   = useState(false)
  const [results, setResults]   = useState([])    // {correct: bool}[]
  const [done, setDone]         = useState(false)

  const q = DEMO_QUESTIONS[current]
  const totalCorrect = results.filter(r => r.correct).length

  const handleAnswer = (idx) => {
    if (selected !== null) return
    const correct = idx === q.ans
    setSelected(idx)
    setShowExp(true)
    setResults(r => [...r, { correct }])
  }

  const handleNext = () => {
    if (current + 1 >= DEMO_QUESTIONS.length) {
      setDone(true)
    } else {
      setCurrent(i => i + 1)
      setSelected(null)
      setShowExp(false)
    }
  }

  const restart = () => {
    setCurrent(0)
    setSelected(null)
    setShowExp(false)
    setResults([])
    setDone(false)
  }

  const s = styles

  // ── RESULTS SCREEN ─────────────────────────────────────────
  if (done) {
    const pct = Math.round((totalCorrect / DEMO_QUESTIONS.length) * 100)
    return (
      <div style={s.root}>
        <DemoNav onHome={() => onNavigate && onNavigate('landing')} onLaunchApp={onLaunchApp} />
        <div style={s.resultsWrap}>
          <div style={s.resultsCard}>
            <div style={s.resultsBolt}>⚡</div>
            <div style={s.resultsScore} data-pct={pct}>
              {totalCorrect} / {DEMO_QUESTIONS.length}
            </div>
            <div style={{...s.resultsPct, color: pct >= 80 ? '#27ae60' : pct >= 60 ? '#c8a84b' : '#e74c3c'}}>
              {pct}% Correct
            </div>

            <div style={s.resultsMods}>
              {DEMO_QUESTIONS.map((q, i) => (
                <div key={i} style={{...s.resultsMod, borderColor: results[i]?.correct ? '#27ae60' : '#e74c3c'}}>
                  <span style={{color: results[i]?.correct ? '#27ae60' : '#e74c3c', fontSize:'16px'}}>
                    {results[i]?.correct ? '✓' : '✗'}
                  </span>
                  <span style={{fontSize:'12px', color:'#7a8a9a', flex:1}}>{q.mod.split('—')[1]?.trim()}</span>
                  <span style={{...s.diffTag, background: getDiffBg(q.diff)}}>{q.diff}</span>
                </div>
              ))}
            </div>

            <div style={s.resultsMsg}>
              {pct === 100
                ? "Perfect score — you're ready for the real thing. Unlock all 512 questions."
                : pct >= 60
                ? "Solid start. The full app covers 512 questions across all 12 modules with detailed code explanations."
                : "These questions get harder. The full app builds you up module by module with explanations that teach, not just reveal answers."}
            </div>

            <div style={s.resultsCtaRow}>
              <button style={s.btnGold} onClick={onLaunchApp}>
                ⚡ Unlock All 500 Questions
              </button>
              <button style={s.btnGhost} onClick={restart}>
                Retry Demo
              </button>
            </div>

            <div style={s.resultsNote}>
              Module 1 (30 questions) is always free — no payment needed.
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── QUESTION SCREEN ────────────────────────────────────────
  return (
    <div style={s.root}>
      <DemoNav onHome={() => onNavigate && onNavigate('landing')} onLaunchApp={onLaunchApp} />

      {/* Hero intro — only shown before first answer on Q1 */}
      {current === 0 && selected === null && (
        <div style={s.introBanner}>
          <div style={s.introInner}>
            <span style={s.introBolt}>⚡</span>
            <div>
              <div style={s.introTitle}>5 Sample Questions — Try Before You Buy</div>
              <div style={s.introSub}>One question from each of 5 different modules. No account, no signup.</div>
            </div>
          </div>
        </div>
      )}

      <div style={s.quizWrap}>

        {/* Progress bar */}
        <div style={s.progressRow}>
          <div style={s.progressPips}>
            {DEMO_QUESTIONS.map((_, i) => (
              <div key={i} style={{
                ...s.pip,
                background: i < results.length
                  ? (results[i]?.correct ? '#27ae60' : '#e74c3c')
                  : i === current ? '#c8a84b' : '#1a2535',
                border: i === current ? '2px solid #c8a84b' : '2px solid transparent',

              }} />
            ))}
          </div>
          <div style={s.progressLabel}>
            {current + 1} <span style={{color:'#4a5a6a'}}>/</span> {DEMO_QUESTIONS.length}
          </div>
        </div>

        {/* Module tag */}
        <div style={s.modTag}>
          <span style={{...s.modDot, background: q.modColor}} />
          {q.mod}
          <span style={{...s.diffTag, background: getDiffBg(q.diff), marginLeft:'8px'}}>{q.diff}</span>
        </div>

        {/* Question */}
        <div style={s.questionCard}>
          <div style={s.questionText}>{q.q}</div>

          {/* Options */}
          <div style={s.options}>
            {q.opts.map((opt, idx) => {
              let optStyle = s.option
              if (selected !== null) {
                if (idx === q.ans)       optStyle = {...s.option, ...s.optCorrect}
                else if (idx === selected) optStyle = {...s.option, ...s.optWrong}
                else                     optStyle = {...s.option, ...s.optDim}
              }
              return (
                <button key={idx} style={optStyle} onClick={() => handleAnswer(idx)}>
                  <span style={s.optLetter}>{String.fromCharCode(65 + idx)}</span>
                  <span style={{flex:1, textAlign:'left'}}>{opt}</span>
                  {selected !== null && idx === q.ans && <span style={{color:'#27ae60', fontSize:'18px'}}>✓</span>}
                  {selected !== null && idx === selected && idx !== q.ans && <span style={{color:'#e74c3c', fontSize:'18px'}}>✗</span>}
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {showExp && (
            <div style={s.explanation}>
              <div style={s.expHeader}>
                <span style={selected === q.ans ? s.expCorrectBadge : s.expWrongBadge}>
                  {selected === q.ans ? '✓ Correct' : '✗ Incorrect'}
                </span>
                <span style={s.refBadge}>{q.ref}</span>
              </div>
              <div style={s.expText}>{q.exp}</div>
              <button style={s.nextBtn} onClick={handleNext}>
                {current + 1 < DEMO_QUESTIONS.length ? 'Next Question →' : 'See Results →'}
              </button>
            </div>
          )}
        </div>

        {/* CTA sidebar nudge */}
        {selected !== null && !showExp && null}

        <div style={s.footerNudge}>
          <span style={{color:'#4a5a6a', fontSize:'13px'}}>
            This is a sample — the full app has 512 questions across 12 modules.
          </span>
          <button style={s.nudgeBtn} onClick={onLaunchApp}>Unlock Free Module 1 →</button>
        </div>

      </div>
    </div>
  )
}

// ── Sub-components ──────────────────────────────────────────

function DemoNav({ onHome, onLaunchApp }) {
  return (
    <nav style={{position:'sticky', top:0, zIndex:100, padding:'12px 32px', display:'flex', alignItems:'center', justifyContent:'space-between', background:'rgba(10,16,22,0.96)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(200,168,75,0.15)'}}>
      <button onClick={onHome} style={{display:'flex', alignItems:'center', gap:'8px', background:'none', border:'none', cursor:'pointer', padding:0}}>
        <span style={{fontSize:'20px'}}>⚡</span>
        <span style={{fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'17px', color:'#c8a84b', letterSpacing:'1px', textTransform:'uppercase'}}>
          West Coast <span style={{color:'#d8e0e8', fontWeight:'400'}}>Wire Pro</span>
        </span>
      </button>
      <button
        style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'13px', padding:'8px 18px', borderRadius:'4px', border:'none', cursor:'pointer', textTransform:'uppercase', letterSpacing:'0.5px'}}
        onClick={onLaunchApp}>
        Try Free ⚡
      </button>
    </nav>
  )
}

// ── Helpers ─────────────────────────────────────────────────

function getDiffBg(diff) {
  return diff === 'Easy' ? 'rgba(39,174,96,0.15)' : diff === 'Medium' ? 'rgba(200,168,75,0.15)' : 'rgba(231,76,60,0.15)'
}

// ── Styles ───────────────────────────────────────────────────

const styles = {
  root: { minHeight:'100vh', background:'#0a1016', color:'#d8e0e8', fontFamily:"'Segoe UI', Arial, sans-serif" },

  introBanner: { background:'linear-gradient(135deg, #111820, #1a2535)', borderBottom:'1px solid rgba(200,168,75,0.2)', padding:'16px 32px' },
  introInner: { maxWidth:'760px', margin:'0 auto', display:'flex', alignItems:'center', gap:'16px' },
  introBolt: { fontSize:'32px' },
  introTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'17px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', marginBottom:'2px' },
  introSub: { fontSize:'13px', color:'#7a8a9a' },

  quizWrap: { maxWidth:'680px', margin:'0 auto', padding:'32px 20px 80px' },

  progressRow: { display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'20px' },
  progressPips: { display:'flex', gap:'8px' },
  pip: { width:'28px', height:'6px', borderRadius:'3px', transition:'all 0.3s' },
  progressLabel: { fontFamily:"'Courier New', monospace", fontSize:'13px', color:'#c8a84b', fontWeight:'700' },

  modTag: { display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px', fontSize:'13px', color:'#7a8a9a', fontFamily:"'Courier New', monospace" },
  modDot: { width:'8px', height:'8px', borderRadius:'50%', flexShrink:0 },
  diffTag: { fontSize:'10px', fontFamily:"'Courier New', monospace", padding:'2px 8px', borderRadius:'2px', color:'#c8a84b', fontWeight:'700' },

  questionCard: { background:'#111820', border:'1px solid rgba(200,168,75,0.12)', borderRadius:'8px', padding:'28px' },
  questionText: { fontSize:'18px', fontWeight:'600', lineHeight:'1.55', marginBottom:'24px', color:'#d8e0e8' },

  options: { display:'flex', flexDirection:'column', gap:'10px', marginBottom:'0' },
  option: { display:'flex', alignItems:'center', gap:'14px', width:'100%', textAlign:'left', padding:'14px 18px', borderRadius:'6px', border:'2px solid rgba(200,168,75,0.12)', cursor:'pointer', fontSize:'14px', lineHeight:'1.5', color:'#d8e0e8', background:'#0a1016', transition:'all 0.15s', fontFamily:'inherit' },
  optCorrect: { border:'2px solid #27ae60', background:'rgba(39,174,96,0.1)', color:'#2ecc71' },
  optWrong:   { border:'2px solid #e74c3c', background:'rgba(231,76,60,0.1)', color:'#e74c3c' },
  optDim:     { opacity:0.35, cursor:'default' },
  optLetter:  { fontFamily:"'Courier New', monospace", fontSize:'12px', color:'#4a5a6a', fontWeight:'700', flexShrink:0, width:'18px' },

  explanation: { marginTop:'20px', paddingTop:'20px', borderTop:'1px solid rgba(200,168,75,0.12)' },
  expHeader: { display:'flex', alignItems:'center', gap:'10px', marginBottom:'12px', flexWrap:'wrap' },
  expCorrectBadge: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'12px', fontWeight:'900', textTransform:'uppercase', color:'#27ae60', background:'rgba(39,174,96,0.12)', padding:'4px 10px', borderRadius:'3px', letterSpacing:'0.5px' },
  expWrongBadge:   { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'12px', fontWeight:'900', textTransform:'uppercase', color:'#e74c3c', background:'rgba(231,76,60,0.12)', padding:'4px 10px', borderRadius:'3px', letterSpacing:'0.5px' },
  refBadge: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', background:'rgba(200,168,75,0.1)', border:'1px solid rgba(200,168,75,0.25)', padding:'3px 8px', borderRadius:'2px' },
  expText: { fontSize:'14px', color:'#aabbcc', lineHeight:'1.75', marginBottom:'20px' },

  nextBtn: { display:'block', width:'100%', padding:'13px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'15px', textTransform:'uppercase', letterSpacing:'0.5px', border:'none', borderRadius:'5px', cursor:'pointer' },

  footerNudge: { display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'20px', padding:'14px 20px', background:'#111820', borderRadius:'6px', border:'1px solid rgba(200,168,75,0.08)', flexWrap:'wrap', gap:'10px' },
  nudgeBtn: { background:'none', border:'1px solid rgba(200,168,75,0.4)', color:'#c8a84b', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'12px', textTransform:'uppercase', letterSpacing:'0.5px', padding:'7px 14px', borderRadius:'4px', cursor:'pointer' },

  // Results screen
  resultsWrap: { display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 20px', minHeight:'80vh' },
  resultsCard: { background:'#111820', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'12px', padding:'48px 36px', maxWidth:'480px', width:'100%', textAlign:'center' },
  resultsBolt: { fontSize:'52px', marginBottom:'8px' },
  resultsScore: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'64px', fontWeight:'900', color:'#c8a84b', lineHeight:'1' },
  resultsPct: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'22px', fontWeight:'900', textTransform:'uppercase', marginBottom:'28px', marginTop:'4px' },
  resultsMods: { display:'flex', flexDirection:'column', gap:'6px', marginBottom:'24px', textAlign:'left' },
  resultsMod: { display:'flex', alignItems:'center', gap:'10px', padding:'8px 12px', background:'#0a1016', borderRadius:'5px', border:'1px solid' },
  resultsMsg: { fontSize:'14px', color:'#7a8a9a', lineHeight:'1.7', marginBottom:'28px', padding:'0 8px' },
  resultsCtaRow: { display:'flex', flexDirection:'column', gap:'10px', marginBottom:'16px' },
  resultsNote: { fontSize:'12px', color:'#4a5a6a' },

  btnGold: { padding:'15px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'16px', textTransform:'uppercase', letterSpacing:'0.5px', border:'none', borderRadius:'6px', cursor:'pointer' },
  btnGhost: { padding:'12px', background:'transparent', color:'#7a8a9a', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'14px', textTransform:'uppercase', letterSpacing:'0.5px', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'6px', cursor:'pointer' },
}
