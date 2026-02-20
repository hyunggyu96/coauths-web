'use client';

import { useTranslation } from '@/lib/i18n';

export default function Roadmap() {
  const { t } = useTranslation();

  return (
    <div className="roadmap-page">
      {/* Hero */}
      <section className="rp-hero">
        <div className="container">
          <h1>{t('roadmap.title')}</h1>
          <p className="rp-subtitle">Building the future of trusted medical aesthetics — one phase at a time.</p>
        </div>
      </section>

      {/* Main rope + phases layout */}
      <section className="rp-journey">
        <div className="rp-track">

          {/* Vertical rope */}
          <div className="rope-line">
            <div className="rope-texture" />
          </div>

          {/* Climber figure — floats along rope */}
          <div className="climber">
            {/* Simple SVG stick figure */}
            <svg viewBox="0 0 40 70" width="40" height="70" className="climber-svg">
              {/* head */}
              <circle cx="20" cy="8" r="7" fill="#222F30" />
              {/* body */}
              <line x1="20" y1="15" x2="20" y2="42" stroke="#222F30" strokeWidth="3" strokeLinecap="round" />
              {/* left arm (holding rope) */}
              <line x1="20" y1="22" x2="6" y2="18" stroke="#222F30" strokeWidth="2.5" strokeLinecap="round" />
              {/* right arm */}
              <line x1="20" y1="22" x2="34" y2="26" stroke="#222F30" strokeWidth="2.5" strokeLinecap="round" />
              {/* left leg */}
              <line x1="20" y1="42" x2="10" y2="60" stroke="#222F30" strokeWidth="2.5" strokeLinecap="round" />
              {/* right leg */}
              <line x1="20" y1="42" x2="30" y2="60" stroke="#222F30" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* ─── PHASE 1 ─── */}
          <div className="rp-phase rp-phase--1">
            <div className="phase-dot phase-dot--active">
              <span>1</span>
            </div>
            <div className="phase-card">
              <div className="phase-label">CURRENT · 2024 – 2025</div>
              <h2>Phase 1 — Build the Plane</h2>
              <p>Developing our core products: <strong>AIP</strong>, <strong>Cosmos</strong>, and <strong>AI CRM</strong> — the three engines that power the Coauths platform.</p>

              {/* Animation: Building a plane */}
              <div className="anim-box anim-build">
                {/* Workshop floor */}
                <div className="ab-floor" />

                {/* Fuselage */}
                <div className="ab-fuselage" />
                {/* Wing left */}
                <div className="ab-wing ab-wing--l" />
                {/* Wing right */}
                <div className="ab-wing ab-wing--r" />
                {/* Tail */}
                <div className="ab-tail" />
                {/* Cockpit window */}
                <div className="ab-window" />
                {/* Engine */}
                <div className="ab-engine" />

                {/* Worker / wrench */}
                <div className="ab-worker">
                  <svg viewBox="0 0 30 50" width="30" height="50">
                    <circle cx="15" cy="6" r="5" fill="#84AA73" />
                    <line x1="15" y1="11" x2="15" y2="32" stroke="#84AA73" strokeWidth="3" strokeLinecap="round" />
                    <line x1="15" y1="18" x2="5" y2="14" stroke="#84AA73" strokeWidth="2" strokeLinecap="round" />
                    <line x1="15" y1="18" x2="25" y2="14" stroke="#84AA73" strokeWidth="2" strokeLinecap="round" />
                    <line x1="15" y1="32" x2="8" y2="46" stroke="#84AA73" strokeWidth="2" strokeLinecap="round" />
                    <line x1="15" y1="32" x2="22" y2="46" stroke="#84AA73" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="ab-wrench">🔧</div>
                <div className="ab-spark ab-spark--1" />
                <div className="ab-spark ab-spark--2" />
                <div className="ab-spark ab-spark--3" />

                {/* Product badges assembling */}
                <div className="ab-badge ab-badge--1">AIP</div>
                <div className="ab-badge ab-badge--2">Cosmos</div>
                <div className="ab-badge ab-badge--3">AI CRM</div>
              </div>
            </div>
          </div>

          {/* ─── PHASE 2 ─── */}
          <div className="rp-phase rp-phase--2">
            <div className="phase-dot phase-dot--upcoming">
              <span>2</span>
            </div>
            <div className="phase-card phase-card--upcoming">
              <div className="phase-label">COMING SOON · 2025 – 2026</div>
              <h2>Phase 2 — Fly to Vietnam</h2>
              <p>With our products ready, we take off to <strong>Southeast Asia</strong> — starting with <strong>Vietnam</strong>, the fastest-growing medical aesthetics market in the region.</p>

              {/* Animation: Plane flying to Vietnam */}
              <div className="anim-box anim-fly">
                {/* Sky gradient */}
                <div className="af-sky" />
                {/* Clouds */}
                <div className="af-cloud af-cloud--1" />
                <div className="af-cloud af-cloud--2" />
                <div className="af-cloud af-cloud--3" />
                {/* Plane */}
                <div className="af-plane">✈</div>
                {/* Trail */}
                <div className="af-trail" />
                {/* Destination flag */}
                <div className="af-dest">
                  <div className="af-flag">🇻🇳</div>
                  <div className="af-dest-label">Vietnam</div>
                </div>
                {/* Origin */}
                <div className="af-origin">🇰🇷</div>
                {/* Arrow arc */}
                <svg className="af-arc" viewBox="0 0 280 80" fill="none">
                  <path d="M 20 60 Q 140 10 260 55" stroke="rgba(132,170,115,0.5)" strokeWidth="1.5" strokeDasharray="6 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* ─── PHASE 3 ─── */}
          <div className="rp-phase rp-phase--3">
            <div className="phase-dot phase-dot--future">
              <span>3</span>
            </div>
            <div className="phase-card phase-card--future">
              <div className="phase-label">FUTURE · 2027+</div>
              <h2>Phase 3 — Go Global</h2>
              <p>A fleet of planes fans out across the globe — Coauths becomes the <strong>definitive global platform</strong> for medical aesthetics intelligence and compliance.</p>

              {/* Animation: Multiple planes flying globally */}
              <div className="anim-box anim-global">
                {/* Globe */}
                <div className="ag-globe">
                  <svg viewBox="0 0 120 120" width="120" height="120" className="ag-globe-svg">
                    <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(132,170,115,0.25)" strokeWidth="1.5" />
                    <circle cx="60" cy="60" r="55" fill="rgba(132,170,115,0.05)" />
                    {/* Latitude lines */}
                    <ellipse cx="60" cy="60" rx="55" ry="22" fill="none" stroke="rgba(132,170,115,0.15)" strokeWidth="1" />
                    <line x1="5" y1="60" x2="115" y2="60" stroke="rgba(132,170,115,0.15)" strokeWidth="1" />
                    {/* Longitude line */}
                    <ellipse cx="60" cy="60" rx="26" ry="55" fill="none" stroke="rgba(132,170,115,0.15)" strokeWidth="1" />
                    {/* Continents (rough blobs) */}
                    <ellipse cx="42" cy="48" rx="14" ry="10" fill="rgba(132,170,115,0.35)" />
                    <ellipse cx="44" cy="65" rx="10" ry="12" fill="rgba(132,170,115,0.3)" />
                    <ellipse cx="75" cy="45" rx="18" ry="12" fill="rgba(132,170,115,0.35)" />
                    <ellipse cx="82" cy="62" rx="10" ry="8" fill="rgba(132,170,115,0.3)" />
                    <ellipse cx="28" cy="55" rx="7" ry="5" fill="rgba(132,170,115,0.25)" />
                  </svg>
                </div>
                {/* Multiple planes orbiting */}
                <div className="ag-orbit ag-orbit--1"><span className="ag-plane">✈</span></div>
                <div className="ag-orbit ag-orbit--2"><span className="ag-plane">✈</span></div>
                <div className="ag-orbit ag-orbit--3"><span className="ag-plane">✈</span></div>
                <div className="ag-orbit ag-orbit--4"><span className="ag-plane">✈</span></div>
                {/* Glow */}
                <div className="ag-glow" />
              </div>
            </div>
          </div>

          {/* Bottom: top of rope / summit */}
          <div className="rope-summit">
            <div className="summit-star">⭐</div>
            <span>Global Platform</span>
          </div>

        </div>
      </section>

      <style jsx>{`
        /* ─────────────────────────────────────
           PAGE LAYOUT
        ───────────────────────────────────── */
        .roadmap-page {
          min-height: 100vh;
        }

        .rp-hero {
          padding: 4rem 0 2rem;
          text-align: center;
        }

        .rp-subtitle {
          font-size: 1.125rem;
          margin-top: 0.75rem;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ─────────────────────────────────────
           JOURNEY TRACK
        ───────────────────────────────────── */
        .rp-journey {
          padding: 3rem 0 8rem;
        }

        .rp-track {
          position: relative;
          max-width: 820px;
          margin: 0 auto;
          padding: 0 1.5rem 0 5rem;
        }

        /* ─── Rope ─── */
        .rope-line {
          position: absolute;
          left: 2.75rem;
          top: 0;
          bottom: 4rem;
          width: 8px;
          display: flex;
          justify-content: center;
        }

        .rope-texture {
          width: 6px;
          height: 100%;
          background: repeating-linear-gradient(
            180deg,
            #84AA73 0px,
            #84AA73 6px,
            #5a7a4a 6px,
            #5a7a4a 12px
          );
          border-radius: 3px;
          opacity: 0.7;
        }

        /* ─── Climber ─── */
        .climber {
          position: absolute;
          left: 2rem;
          top: 0;
          z-index: 10;
          animation: climbRope 6s ease-in-out infinite alternate;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }

        @keyframes climbRope {
          0%   { top: 78%; }
          33%  { top: 50%; }
          66%  { top: 22%; }
          100% { top: 4%; }
        }

        /* ─── Phase dots ─── */
        .phase-dot {
          position: absolute;
          left: -3.1rem;
          top: 1.6rem;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 800;
          z-index: 5;
          font-family: var(--font-inter), sans-serif;
        }

        .phase-dot--active {
          background: #84AA73;
          color: #fff;
          box-shadow: 0 0 0 4px rgba(132,170,115,0.25), 0 0 0 8px rgba(132,170,115,0.1);
        }

        .phase-dot--upcoming {
          background: #fff;
          color: #84AA73;
          border: 2px solid #84AA73;
        }

        .phase-dot--future {
          background: #fff;
          color: #aaa;
          border: 2px dashed #aaa;
        }

        /* ─── Phase blocks ─── */
        .rp-phase {
          position: relative;
          margin-bottom: 5rem;
        }

        /* ─── Phase cards ─── */
        .phase-card {
          background: #fff;
          border: 1px solid rgba(132,170,115,0.25);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(34,47,48,0.06);
        }

        .phase-card--upcoming {
          opacity: 0.85;
        }

        .phase-card--future {
          opacity: 0.65;
        }

        .phase-label {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #84AA73;
          margin-bottom: 0.5rem;
          font-family: var(--font-inter), sans-serif;
        }

        .phase-card h2 {
          font-size: 1.5rem;
          color: #222F30;
          margin-bottom: 0.75rem;
        }

        .phase-card p {
          color: #7F7F7F;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        /* ─── SUMMIT ─── */
        .rope-summit {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 0.25rem;
          margin-top: -2rem;
          gap: 0.25rem;
        }

        .summit-star {
          font-size: 1.5rem;
          animation: starPulse 2s ease-in-out infinite;
        }

        .rope-summit span {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #84AA73;
          font-family: var(--font-inter), sans-serif;
        }

        @keyframes starPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.2) rotate(10deg); }
        }

        /* ═══════════════════════════════════
           ANIMATION BOX (shared)
        ═══════════════════════════════════ */
        .anim-box {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
          background: #f7faf6;
          border: 1px solid rgba(132,170,115,0.15);
        }

        /* ═══════════════════════════════════
           PHASE 1 — BUILD THE PLANE
        ═══════════════════════════════════ */
        .anim-build {
          background: linear-gradient(160deg, #f0f7ee 0%, #e8f4e4 100%);
        }

        /* Floor */
        .ab-floor {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: rgba(132,170,115,0.12);
          border-top: 2px solid rgba(132,170,115,0.25);
        }

        /* Fuselage */
        .ab-fuselage {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 110px;
          height: 36px;
          background: #84AA73;
          border-radius: 18px 40px 40px 18px;
          animation: assembleBody 3s ease-out forwards;
        }

        @keyframes assembleBody {
          0%   { opacity: 0; transform: translateX(-50%) scale(0.3); }
          30%  { opacity: 1; transform: translateX(-50%) scale(1.05); }
          100% { opacity: 1; transform: translateX(-50%) scale(1); }
        }

        /* Wings */
        .ab-wing {
          position: absolute;
          bottom: 48px;
          width: 0;
          height: 0;
        }

        .ab-wing--l {
          left: calc(50% - 80px);
          border-right: 55px solid rgba(90,122,74,0.85);
          border-top: 14px solid transparent;
          border-bottom: 14px solid transparent;
          animation: assembleWingL 3.5s 0.5s ease-out forwards;
          opacity: 0;
        }

        .ab-wing--r {
          right: calc(50% - 80px);
          border-left: 55px solid rgba(90,122,74,0.85);
          border-top: 14px solid transparent;
          border-bottom: 14px solid transparent;
          animation: assembleWingR 3.5s 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes assembleWingL {
          0%   { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes assembleWingR {
          0%   { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        /* Tail */
        .ab-tail {
          position: absolute;
          bottom: 50px;
          left: calc(50% - 80px);
          width: 0;
          height: 0;
          border-right: 20px solid #4a7a3a;
          border-top: 28px solid transparent;
          animation: assembleTail 3s 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes assembleTail {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }

        /* Cockpit */
        .ab-window {
          position: absolute;
          bottom: 43px;
          left: calc(50% + 26px);
          width: 18px;
          height: 14px;
          background: rgba(200,230,255,0.9);
          border-radius: 50% 50% 30% 30%;
          animation: assembleBody 3s ease-out forwards;
        }

        /* Engine */
        .ab-engine {
          position: absolute;
          bottom: 26px;
          left: calc(50% - 8px);
          width: 16px;
          height: 10px;
          background: #3a5a2a;
          border-radius: 3px;
          animation: assembleBody 3s 0.8s ease-out forwards;
          opacity: 0;
        }

        /* Worker */
        .ab-worker {
          position: absolute;
          bottom: 30px;
          right: 28px;
          animation: workerBob 1s ease-in-out infinite alternate;
        }

        @keyframes workerBob {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-4px); }
        }

        /* Wrench */
        .ab-wrench {
          position: absolute;
          bottom: 58px;
          right: 22px;
          font-size: 1.1rem;
          animation: wrenchSwing 0.8s ease-in-out infinite alternate;
          transform-origin: bottom center;
        }

        @keyframes wrenchSwing {
          0%   { transform: rotate(-25deg); }
          100% { transform: rotate(15deg); }
        }

        /* Sparks */
        .ab-spark {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #f59e0b;
          border-radius: 50%;
        }

        .ab-spark--1 {
          bottom: 65px; right: 26px;
          animation: sparkFly 0.6s 0s ease-out infinite;
        }

        .ab-spark--2 {
          bottom: 65px; right: 20px;
          animation: sparkFly 0.6s 0.2s ease-out infinite;
        }

        .ab-spark--3 {
          bottom: 65px; right: 32px;
          animation: sparkFly 0.6s 0.4s ease-out infinite;
        }

        @keyframes sparkFly {
          0%   { opacity: 1; transform: translate(0,0) scale(1); }
          100% { opacity: 0; transform: translate(var(--sx,5px), -18px) scale(0.3); }
        }

        .ab-spark--1 { --sx: 8px; }
        .ab-spark--2 { --sx: -6px; }
        .ab-spark--3 { --sx: 12px; }

        /* Product badges */
        .ab-badge {
          position: absolute;
          font-size: 0.55rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #fff;
          background: rgba(132,170,115,0.9);
          border-radius: 20px;
          padding: 2px 7px;
          font-family: var(--font-inter), sans-serif;
          animation: badgePop 4s ease-out forwards;
          opacity: 0;
        }

        .ab-badge--1 { top: 28px; left: 24px; animation-delay: 0.8s; }
        .ab-badge--2 { top: 52px; left: 24px; animation-delay: 1.4s; }
        .ab-badge--3 { top: 76px; left: 24px; animation-delay: 2s; }

        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.5) translateX(-8px); }
          20%  { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* ═══════════════════════════════════
           PHASE 2 — FLY TO VIETNAM
        ═══════════════════════════════════ */
        .anim-fly {
          background: linear-gradient(180deg, #c9e8f5 0%, #e8f4fc 60%, #d4eecc 100%);
        }

        .af-sky {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #b8dcf0 0%, #ddeef7 100%);
        }

        /* Clouds */
        .af-cloud {
          position: absolute;
          background: rgba(255,255,255,0.85);
          border-radius: 50px;
          filter: blur(2px);
        }

        .af-cloud--1 {
          width: 70px; height: 22px;
          top: 25px; left: -80px;
          animation: cloudDrift 8s linear infinite;
        }

        .af-cloud--2 {
          width: 50px; height: 16px;
          top: 55px; left: -60px;
          animation: cloudDrift 11s 2s linear infinite;
        }

        .af-cloud--3 {
          width: 90px; height: 26px;
          top: 15px; left: -110px;
          animation: cloudDrift 14s 5s linear infinite;
        }

        @keyframes cloudDrift {
          0%   { transform: translateX(0); }
          100% { transform: translateX(460px); }
        }

        /* Plane */
        .af-plane {
          position: absolute;
          font-size: 2.2rem;
          top: 55px;
          left: 30px;
          animation: planefly 4s ease-in-out infinite alternate,
                     planeBob 2s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
          z-index: 5;
        }

        @keyframes planefly {
          0%   { left: 20px; top: 65px; }
          100% { left: 200px; top: 35px; }
        }

        @keyframes planeBob {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50%       { transform: translateY(-6px) rotate(-6deg); }
        }

        /* Trail */
        .af-trail {
          position: absolute;
          top: 73px;
          left: 18px;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8));
          border-radius: 2px;
          animation: trailMove 4s ease-in-out infinite alternate;
        }

        @keyframes trailMove {
          0%   { left: 18px; top: 83px; width: 40px; }
          100% { left: 140px; top: 53px; width: 80px; }
        }

        /* Arc */
        .af-arc {
          position: absolute;
          bottom: 28px;
          left: 0;
          width: 100%;
          height: 80px;
          opacity: 0.6;
        }

        /* Origin / Destination */
        .af-origin {
          position: absolute;
          bottom: 20px;
          left: 24px;
          font-size: 1.4rem;
          animation: flagWave 2s ease-in-out infinite alternate;
        }

        .af-dest {
          position: absolute;
          bottom: 14px;
          right: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          animation: destPulse 2s ease-in-out infinite;
        }

        .af-flag { font-size: 1.4rem; }

        .af-dest-label {
          font-size: 0.6rem;
          font-weight: 700;
          color: #222F30;
          letter-spacing: 0.08em;
          font-family: var(--font-inter), sans-serif;
        }

        @keyframes flagWave {
          0%   { transform: rotate(-3deg); }
          100% { transform: rotate(3deg); }
        }

        @keyframes destPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }

        /* ═══════════════════════════════════
           PHASE 3 — GLOBAL EXPANSION
        ═══════════════════════════════════ */
        .anim-global {
          background: linear-gradient(160deg, #0a150a 0%, #0d1f0d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Globe */
        .ag-globe {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: globeSpin 20s linear infinite;
        }

        @keyframes globeSpin {
          0%   { transform: translate(-50%,-50%) rotate(0deg); }
          100% { transform: translate(-50%,-50%) rotate(360deg); }
        }

        /* Glow behind globe */
        .ag-glow {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(132,170,115,0.18) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }

        /* Orbiting planes */
        .ag-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: 0 0;
          animation: orbitPlane linear infinite;
        }

        .ag-orbit--1 {
          animation-duration: 5s;
          animation-delay: 0s;
          width: 90px;
          margin-top: -4px;
        }

        .ag-orbit--2 {
          animation-duration: 7s;
          animation-delay: -2s;
          width: 70px;
          margin-top: -4px;
          transform: rotate(60deg);
        }

        .ag-orbit--3 {
          animation-duration: 9s;
          animation-delay: -4s;
          width: 110px;
          margin-top: -4px;
          transform: rotate(130deg);
        }

        .ag-orbit--4 {
          animation-duration: 6s;
          animation-delay: -1s;
          width: 80px;
          margin-top: -4px;
          transform: rotate(210deg);
        }

        @keyframes orbitPlane {
          0%   { transform: rotate(0deg);   }
          100% { transform: rotate(360deg); }
        }

        .ag-plane {
          position: absolute;
          right: 0;
          top: -8px;
          font-size: 1.1rem;
          filter: drop-shadow(0 0 6px rgba(132,170,115,0.8));
        }

        /* ═══════════════════════════════════
           RESPONSIVE
        ═══════════════════════════════════ */
        @media (max-width: 640px) {
          .rp-track {
            padding-left: 3.5rem;
          }

          .rope-line {
            left: 1.75rem;
          }

          .climber {
            left: 1.25rem;
          }

          .phase-dot {
            left: -2.6rem;
          }

          .phase-card h2 {
            font-size: 1.2rem;
          }

          .anim-box {
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
}
