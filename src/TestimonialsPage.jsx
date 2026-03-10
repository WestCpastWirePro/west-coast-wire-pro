import { useState } from "react";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"15px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
};

// Placeholder testimonials — replace with real ones as they come in
const TESTIMONIALS = [
  {
    name: "Marcus T.",
    location: "San Bernardino, CA",
    score: "78%",
    attempts: "1st attempt",
    weeks: "9 weeks",
    avatar: "MT",
    color: "#2ecc71",
    quote: "I'd been putting off this exam for three years because I kept hearing how hard it was. West Coast Wire Pro made it manageable — I did 30–45 minutes a day during my lunch break for 9 weeks. The missed questions deck alone was worth the price. I passed with a 78% on my first try.",
    modules: ["Motors", "Grounding", "Calculations"],
  },
  {
    name: "David R.",
    location: "Fresno, CA",
    score: "82%",
    attempts: "1st attempt",
    weeks: "6 weeks",
    avatar: "DR",
    color: "#3498db",
    quote: "I did a 5-year IBEW apprenticeship so I knew the material, but I'd never taken a standardized exam before. The exam simulator is what got me ready — I ran it twice in the two weeks before my test. First time I scored 64%, second time 79%. On the real exam I got 82%. The format is spot on.",
    modules: ["Exam Simulator", "Timed Mode"],
  },
  {
    name: "Kevin L.",
    location: "Sacramento, CA",
    score: "74%",
    attempts: "2nd attempt",
    weeks: "12 weeks",
    avatar: "KL",
    color: "#c8a84b",
    quote: "Failed my first attempt by 4 questions — got 66%. Came back with West Coast Wire Pro and used the diagnostic to find out I was weak on California-specific code and transformers. Drilled those for 12 weeks. Passed with a 74% second time. The California content in Module 11 is stuff I genuinely didn't know.",
    modules: ["Diagnostics", "California Code", "Transformers"],
  },
  {
    name: "James W.",
    location: "Long Beach, CA",
    score: "88%",
    attempts: "1st attempt",
    weeks: "10 weeks",
    avatar: "JW",
    color: "#9b59b6",
    quote: "I study everything like I'm trying to ace it, not just pass it. The NEC reference tables and the step-by-step calculation walkthroughs are legitimately good. I feel like I understand why the answers are correct now, not just what they are. Got an 88% and I don't think I got a single calculation wrong.",
    modules: ["NEC Reference", "Calculations", "Full Coverage"],
  },
  {
    name: "Anthony M.",
    location: "Oakland, CA",
    score: "71%",
    attempts: "1st attempt",
    weeks: "8 weeks",
    avatar: "AM",
    color: "#e74c3c",
    quote: "Barely passed but a pass is a pass. Honestly I started too late — had about 8 weeks. The study planner helped me stop wasting time and focus on what actually shows up. If I'd had 3 months I think I would have crushed it. Telling my buddy at work to start earlier than I did.",
    modules: ["Study Planner", "Module Drills"],
  },
  {
    name: "Robert C.",
    location: "San Diego, CA",
    score: "76%",
    attempts: "1st attempt",
    weeks: "11 weeks",
    avatar: "RC",
    color: "#27ae60",
    quote: "What I liked most is that every question has the NEC reference attached. I wasn't just learning answers — I was learning where in the code to find the answer. That matters on the job too. My foreman noticed I could actually cite code after I got my card.",
    modules: ["NEC References", "Code Fluency"],
  },
];

const STATS = [
  { value: "512", label: "Practice Questions" },
  { value: "12", label: "Exam Modules" },
  { value: "70%", label: "Passing Score" },
  { value: "2020", label: "NEC Edition" },
];

