import React from 'react'
import { SocialIcon } from './FitIcons'

export default function Footer({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0, 0) }
  const socials = ['facebook', 'twitter', 'linkedin', 'youtube']
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '3px solid #E8001D' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="font-black text-[22px] uppercase tracking-wider mb-3" style={{ fontFamily: 'Barlow' }}>
              FIT<span style={{ color: '#E8001D' }}>KIT</span>
            </div>
            <p className="text-[12px] text-gray-600 leading-relaxed max-w-[220px] mb-5">Your fitness journey starts here. Expert coaches, modern equipment, proven results.</p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <button key={s} aria-label={s} className="w-8 h-8 rounded font-bold text-[10px] transition-all duration-200 flex items-center justify-center"
                  style={{ background: '#1a1a1a', color: '#555', border: '1px solid #2a2a2a' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#E8001D'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '1px solid #E8001D' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.color = '#555'; e.currentTarget.style.border = '1px solid #2a2a2a' }}
                >
                  <SocialIcon type={s} size={14} color="currentColor" />
                </button>
              ))}
            </div>
          </div>
          {[
            { title: 'Quick Links', items: [['Home','home'],['About','about'],['Classes','classes'],['Schedule','schedule'],['Trainers','trainers']] },
            { title: 'Programs', items: [['Personal Training','classes'],['HIIT & Cardio','classes'],['Yoga & Wellness','classes'],['Boxing','classes'],['Membership','membership']] },
            { title: 'Contact', items: [['47/GF-VX2, Chandigarh',null],['+91 98765 43210',null],['info@fitkit.in',null],['Mon–Sun 6AM–11PM',null]] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-[12px] font-black uppercase tracking-widest text-white mb-4" style={{ fontFamily: 'Barlow', borderBottom: '2px solid #E8001D', paddingBottom: 8, display: 'inline-block' }}>{col.title}</h4>
              <ul className="flex flex-col gap-2.5 mt-3">
                {col.items.map(([l, p]) => (
                  <li key={l}>{p
                    ? <button onClick={() => go(p)} className="text-[12px] text-gray-600 hover:text-white transition-colors text-left">{l}</button>
                    : <span className="text-[12px] text-gray-600">{l}</span>
                  }</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-2" style={{ borderTop: '1px solid #1a1a1a' }}>
          <p className="text-[11px] text-gray-700">Copyright &copy; 2025 FitKit. All rights reserved.</p>
          <p className="text-[11px] font-bold" style={{ color: 'rgba(232,0,29,0.5)' }}>Premium Package — ₹40,000–₹60,000</p>
        </div>
      </div>
    </footer>
  )
}
