// Sector content is verbatim from the approved export
// (_source-material/design-export/WVA Sectors.dc.html), with three engineering fixes:
//
//  [BUG FIX] `count` is now derived from the real project data instead of being
//            hand-typed. The export claimed "Mixed Use — 2 projects" when only one
//            Mixed Use project exists.
//  [BUG FIX] Sector cards deep-link to a filtered register. Every card in the export
//            pointed at the unfiltered projects page, so filtering did nothing.
//  [CONTENT] The sector now called Miscellaneous Buildings had no imagery of its own, so
//            the export illustrated it with a Gondia bungalow captioned "Private
//            Bungalow, Gondia". The practice has since supplied its own religious work,
//            and the card now carries one of those images, captioned by what the frame
//            shows. Nothing is claimed that isn't true.

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
  /** URL segment for this sector's own gallery page, where it has one. */
  slug?: string;
  /**
   * Plates for the sector's own page. Only sectors that carry one have this: a sector
   * whose work is filed as projects sends people to the filtered register instead, and
   * a gallery there would only repeat the project pages.
   */
  plates?: { src: string; label: string }[];
  /**
   * Replaces the closing paragraph on the sector's own page. The default asks for plot
   * details, which is the right question for a building and the wrong one for a fit-out.
   */
  enquiry?: string;
  /**
   * A sector with its own gallery AND work filed in the register links to both: the
   * gallery card can only point at one, and the register entries would otherwise be
   * unreachable from the sector.
   */
  register?: { href: string; label: string };
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
    name: 'Miscellaneous Buildings',
    // The export called this sector "Religious Buildings" and the note described only
    // that. The practice renamed it to "Miscellaneous Buildings" (comments sheet, item
    // 10), so the note reads as the catch-all the name promises. [CONTENT]
    /*
     * [CONTENT] Narrowed again on 9 November 2026. The note was widened when four
     * residential towers were added to this page; the practice has since set the page
     * to five plates and the towers are not among them, so the note would have promised
     * work the page no longer shows. It now names what is on the page: religious work,
     * and the sales lobbies and offices that go with a development.
     */
    note: 'The work that falls outside the other four sectors — religious and community buildings, and the sales lobbies and offices a development is sold from, where the brief sets the plan before any building type does.',
    tags: ['Religious', 'Community', 'Sales lobbies'],
    /*
     * [CONTENT] The order and the contents of this page are the practice's own, given
     * on 9 November 2026: the Anjali Mudra temple, the Transindia Grandeur sales lobby,
     * the two churches, and last the Gami Jaydeep Evara sales office.
     *
     * The Evara sales office is not here yet. Nothing in the material supplied so far
     * is identifiably that job — the gold-emblem office renders carry the same medallion
     * as the Transindia Grandeur signage, so they read as Transindia's own offices — and
     * naming one of them Evara would be a claim the images do not make. The practice is
     * sending the file; it goes last.
     *
     * Taken off this page by the same instruction, and kept in the repository rather
     * than deleted: the shrine pavilion, Kannamvar Nagar (two), Gami Jaydeep Evara
     * (two), Ranibagh and White House, Khar now sit in _source-material/withheld-plates.
     * They are out of src/assets because every file under it is emitted into the build
     * whether a page uses it or not, so leaving them there would ship 3 MB of images
     * nothing links to. Moving one back and adding its line here restores it. Those six
     * towers were supplied on 8 November and are now published nowhere on the site.
     *
     * Every label still describes what is in the frame. "Anjali Mudra" and "Transindia
     * Grandeur" are read off the sheets themselves — the first is titled "Concept
     * Option 01 - Anjali Mudra", and the lobby's back wall is signed TRANSINDIA
     * GRANDEUR. The first is labelled a concept because the sheet says so: presenting a
     * proposal as built work would be a claim the drawing does not make. Neither church
     * has been named by the practice, so neither is named here.
     */
    slug: 'miscellaneous',
    plates: [
      {
        src: 'img/p/religious-4.jpg',
        label: 'Anjali Mudra — concept option 01, with elevations, section and plan',
      },
      {
        src: 'img/p/int-grandeur-lobby.jpg',
        label: 'Transindia Grandeur — sales lobby and reception',
      },
      { src: 'img/p/religious-2.jpg', label: 'Church — approach from the forecourt' },
      { src: 'img/p/religious-3.jpg', label: 'Church — front elevation' },
    ],
    // Was the shrine pavilion, which is no longer on the page: a card should open onto
    // the work it shows. This is the first church, as the page now runs.
    image: 'img/p/religious-2.jpg',
    caption: 'Church — approach from the forecourt',
    // Verbatim from the export.
    count: 'On request',
    href: '/sectors/miscellaneous',
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
  {
    no: '06',
    name: 'Interiors',
    // [CONTENT] Added at the practice's request (comments sheet, item 11 — the one-line
    // description was outstanding and the practice asked that one be written). Nothing
    // here is invented: it describes RaviRaj Royal, Borivali — the one project filed
    // under the Interiors sector, whose own record lists the common lobby, lift lobbies,
    // false ceilings and a marble/glass/timber/metal palette — and Interior Design is
    // one of the practice's six services. No new project, client or capability is
    // claimed. (This note used to cite the old service line "Interior design for lobbies
    // and common areas", which the practice has since replaced with "Interior Design".)
    /*
     * [CONTENT] Widened when the practice supplied its interiors archive (Google Drive,
     * "INTERIOR IMAGES FOR WEB", 8 November 2026). The note used to describe lobby and
     * common-area refurbishment only — true of the one project filed in the register,
     * but contradicted by the show flats, private residences and offices now on the
     * page below it. It names the work that is actually shown, and the tags follow.
     */
    note: 'Entrance lobbies, lift lobbies and amenity floors, show flats, private residences and offices — work carried out inside a shell that already exists, where finish, light and signage do what structure cannot.',
    tags: ['Lobbies', 'Show flats', 'Residences', 'Workplace'],
    /*
     * [CONTENT] The practice's interiors archive, supplied as eight folders of renders.
     *
     * Every label describes what is in the frame. Two carry a name because the render
     * itself does — the lift-lobby sheet is signed PRINCE TOWER and the reception sheet
     * TRANSINDIA GRANDEUR — and two carry a place because the practice's own filenames
     * do (LIVING GOREGAON, MIRA LIVING). Nothing else here asserts a project, a client,
     * a developer or a location: the folders are named by room type, not by job, and the
     * practice has not said whose these are. "Show flat", "private residence",
     * "bungalow" and "office" are the practice's own folder names.
     *
     * Four sheets from the bungalow set — both theatre views and both bar-lounge views —
     * are not here. They are 8.5–9.4 MB each and could not be pulled from Drive; they
     * need re-exporting smaller before they can be added.
     */
    slug: 'interiors',
    plates: [
      { src: 'img/p/int-grandeur-lobby.jpg', label: 'Transindia Grandeur — sales lobby and reception' },
      { src: 'img/p/int-prince-lobby.jpg', label: 'Prince Tower — lift lobby' },
      { src: 'img/p/int-gym-1.jpg', label: 'Gymnasium — cardio floor' },
      { src: 'img/p/int-gym-2.jpg', label: 'Gymnasium — free weights and mirrored wall' },
      { src: 'img/p/int-pool.jpg', label: 'Indoor swimming pool and lounge' },
      { src: 'img/p/int-chembur-1.jpg', label: 'Chembur show flat — bedroom, through to the living room' },
      { src: 'img/p/int-chembur-2.jpg', label: 'Chembur show flat — bedroom with marble media wall' },
      { src: 'img/p/int-chembur-3.jpg', label: 'Chembur show flat — bedroom, panelled media wall and wardrobe' },
      { src: 'img/p/int-chembur-4.jpg', label: 'Chembur show flat — living room, dining beyond' },
      { src: 'img/p/int-showflat-living.jpg', label: 'Show flat — living room' },
      { src: 'img/p/int-showflat-master-bed.jpg', label: 'Show flat — master bedroom and dresser' },
      { src: 'img/p/int-showflat-children-bed.jpg', label: 'Show flat — children’s bedroom' },
      { src: 'img/p/int-showflat-kitchen.jpg', label: 'Show flat — kitchen' },
      { src: 'img/p/int-showflat-bath.jpg', label: 'Show flat — bathroom' },
      { src: 'img/p/int-showflat-vanity.jpg', label: 'Show flat — vanity counter' },
      { src: 'img/p/int-goregaon-living.jpg', label: 'Living and dining, Goregaon' },
      { src: 'img/p/int-mira-living.jpg', label: 'Living and dining, Mira Road' },
      { src: 'img/p/int-bath-fluted.jpg', label: 'Bathroom — fluted timber and marble' },
      { src: 'img/p/int-bedroom-panelled.jpg', label: 'Bedroom — panelled headboard wall' },
      { src: 'img/p/int-residence-living-1.jpg', label: 'Private residence — living room' },
      { src: 'img/p/int-residence-living-2.jpg', label: 'Private residence — living room, from the dining table' },
      { src: 'img/p/int-residence-terrace-lounge.jpg', label: 'Private residence — terrace lounge and games room' },
      { src: 'img/p/int-residence-terrace.jpg', label: 'Private residence — terrace at dusk' },
      { src: 'img/p/int-residence-bedroom-1.jpg', label: 'Private residence — main bedroom' },
      { src: 'img/p/int-residence-bedroom-2.jpg', label: 'Private residence — second bedroom' },
      { src: 'img/p/int-residence-guest-bedroom.jpg', label: 'Private residence — guest bedroom' },
      { src: 'img/p/int-residence-guest-bath.jpg', label: 'Private residence — guest bathroom' },
      { src: 'img/p/int-bungalow-living-1.jpg', label: 'Bungalow — living room and courtyard' },
      { src: 'img/p/int-bungalow-living-2.jpg', label: 'Bungalow — living room, fireplace wall' },
      { src: 'img/p/int-bungalow-porch.jpg', label: 'Bungalow — entrance porch' },
      { src: 'img/p/int-office-cabin-1.jpg', label: 'Office — private cabin' },
      { src: 'img/p/int-office-cabin-2.jpg', label: 'Office — cabin with meeting seats' },
      { src: 'img/p/int-office-reception-1.jpg', label: 'Office — reception and waiting lounge' },
      { src: 'img/p/int-office-boardroom.jpg', label: 'Office — boardroom' },
      { src: 'img/p/int-office-reception-2.jpg', label: 'Office — reception desk' },
    ],
    enquiry:
      'Tell us the shell you have and what it has to do, and we will tell you what can be changed inside it.',
    // The one Interiors project filed in the register. The card now opens the gallery,
    // so without this link the project page would be unreachable from its own sector.
    register: { href: filtered('Interiors'), label: 'Interiors in the project register' },
    image: 'img/p/borivali-2.jpg',
    caption: 'RaviRaj Royal, Borivali — main lobby',
    // Was the project count. The card opens a gallery of 35 plates now, so "1 project"
    // beside it would describe the register rather than what the card leads to. The same
    // label the other gallery card carries.
    count: 'On request',
    href: '/sectors/interiors',
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
  { no: '04', name: 'Miscellaneous Buildings', note: 'Religious and community buildings, and work outside the other four sectors.' },
  { no: '05', name: 'Mixed Use Development', note: 'Master layouts from micro to macro level.' },
  // Added with the sector itself, so the home list and /sectors agree on how many there
  // are. The home page already named Interiors in its sector ticker.
  { no: '06', name: 'Interiors', note: 'Lobbies, show flats, residences and offices fitted out inside an existing shell.' },
];
