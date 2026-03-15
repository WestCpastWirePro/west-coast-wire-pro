import { useState } from 'react'

// ── RedeemPage ────────────────────────────────────────────────────────────────
// For buyers who want to access West Coast Wire Pro on a second device.
// They enter their access code, we verify it with /api/verify-code,
// then store the access level in localStorage and send them to the app.
// ─────────────────────────────────────────────────────────────────────────────

export default function RedeemPage({ onEnterApp, onHome, onNavigate }) {
  const [code,    setCode]    = useState('')
  const [status,  setStatus]  = useState('idle')  // idle | loading | success | error
  const [tier,    setTier]    = useState('')
  const [errMsg,  setErrMsg]  = useState('')

  const formatCode = (val) => {
    // Auto-format as XXXX-XXXX-XXXX while typing
    const clean = val.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 12)
    if (clean.length > 8)  return `${clean.slice(0,4)}-${clean.slice(4,8)}-${clean.slice(8)}`
    if (clean.length > 4)  return `${clean.slice(0,4)}-${clean.slice(4)}`
    return clean
  }

  const handleChange = (e) => {
    setCode(formatCode(e.target.value))
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = async () => {
    const trimmed = code.trim()
    if (trimmed.length < 14) {
      setErrMsg('Access codes are in the format XXXX-XXXX-XXXX (12 characters).')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrMsg('')

    try {
      const res = await fetch('/api/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: trimmed }),
      })
      const data = await res.json()

      if (data.valid) {
        // Store access in localStorage
        try {
          localStorage.setItem('wrp_access', data.tier || 'standard')
          if (data.sessionId) localStorage.setItem('wrp_session', data.sessionId)
        } catch(e) {}
        setTier(data.tier || 'standard')
        setStatus('success')
      } else {
        setErrMsg(
          data.error === 'Code not found'
            ? "That code wasn't found. Double-check your Stripe receipt email and try again."
            : data.error || 'Verification failed. Please try again or contact support.'
        )
        setStatus('error')
      }
    } catch (err) {
      setErrMsg('Could not connect to the verification server. Check your internet connection and try again.')
      setStatus('error')
    }
  }

  const s = styles

  // ── SUCCESS STATE ─────────────────────────────────────────
  if (status === 'success') return (
    <div style={s.root}>
      <div style={s.centerWrap}>
        <div style={s.card}>
          <div style={{fontSize:'52px', marginBottom:'12px'}}>⚡</div>
          <div style={{...s.title, color:'#27ae60'}}>Access Unlocked!</div>
          <div style={s.tierBadge}>
            {tier === 'pro' ? 'PRO' : 'STANDARD'} ACCESS
          </div>
          <div style={s.sub}>
            {tier === 'pro'
              ? 'All 512 questions, exam simulation mode, and saved progress are now active on this device.'
              : 'All 512 questions across all 12 modules are now unlocked on this device.'}
          </div>
          <button style={s.btnGold} onClick={onEnterApp}>
            Start Studying Now ⚡
          </button>
        </div>
      </div>
    </div>
  )

  // ── ENTRY STATE ───────────────────────────────────────────
  return (
    <div style={s.root}>

      <div style={s.centerWrap}>
        <div style={s.card}>

          <div style={s.iconWrap}>🔓</div>
          <div style={s.title}>Restore Access</div>
          <div style={s.sub}>
            Already purchased? Here's how to get back in on this device.
          </div>

          {/* Primary — magic link */}
          <div style={{background:'rgba(200,168,75,0.06)', border:'1px solid rgba(200,168,75,0.25)', borderRadius:'8px', padding:'20px', marginBottom:'20px', textAlign:'left'}}>
            <div style={{fontSize:'13px', fontWeight:'700', color:'#c8a84b', textTransform:'uppercase', letterSpacing:'1px', marginBottom:'10px'}}>⚡ Easiest — Use Your Access Link</div>
            <div style={{fontSize:'13px', color:'#8a9aaa', lineHeight:'1.7'}}>
              When you purchased, we emailed you a one-click access link from <strong style={{color:'#d8e0e8'}}>no-reply@westcoastwirepro.com</strong>. Find that email and tap the link — it will restore your access instantly.<br/><br/>
              <strong style={{color:'#d8e0e8'}}>Subject line:</strong> "Your West Coast Wire Pro Access — Click to Start Studying"<br/>
              <strong style={{color:'#d8e0e8'}}>Also check:</strong> Spam, Promotions, or Junk folders.
            </div>
          </div>

          {/* Divider */}
          <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'20px'}}>
            <div style={{flex:1, height:'1px', background:'rgba(255,255,255,0.07)'}}/> 
            <span style={{fontSize:'11px', color:'#4a5a6a', textTransform:'uppercase', letterSpacing:'1px'}}>or enter a code</span>
            <div style={{flex:1, height:'1px', background:'rgba(255,255,255,0.07)'}}/>
          </div>

          {/* Fallback — access code for older purchases */}
          <div style={{fontSize:'12px', color:'#4a5a6a', marginBottom:'12px', textAlign:'left'}}>
            If you purchased before March 2026 and have a code from your receipt:
          </div>

          {/* Code input */}
          <div style={s.inputWrap}>
            <input
              style={{
                ...s.input,
                borderColor: status === 'error' ? '#e74c3c'
                           : code.length === 14 ? 'rgba(200,168,75,0.5)'
                           : 'rgba(200,168,75,0.2)',
              }}
              type="text"
              placeholder="XXXX-XXXX-XXXX"
              value={code}
              onChange={handleChange}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              maxLength={14}
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="characters"
            />
            {status === 'error' && (
              <div style={s.errMsg}>{errMsg}</div>
            )}
          </div>

          <button
            style={{...s.btnGold, opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'wait' : 'pointer'}}
            onClick={handleSubmit}
            disabled={status === 'loading'}>
            {status === 'loading' ? 'Verifying...' : 'Unlock With Code ⚡'}
          </button>

          <div style={s.helpDivider} />

          <div style={s.supportRow}>
            <span style={{fontSize:'13px', color:'#4a5a6a'}}>Can't find your email?</span>
            <button onClick={() => onNavigate ? onNavigate('contact') : onHome && onHome()} style={{...s.supportLink, background:'none', border:'none', cursor:'pointer', padding:0}}>
              Contact support →
            </button>
          </div>

        </div>

        {/* Free tip */}
        <div style={s.freeTip}>
          <span style={{color:'#4a5a6a', fontSize:'13px'}}>
            Modules 1 & 2 + 2 Table Mastery drills are always free — no code needed.
          </span>
          <button style={s.freeTipBtn} onClick={onEnterApp}>
            Try Free — Modules 1 & 2 →
          </button>
        </div>

      </div>
    </div>
  )
}

function RedeemNav({ onHome }) {
  return (
    <nav style={{position:'sticky', top:0, zIndex:100, padding:'12px 32px', display:'flex', alignItems:'center', justifyContent:'space-between', background:'rgba(10,16,22,0.96)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(200,168,75,0.15)'}}>
      <button onClick={onHome} style={{display:'flex', alignItems:'center', gap:'8px', background:'none', border:'none', cursor:'pointer', padding:0}}>
        <span style={{fontSize:'20px'}}>⚡</span>
        <span style={{fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'900', fontSize:'17px', color:'#c8a84b', letterSpacing:'1px', textTransform:'uppercase'}}>
          West Coast <span style={{color:'#d8e0e8', fontWeight:'400'}}>Wire Pro</span>
        </span>
      </button>
      <button onClick={onHome} style={{background:'none', border:'1px solid rgba(200,168,75,0.3)', color:'#c8a84b', fontSize:'13px', padding:'7px 16px', borderRadius:'4px', cursor:'pointer', fontFamily:"'Arial Black', Arial, sans-serif", fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.5px'}}>
        ← Back
      </button>
    </nav>
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
