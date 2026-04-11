'use client';

import { useState } from 'react';
import { Zap, ArrowLeft, Play, CheckCircle2, AlertTriangle, XCircle, Clock, DollarSign, Shield, BarChart3, ChevronRight } from 'lucide-react';

const FIXTURE = {
  run_date: "2026-04-10T09:15:42",
  executive_summary: "6 exception invoices processed. 2 invoices frozen for fraud (BEC signals detected — do not release payment). 1 high-priority early payment discount expiring in 8 days with 36.7% annualised ROI. 2 invoices auto-approved after PO amendment and vendor tolerance verification. 1 partial GRN approval — 75% payable now, remainder on full receipt.",
  invoices: [
    { invoice_number: "INV-2024-AS-001",   vendor_name: "Acme Supplies",        amount: "USD 10,000", exception_type: "Partial GRN",          outcome: "partial_approved",  description: "20 units billed, 15 received per GRN" },
    { invoice_number: "INV-2024-TP-002",   vendor_name: "TechParts GmbH",       amount: "EUR 3,900",  exception_type: "Price Variance",        outcome: "auto_approved",     description: "€195 vs PO €185 — covered by amendment" },
    { invoice_number: "INV-2024-GOS-003",  vendor_name: "Global Office Sols.",  amount: "GBP 252.75", exception_type: "Vendor Tolerance",      outcome: "auto_approved",     description: "1.5% variance — within 3% vendor policy" },
    { invoice_number: "INV-2024-NF-001",   vendor_name: "Nordic Freight AB",    amount: "SEK 133,750",exception_type: "Payment Terms",         outcome: "payment_priority",  description: "2/10 Net 45 — SEK 2,340 discount expires in 8 days" },
    { invoice_number: "INV-2024-FAKE-001", vendor_name: "Fake Acme Supplies",   amount: "USD 4,250",  exception_type: "Fraud — BEC",           outcome: "fraud_frozen",      description: "Bank account changed + lookalike domain" },
    { invoice_number: "INV-2024-FAST-001", vendor_name: "FastPay Solutions LLC",amount: "USD 49,750", exception_type: "Fraud — Structuring",   outcome: "fraud_frozen",      description: "$49,750 just under $50K approval threshold" },
  ],
  agents: [
    { n: 1, name: "Vendor Compliance Officer",    ms: 1800, desc: "Checking vendor blacklist, data privacy flags, and compliance rules for all 6 invoices..." },
    { n: 2, name: "Three-Way Match Specialist",   ms: 2400, desc: "Matching Invoice ↔ PO ↔ GRN per line item. Calculating approvable and hold amounts..." },
    { n: 3, name: "Exception Intelligence",        ms: 2200, desc: "Applying vendor tolerance policies and cross-referencing PO amendment log..." },
    { n: 4, name: "Payment Terms Optimizer",      ms: 1600, desc: "Parsing payment terms, calculating annualised ROI on early payment discounts..." },
    { n: 5, name: "Fraud Detector",               ms: 2000, desc: "Checking 7 fraud signals per invoice: bank change, domain mismatch, structuring, round numbers..." },
    { n: 6, name: "Resolution Reporter",          ms: 1400, desc: "Assigning GL accounts and cost centres. Generating final exception resolution report..." },
  ],
  result: {
    fraud_frozen: [
      {
        invoice_number: "INV-2024-FAKE-001", vendor_name: "Fake Acme Supplies", amount: "USD 4,250", risk_level: "FRAUD_RISK_HIGH",
        signals: ["BANK_ACCOUNT_CHANGE: Bank account ****9999 ≠ registered ****1234", "EMAIL_DOMAIN_MISMATCH: acme-supplies-corp.com ≠ acmesupplies.com", "NEW_VENDOR: Account registered 45 days ago"],
        action_required: "Freeze payment. Contact vendor via registered phone only. Escalate to AP Manager and Treasury."
      },
      {
        invoice_number: "INV-2024-FAST-001", vendor_name: "FastPay Solutions LLC", amount: "USD 49,750", risk_level: "FRAUD_RISK_HIGH",
        signals: ["STRUCTURING: $49,750 is within 0.5% of $50,000 approval threshold", "ROUND_NUMBERS: All line items divisible by $500 or $1,000", "RUSH_PAYMENT_TERMS: Net 7 vs industry standard Net 30"],
        action_required: "Freeze payment. Amount appears structured to avoid approval threshold. Verify vendor legitimacy. Escalate to CFO."
      },
    ],
    payment_priority: [
      { invoice_number: "INV-2024-NF-001", vendor_name: "Nordic Freight AB", discount_amount: "SEK 2,340", days_remaining: 8, roi_pct: 36.7, deadline: "2026-04-18", recommendation: "Pay by 2026-04-18 to capture SEK 2,340. Annualised ROI 36.7% — exceeds cost of capital." }
    ],
    auto_approved: [
      { invoice_number: "INV-2024-TP-002",  vendor_name: "TechParts GmbH",        amount: "EUR 3,900.00",  gl_code: "5100 — Manufacturing & Production", reason: "Price variance covered by PO Amendment #AMD-2024-1002 (2024-11-20). Full GRN confirmed." },
      { invoice_number: "INV-2024-GOS-003", vendor_name: "Global Office Solutions", amount: "GBP 252.75",   gl_code: "5300 — Office Supplies",            reason: "1.5% variance within vendor-specific 3% tolerance policy (VND-003, negotiated 2024-01-15)." },
    ],
    partial_approved: [
      { invoice_number: "INV-2024-AS-001", vendor_name: "Acme Supplies", approve_amount: "USD 7,500", hold_amount: "USD 2,500", reason: "GRN-2024-001 confirms 15 of 20 units received (75%). Holding $2,500 pending receipt of remaining 5 units." }
    ],
    stats: { total: 6, auto: 2, partial: 1, needs: 0, fraud: 2, blocked: 0 }
  }
};

