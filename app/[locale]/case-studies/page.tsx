import type { Metadata } from 'next'
import { getTranslations, getLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { caseStudies } from '@/lib/case-studies'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  return {
    title: 'Case Studies — Real B2B SEO Results',
    description: '$14.85M+ in client revenue attributed to organic search. See how B2B companies in Nearshoring, BPO, NGO, and E-commerce grew with SEO.',
    alternates: {
      canonical: `https://alfredoabreu.com/${locale}/case-studies`,
      languages: {
        en: 'https://alfredoabreu.com/en/case-studies',
        es: 'https://alfredoabreu.com/es/case-studies',
      },
    },
  }
}

export default async function CaseStudiesPage() {
  const locale = await getLocale()
  const t = await getTranslations()

  return (
    <>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <FloatingTriangles count={5} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
            {t('caseStudies.hero.eyebrow')}
          </p>
          <h1 className="text-[40px] lg:text-[56px] font-bold leading-[1.06] tracking-[-0.02em] text-midnight-navy">
            {t('caseStudies.hero.h1Part1')}{' '}
            <span className="gradient-text">{t('caseStudies.hero.h1Highlight')}</span>{' '}
            {t('caseStudies.hero.h1Part2')}
          </h1>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* GRID */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={4} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => {
              const tag = locale === 'es' ? cs.tagEs : cs.tagEn
              const title = locale === 'es' ? cs.titleEs : cs.titleEn
              const subtitle = locale === 'es' ? cs.subtitleEs : cs.subtitleEn

              return (
                <div
                  key={cs.slug}
                  className={`group relative overflow-hidden rounded-2xl border border-soft-lilac/40 bg-white hover:border-lavender-blue/40 transition-all hover:shadow-lg ${
                    i === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Cover image */}
                  <div className={i === 0 ? 'aspect-[16/6]' : 'aspect-[16/9]'}>
                    {/* TODO: image — case-studies/{cs.slug}/cover.jpg — Cover image for {cs.client} */}
                    <ImagePlaceholder
                      src={cs.coverImage}
                      alt={`${cs.client} case study`}
                      width={1200}
                      height={i === 0 ? 450 : 675}
                      label={`${cs.client} — Case Study Cover`}
                      className="w-full h-full rounded-t-2xl rounded-b-none"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-lavender-blue bg-soft-lilac/40 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-midnight-navy mb-2 group-hover:text-royal-blue transition-colors">
                      {title}
                    </h2>
                    <p className="text-sm text-midnight-navy/60 leading-relaxed mb-6">{subtitle}</p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      {cs.metrics.slice(0, 3).map((m) => (
                        <div key={m.value} className="text-center">
                          <p className="text-xl font-bold gradient-text">{m.value}</p>
                          <p className="text-xs text-midnight-navy/50">{locale === 'es' ? m.labelEs : m.label}</p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors"
                    >
                      {t('caseStudies.readCase')}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-midnight-navy py-24 overflow-hidden">
        <FloatingTriangles count={6} theme="dark" intensity="strong" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-white mb-4">
            {t('caseStudy.ctaTitle')}
          </h2>
          <p className="text-body text-white/60 mb-8 leading-relaxed">
            {t('caseStudy.ctaDesc')}
          </p>
          <Link href="/audit" className="btn-primary text-base px-8 py-3.5">
            {t('caseStudy.ctaButton')}
          </Link>
        </div>
      </section>
    </>
  )
}
