'use client'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Phase = 'idle' | 'in' | 'out'

export function useCurtain() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [label, setLabel] = useState('')

  const wipe = useCallback((targetId: string, labelText: string, onMidpoint: () => void) => {
    setLabel(labelText)
    setPhase('in')

    setTimeout(() => {
      onMidpoint()
      setPhase('out')
      setTimeout(() => setPhase('idle'), 700)
    }, 640)
  }, [])

  return { phase, label, wipe }
}

interface Props {
  phase: 'idle' | 'in' | 'out'
  label: string
}

export default function CurtainTransition({ phase, label }: Props) {
  if (phase === 'idle') return null

  return (
    <div style={{ position:'fixed', inset:0, zIndex:800, pointerEvents:'none', display:'grid', gridTemplateColumns:'repeat(5,1fr)' }}>
      {[0,1,2,3,4].map(i => (
        <motion.div key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: phase === 'in' ? 1 : 0 }}
          style={{ background:'#1a1814', transformOrigin: phase === 'in' ? 'bottom' : 'top' }}
          transition={{ duration: 0.52, ease:[0.76,0,0.24,1], delay: i * 0.05 }}
        />
      ))}
      <motion.div
        initial={{ opacity:0, scale:0.92 }}
        animate={{ opacity: phase==='in' ? 1 : 0, scale: phase==='in' ? 1 : 0.92 }}
        transition={{ delay: phase==='in' ? 0.22 : 0, duration:0.2 }}
        style={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-50%,-50%)',
          fontFamily:'DM Serif Display,serif',
          fontSize:'clamp(18px,3vw,38px)',
          color:'#f5f2ec', letterSpacing:'0.08em',
          whiteSpace:'nowrap', pointerEvents:'none',
        }}
      >
        {label}
      </motion.div>
    </div>
  )
}
