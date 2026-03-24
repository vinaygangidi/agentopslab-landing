'use client';

import { Zap, Mail, Users, Building2, TrendingUp, FileText, ArrowRight, CheckCircle2, Target, Shield, DollarSign, BarChart3, AlertTriangle, Search, MessageSquare, ExternalLink, UserCheck, Award, Clock, Briefcase, Scale, FileCheck, AlertCircle, Github, BookOpen, Code, Activity } from 'lucide-react';

export default function AgentOpsLab() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
        }
        
        body { 
          font-family: 'Inter', sans-serif; 
          background: #0a0a0a; 
          color: #fff; 
          overflow-x: hidden;
        }
        
        .agent-card {
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }
        
        .agent-card:hover {
          transform: translateY(-4px);
          border-color: rgba(59, 130, 246, 0.5) !important;
        }
        
        /* Grid Systems */
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        
        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        
        /* Typography - Using clamp for fluid scaling */
        .hero-title {
          font-size: clamp(36px, 8vw, 72px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 28px;
          background: linear-gradient(to right, #fff, #a3a3a3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .section-heading {
          font-size: clamp(32px, 6vw, 48px);
          font-weight: 800;
        }
        
        .hero-description {
          font-size: clamp(16px, 3.5vw, 22px);
          line-height: 1.6;
        }
        
        .section-description {
          font-size: clamp(15px, 3vw, 18px);
        }

        /* Educational Banner */
        .educational-banner {
          background: linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%);
          padding: 12px 0;
          text-align: center;
          border-bottom: 2px solid #60a5fa;
        }
        
        /* Small phones (< 375px) - Very compact */
        @media (max-width: 374px) {
          .grid-3, .grid-4 {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .nav-container {
            padding: 0 16px !important;
          }
          
          .nav-button {
            padding: 8px 16px !important;
            font-size: 13px !important;
          }
          
          .logo-text {
            font-size: 20px !important;
          }
          
          .hero-badge {
            font-size: 11px !important;
            padding: 6px 14px !important;
          }
          
          .section-padding {
            padding: 50px 16px !important;
          }
          
          .stat-card {
            padding: 28px 20px !important;
          }
          
          .stat-number {
            font-size: 36px !important;
          }
          
          .agent-card {
            padding: 24px !important;
          }
          
          .agent-icon {
            width: 48px !important;
            height: 48px !important;
          }
          
          .cta-button {
            padding: 14px 24px !important;
            font-size: 15px !important;
          }
          
          .cta-section-padding {
            padding: 48px 24px !important;
          }

          .educational-banner {
            font-size: 11px;
            padding: 10px 12px;
          }

          .hero-buttons {
            flex-direction: column !important;
            width: 100%;
          }

          .hero-buttons a {
            width: 100%;
            justify-content: center !important;
          }
        }
        
        /* Standard phones (375px - 428px) - Most common */
        @media (min-width: 375px) and (max-width: 428px) {
          .grid-3, .grid-4 {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .nav-container {
            padding: 0 20px !important;
          }
          
          .nav-button {
            padding: 10px 20px !important;
            font-size: 14px !important;
          }
          
          .logo-text {
            font-size: 22px !important;
          }
          
          .hero-badge {
            font-size: 12px !important;
            padding: 6px 16px !important;
          }
          
          .section-padding {
            padding: 60px 20px !important;
          }
          
          .stat-card {
            padding: 32px 24px !important;
          }
          
          .stat-number {
            font-size: 40px !important;
          }
          
          .agent-card {
            padding: 28px !important;
          }
          
          .agent-icon {
            width: 52px !important;
            height: 52px !important;
          }
          
          .cta-button {
            padding: 16px 28px !important;
            font-size: 16px !important;
          }
          
          .cta-section-padding {
            padding: 56px 32px !important;
          }

          .educational-banner {
            font-size: 12px;
            padding: 10px;
          }

          .hero-buttons {
            flex-direction: column !important;
            width: 100%;
          }

          .hero-buttons a {
            width: 100%;
            justify-content: center !important;
          }
        }
        
        /* Large phones (429px - 768px) */
        @media (min-width: 429px) and (max-width: 768px) {
          .grid-3, .grid-4 {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .nav-container {
            padding: 0 24px !important;
          }
          
          .nav-button {
            padding: 12px 24px !important;
            font-size: 15px !important;
          }
          
          .logo-text {
            font-size: 24px !important;
          }
          
          .hero-badge {
            font-size: 13px !important;
            padding: 7px 18px !important;
          }
          
          .section-padding {
            padding: 70px 24px !important;
          }
          
          .stat-card {
            padding: 36px 28px !important;
          }
          
          .stat-number {
            font-size: 44px !important;
          }
          
          .agent-card {
            padding: 30px !important;
          }
          
          .agent-icon {
            width: 56px !important;
            height: 56px !important;
          }
          
          .cta-button {
            padding: 17px 32px !important;
            font-size: 17px !important;
          }
          
          .cta-section-padding {
            padding: 60px 40px !important;
          }

          .educational-banner {
            font-size: 13px;
          }

          .hero-buttons {
            flex-wrap: wrap;
          }
        }
        
        /* Tablets (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-3 {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          
          .grid-4 {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
          
          .section-padding {
            padding: 80px 32px !important;
          }
          
          .stat-card {
            padding: 38px 30px !important;
          }
          
          .agent-card {
            padding: 32px !important;
          }
        }
        
        /* Desktop (> 1024px) */
        @media (min-width: 1025px) {
          .grid-3 {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .grid-4 {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      {/* Educational Banner */}
      <div className="educational-banner">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', padding: '0 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={18} color="#60a5fa" />
            <span style={{ fontSize: '14px', fontWeight: '600' }}>Educational Portfolio Project</span>
          </div>
          <span style={{ fontSize: '14px', color: '#93c5fd', display: 'none' }} className="banner-separator">|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code size={18} color="#60a5fa" />
            <span style={{ fontSize: '14px' }}>Open Source & Developer-Friendly</span>
          </div>
          <span style={{ fontSize: '14px', color: '#93c5fd', display: 'none' }} className="banner-separator">|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Github size={18} color="#60a5fa" />
            <a href="https://github.com/vinaygangidi/AgentOpsLab" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: '#60a5fa', textDecoration: 'none', fontWeight: '600' }}>
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.1)', zIndex: 50 }}>
        <div className="nav-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}>
              <Zap size={24} color="white" />
            </div>
            <span className="logo-text" style={{ fontSize: '24px', fontWeight: '700' }}>AgentOpsLab</span>
          </div>
          <a href="https://github.com/vinaygangidi/AgentOpsLab" target="_blank" rel="noopener noreferrer" className="nav-button" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', borderRadius: '10px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}>
            <Github size={18} />
            <span style={{ display: 'inline' }} className="nav-button-text">Explore Code</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, rgba(10, 10, 10, 0) 100%)', padding: '120px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="hero-badge" style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '100px', fontSize: '14px', fontWeight: '600', color: '#60a5fa', marginBottom: '32px' }}>
            Learning resource for developers
          </div>
          <h1 className="hero-title">
            Build Enterprise AI Agents
          </h1>
          <p className="hero-description" style={{ color: '#a3a3a3', marginBottom: '48px', maxWidth: '850px', margin: '0 auto 48px' }}>
            Open-source portfolio demonstrating how to rapidly build production-ready AI automation with Claude Sonnet 4. 33+ example agents across Sales, Revenue, Finance, HR, and Legal operations. Built for learning and showcasing enterprise AI capabilities.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/vinaygangidi/AgentOpsLab" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 36px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)' }}>
              <Github size={22} />
              View Source Code
              <ArrowRight size={22} />
            </a>
            <a href="/governance" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 36px', background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)' }}>
              <Activity size={22} />
              View Governance Dashboard
              <ArrowRight size={22} />
            </a>
            <a href="#agents" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 36px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '600', textDecoration: 'none' }}>
              Explore Agents
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ padding: '100px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading" style={{ marginBottom: '64px' }}>Example capabilities showcase</h2>
          <div className="grid-4">
            {[
              { value: '33+', label: 'Example AI Agents', sublabel: 'Production-ready code' },
              { value: '5', label: 'Categories', sublabel: 'Sales, Revenue, Finance, HR, Legal' },
              { value: '100%', label: 'Open Source', sublabel: 'MIT License' },
              { value: 'Python', label: 'Claude Sonnet 4', sublabel: 'HubSpot integration' }
            ].map((stat, idx) => (
              <div key={idx} className="stat-card" style={{ padding: '40px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px' }}>
                <div className="stat-number" style={{ fontSize: '48px', fontWeight: '800', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '12px' }}>{stat.value}</div>
                <div style={{ fontWeight: '600', marginBottom: '4px', color: '#fff', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>{stat.label}</div>
                <div style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#737373' }}>{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Operations */}
      <section id="agents" className="section-padding" style={{ padding: '100px 32px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '100px', fontSize: 'clamp(11px, 2vw, 13px)', fontWeight: '600', color: '#60a5fa', marginBottom: '16px' }}>
              SALES OPERATIONS
            </div>
            <h2 className="section-heading" style={{ marginBottom: '16px' }}>CRM & Sales Agents</h2>
            <p className="section-description" style={{ color: '#a3a3a3' }}>Agents that eliminate manual CRM work and accelerate your sales pipeline</p>
          </div>
          <div className="grid-3">
            {[
              { icon: Mail, name: 'Email Intelligence', desc: 'Extract contacts, companies, deals from emails', tag: '95%+ accuracy', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/email_intelligence_agent.py' },
              { icon: Zap, name: 'Pipeline Orchestrator', desc: 'End-to-end automation with custom workflows', tag: 'Zero touch', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/pipeline_orchestrator_agent.py' },
              { icon: Users, name: 'Contact Creator', desc: 'AI-powered contact enrichment & validation', tag: 'Auto-enrich', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/contact_creator_agent.py' },
              { icon: Building2, name: 'Account Creator', desc: 'Company data with firmographics & technographics', tag: 'Smart classify', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/account_creator_agent.py' },
              { icon: TrendingUp, name: 'Deal Intelligence', desc: 'Predictive scoring & close date forecasting', tag: '20% better', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/deal_creator_agent.py' },
              { icon: FileText, name: 'CPQ Agent', desc: 'Complete quote-to-cash with pricing rules', tag: 'Zero errors', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/quote_cpq_agent.py' }
            ].map((agent, idx) => {
              const Icon = agent.icon;
              return (
                <a key={idx} href={agent.github} target="_blank" rel="noopener noreferrer" className="agent-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                    <div className="agent-icon" style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}>
                      <Icon size={28} color="white" />
                    </div>
                    <ExternalLink size={18} color="#60a5fa" style={{ opacity: 0.6 }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: '700', marginBottom: '8px' }}>{agent.name}</h3>
                  <p style={{ fontSize: 'clamp(13px, 2.5vw, 14px)', color: '#a3a3a3', marginBottom: '16px', lineHeight: '1.5' }}>{agent.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} color="#10b981" />
                    <span style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#10b981', fontWeight: '600' }}>{agent.tag}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Revenue Operations */}
      <section className="section-padding" style={{ padding: '100px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '100px', fontSize: 'clamp(11px, 2vw, 13px)', fontWeight: '600', color: '#a78bfa', marginBottom: '16px' }}>
              REVENUE OPERATIONS
            </div>
            <h2 className="section-heading" style={{ marginBottom: '16px' }}>RevOps Intelligence</h2>
            <p className="section-description" style={{ color: '#a3a3a3' }}>Agents that optimize revenue, reduce churn, and maximize win rates</p>
          </div>
          <div className="grid-3">
            {[
              { icon: AlertTriangle, name: 'Churn Detector', desc: 'Predict customer churn before it happens', tag: 'Early warning', github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/churn-detector.md' },
              { icon: Search, name: 'Competitive Intel', desc: 'Track competitors and market positioning', tag: 'Real-time', github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/competitive-intel.md' },
              { icon: Target, name: 'Deal Risk Assessor', desc: 'Identify at-risk deals with AI scoring', tag: 'Proactive', github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/deal-risk-assessor.md' },
              { icon: BarChart3, name: 'ICP Analyst', desc: 'Analyze and segment ideal customer profiles', tag: 'Data-driven', github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/icp-analyst.md' },
              { icon: MessageSquare, name: 'Objection Mapper', desc: 'Map common objections and win strategies', tag: 'Win more', github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/objection-mapper.md' },
              { icon: TrendingUp, name: 'Win-Loss Analyst', desc: 'Deep analysis of why deals close or lost', tag: 'Insights', github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/win-loss-analyst.md' }
            ].map((agent, idx) => {
              const Icon = agent.icon;
              return (
                <a key={idx} href={agent.github} target="_blank" rel="noopener noreferrer" className="agent-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                    <div className="agent-icon" style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}>
                      <Icon size={28} color="white" />
                    </div>
                    <ExternalLink size={18} color="#a78bfa" style={{ opacity: 0.6 }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: '700', marginBottom: '8px' }}>{agent.name}</h3>
                  <p style={{ fontSize: 'clamp(13px, 2.5vw, 14px)', color: '#a3a3a3', marginBottom: '16px', lineHeight: '1.5' }}>{agent.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} color="#a78bfa" />
                    <span style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#a78bfa', fontWeight: '600' }}>{agent.tag}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Operations */}
      <section className="section-padding" style={{ padding: '100px 32px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '100px', fontSize: 'clamp(11px, 2vw, 13px)', fontWeight: '600', color: '#34d399', marginBottom: '16px' }}>
              ENTERPRISE OPERATIONS
            </div>
            <h2 className="section-heading" style={{ marginBottom: '16px' }}>Finance & GTM Agents</h2>
            <p className="section-description" style={{ color: '#a3a3a3' }}>Agents for go-to-market strategy, financial operations, and ERP workflows</p>
          </div>
          <div className="grid-3">
            {[
              { icon: Target, name: 'GTM Account 360 Copilot', desc: 'Complete account intelligence & insights', tag: '360° view', github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/gtm/gtm-account-360-copilot.json' },
              { icon: BarChart3, name: 'ICP Segmentation', desc: 'Advanced customer segmentation analysis', tag: 'Precision', github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/gtm/gtm-icp-segmentation-analysis.json' },
              { icon: TrendingUp, name: 'GTM Win-Loss Analysis', desc: 'Go-to-market performance analytics', tag: 'Strategic', github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/gtm/gtm-win-loss-analysis.json' },
              { icon: DollarSign, name: 'Cash Reconciliation', desc: 'Automated cash flow reconciliation', tag: 'Accurate', github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/cash_reconciliation_agent.json' },
              { icon: Shield, name: 'ERP Copilot', desc: 'Intelligent ERP system assistant', tag: 'Smart', github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/erp_copilot_agent.json' },
              { icon: FileText, name: 'ERP Customer Orders', desc: 'Automated order processing & tracking', tag: 'Fast', github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/erp_customer_orders_agent.json' },
              { icon: DollarSign, name: 'Tax Agent', desc: 'Automated tax calculation & compliance', tag: 'Compliant', github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/tax_agent.json' },
              { icon: AlertTriangle, name: 'Loan Fraud Detection', desc: 'AI-powered fraud detection for loans', tag: 'Secure', github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/loan-origination/loan_fraud_detection_agent.json' },
              { icon: Shield, name: 'Loan Underwriting', desc: 'Automated loan risk assessment', tag: 'Fast approval', github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/loan-origination/loan_underwriting_agent.json' }
            ].map((agent, idx) => {
              const Icon = agent.icon;
              return (
                <a key={idx} href={agent.github} target="_blank" rel="noopener noreferrer" className="agent-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                    <div className="agent-icon" style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}>
                      <Icon size={28} color="white" />
                    </div>
                    <ExternalLink size={18} color="#34d399" style={{ opacity: 0.6 }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: '700', marginBottom: '8px' }}>{agent.name}</h3>
                  <p style={{ fontSize: 'clamp(13px, 2.5vw, 14px)', color: '#a3a3a3', marginBottom: '16px', lineHeight: '1.5' }}>{agent.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} color="#34d399" />
                    <span style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#34d399', fontWeight: '600' }}>{agent.tag}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* HR Operations */}
      <section className="section-padding" style={{ padding: '100px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '100px', fontSize: 'clamp(11px, 2vw, 13px)', fontWeight: '600', color: '#fbbf24', marginBottom: '16px' }}>
              HR OPERATIONS
            </div>
            <h2 className="section-heading" style={{ marginBottom: '16px' }}>Talent & Workforce Management</h2>
            <p className="section-description" style={{ color: '#a3a3a3' }}>Agents that automate recruiting, onboarding, performance, and compliance</p>
          </div>
          <div className="grid-3">
            {[
              { icon: UserCheck, name: 'Resume Screening', desc: 'AI-powered candidate evaluation and scoring', tag: '95%+ accuracy', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/resume_screening_agent.py' },
              { icon: Briefcase, name: 'Onboarding Workflow', desc: 'Automated new hire onboarding orchestration', tag: 'Zero touch', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/onboarding_workflow_agent.py' },
              { icon: Award, name: 'Performance Review Analyzer', desc: 'Analyze reviews and identify trends', tag: 'Data-driven', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/performance_review_analyzer.py' },
              { icon: Users, name: 'Employee Offboarding', desc: 'Streamline employee exit processes', tag: 'Compliant', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/employee_offboarding_agent.py' },
              { icon: Shield, name: 'Benefits Enrollment', desc: 'AI-powered benefits guidance', tag: 'Personalized', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/benefits_enrollment_assistant.py' },
              { icon: Clock, name: 'Training Compliance', desc: 'Monitor and manage training requirements', tag: 'Automated', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/training_compliance_tracker.py' }
            ].map((agent, idx) => {
              const Icon = agent.icon;
              return (
                <a key={idx} href={agent.github} target="_blank" rel="noopener noreferrer" className="agent-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                    <div className="agent-icon" style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}>
                      <Icon size={28} color="white" />
                    </div>
                    <ExternalLink size={18} color="#fbbf24" style={{ opacity: 0.6 }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: '700', marginBottom: '8px' }}>{agent.name}</h3>
                  <p style={{ fontSize: 'clamp(13px, 2.5vw, 14px)', color: '#a3a3a3', marginBottom: '16px', lineHeight: '1.5' }}>{agent.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} color="#fbbf24" />
                    <span style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#fbbf24', fontWeight: '600' }}>{agent.tag}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Operations */}
      <section className="section-padding" style={{ padding: '100px 32px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '100px', fontSize: 'clamp(11px, 2vw, 13px)', fontWeight: '600', color: '#818cf8', marginBottom: '16px' }}>
              LEGAL OPERATIONS
            </div>
            <h2 className="section-heading" style={{ marginBottom: '16px' }}>Contract & Compliance Agents</h2>
            <p className="section-description" style={{ color: '#a3a3a3' }}>Agents for contract review, compliance checking, and legal research</p>
          </div>
          <div className="grid-3">
            {[
              { icon: FileCheck, name: 'Contract Review', desc: 'Automated legal contract analysis', tag: 'Risk assessment', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/contract_review_agent.py' },
              { icon: FileText, name: 'NDA Generator', desc: 'Generate custom NDAs automatically', tag: 'Compliant', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/nda_generator_agent.py' },
              { icon: AlertCircle, name: 'Contract Risk Analyzer', desc: 'Score and analyze contract risk levels', tag: 'Multi-dimensional', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/contract_risk_analyzer.py' },
              { icon: Scale, name: 'Document Classifier', desc: 'Automatically classify legal documents', tag: 'Smart routing', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/legal_document_classifier.py' },
              { icon: Shield, name: 'Compliance Checker', desc: 'Verify regulatory compliance (GDPR, CCPA)', tag: 'Regulatory', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/compliance_checker_agent.py' },
              { icon: Search, name: 'Legal Research', desc: 'AI-powered legal research assistant', tag: 'Case law', github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/legal_research_assistant.py' }
            ].map((agent, idx) => {
              const Icon = agent.icon;
              return (
                <a key={idx} href={agent.github} target="_blank" rel="noopener noreferrer" className="agent-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                    <div className="agent-icon" style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #6366f1, #4f46e5)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' }}>
                      <Icon size={28} color="white" />
                    </div>
                    <ExternalLink size={18} color="#818cf8" style={{ opacity: 0.6 }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: '700', marginBottom: '8px' }}>{agent.name}</h3>
                  <p style={{ fontSize: 'clamp(13px, 2.5vw, 14px)', color: '#a3a3a3', marginBottom: '16px', lineHeight: '1.5' }}>{agent.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} color="#818cf8" />
                    <span style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#818cf8', fontWeight: '600' }}>{agent.tag}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ padding: '100px 32px' }}>
        <div className="cta-section-padding" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))', padding: '64px 48px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 className="section-heading" style={{ marginBottom: '20px' }}>Ready to build your own agents?</h2>
          <p style={{ fontSize: 'clamp(16px, 3.5vw, 20px)', color: '#a3a3a3', marginBottom: '40px' }}>
            Explore the source code and learn how these agents work
          </p>
          <a href="https://github.com/vinaygangidi/AgentOpsLab" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '18px 36px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)' }}>
            <Github size={22} />
            View on GitHub
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding" style={{ padding: '100px 32px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading" style={{ marginBottom: '20px' }}>Get in touch</h2>
          <p style={{ fontSize: 'clamp(16px, 3.5vw, 20px)', color: '#a3a3a3', marginBottom: '48px' }}>Questions about the code or want to collaborate?</p>
          <a href="mailto:vinay.gangidi@gmail.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: 'clamp(16px, 3vw, 20px)', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', borderRadius: '12px', fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)' }}>
            <Mail size={22} />
            vinay.gangidi@gmail.com
          </a>
        </div>
      </section>

      {/* Footer with Educational Disclaimer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: 'clamp(32px, 6vw, 48px) 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '12px', padding: '24px', marginBottom: '32px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
              <BookOpen size={20} color="#60a5fa" />
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#60a5fa' }}>Educational Portfolio Project</span>
            </div>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              This project is built for educational purposes to demonstrate enterprise AI agent development. 
              All code is open-source (MIT License) and free to use for learning. Not intended for commercial sale.
            </p>
          </div>
          <div style={{ textAlign: 'center', color: '#737373' }}>
            <p style={{ fontWeight: '600', color: '#d4d4d4', marginBottom: '8px', fontSize: 'clamp(13px, 2.5vw, 15px)' }}>AgentOpsLab - Enterprise AI Learning Resource</p>
            <p style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>© 2026 Vinay Gangidi. Open Source Project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
