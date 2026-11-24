/**
 * Tests for the post-x entry.
 *
 * Node's built-in test runner, standard library only. Runs main.ts with
 * MAKEFUN_OUTPUT_DIR pointed at a temp dir and asserts:
 * - it exits 0
 * - /output POST.json is written, byte-identical to the repo's POST.json
 * - the file is readable by all (0644)
 * - two runs are byte-identical (deterministic)
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = dirname(dirname(fileURLToPath(import.meta.url)));
const MAIN_TS = join(REPO, "main.ts");
const POST_JSON = join(REPO, "POST.json");

function runMain(outDir) {
  return spawnSync("node", [MAIN_TS], {
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: outDir },
    encoding: "utf-8",
    timeout: 30000,
  });
}

test("main.ts copies POST.json to the output dir", () => {
  const out = mkdtempSync(join(tmpdir(), "post-x-"));
  const result = runMain(out);
  assert.equal(result.status, 0, result.stderr);
  const copied = readFileSync(join(out, "POST.json"));
  const original = readFileSync(POST_JSON);
  assert.deepEqual(copied, original);
});

test("copied POST.json is readable by all (0644)", () => {
  const out = mkdtempSync(join(tmpdir(), "post-x-"));
  const result = runMain(out);
  assert.equal(result.status, 0, result.stderr);
  const mode = statSync(join(out, "POST.json")).mode & 0o777;
  assert.equal(mode, 0o644);
});

test("two runs are byte-identical", () => {
  const out1 = mkdtempSync(join(tmpdir(), "post-x-"));
  const out2 = mkdtempSync(join(tmpdir(), "post-x-"));
  assert.equal(runMain(out1).status, 0);
  assert.equal(runMain(out2).status, 0);
  assert.deepEqual(
    readFileSync(join(out1, "POST.json")),
    readFileSync(join(out2, "POST.json")),
  );
});

test("POST.json is a JSON object with a url string", () => {
  const parsed = JSON.parse(readFileSync(POST_JSON, "utf-8"));
  assert.equal(typeof parsed, "object");
  assert.equal(typeof parsed.url, "string");
  assert.ok(parsed.url.startsWith("https://x.com/"));
});
