'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function toggleLocale() {
    const next = locale === 'en' ? 'es' : 'en'
    router.replace(pathname, { locale: next })
  }

  const links = [
    { href: '/services', label: t('services') },
    { href: '/case-studies', label: t('caseStudies') },
    { href: '/about', label: t('about') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.92)'
          : 'rgba(255,255,255,1)',
        backdropFilter: scrolled ? 'blur(12px)' : undefined,
        borderBottom: scrolled ? '1px solid rgba(141,126,253,0.15)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ color: '#3223D6' }}
          >
            Alfredo Abreu
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-midnight-navy hover:text-royal-blue transition-colors no-underline"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="text-sm font-semibold text-midnight-navy border border-soft-lilac rounded-lg px-3 py-1.5 hover:border-lavender-blue transition-colors"
            aria-label="Switch language"
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </button>
          <Link
            href="/audit"
            className="btn-primary text-sm px-5 py-2.5 no-underline"
          >
            {t('cta')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-midnight-navy"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-soft-lilac/30 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium text-midnight-navy py-2 border-b border-soft-lilac/20 no-underline"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => { toggleLocale(); setMobileOpen(false) }}
              className="text-sm font-semibold text-midnight-navy border border-soft-lilac rounded-lg px-3 py-1.5"
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>
            <Link
              href="/audit"
              className="btn-primary text-sm px-5 py-2.5 no-underline flex-1 text-center"
              onClick={() => setMobileOpen(false)}
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
