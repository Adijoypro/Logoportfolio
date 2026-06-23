'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '@/lib/data'
import { useCursor } from '@/hooks/useCursor'

const NAV_ITEMS = [
  { label: 'Home',     href: '#hero',     num: '01' },
  { label: 'Work',     href: '#work',     num: '02' },
  { label: 'Services', href: '#services', num: '03' },
  { label: 'About',    href: '#about',    num: '04' },
  { label: 'Contact',  href: '#contact',  num: '05' },
]

function scrollTo(id: string) {
  document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('hero')
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })
  const [isMobile,  setIsMobile]  = useState(false)
  const { hover, unhover } = useCursor()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const SECTIONS = ['hero', 'work', 'services', 'about', 'contact']
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      let cur = 'hero'
      SECTIONS.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - window.innerHeight * 0.4) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  function handleDesktopHover(e: React.MouseEvent<HTMLButtonElement>) {
    const rect   = e.currentTarget.getBoundingClientRect()
    const parent = e.currentTarget.closest('ul')!.getBoundingClientRect()
    setIndicator({ left: rect.left - parent.left, width: rect.width, visible: true })
  }

  function handleNavClick(href: string) {
    setOpen(false)
    setTimeout(() => scrollTo(href), open ? 520 : 0)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[400] grid grid-cols-2 pointer-events-auto" style={{gridTemplateColumns:'1fr 1fr'}}>
            <motion.div
              initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }}
              transition={{ duration: 0.52, ease: [0.76,0,0.24,1] }}
              className="bg-ink flex flex-col justify-between px-14 py-28"
            >
              <ul>
                {NAV_ITEMS.map((item, i) => (
                  <li key={item.href} style={{ overflow: 'hidden', marginBottom: '4px' }}>
                    <motion.a
                      href={item.href}
                      onClick={e => { e.preventDefault(); handleNavClick(item.href) }}
                      initial={{ y: '100%' }} animate={{ y: 0 }}
                      transition={{ duration: 0.5, ease: [0.34,1.1,0.64,1], delay: 0.14 + i * 0.06 }}
                      onMouseEnter={hover} onMouseLeave={unhover}
                      style={{ display:'block', fontFamily:'DM Serif Display,serif', fontSize:'clamp(36px,5.5vw,68px)', color:'rgba(245,242,236,0.85)', textDecoration:'none', lineHeight:1.1, cursor:'none' }}
                    >
                      <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:'11px', letterSpacing:'0.1em', color:'rgba(245,242,236,0.3)', marginRight:'12px', position:'relative', top:'-3px' }}>
                        {item.num}
                      </span>
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
                style={{ fontSize:'10px', letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(245,242,236,0.35)', display:'flex', alignItems:'center', gap:'8px' }}>
                <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#4caf50', display:'inline-block' }} />
                Open for projects 2025
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }}
              transition={{ duration: 0.52, ease: [0.76,0,0.24,1], delay: 0.06 }}
              className="bg-[#ede9e0] flex-col justify-between px-14 py-28 hidden md:flex"
            >
              <div>
                <p style={{ fontSize:'10px', letterSpacing:'0.12em', textTransform:'uppercase', color:'#8c8880', marginBottom:'20px' }}>Featured Project</p>
                <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.4 }}
                  style={{ width:'100%', aspectRatio:'4/3', background:'#1a1814', borderRadius:'4px', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'32px' }}>
                  <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="38" stroke="rgba(245,242,236,0.3)" strokeWidth="3"/>
                    <circle cx="50" cy="50" r="20" fill="rgba(245,242,236,0.2)"/>
                    <line x1="50" y1="12" x2="50" y2="88" stroke="rgba(245,242,236,0.15)" strokeWidth="2"/>
                    <line x1="12" y1="50" x2="88" y2="50" stroke="rgba(245,242,236,0.15)" strokeWidth="2"/>
                  </svg>
                </motion.div>
                <p style={{ fontFamily:'DM Serif Display,serif', fontSize:'18px', color:'#1a1814' }}>Arkana Studio</p>
                <p style={{ fontSize:'11px', letterSpacing:'0.06em', color:'#8c8880', marginTop:'4px' }}>Brand Identity · 2024</p>
              </div>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }} style={{ display:'flex', gap:'24px' }}>
                {Object.entries(SITE.socials).map(([key, href]) => (
                  <a key={key} href={href} target="_blank" rel="noopener noreferrer"
                    onMouseEnter={hover} onMouseLeave={unhover}
                    style={{ fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#8c8880', textDecoration:'none', cursor:'none' }}>
                    {key}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:500,
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding: isMobile ? '0 20px' : '0 44px',
        height: isMobile ? '58px' : '70px',
        background: scrolled ? 'rgba(245,242,236,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(26,24,20,0.08)' : 'none',
        transition: 'background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s',
      }}>
        <a href="#hero" onClick={e=>{ e.preventDefault(); scrollTo('#hero') }}
          onMouseEnter={hover} onMouseLeave={unhover}
          style={{ fontFamily:'DM Serif Display,serif', fontSize:'15px', letterSpacing:'0.02em', color:'#1a1814', textDecoration:'none', cursor: isMobile ? 'auto' : 'none', position:'relative', zIndex:2 }}>
          {SITE.name}
        </a>

        <div style={{ display:'flex', alignItems:'center', gap: isMobile ? '16px' : '40px' }}>
          {/* Desktop nav links — hidden on mobile */}
          {!isMobile && (
            <ul style={{ display:'flex', listStyle:'none', position:'relative' }}
              onMouseLeave={() => setIndicator(i => ({ ...i, visible: false }))}>
              <div style={{
                position:'absolute', bottom:'-2px', left:indicator.left, width:indicator.width,
                height:'1.5px', background:'#c8401a', borderRadius:'2px',
                opacity: indicator.visible ? 1 : 0,
                transition: 'left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.2s',
                pointerEvents:'none',
              }} />
              {NAV_ITEMS.filter(n => n.label !== 'Home').map(item => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    onMouseEnter={e=>{ handleDesktopHover(e); hover() }}
                    onMouseLeave={unhover}
                    style={{
                      background:'none', border:'none', fontFamily:'DM Sans,sans-serif',
                      fontSize:'11px', letterSpacing:'0.09em', textTransform:'uppercase',
                      color:'#1a1814', opacity: active === item.href.replace('#','') ? 1 : 0.5,
                      padding:'8px 16px', cursor:'none', transition:'opacity 0.2s',
                    }}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <button onClick={() => setOpen(o=>!o)} onMouseEnter={hover} onMouseLeave={unhover}
            aria-label="Menu"
            style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'center', gap:'5px', width:'36px', height:'36px', background:'none', border:'none', cursor: isMobile ? 'pointer' : 'none', position:'relative', zIndex:501, WebkitTapHighlightColor:'transparent' }}>
            {[22,14,18].map((w,i) => (
              <span key={i} style={{
                display:'block', height:'1.5px', background:'#1a1814', borderRadius:'2px',
                width: open ? '20px' : `${w}px`,
                transform: open && i===0 ? 'translateY(6.5px) rotate(45deg)' : open && i===2 ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                opacity: open && i===1 ? 0 : 1,
                transition: 'width 0.22s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s',
              }} />
            ))}
          </button>
        </div>
      </nav>
    </>
  )
}
