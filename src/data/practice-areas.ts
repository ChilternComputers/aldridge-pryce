export interface PracticeArea {
  name: string;
  slug: string;
  description: string;
  keyPoints: string[];
  image: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    name: 'Family Law',
    slug: 'family-law',
    description: 'Family matters demand sensitivity, discretion, and unwavering advocacy. Our family law team guides clients through divorce, child arrangements, financial settlements, and pre-nuptial agreements with care and precision. We understand that behind every case is a family navigating one of life\'s most challenging chapters.',
    keyPoints: [
      'Divorce and separation proceedings',
      'Child arrangements and custody disputes',
      'Financial settlements and consent orders',
      'Pre-nuptial and post-nuptial agreements',
      'Cohabitation disputes and TOLATA claims',
      'Domestic abuse protection orders',
    ],
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80&fit=crop&auto=format',
  },
  {
    name: 'Residential Conveyancing',
    slug: 'residential-conveyancing',
    description: 'Buying or selling a home is one of the most significant transactions you\'ll make. Our conveyancing solicitors handle every stage with meticulous attention to detail — from initial searches and contract review through to exchange and completion. We keep you informed at every step, ensuring a smooth and timely process.',
    keyPoints: [
      'Freehold and leasehold purchases',
      'Property sales and chain management',
      'Remortgages and transfers of equity',
      'New-build purchases and Help to Buy',
      'Shared ownership transactions',
      'Lease extensions and enfranchisement',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&fit=crop&auto=format',
  },
  {
    name: 'Wills, Trusts & Probate',
    slug: 'wills-trusts-probate',
    description: 'Planning for the future gives you peace of mind and protects those you care about. Our private client team drafts wills, establishes trusts, and administers estates with the thoroughness and sensitivity these matters require. We help you safeguard your legacy and ensure your wishes are honoured.',
    keyPoints: [
      'Will drafting and review',
      'Trust creation and administration',
      'Estate administration and probate',
      'Lasting Powers of Attorney',
      'Inheritance tax planning',
      'Court of Protection applications',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&fit=crop&auto=format',
  },
  {
    name: 'Criminal Defence',
    slug: 'criminal-defence',
    description: 'When you\'re facing criminal allegations, the quality of your legal representation matters enormously. Our criminal defence solicitors provide robust, experienced advocacy at every stage — from police station attendance through to Crown Court trial. We protect your rights and fight for the best possible outcome.',
    keyPoints: [
      'Police station representation',
      'Magistrates\' and Crown Court advocacy',
      'Serious and complex crime',
      'Motoring offences and driving bans',
      'Appeals and case reviews',
      'Regulatory and professional investigations',
    ],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fit=crop&auto=format',
  },
  {
    name: 'Employment Law',
    slug: 'employment-law',
    description: 'Whether you\'re an employee facing unfair treatment or an employer navigating complex workforce issues, our employment team provides clear, practical advice. We handle disputes from initial grievance through to tribunal, always seeking the most effective resolution for our clients.',
    keyPoints: [
      'Unfair and constructive dismissal claims',
      'Discrimination and harassment cases',
      'Settlement agreements and negotiations',
      'Employment tribunal representation',
      'Redundancy advice and procedures',
      'Contract disputes and restrictive covenants',
    ],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop&auto=format',
  },
  {
    name: 'Personal Injury',
    slug: 'personal-injury',
    description: 'If you\'ve been injured through no fault of your own, you deserve fair compensation. Our personal injury solicitors work on a no-win, no-fee basis, handling claims for road traffic accidents, workplace injuries, clinical negligence, and more. We fight to secure the settlement you need to rebuild.',
    keyPoints: [
      'Road traffic accident claims',
      'Workplace and industrial injury',
      'Clinical and medical negligence',
      'Slip, trip, and fall accidents',
      'Serious injury and catastrophic claims',
      'No-win, no-fee arrangements',
    ],
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80&fit=crop&auto=format',
  },
  {
    name: 'Commercial & Corporate',
    slug: 'commercial-corporate',
    description: 'From start-ups to established enterprises, our commercial team supports businesses at every stage. We advise on company formation, shareholder agreements, commercial contracts, mergers and acquisitions, and regulatory compliance — providing the strategic legal counsel that helps businesses grow with confidence.',
    keyPoints: [
      'Company formation and structuring',
      'Shareholder agreements and disputes',
      'Commercial contracts and terms of business',
      'Mergers, acquisitions, and disposals',
      'Partnership agreements and LLP formation',
      'Regulatory compliance and governance',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop&auto=format',
  },
  {
    name: 'Dispute Resolution',
    slug: 'dispute-resolution',
    description: 'Not every dispute needs to go to court. Our dispute resolution team explores every avenue — negotiation, mediation, arbitration, and litigation — to resolve conflicts efficiently and cost-effectively. When court proceedings are necessary, we provide tenacious advocacy to protect your interests.',
    keyPoints: [
      'Commercial and contractual disputes',
      'Property and boundary disputes',
      'Debt recovery and enforcement',
      'Professional negligence claims',
      'Mediation and alternative dispute resolution',
      'High Court and County Court litigation',
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&fit=crop&auto=format',
  },
];
