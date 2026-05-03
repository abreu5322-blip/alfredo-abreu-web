'use client'

import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

export function TabVisibilityMessage() {
  const t = useTranslations('tabMessage')

  useEffect(() => {
    const originalTitle = document.title

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = t('away')
      } else {
        document.title = originalTitle
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [t])

  return null
}
