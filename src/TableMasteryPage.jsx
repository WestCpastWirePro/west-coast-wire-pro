// TableMasteryPage.jsx — NEC Table Mastery Flashcard Drills (Pro)
import { useState, useEffect } from "react";

// ─── Shared utilities ──────────────────────────────────────────────────────────
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

// ─── Styles ────────────────────────────────────────────────────────────────────
const s = {
  app:     { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header:  { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo:    { fontSize:"20px", fontWeight:"800", color:"#c8a84b", letterSpacing:"-0.5px" },
  btn:     { padding:"10px 20px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"14px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
  card:    { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  prog:    { height:"5px", background:"#2a3a54", borderRadius:"3px", overflow:"hidden" },
  bar:     { height:"100%", borderRadius:"3px", background:"linear-gradient(90deg,#c8a84b,#e8c878)", transition:"width 0.4s ease" },
};

// ═══════════════════════════════════════════════════════════════════════════════
// CARD DATA — each entry is { front, back, hint }
// ═══════════════════════════════════════════════════════════════════════════════

const CARD_DATA = {

  // ── Table 310.16 — Conductor Ampacity ────────────────────────────────────────
  "t310": {
    title: "Table 310.16",
    subtitle: "Conductor Ampacity (copper & aluminum)",
    icon: "⚡",
    color: "#c8a84b",
    ref: "NEC Article 310",
    why: "Used for every wire sizing question. You'll reference it 10+ times per exam.",
    cards: [
      { front:"14 AWG copper · 60°C",  back:"15A",  hint:"Smallest common wire — 15A circuit" },
      { front:"12 AWG copper · 60°C",  back:"20A",  hint:"Standard 20A circuit" },
      { front:"12 AWG copper · 90°C",  back:"25A",  hint:"Higher temp column for derating math" },
      { front:"10 AWG copper · 60°C",  back:"30A",  hint:"30A circuits (dryers, water heaters)" },
      { front:"10 AWG copper · 75°C",  back:"35A",  hint:"75°C column — most commercial equip" },
      { front:"8 AWG copper · 60°C",   back:"40A",  hint:"40A — EV chargers, ranges" },
      { front:"8 AWG copper · 75°C",   back:"50A",  hint:"50A at 75°C — common service question" },
      { front:"6 AWG copper · 75°C",   back:"65A",  hint:"65A at 75°C" },
      { front:"4 AWG copper · 75°C",   back:"85A",  hint:"85A — sub-panels, feeders" },
      { front:"2 AWG copper · 75°C",   back:"115A", hint:"115A — larger feeders" },
      { front:"1/0 AWG copper · 75°C", back:"150A", hint:"150A service conductors" },
      { front:"2/0 AWG copper · 75°C", back:"175A", hint:"175A" },
      { front:"3/0 AWG copper · 75°C", back:"200A", hint:"200A service — very common question" },
      { front:"4/0 AWG copper · 75°C", back:"230A", hint:"230A" },
      { front:"4/0 AWG aluminum · 75°C",back:"180A", hint:"200A service using aluminum" },
      { front:"3/0 AWG aluminum · 75°C",back:"155A", hint:"Aluminum — lower than copper" },
      { front:"2/0 AWG aluminum · 75°C",back:"135A", hint:"Aluminum feeders" },
      { front:"1/0 AWG aluminum · 75°C",back:"120A", hint:"Aluminum 1/0" },
    ]
  },

  // ── Ch9 Table 1 — Conduit Fill % ─────────────────────────────────────────────
  "t_fill_pct": {
    title: "Chapter 9, Table 1",
    subtitle: "Maximum Conduit Fill Percentages",
    icon: "📐",
    color: "#4fc3f7",
    ref: "NEC Chapter 9, Table 1",
    why: "Every conduit fill question starts here. These three numbers must be automatic.",
    cards: [
      { front:"1 conductor — max fill %",  back:"53%", hint:"One round wire in a round conduit fits most efficiently" },
      { front:"2 conductors — max fill %", back:"31%", hint:"Two wires can wedge — tighter limit" },
      { front:"3+ conductors — max fill %",back:"40%", hint:"Most common rule — 3 or more = 40%" },
      { front:"3-wire circuit in EMT — fill %", back:"40%", hint:"Hot + hot + neutral = 3 conductors = 40%" },
      { front:"Hot + neutral in conduit — fill %", back:"31%", hint:"2 conductors = 31%" },
      { front:"GFCI circuit with EGC — fill %", back:"40%", hint:"Hot + neutral + ground = 3 = 40%" },
      { front:"What fill % applies to 6 conductors?", back:"40%", hint:"3 or more always = 40% regardless of how many" },
    ]
  },

  // ── Ch9 Table 4 — Conduit Internal Area ─────────────────────────────────────
  "t_cond_area": {
    title: "Chapter 9, Table 4",
    subtitle: "Conduit Internal Area (in²)",
    icon: "🔧",
    color: "#81c784",
    ref: "NEC Chapter 9, Table 4",
    why: "Used with Table 5 to determine how many conductors fit. Know the key EMT sizes.",
    cards: [
      { front:"½\" EMT — total area",    back:"0.304 in²", hint:"40% = 0.122 in²" },
      { front:"¾\" EMT — total area",    back:"0.533 in²", hint:"40% = 0.213 in²" },
      { front:"1\" EMT — total area",    back:"0.864 in²", hint:"40% = 0.346 in²" },
      { front:"1¼\" EMT — total area",   back:"1.496 in²", hint:"40% = 0.598 in²" },
      { front:"1½\" EMT — total area",   back:"2.036 in²", hint:"40% = 0.814 in²" },
      { front:"2\" EMT — total area",    back:"3.356 in²", hint:"40% = 1.342 in²" },
      { front:"½\" EMT — 40% fill area", back:"0.122 in²", hint:"total 0.304 × 0.40" },
      { front:"¾\" EMT — 40% fill area", back:"0.213 in²", hint:"total 0.533 × 0.40" },
      { front:"1\" EMT — 40% fill area", back:"0.346 in²", hint:"total 0.864 × 0.40" },
      { front:"1\" RMC — total area",    back:"0.887 in²", hint:"Slightly larger than EMT" },
      { front:"¾\" RMC — total area",    back:"0.549 in²", hint:"Similar to EMT but slightly larger" },
      { front:"1\" PVC Sch40 — total area", back:"0.832 in²", hint:"Slightly smaller than EMT/RMC" },
    ]
  },

  // ── Ch9 Table 5 — Conductor Cross-Section Area ────────────────────────────────
  "t_wire_area": {
    title: "Chapter 9, Table 5",
    subtitle: "Conductor Area — THWN/THHN (in²)",
    icon: "📏",
    color: "#ce93d8",
    ref: "NEC Chapter 9, Table 5",
    why: "Used with Table 4 to calculate how many wires fit in a conduit. Sum of areas ÷ conduit area.",
    cards: [
      { front:"14 AWG THWN — area",  back:"0.0097 in²", hint:"Smallest — 7 fit in ½\" EMT at 40%" },
      { front:"12 AWG THWN — area",  back:"0.0133 in²", hint:"Common — 5 fit in ½\" EMT at 40%" },
      { front:"10 AWG THWN — area",  back:"0.0211 in²", hint:"Larger — 4 fit in ½\" EMT" },
      { front:"8 AWG THWN — area",   back:"0.0366 in²", hint:"3 fit in ½\" EMT at 40%" },
      { front:"6 AWG THWN — area",   back:"0.0507 in²", hint:"2 fit in ½\" EMT at 40%" },
      { front:"4 AWG THWN — area",   back:"0.0824 in²", hint:"Fits in ¾\" EMT (3+)" },
      { front:"2 AWG THWN — area",   back:"0.1158 in²", hint:"Fits in 1\" EMT (3+)" },
      { front:"1/0 AWG THWN — area", back:"0.1855 in²", hint:"Needs 1¼\" EMT for 3 conductors" },
      { front:"2/0 AWG THWN — area", back:"0.2223 in²", hint:"Large conductor — check fill carefully" },
      { front:"4/0 AWG THWN — area", back:"0.3237 in²", hint:"Largest common size" },
    ]
  },

  // ── Table 8 — Conductor Properties ──────────────────────────────────────────
  "t8": {
    title: "Chapter 9, Table 8",
    subtitle: "Conductor Properties — CM Area & Resistance",
    icon: "🔩",
    color: "#ffb74d",
    ref: "NEC Chapter 9, Table 8",
    why: "Every voltage drop calculation needs the CM value from this table. VD = 2×K×I×D ÷ CM.",
    cards: [
      { front:"14 AWG copper — CM area",  back:"4,110 CM",   hint:"Smallest — used in VD formula denominator" },
      { front:"12 AWG copper — CM area",  back:"6,530 CM",   hint:"Common residential — 6530" },
      { front:"10 AWG copper — CM area",  back:"10,380 CM",  hint:"10k range" },
      { front:"8 AWG copper — CM area",   back:"16,510 CM",  hint:"~16k" },
      { front:"6 AWG copper — CM area",   back:"26,240 CM",  hint:"~26k — voltage drop calc common" },
      { front:"4 AWG copper — CM area",   back:"41,740 CM",  hint:"~42k" },
      { front:"2 AWG copper — CM area",   back:"66,360 CM",  hint:"~66k" },
      { front:"1/0 AWG copper — CM area", back:"105,600 CM", hint:"100k+ range" },
      { front:"2/0 AWG copper — CM area", back:"133,100 CM", hint:"133k" },
      { front:"4/0 AWG copper — CM area", back:"211,600 CM", hint:"211k — largest common" },
      { front:"12 AWG copper — Ω/1000 ft",back:"1.93 Ω",    hint:"Used in alternate VD formula" },
      { front:"10 AWG copper — Ω/1000 ft",back:"1.21 Ω",    hint:"Resistance drops as wire gets larger" },
      { front:"6 AWG copper — Ω/1000 ft", back:"0.491 Ω",   hint:"Sub-1 ohm range" },
    ]
  },

  // ── Table 250.66 — GEC Sizing ────────────────────────────────────────────────
  "t250_66": {
    title: "Table 250.66",
    subtitle: "Grounding Electrode Conductor (GEC) Sizing",
    icon: "🌍",
    color: "#a5d6a7",
    ref: "NEC Table 250.66",
    why: "GEC sizing questions are on almost every exam. Sized by service entrance conductor, not OCPD.",
    cards: [
      { front:"SE conductors: 2 AWG or smaller → GEC?",  back:"8 AWG copper",  hint:"Small service = 8 AWG GEC" },
      { front:"SE conductors: 1 AWG or 1/0 → GEC?",      back:"6 AWG copper",  hint:"100A range service" },
      { front:"SE conductors: 2/0 or 3/0 → GEC?",        back:"4 AWG copper",  hint:"200A residential service" },
      { front:"SE conductors: over 3/0 up to 350 → GEC?",back:"2 AWG copper",  hint:"Larger services" },
      { front:"SE conductors: 350–600 kcmil → GEC?",     back:"1/0 AWG copper",hint:"Large commercial service" },
      { front:"SE conductors: 600–1100 kcmil → GEC?",    back:"2/0 AWG copper",hint:"Very large service" },
      { front:"200A service with 3/0 copper SE — GEC?",  back:"4 AWG copper",  hint:"3/0 SE → 4 AWG GEC" },
      { front:"100A service with 1 AWG copper SE — GEC?",back:"6 AWG copper",  hint:"1 AWG SE → 6 AWG GEC" },
      { front:"GEC sizing is based on what?",            back:"Service entrance conductor size", hint:"NOT based on breaker/OCPD rating — that's Table 250.122" },
    ]
  },

  // ── Table 250.122 — EGC Sizing ───────────────────────────────────────────────
  "t250_122": {
    title: "Table 250.122",
    subtitle: "Equipment Grounding Conductor (EGC) Sizing",
    icon: "⚙️",
    color: "#ef9a9a",
    ref: "NEC Table 250.122",
    why: "EGC sizing appears constantly. Sized by the OCPD (breaker) rating — different from GEC.",
    cards: [
      { front:"15A OCPD → EGC?",   back:"14 AWG copper", hint:"15A circuit = 14 AWG ground" },
      { front:"20A OCPD → EGC?",   back:"12 AWG copper", hint:"20A circuit = 12 AWG ground" },
      { front:"30A OCPD → EGC?",   back:"10 AWG copper", hint:"30A circuit = 10 AWG ground" },
      { front:"40A OCPD → EGC?",   back:"10 AWG copper", hint:"40A also uses 10 AWG (same as 30A)" },
      { front:"60A OCPD → EGC?",   back:"10 AWG copper", hint:"60A still 10 AWG — common trap" },
      { front:"100A OCPD → EGC?",  back:"8 AWG copper",  hint:"100A panel = 8 AWG EGC" },
      { front:"200A OCPD → EGC?",  back:"6 AWG copper",  hint:"200A service = 6 AWG EGC" },
      { front:"300A OCPD → EGC?",  back:"4 AWG copper",  hint:"300A = 4 AWG" },
      { front:"400A OCPD → EGC?",  back:"3 AWG copper",  hint:"400A = 3 AWG" },
      { front:"600A OCPD → EGC?",  back:"1 AWG copper",  hint:"600A = 1 AWG" },
      { front:"EGC sizing is based on what?", back:"OCPD (breaker) rating", hint:"EGC = breaker size. GEC = service conductor size. Know the difference." },
    ]
  },

  // ── Table 430.52 — Motor OCP ─────────────────────────────────────────────────
  "t430_52": {
    title: "Table 430.52",
    subtitle: "Motor Overcurrent Protection — Max % of FLC",
    icon: "🔄",
    color: "#80deea",
    ref: "NEC Table 430.52",
    why: "Motor circuit protection questions always reference this table. Max % × FLC = max OCPD size.",
    cards: [
      { front:"AC squirrel cage motor — inverse-time breaker max %",     back:"250%", hint:"Most common motor type — 250% ITB" },
      { front:"AC squirrel cage motor — dual-element fuse max %",        back:"175%", hint:"Dual-element fuse more restrictive than ITB" },
      { front:"Single-phase AC motor — inverse-time breaker max %",      back:"250%", hint:"Same as 3-phase squirrel cage" },
      { front:"Wound-rotor AC motor — inverse-time breaker max %",       back:"150%", hint:"Lower limit for wound-rotor" },
      { front:"DC constant-voltage motor — inverse-time breaker max %",  back:"150%", hint:"DC motors get 150% — not 250%" },
      { front:"Motor FLC = 20A. Max inverse-time breaker (squirrel cage)?", back:"50A (20×250%=50A)", hint:"250% × FLC — use next standard size if result isn't standard" },
      { front:"Motor FLC = 28A. Max dual-element fuse (squirrel cage)?", back:"49A → 50A", hint:"28 × 175% = 49A → next standard size = 50A" },
      { front:"Where do you find motor FLC for sizing calculations?",    back:"Tables 430.248 / 430.250", hint:"Not nameplate — use NEC tables for OCPD and conductor sizing" },
    ]
  },

  // ── Tables 430.248 / 430.250 — Motor FLC ────────────────────────────────────
  "t430_flc": {
    title: "Tables 430.248 / 430.250",
    subtitle: "Motor Full-Load Currents (Single & Three-Phase)",
    icon: "🏭",
    color: "#b0bec5",
    ref: "NEC Tables 430.248 (1φ) and 430.250 (3φ)",
    why: "Motor conductor and OCPD sizing starts with FLC from these tables — not the nameplate.",
    cards: [
      { front:"1HP single-phase 115V motor — FLC?",   back:"16A",   hint:"430.248 — 1HP at 115V = 16A" },
      { front:"1HP single-phase 230V motor — FLC?",   back:"8A",    hint:"230V = half of 115V FLC" },
      { front:"2HP single-phase 115V motor — FLC?",   back:"24A",   hint:"430.248 — 2HP/115V = 24A" },
      { front:"1/2HP single-phase 115V motor — FLC?", back:"9.8A",  hint:"430.248 — 1/2HP/115V = 9.8A" },
      { front:"1HP three-phase 208V motor — FLC?",    back:"4.6A",  hint:"430.250 — 1HP/208V = 4.6A" },
      { front:"5HP three-phase 230V motor — FLC?",    back:"15.2A", hint:"430.250 — 5HP/230V = 15.2A" },
      { front:"5HP three-phase 460V motor — FLC?",    back:"7.6A",  hint:"460V = half of 230V FLC" },
      { front:"10HP three-phase 460V motor — FLC?",   back:"14A",   hint:"430.250 — 10HP/460V = 14A" },
      { front:"15HP three-phase 460V motor — FLC?",   back:"21A",   hint:"430.250 — 15HP/460V = 21A" },
      { front:"20HP three-phase 460V motor — FLC?",   back:"27A",   hint:"430.250 — 20HP/460V = 27A" },
      { front:"Motor conductor minimum size = FLC × ?", back:"125%", hint:"NEC 430.22 — conductor = 125% of FLC" },
      { front:"Which table: single-phase motors?",    back:"Table 430.248", hint:"248 = single-phase" },
      { front:"Which table: three-phase motors?",     back:"Table 430.250", hint:"250 = three-phase" },
    ]
  },

  // ── Table 220.12 — Lighting Load ─────────────────────────────────────────────
  "t220_12": {
    title: "Table 220.12",
    subtitle: "Lighting Load — Volt-Amps per Square Foot",
    icon: "💡",
    color: "#fff176",
    ref: "NEC Table 220.12",
    why: "Load calculation questions always start with VA/sq ft from this table.",
    cards: [
      { front:"Dwelling unit — VA/sq ft?",         back:"3 VA/sq ft",    hint:"Most common — residential load calcs" },
      { front:"Office building — VA/sq ft?",       back:"3.5 VA/sq ft",  hint:"Higher than residential" },
      { front:"Bank — VA/sq ft?",                  back:"3.5 VA/sq ft",  hint:"Same as office — 3.5" },
      { front:"School/university — VA/sq ft?",     back:"3 VA/sq ft",    hint:"Same as dwelling" },
      { front:"Retail store — VA/sq ft?",          back:"3 VA/sq ft",    hint:"3 VA — same as dwelling" },
      { front:"Hospital — VA/sq ft?",              back:"2 VA/sq ft",    hint:"2 VA — less than offices" },
      { front:"Restaurant — VA/sq ft?",            back:"2 VA/sq ft",    hint:"2 VA" },
      { front:"Church — VA/sq ft?",                back:"1 VA/sq ft",    hint:"Lowest — churches use little lighting" },
      { front:"Warehouse (storage) — VA/sq ft?",   back:"0.25 VA/sq ft", hint:"Lowest of all — minimal lighting" },
      { front:"Hotel/motel — VA/sq ft?",           back:"2 VA/sq ft",    hint:"2 VA — similar to hospital" },
      { front:"2,400 sq ft dwelling — lighting load?", back:"7,200 VA",  hint:"2,400 × 3 = 7,200 VA before demand factors" },
      { front:"5,000 sq ft office — lighting load?",   back:"17,500 VA", hint:"5,000 × 3.5 = 17,500 VA" },
    ]
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// STAR RATING UTIL
// ═══════════════════════════════════════════════════════════════════════════════
function getStars(pct) {
  if (pct == null) return null;
  if (pct >= 90)  return 3;
  if (pct >= 70)  return 2;
  if (pct >= 50)  return 1;
  return 0;
}
function Stars({ n, size=16 }) {
  return (
    <span style={{ fontSize:`${size}px`, letterSpacing:"1px" }}>
      {[1,2,3].map(i => (
        <span key={i} style={{ opacity: i<=n ? 1 : 0.2 }}>★</span>
      ))}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FLASHCARD DRILL ENGINE
// ═══════════════════════════════════════════════════════════════════════════════
function Drill({ tableId, data, onBack, onComplete }) {
  const [deck]                 = useState(() => shuffle(data.cards));
  const [idx, setIdx]         = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [gradeReady, setGradeReady] = useState(false); // prevents tap bleed-through
  const [got, setGot]         = useState(0);
  const [total, setTotal]     = useState(0);
  const [done, setDone]       = useState(false);

  const card = deck[idx];
  const progress = idx / deck.length;

  function reveal() {
    setRevealed(true);
    setGradeReady(false);
    // Short delay before grade buttons become tappable — prevents finger-up from auto-grading
    setTimeout(() => setGradeReady(true), 400);
  }

  function grade(correct) {
    if (!gradeReady) return; // safety guard
    const newTotal = total + 1;
    const newGot   = got + (correct ? 1 : 0);
    setTotal(newTotal);
    setGot(newGot);
    setRevealed(false);
    setGradeReady(false);
    if (idx + 1 >= deck.length) {
      setDone(true);
      onComplete(tableId, Math.round(newGot / newTotal * 100));
    } else {
      setIdx(i => i + 1);
    }
  }

  const pct   = total > 0 ? Math.round(got/total*100) : 0;
  const stars = getStars(pct);

  if (done) {
    return (
      <div style={s.app}>

        <div style={{ ...s.card, textAlign:"center", padding:"36px 24px" }}>
          <div style={{ fontSize:"48px", marginBottom:"8px" }}>
            {stars===3?"🏆":stars===2?"⚡":stars===1?"📚":"🔄"}
          </div>
          <div style={{ fontFamily:"'Arial Black',Arial,sans-serif", fontSize:"56px", fontWeight:"900", color:"#c8a84b", lineHeight:1 }}>
            {pct}%
          </div>
          <div style={{ fontSize:"13px", color:"#7a8a9a", marginTop:"4px", marginBottom:"16px" }}>
            {got} of {deck.length} correct
          </div>
          <Stars n={stars} size={28} />
          <div style={{ fontSize:"13px", color:"#7a8a9a", marginTop:"6px", marginBottom:"24px" }}>
            {stars===3?"Table mastered. Run it again cold to lock it in.":
             stars===2?"Solid. One more run should get you to 3 stars.":
             stars===1?"Getting there. Use the hints on the next run.":
             "Keep drilling — this table takes repetition."}
          </div>
          <button style={{ ...s.btn, ...s.btnGold, width:"100%", fontSize:"15px", padding:"13px", marginBottom:"8px" }}
            onClick={() => { setIdx(0); setRevealed(false); setGot(0); setTotal(0); setDone(false); deck.sort(() => Math.random() - 0.5); }}>
            Run Again
          </button>
          <button style={{ ...s.btn, ...s.btnGray, width:"100%" }} onClick={onBack}>
            Back to Tables
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={s.app}>
      {/* Header */}
      <div style={s.header}>
        <span style={{ fontSize:"22px" }}>{data.icon}</span>
        <div style={{ flex:1 }}>
          <div style={s.logo}>{data.title}</div>
          <div style={{ fontSize:"11px", color:"#8899aa" }}>{data.subtitle}</div>
        </div>
        <button style={{ ...s.btn, ...s.btnGray, padding:"6px 14px", fontSize:"12px" }} onClick={onBack}>← Tables</button>
      </div>

      {/* Progress */}
      <div style={{ padding:"10px 16px 0" }}>
        <div style={s.prog}><div style={{ ...s.bar, width:`${progress*100}%` }} /></div>
        <div style={{ display:"flex", justifyContent:"space-between", fontSize:"11px", color:"#8899aa", marginTop:"4px" }}>
          <span>Card {idx+1} of {deck.length}</span>
          <span style={{ color:"#c8a84b" }}>{total>0?`${pct}% · ${got}✓`:""}</span>
        </div>
      </div>

      {/* Card */}
      <div style={{ ...s.card, marginTop:"8px" }}>
        {/* Prompt */}
        <div style={{ fontSize:"11px", color:"#c8a84b", fontWeight:"700", fontFamily:"'Courier New',monospace", letterSpacing:"0.5px", marginBottom:"12px" }}>
          RECALL THIS VALUE →
        </div>
        <div style={{ fontSize:"20px", fontWeight:"700", color:"#e8eaf0", lineHeight:"1.4", marginBottom:"8px" }}>
          {card.front}
        </div>
        <div style={{ fontSize:"12px", color:"#8899aa", fontStyle:"italic", marginBottom:"20px" }}>
          {data.ref}
        </div>

        {!revealed ? (
          <button
            style={{ ...s.btn, ...s.btnGold, width:"100%", fontSize:"15px", padding:"14px" }}
            onClick={reveal}>
            Reveal Answer
          </button>
        ) : (
          <>
            {/* Answer reveal */}
            <div style={{ background:"rgba(200,168,75,0.08)", border:"1px solid rgba(200,168,75,0.3)", borderRadius:"10px", padding:"18px", textAlign:"center", marginBottom:"12px" }}>
              <div style={{ fontSize:"11px", color:"#c8a84b", fontWeight:"700", letterSpacing:"0.5px", marginBottom:"6px" }}>ANSWER</div>
              <div style={{ fontFamily:"'Courier New',monospace", fontSize:"26px", fontWeight:"900", color:"#e8c878" }}>
                {card.back}
              </div>
            </div>
            {/* Hint */}
            <div style={{ fontSize:"12px", color:"#7a8a9a", textAlign:"center", marginBottom:"18px", lineHeight:"1.5" }}>
              💡 {card.hint}
            </div>
            {/* Grade buttons — disabled briefly to prevent tap bleed-through */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
              <button
                disabled={!gradeReady}
                style={{ ...s.btn, background: gradeReady ? "rgba(231,76,60,0.15)" : "rgba(231,76,60,0.05)", border:`2px solid ${gradeReady?"#e74c3c":"rgba(231,76,60,0.2)"}`, color: gradeReady ? "#e74c3c" : "rgba(231,76,60,0.3)", fontSize:"15px", padding:"13px", transition:"all 0.3s", cursor: gradeReady ? "pointer" : "default" }}
                onClick={() => grade(false)}>
                ✗ Missed it
              </button>
              <button
                disabled={!gradeReady}
                style={{ ...s.btn, background: gradeReady ? "rgba(39,174,96,0.15)" : "rgba(39,174,96,0.05)", border:`2px solid ${gradeReady?"#27ae60":"rgba(39,174,96,0.2)"}`, color: gradeReady ? "#2ecc71" : "rgba(39,174,96,0.3)", fontSize:"15px", padding:"13px", transition:"all 0.3s", cursor: gradeReady ? "pointer" : "default" }}
                onClick={() => grade(true)}>
                ✓ Got it
              </button>
            </div>
          </>
        )}
      </div>

      {/* Why this matters */}
      <div style={{ margin:"0 16px 16px", background:"#0a1016", border:"1px solid rgba(200,168,75,0.08)", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#5a6a7a", lineHeight:"1.6" }}>
        <strong style={{ color:"#c8a84b" }}>Why this matters: </strong>{data.why}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HUB — TABLE SELECTOR
// ═══════════════════════════════════════════════════════════════════════════════

// Flat linear order for hub
const TABLE_ORDER = [
  "t310","t8","t_fill_pct","t_cond_area","t_wire_area",
  "t250_66","t250_122","t430_52","t430_flc","t220_12"
];

export default function TableMasteryPage({ onHome, access , onNavigate }) {
  const [active, setActive]   = useState(null);
  const [scores, setScores]   = useState({});  // tableId → last pct

  const isPro = access === "pro";
  const isFree = !access || access === "free";

  // Free users can try the two most essential tables as a preview
  const FREE_TABLES = ["t310", "t_fill_pct"];
  const canAccess = (id) => isPro || access === "standard" ? true : FREE_TABLES.includes(id);

  function handleComplete(tableId, pct) {
    setScores(prev => ({ ...prev, [tableId]: pct }));
  }

  if (active) {
    return (
      <Drill
        tableId={active}
        data={CARD_DATA[active]}
        onBack={() => setActive(null)}
        onComplete={handleComplete}
      />
    );
  }

  // Hub
  const allScored   = Object.keys(scores).length;
  const allMastered = Object.values(scores).filter(p => p >= 90).length;
  const totalTables = Object.keys(CARD_DATA).length;

  return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{ fontSize:"24px" }}>🎯</span>
        <div style={{ flex:1 }}>
          <div style={s.logo}>Table Mastery</div>
          <div style={{ fontSize:"11px", color:"#8899aa" }}>
            {isPro ? "10 NEC tables — flashcard drills" : "2 free tables · 8 more with Pro"}
          </div>
        </div>
        <button style={{ ...s.btn, ...s.btnGray, padding:"6px 14px", fontSize:"12px" }} onClick={onHome}>Menu</button>
      </div>

      {/* Overall progress bar */}
      {allScored > 0 && (
        <div style={{ padding:"10px 16px 0" }}>
          <div style={s.prog}><div style={{ ...s.bar, width:`${allMastered/totalTables*100}%` }} /></div>
          <div style={{ fontSize:"11px", color:"#8899aa", marginTop:"4px" }}>
            {allMastered}/{totalTables} tables mastered (90%+)
          </div>
        </div>
      )}

      {/* How it works */}
      <div style={{ margin:"12px 16px 4px", background:"linear-gradient(135deg,rgba(200,168,75,0.06),rgba(200,168,75,0.02))", border:"1px solid rgba(200,168,75,0.15)", borderRadius:"10px", padding:"14px 16px" }}>
        <div style={{ fontSize:"12px", fontWeight:"700", color:"#c8a84b", marginBottom:"8px", letterSpacing:"0.5px" }}>📖 HOW THIS WORKS</div>
        <div style={{ fontSize:"12px", color:"#8899aa", lineHeight:"1.7" }}>
          The PSI exam gives you an <strong style={{color:"#d8e0e8"}}>unmarked codebook</strong> — no tabs, no highlights, no personal notes. These drills train you to recall critical table values from memory so you can navigate the book fast under exam pressure.
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"8px", marginTop:"12px" }}>
          {[
            ["1. See the prompt","A wire size or condition — just like the exam question"],
            ["2. Recall the value","Think before you tap. That effort is what makes it stick"],
            ["3. Self-grade honestly","✓ Got it or ✗ Missed it — no one's watching, be accurate"],
          ].map(([title, desc]) => (
            <div key={title} style={{ background:"rgba(0,0,0,0.2)", borderRadius:"6px", padding:"10px 8px", textAlign:"center" }}>
              <div style={{ fontSize:"11px", fontWeight:"700", color:"#c8a84b", marginBottom:"4px" }}>{title}</div>
              <div style={{ fontSize:"11px", color:"#7a8a9a", lineHeight:"1.5" }}>{desc}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize:"11px", color:"#5a6a7a", marginTop:"10px", lineHeight:"1.6", borderTop:"1px solid rgba(255,255,255,0.05)", paddingTop:"8px" }}>
          <strong style={{color:"#8899aa"}}>Why it works:</strong> This is active recall — the most effective study method proven by memory research. Re-reading feels productive but doesn't build retrieval speed. Forcing yourself to recall before seeing the answer does.
        </div>
      </div>

      {/* Table list label */}
      <div style={{ padding:"8px 16px 4px", fontSize:"11px", color:"#5a6a7a", textTransform:"uppercase", letterSpacing:"1px", fontWeight:"700" }}>Select a table to drill</div>

      {/* Flat linear table list */}
      {TABLE_ORDER.map((id, idx) => {
        const d = CARD_DATA[id];
        const locked = !canAccess(id);
        const lastPct = scores[id] ?? null;
        const mastered = lastPct != null && lastPct >= 90;
        const pctColor = lastPct == null ? "#5a6a7a" : lastPct >= 90 ? "#2ecc71" : lastPct >= 70 ? "#c8a84b" : "#e74c3c";
        return (
          <div key={id} style={{ ...s.card, marginTop:"0", marginBottom:"8px",
            cursor: locked ? "default" : "pointer", padding:"14px 16px",
            opacity: locked ? 0.5 : 1,
            borderColor: mastered ? "rgba(39,174,96,0.3)" : "rgba(255,255,255,0.06)" }}
            onClick={() => !locked && setActive(id)}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
              {/* Step number */}
              <div style={{ width:"28px", height:"28px", borderRadius:"50%", background: mastered ? "rgba(39,174,96,0.15)" : "#0a1016",
                border:`1px solid ${mastered?"#27ae60":"#2a3a54"}`, display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"12px", fontWeight:"800", color: mastered?"#2ecc71":"#5a6a7a", flexShrink:0 }}>
                {locked ? "🔒" : idx+1}
              </div>
              {/* Icon */}
              <div style={{ fontSize:"22px", flexShrink:0 }}>{d.icon}</div>
              {/* Text */}
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontWeight:"800", fontSize:"14px", color:"#e8eaf0" }}>{d.title}</div>
                <div style={{ fontSize:"12px", color:"#7a8a9a", marginTop:"2px" }}>{d.subtitle}</div>
              </div>
              {/* Mastery % or start/locked prompt */}
              <div style={{ textAlign:"right", flexShrink:0 }}>
                {locked ? (
                  <div style={{ fontSize:"11px", color:"#3a4a5a" }}>Pro →</div>
                ) : lastPct != null ? (
                  <>
                    <div style={{ fontSize:"18px", fontWeight:"900", color:pctColor, fontFamily:"'Courier New',monospace" }}>
                      {lastPct}%
                    </div>
                    <div style={{ fontSize:"10px", color:pctColor, marginTop:"1px" }}>
                      {mastered ? "MASTERED" : lastPct >= 70 ? "GOOD" : "KEEP DRILLING"}
                    </div>
                  </>
                ) : (
                  <div style={{ fontSize:"12px", color:"#3a4a5a" }}>Start →</div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Upsell nudge for non-Pro */}
      {!isPro && (
        <div style={{ ...s.card, background:"linear-gradient(135deg,rgba(142,68,173,0.12),rgba(142,68,173,0.04))",
          borderColor:"rgba(142,68,173,0.4)", textAlign:"center", padding:"20px" }}>
          <div style={{ fontSize:"13px", color:"#a855f7", fontWeight:"700", marginBottom:"6px" }}>🏆 Unlock all 10 tables with Pro</div>
          <div style={{ fontSize:"12px", color:"#7a8a9a", marginBottom:"12px" }}>8 more drills covering motor FLA, conduit sizing, load calculations &amp; more</div>
          <button style={{ ...s.btn, background:"linear-gradient(135deg,#8e44ad,#a855f7)", color:"#fff", fontSize:"13px", padding:"8px 20px" }}
            onClick={onHome}>
            Upgrade to Pro — $30 →
          </button>
        </div>
      )}

      <div style={{ height:"20px" }} />
    </div>
  );
}
