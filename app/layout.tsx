import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alfredo Abreu — B2B SEO Consultant',
  description: 'Bilingual B2B SEO Consultant specializing in Nearshoring, BPO, and SaaS companies in the US market.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
