import { useState } from 'react'

export default function ContactPage({ onHome, onNavigate }) {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Question', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const subjects = [
    'General Question',
    'I need my access code',
    'Technical issue with the app',
    'Refund request',
    'I passed — sharing my story!',
    'Other',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mwvrvdzj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: 'General Question', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <div style={s.root}>
      <div style={s.header}>
        <span style={{ fontSize: '28px' }}>⚡</span>
        <div style={{ flex: 1 }}>
          <div style={s.logo}>Contact & Support</div>
          <div style={{ fontSize: '12px', color: '#8899aa' }}>West Coast Wire Pro Training</div>
        </div>
        <button style={s.btnGray} onClick={onHome}>← Back</button>
      </div>

      <div style={s.body}>

        {/* CONTACT FORM */}
        <div style={s.formCard}>
          <div style={s.sectionLabel}>📬 SEND US A MESSAGE</div>
          <p style={s.introText}>
            Questions about your purchase, access codes, technical issues, refunds, or anything else —
            fill out the form below and we'll get back to you within 24 hours, Monday–Friday.
          </p>

          {status === 'success' ? (
            <div style={s.successBox}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>✅</div>
              <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '18px', color: '#27ae60', marginBottom: '8px', textTransform: 'uppercase' }}>Message Sent!</div>
              <div style={{ fontSize: '14px', color: '#aabbcc', lineHeight: '1.6' }}>
                We received your message and will respond within 24 hours, Monday–Friday.
              </div>
              <button style={{ ...s.btnGold, marginTop: '20px' }} onClick={() => setStatus('idle')}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={s.form}>
              <div style={s.row}>
                <div style={s.field}>
                  <label style={s.label}>Your Name *</label>
                  <input
                    style={s.input}
                    type="text"
                    placeholder="First and last name"
                    value={form.name}
                    onChange={set('name')}
                    required
                    onFocus={e => e.target.style.borderColor = '#c8a84b'}
                    onBlur={e => e.target.style.borderColor = '#2a3a54'}
                  />
                </div>
                <div style={s.field}>
                  <label style={s.label}>Your Email *</label>
                  <input
                    style={s.input}
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={set('email')}
                    required
                    onFocus={e => e.target.style.borderColor = '#c8a84b'}
                    onBlur={e => e.target.style.borderColor = '#2a3a54'}
                  />
                </div>
              </div>

              <div style={s.field}>
                <label style={s.label}>Subject *</label>
                <select
                  style={s.select}
                  value={form.subject}
                  onChange={set('subject')}
                  onFocus={e => e.target.style.borderColor = '#c8a84b'}
                  onBlur={e => e.target.style.borderColor = '#2a3a54'}
                >
                  {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                </select>
              </div>

              <div style={s.field}>
                <label style={s.label}>Message *</label>
                <textarea
                  style={s.textarea}
                  placeholder="Tell us what's going on and we'll help you out..."
                  value={form.message}
                  onChange={set('message')}
                  required
                  rows={6}
                  onFocus={e => e.target.style.borderColor = '#c8a84b'}
                  onBlur={e => e.target.style.borderColor = '#2a3a54'}
                />
              </div>

              {status === 'error' && (
                <div style={s.errorBox}>
                  Something went wrong — please try again in a moment.
                </div>
              )}

              <button type="submit" style={{ ...s.btnGold, width: '100%', padding: '14px', fontSize: '15px', opacity: status === 'sending' ? 0.7 : 1 }} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : '⚡ Send Message'}
              </button>
            </form>
          )}
        </div>

        {/* COMMON ISSUES */}
        <div style={s.card}>
          <div style={s.sectionLabel}>🔧 COMMON ISSUES — QUICK FIXES</div>
          {[
            {
              title: 'App is locked after purchase',
              steps: [
                'Check your email for a confirmation from Stripe with your access code.',
                "Go to the app and tap 'Enter Access Code →' on the paywall screen.",
                'Enter the code exactly as shown — it's formatted XXXX-XXXX-XXXX.',
                'Still not working? Use the contact form above and we'll fix it within 24 hours.',
              ]
            },
            {
              title: 'I can't find my access code email',
              steps: [
                'Check your spam/junk folder — Stripe confirmation emails sometimes land there.',
                "Search your inbox for 'West Coast Wire Pro' or 'receipt' from around the time you purchased.",
                'Still can't find it? Use the contact form above with the email you purchased with and we'll resend it.',
              ]
            },
            {
              title: 'My progress was lost / app reset',
              steps: [
                "Progress is saved in your browser's local storage. It can be cleared if you clear your browser history or switch browsers.",
                'To avoid this, always use the same browser on the same device.',
                'Your access code is permanent — re-enter it in the redeem screen and your access is restored instantly.',
              ]
            },
            {
              title: 'I want a refund',
              steps: [
                "We offer a 7-day refund if you've answered fewer than 50 questions.",
                'Use the contact form above and include your order number or the email you used to purchase.',
                'See our full Refund Policy for complete terms.',
              ]
            },
          ].map((issue, i) => (
            <div key={i} style={{ marginBottom: '18px', paddingBottom: '18px', borderBottom: i < 3 ? '1px solid #2a3a54' : 'none' }}>
              <div style={{ fontWeight: '700', fontSize: '14px', color: '#e8eaf0', marginBottom: '8px' }}>{issue.title}</div>
              {issue.steps.map((step, j) => (
                <div key={j} style={{ display: 'flex', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ color: '#c8a84b', fontWeight: '700', fontSize: '13px', flexShrink: 0 }}>{j + 1}.</span>
                  <span style={{ fontSize: '13px', color: '#aabbcc', lineHeight: '1.5' }}>{step}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* BUSINESS INFO */}
        <div style={s.card}>
          <div style={s.sectionLabel}>🏢 BUSINESS INFORMATION</div>
          {[
            ['Business Name', 'West Coast Wire Pro Training'],
            ['Contact', 'Use the form above'],
            ['Product', 'West Coast Wire Pro — California Electrician Exam Prep'],
            ['Response Time', 'Within 24 hours, Monday–Friday'],
          ].map(([label, val]) => (
            <div key={label} style={{ display: 'flex', gap: '12px', marginBottom: '8px', fontSize: '13px' }}>
              <span style={{ color: '#8899aa', minWidth: '120px', flexShrink: 0 }}>{label}:</span>
              <span style={{ color: '#e8eaf0' }}>{val}</span>
            </div>
          ))}
        </div>

        {/* HELPFUL LINKS */}
        <div style={s.card}>
          <div style={s.sectionLabel}>🔗 HELPFUL LINKS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              ['FAQ', 'faq'],
              ['Refund Policy', 'refund'],
              ['Redeem Access Code', 'redeem'],
              ['Privacy Policy', 'privacy'],
              ['Terms of Service', 'terms'],
            ].map(([label, page]) => (
              <button key={page} style={s.btnGray} onClick={() => onNavigate && onNavigate(page)}>{label}</button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

const s = {
  root: { fontFamily: "'Segoe UI', system-ui, sans-serif", background: '#0f1923', minHeight: '100vh', color: '#e8eaf0' },
  header: { background: 'linear-gradient(135deg,#1a2840,#0f1923)', borderBottom: '2px solid #c8a84b', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', position: 'sticky', top: 0, zIndex: 100 },
  logo: { fontSize: '20px', fontWeight: '800', color: '#c8a84b' },
  body: { padding: '12px 0 40px' },
  formCard: { background: 'linear-gradient(135deg,rgba(200,168,75,0.07),rgba(200,168,75,0.02))', border: '1px solid rgba(200,168,75,0.3)', borderRadius: '12px', padding: '24px 20px', margin: '12px 16px' },
  card: { background: '#1a2840', border: '1px solid #2a3a54', borderRadius: '12px', padding: '20px', margin: '12px 16px' },
  sectionLabel: { fontSize: '13px', color: '#c8a84b', fontWeight: '700', marginBottom: '14px', fontFamily: "'Courier New', monospace", letterSpacing: '1px' },
  introText: { fontSize: '14px', color: '#aabbcc', lineHeight: '1.7', marginBottom: '20px', marginTop: 0 },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  row: { display: 'flex', gap: '12px', flexWrap: 'wrap' },
  field: { display: 'flex', flexDirection: 'column', gap: '6px', flex: '1', minWidth: '200px' },
  label: { fontSize: '12px', color: '#8899aa', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' },
  input: { background: '#0f1923', border: '1px solid #2a3a54', borderRadius: '6px', padding: '11px 14px', color: '#e8eaf0', fontSize: '14px', outline: 'none', transition: 'border-color 0.2s', width: '100%', boxSizing: 'border-box' },
  select: { background: '#0f1923', border: '1px solid #2a3a54', borderRadius: '6px', padding: '11px 14px', color: '#e8eaf0', fontSize: '14px', outline: 'none', transition: 'border-color 0.2s', width: '100%', boxSizing: 'border-box', cursor: 'pointer' },
  textarea: { background: '#0f1923', border: '1px solid #2a3a54', borderRadius: '6px', padding: '11px 14px', color: '#e8eaf0', fontSize: '14px', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical', fontFamily: "'Segoe UI', sans-serif", width: '100%', boxSizing: 'border-box' },
  btnGold: { background: 'linear-gradient(135deg,#c8a84b,#e8c878)', color: '#0f1923', fontFamily: "'Arial Black', Arial, sans-serif", fontWeight: '900', fontSize: '14px', padding: '10px 22px', borderRadius: '6px', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'inline-block' },
  btnGray: { background: '#2a3a54', color: '#8899aa', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '13px' },
  successBox: { textAlign: 'center', padding: '32px 20px', background: 'rgba(39,174,96,0.06)', border: '1px solid rgba(39,174,96,0.2)', borderRadius: '8px' },
  errorBox: { background: 'rgba(231,76,60,0.1)', border: '1px solid rgba(231,76,60,0.3)', borderRadius: '6px', padding: '12px 16px', fontSize: '13px', color: '#e74c3c' },
}
