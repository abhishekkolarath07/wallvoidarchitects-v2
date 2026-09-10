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
 * ⚠️ NEEDS CLIENT VERIFICATION BEFORE LAUNCH.
 *
 * This list is carried over verbatim from the Claude Design export and is rendered
 * under the heading "Developers worked with".
 *
 * Only the first four names are corroborated by the twelve documented projects:
 *   Transindia Group, Gami Jaydeep, Easy Homes Solutions, Punit Construction.
 *
 * The remaining eight (TATA Housing, Kalpataru, DLF, Ajmera, DSK, Runwal, Rustomjee,
 * Wadhwa) do not appear in any project record in this repository. Naming a developer
 * under that heading asserts a working relationship, so each one should be confirmed
 * — or removed — by the practice before this page goes live.
 *
 * Nothing has been added or removed here; the export's content is preserved as-is
 * pending that decision.
 */
export const clients = [
  'Transindia Group',
  'Gami Jaydeep',
  'Easy Homes Solutions',
  'Punit Construction',
  'TATA Housing',
  'Kalpataru',
  'DLF',
  'Ajmera',
  'DSK',
  'Runwal',
  'Rustomjee',
  'Wadhwa',
];

/** Names above that the project data actually corroborates. */
export const verifiedClients = new Set([
  'Transindia Group',
  'Gami Jaydeep',
  'Easy Homes Solutions',
  'Punit Construction',
]);

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
