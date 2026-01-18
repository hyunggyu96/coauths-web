'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';

export default function Home() {
  const { t } = useTranslation();

  const problems = [
    { key: '1', icon: '📊' },
    { key: '2', icon: '📢' },
    { key: '3', icon: '🌐' },
    { key: '4', icon: '⚠️' },
  ];

  const solutions = [
    { key: '1', icon: '🚫' },
    { key: '2', icon: '🤖' },
    { key: '3', icon: '🔄' },
    { key: '4', icon: '✅' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <div className="hero-content">
            <p className="mono accent">// Building Trust in Medical Aesthetics</p>
            <h1>{t('hero.tagline')}</h1>
            <p className="hero-description">{t('hero.description')}</p>
            <div className="hero-cta">
              <Link href="/services" className="btn btn-primary">
                {t('hero.cta.primary')}
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                {t('hero.cta.secondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problems section">
        <div className="container">
          <div className="section-header">
            <p className="mono accent">// The Challenge</p>
            <h2>{t('problem.title')}</h2>
            <p className="section-subtitle">{t('problem.subtitle')}</p>
          </div>
          <div className="grid-2 stagger">
            {problems.map((problem) => (
              <div key={problem.key} className="card">
                <span className="card-icon">{problem.icon}</span>
                <h3>{t(`problem.${problem.key}.title`)}</h3>
                <p>{t(`problem.${problem.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solutions section">
        <div className="container">
          <div className="section-header">
            <p className="mono accent">// Our Approach</p>
            <h2>{t('solution.title')}</h2>
            <p className="section-subtitle">{t('solution.subtitle')}</p>
          </div>
          <div className="grid-2 stagger">
            {solutions.map((solution) => (
              <div key={solution.key} className="card solution-card">
                <span className="card-icon">{solution.icon}</span>
                <h3>{t(`solution.${solution.key}.title`)}</h3>
                <p>{t(`solution.${solution.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to learn more?</h2>
            <p>Discover how AI Sapiens is building the future of trusted medical aesthetics information.</p>
            <Link href="/contact" className="btn btn-primary">
              {t('hero.cta.secondary')}
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: calc(100vh - 70px);
          display: flex;
          align-items: center;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-content .mono {
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.25rem;
          margin: 1.5rem 0 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header .mono {
          margin-bottom: 0.5rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          margin-top: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .card-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .card h3 {
          margin-bottom: 0.75rem;
        }

        .solution-card {
          border-left: 3px solid #64ffda;
        }

        .cta-section {
          background: linear-gradient(180deg, transparent 0%, rgba(100, 255, 218, 0.05) 100%);
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          margin-bottom: 1rem;
        }

        .cta-content p {
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding-top: 4rem;
          }
        }
      `}</style>
    </div>
  );
}
