import Link from 'next/link';
import AstonFMLogo from '@/components/AstonFMLogo';
import LinkedInIcon from '@/components/LinkedInIcon';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for Aston Facilities Management — how we use cookies on our website.',
};

export default function CookiesPage() {
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
          <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>Cookie Policy</h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Last updated: June 2026</p>

          <div style={{ color: '#374151', lineHeight: 1.8, fontSize: '1rem' }}>
            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>1. What Are Cookies</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>2. How We Use Cookies</h2>
            <p>We use cookies to understand how you interact with our website, to improve your browsing experience, and to remember your preferences. We use only essential and analytics cookies.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>3. Types of Cookies We Use</h2>
            <p><strong>Essential cookies:</strong> Required for the website to function properly, including session management and security. These cannot be disabled.</p>
            <p><strong>Analytics cookies:</strong> Help us understand how visitors use our website by collecting anonymous usage data. This helps us improve our content and user experience.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>4. Third-Party Cookies</h2>
            <p>Our website is hosted on Vercel and may use Vercel Analytics. These services may set their own cookies. We do not control third-party cookies and recommend reviewing their respective privacy policies.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>5. Managing Cookies</h2>
            <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of this website.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>6. Changes to This Policy</h2>
            <p>We may update this cookie policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>7. Contact</h2>
            <p>For questions about our use of cookies, contact us at <a href="mailto:info@astongroupuae.com" style={{ color: '#00b67a' }}>info@astongroupuae.com</a>.</p>
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
