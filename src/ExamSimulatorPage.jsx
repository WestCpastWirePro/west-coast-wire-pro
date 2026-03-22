import { useState, useEffect, useRef } from "react";
import { ALL_QUESTIONS, MODULES } from "./WestCoastWirePro.jsx";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"15px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
  btnRed: { background:"rgba(231,76,60,0.2)", color:"#e74c3c", border:"1px solid #e74c3c" },
  opt: { width:"100%", textAlign:"left", padding:"14px 18px", borderRadius:"8px", border:"2px solid #2a3a54", cursor:"pointer", marginBottom:"10px", fontSize:"14px", lineHeight:"1.4", background:"#1a2840", color:"#e8eaf0" },
  optSelected: { border:"2px solid #c8a84b", background:"rgba(200,168,75,0.1)" },
  optCorrect: { border:"2px solid #27ae60", background:"rgba(39,174,96,0.15)", color:"#2ecc71" },
  optWrong: { border:"2px solid #e74c3c", background:"rgba(231,76,60,0.15)", color:"#e74c3c" },
  progress: { height:"8px", background:"#2a3a54", borderRadius:"4px", overflow:"hidden" },
  progressBar: { height:"100%", borderRadius:"4px", background:"linear-gradient(90deg,#c8a84b,#e8c878)", transition:"width 0.3s" },
};

const TOTAL_Q = 110;
const TOTAL_SECS = 4.5 * 60 * 60; // 4.5 hours

