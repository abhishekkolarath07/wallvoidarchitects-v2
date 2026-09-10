// Site-wide constants. Contact details are verbatim from the approved export —
// no address, phone or email has been invented or altered.

export const site = {
  name: 'Wall Voids Architects',
  shortName: 'WVA',
  /** Update to the live apex domain before launch; also update astro.config.mjs `site`. */
  url: 'https://www.wallvoidsarchitects.com',
  locale: 'en_IN',
  lang: 'en',
  description:
    'Wall Voids Architects is a Mumbai architecture practice working on residential, commercial and mixed-use buildings — design, interiors, working drawings and municipal approvals.',
  email: 'info@wva.co.in',
  city: 'Mumbai',
  address: {
    street: 'A-123, Sussex Industrial Estate A, Dadoji Kondeo Marg',
    locality: 'Byculla (E)',
    region: 'Maharashtra',
    postalCode: '400027',
    country: 'IN',
  },
  addressLines: [
    'A-123, Sussex Industrial Estate A,',
    'Dadoji Kondeo Marg, Byculla (E),',
    'Mumbai, Maharashtra 400027',
  ],
  mapUrl: 'https://www.google.com/maps/search/Sussex+Industrial+Estate+Byculla+Mumbai',
  hours: ['Monday – Saturday', '10:00 – 19:00 IST'],
  openingHours: 'Mo-Sa 10:00-19:00',
  accreditation: 'Council of Architecture, India',
  founded: '2026',
} as const;

/** Primary navigation — exactly the four items the export ships. Do not add to this. */
export const navigation = [
  { label: 'Projects', href: '/projects' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
] as const;

/** Footer sector labels — plain text in the export, not links. Preserved as such. */
export const footerSectors = ['Residential', 'Commercial', 'IT Parks / Office', 'Mixed Use'] as const;

export const colors = {
  ink: '#0d0d0d',
  paper: '#ffffff',
  accent: '#e2231a',
  wash: '#f7f7f7',
  sand: '#8a7f6a',
} as const;
