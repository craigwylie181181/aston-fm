import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Aston Facilities Management — how we collect, use, and protect your personal data.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="legal-page">
        <div className="section-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '6rem 2rem 4rem' }}>
          <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Last updated: June 2026</p>

          <div style={{ color: '#374151', lineHeight: 1.8, fontSize: '1rem' }}>
            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>1. Who We Are</h2>
            <p>Aston Facilities Management (&ldquo;Aston FM&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides facilities management consulting services. We are committed to protecting the privacy and security of your personal information.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>2. Information We Collect</h2>
            <p>We may collect the following information when you use our website or contact us:</p>
            <p>Your name, job title, company name, email address, phone number, and any message or service preferences you provide through our contact form. We also collect standard web analytics data including IP address, browser type, pages visited, and time spent on site.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>3. How We Use Your Information</h2>
            <p>We use your information to respond to your enquiries, provide our consulting services, send relevant industry updates (with your consent), improve our website and services, and comply with legal obligations.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>4. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist our operations (such as email delivery services), but only to the extent necessary and under strict confidentiality agreements.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>5. Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are retained for 24 months unless you request earlier deletion.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. You may also withdraw consent for marketing communications at any time. To exercise these rights, contact us at <a href="mailto:info@aston-fm.com" style={{ color: '#00b67a' }}>info@aston-fm.com</a>.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>7. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>8. Contact</h2>
            <p>For any privacy-related questions, contact us at <a href="mailto:info@aston-fm.com" style={{ color: '#00b67a' }}>info@aston-fm.com</a>.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
