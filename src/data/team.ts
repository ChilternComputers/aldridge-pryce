export interface TeamMember {
  name: string;
  role: string;
  department: 'partners' | 'associates' | 'support';
  specialism: string;
  bio: string;
  qualifications: string[];
  image: string;
}

export const team: TeamMember[] = [
  {
    name: 'Catherine Aldridge',
    role: 'Senior Partner',
    department: 'partners',
    specialism: 'Family Law',
    bio: 'Catherine co-founded the firm in 1983 and has spent over four decades building its reputation for exceptional family law advice. A Resolution-accredited specialist, she handles complex financial settlements and high-net-worth divorce cases with discretion and tenacity. Catherine is recognised in Chambers UK for her "calm authority and forensic attention to detail."',
    qualifications: ['LLB (Hons), University of Manchester', 'Solicitor since 1981', 'Resolution Accredited Specialist', 'Chambers UK Ranked'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&fit=crop&auto=format',
  },
  {
    name: 'James Pryce',
    role: 'Managing Partner',
    department: 'partners',
    specialism: 'Commercial & Corporate',
    bio: 'James joined Catherine as co-founder with a vision to bring City-quality commercial advice to the regions. He advises owner-managed businesses, SMEs, and entrepreneurial clients on transactions, restructuring, and governance. His pragmatic, commercially-focused approach has earned the trust of clients across Greater Manchester and beyond.',
    qualifications: ['LLB (Hons), University of Leeds', 'Solicitor since 1982', 'Legal 500 Recommended', 'Member, Manchester Law Society'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&fit=crop&auto=format',
  },
  {
    name: 'Sarah Whitfield',
    role: 'Partner',
    department: 'partners',
    specialism: 'Wills, Trusts & Probate',
    bio: 'Sarah heads the private client department, advising individuals and families on estate planning, will drafting, trust administration, and probate. She has particular expertise in inheritance tax planning and Court of Protection matters. Clients value her warm, reassuring manner and ability to explain complex matters clearly.',
    qualifications: ['LLB (Hons), University of Sheffield', 'Solicitor since 1998', 'STEP Member (Society of Trust and Estate Practitioners)', 'Dementia Friends Champion'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&fit=crop&auto=format',
  },
  {
    name: 'David Okafor',
    role: 'Partner',
    department: 'partners',
    specialism: 'Criminal Defence',
    bio: 'David is a formidable criminal defence advocate with over twenty years\' experience in serious and complex crime. He regularly appears in the Crown Court and has secured acquittals in cases ranging from fraud to serious violence. Known for his meticulous preparation and compelling courtroom presence, David is the solicitor other lawyers recommend.',
    qualifications: ['LLB (Hons), University of Birmingham', 'Solicitor since 2001', 'Higher Rights of Audience (Criminal)', 'Legal Aid Agency Contract Holder'],
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80&fit=crop&auto=format',
  },
  {
    name: 'Emma Richardson',
    role: 'Senior Associate',
    department: 'associates',
    specialism: 'Employment Law',
    bio: 'Emma advises both employers and employees on the full spectrum of employment law matters. From drafting contracts and policies to representing clients at tribunal, she combines technical expertise with a pragmatic, solutions-focused approach. Emma regularly delivers employment law seminars for Manchester\'s business community.',
    qualifications: ['LLB (Hons), University of Liverpool', 'Solicitor since 2010', 'Employment Lawyers Association Member', 'CIPD Associate'],
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80&fit=crop&auto=format',
  },
  {
    name: 'Thomas Chen',
    role: 'Associate',
    department: 'associates',
    specialism: 'Residential Conveyancing',
    bio: 'Thomas manages a busy caseload of residential property transactions, handling everything from straightforward sales and purchases to complex leasehold matters and new-build completions. His organised, communicative approach ensures clients are never left wondering about the progress of their transaction.',
    qualifications: ['LLB (Hons), University of Manchester', 'Solicitor since 2015', 'Conveyancing Quality Scheme Accredited', 'Member, Property Section, Manchester Law Society'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&auto=format',
  },
  {
    name: 'Amara Hassan',
    role: 'Associate',
    department: 'associates',
    specialism: 'Personal Injury & Dispute Resolution',
    bio: 'Amara handles personal injury claims and civil disputes with determination and empathy. She has secured significant settlements for clients injured in workplace accidents, road traffic collisions, and through clinical negligence. Amara is committed to ensuring that every client receives the compensation and justice they deserve.',
    qualifications: ['LLB (Hons), University of Nottingham', 'Solicitor since 2017', 'APIL Member (Association of Personal Injury Lawyers)', 'Civil Mediation Council Registered Mediator'],
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=600&q=80&fit=crop&auto=format',
  },
  {
    name: 'Rachel Cooper',
    role: 'Practice Manager',
    department: 'support',
    specialism: 'Firm Operations',
    bio: 'Rachel ensures the smooth day-to-day running of the firm, overseeing client care, compliance, and administration. With fifteen years\' experience in legal practice management, she maintains the high standards of service that Aldridge & Pryce clients expect. Rachel is often the first point of contact for new enquiries.',
    qualifications: ['ILFM Fellow (Institute of Legal Finance & Management)', 'GDPR Practitioner Certificate', 'CILEx Level 3 Legal Services'],
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80&fit=crop&auto=format',
  },
];
