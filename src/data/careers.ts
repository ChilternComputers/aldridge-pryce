export interface JobListing {
  title: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  location: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  closing: string;
}

export const jobListings: JobListing[] = [
  {
    title: 'Family Law Solicitor',
    department: 'Family Law',
    type: 'Full-time',
    location: 'Manchester (St Peter\'s Square)',
    salary: '£45,000 – £55,000',
    description: 'We are looking for an experienced family law solicitor (3–5 PQE) to join our well-established family team. You will manage your own caseload of divorce, financial remedy, and private children matters, working closely with our Senior Partner, Catherine Aldridge.',
    responsibilities: [
      'Manage a varied caseload of family law matters from instruction to conclusion',
      'Advise clients on divorce, financial settlements, and child arrangements',
      'Draft court applications, statements, and correspondence',
      'Attend court hearings, mediations, and conferences',
      'Contribute to the development and mentoring of junior team members',
      'Build and maintain client relationships and referral networks',
    ],
    requirements: [
      'Qualified solicitor with 3–5 years PQE in family law',
      'Experience of financial remedy and private children work',
      'Strong client care skills and empathetic approach',
      'Excellent written and oral advocacy skills',
      'Resolution membership desirable but not essential',
    ],
    closing: '30 April 2026',
  },
  {
    title: 'Conveyancing Executive',
    department: 'Residential Conveyancing',
    type: 'Full-time',
    location: 'Manchester (St Peter\'s Square)',
    salary: '£28,000 – £35,000',
    description: 'An opportunity to join our busy conveyancing department, handling a caseload of residential property transactions. You will work alongside Thomas Chen, advising clients on freehold and leasehold purchases, sales, remortgages, and transfers of equity.',
    responsibilities: [
      'Manage a caseload of 50–70 residential conveyancing files',
      'Conduct property searches and review results',
      'Draft contracts, transfers, and completion statements',
      'Liaise with estate agents, mortgage lenders, and other solicitors',
      'Keep clients informed of progress at every stage',
      'Ensure compliance with CQS and SRA standards',
    ],
    requirements: [
      'Licensed conveyancer or legal executive with conveyancing experience',
      'Minimum 2 years\' experience in residential conveyancing',
      'Strong organisational skills and attention to detail',
      'Experience with case management systems',
      'CQS accreditation desirable',
    ],
    closing: '18 April 2026',
  },
  {
    title: 'Paralegal — Criminal Defence',
    department: 'Criminal Defence',
    type: 'Full-time',
    location: 'Manchester (St Peter\'s Square)',
    salary: '£22,000 – £26,000',
    description: 'We are seeking a motivated paralegal to support David Okafor and the criminal defence team. This is an excellent opportunity for a law graduate or aspiring solicitor to gain hands-on experience in serious and complex criminal matters.',
    responsibilities: [
      'Prepare case bundles, schedules of evidence, and defence statements',
      'Attend police stations with qualified solicitors',
      'Take witness statements and conduct client interviews',
      'Research legal authorities and prepare case summaries',
      'Manage file administration and court diary',
      'Assist with applications for bail, legal aid, and case management',
    ],
    requirements: [
      'Law degree or equivalent legal qualification',
      'Genuine interest in criminal law and advocacy',
      'Excellent research and written communication skills',
      'Ability to work under pressure and meet deadlines',
      'Police station accreditation (or willingness to obtain) desirable',
    ],
    closing: '25 April 2026',
  },
  {
    title: 'Legal Secretary',
    department: 'Practice Support',
    type: 'Part-time',
    location: 'Manchester (St Peter\'s Square)',
    salary: '£12 – £14 per hour',
    description: 'A part-time (3 days per week) legal secretary role supporting our private client and commercial teams. You will provide high-quality secretarial and administrative support, ensuring the smooth running of busy caseloads.',
    responsibilities: [
      'Audio and copy typing of legal documents and correspondence',
      'Diary management and scheduling client appointments',
      'Filing, archiving, and document management',
      'Telephone and email handling for fee earners',
      'Billing support and time recording administration',
      'General office duties as required',
    ],
    requirements: [
      'Previous experience as a legal secretary (minimum 1 year)',
      'Accurate typing at 60+ WPM',
      'Proficiency in Microsoft Office and legal case management software',
      'Professional telephone manner and strong attention to detail',
      'Ability to work independently and manage competing priorities',
    ],
    closing: '11 April 2026',
  },
];
