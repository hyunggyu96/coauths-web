'use client';

import { useEffect, useState } from 'react';

type RiskLevel = 'high' | 'medium' | 'low';

interface Patient {
  name: string;
  time: string;
  tag: string;
  tagColor: string;
  noShowRisk: RiskLevel;
  riskPct: number;
  lastVisit: string;
  treatment: string;
}

const PATIENTS: Patient[] = [
  { name: 'Kim Ji-yeon', time: '10:00', tag: 'VIP', tagColor: '#f59e0b', noShowRisk: 'low', riskPct: 8, lastVisit: '14d ago', treatment: 'Botox 50U' },
  { name: 'Park Soo-ah', time: '11:30', tag: 'NEW', tagColor: '#60a5fa', noShowRisk: 'high', riskPct: 74, lastVisit: 'First', treatment: 'HA Filler' },
  { name: 'Lee Min-jun', time: '13:00', tag: 'REG', tagColor: '#84AA73', noShowRisk: 'medium', riskPct: 41, lastVisit: '32d ago', treatment: 'Skin Booster' },
  { name: 'Choi Ye-jin', time: '14:30', tag: 'VIP', tagColor: '#f59e0b', noShowRisk: 'low', riskPct: 12, lastVisit: '7d ago', treatment: 'PDO Thread' },
  { name: 'Jung Da-eun', time: '16:00', tag: 'REG', tagColor: '#84AA73', noShowRisk: 'high', riskPct: 68, lastVisit: '61d ago', treatment: 'Botox 30U' },
];

const PROMOS = [
  { patient: 'Lee Min-jun', msg: 'It\'s been a while! Book your next Skin Booster and get 15% off.', sent: false },
  { patient: 'Jung Da-eun', msg: 'We miss you! Special returning patient offer — valid this week.', sent: false },
  { patient: 'Park Soo-ah', msg: 'Your first visit is confirmed. Here\'s what to expect from HA Filler.', sent: false },
];

const RISK_COLOR: Record<RiskLevel, string> = {
  high: '#f87171',
  medium: '#f59e0b',
  low: '#34d399',
};

const RISK_LABEL: Record<RiskLevel, string> = {
  high: 'HIGH',
  medium: 'MED',
  low: 'LOW',
};

type Tab = 'schedule' | 'noshow' | 'promo';

