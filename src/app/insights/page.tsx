'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AstonFMLogo from '@/components/AstonFMLogo';
import LinkedInIcon from '@/components/LinkedInIcon';

interface NewsItem {
  title: string;
  link: string;
  source: string;
  date: string;
}

const authoredArticles = [
  {
    slug: 'esg-scope-guide',
    title: 'Understanding ESG Scope 1, 2 & 3 Emissions for Facility Managers',
    date: '2026-03-12',
    category: 'ESG',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
  },
  {
    slug: 'ai-changing-fm',
    title: 'How AI Is Transforming Facilities Management in 2026',
    date: '2026-03-05',
    category: 'AI & FM',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
  },
  {
    slug: 'fm-cost-quick-wins',
    title: '5 Quick Wins to Reduce FM Costs Without Compromising Quality',
    date: '2026-02-26',
    category: 'Cost Reduction',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
  },
  {
    slug: 'uae-fm-market-outlook',
    title: 'UAE Facilities Management Market Outlook 2026–2030',
    date: '2026-02-19',
    category: 'UAE Market',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
  },
  {
    slug: 'contract-mobilisation-best-practices',
    title: 'Contract Mobilisation Best Practices: Lessons from 50+ Transitions',
    date: '2026-02-12',
    category: 'Mobilisation',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
  },
  {
    slug: 'energy-management-gulf',
    title: 'Energy Management in the Gulf: Strategies for 30%+ Savings',
    date: '2026-02-05',
    category: 'Energy',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
  },
];

export default function InsightsPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');

  useEffect(() => {
    fetch('/api/news?days=1095')
      .then(r => r.json())
      .then(data => {
        setNewsItems(data.items || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Map sources to service categories
  const sourceToCategory: Record<string, string> = {
    'FacilitiesNet': 'Facilities Management',
    'FM World': 'Facilities Management',
    'FMLink': 'Facilities Management',
    'Facilitate': 'Facilities Management',
    'Arabian Business RE': 'Real Estate',
    'Zawya Real Estate': 'Real Estate',
    'Property Funds World': 'Real Estate',
    'ESG Today': 'ESG & Sustainability',
    'GreenBiz': 'ESG & Sustainability',
    'edie': 'ESG & Sustainability',
    'ESG News': 'ESG & Sustainability',
  };
  const getCategory = (source: string) => sourceToCategory[source] || 'Industry';
  const categories = ['all', 'Facilities Management', 'Real Estate', 'ESG & Sustainability'];
  const filteredNews = sourceFilter === 'all' ? newsItems : newsItems.filter(item => getCategory(item.source) === sourceFilter);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav">
        <Link href="/" className="nav-logo" style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
          <AstonFMLogo size={38} />
          <div className="nav-brand" style={{ color: 'white' }}>
            Aston <span className="nav-brand-accent">FM</span>
          </div>
        </Link>
        <div className="nav-middle">
          <Link href="/#services" className="nav-link">Services</Link>
          <Link href="/#sectors" className="nav-link">Sectors</Link>
          <Link href="/insights" className="nav-link">Insights</Link>
          <Link href="/#case-studies" className="nav-link">Case Studies</Link>
          <Link href="/#about" className="nav-link">About Us</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
        </div>
        <div className="nav-right">
          <a href="https://www.linkedin.com/company/aston-facilities-management" target="_blank" rel="noopener noreferrer" className="nav-linkedin" title="Follow us on LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <Link href="/contact" className="btn-cta" style={{ textDecoration: 'none' }}>Contact Us</Link>
          <button className="nav-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/#sectors" onClick={() => setMobileMenuOpen(false)}>Sectors</Link>
          <Link href="/insights" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
          <Link href="/#case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Hero */}
      <div className="insights-page-hero">
        <div className="section-container">
          <div className="section-header">
            <h1 className="section-title" style={{ color: 'white' }}>Insights &amp; Industry News</h1>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Expert articles from Aston FM plus curated industry news from FM, real estate, and ESG sources
            </p>
          </div>
          {/* Tab filters */}
          <div className="insights-tabs">
            <button
              className={`insights-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`insights-tab ${filter === 'articles' ? 'active' : ''}`}
              onClick={() => setFilter('articles')}
            >
              Aston FM Articles
            </button>
            <button
              className={`insights-tab ${filter === 'news' ? 'active' : ''}`}
              onClick={() => setFilter('news')}
            >
              Industry News
            </button>
          </div>
        </div>
      </div>

      {/* Aston FM Articles Section */}
      {(filter === 'all' || filter === 'articles') && (
        <section className="insights-articles-section">
          <div className="section-container">
            {filter === 'all' && (
              <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Our Articles</h2>
            )}
            <div className="insights-grid">
              {authoredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="insight-card"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="insight-card-image" style={{
                    backgroundImage: `linear-gradient(135deg, rgba(13, 27, 42, 0.7), rgba(26, 53, 80, 0.7)), url(${article.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }} />
                  <div className="insight-card-content">
                    <span className="insight-category">{article.category}</span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.4, marginBottom: '0.5rem' }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>{formatDate(article.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry News Section */}
      {(filter === 'all' || filter === 'news') && (
        <section className="insights-news-section">
          <div className="section-container">
            {filter === 'all' && (
              <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Industry News</h2>
            )}
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Curated news from across FM, real estate, and ESG — updated daily
            </p>

            {/* Category Filter */}
            <div className="news-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`news-filter-btn ${sourceFilter === cat ? 'active' : ''}`}
                  onClick={() => setSourceFilter(cat)}
                >
                  {cat === 'all' ? 'All Categories' : cat}
                </button>
              ))}
            </div>

            {/* News Grid */}
            {loading ? (
              <div className="news-loading">Loading industry news...</div>
            ) : filteredNews.length === 0 ? (
              <div className="news-loading">No news stories found.</div>
            ) : (
              <div className="news-grid">
                {filteredNews.map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="news-card">
                    <div className="news-card-source">{getCategory(item.source)}</div>
                    <h3 className="news-card-title">{item.title}</h3>
                    <div className="news-card-date">{item.source} &middot; {formatDate(item.date)}</div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

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
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="/#about">About Us</Link></li>
                <li><Link href="/#sectors">Industries</Link></li>
                <li><Link href="/insights">Insights</Link></li>
                <li><Link href="/#case-studies">Case Studies</Link></li>
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
