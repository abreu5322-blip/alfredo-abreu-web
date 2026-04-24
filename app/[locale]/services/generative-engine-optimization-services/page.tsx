import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import FaqAccordion from './FaqAccordion'
import { Search, Code, FileCode, BookOpen, Activity, Layers, Eye, Award, Zap, ChevronRight, CheckCircle, XCircle } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('geoServices')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: { title: t('meta.title'), description: t('meta.description'), type: 'website', images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
    alternates: {
      canonical: `https://alfredoabreu.com/${locale}/services/generative-engine-optimization-services`,
      languages: { en: 'https://alfredoabreu.com/en/services/generative-engine-optimization-services', es: 'https://alfredoabreu.com/es/services/generative-engine-optimization-services' },
    },
  }
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Generative Engine Optimization Services',
  description: 'Get your brand cited by ChatGPT, Perplexity, Gemini, Copilot, and Google AI Overviews. GEO services engineered for B2B visibility in AI search engines.',
  provider: { '@type': 'Person', name: 'Alfredo Abreu', url: 'https://alfredoabreu.com' },
  areaServed: 'US',
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'GEO Plans', itemListElement: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GEO Audit', price: '500', priceCurrency: 'USD' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full GEO + SEO', price: '1200', priceCurrency: 'USD' } },
  ]},
}

const includedIcons = [Search, Code, FileCode, BookOpen, Activity, Layers]
const futureIcons = [Eye, Award, Zap]

