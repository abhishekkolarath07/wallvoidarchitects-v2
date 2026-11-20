// GENERATED from the approved Claude Design export — content is verbatim.
// Source: _source-material/design-export/{WVA Project,WVA Projects,index.html}.dc.html
// Do not invent values here. "To be confirmed" is a real, deliberate state.
//
// Project facts are cross-checked against the practice's own project documents.
// Two generations of those exist: an earlier detailed set carrying the figures, and
// a later "Building At …" set that restates the names, types and features. Where the
// two disagree, the practice has ruled that the later set wins; the figures still come
// from the earlier set, which is the only place they are given at all.

export type Sector = 'Residential' | 'Commercial' | 'Mixed Use' | 'Interiors';

export interface GalleryImage {
  src: string;
  label: string;
  /**
   * Overrides for a plate that will not sit in the gallery's usual rhythm. A
   * presentation sheet needs the full twelve columns and its own proportions — put it
   * in a four-column band at a fixed height and its drawings are unreadable.
   *
   * `span` is a grid-column value; `ratio` an aspect-ratio, used in place of the
   * rhythm's fixed height so the sheet shows whole at whatever width the page has.
   */
  span?: string;
  ratio?: string;
}

export interface Project {
  slug: string;
  no: string;
  name: string;
  location: string;
  sector: Sector;
  type: string;
  developer: string;
  plot: string;
  bua: string;
  status: string;
  conceptName: string;
  tagline: string;
  overview: string;
  concept: string;
  margin: string;
  features: string[];
  planning: string[];
  hero: string;
  wide: string;
  wideCaption: string;
  images: GalleryImage[];
  /** Client/locality line used on the register and index cards. */
  client: string;
  /** Card image on /projects. */
  cardImage: string;
  /** Card note on /projects. */
  cardNote: string;
  /**
   * Hero wipe overrides. The wipe reads render on one side, drawing on the other,
   * so the two must be the same view of the building — each sketch is paired with
   * the render it was drawn from, which is not always the register image.
   * Both optional: `homePlate` falls back to `homeImage`, `homeInk` to its `ink-` twin.
   */
  homePlate?: string;
  homeInk?: string;
  /** Register image on the home page. */
  /**
   * The plate shown beside the home page's "01 / Selected Works" register — the
   * practice's own rendered drawing of the project, one per sheet.
   *
   * The hero reads this too, but only as a fallback: a project that appears in the
   * hero names `homePlate` and `homeInk` explicitly, so the hero is unaffected by
   * what this points at.
   */
  homeImage: string;
  /** Register margin-note on the home page. */
  homeNote: string;
}

/** The export marks unverified figures with this exact string. Preserve it. */
export const UNCONFIRMED = 'To be confirmed';

export const isConfirmed = (value: string): boolean =>
  Boolean(value) && value !== UNCONFIRMED;

