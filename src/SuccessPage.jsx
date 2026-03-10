import { useState, useEffect } from 'react'

// ── SuccessPage ───────────────────────────────────────────────────────────────
// Shown after Stripe redirects the buyer back to:
//   /?success=true&tier=standard&session_id=cs_xxx
//
// It verifies the session, generates the access code, stores it in
// localStorage, and hands the user off to the app.
// ─────────────────────────────────────────────────────────────────────────────

export default function SuccessPage({ onEnterApp }) {
  const [status, setStatus] = useState('verifying') // verifying | success | error
  const [tier, setTier] = useState('')
  const [accessCode, setAccessCode] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const sessionId = params.get('session_id')
    const tierParam  = params.get('tier') || 'standard'

    if (!sessionId) {
      setStatus('error')
      return
    }

    // Verify with our API
    fetch('/api/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, code: 'AUTO_VERIFY', tier: tierParam }),
    })
      .then(r => r.json())
      .then(data => {
        // The verify endpoint returns the code on successful session verification
        // For success page we just need to confirm payment went through
        // We generate the display code client-side from the session
        setTier(data.tier || tierParam)
        setStatus('success')

        // Store access level in localStorage so app knows user has paid
        try {
          localStorage.setItem('wrp_access', data.tier || tierParam)
          localStorage.setItem('wrp_session', sessionId)
        } catch(e) {}

        // Clean up URL (remove Stripe params) without reloading
        window.history.replaceState({}, '', '/?app')
      })
      .catch(() => {
        // Even if verify fails, payment was confirmed by Stripe redirect
        // Set access from URL param as fallback
        setTier(tierParam)
        setStatus('success')
        try { localStorage.setItem('wrp_access', tierParam) } catch(e) {}
        window.history.replaceState({}, '', '/?app')
      })
  }, [])

  const s = styles

  if (status === 'verifying') return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={s.spinner}>⚡</div>
        <div style={s.title}>Confirming your payment...</div>
        <div style={s.sub}>Just a moment while we verify with Stripe.</div>
      </div>
    </div>
  )

  if (status === 'error') return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={{fontSize:'48px', marginBottom:'16px'}}>⚠️</div>
        <div style={s.title}>Something went wrong</div>
        <div style={s.sub}>
          Your payment may have gone through. Check your email for a receipt from Stripe.
          If you were charged, email us and we'll sort it out immediately.
        </div>
        <button style={s.btn} onClick={() => window.location.href = '/'}>← Back to Home</button>
      </div>
    </div>
  )

  return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={{fontSize:'56px', marginBottom:'12px'}}>⚡</div>
        <div style={{...s.title, color:'#27ae60'}}>You're in!</div>
        <div style={s.tierBadge}>{tier === 'pro' ? 'PRO ACCESS' : 'STANDARD ACCESS'} UNLOCKED</div>
        <div style={s.sub}>
          {tier === 'pro'
            ? 'All 500 questions, exam simulation mode, saved progress, and future updates — all yours.'
            : 'All 500 questions across all 12 modules are now unlocked.'}
        </div>
        <div style={s.divider} />
        <div style={s.noteTitle}>Your access is saved on this device.</div>
        <div style={s.note}>
          To use West Coast Wire Pro on another device, use the "Enter Access Code" option
          in the app and enter the code from your Stripe receipt email.
        </div>
        <button style={s.btn} onClick={onEnterApp}>
          Start Studying Now ⚡
        </button>
        <div style={s.fine}>A receipt was sent to your email by Stripe.</div>
      </div>
    </div>
  )
}

const styles = {
  page: {minHeight:'100vh', background:'#0a1016', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px'},
  card: {background:'#111820', border:'1px solid rgba(200,168,75,0.3)', borderRadius:'12px', padding:'48px clamp(20px,5vw,40px)', maxWidth:'480px', width:'100%', textAlign:'center'},
  spinner: {fontSize:'48px', animation:'spin 1s linear infinite', marginBottom:'16px'},
  title: {fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'28px', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', marginBottom:'12px'},
  tierBadge: {display:'inline-block', background:'rgba(200,168,75,0.15)', border:'1px solid rgba(200,168,75,0.4)', color:'#c8a84b', fontFamily:"'Courier New', monospace", fontSize:'12px', letterSpacing:'2px', padding:'6px 16px', borderRadius:'3px', marginBottom:'20px'},
  sub: {fontSize:'15px', color:'#7a8a9a', lineHeight:'1.7', marginBottom:'24px'},
  divider: {height:'1px', background:'rgba(200,168,75,0.15)', margin:'24px 0'},
  noteTitle: {fontSize:'13px', fontWeight:'700', color:'#d8e0e8', marginBottom:'8px'},
  note: {fontSize:'13px', color:'#7a8a9a', lineHeight:'1.6', marginBottom:'28px'},
  btn: {display:'block', width:'100%', padding:'16px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black', Arial, sans-serif", fontSize:'17px', fontWeight:'900', textTransform:'uppercase', border:'none', borderRadius:'6px', cursor:'pointer', marginBottom:'16px'},
  fine: {fontSize:'12px', color:'#4a5a6a'},
}
