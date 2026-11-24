import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Deterministic entry: copies the embedded image to /output/entry.png
// (or $MAKEFUN_OUTPUT_DIR/entry.png outside the grader's container).
// No network, no randomness, no timestamps — every run writes identical bytes.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
