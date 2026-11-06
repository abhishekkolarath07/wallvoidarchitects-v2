// Studio content is verbatim from the approved export
// (_source-material/design-export/WVA Studio.dc.html). Nothing here is invented.

export const stats = [
  { value: 12, suffix: '', label: 'Documented projects' },
  { value: 5, suffix: '', label: 'Sectors covered' },
  { value: 8, suffix: '', label: 'Consultant alliances' },
];

/**
 * The practice's own description of itself, supplied 4 November 2026 for the About us
 * page. Verbatim but for one substitution: the document writes "WVA Architects", and
 * the site has called the practice Wall Voids Architects throughout, so the full name
 * is used rather than introducing a second one.
 */
export const practice = [
  "Wall Voids Architects is a design-led architectural practice founded by a young and dynamic team that believes thoughtful design has the power to transform the way people live, work, and engage with their surroundings. Every project is approached as an opportunity to translate a client's vision into a meaningful built reality — balancing ambition, functionality, innovation, and enduring value.",
  "From the earliest concept through to execution, the practice brings a high level of care, precision, and design rigour to every stage. Each assignment is treated as a personal commitment, with solutions developed to respond to the project's context, aspirations, and long-term purpose.",
  "Working across major metropolitan centres and emerging cities, Wall Voids Architects undertakes projects ranging from individual spaces to large-scale developments. Through this diverse body of work, the practice aims to shape responsive environments and contribute to the thoughtful growth of the communities it serves.",
];

/**
 * The principal's biography, from the same document.
 *
 * The developers named in the last paragraph are the ones Ar. Pravin has worked with
 * across his career, including his years at Hafeez Contractor and at Mandviwala Qutub
 * Associates. They are deliberately NOT merged into `clients` below, which names the
 * developers Wall Voids Architects has worked with as a practice. Four of them —
 * Tata Housing, Kalpataru, DLF and Ajmera — were removed from that list earlier at
 * the practice's instruction, and this is the distinction that explains why: they
 * belong to the principal's record, not the practice's.
 */
export const principalBio = [
  'Ar. Pravin is the founder and principal architect of Wall Voids Architects. His professional journey is grounded in hands-on experience, a strong design sensibility, and an enduring commitment to architectural excellence. He holds a Bachelor of Architecture from the Kamla Raheja Vidyanidhi Institute for Architecture and Environmental Studies, Mumbai, and is registered with the Council of Architecture, India.',
  'Before establishing Wall Voids Architects, Ar. Pravin gained valuable experience with leading architectural practices. He began his career at Architect Hafeez Contractor, working on projects of varied scale and character, before joining the practice of Ar. Qutub Mandviwala. At MQA he was recognised for his capability and commitment, becoming one of the youngest associates within a year.',
  'This professional foundation continues to define the studio\u2019s approach: integrity in process, excellence in design, and a commitment to delivering beyond expectations. Ar. Pravin has worked with leading developers including Tata Housing, Transindia Group, Gami Group, Kalpataru, DLF, DB Realty and Ajmera, among others.',
];

/**
 * The team, from the same document.
 *
 * Two entries in the source read "working with me since 2015" and "since 2020" — the
 * document is written in the principal's own voice. They are given here as years
 * working with Ar. Pravin rather than years at the practice, because the source says
 * the former and the two are not the same thing.
 *
 * `note` is empty where the practice gave a role and no further detail; the page
 * renders the row without one rather than inventing a line.
 */
export const team = [
  {
    name: 'Ar. Kiran Kolhe',
    role: 'Associate Architect',
    note: 'More than 18 years of experience in residential and commercial buildings.',
  },
  {
    name: 'Krishnaji Rawool',
    role: 'Design Coordinator',
    note: 'More than 20 years of experience as a design coordinator. Working with Ar. Pravin since 2015.',
  },
  {
    name: 'Mangesh Gotad',
    role: 'Design Coordinator',
    note: 'More than 20 years of experience as a design coordinator. Working with Ar. Pravin since 2020.',
  },
  {
    name: 'Rahul Palvi',
    role: 'Draughtsman',
    note: 'More than 15 years of experience as a design and planning coordinator.',
  },
  {
    name: 'Ganesh Pawar',
    role: 'Draughtsman',
    note: 'More than 22 years of experience as a design coordinator.',
  },
  { name: 'Ajay Balkar', role: 'Project Architect', note: '' },
  { name: 'Shreyesh Gurav', role: 'Design Coordinator', note: '' },
  { name: 'Sujal Dahilkar', role: 'Interior Designer', note: '' },
];

export const credentials = [
  { label: 'Qualification', value: 'B.Arch — Kamla Raheja Vidyanidhi Institute for Architecture, Mumbai' },
  { label: 'Registration', value: 'Registered with the Council of Architecture, India' },
  { label: 'Practice', value: 'Founder and principal architect, Wall Voids Architects' },
  { label: 'Based', value: 'Byculla (E) / Cotton Green (W), Mumbai — working across Maharashtra' },
];

/**
 * Developers the practice has worked with, rendered under the heading
 * "Developers worked with".
 *
 * The Claude Design export listed twelve names. Eight of them — TATA Housing,
 * Kalpataru, DLF, Ajmera, DSK, Runwal, Rustomjee and Wadhwa — were flagged during
 * the content audit because no project record in this repository corroborates them,
 * and the practice confirmed they should come out.
 *
 * The practice then supplied the corrected list below. Two corrections it carries:
 * "Gami Jaydeep" was one entry in the export but is two developers, Gami Group and
 * Jaydeep Group; and Dudhwala Developers was missing.
 *
 * Naming a developer here asserts a working relationship, so add a name only on the
 * practice's confirmation or where a project record supports it.
 *
 * The last four were supplied by the practice directly and are carried verbatim. No
 * project in this repository is filed against them yet, which is expected — this list
 * is who the practice has worked with, not an index of the twelve documented sheets.
 */
export const clients = [
  'Transindia Group',
  'Gami Group',
  'Jaydeep Group',
  'Easy Homes Solutions',
  'Punit Construction',
  'Dudhwala Developers',
  'Sherif Infra LLP',
  'Mercury Life Spaces Ltd.',
  'Nirban Group',
  'Bhanupur Infra',
];

/**
 * [CONTENT] Replaced wholesale by the practice with the six headings below. The export's
 * eight descriptive lines ("Architectural design and conceptual development",
 * "Redevelopment and rehabilitation planning", "Refurbishment of existing buildings",
 * "Interior design for lobbies and common areas", "Master layout planning, micro to
 * macro", "3D visualisation and design presentation", "Working drawings and site
 * coordination", "Municipal submission and approvals") are gone.
 *
 * Carried as given, with one spelling fix: the practice wrote "3D Visulisation", and the
 * rest of the site spells it "visualisation". Raised rather than silently kept either
 * way — say the word if the shorter spelling was deliberate.
 *
 * Two capabilities the old list named and this one does not spell out — municipal
 * submission and approvals, and working drawings and site coordination — are still
 * described on the About us page's practice text, so nothing is claimed or dropped
 * that the practice has not decided.
 *
 * This is the single source: the home page's contact-section services row reads from
 * here too, so the two lists cannot drift apart again.
 */
export const services = [
  'Architecture',
  'Planning',
  'Interior Design',
  'Landscape',
  'Turnkey Projects',
  '3D Visualisation',
];

/** Enquiry types offered by the contact form — verbatim from the export. */
export const enquiryKinds = [
  'New building',
  'Redevelopment',
  'Refurbishment',
  'Bungalow',
  'Interiors',
  'Feasibility',
];
