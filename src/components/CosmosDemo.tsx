'use client';

import { useEffect, useState } from 'react';

export default function CosmosDemo() {
    const [phase, setPhase] = useState<'idle' | 'scanning' | 'processing' | 'verified'>('idle');

    useEffect(() => {
        // Auto-loop the animation
        const runAnimation = () => {
            setPhase('idle');
            setTimeout(() => setPhase('scanning'), 600);
            setTimeout(() => setPhase('processing'), 2800);
            setTimeout(() => setPhase('verified'), 4000);
            setTimeout(() => runAnimation(), 7000);
        };
        runAnimation();
    }, []);

    return (
        <div className="cosmos-demo-wrapper">
            {/* Phone Frame */}
            <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">

                    {/* Status Bar */}
                    <div className="status-bar">
                        <span className="status-time">9:41</span>
                        <div className="status-icons">
                            <span className="signal-icon">▪▪▪</span>
                            <span className="battery-icon">▮</span>
                        </div>
                    </div>

                    {/* App Header */}
                    <div className="app-header">
                        <div className="cosmos-logo">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#84AA73" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="4" />
                                <line x1="12" y1="2" x2="12" y2="6" />
                                <line x1="12" y1="18" x2="12" y2="22" />
                                <line x1="2" y1="12" x2="6" y2="12" />
                                <line x1="18" y1="12" x2="22" y2="12" />
                            </svg>
                            <span>COSMOS</span>
                        </div>
                        <span className="scan-label">Product Scan</span>
                    </div>

                    {/* Viewfinder / Scan Area */}
                    <div className={`viewfinder ${phase}`}>
                        {/* Corner brackets */}
                        <div className="corner tl" />
                        <div className="corner tr" />
                        <div className="corner bl" />
                        <div className="corner br" />

                        {/* Product inside viewfinder */}
                        <div className="product-visual">
                            {/* Vial illustration */}
                            <svg width="60" height="90" viewBox="0 0 60 90" fill="none">
                                <rect x="20" y="5" width="20" height="8" rx="2" fill="#c8d8c0" />
                                <rect x="18" y="13" width="24" height="62" rx="4" fill="#e8f0e4" stroke="#84AA73" strokeWidth="1.5" />
                                <rect x="22" y="20" width="16" height="20" rx="2" fill="white" opacity="0.8" />
                                <text x="30" y="32" textAnchor="middle" fontSize="5" fill="#2d4a24" fontWeight="bold">BOTOX</text>
                                <text x="30" y="39" textAnchor="middle" fontSize="3.5" fill="#5a7a50">100 Units</text>
                                <rect x="22" y="48" width="16" height="1" fill="#84AA73" opacity="0.5" />
                                <text x="30" y="56" textAnchor="middle" fontSize="3" fill="#7a9a70">Lot: A2024</text>
                                <text x="30" y="62" textAnchor="middle" fontSize="3" fill="#7a9a70">Exp: 12/26</text>
                                {/* NFC chip indicator */}
                                <rect x="24" y="68" width="12" height="8" rx="1" fill="#84AA73" opacity="0.3" stroke="#84AA73" strokeWidth="0.5" />
                                <text x="30" y="74" textAnchor="middle" fontSize="3" fill="#84AA73">NFC</text>
                            </svg>
                        </div>

                        {/* Scan beam */}
                        {phase === 'scanning' && (
                            <div className="scan-beam" />
                        )}

                        {/* Processing overlay */}
                        {phase === 'processing' && (
                            <div className="processing-overlay">
                                <div className="processing-ring" />
                                <span className="processing-text">Verifying...</span>
                            </div>
                        )}

                        {/* Verified overlay */}
                        {phase === 'verified' && (
                            <div className="verified-overlay">
                                <svg className="check-icon" width="40" height="40" viewBox="0 0 40 40">
                                    <circle cx="20" cy="20" r="18" fill="#84AA73" />
                                    <polyline points="10,20 17,27 30,13" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                            </div>
                        )}
                    </div>

                    {/* Result Card */}
                    <div className={`result-card ${phase === 'verified' ? 'show' : ''}`}>
                        <div className="result-header">
                            <div className="verified-badge">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="#84AA73">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#84AA73" strokeWidth="2" fill="none" strokeLinecap="round" />
                                </svg>
                                <span>VERIFIED AUTHENTIC</span>
                            </div>
                        </div>
                        <div className="result-product-name">BOTOX® 100U</div>
                        <div className="result-details">
                            <div className="detail-row">
                                <span className="detail-label">Manufacturer</span>
                                <span className="detail-value">Allergan</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Lot Number</span>
                                <span className="detail-value">A2024-KR</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Expiry</span>
                                <span className="detail-value">Dec 2026</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Region</span>
                                <span className="detail-value">Korea ✓</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom hint */}
                    <div className={`scan-hint ${phase === 'idle' ? 'show' : ''}`}>
                        <span>Point camera at product</span>
                    </div>

                </div>
                {/* Home indicator */}
                <div className="home-indicator" />
            </div>

            <style jsx>{`
        .cosmos-demo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        /* ── Phone Frame ── */
        .phone-frame {
          width: 220px;
          background: #0d0d0d;
          border-radius: 36px;
          border: 2px solid #2a2a2a;
          box-shadow:
            0 0 0 1px #1a1a1a,
            0 30px 80px rgba(0,0,0,0.6),
            inset 0 1px 0 rgba(255,255,255,0.05);
          overflow: hidden;
          position: relative;
          padding-bottom: 16px;
        }

        .phone-notch {
          width: 80px;
          height: 22px;
          background: #0d0d0d;
          border-radius: 0 0 16px 16px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .phone-screen {
          background: #0a0f0a;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          padding: 0 0 8px;
          position: relative;
          overflow: hidden;
        }

        .home-indicator {
          width: 80px;
          height: 4px;
          background: #333;
          border-radius: 2px;
          margin: 8px auto 0;
        }

        /* ── Status Bar ── */
        .status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 16px 2px;
          font-size: 9px;
          color: #aaa;
        }

        .status-time { font-weight: 600; color: #ddd; }
        .signal-icon { letter-spacing: -1px; font-size: 7px; }
        .battery-icon { font-size: 8px; }
        .status-icons { display: flex; gap: 4px; align-items: center; }

        /* ── App Header ── */
        .app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 14px 8px;
        }

        .cosmos-logo {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 700;
          color: #84AA73;
          letter-spacing: 1.5px;
        }

        .scan-label {
          font-size: 9px;
          color: #555;
          letter-spacing: 0.5px;
        }

        /* ── Viewfinder ── */
        .viewfinder {
          position: relative;
          margin: 0 14px;
          height: 190px;
          background: rgba(132, 170, 115, 0.04);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: background 0.4s ease;
        }

        .viewfinder.scanning {
          background: rgba(132, 170, 115, 0.06);
        }

        .viewfinder.verified {
          background: rgba(132, 170, 115, 0.12);
        }

        /* Corner brackets */
        .corner {
          position: absolute;
          width: 18px;
          height: 18px;
          border-color: #84AA73;
          border-style: solid;
          border-width: 0;
          transition: all 0.3s ease;
        }
        .corner.tl { top: 8px; left: 8px; border-top-width: 2px; border-left-width: 2px; border-radius: 3px 0 0 0; }
        .corner.tr { top: 8px; right: 8px; border-top-width: 2px; border-right-width: 2px; border-radius: 0 3px 0 0; }
        .corner.bl { bottom: 8px; left: 8px; border-bottom-width: 2px; border-left-width: 2px; border-radius: 0 0 0 3px; }
        .corner.br { bottom: 8px; right: 8px; border-bottom-width: 2px; border-right-width: 2px; border-radius: 0 0 3px 0; }

        .viewfinder.scanning .corner,
        .viewfinder.processing .corner,
        .viewfinder.verified .corner {
          border-color: #84AA73;
          box-shadow: 0 0 6px rgba(132, 170, 115, 0.5);
        }

        /* Product visual */
        .product-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.9;
        }

        /* Scan beam */
        .scan-beam {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #84AA73, #b8d4a8, #84AA73, transparent);
          box-shadow: 0 0 12px rgba(132, 170, 115, 0.8), 0 0 4px rgba(132, 170, 115, 1);
          animation: scanMove 1.8s ease-in-out infinite;
          top: 10%;
        }

        @keyframes scanMove {
          0%   { top: 10%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }

        /* Processing overlay */
        .processing-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 15, 10, 0.7);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 12px;
          animation: fadeIn 0.3s ease;
        }

        .processing-ring {
          width: 40px;
          height: 40px;
          border: 2px solid rgba(132, 170, 115, 0.2);
          border-top-color: #84AA73;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .processing-text {
          font-size: 10px;
          color: #84AA73;
          letter-spacing: 1px;
        }

        /* Verified overlay */
        .verified-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 15, 10, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          animation: fadeIn 0.3s ease;
        }

        .check-icon {
          animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes popIn {
          0%   { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Result Card ── */
        .result-card {
          margin: 8px 14px 0;
          background: rgba(20, 30, 20, 0.95);
          border: 1px solid rgba(132, 170, 115, 0.3);
          border-radius: 10px;
          padding: 10px 12px;
          transform: translateY(10px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
        }

        .result-card.show {
          transform: translateY(0);
          opacity: 1;
        }

        .result-header {
          margin-bottom: 6px;
        }

        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(132, 170, 115, 0.15);
          border: 1px solid rgba(132, 170, 115, 0.4);
          border-radius: 20px;
          padding: 2px 8px;
          font-size: 7.5px;
          font-weight: 700;
          color: #84AA73;
          letter-spacing: 0.8px;
        }

        .result-product-name {
          font-size: 13px;
          font-weight: 700;
          color: #e8f0e4;
          margin: 6px 0 8px;
          letter-spacing: 0.3px;
        }

        .result-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-label {
          font-size: 8px;
          color: #555;
          letter-spacing: 0.3px;
        }

        .detail-value {
          font-size: 8px;
          color: #aaa;
          font-weight: 500;
        }

        /* ── Scan Hint ── */
        .scan-hint {
          text-align: center;
          padding: 8px;
          font-size: 9px;
          color: #444;
          letter-spacing: 0.5px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .scan-hint.show {
          opacity: 1;
        }
      `}</style>
        </div>
    );
}
