const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"12px 24px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"15px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
};

export default function ContactPage({ onHome, onNavigate }) {
  return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{fontSize:"28px"}}>⚡</span>
        <div style={{flex:1}}>
          <div style={s.logo}>Contact & Support</div>
          <div style={{fontSize:"12px", color:"#8899aa"}}>West Coast Wire Pro Training</div>
        </div>
        <button style={{...s.btn, ...s.btnGray, padding:"8px 14px", fontSize:"13px"}} onClick={onHome}>Back</button>
      </div>

      <div style={{padding:"12px 0 32px"}}>

        {/* Primary contact */}
        <div style={{...s.card, borderColor:"#c8a84b", background:"linear-gradient(135deg,rgba(200,168,75,0.07),rgba(200,168,75,0.02))"}}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"12px"}}>📧 GET IN TOUCH</div>
          <div style={{fontSize:"14px", color:"#aabbcc", lineHeight:"1.7", marginBottom:"16px"}}>
            For any questions about your purchase, access codes, technical issues, refunds, or anything else — email us directly. We typically respond within 24 hours, Monday–Friday.
          </div>
          <a href="mailto:wirereadypro@gmail.com"
            style={{...s.btn, ...s.btnGold, display:"inline-block", textDecoration:"none", fontSize:"14px"}}>
            wirereadypro@gmail.com
          </a>
        </div>

        {/* Common issues */}
        <div style={s.card}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"14px"}}>🔧 COMMON ISSUES — QUICK FIXES</div>

          {[
            {
              title: "App is locked after purchase",
              steps: [
                "Check your email for a confirmation from Stripe with your access code.",
                "Go to the app and tap 'Enter Access Code →' on the paywall screen.",
                "Enter the code exactly as shown — it's formatted XXXX-XXXX-XXXX.",
                "Still not working? Email us with your order confirmation and we'll fix it within 24 hours.",
              ]
            },
            {
              title: "I can't find my access code email",
              steps: [
                "Check your spam/junk folder — Stripe confirmation emails sometimes land there.",
                "Search your inbox for 'West Coast Wire Pro' or 'receipt' from around the time you purchased.",
                "If you still can't find it, email us with the email address you used to purchase and we'll resend it.",
              ]
            },
            {
              title: "My progress was lost / app reset",
              steps: [
                "Progress is saved in your browser's local storage. It can be cleared if you clear your browser history or switch browsers.",
                "To avoid this, always use the same browser on the same device.",
                "Your access code is permanent — re-enter it in the redeem screen and your access is restored instantly.",
              ]
            },
            {
              title: "I want a refund",
              steps: [
                "We offer a 7-day refund if you've answered fewer than 50 questions.",
                "Email wirereadypro@gmail.com with your order number or the email you used to purchase.",
                "See our full Refund Policy for complete terms.",
              ]
            },
          ].map((issue, i) => (
            <div key={i} style={{marginBottom:"18px", paddingBottom:"18px", borderBottom:i<3?"1px solid #2a3a54":"none"}}>
              <div style={{fontWeight:"700", fontSize:"14px", color:"#e8eaf0", marginBottom:"8px"}}>
                {issue.title}
              </div>
              {issue.steps.map((step, j) => (
                <div key={j} style={{display:"flex", gap:"10px", marginBottom:"6px"}}>
                  <span style={{color:"#c8a84b", fontWeight:"700", fontSize:"13px", flexShrink:0}}>{j+1}.</span>
                  <span style={{fontSize:"13px", color:"#aabbcc", lineHeight:"1.5"}}>{step}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Business info */}
        <div style={s.card}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"10px"}}>🏢 BUSINESS INFORMATION</div>
          {[
            ["Business Name", "West Coast Wire Pro Training"],
            ["Email", "wirereadypro@gmail.com"],
            ["Product", "West Coast Wire Pro — California Electrician Exam Prep"],
            ["Response Time", "Within 24 hours, Monday–Friday"],
          ].map(([label, val]) => (
            <div key={label} style={{display:"flex", gap:"12px", marginBottom:"8px", fontSize:"13px"}}>
              <span style={{color:"#8899aa", minWidth:"120px", flexShrink:0}}>{label}:</span>
              <span style={{color:"#e8eaf0"}}>{val}</span>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div style={s.card}>
          <div style={{fontSize:"13px", color:"#c8a84b", fontWeight:"700", marginBottom:"12px"}}>🔗 HELPFUL LINKS</div>
          <div style={{display:"flex", flexWrap:"wrap", gap:"8px"}}>
            {[
              ["FAQ", "faq"],
              ["Refund Policy", "refund"],
              ["Redeem Access Code", "redeem"],
              ["Privacy Policy", "privacy"],
              ["Terms of Service", "terms"],
            ].map(([label, page]) => (
              <button key={page}
                style={{...s.btn, ...s.btnGray, padding:"8px 16px", fontSize:"13px"}}
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
