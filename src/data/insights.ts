export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  practiceArea: string;
  date: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    title: 'Employment Rights Act 2025: What Employers Need to Know',
    slug: 'employment-rights-act-2025',
    excerpt: 'The Employment Rights Act 2025 introduces significant changes to worker protections, including day-one unfair dismissal rights and enhanced flexible working provisions. We examine the key changes and what employers should do to prepare.',
    practiceArea: 'Employment Law',
    date: '2026-02-15',
    readTime: '6 min read',
  },
  {
    title: 'Buying Your First Home: A Step-by-Step Legal Guide',
    slug: 'first-home-legal-guide',
    excerpt: 'Navigating the conveyancing process can feel overwhelming for first-time buyers. Our step-by-step guide explains what happens at each stage, what to look out for, and how to avoid common pitfalls that delay completion.',
    practiceArea: 'Conveyancing',
    date: '2026-01-28',
    readTime: '8 min read',
  },
  {
    title: 'Why Every Adult Needs a Lasting Power of Attorney',
    slug: 'lasting-power-of-attorney',
    excerpt: 'A Lasting Power of Attorney isn\'t just for the elderly. We explain why every adult should consider putting LPAs in place, the two types available, and what happens if you lose capacity without one.',
    practiceArea: 'Wills & Probate',
    date: '2026-01-10',
    readTime: '5 min read',
  },
  {
    title: 'Divorce and Financial Settlements: Protecting Your Interests',
    slug: 'divorce-financial-settlements',
    excerpt: 'Financial settlements on divorce can be complex, particularly where there are business assets, pensions, or properties in multiple jurisdictions. We outline the key principles courts apply and how to achieve a fair outcome.',
    practiceArea: 'Family Law',
    date: '2025-12-05',
    readTime: '7 min read',
  },
  {
    title: 'Commercial Lease Disputes: Your Rights as a Tenant',
    slug: 'commercial-lease-disputes',
    excerpt: 'Disputes between commercial landlords and tenants are increasingly common. From service charge challenges to break clause disputes, we explain your rights and the options available for resolution.',
    practiceArea: 'Dispute Resolution',
    date: '2025-11-18',
    readTime: '6 min read',
  },
  {
    title: 'What to Do If You\'re Arrested: Your Rights Explained',
    slug: 'arrested-your-rights',
    excerpt: 'Being arrested is frightening, but knowing your rights can make a significant difference. We explain what happens at the police station, your right to legal representation, and why you should always seek advice before answering questions.',
    practiceArea: 'Criminal Defence',
    date: '2025-10-22',
    readTime: '5 min read',
  },
];
