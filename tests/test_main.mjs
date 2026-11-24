// Tests for main.ts — run with: node --test tests/test_main.mjs
// The program's only job is to copy POST.json byte-for-byte to the
// grader location with mode 0644, so the tests check exactly that:
// exact bytes, the 0644 mode, determinism across runs, the POST.json
// shape (an X URL), and a non-zero exit when the source is missing.
import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  chmodSync,
  copyFileSync,
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const mainPath = join(repoRoot, "main.ts");
const postPath = join(repoRoot, "POST.json");

function tempDir() {
  return mkdtempSync(join(tmpdir(), "make-your-own-bounty-"));
}

function runMain(env = {}, cwd = repoRoot) {
  return spawnSync(process.execPath, [mainPath], {
    cwd,
    env: { ...process.env, ...env },
    encoding: "utf8",
  });
}

test("POST.json holds an X post URL", () => {
  const parsed = JSON.parse(readFileSync(postPath, "utf8"));
  assert.equal(typeof parsed.url, "string");
  assert.ok(
    parsed.url.startsWith("https://x.com/"),
    `url must start with https://x.com/, got ${parsed.url}`,
  );
});

test("copy is byte-exact with mode 0644 under $MAKEFUN_OUTPUT_DIR", () => {
  const outDir = tempDir();
  try {
    const result = runMain({ MAKEFUN_OUTPUT_DIR: outDir });
    assert.equal(result.status, 0, result.stderr);
    const target = join(outDir, "entry.json");
    assert.ok(existsSync(target), "entry.json should exist");
    assert.deepEqual(readFileSync(target), readFileSync(postPath));
    assert.equal(statSync(target).mode & 0o777, 0o644);
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
});

test("repeat runs are deterministic", () => {
  const outDir = tempDir();
  try {
    const target = join(outDir, "entry.json");
    assert.equal(runMain({ MAKEFUN_OUTPUT_DIR: outDir }).status, 0);
    const first = readFileSync(target);
    assert.equal(runMain({ MAKEFUN_OUTPUT_DIR: outDir }).status, 0);
    const second = readFileSync(target);
    assert.deepEqual(second, first);
    assert.deepEqual(second, readFileSync(postPath));
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
});

test("falls back when no output dir is set", () => {
  const workDir = tempDir();
  try {
    const env = { ...process.env };
    delete env.MAKEFUN_OUTPUT_DIR;
    const result = spawnSync(process.execPath, [mainPath], {
      cwd: workDir,
      env,
      encoding: "utf8",
    });
    assert.equal(result.status, 0, result.stderr);
    // Priority 2: /output exists as a directory on this machine, so the
    // copy lands there; otherwise it lands in ./output.json in the cwd.
    const target = existsSync("/output")
      ? "/output/POST.json"
      : join(workDir, "output.json");
    assert.ok(existsSync(target), `${target} should exist`);
    assert.deepEqual(readFileSync(target), readFileSync(postPath));
    assert.equal(statSync(target).mode & 0o777, 0o644);
  } finally {
    rmSync(workDir, { recursive: true, force: true });
    if (existsSync("/output/POST.json")) rmSync("/output/POST.json");
  }
});

test("exits non-zero when POST.json is missing", () => {
  const workDir = tempDir();
  try {
    copyFileSync(mainPath, join(workDir, "main.ts"));
    // No POST.json in the temp dir, so the copy must fail loudly.
    const result = spawnSync(process.execPath, [join(workDir, "main.ts")], {
      cwd: workDir,
      env: { ...process.env, MAKEFUN_OUTPUT_DIR: workDir },
      encoding: "utf8",
    });
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /failed/i);
  } finally {
    rmSync(workDir, { recursive: true, force: true });
  }
});
