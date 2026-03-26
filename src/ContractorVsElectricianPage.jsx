import React, { useState, useEffect } from 'react'
export default function ContractorVsElectricianPage({ onHome, onLaunchApp, onNavigate }) {
  const [isMobile, setIsMobile] = React.useState(typeof window !== "undefined" && window.innerWidth < 768)
  React.useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", h)
    return () => window.removeEventListener("resize", h)
  }, [])
  return (
    <div style={s.root}>

      <header style={s.hero}>
        <div style={s.heroGrid} />
        <div style={s.heroInner}>
          <div style={s.breadcrumb}>
            <button style={s.breadcrumbLink} onClick={() => onHome && onHome()}>Home</button>
            <span style={s.breadcrumbSep}>/</span>
            <span style={s.breadcrumbCurrent}>Electrician vs. Contractor</span>
          </div>
          <div style={s.label}>// LICENSE GUIDE</div>
          <h1 style={s.h1}>
            California Electrician vs.<br />
            <span style={s.h1Gold}>General Contractor — What's the Difference?</span>
          </h1>
          <div style={s.meta}>
            <span style={s.metaItem}>⚡ West Coast Wire Pro</span>
            <span style={s.metaDot}>·</span>
            <span style={s.metaItem}>Updated 2026</span>
          </div>
          <p style={s.heroSub}>
            Two different licenses. Two different legal authorities. Two very different paths
            to owning your own electrical business in California. Here's what each actually
            means and which one you need.
          </p>
        </div>
      </header>

      <div style={{...s.layout, flexDirection: isMobile ? "column" : "row", padding: isMobile ? "32px 20px 60px" : "48px 40px 80px"}}>
        <main style={{...s.main, width: isMobile ? "100%" : undefined}}>

          {/* Last verified notice */}
          <div style={{background:"rgba(200,168,75,0.07)", border:"1px solid rgba(200,168,75,0.25)", borderRadius:"6px", padding:"10px 14px", marginBottom:"24px", display:"flex", alignItems:"flex-start", gap:"10px"}}>
            <span style={{fontSize:"16px", flexShrink:0}}>ℹ️</span>
            <div style={{fontSize:"12px", color:"#8899aa", lineHeight:"1.6"}}>
              <strong style={{color:"#c8a84b"}}>License requirements current as of 2026.</strong> Fees, bond amounts, and experience requirements can change. Verify current requirements at <a href="https://www.cslb.ca.gov" target="_blank" rel="noopener noreferrer" style={{color:"#c8a84b"}}>cslb.ca.gov</a> and <a href="https://www.dir.ca.gov" target="_blank" rel="noopener noreferrer" style={{color:"#c8a84b"}}>dir.ca.gov</a> before applying.
            </div>
          </div>

          <div style={s.toc}>
            <div style={s.tocTitle}>In This Article</div>
            {[
              ['#overview',    'The Short Answer'],
              ['#journeyman',  'The California Journeyman Electrician License'],
              ['#c10',         'The C-10 Electrical Contractor License'],
              ['#gc',          'The General B Contractor License'],
              ['#compare',     'Side-by-Side Comparison'],
              ['#path',        'The Right Path for You'],
            ].map(([href, text]) => (
              <a key={href} href={href} style={s.tocLink}>{text}</a>
            ))}
          </div>

          <Article>

            <Section id="overview" title="The Short Answer">
              <P>
                A <Strong>California Journeyman Electrician</Strong> is a craftsperson — licensed to perform
                electrical work as an employee. You can legally wire buildings, supervise apprentices, and work
                as a foreman. You cannot legally run your own electrical business, pull your own permits, or
                contract directly with homeowners and general contractors.
              </P>
              <P>
                A <Strong>C-10 Electrical Contractor</Strong> is a business license — it lets you legally
                operate an electrical contracting company, pull permits in your own name, hire employees,
                and enter into contracts with clients. Most people get their journeyman license first, then
                pursue the C-10 after accumulating the required field experience.
              </P>
              <P>
                A <Strong>General B Contractor</Strong> is a broader construction license — it allows you
                to oversee entire construction projects but generally requires hiring licensed specialty
                subcontractors (like a C-10) for the electrical work, unless the project is primarily
                framing, finish, or other general trade work.
              </P>
            </Section>

            <Section id="journeyman" title="The California Journeyman Electrician License">
              <P>
                Issued by the California DLSE (Division of Labor Standards Enforcement), the Journeyman
                Electrician (General) certification is the standard trade license for electricians in the state.
              </P>
              <div style={s.moduleGrid}>
                {[
                  ["Who issues it", "California DLSE (Department of Industrial Relations)"],
                  ["Requirements", "8,000 hours verified electrical work experience"],
                  ["Exam", "110 questions, 4.5 hours, 70% to pass (PSI Testing)"],
                  ["What it allows", "Perform electrical work as a licensed employee"],
                  ["What it doesn't allow", "Run your own electrical business or pull permits"],
                  ["Renewal", "Every 3 years, 32 hours continuing education required"],
                  ["Exam cost", "Under $200"],
                  ["Reciprocity", "Limited — other states may require additional testing"],
                ].map(([k,v]) => (
                  <div key={k} style={s.moduleRow}>
                    <div style={{color:'#4a5a6a', fontFamily:"'Courier New', monospace", fontSize:'12px', width:'160px', flexShrink:0}}>{k}</div>
                    <div style={{color:'#d8e0e8', fontSize:'13px', flex:1}}>{v}</div>
                  </div>
                ))}
              </div>
              <P>
                The journeyman license is required in California to perform electrical work on most commercial,
                industrial, and residential projects above a certain complexity. Apprentices must work under
                a licensed journeyman or contractor. Without the card, you're legally limited in your earning
                potential and career advancement.
              </P>
            </Section>

            <Section id="c10" title="The C-10 Electrical Contractor License">
              <P>
                The C-10 is issued by the California Contractors State License Board (CSLB) — a completely
                different agency from the DLSE. It's a business license, not a personal trade credential.
              </P>
              <div style={s.moduleGrid}>
                {[
                  ["Who issues it", "CSLB (Contractors State License Board)"],
                  ["Requirements", "4 years journeyman-level electrical experience"],
                  ["Exam", "Law & Business exam + Trade exam"],
                  ["Bond required", "$15,000 contractor's bond"],
                  ["Insurance required", "General liability + workers comp (if employees)"],
                  ["What it allows", "Run electrical contracting business, pull permits, hire workers"],
                  ["Annual fee", "~$300–$500 for license maintenance"],
                  ["Qualifying individual", "One person must hold the license — can serve as RMO/RME"],
                ].map(([k,v]) => (
                  <div key={k} style={s.moduleRow}>
                    <div style={{color:'#4a5a6a', fontFamily:"'Courier New', monospace", fontSize:'12px', width:'160px', flexShrink:0}}>{k}</div>
                    <div style={{color:'#d8e0e8', fontSize:'13px', flex:1}}>{v}</div>
                  </div>
                ))}
              </div>
              <P>
                The C-10 exam has two parts: a Law and Business exam (covers contract law, workers comp,
                lien law, business practices) and a Trade exam (covers the NEC and electrical theory).
                The journeyman exam you're studying for now is focused on the trade knowledge — much of that
                overlaps with the C-10 trade exam, making the journeyman prep valuable for both paths.
              </P>
            </Section>

            <Section id="gc" title="The General B Contractor License">
              <P>
                The Class B General Building Contractor license is the broadest construction license in
                California. It allows you to take on prime contracts for construction projects that involve
                at least two unrelated building trades or crafts.
              </P>
              <P>
                <Strong>The critical limitation:</Strong> A General B contractor cannot self-perform specialty
                work that requires a specific C-license unless that specialty work is incidental and
                supplemental to the overall project. For electrical work specifically, a General B contractor
                must subcontract to a C-10 unless the electrical work is incidental to a larger project
                they're managing.
              </P>
              <P>
                In practice, many electricians who grow into project management or construction management
                roles eventually pursue a General B license — but they maintain their C-10 or their
                C-10 subcontractors handle the actual electrical work. The General B opens the door to
                taking on full construction projects (tenant improvements, light commercial builds, etc.)
                rather than just the electrical scope.
              </P>
              <div style={s.moduleGrid}>
                {[
                  ["Who issues it", "CSLB (same as C-10)"],
                  ["Requirements", "4 years journey-level experience in one or more trades"],
                  ["Exams", "Law & Business + Trade exam"],
                  ["Electrical work", "Must subcontract to C-10 (unless incidental)"],
                  ["Best for", "General construction management, full project prime contracts"],
                ].map(([k,v]) => (
                  <div key={k} style={s.moduleRow}>
                    <div style={{color:'#4a5a6a', fontFamily:"'Courier New', monospace", fontSize:'12px', width:'160px', flexShrink:0}}>{k}</div>
                    <div style={{color:'#d8e0e8', fontSize:'13px', flex:1}}>{v}</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="compare" title="Side-by-Side Comparison">
              <div style={s.timelineGrid}>
                {[
                  { label:"Journeyman (DLSE)", items:["Perform electrical work legally","Supervise apprentices","Work as foreman","✗ Cannot run own business","✗ Cannot pull permits","✗ Cannot contract directly"] },
                  { label:"C-10 Contractor (CSLB)", items:["Run electrical business","Pull permits in your name","Hire and supervise workers","Contract with clients directly","✗ Not a personal trade license","Required: bond + insurance"] },
                  { label:"General B (CSLB)", items:["Take on full construction projects","Be prime contractor on builds","Manage multiple trades","✗ Must sub out electrical","✗ Not an electrical license","Best paired with C-10"] },
                ].map(c => (
                  <div key={c.label} style={s.timelineCard}>
                    <div style={{fontSize:'12px', color:'#c8a84b', fontFamily:"'Courier New', monospace", fontWeight:'700', marginBottom:'10px'}}>{c.label}</div>
                    {c.items.map((item, i) => (
                      <div key={i} style={{fontSize:'12px', color: item.startsWith('✗') ? '#4a5a6a' : '#aabbcc', marginBottom:'5px', lineHeight:'1.4'}}>{item}</div>
                    ))}
                  </div>
                ))}
              </div>
            </Section>

            <Section id="path" title="The Right Path for You">
              <P>
                If you want to <Strong>work as a tradesperson and advance to foreman</Strong>, the
                journeyman license is your immediate goal. It's required, it pays well, and it opens
                the door to everything above it.
              </P>
              <P>
                If you want to <Strong>own your own electrical contracting business</Strong>, the
                path is: journeyman license → 4 years experience → C-10 exam. The journeyman is the
                prerequisite. Start there.
              </P>
              <P>
                If you want to <Strong>be a general contractor who manages entire projects</Strong>
                including electrical, plumbing, framing, and finish work — you'll want both a C-10
                and eventually a General B. But again: journeyman first.
              </P>
              <P>
                The exam you're preparing for right now — the California General Electrician exam — is
                the foundation of all of it. Every path goes through that 110-question test.
              </P>
            </Section>

            <div style={s.ctaBlock}>
              <div style={s.ctaBolt}>⚡</div>
              <div style={s.ctaTitle}>The Foundation Is the Journeyman Exam</div>
              <div style={s.ctaBody}>
                Every path in California electrical — journeyman, C-10, business owner — starts with
                passing this test. 462 NEC-referenced questions to get you there.
              </div>
              <div style={s.ctaBtns}>
                <button style={s.btnGold} onClick={onLaunchApp}>Start Free Practice</button>
                <button style={s.btnGhost} onClick={() => onNavigate('exam-info')}>Exam Info →</button>
              </div>
            </div>

            <div style={s.related}>
              <div style={s.relatedTitle}>Related Articles</div>
              <div style={s.relatedGrid}>
                {[
                  { label:"CAREER GUIDE", name:"How Much Does a CA Journeyman Make?", page:"salary" },
                  { label:"EXAM INFO", name:"California Journeyman Exam — Complete Guide", page:"exam-info" },
                  { label:"STUDY GUIDE", name:"How to Pass the CA Journeyman Exam", page:"study-tips" },
                ].map(r => (
                  <div key={r.page} style={s.relatedCard} onClick={() => onNavigate(r.page)}>
                    <div style={s.relatedLabel}>{r.label}</div>
                    <div style={s.relatedName}>{r.name}</div>
                    <div style={s.relatedArrow}>→</div>
                  </div>
                ))}
              </div>
            </div>
          </Article>
        </main>

        <aside style={{...s.sidebar, display: isMobile ? "none" : "flex"}}>
          <div style={s.sideCard}>
            <div style={s.sideTitle}>License Issuer</div>
            {[
              ["Journeyman", "DLSE (DIR)"],
              ["C-10 Contractor", "CSLB"],
              ["General B", "CSLB"],
            ].map(([k,v]) => (
              <div key={k} style={s.sideRow}><span style={s.sideKey}>{k}</span><span style={{...s.sideVal, color:'#c8a84b'}}>{v}</span></div>
            ))}
          </div>
          <div style={s.sideCard}>
            <div style={s.sideTitle}>Start Studying</div>
            <p style={{fontSize:'13px', color:'#7a8a9a', lineHeight:1.6, margin:'0 0 12px', fontFamily:"'Georgia', serif"}}>
              462 practice questions. Modules 1 & 2 always free.
            </p>
            <button style={s.btnGold} onClick={onLaunchApp}>Try Free ⚡</button>
          </div>
        </aside>
      </div>

      <PageFooter onNavigate={onNavigate} />
    </div>
  );
}

function Article({ children }) { return <div style={{color:'#aabbcc', lineHeight:1.8, fontSize:'15px', fontFamily:"'Georgia', serif"}}>{children}</div>; }
function Section({ id, title, children }) {
  return (
    <section id={id} style={{marginBottom:'40px', scrollMarginTop:'80px'}}>
      <h2 style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'clamp(16px,2.5vw,22px)', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', borderBottom:'1px solid rgba(200,168,75,0.15)', paddingBottom:'10px', marginBottom:'18px', marginTop:0}}>{title}</h2>
      {children}
    </section>
  );
}
function P({ children }) { return <p style={{marginBottom:'16px', marginTop:0}}>{children}</p>; }
function Strong({ children }) { return <strong style={{color:'#d8e0e8', fontWeight:'700'}}>{children}</strong>; }
function PageFooter({ onNavigate }) {
  const btn = (label, to) => <button key={to} style={{background:'none', border:'none', color:'#4a5a6a', fontSize:'12px', cursor:'pointer', padding:0}} onClick={() => onNavigate(to)}>{label}</button>;
  return (
    <footer style={{borderTop:'1px solid rgba(200,168,75,0.1)', padding:'28px clamp(16px,4vw,40px)', background:'#0a1016', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px'}}>
      <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'16px', color:'#c8a84b'}}>⚡ West Coast Wire Pro</div>
      <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>{btn('Home','landing')}{btn('Exam Guide','exam-info')}{btn('About','about')}{btn('Privacy','privacy')}</div>
      <div style={{fontSize:'11px', color:'#4a5a6a'}}>© 2026 West Coast Wire Pro Training</div>
    </footer>
  );
}
const s = {
  root:{minHeight:'100vh',background:'#0a1016',color:'#d8e0e8',fontFamily:"'Georgia', serif"},
  hero:{padding:'clamp(32px,6vw,64px) clamp(20px,4vw,40px) clamp(24px,4vw,48px)',position:'relative',overflow:'hidden',borderBottom:'1px solid rgba(200,168,75,0.08)'},
  heroGrid:{position:'absolute',inset:0,opacity:0.03,backgroundImage:'linear-gradient(rgba(200,168,75,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,1) 1px, transparent 1px)',backgroundSize:'50px 50px',pointerEvents:'none'},
  heroInner:{maxWidth:'820px',position:'relative',zIndex:1},
  breadcrumb:{display:'flex',alignItems:'center',gap:'8px',marginBottom:'16px'},
  breadcrumbLink:{background:'none',border:'none',color:'#7a8a9a',fontSize:'12px',cursor:'pointer',padding:0,fontFamily:"'Courier New', monospace"},
  breadcrumbSep:{color:'#2a3a4a',fontSize:'12px'},
  breadcrumbCurrent:{color:'#c8a84b',fontSize:'12px',fontFamily:"'Courier New', monospace"},
  label:{fontFamily:"'Courier New', monospace",fontSize:'11px',color:'#c8a84b',letterSpacing:'3px',marginBottom:'14px'},
  h1:{fontFamily:"'Arial Black', Arial, sans-serif",fontSize:'clamp(26px, 4vw, 44px)',fontWeight:'900',textTransform:'uppercase',lineHeight:1.05,marginBottom:'14px',marginTop:0},
  h1Gold:{color:'#c8a84b'},
  meta:{display:'flex',gap:'8px',alignItems:'center',marginBottom:'16px'},
  metaItem:{fontFamily:"'Courier New', monospace",fontSize:'11px',color:'#4a5a6a'},
  metaDot:{color:'#2a3a4a'},
  heroSub:{fontSize:'16px',color:'#7a8a9a',lineHeight:1.7,maxWidth:'640px',margin:0},
  layout:{display:'flex',gap:'48px',padding:'48px 40px 80px',maxWidth:'1100px',margin:'0 auto',alignItems:'flex-start'},
  main:{flex:'1',minWidth:'280px'},
  sidebar:{width:'260px',flexShrink:0,position:'sticky',top:'80px',display:'flex',flexDirection:'column',gap:'16px'},
  toc:{background:'#111820',border:'1px solid rgba(200,168,75,0.1)',borderRadius:'6px',padding:'18px',marginBottom:'36px',display:'flex',flexDirection:'column',gap:'2px'},
  tocTitle:{fontFamily:"'Arial Black', Arial, sans-serif",fontSize:'11px',fontWeight:'900',textTransform:'uppercase',color:'#c8a84b',letterSpacing:'1px',marginBottom:'8px'},
  tocLink:{color:'#7a8a9a',textDecoration:'none',fontSize:'13px',lineHeight:1.5,padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.03)',fontFamily:"'Segoe UI', sans-serif"},
  timelineGrid:{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))',gap:'2px',background:'rgba(200,168,75,0.07)',margin:'16px 0 20px',border:'1px solid rgba(200,168,75,0.07)'},
  timelineCard:{background:'#0a1016',padding:'16px'},
  moduleGrid:{display:'flex',flexDirection:'column',gap:'1px',background:'rgba(200,168,75,0.07)',margin:'16px 0'},
  moduleRow:{background:'#0a1016',padding:'14px 16px',display:'flex',gap:'16px',justifyContent:'space-between',alignItems:'flex-start'},
  ctaBlock:{background:'linear-gradient(135deg,#111820,#1a2535)',border:'1px solid rgba(200,168,75,0.25)',borderRadius:'8px',padding:'36px',textAlign:'center',margin:'40px 0'},
  ctaBolt:{fontSize:'36px',marginBottom:'8px'},
  ctaTitle:{fontFamily:"'Arial Black', Arial, sans-serif",fontSize:'20px',fontWeight:'900',textTransform:'uppercase',color:'#c8a84b',marginBottom:'10px'},
  ctaBody:{fontSize:'14px',color:'#7a8a9a',lineHeight:1.7,marginBottom:'20px',fontFamily:"'Georgia', serif"},
  ctaBtns:{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'},
  related:{marginTop:'48px'},
  relatedTitle:{fontFamily:"'Arial Black', Arial, sans-serif",fontSize:'14px',fontWeight:'900',textTransform:'uppercase',color:'#c8a84b',letterSpacing:'1px',marginBottom:'12px'},
  relatedGrid:{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(240px,1fr))',gap:'2px',background:'rgba(200,168,75,0.07)'},
  relatedCard:{background:'#0a1016',padding:'20px',cursor:'pointer',display:'flex',flexDirection:'column',gap:'6px'},
  relatedLabel:{fontFamily:"'Courier New', monospace",fontSize:'10px',color:'#c8a84b',letterSpacing:'2px'},
  relatedName:{fontSize:'15px',color:'#d8e0e8',fontFamily:"'Arial Black', Arial, sans-serif",fontWeight:'700',lineHeight:1.3},
  relatedArrow:{color:'#c8a84b',fontSize:'18px',marginTop:'4px'},
  sideCard:{background:'#111820',border:'1px solid rgba(200,168,75,0.12)',borderRadius:'6px',padding:'18px',display:'flex',flexDirection:'column',gap:'6px'},
  sideTitle:{fontFamily:"'Arial Black', Arial, sans-serif",fontSize:'11px',fontWeight:'900',textTransform:'uppercase',color:'#c8a84b',letterSpacing:'1px',marginBottom:'6px'},
  sideRow:{display:'flex',justifyContent:'space-between',gap:'8px',padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.04)',fontSize:'12px'},
  sideKey:{color:'#4a5a6a',fontFamily:"'Courier New', monospace"},
  sideVal:{color:'#aabbcc',textAlign:'right'},
  btnGold:{padding:'12px 24px',background:'linear-gradient(135deg,#c8a84b,#e8c878)',color:'#0a1016',fontFamily:"'Arial Black', Arial, sans-serif",fontWeight:'900',fontSize:'14px',textTransform:'uppercase',letterSpacing:'0.5px',border:'none',borderRadius:'5px',cursor:'pointer'},
  btnGhost:{padding:'12px 20px',background:'transparent',color:'#c8a84b',fontFamily:"'Arial Black', Arial, sans-serif",fontWeight:'900',fontSize:'13px',textTransform:'uppercase',letterSpacing:'0.5px',border:'1px solid rgba(200,168,75,0.3)',borderRadius:'5px',cursor:'pointer'},
}
