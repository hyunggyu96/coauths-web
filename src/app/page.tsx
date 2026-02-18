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

          {/* Product cards — visible on first screen */}
          <div className="hero-products">

            {/* AIP Card */}
            <div className="product-card">
              <div className="product-preview">
                <div className="preview-aip">
                  <div className="mini-hub-wrap">
                    <div className="mini-orbit">
                      {['📡', '🔬', '📊', '⚖️', '🌐', '🤖'].map((icon, i) => (
                        <div key={i} className="mini-node" style={{
                          transform: `rotate(${i * 60}deg) translateX(52px) rotate(-${i * 60}deg)`
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
              <div className="product-info">
                <div className="product-badge" style={{ background: 'rgba(96,165,250,0.12)', color: '#60a5fa', borderColor: 'rgba(96,165,250,0.3)' }}>Intelligence Platform</div>
                <h3>AIP</h3>
                <p>Real-time aggregation of regulations, research, and industry news — ad-free.</p>
                <ul className="product-features">
                  <li>📡 6 live data sources</li>
                  <li>🔒 Zero advertisements</li>
                  <li>🌍 Global regulatory sync</li>
                </ul>
                <Link href="/services" className="product-link">Explore AIP →</Link>
              </div>
            </div>

            {/* Cosmos Card */}
            <div className="product-card product-card-featured">
              <div className="product-preview">
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
              <div className="product-info">
                <div className="product-badge" style={{ background: 'rgba(132,170,115,0.12)', color: '#84AA73', borderColor: 'rgba(132,170,115,0.3)' }}>Authentication</div>
                <h3>Cosmos</h3>
                <p>Scan any aesthetic product and verify its authenticity instantly with AI.</p>
                <ul className="product-features">
                  <li>📷 Vision + NFC/RFID scan</li>
                  <li>✅ Instant verification</li>
                  <li>🚨 Counterfeit alerts</li>
                </ul>
                <Link href="/services" className="product-link">Explore Cosmos →</Link>
              </div>
            </div>

            {/* AI CRM Card */}
            <div className="product-card">
              <div className="product-preview">
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
              <div className="product-info">
                <div className="product-badge" style={{ background: 'rgba(167,139,250,0.12)', color: '#a78bfa', borderColor: 'rgba(167,139,250,0.3)' }}>Smart CRM</div>
                <h3>AI CRM</h3>
                <p>Predict no-shows, manage VIP patients, and send AI-crafted promotions.</p>
                <ul className="product-features">
                  <li>⚠️ No-show prediction</li>
                  <li>👑 VIP patient management</li>
                  <li>💌 AI-suggested promotions</li>
                </ul>
                <Link href="/services" className="product-link">Explore AI CRM →</Link>
              </div>
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
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          padding-top: 5vh;
          padding-bottom: 4vh;
          text-align: center;
          background: radial-gradient(circle at 50% 30%, rgba(132, 170, 115, 0.08) 0%, transparent 55%);
        }

        .hero-content {
          max-width: 860px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: clamp(1.6rem, 3.5vw, 2.8rem);
          line-height: 1.25;
          white-space: pre-wrap;
        }

        .hero-description {
          font-size: 1rem;
          margin: 1rem 0 1.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .hero-products {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
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

        /* ═══════════════════════════════
           Products Showcase
        ═══════════════════════════════ */
        .products-section {
          background: radial-gradient(ellipse at 50% 0%, rgba(132,170,115,0.06) 0%, transparent 60%);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .product-card {
          background: linear-gradient(160deg, #0d1a0d 0%, #080f08 100%);
          border: 1px solid rgba(132,170,115,0.18);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
          border-color: rgba(132,170,115,0.5);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(132,170,115,0.12);
        }

        .product-card-featured {
          border-color: rgba(132,170,115,0.4);
          box-shadow: 0 0 0 1px rgba(132,170,115,0.1), 0 10px 40px rgba(0,0,0,0.3);
          position: relative;
        }

        .product-card-featured::before {
          content: '★ Featured';
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 9px;
          font-weight: 700;
          color: #84AA73;
          background: rgba(132,170,115,0.12);
          border: 1px solid rgba(132,170,115,0.3);
          border-radius: 20px;
          padding: 3px 8px;
          letter-spacing: 0.5px;
          z-index: 2;
        }

        /* ── Preview area ── */
        .product-preview {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.3);
          border-bottom: 1px solid rgba(132,170,115,0.1);
          overflow: hidden;
          position: relative;
        }

        /* ── AIP mini orbit ── */
        .preview-aip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .mini-hub-wrap {
          position: relative;
          width: 120px;
          height: 120px;
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
          top: 50%;
          left: 50%;
          width: 22px;
          height: 22px;
          margin: -11px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10,15,10,0.9);
          border: 1px solid rgba(132,170,115,0.3);
          border-radius: 50%;
        }

        .mini-hub {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #84AA73, #4a7a3a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 800;
          color: white;
          letter-spacing: 0.5px;
          box-shadow: 0 0 16px rgba(132,170,115,0.5);
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
          width: 5px;
          height: 5px;
          background: #84AA73;
          border-radius: 50%;
          animation: feedPulse 1.5s ease-in-out infinite;
        }

        @keyframes feedPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.7); }
        }

        /* ── Cosmos mini phone ── */
        .preview-cosmos {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mini-phone {
          width: 72px;
          height: 120px;
          background: #0a0f0a;
          border: 2px solid rgba(132,170,115,0.4);
          border-radius: 14px;
          padding: 6px;
          box-shadow: 0 0 20px rgba(132,170,115,0.2);
        }

        .mini-screen {
          width: 100%;
          height: 100%;
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
          top: 0;
          left: 0;
          right: 0;
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
          font-size: 22px;
          filter: drop-shadow(0 0 6px rgba(132,170,115,0.5));
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

        /* ── CRM mini ── */
        .preview-crm {
          width: 100%;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
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

        .mini-patient-tag {
          font-size: 6.5px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .mini-patient-risk {
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

        /* ── Product info ── */
        .product-info {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .product-badge {
          display: inline-block;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid;
          width: fit-content;
        }

        .product-info h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #e8f0e4;
          margin: 0;
          letter-spacing: 0.3px;
        }

        .product-info p {
          font-size: 0.85rem;
          color: #5a6a58;
          line-height: 1.6;
          margin: 0;
        }

        .product-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .product-features li {
          font-size: 0.8rem;
          color: #7a8a78;
          padding: 0;
        }

        .product-link {
          display: inline-flex;
          align-items: center;
          font-size: 0.85rem;
          font-weight: 700;
          color: #84AA73;
          text-decoration: none;
          letter-spacing: 0.3px;
          margin-top: auto;
          transition: gap 0.2s ease, opacity 0.2s ease;
          gap: 4px;
        }

        .product-link:hover {
          opacity: 0.8;
          gap: 8px;
        }

        @media (max-width: 900px) {
          .products-grid,
          .hero-products {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }

          .hero-description {
            white-space: normal;
          }

          .hero {
            padding-top: 3vh;
          }
        }
      `}</style>
    </div>
  );
}
