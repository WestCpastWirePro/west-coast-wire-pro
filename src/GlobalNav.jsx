import React, { useState, useEffect, useRef } from 'react'

// ── GlobalNav — used on every page ────────────────────────────────────────
// Props:
//   onHome       () => void  — navigate to landing
//   onNavigate   (page) => void — navigate to any page
//   onLaunchApp  () => void  — open the study app (optional, shows Try Free btn)
//   currentPage  string      — highlights active dropdown (optional)

export default function GlobalNav({ onHome, onNavigate, onLaunchApp }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const close = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [menuOpen])

  const nav = (page) => { onNavigate && onNavigate(page); setMenuOpen(false) }
  const goHome = () => { onHome && onHome(); setMenuOpen(false) }

  return (
    <>
      <style>{`
        .gn-desktop { display: flex !important; }
        .gn-hamburger { display: none !important; }
        @media (max-width: 768px) {
          .gn-desktop { display: none !important; }
          .gn-hamburger { display: flex !important; }
        }
        .gn-item:hover { color: #c8a84b !important; }
        .gn-menu-item:hover { color: #c8a84b !important; background: rgba(200,168,75,0.07) !important; }
      `}</style>

      <nav style={{position:'sticky',top:0,zIndex:500,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 clamp(12px,4vw,40px)',background:'rgba(10,16,22,0.97)',backdropFilter:'blur(12px)',borderBottom:'1px solid rgba(200,168,75,0.15)',height:'clamp(64px,12vw,120px)'}}>

        {/* LOGO */}
        <button onClick={goHome} style={{display:'flex',alignItems:'center',background:'none',border:'none',cursor:'pointer',padding:0,flexShrink:0}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" style={{height:'clamp(52px,10vw,104px)',width:'auto'}}>
            <defs>
              <linearGradient id="gnbolt" x1="0%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" style={{stopColor:'#FFD84D'}}/>
                <stop offset="60%" style={{stopColor:'#C9A227'}}/>
                <stop offset="100%" style={{stopColor:'#9B7A1A'}}/>
              </linearGradient>
              <linearGradient id="gnline" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#C9A227',stopOpacity:0}}/>
                <stop offset="20%" style={{stopColor:'#C9A227'}}/>
                <stop offset="80%" style={{stopColor:'#C9A227'}}/>
                <stop offset="100%" style={{stopColor:'#C9A227',stopOpacity:0}}/>
              </linearGradient>
            </defs>
            <rect x="32" y="38" width="3" height="124" fill="#C9A227" opacity="0.9" rx="1.5"/>
            <g transform="translate(52,52)">
              <polygon points="28,0 14,42 26,42 18,96 50,38 36,38 52,0" fill="#C9A227" opacity="0.15"/>
              <polygon points="26,2 12,44 24,44 16,94 48,36 34,36 50,2" fill="url(#gnbolt)"/>
              <polygon points="26,2 20,22 30,22 26,2" fill="#FFE88A" opacity="0.6"/>
            </g>
            <line x1="118" y1="80" x2="135" y2="80" stroke="#C9A227" strokeWidth="1" opacity="0.5"/>
            <line x1="118" y1="120" x2="135" y2="120" stroke="#C9A227" strokeWidth="1" opacity="0.5"/>
            <g transform="translate(148,0)">
              <text x="0" y="82" fontFamily="'Arial Black',Arial,sans-serif" fontSize="18" fontWeight="900" letterSpacing="8" fill="#CCCCCC">WEST COAST</text>
              <text x="-2" y="128" fontFamily="'Arial Black',Arial,sans-serif" fontSize="52" fontWeight="900" letterSpacing="2" fill="#FFFFFF">WIRE <tspan fill="#C9A227">PRO</tspan></text>
              <rect x="0" y="138" width="358" height="2" fill="url(#gnline)" rx="1"/>
              <text x="0" y="163" fontFamily="Arial,sans-serif" fontSize="13" fontWeight="400" letterSpacing="10" fill="#C9A227">TRAINING</text>
            </g>
          </svg>
        </button>

        {/* DESKTOP NAV */}
        <div className="gn-desktop" style={{alignItems:'center',gap:'28px'}}>
          <a href="/#how-it-works" style={{color:'#7a8a9a',textDecoration:'none',fontSize:'13px',fontWeight:'600',letterSpacing:'0.5px',textTransform:'uppercase',fontFamily:"'Segoe UI',Arial,sans-serif",transition:'color 0.2s'}}
            onMouseEnter={e=>e.target.style.color='#c8a84b'} onMouseLeave={e=>e.target.style.color='#7a8a9a'}>How It Works</a>
          <a href="/#pricing" style={{color:'#7a8a9a',textDecoration:'none',fontSize:'13px',fontWeight:'600',letterSpacing:'0.5px',textTransform:'uppercase',fontFamily:"'Segoe UI',Arial,sans-serif",transition:'color 0.2s'}}
            onMouseEnter={e=>e.target.style.color='#c8a84b'} onMouseLeave={e=>e.target.style.color='#7a8a9a'}>Pricing</a>
          <GnDropdown label="Study Tools" onNavigate={nav} items={[
            {label:'Start Free — No Account Needed', page:'landing'},
            {label:'Diagnostic Test', page:'diagnostic'},
            {label:'Exam Simulator', page:'simulator'},
            {label:'Missed Questions', page:'missed'},
            {label:'Study Planner', page:'planner'},
            {label:'Code Sprint — Article Navigator', page:'code-sprint'},
            {label:'NEC Reference Guide', page:'nec-ref'},
            {label:'Calculations Helper', page:'calculations'},
            {label:'Progress Dashboard', page:'progress'},
            {label:'Glossary', page:'glossary'},
          ]}/>
          <GnDropdown label="Resources" onNavigate={nav} items={[
            {label:'Blog', page:'blog'},
            {label:'CA Journeyman Exam Guide', page:'exam-info'},
            {label:'How to Pass — Study Tips', page:'study-tips'},
            {label:'Exam Day Guide', page:'exam-day'},
            {label:'NEC 2020 Changes for CA', page:'nec-2020-changes'},
            {label:'Electrician Salary in CA', page:'salary'},
            {label:'Contractor vs. Electrician', page:'contractor-vs-electrician'},
          ]}/>
          <GnDropdown label="Company" onNavigate={nav} items={[
            {label:'About', page:'about'},
            {label:'Reviews', page:'testimonials'},
            {label:'FAQ', page:'faq'},
            {label:'Contact & Support', page:'contact'},
          ]}/>
          {onLaunchApp && (
            <button onClick={onLaunchApp} style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)',color:'#0a1016',fontFamily:"'Arial Black',Arial,sans-serif",fontWeight:'900',fontSize:'13px',padding:'8px 18px',borderRadius:'4px',border:'none',cursor:'pointer',textTransform:'uppercase',letterSpacing:'0.5px'}}>
              Try Free ⚡
            </button>
          )}
          <button onClick={() => onNavigate && onNavigate('redeem')} style={{background:'none',border:'1px solid rgba(200,168,75,0.4)',color:'#c8a84b',fontFamily:"'Arial Black',Arial,sans-serif",fontWeight:'700',fontSize:'12px',padding:'8px 16px',borderRadius:'4px',cursor:'pointer',textTransform:'uppercase',letterSpacing:'0.5px',whiteSpace:'nowrap'}}>
            Restore Access
          </button>
        </div>

        {/* MOBILE — just the hamburger button, clean and simple */}
        <div className="gn-hamburger" ref={menuRef} style={{alignItems:'center'}}>
          <button onClick={e=>{e.stopPropagation();setMenuOpen(o=>!o)}} style={{background:'#c8a84b',border:'none',cursor:'pointer',padding:'10px 12px',borderRadius:'6px',display:'flex',flexDirection:'column',gap:'5px',flexShrink:0,boxShadow:'0 2px 8px rgba(200,168,75,0.4)'}} aria-label="Menu">
            <span style={{display:'block',width:'22px',height:'3px',background:'#0a1016',borderRadius:'2px',transition:'all 0.25s',transform:menuOpen?'rotate(45deg) translate(5px,6px)':'none'}}/>
            <span style={{display:'block',width:'22px',height:'3px',background:'#0a1016',borderRadius:'2px',transition:'all 0.25s',opacity:menuOpen?0:1}}/>
            <span style={{display:'block',width:'22px',height:'3px',background:'#0a1016',borderRadius:'2px',transition:'all 0.25s',transform:menuOpen?'rotate(-45deg) translate(5px,-6px)':'none'}}/>
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div style={{position:'fixed',top:'clamp(64px,12vw,120px)',left:0,right:0,zIndex:499,background:'#0d1520',borderBottom:'2px solid #c8a84b',boxShadow:'0 8px 32px rgba(0,0,0,0.7)',maxHeight:'calc(100vh - clamp(64px,12vw,120px))',overflowY:'auto'}} onClick={e=>e.stopPropagation()}>

          {/* Action buttons at TOP of drawer */}
          <div style={{padding:'16px 20px 0', display:'flex', flexDirection:'column', gap:'10px'}}>
            <button onClick={()=>{onNavigate && onNavigate('redeem');setMenuOpen(false)}} style={{background:'none',border:'2px solid #c8a84b',color:'#c8a84b',fontFamily:"'Arial Black',Arial,sans-serif",fontWeight:'900',fontSize:'14px',padding:'13px',borderRadius:'6px',cursor:'pointer',textTransform:'uppercase',width:'100%',letterSpacing:'0.5px'}}>
              🔓 Already Paid? Restore Access
            </button>
            {onLaunchApp && (
              <button onClick={()=>{onLaunchApp();setMenuOpen(false)}} style={{background:'linear-gradient(135deg,#c8a84b,#e8c878)',color:'#0a1016',fontFamily:"'Arial Black',Arial,sans-serif",fontWeight:'900',fontSize:'14px',padding:'13px',borderRadius:'6px',border:'none',cursor:'pointer',textTransform:'uppercase',width:'100%'}}>
                ⚡ Start Studying Free
              </button>
            )}
          </div>
          <div style={{height:'1px',background:'rgba(200,168,75,0.2)',margin:'16px 20px 4px'}}/>

          <MobileSection title="⚡ Study App" items={[
            ['Start Studying — Free','landing'],
            ['Code Sprint','code-sprint'],['Am I Ready? Diagnostic','diagnostic'],['Full Exam Simulator','simulator'],
            ['Missed Questions Review','missed'],['Study Planner','planner'],
            ['NEC Reference Guide','nec-ref'],['Calculations Helper','calculations'],
            ['Progress Dashboard','progress'],['Glossary','glossary'],
          ]} onNav={nav}/>
          <MobileDivider/>
          <MobileSection title="📋 Exam Resources" items={[
            ['Blog','blog'],['CA Journeyman Exam Guide','exam-info'],['How to Pass — Study Tips','study-tips'],
            ['Exam Day Guide','exam-day'],['NEC 2020 Changes for CA','nec-2020-changes'],
            ['Electrician Salary in CA','salary'],['Contractor vs. Electrician','contractor-vs-electrician'],
          ]} onNav={nav}/>
          <MobileDivider/>
          <MobileSection title="🔧 Company" items={[
            ['About','about'],['Reviews & Testimonials','testimonials'],
            ['FAQ','faq'],['Contact & Support','contact'],
          ]} onNav={nav}/>
          <div style={{height:'16px'}}/>
        </div>
      )}
    </>
  )
}

