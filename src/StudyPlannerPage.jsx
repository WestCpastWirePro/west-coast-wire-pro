import { useState, useEffect } from "react";
import { MODULES } from "./WestCoastWirePro.jsx";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"15px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
  btnSm: { padding:"7px 14px", borderRadius:"6px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"12px" },
  input: { width:"100%", background:"#0f1923", border:"1px solid #2a3a54", borderRadius:"8px", padding:"10px 14px", color:"#e8eaf0", fontSize:"14px", outline:"none", boxSizing:"border-box" },
  label: { fontSize:"12px", color:"#8899aa", marginBottom:"4px", display:"block", fontWeight:"600" },
  week: { background:"#0f1923", border:"1px solid #2a3a54", borderRadius:"10px", padding:"14px", marginBottom:"10px" },
  weekDone: { background:"rgba(39,174,96,0.06)", border:"1px solid rgba(39,174,96,0.3)", borderRadius:"10px", padding:"14px", marginBottom:"10px" },
  weekCurrent: { background:"rgba(200,168,75,0.06)", border:"1px solid rgba(200,168,75,0.5)", borderRadius:"10px", padding:"14px", marginBottom:"10px" },
};

const DAILY_MINUTES = { "30":30, "60":60, "90":90, "120":120 };

function buildPlan(examDate, dailyMins, weakMods, access) {
  const today = new Date();
  today.setHours(0,0,0,0);
  const exam = new Date(examDate);
  exam.setHours(0,0,0,0);
  const daysUntil = Math.round((exam - today) / (1000*60*60*24));
  if (daysUntil < 7) return { error: "You need at least 7 days. Select a later date." };
  if (daysUntil > 180) return { error: "Please select an exam date within 6 months." };

  const weeks = Math.floor(daysUntil / 7);
  const plan = [];

  // Allocate: 1 week per module if time allows, else compress
  const mods = [...MODULES];
  const weeklyMinutes = dailyMins * 7;

  // Last 2 weeks: review + full exam simulation
  const studyWeeks = Math.max(1, weeks - 2);
  const modsPerWeek = Math.ceil(mods.length / studyWeeks);

  let modIdx = 0;
  for (let w = 0; w < weeks; w++) {
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() + w * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    const isPast = weekEnd < today;
    const isCurrent = weekStart <= today && today <= weekEnd;
    const isReviewWeek = w >= weeks - 2;
    const isExamWeek = w === weeks - 1;

    const fmt = d => d.toLocaleDateString("en-US", {month:"short", day:"numeric"});

    if (isExamWeek) {
      plan.push({
        week: w+1, label:`Week ${w+1} — EXAM WEEK`, dates:`${fmt(weekStart)} – ${fmt(weekEnd)}`,
        isPast, isCurrent,
        tasks: [
          { day:"Mon–Wed", task:"Light review only — 30 min max. Focus on NEC articles you keep missing.", icon:"📖" },
          { day:"Thursday", task:"Rest day. No studying. Get 8+ hours of sleep.", icon:"😴" },
          { day:"Friday", task:"Review your Exam Day checklist: ID, confirmation number. PSI provides scratch paper and an on-screen calculator — no personal calculator needed.", icon:"✅" },
          { day:"Exam Day", task:"Arrive 30 min early. Read every question twice. Skip and return to hard ones.", icon:"🎯" },
        ]
      });
    } else if (isReviewWeek) {
      const reviewMods = weakMods.length > 0 ? weakMods : [1,2,3,4,5,6,7,8,9,10,11,12];
      plan.push({
        week: w+1, label:`Week ${w+1} — Full Review`, dates:`${fmt(weekStart)} – ${fmt(weekEnd)}`,
        isPast, isCurrent,
        tasks: [
          { day:"Mon–Tue", task:`Run the full 110-question Exam Simulation. Score yourself.`, icon:"📋" },
          { day:"Wed–Thu", task:`Drill Missed Questions deck — hit every wrong answer from this week.`, icon:"🔁" },
          { day:"Fri", task:`Review weak modules: ${reviewMods.slice(0,4).map(id=>MODULES.find(m=>m.id===id)?.name||`Mod ${id}`).join(", ")}`, icon:"⚠️" },
          ...(access==="pro" ? [{ day:"Sat", task:"Table Mastery — run ALL 10 NEC table decks. Any deck under 90% gets drilled twice.", icon:"⚡" }] : []),
          { day:"Sunday", task:`Second full simulation or 50-question timed sprint. Target 75%+.`, icon:"🎯" },
        ]
      });
    } else {
      const weekMods = mods.slice(modIdx, modIdx + modsPerWeek);
      modIdx += modsPerWeek;
      if (!weekMods.length) continue;
      const modNames = weekMods.map(m=>m.name).join(", ");
      const isWeak = weekMods.some(m => weakMods.includes(m.id));

      plan.push({
        week: w+1,
        label: `Week ${w+1}${isWeak?" ⚠️":""}`,
        dates: `${fmt(weekStart)} – ${fmt(weekEnd)}`,
        modules: modNames,
        isPast, isCurrent,
        tasks: [
          { day:"Mon–Tue", task:`Read through ${modNames} NEC articles. Note every article number.`, icon:"📖" },
          { day:"Wed–Thu", task:`Quiz mode: select only ${weekMods.map(m=>`Mod ${m.id}`).join("/")} — do 25 questions each day.`, icon:"❓" },
          { day:"Friday", task:`Review wrong answers. Look up every NEC reference you missed.`, icon:"🔁" },
          { day:"Sat", task:`50-question timed quiz across this week's modules. Target ≥70%.`, icon:"⏱️" },
          ...(access==="pro" ? [{ day:"Sunday", task:"Table Mastery drills — run the NEC tables for this week's modules. Aim for 90%+ on each deck.", icon:"⚡" }] : [{ day:"Sunday", task:"Rest or light review.", icon:"😴" }]),
        ]
      });
    }
  }

  return { plan, daysUntil, weeks, dailyMins };
}

