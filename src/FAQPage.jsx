import { useState } from "react";

const s = {
  app: { fontFamily:"'Segoe UI',system-ui,sans-serif", background:"#0f1923", minHeight:"100vh", color:"#e8eaf0" },
  header: { background:"linear-gradient(135deg,#1a2840,#0f1923)", borderBottom:"2px solid #c8a84b", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" },
  logo: { fontSize:"20px", fontWeight:"800", color:"#c8a84b" },
  card: { background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"12px", padding:"20px", margin:"12px 16px" },
  btn: { padding:"10px 20px", borderRadius:"8px", border:"none", cursor:"pointer", fontWeight:"700", fontSize:"14px" },
  btnGold: { background:"linear-gradient(135deg,#c8a84b,#e8c878)", color:"#0f1923" },
  btnGray: { background:"#2a3a54", color:"#8899aa" },
};

const FAQS = [
  {
    category: "About the Exam",
    items: [
      {
        q: "How many questions are on the California General Electrician exam?",
        a: "The California General (Journeyman) Electrician exam has 110 multiple-choice questions. You have 4 hours and 30 minutes to complete it. A passing score is 70% (77 correct answers)."
      },
      {
        q: "Where do I take the exam?",
        a: "The exam is administered by PSI Exams at testing centers throughout California. You can schedule your exam at psiexams.com after obtaining your work experience verification from the California DLSE (Division of Labor Standards Enforcement)."
      },
      {
        q: "What score do I need to pass?",
        a: "70% — you need to answer at least 77 out of 110 questions correctly. The exam does not penalize for wrong answers, so always guess rather than leave a question blank."
      },
      {
        q: "What NEC edition does the California exam use?",
        a: "As of 2023, California adopted the 2020 NEC. The exam tests 2020 NEC content along with California-specific amendments found in Title 24."
      },
      {
        q: "Can I bring a calculator?",
        a: "PSI generally does not allow personal calculators. An on-screen calculator is provided in the testing software. Check your specific exam confirmation for current policies — this can change."
      },
      {
        q: "How long does it take to get my results?",
        a: "PSI exams are computer-based. You receive a pass/fail result immediately at the testing center when you finish. If you pass, your license application proceeds through the CSLB."
      },
    ]
  },
  {
    category: "Eligibility & Requirements",
    items: [
      {
        q: "How much work experience do I need?",
        a: "You need 8,000 hours (approximately 4 years) of electrical work experience to qualify for the General Electrician license. This can include time in an approved apprenticeship program."
      },
      {
        q: "Do I need to complete an apprenticeship?",
        a: "No — an apprenticeship is not required, but it counts toward your 8,000-hour requirement. Many candidates qualify through documented on-the-job experience verified by their employer or union."
      },
      {
        q: "What's the difference between a General Electrician and a Residential Electrician?",
        a: "A General (Journeyman) Electrician can work on all types of electrical systems — commercial, industrial, and residential. A Residential Electrician is limited to single-family dwellings and some light commercial work. The General license requires more experience and a harder exam."
      },
      {
        q: "Can I take the exam if I'm still in an apprenticeship?",
        a: "You can begin the application process but cannot take the exam until your 8,000 hours are verified. Some apprenticeship programs allow early testing when you're close to completing."
      },
    ]
  },
  {
    category: "Studying",
    items: [
      {
        q: "How long should I study before the exam?",
        a: "Most candidates who pass on their first attempt study for 8–12 weeks, spending 45–90 minutes per day. If you're coming straight from the field with no formal training, budget toward 12 weeks. If you completed a JATC apprenticeship, 6–8 weeks may be enough."
      },
      {
        q: "Do I need to memorize the NEC?",
        a: "Yes — the California General Electrician exam is open book. PSI provides an unmarked NEC codebook at the testing center. You cannot bring your own and no personal tabs or notes are permitted. Time is still the real challenge — you cannot look up every answer. Know the most-tested tables cold: 310.16, 250.66, 430.52, and conduit fill, and know the calculation formulas without having to search."
      },
      {
        q: "What modules are most heavily tested?",
        a: "Based on exam patterns, the most heavily tested areas are: Wiring & Materials (Module 3), Branch Circuits & Feeders (Module 4), Services (Module 5), Motors (Module 7), and Grounding & Bonding (Module 6). California-specific rules (Module 11) trip up a lot of candidates who study only the NEC."
      },
      {
        q: "How do I know if I'm ready to take the exam?",
        a: "You're ready when you're consistently scoring 75–80% on full 110-question practice exams. Don't test until you've hit that threshold at least twice. Scoring 70% in practice leaves no margin — exam anxiety costs most people 5–10%."
      },
      {
        q: "What's the best way to use West Coast Wire Pro?",
        a: "Start with the Readiness Diagnostic to find your weak modules. Then use the Study Planner to build a schedule around your exam date. Drill weak modules daily in quiz mode, use the Missed Questions deck to review wrong answers, and run a full Exam Simulation 2 weeks out. Use the NEC Reference and Calculation tools as study aids between quiz sessions."
      },
    ]
  },
  {
    category: "West Coast Wire Pro",
    items: [
      {
        q: "Does West Coast Wire Pro cover California-specific rules?",
        a: "Yes. Module 11 covers California-specific electrical requirements including Title 24 amendments, California OSHA requirements, and state-specific licensing rules. These are separate from the NEC content in other modules."
      },
      {
        q: "Are the questions similar to the real exam?",
        a: "Our questions are original and written to match the format, difficulty, and NEC article distribution of the California journeyman exam. They are not actual PSI exam questions — no prep company has access to those."
      },
      {
        q: "Do I need internet to use the app?",
        a: "The quiz app itself runs entirely in your browser after the initial load. Once loaded, you can use it offline. Your progress is saved locally on your device."
      },
      {
        q: "What's the difference between Standard and Pro access?",
        a: "Standard ($29.99) unlocks all 500 questions across all 12 modules, the full Exam Simulator, Missed Questions Deck, Diagnostic Quiz, NEC Reference, and Calculations tool. Pro ($59.99) adds the Table Mastery flashcard drills (10 NEC tables, 113 cards), the Study Planner, and any future modules or content updates at no additional charge."
      },
      {
        q: "I bought access but the app is locked. What do I do?",
        a: "After purchase, you should be redirected to a success page that unlocks the app automatically. If that didn't happen, use the 'Enter Access Code' link on the paywall screen and enter your access code from your confirmation email. Still stuck? use our contact form."
      },
      {
        q: "Is there a refund policy?",
        a: "Yes. We offer a 7-day refund if you haven't completed more than 50 questions. contact us via our support form with your order details. See our full Refund Policy for terms."
      },
    ]
  },
];

export default function FAQPage({ onHome }) {
  const [expanded, setExpanded] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = FAQS.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      !search || item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <div style={s.app}>
      <div style={s.header}>
        <span style={{fontSize:"28px"}}>⚡</span>
        <div style={{flex:1}}>
          <div style={s.logo}>FAQ</div>
          <div style={{fontSize:"12px", color:"#8899aa"}}>Common questions answered</div>
        </div>
        <button style={{...s.btn, ...s.btnGray, padding:"8px 14px", fontSize:"13px"}} onClick={onHome}>Menu</button>
      </div>

      <div style={{padding:"12px 16px 0"}}>
        <input
          style={{width:"100%", background:"#1a2840", border:"1px solid #2a3a54", borderRadius:"8px", padding:"12px 16px", color:"#e8eaf0", fontSize:"14px", outline:"none", boxSizing:"border-box"}}
          placeholder="Search questions..."
          value={search}
          onChange={e=>setSearch(e.target.value)}
        />
      </div>

      <div style={{padding:"4px 0 32px"}}>
        {filtered.map(cat => (
          <div key={cat.category}>
            <div style={{padding:"16px 16px 6px", fontSize:"11px", color:"#c8a84b", fontWeight:"700", letterSpacing:"0.05em", textTransform:"uppercase"}}>
              {cat.category}
            </div>
            <div style={s.card}>
              {cat.items.map((item, i) => {
                const key = cat.category + i;
                const isOpen = expanded === key;
                return (
                  <div key={i} style={{borderBottom: i<cat.items.length-1?"1px solid #2a3a54":"none", paddingBottom:i<cat.items.length-1?"14px":"0", marginBottom:i<cat.items.length-1?"14px":"0"}}>
                    <div style={{display:"flex", justifyContent:"space-between", gap:"12px", cursor:"pointer", alignItems:"flex-start"}}
                      onClick={()=>setExpanded(isOpen ? null : key)}>
                      <div style={{fontWeight:"700", fontSize:"14px", color:"#e8eaf0", lineHeight:"1.4", flex:1}}>{item.q}</div>
                      <span style={{color:"#c8a84b", fontSize:"18px", fontWeight:"700", flexShrink:0, marginTop:"1px"}}>{isOpen?"−":"+"}</span>
                    </div>
                    {isOpen && (
                      <div style={{marginTop:"10px", fontSize:"14px", color:"#aabbcc", lineHeight:"1.7", paddingLeft:"0"}}>
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{padding:"40px 16px", textAlign:"center", color:"#8899aa"}}>
            No questions match your search.
          </div>
        )}

        <div style={{...s.card, borderColor:"rgba(200,168,75,0.3)", margin:"12px 16px 0", textAlign:"center"}}>
          <div style={{fontSize:"14px", color:"#e8eaf0", fontWeight:"700", marginBottom:"6px"}}>Still have questions?</div>
          <div style={{fontSize:"13px", color:"#8899aa", marginBottom:"12px"}}>We typically respond within 24 hours.</div>
          <a href="#" onClick={e => { e.preventDefault(); onHome && onHome('contact') }}
            style={{...s.btn, ...s.btnGold, textDecoration:"none", display:"inline-block", fontSize:"13px", padding:"10px 20px"}}>
            Use our contact form
          </a>
        </div>
      </div>
    </div>
  );
}