export default async function GeoServicesPage() {
  const locale = await getLocale()
  const t = await getTranslations('geoServices')

  const faqItems = [
    { q: t('faq.q1'), a: t('faq.a1') }, { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') }, { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') }, { q: t('faq.q6'), a: t('faq.a6') },
  ]

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }

  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: t('breadcrumb.home'), item: `https://alfredoabreu.com/${locale}` },
    { '@type': 'ListItem', position: 2, name: t('breadcrumb.services'), item: `https://alfredoabreu.com/${locale}/services` },
    { '@type': 'ListItem', position: 3, name: t('breadcrumb.current'), item: `https://alfredoabreu.com/${locale}/services/generative-engine-optimization-services` },
  ]}

  const leftItems = t.raw('comparison.leftItems') as string[]
  const rightItems = t.raw('comparison.rightItems') as string[]
  const plan1Features = t.raw('pricing.plan1Features') as string[]
  const plan2Features = t.raw('pricing.plan2Features') as string[]

  const engines = [1, 2, 3, 4, 5].map(i => ({ name: t(`shift.engine${i}Name`), desc: t(`shift.engine${i}Desc`) }))
  const resultEngines = [1, 2, 3, 4, 5].map(i => ({ name: t(`results.engine${i}Name`), citations: t(`results.engine${i}Citations`), pages: t(`results.engine${i}Pages`) }))

  const includedCards = [1, 2, 3, 4, 5, 6].map(i => ({ title: t(`included.card${i}Title`), desc: t(`included.card${i}Desc`) }))
  const futureCards = [1, 2, 3].map(i => ({ title: t(`future.card${i}Title`), desc: t(`future.card${i}Desc`) }))
  const methodPhases = [1, 2, 3, 4].map(i => ({ title: t(`method.phase${i}Title`), desc: t(`method.phase${i}Desc`) }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none" style={{ background: 'radial-gradient(circle, #8D7EFD 0%, #3223D6 50%, transparent 70%)' }} />
        <FloatingTriangles count={5} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-midnight-navy/40 mb-8">
            <Link href="/" className="hover:text-royal-blue transition-colors no-underline">{t('breadcrumb.home')}</Link>
            <ChevronRight size={12} />
            <Link href="/services" className="hover:text-royal-blue transition-colors no-underline">{t('breadcrumb.services')}</Link>
            <ChevronRight size={12} />
            <span className="text-midnight-navy/70">{t('breadcrumb.current')}</span>
          </nav>
          <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('hero.eyebrow')}</p>
          <h1 className="text-[40px] lg:text-[56px] font-bold leading-[1.06] tracking-[-0.02em] text-midnight-navy mb-6">
            {t('hero.h1Part1')} <span className="gradient-text">{t('hero.h1Highlight')}</span>
          </h1>
          <p className="text-body-l text-midnight-navy/60 leading-relaxed max-w-2xl mx-auto mb-10">{t('hero.body')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="https://calendly.com/abreu5322/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-3.5">{t('hero.ctaPrimary')}</a>
            <Link href="/case-studies" className="text-base font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline">{t('hero.ctaGhost')}</Link>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[1, 2, 3].map(i => (
              <div key={i} className="gradient-border"><div className="p-4 text-center">
                <p className="text-2xl font-bold gradient-text mb-1">{t(`hero.metric${i}Value`)}</p>
                <p className="text-[11px] text-midnight-navy/60 leading-snug">{t(`hero.metric${i}Label`)}</p>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* AI SEARCH SHIFT */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div aria-hidden className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, #FFB2FF 0%, #8D7EFD 50%, transparent 70%)' }} />
        <FloatingTriangles count={3} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('shift.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy max-w-3xl mx-auto mb-4">
              {t('shift.h2Part1')} <span className="gradient-text">{t('shift.h2Highlight')}</span>
            </h2>
            <p className="text-body-l text-midnight-navy/60 max-w-2xl mx-auto">{t('shift.body')}</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {engines.map(e => (
              <div key={e.name} className="min-w-[180px] snap-start bg-white rounded-2xl border border-soft-lilac/40 p-5 text-center hover:border-lavender-blue/40 hover:shadow-md transition-all flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-soft-lilac/30 flex items-center justify-center mx-auto mb-3"><Sparkle className="text-lavender-blue" /></div>
                <h3 className="font-bold text-midnight-navy text-sm mb-1">{e.name}</h3>
                <p className="text-xs text-midnight-navy/50">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* GEO vs SEO */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={3} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('comparison.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy max-w-3xl mx-auto">
              {t('comparison.h2Part1')} <span className="gradient-text">{t('comparison.h2Highlight')}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50/40 rounded-2xl border border-red-100 p-8">
              <p className="font-semibold text-midnight-navy mb-6">{t('comparison.leftTitle')}</p>
              <ul className="flex flex-col gap-4">{leftItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-midnight-navy/70"><XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />{item}</li>
              ))}</ul>
            </div>
            <div className="bg-soft-lilac/10 rounded-2xl border border-soft-lilac/40 p-8">
              <p className="font-semibold text-midnight-navy mb-6">{t('comparison.rightTitle')}</p>
              <ul className="flex flex-col gap-4">{rightItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-midnight-navy/70"><CheckCircle size={16} className="text-lavender-blue shrink-0 mt-0.5" />{item}</li>
              ))}</ul>
            </div>
          </div>
          <p className="text-center text-sm text-midnight-navy/50 mt-8 font-medium">{t('comparison.bottomNote')}</p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* GEO METHOD */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04] pointer-events-none" style={{ background: 'radial-gradient(circle, #8D7EFD 0%, #3223D6 60%, transparent 80%)' }} />
        <FloatingTriangles count={4} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('method.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">
              {t('method.h2Part1')} <span className="gradient-text">{t('method.h2Highlight')}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodPhases.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-soft-lilac/40 p-6 hover:border-lavender-blue/40 hover:shadow-md transition-all">
                <p className="text-4xl font-bold gradient-text mb-4 leading-none">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-bold text-midnight-navy mb-3">{p.title}</h3>
                <p className="text-sm text-midnight-navy/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* WHAT'S INCLUDED */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={3} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('included.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">{t('included.h2')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedCards.map((c, i) => {
              const Icon = includedIcons[i]
              return (
                <div key={i} className="bg-white rounded-2xl border border-soft-lilac/40 p-6 hover:border-lavender-blue/40 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-soft-lilac/30 flex items-center justify-center mb-4"><Icon size={20} className="text-lavender-blue" /></div>
                  <h3 className="font-bold text-midnight-navy mb-2">{c.title}</h3>
                  <p className="text-sm text-midnight-navy/60 leading-relaxed">{c.desc}</p>
                  {i === 5 && <Link href="/services/seo-services-for-startups" className="inline-block mt-3 text-xs font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline">{locale === 'es' ? 'Ver SEO para Startups →' : 'See SEO for Startups →'}</Link>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* RESULTS */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, #FFB2FF 0%, #8D7EFD 60%, transparent 80%)' }} />
        <FloatingTriangles count={3} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('results.eyebrow')}</p>
          <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy mb-14">
            {t('results.h2Part1')} <span className="gradient-text">{t('results.h2Highlight')}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {resultEngines.map(e => (
              <div key={e.name} className="gradient-border block"><div className="p-5 text-center">
                <p className="text-xs font-semibold text-midnight-navy/50 mb-2">{e.name}</p>
                <p className="text-3xl font-bold gradient-text mb-1">{e.citations}</p>
                <p className="text-[11px] text-midnight-navy/40">{t('results.citationsLabel')}</p>
                <p className="text-sm font-semibold text-midnight-navy mt-2">{e.pages}</p>
                <p className="text-[11px] text-midnight-navy/40">{t('results.pagesLabel')}</p>
              </div></div>
            ))}
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-1 text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline">{t('results.cta')}</Link>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* PRICING */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={4} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('pricing.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">{t('pricing.h2')}</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8 flex flex-col">
              <div className="mb-6"><h3 className="text-lg font-bold text-midnight-navy">{t('pricing.plan1Name')}</h3></div>
              <div className="mb-8"><span className="text-4xl font-bold text-midnight-navy">{t('pricing.plan1Price')}</span><span className="text-midnight-navy/40 ml-2 text-sm">{t('pricing.plan1Period')}</span></div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">{plan1Features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-midnight-navy/70"><CheckCircle size={15} className="text-lavender-blue shrink-0 mt-0.5" />{f}</li>
              ))}</ul>
              <a href="https://calendly.com/abreu5322/30min" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm px-6 py-3 w-full text-center">{t('pricing.plan1Cta')}</a>
            </div>
            <div className="gradient-border flex flex-col"><div className="p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-midnight-navy">{t('pricing.plan2Name')}</h3>
                <span className="text-xs font-semibold text-white bg-gradient-to-r from-royal-blue to-lavender-blue px-3 py-1 rounded-full">{t('pricing.plan2Tag')}</span>
              </div>
              <div className="mb-8"><span className="text-4xl font-bold gradient-text">{t('pricing.plan2Price')}</span><span className="text-midnight-navy/40 ml-2 text-sm">{t('pricing.plan2Period')}</span></div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">{plan2Features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-midnight-navy/70"><CheckCircle size={15} className="text-lavender-blue shrink-0 mt-0.5" />{f}</li>
              ))}</ul>
              <a href="https://calendly.com/abreu5322/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-3 w-full text-center">{t('pricing.plan2Cta')}</a>
            </div></div>
          </div>
          <p className="text-center text-sm"><Link href="/services" className="text-royal-blue hover:text-lavender-blue transition-colors no-underline font-medium">{t('pricing.allPlansLink')}</Link></p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* FUTURE - DARK */}
      <section className="relative bg-midnight-navy py-20 overflow-hidden">
        <FloatingTriangles count={5} theme="dark" intensity="medium" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('future.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-white">
              {t('future.h2Part1')} <span className="gradient-text">{t('future.h2Highlight')}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {futureCards.map((c, i) => {
              const Icon = futureIcons[i]
              return (
                <div key={i} className="bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6"><Icon size={22} className="text-lavender-blue" /></div>
                  <h3 className="font-bold text-white mb-3">{c.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{c.desc}</p>
                </div>
              )
            })}
          </div>
          <p className="text-center mt-10 text-sm text-white/40">
            <Link href="/about" className="text-lavender-blue hover:text-white transition-colors no-underline">{locale === 'es' ? 'Conocer mi historia →' : 'Learn more about my background →'}</Link>
          </p>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* FAQ */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('faq.eyebrow')}</p>
            <h2 className="text-[32px] font-bold tracking-[-0.015em] text-midnight-navy">{t('faq.h2')}</h2>
          </div>
          <FaqAccordion items={faqItems} />
          <div className="mt-10 text-center">
            <Link href="/contact" className="text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline">
              {locale === 'es' ? 'Contactar →' : 'Get in touch →'}
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-midnight-navy py-24 overflow-hidden">
        <FloatingTriangles count={6} theme="dark" intensity="strong" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold tracking-[-0.015em] text-white mb-4">{t('finalCta.h2')}</h2>
          <p className="text-body text-white/60 mb-8 leading-relaxed">{t('finalCta.body')}</p>
          <a href="https://calendly.com/abreu5322/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-3.5">{t('finalCta.cta')}</a>
        </div>
      </section>
    </>
  )
}

function Sparkle({ className }: { className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/></svg>
}
