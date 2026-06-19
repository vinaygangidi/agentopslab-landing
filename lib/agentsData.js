/**
 * Agent catalog - restructured by Business Function > Sub-Function
 * Tech stack badges: 'python' (Python/CrewAI), 'n8n' (n8n JSON), 'claude' (Claude agent spec)
 * Multi-agent systems are separate (live demos)
 */

// Tech badge config
export const techBadges = {
  python: { label: 'Python / CrewAI', color: '#4ADE80', bg: 'rgba(74,222,128,0.10)', border: 'rgba(74,222,128,0.25)' },
  n8n:    { label: 'n8n',             color: '#F59E0B', bg: 'rgba(245,158,11,0.10)',  border: 'rgba(245,158,11,0.25)'  },
  claude: { label: 'Claude Agent',    color: '#818CF8', bg: 'rgba(129,140,248,0.10)', border: 'rgba(129,140,248,0.25)' },
};

// Multi-agent systems (live demos - shown in their own section)
export const multiAgentSystems = [
  {
    icon: 'DollarSign',
    name: 'AP Invoice Processing',
    desc: '5-agent pipeline that extracts, validates, reconciles, and posts invoices - end to end without human touch for the routine 80%.',
    tag: '5 agents - AP',
    color: '#10B981',
    demoLink: '/demo/ap-invoice-processing',
    archLink: '/agentic-systems/ap-invoice-processing',
    platforms: ['Python / CrewAI', 'Claude Opus'],
  },
  {
    icon: 'AlertTriangle',
    name: 'AP Exception Resolution',
    desc: '6-agent pipeline that resolves the 20-30% of invoices that fail automated matching - including fraud detection and audit trail.',
    tag: '6 agents - AP Exception',
    color: '#F59E0B',
    demoLink: '/demo/ap-exception-resolution',
    archLink: '/agentic-systems/ap-exception-resolution',
    platforms: ['Python / CrewAI', 'Claude Opus'],
  },
  {
    icon: 'FileCheck',
    name: 'NDA Review',
    desc: '5-agent legal pipeline that reviews an NDA against a playbook, scores every clause for risk, and produces a signed-off memo.',
    tag: '5 agents - Legal',
    color: '#818CF8',
    demoLink: '/demo/nda-review',
    archLink: '/agentic-systems/nda-review',
    platforms: ['Python / CrewAI', 'Claude Opus'],
  },
];

