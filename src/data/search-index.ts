import { practiceAreas } from './practice-areas';
import { team } from './team';
import { articles } from './insights';

export interface SearchItem {
  title: string;
  description: string;
  url: string;
  type: 'page' | 'practice-area' | 'team' | 'insight';
  meta?: string;
}

const pages: SearchItem[] = [
  { title: 'Home', description: 'Aldridge & Pryce Solicitors — Counsel you can count on. Manchester solicitors since 1983.', url: '/', type: 'page' },
  { title: 'Practice Areas', description: 'Our areas of legal expertise including family law, conveyancing, criminal defence, and more.', url: '/practice-areas/', type: 'page' },
  { title: 'Our Team', description: 'Meet the partners, associates, and support team at Aldridge & Pryce.', url: '/team/', type: 'page' },
  { title: 'About Us', description: 'Our story, values, and four decades of legal service in Manchester.', url: '/about/', type: 'page' },
  { title: 'Testimonials', description: 'What our clients say about working with Aldridge & Pryce.', url: '/testimonials/', type: 'page' },
  { title: 'Fees', description: 'Transparent pricing for conveyancing, wills & probate, and employment tribunal matters.', url: '/fees/', type: 'page' },
  { title: 'Insights', description: 'Legal articles, guides, and updates from our team of specialists.', url: '/insights/', type: 'page' },
  { title: 'Contact', description: 'Get in touch with Aldridge & Pryce. Call, email, or complete our enquiry form.', url: '/contact/', type: 'page' },
  { title: 'Careers', description: 'Join our team. View current vacancies at Aldridge & Pryce in Manchester.', url: '/careers/', type: 'page' },
  { title: 'Privacy & Complaints', description: 'Our privacy policy, data protection practices, and complaints procedure.', url: '/privacy/', type: 'page' },
];

const practiceAreaItems: SearchItem[] = practiceAreas.map((area) => ({
  title: area.name,
  description: area.description.slice(0, 120) + '…',
  url: '/practice-areas/',
  type: 'practice-area',
  meta: area.keyPoints.slice(0, 3).join(', '),
}));

const teamItems: SearchItem[] = team.map((member) => ({
  title: member.name,
  description: `${member.role} — ${member.specialism}`,
  url: '/team/',
  type: 'team',
  meta: member.role,
}));

const insightItems: SearchItem[] = articles.map((article) => ({
  title: article.title,
  description: article.excerpt.slice(0, 120) + '…',
  url: `/insights/`,
  type: 'insight',
  meta: `${article.practiceArea} · ${article.readTime}`,
}));

export const searchIndex: SearchItem[] = [
  ...pages,
  ...practiceAreaItems,
  ...teamItems,
  ...insightItems,
];
