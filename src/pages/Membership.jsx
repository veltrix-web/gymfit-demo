import React, { useState } from 'react'
import { useInView } from '../components/useInView'

const PLANS = [
  { name: 'Basic', price: 999, per: '/mo', color: '#181818', border: '#2a2a2a', hot: false,
    feats: ['Gym floor access', 'Basic equipment', 'Locker room', '1 group class/week', 'Fitness assessment'] },
  { name: 'Pro', price: 1999, per: '/mo', color: '#E8001D', border: '#E8001D', hot: true,
    feats: ['Everything in Basic', 'Unlimited group classes', 'Personal trainer 2x/week', 'Diet consultation', 'Progress tracking', 'Sauna & steam access'] },
  { name: 'Elite', price: 3499, per: '/mo', color: '#181818', border: '#2a2a2a', hot: false,
    feats: ['Everything in Pro', 'Daily personal training', 'Custom meal plans', 'Supplement guidance', 'Priority booking', 'Guest passes 2x/month'] },
]

export default function Membership() {
  const [step, setStep] = useState(1) // 1=plan, 2=form, 3=payment
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', dob: '', gender: 'Male', address: '', goal: '', medHistory: '' })
  const [payDone, setPayDone] = useState(false)
  const r1 = useInView()

  const ch = e => setForm({ ...form, [e.target.name]: e.target.value })

  const initRazorpay = () => {
    // NOTE: Replace key_id with your actual Razorpay key
    // This is a DEMO — in production, order_id comes from your backend
    const options = {
      key: 'rzp_test_YOUR_KEY_HERE',
      amount: (selected?.price || 999) * 100,
      currency: 'INR',
      name: 'FitKit Gym',
      description: `${selected?.name} Membership`,
      image: '',
      handler: function (response) { setPayDone(true); setStep(4) },
      prefill: { name: form.name, email: form.email, contact: form.phone },
      theme: { color: '#E8001D' },
      modal: { ondismiss: () => console.log('Payment dismissed') }
    }
    if (window.Razorpay) {
      const rzp = new window.Razorpay(options)
      rzp.open()
    } else {
      // Fallback for demo (Razorpay script not loaded)
      alert('Razorpay demo: In production, add <script src="https://checkout.razorpay.com/v1/checkout.js"> to index.html')
      setPayDone(true); setStep(4)
    }
  }

  return (
    <div>
      <section className="pt-28 pb-14" style={{ background: 'linear-gradient(135deg, #0a0a0a, #1a0000 50%, #0a0a0a)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="stag justify-center mb-3"><div className="line" /><span>Join FitKit</span><div className="line" /></div>
          <h1 className="font-black uppercase italic leading-none" style={{ fontFamily: 'Barlow', fontSize: 'clamp(40px,7vw,90px)', color: '#fff' }}>
            ONLINE <span style={{ color: '#E8001D' }}>MEMBERSHIP</span>
          </h1>
        </div>
      </section>

      {/* Steps indicator */}
      <div style={{ background: '#111', borderBottom: '1px solid #1a1a1a' }}>
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-center gap-4">
          {[['01','Choose Plan'],['02','Your Details'],['03','Payment'],['04','Confirmed']].map(([n, l], i) => (
            <React.Fragment key={n}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-[11px]"
                  style={{ background: step > i ? '#E8001D' : step === i + 1 ? '#E8001D' : '#2a2a2a', color: '#fff', fontFamily: 'Barlow' }}>{n}</div>
                <span className="text-[11px] font-medium hidden sm:block" style={{ color: step >= i + 1 ? '#fff' : '#444' }}>{l}</span>
              </div>
              {i < 3 && <div className="flex-1 h-px" style={{ background: step > i + 1 ? '#E8001D' : '#2a2a2a', maxWidth: 48 }} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <section ref={r1} className="py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-6">

          {/* Step 1: Plan selection */}
          {step === 1 && (
            <div>
              <h2 className="font-black uppercase text-white text-center mb-10" style={{ fontFamily: 'Barlow', fontSize: 36 }}>
                Find Your <span style={{ color: '#E8001D' }}>Perfect Plan</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {PLANS.map(plan => (
                  <div key={plan.name}
                    className="pricing-card cursor-pointer transition-all"
                    onClick={() => setSelected(plan)}
                    style={{
                      background: plan.hot ? '#E8001D' : '#181818',
                      border: `2px solid ${selected?.name === plan.name ? '#fff' : plan.hot ? '#E8001D' : '#2a2a2a'}`,
                      boxShadow: selected?.name === plan.name ? '0 0 0 2px #fff' : 'none',
                      position: 'relative'
                    }}
                  >
                    {plan.hot && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider" style={{ background: '#fff', color: '#E8001D' }}>Most Popular</div>}
                    <h3 className="font-black text-2xl uppercase mb-1" style={{ fontFamily: 'Barlow', color: plan.hot ? '#fff' : '#fff' }}>{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-sm" style={{ color: plan.hot ? 'rgba(255,255,255,0.7)' : '#666' }}>&#8377;</span>
                      <span className="font-black text-5xl" style={{ fontFamily: 'Barlow', color: '#fff' }}>{plan.price.toLocaleString('en-IN')}</span>
                      <span className="text-sm" style={{ color: plan.hot ? 'rgba(255,255,255,0.7)' : '#666' }}>{plan.per}</span>
                    </div>
                    <div className="h-px mb-4" style={{ background: plan.hot ? 'rgba(255,255,255,0.2)' : '#2a2a2a' }} />
                    <ul>
                      {plan.feats.map(f => (
                        <li key={f} className="feat-item">{f}</li>
                      ))}
                    </ul>
                    {selected?.name === plan.name && (
                      <div className="mt-4 text-center text-[11px] font-bold uppercase tracking-wider" style={{ color: plan.hot ? '#fff' : '#E8001D' }}>Selected &#10003;</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <button onClick={() => selected && setStep(2)} className="btn-red px-10 py-3.5"
                  style={{ opacity: selected ? 1 : 0.4, cursor: selected ? 'pointer' : 'not-allowed' }}>
                  Continue with {selected?.name || 'a Plan'} &rarr;
                </button>
                {!selected && <p className="text-[11px] text-gray-600 mt-2">Please select a plan to continue</p>}
              </div>
            </div>
          )}

          {/* Step 2: Member form */}
          {step === 2 && (
            <div className="max-w-2xl mx-auto">
              <h2 className="font-black uppercase text-white text-center mb-8" style={{ fontFamily: 'Barlow', fontSize: 32 }}>
                Your <span style={{ color: '#E8001D' }}>Details</span>
              </h2>
              <div className="p-8 rounded-sm" style={{ background: '#111', border: '1px solid #222' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Full Name *</label><input name="name" value={form.name} onChange={ch} required placeholder="Rahul Kumar" className="mem-input" /></div>
                  <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Email *</label><input name="email" type="email" value={form.email} onChange={ch} required placeholder="rahul@email.com" className="mem-input" /></div>
                  <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Phone *</label><input name="phone" value={form.phone} onChange={ch} required placeholder="+91 98765 43210" className="mem-input" /></div>
                  <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Date of Birth</label><input name="dob" type="date" value={form.dob} onChange={ch} className="mem-input" /></div>
                  <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Gender</label>
                    <select name="gender" value={form.gender} onChange={ch} className="mem-input" style={{ cursor: 'pointer' }}>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </div>
                  <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Fitness Goal</label>
                    <select name="goal" value={form.goal} onChange={ch} className="mem-input" style={{ cursor: 'pointer' }}>
                      <option value="">Select goal</option>
                      <option>Weight Loss</option><option>Muscle Gain</option><option>Endurance</option><option>Flexibility</option><option>General Fitness</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4"><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Address</label><input name="address" value={form.address} onChange={ch} placeholder="Your full address" className="mem-input" /></div>
                <div className="mb-6"><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Medical History / Injuries (optional)</label><textarea name="medHistory" value={form.medHistory} onChange={ch} rows={3} placeholder="Any injuries or medical conditions we should know..." className="mem-input resize-none" /></div>
                <div className="flex gap-3 justify-between">
                  <button onClick={() => setStep(1)} className="btn-outline-red">Back</button>
                  <button onClick={() => form.name && form.email && form.phone && setStep(3)} className="btn-red"
                    style={{ opacity: form.name && form.email && form.phone ? 1 : 0.4 }}>Proceed to Payment &rarr;</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="max-w-lg mx-auto text-center">
              <h2 className="font-black uppercase text-white mb-8" style={{ fontFamily: 'Barlow', fontSize: 32 }}>
                Complete <span style={{ color: '#E8001D' }}>Payment</span>
              </h2>
              <div className="p-8 rounded-sm mb-6" style={{ background: '#111', border: '1px solid #222' }}>
                <div className="mb-6 pb-6" style={{ borderBottom: '1px solid #222' }}>
                  <p className="text-[12px] text-gray-600 mb-1">Selected Plan</p>
                  <p className="font-black text-2xl text-white" style={{ fontFamily: 'Barlow' }}>{selected?.name} — &#8377;{selected?.price.toLocaleString('en-IN')}/mo</p>
                  <p className="text-[12px] text-gray-600 mt-1">{form.name} · {form.email}</p>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="rzp-badge">
                    <div className="rzp-dot" />
                    <span>Secured by Razorpay</span>
                  </div>
                </div>
                <button onClick={initRazorpay} className="btn-red w-full justify-center py-4 text-[13px]">
                  Pay &#8377;{selected?.price.toLocaleString('en-IN')} via Razorpay
                </button>
                <p className="text-[10px] text-gray-700 mt-3">UPI · Cards · Net Banking · Wallets accepted</p>
              </div>
              <button onClick={() => setStep(2)} className="btn-outline-red">Back</button>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="max-w-lg mx-auto text-center py-10">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#E8001D' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h2 className="font-black uppercase text-white mb-3" style={{ fontFamily: 'Barlow', fontSize: 36 }}>Welcome to FitKit!</h2>
              <p className="text-[13px] text-gray-500 mb-2">Your {selected?.name} membership is confirmed.</p>
              <p className="text-[13px] text-gray-500 mb-6">A confirmation email has been sent to <span style={{ color: '#E8001D' }}>{form.email}</span></p>
              <div className="p-5 rounded-sm mb-6 text-left" style={{ background: '#111', border: '1px solid #222' }}>
                <p className="text-[11px] text-gray-600 uppercase tracking-wider mb-3 font-bold">Next Steps</p>
                {['Visit the gym with your ID proof','Show this confirmation at reception','Pick up your membership card','Your first session starts today!'].map(s => (
                  <div key={s} className="flex items-center gap-3 mb-2">
                    <span style={{ color: '#E8001D', fontSize: 14 }}>&#10003;</span>
                    <span className="text-[12px] text-gray-400">{s}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => { setStep(1); setSelected(null) }} className="btn-outline-red">Back to Plans</button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
