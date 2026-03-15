import { config } from '@/config';

export function getLegalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: config.legalName,
    description: `${config.name} is a leading Manchester solicitors firm offering expert legal advice across family law, conveyancing, wills & probate, criminal defence, employment, personal injury, commercial law and dispute resolution. Established ${config.founded}.`,
    url: config.site,
    telephone: config.phone,
    email: config.email,
    image: `${config.site}/og-image.png`,
    logo: `${config.site}/favicon.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address.line1,
      addressLocality: config.address.city,
      postalCode: config.address.postcode,
      addressCountry: 'GB',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:30',
    },
    foundingDate: `${config.founded}`,
    areaServed: {
      '@type': 'City',
      name: 'Manchester',
    },
    priceRange: '££',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
    },
    sameAs: [
      config.social.linkedin,
      config.social.twitter,
    ],
  };
}

export function getWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: `${config.site}${page.url}`,
    isPartOf: {
      '@type': 'WebSite',
      name: config.name,
      url: config.site,
    },
    provider: {
      '@type': 'LegalService',
      name: config.legalName,
    },
  };
}
