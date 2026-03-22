import React, { useState, useEffect } from 'react'
export default function SalaryPage({ onHome, onLaunchApp, onNavigate }) {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return (
    <div style={s.root}>

      <header style={s.hero}>
        <div style={s.heroGrid} />
        <div style={s.heroInner}>
          <div style={s.breadcrumb}>
            <button style={s.breadcrumbLink} onClick={() => onHome && onHome()}>Home</button>
            <span style={s.breadcrumbSep}>/</span>
            <span style={s.breadcrumbCurrent}>Electrician Salary</span>
          </div>
          <div style={s.label}>// CAREER GUIDE</div>
          <h1 style={s.h1}>
            How Much Does a California<br />
            <span style={s.h1Gold}>Journeyman Electrician Make?</span>
          </h1>
          <div style={s.meta}>
            <span style={s.metaItem}>⚡ West Coast Wire Pro</span>
            <span style={s.metaDot}>·</span>
            <span style={s.metaItem}>Updated 2026</span>
          </div>
          <p style={s.heroSub}>
            The California journeyman license is one of the highest-paying certifications
            in the trades. Here's what the numbers actually look like — by region,
            union vs. non-union, and how far the license can take you.
          </p>
        </div>
      </header>

      <div style={{...s.layout, flexDirection: isMobile ? "column" : "row", padding: isMobile ? "32px 20px 60px" : "48px 40px 80px"}}>
        <main style={{...s.main, width: isMobile ? "100%" : undefined}}>

          {/* Last verified notice */}
          <div style={{background:"rgba(200,168,75,0.07)", border:"1px solid rgba(200,168,75,0.25)", borderRadius:"6px", padding:"10px 14px", marginBottom:"24px", display:"flex", alignItems:"flex-start", gap:"10px"}}>
            <span style={{fontSize:"16px", flexShrink:0}}>ℹ️</span>
            <div style={{fontSize:"12px", color:"#8899aa", lineHeight:"1.6"}}>
              <strong style={{color:"#c8a84b"}}>Wage data current as of 2024.</strong> California electrician wages change regularly. Verify current wage rates with the <a href="https://www.dir.ca.gov" target="_blank" rel="noopener noreferrer" style={{color:"#c8a84b"}}>CA Department of Industrial Relations</a> or your local IBEW before making career decisions.
            </div>
          </div>

          <div style={s.toc}>
            <div style={s.tocTitle}>In This Article</div>
            {[
              ['#overview',    'What Journeyman Electricians Earn in California'],
              ['#regional',    'Pay by Region'],
              ['#union',       'Union vs. Non-Union'],
              ['#factors',     'What Affects Your Pay'],
              ['#ceiling',     'The Earning Ceiling: Where the License Takes You'],
              ['#worth-it',    'Is Getting the License Worth It?'],
            ].map(([href, text]) => (
              <a key={href} href={href} style={s.tocLink}>{text}</a>
            ))}
          </div>

          <Article>

            <Section id="overview" title="What Journeyman Electricians Earn in California">
              <P>
                California electricians earn significantly above the national average.
                According to the U.S. Bureau of Labor Statistics May 2024 Occupational Employment
                and Wage Statistics (OEWS) survey, the statewide median annual wage for electricians
                in California is <Strong>$76,540</Strong> — compared to a national median of $62,350.
              </P>
              <P>
                The top 10% of California electricians earn <Strong>$136,710 or more</Strong> annually.
                The bottom 10% earn $46,630 or less. Where you fall in that range depends on region,
                experience, union affiliation, and the type of work you do.
              </P>
              <div style={s.timelineGrid}>
                {[
                  { label:"California Statewide Median", range:"$76,540/yr", note:"BLS OEWS May 2024" },
                  { label:"California 75th Percentile", range:"$103,720/yr", note:"BLS OEWS May 2024" },
                  { label:"California 90th Percentile", range:"$136,710/yr", note:"BLS OEWS May 2024" },
                  { label:"National Median (all states)", range:"$62,350/yr", note:"BLS OEWS May 2024" },
                ].map(c => (
                  <div key={c.label} style={s.timelineCard}>
                    <div style={{fontSize:'11px', color:'#c8a84b', fontFamily:"'Courier New', monospace", marginBottom:'6px'}}>{c.label}</div>
                    <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'18px', fontWeight:'900', color:'#d8e0e8', marginBottom:'4px'}}>{c.range}</div>
                    <div style={{fontSize:'12px', color:'#4a5a6a'}}>{c.note}</div>
                  </div>
                ))}
              </div>
              <P>
                Note: BLS OEWS data covers wage and salary workers and does not include self-employed
                electricians. Data reflects all electricians in California, not specifically journeymen —
                wages vary by experience level and certification.
              </P>
            </Section>

            <Section id="regional" title="Pay by Region">
              <P>
                California shows wide regional variation. The following median annual wages are from
                the BLS OEWS May 2024 survey for electricians (SOC 47-2111) by metropolitan area:
              </P>
              <div style={s.moduleGrid}>
                {[
                  ["San Jose / Sunnyvale / Santa Clara", "$95,020", "Highest median in state per BLS 2024."],
                  ["San Francisco / Oakland / Fremont", "$93,750", "Strong union presence, major commercial and data center work."],
                  ["Napa", "$80,910", "Smaller market, strong wages."],
                  ["Sacramento / Roseville / Folsom", "$75,780", "Growing state government and data center investment."],
                  ["Los Angeles / Long Beach / Anaheim", "$76,120", "Largest market in state by employment."],
                  ["San Diego / Chula Vista / Carlsbad", "$75,640", "Consistent demand from defense and military construction."],
                  ["Riverside / San Bernardino / Ontario", "$73,970", "Logistics and warehouse construction booming."],
                  ["Fresno", "$68,410", "Lower wages, significantly lower cost of living."],
                  ["Bakersfield / Delano", "$75,310", "Oil and agricultural industrial work."],
                ].map(([region, range, note]) => (
                  <div key={region} style={s.moduleRow}>
                    <div style={{flex:1}}>
                      <div style={{color:'#d8e0e8', fontWeight:'700', fontSize:'14px', marginBottom:'4px'}}>{region}</div>
                      <div style={{color:'#4a5a6a', fontSize:'12px', lineHeight:'1.5'}}>{note}</div>
                    </div>
                    <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'16px', color:'#c8a84b', fontWeight:'900', flexShrink:0, marginLeft:'16px'}}>{range}</div>
                  </div>
                ))}
              </div>
              <P>
                Source: BLS OEWS May 2024, SOC 47-2111 (Electricians). All figures are median annual wages.
                See full data at <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer" style={{color:'#c8a84b'}}>bls.gov/oes</a>.
              </P>
            </Section>

            <Section id="union" title="Union vs. Non-Union">
              <P>
                BLS wage data does not break down electrician wages by union status — those figures
                come from individual union local wage agreements, which are publicly available from
                your local IBEW. If you want to know what IBEW Local 11 (LA) or Local 6 (SF) currently
                pay journeymen, the most accurate source is the local's website or business manager.
              </P>
              <P>
                What BLS data does show: California's 75th percentile electrician earns $103,720/year —
                which is roughly where well-compensated union journeymen in major metros land.
                The 90th percentile at $136,710 reflects experienced foremen, specialty workers,
                and those in the highest-paying markets.
              </P>
              <P>
                <Strong>Non-Union:</Strong> Often provides higher take-home pay at entry level due to
                lower benefit overhead, but long-term total compensation including pension and
                healthcare typically favors union employment. For prevailing wage public projects,
                non-union workers receive the same wage rate as union scale — it's the benefits
                that differ.
              </P>
            </Section>

            <Section id="factors" title="What Affects Your Pay">
              <P>These are the variables that move the needle most after you have your license:</P>
              <div style={s.methodSteps}>
                {[
                  ["SPECIALTY WORK", "Specialty certifications in fire alarm, solar, or industrial controls typically command premium wages. Check current prevailing wage determinations at the CA DIR for publicly-funded project rates."],
                  ["FOREMAN / GF", "Foreman classifications typically pay above journeyman scale. Union agreements publish exact foreman differentials; non-union rates vary by employer."],
                  ["SHIFT WORK", "Night shift and weekend differential pay is common on commercial projects — confirm current rates with your employer or union local."],
                  ["PREVAILING WAGE", "Any publicly-funded project requires prevailing wage — typically union scale regardless of union membership. Current prevailing wage rates are published by the CA DIR at dir.ca.gov."],
                  ["PER DIEM WORK", "Industrial and out-of-town projects often include per diem that is tax-free under IRS rules. Amounts vary by project and employer."],
                  ["OVERTIME", "California overtime triggers at 8 hours/day (not 40/week). Shops with heavy overtime volumes effectively pay significantly more annually than those limited to straight time."],
                ].map(([title, body]) => (
                  <div key={title} style={s.methodStep}>
                    <div style={s.methodStepNum}>{title}</div>
                    <div style={{flex:1}}>
                      <div style={s.methodStepBody}>{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="ceiling" title="The Earning Ceiling: Where the License Takes You">
              <P>
                The journeyman license is the foundation, not the ceiling. Here's what the next steps look like:
              </P>
              <P>
                <Strong>General (C-10) Contractor License:</Strong> With 4+ years of journeyman experience,
                you can sit for the California C-10 electrical contractor exam. This lets you run your own
                electrical business. Income as a contractor varies widely based on business volume and is
                not captured in BLS wage data, which covers employees only.
              </P>
              <P>
                <Strong>Electrical Inspector:</Strong> City and county electrical inspector positions in
                California are government roles with salaries published publicly. Check the specific
                city or county's job postings for current compensation ranges.
              </P>
              <P>
                <Strong>Estimating / Project Management:</Strong> Many journeymen transition to office roles
                — estimating, project management, and field superintendent work. These roles are
                increasingly in demand as experienced tradespeople who understand the field are rare in
                management. BLS does not publish a specific category for this transition path.
              </P>
            </Section>

            <Section id="worth-it" title="Is Getting the License Worth It?">
              <P>
                The BLS data makes a strong case. The California statewide median for electricians is
                $76,540 — $14,190 above the national median. The 75th percentile in California reaches
                $103,720 and the 90th percentile $136,710, all per the May 2024 OEWS survey.
              </P>
              <P>
                Beyond wages, the journeyman card changes your legal standing. Without it, you cannot
                legally supervise apprentices, run your own electrical business, or work as a general
                foreman on most commercial projects in California.
              </P>
              <P>
                The exam fee is $175. For current fee information, verify at the CA DIR website.
                For current wage data, see the full BLS OEWS dataset at{' '}
                <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer" style={{color:'#c8a84b'}}>bls.gov/oes</a>.
              </P>
            </Section>

            <div style={s.ctaBlock}>
              <div style={s.ctaBolt}>⚡</div>
              <div style={s.ctaTitle}>Ready to Earn It?</div>
              <div style={s.ctaBody}>
                462 NEC-referenced practice questions across all 12 exam modules.
                Modules 1 & 2 + 2 Table Mastery drills free — no account required.
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
                  { label:"STUDY GUIDE", name:"How to Pass the CA Journeyman Exam", page:"study-tips" },
                  { label:"EXAM INFO", name:"California Journeyman Exam — Complete Guide", page:"exam-info" },
                  { label:"EXAM DAY", name:"What to Expect at the PSI Testing Center", page:"exam-day" },
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
            <div style={s.sideTitle}>BLS 2024 — California</div>
            {[
              ["Statewide median", "$76,540/yr"],
              ["25th percentile", "$59,420/yr"],
              ["75th percentile", "$103,720/yr"],
              ["90th percentile", "$136,710/yr"],
              ["San Jose median", "$95,020/yr"],
              ["SF/Oakland median", "$93,750/yr"],
              ["LA metro median", "$76,120/yr"],
              ["National median", "$62,350/yr"],
            ].map(([k,v]) => (
              <div key={k} style={s.sideRow}>
                <span style={s.sideKey}>{k}</span>
                <span style={{...s.sideVal, color:'#c8a84b', fontWeight:'700'}}>{v}</span>
              </div>
            ))}
            <div style={{fontSize:'10px', color:'#4a5a6a', marginTop:'10px', lineHeight:'1.5'}}>
              Source: BLS OEWS May 2024 (SOC 47-2111).<br/>
              <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer" style={{color:'#c8a84b'}}>bls.gov/oes</a>
            </div>
          </div>
          <div style={s.sideCard}>
            <div style={s.sideTitle}>Start Studying</div>
            <p style={{fontSize:'13px', color:'#7a8a9a', lineHeight:1.6, margin:'0 0 12px', fontFamily:"'Georgia', serif"}}>
              462 practice questions. Modules 1 & 2 + Table Mastery free.
            </p>
            <button style={s.btnGold} onClick={onLaunchApp}>Try Free ⚡</button>
          </div>
        </aside>
      </div>

      <PageFooter onNavigate={onNavigate} />
    </div>
  );
}

// ── Shared components ────────────────────────────────────────
function Article({ children }) {
  return <div style={{color:'#aabbcc', lineHeight:1.8, fontSize:'15px', fontFamily:"'Georgia', serif"}}>{children}</div>;
}
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
      <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
        {btn('Home','landing')}{btn('Exam Guide','exam-info')}{btn('About','about')}{btn('Privacy','privacy')}
      </div>
      <div style={{fontSize:'11px', color:'#4a5a6a'}}>© 2026 West Coast Wire Pro Training</div>
    </footer>
  );
}

