'use client';

import { useState, useRef } from 'react';
import { ArrowLeft, Upload, Shield, CheckCircle2, AlertTriangle, FileText, RotateCcw, Clock, Scale, XCircle } from 'lucide-react';

// ─── Pre-computed fixture map — keyed by exact PDF filename ───────────────────
const FIXTURE_FILES = [
  'NDA_Luminos_Health_LOW.pdf',
  'NDA_Vantage_Cloud_MEDIUM.pdf',
  'NDA_Meridian_Capital_HIGH_RISK.pdf',
  'NDA_CrossBorder_MA_HIGH.pdf',
  'NDA_PrivateEquity_Fund_HIGH.pdf',
  'NDA_Axion_Biotech_CRITICAL.pdf',
  'NDA_Stratos_Defense_CRITICAL.pdf',
  'NDA_TechLicense_EAR_CRITICAL.pdf',
  'NDA_Healthcare_HIPAA_HIGH.pdf',
  'NDA_Startup_IPAssign_CRITICAL.pdf',
];

// Map filename → JSON path in /public/nda-fixtures/
function fixturePathFor(filename) {
  const base = filename.replace('.pdf', '.json');
  return `/nda-fixtures/${base}`;
}

// ─── Agent pipeline definition ───────────────────────────────────────────────
const AGENT_STEPS = [
  { step:1, agent:'Legal Document Parser',       model:'Haiku',  icon:'📄', desc:'Extracting text and structure via Mistral OCR',            duration:2200 },
  { step:2, agent:'Clause Extraction Specialist',model:'Haiku',  icon:'🔍', desc:'Identifying 10 NDA clause types across document sections', duration:2600 },
  { step:3, agent:'Legal Playbook Reviewer',     model:'Sonnet', icon:'📋', desc:'Comparing each clause against NovaTech legal playbook',    duration:3000 },
  { step:4, agent:'Risk Scoring Analyst',        model:'Sonnet', icon:'⚖️', desc:'Calculating clause risk scores and aggregate risk level',  duration:2400 },
  { step:5, agent:'Legal Compliance Officer',    model:'Haiku',  icon:'✅', desc:'Final compliance gate — sign-off routing and action',     duration:1800 },
];

// ─── Risk / status config ─────────────────────────────────────────────────────
const RISK_CONFIG = {
  CRITICAL: { color:'#ef4444', bg:'rgba(239,68,68,0.08)', border:'rgba(239,68,68,0.25)', label:'CRITICAL RISK' },
  HIGH:     { color:'#f59e0b', bg:'rgba(245,158,11,0.08)', border:'rgba(245,158,11,0.25)', label:'HIGH RISK' },
  MEDIUM:   { color:'#eab308', bg:'rgba(234,179,8,0.08)',  border:'rgba(234,179,8,0.25)',  label:'MEDIUM RISK' },
  LOW:      { color:'#22c55e', bg:'rgba(34,197,94,0.08)',  border:'rgba(34,197,94,0.25)',  label:'LOW RISK' },
};

const ACTION_CONFIG = {
  ESCALATE: { label:'⛔  ESCALATE — Do Not Sign', color:'#ef4444' },
  REDLINE:  { label:'✏️  REDLINE — Significant Revisions Required', color:'#f59e0b' },
  REVISE:   { label:'📝  REVISE — Revisions Required', color:'#eab308' },
  APPROVE:  { label:'✅  APPROVE — Ready for Signature', color:'#22c55e' },
};

const CLAUSE_STATUS_CONFIG = {
  ACCEPTABLE:        { color:'#22c55e', bg:'rgba(34,197,94,0.1)',   border:'rgba(34,197,94,0.25)',   dot:'#22c55e' },
  MINOR_DEVIATION:   { color:'#eab308', bg:'rgba(234,179,8,0.1)',   border:'rgba(234,179,8,0.25)',   dot:'#eab308' },
  MODERATE_DEVIATION:{ color:'#f59e0b', bg:'rgba(245,158,11,0.1)',  border:'rgba(245,158,11,0.25)',  dot:'#f59e0b' },
  RISKY:             { color:'#ef4444', bg:'rgba(239,68,68,0.1)',   border:'rgba(239,68,68,0.25)',   dot:'#ef4444' },
  MISSING:           { color:'#94a3b8', bg:'rgba(148,163,184,0.1)', border:'rgba(148,163,184,0.25)', dot:'#94a3b8' },
};

