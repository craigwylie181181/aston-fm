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
      {/* Building icon */}
      <rect x="20" y="40" width="30" height="60" rx="3" fill="url(#brandGrad)" />
      <rect x="55" y="20" width="25" height="80" rx="3" fill="url(#brandGrad)" opacity="0.85" />
      <rect x="85" y="50" width="20" height="50" rx="3" fill="url(#brandGrad)" opacity="0.7" />
      {/* Windows */}
      <rect x="27" y="48" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="37" y="48" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="27" y="60" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="37" y="60" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="27" y="72" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="37" y="72" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="62" y="28" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="62" y="40" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="62" y="52" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="62" y="64" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="62" y="76" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="90" y="58" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="90" y="70" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      <rect x="90" y="82" width="7" height="6" rx="1" fill="white" opacity="0.9" />
      {/* Gear accent */}
      <circle cx="95" cy="30" r="14" stroke="url(#brandGrad)" strokeWidth="4" fill="none" opacity="0.5" />
      <circle cx="95" cy="30" r="5" fill="url(#brandGrad)" opacity="0.5" />
    </svg>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <AstonFMLogo size={38} />
          <div className="nav-brand">
            Aston <span className="nav-brand-accent">FM</span>
          </div>
        </div>
        <div className="nav-middle">
          <a href="#services" className="nav-link">Services</a>
          <a href="#sectors" className="nav-link">Sectors</a>
          <a href="#insights" className="nav-link">Insights</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="nav-right">
          <button className="nav-search" title="Search">&#x2315;</button>
          <button className="btn-cta">Get in Touch</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-tag">FM Consulting &amp; Advisory</div>
        <h1>Smarter facilities management, <span className="hero-highlight">without the headcount</span></h1>
        <p>Expert FM consulting, ESG reporting, and performance management for organisations that want strategic oversight without building a large in-house team. AI-powered. Lean. Results-driven.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Explore Our Services</button>
          <button className="btn-secondary">Book a Discovery Call</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">15+</div>
            <div className="hero-stat-label">Years FM Experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">30%</div>
            <div className="hero-stat-label">Avg. Cost Reduction</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">98%</div>
            <div className="hero-stat-label">Client Retention</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">What We Deliver</h2>
            <p className="section-subtitle">Lean, AI-enhanced FM consulting services that give you strategic oversight without the overhead</p>
          </div>
          <div className="services-grid">
            <Link href="/services/esg-reporting" className="service-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop)' }}>
              <div className="service-card-content">
                <h3>ESG Reporting for FM Portfolios</h3>
                <p>Scope 1 &amp; 2 carbon templates, sustainability dashboards, and narrative reporting for your ESG commitments.</p>
                <span className="service-link">Learn more &#x2192;</span>
              </div>
            </Link>
            <Link href="/services/fm-performance-dashboard" className="service-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop)' }}>
              <div className="service-card-content">
                <h3>FM Performance Dashboard</h3>
                <p>Live visibility across SLAs, maintenance, energy, costs, and actions in one unified dashboard.</p>
                <span className="service-link">Learn more &#x2192;</span>
              </div>
            </Link>
            <Link href="/services/project-management" className="service-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop)' }}>
              <div className="service-card-content">
                <h3>Project Management Oversight</h3>
                <p>Programme tracking, risk management, and contractor coordination for FM capital projects.</p>
                <span className="service-link">Learn more &#x2192;</span>
              </div>
            </Link>
            <Link href="/services/cost-reduction" className="service-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop)' }}>
              <div className="service-card-content">
                <h3>FM Cost-Reduction Review</h3>
                <p>Benchmarking against industry standards with a prioritised roadmap to reduce operational costs.</p>
                <span className="service-link">Learn more &#x2192;</span>
              </div>
            </Link>
            <Link href="/services/tender-bid-support" className="service-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop)' }}>
              <div className="service-card-content">
                <h3>Tender &amp; Bid Support</h3>
                <p>Expert bid writing, compliance matrices, and ESG responses that win more FM contracts.</p>
                <span className="service-link">Learn more &#x2192;</span>
              </div>
            </Link>
            <Link href="/services/energy-savings" className="service-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop)' }}>
              <div className="service-card-content">
                <h3>Energy-Savings Advisory</h3>
                <p>Energy audits, utility reviews, and retrofit roadmaps with clear payback timelines.</p>
                <span className="service-link">Learn more &#x2192;</span>
              </div>
            </Link>
            <Link href="/services/fm-outsourcing" className="service-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop)' }}>
              <div className="service-card-content">
                <h3>FM Outsourcing Advisory</h3>
                <p>Scope definition, SLA design, vendor evaluation, and transition planning for FM outsourcing.</p>
                <span className="service-link">Learn more &#x2192;</span>
              </div>
            </Link>
            <Link href="/services/contract-mobilisation" className="service-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop)' }}>
              <div className="service-card-content">
                <h3>Contract Mobilisation &amp; Support</h3>
                <p>End-to-end mobilisation planning, TUPE coordination, supply chain setup, and workforce onboarding for FM contract transitions.</p>
                <span className="service-link">Learn more &#x2192;</span>
              </div>
            </Link>
            <Link href="/services/back-office-automation" className="service-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop)' }}>
              <div className="service-card-content">
                <h3>Back-Office Automation</h3>
                <p>Streamlined admin, procurement, HR mobilisation, invoice processing, and workflow transformation for FM operations.</p>
                <span className="service-link">Learn more &#x2192;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="sectors">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">Strategic FM advisory across sectors where performance, compliance, and cost control matter most</p>
          </div>
          <div className="sectors-grid">
            <div className="sector-card">
              <h3>Corporate &amp; Commercial</h3>
              <p>Office portfolios, business parks, and multi-site operations needing consistent FM performance reporting and cost optimisation across locations.</p>
            </div>
            <div className="sector-card">
              <h3>Healthcare</h3>
              <p>Hospitals, clinics, and care facilities requiring strict compliance oversight, critical maintenance reporting, and ESG accountability.</p>
            </div>
            <div className="sector-card">
              <h3>Education</h3>
              <p>Universities and schools with complex estates that need transparent performance data, energy reduction strategies, and project oversight.</p>
            </div>
            <div className="sector-card">
              <h3>Government &amp; Public Sector</h3>
              <p>Public buildings and civic estates where FM transparency, value for money, and sustainability reporting are non-negotiable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="feature-split">
        <div className="section-container">
          <div className="feature-split-content">
            <div className="feature-split-text">
              <h2>Why clients choose Aston FM</h2>
              <p>We&apos;re not a traditional FM provider with hundreds of operatives. We&apos;re a lean consulting team that uses AI, data, and deep sector knowledge to give you the strategic oversight of a large FM department — at a fraction of the cost.</p>
              <ul className="feature-checklist">
                <li>AI-powered reporting that saves hours every week</li>
                <li>Senior FM expertise without full-time salary costs</li>
                <li>Flexible engagement — retainer, project, or per-bid</li>
                <li>Data-driven insights, not just opinions</li>
                <li>ESG and sustainability built into everything we do</li>
              </ul>
            </div>
            <div className="feature-split-image">
              Strategic FM Advisory
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="insights">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-subtitle">Perspectives on FM consulting, ESG compliance, and operational performance</p>
          </div>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-card-image">&#x1F4CA;</div>
              <div className="insight-card-content">
                <span className="insight-category">ESG</span>
                <h3>Getting Scope 1 &amp; 2 Right: A Practical Guide for FM Teams</h3>
                <p>How to build a reliable carbon baseline for your facilities portfolio without drowning in data collection complexity.</p>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-card-image">&#x1F916;</div>
              <div className="insight-card-content">
                <span className="insight-category">AI &amp; FM</span>
                <h3>How AI Is Changing FM Consulting — and Why It Matters</h3>
                <p>The practical ways AI is already transforming reporting, bid writing, and performance analysis in facilities management.</p>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-card-image">&#x1F4B0;</div>
              <div className="insight-card-content">
                <span className="insight-category">Cost Reduction</span>
                <h3>5 Quick Wins to Cut FM Costs Without Cutting Service Quality</h3>
                <p>Practical benchmarking and procurement strategies that consistently deliver 20-30% savings across FM portfolios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="testimonial-content">
          <div className="testimonial-quote">Aston FM gave us the strategic FM oversight we needed without the cost of building an in-house team. Their dashboards and ESG reporting transformed how our board sees facilities management.</div>
          <div className="testimonial-author">Operations Director</div>
          <div className="testimonial-role">Multi-site Corporate Portfolio, UK</div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <h2>Ready for smarter facilities management?</h2>
        <p>Book a free discovery call to explore how our lean FM consulting model can deliver the insights and savings your organisation needs.</p>
        <div className="cta-buttons">
          <button className="btn-primary">Book a Discovery Call</button>
          <button className="btn-secondary">View Our Services</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand">
              <h4>Aston FM</h4>
              <p>Lean FM consulting powered by AI. Strategic oversight, ESG reporting, and performance management for organisations that want results without the overhead.</p>
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
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Approach</a></li>
                <li><a href="#insights">Insights</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
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
