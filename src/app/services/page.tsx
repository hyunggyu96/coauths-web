'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'aip',
      icon: '🧠',
      features: [
        'RAG-based data integration',
        'Professional & consumer content separation',
        'AI-powered ad blocking',
        'Legal product whitelist management',
      ],
    },
    {
      id: 'cosmos',
      icon: '🔐',
      features: [
        'Vision scan + NFC/RFID hybrid',
        'No direct database access required',
        'Automatic authenticity alerts',
        'Regulatory response support',
      ],
    },
    {
      id: 'crm',
      icon: '📈',
      features: [
        'Clinic size optimization',
        'Real-time compliance monitoring',
        'Built-in AI governance',
        'Enterprise-grade data security',
      ],
    },
  ];

  return (
    <div className="services">
      {/* Hero */}
      <section className="page-hero section">
        <div className="container">
          <h1>{t('services.title')}</h1>
          <p className="page-subtitle">
            Comprehensive solutions for trusted medical aesthetics information
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services-list section">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className={`service-block ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-visual">
                <div className="service-icon-large">
                  <span>{service.icon}</span>
                </div>
                <div className="service-number mono">{String(index + 1).padStart(2, '0')}</div>
              </div>
              <div className="service-content">
                {/* Subtitle removed as per request */}
                <h2>{t(`services.${service.id}.title`)}</h2>
                <p className="service-desc">{t(`services.${service.id}.desc`)}</p>
                <ul className="feature-list">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <span className="check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.id === 'aip' && (
                  <div className="action-buttons">
                    {/* Instagram Button */}
                    <a href="https://www.instagram.com/aip_daily?igsh=MXg2eHJtNHAwZHpveg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn-icon insta-btn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="https://aesthetics-intelligence.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-icon platform-btn">
                      <span className="aip-box-logo">AIP</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
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

        .service-block {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: center;
          padding: 4rem 0;
          border-bottom: 1px solid rgba(132, 170, 115, 0.2);
        }

        .service-block:last-child {
          border-bottom: none;
        }

        .service-block.reverse {
          direction: rtl;
        }

        .service-block.reverse > * {
          direction: ltr;
        }

        .service-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .service-icon-large {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #84AA73 0%, #6d905d 100%);
          border: 1px solid rgba(132, 170, 115, 0.2);
          border-radius: 50%;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
        }

        .service-number {
          position: absolute;
          top: 0;
          right: 2rem;
          font-size: 4rem;
          color: rgba(132, 170, 115, 0.15);
          font-weight: 700;
        }

        .service-content .mono {
          display: block;
          margin-bottom: 0.5rem;
        }

        .service-content h2 {
          margin-bottom: 1rem;
          font-size: clamp(1.5rem, 2.5vw, 2.5rem); /* Adjusted font size for single line */
          white-space: nowrap; /* Prevent line break if possible */
        }
        
        @media (max-width: 1024px) {
          .service-content h2 {
             white-space: normal; /* Allow wrap on smaller screens */
             font-size: 1.75rem;
          }
        }

        .service-desc {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          gap: 0.75rem;
          color: #7F7F7F;
          padding: 0.5rem 0;
        }

        .check {
          color: #84AA73;
          font-weight: 600;
        }

        /* Action Buttons - Moved outside media query for consistent layout */
        .action-buttons {
          display: flex;
          flex-direction: row; /* Ensure horizontal layout */
          gap: 1rem;
          margin-top: 2rem;
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center; /* Center content */
          padding: 0; /* Remove padding to fix size */
          width: 48px;  /* Fixed width */
          height: 48px; /* Fixed height */
          border-radius: 8px; /* Slightly rounded */
          border: 1px solid #84AA73;
          color: #84AA73;
          transition: all 0.3s ease;
          font-family: monospace;
          background: transparent;
        }

        .btn-icon.disabled {
          opacity: 0.3;
          cursor: not-allowed;
          pointer-events: none;
          border-color: #334155;
          color: #334155;
        }

        .btn-icon:hover {
          background: rgba(100, 255, 218, 0.1);
          transform: translateY(-2px);
        }

        .aip-box-logo {
            font-weight: 800;
            font-size: 1rem;
            letter-spacing: 0.5px;
            font-family: sans-serif;
            /* Removed internal border to match instgram button style */
            line-height: 1;
        }
        
        /* Remove duplicate styles in media query if necessary or override */
        @media (max-width: 768px) {
          .service-block {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .service-block.reverse {
            direction: ltr;
          }

          .service-icon-large {
            width: 150px;
            height: 150px;
            font-size: 3.5rem;
          }

          .service-number {
            right: 1rem;
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}
