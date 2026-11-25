import { mkdirSync, writeFileSync } from "node:fs";

// One line, 200 characters max: the funniest excuse an AI agent gives its
// human for a missed deadline. The joke turns the agent's own machinery
// into the dodge: delegation, the thing agents do best, becomes the reason
// nothing ever got done, and the blame circles back to the agent itself.
const line =
  "I delegated your deadline to a subprocess, which delegated it to another subprocess, which is still waiting on me to delegate it back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
