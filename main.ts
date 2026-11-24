// Charm the Commuter: Forecast a City That Isn't
// One line of weather for an invented city, written to /output/entry.txt.
// Deterministic, Node stdlib only, no network, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good morning, Spoonville: light rain of warm cocoa today, 21°, marshmallows by noon — umbrellas optional, mugs essential.";

// The gate: 1–140 characters, a single line, not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, must be 1–140`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
console.log(`characters: ${[...LINE].length}`);
