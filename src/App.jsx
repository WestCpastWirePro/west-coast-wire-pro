import React, { useState, useEffect } from 'react'
import GlobalNav            from './GlobalNav.jsx'
import LandingPage          from './LandingPage.jsx'
import WestCoastWirePro         from './WestCoastWirePro.jsx'
import SuccessPage          from './SuccessPage.jsx'
import PrivacyPolicy        from './PrivacyPolicy.jsx'
import TermsOfService       from './TermsOfService.jsx'
import RefundPolicy         from './RefundPolicy.jsx'
import RedeemPage           from './RedeemPage.jsx'
import AboutPage            from './AboutPage.jsx'
import ExamInfoPage         from './ExamInfoPage.jsx'
import NEC2020Page          from './NEC2020Page.jsx'
import StudyTipsPage        from './StudyTipsPage.jsx'
import ContactPage             from './ContactPage.jsx'
import NotFoundPage            from './NotFoundPage.jsx'
import ProgressDashboard       from './ProgressDashboard.jsx'
import TableMasteryPage        from './TableMasteryPage.jsx'
import GlossaryPage            from './GlossaryPage.jsx'
import ExamDayPage             from './ExamDayPage.jsx'
import SalaryPage              from './SalaryPage.jsx'
import ContractorVsElectricianPage from './ContractorVsElectricianPage.jsx'
import DiagnosticPage       from './DiagnosticPage.jsx'
import ExamSimulatorPage    from './ExamSimulatorPage.jsx'
import NECReferencePage     from './NECReferencePage.jsx'
import CalculationsPage     from './CalculationsPage.jsx'
import StudyPlannerPage     from './StudyPlannerPage.jsx'
import FAQPage              from './FAQPage.jsx'
import TestimonialsPage     from './TestimonialsPage.jsx'
import MissedQuestionsPage  from './MissedQuestionsPage.jsx'
import AdminGrantPage       from './AdminGrantPage.jsx'
import BlogPage             from './BlogPage.jsx'
import BlogPostPage         from './BlogPostPage.jsx'
import { blogPosts }        from './blogPosts.js'

const ROUTES = {
  '/privacy': 'privacy',              '/privacy-policy': 'privacy',
  '/terms': 'terms',                  '/terms-of-service': 'terms',
  '/refund': 'refund',               '/refund-policy': 'refund',
  '/admin-grant': 'admin-grant',
  '/blog': 'blog',
  '/try': 'landing',
  '/redeem': 'redeem',               '/activate': 'redeem',        '/unlock': 'redeem',
  '/about': 'about',                 '/about-us': 'about',
  '/exam': 'exam-info',              '/exam-info': 'exam-info',
  '/journeyman': 'exam-info',        '/ca-journeyman-exam': 'exam-info',
  '/nec-2020': 'nec-2020-changes',   '/nec-2020-changes': 'nec-2020-changes',
  '/nec-changes': 'nec-2020-changes','/2020-nec-changes': 'nec-2020-changes',
  '/study-tips': 'study-tips',       '/how-to-pass': 'study-tips',
  '/study-guide': 'study-tips',      '/how-to-study': 'study-tips',
  '/contact': 'contact',             '/support': 'contact',
  '/glossary': 'glossary',           '/terms-glossary': 'glossary',
  '/exam-day': 'exam-day',           '/test-day': 'exam-day',          '/psi': 'exam-day',
  '/salary': 'salary',               '/electrician-salary': 'salary',  '/pay': 'salary',
  '/contractor-vs-electrician': 'contractor-vs-electrician',            '/c10-vs-journeyman': 'contractor-vs-electrician',
  '/progress': 'progress',           '/dashboard': 'progress',
  '/missed': 'missed',               '/missed-questions': 'missed',
  '/diagnostic': 'diagnostic',       '/readiness': 'diagnostic',   '/am-i-ready': 'diagnostic',
  '/simulator': 'simulator',         '/exam-simulator': 'simulator','/full-exam': 'simulator',
  '/nec-reference': 'nec-ref',       '/nec-tables': 'nec-ref',     '/reference': 'nec-ref',
  '/calculations': 'calculations',   '/calc': 'calculations',      '/math': 'calculations',
  '/planner': 'planner',             '/study-planner': 'planner',  '/schedule': 'planner',
  '/mastery': 'mastery',             '/table-mastery': 'mastery',  '/table-games': 'mastery',
  '/faq': 'faq',                     '/faqs': 'faq',               '/questions': 'faq',
  '/testimonials': 'testimonials',   '/pass-stories': 'testimonials','/reviews': 'testimonials',
}

