import React, { useState } from 'react'
import { useInView } from '../components/useInView'

const POSTS = [
  { id:1, cat:'Nutrition',  title:'5 Pre-Workout Meals That Actually Fuel Your Training',     date:'Mar 15, 2025', read:'4 min', excerpt:'What you eat before training determines how much you get out of it. Here are five proven meals that maximize energy, focus, and performance during intense sessions.' },
  { id:2, cat:'Training',   title:'The Science Behind Progressive Overload: Why It Works',    date:'Mar 10, 2025', read:'6 min', excerpt:'Progressive overload is the single most important principle in strength training. Learn how to apply it correctly to continuously build muscle and strength.' },
  { id:3, cat:'Recovery',   title:'Achieving a Fit Body Fitness with Purpose',                date:'Mar 5, 2025',  read:'5 min', excerpt:'Recovery is where the magic happens. Sleep, hydration, mobility work — these overlooked elements are what separate consistent athletes from everyone else.' },
  { id:4, cat:'Mindset',    title:'The Role to Live with a Positive Mindset in Fitness',      date:'Feb 28, 2025', read:'3 min', excerpt:'Your mindset determines your consistency. Discover practical strategies to stay motivated even when progress feels slow or life gets in the way.' },
  { id:5, cat:'Training',   title:'HIIT vs Steady-State Cardio: What Burns More Fat?',        date:'Feb 22, 2025', read:'5 min', excerpt:'The debate is real. We break down the science and help you decide which cardio method best fits your goals, schedule, and fitness level.' },
  { id:6, cat:'Nutrition',  title:'Protein Timing: Does It Actually Matter?',                  date:'Feb 18, 2025', read:'4 min', excerpt:'You have heard about the anabolic window. But does protein timing actually matter for muscle growth? Here is what the latest research says.' },
]

const CATS = ['All', 'Training', 'Nutrition', 'Recovery', 'Mindset']

export default function Blog({ setPage }) {
  const [active, setActive] = useState('All')
  const r1 = useInView()
  const [open, setOpen] = useState(null)

  const filtered = active === 'All' ? POSTS : POSTS.filter(p => p.cat === active)

  if (open) {
    const post = POSTS.find(p => p.id === open)
    return (
      <div>
        <section className="pt-28 pb-10" style={{ background: 'linear-gradient(135deg,#0a0a0a,#1a0000 50%,#0a0a0a)' }}>
          <div className="max-w-3xl mx-auto px-6">
            <button onClick={() => setOpen(null)} className="btn-outline-red mb-8 text-[11px] px-4 py-2">&larr; Back to Blog</button>
            <span className="blog-cat">{post.cat}</span>
            <h1 className="font-black uppercase leading-tight text-white mb-4" style={{ fontFamily: 'Barlow', fontSize: 'clamp(28px,4vw,52px)' }}>{post.title}</h1>
            <div className="flex items-center gap-4 text-[11px] text-gray-600">
              <span>{post.date}</span><span>·</span><span>{post.read} read</span>
            </div>
          </div>
        </section>
        <section style={{ background: '#111111' }}>
          <div className="max-w-3xl mx-auto px-6 py-12">
            <div className="h-56 rounded-sm mb-8 flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#1a1a1a,#1a0000)', border:'1px solid rgba(232,0,29,0.15)' }}>
              <p className="text-[10px] text-gray-800">Featured image</p>
            </div>
            <p className="text-[14px] text-gray-400 leading-relaxed mb-5">{post.excerpt}</p>
            <p className="text-[14px] text-gray-400 leading-relaxed mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-[14px] text-gray-400 leading-relaxed mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2 className="font-black uppercase text-white mb-3" style={{ fontFamily:'Barlow', fontSize:24 }}>Key Takeaways</h2>
            <ul className="mb-6">
              {['Train with intent and track your progress weekly','Prioritize compound movements for maximum efficiency','Recovery is 50% of the equation — never skip it'].map(t => (
                <li key={t} className="flex items-center gap-3 text-[13px] text-gray-400 mb-2"><span style={{ color:'#E8001D', fontWeight:900 }}>—</span>{t}</li>
              ))}
            </ul>
            <button onClick={() => setPage('contact')} className="btn-red">Talk to a Trainer</button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="pt-28 pb-14" style={{ background: 'linear-gradient(135deg,#0a0a0a,#1a0000 50%,#0a0a0a)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="stag justify-center mb-3"><div className="line" /><span>Our Blog</span><div className="line" /></div>
          <h1 className="font-black uppercase italic leading-none" style={{ fontFamily:'Barlow', fontSize:'clamp(40px,7vw,90px)', color:'#fff' }}>
            LATEST <span style={{ color:'#E8001D' }}>NEWS & ARTICLES</span>
          </h1>
        </div>
      </section>
      <section ref={r1} className="py-16" style={{ background:'#111111' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="anim-init d0 flex flex-wrap gap-2 mb-10">
            {CATS.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className="font-black text-[11px] uppercase tracking-wider px-5 py-2 transition-all"
                style={active===c ? { background:'#E8001D', color:'#fff', clipPath:'polygon(0 0,calc(100% - 6px) 0,100% 100%,6px 100%)' } : { background:'#1a1a1a', color:'#666', border:'1px solid #2a2a2a' }}
              >{c}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post,i) => (
              <div key={post.id} className={`anim-init d${(i%3)*100} blog-card`} style={{ background:'#181818', border:'1px solid #242424' }}
                onClick={() => setOpen(post.id)}>
                <div className="blog-img" style={{ background:`linear-gradient(${130+i*25}deg,#1a0000,#111)` }}>
                  <span className="font-black text-5xl opacity-[0.08]" style={{ fontFamily:'Barlow', color:'#E8001D' }}>FK</span>
                </div>
                <div className="p-5">
                  <span className="blog-cat">{post.cat}</span>
                  <h3 className="font-black text-[16px] uppercase text-white mb-2 leading-tight" style={{ fontFamily:'Barlow' }}>{post.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-600">{post.date} · {post.read} read</span>
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color:'#E8001D' }}>Read More &rarr;</span>
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
