'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxImage {
  src: string
  alt: string
  label?: string
}

interface ImageLightboxProps {
  images: LightboxImage[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [prevInitialIndex, setPrevInitialIndex] = useState(initialIndex)
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen)
  const [isZoomed, setIsZoomed] = useState(false)
  const [prevCurrentIndex, setPrevCurrentIndex] = useState(currentIndex)

  const constraintsRef = useRef<HTMLDivElement>(null)

  // Sync state if initialIndex or isOpen changes
  if (initialIndex !== prevInitialIndex || isOpen !== prevIsOpen) {
    setPrevInitialIndex(initialIndex)
    setPrevIsOpen(isOpen)
    setCurrentIndex(initialIndex)
    setPrevCurrentIndex(initialIndex)
    setIsZoomed(false)
  }

  // Reset zoom state if currentIndex changes
  if (currentIndex !== prevCurrentIndex) {
    setPrevCurrentIndex(currentIndex)
    setIsZoomed(false)
  }

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, goNext, goPrev])

  if (!images.length) return null

  const current = images[currentIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            className="relative z-10 w-full max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              ref={constraintsRef}
              className="relative overflow-hidden flex items-center justify-center rounded-lg w-full h-[75vh]"
            >
              <motion.div
                drag={isZoomed}
                dragConstraints={constraintsRef}
                dragElastic={0.15}
                animate={{
                  scale: isZoomed ? 2.5 : 1,
                  x: isZoomed ? undefined : 0,
                  y: isZoomed ? undefined : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`relative flex items-center justify-center cursor-zoom-in ${
                  isZoomed ? 'cursor-zoom-out' : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  setIsZoomed(!isZoomed)
                }}
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={1600}
                  height={900}
                  className="object-contain max-h-[75vh] w-auto h-auto rounded-lg select-none pointer-events-none"
                  priority
                />
              </motion.div>
            </div>
            {/* Caption */}
            {current.label && (
              <p className="mt-4 text-sm text-white/70 text-center max-w-xl select-none">
                {current.label}
              </p>
            )}
            {/* Counter */}
            {images.length > 1 && (
              <p className="mt-2 text-xs text-white/40 select-none">
                {currentIndex + 1} / {images.length}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface ClickableImageProps {
  src: string
  alt: string
  width: number
  height: number
  label: string
  onClick: () => void
}

export function ClickableImage({ src, alt, width, height, label, onClick }: ClickableImageProps) {
  const isPlaceholder = !src || src.startsWith('TODO:')

  if (isPlaceholder) return null

  return (
    <button
      onClick={onClick}
      className="block w-full text-left cursor-zoom-in group/img focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender-blue rounded-2xl"
      aria-label={`View full size: ${label}`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-slate-50 transition-shadow group-hover/img:shadow-lg group-hover/img:ring-2 group-hover/img:ring-lavender-blue/30">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="object-contain w-full h-auto transition-transform duration-300 group-hover/img:scale-[1.02]"
        />
        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center bg-midnight-navy/0 group-hover/img:bg-midnight-navy/10 transition-colors rounded-2xl">
          <span className="opacity-0 group-hover/img:opacity-100 transition-opacity text-xs font-medium text-white bg-midnight-navy/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
            Click to expand
          </span>
        </div>
      </div>
    </button>
  )
}
