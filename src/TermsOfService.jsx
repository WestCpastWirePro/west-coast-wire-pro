import LegalLayout, { Section, P, Ul, Highlight, Placeholder } from './LegalLayout.jsx'

export default function TermsOfService({ onHome , onNavigate }) {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Please read these terms before purchasing or using West Coast Wire Pro."
      lastUpdated="January 1, 2026"
      onHome={onHome}
    >

      <Section title="1. Agreement to Terms">
        <P>
          These Terms of Service ("Terms") are a legally binding agreement between you and 
          <Placeholder label="West Coast Wire Pro Training" /> ("we," "us," or "our"), 
          the operator of West Coast Wire Pro at westcoastwirepro.com. By accessing or using West Coast Wire Pro — 
          including the free tier — you agree to be bound by these Terms. If you do not agree, 
          do not use the service.
        </P>
        <P>
          These Terms were last updated on <Placeholder label="DATE" />. We reserve the right to 
          update them at any time. Continued use after updates constitutes acceptance.
        </P>
      </Section>

      <Section title="2. What West Coast Wire Pro Is">
        <P>
          West Coast Wire Pro is a digital exam preparation tool containing original practice questions, 
          explanations, and study aids designed to help individuals prepare for the California 
          General Electrician (Journeyman) certification examination.
        </P>
        <Highlight>
          <strong style={{color:'#e8c878'}}>Important:</strong> West Coast Wire Pro is an independent 
          study aid. It is not affiliated with, endorsed by, or licensed by PSI Services, the 
          California Department of Industrial Relations (DIR), the Division of Labor Standards 
          Enforcement (DLSE), NFPA, or any other official examination body or standards organization. 
          The actual examination questions are proprietary and are not reproduced here.
        </Highlight>
      </Section>

      <Section title="3. Access and License">
        <P>
          Upon completing a valid purchase, we grant you a personal, non-exclusive, 
          non-transferable, limited license to access and use West Coast Wire Pro for your 
          own personal study purposes.
        </P>
        <P>
          <strong style={{color:'#d8e0e8'}}>Free tier:</strong> Access to Module 1 (30 questions) 
          is provided at no charge with no purchase necessary.
        </P>
        <P>
          <strong style={{color:'#d8e0e8'}}>Paid tiers:</strong> Access to all modules is granted 
          upon verified payment. Your access is tied to the device and browser where you activate 
          it, and to the access code issued at purchase.
        </P>
        <P>You may not:</P>
        <Ul items={[
          'Share your access code with others',
          'Copy, reproduce, distribute, or publicly display any questions, answers, or explanations from West Coast Wire Pro',
          'Resell or sublicense access to any portion of the service',
          'Use automated tools, bots, or scrapers to extract content',
          'Attempt to reverse-engineer, decompile, or access the underlying source code (beyond what is publicly available)',
          'Use West Coast Wire Pro to create a competing product',
        ]} />
      </Section>

      <Section title="4. Payments and Pricing">
        <P>
          All prices are listed in US dollars. Payments are processed securely by Stripe. 
          We do not store your credit card information.
        </P>
        <P>
          All purchases are one-time payments. There are no recurring charges, no automatic renewals, 
          and no subscription fees unless explicitly stated at the time of purchase.
        </P>
        <P>
          We reserve the right to change pricing at any time. Price changes do not affect 
          access already purchased.
        </P>
      </Section>

      <Section title="5. Refund Policy">
        <P>
          Our refund policy is described separately at{' '}
          <strong style={{color:'#d8e0e8'}}>westcoastwirepro.com/refund-policy</strong>.
          That policy is incorporated into these Terms by reference.
        </P>
      </Section>

      <Section title="6. No Guarantee of Exam Results">
        <Highlight>
          <strong style={{color:'#e8c878'}}>West Coast Wire Pro does not guarantee that you will pass 
          any examination.</strong> Practice questions are intended to help you build knowledge 
          and familiarity with exam topics — they are not predictions of what will appear on 
          your actual exam. Exam performance depends on many factors outside our control, 
          including your prior experience, study habits, and exam-day conditions.
        </Highlight>
        <P>
          We make reasonable efforts to ensure the accuracy of content, including code references. 
          However, codes and regulations change. Always verify critical information against the 
          current official edition of the applicable code.
        </P>
      </Section>

      <Section title="7. Intellectual Property">
        <P>
          All content in West Coast Wire Pro — including but not limited to questions, answer choices, 
          explanations, code references, software, design, and text — is the intellectual property 
          of <Placeholder label="West Coast Wire Pro Training" /> and is protected by 
          United States copyright law.
        </P>
        <P>
          References to the National Electrical Code (NEC/NFPA 70), California Electrical Code (CEC), 
          Title 8 California Code of Regulations, NFPA 70E, and other codes are made for educational 
          and identification purposes only. These codes are the property of their respective owners 
          (NFPA, California Department of Industrial Relations, etc.).
        </P>
        <P>
          Your purchase grants you a limited license to use the content for personal study. 
          It does not transfer any ownership rights to you.
        </P>
      </Section>

      <Section title="8. Disclaimer of Warranties">
        <P>
          West Coast Wire Pro is provided "as is" and "as available" without warranties of any kind, 
          either express or implied, including but not limited to implied warranties of 
          merchantability, fitness for a particular purpose, or non-infringement.
        </P>
        <P>
          We do not warrant that the service will be uninterrupted, error-free, or free of 
          viruses or other harmful components. We do not warrant that any errors will be corrected.
        </P>
      </Section>

      <Section title="9. Limitation of Liability">
        <P>
          To the maximum extent permitted by applicable law, in no event shall 
          <Placeholder label="West Coast Wire Pro Training" />, its officers, employees, 
          or affiliates be liable for any indirect, incidental, special, consequential, or punitive 
          damages, including but not limited to lost profits, lost revenue, loss of data, or failure 
          to pass any examination, even if advised of the possibility of such damages.
        </P>
        <P>
          Our total liability to you for any claims arising out of or relating to these Terms or 
          West Coast Wire Pro shall not exceed the amount you paid us in the twelve (12) months preceding 
          the claim.
        </P>
      </Section>

      <Section title="10. Governing Law and Disputes">
        <P>
          These Terms are governed by the laws of the State of California, without regard to 
          its conflict of law provisions.
        </P>
        <P>
          Any dispute arising out of or relating to these Terms or West Coast Wire Pro shall first 
          be addressed by contacting us at our <a href="#" onClick={e => { e.preventDefault(); if(window.__navigateTo) window.__navigateTo("contact") }} style={{color:'#c8a84b'}}>contact form</a>. 
          We will make a good-faith effort to resolve any dispute informally within 30 days.
        </P>
        <P>
          If informal resolution fails, disputes shall be resolved by binding arbitration 
          administered by JAMS in <Placeholder label="CITY, CALIFORNIA" />, except that 
          either party may seek injunctive relief in court for intellectual property violations.
        </P>
      </Section>

      <Section title="11. Termination">
        <P>
          We reserve the right to suspend or terminate your access to West Coast Wire Pro if you 
          violate these Terms, including but not limited to sharing access codes, distributing 
          content, or attempting to circumvent payment. No refund will be issued for termination 
          due to Terms violations.
        </P>
      </Section>

      <Section title="12. Contact">
        <Highlight>
          <strong style={{color:'#d8e0e8'}}>Questions about these Terms:</strong><br />
          <Placeholder label="West Coast Wire Pro Training" /><br />
          Email: our <a href="#" onClick={e => { e.preventDefault(); if(window.__navigateTo) window.__navigateTo("contact") }} style={{color:'#c8a84b'}}>contact form</a><br />
          <Placeholder label="CITY, STATE, ZIP" />
        </Highlight>
      </Section>

    </LegalLayout>
  )
}
