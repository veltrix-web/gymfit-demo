import React, { useState, useEffect, useRef } from 'react'
import { useInView, useBarInView } from '../components/useInView'

const CLASSES = [
  { tag: 'Strength', icon: 'ST', title: 'Gym Movement',        desc: 'Progressive overload training for real strength and muscle gains.' },
  { tag: 'Cardio',   icon: 'HC', title: 'Fitness Practice',    desc: 'Full-body conditioning circuits for endurance and fat loss.' },
  { tag: 'Combat',   icon: 'BC', title: 'Boxing & Combat',     desc: 'Striking fundamentals combined with elite-level cardio work.' },
  { tag: 'Yoga',     icon: 'YM', title: 'Yoga & Balance',      desc: 'Flexibility, breath, and mental clarity in one powerful class.' },
  { tag: 'HIIT',     icon: 'HI', title: 'HIIT Blaze',          desc: 'Interval-based sessions that torch fat and elevate metabolism.' },
  { tag: 'Perf',     icon: 'AP', title: 'Athletic Performance', desc: 'Speed, agility, and explosive power for serious competitors.' },
]

const STEPS = [
  { num: '01', title: 'Gym Movement',       desc: 'Many gyms offer tools and resources to track progress, such as fitness apps, workout logs, or integrated gym software.' },
  { num: '02', title: 'Fitness Practice',   desc: 'Gyms are adaptable to various fitness levels and preferences, catering to beginners and advanced individuals alike.' },
  { num: '03', title: 'Achievement',        desc: 'Group fitness classes led by instructors offer structured workouts in a motivating group environment.' },
]

const SKILLS = [
  { label: 'Commitment to Member Success', pct: 97 },
  { label: 'Professional Coaching & Training', pct: 84 },
  { label: 'Health and Wellness Focus', pct: 96 },
  { label: 'State-of-the-Art Facilities', pct: 83 },
]

const TESTIMONIALS = [
  { name: 'Ravi Kumar',  role: 'Member since 2022', txt: 'FitKit completely changed my life. Lost 18kg in 6 months with their personal training program. The coaches genuinely care about your progress.' },
  { name: 'Anita Singh', role: 'Pro Member',        txt: 'The HIIT classes are incredibly intense but so rewarding. I have never felt this fit in my life. The community here keeps me coming back every day.' },
  { name: 'Mohit Arora', role: 'Elite Member',      txt: 'World-class facilities, expert trainers, and a schedule that actually fits around my busy corporate life. Best investment I ever made.' },
]

