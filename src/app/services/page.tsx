'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';
import { Instagram, Check } from 'lucide-react';
import CosmosDemo from '@/components/CosmosDemo';
import AIPDemo from '@/components/AIPDemo';
import AICRMDemo from '@/components/AICRMDemo';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'aip',
      icon: null,
      features: [
        'RAG-based data integration',
        'Professional & consumer content separation',
        'AI-powered ad blocking',
        'Legal product whitelist management',
      ],
    },
    {
      id: 'cosmos',
      icon: null,
      features: [
        'Vision scan + NFC/RFID hybrid',
        'No direct database access required',
        'Automatic authenticity alerts',
        'Regulatory response support',
      ],
    },
    {
      id: 'crm',
      icon: null,
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
                {service.id === 'cosmos' ? (
                  <CosmosDemo />
                ) : service.id === 'aip' ? (
                  <AIPDemo />
                ) : service.id === 'crm' ? (
                  <AICRMDemo />
                ) : (
                  <div className="service-icon-large">
                    {service.icon}
                  </div>
                )}
              </div>
              <div className="service-content">
                {/* Subtitle removed as per request */}
                <h2>{t(`services.${service.id}.title`)}</h2>
                <p className="service-desc">{t(`services.${service.id}.desc`)}</p>
                <ul className="feature-list">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <span className="check"><Check size={16} strokeWidth={3} /></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.id === 'aip' && (
                  <div className="action-buttons">
                    {/* Instagram Button */}
                    <a href="https://www.instagram.com/aip_daily?igsh=MXg2eHJtNHAwZHpveg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn-icon insta-btn">
                      <Instagram size={24} />
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
            text-align: center;
          }

          .service-block.reverse {
            direction: ltr;
          }

          .service-visual {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          /* Center all demo component wrappers on mobile */
          .service-visual > * {
            margin-left: auto;
            margin-right: auto;
          }

          .service-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .feature-list {
            text-align: left;
            width: 100%;
            max-width: 360px;
          }

          .action-buttons {
            justify-content: center;
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
