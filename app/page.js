'use client';

import { useState, useEffect } from 'react';
import { Zap, ArrowRight, Shield, DollarSign, AlertTriangle, Lock, ChevronRight, ExternalLink, Menu, X } from 'lucide-react';

const PIPELINE_STEPS = [
  { label: 'Document Parser',    model: 'Haiku',  color: '#3b82f6' },
  { label: 'Clause Extractor',   model: 'Haiku',  color: '#3b82f6' },
  { label: 'Playbook Reviewer',  model: 'Sonnet', color: '#8b5cf6' },
  { label: 'Risk Scorer',        model: 'Sonnet', color: '#8b5cf6' },
  { label: 'Compliance Officer', model: 'Haiku',  color: '#3b82f6' },
];

const SOLUTIONS = [
  {
    icon: Shield,
    name: 'NDA Counterparty Review',
    domain: 'Legal Operations',
    color: '#6366f1',
    border: 'rgba(99,102,241,0.3)',
    glow: 'rgba(99,102,241,0.08)',
    badge: '5-AGENT',
    badgeColor: '#818cf8',
    badgeBg: 'rgba(99,102,241,0.15)',
    badgeBorder: 'rgba(99,102,241,0.4)',
    desc: 'Reviews counterparty-originated NDAs against your legal playbook - the 60–70% of NDAs that arrive as someone else\'s PDF. Flags high-risk clauses, scores overall risk, routes to the right sign-off, and produces a structured legal memo in under 6 minutes.',
    tags: ['Mistral OCR', 'Claude Haiku', 'Claude Sonnet', 'CrewAI', 'ReportLab'],
    stats: [{ val: '97%', label: 'Faster' }, { val: '6 min', label: 'Per doc' }, { val: '$0.30', label: 'Cost' }],
    pipeline: [
      { num: '1', label: 'Document Parser',    model: 'Haiku',  color: '#3b82f6' },
      { num: '2', label: 'Clause Extractor',   model: 'Haiku',  color: '#3b82f6' },
      { num: '3', label: 'Playbook Reviewer',  model: 'Sonnet', color: '#8b5cf6' },
      { num: '4', label: 'Risk Scorer',        model: 'Sonnet', color: '#8b5cf6' },
      { num: '5', label: 'Compliance Officer', model: 'Haiku',  color: '#3b82f6' },
    ],
    archUrl: '/agentic-systems/nda-review',
    demoUrl: '/demo/nda-review',
  },
  {
    icon: DollarSign,
    name: 'AP Invoice Processing',
    domain: 'Enterprise Finance · Accounts Payable',
    color: '#10b981',
    border: 'rgba(16,185,129,0.3)',
    glow: 'rgba(16,185,129,0.08)',
    badge: 'MULTI-AGENT',
    badgeColor: '#10b981',
    badgeBg: 'rgba(16,185,129,0.15)',
    badgeBorder: 'rgba(16,185,129,0.4)',
    desc: 'A 5-agent pipeline that reads vendor emails, runs OCR on PDF invoices, extracts structured line-item data, reconciles every item against the PO database, and outputs a full exception report - 100% automated, zero manual touchpoints.',
    tags: ['Mistral OCR', 'Claude Sonnet', 'CrewAI', 'Gmail API', 'SQLite'],
    stats: [{ val: '100%', label: 'Automated' }, { val: '5', label: 'Agents' }, { val: '$0.02', label: '/invoice' }],
    pipeline: [
      { num: '1', label: 'Email Triage Agent',    model: 'Sonnet',  color: '#3b82f6' },
      { num: '2', label: 'Document Intelligence', model: 'Mistral', color: '#8b5cf6' },
      { num: '3', label: 'Invoice Extractor',     model: 'Sonnet',  color: '#f59e0b' },
      { num: '4', label: 'PO Reconciliation',     model: 'Sonnet',  color: '#10b981' },
      { num: '5', label: 'Reporting Agent',       model: 'Sonnet',  color: '#ec4899' },
    ],
    archUrl: '/agentic-systems/ap-invoice-processing',
    demoUrl: '/demo/ap-invoice-processing',
  },
  {
    icon: AlertTriangle,
    name: 'AP Exception Resolution',
    domain: 'Enterprise Finance · Exception Queue',
    color: '#f59e0b',
    border: 'rgba(245,158,11,0.3)',
    glow: 'rgba(245,158,11,0.06)',
    badge: '6-AGENT',
    badgeColor: '#f59e0b',
    badgeBg: 'rgba(245,158,11,0.15)',
    badgeBorder: 'rgba(245,158,11,0.4)',
    desc: 'Resolves the 20–30% of invoices that fail automated matching in SAP or Oracle - partial GRN approvals, PO amendment cross-referencing, per-vendor tolerance policies, early payment discount capture, and BEC fraud detection.',
    tags: ['CrewAI', 'Claude Opus', '3-Way Match', 'Fraud Detection', 'SQLite'],
    stats: [{ val: '25%', label: 'Exception Queue' }, { val: '6', label: 'Agents' }, { val: '7', label: 'Fraud Signals' }],
    pipeline: [
      { num: '1', label: 'Vendor Compliance',  model: 'Opus', color: '#f59e0b' },
      { num: '2', label: 'Three-Way Match',    model: 'Opus', color: '#f59e0b' },
      { num: '3', label: 'Exception Intel',   model: 'Opus', color: '#f59e0b' },
      { num: '4', label: 'Payment Optimizer', model: 'Opus', color: '#10b981' },
      { num: '5', label: 'Fraud Detector',    model: 'Opus', color: '#ef4444' },
      { num: '6', label: 'Resolution Report', model: 'Opus', color: '#8b5cf6' },
    ],
    archUrl: '/agentic-systems/ap-exception-resolution',
    demoUrl: '/demo/ap-exception-resolution',
  },
];

