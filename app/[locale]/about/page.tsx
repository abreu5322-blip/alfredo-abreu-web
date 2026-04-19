import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { CheckCircle, Calendar } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  return {
    title: 'About Alfredo Abreu — B2B SEO Consultant',
    description: 'Bilingual B2B SEO consultant with an Electrical Engineering background. 6+ years, 31+ projects, $14.85M+ in client revenue attributed to organic search.',
    alternates: {
      canonical: `https://alfredoabreu.com/${locale}/about`,
      languages: {
        en: 'https://alfredoabreu.com/en/about',
        es: 'https://alfredoabreu.com/es/about',
      },
    },
  }
}

const tools = [
  'Google Search Console', 'Google Analytics 4', 'Ahrefs', 'Semrush',
  'Screaming Frog', 'Surfer SEO', 'GTmetrix', 'ChatGPT / GPT-4o',
  'Claude', 'Ubersuggest', 'AnswerThePublic', 'Looker Studio',
]

export default async function AboutPage() {
  const locale = await getLocale()
  const t = await getTranslations()

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alfredo Abreu',
    jobTitle: 'B2B SEO Consultant',
    url: 'https://alfredoabreu.com',
    email: 'abreu5322@gmail.com',
    telephone: '+58-424-237-4975',
    knowsLanguage: ['English', 'Spanish'],
    knowsAbout: ['SEO', 'B2B Marketing', 'Nearshoring', 'BPO', 'SaaS', 'AI Search Optimization'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Engineering School',
    },
    description: 'Bilingual B2B SEO consultant specializing in Nearshoring, BPO, and SaaS companies in the US market.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* INTRO */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <FloatingTriangles count={5} theme="light" intensity="subtle" />
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(141,126,253,0.18) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-100px', right: '-100px', zIndex: 0,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div>
              {/* TODO: image — profile/alfredo-about.jpg — 800×1000 — About page main photo */}
              <ImagePlaceholder
                src={undefined}
                alt="Alfredo Abreu — B2B SEO Consultant"
                width={800}
                height={1000}
                label="Alfredo Abreu — About Page Photo"
                className="w-full max-w-sm mx-auto lg:mx-0"
                priority
              />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-[40px] lg:text-[56px] font-bold leading-[1.06] tracking-[-0.02em] text-midnight-navy mb-6">
                {t('about.hero.h1')}
              </h1>
              <p className="text-body-l text-midnight-navy/70 leading-relaxed mb-10">
                {t('about.hero.intro')}
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: t('about.hero.stat1Value'), label: t('about.hero.stat1Label') },
                  { value: t('about.hero.stat2Value'), label: t('about.hero.stat2Label') },
                  { value: t('about.hero.stat3Value'), label: t('about.hero.stat3Label') },
                ].map((s) => (
                  <div key={s.value} className="text-center">
                    <p className="text-3xl font-bold gradient-text mb-1">{s.value}</p>
                    <p className="text-xs text-midnight-navy/50 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING MINDSET (dark) */}
      <section className="relative bg-midnight-navy py-24 overflow-hidden">
        <FloatingTriangles count={5} theme="dark" intensity="medium" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-white/40 font-medium mb-4">
              {t('about.engineering.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-white">
              {t('about.engineering.h2Part1')}{' '}
              <span className="gradient-text">{t('about.engineering.h2Highlight')}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: t('about.engineering.principle1Title'), desc: t('about.engineering.principle1Desc') },
              { title: t('about.engineering.principle2Title'), desc: t('about.engineering.principle2Desc') },
              { title: t('about.engineering.principle3Title'), desc: t('about.engineering.principle3Desc') },
            ].map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <CheckCircle size={24} className="text-lavender-blue mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={4} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
              {t('about.toolkit.eyebrow')}
            </p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">
              {t('about.toolkit.h2Part1')}{' '}
              <span className="gradient-text">{t('about.toolkit.h2Highlight')}</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <div
                key={tool}
                className="px-5 py-3 rounded-xl border border-soft-lilac/60 bg-soft-lilac/10 text-sm font-medium text-midnight-navy/70 hover:border-lavender-blue/50 hover:text-midnight-navy transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* RECOGNITION */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={3} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
                {t('about.recognition.eyebrow')}
              </p>
              <h2 className="text-[28px] font-bold text-midnight-navy mb-4">
                {t('about.recognition.title')}
              </h2>
              <p className="text-body text-midnight-navy/60 leading-relaxed mb-6">
                {t('about.recognition.desc')}
              </p>
              <p className="text-sm font-semibold text-lavender-blue">
                {t('about.recognition.org')}
              </p>
            </div>
            <div>
              {/* TODO: image — awards/condor-recognition.jpg — 600×800 — Speaker recognition award at Condor Marketing & Staffing */}
              <ImagePlaceholder
                src={undefined}
                alt="Alfredo Abreu speaking at Condor Marketing & Staffing"
                width={600}
                height={800}
                label="Condor Marketing — Speaking Recognition"
                className="max-w-xs mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-midnight-navy py-24 overflow-hidden">
        <FloatingTriangles count={6} theme="dark" intensity="strong" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-white mb-8">
            {t('about.finalCta.h2Part1')}{' '}
            <span className="gradient-text">{t('about.finalCta.h2Highlight')}</span>
          </h2>
          <a
            href="https://calendly.com/abreu5322/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-3.5"
          >
            <Calendar size={18} />
            {t('nav.cta')}
          </a>
        </div>
      </section>
    </>
  )
}
