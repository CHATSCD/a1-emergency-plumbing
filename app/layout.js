import './globals.css';
import { site, siteUrl, fullAddress } from '@/lib/site';

/* ------------------------------------------------------------------ *
 * Local SEO: title + description target "Emergency Plumbing + Gulfport, MS"
 * ------------------------------------------------------------------ */
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Emergency Plumber Gulfport, MS | 24/7 A-1 Emergency Plumbing Repair',
    template: '%s | A-1 Emergency Plumbing Repair',
  },
  description:
    '24/7 emergency plumbers in Gulfport, Biloxi & Long Beach, MS. Licensed & insured, 15–30 min response, 4.9★ from 180+ reviews. Call (228) 860-9008.',
  keywords: [
    'emergency plumber Gulfport MS',
    '24 hour plumber Gulfport',
    'emergency plumbing Biloxi MS',
    'plumber Long Beach MS',
    'Harrison County MS plumber',
    'drain cleaning Gulfport',
    'water leak detection Gulfport',
    'sewer line inspection Biloxi',
    'water heater repair Gulfport',
    'main line clog removal',
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: 'plumbing',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: site.name,
    title: 'Emergency Plumber in Gulfport, MS — 24/7 Dispatch | A-1 Emergency Plumbing Repair',
    description:
      'Water leak, main line clog, or no hot water? Licensed Mississippi master plumbers, 15–30 minute average response, 24/7/365. Call (228) 860-9008.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Emergency Plumber Gulfport, MS | 24/7 A-1 Emergency Plumbing Repair',
    description:
      'Local 24/7 emergency plumbing in Gulfport, Biloxi & Long Beach, MS. Avg response 15–30 min. Call (228) 860-9008.',
  },
  other: {
    'format-detection': 'telephone=yes',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A1F44',
};

/* ------------------------------------------------------------------ *
 * schema.org structured data
 * ------------------------------------------------------------------ */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': site.schemaType,
  '@id': `${siteUrl}/#business`,
  name: site.name,
  alternateName: site.shortName,
  description:
    'Family-owned, licensed and insured Mississippi master plumbers providing 24/7 emergency plumbing service to Gulfport, Biloxi, Long Beach, and Harrison County, MS. Drain clearing, main line clogs, leak detection, sewer camera inspections, and hot water heater repair.',
  url: siteUrl,
  telephone: site.phoneE164,
  priceRange: site.priceRange,
  slogan: 'Fast, local, 24/7 emergency plumbing on the Mississippi Gulf Coast.',
  address: fullAddress,
  areaServed: [
    ...site.cities.map((city) => ({ '@type': 'City', name: `${city}, MS` })),
    { '@type': 'AdministrativeArea', name: site.county },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.rating.toString(),
    reviewCount: site.reviewCount.toString(),
    bestRating: '5',
    worstRating: '1',
  },
  review: site.testimonials.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewBody: t.quote,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Emergency Plumbing Services',
    itemListElement: site.services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.blurb,
        areaServed: site.serviceAreaLabel,
      },
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: site.faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <meta name="geo.region" content="US-MS" />
        <meta name="geo.placename" content="Gulfport, Mississippi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