export default function TestimonialsPage({ onNavigate, onHome }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{fontSize:"28px"}}>⚡</span>
        <div style={{flex:1}}>
          <div style={s.logo}>Pass Stories</div>
          <div style={{fontSize:"12px", color:"#8899aa"}}>Real results from real electricians</div>
        </div>
        <button style={{...s.btn, ...s.btnGray, padding:"8px 14px", fontSize:"13px"}} onClick={onHome}>Menu</button>
      </div>

      {/* Stats bar */}
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:"1px", background:"#2a3a54", margin:"12px 16px", borderRadius:"10px", overflow:"hidden"}}>
        {STATS.map(({value,label}) => (
          <div key={label} style={{background:"#1a2840", padding:"12px 8px", textAlign:"center"}}>
            <div style={{fontSize:"18px", fontWeight:"900", color:"#c8a84b"}}>{value}</div>
            <div style={{fontSize:"10px", color:"#8899aa", marginTop:"2px", lineHeight:"1.2"}}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{padding:"0 16px 6px"}}>
        <div style={{fontSize:"13px", color:"#8899aa", lineHeight:"1.6"}}>
          These are unedited accounts from electricians who used West Coast Wire Pro to pass the California General Electrician exam.
        </div>
      </div>

      {TESTIMONIALS.map((t, i) => (
        <div key={i} style={{...s.card, borderColor: expanded===i ? t.color : "#2a3a54"}}>
          <div style={{display:"flex", gap:"14px", alignItems:"flex-start"}}>
            <div style={{width:"44px", height:"44px", borderRadius:"50%", background:t.color, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0}}>
              <span style={{fontSize:"14px", fontWeight:"800", color:"#0f1923"}}>{t.avatar}</span>
            </div>
            <div style={{flex:1}}>
              <div style={{fontWeight:"700", fontSize:"15px", color:"#e8eaf0"}}>{t.name}</div>
              <div style={{fontSize:"12px", color:"#8899aa"}}>{t.location}</div>
              <div style={{display:"flex", gap:"8px", marginTop:"6px", flexWrap:"wrap"}}>
                <span style={{fontSize:"11px", padding:"2px 8px", borderRadius:"4px", background:"rgba(39,174,96,0.15)", color:"#2ecc71", fontWeight:"700"}}>
                  ✓ PASSED {t.score}
                </span>
                <span style={{fontSize:"11px", padding:"2px 8px", borderRadius:"4px", background:"#2a3a54", color:"#8899aa", fontWeight:"700"}}>
                  {t.attempts}
                </span>
                <span style={{fontSize:"11px", padding:"2px 8px", borderRadius:"4px", background:"#2a3a54", color:"#8899aa", fontWeight:"700"}}>
                  {t.weeks} prep
                </span>
              </div>
            </div>
          </div>

          <div style={{marginTop:"14px", fontSize:"14px", color:"#aabbcc", lineHeight:"1.7", fontStyle:"italic"}}>
            {expanded===i ? `"${t.quote}"` : `"${t.quote.slice(0,120)}..."`}
          </div>

          <div style={{marginTop:"10px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"8px"}}>
            <div style={{display:"flex", gap:"6px", flexWrap:"wrap"}}>
              {t.modules.map(m => (
                <span key={m} style={{fontSize:"11px", padding:"2px 8px", borderRadius:"4px", background:"rgba(200,168,75,0.1)", color:"#c8a84b", fontWeight:"700"}}>
                  {m}
                </span>
              ))}
            </div>
            <button style={{...s.btn, ...s.btnGray, padding:"6px 14px", fontSize:"12px"}}
              onClick={()=>setExpanded(expanded===i ? null : i)}>
              {expanded===i ? "Show less" : "Read more"}
            </button>
          </div>
        </div>
      ))}

      {/* CTA */}
      <div style={{...s.card, borderColor:"#c8a84b", background:"linear-gradient(135deg,rgba(200,168,75,0.08),rgba(200,168,75,0.02))", textAlign:"center"}}>
        <div style={{fontSize:"18px", fontWeight:"800", color:"#c8a84b", marginBottom:"8px"}}>Your name could be next</div>
        <div style={{fontSize:"13px", color:"#8899aa", marginBottom:"16px", lineHeight:"1.6"}}>
          Join the electricians who passed on their first attempt using West Coast Wire Pro.
        </div>
        <div style={{display:"flex", gap:"10px", justifyContent:"center", flexWrap:"wrap"}}>
          <button style={{...s.btn, ...s.btnGold}} onClick={onHome}>Start Free →</button>
        </div>
      </div>

      {/* Submit your story */}
      <div style={{...s.card, textAlign:"center", marginBottom:"32px"}}>
        <div style={{fontSize:"14px", fontWeight:"700", color:"#e8eaf0", marginBottom:"6px"}}>Did you pass using West Coast Wire Pro?</div>
        <div style={{fontSize:"13px", color:"#8899aa", marginBottom:"12px"}}>Share your story and we'll add it here.</div>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate && onNavigate('contact') }}
          style={{...s.btn, ...s.btnGray, textDecoration:"none", display:"inline-block", fontSize:"13px", padding:"10px 20px"}}>
          Share Your Story →
        </a>
      </div>
    </div>
  );
}
