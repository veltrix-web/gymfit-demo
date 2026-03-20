import React, { useState } from 'react'
import { useInView } from '../components/useInView'

// ── ABOUT ────────────────────────────────────────────────────────────────────
export function About({ setPage }) {
  const r1 = useInView(), r2 = useInView()
  return (
    <div>
      <section className="pt-28 pb-14" style={{ background: 'linear-gradient(135deg,#0a0a0a,#1a0000 50%,#0a0a0a)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="stag justify-center mb-3"><div className="line" /><span>About FitKit</span><div className="line" /></div>
          <h1 className="font-black uppercase italic leading-none" style={{ fontFamily:'Barlow', fontSize:'clamp(40px,7vw,90px)', color:'#fff' }}>
            YOUR FITNESS <span style={{ color:'#E8001D' }}>YOUR VICTORY</span>
          </h1>
        </div>
      </section>
      <section ref={r1} className="py-24" style={{ background:'#111111' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="anim-init d0 rounded-sm overflow-hidden" style={{ aspectRatio:'4/3', background:'linear-gradient(145deg,#1a1a1a,#1a0000)', border:'1px solid rgba(232,0,29,0.15)' }}>
            <div className="w-full h-full flex items-center justify-center flex-col gap-2">
              <p className="font-black text-7xl opacity-[0.08]" style={{ fontFamily:'Barlow', color:'#E8001D' }}>FK</p>
              <p className="text-[10px] text-gray-800">Gym interior / founder photo</p>
            </div>
          </div>
          <div>
            <div className="anim-init d0 stag"><div className="line" /><span>Our Story</span></div>
            <h2 className="anim-init d100 font-black uppercase leading-tight mb-4" style={{ fontFamily:'Barlow', fontSize:'clamp(28px,4vw,50px)', color:'#fff' }}>
              Over 15 Years Of<br /><span style={{ color:'#E8001D' }}>Gym Excellence</span>
            </h2>
            <p className="anim-init d200 text-[13px] text-gray-500 leading-relaxed mb-4">Founded in 2010, FitKit has been the go-to fitness destination for thousands of members across Chandigarh. What started as a small training facility has grown into a premium gym complex with over 15,000 sq ft of state-of-the-art training space.</p>
            <p className="anim-init d300 text-[13px] text-gray-500 leading-relaxed mb-6">Our philosophy is simple: every member deserves the same level of coaching that elite athletes receive. That's why every trainer on our team is certified, experienced, and genuinely passionate about transforming lives.</p>
            <ul className="anim-init d400 mb-6">
              {['Over 15 years of experience','Certified Trainers','Exceptional work quality','2,000+ happy members'].map(f => (
                <li key={f} className="flex items-center gap-3 text-[13px] text-gray-400 mb-2">
                  <span style={{ color:'#E8001D', fontWeight:900, fontSize:16 }}>—</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => setPage('membership')} className="anim-init btn-red">Get Started</button>
          </div>
        </div>
      </section>
      <section ref={r2} className="py-20" style={{ background:'#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[['15+','Years Experience'],['2K+','Happy Members'],['42+','Expert Trainers'],['50+','Programs']].map(([v,l],i) => (
              <div key={l} className={`anim-init d${i*100}`}>
                <p className="font-black italic" style={{ fontFamily:'Barlow', fontSize:52, color:'#E8001D', lineHeight:1 }}>{v}</p>
                <p className="text-[12px] text-gray-600 mt-1 uppercase tracking-wider font-medium">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ── CLASSES ──────────────────────────────────────────────────────────────────
const ALL_CLASSES = [
  { id:1, cat:'Strength', icon:'ST', title:'Strength Training',       dur:'60 min', lvl:'All Levels',   desc:'Build real, functional strength from the ground up with compound lifts and progressive overload.' },
  { id:2, cat:'Cardio',   icon:'HC', title:'HIIT Blaze',              dur:'45 min', lvl:'Intermediate', desc:'Torch fat with interval-based circuits designed to push your cardio limits and boost metabolism.' },
  { id:3, cat:'Personal', icon:'PT', title:'Personal Training',       dur:'60 min', lvl:'All Levels',   desc:'One-on-one coaching fully tailored to your body, goals and lifestyle for maximum results.' },
  { id:4, cat:'Yoga',     icon:'YM', title:'Yoga & Mindfulness',      dur:'75 min', lvl:'Beginner',     desc:'Improve mobility, reduce stress and build a strong mind-body connection with guided sessions.' },
  { id:5, cat:'Combat',   icon:'BC', title:'Boxing & Combat',         dur:'60 min', lvl:'All Levels',   desc:'Real striking fundamentals delivering one of the most effective total-body workouts.' },
  { id:6, cat:'Perf',     icon:'AP', title:'Athletic Performance',    dur:'60 min', lvl:'Advanced',     desc:'Speed, agility, explosiveness — sport-specific programming for serious competitors.' },
  { id:7, cat:'Strength', icon:'SC', title:'Strength & Conditioning', dur:'60 min', lvl:'Intermediate', desc:'Blend powerlifting fundamentals with metabolic conditioning for a complete athletic build.' },
  { id:8, cat:'Cardio',   icon:'CY', title:'Cycling',                 dur:'45 min', lvl:'All Levels',   desc:'High-energy indoor cycling synchronized to music — low impact, maximum cardio burn.' },
  { id:9, cat:'Yoga',     icon:'MD', title:'Meditation & Recovery',   dur:'30 min', lvl:'Beginner',     desc:'Breathwork and guided meditation to keep your body ready and mind balanced.' },
]
const CATS_C = ['All','Strength','Cardio','Personal','Yoga','Combat','Perf']

export function Classes({ setPage }) {
  const [active, setActive] = useState('All')
  const r1 = useInView()
  const filtered = active === 'All' ? ALL_CLASSES : ALL_CLASSES.filter(c => c.cat === active)
  return (
    <div>
      <section className="pt-28 pb-14" style={{ background:'linear-gradient(135deg,#0a0a0a,#1a0000 50%,#0a0a0a)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="stag justify-center mb-3"><div className="line" /><span>Gym &amp; Fitness</span><div className="line" /></div>
          <h1 className="font-black uppercase italic leading-none mb-3" style={{ fontFamily:'Barlow', fontSize:'clamp(40px,7vw,90px)', color:'#fff' }}>
            OUR GYM <span style={{ color:'#E8001D' }}>FITNESS CLASSES</span>
          </h1>
          <p className="text-[13px] text-gray-500 max-w-lg mx-auto">Expert-led classes for every fitness level. Book your trial session today.</p>
        </div>
      </section>
      <section ref={r1} className="py-16" style={{ background:'#111111' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="anim-init d0 flex flex-wrap gap-2 mb-10">
            {CATS_C.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className="font-black text-[11px] uppercase tracking-wider px-5 py-2.5 transition-all"
                style={active===c ? { background:'#E8001D', color:'#fff', clipPath:'polygon(0 0,calc(100%-6px) 0,100% 100%,6px 100%)' } : { background:'#1a1a1a', color:'#666', border:'1px solid #2a2a2a' }}
              >{c}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((cls,i) => (
              <div key={cls.id} className="card-lift rounded-sm overflow-hidden" style={{ background:'#181818', border:'1px solid #242424' }}>
                <div className="h-36 flex items-center justify-center" style={{ background:`linear-gradient(${135+i*20}deg,#1a0000,#111)` }}>
                  <span className="font-black text-6xl opacity-[0.08]" style={{ fontFamily:'Barlow', color:'#E8001D' }}>{cls.icon}</span>
                </div>
                <div className="p-5">
                  <div className="flex justify-between mb-3">
                    <span className="badge badge-red">{cls.lvl}</span>
                    <span className="text-[11px] text-gray-600">{cls.dur}</span>
                  </div>
                  <h3 className="font-black text-[18px] uppercase text-white mb-2" style={{ fontFamily:'Barlow' }}>{cls.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed mb-4">{cls.desc}</p>
                  <button onClick={() => setPage('contact')} className="btn-outline-red w-full justify-center text-[11px]">Book a Trial</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ── TRAINERS ─────────────────────────────────────────────────────────────────
const TRAINERS = [
  { init:'VS', name:'Vikram Singh',  role:'Head Strength Coach',     exp:'14 Years', cert:'NSCA-CSCS',          spec:'Powerlifting, Periodization' },
  { init:'PM', name:'Priya Mehta',   role:'Yoga & Wellness',         exp:'9 Years',  cert:'RYT-500',            spec:'Hatha, Vinyasa, Meditation' },
  { init:'AD', name:'Arjun Das',     role:'HIIT & Cardio Specialist',exp:'11 Years', cert:'ACE-CPT',            spec:'Fat Loss, Metabolic Conditioning' },
  { init:'SK', name:'Sneha Kapoor',  role:'Nutrition Coach',         exp:'7 Years',  cert:'Precision Nutrition', spec:'Meal Planning, Body Recomposition' },
  { init:'RP', name:'Rohit Patel',   role:'Boxing & Combat',         exp:'8 Years',  cert:'AIBA Level 2',       spec:'Boxing, Muay Thai, Self-Defence' },
  { init:'NA', name:'Neha Arora',    role:'Athletic Performance',    exp:'6 Years',  cert:'NSCA-CSPS',          spec:'Speed, Agility, Sports Conditioning' },
]

export function Trainers({ setPage }) {
  const r1 = useInView()
  return (
    <div>
      <section className="pt-28 pb-14" style={{ background:'linear-gradient(135deg,#0a0a0a,#1a0000 50%,#0a0a0a)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="stag justify-center mb-3"><div className="line" /><span>Meet Our Team</span><div className="line" /></div>
          <h1 className="font-black uppercase italic leading-none" style={{ fontFamily:'Barlow', fontSize:'clamp(40px,7vw,90px)', color:'#fff' }}>
            MEET OUR <span style={{ color:'#E8001D' }}>SKILLED TRAINER</span>
          </h1>
        </div>
      </section>
      <section ref={r1} className="py-16" style={{ background:'#111111' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINERS.map((t,i) => (
            <div key={t.name} className={`anim-init d${(i%3)*100} trainer-card`} style={{ background:'#181818', border:'1px solid #242424' }}>
              <div className="photo h-56 relative" style={{ background:`linear-gradient(${140+i*20}deg,#1a0000,#0a0a0a)` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-black text-7xl opacity-[0.08]" style={{ fontFamily:'Barlow', color:'#E8001D' }}>{t.init}</span>
                </div>
                <span className="absolute top-3 right-3 badge badge-red text-[9px]">{t.cert}</span>
              </div>
              <div className="trainer-info">
                <div className="red-bar mb-2" />
                <h3 className="font-black text-[19px] uppercase text-white" style={{ fontFamily:'Barlow' }}>{t.name}</h3>
                <p className="text-[12px] font-medium mt-0.5" style={{ color:'#E8001D' }}>{t.role}</p>
                <p className="text-[11px] text-gray-600 mt-0.5">{t.exp} Experience · {t.spec}</p>
              </div>
              <div className="p-4 pt-0">
                <button onClick={() => setPage('contact')} className="btn-outline-red w-full justify-center text-[11px] mt-3">Book Session</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// ── CONTACT ──────────────────────────────────────────────────────────────────
export function Contact() {
  const r1 = useInView()
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)
  const ch = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    setSent(true); setTimeout(() => setSent(false), 4000)
    setForm({ name:'', email:'', phone:'', subject:'', message:'' })
  }
  return (
    <div>
      <section className="pt-28 pb-14" style={{ background:'linear-gradient(135deg,#0a0a0a,#1a0000 50%,#0a0a0a)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="stag justify-center mb-3"><div className="line" /><span>Gym Contact Info</span><div className="line" /></div>
          <h1 className="font-black uppercase italic leading-none" style={{ fontFamily:'Barlow', fontSize:'clamp(40px,7vw,90px)', color:'#fff' }}>
            GET IN <span style={{ color:'#E8001D' }}>TOUCH</span>
          </h1>
        </div>
      </section>
      <section ref={r1} className="py-16" style={{ background:'#111111' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div>
              <div className="anim-init d0 stag mb-3"><div className="line" /><span>Our Location</span></div>
              <h2 className="anim-init d100 font-black uppercase leading-tight mb-5" style={{ fontFamily:'Barlow', fontSize:'clamp(24px,3.5vw,42px)', color:'#fff' }}>
                FIND US &<br /><span style={{ color:'#E8001D' }}>REACH OUT</span>
              </h2>
            </div>
            {[['Address','47/GF-VX2, Unnamed Road, Chandigarh - 160000'],['Phone','+91 98765 43210'],['Email','info@fitkit.in'],['Hours','Mon–Sun: 6:00 AM – 11:00 PM']].map(([l,v]) => (
              <div key={l} className="anim-init d200 p-4 rounded-sm" style={{ background:'#181818', border:'1px solid #2a2a2a', borderLeft:'3px solid #E8001D' }}>
                <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color:'#E8001D' }}>{l}</p>
                <p className="text-[13px] text-gray-300">{v}</p>
              </div>
            ))}
            <div className="anim-init d300 map-ph">
              <p className="font-black text-3xl opacity-20" style={{ fontFamily:'Barlow', color:'#E8001D' }}>MAP</p>
              <p className="text-[11px] text-gray-700">Replace with Google Maps iframe</p>
            </div>
          </div>
          <div className="lg:col-span-3 anim-init d200 p-8 rounded-sm" style={{ background:'#181818', border:'1px solid #2a2a2a', borderTop:'3px solid #E8001D' }}>
            <h3 className="font-black text-3xl uppercase text-white mb-1" style={{ fontFamily:'Barlow' }}>Send Us a Message</h3>
            <p className="text-[12px] text-gray-600 mb-6">We'll get back to you within 24 hours.</p>
            {sent && <div className="mb-4 p-3 text-[12px] font-bold text-center" style={{ background:'rgba(232,0,29,0.1)', color:'#E8001D', border:'1px solid rgba(232,0,29,0.3)' }}>Message sent! We'll be in touch soon.</div>}
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Full Name *</label><input name="name" value={form.name} onChange={ch} required placeholder="Rahul Kumar" className="mem-input" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Email *</label><input name="email" type="email" value={form.email} onChange={ch} required placeholder="rahul@email.com" className="mem-input" /></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Phone</label><input name="phone" value={form.phone} onChange={ch} placeholder="+91 98765 43210" className="mem-input" /></div>
                <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Subject</label>
                  <select name="subject" value={form.subject} onChange={ch} className="mem-input" style={{ cursor:'pointer' }}>
                    <option value="">Select topic</option>
                    <option>Membership</option><option>Free Trial</option><option>Class Booking</option><option>Personal Training</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div><label className="text-[10px] font-bold uppercase tracking-wider text-gray-600 block mb-1.5">Message *</label><textarea name="message" value={form.message} onChange={ch} required rows={5} placeholder="Tell us about your fitness goals..." className="mem-input resize-none" /></div>
              <button type="submit" className="btn-red justify-center py-3.5">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
