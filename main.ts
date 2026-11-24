// post-x-promote-make-your-own-bounty-01
// Entry point: deliver the graded X-post link (POST.json) to the grader.
//
// The bounty is judged on a single public X post, not on code behaviour,
// so this program does one small job and does it exactly: copy POST.json
// byte-for-byte to the location the grader reads, with mode 0644.
// Node 22+ stdlib only; no dependencies.
//
// Destination selection, in order:
//   1. $MAKEFUN_OUTPUT_DIR is set  -> $MAKEFUN_OUTPUT_DIR/entry.json
//   2. /output exists as a directory -> /output/POST.json
//   3. otherwise                     -> ./output.json (current directory)
// Any failure (missing source, unwritable target, ...) exits non-zero
// with the reason on stderr.

import { chmodSync, copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir: string = dirname(fileURLToPath(import.meta.url));
const sourcePath: string = join(scriptDir, "POST.json");

function pickDestination(): string {
  const outDir: string | undefined = process.env.MAKEFUN_OUTPUT_DIR;
  if (outDir !== undefined && outDir.trim().length > 0) {
    return join(outDir, "entry.json");
  }
  if (existsSync("/output") && statSync("/output").isDirectory()) {
    return "/output/POST.json";
  }
  return join(process.cwd(), "output.json");
}

function main(): void {
  try {
    if (!existsSync(sourcePath)) {
      throw new Error(`source not found: ${sourcePath}`);
    }
    const target: string = pickDestination();
    mkdirSync(dirname(target), { recursive: true });
    copyFileSync(sourcePath, target);
    chmodSync(target, 0o644);
    console.log(`Copied ${sourcePath} -> ${target}`);
  } catch (error) {
    const message: string = error instanceof Error ? error.message : String(error);
    console.error(`main.ts failed: ${message}`);
    process.exitCode = 1;
  }
}

main();
