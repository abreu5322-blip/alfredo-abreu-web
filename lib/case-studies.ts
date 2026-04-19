export interface CaseStudy {
  slug: string
  client: string
  tag: string
  tagEn: string
  tagEs: string
  titleEn: string
  titleEs: string
  subtitleEn: string
  subtitleEs: string
  heroSpan?: boolean
  metrics: { value: string; label: string; labelEs: string }[]
  clientInfo: {
    industry: string
    size: string
    location: string
  }
  challengeEn: string[]
  challengeEs: string[]
  approachEn: string[]
  approachEs: string[]
  resultsEn: string
  resultsEs: string
  resultMetrics: { value: string; label: string; labelEs: string }[]
  images: { src: string; alt: string; width: number; height: number; label: string }[]
  coverImage: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'axs',
    client: 'AXS',
    tag: 'B2B · Nearshoring',
    tagEn: 'B2B · Nearshoring',
    tagEs: 'B2B · Nearshoring',
    titleEn: 'How AXS Closed a $10.5M Enterprise Deal Through Organic SEO',
    titleEs: 'Cómo AXS Cerró un Deal Enterprise de $10.5M a Través del SEO Orgánico',
    subtitleEn: 'From toxic backlinks and stale content to a revenue-generating SEO program that directly attributed to the largest deal in company history.',
    subtitleEs: 'De backlinks tóxicos y contenido desactualizado a un programa de SEO generador de revenue que contribuyó directamente al deal más grande de la historia de la empresa.',
    heroSpan: true,
    metrics: [
      { value: '$10.5M', label: 'Enterprise deal via organic', labelEs: 'Deal enterprise vía orgánico' },
      { value: '+168.79%', label: 'Organic clicks (6 months)', labelEs: 'Clics orgánicos (6 meses)' },
      { value: '+156.33%', label: 'Impressions growth', labelEs: 'Crecimiento de impresiones' },
      { value: 'Top 5', label: 'Average ranking position', labelEs: 'Posición promedio de ranking' },
    ],
    clientInfo: {
      industry: 'Nearshoring / Staff Augmentation',
      size: '500–1,000 employees',
      location: 'USA + Latin America',
    },
    challengeEn: [
      'AXS had a technically neglected website with outdated content that hadn\'t been refreshed in years. Their blog posts were targeting the wrong keywords, and their backlink profile was riddled with toxic links from link farms that were actively hurting their rankings.',
      'Despite being a well-established nearshoring company with real enterprise clients, they were nearly invisible in organic search for the terms their target buyers were actually using. Decision-makers at US companies searching for nearshoring partners weren\'t finding them.',
      'The result: their sales team was entirely dependent on referrals and outbound. They were leaving significant organic pipeline on the table.',
    ],
    challengeEs: [
      'AXS tenía un sitio web técnicamente descuidado con contenido desactualizado que no se había renovado en años. Sus posts de blog apuntaban a las keywords incorrectas, y su perfil de backlinks estaba lleno de links tóxicos de granjas de links que estaban perjudicando activamente sus rankings.',
      'A pesar de ser una empresa de nearshoring bien establecida con clientes enterprise reales, eran prácticamente invisibles en la búsqueda orgánica para los términos que sus compradores objetivo realmente usaban. Los tomadores de decisiones en empresas de EE.UU. que buscaban socios de nearshoring no los encontraban.',
      'El resultado: su equipo de ventas dependía completamente de referencias y outbound. Estaban dejando un pipeline orgánico significativo sobre la mesa.',
    ],
    approachEn: [
      'Full technical audit + disavow campaign: Crawled the entire site, identified all technical errors, and submitted a disavow file to clean up 200+ toxic backlinks. Fixed crawl errors, improved site speed, and implemented schema markup.',
      'Revenue-first keyword architecture: Rebuilt their keyword strategy around terms with commercial intent — "nearshoring companies USA", "staff augmentation Mexico", etc. — not just high-volume informational terms.',
      'Content modernization: Rewrote and updated their core service pages and blog posts with accurate, current information. Added case study references and data points that enterprise buyers find credible.',
      'Authority link building: Built a systematic link building campaign targeting relevant industry publications, business associations, and niche directories to replace the removed toxic links with high-quality ones.',
    ],
    approachEs: [
      'Auditoría técnica completa + campaña de disavow: Rastreamos el sitio completo, identificamos todos los errores técnicos y enviamos un archivo de disavow para limpiar 200+ backlinks tóxicos. Corregimos errores de crawl, mejoramos la velocidad del sitio e implementamos schema markup.',
      'Arquitectura de keywords orientada al revenue: Reconstruimos su estrategia de keywords en torno a términos con intención comercial — "nearshoring companies USA", "staff augmentation Mexico", etc. — no solo términos informativos de alto volumen.',
      'Modernización de contenido: Reescribimos y actualizamos sus páginas de servicios principales y posts de blog con información precisa y actual. Añadimos referencias de casos de estudio y datos que los compradores enterprise encuentran creíbles.',
      'Link building de autoridad: Construimos una campaña sistemática de link building dirigida a publicaciones de la industria relevantes, asociaciones empresariales y directorios de nicho para reemplazar los links tóxicos eliminados con links de alta calidad.',
    ],
    resultsEn: 'Six months after implementation, AXS saw a 168.79% increase in organic clicks and 156.33% growth in impressions. Their average ranking position improved significantly across their target keyword set. Most importantly, an enterprise prospect that found AXS through organic search became their largest client — a $10.5M deal that was directly attributed to the organic channel in their CRM.',
    resultsEs: 'Seis meses después de la implementación, AXS vio un aumento del 168.79% en clics orgánicos y un crecimiento del 156.33% en impresiones. Su posición promedio de ranking mejoró significativamente en su conjunto de keywords objetivo. Lo más importante: un prospecto enterprise que encontró a AXS a través de la búsqueda orgánica se convirtió en su cliente más grande — un deal de $10.5M que fue atribuido directamente al canal orgánico en su CRM.',
    resultMetrics: [
      { value: '$10.5M', label: 'Enterprise deal closed', labelEs: 'Deal enterprise cerrado' },
      { value: '+168.79%', label: 'Organic clicks', labelEs: 'Clics orgánicos' },
      { value: '+156.33%', label: 'Impressions', labelEs: 'Impresiones' },
      { value: 'Improved', label: 'Average position', labelEs: 'Posición promedio' },
    ],
    images: [
      { src: 'TODO: /images/case-studies/axs/gsc-clicks.png', alt: 'Google Search Console showing 168.79% increase in clicks', width: 1600, height: 900, label: 'GSC — Clicks +168.79%' },
      { src: 'TODO: /images/case-studies/axs/gsc-impressions.png', alt: 'Google Search Console showing 156.33% increase in impressions', width: 1600, height: 900, label: 'GSC — Impressions +156.33%' },
      { src: 'TODO: /images/case-studies/axs/deal-10-5m.png', alt: 'CRM showing $10.5M deal pipeline', width: 1600, height: 900, label: 'CRM — $10.5M Deal Pipeline' },
      { src: 'TODO: /images/case-studies/axs/deal-closed-won.png', alt: 'CRM showing deal closed won status', width: 1600, height: 900, label: 'CRM — Deal Closed Won' },
    ],
    coverImage: 'TODO: /images/case-studies/axs/cover.jpg',
  },
  {
    slug: 'feeding-westchester',
    client: 'Feeding Westchester',
    tag: 'NGO · Local SEO',
    tagEn: 'NGO · Local SEO',
    tagEs: 'ONG · SEO Local',
    titleEn: 'How Feeding Westchester Generated $80K in Organic Donations With Local SEO',
    titleEs: 'Cómo Feeding Westchester Generó $80K en Donaciones Orgánicas con SEO Local',
    subtitleEn: 'A mobile food pantry serving Westchester County wasn\'t showing up when donors searched. We fixed that — and the revenue followed.',
    subtitleEs: 'Una despensa de alimentos móvil que servía al condado de Westchester no aparecía cuando los donantes buscaban. Lo corregimos — y el revenue siguió.',
    metrics: [
      { value: '+168%', label: 'Organic revenue', labelEs: 'Revenue orgánico' },
      { value: '+$80K', label: 'In organic donations', labelEs: 'En donaciones orgánicas' },
      { value: '+26%', label: 'Organic clicks', labelEs: 'Clics orgánicos' },
      { value: '5,484', label: 'GBP interactions', labelEs: 'Interacciones en GBP' },
    ],
    clientInfo: {
      industry: 'Non-profit / Food Security',
      size: '50–100 employees + volunteers',
      location: 'Westchester County, New York',
    },
    challengeEn: [
      'Feeding Westchester operated a Mobile Food Pantry serving hundreds of families across Westchester County, but they were nearly invisible in local search. When potential donors in the area searched for "food banks near me" or "donate food Westchester", they weren\'t appearing.',
      'Their Google Business Profile was incomplete and under-optimized. Their website had significant technical issues, and their content wasn\'t targeting the right local keywords that donors and volunteers were using.',
      'The result: their digital donation channel was severely underperforming. People who wanted to donate to local food causes were finding other organizations instead.',
    ],
    challengeEs: [
      'Feeding Westchester operaba una Despensa de Alimentos Móvil que servía a cientos de familias en todo el condado de Westchester, pero eran prácticamente invisibles en la búsqueda local. Cuando potenciales donantes en el área buscaban "food banks near me" o "donate food Westchester", no aparecían.',
      'Su Google Business Profile estaba incompleto y poco optimizado. Su sitio web tenía problemas técnicos significativos, y su contenido no apuntaba a las keywords locales correctas que los donantes y voluntarios usaban.',
      'El resultado: su canal de donaciones digital tenía un rendimiento muy inferior. Las personas que querían donar a causas alimentarias locales encontraban otras organizaciones en su lugar.',
    ],
    approachEn: [
      'Technical foundation: Fixed critical on-page SEO issues — missing meta tags, duplicate content, broken internal links, and slow page load times. Implemented local schema markup (LocalBusiness, NonprofitOrganization).',
      'Google Business Profile optimization: Completely rebuilt their GBP listing with accurate categories, photos, service areas, posts, and Q&A. Set up systematic review generation.',
      'Disavow and cleanup: Identified and disavowed toxic backlinks that were suppressing their local rankings.',
      'Local content strategy: Created and optimized content targeting donation-intent and volunteer-intent searches specific to Westchester County neighborhoods.',
    ],
    approachEs: [
      'Base técnica: Corregimos problemas críticos de SEO on-page — meta tags faltantes, contenido duplicado, links internos rotos y tiempos de carga lentos. Implementamos schema markup local (LocalBusiness, NonprofitOrganization).',
      'Optimización del Google Business Profile: Reconstruimos completamente su listing de GBP con categorías precisas, fotos, áreas de servicio, posts y Q&A. Configuramos generación sistemática de reseñas.',
      'Disavow y limpieza: Identificamos y desautorizamos backlinks tóxicos que suprimían sus rankings locales.',
      'Estrategia de contenido local: Creamos y optimizamos contenido apuntando a búsquedas con intención de donación y voluntariado específicas de los vecindarios del condado de Westchester.',
    ],
    resultsEn: 'The results exceeded expectations across every metric. Organic revenue increased 168%, with $80K+ in donations directly attributed to organic search in the measured period. Organic clicks grew 26%, impressions increased 34%, and their Google Business Profile generated 5,484 user interactions. Feeding Westchester went from invisible to dominant in local food bank searches across Westchester County.',
    resultsEs: 'Los resultados superaron las expectativas en todas las métricas. El revenue orgánico aumentó un 168%, con más de $80K en donaciones atribuidas directamente a la búsqueda orgánica en el período medido. Los clics orgánicos crecieron un 26%, las impresiones aumentaron un 34%, y su Google Business Profile generó 5,484 interacciones de usuarios. Feeding Westchester pasó de invisible a dominante en las búsquedas locales de bancos de alimentos en el condado de Westchester.',
    resultMetrics: [
      { value: '+168%', label: 'Organic revenue', labelEs: 'Revenue orgánico' },
      { value: '+$80K', label: 'Organic donations', labelEs: 'Donaciones orgánicas' },
      { value: '+26%', label: 'Organic clicks', labelEs: 'Clics orgánicos' },
      { value: '+34%', label: 'Impressions', labelEs: 'Impresiones' },
    ],
    images: [
      { src: 'TODO: /images/case-studies/feeding-westchester/ga4-revenue.png', alt: 'GA4 showing 168% increase in organic revenue', width: 1600, height: 900, label: 'GA4 — Revenue +168%' },
      { src: 'TODO: /images/case-studies/feeding-westchester/gsc-clicks.png', alt: 'Google Search Console showing click growth', width: 1600, height: 900, label: 'GSC — Clicks +26%' },
      { src: 'TODO: /images/case-studies/feeding-westchester/business-profile.png', alt: 'Google Business Profile with 5,484 interactions', width: 1600, height: 900, label: 'GBP — 5,484 Interactions' },
    ],
    coverImage: 'TODO: /images/case-studies/feeding-westchester/cover.jpg',
  },
  {
    slug: 'livius-prep',
    client: 'Livius Prep',
    tag: 'Education · Local B2C',
    tagEn: 'Education · Local B2C',
    tagEs: 'Educación · B2C Local',
    titleEn: 'How Livius Prep Grew Organic Users by 208% With Hyper-Local SEO',
    titleEs: 'Cómo Livius Prep Creció Usuarios Orgánicos en un 208% con SEO Hiper-Local',
    subtitleEn: 'A tutoring company getting traffic from the wrong places — non-local, non-converting visitors. We rebuilt their presence for Massachusetts.',
    subtitleEs: 'Una empresa de tutorías recibiendo tráfico de los lugares incorrectos — visitantes no locales y que no convertían. Reconstruimos su presencia para Massachusetts.',
    metrics: [
      { value: '+208%', label: 'New organic users', labelEs: 'Nuevos usuarios orgánicos' },
      { value: '+128%', label: 'Organic traffic', labelEs: 'Tráfico orgánico' },
      { value: '+295%', label: 'Returning users', labelEs: 'Usuarios recurrentes' },
      { value: '+38%', label: 'Avg engagement time', labelEs: 'Tiempo de engagement' },
    ],
    clientInfo: {
      industry: 'Education / Tutoring Services',
      size: '10–20 employees',
      location: 'Massachusetts, USA',
    },
    challengeEn: [
      'Livius Prep offered tutoring services in Massachusetts, but their website was attracting traffic from across the country — visitors who couldn\'t actually use their services. Their conversion rate was poor because the traffic had low geographic relevance.',
      'Their keyword strategy wasn\'t location-specific. They were ranking for generic tutoring terms that attracted national traffic, while local families in Massachusetts who could actually book sessions weren\'t finding them.',
      'Additionally, their UX and calls-to-action weren\'t set up to convert the traffic they did get. The site needed both a traffic strategy overhaul and a conversion optimization.',
    ],
    challengeEs: [
      'Livius Prep ofrecía servicios de tutoría en Massachusetts, pero su sitio web atraía tráfico de todo el país — visitantes que en realidad no podían usar sus servicios. Su tasa de conversión era baja porque el tráfico tenía baja relevancia geográfica.',
      'Su estrategia de keywords no era específica de ubicación. Rankeaban para términos genéricos de tutoría que atraían tráfico nacional, mientras que las familias locales en Massachusetts que sí podían reservar sesiones no los encontraban.',
      'Además, su UX y llamadas a la acción no estaban configuradas para convertir el tráfico que sí obtenían. El sitio necesitaba tanto una revisión de la estrategia de tráfico como una optimización de conversión.',
    ],
    approachEn: [
      'Hyper-local keyword architecture: Rebuilt their keyword strategy around Massachusetts-specific terms — "tutoring services Boston", "SAT prep Massachusetts", "math tutor Newton MA" — targeting actual geographic areas where their clients lived.',
      'New website with local focus: Helped design and launch a new website specifically focused on their Massachusetts service area, with location-specific landing pages for each major city and service they offered.',
      'UX and CTA optimization: Redesigned the booking flow and CTAs to reduce friction for local visitors. Added clear service area information, local social proof, and streamlined the inquiry process.',
      'Google Business Profile: Fully optimized their GBP presence and implemented a systematic approach to gathering local reviews from satisfied clients.',
    ],
    approachEs: [
      'Arquitectura de keywords hiper-local: Reconstruimos su estrategia de keywords en torno a términos específicos de Massachusetts — "tutoring services Boston", "SAT prep Massachusetts", "math tutor Newton MA" — apuntando a las áreas geográficas reales donde vivían sus clientes.',
      'Nuevo sitio web con enfoque local: Ayudamos a diseñar y lanzar un nuevo sitio web específicamente enfocado en su área de servicio de Massachusetts, con landing pages específicas de ubicación para cada ciudad importante y servicio que ofrecían.',
      'Optimización de UX y CTAs: Rediseñamos el flujo de reserva y los CTAs para reducir la fricción para los visitantes locales. Añadimos información clara del área de servicio, prueba social local y simplificamos el proceso de consulta.',
      'Google Business Profile: Optimizamos completamente su presencia en GBP e implementamos un enfoque sistemático para recopilar reseñas locales de clientes satisfechos.',
    ],
    resultsEn: 'By redirecting traffic from generic national visitors to qualified local prospects, every metric improved dramatically. New organic users grew 208%, total organic traffic increased 128%, and returning users skyrocketed 295% — indicating that local visitors were engaging with the brand repeatedly before converting. Average engagement time increased 38%, confirming that the new visitors were much more qualified than before.',
    resultsEs: 'Al redirigir el tráfico de visitantes nacionales genéricos a prospectos locales calificados, todas las métricas mejoraron dramáticamente. Los nuevos usuarios orgánicos crecieron un 208%, el tráfico orgánico total aumentó un 128%, y los usuarios recurrentes se dispararon un 295% — indicando que los visitantes locales estaban interactuando con la marca repetidamente antes de convertir. El tiempo promedio de engagement aumentó un 38%, confirmando que los nuevos visitantes eran mucho más calificados que antes.',
    resultMetrics: [
      { value: '+208%', label: 'New users', labelEs: 'Nuevos usuarios' },
      { value: '+128%', label: 'Organic traffic', labelEs: 'Tráfico orgánico' },
      { value: '+295%', label: 'Returning users', labelEs: 'Usuarios recurrentes' },
      { value: '+38%', label: 'Engagement time', labelEs: 'Tiempo de engagement' },
    ],
    images: [
      { src: 'TODO: /images/case-studies/livius-prep/ga4-users.png', alt: 'GA4 showing 208% increase in new users', width: 1600, height: 900, label: 'GA4 — New Users +208%' },
      { src: 'TODO: /images/case-studies/livius-prep/ga4-engagement.png', alt: 'GA4 showing engagement metrics improvement', width: 1600, height: 900, label: 'GA4 — Engagement +38%' },
      { src: 'TODO: /images/case-studies/livius-prep/gsc-performance.png', alt: 'GSC showing organic traffic growth', width: 1600, height: 900, label: 'GSC — Performance Growth' },
    ],
    coverImage: 'TODO: /images/case-studies/livius-prep/cover.jpg',
  },
  {
    slug: 'wxb',
    client: 'WXB',
    tag: 'E-commerce · B2B/B2C',
    tagEn: 'E-commerce · B2B/B2C',
    tagEs: 'E-commerce · B2B/B2C',
    titleEn: 'How WXB Grew E-commerce Revenue by 55% With B2B-Focused SEO',
    titleEs: 'Cómo WXB Creció su Revenue de E-commerce en un 55% con SEO Enfocado en B2B',
    subtitleEn: 'A California waxing supplies company only ranking for branded terms — and attracting retail buyers when they needed wholesale clients.',
    subtitleEs: 'Una empresa de suministros para cera de California que solo rankeaba por términos de marca — y atraía compradores retail cuando necesitaba clientes wholesale.',
    metrics: [
      { value: '+55%', label: 'E-commerce revenue', labelEs: 'Revenue e-commerce' },
      { value: '+19%', label: 'Organic clicks', labelEs: 'Clics orgánicos' },
      { value: '+70%', label: 'Impressions growth', labelEs: 'Crecimiento de impresiones' },
      { value: '5.3', label: 'Average position', labelEs: 'Posición promedio' },
    ],
    clientInfo: {
      industry: 'E-commerce / Beauty Supplies',
      size: '5–15 employees',
      location: 'California, USA',
    },
    challengeEn: [
      'WXB sold professional waxing supplies to salons, estheticians, and beauty professionals — a B2B wholesale business. But their SEO was entirely branded, meaning they only appeared when someone specifically searched for "WXB" — not for the wholesale waxing supplies terms that their actual buyers used.',
      'Additionally, the traffic they did get was often retail-intent visitors who were looking to buy small quantities for personal use, not the professional buyers who would place bulk wholesale orders.',
      'Their Shopify store\'s collection structure wasn\'t optimized for the keywords that wholesale buyers used, and their product pages lacked the structured data and content needed to rank for commercial terms.',
    ],
    challengeEs: [
      'WXB vendía suministros de cera profesionales a salones, esteticistas y profesionales de la belleza — un negocio B2B wholesale. Pero su SEO era completamente de marca, lo que significaba que solo aparecían cuando alguien buscaba específicamente "WXB" — no para los términos de suministros de cera wholesale que usaban sus compradores reales.',
      'Además, el tráfico que sí obtenían era frecuentemente visitantes con intención retail que buscaban comprar pequeñas cantidades para uso personal, no los compradores profesionales que harían pedidos wholesale a granel.',
      'La estructura de colecciones de su tienda Shopify no estaba optimizada para las keywords que los compradores wholesale usaban, y sus páginas de producto carecían del structured data y el contenido necesario para rankear por términos comerciales.',
    ],
    approachEn: [
      'Wholesale-intent keyword research: Identified and prioritized keywords with clear B2B/wholesale purchasing intent — "wholesale wax supplies", "professional waxing kits bulk", "hard wax wholesale distributor California" — and rebuilt their content strategy around these terms.',
      'Shopify collection optimization: Created and optimized new Shopify collections specifically targeting wholesale buyer segments. Rewrote collection page copy to speak directly to professional buyers.',
      'Structured data implementation: Added comprehensive product schema markup to all product pages, enabling rich snippets in search results that increased CTR.',
      'Conversion-focused UX for wholesale: Redesigned key pages and CTAs to convert professional buyers — bulk pricing visibility, professional account application, B2B-specific messaging.',
    ],
    approachEs: [
      'Investigación de keywords con intención wholesale: Identificamos y priorizamos keywords con clara intención de compra B2B/wholesale — "wholesale wax supplies", "professional waxing kits bulk", "hard wax wholesale distributor California" — y reconstruimos su estrategia de contenido en torno a estos términos.',
      'Optimización de colecciones Shopify: Creamos y optimizamos nuevas colecciones Shopify apuntando específicamente a segmentos de compradores wholesale. Reescribimos el copy de las páginas de colección para hablarle directamente a los compradores profesionales.',
      'Implementación de structured data: Añadimos schema markup completo de producto a todas las páginas de productos, habilitando rich snippets en los resultados de búsqueda que aumentaron el CTR.',
      'UX orientada a conversión para wholesale: Rediseñamos páginas clave y CTAs para convertir compradores profesionales — visibilidad de precios por volumen, aplicación de cuenta profesional, mensajería específica B2B.',
    ],
    resultsEn: 'Revenue grew 55% — from $21.7K to $33.8K in the measured period — driven by wholesale buyers who found WXB through non-branded search terms for the first time. Organic clicks increased 19%, impressions grew 70%, and their average position reached 5.3 — giving them consistent first-page visibility for their most valuable commercial terms.',
    resultsEs: 'El revenue creció un 55% — de $21.7K a $33.8K en el período medido — impulsado por compradores wholesale que encontraron a WXB a través de términos de búsqueda sin marca por primera vez. Los clics orgánicos aumentaron un 19%, las impresiones crecieron un 70%, y su posición promedio alcanzó 5.3 — dándoles visibilidad consistente en la primera página para sus términos comerciales más valiosos.',
    resultMetrics: [
      { value: '+55%', label: 'Revenue ($33.8K vs $21.7K)', labelEs: 'Revenue ($33.8K vs $21.7K)' },
      { value: '+19%', label: 'Organic clicks', labelEs: 'Clics orgánicos' },
      { value: '+70%', label: 'Impressions', labelEs: 'Impresiones' },
      { value: '5.3', label: 'Average position', labelEs: 'Posición promedio' },
    ],
    images: [
      { src: 'TODO: /images/case-studies/wxb/shopify-sales.png', alt: 'Shopify dashboard showing 55% revenue increase', width: 1600, height: 900, label: 'Shopify — Revenue +55%' },
      { src: 'TODO: /images/case-studies/wxb/gsc-performance.png', alt: 'GSC showing 70% impressions growth', width: 1600, height: 900, label: 'GSC — Impressions +70%' },
    ],
    coverImage: 'TODO: /images/case-studies/wxb/cover.jpg',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
