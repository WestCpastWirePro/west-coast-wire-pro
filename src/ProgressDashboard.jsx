import { useState, useEffect } from "react";
import { MODULES } from "./WestCoastWirePro.jsx";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"10px 20px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"14px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
  btnRed: { background:"rgba(231,76,60,0.15)", color:"#e74c3c", border:"1px solid rgba(231,76,60,0.4)", borderRadius:"8px", padding:"8px 14px", cursor:"pointer", fontSize:"12px", fontWeight:"700" },
  progress: { height:"8px", background:"#2a3a54", borderRadius:"4px", overflow:"hidden", margin:"4px 0" },
  bar: (pct) => ({ height:"100%", borderRadius:"4px", width:`${pct}%`, background: pct>=70 ? "linear-gradient(90deg,#27ae60,#2ecc71)" : pct>=50 ? "linear-gradient(90deg,#c8a84b,#e8c878)" : "linear-gradient(90deg,#e74c3c,#c0392b)", transition:"width 0.5s" }),
};

function fmt(ts) {
  return new Date(ts).toLocaleDateString("en-US", { month:"short", day:"numeric" });
}

export default function ProgressDashboard({ onHome, onNavigate }) {
  const [history, setHistory] = useState([]);
  const [missed, setMissed] = useState([]);

  useEffect(() => {
    try {
      setHistory(JSON.parse(localStorage.getItem("wrp_history") || "[]"));
      setMissed(JSON.parse(localStorage.getItem("wrp_missed") || "[]"));
    } catch(e) {}
  }, []);

  const clearData = () => {
    if (!window.confirm("Clear all progress history? This cannot be undone.")) return;
    try {
      localStorage.removeItem("wrp_history");
      localStorage.removeItem("wrp_missed");
      setHistory([]);
      setMissed([]);
    } catch(e) {}
  };

  if (!history.length) {
    return (
      <div style={s.app}>
        <div style={{padding:"40px 16px", textAlign:"center"}}>
          <div style={{fontSize:"48px", marginBottom:"16px"}}>📊</div>
          <div style={{fontSize:"18px", fontWeight:"700", color:"#c8a84b", marginBottom:"8px"}}>No Data Yet</div>
          <div style={{fontSize:"14px", color:"#8899aa", maxWidth:"300px", margin:"0 auto 24px", lineHeight:"1.6"}}>
            Complete a practice session and your scores, streaks, and module mastery will appear here.
          </div>
          <button style={{...s.btn, ...s.btnGold}} onClick={onHome}>Start Practicing</button>
        </div>
      </div>
    );
  }

  // Aggregate stats
  const totalQ = history.reduce((a,h) => a + h.total, 0);
  const totalCorrect = history.reduce((a,h) => a + h.correct, 0);
  const avgScore = Math.round((totalCorrect / totalQ) * 100);
  const sessions = history.length;
  const best = Math.max(...history.map(h=>h.pct));
  const last5avg = history.slice(-5).length
    ? Math.round(history.slice(-5).reduce((a,h)=>a+h.pct,0) / history.slice(-5).length)
    : 0;
  const trend = history.length >= 2
    ? history[history.length-1].pct - history[history.length-2].pct
    : 0;

  // Streak: consecutive days with at least 1 session
  const daySet = new Set(history.map(h => new Date(h.date).toDateString()));
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 60; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    if (daySet.has(d.toDateString())) streak++;
    else if (i > 0) break;
  }

  // Module mastery from all history
  const modData = MODULES.map(m => {
    const allEntries = history.flatMap(h => h.mods?.filter(md=>md.mod===m.id) || []);
    if (!allEntries.length) return { mod:m, pct:null, correct:0, total:0 };
    const correct = allEntries.reduce((a,e)=>a+e.correct,0);
    const total = allEntries.reduce((a,e)=>a+e.total,0);
    return { mod:m, pct:Math.round((correct/total)*100), correct, total };
  });

  const answered = modData.filter(m=>m.pct!==null);
  const unanswered = modData.filter(m=>m.pct===null);

  // Score trend chart (last 10 sessions)
  const chartData = history.slice(-10);
  const chartMax = 100;
  const chartH = 80;

  return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{fontSize:"28px"}}>⚡</span>
        <div style={{flex:1}}>
          <div style={s.logo}>Progress Dashboard</div>
          <div style={{fontSize:"12px", color:"#8899aa"}}>{sessions} session{sessions!==1?"s":""} tracked</div>
        </div>
        <button style={{...s.btn, ...s.btnGray, padding:"8px 14px", fontSize:"13px"}} onClick={onHome}>Menu</button>
      </div>

      {/* Stat tiles */}
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"1px", background:"#2a3a54", margin:"12px 16px", borderRadius:"12px", overflow:"hidden"}}>
        {[
          { label:"Overall Avg", value:`${avgScore}%`, color: avgScore>=70?"#2ecc71":avgScore>=50?"#c8a84b":"#e74c3c" },
          { label:"Best Score", value:`${best}%`, color:"#c8a84b" },
          { label:"Questions Done", value:totalQ.toLocaleString(), color:"#e8eaf0" },
          { label:"Study Streak", value:`${streak} day${streak!==1?"s":""}`, color:streak>=7?"#2ecc71":streak>=3?"#c8a84b":"#8899aa" },
          { label:"Sessions", value:sessions, color:"#e8eaf0" },
          { label:"Missed Queue", value:missed.length, color:missed.length>0?"#e74c3c":"#2ecc71" },
        ].map(({label,value,color}) => (
          <div key={label} style={{background:"#1a2840", padding:"14px 16px"}}>
            <div style={{fontSize:"22px", fontWeight:"900", color}}>{value}</div>
            <div style={{fontSize:"11px", color:"#8899aa", marginTop:"2px"}}>{label}</div>
          </div>
        ))}
      </div>

      {/* Score trend chart */}
      {chartData.length >= 2 && (
        <div style={s.card}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"12px"}}>
            <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700"}}>SCORE TREND — LAST {chartData.length} SESSIONS</div>
            <div style={{fontSize:"12px", color: trend>0?"#2ecc71":trend<0?"#e74c3c":"#8899aa", fontWeight:"700"}}>
              {trend>0?`▲ +${trend}%`:trend<0?`▼ ${trend}%`:"→ Steady"}
            </div>
          </div>
          <div style={{position:"relative", height:`${chartH+20}px`, padding:"0 4px"}}>
            {/* 70% pass line */}
            <div style={{position:"absolute", left:0, right:0, top:`${chartH - (70/chartMax)*chartH}px`, borderTop:"1px dashed rgba(200,168,75,0.4)", zIndex:1}}>
              <span style={{fontSize:"10px", color:"rgba(200,168,75,0.6)", position:"absolute", right:"2px", top:"-14px"}}>70% pass</span>
            </div>
            {/* Bars */}
            <div style={{display:"flex", gap:"6px", alignItems:"flex-end", height:`${chartH}px`, position:"relative", zIndex:2}}>
              {chartData.map((h,i) => {
                const barH = Math.max(4, (h.pct/chartMax)*chartH);
                const color = h.pct>=70?"#27ae60":h.pct>=50?"#c8a84b":"#e74c3c";
                return (
                  <div key={i} style={{flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:"4px"}}>
                    <div style={{fontSize:"10px", color, fontWeight:"700"}}>{h.pct}%</div>
                    <div style={{width:"100%", height:`${barH}px`, background:color, borderRadius:"3px 3px 0 0", opacity:0.85}}/>
                  </div>
                );
              })}
            </div>
            {/* Date labels */}
            <div style={{display:"flex", gap:"6px", marginTop:"4px"}}>
              {chartData.map((h,i) => (
                <div key={i} style={{flex:1, textAlign:"center", fontSize:"9px", color:"#8899aa"}}>{fmt(h.date)}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recent sessions */}
      <div style={s.card}>
        <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"12px"}}>RECENT SESSIONS</div>
        {history.slice(-8).reverse().map((h, i) => (
          <div key={i} style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:i<7&&i<history.slice(-8).length-1?"1px solid #2a3a54":"none"}}>
            <div>
              <div style={{fontSize:"13px", color:"#e8eaf0", fontWeight:"600"}}>{fmt(h.date)}</div>
              <div style={{fontSize:"11px", color:"#8899aa"}}>{h.total} questions</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontSize:"16px", fontWeight:"800", color:h.pct>=70?"#2ecc71":h.pct>=50?"#c8a84b":"#e74c3c"}}>{h.pct}%</div>
              <div style={{fontSize:"11px", color:h.pct>=70?"#27ae60":"#e74c3c"}}>{h.pct>=70?"PASS":"FAIL"}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Module mastery */}
      <div style={s.card}>
        <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"14px"}}>MODULE MASTERY</div>
        {answered.sort((a,b)=>a.pct-b.pct).map(({mod,pct,correct,total}) => (
          <div key={mod.id} style={{marginBottom:"12px"}}>
            <div style={{display:"flex", justifyContent:"space-between", marginBottom:"4px"}}>
              <span style={{fontSize:"12px", color:"#aabbcc"}}>{mod.name}</span>
              <span style={{fontSize:"12px", fontWeight:"700", color:pct>=70?"#2ecc71":pct>=50?"#c8a84b":"#e74c3c"}}>
                {pct}% <span style={{color:"#8899aa", fontWeight:"400"}}>({correct}/{total})</span>
              </span>
            </div>
            <div style={s.progress}><div style={s.bar(pct)}/></div>
          </div>
        ))}
        {unanswered.length > 0 && (
          <div style={{marginTop:"8px", fontSize:"12px", color:"#8899aa"}}>
            Not yet practiced: {unanswered.map(m=>m.mod.name).join(", ")}
          </div>
        )}
      </div>

      {/* Last session by module */}
      {history.length > 0 && history[history.length-1].mods?.length > 0 && (
        <div style={s.card}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"12px"}}>LAST SESSION BREAKDOWN</div>
          {history[history.length-1].mods.map(m => {
            const mod = MODULES.find(mo=>mo.id===m.mod);
            const pct = Math.round((m.correct/m.total)*100);
            return (
              <div key={m.mod} style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 0", borderBottom:"1px solid #2a3a54"}}>
                <span style={{fontSize:"12px", color:"#aabbcc"}}>{mod?.name||`Mod ${m.mod}`}</span>
                <span style={{fontSize:"13px", fontWeight:"700", color:pct>=70?"#2ecc71":"#e74c3c"}}>{pct}% ({m.correct}/{m.total})</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Last5 avg + suggestions */}
      {history.length >= 3 && (
        <div style={s.card}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"10px"}}>📈 INSIGHTS</div>
          {[
            last5avg >= 75
              ? `Strong recent average (${last5avg}%). You're trending toward exam-ready. Take a full simulation.`
              : last5avg >= 60
              ? `Recent average ${last5avg}% — improving. Focus on your weakest modules for another week before simulating.`
              : `Recent average ${last5avg}%. Slow down and drill one module at a time rather than mixing everything.`,
            missed.length >= 10
              ? `You have ${missed.length} questions in your Missed Questions deck. Clear those before your exam — they represent real gaps.`
              : missed.length > 0
              ? `${missed.length} missed questions queued. Run the Missed Questions deck to clear them.`
              : `No missed questions queued. Keep it up.`,
            streak >= 7
              ? `${streak}-day study streak — excellent consistency. That's the most reliable predictor of passing.`
              : streak >= 3
              ? `${streak}-day streak going. Consistency beats cramming every time.`
              : `Study every day, even if just 20 minutes. Daily exposure builds pattern recognition.`,
          ].map((tip, i) => (
            <div key={i} style={{display:"flex", gap:"10px", marginBottom:"10px", paddingBottom:"10px", borderBottom:i<2?"1px solid #2a3a54":"none"}}>
              <span style={{color:"#c8a84b", flexShrink:0}}>→</span>
              <span style={{fontSize:"13px", color:"#aabbcc", lineHeight:"1.5"}}>{tip}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{padding:"4px 16px 32px", display:"flex", justifyContent:"flex-end"}}>
        <button style={s.btnRed} onClick={clearData}>Clear All Progress Data</button>
      </div>
    </div>
  );
}
