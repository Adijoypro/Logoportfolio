'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS, type Category } from '@/lib/data'
import { useCursor } from '@/hooks/useCursor'
import ProjectModal from './ProjectModal'

const FILTERS: { label: string; value: string }[] = [
  { label: 'All',            value: 'all'      },
  { label: 'Brand Identity', value: 'brand'    },
  { label: 'Logo Mark',      value: 'logo'     },
  { label: 'Wordmark',       value: 'wordmark' },
  { label: 'Packaging',      value: 'packaging'},
]

// Editorial grid spans
const SPANS: ('wide'|'mid'|'third'|'full')[] = ['wide','mid','third','third','full','mid','wide']

export default function WorkSection() {
  const [filter,       setFilter]       = useState('all')
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [isMobile,     setIsMobile]     = useState(false)
  const { hover, unhover } = useCursor()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.categories.includes(filter as Category))

  return (
    <>
      <section id="work" style={{ padding: isMobile ? '72px 20px 60px' : '120px 44px 100px', background:'#f5f2ec' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.55 }}
          style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: isMobile ? '36px' : '72px', paddingBottom:'28px', borderBottom:'1px solid rgba(26,24,20,0.12)' }}
        >
          <div>
            <p style={{ fontSize:'10px', letterSpacing:'0.12em', textTransform:'uppercase', color:'#8c8880', marginBottom:'10px', display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ display:'block', width:'20px', height:'1px', background:'#8c8880' }} />
              Selected work
            </p>
            <h2 style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(28px,5vw,64px)', fontWeight:400, lineHeight:1.05, color:'#1a1814' }}>
              Identitas yang pernah<br/>saya <em style={{ fontStyle:'italic', color:'#c8401a' }}>ciptakan.</em>
            </h2>
          </div>
          {!isMobile && (
            <div style={{ textAlign:'right', flexShrink:0, marginLeft:'40px' }}>
              <div style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(40px,6vw,80px)', color:'transparent', WebkitTextStroke:'1px rgba(26,24,20,0.18)', lineHeight:1 }}>
                {PROJECTS.length}
              </div>
              <div style={{ fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#8c8880', marginTop:'4px' }}>Projects</div>
            </div>
          )}
        </motion.div>

        {/* Filters */}
        <div style={{ display:'flex', gap:'8px', marginBottom: isMobile ? '28px' : '52px', flexWrap: isMobile ? 'nowrap' : 'wrap', overflowX: isMobile ? 'auto' : 'visible', paddingBottom: isMobile ? '4px' : '0', scrollbarWidth:'none', WebkitOverflowScrolling:'touch' } as React.CSSProperties}>
          {FILTERS.map(f => (
            <button key={f.value}
              onClick={() => setFilter(f.value)}
              onMouseEnter={hover} onMouseLeave={unhover}
              style={{
                fontFamily:'DM Sans,sans-serif', fontSize:'11px', letterSpacing:'0.07em',
                textTransform:'uppercase', padding:'7px 18px', borderRadius:'100px', cursor:'none',
                border: '1px solid ' + (filter === f.value ? '#1a1814' : 'rgba(26,24,20,0.12)'),
                background: filter === f.value ? '#1a1814' : 'transparent',
                color: filter === f.value ? '#f5f2ec' : '#8c8880',
                transition:'all 0.16s',
              }}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12,1fr)', gap: isMobile ? '16px' : '20px' }}>
          <AnimatePresence>
            {filtered.map((project, idx) => {
              const span = SPANS[idx % SPANS.length]
              const colSpan = isMobile ? 1 : (span==='wide' ? 7 : span==='mid' ? 5 : span==='third' ? 4 : 12)
              const padPct  = isMobile ? '60%' : (span==='wide' ? '62%' : span==='mid' ? '72%' : span==='third' ? '80%' : '40%')

              return (
                <motion.div key={project.id}
                  layout
                  initial={{ opacity:0, y:20 }}
                  animate={{ opacity:1, y:0 }}
                  exit={{ opacity:0, scale:0.97 }}
                  transition={{ duration:0.4, delay: idx * 0.05 }}
                  style={{ gridColumn: isMobile ? '1 / -1' : `span ${colSpan}` }}
                  onClick={() => setActiveProject(project.id)}
                  onMouseEnter={hover} onMouseLeave={unhover}
                >
                  <div style={{
                    borderRadius:'4px', overflow:'hidden', cursor:'none', background: project.bg,
                    boxShadow:'0 0 0 0 transparent', transition:'box-shadow 0.3s',
                    position:'relative',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(26,24,20,0.12)'}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 0 transparent'}
                  >
                    {/* Visual */}
                    <div style={{ position:'relative', paddingBottom: padPct, overflow:'hidden' }}>
                      <div style={{
                        position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
                        transition:'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.transform='scale(1.04)'}
                      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.transform='scale(1)'}
                      >
                        {/* Color swatches bottom */}
                        <div style={{ position:'absolute', bottom:'16px', left:'16px', display:'flex', gap:'6px' }}>
                          {project.colors.map(c => (
                            <span key={c.hex} style={{ width:'14px', height:'14px', borderRadius:'50%', background:c.hex, border:'1.5px solid rgba(255,255,255,0.4)' }} />
                          ))}
                        </div>
                        <span style={{
                          position:'absolute', top:'16px', right:'16px',
                          fontSize:'9px', letterSpacing:'0.1em', textTransform:'uppercase',
                          background:'rgba(245,242,236,0.9)', color:'#1a1814',
                          padding:'4px 10px', borderRadius:'100px',
                        }}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div style={{ padding:'18px 20px 20px', display:'flex', justifyContent:'space-between', alignItems:'flex-start', background: project.dark ? project.bg : undefined }}>
                      <div>
                        <div style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(14px,1.4vw,20px)', color: project.dark ? '#f5f2ec' : '#1a1814', lineHeight:1.2 }}>
                          {project.name}
                        </div>
                        <div style={{ fontSize:'11px', color:'#8c8880', marginTop:'4px', letterSpacing:'0.03em' }}>
                          {project.industry} · {project.year}
                        </div>
                      </div>
                      <div style={{
                        width:'32px', height:'32px', border:`1px solid ${project.dark ? 'rgba(245,242,236,0.2)' : 'rgba(26,24,20,0.12)'}`,
                        borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                        fontSize:'14px', color: project.dark ? '#f5f2ec' : '#8c8880',
                        flexShrink:0, marginLeft:'12px', marginTop:'2px',
                        transition:'all 0.2s',
                      }}>
                        ↗
                      </div>
                    </div>

                    {/* Accent line */}
                    <div style={{
                      position:'absolute', bottom:0, left:0, height:'2px',
                      background: project.accent, width:'0%',
                      transition:'width 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.width='100%'}
                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.width='0%'}
                    />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Marquee */}
        <div style={{ overflow:'hidden', borderTop:'1px solid rgba(26,24,20,0.12)', borderBottom:'1px solid rgba(26,24,20,0.12)', padding:'16px 0', marginTop:'80px', whiteSpace:'nowrap' }}>
          <div style={{ display:'inline-flex', animation:'marquee 22s linear infinite' }}>
            {Array(2).fill(['Brand Identity','Logo Design','Visual Identity','Wordmark','Logo Mark','Packaging Design','Brand System','Typography']).flat().map((t,i) => (
              <span key={i} style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(13px,1.4vw,18px)', color:'#8c8880', padding:'0 40px', letterSpacing:'0.06em', display:'inline-flex', alignItems:'center', gap:'40px' }}>
                {t}<span style={{ color:'#c8401a', fontSize:'10px' }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        projectId={activeProject}
        onClose={() => setActiveProject(null)}
        onNavigate={(id) => setActiveProject(id)}
      />
    </>
  )
}
