import React, { useState, useEffect } from 'react'
import GlobalNav            from './GlobalNav.jsx'
import LandingPage          from './LandingPage.jsx'
import WestCoastWirePro         from './WestCoastWirePro.jsx'
import SuccessPage          from './SuccessPage.jsx'
import PrivacyPolicy        from './PrivacyPolicy.jsx'
import TermsOfService       from './TermsOfService.jsx'
import RefundPolicy         from './RefundPolicy.jsx'
import DemoPage             from './DemoPage.jsx'
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

const ROUTES = {
  '/privacy': 'privacy',              '/privacy-policy': 'privacy',
  '/terms': 'terms',                  '/terms-of-service': 'terms',
  '/refund': 'refund',               '/refund-policy': 'refund',
  '/demo': 'demo',                   '/sample': 'demo',            '/try': 'demo',
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
  demo: '/demo',         redeem: '/redeem',
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
}

const PAGE_META = {
  landing:           { title: 'West Coast Wire Pro — California Electrician Exam Prep', desc: '512 practice questions for the California General Electrician (Journeyman) exam. 12 modules, NEC-referenced answers, timed mode. Module 1 free.' },
  'exam-info':       { title: 'California Journeyman Electrician Exam — Complete Guide | West Coast Wire Pro', desc: 'Everything about the California General Electrician (Journeyman) exam: eligibility, format, pass rate, what codes to study, and how to prepare.' },
  about:             { title: 'About West Coast Wire Pro — Built by a California Electrician', desc: 'Built by a 14-year electrician and trade school instructor who studied for the CA journeyman exam the hard way. No connections, no shortcuts.' },
  demo:              { title: 'Try 5 Free Sample Questions | West Coast Wire Pro', desc: 'Test yourself with 5 real-style California journeyman electrician exam practice questions. No account required.' },
  'nec-2020-changes':{ title: 'NEC 2020 vs 2017 — What Changed | West Coast Wire Pro', desc: 'AFCI expanded to all rooms, new GFCI locations, EV charging rules, solar rapid shutdown, and more. What changed in the 2020 NEC that matters for the CA journeyman exam.' },
  'study-tips':      { title: 'How to Pass the CA Journeyman Electrician Exam | West Coast Wire Pro', desc: 'A straight-talk study guide from a California journeyman and trade school instructor. Timelines, module priorities, calculation drills, California-specific content, and test day strategy.' },
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

export default function App() {
  const [view, setView] = useState('loading')

  const resolveView = () => {
    const params = new URLSearchParams(window.location.search)
    const path   = window.location.pathname

    if (params.get('success') === 'true')   { setView('success'); return }
    if (params.get('cancelled') === 'true') { window.history.replaceState({}, '', '/'); setView('landing'); return }
    if (params.has('app') || params.has('quiz') || window.location.hash === '#app') { setView('app'); return }
    if (ROUTES[path]) { const v = ROUTES[path]; setPageMeta(v); setView(v); return }
    if (path !== '/' && path !== '') { setView('404'); return }
    setPageMeta('landing')
    setView('landing')
  }

  useEffect(() => {
    resolveView()
    window.addEventListener('popstate', resolveView)
    return () => window.removeEventListener('popstate', resolveView)
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

  if (view === 'loading') return <Splash />
  // Study app has its own internal navigation — render without global nav wrapper
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
  else if (view === 'demo')        pageContent = <DemoPage onLaunchApp={launchApp} onNavigate={navigate} />
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
  else                             pageContent = <LandingPage onLaunchApp={launchApp} onNavigate={navigate} />

  return (
    <>
      {globalNav}
      <ScrollButtons />
      {pageContent}
    </>
  )
}

function Splash() {
  return (
    <div style={{minHeight:'100vh', background:'#0a1016', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div style={{fontSize:'40px'}}>⚡</div>
    </div>
  )
}
