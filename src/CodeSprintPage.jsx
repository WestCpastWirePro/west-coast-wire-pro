// CodeSprintPage.jsx — NEC Article Navigator Game
// Scientific basis:
//   • Spatial memory: seeing WHERE in the NEC builds "book map" in your brain
//   • Active recall under time pressure (Roediger & Karpicke 2006)
//   • Leitner spaced repetition: wrong answers return sooner
//   • Interleaved practice: mixed articles > blocked chapter study
import { useState, useEffect, useRef, useCallback } from 'react'

// ─── NEC 2020 Article Data ────────────────────────────────────────────────────
// Each entry: { id, article, title, chapter, chapterName, scenario, hint, distractors }
const ARTICLES = [
  // Chapter 1 — General
  { id:1,  article:'90',  title:'Introduction — Scope & Purpose',           chapter:1, chapterName:'General',
    scenario:'You need to find the purpose and scope of the NEC itself — what it does and does not cover.',
    hint:'The very first article — where the book explains what it regulates.',
    distractors:['100','110','200'] },
  { id:2,  article:'100', title:'Definitions',                               chapter:1, chapterName:'General',
    scenario:'The exam question uses a term like "accessible" or "ampacity" and you need the official NEC definition.',
    hint:'Every defined term in the NEC — your dictionary.',
    distractors:['90','110','210'] },
  { id:3,  article:'110', title:'Requirements for Electrical Installations',  chapter:1, chapterName:'General',
    scenario:'Working clearance in front of a 480V panel — how much space is required?',
    hint:'Workspace, headroom, lighting, and general installation requirements.',
    distractors:['230','408','250'] },

  // Chapter 2 — Wiring and Protection
  { id:4,  article:'210', title:'Branch Circuits',                            chapter:2, chapterName:'Wiring & Protection',
    scenario:'GFCI protection required for a bathroom receptacle — which article covers it?',
    hint:'Everything about branch circuits: GFCI, AFCI, receptacle spacing, small appliance circuits.',
    distractors:['406','215','220'] },
  { id:5,  article:'215', title:'Feeders',                                    chapter:2, chapterName:'Wiring & Protection',
    scenario:'Sizing the conductors between the main panel and a sub-panel.',
    hint:'Feeder conductors — between service and final branch circuit overcurrent device.',
    distractors:['210','220','230'] },
  { id:6,  article:'220', title:'Branch-Circuit, Feeder & Service Calculations', chapter:2, chapterName:'Wiring & Protection',
    scenario:'Calculating total load for a residential service — demand factors and load calculations.',
    hint:'All the load calculation math: demand factors, optional method, standard method.',
    distractors:['230','310','215'] },
  { id:7,  article:'225', title:'Outside Branch Circuits and Feeders',        chapter:2, chapterName:'Wiring & Protection',
    scenario:'Running overhead conductors from a house to a detached garage — clearances and requirements.',
    hint:'Outdoor overhead and underground feeders to separate structures.',
    distractors:['230','300','215'] },
  { id:8,  article:'230', title:'Services',                                   chapter:2, chapterName:'Wiring & Protection',
    scenario:'Service entrance conductors, service disconnect location, number of service disconnects allowed.',
    hint:'Everything from the utility to the first disconnect — the service.',
    distractors:['215','250','310'] },
  { id:9,  article:'240', title:'Overcurrent Protection',                     chapter:2, chapterName:'Wiring & Protection',
    scenario:'Breaker sizing, fuse ratings, where overcurrent devices must be located.',
    hint:'Breakers and fuses — sizing, location, and exceptions.',
    distractors:['430','250','310'] },
  { id:10, article:'250', title:'Grounding and Bonding',                      chapter:2, chapterName:'Wiring & Protection',
    scenario:'Size of the grounding electrode conductor, bonding jumper requirements, ground rod spacing.',
    hint:'The longest article in the NEC — all things grounding and bonding.',
    distractors:['310','230','300'] },

  // Chapter 3 — Wiring Methods
  { id:11, article:'300', title:'General Requirements — Wiring Methods',      chapter:3, chapterName:'Wiring Methods & Materials',
    scenario:'Minimum burial depth for underground conductors, protection from physical damage.',
    hint:'General rules that apply to ALL wiring methods — burial depths, bends, protection.',
    distractors:['310','250','334'] },
  { id:12, article:'310', title:'Conductors for General Wiring',              chapter:3, chapterName:'Wiring Methods & Materials',
    scenario:'Maximum temperature rating for conductors in a conduit, conductor insulation types.',
    hint:'Conductor ampacity, insulation types, temperature ratings — and Table 310.16.',
    distractors:['300','240','250'] },
  { id:13, article:'314', title:'Outlet, Device, Pull & Junction Boxes',      chapter:3, chapterName:'Wiring Methods & Materials',
    scenario:'Maximum fill for a 4" square junction box, box fill calculations for conductors.',
    hint:'All junction, outlet, and pull box sizing requirements and fill calculations.',
    distractors:['300','312','358'] },
  { id:14, article:'334', title:'Nonmetallic-Sheathed Cable (NM / Romex)',    chapter:3, chapterName:'Wiring Methods & Materials',
    scenario:'Where NM cable (Romex) is permitted and prohibited, staple spacing requirements.',
    hint:'Romex — support intervals, permitted uses, prohibited locations.',
    distractors:['320','330','300'] },
  { id:15, article:'344', title:'Rigid Metal Conduit (RMC)',                  chapter:3, chapterName:'Wiring Methods & Materials',
    scenario:'Support intervals and permitted uses for rigid metal conduit.',
    hint:'RMC — the heaviest conduit, maximum protection.',
    distractors:['352','358','348'] },
  { id:16, article:'348', title:'Flexible Metal Conduit (FMC)',               chapter:3, chapterName:'Wiring Methods & Materials',
    scenario:'Maximum length of flex when used as a grounding means, permitted uses.',
    hint:'Flex conduit — the coiled metal wiring method, 6-foot rule.',
    distractors:['350','344','358'] },
  { id:17, article:'352', title:'Rigid PVC Conduit (PVC)',                    chapter:3, chapterName:'Wiring Methods & Materials',
    scenario:'Expansion fittings required for long PVC conduit runs — thermal expansion requirements.',
    hint:'PVC conduit — expansion joints, burial, support intervals.',
    distractors:['344','358','300'] },
  { id:18, article:'358', title:'Electrical Metallic Tubing (EMT)',           chapter:3, chapterName:'Wiring Methods & Materials',
    scenario:'Support intervals for EMT conduit, number of bends permitted between pull points.',
    hint:'EMT — the thin-wall conduit used everywhere commercially.',
    distractors:['344','352','348'] },

  // Chapter 4 — Equipment for General Use
  { id:19, article:'404', title:'Switches',                                   chapter:4, chapterName:'Equipment for General Use',
    scenario:'Height requirements for wall switches, snap switches used as motor disconnects.',
    hint:'All switch requirements — ratings, locations, grounding.',
    distractors:['406','408','210'] },
  { id:20, article:'406', title:'Receptacles, Cord Connectors & Attachment Plugs', chapter:4, chapterName:'Equipment for General Use',
    scenario:'Tamper-resistant receptacle requirements, receptacle replacement rules.',
    hint:'Receptacles — tamper-resistant, weather-resistant, replacement requirements.',
    distractors:['210','404','410'] },
  { id:21, article:'408', title:'Switchboards, Panelboards & Distribution Boards', chapter:4, chapterName:'Equipment for General Use',
    scenario:'Panelboard clearances, directory requirements, maximum number of circuits in a panel.',
    hint:'Panels and switchboards — the article with the 42-circuit rule.',
    distractors:['404','450','230'] },
  { id:22, article:'410', title:'Luminaires, Lampholders & Lamps',           chapter:4, chapterName:'Equipment for General Use',
    scenario:'Clearance required between a recessed light and insulation, luminaire in a closet.',
    hint:'Lighting fixtures — clearances, closet lights, recessed fixture requirements.',
    distractors:['406','424','422'] },
  { id:23, article:'422', title:'Appliances',                                 chapter:4, chapterName:'Equipment for General Use',
    scenario:'Branch circuit requirements for a dishwasher, cord-and-plug connected appliances.',
    hint:'Appliances — cord length, disconnects, branch circuit protection.',
    distractors:['424','440','210'] },
  { id:24, article:'430', title:'Motors',                                     chapter:4, chapterName:'Equipment for General Use',
    scenario:'Motor branch circuit conductor sizing (125% rule), motor overload protection sizing.',
    hint:'The most complex article — motors have their own conductor, OCP, and disconnect rules.',
    distractors:['440','240','250'] },
  { id:25, article:'440', title:'Air-Conditioning & Refrigerating Equipment', chapter:4, chapterName:'Equipment for General Use',
    scenario:'Disconnect requirements and conductor sizing for a rooftop HVAC unit.',
    hint:'A/C and refrigeration — supplements Article 430 with hermetic motor rules.',
    distractors:['430','422','210'] },
  { id:26, article:'450', title:'Transformers',                               chapter:4, chapterName:'Equipment for General Use',
    scenario:'Overcurrent protection for a 75 kVA dry-type transformer, clearance requirements.',
    hint:'Transformers — primary and secondary protection, installation clearances.',
    distractors:['408','480','430'] },

  // Chapter 5 — Special Occupancies
  { id:27, article:'501', title:'Class I Hazardous Locations',                chapter:5, chapterName:'Special Occupancies',
    scenario:'Wiring methods required in a spray booth where flammable vapors may be present.',
    hint:'Class I — flammable gases or vapors (gas stations, spray booths).',
    distractors:['502','503','500'] },
  { id:28, article:'517', title:'Health Care Facilities',                     chapter:5, chapterName:'Special Occupancies',
    scenario:'Patient care area wiring requirements, isolated power systems in operating rooms.',
    hint:'Hospitals and medical offices — patient protection, isolated power, essential systems.',
    distractors:['700','701','547'] },
  { id:29, article:'547', title:'Agricultural Buildings',                     chapter:5, chapterName:'Special Occupancies',
    scenario:'Wiring in a barn or livestock building — equipotential planes, special grounding.',
    hint:'Farms and barns — corrosive and wet environments, equipotential planes.',
    distractors:['501','551','300'] },
  { id:30, article:'590', title:'Temporary Installations',                    chapter:5, chapterName:'Special Occupancies',
    scenario:'GFCI requirements on a construction site, temporary wiring permitted methods.',
    hint:'Construction site temporary power — all the rules for temp wiring.',
    distractors:['300','210','400'] },

  // Chapter 6 — Special Equipment
  { id:31, article:'625', title:'Electric Vehicle (EV) Charging',             chapter:6, chapterName:'Special Equipment',
    scenario:'EVSE installation requirements, grounding of EV charging equipment.',
    hint:'EV charging stations — EVSE requirements, indoor vs outdoor, ventilation.',
    distractors:['430','210','480'] },
  { id:32, article:'680', title:'Swimming Pools, Fountains & Similar',        chapter:6, chapterName:'Special Equipment',
    scenario:'Clearance of overhead conductors above a swimming pool, bonding grid requirements.',
    hint:'Pools — overhead clearances, bonding, GFCI, underwater lighting.',
    distractors:['547','210','250'] },
  { id:33, article:'690', title:'Solar Photovoltaic (PV) Systems',            chapter:6, chapterName:'Special Equipment',
    scenario:'Rapid shutdown requirements for a rooftop solar array, PV system disconnect.',
    hint:'Solar PV — rapid shutdown, labeling, DC conductors, inverters.',
    distractors:['445','700','480'] },
  { id:34, article:'695', title:'Fire Pumps',                                 chapter:6, chapterName:'Special Equipment',
    scenario:'Dedicated service requirements for a fire pump, continuity of power requirements.',
    hint:'Fire pumps must keep running even during a building fire — unique power requirements.',
    distractors:['700','230','430'] },

  // Chapter 7 — Special Conditions
  { id:35, article:'700', title:'Emergency Systems',                          chapter:7, chapterName:'Special Conditions',
    scenario:'Transfer switch requirements, automatic operation of emergency lighting systems.',
    hint:'Emergency systems — must restore power within 10 seconds, hospitals, high-rises.',
    distractors:['701','702','517'] },
  { id:36, article:'701', title:'Legally Required Standby Systems',           chapter:7, chapterName:'Special Conditions',
    scenario:'Sewage lift station backup power — legally required by local code.',
    hint:'Legally required standby — not as critical as emergency, but required by law.',
    distractors:['700','702','695'] },
  { id:37, article:'702', title:'Optional Standby Systems',                   chapter:7, chapterName:'Special Conditions',
    scenario:'Homeowner wants a generator for convenience — which article applies?',
    hint:'Optional standby — generators for convenience, not required by code.',
    distractors:['700','701','445'] },
  { id:38, article:'760', title:'Fire Alarm Systems',                         chapter:7, chapterName:'Special Conditions',
    scenario:'Wiring methods for fire alarm circuits, separation from other wiring.',
    hint:'Fire alarm system wiring — Class A and Class B circuits.',
    distractors:['725','700','800'] },

  // Chapter 8 — Communications
  { id:39, article:'800', title:'General Requirements — Communications Systems', chapter:8, chapterName:'Communications Systems',
    scenario:'Separation requirements between communication cables and power conductors.',
    hint:'Communications (phone, internet) — separation from power, grounding, protection.',
    distractors:['760','300','725'] },

  // Additional high-frequency exam articles
  { id:40, article:'320', title:'Armored Cable (AC / BX)',                   chapter:3, chapterName:'Wiring Methods & Materials',
    scenario:'Support intervals and permitted uses for Type AC (BX) armored cable.',
    hint:'AC cable — the metal-spiral flexible cable with a paper liner inside.',
    distractors:['330','334','348'] },
  { id:41, article:'330', title:'Metal-Clad Cable (MC)',                      chapter:3, chapterName:'Wiring Methods & Materials',
    scenario:'Where MC cable is permitted in a commercial building, support requirements.',
    hint:'MC cable — like AC but has an actual ground conductor inside.',
    distractors:['320','334','344'] },
  { id:42, article:'445', title:'Generators',                                 chapter:4, chapterName:'Equipment for General Use',
    scenario:'Overcurrent protection and disconnecting means for a standby generator.',
    hint:'Generators — nameplate, disconnects, overcurrent protection.',
    distractors:['702','700','430'] },
  { id:43, article:'480', title:'Storage Batteries',                          chapter:4, chapterName:'Equipment for General Use',
    scenario:'Ventilation requirements and disconnecting means for a battery backup system.',
    hint:'Batteries — venting, spacing, charging equipment requirements.',
    distractors:['690','445','430'] },
  { id:44, article:'424', title:'Fixed Electric Space-Heating Equipment',     chapter:4, chapterName:'Equipment for General Use',
    scenario:'Branch circuit sizing for a baseboard heater — the 125% continuous load rule.',
    hint:'Electric heaters — baseboard, radiant, and duct heaters.',
    distractors:['422','430','210'] },
  { id:45, article:'411', title:'Lighting Systems ≤30 Volts',                chapter:4, chapterName:'Equipment for General Use',
    scenario:'Low-voltage landscape lighting system requirements.',
    hint:'Low-voltage lighting (landscape, under-cabinet) — 30V or less systems.',
    distractors:['410','406','725'] },
]

