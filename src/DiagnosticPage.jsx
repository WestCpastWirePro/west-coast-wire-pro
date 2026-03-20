import { useState, useEffect } from "react";
import { ALL_QUESTIONS, MODULES } from "./WestCoastWirePro.jsx";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"15px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
  opt: { width:"100%", textAlign:"left", padding:"14px 18px", borderRadius:"8px", border:"2px solid #2a3a54", cursor:"pointer", marginBottom:"10px", fontSize:"14px", lineHeight:"1.4", background:"#1a2840", color:"#e8eaf0" },
  optCorrect: { border:"2px solid #27ae60", background:"rgba(39,174,96,0.15)", color:"#2ecc71" },
  optWrong: { border:"2px solid #e74c3c", background:"rgba(231,76,60,0.15)", color:"#e74c3c" },
  progress: { height:"6px", background:"#2a3a54", borderRadius:"3px", overflow:"hidden", margin:"8px 0" },
  progressBar: { height:"100%", borderRadius:"3px", background:"linear-gradient(90deg,#c8a84b,#e8c878)", transition:"width 0.3s" },
};

// Build diagnostic deck: 1-2 questions per module, mix of difficulties
function buildDeck(access) {
  const deck = [];
  MODULES.forEach(m => {
    const pool = ALL_QUESTIONS.filter(q => q.mod === m.id);
    if (access === "free" && m.id !== 1) {
      // Free users get 2 questions from mod 1 only, 1 from others (no answers shown for locked)
      deck.push({ ...pool[Math.floor(Math.random()*pool.length)], locked: true });
    } else {
      // 2 questions per module for paid
      const shuffled = [...pool].sort(() => Math.random()-0.5);
      deck.push(...shuffled.slice(0, 2));
    }
  });
  return deck.sort(() => Math.random()-0.5).slice(0, 24);
}

const RECOMMENDATIONS = {
  low: [
    "Start with Module 1 (Definitions) — knowing core terminology is foundational to understanding everything else.",
    "Use the study guide at /study-tips to build a structured week-by-week plan.",
    "Focus 30 minutes daily on reading NEC article explanations, not just answering questions.",
  ],
  mid: [
    "You have a solid base. Target your weak modules specifically — drill them until you hit 80%+.",
    "Practice trade math daily: voltage drop, conduit fill, and motor sizing appear on every exam.",
    "Take a full 110-question timed exam simulation 2 weeks before your test date.",
  ],
  high: [
    "Strong performance. Focus on Hard difficulty questions in your weakest modules.",
    "Focus on Hard difficulty questions in your weakest modules for maximum score improvement.",
  ],
};

const DIAG_SAVE_KEY = 'wrp_diag_session';
const saveLoad = (key) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; } catch(e) { return null; } };
const savePut  = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {} };
const saveClear = (key) => { try { localStorage.removeItem(key); } catch(e) {} };