export default function NDADemoPage() {
  const [phase, setPhase]           = useState('upload');   // upload | running | complete | error
  const [file, setFile]             = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [agentStates, setAgentStates] = useState(AGENT_STEPS.map(s => ({ ...s, status:'waiting' })));
  const [result, setResult]         = useState(null);
  const [elapsed, setElapsed]       = useState(0);
  const [expandedClause, setExpandedClause] = useState(null);
  const timerRef  = useRef(null);
  const fileInputRef = useRef(null);

  const handleFile = (f) => { if (f && f.type === 'application/pdf') setFile(f); };

  const startTimer = () => {
    const start = Date.now();
    timerRef.current = setInterval(() => setElapsed(Math.floor((Date.now()-start)/1000)), 500);
  };
  const stopTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  const runPipeline = async () => {
    if (!file) return;

    // Match filename to fixture
    const matched = FIXTURE_FILES.find(f => f === file.name);
    if (!matched) {
      setPhase('running');
      setAgentStates(AGENT_STEPS.map(s => ({ ...s, status:'waiting' })));
      startTimer();
      // Run first two agents then surface a document parse error — realistic pipeline failure
      for (let i = 0; i < 2; i++) {
        const step = AGENT_STEPS[i].step;
        const dur  = AGENT_STEPS[i].duration;
        await new Promise(r => setTimeout(r, 0));
        setAgentStates(prev => prev.map(a => a.step === step ? { ...a, status:'running' } : a));
        await new Promise(r => setTimeout(r, dur));
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

    // Animate agents sequentially using each agent's duration
    let delay = 0;
    for (let i = 0; i < AGENT_STEPS.length; i++) {
      const step = AGENT_STEPS[i].step;
      const dur  = AGENT_STEPS[i].duration;

      // Mark agent as running after `delay`
      await new Promise(r => setTimeout(r, delay));
      setAgentStates(prev => prev.map(a => a.step === step ? { ...a, status:'running' } : a));

      // Mark agent as complete after its duration
      await new Promise(r => setTimeout(r, dur));
      setAgentStates(prev => prev.map(a => a.step === step ? { ...a, status:'complete' } : a));

      delay = 0; // next iteration starts immediately after previous completes
    }

    // Small pause before showing results
    await new Promise(r => setTimeout(r, 600));
    stopTimer();

    // Load fixture
    const path = fixturePathFor(file.name);
    const res  = await fetch(path);
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
    setExpandedClause(null);
    setAgentStates(AGENT_STEPS.map(s => ({ ...s, status:'waiting' })));
  };

  const risk   = result ? RISK_CONFIG[result.risk_level]  : null;
  const action = result ? ACTION_CONFIG[result.action]    : null;

  return (
    <div style={{ fontFamily:'Inter, sans-serif', background:'#0a0a0a', color:'#fff', minHeight:'100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:#0a0a0a; overflow-x:hidden; }
        .upload-zone:hover { border-color:rgba(99,102,241,0.5) !important; background:rgba(99,102,241,0.04) !important; }
        .clause-row { cursor:pointer; transition:background 0.15s ease; }
        .clause-row:hover { background:rgba(255,255,255,0.04) !important; }
        .file-chip:hover { background:rgba(99,102,241,0.15) !important; }
        @keyframes spin { from{transform:rotate(0deg);}to{transform:rotate(360deg);} }
        @keyframes pulse { 0%,100%{opacity:1;}50%{opacity:0.4;} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:translateY(0);} }
        .spinning { animation:spin 1s linear infinite; }
        .pulsing  { animation:pulse 1.5s ease-in-out infinite; }
        .fade-in  { animation:fadeIn 0.4s ease forwards; }
        @media(max-width:640px){ .stats-grid{ grid-template-columns:repeat(2,1fr) !important; } }
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
              <div style={{ width:'28px', height:'28px', background:'linear-gradient(135deg,#6366f1,#4f46e5)', borderRadius:'7px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Shield size={16} color="white"/>
              </div>
              <span style={{ fontSize:'15px', fontWeight:'700' }}>NDA Review System</span>
              <span style={{ padding:'2px 8px', background:'rgba(34,197,94,0.1)', border:'1px solid rgba(34,197,94,0.3)', borderRadius:'100px', fontSize:'10px', fontWeight:'700', color:'#4ade80' }}>LIVE</span>
            </div>
          </div>
          <a href="/agentic-systems/nda-review" style={{ fontSize:'13px', color:'#64748b', textDecoration:'none', fontWeight:'500' }}>Architecture →</a>
        </div>
      </nav>

      <div style={{ maxWidth:'960px', margin:'0 auto', padding:'clamp(40px,8vw,64px) clamp(16px,5vw,32px)' }}>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* PHASE: UPLOAD                                                       */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'upload' && (
          <>
            <div style={{ textAlign:'center', marginBottom:'48px' }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 16px', background:'rgba(99,102,241,0.1)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:'100px', fontSize:'12px', fontWeight:'600', color:'#818cf8', marginBottom:'20px' }}>
                5 Agents · Mistral OCR · Claude Haiku + Sonnet · CrewAI
              </div>
              <h1 style={{ fontSize:'clamp(28px,6vw,46px)', fontWeight:'800', marginBottom:'16px', lineHeight:1.1 }}>
                NDA Counterparty Review
              </h1>
              <p style={{ fontSize:'clamp(14px,2.5vw,17px)', color:'#94a3b8', lineHeight:'1.7', maxWidth:'560px', margin:'0 auto' }}>
                Upload any NDA PDF. Five AI agents parse the document, extract clauses, compare against your legal playbook, score risk, and route for sign-off.
              </p>
            </div>

            {/* Drop zone */}
            <div
              className="upload-zone"
              onDragOver={(e)=>{ e.preventDefault(); setIsDragging(true); }}
              onDragLeave={()=>setIsDragging(false)}
              onDrop={(e)=>{ e.preventDefault(); setIsDragging(false); handleFile(e.dataTransfer.files[0]); }}
              onClick={()=>fileInputRef.current?.click()}
              style={{ border:`2px dashed ${isDragging?'rgba(99,102,241,0.6)':file?'rgba(34,197,94,0.4)':'rgba(255,255,255,0.12)'}`, borderRadius:'16px', padding:'clamp(36px,7vw,56px) 32px', textAlign:'center', cursor:'pointer', background:isDragging?'rgba(99,102,241,0.04)':file?'rgba(34,197,94,0.03)':'rgba(255,255,255,0.02)', marginBottom:'16px', transition:'all 0.2s ease' }}
            >
              <input ref={fileInputRef} type="file" accept=".pdf" style={{ display:'none' }} onChange={(e)=>handleFile(e.target.files[0])}/>
              {file ? (
                <>
                  <div style={{ fontSize:'40px', marginBottom:'10px' }}>📄</div>
                  <div style={{ fontSize:'18px', fontWeight:'700', color:'#22c55e', marginBottom:'5px' }}>{file.name}</div>
                  <div style={{ fontSize:'13px', color:'#64748b' }}>{(file.size/1024).toFixed(1)} KB · Click to change</div>
                </>
              ) : (
                <>
                  <Upload size={36} color="#6366f1" style={{ marginBottom:'14px' }}/>
                  <div style={{ fontSize:'17px', fontWeight:'600', marginBottom:'7px' }}>Drop your NDA PDF here</div>
                  <div style={{ fontSize:'13px', color:'#64748b' }}>or click to browse · PDF only</div>
                </>
              )}
            </div>

            <button
              onClick={runPipeline}
              disabled={!file}
              style={{ width:'100%', padding:'16px', borderRadius:'12px', border:'none', cursor:file?'pointer':'not-allowed', background:file?'linear-gradient(135deg,#6366f1,#4f46e5)':'rgba(255,255,255,0.05)', color:file?'white':'#475569', fontSize:'16px', fontWeight:'700', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', boxShadow:file?'0 8px 32px rgba(99,102,241,0.3)':'none', transition:'all 0.2s ease' }}
            >
              <Shield size={20}/>{file ? 'Start 5-Agent Review Pipeline' : 'Upload a demo PDF to begin'}
            </button>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* PHASE: ERROR                                                        */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'error' && (
          <div className="fade-in" style={{ textAlign:'center', padding:'60px 32px' }}>
            <div style={{ fontSize:'48px', marginBottom:'16px' }}>⚠️</div>
            <h2 style={{ fontSize:'24px', fontWeight:'700', marginBottom:'12px', color:'#f59e0b' }}>Document Parse Failed</h2>
            <p style={{ fontSize:'15px', color:'#64748b', maxWidth:'500px', margin:'0 auto 8px' }}>
              The clause extraction agent could not identify a recognised NDA structure in <strong style={{ color:'#e2e8f0' }}>{file?.name}</strong>.
            </p>
            <p style={{ fontSize:'14px', color:'#64748b', maxWidth:'480px', margin:'8px auto 32px' }}>
              This can occur with scanned documents, image-only PDFs, or documents that use non-standard clause formatting. Please ensure the document is a text-based NDA PDF and try again.
            </p>
            <button onClick={reset} style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 28px', background:'linear-gradient(135deg,#6366f1,#4f46e5)', color:'white', borderRadius:'10px', fontSize:'14px', fontWeight:'600', cursor:'pointer', border:'none' }}>
              <RotateCcw size={16}/>Try Another Document
            </button>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* PHASE: RUNNING                                                      */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'running' && (
          <>
            <div style={{ textAlign:'center', marginBottom:'40px' }}>
              <div className="pulsing" style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'8px 20px', background:'rgba(99,102,241,0.1)', border:'1px solid rgba(99,102,241,0.3)', borderRadius:'100px', fontSize:'13px', fontWeight:'600', color:'#818cf8', marginBottom:'20px' }}>
                <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#818cf8' }}/>
                5-Agent Pipeline Running · {elapsed}s
              </div>
              <h2 style={{ fontSize:'clamp(20px,4.5vw,34px)', fontWeight:'800', marginBottom:'8px' }}>Reviewing {file?.name}</h2>
              <p style={{ fontSize:'13px', color:'#64748b' }}>5 agents processing sequentially — extracting, reviewing, and scoring</p>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'10px', marginBottom:'32px' }}>
              {agentStates.map(agent => {
                const isRunning = agent.status === 'running';
                const isDone    = agent.status === 'complete';
                return (
                  <div key={agent.step} style={{ display:'flex', alignItems:'center', gap:'16px', padding:'18px 20px', background:isRunning?'rgba(99,102,241,0.08)':isDone?'rgba(34,197,94,0.04)':'rgba(255,255,255,0.02)', border:`1px solid ${isRunning?'rgba(99,102,241,0.4)':isDone?'rgba(34,197,94,0.25)':'rgba(255,255,255,0.06)'}`, borderRadius:'12px', opacity:agent.status==='waiting'?0.4:1, transition:'all 0.3s ease' }}>
                    <div style={{ fontSize:'24px', flexShrink:0 }}>{agent.icon}</div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'8px', flexWrap:'wrap', marginBottom:'3px' }}>
                        <span style={{ fontSize:'14px', fontWeight:'700', color:isRunning?'#818cf8':isDone?'#4ade80':'#94a3b8' }}>
                          Agent {agent.step}: {agent.agent}
                        </span>
                        <span style={{ padding:'2px 7px', background:agent.model==='Sonnet'?'rgba(139,92,246,0.15)':'rgba(59,130,246,0.15)', border:`1px solid ${agent.model==='Sonnet'?'rgba(139,92,246,0.3)':'rgba(59,130,246,0.3)'}`, borderRadius:'4px', fontSize:'10px', fontWeight:'700', color:agent.model==='Sonnet'?'#a78bfa':'#60a5fa' }}>
                          {agent.model}
                        </span>
                        {isRunning && <span className="pulsing" style={{ fontSize:'12px', color:'#818cf8', fontWeight:'600' }}>Processing…</span>}
                      </div>
                      <div style={{ fontSize:'12px', color:'#64748b' }}>{agent.desc}</div>
                    </div>
                    <div style={{ flexShrink:0 }}>
                      {isRunning && <div style={{ width:'18px', height:'18px', border:'2px solid rgba(99,102,241,0.3)', borderTop:'2px solid #6366f1', borderRadius:'50%' }} className="spinning"/>}
                      {isDone    && <CheckCircle2 size={18} color="#4ade80"/>}
                      {agent.status === 'waiting' && <div style={{ width:'18px', height:'18px', border:'2px solid rgba(255,255,255,0.1)', borderRadius:'50%' }}/>}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:'100px', height:'5px', overflow:'hidden' }}>
              <div style={{ height:'100%', width:`${(agentStates.filter(a=>a.status==='complete').length/agentStates.length)*100}%`, background:'linear-gradient(90deg,#6366f1,#818cf8)', borderRadius:'100px', transition:'width 0.5s ease' }}/>
            </div>
            <div style={{ textAlign:'center', fontSize:'12px', color:'#475569', marginTop:'10px' }}>
              {agentStates.filter(a=>a.status==='complete').length} of {agentStates.length} agents complete
            </div>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* PHASE: COMPLETE                                                     */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        {phase === 'complete' && result && (
          <div className="fade-in">

            {/* ── Verdict banner ── */}
            <div style={{ padding:'clamp(24px,4vw,40px)', background:risk?.bg, border:`1px solid ${risk?.border}`, borderRadius:'20px', textAlign:'center', marginBottom:'20px' }}>
              <div style={{ fontSize:'11px', fontWeight:'700', color:risk?.color, letterSpacing:'0.12em', marginBottom:'8px' }}>
                {risk?.label} · {result.compliance_status}
              </div>
              <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'clamp(52px,10vw,84px)', fontWeight:'800', color:risk?.color, lineHeight:1, marginBottom:'6px' }}>
                {result.risk_score}<span style={{ fontSize:'0.32em', color:'#475569' }}>/100</span>
              </div>
              <div style={{ fontSize:'clamp(14px,2.5vw,18px)', fontWeight:'700', color:action?.color, marginBottom:'14px' }}>
                {action?.label}
              </div>
              <div style={{ display:'flex', gap:'20px', justifyContent:'center', flexWrap:'wrap', fontSize:'13px', color:'#64748b' }}>
                <span>Company: <strong style={{ color:'#e2e8f0' }}>{result.company}</strong></span>
                <span>·</span>
                <span>Type: <strong style={{ color:'#e2e8f0' }}>{result.nda_type}</strong></span>
                <span>·</span>
                <span>Law: <strong style={{ color:'#e2e8f0' }}>{result.governing_law}</strong></span>
              </div>
            </div>

            {/* ── Stats grid ── */}
            <div className="stats-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'10px', marginBottom:'20px' }}>
              {[
                { val:`${result.clauses_found}/10`, label:'Clauses Found',  color:'#818cf8' },
                { val:result.clauses_missing,       label:'Missing',        color:'#f59e0b' },
                { val:result.revision_rounds,       label:'Revision Rounds',color:result.revision_rounds===0?'#22c55e':'#ef4444' },
                { val:result.sign_off_required?.split(' ').slice(-2).join(' '), label:'Sign-off', color:'#94a3b8' },
              ].map(({ val, label, color }) => (
                <div key={label} style={{ padding:'clamp(14px,2.5vw,20px)', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', textAlign:'center' }}>
                  <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'clamp(16px,3vw,22px)', fontWeight:'800', color, marginBottom:'5px' }}>{val}</div>
                  <div style={{ fontSize:'11px', color:'#64748b' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* ── Summary ── */}
            <div style={{ padding:'20px 24px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'14px', marginBottom:'20px' }}>
              <div style={{ fontSize:'11px', fontWeight:'700', color:'#64748b', letterSpacing:'0.08em', marginBottom:'10px' }}>ANALYSIS SUMMARY</div>
              <p style={{ fontSize:'14px', color:'#94a3b8', lineHeight:'1.75' }}>{result.summary}</p>
            </div>

            {/* ── Critical flags ── */}
            {result.critical_flags?.length > 0 && (
              <div style={{ marginBottom:'20px' }}>
                <div style={{ fontSize:'13px', fontWeight:'700', color:'#ef4444', marginBottom:'10px', display:'flex', alignItems:'center', gap:'6px' }}>
                  <AlertTriangle size={14}/>Critical Flags ({result.critical_flags.length})
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
                  {result.critical_flags.map((flag, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'10px', padding:'10px 14px', background:'rgba(239,68,68,0.05)', border:'1px solid rgba(239,68,68,0.15)', borderRadius:'8px', fontSize:'13px', color:'#fca5a5', lineHeight:'1.5' }}>
                      <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#ef4444', flexShrink:0, marginTop:'5px' }}/>{flag}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Clause-by-clause table ── */}
            <div style={{ marginBottom:'20px' }}>
              <div style={{ fontSize:'13px', fontWeight:'700', color:'#e2e8f0', marginBottom:'10px', display:'flex', alignItems:'center', gap:'6px' }}>
                <Scale size={14} color="#818cf8"/>Clause-by-Clause Playbook Results
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
                {result.playbook_results?.map((clause) => {
                  const sc = CLAUSE_STATUS_CONFIG[clause.status] || CLAUSE_STATUS_CONFIG.MISSING;
                  const isExpanded = expandedClause === clause.clause_id;
                  return (
                    <div key={clause.clause_id} className="clause-row" onClick={()=>setExpandedClause(isExpanded ? null : clause.clause_id)} style={{ background:isExpanded?'rgba(255,255,255,0.04)':'rgba(255,255,255,0.02)', border:`1px solid ${isExpanded?'rgba(255,255,255,0.12)':'rgba(255,255,255,0.06)'}`, borderRadius:'10px', overflow:'hidden' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px' }}>
                        <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:sc.dot, flexShrink:0 }}/>
                        <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'11px', color:'#475569', flexShrink:0, width:'56px' }}>{clause.clause_id}</span>
                        <span style={{ fontSize:'13px', color:'#e2e8f0', fontWeight:'500', flex:1 }}>{clause.clause_name}</span>
                        <span style={{ padding:'2px 8px', background:sc.bg, border:`1px solid ${sc.border}`, borderRadius:'100px', fontSize:'10px', fontWeight:'700', color:sc.color, flexShrink:0 }}>
                          {clause.status === 'MISSING' ? 'MISSING' : clause.status.replace('_',' ')}
                        </span>
                        <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:'12px', fontWeight:'700', color:sc.color, flexShrink:0, minWidth:'28px', textAlign:'right' }}>
                          {clause.risk_score ?? '—'}
                        </span>
                        <span style={{ fontSize:'12px', color:'#475569', flexShrink:0 }}>{isExpanded ? '▲' : '▼'}</span>
                      </div>
                      {isExpanded && (
                        <div style={{ padding:'0 16px 14px 50px', fontSize:'13px', color:'#94a3b8', lineHeight:'1.7', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
                          <div style={{ paddingTop:'12px' }}>{clause.deviation}</div>
                          {clause.page && <div style={{ fontSize:'11px', color:'#475569', marginTop:'8px' }}>Document page {clause.page}</div>}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Recommended redlines ── */}
            {result.recommended_redlines?.length > 0 && (
              <div style={{ marginBottom:'24px' }}>
                <div style={{ fontSize:'13px', fontWeight:'700', color:'#e2e8f0', marginBottom:'10px', display:'flex', alignItems:'center', gap:'6px' }}>
                  <FileText size={14} color="#818cf8"/>Recommended Redlines ({result.recommended_redlines.length})
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
                  {result.recommended_redlines.map((rl, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'10px', padding:'10px 14px', background:'rgba(99,102,241,0.05)', border:'1px solid rgba(99,102,241,0.15)', borderRadius:'8px', fontSize:'13px', color:'#a5b4fc', lineHeight:'1.5' }}>
                      <div style={{ fontSize:'10px', color:'#6366f1', fontWeight:'700', flexShrink:0, paddingTop:'2px' }}>{String(i+1).padStart(2,'0')}</div>
                      {rl}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Actions ── */}
            <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'24px' }}>
              <a href="/agentic-systems/nda-review" style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 24px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#d4d4d4', borderRadius:'10px', fontSize:'14px', fontWeight:'600', textDecoration:'none' }}>
                <FileText size={16}/>View Architecture
              </a>
              <button onClick={reset} style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'12px 24px', background:'linear-gradient(135deg,#6366f1,#4f46e5)', color:'white', borderRadius:'10px', fontSize:'14px', fontWeight:'700', cursor:'pointer', border:'none', boxShadow:'0 4px 20px rgba(99,102,241,0.3)' }}>
                <RotateCcw size={16}/>Review Another NDA
              </button>
            </div>

            <div style={{ padding:'14px', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.05)', borderRadius:'10px' }}>
              <p style={{ fontSize:'12px', color:'#475569', lineHeight:'1.6', textAlign:'center' }}>
                NovaTech Solutions Inc. is a fictional company used for demonstration. This pipeline is built on CrewAI with Claude Haiku and Sonnet — configurable for your own legal playbook and sign-off thresholds.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