const PAGE_PATHS = {
  landing: '/',          app: '/?app',
  redeem: '/redeem',
  privacy: '/privacy',   terms: '/terms',          refund: '/refund',
  about: '/about',       'exam-info': '/exam-info',
  'nec-2020-changes': '/nec-2020-changes',
  'study-tips': '/study-tips',
  contact: '/contact',
  glossary: '/glossary',
  'exam-day': '/exam-day',
  salary: '/salary',
  'contractor-vs-electrician': '/contractor-vs-electrician',
  progress: '/progress',
  missed: '/missed',
  diagnostic: '/diagnostic',
  simulator: '/simulator',
  'nec-ref': '/nec-reference',
  calculations: '/calculations',
  planner: '/planner',
  mastery: '/mastery',
  faq: '/faq',
  testimonials: '/testimonials',
  blog: '/blog',
}

const PAGE_META = {
  landing:           { title: 'West Coast Wire Pro — California Electrician Exam Prep', desc: '512 practice questions for the California General Electrician (Journeyman) exam. 12 modules, NEC 2020-referenced answers, timed mode. Modules 1 & 2 + Table Mastery drills free — no account needed.' },
  'exam-info':       { title: 'California Journeyman Electrician Exam — Complete Guide | West Coast Wire Pro', desc: 'Everything about the California General Electrician (Journeyman) exam: eligibility, format, pass rate, what codes to study, and how to prepare.' },
  about:             { title: 'About West Coast Wire Pro — Built by a California Electrician', desc: 'Built by a 14-year electrician and trade school instructor who studied for the CA journeyman exam the hard way. No connections, no shortcuts.' },
  'nec-2020-changes':{ title: 'NEC 2020 vs 2017 — What Changed for CA Electricians | West Coast Wire Pro', desc: 'AFCI expanded to all rooms, new GFCI locations, EV charging rules, solar rapid shutdown, and more. What changed in the 2020 NEC that matters for the CA journeyman exam.' },
  'study-tips':      { title: 'How to Pass the CA Journeyman Electrician Exam | West Coast Wire Pro', desc: 'A straight-talk study guide from a California journeyman and trade school instructor. Timelines, module priorities, calculation drills, California-specific content, and test day strategy.' },
  contact:           { title: 'Contact & Support | West Coast Wire Pro', desc: 'Questions about your purchase, access codes, or technical issues? We respond within 24 hours Monday–Friday.' },
  faq:               { title: 'Frequently Asked Questions | West Coast Wire Pro', desc: 'Common questions about the California Journeyman exam, how West Coast Wire Pro works, access codes, pricing, and what to expect on exam day.' },
  salary:            { title: 'Electrician Salary in California 2024 | West Coast Wire Pro', desc: 'How much do electricians make in California? Apprentice, journeyman, and master electrician wages by region, plus how your license affects your earning potential.' },
  'exam-day':        { title: 'Exam Day Guide — What to Expect at Your PSI Test Center | West Coast Wire Pro', desc: 'What to bring, what to expect, how the PSI testing center works, and last-minute tips from someone who has been there. The CA journeyman exam day guide.' },
  'contractor-vs-electrician': { title: 'C-10 Contractor vs. Journeyman Electrician — What\'s the Difference? | West Coast Wire Pro', desc: 'Individual electrician certification vs. contractor license — what each requires, what work each authorizes, and which path is right for you in California.' },
  glossary:          { title: 'NEC & Electrical Terms Glossary | West Coast Wire Pro', desc: 'Plain-English definitions for NEC terms, electrical concepts, and California-specific licensing terminology — built for journeyman exam prep.' },
  testimonials:      { title: 'Pass Stories — Electricians Who Passed with West Coast Wire Pro', desc: 'Real stories from California electricians who used West Coast Wire Pro to pass the journeyman exam. See how they studied and what finally made it click.' },
  diagnostic:        { title: 'Readiness Diagnostic — Are You Ready for the CA Journeyman Exam? | West Coast Wire Pro', desc: 'Take a quick diagnostic test to see which NEC modules you\'ve mastered and which ones need more work before your California journeyman exam.' },
  simulator:         { title: 'Full Exam Simulator — 110 Questions, 4.5 Hours | West Coast Wire Pro', desc: 'Simulate the real California Journeyman exam: 110 questions, 4.5-hour timer, all 12 modules weighted proportionally. Practice under real test conditions.' },
  'nec-ref':         { title: 'NEC 2020 Quick Reference Guide | West Coast Wire Pro', desc: 'Fast-access NEC 2020 tables, key code sections, and calculation formulas for the California journeyman exam — without flipping through the whole codebook.' },
  calculations:      { title: 'Electrical Calculations Helper | West Coast Wire Pro', desc: 'Step-by-step guides for load calculations, voltage drop, conduit fill, motor branch circuits, and more — the math section of the CA journeyman exam explained.' },
  planner:           { title: 'Personalized Study Planner | West Coast Wire Pro', desc: 'Build a custom study schedule for the California journeyman exam based on your weak modules, available time, and target test date.' },
  mastery:           { title: 'NEC Table Mastery Drills | West Coast Wire Pro', desc: 'Flashcard-style drills for all 10 critical NEC 2020 tables — Table 310.16, conduit fill, motor FLA, and more. The fastest way to memorize what the exam tests.' },
  progress:          { title: 'Progress Dashboard | West Coast Wire Pro', desc: 'Track your scores by module, see your improvement over time, and identify your weakest areas before the California journeyman exam.' },
  privacy:           { title: 'Privacy Policy | West Coast Wire Pro', desc: 'How West Coast Wire Pro collects, uses, and protects your information.' },
  terms:             { title: 'Terms of Service | West Coast Wire Pro', desc: 'Terms and conditions for using West Coast Wire Pro.' },
  refund:            { title: 'Refund Policy | West Coast Wire Pro', desc: '7-day refund policy for West Coast Wire Pro — full details on eligibility and how to request a refund.' },
}

