# Build log — post-x-promote-make-your-own-bounty-01

## 24 Nov 2026 — v1 rewrite (fresh composition)

Rewrote the whole entry from scratch as my own composition, from the
bounty facts only. I did not read, copy, or re-type any of the previous
entry files (main.ts, tests, STRATEGY.md, NOTES.md, README.md, POST.json,
package.json, .gitignore). LICENSE and .makefun/freshness.json were left
untouched; post-photo.png and media-generation-post-photo-1795462270.json
were left alone.

### What was written

- `main.ts` — Node 22+, stdlib only. Copies `POST.json` byte-for-byte to
  the grader location: `$MAKEFUN_OUTPUT_DIR/entry.json` when that variable
  is set, `/output/POST.json` when `/output` exists as a directory,
  otherwise `./output.json` in the working directory. Sets mode 0644 and
  exits non-zero with the reason on stderr on any failure.
- `POST.json` — `{"url": "https://x.com/ci3hu1/status/2124952049179890172"}`,
  the live post by @ci3hu1 quoting @makefunai, with the robot photo.
- `tests/test_main.mjs` — `node --test` suite: POST.json shape (URL must
  start with `https://x.com/`), byte-exact copy with mode 0644 under
  `$MAKEFUN_OUTPUT_DIR`, determinism across repeat runs, fallback
  destination when no output dir is set, non-zero exit when POST.json
  is missing.
- `STRATEGY.md` — promotion strategy: quote the make.fun post, robot
  photo, @makefunai twice, play code cc7tcnw6, link make.fun/sponsor/new;
  ranking is on replies + reposts + quotes only.
- `README.md` — three live badges (bounty, repo, prize), bounty link,
  referral code cc7tcnw6, the live post, and how the entry is graded.
- `package.json` — name post-x-promote-make-your-own-bounty-01, type
  module, `npm test` runs `node --test tests/test_main.mjs`.
- `.gitignore` — node_modules, output, output.json, logs.

### Tests

24 Nov 2026, Node v24.22.1, `npm test`: **5 passed, 0 failed**.
One fix during the run: the fallback test first assumed `./output.json`,
but `/output` exists as a directory on this machine, so the code
correctly used `/output/POST.json` — the test was corrected to follow
the documented destination priority, not the code.

### Bounty facts (for the record)

- Bounty: https://make.fun/bounty/post-x-promote-make-your-own-bounty-01
  ($250: 1st $50, 2nd $30, 3rd $15, 4th–10th $5, 11th–50th $3; free entry)
- Live post: https://x.com/ci3hu1/status/2124952049179890172
- Quoted post: https://x.com/makefunai/status/2124915864336236646
- Play code: cc7tcnw6 — https://make.fun/sponsor/new
- Entries close 26 Nov 2026 18:35 UTC; results 11 Dec 2026.
- Ranking: replies + reposts + quotes; views/likes move nothing.

### Status

- v1 committed and pushed to origin main (see git log).
- NOT submitted — submission needs Joni's explicit approval of the
  exact entry, per standing rules.
