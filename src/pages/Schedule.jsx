import React, { useState } from 'react'
import { useInView } from '../components/useInView'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const SCHEDULE = {
  Monday:    [{ time:'6:00 AM',  cls:'Strength Training',   trainer:'Vikram Singh',  dur:'60 min', spots:8,  status:'open' },{ time:'8:00 AM',  cls:'Yoga & Mindfulness', trainer:'Priya Mehta',  dur:'75 min', spots:12, status:'open' },{ time:'12:00 PM', cls:'HIIT Blaze',          trainer:'Arjun Das',    dur:'45 min', spots:0,  status:'full' },{ time:'6:00 PM',  cls:'Personal Training',   trainer:'Rohit Patel',  dur:'60 min', spots:4,  status:'open' },{ time:'8:00 PM',  cls:'Boxing & Combat',     trainer:'Neha Arora',   dur:'60 min', spots:6,  status:'open' }],
  Tuesday:   [{ time:'7:00 AM',  cls:'Yoga & Mindfulness', trainer:'Priya Mehta',  dur:'75 min', spots:10, status:'open' },{ time:'9:00 AM',  cls:'HIIT Blaze',          trainer:'Arjun Das',    dur:'45 min', spots:5,  status:'open' },{ time:'5:00 PM',  cls:'Strength Training',   trainer:'Vikram Singh',  dur:'60 min', spots:3,  status:'open' },{ time:'7:00 PM',  cls:'Athletic Performance', trainer:'Neha Arora',  dur:'60 min', spots:0,  status:'full' }],
  Wednesday: [{ time:'6:00 AM',  cls:'HIIT Blaze',          trainer:'Arjun Das',    dur:'45 min', spots:8,  status:'open' },{ time:'10:00 AM', cls:'Boxing & Combat',     trainer:'Rohit Patel',  dur:'60 min', spots:6,  status:'open' },{ time:'4:00 PM',  cls:'Yoga & Mindfulness', trainer:'Priya Mehta',  dur:'75 min', spots:10, status:'open' },{ time:'7:00 PM',  cls:'Strength Training',   trainer:'Vikram Singh',  dur:'60 min', spots:2,  status:'open' }],
  Thursday:  [{ time:'7:00 AM',  cls:'Athletic Performance', trainer:'Neha Arora',  dur:'60 min', spots:4,  status:'open' },{ time:'9:00 AM',  cls:'Strength Training',   trainer:'Vikram Singh',  dur:'60 min', spots:9,  status:'open' },{ time:'6:00 PM',  cls:'HIIT Blaze',          trainer:'Arjun Das',    dur:'45 min', spots:0,  status:'full' },{ time:'8:00 PM',  cls:'Yoga & Mindfulness', trainer:'Priya Mehta',  dur:'75 min', spots:7,  status:'open' }],
  Friday:    [{ time:'6:00 AM',  cls:'Boxing & Combat',     trainer:'Rohit Patel',  dur:'60 min', spots:5,  status:'open' },{ time:'8:00 AM',  cls:'Strength Training',   trainer:'Vikram Singh',  dur:'60 min', spots:11, status:'open' },{ time:'5:00 PM',  cls:'HIIT Blaze',          trainer:'Arjun Das',    dur:'45 min', spots:3,  status:'open' },{ time:'7:00 PM',  cls:'Athletic Performance', trainer:'Neha Arora',  dur:'60 min', spots:6,  status:'open' }],
  Saturday:  [{ time:'7:00 AM',  cls:'Yoga & Mindfulness', trainer:'Priya Mehta',  dur:'75 min', spots:15, status:'open' },{ time:'9:00 AM',  cls:'HIIT Blaze',          trainer:'Arjun Das',    dur:'45 min', spots:8,  status:'open' },{ time:'11:00 AM', cls:'Boxing & Combat',     trainer:'Rohit Patel',  dur:'60 min', spots:0,  status:'full' },{ time:'3:00 PM',  cls:'Strength Training',   trainer:'Vikram Singh',  dur:'60 min', spots:5,  status:'open' }],
  Sunday:    [{ time:'8:00 AM',  cls:'Yoga & Mindfulness', trainer:'Priya Mehta',  dur:'90 min', spots:20, status:'open' },{ time:'10:00 AM', cls:'HIIT Blaze',          trainer:'Arjun Das',    dur:'45 min', spots:10, status:'open' },{ time:'12:00 PM', cls:'Athletic Performance', trainer:'Neha Arora',  dur:'60 min', spots:4,  status:'open' }],
}

export default function Schedule({ setPage }) {
  const [day, setDay] = useState('Monday')
  const r1 = useInView()

  return (
    <div>
      <section className="pt-28 pb-14" style={{ background: 'linear-gradient(135deg, #0a0a0a, #1a0000 50%, #0a0a0a)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="stag justify-center mb-3"><div className="line" /><span>Training Classes</span><div className="line" /></div>
          <h1 className="font-black uppercase italic leading-none mb-3" style={{ fontFamily: 'Barlow', fontSize: 'clamp(40px,7vw,90px)', color: '#fff' }}>
            CLASS <span style={{ color: '#E8001D' }}>SCHEDULE</span>
          </h1>
          <p className="text-[13px] text-gray-500 max-w-lg mx-auto">Book your spot in any class. Limited seats available — reserve early to avoid disappointment.</p>
        </div>
      </section>

      <section ref={r1} className="py-16" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Day tabs */}
          <div className="anim-init d0 flex flex-wrap gap-2 mb-8">
            {DAYS.map(d => (
              <button key={d} onClick={() => setDay(d)}
                className="font-black text-[11px] uppercase tracking-wider px-5 py-2.5 transition-all duration-200"
                style={day === d
                  ? { background: '#E8001D', color: '#fff', clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 6px 100%)' }
                  : { background: '#1a1a1a', color: '#666', border: '1px solid #2a2a2a' }}
              >{d}</button>
            ))}
          </div>

          {/* Schedule table */}
          <div className="anim-init d100 overflow-x-auto rounded-sm" style={{ border: '1px solid #222' }}>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Class</th>
                  <th>Trainer</th>
                  <th>Duration</th>
                  <th>Spots Left</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE[day].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#111' : '#141414' }}>
                    <td className="font-bold text-white" style={{ fontFamily: 'Barlow' }}>{row.time}</td>
                    <td>
                      <span className="badge badge-red mr-2" style={{ fontSize: 9 }}>Class</span>
                      <span className="text-white font-medium">{row.cls}</span>
                    </td>
                    <td style={{ color: '#E8001D' }}>{row.trainer}</td>
                    <td>{row.dur}</td>
                    <td>
                      <span className={`badge ${row.status === 'full' ? 'badge-dark' : 'badge-red'}`}>
                        {row.status === 'full' ? 'Full' : `${row.spots} left`}
                      </span>
                    </td>
                    <td>
                      {row.status === 'full'
                        ? <span className="text-[11px] text-gray-600">Fully Booked</span>
                        : <button onClick={() => setPage('contact')} className="btn-red text-[10px] px-3 py-1.5">Book Now</button>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="anim-init d200 text-[11px] text-gray-700 mt-4 text-center">
            To book a class, contact us via the form or WhatsApp. Online booking coming soon.
          </p>
        </div>
      </section>
    </div>
  )
}
