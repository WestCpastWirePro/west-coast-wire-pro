import { useState, useEffect } from "react";
import { ALL_QUESTIONS } from "./WestCoastWirePro.jsx";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"15px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
  btnRed: { background:"rgba(231,76,60,0.15)", color:"#e74c3c", border:"1px solid #e74c3c" },
  opt: { width:"100%", textAlign:"left", padding:"14px 18px", borderRadius:"8px", border:"2px solid #2a3a54", cursor:"pointer", marginBottom:"10px", fontSize:"14px", lineHeight:"1.4", background:"#1a2840", color:"#e8eaf0" },
  optCorrect: { border:"2px solid #27ae60", background:"rgba(39,174,96,0.15)", color:"#2ecc71" },
  optWrong: { border:"2px solid #e74c3c", background:"rgba(231,76,60,0.15)", color:"#e74c3c" },
  progress: { height:"6px", background:"#2a3a54", borderRadius:"3px", overflow:"hidden", margin:"12px 0" },
  progressBar: { height:"100%", borderRadius:"3px", background:"linear-gradient(90deg,#c8a84b,#e8c878)", transition:"width 0.3s" },
};

export default function MissedQuestionsPage({ onHome, access , onNavigate }) {
  const [missedIds, setMissedIds] = useState([]);
  const [deck, setDeck] = useState([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [cleared, setCleared] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      const ids = JSON.parse(localStorage.getItem("wrp_missed") || "[]");
      setMissedIds(ids);
      const qs = ALL_QUESTIONS.filter(q => ids.includes(q.id));
      // Filter to accessible questions
      const accessible = access === "pro" ? qs : [];
      setDeck([...accessible].sort(() => Math.random() - 0.5));
    } catch(e) { setDeck([]); }
  }, []);

  const markCleared = () => {
    const q = deck[idx];
    const newCleared = [...cleared, q.id];
    setCleared(newCleared);
    // Remove from localStorage
    try {
      const remaining = missedIds.filter(id => !newCleared.includes(id));
      localStorage.setItem("wrp_missed", JSON.stringify(remaining));
    } catch(e) {}
    advance();
  };

  const advance = () => {
    if (idx + 1 >= deck.length) { setDone(true); return; }
    setIdx(i => i + 1);
    setSelected(null);
  };

  const clearAll = () => {
    try { localStorage.setItem("wrp_missed", "[]"); } catch(e) {}
    setDeck([]);
    setMissedIds([]);
  };

  if (access !== 'pro') return (
    <div style={s.app}>
      <div style={{padding:'40px 20px', textAlign:'center'}}>
        <div style={{fontSize:'40px', marginBottom:'16px'}}>🔁</div>
        <div style={{fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'20px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', marginBottom:'12px'}}>Missed Questions Deck</div>
        <div style={{fontSize:'14px', color:'#8899aa', lineHeight:'1.7', maxWidth:'340px', margin:'0 auto 24px'}}>
          Every question you get wrong automatically builds a review deck here. Spaced repetition until they stick. Pro feature.
        </div>
        <button onClick={() => onNavigate('upgrade')}
          style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black',Arial,sans-serif", fontWeight:'900', fontSize:'14px', textTransform:'uppercase', border:'none', borderRadius:'6px', padding:'14px 28px', cursor:'pointer'}}>
          Upgrade to Pro →
        </button>
      </div>
    </div>
  );

  if (deck.length === 0 && missedIds.length === 0) {
    return (
      <div style={s.app}>
        <div style={{padding:"32px 16px", textAlign:"center"}}>
          <div style={{fontSize:"48px", marginBottom:"16px"}}>🎯</div>
          <div style={{fontSize:"20px", fontWeight:"700", color:"#c8a84b", marginBottom:"8px"}}>No Missed Questions Yet</div>
          <div style={{fontSize:"14px", color:"#8899aa", maxWidth:"300px", margin:"0 auto 24px"}}>
            Complete some practice sessions and any questions you get wrong will appear here automatically. If you recently cleared your browser data, your history will have reset.
          </div>
          <button style={{...s.btn, ...s.btnGold}} onClick={onHome}>Start Practicing</button>
        </div>
      </div>
    );
  }

  if (done || (deck.length === 0 && missedIds.length > 0)) {
    return (
      <div style={s.app}>
        <div style={s.header}>
          <span style={{fontSize:"28px"}}>⚡</span>
          <div><div style={s.logo}>Missed Questions</div></div>
        </div>
        <div style={{padding:"32px 16px", textAlign:"center"}}>
          <div style={{fontSize:"48px", marginBottom:"16px"}}>✅</div>
          <div style={{fontSize:"20px", fontWeight:"700", color:"#2ecc71", marginBottom:"8px"}}>Deck Complete</div>
          <div style={{fontSize:"14px", color:"#8899aa", marginBottom:"8px"}}>
            You marked <strong style={{color:"#c8a84b"}}>{cleared.length}</strong> questions as learned.
          </div>
          {missedIds.length - cleared.length > 0 && (
            <div style={{fontSize:"13px", color:"#8899aa", marginBottom:"24px"}}>
              {missedIds.length - cleared.length} questions still in your deck.
            </div>
          )}
          <div style={{display:"flex", gap:"12px", justifyContent:"center", flexWrap:"wrap"}}>
            <button style={{...s.btn, ...s.btnGold}} onClick={() => { setIdx(0); setSelected(null); setCleared([]); setDone(false); setDeck(d => [...d].sort(()=>Math.random()-0.5)); }}>
              Go Again
            </button>
            <button style={{...s.btn, ...s.btnGray}} onClick={onHome}>Back to Menu</button>
          </div>
        </div>
      </div>
    );
  }

  const q = deck[idx];
  const pct = Math.round((idx / deck.length) * 100);

  return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{fontSize:"28px"}}>⚡</span>
        <div style={{flex:1}}>
          <div style={s.logo}>Missed Questions</div>
          <div style={{fontSize:"12px", color:"#8899aa"}}>{deck.length} questions to review</div>
        </div>
        <button style={{...s.btn, ...s.btnGray, padding:"8px 14px", fontSize:"13px"}} onClick={onHome}>Menu</button>
      </div>

      <div style={{padding:"12px 16px 0"}}>
        <div style={{display:"flex", justifyContent:"space-between", fontSize:"12px", color:"#8899aa", marginBottom:"4px"}}>
          <span>{idx + 1} of {deck.length}</span>
          <span>{Math.round((cleared.length/deck.length)*100)}% learned</span>
        </div>
        <div style={s.progress}><div style={{...s.progressBar, width:`${pct}%`}}/></div>
      </div>

      <div style={{padding:"0 16px"}}>
        <div style={s.card}>
          <div style={{display:"flex", gap:"8px", marginBottom:"12px", flexWrap:"wrap"}}>
            <span style={{fontSize:"11px", padding:"3px 8px", borderRadius:"4px", background:"rgba(231,76,60,0.15)", color:"#e74c3c", fontWeight:"700"}}>
              MISSED
            </span>
            <span style={{fontSize:"11px", padding:"3px 8px", borderRadius:"4px", background:"rgba(200,168,75,0.12)", color:"#c8a84b", fontWeight:"700"}}>
              MOD {q.mod}
            </span>
            <span style={{fontSize:"11px", padding:"3px 8px", borderRadius:"4px", background:"#2a3a54", color:"#8899aa", fontWeight:"700"}}>
              {q.diff.toUpperCase()}
            </span>
          </div>
          <div style={{fontSize:"16px", fontWeight:"600", lineHeight:"1.5", color:"#e8eaf0"}}>{q.q}</div>
        </div>

        {q.opts.map((opt, i) => {
          let style = {...s.opt};
          if (selected !== null) {
            if (i === q.ans) style = {...s.opt, ...s.optCorrect};
            else if (i === selected && i !== q.ans) style = {...s.opt, ...s.optWrong};
          }
          return (
            <button key={i} style={style} onClick={() => { if (selected === null) setSelected(i); }}>
              <span style={{fontWeight:"700", marginRight:"10px", color:"#c8a84b"}}>{String.fromCharCode(65+i)}.</span>
              {opt}
            </button>
          );
        })}

        {selected !== null && (
          <div style={{...s.card, borderColor: selected === q.ans ? "#27ae60" : "#e74c3c"}}>
            <div style={{fontSize:"13px", fontWeight:"700", marginBottom:"8px", color: selected === q.ans ? "#2ecc71" : "#e74c3c"}}>
              {selected === q.ans ? "✓ Correct" : "✗ Incorrect — Correct answer: " + String.fromCharCode(65 + q.ans)}
            </div>
            <div style={{fontSize:"14px", color:"#aabbcc", lineHeight:"1.6"}}>{q.exp}</div>
            <div style={{marginTop:"8px", fontSize:"12px", color:"#c8a84b", fontWeight:"600"}}>{q.ref}</div>

            <div style={{display:"flex", gap:"10px", marginTop:"16px", flexWrap:"wrap"}}>
              {selected === q.ans && (
                <button style={{...s.btn, background:"rgba(39,174,96,0.15)", color:"#2ecc71", border:"1px solid #27ae60", flex:1, fontSize:"13px"}} onClick={markCleared}>
                  ✓ Got It — Remove from Deck
                </button>
              )}
              <button style={{...s.btn, ...s.btnGold, flex:1, fontSize:"13px"}} onClick={advance}>
                {idx + 1 >= deck.length ? "Finish" : "Keep in Deck →"}
              </button>
            </div>
          </div>
        )}
      </div>

      <div style={{padding:"12px 16px 32px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <button style={{...s.btn, ...s.btnRed, fontSize:"12px", padding:"8px 14px"}} onClick={clearAll}>
          Clear All History
        </button>
        <span style={{fontSize:"12px", color:"#8899aa"}}>{cleared.length} learned this session</span>
      </div>
    </div>
  );
}