export default function AICRMDemo() {
  const [activeTab, setActiveTab] = useState<Tab>('schedule');
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);
  const [promos, setPromos] = useState(PROMOS);
  const [sending, setSending] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState('');

  // Auto-cycle tabs for demo effect
  useEffect(() => {
    const cycle: Tab[] = ['schedule', 'noshow', 'promo'];
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % cycle.length;
      setActiveTab(cycle[i]);
      setSelectedPatient(null);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // Live clock
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);

  const handleSend = (i: number) => {
    setSending(i);
    setTimeout(() => {
      setPromos(prev => prev.map((p, idx) => idx === i ? { ...p, sent: true } : p));
      setSending(null);
    }, 1200);
  };

  const highRiskCount = PATIENTS.filter(p => p.noShowRisk === 'high').length;

  return (
    <div className="crm-wrapper">
      <div className="crm-card">

        {/* Header */}
        <div className="crm-header">
          <div className="crm-logo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>AI CRM</span>
          </div>
          <div className="crm-header-right">
            <div className="crm-date">Today · {currentTime || '09:41'}</div>
            {highRiskCount > 0 && (
              <div className="crm-alert-badge">{highRiskCount} at risk</div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="crm-tabs">
          {([
            { id: 'schedule', label: 'Schedule', icon: '📅' },
            { id: 'noshow', label: 'No-show AI', icon: '⚠️' },
            { id: 'promo', label: 'Promotions', icon: '💌' },
          ] as { id: Tab; label: string; icon: string }[]).map(tab => (
            <button
              key={tab.id}
              className={`crm-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => { setActiveTab(tab.id); setSelectedPatient(null); }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ── Schedule Tab ── */}
        {activeTab === 'schedule' && (
          <div className="crm-body" key="schedule">
            <div className="tab-content">
              <div className="crm-section-label">Today&apos;s Appointments · {PATIENTS.length} patients</div>
              <div className="patient-list">
                {PATIENTS.map((p, i) => (
                  <div
                    key={i}
                    className={`patient-row ${selectedPatient === i ? 'selected' : ''}`}
                    onClick={() => setSelectedPatient(selectedPatient === i ? null : i)}
                  >
                    <div className="patient-time">{p.time}</div>
                    <div className="patient-info">
                      <div className="patient-name-row">
                        <span className="patient-name">{p.name}</span>
                        <span className="patient-tag" style={{ background: `${p.tagColor}22`, color: p.tagColor, borderColor: `${p.tagColor}55` }}>
                          {p.tag}
                        </span>
                      </div>
                      <div className="patient-treatment">{p.treatment}</div>
                    </div>
                    <div className="patient-risk-mini" style={{ color: RISK_COLOR[p.noShowRisk] }}>
                      {RISK_LABEL[p.noShowRisk]}
                    </div>
                  </div>
                ))}
              </div>
              {selectedPatient !== null && (
                <div className="patient-detail">
                  <div className="detail-row"><span>Last visit</span><span>{PATIENTS[selectedPatient].lastVisit}</span></div>
                  <div className="detail-row"><span>No-show risk</span>
                    <span style={{ color: RISK_COLOR[PATIENTS[selectedPatient].noShowRisk] }}>
                      {PATIENTS[selectedPatient].riskPct}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── No-show Tab ── */}
        {activeTab === 'noshow' && (
          <div className="crm-body" key="noshow">
            <div className="tab-content">
              <div className="crm-section-label">AI No-show Prediction</div>
              <div className="noshow-list">
                {PATIENTS.map((p, i) => (
                  <div key={i} className="noshow-row">
                    <div className="noshow-left">
                      <div className="noshow-name">{p.name}</div>
                      <div className="noshow-sub">{p.time} · {p.treatment}</div>
                    </div>
                    <div className="noshow-right">
                      <div className="noshow-bar-wrap">
                        <div
                          className="noshow-bar"
                          style={{
                            width: `${p.riskPct}%`,
                            background: RISK_COLOR[p.noShowRisk],
                          }}
                        />
                      </div>
                      <div className="noshow-pct" style={{ color: RISK_COLOR[p.noShowRisk] }}>
                        {p.riskPct}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="noshow-legend">
                <span style={{ color: '#34d399' }}>● Low</span>
                <span style={{ color: '#f59e0b' }}>● Medium</span>
                <span style={{ color: '#f87171' }}>● High risk</span>
              </div>
            </div>
          </div>
        )}

        {/* ── Promo Tab ── */}
        {activeTab === 'promo' && (
          <div className="crm-body" key="promo">
            <div className="tab-content">
              <div className="crm-section-label">AI-suggested Promotions</div>
              <div className="promo-list">
                {promos.map((promo, i) => (
                  <div key={i} className={`promo-card ${promo.sent ? 'sent' : ''}`}>
                    <div className="promo-patient">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                      </svg>
                      {promo.patient}
                    </div>
                    <div className="promo-msg">&ldquo;{promo.msg}&rdquo;</div>
                    <button
                      className={`promo-send-btn ${promo.sent ? 'sent' : ''}`}
                      onClick={() => !promo.sent && handleSend(i)}
                      disabled={promo.sent || sending === i}
                    >
                      {sending === i ? (
                        <span className="sending-spinner" />
                      ) : promo.sent ? (
                        <>✓ Sent</>
                      ) : (
                        <>Send Message</>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        .crm-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          width: 100%;
        }

        .crm-card {
          width: 340px;
          background: linear-gradient(160deg, #0d1a0d 0%, #0a0f0a 60%, #0d1a0d 100%);
          border: 1px solid rgba(132, 170, 115, 0.25);
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(132, 170, 115, 0.08),
            0 20px 60px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        /* ── Header ── */
        .crm-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px 10px;
          border-bottom: 1px solid rgba(132, 170, 115, 0.12);
        }

        .crm-logo {
          display: flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(135deg, #84AA73, #4a7a3a);
          border-radius: 8px;
          padding: 5px 10px;
          font-size: 10px;
          font-weight: 800;
          color: white;
          letter-spacing: 0.8px;
          box-shadow: 0 0 10px rgba(132, 170, 115, 0.35);
        }

        .crm-header-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .crm-date {
          font-size: 8.5px;
          color: #4a5a48;
          letter-spacing: 0.3px;
        }

        .crm-alert-badge {
          background: rgba(248, 113, 113, 0.15);
          border: 1px solid rgba(248, 113, 113, 0.4);
          border-radius: 20px;
          padding: 2px 8px;
          font-size: 7.5px;
          font-weight: 700;
          color: #f87171;
          letter-spacing: 0.3px;
          animation: alertPulse 2s ease-in-out infinite;
        }

        @keyframes alertPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        /* ── Tabs ── */
        .crm-tabs {
          display: flex;
          border-bottom: 1px solid rgba(132, 170, 115, 0.1);
        }

        .crm-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 8px 4px;
          background: none;
          border: none;
          font-size: 8px;
          color: #3a4a38;
          cursor: pointer;
          transition: all 0.25s ease;
          border-bottom: 2px solid transparent;
          letter-spacing: 0.2px;
        }

        .crm-tab.active {
          color: #84AA73;
          border-bottom-color: #84AA73;
          background: rgba(132, 170, 115, 0.05);
        }

        .crm-tab:hover:not(.active) {
          color: #5a7a58;
        }

        /* ── Body ── */
        .crm-body {
          height: 240px;
          overflow: hidden;
          padding: 10px 12px 12px;
          display: flex;
          flex-direction: column;
        }

        .tab-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: none;
          animation: tabFadeIn 0.25s ease;
        }

        .tab-content::-webkit-scrollbar { display: none; }

        @keyframes tabFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .crm-section-label {
          font-size: 7px;
          font-weight: 700;
          color: #84AA73;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        /* ── Schedule ── */
        .patient-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .patient-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          border-radius: 7px;
          border: 1px solid rgba(132, 170, 115, 0.08);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .patient-row:hover,
        .patient-row.selected {
          background: rgba(132, 170, 115, 0.07);
          border-color: rgba(132, 170, 115, 0.25);
        }

        .patient-time {
          font-size: 8px;
          font-weight: 700;
          color: #84AA73;
          width: 32px;
          flex-shrink: 0;
          letter-spacing: 0.3px;
        }

        .patient-info {
          flex: 1;
          min-width: 0;
        }

        .patient-name-row {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 2px;
        }

        .patient-name {
          font-size: 9px;
          font-weight: 600;
          color: #c8d8c0;
        }

        .patient-tag {
          font-size: 6.5px;
          font-weight: 700;
          padding: 1px 5px;
          border-radius: 10px;
          border: 1px solid;
          letter-spacing: 0.5px;
        }

        .patient-treatment {
          font-size: 7.5px;
          color: #4a5a48;
        }

        .patient-risk-mini {
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.5px;
          flex-shrink: 0;
        }

        .patient-detail {
          margin-top: 8px;
          padding: 8px 10px;
          background: rgba(132, 170, 115, 0.06);
          border: 1px solid rgba(132, 170, 115, 0.15);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: slideDown 0.2s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          font-size: 8px;
        }

        .detail-row span:first-child { color: #4a5a48; }
        .detail-row span:last-child  { color: #c8d8c0; font-weight: 600; }

        /* ── No-show ── */
        .noshow-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .noshow-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .noshow-left {
          width: 100px;
          flex-shrink: 0;
        }

        .noshow-name {
          font-size: 8.5px;
          font-weight: 600;
          color: #c8d8c0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .noshow-sub {
          font-size: 7px;
          color: #3a4a38;
          margin-top: 1px;
        }

        .noshow-right {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .noshow-bar-wrap {
          flex: 1;
          height: 4px;
          background: rgba(132, 170, 115, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .noshow-bar {
          height: 100%;
          border-radius: 2px;
          transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .noshow-pct {
          font-size: 8px;
          font-weight: 700;
          width: 26px;
          text-align: right;
          flex-shrink: 0;
        }

        .noshow-legend {
          display: flex;
          gap: 10px;
          margin-top: 10px;
          font-size: 7px;
          color: #3a4a38;
        }

        /* ── Promo ── */
        .promo-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .promo-card {
          padding: 8px 10px;
          background: rgba(132, 170, 115, 0.05);
          border: 1px solid rgba(132, 170, 115, 0.15);
          border-radius: 9px;
          transition: all 0.3s ease;
        }

        .promo-card.sent {
          opacity: 0.5;
          border-color: rgba(132, 170, 115, 0.08);
        }

        .promo-patient {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 8.5px;
          font-weight: 700;
          color: #84AA73;
          margin-bottom: 4px;
        }

        .promo-msg {
          font-size: 7.5px;
          color: #5a6a58;
          line-height: 1.5;
          margin-bottom: 7px;
          font-style: italic;
        }

        .promo-send-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          width: 100%;
          padding: 5px;
          border-radius: 6px;
          border: 1px solid #84AA73;
          background: rgba(132, 170, 115, 0.1);
          color: #84AA73;
          font-size: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.3px;
        }

        .promo-send-btn:hover:not(:disabled) {
          background: rgba(132, 170, 115, 0.2);
        }

        .promo-send-btn.sent {
          border-color: rgba(52, 211, 153, 0.4);
          color: #34d399;
          background: rgba(52, 211, 153, 0.08);
          cursor: default;
        }

        .promo-send-btn:disabled {
          cursor: not-allowed;
        }

        .sending-spinner {
          width: 8px;
          height: 8px;
          border: 1.5px solid rgba(132, 170, 115, 0.3);
          border-top-color: #84AA73;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
