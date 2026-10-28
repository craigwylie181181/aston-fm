'use client';

import { useState } from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { SERVICES } from '@/lib/site';

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
      <SiteNav />

      {/* Contact Section */}
      <section className="contact-page">
        <div className="section-container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 className="section-title">Get in Touch</h1>
            <p className="section-subtitle">Let&apos;s discuss your FM needs and how we can help drive performance across your UAE operations and beyond</p>
          </div>

          {submitted && (
            <div style={{ backgroundColor: '#d4edda', border: '1px solid #c3e6cb', color: '#155724', padding: '1rem', borderRadius: '4px', marginBottom: '2rem', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>Thank You</h3>
              <p style={{ margin: '0' }}>Your enquiry has been sent successfully. We&apos;ll be in touch shortly.</p>
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
                <span className="form-group-label" id="services-label">Services You&apos;re Interested In</span>
                <div className="form-services-grid" role="group" aria-labelledby="services-label">
                  {SERVICES.map(({ slug, name }) => (
                    <div key={slug} className="form-checkbox">
                      <input type="checkbox" id={`service-${slug}`} name="services" value={name} checked={formData.services.includes(name)} onChange={() => handleServiceChange(name)} />
                      <label htmlFor={`service-${slug}`}>{name}</label>
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

      <SiteFooter />
    </div>
  );
}