function AnimatedPipeline() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % PIPELINE_STEPS.length), 1200);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px', minWidth: '220px' }}>
      <div style={{ fontSize: '11px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>Live Agent Pipeline</div>
      {PIPELINE_STEPS.map((step, i) => (
        <div key={i}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', borderRadius: '8px', background: active === i ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.02)', border: `1px solid ${active === i ? 'rgba(99,102,241,0.4)' : 'rgba(255,255,255,0.06)'}`, transition: 'all 0.4s ease' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '5px', background: active === i ? step.color : 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '700', color: active === i ? '#fff' : '#475569', transition: 'all 0.4s', flexShrink: 0 }}>{i + 1}</div>
            <div style={{ flex: 1, fontSize: '12px', color: active === i ? '#e2e8f0' : '#64748b', fontWeight: active === i ? '600' : '400', transition: 'all 0.4s' }}>{step.label}</div>
            <div style={{ fontSize: '10px', fontWeight: '600', color: active === i ? step.color : '#334155', padding: '2px 5px', background: active === i ? step.color + '20' : 'transparent', borderRadius: '4px', transition: 'all 0.4s' }}>{step.model}</div>
          </div>
          {i < PIPELINE_STEPS.length - 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}>
              <div style={{ width: '1px', height: '10px', background: i < active ? '#6366f1' : 'rgba(255,255,255,0.08)', transition: 'background 0.4s' }} />
            </div>
          )}
        </div>
      ))}
      <div style={{ marginTop: '14px', padding: '10px', background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80' }} />
        <span style={{ fontSize: '12px', color: '#4ade80', fontWeight: '600' }}>Result ready in 6 min</span>
      </div>
    </div>
  );
}

