import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  src?: string
  alt: string
  width: number
  height: number
  label: string
  className?: string
  priority?: boolean
}

export default function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  label,
  className = '',
  priority = false,
}: ImagePlaceholderProps) {
  const isPlaceholder = !src || src.startsWith('TODO:')

  if (isPlaceholder) {
    const aspectRatio = (height / width) * 100

    return (
      <div
        className={`relative overflow-hidden rounded-2xl ${className}`}
        style={{ paddingBottom: `${aspectRatio}%` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{
            background: 'linear-gradient(135deg, #D9D7FE 0%, rgba(141,126,253,0.3) 50%, rgba(255,178,255,0.2) 100%)',
            border: '1.5px dashed rgba(141,126,253,0.4)',
            borderRadius: 'inherit',
          }}
        >
          <ImageIcon className="w-10 h-10 text-lavender-blue opacity-60" />
          <span className="text-sm font-medium text-midnight-navy opacity-60 text-center px-4">{label}</span>
          <span className="text-xs text-midnight-navy opacity-40">{width}×{height}px</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className="object-cover w-full h-full"
      />
    </div>
  )
}