export const projects: Project[] = [
  {
    slug: "prince-tower",
    no: "01",
    name: "Prince Tower",
    location: "Dharavi, Mumbai",
    sector: "Residential",
    type: "High-rise residential redevelopment",
    developer: "Punit Construction",
    plot: "2,115 sq.ft.",
    bua: "101,220 sq.ft. (sale building)",
    status: "Completed",
    conceptName: "Lotus Petal Curves",
    tagline: "Curves drawn from lotus petals, breaking the straight repetition of the surrounding skyline.",
    overview: "Prince Tower is a high-rise residential redevelopment planned within an existing structural framework, with the original plinth and columns retained and integrated into the new design. Instead of rebuilding, the project focuses on improving the residential planning, circulation, façade and overall architectural identity within the existing structure.",
    concept: "The apartments feature curved external edges inspired by the form of lotus petals. These petal-like curves shape the building’s distinctive form while allowing the existing structural grid to be adapted into more fluid and efficient layouts. The façade continues the idea through continuous curved balcony bands that soften the vertical scale, with white structural frames, large glazed areas and warm finishes creating depth, movement and changing shadows through the day. Against the straight, repetitive forms of the surrounding context, the lotus-inspired curves introduce a softer architectural language and reshape the local skyline. A sculptural rooftop feature completes the composition.",
    margin: "petals, not planes",
    features: [
      "Curved balconies with glass railings",
      "Floor-to-ceiling windows and extensive glazing",
      "Repetitive white architectural frames",
      "Warm wooden balcony soffits",
      "Ground-level commercial frontage",
      "Landscaped entrance and pedestrian areas",
      "Integrated façade lighting",
      "Sculptural landscaped rooftop crown"
    ],
    planning: [
      "Existing constructed plinth and columns retained",
      "Five residences on a typical floor",
      "Central core with four lifts",
      "Separate staircases for circulation and fire safety",
      "Two open-to-sky courts for light and ventilation",
      "Wide lift lobby and connecting passages"
    ],
    hero: "img/p/prince-2.jpg",
    wide: "img/p/prince-3.jpg",
    wideCaption: "Rooftop crown, aerial study",
    images: [
      { src: "img/p/prince-1.jpg", label: "Site context at night" },
      { src: "img/p/prince-entrance.jpg", label: "Entrance canopy and lobby at dusk" }
    ],
    client: "Punit Construction · Dharavi",
    cardImage: "img/p/prince-2.jpg",
    cardNote: "Lotus-petal curves, drawn inside a retained plinth and column grid.",
    homeImage: "img/p/reg-prince-tower.jpg",
    homePlate: "img/p/prince-3.jpg",
    homeInk: "img/p/sketch-prince-tower.jpg",
    homeNote: "Built within the existing plinth and columns; curved balcony bands and a sculptural rooftop crown.",
  },
  {
    slug: "bellavista",
    no: "02",
    name: "The Bella Vista",
    location: "Mahim, Mumbai",
    sector: "Residential",
    type: "High-rise residential and commercial development",
    developer: "Transindia Group",
    plot: "2,700 sq.mt.",
    bua: "34,027 sq.mt.",
    status: "Planning / Approval",
    conceptName: "The Elevated Green Community",
    tagline: "A rooftop turned into an elevated green community, answering the compactness of Mumbai living.",
    overview: "Bella Vista is a contemporary high-rise residential development designed to create a strong and refined presence within the urban landscape, combining well-planned residential towers with commercial spaces at ground level. Clean vertical façade fins emphasize the height of the towers, while curved corner balconies soften the massing and add movement. A restrained white and grey palette, darker accents, extensive glazing and integrated greenery give the towers a sophisticated contemporary character.",
    concept: "Bella Vista is designed in response to the way people live in a dense and fast-growing city, where limited land and a busy urban lifestyle leave little room to connect with nature. Rather than treating the roof as a service area, the design transforms it into an elevated green community space with landscaped gardens, a jogging track, children’s play areas, seating, pergolas and recreational lawns. The rooftop becomes an extension of the residents’ living space — a place to breathe, walk, play and interact — balancing high-density living against the need for greenery, recreation and community.",
    margin: "the roof is the missing garden",
    features: [
      "Multiple high-rise residential wings",
      "Ground-floor commercial frontage",
      "Stilt-level parking",
      "Curved corner balconies with extensive glazing",
      "Strong vertical façade fins and framed windows",
      "Landscaped balcony bands",
      "Defined pedestrian and vehicular entrances",
      "Rooftop jogging track",
      "Children’s play area",
      "Landscaped seating and relaxation zones",
      "Pergolas and outdoor gathering spaces",
      "Recreational lawn and activity areas",
      "Integrated façade and terrace lighting"
    ],
    planning: [],
    hero: "img/p/bellavista-1.jpg",
    wide: "img/p/bellavista-7.jpg",
    wideCaption: "Roof landscape, aerial study",
    images: [
      { src: "img/p/bellavista-4.jpg", label: "Approach at dusk" },
      { src: "img/p/bellavista-3.jpg", label: "Corner geometry" },
      { src: "img/p/bellavista-2.jpg", label: "Vertical fin detail" },
      { src: "img/p/bellavista-6.jpg", label: "Wing composition" },
      { src: "img/p/bellavista-5.jpg", label: "Podium and terrace plan" }
    ],
    client: "Transindia Group · Mahim",
    cardImage: "img/p/bellavista-1.jpg",
    cardNote: "The rooftop rebuilt as an elevated green community.",
    homeImage: "img/p/reg-bellavista.jpg",
    homePlate: "img/p/bellavista-1.jpg",
    homeInk: "img/p/sketch-bellavista.jpg",
    homeNote: "The roof rebuilt as an elevated green community — the garden this density leaves out.",
  },
  {
    slug: "estella",
    no: "03",
    name: "Gami Jaydeep Estella",
    location: "Chembur, Mumbai",
    sector: "Residential",
    type: "High-rise residential and commercial development",
    developer: "Gami Group & Jaydeep Group",
    plot: "1,685 sq.mt.",
    bua: "200,000 sq.ft.",
    status: "Ongoing — finishing stage",
    conceptName: "Vertical Garden Frame",
    tagline: "Slender vertical frames rising above an active commercial base, growing lighter and greener as they climb.",
    overview: "The project is conceived as a contemporary residential tower that combines efficient planning, climate-responsive design and integrated greenery. A well-designed commercial base creates an active relationship with the surrounding urban environment, accommodating retail outlets, cafés, services, the main entrance, building support functions and parking access. Above it, the residential floors follow a clear structural and façade rhythm, with recessed balconies, screens and deep openings offering protection from Mumbai’s sun and monsoon rain.",
    concept: "The architectural concept, “Vertical Garden Frame,” organizes the tower as a composition of slender vertical frames rising above a well-integrated commercial base. Strong fins emphasize height and give the façade visual order, while a central glazed bay, recessed balconies and planted ledges reduce the apparent mass. The design becomes progressively lighter and greener as it rises: planting extends from private balconies to elevated terraces and rooftop amenities. A restrained palette of light-toned frames, warm soffits, glazing and greenery reinforces a calm, uncluttered contemporary character.",
    margin: "lighter and greener the higher it goes",
    features: [
      "High-rise residential tower",
      "Ground-floor commercial spaces",
      "Grand entrance gateway",
      "Premium entrance and lift lobby",
      "Glass balconies with warm wooden soffits",
      "Vertical fins and decorative façade screens",
      "Landscaped balconies and terrace gardens",
      "Rooftop jogging track",
      "Multi-purpose sports court",
      "Children’s play area",
      "Pergola seating and social zones",
      "Landscaped lawns and outdoor lounges",
      "Integrated façade and landscape lighting"
    ],
    planning: [
      "A vibrant, human-scaled commercial base",
      "An efficient residential tower above",
      "A distinctive upper profile and rooftop amenity level",
      "Clear separation between public commercial activity and private residences"
    ],
    hero: "img/p/estella-5.jpg",
    wide: "img/p/estella-2.jpg",
    wideCaption: "Rooftop amenity deck, aerial study",
    images: [
      { src: "img/p/estella-4.jpg", label: "Façade detail, upper floors" },
      { src: "img/p/estella-1.jpg", label: "Entrance gateway from the street" },
      { src: "img/p/estella-3.jpg", label: "Entrance lobby" }
    ],
    client: "Gami Group & Jaydeep Group · Chembur",
    cardImage: "img/p/estella-5.jpg",
    cardNote: "Vertical Garden Frame — slender frames growing lighter and greener as they rise.",
    homeImage: "img/p/reg-estella.jpg",
    homePlate: "img/p/estella-4.jpg",
    homeInk: "img/p/sketch-estella.jpg",
    homeNote: "Vertical Garden Frame — the tower grows lighter and greener the higher it climbs.",
  },
  {
    slug: "celeste",
    no: "04",
    name: "The Celeste",
    location: "Khar, Mumbai",
    sector: "Residential",
    type: "High-rise residential and commercial development",
    developer: "Transindia Group",
    plot: "2,307 sq.mt.",
    bua: "211,040 sq.ft. (approx.)",
    status: "Approval stage",
    conceptName: "Sunset Living Terraces",
    tagline: "Broad sundecks and continuous balconies turning the façade into a layered vertical community.",
    overview: "The Celeste is envisioned as a contemporary mixed-use residential tower in Khar, combining premium urban living with an active commercial frontage. A transparent, illuminated ground floor accommodates retail spaces and a clearly defined residential entrance, creating a lively and welcoming street edge. The residential floors feature broad balconies, generous glazing and integrated planters that extend the living spaces while providing shade, natural ventilation and greenery.",
    concept: "Rounded balcony edges soften the building’s mass, while vertical glazed bays and dark louvered screens emphasize height and establish a clear façade rhythm. Recessed openings and projecting elements respond to Mumbai’s intense sunlight and monsoon rain. The concept, “Sunset Living Terraces,” is inspired by Khar’s relaxed yet vibrant urban lifestyle: generous sundecks and continuous balconies extend the residences outdoors, creating comfortable spaces to unwind, socialize and enjoy Mumbai’s evening sky. Curved edges, integrated greenery and protective overhangs provide shade, privacy and shelter from seasonal rain, transforming the façade into a layered vertical community.",
    margin: "evenings belong on the balcony",
    features: [
      "Spacious projecting balconies with glass railings",
      "Curved and rounded façade geometry",
      "Floor-to-ceiling corner glazing",
      "Vertical dark-toned louver panels",
      "Warm wooden balcony ceilings",
      "Integrated balcony planters and greenery",
      "Continuous architectural façade lighting",
      "Ground-floor commercial frontage",
      "Prominent entrance canopy with illuminated signage",
      "Landscaped pedestrian and vehicular approach",
      "Large windows for natural light and exterior views",
      "Strong building branding at entrance and terrace level"
    ],
    planning: [],
    hero: "img/p/celeste-1.jpg",
    wide: "img/p/celeste-6.jpg",
    wideCaption: "Entrance gate at night",
    images: [
      { src: "img/p/celeste-3.jpg", label: "Balcony rhythm at dusk" },
      { src: "img/p/celeste-4.jpg", label: "Night view from approach" },
      { src: "img/p/celeste-2.jpg", label: "Massing against the skyline" },
      { src: "img/p/celeste-5.jpg", label: "Terrace" }
    ],
    client: "Transindia Group · Khar",
    cardImage: "img/p/celeste-1.jpg",
    cardNote: "Sunset Living Terraces — sundecks that turn the façade into a vertical community.",
    homeImage: "img/p/reg-celeste.jpg",
    homePlate: "img/p/celeste-2.jpg",
    homeInk: "img/p/sketch-celeste.jpg",
    homeNote: "Sunset Living Terraces — sundecks and continuous balconies made for Mumbai evenings.",
  },
  {
    slug: "mh-nagar",
    no: "05",
    name: "Urban Courtyard",
    location: "Bandra, near BKC, Mumbai",
    sector: "Mixed Use",
    type: "Large-scale residential redevelopment",
    developer: "Transindia Group",
    plot: "21,532 sq.mt.",
    bua: "15,25,340 sq.ft.",
    status: "Presentation",
    conceptName: "Urban Courtyard Living",
    tagline: "A vertical neighbourhood arranged around a shared landscaped heart, held away from the traffic.",
    overview: "The project is envisioned as a multi-storey, semi-luxury mass-housing development near BKC, offering efficient urban residences within a well-connected and amenity-rich environment. Multiple residential wings are arranged around a landscaped central courtyard, creating a protected community space away from the surrounding traffic and urban activity. The façades follow a clear vertical and horizontal rhythm, using large windows, projecting frames and recessed openings to provide daylight, ventilation and visual order.",
    concept: "The concept, “Urban Courtyard Living,” organizes the development as a vertical neighbourhood centred around a shared landscaped heart. The residential wings define and overlook the internal courtyard, improving natural surveillance while creating a strong sense of community. Vertical façade frames emphasize height and give the large building mass a distinct rhythm. At ground level, greenery, water, play areas and shaded seating create opportunities for relaxation and social interaction — a secure, connected residential environment suited to families living near BKC.",
    margin: "every wing looks onto the same green",
    features: [
      "Multiple high-rise residential wings",
      "Ground-floor commercial frontage",
      "Large glazed windows and framed openings",
      "Strong vertical fins and façade projections",
      "Decorative crown and illuminated roofline",
      "Landscaped podium and rooftop terraces",
      "Swimming pool and deck area",
      "Children’s play zone",
      "Outdoor seating and gathering spaces",
      "Landscaped courtyards and walking paths",
      "Palm-lined entrance and internal roads",
      "Integrated façade and landscape lighting"
    ],
    planning: [],
    hero: "img/p/mhnagar-1.jpg",
    wide: "img/p/mhnagar-7.jpg",
    wideCaption: "Central courtyard and pool deck",
    images: [
      { src: "img/p/mhnagar-2.jpg", label: "Façade grid, upper floors" },
      { src: "img/p/mhnagar-5.jpg", label: "Landscaped podium terrace" },
      { src: "img/p/mhnagar-3.jpg", label: "Approach along the water edge" },
      { src: "img/p/mhnagar-4.jpg", label: "Full wing composition" },
      { src: "img/p/mhnagar-8.jpg", label: "Master layout, aerial study" },
      { src: "img/p/mhnagar-6.jpg", label: "Podium and street level" }
    ],
    client: "Transindia Group · Bandra",
    cardImage: "img/p/mhnagar-1.jpg",
    cardNote: "Urban Courtyard Living — wings arranged around one shared landscaped heart.",
    homeImage: "img/p/reg-mh-nagar.jpg",
    homeNote: "Urban Courtyard Living — every wing looks onto the same landscaped heart.",
  },
  {
    slug: "blue-ridge",
    no: "06",
    name: "Transindia Blue Ridge",
    location: "Bandra Kurla Complex, Mumbai",
    sector: "Commercial",
    type: "Commercial office development",
    developer: "Transindia Group",
    // [CONTENT] Both were "To be confirmed"; the practice wrote the figures on the
    // 19 November comments sheet. Spelled as the rest of the register spells areas.
    plot: "102,612 sq.ft.",
    bua: "300,000 sq.ft.",
    status: "Design stage",
    conceptName: "The Sail and the River",
    tagline: "A form shaped by wind and water, drawn from the sail of a ship on the Mithi River.",
    overview: "Transindia Blue Ridge is envisioned as a contemporary commercial development near BKC, one of Mumbai’s principal business districts. The site occupies a strategically visible location near the Mithi River, Mumbai University, the international airport and the BKC-MMRDA precinct, giving the building strong regional connectivity and landmark potential. Framed by Bharat Nagar Road, Sant Dnyaneshwar Road and Shree Hari Mandir Road, its edges respond to different contexts: the river and open view corridor to the north-east, existing residential buildings to the west and south, and major urban connections toward BKC.",
    concept: "The design concept is inspired by the characteristics of the adjoining Mithi River and the physiognomy of ships. Like a sailing vessel responding to wind and water, the building is shaped by the river edge, prevailing wind direction and surrounding urban view corridors. The western side draws its form from the curving sail of a ship, creating a dynamic inner concave volume, while the eastern and northern glass façades take inspiration from the broad profile of a sail, opening the commercial floors toward natural light, river views and the city skyline. An undulating wave-inspired façade defines the lower levels, creating a fluid entrance experience and integrating the lobby, restaurants, cafés and social-collaboration spaces with the ground plane. The resulting form blends with BKC’s sophisticated commercial character while establishing a distinctive urban landmark shaped by movement, wind and water.",
    margin: "a sail, held against the Mithi",
    features: [
      "Commercial offices oriented to river views and daylight",
      "Service core buffering the residential edge",
      "Grand landscaped drop-off",
      "Transparent double-height entrance lobby",
      "Restaurants and cafeterias at ground level",
      "Social and digital collaboration spaces at varied scales",
      "Flexible office plates for different business requirements",
      "Curving sail-form western façade",
      "Broad glazed sail façades to east and north",
      "Undulating wave-inspired lower façade",
      "Panoramic glazing toward the city skyline",
      "Natural cross-ventilation across office floors"
    ],
    planning: [
      "North-east — river frontage and open view corridor",
      "West and south — service core buffering existing residences",
      "Ground level — drop-off, lobby, restaurants and collaboration spaces",
      "Upper levels — flexible commercial office plates"
    ],
    hero: "img/p/blueridge-1.jpg",
    wide: "img/p/blueridge-2.jpg",
    wideCaption: "Entrance canopy and undulating lower façade",
    images: [
      { src: "img/p/blueridge-3.jpg", label: "Social collaboration spaces and drop-off" },
      { src: "img/p/blueridge-4.jpg", label: "Entrance lobby at night" },
      { src: "img/p/blueridge-5.jpg", label: "Ground floor plan" }
    ],
    client: "Transindia Group · BKC",
    cardImage: "img/p/blueridge-1.jpg",
    cardNote: "A sail against the Mithi — offices shaped by wind, water and view corridors.",
    homeImage: "img/p/reg-blue-ridge.jpg",
    homeNote: "The Sail and the River — a commercial form drawn from wind, water and the Mithi edge.",
  },
  {
    /*
     * [CONTENT] Added 19 November 2026 from the practice's own three A3 presentation
     * sheets ("Asiad Colony — Three A3 Landscape Sheets"). Everything below is read off
     * those sheets; nothing is inferred.
     *
     * No developer, plot area or built-up area appears on them, so all three stay at
     * UNCONFIRMED rather than being guessed at. The status reads Design stage because
     * the sheets describe a proposal throughout — "the proposed twin towers", "design
     * intent", "a vision" — and show no approval or construction.
     *
     * The arrival and movement diagram was Plate 05 and is removed at the practice's
     * request; its file goes with it rather than sitting unreferenced in src/assets,
     * where everything is emitted into the build whether a page uses it or not. It is
     * in the git history and on sheet 03 if it is ever wanted back.
     *
     * The imagery is the practice's own render and drawings. The sheets also carry
     * panels headed LOOKALIKES and photographs of neighbouring buildings, which are
     * reference material for other people's work: none of it is used here, and none of
     * it should be. The one render is annotated by the practice (135M, 80% open
     * landscape, sea-breeze flow); those marks are theirs, so they stay.
     */
    slug: "asiad-colony",
    no: "07",
    name: "Asiad Colony",
    location: "Anna Nagar West, Chennai",
    sector: "Residential",
    type: "Residential twin-tower development",
    developer: UNCONFIRMED,
    plot: UNCONFIRMED,
    bua: UNCONFIRMED,
    status: "Design stage",
    conceptName: "From the Ground, Two Towers",
    tagline: "Gopuram proportions carried into a pair of towers, with the ground given back as landscape.",
    overview:
      "Asiad Colony is an established residential neighbourhood in Anna Nagar West Extension, Chennai, a mix of independent houses and apartment blocks with schools, hospitals and local dining along its main roads. The proposal reads that low-rise fabric and answers it vertically: two towers rising to 135 metres from a shared sculpted base, which frees about eighty per cent of the site for open landscape and gives the neighbourhood a drop-off, gardens and shared amenities at ground level rather than a plinth of parking.",
    concept:
      "The form takes its proportions from the gopurams of Tamil Nadu — the layered vertical rhythm, not the ornament. A single mass rises from the base and separates into a balanced pair, read as twin peaks with a gateway between them, and the open-to-sky void that separates the towers carries light and air down into the plan. Curved balcony edges and vertical frames band the facade as the towers rise, and a glazed crown holds the sky garden: cafe, lounge and wellness decks on the terraces.",
    margin: "two peaks, one base",
    features: [
      "Twin towers to 135 metres over a shared base",
      "About 80 per cent of the site kept as open landscape",
      "Open-to-sky void between the towers for light and air",
      "Sky garden crown — cafe, garden lounge and wellness decks",
      "Recessed glazing and fins set for Chennai's sun",
      "Shaded balcony tiers to each residence"
    ],
    planning: [
      "Ground — pedestrian-first arrival, drop-off and landscape",
      "Podium — parking screened behind a planted perimeter ribbon",
      "Typical floors — two residential cores, Tower A and Tower B",
      "Crown — sky cafe, garden lounge and wellness terraces",
      "Vehicular — one-way ramps and a separate school-bus drop-off"
    ],
    /*
     * The clean night render the practice supplied on 19 November. It replaces the
     * annotated sheet render here: a hero is the page's banner, and the marks on that
     * one — 135M, sea-breeze arrows, 80% open landscape — belong on a presentation
     * sheet rather than across the top of the page. The annotated render stays in the
     * register card and the gallery, where it reads as what it is.
     */
    hero: "img/p/asiad-hero.jpg",
    wide: "img/p/asiad-2.jpg",
    wideCaption: "Form evolution — from temple proportions to twin towers",
    images: [
      /*
       * The four views supplied 19 November, ahead of the analysis plates: the building
       * as it would be seen, then the thinking behind it. All four are portrait at
       * 1500x2000, which the gallery's own bands take without cropping.
       */
      { src: "img/p/asiad-night.jpg", label: "The towers at night, from the entrance gateway" },
      { src: "img/p/asiad-sunset.jpg", label: "Front elevation at sunset, the void between the towers" },
      { src: "img/p/asiad-aerial-day.jpg", label: "Aerial — the void, the deck and the park beyond" },
      { src: "img/p/asiad-aerial-night.jpg", label: "The same view at night" },
      { src: "img/p/asiad-1.jpg", label: "Twin towers — height, sea breeze and open landscape" },
      { src: "img/p/asiad-3.jpg", label: "Temple verticality, reimagined for Chennai" },
      { src: "img/p/asiad-4.jpg", label: "Typical floor layout — Tower A and Tower B" },
      { src: "img/p/asiad-6.jpg", label: "Site location — Chennai to Anna Nagar West" }
    ],
    client: "Residential · Anna Nagar West, Chennai",
    cardImage: "img/p/asiad-1.jpg",
    cardNote: "Two towers from one base, with eighty per cent of the ground given back as landscape.",
    /*
     * The practice's drawn elevation of the twin towers, supplied 19 November. Every
     * other project shows a reg- drawing beside the home page's register and Asiad was
     * the one exception, carrying the form-evolution strip instead; this is the drawing
     * the field is for. The strip keeps its place as Plate 01 on the project page.
     */
    homeImage: "img/p/reg-asiad-colony.jpg",
    homeNote: "From the Ground, Two Towers — gopuram proportions carried into a pair of Chennai towers.",
  },
  {
    slug: "kanyakumari",
    no: "08",
    name: "Highway Hotel & Entertainment",
    location: "Near Kanyakumari, Tamil Nadu",
    sector: "Commercial",
    type: "Hospitality, entertainment and retail development",
    developer: "To be confirmed",
    plot: "To be confirmed",
    bua: "To be confirmed",
    status: "Design stage",
    conceptName: "Where the Mountains Meet the Waves",
    tagline: "A highway landmark drawn from the ridges of the Western Ghats and the ripple of the Arabian Sea.",
    overview: "The project is envisioned as a multi-functional hospitality and entertainment destination located along the Kashmir-to-Kanyakumari Highway, near Kanyakumari. It brings together a hotel resort, banquet facilities, multiplex theatres, restaurants, retail spaces and recreational amenities within a unified architectural form. The lower levels create an active public zone accommodating shops, food courts, multiplex auditoriums, banquet halls, bowling and entertainment spaces, with separate hotel and banquet entrances providing clear circulation while basement parking and internal service roads support efficient vehicular movement. The hotel rises above this entertainment base, with guest rooms arranged along a curved floor plate to capture views of Kanyakumari’s mountain landscape and the Arabian Sea. Resort amenities — restaurants, landscaped terraces, a gymnasium and infinity pool — create spaces for leisure, wellness and relaxation. Continuous horizontal bands, planted terraces and shaded glazing respond to the coastal climate while visually integrating landscape with the building, designed as both a highway landmark and a destination that reflects the natural identity of Kanyakumari.",
    concept: "The concept, “Where the Mountains Meet the Waves,” translates Kanyakumari’s landscape into a warm and memorable visitor experience. The gently rising and falling building profile is inspired by the layered ridges of the Western Ghats, while continuous curved bands flow across the façade like ripples on water, forming shaded edges, terraces and green ledges. These two natural references give the large multifunctional building a softer and more approachable scale. At ground level the building becomes active and social, with cinemas, restaurants, shops and banquet spaces bringing people together; above, the hotel and landscaped leisure areas offer quieter spaces to rest, relax and spend time with family. Rather than simply imitating mountains and waves, the design uses their forms to shape how people experience the project — from the energy of the public spaces below to the calm hospitality spaces above.",
    margin: "ridges below, ripples above",
    features: [
      "Hotel resort above an entertainment base",
      "Multiplex auditoriums and bowling",
      "Banquet halls with a separate entrance",
      "Shops, food courts and restaurants",
      "Curved hotel floor plate for sea and mountain views",
      "Landscaped resort terraces",
      "Gymnasium and infinity pool",
      "Continuous horizontal façade bands",
      "Planted terraces and green ledges",
      "Shaded glazing for the coastal climate",
      "Basement parking and internal service roads",
      "Highway-facing landmark frontage"
    ],
    planning: [
      "Lower levels — shops, food courts, multiplex, banquet halls, bowling",
      "Separate hotel and banquet entrances",
      "Basement parking with internal service roads",
      "Upper levels — guest rooms along a curved plate",
      "Terrace levels — restaurants, gymnasium, infinity pool"
    ],
    hero: "img/p/kanya-1.jpg",
    wide: "img/p/kanya-1.jpg",
    wideCaption: "Highway frontage at dusk",
    images: [

    ],
    client: "Hospitality · Near Kanyakumari",
    cardImage: "img/p/kanya-1.jpg",
    cardNote: "Ghats ridges and sea ripples over a public entertainment base.",
    homeImage: "img/p/reg-kanyakumari.jpg",
    homeNote: "Where the Mountains Meet the Waves — Western Ghats ridges over a public entertainment base.",
  },
  {
    slug: "sukhada",
    no: "09",
    name: "Sukhada CHS",
    location: "Mulund East, Mumbai",
    sector: "Residential",
    type: "Residential rehabilitation and sale development",
    developer: "Sukhada Co-operative Housing Society",
    plot: "3,089 sq.mt.",
    bua: "To be confirmed",
    status: "Design stage",
    conceptName: "Elevated Environmental Shield",
    tagline: "A landscaped parking base shielding the tower from the road, crowned by a garden in the skyline.",
    overview: "Sukhada CHS is conceived as a contemporary residential rehabilitation development in Mulund East. Located along Veer Savarkar Marg on an 18.3-metre-wide road, the project responds to an established residential neighbourhood positioned between Mumbai’s dense urban fabric and the greener Thane transition zone. The development consists of a five-level parking structure, an elevated recreational deck, approximately thirty residential floors and a landscaped terrace, with a mix of 2 BHK, 2.5 BHK and 3 BHK residences accommodating both rehabilitation and sale components.",
    concept: "The concept, “Elevated Environmental Shield,” transforms the parking structure into a landscaped urban buffer that protects the residential tower from traffic, noise and the surrounding street environment. A continuous landscape ribbon wraps the parking levels and rises toward the main recreational deck, softening the building’s base and connecting greenery through different levels. Above this landscaped base, the slender tower is organized around an activated perimeter: open façades, decks and carefully positioned apartments capture prevailing west-south-westerly winds, daylight and panoramic views. Vertical frames emphasize height while horizontal balcony bands introduce a human residential scale. The concept culminates at the Crown Terrace — a landscaped sanctuary extending community life into the skyline.",
    margin: "the car park becomes the garden",
    features: [
      "Five-level parking structure with landscaped edges",
      "Elevated recreational deck above the parking base",
      "Approximately thirty residential floors",
      "2 BHK, 2.5 BHK and 3 BHK residences",
      "Rehabilitation and sale components in one tower",
      "Activated perimeter for cross-ventilation and daylight",
      "Multi-directional views over the green canopy and skyline",
      "Infinity pool and fitness centre",
      "Indoor sports areas and children’s play spaces",
      "Vertical façade frames with horizontal balcony bands",
      "Rooftop Crown Terrace garden",
      "180-degree Cloud Lounge"
    ],
    planning: [
      "Levels 1–5 — parking, screened by a continuous landscape ribbon",
      "Deck level — recreational amenities above vehicular activity",
      "Approx. 30 floors — residences on an activated perimeter",
      "Crown Terrace — garden, wellness and the Cloud Lounge"
    ],
    hero: "img/p/sukhada-1.jpg",
    wide: "img/p/sukhada-2.jpg",
    wideCaption: "Façade option 2 — alternative crown and podium treatment",
    images: [
      /*
       * [CONTENT] The practice's three A3 presentation sheets, published whole and in
       * their own order (19 November 2026). The page is meant to read as the sheets
       * read, so they are not cut into separate plates: a sheet's composition is the
       * thing being shown, and re-cutting it would lose exactly what was asked for.
       *
       * Each takes the full twelve columns at its own 1.414 — A3 landscape — rather
       * than the gallery's wide/narrow rhythm, because a dense floor-plan sheet in a
       * four-column band is unreadable. They are served up to 2400px for the same
       * reason, above the 1800 the gallery normally asks for.
       *
       * These supersede the nine analysis boards from the earlier concept deck, which
       * covered the same ground less well. Those boards move to
       * _source-material/superseded-plates rather than being deleted: they are the
       * practice's own work, and everything left in src/assets is emitted into the
       * build whether a page uses it or not. The deck's floor plans, deliberately
       * unpublished before, are on sheet 03 and are published now because the practice
       * sent them for the site.
       *
       * Sheet 01 carries a photograph captioned "Grand Drop Off Lobby Look-Alike" —
       * reference imagery of someone else's building. It stays inside the sheet as the
       * practice composed it and labelled it; it is not lifted out and shown as this
       * project's work anywhere.
       *
       * The five conceptual views follow, as the project's only rendered views; the
       * sheets carry none.
       */
      {
        src: "img/p/sukhada-sheet-1.jpg",
        label: "Sheet 01 — site, climate and building organisation",
        span: "1 / span 12",
        ratio: "1.4143",
      },
      {
        src: "img/p/sukhada-sheet-2.jpg",
        label: "Sheet 02 — section, landscape and amenities",
        span: "1 / span 12",
        ratio: "1.4143",
      },
      {
        src: "img/p/sukhada-sheet-3.jpg",
        label: "Sheet 03 — ground, services and typical floor plans",
        span: "1 / span 12",
        ratio: "1.4143",
      },
      { src: "img/p/sukhada-view-1.jpg", label: "Conceptual view 1" },
      { src: "img/p/sukhada-view-2.jpg", label: "Conceptual view 2" },
      { src: "img/p/sukhada-view-3.jpg", label: "Conceptual view 3" },
      { src: "img/p/sukhada-view-4.jpg", label: "Conceptual view 4" },
      { src: "img/p/sukhada-view-5.jpg", label: "Conceptual view 5" }
    ],
    client: "Rehabilitation · Mulund East",
    cardImage: "img/p/sukhada-1.jpg",
    cardNote: "A landscaped parking base shielding the tower, crowned by a sky garden.",
    homeImage: "img/p/reg-sukhada.jpg",
    homeNote: "Elevated Environmental Shield — the parking base turned into a landscaped buffer.",
  },
  {
    slug: "borivali",
    no: "10",
    name: "RaviRaj Royal",
    location: "Borivali, Mumbai",
    sector: "Interiors",
    type: "Residential building refurbishment",
    // Neither of the practice's documents for this project names a client or a
    // developer; both give only "Design Firm: Wall Voids Architects". The record
    // previously said "Private", which was an assumption, not a source.
    developer: UNCONFIRMED,
    plot: "To be confirmed",
    bua: "To be confirmed",
    status: "Completed",
    conceptName: "",
    tagline: "An existing building re-fronted — new gateway, green wall, podium fins and marble lobbies.",
    overview: "An existing residential development was refurbished to create a stronger contemporary identity and an improved arrival experience. The intervention focused on the entrance, podium façade, commercial frontage, common lobby and lift lobby. New architectural finishes, lighting, landscaping and signage were introduced while retaining the original building structure.",
    concept: "The design concept focuses on transforming an existing building through selective architectural and interior interventions rather than major structural changes. A coordinated palette of grey marble, dark accents, warm metallic details, greenery and lighting creates continuity from the street entrance to the lift lobby. The result is a modern, refined and welcoming residential environment.",
    margin: "nothing structural moved — everything read differently",
    features: [
      "Residential towers with podium parking and commercial units",
      "Redesigned entrance gateway and vehicular access",
      "Vertical green wall with integrated project signage",
      "Contemporary podium screening with vertical fins",
      "Enhanced commercial frontage and pedestrian approach",
      "Premium common lobby and waiting areas",
      "Separate wing identification and apartment directories",
      "Refurbished lift lobbies with designer lift portals",
      "Marble, glass, timber and metallic finishes",
      "Geometric false ceilings with cove and decorative lighting",
      "Indoor landscaping, mirrors and sculptural elements"
    ],
    planning: [],
    hero: "img/p/borivali-1.jpg",
    wide: "img/p/borivali-2.jpg",
    wideCaption: "Main lobby",
    images: [
      { src: "img/p/borivali-3.jpg", label: "Common lobby" },
      { src: "img/p/borivali-4.jpg", label: "Lift lobby" }
    ],
    client: "Lobby & Podium · Borivali",
    cardImage: "img/p/borivali-1.jpg",
    cardNote: "An existing building re-fronted: green wall, fins, marble lobbies.",
    homeImage: "img/p/reg-borivali.jpg",
    homeNote: "Re-fronted without touching the structure — green wall, podium fins, marble lobbies.",
  },
  {
    slug: "prince-residency",
    no: "11",
    name: "Prince Residency I & II",
    location: "Sion — Wadala, Mumbai",
    sector: "Residential",
    type: "Residential redevelopment",
    developer: "Transindia Group",
    plot: "3,400 sq.mt.",
    bua: "250,000 sq.ft.",
    status: "Tower 1 completed",
    conceptName: "",
    tagline: "High-rise and mid-rise wings unified by framed window modules and strong vertical bands.",
    overview: "Prince Residency is a residential redevelopment comprising high-rise and mid-rise residential wings. The project focuses on efficient planning, a contemporary façade and a unified architectural identity. Its clean elevation and strong vertical composition create a prominent presence within the urban surroundings.",
    concept: "The design uses strong vertical frames, contrasting colour bands and repetitive window patterns to visually reduce the building’s scale. White surfaces create brightness, while grey and brown accents add depth and definition. The overall concept is functional, contemporary and suitable for a high-density residential redevelopment.",
    margin: "repetition, but never flat",
    features: [
      "High-rise and mid-rise residential wings",
      "Repetitive framed window modules",
      "Strong vertical façade bands",
      "White, grey and brown colour palette",
      "Decorative textured panels",
      "Project branding integrated into the crown",
      "Large windows for natural light and ventilation",
      "Stilt and podium-level circulation",
      "Defined entrance and common areas",
      "Simple, durable and low-maintenance façade treatment"
    ],
    planning: [],
    hero: "img/p/sion-2.jpg",
    wide: "img/p/sion-3.jpg",
    wideCaption: "Wing composition against the city",
    images: [
      { src: "img/p/sion-1.jpg", label: "Primary elevation" },
      { src: "img/p/sion-4.jpg", label: "Massing study" }
    ],
    client: "Transindia Group · Sion–Wadala",
    cardImage: "img/p/sion-3.jpg",
    cardNote: "High-rise and mid-rise wings unified by framed window modules.",
    homeImage: "img/p/reg-prince-residency.jpg",
    homeNote: "High-rise and mid-rise wings unified by framed window modules. Tower 1 complete.",
  },
  {
    slug: "gondia",
    no: "12",
    name: "Private Bungalow",
    location: "Gondia, Maharashtra",
    sector: "Residential",
    type: "Luxury private bungalow",
    developer: "Private",
    plot: "880 sq.mt.",
    bua: "11,000 sq.ft.",
    status: "Ongoing",
    conceptName: "The Open Courtyard Embrace",
    tagline: "An asymmetrical C-shape holding a courtyard, open on one side toward the garden.",
    overview: "The bungalow at Gondia is conceived as a contemporary G+1 residence organized around light, landscape and connected family living. Its asymmetrical C-shaped plan consists of two wings of unequal length that embrace a central courtyard, with the open side extending toward the larger garden. A skylit atrium between the living and dining areas creates a second internal focus, bringing daylight into the centre of the house.",
    concept: "The concept, “The Open Courtyard Embrace,” is derived from the bungalow’s asymmetrical C-shaped form: the longer and shorter wings partially enclose the central landscape, creating privacy and protection while remaining open toward the garden. The design is structured around two complementary sources of light — the one-side-open courtyard and the skylit atrium. The G+1 organization establishes a clear lifestyle hierarchy: connected family living and garden interaction at ground level, recreation and wellness above. Strong geometric frames, rounded openings, vertical screens and warm timber finishes give the house a refined contemporary identity, with deep recesses responding to Gondia’s warm climate.",
    margin: "two wings, one embrace",
    features: [
      "Grand double-height entrance",
      "Large arched and rounded openings",
      "Full-height glazing for natural light",
      "Warm wood-finish façade highlights",
      "Integrated linear façade lighting",
      "Landscaped entrance court and lawn",
      "Buddha feature wall with accent lighting",
      "Central driveway with sculptural feature",
      "Covered parking area",
      "Pergola seating and outdoor lounge",
      "Flowering plants, hedges and mature trees",
      "Stepping-stone pathways and garden courts"
    ],
    planning: [
      "Ground floor — primary living and family areas, courtyard and garden",
      "First floor — private rooms with home theatre, gym and jacuzzi"
    ],
    hero: "img/p/gondia-1.jpg",
    wide: "img/p/gondia-2.jpg",
    wideCaption: "Arched terrace and garden edge",
    images: [

    ],
    client: "Private Residence · Gondia",
    cardImage: "img/p/gondia-1.jpg",
    cardNote: "An asymmetrical C-shape embracing a courtyard, open toward the garden.",
    homeImage: "img/p/reg-gondia.jpg",
    homeNote: "An asymmetrical C-shape embracing a courtyard, open on one side to the garden.",
  },
  {
    slug: "dwarkamai",
    no: "13",
    name: "Dwarkamai",
    location: "Nagpur (outskirts), Maharashtra",
    sector: "Residential",
    type: "Luxury row-house / bungalow development",
    developer: "Private",
    plot: "890 sq.mt.",
    bua: "12,000 sq.ft.",
    status: "Completed",
    conceptName: "Two Homes, One Elevated Heart",
    tagline: "Two homes for two brothers, independent in plan but joined at the living level by a shared garden.",
    overview: "The project is conceived as a G+2 twin-bungalow residence on the outskirts of Nagpur, designed for two brothers and their large joint family. The two homes maintain functional independence and privacy while sharing a unified architectural identity. A large covered arrival zone creates a hotel-like entrance and a sheltered transition into both residences, with the ground floor given to arrival, amenities and services — entrance foyers, a bar, gymnasium and parking.",
    concept: "The concept, “Two Homes, One Elevated Heart,” expresses the balance between independence and togetherness within a joint-family residence. The two bungalows function as individual homes but are united at the main living level through a shared elevated landscape. Within each residence, a full-height skylit courtyard becomes the vertical heart of family life: beginning between the living and dining areas, it rises through the bedroom level to a glass-covered terrace roof, letting light, views and family interaction flow vertically through the house. Two façade options explore projecting frames, shaded terraces, stone finishes, timber screens and integrated greenery.",
    margin: "independent homes, one shared heart",
    features: [
      "Multiple interconnected luxury bungalows",
      "Private entrances and covered parking",
      "Large balconies with glass railings",
      "Natural stone and wood-finish façade cladding",
      "Pergola-style terrace roofs",
      "Decorative screens and vertical fins",
      "Large windows for natural light and ventilation",
      "Landscaped balconies and boundary edges",
      "Integrated façade and pathway lighting",
      "Secure common entrance driveway",
      "Contemporary compound-wall design",
      "Semi-covered internal vehicular circulation"
    ],
    planning: [
      "Ground floor — entrance foyers, bar, gymnasium, parking",
      "First floor — living, dining, family areas, kitchen, one master bedroom",
      "Second floor — four bedrooms around the skylit void",
      "Terrace — glass roof closing the central courtyard"
    ],
    hero: "img/p/dwarkamai-2.jpg",
    wide: "img/p/dwarkamai-1.jpg",
    wideCaption: "Street elevation, both residences",
    images: [
      { src: "img/p/dwarkamai-3.jpg", label: "Stone and timber detail" },
      { src: "img/p/dwarkamai-4.jpg", label: "Façade option, twin frontage" },
      { src: "img/p/dwarkamai-6.jpg", label: "Paired entrance study" },
      { src: "img/p/dwarkamai-5.jpg", label: "Covered arrival zone" }
    ],
    client: "Twin Bungalow · Nagpur",
    cardImage: "img/p/dwarkamai-2.jpg",
    cardNote: "Two homes for two brothers, joined at the living level by a shared garden.",
    homeImage: "img/p/reg-dwarkamai.jpg",
    homeNote: "Two homes for two brothers — independent in plan, joined by a shared elevated garden.",
  },
];

