import LegalLayout, { Section, P, Ul, Highlight, Placeholder } from './LegalLayout.jsx'

export default function PrivacyPolicy({ onHome }) {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="We collect as little as possible and never sell your data."
      lastUpdated="January 1, 2026"
      onHome={onHome}
    >

      <Section title="1. Who We Are">
        <P>
          West Coast Wire Pro is operated by <Placeholder label="West Coast Wire Pro Training" />, 
          located in <Placeholder label="CITY, STATE" /> ("<strong style={{color:'#d8e0e8'}}>we</strong>," 
          "<strong style={{color:'#d8e0e8'}}>us</strong>," or "<strong style={{color:'#d8e0e8'}}>our</strong>"). 
          We operate the website westcoastwirepro.com and the West Coast Wire Pro exam preparation application.
        </P>
        <P>
          If you have any questions about this Privacy Policy, contact us at:{' '}
          our <a href="#" onClick={e => { e.preventDefault(); if(window.__navigateTo) window.__navigateTo("contact") }} style={{color:'#c8a84b'}}>contact form</a>
        </P>
      </Section>

      <Section title="2. Information We Collect">
        <P>We collect only what is necessary to provide our service:</P>
        <Highlight>
          <strong style={{color:'#d8e0e8'}}>What we collect directly:</strong> When you make a purchase, 
          Stripe collects your name, email address, and payment details on our behalf. We receive your 
          email address and the details of your purchase (plan tier, amount, date). We do not receive 
          or store your full credit card number — Stripe handles all payment data.
        </Highlight>
        <Ul items={[
          'Email address (provided at checkout via Stripe)',
          'Purchase details: plan purchased, amount paid, date of transaction',
          'Browser type and device information (collected automatically by our hosting provider, Vercel)',
          'IP address (collected automatically by Vercel for security and abuse prevention)',
        ]} />
        <P>
          <strong style={{color:'#d8e0e8'}}>What we do NOT collect:</strong> We do not require you to 
          create an account. We do not collect your name unless you provide it at checkout. We do not 
          collect information about your employment, licensing status, or exam results. We do not use 
          tracking pixels or behavioral ad targeting.
        </P>
      </Section>

      <Section title="3. How We Use Your Information">
        <Ul items={[
          'To process your payment and provide access to the product you purchased',
          'To send you a receipt and your access credentials via email',
          'To respond to support requests you send us',
          'To detect and prevent fraudulent transactions',
          'To comply with our legal obligations',
        ]} />
        <P>
          We do not use your information to send marketing emails unless you explicitly opt in. 
          We do not sell, rent, or share your personal information with third parties for their 
          own marketing purposes.
        </P>
      </Section>

      <Section title="4. Third-Party Services">
        <P>
          We use a small number of third-party services to operate West Coast Wire Pro. Each has its 
          own privacy policy and data practices:
        </P>
        <Ul items={[
          'Stripe (stripe.com) — payment processing. Stripe collects and stores your payment card details, billing address, and transaction history. Stripe is PCI-DSS Level 1 certified. See stripe.com/privacy.',
          'Vercel (vercel.com) — website hosting and serverless functions. Vercel may log request metadata including IP addresses for security purposes. See vercel.com/legal/privacy-policy.',
          'Google Fonts (fonts.googleapis.com) — typography. Google may collect your IP address when fonts are loaded. See policies.google.com/privacy.',
        ]} />
      </Section>

      <Section title="5. Cookies and Local Storage">
        <P>
          West Coast Wire Pro does not use tracking cookies or advertising cookies.
        </P>
        <P>
          We use your browser's <strong style={{color:'#d8e0e8'}}>localStorage</strong> (a client-side 
          storage mechanism) to remember whether you have purchased access, so you do not need to 
          re-enter your access code every visit. This data is stored only on your device and is never 
          transmitted to our servers. You can clear it at any time by clearing your browser's site data.
        </P>
      </Section>

      <Section title="6. Data Retention">
        <P>
          Stripe retains your payment records as required by financial regulations (typically 7 years). 
          We retain your email address and purchase record for as long as your access is active and for 
          a reasonable period afterward to handle support requests. You may request deletion of your 
          information at any time by contacting us at our <a href="#" onClick={e => { e.preventDefault(); if(window.__navigateTo) window.__navigateTo("contact") }} style={{color:'#c8a84b'}}>contact form</a>.
        </P>
      </Section>

      <Section title="7. California Privacy Rights (CCPA)">
        <P>
          If you are a California resident, the California Consumer Privacy Act (CCPA) gives you the 
          following rights:
        </P>
        <Ul items={[
          'Right to know: You may request a list of the personal information we have collected about you.',
          'Right to delete: You may request that we delete your personal information, subject to certain exceptions.',
          'Right to opt out of sale: We do not sell your personal information. There is nothing to opt out of.',
          'Right to non-discrimination: We will not discriminate against you for exercising any of these rights.',
        ]} />
        <P>
          To exercise any of these rights, email us at our <a href="#" onClick={e => { e.preventDefault(); if(window.__navigateTo) window.__navigateTo("contact") }} style={{color:'#c8a84b'}}>contact form</a>. 
          We will respond within 45 days as required by law.
        </P>
      </Section>

      <Section title="8. Children's Privacy">
        <P>
          West Coast Wire Pro is intended for adults preparing for professional licensing examinations. 
          We do not knowingly collect personal information from anyone under the age of 18. If you 
          believe a minor has provided us with personal information, please contact us and we will 
          delete it promptly.
        </P>
      </Section>

      <Section title="9. Security">
        <P>
          We take reasonable measures to protect your information. All data in transit is encrypted 
          via HTTPS/TLS. Payment processing is handled entirely by Stripe, which maintains the highest 
          level of PCI compliance. We do not store credit card numbers on our servers.
        </P>
        <P>
          No method of transmission over the internet is 100% secure. While we strive to protect 
          your information, we cannot guarantee absolute security.
        </P>
      </Section>

      <Section title="10. Changes to This Policy">
        <P>
          We may update this Privacy Policy from time to time. When we do, we will update the 
          "Last updated" date at the top of this page. For significant changes, we will notify 
          purchasers via the email address on file. Your continued use of West Coast Wire Pro after 
          changes are posted constitutes acceptance of the updated policy.
        </P>
      </Section>

      <Section title="11. Contact">
        <Highlight>
          <strong style={{color:'#d8e0e8'}}>Privacy questions or data requests:</strong><br />
          <Placeholder label="West Coast Wire Pro Training" /><br />
          Email: our <a href="#" onClick={e => { e.preventDefault(); if(window.__navigateTo) window.__navigateTo("contact") }} style={{color:'#c8a84b'}}>contact form</a><br />
          <Placeholder label="CITY, STATE, ZIP" />
        </Highlight>
      </Section>

    </LegalLayout>
  )
}
