// Sector content is verbatim from the approved export
// (_source-material/design-export/WVA Sectors.dc.html), with three engineering fixes:
//
//  [BUG FIX] `count` is now derived from the real project data instead of being
//            hand-typed. The export claimed "Mixed Use — 2 projects" when only one
//            Mixed Use project exists.
//  [BUG FIX] Sector cards deep-link to a filtered register. Every card in the export
//            pointed at the unfiltered projects page, so filtering did nothing.
//  [CONTENT] Religious Buildings had no religious imagery, so the export illustrated it
//            with a Gondia bungalow captioned "Private Bungalow, Gondia". The practice
//            has since supplied its own religious work, and the card now carries one of
//            those images. Nothing is claimed that isn't true.

import { countBySector, type Sector } from './projects';

export interface SectorEntry {
  no: string;
  name: string;
  note: string;
  tags: string[];
  /** Path under src/assets, or null while awaiting artwork. */
  image: string | null;
  /** Caption shown under the plate. Empty when there is no image to caption. */
  caption: string;
  /** Right-hand label under the plate — a count, or a verbatim label from the export. */
  count: string;
  /** Where the card links. Sectors with no projects invite an enquiry, as in the export. */
  href: string;
}

const plural = (n: number) => `${n} project${n === 1 ? '' : 's'}`;

const filtered = (sector: Sector) => `/projects?sector=${encodeURIComponent(sector)}`;

export const sectors: SectorEntry[] = [
  {
    no: '01',
    name: 'Residential Buildings',
    note: 'Towers, redevelopment and rehab schemes across Mumbai — from single plots to multi-wing layouts, planned around what the site and the byelaws will carry.',
    tags: ['Towers', 'Redevelopment', 'Rehab'],
    image: 'img/p/bellavista-4.jpg',
    caption: 'The Bella Vista, Mahim',
    count: plural(countBySector('Residential')),
    href: filtered('Residential'),
  },
  {
    no: '02',
    name: 'Commercial Buildings',
    note: 'Office developments, retail frontage and hospitality — from a landmark commercial tower to the street edge of a residential scheme.',
    tags: ['Offices', 'Retail', 'Hospitality'],
    image: 'img/p/kanya-1.jpg',
    caption: 'Highway hotel, Kanyakumari',
    count: plural(countBySector('Commercial')),
    href: filtered('Commercial'),
  },
  {
    no: '03',
    name: 'IT Parks / Office Buildings',
    note: 'Business-district character at metropolitan scale, planned for floorplate efficiency and a facade that holds its own on the skyline.',
    tags: ['Workplace', 'Floorplates', 'Facade'],
    image: 'img/p/blueridge-1.jpg',
    caption: 'Blue Ridge, near BKC',
    // Verbatim from the export — this sector carries no project count.
    count: 'Metropolitan',
    // No projects are filed under this sector, so the card invites an enquiry
    // rather than dead-ending on an empty register. [BUG FIX]
    href: '/contact',
  },
  {
    no: '04',
    name: 'Religious Buildings',
    note: 'Temples, prayer halls and community religious spaces — where procession, gathering and daylight set the plan before anything else.',
    tags: ['Temples', 'Prayer halls', 'Gathering'],
    image: 'img/p/religious-1.jpg',
    // Describes what the image shows. The practice has not supplied a project name or
    // location for this work, so none is asserted here — replace once it does.
    caption: 'Shrine and water court',
    // Verbatim from the export.
    count: 'On request',
    href: '/contact',
  },
  {
    no: '05',
    name: 'Mixed Use Development',
    note: 'Master layouts from micro to macro — residential wings, commercial edges and landscaped courts resolved as one plan.',
    tags: ['Master layout', 'Podium', 'Landscape'],
    image: 'img/p/mhnagar-8.jpg',
    caption: 'Master layout, aerial',
    count: plural(countBySector('Mixed Use')),
    href: filtered('Mixed Use'),
  },
];

/**
 * Process steps — verbatim from the export.
 *
 * Currently unrendered: the "How we work" sections that used these were removed from
 * the home page and from /sectors at the practice's request. Kept because this is the
 * practice's own content, not dead code — delete it only if the process itself changes.
 */
export const steps = [
  { no: '01', name: 'Brief', note: "The client's dream and requirement, written down as a programme." },
  { no: '02', name: 'Discussion & Research', note: 'Site, byelaws and context studied before a line is drawn.' },
  { no: '03', name: 'Plans & Elevations', note: 'Massing options tested against setbacks and sight lines.' },
  { no: '04', name: '3D Integration', note: 'Volume checked in three dimensions, then rendered for the client.' },
  { no: '05', name: '2D CAD', note: 'Working drawings issued to consultants and site.' },
  { no: '06', name: 'Approvals', note: 'Municipal submission carried through with our advisory partners.' },
];

/** Consultant alliances — verbatim from the export. Unrendered, as `steps` above. */
export const alliances = [
  'Structural',
  'MEP & HVAC',
  'Rainwater Harvesting',
  'Landscape',
  'Municipal Advisory',
  'Traffic',
  'Green Building',
  '3D Visualisation',
];

/** Short sector list used on the home page — verbatim from the export. */
export const homeSectors = [
  { no: '01', name: 'Residential Buildings', note: 'Towers, redevelopment and rehab schemes across Mumbai.' },
  { no: '02', name: 'Commercial Buildings', note: 'Hotels, retail and sales experience centres.' },
  { no: '03', name: 'IT Parks / Office Buildings', note: 'Business district character at metropolitan scale.' },
  { no: '04', name: 'Religious Buildings', note: 'Temples, prayer halls and community religious spaces.' },
  { no: '05', name: 'Mixed Use Development', note: 'Master layouts from micro to macro level.' },
];
