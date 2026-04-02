import Link from 'next/link';
import { Metadata } from 'next';

const AstonFMLogo = () => (
  <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="28" fontSize="24" fontWeight="bold" fill="#0d1b2a" fontFamily="Arial, sans-serif">
      ASTON FM
    </text>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#0d1b2a"/>
  </svg>
);

const caseStudies: Record<string, {
  title: string;
  image: string;
  tags: string[];
  challenge: string;
  approach: string;
  results: string;
  metrics?: { label: string; value: string }[];
}> = {
  'pharma-mobilisation': {
    title: '13-Site Pharmaceutical Mobilisation Across 7 Countries',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200',
    tags: ['Contract Mobilisation', 'Transition Management', 'International'],
    challenge: `A leading European pharmaceutical manufacturer required rapid mobilisation of 13 facilities across Belgium, Germany, France, Netherlands, Poland, and Spain as part of a significant outsourcing transformation. The client needed seamless service continuity while managing complex TUPE (Transfer of Undertakings) regulations, staff transitions, and operational handovers across diverse regulatory environments. Each site had unique operational requirements, union agreements, and compliance obligations that demanded coordinated execution.`,
    approach: `Aston FM structured a phased mobilisation programme aligned to each site's critical dependency map. We established parallel workstreams covering HR and employment law compliance, facilities systems integration, safety and compliance audits, and stakeholder engagement across union representatives and site leadership. Our team deployed dedicated mobilisation managers to each region who worked with local providers to ensure continuity while implementing standardised service levels. We created detailed transition protocols for each facility, mapping all critical handover activities with contingency plans. Regular steering group meetings ensured alignment across the multinational operation whilst respecting local regulatory frameworks.`,
    results: `All 13 sites transitioned successfully within the planned 12-week window with zero service disruptions. TUPE compliance was achieved across all jurisdictions with seamless staff transitions. Standardised service metrics were established immediately post-mobilisation, with 98% adherence to agreed KPIs within the first month. The mobilisation created a foundation for ongoing operational efficiency, with the client reporting that service continuity during transition exceeded expectations. Post-mobilisation integration identified process harmonisation opportunities that delivered 8% cost savings in year two.`,
    metrics: [
      { label: 'Sites Mobilised', value: '13' },
      { label: 'Countries', value: '7' },
      { label: 'Transition Completion', value: '100% on-time' },
      { label: 'KPI Adherence Month 1', value: '98%' },
    ]
  },
  'bakery-energy-savings': {
    title: '20% Energy Reduction for UAE Café & Bakery Chain',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200',
    tags: ['Energy Savings', 'Sustainability', 'Operations Optimisation'],
    challenge: `A UAE-based café and bakery operator was experiencing escalating energy costs across their 12-store portfolio, with particularly inefficient consumption at their flagship location. High cooling loads from open pastry cases, aged HVAC systems, and traditional lighting infrastructure were driving operating margins down. The client needed a proven, scalable approach to reducing energy intensity that could be replicated across expansion plans for 12 additional stores whilst maintaining product quality and customer experience.`,
    approach: `Aston FM conducted a comprehensive energy audit of the flagship location, profiling all major consumption points. Our engineers designed and implemented a multi-phased retrofit programme: LED replacement across all customer-facing and back-of-house areas with motion sensors in low-traffic zones; HVAC system recommissioning with variable frequency drives (VFDs) to match compressor load to ambient conditions; smart metering infrastructure to enable real-time consumption monitoring and operator alerts; and optimised refrigeration case management with night blinds and temperature stratification. We worked closely with the operations team to establish energy-conscious practices without compromising food safety or display standards.`,
    results: `The flagship location achieved 20% energy consumption reduction within six months, representing AED 180,000 annual savings. Payback period on the retrofit investment was 3.2 years. The client has since commissioned the same programme across eight additional stores, all achieving comparable savings. Smart metering data revealed unexpected consumption patterns in back-of-house areas, leading to additional operator-driven savings of 4% through scheduling optimisation. The client now has a clear roadmap for energy efficiency across their expansion programme, with energy intensity factored into new location profitability models.`,
    metrics: [
      { label: 'Energy Reduction', value: '20%' },
      { label: 'Annual Savings (Flagship)', value: 'AED 180k' },
      { label: 'Payback Period', value: '3.2 years' },
      { label: 'Stores Retrofit', value: '8+' },
    ]
  },
  'jafza-office-fitout': {
    title: 'Office & Training Centre Fit-Out in JAFZA',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    tags: ['Project Management', 'Fit-Out', 'Compliance'],
    challenge: `A multinational vehicle supplier required rapid establishment of a new regional office and employee training facility within JAFZA (Jebel Ali Free Zone), a major industrial and logistics hub in Dubai. The project demanded tight coordination across architectural design, contractor management, equipment procurement, and compliance with JAFZA's specific operational regulations. The client had a fixed 16-week delivery timeline to support regional expansion, with no tolerance for schedule slippage. Simultaneous management of multiple trade packages whilst maintaining JAFZA regulatory compliance presented a complex programme environment.`,
    approach: `Aston FM took on full project and construction management responsibility, acting as single point of accountability to the client. We appointed a dedicated project manager embedded full-time on site from planning through handover. The team coordinated design development with the client's architects whilst engineering buildout solutions that optimised space utilisation and operational efficiency. We managed contractor procurement, establishing clear method statements, safety protocols, and compliance checkpoints aligned to JAFZA requirements. Weekly site inspections and coordination meetings ensured all trades remained sequenced correctly. We liaised directly with JAFZA authority for necessary permits and inspections, managing documentation and procedural requirements. Final fitting-out included office infrastructure (IT, cabling, furnishings), training centre equipment and systems, and safety installations.`,
    results: `The facility was completed on schedule and within budget, occupying 4,200 sq ft across two floors. Handover was achieved in week 16 with full JAFZA compliance certification. The training facility accommodated 45 trainees per cohort with state-of-art equipment and IT infrastructure. Office space was optimised for 32 workstations plus meeting areas, reducing per-person space cost by 12% versus the original design concept. The project established a template for future JAFZA facilities, with the client subsequently engaging Aston FM for two additional locations. Zero safety incidents and zero compliance violations during the 16-week construction period.`,
    metrics: [
      { label: 'Delivery Timeline', value: '16 weeks' },
      { label: 'On-Time Completion', value: '100%' },
      { label: 'Budget Variance', value: '-2%' },
      { label: 'Workstations Delivered', value: '32' },
    ]
  },
  'mod-bid-support': {
    title: '50-Site UK Defence Contract Bid',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200',
    tags: ['Bid Support', 'Tender Management', 'Defence'],
    challenge: `A facilities management provider pursued a major contract opportunity covering 50 MOD sites across the UK, Cyprus, and Falkland Islands. The tender required comprehensive technical and commercial responses addressing complex Ministry of Defence requirements, including security protocols, operational standards, and stringent compliance frameworks. The bidder faced an aggressive timeline with a 12-week submission deadline and needed detailed method statements, costed pricing models, and compliance matrices for all 50 locations. The scale and complexity of the opportunity demanded structured bid management and specialist expertise across defence contracting norms.`,
    approach: `Aston FM partnered with the client as dedicated bid support partner, establishing a structured bid delivery programme. We facilitated tender strategy workshops to identify win themes and differentiation opportunities, developing a cohesive narrative thread across all submission documents. Our team mapped all PQQ and ITT requirements, creating compliance matrices to ensure every question was addressed with appropriate evidence and rigour. We led development of technical method statements covering mobilisation, transition, operational management, and quality assurance frameworks specific to MOD expectations. Commercial specialists structured a detailed pricing model across all 50 sites, factoring location-specific labour, logistics, and resource costs whilst building in defensible profit margins. We prepared bid teams for clarification meetings and participated in technical clarifications to reinforce key messages. Final documentation was subject to rigorous quality assurance and internal review before submission.`,
    results: `The bid was shortlisted to the final evaluation stage, with the client progressing to Best and Final Offer (BAFO) round. Evaluators specifically commended the clarity and rigour of the technical method statements and the defensibility of the pricing model. Although ultimately not awarded in the competitive evaluation, the client ranked second with feedback indicating the submission was of exceptional quality. The bidding process itself identified significant operational efficiency opportunities that the client subsequently implemented, improving their competitive positioning for future defence sector opportunities. The methodical bid approach established a template reused in three subsequent major facility tenders, all of which reached final stage.`,
    metrics: [
      { label: 'Sites Covered', value: '50' },
      { label: 'Countries', value: '3' },
      { label: 'ITT Response Time', value: '12 weeks' },
      { label: 'Final Stage Progression', value: 'Shortlisted' },
    ]
  },
  'energy-dashboard': {
    title: 'Multi-Client Energy Dashboard Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    tags: ['Performance Dashboard', 'Energy Management', 'Technology'],
    challenge: `Aston FM's growing portfolio of energy management and sustainability services required a unified platform to deliver real-time performance visibility to multiple clients simultaneously. Facilities managers, sustainability officers, and executive teams each needed role-appropriate views of energy consumption, cost trends, and efficiency metrics. Manual reporting was labour-intensive and created delays in decision-making. The platform needed to integrate data from diverse metering systems, calculate KPIs in real-time, and support automated reporting to reduce administrative overhead whilst improving data accuracy.`,
    approach: `Aston FM commissioned development of a bespoke energy dashboard platform built on modern cloud architecture. The system integrates with multiple metering technologies (smart meters, sub-metering systems, IoT sensors) through standardised APIs. Real-time data ingestion pipelines calculate consumption trends, variance to baseline, cost projections, and efficiency metrics for each property and asset class. The user interface provides multi-level access: operational dashboards for site managers tracking consumption in real-time; financial dashboards for finance teams monitoring cost and variance to budget; and executive dashboards summarising performance across portfolios. Automated reporting generates daily consumption alerts, weekly summary reports, and monthly variance analyses. The platform supports scenario modelling to evaluate the impact of efficiency interventions before implementation.`,
    results: `The platform now supports 18 major clients across commercial, industrial, and institutional segments, managing real-time visibility over 240+ metering points. Automated reporting has reduced administrative burden by 35 hours per week across the Aston FM service delivery team. Clients report improved decision velocity, with real-time alerts enabling faster identification of anomalies and operational issues. The platform has become a commercial differentiator, with clients citing performance visibility as a key value driver in contract renewals. Integration of dashboard data with Aston FM's energy advisory services has led to identification of 45+ additional energy-saving opportunities valued at GBP 1.8 million in aggregate client savings over 5 years. The platform has generated additional recurring revenue through data licensing and white-label deployments.`,
    metrics: [
      { label: 'Active Clients', value: '18' },
      { label: 'Metering Points', value: '240+' },
      { label: 'Admin Time Saved', value: '35 hrs/week' },
      { label: 'Identified Savings', value: 'GBP 1.8m' },
    ]
  },
  'abu-dhabi-energy-audit': {
    title: 'Comprehensive Energy Audit for Abu Dhabi Catering Company',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200',
    tags: ['Energy Audit', 'Sustainability', 'ESG'],
    challenge: `A large Abu Dhabi-based catering company operating multiple central production facilities and satellite service locations was experiencing significant unexplained variation in energy consumption across sites. Operating costs were escalating whilst building occupancy and activity levels remained stable. The company needed a comprehensive understanding of energy performance drivers to identify cost reduction opportunities and support ESG reporting commitments to major institutional clients. The audit needed to evaluate both equipment-level efficiency and operational practices, providing actionable recommendations with transparent payback analysis.`,
    approach: `Aston FM deployed a senior energy engineer to conduct a detailed facility assessment across all operating locations. The audit encompassed: comprehensive building energy modelling with input from design drawings and operational data; thermal imaging surveys to identify insulation losses and equipment inefficiencies; equipment-level efficiency testing including refrigeration systems, cooking equipment, HVAC units, and hot water generation; operational practice review including maintenance schedules, control system settings, and staff practices. The engineer interviewed operations managers at each facility to understand usage patterns and identify constraints on potential efficiency interventions. Load profiling was conducted to correlate energy consumption with operational activity, enabling calculation of efficiency baselines and benchmarking against industry standards. Recommendations were prioritised by payback period, capital requirement, operational complexity, and customer impact.`,
    results: `The audit identified GBP 145,000 in annual energy cost reduction opportunities across the catering operation. High-priority recommendations included recommissioning of HVAC control systems (18-month payback), refrigeration equipment upgrade (3.5-year payback), and operational practice changes (immediate payback). The client has committed to implementing 75% of recommendations, commencing with HVAC recommissioning in Q2. Building energy modelling outputs have been integrated into the company's ESG reporting, allowing quantification of sustainability improvements to institutional clients. The audit findings also informed a preventive maintenance programme that has improved equipment reliability and extended asset lifecycles. Aston FM has been retained as ongoing energy management consultant to track savings realisation and identify emerging opportunities.`,
    metrics: [
      { label: 'Identified Savings', value: 'GBP 145k/year' },
      { label: 'Priority Recommendations', value: '8' },
      { label: 'Implementation Commitment', value: '75%' },
      { label: 'Fastest Payback', value: 'Immediate' },
    ]
  },
  'labour-management-review': {
    title: 'Labour Optimisation for Major FM Provider',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200',
    tags: ['Cost Reduction', 'Labour Planning', 'Optimisation'],
    challenge: `A national facilities management provider managing portfolios across commercial, industrial, and institutional sectors was experiencing labour cost inflation outpacing service fee growth, eroding margin performance. The company suspected inefficiencies in workforce planning, shift scheduling, and task allocation but lacked systematic data to identify improvement opportunities. Labour represented 58% of operating cost, and even modest efficiency gains would significantly improve profitability. The company needed objective analysis of current practices and a roadmap to optimise labour deployment without compromising service quality or employee satisfaction.`,
    approach: `Aston FM conducted a comprehensive labour management review across a representative cross-section of the client's service contracts, encompassing 120 FTE across commercial, industrial, and institutional sectors. We established baseline metrics for labour utilisation, including time allocation to different task categories, idle time, travel time, and overtime patterns. Detailed time-in-motion studies were conducted for key role types to establish time requirements for typical tasks. Shift pattern analysis evaluated whether scheduling aligned with facility demand profiles. We engaged directly with front-line supervisors and field staff to understand operational constraints and identify practical improvement opportunities. A detailed workforce planning model was constructed to simulate alternative staffing scenarios, pricing models, and scheduling configurations.`,
    results: `The review identified GBP 380,000 in achievable annual labour cost reductions through a combination of scheduling optimisation (GBP 145,000), task bundling and route consolidation (GBP 120,000), and shift pattern reconfiguration (GBP 115,000). Implementation was phased over 12 months to minimise disruption and allow for adjustment. Productivity improvements were achieved by consolidating tasks geographically to reduce travel time and enabling single-visit service delivery. Overtime was reduced by 22% through improved shift scheduling aligned to actual demand patterns. Staff engagement remained strong throughout the transition, with the company reporting improved job satisfaction due to more predictable schedules. The labour optimisation provided a platform for winning price-competitive tenders whilst maintaining margin, resulting in contract wins valued at GBP 2.1 million annualised revenue.`,
    metrics: [
      { label: 'Cost Reductions Identified', value: 'GBP 380k' },
      { label: 'Productivity Gain', value: '14%' },
      { label: 'Overtime Reduction', value: '22%' },
      { label: 'New Revenue Won', value: 'GBP 2.1m' },
    ]
  },
  'board-report-decks': {
    title: 'Executive Board Reporting Suite',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    tags: ['Performance Dashboard', 'Executive Reporting', 'Back-Office Automation'],
    challenge: `A leading facilities management company was spending 40+ hours per month preparing board-level reporting decks, with much of the effort involving manual data aggregation, calculation, and formatting. Finance and operations teams worked in silos, creating inconsistencies in metrics and delays in board-ready deliverables. Senior management lacked real-time visibility into KPI performance between formal monthly reporting cycles, hindering responsive decision-making. The company needed an automated, integrated reporting infrastructure that would reduce administrative burden, improve data consistency, and enable more frequent performance visibility.`,
    approach: `Aston FM designed and implemented a comprehensive executive reporting suite built on integrated data infrastructure. The system connects to operational management systems, financial systems, and performance dashboards, creating a single source of truth for board-level metrics. Key performance indicators are calculated automatically using standardised methodologies: revenue and profitability by business segment; contract performance against SLA metrics; operational KPIs including safety, quality, and customer satisfaction; financial metrics including gross margin, overhead ratios, and cash flow; and strategic progress against business plan objectives. The reporting suite generates automated board decks in PowerPoint format with charts, tables, and narrative summaries. Financial performance includes variance to budget with executive commentary on drivers. SLA performance is presented with trend analysis and forward-looking commentary on remediation actions. The system supports both monthly formal reporting and real-time dashboard access for executives.`,
    results: `Board reporting time has been reduced to 8 hours per month, a 80% reduction in administrative burden. Report consistency has improved significantly with all metrics derived from integrated data sources. Executives now have daily access to KPI dashboards between formal reporting cycles, enabling faster decision-making and more responsive management of operational issues. The automated infrastructure has also improved data quality, with system validation catching calculation errors that would previously have propagated into formal reporting. The executive team now conducts more sophisticated performance analysis, with the reporting suite supporting detailed variance investigations and scenario modelling. The implementation has become a strategic differentiator in client pitches, with potential customers specifically requesting similar reporting infrastructure in their contracts. The suite is now being offered as a value-added service to major clients, generating additional advisory revenue and strengthening retention.`,
    metrics: [
      { label: 'Reporting Time Reduction', value: '80%' },
      { label: 'Monthly Hours Saved', value: '32 hrs' },
      { label: 'KPI Reporting Frequency', value: 'Daily' },
      { label: 'Data Quality Improvement', value: '+35%' },
    ]
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug];
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The case study you are looking for does not exist.',
    };
  }

  return {
    title: `${caseStudy.title} | Aston FM Case Studies`,
    description: `Learn how Aston FM delivered ${caseStudy.title}. Explore our approach and results.`,
    openGraph: {
      title: caseStudy.title,
      description: `${caseStudy.title} case study`,
      images: [{ url: caseStudy.image }],
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug];

  if (!caseStudy) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header
          style={{
            borderBottom: '1px solid #e0e0e0',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="/">
            <AstonFMLogo />
          </Link>
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: '#0d1b2a', textDecoration: 'none', fontSize: '0.95rem' }}>
              Home
            </Link>
            <Link href="/case-studies" style={{ color: '#0d1b2a', textDecoration: 'none', fontSize: '0.95rem' }}>
              Case Studies
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <LinkedInIcon />
            </a>
            <Link
              href="/#contact"
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#00b67a',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem',
              }}
            >
              Contact Us
            </Link>
          </nav>
        </header>

        <main style={{ flex: 1, padding: '3rem 2rem', textAlign: 'center' }}>
          <h1 style={{ color: '#0d1b2a', marginBottom: '1rem' }}>Case Study Not Found</h1>
          <p style={{ color: '#666', marginBottom: '2rem' }}>The case study you are looking for does not exist.</p>
          <Link
            href="/case-studies"
            style={{
              color: '#00b67a',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Back to Case Studies
          </Link>
        </main>

        <footer style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e0e0e0', padding: '3rem 2rem', marginTop: 'auto' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'left', fontSize: '0.9rem', color: '#666' }}>
            <div>
              <h4 style={{ color: '#0d1b2a', marginBottom: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link href="/" style={{ color: '#666', textDecoration: 'none' }}>About</Link></li>
                <li><Link href="/case-studies" style={{ color: '#666', textDecoration: 'none' }}>Case Studies</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#0d1b2a', marginBottom: '1rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="/" style={{ color: '#666', textDecoration: 'none' }}>Facilities Management</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#0d1b2a', marginBottom: '1rem' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="/" style={{ color: '#666', textDecoration: 'none' }}>Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#0d1b2a', marginBottom: '1rem' }}>Contact</h4>
              <p style={{ margin: 0 }}>hello@astonfm.com</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <header
        style={{
          borderBottom: '1px solid #e0e0e0',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 100,
        }}
      >
        <Link href="/">
          <AstonFMLogo />
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#0d1b2a', textDecoration: 'none', fontSize: '0.95rem' }}>
            Home
          </Link>
          <Link href="/case-studies" style={{ color: '#0d1b2a', textDecoration: 'none', fontSize: '0.95rem' }}>
            Case Studies
          </Link>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <LinkedInIcon />
          </a>
          <Link
            href="/#contact"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#00b67a',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '0.9rem',
            }}
          >
            Contact Us
          </Link>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        {/* Hero Banner */}
        <div
          className="article-hero"
          style={{
            backgroundImage: `url('${caseStudy.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(13, 27, 42, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '3rem 2rem',
            }}
          >
            <Link
              href="/case-studies"
              style={{
                color: '#00b67a',
                textDecoration: 'none',
                fontSize: '0.9rem',
                marginBottom: '1rem',
                fontWeight: 'bold',
              }}
            >
              ← Back to Case Studies
            </Link>
            <h1 style={{ color: 'white', margin: 0, fontSize: '2.5rem', fontWeight: 'bold', maxWidth: '900px' }}>
              {caseStudy.title}
            </h1>
          </div>
        </div>

        {/* Article Body */}
        <article className="article-body" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: '#f0f0f0',
                  color: '#0d1b2a',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics (if available) */}
          {caseStudy.metrics && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label}>
                  <p style={{ color: '#00b67a', fontWeight: 'bold', fontSize: '1.75rem', margin: '0 0 0.5rem 0' }}>
                    {metric.value}
                  </p>
                  <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>{metric.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Challenge Section */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#0d1b2a', fontSize: '1.5rem', marginBottom: '1rem', borderLeft: '4px solid #00b67a', paddingLeft: '1rem' }}>
              Challenge
            </h2>
            <p style={{ color: '#333', lineHeight: '1.8', fontSize: '1rem' }}>{caseStudy.challenge}</p>
          </section>

          {/* Approach Section */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#0d1b2a', fontSize: '1.5rem', marginBottom: '1rem', borderLeft: '4px solid #00a5b5', paddingLeft: '1rem' }}>
              Approach
            </h2>
            <p style={{ color: '#333', lineHeight: '1.8', fontSize: '1rem' }}>{caseStudy.approach}</p>
          </section>

          {/* Results Section */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#0d1b2a', fontSize: '1.5rem', marginBottom: '1rem', borderLeft: '4px solid #3b7dd8', paddingLeft: '1rem' }}>
              Results
            </h2>
            <p style={{ color: '#333', lineHeight: '1.8', fontSize: '1rem' }}>{caseStudy.results}</p>
          </section>

          {/* CTA */}
          <div
            style={{
              backgroundColor: '#f8f8f8',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              marginTop: '3rem',
            }}
          >
            <h3 style={{ color: '#0d1b2a', marginTop: 0 }}>Ready to transform your operations?</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              Let's discuss how Aston FM can deliver similar results for your organisation.
            </p>
            <Link
              href="/#contact"
              style={{
                display: 'inline-block',
                backgroundColor: '#00b67a',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.95rem',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e0e0e0', padding: '3rem 2rem', marginTop: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'left', fontSize: '0.9rem', color: '#666' }}>
          <div>
            <h4 style={{ color: '#0d1b2a', marginBottom: '1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/" style={{ color: '#666', textDecoration: 'none' }}>About</Link></li>
              <li><Link href="/case-studies" style={{ color: '#666', textDecoration: 'none' }}>Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#0d1b2a', marginBottom: '1rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/" style={{ color: '#666', textDecoration: 'none' }}>Facilities Management</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#0d1b2a', marginBottom: '1rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/" style={{ color: '#666', textDecoration: 'none' }}>Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#0d1b2a', marginBottom: '1rem' }}>Contact</h4>
            <p style={{ margin: 0 }}>hello@astonfm.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
