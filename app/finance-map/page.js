'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';

export default function FinanceMap() {
  const [modal, setModal] = useState(null);

  const chips = [
    { label: 'CPQ to fulfillment agent', desc: 'Orchestrate order config validation across Salesforce CPQ, SAP inventory, and Icertis contract terms in a single agent workflow.' },
    { label: 'P2P exception routing', desc: 'Route mismatched invoices with full context from Coupa, SAP, and Icertis to the right human reviewer — with a complete audit trail.' },
    { label: 'Intercompany netting', desc: 'Eliminate intercompany balances spanning O2C + P2P + R2R across legal entities. Composite judgment across all three cycles.' },
    { label: 'Commissions to RevRec', desc: 'Chain Xactly commission data → Salesforce ARR → ASC 606 RevRec treatment. Three systems, one orchestrated agent.' },
    { label: 'Sub-ledger to GL recon', desc: 'Pull AR (HighRadius), AP (Coupa), and Payroll (ADP) sub-ledger breaks and reconcile against the GL automatically.' },
    { label: 'Dispute to deduction', desc: 'Resolve customer deductions by pulling contract terms from Icertis + pricing from Salesforce CPQ into the HighRadius dispute workflow.' },
  ];

  const cycles = [
    {
      id: 'o2c',
      label: 'O2C',
      full: 'Order-to-Cash',
      subtitle: 'Revenue cycle',
      color: '#4ade80',
      border: 'rgba(74,222,128,0.25)',
      bg: 'rgba(74,222,128,0.07)',
      headerBg: 'rgba(74,222,128,0.1)',
      departments: ['Sales Ops', 'Order Mgmt', 'AR', 'Collections'],
      steps: ['Customer master', 'CPQ / quote', 'Order entry', 'Credit check', 'Fulfillment', 'Billing', 'AR posting', 'Cash app', 'Collections'],
      output: 'RevRec → GL',
      kpis: ['DSO', 'Order cycle time', 'Billing accuracy', 'Revenue leakage'],
      systems: ['Salesforce CPQ', 'SAP SD', 'Snowflake', 'HighRadius'],
      vendorSteps: [
        { name: 'CPQ / quoting', vendors: [{ label: 'Salesforce Agentforce', type: 'native' }, { label: 'SAP Joule', type: 'native' }, { label: 'DealHub', type: 'specialist' }] },
        { name: 'Order management', vendors: [{ label: 'Salesforce Agentforce', type: 'native' }, { label: 'Azure OpenAI', type: 'cloud' }, { label: 'Blue Yonder', type: 'specialist' }] },
        { name: 'Credit & risk', vendors: [{ label: 'HighRadius', type: 'specialist' }, { label: 'Billtrust', type: 'specialist' }, { label: 'Cross-system gap', type: 'gap' }] },
        { name: 'Billing / invoicing', vendors: [{ label: 'SAP Joule', type: 'native' }, { label: 'Zuora', type: 'specialist' }, { label: 'Stripe Billing', type: 'specialist' }] },
        { name: 'Collections', vendors: [{ label: 'HighRadius', type: 'specialist' }, { label: 'Sidetrade', type: 'specialist' }, { label: 'Kolleno', type: 'specialist' }] },
      ],
      gaps: [
        { name: 'CPQ to fulfillment', desc: 'Order config in Salesforce CPQ must validate against SAP inventory + Icertis contract terms — no native agent spans this. IA orchestration required.' },
      ],
    },
    {
      id: 'i2c',
      label: 'I2C',
      full: 'Invoice-to-Cash',
      subtitle: 'Back half of O2C',
      color: '#60a5fa',
      border: 'rgba(96,165,250,0.25)',
      bg: 'rgba(96,165,250,0.07)',
      headerBg: 'rgba(96,165,250,0.1)',
      departments: ['AR', 'Collections', 'Cash Ops'],
      steps: ['Invoice issuance', 'E-invoice delivery', 'AR aging', 'Cash matching', 'Dispute mgmt', 'Dunning'],
      output: 'AR close → GL',
      kpis: ['CEI', 'Unapplied cash', 'Aging buckets', 'Dispute rate'],
      systems: ['HighRadius', 'Billtrust', 'Sidetrade', 'GetPaid'],
      vendorSteps: [
        { name: 'Invoice delivery', vendors: [{ label: 'Billtrust', type: 'specialist' }, { label: 'Esker', type: 'specialist' }, { label: 'SAP Joule', type: 'native' }] },
        { name: 'Cash application', vendors: [{ label: 'HighRadius', type: 'specialist' }, { label: 'Versapay', type: 'specialist' }, { label: 'Azure OpenAI', type: 'cloud' }] },
        { name: 'Dispute resolution', vendors: [{ label: 'HighRadius', type: 'specialist' }, { label: 'Sidetrade', type: 'specialist' }, { label: 'Cross-system gap', type: 'gap' }] },
      ],
      gaps: [
        { name: 'Dispute to deduction', desc: 'Dispute in HighRadius must pull contract terms from Icertis + pricing from Salesforce CPQ to auto-resolve deductions. No vendor closes this loop natively.' },
      ],
    },
    {
      id: 'p2p',
      label: 'P2P',
      full: 'Procure-to-Pay',
      subtitle: 'Spend cycle',
      color: '#f87171',
      border: 'rgba(248,113,113,0.25)',
      bg: 'rgba(248,113,113,0.07)',
      headerBg: 'rgba(248,113,113,0.1)',
      departments: ['Procurement', 'Accounts Payable', 'Finance Ops'],
      steps: ['Sourcing', 'Requisition', 'PO issue', 'Goods receipt', 'Invoice receipt', '3-way match', 'Approval', 'AP posting', 'Payment run'],
      output: 'Recon → GL',
      kpis: ['DPO', 'On-time payment', 'Match rate', 'Duplicate invoices'],
      systems: ['SAP MM', 'Coupa', 'Ariba', 'Basware', 'Tipalti'],
      vendorSteps: [
        { name: 'Sourcing / RFQ', vendors: [{ label: 'Coupa', type: 'specialist' }, { label: 'Ariba', type: 'specialist' }, { label: 'Azure OpenAI', type: 'cloud' }] },
        { name: 'PO creation', vendors: [{ label: 'SAP Joule', type: 'native' }, { label: 'Coupa', type: 'specialist' }, { label: 'UiPath + Doc Intel', type: 'cloud' }] },
        { name: '3-way match', vendors: [{ label: 'SAP Joule', type: 'native' }, { label: 'Basware', type: 'specialist' }, { label: 'Tipalti', type: 'specialist' }] },
        { name: 'Invoice approval', vendors: [{ label: 'Coupa', type: 'specialist' }, { label: 'ServiceNow AI', type: 'native' }, { label: 'Azure Logic Apps', type: 'cloud' }] },
        { name: 'Payment run', vendors: [{ label: 'Tipalti', type: 'specialist' }, { label: 'Kyriba', type: 'specialist' }, { label: 'SAP Joule', type: 'native' }] },
      ],
      gaps: [
        { name: 'PO to match to ERP', desc: 'PO from Coupa must match against goods receipt in SAP + validate contract in Icertis + post to Oracle/SAP GL. Data spans 3–4 systems — prime IA territory.' },
        { name: 'Exception routing', desc: 'Mismatched invoices need human-in-loop with context pulled from 3+ systems. No native vendor orchestrates this end-to-end with audit trail.' },
      ],
    },
    {
      id: 'h2r',
      label: 'H2R',
      full: 'Hire-to-Retire',
      subtitle: 'People & payroll',
      color: '#a78bfa',
      border: 'rgba(167,139,250,0.25)',
      bg: 'rgba(167,139,250,0.07)',
      headerBg: 'rgba(167,139,250,0.1)',
      departments: ['HR', 'Payroll', 'Total Rewards', 'HRIS'],
      steps: ['Recruit', 'Onboard', 'Payroll run', 'Benefits', 'Time & expense', 'Comp / equity', 'Performance', 'Offboard'],
      output: 'Payroll → GL',
      kpis: ['Cost per hire', 'Retention rate', 'Payroll accuracy', 'T&E compliance'],
      systems: ['Workday', 'SAP SuccessFactors', 'ADP', 'Ceridian'],
      vendorSteps: [
        { name: 'Recruiting', vendors: [{ label: 'Workday AI', type: 'native' }, { label: 'HireVue', type: 'specialist' }, { label: 'Eightfold AI', type: 'specialist' }] },
        { name: 'Onboarding', vendors: [{ label: 'Workday AI', type: 'native' }, { label: 'ServiceNow AI', type: 'native' }, { label: 'Azure OpenAI', type: 'cloud' }] },
        { name: 'Payroll run', vendors: [{ label: 'Workday AI', type: 'native' }, { label: 'ADP', type: 'specialist' }, { label: 'Ceridian', type: 'specialist' }] },
        { name: 'T&E / expenses', vendors: [{ label: 'Concur AI', type: 'specialist' }, { label: 'Expensify', type: 'specialist' }, { label: 'Workday AI', type: 'native' }] },
        { name: 'Comp & equity', vendors: [{ label: 'Carta', type: 'specialist' }, { label: 'Xactly', type: 'specialist' }, { label: 'Cross-system gap', type: 'gap' }] },
      ],
      gaps: [
        { name: 'Payroll to GL handoff', desc: 'Payroll journal from ADP/Workday must map to correct GL cost centers in SAP/Oracle — mapping logic often manual or brittle. IA agent with GL master data context closes this.' },
        { name: 'Commissions to RevRec', desc: 'Sales commission (Xactly) ties to ARR booked in Salesforce + ASC 606 treatment in RevRec. Three systems, no native agent orchestrates the chain.' },
      ],
    },
    {
      id: 'r2r',
      label: 'R2R',
      full: 'Record-to-Report',
      subtitle: 'Close & reporting',
      color: '#fbbf24',
      border: 'rgba(251,191,36,0.25)',
      bg: 'rgba(251,191,36,0.07)',
      headerBg: 'rgba(251,191,36,0.1)',
      departments: ['Controllership', 'FP&A', 'Corporate Accounting', 'Audit'],
      steps: ['Sub-ledger close', 'Journal entries', 'Reconciliation', 'Intercompany', 'Allocations', 'Consolidation', 'Variance review', 'Mgmt reporting'],
      output: 'Statutory / audit',
      kpis: ['Days-to-close', 'Recon rate', 'Audit findings', 'Adjustment volume'],
      systems: ['SAP S/4HANA', 'BlackLine', 'OneStream', 'Workiva', 'Trintech'],
      vendorSteps: [
        { name: 'Journal entries', vendors: [{ label: 'SAP Joule', type: 'native' }, { label: 'BlackLine', type: 'specialist' }, { label: 'Trintech', type: 'specialist' }] },
        { name: 'Reconciliation', vendors: [{ label: 'BlackLine', type: 'specialist' }, { label: 'Trintech', type: 'specialist' }, { label: 'Azure OpenAI', type: 'cloud' }] },
        { name: 'Consolidation', vendors: [{ label: 'OneStream', type: 'specialist' }, { label: 'Workiva', type: 'specialist' }, { label: 'SAP Joule', type: 'native' }] },
        { name: 'Variance analysis', vendors: [{ label: 'Pigment', type: 'specialist' }, { label: 'Anaplan', type: 'specialist' }, { label: 'Azure OpenAI', type: 'cloud' }] },
        { name: 'Statutory / audit', vendors: [{ label: 'Workiva', type: 'specialist' }, { label: 'AuditBoard', type: 'specialist' }, { label: 'Azure OpenAI', type: 'cloud' }] },
      ],
      gaps: [
        { name: 'Sub-ledger to GL recon', desc: 'AR, AP, payroll sub-ledgers all post to GL independently. Reconciling breaks across systems requires pulling from HighRadius + Coupa + ADP — no single tool orchestrates this.' },
        { name: 'Intercompany netting', desc: "Intercompany eliminations span O2C + P2P + R2R across entities. Composite judgment across all three cycles is IA's highest-value R2R play." },
      ],
    },
  ];

  const vendorStyles = {
    native:     { background: 'rgba(99,102,241,0.15)', color: '#a78bfa', border: '0.5px solid rgba(99,102,241,0.35)' },
    cloud:      { background: 'rgba(59,130,246,0.12)', color: '#60a5fa', border: '0.5px solid rgba(59,130,246,0.35)' },
    specialist: { background: 'rgba(16,185,129,0.10)', color: '#34d399', border: '0.5px solid rgba(16,185,129,0.35)' },
    gap:        { background: 'rgba(239,68,68,0.10)',  color: '#f87171', border: '0.5px solid rgba(239,68,68,0.35)' },
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
        .step-scroll { display: flex; align-items: center; overflow-x: auto; padding-bottom: 6px; gap: 0; }
        .step-scroll::-webkit-scrollbar { height: 3px; }
        .step-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); border-radius: 2px; }
        .step-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
        .fm-chip-btn:hover { opacity: 0.85; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: 'sticky', top: 0, background: 'rgba(10,10,10,0.94)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.07)', zIndex: 100 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(16px,4vw,32px)', height: '66px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={15} color="white" />
            </div>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>Vinay Gangidi</span>
          </a>
          <a href="/" style={{ fontSize: '13px', color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>← Back to home</a>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <section style={{ padding: 'clamp(48px,8vw,80px) clamp(16px,5vw,32px) clamp(32px,5vw,48px)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(160deg,rgba(99,102,241,0.07) 0%,rgba(10,10,10,0) 60%)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Intelligence Map</p>
          <h1 style={{ fontSize: 'clamp(26px,5vw,48px)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '14px' }}>Finance Cycle Intelligence Map</h1>
          <p style={{ fontSize: 'clamp(14px,2vw,17px)', color: '#94a3b8', lineHeight: '1.75', maxWidth: '640px', marginBottom: '32px' }}>
            Sub-process flows, dominant agentic vendors, and IA orchestration gaps across O2C, I2C, P2P, H2R, and R2R — where no native vendor closes the loop.
          </p>

          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '14px 18px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
            {[
              { dot: '#a78bfa', label: 'Native SaaS agent' },
              { dot: '#60a5fa', label: 'Cloud AI platform' },
              { dot: '#34d399', label: 'Specialist / point solution' },
              { dot: '#f87171', label: 'IA orchestration gap' },
            ].map(({ dot, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: '#94a3b8' }}>
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: dot, flexShrink: 0 }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CYCLES ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(32px,5vw,56px) clamp(16px,5vw,32px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {cycles.map((cycle) => (
            <div key={cycle.id} style={{ borderRadius: '16px', border: `1px solid ${cycle.border}`, overflow: 'hidden' }}>

              {/* Cycle header */}
              <div style={{ padding: '16px 22px', background: cycle.headerBg, borderBottom: `1px solid ${cycle.border}`, display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: '800', color: cycle.color, background: cycle.bg, border: `1px solid ${cycle.border}`, padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.04em' }}>{cycle.label}</span>
                    <span style={{ fontSize: '16px', fontWeight: '700', color: '#e2e8f0' }}>{cycle.full}</span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>·</span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>{cycle.subtitle}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cycle.departments.map(d => (
                      <span key={d} style={{ fontSize: '11px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', padding: '2px 8px', borderRadius: '5px' }}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '18px' }}>

                {/* Sub-process flow */}
                <div>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#475569', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '10px' }}>Process flow</p>
                  <div className="step-scroll">
                    {cycle.steps.map((step, i) => (
                      <div key={step} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                          <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: cycle.bg, border: `1px solid ${cycle.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '700', color: cycle.color, flexShrink: 0 }}>{i + 1}</div>
                          <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '500', whiteSpace: 'nowrap', textAlign: 'center', maxWidth: '80px', lineHeight: 1.3 }}>{step}</div>
                        </div>
                        {i < cycle.steps.length - 1 && (
                          <div style={{ width: '28px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '18px' }}>
                            <div style={{ width: '20px', height: '1px', background: `${cycle.color}40` }} />
                            <div style={{ width: 0, height: 0, borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderLeft: `5px solid ${cycle.color}40`, marginLeft: '-1px' }} />
                          </div>
                        )}
                      </div>
                    ))}
                    {/* Output node */}
                    <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: '28px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '18px' }}>
                        <div style={{ width: '20px', height: '1px', background: `${cycle.color}40` }} />
                        <div style={{ width: 0, height: 0, borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderLeft: `5px solid ${cycle.color}40`, marginLeft: '-1px' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                        <div style={{ padding: '3px 8px', borderRadius: '6px', background: cycle.bg, border: `1px solid ${cycle.border}`, fontSize: '10px', fontWeight: '700', color: cycle.color, whiteSpace: 'nowrap' }}>GL</div>
                        <div style={{ fontSize: '10px', color: '#64748b', whiteSpace: 'nowrap', fontWeight: '500' }}>{cycle.output}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KPIs + Systems row */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <p style={{ fontSize: '11px', fontWeight: '600', color: '#475569', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '8px' }}>Key metrics</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {cycle.kpis.map(k => (
                        <span key={k} style={{ fontSize: '11px', color: cycle.color, background: cycle.bg, border: `1px solid ${cycle.border}`, padding: '3px 9px', borderRadius: '6px', fontWeight: '500' }}>{k}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <p style={{ fontSize: '11px', fontWeight: '600', color: '#475569', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '8px' }}>Core systems</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {cycle.systems.map(s => (
                        <span key={s} style={{ fontSize: '11px', color: '#94a3b8', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '3px 9px', borderRadius: '6px' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                {/* Vendor coverage */}
                <div>
                  <p style={{ fontSize: '11px', fontWeight: '600', color: '#475569', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '10px' }}>Agentic vendor coverage</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {cycle.vendorSteps.map((step) => (
                      <div key={step.name} style={{ display: 'flex', alignItems: 'stretch', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <div style={{ fontSize: '12px', fontWeight: '500', padding: '8px 12px', minWidth: '140px', flexShrink: 0, background: cycle.bg, color: cycle.color, display: 'flex', alignItems: 'center', borderRight: `1px solid ${cycle.border}` }}>
                          {step.name}
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', padding: '7px 10px', flex: 1, alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
                          {step.vendors.map((v) => (
                            <span key={v.label} style={{ fontSize: '11px', padding: '3px 9px', borderRadius: '12px', fontWeight: '500', whiteSpace: 'nowrap', ...vendorStyles[v.type] }}>
                              {v.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Gap rows */}
                    {cycle.gaps.map((gap) => (
                      <div key={gap.name} style={{ display: 'flex', alignItems: 'stretch', borderRadius: '8px', overflow: 'hidden', border: '1.5px solid rgba(239,68,68,0.4)' }}>
                        <div style={{ fontSize: '12px', fontWeight: '500', padding: '8px 12px', minWidth: '140px', flexShrink: 0, background: 'rgba(239,68,68,0.10)', color: '#f87171', display: 'flex', alignItems: 'center', borderRight: '1px solid rgba(239,68,68,0.3)' }}>
                          ⚠ {gap.name}
                        </div>
                        <div style={{ fontSize: '11px', padding: '8px 12px', flex: 1, color: '#fca5a5', display: 'flex', alignItems: 'center', background: 'rgba(239,68,68,0.05)', lineHeight: 1.5 }}>
                          {gap.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── O2C AGENT OPPORTUNITIES ── */}
        <div style={{ marginTop: '32px', marginBottom: '28px' }}>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '11px', fontWeight: '700', color: '#4ade80', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>O2C — Order-to-Cash</p>
            <h2 style={{ fontSize: 'clamp(18px,3vw,26px)', fontWeight: '800', letterSpacing: '-0.02em', color: '#e2e8f0', marginBottom: '8px' }}>
              Build-Ready Agentic Automation Opportunities
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, maxWidth: '640px' }}>
              High-signal, scoped use cases across the O2C cycle — each solvable with a focused multi-agent pipeline in 2–4 weeks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '14px' }}>
            {[
              {
                name: 'Order Validation Agent',
                step: 'Order entry',
                what: 'Validates incoming orders against pricing rules, contract terms, and inventory before ERP entry. Flags mismatches and routes exceptions instantly.',
                inputs: ['Salesforce CPQ', 'SAP inventory', 'Icertis contracts'],
                output: 'Approved order or routed exception',
                build: '2 weeks',
                complexity: 'Low',
              },
              {
                name: 'Credit Decision Agent',
                step: 'Credit check',
                what: 'Pulls D&B credit score, internal payment history, and current AR aging to auto-approve or hold new orders within defined risk thresholds.',
                inputs: ['D&B API', 'AR aging report', 'ERP payment history'],
                output: 'Credit decision + risk memo',
                build: '2–3 weeks',
                complexity: 'Medium',
              },
              {
                name: 'Invoice Generation Agent',
                step: 'Billing',
                what: 'Auto-generates invoices from fulfilled order data, maps line items to contract terms, validates tax treatment, and queues for e-invoice delivery.',
                inputs: ['ERP order', 'Contract terms', 'Tax rules'],
                output: 'Validated invoice ready for delivery',
                build: '2 weeks',
                complexity: 'Low',
              },
              {
                name: 'Cash Application Agent',
                step: 'Cash app',
                what: 'Matches incoming payments to open AR items using remittance advice, bank statements, and email parsing. Auto-posts matches, flags exceptions.',
                inputs: ['Bank feed', 'Remittance emails', 'Open AR'],
                output: 'Posted receipts + unapplied cash queue',
                build: '3 weeks',
                complexity: 'Medium',
              },
              {
                name: 'Collections Prioritization Agent',
                step: 'Collections',
                what: 'Scores overdue accounts by risk, payment history, and days outstanding. Drafts personalized outreach emails and routes high-risk accounts to collectors.',
                inputs: ['AR aging', 'Payment history', 'Customer profile'],
                output: 'Prioritized worklist + drafted emails',
                build: '2 weeks',
                complexity: 'Low',
              },
              {
                name: 'Dispute Resolution Agent',
                step: 'AR posting',
                what: 'Pulls invoice, PO, delivery proof, and contract to auto-resolve deductions or generate a structured dispute recommendation with full audit trail.',
                inputs: ['HighRadius dispute', 'Icertis contract', 'POD document'],
                output: 'Resolution decision or escalation memo',
                build: '3–4 weeks',
                complexity: 'Medium',
              },
              {
                name: 'Revenue Leakage Detection Agent',
                step: 'Billing',
                what: 'Compares billed amounts vs. contracted rates across all invoices. Flags under-billing, missed escalation clauses, and expired pricing — before close.',
                inputs: ['Invoice data', 'Contract pricing', 'ERP billing records'],
                output: 'Leakage report with $ impact',
                build: '2–3 weeks',
                complexity: 'Low',
              },
              {
                name: 'CPQ-to-Fulfillment Orchestrator',
                step: 'CPQ / quote → Fulfillment',
                what: 'Bridges the gap between Salesforce CPQ, SAP inventory, and Icertis contract terms — validates configuration, availability, and contract compliance in one pass.',
                inputs: ['Salesforce CPQ', 'SAP inventory', 'Icertis'],
                output: 'Fulfillment-ready order or blocker report',
                build: '3–4 weeks',
                complexity: 'High',
              },
            ].map((opp) => (
              <div key={opp.name} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: '14px', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#e2e8f0', marginBottom: '4px' }}>{opp.name}</div>
                    <div style={{ fontSize: '11px', color: '#4ade80', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', padding: '2px 8px', borderRadius: '20px', display: 'inline-block', fontWeight: '500' }}>{opp.step}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', flexShrink: 0 }}>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: opp.complexity === 'Low' ? '#34d399' : opp.complexity === 'Medium' ? '#fbbf24' : '#f87171', background: opp.complexity === 'Low' ? 'rgba(16,185,129,0.1)' : opp.complexity === 'Medium' ? 'rgba(251,191,36,0.1)' : 'rgba(239,68,68,0.1)', border: `1px solid ${opp.complexity === 'Low' ? 'rgba(16,185,129,0.25)' : opp.complexity === 'Medium' ? 'rgba(251,191,36,0.25)' : 'rgba(239,68,68,0.25)'}`, padding: '2px 8px', borderRadius: '20px' }}>
                      {opp.complexity}
                    </span>
                    <span style={{ fontSize: '10px', color: '#475569' }}>{opp.build}</span>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.65 }}>{opp.what}</p>

                {/* Inputs */}
                <div>
                  <p style={{ fontSize: '10px', fontWeight: '600', color: '#475569', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '5px' }}>Inputs</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {opp.inputs.map(inp => (
                      <span key={inp} style={{ fontSize: '10px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', padding: '2px 7px', borderRadius: '5px' }}>{inp}</span>
                    ))}
                  </div>
                </div>

                {/* Output */}
                <div style={{ paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
                  <span style={{ fontSize: '11px', color: '#64748b' }}><span style={{ color: '#94a3b8', fontWeight: '500' }}>Output:</span> {opp.output}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── IA BANNER ── */}
        <div style={{ marginTop: '32px', borderRadius: '16px', border: '1px solid rgba(99,102,241,0.35)', padding: '20px 24px', background: 'rgba(99,102,241,0.07)' }}>
          <p style={{ fontSize: '11px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>IA Orchestration Layer</p>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0', marginBottom: '14px' }}>
            Where Vinay Gangidi earns its keep — cross-cycle workflows no native vendor closes
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {chips.map((chip) => (
              <button
                key={chip.label}
                className="fm-chip-btn"
                onClick={() => setModal(chip)}
                style={{ fontSize: '12px', padding: '6px 14px', borderRadius: '20px', background: 'rgba(99,102,241,0.15)', color: '#a78bfa', border: '1px solid rgba(99,102,241,0.3)', cursor: 'pointer', fontFamily: 'inherit', transition: 'opacity 0.15s' }}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: 'clamp(24px,4vw,36px) clamp(16px,5vw,32px)', marginTop: '0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '26px', height: '26px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={13} color="white" />
            </div>
            <span style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>Vinay Gangidi</span>
            <span style={{ color: '#334155', fontSize: '13px', marginLeft: '6px' }}>© 2026</span>
          </div>
          <a href="/" style={{ fontSize: '12px', color: '#475569', textDecoration: 'none' }}>← Back to home</a>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: 24, backdropFilter: 'blur(4px)' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#111827', borderRadius: '16px', padding: '28px', maxWidth: '460px', width: '100%', border: '1px solid rgba(99,102,241,0.35)' }}
          >
            <div style={{ fontSize: '11px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>IA Orchestration Use Case</div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#e2e8f0', marginBottom: '12px' }}>{modal.label}</div>
            <div style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>{modal.desc}</div>
            <button
              onClick={() => setModal(null)}
              style={{ marginTop: '22px', fontSize: '12px', padding: '7px 18px', borderRadius: '8px', background: 'rgba(99,102,241,0.15)', color: '#a78bfa', border: '1px solid rgba(99,102,241,0.3)', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
