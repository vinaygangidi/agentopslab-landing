'use client';

import { Zap, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { categories, getAgentsByCategory, getTotalAgentCount } from '../../lib/agentsData';
import AgentCard from '../../components/AgentCard';

export default function SolutionsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalAgents = getTotalAgentCount();

  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: 'var(--bg-base)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <style jsx>{`
        .agent-card { transition: all 0.3s ease; text-decoration: none; color: inherit; display: block; }
        .agent-card:hover { transform: translateY(-4px); border-color: var(--accent-border) !important; }
        .grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media (max-width: 640px) {
          .grid-3 { grid-template-columns: 1fr; gap: 14px; }
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .grid-3 { grid-template-columns: repeat(2,1fr); }
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

      {/* Header */}
      <section style={{ padding: 'clamp(60px,10vw,100px) clamp(16px,5vw,32px) clamp(48px,8vw,80px)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg,rgba(99,102,241,0.05) 0%,transparent 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>All Solutions</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(30px,6vw,56px)', fontWeight: '900', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
                {totalAgents}+ production-ready<br />AI agents.
              </h1>
              <p style={{ fontSize: 'clamp(14px,2.5vw,18px)', color: '#94a3b8', maxWidth: '560px', lineHeight: '1.7' }}>
                Every agent is documented, tested, and deployable. Browse by domain or filter to what your team needs today.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { val: totalAgents + '+', label: 'Agents' },
                { val: '6', label: 'Domains' },
                { val: '100%', label: 'Documented' },
              ].map(s => (
                <div key={s.label} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', textAlign: 'center', minWidth: '80px' }}>
                  <div style={{ fontSize: 'clamp(20px,3vw,28px)', fontWeight: '900', color: '#818cf8', marginBottom: '4px' }}>{s.val}</div>
                  <div style={{ fontSize: '11px', color: '#475569', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent categories */}
      {Object.entries(categories).map(([catId, cat], idx) => {
        const agents = getAgentsByCategory(catId);
        return (
          <section key={catId} style={{ padding: 'clamp(56px,8vw,88px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ marginBottom: '36px' }}>
                <div style={{ display: 'inline-block', padding: '4px 12px', background: cat.badgeBg, border: `1px solid ${cat.badgeBorder}`, borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: cat.badgeColor, marginBottom: '12px', letterSpacing: '0.06em' }}>{cat.badge}</div>
                <h2 style={{ fontSize: 'clamp(22px,4vw,34px)', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.02em' }}>{cat.title}</h2>
                <p style={{ fontSize: 'clamp(13px,2vw,16px)', color: '#94a3b8' }}>{cat.description}</p>
              </div>
              <div className="grid-3">
                {agents.map((agent, i) => <AgentCard key={i} agent={agent} />)}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section style={{ padding: 'clamp(72px,10vw,100px) clamp(16px,5vw,32px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '16px' }}>Ready to run one?</h2>
          <p style={{ color: '#64748b', fontSize: 'clamp(14px,2vw,17px)', lineHeight: '1.7', marginBottom: '36px' }}>Request demo access and we'll walk you through a live run in under 90 seconds.</p>
          <a href="/access" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: 'clamp(14px,2vw,18px) clamp(28px,4vw,40px)', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '10px', fontSize: 'clamp(14px,2vw,16px)', fontWeight: '800', textDecoration: 'none', boxShadow: '0 8px 32px rgba(99,102,241,0.35)' }}>
            Request Demo Access <ArrowRight size={16} />
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
          <span style={{ fontSize: '13px', color: 'var(--text-dim)' }}>© 2026 Vinay Gangidi</span>
        </div>
      </footer>
    </div>
  );
}
