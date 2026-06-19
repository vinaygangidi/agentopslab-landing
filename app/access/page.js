'use client';

import { useState } from 'react';
import { Zap, ArrowRight, Shield, DollarSign, AlertTriangle } from 'lucide-react';

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Demo Request - ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nInterested in: ${form.interest}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:vinay.gangidi@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
        .form-input { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 13px 16px; color: #fff; font-size: 15px; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .form-input:focus { border-color: rgba(99,102,241,0.5); }
        .form-input::placeholder { color: #475569; }
        .form-input option { background: #1e293b; }
        @media (max-width: 768px) {
          .access-layout { flex-direction: column !important; }
          .access-sidebar { display: none !important; }
        }
      `}</style>

      {/* Nav */}
      <nav className="vg-nav">
        <div className="vg-nav-inner">
          <a href="/" className="vg-logo">
            <div className="vg-logo-icon"><Zap size={17} color="#fff" /></div>
            <span className="vg-logo-text">Vinay Gangidi</span>
          </a>
          <div className="vg-nav-links hide-mobile" style={{ display: 'flex' }}>
            <a href="/solutions" className="vg-nav-link">AI Agents</a>
            <a href="/enterprise-ai-strategy" className="vg-nav-link">Strategy</a>
            <a href="/about" className="vg-nav-link">About Me</a>
          </div>
        </div>
      </nav>

      <div className="access-layout" style={{ display: 'flex', minHeight: 'calc(100vh - 68px)' }}>

        {/* Left - sidebar */}
        <div className="access-sidebar" style={{ width: '420px', flexShrink: 0, borderRight: '1px solid rgba(255,255,255,0.07)', padding: '56px 48px', background: 'linear-gradient(180deg,rgba(99,102,241,0.05) 0%,transparent 100%)' }}>
          <p style={{ fontSize: '12px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>What you'll see</p>
          <h2 style={{ fontSize: '26px', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '32px' }}>A live run on real documents. Results in 90 seconds.</h2>

          {[
            { icon: Shield, color: '#6366f1', name: 'NDA Review', desc: 'Upload any NDA PDF. Watch 5 agents review it against a legal playbook and produce a risk-scored memo.' },
            { icon: DollarSign, color: '#10b981', name: 'AP Invoice Processing', desc: 'Submit an invoice batch. See 5 agents extract, reconcile against PO data, and output a full exception report.' },
            { icon: AlertTriangle, color: '#f59e0b', name: 'Exception Resolution', desc: 'See 6 agents resolve the 20–30% of invoices that fail automated matching - including fraud detection.' },
          ].map(s => {
            const Icon = s.icon;
            return (
              <div key={s.name} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', marginBottom: '12px' }}>
                <div style={{ width: '36px', height: '36px', background: `${s.color}15`, border: `1px solid ${s.color}30`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} color={s.color} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#e2e8f0', marginBottom: '4px' }}>{s.name}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6' }}>{s.desc}</div>
                </div>
              </div>
            );
          })}

          <div style={{ marginTop: '32px', padding: '16px', background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: '12px' }}>
            <div style={{ fontSize: '12px', color: '#4ade80', fontWeight: '700', marginBottom: '6px' }}>What happens next</div>
            <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.6' }}>Submit your request → access link sent within 24 hours → no sales call, no credit card.</div>
          </div>
        </div>

        {/* Right - form */}
        <div style={{ flex: 1, padding: 'clamp(32px,6vw,64px) clamp(16px,5vw,56px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '480px' }}>

            {submitted ? (
              <div style={{ textAlign: 'center', paddingTop: '60px' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                <h2 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '12px' }}>Request sent!</h2>
                <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
                  Your email client should have opened with your request. We'll send your access link within 24 hours.
                </p>
                <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#818cf8', textDecoration: 'none', fontWeight: '600' }}>
                  ← Back to homepage
                </a>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '36px' }}>
                  <h1 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: '900', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '12px' }}>Request Demo Access</h1>
                  <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7' }}>Tell us a bit about yourself and what you'd like to see. Access link sent within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '160px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginBottom: '7px', letterSpacing: '0.04em' }}>FULL NAME *</label>
                      <input required className="form-input" placeholder="Jane Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                    </div>
                    <div style={{ flex: 1, minWidth: '160px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginBottom: '7px', letterSpacing: '0.04em' }}>COMPANY</label>
                      <input className="form-input" placeholder="Acme Corp" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginBottom: '7px', letterSpacing: '0.04em' }}>WORK EMAIL *</label>
                    <input required type="email" className="form-input" placeholder="jane@company.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginBottom: '7px', letterSpacing: '0.04em' }}>I'M INTERESTED IN *</label>
                    <select required className="form-input" value={form.interest} onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}>
                      <option value="" disabled>Select a solution...</option>
                      <option value="NDA Review">NDA Counterparty Review</option>
                      <option value="AP Invoice Processing">AP Invoice Processing</option>
                      <option value="AP Exception Resolution">AP Exception Resolution</option>
                      <option value="Multiple solutions">Multiple solutions</option>
                      <option value="Custom agent">Custom agent for my use case</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#94a3b8', marginBottom: '7px', letterSpacing: '0.04em' }}>ANYTHING ELSE? <span style={{ color: '#334155', fontWeight: '400' }}>(optional)</span></label>
                    <textarea className="form-input" rows={3} placeholder="Volume, timeline, specific use case, questions..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ resize: 'vertical' }} />
                  </div>

                  <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '15px 24px', background: 'linear-gradient(135deg,#6366f1,#4f46e5)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 8px 32px rgba(99,102,241,0.35)', marginTop: '8px' }}>
                    Send Request <ArrowRight size={16} />
                  </button>

                  <p style={{ fontSize: '12px', color: '#334155', textAlign: 'center' }}>No credit card. No sales call. Access link within 24 hours.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
