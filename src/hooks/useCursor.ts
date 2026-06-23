'use client'
import { useEffect, useRef } from 'react'

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const isTouch   = useRef(false)

  useEffect(() => {
    // Detect touch device
    isTouch.current = window.matchMedia('(hover: none) and (pointer: coarse)').matches

    const cursor = cursorRef.current
    if (!cursor || isTouch.current) {
      if (cursor) cursor.style.display = 'none'
      document.body.style.cursor = 'auto'
      return
    }

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const hover   = () => { if (!isTouch.current) cursorRef.current?.classList.add('hovering') }
  const unhover = () => { if (!isTouch.current) cursorRef.current?.classList.remove('hovering') }

  return { cursorRef, hover, unhover, isTouch }
}
