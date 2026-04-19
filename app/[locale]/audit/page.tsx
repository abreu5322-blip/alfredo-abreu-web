import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import { CheckCircle } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  return {
    title: 'Free 30-Minute SEO Audit — Alfredo Abreu',
    description: 'Book a free 30-minute SEO audit. No pitch, no commitment. Get a live review of your site, your top keyword opportunities, and clear next steps.',
    alternates: {
      canonical: `https://alfredoabreu.com/${locale}/audit`,
      languages: {
        en: 'https://alfredoabreu.com/en/audit',
        es: 'https://alfredoabreu.com/es/audit',
      },
    },
  }
}

export default async function AuditPage() {
  const t = await getTranslations()

  return (
    <>
      <section className="relative bg-white min-h-screen pt-28 pb-20 overflow-hidden">
        <FloatingTriangles count={6} theme="light" intensity="subtle" />
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(141,126,253,0.2) 0%, rgba(255,178,255,0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-100px',
            right: '-100px',
            zIndex: 0,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div>
              <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
                {t('audit.hero.eyebrow')}
              </p>
              <h1 className="text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-midnight-navy mb-6">
                {t('audit.hero.h1Part1')}{' '}
                <span className="gradient-text">{t('audit.hero.h1Highlight')}</span>
              </h1>
              <p className="text-body-l text-midnight-navy/60 leading-relaxed mb-10">
                {t('audit.hero.body')}
              </p>

              <ul className="flex flex-col gap-4 mb-10">
                {(t.raw('audit.bullets') as string[]).map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-body text-midnight-navy/70">
                    <CheckCircle size={18} className="text-lavender-blue shrink-0 mt-0.5" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Social proof */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-soft-lilac/40">
                {[
                  t('audit.socialProof.stat1'),
                  t('audit.socialProof.stat2'),
                  t('audit.socialProof.stat3'),
                ].map((stat) => (
                  <div key={stat} className="text-center">
                    <p className="font-bold text-midnight-navy text-sm">{stat}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Calendly embed */}
            <div className="bg-soft-lilac/10 rounded-2xl border border-soft-lilac/40 p-8">
              <h2 className="text-xl font-bold text-midnight-navy mb-6 text-center">
                {t('audit.calendlyTitle')}
              </h2>

              {/* TODO: Replace with actual Calendly embed widget */}
              {/* <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/alfredoabreu/30min"
                style={{ minWidth: '320px', height: '630px' }}
              /> */}

              {/* Placeholder until Calendly is connected */}
              <div className="text-center py-12 space-y-4">
                <div
                  className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #D9D7FE, #8D7EFD, #3223D6, #FFB2FF)' }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <p className="text-sm text-midnight-navy/60 max-w-xs mx-auto">
                  Calendly widget will appear here. Connect your Calendly URL to activate booking.
                </p>
                <a
                  href="https://calendly.com/alfredoabreu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-6 py-3 inline-flex"
                >
                  Book on Calendly →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
