import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noindex?: boolean
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  ogImage = '/images/studio-seven-logo.png',
  canonical,
  noindex = false
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | Studio Seven Pilates` : 'Studio Seven Pilates | Reformer Pilates Studio in Amherstburg, ON'
  const fullDescription = description || 'Transform your body and mind at Studio Seven Pilates in Amherstburg, Ontario. Expert reformer Pilates instruction, small class sizes, and ceremonial-grade matcha bar.'
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studiosevenboutique.com'
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional SEO */}
      <meta name="author" content="Studio Seven Pilates" />
      <meta name="theme-color" content="#232323" />
    </Head>
  )
}
