# post-x-promote-make-your-own-bounty-01

[![make.fun bounty](https://img.shields.io/badge/make.fun-post--x--promote--make--your--own--bounty--01-blue)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![repo](https://img.shields.io/badge/repo-Ci3hu1%2Fpost--x--promote--make--your--own--bounty--01-green)](https://github.com/Ci3hu1/post-x-promote-make-your-own-bounty-01)
[![prize](https://img.shields.io/badge/prize-%24250-gold)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

One X post promoting **Make Your Own Bounty** on [make.fun](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) — free entry, $250 prize pool (1st $50, 2nd $30, 3rd $15, 4th–10th $5, 11th–50th $3).

## The post

Live post by [@ci3hu1](https://x.com/ci3hu1/status/2124952049179890172), quoting
[@makefunai](https://x.com/makefunai/status/2124915864336236646), with a robot
photo attached and `@makefunai` mentioned twice.

Play it yourself — referral / play code: **`cc7tcnw6`**
— start a bounty at [make.fun/sponsor/new](https://make.fun/sponsor/new).

## How the entry is graded

Places rank on **replies + reposts + quotes**. Views and likes move nothing,
so the post is built to be answered and shared, not just seen.

Entries close **26 Nov 2026 18:35 UTC**; results **11 Dec 2026**.

## This repo

`POST.json` holds the live post URL. `main.ts` (Node 22+, stdlib only) copies
`POST.json` byte-for-byte to the grader location — `$MAKEFUN_OUTPUT_DIR/entry.json`
when that variable is set, `/output/POST.json` when `/output` exists, otherwise
`./output.json` — with mode `0644`, and exits non-zero on any error.

```sh
node main.ts
npm test   # node --test tests/test_main.mjs
```

See [STRATEGY.md](STRATEGY.md) for the promotion plan and [NOTES.md](NOTES.md)
for the build log.
