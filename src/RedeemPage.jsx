import { useState } from 'react'

export default function RedeemPage({ onEnterApp, onHome, onNavigate }) {
  const s = styles

  return (
    <div style={s.root}>
      <div style={s.centerWrap}>
        <div style={s.card}>

          <div style={s.iconWrap}>🔓</div>
          <div style={s.title}>Restore Access</div>
          <div style={s.sub}>
            Already purchased? Here&#39;s how to get back in on this device.
          </div>

          {/* Primary — magic link */}
          <div style={{background:'rgba(200,168,75,0.06)', border:'1px solid rgba(200,168,75,0.25)', borderRadius:'8px', padding:'20px', marginBottom:'20px', textAlign:'left'}}>
            <div style={{fontSize:'13px', fontWeight:'700', color:'#c8a84b', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'10px'}}>⚡ Use Your Access Link</div>
            <div style={{fontSize:'13px', color:'#8a9aaa', lineHeight:'1.7'}}>
              When you purchased, we emailed you a one-click access link from <strong style={{color:'#d8e0e8'}}>no-reply@westcoastwirepro.com</strong>. Find that email and tap the link — it will restore your access instantly.<br/><br/>
              <strong style={{color:'#d8e0e8'}}>Subject line:</strong> &#34;Your West Coast Wire Pro Access — Click to Start Studying&#34;<br/>
              <strong style={{color:'#d8e0e8'}}>Also check:</strong> Spam, Promotions, or Junk folders.
            </div>
          </div>

          <div style={s.helpDivider} />

          <div style={s.supportRow}>
            <span style={{fontSize:'13px', color:'#4a5a6a'}}>Can&#39;t find your email or need help?</span>
            <button onClick={() => onNavigate ? onNavigate('contact') : onHome && onHome()} style={{...s.supportLink, background:'none', border:'none', cursor:'pointer', padding:0}}>
              Contact support →
            </button>
          </div>

        </div>

        <div style={s.freeTip}>
          <span style={{color:'#4a5a6a', fontSize:'13px'}}>
            Modules 1 &amp; 2 are always free —{' '}
          </span>
          <button onClick={onHome} style={{background:'none', border:'none', color:'#c8a84b', fontSize:'13px', cursor:'pointer', padding:0}}>
            start studying without an account →
          </button>
        </div>

        <div style={{textAlign:'center', marginTop:'12px'}}>
          <button onClick={onHome} style={{background:'none', border:'none', color:'#4a5a6a', fontSize:'12px', cursor:'pointer', textDecoration:'underline'}}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  root: { minHeight:'100vh', background:'#0a1016', color:'#d8e0e8', fontFamily:"'Segoe UI', Arial, sans-serif" },
  centerWrap: { display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'48px 20px', minHeight:'calc(100vh - 60px)' },
  card: { background:'#111820', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'12px', padding:'48px clamp(20px,5vw,40px)', maxWidth:'460px', width:'100%', textAlign:'center' },
  iconWrap: { fontSize:'48px', marginBottom:'12px' },
  title: { fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'26px', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', marginBottom:'12px' },
  tierBadge: { display:'inline-block', background:'rgba(200,168,75,0.12)', border:'1px solid rgba(200,168,75,0.3)', color:'#c8a84b', fontFamily:"'Courier New', monospace", fontSize:'12px', letterSpacing:'2px', padding:'5px 14px', borderRadius:'3px', marginBottom:'16px' },
  sub: { fontSize:'14px', color:'#7a8a9a', lineHeight:'1.7', marginBottom:'28px' },

  inputWrap: { marginBottom:'16px', textAlign:'left' },
  input: { width:'100%', background:'#0a1016', border:'2px solid rgba(200,168,75,0.2)', borderRadius:'6px', padding:'16px 20px', fontFamily:"'Courier New', monospace", fontSize:'22px', color:'#c8a84b', letterSpacing:'4px', textAlign:'center', outline:'none', transition:'border-color 0.2s', boxSizing:'border-box' },
  errMsg: { fontSize:'13px', color:'#e74c3c', marginTop:'8px', lineHeight:'1.5', textAlign:'left' },

  btnGold: { display:'block', width:'100%', padding:'15px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'16px', textTransform:'uppercase', letterSpacing:'0.5px', border:'none', borderRadius:'6px', cursor:'pointer', marginBottom:'0' },

  helpDivider: { height:'1px', background:'rgba(200,168,75,0.08)', margin:'24px 0' },
  helpTitle: { fontSize:'13px', fontWeight:'700', color:'#d8e0e8', marginBottom:'14px', textAlign:'left' },
  helpSteps: { display:'flex', flexDirection:'column', gap:'10px', textAlign:'left' },
  helpStep: { display:'flex', gap:'12px', alignItems:'flex-start', fontSize:'13px', color:'#7a8a9a', lineHeight:'1.6' },
  helpNum: { background:'rgba(200,168,75,0.1)', color:'#c8a84b', fontFamily:"'Courier New', monospace", fontSize:'11px', fontWeight:'700', width:'20px', height:'20px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:'1px' },

  supportRow: { display:'flex', alignItems:'center', justifyContent:'space-between' },
  supportLink: { color:'#c8a84b', fontSize:'13px', textDecoration:'none', fontWeight:'600' },

  freeTip: { display:'flex', alignItems:'center', gap:'16px', marginTop:'16px', padding:'12px 20px', background:'#111820', borderRadius:'6px', border:'1px solid rgba(200,168,75,0.08)', flexWrap:'wrap', justifyContent:'center' },
  freeTipBtn: { background:'none', border:'none', color:'#c8a84b', fontSize:'13px', fontWeight:'700', cursor:'pointer', padding:0 },
}
