'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import { CheckCircle, ChevronDown, ChevronUp, Calendar, ArrowRight } from 'lucide-react'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'Person',
    name: 'Alfredo Abreu',
    url: 'https://alfredoabreu.com',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'B2B SEO Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strategy Audit',
          description: 'Complete SEO diagnostic with prioritized roadmap',
          price: '500',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Monthly SEO Retainer',
          description: 'Full-service monthly SEO: technical, off-page, content',
          price: '1000',
          priceCurrency: 'USD',
        },
      },
    ],
  },
}

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-soft-lilac/40">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-midnight-navy">{q}</span>
        {open ? (
          <ChevronUp size={18} className="shrink-0 text-lavender-blue" />
        ) : (
          <ChevronDown size={18} className="shrink-0 text-lavender-blue" />
        )}
      </button>
      {open && (
        <p className="text-sm text-midnight-navy/60 leading-relaxed pb-5">{a}</p>
      )}
    </div>
  )
}

export default function ServicesPage() {
  const t = useTranslations()
  const [activeTab, setActiveTab] = useState<'technical' | 'offpage' | 'content'>('technical')

  const tabs = [
    { key: 'technical' as const, label: t('services.activities.tab1') },
    { key: 'offpage' as const, label: t('services.activities.tab2') },
    { key: 'content' as const, label: t('services.activities.tab3') },
  ]

  const tabItems = {
    technical: t.raw('services.activities.technical') as string[],
    offpage: t.raw('services.activities.offpage') as string[],
    content: t.raw('services.activities.content') as string[],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <FloatingTriangles count={5} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
            {t('services.hero.eyebrow')}
          </p>
          <h1 className="text-[40px] lg:text-[56px] font-bold leading-[1.06] tracking-[-0.02em] text-midnight-navy">
            {t('services.hero.h1Part1')}{' '}
            <span className="gradient-text">{t('services.hero.h1Highlight')}</span>{' '}
            {t('services.hero.h1Part2')}
          </h1>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* STRATEGY AUDIT */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={3} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-3">
                {t('services.audit.eyebrow')}
              </p>
              <h2 className="text-[32px] font-bold tracking-[-0.015em] text-midnight-navy mb-4">
                {t('services.audit.title')}
              </h2>
              <p className="text-body text-midnight-navy/60 leading-relaxed mb-8">
                {t('services.audit.desc')}
              </p>
              <ul className="flex flex-col gap-3">
                {(t.raw('services.audit.deliverables') as string[]).map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-midnight-navy/70">
                    <CheckCircle size={16} className="text-lavender-blue shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="gradient-border">
              <div className="p-8 text-center">
                <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
                  {t('services.audit.eyebrow')}
                </p>
                <p className="text-6xl font-bold gradient-text mb-2">
                  {t('services.audit.price')}
                </p>
                <p className="text-sm text-midnight-navy/40 mb-8">one-time</p>
                <a
                  href="https://calendly.com/abreu5322/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base px-8 py-3.5 w-full"
                >
                  <Calendar size={18} />
                  {t('services.audit.cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* PRICING GRID */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={4} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('services.pricing.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">
              {t('services.pricing.h2Part1')}{' '}
              <span className="gradient-text">{t('services.pricing.h2Highlight')}</span>
            </h2>
            <p className="text-sm text-midnight-navy/50 mt-4 max-w-xl mx-auto">
              {t('services.pricing.note')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Base */}
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8">
              <h3 className="text-lg font-bold text-midnight-navy mb-1">{t('services.pricing.plan1Name')}</h3>
              <p className="text-xs text-midnight-navy/40 mb-6">{t('services.pricing.plan1Tag')}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-midnight-navy">{t('services.pricing.plan1Price')}</span>
                <span className="text-midnight-navy/40 ml-1">{t('services.pricing.plan1Period')}</span>
              </div>
              <a
                href="https://calendly.com/abreu5322/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm px-6 py-3 w-full"
              >
                {t('services.pricing.ctaBase')}
              </a>
            </div>

            {/* Growth — gradient border */}
            <div className="gradient-border">
              <div className="p-8">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-midnight-navy">{t('services.pricing.plan2Name')}</h3>
                  <span className="text-xs font-semibold text-white bg-gradient-to-r from-royal-blue to-lavender-blue px-3 py-1 rounded-full">
                    {t('services.pricing.popular')}
                  </span>
                </div>
                <p className="text-xs text-midnight-navy/40 mb-6">{t('services.pricing.plan2Tag')}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold gradient-text">{t('services.pricing.plan2Price')}</span>
                  <span className="text-midnight-navy/40 ml-1">{t('services.pricing.plan2Period')}</span>
                </div>
                <a
                  href="https://calendly.com/abreu5322/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-6 py-3 w-full"
                >
                  {t('services.pricing.ctaGrowth')}
                </a>
              </div>
            </div>

            {/* Hyper Growth */}
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8">
              <h3 className="text-lg font-bold text-midnight-navy mb-1">{t('services.pricing.plan3Name')}</h3>
              <p className="text-xs text-midnight-navy/40 mb-6">{t('services.pricing.plan3Tag')}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-midnight-navy">{t('services.pricing.plan3Price')}</span>
                <span className="text-midnight-navy/40 ml-1">{t('services.pricing.plan3Period')}</span>
              </div>
              <a
                href="https://calendly.com/abreu5322/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm px-6 py-3 w-full"
              >
                {t('services.pricing.ctaHyper')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* TABBED ACTIVITIES */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={3} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('services.activities.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">
              {t('services.activities.h2Part1')}{' '}
              <span className="gradient-text">{t('services.activities.h2Highlight')}</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-soft-lilac/20 p-1.5 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 text-sm font-semibold py-2.5 rounded-lg transition-all ${
                  activeTab === tab.key
                    ? 'bg-white text-midnight-navy shadow-sm'
                    : 'text-midnight-navy/50 hover:text-midnight-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <ul className="grid sm:grid-cols-2 gap-3">
            {tabItems[activeTab].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-midnight-navy/70 bg-soft-lilac/10 rounded-xl p-4">
                <CheckCircle size={16} className="text-lavender-blue shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-xs text-midnight-navy/40 mt-6 text-center">
            {t('services.activities.asteriskNote')}
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* FAQ */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] font-bold text-midnight-navy mb-10 text-center">
            {t('services.faq.title')}
          </h2>
          <div>
            {[
              { q: t('services.faq.q1'), a: t('services.faq.a1') },
              { q: t('services.faq.q2'), a: t('services.faq.a2') },
              { q: t('services.faq.q3'), a: t('services.faq.a3') },
              { q: t('services.faq.q4'), a: t('services.faq.a4') },
              { q: t('services.faq.q5'), a: t('services.faq.a5') },
            ].map(({ q, a }) => (
              <Accordion key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED SERVICES */}
      <section className="relative bg-soft-lilac/10 py-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-3">
              {t('services.specialized.eyebrow')}
            </p>
            <h2 className="text-[28px] lg:text-[34px] font-bold tracking-[-0.015em] text-midnight-navy">
              {t('services.specialized.h2Part1')}{' '}
              <span className="gradient-text">{t('services.specialized.h2Highlight')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="gradient-border">
              <div className="p-7">
                <h3 className="font-bold text-midnight-navy text-lg mb-3">
                  {t('services.specialized.card1Title')}
                </h3>
                <p className="text-sm text-midnight-navy/60 leading-relaxed mb-6">
                  {t('services.specialized.card1Desc')}
                </p>
                <Link
                  href="/services/seo-services-for-startups"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline"
                >
                  {t('services.specialized.card1Cta')}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="gradient-border">
              <div className="p-7">
                <h3 className="font-bold text-midnight-navy text-lg mb-3">
                  {t('services.specialized.card2Title')}
                </h3>
                <p className="text-sm text-midnight-navy/60 leading-relaxed mb-6">
                  {t('services.specialized.card2Desc')}
                </p>
                <Link
                  href="/services/generative-engine-optimization-services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline"
                >
                  {t('services.specialized.card2Cta')}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="gradient-border">
              <div className="p-7">
                <h3 className="font-bold text-midnight-navy text-lg mb-3">
                  {t('services.specialized.card3Title')}
                </h3>
                <p className="text-sm text-midnight-navy/60 leading-relaxed mb-6">
                  {t('services.specialized.card3Desc')}
                </p>
                <Link
                  href="/services/seo-services-for-small-businesses"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline"
                >
                  {t('services.specialized.card3Cta')}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-midnight-navy py-24 overflow-hidden">
        <FloatingTriangles count={6} theme="dark" intensity="strong" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold tracking-[-0.015em] text-white mb-4">
            {t('services.finalCta.h2Part1')}{' '}
            <span className="gradient-text">{t('services.finalCta.h2Highlight')}</span>
          </h2>
          <p className="text-body text-white/60 mb-8 leading-relaxed">
            {t('services.finalCta.body')}
          </p>
          <a
            href="https://calendly.com/abreu5322/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-3.5"
          >
            <Calendar size={18} />
            {t('services.finalCta.cta')}
          </a>
        </div>
      </section>
    </>
  )
}
