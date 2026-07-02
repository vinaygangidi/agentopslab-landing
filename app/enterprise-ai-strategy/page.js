'use client';

import { useState } from 'react';
import { Zap, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

export default function EnterpriseAIStrategy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('architecture');

  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: 'var(--bg-base)', color: 'var(--text-primary)', minHeight: '100vh', overflowX: 'hidden' }}>
      <style jsx>{`
        .tab-btn { transition: all 0.2s; cursor: pointer; font-family: var(--font-sans); }
        .tab-btn:hover { background: var(--accent-subtle) !important; border-color: var(--accent-border) !important; color: var(--accent-bright) !important; }
        .principle-card { transition: all 0.3s; background: var(--bg-surface); border: 1px solid var(--border-default); border-radius: 14px; padding: 28px; }
        .principle-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); border-color: var(--accent-border); }
        .phase-card { transition: all 0.3s; }
        .phase-card:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(0,0,0,0.25); }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 32px !important; }
        }
        @media (min-width: 769px) { .nav-mobile-btn { display: none !important; } }
      `}</style>

      {/* NAV */}
      <nav className="vg-nav">
        <div className="vg-nav-inner" style={{ maxWidth: '1300px' }}>
          <a href="/" className="vg-logo">
            <div className="vg-logo-icon"><Zap size={16} color="#fff" /></div>
            <span className="vg-logo-text">AgentOpsLab <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>by Vinay</span></span>
          </a>
          <div className="nav-desktop vg-nav-links" style={{ display: 'flex' }}>
            <a href="/solutions" className="vg-nav-link">AI Agents</a>
            <a href="/enterprise-ai-strategy" className="vg-nav-link active">Strategy</a>
            <a href="/about" className="vg-nav-link">About Me</a>
            <a href="mailto:vinay.gangidi@gmail.com" className="vg-btn-primary">Get in Touch <ArrowRight size={13} /></a>
          </div>
          <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '8px', color: 'var(--text-primary)', cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center' }}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <div className="vg-mobile-menu">
            {[['AI Agents', '/solutions'], ['Strategy', '/enterprise-ai-strategy'], ['About Me', '/about']].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="vg-nav-link" style={{ fontSize: '16px' }}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ padding: '72px 28px 0', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--cyan)', border: '1px solid var(--cyan-subtle)', background: 'var(--cyan-subtle)', padding: '6px 14px', borderRadius: '100px', marginBottom: '28px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block' }} />
          Enterprise AI · Solution Architecture
        </div>
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: 'clamp(32px,5vw,58px)', lineHeight: '1.06', letterSpacing: '-.02em', maxWidth: '22ch', marginBottom: '24px', color: 'var(--text-primary)' }}>
          Intelligence on a foundation<br />
          <span style={{ background: 'linear-gradient(92deg, #0891B2, #4F46E5)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>we trust and own.</span>
        </h1>
        <p style={{ maxWidth: '68ch', color: 'var(--text-secondary)', fontSize: 'clamp(16px,1.8vw,19px)', lineHeight: '1.7', marginBottom: '36px' }}>
          One central AI brain serves Finance, GTM, HR and Legal. It reads from a shared data layer, hands off tasks to each platform's own AI tools, and writes results back to the right system. Built in the right order: <strong style={{ color: 'var(--text-primary)' }}>connect the data first, add rules second, then add AI on top.</strong>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', borderTop: '1px solid var(--border-subtle)', marginBottom: '56px' }}>
          {[['Serves', 'Finance · GTM · HR · Legal'], ['Build order', 'Connect, then rules, then AI'], ['Standard', 'MCP / A2A (open)'], ['Data layer', 'Snowflake (governed)'], ['Orchestrator', 'Neutral, company-owned']].map(([k, v]) => (
            <div key={k} style={{ padding: '16px 28px 16px 0', marginRight: '28px', borderRight: '1px solid var(--border-subtle)' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10.5px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{k}</div>
              <div style={{ fontWeight: '600', fontSize: '14px', marginTop: '4px', color: 'var(--text-primary)' }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TABS */}
      <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 28px 24px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[['architecture', 'Architecture Diagram'], ['principles', 'Design Principles'], ['platforms', 'Platform Strategy'], ['roadmap', 'Phased Roadmap']].map(([key, label]) => (
            <button key={key} className="tab-btn" onClick={() => setActiveTab(key)} style={{ padding: '9px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', background: activeTab === key ? 'var(--accent-subtle)' : 'var(--bg-surface)', border: activeTab === key ? '1px solid var(--accent-border)' : '1px solid var(--border-default)', color: activeTab === key ? 'var(--accent-bright)' : 'var(--text-muted)' }}>
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE DIAGRAM TAB */}
      {activeTab === 'architecture' && (
        <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '8px 28px 64px' }}>
          {/* Build order callout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', padding: '12px 18px', background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)', borderRadius: '10px', fontSize: '13px', color: 'var(--accent-bright)', fontFamily: 'JetBrains Mono, monospace' }}>
            <span style={{ fontWeight: '700', letterSpacing: '.05em' }}>READ BOTTOM UP:</span>
            <span style={{ color: '#6366F1' }}>L1 Integration (foundation) → L2 Rules → L3 AI → L4 Experience (top). The numbers show build order, not visual position.</span>
          </div>
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <svg viewBox="0 0 1300 1060" style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="Enterprise AI solution architecture">
              <defs>
                <marker id="ac" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#0891B2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></marker>
                <marker id="ai" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></marker>
                <marker id="am" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker>
                <linearGradient id="orchGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0891B2" stopOpacity="0.10"/><stop offset="100%" stopColor="#4F46E5" stopOpacity="0.10"/></linearGradient>
              </defs>

              {/* L4 EXPERIENCE (top - consumed last, built last) */}
              <rect x="44" y="28" width="1212" height="152" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeDasharray="5 4"/>
              <text fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#64748B" x="62" y="50">L4 · EXPERIENCE LAYER - HOW EACH TEAM USES THE INTELLIGENCE</text>
              {[
                { x: 80,  label: 'M365 Copilot',     sub: 'Teams · Outlook · Excel' },
                { x: 380, label: 'Power BI',          sub: 'Fabric semantic layer'   },
                { x: 680, label: 'Embedded Copilots', sub: 'Inside SFDC · NetSuite'  },
                { x: 980, label: 'Custom Apps',       sub: 'Power Platform · APIs'   },
              ].map(({ x, label, sub }) => (
                <g key={x}>
                  <rect x={x} y="62" width="260" height="96" rx="10" fill="#fff" stroke="#E2E8F0"/>
                  <text fontFamily="Space Grotesk,sans-serif" fontWeight="600" fontSize="14" fill="#0F172A" x={x+20} y={90}>{label}</text>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#64748B" x={x+20} y={110}>{sub}</text>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#0891B2" x={x+20} y={144}>reads from L3</text>
                </g>
              ))}

              {/* Arrow down from experience to L3 */}
              <line x1="650" y1="180" x2="650" y2="216" stroke="#0891B2" strokeWidth="1.5" markerEnd="url(#ac)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#94A3B8" x="658" y="203">built on</text>

              {/* L3 AI ORCHESTRATION */}
              <rect x="44" y="220" width="1212" height="180" rx="12" fill="#EEF2FF" stroke="#A5B4FC" strokeWidth="1.5"/>
              <text fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#4F46E5" x="62" y="244">L3 · AI LAYER - THE BRAIN. BUILD THIS THIRD, AFTER DATA AND RULES ARE SOLID.</text>

              {/* Native agents as tools - left */}
              <rect x="62" y="260" width="340" height="120" rx="10" fill="#fff" stroke="#C7D2FE"/>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="600" fontSize="14" fill="#0F172A" x="84" y="288">Agentforce</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#64748B" x="84" y="308">Salesforce built-in AI</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#4F46E5" x="84" y="328">called as a helper tool by the orchestrator</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#94A3B8" x="84" y="348">handles Salesforce-specific tasks only</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#94A3B8" x="84" y="366">vendor-maintained</text>

              {/* Central orchestrator */}
              <rect x="450" y="256" width="400" height="130" rx="10" fill="url(#orchGrad)" stroke="#818CF8" strokeWidth="1.5"/>
              <circle cx="476" cy="282" r="11" fill="#4F46E5"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="700" fill="#fff" x="476" y="286" textAnchor="middle">3</text>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="700" fontSize="16" fill="#1E1B4B" x="500" y="284">Central AI Orchestrator</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#4338CA" x="500" y="304">AI Foundry · swap AI models anytime</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#4338CA" x="500" y="322">plans · routes · reasons · governs</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#0891B2" x="500" y="340">the one brain spanning all systems</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#6366F1" x="500" y="358">MCP / A2A open standard</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#94A3B8" x="500" y="374">company-owned · not a vendor product</text>

              {/* Native agents as tools - right */}
              <rect x="898" y="260" width="340" height="120" rx="10" fill="#fff" stroke="#C7D2FE"/>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="600" fontSize="14" fill="#0F172A" x="920" y="288">Cortex Agents</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#64748B" x="920" y="308">Snowflake built-in AI</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#4F46E5" x="920" y="328">called as a helper tool by the orchestrator</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#94A3B8" x="920" y="348">handles data-layer tasks only</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#94A3B8" x="920" y="366">vendor-maintained</text>

              {/* MCP arrows between orchestrator and agents */}
              <line x1="450" y1="318" x2="404" y2="318" stroke="#4F46E5" strokeWidth="1.5" markerEnd="url(#ai)" markerStart="url(#ai)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#6366F1" x="410" y="310">MCP</text>
              <line x1="850" y1="318" x2="896" y2="318" stroke="#4F46E5" strokeWidth="1.5" markerEnd="url(#ai)" markerStart="url(#ai)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#6366F1" x="856" y="310">MCP</text>

              {/* Arrow down L3 to L2 */}
              <line x1="650" y1="400" x2="650" y2="432" stroke="#0891B2" strokeWidth="1.5" markerEnd="url(#ac)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#94A3B8" x="658" y="420">built on</text>

              {/* L2 RULES */}
              <rect x="44" y="436" width="1212" height="90" rx="11" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5"/>
              <text fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#15803D" x="62" y="460">L2 · RULES LAYER - SAME STEPS EVERY TIME. BUILD THIS SECOND.</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#16A34A" x="62" y="480">Consistent, reliable automation for known processes. No AI needed here.</text>
              {['approvals', 'validation', 'routing', 'reconciliation', 'notifications'].map((label, i) => (
                <g key={label}>
                  <rect x={62 + i * 232} y={492} width={210} height="28" rx="14" fill="#fff" stroke="#86EFAC"/>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#15803D" x={62 + i * 232 + 105} y={511} textAnchor="middle">{label}</text>
                </g>
              ))}

              {/* Arrow down L2 to L1 */}
              <line x1="650" y1="526" x2="650" y2="558" stroke="#0891B2" strokeWidth="1.5" markerEnd="url(#ac)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#94A3B8" x="658" y="546">built on</text>

              {/* L1 API INTEGRATION */}
              <rect x="44" y="562" width="1212" height="90" rx="11" fill="#FFF7ED" stroke="#FCD34D" strokeWidth="1.5"/>
              <text fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#B45309" x="62" y="586">L1 · INTEGRATION LAYER - CONNECT ALL SYSTEMS FIRST. BUILD THIS FIRST.</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#D97706" x="62" y="606">Clean, reliable connections between every platform. The foundation everything else sits on.</text>
              <rect x="62" y="616" width="200" height="28" rx="14" fill="#fff" stroke="#FCD34D"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#B45309" x="162" y="635" textAnchor="middle">MCP / A2A standard</text>
              <rect x="276" y="616" width="160" height="28" rx="14" fill="#fff" stroke="#FCD34D"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#B45309" x="356" y="635" textAnchor="middle">Boomi iPaaS</text>
              <rect x="450" y="616" width="160" height="28" rx="14" fill="#fff" stroke="#FCD34D"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#B45309" x="530" y="635" textAnchor="middle">governed REST</text>
              <rect x="624" y="616" width="180" height="28" rx="14" fill="#fff" stroke="#FCD34D"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#B45309" x="714" y="635" textAnchor="middle">event streaming</text>

              {/* Split paths down to data and systems */}
              <path d="M340 652 L340 682 L280 682 L280 706" fill="none" stroke="#0891B2" strokeWidth="1.5" markerEnd="url(#ac)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#0891B2" x="170" y="676">read and reason</text>
              <path d="M960 652 L960 682 L1020 682 L1020 706" fill="none" stroke="#4F46E5" strokeWidth="1.5" markerEnd="url(#ai)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#4F46E5" x="1030" y="676">act and write</text>

              {/* SNOWFLAKE */}
              <rect x="44" y="706" width="592" height="140" rx="12" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5"/>
              <circle cx="72" cy="736" r="13" fill="#0891B2"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="13" fontWeight="700" fill="#fff" x="72" y="740" textAnchor="middle">R</text>
              <text fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#0369A1" x="96" y="730">DATA LAYER · READ AND REASON HERE</text>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="700" fontSize="20" fill="#0C4A6E" x="96" y="758">Snowflake</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#0369A1" x="96" y="778">all data joined in one place · full audit trail</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#0369A1" x="96" y="796">updates every 5 seconds via Snowpipe Streaming</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#0891B2" x="96" y="816">the only place all systems can be read together</text>

              {/* SYSTEMS OF RECORD */}
              <rect x="664" y="706" width="592" height="140" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5"/>
              <circle cx="692" cy="736" r="13" fill="#4F46E5"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="13" fontWeight="700" fill="#fff" x="692" y="740" textAnchor="middle">W</text>
              <text fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#64748B" x="716" y="730">SOURCE SYSTEMS · WRITE AND ACT HERE</text>
              {[['Salesforce', 680], ['NetSuite', 820], ['Gong', 950], ['HCM', 1060]].map(([name, x]) => (
                <g key={name}>
                  <rect x={x} y="748" width={name === 'Salesforce' ? 130 : name === 'NetSuite' ? 120 : 95} height="32" rx="8" fill="#fff" stroke="#E2E8F0"/>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#475569" x={x + (name === 'Salesforce' ? 65 : name === 'NetSuite' ? 60 : 47)} y="769" textAnchor="middle">{name}</text>
                </g>
              ))}
              <rect x="680" y="792" width="240" height="32" rx="8" fill="#FFFBEB" stroke="#FCD34D"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#B45309" x="800" y="813" textAnchor="middle">SAP · Joule (restricted)</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#D97706" x="934" y="813">data feed only, no direct AI access</text>

              {/* Replication arrow */}
              <line x1="662" y1="740" x2="638" y2="740" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#am)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#64748B" x="538" y="732">sync · CDC</text>

              {/* GOVERNANCE FOUNDATION */}
              <rect x="44" y="882" width="1212" height="118" rx="12" fill="#F5F3FF" stroke="#C4B5FD" strokeWidth="1.5"/>
              <text fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="2" fill="#7C3AED" x="62" y="906">GOVERNANCE AND RESPONSIBLE AI: RUNS UNDER EVERY LAYER, NOT AN AFTERTHOUGHT</text>
              {[
                [62,  'AI Council review', 180],
                [258, 'data lineage · Purview', 200],
                [474, 'approved tools + full audit', 220],
                [710, 'monitors for wrong answers', 235],
                [961, 'risk-based autonomy levels', 230],
              ].map(([x, label, w]) => (
                <g key={label}>
                  <rect x={x} y="918" width={w} height="34" rx="17" fill="#fff" stroke="#C4B5FD"/>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#6D28D9" x={x + w/2} y="940" textAnchor="middle">{label}</text>
                </g>
              ))}
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#7C3AED" x="62" y="972">Every agent action is logged. Every decision is replayable. Autonomy is earned by risk tier.</text>
            </svg>

            {/* Legend */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--text-secondary)' }}>
              {[['#0891B2', 'data flow / read path'], ['#4F46E5', 'MCP / A2A (AI tool connections) / write path'], ['#D97706', 'vendor restriction (SAP blocked from direct AI access)'], ['#15803D', 'rules layer (no AI)']].map(([color, label]) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '3px', background: color, display: 'inline-block', flexShrink: 0 }}/>
                  {label}
                </span>
              ))}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#4F46E5', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: '700', flexShrink: 0 }}>3</span>
                build order number: L1 first (integration), L2 second (rules), L3 third (AI), L4 last (experience)
              </span>
            </div>
          </div>
        </section>
      )}

      {/* DESIGN PRINCIPLES TAB */}
      {activeTab === 'principles' && (
        <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '32px 28px 80px' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginBottom: '12px' }}>Core design principles</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.015em', maxWidth: '26ch', marginBottom: '16px', color: 'var(--text-primary)' }}>Six decisions that determine whether this works.</h2>
            <p style={{ maxWidth: '68ch', color: 'var(--text-secondary)', lineHeight: '1.7' }}>These are not just guidelines. They are the key decisions that hold the whole architecture together. Get them wrong and you end up with AI tools that contradict each other, cannot be audited, and lock you into a vendor you cannot leave.</p>
          </div>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {[
              {
                num: '01',
                color: '#0891B2',
                bg: 'rgba(8,145,178,0.12)',
                title: 'The AI brain must be neutral and company-owned.',
                detail: "A vendor's own AI is great inside that vendor's product but poor at working across multiple systems. Salesforce's Agentforce will always be a great Salesforce tool, but a poor cross-system brain. The layer that plans, reasons, and remembers across all your tools must never be owned by any one vendor. Build it on AI Foundry or something similar so you can swap the AI model out at any time and keep control.",
                tag: 'Architecture principle',
              },
              {
                num: '02',
                color: 'var(--accent-bright)',
                bg: 'var(--accent-subtle)',
                title: "Use each platform's built-in AI as a helper, not as the brain.",
                detail: "Native vendor AI tools like Agentforce, Cortex, and Joule are called as helpers by your central orchestrator. This means each vendor maintains their own piece while you own the intelligence at the top. The rule is: check if the vendor already does it well before you build something custom. If they do, call their tool. Do not build your entire strategy inside one vendor's AI platform.",
                tag: 'Build vs buy vs embed',
              },
              {
                num: '03',
                color: '#D97706',
                bg: 'rgba(245,158,11,0.10)',
                title: 'SAP is a special case. Treat it as a data feed only.',
                detail: "SAP's April 2026 policy explicitly blocks any external AI from calling SAP's APIs directly. This includes Microsoft Copilot and any custom AI agent. Nothing outside SAP's own Joule tool can reach live SAP data. The right approach is to keep SAP feeding data into Snowflake and let AI agents work from that copy. Do not plan any AI workflow that needs to call SAP live.",
                tag: 'Vendor restriction',
              },
              {
                num: '04',
                color: '#0891B2',
                bg: 'rgba(8,145,178,0.12)',
                title: 'Read from Snowflake. Write to the source system.',
                detail: "Snowflake is the only place all your systems are joined together in one view. No single system alone can answer cross-functional questions like why margin dropped or which accounts are at renewal risk. AI agents should read from Snowflake to think and reason. But when an agent takes action, like approving an invoice or updating a deal stage, that write goes directly to the right source system: SAP, NetSuite, or Salesforce.",
                tag: 'Data architecture rule',
              },
              {
                num: '05',
                color: '#7C3AED',
                bg: 'rgba(124,58,237,0.10)',
                title: 'Governance must be built in, not added later.',
                detail: "AI failures are different from software failures. An AI agent can give a confident, well-formatted answer that is simply wrong for the situation. No error is thrown and nothing shows up in standard logs. You need monitoring that catches wrong answers, a clear list of what each agent is allowed to access, full logs of every decision, and different levels of autonomy depending on how risky the task is. An AI Council should review what gets built before it ships.",
                tag: 'Governance requirement',
              },
              {
                num: '06',
                color: 'var(--accent-bright)',
                bg: 'var(--accent-subtle)',
                title: 'Moving to Microsoft does not remove vendor lock-in. Choose your trade deliberately.',
                detail: "Switching to Microsoft as your AI platform does not mean you escape vendor dependency. You are just trading many small dependencies for one large one. Microsoft has just as much pricing power as Salesforce. The question is which lock-in is easier to leave. If you build on AI Foundry with open standards like MCP and A2A, you can swap the AI model or move platforms. If you build inside Copilot Studio, you are inside Microsoft's closed surface. Use Copilot Studio for everyday M365 tasks. Use AI Foundry for anything that crosses systems.",
                tag: 'Strategic trade-off',
              },
            ].map(({ num, color, bg, title, detail, tag }) => (
              <div key={num} className="principle-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', fontWeight: '700', color: '#fff', background: color, width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{num}</span>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color, background: bg, padding: '3px 9px', borderRadius: '100px', display: 'inline-block', marginBottom: '8px' }}>{tag}</div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: '16px', lineHeight: '1.4', color: 'var(--text-primary)' }}>{title}</h3>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.75' }}>{detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PLATFORM STRATEGY TAB */}
      {activeTab === 'platforms' && (
        <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '32px 28px 80px' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginBottom: '12px' }}>Platform overview</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.015em', marginBottom: '16px', color: 'var(--text-primary)' }}>Know what you already own before you build anything new.</h2>
            <p style={{ maxWidth: '68ch', color: 'var(--text-secondary)', lineHeight: '1.7' }}>The AI landscape moved fast. Before writing a single custom agent, check what each platform already offers. Most common use cases are already covered and maintained by the vendor. The decision rule: use the built-in tool first, buy a third-party solution second, build from scratch last.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                platform: 'Salesforce',
                agent: 'Agentforce',
                statusLabel: 'Open platform',
                color: '#0891B2',
                border: 'rgba(8,145,178,0.28)',
                bg: 'rgba(8,145,178,0.07)',
                role: 'CRM · GTM · Revenue',
                native: 'Salesforce has a full AI agent platform with its own reasoning engine. It opens up all of Salesforce through APIs, and agents can work from Slack, other AI tools, or external systems using the MCP standard.',
                orchestratorRole: 'Called as a helper tool by the central AI orchestrator. It handles Salesforce-specific tasks like updating opportunity stages, pulling account data, and sending outreach. It does not own the intelligence across systems.',
                constraint: null,
              },
              {
                platform: 'Snowflake',
                agent: 'Cortex Agents',
                statusLabel: 'MCP supported',
                color: '#0891B2',
                border: 'rgba(8,145,178,0.28)',
                bg: 'rgba(8,145,178,0.07)',
                role: 'Data layer · AI memory · Audit log',
                native: 'Cortex Agents can build data agents that plan tasks, use tools, and respond across structured and unstructured data. Snowflake MCP Server connects to Anthropic, Agentforce, UiPath, and Azure AI Foundry.',
                orchestratorRole: 'The one place where all your systems are joined together for AI to read from. Snowflake also stores AI memory and logs every decision. Snowpipe Streaming keeps data fresh within 5 seconds from other systems.',
                constraint: null,
              },
              {
                platform: 'SAP',
                agent: 'Joule',
                statusLabel: 'Restricted since April 2026',
                color: '#D97706',
                border: 'rgba(245,158,11,0.30)',
                bg: 'rgba(245,158,11,0.07)',
                role: 'Finance ERP · Procurement · HR',
                native: 'SAP Joule is the only permitted AI entry point for SAP data as of April 2026. External AI tools are explicitly blocked from calling SAP APIs on their own.',
                orchestratorRole: 'SAP sends data to Snowflake on a regular schedule. Any AI agent working with SAP financial data reads from that Snowflake copy, not from SAP directly. Joule handles tasks that must happen inside SAP itself.',
                constraint: 'Only 3% of SAP customers use Joule in production today. Most SAP customers who use AI use Microsoft Copilot instead, but Copilot also cannot call SAP APIs under the new policy. Do not plan any live AI workflow that goes through SAP.',
              },
              {
                platform: 'Microsoft',
                agent: 'AI Foundry + Copilot Studio',
                statusLabel: 'Use AI Foundry for agents',
                color: 'var(--accent-bright)',
                border: 'var(--accent-border)',
                bg: 'var(--accent-subtle)',
                role: 'Orchestration · M365 · Azure',
                native: 'AI Foundry is the recommended platform for the central AI orchestrator. It supports swappable AI models and open standards like MCP and A2A. Copilot Studio is for business users working in Teams, Outlook, and Excel. Power Automate handles simple workflow automation.',
                orchestratorRole: 'AI Foundry is where enterprise-grade cross-system agents live. Copilot Studio is how Finance, GTM, and HR teams access the intelligence through their everyday tools. Do not build cross-system agents inside Copilot Studio. It is a user interface, not an AI platform.',
                constraint: null,
              },
              {
                platform: 'NetSuite',
                agent: 'SuiteAnalytics + REST',
                statusLabel: 'Open via REST',
                color: '#059669',
                border: 'rgba(5,150,105,0.30)',
                bg: 'rgba(5,150,105,0.07)',
                role: 'Mid-market ERP · Finance · Procurement',
                native: 'NetSuite has full REST APIs and SuiteQL. Unlike SAP, there are no restrictions on external AI calling NetSuite directly. SuiteAnalytics feeds Snowflake for cross-system reasoning.',
                orchestratorRole: 'The central orchestrator can read from and write to NetSuite directly. Journal entries, purchase orders, and payment runs can all be triggered by AI via MCP-connected tools. Also feeds Snowflake for analysis.',
                constraint: null,
              },
              {
                platform: 'Gong',
                agent: 'Gong AI + API',
                statusLabel: 'Open via API',
                color: '#D97706',
                border: 'rgba(245,158,11,0.30)',
                bg: 'rgba(245,158,11,0.07)',
                role: 'Revenue intelligence · Sales signals',
                native: 'Gong has full APIs for call recordings, deal insights, and engagement signals. Gong AI offers in-platform coaching and deal risk scoring. Data syncs to Snowflake for blending with other sources.',
                orchestratorRole: 'Gong data in Snowflake makes it possible to score deals using both pipeline data from Salesforce and conversation signals from Gong. Neither system alone has the full picture. Snowflake is where they come together.',
                constraint: null,
              },
            ].map(({ platform, agent, statusLabel, color, border, bg, role, native, orchestratorRole, constraint }) => (
              <div key={platform} style={{ border: `1px solid ${border}`, borderRadius: '14px', padding: '24px', background: bg }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ flex: '0 0 auto' }}>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '20px', color: 'var(--text-primary)', marginBottom: '4px' }}>{platform}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color }}>native AI: {agent}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginLeft: 'auto' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '100px', background: 'var(--bg-surface)', border: `1px solid ${border}`, color }}>{statusLabel}</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '100px', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', color: 'var(--text-muted)' }}>{role}</span>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>Built-in AI capability</div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7' }}>{native}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>Role in the architecture</div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7' }}>{orchestratorRole}</p>
                  </div>
                  {constraint && (
                    <div style={{ gridColumn: '1 / -1', background: 'var(--amber-subtle)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '8px', padding: '12px 16px' }}>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '6px' }}>Known restriction</div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7' }}>{constraint}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ROADMAP TAB */}
      {activeTab === 'roadmap' && (
        <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '32px 28px 80px' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginBottom: '12px' }}>Implementation roadmap</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.015em', marginBottom: '16px', color: 'var(--text-primary)' }}>The order you do things matters as much as what you build.</h2>
            <p style={{ maxWidth: '68ch', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Do not start with the most exciting use cases. Start with the boring, high-volume, low-risk ones. These are the best early bets because they are forgiving when things go wrong, and they generate the evidence you need to fund the next phase.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                phase: '01',
                label: 'Foundation',
                period: '0 to 6 months',
                color: '#0891B2',
                border: 'rgba(8,145,178,0.28)',
                bg: 'rgba(8,145,178,0.07)',
                headline: 'Not glamorous, but required.',
                objective: 'Connect the data across systems, set up the governance process for AI agents, and launch low-risk, high-volume pilots. The goal is to generate real evidence of cost savings and time saved to fund the next phase.',
                workstreams: [
                  { fn: 'Finance', items: ['Connect SAP and NetSuite to Snowflake with near-real-time updates (under 1 minute lag)', 'Pilot: automate invoice coding for the routine 80% of invoices that need no human judgment', 'Create an AI Council review lane specifically for Finance and Business Systems agents'] },
                  { fn: 'GTM', items: ['Connect Gong to Snowflake so sales conversation data joins the broader data fabric', 'Pilot: lead scoring using Salesforce and Snowflake data together', 'Run a Salesforce Agentforce pilot for use cases fully inside Salesforce'] },
                  { fn: 'HR', items: ['Connect HR system to Snowflake so headcount data joins financial planning data', 'Pilot: onboarding FAQ chatbot for high-volume, low-stakes questions', 'Build a workforce cost model baseline in Snowflake'] },
                ],
                avoid: 'Do not start with autonomous financial close, AI-driven forecasting, or any agent that writes to SAP in this phase. The data foundation is not proven yet. A confident wrong answer from a well-built agent erodes trust faster than a slow manual process.',
              },
              {
                phase: '02',
                label: 'Scale',
                period: '6 to 18 months',
                color: 'var(--accent-bright)',
                border: 'var(--accent-border)',
                bg: 'var(--accent-subtle)',
                headline: 'The platform starts to pay back.',
                objective: 'Embed AI into the tools people already use every day. Stand up a real AI Center of Excellence. Ship the first cross-system agents that the central orchestrator owns and runs.',
                workstreams: [
                  { fn: 'Finance', items: ['Continuous reconciliation agent that only flags exceptions for human review', 'FP&A forecasting assistant grounded in Snowflake cross-system data', 'Roll out M365 Copilot for Finance knowledge workers in Excel and Teams'] },
                  { fn: 'GTM', items: ['Deal risk scoring that blends Salesforce pipeline data with Gong conversation signals, both in Snowflake', 'Agentforce called as a tool by the central orchestrator for account actions', 'Copilot for Sales in Outlook and Teams so intelligence travels with the rep'] },
                  { fn: 'HR', items: ['Workforce planning assistant combining headcount, fully-loaded cost, and sales capacity in one view', 'Attrition risk scoring model built in Snowflake', 'HR manager assistant for performance and compensation workflows'] },
                ],
                avoid: null,
              },
              {
                phase: '03',
                label: 'Transform',
                period: '18 to 36 months',
                color: '#7C3AED',
                border: 'rgba(124,58,237,0.28)',
                bg: 'rgba(124,58,237,0.07)',
                headline: 'Where the payoff shows up.',
                objective: 'Largely autonomous operations where humans only review genuine exceptions. AI is inseparable from Finance, GTM, HR, and Legal workflows at this point.',
                workstreams: [
                  { fn: 'Finance', items: ['Autonomous financial close with AI handling journal entries, reconciliation, and exception routing', 'Autonomous AP and AR with human escalation only when policy requires it', 'Legal contract management plugged into the governance and data fabric'] },
                  { fn: 'GTM', items: ['Agentic account management that proactively sequences next actions across the account team', 'Revenue forecasting fully model-driven using blended cross-system signals', 'A2A protocol enabling Agentforce and Cortex Agents to coordinate directly'] },
                  { fn: 'HR', items: ['Predictive workforce planning integrated with the financial model as a single process, not a side project', 'Skills-based internal talent matching agent', 'Fully automated onboarding and offboarding across HR and IT systems'] },
                ],
                avoid: null,
              },
            ].map(({ phase, label, period, color, border, bg, headline, objective, workstreams, avoid }) => (
              <div key={phase} className="phase-card" style={{ border: `1px solid ${border}`, borderRadius: '16px', padding: '28px', background: bg }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: '700', fontSize: '14px', color: '#fff' }}>{phase}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '22px', color: 'var(--text-primary)' }}>{label}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color, marginTop: '2px' }}>{period}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '14px', color: 'var(--text-muted)' }}>{headline}</div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.75', marginBottom: '24px', maxWidth: '80ch' }}>{objective}</p>
                <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: avoid ? '20px' : '0' }}>
                  {workstreams.map(({ fn, items }) => (
                    <div key={fn} style={{ background: 'var(--bg-surface)', border: `1px solid ${border}`, borderRadius: '10px', padding: '16px' }}>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color, marginBottom: '12px', fontWeight: '700' }}>{fn}</div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {items.map((item, i) => (
                          <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <ChevronRight size={12} color={color} style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.6' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {avoid && (
                  <div style={{ background: 'var(--amber-subtle)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '8px', padding: '14px 18px' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--amber)', marginRight: '8px' }}>Avoid in this phase:</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7' }}>{avoid}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 90-day action box */}
          <div style={{ marginTop: '32px', background: 'var(--bg-surface)', border: '1px solid var(--accent-border)', borderRadius: '16px', padding: '32px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginBottom: '12px' }}>First 90 days: what to do before anything is built</div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: '20px', marginBottom: '20px', color: 'var(--text-primary)' }}>The concrete first moves for the Enterprise AI team.</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {[
                { weeks: 'Weeks 1 to 3', title: 'Scoped assessment', detail: 'Run an AI readiness check focused on Business Systems only, not the whole enterprise. Answer four questions: Is the data clean enough per domain? Does the AI Council have a lane for Business Systems requests? Do we have any way to monitor AI for wrong answers? Or is every AI project a one-off with no shared standards?' },
                { weeks: 'Weeks 4 to 6', title: 'Get the key policies approved', detail: 'Write down and get sign-off on the build vs buy vs embed decision rule and the MCP-based architecture approach. This stops the same debate from happening on every new use case. Also get the SAP restriction documented and escalated to the VP now, not after a team builds something that depends on live SAP data.' },
                { weeks: 'Weeks 7 to 12', title: 'Three pilots, one per function', detail: 'Ship one small win in Finance, one in GTM, one in HR. Measure the impact in concrete terms: cost per transaction, time saved, hours returned to higher-value work. These three pilots also test the embedded AI lead model in each function before scaling it.' },
              ].map(({ weeks, title, detail }) => (
                <div key={weeks} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '10px', padding: '18px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--accent-bright)', marginBottom: '6px', fontWeight: '700' }}>{weeks}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: '15px', marginBottom: '8px', color: 'var(--text-primary)' }}>{title}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.7' }}>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OVERVIEW SECTION */}
      <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 28px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', borderTop: '1px solid var(--border-subtle)', paddingTop: '48px' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent-bright)', marginBottom: '14px' }}>How it all fits together</div>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,30px)', letterSpacing: '-.015em', marginBottom: '18px', lineHeight: '1.2', color: 'var(--text-primary)' }}>One brain, many systems, and a solid foundation underneath it all.</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '14px', fontSize: '15px' }}>
              A request from Finance, GTM, or HR lands on a <strong style={{ color: 'var(--text-primary)' }}>single central AI brain that your company owns.</strong> It does not try to replace what each platform already does well. Instead it calls Salesforce AI and Snowflake AI as helper tools using an open standard, so the intelligence spans all systems rather than being stuck inside one vendor.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '14px', fontSize: '15px' }}>
              The AI brain <strong style={{ color: 'var(--text-primary)' }}>reads from Snowflake</strong>, the one place all your systems are joined, and <strong style={{ color: 'var(--text-primary)' }}>writes actions back to the source systems</strong> where the authoritative records live. SAP is the deliberate exception. Its platform blocks external AI, so it only connects through the data layer as a feed, never as a live target.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
              Governance runs <strong style={{ color: 'var(--text-primary)' }}>under every layer</strong>. The AI Council reviews what ships, every decision is logged and replayable, and autonomy levels are set based on how risky the task is. That is what makes this defensible to an auditor, not just impressive in a demo.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'How to measure success', value: 'Hours returned to judgment work, not the number of agents deployed', color: '#0891B2', bg: 'rgba(8,145,178,0.08)' },
              { label: 'Biggest real risk', value: 'Data quality and change management, not the AI technology itself', color: '#D97706', bg: 'var(--amber-subtle)' },
              { label: 'Operating model', value: 'Federated: one central platform team plus one embedded AI lead per function', color: 'var(--accent-bright)', bg: 'var(--accent-subtle)' },
              { label: 'Honest bottom line', value: 'Snowflake is your competitive advantage. The AI orchestrator is replaceable as long as you use open standards like MCP and A2A as the connection layer.', color: '#059669', bg: 'rgba(5,150,105,0.08)' },
            ].map(({ label, value, color, bg }) => (
              <div key={label} style={{ background: bg, border: '1px solid var(--border-default)', borderRadius: '10px', padding: '16px 20px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color, marginBottom: '6px', fontWeight: '700' }}>{label}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.5', fontWeight: '500' }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 28px 60px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={14} color="#fff" />
            </div>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)' }}>AgentOpsLab <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>by Vinay</span></span>
          </div>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', color: 'var(--text-muted)' }}>Enterprise AI strategy reference. Platform names used for illustration only.</p>
          <a href="/access" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
            Get Access <ArrowRight size={13} />
          </a>
        </div>
      </footer>
    </div>
  );
}
