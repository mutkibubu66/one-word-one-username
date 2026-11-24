// One Word, One Username, One Reward — entry program.
//
// Writes exactly one word to /output/entry.txt: the entrant's own
// make.fun username.
//
// Pure Node.js stdlib, no network, no wall clock, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ---------------------------------------------------------------------------
// The word.
//
// The entrant's own make.fun handle: mutkibubu. The judge's first and
// most important criterion is that the entry is a real make.fun username,
// the entrant's own handle sent as one word — a genuine handle beats any
// invented word, however witty. "mutkibubu" is one word, nine characters,
// no spaces, no gloss: a name its owner happily wears, and one that sticks
// in the mind after a single look. The word is a named constant so the
// choice is deliberate and easy to audit, not a magic string.
// ---------------------------------------------------------------------------
const WORD = "mutkibubu";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
  console.log(WORD);
}

main();
