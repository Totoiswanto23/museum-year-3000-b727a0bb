// Museum of the Year 3000 — museum label for an ordinary object from today.
// Writes one line (max 200 chars) to /output/entry.txt.
// The label: a deadpan year-3000 misreading of the Terms and Conditions checkbox.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Terms and Conditions, c. 2024. Humans pledged their souls to 40 pages of sacred law by tapping this box. No human ever read a single word.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
