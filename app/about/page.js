'use client';

import { useState } from 'react';
import { Zap, ArrowRight, Menu, X, Mail, Phone, Linkedin, Award, ChevronRight, ExternalLink, BookOpen, Layers, Shield, Brain } from 'lucide-react';

const journey = [
  {
    period: '2012 — 2016',
    label: 'The foundation years',
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    title: 'Learning to think in systems, not scripts',
    body: "I started as a software engineer writing test automation and RPA bots at banks and a tech startup in India. The work was tactical — automate a form here, validate a file there. But I noticed something early: the bots that lasted were the ones designed around the process, not the UI. The ones that broke constantly were trying to replicate human clicks, not human judgment. That lesson about designing at the right level of abstraction stayed with me through every role since.",
    tech: ['Selenium', 'Python', 'UiPath', 'Automation Anywhere', 'Power Automate'],
  },
  {
    period: '2016 — 2018',
    label: 'The consulting years',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#C4B5FD',
    title: 'Breadth over depth: learning how many industries share the same problems',
    body: "Consulting pushed me into domains I would never have self-selected — insurance, manufacturing, logistics, retail — all within a two-year window. Every engagement started with \"we are unique\" and ended with the same root problems: data silos, manual handoffs, and processes that had never been questioned because they had always worked well enough. That pattern recognition — seeing what is universal underneath industry jargon — is one of the most transferable things I built during this period.",
    tech: ['UiPath', 'Blue Prism', 'SQL', 'Power BI', 'JIRA', 'Agile'],
  },
  {
    period: '2018 — 2020',
    label: 'The transformation years',
    color: '#0891B2',
    bg: '#E0F2FE',
    border: '#BAE6FD',
    title: 'Where I learned what enterprise scale actually means',
    body: "A major global tech company brought me in to lead a Finance Transformation program that delivered 60+ automation initiatives across a global team. This is where I moved from building individual automations to building the framework that others used to build automations. I founded a Document Intelligence Center of Excellence, designed the governance model, and mentored 10+ engineers. We documented 20,000+ hours saved annually. More importantly, I learned that the humans in the loop matter as much as the technology — change management, stakeholder trust, and clear ROI metrics are what keep a program alive.",
    tech: ['Azure Bot Framework', 'Power BI', 'Alteryx', 'SAP', 'Oracle', 'Python'],
  },
  {
    period: '2020 — Present',
    label: 'The AI architecture years',
    color: '#4F46E5',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    title: 'From RPA to agentic AI — and what I learned building both',
    body: "The most important shift in my career happened around 2022 when I moved from orchestrating bots to orchestrating AI agents. I built LangChain-based agentic workflows on n8n for Accounts Receivable and HR, deployed GPT-4 document intelligence across the Procure-to-Pay cycle, and designed an AI governance framework that allowed us to scale responsibly. I also learned where the new failure modes live: an AI agent can return a confident, well-formed answer that is simply wrong for the situation — no error thrown, nothing in the logs. That drove how I now think about governance, observability, and the non-negotiable role of the human in the loop.",
    tech: ['Azure AI Foundry', 'LangChain', 'GPT-4', 'n8n', 'Azure Document Intelligence', 'Snowflake', 'UiPath'],
  },
];

const positions = [
  {
    icon: Layers,
    color: '#0891B2',
    bg: '#E0F2FE',
    title: 'Connect the data first. Rules second. AI on top.',
    body: "The biggest mistake I see in enterprise AI programs is reaching for the AI layer before the data and rules layers are solid. AI models what they are trained on. If the underlying data is inconsistent, incomplete, or not governed, the agent learns to be inconsistently wrong at scale. L1 integration and L2 rules-based automation are not stepping stones you rush through. They are the foundation everything else sits on.",
  },
  {
    icon: Brain,
    color: '#4F46E5',
    bg: '#EEF2FF',
    title: 'The orchestration layer must be neutral and company-owned.',
    body: "Every major platform vendor now has a native AI agent — Agentforce, Joule, Cortex Agents. They are good inside their own walls. They are poor cross-system orchestrators by design. The layer that reasons across Finance, GTM, HR, and Legal cannot be owned by any one vendor. You must own it. Build it on AI Foundry or equivalent with open standards like MCP and A2A as the portability seam. Otherwise you are not building an AI strategy — you are building a vendor dependency.",
  },
  {
    icon: Shield,
    color: '#7C3AED',
    bg: '#F5F3FF',
    title: 'Governance is the product. Not the constraint on the product.',
    body: "Semantic failure is the new class of production incident that most engineering teams have no playbook for. Standard monitoring tells you when a system is down. It does not tell you when an AI agent gave a confident wrong answer that a human acted on. The allowlist, the audit trail, the risk-tiered autonomy model, the AI Council intake process — these are not bureaucratic overhead. They are the thing that lets you grant more autonomy over time without losing control.",
  },
  {
    icon: BookOpen,
    color: '#059669',
    bg: '#ECFDF5',
    title: 'Measure hours returned to judgment work, not agents deployed.',
    body: "I have seen dozens of AI programs that celebrated deploying twenty agents and then struggled to show what changed for the business. The metric that matters is: how many hours did we return to people to do the work that requires actual human judgment? That is the proof that AI did something. Everything else is theater.",
  },
];

