import LegalLayout, { Section, P, Ul, Highlight, Placeholder } from './LegalLayout.jsx'

export default function RefundPolicy({ onHome , onNavigate }) {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="We want you to feel confident purchasing West Coast Wire Pro."
      lastUpdated="January 1, 2026"
      onHome={onHome}
    >

      <Section title="Our Guarantee">
        <Highlight>
          <strong style={{color:'#d8e0e8'}}>7-Day Money-Back Guarantee.</strong> If you purchase 
          West Coast Wire Pro Standard or Pro and are not satisfied for any reason, contact us within 
          7 days of your purchase date and we will issue a full refund — no questions asked.
        </Highlight>
        <P>
          We believe in the quality of our product. If it doesn't work for you, we don't want 
          to keep your money. That's the whole policy.
        </P>
      </Section>

      <Section title="How to Request a Refund">
        <P>
          To request a refund within the 7-day window:
        </P>
        <Ul items={[
          'Email us via our contact form at westcoastwirepro.com/contact',
          'Include the email address you used at checkout',
          'Include your Stripe receipt number (found in the receipt email Stripe sends)',
          'We will process your refund within 2 business days',
          'Refunds are returned to the original payment method and typically appear within 5–10 business days depending on your bank',
        ]} />
        <P>
          You do not need to explain your reason for requesting a refund, but feedback is 
          always welcome and helps us improve the product.
        </P>
      </Section>

      <Section title="Refund Eligibility">
        <P>
          To be eligible for a refund:
        </P>
        <Ul items={[
          'Your request must be made within 7 calendar days of the original purchase date',
          'Refunds apply to first-time purchases only — a second purchase of the same product is not eligible',
          'The purchase must have been made directly through westcoastwirepro.com',
        ]} />
        <P>
          <strong style={{color:'#d8e0e8'}}>The free tier has no refund policy</strong> because 
          there is no charge.
        </P>
      </Section>

      <Section title="What Happens After a Refund">
        <P>
          Upon issuing a refund, your paid access to West Coast Wire Pro will be revoked. 
          Module 1 (the free tier) remains accessible at no charge.
        </P>
        <P>
          Your access code will be deactivated and will no longer unlock paid content.
        </P>
      </Section>

      <Section title="Exceptions">
        <P>
          We reserve the right to deny a refund request in the following circumstances:
        </P>
        <Ul items={[
          'The 7-day window has passed',
          'Evidence of access code sharing or Terms of Service violations',
          'The request appears to be fraudulent or abusive (e.g., repeated purchase-and-refund patterns)',
        ]} />
        <P>
          If you believe your refund request was incorrectly denied, please reply to our 
          email response and we will review it.
        </P>
      </Section>

      <Section title="Chargebacks">
        <P>
          We strongly prefer to resolve any payment disputes directly. If you have a concern 
          about a charge, please email us at our <a href="#" onClick={e => { e.preventDefault(); if(window.__navigateTo) window.__navigateTo("contact") }} style={{color:'#c8a84b'}}>contact form</a> 
          before initiating a chargeback with your bank or credit card company.
        </P>
        <P>
          Filing a chargeback without first contacting us may result in permanent loss of 
          access to West Coast Wire Pro and may affect your ability to make future purchases. 
          We respond to all refund requests within 2 business days.
        </P>
      </Section>

      <Section title="Technical Issues">
        <P>
          If you are experiencing a technical problem with West Coast Wire Pro — such as an access 
          code not working, content not loading, or a payment that went through but access was 
          not granted — please contact us before requesting a refund. Most technical issues 
          can be resolved quickly.
        </P>
        <Highlight>
          <strong style={{color:'#d8e0e8'}}>Technical support:</strong>{' '}
          our <a href="#" onClick={e => { e.preventDefault(); if(window.__navigateTo) window.__navigateTo("contact") }} style={{color:'#c8a84b'}}>contact form</a><br />
          We aim to respond to all support emails within 1 business day.
        </Highlight>
      </Section>

      <Section title="Contact">
        <Highlight>
          <strong style={{color:'#d8e0e8'}}>Refund requests and questions:</strong><br />
          <Placeholder label="West Coast Wire Pro Training" /><br />
          Email: our <a href="#" onClick={e => { e.preventDefault(); if(window.__navigateTo) window.__navigateTo("contact") }} style={{color:'#c8a84b'}}>contact form</a><br />
          Response time: within 2 business days<br />
          <Placeholder label="CITY, STATE, ZIP" />
        </Highlight>
      </Section>

    </LegalLayout>
  )
}
