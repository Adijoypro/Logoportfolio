'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SITE, SERVICES, ABOUT, PROJECTS } from '@/lib/data'
import { useCursor } from '@/hooks/useCursor'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

// ─────────────────────────────────────────────
export function ServicesSection() {
  const { hover, unhover } = useCursor()
  const isMobile = useIsMobile()
  // 💡 State untuk mencatat index card mana yang lagi di-hover biar child-nya tahu kapan harus berubah warna
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section id="services" style={{ padding: isMobile ? '72px 20px' : '100px 44px', borderTop:'1px solid rgba(26,24,20,0.12)' }}>
      <motion.div {...fadeUp} style={{ marginBottom:'52px' }}>
        <p style={{ fontSize:'10px', letterSpacing:'0.12em', textTransform:'uppercase', color:'#8c8880', marginBottom:'10px', display:'flex', alignItems:'center', gap:'10px' }}>
          <span style={{ display:'block', width:'20px', height:'1px', background:'#8c8880' }} />
          What I do
        </p>
        <h2 style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(32px,5vw,64px)', fontWeight:400, lineHeight:1.05, color:'#1a1814' }}>
          Layanan <em style={{ fontStyle:'italic', color:'#c8401a' }}>saya.</em>
        </h2>
      </motion.div>
      <div style={{
        display:'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
        gap:'1px', background:'rgba(26,24,20,0.12)', border:'1px solid rgba(26,24,20,0.12)'
      }}>
        {SERVICES.map((s, i) => (
          <motion.div key={s.num} {...fadeUp} transition={{ duration:0.55, delay: i*0.08 }}
            onMouseEnter={e => { 
              (e.currentTarget as HTMLDivElement).style.background='#1a1814'; 
              setHoveredIdx(i); // Catat index saat pointer masuk
              hover(); 
            }}
            onMouseLeave={e => { 
              (e.currentTarget as HTMLDivElement).style.background='#f5f2ec'; 
              setHoveredIdx(null); // Reset saat pointer keluar
              unhover(); 
            }}
            style={{ background:'#f5f2ec', padding: isMobile ? '32px 24px' : '44px 36px', transition:'background 0.22s', position:'relative', overflow:'hidden' }}
          >
            {/* 💡 Angka Card: Berubah agak putih transparan saat di-hover */}
            <div style={{ fontSize:'10px', letterSpacing:'0.12em', color: hoveredIdx === i ? 'rgba(245,242,236,0.4)' : '#8c8880', marginBottom:'28px', transition:'color 0.22s' }}>
              {s.num}
            </div>

            {/* 💡 Judul Layanan: Berubah putih bersih (#f5f2ec) saat di-hover */}
            <div style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(20px,2vw,28px)', fontWeight:400, color: hoveredIdx === i ? '#f5f2ec' : '#1a1814', marginBottom:'16px', transition:'color 0.22s' }}>
              {s.name}
            </div>

            {/* 💡 Deskripsi: Berubah abu-abu terang saat di-hover */}
            <div style={{ fontSize:'12px', lineHeight:1.7, color: hoveredIdx === i ? 'rgba(245,242,236,0.6)' : '#8c8880', transition:'color 0.22s' }}>
              {s.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
export function AboutSection() {
  const isMobile = useIsMobile()

  return (
    <section id="about" style={{ padding: isMobile ? '72px 20px' : '120px 44px', borderTop:'1px solid rgba(26,24,20,0.12)', background:'#f5f2ec' }}>
      <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '40px' : '80px', alignItems:'start' }}>
        {/* Left */}
        <div>
          <motion.div {...fadeUp}>
            <p style={{ fontSize:'10px', letterSpacing:'0.12em', textTransform:'uppercase', color:'#8c8880', marginBottom:'10px', display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ display:'block', width:'20px', height:'1px', background:'#8c8880' }} />
              Tentang saya
            </p>
            <h2 style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(24px,3.2vw,46px)', fontWeight:400, lineHeight:1.2, color:'#1a1814', margin:'16px 0 40px' }}>
              Saya percaya bahwa<br/>sebuah logo yang baik<br/>adalah <em style={{ fontStyle:'italic', color:'#c8401a' }}>janji visual —</em><br/>bukan dekorasi.
            </h2>
          </motion.div>

          {/* Portrait placeholder */}
          <motion.div {...fadeUp} transition={{ duration:0.55, delay:0.1 }}
            style={{ position:'relative', maxWidth: isMobile ? '220px' : '320px', margin: isMobile ? '0 auto' : '0' }}>
            <div style={{ width:'100%', aspectRatio:'5/6', background:'#e0dbd0', borderRadius:'4px', overflow:'hidden', position:'relative' }}>
  <img
    src="/foto-profil2.webp"
    alt="Adi Saputra"
    style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }}
  />
</div>
            <div style={{ position:'absolute', bottom:'-20px', right:'-20px', background:'#1a1814', color:'#f5f2ec', width:'80px', height:'80px', borderRadius:'50%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'2px' }}>
              <span style={{ fontFamily:'DM Serif Display,serif', fontSize:'22px', lineHeight:1 }}>{ABOUT.yearsExp}+</span>
              <span style={{ fontSize:'8px', letterSpacing:'0.06em', textTransform:'uppercase', opacity:0.55, textAlign:'center', lineHeight:1.3 }}>Tahun<br/>Pengalaman</span>
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div {...fadeUp} transition={{ duration:0.55, delay:0.15 }} style={{ paddingTop: isMobile ? '20px' : '0' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:'18px', marginBottom:'44px', paddingBottom:'44px', borderBottom:'1px solid rgba(26,24,20,0.12)' }}>
            {ABOUT.bio.map((p, i) => (
              <p key={i} style={{ fontSize:'14px', lineHeight:1.8, color:'#4a4844' }}>{p}</p>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'24px', marginBottom:'40px', paddingBottom:'40px', borderBottom:'1px solid rgba(26,24,20,0.12)' }}>
            {ABOUT.stats.map(s => (
              <div key={s.num}>
                <div style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(24px,3.5vw,48px)', color:'#1a1814', lineHeight:1, marginBottom:'6px' }}>{s.num}</div>
                <div style={{ fontSize:'10px', letterSpacing:'0.08em', textTransform:'uppercase', color:'#8c8880' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#8c8880', marginBottom:'14px' }}>Saya bekerja dengan</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
            {ABOUT.tools.map(t => (
              <span key={t} style={{ fontSize:'11px', padding:'5px 16px', border:'1px solid rgba(26,24,20,0.12)', borderRadius:'100px', color:'#1a1814', letterSpacing:'0.04em' }}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
export function ContactSection() {
  const { hover, unhover } = useCursor()
  const isMobile = useIsMobile()
  const [budget,  setBudget]  = useState('')
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)
  const [form,    setForm]    = useState({ name:'', email:'', type:'', message:'' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1400)
  }

  const inputStyle: React.CSSProperties = {
    background:'rgba(245,242,236,0.06)', border:'1px solid rgba(245,242,236,0.12)',
    borderRadius:'4px', padding:'14px 16px',
    fontFamily:'DM Sans,sans-serif', fontSize: isMobile ? '16px' : '13px', color:'#f5f2ec',
    outline:'none', width:'100%', transition:'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ padding: isMobile ? '72px 20px' : '120px 44px', background:'#1a1814', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', fontFamily:'DM Serif Display,serif', fontSize:'clamp(80px,14vw,180px)', color:'transparent', WebkitTextStroke:'1px rgba(245,242,236,0.04)', top:'50%', left:'50%', transform:'translate(-50%,-50%)', whiteSpace:'nowrap', pointerEvents:'none', userSelect:'none' }}>
        CONTACT
      </div>
      <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '48px' : '80px', position:'relative', zIndex:1 }}>
        {/* Left */}
        <motion.div {...fadeUp}>
          <p style={{ fontSize:'10px', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(245,242,236,0.4)', marginBottom:'10px', display:'flex', alignItems:'center', gap:'10px' }}>
            <span style={{ display:'block', width:'20px', height:'1px', background:'rgba(245,242,236,0.3)' }} />
            Hubungi saya
          </p>
          <h2 style={{ fontFamily:'DM Serif Display,serif', fontSize:'clamp(26px,4vw,56px)', fontWeight:400, color:'#f5f2ec', lineHeight:1.15, margin:'16px 0 20px' }}>
            Ada yang ingin<br/>kita <em style={{ fontStyle:'italic', color:'#c8401a' }}>mulai</em>?
          </h2>
          <p style={{ fontSize:'13px', lineHeight:1.7, color:'rgba(245,242,236,0.5)', marginBottom:'40px', maxWidth:'340px' }}>
            Ceritakan proyekmu. Tidak perlu formal — cukup sampaikan apa yang kamu bayangkan.
          </p>
          <a href={`mailto:${SITE.email}`} onMouseEnter={hover} onMouseLeave={unhover}
            style={{ display:'flex', alignItems:'center', gap:'10px', fontFamily:'DM Serif Display,serif', fontSize:'clamp(14px,1.8vw,22px)', color:'#f5f2ec', textDecoration:'none', marginBottom:'16px', cursor: isMobile ? 'pointer' : 'none', transition:'color 0.18s', wordBreak:'break-all' }}>
            {SITE.email} <span style={{ transition:'transform 0.18s', display:'inline-block', flexShrink:0 }}>↗</span>
          </a>
          <p style={{ fontSize:'11px', letterSpacing:'0.07em', color:'rgba(245,242,236,0.35)', display:'flex', alignItems:'center', gap:'8px', marginBottom:'48px' }}>
            <span style={{ color:'#4caf50' }}>◉</span> {SITE.location}
          </p>
          <div style={{ display:'flex', flexDirection:'column' }}>
            {Object.entries(SITE.socials).map(([key, href]) => (
              <a key={key} href={href} target="_blank" rel="noopener noreferrer"
                onMouseEnter={hover} onMouseLeave={unhover}
                style={{ display:'flex', alignItems:'center', gap:'14px', fontSize:'12px', letterSpacing:'0.06em', color:'rgba(245,242,236,0.5)', textDecoration:'none', cursor: isMobile ? 'pointer' : 'none', padding:'12px 0', borderBottom:'1px solid rgba(245,242,236,0.07)', transition:'color 0.18s', textTransform:'capitalize' }}>
                <span style={{ width:'32px', height:'32px', border:'1px solid rgba(245,242,236,0.12)', borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px', fontWeight:500, flexShrink:0 }}>
                  {key.slice(0,2).toUpperCase()}
                </span>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div {...fadeUp} transition={{ duration:0.55, delay:0.1 }}>
          <form onSubmit={handleSubmit}>
            {/* Name & Email — stacked on mobile, side-by-side on desktop */}
            <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:'16px', marginBottom:'20px' }}>
              {(['name','email'] as const).map(field => (
                <div key={field} style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
                  <label style={{ fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(245,242,236,0.4)' }}>
                    {field === 'name' ? 'Nama' : 'Email'}
                  </label>
                  <input
                    value={form[field]}
                    onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                    placeholder={field === 'name' ? 'Nama Anda' : 'email@anda.com'}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor='rgba(245,242,236,0.35)')}
                    onBlur={e => (e.target.style.borderColor='rgba(245,242,236,0.12)')}
                  />
                </div>
              ))}
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'8px', marginBottom:'20px' }}>
              <label style={{ fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(245,242,236,0.4)' }}>Jenis Proyek</label>
              <div style={{ position:'relative' }}>
                <select value={form.type} onChange={e => setForm(f=>({...f,type:e.target.value}))}
                  style={{ ...inputStyle, appearance:'none', cursor: isMobile ? 'pointer' : 'none' }}>
                  <option value="" disabled>Pilih layanan...</option>
                  {['Brand Identity','Logo Design','Wordmark','Packaging Design','Brand Refresh','Lainnya'].map(o=>(
                    <option key={o} style={{ background:'#1a1814' }}>{o}</option>
                  ))}
                </select>
                <span style={{ position:'absolute', right:'14px', top:'50%', transform:'translateY(-50%)', color:'rgba(245,242,236,0.3)', pointerEvents:'none' }}>↓</span>
              </div>
            </div>

            <div style={{ marginBottom:'20px' }}>
              <label style={{ fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(245,242,236,0.4)', display:'block', marginBottom:'8px' }}>Budget Range</label>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                {['< 5jt','5–15jt','15–30jt','> 30jt'].map(b => (
                  <button key={b} type="button" onClick={() => setBudget(b)}
                    onMouseEnter={hover} onMouseLeave={unhover}
                    style={{ fontFamily:'DM Sans,sans-serif', fontSize:'11px', padding:'7px 16px', borderRadius:'100px', cursor: isMobile ? 'pointer' : 'none', transition:'all 0.18s', WebkitTapHighlightColor:'transparent', border: budget===b ? '1px solid #f5f2ec' : '1px solid rgba(245,242,236,0.15)', background: budget===b ? '#f5f2ec' : 'transparent', color: budget===b ? '#1a1814' : 'rgba(245,242,236,0.5)' }}>
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'8px', marginBottom:'0' }}>
              <label style={{ fontSize:'10px', letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(245,242,236,0.4)' }}>Ceritakan proyekmu</label>
              <textarea value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}
                placeholder="Saya sedang membangun brand untuk..."
                style={{ ...inputStyle, minHeight:'120px', resize:'vertical', lineHeight:1.6 }}
                onFocus={e=>(e.target.style.borderColor='rgba(245,242,236,0.35)')}
                onBlur={e=>(e.target.style.borderColor='rgba(245,242,236,0.12)')}
              />
            </div>

            {!sent ? (
              <button type="submit" onMouseEnter={hover} onMouseLeave={unhover}
                style={{ marginTop:'28px', display:'flex', alignItems:'center', justifyContent: isMobile ? 'center' : 'flex-start', gap:'12px', padding:'15px 32px', background:'#f5f2ec', color:'#1a1814', fontFamily:'DM Sans,sans-serif', fontSize:'11px', letterSpacing:'0.09em', textTransform:'uppercase', border:'none', borderRadius:'100px', cursor: isMobile ? 'pointer' : 'none', transition:'background 0.2s, color 0.2s', opacity: loading ? 0.6 : 1, width: isMobile ? '100%' : 'auto', WebkitTapHighlightColor:'transparent' }}>
                {loading ? 'Mengirim...' : 'Kirim Pesan'} <span style={{ display:'inline-block', transition:'transform 0.18s' }}>→</span>
              </button>
            ) : (
              <div style={{ marginTop:'20px', padding:'16px 20px', background:'rgba(76,175,80,0.12)', border:'1px solid rgba(76,175,80,0.25)', borderRadius:'6px', fontSize:'13px', color:'#a8d5aa', display:'flex', alignItems:'center', gap:'10px' }}>
                <span style={{ color:'#4caf50', fontSize:'16px' }}>✦</span>
                Pesan terkirim! Saya akan membalas dalam 1–2 hari kerja.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
export function Footer() {
  const { hover, unhover } = useCursor()
  const isMobile = useIsMobile()
  return (
    <footer style={{
      padding: isMobile ? '28px 20px calc(28px + env(safe-area-inset-bottom, 0px))' : '36px 44px',
      display:'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent:'space-between', alignItems:'center',
      gap: isMobile ? '12px' : '0',
      borderTop:'1px solid rgba(26,24,20,0.12)', fontSize:'11px', color:'#8c8880', letterSpacing:'0.06em',
      textAlign: isMobile ? 'center' : 'left',
    }}>
      <span>© 2025 {SITE.name} — Logo Designer</span>
      <span style={{ display:'flex', gap:'28px' }}>
        {Object.entries(SITE.socials).map(([key, href]) => (
          <a key={key} href={href} target="_blank" rel="noopener noreferrer"
            onMouseEnter={hover} onMouseLeave={unhover}
            style={{ color:'#8c8880', textDecoration:'none', textTransform:'capitalize', cursor: isMobile ? 'pointer' : 'none', transition:'color 0.18s' }}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </a>
        ))}
      </span>
      <span>{SITE.location}</span>
    </footer>
  )
}
