import Link from 'next/link';

const services: Record<string, {
  title: string;
  tagline: string;
  image: string;
  overview: string;
  whatWeCover: string[];
  howWeWork: { step: string; detail: string }[];
  whyUs: string[];
  pricing: string;
  cta: string;
}> = {
  'esg-reporting': {
    title: 'ESG Reporting for FM Portfolios',
    tagline: 'Turn your facilities data into credible sustainability reporting \u2014 without hiring a full ESG team.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=600&fit=crop',
    overview: 'Environmental, Social, and Governance reporting is no longer optional for organisations managing property portfolios. Investors, regulators, and tenants expect transparent data on energy consumption, carbon emissions, and sustainability progress. But building an in-house ESG capability is expensive and slow. Aston FM delivers board-ready ESG reporting for your FM portfolio using AI-powered data collection, standardised Scope 1 and 2 templates, and monthly dashboards that track your progress against targets \u2014 all without the overhead of a dedicated team.',
    whatWeCover: [
      'Scope 1 and Scope 2 carbon emissions baselining across your portfolio',
      'Monthly sustainability dashboards with automated data feeds',
      'Narrative ESG reports suitable for board packs, investor updates, and annual reports',
      'Gap analysis against SECR, ESOS, TCFD, and other UK reporting frameworks',
      'Utility data collection, validation, and normalisation',
      'Progress tracking against net-zero targets and carbon reduction pathways',
      'Tenant engagement metrics and social value reporting',
    ],
    howWeWork: [
      { step: 'Discovery & Baseline', detail: 'We audit your current data sources \u2014 utility bills, BMS feeds, meter readings \u2014 and establish a reliable emissions baseline for your portfolio.' },
      { step: 'Template Setup', detail: 'We configure Scope 1/2 reporting templates aligned to your chosen framework (SECR, ESOS, GRI, or custom) and connect your data sources.' },
      { step: 'AI-Powered Reporting', detail: 'Our AI drafts your monthly narrative reports and populates dashboards automatically. A specialist validates the data before delivery.' },
      { step: 'Ongoing Monitoring', detail: 'Monthly dashboard updates, quarterly deep-dives, and annual report preparation \u2014 keeping your ESG commitments visible and on track.' },
    ],
    whyUs: [
      'We combine FM operational knowledge with ESG expertise \u2014 we understand buildings, not just carbon accounting',
      'AI-drafted reports save 60-70% of the time vs manual preparation, without sacrificing accuracy',
      'Flexible scope: from single-site to multi-hundred-site portfolios',
      'No long-term lock-in \u2014 monthly retainer with transparent deliverables',
      'We validate every dataset before it reaches your board, so you can report with confidence',
    ],
    pricing: 'Monthly retainer + one-off setup fee. Setup covers baselining and template configuration. Retainer covers ongoing data collection, dashboards, and narrative reports. Pricing scales with portfolio size.',
    cta: 'Book a free ESG readiness assessment',
  },
  'fm-performance-dashboard': {
    title: 'FM Performance Dashboard',
    tagline: 'See everything that matters across your FM operation in one live view.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    overview: 'Most FM teams are data-rich but insight-poor. SLA reports arrive late, reactive maintenance data sits in spreadsheets, and nobody has a single view of what is actually happening across the portfolio. Aston FM builds and maintains a live performance dashboard that pulls together your key FM metrics \u2014 SLAs, planned preventative maintenance, reactive works, complaints, energy usage, costs, and open actions \u2014 so you can see what matters and act on it.',
    whatWeCover: [
      'SLA compliance tracking with traffic-light RAG status across all contracts',
      'Planned Preventative Maintenance (PPM) completion rates and overdue tracking',
      'Reactive maintenance volumes, response times, and fix rates',
      'Complaint and helpdesk ticket analysis with trend identification',
      'Energy consumption monitoring and anomaly detection',
      'FM cost tracking with budget vs actual variance reporting',
      'Open action tracker with accountability and deadline visibility',
    ],
    howWeWork: [
      { step: 'Data Audit', detail: 'We map your existing data sources \u2014 CAFM systems, contractor reports, spreadsheets, utility feeds \u2014 and identify gaps.' },
      { step: 'Dashboard Build', detail: 'We design and build a live dashboard tailored to your KPIs, using tools your team can access without specialist training.' },
      { step: 'AI Summary Layer', detail: 'Our AI generates a written executive summary each month, highlighting trends, risks, and recommended actions from the data.' },
      { step: 'Ongoing Updates', detail: 'A part-time analyst updates inputs weekly/monthly, and we refine the dashboard as your FM operation evolves.' },
    ],
    whyUs: [
      'We build dashboards that FM managers actually use \u2014 clear, actionable, and jargon-free',
      'AI-generated summaries mean your leadership team gets narrative insight, not just charts',
      'No expensive BI platform required \u2014 we work with tools you already have',
      'We understand FM data because we come from FM, not from a data consultancy',
      'Dashboard evolves with your operation \u2014 we add metrics and views as priorities change',
    ],
    pricing: 'Monthly retainer covering dashboard maintenance, data updates, and AI-generated summaries. One-off setup fee for initial data audit and dashboard build.',
    cta: 'Request a sample dashboard walkthrough',
  },
  'project-management': {
    title: 'Project Management Oversight',
    tagline: 'Keep your FM projects on track, on budget, and properly documented \u2014 without hiring a full-time PM.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop',
    overview: 'Whether it is a fit-out, refurbishment, planned maintenance programme, or office relocation, FM projects need structured oversight to stay on track. But hiring a dedicated project manager for every initiative is not always practical or cost-effective. Aston FM provides fractional project management oversight \u2014 programme tracking, risk management, contractor coordination, and status reporting \u2014 so your projects are professionally managed without the full-time cost.',
    whatWeCover: [
      'Programme and project planning with milestones and dependencies',
      'Risk and issue logs with mitigation tracking',
      'Contractor and subcontractor coordination and progress monitoring',
      'Weekly and monthly status reports for stakeholders',
      'Budget tracking with committed, forecast, and actual cost reporting',
      'Meeting facilitation, minutes, and action tracking',
      'Handover documentation and defects management',
    ],
    howWeWork: [
      { step: 'Project Scoping', detail: 'We define the programme structure, milestones, and reporting cadence based on the project brief and stakeholder requirements.' },
      { step: 'Tracker Setup', detail: 'We set up programme trackers, risk logs, and cost reports using AI-assisted templates so nothing falls through the cracks.' },
      { step: 'Active Oversight', detail: 'We attend key meetings, coordinate contractors, prepare minutes and action lists, and escalate issues before they become problems.' },
      { step: 'Reporting & Close', detail: 'Regular status reports keep stakeholders informed. At project close, we deliver handover documentation and lessons learned.' },
    ],
    whyUs: [
      'Senior FM project management experience across fit-outs, refurbishments, and capital programmes',
      'AI prepares meeting minutes, trackers, and status updates \u2014 so more time is spent managing, not writing',
      'Flexible engagement: oversight for a single project or across a rolling programme',
      'We act as an extension of your team, not a separate consultancy silo',
      'Proven track record of delivering FM projects on time and within budget',
    ],
    pricing: 'Per-project fee for defined scope projects, or monthly PM retainer for ongoing programme oversight. Pricing based on project complexity and reporting frequency.',
    cta: 'Discuss your upcoming project',
  },
  'cost-reduction': {
    title: 'FM Cost-Reduction Review',
    tagline: 'Find the savings hiding in your FM contracts, procurement, and operations.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    overview: 'Most organisations are overspending on facilities management without realising it. Contracts roll over without review, procurement lacks benchmarking, and operational inefficiencies accumulate over time. Aston FM conducts a structured cost-reduction review of your FM spend \u2014 benchmarking against industry standards, identifying savings opportunities, and delivering a prioritised roadmap that typically uncovers 20-30% in achievable savings.',
    whatWeCover: [
      'Line-by-line analysis of your current FM spend across all categories',
      'Benchmarking against industry norms and comparable portfolios',
      'Contract review to identify over-specification, duplication, and renegotiation opportunities',
      'Procurement analysis to find better value from suppliers and frameworks',
      'Operational efficiency assessment \u2014 where processes create unnecessary cost',
      'Prioritised savings roadmap with quick wins and longer-term opportunities',
      'Business case preparation for implementing recommended changes',
    ],
    howWeWork: [
      { step: 'Data Collection', detail: 'We gather your FM cost data \u2014 invoices, contracts, budgets, purchase orders \u2014 and organise it into a clear spend profile.' },
      { step: 'Benchmarking & Analysis', detail: 'AI-assisted analysis compares your spend against industry benchmarks and identifies outliers, duplications, and over-provisions.' },
      { step: 'Savings Roadmap', detail: 'We deliver a prioritised report showing exactly where savings are available, how much, and what actions are needed to capture them.' },
      { step: 'Implementation Support', detail: 'If needed, we can support procurement exercises, contract renegotiations, or operational changes to realise the identified savings.' },
    ],
    whyUs: [
      'We have benchmarked FM costs across hundreds of sites \u2014 we know what good looks like',
      'AI-powered analysis processes large datasets quickly, finding patterns manual reviews miss',
      'We focus on achievable savings, not theoretical numbers that never materialise',
      'Fixed-fee engagement means you know the cost upfront \u2014 and it pays for itself from the savings',
      'Independent advice with no ties to FM suppliers or contractors',
    ],
    pricing: 'Fixed-fee diagnostic engagement. Scope and fee agreed upfront based on portfolio size and complexity. Optional success-fee model available for implementation support.',
    cta: 'Get a free cost-reduction scoping call',
  },
  'tender-bid-support': {
    title: 'Tender & Bid Support',
    tagline: 'Win more FM contracts with professionally written, compliant, and compelling bids.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    overview: 'Winning FM contracts requires more than competitive pricing. Procurement evaluators score on quality, methodology, ESG commitments, social value, and compliance. A poorly structured bid loses marks regardless of how good the service offer is. Aston FM provides expert bid writing support \u2014 from compliance matrices and method statements to ESG responses and social value narratives \u2014 helping FM providers and in-house teams produce winning submissions.',
    whatWeCover: [
      'Full bid and proposal writing for FM tenders',
      'Compliance matrix preparation ensuring every requirement is addressed',
      'Method statements with clear, scored methodology aligned to evaluation criteria',
      'ESG, sustainability, and social value responses',
      'Case studies, CVs, and evidence drafting',
      'Bid review and quality assurance before submission',
      'Post-tender interview preparation and presentation support',
    ],
    howWeWork: [
      { step: 'Tender Review', detail: 'We review the ITT, evaluation criteria, and scoring methodology to develop a win strategy that targets maximum marks.' },
      { step: 'AI-Assisted Drafting', detail: 'AI produces initial drafts of method statements, ESG responses, and case studies. Our experts then edit, refine, and align them to the specific tender.' },
      { step: 'Compliance Check', detail: 'Every response is mapped against the compliance matrix to ensure nothing is missed and every scored question is fully addressed.' },
      { step: 'Final Review & Submit', detail: 'Senior review of the complete submission for quality, consistency, and persuasiveness before handover for submission.' },
    ],
    whyUs: [
      'We have written and evaluated FM bids for years \u2014 we know what scores well and what does not',
      'AI drafting accelerates turnaround without sacrificing quality, so you can bid on more opportunities',
      'ESG and social value expertise means you score well on the sections most competitors struggle with',
      'Flexible engagement: per-bid pricing for occasional support, or retainer for regular bidding programmes',
      'We write to win, not just to comply \u2014 every response is crafted to maximise evaluation scores',
    ],
    pricing: 'Per-bid fee based on tender size and complexity, or monthly retainer for organisations with a regular bidding pipeline. Quick-turnaround pricing available.',
    cta: 'Send us your next tender for a free assessment',
  },
  'energy-savings': {
    title: 'Energy-Savings Advisory',
    tagline: 'Cut energy costs and carbon emissions with practical, payback-focused recommendations.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
    overview: 'Energy is one of the largest controllable costs in any FM budget, yet many organisations lack the time or expertise to systematically reduce it. Aston FM provides lightweight energy audits, utility bill reviews, and retrofit roadmaps that identify practical savings \u2014 from quick wins you can implement this month to longer-term investments with clear payback calculations. No jargon, no over-engineering \u2014 just actionable recommendations that save money and cut carbon.',
    whatWeCover: [
      'Utility bill analysis identifying billing errors, tariff optimisation, and consumption anomalies',
      'Lightweight energy audits focused on the highest-impact opportunities',
      'LED lighting, HVAC optimisation, and building fabric improvement assessments',
      'Retrofit roadmaps with payback periods and ROI calculations for each measure',
      'Renewable energy feasibility \u2014 solar PV, heat pumps, battery storage',
      'Behavioural change programmes to reduce energy waste',
      'Carbon reduction quantification aligned to your net-zero targets',
    ],
    howWeWork: [
      { step: 'Utility Review', detail: 'We analyse 12-24 months of energy bills to identify billing errors, tariff issues, and consumption patterns that signal waste.' },
      { step: 'Site Assessment', detail: 'Targeted site surveys focus on the areas with the biggest savings potential \u2014 lighting, HVAC, controls, and building envelope.' },
      { step: 'Savings Roadmap', detail: 'AI structures the findings into a prioritised roadmap showing each measure, its cost, payback period, and carbon saving.' },
      { step: 'Implementation Support', detail: 'We can project-manage retrofit works through specialist subcontractors, or hand over the roadmap for your team to deliver.' },
    ],
    whyUs: [
      'FM-first approach: we understand how buildings actually operate, not just the theory',
      'Practical recommendations with realistic payback periods \u2014 not aspirational wish lists',
      'AI-structured analysis means faster turnaround and lower advisory costs',
      'We quantify both the financial and carbon savings, supporting your business case and ESG reporting',
      'Success-fee option available: we only earn more when you save more',
    ],
    pricing: 'Fixed fee for energy audit and savings roadmap. Success-fee option available where advisory fee is linked to verified savings achieved. Pricing scales with portfolio size.',
    cta: 'Book a free energy savings scoping call',
  },
  'fm-outsourcing': {
    title: 'FM Outsourcing Advisory',
    tagline: 'Outsource your FM with clarity, control, and confidence.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop',
    overview: 'Outsourcing facilities management can deliver significant cost savings and service improvements \u2014 but only if the scope, SLAs, and vendor selection are done right. Too many organisations rush into FM outsourcing with vague specifications, ending up with poor service, hidden costs, and adversarial contract relationships. Aston FM guides you through the entire outsourcing journey \u2014 from scope definition and SLA design to vendor evaluation and transition planning \u2014 so you outsource with confidence and maintain control.',
    whatWeCover: [
      'Scope of services definition with clear boundaries and exclusions',
      'SLA and KPI framework design that drives the right behaviours',
      'Output-based specification writing for competitive tendering',
      'Vendor evaluation and scoring methodology',
      'Commercial model design \u2014 fixed price, cost-plus, open-book, or hybrid',
      'Transition and mobilisation planning',
      'Ongoing contract governance and performance management setup',
    ],
    howWeWork: [
      { step: 'Requirements Workshop', detail: 'We facilitate workshops with your stakeholders to define what good FM looks like for your organisation \u2014 services, standards, and priorities.' },
      { step: 'Specification & SLA Design', detail: 'AI-assisted templates help us rapidly build a comprehensive specification with measurable SLAs and KPIs that drive genuine performance.' },
      { step: 'Market Engagement', detail: 'We design the evaluation methodology, support vendor engagement, and provide independent scoring and analysis of responses.' },
      { step: 'Transition Planning', detail: 'Detailed mobilisation plan covering TUPE, asset transfers, system migrations, and day-one readiness \u2014 so the handover runs smoothly.' },
    ],
    whyUs: [
      'We have been on both sides of FM outsourcing \u2014 client-side and provider-side \u2014 so we know what works',
      'AI-generated templates and comparison tables accelerate the process without cutting corners',
      'Independent advice: we have no commercial relationships with FM providers, so our recommendations are unbiased',
      'We design contracts for partnership, not confrontation \u2014 because adversarial relationships always cost more',
      'Post-transition support available to ensure the new arrangement delivers on its promises',
    ],
    pricing: 'Project fee based on outsourcing scope and complexity. Typically structured in phases (scoping, procurement, transition) so you can engage for all or part of the journey.',
    cta: 'Discuss your outsourcing plans',
  },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h1>Service not found</h1>
        <p style={{ marginTop: '1rem' }}>
          <Link href="/#services">Back to services</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <svg width={38} height={38} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00b67a" />
                <stop offset="50%" stopColor="#00a5b5" />
                <stop offset="100%" stopColor="#3b7dd8" />
              </linearGradient>
            </defs>
            <rect x="20" y="40" width="30" height="60" rx="3" fill="url(#brandGrad)" />
            <rect x="55" y="20" width="25" height="80" rx="3" fill="url(#brandGrad)" opacity="0.85" />
            <rect x="85" y="50" width="20" height="50" rx="3" fill="url(#brandGrad)" opacity="0.7" />
            <rect x="27" y="48" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="37" y="48" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="27" y="60" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="37" y="60" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="62" y="28" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="62" y="40" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="62" y="52" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="90" y="58" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <rect x="90" y="70" width="7" height="6" rx="1" fill="white" opacity="0.9" />
            <circle cx="95" cy="30" r="14" stroke="url(#brandGrad)" strokeWidth="4" fill="none" opacity="0.5" />
            <circle cx="95" cy="30" r="5" fill="url(#brandGrad)" opacity="0.5" />
          </svg>
          <div className="nav-brand">
            Aston <span className="nav-brand-accent">FM</span>
          </div>
        </Link>
        <div className="nav-middle">
          <Link href="/#services" className="nav-link">Services</Link>
          <Link href="/#sectors" className="nav-link">Sectors</Link>
          <Link href="/#insights" className="nav-link">Insights</Link>
          <Link href="/#about" className="nav-link">About Us</Link>
          <Link href="/#contact" className="nav-link">Contact</Link>
        </div>
        <div className="nav-right">
          <Link href="/#contact" className="btn-cta" style={{ textDecoration: 'none' }}>Get in Touch</Link>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="service-hero" style={{ backgroundImage: `linear-gradient(rgba(13,27,42,0.7), rgba(13,27,42,0.85)), url(${service.image})` }}>
        <Link href="/#services" className="service-back-link">&larr; All Services</Link>
        <h1>{service.title}</h1>
        <p className="service-hero-tagline">{service.tagline}</p>
      </section>

      {/* Overview */}
      <section className="service-section">
        <div className="service-container">
          <h2 className="service-section-title">Overview</h2>
          <p className="service-overview-text">{service.overview}</p>
        </div>
      </section>

      {/* What We Cover */}
      <section className="service-section service-section-alt">
        <div className="service-container">
          <h2 className="service-section-title">What We Cover</h2>
          <ul className="service-cover-list">
            {service.whatWeCover.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* How We Work */}
      <section className="service-section">
        <div className="service-container">
          <h2 className="service-section-title">How We Work</h2>
          <div className="service-steps">
            {service.howWeWork.map((step, i) => (
              <div key={i} className="service-step">
                <div className="service-step-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="service-step-content">
                  <h3>{step.step}</h3>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="service-section service-section-alt">
        <div className="service-container">
          <h2 className="service-section-title">Why Aston FM</h2>
          <ul className="service-why-list">
            {service.whyUs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="service-section">
        <div className="service-container">
          <h2 className="service-section-title">Pricing</h2>
          <p className="service-overview-text">{service.pricing}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>{service.cta}</h2>
        <p>Get in touch to discuss how this service can work for your organisation.</p>
        <div className="cta-buttons">
          <Link href="/#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Book a Discovery Call</Link>
          <Link href="/#services" className="btn-secondary" style={{ textDecoration: 'none' }}>View All Services</Link>
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
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link href="/#about">About Us</Link></li>
                <li><Link href="/#insights">Insights</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
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

