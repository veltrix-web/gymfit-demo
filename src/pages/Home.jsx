import React, { useState, useEffect, useRef } from 'react'
import { useInView } from '../components/useInView'
import { FitnessIcon } from '../components/FitIcons'

/* ─── DATA ─────────────────────────────────────────── */
const CLASSES = [
  {
    tag: 'Strength',
    iconType: 'strength',
    title: 'Gym Movement',
    desc: 'Progressive overload training for real strength and muscle gains.',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  },
  {
    tag: 'Cardio',
    iconType: 'cardio',
    title: 'Fitness Practice',
    desc: 'Full-body conditioning circuits for endurance and fat loss.',
    img: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=1200&q=80',
  },
  {
    tag: 'Combat',
    iconType: 'combat',
    title: 'Boxing & Combat',
    desc: 'Striking fundamentals combined with elite-level cardio work.',
    img: 'https://images.unsplash.com/photo-1517438984742-1262db08379e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    tag: 'Yoga',
    iconType: 'yoga',
    title: 'Yoga & Balance',
    desc: 'Flexibility, breath, and mental clarity in one powerful class.',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    tag: 'HIIT',
    iconType: 'hiit',
    title: 'HIIT Blaze',
    desc: 'Interval-based sessions that torch fat and elevate metabolism.',
    img: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80',
  },
  {
    tag: 'Perf',
    iconType: 'performance',
    title: 'Athletic Performance',
    desc: 'Speed, agility, and explosive power for serious competitors.',
    img: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80',
  },
]

const STEPS = [
  { num: '01', title: 'Gym Movement',     desc: 'Many gyms offer tools and resources to track progress, such as fitness apps, workout logs, or integrated gym software.' },
  { num: '02', title: 'Fitness Practice', desc: 'Gyms are adaptable to various fitness levels and preferences, catering to beginners and advanced individuals alike.' },
  { num: '03', title: 'Achievement',      desc: 'Group fitness classes led by instructors offer structured workouts in a motivating group environment.' },
]

const ADVANTAGES = [
  { num: '01', title: 'EXPERT TRAINERS', desc: 'Certified professionals who design personalized plans tailored to your goals.' },
  { num: '02', title: 'MODERN EQUIPMENT', desc: 'State-of-the-art machines maintained and updated to support every training style.' },
  { num: '03', title: 'FLEXIBLE TIMING', desc: 'Open 6 AM to 11 PM, seven days a week, so you can train when it works for you.' },
  { num: '04', title: 'REAL COMMUNITY', desc: 'A welcoming member base that keeps you accountable, motivated, and consistent.' },
]

const TESTIMONIALS = [
  { name: 'Ravi Kumar',   role: 'Member since 2022', txt: 'FitKit completely changed my life. Lost 18kg in 6 months with their personal training program. The coaches genuinely care about your progress.' },
  { name: 'Anita Singh',  role: 'Pro Member',        txt: 'The HIIT classes are incredibly intense but so rewarding. I have never felt this fit in my life. The community here keeps me coming back every day.' },
  { name: 'Mohit Arora',  role: 'Elite Member',      txt: 'World-class facilities, expert trainers, and a schedule that actually fits around my busy corporate life. Best investment I ever made.' },
  { name: 'Priya Sharma', role: 'Pro Member',        txt: 'The yoga and recovery classes have completely transformed my flexibility and mental well-being. FitKit is more than a gym — it\'s a lifestyle.' },
  { name: 'Arjun Nair',   role: 'Member since 2023', txt: 'Joined for weight loss, stayed for the community. Lost 12kg and gained confidence I never had. The trainers treat you like family here.' },
]

const STATS = [
  { val: '15+', label: 'Years Active' },
  { val: '2K+', label: 'Members' },
  { val: '42+', label: 'Trainers' },
  { val: '50+', label: 'Programs' },
]

const HERO_ATHLETE_IMG = 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80'
const ABOUT_GYM_IMG = 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80'
const ABOUT_TRAINER_IMG = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80'
const ADVANTAGE_BANNER_IMG = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80'
const STEP_IMAGES = [
  'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
]

