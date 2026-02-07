'use client';

import { useTranslation } from '@/lib/i18n';
import { Ban, Lock, Scale, Search } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const principles = [
    { key: '1', icon: <Ban size={40} strokeWidth={1.5} color="#FFFFFF" /> },
    { key: '2', icon: <Lock size={40} strokeWidth={1.5} color="#FFFFFF" /> },
    { key: '3', icon: <Scale size={40} strokeWidth={1.5} color="#FFFFFF" /> },
    { key: '4', icon: <Search size={40} strokeWidth={1.5} color="#FFFFFF" /> },
  ];

  return (
    <div className="about">
      {/* Hero */}
      <section className="page-hero section">
        <div className="container">

          <h1>{t('about.title')}</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="mission section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-label">
              <h2>{t('about.mission.title')}</h2>
            </div>
            <div className="mission-text">
              <p className="lead">{t('about.mission.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="principles section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about.principles.title')}</h2>
          </div>

          {/* Core Values moved here */}
          <div className="values-content override-margin">
            <div className="value-item">
              <h3>{t('about.values.neutrality.title')}</h3>
              <p>{t('about.values.neutrality.desc')}</p>
            </div>
            <div className="value-item">
              <h3>{t('about.values.transparency.title')}</h3>
              <p>{t('about.values.transparency.desc')}</p>
            </div>
            <div className="value-item">
              <h3>{t('about.values.compliance.title')}</h3>
              <p>{t('about.values.compliance.desc')}</p>
            </div>
          </div>

          <div className="principles-grid">
            {principles.map((principle) => (
              <div key={principle.key} className="principle-card">
                <div className="principle-icon">{principle.icon}</div>
                <div className="card-divider"></div>
                <p>{t(`about.principle.${principle.key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          padding-top: 4rem;
          padding-bottom: 2rem;
        }

        .page-hero .mono {
          margin-bottom: 0.5rem;
        }

        .mission-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        .mission-label .mono {
          display: block;
          margin-bottom: 0.5rem;
        }

        .mission-text .lead {
          font-size: 1.5rem;
          line-height: 1.6;
          color: #7F7F7F;
          font-weight: 500;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .section-header .mono {
          display: block;
          margin-bottom: 0.5rem;
        }

        .values-content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(132, 170, 115, 0.2);
        }

        .value-item h3 {
          color: #222F30;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }
        
        .value-item p {
          font-size: 0.95rem;
          word-break: keep-all;
          line-height: 1.6;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .principle-card {
          background: #84AA73 !important;
          border: 1px solid rgba(132, 170, 115, 0.2);
          border-radius: 8px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
          color: #FFFFFF !important;
        }

        .principle-card:hover {
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-4px);
        }

        .principle-number {
          display: none;
        }

        .principle-icon {
          display: block;
          margin-bottom: 1rem;
          color: #FFFFFF;
        }
        
        .card-divider {
             width: 40px;
             height: 2px;
             background-color: rgba(255, 255, 255, 0.3);
             margin-bottom: 1rem;
        }

        .principle-card p {
          color: #FFFFFF !important;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .mission-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .principles-grid,
          .values-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
