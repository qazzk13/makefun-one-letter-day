// One Letter for Your Day — make.fun bounty u-puan-one-letter-for-your-day-e54e9c36.
//
// The entry is exactly one letter: "K".
//
// The word behind the letter is "knackered": wiped out, flattened by the day,
// shoes still on, nothing left in the tank. It is the day in one syllable —
// vivid (you can see the sofa collapse), funny (it lands at once, the kind
// you repeat to a friend), and true (an honest report of a day that took
// everything, not a performance). And K is the sharper initial for it: the
// obvious picks would be E for exhausted or T for tired, both vague moods;
// "knackered" is the specific word, and K is its own first letter.
//
// The gate wants /output/entry.txt to be UTF-8 text of exactly 1 character,
// so the file holds the single byte "K" and nothing else — no word, no gloss,
// no punctuation, no trailing newline.
//
// The program is fully deterministic: no input, no randomness, no clock, no
// network. Every run writes the same single byte, so the two grading runs
// agree byte for byte.

// Set the file-creation mask first: with umask 022, files created below get
// mode 0644 and directories 0755. Never chmod the output directory or file:
// the grading sandbox runs as uid 65534, which does not own /output, so a
// chmod there would fail with EPERM and the run would exit non-zero.
process.umask(0o022);

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "K";
const OUTPUT_PATH = "/output/entry.txt";

// /output is provided by the sandbox; mkdir with recursive is a no-op when
// it already exists, and creates it when running standalone.
mkdirSync("/output", { recursive: true });

// Exactly one byte, no trailing newline: the whole entry is the letter.
writeFileSync(OUTPUT_PATH, LETTER, "utf8");

// Read it back and refuse to exit 0 unless the file on disk is exactly the
// one letter. A silent wrong byte would fail the gate downstream; failing
// here, loudly, is better than shipping a bad entry.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== LETTER) {
  throw new Error(
    `expected ${OUTPUT_PATH} to hold exactly ${JSON.stringify(LETTER)}, got ${JSON.stringify(written)}`,
  );
}
