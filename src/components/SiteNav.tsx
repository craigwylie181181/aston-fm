'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AstonFMLogo from '@/components/AstonFMLogo';
import LinkedInIcon from '@/components/LinkedInIcon';
import { LINKEDIN_URL } from '@/lib/site';

const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#sectors', label: 'Sectors' },
  { href: '/insights', label: 'Insights' },
  { href: '/#case-studies', label: 'Case Studies' },
  { href: '/#about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="nav-logo" aria-label="Aston FM home">
          <AstonFMLogo size={38} />
          <div className="nav-brand" style={{ color: 'white' }}>
            Aston <span className="nav-brand-accent">FM</span>
          </div>
        </Link>
        <div className="nav-middle">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
          ))}
        </div>
        <div className="nav-right">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="nav-linkedin" aria-label="Follow us on LinkedIn" title="Follow us on LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <Link href="/contact" className="btn-cta" style={{ textDecoration: 'none' }}>Contact Us</Link>
          <button
            className="nav-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div id="mobile-menu" className="mobile-menu">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
          ))}
        </div>
      )}
    </>
  );
}
