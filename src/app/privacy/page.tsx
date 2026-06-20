import Link from 'next/link';
import AstonFMLogo from '@/components/AstonFMLogo';
import LinkedInIcon from '@/components/LinkedInIcon';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Aston Facilities Management — how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <nav className="nav">
        <Link href="/" className="nav-logo" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <AstonFMLogo size={38} />
          <div className="nav-brand">Aston <span className="nav-brand-accent">FM</span></div>
        </Link>
        <div className="nav-middle">
          <a href="/#services" className="nav-link">Services</a>
          <a href="/#sectors" className="nav-link">Sectors</a>
          <Link href="/insights" className="nav-link">Insights</Link>
          <a href="/#case-studies" className="nav-link">Case Studies</a>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
        <div className="nav-right">
          <a href="https://www.linkedin.com/company/aston-facilities-management" target="_blank" rel="noopener noreferrer" className="nav-linkedin" title="Follow us on LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <Link href="/contact" className="btn-cta" style={{ textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </nav>

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
            <p>You have the right to access, correct, or delete your personal data. You may also withdraw consent for marketing communications at any time. To exercise these rights, contact us at <a href="mailto:info@astongroupuae.com" style={{ color: '#00b67a' }}>info@astongroupuae.com</a>.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>7. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>8. Contact</h2>
            <p>For any privacy-related questions, contact us at <a href="mailto:info@astongroupuae.com" style={{ color: '#00b67a' }}>info@astongroupuae.com</a>.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-bottom">
            <div>&copy; 2026 Aston Facilities Management. All rights reserved.</div>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
