'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';
import { BarChart3, Megaphone, Globe, AlertTriangle, ShieldCheck, Bot, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  const problems = [
    { key: '1', icon: <BarChart3 size={40} strokeWidth={1.5} color="#84AA73" /> },
    { key: '2', icon: <Megaphone size={40} strokeWidth={1.5} color="#84AA73" /> },
    { key: '3', icon: <Globe size={40} strokeWidth={1.5} color="#84AA73" /> },
    { key: '4', icon: <AlertTriangle size={40} strokeWidth={1.5} color="#84AA73" /> },
  ];

  const solutions = [
    { key: '1', icon: <ShieldCheck size={40} strokeWidth={1.5} color="#FFFFFF" /> },
    { key: '2', icon: <Bot size={40} strokeWidth={1.5} color="#FFFFFF" /> },
    { key: '3', icon: <RefreshCw size={40} strokeWidth={1.5} color="#FFFFFF" /> },
    { key: '4', icon: <CheckCircle2 size={40} strokeWidth={1.5} color="#FFFFFF" /> },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <div className="hero-content">

            <h1 className="fade-in stagger-1 text-gradient" style={{ whiteSpace: 'pre-wrap' }}>{t('hero.tagline')}</h1>
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

      <div className="section-divider"></div>

      {/* Problems */}
      <section className="problems section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('problem.title')}</h2>
            <p className="section-subtitle">{t('problem.subtitle')}</p>
          </div>

          <div className="grid-4 stagger">
            {problems.map((problem, index) => (
              <div key={problem.key} className="card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-icon" style={{ animationDelay: `${index * 0.5}s` }}>{problem.icon}</div>
                <h3>{t(`problem.${problem.key}.title`)}</h3>
                <p>{t(`problem.${problem.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Solutions */}
      <section className="solutions section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('solution.title')}</h2>
            <p className="section-subtitle">{t('solution.subtitle')}</p>
          </div>

          <div className="grid-4 stagger">
            {solutions.map((solution) => (
              <div key={solution.key} className="card solution-card">
                <div className="card-icon">{solution.icon}</div>
                <h3>{t(`solution.${solution.key}.title`)}</h3>
                <p>{t(`solution.${solution.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to learn more?</h2>
            <p>Discover how CoAuths is building the future of trusted medical aesthetics information.</p>
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
          background: radial-gradient(circle at 50% 50%, rgba(132, 170, 115, 0.08) 0%, transparent 50%);
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
          background: #84AA73;
          border: none;
          color: #FFFFFF;
        }

        .solution-card h3,
        .solution-card p {
          color: #FFFFFF !important;
        }

        .solution-card .card-icon {
          color: #FFFFFF;
        }

        .cta-section {
          background: linear-gradient(180deg, transparent 0%, rgba(132, 170, 115, 0.08) 100%);
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
