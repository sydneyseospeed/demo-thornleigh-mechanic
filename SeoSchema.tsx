export default function SeoSchema() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': 'https://REPLACE_LATER_DOMAIN/#business',
    name: 'Thornleigh Mechanic & Auto Electrician',
    image: 'https://REPLACE_LATER_DOMAIN/logo.png',
    description: 'Professional auto repairs, servicing and electrical work in Thornleigh. Fast, reliable service with guaranteed workmanship.',
    url: 'https://REPLACE_LATER_DOMAIN',
    telephone: 'REPLACE_WITH_PHONE',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'REPLACE_WITH_ADDRESS',
      addressLocality: 'Thornleigh',
      addressRegion: 'NSW',
      postalCode: '2120',
      addressCountry: 'AU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.7320,
      longitude: 151.0790
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '17:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00'
      }
    ],
    priceRange: '$',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -33.7320,
        longitude: 151.0790
      },
      geoRadius: '20000'
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How quickly can you service my car?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer same-day service for most repairs. For major work, we'll provide a timeline after inspection.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you service all makes and models?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we service all Australian, European, and Asian vehicles, including hybrids.'
        }
      },
      {
        '@type': 'Question',
        name: 'What warranty do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All our work comes with a 12-month/20,000km warranty for your peace of mind.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I get a quote before the work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We provide detailed quotes before any work begins, with no hidden costs.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer payment plans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer flexible payment options including Afterpay for larger repairs.'
        }
      }
    ]
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://REPLACE_LATER_DOMAIN'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://REPLACE_LATER_DOMAIN/contact'
      }
    ]
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://REPLACE_LATER_DOMAIN/#website',
    url: 'https://REPLACE_LATER_DOMAIN',
    name: 'Thornleigh Mechanic & Auto Electrician',
    description: 'Expert car service and repairs in Thornleigh',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://REPLACE_LATER_DOMAIN/?s={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, faqSchema, breadcrumbSchema, websiteSchema]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
    />
  )
}