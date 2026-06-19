'use client';

import { Zap, ArrowRight, Menu, X, ExternalLink, Play, FileCheck, DollarSign, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { multiAgentSystems, businessFunctions, platforms, getTotalAgentCount, techBadges } from '../../lib/agentsData';
import AgentCard from '../../components/AgentCard';

const multiAgentIcons = { DollarSign, AlertTriangle, FileCheck };

export default function SolutionsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalAgents = getTotalAgentCount();

  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: 'var(--bg-base)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <style jsx>{`
        .grid-2 { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; }
        .agent-card:hover { transform: translateY(-3px); border-color: var(--border-strong) !important; }
        .mas-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.3) !important; }
        .mas-card { transition: all 0.25s ease; }
        @media (max-width: 900px) {
          .grid-4 { grid-template-columns: repeat(2,1fr); }
          .grid-3 { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 640px) {
          .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
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
            <span className="vg-logo-text">Vinay Gangidi</span>
          </a>
          <div className="nav-desktop vg-nav-links" style={{ display: 'flex' }}>
            <a href="/solutions" className="vg-nav-link active">AI Agents</a>
            <a href="/enterprise-ai-strategy" className="vg-nav-link">Strategy</a>
            <a href="/about" className="vg-nav-link">About Me</a>
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
            {[['AI Agents', '/solutions'], ['Strategy', '/enterprise-ai-strategy'], ['About Me', '/about']].map(([l, h]) => (
              <a key={l} href={h} onClick={() => setMenuOpen(false)} className="vg-nav-link" style={{ fontSize: '16px' }}>{l}</a>
            ))}
            <a href="mailto:vinay.gangidi@gmail.com" className="vg-btn-primary" style={{ justifyContent: 'center' }}>
              Get in Touch <ArrowRight size={15} />
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section style={{ padding: 'clamp(60px,10vw,96px) clamp(16px,5vw,32px) clamp(48px,8vw,72px)', borderBottom: '1px solid var(--border-subtle)', background: 'linear-gradient(180deg,var(--accent-subtle) 0%,transparent 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: 'var(--accent-bright)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
            Agentic Automation Portfolio
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '28px' }}>
            <div style={{ maxWidth: '680px' }}>
              <h1 style={{ fontSize: 'clamp(30px,5.5vw,54px)', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '20px' }}>
                {totalAgents}+ agents built across<br />every enterprise function.
              </h1>
              <p style={{ fontSize: 'clamp(14px,2vw,17px)', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
                Multi-agent systems, n8n workflow agents, Python/CrewAI agents, and Claude agent specs - built across GTM, Finance, HR, and Legal on the platforms enterprises actually run.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { val: totalAgents + '+', label: 'Agents built' },
                { val: '3',             label: 'Live demos'   },
                { val: '4',             label: 'Functions'    },
                { val: '8',             label: 'Platforms'    },
              ].map(s => (
                <div key={s.label} style={{ padding: '14px 18px', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '12px', textAlign: 'center', minWidth: '76px' }}>
                  <div style={{ fontSize: 'clamp(20px,3vw,26px)', fontWeight: '900', color: 'var(--accent-bright)', marginBottom: '3px' }}>{s.val}</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform strip */}
      <section style={{ padding: '24px clamp(16px,5vw,32px)', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.10em', textTransform: 'uppercase', flexShrink: 0 }}>Built on</span>
            {platforms.map(p => (
              <span key={p.name} style={{ fontSize: '12px', fontWeight: '600', color: p.color, padding: '4px 10px', background: `${p.color}12`, border: `1px solid ${p.color}28`, borderRadius: '6px' }}>
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Multi-Agent Systems ── */}
      <section style={{ padding: 'clamp(56px,8vw,80px) clamp(16px,5vw,32px)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '36px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: 'var(--green-subtle)', border: '1px solid var(--green-border)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: 'var(--green)', marginBottom: '14px', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
              LIVE DEMOS
            </div>
            <h2 style={{ fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '10px' }}>
              Multi-Agent Systems
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.7' }}>
              Coordinated pipelines where 5-6 specialized agents run in sequence - each reading the prior agent's output and reasoning on top of it. Live and runnable today.
            </p>
          </div>

          <div className="grid-3">
            {multiAgentSystems.map(sys => {
              const Icon = multiAgentIcons[sys.icon];
              return (
                <div key={sys.name} className="mas-card" style={{ background: 'var(--bg-surface)', border: `1px solid ${sys.color}28`, borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '0' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${sys.color}18`, border: `1px solid ${sys.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {Icon && <Icon size={22} color={sys.color} />}
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--green)', background: 'var(--green-subtle)', border: '1px solid var(--green-border)', borderRadius: '100px', padding: '3px 9px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>LIVE</span>
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.01em' }}>{sys.name}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '20px', flex: 1 }}>{sys.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {sys.platforms.map(p => (
                      <span key={p} style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-muted)', background: 'var(--bg-raised)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '3px 8px', fontFamily: 'var(--font-mono)' }}>{p}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a href={sys.demoLink} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '9px 14px', background: `${sys.color}18`, border: `1px solid ${sys.color}35`, borderRadius: '8px', fontSize: '12px', fontWeight: '700', color: sys.color, textDecoration: 'none' }}>
                      <Play size={12} /> Live Demo
                    </a>
                    <a href={sys.archLink} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '9px 14px', background: 'var(--bg-raised)', border: '1px solid var(--border-default)', borderRadius: '8px', fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                      Architecture <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTIONS 2-5: Business Functions ── */}
      {businessFunctions.map((fn, fnIdx) => (
        <section key={fn.id} style={{ padding: 'clamp(56px,8vw,80px) clamp(16px,5vw,32px)', borderBottom: '1px solid var(--border-subtle)', background: fnIdx % 2 === 0 ? 'transparent' : 'var(--bg-surface)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Function header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '40px', paddingBottom: '24px', borderBottom: `1px solid ${fn.border}` }}>
              <div style={{ padding: '6px 16px', background: fn.badgeBg, border: `1px solid ${fn.badgeBorder}`, borderRadius: '8px', fontSize: '13px', fontWeight: '800', color: fn.badgeColor, letterSpacing: '0.04em' }}>
                {fn.label}
              </div>
              <h2 style={{ fontSize: 'clamp(20px,3vw,30px)', fontWeight: '800', letterSpacing: '-0.02em' }}>{fn.title}</h2>
            </div>

            {/* Sub-functions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {fn.subFunctions.map(sf => (
                <div key={sf.id}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: fn.badgeColor, fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{sf.label}</span>
                    {sf.note && (
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontStyle: 'italic' }}>{sf.note}</span>
                    )}
                    <div style={{ flex: 1, height: '1px', background: `${fn.color}20` }} />
                  </div>

                  {sf.agents.length > 0 ? (
                    <div className="grid-3">
                      {sf.agents.map((agent, i) => (
                        <AgentCard key={i} agent={agent} gradient={fn.gradient} shadow={fn.shadow} />
                      ))}
                    </div>
                  ) : (
                    <div style={{ padding: '20px 24px', background: `${fn.color}08`, border: `1px solid ${fn.color}20`, borderRadius: '10px' }}>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        Live multi-agent demos above cover this sub-function end-to-end.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Tech legend */}
      <section style={{ padding: '32px clamp(16px,5vw,32px)', borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.10em', textTransform: 'uppercase', flexShrink: 0 }}>Implementation</span>
          {Object.values(techBadges).map(t => (
            <span key={t.label} style={{ fontSize: '11px', fontWeight: '700', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '100px', color: t.color, background: t.bg, border: `1px solid ${t.border}` }}>
              {t.label}
            </span>
          ))}
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Each card is badged with the tech it was built on.</span>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(72px,10vw,96px) clamp(16px,5vw,32px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '16px' }}>Want to run one?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(14px,2vw,16px)', lineHeight: '1.7', marginBottom: '32px' }}>
            Three live demos are running today. Get access and see results in under 90 seconds.
          </p>
          <a href="/access" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(14px,2vw,16px) clamp(28px,4vw,40px)', background: 'linear-gradient(135deg,var(--accent),#4f46e5)', color: '#fff', borderRadius: '10px', fontSize: 'clamp(14px,2vw,15px)', fontWeight: '800', textDecoration: 'none', boxShadow: 'var(--shadow-accent)' }}>
            Request Demo Access <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="vg-footer">
        <div className="vg-footer-inner">
          <a href="/" className="vg-logo">
            <div className="vg-logo-icon"><Zap size={14} color="#fff" /></div>
            <span className="vg-logo-text" style={{ fontSize: '15px' }}>Vinay Gangidi</span>
          </a>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[['AI Agents', '/solutions'], ['Strategy', '/enterprise-ai-strategy'], ['About Me', '/about'], ['Get in Touch', 'mailto:vinay.gangidi@gmail.com']].map(([l, h]) => (
              <a key={l} href={h} style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
          <span style={{ fontSize: '13px', color: 'var(--text-dim)' }}>© 2026 Vinay Gangidi</span>
        </div>
      </footer>
    </div>
  );
}
