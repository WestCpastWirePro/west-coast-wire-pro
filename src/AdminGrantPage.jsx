import { useState } from 'react'

// ── AdminGrantPage ─────────────────────────────────────────────────────────
// Password-protected tool to generate manual access codes for customers
// who didn't receive their code (e.g. before Resend was set up).
// Access at: westcoastwirepro.com/admin-grant
// ──────────────────────────────────────────────────────────────────────────

export default function AdminGrantPage() {
  const [adminSecret, setAdminSecret] = useState('')
  const [email, setEmail] = useState('')
  const [tier, setTier] = useState('standard')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [authed, setAuthed] = useState(false)

  const handleAuth = () => {
    if (adminSecret.trim()) setAuthed(true)
    else setError('Enter your admin password')
  }

  const handleGenerate = async () => {
    if (!email.trim()) { setError('Enter customer email'); return }
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch('/api/admin-grant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminSecret, email: email.trim().toLowerCase(), tier }),
      })
      const data = await res.json()
      if (data.code) {
        setResult(data)
      } else {
        setError(data.error || 'Failed to generate code')
      }
    } catch (e) {
      setError('Network error')
    }
    setLoading(false)
  }

  const s = styles

  if (!authed) return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={{fontSize:'32px', marginBottom:'12px'}}>🔐</div>
        <div style={s.title}>Admin Access</div>
        <div style={s.sub}>Enter your admin password to continue</div>
        <input
          style={s.input}
          type="password"
          placeholder="Admin password"
          value={adminSecret}
          onChange={e => setAdminSecret(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAuth()}
        />
        {error && <div style={s.error}>{error}</div>}
        <button style={s.btn} onClick={handleAuth}>Continue →</button>
      </div>
    </div>
  )

  return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={{fontSize:'32px', marginBottom:'12px'}}>⚡</div>
        <div style={s.title}>Generate Access Code</div>
        <div style={s.sub}>For customers who didn't receive their code</div>

        <div style={s.fieldLabel}>Customer Email</div>
        <input
          style={s.input}
          type="email"
          placeholder="customer@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <div style={s.fieldLabel}>Tier</div>
        <div style={{display:'flex', gap:'8px', marginBottom:'20px'}}>
          {['standard', 'pro'].map(t => (
            <button key={t} onClick={() => setTier(t)}
              style={{...s.tierBtn, ...(tier === t ? s.tierBtnActive : {})}}>
              {t === 'standard' ? 'Standard — $29.99' : 'Pro — $59.99'}
            </button>
          ))}
        </div>

        {error && <div style={s.error}>{error}</div>}

        <button style={s.btn} onClick={handleGenerate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Code ⚡'}
        </button>

        {result && (
          <div style={s.result}>
            <div style={{fontSize:'13px', color:'#27ae60', fontWeight:'700', marginBottom:'8px'}}>✅ Code Generated</div>
            <div style={{fontSize:'12px', color:'#7a8a9a', marginBottom:'4px'}}>Email: {result.email}</div>
            <div style={{fontSize:'12px', color:'#7a8a9a', marginBottom:'12px'}}>Tier: {result.tier}</div>
            <div style={{fontSize:'28px', fontFamily:"'Courier New',monospace", color:'#c8a84b', letterSpacing:'4px', fontWeight:'700', marginBottom:'12px'}}>
              {result.code}
            </div>
            <button style={{...s.btn, background:'rgba(200,168,75,0.1)', border:'1px solid #c8a84b', color:'#c8a84b', marginBottom:'0'}}
              onClick={() => navigator.clipboard.writeText(result.code)}>
              Copy Code
            </button>
            <div style={{marginTop:'12px', fontSize:'12px', color:'#7a8a9a', lineHeight:'1.6'}}>
              Send this code to <strong style={{color:'#d8e0e8'}}>{result.email}</strong>.<br/>
              They enter it at <strong style={{color:'#c8a84b'}}>westcoastwirepro.com/redeem</strong>
            </div>
          </div>
        )}

        <div style={{marginTop:'20px', paddingTop:'16px', borderTop:'1px solid rgba(255,255,255,0.06)'}}>
          <button style={{background:'none', border:'none', color:'#4a5a6a', fontSize:'12px', cursor:'pointer'}}
            onClick={() => { setResult(null); setEmail(''); setError('') }}>
            Generate another code
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {minHeight:'100vh', background:'#0a1016', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px'},
  card: {background:'#111820', border:'1px solid rgba(200,168,75,0.2)', borderRadius:'12px', padding:'40px clamp(20px,5vw,40px)', maxWidth:'440px', width:'100%', textAlign:'center'},
  title: {fontFamily:"'Arial Black',Arial,sans-serif", fontSize:'22px', fontWeight:'900', textTransform:'uppercase', color:'#d8e0e8', marginBottom:'8px'},
  sub: {fontSize:'14px', color:'#7a8a9a', marginBottom:'24px'},
  fieldLabel: {fontSize:'11px', fontWeight:'700', color:'#c8a84b', letterSpacing:'1px', textTransform:'uppercase', textAlign:'left', marginBottom:'6px'},
  input: {width:'100%', background:'#0a1016', border:'1px solid rgba(200,168,75,0.3)', borderRadius:'6px', padding:'12px 16px', color:'#d8e0e8', fontSize:'15px', outline:'none', boxSizing:'border-box', marginBottom:'16px', fontFamily:"'Segoe UI',Arial,sans-serif"},
  btn: {display:'block', width:'100%', padding:'13px', background:'linear-gradient(135deg,#c8a84b,#e8c878)', color:'#0a1016', fontFamily:"'Arial Black',Arial,sans-serif", fontWeight:'900', fontSize:'15px', textTransform:'uppercase', border:'none', borderRadius:'6px', cursor:'pointer', marginBottom:'16px'},
  error: {fontSize:'13px', color:'#e74c3c', marginBottom:'12px', textAlign:'left'},
  result: {background:'rgba(39,174,96,0.06)', border:'1px solid rgba(39,174,96,0.2)', borderRadius:'8px', padding:'20px', marginTop:'8px'},
  tierBtn: {flex:1, padding:'10px', background:'rgba(200,168,75,0.05)', border:'1px solid rgba(200,168,75,0.2)', color:'#7a8a9a', borderRadius:'6px', cursor:'pointer', fontSize:'12px', fontWeight:'700'},
  tierBtnActive: {background:'rgba(200,168,75,0.15)', border:'1px solid #c8a84b', color:'#c8a84b'},
}
