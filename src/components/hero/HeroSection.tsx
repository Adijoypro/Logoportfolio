'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCursor } from '@/hooks/useCursor'
import { SITE } from '@/lib/data'
import { LOGO_MARKS } from './logoMarks'

export default function HeroSection() {
  const fieldRef  = useRef<HTMLDivElement>(null)
  const { hover, unhover, isTouch } = useCursor()
  const [variants, setVariants] = useState<Record<string, number>>(() =>
    Object.fromEntries(LOGO_MARKS.map(m => [m.id, 0]))
  )
  const [bursting,  setBursting]  = useState<string | null>(null)
  const [isMobile,  setIsMobile]  = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  // Parallax — desktop only
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (isMobile) return
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth  - 0.5) * 18)
      my.set((e.clientY / window.innerHeight - 0.5) * 10)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, isMobile])

  function cycleMark(id: string) {
    setBursting(id)
    const mark = LOGO_MARKS.find(m => m.id === id)!
    setTimeout(() => {
      setVariants(prev => ({ ...prev, [id]: (prev[id] + 1) % mark.variants.length }))
      setBursting(null)
    }, 160)
  }

  // Desktop marks — all marks with absolute positioning
  const desktopMarks = LOGO_MARKS

  // Mobile marks — curated set, neat grid layout (8 marks)
  const mobileGridMarks = [
    { id: 'a', size: 64 },
    { id: 'b', size: 52 },
    { id: 'c', size: 58 },
    { id: 'd', size: 72 },
    { id: 'e', size: 50 },
    { id: 'f', size: 56 },
    { id: 'g', size: 54 },
    { id: 'h', size: 60 },
  ].map(({ id, size }) => ({
    mark: LOGO_MARKS.find(m => m.id === id)!,
    size,
  })).filter(x => x.mark)

  return (
    <section id="hero" style={{ position:'relative', width:'100%', height: isMobile ? '100svh' : '100vh', overflow:'hidden' }}>

      {/* Ghost background text */}
      <span className="ghost-text" style={{
        position:'absolute',
        fontFamily:'DM Serif Display,serif',
        fontSize: isMobile ? 'clamp(60px,23vw,110px)' : 'clamp(100px,16vw,220px)',
        bottom:'-0.06em', left:'-0.02em', lineHeight:1,
        whiteSpace:'nowrap', pointerEvents:'none', zIndex:0,
      }}>MARKS</span>

      {!isMobile && (
        <span className="ghost-text" style={{
          position:'absolute', fontFamily:'DM Serif Display,serif',
          fontSize:'clamp(28px,4vw,56px)', top:'18%', right:'44px',
          writingMode:'vertical-rl', letterSpacing:'0.14em',
          WebkitTextStrokeColor:'rgba(26,24,20,0.06)',
          pointerEvents:'none', zIndex:0,
        }}>IDENTITY</span>
      )}

      {/* ── DESKTOP LAYOUT ── */}
      {!isMobile && (
        <>
          {/* Tagline */}
          <motion.div
            initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.7, delay:0.2 }}
            style={{
              position:'absolute', zIndex:10,
              left:'44px', maxWidth:'420px',
              top:'35%', transform:'translateY(-50%)',
            }}
          >
            <h1 style={{
              fontFamily:'DM Serif Display,serif', fontWeight:400,
              fontSize:'clamp(50px,2.4vw,34px)',
              lineHeight:1.3, color:'#1a1814', letterSpacing:'-0.01em',
            }}>
              {SITE.heroText.line1}<br/>
              {SITE.heroText.line2}<br/>
              <em style={{ fontStyle:'italic', color:'#c8401a' }}>{SITE.heroText.line3}</em><br/>
              {SITE.heroText.line4}
            </h1>
            <p style={{ marginTop:'22px', fontSize:'11px', letterSpacing:'0.08em', textTransform:'uppercase', color:'#8c8880', display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ display:'block', width:'24px', height:'1px', background:'#8c8880', flexShrink:0 }} />
              {SITE.tagline} · Tenggarong
            </p>
          </motion.div>

          {/* Desktop logo field — absolute positioned marks */}
          <motion.div
            ref={fieldRef}
            style={{ x: sx, y: sy, position:'absolute', inset:0, pointerEvents:'none', zIndex:3 }}
          >
            {desktopMarks.map((mark, idx) => (
              <motion.div key={mark.id}
                initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
                transition={{ delay: idx * 0.06, duration:0.5 }}
                onClick={() => cycleMark(mark.id)}
                onTouchEnd={e => { e.preventDefault(); cycleMark(mark.id) }}
                onMouseEnter={hover} onMouseLeave={unhover}
                style={{
                  position:'absolute',
                  left: mark.pos.left, top: mark.pos.top,
                  width: mark.size, height: mark.size,
                  transform: `rotate(${mark.rotate}deg)`,
                  cursor:'none',
                  pointerEvents:'all',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                {/* Hover label */}
                <span style={{ position:'absolute', bottom:'calc(100% + 8px)', left:'50%', transform:'translateX(-50%)', fontSize:'9px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#8c8880', whiteSpace:'nowrap', opacity:0, transition:'opacity 0.18s', pointerEvents:'none' }}
                  className="label-show">{mark.label}</span>

                <motion.div
                  animate={bursting === mark.id
                    ? { scale:[1,0.72,1.15,1], rotate:[0,6,-2,0] }
                    : { scale:1 }}
                  transition={{ duration:0.38, ease:[0.34,1.56,0.64,1] }}
                  whileHover={{ scale:1.1 }}
                  style={{ width:'100%', height:'100%' }}
                  dangerouslySetInnerHTML={{ __html: mark.variants[variants[mark.id]] }}
                />

                {/* Variant dots */}
                <div style={{ position:'absolute', bottom:'-10px', left:'50%', transform:'translateX(-50%)', display:'flex', gap:'4px' }}>
                  {mark.variants.map((_, vi) => (
                    <span key={vi} style={{ width:'4px', height:'4px', borderRadius:'50%', background: vi===variants[mark.id] ? '#c8401a' : 'rgba(26,24,20,0.12)', transition:'background 0.2s' }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop footer bar */}
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
            style={{
              position:'absolute', zIndex:10,
              left:'44px', right:'44px', bottom:'32px',
              display:'flex', justifyContent:'space-between', alignItems:'flex-end',
            }}
          >
            <div style={{ fontSize:'10px', letterSpacing:'0.09em', textTransform:'uppercase', color:'#8c8880', display:'flex', alignItems:'center', gap:'8px' }}>
              <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#4caf50', display:'inline-block' }} />
              Open for projects 2025
            </div>
            <div style={{ fontSize:'10px', letterSpacing:'0.09em', textTransform:'uppercase', color:'#8c8880' }}>
              Klik logo untuk variasi ↗
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <div style={{ position:'absolute', bottom:0, right:'80px', width:'1px', overflow:'hidden', zIndex:10, height:'52px' }}>
            <div style={{ width:'1px', height:'100%', background:'linear-gradient(to bottom, transparent, #1a1814)', animation:'slideDown 1.8s ease-in-out infinite' }} />
          </div>
        </>
      )}

      {/* ── MOBILE LAYOUT ── */}
      {isMobile && (
        <>
          {/* Mobile: text at top */}
          <motion.div
            initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.15 }}
            style={{
              position:'absolute', zIndex:10,
              top:'70px', left:'20px', right:'20px',
            }}
          >
            <h1 style={{
              fontFamily:'DM Serif Display,serif', fontWeight:400,
              fontSize:'clamp(20px,6vw,28px)',
              lineHeight:1.3, color:'#1a1814', letterSpacing:'-0.01em',
            }}>
              {SITE.heroText.line1}<br/>
              {SITE.heroText.line2}<br/>
              <em style={{ fontStyle:'italic', color:'#c8401a' }}>{SITE.heroText.line3}</em><br/>
              {SITE.heroText.line4}
            </h1>
          </motion.div>

          {/* Mobile: logo grid — centered, below text */}
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.35, duration:0.5 }}
            style={{
              position:'absolute',
              top:'50%', left:'50%',
              transform:'translate(-50%, -44%)',
              zIndex:4,
              width:'min(340px, 92vw)',
            }}
          >
            <div style={{
              display:'grid',
              gridTemplateColumns:'repeat(4, 1fr)',
              gap:'12px',
              alignItems:'center',
              justifyItems:'center',
            }}>
              {mobileGridMarks.map(({ mark, size }, idx) => (
                <motion.div
                  key={mark.id}
                  initial={{ opacity:0, scale:0.8 }}
                  animate={{ opacity:1, scale:1 }}
                  transition={{ delay: 0.4 + idx * 0.05, duration:0.4, ease:[0.34,1.1,0.64,1] }}
                  onClick={() => cycleMark(mark.id)}
                  onTouchEnd={e => { e.preventDefault(); cycleMark(mark.id) }}
                  style={{
                    width: size, height: size,
                    cursor:'pointer',
                    WebkitTapHighlightColor: 'transparent',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    // Subtle tap feedback background
                    borderRadius:'8px',
                    padding:'4px',
                    transition:'background 0.15s',
                    position:'relative',
                  }}
                >
                  <motion.div
                    animate={bursting === mark.id
                      ? { scale:[1,0.68,1.2,1], rotate:[0,8,-3,0] }
                      : { scale:1 }}
                    transition={{ duration:0.35, ease:[0.34,1.56,0.64,1] }}
                    style={{ width:'100%', height:'100%' }}
                    dangerouslySetInnerHTML={{ __html: mark.variants[variants[mark.id]] }}
                  />
                  {/* Variant dot indicator — single dot bottom center */}
                  {mark.variants.length > 1 && (
                    <div style={{ position:'absolute', bottom:'-6px', left:'50%', transform:'translateX(-50%)', display:'flex', gap:'3px' }}>
                      {mark.variants.map((_, vi) => (
                        <span key={vi} style={{ width:'3px', height:'3px', borderRadius:'50%', background: vi===variants[mark.id] ? '#c8401a' : 'rgba(26,24,20,0.18)' }} />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile footer */}
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}
            style={{
              position:'absolute', zIndex:10,
              left:'20px', right:'20px',
              bottom:'calc(120px + env(safe-area-inset-bottom, 0px))',
              display:'flex', flexDirection:'column', gap:'6px',
            }}
          >
            <div style={{ fontSize:'9px', letterSpacing:'0.09em', textTransform:'uppercase', color:'#8c8880', display:'flex', alignItems:'center', gap:'6px' }}>
              <span style={{ width:'5px', height:'5px', borderRadius:'50%', background:'#4caf50', display:'inline-block' }} />
              Open for projects 2025
            </div>
            <div style={{ fontSize:'9px', letterSpacing:'0.09em', textTransform:'uppercase', color:'rgba(26,24,20,0.4)' }}>
              Tap logo untuk variasi
            </div>
          </motion.div>
        </>
      )}

      <style dangerouslySetInnerHTML={{ __html: `.label-show{opacity:0}*:hover>.label-show{opacity:1}` }} />
    </section>
  )
}
