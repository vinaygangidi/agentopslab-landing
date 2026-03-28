/**
 * AgentOpsLab - Complete Agent Catalog
 * All 36 production-ready AI agents organized by category
 * 
 * Categories:
 * - sales: Sales Operations (6 agents)
 * - revenue: Revenue Operations (6 agents)
 * - banking: Banking & Financial Services (3 agents) ⭐ NEW
 * - enterprise: Enterprise Operations (9 agents)
 * - hr: HR Operations (6 agents)
 * - legal: Legal Operations (6 agents)
 */

// Category configurations
export const categories = {
  sales: {
    id: 'sales',
    name: 'Sales Operations',
    title: 'CRM & Sales Agents',
    description: 'Agents that eliminate manual CRM work and accelerate your sales pipeline',
    badge: 'SALES OPERATIONS',
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    badgeColor: '#60a5fa',
    badgeBg: 'rgba(59, 130, 246, 0.1)',
    badgeBorder: 'rgba(59, 130, 246, 0.3)',
    checkColor: '#10b981',
    linkColor: '#60a5fa',
    shadow: '0 0 20px rgba(59, 130, 246, 0.3)'
  },
  revenue: {
    id: 'revenue',
    name: 'Revenue Operations',
    title: 'RevOps Intelligence',
    description: 'Agents that optimize revenue, reduce churn, and maximize win rates',
    badge: 'REVENUE OPERATIONS',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    badgeColor: '#a78bfa',
    badgeBg: 'rgba(139, 92, 246, 0.1)',
    badgeBorder: 'rgba(139, 92, 246, 0.3)',
    checkColor: '#a78bfa',
    linkColor: '#a78bfa',
    shadow: '0 0 20px rgba(139, 92, 246, 0.3)'
  },
  banking: {
    id: 'banking',
    name: 'Banking & Financial Services',
    title: 'Banking & Risk Management',
    description: 'Production-grade agents for loan underwriting, credit risk assessment, and AML compliance',
    badge: 'BANKING & FINANCIAL SERVICES',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    badgeColor: '#34d399',
    badgeBg: 'rgba(16, 185, 129, 0.1)',
    badgeBorder: 'rgba(16, 185, 129, 0.3)',
    checkColor: '#34d399',
    linkColor: '#34d399',
    shadow: '0 0 20px rgba(16, 185, 129, 0.3)'
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise Operations',
    title: 'Finance & GTM Agents',
    description: 'Agents for go-to-market strategy, financial operations, and ERP workflows',
    badge: 'ENTERPRISE OPERATIONS',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    badgeColor: '#34d399',
    badgeBg: 'rgba(16, 185, 129, 0.1)',
    badgeBorder: 'rgba(16, 185, 129, 0.3)',
    checkColor: '#34d399',
    linkColor: '#34d399',
    shadow: '0 0 20px rgba(16, 185, 129, 0.3)'
  },
  hr: {
    id: 'hr',
    name: 'HR Operations',
    title: 'Talent & Workforce Management',
    description: 'Agents that automate recruiting, onboarding, performance, and compliance',
    badge: 'HR OPERATIONS',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    badgeColor: '#fbbf24',
    badgeBg: 'rgba(245, 158, 11, 0.1)',
    badgeBorder: 'rgba(245, 158, 11, 0.3)',
    checkColor: '#fbbf24',
    linkColor: '#fbbf24',
    shadow: '0 0 20px rgba(245, 158, 11, 0.3)'
  },
  legal: {
    id: 'legal',
    name: 'Legal Operations',
    title: 'Contract & Compliance Agents',
    description: 'Agents for contract review, compliance checking, and legal research',
    badge: 'LEGAL OPERATIONS',
    gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    badgeColor: '#818cf8',
    badgeBg: 'rgba(99, 102, 241, 0.1)',
    badgeBorder: 'rgba(99, 102, 241, 0.3)',
    checkColor: '#818cf8',
    linkColor: '#818cf8',
    shadow: '0 0 20px rgba(99, 102, 241, 0.3)'
  }
};

