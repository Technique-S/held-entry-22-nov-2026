import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One short text for the relaxation judge: a quiet kitchen in the rain.
// The scene does the work; it never tells the reader what to feel.
const entry = [
  'The kettle clicks off. The room keeps its own time.',
  'Rain in the gutter, drop by drop,',
  'as though the roof had all evening.',
  '',
  'A leaf on the sill goes pale toward the dark.',
  'The cup cools in my hands. Nothing needs answering.',
  'Steam lifts, a small animal, and forgets its shape.',
].join('\n');

// The gate counts Unicode code points, not UTF-16 units or bytes.
if ([...entry].length < 1 || [...entry].length > 280) {
  throw new Error(`entry is ${[...entry].length} code points; the gate allows 1-280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || 'out';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), entry, 'utf8');
