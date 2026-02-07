'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact">
      {/* Hero */}
      <section className="page-hero section">
        <div className="container">
          <p className="mono accent">// Get in Touch</p>
          <h1>{t('contact.title')}</h1>
          <p className="page-subtitle">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">{t('contact.form.name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">{t('contact.form.company')}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">{t('contact.form.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn">
                    {t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info">
              <h3>{t('contact.info.title')}</h3>
              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <div>
                    <p className="info-label">Email</p>
                    <p className="info-value">jonathan@coauths.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">🌐</span>
                  <div>
                    <p className="info-label">Website</p>
                    <p className="info-value">www.coauths.com</p>
                  </div>
                </div>
              </div>

              <div className="trust-badges">
                <p className="mono accent">// Our Commitment</p>
                <ul>
                  <li>No brand advertising</li>
                  <li>No marketing data usage</li>
                  <li>AI ethics compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          padding-top: 4rem;
          padding-bottom: 2rem;
          text-align: center;
        }

        .page-hero .mono {
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          font-size: 1.25rem;
          margin-top: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
        }

        .contact-form {
          background: #112240;
          border: 1px solid rgba(100, 255, 218, 0.1);
          border-radius: 8px;
          padding: 2.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #ccd6f6;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          background: #0a192f;
          border: 1px solid rgba(100, 255, 218, 0.2);
          border-radius: 4px;
          color: #e6f1ff;
          font-size: 1rem;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #64ffda;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          margin-top: 1rem;
        }

        .success-message {
          background: #112240;
          border: 1px solid #64ffda;
          border-radius: 8px;
          padding: 3rem;
          text-align: center;
        }

        .success-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: rgba(100, 255, 218, 0.1);
          border-radius: 50%;
          color: #64ffda;
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .success-message h3 {
          margin-bottom: 0.5rem;
        }

        .contact-info h3 {
          margin-bottom: 2rem;
        }

        .info-items {
          margin-bottom: 3rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .info-icon {
          font-size: 1.5rem;
        }

        .info-label {
          font-size: 0.75rem;
          color: #8892b0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .info-value {
          color: #e6f1ff;
        }

        .trust-badges {
          padding: 1.5rem;
          background: rgba(100, 255, 218, 0.05);
          border-radius: 8px;
        }

        .trust-badges .mono {
          margin-bottom: 1rem;
        }

        .trust-badges ul {
          list-style: none;
          padding: 0;
        }

        .trust-badges li {
          color: #ccd6f6;
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
        }

        .trust-badges li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #64ffda;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
