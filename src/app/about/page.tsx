'use client';

import { useTranslation } from '@/lib/i18n';

export default function About() {
    const { t } = useTranslation();

    const principles = [
        { key: '1', icon: '🚫' },
        { key: '2', icon: '🔒' },
        { key: '3', icon: '⚖️' },
        { key: '4', icon: '🔍' },
    ];

    return (
        <div className="about">
            {/* Hero */}
            <section className="page-hero section">
                <div className="container">
                    <p className="mono accent">// About Us</p>
                    <h1>{t('about.title')}</h1>
                </div>
            </section>

            {/* Mission */}
            <section className="mission section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-label">
                            <span className="mono accent">01</span>
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
                        <span className="mono accent">02</span>
                        <h2>{t('about.principles.title')}</h2>
                    </div>
                    <div className="principles-grid">
                        {principles.map((principle, index) => (
                            <div key={principle.key} className="principle-card">
                                <div className="principle-number mono accent">0{index + 1}</div>
                                <span className="principle-icon">{principle.icon}</span>
                                <p>{t(`about.principle.${principle.key}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="values section">
                <div className="container">
                    <div className="values-content">
                        <div className="value-item">
                            <h3>Neutrality</h3>
                            <p>We maintain strict independence from brands and manufacturers to ensure unbiased information delivery.</p>
                        </div>
                        <div className="value-item">
                            <h3>Transparency</h3>
                            <p>Every piece of information we provide is traceable, verifiable, and free from hidden agendas.</p>
                        </div>
                        <div className="value-item">
                            <h3>Compliance</h3>
                            <p>We adhere to the highest global regulatory standards and continuously monitor for changes.</p>
                        </div>
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
          color: #ccd6f6;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .section-header .mono {
          display: block;
          margin-bottom: 0.5rem;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .principle-card {
          background: #112240;
          border: 1px solid rgba(100, 255, 218, 0.1);
          border-radius: 8px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .principle-card:hover {
          border-color: rgba(100, 255, 218, 0.3);
          transform: translateY(-4px);
        }

        .principle-number {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 0.75rem;
        }

        .principle-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 1rem;
        }

        .principle-card p {
          color: #e6f1ff;
          font-weight: 500;
        }

        .values-content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .value-item {
          text-align: center;
          padding: 2rem;
        }

        .value-item h3 {
          color: #64ffda;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .mission-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .principles-grid {
            grid-template-columns: 1fr;
          }

          .values-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
        </div>
    );
}