function fmt(secs) {
  const h = Math.floor(secs/3600);
  const m = Math.floor((secs%3600)/60);
  const s = secs%60;
  return `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

const SIM_SAVE_KEY = 'wrp_sim_session';
const simSave  = (val) => { try { localStorage.setItem(SIM_SAVE_KEY, JSON.stringify(val)); } catch(e) {} };
const simLoad  = ()    => { try { const v = localStorage.getItem(SIM_SAVE_KEY); return v ? JSON.parse(v) : null; } catch(e) { return null; } };
const simClear = ()    => { try { localStorage.removeItem(SIM_SAVE_KEY); } catch(e) {} };

export default function ExamSimulatorPage({ onHome, access , onNavigate }) {
  const [phase, setPhase] = useState("intro");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({}); // qIndex -> selectedOption
  const [idx, setIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECS);
  const [submitted, setSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [savedSession, setSavedSession] = useState(() => simLoad());
  const timerRef = useRef(null);

  const inExam = phase === "exam" && !submitted;

  useEffect(() => {
    if (!inExam) return;
    const handler = (e) => { e.preventDefault(); e.returnValue = ""; };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [inExam]);

  // Auto-save timer tick
  useEffect(() => {
    if (!inExam) return;
    const saveTimer = setInterval(() => {
      setAnswers(a => { setTimeLeft(t => { simSave({ questions, answers: a, idx, timeLeft: t, savedAt: new Date().toISOString() }); return t; }); return a; });
    }, 30000); // save every 30 seconds
    return () => clearInterval(saveTimer);
  }, [inExam, questions, idx]);

  const safeHome = (...args) => {
    if (inExam && !window.confirm("Leave the exam? Your progress is auto-saved — you can resume later.")) return;
    onHome(...args);
  };

  const start = () => {
    simClear();
    setSavedSession(null);
    const deck = [];
    const pool = access === "free"
      ? ALL_QUESTIONS.filter(q => q.mod === 1 || q.mod === 2)
      : ALL_QUESTIONS;

    MODULES.forEach(m => {
      const mPool = [...pool.filter(q => q.mod === m.id)].sort(() => Math.random()-0.5);
      const count = Math.max(1, Math.round((mPool.length / pool.length) * TOTAL_Q));
      deck.push(...mPool.slice(0, count));
    });

    while (deck.length > TOTAL_Q) deck.splice(Math.floor(Math.random()*deck.length), 1);

    setQuestions(deck.sort(() => Math.random()-0.5));
    setAnswers({});
    setIdx(0);
    setTimeLeft(TOTAL_SECS);
    setSubmitted(false);
    setShowReview(false);
    setPhase("exam");
  };

  const resume = () => {
    if (!savedSession) return;
    setQuestions(savedSession.questions);
    setAnswers(savedSession.answers || {});
    setIdx(savedSession.idx || 0);
    setTimeLeft(savedSession.timeLeft || TOTAL_SECS);
    setSubmitted(false);
    setShowReview(false);
    setSavedSession(null);
    setPhase("exam");
  };

  useEffect(() => {
    if (phase === "exam" && !submitted) {
      timerRef.current = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) { clearInterval(timerRef.current); handleSubmit(true); return 0; }
          const newT = t - 1;
          // Save every 60 seconds via timer
          if (newT % 60 === 0) {
            setAnswers(a => { simSave({ questions, answers: a, idx, timeLeft: newT, savedAt: new Date().toISOString() }); return a; });
          }
          return newT;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [phase, submitted]);

  const handleSubmit = (timeUp = false) => {
    clearInterval(timerRef.current);
    simClear();
    setSavedSession(null);
    setSubmitted(true);
    setPhase(timeUp ? "results-timeup" : "results");
  };

  const answered = Object.keys(answers).length;
  const unanswered = questions.length - answered;

  // Results calc
  const correct = questions.filter((q, i) => answers[i] === q.ans).length;
  const pct = questions.length ? Math.round((correct / questions.length) * 100) : 0;
  const passed = pct >= 70;
  const timeUsed = TOTAL_SECS - timeLeft;

  if (phase === "intro") return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{fontSize:"28px"}}>⚡</span>
        <div style={{flex:1}}><div style={s.logo}>Full Exam Simulator</div></div>
        <button style={{...s.btn, ...s.btnGray, padding:"8px 14px", fontSize:"13px"}} onClick={safeHome}>Back</button>
      </div>
      <div style={{padding:"16px"}}>
        <div style={{...s.card, borderColor:"#c8a84b", background:"linear-gradient(135deg,rgba(200,168,75,0.08),rgba(200,168,75,0.02))"}}>
          <div style={{fontSize:"36px", textAlign:"center", marginBottom:"12px"}}>📋</div>
          <div style={{fontSize:"19px", fontWeight:"800", color:"#c8a84b", textAlign:"center", marginBottom:"8px"}}>Simulate the Real Exam</div>
          <div style={{fontSize:"14px", color:"#aabbcc", lineHeight:"1.6", textAlign:"center"}}>
            110 questions. 4 hours 30 minutes. Same format and distribution as the California General Electrician exam. Your score is pass or fail at 70%.
          </div>
        </div>

        {savedSession && (
          <div style={{...s.card, borderColor:"rgba(200,168,75,0.5)", background:"linear-gradient(135deg,rgba(200,168,75,0.1),rgba(200,168,75,0.04))"}}>
            <div style={{display:"flex", alignItems:"center", gap:"10px", marginBottom:"12px"}}>
              <span style={{fontSize:"22px"}}>📍</span>
              <div>
                <div style={{fontWeight:"700", fontSize:"14px", color:"#d8e0e8"}}>Resume your exam</div>
                <div style={{fontSize:"12px", color:"#7a8a9a"}}>
                  Q{(savedSession.idx||0)+1} of {savedSession.questions?.length} · {Object.keys(savedSession.answers||{}).length} answered · {fmt(savedSession.timeLeft||0)} remaining
                  {savedSession.savedAt && (' · Saved ' + new Date(savedSession.savedAt).toLocaleTimeString('en-US', {hour:'numeric', minute:'2-digit'}))}
                </div>
              </div>
            </div>
            <div style={{display:"flex", gap:"8px"}}>
              <button style={{...s.btn, ...s.btnGold, flex:2, fontSize:"14px", padding:"11px"}} onClick={resume}>▶ Resume Exam</button>
              <button style={{...s.btn, ...s.btnGray, flex:1, fontSize:"13px", padding:"11px"}} onClick={() => { simClear(); setSavedSession(null); }}>Start Over</button>
            </div>
          </div>
        )}

        <div style={s.card}>
          {[
            ["📊","110 Questions","Proportionally drawn from all 11 modules"],
            ["⏱️","4.5 Hour Timer","Auto-submits when time expires"],
            ["🎯","70% to Pass","Same threshold as the real PSI exam"],
            ["📈","Full Breakdown","Score by module when you finish"],
            ["🔇","No Explanations","During exam — just like the real thing"],
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
        <div style={{...s.card, borderColor:"rgba(231,76,60,0.4)", background:"rgba(231,76,60,0.05)"}}>
          <div style={{fontSize:"13px", color:"#e74c3c", fontWeight:"700", marginBottom:"6px"}}>⚠️ BEFORE YOU START</div>
          <div style={{fontSize:"13px", color:"#aabbcc", lineHeight:"1.6"}}>
            Set aside 4.5 uninterrupted hours. Keep your phone face-down. Treat this exactly like the real exam — your score will only mean something if the conditions match.
          </div>
        </div>
        {access === "free" && (
          <div style={{...s.card, borderColor:"rgba(200,168,75,0.4)"}}>
            <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"6px"}}>🔒 FREE TIER</div>
            <div style={{fontSize:"13px", color:"#8899aa"}}>Free users get a preview using Modules 1 &amp; 2 questions only. Unlock full access for the real 110-question simulation drawn from all 11 modules.</div>
          </div>
        )}
        <div style={{padding:"0 16px 32px"}}>
          <button style={{...s.btn, ...s.btnGold, width:"100%", fontSize:"16px", padding:"16px"}} onClick={start}>
            {savedSession ? "Start Fresh →" : "Start Exam Simulation →"}
          </button>
        </div>
      </div>
    </div>
  );

  if (phase === "exam") {
    const q = questions[idx];
    const sel = answers[idx];
    const timerColor = timeLeft < 1800 ? (timeLeft < 600 ? "#e74c3c" : "#c8a84b") : "#2ecc71";

    return (
      <div style={s.app}>
        <div style={{...s.header, flexWrap:"wrap", gap:"8px"}}>
          <span style={{fontSize:"24px"}}>📋</span>
          <div style={{flex:1}}>
            <div style={{fontSize:"14px", fontWeight:"700", color:"#c8a84b"}}>EXAM SIMULATION</div>
            <div style={{fontSize:"12px", color:"#8899aa"}}>{answered}/{questions.length} answered</div>
          </div>
          <div style={{fontSize:"22px", fontWeight:"800", color:timerColor, fontVariantNumeric:"tabular-nums"}}>
            {fmt(timeLeft)}
          </div>
        </div>

        <div style={{padding:"8px 16px 0"}}>
          <div style={s.progress}>
            <div style={{...s.progressBar, width:`${Math.round((idx/questions.length)*100)}%`}}/>
          </div>
          <div style={{display:"flex", justifyContent:"space-between", fontSize:"11px", color:"#8899aa", marginTop:"4px"}}>
            <span>Q{idx+1} of {questions.length}</span>
            <span style={{color:unanswered>0?"#c8a84b":"#2ecc71"}}>{unanswered} unanswered</span>
          </div>
        </div>

        <div style={{padding:"0 16px"}}>
          <div style={s.card}>
            <div style={{display:"flex", gap:"8px", marginBottom:"10px"}}>
              <span style={{fontSize:"11px", padding:"3px 8px", borderRadius:"4px", background:"rgba(200,168,75,0.12)", color:"#c8a84b", fontWeight:"700"}}>
                Q{idx+1}
              </span>
              <span style={{fontSize:"11px", padding:"3px 8px", borderRadius:"4px", background:"#2a3a54", color:"#8899aa", fontWeight:"700"}}>
                {q.diff.toUpperCase()}
              </span>
            </div>
            <div style={{fontSize:"16px", fontWeight:"600", lineHeight:"1.5"}}>{q.q}</div>
          </div>

          {q.opts.map((opt, i) => (
            <button key={i}
              style={{...s.opt, ...(sel===i ? s.optSelected : {})}}
              onClick={() => setAnswers(a => { const na = {...a, [idx]: i}; simSave({ questions, answers: na, idx, timeLeft, savedAt: new Date().toISOString() }); return na; })}>
              <span style={{fontWeight:"700", marginRight:"10px", color:"#c8a84b"}}>{String.fromCharCode(65+i)}.</span>
              {opt}
            </button>
          ))}
        </div>

        <div style={{display:"flex", gap:"10px", padding:"8px 16px 16px"}}>
          <button style={{...s.btn, ...s.btnGray, flex:1}} disabled={idx===0} onClick={()=>setIdx(i=>i-1)}>← Prev</button>
          {idx < questions.length-1
            ? <button style={{...s.btn, ...s.btnGold, flex:2}} onClick={()=>setIdx(i=>i+1)}>Next →</button>
            : <button style={{...s.btn, ...s.btnGold, flex:2}} onClick={()=>handleSubmit(false)}>Submit Exam →</button>
          }
        </div>

        {/* Question Navigator */}
        <div style={s.card}>
          <div style={{fontSize:"12px", color:"#8899aa", marginBottom:"8px"}}>QUESTION NAVIGATOR — tap to jump</div>
          <div style={{display:"flex", flexWrap:"wrap", gap:"6px"}}>
            {questions.map((_, i) => (
              <button key={i} onClick={()=>setIdx(i)}
                style={{width:"32px", height:"32px", borderRadius:"6px", border:"none", cursor:"pointer", fontSize:"11px", fontWeight:"700",
                  background: i===idx ? "#c8a84b" : answers[i]!==undefined ? "#27ae60" : "#2a3a54",
                  color: i===idx ? "#0f1923" : answers[i]!==undefined ? "#fff" : "#8899aa"}}>
                {i+1}
              </button>
            ))}
          </div>
        </div>

        <div style={{padding:"0 16px 32px"}}>
          <button style={{...s.btn, ...s.btnRed, width:"100%", fontSize:"13px"}} onClick={()=>{ if(window.confirm("Submit exam now? You have " + unanswered + " unanswered questions.")) handleSubmit(false); }}>
            Submit Exam Early
          </button>
        </div>
      </div>
    );
  }

  // Results screen
  const timeUpBanner = phase === "results-timeup";
  const modBreakdown = MODULES.map(m => {
    const mQs = questions.map((q,i)=>({q,i})).filter(({q})=>q.mod===m.id);
    if (!mQs.length) return null;
    const mCorrect = mQs.filter(({q,i})=>answers[i]===q.ans).length;
    const mPct = Math.round((mCorrect/mQs.length)*100);
    return { mod:m, correct:mCorrect, total:mQs.length, pct:mPct };
  }).filter(Boolean).sort((a,b)=>a.pct-b.pct);

  return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{fontSize:"28px"}}>⚡</span>
        <div><div style={s.logo}>Exam Results</div></div>
      </div>
      <div style={{padding:"16px"}}>
        {timeUpBanner && (
          <div style={{...s.card, borderColor:"#e74c3c", background:"rgba(231,76,60,0.08)", textAlign:"center", marginBottom:"0"}}>
            <div style={{fontSize:"13px", color:"#e74c3c", fontWeight:"700"}}>⏰ TIME EXPIRED — Exam auto-submitted</div>
          </div>
        )}
        <div style={{...s.card, textAlign:"center", borderColor:passed?"#27ae60":"#e74c3c"}}>
          <div style={{fontSize:"64px", fontWeight:"900", color:passed?"#2ecc71":"#e74c3c"}}>{pct}%</div>
          <div style={{fontSize:"22px", fontWeight:"800", color:passed?"#2ecc71":"#e74c3c", marginBottom:"8px"}}>
            {passed ? "✓ PASS" : "✗ FAIL"}
          </div>
          <div style={{fontSize:"14px", color:"#8899aa", marginBottom:"4px"}}>{correct} correct / {questions.length} questions</div>
          <div style={{fontSize:"13px", color:"#8899aa"}}>Time used: {fmt(timeUsed)}</div>
        </div>

        {!passed && (
          <div style={{...s.card, borderColor:"rgba(200,168,75,0.4)", background:"rgba(200,168,75,0.05)"}}>
            <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"6px"}}>What to do next</div>
            <div style={{fontSize:"13px", color:"#aabbcc", lineHeight:"1.6"}}>
              {pct >= 60
                ? "You're close. Focus on the red modules below — getting those to 70%+ will push you over the threshold."
                : "Don't be discouraged. Most candidates fail their first practice exam. Review the weakest modules systematically, then retake in 1–2 weeks."}
            </div>
          </div>
        )}

        <div style={s.card}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"14px"}}>MODULE BREAKDOWN</div>
          {modBreakdown.map(({mod, correct, total, pct:mp}) => (
            <div key={mod.id} style={{marginBottom:"12px"}}>
              <div style={{display:"flex", justifyContent:"space-between", marginBottom:"4px"}}>
                <span style={{fontSize:"12px", color:"#aabbcc"}}>{mod.name}</span>
                <span style={{fontSize:"12px", fontWeight:"700", color:mp>=70?"#2ecc71":"#e74c3c"}}>{mp}% ({correct}/{total})</span>
              </div>
              <div style={s.progress}>
                <div style={{...s.progressBar, width:`${mp}%`, background:mp>=70?"linear-gradient(90deg,#27ae60,#2ecc71)":"linear-gradient(90deg,#e74c3c,#c0392b)"}}/>
              </div>
            </div>
          ))}
        </div>

        <div style={{display:"flex", gap:"12px", padding:"0 16px 32px", flexWrap:"wrap"}}>
          <button style={{...s.btn, ...s.btnGold, flex:1}} onClick={start}>Retake Exam</button>
          <button style={{...s.btn, ...s.btnGray, flex:1}} onClick={safeHome}>Back to Menu</button>
        </div>
      </div>
    </div>
  );
}
