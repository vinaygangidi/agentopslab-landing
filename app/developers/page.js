'use client';

import { useState } from 'react';
import { Zap, Code, Terminal, Key, Webhook, BarChart3, Shield, Copy, Check, ChevronRight, Server, Cloud, Globe, Lock } from 'lucide-react';

const CODE_SAMPLES = {
  auth: `# All requests require your API key
curl https://api.agentopslab.com/health

# Authenticated request
curl -H "X-API-Key: aol_live_your_key_here" \\
  https://api.agentopslab.com/v1/usage`,

  nda: `# 1. Submit an NDA PDF
JOB=$(curl -s -X POST \\
  -H "X-API-Key: aol_live_your_key_here" \\
  -F "file=@acme_nda_draft.pdf" \\
  https://api.agentopslab.com/v1/jobs/nda-review)

JOB_ID=$(echo $JOB | jq -r '.job_id')
echo "Job: $JOB_ID"

# 2. Stream real-time agent progress (SSE)
curl -H "X-API-Key: aol_live_your_key_here" \\
  https://api.agentopslab.com/v1/jobs/$JOB_ID/stream

# 3. Retrieve full result
curl -H "X-API-Key: aol_live_your_key_here" \\
  https://api.agentopslab.com/v1/jobs/$JOB_ID/result`,

  invoice: `# Submit invoice batch (JSON payload)
curl -s -X POST \\
  -H "X-API-Key: aol_live_your_key_here" \\
  -F 'payload=[
    {
      "invoice_number": "INV-2025-0042",
      "vendor_name": "ACME Supplies",
      "amount": 18500.00,
      "currency": "USD",
      "po_number": "PO-2025-0107",
      "due_date": "2025-02-09"
    }
  ]' \\
  https://api.agentopslab.com/v1/jobs/invoice-exception`,

  playbook: `# Get current playbook config
curl -H "X-API-Key: aol_live_your_key_here" \\
  https://api.agentopslab.com/v1/playbook/invoice-exception

# Update thresholds for your org
curl -X PUT \\
  -H "X-API-Key: aol_live_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "auto_approve_limit": 25000,
    "price_variance_tolerance": 0.05,
    "approval_routing": {
      "NEEDS_APPROVAL": "Finance Director",
      "FRAUD_RISK_HIGH": "CFO + Security"
    }
  }' \\
  https://api.agentopslab.com/v1/playbook/invoice-exception`,

  python: `import httpx, json, time

client = httpx.Client(
  base_url="https://api.agentopslab.com",
  headers={"X-API-Key": "aol_live_your_key_here"},
)

# Submit NDA PDF
with open("contract.pdf", "rb") as f:
  job = client.post("/v1/jobs/nda-review",
    files={"file": ("contract.pdf", f, "application/pdf")}
  ).json()

job_id = job["job_id"]
print(f"Job: {job_id}")
print(f"Stream: {job['stream_url']}")

# Stream SSE events
with client.stream("GET", f"/v1/jobs/{job_id}/stream") as r:
  for line in r.iter_lines():
    if line.startswith("data:"):
      event = json.loads(line[5:])
      if event["event_type"] == "agent_complete":
        agent = event["data"]["agent"]
        done  = event["data"]["completed"]
        total = event["data"]["total"]
        print(f"  [{done}/{total}] {agent}")
      elif event["event_type"] == "complete":
        break

# Full result
result = client.get(f"/v1/jobs/{job_id}/result").json()
print(f"Risk: {result['risk_level']} ({result['risk_score']}/100)")
print(f"Action: {result['action']}")`,

  webhook: `# Register a webhook (HMAC-SHA256 signed delivery)
curl -X POST \\
  -H "X-API-Key: aol_live_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-system.corp/webhooks/aol",
    "secret": "your-hmac-secret",
    "events": ["job.complete", "job.error"]
  }' \\
  https://api.agentopslab.com/v1/webhooks

# Verify signature in your receiver:
# X-AgentOpsLab-Signature: sha256=<hmac>
import hmac, hashlib
def verify(payload_bytes, secret, signature):
  expected = hmac.new(
    secret.encode(), payload_bytes, hashlib.sha256
  ).hexdigest()
  return hmac.compare_digest(f"sha256={expected}", signature)`
};

