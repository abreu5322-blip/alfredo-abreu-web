import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getAllPosts } from '@/lib/mdx'
import { ArrowRight } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  return {
    title: 'Blog — B2B SEO Insights & Strategy',
    description: 'Practical SEO insights for B2B companies in Nearshoring, BPO, and SaaS. Written by Alfredo Abreu, bilingual B2B SEO consultant.',
    alternates: {
      canonical: `https://alfredoabreu.com/${locale}/blog`,
      languages: {
        en: 'https://alfredoabreu.com/en/blog',
        es: 'https://alfredoabreu.com/es/blog',
      },
    },
  }
}

export default async function BlogPage() {
  const locale = await getLocale()
  const t = await getTranslations()
  const allPosts = getAllPosts()
  const localePosts = allPosts.filter((p) => p.lang === locale)
  const otherPosts = allPosts.filter((p) => p.lang !== locale)
  const posts = [...localePosts, ...otherPosts]

  return (
    <>
      {/* HERO */}
      <section className="relative bg-white pt-32 pb-20 overflow-hidden">
        <FloatingTriangles count={5} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-eyebrow uppercase tracking-[0.08em] text-lavender-blue font-medium mb-4">
            {t('blog.hero.eyebrow')}
          </p>
          <h1 className="text-[40px] lg:text-[56px] font-bold leading-[1.06] tracking-[-0.02em] text-midnight-navy">
            {t('blog.hero.h1Part1')}{' '}
            <span className="gradient-text">{t('blog.hero.h1Highlight')}</span>
          </h1>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* POSTS GRID */}
      <section className="relative bg-white py-20 overflow-hidden">
        <FloatingTriangles count={4} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-midnight-navy/50">{t('blog.noPosts')}</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white rounded-2xl border border-soft-lilac/40 overflow-hidden hover:border-lavender-blue/40 hover:shadow-lg transition-all"
                >
                  <div className="aspect-[16/9]">
                    {/* TODO: image — blog/{post.slug}/cover.jpg — 1200×630 — Cover for blog post: {post.title} */}
                    <ImagePlaceholder
                      src={post.coverImage}
                      alt={post.title}
                      width={1200}
                      height={630}
                      label={`Blog: ${post.title}`}
                      className="w-full h-full rounded-t-2xl rounded-b-none"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-lavender-blue bg-soft-lilac/40 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-midnight-navy/30 border border-soft-lilac/40 px-2.5 py-1 rounded-full uppercase">
                        {post.lang}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-midnight-navy mb-2 group-hover:text-royal-blue transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-midnight-navy/60 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-midnight-navy/40">
                        {new Date(post.date).toLocaleDateString(locale === 'es' ? 'es-419' : 'en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                        {' · '}
                        {post.readingTime} {t('blog.readingTime')}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-royal-blue hover:text-lavender-blue transition-colors no-underline"
                      >
                        {t('blog.readMore')}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-midnight-navy py-24 overflow-hidden">
        <FloatingTriangles count={5} theme="dark" intensity="strong" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-white mb-4">
            {t('home.finalCta.h2Part1')}{' '}
            <span className="gradient-text">{t('home.finalCta.h2Highlight')}</span>
          </h2>
          <p className="text-body text-white/60 mb-8 leading-relaxed">
            {t('home.finalCta.body')}
          </p>
          <Link href="/audit" className="btn-primary text-base px-8 py-3.5">
            {t('home.finalCta.ctaPrimary')}
          </Link>
        </div>
      </section>
    </>
  )
}
