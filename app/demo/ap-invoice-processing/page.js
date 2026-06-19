'use client';

import { useState, useRef } from 'react';
import { ArrowLeft, Upload, FileText, CheckCircle2, AlertTriangle, RotateCcw, Zap, Shield, TrendingUp } from 'lucide-react';

// ─── Pre-computed fixture files ───────────────────────────────────────────────
const FIXTURE_FILES = [
  'INV_ACME_001_MATCHED.pdf',
  'INV_TECHPARTS_002_PRICE_VARIANCE.pdf',
  'INV_GLOBALOFFICE_003_QTY_OVERAGE.pdf',
  'INV_NIPPON_004_MISSING_ITEM.pdf',
  'INV_SERVICIOS_005_EXTRA_ITEM.pdf',
  'INV_CLOUDNET_006_QTY_UNDERAGE.pdf',
  'INV_NORDIC_007_MATCHED_HIGHVALUE.pdf',
  'INV_UNKNOWN_008_WRONG_VENDOR.pdf',
  'INV_TECHPARTS_009_PRICE_VARIANCE_2.pdf',
  'INV_CLOUDNET_010_MATCHED_SERVICES.pdf',
  'INV_ACME_011_DUPLICATE.pdf',
];

function fixturePathFor(filename) {
  return `/invoice-fixtures/${filename.replace('.pdf', '.json')}`;
}

// ─── Agent pipeline ───────────────────────────────────────────────────────────
const AGENT_STEPS = [
  { step:1, agent:'Email Triage Agent',        model:'Haiku',  icon:'📧', desc:'Classifies email, verifies attachment is an invoice document', duration:1800 },
  { step:2, agent:'Invoice OCR Extractor',     model:'Haiku',  icon:'🔍', desc:'Extracts all fields via Mistral OCR - vendor, amounts, line items', duration:2400 },
  { step:3, agent:'PO Reconciliation Agent',   model:'Sonnet', icon:'📋', desc:'3-way match: Invoice vs Purchase Order vs Goods Receipt Note', duration:3000 },
  { step:4, agent:'Exception Intelligence',    model:'Sonnet', icon:'⚖️', desc:'Classifies exception type, severity, and calculates risk score', duration:2200 },
  { step:5, agent:'Resolution Reporter',       model:'Haiku',  icon:'✅', desc:'Generates recommended action, GL codes, and payment routing', duration:1600 },
];

// ─── Outcome config ───────────────────────────────────────────────────────────
const OUTCOME_CONFIG = {
  auto_approved:   { color:'#4ade80', bg:'rgba(34,197,94,0.08)',   border:'rgba(34,197,94,0.25)',   label:'Auto-Approved',    icon:'✓',  badgeBg:'rgba(34,197,94,0.15)' },
  payment_priority:{ color:'#818cf8', bg:'rgba(99,102,241,0.08)',  border:'rgba(99,102,241,0.25)',  label:'Payment Priority', icon:'⏱', badgeBg:'rgba(99,102,241,0.15)' },
  partial_approved:{ color:'#f59e0b', bg:'rgba(245,158,11,0.08)',  border:'rgba(245,158,11,0.25)',  label:'Partial Approved', icon:'◑',  badgeBg:'rgba(245,158,11,0.15)' },
  hold_for_review: { color:'#fb923c', bg:'rgba(251,146,60,0.08)',  border:'rgba(251,146,60,0.25)',  label:'Hold for Review',  icon:'⏸', badgeBg:'rgba(251,146,60,0.15)' },
  hold_and_notify: { color:'#fb923c', bg:'rgba(251,146,60,0.08)',  border:'rgba(251,146,60,0.25)',  label:'Hold & Notify',    icon:'📢', badgeBg:'rgba(251,146,60,0.15)' },
  fraud_frozen:    { color:'#f87171', bg:'rgba(239,68,68,0.08)',   border:'rgba(239,68,68,0.25)',   label:'Fraud - Frozen',   icon:'⚠', badgeBg:'rgba(239,68,68,0.15)' },
  reject_duplicate:{ color:'#f87171', bg:'rgba(239,68,68,0.08)',   border:'rgba(239,68,68,0.25)',   label:'Duplicate - Blocked', icon:'✕', badgeBg:'rgba(239,68,68,0.15)' },
};

