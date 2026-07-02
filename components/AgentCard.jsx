import { ExternalLink, Mail, Zap, Users, Building2, TrendingUp, FileText, AlertTriangle, Search, Target, BarChart3, MessageSquare, DollarSign, Shield, UserCheck, Briefcase, Award, Clock, FileCheck, AlertCircle, Scale, Brain } from 'lucide-react';
import { techBadges } from '../lib/agentsData';

const iconMap = {
  Mail, Zap, Users, Building2, TrendingUp, FileText, AlertTriangle, Search,
  Target, BarChart3, MessageSquare, DollarSign, Shield, UserCheck, Briefcase,
  Award, Clock, FileCheck, AlertCircle, Scale, Brain
};

export default function AgentCard({ agent, gradient, shadow }) {
  const Icon = iconMap[agent.icon];
  const tech = techBadges[agent.tech];

  return (
    <a
      href={agent.github}
      target="_blank"
      rel="noopener noreferrer"
      className="agent-card"
      style={{
        background: 'var(--bg-surface)',
        padding: '24px',
        borderRadius: '14px',
        border: '1px solid var(--border-default)',
        cursor: 'pointer',
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{
          width: '44px', height: '44px',
          background: gradient || 'linear-gradient(135deg,#6366f1,#4f46e5)',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: shadow || 'none',
          flexShrink: 0,
        }}>
          {Icon && <Icon size={22} color="white" />}
        </div>
        <ExternalLink size={15} color="var(--text-muted)" style={{ opacity: 0.6 }} />
      </div>

      <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-primary)', lineHeight: '1.3' }}>
        {agent.name}
      </h3>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: '1.55' }}>
        {agent.desc}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
          {agent.tag}
        </span>
        {tech && (
          <span style={{
            fontSize: '10px', fontWeight: '700', fontFamily: 'var(--font-mono)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '2px 8px', borderRadius: '100px',
            color: tech.color, background: tech.bg, border: `1px solid ${tech.border}`,
          }}>
            {tech.label}
          </span>
        )}
      </div>
    </a>
  );
}