function SolutionCard({ s }) {
  const Icon = s.icon;
  return (
    <div style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${s.border}`, borderRadius: '20px', padding: 'clamp(24px,4vw,40px)', boxShadow: `0 4px 40px ${s.glow}` }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <div style={{ width: '48px', height: '48px', background: `linear-gradient(135deg,${s.color},${s.color}99)`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 0 20px ${s.color}40` }}>
          <Icon size={24} color="white" />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
            <span style={{ fontSize: 'clamp(17px,3vw,21px)', fontWeight: '700', color: '#fff' }}>{s.name}</span>
            <span style={{ padding: '3px 10px', background: s.badgeBg, border: `1px solid ${s.badgeBorder}`, borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: s.badgeColor }}>{s.badge}</span>
            <span style={{ padding: '3px 10px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#4ade80' }}>LIVE</span>
          </div>
          <div style={{ fontSize: '13px', color: s.color, fontWeight: '500' }}>{s.domain}</div>
        </div>
      </div>

      {/* Body: description + pipeline side by side */}
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '240px' }}>
          <p style={{ fontSize: 'clamp(13px,2vw,15px)', color: '#94a3b8', lineHeight: '1.75', marginBottom: '20px' }}>{s.desc}</p>
          {/* Tech tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {s.tags.map(t => (
              <span key={t} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '12px', color: '#94a3b8' }}>{t}</span>
            ))}
          </div>
          {/* Stats */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {s.stats.map(st => (
              <div key={st.label} style={{ padding: '10px 16px', background: `${s.color}10`, border: `1px solid ${s.color}25`, borderRadius: '10px', textAlign: 'center', minWidth: '72px' }}>
                <div style={{ fontSize: '18px', fontWeight: '800', color: s.color }}>{st.val}</div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>{st.label}</div>
              </div>
            ))}
          </div>
          {/* Buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href={s.demoUrl} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 18px', background: `${s.color}18`, border: `1px solid ${s.color}40`, color: s.color, borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
              <Zap size={14} />Live Demo
            </a>
            <a href={s.archUrl} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 18px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
              <ExternalLink size={14} />Architecture
            </a>
          </div>
        </div>

        {/* Pipeline */}
        <div style={{ minWidth: '200px', width: 'clamp(200px,28%,260px)', flexShrink: 0 }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: s.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>{s.pipeline.length}-Agent Pipeline</div>
          {s.pipeline.map((step, i, arr) => (
            <div key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '5px', background: step.color + '20', border: '1px solid ' + step.color + '40', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: '700', color: step.color, flexShrink: 0 }}>{step.num}</div>
                <div style={{ flex: 1, fontSize: '11px', color: '#e2e8f0', fontWeight: '500', minWidth: 0 }}>{step.label}</div>
                <div style={{ fontSize: '10px', fontWeight: '600', color: step.color, padding: '2px 5px', background: step.color + '18', borderRadius: '4px', flexShrink: 0 }}>{step.model}</div>
              </div>
              {i < arr.length - 1 && <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}><div style={{ width: '1px', height: '8px', background: s.color + '40' }} /></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: 'var(--bg-base)', color: 'var(--text-primary)', overflowX: 'hidden' }}>
      <style jsx>{`
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-3px); }
        .cta-primary { transition: all 0.2s; }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(99,102,241,0.5) !important; }
        .step-card { transition: all 0.3s; }
        .step-card:hover { border-color: var(--accent-border) !important; background: var(--accent-subtle) !important; }
        @media (max-width: 768px) {
          .hero-layout { flex-direction: column !important; }
          .pipeline-preview { display: none !important; }
          .problems-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .clouds-strip { flex-wrap: wrap !important; gap: 12px !important; }
          .hero-btns { flex-direction: column !important; }
          .hero-btns a { width: 100%; justify-content: center !important; }
          .footer-links { flex-direction: column !important; gap: 16px !important; }
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="vg-nav">
        <div className="vg-nav-inner">
          <a href="/" className="vg-logo">
            <div className="vg-logo-icon"><Zap size={17} color="#fff" /></div>
            <span className="vg-logo-text">Vinay Gangidi</span>
          </a>
          <div className="nav-desktop vg-nav-links" style={{ display: 'flex' }}>
            <a href="/solutions" className="vg-nav-link">AI Agents</a>
            <a href="#how-it-works" className="vg-nav-link">How it Works</a>
            <a href="/enterprise-ai-strategy" className="vg-nav-link">Strategy</a>
            <a href="/about" className="vg-nav-link active">About Me</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="mailto:vinay.gangidi@gmail.com" className="nav-desktop vg-btn-primary">
              Get in Touch <ArrowRight size={13} />
            </a>
            <button className="nav-mobile-btn" onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '7px', color: 'var(--text-primary)', cursor: 'pointer', display: 'none', alignItems: 'center' }}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu vg-mobile-menu">
            {[['AI Agents', '/solutions'], ['How it Works', '#how-it-works'], ['Strategy', '/enterprise-ai-strategy'], ['About Me', '/about']].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="vg-nav-link" style={{ fontSize: '16px' }}>{label}</a>
            ))}
            <a href="mailto:vinay.gangidi@gmail.com" className="vg-btn-primary" style={{ justifyContent: 'center' }}>
              Get in Touch <ArrowRight size={15} />
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(180deg,rgba(99,102,241,0.07) 0%,rgba(10,10,10,0) 60%)', padding: 'clamp(80px,14vw,140px) clamp(16px,5vw,32px) clamp(72px,12vw,120px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="hero-layout" style={{ display: 'flex', alignItems: 'center', gap: '60px', justifyContent: 'space-between' }}>

            {/* Left - copy */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Live badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '100px', marginBottom: '28px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#4ade80' }}>LIVE IN PRODUCTION</span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>NDA Review · 97% faster</span>
              </div>

              <h1 style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: '900', lineHeight: '1.08', letterSpacing: '-0.03em', marginBottom: '24px', background: 'linear-gradient(135deg,#fff 40%,#94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                The AI Agent Platform<br />for Enterprise<br />Document Workflows.
              </h1>

              <p style={{ fontSize: 'clamp(15px,2.5vw,19px)', color: '#94a3b8', lineHeight: '1.75', maxWidth: '560px', marginBottom: '40px' }}>
                Replace slow, expensive manual review with coordinated multi-agent systems that reason, decide, and deliver structured results - in minutes, not hours.
              </p>

              <div className="hero-btns" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/access" className="cta-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(13px,2vw,16px) clamp(24px,4vw,32px)', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '10px', fontSize: 'clamp(14px,2vw,16px)', fontWeight: '700', textDecoration: 'none', boxShadow: '0 8px 32px rgba(99,102,241,0.35)' }}>
                  Request Demo <ArrowRight size={16} />
                </a>
                <a href="/solutions" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(13px,2vw,16px) clamp(24px,4vw,32px)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#e2e8f0', borderRadius: '10px', fontSize: 'clamp(14px,2vw,16px)', fontWeight: '600', textDecoration: 'none' }}>
                  View Solutions <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Right - animated pipeline */}
            <div className="pipeline-preview" style={{ flexShrink: 0, width: '260px' }}>
              <AnimatedPipeline />
            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ padding: 'clamp(72px,10vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>The Problem</p>
            <h2 style={{ fontSize: 'clamp(26px,5vw,44px)', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: 1.15 }}>Manual review doesn't scale.</h2>
          </div>
          <div className="problems-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
            {[
              { icon: '📋', title: 'Hours per document', desc: 'Legal teams spend 2–4 hours reviewing a single NDA. AP clerks manually key-enter invoice line items from PDFs. This doesn\'t scale.' },
              { icon: '💸', title: 'Expensive and error-prone', desc: 'Senior lawyer time costs $400–800/hour. Manual data entry has a 1–4% error rate - a $0.50 mistake that costs thousands downstream.' },
              { icon: '🚫', title: 'No structured output', desc: 'A PDF review leaves no machine-readable trail. Downstream systems - ERP, CLM, DMS - can\'t consume a Word document with comments.' },
            ].map(p => (
              <div key={p.title} className="step-card" style={{ padding: 'clamp(24px,3vw,32px)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{p.icon}</div>
                <h3 style={{ fontSize: 'clamp(15px,2vw,18px)', fontWeight: '700', marginBottom: '10px', color: '#e2e8f0' }}>{p.title}</h3>
                <p style={{ fontSize: 'clamp(13px,1.8vw,15px)', color: '#64748b', lineHeight: '1.7' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ padding: 'clamp(72px,10vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(99,102,241,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>How it Works</p>
            <h2 style={{ fontSize: 'clamp(26px,5vw,44px)', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '16px' }}>From document to decision in three steps.</h2>
            <p style={{ color: '#64748b', fontSize: 'clamp(14px,2vw,17px)', maxWidth: '540px', margin: '0 auto' }}>No integrations to build. No models to fine-tune. Submit and stream.</p>
          </div>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {[
              { num: '01', title: 'Submit', icon: '📤', desc: 'Upload a PDF or send an invoice batch via the demo UI or REST API. Authenticated with your API key.', detail: 'Supports PDF, JSON batch, or direct API POST.' },
              { num: '02', title: 'Agents Reason', icon: '🧠', desc: 'A coordinated pipeline of 5–6 specialized agents runs sequentially. Each reads the prior agent\'s output and reasons on top of it.', detail: 'Watch each step via SSE streaming - no black boxes.' },
              { num: '03', title: 'Structured Output', icon: '✅', desc: 'Receive a JSON result with risk scores, GL codes, redline suggestions, exception classifications, and an audit trail.', detail: 'Delivered via API response or HMAC-signed webhook.' },
            ].map((step, i) => (
              <div key={i} className="step-card" style={{ padding: 'clamp(24px,3vw,36px)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', position: 'relative' }}>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#6366f1', letterSpacing: '0.1em', marginBottom: '16px' }}>{step.num}</div>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{step.icon}</div>
                <h3 style={{ fontSize: 'clamp(17px,2.5vw,22px)', fontWeight: '800', marginBottom: '12px', color: '#fff' }}>{step.title}</h3>
                <p style={{ fontSize: 'clamp(13px,1.8vw,15px)', color: '#94a3b8', lineHeight: '1.7', marginBottom: '14px' }}>{step.desc}</p>
                <p style={{ fontSize: '12px', color: '#475569', fontStyle: 'italic' }}>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section style={{ padding: 'clamp(72px,10vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <div>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Flagship Solutions</p>
              <h2 style={{ fontSize: 'clamp(26px,5vw,44px)', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: 1.15 }}>Production-ready systems,<br />deployed today.</h2>
            </div>
            <a href="/solutions" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#6366f1', textDecoration: 'none', fontWeight: '600', flexShrink: 0 }}>
              View all solutions <ArrowRight size={14} />
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {SOLUTIONS.map(s => <SolutionCard key={s.name} s={s} />)}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section style={{ padding: 'clamp(72px,10vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px' }}>Results</p>
          <h2 style={{ fontSize: 'clamp(26px,5vw,44px)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '56px' }}>Numbers that move the needle.</h2>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
            {[
              { val: '97%', label: 'Faster than manual review', sub: 'NDA reviewed in 6 min vs 2–4 hrs' },
              { val: '$0.30', label: 'Per NDA review', sub: 'vs $400–800/hr lawyer time' },
              { val: '100%', label: 'Structured output', sub: 'JSON result, ready for ERP/CLM/DMS' },
              { val: '<90s', label: 'Invoice batch turnaround', sub: 'End-to-end with full exception report' },
            ].map(s => (
              <div key={s.label} className="hover-lift" style={{ padding: 'clamp(24px,3vw,36px)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
                <div style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: '900', letterSpacing: '-0.03em', background: 'linear-gradient(135deg,#6366f1,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '10px' }}>{s.val}</div>
                <div style={{ fontSize: 'clamp(13px,1.8vw,15px)', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>{s.label}</div>
                <div style={{ fontSize: 'clamp(11px,1.5vw,12px)', color: '#475569' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY ── */}
      <section style={{ padding: 'clamp(72px,10vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg,rgba(99,102,241,0.06),rgba(16,185,129,0.04))', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '20px', padding: 'clamp(32px,5vw,56px)' }}>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ flex: 1, minWidth: '260px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Lock size={18} color="#818cf8" />
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: '700', color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Enterprise Security</p>
                </div>
                <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}>Your data never leaves your boundary.</h2>
                <p style={{ color: '#94a3b8', fontSize: 'clamp(14px,2vw,16px)', lineHeight: '1.75', marginBottom: '24px' }}>
                  Every enterprise deployment uses private network endpoints. Document content stays inside your cloud account and never reaches the model provider's network.
                </p>
                <div className="clouds-strip" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {['AWS PrivateLink', 'Azure Private Endpoint', 'GCP VPC Controls', 'On-prem Air-gap'].map(c => (
                    <span key={c} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px', color: '#94a3b8', fontWeight: '500' }}>{c}</span>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { icon: '🔐', title: 'Private LLM endpoints only', desc: 'AWS Bedrock · Azure OpenAI · GCP Vertex - all via private network, zero public transit' },
                  { icon: '🏢', title: 'Deploy in your cloud', desc: 'Same container image runs on AWS ECS, Azure Container Apps, GCP Cloud Run, or on-prem Kubernetes' },
                  { icon: '📋', title: 'Full audit trail', desc: 'Every agent decision logged with reasoning - satisfies SOX, GDPR, ISO 27001 audit requirements' },
                ].map(f => (
                  <div key={f.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px' }}>
                    <span style={{ fontSize: '20px', flexShrink: 0 }}>{f.icon}</span>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#e2e8f0', marginBottom: '4px' }}>{f.title}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6' }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCE MAP CARD ── */}
      <section style={{ padding: '0 clamp(16px,5vw,32px) clamp(40px,6vw,60px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <a href="/finance-map" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ border: '1px solid #AFA9EC', borderRadius: 14, padding: '20px 28px', background: 'linear-gradient(135deg,#EEEDFE,#f5f4ff)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#3C3489', marginBottom: 6 }}>Finance Cycle Intelligence Map</div>
                <div style={{ fontSize: 12, color: '#534AB7', lineHeight: 1.6 }}>Vendor coverage + IA orchestration gaps across O2C, I2C, P2P, H2R, and R2R - where no native agent closes the loop.</div>
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6366f1', whiteSpace: 'nowrap' }}>Explore map →</div>
            </div>
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: 'clamp(80px,12vw,120px) clamp(16px,5vw,32px)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px' }}>
            See it run on<br />your documents.
          </h2>
          <p style={{ color: '#64748b', fontSize: 'clamp(15px,2.5vw,18px)', lineHeight: '1.75', marginBottom: '40px' }}>
            Request demo access and we'll walk you through a live run on your NDA or invoice batch. Results in under 90 seconds. No setup required.
          </p>
          <a href="/access" className="cta-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: 'clamp(16px,3vw,20px) clamp(32px,5vw,48px)', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '12px', fontSize: 'clamp(16px,2.5vw,18px)', fontWeight: '800', textDecoration: 'none', boxShadow: '0 12px 40px rgba(99,102,241,0.4)' }}>
            Request Demo Access <ArrowRight size={18} />
          </a>
          <p style={{ marginTop: '20px', fontSize: '13px', color: '#334155' }}>No credit card. No sales call. Access link sent within 24 hours.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: 'clamp(32px,5vw,48px) clamp(16px,5vw,32px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={14} color="white" />
            </div>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>Vinay Gangidi</span>
            <span style={{ color: '#334155', fontSize: '14px', marginLeft: '8px' }}>© 2026</span>
          </div>
          <div className="footer-links" style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
            {[['AI Agents', '/solutions'], ['Strategy', '/enterprise-ai-strategy'], ['About Me', '/about'], ['Get in Touch', 'mailto:vinay.gangidi@gmail.com']].map(([label, href]) => (
              <a key={label} href={href} className="vg-nav-link" style={{ fontSize: '13px' }}>{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