// ─── NEC Chapter Map for visual ──────────────────────────────────────────────
const CHAPTERS = [
  { num:1, name:'General',               color:'#e67e22', articles:'90–110' },
  { num:2, name:'Wiring & Protection',   color:'#e74c3c', articles:'200–285' },
  { num:3, name:'Wiring Methods',        color:'#9b59b6', articles:'300–398' },
  { num:4, name:'General Equipment',     color:'#2980b9', articles:'400–490' },
  { num:5, name:'Special Occupancies',   color:'#27ae60', articles:'500–590' },
  { num:6, name:'Special Equipment',     color:'#16a085', articles:'600–695' },
  { num:7, name:'Special Conditions',    color:'#d35400', articles:'700–770' },
  { num:8, name:'Communications',        color:'#8e44ad', articles:'800–840' },
]

function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5) }

const QUESTION_TIME = 12
const ROUND_SIZE = 10

// ─── Component ────────────────────────────────────────────────────────────────
export default function CodeSprintPage({ onNavigate, onHome, access }) {
  const [screen, setScreen]       = useState('intro')   // intro | game | result
  const [difficulty, setDiff]     = useState('article') // chapter | article | section
  const [queue, setQueue]         = useState([])
  const [current, setCurrent]     = useState(null)
  const [choices, setChoices]     = useState([])
  const [answered, setAnswered]   = useState(null)      // null | 'correct' | 'wrong'
  const [selected, setSelected]   = useState(null)
  const [timeLeft, setTimeLeft]   = useState(QUESTION_TIME)
  const [score, setScore]         = useState(0)
  const [streak, setStreak]       = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [results, setResults]     = useState([])        // { article, correct, time }
  const [roundNum, setRoundNum]   = useState(0)
  const [totalQ, setTotalQ]       = useState(0)
  const [wrongBucket, setWrongBucket] = useState([])    // Leitner box 1
  const timerRef = useRef(null)
  const timeUsed = useRef(0)

  const isPro = access === 'pro' || access === 'standard'

  // ── Build a round queue ───────────────────────────────────────────────────
  const buildQueue = useCallback((includeWrong = []) => {
    const base = shuffle(ARTICLES).slice(0, ROUND_SIZE)
    // Inject wrong answers from previous round (spaced repetition)
    const withRepeat = includeWrong.length > 0
      ? shuffle([...base.slice(0, ROUND_SIZE - Math.min(3, includeWrong.length)), ...includeWrong.slice(0, 3)])
      : base
    return withRepeat
  }, [])

  // ── Start game ───────────────────────────────────────────────────────────
  const startGame = () => {
    const q = buildQueue()
    setQueue(q)
    setScore(0)
    setStreak(0)
    setResults([])
    setWrongBucket([])
    setRoundNum(1)
    setTotalQ(0)
    setScreen('game')
    loadQuestion(q, 0)
  }

  // ── Load a question ──────────────────────────────────────────────────────
  const loadQuestion = (q, idx) => {
    if (idx >= q.length) { finishRound(); return }
    const item = q[idx]
    const wrong = shuffle(item.distractors).slice(0, 3)
    const allChoices = shuffle([item.article, ...wrong])
    setCurrent({ ...item, idx })
    setChoices(allChoices)
    setAnswered(null)
    setSelected(null)
    setTimeLeft(QUESTION_TIME)
    timeUsed.current = 0
  }

  // ── Timer ────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (screen !== 'game' || answered !== null) return
    timerRef.current = setInterval(() => {
      timeUsed.current += 1
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current)
          handleAnswer(null, current)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [screen, current, answered])

  // ── Handle answer ────────────────────────────────────────────────────────
  const handleAnswer = (picked, q = current) => {
    if (answered !== null || !q) return
    clearInterval(timerRef.current)
    const correct = picked === q.article
    const elapsed = timeUsed.current
    const pts = correct ? Math.max(10, 100 - elapsed * 7) : 0

    setSelected(picked)
    setAnswered(correct ? 'correct' : 'wrong')
    setScore(s => s + pts)
    setTotalQ(t => t + 1)

    if (correct) {
      setStreak(s => {
        const ns = s + 1
        setBestStreak(b => Math.max(b, ns))
        return ns
      })
    } else {
      setStreak(0)
      setWrongBucket(wb => [...wb, q])
    }

    setResults(r => [...r, { article: q.article, title: q.title, correct, time: elapsed, pts }])

    // Auto-advance after 2.2s
    setTimeout(() => {
      const nextIdx = q.idx + 1
      if (nextIdx >= queue.length) {
        finishRound()
      } else {
        loadQuestion(queue, nextIdx)
      }
    }, 2200)
  }

  // ── Finish round ─────────────────────────────────────────────────────────
  const finishRound = () => {
    setScreen('result')
  }

  // ── Next round (with spaced repetition) ──────────────────────────────────
  const nextRound = () => {
    const q = buildQueue(wrongBucket)
    setQueue(q)
    setWrongBucket([])
    setRoundNum(r => r + 1)
    setScreen('game')
    loadQuestion(q, 0)
  }

  const accuracy = totalQ > 0 ? Math.round((results.filter(r => r.correct).length / results.length) * 100) : 0

  // ─── Styles ───────────────────────────────────────────────────────────────
  const s = {
    page: { minHeight:'100vh', background:'#0a1016', color:'#d8e0e8', fontFamily:"'Segoe UI',Arial,sans-serif", paddingTop:'clamp(70px,13vw,120px)' },
    container: { maxWidth:'680px', margin:'0 auto', padding:'0 clamp(16px,4vw,32px) 60px' },
    card: { background:'#111820', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'12px', padding:'clamp(20px,4vw,36px)' },
    gold: { color:'#c8a84b' },
    btn: { background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black',Arial,sans-serif", fontWeight:'900', fontSize:'15px', textTransform:'uppercase', border:'none', borderRadius:'6px', padding:'14px 28px', cursor:'pointer', letterSpacing:'0.5px' },
    btnGhost: { background:'none', border:'1px solid rgba(200,168,75,0.4)', color:'#c8a84b', fontFamily:"'Arial Black',Arial,sans-serif", fontWeight:'700', fontSize:'13px', textTransform:'uppercase', borderRadius:'6px', padding:'11px 20px', cursor:'pointer' },
  }

  // ─── INTRO SCREEN ─────────────────────────────────────────────────────────
  if (screen === 'intro') return (
    <div style={s.page}>
      <div style={s.container}>
        <button onClick={() => onHome && onHome()} style={{...s.btnGhost, marginBottom:'28px', fontSize:'12px'}}>← Back</button>

        <div style={{textAlign:'center', marginBottom:'36px'}}>
          <div style={{fontSize:'48px', marginBottom:'16px'}}>📖</div>
          <h1 style={{fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'clamp(24px,5vw,36px)', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', margin:'0 0 12px', lineHeight:'1.1'}}>
            Code <span style={s.gold}>Sprint</span>
          </h1>
          <p style={{color:'#7a8a9a', fontSize:'15px', lineHeight:'1.7', maxWidth:'480px', margin:'0 auto 8px'}}>
            Train your brain to find anything in the NEC — fast. On the real exam, every second counts.
          </p>
        </div>

        {/* Science callout */}
        <div style={{background:'rgba(200,168,75,0.05)', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'8px', padding:'20px 24px', marginBottom:'28px'}}>
          <div style={{color:'#c8a84b', fontSize:'11px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'10px'}}>⚗️ Why This Works</div>
          <div style={{color:'#8a9aaa', fontSize:'13px', lineHeight:'1.8'}}>
            <strong style={{color:'#d8e0e8'}}>Spatial memory</strong> — your brain remembers locations. This game builds a mental map of the NEC.<br/>
            <strong style={{color:'#d8e0e8'}}>Active recall under pressure</strong> — timed retrieval practice is the most effective study method proven by research.<br/>
            <strong style={{color:'#d8e0e8'}}>Spaced repetition</strong> — articles you miss come back. Articles you nail get retired. Leitner system.
          </div>
        </div>

        {/* NEC Chapter Map */}
        <div style={{marginBottom:'28px'}}>
          <div style={{color:'#7a8a9a', fontSize:'11px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'12px'}}>NEC 2020 Book Map</div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6px'}}>
            {CHAPTERS.map(ch => (
              <div key={ch.num} style={{background:'rgba(255,255,255,0.03)', border:`1px solid ${ch.color}33`, borderRadius:'6px', padding:'8px 12px', display:'flex', gap:'10px', alignItems:'center'}}>
                <div style={{width:'28px', height:'28px', borderRadius:'4px', background:ch.color+'22', border:`1px solid ${ch.color}66`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', fontWeight:'900', color:ch.color, flexShrink:0}}>
                  {ch.num}
                </div>
                <div>
                  <div style={{fontSize:'11px', fontWeight:'700', color:'#d8e0e8'}}>{ch.name}</div>
                  <div style={{fontSize:'10px', color:'#4a5a6a'}}>Articles {ch.articles}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to play */}
        <div style={{...s.card, marginBottom:'28px'}}>
          <div style={{color:'#c8a84b', fontSize:'11px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'14px'}}>How to Play</div>
          {[
            ['📋', 'A scenario appears — something that would show up on the exam'],
            ['⚡', 'Pick the NEC Article where you\'d find the answer'],
            ['⏱️', '12 seconds per question — just like the pressure of the real exam'],
            ['🔁', 'Wrong answers come back in the next round (spaced repetition)'],
            ['🗺️', 'After each answer, see exactly where it lives in the NEC'],
          ].map(([icon, text]) => (
            <div key={text} style={{display:'flex', gap:'12px', alignItems:'flex-start', marginBottom:'10px'}}>
              <span style={{fontSize:'16px', flexShrink:0}}>{icon}</span>
              <span style={{color:'#8a9aaa', fontSize:'14px', lineHeight:'1.5'}}>{text}</span>
            </div>
          ))}
        </div>

        {isPro ? (
          <button style={{...s.btn, width:'100%', fontSize:'17px', padding:'16px'}} onClick={startGame}>
            ⚡ Start Code Sprint
          </button>
        ) : (
          <div style={{background:'rgba(200,168,75,0.06)', border:'2px solid rgba(200,168,75,0.3)', borderRadius:'8px', padding:'24px', textAlign:'center'}}>
            <div style={{fontSize:'28px', marginBottom:'12px'}}>🔒</div>
            <div style={{fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'16px', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', marginBottom:'8px'}}>Pro Feature</div>
            <div style={{color:'#7a8a9a', fontSize:'14px', lineHeight:'1.6', marginBottom:'20px'}}>
              Code Sprint is included with Pro access.<br/>Upgrade to unlock this game plus Table Mastery, Exam Simulator, Missed Questions, and more.
            </div>
            <button style={{...s.btn, width:'100%'}} onClick={() => onNavigate && onNavigate('landing')}>
              Upgrade to Pro — $59.99
            </button>
          </div>
        )}
      </div>
    </div>
  )

  // ─── GAME SCREEN ──────────────────────────────────────────────────────────
  if (screen === 'game' && current) {
    const ch = CHAPTERS.find(c => c.num === current.chapter)
    const timerPct = (timeLeft / QUESTION_TIME) * 100
    const timerColor = timeLeft > 7 ? '#27ae60' : timeLeft > 4 ? '#f39c12' : '#e74c3c'

    return (
      <div style={s.page}>
        <div style={s.container}>

          {/* Header */}
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
            <div style={{display:'flex', gap:'16px', alignItems:'center'}}>
              <div style={{fontSize:'12px', color:'#7a8a9a'}}>Q {current.idx + 1}/{queue.length}</div>
              {streak >= 2 && <div style={{fontSize:'12px', color:'#c8a84b', fontWeight:'700'}}>🔥 {streak} streak</div>}
            </div>
            <div style={{fontSize:'13px', fontWeight:'700', color:'#c8a84b'}}>Score: {score}</div>
          </div>

          {/* Timer bar */}
          <div style={{height:'6px', background:'rgba(255,255,255,0.08)', borderRadius:'3px', marginBottom:'24px', overflow:'hidden'}}>
            <div style={{height:'100%', width:`${timerPct}%`, background:timerColor, borderRadius:'3px', transition:'width 1s linear, background 0.3s'}} />
          </div>

          {/* Timer number */}
          <div style={{textAlign:'right', fontSize:'13px', color:timerColor, fontWeight:'700', marginBottom:'8px', marginTop:'-18px'}}>
            {timeLeft}s
          </div>

          {/* Question card */}
          <div style={{...s.card, marginBottom:'20px'}}>
            <div style={{color:'#c8a84b', fontSize:'11px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'16px'}}>
              📖 Which NEC Article covers this?
            </div>
            <p style={{fontSize:'clamp(15px,2.5vw,18px)', color:'#d8e0e8', lineHeight:'1.7', margin:0}}>
              {current.scenario}
            </p>
          </div>

          {/* Choices */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'20px'}}>
            {choices.map(choice => {
              let bg = 'rgba(255,255,255,0.04)'
              let border = 'rgba(255,255,255,0.1)'
              let color = '#d8e0e8'

              if (answered !== null) {
                if (choice === current.article) {
                  bg = 'rgba(39,174,96,0.15)'; border = '#27ae60'; color = '#2ecc71'
                } else if (choice === selected && choice !== current.article) {
                  bg = 'rgba(231,76,60,0.15)'; border = '#e74c3c'; color = '#e74c3c'
                }
              } else if (selected === choice) {
                bg = 'rgba(200,168,75,0.1)'; border = '#c8a84b'
              }

              return (
                <button key={choice}
                  onClick={() => answered === null && handleAnswer(choice)}
                  disabled={answered !== null}
                  style={{background:bg, border:`2px solid ${border}`, borderRadius:'8px', padding:'16px', cursor:answered === null ? 'pointer' : 'default', textAlign:'center', transition:'all 0.2s'}}>
                  <div style={{fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'clamp(18px,4vw,28px)', fontWeight:'900', color, marginBottom:'4px'}}>
                    {choice}
                  </div>
                  <div style={{fontSize:'11px', color:'#4a5a6a'}}>Article</div>
                </button>
              )
            })}
          </div>

          {/* Feedback */}
          {answered !== null && (
            <div style={{background: answered === 'correct' ? 'rgba(39,174,96,0.08)' : 'rgba(231,76,60,0.08)', border:`1px solid ${answered === 'correct' ? 'rgba(39,174,96,0.3)' : 'rgba(231,76,60,0.3)'}`, borderRadius:'8px', padding:'16px 20px'}}>
              <div style={{display:'flex', alignItems:'flex-start', gap:'12px', marginBottom:'10px'}}>
                <span style={{fontSize:'18px'}}>{answered === 'correct' ? '✅' : '❌'}</span>
                <div>
                  <div style={{fontWeight:'700', color: answered === 'correct' ? '#2ecc71' : '#e74c3c', marginBottom:'4px', fontSize:'14px'}}>
                    {answered === 'correct' ? `+${results[results.length-1]?.pts || 0} pts` : `Article ${current.article} — ${current.title}`}
                  </div>
                  <div style={{color:'#8a9aaa', fontSize:'13px', lineHeight:'1.6'}}>{current.hint}</div>
                </div>
              </div>
              {/* Chapter location */}
              <div style={{display:'flex', alignItems:'center', gap:'8px', marginTop:'10px', paddingTop:'10px', borderTop:'1px solid rgba(255,255,255,0.06)'}}>
                <div style={{width:'20px', height:'20px', borderRadius:'3px', background:ch?.color+'33', border:`1px solid ${ch?.color}66`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px', fontWeight:'900', color:ch?.color, flexShrink:0}}>
                  {current.chapter}
                </div>
                <div style={{fontSize:'12px', color:'#7a8a9a'}}>
                  <span style={{color:ch?.color, fontWeight:'700'}}>Chapter {current.chapter} — {ch?.name}</span>
                  &nbsp;·&nbsp;Articles {ch?.articles}
                </div>
              </div>
            </div>
          )}

          {/* Timeout message */}
          {timeLeft === 0 && answered === null && (
            <div style={{textAlign:'center', color:'#e74c3c', fontWeight:'700', marginTop:'12px'}}>
              Time's up — Article {current.article}
            </div>
          )}
        </div>
      </div>
    )
  }

  // ─── RESULT SCREEN ────────────────────────────────────────────────────────
  if (screen === 'result') {
    const correct = results.filter(r => r.correct).length
    const pct = Math.round((correct / results.length) * 100)
    const avgTime = Math.round(results.reduce((a,r) => a + r.time, 0) / results.length)

    return (
      <div style={s.page}>
        <div style={s.container}>
          <div style={{textAlign:'center', marginBottom:'32px'}}>
            <div style={{fontSize:'52px', marginBottom:'16px'}}>
              {pct >= 80 ? '🏆' : pct >= 60 ? '⚡' : '📖'}
            </div>
            <h2 style={{fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'clamp(22px,4vw,32px)', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', margin:'0 0 8px'}}>
              Round {roundNum} Complete
            </h2>
            <div style={{color:'#7a8a9a', fontSize:'15px'}}>
              {pct >= 90 ? 'Excellent navigation!' : pct >= 70 ? 'Good — keep drilling the misses.' : 'Keep going — spaced repetition will lock these in.'}
            </div>
          </div>

          {/* Score cards */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'12px', marginBottom:'24px'}}>
            {[
              ['Score', score, 'pts'],
              ['Accuracy', pct, '%'],
              ['Avg Time', avgTime, 's'],
            ].map(([label, val, unit]) => (
              <div key={label} style={{...s.card, textAlign:'center', padding:'20px 12px'}}>
                <div style={{fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'clamp(22px,4vw,32px)', color:'#c8a84b', fontWeight:'900'}}>{val}<span style={{fontSize:'14px'}}>{unit}</span></div>
                <div style={{fontSize:'11px', color:'#7a8a9a', textTransform:'uppercase', letterSpacing:'1px', marginTop:'4px'}}>{label}</div>
              </div>
            ))}
          </div>

          {bestStreak >= 3 && (
            <div style={{background:'rgba(200,168,75,0.08)', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'8px', padding:'12px 16px', marginBottom:'20px', textAlign:'center', color:'#c8a84b', fontSize:'13px', fontWeight:'700'}}>
              🔥 Best streak this round: {bestStreak} in a row
            </div>
          )}

          {/* Per-question breakdown */}
          <div style={{...s.card, marginBottom:'24px'}}>
            <div style={{color:'#7a8a9a', fontSize:'11px', fontWeight:'700', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'14px'}}>Question Breakdown</div>
            <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
              {results.map((r, i) => (
                <div key={i} style={{display:'flex', alignItems:'center', gap:'10px', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
                  <span style={{fontSize:'14px'}}>{r.correct ? '✅' : '❌'}</span>
                  <span style={{fontFamily:"'Courier New',monospace", fontSize:'13px', color:'#c8a84b', fontWeight:'700', flexShrink:0}}>Art. {r.article}</span>
                  <span style={{fontSize:'12px', color:'#7a8a9a', flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{r.title}</span>
                  <span style={{fontSize:'11px', color:'#4a5a6a', flexShrink:0}}>{r.time}s</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spaced repetition note */}
          {wrongBucket.length > 0 && (
            <div style={{background:'rgba(231,76,60,0.06)', border:'1px solid rgba(231,76,60,0.2)', borderRadius:'8px', padding:'12px 16px', marginBottom:'20px', fontSize:'13px', color:'#e74c3c'}}>
              🔁 <strong>{wrongBucket.length} article{wrongBucket.length > 1 ? 's' : ''} missed</strong> — they'll come back in Round {roundNum + 1} (spaced repetition)
            </div>
          )}

          <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
            <button style={{...s.btn, width:'100%'}} onClick={nextRound}>
              ⚡ Next Round {wrongBucket.length > 0 ? `(${wrongBucket.length} repeats included)` : ''}
            </button>
            <button style={{...s.btnGhost, width:'100%'}} onClick={() => setScreen('intro')}>
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
