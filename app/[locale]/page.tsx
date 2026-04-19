import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { CheckCircle, XCircle, ArrowRight, Calendar } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'home' })

  return {
    title: 'Alfredo Abreu — B2B SEO Consultant | Nearshoring, BPO & SaaS',
    description: t('hero.body'),
    openGraph: {
      title: 'Alfredo Abreu — B2B SEO Consultant',
      description: t('hero.body'),
      url: `https://alfredoabreu.com/${locale}`,
      locale: locale === 'en' ? 'en_US' : 'es_419',
      type: 'website',
    },
    alternates: {
      canonical: `https://alfredoabreu.com/${locale}`,
      languages: {
        en: 'https://alfredoabreu.com/en',
        es: 'https://alfredoabreu.com/es',
      },
    },
  }
}

export default async function HomePage() {
  const locale = await getLocale()
  const t = await getTranslations()

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alfredo Abreu',
    jobTitle: 'B2B SEO Consultant',
    url: 'https://alfredoabreu.com',
    sameAs: ['https://wa.me/584242374975'],
    email: 'abreu5322@gmail.com',
    knowsAbout: ['SEO', 'B2B Marketing', 'Nearshoring', 'BPO', 'SaaS'],
    description:
      'Bilingual B2B SEO Consultant specializing in Nearshoring, BPO, and SaaS companies in the US market.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-16">
        {/* Gradient glow */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: '800px',
            height: '800px',
            background:
              'radial-gradient(circle, rgba(141,126,253,0.2) 0%, rgba(255,178,255,0.12) 40%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-200px',
            right: '-100px',
            zIndex: 0,
          }}
        />
        <FloatingTriangles count={6} theme="light" intensity="subtle" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-6">
              {t('home.hero.eyebrow')}
            </p>
            <h1 className="text-[40px] lg:text-[56px] font-bold leading-[1.06] tracking-[-0.02em] text-midnight-navy mb-6">
              {t('home.hero.h1Part1')}{' '}
              <span className="gradient-text">{t('home.hero.h1Highlight')}</span>
            </h1>
            <p className="text-body-l text-midnight-navy/70 mb-10 max-w-xl leading-relaxed">
              {t('home.hero.body')}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://calendly.com/abreu5322/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-7 py-3.5"
              >
                <Calendar size={18} />
                {t('home.hero.ctaPrimary')}
              </a>
              <Link
                href="/case-studies"
                className="btn-ghost text-base px-7 py-3.5"
              >
                {t('home.hero.ctaGhost')}
              </Link>
            </div>
            <div>
              <p className="text-sm text-midnight-navy/40 mb-3 font-medium">
                {t('home.hero.trustBar')}
              </p>
              <div className="flex flex-wrap gap-2">
                {(t.raw('home.hero.trustItems') as string[]).map((item) => (
                  <span
                    key={item}
                    className="text-sm font-medium px-3 py-1.5 rounded-full border border-soft-lilac text-midnight-navy/60 bg-soft-lilac/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: metric cards */}
          <div className="flex flex-col gap-4">
            {[
              { value: t('home.hero.metric1Value'), label: t('home.hero.metric1Label') },
              { value: t('home.hero.metric2Value'), label: t('home.hero.metric2Label') },
              { value: t('home.hero.metric3Value'), label: t('home.hero.metric3Label') },
            ].map((m) => (
              <div key={m.value} className="gradient-border">
                <div className="p-6 flex items-center gap-5">
                  <div>
                    <p className="text-4xl font-bold gradient-text leading-none mb-1">
                      {m.value}
                    </p>
                    <p className="text-sm text-midnight-navy/60">{m.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <div
            style={{
              width: '600px',
              height: '400px',
              background:
                'radial-gradient(circle, rgba(141,126,253,0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: t('home.stats.stat1Value'), label: t('home.stats.stat1Label') },
              { value: t('home.stats.stat2Value'), label: t('home.stats.stat2Label') },
              { value: t('home.stats.stat3Value'), label: t('home.stats.stat3Label') },
              { value: t('home.stats.stat4Value'), label: t('home.stats.stat4Label') },
            ].map((s) => (
              <div key={s.value} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{s.value}</p>
                <p className="text-sm text-midnight-navy/60 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* THE SHIFT (dark section) */}
      <section className="relative bg-midnight-navy py-24 overflow-hidden">
        <FloatingTriangles count={5} theme="dark" intensity="medium" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-eyebrow uppercase tracking-[0.08em] text-white/40 font-medium mb-4 text-center">
            {t('home.shift.eyebrow')}
          </p>
          <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-white text-center mb-16 max-w-3xl mx-auto">
            {t('home.shift.h2Part1')}{' '}
            <span className="gradient-text">{t('home.shift.h2Highlight')}</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Old playbook */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-lg font-semibold text-white/50 mb-6 flex items-center gap-2">
                <XCircle size={20} className="text-red-400/70" />
                {t('home.shift.oldTitle')}
              </h3>
              <ul className="flex flex-col gap-4">
                {(t.raw('home.shift.oldItems') as string[]).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/50">
                    <XCircle size={16} className="text-red-400/60 mt-0.5 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What works */}
            <div className="bg-white/5 rounded-2xl p-8 border border-lavender-blue/30">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <CheckCircle size={20} className="text-lavender-blue" />
                {t('home.shift.newTitle')}
              </h3>
              <ul className="flex flex-col gap-4">
                {(t.raw('home.shift.newItems') as string[]).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <CheckCircle size={16} className="text-lavender-blue mt-0.5 shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: '700px',
            height: '700px',
            background:
              'radial-gradient(circle, rgba(255,178,255,0.15) 0%, rgba(141,126,253,0.1) 40%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-100px',
            right: '-200px',
            zIndex: 0,
          }}
        />
        <FloatingTriangles count={4} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('home.services.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">
              {t('home.services.h2Part1')}{' '}
              <span className="gradient-text">{t('home.services.h2Highlight')}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8 hover:border-lavender-blue/40 transition-colors">
              <span className="text-xs font-semibold uppercase tracking-wider text-lavender-blue bg-soft-lilac/40 px-3 py-1 rounded-full">
                {t('home.services.card1Tag')}
              </span>
              <h3 className="text-xl font-bold text-midnight-navy mt-4 mb-2">
                {t('home.services.card1Title')}
              </h3>
              <p className="text-2xl font-bold gradient-text mb-4">{t('home.services.card1Price')}</p>
              <p className="text-sm text-midnight-navy/60 leading-relaxed mb-6">
                {t('home.services.card1Desc')}
              </p>
              <Link href="/services" className="text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors">
                {t('home.services.learnMore')}
              </Link>
            </div>

            {/* Card 2 — gradient border */}
            <div className="gradient-border">
              <div className="p-8 h-full">
                <span className="text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-royal-blue to-lavender-blue px-3 py-1 rounded-full">
                  {t('home.services.card2Tag')}
                </span>
                <h3 className="text-xl font-bold text-midnight-navy mt-4 mb-2">
                  {t('home.services.card2Title')}
                </h3>
                <p className="text-2xl font-bold gradient-text mb-4">{t('home.services.card2Price')}</p>
                <p className="text-sm text-midnight-navy/60 leading-relaxed mb-6">
                  {t('home.services.card2Desc')}
                </p>
                <Link href="/services" className="text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors">
                  {t('home.services.learnMore')}
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8 hover:border-lavender-blue/40 transition-colors">
              <span className="text-xs font-semibold uppercase tracking-wider text-lavender-blue bg-soft-lilac/40 px-3 py-1 rounded-full">
                {t('home.services.card3Tag')}
              </span>
              <h3 className="text-xl font-bold text-midnight-navy mt-4 mb-2">
                {t('home.services.card3Title')}
              </h3>
              <p className="text-2xl font-bold gradient-text mb-4">{t('home.services.card3Price')}</p>
              <p className="text-sm text-midnight-navy/60 leading-relaxed mb-6">
                {t('home.services.card3Desc')}
              </p>
              <Link href="/services" className="text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors">
                {t('home.services.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* FEATURED CASE STUDY */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: '700px',
            height: '700px',
            background:
              'radial-gradient(circle, rgba(141,126,253,0.18) 0%, rgba(50,35,214,0.08) 40%, transparent 70%)',
            filter: 'blur(80px)',
            bottom: '-100px',
            left: '-200px',
            zIndex: 0,
          }}
        />
        <FloatingTriangles count={4} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('home.featuredCase.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy max-w-2xl mx-auto">
              {t('home.featuredCase.h2Part1')}{' '}
              <span className="gradient-text">{t('home.featuredCase.h2Highlight')}</span>{' '}
              {t('home.featuredCase.h2Part2')}
            </h2>
            <p className="text-body text-midnight-navy/60 mt-4 max-w-2xl mx-auto leading-relaxed">
              {t('home.featuredCase.desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { value: t('home.featuredCase.metric1Value'), label: t('home.featuredCase.metric1Label') },
              { value: t('home.featuredCase.metric2Value'), label: t('home.featuredCase.metric2Label') },
              { value: t('home.featuredCase.metric3Value'), label: t('home.featuredCase.metric3Label') },
              { value: t('home.featuredCase.metric4Value'), label: t('home.featuredCase.metric4Label') },
            ].map((m) => (
              <div key={m.value} className="gradient-border">
                <div className="p-6 text-center">
                  <p className="text-3xl font-bold gradient-text mb-1">{m.value}</p>
                  <p className="text-xs text-midnight-navy/60">{m.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/case-studies/axs"
              className="btn-primary text-base px-8 py-3.5 inline-flex"
            >
              {t('home.featuredCase.cta')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* MY APPROACH */}
      <section className="relative bg-white py-24 overflow-hidden">
        <FloatingTriangles count={3} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('home.approach.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">
              {t('home.approach.h2Part1')}{' '}
              <span className="gradient-text">{t('home.approach.h2Highlight')}</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: t('home.approach.phase1Num'), title: t('home.approach.phase1Title'), desc: t('home.approach.phase1Desc') },
              { num: t('home.approach.phase2Num'), title: t('home.approach.phase2Title'), desc: t('home.approach.phase2Desc') },
              { num: t('home.approach.phase3Num'), title: t('home.approach.phase3Title'), desc: t('home.approach.phase3Desc') },
              { num: t('home.approach.phase4Num'), title: t('home.approach.phase4Title'), desc: t('home.approach.phase4Desc') },
            ].map((phase) => (
              <div key={phase.num} className="text-center">
                <p className="text-5xl font-bold gradient-text mb-4">{phase.num}</p>
                <h3 className="text-xl font-bold text-midnight-navy mb-3">{phase.title}</h3>
                <p className="text-sm text-midnight-navy/60 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BAND (dark) */}
      <section
        id="audit"
        className="relative bg-midnight-navy py-24 overflow-hidden"
      >
        <FloatingTriangles count={8} theme="dark" intensity="strong" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-white mb-6">
            {t('home.finalCta.h2Part1')}{' '}
            <span className="gradient-text">{t('home.finalCta.h2Highlight')}</span>
          </h2>
          <p className="text-body-l text-white/60 mb-10 leading-relaxed">
            {t('home.finalCta.body')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/abreu5322/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-3.5"
            >
              <Calendar size={18} />
              {t('home.finalCta.ctaPrimary')}
            </a>
            <a
              href="#"
              className="btn-ghost-white text-base px-8 py-3.5"
            >
              {t('home.finalCta.ctaSecondary')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
