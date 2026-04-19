'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'

interface FloatingTrianglesProps {
  count?: number
  theme?: 'light' | 'dark'
  intensity?: 'subtle' | 'medium' | 'strong'
}

const SIZES = {
  xs: 60,
  s: 100,
  m: 180,
  l: 260,
  xl: 340,
}

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

function getOpacity(
  intensity: 'subtle' | 'medium' | 'strong',
  base: number
): number {
  if (intensity === 'subtle') return base * 0.7
  if (intensity === 'strong') return Math.min(base * 1.4, 0.28)
  return base
}

function getSize(idx: number): number {
  const r = seededRandom(idx * 7)
  if (r < 0.4) return SIZES.xs + seededRandom(idx * 13) * (SIZES.s - SIZES.xs)
  if (r < 0.8)
    return SIZES.m + seededRandom(idx * 11) * (SIZES.l - SIZES.m)
  return SIZES.l + seededRandom(idx * 17) * (SIZES.xl - SIZES.l)
}

function getColor(idx: number, theme: 'light' | 'dark'): string {
  const r = seededRandom(idx * 3)
  if (theme === 'dark') {
    if (r < 0.3) return 'url(#gradDark)'
    if (r < 0.6) return 'rgba(141,126,253,0.9)'
    if (r < 0.85) return 'rgba(255,178,255,0.8)'
    return 'rgba(50,35,214,0.7)'
  }
  if (r < 0.3) return 'url(#grad)'
  if (r < 0.6) return '#8D7EFD'
  if (r < 0.85) return '#FFB2FF'
  return '#3223D6'
}

interface Triangle {
  id: number
  size: number
  color: string
  opacity: number
  rotation: number
  top: string
  left: string
  blur: boolean
  animX: number[]
  animY: number[]
  animR: number[]
  duration: number
  delay: number
}

export default function FloatingTriangles({
  count = 5,
  theme = 'light',
  intensity = 'medium',
}: FloatingTrianglesProps) {
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const triangles = useMemo<Triangle[]>(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = getSize(i)
      const baseOpacity = 0.12 + seededRandom(i * 5) * 0.1
      return {
        id: i,
        size,
        color: getColor(i, theme),
        opacity: getOpacity(intensity, baseOpacity),
        rotation: seededRandom(i * 9) * 360,
        top: `${seededRandom(i * 2) * 90}%`,
        left: `${seededRandom(i * 4) * 90}%`,
        blur: seededRandom(i * 6) > 0.75,
        animX: [0, (seededRandom(i * 15) - 0.5) * 90, (seededRandom(i * 16) - 0.5) * 60, (seededRandom(i * 17) - 0.5) * 40, 0],
        animY: [0, (seededRandom(i * 18) - 0.5) * 70, (seededRandom(i * 19) - 0.5) * 50, (seededRandom(i * 20) - 0.5) * 30, 0],
        animR: [0, (seededRandom(i * 21) - 0.5) * 40, (seededRandom(i * 22) - 0.5) * 30, (seededRandom(i * 23) - 0.5) * 24, 0],
        duration: 18 + seededRandom(i * 24) * 10,
        delay: seededRandom(i * 25) * 5,
      }
    })
  }, [count, theme, intensity])

  const gradId = theme === 'dark' ? 'gradDark' : 'grad'

  // Only render on the client — avoids SSR/hydration mismatch from Framer
  // Motion's motion.div and the float arithmetic in seededRandom producing
  // different serialised HTML between server and client environments.
  if (!mounted) return null

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D9D7FE" />
            <stop offset="33%" stopColor="#8D7EFD" />
            <stop offset="66%" stopColor="#3223D6" />
            <stop offset="100%" stopColor="#FFB2FF" />
          </linearGradient>
          <linearGradient id="gradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D9D7FE" stopOpacity="0.7" />
            <stop offset="33%" stopColor="#8D7EFD" stopOpacity="0.6" />
            <stop offset="66%" stopColor="#3223D6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFB2FF" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {triangles.map((t) => (
        <motion.div
          key={t.id}
          style={{
            position: 'absolute',
            top: t.top,
            left: t.left,
            width: t.size,
            height: t.size,
            opacity: t.opacity,
            willChange: 'transform',
            filter: t.blur ? 'blur(2px)' : undefined,
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: t.animX,
                  y: t.animY,
                  rotate: t.animR,
                }
          }
          transition={
            prefersReducedMotion
              ? {}
              : {
                  duration: t.duration,
                  delay: t.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        >
          <svg
            width={t.size}
            height={t.size}
            viewBox="0 0 100 100"
            style={{ transform: `rotate(${t.rotation}deg)` }}
          >
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D9D7FE" />
                <stop offset="33%" stopColor="#8D7EFD" />
                <stop offset="66%" stopColor="#3223D6" />
                <stop offset="100%" stopColor="#FFB2FF" />
              </linearGradient>
            </defs>
            <polygon
              points="50,10 90,80 10,80"
              fill={t.color}
              stroke={t.color}
              strokeWidth="12"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
