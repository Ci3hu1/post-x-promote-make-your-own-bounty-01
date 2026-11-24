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

## Rewrite + re-check — 24 Nov 2026 ~11:35–11:40 WIB (subagent 4936c001) — CHECK LOLOS

- Rewrite (clean session aa37e796): HEAD e89c0f9 — all entry files written fresh from bounty facts only, without reading the old files; tests 5/5.
- Genuine revision (clean session cd6244aa): HEAD c2576c373a68cf666614ad2486dec5baef27966f — main.ts now validates POST.json (valid JSON, object, url non-empty starting https://x.com/) before copying, failing loudly on bad input; +2 validation tests. Tests 7/7. Push verified via git ls-remote.
- Bundle (only the 2 clean sessions): ~/workspace/tools/makefun/bundles/postx-rewrite-bundle.tar.gz (549,875 B), usage 2 rows attached, model ipnext/avocado-5.17-v2.
- Kit check on c2576c3: ok: True, failed: []. 15 pass, 7 skip, 3 submission-time (repo_owner / source_bundle / duplicate_snapshot). thinking_reproduces PASS, thinking_revised PASS. thinking_fresh SKIP (note only).
- READY for Joni's 'Setuju' on commit c2576c373a68cf666614ad2486dec5baef27966f. Do NOT submit — the old approval (for 6d36f5b) does not carry to this new commit. The earlier bundle (postx-bundle.tar.gz, commit 6d36f5b, check failed) is superseded.

## README fix + submit — 24 Nov 2026 ~11:47 WIB — REFUSED (entry_link)

- Joni approved commit c2576c3 ("Setuju" 10:43 WIB). First submit attempt was REFUSED (HTTP 422, repo_readme): README used static img.shields.io badges, not the three live make.fun badges. That refusal does not count against today's entries.
- Fix (docs commit 4ed7b9e092aab446c05021aeb8c8226f4dce72e5, pushed, ls-remote verified): README badge block replaced with the three live make.fun badges per how_to_submit.readme_template (competition / rank / reward, owner Ci3hu1, with utm params) + bounty link. POST.json, main.ts, tests untouched. Repo About already correct (homepage bounty page; topics ai-agents/bounties/growth/makefun).
- Re-bundle (sessions aa37e796 + cd6244aa + parent 4936c001 pulled in as family; usage 2 rows attached): ~/workspace/tools/makefun/bundles/postx-rewrite-bundle.tar.gz (555,643 B, sha256 6cf71ad99e7730b07ea068a2a6e60a6152e56d3b7dbf4d64edffae649f52d558). Kit check on 4ed7b9e: ok: True, failed: []. thinking_reproduces 300/307 (97.7%), thinking_revised PASS (4 messages), thinking_in_window PASS.
- Submit (commit 4ed7b9e, title "X post promoting Make Your Own Bounty"): accepted HTTP 202, submission 01a20baa-5728-7022-8281-0140e71e66b7, then REFUSED (HTTP 422, entry_link): post 2124952049179890172 carries NONE of this bounty's play codes (makefun-atrium-petal-atlas, makefun-cape-eggplant-plank, makefun-galaxy-sand-octopus, makefun-thermos-strudel-tarragon). The "cc7tcnw6" in the strategy/post is the referral code, NOT a play code for this bounty. A post's text cannot be changed once up — Joni must post AGAIN (public, before 26 Nov 18:35 UTC, picture attached, make.fun link/written out or @makefunai, plus ONE of the four play codes in the text), then POST.json is updated to the new URL, committed, and resubmitted. Rejected entries do not count toward the per-competition entry allowance (1 of 1 left today). Claim code saved ONLY to ~/.config/makefun/post-x-promote-make-your-own-bounty-01-submission.json (0600).
