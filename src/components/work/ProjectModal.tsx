'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import { useCursor } from '@/hooks/useCursor'

interface Props {
  projectId: string | null
  onClose:    () => void
  onNavigate: (id: string) => void
}

export default function ProjectModal({ projectId, onClose, onNavigate }: Props) {
  const { hover, unhover } = useCursor()
  const [isMobile, setIsMobile] = useState(false)
  const idx     = PROJECTS.findIndex(p => p.id === projectId)
  const project = PROJECTS[idx] ?? null

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowRight')  onNavigate(PROJECTS[(idx + 1) % PROJECTS.length].id)
      if (e.key === 'ArrowLeft')   onNavigate(PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length].id)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, idx, onClose, onNavigate])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal"
          initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
          transition={{ duration:0.3 }}
          style={{ 
            position:'fixed', 
            inset:0, 
            zIndex:1000,
            display: 'flex', // Tambahan: Pakai flexbox
            alignItems: isMobile ? 'flex-end' : 'center', // Mobile nempel bawah, Desktop di tengah
            justifyContent: 'center' // Otomatis tengahin ke samping
          }}
        >
          {/* Backdrop */}
          <div onClick={onClose} style={{ position:'absolute', inset:0, background:'rgba(26,24,20,0.72)', backdropFilter:'blur(6px)' }} />

          {/* Panel */}
          <motion.div
            initial={{ y:'4%', opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:'4%', opacity:0 }}
            transition={{ duration:0.38, ease:[0.34,1.1,0.64,1] }}
            style={{
              position:'relative', // Ganti jadi relative (jangan absolute)
              zIndex: 10, // Biar gak tenggelam di bawah backdrop
              width: isMobile ? '100%' : 'min(960px,92vw)',
              maxHeight: isMobile ? '92svh' : '88vh',
              borderRadius: isMobile ? '16px 16px 0 0' : '8px',
              overflow:'hidden',
              display:'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              boxShadow:'0 32px 80px rgba(0,0,0,0.35)',
              // Semua script top, bottom, left, right, & transform dihapus!
            }}
          >
          
            {/* Close */}
            <button onClick={onClose} onMouseEnter={hover} onMouseLeave={unhover}
              style={{ position:'absolute', top:'16px', right:'16px', zIndex:10, width:'36px', height:'36px', borderRadius:'50%', border:'1px solid rgba(255,255,255,0.18)', background:'rgba(255,255,255,0.1)', backdropFilter:'blur(8px)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', cursor: isMobile ? 'pointer' : 'none', WebkitTapHighlightColor:'transparent' }}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* LEFT — visual */}
            <div style={{ background: project.bg, display:'flex', flexDirection:'column', minHeight: isMobile ? '200px' : 'auto', maxHeight: isMobile ? '240px' : 'none' }}>
              <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding: isMobile ? '24px' : '40px', minHeight: isMobile ? '160px' : '300px' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'20px', flexWrap:'wrap' }}>
                  {[0.9, 1, 0.85].map((op, i) => (
                    <motion.div key={i}
                      initial={{ opacity:0, y:12 }}
                      animate={{ opacity:op, y:0 }}
                      transition={{ delay: i * 0.07 }}
                      style={{ width: isMobile ? '60px' : '90px', height: isMobile ? '60px' : '90px', borderRadius: i===1 ? '50%' : '4px', background: project.dark ? `rgba(245,242,236,${op*0.15})` : `rgba(26,24,20,${op*0.12})`, border:`2px solid ${project.accent}${i===1?'':'44'}`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      {i === 1 && <span style={{ fontFamily:'DM Serif Display,serif', fontSize: isMobile ? '20px' : '28px', color: project.dark ? '#f5f2ec' : '#1a1814', opacity:0.8 }}>
                        {project.name.charAt(0)}
                      </span>}
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Color swatches */}
              <div style={{ padding: isMobile ? '14px 20px' : '20px 28px', borderTop:`1px solid ${project.dark ? 'rgba(255,255,255,0.1)' : 'rgba(26,24,20,0.08)'}`, background: project.dark ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.3)', display:'flex', gap:'10px', alignItems:'flex-end' }}>
                {project.colors.map(c => (
                  <div key={c.hex} style={{ display:'flex', flexDirection:'column', gap:'6px', alignItems:'center' }}>
                    <div style={{ width: isMobile ? '28px' : '36px', height: isMobile ? '28px' : '36px', borderRadius:'50%', background:c.hex, border:'1px solid rgba(255,255,255,0.15)' }} />
                    <span style={{ fontSize:'8px', letterSpacing:'0.08em', textTransform:'uppercase', color: project.dark ? 'rgba(245,242,236,0.45)' : 'rgba(26,24,20,0.45)', textAlign:'center' }}>{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — info */}
            <div style={{ background:'#f5f2ec', padding: isMobile ? '22px 20px 80px' : '44px 40px 36px', overflowY:'auto', display:'flex', flexDirection:'column', gap:0 }}>
              <div style={{ display:'flex', gap:'8px', alignItems:'center', fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#8c8880', marginBottom:'14px' }}>
                <span>{project.year}</span><span>·</span><span>{project.category}</span>
              </div>
              <h2 style={{ fontFamily:'DM Serif Display,serif', fontSize: isMobile ? '22px' : 'clamp(24px,3vw,38px)', fontWeight:400, color:'#1a1814', lineHeight:1.1, marginBottom:'10px' }}>
                {project.name}
              </h2>
              <p style={{ fontFamily:'DM Serif Display,serif', fontStyle:'italic', fontSize:'clamp(13px,1.6vw,18px)', color: project.accent, marginBottom:'20px', lineHeight:1.3 }}>
                &ldquo;{project.tagline}&rdquo;
              </p>
              <p style={{ fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#8c8880', marginBottom:'16px', paddingBottom:'16px', borderBottom:'1px solid rgba(26,24,20,0.12)' }}>
                {project.industry}
              </p>
              <p style={{ fontSize:'13px', lineHeight:1.75, color:'#4a4844', marginBottom:'28px' }}>
                {project.description}
              </p>
              <div style={{ marginBottom:'32px' }}>
                <div style={{ fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#8c8880', marginBottom:'12px' }}>Deliverables</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                  {project.deliverables.map(d => (
                    <span key={d} style={{ fontSize:'11px', padding:'5px 14px', border:'1px solid rgba(26,24,20,0.12)', borderRadius:'100px', color:'#1a1814' }}>{d}</span>
                  ))}
                </div>
              </div>
              <a href="#" onMouseEnter={hover} onMouseLeave={unhover}
                style={{ display:'inline-flex', alignItems:'center', justifyContent: isMobile ? 'center' : 'flex-start', gap:'10px', padding:'13px 28px', background: project.accent, color:'#f5f2ec', fontSize:'11px', letterSpacing:'0.08em', textTransform:'uppercase', textDecoration:'none', borderRadius:'100px', width: isMobile ? '100%' : 'fit-content', marginTop:'auto', cursor: isMobile ? 'pointer' : 'none', transition:'opacity 0.2s', WebkitTapHighlightColor:'transparent' }}
                onMouseOver={e => (e.currentTarget.style.opacity='0.85')}
                onMouseOut={e => (e.currentTarget.style.opacity='1')}
              >
                Lihat Case Study Lengkap <span>↗</span>
              </a>
            </div>

            {/* Nav arrows — only desktop */}
            {!isMobile && ['prev','next'].map((dir) => {
              const targetIdx = dir==='prev' ? idx-1 : idx+1
              const target = PROJECTS[targetIdx]
              return (
                <button key={dir}
                  onClick={() => target && onNavigate(target.id)}
                  onMouseEnter={hover} onMouseLeave={unhover}
                  style={{
                    position:'absolute', bottom:'20px', right: dir==='next' ? '24px' : '76px',
                    width:'44px', height:'44px', borderRadius:'100px',
                    background:'rgba(245,242,236,0.95)', border:'1px solid rgba(26,24,20,0.12)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'16px', color:'#1a1814', cursor:'none',
                    opacity: target ? 1 : 0.3,
                    transition:'all 0.18s',
                  }}>
                  {dir === 'prev' ? '←' : '→'}
                </button>
              )
            })}

            {/* Mobile swipe nav arrows */}
            {isMobile && (
              <div style={{ position:'fixed', bottom:'20px', left:'0', right:'0', display:'flex', justifyContent:'center', gap:'12px', zIndex:20 }}>
                {['prev','next'].map((dir) => {
                  const targetIdx = dir==='prev' ? idx-1 : idx+1
                  const target = PROJECTS[targetIdx]
                  return (
                    <button key={dir}
                      onClick={() => target && onNavigate(target.id)}
                      style={{
                        width:'48px', height:'48px', borderRadius:'100px',
                        background:'rgba(245,242,236,0.95)', border:'1px solid rgba(26,24,20,0.12)',
                        display:'flex', alignItems:'center', justifyContent:'center',
                        fontSize:'18px', color:'#1a1814', cursor:'pointer',
                        opacity: target ? 1 : 0.25,
                        WebkitTapHighlightColor:'transparent',
                        boxShadow:'0 4px 16px rgba(26,24,20,0.15)',
                      }}>
                      {dir === 'prev' ? '←' : '→'}
                    </button>
                  )
                })}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
