'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen    from '@/components/ui/LoadingScreen'
import Navbar           from '@/components/layout/Navbar'
import HeroSection      from '@/components/hero/HeroSection'
import WorkSection      from '@/components/work/WorkSection'
import { ServicesSection, AboutSection, ContactSection, Footer } from '@/components/sections'
import { useScrollProgress } from '@/hooks/useScrollProgress'

const SECTIONS = ['hero','work','services','about','contact']
const LABELS   = { hero:'Home', work:'Work', services:'Services', about:'About', contact:'Contact' }

export default function Home() {
  const { progress, activeSection } = useScrollProgress()
  const cursorRef   = useRef<HTMLDivElement>(null)
  const flashRef    = useRef<HTMLDivElement>(null)
  const flashTimer  = useRef<ReturnType<typeof setTimeout>>()
  const prevSection = useRef('')
  const trailRefs   = useRef<HTMLDivElement[]>([])
  const [isMobile,  setIsMobile]  = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768 || window.matchMedia('(hover: none)').matches)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  // Cursor
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return
      cursorRef.current.style.left = e.clientX + 'px'
      cursorRef.current.style.top  = e.clientY + 'px'
      trailRefs.current.forEach(d => {
        d.style.left = e.clientX + 'px'
        d.style.top  = e.clientY + 'px'
      })
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Section flash label
  useEffect(() => {
    if (activeSection === prevSection.current) return
    prevSection.current = activeSection
    const flash = flashRef.current
    if (!flash) return
    flash.textContent = LABELS[activeSection as keyof typeof LABELS] || ''
    flash.style.opacity = '1'
    flash.style.transform = 'translateX(-50%) translateY(0)'
    clearTimeout(flashTimer.current)
    flashTimer.current = setTimeout(() => {
      flash.style.opacity = '0'
      flash.style.transform = 'translateX(-50%) translateY(10px)'
    }, 1600)
  }, [activeSection])

  return (
    <>
      <LoadingScreen />

      {/* Cursor — desktop only */}
      {!isMobile && <div id="cursor" ref={cursorRef} />}

      {/* Cursor trail — desktop only */}
      {!isMobile && Array.from({ length: 6 }).map((_, i) => (
        <div key={i} ref={el => { if (el) trailRefs.current[i] = el }}
          style={{
            position:'fixed', borderRadius:'50%', pointerEvents:'none',
            zIndex:9998, mixBlendMode:'multiply', background:'#c8401a',
            width: `${4 + i * 1.5}px`, height: `${4 + i * 1.5}px`,
            opacity: 0.18 - i * 0.025,
            transform:'translate(-50%,-50%)',
            transition: `left ${0.04 + i * 0.045}s ease, top ${0.04 + i * 0.045}s ease`,
            willChange:'left,top',
          }}
        />
      ))}

      {/* Scroll progress bar */}
      <div style={{
        position:'fixed', top:0, left:0, height:'2px',
        width: `${progress}%`, background:'#c8401a',
        zIndex:900, pointerEvents:'none',
        transition:'width 0.08s linear',
      }} />

      {/* Section pips — desktop only */}
      {!isMobile && (
        <nav aria-hidden="true" style={{
          position:'fixed', right:'40px', top:'50%',
          transform:'translateY(-50%)', zIndex:200,
          display:'flex', flexDirection:'column', gap:'10px',
          pointerEvents:'none',
        }}>
          {SECTIONS.map(id => (
            <button key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' })}
              aria-label={LABELS[id as keyof typeof LABELS]}
              style={{
                pointerEvents:'all', cursor:'none', border:'none', padding:0,
                width:'4px',
                height: activeSection === id ? '20px' : '4px',
                borderRadius: activeSection === id ? '3px' : '50%',
                background: activeSection === id ? '#c8401a' : 'rgba(26,24,20,0.18)',
                transition:'background 0.3s, height 0.3s, border-radius 0.3s',
              }}
            />
          ))}
        </nav>
      )}

      {/* Section flash label */}
      <div ref={flashRef} style={{
        position:'fixed', bottom:'44px', left:'50%',
        transform:'translateX(-50%) translateY(10px)',
        zIndex:300,
        fontSize:'10px', letterSpacing:'0.14em', textTransform:'uppercase',
        color:'#1a1814', background:'#f5f2ec',
        border:'1px solid rgba(26,24,20,0.12)',
        padding:'6px 20px', borderRadius:'100px',
        opacity:0, pointerEvents:'none',
        transition:'opacity 0.25s ease, transform 0.25s ease',
      }} />

      <Navbar />

      <main>
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
