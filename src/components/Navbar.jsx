import React, { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'classes' },
  { label: 'Schedule', id: 'schedule' },
  { label: 'Trainers', id: 'trainers' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => { setPage(id); setOpen(false); window.scrollTo(0, 0) }

  return (
    <>
      {/* Topbar */}
      <div className="topbar hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>+91 98765 43210</span>
            <span>info@fitkit.in</span>
            <span>47/GF-VX2, Unnamed Road, Chandigarh</span>
          </div>
          <div className="flex items-center gap-4">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(s => (
              <a key={s} href="#" className="text-[11px] text-gray-600 hover:text-red-500 transition-colors" style={{ color: '#666' }}
                onMouseEnter={e => e.target.style.color = '#E8001D'}
                onMouseLeave={e => e.target.style.color = '#666'}
              >{s}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-50 transition-all duration-300"
        style={{ background: scrolled ? 'rgba(10,10,10,0.97)' : '#111111', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => go('home')} className="font-black text-[22px] uppercase tracking-wider" style={{ fontFamily: 'Barlow', letterSpacing: '0.04em' }}>
            FIT<span style={{ color: '#E8001D' }}>KIT</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map(({ label, id }) => (
              <button key={id} onClick={() => go(id)}
                className={`nav-link ${page === id ? 'active' : ''}`}
              >{label}</button>
            ))}
          </nav>

          {/* Right icons + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => go('membership')} className="btn-red text-[11px] px-4 py-2">Join Now</button>
          </div>

          {/* Hamburger */}
          <button className="lg:hidden flex flex-col gap-[5px] justify-center w-8 h-8" onClick={() => setOpen(!open)}>
            <span className="h-[2px] bg-white rounded block transition-all" style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span className="h-[2px] bg-white rounded block w-[70%] transition-all" style={{ opacity: open ? 0 : 1 }} />
            <span className="h-[2px] bg-white rounded block transition-all" style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: open ? '420px' : '0', background: '#111', borderTop: open ? '1px solid #222' : 'none' }}>
          <div className="flex flex-col px-6 py-5 gap-4">
            {LINKS.map(({ label, id }) => (
              <button key={id} onClick={() => go(id)} className="text-left text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors">{label}</button>
            ))}
            <button onClick={() => go('membership')} className="btn-red text-center justify-center mt-2">Join Now</button>
          </div>
        </div>
      </header>
    </>
  )
}
