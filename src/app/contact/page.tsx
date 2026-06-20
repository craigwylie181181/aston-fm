'use client';

import { useState } from 'react';
import Link from 'next/link';
import AstonFMLogo from '@/components/AstonFMLogo';
import LinkedInIcon from '@/components/LinkedInIcon';

/* — Contact Page — */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    companyName: '',
    email: '',
    phone: '',
    services: [] as string[],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    'ESG Reporting & Net Zero Strategy',
    'FM Performance Dashboard',
    'Project & Fit-Out Management',
    'Cost Reduction & Procurement',
    'Tender & Bid Support',
    'Energy & Sustainability Savings',
    'FM Outsourcing & Consultancy',
    'Contract Mobilisation & Transition',
    'Back-Office Automation',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => {
      const newServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services: newServices };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry');
      }

      setSubmitted(true);
      setFormData({
        fullName: '',
        jobTitle: '',
        companyName: '',
        email: '',
        phone: '',
        services: [],
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav">
        <Link href="/" className="nav-logo" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AstonFMLogo size={38} />
          <div className="nav-brand">
            Aston <span className="nav-brand-accent">FM</span>
          </div>
        </Link>
        <div className="nav-middle">
          <a href="/#services" className="nav-link">Services</a>
          <a href="/#sectors" className="nav-link">Sectors</a>
          <a href="/#insights" className="nav-link">Insights</a>
          <a href="/#case-studies" className="nav-link">Case Studies</a>
        </div>
        <div className="nav-right">
          <a href="https://www.linkedin.com/company/aston-facilities-management" target="_blank" rel="noopener noreferrer" className="nav-linkedin" title="Follow us on LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <button className="btn-cta" style={{ background: 'none', border: 'none', padding: '8px 16px', cursor: 'default' }} disabled>Contact Us</button>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="contact-page">
        <div className="section-container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 className="section-title">Get in Touch</h1>
            <p className="section-subtitle">Let's discuss your FM needs and how we can help drive performance across your UAE operations and beyond</p>
          </div>

          {submitted && (
            <div style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb', color: '#155724', padding: '1rem', borderRadius: '4px', marginBottom: '2rem', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Thank You</h3>
              <p style={{ margin: '0' }}>Your enquiry has been sent successfully. We'll be in touch shortly.</p>
            </div>
          )}

          {error && (
            <div style={{ backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', color: '#721c24', padding: '1rem', borderRadius: '4px', marginBottom: '2rem', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Error</h3>
              <p style={{ margin: '0' }}>{error}</p>
            </div>
          )}

          {!submitted && (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input id="fullName" type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="jobTitle">Job Title</label>
                  <input id="jobTitle" type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} placeholder="Your job title" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <input id="companyName" type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required placeholder="Your company name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="your@company.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group full-width">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+971 ... " />
                </div>
              </div>
              <div className="form-group full-width">
                <label>Services You're Interested In</label>
                <div className="form-services-grid">
                  {serviceOptions.map(service => (
                    <div key={service} className="form-checkbox">
                      <input type="checkbox" id={`service-${service}`} checked={formData.services.includes(service)} onChange={() => handleServiceChange(service)} />
                      <label htmlFor={`service-${service}`}>{service}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us more about your requirements..." rows={5} />
              </div>
              <button type="submit" className="form-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
              </button>
            </form>
          )}
        </div>
      </section>

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
              <h4>Company</h4>
              <ul>
                <li><a href="/#about">About</a></li>
                <li><a href="/#services">Services</a></li>
                <li><a href="/#sectors">Sectors</a></li>
                <li><a href="/#case-studies">Case Studies</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services/esg-reporting">ESG Reporting</Link></li>
                <li><Link href="/services/fm-performance-dashboard">FM Performance Dashboard</Link></li>
                <li><Link href="/services/project-management">Project Management</Link></li>
                <li><Link href="/services/cost-reduction">Cost Reduction</Link></li>
                <li><Link href="/services/tender-bid-support">Tender &amp; Bid Support</Link></li>
                <li><Link href="/services/energy-savings">Energy &amp; Sustainability</Link></li>
                <li><Link href="/services/fm-outsourcing">FM Outsourcing</Link></li>
                <li><Link href="/services/contract-mobilisation">Contract Mobilisation</Link></li>
                <li><Link href="/services/back-office-automation">Back-Office Automation</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:info@astongroupuae.com">info@astongroupuae.com</a></li>
                <li>Dubai, UAE</li>
              </ul>
              <h4 style={{ marginTop: '1.5rem' }}>Legal</h4>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/cookies">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>&copy; 2026 Aston Facilities Management. All rights reserved.</div>
            <div className="footer-bottom-links">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