const signatureWork = [
  {
    title: 'Built an enterprise AI & Automation Center of Excellence — team, governance, and first production agents',
    outcome: '$1M+ annual cost savings, 15,000+ productivity hours, 12-person global team across 4 countries',
    what: "Started with a mandate to 'do more with AI' and no team, no playbook, and no budget. Built the intake process, the governance model, the vendor evaluation framework, and the first five production agents. Grew the team to 12 engineers across the US, Canada, UK, and India.",
    color: '#4F46E5',
    border: '#C7D2FE',
    bg: '#EEF2FF',
  },
  {
    title: 'Designed an enterprise AI Governance and Security Framework adopted across all business functions',
    outcome: 'Policy adopted enterprise-wide — standards, guardrails, and responsible AI use across all functions',
    what: "Partnered with Engineering and Security to define what responsible AI use looks like in a company where data governance and IP protection are non-negotiable. Covered model selection, data handling, output validation, audit requirements, and incident response for AI-specific failure modes.",
    color: '#7C3AED',
    border: '#C4B5FD',
    bg: '#F5F3FF',
  },
  {
    title: 'Deployed LangChain agentic workflows on n8n — first production multi-step AI in Accounts Receivable and HR',
    outcome: 'First production agentic AI deployment — multi-step reasoning with human escalation paths',
    what: "Moved the team from single-call AI to multi-step agent workflows that could plan, use tools, and hand off to a human when confidence dropped below threshold. Built on n8n with LangChain for the reasoning layer. This became the reference architecture for all subsequent agent deployments.",
    color: '#0891B2',
    border: '#BAE6FD',
    bg: '#E0F2FE',
  },
  {
    title: 'Founded a Document Intelligence Center of Excellence — 70% faster invoice, PO, and contract processing',
    outcome: '70% reduction in processing time across Finance — 3-day cycle to same-day automated review',
    what: "Founded the CoE, hired and mentored the team, and designed the platform architecture for document AI. Built on Azure Document Intelligence integrated with SAP and Oracle ERP. Reduced a 3-day manual review cycle to same-day automated processing with exception-only human review.",
    color: '#059669',
    border: '#A7F3D0',
    bg: '#ECFDF5',
  },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openWork, setOpenWork] = useState(null);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #F8FAFC; font-family: 'Plus Jakarta Sans', sans-serif; }
        .nav-link { transition: color 0.2s; color: #475569; text-decoration: none; font-size: 14px; font-weight: 500; font-family: 'Plus Jakarta Sans', sans-serif; }
        .nav-link:hover { color: #0F172A !important; }
        .work-card { transition: all 0.2s; cursor: pointer; }
        .work-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.08); }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: repeat(2,1fr) !important; }
          .positions-grid { grid-template-columns: 1fr !important; }
          .photo-hero { width: 200px !important; height: 200px !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(248,250,252,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #E2E8F0', padding: '0 28px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={16} color="#fff" />
            </div>
            <span style={{ fontWeight: '800', fontSize: '16px', color: '#0F172A', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Vinay Gangidi</span>
          </a>
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <a href="/" className="nav-link">Home</a>
            <a href="/solutions" className="nav-link">AI Agents</a>
            <a href="/enterprise-ai-strategy" className="nav-link">Strategy</a>
            <a href="/about" className="nav-link" style={{ color: '#4F46E5', fontWeight: '600' }}>About Me</a>
            <a href="mailto:vinay.gangidi@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 2px 8px rgba(99,102,241,0.35)' }}>
              Get in Touch <ArrowRight size={13} />
            </a>
          </div>
          <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '8px', color: '#0F172A', cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center' }}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {menuOpen && (
          <div style={{ padding: '16px 28px', borderTop: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
            {[['Home', '/'], ['AI Agents', '/solutions'], ['Strategy', '/enterprise-ai-strategy'], ['About Me', '/about']].map(([l, h]) => (
              <a key={l} href={h} onClick={() => setMenuOpen(false)} style={{ fontSize: '16px', color: '#475569', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 28px 64px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '64px', alignItems: 'start' }}>

          {/* Large photo column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div className="photo-hero" style={{ width: '280px', height: '320px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(79,70,229,0.18), 0 4px 16px rgba(0,0,0,0.10)', border: '4px solid #fff' }}>
              <img src="/vinay.jpeg" alt="Vinay Gangidi" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div style={{ fontWeight: '800', fontSize: '17px', color: '#0F172A', marginBottom: '3px' }}>Vinay Gangidi</div>
              <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '14px' }}>Morrisville, NC · Open to advisory roles</div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
                <a href="https://linkedin.com/in/vinaygangidi" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 14px', background: '#EEF2FF', border: '1px solid #C7D2FE', color: '#4F46E5', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none' }}>
                  <Linkedin size={13} /> LinkedIn
                </a>
                <a href="mailto:vinay.gangidi@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 14px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none' }}>
                  <Mail size={13} /> Email
                </a>
              </div>
              {/* Stats under photo */}
              <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px' }}>
                {[
                  { val: '$1M+', label: 'Annual savings delivered', color: '#059669', bg: '#ECFDF5' },
                  { val: '15K+', label: 'Productivity hours saved', color: '#0891B2', bg: '#E0F2FE' },
                  { val: '100+', label: 'Automations built', color: '#4F46E5', bg: '#EEF2FF' },
                  { val: '15+', label: 'AI solutions shipped', color: '#D97706', bg: '#FFFBEB' },
                ].map(({ val, label, color, bg }) => (
                  <div key={label} style={{ background: bg, borderRadius: '10px', padding: '14px 10px', textAlign: 'center' }}>
                    <div style={{ fontWeight: '800', fontSize: '22px', color, marginBottom: '3px', lineHeight: 1 }}>{val}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '.07em', lineHeight: '1.4' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: headline + text + current role + available for */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '5px 12px', borderRadius: '100px', marginBottom: '20px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669', display: 'inline-block' }} />
                AI Architect · Practitioner · Thought Leader
              </div>
              <h1 style={{ fontWeight: '800', fontSize: 'clamp(34px,4vw,52px)', lineHeight: '1.06', letterSpacing: '-.025em', marginBottom: '16px', color: '#0F172A' }}>
                I turn enterprise AI<br />from idea to production.
              </h1>
              <p style={{ fontWeight: '600', fontSize: '16px', color: '#4F46E5', lineHeight: '1.5', marginBottom: '16px' }}>
                I design AI systems that actually ship — and the governance frameworks that keep them running safely at scale.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '14px' }}>
                Most AI programs fail not because the technology is wrong, but because the architecture underneath it is not ready. I have spent 14 years building that architecture — connecting data, automating the rules layer, and then putting AI on top in the right sequence, at the right pace, with the governance to sustain it.
              </p>
              <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.8', marginBottom: '20px' }}>
                Built and led a global 12-person AI Center of Excellence. 15+ AI systems in production across Finance, HR, GTM, Legal, and Operations. $1M+ in annual savings. 15,000+ productivity hours returned to people for higher-value work.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a href="mailto:vinay.gangidi@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '11px 22px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '9px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 14px rgba(99,102,241,0.3)' }}>
                  <Mail size={14} /> vinay.gangidi@gmail.com
                </a>
                <a href="tel:+15167075282" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '11px 22px', background: '#fff', border: '1px solid #E2E8F0', color: '#0F172A', borderRadius: '9px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                  <Phone size={14} /> +1 516-707-5282
                </a>
              </div>
            </div>

            {/* Current role + Available for side by side */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '18px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '10px' }}>Current role</div>
                <div style={{ fontWeight: '700', fontSize: '14px', marginBottom: '3px' }}>Synopsys, Inc</div>
                <div style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', marginBottom: '8px' }}>Senior Manager, Enterprise Solution Architect (Automation & AI)</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#94A3B8' }}>Oct 2020 — Present</div>
              </div>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '18px' }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '10px' }}>Available for</div>
                {['Advisory engagements', 'Speaking and panels', 'Leadership roles', 'AI strategy consulting'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '4px 0' }}>
                    <ChevronRight size={11} color="#4F46E5" />
                    <span style={{ fontSize: '12px', color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section style={{ background: '#fff', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '80px 28px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '12px', fontWeight: '700' }}>The journey</div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-.02em', marginBottom: '12px' }}>A progression of thinking, not a timeline of jobs.</h2>
          <p style={{ color: '#64748B', fontSize: '16px', lineHeight: '1.7', maxWidth: '60ch', marginBottom: '56px' }}>Each chapter taught me something the previous one could not. The technical depth came first. The strategic thinking came from applying it at scale and watching what broke.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {journey.map((chapter, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '32px', paddingBottom: idx < journey.length - 1 ? '48px' : '0', borderBottom: idx < journey.length - 1 ? '1px dashed #E2E8F0' : 'none', marginBottom: idx < journey.length - 1 ? '48px' : '0' }}>
                <div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: chapter.color, fontWeight: '700', marginBottom: '6px' }}>{chapter.period}</div>
                  <div style={{ display: 'inline-block', padding: '4px 10px', background: chapter.bg, border: `1px solid ${chapter.border}`, borderRadius: '100px', fontSize: '11px', color: chapter.color, fontWeight: '600', marginBottom: '16px' }}>{chapter.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {chapter.tech.map(t => (
                      <span key={t} style={{ fontSize: '11px', color: '#64748B', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '2px 8px' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '600', fontSize: '18px', color: '#0F172A', marginBottom: '12px', lineHeight: '1.4' }}>{chapter.title}</h3>
                  <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8' }}>{chapter.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THOUGHT LEADERSHIP POSITIONS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '12px', fontWeight: '700' }}>Thought leadership</div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-.02em', marginBottom: '12px' }}>Positions I hold on enterprise AI.</h2>
        <p style={{ color: '#64748B', fontSize: '16px', lineHeight: '1.7', maxWidth: '60ch', marginBottom: '48px' }}>These are not opinions I picked up from reading. They came from shipping real systems, watching what failed, and figuring out why.</p>
        <div className="positions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {positions.map(({ icon: Icon, color, bg, title, body }) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '28px', transition: 'box-shadow 0.2s' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Icon size={20} color={color} />
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '600', fontSize: '16px', color: '#0F172A', marginBottom: '12px', lineHeight: '1.4' }}>{title}</h3>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.75' }}>{body}</p>
            </div>
          ))}
        </div>
        <div style={{ background: 'linear-gradient(135deg, #EEF2FF, #E0F2FE)', border: '1px solid #C7D2FE', borderRadius: '14px', padding: '24px 28px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: '6px' }}>Published strategy</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '600', fontSize: '17px', color: '#0F172A' }}>Enterprise AI Strategy: Architecture Reference</div>
            <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>Full architecture diagram, platform strategy, design principles, and phased roadmap.</div>
          </div>
          <a href="/enterprise-ai-strategy" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: '#4F46E5', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none', flexShrink: 0 }}>
            Read the strategy <ArrowRight size={13} />
          </a>
        </div>
      </section>

      {/* SIGNATURE WORK */}
      <section style={{ background: '#fff', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '80px 28px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '12px', fontWeight: '700' }}>Signature work</div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-.02em', marginBottom: '12px' }}>Four things I am most proud of building.</h2>
          <p style={{ color: '#64748B', fontSize: '16px', lineHeight: '1.7', maxWidth: '60ch', marginBottom: '48px' }}>Not a list of every project. The ones that required the most thinking, shaped how I work, and produced the most durable outcomes.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {signatureWork.map((work, idx) => (
              <div key={idx} className="work-card" style={{ border: `1px solid ${openWork === idx ? work.border : '#E2E8F0'}`, borderRadius: '14px', overflow: 'hidden', background: openWork === idx ? work.bg : '#fff' }} onClick={() => setOpenWork(openWork === idx ? null : idx)}>
                <div style={{ padding: '24px 28px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: work.bg, border: `1px solid ${work.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'JetBrains Mono, monospace', fontWeight: '700', fontSize: '13px', color: work.color }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '600', fontSize: '16px', color: '#0F172A', lineHeight: '1.4', marginBottom: '6px' }}>{work.title}</h3>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px', background: work.bg, border: `1px solid ${work.border}`, borderRadius: '100px', fontSize: '12px', color: work.color, fontWeight: '500' }}>
                      <Award size={10} /> {work.outcome}
                    </div>
                  </div>
                  <ChevronRight size={16} color={openWork === idx ? work.color : '#94A3B8'} style={{ flexShrink: 0, marginTop: '4px', transform: openWork === idx ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </div>
                {openWork === idx && (
                  <div style={{ padding: '0 28px 28px', borderTop: `1px solid ${work.border}` }}>
                    <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.8', marginTop: '20px' }}>{work.what}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 28px' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '12px', fontWeight: '700' }}>Credentials</div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-.02em', marginBottom: '40px' }}>Certifications & education</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginBottom: '32px' }}>
          {[
            { name: 'Microsoft AI Business Solution Architect', cat: 'AI & Architecture', color: '#4F46E5', bg: '#EEF2FF' },
            { name: 'Microsoft Azure AI Associate Engineer', cat: 'AI & Cloud', color: '#4F46E5', bg: '#EEF2FF' },
            { name: 'Salesforce Agentforce Specialist', cat: 'Agentic AI', color: '#0891B2', bg: '#E0F2FE' },
            { name: 'n8n Certified Automation Expert', cat: 'Workflow Automation', color: '#7C3AED', bg: '#F5F3FF' },
            { name: 'PMP — Project Management Professional', cat: 'Leadership', color: '#059669', bg: '#ECFDF5' },
            { name: 'Lean Six Sigma', cat: 'Process Excellence', color: '#059669', bg: '#ECFDF5' },
            { name: 'Microsoft Power BI Data Analyst', cat: 'Data & Analytics', color: '#0891B2', bg: '#E0F2FE' },
            { name: 'CDMP — Certified Data Management Professional', cat: 'Data & Analytics', color: '#0891B2', bg: '#E0F2FE' },
            { name: 'UiPath Agentic Automation Engineer', cat: 'Agentic AI', color: '#D97706', bg: '#FFFBEB' },
          ].map(({ name, cat, color, bg }) => (
            <div key={name} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '16px 20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '9px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Award size={16} color={color} />
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '13px', color: '#0F172A', lineHeight: '1.3', marginBottom: '3px' }}>{name}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '.08em' }}>{cat}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
          {[
            { degree: 'Digital Transformation with Disruptive Technologies', school: 'MIT Professional Education', year: '2023', color: '#D97706', bg: '#FFFBEB' },
            { degree: 'M.S., Computer Information Systems', school: 'Rivier University, NH, USA', year: '2017', color: '#4F46E5', bg: '#EEF2FF' },
            { degree: 'B.Tech, Electronics & Communication Engineering', school: 'JNTU, India', year: '2013', color: '#64748B', bg: '#F1F5F9' },
          ].map(({ degree, school, year, color, bg }) => (
            <div key={degree} style={{ background: bg, border: '1px solid #E2E8F0', borderRadius: '10px', padding: '18px 20px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color, fontWeight: '700', marginBottom: '6px' }}>{year}</div>
              <div style={{ fontWeight: '600', fontSize: '14px', color: '#0F172A', marginBottom: '4px', lineHeight: '1.4' }}>{degree}</div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>{school}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px 80px' }}>
        <div style={{ background: 'linear-gradient(135deg, #1E1B4B, #0C4A6E)', borderRadius: '20px', padding: '56px 48px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#A5B4FC', textTransform: 'uppercase', letterSpacing: '.16em', marginBottom: '16px' }}>Let's work together</div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: 'clamp(24px,3vw,38px)', letterSpacing: '-.02em', marginBottom: '16px', color: '#fff' }}>If you are building enterprise AI seriously, let's talk.</h2>
          <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.7', maxWidth: '52ch', margin: '0 auto 36px' }}>
            Whether you need someone to design the architecture, build the governance model, stand up the CoE, or just pressure-test your current approach — I have done all of it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a href="mailto:vinay.gangidi@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '10px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 20px rgba(99,102,241,0.5)' }}>
              <Mail size={16} /> vinay.gangidi@gmail.com
            </a>
            <a href="https://linkedin.com/in/vinaygangidi" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '10px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
              <Linkedin size={16} /> Connect on LinkedIn <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #E2E8F0', background: '#fff', padding: '32px 28px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={14} color="#fff" />
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: '15px', color: '#0F172A' }}>Vinay Gangidi</span>
          </div>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#94A3B8' }}>Enterprise AI & Automation Architect · Morrisville, NC</span>
          <a href="mailto:vinay.gangidi@gmail.com" style={{ fontSize: '13px', color: '#4F46E5', textDecoration: 'none', fontWeight: '600' }}>vinay.gangidi@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
