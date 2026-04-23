import type { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/mdx'
import { caseStudies } from '@/lib/case-studies'

const BASE_URL = 'https://alfredoabreu.com'
const locales = ['en', 'es'] as const

const staticRoutes = [
  '',
  '/services',
  '/services/seo-services-for-startups',
  '/case-studies',
  '/about',
  '/contact',
  '/audit',
  '/blog',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  for (const route of staticRoutes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${route}`])
          ),
        },
      })
    }
  }

  // Case study pages
  for (const cs of caseStudies) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}/case-studies/${cs.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}/case-studies/${cs.slug}`])
          ),
        },
      })
    }
  }

  // Blog posts
  const slugs = getAllPostSlugs()
  for (const { slug, locale } of slugs) {
    entries.push({
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  return entries
}
