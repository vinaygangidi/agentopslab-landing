'use client';

import { Zap, Github, ArrowLeft, ChevronRight, CheckCircle2, XCircle, Info, AlertTriangle, Shield, FileText, BarChart3, Clock } from 'lucide-react';

export default function NDAReviewPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; overflow-x: hidden; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .pipeline-step { transition: border-color 0.2s ease; }
        .pipeline-step:hover { border-color: rgba(99,102,241,0.4) !important; }
        .table-row:hover { background: rgba(255,255,255,0.03) !important; }
        .scenario-card { transition: border-color 0.2s ease; }
        .scenario-card:hover { border-color: rgba(99,102,241,0.4) !important; }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)', zIndex: 50 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px', height: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
              <ArrowLeft size={16} />
              Back
            </a>
            <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={18} color="white" />
              </div>
              <span style={{ fontSize: '16px', fontWeight: '700' }}>AgentOpsLab</span>
            </div>
            <ChevronRight size={14} color="#64748b" />
            <span style={{ fontSize: '14px', color: '#64748b' }}>Agentic Systems</span>
            <ChevronRight size={14} color="#64748b" />
            <span style={{ fontSize: '14px', color: '#818cf8', fontWeight: '500' }}>NDA Review</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, rgba(99,102,241,0.07) 0%, rgba(10,10,10,0) 100%)', padding: '80px 32px 60px', borderBottom: '1px solid rgba(99,102,241,0.12)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 12px', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#818cf8', letterSpacing: '0.06em' }}>AGENTIC SYSTEMS</span>
            <span style={{ padding: '4px 12px', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.35)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#818cf8', letterSpacing: '0.06em' }}>5-AGENT PIPELINE</span>
            <span style={{ padding: '4px 12px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#4ade80', letterSpacing: '0.06em' }}>LIVE</span>
            <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '12px', fontWeight: '600', color: '#94a3b8' }}>Legal Operations</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-0.03em' }}>
            NDA Counterparty<br />
            <span style={{ color: '#818cf8' }}>Paper Review Agent</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '680px', lineHeight: '1.7', marginBottom: '40px' }}>
            A 5-agent pipeline that reviews counterparty-originated NDAs against a configurable legal playbook - scoring each clause, flagging deviations, and producing a compliance memo. Built for the 60–70% of NDAs that arrive on the other party's paper, not yours.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { label: 'NDAs on counterparty paper', value: '60–70%', sub: 'arrive as PDF, not your template' },
              { label: 'Manual review time', value: '2–4 hrs', sub: 'per NDA for a junior associate' },
              { label: 'Agent review time', value: '~6 min', sub: 'per document end-to-end' },
              { label: 'Clause types scored', value: '10', sub: 'against configurable playbook' },
            ].map((s, i) => (
              <div key={i} style={{ flex: '1', minWidth: '200px', padding: '20px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#818cf8', marginBottom: '4px' }}>{s.value}</div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#e2e8f0', marginBottom: '2px' }}>{s.label}</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context banner */}
      <section style={{ padding: '0 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 0' }}>
          <div style={{ display: 'flex', gap: '12px', padding: '20px 24px', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '12px', alignItems: 'flex-start' }}>
            <Info size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.7' }}>
              <strong style={{ color: '#e2e8f0' }}>Honest framing:</strong> Ironclad, Juro, and Contractbook already do AI-powered counterparty paper review - clause extraction, risk flagging, redline suggestions, workflow routing. This agent is not a better Ironclad. The question is a narrower one: for teams that cannot or will not send NDAs to a third-party SaaS, what does a self-hosted alternative look like?
            </p>
          </div>
        </div>
      </section>

      {/* What modern CLM AI already does */}
      <section style={{ padding: '0 32px 64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>What Ironclad, Juro, and Contractbook Already Do</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>Modern CLM platforms have already built AI counterparty review. These are solved problems at the platform level.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {[
              { title: 'AI clause extraction from counterparty PDFs', desc: 'Ironclad\'s AI identifies clause types in any format - including non-standard headings. This is not a gap in modern CLM platforms.' },
              { title: 'Risk flagging against your playbook', desc: 'Playbook positions configured in the platform UI. Deviations are flagged automatically. Juro and Contractbook both offer this.' },
              { title: 'Redline generation', desc: 'Ironclad generates tracked-change Word documents with your preferred fallback language. This agent does not - a genuine gap.' },
              { title: 'Approval workflow and eSignature', desc: 'Routing to approvers, SLA tracking, DocuSign integration. Mature in all three platforms.' },
              { title: 'Contract repository and obligation tracking', desc: 'Executed contracts stored, obligations tracked, renewals alerted. Full lifecycle management post-signature.' },
              { title: 'CRM and ERP integration', desc: 'Salesforce, HubSpot, NetSuite integrations for contract-to-close workflows. Well-developed in Ironclad.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', padding: '18px 20px', background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '10px' }}>
                <CheckCircle2 size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', padding: '20px 24px', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '12px', alignItems: 'flex-start', marginBottom: '0' }}>
            <AlertTriangle size={18} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.7' }}>
              <strong style={{ color: '#f87171' }}>The honest conclusion:</strong> If your company can use Ironclad, it should. It has better UX, redline generation, proven accuracy, support SLA, and full CLM integration. This agent does not match that feature set.
            </p>
          </div>
        </div>
      </section>

      {/* The actual gap */}
      <section style={{ padding: '64px 32px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>Where This Agent Fits Instead</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>Three specific conditions where the Ironclad answer does not apply.</p>

          <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  {['Condition', 'Ironclad / Juro', 'This Agent'].map((h, i) => (
                    <th key={i} style={{ padding: '12px 16px', textAlign: 'left', color: '#94a3b8', fontWeight: '600', borderBottom: '1px solid rgba(255,255,255,0.08)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    condition: 'Data sovereignty - NDAs contain sensitive deal terms that cannot leave your infrastructure',
                    ironclad: 'Cloud SaaS - your NDA PDFs are uploaded to Ironclad\'s servers, processed by their AI infrastructure.',
                    agent: 'Runs on your infra (local, private cloud, or air-gapped). The PDF never leaves your environment. Mistral OCR call is the only external API touch; it can be swapped for a local OCR model.',
                  },
                  {
                    condition: 'Cost - Ironclad pricing starts at $50K–$100K/year at enterprise tier',
                    ironclad: 'Enterprise SaaS pricing. Justified at high volume with full CLM needs. Difficult to justify for teams doing 20–50 NDAs/month without broader CLM requirements.',
                    agent: '~$0.30/doc in Claude + Mistral API costs. No seat licenses, no platform fee. For 50 NDAs/month: ~$15/month in compute.',
                  },
                  {
                    condition: 'Playbook logic ownership - you need full control over what the AI is reasoning about and why',
                    ironclad: 'Playbook configured in their UI. The AI model and scoring logic are Ironclad\'s. You see the output, not the reasoning chain.',
                    agent: 'nda_playbook.json is your file. The scoring logic is in your code. Every clause score has a traceable rationale. You can modify the model, the thresholds, and the clause taxonomy.',
                  },
                  {
                    condition: 'Building internal legal tooling - a legal engineering team embedding NDA review into a larger system',
                    ironclad: 'API access available but still SaaS-dependent. Integration limited to what the platform exposes.',
                    agent: 'Fully composable. The 5-agent output is structured JSON - pipe it into a Slack alert, a Jira ticket, a CLM import, or a redline generator. No platform dependency.',
                  },
                ].map((row, i) => (
                  <tr key={i} className="table-row" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '14px 16px', color: '#e2e8f0', fontWeight: '500', verticalAlign: 'top', maxWidth: '220px' }}>{row.condition}</td>
                    <td style={{ padding: '14px 16px', color: '#94a3b8', verticalAlign: 'top' }}>{row.ironclad}</td>
                    <td style={{ padding: '14px 16px', color: '#818cf8', verticalAlign: 'top', fontWeight: '500' }}>{row.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', gap: '12px', padding: '20px 24px', background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', alignItems: 'flex-start' }}>
            <Info size={18} color="#818cf8" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.7' }}>
              <strong style={{ color: '#e2e8f0' }}>The practical decision tree:</strong> If you need full CLM (workflow, eSignature, repository, redlines) and data residency is not a constraint - use Ironclad. If you need only the review intelligence layer, want it self-hosted, and are comfortable with JSON output rather than a polished UI - this is the approach.
            </p>
          </div>
        </div>
      </section>

      {/* Agent pipeline */}
      <section style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>5-Agent Pipeline</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>Sequential. Each agent receives only the structured output of the prior one - minimising tokens, maximising accuracy per step.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
            {[
              {
                n: '01', name: 'Legal Document Parser', model: 'Claude Haiku', color: '#3b82f6',
                what: 'Calls Mistral OCR on the PDF. Handles digital, scanned, and handwritten contracts. Outputs structured Markdown with [PAGE X of Y] markers.',
                why: 'Haiku for this step - it\'s mechanical orchestration, not legal reasoning. 20× cheaper than Sonnet for the same result.',
              },
              {
                n: '02', name: 'Clause Extractor', model: 'Claude Haiku', color: '#3b82f6',
                what: 'Identifies all 10 standard NDA clause types (CL-001 through CL-010) in the document text. Notes the page number for each. Flags missing clauses.',
                why: 'LLM reasoning finds clauses regardless of non-standard headings. Keyword pre-scan narrows the search space before the model reads.',
              },
              {
                n: '03', name: 'Playbook Reviewer', model: 'Claude Sonnet', color: '#8b5cf6',
                what: 'Compares each extracted clause against the nda_playbook.json. Identifies acceptable positions, deviations, and risky language. Assigns a risk score (0–10) per clause.',
                why: 'Sonnet here - understanding the difference between "commercially reasonable efforts" and "best efforts" requires legal language nuance, not pattern matching.',
              },
              {
                n: '04', name: 'Risk Scoring Analyst', model: 'Claude Sonnet', color: '#8b5cf6',
                what: 'Aggregates clause scores into a total risk score. Applies thresholds: LOW (0–15), MEDIUM (16–35), HIGH (36–60), CRITICAL (61+). Recommends: APPROVE / REVISE / REDLINE / ESCALATE.',
                why: 'Risk compounding across clauses requires judgment - a missing indemnification clause combined with foreign jurisdiction is more than the sum of its parts.',
              },
              {
                n: '05', name: 'Compliance Officer', model: 'Claude Haiku', color: '#3b82f6',
                what: 'Final gate check. Verifies 5 mandatory clauses are present. Issues PASS / CONDITIONAL / FAIL verdict. Determines required sign-off authority (Legal Manager → General Counsel) and estimated revision rounds.',
                why: 'Rules-based gate - no ambiguity, no reasoning needed. Haiku is the right model for this step.',
              },
            ].map((step, i) => (
              <div key={i} className="pipeline-step" style={{ display: 'flex', gap: '0', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ width: '80px', flexShrink: 0, background: 'rgba(99,102,241,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.06)', gap: '4px', padding: '16px 8px' }}>
                  <span className="mono" style={{ fontSize: '18px', fontWeight: '700', color: step.color }}>{step.n}</span>
                  <span style={{ fontSize: '9px', fontWeight: '700', color: step.color, padding: '2px 5px', background: step.color + '18', borderRadius: '4px', textAlign: 'center' }}>{step.model.split(' ')[1]}</span>
                </div>
                <div style={{ padding: '20px 24px', flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>{step.name}</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '8px', lineHeight: '1.6' }}>{step.what}</div>
                  <div style={{ fontSize: '12px', color: '#818cf8', lineHeight: '1.5' }}>→ {step.why}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Output */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '24px', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#4ade80', marginBottom: '10px' }}>JSON Report</div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>Structured output: per-clause risk scores, deviations found, compliance verdict, missing clauses, sign-off authority required. Machine-readable for downstream integrations (CLM import, Jira ticket, Slack alert).</p>
            </div>
            <div style={{ padding: '24px', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#4ade80', marginBottom: '10px' }}>PDF Legal Memo</div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>Human-readable memo with clause-by-clause findings, risk narrative, and recommended actions. Generated by a Python report writer - zero LLM cost for the output step.</p>
            </div>
            <div style={{ padding: '24px', background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#818cf8', marginBottom: '10px' }}>Configurable Playbook</div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>
                <span className="mono" style={{ color: '#818cf8' }}>nda_playbook.json</span> defines acceptable positions per clause. Legal team updates it; no code changes needed. Different playbooks can be used for different contract types or jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When it adds value */}
      <section style={{ padding: '64px 32px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>When This Agent Adds Value</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>Specific situations where the manual review cost justifies automation.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              {
                icon: <BarChart3 size={18} color="#818cf8" />,
                title: 'High NDA volume from vendors or partners',
                desc: 'A procurement team, a business development function, or a startup in a growth phase receiving 30–100 NDAs per month. Each one is counterparty paper, each one needs to be reviewed before signing. The agent standardises the review and surfaces the ones that need a lawyer\'s attention.',
              },
              {
                icon: <Clock size={18} color="#818cf8" />,
                title: 'Legal team bandwidth constraint',
                desc: 'In-house legal teams at mid-market companies are often 2–5 people covering all contract types. NDA review is necessary but low-value relative to M&A, litigation, or complex commercial deals. The agent handles the routine cases; the lawyers review the high-risk outputs.',
              },
              {
                icon: <Shield size={18} color="#818cf8" />,
                title: 'Consistency of playbook application',
                desc: 'Manual review by different associates on different days produces inconsistent outcomes - same clause, different risk assessment. The agent applies the same playbook to every document, every time. Consistency is the baseline; the lawyer adds judgment on edge cases.',
              },
              {
                icon: <FileText size={18} color="#818cf8" />,
                title: 'Pre-Icertis triage or first-pass review',
                desc: 'Used before a CLM platform in the workflow: the agent reviews the counterparty\'s PDF, produces a risk score and redline recommendations, then the outcome (accepted / rejected / revised) is uploaded to the CLM for lifecycle management.',
              },
            ].map((s, i) => (
              <div key={i} className="scenario-card" style={{ padding: '24px', background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  {s.icon}
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#e2e8f0' }}>{s.title}</span>
                </div>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#94a3b8' }}>When to Use Ironclad Instead</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Data residency is not a constraint and you need full CLM - workflow, eSignature, redline generation, obligation tracking. Use Ironclad.',
              'You need redlines. This agent identifies what needs to change but does not produce a tracked-change Word document. Ironclad does.',
              'Your volume justifies the platform cost and you want a polished UI, a support SLA, and vendor accountability.',
              'Your legal team is not technical - Ironclad\'s UI is purpose-built for lawyers; this agent requires engineering to configure and operate.',
              'Your NDAs involve complex, bespoke terms (M&A, JVs) requiring senior counsel judgment regardless - the first-pass automation value is lower.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '12px 16px', background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '8px' }}>
                <XCircle size={15} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clause taxonomy */}
      <section style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>10 Standard NDA Clause Types</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>Every review scores all 10. Missing or non-standard clauses increase the aggregate risk score.</p>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr 1fr', padding: '10px 20px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {['ID', 'Clause Type', 'What the Playbook Checks'].map(h => (
                <div key={h} style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h}</div>
              ))}
            </div>
            {[
              { id: 'CL-001', name: 'Definition of Confidential Information', check: 'Scope breadth - overly broad definitions create downstream risk; overly narrow ones leave IP unprotected.' },
              { id: 'CL-002', name: 'Obligations of Receiving Party', check: '"Reasonable care" vs "best efforts" vs "same degree of care as own confidential info" - the standard matters.' },
              { id: 'CL-003', name: 'Term and Duration', check: 'Perpetual obligations are a red flag. Standard acceptable range: 2–5 years. Auto-renewal clauses flagged.' },
              { id: 'CL-004', name: 'Permitted Disclosures', check: 'Does compelled disclosure require prior notice to disclosing party? Is the permitted list appropriately narrow?' },
              { id: 'CL-005', name: 'Return or Destruction of Information', check: 'Destruction certificate required? Timeframe after termination? Backup retention carve-outs flagged.' },
              { id: 'CL-006', name: 'Remedies and Injunctive Relief', check: 'Asymmetric remedies - one party waives right to injunctive relief, the other retains it - is a risk signal.' },
              { id: 'CL-007', name: 'Governing Law and Jurisdiction', check: 'Foreign jurisdiction and non-English governing law both increase dispute resolution cost and risk.' },
              { id: 'CL-008', name: 'Mutual vs One-Way Obligations', check: 'Is the NDA truly mutual, or is one party bearing all obligations? Mislabeled "mutual" NDAs are common.' },
              { id: 'CL-009', name: 'Exclusions from Confidentiality', check: 'Standard four exclusions: public domain, prior knowledge, independent development, third-party disclosure.' },
              { id: 'CL-010', name: 'No License Grant', check: 'Absence of an explicit no-license clause creates ambiguity - counterparty may argue implied license to use IP.' },
            ].map((clause, i) => (
              <div key={clause.id} className="table-row" style={{ display: 'grid', gridTemplateColumns: '90px 1fr 1fr', padding: '14px 20px', borderBottom: i < 9 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div className="mono" style={{ fontSize: '12px', color: '#818cf8', fontWeight: '600', paddingTop: '2px' }}>{clause.id}</div>
                <div style={{ fontSize: '13px', color: '#e2e8f0', fontWeight: '500', paddingRight: '16px' }}>{clause.name}</div>
                <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6' }}>{clause.check}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production gaps */}
      <section style={{ padding: '0 32px 64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ padding: '28px 32px', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '12px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <AlertTriangle size={18} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#f87171', marginBottom: '8px' }}>Current Limitations</div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[
                    'Clause extraction accuracy depends on OCR quality - heavily degraded scans may miss clauses',
                    'Risk scoring reflects the configured playbook only - legal judgment on genuinely novel terms still requires a lawyer',
                    'No redline generation - the agent identifies what needs to change but does not produce a marked-up Word document',
                    'No CLM write-back - the JSON report must be manually imported into Icertis or DocuSign CLM',
                    'Playbook is English-only - cross-border NDAs with non-English provisions need manual review of those sections',
                    'No precedent awareness - the agent does not know what your company has accepted from this counterparty in prior contracts',
                  ].map((gap, i) => (
                    <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '13px', color: '#94a3b8' }}>
                      <span style={{ color: '#f87171', flexShrink: 0 }}>·</span>
                      {gap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 32px', background: 'rgba(99,102,241,0.04)', borderTop: '1px solid rgba(99,102,241,0.12)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700' }}>View the Source</h2>
          <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '520px', lineHeight: '1.7' }}>
            Full 5-agent pipeline, Mistral OCR integration, configurable playbook, and sample NDAs - all in the repo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px', textAlign: 'center' }}>
        <span style={{ fontSize: '13px', color: '#64748b' }}>AgentOpsLab · NDA Counterparty Paper Review Agent · Built with CrewAI + Claude</span>
      </footer>
    </div>
  );
}
