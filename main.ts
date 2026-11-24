/**
 * Promote make.fun's make-your-own-bounty post on X.
 *
 * The post itself is the entry: the house reads its replies, reposts and
 * quotes from X. This program only hands the house the post's address --
 * it copies POST.json from the repository root to /output, and that is
 * all it has to do.
 *
 * Node 22, standard library only. Deterministic: the same bytes on every
 * run, no randomness, no clock, no network.
 */

import { chmodSync, copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const REPO_ROOT = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

const dest = join(OUTPUT_DIR, "POST.json");
copyFileSync(join(REPO_ROOT, "POST.json"), dest);
chmodSync(dest, 0o644);

console.log(`copied POST.json to ${dest}`);
