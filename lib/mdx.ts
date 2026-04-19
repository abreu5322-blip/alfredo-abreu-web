import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostFrontmatter {
  title: string
  titleEs?: string
  slug: string
  date: string
  excerpt: string
  excerptEs?: string
  category: string
  tags: string[]
  coverImage?: string
  readingTime: string
  lang: 'en' | 'es'
  relatedPost?: string
}

export interface Post {
  frontmatter: PostFrontmatter
  content: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPosts(locale?: 'en' | 'es'): PostFrontmatter[] {
  const locales = locale ? [locale] : ['en', 'es']
  const posts: PostFrontmatter[] = []

  for (const loc of locales) {
    const dir = path.join(CONTENT_DIR, loc)
    if (!fs.existsSync(dir)) continue

    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
    for (const file of files) {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
      const { data } = matter(raw)
      posts.push(data as PostFrontmatter)
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string, locale: 'en' | 'es'): Post | null {
  const dir = path.join(CONTENT_DIR, locale)
  if (!fs.existsSync(dir)) return null

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { data, content } = matter(raw)
    if (data.slug === slug) {
      return { frontmatter: data as PostFrontmatter, content }
    }
  }
  return null
}

export function getAllPostSlugs(): { slug: string; locale: 'en' | 'es' }[] {
  const slugs: { slug: string; locale: 'en' | 'es' }[] = []
  for (const locale of ['en', 'es'] as const) {
    const dir = path.join(CONTENT_DIR, locale)
    if (!fs.existsSync(dir)) continue
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
    for (const file of files) {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
      const { data } = matter(raw)
      slugs.push({ slug: data.slug as string, locale })
    }
  }
  return slugs
}
