'use client';

import { useState } from 'react';
import { Zap, ArrowLeft, Play, CheckCircle2, AlertTriangle, Clock, DollarSign, Shield, BarChart3, ChevronRight, RotateCcw, TrendingUp, Lock } from 'lucide-react';

const FIXTURE = {
  run_date: "2026-04-10T09:15:42",
  executive_summary: "6 exception invoices processed. 2 invoices frozen for fraud (BEC signals detected — do not release payment). 1 high-priority early payment discount expiring in 8 days with 36.7% annualised ROI. 2 invoices auto-approved after PO amendment and vendor tolerance verification. 1 partial GRN approval — 75% payable now, remainder on full receipt.",
  invoices: [
    { invoice_number: "INV-2024-AS-001",   vendor_name: "Acme Supplies",         amount: "USD 10,000",  exception_type: "Partial GRN",        outcome: "partial_approved",  description: "20 units billed, 15 received per GRN" },
    { invoice_number: "INV-2024-TP-002",   vendor_name: "TechParts GmbH",        amount: "EUR 3,900",   exception_type: "Price Variance",      outcome: "auto_approved",     description: "€195 vs PO €185 — covered by amendment" },
    { invoice_number: "INV-2024-GOS-003",  vendor_name: "Global Office Sols.",   amount: "GBP 252.75",  exception_type: "Vendor Tolerance",    outcome: "auto_approved",     description: "1.5% variance — within 3% vendor policy" },
    { invoice_number: "INV-2024-NF-001",   vendor_name: "Nordic Freight AB",     amount: "SEK 133,750", exception_type: "Payment Terms",       outcome: "payment_priority",  description: "2/10 Net 45 — SEK 2,340 discount, 8 days" },
    { invoice_number: "INV-2024-FAKE-001", vendor_name: "Fake Acme Supplies",    amount: "USD 4,250",   exception_type: "Fraud — BEC",         outcome: "fraud_frozen",      description: "Bank account changed + lookalike domain" },
    { invoice_number: "INV-2024-FAST-001", vendor_name: "FastPay Solutions LLC", amount: "USD 49,750",  exception_type: "Fraud — Structuring", outcome: "fraud_frozen",      description: "$49,750 just under $50K approval threshold" },
  ],
  agents: [
    { n: 1, name: "Vendor Compliance Officer",  model: "Haiku",  icon: "🛡️", ms: 1800, desc: "Checking vendor blacklist, OFAC sanctions, data privacy flags, and compliance rules across all 6 invoices" },
    { n: 2, name: "Three-Way Match Specialist", model: "Sonnet", icon: "🔗", ms: 2400, desc: "Matching Invoice ↔ PO ↔ GRN per line item. Calculating approvable and hold amounts for each exception" },
    { n: 3, name: "Exception Intelligence",     model: "Haiku",  icon: "🧠", ms: 2200, desc: "Applying vendor-specific tolerance policies and cross-referencing PO amendment log for price variances" },
    { n: 4, name: "Payment Terms Optimizer",    model: "Haiku",  icon: "💰", ms: 1600, desc: "Parsing payment terms, calculating annualised ROI on early payment discounts, prioritising cash deployment" },
    { n: 5, name: "Fraud Detector",             model: "Sonnet", icon: "🔍", ms: 2000, desc: "Running 7 fraud signal checks per invoice: BEC patterns, structuring, domain mismatch, bank change timing" },
    { n: 6, name: "Resolution Reporter",        model: "Haiku",  icon: "📊", ms: 1400, desc: "Assigning GL accounts and cost centres. Generating exception resolution report with audit trail" },
  ],
  result: {
    fraud_frozen: [
      { invoice_number: "INV-2024-FAKE-001", vendor_name: "Fake Acme Supplies", amount: "USD 4,250", risk_level: "FRAUD_RISK_HIGH",
        signals: ["BANK_ACCOUNT_CHANGE: Account ****9999 ≠ registered ****1234", "EMAIL_DOMAIN_MISMATCH: acme-supplies-corp.com ≠ acmesupplies.com", "NEW_VENDOR: Account registered 45 days ago"],
        action_required: "Freeze payment. Contact vendor via registered phone only. Escalate to AP Manager and Treasury." },
      { invoice_number: "INV-2024-FAST-001", vendor_name: "FastPay Solutions LLC", amount: "USD 49,750", risk_level: "FRAUD_RISK_HIGH",
        signals: ["STRUCTURING: $49,750 is within 0.5% of $50,000 approval threshold", "ROUND_NUMBERS: All line items divisible by $500 or $1,000", "RUSH_PAYMENT_TERMS: Net 7 vs industry standard Net 30"],
        action_required: "Freeze payment. Amount appears structured to avoid approval threshold. Verify vendor legitimacy. Escalate to CFO." },
    ],
    payment_priority: [
      { invoice_number: "INV-2024-NF-001", vendor_name: "Nordic Freight AB", discount_amount: "SEK 2,340", days_remaining: 8, roi_pct: 36.7, deadline: "2026-04-18", recommendation: "Pay by 2026-04-18 to capture SEK 2,340. Annualised ROI 36.7% — exceeds cost of capital." }
    ],
    auto_approved: [
      { invoice_number: "INV-2024-TP-002",  vendor_name: "TechParts GmbH",         amount: "EUR 3,900.00", gl_code: "5100 — Manufacturing & Production", reason: "Price variance covered by PO Amendment #AMD-2024-1002 (2024-11-20). Full GRN confirmed." },
      { invoice_number: "INV-2024-GOS-003", vendor_name: "Global Office Solutions", amount: "GBP 252.75",   gl_code: "5300 — Office Supplies",            reason: "1.5% variance within vendor-specific 3% tolerance policy (VND-003, negotiated 2024-01-15)." },
    ],
    partial_approved: [
      { invoice_number: "INV-2024-AS-001", vendor_name: "Acme Supplies", approve_amount: "USD 7,500", hold_amount: "USD 2,500", reason: "GRN-2024-001 confirms 15 of 20 units received (75%). Holding $2,500 pending receipt of remaining 5 units." }
    ],
    stats: { total: 6, auto: 2, partial: 1, priority: 1, fraud: 2 }
  }
};

