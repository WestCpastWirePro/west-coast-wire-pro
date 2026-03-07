import { useState } from "react";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"10px 20px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"14px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
  section: { fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"12px", letterSpacing:"0.03em" },
  check: { display:"flex", gap:"10px", alignItems:"flex-start", marginBottom:"10px" },
  checkText: { fontSize:"13px", color:"#aabbcc", lineHeight:"1.5" },
  warn: { background:"rgba(231,76,60,0.08)", border:"1px solid rgba(231,76,60,0.3)", borderRadius:"8px", padding:"12px 14px", margin:"0 16px 12px", fontSize:"13px", color:"#e74c3c", lineHeight:"1.5" },
  tip: { background:"rgba(200,168,75,0.06)", border:"1px solid rgba(200,168,75,0.25)", borderRadius:"8px", padding:"12px 14px", margin:"0 16px 12px", fontSize:"13px", color:"#c8a84b", lineHeight:"1.5" },
};

const SECTIONS = [
  {
    title: "📋 What to Bring",
    content: [
      { type:"check", text:"Two valid, unexpired, government-issued photo IDs (driver's license + one more). The names must match exactly." },
      { type:"check", text:"Your ATT (Authorization to Test) letter or email from the DLSE — either printed or on your phone." },
      { type:"check", text:"Confirmation number from PSI — you'll need it at check-in." },
      { type:"warn", text:"Do NOT bring: calculators, phones (must be off and stored), study materials, food or drink, smartwatches, or any electronic devices. PSI provides a whiteboard or scratch paper — ask for it at check-in." },
    ]
  },
  {
    title: "🏢 At the Testing Center",
    content: [
      { type:"check", text:"Arrive at least 30 minutes early. Late arrivals may be turned away with no refund." },
      { type:"check", text:"You'll be photographed and asked to sign in. Your palm vein or fingerprint may be scanned." },
      { type:"check", text:"All personal items — including your phone, keys, and wallet — go into a locker. You'll carry only your ID into the testing room." },
      { type:"check", text:"You'll be escorted to a testing workstation. Raise your hand if you have any technical issues — don't try to fix the computer yourself." },
      { type:"tip", text:"Tip: Before starting the timed exam, take a few minutes to review any tutorial screens PSI provides. They don't count against your time." },
    ]
  },
  {
    title: "💻 The PSI Exam Interface",
    content: [
      { type:"check", text:"110 multiple-choice questions, one at a time. 4 answer choices per question." },
      { type:"check", text:"You can flag any question and return to it before submitting. Use this — don't waste time stuck on a hard question." },
      { type:"check", text:"A timer counts down in the upper corner. You have 4 hours 30 minutes total." },
      { type:"check", text:"There is an on-screen calculator available — find it in the toolbar before you need it." },
      { type:"check", text:"At the end, you'll see a summary showing answered and flagged questions before final submission. Review everything here." },
      { type:"tip", text:"Tip: Don't change answers unless you're certain. Your first instinct is usually correct. Only change if you have a specific reason — second-guessing kills more people than wrong first guesses." },
    ]
  },
  {
    title: "🧠 Strategy During the Exam",
    content: [
      { type:"check", text:"Read every question twice before looking at answers. The wording matters — 'required,' 'permitted,' 'shall,' and 'shall not' mean very different things in the NEC." },
      { type:"check", text:"Eliminate wrong answers first. You can often cut it to 2 choices immediately." },
      { type:"check", text:"For calculation questions: write out every step on your scratch paper. Don't do it in your head." },
      { type:"check", text:"If you genuinely don't know, guess and move on. Never leave a blank — there's no penalty for wrong answers." },
      { type:"check", text:"Flag questions you're unsure about. Come back with fresh eyes after completing the rest." },
      { type:"warn", text:"Watch for 'EXCEPT' and 'NOT' questions — they're easy to misread under pressure. Circle or underline those words on your scratch paper." },
    ]
  },
  {
    title: "📊 Your Score",
    content: [
      { type:"check", text:"You receive a pass/fail result immediately on screen when you submit." },
      { type:"check", text:"Passing score is 70% (77 out of 110 correct)." },
      { type:"check", text:"If you pass: PSI will provide a score report. Your results go to the DLSE, and you'll receive your official license documentation by mail." },
      { type:"check", text:"If you fail: You'll receive a diagnostic report showing which topic areas you were weakest in. You can retake after a waiting period — check your state authorization for current rules." },
      { type:"tip", text:"Tip: If you fail, don't reschedule immediately. Study the diagnostic report. Most people who fail did so in 2–3 specific areas, not across the board." },
    ]
  },
  {
    title: "😴 The Week Before",
    content: [
      { type:"check", text:"Do your hardest studying on Monday and Tuesday. Taper off Wednesday and Thursday." },
      { type:"check", text:"Thursday before exam: light review only. No new material. Max 30 minutes." },
      { type:"check", text:"The night before: no studying. Eat a normal dinner. Sleep by 10pm. Sleep is worth more than cramming at this point." },
      { type:"check", text:"Exam morning: eat breakfast. Seriously. Hunger impairs recall significantly." },
      { type:"check", text:"Drive to the testing center location the day before if you've never been there. Don't discover traffic or parking problems on exam day." },
      { type:"tip", text:"Tip: You cannot 'top off' knowledge the night before a 110-question code exam. Your brain needs sleep to consolidate what you've been learning. Trust your preparation." },
    ]
  },
];

