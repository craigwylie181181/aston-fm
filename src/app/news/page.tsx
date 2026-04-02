'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

function AstonFMLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b67a" />
          <stop offset="50%" stopColor="#00a5b5" />
          <stop offset="100%" stopColor="#3b7dd8" />
        </linearGradient>
      </defs>
      <rect x="20" y="40" width="30" height="60" rx="3" fill="white" />
      <rect x="55" y="20" width="25" height="80" rx="3" fill="white" opacity="0.85" />
      <rect x="85" y="50" width="20" height="50" rx="3" fill="white" opacity="0.7" />
      <rect x="27" y="48" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="37" y="48" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="27" y="60" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="37" y="60" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="27" y="72" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="37" y="72" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="62" y="28" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="62" y="40" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="62" y="52" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="62" y="64" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="62" y="76" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="90" y="58" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="90" y="70" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <rect x="90" y="82" width="7" height="6" rx="1" fill="url(#brandGrad)" opacity="0.9" />
      <circle cx="95" cy="30" r="14" stroke="url(#brandGrad)" strokeWidth="4" fill="none" opacity="0.5" />
      <circle cx="95" cy="30" r="5" fill="url(#brandGrad)" opacity="0.5" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

interface NewsItem {
  title: string;
  link: string;
  source: string;
  date: string;
}

export default function NewsPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/api/news?days=1095')
      .then(r => r.json())
      .then(data => {
        setItems(data.items || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const sources = ['all', ...Array.from(new Set(items.map(item => item.source)))];
  const filteredItems = filter === 'all' ? items : items.filter(item => item.source === filter);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav">
        <button onClick={scrollToTop} className="nav-logo" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <AstonFMLogo size={38} />
          <div className="nav-brand" style={{ color: 'white' }}>
            Aston <span className="nav-brand-accent">FM</span>
          </div>
        </button>
        <div className="nav-middle">
          <Link href="/#services" className="nav-link">Services</Link>
          <Link href="/#sectors" className="nav-link">Sectors</Link>
          <Link href="/#insights" className="nav-link">Insights</Link>
          <Link href="/#case-studies" className="nav-link">Case Studies</Link>
          <Link href="/#about" className="nav-link">About Us</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
          <Link href="/news" className="nav-link">News</Link>
        </div>
        <div className="nav-right">
          <a href="https://www.linkedin.com/company/aston-facilities-management" target="_blank" rel="noopener noreferrer" className="nav-linkedin" title="Follow us on LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <Link href="/contact" className="btn-cta" style={{ textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </nav>

      {/* News Page Content */}
      <div className="news-page">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Industry News</h2>
            <p className="section-subtitle">Latest news from facilities management, real estate, ESG, and the UAE business landscape</p>
          </div>

          {/* Source Filter */}
          <div className="news-filters">
            {sources.map(source => (
              <button
                key={source}
                className={`news-filter-btn ${filter === source ? 'active' : ''}`}
                onClick={() => setFilter(source)}
              >
                {source === 'all' ? 'All Sources' : source}
              </button>
            ))}
          </div>

          {/* News Grid */}
          {loading ? (
            <div className="news-loading">Loading news stories...</div>
          ) : filteredItems.length === 0 ? (
            <div className="news-loading">No news stories found.</div>
          ) : (
            <div className="news-grid">
              {filteredItems.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="news-card">
                  <div className="news-card-source">{item.source}</div>
                  <h3 className="news-card-title">{item.title}</h3>
                  <div className="news-card-date">{formatDate(item.date)}</div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand">
              <h4>Aston FM</h4>
              <p>Lean FM consulting powered by AI. Strategic oversight, ESG reporting, and performance management for organisations across the UAE and international markets.</p>
              <a href="https://www.linkedin.com/company/aston-facilities-management" target="_blank" rel="noopener noreferrer" className="footer-linkedin">
                <LinkedInIcon size={24} /> Follow us on LinkedIn
              </a>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services/esg-reporting">ESG Reporting</Link></li>
                <li><Link href="/services/fm-performance-dashboard">FM Performance Dashboard</Link></li>
                <li><Link href="/services/project-management">Project Management</Link></li>
                <li><Link href="/services/cost-reduction">Cost-Reduction Review</Link></li>
                <li><Link href="/services/tender-bid-support">Tender &amp; Bid Support</Link></li>
                <li><Link href="/services/energy-savings">Energy-Savings Advisory</Link></li>
                <li><Link href="/services/fm-outsourcing">FM Outsourcing Advisory</Link></li>
                <li><Link href="/services/contract-mobilisation">Contract Mobilisation</Link></li>
                <li><Link href="/services/back-office-automation">Back-Office Automation</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="/#about">About Us</Link></li>
                <li><Link href="/#sectors">Industries</Link></li>
                <li><Link href="/#insights">Insights</Link></li>
                <li><Link href="/#case-studies">Case Studies</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@astongroupuae.com">info@astongroupuae.com</a></li>
                <li>UAE &bull; UK &bull; Europe &bull; Australia</li>
              </ul>
              <h4 style={{ marginTop: '1.5rem' }}>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>&copy; 2026 Aston Facilities Management. All rights reserved.</div>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
