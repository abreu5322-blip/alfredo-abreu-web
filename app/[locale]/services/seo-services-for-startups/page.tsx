import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import FaqAccordion from './FaqAccordion'
import {
  Settings,
  Map,
  FileText,
  Link as LinkIcon,
  Sparkles,
  BarChart3,
  User,
  Globe,
  Cpu,
  XCircle,
  CheckCircle,
  ChevronRight,
} from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('startupSeo')

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://alfredoabreu.com/${locale}/services/seo-services-for-startups`,
      languages: {
        en: 'https://alfredoabreu.com/en/services/seo-services-for-startups',
        es: 'https://alfredoabreu.com/es/services/seo-services-for-startups',
      },
    },
  }
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Services for Startups',
  description:
    'Data-driven SEO for startups that turns organic traffic into revenue. Technical SEO, content strategy, and AI search optimization engineered for early-stage and growth-stage startups.',
  provider: {
    '@type': 'Person',
    name: 'Alfredo Abreu',
    url: 'https://alfredoabreu.com',
  },
  areaServed: 'US',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Startup SEO Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Audit for Startups',
          price: '500',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Monthly SEO for Startups',
          price: '1000',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hyper Growth SEO for Startups',
          price: '1500',
          priceCurrency: 'USD',
        },
      },
    ],
  },
}

const includedIcons = [Settings, Map, FileText, LinkIcon, Sparkles, BarChart3]
const whyMeIcons = [User, Globe, Cpu]

