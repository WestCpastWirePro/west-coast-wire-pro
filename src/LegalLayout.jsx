// Shared wrapper for all legal pages — consistent with site branding
// Used by: PrivacyPolicy.jsx, TermsOfService.jsx, RefundPolicy.jsx

export default function LegalLayout({ title, subtitle, lastUpdated, children, onHome }) {
  return (
    <div style={s.root}>

      {/* NAV */}
      <nav style={s.nav}>
        <button style={s.navLogo} onClick={onHome}>
          <span style={s.bolt}>⚡</span>
          <span style={s.wordmark}>West Coast <span style={s.wordmarkThin}>Wire Pro</span></span>
        </button>
        <button style={s.backBtn} onClick={onHome}>← Back to Home</button>
      </nav>

      {/* HEADER */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <div style={s.label}>// LEGAL</div>
          <h1 style={s.title}>{title}</h1>
          {subtitle && <p style={s.subtitle}>{subtitle}</p>}
          <div style={s.meta}>
            <span style={s.metaBadge}>Last updated: {lastUpdated}</span>
            <span style={s.metaBadge}>California, USA</span>
          </div>
        </div>
      </header>

      {/* FILL-IN NOTICE */}
      <div style={s.notice}>
        <span style={s.noticeIcon}>⚠️</span>
        <span>
          <strong style={{color:'#e8c878'}}>Before going live:</strong>
          {' '}Questions? <a href="/contact" style={{color:'#c8a84b'}}>Contact us via our support form</a>
        </span>
      </div>

      {/* CONTENT */}
      <main style={s.main}>
        <div style={s.content}>
          {children}
        </div>
      </main>

      {/* FOOTER */}
      <footer style={s.footer}>
        <div style={s.footerLinks}>
          <button style={s.footerLink} onClick={onHome}>Home</button>
          <span style={s.footerDot}>·</span>
          <span style={s.footerText}>© 2026 West Coast Wire Pro Training</span>
        </div>
      </footer>

    </div>
  )
}

// ── Shared prose components ──────────────────────────────────

export function Section({ title, children }) {
  return (
    <section style={sc.section}>
      <h2 style={sc.h2}>{title}</h2>
      {children}
    </section>
  )
}

export function P({ children }) {
  return <p style={sc.p}>{children}</p>
}

export function Ul({ items }) {
  return (
    <ul style={sc.ul}>
      {items.map((item, i) => (
        <li key={i} style={sc.li}>
          <span style={sc.bullet}>—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Highlight({ children }) {
  return <div style={sc.highlight}>{children}</div>
}

export function Placeholder({ label }) {
  return <span>{label}</span>
}

// ── Styles ───────────────────────────────────────────────────

const s = {
  root: { fontFamily:"'Georgia', 'Times New Roman', serif", background:'#0a1016', color:'#d8e0e8', minHeight:'100vh' },
  nav: { position:'sticky', top:0, zIndex:100, padding:'14px clamp(16px, 4vw, 40px)', display:'flex', alignItems:'center', justifyContent:'space-between', background:'rgba(10,16,22,0.96)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(200,168,75,0.15)' },
  navLogo: { display:'flex', alignItems:'center', gap:'8px', background:'none', border:'none', cursor:'pointer', padding:0 },
  bolt: { fontSize:'20px' },
  wordmark: { fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'18px', color:'#c8a84b', letterSpacing:'1px', textTransform:'uppercase' },
  wordmarkThin: { color:'#d8e0e8', fontWeight:'400' },
  backBtn: { background:'none', border:'1px solid rgba(200,168,75,0.3)', color:'#c8a84b', fontSize:'13px', padding:'7px 16px', borderRadius:'4px', cursor:'pointer', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.5px' },
  header: { background:'linear-gradient(180deg, #111820 0%, #0a1016 100%)', borderBottom:'1px solid rgba(200,168,75,0.1)', padding:'64px clamp(20px,5vw,40px) 48px' },
  headerInner: { maxWidth:'760px', margin:'0 auto' },
  label: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#c8a84b', letterSpacing:'3px', marginBottom:'16px' },
  title: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'clamp(32px, 5vw, 52px)', fontWeight:'900', textTransform:'uppercase', lineHeight:'1', color:'#d8e0e8', marginBottom:'16px' },
  subtitle: { fontSize:'16px', color:'#7a8a9a', lineHeight:'1.6', maxWidth:'560px', marginBottom:'20px' },
  meta: { display:'flex', gap:'12px', flexWrap:'wrap' },
  metaBadge: { fontFamily:"'Courier New', monospace", fontSize:'11px', color:'#4a5a6a', background:'#111820', border:'1px solid rgba(200,168,75,0.1)', padding:'4px 10px', borderRadius:'2px', letterSpacing:'0.5px' },
  notice: { background:'rgba(232,200,120,0.07)', borderLeft:'3px solid #c8a84b', margin:'0 40px', padding:'14px 20px', display:'flex', gap:'12px', alignItems:'flex-start', fontSize:'13px', color:'#aabbcc', lineHeight:'1.6' },
  noticeIcon: { fontSize:'16px', flexShrink:0, marginTop:'1px' },
  code: { fontFamily:"'Courier New', monospace", background:'rgba(200,168,75,0.15)', color:'#c8a84b', padding:'1px 6px', borderRadius:'3px', fontSize:'12px' },
  main: { padding:'48px clamp(20px,5vw,40px) 80px' },
  content: { maxWidth:'760px', margin:'0 auto' },
  footer: { borderTop:'1px solid rgba(200,168,75,0.1)', padding:'28px clamp(20px,5vw,40px)', background:'#0a1016' },
  footerLinks: { display:'flex', alignItems:'center', gap:'12px', maxWidth:'760px', margin:'0 auto' },
  footerLink: { background:'none', border:'none', color:'#7a8a9a', fontSize:'13px', cursor:'pointer', padding:0, textDecoration:'underline' },
  footerDot: { color:'#3a4a5a' },
  footerText: { fontSize:'13px', color:'#4a5a6a' },
}

const sc = {
  section: { marginBottom:'48px', paddingBottom:'48px', borderBottom:'1px solid rgba(200,168,75,0.08)' },
  h2: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'18px', fontWeight:'900', textTransform:'uppercase', color:'#c8a84b', letterSpacing:'1px', marginBottom:'16px', marginTop:0 },
  p: { fontSize:'15px', color:'#aabbcc', lineHeight:'1.8', marginBottom:'16px', marginTop:0 },
  ul: { listStyle:'none', padding:0, margin:'0 0 16px 0' },
  li: { display:'flex', gap:'12px', fontSize:'15px', color:'#aabbcc', lineHeight:'1.7', padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.03)' },
  bullet: { color:'#c8a84b', flexShrink:0, fontFamily:"'Courier New', monospace" },
  highlight: { background:'rgba(200,168,75,0.07)', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'4px', padding:'16px 20px', marginBottom:'16px', fontSize:'14px', color:'#aabbcc', lineHeight:'1.7' },
  placeholder: { background:'rgba(232,80,80,0.15)', color:'#ff9999', padding:'1px 4px', borderRadius:'3px', fontStyle:'normal', fontFamily:"'Courier New', monospace", fontSize:'13px' },
}
