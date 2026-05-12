export const config = {
  name: 'Aldridge & Pryce',
  legalName: 'Aldridge & Pryce Solicitors LLP',
  tagline: 'Counsel you can count on.',
  founded: 1983,
  sraNumber: '648291',
  phone: '0161 483 7200',
  email: 'enquiries@aldridgepryce.co.uk',
  address: {
    line1: '12 St Peter\'s Square',
    city: 'Manchester',
    postcode: 'M2 3DF',
    full: '12 St Peter\'s Square, Manchester M2 3DF',
  },
  hours: {
    weekday: 'Monday – Friday: 9:00am – 5:30pm',
    weekend: 'Saturday & Sunday: Closed',
    note: 'Evening appointments available by arrangement',
  },
  social: {
    linkedin: 'https://linkedin.com/company/aldridge-pryce',
    twitter: 'https://twitter.com/aldridgepryce',
  },
  emergency: {
    phone: '0161 483 7201',
    note: '24-hour emergency line for criminal defence matters',
  },
  site: 'https://aldridge-pryce.pages.dev',
  stats: {
    years: 40,
    cases: 2500,
    satisfaction: 98,
    specialists: 12,
  },
} as const;