function GnDropdown({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])
  return (
    <div ref={ref} style={{position:'relative'}}>
      <button onClick={()=>setOpen(o=>!o)}
        style={{color:open?'#c8a84b':'#7a8a9a',background:'none',border:'none',cursor:'pointer',fontSize:'13px',fontWeight:'600',letterSpacing:'0.5px',textTransform:'uppercase',fontFamily:"'Segoe UI',Arial,sans-serif",display:'flex',alignItems:'center',gap:'4px',padding:'4px 0',transition:'color 0.2s'}}
        onMouseEnter={e=>e.currentTarget.style.color='#c8a84b'}
        onMouseLeave={e=>{if(!open)e.currentTarget.style.color='#7a8a9a'}}>
        {label} <span style={{fontSize:'9px',opacity:0.7}}>{open?'▲':'▼'}</span>
      </button>
      {open && (
        <div style={{position:'absolute',top:'calc(100% + 10px)',left:'50%',transform:'translateX(-50%)',background:'#1a2840',border:'1px solid rgba(200,168,75,0.25)',borderRadius:'10px',padding:'8px 0',minWidth:'220px',zIndex:600,boxShadow:'0 12px 40px rgba(0,0,0,0.5)'}}>
          {items.map(({label,page})=>(
            <button key={page}
              style={{display:'block',width:'100%',textAlign:'left',padding:'9px 18px',background:'none',border:'none',color:'#b0bec5',fontSize:'13px',cursor:'pointer',transition:'all 0.15s',fontWeight:'500',fontFamily:"'Segoe UI',Arial,sans-serif"}}
              className="gn-menu-item"
              onClick={()=>onNavigate(page)}
            >{label}</button>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileSection({ title, items, onNav }) {
  return (
    <div style={{padding:'12px 20px 4px'}}>
      <div style={{fontFamily:"'Courier New',monospace",fontSize:'10px',color:'#c8a84b',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'8px'}}>{title}</div>
      {items.map(([label,page])=>(
        <button key={page} className="gn-menu-item"
          style={{display:'block',width:'100%',background:'none',border:'none',textAlign:'left',padding:'10px 4px',color:'#aabbcc',fontSize:'14px',cursor:'pointer',borderBottom:'1px solid rgba(255,255,255,0.04)',fontFamily:"'Segoe UI',Arial,sans-serif",transition:'all 0.15s'}}
          onClick={()=>onNav(page)}>{label}</button>
      ))}
    </div>
  )
}

function MobileDivider() {
  return <div style={{height:'1px',background:'rgba(200,168,75,0.15)',margin:'4px 20px'}}/>
}
