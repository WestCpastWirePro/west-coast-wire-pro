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

const STATS = [
  { value: "462", label: "Practice Questions" },
  { value: "11", label: "Exam Modules" },
  { value: "70%", label: "Passing Score" },
  { value: "2020", label: "NEC Edition" },
];

export default function TestimonialsPage({ onNavigate, onHome }) {

  return (
    <div style={s.app}>
      <div style={{padding:"12px 16px", borderBottom:"1px solid #2a3a54", display:"flex", alignItems:"center", gap:"12px"}}>
        <button onClick={() => onHome && onHome()} style={{background:"none", border:"1px solid rgba(200,168,75,0.3)", color:"#c8a84b", fontSize:"12px", fontWeight:"700", textTransform:"uppercase", padding:"6px 12px", borderRadius:"4px", cursor:"pointer"}}>← Home</button>
        <span style={{fontSize:"13px", color:"#4a5a6a"}}>West Coast Wire Pro</span>
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

      {/* Coming soon card */}
      <div style={{...s.card, borderColor:"#c8a84b", textAlign:"center", margin:"24px 16px"}}>
        <div style={{fontSize:"40px", marginBottom:"16px"}}>⚡</div>
        <div style={{fontSize:"20px", fontWeight:"800", color:"#c8a84b", marginBottom:"10px"}}>Pass Stories Coming Soon</div>
        <div style={{fontSize:"14px", color:"#aabbcc", lineHeight:"1.7", marginBottom:"20px"}}>
          West Coast Wire Pro launched recently and our first students are actively preparing for their California Journeyman exam.
          As they pass, their stories will appear here — unedited, real accounts from working electricians.
        </div>
        <div style={{background:"rgba(200,168,75,0.08)", border:"1px solid rgba(200,168,75,0.25)", borderRadius:"8px", padding:"16px", marginBottom:"20px"}}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"6px"}}>Did You Pass Using West Coast Wire Pro?</div>
          <div style={{fontSize:"13px", color:"#8899aa", marginBottom:"12px"}}>
            Share your score and how you studied. We'll add your story here.
          </div>
          <button style={{...s.btn, ...s.btnGold, fontSize:"13px", padding:"10px 24px"}}
            onClick={() => onNavigate && onNavigate('contact')}>
            Share Your Story →
          </button>
        </div>
      </div>

      {/* Start CTA */}
      <div style={{...s.card, background:"linear-gradient(135deg,rgba(200,168,75,0.08),rgba(200,168,75,0.02))", textAlign:"center", marginBottom:"32px"}}>
        <div style={{fontSize:"16px", fontWeight:"800", color:"#c8a84b", marginBottom:"8px"}}>Start Studying — Free</div>
        <div style={{fontSize:"13px", color:"#8899aa", marginBottom:"16px", lineHeight:"1.6"}}>
          Modules 1 & 2 free. No account needed. 462 questions, all 11 modules, NEC 2020.
        </div>
        <button style={{...s.btn, ...s.btnGold}} onClick={onHome}>Start Free →</button>
      </div>
    </div>
  );
}
