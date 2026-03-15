export interface Testimonial {
  quote: string;
  author: string;
  matterType: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Catherine handled our divorce with extraordinary sensitivity. At no point did I feel like just another case — she genuinely cared about the outcome for our children. Her advice was always clear, honest, and ultimately proved spot on.',
    author: 'Sarah',
    matterType: 'Family Law Matter',
    rating: 5,
  },
  {
    quote: 'James advised on the sale of our family business. His commercial instincts are sharp, and he spotted issues in the buyer\'s proposal that we\'d completely missed. We achieved a significantly better deal thanks to his involvement.',
    author: 'Michael',
    matterType: 'Corporate Transaction',
    rating: 5,
  },
  {
    quote: 'Thomas made our first house purchase feel effortless. He kept us updated every step of the way and handled the chain delays with patience and professionalism. We\'ve since recommended him to three other couples.',
    author: 'Priya',
    matterType: 'Residential Conveyancing',
    rating: 5,
  },
  {
    quote: 'When I was wrongly accused, David was my rock. His preparation was meticulous, his courtroom presence commanding. The jury returned a not guilty verdict, and I have no doubt that was down to David\'s exceptional skill.',
    author: 'Robert',
    matterType: 'Criminal Defence',
    rating: 5,
  },
  {
    quote: 'Sarah guided us through the probate process after my mother passed. It was an incredibly difficult time, but Sarah was patient, compassionate, and took care of everything. She made an overwhelming process manageable.',
    author: 'Helen',
    matterType: 'Probate & Estate Administration',
    rating: 5,
  },
  {
    quote: 'Emma represented me in an unfair dismissal claim against my former employer. She was thorough, strategic, and fought my corner brilliantly. We settled for substantially more than I\'d expected. Outstanding service.',
    author: 'Daniel',
    matterType: 'Employment Law Matter',
    rating: 5,
  },
  {
    quote: 'After my accident at work, Amara handled my personal injury claim from start to finish. She secured a settlement that covered my rehabilitation and lost earnings. I couldn\'t have got through it without her support.',
    author: 'Karen',
    matterType: 'Personal Injury Claim',
    rating: 5,
  },
  {
    quote: 'We\'ve used Aldridge & Pryce for our business legal needs for over fifteen years. They\'re not the cheapest, but they\'re worth every penny. The quality of advice and the personal service is second to none.',
    author: 'Jonathan',
    matterType: 'Commercial Client',
    rating: 5,
  },
];