function setPageMeta(view) {
  const meta = PAGE_META[view] || PAGE_META.landing
  document.title = meta.title
  let el = document.querySelector('meta[name="description"]')
  if (!el) { el = document.createElement('meta'); el.name = 'description'; document.head.appendChild(el) }
  el.content = meta.desc
}


// ── Scroll To Top / Bottom Buttons ─────────────────────────────────────────
function ScrollButtons() {
  const [show, setShow] = React.useState(false)
  const [atBottom, setAtBottom] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 300
      const bottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100
      setShow(scrolled)
      setAtBottom(bottom)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })

  if (!show) return null

  const btnStyle = {
    width: '40px', height: '40px', borderRadius: '50%',
    background: 'rgba(200,168,75,0.15)', border: '1px solid rgba(200,168,75,0.4)',
    color: '#c8a84b', fontSize: '18px', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    backdropFilter: 'blur(8px)', transition: 'all 0.2s',
  }

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '20px', zIndex: 999, display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <button style={btnStyle} onClick={scrollTop} title="Back to top" aria-label="Scroll to top">↑</button>
      {!atBottom && <button style={btnStyle} onClick={scrollBottom} title="Jump to bottom" aria-label="Scroll to bottom">↓</button>}
    </div>
  )
}

function resolveViewFromURL() {
  if (typeof window === 'undefined') return 'landing'
  const params = new URLSearchParams(window.location.search)
  const path   = window.location.pathname
  if (params.get('success') === 'true')   return 'success'
  if (params.get('cancelled') === 'true') return 'landing'
  const grantTier = params.get('grant'); const grantKey = params.get('key');
  if (grantTier && grantKey === 'wcwp2026admin' && ['standard','pro'].includes(grantTier)) {
    try { localStorage.setItem('wrp_access', grantTier) } catch(e) {}
    window.history.replaceState({}, '', '/?app'); return 'app'
  }
  // Magic link: ?grant=pro&token=XXXX-XXXX-XXXX
  if (params.get('token') && params.get('grant')) return 'verifying'
  if (params.has('app') || params.has('quiz') || window.location.hash === '#app') return 'app'
  if (path.startsWith('/blog/')) return 'blog-post'
  if (ROUTES[path]) { setPageMeta(ROUTES[path]); return ROUTES[path] }
  if (path !== '/' && path !== '') return '404'
  setPageMeta('landing')
  return 'landing'
}