export default function DiagnosticPage({ onNavigate, onHome, access }) {
  const [phase, setPhase] = useState("intro"); // intro | quiz | results
  const [deck, setDeck] = useState([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState([]);
  const [savedSession, setSavedSession] = useState(() => saveLoad(DIAG_SAVE_KEY));

  const inQuiz = phase === "quiz";

  useEffect(() => {
    if (!inQuiz) return;
    const handler = (e) => { e.preventDefault(); e.returnValue = ""; };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [inQuiz]);

  const safeNav = (fn) => (...args) => {
    if (inQuiz && !window.confirm("Leave the diagnostic? Your progress will be saved — you can resume later.")) return;
    fn(...args);
  };
  const safeHome = safeNav(onHome);
  const safeNavigate = safeNav(onNavigate);

  const start = () => {
    saveClear(DIAG_SAVE_KEY);
    setSavedSession(null);
    const newDeck = buildDeck(access);
    setDeck(newDeck);
    setIdx(0);
    setSelected(null);
    setAnswered([]);
    setPhase("quiz");
  };

  const resume = () => {
    if (!savedSession) return;
    setDeck(savedSession.deck);
    setIdx(savedSession.idx);
    setAnswered(savedSession.answered);
    setSelected(null);
    setSavedSession(null);
    setPhase("quiz");
  };

  const handleAnswer = (i) => {
    if (selected !== null) return;
    setSelected(i);
    const q = deck[idx];
    const newAnswered = [...answered, { qid: q.id, mod: q.mod, correct: i === q.ans, locked: q.locked }];
    setAnswered(newAnswered);
    // Auto-save after every answer
    const save = { deck, idx, answered: newAnswered, savedAt: new Date().toISOString() };
    savePut(DIAG_SAVE_KEY, save);
  };

  const next = () => {
    if (idx + 1 >= deck.length) {
      saveClear(DIAG_SAVE_KEY);
      setSavedSession(null);
      setPhase("results");
      return;
    }
    setIdx(i => i+1);
    setSelected(null);
  };

  if (phase === "intro") {
    return (
      <div style={s.app}>
        <div style={{padding:"16px"}}>
          <div style={{...s.card, borderColor:"#c8a84b", textAlign:"center"}}>
            <div style={{fontSize:"40px", marginBottom:"12px"}}>🎯</div>
            <div style={{fontSize:"20px", fontWeight:"800", color:"#c8a84b", marginBottom:"8px"}}>Readiness Diagnostic</div>
            <div style={{fontSize:"14px", color:"#aabbcc", lineHeight:"1.6", marginBottom:"16px"}}>
              24 questions across all 12 exam modules. Takes about 10 minutes. You'll get a readiness score and a breakdown showing exactly where to focus your study time.
            </div>
          </div>

          {savedSession && (
            <div style={{...s.card, borderColor:"rgba(200,168,75,0.5)", background:"linear-gradient(135deg,rgba(200,168,75,0.1),rgba(200,168,75,0.04))"}}>
              <div style={{display:"flex", alignItems:"center", gap:"10px", marginBottom:"12px"}}>
                <span style={{fontSize:"22px"}}>📍</span>
                <div>
                  <div style={{fontWeight:"700", fontSize:"14px", color:"#d8e0e8"}}>Resume where you left off</div>
                  <div style={{fontSize:"12px", color:"#7a8a9a"}}>
                    Question {savedSession.idx + 1} of {savedSession.deck?.length} · {savedSession.answered?.filter(a=>a.correct).length || 0} correct
                    {savedSession.savedAt && (' · ' + new Date(savedSession.savedAt).toLocaleTimeString('en-US', {hour:'numeric', minute:'2-digit'}))}
                  </div>
                </div>
              </div>
              <div style={{display:"flex", gap:"8px"}}>
                <button style={{...s.btn, ...s.btnGold, flex:2, fontSize:"14px", padding:"11px"}} onClick={resume}>▶ Resume</button>
                <button style={{...s.btn, ...s.btnGray, flex:1, fontSize:"13px", padding:"11px"}} onClick={() => { saveClear(DIAG_SAVE_KEY); setSavedSession(null); }}>Start Over</button>
              </div>
            </div>
          )}

          <div style={s.card}>
            {[
              ["📋","24 questions","2 per module, mixed difficulty"],
              ["🕐","~10 minutes","No time pressure"],
              ["📊","Module breakdown","See your weak spots instantly"],
              ["📚","Study plan","Custom recommendations after"],
            ].map(([icon, title, sub]) => (
              <div key={title} style={{display:"flex", gap:"12px", alignItems:"flex-start", marginBottom:"14px"}}>
                <span style={{fontSize:"20px"}}>{icon}</span>
                <div>
                  <div style={{fontWeight:"700", fontSize:"14px", color:"#e8eaf0"}}>{title}</div>
                  <div style={{fontSize:"12px", color:"#8899aa"}}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{padding:"0 16px 32px"}}>
            <button style={{...s.btn, ...s.btnGold, width:"100%", fontSize:"16px", padding:"16px"}} onClick={start}>
              {savedSession ? "Start Fresh →" : "Start Diagnostic →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "quiz") {
    const q = deck[idx];
    const pct = Math.round((idx / deck.length) * 100);

    return (
      <div style={s.app}>
        <div style={s.header}>
          <span style={{fontSize:"28px"}}>⚡</span>
          <div style={{flex:1}}>
            <div style={s.logo}>Am I Ready?</div>
            <div style={{fontSize:"12px", color:"#8899aa"}}>Question {idx+1} of {deck.length}</div>
          </div>
        </div>
        <div style={{padding:"12px 16px 0"}}>
          <div style={s.progress}><div style={{...s.progressBar, width:`${pct}%`}}/></div>
        </div>

        <div style={{padding:"0 16px"}}>
          <div style={s.card}>
            <div style={{display:"flex", gap:"8px", marginBottom:"12px", flexWrap:"wrap"}}>
              <span style={{fontSize:"11px", padding:"3px 8px", borderRadius:"4px", background:"rgba(200,168,75,0.12)", color:"#c8a84b", fontWeight:"700"}}>
                {MODULES.find(m=>m.id===q.mod)?.name || `MOD ${q.mod}`}
              </span>
              <span style={{fontSize:"11px", padding:"3px 8px", borderRadius:"4px", background:"#2a3a54", color:"#8899aa", fontWeight:"700"}}>
                {q.diff.toUpperCase()}
              </span>
            </div>
            <div style={{fontSize:"16px", fontWeight:"600", lineHeight:"1.5"}}>{q.q}</div>
          </div>

          {q.locked ? (
            <div style={{...s.card, borderColor:"rgba(200,168,75,0.4)", textAlign:"center", padding:"24px 16px"}}>
              <div style={{fontSize:"28px", marginBottom:"10px"}}>🔒</div>
              <div style={{fontSize:"14px", fontWeight:"700", color:"#c8a84b", marginBottom:"6px"}}>This module is locked</div>
              <div style={{fontSize:"13px", color:"#7a8a9a", lineHeight:"1.6", marginBottom:"16px"}}>
                Upgrade to Standard or Pro to see questions from all 11 modules in your diagnostic.
              </div>
              <button style={{...s.btn, ...s.btnGold, width:"100%"}} onClick={next}>
                Skip → {idx+1 >= deck.length ? "See My Results" : "Next Question"}
              </button>
            </div>
          ) : q.opts.map((opt, i) => {
            let style = {...s.opt};
            if (selected !== null) {
              if (i === q.ans) style = {...s.opt, ...s.optCorrect};
              else if (i === selected) style = {...s.opt, ...s.optWrong};
            }
            return (
              <button key={i} style={style} onClick={() => handleAnswer(i)}>
                <span style={{fontWeight:"700", marginRight:"10px", color:"#c8a84b"}}>{String.fromCharCode(65+i)}.</span>
                {opt}
              </button>
            );
          })}

          {selected !== null && (
            <div style={{...s.card, borderColor: selected===q.ans?"#27ae60":"#e74c3c"}}>
              <div style={{fontSize:"13px", fontWeight:"700", color: selected===q.ans?"#2ecc71":"#e74c3c", marginBottom:"6px"}}>
                {selected===q.ans ? "✓ Correct" : "✗ Incorrect"}
              </div>
              <div style={{fontSize:"13px", color:"#aabbcc", lineHeight:"1.5"}}>{q.exp}</div>
              <div style={{marginTop:"6px", fontSize:"11px", color:"#c8a84b"}}>{q.ref}</div>
              <button style={{...s.btn, ...s.btnGold, width:"100%", marginTop:"14px"}} onClick={next}>
                {idx+1 >= deck.length ? "See My Results →" : "Next →"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Results
  const unlocked = answered.filter(a => !a.locked);
  const total = unlocked.length;
  const correct = unlocked.filter(a=>a.correct).length;
  const pct = total ? Math.round((correct/total)*100) : 0;

  let readiness, color, recs;
  if (pct >= 75) { readiness = "Ready"; color = "#2ecc71"; recs = RECOMMENDATIONS.high; }
  else if (pct >= 50) { readiness = "Getting There"; color = "#c8a84b"; recs = RECOMMENDATIONS.mid; }
  else { readiness = "Needs Work"; color = "#e74c3c"; recs = RECOMMENDATIONS.low; }

  const modResults = MODULES.map(m => {
    const mAnswers = unlocked.filter(a => a.mod === m.id);
    if (!mAnswers.length) return null;
    const mCorrect = mAnswers.filter(a=>a.correct).length;
    return { mod: m, correct: mCorrect, total: mAnswers.length, pct: Math.round((mCorrect/mAnswers.length)*100) };
  }).filter(Boolean).sort((a,b)=>a.pct-b.pct);

  return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{fontSize:"28px"}}>⚡</span>
        <div><div style={s.logo}>Diagnostic Results</div></div>
      </div>

      <div style={{padding:"16px"}}>
        <div style={{...s.card, textAlign:"center", borderColor:color}}>
          <div style={{fontSize:"56px", fontWeight:"900", color}}>{pct}%</div>
          <div style={{fontSize:"18px", fontWeight:"700", color, marginBottom:"4px"}}>{readiness}</div>
          <div style={{fontSize:"13px", color:"#8899aa"}}>{correct} correct out of {total} questions</div>
        </div>

        <div style={s.card}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"14px"}}>MODULE BREAKDOWN — Lowest to Highest</div>
          {modResults.map(({mod, correct, total, pct:mp}) => (
            <div key={mod.id} style={{marginBottom:"12px"}}>
              <div style={{display:"flex", justifyContent:"space-between", marginBottom:"4px"}}>
                <span style={{fontSize:"12px", color:"#aabbcc"}}>{mod.name}</span>
                <span style={{fontSize:"12px", fontWeight:"700", color:mp>=70?"#2ecc71":mp>=50?"#c8a84b":"#e74c3c"}}>{mp}% ({correct}/{total})</span>
              </div>
              <div style={s.progress}>
                <div style={{...s.progressBar, width:`${mp}%`, background:mp>=70?"linear-gradient(90deg,#27ae60,#2ecc71)":mp>=50?"linear-gradient(90deg,#c8a84b,#e8c878)":"linear-gradient(90deg,#e74c3c,#c0392b)"}}/>
              </div>
            </div>
          ))}
        </div>

        <div style={s.card}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"12px"}}>📚 YOUR STUDY PLAN</div>
          {recs.map((rec, i) => (
            <div key={i} style={{display:"flex", gap:"10px", marginBottom:"12px", paddingBottom:"12px", borderBottom:i<recs.length-1?"1px solid #2a3a54":"none"}}>
              <span style={{color:"#c8a84b", fontWeight:"700", fontSize:"16px"}}>{i+1}.</span>
              <span style={{fontSize:"13px", color:"#aabbcc", lineHeight:"1.5"}}>{rec}</span>
            </div>
          ))}
        </div>

        {modResults.filter(r=>r.pct<70).length > 0 && (
          <div style={s.card}>
            <div style={{fontSize:"13px", color:"#e74c3c", fontWeight:"700", marginBottom:"8px"}}>⚠️ WEAK MODULES — Focus Here First</div>
            {modResults.filter(r=>r.pct<70).map(r => (
              <div key={r.mod.id} style={{fontSize:"13px", color:"#aabbcc", padding:"6px 0", borderBottom:"1px solid #2a3a54"}}>
                🔴 {r.mod.name} — {r.pct}%
              </div>
            ))}
          </div>
        )}

        <div style={{display:"flex", gap:"12px", padding:"0 16px 32px", flexWrap:"wrap"}}>
          <button style={{...s.btn, ...s.btnGold, flex:1}} onClick={start}>Retake Diagnostic</button>
          <button style={{...s.btn, ...s.btnGray, flex:1}} onClick={safeHome}>Practice Mode</button>
        </div>
      </div>
    </div>
  );
}
