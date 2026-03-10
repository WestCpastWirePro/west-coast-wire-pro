import React, { useState, useEffect } from 'react'
export default function SalaryPage({ onLaunchApp, onNavigate }) {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return (
    <div style={s.root}>
      <SiteNav onNavigate={onNavigate} onHome={() => onNavigate('landing')} onLaunchApp={onLaunchApp} />

      <header style={s.hero}>
        <div style={s.heroGrid} />
        <div style={s.heroInner}>
          <div style={s.breadcrumb}>
            <button style={s.breadcrumbLink} onClick={() => onNavigate('landing')}>Home</button>
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
                California is consistently among the top three states for electrician wages in the country.
                The Bureau of Labor Statistics places California journeyman electricians at a median annual
                wage significantly above the national average, driven by high cost of living, strong union
                density, and robust commercial and industrial construction activity.
              </P>
              <P>
                In practical terms: a journeyman electrician working full-time in California in 2025–2026
                can expect to earn between <Strong>$45 and $75 per hour</Strong> depending on region,
                sector, and union affiliation. That works out to roughly <Strong>$90,000 to $155,000
                annually</Strong> for straight-time work, before overtime.
              </P>
              <div style={s.timelineGrid}>
                {[
                  { label:"Non-Union, Entry Journeyman", range:"$40–$52/hr", note:"Small residential/light commercial shops" },
                  { label:"Non-Union, Commercial", range:"$50–$65/hr", note:"Mid-size commercial contractors" },
                  { label:"Union IBEW (Bay Area)", range:"$68–$78/hr", note:"Plus full benefits, pension" },
                  { label:"Union IBEW (LA/SoCal)", range:"$62–$72/hr", note:"Plus full benefits, pension" },
                  { label:"Industrial / Petrochem", range:"$65–$80/hr", note:"Refinery and plant work, per diem" },
                  { label:"Government / Public Works", range:"$55–$70/hr", note:"Prevailing wage projects" },
                ].map(c => (
                  <div key={c.label} style={s.timelineCard}>
                    <div style={{fontSize:'11px', color:'#c8a84b', fontFamily:"'Courier New', monospace", marginBottom:'6px'}}>{c.label}</div>
                    <div style={{fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'18px', fontWeight:'900', color:'#d8e0e8', marginBottom:'4px'}}>{c.range}</div>
                    <div style={{fontSize:'12px', color:'#4a5a6a'}}>{c.note}</div>
                  </div>
                ))}
              </div>
              <P>
                These ranges reflect total compensation before overtime. In California, anything over 8 hours
                per day (not 40 per week) triggers overtime at 1.5x — and double time kicks in after 12 hours.
                Electricians who are willing to work overtime regularly can add <Strong>$20,000–$40,000</Strong> to
                their annual take-home without a promotion.
              </P>
            </Section>

            <Section id="regional" title="Pay by Region">
              <P>
                California's size means significant variation in wages by market. Here's how the major regions
                break down for journeyman electricians:
              </P>
              <div style={s.moduleGrid}>
                {[
                  ["Bay Area (SF, San Jose, Oakland)", "$68–$80/hr", "Highest wages in the state. Extremely high cost of living but also the largest IBEW presence. Commercial and data center work drives strong demand."],
                  ["Los Angeles / Orange County", "$60–$75/hr", "Large commercial market. Entertainment industry adds specialized work. Strong union and non-union sectors coexist."],
                  ["San Diego", "$58–$72/hr", "Military construction and defense projects create consistent demand. Slightly lower COL than LA."],
                  ["Sacramento / Central Valley", "$52–$65/hr", "Growing market with state government and data center investment. Lower COL than coastal areas."],
                  ["Inland Empire (Riverside, San Bernardino)", "$50–$63/hr", "Logistics and warehouse construction booming. Slightly lower wages, strong volume of work."],
                  ["Fresno / Bakersfield", "$45–$58/hr", "Lower wages than coastal, but COL significantly lower. Agricultural processing and oil industry work."],
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
            </Section>

            <Section id="union" title="Union vs. Non-Union">
              <P>
                This is the question every apprentice eventually has to answer. The honest answer is that
                neither is strictly better — they're different paths with different trade-offs.
              </P>
              <P>
                <Strong>Union (IBEW):</Strong> Higher base wages, but the real difference is the benefits
                package. An IBEW journeyman in the Bay Area earns roughly $78/hr in total package value —
                but only about $55 of that hits their paycheck. The rest is pension contributions, health
                insurance (typically gold-tier family coverage), and annuity. Over a 30-year career,
                the pension alone can be worth $1.5–$2M in retirement income.
              </P>
              <P>
                <Strong>Non-Union:</Strong> Often higher take-home pay at lower experience levels, more
                flexibility in the type of work you take, and typically easier to move between employers.
                The catch is that benefits are rarely comparable — health insurance is usually self-funded,
                and there's no pension. Some non-union contractors offer 401k matching, but the math rarely
                catches up to a full IBEW package.
              </P>
              <P>
                For someone focused on long-term wealth building and stability, the union path is hard to
                beat mathematically. For someone who wants to eventually start their own shop, non-union
                experience across multiple contractor types often provides more business-building education.
              </P>
            </Section>

            <Section id="factors" title="What Affects Your Pay">
              <P>These are the variables that move the needle most after you have your license:</P>
              <div style={s.methodSteps}>
                {[
                  ["SPECIALTY WORK", "Specialty certifications — fire alarm, solar, industrial controls — add $5–$15/hr in most markets. The more specialized, the less competition for your skills."],
                  ["FOREMAN / GF", "Foreman adds roughly 10–15% over journeyman scale. General foreman adds another 10%. Many journeymen reach foreman within 3–5 years of licensure."],
                  ["SHIFT WORK", "Night shift and weekend differential pay is common on commercial projects — often 10–20% premium above straight-time rate."],
                  ["PREVAILING WAGE", "Any publicly-funded project (schools, government buildings, public transit) requires prevailing wage — typically the union scale regardless of whether you're union. This is a meaningful pay floor."],
                  ["PER DIEM WORK", "Industrial and out-of-town projects often include per diem ($60–$150/day) that is tax-free. On a 6-month industrial project, this adds $10,000–$25,000 to your effective compensation."],
                  ["OVERTIME CULTURE", "Some employers actively limit overtime; others expect it. A shop that regularly runs 50–55-hour weeks effectively pays 15–35% more annually than a strict 40-hour shop at the same rate."],
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
                you can sit for the California C-10 electrical contractor exam. This is the license that
                lets you run your own electrical business. Solo electricians with a C-10 and a business
                sense routinely gross $250,000–$500,000+ per year. The ceiling is essentially your capacity.
              </P>
              <P>
                <Strong>Electrical Inspector:</Strong> City and county electrical inspector positions pay
                $90,000–$130,000 in California with government benefits and retirement. Typically requires
                the journeyman license plus relevant field experience.
              </P>
              <P>
                <Strong>Estimating / Project Management:</Strong> Many journeymen transition to office roles
                — estimating, project management, BIM coordination. These roles pay $95,000–$160,000 and
                don't require physical labor. They're also increasingly in demand as experienced tradespeople
                who understand the field are rare in management.
              </P>
            </Section>

            <Section id="worth-it" title="Is Getting the License Worth It?">
              <P>
                Short answer: yes, unambiguously.
              </P>
              <P>
                A California apprentice earns roughly $25–$35/hr in the final years of their apprenticeship.
                Passing the journeyman exam typically adds <Strong>$15–$25/hr immediately</Strong> — that's
                a $30,000–$50,000 annual raise from a single exam. The exam costs $175 to take. The
                ROI is among the best of any professional certification in the trades or otherwise.
              </P>
              <P>
                Beyond the money, the license changes your legal standing. Without a journeyman card, you
                cannot legally supervise apprentices, run your own electrical business, or work as a
                general foreman on most commercial projects. The license is the gate to everything above
                the journeyman level.
              </P>
              <P>
                The investment is a few hundred hours of study and a $175 exam fee. The return is a 30-year
                career with a six-figure income floor, strong union benefits if you choose that path, and
                a clear road to business ownership. The math isn't close.
              </P>
            </Section>

            <div style={s.ctaBlock}>
              <div style={s.ctaBolt}>⚡</div>
              <div style={s.ctaTitle}>Ready to Earn It?</div>
              <div style={s.ctaBody}>
                500 NEC-referenced practice questions across all 12 exam modules.
                Module 1 free — no account required.
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
                  { label:"NEC UPDATE", name:"NEC 2020 vs 2017 — What Changed", page:"nec-2020-changes" },
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
            <div style={s.sideTitle}>Quick Numbers</div>
            {[
              ["Entry journeyman", "$40–$52/hr"],
              ["Commercial (non-union)", "$50–$65/hr"],
              ["IBEW Bay Area", "$68–$78/hr"],
              ["Industrial", "$65–$80/hr"],
              ["Annual (avg)", "$90K–$155K"],
              ["With overtime", "$110K–$190K"],
              ["Foreman premium", "+10–15%"],
              ["C-10 contractor", "$250K+ gross"],
            ].map(([k,v]) => (
              <div key={k} style={s.sideRow}>
                <span style={s.sideKey}>{k}</span>
                <span style={{...s.sideVal, color:'#c8a84b', fontWeight:'700'}}>{v}</span>
              </div>
            ))}
          </div>
          <div style={s.sideCard}>
            <div style={s.sideTitle}>Start Studying</div>
            <p style={{fontSize:'13px', color:'#7a8a9a', lineHeight:1.6, margin:'0 0 12px', fontFamily:"'Georgia', serif"}}>
              512 practice questions. Module 1 free.
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
  hero: { padding:'64px 40px 48px', position:'relative', overflow:'hidden', borderBottom:'1px solid rgba(200,168,75,0.08)' },
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
