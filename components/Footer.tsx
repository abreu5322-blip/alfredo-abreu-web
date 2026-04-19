import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-midnight-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold text-white mb-3">Alfredo Abreu</p>
            <p className="text-sm text-white/60 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="mailto:abreu5322@gmail.com"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/584242374975"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
              {t('footer.nav')}
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/services', label: t('nav.services') },
                { href: '/case-studies', label: t('nav.caseStudies') },
                { href: '/about', label: t('nav.about') },
                { href: '/blog', label: t('nav.blog') },
                { href: '/contact', label: t('nav.contact') },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-white/60 hover:text-white transition-colors no-underline"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
              Ready to grow?
            </p>
            <a
              href="https://calendly.com/abreu5322/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3 inline-block"
            >
              {t('nav.cta')}
            </a>
            <p className="text-sm text-white/40 mt-4">
              abreu5322@gmail.com
            </p>
            <p className="text-sm text-white/40 mt-1">
              +58 424 237 4975
            </p>
          </div>
        </div>

        <div className="gradient-divider mt-12 mb-6 opacity-20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>{t('footer.legal')}</p>
          <p>{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  )
}