/* BMI Calculator */
function BMICalc() {
  const [form, setForm] = useState({ weight: '', height: '', age: '', sex: 'Male', activity: 'Moderate' })
  const [result, setResult] = useState(null)
  const ch = e => setForm({ ...form, [e.target.name]: e.target.value })
  const calc = (e) => {
    e.preventDefault()
    const h = parseFloat(form.height) / 100
    if (!h || !form.weight) return
    const bmi = (parseFloat(form.weight) / (h * h)).toFixed(1)
    let cat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese'
    setResult({ bmi, cat })
  }
  return (
    <section className="bmi-section py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-8">
          <div className="stag justify-center"><div className="line" /><span>Body Mass Index</span><div className="line" /></div>
          <h2 className="font-black uppercase text-white" style={{ fontFamily: 'Barlow', fontSize: 'clamp(28px,4vw,46px)' }}>Calculate Your BMI Now</h2>
        </div>
        <form onSubmit={calc}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            <input name="weight" value={form.weight} onChange={ch} placeholder="Weight / KG" className="bmi-input" type="number" />
            <input name="height" value={form.height} onChange={ch} placeholder="Height / CM" className="bmi-input" type="number" />
            <input name="age"    value={form.age}    onChange={ch} placeholder="Age" className="bmi-input" type="number" />
            <select name="sex" value={form.sex} onChange={ch} className="bmi-input bmi-select" style={{ background: '#181818', cursor: 'pointer' }}>
              <option>Male</option><option>Female</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
            <select name="activity" value={form.activity} onChange={ch} className="bmi-input bmi-select" style={{ background: '#181818', cursor: 'pointer' }}>
              <option>Sedentary</option><option>Light</option><option>Moderate</option><option>Active</option><option>Very Active</option>
            </select>
            <div className="bmi-input" style={{ color: result ? '#E8001D' : '#444', fontFamily: 'Barlow', fontWeight: 700 }}>
              {result ? `BMI: ${result.bmi} — ${result.cat}` : 'This Means...'}
            </div>
            <button type="submit" className="btn-red justify-center text-center py-3">Calculate Now</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default function Home({ setPage }) {
  const heroRef = useRef(null)
  const r1 = useInView(), r2 = useInView(), r3 = useInView(), r4 = useInView(), r5 = useInView(), r6 = useInView()
  const barRef = useBarInView()

  useEffect(() => {
    const t = setTimeout(() => {
      heroRef.current?.querySelectorAll('.anim-init').forEach(el => { el.classList.add('animated'); el.classList.remove('anim-init') })
    }, 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>
      {/* ── HERO ── */}
      <section ref={heroRef} className="hero-bg relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Red slash accents */}
        <div style={{ position: 'absolute', left: '55%', top: 0, bottom: 0, width: 3, background: 'rgba(232,0,29,0.4)', transform: 'rotate(-8deg)', transformOrigin: 'top' }} />
        <div style={{ position: 'absolute', left: '58%', top: 0, bottom: 0, width: 80, background: 'linear-gradient(135deg, rgba(232,0,29,0.15), transparent)', transform: 'skewX(-12deg)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="anim-init d0 text-[10px] font-black tracking-[0.28em] uppercase mb-4" style={{ color: '#E8001D' }}>— Keep Your Body Fitness With Workouts</p>
            <h1 className="anim-init d100 font-black italic uppercase leading-none mb-5" style={{ fontFamily: 'Barlow', fontSize: 'clamp(48px, 8vw, 96px)', color: '#fff', lineHeight: 0.92 }}>
              YOUR FITNESS<br /><span style={{ color: '#E8001D' }}>YOUR VICTORY</span>
            </h1>
            <p className="anim-init d200 text-[13px] text-gray-500 leading-relaxed max-w-md mb-7">
              Gym workouts are structured exercise sessions conducted in a fitness facility equipped with various exercise machines, free weights, and amenities.
            </p>
            <div className="anim-init d300 flex flex-wrap items-center gap-5">
              <button onClick={() => setPage('schedule')} className="btn-red">View Class Schedule</button>
              <div className="flex items-center gap-2">
                <span className="font-black text-2xl" style={{ fontFamily: 'Barlow', color: '#E8001D' }}>2k+</span>
                <span className="text-[12px] text-gray-500 font-medium">Satisfied Customer</span>
              </div>
            </div>
          </div>

          {/* Right — hero image placeholder */}
          <div className="anim-init d300 relative flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-sm overflow-hidden" style={{ aspectRatio: '3/4', background: 'linear-gradient(160deg, #1a0000, #0a0a0a)', border: '1px solid rgba(232,0,29,0.2)' }}>
              {/* Diagonal red accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(135deg, transparent, rgba(232,0,29,0.08))', transform: 'skewX(-8deg)', transformOrigin: 'top right' }} />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <p className="font-black text-[90px] opacity-[0.07]" style={{ fontFamily: 'Barlow', color: '#E8001D' }}>FK</p>
                <p className="text-[10px] text-gray-800">Replace with hero athlete photo</p>
              </div>
              {/* Red top border accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#E8001D' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BMI CALCULATOR ── */}
      <BMICalc />

      {/* ── ABOUT US ── */}
      <section ref={r1} className="py-24" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="anim-init d0 relative">
            {/* Two overlapping image placeholders like the reference */}
            <div className="rounded-sm overflow-hidden" style={{ aspectRatio: '4/3', background: 'linear-gradient(145deg, #1a1a1a, #1a0000)', border: '1px solid rgba(232,0,29,0.15)' }}>
              <div className="w-full h-full flex items-center justify-center flex-col gap-2">
                <p className="font-black text-6xl opacity-10" style={{ fontFamily: 'Barlow', color: '#E8001D' }}>FK</p>
                <p className="text-[10px] text-gray-800">Gym interior photo</p>
              </div>
            </div>
            {/* Floating small image */}
            <div className="absolute -bottom-8 -right-4 w-2/5 rounded-sm overflow-hidden" style={{ aspectRatio: '3/4', background: 'linear-gradient(145deg, #200000, #111)', border: '2px solid #E8001D' }}>
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-[9px] text-gray-800">Trainer photo</p>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="anim-init d0 stag"><div className="line" /><span>About Us</span></div>
            <h2 className="anim-init d100 font-black uppercase leading-tight mb-4" style={{ fontFamily: 'Barlow', fontSize: 'clamp(28px,4vw,50px)', color: '#fff' }}>
              We Have Lot Of Experience<br /><span style={{ color: '#E8001D' }}>Gym Training</span>
            </h2>
            <p className="anim-init d200 text-[13px] text-gray-500 leading-relaxed mb-5">
              Many individuals benefit from personalized workout plans designed by fitness professionals or personal trainers to address specific fitness goals, such as muscle gain, weight loss, or improved athletic performance.
            </p>
            <ul className="anim-init d300 mb-6">
              {['Over 15 years of experience', 'Certified Trainers', 'Exceptional work quality'].map(f => (
                <li key={f} className="flex items-center gap-3 text-[13px] text-gray-400 mb-2">
                  <span style={{ color: '#E8001D', fontWeight: 900, fontSize: 16 }}>—</span>{f}
                </li>
              ))}
            </ul>
            <button onClick={() => setPage('about')} className="anim-init d400 btn-red">Get Started</button>
          </div>
        </div>
      </section>

      {/* ── WORK PROCESS ── */}
      <section ref={r2} className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="anim-init d0 stag justify-center"><div className="line" /><span>Work Process</span><div className="line" /></div>
            <h2 className="anim-init d100 font-black uppercase" style={{ fontFamily: 'Barlow', fontSize: 'clamp(28px,4vw,52px)', color: '#fff' }}>
              Easy Step To Achieve <span style={{ color: '#E8001D' }}>Your Goals.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.num} className={`anim-init d${i * 100} text-center`}>
                {/* Circle with number */}
                <div className="step-circle">
                  <span className="step-num">{step.num}</span>
                </div>
                {/* Image placeholder */}
                <div className="rounded-full w-28 h-28 mx-auto mb-4 overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a0000, #111)', border: '2px solid #E8001D' }}>
                  <p className="text-[9px] text-gray-800">Photo</p>
                </div>
                <h3 className="font-black text-[18px] uppercase text-white mb-2" style={{ fontFamily: 'Barlow' }}>{step.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GYM FITNESS CLASSES ── */}
      <section ref={r3} className="py-24" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="anim-init d0 stag"><div className="line" /><span>Gym &amp; Fitness Training</span></div>
              <h2 className="anim-init d100 font-black uppercase" style={{ fontFamily: 'Barlow', fontSize: 'clamp(28px,4vw,52px)', color: '#fff' }}>
                Our Gym <span style={{ color: '#E8001D' }}>Fitness Classes</span>
              </h2>
            </div>
            <button onClick={() => setPage('classes')} className="anim-init d200 btn-outline-red self-start">View All Class</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CLASSES.map((cls, i) => (
              <div key={cls.title} className={`anim-init d${(i % 3) * 100} class-card`} onClick={() => setPage('classes')}>
                <div className="bg" style={{ background: `linear-gradient(${130 + i * 25}deg, #1a0000, #0a0a0a)` }}>
                  <span className="font-black text-[60px] opacity-[0.07]" style={{ fontFamily: 'Barlow', color: '#E8001D' }}>{cls.icon}</span>
                </div>
                <div className="overlay">
                  <span className="class-tag">{cls.tag}</span>
                  <h3 className="font-black text-[16px] uppercase text-white mb-1" style={{ fontFamily: 'Barlow' }}>{cls.title}</h3>
                  <p className="text-[11px] text-gray-300 leading-relaxed">{cls.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE + PROGRESS ── */}
      <section ref={barRef} className="py-24" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="anim-init d0 stag"><div className="line" /><span>Our Value</span></div>
            <h2 className="anim-init d100 font-black uppercase leading-tight mb-4" style={{ fontFamily: 'Barlow', fontSize: 'clamp(26px,3.5vw,46px)', color: '#fff' }}>
              Invigorating Fitness Workout<br />For Body <span style={{ color: '#E8001D' }}>And Mind</span>
            </h2>
            <p className="anim-init d200 text-[12px] text-gray-600 leading-relaxed mb-7 max-w-md">
              We combine cutting-edge training methods with a supportive community environment to help you achieve results that last a lifetime.
            </p>
            <div className="anim-init d300">
              {SKILLS.map(({ label, pct }) => (
                <div key={label} className="mb-4">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[12px] text-gray-400">{label}</span>
                    <span className="text-[12px] font-bold" style={{ color: '#E8001D' }}>{pct}%</span>
                  </div>
                  <div className="bar-track"><div className="bar-fill" data-pct={pct} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="anim-init d200 rounded-sm overflow-hidden relative" style={{ aspectRatio: '4/5', background: 'linear-gradient(160deg, #1a0000, #0a0a0a)', border: '1px solid rgba(232,0,29,0.15)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#E8001D' }} />
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
              <p className="font-black text-[80px] opacity-[0.07]" style={{ fontFamily: 'Barlow', color: '#E8001D' }}>FK</p>
              <p className="text-[10px] text-gray-800">Replace with gym action photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section ref={r4} className="py-24" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="anim-init d0 stag justify-center"><div className="line" /><span>What Our Clients Say</span><div className="line" /></div>
            <h2 className="anim-init d100 font-black uppercase" style={{ fontFamily: 'Barlow', fontSize: 'clamp(28px,4vw,52px)', color: '#fff' }}>
              Real Results, <span style={{ color: '#E8001D' }}>Real Stories</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`anim-init d${i * 100} testi-card card-lift`} style={{ background: '#181818', border: '1px solid #242424', borderLeft: '3px solid #E8001D' }}>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#E8001D', fontSize: 14 }}>&#9733;</span>)}
                </div>
                <p className="text-[13px] text-gray-400 leading-relaxed mb-5 italic">"{t.txt}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm" style={{ background: '#E8001D', fontFamily: 'Barlow', color: '#fff' }}>{t.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <p className="font-bold text-[13px] text-white" style={{ fontFamily: 'Barlow' }}>{t.name}</p>
                    <p className="text-[11px]" style={{ color: '#E8001D' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
