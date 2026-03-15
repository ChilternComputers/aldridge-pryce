export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Practice Areas', href: '/practice-areas/' },
  { label: 'Our Team', href: '/team/' },
  { label: 'About', href: '/about/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'Fees', href: '/fees/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Contact', href: '/contact/' },
];

export interface Accreditation {
  name: string;
  icon: string;
}

export const accreditations: Accreditation[] = [
  { name: 'Chambers UK', icon: 'chambers' },
  { name: 'Legal 500', icon: 'legal500' },
  { name: 'The Law Society', icon: 'lawsociety' },
  { name: 'SRA Regulated', icon: 'sra' },
];
