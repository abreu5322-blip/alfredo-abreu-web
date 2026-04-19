import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import FloatingTriangles from '@/components/FloatingTriangles'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const locale = await getLocale()
  const post = getPostBySlug(slug, locale as 'en' | 'es')
    ?? getPostBySlug(slug, locale === 'en' ? 'es' : 'en')
  if (!post) return {}

  const { frontmatter: fm } = post
  return {
    title: fm.title,
    description: fm.excerpt,
    openGraph: {
      title: fm.title,
      description: fm.excerpt,
      type: 'article',
      publishedTime: fm.date,
      authors: ['Alfredo Abreu'],
      images: fm.coverImage ? [{ url: fm.coverImage, width: 1200, height: 630 }] : [],
    },
    alternates: {
      canonical: `https://alfredoabreu.com/${locale}/blog/${slug}`,
      languages: fm.relatedPost
        ? {
            en: `https://alfredoabreu.com/en/blog/${fm.lang === 'en' ? slug : fm.relatedPost}`,
            es: `https://alfredoabreu.com/es/blog/${fm.lang === 'es' ? slug : fm.relatedPost}`,
          }
        : undefined,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const locale = await getLocale()
  const t = await getTranslations()

  const post =
    getPostBySlug(slug, locale as 'en' | 'es') ??
    getPostBySlug(slug, locale === 'en' ? 'es' : 'en')

  if (!post) notFound()

  const { frontmatter: fm, content } = post

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: fm.title,
    description: fm.excerpt,
    datePublished: fm.date,
    dateModified: fm.date,
    author: {
      '@type': 'Person',
      name: 'Alfredo Abreu',
      url: 'https://alfredoabreu.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Alfredo Abreu',
    },
    image: fm.coverImage,
    keywords: fm.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* HERO */}
      <section className="relative bg-white pt-32 pb-12 overflow-hidden">
        <FloatingTriangles count={4} theme="light" intensity="subtle" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-midnight-navy/50 hover:text-royal-blue transition-colors mb-8 no-underline"
          >
            <ArrowLeft size={16} />
            {locale === 'es' ? 'Volver al Blog' : 'Back to Blog'}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-lavender-blue bg-soft-lilac/40 px-3 py-1 rounded-full flex items-center gap-1">
              <Tag size={11} />
              {fm.category}
            </span>
            <span className="text-xs text-midnight-navy/40 flex items-center gap-1">
              <Calendar size={11} />
              {new Date(fm.date).toLocaleDateString(locale === 'es' ? 'es-419' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="text-xs text-midnight-navy/40 flex items-center gap-1">
              <Clock size={11} />
              {fm.readingTime} {t('blog.readingTime')}
            </span>
          </div>

          <h1 className="text-[32px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-midnight-navy mb-6">
            {fm.title}
          </h1>
          <p className="text-body-l text-midnight-navy/60 leading-relaxed">{fm.excerpt}</p>
        </div>
      </section>

      {/* Cover image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* TODO: image — blog/{fm.slug}/cover.jpg — 1200×630 — Cover image for blog post: {fm.title} */}
        <ImagePlaceholder
          src={fm.coverImage}
          alt={fm.title}
          width={1200}
          height={630}
          label={`Blog cover: ${fm.title}`}
          priority
        />
      </div>

      <div className="gradient-divider" />

      {/* CONTENT + SIDEBAR */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-start">
            {/* Main content */}
            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-midnight-navy prose-a:text-royal-blue prose-strong:text-midnight-navy">
              <MDXRemote source={content} />
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 space-y-6">
              {/* CTA card */}
              <div className="gradient-border">
                <div className="p-6 text-center">
                  <h3 className="font-bold text-midnight-navy mb-2">
                    {t('blog.sidebar.ctaTitle')}
                  </h3>
                  <p className="text-sm text-midnight-navy/60 mb-4">
                    {t('blog.sidebar.ctaDesc')}
                  </p>
                  <Link href="/audit" className="btn-primary text-sm px-5 py-2.5 w-full">
                    {t('blog.sidebar.ctaButton')}
                  </Link>
                </div>
              </div>

              {/* Tags */}
              {fm.tags.length > 0 && (
                <div className="bg-soft-lilac/10 rounded-2xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-midnight-navy/40 mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {fm.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-white border border-soft-lilac/60 rounded-full text-midnight-navy/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Link to other language version */}
              {fm.relatedPost && (
                <div className="bg-soft-lilac/10 rounded-2xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-midnight-navy/40 mb-3">
                    {fm.lang === 'en' ? 'Lee en Español' : 'Read in English'}
                  </p>
                  <Link
                    href={`/blog/${fm.relatedPost}`}
                    className="text-sm text-royal-blue hover:text-lavender-blue transition-colors no-underline font-medium"
                  >
                    {fm.lang === 'en' ? 'Versión en Español →' : 'English Version →'}
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* AUTHOR BIO */}
      <section className="bg-soft-lilac/10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full shrink-0 overflow-hidden">
              {/* TODO: image — profile/alfredo-square.jpg — 400×400 — Author avatar for blog posts */}
              <ImagePlaceholder
                src={undefined}
                alt="Alfredo Abreu"
                width={400}
                height={400}
                label="Alfredo avatar"
                className="w-full h-full"
              />
            </div>
            <div>
              <p className="font-bold text-midnight-navy">{t('blog.authorBio.name')}</p>
              <p className="text-sm text-lavender-blue mb-2">{t('blog.authorBio.role')}</p>
              <p className="text-sm text-midnight-navy/60 leading-relaxed">{t('blog.authorBio.bio')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-midnight-navy py-20 overflow-hidden">
        <FloatingTriangles count={5} theme="dark" intensity="strong" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t('caseStudy.ctaTitle')}
          </h2>
          <p className="text-body text-white/60 mb-8">{t('caseStudy.ctaDesc')}</p>
          <Link href="/audit" className="btn-primary text-base px-8 py-3.5">
            {t('caseStudy.ctaButton')}
          </Link>
        </div>
      </section>
    </>
  )
}
