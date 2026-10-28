import Link from 'next/link';
import LinkedInIcon from '@/components/LinkedInIcon';
import { CONTACT_EMAIL, LINKEDIN_URL, SERVICES } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column footer-brand">
            <h2 className="footer-heading">Aston FM</h2>
            <p>Lean FM consulting powered by AI. Strategic oversight, ESG reporting, and performance management for organisations across the UAE and international markets.</p>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="footer-linkedin">
              <LinkedInIcon size={24} /> Follow us on LinkedIn
            </a>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">Services</h2>
            <ul>
              {SERVICES.map(service => (
                <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">Company</h2>
            <ul>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#sectors">Industries</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/#case-studies">Case Studies</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h2 className="footer-heading">Contact</h2>
            <ul>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              <li>Dubai, UAE</li>
              <li>Delivering across the UAE, UK, Europe &amp; Australia</li>
            </ul>
            <h2 className="footer-heading" style={{ marginTop: '1.5rem' }}>Legal</h2>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} Aston Facilities Management. All rights reserved.</div>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
