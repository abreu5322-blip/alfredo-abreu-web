import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import FaqAccordion from './FaqAccordion'
import { ChevronRight, CheckCircle, XCircle, DollarSign, Globe, Sparkles, Settings, Search, FileText, MapPin, LinkIcon, PenTool, Store, ShoppingBag, Briefcase, Monitor, GraduationCap } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations('smallBusinessSeo')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: { title: t('meta.title'), description: t('meta.description'), type: 'website', images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
    alternates: {
      canonical: `https://alfredoabreu.com/${locale}/services/seo-services-for-small-businesses`,
      languages: { en: 'https://alfredoabreu.com/en/services/seo-services-for-small-businesses', es: 'https://alfredoabreu.com/es/services/seo-services-for-small-businesses' },
    },
  }
}

export default async function SmallBusinessSeoPage() {
  const locale = await getLocale()
  const t = await getTranslations('smallBusinessSeo')

  const faqItems = [1,2,3,4,5,6,7].map(i => ({ q: t(`faq.q${i}`), a: t(`faq.a${i}`) }))

  const serviceSchema = {
    '@context':'https://schema.org','@type':'Service',
    name:'SEO Services for Small Businesses',
    description:'Affordable SEO services for small businesses. Transparent pricing, no long-term contracts, senior execution.',
    provider:{'@type':'Person',name:'Alfredo Abreu',url:'https://alfredoabreu.com'},
    areaServed:['US','LatAm'],
    hasOfferCatalog:{'@type':'OfferCatalog',name:'Small Business SEO Plans',itemListElement:[
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'SEO Audit',price:'500',priceCurrency:'USD'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Monthly SEO',price:'1000',priceCurrency:'USD'}},
      {'@type':'Offer',itemOffered:{'@type':'Service',name:'Growth SEO',price:'1500',priceCurrency:'USD'}},
    ]},
  }
  const faqSchema = {'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqItems.map(({q,a})=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))}
  const breadcrumbSchema = {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
    {'@type':'ListItem',position:1,name:t('breadcrumb.home'),item:`https://alfredoabreu.com/${locale}`},
    {'@type':'ListItem',position:2,name:t('breadcrumb.services'),item:`https://alfredoabreu.com/${locale}/services`},
    {'@type':'ListItem',position:3,name:t('breadcrumb.current'),item:`https://alfredoabreu.com/${locale}/services/seo-services-for-small-businesses`},
  ]}

  const problemLeft = t.raw('problem.leftItems') as string[]
  const problemRight = t.raw('problem.rightItems') as string[]
  const plan1F = t.raw('pricing.plan1Features') as string[]
  const plan2F = t.raw('pricing.plan2Features') as string[]
  const plan3F = t.raw('pricing.plan3Features') as string[]

  const approachCards = [1,2,3].map(i => ({ title: t(`approach.card${i}Title`), desc: t(`approach.card${i}Desc`) }))
  const approachIcons = [DollarSign, Globe, Sparkles]
  const includedCards = [1,2,3,4,5,6].map(i => ({ title: t(`included.card${i}Title`), desc: t(`included.card${i}Desc`) }))
  const includedIcons = [Settings, Search, FileText, MapPin, LinkIcon, PenTool]
  const resultCards = [1,2,3,4].map(i => ({ metric: t(`results.card${i}Metric`), label: t(`results.card${i}Label`), desc: t(`results.card${i}Desc`), href: t(`results.card${i}Href`) }))
  const whoCards = [1,2,3,4,5,6].map(i => ({ title: t(`whoFor.card${i}Title`), desc: t(`whoFor.card${i}Desc`) }))
  const whoIcons = [Store, ShoppingBag, Briefcase, Monitor, GraduationCap, Globe]
  const compRows = [1,2,3,4,5,6].map(i => ({ feature: t(`comparison.row${i}Feature`), agency: t(`comparison.row${i}Agency`), alfredo: t(`comparison.row${i}Alfredo`) }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>

      {/* S1 — HERO */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none" style={{background:'radial-gradient(circle,#8D7EFD 0%,#3223D6 50%,transparent 70%)'}}/>
        <FloatingTriangles count={5} theme="light" intensity="subtle"/>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs text-midnight-navy/40 mb-8">
            <Link href="/" className="hover:text-royal-blue transition-colors no-underline">{t('breadcrumb.home')}</Link><ChevronRight size={12}/>
            <Link href="/services" className="hover:text-royal-blue transition-colors no-underline">{t('breadcrumb.services')}</Link><ChevronRight size={12}/>
            <span className="text-midnight-navy/70">{t('breadcrumb.current')}</span>
          </nav>
          <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('hero.eyebrow')}</p>
          <h1 className="text-[40px] lg:text-[56px] font-bold leading-[1.06] tracking-[-0.02em] text-midnight-navy mb-6">
            {t('hero.h1Part1')} <span className="gradient-text">{t('hero.h1Highlight')}</span>
          </h1>
          <p className="text-body-l text-midnight-navy/60 leading-relaxed max-w-2xl mx-auto mb-10">{t('hero.body')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="https://calendly.com/abreu5322/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-3.5">{t('hero.ctaPrimary')}</a>
            <a href="#pricing" className="text-base font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline">{t('hero.ctaGhost')}</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[1,2,3,4].map(i=>(
              <div key={i} className="gradient-border"><div className="p-4 text-center">
                <p className="text-2xl font-bold gradient-text mb-1">{t(`hero.metric${i}Value`)}</p>
                <p className="text-[11px] text-midnight-navy/60 leading-snug">{t(`hero.metric${i}Label`)}</p>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider"/>

      {/* S2 — AGENCY PROBLEM */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div aria-hidden className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none" style={{background:'radial-gradient(circle,#FFB2FF 0%,#8D7EFD 50%,transparent 70%)'}}/>
        <FloatingTriangles count={3} theme="light" intensity="subtle"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('problem.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy max-w-3xl mx-auto mb-4">
              {t('problem.h2Part1')} <span className="gradient-text">{t('problem.h2Highlight')}</span>
            </h2>
            <p className="text-body-l text-midnight-navy/60 max-w-2xl mx-auto">{t('problem.body')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50/40 rounded-2xl border border-red-100 p-8">
              <p className="font-semibold text-midnight-navy mb-6">{t('problem.leftTitle')}</p>
              <ul className="flex flex-col gap-4">{problemLeft.map((item,i)=>(
                <li key={i} className="flex items-start gap-3 text-sm text-midnight-navy/70"><XCircle size={16} className="text-red-400 shrink-0 mt-0.5"/>{item}</li>
              ))}</ul>
            </div>
            <div className="bg-soft-lilac/10 rounded-2xl border border-soft-lilac/40 p-8">
              <p className="font-semibold text-midnight-navy mb-6">{t('problem.rightTitle')}</p>
              <ul className="flex flex-col gap-4">{problemRight.map((item,i)=>(
                <li key={i} className="flex items-start gap-3 text-sm text-midnight-navy/70"><CheckCircle size={16} className="text-lavender-blue shrink-0 mt-0.5"/>{item}</li>
              ))}</ul>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-divider"/>

      {/* S3 — RIGHT APPROACH */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={3} theme="light" intensity="subtle"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('approach.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy max-w-3xl mx-auto mb-4">
              {t('approach.h2Part1')} <span className="gradient-text">{t('approach.h2Highlight')}</span>
            </h2>
            <p className="text-body-l text-midnight-navy/60 max-w-2xl mx-auto">{t('approach.body')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {approachCards.map((c,i)=>{const Icon=approachIcons[i]; return(
              <div key={i} className="bg-white rounded-2xl border border-soft-lilac/40 p-6 hover:border-lavender-blue/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-soft-lilac/30 flex items-center justify-center mb-4"><Icon size={20} className="text-lavender-blue"/></div>
                <h3 className="font-bold text-midnight-navy mb-2">{c.title}</h3>
                <p className="text-sm text-midnight-navy/60 leading-relaxed">{c.desc}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      <div className="gradient-divider"/>

      {/* S4 — SERVICES INCLUDED */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04] pointer-events-none" style={{background:'radial-gradient(circle,#8D7EFD 0%,#3223D6 60%,transparent 80%)'}}/>
        <FloatingTriangles count={4} theme="light" intensity="subtle"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('included.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">{t('included.h2')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedCards.map((c,i)=>{const Icon=includedIcons[i]; return(
              <div key={i} className="bg-white rounded-2xl border border-soft-lilac/40 p-6 hover:border-lavender-blue/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-soft-lilac/30 flex items-center justify-center mb-4"><Icon size={20} className="text-lavender-blue"/></div>
                <h3 className="font-bold text-midnight-navy mb-2">{c.title}</h3>
                <p className="text-sm text-midnight-navy/60 leading-relaxed">{c.desc}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      <div className="gradient-divider"/>

      {/* S5 — PRICING */}
      <section id="pricing" className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={4} theme="light" intensity="subtle"/>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('pricing.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy mb-4">
              {t('pricing.h2Part1')} <span className="gradient-text">{t('pricing.h2Highlight')}</span>
            </h2>
            <p className="text-body-l text-midnight-navy/60 max-w-2xl mx-auto">{t('pricing.subhead')}</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Plan 1 */}
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8 flex flex-col">
              <h3 className="text-lg font-bold text-midnight-navy mb-2">{t('pricing.plan1Name')}</h3>
              <div className="mb-6"><span className="text-4xl font-bold text-midnight-navy">{t('pricing.plan1Price')}</span><span className="text-midnight-navy/40 ml-2 text-sm">{t('pricing.plan1Period')}</span></div>
              <ul className="flex flex-col gap-3 mb-6 flex-1">{plan1F.map(f=>(<li key={f} className="flex items-start gap-2 text-sm text-midnight-navy/70"><CheckCircle size={15} className="text-lavender-blue shrink-0 mt-0.5"/>{f}</li>))}</ul>
              <p className="text-xs text-midnight-navy/40 mb-4">{t('pricing.plan1Ideal')}</p>
              <a href="https://calendly.com/abreu5322/30min" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm px-6 py-3 w-full text-center">{t('pricing.plan1Cta')}</a>
            </div>
            {/* Plan 2 — featured */}
            <div className="gradient-border flex flex-col"><div className="p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-midnight-navy">{t('pricing.plan2Name')}</h3>
                <span className="text-xs font-semibold text-white bg-gradient-to-r from-royal-blue to-lavender-blue px-3 py-1 rounded-full">{t('pricing.plan2Tag')}</span>
              </div>
              <div className="mb-6"><span className="text-4xl font-bold gradient-text">{t('pricing.plan2Price')}</span><span className="text-midnight-navy/40 ml-2 text-sm">{t('pricing.plan2Period')}</span></div>
              <ul className="flex flex-col gap-3 mb-6 flex-1">{plan2F.map(f=>(<li key={f} className="flex items-start gap-2 text-sm text-midnight-navy/70"><CheckCircle size={15} className="text-lavender-blue shrink-0 mt-0.5"/>{f}</li>))}</ul>
              <p className="text-xs text-midnight-navy/40 mb-4">{t('pricing.plan2Ideal')}</p>
              <a href="https://calendly.com/abreu5322/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-3 w-full text-center">{t('pricing.plan2Cta')}</a>
            </div></div>
            {/* Plan 3 */}
            <div className="bg-white rounded-2xl border border-soft-lilac/40 p-8 flex flex-col">
              <h3 className="text-lg font-bold text-midnight-navy mb-2">{t('pricing.plan3Name')}</h3>
              <div className="mb-6"><span className="text-4xl font-bold text-midnight-navy">{t('pricing.plan3Price')}</span><span className="text-midnight-navy/40 ml-2 text-sm">{t('pricing.plan3Period')}</span></div>
              <ul className="flex flex-col gap-3 mb-6 flex-1">{plan3F.map(f=>(<li key={f} className="flex items-start gap-2 text-sm text-midnight-navy/70"><CheckCircle size={15} className="text-lavender-blue shrink-0 mt-0.5"/>{f}</li>))}</ul>
              <p className="text-xs text-midnight-navy/40 mb-4">{t('pricing.plan3Ideal')}</p>
              <a href="https://calendly.com/abreu5322/30min" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm px-6 py-3 w-full text-center">{t('pricing.plan3Cta')}</a>
            </div>
          </div>
          <div className="bg-soft-lilac/10 rounded-xl border border-soft-lilac/30 p-4 text-center text-xs text-midnight-navy/50">{t('pricing.note')}</div>
        </div>
      </section>

      <div className="gradient-divider"/>

      {/* S6 — REAL RESULTS */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none" style={{background:'radial-gradient(circle,#FFB2FF 0%,#8D7EFD 60%,transparent 80%)'}}/>
        <FloatingTriangles count={3} theme="light" intensity="subtle"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('results.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">{t('results.h2')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {resultCards.map((c,i)=>(
              <Link key={i} href={c.href as '/case-studies'} className="gradient-border block no-underline hover:shadow-lg transition-shadow"><div className="p-6 text-center">
                <p className="text-3xl font-bold gradient-text mb-2">{c.metric}</p>
                <p className="text-sm font-semibold text-midnight-navy mb-1">{c.label}</p>
                <p className="text-xs text-midnight-navy/50">{c.desc}</p>
              </div></Link>
            ))}
          </div>
          <p className="text-center text-xs text-midnight-navy/40 mb-6">{t('results.note')}</p>
          <p className="text-center"><Link href="/case-studies" className="text-sm font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline">{t('results.cta')}</Link></p>
        </div>
      </section>

      <div className="gradient-divider"/>

      {/* S7 — HONEST COMPARISON (dark) */}
      <section className="relative bg-midnight-navy py-20 overflow-hidden">
        <FloatingTriangles count={5} theme="dark" intensity="medium"/>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('comparison.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-white">
              {t('comparison.h2Part1')} <span className="gradient-text">{t('comparison.h2Highlight')}</span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-white/50 font-medium">{t('comparison.colFeature')}</th>
                <th className="text-left py-4 px-4 text-white/50 font-medium">{t('comparison.colAgency')}</th>
                <th className="text-left py-4 px-4 text-white/50 font-medium">{t('comparison.colAlfredo')}</th>
              </tr></thead>
              <tbody>{compRows.map((r,i)=>(
                <tr key={i} className={`border-b border-white/5 ${i%2===0?'bg-white/[0.02]':''}`}>
                  <td className="py-4 px-4 text-white/80 font-medium">{r.feature}</td>
                  <td className="py-4 px-4 text-red-300/80">{r.agency}</td>
                  <td className="py-4 px-4 text-lavender-blue font-medium">{r.alfredo}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="gradient-divider"/>

      {/* S8 — WHO I HELP */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={3} theme="light" intensity="subtle"/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('whoFor.eyebrow')}</p>
            <h2 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.015em] text-midnight-navy">{t('whoFor.h2')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoCards.map((c,i)=>{const Icon=whoIcons[i]; return(
              <div key={i} className="bg-white rounded-2xl border border-soft-lilac/40 p-6 hover:border-lavender-blue/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-soft-lilac/30 flex items-center justify-center mb-4"><Icon size={20} className="text-lavender-blue"/></div>
                <h3 className="font-bold text-midnight-navy mb-2">{c.title}</h3>
                <p className="text-sm text-midnight-navy/60 leading-relaxed">{c.desc}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      <div className="gradient-divider"/>

      {/* S9 — FAQ */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">{t('faq.eyebrow')}</p>
            <h2 className="text-[32px] font-bold tracking-[-0.015em] text-midnight-navy">{t('faq.h2')}</h2>
          </div>
          <FaqAccordion items={faqItems}/>
        </div>
      </section>

      {/* S10 — FINAL CTA */}
      <section className="relative bg-midnight-navy py-24 overflow-hidden">
        <FloatingTriangles count={6} theme="dark" intensity="strong"/>
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold tracking-[-0.015em] text-white mb-4">{t('cta.h2')}</h2>
          <p className="text-body text-white/60 mb-8 leading-relaxed">{t('cta.body')}</p>
          <a href="https://calendly.com/abreu5322/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-3.5">{t('cta.ctaPrimary')}</a>
          <p className="text-xs text-white/30 mt-6">{t('cta.secondary')}</p>
        </div>
      </section>
    </>
  )
}
