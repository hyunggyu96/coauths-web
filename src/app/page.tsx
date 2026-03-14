'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useTranslation } from '@/lib/i18n';
import { BarChart3, Megaphone, Globe, AlertTriangle, ShieldCheck, Bot, RefreshCw, CheckCircle2 } from 'lucide-react';

/* ─── Scroll Reveal hook ─────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const { t } = useTranslation();
  useScrollReveal();

  const problems = [
    { key: '1', icon: <BarChart3 size={28} strokeWidth={1.5} color="#84AA73" /> },
    { key: '2', icon: <Megaphone size={28} strokeWidth={1.5} color="#84AA73" /> },
    { key: '3', icon: <Globe size={28} strokeWidth={1.5} color="#84AA73" /> },
    { key: '4', icon: <AlertTriangle size={28} strokeWidth={1.5} color="#84AA73" /> },
  ];

  const solutions = [
    { key: '1', icon: <ShieldCheck size={28} strokeWidth={1.5} color="#84AA73" /> },
    { key: '2', icon: <Bot size={28} strokeWidth={1.5} color="#84AA73" /> },
    { key: '3', icon: <RefreshCw size={28} strokeWidth={1.5} color="#84AA73" /> },
    { key: '4', icon: <CheckCircle2 size={28} strokeWidth={1.5} color="#84AA73" /> },
  ];

  return (
    <div className="home">

      {/* ═══════════════════════════════════════
          Hero
      ═══════════════════════════════════════ */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-inner">
            <p className="hero-eyebrow fade-up" style={{ animationDelay: '0s' }}>
              AI-Driven Neutrality for the Global Aesthetic Medical Market
            </p>
            <h1 className="hero-heading fade-up" style={{ animationDelay: '0.1s' }}>
              {t('hero.tagline')}
            </h1>
            <p className="hero-sub fade-up" style={{ animationDelay: '0.2s' }}>
              {t('hero.description')}
            </p>
            <div className="hero-cta fade-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/services" className="btn btn-primary">
                {t('hero.cta.primary')}
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                {t('hero.cta.secondary')}
              </Link>
            </div>
          </div>
        </div>

        {/* Background decorative */}
        <div className="hero-bg-orb hero-orb-1" />
        <div className="hero-bg-orb hero-orb-2" />
      </section>

      {/* ═══════════════════════════════════════
          Product Cards (Three Pillars)
      ═══════════════════════════════════════ */}
      <section className="pillars-section section">
        <div className="container">
          <div className="section-header centered reveal">
            <span className="section-eyebrow">Products</span>
            <h2>Three Pillars</h2>
            <p>An interconnected suite of tools built for the modern aesthetic medical industry.</p>
          </div>

          <div className="pillars-grid">
            {/* AIP */}
            <div className="pillar-card reveal reveal-delay-1">
              <div className="pillar-preview pillar-preview-dark">
                <div className="preview-aip">
                  <div className="mini-hub-wrap">
                    <div className="mini-orbit">
                      {['📡', '🔬', '📊', '⚖️', '🌐', '🤖'].map((icon, i) => (
                        <div key={i} className="mini-node" style={{
                          transform: `rotate(${i * 60}deg) translateX(68px) rotate(-${i * 60}deg)`
                        }}>{icon}</div>
                      ))}
                    </div>
                    <div className="mini-hub">AIP</div>
                  </div>
                  <div className="mini-feed">
                    <span className="mini-feed-dot" />
                    <span>LIVE · Aggregating 6 sources</span>
                  </div>
                </div>
              </div>
              <div className="pillar-info">
                <span className="pillar-badge badge-blue">Intelligence Platform</span>
                <h3>AIP</h3>
                <p>Real-time aggregation of regulations, research, and industry news — ad-free.</p>
              </div>
            </div>

            {/* Cosmos */}
            <div className="pillar-card reveal reveal-delay-2">
              <div className="pillar-preview pillar-preview-dark">
                <div className="preview-cosmos">
                  <div className="mini-phone">
                    <div className="mini-screen">
                      <div className="mini-scan-line" />
                      <div className="mini-product-box">💉</div>
                      <div className="mini-verified">
                        <span>✓</span> Verified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pillar-info">
                <span className="pillar-badge badge-green">Authentication</span>
                <h3>Cosmos</h3>
                <p>Scan any aesthetic product and verify its authenticity instantly with AI.</p>
              </div>
            </div>

            {/* AI CRM */}
            <div className="pillar-card reveal reveal-delay-3">
              <div className="pillar-preview pillar-preview-dark">
                <div className="preview-crm">
                  <div className="mini-crm-header">
                    <span className="mini-crm-logo">AI CRM</span>
                    <span className="mini-risk-badge">2 at risk</span>
                  </div>
                  <div className="mini-patient-list">
                    {[
                      { name: 'Kim Ji-yeon', tag: 'VIP', risk: 'low', color: '#f59e0b', riskColor: '#34d399' },
                      { name: 'Park Soo-ah', tag: 'NEW', risk: 'HIGH', color: '#60a5fa', riskColor: '#f87171' },
                      { name: 'Lee Min-jun', tag: 'REG', risk: 'MED', color: '#84AA73', riskColor: '#f59e0b' },
                    ].map((p, i) => (
                      <div key={i} className="mini-patient-row">
                        <span className="mini-patient-name">{p.name}</span>
                        <span className="mini-patient-tag" style={{ color: p.color }}>{p.tag}</span>
                        <span className="mini-patient-risk" style={{ color: p.riskColor }}>{p.risk}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mini-promo-hint">💌 3 promotions ready to send</div>
                </div>
              </div>
              <div className="pillar-info">
                <span className="pillar-badge badge-purple">Smart CRM</span>
                <h3>AI CRM</h3>
                <p>Predict no-shows, manage VIP patients, and send AI-crafted promotions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          The Challenge (Problems)
      ═══════════════════════════════════════ */}
      <section className="challenge-section section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-eyebrow">The Problem</span>
            <h2>{t('problem.title')}</h2>
            <p>{t('problem.subtitle')}</p>
          </div>

          <div className="challenge-grid">
            {problems.map((problem, index) => (
              <div
                key={problem.key}
                className={`challenge-card card-surface reveal reveal-delay-${index + 1}`}
              >
                <div className="challenge-icon">{problem.icon}</div>
                <h3>{t(`problem.${problem.key}.title`)}</h3>
                <p>{t(`problem.${problem.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Solutions
      ═══════════════════════════════════════ */}
      <section className="solutions-section section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-eyebrow section-eyebrow-accent">Our Answer</span>
            <h2>{t('solution.title')}</h2>
            <p>{t('solution.subtitle')}</p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div
                key={solution.key}
                className={`solution-card reveal reveal-delay-${index + 1}`}
              >
                <div className="solution-icon">{solution.icon}</div>
                <h3>{t(`solution.${solution.key}.title`)}</h3>
                <p>{t(`solution.${solution.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA Banner
      ═══════════════════════════════════════ */}
      <section className="cta-banner section-sm">
        <div className="container">
          <div className="cta-inner reveal">
            <h2>Ready to build trust?</h2>
            <p>Join the next generation of transparent, AI-powered medical aesthetics.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">Request a Demo</Link>
              <Link href="/services" className="btn btn-ghost">Explore Products</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ═══ Hero ═══════════════════════════════ */
        .hero-section {
          position: relative;
          min-height: calc(100vh - 64px);
          display: flex;
          align-items: center;
          text-align: center;
          overflow: hidden;
          padding: clamp(4rem, 10vh, 8rem) 0 clamp(3rem, 8vh, 6rem);
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 820px;
          margin: 0 auto;
        }

        .hero-eyebrow {
          display: inline-block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #6e6e73;
          letter-spacing: 0.01em;
          margin-bottom: 1.5rem;
        }

        .hero-heading {
          font-size: clamp(2.5rem, 7vw, 5.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.04;
          color: #1d1d1f;
          margin-bottom: 1.5rem;
          white-space: pre-wrap;
        }

        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #6e6e73;
          max-width: 580px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
        }

        .hero-cta {
          display: flex;
          gap: 0.875rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Background orbs */
        .hero-bg-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.55;
        }

        .hero-orb-1 {
          width: 600px;
          height: 600px;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(132, 170, 115, 0.22) 0%, transparent 70%);
        }

        .hero-orb-2 {
          width: 400px;
          height: 400px;
          bottom: -100px;
          right: 10%;
          background: radial-gradient(circle, rgba(132, 170, 115, 0.12) 0%, transparent 70%);
        }

        /* ═══ Pillars ════════════════════════════ */
        .pillars-section {
          background: #F5F5F7;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .pillar-card {
          background: #FFFFFF;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      border-color 0.35s ease;
        }

        .pillar-card:hover {
          transform: translateY(-6px);
          border-color: rgba(132, 170, 115, 0.4);
          box-shadow: 0 20px 60px rgba(0,0,0,0.10), 0 0 0 1px rgba(132,170,115,0.15);
        }

        .pillar-preview {
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .pillar-preview-dark {
          background: linear-gradient(160deg, #0d1a0d 0%, #080f08 100%);
          border-bottom: 1px solid rgba(132,170,115,0.1);
        }

        .pillar-info {
          padding: 1.375rem 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }

        .pillar-badge {
          display: inline-block;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 980px;
          width: fit-content;
        }

        .badge-blue   { background: rgba(96,165,250,0.12); color: #60a5fa; border: 1px solid rgba(96,165,250,0.25); }
        .badge-green  { background: rgba(132,170,115,0.12); color: #84AA73; border: 1px solid rgba(132,170,115,0.3); }
        .badge-purple { background: rgba(167,139,250,0.12); color: #a78bfa; border: 1px solid rgba(167,139,250,0.25); }

        .pillar-info h3 {
          font-size: 1.3rem;
          font-weight: 800;
          color: #1d1d1f;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .pillar-info p {
          font-size: 0.875rem;
          color: #6e6e73;
          line-height: 1.6;
          margin: 0;
        }

        /* ═══ Challenge (Problems) ═══════════════ */
        .challenge-section {
          background: #FFFFFF;
        }

        .challenge-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .challenge-card {
          background: #F5F5F7;
          border: 1px solid transparent;
          border-radius: 18px;
          padding: 2rem;
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .challenge-card:hover {
          border-color: rgba(132, 170, 115, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
        }

        .challenge-icon {
          width: 52px;
          height: 52px;
          background: rgba(132, 170, 115, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .challenge-card h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .challenge-card p {
          font-size: 0.9rem;
          color: #6e6e73;
          line-height: 1.65;
        }

        /* ═══ Solutions ══════════════════════════ */
        .solutions-section {
          background: #F5F5F7;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .solution-card {
          background: #FFFFFF;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 18px;
          padding: 2rem;
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .solution-card:hover {
          border-color: rgba(132, 170, 115, 0.35);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
        }

        .solution-icon {
          width: 52px;
          height: 52px;
          background: rgba(132, 170, 115, 0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .solution-card h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #1d1d1f;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .solution-card p {
          font-size: 0.9rem;
          color: #6e6e73;
          line-height: 1.65;
        }

        /* ═══ CTA Banner ═════════════════════════ */
        .cta-banner {
          background: #FFFFFF;
        }

        .cta-inner {
          background: linear-gradient(135deg, #f0f6ed 0%, #f9fbf8 50%, #edf5ea 100%);
          border: 1px solid rgba(132, 170, 115, 0.25);
          border-radius: 28px;
          padding: clamp(3rem, 6vw, 5rem) clamp(2rem, 6vw, 5rem);
          text-align: center;
        }

        .cta-inner h2 {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800;
          color: #1d1d1f;
          letter-spacing: -0.03em;
          margin-bottom: 0.875rem;
        }

        .cta-inner > p {
          font-size: 1.0625rem;
          color: #6e6e73;
          margin-bottom: 2rem;
        }

        .cta-actions {
          display: flex;
          gap: 0.875rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ═══ AIP mini orbit ════════════════════ */
        .preview-aip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .mini-hub-wrap {
          position: relative;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mini-orbit {
          position: absolute;
          inset: 0;
          animation: orbitSpin 12s linear infinite;
        }

        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .mini-node {
          position: absolute;
          top: 50%; left: 50%;
          width: 26px; height: 26px;
          margin: -13px;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10,15,10,0.9);
          border: 1px solid rgba(132,170,115,0.3);
          border-radius: 50%;
        }

        .mini-hub {
          width: 58px; height: 58px;
          background: linear-gradient(135deg, #84AA73, #4a7a3a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          color: white;
          letter-spacing: 0.5px;
          box-shadow: 0 0 20px rgba(132,170,115,0.6);
          z-index: 1;
          position: relative;
        }

        .mini-feed {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 8px;
          color: #84AA73;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .mini-feed-dot {
          width: 5px; height: 5px;
          background: #84AA73;
          border-radius: 50%;
          animation: feedPulse 1.5s ease-in-out infinite;
        }

        @keyframes feedPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.7); }
        }

        /* ═══ Cosmos mini phone ═════════════════ */
        .preview-cosmos {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mini-phone {
          width: 90px; height: 150px;
          background: #0a0f0a;
          border: 2px solid rgba(132,170,115,0.4);
          border-radius: 18px;
          padding: 7px;
          box-shadow: 0 0 28px rgba(132,170,115,0.25);
        }

        .mini-screen {
          width: 100%; height: 100%;
          background: #050a05;
          border-radius: 9px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .mini-scan-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #84AA73, transparent);
          animation: miniScan 2s ease-in-out infinite;
          box-shadow: 0 0 6px #84AA73;
        }

        @keyframes miniScan {
          0%   { top: 0%; opacity: 1; }
          100% { top: 100%; opacity: 0.3; }
        }

        .mini-product-box {
          font-size: 32px;
          filter: drop-shadow(0 0 8px rgba(132,170,115,0.6));
        }

        .mini-verified {
          font-size: 8px;
          font-weight: 700;
          color: #34d399;
          background: rgba(52,211,153,0.12);
          border: 1px solid rgba(52,211,153,0.3);
          border-radius: 10px;
          padding: 2px 7px;
          animation: verifiedPop 3s ease-in-out infinite;
        }

        @keyframes verifiedPop {
          0%, 60%, 100% { opacity: 1; transform: scale(1); }
          30%            { opacity: 0; transform: scale(0.8); }
        }

        /* ═══ CRM mini ══════════════════════════ */
        .preview-crm {
          width: 100%;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mini-crm-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mini-crm-logo {
          font-size: 9px;
          font-weight: 800;
          color: #84AA73;
          letter-spacing: 0.5px;
        }

        .mini-risk-badge {
          font-size: 7px;
          font-weight: 700;
          color: #f87171;
          background: rgba(248,113,113,0.12);
          border: 1px solid rgba(248,113,113,0.3);
          border-radius: 10px;
          padding: 1px 6px;
          animation: alertPulse2 2s ease-in-out infinite;
        }

        @keyframes alertPulse2 {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }

        .mini-patient-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mini-patient-row {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 6px;
          background: rgba(132,170,115,0.05);
          border: 1px solid rgba(132,170,115,0.1);
          border-radius: 5px;
        }

        .mini-patient-name {
          font-size: 7.5px;
          color: #c8d8c0;
          flex: 1;
          font-weight: 500;
        }

        .mini-patient-tag, .mini-patient-risk {
          font-size: 6.5px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .mini-promo-hint {
          font-size: 7.5px;
          color: #a78bfa;
          text-align: center;
          padding: 4px;
          background: rgba(167,139,250,0.07);
          border: 1px solid rgba(167,139,250,0.15);
          border-radius: 6px;
        }

        /* ═══ Responsive ════════════════════════ */
        @media (max-width: 900px) {
          .pillars-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .challenge-grid,
          .solutions-grid {
            grid-template-columns: 1fr;
          }

          .hero-heading {
            white-space: normal;
          }

          .cta-inner {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