/* ─── BMI CALCULATOR ───────────────────────────────── */
function BMICalc() {
  const [form, setForm] = useState({ weight: '', height: '', age: '', sex: 'Male', activity: 'Moderate' })
  const [result, setResult] = useState(null)
  const ch = e => setForm({ ...form, [e.target.name]: e.target.value })
  const calc = (e) => {
    e.preventDefault()
    const h = parseFloat(form.height) / 100
    if (!h || !form.weight) return
    const bmi = (parseFloat(form.weight) / (h * h)).toFixed(1)
    const cat = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese'
    const color = bmi < 18.5 ? '#3b82f6' : bmi < 25 ? '#22c55e' : bmi < 30 ? '#f59e0b' : '#E8001D'
    setResult({ bmi, cat, color })
  }
  return (
    <section className="bmi-section py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-8">
          <div className="stag justify-center"><div className="line" /><span>Body Mass Index</span><div className="line" /></div>
          <h2 className="font-black uppercase text-white" style={{ fontFamily: 'Barlow', fontSize: 'clamp(28px,4vw,46px)' }}>
            Calculate Your <span style={{ color: '#E8001D' }}>BMI Now</span>
          </h2>
        </div>
        <form onSubmit={calc}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            <input name="weight" value={form.weight} onChange={ch} placeholder="Weight / KG" className="bmi-input" type="number" />
            <input name="height" value={form.height} onChange={ch} placeholder="Height / CM" className="bmi-input" type="number" />
            <input name="age"    value={form.age}    onChange={ch} placeholder="Age"          className="bmi-input" type="number" />
            <select name="sex" value={form.sex} onChange={ch} className="bmi-input bmi-select" style={{ background: '#181818', cursor: 'pointer' }}>
              <option>Male</option><option>Female</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
            <select name="activity" value={form.activity} onChange={ch} className="bmi-input bmi-select" style={{ background: '#181818', cursor: 'pointer' }}>
              <option>Sedentary</option><option>Light</option><option>Moderate</option><option>Active</option><option>Very Active</option>
            </select>
            <div className="bmi-input flex items-center gap-2" style={{ fontFamily: 'Barlow', fontWeight: 700 }}>
              {result
                ? <><span style={{ color: result.color, fontSize: 18 }}>{result.bmi}</span><span style={{ color: result.color, fontSize: 12 }}>— {result.cat}</span></>
                : <span style={{ color: '#444' }}>This Means...</span>
              }
            </div>
            <button type="submit" className="btn-red justify-center text-center py-3">Calculate Now</button>
          </div>
        </form>
      </div>
    </section>
  )
}