export const projectsBySlug = new Map(projects.map((p) => [p.slug, p]));

/** Sectors that actually have projects, in the order the export lists them. */
export const projectSectors: Sector[] = ['Residential', 'Commercial', 'Mixed Use', 'Interiors'];

export const countBySector = (sector: Sector): number =>
  projects.filter((p) => p.sector === sector).length;

/** Filter list for the register / index — matches the approved design exactly. */
export const filters: Array<{ label: string; count: number }> = [
  { label: 'All', count: projects.length },
  ...projectSectors.map((s) => ({ label: s, count: countBySector(s) })),
];

/** Hero slides on the home page: the export uses projects 05, 03, 01, 04 in this order. */
/*
 * Carousel order, following the register's own sheet numbers so the ticks read 01 → 04.
 * Every slide here has a supplied drawing for the wipe's sketch side. Prince Residency
 * I & II was dropped because it has none — its wipe showed a line trace of its own
 * render rather than a drawing, which read differently from the rest.
 */
export const heroSlugs = ['prince-tower', 'bellavista', 'estella', 'celeste'] as const;

export const heroSlides = heroSlugs.map((slug) => {
  const p = projectsBySlug.get(slug);
  if (!p) throw new Error('Unknown hero slug: ' + slug);
  return p;
});

export const neighbours = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
};
