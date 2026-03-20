import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppChat from './components/WhatsAppChat'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Membership from './pages/Membership'
import Blog from './pages/Blog'
import { About, Classes, Trainers, Contact } from './pages/AllPages'

const PAGES = {
  home: Home,
  about: About,
  classes: Classes,
  schedule: Schedule,
  trainers: Trainers,
  membership: Membership,
  blog: Blog,
  contact: Contact,
}

export default function App() {
  const [page, setPage] = useState('home')

  const goTo = (id) => {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const Page = PAGES[page] || Home

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar page={page} setPage={goTo} />
      <main>
        <Page setPage={goTo} />
      </main>
      <Footer setPage={goTo} />
      <WhatsAppChat />
    </div>
  )
}
