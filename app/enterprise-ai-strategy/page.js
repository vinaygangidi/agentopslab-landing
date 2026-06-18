'use client';

import { useState } from 'react';
import { Zap, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

export default function EnterpriseAIStrategy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('architecture');

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0A0D13', color: '#E7ECF3', minHeight: '100vh', overflowX: 'hidden' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0A0D13; overflow-x: hidden; }
        :root {
          --bg: #0A0D13; --panel: #10141D; --node: #151B26; --node-2: #1A2230;
          --line: rgba(255,255,255,.10); --line-2: rgba(255,255,255,.18);
          --txt: #E7ECF3; --txt-2: #9AA6B6; --txt-3: #5E6878;
          --cyan: #36D6C3; --indigo: #7B74F2; --violet: #B570F0; --amber: #E2A23B;
        }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .space { font-family: 'Space Grotesk', sans-serif; }
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: #fff !important; }
        .tab-btn { transition: all 0.2s; cursor: pointer; border: none; }
        .tab-btn:hover { border-color: rgba(54,214,195,0.4) !important; color: #fff !important; }
        .principle-card { transition: all 0.3s; }
        .principle-card:hover { transform: translateY(-3px); border-color: rgba(54,214,195,0.35) !important; }
        .phase-card { transition: all 0.3s; }
        .phase-card:hover { transform: translateY(-3px); }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 36px !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10,13,19,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 28px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={16} color="#fff" />
            </div>
            <span style={{ fontWeight: '800', fontSize: '16px', color: '#fff', fontFamily: 'Space Grotesk, sans-serif' }}>AgentOpsLab</span>
          </a>
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="/solutions" className="nav-link" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Solutions</a>
            <a href="/enterprise-ai-strategy" className="nav-link" style={{ fontSize: '14px', color: '#36D6C3', textDecoration: 'none', fontWeight: '600' }}>Enterprise AI Strategy</a>
            <a href="/finance-map" className="nav-link" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Finance Map</a>
            <a href="/developers" className="nav-link" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>Developers</a>
            <a href="/access" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 20px rgba(99,102,241,0.3)' }}>
              Get Access <ArrowRight size={13} />
            </a>
          </div>
          <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px', color: '#fff', cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center' }}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <div style={{ padding: '16px 0', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[['Solutions', '/solutions'], ['Enterprise AI Strategy', '/enterprise-ai-strategy'], ['Finance Map', '/finance-map'], ['Developers', '/developers']].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{ fontSize: '16px', color: '#94a3b8', textDecoration: 'none', fontWeight: '500' }}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ padding: '80px 28px 0', maxWidth: '1300px', margin: '0 auto', background: 'radial-gradient(900px 500px at 80% -10%, rgba(123,116,242,.10), transparent 60%), radial-gradient(700px 500px at 0% 0%, rgba(54,214,195,.06), transparent 55%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#36D6C3', border: '1px solid rgba(54,214,195,.3)', background: 'rgba(54,214,195,.06)', padding: '6px 14px', borderRadius: '100px', marginBottom: '28px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#36D6C3', boxShadow: '0 0 10px #36D6C3', display: 'inline-block' }} />
          Enterprise AI · Solution Architecture
        </div>
        <h1 className="hero-title" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', fontSize: 'clamp(36px,5vw,60px)', lineHeight: '1.04', letterSpacing: '-.02em', maxWidth: '22ch', marginBottom: '24px' }}>
          Intelligence on a foundation<br />
          <span style={{ background: 'linear-gradient(92deg, #36D6C3, #7B74F2)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>we trust and own.</span>
        </h1>
        <p style={{ maxWidth: '68ch', color: '#9AA6B6', fontSize: 'clamp(16px,1.8vw,19px)', lineHeight: '1.7', marginBottom: '36px' }}>
          One neutral orchestration layer serves Finance, GTM, HR and Legal — reasoning over governed data, calling native platform agents as tools, and committing actions to the systems of record. Three layers, in order: <strong style={{ color: '#E7ECF3' }}>integration, automation, then AI.</strong>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', borderTop: '1px solid rgba(255,255,255,.10)', marginBottom: '60px' }}>
          {[['Serves', 'Finance · GTM · HR · Legal'], ['Spine', 'API → rules → AI'], ['Seam', 'MCP / A2A (open)'], ['Substrate', 'Snowflake (governed)'], ['Orchestrator', 'Neutral — you own it']].map(([k, v]) => (
            <div key={k} style={{ padding: '16px 28px 16px 0', marginRight: '28px', borderRight: '1px solid rgba(255,255,255,.10)' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10.5px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#5E6878' }}>{k}</div>
              <div style={{ fontWeight: '600', fontSize: '14px', marginTop: '4px', color: '#E7ECF3' }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TABS */}
      <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 28px 24px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[['architecture', 'Architecture Diagram'], ['principles', 'Design Principles'], ['platforms', 'Platform Strategy'], ['roadmap', 'Phased Roadmap']].map(([key, label]) => (
            <button key={key} className="tab-btn" onClick={() => setActiveTab(key)} style={{ padding: '9px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', background: activeTab === key ? 'rgba(54,214,195,0.1)' : 'rgba(255,255,255,0.04)', border: activeTab === key ? '1px solid rgba(54,214,195,0.45)' : '1px solid rgba(255,255,255,0.1)', color: activeTab === key ? '#36D6C3' : '#9AA6B6' }}>
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE DIAGRAM TAB */}
      {activeTab === 'architecture' && (
        <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '8px 28px 64px' }}>
          <div style={{ background: '#10141D', border: '1px solid rgba(255,255,255,.10)', borderRadius: '14px', padding: '20px', boxShadow: '0 40px 80px -50px rgba(0,0,0,.9), inset 0 1px 0 rgba(255,255,255,.04)' }}>
            <svg viewBox="0 0 1300 980" style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="Enterprise AI solution architecture">
              <defs>
                <marker id="ac" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#36D6C3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></marker>
                <marker id="ai" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#7B74F2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></marker>
                <marker id="am" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#6E7E92" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker>
                <linearGradient id="orchGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#36D6C3" stopOpacity="0.15"/><stop offset="100%" stopColor="#7B74F2" stopOpacity="0.15"/></linearGradient>
              </defs>

              {/* EXPERIENCE ROW */}
              <text fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" textAnchor="start" fill="#5E6878" x="44" y="76" textTransform="uppercase">EXPERIENCE · HOW EACH FUNCTION CONSUMES IT</text>
              {[
                { x: 44,  label: 'M365 Copilot',      sub: 'Teams · Outlook · Excel', num: '1' },
                { x: 348, label: 'Power BI',           sub: 'Fabric semantic layer',   num: null },
                { x: 652, label: 'Embedded Copilots',  sub: 'Inside SFDC · NetSuite',  num: null },
                { x: 956, label: 'Custom Apps',        sub: 'Power Platform · APIs',   num: null },
              ].map(({ x, label, sub, num }) => (
                <g key={x}>
                  <rect x={x} y="88" width="288" height="56" rx="9" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
                  {num && <circle cx={x+24} cy={112} r="9" fill="#36D6C3"/>}
                  {num && <text fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="600" fill="#06201D" x={x+24} y={116} textAnchor="middle">{num}</text>}
                  <text fontFamily="Space Grotesk,sans-serif" fontWeight="600" fontSize="15" fill="#E7ECF3" x={num ? x+44 : x+20} y={112}>{label}</text>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x={num ? x+44 : x+20} y={130}>{sub}</text>
                </g>
              ))}

              <line x1="650" y1="144" x2="650" y2="192" stroke="#36D6C3" strokeWidth="1.5" markerEnd="url(#ac)"/>

              {/* L3 AI ORCHESTRATION */}
              <rect x="44" y="192" width="1212" height="184" rx="12" fill="rgba(54,214,195,.04)" stroke="rgba(54,214,195,.35)" strokeDasharray="5 5"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#36D6C3" x="62" y="216">L3 · AI ORCHESTRATION &amp; AGENTS — NEUTRAL, YOU OWN THIS</text>

              {/* Neutral Orchestrator */}
              <rect x="468" y="238" width="364" height="114" rx="10" fill="url(#orchGrad)" stroke="rgba(54,214,195,.55)" strokeWidth="1.5"/>
              <circle cx="492" cy="264" r="11" fill="#36D6C3"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="600" fill="#06201D" x="492" y="268" textAnchor="middle">2</text>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="700" fontSize="17" fill="#E7ECF3" x="514" y="266">Neutral Orchestrator</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="514" y="284">AI Foundry · swappable models</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="514" y="300">plans · routes · reasons · governs</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#36D6C3" x="514" y="318">the brain that spans every system</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#7B74F2" x="514" y="336">MCP / A2A open seam</text>

              {/* Native agents as tools */}
              <rect x="62" y="252" width="360" height="80" rx="10" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="600" fontSize="15" fill="#E7ECF3" x="82" y="278">Agentforce</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="82" y="296">Salesforce native agent</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#7B74F2" x="82" y="314">→ called as a tool by orchestrator</text>

              <rect x="878" y="252" width="360" height="80" rx="10" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="600" fontSize="15" fill="#E7ECF3" x="898" y="278">Cortex Agents</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="898" y="296">Snowflake native agent</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#7B74F2" x="898" y="314">→ called as a tool by orchestrator</text>

              <line x1="468" y1="292" x2="424" y2="292" stroke="#7B74F2" strokeWidth="1.5" markerEnd="url(#ai)" markerStart="url(#ai)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#9C96F5" x="432" y="284">MCP</text>
              <line x1="832" y1="292" x2="876" y2="292" stroke="#7B74F2" strokeWidth="1.5" markerEnd="url(#ai)" markerStart="url(#ai)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#9C96F5" x="838" y="284">MCP</text>

              <line x1="650" y1="376" x2="650" y2="408" stroke="#36D6C3" strokeWidth="1.5" markerEnd="url(#ac)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#9AA6B6" x="658" y="396">rests on ↓</text>

              {/* L2 RULES */}
              <rect x="44" y="408" width="1212" height="80" rx="11" fill="rgba(123,116,242,.06)" stroke="rgba(123,116,242,.4)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#9C96F5" x="62" y="434">L2 · DETERMINISTIC AUTOMATION</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="62" y="454">the same way, every time — no AI spent where a rule is better</text>
              {['approvals', 'validation', 'routing', 'reconciliation'].map((label, i) => (
                <g key={label}>
                  <rect x={560 + i * 162} y={428} width={label === 'reconciliation' ? 170 : 150} height="30" rx="15" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x={560 + i * 162 + (label === 'reconciliation' ? 85 : 75)} y={448} textAnchor="middle">{label}</text>
                </g>
              ))}

              <line x1="650" y1="488" x2="650" y2="520" stroke="#36D6C3" strokeWidth="1.5" markerEnd="url(#ac)"/>

              {/* L1 API */}
              <rect x="44" y="520" width="1212" height="80" rx="11" fill="rgba(110,126,146,.10)" stroke="rgba(110,126,146,.5)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#9FB0C2" x="62" y="546">L1 · API-DRIVEN INTEGRATION — THE CONNECTIVE TISSUE</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="62" y="566">clean, governed interfaces — never brittle point-to-point</text>
              <rect x="560" y="540" width="180" height="30" rx="15" fill="#151B26" stroke="rgba(54,214,195,.4)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#36D6C3" x="650" y="560" textAnchor="middle">MCP / A2A seam</text>
              <rect x="752" y="540" width="150" height="30" rx="15" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="827" y="560" textAnchor="middle">Boomi iPaaS</text>
              <rect x="914" y="540" width="170" height="30" rx="15" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="999" y="560" textAnchor="middle">governed REST</text>

              {/* Split paths */}
              <path d="M360 600 L360 632 L300 632 L300 656" fill="none" stroke="#36D6C3" strokeWidth="1.5" markerEnd="url(#ac)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#36D6C3" x="196" y="628">3 · reason</text>
              <path d="M940 600 L940 632 L1000 632 L1000 656" fill="none" stroke="#36D6C3" strokeWidth="1.5" markerEnd="url(#ac)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#36D6C3" x="1010" y="628">4 · act</text>

              {/* SNOWFLAKE */}
              <rect x="44" y="656" width="592" height="128" rx="12" fill="rgba(54,214,195,.06)" stroke="rgba(54,214,195,.4)"/>
              <circle cx="70" cy="684" r="11" fill="#36D6C3"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="600" fill="#06201D" x="70" y="688" textAnchor="middle">3</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#36D6C3" x="92" y="682">DATA SUBSTRATE · REASON HERE</text>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="700" fontSize="18" fill="#E7ECF3" x="92" y="710">Snowflake</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="92" y="730">governed data · agent memory · full audit</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="92" y="750">5-second freshness via Snowpipe Streaming</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#36D6C3" x="92" y="770">the one place every system is joined</text>

              {/* SYSTEMS OF RECORD */}
              <rect x="664" y="656" width="592" height="128" rx="12" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
              <circle cx="690" cy="684" r="11" fill="#36D6C3"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="600" fill="#06201D" x="690" y="688" textAnchor="middle">4</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#5E6878" x="712" y="682">SYSTEMS OF RECORD · ACT HERE</text>
              {[['Salesforce', 684], ['NetSuite', 816], ['Gong', 938], ['HCM', 1040]].map(([name, x]) => (
                <g key={name}>
                  <rect x={x} y="698" width={name === 'Salesforce' ? 120 : name === 'NetSuite' ? 110 : 90} height="30" rx="8" fill="#1A2230" stroke="rgba(255,255,255,.18)"/>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x={x + (name === 'Salesforce' ? 60 : name === 'NetSuite' ? 55 : 45)} y="718" textAnchor="middle">{name}</text>
                </g>
              ))}
              <rect x="684" y="738" width="220" height="30" rx="8" fill="rgba(226,162,59,.08)" stroke="rgba(226,162,59,.55)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#E2A23B" x="794" y="758" textAnchor="middle">SAP · Joule (walled)</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#E2A23B" x="918" y="758">data layer only — no direct agent access</text>

              {/* Replication arrow */}
              <line x1="662" y1="685" x2="638" y2="685" stroke="#6E7E92" strokeWidth="1.5" markerEnd="url(#am)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#9FB0C2" x="545" y="677">replicate · CDC</text>

              {/* GOVERNANCE FOUNDATION */}
              <rect x="44" y="820" width="1212" height="108" rx="12" fill="rgba(181,112,240,.06)" stroke="rgba(181,112,240,.3)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#C79BF3" x="62" y="844">GOVERNANCE &amp; RESPONSIBLE AI — UNDER EVERY LAYER, NOT BESIDE IT</text>
              {[
                [62,  'AI Council intake', 170],
                [248, 'Purview · lineage', 180],
                [444, 'allowlist + full audit', 200],
                [660, 'semantic-failure monitoring', 240],
                [916, 'risk-tiered autonomy', 220],
              ].map(([x, label, w]) => (
                <g key={label}>
                  <rect x={x} y="856" width={w} height="32" rx="16" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x={x + w/2} y="877" textAnchor="middle">{label}</text>
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginTop: '14px', paddingTop: '14px', borderTop: '1px dashed rgba(255,255,255,.10)', fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', color: '#9AA6B6' }}>
              {[['#36D6C3', 'flow & data'], ['#7B74F2', 'MCP / A2A (agent ↔ tool)'], ['#E2A23B', 'vendor constraint (SAP walled)']].map(([color, label]) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '3px', background: color, display: 'inline-block' }}/>
                  {label}
                </span>
              ))}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#36D6C3', display: 'inline-block' }}/>
                numbered step: ask → orchestrate → reason → act
              </span>
            </div>
          </div>
        </section>
      )}

      {/* DESIGN PRINCIPLES TAB */}
      {activeTab === 'principles' && (
        <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '32px 28px 80px' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#7B74F2', marginBottom: '12px' }}>Architect's principles</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.015em', maxWidth: '26ch', marginBottom: '16px' }}>Five decisions that determine whether this works.</h2>
            <p style={{ maxWidth: '68ch', color: '#9AA6B6', lineHeight: '1.7' }}>These aren't guidelines — they're load-bearing choices. Get them wrong and the architecture fragments into siloed agents that contradict each other, can't be audited, and lock you into a vendor you can't escape.</p>
          </div>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {[
              {
                num: '01',
                color: '#36D6C3',
                title: 'The orchestration layer must be neutral — you own it.',
                detail: 'An application vendor\'s agent is structurally best inside its own walls and structurally worst across them. Agentforce will always be a great Salesforce agent and a poor cross-system agent, by design. The orchestration, reasoning, and memory layer must never be owned by an application vendor. Build it on AI Foundry or an equivalent — swappable models, open seam (MCP/A2A), and fully under your control.',
                tag: 'Architecture principle',
              },
              {
                num: '02',
                color: '#7B74F2',
                title: 'Embed is a leaf-node choice, not the architecture.',
                detail: 'Native vendor agents (Agentforce, Cortex, Joule) are called as tools by your neutral orchestrator — not the other way around. This means you get vendor maintenance on the leaf while owning the intelligence at the top. "Embed first" means evaluate native capability first; if it covers the use case, call it as a tool. It does not mean build your strategy inside a vendor\'s agent runtime.',
                tag: 'Build / buy / embed policy',
              },
              {
                num: '03',
                color: '#E2A23B',
                title: 'SAP is the deliberate exception — treat it as a data boundary.',
                detail: "SAP's April 2026 API policy explicitly prohibits external AI systems from independently calling SAP APIs — everything must route through Joule. This means no Microsoft Copilot, no custom agent, nothing outside Joule reaches SAP's live transactional APIs. The durable pattern: SAP keeps feeding Snowflake through the extraction pipeline, and any Snowflake-grounded agent operates on replicated data. Don't plan cross-system agent workflows that require live SAP API access.",
                tag: 'Vendor constraint',
              },
              {
                num: '04',
                color: '#36D6C3',
                title: 'Reason on Snowflake, act on the systems of record.',
                detail: "Snowflake is the one place your transactional systems are joined. No single OLTP system holds a cross-system picture. Agent reasoning — 'why did margin drop', 'which accounts are at renewal risk', blending Gong + pipeline + Snowflake financials — must happen on the warehouse. But a replica is never where you commit a write. Approve an invoice, post a journal entry, change an opportunity stage — those authoritative writes go to SAP, NetSuite, or Salesforce directly.",
                tag: 'Data architecture rule',
              },
              {
                num: '05',
                color: '#B570F0',
                title: 'Governance runs under every layer — not beside it.',
                detail: 'Agent failures are quietly different from software failures. An agent can return a confident, well-formed response that is simply wrong for the situation — no error thrown, nothing in the logs to flag it. Standard ITSM monitoring won\'t catch this. Semantic-failure observability, an allowlist of what each agent can reach, full audit trails on every decision, and risk-tiered autonomy must be built in from day one. The AI Council gates what ships; autonomy is granted by risk tier, not assumed.',
                tag: 'Governance mandate',
              },
              {
                num: '06',
                color: '#9C96F5',
                title: 'Lock-in is a trade, not an escape — choose it deliberately.',
                detail: "Moving to Microsoft orchestration doesn't escape lock-in — it swaps N small vendor dependencies for one large one. Microsoft has at least as much pricing power as Salesforce. The question is which lock-in is more escapable. If you build on AI Foundry with MCP/A2A as the portability seam, you're one model-swap away from any alternative. If you build on Copilot Studio, you're inside Microsoft's proprietary surface. Treat Copilot Studio as the business-user M365 interface; put enterprise-grade cross-system agents on AI Foundry.",
                tag: 'Strategic trade-off',
              },
            ].map(({ num, color, title, detail, tag }) => (
              <div key={num} className="principle-card" style={{ background: '#10141D', border: '1px solid rgba(255,255,255,.10)', borderRadius: '14px', padding: '28px', transition: 'all 0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '22px', fontWeight: '600', color, opacity: 0.8, lineHeight: 1, flexShrink: 0 }}>{num}</span>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color, marginBottom: '6px' }}>{tag}</div>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: '16px', lineHeight: '1.4', color: '#E7ECF3' }}>{title}</h3>
                  </div>
                </div>
                <p style={{ color: '#9AA6B6', fontSize: '14px', lineHeight: '1.75' }}>{detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PLATFORM STRATEGY TAB */}
      {activeTab === 'platforms' && (
        <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '32px 28px 80px' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#7B74F2', marginBottom: '12px' }}>Platform inventory</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.015em', marginBottom: '16px' }}>Know what you already own before you build.</h2>
            <p style={{ maxWidth: '68ch', color: '#9AA6B6', lineHeight: '1.7' }}>The vendor landscape moved fast. Inventory native AI capabilities across every platform before writing a single custom agent — most use cases are already covered and vendor-maintained. The build/buy/embed decision rule: embed first, buy second, build last.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                platform: 'Salesforce',
                agent: 'Agentforce',
                status: 'open',
                statusLabel: 'Open platform',
                color: '#36D6C3',
                border: 'rgba(54,214,195,.3)',
                bg: 'rgba(54,214,195,.05)',
                role: 'CRM · GTM · Revenue lifecycle',
                native: 'Full agent platform with Atlas Reasoning Engine. Exposes entire platform through APIs and CLI — agents can act from Slack, ChatGPT, or any external system via MCP.',
                orchestratorRole: 'Called as a tool by the neutral orchestrator over MCP. Handles CRM-native actions (opportunity stage, account data, outreach). Does not own the cross-system intelligence layer.',
                constraint: null,
              },
              {
                platform: 'Snowflake',
                agent: 'Cortex Agents',
                status: 'open',
                statusLabel: 'MCP GA',
                color: '#60a5fa',
                border: 'rgba(96,165,250,.3)',
                bg: 'rgba(96,165,250,.05)',
                role: 'Data substrate · Agent memory · Audit log',
                native: 'Cortex Agents GA — builds data agents that plan tasks, use tools, and generate responses across structured and unstructured data. Snowflake MCP Server is GA and connects to Anthropic, Agentforce, UiPath, and Azure AI Foundry.',
                orchestratorRole: 'The cross-system reasoning ground — the one place SAP + Salesforce + Gong + HCM data is joined. Also the home for agent memory, runtime logs, and eval data. Snowpipe Streaming delivers 5-second freshness from latency-sensitive sources.',
                constraint: null,
              },
              {
                platform: 'SAP',
                agent: 'Joule',
                status: 'walled',
                statusLabel: 'Walled — April 2026 policy',
                color: '#E2A23B',
                border: 'rgba(226,162,59,.4)',
                bg: 'rgba(226,162,59,.05)',
                role: 'Finance ERP · P2P · R2R · HR',
                native: 'SAP Joule is the only allowed AI entry point for SAP APIs as of April 2026. External AI systems are explicitly prohibited from independently scheduling or executing SAP API calls.',
                orchestratorRole: 'SAP feeds Snowflake via the extraction pipeline. Any agent reasoning over SAP financial data operates on the Snowflake replica — not via live SAP API. Joule handles automation that must happen natively inside SAP\'s own process boundary.',
                constraint: 'Only 3% of SAP customers use Joule in production. 77% of AI-active SAP customers use Microsoft Copilot instead — but Copilot cannot call SAP APIs under the new policy either. Do not plan live cross-system agent workflows through SAP.',
              },
              {
                platform: 'Microsoft',
                agent: 'AI Foundry + Copilot Studio',
                status: 'hybrid',
                statusLabel: 'Use AI Foundry for agents',
                color: '#7B74F2',
                border: 'rgba(123,116,242,.3)',
                bg: 'rgba(123,116,242,.05)',
                role: 'Orchestration · M365 surface · Azure infra',
                native: 'AI Foundry is the recommended neutral orchestration layer — swappable models, MCP/A2A seam, portable agent definitions. Copilot Studio is the business-user, in-M365 surface (Teams, Outlook, Excel). Power Automate handles lightweight business-user automations.',
                orchestratorRole: 'AI Foundry = where enterprise-grade cross-system agents live. Copilot Studio = how Finance, GTM, HR knowledge workers surface the intelligence in their daily tools. Do not build cross-system agents inside Copilot Studio — it is a presentation layer, not an agent fabric.',
                constraint: null,
              },
              {
                platform: 'NetSuite',
                agent: 'SuiteAnalytics + REST',
                status: 'open',
                statusLabel: 'Open via REST',
                color: '#10b981',
                border: 'rgba(16,185,129,.3)',
                bg: 'rgba(16,185,129,.05)',
                role: 'Mid-market ERP · Finance · Procurement',
                native: 'NetSuite exposes full REST APIs and SuiteQL — no walled-garden restriction comparable to SAP. External orchestrators can read and write directly. SuiteAnalytics feeds Snowflake for cross-system reasoning.',
                orchestratorRole: 'Reachable live by the neutral orchestrator for read and write actions. Journal entries, PO creation, payment runs can be executed directly via MCP-connected tools. Also feeds Snowflake for analytical reasoning.',
                constraint: null,
              },
              {
                platform: 'Gong',
                agent: 'Gong AI + API',
                status: 'open',
                statusLabel: 'Open via API',
                color: '#f59e0b',
                border: 'rgba(245,158,11,.3)',
                bg: 'rgba(245,158,11,.05)',
                role: 'Revenue intelligence · GTM signal',
                native: 'Gong exposes full APIs for call data, deal insights, and engagement signals. Gong AI native provides in-platform coaching and deal risk scoring. Data replicates to Snowflake for cross-system signal blending.',
                orchestratorRole: 'Gong data in Snowflake enables blended GTM intelligence: deal risk scoring that combines pipeline stage (Salesforce) with conversation sentiment (Gong). Neither system alone holds the full picture — Snowflake is where they are joined.',
                constraint: null,
              },
            ].map(({ platform, agent, status, statusLabel, color, border, bg, role, native, orchestratorRole, constraint }) => (
              <div key={platform} style={{ background: '#10141D', border: `1px solid ${border}`, borderRadius: '14px', padding: '24px', background: bg }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ flex: '0 0 auto' }}>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', fontSize: '20px', color: '#E7ECF3', marginBottom: '4px' }}>{platform}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color }}>→ {agent}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginLeft: 'auto' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '100px', background: `${color}18`, border: `1px solid ${color}50`, color }}>{statusLabel}</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '100px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: '#9AA6B6' }}>{role}</span>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#5E6878', marginBottom: '6px' }}>Native AI capability</div>
                    <p style={{ color: '#9AA6B6', fontSize: '13px', lineHeight: '1.7' }}>{native}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#5E6878', marginBottom: '6px' }}>Role in the architecture</div>
                    <p style={{ color: '#9AA6B6', fontSize: '13px', lineHeight: '1.7' }}>{orchestratorRole}</p>
                  </div>
                  {constraint && (
                    <div style={{ gridColumn: '1 / -1', background: 'rgba(226,162,59,.07)', border: '1px solid rgba(226,162,59,.3)', borderRadius: '8px', padding: '12px 16px' }}>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#E2A23B', marginBottom: '6px' }}>Known constraint</div>
                      <p style={{ color: '#C4944A', fontSize: '13px', lineHeight: '1.7' }}>{constraint}</p>
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
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#7B74F2', marginBottom: '12px' }}>Implementation roadmap</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.015em', marginBottom: '16px' }}>The sequencing matters more than the destination.</h2>
            <p style={{ maxWidth: '68ch', color: '#9AA6B6', lineHeight: '1.7' }}>Resist the urge to let your first wins be the most ambitious ones. The highest-leverage early use cases are the boring, high-volume, low-judgment ones — precisely because they are forgiving of imperfection while engineering and governance practices are still maturing.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                phase: '01',
                label: 'Foundation',
                period: '0–6 months',
                color: '#36D6C3',
                border: 'rgba(54,214,195,.35)',
                bg: 'rgba(54,214,195,.04)',
                headline: 'Unglamorous and non-negotiable.',
                objective: 'Stand up the cross-functional data fabric, establish the governance process for Business Systems agents, and ship deliberately low-risk, high-volume pilots that generate the financial evidence to fund the next horizon.',
                workstreams: [
                  { fn: 'Finance', items: ['Snowpipe Streaming from SAP/NetSuite — sub-minute financial data in Snowflake', 'AP invoice coding pilot (touchless processing for the 80% long tail)', 'AI Council intake lane specifically for Business Systems agents'] },
                  { fn: 'GTM', items: ['Gong → Snowflake replication pipeline established', 'SDR lead scoring pilot (Salesforce + Snowflake blended signal)', 'Agentforce native pilot for CRM-bounded use cases'] },
                  { fn: 'HR', items: ['HCM → Snowflake pipeline (headcount data joins the financial fabric)', 'Onboarding FAQ chatbot (high volume, low risk, fast feedback loop)', 'Workforce cost model baseline in Snowflake'] },
                ],
                avoid: 'Do not start with autonomous close, AI-driven forecasting, or any agent that writes to SAP in horizon one. The data foundation is not proven yet — a confident wrong answer from a well-built agent erodes trust faster than a slow manual process.',
              },
              {
                phase: '02',
                label: 'Scale',
                period: '6–18 months',
                color: '#7B74F2',
                border: 'rgba(123,116,242,.35)',
                bg: 'rgba(123,116,242,.04)',
                headline: 'Platform starts compounding.',
                objective: 'Embed copilots inside the systems people already use. Stand up the AI Center of Excellence as a real organizational construct. Ship cross-system agents that the neutral orchestrator owns.',
                workstreams: [
                  { fn: 'Finance', items: ['Continuous reconciliation agent — exception-based human review only', 'FP&A forecasting copilot grounded in Snowflake cross-functional data', 'M365 Copilot rollout for Finance knowledge workers (Excel + Teams)'] },
                  { fn: 'GTM', items: ['Deal risk scoring blending Salesforce pipeline + Gong sentiment (Snowflake-grounded)', 'Agentforce called as tool by neutral orchestrator for account actions', 'Copilot for Sales in Outlook and Teams — intelligence travels with the rep'] },
                  { fn: 'HR', items: ['Workforce planning copilot — headcount + fully-loaded cost + sales capacity in one view', 'Attrition risk scoring model in Snowflake', 'Embedded HR manager copilot for performance and comp workflows'] },
                ],
                avoid: null,
              },
              {
                phase: '03',
                label: 'Transform',
                period: '18–36 months',
                color: '#B570F0',
                border: 'rgba(181,112,240,.35)',
                bg: 'rgba(181,112,240,.04)',
                headline: 'The payoff horizon.',
                objective: 'Continuous, largely autonomous operations with human review on true exceptions only. Intelligence is operationally inseparable from Finance, GTM, HR, and Legal workflows.',
                workstreams: [
                  { fn: 'Finance', items: ['Continuous autonomous close — journal entries, reconciliation, exception routing all agent-managed', 'Autonomous AP/AR with human escalation only on policy-defined exceptions', 'Legal CLM and contract intelligence plugged into the governance fabric'] },
                  { fn: 'GTM', items: ['Agentic account orchestration — system proactively sequences next-best-actions across the account team', 'Revenue forecasting fully model-driven on blended cross-system signal', 'A2A protocol enabling Agentforce ↔ Cortex Agents direct coordination'] },
                  { fn: 'HR', items: ['Predictive workforce planning integrated with the financial model — not a parallel process', 'Skills-based internal talent matching agent', 'Fully automated onboarding and offboarding orchestration across HCM + IT systems'] },
                ],
                avoid: null,
              },
            ].map(({ phase, label, period, color, border, bg, headline, objective, workstreams, avoid }) => (
              <div key={phase} className="phase-card" style={{ background: '#10141D', border: `1px solid ${border}`, borderRadius: '16px', padding: '28px', background: bg }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${color}18`, border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: '700', fontSize: '14px', color }}>{phase}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', fontSize: '22px', color: '#E7ECF3' }}>{label}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color, marginTop: '2px' }}>{period}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', fontFamily: 'Space Grotesk, sans-serif', fontStyle: 'italic', fontSize: '14px', color: '#9AA6B6' }}>{headline}</div>
                </div>
                <p style={{ color: '#9AA6B6', fontSize: '14px', lineHeight: '1.75', marginBottom: '24px', maxWidth: '80ch' }}>{objective}</p>
                <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: avoid ? '20px' : '0' }}>
                  {workstreams.map(({ fn, items }) => (
                    <div key={fn} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '16px' }}>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.14em', textTransform: 'uppercase', color, marginBottom: '12px' }}>{fn}</div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {items.map((item, i) => (
                          <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                            <ChevronRight size={12} color={color} style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span style={{ color: '#9AA6B6', fontSize: '13px', lineHeight: '1.6' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {avoid && (
                  <div style={{ background: 'rgba(226,162,59,.07)', border: '1px solid rgba(226,162,59,.3)', borderRadius: '8px', padding: '14px 18px' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#E2A23B', marginRight: '8px' }}>Avoid in this horizon —</span>
                    <span style={{ color: '#C4944A', fontSize: '13px', lineHeight: '1.7' }}>{avoid}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 90-day action box */}
          <div style={{ marginTop: '32px', background: 'linear-gradient(135deg, rgba(54,214,195,0.08), rgba(123,116,242,0.08))', border: '1px solid rgba(54,214,195,0.3)', borderRadius: '16px', padding: '32px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#36D6C3', marginBottom: '12px' }}>First 90 days · concrete next move</div>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: '20px', marginBottom: '20px' }}>What the Enterprise AI Architect does before anything else is built.</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {[
                { weeks: 'Weeks 1–3', title: 'Scoped assessment', detail: 'Run the AI maturity assessment scoped to Business Systems specifically — not enterprise-wide. Answer: is the data AI-ready per domain, does the AI Council have a Business Systems intake lane, do we have any agent observability practice, or is every pilot a one-off.' },
                { weeks: 'Weeks 4–6', title: 'Policy approval', detail: 'Get the build/buy/embed decision rule and the MCP-based architecture pattern written down and approved by the AI Council — so it is not relitigated per use case. The SAP constraint memo goes to the VP now, not after someone builds a workflow that depends on live SAP API access.' },
                { weeks: 'Weeks 7–12', title: 'Three pilots, one per function', detail: 'Ship one embed-tier win in Finance, one in GTM, one in HR. Generate financial-analysis evidence (cost per transaction, cycle time, hours returned to judgment work) while standing up the embedded-architect model in each function.' },
              ].map(({ weeks, title, detail }) => (
                <div key={weeks} style={{ background: 'rgba(10,13,19,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '18px' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#36D6C3', marginBottom: '6px' }}>{weeks}</div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: '15px', marginBottom: '8px' }}>{title}</div>
                  <p style={{ color: '#9AA6B6', fontSize: '13px', lineHeight: '1.7' }}>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OVERVIEW SECTION (always visible below tabs) */}
      <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 28px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '48px' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#7B74F2', marginBottom: '14px' }}>Architect's overview</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,30px)', letterSpacing: '-.015em', marginBottom: '18px', lineHeight: '1.2' }}>One brain, many systems — and a foundation underneath it.</h2>
            <p style={{ color: '#9AA6B6', lineHeight: '1.8', marginBottom: '14px', fontSize: '15px' }}>
              A request from Finance, GTM, or HR lands on a <strong style={{ color: '#E7ECF3' }}>single neutral orchestrator that we own.</strong> It doesn't reimplement what the platforms already do well — it calls Agentforce and Cortex as tools over an open protocol seam, so the intelligence layer spans systems instead of fragmenting into one silo per vendor. That orchestrator sits on rules, and the rules sit on integration: AI is the top floor, reached last.
            </p>
            <p style={{ color: '#9AA6B6', lineHeight: '1.8', marginBottom: '14px', fontSize: '15px' }}>
              The orchestrator <strong style={{ color: '#E7ECF3' }}>reasons over Snowflake</strong>, the one place our systems are actually joined, and <strong style={{ color: '#E7ECF3' }}>commits actions to the systems of record</strong>, where writes are authoritative. SAP is the deliberate exception — its platform blocks external agents, so it reaches the fabric only through the data layer, never as a live agent.
            </p>
            <p style={{ color: '#9AA6B6', lineHeight: '1.8', fontSize: '15px' }}>
              Governance runs <strong style={{ color: '#E7ECF3' }}>beneath every layer</strong>: the AI Council gates what ships, every decision is logged and replayable, and autonomy is granted by risk tier — which is what makes this defensible to an auditor, not just impressive in a demo.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'Success metric', value: 'Hours returned to judgment work — not agents deployed', color: '#36D6C3' },
              { label: 'Biggest real risk', value: 'Data quality and change management — not the AI itself', color: '#E2A23B' },
              { label: 'Operating model', value: 'Federated: central platform team + embedded AI lead per function', color: '#7B74F2' },
              { label: 'Honest bottom line', value: "Snowflake is your moat. The orchestrator is replaceable if you keep MCP/A2A as the seam.", color: '#36D6C3' },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ background: '#10141D', border: '1px solid rgba(255,255,255,.08)', borderRadius: '10px', padding: '16px 20px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color, marginBottom: '6px' }}>{label}</div>
                <div style={{ fontSize: '14px', color: '#E7ECF3', lineHeight: '1.5', fontWeight: '500' }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 28px 60px', borderTop: '1px solid rgba(255,255,255,0.07)', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={14} color="#fff" />
            </div>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', fontSize: '15px', color: '#fff' }}>AgentOpsLab</span>
          </div>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', color: '#5E6878' }}>Enterprise AI · solution architecture reference — strategy overview, not an implementation spec. Platform labels illustrative.</p>
          <a href="/access" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
            Get Access <ArrowRight size={13} />
          </a>
        </div>
      </footer>
    </div>
  );
}