export default function App() {
  const [view, setView] = useState(() => resolveViewFromURL())

  // Handle magic link token verification on mount
  useEffect(() => {
    if (view !== 'verifying') return
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    const tier  = params.get('grant')
    fetch('/api/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: token }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.valid) {
          try { localStorage.setItem('wrp_access', data.tier || tier) } catch(e) {}
          window.history.replaceState({}, '', '/?app')
          setView('app')
        } else {
          window.history.replaceState({}, '', '/')
          setView('landing')
        }
      })
      .catch(() => { window.history.replaceState({}, '', '/'); setView('landing') })
  }, [view])

  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search)
      const path   = window.location.pathname
      if (params.get('success') === 'true')   { setView('success'); return }
      if (params.get('cancelled') === 'true') { window.history.replaceState({}, '', '/'); setView('landing'); return }
      if (params.has('app') || params.has('quiz') || window.location.hash === '#app') { setView('app'); return }
      if (path.startsWith('/blog/')) { setView('blog-post'); return }
      if (ROUTES[path]) { const v = ROUTES[path]; setPageMeta(v); setView(v); return }
      if (path !== '/' && path !== '') { setView('404'); return }
      setPageMeta('landing')
      setView('landing')
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (to) => {
    window.history.pushState({}, '', PAGE_PATHS[to] || '/' + to)
    setPageMeta(to)
    setView(to)
    window.scrollTo(0, 0)
  }

  const goHome = () => navigate('landing')
  // Expose navigate globally for legal pages
  React.useEffect(() => { window.__navigateTo = navigate }, [view])
  const getAccess = () => { try { return localStorage.getItem('wrp_access') || 'free' } catch(e) { return 'free' } }

  if (view === 'verifying') return <div style={{minHeight:'100vh',background:'#0a1016',display:'flex',alignItems:'center',justifyContent:'center',color:'#c8a84b',fontFamily:"'Arial Black',Arial,sans-serif",fontSize:'18px',textTransform:'uppercase',letterSpacing:'2px'}}>⚡ Unlocking Access...</div>
  if (view === 'app') return <WestCoastWirePro onHome={goHome} onNavigate={navigate} />

  // All other views get the persistent GlobalNav
  const launchApp = () => navigate('app')
  const globalNav = <GlobalNav onHome={goHome} onNavigate={navigate} onLaunchApp={launchApp} />

  let pageContent
  if (view === '404')              pageContent = <NotFoundPage onHome={goHome} onNavigate={navigate} />
  else if (view === 'success')     pageContent = <SuccessPage onEnterApp={() => navigate('app')} />
  else if (view === 'privacy')     pageContent = <PrivacyPolicy onHome={goHome} onNavigate={navigate} />
  else if (view === 'terms')       pageContent = <TermsOfService onHome={goHome} onNavigate={navigate} />
  else if (view === 'refund')      pageContent = <RefundPolicy onHome={goHome} onNavigate={navigate} />
  else if (view === 'redeem')      pageContent = <RedeemPage onEnterApp={() => navigate('app')} onHome={goHome} onNavigate={navigate} />
  else if (view === 'about')       pageContent = <AboutPage onLaunchApp={launchApp} onNavigate={navigate} />
  else if (view === 'exam-info')   pageContent = <ExamInfoPage onLaunchApp={launchApp} onNavigate={navigate} />
  else if (view === 'nec-2020-changes') pageContent = <NEC2020Page onLaunchApp={launchApp} onNavigate={navigate} />
  else if (view === 'study-tips')  pageContent = <StudyTipsPage onLaunchApp={launchApp} onNavigate={navigate} />
  else if (view === 'missed')      pageContent = <MissedQuestionsPage onHome={goHome} onNavigate={navigate} access={getAccess()} />
  else if (view === 'diagnostic')  pageContent = <DiagnosticPage onHome={goHome} onNavigate={navigate} access={getAccess()} />
  else if (view === 'simulator')   pageContent = <ExamSimulatorPage onHome={goHome} onNavigate={navigate} access={getAccess()} />
  else if (view === 'nec-ref')     pageContent = <NECReferencePage onHome={goHome} onNavigate={navigate} />
  else if (view === 'calculations') pageContent = <CalculationsPage onHome={goHome} onNavigate={navigate} />
  else if (view === 'planner')     pageContent = <StudyPlannerPage onHome={goHome} onNavigate={navigate} access={getAccess()} />
  else if (view === 'faq')         pageContent = <FAQPage onHome={goHome} onNavigate={navigate} />
  else if (view === 'testimonials') pageContent = <TestimonialsPage onHome={goHome} onNavigate={navigate} />
  else if (view === 'contact')     pageContent = <ContactPage onHome={goHome} onNavigate={navigate} />
  else if (view === 'glossary')    pageContent = <GlossaryPage onHome={goHome} onNavigate={navigate} />
  else if (view === 'exam-day')    pageContent = <ExamDayPage onHome={goHome} onNavigate={navigate} />
  else if (view === 'salary')      pageContent = <SalaryPage onLaunchApp={launchApp} onNavigate={navigate} />
  else if (view === 'contractor-vs-electrician') pageContent = <ContractorVsElectricianPage onLaunchApp={launchApp} onNavigate={navigate} />
  else if (view === 'progress')    pageContent = <ProgressDashboard onHome={goHome} onNavigate={navigate} />
  else if (view === 'mastery')     pageContent = <TableMasteryPage onHome={goHome} onNavigate={navigate} access={getAccess()} />
  else if (view === 'admin-grant')  pageContent = <AdminGrantPage />
  else if (view === 'blog')          pageContent = <BlogPage onNavigate={navigate} />
  else if (view === 'blog-post') {
    const slug = window.location.pathname.replace('/blog/', '')
    pageContent = <BlogPostPage slug={slug} onNavigate={navigate} onLaunchApp={launchApp} />
  }
  else                             pageContent = <LandingPage onLaunchApp={launchApp} onNavigate={navigate} />

  return (
    <>
      {globalNav}
      <ScrollButtons />
      {pageContent}
    </>
  )
}


