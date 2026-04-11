'use client';

import { Zap, Mail, ArrowRight, Github, Code, Activity, Shield, ExternalLink, Clock, DollarSign, CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';
import { categories, getAgentsByCategory, getTotalAgentCount } from '../lib/agentsData';
import AgentCard from '../components/AgentCard';

export default function AgentOpsLab() {
  const totalAgents = getTotalAgentCount();

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #0a0a0a; overflow-x: hidden; }
        .agent-card { transition: all 0.3s ease; text-decoration: none; color: inherit; display: block; }
        .agent-card:hover { transform: translateY(-4px); border-color: rgba(59,130,246,0.5) !important; }
        .agentic-card { transition: all 0.3s ease; cursor: pointer; }
        .agentic-card:hover { transform: translateY(-4px); border-color: rgba(99,102,241,0.6) !important; box-shadow: 0 20px 60px rgba(99,102,241,0.15) !important; }
        .grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        .hero-title { font-size: clamp(32px,6vw,64px); font-weight:800; line-height:1.1; margin-bottom:24px; background:linear-gradient(to right,#fff,#a3a3a3); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .section-heading { font-size: clamp(26px,5vw,42px); font-weight:800; }
        .section-description { font-size: clamp(14px,2.5vw,17px); }
        @media (max-width: 640px) {
          .nav-demo-btn { display: none !important; }
          .hero-badge { font-size: 11px !important; padding: 5px 10px !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 90vw; }
          .agentic-btns { flex-direction: column !important; }
          .agentic-btns a { width: 100% !important; justify-content: center !important; }
          .grid-3, .grid-4 { grid-template-columns: 1fr; gap: 16px; }
          .hero-btns { flex-direction: column; align-items: stretch; }
          .hero-btns a { justify-content: center; }
          .impact-grid { grid-template-columns: repeat(2,1fr) !important; }
          .agentic-body { flex-direction: column !important; }
          .agentic-pipeline { width: 100% !important; min-width: 0 !important; }
          .nav-links { display: none !important; }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .grid-3, .grid-4 { grid-template-columns: repeat(2,1fr); gap: 18px; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-3, .grid-4 { grid-template-columns: repeat(2,1fr); gap: 20px; }
        }
        @media (min-width: 1025px) {
          .grid-3 { grid-template-columns: repeat(3,1fr); }
          .grid-4 { grid-template-columns: repeat(4,1fr); }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, background: 'rgba(10,10,10,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)', zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', height: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg,#3b82f6,#2563eb)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={20} color="white" />
              </div>
              <span style={{ fontSize: '20px', fontWeight: '700' }}>AgentOpsLab</span>
            </div>
            <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <a href="#agentic-systems" style={{ fontSize: '14px', color: '#818cf8', textDecoration: 'none', fontWeight: '600' }}>Agentic Systems</a>
              <a href="#agents" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Agents</a>
              <a href="/governance" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Governance</a>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="/demo/nda-review" target="_blank" rel="noopener noreferrer" className="nav-demo-btn" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', fontSize: '13px' }}>
              <Zap size={14} />Live Demo
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg,rgba(59,130,246,0.06) 0%,rgba(10,10,10,0) 100%)', padding: 'clamp(72px,12vw,140px) clamp(16px,5vw,32px) clamp(60px,10vw,100px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Live proof point */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 18px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '100px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80' }} />
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#4ade80' }}>IN PRODUCTION</span>
            </div>
            <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '500' }}>NDA Review System · 97% faster than manual review</span>
            <a href="/agentic-systems/nda-review" style={{ fontSize: '12px', color: '#4ade80', textDecoration: 'none', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
              See how →
            </a>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            AI Agents for<br />Enterprise Operations
          </h1>

          <p style={{ fontSize: 'clamp(16px,3vw,20px)', color: '#94a3b8', lineHeight: '1.8', marginBottom: '20px', maxWidth: '680px' }}>
            Purpose-built multi-agent systems for Financial Services, Legal, HR, and Sales — each agent specialised, coordinated, and production-ready.
          </p>
          <p style={{ fontSize: 'clamp(14px,2.5vw,17px)', color: '#64748b', lineHeight: '1.7', marginBottom: '44px', maxWidth: '620px' }}>
            Inspect the architecture. Run it on your data. Deploy it in your stack. Every system is fully documented with zero black boxes.
          </p>

          {/* CTAs */}
          <div className="hero-btns" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '72px' }}>
            <a href="#agentic-systems" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: 'clamp(13px,2.5vw,16px) clamp(22px,4vw,32px)', background: 'linear-gradient(135deg,#3b82f6,#2563eb)', color: 'white', borderRadius: '10px', fontSize: 'clamp(14px,2.5vw,16px)', fontWeight: '600', textDecoration: 'none', boxShadow: '0 8px 32px rgba(59,130,246,0.3)' }}>
              <Shield size={18} />Explore Agentic Systems
            </a>
            <a href="/demo/nda-review" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: 'clamp(13px,2.5vw,16px) clamp(22px,4vw,32px)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#e2e8f0', borderRadius: '10px', fontSize: 'clamp(14px,2.5vw,16px)', fontWeight: '600', textDecoration: 'none' }}>
              <Zap size={18} />Live Demo
            </a>
          </div>

          {/* Industry Verticals */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: '12px' }}>
            {[
              {
                icon: '🏦',
                title: 'Financial Services & Banking',
                color: '#10b981',
                border: 'rgba(16,185,129,0.2)',
                bg: 'rgba(16,185,129,0.04)',
                agents: ['Loan Underwriting', 'AML Monitoring', 'Credit Risk Scoring', 'Fraud Detection'],
              },
              {
                icon: '⚖️',
                title: 'Legal Operations',
                color: '#6366f1',
                border: 'rgba(99,102,241,0.2)',
                bg: 'rgba(99,102,241,0.04)',
                agents: ['NDA Review ✦ Live', 'Contract Lifecycle', 'Compliance Checker', 'Legal Research'],
              },
              {
                icon: '👥',
                title: 'HR & Workforce',
                color: '#f59e0b',
                border: 'rgba(245,158,11,0.2)',
                bg: 'rgba(245,158,11,0.04)',
                agents: ['Resume Screening', 'Onboarding Workflow', 'Performance Review', 'Benefits Enrollment'],
              },
              {
                icon: '📈',
                title: 'Sales & Revenue Ops',
                color: '#3b82f6',
                border: 'rgba(59,130,246,0.2)',
                bg: 'rgba(59,130,246,0.04)',
                agents: ['Pipeline Orchestrator', 'Deal Intelligence', 'Churn Detection', 'CPQ Agent'],
              },
            ].map(v => (
              <div key={v.title} style={{ padding: 'clamp(18px,3vw,24px)', background: v.bg, border: '1px solid ' + v.border, borderRadius: '16px' }}>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>{v.icon}</div>
                <div style={{ fontSize: 'clamp(13px,2.5vw,15px)', fontWeight: '700', color: '#e2e8f0', marginBottom: '14px' }}>{v.title}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {v.agents.map(a => (
                    <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: v.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 'clamp(11px,2vw,13px)', color: a.includes('✦') ? v.color : '#94a3b8', fontWeight: a.includes('✦') ? '600' : '400' }}>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Agentic Systems */}      {/* Agentic Systems */}
      <section id="agentic-systems" style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)', background: 'rgba(99,102,241,0.02)', borderBottom: '1px solid rgba(99,102,241,0.12)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <div>
              <div style={{ display: 'inline-block', padding: '5px 14px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#818cf8', marginBottom: '14px', letterSpacing: '0.06em' }}>AGENTIC SYSTEMS</div>
              <h2 className="section-heading" style={{ marginBottom: '12px' }}>Multi-Agent Pipelines</h2>
              <p className="section-description" style={{ color: '#94a3b8', maxWidth: '600px' }}>Coordinated agent networks where each specialist hands off structured output to the next — no human in the loop.</p>
            </div>
          </div>

          <div
            className="agentic-card"
            onClick={() => window.location.href = '/agentic-systems/nda-review'}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '20px', padding: 'clamp(24px,4vw,40px)', marginBottom: '16px', boxShadow: '0 4px 40px rgba(99,102,241,0.08)' }}
          >
            <div className="agentic-body" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
              <div style={{ flex: '1', minWidth: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}>
                    <Shield size={24} color="white" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <span style={{ fontSize: 'clamp(18px,3.5vw,22px)', fontWeight: '700', color: '#fff' }}>NDA Counterparty Paper Review Agent</span>
                      <span style={{ padding: '3px 10px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.4)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#818cf8' }}>5-AGENT</span>
                      <span style={{ padding: '3px 10px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#4ade80' }}>LIVE</span>
                    </div>
                    <div style={{ fontSize: '13px', color: '#6366f1', fontWeight: '500' }}>Legal Operations · Counterparty Paper Review</div>
                  </div>
                </div>
                <p style={{ fontSize: 'clamp(14px,2.5vw,16px)', color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px' }}>
                  Reviews counterparty-originated NDAs against your playbook — the 60–70% of NDAs that arrive as someone else's PDF, not your template. Icertis manages contracts you control; this handles the review before you decide to proceed.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {['Mistral OCR','Claude Haiku','Claude Sonnet','CrewAI','Python 3.13','ReportLab'].map(tag => (
                    <span key={tag} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '12px', color: '#94a3b8' }}>{tag}</span>
                  ))}
                </div>
                <div className="agentic-btns" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <a href="/agentic-systems/nda-review" onClick={e => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 16px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: 'white', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                    <ExternalLink size={14} />View Architecture
                  </a>
                  <a href="/demo/nda-review" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 16px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                    <Zap size={14} />Live Demo
                  </a>
                </div>
              </div>
              <div className="agentic-pipeline" style={{ minWidth: '0', width: 'clamp(220px,30%,280px)', flexShrink: 0 }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>5-Agent Pipeline</div>
                {[
                  { num: '1', label: 'Document Parser', model: 'Haiku', color: '#3b82f6' },
                  { num: '2', label: 'Clause Extractor', model: 'Haiku', color: '#3b82f6' },
                  { num: '3', label: 'Playbook Reviewer', model: 'Sonnet', color: '#8b5cf6' },
                  { num: '4', label: 'Risk Scorer', model: 'Sonnet', color: '#8b5cf6' },
                  { num: '5', label: 'Compliance Officer', model: 'Haiku', color: '#3b82f6' },
                ].map((step, i, arr) => (
                  <div key={step.num}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '5px', background: step.color + '20', border: '1px solid ' + step.color + '40', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: step.color, flexShrink: 0 }}>{step.num}</div>
                      <div style={{ flex: 1, fontSize: '12px', color: '#e2e8f0', fontWeight: '500', minWidth: 0 }}>{step.label}</div>
                      <div style={{ fontSize: '10px', fontWeight: '600', color: step.color, padding: '2px 5px', background: step.color + '18', borderRadius: '4px', flexShrink: 0 }}>{step.model}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}>
                        <div style={{ width: '1px', height: '10px', background: 'rgba(99,102,241,0.3)' }} />
                      </div>
                    )}
                  </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '6px', marginTop: '14px' }}>
                  {[{ val: '97%', label: 'Faster' }, { val: '6 min', label: 'Per doc' }, { val: '$0.30', label: 'Cost' }].map(s => (
                    <div key={s.label} style={{ textAlign: 'center', padding: '8px 4px', background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '8px' }}>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#818cf8' }}>{s.val}</div>
                      <div style={{ fontSize: '9px', color: '#64748b', marginTop: '1px' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AP Invoice Processing Card */}
          <div
            className="agentic-card"
            onClick={() => window.location.href = '/agentic-systems/ap-invoice-processing'}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '20px', padding: 'clamp(24px,4vw,40px)', marginBottom: '16px', boxShadow: '0 4px 40px rgba(16,185,129,0.08)' }}
          >
            <div className="agentic-body" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
              <div style={{ flex: '1', minWidth: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg,#10b981,#059669)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 20px rgba(16,185,129,0.4)' }}>
                    <DollarSign size={24} color="white" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <span style={{ fontSize: 'clamp(18px,3.5vw,22px)', fontWeight: '700', color: '#fff' }}>AP Invoice Processing System</span>
                      <span style={{ padding: '3px 10px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#10b981' }}>MULTI-AGENT</span>
                      <span style={{ padding: '3px 10px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#4ade80' }}>LIVE</span>
                    </div>
                    <div style={{ fontSize: '13px', color: '#10b981', fontWeight: '500' }}>Enterprise Finance · Accounts Payable Automation</div>
                  </div>
                </div>
                <p style={{ fontSize: 'clamp(14px,2.5vw,16px)', color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px' }}>
                  A 5-agent CrewAI pipeline that reads vendor emails from Gmail, runs Mistral OCR on PDF invoices, extracts structured data, reconciles every line item against a PO database, and outputs an Excel report with full decision trail — 100% automated.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {['Mistral OCR','Claude Sonnet','CrewAI','Gmail API','SQLite','openpyxl'].map(tag => (
                    <span key={tag} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '12px', color: '#94a3b8' }}>{tag}</span>
                  ))}
                </div>
                <div className="agentic-btns" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a href="/demo/ap-invoice-processing" onClick={e => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 16px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                    <Zap size={14} />Live Demo
                  </a>
                  <a href="/agentic-systems/ap-invoice-processing" onClick={e => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 16px', background: 'linear-gradient(135deg,#10b981,#059669)', color: 'white', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                    <ExternalLink size={14} />View Architecture
                  </a>
                </div>
              </div>
              <div className="agentic-pipeline" style={{ minWidth: '0', width: 'clamp(220px,30%,280px)', flexShrink: 0 }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#10b981', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>5-Agent Pipeline</div>
                {[
                  { num: '1', label: 'Email Triage Agent', model: 'Sonnet', color: '#3b82f6' },
                  { num: '2', label: 'Document Intelligence', model: 'Mistral', color: '#8b5cf6' },
                  { num: '3', label: 'Invoice Extractor', model: 'Sonnet', color: '#f59e0b' },
                  { num: '4', label: 'PO Reconciliation', model: 'Sonnet', color: '#10b981' },
                  { num: '5', label: 'Reporting Agent', model: 'Sonnet', color: '#ec4899' },
                ].map((step, i, arr) => (
                  <div key={step.num}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '5px', background: step.color + '20', border: '1px solid ' + step.color + '40', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: step.color, flexShrink: 0 }}>{step.num}</div>
                      <div style={{ flex: 1, fontSize: '12px', color: '#e2e8f0', fontWeight: '500', minWidth: 0 }}>{step.label}</div>
                      <div style={{ fontSize: '10px', fontWeight: '600', color: step.color, padding: '2px 5px', background: step.color + '18', borderRadius: '4px', flexShrink: 0 }}>{step.model}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}>
                        <div style={{ width: '1px', height: '10px', background: 'rgba(16,185,129,0.3)' }} />
                      </div>
                    )}
                  </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '6px', marginTop: '14px' }}>
                  {[{ val: '100%', label: 'Automated' }, { val: '5', label: 'Agents' }, { val: '$0.02', label: '/invoice' }].map(s => (
                    <div key={s.label} style={{ textAlign: 'center', padding: '8px 4px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '8px' }}>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#10b981' }}>{s.val}</div>
                      <div style={{ fontSize: '9px', color: '#64748b', marginTop: '1px' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AP Exception Resolution Card */}
          <div
            className="agentic-card"
            onClick={() => window.location.href = '/agentic-systems/ap-exception-resolution'}
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '20px', padding: 'clamp(24px,4vw,40px)', marginBottom: '16px', boxShadow: '0 4px 40px rgba(245,158,11,0.06)', cursor: 'pointer' }}
          >
            <div className="agentic-body" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
              <div style={{ flex: '1', minWidth: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg,#f59e0b,#d97706)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 20px rgba(245,158,11,0.35)' }}>
                    <AlertTriangle size={24} color="white" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <span style={{ fontSize: 'clamp(18px,3.5vw,22px)', fontWeight: '700', color: '#fff' }}>AP Exception Resolution Agent</span>
                      <span style={{ padding: '3px 10px', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#f59e0b' }}>6-AGENT</span>
                      <span style={{ padding: '3px 10px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#4ade80' }}>LIVE</span>
                    </div>
                    <div style={{ fontSize: '13px', color: '#f59e0b', fontWeight: '500' }}>Enterprise Finance · Exception Queue Automation</div>
                  </div>
                </div>
                <p style={{ fontSize: 'clamp(14px,2.5vw,16px)', color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px' }}>
                  Resolves the 20–30% of invoices that fail automated matching in SAP or Oracle — partial GRN approvals, PO amendment cross-referencing, per-vendor tolerance policies, early payment discount capture, and BEC fraud detection. Sits downstream of ERP blocking, not in place of it.
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  {['CrewAI','Claude Opus','3-Way Match','Fraud Detection','Data Privacy','SQLite'].map(tag => (
                    <span key={tag} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '12px', color: '#94a3b8' }}>{tag}</span>
                  ))}
                </div>
                <div className="agentic-btns" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a href="/agentic-systems/ap-exception-resolution" onClick={e => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 16px', background: 'linear-gradient(135deg,#f59e0b,#d97706)', color: 'white', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                    <ExternalLink size={14} />View Documentation
                  </a>
                  <a href="/demo/ap-exception-resolution" onClick={e => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 16px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                    <Zap size={14} />Live Demo
                  </a>
                </div>
              </div>
              <div className="agentic-pipeline" style={{ minWidth: '0', width: 'clamp(220px,30%,280px)', flexShrink: 0 }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#f59e0b', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>6-Agent Pipeline</div>
                {[
                  { num: '1', label: 'Vendor Compliance Officer', model: 'Opus', color: '#f59e0b' },
                  { num: '2', label: 'Three-Way Match Specialist', model: 'Opus', color: '#f59e0b' },
                  { num: '3', label: 'Exception Intelligence', model: 'Opus', color: '#f59e0b' },
                  { num: '4', label: 'Payment Terms Optimizer', model: 'Opus', color: '#10b981' },
                  { num: '5', label: 'Fraud Detector', model: 'Opus', color: '#ef4444' },
                  { num: '6', label: 'Resolution Reporter', model: 'Opus', color: '#8b5cf6' },
                ].map((step, i, arr) => (
                  <div key={step.num}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '5px', background: step.color + '20', border: '1px solid ' + step.color + '40', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: step.color, flexShrink: 0 }}>{step.num}</div>
                      <div style={{ flex: 1, fontSize: '12px', color: '#e2e8f0', fontWeight: '500', minWidth: 0 }}>{step.label}</div>
                      <div style={{ fontSize: '10px', fontWeight: '600', color: step.color, padding: '2px 5px', background: step.color + '18', borderRadius: '4px', flexShrink: 0 }}>{step.model}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}>
                        <div style={{ width: '1px', height: '10px', background: 'rgba(245,158,11,0.3)' }} />
                      </div>
                    )}
                  </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '6px', marginTop: '14px' }}>
                  {[{ val: '25%', label: 'Exception Queue' }, { val: '6', label: 'Agents' }, { val: '7', label: 'Fraud Signals' }].map(s => (
                    <div key={s.label} style={{ textAlign: 'center', padding: '8px 4px', background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '8px' }}>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#f59e0b' }}>{s.val}</div>
                      <div style={{ fontSize: '9px', color: '#64748b', marginTop: '1px' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: '14px' }}>
            {[
              { icon: '📄', title: 'Contract Lifecycle Manager', desc: 'End-to-end contract creation, redlining, negotiation tracking, and renewal orchestration.' },
              { icon: '🏦', title: 'Loan Origination Pipeline', desc: 'Application intake, credit scoring, AML screening, compliance check, and underwriting decision.' },
              { icon: '👤', title: 'HR Onboarding Orchestrator', desc: 'Multi-agent onboarding that coordinates IT, payroll, legal, and manager workflows automatically.' },
            ].map(card => (
              <div key={card.title} style={{ padding: '22px', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.08)', borderRadius: '14px', opacity: 0.65 }}>
                <div style={{ fontSize: '26px', marginBottom: '10px' }}>{card.icon}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#d4d4d4' }}>{card.title}</span>
                  <span style={{ padding: '2px 8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '10px', fontWeight: '600', color: '#64748b' }}>COMING SOON</span>
                </div>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading" style={{ marginBottom: '12px' }}>Full Agent Catalog</h2>
          <p className="section-description" style={{ color: '#64748b', marginBottom: '48px' }}>Individual agents across every enterprise domain</p>
          <div className="grid-4">
            {[
              { value: `${totalAgents}+`, label: 'Production Agents', sub: 'Ready to deploy' },
              { value: '6', label: 'Domains', sub: 'Sales · Banking · HR · Legal · RevOps · Finance' },
              { value: '100%', label: 'Documented', sub: 'Architecture + source' },
              { value: 'Claude', label: 'Powered by Anthropic', sub: 'Sonnet 4 + Haiku 4.5' },
            ].map((stat, idx) => (
              <div key={idx} style={{ padding: 'clamp(20px,3vw,36px)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
                <div style={{ fontSize: 'clamp(28px,5vw,42px)', fontWeight: '800', background: 'linear-gradient(135deg,#3b82f6,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: 'clamp(13px,2vw,15px)', marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ fontSize: 'clamp(11px,1.8vw,12px)', color: '#64748b' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Categories */}
      <div id="agents">
        {Object.entries(categories).map(([catId, cat], idx) => {
          const catAgents = getAgentsByCategory(catId);
          const isEven = idx % 2 === 0;
          return (
            <section key={catId} style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)', background: isEven ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
              <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                <div style={{ marginBottom: '40px' }}>
                  <div style={{ display: 'inline-block', padding: '5px 14px', background: cat.badgeBg, border: `1px solid ${cat.badgeBorder}`, borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: cat.badgeColor, marginBottom: '14px', letterSpacing: '0.05em' }}>{cat.badge}</div>
                  <h2 className="section-heading" style={{ marginBottom: '12px' }}>{cat.title}</h2>
                  <p className="section-description" style={{ color: '#94a3b8' }}>{cat.description}</p>
                </div>
                <div className="grid-3">
                  {catAgents.map((agent, agentIdx) => (
                    <AgentCard key={agentIdx} agent={agent} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)', background: 'rgba(99,102,241,0.03)', borderTop: '1px solid rgba(99,102,241,0.12)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading" style={{ marginBottom: '16px' }}>Ready to evaluate for your enterprise?</h2>
          <p style={{ fontSize: 'clamp(15px,3vw,18px)', color: '#94a3b8', marginBottom: '36px', lineHeight: '1.7' }}>All source code is open. Clone the repo, run the NDA review pipeline on your own contracts, and see the results in under 6 minutes.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/demo/nda-review" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(12px,2.5vw,16px) clamp(20px,4vw,32px)', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: 'white', borderRadius: '10px', fontSize: 'clamp(14px,2.5vw,16px)', fontWeight: '600', textDecoration: 'none', boxShadow: '0 8px 32px rgba(99,102,241,0.3)' }}>
              <Zap size={18} />Try Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading" style={{ marginBottom: '16px' }}>Get in touch</h2>
          <p style={{ fontSize: 'clamp(14px,2.5vw,17px)', color: '#94a3b8', marginBottom: '36px' }}>Questions about the architecture or want to collaborate?</p>
          <a href="mailto:vinay.gangidi@gmail.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: 'clamp(14px,3vw,18px)', background: 'linear-gradient(135deg,#3b82f6,#2563eb)', color: 'white', borderRadius: '12px', fontSize: 'clamp(14px,3vw,17px)', fontWeight: '600', textDecoration: 'none', boxShadow: '0 8px 32px rgba(59,130,246,0.3)' }}>
            <Mail size={20} />vinay.gangidi@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: 'clamp(28px,5vw,40px) clamp(16px,5vw,32px)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', color: '#475569' }}>
            <p style={{ fontWeight: '600', color: '#94a3b8', marginBottom: '4px', fontSize: 'clamp(12px,2vw,14px)' }}>AgentOpsLab — Enterprise AI Agent Systems</p>
            <p style={{ fontSize: 'clamp(11px,1.8vw,13px)' }}>© 2026 Vinay Gangidi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
