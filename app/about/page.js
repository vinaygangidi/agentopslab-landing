'use client';

import { useState } from 'react';
import { Zap, ArrowRight, Menu, X, Mail, Phone, Linkedin, Award, ChevronRight, ExternalLink, BookOpen, Layers, Shield, Brain, Play, DollarSign, AlertTriangle, FileCheck } from 'lucide-react';

const journey = [
  {
    period: '2012 - 2016',
    label: 'The foundation years',
    color: '#D97706',
    title: 'Learning to think in systems, not scripts',
    body: "I started as a software engineer writing test automation and RPA bots at banks and a tech startup in India. The work was tactical - automate a form here, validate a file there. But I noticed something early: the bots that lasted were the ones designed around the process, not the UI. The ones that broke constantly were trying to replicate human clicks, not human judgment. That lesson about designing at the right level of abstraction stayed with me through every role since.",
    tech: ['Selenium', 'Python', 'UiPath', 'Automation Anywhere', 'Power Automate'],
  },
  {
    period: '2016 - 2018',
    label: 'The consulting years',
    color: '#7C3AED',
    title: 'Breadth over depth: learning how many industries share the same problems',
    body: "Consulting pushed me into domains I would never have self-selected - insurance, manufacturing, logistics, retail - all within a two-year window. Every engagement started with \"we are unique\" and ended with the same root problems: data silos, manual handoffs, and processes that had never been questioned because they had always worked well enough. That pattern recognition - seeing what is universal underneath industry jargon - is one of the most transferable things I built during this period.",
    tech: ['UiPath', 'Blue Prism', 'SQL', 'Power BI', 'JIRA', 'Agile'],
  },
  {
    period: '2018 - 2020',
    label: 'The transformation years',
    color: '#0891B2',
    title: 'Where I learned what enterprise scale actually means',
    body: "A major global tech company brought me in to lead a Finance Transformation program that delivered 60+ automation initiatives across a global team. This is where I moved from building individual automations to building the framework that others used to build automations. I founded a Document Intelligence Center of Excellence, designed the governance model, and mentored 10+ engineers. We documented 20,000+ hours saved annually. More importantly, I learned that the humans in the loop matter as much as the technology.",
    tech: ['Azure Bot Framework', 'Power BI', 'Alteryx', 'SAP', 'Oracle', 'Python'],
  },
  {
    period: '2020 - Present',
    label: 'The AI architecture years',
    color: '#4F46E5',
    title: 'From automation to agentic AI - and what I learned building both',
    body: "The most important shift in my career happened around 2022 when I moved from orchestrating bots to orchestrating AI agents. I built LangChain-based agentic workflows on n8n for Accounts Receivable and HR, deployed GPT-4 document intelligence across the Procure-to-Pay cycle, and designed an AI governance framework that allowed us to scale responsibly. I also learned where the new failure modes live: an AI agent can return a confident, well-formed answer that is simply wrong for the situation - no error thrown, nothing in the logs.",
    tech: ['Azure AI Foundry', 'LangChain', 'GPT-4', 'n8n', 'Azure Document Intelligence', 'Snowflake', 'UiPath'],
  },
];

const positions = [
  {
    icon: Layers,
    color: '#0891B2',
    title: 'Connect the data first. Rules second. AI on top.',
    body: "The biggest mistake I see in enterprise AI programs is reaching for the AI layer before the data and rules layers are solid. L1 integration and L2 rules-based automation are not stepping stones you rush through. They are the foundation everything else sits on.",
  },
  {
    icon: Brain,
    color: '#4F46E5',
    title: 'The orchestration layer must be neutral and company-owned.',
    body: "Every major platform vendor now has a native AI agent - Agentforce, Joule, Cortex Agents. They are good inside their own walls. The layer that reasons across Finance, GTM, HR, and Legal cannot be owned by any one vendor. You must own it, built on open standards like MCP and A2A.",
  },
  {
    icon: Shield,
    color: '#7C3AED',
    title: 'Governance is the product. Not the constraint on the product.',
    body: "Semantic failure is the new class of production incident that most engineering teams have no playbook for. Standard monitoring tells you when a system is down. It does not tell you when an AI agent gave a confident wrong answer that a human acted on.",
  },
  {
    icon: BookOpen,
    color: '#059669',
    title: 'Measure hours returned to judgment work, not agents deployed.',
    body: "The metric that matters is: how many hours did we return to people to do the work that requires actual human judgment? That is the proof that AI did something. Everything else is theater.",
  },
];

