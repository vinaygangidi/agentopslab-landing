'use client';

import { Zap, Github, ArrowLeft, ChevronRight, AlertTriangle, CheckCircle2, XCircle, Info, BarChart3, Shield, Clock, DollarSign } from 'lucide-react';

export default function APExceptionResolutionPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; overflow-x: hidden; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .scenario-card:hover { border-color: rgba(245,158,11,0.4) !important; }
        .scenario-card { transition: border-color 0.2s ease; }
        .table-row:hover { background: rgba(255,255,255,0.03) !important; }
        .agent-step:hover { border-color: rgba(245,158,11,0.4) !important; }
        .agent-step { transition: border-color 0.2s ease; }
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
            <span style={{ fontSize: '14px', color: '#f59e0b', fontWeight: '500' }}>AP Exception Resolution</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, rgba(245,158,11,0.07) 0%, rgba(10,10,10,0) 100%)', padding: '80px 32px 60px', borderBottom: '1px solid rgba(245,158,11,0.12)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 12px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#f59e0b', letterSpacing: '0.06em' }}>AGENTIC SYSTEMS</span>
            <span style={{ padding: '4px 12px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#f59e0b', letterSpacing: '0.06em' }}>6-AGENT PIPELINE</span>
            <span style={{ padding: '4px 12px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#4ade80', letterSpacing: '0.06em' }}>LIVE</span>
            <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '12px', fontWeight: '600', color: '#94a3b8' }}>Enterprise Finance</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '-0.03em' }}>
            AP Exception<br />
            <span style={{ color: '#f59e0b' }}>Resolution Agent</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '680px', lineHeight: '1.7', marginBottom: '40px' }}>
            A downstream resolution layer for the 20–30% of invoices that fail automated matching in ERP systems — not a replacement for SAP or Oracle's matching engine, but a layer that automates the manual work that follows a block.
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { label: 'Industry exception rate', value: '20–30%', sub: 'of all invoices blocked (IOFM)' },
              { label: 'Manual resolution cost', value: '$12–25', sub: 'per exception invoice (Hackett)' },
              { label: 'Discount ROI missed', value: '36.7%', sub: 'annualised on 2/10 Net 30 terms' },
              { label: 'Agents in pipeline', value: '6', sub: 'sequential, data-privacy enforced' },
            ].map((s, i) => (
              <div key={i} style={{ flex: '1', minWidth: '200px', padding: '20px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#f59e0b', marginBottom: '4px' }}>{s.value}</div>
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
              <strong style={{ color: '#e2e8f0' }}>Context:</strong> SAP S/4HANA and Oracle Fusion AP both perform 2-way and 3-way invoice matching natively. This agent does not replicate that functionality. It targets what comes next — the invoices those systems have already decided to block — and automates the resolution decisions that would otherwise require a trained AP clerk.
            </p>
          </div>
        </div>
      </section>

      {/* What ERP already does */}
      <section style={{ padding: '0 32px 64px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>What SAP and Oracle Already Handle Natively</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>These capabilities exist out of the box — no agent required.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
            {[
              { title: '2-way match', desc: 'Invoice amount ↔ PO amount, within configured tolerance. Standard in all mid-market and enterprise ERP.' },
              { title: '3-way match engine', desc: 'Invoice ↔ PO ↔ Goods Receipt by line item. SAP MIRO / Oracle MIRA handle this transactionally.' },
              { title: 'Tolerance groups', desc: 'Per-company-code or per-vendor percentage and absolute tolerances. SAP VTOL/LTOL/PP keys, Oracle AP tolerances.' },
              { title: 'Payment blocking', desc: 'Invoices outside tolerance are automatically moved to "blocked for payment" status — no manual step needed.' },
              { title: 'Approval workflows', desc: 'SAP Fiori and Oracle Approvals Management route blocked invoices with SLA timers and escalation paths.' },
              { title: 'Duplicate detection', desc: 'Both platforms detect duplicate invoice numbers and amounts against the same vendor within a window.' },
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
        </div>
      </section>

      {/* The actual gap */}
      <section style={{ padding: '64px 32px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>The Gap: What Happens After the Block</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>The matching engine is not the problem. The manual work that follows is.</p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  {['Root Cause', 'ERP Behavior', 'What a Clerk Does Manually', 'What This Agent Does'].map((h, i) => (
                    <th key={i} style={{ padding: '12px 16px', textAlign: 'left', color: '#94a3b8', fontWeight: '600', borderBottom: '1px solid rgba(255,255,255,0.08)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    cause: 'GRN not posted yet',
                    erp: 'Blocks full invoice indefinitely',
                    manual: 'Calls warehouse, waits for GRN, re-runs match',
                    agent: 'Approves confirmed portion, holds remainder — partial payment released same day',
                  },
                  {
                    cause: 'Informal PO amendment (price change agreed verbally/email)',
                    erp: 'Blocks on price variance — PO still has old price',
                    manual: 'Finds change order email, confirms with buyer, updates PO or overrides',
                    agent: 'Cross-references PO amendments table; auto-approves if amendment covers the variance',
                  },
                  {
                    cause: 'Vendor-negotiated tolerance not in ERP config',
                    erp: 'Applies standard company-code tolerance',
                    manual: 'Checks contract, submits IT ticket to update tolerance group (days/weeks)',
                    agent: 'AP manager updates vendor rule in compliance table; takes effect on next run',
                  },
                  {
                    cause: '"2/10 Net 30" discount window expiring while blocked',
                    erp: 'Tracks payment terms; no proactive prioritization',
                    manual: 'Sometimes catches it, often misses it under workload',
                    agent: 'Calculates annualised ROI per invoice, surfaces HIGH priority queue before deadline',
                  },
                  {
                    cause: 'Bank account change on invoice',
                    erp: 'Validates format; matches if vendor master was already updated',
                    manual: 'Calls vendor to verify; checks prior bank account records',
                    agent: 'Checks against vendor bank history table; flags behavioral signals + email domain',
                  },
                  {
                    cause: 'Amount just under approval threshold',
                    erp: 'Clears if amounts match — no pattern context',
                    manual: 'Rarely flagged unless analyst is experienced',
                    agent: 'Structuring signal: flags if amount is within 5% of $50K/$25K/$10K/$5K thresholds',
                  },
                ].map((row, i) => (
                  <tr key={i} className="table-row" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '14px 16px', color: '#e2e8f0', fontWeight: '500', verticalAlign: 'top' }}>{row.cause}</td>
                    <td style={{ padding: '14px 16px', color: '#94a3b8', verticalAlign: 'top' }}>{row.erp}</td>
                    <td style={{ padding: '14px 16px', color: '#94a3b8', verticalAlign: 'top' }}>{row.manual}</td>
                    <td style={{ padding: '14px 16px', color: '#f59e0b', verticalAlign: 'top', fontWeight: '500' }}>{row.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Agent pipeline */}
      <section style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>6-Agent Pipeline</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>Sequential. Each agent receives the prior agent's output. Vendor data is masked before reaching the LLM.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                n: '01', name: 'Vendor Compliance Officer', color: '#f59e0b',
                what: 'Checks each invoice against per-vendor compliance rules stored in the database.',
                outputs: 'COMPLIANT → pass downstream. NON_COMPLIANT → block, no further processing.',
                differentiator: 'Rules are updatable at runtime by AP managers — no code deployment, no IT ticket.',
              },
              {
                n: '02', name: 'Three-Way Match Specialist', color: '#f59e0b',
                what: 'Matches Invoice ↔ PO ↔ GRN at line-item level. Aggregates partial GRN receipts across multiple delivery notes.',
                outputs: 'THREE_WAY_MATCHED · PARTIAL_GRN_HOLD · PRICE_UNEXPLAINED · NO_GRN_HOLD · PO_NOT_FOUND',
                differentiator: 'Calculates approvable amount (confirmed GRN) and hold amount (unconfirmed) per line — enabling partial payment.',
              },
              {
                n: '03', name: 'Exception Intelligence', color: '#f59e0b',
                what: 'For every non-matched invoice: checks vendor tolerance policy, cross-references PO amendment log, determines resolution.',
                outputs: 'AUTO_APPROVED · PARTIAL_APPROVED · NEEDS_APPROVAL · HOLD_PENDING_RECEIPT · ESCALATE',
                differentiator: 'Tolerance is per-vendor (not just per-company-code). PO amendments bridge the gap between procurement and finance.',
              },
              {
                n: '04', name: 'Payment Terms Optimizer', color: '#f59e0b',
                what: 'Parses "D/DD Net NN" terms on every invoice. Calculates annualised ROI on early payment discount.',
                outputs: 'Priority queue: HIGH · MEDIUM · LOW · EXPIRED · NO_DISCOUNT. ROI = (d/(1-d)) × (365/spread) × 100',
                differentiator: 'Runs on all invoices, including blocked ones — a blocked invoice with a 36% annualised ROI discount should be prioritised for rapid human resolution.',
              },
              {
                n: '05', name: 'Fraud Signal Detector', color: '#ef4444',
                what: 'Checks 7 independent signals per invoice: bank account change, email domain mismatch, new vendor, structuring, round numbers, rush terms, first invoice.',
                outputs: 'FRAUD_RISK_HIGH (payment frozen) · FRAUD_RISK_MEDIUM · FRAUD_RISK_LOW · CLEAR',
                differentiator: 'Runs on every invoice — including auto-approved ones. Fraud hides in clean-looking invoices.',
              },
              {
                n: '06', name: 'Resolution Reporter', color: '#f59e0b',
                what: 'Assigns GL accounts and cost centres via keyword matching against chart of accounts. Generates final structured report.',
                outputs: 'JSON report: auto_approved · partial_approved · needs_approval · fraud_frozen · compliance_blocked · payment_priority_queue · run_stats',
                differentiator: 'GL coding is automated for approved invoices. Report is structured for ERP write-back (SAP MIRO posting or REST API).',
              },
            ].map((step, i) => (
              <div key={i} className="agent-step" style={{ display: 'flex', gap: '0', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ width: '80px', flexShrink: 0, background: 'rgba(245,158,11,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="mono" style={{ fontSize: '18px', fontWeight: '700', color: step.color }}>{step.n}</span>
                </div>
                <div style={{ padding: '20px 24px', flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#e2e8f0', marginBottom: '6px' }}>{step.name}</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '8px', lineHeight: '1.6' }}>{step.what}</div>
                  <div className="mono" style={{ fontSize: '11px', color: '#64748b', marginBottom: '8px' }}>{step.outputs}</div>
                  <div style={{ fontSize: '12px', color: '#f59e0b', lineHeight: '1.5' }}>→ {step.differentiator}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When it adds value */}
      <section style={{ padding: '64px 32px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>When This Agent Adds Value</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>Specific operational conditions where the manual exception resolution cost justifies automation.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              {
                icon: <BarChart3 size={18} color="#f59e0b" />,
                title: 'High invoice volume, understaffed AP team',
                desc: 'A manufacturer processing 15,000 invoices/month with a 4-person AP team. At 20–30% exception rate, that\'s 3,000–4,500 exception invoices per month resolved manually. The agent automates routine resolutions, leaving the team to handle genuinely ambiguous cases.',
              },
              {
                icon: <Clock size={18} color="#f59e0b" />,
                title: 'Distributed procurement, slow GRN posting',
                desc: 'Retail or logistics companies where goods are received at remote locations and GRN posting lags 3–5 days. Invoices block immediately. Vendors complain about late payment. The agent approves partial GRNs as they arrive rather than waiting for full receipt posting.',
              },
              {
                icon: <DollarSign size={18} color="#f59e0b" />,
                title: 'Negotiated per-vendor terms not in ERP config',
                desc: 'Procurement teams negotiate custom tolerances in contracts ("accept up to 3% on commodity spot pricing for this supplier"). These terms often live in contract documents, not always reflected in ERP tolerance config. The compliance rules table bridges that gap without IT involvement.',
              },
              {
                icon: <Shield size={18} color="#f59e0b" />,
                title: 'BEC fraud risk during high-volume periods',
                desc: 'Year-end or quarter-end — high invoice velocity, AP team under pressure. A business email compromise attempt spoofs a vendor requesting a bank account change. The fraud signal layer flags it before the payment run, even if the invoice amounts match the PO perfectly.',
              },
            ].map((s, i) => (
              <div key={i} className="scenario-card" style={{ padding: '24px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  {s.icon}
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#e2e8f0' }}>{s.title}</span>
                </div>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* When it does NOT add value */}
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#94a3b8' }}>When It Does Not Add Value</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Your SAP instance has accurate tolerance groups per vendor and your workflows already route efficiently — the native tooling is sufficient.',
              'Your GRN process is real-time and invoice timing is rarely an issue — partial GRN approval is not a meaningful use case.',
              'Invoice volume is low enough that a skilled AP clerk handles exceptions in under an hour per day.',
              'You are on SAP S/4HANA Public Cloud — the approval workflows are more configurable, closing more of the gap natively.',
              'You already run a mature AP automation platform (Esker, Medius, Basware) — these vendors have built comparable exception-handling logic.',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '12px 16px', background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '8px' }}>
                <XCircle size={15} color="#f87171" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture position */}
      <section style={{ padding: '64px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '8px' }}>Where It Sits in the Stack</h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>The agent is a resolution layer, not an ERP replacement. It only operates on invoices the ERP has already decided to block.</p>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '600px' }}>
              {[
                { label: 'ERP (SAP / Oracle)', note: 'Invoice posted → 3-way match runs', color: '#60a5fa', indent: 0 },
                { label: 'Match result: BLOCKED', note: '~20–30% of invoices', color: '#f87171', indent: 1 },
                { label: 'Exception Queue', note: 'This agent processes these', color: '#f59e0b', indent: 2, highlight: true },
                { label: 'Auto-approve (routine)', note: 'Partial GRN, tolerance, PO amendment', color: '#4ade80', indent: 3 },
                { label: 'Partial approve + hold', note: 'GRN partially received', color: '#4ade80', indent: 3 },
                { label: 'Fraud freeze', note: 'BEC signals detected → escalate', color: '#f87171', indent: 3 },
                { label: 'Needs human approval', note: 'Routed with SLA, above threshold', color: '#94a3b8', indent: 3 },
                { label: 'Write-back to ERP', note: 'MIRO posting / REST API', color: '#60a5fa', indent: 2 },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', paddingLeft: `${row.indent * 28}px`, borderLeft: row.indent > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', marginLeft: row.indent > 0 ? `${(row.indent - 1) * 28 + 14}px` : '0' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: row.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', fontWeight: row.highlight ? '700' : '500', color: row.highlight ? '#f59e0b' : '#e2e8f0' }}>{row.label}</span>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>{row.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data privacy */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '24px', background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#a78bfa', marginBottom: '10px' }}>Data Privacy Guard</div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>
                Bank accounts, exact amounts, vendor names, and email addresses are masked at the tool layer before any data reaches the LLM. The model reasons about signal categories — BANK_ACCOUNT_CHANGE, AMOUNT_HIGH — not raw values. A privacy audit log is written locally per run.
              </p>
            </div>
            <div style={{ padding: '24px', background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#f59e0b', marginBottom: '10px' }}>SAP MCP Compatibility</div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>
                The data layer is swappable via <span className="mono" style={{ color: '#f59e0b' }}>DATA_BACKEND</span> env var. SQLite in dev; when SAP releases its MCP server, the same agent pipeline connects without code changes. The agent layer is ERP-agnostic.
              </p>
            </div>
            <div style={{ padding: '24px', background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#4ade80', marginBottom: '10px' }}>Runtime Compliance Updates</div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.7' }}>
                Vendor compliance rules (tolerance %, allowed currencies, LLM data permission, blacklist) are stored in a database table, not in code. AP managers can update rules via the Vendor Compliance Updater agent — effective on the next run, no deployment needed.
              </p>
            </div>
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
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#f87171', marginBottom: '8px' }}>Current Production Gaps</div>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.7', marginBottom: '12px' }}>
                  This is an honest assessment. The agent pipeline runs and produces correct outputs in dev mode against sample data. Before running on live AP data:
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[
                    'Data privacy guard is built but not yet wired as enforced middleware — currently optional per agent call',
                    'No ERP write-back — resolution decisions are JSON reports, not posted back to SAP MIRO or Oracle',
                    'No retry / circuit-breaker logic if LLM API times out mid-pipeline',
                    'Fraud signal detection has no case investigation UI — FRAUD_RISK_HIGH invoices are frozen but need a human review workflow',
                    'GL coding relies on keyword matching, not a full chart of accounts integration',
                    'SQLite mock DB — production deployment requires PostgreSQL or direct ERP API connections',
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
      <section style={{ padding: '64px 32px', background: 'rgba(245,158,11,0.04)', borderTop: '1px solid rgba(245,158,11,0.12)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700' }}>View the Source</h2>
          <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '520px', lineHeight: '1.7' }}>
            Full pipeline, 6 sample exception scenarios, data privacy guard, and vendor compliance tooling — all in the open-source repo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px', textAlign: 'center' }}>
        <span style={{ fontSize: '13px', color: '#64748b' }}>AgentOpsLab · AP Exception Resolution Agent · Built with CrewAI + Claude</span>
      </footer>
    </div>
  );
}