export default function ExamDayPage({ onHome, onNavigate }) {
  const [open, setOpen] = useState(0);

  return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{fontSize:"28px"}}>⚡</span>
        <div style={{flex:1}}>
          <div style={s.logo}>Exam Day Guide</div>
          <div style={{fontSize:"12px", color:"#8899aa"}}>What to expect at the PSI testing center</div>
        </div>
        <button style={{...s.btn, ...s.btnGray, padding:"8px 14px", fontSize:"13px"}} onClick={onHome}>Menu</button>
      </div>

      {/* Countdown banner if exam date is set */}
      <ExamCountdown />

      <div style={{padding:"4px 0 8px"}}>
        <div style={{padding:"0 16px 4px", fontSize:"13px", color:"#8899aa", lineHeight:"1.5"}}>
          Everything you need to know about the day itself — logistics, the PSI interface, strategy, and what happens after.
        </div>
      </div>

      {SECTIONS.map((section, i) => (
        <div key={i}>
          <div style={{...s.card, cursor:"pointer", borderColor:open===i?"rgba(200,168,75,0.5)":"#2a3a54"}}
            onClick={()=>setOpen(open===i?-1:i)}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div style={{fontWeight:"700", fontSize:"15px", color:open===i?"#c8a84b":"#e8eaf0"}}>{section.title}</div>
              <span style={{color:"#c8a84b", fontSize:"18px", fontWeight:"700"}}>{open===i?"▲":"▼"}</span>
            </div>
            {open===i && (
              <div style={{marginTop:"14px", paddingTop:"14px", borderTop:"1px solid #2a3a54"}}>
                {section.content.map((item, j) => {
                  if (item.type === "warn") return <div key={j} style={{...s.warn, margin:"8px 0"}}><strong>⚠️ </strong>{item.text}</div>;
                  if (item.type === "tip") return <div key={j} style={{...s.tip, margin:"8px 0"}}>💡 {item.text}</div>;
                  return (
                    <div key={j} style={s.check}>
                      <span style={{color:"#27ae60", fontWeight:"700", flexShrink:0, marginTop:"1px"}}>✓</span>
                      <span style={s.checkText}>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Quick reference card */}
      <div style={{...s.card, borderColor:"#c8a84b", background:"rgba(200,168,75,0.04)", margin:"12px 16px 32px"}}>
        <div style={{...s.section, marginBottom:"14px"}}>📌 QUICK REFERENCE — DAY OF</div>
        {[
          ["Time allowed", "4 hours 30 minutes"],
          ["Questions", "110 multiple choice"],
          ["Passing score", "70% (77/110)"],
          ["Result", "Immediate on screen"],
          ["Calculator", "On-screen only (provided)"],
          ["Arrive", "30 min early minimum"],
          ["IDs needed", "2 government-issued photo IDs"],
        ].map(([k,v]) => (
          <div key={k} style={{display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom:"1px solid #2a3a54", fontSize:"13px"}}>
            <span style={{color:"#8899aa"}}>{k}</span>
            <span style={{color:"#e8eaf0", fontWeight:"600"}}>{v}</span>
          </div>
        ))}
        <div style={{marginTop:"14px"}}>
          <button style={{...s.btn, ...s.btnGold, width:"100%"}} onClick={() => onNavigate && onNavigate('simulator')}>
            Take a Full Practice Exam →
          </button>
        </div>
      </div>
    </div>
  );
}

function ExamCountdown() {
  let examDate, daysLeft;
  try {
    examDate = localStorage.getItem("wrp_exam_date");
    if (examDate) {
      const diff = new Date(examDate) - new Date();
      daysLeft = Math.ceil(diff / (1000*60*60*24));
    }
  } catch(e) {}

  if (!examDate || daysLeft === undefined || daysLeft < 0) return null;

  return (
    <div style={{margin:"12px 16px 0", background:"rgba(200,168,75,0.08)", border:"1px solid rgba(200,168,75,0.35)", borderRadius:"10px", padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <div style={{fontSize:"13px", color:"#8899aa"}}>Your exam date</div>
      <div style={{fontSize:"16px", fontWeight:"800", color:"#c8a84b"}}>
        {daysLeft === 0 ? "Today! 🎯" : daysLeft === 1 ? "Tomorrow ⚡" : `${daysLeft} days away`}
      </div>
    </div>
  );
}
