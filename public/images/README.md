# Image Assets — Alfredo Abreu Website

All images should be placed in their respective directories. Use high-quality JPEG/PNG files.
Next.js will automatically serve WebP/AVIF versions via `next/image`.

## Required Images

| Path | Dimensions | Used In | Priority |
|------|-----------|---------|----------|
| `profile/alfredo-hero.jpg` | 600×750 | Home hero (future) | High |
| `profile/alfredo-about.jpg` | 800×1000 | About page main photo | High |
| `profile/alfredo-square.jpg` | 400×400 | Blog post author avatar | Medium |
| `case-studies/axs/cover.jpg` | 1200×800 | AXS case study cover & grid | High |
| `case-studies/axs/gsc-clicks.png` | 1600×900 | AXS GSC clicks +168.79% | High |
| `case-studies/axs/gsc-impressions.png` | 1600×900 | AXS GSC impressions +156.33% | High |
| `case-studies/axs/deal-10-5m.png` | 1600×900 | AXS CRM $10.5M pipeline | High |
| `case-studies/axs/deal-closed-won.png` | 1600×900 | AXS CRM deal closed won | High |
| `case-studies/feeding-westchester/cover.jpg` | 1200×800 | Feeding Westchester cover | High |
| `case-studies/feeding-westchester/ga4-revenue.png` | 1600×900 | GA4 revenue +168% | High |
| `case-studies/feeding-westchester/gsc-clicks.png` | 1600×900 | GSC clicks +26% | High |
| `case-studies/feeding-westchester/business-profile.png` | 1600×900 | GBP 5,484 interactions | High |
| `case-studies/livius-prep/cover.jpg` | 1200×800 | Livius Prep cover | High |
| `case-studies/livius-prep/ga4-users.png` | 1600×900 | GA4 users +208% | High |
| `case-studies/livius-prep/ga4-engagement.png` | 1600×900 | GA4 engagement +38% | High |
| `case-studies/livius-prep/gsc-performance.png` | 1600×900 | GSC performance growth | High |
| `case-studies/wxb/cover.jpg` | 1200×800 | WXB cover | High |
| `case-studies/wxb/shopify-sales.png` | 1600×900 | Shopify revenue +55% | High |
| `case-studies/wxb/gsc-performance.png` | 1600×900 | GSC impressions +70% | High |
| `blog/seo-for-b2b-saas-2026/cover.jpg` | 1200×630 | Blog post cover (EN) | Medium |
| `blog/seo-para-b2b-saas-2026/cover.jpg` | 1200×630 | Blog post cover (ES) | Medium |
| `blog/ai-search-optimization-2026/cover.jpg` | 1200×630 | Blog post cover (EN) | Medium |
| `blog/optimizacion-ai-search-2026/cover.jpg` | 1200×630 | Blog post cover (ES) | Medium |
| `blog/nearshoring-seo-strategy/cover.jpg` | 1200×630 | Blog post cover (EN) | Medium |
| `blog/estrategia-seo-nearshoring/cover.jpg` | 1200×630 | Blog post cover (ES) | Medium |
| `awards/condor-recognition.jpg` | 600×800 | About page recognition section | Medium |
| `og-image.jpg` | 1200×630 | Default OpenGraph image for all pages | High |

## Notes

- All images are loaded via `next/image` with automatic WebP/AVIF conversion
- Above-the-fold images use `priority={true}` for LCP optimization
- Case study screenshots should be uncropped, full dashboard views
- Profile photos: clean background, professional but approachable
- OG image should include name, title, and brand colors