export default function StudyPlannerPage({ onHome, access , onNavigate }) {
  const [examDate, setExamDate] = useState(() => {
    try { return localStorage.getItem("wrp_exam_date") || ""; } catch(e) { return ""; }
  });
  const [dailyMins, setDailyMins] = useState("60");
  const [weakMods, setWeakMods] = useState(() => {
    try {
      const hist = JSON.parse(localStorage.getItem("wrp_history") || "[]");
      if (!hist.length) return [];
      // Find modules with avg score < 70%
      const modScores = {};
      hist.forEach(entry => {
        entry.mods?.forEach(m => {
          if (!modScores[m.mod]) modScores[m.mod] = { correct:0, total:0 };
          modScores[m.mod].correct += m.correct;
          modScores[m.mod].total += m.total;
        });
      });
      return Object.entries(modScores).filter(([,v])=>Math.round((v.correct/v.total)*100)<70).map(([k])=>parseInt(k));
    } catch(e) { return []; }
  });
  const [plan, setPlan] = useState(null);
  const [error, setError] = useState("");
  const [expandedWeek, setExpandedWeek] = useState(null);

  const generate = () => {
    if (!examDate) { setError("Please select your exam date."); return; }
    const result = buildPlan(examDate, parseInt(dailyMins), weakMods);
    if (result.error) { setError(result.error); setPlan(null); return; }
    setError("");
    setPlan(result);
    try { localStorage.setItem("wrp_exam_date", examDate); } catch(e) {}
    // Auto-expand current week
    const curr = result.plan.find(w => w.isCurrent);
    if (curr) setExpandedWeek(curr.week);
    else setExpandedWeek(1);
  };

  const toggleMod = (id) => {
    setWeakMods(w => w.includes(id) ? w.filter(x=>x!==id) : [...w, id]);
  };

  const today = new Date();
  const minDate = new Date(today); minDate.setDate(today.getDate() + 7);
  const maxDate = new Date(today); maxDate.setDate(today.getDate() + 180);
  const toISO = d => d.toISOString().split("T")[0];

  if (access === 'free') {
    const daysLeft = examDate ? Math.ceil((new Date(examDate) - new Date()) / (1000 * 60 * 60 * 24)) : null;
    return (
    <div style={s.app}>
      <div style={{...s.header}}>
        <span style={{fontSize:'24px'}}>📅</span>
        <div style={{flex:1}}>
          <div style={s.logo}>Study Planner</div>
          <div style={{fontSize:'11px', color:'#8899aa'}}>Set your exam date</div>
        </div>
        <button style={{...s.btn, ...s.btnGray, padding:'6px 12px', fontSize:'12px'}} onClick={onHome}>← Back</button>
      </div>
      <div style={{padding:'16px'}}>
        <div style={{...s.card, marginBottom:'16px'}}>
          <div style={{fontSize:'13px', fontWeight:'700', color:'#c8a84b', marginBottom:'12px', textTransform:'uppercase', letterSpacing:'0.5px'}}>📅 When is your exam?</div>
          <input type="date" value={examDate} onChange={e => { setExamDate(e.target.value); try { localStorage.setItem('wrp_exam_date', e.target.value); } catch(e) {} }}
            min={toISO(minDate)} max={toISO(maxDate)}
            style={{width:'100%', background:'#0a1016', border:'1px solid rgba(200,168,75,0.3)', borderRadius:'6px', color:'#e8eaf0', fontSize:'15px', padding:'10px 12px', boxSizing:'border-box'}} />
          {daysLeft && daysLeft > 0 && (
            <div style={{marginTop:'12px', textAlign:'center', padding:'14px', background:'rgba(200,168,75,0.06)', borderRadius:'8px', border:'1px solid rgba(200,168,75,0.2)'}}>
              <div style={{fontSize:'36px', fontWeight:'900', color:'#c8a84b', fontFamily:"'Arial Black',Arial,sans-serif", lineHeight:1}}>{daysLeft}</div>
              <div style={{fontSize:'12px', color:'#8899aa', marginTop:'4px'}}>days until your exam</div>
              <div style={{fontSize:'12px', color:'#7a8a9a', marginTop:'8px', lineHeight:'1.6'}}>
                {daysLeft <= 14 ? '⚠️ Final stretch — run full exam simulations now.' :
                 daysLeft <= 30 ? '📊 One month out — focus on your weak modules.' :
                 daysLeft <= 60 ? '📚 Good runway — build your base now while you have time.' :
                 '✅ Plenty of time — steady daily study beats cramming every time.'}
              </div>
            </div>
          )}
        </div>
        <div style={{...s.card, background:'rgba(200,168,75,0.04)', borderColor:'rgba(200,168,75,0.2)'}}>
          <div style={{fontSize:'12px', fontWeight:'700', color:'#c8a84b', marginBottom:'8px'}}>🔓 Upgrade for the full Study Planner</div>
          <div style={{fontSize:'12px', color:'#8899aa', lineHeight:'1.7', marginBottom:'16px'}}>
            Standard and Pro unlock a custom week-by-week schedule built around your weak modules, your exam date, and how much time you have each day.
          </div>
          <button onClick={() => onNavigate && onNavigate('landing')}
            style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black',Arial,sans-serif", fontWeight:'900', fontSize:'13px', textTransform:'uppercase', border:'none', borderRadius:'6px', padding:'12px 20px', cursor:'pointer', width:'100%'}}>
            View Plans →
          </button>
        </div>
      </div>
    </div>
  );
  }

  return (
    <div style={s.app}>

      <div style={{padding:"12px 0"}}>
        <div style={s.card}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"14px"}}>📅 BUILD YOUR PLAN</div>
          <div style={{marginBottom:"12px"}}>
            <label style={s.label}>Exam Date</label>
            <input style={s.input} type="date" value={examDate} min={toISO(minDate)} max={toISO(maxDate)}
              onChange={e=>setExamDate(e.target.value)}/>
          </div>
          <div style={{marginBottom:"12px"}}>
            <label style={s.label}>Daily Study Time</label>
            <div style={{display:"flex", gap:"8px", flexWrap:"wrap"}}>
              {[["30","30 min"],["60","1 hour"],["90","90 min"],["120","2 hours"]].map(([v,l]) => (
                <button key={v} style={{...s.btnSm, background:dailyMins===v?"#c8a84b":"#2a3a54", color:dailyMins===v?"#0f1923":"#8899aa"}}
                  onClick={()=>setDailyMins(v)}>{l}</button>
              ))}
            </div>
          </div>
          <div style={{marginBottom:"14px"}}>
            <label style={s.label}>Weak Modules (optional — tap to mark)</label>
            <div style={{display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"6px"}}>
              {MODULES.map(m => (
                <button key={m.id}
                  style={{...s.btnSm, background:weakMods.includes(m.id)?"rgba(231,76,60,0.2)":"#2a3a54",
                    color:weakMods.includes(m.id)?"#e74c3c":"#8899aa",
                    border:weakMods.includes(m.id)?"1px solid #e74c3c":"1px solid transparent"}}
                  onClick={()=>toggleMod(m.id)}>
                  {weakMods.includes(m.id)?"⚠️ ":""}{m.name.split(" ").slice(0,2).join(" ")}
                </button>
              ))}
            </div>
            {weakMods.length > 0 && (
              <div style={{fontSize:"11px", color:"#8899aa", marginTop:"6px"}}>
                These modules get extra review time in your plan.
              </div>
            )}
          </div>
          {error && <div style={{fontSize:"13px", color:"#e74c3c", marginBottom:"10px"}}>⚠️ {error}</div>}
          <button style={{...s.btn, ...s.btnGold, width:"100%"}} onClick={generate}>
            Generate My Study Plan →
          </button>
        </div>

        {plan && (
          <>
            <div style={{...s.card, borderColor:"#c8a84b", background:"rgba(200,168,75,0.05)", textAlign:"center"}}>
              <div style={{fontSize:"28px", fontWeight:"900", color:"#c8a84b"}}>{plan.daysUntil} days</div>
              <div style={{fontSize:"13px", color:"#8899aa"}}>until your exam — {plan.weeks} week{plan.weeks!==1?"s":""} of study time</div>
              <div style={{fontSize:"12px", color:"#8899aa", marginTop:"4px"}}>{plan.dailyMins} min/day = {Math.round(plan.dailyMins * plan.daysUntil / 60)} total hours</div>
            </div>

            <div style={{padding:"0 16px"}}>
              <div style={{fontSize:"12px", color:"#8899aa", marginBottom:"8px"}}>TAP A WEEK TO EXPAND</div>
              {plan.plan.map(week => {
                const isExpanded = expandedWeek === week.week;
                const weekStyle = week.isCurrent ? s.weekCurrent : week.isPast ? {...s.week, opacity:0.6} : s.week;
                return (
                  <div key={week.week} style={weekStyle}>
                    <div style={{display:"flex", justifyContent:"space-between", cursor:"pointer", alignItems:"flex-start"}}
                      onClick={()=>setExpandedWeek(isExpanded ? null : week.week)}>
                      <div>
                        <div style={{fontWeight:"700", fontSize:"14px", color: week.isCurrent?"#c8a84b":"#e8eaf0"}}>
                          {week.isCurrent ? "▶ " : ""}{week.label}
                        </div>
                        <div style={{fontSize:"11px", color:"#8899aa", marginTop:"2px"}}>{week.dates}</div>
                        {week.modules && <div style={{fontSize:"11px", color:"#aabbcc", marginTop:"2px"}}>📚 {week.modules}</div>}
                      </div>
                      <span style={{color:"#c8a84b", fontSize:"16px"}}>{isExpanded?"▲":"▼"}</span>
                    </div>
                    {isExpanded && (
                      <div style={{marginTop:"12px", paddingTop:"12px", borderTop:"1px solid #2a3a54"}}>
                        {week.tasks.map((task, i) => (
                          <div key={i} style={{display:"flex", gap:"10px", marginBottom:"10px", alignItems:"flex-start"}}>
                            <span style={{fontSize:"18px"}}>{task.icon}</span>
                            <div>
                              <div style={{fontSize:"11px", color:"#c8a84b", fontWeight:"700", marginBottom:"2px"}}>{task.day}</div>
                              <div style={{fontSize:"13px", color:"#aabbcc", lineHeight:"1.5"}}>{task.task}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{...s.card, borderColor:"rgba(200,168,75,0.3)"}}>
              <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"8px"}}>📌 General Rules</div>
              {[
                "Never cram. 45–60 focused minutes beats 3 hours of distracted reading every time.",
                "Take a full exam simulation at least 2 weeks before your test date.",
                "If you're scoring under 65%, postpone your exam date — it's free to reschedule early.",
                "The Missed Questions deck is your best recovery tool. Use it every week.",
              ].map((tip, i) => (
                <div key={i} style={{fontSize:"13px", color:"#aabbcc", padding:"6px 0", borderBottom:i<3?"1px solid #2a3a54":"none", lineHeight:"1.5"}}>
                  {i+1}. {tip}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
