'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [pct, setPct]       = useState(0)
  const [phase, setPhase]   = useState<'loading' | 'split' | 'done'>('loading')

  useEffect(() => {
    const steps = [
      { to: 30,  ms: 80  },
      { to: 58,  ms: 220 },
      { to: 78,  ms: 160 },
      { to: 92,  ms: 260 },
      { to: 100, ms: 180 },
    ]
    let t: ReturnType<typeof setTimeout>
    let elapsed = 0

    steps.forEach(step => {
      elapsed += step.ms
      t = setTimeout(() => setPct(step.to), elapsed)
    })

    // After 100% → split exit
    elapsed += 300
    setTimeout(() => setPhase('split'), elapsed)
    setTimeout(() => setPhase('done'),  elapsed + 700)

    return () => clearTimeout(t)
  }, [])

  if (phase === 'done') return null

  return (
    <AnimatePresence>
      {phase === 'loading' && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[2000] bg-ink flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {/* Mark */}
          <motion.div
            initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
            animate={{ scale: 1,   rotate:  0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.1 }}
            className="w-16 h-16 mb-9"
          >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="38" stroke="rgba(245,242,236,0.9)" strokeWidth="3"/>
              <circle cx="50" cy="50" r="20" fill="rgba(245,242,236,0.9)"/>
              <line x1="50" y1="12" x2="50" y2="88" stroke="#1a1814" strokeWidth="2"/>
              <line x1="12" y1="50" x2="88" y2="50" stroke="#1a1814" strokeWidth="2"/>
            </svg>
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] tracking-[0.18em] uppercase text-white/35 mb-5"
          >
            Loading Portfolio
          </motion.p>

          {/* Track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-[120px] h-px bg-white/10 rounded overflow-hidden"
          >
            <div
              className="h-full bg-accent rounded transition-all duration-100 ease-linear"
              style={{ width: `${pct}%` }}
            />
          </motion.div>

          {/* Number */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-serif text-[11px] tracking-widest text-white/25 mt-3 tabular-nums"
          >
            {pct}%
          </motion.span>
        </motion.div>
      )}

      {/* Split exit panels */}
      {phase === 'split' && (
        <>
          <motion.div
            key="top"
            className="fixed inset-x-0 top-0 h-[50vh] bg-ink z-[2000]"
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            key="bottom"
            className="fixed inset-x-0 bottom-0 h-[50vh] bg-ink z-[2000]"
            initial={{ y: 0 }}
            animate={{ y: '100%' }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          />
        </>
      )}
    </AnimatePresence>
  )
}
