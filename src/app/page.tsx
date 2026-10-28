import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import NewsTicker from '@/components/NewsTicker';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: { absolute: 'Aston Facilities Management | Integrated FM Solutions' },
  description: 'Delivering innovative, technology-driven facilities management solutions that help organisations reduce costs, improve efficiency, and create better working environments across the UAE and international markets.',
  path: '/',
});

/* ── Main Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* News Ticker */}
      <NewsTicker />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-tag">FM Consulting &amp; Advisory | UAE &amp; International</div>
        <h1>Smarter facilities management <span className="hero-highlight">for the UAE and beyond</span></h1>
        <p>Expert FM consulting, ESG reporting, and performance management for organisations across the UAE, Middle East, and international markets. With proven experience across the UK, Europe, and Australia, we bring global best practice to the region. AI-powered. Lean. Results-driven.</p>
        <div className="hero-buttons">
          <a href="#services" className="btn-primary">Explore Our Services</a>
          <Link href="/contact" className="btn-secondary" style={{ textDecoration: 'none' }}>Contact Us</Link>
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
            <div className="hero-stat-number">7</div>
            <div className="hero-stat-label">Countries Operated In</div>
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

      {/* Sectors Section - 6 UAE-focused tiles with photos */}
      <section id="sectors" className="sectors">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">Strategic FM advisory across the UAE and international markets where performance, compliance, and cost control matter most</p>
          </div>
          <div className="sectors-grid-photo">
            <div className="sector-card-photo" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.15) 0%, rgba(13,27,42,0.85) 65%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=500&fit=crop)' }}>
              <div className="sector-card-photo-content">
                <h3>Oil &amp; Gas</h3>
                <p>FM advisory for upstream, downstream, and petrochemical facilities across the UAE and Gulf region. Compliance-driven maintenance oversight, asset management, and ESG reporting for energy sector portfolios.</p>
              </div>
            </div>
            <div className="sector-card-photo" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.15) 0%, rgba(13,27,42,0.85) 65%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop)' }}>
              <div className="sector-card-photo-content">
                <h3>Logistics &amp; Transport</h3>
                <p>Performance management and cost optimisation for warehouses, free zones, ports, and transport hubs. Supporting operations across Jebel Ali, KIZAD, and regional logistics networks.</p>
              </div>
            </div>
            <div className="sector-card-photo" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.15) 0%, rgba(13,27,42,0.85) 65%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop)' }}>
              <div className="sector-card-photo-content">
                <h3>Healthcare</h3>
                <p>Critical environment FM oversight for hospitals, clinics, and healthcare campuses. Compliance reporting, planned maintenance tracking, and infection-control-aware facility strategies.</p>
              </div>
            </div>
            <div className="sector-card-photo" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.15) 0%, rgba(13,27,42,0.85) 65%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop)' }}>
              <div className="sector-card-photo-content">
                <h3>Education</h3>
                <p>FM performance reporting and project oversight for universities, international schools, and training campuses across the Emirates and wider region.</p>
              </div>
            </div>
            <div className="sector-card-photo" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.15) 0%, rgba(13,27,42,0.85) 65%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop)' }}>
              <div className="sector-card-photo-content">
                <h3>Government &amp; Public Sector</h3>
                <p>FM transparency, value-for-money reporting, and sustainability accountability for federal entities, municipalities, and smart government initiatives across the UAE.</p>
              </div>
            </div>
            <div className="sector-card-photo" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.15) 0%, rgba(13,27,42,0.85) 65%, rgba(13,27,42,0.95) 100%), url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop)' }}>
              <div className="sector-card-photo-content">
                <h3>Corporate &amp; Commercial</h3>
                <p>Office towers, business parks, free zone facilities, and multi-site corporate portfolios in DIFC, ADGM, and across the UAE requiring consistent FM performance and cost control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section id="about" className="feature-split">
        <div className="section-container">
          <div className="feature-split-content">
            <div className="feature-split-text">
              <h2>Why clients choose Aston FM</h2>
              <p>We&apos;re not a traditional FM provider with hundreds of operatives. We&apos;re a lean consulting team that uses AI, data, and deep sector knowledge to give you the strategic oversight of a large FM department &mdash; at a fraction of the cost.</p>
              <p>With proven delivery across the UK, Europe, Australia, and the Middle East, we bring international best practice to every engagement while understanding the unique demands of the UAE market.</p>
              <ul className="feature-checklist">
                <li>AI-powered reporting that saves hours every week</li>
                <li>Senior FM expertise without full-time salary costs</li>
                <li>Flexible engagement &mdash; retainer, project, or per-bid</li>
                <li>Data-driven insights, not just opinions</li>
                <li>ESG and sustainability built into everything we do</li>
                <li>International experience, locally focused delivery</li>
              </ul>
            </div>
            <div className="feature-split-image" style={{ backgroundImage: 'linear-gradient(rgba(13,27,42,0.3), rgba(13,27,42,0.5)), url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '16px', display: 'flex', alignItems: 'flex-end', padding: '2rem', color: 'white', fontSize: '1.5rem', fontWeight: 700 }}>
              Strategic FM Advisory
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section - 6 smaller tiles */}
      <section id="insights" className="insights">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-subtitle">Perspectives on FM consulting, ESG compliance, and operational performance across the UAE and international markets</p>
            <Link href="/insights" className="btn-cta" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '1rem', fontSize: '0.9rem' }}>View All Insights &amp; Industry News →</Link>
          </div>
          <div className="insights-grid-compact">
            <Link href="/insights/esg-scope-guide" className="insight-card-compact" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop)' }}>
              <div className="insight-card-compact-content">
                <span className="insight-category">ESG</span>
                <h3>Understanding ESG Scope 1, 2 &amp; 3 Emissions for Facility Managers</h3>
              </div>
            </Link>
            <Link href="/insights/ai-changing-fm" className="insight-card-compact" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop)' }}>
              <div className="insight-card-compact-content">
                <span className="insight-category">AI &amp; FM</span>
                <h3>How AI Is Transforming Facilities Management in 2026</h3>
              </div>
            </Link>
            <Link href="/insights/fm-cost-quick-wins" className="insight-card-compact" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop)' }}>
              <div className="insight-card-compact-content">
                <span className="insight-category">Cost Reduction</span>
                <h3>5 Quick Wins to Reduce FM Costs Without Compromising Quality</h3>
              </div>
            </Link>
            <Link href="/insights/uae-fm-market-outlook" className="insight-card-compact" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop)' }}>
              <div className="insight-card-compact-content">
                <span className="insight-category">UAE Market</span>
                <h3>UAE Facilities Management Market Outlook 2026&ndash;2030</h3>
              </div>
            </Link>
            <Link href="/insights/contract-mobilisation-best-practices" className="insight-card-compact" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop)' }}>
              <div className="insight-card-compact-content">
                <span className="insight-category">Mobilisation</span>
                <h3>Contract Mobilisation Best Practices: Lessons from 50+ Transitions</h3>
              </div>
            </Link>
            <Link href="/insights/energy-management-gulf" className="insight-card-compact" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop)' }}>
              <div className="insight-card-compact-content">
                <span className="insight-category">Energy</span>
                <h3>Energy Management in the Gulf: Strategies for 30%+ Savings</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="case-studies">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Case Studies</h2>
            <p className="section-subtitle">Real results from real engagements across the UAE, Europe, and beyond</p>
          </div>
          <div className="case-studies-grid">
            <Link href="/case-studies/pharma-mobilisation" className="case-study-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop)' }}>
              <div className="case-study-card-content">
                <span className="case-study-tag">Mobilisation</span>
                <h3>13-Site Pharmaceutical Mobilisation Across 7 Countries</h3>
                <p>Pan-European contract transition for a major pharmaceutical client.</p>
              </div>
            </Link>
            <Link href="/case-studies/bakery-energy-savings" className="case-study-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop)' }}>
              <div className="case-study-card-content">
                <span className="case-study-tag">Energy</span>
                <h3>20% Energy Reduction for UAE Caf&eacute; &amp; Bakery Chain</h3>
                <p>Programme now rolled out to eight more stores in the Emirates.</p>
              </div>
            </Link>
            <Link href="/case-studies/jafza-office-fitout" className="case-study-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop)' }}>
              <div className="case-study-card-content">
                <span className="case-study-tag">Project Management</span>
                <h3>Office &amp; Training Centre Fit-Out in JAFZA</h3>
                <p>Project management for a multinational vehicle supplier.</p>
              </div>
            </Link>
            <Link href="/case-studies/mod-bid-support" className="case-study-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop)' }}>
              <div className="case-study-card-content">
                <span className="case-study-tag">Bid Support</span>
                <h3>50-Site UK Defence Contract Bid</h3>
                <p>Technical and commercial bid support across UK, Cyprus, and Falkland Islands.</p>
              </div>
            </Link>
            <Link href="/case-studies/energy-dashboard" className="case-study-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop)' }}>
              <div className="case-study-card-content">
                <span className="case-study-tag">Dashboard</span>
                <h3>Multi-Client Energy Dashboard Platform</h3>
                <p>Live energy monitoring and reporting across diverse portfolios.</p>
              </div>
            </Link>
            <Link href="/case-studies/abu-dhabi-energy-audit" className="case-study-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop)' }}>
              <div className="case-study-card-content">
                <span className="case-study-tag">Energy Audit</span>
                <h3>Energy Audit for Abu Dhabi Catering Company</h3>
                <p>Comprehensive energy assessment across Abu Dhabi operations.</p>
              </div>
            </Link>
            <Link href="/case-studies/labour-management-review" className="case-study-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop)' }}>
              <div className="case-study-card-content">
                <span className="case-study-tag">Cost Savings</span>
                <h3>Labour Optimisation for Major FM Provider</h3>
                <p>Workforce optimisation for a large FM company.</p>
              </div>
            </Link>
            <Link href="/case-studies/board-report-decks" className="case-study-card" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(13,27,42,0.1) 0%, rgba(13,27,42,0.88) 60%, rgba(13,27,42,0.97) 100%), url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop)' }}>
              <div className="case-study-card-content">
                <span className="case-study-tag">Reporting</span>
                <h3>Executive Board Reporting Suite</h3>
                <p>AI-powered executive reporting for senior leadership.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - 5 testimonials */}
      <section className="testimonials">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>What Our Clients Say</h2>
          </div>
          <TestimonialsSlider>
            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;Aston FM gave us the strategic FM oversight we needed without the cost of building an in-house team. Their dashboards and ESG reporting transformed how our board sees facilities management.&rdquo;</div>
              <div className="testimonial-author">Operations Director</div>
              <div className="testimonial-role">Multi-site Corporate Portfolio, Dubai</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;The mobilisation of our 13 European sites was seamless. Aston FM managed the complexity across seven countries with precision, and we were operational on day one at every location.&rdquo;</div>
              <div className="testimonial-author">Head of Facilities</div>
              <div className="testimonial-role">Global Pharmaceutical Company</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;Their bid writing support was the difference between winning and losing. The technical and commercial responses were outstanding, and we secured a contract worth over &pound;200m.&rdquo;</div>
              <div className="testimonial-author">Bid Director</div>
              <div className="testimonial-role">International FM Provider</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;We achieved 20% energy savings within the first six months. Aston FM identified opportunities our internal team had missed for years. We&apos;re now rolling this out across all our UAE sites.&rdquo;</div>
              <div className="testimonial-author">General Manager</div>
              <div className="testimonial-role">Regional Caf&eacute; &amp; Bakery Chain, UAE</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">&ldquo;The back-office transformation freed up 40% of our management time. Aston FM understood our operational pressures and designed workflows that actually work in a live FM environment.&rdquo;</div>
              <div className="testimonial-author">Regional FM Director</div>
              <div className="testimonial-role">Large FM Company, Abu Dhabi</div>
            </div>
          </TestimonialsSlider>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <h2>Ready for smarter facilities management?</h2>
        <p>Get in touch to explore how our lean FM consulting model can deliver the insights and savings your organisation needs across the UAE and beyond.</p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Contact Us</Link>
          <a href="#services" className="btn-secondary">View Our Services</a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
