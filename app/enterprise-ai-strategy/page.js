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
          One central AI brain serves Finance, GTM, HR and Legal. It reads from a shared data layer, hands off tasks to each platform's own AI tools, and writes results back to the right system. Three steps, in order: <strong style={{ color: '#E7ECF3' }}>connect the data, add rules, then add AI.</strong>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', borderTop: '1px solid rgba(255,255,255,.10)', marginBottom: '60px' }}>
          {[['Serves', 'Finance · GTM · HR · Legal'], ['Spine', 'Connect data, add rules, add AI'], ['Seam', 'MCP / A2A (open standard)'], ['Substrate', 'Snowflake (governed data)'], ['Orchestrator', 'Neutral, company-owned']].map(([k, v]) => (
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
              <text fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" textAnchor="start" fill="#5E6878" x="44" y="76" textTransform="uppercase">EXPERIENCE · HOW EACH FUNCTION USES IT</text>
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
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#36D6C3" x="62" y="216">L3 · AI LAYER: THE BRAIN THAT SPANS ALL SYSTEMS, COMPANY-OWNED</text>

              {/* Neutral Orchestrator */}
              <rect x="468" y="238" width="364" height="114" rx="10" fill="url(#orchGrad)" stroke="rgba(54,214,195,.55)" strokeWidth="1.5"/>
              <circle cx="492" cy="264" r="11" fill="#36D6C3"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="600" fill="#06201D" x="492" y="268" textAnchor="middle">2</text>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="700" fontSize="17" fill="#E7ECF3" x="514" y="266">Central AI Orchestrator</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="514" y="284">AI Foundry · swap models anytime</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="514" y="300">plans · routes · reasons · governs</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#36D6C3" x="514" y="318">the one brain that spans every system</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#7B74F2" x="514" y="336">MCP / A2A open standard</text>

              {/* Native agents as tools */}
              <rect x="62" y="252" width="360" height="80" rx="10" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="600" fontSize="15" fill="#E7ECF3" x="82" y="278">Agentforce</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="82" y="296">Salesforce built-in AI</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#7B74F2" x="82" y="314">called as a tool by the orchestrator</text>

              <rect x="878" y="252" width="360" height="80" rx="10" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="600" fontSize="15" fill="#E7ECF3" x="898" y="278">Cortex Agents</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="898" y="296">Snowflake built-in AI</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#7B74F2" x="898" y="314">called as a tool by the orchestrator</text>

              <line x1="468" y1="292" x2="424" y2="292" stroke="#7B74F2" strokeWidth="1.5" markerEnd="url(#ai)" markerStart="url(#ai)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#9C96F5" x="432" y="284">MCP</text>
              <line x1="832" y1="292" x2="876" y2="292" stroke="#7B74F2" strokeWidth="1.5" markerEnd="url(#ai)" markerStart="url(#ai)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#9C96F5" x="838" y="284">MCP</text>

              <line x1="650" y1="376" x2="650" y2="408" stroke="#36D6C3" strokeWidth="1.5" markerEnd="url(#ac)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#9AA6B6" x="658" y="396">sits on top of</text>

              {/* L2 RULES */}
              <rect x="44" y="408" width="1212" height="80" rx="11" fill="rgba(123,116,242,.06)" stroke="rgba(123,116,242,.4)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#9C96F5" x="62" y="434">L2 · RULES LAYER: SAME STEPS EVERY TIME, NO AI NEEDED</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="62" y="454">consistent, reliable automation for known processes</text>
              {['approvals', 'validation', 'routing', 'reconciliation'].map((label, i) => (
                <g key={label}>
                  <rect x={560 + i * 162} y={428} width={label === 'reconciliation' ? 170 : 150} height="30" rx="15" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x={560 + i * 162 + (label === 'reconciliation' ? 85 : 75)} y={448} textAnchor="middle">{label}</text>
                </g>
              ))}

              <line x1="650" y1="488" x2="650" y2="520" stroke="#36D6C3" strokeWidth="1.5" markerEnd="url(#ac)"/>

              {/* L1 API */}
              <rect x="44" y="520" width="1212" height="80" rx="11" fill="rgba(110,126,146,.10)" stroke="rgba(110,126,146,.5)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#9FB0C2" x="62" y="546">L1 · CONNECTION LAYER: HOW ALL SYSTEMS TALK TO EACH OTHER</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="62" y="566">clean, reliable connections between every platform</text>
              <rect x="560" y="540" width="180" height="30" rx="15" fill="#151B26" stroke="rgba(54,214,195,.4)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#36D6C3" x="650" y="560" textAnchor="middle">MCP / A2A standard</text>
              <rect x="752" y="540" width="150" height="30" rx="15" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="827" y="560" textAnchor="middle">Boomi iPaaS</text>
              <rect x="914" y="540" width="170" height="30" rx="15" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="999" y="560" textAnchor="middle">governed REST</text>

              {/* Split paths */}
              <path d="M360 600 L360 632 L300 632 L300 656" fill="none" stroke="#36D6C3" strokeWidth="1.5" markerEnd="url(#ac)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#36D6C3" x="196" y="628">3 · read and reason</text>
              <path d="M940 600 L940 632 L1000 632 L1000 656" fill="none" stroke="#36D6C3" strokeWidth="1.5" markerEnd="url(#ac)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#36D6C3" x="1010" y="628">4 · act and write</text>

              {/* SNOWFLAKE */}
              <rect x="44" y="656" width="592" height="128" rx="12" fill="rgba(54,214,195,.06)" stroke="rgba(54,214,195,.4)"/>
              <circle cx="70" cy="684" r="11" fill="#36D6C3"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="600" fill="#06201D" x="70" y="688" textAnchor="middle">3</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#36D6C3" x="92" y="682">DATA LAYER · READ AND REASON HERE</text>
              <text fontFamily="Space Grotesk,sans-serif" fontWeight="700" fontSize="18" fill="#E7ECF3" x="92" y="710">Snowflake</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="92" y="730">all data in one place · full audit trail</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x="92" y="750">updates every 5 seconds via Snowpipe Streaming</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#36D6C3" x="92" y="770">the only place all systems are joined together</text>

              {/* SYSTEMS OF RECORD */}
              <rect x="664" y="656" width="592" height="128" rx="12" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
              <circle cx="690" cy="684" r="11" fill="#36D6C3"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="600" fill="#06201D" x="690" y="688" textAnchor="middle">4</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#5E6878" x="712" y="682">SOURCE SYSTEMS · WRITE AND ACT HERE</text>
              {[['Salesforce', 684], ['NetSuite', 816], ['Gong', 938], ['HCM', 1040]].map(([name, x]) => (
                <g key={name}>
                  <rect x={x} y="698" width={name === 'Salesforce' ? 120 : name === 'NetSuite' ? 110 : 90} height="30" rx="8" fill="#1A2230" stroke="rgba(255,255,255,.18)"/>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x={x + (name === 'Salesforce' ? 60 : name === 'NetSuite' ? 55 : 45)} y="718" textAnchor="middle">{name}</text>
                </g>
              ))}
              <rect x="684" y="738" width="220" height="30" rx="8" fill="rgba(226,162,59,.08)" stroke="rgba(226,162,59,.55)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#E2A23B" x="794" y="758" textAnchor="middle">SAP · Joule (restricted)</text>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#E2A23B" x="918" y="758">data feed only, no direct AI access</text>

              {/* Replication arrow */}
              <line x1="662" y1="685" x2="638" y2="685" stroke="#6E7E92" strokeWidth="1.5" markerEnd="url(#am)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="10" fill="#9FB0C2" x="545" y="677">sync · CDC</text>

              {/* GOVERNANCE FOUNDATION */}
              <rect x="44" y="820" width="1212" height="108" rx="12" fill="rgba(181,112,240,.06)" stroke="rgba(181,112,240,.3)"/>
              <text fontFamily="JetBrains Mono,monospace" fontSize="11" letterSpacing="2" fill="#C79BF3" x="62" y="844">GOVERNANCE AND RESPONSIBLE AI: BUILT INTO EVERY LAYER, NOT AN AFTERTHOUGHT</text>
              {[
                [62,  'AI Council review', 170],
                [248, 'Purview · data lineage', 195],
                [460, 'approved tools + full audit', 215],
                [692, 'monitors for wrong answers', 235],
                [944, 'risk-based autonomy levels', 230],
              ].map(([x, label, w]) => (
                <g key={label}>
                  <rect x={x} y="856" width={w} height="32" rx="16" fill="#151B26" stroke="rgba(255,255,255,.18)"/>
                  <text fontFamily="JetBrains Mono,monospace" fontSize="11" fill="#9AA6B6" x={x + w/2} y="877" textAnchor="middle">{label}</text>
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginTop: '14px', paddingTop: '14px', borderTop: '1px dashed rgba(255,255,255,.10)', fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', color: '#9AA6B6' }}>
              {[['#36D6C3', 'data flow'], ['#7B74F2', 'MCP / A2A (AI tool connections)'], ['#E2A23B', 'vendor restriction (SAP blocked)']].map(([color, label]) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '3px', background: color, display: 'inline-block' }}/>
                  {label}
                </span>
              ))}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#36D6C3', display: 'inline-block' }}/>
                numbered steps: ask, orchestrate, read data, take action
              </span>
            </div>
          </div>
        </section>
      )}

      {/* DESIGN PRINCIPLES TAB */}
      {activeTab === 'principles' && (
        <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '32px 28px 80px' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#7B74F2', marginBottom: '12px' }}>Core design principles</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.015em', maxWidth: '26ch', marginBottom: '16px' }}>Six decisions that determine whether this works.</h2>
            <p style={{ maxWidth: '68ch', color: '#9AA6B6', lineHeight: '1.7' }}>These are not just guidelines. They are the key decisions that hold the whole architecture together. Get them wrong and you end up with AI tools that contradict each other, cannot be audited, and lock you into a vendor you cannot leave.</p>
          </div>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {[
              {
                num: '01',
                color: '#36D6C3',
                title: 'The AI brain must be neutral and company-owned.',
                detail: "A vendor's own AI is great inside that vendor's product but poor at working across multiple systems. Salesforce's Agentforce will always be a great Salesforce tool, but a poor cross-system brain. The layer that plans, reasons, and remembers across all your tools must never be owned by any one vendor. Build it on AI Foundry or something similar so you can swap the AI model out at any time and keep control.",
                tag: 'Architecture principle',
              },
              {
                num: '02',
                color: '#7B74F2',
                title: "Use each platform's built-in AI as a helper, not as the brain.",
                detail: "Native vendor AI tools like Agentforce, Cortex, and Joule are called as helpers by your central orchestrator. This means each vendor maintains their own piece while you own the intelligence at the top. The rule is: check if the vendor already does it well before you build something custom. If they do, call their tool. Do not build your entire strategy inside one vendor's AI platform.",
                tag: 'Build vs buy vs embed',
              },
              {
                num: '03',
                color: '#E2A23B',
                title: 'SAP is a special case. Treat it as a data feed only.',
                detail: "SAP's April 2026 policy explicitly blocks any external AI from calling SAP's APIs directly. This includes Microsoft Copilot and any custom AI agent. Nothing outside SAP's own Joule tool can reach live SAP data. The right approach is to keep SAP feeding data into Snowflake and let AI agents work from that copy. Do not plan any AI workflow that needs to call SAP live.",
                tag: 'Vendor restriction',
              },
              {
                num: '04',
                color: '#36D6C3',
                title: 'Read from Snowflake. Write to the source system.',
                detail: "Snowflake is the only place all your systems are joined together in one view. No single system alone can answer cross-functional questions like why margin dropped or which accounts are at renewal risk. AI agents should read from Snowflake to think and reason. But when an agent takes action, like approving an invoice or updating a deal stage, that write goes directly to the right source system: SAP, NetSuite, or Salesforce.",
                tag: 'Data architecture rule',
              },
              {
                num: '05',
                color: '#B570F0',
                title: 'Governance must be built in, not added later.',
                detail: "AI failures are different from software failures. An AI agent can give a confident, well-formatted answer that is simply wrong for the situation. No error is thrown and nothing shows up in standard logs. You need monitoring that catches wrong answers, a clear list of what each agent is allowed to access, full logs of every decision, and different levels of autonomy depending on how risky the task is. An AI Council should review what gets built before it ships.",
                tag: 'Governance requirement',
              },
              {
                num: '06',
                color: '#9C96F5',
                title: 'Moving to Microsoft does not remove vendor lock-in. Choose your trade deliberately.',
                detail: "Switching to Microsoft as your AI platform does not mean you escape vendor dependency. You are just trading many small dependencies for one large one. Microsoft has just as much pricing power as Salesforce. The question is which lock-in is easier to leave. If you build on AI Foundry with open standards like MCP and A2A, you can swap the AI model or move platforms. If you build inside Copilot Studio, you are inside Microsoft's closed surface. Use Copilot Studio for everyday M365 tasks. Use AI Foundry for anything that crosses systems.",
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
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#7B74F2', marginBottom: '12px' }}>Platform overview</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.015em', marginBottom: '16px' }}>Know what you already own before you build anything new.</h2>
            <p style={{ maxWidth: '68ch', color: '#9AA6B6', lineHeight: '1.7' }}>The AI landscape moved fast. Before writing a single custom agent, check what each platform already offers. Most common use cases are already covered and maintained by the vendor. The decision rule: use the built-in tool first, buy a third-party solution second, build from scratch last.</p>
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
                role: 'CRM · GTM · Revenue',
                native: 'Salesforce has a full AI agent platform with its own reasoning engine. It opens up all of Salesforce through APIs, and agents can work from Slack, other AI tools, or external systems using the MCP standard.',
                orchestratorRole: 'Called as a helper tool by the central AI orchestrator. It handles Salesforce-specific tasks like updating opportunity stages, pulling account data, and sending outreach. It does not own the intelligence across systems.',
                constraint: null,
              },
              {
                platform: 'Snowflake',
                agent: 'Cortex Agents',
                status: 'open',
                statusLabel: 'MCP supported',
                color: '#60a5fa',
                border: 'rgba(96,165,250,.3)',
                bg: 'rgba(96,165,250,.05)',
                role: 'Data layer · AI memory · Audit log',
                native: 'Cortex Agents can build data agents that plan tasks, use tools, and respond across structured and unstructured data. Snowflake MCP Server connects to Anthropic, Agentforce, UiPath, and Azure AI Foundry.',
                orchestratorRole: 'The one place where all your systems are joined together for AI to read from. Snowflake also stores AI memory and logs every decision. Snowpipe Streaming keeps data fresh within 5 seconds from other systems.',
                constraint: null,
              },
              {
                platform: 'SAP',
                agent: 'Joule',
                status: 'walled',
                statusLabel: 'Restricted since April 2026',
                color: '#E2A23B',
                border: 'rgba(226,162,59,.4)',
                bg: 'rgba(226,162,59,.05)',
                role: 'Finance ERP · Procurement · HR',
                native: 'SAP Joule is the only permitted AI entry point for SAP data as of April 2026. External AI tools are explicitly blocked from calling SAP APIs on their own.',
                orchestratorRole: 'SAP sends data to Snowflake on a regular schedule. Any AI agent working with SAP financial data reads from that Snowflake copy, not from SAP directly. Joule handles tasks that must happen inside SAP itself.',
                constraint: 'Only 3% of SAP customers use Joule in production today. Most SAP customers who use AI use Microsoft Copilot instead, but Copilot also cannot call SAP APIs under the new policy. Do not plan any live AI workflow that goes through SAP.',
              },
              {
                platform: 'Microsoft',
                agent: 'AI Foundry + Copilot Studio',
                status: 'hybrid',
                statusLabel: 'Use AI Foundry for agents',
                color: '#7B74F2',
                border: 'rgba(123,116,242,.3)',
                bg: 'rgba(123,116,242,.05)',
                role: 'Orchestration · M365 · Azure',
                native: 'AI Foundry is the recommended platform for the central AI orchestrator. It supports swappable AI models and open standards like MCP and A2A. Copilot Studio is for business users working in Teams, Outlook, and Excel. Power Automate handles simple workflow automation.',
                orchestratorRole: 'AI Foundry is where enterprise-grade cross-system agents live. Copilot Studio is how Finance, GTM, and HR teams access the intelligence through their everyday tools. Do not build cross-system agents inside Copilot Studio. It is a user interface, not an AI platform.',
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
                native: 'NetSuite has full REST APIs and SuiteQL. Unlike SAP, there are no restrictions on external AI calling NetSuite directly. SuiteAnalytics feeds Snowflake for cross-system reasoning.',
                orchestratorRole: 'The central orchestrator can read from and write to NetSuite directly. Journal entries, purchase orders, and payment runs can all be triggered by AI via MCP-connected tools. Also feeds Snowflake for analysis.',
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
                role: 'Revenue intelligence · Sales signals',
                native: 'Gong has full APIs for call recordings, deal insights, and engagement signals. Gong AI offers in-platform coaching and deal risk scoring. Data syncs to Snowflake for blending with other sources.',
                orchestratorRole: 'Gong data in Snowflake makes it possible to score deals using both pipeline data from Salesforce and conversation signals from Gong. Neither system alone has the full picture. Snowflake is where they come together.',
                constraint: null,
              },
            ].map(({ platform, agent, status, statusLabel, color, border, bg, role, native, orchestratorRole, constraint }) => (
              <div key={platform} style={{ border: `1px solid ${border}`, borderRadius: '14px', padding: '24px', background: bg }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ flex: '0 0 auto' }}>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '700', fontSize: '20px', color: '#E7ECF3', marginBottom: '4px' }}>{platform}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color }}>native AI: {agent}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginLeft: 'auto' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '100px', background: `${color}18`, border: `1px solid ${color}50`, color }}>{statusLabel}</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '100px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: '#9AA6B6' }}>{role}</span>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#5E6878', marginBottom: '6px' }}>Built-in AI capability</div>
                    <p style={{ color: '#9AA6B6', fontSize: '13px', lineHeight: '1.7' }}>{native}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#5E6878', marginBottom: '6px' }}>Role in the architecture</div>
                    <p style={{ color: '#9AA6B6', fontSize: '13px', lineHeight: '1.7' }}>{orchestratorRole}</p>
                  </div>
                  {constraint && (
                    <div style={{ gridColumn: '1 / -1', background: 'rgba(226,162,59,.07)', border: '1px solid rgba(226,162,59,.3)', borderRadius: '8px', padding: '12px 16px' }}>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#E2A23B', marginBottom: '6px' }}>Known restriction</div>
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
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.015em', marginBottom: '16px' }}>The order you do things matters as much as what you build.</h2>
            <p style={{ maxWidth: '68ch', color: '#9AA6B6', lineHeight: '1.7' }}>Do not start with the most exciting use cases. Start with the boring, high-volume, low-risk ones. These are the best early bets because they are forgiving when things go wrong, and they generate the evidence you need to fund the next phase.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                phase: '01',
                label: 'Foundation',
                period: '0 to 6 months',
                color: '#36D6C3',
                border: 'rgba(54,214,195,.35)',
                bg: 'rgba(54,214,195,.04)',
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
                color: '#7B74F2',
                border: 'rgba(123,116,242,.35)',
                bg: 'rgba(123,116,242,.04)',
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
                color: '#B570F0',
                border: 'rgba(181,112,240,.35)',
                bg: 'rgba(181,112,240,.04)',
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
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: '#E2A23B', marginRight: '8px' }}>Avoid in this phase:</span>
                    <span style={{ color: '#C4944A', fontSize: '13px', lineHeight: '1.7' }}>{avoid}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 90-day action box */}
          <div style={{ marginTop: '32px', background: 'linear-gradient(135deg, rgba(54,214,195,0.08), rgba(123,116,242,0.08))', border: '1px solid rgba(54,214,195,0.3)', borderRadius: '16px', padding: '32px' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#36D6C3', marginBottom: '12px' }}>First 90 days: what to do before anything is built</div>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: '20px', marginBottom: '20px' }}>The concrete first moves for the Enterprise AI team.</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {[
                { weeks: 'Weeks 1 to 3', title: 'Scoped assessment', detail: 'Run an AI readiness check focused on Business Systems only, not the whole enterprise. Answer four questions: Is the data clean enough per domain? Does the AI Council have a lane for Business Systems requests? Do we have any way to monitor AI for wrong answers? Or is every AI project a one-off with no shared standards?' },
                { weeks: 'Weeks 4 to 6', title: 'Get the key policies approved', detail: 'Write down and get sign-off on the build vs buy vs embed decision rule and the MCP-based architecture approach. This stops the same debate from happening on every new use case. Also get the SAP restriction documented and escalated to the VP now, not after a team builds something that depends on live SAP data.' },
                { weeks: 'Weeks 7 to 12', title: 'Three pilots, one per function', detail: 'Ship one small win in Finance, one in GTM, one in HR. Measure the impact in concrete terms: cost per transaction, time saved, hours returned to higher-value work. These three pilots also test the embedded AI lead model in each function before scaling it.' },
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
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: '#7B74F2', marginBottom: '14px' }}>How it all fits together</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: '600', fontSize: 'clamp(22px,2.5vw,30px)', letterSpacing: '-.015em', marginBottom: '18px', lineHeight: '1.2' }}>One brain, many systems, and a solid foundation underneath it all.</h2>
            <p style={{ color: '#9AA6B6', lineHeight: '1.8', marginBottom: '14px', fontSize: '15px' }}>
              A request from Finance, GTM, or HR lands on a <strong style={{ color: '#E7ECF3' }}>single central AI brain that your company owns.</strong> It does not try to replace what each platform already does well. Instead it calls Salesforce AI and Snowflake AI as helper tools using an open standard, so the intelligence spans all systems rather than being stuck inside one vendor.
            </p>
            <p style={{ color: '#9AA6B6', lineHeight: '1.8', marginBottom: '14px', fontSize: '15px' }}>
              The AI brain <strong style={{ color: '#E7ECF3' }}>reads from Snowflake</strong>, the one place all your systems are joined, and <strong style={{ color: '#E7ECF3' }}>writes actions back to the source systems</strong> where the authoritative records live. SAP is the deliberate exception. Its platform blocks external AI, so it only connects through the data layer as a feed, never as a live target.
            </p>
            <p style={{ color: '#9AA6B6', lineHeight: '1.8', fontSize: '15px' }}>
              Governance runs <strong style={{ color: '#E7ECF3' }}>under every layer</strong>. The AI Council reviews what ships, every decision is logged and replayable, and autonomy levels are set based on how risky the task is. That is what makes this defensible to an auditor, not just impressive in a demo.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: 'How to measure success', value: 'Hours returned to judgment work, not the number of agents deployed', color: '#36D6C3' },
              { label: 'Biggest real risk', value: 'Data quality and change management, not the AI technology itself', color: '#E2A23B' },
              { label: 'Operating model', value: 'Federated: one central platform team plus one embedded AI lead per function', color: '#7B74F2' },
              { label: 'Honest bottom line', value: 'Snowflake is your competitive advantage. The AI orchestrator is replaceable as long as you use open standards like MCP and A2A as the connection layer.', color: '#36D6C3' },
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
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11.5px', color: '#5E6878' }}>Enterprise AI strategy reference. Platform names used for illustration only.</p>
          <a href="/access" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
            Get Access <ArrowRight size={13} />
          </a>
        </div>
      </footer>
    </div>
  );
}