const RISK_COLOR = { LOW:'#4ade80', MEDIUM:'#f59e0b', HIGH:'#f87171', CRITICAL:'#ef4444' };

export default function APInvoiceDemoPage() {
  const [phase, setPhase]           = useState('upload');
  const [file, setFile]             = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [agentStates, setAgentStates] = useState(AGENT_STEPS.map(s => ({ ...s, status:'waiting' })));
  const [result, setResult]         = useState(null);
  const [elapsed, setElapsed]       = useState(0);
  const [expandedExc, setExpandedExc] = useState(null);
  const timerRef   = useRef(null);
  const fileInputRef = useRef(null);

  const handleFile = (f) => { if (f && f.type === 'application/pdf') setFile(f); };

  const startTimer = () => {
    const t0 = Date.now();
    timerRef.current = setInterval(() => setElapsed(Math.floor((Date.now()-t0)/1000)), 500);
  };
  const stopTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  const runPipeline = async () => {
    if (!file) return;
    const matched = FIXTURE_FILES.find(f => f === file.name);

    if (!matched) {
      setPhase('running');
      setAgentStates(AGENT_STEPS.map(s => ({ ...s, status:'waiting' })));
      startTimer();
      for (let i = 0; i < 2; i++) {
        const { step, duration } = AGENT_STEPS[i];
        await new Promise(r => setTimeout(r, 0));
        setAgentStates(prev => prev.map(a => a.step === step ? { ...a, status:'running' } : a));
        await new Promise(r => setTimeout(r, duration));
        setAgentStates(prev => prev.map(a => a.step === step ? { ...a, status:'complete' } : a));
      }
      await new Promise(r => setTimeout(r, 800));
      stopTimer();
      setPhase('error');
      return;
    }

    setPhase('running');
    setAgentStates(AGENT_STEPS.map(s => ({ ...s, status:'waiting' })));
    startTimer();

    for (let i = 0; i < AGENT_STEPS.length; i++) {
      const { step, duration } = AGENT_STEPS[i];
      await new Promise(r => setTimeout(r, 0));
      setAgentStates(prev => prev.map(a => a.step === step ? { ...a, status:'running' } : a));
      await new Promise(r => setTimeout(r, duration));
      setAgentStates(prev => prev.map(a => a.step === step ? { ...a, status:'complete' } : a));
    }

    await new Promise(r => setTimeout(r, 600));
    stopTimer();

    const res  = await fetch(fixturePathFor(file.name));
    const data = await res.json();
    setResult(data);
    setPhase('complete');
  };

  const reset = () => {
    stopTimer();
    setPhase('upload');
    setFile(null);
    setResult(null);
    setElapsed(0);
    setExpandedExc(null);
    setAgentStates(AGENT_STEPS.map(s => ({ ...s, status:'waiting' })));
  };

  const oc = result ? (OUTCOME_CONFIG[result.outcome] || OUTCOME_CONFIG.hold_for_review) : null;

  return (
    <div style={{ fontFamily:'Inter, sans-serif', background:'#0a0a0a', color:'#fff', minHeight:'100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:#0a0a0a; overflow-x:hidden; }
        .upload-zone:hover { border-color:rgba(16,185,129,0.5) !important; background:rgba(16,185,129,0.04) !important; }
        .exc-row { cursor:pointer; transition:background 0.15s ease; }
        .exc-row:hover { background:rgba(255,255,255,0.04) !important; }
        @keyframes spin { from{transform:rotate(0deg);}to{transform:rotate(360deg);} }
        @keyframes pulse { 0%,100%{opacity:1;}50%{opacity:0.4;} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);} }
        .spinning { animation:spin 1s linear infinite; }
        .pulsing  { animation:pulse 1.5s ease-in-out infinite; }
        .fade-in  { animation:fadeIn 0.4s ease forwards; }
      `}</style>

      {/* ── Nav ── */}
      <nav style={{ position:'sticky', top:0, background:'rgba(10,10,10,0.92)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(255,255,255,0.08)', zIndex:50 }}>
        <div style={{ maxWidth:'960px', margin:'0 auto', padding:'0 clamp(16px,4vw,32px)', height:'64px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
            <a href="/" style={{ display:'flex', alignItems:'center', gap:'6px', color:'#94a3b8', textDecoration:'none', fontSize:'14px', fontWeight:'500' }}>
              <ArrowLeft size={16}/>Back
            </a>
            <div style={{ width:'1px', height:'20px', background:'rgba(255,255,255,0.1)' }}/>
            <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
              <div style={{ width:'28px', height:'28px', background:'linear-gradient(135deg,#10b981,#059669)', borderRadius:'7px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <FileText size={16} color="white"/>
              </div>
              <span style={{ fontSize:'15px', fontWeight:'700' }}>AP Invoice Processing</span>
              <span style={{ padding:'2px 8px', background:'rgba(34,197,94,0.1)', border:'1px solid rgba(34,197,94,0.3)', borderRadius:'100px', fontSize:'10px', fontWeight:'700', color:'#4ade80' }}>LIVE</span>
            </div>
          </div>
          <a href="/agentic-systems/ap-invoice-processing" style={{ fontSize:'13px', color:'#64748b', textDecoration:'none', fontWeight:'500' }}>Architecture →</a>
        </div>
      </nav>

      <div style={{ maxWidth:'960px', margin:'0 auto', padding:'clamp(40px,8vw,64px) clamp(16px,5vw,32px)' }}>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* UPLOAD                                                              */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'upload' && (
          <>
            {/* ── Hero ── */}
            <div style={{ background:'linear-gradient(180deg,rgba(16,185,129,0.07) 0%,transparent 100%)', border:'1px solid rgba(16,185,129,0.12)', borderRadius:'24px', padding:'clamp(32px,6vw,56px) clamp(24px,5vw,48px)', textAlign:'center', marginBottom:'28px' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'5px 14px', background:'rgba(16,185,129,0.12)', border:'1px solid rgba(16,185,129,0.3)', borderRadius:'100px', fontSize:'11px', fontWeight:'700', color:'#34d399', letterSpacing:'0.06em', marginBottom:'20px' }}>
                5 AGENTS · MISTRAL OCR · CLAUDE HAIKU + SONNET · CREWAI
              </div>
              <h1 style={{ fontSize:'clamp(28px,5.5vw,48px)', fontWeight:'800', marginBottom:'14px', lineHeight:1.08, letterSpacing:'-0.02em' }}>
                AP Invoice Processing
              </h1>
              <p style={{ fontSize:'clamp(14px,2.2vw,16px)', color:'#94a3b8', lineHeight:'1.75', maxWidth:'560px', margin:'0 auto 32px' }}>
                Upload any supplier invoice PDF. Five AI agents extract fields via OCR, run a 3-way match against your PO and GRN, classify exceptions, score risk, and route for payment or escalation.
              </p>

              {/* Metrics */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'12px', maxWidth:'680px', margin:'0 auto' }}>
                {[
                  { val:'3-Way',   unit:'Match',        desc:'Invoice · PO · GRN',           icon:'🔗' },
                  { val:'<12s',    unit:'Processing',   desc:'full pipeline runtime',         icon:'⚡' },
                  { val:'7 Types', unit:'Exceptions',   desc:'price · qty · fraud · dup',    icon:'⚖️' },
                  { val:'100%',    unit:'GL Coded',     desc:'auto chart-of-accounts coding', icon:'📊' },
                ].map(m => (
                  <div key={m.unit} style={{ padding:'16px 12px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'14px' }}>
                    <div style={{ fontSize:'20px', marginBottom:'6px' }}>{m.icon}</div>
                    <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'clamp(15px,2.5vw,18px)', fontWeight:'800', color:'#34d399', marginBottom:'3px' }}>{m.val}</div>
                    <div style={{ fontSize:'11px', fontWeight:'700', color:'#e2e8f0', marginBottom:'2px' }}>{m.unit}</div>
                    <div style={{ fontSize:'10px', color:'#475569' }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Agent strip ── */}
            <div style={{ display:'flex', gap:'8px', marginBottom:'28px', overflowX:'auto', paddingBottom:'4px' }}>
              {AGENT_STEPS.map((a, i) => (
                <div key={a.step} style={{ display:'flex', alignItems:'center', gap:'8px', padding:'10px 14px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'10px', flexShrink:0 }}>
                  <span style={{ fontSize:'16px' }}>{a.icon}</span>
                  <div>
                    <div style={{ fontSize:'11px', fontWeight:'700', color:'#94a3b8', whiteSpace:'nowrap' }}>{a.agent}</div>
                    <span style={{ padding:'1px 6px', background:a.model==='Sonnet'?'rgba(139,92,246,0.15)':'rgba(59,130,246,0.15)', border:`1px solid ${a.model==='Sonnet'?'rgba(139,92,246,0.3)':'rgba(59,130,246,0.3)'}`, borderRadius:'4px', fontSize:'9px', fontWeight:'700', color:a.model==='Sonnet'?'#a78bfa':'#60a5fa' }}>{a.model}</span>
                  </div>
                  {i < AGENT_STEPS.length - 1 && <span style={{ color:'#334155', fontSize:'14px', marginLeft:'4px' }}>→</span>}
                </div>
              ))}
            </div>

            {/* ── Upload CTA ── */}
            <div style={{ background:'rgba(16,185,129,0.04)', border:'1px solid rgba(16,185,129,0.15)', borderRadius:'20px', padding:'clamp(20px,4vw,32px)' }}>
              <div style={{ fontSize:'12px', fontWeight:'700', color:'#64748b', letterSpacing:'0.08em', marginBottom:'16px', textAlign:'center' }}>UPLOAD SUPPLIER INVOICE</div>

              <div
                className="upload-zone"
                onDragOver={(e)=>{ e.preventDefault(); setIsDragging(true); }}
                onDragLeave={()=>setIsDragging(false)}
                onDrop={(e)=>{ e.preventDefault(); setIsDragging(false); handleFile(e.dataTransfer.files[0]); }}
                onClick={()=>fileInputRef.current?.click()}
                style={{ border:`2px dashed ${isDragging?'rgba(16,185,129,0.6)':file?'rgba(34,197,94,0.4)':'rgba(16,185,129,0.2)'}`, borderRadius:'14px', padding:'clamp(28px,5vw,44px) 24px', textAlign:'center', cursor:'pointer', background:isDragging?'rgba(16,185,129,0.06)':file?'rgba(34,197,94,0.04)':'rgba(16,185,129,0.02)', marginBottom:'16px', transition:'all 0.2s ease' }}
              >
                <input ref={fileInputRef} type="file" accept=".pdf" style={{ display:'none' }} onChange={(e)=>handleFile(e.target.files[0])}/>
                {file ? (
                  <>
                    <div style={{ fontSize:'38px', marginBottom:'10px' }}>📄</div>
                    <div style={{ fontSize:'17px', fontWeight:'700', color:'#22c55e', marginBottom:'5px' }}>{file.name}</div>
                    <div style={{ fontSize:'13px', color:'#64748b' }}>{(file.size/1024).toFixed(1)} KB · Click to change</div>
                  </>
                ) : (
                  <>
                    <Upload size={34} color="#10b981" style={{ marginBottom:'12px' }}/>
                    <div style={{ fontSize:'16px', fontWeight:'600', marginBottom:'6px' }}>Drop supplier invoice PDF here</div>
                    <div style={{ fontSize:'13px', color:'#64748b' }}>or click to browse · PDF files only</div>
                  </>
                )}
              </div>

              <button
                onClick={runPipeline}
                disabled={!file}
                style={{ width:'100%', padding:'16px', borderRadius:'12px', border:'none', cursor:file?'pointer':'not-allowed', background:file?'linear-gradient(135deg,#10b981,#059669)':'rgba(255,255,255,0.05)', color:file?'white':'#475569', fontSize:'16px', fontWeight:'700', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', boxShadow:file?'0 8px 32px rgba(16,185,129,0.3)':'none', transition:'all 0.2s ease' }}
              >
                <Zap size={20}/>{file ? 'Start 5-Agent Invoice Pipeline' : 'Upload a PDF to begin'}
              </button>

              {file && (
                <p style={{ textAlign:'center', fontSize:'12px', color:'#475569', marginTop:'12px' }}>
                  Email triage → OCR extraction → PO 3-way match → exception classification → GL coding
                </p>
              )}
            </div>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* ERROR                                                               */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'error' && (
          <div className="fade-in" style={{ textAlign:'center', padding:'60px 32px' }}>
            <div style={{ fontSize:'48px', marginBottom:'16px' }}>⚠️</div>
            <h2 style={{ fontSize:'24px', fontWeight:'700', marginBottom:'12px', color:'#f59e0b' }}>Document Parse Failed</h2>
            <p style={{ fontSize:'15px', color:'#64748b', maxWidth:'500px', margin:'0 auto 8px' }}>
              The OCR extractor could not identify a valid invoice structure in <strong style={{ color:'#e2e8f0' }}>{file?.name}</strong>.
            </p>
            <p style={{ fontSize:'14px', color:'#64748b', maxWidth:'480px', margin:'8px auto 32px' }}>
              This can occur with scanned documents, image-only PDFs, or non-standard invoice formats. Please ensure the document is a text-based invoice PDF and try again.
            </p>
            <button onClick={reset} style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 28px', background:'linear-gradient(135deg,#10b981,#059669)', color:'white', borderRadius:'10px', fontSize:'14px', fontWeight:'600', cursor:'pointer', border:'none' }}>
              <RotateCcw size={16}/>Try Another Document
            </button>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* RUNNING                                                             */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'running' && (
          <>
            <div style={{ textAlign:'center', marginBottom:'40px' }}>
              <div className="pulsing" style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'8px 20px', background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.3)', borderRadius:'100px', fontSize:'13px', fontWeight:'600', color:'#34d399', marginBottom:'20px' }}>
                <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#34d399' }}/>
                5-Agent Pipeline Running · {elapsed}s
              </div>
              <h2 style={{ fontSize:'clamp(20px,4.5vw,34px)', fontWeight:'800', marginBottom:'8px' }}>Processing {file?.name}</h2>
              <p style={{ fontSize:'13px', color:'#64748b' }}>OCR extraction → PO match → exception analysis → GL coding</p>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'32px' }}>
              {agentStates.map(agent => {
                const isRunning = agent.status === 'running';
                const isDone    = agent.status === 'complete';
                return (
                  <div key={agent.step} style={{ display:'flex', alignItems:'center', gap:'16px', padding:'18px 20px', background:isRunning?'rgba(16,185,129,0.08)':isDone?'rgba(34,197,94,0.04)':'rgba(255,255,255,0.02)', border:`1px solid ${isRunning?'rgba(16,185,129,0.4)':isDone?'rgba(34,197,94,0.25)':'rgba(255,255,255,0.06)'}`, borderRadius:'12px', opacity:agent.status==='waiting'?0.4:1, transition:'all 0.3s ease' }}>
                    <div style={{ fontSize:'24px', flexShrink:0 }}>{agent.icon}</div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'8px', flexWrap:'wrap', marginBottom:'3px' }}>
                        <span style={{ fontSize:'14px', fontWeight:'700', color:isRunning?'#34d399':isDone?'#4ade80':'#94a3b8' }}>
                          Agent {agent.step}: {agent.agent}
                        </span>
                        <span style={{ padding:'2px 7px', background:agent.model==='Sonnet'?'rgba(139,92,246,0.15)':'rgba(59,130,246,0.15)', border:`1px solid ${agent.model==='Sonnet'?'rgba(139,92,246,0.3)':'rgba(59,130,246,0.3)'}`, borderRadius:'4px', fontSize:'10px', fontWeight:'700', color:agent.model==='Sonnet'?'#a78bfa':'#60a5fa' }}>
                          {agent.model}
                        </span>
                        {isRunning && <span className="pulsing" style={{ fontSize:'12px', color:'#34d399', fontWeight:'600' }}>Processing…</span>}
                      </div>
                      <div style={{ fontSize:'12px', color:'#64748b' }}>{agent.desc}</div>
                    </div>
                    <div style={{ flexShrink:0 }}>
                      {isRunning && <div style={{ width:'18px', height:'18px', border:'2px solid rgba(16,185,129,0.3)', borderTop:'2px solid #10b981', borderRadius:'50%' }} className="spinning"/>}
                      {isDone    && <CheckCircle2 size={18} color="#4ade80"/>}
                      {agent.status === 'waiting' && <div style={{ width:'18px', height:'18px', border:'2px solid rgba(255,255,255,0.1)', borderRadius:'50%' }}/>}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:'100px', height:'5px', overflow:'hidden' }}>
              <div style={{ height:'100%', width:`${(agentStates.filter(a=>a.status==='complete').length/agentStates.length)*100}%`, background:'linear-gradient(90deg,#10b981,#34d399)', borderRadius:'100px', transition:'width 0.5s ease' }}/>
            </div>
            <div style={{ textAlign:'center', fontSize:'12px', color:'#475569', marginTop:'10px' }}>
              {agentStates.filter(a=>a.status==='complete').length} of {agentStates.length} agents complete
            </div>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* COMPLETE                                                            */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'complete' && result && (
          <div className="fade-in">

            {/* ── Verdict banner ── */}
            <div style={{ padding:'clamp(24px,4vw,40px)', background:oc?.bg, border:`1px solid ${oc?.border}`, borderRadius:'20px', textAlign:'center', marginBottom:'20px' }}>
              <div style={{ fontSize:'48px', marginBottom:'10px' }}>{oc?.icon}</div>
              <div style={{ fontSize:'clamp(18px,3.5vw,26px)', fontWeight:'800', color:oc?.color, marginBottom:'8px' }}>
                {oc?.label}
              </div>
              <div style={{ fontSize:'clamp(13px,2vw,15px)', color:'#94a3b8', marginBottom:'16px' }}>
                {result.invoice_number} · {result.vendor_name} · {result.currency} {Number(result.invoice_amount).toLocaleString()}
              </div>
              <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
                <span style={{ padding:'4px 12px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'6px', fontSize:'12px', color:'#94a3b8' }}>
                  PO: <strong style={{ color:'#e2e8f0' }}>{result.po_reference}</strong>
                </span>
                <span style={{ padding:'4px 12px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'6px', fontSize:'12px', color:'#94a3b8' }}>
                  Match: <strong style={{ color:result.match_status==='FULL_MATCH'?'#4ade80':result.match_status==='DUPLICATE'?'#f87171':'#f59e0b' }}>{result.match_status?.replace(/_/g,' ')}</strong>
                </span>
                <span style={{ padding:'4px 12px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'6px', fontSize:'12px', color:'#94a3b8' }}>
                  Risk: <strong style={{ color:RISK_COLOR[result.risk_level] }}>{result.risk_level} ({result.risk_score}/100)</strong>
                </span>
              </div>
            </div>

            {/* ── Stats grid ── */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'10px', marginBottom:'20px' }}>
              {[
                { val:`${result.extraction_results?.fields_extracted ?? '—'}`, label:'Fields Extracted', color:'#34d399' },
                { val:`${result.match_results?.line_items_matched ?? '—'}/${result.match_results?.line_items_total ?? '—'}`, label:'Lines Matched', color:'#818cf8' },
                { val:(result.exceptions?.length ?? 0).toString(), label:'Exceptions', color:result.exceptions?.length ? '#f59e0b' : '#4ade80' },
                { val:`${result.extraction_results?.ocr_confidence ? Math.round(result.extraction_results.ocr_confidence*100) : '—'}%`, label:'OCR Confidence', color:'#94a3b8' },
              ].map(({ val, label, color }) => (
                <div key={label} style={{ padding:'clamp(14px,2.5vw,20px)', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', textAlign:'center' }}>
                  <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'clamp(16px,3vw,22px)', fontWeight:'800', color, marginBottom:'5px' }}>{val}</div>
                  <div style={{ fontSize:'11px', color:'#64748b' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* ── Summary ── */}
            <div style={{ padding:'20px 24px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', marginBottom:'20px' }}>
              <div style={{ fontSize:'11px', fontWeight:'700', color:'#64748b', letterSpacing:'0.08em', marginBottom:'10px' }}>PROCESSING SUMMARY</div>
              <p style={{ fontSize:'14px', color:'#94a3b8', lineHeight:'1.75' }}>{result.summary}</p>
            </div>

            {/* ── Fraud signals (if any) ── */}
            {result.fraud_signals?.length > 0 && (
              <div style={{ marginBottom:'20px' }}>
                <div style={{ fontSize:'13px', fontWeight:'700', color:'#f87171', marginBottom:'10px', display:'flex', alignItems:'center', gap:'6px' }}>
                  <AlertTriangle size={14}/>Fraud Signals ({result.fraud_signals.length})
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
                  {result.fraud_signals.map((sig, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'10px', padding:'10px 14px', background:'rgba(239,68,68,0.05)', border:'1px solid rgba(239,68,68,0.15)', borderRadius:'8px', fontSize:'13px', color:'#fca5a5', lineHeight:'1.5' }}>
                      <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#ef4444', flexShrink:0, marginTop:'5px' }}/>{sig}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Early payment discount callout ── */}
            {result.discount_available && (
              <div style={{ padding:'18px 22px', background:'rgba(99,102,241,0.08)', border:'1px solid rgba(99,102,241,0.25)', borderRadius:'14px', marginBottom:'20px', display:'flex', alignItems:'center', gap:'16px' }}>
                <div style={{ fontSize:'32px' }}>⏱</div>
                <div>
                  <div style={{ fontSize:'14px', fontWeight:'700', color:'#818cf8', marginBottom:'4px' }}>Early Payment Discount Available</div>
                  <div style={{ fontSize:'13px', color:'#94a3b8' }}>
                    {result.currency} {Number(result.discount_available).toLocaleString()} savings if paid by <strong style={{ color:'#e2e8f0' }}>{result.discount_deadline}</strong> - annualised rate 36.5%
                  </div>
                </div>
              </div>
            )}

            {/* ── Partial approve/hold split ── */}
            {(result.approve_amount || result.hold_amount) && (
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'20px' }}>
                {result.approve_amount && (
                  <div style={{ padding:'20px', background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.2)', borderRadius:'14px', textAlign:'center' }}>
                    <div style={{ fontSize:'11px', fontWeight:'700', color:'#4ade80', letterSpacing:'0.08em', marginBottom:'8px' }}>APPROVE NOW</div>
                    <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'22px', fontWeight:'800', color:'#4ade80' }}>
                      {result.currency} {Number(result.approve_amount).toLocaleString()}
                    </div>
                    <div style={{ fontSize:'11px', color:'#64748b', marginTop:'6px' }}>PO-authorised lines</div>
                  </div>
                )}
                {result.hold_amount && (
                  <div style={{ padding:'20px', background:'rgba(245,158,11,0.06)', border:'1px solid rgba(245,158,11,0.2)', borderRadius:'14px', textAlign:'center' }}>
                    <div style={{ fontSize:'11px', fontWeight:'700', color:'#f59e0b', letterSpacing:'0.08em', marginBottom:'8px' }}>ON HOLD</div>
                    <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'22px', fontWeight:'800', color:'#f59e0b' }}>
                      {result.currency} {Number(result.hold_amount).toLocaleString()}
                    </div>
                    <div style={{ fontSize:'11px', color:'#64748b', marginTop:'6px' }}>Pending resolution</div>
                  </div>
                )}
              </div>
            )}

            {/* ── Exceptions ── */}
            {result.exceptions?.length > 0 && (
              <div style={{ marginBottom:'20px' }}>
                <div style={{ fontSize:'13px', fontWeight:'700', color:'#e2e8f0', marginBottom:'10px', display:'flex', alignItems:'center', gap:'6px' }}>
                  <AlertTriangle size={14} color="#f59e0b"/>Exceptions Raised ({result.exceptions.length})
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
                  {result.exceptions.map((exc) => {
                    const isExp = expandedExc === exc.exception_id;
                    const sevColor = { CRITICAL:'#ef4444', HIGH:'#f87171', MEDIUM:'#f59e0b', LOW:'#eab308', INFO:'#64748b', OPPORTUNITY:'#818cf8' }[exc.severity] || '#94a3b8';
                    return (
                      <div key={exc.exception_id} className="exc-row" onClick={()=>setExpandedExc(isExp ? null : exc.exception_id)} style={{ background:isExp?'rgba(255,255,255,0.04)':'rgba(255,255,255,0.02)', border:`1px solid ${isExp?'rgba(255,255,255,0.12)':'rgba(255,255,255,0.06)'}`, borderRadius:'10px', overflow:'hidden' }}>
                        <div style={{ display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px' }}>
                          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:sevColor, flexShrink:0 }}/>
                          <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', color:'#475569', flexShrink:0, width:'64px' }}>{exc.exception_id.slice(-7)}</span>
                          <span style={{ fontSize:'13px', color:'#e2e8f0', fontWeight:'500', flex:1 }}>{exc.type.replace(/_/g,' ')}</span>
                          <span style={{ padding:'2px 8px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'100px', fontSize:'10px', fontWeight:'700', color:sevColor, flexShrink:0 }}>{exc.severity}</span>
                          <span style={{ fontSize:'12px', color:'#475569' }}>{isExp ? '▲' : '▼'}</span>
                        </div>
                        {isExp && (
                          <div style={{ padding:'0 16px 14px 50px', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ paddingTop:'12px', fontSize:'13px', color:'#94a3b8', lineHeight:'1.7', marginBottom:'8px' }}>{exc.description}</div>
                            <div style={{ fontSize:'12px', color:'#34d399', fontWeight:'600' }}>→ {exc.resolution}</div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── GL Codes ── */}
            {result.gl_codes?.length > 0 && (
              <div style={{ marginBottom:'20px' }}>
                <div style={{ fontSize:'13px', fontWeight:'700', color:'#e2e8f0', marginBottom:'10px', display:'flex', alignItems:'center', gap:'6px' }}>
                  <TrendingUp size={14} color="#34d399"/>GL Code Assignment
                </div>
                <div style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', overflow:'hidden' }}>
                  <div style={{ display:'grid', gridTemplateColumns:'120px 1fr auto', gap:0 }}>
                    {['GL CODE','DESCRIPTION','AMOUNT'].map(h => (
                      <div key={h} style={{ padding:'8px 14px', background:'rgba(255,255,255,0.04)', fontSize:'10px', fontWeight:'700', color:'#475569', letterSpacing:'0.06em' }}>{h}</div>
                    ))}
                    {result.gl_codes.map((gl, i) => (
                      <>
                        <div key={`code-${i}`} style={{ padding:'10px 14px', fontSize:'12px', fontFamily:'JetBrains Mono, monospace', color:'#34d399', borderTop:'1px solid rgba(255,255,255,0.05)' }}>{gl.code}</div>
                        <div key={`desc-${i}`} style={{ padding:'10px 14px', fontSize:'13px', color:'#94a3b8', borderTop:'1px solid rgba(255,255,255,0.05)' }}>{gl.description}</div>
                        <div key={`amt-${i}`} style={{ padding:'10px 14px', fontSize:'12px', fontFamily:'JetBrains Mono, monospace', color:'#e2e8f0', borderTop:'1px solid rgba(255,255,255,0.05)', textAlign:'right' }}>
                          {result.currency} {Number(gl.amount).toLocaleString()}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Agent insights ── */}
            {result.agent_insights?.length > 0 && (
              <div style={{ marginBottom:'24px' }}>
                <div style={{ fontSize:'13px', fontWeight:'700', color:'#e2e8f0', marginBottom:'10px', display:'flex', alignItems:'center', gap:'6px' }}>
                  <Shield size={14} color="#34d399"/>Agent Insights
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
                  {result.agent_insights.map((ins, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'10px', padding:'10px 14px', background:'rgba(16,185,129,0.04)', border:'1px solid rgba(16,185,129,0.12)', borderRadius:'8px', fontSize:'13px', color:'#6ee7b7', lineHeight:'1.5' }}>
                      <div style={{ fontSize:'10px', color:'#10b981', fontWeight:'700', flexShrink:0, paddingTop:'2px' }}>{String(i+1).padStart(2,'0')}</div>
                      {ins}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Actions ── */}
            <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'24px' }}>
              <a href="/agentic-systems/ap-invoice-processing" style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 24px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#d4d4d4', borderRadius:'10px', fontSize:'14px', fontWeight:'600', textDecoration:'none' }}>
                <FileText size={16}/>View Architecture
              </a>
              <button onClick={reset} style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 24px', background:'linear-gradient(135deg,#10b981,#059669)', color:'white', borderRadius:'10px', fontSize:'14px', fontWeight:'700', cursor:'pointer', border:'none', boxShadow:'0 4px 20px rgba(16,185,129,0.3)' }}>
                <RotateCcw size={16}/>Process Another Invoice
              </button>
            </div>

            <div style={{ padding:'14px', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.05)', borderRadius:'10px' }}>
              <p style={{ fontSize:'12px', color:'#475569', lineHeight:'1.6', textAlign:'center' }}>
                Built on CrewAI with Claude Haiku and Sonnet - configurable for your vendor master, PO database, GL chart of accounts, and approval thresholds.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