const signatureWork = [
  {
    title: 'Built an enterprise AI & Automation Center of Excellence - team, governance, and first production agents',
    outcome: '$1M+ annual cost savings, 15,000+ productivity hours, 12-person global team across 4 countries',
    what: "Started with a mandate to 'do more with AI' and no team, no playbook, and no budget. Built the intake process, the governance model, the vendor evaluation framework, and the first five production agents. Grew the team to 12 engineers across the US, Canada, UK, and India.",
    color: '#4F46E5',
  },
  {
    title: 'Designed an enterprise AI Governance and Security Framework adopted across all business functions',
    outcome: 'Policy adopted enterprise-wide - standards, guardrails, and responsible AI use across all functions',
    what: "Partnered with Engineering and Security to define what responsible AI use looks like in a company where data governance and IP protection are non-negotiable. Covered model selection, data handling, output validation, audit requirements, and incident response for AI-specific failure modes.",
    color: '#7C3AED',
  },
  {
    title: 'Deployed LangChain agentic workflows on n8n - first production multi-step AI in Accounts Receivable and HR',
    outcome: 'First production agentic AI deployment - multi-step reasoning with human escalation paths',
    what: "Moved the team from single-call AI to multi-step agent workflows that could plan, use tools, and hand off to a human when confidence dropped below threshold. Built on n8n with LangChain for the reasoning layer. This became the reference architecture for all subsequent agent deployments.",
    color: '#0891B2',
  },
  {
    title: 'Founded a Document Intelligence Center of Excellence - 70% faster invoice, PO, and contract processing',
    outcome: '70% reduction in processing time across Finance - 3-day cycle to same-day automated review',
    what: "Founded the CoE, hired and mentored the team, and designed the platform architecture for document AI. Built on Azure Document Intelligence integrated with SAP and Oracle ERP. Reduced a 3-day manual review cycle to same-day automated processing with exception-only human review.",
    color: '#059669',
  },
];

