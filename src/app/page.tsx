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
          <a href="#services" className="nav-link">What We Do</a>
          <a href="#sectors" className="nav-link">Sectors</a>
          <a href="#insights" className="nav-link">Insights</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#careers" className="nav-link">Careers</a>
        </div>
        <div className="nav-right">
          <button className="nav-search" title="Search">&#x2315;</button>
          <button className="btn-cta">Contact Us</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-tag">Integrated Facilities Management</div>
        <h1>Transforming the way <span className="hero-highlight">facilities</span> are managed</h1>
        <p>Delivering innovative, technology-driven facilities management solutions that help organisations reduce costs, improve efficiency, and create better working environments.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Our Services</button>
          <button className="btn-secondary">Learn More</button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">15+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">500+</div>
            <div className="hero-stat-label">Projects Delivered</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">98%</div>
            <div className="hero-stat-label">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive facilities management solutions tailored to your organisation&apos;s needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">&#x1F527;</div>
              <h3>Hard FM Services</h3>
              <p>Professional maintenance of building systems and infrastructure including HVAC, electrical systems, plumbing, and fire safety systems.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x1F9F9;</div>
              <h3>Soft FM Services</h3>
              <p>Comprehensive facility support services including professional cleaning, security, waste management, and landscaping solutions.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x26A1;</div>
              <h3>Energy Management</h3>
              <p>Strategic energy audits, sustainability consulting, and carbon reduction programmes to lower operational costs and environmental impact.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x1F4CB;</div>
              <h3>Project Management</h3>
              <p>Expert management of fit-outs, refurbishments, relocations, and capital projects from conception through successful delivery.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x2713;</div>
              <h3>Compliance &amp; Safety</h3>
              <p>Comprehensive health and safety audits, fire risk assessments, and regulatory compliance management to ensure workplace safety.</p>
              <a href="#" className="service-link">Learn more &#x2192;</a>
            </div>
            <div className="service-card">
              <div className="service-icon">&#x1F916;</div>
              <h3>Technology Solutions</h3>
              <p>Cutting-edge smart building technology, BMS integration, IoT monitoring, and CAFM systems for intelligent facility management.</p>
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
            <p className="section-subtitle">Delivering specialised facilities management across diverse sectors</p>
          </div>
          <div className="sectors-grid">
            <div className="sector-card">
              <h3>Corporate &amp; Commercial</h3>
              <p>Office spaces, business parks, and corporate headquarters requiring integrated facility management solutions and efficiency optimisation.</p>
            </div>
            <div className="sector-card">
              <h3>Healthcare</h3>
              <p>Hospitals, clinics, and medical facilities requiring strict compliance, specialised maintenance, and critical infrastructure management.</p>
            </div>
            <div className="sector-card">
              <h3>Education</h3>
              <p>Universities, schools, and educational institutions with complex facilities requiring flexible and responsive management solutions.</p>
            </div>
            <div className="sector-card">
              <h3>Government &amp; Public Sector</h3>
              <p>Public buildings, government agencies, and civic facilities requiring compliance and cost-effective facility operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="feature-split">
        <div className="section-container">
          <div className="feature-split-content">
            <div className="feature-split-text">
              <h2>Why organisations choose Aston FM</h2>
              <p>We combine industry expertise, advanced technology, and a commitment to excellence to deliver facilities management solutions that drive real business value. Our approach focuses on understanding your unique challenges and delivering tailored solutions.</p>
              <ul className="feature-checklist">
                <li>Proactive maintenance reducing emergency breakdowns</li>
                <li>Cost optimisation through strategic resource planning</li>
                <li>Technology integration for real-time facility insights</li>
                <li>Expert team with deep sector knowledge</li>
                <li>Sustainable practices reducing environmental impact</li>
              </ul>
            </div>
            <div className="feature-split-image">
              Innovative Facilities Solutions
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="insights">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-subtitle">Expert perspectives on facilities management trends and best practices</p>
          </div>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-card-image">&#x1F3E2;</div>
              <div className="insight-card-content">
                <span className="insight-category">Technology</span>
                <h3>The Future of Smart Building Management</h3>
                <p>Exploring how IoT, AI, and integrated systems are revolutionising facility operations and creating more responsive, efficient buildings.</p>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-card-image">&#x1F331;</div>
              <div className="insight-card-content">
                <span className="insight-category">Sustainability</span>
                <h3>Sustainability in Facilities Management: A 2026 Perspective</h3>
                <p>How organisations are embracing sustainable practices, reducing carbon footprints, and meeting environmental commitments through FM innovation.</p>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-card-image">&#x1F4B0;</div>
              <div className="insight-card-content">
                <span className="insight-category">Case Study</span>
                <h3>How Integrated FM Reduces Operational Costs by 30%</h3>
                <p>Real-world example of how strategic facilities management practices deliver substantial cost savings while improving service quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="testimonial-content">
          <div className="testimonial-quote">Aston FM has transformed how we manage our facilities. Their proactive approach and technology solutions have saved us significant costs while improving the workplace experience for our staff.</div>
          <div className="testimonial-author">Michael Richardson</div>
          <div className="testimonial-role">Facilities Director, Fortune 500 Technology Company</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to transform your facilities management?</h2>
        <p>Let our team of experts develop a tailored facilities management solution for your organisation.</p>
        <div className="cta-buttons">
          <button className="btn-primary">Get in Touch</button>
          <button className="btn-secondary">Schedule a Demo</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand">
              <h4>Aston FM</h4>
              <p>Delivering innovative, technology-driven facilities management solutions that help organisations reduce costs, improve efficiency, and create better working environments.</p>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Hard FM Services</a></li>
                <li><a href="#">Soft FM Services</a></li>
                <li><a href="#">Energy Management</a></li>
                <li><a href="#">Project Management</a></li>
                <li><a href="#">Compliance &amp; Safety</a></li>
                <li><a href="#">Technology Solutions</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Modern Slavery Statement</a></li>
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
