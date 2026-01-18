'use client';

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
                    <p className="mono accent">// What We Build</p>
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
                                <span className="mono accent">{t(`services.${service.id}.subtitle`)}</span>
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
          border-bottom: 1px solid rgba(100, 255, 218, 0.1);
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
          background: linear-gradient(135deg, #112240 0%, #0a192f 100%);
          border: 1px solid rgba(100, 255, 218, 0.2);
          border-radius: 50%;
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
          color: rgba(100, 255, 218, 0.1);
          font-weight: 700;
        }

        .service-content .mono {
          display: block;
          margin-bottom: 0.5rem;
        }

        .service-content h2 {
          margin-bottom: 1rem;
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
          color: #ccd6f6;
          padding: 0.5rem 0;
        }

        .check {
          color: #64ffda;
          font-weight: 600;
        }

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