// Platform skills with official brand colors
const platformGroups = [
  {
    label: 'Agentic AI',
    platforms: [
      { name: 'Microsoft AI Foundry',     color: '#0078D4', bg: 'rgba(0,120,212,0.10)',   border: 'rgba(0,120,212,0.28)',  desc: 'Central orchestration' },
      { name: 'Salesforce Agentforce',    color: '#00A1E0', bg: 'rgba(0,161,224,0.10)',   border: 'rgba(0,161,224,0.28)',  desc: 'CRM-native agents' },
      { name: 'Copilot Studio',           color: '#742774', bg: 'rgba(116,39,116,0.10)',  border: 'rgba(116,39,116,0.28)', desc: 'M365 automation' },
      { name: 'Claude / Anthropic',       color: '#D4A574', bg: 'rgba(212,165,116,0.10)', border: 'rgba(212,165,116,0.28)',desc: '6 agent specs' },
      { name: 'UiPath',                   color: '#FA4616', bg: 'rgba(250,70,22,0.10)',   border: 'rgba(250,70,22,0.28)',  desc: 'RPA + agentic' },
    ],
  },
  {
    label: 'Workflow & Automation',
    platforms: [
      { name: 'n8n',                      color: '#EA4B71', bg: 'rgba(234,75,113,0.10)',  border: 'rgba(234,75,113,0.28)', desc: '9 production agents' },
      { name: 'Python / CrewAI',          color: '#3776AB', bg: 'rgba(55,118,171,0.10)',  border: 'rgba(55,118,171,0.28)', desc: '30+ agents' },
      { name: 'Power Automate',           color: '#0066FF', bg: 'rgba(0,102,255,0.10)',   border: 'rgba(0,102,255,0.28)',  desc: 'M365 workflows' },
      { name: 'Azure OpenAI',             color: '#0078D4', bg: 'rgba(0,120,212,0.10)',   border: 'rgba(0,120,212,0.28)',  desc: 'GPT-4 / doc intel' },
    ],
  },
  {
    label: 'Data & ERP',
    platforms: [
      { name: 'Snowflake',                color: '#29B5E8', bg: 'rgba(41,181,232,0.10)',  border: 'rgba(41,181,232,0.28)', desc: 'Data fabric layer' },
      { name: 'SAP',                      color: '#0FAAFF', bg: 'rgba(15,170,255,0.10)',  border: 'rgba(15,170,255,0.28)', desc: 'Finance / HR ERP' },
      { name: 'Oracle',                   color: '#F80000', bg: 'rgba(248,0,0,0.10)',     border: 'rgba(248,0,0,0.28)',    desc: 'ERP / NetSuite' },
      { name: 'Power BI',                 color: '#F2C811', bg: 'rgba(242,200,17,0.10)',  border: 'rgba(242,200,17,0.28)', desc: 'Analytics / reporting' },
      { name: 'Alteryx',                  color: '#1F6EC2', bg: 'rgba(31,110,194,0.10)',  border: 'rgba(31,110,194,0.28)', desc: 'Data prep' },
    ],
  },
];

