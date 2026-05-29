'use client';

import { useState } from 'react';

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
      label: 'O2C — Order-to-Cash',
      bg: '#E1F5EE', color: '#085041',
      steps: [
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
      label: 'I2C — Invoice-to-Cash',
      bg: '#E6F1FB', color: '#0C447C',
      steps: [
        { name: 'Invoice delivery', vendors: [{ label: 'Billtrust', type: 'specialist' }, { label: 'Esker', type: 'specialist' }, { label: 'SAP Joule', type: 'native' }] },
        { name: 'Cash application', vendors: [{ label: 'HighRadius', type: 'specialist' }, { label: 'Versapay', type: 'specialist' }, { label: 'Azure OpenAI', type: 'cloud' }] },
        { name: 'Dispute resolution', vendors: [{ label: 'HighRadius', type: 'specialist' }, { label: 'Sidetrade', type: 'specialist' }, { label: 'Cross-system gap', type: 'gap' }] },
      ],
      gaps: [
        { name: 'Dispute to deduction', desc: 'Dispute in HighRadius must pull contract terms from Icertis + pricing from Salesforce CPQ to auto-resolve deductions. No vendor closes this loop natively.' },
      ],
    },
    {
      label: 'P2P — Procure-to-Pay',
      bg: '#FAECE7', color: '#712B13',
      steps: [
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
      label: 'H2R — Hire-to-Retire',
      bg: '#EEEDFE', color: '#3C3489',
      steps: [
        { name: 'Recruiting', vendors: [{ label: 'Workday AI', type: 'native' }, { label: 'HireVue', type: 'specialist' }, { label: 'Eightfold AI', type: 'specialist' }] },
        { name: 'Onboarding', vendors: [{ label: 'Workday AI', type: 'native' }, { label: 'ServiceNow AI', type: 'native' }, { label: 'Azure OpenAI', type: 'cloud' }] },
        { name: 'Payroll run', vendors: [{ label: 'Workday AI', type: 'native' }, { label: 'ADP', type: 'specialist' }, { label: 'Ceridian', type: 'specialist' }] },
        { name: 'T&E / expenses', vendors: [{ label: 'Concur AI', type: 'specialist' }, { label: 'Expensify', type: 'specialist' }, { label: 'Workday AI', type: 'native' }] },
        { name: 'Comp & equity', vendors: [{ label: 'Carta', type: 'specialist' }, { label: 'Xactly', type: 'specialist' }, { label: 'Cross-system gap', type: 'gap' }] },
      ],
      gaps: [
        { name: 'Payroll to GL handoff', desc: 'Payroll journal from ADP/Workday must map to correct GL cost centers in SAP/Oracle — mapping logic often manual or brittle. IA agent with GL master data context closes this.' },
        { name: 'Commissions to RevRec', desc: "Sales commission (Xactly) ties to ARR booked in Salesforce + ASC 606 treatment in RevRec. Three systems, no native agent orchestrates the chain." },
      ],
    },
    {
      label: 'R2R — Record-to-Report',
      bg: '#FAEEDA', color: '#633806',
      steps: [
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
    native:     { background: '#EEEDFE', color: '#3C3489', border: '0.5px solid #AFA9EC' },
    cloud:      { background: '#E6F1FB', color: '#0C447C', border: '0.5px solid #85B7EB' },
    specialist: { background: '#E1F5EE', color: '#085041', border: '0.5px solid #5DCAA5' },
    gap:        { background: '#FAECE7', color: '#712B13', border: '0.5px solid #F0997B' },
  };

  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px', fontFamily: 'system-ui, -apple-system, sans-serif', background: '#fff', minHeight: '100vh' }}>

      {/* Back link */}
      <a href="/" style={{ fontSize: 13, color: '#7F77DD', textDecoration: 'none', display: 'inline-block', marginBottom: 28 }}>
        ← Back to AgentOpsLab
      </a>

      {/* Header */}
      <h1 style={{ fontSize: 24, fontWeight: 500, margin: '0 0 8px', color: '#111' }}>
        Finance Cycle Intelligence Map
      </h1>
      <p style={{ fontSize: 14, color: '#666', margin: '0 0 32px' }}>
        Dominant agentic vendors and IA orchestration gaps across O2C, I2C, P2P, H2R, and R2R
      </p>

      {/* Legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24, padding: '12px 16px', borderRadius: 8, border: '0.5px solid #e5e7eb', background: '#f9f9f9' }}>
        {[
          { dot: '#7F77DD', label: 'Native SaaS agent' },
          { dot: '#378ADD', label: 'Cloud AI platform' },
          { dot: '#1D9E75', label: 'Specialist / point solution' },
          { dot: '#D85A30', label: 'IA orchestration gap' },
        ].map(({ dot, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#555' }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: dot, flexShrink: 0 }} />
            {label}
          </div>
        ))}
      </div>

      {/* Cycles */}
      {cycles.map((cycle) => (
        <div key={cycle.label} style={{ marginBottom: 20, borderRadius: 12, border: '0.5px solid #e5e7eb', overflow: 'hidden' }}>

          {/* Cycle header */}
          <div style={{ padding: '12px 18px', background: cycle.bg }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, background: cycle.bg, color: cycle.color, border: `0.5px solid ${cycle.color}33` }}>
              {cycle.label}
            </span>
          </div>

          {/* Step rows */}
          <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {cycle.steps.map((step) => (
              <div key={step.name} style={{ display: 'flex', alignItems: 'stretch', borderRadius: 8, overflow: 'hidden', border: '0.5px solid #e5e7eb' }}>
                <div style={{ fontSize: 12, fontWeight: 500, padding: '8px 12px', minWidth: 140, flexShrink: 0, background: cycle.bg, color: cycle.color, display: 'flex', alignItems: 'center', borderRight: '0.5px solid #e5e7eb' }}>
                  {step.name}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, padding: '7px 10px', flex: 1, alignItems: 'center', background: '#fff' }}>
                  {step.vendors.map((v) => (
                    <span key={v.label} style={{ fontSize: 11, padding: '3px 9px', borderRadius: 12, fontWeight: 500, whiteSpace: 'nowrap', ...vendorStyles[v.type] }}>
                      {v.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Gap rows */}
            {cycle.gaps.map((gap) => (
              <div key={gap.name} style={{ display: 'flex', alignItems: 'stretch', borderRadius: 8, overflow: 'hidden', border: '1.5px solid #F0997B' }}>
                <div style={{ fontSize: 12, fontWeight: 500, padding: '8px 12px', minWidth: 140, flexShrink: 0, background: '#FAECE7', color: '#712B13', display: 'flex', alignItems: 'center', borderRight: '1px solid #F0997B' }}>
                  ⚠ {gap.name}
                </div>
                <div style={{ fontSize: 11, padding: '8px 12px', flex: 1, color: '#993C1D', display: 'flex', alignItems: 'center', background: '#FFF8F6', lineHeight: 1.5 }}>
                  {gap.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Divider */}
      <div style={{ height: 1, background: '#e5e7eb', margin: '24px 0' }} />

      {/* IA Banner */}
      <div style={{ borderRadius: 12, border: '2px solid #AFA9EC', padding: '16px 20px', background: '#EEEDFE' }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: '#3C3489', marginBottom: 10 }}>
          IA orchestration layer — where AgentOpsLab earns its keep
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {chips.map((chip) => (
            <button
              key={chip.label}
              onClick={() => setModal(chip)}
              style={{ fontSize: 11, padding: '5px 14px', borderRadius: 20, background: '#CECBF6', color: '#26215C', border: '0.5px solid #AFA9EC', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: 24 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: '#fff', borderRadius: 14, padding: 28, maxWidth: 440, width: '100%', border: '1px solid #AFA9EC' }}
          >
            <div style={{ fontSize: 14, fontWeight: 500, color: '#3C3489', marginBottom: 10 }}>{modal.label}</div>
            <div style={{ fontSize: 13, color: '#555', lineHeight: 1.6 }}>{modal.desc}</div>
            <button
              onClick={() => setModal(null)}
              style={{ marginTop: 20, fontSize: 12, padding: '6px 16px', borderRadius: 8, background: '#EEEDFE', color: '#3C3489', border: '0.5px solid #AFA9EC', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
