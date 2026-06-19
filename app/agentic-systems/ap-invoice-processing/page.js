'use client';

import { Zap, Github, BookOpen, ArrowLeft, ExternalLink, Mail, FileText, ChevronRight, DollarSign, CheckCircle2, AlertTriangle, BarChart3 } from 'lucide-react';

export default function APInvoiceProcessingPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; overflow-x: hidden; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .pipeline-step { transition: all 0.2s ease; }
        .pipeline-step:hover { border-color: rgba(16,185,129,0.5) !important; background: rgba(16,185,129,0.08) !important; }
        .tool-row:hover { background: rgba(16,185,129,0.05) !important; }
        .stack-card:hover { border-color: rgba(255,255,255,0.2) !important; transform: translateY(-2px); }
        .stack-card { transition: all 0.2s ease; }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-primary { transition: all 0.2s ease; }
        @media (max-width: 768px) {
          .arch-body { flex-direction: column !important; }
          .arch-sidebar { width: 100% !important; min-width: 0 !important; }
        }
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
            <span style={{ fontSize: '14px', color: '#10b981', fontWeight: '500' }}>AP Invoice Processing</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(180deg, rgba(16,185,129,0.07) 0%, rgba(10,10,10,0) 100%)', padding: '80px 32px 60px', borderBottom: '1px solid rgba(16,185,129,0.12)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 12px', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.35)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#10b981', letterSpacing: '0.06em' }}>AGENTIC SYSTEMS</span>
            <span style={{ padding: '4px 12px', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.35)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#10b981', letterSpacing: '0.06em' }}>MULTI-AGENT</span>
            <span style={{ padding: '4px 12px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#4ade80', letterSpacing: '0.06em' }}>LIVE</span>
            <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '12px', fontWeight: '600', color: '#94a3b8' }}>Enterprise Finance</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
            <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 0 30px rgba(16,185,129,0.3)' }}>
              <DollarSign size={28} color="white" />
            </div>
            <div>
              <h1 style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: '800', lineHeight: '1.1', marginBottom: '12px' }}>AP Invoice Processing System</h1>
              <p style={{ fontSize: '18px', color: '#a3a3a3', lineHeight: '1.6', maxWidth: '700px' }}>
                A 5-agent CrewAI pipeline that reads vendor emails from Gmail, runs Mistral OCR on PDF attachments,
                extracts structured invoice data, reconciles against a PO database, and produces an Excel report
                with full decision trail - fully automated, end to end.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {[
              { val: '100%', label: 'Automated' },
              { val: '5', label: 'Agents' },
              { val: '~$0.02', label: 'Cost/invoice' },
              { val: 'Dev + Prod', label: 'Run modes' },
              { val: 'SQLite', label: 'PO database' },
              { val: 'Excel', label: 'Output format' },
            ].map(s => (
              <div key={s.label} style={{ padding: '12px 20px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.18)', borderRadius: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#10b981' }}>{s.val}</div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '500', marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Architecture Overview */}
      <section style={{ padding: '72px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '5px 14px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#10b981', marginBottom: '20px', letterSpacing: '0.06em' }}>ARCHITECTURE</div>
          <h2 style={{ fontSize: 'clamp(24px,5vw,36px)', fontWeight: '800', marginBottom: '12px' }}>5-Agent Sequential Pipeline</h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', marginBottom: '48px', lineHeight: '1.7', maxWidth: '680px' }}>
            Each agent handles one stage of the AP workflow and passes a compact manifest to the next.
            Context windows stay clean. Every artifact is written to disk - fully auditable.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                num: '01',
                agent: 'Email Triage Agent',
                role: 'Email Triage Specialist',
                color: '#3b82f6',
                colorBg: 'rgba(59,130,246,0.08)',
                colorBorder: 'rgba(59,130,246,0.25)',
                icon: <Mail size={20} color="#3b82f6" />,
                tools: ['Gmail Reader Tool', 'Batch Triage Tool'],
                model: 'Claude Sonnet',
                what: 'Connects to Gmail via OAuth, fetches all unread emails, and batch-classifies each as INVOICE, NOT_INVOICE, or UNCERTAIN using PDF content peek + sender domain matching. Writes triage_result.json to disk.',
                output: 'triage_result.json - per-email classification with confidence signals',
              },
              {
                num: '02',
                agent: 'Document Intelligence Agent',
                role: 'Document Intelligence Specialist',
                color: '#8b5cf6',
                colorBg: 'rgba(139,92,246,0.08)',
                colorBorder: 'rgba(139,92,246,0.25)',
                icon: <FileText size={20} color="#8b5cf6" />,
                tools: ['Batch OCR Tool'],
                model: 'Mistral OCR + Claude',
                what: 'Receives the triage manifest path and runs Mistral OCR on every PDF attachment from INVOICE and UNCERTAIN emails in a single batch call. Handles scanned, digital, and image-only PDFs. Writes per-email OCR JSON to disk.',
                output: 'ocr_result_{id}.json - full extracted text per PDF attachment',
              },
              {
                num: '03',
                agent: 'Invoice Extractor Agent',
                role: 'Invoice Data Extraction Specialist',
                color: '#f59e0b',
                colorBg: 'rgba(245,158,11,0.08)',
                colorBorder: 'rgba(245,158,11,0.25)',
                icon: <FileText size={20} color="#f59e0b" />,
                tools: ['Invoice Data Extractor Tool'],
                model: 'Claude Sonnet',
                what: 'For each OCR result, calls the extractor tool which uses Claude to parse raw OCR text into structured JSON: invoice number, vendor, PO reference, line items (description, qty, unit price), tax, currency, and total. Handles multi-language invoices.',
                output: 'extracted_{id}.json - structured invoice data per email',
              },
              {
                num: '04',
                agent: 'PO Reconciliation Agent',
                role: 'PO Reconciliation Specialist',
                color: '#10b981',
                colorBg: 'rgba(16,185,129,0.08)',
                colorBorder: 'rgba(16,185,129,0.25)',
                icon: <CheckCircle2 size={20} color="#10b981" />,
                tools: ['PO Reconciler Tool'],
                model: 'Claude Sonnet',
                what: 'Queries the PO database (SQLite) for each extracted invoice. Performs line-item level matching on quantity, unit price, and totals. Classifies each invoice as MATCHED, PARTIAL_MATCH, DISCREPANCY, DUPLICATE, or PO_NOT_FOUND. Uses Claude to reason over exceptions.',
                output: 'reconciled_{id}.json - match status, discrepancy details, decision rationale',
              },
              {
                num: '05',
                agent: 'Reporting Agent',
                role: 'AP Reporting Specialist',
                color: '#ec4899',
                colorBg: 'rgba(236,72,153,0.08)',
                colorBorder: 'rgba(236,72,153,0.25)',
                icon: <BarChart3 size={20} color="#ec4899" />,
                tools: ['Excel Report Writer Tool'],
                model: 'Claude Sonnet',
                what: 'Auto-discovers all reconciled JSON files, builds a multi-sheet Excel workbook: Summary, Approved for Payment, Requires Action, Not Processed, and a full Decision Trail sheet with per-invoice reasoning. Writes the final executive summary.',
                output: 'invoice_report_{timestamp}.xlsx - full AP run report with decision trail',
              },
            ].map((step, i, arr) => (
              <div key={step.num}>
                <div className="pipeline-step" style={{ background: step.colorBg, border: '1px solid ' + step.colorBorder, borderRadius: '16px', padding: '28px 32px' }}>
                  <div className="arch-body" style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0 }}>
                      <div style={{ width: '48px', height: '48px', background: step.color + '20', border: '1px solid ' + step.color + '50', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                        {step.icon}
                      </div>
                      <div style={{ fontSize: '11px', fontWeight: '800', color: step.color, letterSpacing: '0.08em', textAlign: 'center' }}>STEP {step.num}</div>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                        <span style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>{step.agent}</span>
                        <span style={{ padding: '2px 8px', background: step.color + '20', border: '1px solid ' + step.color + '40', borderRadius: '6px', fontSize: '11px', fontWeight: '600', color: step.color }}>{step.model}</span>
                      </div>
                      <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '12px', fontStyle: 'italic' }}>Role: {step.role}</div>
                      <p style={{ fontSize: '14px', color: '#a3a3a3', lineHeight: '1.7', marginBottom: '14px' }}>{step.what}</p>
                      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', letterSpacing: '0.06em', marginBottom: '6px' }}>TOOLS</div>
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            {step.tools.map(t => (
                              <span key={t} style={{ padding: '3px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '12px', color: '#e2e8f0', fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', letterSpacing: '0.06em', marginBottom: '6px' }}>OUTPUT</div>
                          <span style={{ fontSize: '12px', color: step.color, fontFamily: 'JetBrains Mono, monospace' }}>{step.output}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                      <div style={{ width: '1px', height: '12px', background: 'rgba(16,185,129,0.4)' }} />
                      <div style={{ fontSize: '12px', color: '#10b981' }}>↓</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reconciliation Outcomes */}
      <section style={{ padding: '72px 32px', background: 'rgba(16,185,129,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '5px 14px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#10b981', marginBottom: '20px', letterSpacing: '0.06em' }}>RECONCILIATION LOGIC</div>
          <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: '800', marginBottom: '12px' }}>5 Invoice Outcomes</h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', marginBottom: '40px', lineHeight: '1.7', maxWidth: '620px' }}>Every invoice is classified at line-item level. Approved invoices go straight to payment. Everything else gets a specific reason.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '14px' }}>
            {[
              { status: 'MATCHED', icon: '✅', color: '#10b981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)', desc: 'All line items match the PO exactly. Auto-approved for payment.' },
              { status: 'PARTIAL MATCH', icon: '⚠️', color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)', desc: 'Most lines match but minor variance found. Claude reasons over it; AP team decides.' },
              { status: 'DISCREPANCY', icon: '❌', color: '#ef4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.25)', desc: 'Significant mismatch in qty, price, or vendor. Held for AP review with full explanation.' },
              { status: 'DUPLICATE', icon: '🔁', color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.25)', desc: 'Invoice number already processed in the database. Automatically rejected.' },
              { status: 'PO NOT FOUND', icon: '🔍', color: '#64748b', bg: 'rgba(100,116,139,0.08)', border: 'rgba(100,116,139,0.25)', desc: 'PO reference doesn\'t exist. Flagged for purchasing team to investigate.' },
            ].map(o => (
              <div key={o.status} style={{ padding: '22px', background: o.bg, border: '1px solid ' + o.border, borderRadius: '14px' }}>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>{o.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: o.color, marginBottom: '8px', letterSpacing: '0.04em' }}>{o.status}</div>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{ padding: '72px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '5px 14px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#10b981', marginBottom: '20px', letterSpacing: '0.06em' }}>TECH STACK</div>
          <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: '800', marginBottom: '40px' }}>What Powers It</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px' }}>
            {[
              { name: 'CrewAI', role: 'Multi-agent orchestration', detail: 'Sequential process - each agent hands off a compact manifest to the next', color: '#10b981' },
              { name: 'Claude Sonnet', role: 'Agent reasoning & extraction', detail: 'Powers all 5 agents for triage classification, data extraction, reconciliation reasoning, and report writing', color: '#8b5cf6' },
              { name: 'Mistral OCR', role: 'PDF text extraction', detail: 'Handles digital PDFs, scanned documents, and image-only invoices in prod mode', color: '#f59e0b' },
              { name: 'Gmail API', role: 'Email ingestion', detail: 'OAuth2 authentication - reads from ap-invoices inbox and marks processed emails', color: '#3b82f6' },
              { name: 'SQLite', role: 'PO database', detail: 'Local PO mirror with purchase orders, line items, and vendor master - sub-ms queries at reconcile time', color: '#ec4899' },
              { name: 'openpyxl', role: 'Excel report generation', detail: 'Multi-sheet workbook: Summary, Approved, Exceptions, and full Decision Trail', color: '#64748b' },
            ].map(s => (
              <div key={s.name} className="stack-card" style={{ padding: '22px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px' }}>
                <div style={{ fontSize: '15px', fontWeight: '700', color: s.color, marginBottom: '4px' }}>{s.name}</div>
                <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500', marginBottom: '10px' }}>{s.role}</div>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Run Modes */}
      <section style={{ padding: '72px 32px', background: 'rgba(16,185,129,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '5px 14px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#10b981', marginBottom: '20px', letterSpacing: '0.06em' }}>RUN MODES</div>
          <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: '800', marginBottom: '40px' }}>Dev Mode vs Production</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px' }}>
            <div style={{ padding: '32px', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ padding: '4px 12px', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.4)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#60a5fa' }}>DEV MODE</div>
                <span className="mono" style={{ fontSize: '13px', color: '#60a5fa' }}>python main.py</span>
              </div>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.7' }}>Uses 11 pre-built sample invoices from disk. No Gmail OAuth or Mistral API key required. Perfect for testing the full pipeline logic locally.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['11 sample invoices (USD, EUR, GBP, JPY, MXN, SEK)', 'Covers: matched, price variance, qty overage, duplicate, wrong vendor', 'Non-invoice test emails included', 'ANTHROPIC_API_KEY only'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#3b82f6', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '32px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ padding: '4px 12px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#10b981' }}>PROD MODE</div>
                <span className="mono" style={{ fontSize: '13px', color: '#10b981' }}>RUN_MODE=prod python main.py</span>
              </div>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.7' }}>Connects to your live Gmail inbox, fetches real vendor emails, and runs Mistral OCR on actual PDF attachments.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Gmail OAuth2 (run setup_gmail_auth.py once)', 'Mistral OCR for real PDF extraction', 'Deduplication via .processed_email_ids.json', 'ANTHROPIC_API_KEY + MISTRAL_API_KEY required'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Invoices */}
      <section style={{ padding: '72px 32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '5px 14px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: '#10b981', marginBottom: '20px', letterSpacing: '0.06em' }}>TEST COVERAGE</div>
          <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: '800', marginBottom: '12px' }}>11 Sample Invoices Included</h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', marginBottom: '40px', lineHeight: '1.7', maxWidth: '620px' }}>Covers every reconciliation outcome and multi-currency scenario so you can validate the full pipeline without real vendor data.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '12px' }}>
            {[
              { id: 'inv_01', scenario: 'Matched - USD', outcome: 'MATCHED', color: '#10b981' },
              { id: 'inv_02', scenario: 'Price variance - EUR (German)', outcome: 'DISCREPANCY', color: '#ef4444' },
              { id: 'inv_03', scenario: 'Qty overage - GBP', outcome: 'PARTIAL MATCH', color: '#f59e0b' },
              { id: 'inv_04', scenario: 'Missing item - JPY (Japanese)', outcome: 'DISCREPANCY', color: '#ef4444' },
              { id: 'inv_05', scenario: 'Extra item - MXN (Spanish)', outcome: 'DISCREPANCY', color: '#ef4444' },
              { id: 'inv_06', scenario: 'Qty underage - USD', outcome: 'PARTIAL MATCH', color: '#f59e0b' },
              { id: 'inv_07', scenario: 'Matched - SEK (Swedish)', outcome: 'MATCHED', color: '#10b981' },
              { id: 'inv_08', scenario: 'Wrong vendor - USD', outcome: 'DISCREPANCY', color: '#ef4444' },
              { id: 'inv_09', scenario: 'Price variance - EUR', outcome: 'DISCREPANCY', color: '#ef4444' },
              { id: 'inv_10', scenario: 'Matched services - USD', outcome: 'MATCHED', color: '#10b981' },
              { id: 'inv_11', scenario: 'Duplicate invoice', outcome: 'DUPLICATE', color: '#8b5cf6' },
            ].map(inv => (
              <div key={inv.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px' }}>
                <span className="mono" style={{ fontSize: '11px', color: '#64748b', flexShrink: 0 }}>{inv.id}</span>
                <span style={{ fontSize: '13px', color: '#e2e8f0', flex: 1, minWidth: 0 }}>{inv.scenario}</span>
                <span style={{ padding: '2px 8px', background: inv.color + '18', border: '1px solid ' + inv.color + '40', borderRadius: '5px', fontSize: '10px', fontWeight: '700', color: inv.color, flexShrink: 0, whiteSpace: 'nowrap' }}>{inv.outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: '800', marginBottom: '16px' }}>Run It on Your Invoices</h2>
          <p style={{ fontSize: 'clamp(15px,3vw,18px)', color: '#94a3b8', marginBottom: '36px', lineHeight: '1.7' }}>
            Clone the repo, set your API keys, and run in dev mode first - no Gmail credentials needed.
            The full pipeline runs end to end in minutes.
          </p>
          <div style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '12px', padding: '20px 24px', marginBottom: '32px', textAlign: 'left' }}>
            <div className="mono" style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '2' }}>
              <span style={{ color: '#64748b' }}># Clone and install</span><br />
              <span style={{ color: '#10b981' }}>git clone</span> &lt;repo-url&gt;<br />
              <span style={{ color: '#10b981' }}>cd</span> agents/crewai-multi-agents/invoice-processing<br />
              <span style={{ color: '#10b981' }}>pip install</span> -r requirements.txt<br />
              <br />
              <span style={{ color: '#64748b' }}># Run in dev mode (sample invoices, no Mistral needed)</span><br />
              <span style={{ color: '#f59e0b' }}>ANTHROPIC_API_KEY</span>=your_key <span style={{ color: '#10b981' }}>python</span> main.py
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#e2e8f0', borderRadius: '10px', fontSize: '16px', fontWeight: '600', textDecoration: 'none' }}>
              <ArrowLeft size={20} />
              All Agentic Systems
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
