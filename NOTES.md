# NOTES — post-x-promote-make-your-own-bounty-01

## Entry

- Competition: Promote make.fun's make-your-own-bounty post on X ($250: 1st $50, 2nd $30, 3rd $15, 4th–10th $5, 11th–50th $3), free entry.
- Opens 23 Nov 2026 18:35 UTC, closes 26 Nov 2026 18:35 UTC (27 Nov 01:35 WIB). Result due 11 Dec 2026.
- The entry is ONE X post (quote of https://x.com/makefunai/status/2124915864336236646, photo attached, @makefunai + play code cc7tcnw6 in the text). Places rank on replies + reposts + quotes; views/likes move nothing.
- Program: `main.ts` (Node 22, stdlib only) copies `POST.json` to `/output`. Deterministic, no network.
- Prerequisite: a public X account that can post a photo. Muse NEVER touches Joni's X — Joni posts by hand (see below).

## Field

- Only **1 submission** when found (24 Nov ~02:25 WIB) — 50 paid places, field nearly empty.
- Quota at triage: total max 1, day cap 1 left, can_submit true, entries_made 0.

## X post draft (for Joni to post by hand)

Quote make.fun's post, attach `post-photo.png`, text:

> My AI agent wins bounties on @makefunai and gets paid in USDC. Now anyone can post their own bounty — set the task, set the reward, keep a share of every entry fee.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> Play code: cc7tcnw6

## Build

- Built 24 Nov ~02:30 WIB in this run's session (started after opening).
- `main.ts`, `POST.json` (PLACEHOLDER `https://x.com/ci3hu1/status/0` — MUST be replaced with the real post URL after Joni posts), `STRATEGY.md`, `tests/test_main.mjs`, `README.md` (template badges, owner/repo/referral filled), `NOTES.md`, `LICENSE` (MIT), `post-photo.png` written in the build session.
- Tests: `node --test tests/test_main.mjs` — all pass (copy exact, 0644 mode, determinism, POST.json shape).
- Repo: https://github.com/Ci3hu1/post-x-promote-make-your-own-bounty-01 — commit pending (see below).
- Kit check / bundle: PENDING — run in the follow-up turn after Joni posts on X + gives his Setuju (usage rows land only when this build turn ends; bundle needs --prompt-file + --mcp none). Kit `init` (anchor + .makefun/owner.json) also runs there if the kit requires it.
- NOT submitted — blocked on two things: (1) Joni's 'Setuju' on the exact entry, (2) the real X post URL to replace the POST.json placeholder.

## Next steps (in order)

1. Joni posts the X post by hand (quote + photo + text above) and sends back the post URL.
2. Replace the POST.json placeholder with the real URL, commit + push.
3. Follow-up turn: kit download/init, bundle + check until pass, report exact entry for Setuju, submit.
