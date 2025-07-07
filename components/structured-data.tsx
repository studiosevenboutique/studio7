interface StructuredDataProps {
  type: 'website' | 'organization' | 'local-business' | 'article' | 'course'
  data?: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
    }

    switch (type) {
      case 'organization':
        return {
          ...baseData,
          "@type": "Organization",
          "name": "Studio Seven Pilates",
          "url": "https://www.studiosevenboutique.com",
          "logo": "https://www.studiosevenboutique.com/images/studio-seven-logo.png",
          "description": "Transformative reformer Pilates classes and ceremonial-grade matcha bar in Amherstburg, Ontario",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Amherstburg",
            "addressRegion": "ON",
            "addressCountry": "CA"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service"
          }
        }

      case 'local-business':
        return {
          ...baseData,
          "@type": "LocalBusiness",
          "name": "Studio Seven Pilates",
          "image": "https://studiosevenboutique.com/images/studio-seven-logo.png",
          "description": "Reformer Pilates studio offering Foundation, Sculpt & Tone, and The Burn classes with ceremonial-grade matcha bar",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Amherstburg",
            "addressRegion": "ON",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates"
          },
          "url": "https://studiosevenpilates.com",
          "priceRange": "$32-$500",
          "openingHours": [
            "Mo-Su 06:00-21:00"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pilates Classes",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Foundation Pilates Class",
                  "description": "Level 1 reformer Pilates class focusing on proper alignment and mindful movement"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sculpt & Tone Pilates Class",
                  "description": "Level 2 strength-focused Pilates class for muscle endurance and core stability"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "The Burn Pilates Class",
                  "description": "Level 3 high-intensity reformer Pilates with jump board for cardio boost"
                }
              }
            ]
          }
        }

      case 'course':
        return {
          ...baseData,
          "@type": "Course",
          "name": data?.name || "Reformer Pilates Classes",
          "description": data?.description || "Professional reformer Pilates instruction focusing on strength, flexibility, and body alignment",
          "provider": {
            "@type": "Organization",
            "name": "Studio Seven Pilates"
          },
          "offers": {
            "@type": "Offer",
            "category": "Fitness"
          }
        }

      default:
        return {
          ...baseData,
          "@type": "WebSite",
          "name": "Studio Seven Pilates",
          "url": "https://studiosevenboutique.com",
          "description": "Transformative reformer Pilates classes and ceremonial-grade matcha bar in Amherstburg, Ontario",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://studiosevenboutique.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  )
}