export default async function StartupSeoPage() {
  const locale = await getLocale()
  const t = await getTranslations('startupSeo')

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('breadcrumb.home'),
        item: `https://alfredoabreu.com/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('breadcrumb.services'),
        item: `https://alfredoabreu.com/${locale}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: t('breadcrumb.current'),
        item: `https://alfredoabreu.com/${locale}/services/seo-services-for-startups`,
      },
    ],
  }

  const leftItems = t.raw('problem.leftItems') as string[]
  const rightItems = t.raw('problem.rightItems') as string[]

  const includedCards = [
    { titleKey: 'included.card1Title', descKey: 'included.card1Desc' },
    { titleKey: 'included.card2Title', descKey: 'included.card2Desc' },
    { titleKey: 'included.card3Title', descKey: 'included.card3Desc' },
    { titleKey: 'included.card4Title', descKey: 'included.card4Desc' },
    { titleKey: 'included.card5Title', descKey: 'included.card5Desc' },
    { titleKey: 'included.card6Title', descKey: 'included.card6Desc' },
  ] as const

  const whyMeCards = [
    { titleKey: 'whyMe.card1Title', descKey: 'whyMe.card1Desc' },
    { titleKey: 'whyMe.card2Title', descKey: 'whyMe.card2Desc' },
    { titleKey: 'whyMe.card3Title', descKey: 'whyMe.card3Desc' },
  ] as const

  const plan1Features = t.raw('pricing.plan1Features') as string[]
  const plan2Features = t.raw('pricing.plan2Features') as string[]
  const plan3Features = t.raw('pricing.plan3Features') as string[]

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        {/* Gradient glow top-right */}
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #8D7EFD 0%, #3223D6 50%, transparent 70%)',
          }}
        />
        <FloatingTriangles count={5} theme="light" intensity="subtle" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-1.5 text-xs text-midnight-navy/40 mb-8"
          >
            <Link href="/" className="hover:text-royal-blue transition-colors no-underline">
              {t('breadcrumb.home')}
            </Link>
            <ChevronRight size={12} />
            <Link href="/services" className="hover:text-royal-blue transition-colors no-underline">
              {t('breadcrumb.services')}
            </Link>
            <ChevronRight size={12} />
            <span className="text-midnight-navy/70">{t('breadcrumb.current')}</span>
          </nav>

          <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
            {t('hero.eyebrow')}
          </p>

          <h1 className="text-[40px] lg:text-[56px] font-bold leading-[1.06] tracking-[-0.02em] text-midnight-navy mb-6">
            {t('hero.h1Part1')}{' '}
            <span className="gradient-text">{t('hero.h1Highlight')}</span>{' '}
            {t('hero.h1Part2')}
          </h1>

          <p className="text-body-l text-midnight-navy/60 leading-relaxed max-w-2xl mx-auto mb-10">
            {t('hero.body')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="https://calendly.com/abreu5322/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-3.5"
            >
              {t('hero.ctaPrimary')}
            </a>
            <Link
              href="/case-studies"
              className="text-base font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline"
            >
              {t('hero.ctaGhost')}
            </Link>
          </div>

          <p className="text-xs text-midnight-navy/40 font-medium tracking-wide">
            {t('hero.trustBar')}
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* THE STARTUP SEO PROBLEM */}
      <section className="relative bg-white py-20 overflow-hidden">
        {/* Gradient glow bottom-left */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #FFB2FF 0%, #8D7EFD 50%, transparent 70%)',
          }}
        />
        <FloatingTriangles count={3} theme="light" intensity="subtle" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('problem.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy max-w-3xl mx-auto">
              {t('problem.h2Part1')}{' '}
              <span className="gradient-text">{t('problem.h2Highlight')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left — bad */}
            <div className="bg-red-50/40 rounded-2xl border border-red-100 p-8">
              <p className="font-semibold text-midnight-navy mb-6">{t('problem.leftTitle')}</p>
              <ul className="flex flex-col gap-4">
                {leftItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-midnight-navy/70">
                    <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — good */}
            <div className="bg-soft-lilac/10 rounded-2xl border border-soft-lilac/40 p-8">
              <p className="font-semibold text-midnight-navy mb-6">{t('problem.rightTitle')}</p>
              <ul className="flex flex-col gap-4">
                {rightItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-midnight-navy/70">
                    <CheckCircle size={16} className="text-lavender-blue shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* HOW I HELP STARTUPS — 4-phase */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={4} theme="light" intensity="subtle" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('approach.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy mb-4">
              {t('approach.h2Part1')}{' '}
              <span className="gradient-text">{t('approach.h2Highlight')}</span>
            </h2>
            <p className="text-body text-midnight-navy/60 max-w-xl mx-auto">
              {t('approach.subhead')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(
              [
                { num: '01', title: t('approach.phase1Title'), desc: t('approach.phase1Desc') },
                { num: '02', title: t('approach.phase2Title'), desc: t('approach.phase2Desc') },
                { num: '03', title: t('approach.phase3Title'), desc: t('approach.phase3Desc') },
                { num: '04', title: t('approach.phase4Title'), desc: t('approach.phase4Desc') },
              ] as const
            ).map(({ num, title, desc }) => (
              <div
                key={num}
                className="bg-white rounded-2xl border border-soft-lilac/40 p-6 hover:border-lavender-blue/40 hover:shadow-md transition-all"
              >
                <p className="text-4xl font-bold gradient-text mb-4 leading-none">{num}</p>
                <h3 className="font-bold text-midnight-navy mb-3">{title}</h3>
                <p className="text-sm text-midnight-navy/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* WHAT'S INCLUDED — 6-card grid */}
      <section className="relative bg-white py-20 overflow-hidden">
        {/* Gradient glow center */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #8D7EFD 0%, #3223D6 60%, transparent 80%)',
          }}
        />
        <FloatingTriangles count={3} theme="light" intensity="subtle" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('included.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">
              {t('included.h2Part1')}{' '}
              <span className="gradient-text">{t('included.h2Part2')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedCards.map(({ titleKey, descKey }, i) => {
              const Icon = includedIcons[i]
              return (
                <div
                  key={titleKey}
                  className="bg-white rounded-2xl border border-soft-lilac/40 p-6 hover:border-lavender-blue/40 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-soft-lilac/30 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-lavender-blue" />
                  </div>
                  <h3 className="font-bold text-midnight-navy mb-2">{t(titleKey)}</h3>
                  <p className="text-sm text-midnight-navy/60 leading-relaxed">{t(descKey)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* PRICING */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={4} theme="light" intensity="subtle" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('pricing.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy mb-3">
              {t('pricing.h2')}
            </h2>
            <p className="text-sm text-midnight-navy/50 max-w-xl mx-auto">
              {t('pricing.subhead')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Plan 1 — Audit */}
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-midnight-navy/40 mb-1">
                  {t('pricing.plan1Tag')}
                </p>
                <h3 className="text-lg font-bold text-midnight-navy">{t('pricing.plan1Name')}</h3>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-midnight-navy">{t('pricing.plan1Price')}</span>
                <span className="text-midnight-navy/40 ml-2 text-sm">{t('pricing.plan1Period')}</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan1Features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-midnight-navy/70">
                    <CheckCircle size={15} className="text-lavender-blue shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/abreu5322/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm px-6 py-3 w-full text-center"
              >
                {t('pricing.plan1Cta')}
              </a>
            </div>

            {/* Plan 2 — Monthly SEO (gradient border, popular) */}
            <div className="gradient-border flex flex-col">
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-midnight-navy/40 mb-1">
                      {t('pricing.plan2Tag')}
                    </p>
                    <h3 className="text-lg font-bold text-midnight-navy">{t('pricing.plan2Name')}</h3>
                  </div>
                  <span className="text-xs font-semibold text-white bg-gradient-to-r from-royal-blue to-lavender-blue px-3 py-1 rounded-full">
                    {t('pricing.plan2Tag')}
                  </span>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold gradient-text">{t('pricing.plan2Price')}</span>
                  <span className="text-midnight-navy/40 ml-2 text-sm">{t('pricing.plan2Period')}</span>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan2Features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-midnight-navy/70">
                      <CheckCircle size={15} className="text-lavender-blue shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/abreu5322/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-6 py-3 w-full text-center"
                >
                  {t('pricing.plan2Cta')}
                </a>
              </div>
            </div>

            {/* Plan 3 — Hyper Growth */}
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-midnight-navy/40 mb-1">
                  {t('pricing.plan3Tag')}
                </p>
                <h3 className="text-lg font-bold text-midnight-navy">{t('pricing.plan3Name')}</h3>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-midnight-navy">{t('pricing.plan3Price')}</span>
                <span className="text-midnight-navy/40 ml-2 text-sm">{t('pricing.plan3Period')}</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan3Features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-midnight-navy/70">
                    <CheckCircle size={15} className="text-lavender-blue shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/abreu5322/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm px-6 py-3 w-full text-center"
              >
                {t('pricing.plan3Cta')}
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-midnight-navy/40">
            <Link
              href="/services"
              className="text-royal-blue hover:text-lavender-blue transition-colors no-underline font-medium"
            >
              {t('pricing.allPlansLink')}
            </Link>
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* WHY STARTUPS CHOOSE ME — dark section */}
      <section className="relative bg-midnight-navy py-20 overflow-hidden">
        <FloatingTriangles count={5} theme="dark" intensity="medium" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('whyMe.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-white">
              {t('whyMe.h2Part1')}{' '}
              {t('whyMe.h2Part2')}{' '}
              <span className="gradient-text">{t('whyMe.h2Highlight')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyMeCards.map(({ titleKey, descKey }, i) => {
              const Icon = whyMeIcons[i]
              return (
                <div
                  key={titleKey}
                  className="bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <Icon size={22} className="text-lavender-blue" />
                  </div>
                  <h3 className="font-bold text-white mb-3">{t(titleKey)}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{t(descKey)}</p>
                </div>
              )
            })}
          </div>

          {/* Engineering background → /about link */}
          <p className="text-center mt-10 text-sm text-white/40">
            <Link
              href="/about"
              className="text-lavender-blue hover:text-white transition-colors no-underline"
            >
              {locale === 'es' ? 'Conocer mi historia →' : 'Learn more about my background →'}
            </Link>
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* RESULTS / SOCIAL PROOF */}
      <section className="relative bg-white py-20 overflow-hidden">
        {/* Gradient glow */}
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #FFB2FF 0%, #8D7EFD 60%, transparent 80%)',
          }}
        />
        <FloatingTriangles count={3} theme="light" intensity="subtle" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
            {t('results.eyebrow')}
          </p>
          <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy mb-14">
            {t('results.h2')}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {(
              [
                { value: t('results.stat1Value'), label: t('results.stat1Label'), href: '/case-studies/axs' },
                { value: t('results.stat2Value'), label: t('results.stat2Label'), href: '/case-studies' },
                { value: t('results.stat3Value'), label: t('results.stat3Label'), href: '/case-studies' },
                { value: t('results.stat4Value'), label: t('results.stat4Label'), href: '/case-studies' },
              ] as const
            ).map(({ value, label, href }) => (
              <Link
                key={value}
                href={href}
                className="gradient-border block no-underline group"
              >
                <div className="p-6 text-center">
                  <p className="text-3xl font-bold gradient-text mb-1">{value}</p>
                  <p className="text-xs text-midnight-navy/60 leading-snug">{label}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline"
          >
            {t('results.cta')}
          </Link>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* FAQ */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('faq.eyebrow')}
            </p>
            <h2 className="text-[32px] font-bold tracking-[-0.015em] text-midnight-navy">
              {t('faq.h2Part1')}{' '}
              <span className="gradient-text">{t('faq.h2Highlight')}</span>
            </h2>
          </div>

          <FaqAccordion items={faqItems} />

          <div className="mt-10 text-center">
            <p className="text-sm text-midnight-navy/50 mb-4">
              {locale === 'es'
                ? '¿Tienes otra pregunta? Escríbeme directamente.'
                : 'Have another question? Reach out directly.'}
            </p>
            <Link
              href="/contact"
              className="text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline"
            >
              {locale === 'es' ? 'Contactar →' : 'Get in touch →'}
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA BAND */}
      <section className="relative bg-midnight-navy py-24 overflow-hidden">
        <FloatingTriangles count={6} theme="dark" intensity="strong" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold tracking-[-0.015em] text-white mb-4">
            {t('finalCta.h2')}
          </h2>
          <p className="text-body text-white/60 mb-8 leading-relaxed">
            {t('finalCta.body')}
          </p>
          <a
            href="https://calendly.com/abreu5322/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-3.5"
          >
            {t('finalCta.cta')}
          </a>
        </div>
      </section>
    </>
  )
}
