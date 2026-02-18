'use client';

import { useEffect, useState, useRef } from 'react';

// 6 sources → evenly spaced at 60° intervals (hexagonal)
const SOURCES = [
  {
    id: 'news',
    label: 'Real-time News',
    icon: '📡',
    color: '#60a5fa',
    angle: -90,   // top
    items: ['FDA approves new filler compound', 'Botox market hits $9.8B in Q4', 'EU tightens aesthetic device rules'],
  },
  {
    id: 'papers',
    label: 'Research Papers',
    icon: '🔬',
    color: '#a78bfa',
    angle: -30,   // top-right
    items: ['Hyaluronic acid longevity study', 'Neurotoxin diffusion meta-analysis', 'PDO thread lift RCT results'],
  },
  {
    id: 'corp',
    label: 'Corp. Briefings',
    icon: '📊',
    color: '#f59e0b',
    angle: 30,    // bottom-right
    items: ['Allergan Q4 earnings beat', 'Galderma IPO valuation update', 'Hugel expands into US market'],
  },
  {
    id: 'ra',
    label: 'RA & Policy',
    icon: '⚖️',
    color: '#f87171',
    angle: 90,    // bottom
    items: ['Korea MFDS new HA guidelines', 'ANVISA Brazil aesthetic regs', 'TGA Australia filler update'],
  },
  {
    id: 'conf',
    label: 'Conferences',
    icon: '🌐',
    color: '#34d399',
    angle: 150,   // bottom-left
    items: ['IMCAS Paris 2025 — Mar 14', 'AMWC Monaco — Apr 3', 'ASDS Annual Meeting — Oct 9'],
  },
  {
    id: 'ai_reg',
    label: 'AI Regulations',
    icon: '🤖',
    color: '#fb923c',
    angle: 210,   // top-left
    items: ['EU AI Act aesthetics scope update', 'FDA AI/ML device guidance draft', 'ISO 42001 compliance checklist'],
  },
];

const FEED_ITEMS = [
  { source: 'NEWS', text: 'FDA approves new HA filler compound for mid-face volume', color: '#60a5fa' },
  { source: 'PAPER', text: 'Meta-analysis: Botulinum toxin type A shows 94% patient satisfaction', color: '#a78bfa' },
  { source: 'CORP', text: 'Allergan Aesthetics reports record Q4 revenue of $1.2B', color: '#f59e0b' },
  { source: 'RA', text: 'Korea MFDS issues updated HA concentration guidelines', color: '#f87171' },
  { source: 'CONF', text: 'IMCAS Paris 2025 — Early registration now open', color: '#34d399' },
  { source: 'AI REG', text: 'EU AI Act: aesthetic AI tools classified as high-risk systems', color: '#fb923c' },
  { source: 'NEWS', text: 'Global medical aesthetics market projected at $28.4B by 2030', color: '#60a5fa' },
  { source: 'AI REG', text: 'FDA releases draft guidance on AI-powered diagnostic devices', color: '#fb923c' },
  { source: 'PAPER', text: 'PDO thread lift: 18-month follow-up study published in JAMA', color: '#a78bfa' },
  { source: 'RA', text: 'EU MDR compliance deadline extended for Class IIb devices', color: '#f87171' },
];

const PLATFORMS = [
  {
    id: 'web',
    label: 'Web',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'android',
    label: 'Android',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 16V8a7 7 0 0 1 14 0v8" />
        <rect x="3" y="16" width="18" height="5" rx="2" />
        <line x1="8" y1="2" x2="6" y2="0" />
        <line x1="16" y1="2" x2="18" y2="0" />
        <line x1="9" y1="19" x2="9" y2="21" />
        <line x1="15" y1="19" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    id: 'ios',
    label: 'iOS',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5.5 5 9c0 5 4 9 7 13 3-4 7-8 7-13 0-3.5-3-7-7-7z" />
        <circle cx="12" cy="9" r="2" />
      </svg>
    ),
  },
];