const OUTCOME_CONFIG = {
  auto_approved:    { color: '#4ade80', bg: 'rgba(34,197,94,0.08)',   border: 'rgba(34,197,94,0.2)',   label: 'Auto-Approved',      icon: '✓' },
  partial_approved: { color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', label: 'Partial Approved',   icon: '◑' },
  payment_priority: { color: '#818cf8', bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.2)', label: 'Discount Priority', icon: '⏱' },
  fraud_frozen:     { color: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.2)', label: 'Fraud — Frozen',    icon: '⚠' },
};

const AGENT_DELAY_MS = 300;

export default function APExceptionDemoPage() {
  const [phase, setPhase] = useState('idle');
  const [completedAgents, setCompletedAgents] = useState([]);
  const [activeAgent, setActiveAgent] = useState(null);

  function runPipeline() {
    setPhase('running');
    setCompletedAgents([]);
    setActiveAgent(null);
    let elapsed = 0;
    FIXTURE.agents.forEach((agent, i) => {
      setTimeout(() => setActiveAgent(agent.n), elapsed + AGENT_DELAY_MS);
      elapsed += AGENT_DELAY_MS + agent.ms;
      setTimeout(() => {
        setCompletedAgents(prev => [...prev, agent.n]);
        if (i === FIXTURE.agents.length - 1) setTimeout(() => { setActiveAgent(null); setPhase('done'); }, 400);
      }, elapsed);
    });
  }

  function reset() { setPhase('idle'); setCompletedAgents([]); setActiveAgent(null); }

  const progress = completedAgents.length / FIXTURE.agents.length;

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0)} 50%{box-shadow:0 0 24px 4px rgba(245,158,11,0.15)} }
        .spinning { animation: spin 0.9s linear infinite; }
        .pulsing  { animation: pulse 1.4s ease-in-out infinite; }
        .fade-up  { animation: fadeUp 0.5s ease forwards; }
        .inv-card:hover { border-color: rgba(255,255,255,0.14) !important; transform: translateY(-1px); }
        .inv-card { transition: all 0.2s ease; }
        .run-btn:hover { transform: scale(1.02); box-shadow: 0 12px 40px rgba(245,158,11,0.35) !important; }
        .run-btn { transition: all 0.2s ease; }
      `}</style>

      {/* ── Nav ── */}
      <nav style={{ position: 'sticky', top: 0, background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.07)', zIndex: 50 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', textDecoration: 'none', fontSize: '13px', fontWeight: '500' }}>
              <ArrowLeft size={14} />Back
            </a>
            <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '30px', height: '30px', background: 'linear-gradient(135deg,#f59e0b,#d97706)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={15} color="#0a0a0a" strokeWidth={2.5} />
              </div>
              <span style={{ fontWeight: '700', fontSize: '14px', color: '#e2e8f0' }}>AgentOpsLab</span>
            </div>
            <ChevronRight size={12} color="#475569" />
            <span style={{ fontSize: '13px', color: '#f59e0b', fontWeight: '600' }}>AP Exception Resolution</span>
          </div>
          <span style={{ padding: '3px 12px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#4ade80', letterSpacing: '0.04em' }}>LIVE</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div style={{ background: 'linear-gradient(180deg,rgba(245,158,11,0.06) 0%,transparent 100%)', borderBottom: '1px solid rgba(245,158,11,0.1)', padding: 'clamp(40px,6vw,64px) 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '100px', fontSize: '12px', fontWeight: '600', color: '#f59e0b', marginBottom: '20px' }}>
            6 Agents · CrewAI · Claude Haiku + Sonnet
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: '800', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '16px' }}>
            AP Exception Resolution<br />
            <span style={{ color: '#f59e0b' }}>Agent Pipeline</span>
          </h1>
          <p style={{ fontSize: 'clamp(14px,2vw,17px)', color: '#64748b', lineHeight: '1.7', maxWidth: '600px', marginBottom: '36px' }}>
            Exceptions flagged by your ERP land in this queue. Six specialised agents triage, match, validate, detect fraud, and route each invoice — autonomously, in under 15 seconds.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { icon: <BarChart3 size={14}/>, label: '20–30%', sub: 'Industry exception rate' },
              { icon: <DollarSign size={14}/>, label: '$12–25', sub: 'Manual cost per invoice' },
              { icon: <TrendingUp size={14}/>, label: '36.7%', sub: 'Max discount ROI captured' },
              { icon: <Shield size={14}/>, label: '100%', sub: 'Fraud signals checked' },
            ].map(({ icon, label, sub }) => (
              <div key={sub} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px' }}>
                <span style={{ color: '#f59e0b' }}>{icon}</span>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '800', color: '#e2e8f0', lineHeight: 1 }}>{label}</div>
                  <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px' }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px' }}>

        {/* ── Invoice Queue ── */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#475569', letterSpacing: '0.1em', marginBottom: '4px' }}>AP EXCEPTION QUEUE</div>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#e2e8f0' }}>6 Invoices Pending Resolution</h2>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {Object.entries(OUTCOME_CONFIG).map(([key, cfg]) => (
                <span key={key} style={{ padding: '3px 10px', background: cfg.bg, border: `1px solid ${cfg.border}`, borderRadius: '100px', fontSize: '10px', fontWeight: '700', color: cfg.color }}>
                  {cfg.icon} {cfg.label}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
            {FIXTURE.invoices.map(inv => {
              const cfg = OUTCOME_CONFIG[inv.outcome];
              return (
                <div key={inv.invoice_number} className="inv-card" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${cfg.border}`, borderRadius: '14px', overflow: 'hidden' }}>
                  <div style={{ height: '3px', background: cfg.color, opacity: 0.6 }} />
                  <div style={{ padding: '18px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#475569', fontWeight: '600' }}>{inv.invoice_number}</span>
                      <span style={{ padding: '2px 9px', background: cfg.bg, border: `1px solid ${cfg.border}`, borderRadius: '100px', fontSize: '10px', fontWeight: '700', color: cfg.color }}>
                        {cfg.icon} {cfg.label}
                      </span>
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#e2e8f0', marginBottom: '4px' }}>{inv.vendor_name}</div>
                    <div style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '10px', letterSpacing: '-0.02em' }}>{inv.amount}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ padding: '2px 8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '5px', fontSize: '10px', fontWeight: '600', color: '#64748b' }}>{inv.exception_type}</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#475569', marginTop: '8px', lineHeight: '1.5' }}>{inv.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Run CTA ── */}
        {phase === 'idle' && (
          <div style={{ padding: 'clamp(32px,5vw,48px)', background: 'linear-gradient(135deg,rgba(245,158,11,0.06),rgba(245,158,11,0.02))', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '20px', textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚡</div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>Ready to Process</h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px', maxWidth: '420px', margin: '0 auto 28px' }}>
              6 agents will run sequentially — compliance check, 3-way match, exception analysis, payment optimisation, fraud detection, and GL coding.
            </p>
            <button className="run-btn" onClick={runPipeline} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '16px 44px', background: 'linear-gradient(135deg,#f59e0b,#d97706)', color: '#0a0a0a', borderRadius: '12px', fontWeight: '800', fontSize: '16px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 32px rgba(245,158,11,0.25)' }}>
              <Play size={18} strokeWidth={2.5} />
              Run 6-Agent Pipeline
            </button>
          </div>
        )}

        {/* ── Agent Pipeline ── */}
        {(phase === 'running' || phase === 'done') && (
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#475569', letterSpacing: '0.1em', marginBottom: '4px' }}>PIPELINE</div>
                <h2 style={{ fontSize: '18px', fontWeight: '700', color: phase === 'done' ? '#4ade80' : '#f59e0b' }}>
                  {phase === 'running' ? '⚙ Agents Processing...' : '✓ Pipeline Complete — Results Ready'}
                </h2>
              </div>
              {phase === 'done' && (
                <button onClick={reset} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 18px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                  <RotateCcw size={13} />Run Again
                </button>
              )}
            </div>

            {/* Progress bar */}
            <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '100px', marginBottom: '20px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress * 100}%`, background: 'linear-gradient(90deg,#f59e0b,#fbbf24)', borderRadius: '100px', transition: 'width 0.4s ease' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {FIXTURE.agents.map(agent => {
                const done   = completedAgents.includes(agent.n);
                const active = activeAgent === agent.n;
                return (
                  <div key={agent.n} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', background: done ? 'rgba(245,158,11,0.05)' : active ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)', border: `1px solid ${done ? 'rgba(245,158,11,0.2)' : active ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'}`, borderRadius: '12px', opacity: (!done && !active) ? 0.45 : 1, transition: 'all 0.3s ease' }}>
                    <div style={{ fontSize: '22px', width: '28px', textAlign: 'center', flexShrink: 0 }}>{agent.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: done ? '#fbbf24' : active ? '#e2e8f0' : '#64748b' }}>
                          Agent {agent.n}: {agent.name}
                        </span>
                        <span style={{ padding: '1px 7px', background: agent.model === 'Sonnet' ? 'rgba(139,92,246,0.15)' : 'rgba(59,130,246,0.15)', border: `1px solid ${agent.model === 'Sonnet' ? 'rgba(139,92,246,0.3)' : 'rgba(59,130,246,0.3)'}`, borderRadius: '4px', fontSize: '10px', fontWeight: '700', color: agent.model === 'Sonnet' ? '#a78bfa' : '#60a5fa' }}>
                          {agent.model}
                        </span>
                        {active && <span className="pulsing" style={{ fontSize: '11px', color: '#f59e0b', fontWeight: '600' }}>Processing…</span>}
                      </div>
                      <div style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5' }}>{agent.desc}</div>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      {active && <div style={{ width: '18px', height: '18px', border: '2px solid rgba(245,158,11,0.25)', borderTopColor: '#f59e0b', borderRadius: '50%' }} className="spinning" />}
                      {done   && <CheckCircle2 size={18} color="#f59e0b" />}
                      {(!done && !active) && <div style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.08)', borderRadius: '50%' }} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Results ── */}
        {phase === 'done' && (
          <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: '10px' }}>
              {[
                { val: FIXTURE.result.stats.total,    label: 'Invoices Processed', color: '#94a3b8' },
                { val: FIXTURE.result.stats.auto,     label: 'Auto-Approved',      color: '#4ade80' },
                { val: FIXTURE.result.stats.partial,  label: 'Partial Approved',   color: '#f59e0b' },
                { val: FIXTURE.result.stats.priority, label: 'Discount Captured',  color: '#818cf8' },
                { val: FIXTURE.result.stats.fraud,    label: 'Fraud Frozen',       color: '#f87171' },
              ].map(s => (
                <div key={s.label} style={{ padding: '16px 18px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '32px', fontWeight: '800', color: s.color, lineHeight: 1, marginBottom: '6px' }}>{s.val}</div>
                  <div style={{ fontSize: '11px', color: '#475569', fontWeight: '500' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Executive Summary */}
            <div style={{ padding: '24px 28px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#f59e0b', letterSpacing: '0.1em', marginBottom: '10px' }}>EXECUTIVE SUMMARY</div>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.75' }}>{FIXTURE.executive_summary}</p>
            </div>

            {/* Fraud Frozen */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Lock size={15} color="#f87171" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#f87171' }}>Fraud Frozen — Payment Blocked</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Do not release. Escalate immediately.</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {FIXTURE.result.fraud_frozen.map(inv => (
                  <div key={inv.invoice_number} style={{ padding: '20px 24px', background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                      <div>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#f87171', fontWeight: '700' }}>{inv.invoice_number}</span>
                        <span style={{ fontSize: '15px', fontWeight: '700', color: '#e2e8f0', marginLeft: '14px' }}>{inv.vendor_name}</span>
                        <span style={{ fontSize: '14px', color: '#94a3b8', marginLeft: '10px' }}>{inv.amount}</span>
                      </div>
                      <span style={{ padding: '3px 10px', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '100px', fontSize: '10px', fontWeight: '700', color: '#f87171' }}>{inv.risk_level}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '14px' }}>
                      {inv.signals.map((sig, i) => (
                        <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '12px', color: '#94a3b8', alignItems: 'flex-start' }}>
                          <span style={{ color: '#f87171', flexShrink: 0, fontWeight: '700' }}>▸</span>{sig}
                        </div>
                      ))}
                    </div>
                    <div style={{ padding: '10px 14px', background: 'rgba(239,68,68,0.07)', borderRadius: '8px', fontSize: '12px', color: '#fca5a5', fontWeight: '600', lineHeight: '1.5' }}>
                      Action Required: {inv.action_required}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Priority */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', background: 'rgba(129,140,248,0.1)', border: '1px solid rgba(129,140,248,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUp size={15} color="#818cf8" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#818cf8' }}>Early Payment Discount — Act Now</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Deadline approaching. ROI exceeds cost of capital.</div>
                </div>
              </div>
              {FIXTURE.result.payment_priority.map(p => (
                <div key={p.invoice_number} style={{ padding: '20px 24px', background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                    <div>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#818cf8', fontWeight: '700' }}>{p.invoice_number}</span>
                      <span style={{ fontSize: '15px', fontWeight: '700', color: '#e2e8f0', marginLeft: '14px' }}>{p.vendor_name}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ padding: '4px 12px', background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#818cf8' }}>
                        ⏱ {p.days_remaining} days left
                      </span>
                      <span style={{ padding: '4px 12px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', borderRadius: '100px', fontSize: '11px', fontWeight: '700', color: '#f59e0b' }}>
                        {p.roi_pct}% annualised ROI
                      </span>
                    </div>
                  </div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '10px' }}>
                    Capture <strong style={{ color: '#c4b5fd', fontSize: '15px' }}>{p.discount_amount}</strong> — pay before <strong style={{ color: '#e2e8f0' }}>{p.deadline}</strong>
                  </div>
                  <div style={{ padding: '10px 14px', background: 'rgba(99,102,241,0.07)', borderRadius: '8px', fontSize: '12px', color: '#a5b4fc', fontWeight: '500' }}>
                    → {p.recommendation}
                  </div>
                </div>
              ))}
            </div>

            {/* Auto-Approved */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 size={15} color="#4ade80" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#4ade80' }}>Auto-Approved — No Human Action Required</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>GL codes assigned. Cleared for payment run.</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {FIXTURE.result.auto_approved.map(inv => (
                  <div key={inv.invoice_number} style={{ padding: '18px 22px', background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#4ade80', fontWeight: '700' }}>{inv.invoice_number}</span>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#e2e8f0' }}>{inv.vendor_name}</span>
                        <span style={{ fontSize: '14px', color: '#94a3b8' }}>{inv.amount}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>{inv.reason}</div>
                    </div>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#4ade80', padding: '4px 10px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '6px', whiteSpace: 'nowrap' }}>
                      GL {inv.gl_code}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partial Approved */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BarChart3 size={15} color="#f59e0b" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#f59e0b' }}>Partial Approved — Split Payment</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Approvable amount released. Remainder held pending GRN.</div>
                </div>
              </div>
              {FIXTURE.result.partial_approved.map(inv => (
                <div key={inv.invoice_number} style={{ padding: '20px 24px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.18)', borderRadius: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#f59e0b', fontWeight: '700' }}>{inv.invoice_number}</span>
                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#e2e8f0' }}>{inv.vendor_name}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
                    <div style={{ padding: '12px 18px', background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '10px', textAlign: 'center', minWidth: '130px' }}>
                      <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '600', letterSpacing: '0.06em', marginBottom: '4px' }}>APPROVE NOW</div>
                      <div style={{ fontSize: '20px', fontWeight: '800', color: '#4ade80' }}>{inv.approve_amount}</div>
                    </div>
                    <div style={{ padding: '12px 18px', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '10px', textAlign: 'center', minWidth: '130px' }}>
                      <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '600', letterSpacing: '0.06em', marginBottom: '4px' }}>ON HOLD</div>
                      <div style={{ fontSize: '20px', fontWeight: '800', color: '#f87171' }}>{inv.hold_amount}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6' }}>→ {inv.reason}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
              <button onClick={reset} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: '#f59e0b', borderRadius: '10px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                <RotateCcw size={14} />Run Pipeline Again
              </button>
            </div>
          </div>
        )}
      </div>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '24px', textAlign: 'center', marginTop: '48px' }}>
        <span style={{ fontSize: '12px', color: '#334155' }}>AgentOpsLab · AP Exception Resolution Agent · CrewAI · Claude Haiku + Sonnet</span>
      </footer>
    </div>
  );
}
