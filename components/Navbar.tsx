'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function toggleLocale() {
    const next = locale === 'en' ? 'es' : 'en'
    router.replace(pathname, { locale: next })
  }

  const serviceSubLinks = [
    { href: '/services', label: t('allServices') },
    { href: '/services/seo-services-for-startups', label: t('seoForStartups') },
  ]

  const links = [
    { href: '/services', label: t('services'), hasDropdown: true },
    { href: '/case-studies', label: t('caseStudies') },
    { href: '/about', label: t('about') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ]

  function handleDropdownEnter() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setServicesOpen(true)
  }

  function handleDropdownLeave() {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 150)
  }

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
          {links.map((l) =>
            l.hasDropdown ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={l.href}
                  className="text-sm font-medium text-midnight-navy hover:text-royal-blue transition-colors no-underline inline-flex items-center gap-1"
                >
                  {l.label}
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200"
                    style={{
                      transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </Link>

                {/* Dropdown */}
                <div
                  className="absolute top-full left-1/2 pt-2"
                  style={{
                    transform: 'translateX(-50%)',
                    opacity: servicesOpen ? 1 : 0,
                    pointerEvents: servicesOpen ? 'auto' : 'none',
                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                  }}
                >
                  <div
                    className="rounded-xl border border-soft-lilac/40 py-2 min-w-[220px]"
                    style={{
                      background: 'rgba(255,255,255,0.97)',
                      backdropFilter: 'blur(16px)',
                      boxShadow: '0 8px 32px rgba(50, 35, 214, 0.10), 0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    {serviceSubLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-midnight-navy hover:text-royal-blue hover:bg-soft-lilac/15 transition-colors no-underline"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-midnight-navy hover:text-royal-blue transition-colors no-underline"
              >
                {l.label}
              </Link>
            )
          )}
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
          <a
            href="https://calendly.com/abreu5322/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-5 py-2.5"
          >
            {t('cta')}
          </a>
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
          {links.map((l) =>
            l.hasDropdown ? (
              <div key={l.href}>
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between text-base font-medium text-midnight-navy py-2 border-b border-soft-lilac/20"
                >
                  {l.label}
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-200"
                    style={{
                      transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    {serviceSubLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="text-sm text-midnight-navy/70 hover:text-royal-blue py-1.5 no-underline transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-base font-medium text-midnight-navy py-2 border-b border-soft-lilac/20 no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            )
          )}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => { toggleLocale(); setMobileOpen(false) }}
              className="text-sm font-semibold text-midnight-navy border border-soft-lilac rounded-lg px-3 py-1.5"
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </button>
            <a
              href="https://calendly.com/abreu5322/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2.5 flex-1 text-center"
              onClick={() => setMobileOpen(false)}
            >
              {t('cta')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