// All agents data
export const agents = [
  // ==========================================
  // SALES OPERATIONS (6 agents)
  // ==========================================
  {
    icon: 'Mail',
    name: 'Email Intelligence',
    desc: 'Extract contacts, companies, deals from emails',
    tag: '95%+ accuracy',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/email_intelligence_agent.py',
    category: 'sales'
  },
  {
    icon: 'Zap',
    name: 'Pipeline Orchestrator',
    desc: 'End-to-end automation with custom workflows',
    tag: 'Zero touch',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/pipeline_orchestrator_agent.py',
    category: 'sales'
  },
  {
    icon: 'Users',
    name: 'Contact Creator',
    desc: 'AI-powered contact enrichment & validation',
    tag: 'Auto-enrich',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/contact_creator_agent.py',
    category: 'sales'
  },
  {
    icon: 'Building2',
    name: 'Account Creator',
    desc: 'Company data with firmographics & technographics',
    tag: 'Smart classify',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/account_creator_agent.py',
    category: 'sales'
  },
  {
    icon: 'TrendingUp',
    name: 'Deal Intelligence',
    desc: 'Predictive scoring & close date forecasting',
    tag: '20% better',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/deal_creator_agent.py',
    category: 'sales'
  },
  {
    icon: 'FileText',
    name: 'CPQ Agent',
    desc: 'Complete quote-to-cash with pricing rules',
    tag: 'Zero errors',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/quote_cpq_agent.py',
    category: 'sales'
  },

  // ==========================================
  // REVENUE OPERATIONS (6 agents)
  // ==========================================
  {
    icon: 'AlertTriangle',
    name: 'Churn Detector',
    desc: 'Predict customer churn before it happens',
    tag: 'Early warning',
    github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/churn-detector.md',
    category: 'revenue'
  },
  {
    icon: 'Search',
    name: 'Competitive Intel',
    desc: 'Track competitors and market positioning',
    tag: 'Real-time',
    github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/competitive-intel.md',
    category: 'revenue'
  },
  {
    icon: 'Target',
    name: 'Deal Risk Assessor',
    desc: 'Identify at-risk deals with AI scoring',
    tag: 'Proactive',
    github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/deal-risk-assessor.md',
    category: 'revenue'
  },
  {
    icon: 'BarChart3',
    name: 'ICP Analyst',
    desc: 'Analyze and segment ideal customer profiles',
    tag: 'Data-driven',
    github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/icp-analyst.md',
    category: 'revenue'
  },
  {
    icon: 'MessageSquare',
    name: 'Objection Mapper',
    desc: 'Map common objections and win strategies',
    tag: 'Win more',
    github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/objection-mapper.md',
    category: 'revenue'
  },
  {
    icon: 'TrendingUp',
    name: 'Win-Loss Analyst',
    desc: 'Deep analysis of why deals close or lost',
    tag: 'Insights',
    github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/win-loss-analyst.md',
    category: 'revenue'
  },

  // ==========================================
  // BANKING & FINANCIAL SERVICES (3 agents) ⭐ NEW
  // ==========================================
  {
    icon: 'DollarSign',
    name: 'Loan Origination Underwriter',
    desc: 'Automated loan underwriting with multi-dimensional risk scoring, DTI/LTV calculations, and regulatory compliance',
    tag: '60k apps/sec',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/tree/main/agents/banking-financial-services',
    category: 'banking'
  },
  {
    icon: 'BarChart3',
    name: 'Credit Risk Assessment',
    desc: 'Portfolio-level analytics with Monte Carlo simulation, stress testing, and Basel II/III compliance',
    tag: 'Basel II/III',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/tree/main/agents/banking-financial-services',
    category: 'banking'
  },
  {
    icon: 'Shield',
    name: 'AML Transaction Monitoring',
    desc: 'Real-time anti-money laundering with pattern detection, watchlist screening, and SAR generation',
    tag: 'Real-time',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/tree/main/agents/banking-financial-services',
    category: 'banking'
  },

  // ==========================================
  // ENTERPRISE OPERATIONS (9 agents)
  // ==========================================
  {
    icon: 'Target',
    name: 'GTM Account 360 Copilot',
    desc: 'Complete account intelligence & insights',
    tag: '360° view',
    github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/gtm/gtm-account-360-copilot.json',
    category: 'enterprise'
  },
  {
    icon: 'BarChart3',
    name: 'ICP Segmentation',
    desc: 'Advanced customer segmentation analysis',
    tag: 'Precision',
    github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/gtm/gtm-icp-segmentation-analysis.json',
    category: 'enterprise'
  },
  {
    icon: 'TrendingUp',
    name: 'GTM Win-Loss Analysis',
    desc: 'Go-to-market performance analytics',
    tag: 'Strategic',
    github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/gtm/gtm-win-loss-analysis.json',
    category: 'enterprise'
  },
  {
    icon: 'DollarSign',
    name: 'Cash Reconciliation',
    desc: 'Automated cash flow reconciliation',
    tag: 'Accurate',
    github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/cash_reconciliation_agent.json',
    category: 'enterprise'
  },
  {
    icon: 'Shield',
    name: 'ERP Copilot',
    desc: 'Intelligent ERP system assistant',
    tag: 'Smart',
    github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/erp_copilot_agent.json',
    category: 'enterprise'
  },
  {
    icon: 'FileText',
    name: 'ERP Customer Orders',
    desc: 'Automated order processing & tracking',
    tag: 'Fast',
    github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/erp_customer_orders_agent.json',
    category: 'enterprise'
  },
  {
    icon: 'DollarSign',
    name: 'Tax Agent',
    desc: 'Automated tax calculation & compliance',
    tag: 'Compliant',
    github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/tax_agent.json',
    category: 'enterprise'
  },
  {
    icon: 'AlertTriangle',
    name: 'Loan Fraud Detection',
    desc: 'AI-powered fraud detection for loans',
    tag: 'Secure',
    github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/loan-origination/loan_fraud_detection_agent.json',
    category: 'enterprise'
  },
  {
    icon: 'Shield',
    name: 'Loan Underwriting',
    desc: 'Automated loan risk assessment',
    tag: 'Fast approval',
    github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/loan-origination/loan_underwriting_agent.json',
    category: 'enterprise'
  },

  // ==========================================
  // HR OPERATIONS (6 agents)
  // ==========================================
  {
    icon: 'UserCheck',
    name: 'Resume Screening',
    desc: 'AI-powered candidate evaluation and scoring',
    tag: '95%+ accuracy',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/resume_screening_agent.py',
    category: 'hr'
  },
  {
    icon: 'Briefcase',
    name: 'Onboarding Workflow',
    desc: 'Automated new hire onboarding orchestration',
    tag: 'Zero touch',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/onboarding_workflow_agent.py',
    category: 'hr'
  },
  {
    icon: 'Award',
    name: 'Performance Review Analyzer',
    desc: 'Analyze reviews and identify trends',
    tag: 'Data-driven',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/performance_review_analyzer.py',
    category: 'hr'
  },
  {
    icon: 'Users',
    name: 'Employee Offboarding',
    desc: 'Streamline employee exit processes',
    tag: 'Compliant',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/employee_offboarding_agent.py',
    category: 'hr'
  },
  {
    icon: 'Shield',
    name: 'Benefits Enrollment',
    desc: 'AI-powered benefits guidance',
    tag: 'Personalized',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/benefits_enrollment_assistant.py',
    category: 'hr'
  },
  {
    icon: 'Clock',
    name: 'Training Compliance',
    desc: 'Monitor and manage training requirements',
    tag: 'Automated',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/training_compliance_tracker.py',
    category: 'hr'
  },

  // ==========================================
  // LEGAL OPERATIONS (6 agents)
  // ==========================================
  {
    icon: 'FileCheck',
    name: 'Contract Review',
    desc: 'Automated legal contract analysis',
    tag: 'Risk assessment',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/contract_review_agent.py',
    category: 'legal'
  },
  {
    icon: 'FileText',
    name: 'NDA Generator',
    desc: 'Generate custom NDAs automatically',
    tag: 'Compliant',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/nda_generator_agent.py',
    category: 'legal'
  },
  {
    icon: 'AlertCircle',
    name: 'Contract Risk Analyzer',
    desc: 'Score and analyze contract risk levels',
    tag: 'Multi-dimensional',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/contract_risk_analyzer.py',
    category: 'legal'
  },
  {
    icon: 'Scale',
    name: 'Document Classifier',
    desc: 'Automatically classify legal documents',
    tag: 'Smart routing',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/legal_document_classifier.py',
    category: 'legal'
  },
  {
    icon: 'Shield',
    name: 'Compliance Checker',
    desc: 'Verify regulatory compliance (GDPR, CCPA)',
    tag: 'Regulatory',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/compliance_checker_agent.py',
    category: 'legal'
  },
  {
    icon: 'Search',
    name: 'Legal Research',
    desc: 'AI-powered legal research assistant',
    tag: 'Case law',
    github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/legal_research_assistant.py',
    category: 'legal'
  }
];

// Get agents by category
export const getAgentsByCategory = (categoryId) => {
  return agents.filter(agent => agent.category === categoryId);
};

// Get category count
export const getCategoryCount = (categoryId) => {
  return agents.filter(agent => agent.category === categoryId).length;
};

// Total agent count  
export const getTotalAgentCount = () => agents.length;