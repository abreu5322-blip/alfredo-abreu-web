'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FaqItem {
  q: string
  a: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b border-soft-lilac/40">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
          >
            <span className="font-semibold text-midnight-navy">{item.q}</span>
            {openIndex === i ? (
              <ChevronUp size={18} className="shrink-0 text-lavender-blue" />
            ) : (
              <ChevronDown size={18} className="shrink-0 text-lavender-blue" />
            )}
          </button>
          {openIndex === i && (
            <p className="text-sm text-midnight-navy/60 leading-relaxed pb-5">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}
