'use client';

import { useState } from 'react';
import { Zap, ArrowRight, Menu, X, Rocket, Factory, Network, ShieldCheck, ChevronRight } from 'lucide-react';

const phases = [
  {
    n: '01',
    icon: Rocket,
    stage: 'MVP',
    color: '#4ADE80',
    title: 'Start with one agent that earns its keep',
    lede: 'Resist the platform urge. Pick a single, painful, well-bounded workflow and ship one agent that does it end to end.',
    points: [
      'Choose one workflow, one owner, one outcome you can measure - not a platform.',
      'Keep a human in the loop by default: the agent proposes, a person approves.',
      'Instrument it from day one - every run logged, every decision traceable.',
      'Your bar for success: real hours saved on real work in weeks, not quarters.',
    ],
  },
  {
    n: '02',
    icon: Factory,
    stage: 'Phase 1 Production',
    color: '#22D3EE',
    title: 'Harden the one that works',
    lede: 'Take your MVP from "works in a demo" to "runs unattended on the routine 80%" - and let people trust it.',
    points: [
      'Set confidence thresholds: auto-handle the routine, escalate the ambiguous.',
      'Add error handling, retries, and idempotency so one bad input never corrupts state.',
      'Track cost, latency, and accuracy per run - this is where AgentOps begins.',
      'Turn it into a build pattern your team can copy for the next agent.',
    ],
  },
  {
    n: '03',
    icon: Network,
    stage: 'Multi-Agent, Multi-Platform',
    color: '#818CF8',
    title: 'Scale to a fleet, not a monolith',
    lede: 'Compose specialized agents into pipelines, and reach across the systems your business already runs on.',
    points: [
      'Chain single-purpose agents into pipelines (extract, reconcile, resolve, post).',
      'Go multi-platform on purpose - CRM, ERP, ITSM, docs - via open standards (MCP, A2A).',
      'Own a neutral orchestration layer - do not lock your fleet to any one vendor agent.',
      'Let agents specialize while the orchestrator routes work and manages handoffs.',
    ],
  },
  {
    n: '04',
    icon: ShieldCheck,
    stage: 'Governance Orchestration',
    color: '#F59E0B',
    title: 'Govern before it is big enough to hurt',
    lede: 'Put in the layer that lets a fleet run safely at scale - and that catches the failures standard monitoring misses.',
    points: [
      'Keep a central catalog: every agent, its owner, its permissions, its status.',
      'Watch for semantic failure - the confident-but-wrong answer no error log shows.',
      'Apply policy, guardrails, and audit trails uniformly across every agent.',
      'Measure hours returned to judgment work, not agents deployed.',
    ],
  },
];

export default function PlaybookPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: 'var(--bg-base)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <style jsx>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          .phase-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      {/* Nav */}
      <nav className="vg-nav">
        <div className="vg-nav-inner">
          <a href="/" className="vg-logo">
            <div className="vg-logo-icon"><Zap size={17} color="#fff" /></div>
            <span className="vg-logo-text">AgentOpsLab</span>
          </a>
          <div className="nav-desktop vg-nav-links" style={{ display: 'flex' }}>
            <a href="/" className="vg-nav-link">Agents</a>
            <a href="/playbook" className="vg-nav-link active">Agentic Playbook</a>
            <a href="/about" className="vg-nav-link">About</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="/" className="nav-desktop vg-btn-primary">
              Explore agents <ArrowRight size={13} />
            </a>
            <button className="nav-mobile-btn" onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '7px', color: 'var(--text-primary)', cursor: 'pointer', display: 'none', alignItems: 'center' }}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu vg-mobile-menu">
            {[['Agents', '/'], ['Agentic Playbook', '/playbook'], ['About', '/about']].map(([l, h]) => (
              <a key={l} href={h} onClick={() => setMenuOpen(false)} className="vg-nav-link" style={{ fontSize: '16px' }}>{l}</a>
            ))}
            <a href="/" className="vg-btn-primary" style={{ justifyContent: 'center' }}>
              Explore agents <ArrowRight size={15} />
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(60px,9vw,88px) 28px clamp(32px,5vw,48px)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-bright)', background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)', padding: '5px 12px', borderRadius: '100px', marginBottom: '22px' }}>
          The Agentic Playbook
        </div>
        <h1 style={{ fontWeight: '800', fontSize: 'clamp(34px,5vw,56px)', lineHeight: '1.06', letterSpacing: '-.025em', marginBottom: '18px', maxWidth: '840px' }}>
          Your roadmap from one MVP agent to a governed, multi-platform fleet.
        </h1>
        <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '740px' }}>
          Most enterprise AI programs stall because they start too big. This is the opposite path -
          a practical playbook for leaders: prove value with a single agent, harden it into production,
          then scale to a coordinated fleet across platforms, with governance orchestration in place
          before it gets big enough to hurt.
        </p>
      </section>

      {/* Phases */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '8px 28px 64px' }}>
        <div className="phase-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '18px' }}>
          {phases.map(({ n, icon: Icon, stage, color, title, lede, points }) => (
            <div key={n} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '16px', padding: '26px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '18px', right: '22px', fontFamily: 'var(--font-mono)', fontSize: '34px', fontWeight: '800', color: color + '22', lineHeight: 1 }}>{n}</div>
              <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: color + '18', border: '1px solid ' + color + '35', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Icon size={22} color={color} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: '8px' }}>{stage}</div>
              <div style={{ fontWeight: '800', fontSize: '19px', letterSpacing: '-.01em', marginBottom: '8px' }}>{title}</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.65', marginBottom: '16px' }}>{lede}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {points.map(pt => (
                  <div key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <ChevronRight size={13} color={color} style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principle strip */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '48px 28px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-bright)', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '12px' }}>The through-line</div>
          <p style={{ fontSize: 'clamp(18px,2.6vw,24px)', fontWeight: '700', lineHeight: '1.5', letterSpacing: '-.01em' }}>
            Connect your data first. Automate the rules second. Put AI on top - in the right sequence,
            at the right pace, with the governance to sustain it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 28px 72px', textAlign: 'center' }}>
        <h2 style={{ fontWeight: '800', fontSize: 'clamp(24px,3.5vw,34px)', letterSpacing: '-.02em', marginBottom: '14px' }}>
          See the agents this playbook produces.
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '24px', maxWidth: '560px', margin: '0 auto 24px' }}>
          Every agent in the catalog started as an MVP and earned its way to production.
        </p>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '10px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 20px rgba(99,102,241,0.4)' }}>
          Explore the agent catalog <ArrowRight size={16} />
        </a>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '28px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <span style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)' }}>AgentOpsLab</span>
          <span style={{ fontSize: '13px', color: 'var(--text-dim)' }}>© 2026 AgentOpsLab</span>
        </div>
      </footer>
    </div>
  );
}