const ENDPOINTS = [
  { method: 'POST', path: '/v1/jobs/nda-review',          desc: 'Submit NDA PDF for review',              color: '#3b82f6' },
  { method: 'POST', path: '/v1/jobs/invoice-exception',   desc: 'Submit invoice batch for exception resolution', color: '#3b82f6' },
  { method: 'GET',  path: '/v1/jobs/{job_id}',            desc: 'Poll job status',                         color: '#10b981' },
  { method: 'GET',  path: '/v1/jobs/{job_id}/stream',     desc: 'SSE real-time agent progress',            color: '#10b981' },
  { method: 'GET',  path: '/v1/jobs/{job_id}/result',     desc: 'Full result JSON (completed jobs)',       color: '#10b981' },
  { method: 'GET',  path: '/v1/jobs',                     desc: 'List jobs for authenticated client',      color: '#10b981' },
  { method: 'GET',  path: '/v1/playbook/{agent_type}',    desc: 'Get playbook config',                     color: '#10b981' },
  { method: 'PUT',  path: '/v1/playbook/{agent_type}',    desc: 'Update thresholds and routing rules',     color: '#f59e0b' },
  { method: 'GET',  path: '/v1/usage',                    desc: 'Billing period summary',                  color: '#10b981' },
  { method: 'POST', path: '/v1/webhooks',                 desc: 'Register HMAC-signed webhook endpoint',   color: '#3b82f6' },
  { method: 'GET',  path: '/health',                      desc: 'Health check (no auth)',                  color: '#10b981' },
];

const TIERS = [
  {
    name: 'Growth',
    price: 'Per document',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg,rgba(59,130,246,0.12),rgba(59,130,246,0.04))',
    border: 'rgba(59,130,246,0.3)',
    features: [
      'Shared multi-tenant SaaS',
      'Managed API endpoint',
      'Up to 500 documents/month',
      'Playbook config via API',
      'Webhook delivery',
    ],
    deploy: 'AgentOpsLab cloud',
    llm: 'Shared private endpoint',
  },
  {
    name: 'Enterprise',
    price: 'Annual subscription',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg,rgba(139,92,246,0.12),rgba(139,92,246,0.04))',
    border: 'rgba(139,92,246,0.3)',
    features: [
      'Single-tenant in your cloud',
      'AWS · Azure · GCP · On-prem',
      'Unlimited documents',
      'Custom playbook models',
      'Dedicated support SLA',
    ],
    deploy: 'Your cloud account',
    llm: 'Your private LLM endpoint',
  },
  {
    name: 'Sovereign',
    price: 'Encrypted artefact licence',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg,rgba(245,158,11,0.12),rgba(245,158,11,0.04))',
    border: 'rgba(245,158,11,0.3)',
    features: [
      'Air-gapped deployment',
      'On-premises Kubernetes',
      'Offline LLM (vLLM / Ollama)',
      'No internet dependency',
      'Government / regulated sectors',
    ],
    deploy: 'Your data center',
    llm: 'On-prem private LLM',
  },
];

const CLOUDS = [
  { name: 'AWS', icon: '☁', color: '#f59e0b', runtime: 'ECS Fargate / App Runner', llm: 'Bedrock (Claude via PrivateLink)', storage: 'RDS / DynamoDB', secrets: 'Secrets Manager' },
  { name: 'Azure', icon: '☁', color: '#3b82f6', runtime: 'Container Apps', llm: 'Azure OpenAI (Private Endpoint)', storage: 'Cosmos DB / Azure SQL', secrets: 'Key Vault' },
  { name: 'GCP', icon: '☁', color: '#10b981', runtime: 'Cloud Run', llm: 'Vertex AI (VPC Service Controls)', storage: 'Cloud Spanner / Firestore', secrets: 'Secret Manager' },
  { name: 'On-prem', icon: '🏢', color: '#6b7280', runtime: 'Kubernetes', llm: 'vLLM / Ollama (private)', storage: 'PostgreSQL', secrets: 'HashiCorp Vault' },
];

function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#94a3b8', padding: '5px 10px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}
    >
      {copied ? <><Check size={12} color="#4ade80" /> Copied</> : <><Copy size={12} /> Copy</>}
    </button>
  );
}

