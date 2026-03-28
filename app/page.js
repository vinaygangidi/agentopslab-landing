'use client';

import { Zap, Mail, ArrowRight, Github, BookOpen, Code, Activity } from 'lucide-react';
import { agents, categories, getAgentsByCategory, getTotalAgentCount } from '../lib/agentsData';
import AgentCard from '../components/AgentCard';

export default function AgentOpsLab() {
  const totalAgents = getTotalAgentCount();
  
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #0a0a0a; color: '#fff'; overflow-x: hidden; }
        
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
        
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        
        .hero-title {
          font-size: clamp(36px, 8vw, 72px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 28px;
          background: linear-gradient(to right, #fff, #a3a3a3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-heading { font-size: clamp(32px, 6vw, 48px); font-weight: 800; }
        .hero-description { font-size: clamp(16px, 3.5vw, 22px); line-height: 1.6; }
        .section-description { font-size: clamp(15px, 3vw, 18px); }
        
        .educational-banner {
          background: linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%);
          padding: 12px 0;
          text-align: center;
          border-bottom: 2px solid #60a5fa;
        }
        
        /* Responsive */
        @media (max-width: 374px) {
          .grid-3, .grid-4 { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (min-width: 375px) and (max-width: 428px) {
          .grid-3, .grid-4 { grid-template-columns: 1fr; gap: 18px; }
        }
        @media (min-width: 429px) and (max-width: 768px) {
          .grid-3, .grid-4 { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-3, .grid-4 { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (min-width: 1025px) {
          .grid-3 { grid-template-columns: repeat(3, 1fr); }
          .grid-4 { grid-template-columns: repeat(4, 1fr); }
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
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}>
              <Zap size={24} color="white" />
            </div>
            <span style={{ fontSize: '24px', fontWeight: '700' }}>AgentOpsLab</span>
          </div>
          <a href="https://github.com/vinaygangidi/AgentOpsLab" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', borderRadius: '10px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}>
            <Github size={18} />
            <span>Explore Code</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, rgba(10, 10, 10, 0) 100%)', padding: '120px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '100px', fontSize: '14px', fontWeight: '600', color: '#60a5fa', marginBottom: '32px' }}>
            Learning resource for developers
          </div>
          <h1 className="hero-title">Build Enterprise AI Agents</h1>
          <p className="hero-description" style={{ color: '#a3a3a3', marginBottom: '48px', maxWidth: '850px', margin: '0 auto 48px' }}>
            Open-source portfolio demonstrating how to rapidly build production-ready AI automation with Claude Sonnet 4. {totalAgents}+ example agents across Sales, Revenue, Banking, Finance, HR, and Legal operations. Built for learning and showcasing enterprise AI capabilities.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/vinaygangidi/AgentOpsLab" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 36px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)' }}>
              <Github size={22} />
              View Source Code
              <ArrowRight size={22} />
            </a>
            <a href="https://agentopslab-t3c97qqfpvdqjtx22qczsm.streamlit.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 36px', background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)' }}>
              <Zap size={22} />
              Try Live Demo
              <ArrowRight size={22} />
            </a>
            <a href="/governance" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 36px', background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)' }}>
              <Activity size={22} />
              View Governance Dashboard
              <ArrowRight size={22} />
            </a>
            <a href="#agents" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '18px 36px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '600', textDecoration: 'none' }}>
              Explore Agents
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '100px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading" style={{ marginBottom: '64px' }}>Example capabilities showcase</h2>
          <div className="grid-4">
            {[
              { value: `${totalAgents}+`, label: 'Example AI Agents', sublabel: 'Production-ready code' },
              { value: '6', label: 'Categories', sublabel: 'Sales, Revenue, Banking, Finance, HR, Legal' },
              { value: '100%', label: 'Open Source', sublabel: 'MIT License' },
              { value: 'Python', label: 'Claude Sonnet 4', sublabel: 'HubSpot integration' }
            ].map((stat, idx) => (
              <div key={idx} style={{ padding: '40px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px' }}>
                <div style={{ fontSize: '48px', fontWeight: '800', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '12px' }}>{stat.value}</div>
                <div style={{ fontWeight: '600', marginBottom: '4px', color: '#fff', fontSize: 'clamp(14px, 2.5vw, 16px)' }}>{stat.label}</div>
                <div style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: '#737373' }}>{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Categories - Dynamic rendering */}
      {Object.entries(categories).map(([catId, cat], idx) => {
        const catAgents = getAgentsByCategory(catId);
        const isEven = idx % 2 === 0;
        
        return (
          <section
            key={catId}
            id={idx === 0 ? 'agents' : undefined}
            style={{
              padding: '100px 32px',
              background: isEven ? 'rgba(255,255,255,0.02)' : 'transparent'
            }}
          >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ marginBottom: '64px' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '6px 16px',
                  background: cat.badgeBg,
                  border: `1px solid ${cat.badgeBorder}`,
                  borderRadius: '100px',
                  fontSize: 'clamp(11px, 2vw, 13px)',
                  fontWeight: '600',
                  color: cat.badgeColor,
                  marginBottom: '16px'
                }}>
                  {cat.badge}
                </div>
                <h2 className="section-heading" style={{ marginBottom: '16px' }}>{cat.title}</h2>
                <p className="section-description" style={{ color: '#a3a3a3' }}>{cat.description}</p>
              </div>
              <div className="grid-3">
                {catAgents.map((agent, agentIdx) => (
                  <AgentCard key={agentIdx} agent={agent} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section style={{ padding: '100px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))', padding: '64px 48px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 className="section-heading" style={{ marginBottom: '20px' }}>Ready to build your own agents?</h2>
          <p style={{ fontSize: 'clamp(16px, 3.5vw, 20px)', color: '#a3a3a3', marginBottom: '40px' }}>
            Explore the source code and learn how these agents work
          </p>
          <a href="https://github.com/vinaygangidi/AgentOpsLab" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '18px 36px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', borderRadius: '12px', fontSize: '17px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)' }}>
            <Github size={22} />
            View on GitHub
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '100px 32px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading" style={{ marginBottom: '20px' }}>Get in touch</h2>
          <p style={{ fontSize: 'clamp(16px, 3.5vw, 20px)', color: '#a3a3a3', marginBottom: '48px' }}>Questions about the code or want to collaborate?</p>
          <a href="mailto:vinay.gangidi@gmail.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: 'clamp(16px, 3vw, 20px)', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', borderRadius: '12px', fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: '600', textDecoration: 'none', boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)' }}>
            <Mail size={22} />
            vinay.gangidi@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
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
