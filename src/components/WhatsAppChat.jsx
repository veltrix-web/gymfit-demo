import React, { useState } from 'react'

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')

  const send = () => {
    const text = encodeURIComponent(msg || 'Hi! I want to know more about FitKit memberships.')
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank')
    setOpen(false)
  }

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 999 }}>
      {/* Chat bubble */}
      {open && (
        <div style={{
          position: 'absolute', bottom: 64, right: 0, width: 280,
          background: '#fff', borderRadius: '12px 12px 2px 12px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.25)', overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ background: '#075E54', padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#128C7E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Barlow', fontWeight: 900, fontSize: 16, color: '#fff' }}>FK</div>
              <div>
                <p style={{ fontFamily: 'Barlow', fontWeight: 700, fontSize: 13, color: '#fff' }}>FitKit Support</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Typically replies in minutes</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: 14, background: '#ECE5DD' }}>
            <div style={{ background: '#fff', borderRadius: '0 8px 8px 8px', padding: '10px 12px', marginBottom: 10, maxWidth: '85%' }}>
              <p style={{ fontSize: 12, color: '#333', lineHeight: 1.5 }}>
                Hello! Welcome to FitKit. How can we help you today? Ask about memberships, classes, or trainers!
              </p>
              <p style={{ fontSize: 10, color: '#999', marginTop: 4 }}>FitKit Support</p>
            </div>
          </div>

          {/* Input */}
          <div style={{ padding: '10px 12px', background: '#f0f0f0', display: 'flex', gap: 8 }}>
            <input
              value={msg}
              onChange={e => setMsg(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Type a message..."
              style={{ flex: 1, padding: '8px 12px', borderRadius: 20, border: 'none', fontSize: 12, outline: 'none', background: '#fff' }}
            />
            <button onClick={send} style={{ width: 34, height: 34, borderRadius: '50%', background: '#25D366', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        style={{ width: 54, height: 54, borderRadius: '50%', background: '#25D366', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.5)', transition: 'transform 0.3s, box-shadow 0.3s' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.7)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.5)' }}
      >
        {open
          ? <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          : <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.938 1.395 5.617L0 24l6.585-1.367C8.22 23.507 10.08 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.006 21.75c-1.8 0-3.57-.48-5.115-1.38l-.366-.217-3.795.995 1.013-3.697-.24-.381C2.44 15.435 1.875 13.77 1.875 12 1.875 6.338 6.338 1.875 12 1.875 17.663 1.875 22.125 6.338 22.125 12c0 5.663-4.462 10.125-10.119 10.125v-.375z"/></svg>
        }
      </button>

      {/* Pulse ring */}
      {!open && (
        <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid #25D366', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite', opacity: 0.4 }} />
      )}

      <style>{`
        @keyframes ping { 75%,100% { transform: scale(1.8); opacity: 0; } }
      `}</style>
    </div>
  )
}
