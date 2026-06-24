'use client'

import { useState } from 'react'
import { ImageLightbox, ClickableImage } from '@/components/ui/ImageLightbox'
import ImagePlaceholder from '@/components/ImagePlaceholder'

interface ImageData {
  src: string
  alt: string
  width: number
  height: number
  label: string
}

export default function CaseStudyGallery({ images }: { images: ImageData[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const realImages = images.filter((img) => img.src && !img.src.startsWith('TODO:'))

  function openLightbox(index: number) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-4">
        {images.map((img, i) => {
          const isPlaceholder = !img.src || img.src.startsWith('TODO:')

          if (isPlaceholder) {
            return (
              <div key={img.label}>
                <ImagePlaceholder
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  label={img.label}
                />
                <p className="text-xs text-midnight-navy/40 text-center mt-2">{img.alt}</p>
              </div>
            )
          }

          const realIndex = realImages.findIndex((r) => r.src === img.src)

          return (
            <div key={img.label}>
              <ClickableImage
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                label={img.label}
                onClick={() => openLightbox(realIndex >= 0 ? realIndex : 0)}
              />
              <p className="text-xs text-midnight-navy/40 text-center mt-2">{img.alt}</p>
            </div>
          )
        })}
      </div>

      <ImageLightbox
        images={realImages.map((img) => ({ src: img.src, alt: img.alt, label: img.label }))}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