const s = {
  root: { minHeight:'100vh', background:'#0a1016', color:'#d8e0e8', fontFamily:"'Georgia', serif" },
  hero: { padding:'clamp(32px,6vw,64px) clamp(20px,4vw,40px) clamp(24px,4vw,48px)', position:'relative', overflow:'hidden', borderBottom:'1px solid rgba(200,168,75,0.08)' },
  heroGrid: { position:'absolute', inset:0, opacity:0.03, backgroundImage:'linear-gradient(rgba(200,168,75,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,1) 1px, transparent 1px)', backgroundSize:'50px 50px', pointerEvents:'none' },
  heroInner: { maxWidth:'820px', position:'relative', zIndex:1 },
  breadcrumb: { display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px' },
  breadcrumbLink: { background:'none', border:'none', color:'#7a8a9a', fontSize:'12px', cursor:'pointer', padding:0, fontFamily:"'Courier New', monospace" },
  breadcrumbSep: { color:'#2a3a4a', fontSize:'12px' },
  breadcrumbCurrent: { color:'#c8a84b', fontSize:'12px', fontFamily:"'Courier New', monospace" },
  label: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', letterSpacing:'3px', marginBottom:'14px' },
  h1: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'clamp(26px, 4vw, 44px)', fontWeight:'900', textTransform:'uppercase', lineHeight:1.05, marginBottom:'14px', marginTop:0 },
  h1Gold: { color:'#c8a84b' },
  meta: { display:'flex', gap:'8px', alignItems:'center', marginBottom:'16px' },
  metaItem: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#4a5a6a' },
  metaDot: { color:'#2a3a4a' },
  heroSub: { fontSize:'16px', color:'#7a8a9a', lineHeight:1.7, maxWidth:'640px', margin:0 },
  layout: { display:'flex', gap:'48px', padding:'48px 40px 80px', maxWidth:'1100px', margin:'0 auto', alignItems:'flex-start' },
  main: { flex:'1', minWidth:'0' },
  sidebar: { width:'260px', flexShrink:0, position:'sticky', top:'80px', display:'flex', flexDirection:'column', gap:'16px' },
  toc: { background:'#111820', border:'1px solid rgba(200,168,75,0.1)', borderRadius:'6px', padding:'18px', marginBottom:'36px', display:'flex', flexDirection:'column', gap:'2px' },
  tocTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'11px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'8px' },
  tocLink: { color:'#7a8a9a', textDecoration:'none', fontSize:'13px', lineHeight:1.5, padding:'5px 0', borderBottom:'1px solid rgba(255,255,255,0.03)', fontFamily:"'Segoe UI', sans-serif" },
  timelineGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))', gap:'2px', background:'rgba(200,168,75,0.07)', margin:'16px 0 20px', border:'1px solid rgba(200,168,75,0.07)' },
  timelineCard: { background:'#0a1016', padding:'16px' },
  moduleGrid: { display:'flex', flexDirection:'column', gap:'1px', background:'rgba(200,168,75,0.07)', margin:'16px 0' },
  moduleRow: { background:'#0a1016', padding:'14px 16px', display:'flex', gap:'16px', justifyContent:'space-between', alignItems:'flex-start' },
  methodSteps: { display:'flex', flexDirection:'column', gap:'2px', background:'rgba(200,168,75,0.07)', margin:'16px 0' },
  methodStep: { background:'#0a1016', padding:'18px', display:'flex', gap:'20px', alignItems:'flex-start' },
  methodStepNum: { fontFamily:"'Courier New', monospace", fontSize:'10px', color:'#c8a84b', letterSpacing:'1px', flexShrink:0, marginTop:'2px', width:'100px' },
  methodStepBody: { fontSize:'13px', color:'#aabbcc', lineHeight:1.7, fontFamily:"'Georgia', serif", flex:1 },
  ctaBlock: { background:'linear-gradient(135deg,#111820,#1a2535)', border:'1px solid rgba(200,168,75,0.25)', borderRadius:'8px', padding:'36px', textAlign:'center', margin:'40px 0' },
  ctaBolt: { fontSize:'36px', marginBottom:'8px' },
  ctaTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'20px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', marginBottom:'10px' },
  ctaBody: { fontSize:'14px', color:'#7a8a9a', lineHeight:1.7, marginBottom:'20px', fontFamily:"'Georgia', serif" },
  ctaBtns: { display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' },
  related: { marginTop:'48px' },
  relatedTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'14px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'12px' },
  relatedGrid: { display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px,1fr))', gap:'2px', background:'rgba(200,168,75,0.07)' },
  relatedCard: { background:'#0a1016', padding:'20px', cursor:'pointer', display:'flex', flexDirection:'column', gap:'6px' },
  relatedLabel: { fontFamily:"'Courier New', monospace", fontSize:'10px', color:'#c8a84b', letterSpacing:'2px' },
  relatedName: { fontSize:'15px', color:'#d8e0e8', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'700', lineHeight:1.3 },
  relatedArrow: { color:'#c8a84b', fontSize:'18px', marginTop:'4px' },
  sideCard: { background:'#111820', border:'1px solid rgba(200,168,75,0.12)', borderRadius:'6px', padding:'18px', display:'flex', flexDirection:'column', gap:'6px' },
  sideTitle: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'11px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'6px' },
  sideRow: { display:'flex', justifyContent:'space-between', gap:'8px', padding:'5px 0', borderBottom:'1px solid rgba(255,255,255,0.04)', fontSize:'12px' },
  sideKey: { color:'#4a5a6a', fontFamily:"'Courier New', monospace" },
  sideVal: { color:'#aabbcc', textAlign:'right' },
  btnGold: { padding:'12px 24px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'14px', textTransform:'uppercase', letterSpacing:'0.5px', border:'none', borderRadius:'5px', cursor:'pointer' },
  btnGhost: { padding:'12px 20px', background:'transparent', color:'#c8a84b', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'13px', textTransform:'uppercase', letterSpacing:'0.5px', border:'1px solid rgba(200,168,75,0.3)', borderRadius:'5px', cursor:'pointer' },
  strong: { color:'#d8e0e8', fontWeight:'700' },
}
