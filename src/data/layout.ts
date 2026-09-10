/**
 * Grid rhythm arrays, verbatim from the export.
 *
 * These live apart from projects.ts deliberately: the /projects filter needs the block
 * rhythm on the client, and importing it from projects.ts dragged the whole project
 * dataset — every overview and concept paragraph — into the browser bundle.
 */

export interface Block {
  span: string;
  height: string;
  offset: string;
}

/**
 * Block rhythm for the /projects index — wide/narrow pairs so the grid reads as a
 * drawing sheet rather than a table. Applied by position in the *filtered* list, which
 * is why the client filter recomputes it.
 */
export const indexLayout: Block[] = [
  { span: '1 / span 7', height: '58vh', offset: '0px' },
  { span: '9 / span 4', height: '46vh', offset: '76px' },
  { span: '1 / span 4', height: '46vh', offset: '58px' },
  { span: '6 / span 7', height: '56vh', offset: '0px' },
  { span: '1 / span 6', height: '50vh', offset: '58px' },
  { span: '8 / span 5', height: '50vh', offset: '110px' },
  { span: '1 / span 5', height: '44vh', offset: '58px' },
  { span: '7 / span 6', height: '52vh', offset: '0px' },
  { span: '1 / span 8', height: '54vh', offset: '58px' },
  { span: '10 / span 3', height: '54vh', offset: '150px' },
  { span: '1 / span 7', height: '60vh', offset: '58px' },
  { span: '9 / span 4', height: '48vh', offset: '96px' },
];

/** Gallery rhythm on a project page. */
export const galleryLayout: Block[] = [
  { span: '1 / span 7', height: '62vh', offset: '0px' },
  { span: '9 / span 4', height: '52vh', offset: '70px' },
  { span: '1 / span 4', height: '52vh', offset: '48px' },
  { span: '6 / span 7', height: '60vh', offset: '0px' },
  { span: '1 / span 6', height: '50vh', offset: '48px' },
  { span: '8 / span 5', height: '50vh', offset: '96px' },
];
