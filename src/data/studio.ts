// Studio content is verbatim from the approved export
// (_source-material/design-export/WVA Studio.dc.html). Nothing here is invented.

export const stats = [
  { value: 12, suffix: '', label: 'Documented projects' },
  { value: 5, suffix: '', label: 'Sectors covered' },
  { value: 8, suffix: '', label: 'Consultant alliances' },
];

export const credentials = [
  { label: 'Qualification', value: 'B.Arch — Kamla Raheja Vidyanidhi Institute for Architecture, Mumbai' },
  { label: 'Registration', value: 'Registered with the Council of Architecture, India' },
  { label: 'Practice', value: 'Founder and principal architect, Wall Voids Architects' },
  { label: 'Based', value: 'Byculla (E), Mumbai — working across Maharashtra' },
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
 */
export const clients = [
  'Transindia Group',
  'Gami Group',
  'Jaydeep Group',
  'Easy Homes Solutions',
  'Punit Construction',
  'Dudhwala Developers',
];

export const services = [
  'Architectural design and conceptual development',
  'Redevelopment and rehabilitation planning',
  'Refurbishment of existing buildings',
  'Interior design for lobbies and common areas',
  'Master layout planning, micro to macro',
  '3D visualisation and design presentation',
  'Working drawings and site coordination',
  'Municipal submission and approvals',
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
