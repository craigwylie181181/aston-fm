import Link from 'next/link';
import AstonFMLogo from '@/components/AstonFMLogo';
import LinkedInIcon from '@/components/LinkedInIcon';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Aston Facilities Management website.',
};

export default function TermsPage() {
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
          <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>Terms of Service</h1>
          <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Last updated: June 2026</p>

          <div style={{ color: '#374151', lineHeight: 1.8, fontSize: '1rem' }}>
            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>1. Acceptance of Terms</h2>
            <p>By accessing and using the Aston Facilities Management website (www.aston-fm.com), you accept and agree to be bound by these terms. If you do not agree, please do not use this website.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>2. Use of Website</h2>
            <p>This website is provided for informational purposes about our facilities management consulting services. You may browse, download, and print content for your personal, non-commercial use, provided you do not modify the content and retain all copyright notices.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>3. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of Aston Facilities Management or its content suppliers and is protected by intellectual property laws.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>4. Disclaimer</h2>
            <p>The information on this website is provided on an &ldquo;as is&rdquo; basis. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>5. Limitation of Liability</h2>
            <p>Aston Facilities Management shall not be liable for any loss or damage arising from your use of this website. This does not affect any liability that cannot be excluded or limited under applicable law.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>6. External Links</h2>
            <p>This website may contain links to external sites. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>7. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.</p>

            <h2 style={{ color: '#0d1b2a', fontSize: '1.3rem', marginTop: '2rem' }}>8. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:info@astongroupuae.com" style={{ color: '#00b67a' }}>info@astongroupuae.com</a>.</p>
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