export default function DevelopersPage() {
  const [activeTab, setActiveTab] = useState('nda');

  const tabs = [
    { id: 'nda',     label: 'NDA Review',       code: CODE_SAMPLES.nda },
    { id: 'invoice', label: 'Invoice Exception', code: CODE_SAMPLES.invoice },
    { id: 'playbook',label: 'Playbook Config',   code: CODE_SAMPLES.playbook },
    { id: 'python',  label: 'Python Client',     code: CODE_SAMPLES.python },
    { id: 'webhook', label: 'Webhooks',          code: CODE_SAMPLES.webhook },
  ];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:#0a0a0a; }
        pre, code { font-family: 'JetBrains Mono', 'Fira Code', monospace !important; }
        .dev-tab { transition: all 0.2s; cursor: pointer; }
        .dev-tab:hover { border-color: rgba(99,102,241,0.4) !important; color: #a5b4fc !important; }
        .endpoint-row:hover { background: rgba(255,255,255,0.04) !important; }
        .cloud-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.2) !important; }
        .cloud-card { transition: all 0.3s; }
        .tier-card:hover { transform: translateY(-4px); }
        .tier-card { transition: all 0.3s; }
        @media (max-width:768px) {
          .clouds-grid { grid-template-columns: 1fr 1fr !important; }
          .tiers-grid  { grid-template-columns: 1fr !important; }
          .endpoints-table { font-size:12px !important; }
          .hero-btns { flex-direction: column !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)', zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', height: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#fff' }}>
              <div style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg,#3b82f6,#2563eb)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={20} color="white" />
              </div>
              <span style={{ fontSize: '20px', fontWeight: '700' }}>AgentOpsLab</span>
            </a>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="/#agents" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none' }}>Agents</a>
              <a href="/governance" style={{ fontSize: '14px', color: '#94a3b8', textDecoration: 'none' }}>Governance</a>
              <a href="/developers" style={{ fontSize: '14px', color: '#818cf8', textDecoration: 'none', fontWeight: '600' }}>Developers</a>
            </div>
          </div>
          <a href="mailto:api@agentopslab.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
            <Key size={14} />Get API Key
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: 'clamp(72px,12vw,120px) clamp(16px,5vw,32px) clamp(60px,10vw,100px)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg,rgba(99,102,241,0.06) 0%,transparent 100%)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '100px', marginBottom: '32px' }}>
            <Code size={14} color="#818cf8" />
            <span style={{ fontSize: '13px', color: '#818cf8', fontWeight: '600' }}>Platform API v1.0</span>
          </div>
          <h1 style={{ fontSize: 'clamp(32px,6vw,60px)', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', background: 'linear-gradient(to right,#fff,#a3a3a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Build on the AgentOpsLab<br />Intelligence Platform
          </h1>
          <p style={{ fontSize: 'clamp(15px,2.5vw,19px)', color: '#94a3b8', maxWidth: '660px', lineHeight: '1.7', marginBottom: '40px' }}>
            Submit documents, stream real-time agent reasoning via SSE, configure playbook thresholds per client, receive signed webhooks — without ever running agent code yourself.
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="http://localhost:8080/docs" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', background: '#3b82f6', color: '#fff', borderRadius: '10px', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}>
              <Terminal size={17} />Interactive API Docs
            </a>
            <a href="mailto:api@agentopslab.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 24px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '10px', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}>
              <Key size={17} />Request API Access
            </a>
          </div>
        </div>
      </section>

      {/* Auth quickstart */}
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '280px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Key size={16} color="#818cf8" />
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: '700' }}>Authentication</h2>
              </div>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px' }}>
                All requests require an <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>X-API-Key</code> header. Keys follow the format <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px', fontSize: '13px' }}>aol_live_...</code>.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px' }}>
                Keys are stored as SHA-256 hashes server-side — even if the database is compromised, raw keys cannot be recovered.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  ['Per-client scoping', 'Each key is bound to one client account'],
                  ['Plan enforcement',   'Growth / Enterprise / Sovereign limits applied at middleware'],
                  ['Usage metering',     'Every authenticated call is logged for billing'],
                ].map(([t, d]) => (
                  <div key={t} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <Check size={15} color="#4ade80" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#cbd5e1' }}><strong>{t}</strong> — {d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: '1', minWidth: '320px' }}>
              <div style={{ position: 'relative', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '6px', alignItems: 'center' }}>
                  {['#ef4444','#f59e0b','#4ade80'].map(c => <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
                  <span style={{ marginLeft: '8px', fontSize: '12px', color: '#64748b' }}>bash</span>
                </div>
                <pre style={{ padding: '20px', fontSize: '13px', color: '#e2e8f0', overflow: 'auto', lineHeight: '1.7', margin: 0 }}>{CODE_SAMPLES.auth}</pre>
                <CopyButton code={CODE_SAMPLES.auth} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code examples */}
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', color: '#818cf8', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Code Examples</span>
          </div>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: '800', marginBottom: '40px' }}>
            From API call to result in minutes
          </h2>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {tabs.map(t => (
              <button
                key={t.id}
                className="dev-tab"
                onClick={() => setActiveTab(t.id)}
                style={{
                  padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                  background: activeTab === t.id ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)',
                  border: activeTab === t.id ? '1px solid rgba(99,102,241,0.5)' : '1px solid rgba(255,255,255,0.08)',
                  color: activeTab === t.id ? '#a5b4fc' : '#64748b',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '6px', alignItems: 'center' }}>
              {['#ef4444','#f59e0b','#4ade80'].map(c => <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
              <span style={{ marginLeft: '8px', fontSize: '12px', color: '#64748b' }}>{activeTab === 'python' ? 'python' : 'bash'}</span>
            </div>
            <pre style={{ padding: '24px', fontSize: '13px', color: '#e2e8f0', overflow: 'auto', lineHeight: '1.7', margin: 0, maxHeight: '500px' }}>
              {tabs.find(t => t.id === activeTab)?.code}
            </pre>
            <CopyButton code={tabs.find(t => t.id === activeTab)?.code || ''} />
          </div>
        </div>
      </section>

      {/* Endpoints reference */}
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', color: '#818cf8', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>API Reference</span>
          </div>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: '800', marginBottom: '32px' }}>Endpoints</h2>
          <div className="endpoints-table" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
            {ENDPOINTS.map((ep, i) => (
              <div key={i} className="endpoint-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 20px', borderBottom: i < ENDPOINTS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', background: 'transparent', transition: 'background 0.2s' }}>
                <span style={{ padding: '3px 9px', borderRadius: '5px', background: ep.color === '#3b82f6' ? 'rgba(59,130,246,0.12)' : ep.color === '#f59e0b' ? 'rgba(245,158,11,0.12)' : 'rgba(16,185,129,0.12)', color: ep.color, fontSize: '11px', fontWeight: '700', fontFamily: 'monospace', minWidth: '42px', textAlign: 'center', flexShrink: 0 }}>
                  {ep.method}
                </span>
                <code style={{ fontSize: '13px', color: '#e2e8f0', flex: '1', minWidth: 0 }}>{ep.path}</code>
                <span style={{ fontSize: '13px', color: '#64748b', display: 'none' }}>{ep.desc}</span>
                <span style={{ fontSize: '13px', color: '#94a3b8', flexShrink: 0 }}>{ep.desc}</span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '16px', fontSize: '13px', color: '#475569' }}>
            Interactive docs with request builder: <code style={{ color: '#818cf8' }}>http://localhost:8080/docs</code> (FastAPI Swagger UI auto-generated)
          </p>
        </div>
      </section>

      {/* Deployment tiers */}
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', color: '#818cf8', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Deployment</span>
          </div>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: '800', marginBottom: '12px' }}>
            Three tiers. Same API. Your data never leaves your boundary.
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '48px', fontSize: '16px', maxWidth: '700px', lineHeight: '1.7' }}>
            The platform intelligence (playbook models, agent orchestration, trained classifiers) stays as AgentOpsLab IP — delivered as a container that runs inside your own infrastructure.
          </p>
          <div className="tiers-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {TIERS.map(tier => (
              <div key={tier.name} className="tier-card" style={{ background: tier.gradient, border: `1px solid ${tier.border}`, borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: '800', color: tier.color }}>{tier.name}</span>
                </div>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px', fontWeight: '500' }}>{tier.price}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {tier.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <Check size={13} color={tier.color} style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontSize: '13px', color: '#cbd5e1' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: `1px solid ${tier.border}`, paddingTop: '16px' }}>
                  <div style={{ fontSize: '12px', color: '#475569', marginBottom: '4px' }}>RUNS IN</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600', marginBottom: '8px' }}>{tier.deploy}</div>
                  <div style={{ fontSize: '12px', color: '#475569', marginBottom: '4px' }}>LLM ENDPOINT</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '500' }}>{tier.llm}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud-agnostic */}
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', color: '#10b981', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Cloud-Agnostic</span>
          </div>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: '800', marginBottom: '12px' }}>
            Deploy anywhere. Agent code never changes.
          </h2>
          <p style={{ color: '#94a3b8', marginBottom: '48px', fontSize: '16px', maxWidth: '700px', lineHeight: '1.7' }}>
            Only the LLM endpoint config changes per cloud target. The same container image runs on AWS, Azure, GCP, or bare-metal Kubernetes.
          </p>
          <div className="clouds-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
            {CLOUDS.map(cloud => (
              <div key={cloud.name} className="cloud-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', color: cloud.color, marginBottom: '16px', letterSpacing: '0.05em' }}>{cloud.name}</div>
                {[
                  ['Runtime',  cloud.runtime],
                  ['LLM',      cloud.llm],
                  ['Database', cloud.storage],
                  ['Secrets',  cloud.secrets],
                ].map(([label, value]) => (
                  <div key={label} style={{ marginBottom: '10px' }}>
                    <div style={{ fontSize: '10px', color: '#475569', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{value}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '24px', padding: '16px 20px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <Lock size={16} color="#4ade80" style={{ marginTop: '2px', flexShrink: 0 }} />
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>
              <strong style={{ color: '#4ade80' }}>Data never reaches the model provider.</strong> Every cloud deployment uses private network endpoints (AWS PrivateLink, Azure Private Endpoint, GCP VPC Service Controls) so document content stays inside the client's network boundary.
            </p>
          </div>
        </div>
      </section>

      {/* SSE explainer */}
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,32px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', color: '#818cf8', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Real-time Streaming</span>
          </div>
          <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: '800', marginBottom: '32px' }}>
            Watch agents reason — live
          </h2>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', flex: '1', minWidth: '280px' }}>
              <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px', fontFamily: 'monospace' }}>GET /v1/jobs/{'{job_id}'}/stream</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { type: 'start',          color: '#3b82f6', desc: 'Pipeline started — filename, agent count' },
                  { type: 'agent_complete', color: '#8b5cf6', desc: 'One agent finished — name, progress index' },
                  { type: 'agent_complete', color: '#8b5cf6', desc: 'Next agent — repeats until all done' },
                  { type: 'complete',       color: '#4ade80', desc: 'All agents done — elapsed time' },
                  { type: 'error',          color: '#ef4444', desc: 'Pipeline error — message + trace' },
                ].map((e, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '8px 12px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
                    <code style={{ fontSize: '11px', color: e.color, padding: '2px 6px', background: `${e.color}18`, borderRadius: '4px', flexShrink: 0 }}>{e.type}</code>
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>{e.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: '1', minWidth: '280px' }}>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
                The SSE stream uses cursor-based delivery — each event has an integer ID. If your connection drops, reconnect with <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>Last-Event-ID</code> and replay continues from where you left off.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '15px', marginBottom: '20px' }}>
                Alternatively, poll <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>GET /v1/jobs/{'{job_id}'}</code> until <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>status == "complete"</code>, then fetch the full result.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'No polling loop required',
                  'Works with EventSource API in browser',
                  'Cursor-based reconnect on drop',
                  'Events stored in DB for late consumers',
                ].map(f => (
                  <div key={f} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Check size={13} color="#818cf8" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '14px', color: '#cbd5e1' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(72px,12vw,120px) clamp(16px,5vw,32px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: '800', marginBottom: '20px' }}>
            Ready to integrate?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '17px', lineHeight: '1.7', marginBottom: '40px' }}>
            Request an API key and have your first NDA reviewed or invoice batch processed in under 15 minutes.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:api@agentopslab.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 28px', background: '#3b82f6', color: '#fff', borderRadius: '12px', fontWeight: '700', fontSize: '16px', textDecoration: 'none' }}>
              <Key size={18} />Request API Key
            </a>
            <a href="http://localhost:8080/docs" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 28px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '12px', fontWeight: '700', fontSize: '16px', textDecoration: 'none' }}>
              <Terminal size={18} />Explore Swagger UI
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