const AGENT_DELAY_MS = 400;

export default function APExceptionDemoPage() {
  const [phase, setPhase] = useState('idle'); // idle | running | done
  const [completedAgents, setCompletedAgents] = useState([]);
  const [activeAgent, setActiveAgent] = useState(null);

  function runDemo() {
    setPhase('running');
    setCompletedAgents([]);
    setActiveAgent(null);

    let elapsed = 0;
    FIXTURE.agents.forEach((agent, i) => {
      setTimeout(() => setActiveAgent(agent.n), elapsed + AGENT_DELAY_MS);
      elapsed += AGENT_DELAY_MS + agent.ms;
      setTimeout(() => {
        setCompletedAgents(prev => [...prev, agent.n]);
        if (i === FIXTURE.agents.length - 1) {
          setTimeout(() => { setActiveAgent(null); setPhase('done'); }, 400);
        }
      }, elapsed);
    });
  }

  function reset() { setPhase('idle'); setCompletedAgents([]); setActiveAgent(null); }

  const totalMs = FIXTURE.agents.reduce((s, a) => s + a.ms + AGENT_DELAY_MS, 0);
  const totalSec = Math.ceil(totalMs / 1000);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinning { animation: spin 1s linear infinite; }
        .pulsing { animation: pulse 1.5s ease-in-out infinite; }
      `}</style>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)', zIndex: 50 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
              <ArrowLeft size={14} />Back
            </a>
            <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg,#3b82f6,#2563eb)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={15} color="white" />
              </div>
              <span style={{ fontWeight: '700', fontSize: '14px' }}>AgentOpsLab</span>
            </div>
            <ChevronRight size={12} color="#64748b" />
            <span style={{ fontSize: '13px', color: '#f59e0b', fontWeight: '600' }}>AP Exception Resolution — Demo</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ padding: '3px 10px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#4ade80' }}>PRE-COMPUTED</span>
            <span style={{ fontSize: '12px', color: '#64748b' }}>6 sample invoices · ~{totalSec}s replay</span>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: 'clamp(24px,4vw,38px)', fontWeight: '800', marginBottom: '10px', letterSpacing: '-0.02em' }}>
            AP Exception Resolution <span style={{ color: '#f59e0b' }}>Agent</span>
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', maxWidth: '680px' }}>
            6 exception invoices from the AP queue. 6 agents run sequentially — compliance gate, 3-way match, exception resolution, payment optimization, fraud detection, and final reporting with GL coding.
          </p>
        </div>

        {/* Invoice cards + Run button */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '12px', marginBottom: '28px' }}>
          {FIXTURE.invoices.map(inv => {
            const outcomeColor = { auto_approved: '#4ade80', partial_approved: '#f59e0b', payment_priority: '#818cf8', fraud_frozen: '#f87171' }[inv.outcome] || '#94a3b8';
            const outcomeLabel = { auto_approved: 'Auto-Approved', partial_approved: 'Partial Approved', payment_priority: 'Discount Priority', fraud_frozen: 'Fraud — Frozen' }[inv.outcome];
            return (
              <div key={inv.invoice_number} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.02)', border: `1px solid ${outcomeColor}22`, borderRadius: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <span className="mono" style={{ fontSize: '12px', color: '#64748b' }}>{inv.invoice_number}</span>
                  <span style={{ padding: '2px 8px', background: outcomeColor + '18', border: `1px solid ${outcomeColor}40`, borderRadius: '100px', fontSize: '10px', fontWeight: '700', color: outcomeColor }}>{outcomeLabel}</span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0', marginBottom: '2px' }}>{inv.vendor_name}</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>{inv.amount}</div>
                <div style={{ fontSize: '11px', color: '#475569', background: 'rgba(255,255,255,0.02)', padding: '4px 8px', borderRadius: '5px', display: 'inline-block' }}>{inv.exception_type}</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '6px' }}>{inv.description}</div>
              </div>
            );
          })}
        </div>

        {/* Run button */}
        {phase === 'idle' && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <button onClick={runDemo} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 40px', background: 'linear-gradient(135deg,#f59e0b,#d97706)', color: '#0a0a0a', borderRadius: '10px', fontWeight: '700', fontSize: '16px', border: 'none', cursor: 'pointer' }}>
              <Play size={18} />
              Run 6-Agent Pipeline
            </button>
          </div>
        )}

        {/* Agent pipeline progress */}
        {(phase === 'running' || phase === 'done') && (
          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#f59e0b', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
              {phase === 'running' ? 'Pipeline Running...' : '✓ Pipeline Complete'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {FIXTURE.agents.map(agent => {
                const done = completedAgents.includes(agent.n);
                const active = activeAgent === agent.n;
                return (
                  <div key={agent.n} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', background: done ? 'rgba(245,158,11,0.05)' : active ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)', border: `1px solid ${done ? 'rgba(245,158,11,0.25)' : active ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'}`, borderRadius: '10px', transition: 'all 0.3s ease' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: done ? 'rgba(245,158,11,0.2)' : active ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)', border: `1px solid ${done ? 'rgba(245,158,11,0.5)' : active ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {done ? <CheckCircle2 size={14} color="#f59e0b" /> : <span className="mono" style={{ fontSize: '11px', fontWeight: '700', color: active ? '#fff' : '#475569' }}>{String(agent.n).padStart(2,'0')}</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: done ? '#f59e0b' : active ? '#e2e8f0' : '#475569' }}>{agent.name}</div>
                      {active && <div className="pulsing" style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>{agent.desc}</div>}
                      {done && <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>Complete</div>}
                    </div>
                    {active && (
                      <div style={{ width: '16px', height: '16px', border: '2px solid rgba(245,158,11,0.3)', borderTopColor: '#f59e0b', borderRadius: '50%', flexShrink: 0 }} className="spinning" />
                    )}
                    {done && <div style={{ fontSize: '11px', color: '#f59e0b', fontWeight: '600' }}>✓</div>}
                  </div>
                );
              })}
            </div>

            {phase === 'running' && (
              <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <button onClick={reset} style={{ fontSize: '13px', color: '#475569', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Cancel</button>
              </div>
            )}
          </div>
        )}

        {/* Results */}
        {phase === 'done' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Executive summary */}
            <div style={{ padding: '20px 24px', background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#f59e0b', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>Executive Summary</div>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.7' }}>{FIXTURE.executive_summary}</p>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
              {[
                { label: 'Total Invoices', val: FIXTURE.result.stats.total, color: '#94a3b8' },
                { label: 'Auto-Approved', val: FIXTURE.result.stats.auto, color: '#4ade80' },
                { label: 'Partial Approved', val: FIXTURE.result.stats.partial, color: '#f59e0b' },
                { label: 'Fraud Frozen', val: FIXTURE.result.stats.fraud, color: '#f87171' },
                { label: 'Needs Approval', val: FIXTURE.result.stats.needs, color: '#94a3b8' },
                { label: 'Compliance Blocked', val: FIXTURE.result.stats.blocked, color: '#94a3b8' },
              ].map(s => (
                <div key={s.label} style={{ padding: '14px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: s.color }}>{s.val}</div>
                  <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Fraud frozen */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <AlertTriangle size={16} color="#f87171" />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#f87171' }}>FRAUD FROZEN — PAYMENT BLOCKED ({FIXTURE.result.fraud_frozen.length})</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {FIXTURE.result.fraud_frozen.map(inv => (
                  <div key={inv.invoice_number} style={{ padding: '18px 20px', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                      <div>
                        <span className="mono" style={{ fontSize: '12px', color: '#f87171', fontWeight: '700' }}>{inv.invoice_number}</span>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0', marginLeft: '12px' }}>{inv.vendor_name}</span>
                        <span style={{ fontSize: '13px', color: '#94a3b8', marginLeft: '12px' }}>{inv.amount}</span>
                      </div>
                      <span style={{ padding: '3px 10px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', borderRadius: '100px', fontSize: '10px', fontWeight: '700', color: '#f87171' }}>{inv.risk_level}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '10px' }}>
                      {inv.signals.map((s, i) => (
                        <div key={i} style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', gap: '8px' }}>
                          <span style={{ color: '#f87171', flexShrink: 0 }}>⚠</span>{s}
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: '12px', color: '#f87171', fontWeight: '600', padding: '8px 12px', background: 'rgba(239,68,68,0.08)', borderRadius: '6px' }}>
                      → {inv.action_required}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment priority */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Clock size={16} color="#818cf8" />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#818cf8' }}>HIGH-PRIORITY DISCOUNT EXPIRING</span>
              </div>
              {FIXTURE.result.payment_priority.map(p => (
                <div key={p.invoice_number} style={{ padding: '18px 20px', background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div>
                      <span className="mono" style={{ fontSize: '12px', color: '#818cf8', fontWeight: '700' }}>{p.invoice_number}</span>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0', marginLeft: '12px' }}>{p.vendor_name}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ padding: '3px 10px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.4)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#818cf8' }}>{p.days_remaining}d remaining</span>
                      <span style={{ padding: '3px 10px', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#f59e0b' }}>{p.roi_pct}% ROI</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '8px' }}>Save <strong style={{ color: '#818cf8' }}>{p.discount_amount}</strong> — deadline {p.deadline}</div>
                  <div style={{ fontSize: '12px', color: '#818cf8', fontWeight: '500' }}>→ {p.recommendation}</div>
                </div>
              ))}
            </div>

            {/* Auto-approved */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <CheckCircle2 size={16} color="#4ade80" />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#4ade80' }}>AUTO-APPROVED ({FIXTURE.result.auto_approved.length})</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {FIXTURE.result.auto_approved.map(inv => (
                  <div key={inv.invoice_number} style={{ padding: '16px 20px', background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.18)', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                      <div>
                        <span className="mono" style={{ fontSize: '12px', color: '#4ade80', fontWeight: '700' }}>{inv.invoice_number}</span>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0', marginLeft: '12px' }}>{inv.vendor_name}</span>
                        <span style={{ fontSize: '13px', color: '#94a3b8', marginLeft: '12px' }}>{inv.amount}</span>
                      </div>
                      <span className="mono" style={{ fontSize: '11px', color: '#4ade80' }}>GL: {inv.gl_code}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>→ {inv.reason}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partial approved */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <BarChart3 size={16} color="#f59e0b" />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#f59e0b' }}>PARTIAL APPROVED ({FIXTURE.result.partial_approved.length})</span>
              </div>
              {FIXTURE.result.partial_approved.map(inv => (
                <div key={inv.invoice_number} style={{ padding: '16px 20px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div>
                      <span className="mono" style={{ fontSize: '12px', color: '#f59e0b', fontWeight: '700' }}>{inv.invoice_number}</span>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0', marginLeft: '12px' }}>{inv.vendor_name}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <div style={{ padding: '8px 14px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '7px' }}>
                      <div style={{ fontSize: '10px', color: '#64748b', marginBottom: '2px' }}>APPROVE NOW</div>
                      <div style={{ fontSize: '15px', fontWeight: '700', color: '#4ade80' }}>{inv.approve_amount}</div>
                    </div>
                    <div style={{ padding: '8px 14px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '7px' }}>
                      <div style={{ fontSize: '10px', color: '#64748b', marginBottom: '2px' }}>ON HOLD</div>
                      <div style={{ fontSize: '15px', fontWeight: '700', color: '#f87171' }}>{inv.hold_amount}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>→ {inv.reason}</div>
                </div>
              ))}
            </div>

            {/* Run again */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
              <button onClick={reset} style={{ padding: '10px 28px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', borderRadius: '8px', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }}>
                ↺ Run Again
              </button>
            </div>

          </div>
        )}
      </div>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '24px', textAlign: 'center', marginTop: '40px' }}>
        <span style={{ fontSize: '12px', color: '#475569' }}>AgentOpsLab · AP Exception Resolution Agent · Pre-computed demo with 6 sample exception scenarios</span>
      </footer>
    </div>
  );
}
