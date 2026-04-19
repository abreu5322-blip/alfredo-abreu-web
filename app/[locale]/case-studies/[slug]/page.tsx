import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { caseStudies, getCaseStudyBySlug } from '@/lib/case-studies'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)
  const locale = await getLocale()
  if (!cs) return {}
  const title = locale === 'es' ? cs.titleEs : cs.titleEn
  const subtitle = locale === 'es' ? cs.subtitleEs : cs.subtitleEn
  return {
    title,
    description: subtitle,
    alternates: {
      canonical: `https://alfredoabreu.com/${locale}/case-studies/${slug}`,
      languages: {
        en: `https://alfredoabreu.com/en/case-studies/${slug}`,
        es: `https://alfredoabreu.com/es/case-studies/${slug}`,
      },
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)
  if (!cs) notFound()

  const locale = await getLocale()
  const t = await getTranslations()

  const title = locale === 'es' ? cs.titleEs : cs.titleEn
  const subtitle = locale === 'es' ? cs.subtitleEs : cs.subtitleEn
  const tag = locale === 'es' ? cs.tagEs : cs.tagEn
  const challenge = locale === 'es' ? cs.challengeEs : cs.challengeEn
  const approach = locale === 'es' ? cs.approachEn : cs.approachEn
  const results = locale === 'es' ? cs.resultsEs : cs.resultsEn

  const currentIdx = caseStudies.findIndex((c) => c.slug === slug)
  const nextCase = caseStudies[(currentIdx + 1) % caseStudies.length]

  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: subtitle,
    author: {
      '@type': 'Person',
      name: 'Alfredo Abreu',
    },
    publisher: {
      '@type': 'Person',
      name: 'Alfredo Abreu',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
      />

      {/* HEADER */}
      <section className="relative bg-white pt-32 pb-16 overflow-hidden">
        <FloatingTriangles count={5} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-midnight-navy/50 hover:text-royal-blue transition-colors mb-8 no-underline"
          >
            <ArrowLeft size={16} />
            {t('caseStudy.backToAll')}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-lavender-blue bg-soft-lilac/40 px-3 py-1 rounded-full">
              {tag}
            </span>
          </div>

          <h1 className="text-[32px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-midnight-navy mb-6">
            {title}
          </h1>
          <p className="text-body-l text-midnight-navy/60 leading-relaxed max-w-2xl">{subtitle}</p>

          {/* Metric badges */}
          <div className="flex flex-wrap gap-4 mt-10">
            {cs.metrics.map((m) => (
              <div key={m.value} className="gradient-border">
                <div className="px-6 py-4 text-center min-w-[120px]">
                  <p className="text-2xl font-bold gradient-text">{m.value}</p>
                  <p className="text-xs text-midnight-navy/60">{locale === 'es' ? m.labelEs : m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* CONTENT */}
      <section className="relative bg-white py-16 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* The Client */}
          <div>
            <h2 className="text-2xl font-bold text-midnight-navy mb-6">{t('caseStudy.theClient')}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Industry', value: cs.clientInfo.industry },
                { label: 'Size', value: cs.clientInfo.size },
                { label: 'Location', value: cs.clientInfo.location },
              ].map(({ label, value }) => (
                <div key={label} className="bg-soft-lilac/20 rounded-xl p-4">
                  <p className="text-xs text-midnight-navy/40 uppercase tracking-wider mb-1">{label}</p>
                  <p className="font-semibold text-midnight-navy text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Challenge */}
          <div>
            <h2 className="text-2xl font-bold text-midnight-navy mb-6">{t('caseStudy.theChallenge')}</h2>
            <div className="space-y-4">
              {challenge.map((p, i) => (
                <p key={i} className="text-body text-midnight-navy/70 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>

          {/* The Approach */}
          <div>
            <h2 className="text-2xl font-bold text-midnight-navy mb-6">{t('caseStudy.theApproach')}</h2>
            <ol className="space-y-6">
              {approach.map((step, i) => (
                <li key={i} className="flex gap-5">
                  <span className="text-3xl font-bold gradient-text shrink-0 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-body text-midnight-navy/70 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* The Results */}
          <div>
            <h2 className="text-2xl font-bold text-midnight-navy mb-6">{t('caseStudy.theResults')}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {cs.resultMetrics.map((m) => (
                <div key={m.value} className="gradient-border">
                  <div className="p-5 text-center">
                    <p className="text-2xl font-bold gradient-text mb-1">{m.value}</p>
                    <p className="text-xs text-midnight-navy/60">{locale === 'es' ? m.labelEs : m.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-body text-midnight-navy/70 leading-relaxed">{results}</p>
          </div>

          {/* Visual Proof */}
          <div>
            <h2 className="text-2xl font-bold text-midnight-navy mb-6">{t('caseStudy.visualProof')}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {cs.images.map((img) => (
                <div key={img.label}>
                  {/* TODO: image — {img.src.replace('TODO: ', '')} — {img.width}×{img.height} — {img.label} */}
                  <ImagePlaceholder
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    label={img.label}
                  />
                  <p className="text-xs text-midnight-navy/40 text-center mt-2">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* NEXT CASE */}
      {nextCase && (
        <section className="relative bg-white py-12 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <span className="text-sm text-midnight-navy/40">{t('caseStudy.nextCase')}</span>
            <Link
              href={`/case-studies/${nextCase.slug}`}
              className="inline-flex items-center gap-2 font-semibold text-royal-blue hover:text-lavender-blue transition-colors"
            >
              {locale === 'es' ? nextCase.titleEs : nextCase.titleEn}
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      )}

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