// Business function taxonomy
// structure: function > subFunction[] > agents[]
export const businessFunctions = [
  {
    id: 'gtm',
    label: 'GTM',
    title: 'Go-to-Market',
    color: '#60A5FA',
    border: 'rgba(96,165,250,0.28)',
    bg: 'rgba(96,165,250,0.07)',
    badgeColor: '#60A5FA',
    badgeBg: 'rgba(96,165,250,0.10)',
    badgeBorder: 'rgba(96,165,250,0.28)',
    gradient: 'linear-gradient(135deg,#3b82f6,#2563eb)',
    shadow: '0 0 16px rgba(96,165,250,0.25)',
    subFunctions: [
      {
        id: 'sales-ops',
        label: 'Sales Ops',
        agents: [
          {
            icon: 'Mail',
            name: 'Email Intelligence',
            desc: 'Extract contacts, companies, deals from emails',
            tag: '95%+ accuracy',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/email_intelligence_agent.py',
          },
          {
            icon: 'Zap',
            name: 'Pipeline Orchestrator',
            desc: 'End-to-end CRM automation with custom workflows',
            tag: 'Zero touch',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/pipeline_orchestrator_agent.py',
          },
          {
            icon: 'Users',
            name: 'Contact Creator',
            desc: 'AI-powered contact enrichment and validation',
            tag: 'Auto-enrich',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/contact_creator_agent.py',
          },
          {
            icon: 'Building2',
            name: 'Account Creator',
            desc: 'Company data with firmographics and technographics',
            tag: 'Smart classify',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/account_creator_agent.py',
          },
          {
            icon: 'TrendingUp',
            name: 'Deal Intelligence',
            desc: 'Predictive scoring and close date forecasting',
            tag: '20% better',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/deal_creator_agent.py',
          },
          {
            icon: 'FileText',
            name: 'CPQ Agent',
            desc: 'Quote-to-cash with pricing rules engine',
            tag: 'Zero errors',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/quote_cpq_agent.py',
          },
        ],
      },
      {
        id: 'revops',
        label: 'Revenue Ops',
        agents: [
          {
            icon: 'AlertTriangle',
            name: 'Churn Detector',
            desc: 'Predict customer churn before it happens',
            tag: 'Early warning',
            tech: 'claude',
            github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/churn-detector.md',
          },
          {
            icon: 'Search',
            name: 'Competitive Intel',
            desc: 'Track competitors and market positioning',
            tag: 'Real-time',
            tech: 'claude',
            github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/competitive-intel.md',
          },
          {
            icon: 'Target',
            name: 'Deal Risk Assessor',
            desc: 'Identify at-risk deals with AI scoring',
            tag: 'Proactive',
            tech: 'claude',
            github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/deal-risk-assessor.md',
          },
          {
            icon: 'BarChart3',
            name: 'ICP Analyst',
            desc: 'Analyze and segment ideal customer profiles',
            tag: 'Data-driven',
            tech: 'claude',
            github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/icp-analyst.md',
          },
          {
            icon: 'MessageSquare',
            name: 'Objection Mapper',
            desc: 'Map common objections and win strategies',
            tag: 'Win more',
            tech: 'claude',
            github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/objection-mapper.md',
          },
          {
            icon: 'TrendingUp',
            name: 'Win-Loss Analyst',
            desc: 'Deep analysis of why deals close or lose',
            tag: 'Insights',
            tech: 'claude',
            github: 'https://github.com/vinaygangidi/revops-ai-agents/blob/main/.claude/agents/win-loss-analyst.md',
          },
        ],
      },
      {
        id: 'gtm-strategy',
        label: 'GTM Strategy',
        agents: [
          {
            icon: 'Target',
            name: 'GTM Account 360 Copilot',
            desc: 'Complete account intelligence across CRM, signals, and news',
            tag: '360 view',
            tech: 'n8n',
            github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/gtm/gtm-account-360-copilot.json',
          },
          {
            icon: 'BarChart3',
            name: 'ICP Segmentation',
            desc: 'Advanced customer segmentation and scoring analysis',
            tag: 'Precision',
            tech: 'n8n',
            github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/gtm/gtm-icp-segmentation-analysis.json',
          },
          {
            icon: 'TrendingUp',
            name: 'GTM Win-Loss Analysis',
            desc: 'Go-to-market performance analytics and playbook',
            tag: 'Strategic',
            tech: 'n8n',
            github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/gtm/gtm-win-loss-analysis.json',
          },
        ],
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    title: 'Finance & ERP',
    color: '#34D399',
    border: 'rgba(52,211,153,0.28)',
    bg: 'rgba(52,211,153,0.07)',
    badgeColor: '#34D399',
    badgeBg: 'rgba(52,211,153,0.10)',
    badgeBorder: 'rgba(52,211,153,0.28)',
    gradient: 'linear-gradient(135deg,#10b981,#059669)',
    shadow: '0 0 16px rgba(52,211,153,0.25)',
    subFunctions: [
      {
        id: 'accounts-payable',
        label: 'Accounts Payable',
        note: 'See Multi-Agent Systems above for live AP demos',
        agents: [],
      },
      {
        id: 'cash-erp',
        label: 'Cash & ERP',
        agents: [
          {
            icon: 'DollarSign',
            name: 'Cash Reconciliation',
            desc: 'Automated cash flow reconciliation across accounts',
            tag: 'Accurate',
            tech: 'n8n',
            github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/cash_reconciliation_agent.json',
          },
          {
            icon: 'Shield',
            name: 'ERP Copilot',
            desc: 'Intelligent ERP assistant for queries and workflows',
            tag: 'Smart',
            tech: 'n8n',
            github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/erp_copilot_agent.json',
          },
          {
            icon: 'FileText',
            name: 'ERP Customer Orders',
            desc: 'Automated order processing, validation, and tracking',
            tag: 'Fast',
            tech: 'n8n',
            github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/erp_customer_orders_agent.json',
          },
          {
            icon: 'DollarSign',
            name: 'Tax Agent',
            desc: 'Automated tax calculation and compliance checks',
            tag: 'Compliant',
            tech: 'n8n',
            github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/finance/tax_agent.json',
          },
        ],
      },
      {
        id: 'financial-risk',
        label: 'Financial Risk',
        agents: [
          {
            icon: 'DollarSign',
            name: 'Loan Origination Underwriter',
            desc: 'Automated underwriting with DTI/LTV calculations and regulatory compliance',
            tag: 'Basel II/III',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/tree/main/agents/banking-financial-services',
          },
          {
            icon: 'BarChart3',
            name: 'Credit Risk Assessment',
            desc: 'Portfolio analytics with Monte Carlo simulation and stress testing',
            tag: 'Basel II/III',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/tree/main/agents/banking-financial-services',
          },
          {
            icon: 'Shield',
            name: 'AML Transaction Monitoring',
            desc: 'Real-time anti-money laundering with pattern detection and SAR generation',
            tag: 'Real-time',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/tree/main/agents/banking-financial-services',
          },
          {
            icon: 'AlertTriangle',
            name: 'Loan Fraud Detection',
            desc: 'AI-powered fraud detection for loan applications',
            tag: 'Secure',
            tech: 'n8n',
            github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/loan-origination/loan_fraud_detection_agent.json',
          },
          {
            icon: 'Shield',
            name: 'Loan Underwriting',
            desc: 'Automated loan risk assessment and decision workflow',
            tag: 'Fast approval',
            tech: 'n8n',
            github: 'https://github.com/vinaygangidi/n8n-enterprise-ai-agents/blob/main/agents/loan-origination/loan_underwriting_agent.json',
          },
        ],
      },
    ],
  },
  {
    id: 'hr',
    label: 'HR',
    title: 'Human Resources',
    color: '#FBBF24',
    border: 'rgba(251,191,36,0.28)',
    bg: 'rgba(251,191,36,0.07)',
    badgeColor: '#FBBF24',
    badgeBg: 'rgba(251,191,36,0.10)',
    badgeBorder: 'rgba(251,191,36,0.28)',
    gradient: 'linear-gradient(135deg,#f59e0b,#d97706)',
    shadow: '0 0 16px rgba(251,191,36,0.25)',
    subFunctions: [
      {
        id: 'talent',
        label: 'Talent Acquisition',
        agents: [
          {
            icon: 'UserCheck',
            name: 'Resume Screening',
            desc: 'AI-powered candidate evaluation and scoring',
            tag: '95%+ accuracy',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/resume_screening_agent.py',
          },
          {
            icon: 'Briefcase',
            name: 'Onboarding Workflow',
            desc: 'Automated new hire onboarding orchestration',
            tag: 'Zero touch',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/onboarding_workflow_agent.py',
          },
        ],
      },
      {
        id: 'employee-lifecycle',
        label: 'Employee Lifecycle',
        agents: [
          {
            icon: 'Award',
            name: 'Performance Review Analyzer',
            desc: 'Analyze reviews and identify trends across teams',
            tag: 'Data-driven',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/performance_review_analyzer.py',
          },
          {
            icon: 'Users',
            name: 'Employee Offboarding',
            desc: 'Streamline employee exit processes end-to-end',
            tag: 'Compliant',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/employee_offboarding_agent.py',
          },
          {
            icon: 'Shield',
            name: 'Benefits Enrollment',
            desc: 'AI-powered benefits guidance and enrollment',
            tag: 'Personalized',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/benefits_enrollment_assistant.py',
          },
          {
            icon: 'Clock',
            name: 'Training Compliance',
            desc: 'Monitor and manage training requirements automatically',
            tag: 'Automated',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/hr/training_compliance_tracker.py',
          },
        ],
      },
    ],
  },
  {
    id: 'legal',
    label: 'Legal',
    title: 'Legal & Compliance',
    color: '#A78BFA',
    border: 'rgba(167,139,250,0.28)',
    bg: 'rgba(167,139,250,0.07)',
    badgeColor: '#A78BFA',
    badgeBg: 'rgba(167,139,250,0.10)',
    badgeBorder: 'rgba(167,139,250,0.28)',
    gradient: 'linear-gradient(135deg,#6366f1,#4f46e5)',
    shadow: '0 0 16px rgba(167,139,250,0.25)',
    subFunctions: [
      {
        id: 'contract-ops',
        label: 'Contract Ops',
        note: 'See Multi-Agent Systems above for live NDA Review demo',
        agents: [
          {
            icon: 'FileCheck',
            name: 'Contract Review',
            desc: 'Automated legal contract analysis and redlining',
            tag: 'Risk assessment',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/contract_review_agent.py',
          },
          {
            icon: 'FileText',
            name: 'NDA Generator',
            desc: 'Generate custom NDAs from templates automatically',
            tag: 'Compliant',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/nda_generator_agent.py',
          },
          {
            icon: 'AlertCircle',
            name: 'Contract Risk Analyzer',
            desc: 'Score and analyze contract risk across all dimensions',
            tag: 'Multi-dimensional',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/contract_risk_analyzer.py',
          },
          {
            icon: 'Scale',
            name: 'Document Classifier',
            desc: 'Automatically classify and route legal documents',
            tag: 'Smart routing',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/legal_document_classifier.py',
          },
        ],
      },
      {
        id: 'regulatory',
        label: 'Regulatory',
        agents: [
          {
            icon: 'Shield',
            name: 'Compliance Checker',
            desc: 'Verify regulatory compliance - GDPR, CCPA, SOX',
            tag: 'Regulatory',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/compliance_checker_agent.py',
          },
          {
            icon: 'Search',
            name: 'Legal Research',
            desc: 'AI-powered legal research across case law and statute',
            tag: 'Case law',
            tech: 'python',
            github: 'https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/legal/legal_research_assistant.py',
          },
        ],
      },
    ],
  },
];

// Platforms Vinay has built on (for the platform callout strip)
export const platforms = [
  { name: 'Microsoft AI Foundry',    note: 'Central orchestration layer',          color: '#60A5FA' },
  { name: 'Salesforce Agentforce',   note: 'CRM-native agent platform',             color: '#34D399' },
  { name: 'Microsoft Copilot Studio',note: 'M365 workflow automation',              color: '#60A5FA' },
  { name: 'n8n',                     note: '9 production workflow agents',           color: '#F59E0B' },
  { name: 'Python / CrewAI',         note: '30+ agents across 5 domains',           color: '#4ADE80' },
  { name: 'Claude Agent SDK',        note: '6 RevOps agent specs',                  color: '#818CF8' },
  { name: 'UiPath',                  note: 'RPA + agentic automation',              color: '#A78BFA' },
  { name: 'Azure OpenAI',            note: 'GPT-4 document intelligence',           color: '#60A5FA' },
];

// Legacy exports kept for any pages still using the old shape
export const categories = {};
export const agents = [];
export const getAgentsByCategory = () => [];
export const getCategoryCount = () => 0;
export const getTotalAgentCount = () => {
  return businessFunctions.reduce((total, fn) =>
    total + fn.subFunctions.reduce((s, sf) => s + sf.agents.length, 0), 0
  ) + multiAgentSystems.length;
};