const featuredWork = [
  {
    icon: DollarSign,
    name: 'AP Invoice Processing',
    tag: '5-agent pipeline',
    desc: 'Extracts, validates, reconciles, and posts invoices end-to-end. Zero manual touchpoints for the routine 80%.',
    color: '#10B981',
    demoLink: '/demo/ap-invoice-processing',
    archLink: '/agentic-systems/ap-invoice-processing',
  },
  {
    icon: AlertTriangle,
    name: 'AP Exception Resolution',
    tag: '6-agent pipeline',
    desc: 'Resolves the 20-30% of invoices that fail automated matching - fraud detection, tolerance policies, audit trail.',
    color: '#F59E0B',
    demoLink: '/demo/ap-exception-resolution',
    archLink: '/agentic-systems/ap-exception-resolution',
  },
  {
    icon: FileCheck,
    name: 'NDA Review',
    tag: '5-agent pipeline',
    desc: 'Reviews NDAs against a legal playbook, scores every clause for risk, produces a structured memo in 6 minutes.',
    color: '#818CF8',
    demoLink: '/demo/nda-review',
    archLink: '/agentic-systems/nda-review',
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openWork, setOpenWork] = useState(null);

  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: 'var(--bg-base)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      <style jsx>{`
        .work-card { transition: all 0.2s; cursor: pointer; }
        .work-card:hover { box-shadow: 0 6px 32px rgba(0,0,0,0.4) !important; border-color: var(--border-strong) !important; }
        .platform-pill { transition: all 0.18s; }
        .platform-pill:hover { transform: translateY(-2px); }
        .featured-card { transition: all 0.22s; }
        .featured-card:hover { transform: translateY(-3px); }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-row { grid-template-columns: repeat(2,1fr) !important; }
          .positions-grid { grid-template-columns: 1fr !important; }
          .featured-grid { grid-template-columns: 1fr !important; }
          .photo-hero { width: 200px !important; height: 220px !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="vg-nav">
        <div className="vg-nav-inner">
          <a href="/" className="vg-logo">
            <div className="vg-logo-icon"><Zap size={16} color="#fff" /></div>
            <span className="vg-logo-text">AgentOpsLab</span>
          </a>
          <div className="nav-desktop vg-nav-links" style={{ display: 'flex' }}>
            <a href="/" className="vg-nav-link">Agents</a>
            <a href="/playbook" className="vg-nav-link">Agentic Playbook</a>
            <a href="/about" className="vg-nav-link active">About</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="mailto:vinay.gangidi@gmail.com" className="nav-desktop vg-btn-primary">
              Get in Touch <ArrowRight size={13} />
            </a>
            <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '8px', color: 'var(--text-primary)', cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center' }}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu vg-mobile-menu">
            {[['Agents', '/'], ['Agentic Playbook', '/playbook'], ['About', '/about']].map(([l, h]) => (
              <a key={l} href={h} onClick={() => setMenuOpen(false)} className="vg-nav-link" style={{ fontSize: '16px' }}>{l}</a>
            ))}
            <a href="mailto:vinay.gangidi@gmail.com" className="vg-btn-primary" style={{ justifyContent: 'center' }}>
              Get in Touch <ArrowRight size={15} />
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 28px 56px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '64px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div className="photo-hero" style={{ width: '280px', height: '320px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(79,70,229,0.18), 0 4px 16px rgba(0,0,0,0.10)', border: '4px solid var(--bg-raised)' }}>
              <img src="/vinay.jpeg" alt="Vinay Gangidi" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div style={{ fontWeight: '800', fontSize: '17px', color: 'var(--text-primary)', marginBottom: '3px' }}>Vinay Gangidi</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '14px' }}>Morrisville, NC · Open to advisory roles</div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
                <a href="https://linkedin.com/in/vinaygangidi" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 14px', background: 'rgba(0,119,181,0.15)', border: '1px solid rgba(0,119,181,0.35)', color: '#0A66C2', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none' }}>
                  <Linkedin size={13} /> LinkedIn
                </a>
                <a href="mailto:vinay.gangidi@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 14px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none' }}>
                  <Mail size={13} /> Email
                </a>
              </div>
              <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px' }}>
                {[
                  { val: '$1M+', label: 'Annual savings delivered', color: '#4ADE80' },
                  { val: '15K+', label: 'Productivity hours saved',  color: '#22D3EE' },
                  { val: '100+', label: 'Automations built',         color: '#818CF8' },
                  { val: '15+',  label: 'AI solutions shipped',      color: '#F59E0B' },
                ].map(({ val, label, color }) => (
                  <div key={label} style={{ background: color + '12', border: '1px solid ' + color + '30', borderRadius: '10px', padding: '14px 10px', textAlign: 'center' }}>
                    <div style={{ fontWeight: '800', fontSize: '22px', color, marginBottom: '3px', lineHeight: 1 }}>{val}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.07em', lineHeight: '1.4' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--green)', background: 'var(--green-subtle)', border: '1px solid var(--green-border)', padding: '5px 12px', borderRadius: '100px', marginBottom: '20px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
                AI Architect · Practitioner · Thought Leader
              </div>
              <h1 style={{ fontWeight: '800', fontSize: 'clamp(34px,4vw,52px)', lineHeight: '1.06', letterSpacing: '-.025em', marginBottom: '16px' }}>
                I turn enterprise AI<br />from idea to production.
              </h1>
              <p style={{ fontWeight: '600', fontSize: '16px', color: 'var(--accent-bright)', lineHeight: '1.5', marginBottom: '16px' }}>
                I design AI systems that actually ship - and the governance frameworks that keep them running safely at scale. AgentOpsLab is where that work lives.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.8', marginBottom: '14px' }}>
                Most AI programs fail not because the technology is wrong, but because the architecture underneath it is not ready. I have spent 14 years building that architecture - connecting data, automating the rules layer, and then putting AI on top in the right sequence, at the right pace, with the governance to sustain it.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.8', marginBottom: '20px' }}>
                Built and led a global 12-person AI Center of Excellence. 15+ AI systems in production across Finance, HR, GTM, Legal, and Operations. $1M+ in annual savings. 15,000+ productivity hours returned to people for higher-value work.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a href="mailto:vinay.gangidi@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '11px 22px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '9px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 14px rgba(99,102,241,0.3)' }}>
                  <Mail size={14} /> vinay.gangidi@gmail.com
                </a>
                <a href="tel:+15167075282" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '11px 22px', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', color: 'var(--text-primary)', borderRadius: '9px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                  <Phone size={14} /> +1 516-707-5282
                </a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '12px', padding: '18px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '10px' }}>Current role</div>
                <div style={{ fontWeight: '700', fontSize: '14px', marginBottom: '3px' }}>Synopsys, Inc</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '8px' }}>Senior Manager, Enterprise Solution Architect (Automation & AI)</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>Oct 2020 - Present</div>
              </div>
              <div style={{ background: 'var(--bg-base)', border: '1px solid var(--border-default)', borderRadius: '12px', padding: '18px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '10px' }}>Available for</div>
                {['Advisory engagements', 'Speaking and panels', 'Leadership roles', 'AI strategy consulting'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '4px 0' }}>
                    <ChevronRight size={11} color="var(--accent-bright)" />
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM SKILLS ── */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '56px 28px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bright)', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '8px', fontWeight: '700' }}>Platform skills</div>
          <h2 style={{ fontWeight: '800', fontSize: 'clamp(22px,3vw,32px)', letterSpacing: '-.02em', marginBottom: '36px' }}>Built on the platforms enterprises actually run.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {platformGroups.map(group => (
              <div key={group.label}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: '700', marginBottom: '12px' }}>{group.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {group.platforms.map(p => (
                    <div key={p.name} className="platform-pill" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 14px', background: p.bg, border: `1px solid ${p.border}`, borderRadius: '10px', cursor: 'default' }}>
                      {/* Color dot as brand indicator */}
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: p.color, lineHeight: 1 }}>{p.name}</div>
                        <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK (live demos) ── */}
      <section style={{ padding: '56px 28px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '8px', fontWeight: '700' }}>Live demos</div>
              <h2 style={{ fontWeight: '800', fontSize: 'clamp(22px,3vw,32px)', letterSpacing: '-.02em' }}>Multi-agent systems, running today.</h2>
            </div>
            <a href="/solutions" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', color: 'var(--accent-bright)', textDecoration: 'none', flexShrink: 0 }}>
              All agents <ArrowRight size={13} />
            </a>
          </div>
          <div className="featured-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {featuredWork.map(item => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="featured-card" style={{ background: 'var(--bg-surface)', border: `1px solid ${item.color}28`, borderRadius: '14px', padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '11px', background: `${item.color}18`, border: `1px solid ${item.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} color={item.color} />
                    </div>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--green)', background: 'var(--green-subtle)', border: '1px solid var(--green-border)', borderRadius: '100px', padding: '3px 8px', fontFamily: 'var(--font-mono)' }}>LIVE</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: item.color, fontWeight: '700', marginBottom: '6px', letterSpacing: '.04em', textTransform: 'uppercase' }}>{item.tag}</div>
                  <h3 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-.01em' }}>{item.name}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '18px' }}>{item.desc}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a href={item.demoLink} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '8px 12px', background: `${item.color}18`, border: `1px solid ${item.color}35`, borderRadius: '8px', fontSize: '12px', fontWeight: '700', color: item.color, textDecoration: 'none' }}>
                      <Play size={11} /> Demo
                    </a>
                    <a href={item.archLink} style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '8px 12px', background: 'var(--bg-raised)', border: '1px solid var(--border-default)', borderRadius: '8px', fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                      Arch <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE JOURNEY ── */}
      <section style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)', padding: '72px 28px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bright)', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '12px', fontWeight: '700' }}>The journey</div>
          <h2 style={{ fontWeight: '800', fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-.02em', marginBottom: '12px' }}>A progression of thinking, not a timeline of jobs.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', maxWidth: '60ch', marginBottom: '48px' }}>Each chapter taught me something the previous one could not. The technical depth came first. The strategic thinking came from applying it at scale and watching what broke.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {journey.map((chapter, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '32px', paddingBottom: idx < journey.length - 1 ? '48px' : '0', borderBottom: idx < journey.length - 1 ? '1px dashed var(--border-subtle)' : 'none', marginBottom: idx < journey.length - 1 ? '48px' : '0' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: chapter.color, fontWeight: '700', marginBottom: '6px' }}>{chapter.period}</div>
                  <div style={{ display: 'inline-block', padding: '4px 10px', background: chapter.color + '18', border: `1px solid ${chapter.color}40`, borderRadius: '100px', fontSize: '11px', color: chapter.color, fontWeight: '600', marginBottom: '16px' }}>{chapter.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {chapter.tech.map(t => (
                      <span key={t} style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'var(--bg-base)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '2px 8px' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontWeight: '700', fontSize: '17px', color: 'var(--text-primary)', marginBottom: '12px', lineHeight: '1.4' }}>{chapter.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8' }}>{chapter.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THOUGHT LEADERSHIP ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 28px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bright)', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '12px', fontWeight: '700' }}>Thought leadership</div>
        <h2 style={{ fontWeight: '800', fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-.02em', marginBottom: '12px' }}>Positions I hold on enterprise AI.</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', maxWidth: '60ch', marginBottom: '40px' }}>These are not opinions I picked up from reading. They came from shipping real systems, watching what failed, and figuring out why.</p>
        <div className="positions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', marginBottom: '28px' }}>
          {positions.map(({ icon: Icon, color, title, body }) => (
            <div key={title} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '14px', padding: '24px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: color + '18', border: '1px solid ' + color + '35', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                <Icon size={18} color={color} />
              </div>
              <h3 style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '10px', lineHeight: '1.4' }}>{title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.75' }}>{body}</p>
            </div>
          ))}
        </div>
        <div style={{ background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)', borderRadius: '14px', padding: '24px 28px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-bright)', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: '6px' }}>Published strategy</div>
            <div style={{ fontWeight: '700', fontSize: '16px', color: 'var(--text-primary)' }}>Enterprise AI Strategy: Architecture Reference</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>Full architecture diagram, platform strategy, design principles, and phased roadmap.</div>
          </div>
          <a href="https://vinay-portfolio-wine.vercel.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: 'var(--accent)', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none', flexShrink: 0 }}>
            Read the strategy <ArrowRight size={13} />
          </a>
        </div>
      </section>

      {/* ── SIGNATURE WORK ── */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '72px 28px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bright)', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '12px', fontWeight: '700' }}>Signature work</div>
          <h2 style={{ fontWeight: '800', fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-.02em', marginBottom: '12px' }}>Four things I am most proud of building.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', maxWidth: '60ch', marginBottom: '40px' }}>Not a list of every project. The ones that required the most thinking, shaped how I work, and produced the most durable outcomes.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {signatureWork.map((work, idx) => (
              <div key={idx} className="work-card" style={{ border: `1px solid ${openWork === idx ? work.color + '50' : 'var(--border-default)'}`, borderRadius: '14px', overflow: 'hidden', background: openWork === idx ? work.color + '0D' : 'var(--bg-base)' }} onClick={() => setOpenWork(openWork === idx ? null : idx)}>
                <div style={{ padding: '22px 24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: work.color + '18', border: `1px solid ${work.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-mono)', fontWeight: '700', fontSize: '12px', color: work.color }}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: '600', fontSize: '15px', color: 'var(--text-primary)', lineHeight: '1.4', marginBottom: '6px' }}>{work.title}</h3>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px', background: work.color + '15', border: `1px solid ${work.color}35`, borderRadius: '100px', fontSize: '11px', color: work.color, fontWeight: '500' }}>
                      <Award size={10} /> {work.outcome}
                    </div>
                  </div>
                  <ChevronRight size={15} color={openWork === idx ? work.color : 'var(--text-muted)'} style={{ flexShrink: 0, marginTop: '4px', transform: openWork === idx ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </div>
                {openWork === idx && (
                  <div style={{ padding: '0 24px 24px', borderTop: `1px solid ${work.color}30` }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.8', marginTop: '18px' }}>{work.what}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 28px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-bright)', textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: '12px', fontWeight: '700' }}>Credentials</div>
        <h2 style={{ fontWeight: '800', fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-.02em', marginBottom: '32px' }}>Certifications & education</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px', marginBottom: '28px' }}>
          {[
            { name: 'Microsoft AI Business Solution Architect', cat: 'AI & Architecture',    color: '#0078D4' },
            { name: 'Microsoft Azure AI Associate Engineer',    cat: 'AI & Cloud',            color: '#0078D4' },
            { name: 'Salesforce Agentforce Specialist',        cat: 'Agentic AI',            color: '#00A1E0' },
            { name: 'n8n Certified Automation Expert',         cat: 'Workflow Automation',   color: '#EA4B71' },
            { name: 'PMP - Project Management Professional',   cat: 'Leadership',            color: '#059669' },
            { name: 'Lean Six Sigma',                          cat: 'Process Excellence',    color: '#059669' },
            { name: 'Microsoft Power BI Data Analyst',         cat: 'Data & Analytics',      color: '#F2C811' },
            { name: 'CDMP - Certified Data Management Pro',    cat: 'Data & Analytics',      color: '#0891B2' },
            { name: 'UiPath Agentic Automation Engineer',      cat: 'Agentic AI',            color: '#FA4616' },
          ].map(({ name, cat, color }) => (
            <div key={name} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '10px', padding: '14px 16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: '600', fontSize: '13px', color: 'var(--text-primary)', lineHeight: '1.3', marginBottom: '2px' }}>{name}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color, textTransform: 'uppercase', letterSpacing: '.08em' }}>{cat}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
          {[
            { degree: 'Digital Transformation with Disruptive Technologies', school: 'MIT Professional Education', year: '2023', color: '#D97706' },
            { degree: 'M.S., Computer Information Systems',                   school: 'Rivier University, NH, USA', year: '2017', color: '#818CF8' },
            { degree: 'B.Tech, Electronics & Communication Engineering',      school: 'JNTU, India',               year: '2013', color: 'var(--text-muted)' },
          ].map(({ degree, school, year, color }) => (
            <div key={degree} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: '10px', padding: '18px 20px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color, fontWeight: '700', marginBottom: '6px' }}>{year}</div>
              <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text-primary)', marginBottom: '4px', lineHeight: '1.4' }}>{degree}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{school}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px 72px' }}>
        <div style={{ background: 'linear-gradient(135deg, #1E1B4B, #0C4A6E)', borderRadius: '20px', padding: '56px 48px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#A5B4FC', textTransform: 'uppercase', letterSpacing: '.16em', marginBottom: '16px' }}>Let's work together</div>
          <h2 style={{ fontWeight: '800', fontSize: 'clamp(24px,3vw,36px)', letterSpacing: '-.02em', marginBottom: '16px', color: '#fff' }}>If you are building enterprise AI seriously, let's talk.</h2>
          <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.7', maxWidth: '52ch', margin: '0 auto 32px' }}>
            Whether you need someone to design the architecture, build the governance model, stand up the CoE, or just pressure-test your current approach - I have done all of it.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a href="mailto:vinay.gangidi@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', borderRadius: '10px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 20px rgba(99,102,241,0.5)' }}>
              <Mail size={16} /> vinay.gangidi@gmail.com
            </a>
            <a href="https://linkedin.com/in/vinaygangidi" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '10px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
              <Linkedin size={16} /> Connect on LinkedIn <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)', padding: '32px 28px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={14} color="#fff" />
            </div>
            <span style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)' }}>AgentOpsLab</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {[['AI Agents', '/solutions'], ['Agentic Playbook', '/playbook'], ['Get in Touch', 'mailto:vinay.gangidi@gmail.com']].map(([l, h]) => (
              <a key={l} href={h} style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)' }}>Enterprise AI Architect · Morrisville, NC</span>
        </div>
      </footer>
    </div>
  );
}
