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
                    <a href="https://www.aesthetic-intelligence.ai/" target="_blank" rel="noopener noreferrer" className="btn-icon platform-btn">
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
        /* ─── Page Hero ─── */
        .page-hero {
          padding-top: 3.5rem;
          padding-bottom: 2rem;
          text-align: center;
        }

        .page-eyebrow {
          display: inline-block;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #999999;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          font-size: 1.125rem;
          color: #6e6e73;
          margin-top: 1rem;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        /* ─── Service Block ─── */
        .service-block {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: center;
          padding: 5rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.07);
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
          border-radius: 50%;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          box-shadow: 0 12px 40px rgba(132,170,115,0.3);
        }

        .service-content h2 {
          margin-bottom: 1rem;
          font-size: clamp(1.75rem, 3vw, 2.75rem);
          font-weight: 800;
          color: #1d1d1f;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .service-desc {
          font-size: 1.0625rem;
          color: #6e6e73;
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        /* ─── Feature list ─── */
        .feature-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #424245;
          padding: 0.5625rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-size: 0.9375rem;
        }

        .feature-list li:last-child { border-bottom: none; }

        .check {
          color: #84AA73;
          flex-shrink: 0;
        }

        /* ─── Action buttons ─── */
        .action-buttons {
          display: flex;
          flex-direction: row;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 1px solid rgba(132, 170, 115, 0.4);
          color: #84AA73;
          transition: all 0.25s ease;
          background: rgba(132, 170, 115, 0.06);
        }

        .btn-icon:hover {
          background: rgba(132, 170, 115, 0.15);
          border-color: #84AA73;
          transform: translateY(-2px);
        }

        .aip-box-logo {
          font-weight: 800;
          font-size: 0.9375rem;
          letter-spacing: 0.5px;
          font-family: sans-serif;
          line-height: 1;
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .service-block {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
            padding: 3.5rem 0;
          }

          .service-block.reverse { direction: ltr; }

          .service-visual {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

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

          .action-buttons { justify-content: center; }

          .service-icon-large {
            width: 150px;
            height: 150px;
            font-size: 3.5rem;
          }
        }
      `}</style>
    </div>
  );
}
