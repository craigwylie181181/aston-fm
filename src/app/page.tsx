'use client';

import { useEffect, useState } from 'react';

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
            <div className="service-card">
              <div className="service-icon">&#x1F4CA;</div>
              <h3>ESG Reporting for FM Portfolios</h3>
              <p>Baseline data collection, Scope 1 &amp; 2 carbon templates, monthly sustainability dashboards, and narrative reporting to keep your ESG commitments on track.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x1F4C8;</div>
              <h3>FM Performance Dashboard</h3>
              <p>Real-time visibility across SLAs, planned maintenance, reactive works, complaints, energy usage, costs, and action tracking — all in one live dashboard.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x1F4CB;</div>
              <h3>Project Management Oversight</h3>
              <p>Programme management, risk logs, contractor coordination, and status reporting for fit-outs, refurbishments, and capital projects from start to close.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x1F4B0;</div>
              <h3>FM Cost-Reduction Review</h3>
              <p>Benchmarking your FM spend against industry standards, identifying savings opportunities, and delivering a prioritised roadmap to reduce operational costs.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x1F4DD;</div>
              <h3>Tender &amp; Bid Support</h3>
              <p>Expert proposal writing, compliance matrices, method statements, and ESG responses that help you win more contracts and stand out in competitive bids.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x26A1;</div>
              <h3>Energy-Savings Advisory</h3>
              <p>Lightweight energy audits, utility bill reviews, and retrofit roadmaps that identify quick wins and long-term savings with clear payback timelines.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x1F50D;</div>
              <h3>FM Outsourcing Advisory</h3>
              <p>Scope definition, SLA and KPI design, vendor evaluation, and transition planning to help you outsource FM services with confidence and control.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
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
                <li><a href="#">ESG Reporting</a></li>
                <li><a href="#">FM Performance Dashboard</a></li>
                <li><a href="#">Project Management</a></li>
                <li><a href="#">Cost-Reduction Review</a></li>
                <li><a href="#">Tender &amp; Bid Support</a></li>
                <li><a href="#">Energy-Savings Advisory</a></li>
                <li><a href="#">FM Outsourcing Advisory</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Approach</a></li>
                <li><a href="#">Insights</a></li>
                <li><a href="#">Contact</a></li>
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
