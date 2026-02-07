'use client';

import { useTranslation } from '@/lib/i18n';
import { Syringe, Droplets, Zap, Sparkles } from 'lucide-react';

export default function Roadmap() {
  const { t } = useTranslation();

  const focusAreas = [
    { key: 'item1', icon: <Syringe size={24} strokeWidth={1.5} color="#FFFFFF" /> },
    { key: 'item2', icon: <Droplets size={24} strokeWidth={1.5} color="#FFFFFF" /> },
    { key: 'item3', icon: <Zap size={24} strokeWidth={1.5} color="#FFFFFF" /> },
    { key: 'item4', icon: <Sparkles size={24} strokeWidth={1.5} color="#FFFFFF" /> },
  ];

  return (
    <div className="roadmap">
      {/* Hero */}
      <section className="page-hero section">
        <div className="container">
          <p className="mono accent">// Our Journey</p>
          <h1>{t('roadmap.title')}</h1>
          <p className="page-subtitle">
            Building the foundation for trusted medical aesthetics information
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline section">
        <div className="container">
          <div className="timeline-content">
            <div className="timeline-line"></div>

            {/* Phase 1 */}
            <div className="phase-block active">
              <div className="phase-marker">
                <div className="marker-dot"></div>
                <span className="mono">CURRENT</span>
              </div>
              <div className="phase-content">
                <div className="phase-header">
                  <span className="phase-number mono accent">01</span>
                  <h2>{t('roadmap.phase1.title')}</h2>
                </div>
                <div className="phase-body">
                  <h3>{t('roadmap.phase1.focus')}</h3>
                  <div className="focus-grid">
                    {focusAreas.map((item) => (
                      <div key={item.key} className="focus-item">
                        <div className="focus-icon">{item.icon}</div>
                        <span>{t(`roadmap.phase1.${item.key}`)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="phase-goal">
                    <p>{t('roadmap.phase1.goal')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 - Coming Soon */}
            <div className="phase-block upcoming">
              <div className="phase-marker">
                <div className="marker-dot"></div>
                <span className="mono">COMING SOON</span>
              </div>
              <div className="phase-content">
                <div className="phase-header">
                  <span className="phase-number mono">02</span>
                  <h2>Phase 2: Expansion</h2>
                </div>
                <div className="phase-body">
                  <p className="upcoming-text">
                    Expanding to additional medical aesthetics categories and
                    building partnerships with key industry stakeholders.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 - Future */}
            <div className="phase-block future">
              <div className="phase-marker">
                <div className="marker-dot"></div>
                <span className="mono">FUTURE</span>
              </div>
              <div className="phase-content">
                <div className="phase-header">
                  <span className="phase-number mono">03</span>
                  <h2>Phase 3: Global Platform</h2>
                </div>
                <div className="phase-body">
                  <p className="upcoming-text">
                    Establishing the definitive global platform for medical
                    aesthetics intelligence and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
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

        .timeline-content {
          position: relative;
          padding-left: 3rem;
        }

        .timeline-line {
          position: absolute;
          left: 7px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            180deg,
            #84AA73 0%,
            rgba(132, 170, 115, 0.3) 50%,
            rgba(132, 170, 115, 0.1) 100%
          );
        }

        .phase-block {
          position: relative;
          margin-bottom: 4rem;
        }

        .phase-block:last-child {
          margin-bottom: 0;
        }

        .phase-marker {
          position: absolute;
          left: -3rem;
          top: 0;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .marker-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #84AA73;
          border: 3px solid #E7E8E1;
          box-shadow: 0 0 0 3px rgba(132, 170, 115, 0.3);
        }

        .phase-marker .mono {
          font-size: 0.625rem;
          color: #84AA73;
          letter-spacing: 0.1em;
        }

        .upcoming .marker-dot {
          background: #8892b0;
          box-shadow: none;
        }

        .upcoming .phase-marker .mono {
          color: #8892b0;
        }

        .future .marker-dot {
          background: transparent;
          border-color: #8892b0;
          box-shadow: none;
        }

        .future .phase-marker .mono {
          color: #64748b;
        }

        .phase-content {
          background: #FFFFFF;
          border: 1px solid rgba(132, 170, 115, 0.2);
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(34, 47, 48, 0.05);
        }

        .upcoming .phase-content,
        .future .phase-content {
          opacity: 0.6;
        }

        .phase-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .phase-number {
          font-size: 2rem;
          font-weight: 700;
        }

        .phase-body h3 {
          margin-bottom: 1rem;
          color: #222F30;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .focus-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: #84AA73;
          border-radius: 8px;
          text-align: center;
          color: #FFFFFF;
        }

        .focus-icon {
          font-size: 2rem;
        }

        .focus-item span:last-child {
          font-size: 0.875rem;
          color: #FFFFFF;
        }

        .phase-goal {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(100, 255, 218, 0.1);
        }

        .phase-goal p {
          color: #7F7F7F;
          line-height: 1.8;
        }

        .upcoming-text {
          color: #7F7F7F;
        }

        @media (max-width: 768px) {
          .timeline-content {
            padding-left: 2rem;
          }

          .phase-marker {
            left: -2rem;
          }

          .focus-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