function polarToXY(angleDeg: number, r: number, cx: number, cy: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function AIPDemo() {
  const [activeSource, setActiveSource] = useState<number | null>(null);
  const [pulseIdx, setPulseIdx] = useState(0);
  const [feedIdx, setFeedIdx] = useState(0);
  const [particles, setParticles] = useState<{ id: number; src: number; progress: number }[]>([]);
  const [activePlatform, setActivePlatform] = useState<number | null>(null);
  const particleRef = useRef(0);

  // Cycle which source is highlighted
  useEffect(() => {
    const t = setInterval(() => {
      setPulseIdx(p => (p + 1) % SOURCES.length);
    }, 1200);
    return () => clearInterval(t);
  }, []);

  // Spawn particles flowing toward center
  useEffect(() => {
    const t = setInterval(() => {
      const srcIdx = Math.floor(Math.random() * SOURCES.length);
      const id = particleRef.current++;
      setParticles(prev => [...prev.slice(-24), { id, src: srcIdx, progress: 0 }]);
    }, 350);
    return () => clearInterval(t);
  }, []);

  // Animate particles
  useEffect(() => {
    let raf: number;
    const animate = () => {
      setParticles(prev =>
        prev
          .map(p => ({ ...p, progress: p.progress + 0.016 }))
          .filter(p => p.progress < 1)
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Scroll live feed
  useEffect(() => {
    const t = setInterval(() => {
      setFeedIdx(i => (i + 1) % FEED_ITEMS.length);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  // Cycle platform highlight
  useEffect(() => {
    let idx = 0;
    const t = setInterval(() => {
      setActivePlatform(idx % PLATFORMS.length);
      idx++;
    }, 1800);
    return () => clearInterval(t);
  }, []);

  const CX = 160, CY = 150, R = 108, HUB_R = 36;

  return (
    <div className="aip-demo-wrapper">
      <div className="aip-demo-card">

        {/* Header */}
        <div className="aip-header">
          <div className="aip-logo-mark">AIP</div>
          <div className="aip-header-text">
            <span className="aip-title">Aesthetics Intelligence Platform</span>
            <span className="aip-live-dot"><span className="dot-pulse" />LIVE</span>
          </div>
          {/* Platform badges in header */}
          <div className="header-platforms">
            {PLATFORMS.map((p, i) => (
              <div
                key={p.id}
                className={`header-platform-badge ${activePlatform === i ? 'active' : ''}`}
                title={p.label}
              >
                {p.icon}
              </div>
            ))}
          </div>
        </div>

        {/* SVG Orbit Diagram */}
        <div className="aip-svg-wrap">
          <svg width="320" height="300" viewBox="0 0 320 300">
            <defs>
              <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#84AA73" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4a7a3a" stopOpacity="1" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="softglow">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="platformGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Outer orbit ring */}
            <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(132,170,115,0.10)" strokeWidth="1" strokeDasharray="3 7" />

            {/* Connection lines */}
            {SOURCES.map((src, i) => {
              const pos = polarToXY(src.angle, R, CX, CY);
              const isActive = pulseIdx === i;
              return (
                <line
                  key={src.id}
                  x1={pos.x} y1={pos.y}
                  x2={CX} y2={CY}
                  stroke={src.color}
                  strokeWidth={isActive ? 1.5 : 0.5}
                  strokeOpacity={isActive ? 0.65 : 0.18}
                  strokeDasharray={isActive ? '4 3' : '2 6'}
                  style={{ transition: 'all 0.4s ease' }}
                />
              );
            })}

            {/* Particles */}
            {particles.map(p => {
              const src = SOURCES[p.src];
              const from = polarToXY(src.angle, R, CX, CY);
              const t = p.progress;
              const x = from.x + (CX - from.x) * t;
              const y = from.y + (CY - from.y) * t;
              return (
                <circle
                  key={p.id}
                  cx={x} cy={y} r={2.2}
                  fill={src.color}
                  opacity={1 - t * 0.6}
                  filter="url(#glow)"
                />
              );
            })}

            {/* Source nodes */}
            {SOURCES.map((src, i) => {
              const pos = polarToXY(src.angle, R, CX, CY);
              const isActive = pulseIdx === i;
              // label offset: push outward from center
              const labelAngleRad = ((src.angle - 90) * Math.PI) / 180;
              const labelDist = 30;
              const lx = pos.x + Math.cos(labelAngleRad) * labelDist;
              const ly = pos.y + Math.sin(labelAngleRad) * labelDist;

              return (
                <g key={src.id}
                  onMouseEnter={() => setActiveSource(i)}
                  onMouseLeave={() => setActiveSource(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {isActive && (
                    <circle
                      cx={pos.x} cy={pos.y} r={22}
                      fill="none"
                      stroke={src.color}
                      strokeWidth="1"
                      strokeOpacity="0.4"
                      className="pulse-ring"
                    />
                  )}
                  <circle
                    cx={pos.x} cy={pos.y} r={isActive ? 19 : 17}
                    fill={`${src.color}18`}
                    stroke={src.color}
                    strokeWidth={isActive ? 1.5 : 0.8}
                    strokeOpacity={isActive ? 0.9 : 0.45}
                    style={{ transition: 'all 0.3s ease' }}
                    filter={isActive ? 'url(#glow)' : undefined}
                  />
                  <text
                    x={pos.x} y={pos.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="12"
                  >
                    {src.icon}
                  </text>
                  <text
                    x={lx} y={ly}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="7"
                    fill={src.color}
                    fontWeight={isActive ? '700' : '400'}
                    opacity={isActive ? 1 : 0.65}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    {src.label}
                  </text>
                </g>
              );
            })}

            {/* Hub glow */}
            <circle cx={CX} cy={CY} r={HUB_R + 14} fill="rgba(132,170,115,0.07)" filter="url(#softglow)" />

            {/* Hub circle */}
            <circle cx={CX} cy={CY} r={HUB_R} fill="url(#hubGrad)" filter="url(#glow)" />
            <circle cx={CX} cy={CY} r={HUB_R} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

            {/* Hub text */}
            <text x={CX} y={CY - 7} textAnchor="middle" fontSize="11" fontWeight="800" fill="white" letterSpacing="1">AIP</text>
            <text x={CX} y={CY + 7} textAnchor="middle" fontSize="5.5" fill="rgba(255,255,255,0.65)" letterSpacing="0.5">PLATFORM</text>

            {/* Platform icons below hub — Web, Android, iOS */}
            {PLATFORMS.map((plat, i) => {
              const platX = CX + (i - 1) * 28;
              const platY = CY + HUB_R + 22;
              const isActive = activePlatform === i;
              return (
                <g key={plat.id}>
                  {/* connector line from hub */}
                  <line
                    x1={CX} y1={CY + HUB_R}
                    x2={platX} y2={platY - 10}
                    stroke={isActive ? '#84AA73' : 'rgba(132,170,115,0.2)'}
                    strokeWidth={isActive ? 1 : 0.5}
                    strokeDasharray="2 3"
                    style={{ transition: 'all 0.4s ease' }}
                  />
                  {/* badge bg */}
                  <rect
                    x={platX - 14} y={platY - 10}
                    width={28} height={22}
                    rx={5}
                    fill={isActive ? 'rgba(132,170,115,0.18)' : 'rgba(132,170,115,0.06)'}
                    stroke={isActive ? '#84AA73' : 'rgba(132,170,115,0.25)'}
                    strokeWidth={isActive ? 1 : 0.5}
                    style={{ transition: 'all 0.4s ease' }}
                    filter={isActive ? 'url(#platformGlow)' : undefined}
                  />
                  {/* label */}
                  <text
                    x={platX} y={platY + 6}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="6.5"
                    fontWeight={isActive ? '700' : '400'}
                    fill={isActive ? '#84AA73' : 'rgba(132,170,115,0.5)'}
                    style={{ transition: 'all 0.4s ease' }}
                  >
                    {plat.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Hover tooltip */}
        {activeSource !== null && (
          <div className="source-tooltip" style={{ borderColor: SOURCES[activeSource].color }}>
            <div className="tooltip-header" style={{ color: SOURCES[activeSource].color }}>
              {SOURCES[activeSource].icon} {SOURCES[activeSource].label}
            </div>
            {SOURCES[activeSource].items.map((item, i) => (
              <div key={i} className="tooltip-item">
                <span className="tooltip-dot" style={{ background: SOURCES[activeSource].color }} />
                {item}
              </div>
            ))}
          </div>
        )}

        {/* Platform strip */}
        <div className="platform-strip">
          <span className="platform-strip-label">Available on</span>
          {PLATFORMS.map((p, i) => (
            <div
              key={p.id}
              className={`platform-chip ${activePlatform === i ? 'active' : ''}`}
            >
              <span className="platform-chip-icon">{p.icon}</span>
              <span>{p.label}</span>
            </div>
          ))}
        </div>

        {/* Live Feed Ticker */}
        <div className="live-feed">
          <div className="feed-label">LIVE FEED</div>
          <div className="feed-content">
            {FEED_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`feed-item ${i === feedIdx ? 'active' : i === (feedIdx - 1 + FEED_ITEMS.length) % FEED_ITEMS.length ? 'prev' : 'hidden'}`}
              >
                <span className="feed-source" style={{ color: item.color }}>[{item.source}]</span>
                <span className="feed-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .aip-demo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          width: 100%;
        }

        .aip-demo-card {
          width: 340px;
          background: linear-gradient(160deg, #0d1a0d 0%, #0a0f0a 60%, #0d1a0d 100%);
          border: 1px solid rgba(132, 170, 115, 0.25);
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(132, 170, 115, 0.08),
            0 20px 60px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          position: relative;
        }

        /* ── Header ── */
        .aip-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px 10px;
          border-bottom: 1px solid rgba(132, 170, 115, 0.12);
        }

        .aip-logo-mark {
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, #84AA73, #4a7a3a);
          border-radius: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 900;
          color: white;
          letter-spacing: 0.5px;
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(132, 170, 115, 0.4);
        }

        .aip-header-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .aip-title {
          font-size: 9.5px;
          font-weight: 600;
          color: #c8d8c0;
          letter-spacing: 0.2px;
        }

        .aip-live-dot {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 7.5px;
          font-weight: 700;
          color: #84AA73;
          letter-spacing: 1px;
        }

        .dot-pulse {
          width: 5px;
          height: 5px;
          background: #84AA73;
          border-radius: 50%;
          display: inline-block;
          animation: dotPulse 1.4s ease-in-out infinite;
          box-shadow: 0 0 5px #84AA73;
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.6); }
        }

        /* Platform badges in header */
        .header-platforms {
          display: flex;
          gap: 4px;
          flex-shrink: 0;
        }

        .header-platform-badge {
          width: 22px;
          height: 22px;
          border-radius: 5px;
          border: 1px solid rgba(132, 170, 115, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(132, 170, 115, 0.35);
          transition: all 0.4s ease;
        }

        .header-platform-badge.active {
          border-color: #84AA73;
          color: #84AA73;
          background: rgba(132, 170, 115, 0.12);
          box-shadow: 0 0 8px rgba(132, 170, 115, 0.3);
        }

        /* ── SVG ── */
        .aip-svg-wrap {
          display: flex;
          justify-content: center;
          padding: 2px 0 0;
          position: relative;
        }

        .pulse-ring {
          animation: ringPulse 1.2s ease-out infinite;
        }

        @keyframes ringPulse {
          0%   { r: 19; opacity: 0.6; }
          100% { r: 30; opacity: 0; }
        }

        /* ── Tooltip ── */
        .source-tooltip {
          position: absolute;
          top: 64px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(8, 12, 8, 0.96);
          border: 1px solid;
          border-radius: 10px;
          padding: 10px 12px;
          width: 200px;
          z-index: 10;
          backdrop-filter: blur(12px);
          animation: fadeIn 0.2s ease;
          pointer-events: none;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-4px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .tooltip-header {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 7px;
        }

        .tooltip-item {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 8px;
          color: #7a8a78;
          padding: 3px 0;
          line-height: 1.4;
        }

        .tooltip-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* ── Platform strip ── */
        .platform-strip {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 12px 8px;
          padding: 7px 10px;
          background: rgba(132, 170, 115, 0.04);
          border: 1px solid rgba(132, 170, 115, 0.12);
          border-radius: 8px;
        }

        .platform-strip-label {
          font-size: 7.5px;
          color: #4a5a48;
          letter-spacing: 0.5px;
          margin-right: 2px;
          white-space: nowrap;
        }

        .platform-chip {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px;
          border-radius: 20px;
          border: 1px solid rgba(132, 170, 115, 0.2);
          font-size: 7.5px;
          color: rgba(132, 170, 115, 0.4);
          transition: all 0.4s ease;
          white-space: nowrap;
        }

        .platform-chip.active {
          border-color: #84AA73;
          color: #84AA73;
          background: rgba(132, 170, 115, 0.1);
          box-shadow: 0 0 8px rgba(132, 170, 115, 0.2);
        }

        .platform-chip-icon {
          display: flex;
          align-items: center;
        }

        /* ── Live Feed ── */
        .live-feed {
          margin: 0 12px 12px;
          background: rgba(132, 170, 115, 0.04);
          border: 1px solid rgba(132, 170, 115, 0.14);
          border-radius: 8px;
          padding: 7px 10px;
          overflow: hidden;
          height: 44px;
          position: relative;
        }

        .feed-label {
          font-size: 6.5px;
          font-weight: 700;
          color: #84AA73;
          letter-spacing: 1.5px;
          margin-bottom: 4px;
        }

        .feed-content {
          position: relative;
          height: 20px;
          overflow: hidden;
        }

        .feed-item {
          position: absolute;
          top: 0; left: 0; right: 0;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 7.5px;
          line-height: 1.3;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feed-item.active  { opacity: 1; transform: translateY(0); }
        .feed-item.prev    { opacity: 0; transform: translateY(-100%); }
        .feed-item.hidden  { opacity: 0; transform: translateY(100%); pointer-events: none; }

        .feed-source {
          font-weight: 700;
          font-size: 7px;
          letter-spacing: 0.3px;
          flex-shrink: 0;
        }

        .feed-text {
          color: #7a8a78;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
}
