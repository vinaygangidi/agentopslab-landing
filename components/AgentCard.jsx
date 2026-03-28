import { ExternalLink, CheckCircle2, Mail, Zap, Users, Building2, TrendingUp, FileText, AlertTriangle, Search, Target, BarChart3, MessageSquare, DollarSign, Shield, UserCheck, Briefcase, Award, Clock, FileCheck, AlertCircle, Scale } from 'lucide-react';
import { categories } from '../lib/agentsData';

// Icon mapping
const iconMap = {
  Mail,
  Zap,
  Users,
  Building2,
  TrendingUp,
  FileText,
  AlertTriangle,
  Search,
  Target,
  BarChart3,
  MessageSquare,
  DollarSign,
  Shield,
  UserCheck,
  Briefcase,
  Award,
  Clock,
  FileCheck,
  AlertCircle,
  Scale
};

export default function AgentCard({ agent }) {
  const Icon = iconMap[agent.icon];
  const category = categories[agent.category];

  return (
    <a
      href={agent.github}
      target="_blank"
      rel="noopener noreferrer"
      className="agent-card"
      style={{
        background: 'rgba(255,255,255,0.05)',
        padding: '32px',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.1)',
        cursor: 'pointer'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
        <div
          className="agent-icon"
          style={{
            width: '56px',
            height: '56px',
            background: category.gradient,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: category.shadow
          }}
        >
          {Icon && <Icon size={28} color="white" />}
        </div>
        <ExternalLink size={18} color={category.linkColor} style={{ opacity: 0.6 }} />
      </div>
      <h3 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: '700', marginBottom: '8px' }}>
        {agent.name}
      </h3>
      <p style={{ fontSize: 'clamp(13px, 2.5vw, 14px)', color: '#a3a3a3', marginBottom: '16px', lineHeight: '1.5' }}>
        {agent.desc}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <CheckCircle2 size={14} color={category.checkColor} />
        <span style={{ fontSize: 'clamp(12px, 2vw, 13px)', color: category.checkColor, fontWeight: '600' }}>
          {agent.tag}
        </span>
      </div>
    </a>
  );
}