/* ─── TESTIMONIAL CAROUSEL ─────────────────────────── */
function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const autoRef = useRef(null)
  const total = TESTIMONIALS.length

  const goTo = (idx) => setCurrent((idx + total) % total)

  const resetAuto = () => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 4500)
  }

  useEffect(() => {
    autoRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 4500)
    return () => clearInterval(autoRef.current)
  }, [])

  const onDragStart = (clientX) => { setDragging(true); setStartX(clientX); setDragOffset(0) }
  const onDragMove  = (clientX) => { if (!dragging) return; setDragOffset(clientX - startX) }
  const onDragEnd   = () => {
    if (!dragging) return
    setDragging(false)
    if (dragOffset < -50)       { goTo(current + 1); resetAuto() }
    else if (dragOffset > 50)   { goTo(current - 1); resetAuto() }
    setDragOffset(0)
  }

  const prev = (current - 1 + total) % total
  const next = (current + 1) % total

  return (
    <section className="py-24 overflow-hidden" style={{ background: '#111111' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="stag"><div className="line" /><span>What Our Clients Say</span></div>
            <h2 className="font-black uppercase" style={{ fontFamily: 'Barlow', fontSize: 'clamp(28px,4vw,54px)', color: '#fff', lineHeight: 0.95 }}>
              Real Results,<br /><span style={{ color: '#E8001D' }}>Real Stories</span>
            </h2>
          </div>
          {/* Desktop arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => { goTo(current - 1); resetAuto() }}
              className="flex items-center justify-center transition-all duration-200"
              style={{ width: 44, height: 44, borderRadius: 2, background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', cursor: 'pointer', fontSize: 20 }}
              onMouseEnter={e => { e.currentTarget.style.background = '#E8001D'; e.currentTarget.style.borderColor = '#E8001D' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.borderColor = '#2a2a2a' }}
            >&#8592;</button>
            <button
              onClick={() => { goTo(current + 1); resetAuto() }}
              className="flex items-center justify-center transition-all duration-200"
              style={{ width: 44, height: 44, borderRadius: 2, background: '#E8001D', border: '1px solid #E8001D', color: '#fff', cursor: 'pointer', fontSize: 20 }}
              onMouseEnter={e => e.currentTarget.style.background = '#ff0020'}
              onMouseLeave={e => e.currentTarget.style.background = '#E8001D'}
            >&#8594;</button>
          </div>
        </div>

        {/* ── DESKTOP: 3-card layout ── */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {[prev, current, next].map((idx, position) => {
            const t = TESTIMONIALS[idx]
            const isCenter = position === 1
            return (
              <div
                key={`${idx}-${position}`}
                onClick={() => { if (!isCenter) { goTo(idx); resetAuto() } }}
                style={{
                  padding: '26px 22px',
                  borderRadius: 4,
                  background: isCenter ? '#E8001D' : '#181818',
                  border: isCenter ? '1px solid #E8001D' : '1px solid #242424',
                  borderLeft: isCenter ? '1px solid #E8001D' : '3px solid #E8001D',
                  transform: isCenter ? 'scale(1.04)' : 'scale(0.96)',
                  opacity: isCenter ? 1 : 0.6,
                  transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
                  cursor: isCenter ? 'default' : 'pointer',
                }}
              >
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ fontSize: 14, color: isCenter ? '#fff' : '#E8001D' }}>&#9733;</span>)}
                </div>
                <p style={{ fontSize: 13, color: isCenter ? 'rgba(255,255,255,0.9)' : '#777', lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>"{t.txt}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: isCenter ? 'rgba(255,255,255,0.25)' : '#E8001D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Barlow', fontWeight: 900, fontSize: 14, color: '#fff', flexShrink: 0 }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Barlow', fontWeight: 700, fontSize: 14, color: '#fff', lineHeight: 1 }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: isCenter ? 'rgba(255,255,255,0.7)' : '#E8001D', marginTop: 2 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── MOBILE: swipe carousel ── */}
        <div
          className="md:hidden select-none"
          style={{ touchAction: 'pan-y' }}
          onMouseDown={e  => onDragStart(e.clientX)}
          onMouseMove={e  => onDragMove(e.clientX)}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={e => onDragStart(e.touches[0].clientX)}
          onTouchMove={e  => onDragMove(e.touches[0].clientX)}
          onTouchEnd={onDragEnd}
        >
          <div style={{
            display: 'flex',
            transform: `translateX(calc(-${current * 100}% + ${dragging ? dragOffset : 0}px))`,
            transition: dragging ? 'none' : 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
            willChange: 'transform',
          }}>
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} style={{
                minWidth: '100%',
                padding: '24px 20px',
                background: '#181818',
                border: '1px solid #242424',
                borderLeft: '3px solid #E8001D',
                borderRadius: 4,
              }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#E8001D', fontSize: 16 }}>&#9733;</span>)}
                </div>
                <p style={{ fontSize: 14, color: '#aaa', lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>"{t.txt}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#E8001D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Barlow', fontWeight: 900, fontSize: 15, color: '#fff', flexShrink: 0 }}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Barlow', fontWeight: 700, fontSize: 15, color: '#fff' }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: '#E8001D', marginTop: 2 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
            {TESTIMONIALS.map((_, idx) => (
              <button key={idx} onClick={() => { goTo(idx); resetAuto() }} style={{
                width: idx === current ? 24 : 8, height: 8, borderRadius: 4,
                background: idx === current ? '#E8001D' : '#333',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 0.3s ease',
              }} />
            ))}
          </div>
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button key={idx} onClick={() => { goTo(idx); resetAuto() }} style={{
              width: idx === current ? 28 : 8, height: 8, borderRadius: 4,
              background: idx === current ? '#E8001D' : '#333',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.3s ease',
            }} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── MAIN HOME ─────────────────────────────────────── */
export default function Home({ setPage }) {
  const heroRef  = useRef(null)
  const r1       = useInView()
  const r2       = useInView()
  const r3       = useInView()
  const r4       = useInView()

  useEffect(() => {
    const t = setTimeout(() => {
      heroRef.current?.querySelectorAll('.anim-init').forEach(el => {
        el.classList.add('animated'); el.classList.remove('anim-init')
      })
    }, 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>

      {/* ═══════════ CINEMATIC HERO ═══════════════════ */}
      <section
        ref={heroRef}
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}
      >
        {/* Red radial glow */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(232,0,29,0.11) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Grid texture */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Left accent bar */}
        <div style={{ position: 'absolute', left: 0, top: '15%', bottom: '15%', width: 4, background: 'linear-gradient(to bottom, transparent, #E8001D 30%, #E8001D 70%, transparent)', borderRadius: 2 }} />

        {/* Right diagonal slashes */}
        {[0, 1, 2].map(i => (
          <div key={i} style={{ position: 'absolute', left: `${52 + i * 4}%`, top: 0, bottom: 0, width: i === 0 ? 3 : 1, background: i === 0 ? 'rgba(232,0,29,0.45)' : 'rgba(232,0,29,0.12)', transform: 'rotate(-8deg)', transformOrigin: 'top', pointerEvents: 'none' }} />
        ))}

        {/* Wide skew accent */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '46%', background: 'linear-gradient(145deg, transparent 0%, rgba(232,0,29,0.04) 40%, rgba(232,0,29,0.09) 100%)', transform: 'skewX(-6deg)', transformOrigin: 'top right', pointerEvents: 'none' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>
              {/* Eyebrow */}
              <div className="anim-init d0 flex items-center gap-3 mb-6">
                <div style={{ width: 32, height: 2, background: '#E8001D' }} />
                <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#E8001D' }}>
                  Keep Your Body Fitness With Workouts
                </span>
              </div>

              <h1 className="anim-init d100 font-black italic uppercase mb-7" style={{ fontFamily: 'Barlow', fontSize: 'clamp(40px,8vw,72px)', lineHeight: 1.02, letterSpacing: '-0.01em', textShadow: '0 2px 18px rgba(0,0,0,0.38)' }}>
                <span style={{ color: '#fff', display: 'block' }}>YOUR FITNESS</span>
                <span style={{ color: '#d7d7d7', display: 'block' }}>YOUR STRENGTH</span>
                <span style={{ color: '#E8001D', display: 'block' }}>YOUR VICTORY</span>
              </h1>

              <p className="anim-init d200 mb-8" style={{ fontSize: 14, color: '#777', lineHeight: 1.75, maxWidth: 440 }}>
                Gym workouts are structured exercise sessions conducted in a fitness facility equipped with various exercise machines, free weights, and amenities.
              </p>

              {/* CTA buttons */}
              <div className="anim-init d300 flex flex-wrap gap-3 mb-10">
                <button onClick={() => setPage('schedule')} className="btn-red">View Class Schedule</button>
                <button onClick={() => setPage('membership')} className="btn-outline-red">Join Now</button>
              </div>

              {/* Stat pills */}
              <div className="anim-init d400 flex flex-wrap gap-3">
                {STATS.map(({ val, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(232,0,29,0.08)', border: '1px solid rgba(232,0,29,0.2)', borderRadius: 2, padding: '8px 14px' }}>
                    <span style={{ fontFamily: 'Barlow', fontWeight: 900, fontStyle: 'italic', fontSize: 20, color: '#E8001D' }}>{val}</span>
                    <span style={{ fontSize: 10, color: '#555', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image frame + floating cards */}
            <div className="anim-init d300 relative flex justify-center" style={{ paddingRight: 20 }}>
              {/* Main image */}
              <div style={{ position: 'relative', width: '100%', maxWidth: 420, aspectRatio: '3/4', borderRadius: 4, overflow: 'hidden', background: '#0a0a0a', border: '1px solid rgba(232,0,29,0.2)' }}>
                <img src={HERO_ATHLETE_IMG} alt="Athlete training with dumbbells" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.5), rgba(10,10,10,0.15) 45%, rgba(10,10,10,0.45))' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#E8001D', zIndex: 2 }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60%', height: 3, background: '#E8001D', zIndex: 2 }} />
                <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'linear-gradient(145deg, transparent, rgba(232,0,29,0.1))', transform: 'skewX(-8deg)', transformOrigin: 'top right' }} />
                {/* Corner brackets */}
                <div style={{ position: 'absolute', top: 12, left: 12, width: 22, height: 22, borderTop: '2px solid rgba(232,0,29,0.6)', borderLeft: '2px solid rgba(232,0,29,0.6)' }} />
                <div style={{ position: 'absolute', bottom: 12, right: 12, width: 22, height: 22, borderBottom: '2px solid rgba(232,0,29,0.6)', borderRight: '2px solid rgba(232,0,29,0.6)' }} />
              </div>

              {/* Floating card — Satisfied */}
              <div style={{ position: 'absolute', bottom: 90, left: -10, background: 'rgba(12,12,12,0.97)', border: '1px solid rgba(232,0,29,0.35)', borderRadius: 4, padding: '12px 16px', backdropFilter: 'blur(16px)', minWidth: 140, animation: 'floatY 3s ease-in-out infinite' }}>
                <p style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 2 }}>Satisfied Clients</p>
                <p style={{ fontFamily: 'Barlow', fontWeight: 900, fontSize: 32, color: '#E8001D', lineHeight: 1 }}>2K+</p>
                <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#E8001D', fontSize: 10 }}>&#9733;</span>)}
                </div>
              </div>

              {/* Floating card — Next Class */}
              <div style={{ position: 'absolute', top: 40, right: 0, background: 'rgba(12,12,12,0.97)', border: '1px solid rgba(232,0,29,0.35)', borderRadius: 4, padding: '12px 16px', backdropFilter: 'blur(16px)', minWidth: 155, animation: 'floatY 4s ease-in-out infinite reverse' }}>
                <p style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 2 }}>Next Session</p>
                <p style={{ fontFamily: 'Barlow', fontWeight: 900, fontSize: 18, color: '#fff', lineHeight: 1.2 }}>HIIT BLAZE</p>
                <p style={{ fontSize: 11, color: '#E8001D', marginTop: 3, fontWeight: 600 }}>Starts in 2h 30m</p>
              </div>

              {/* Floating card — Members */}
              <div style={{ position: 'absolute', bottom: 30, right: 0, background: '#E8001D', borderRadius: 4, padding: '10px 14px', minWidth: 130, animation: 'floatY 3.5s ease-in-out infinite 0.5s' }}>
                <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 2 }}>Active Members</p>
                <p style={{ fontFamily: 'Barlow', fontWeight: 900, fontSize: 26, color: '#fff', lineHeight: 1 }}>2,148</p>
                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>+124 this month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to top, #0a0a0a, transparent)', pointerEvents: 'none' }} />

        <style>{`
          @keyframes floatY {
            0%,100% { transform: translateY(0px); }
            50%      { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* ── BMI ── */}
      <BMICalc />

      {/* ── ABOUT ── */}
      <section ref={r1} className="py-24" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="anim-init d0 relative" style={{ paddingBottom: 40 }}>
            <div className="rounded-sm overflow-hidden relative" style={{ aspectRatio: '4/3', border: '1px solid rgba(232,0,29,0.15)' }}>
              <img src={ABOUT_GYM_IMG} alt="Premium gym interior" className="w-full h-full object-cover" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.45), rgba(10,10,10,0.12))' }} />
            </div>
            <div className="absolute bottom-6 -right-4 w-2/5 rounded-sm overflow-hidden relative" style={{ aspectRatio: '3/4', border: '2px solid #E8001D', boxShadow: '0 18px 35px rgba(0,0,0,0.5)' }}>
              <img src={ABOUT_TRAINER_IMG} alt="Personal trainer coaching member" className="w-full h-full object-cover" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.35), transparent)' }} />
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
                <div className="step-circle"><span className="step-num">{step.num}</span></div>
                <div className="rounded-full w-28 h-28 mx-auto mb-4 overflow-hidden relative" style={{ border: '2px solid #E8001D' }}>
                  <img src={STEP_IMAGES[i]} alt={`${step.title} visual`} className="w-full h-full object-cover" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.35), transparent)' }} />
                </div>
                <h3 className="font-black text-[18px] uppercase text-white mb-2" style={{ fontFamily: 'Barlow' }}>{step.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASSES ── */}
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
                <div className="bg relative">
                  <img src={cls.img} alt={cls.title} className="w-full h-full object-cover" />
                  <div className="class-media-overlay" />
                  <span className="class-icon-chip">
                    <FitnessIcon type={cls.iconType} size={18} color="#fff" />
                  </span>
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

      {/* ── WHY JOIN US ── */}
      <section ref={r4} className="py-24" style={{ background: '#050505' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="anim-init d0 stag justify-center"><div className="line" /><span>Our Advantages</span><div className="line" /></div>
            <h2 className="anim-init d100 adv-title font-black italic uppercase leading-none" style={{ fontFamily: 'Barlow', fontSize: 'clamp(40px,7vw,92px)', color: '#f2f2f2' }}>
              WHY JOIN <span style={{ color: '#E8001D' }}>US?</span>
            </h2>
            <p className="anim-init d200 text-[15px] leading-relaxed text-gray-500 max-w-3xl mx-auto mt-4">
              Our diverse membership base creates a friendly and supportive atmosphere where you make friends and stay motivated every day.
            </p>
          </div>

          <div className="anim-init d200 adv-banner rounded-[26px] overflow-hidden relative mb-8" style={{ height: 'clamp(230px,34vw,420px)', border: '1px solid rgba(232,0,29,0.38)', background: '#100a0a' }}>
            <img src={ADVANTAGE_BANNER_IMG} alt="Premium gym action banner" className="w-full h-full object-cover" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.68), rgba(20,5,5,0.35) 40%, rgba(20,5,5,0.45))' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {ADVANTAGES.map((item, i) => (
              <div
                key={item.num}
                className={`anim-init d${(i % 4) * 100} adv-card rounded-[20px] p-8`}
                style={{ background: '#08090b', border: '1px solid #1a1d22', minHeight: 300 }}
              >
                <p className="adv-num italic" style={{ fontFamily: 'Barlow', color: 'rgba(232,0,29,0.45)', fontWeight: 700, fontSize: 62, lineHeight: 1 }}>{item.num}</p>
                <h3 className="font-black text-white leading-tight mt-3 mb-3 uppercase" style={{ fontFamily: 'Barlow', fontSize: 'clamp(28px,1.9vw,38px)' }}>{item.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="anim-init d400 flex justify-center mt-8">
            <div className="adv-arrow" style={{ width: 74, height: 74, borderRadius: 999, background: '#1a1a1a', border: '1px solid #3a3a3a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d9d9d9', fontSize: 38, lineHeight: 1 }}>↓</div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS CAROUSEL ── */}
      <TestimonialCarousel />

    </div>
  )
}
