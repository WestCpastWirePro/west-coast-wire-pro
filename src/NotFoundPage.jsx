const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"32px 16px" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"32px 24px", maxWidth:"480px", width:"100%", textAlign:"center" },
  btn: { padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"15px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
};

export default function NotFoundPage({ onHome, onNavigate }) {
  return (
    <div style={s.app}>
      <div style={s.card}>
        <div style={{fontSize:"72px", marginBottom:"8px"}}>⚡</div>
        <div style={{fontSize:"72px", fontWeight:"900", color:"#c8a84b", lineHeight:1}}>404</div>
        <div style={{fontSize:"20px", fontWeight:"700", color:"#e8eaf0", margin:"12px 0 8px"}}>Page Not Found</div>
        <div style={{fontSize:"14px", color:"#8899aa", lineHeight:"1.6", marginBottom:"24px"}}>
          That URL doesn't exist. The page may have moved, or you may have followed a broken link.
        </div>

        <div style={{display:"flex", gap:"10px", justifyContent:"center", flexWrap:"wrap", marginBottom:"24px"}}>
          <button style={{...s.btn, ...s.btnGold}} onClick={onHome}>Go Home</button>
          <button style={{...s.btn, ...s.btnGray}} onClick={() => onNavigate && onNavigate('app')}>Open App</button>
        </div>

        <div style={{borderTop:"1px solid #2a3a54", paddingTop:"18px"}}>
          <div style={{fontSize:"12px", color:"#8899aa", marginBottom:"10px"}}>Looking for one of these?</div>
          <div style={{display:"flex", flexWrap:"wrap", gap:"8px", justifyContent:"center"}}>
            {[
              ["Demo", "demo"],
              ["FAQ", "faq"],
              ["Exam Guide", "exam-info"],
              ["Study Tips", "study-tips"],
              ["Contact", "contact"],
              ["Restore Access", "redeem"],
            ].map(([label, page]) => (
              <button key={page}
                style={{padding:"6px 12px", borderRadius:"6px", border:"1px solid #2a3a54", background:"transparent", color:"#8899aa", cursor:"pointer", fontSize:"12px", fontWeight:"600"}}
                onClick={() => onNavigate && onNavigate(page)}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
