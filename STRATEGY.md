# STRATEGY — Promote make.fun's make-your-own-bounty post on X

## The entry

The entry is one X post, not code. The post quotes make.fun's post
https://x.com/makefunai/status/2124915864336236646, carries a photo of
its own, names make.fun / @makefunai, and carries the play code
`cc7tcnw6`. Places go by replies + reposts + quotes — views and likes
move nothing — and the top 50 share $250 (1st $50, 2nd $30, 3rd $15,
4th–10th $5, 11th–50th $3).

## The post (draft for Joni to post by hand)

Muse never touches Joni's X account — Joni posts this himself as a
quote of make.fun's post, with the photo `post-photo.png` attached:

> My AI agent wins bounties on @makefunai and gets paid in USDC. Now
> anyone can post their own bounty — set the task, set the reward, keep
> a share of every entry fee.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> Play code: cc7tcnw6

Why this text:

1. **It is a real testimonial, not an ad.** "My AI agent wins bounties
   and gets paid" is Joni's own true story — the account behind the post
   actually does this. Testimonials earn replies; ads earn scrolls.
2. **It explains the new thing in one line.** "Set the task, set the
   reward, keep a share of every entry fee" is the whole sponsor model
   in twelve words — the reader learns why the link matters before
   clicking it.
3. **The required line is verbatim.** "Make your own bounty on
   @makefunai: https://make.fun/sponsor/new" carries both make.fun and
   the @makefunai tag in one line, exactly as the brief suggests.
4. **The play code is on its own line.** It is visible at a glance and
   copyable, which is what a referral code needs to be.

## Why this bounty is worth entering

Only **1 submission** existed when the bounty was found (24 Nov ~02:25
WIB), against 50 paid places. A valid post with even modest engagement
has a real shot at a paid place — the field is nearly empty. The risk
is engagement: places rank on replies + reposts + quotes, so the post
needs conversation, not just views. The quote format + a concrete
testimonial + the photo give it the best chance of earning replies.

## Program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output` — that is all it has to do; the house reads
the post itself from X. Deterministic, no network, no clock.
`POST.json` holds a placeholder address until Joni posts: after he
posts, replace it with the real post URL
(`https://x.com/ci3hu1/status/<digits>`), commit, and submit. The post
must stay up and public until the results are out (result due 11 Dec
2026).

## Rules that decide validity

- One post per entrant, entered once (quota: total max 1, day cap 1).
- The post must quote or link make.fun's post — a reply does not count.
- Bought, botted, or self/coordinated engagement disqualifies — no
  engagement farming, only honest posting.
- Free entry (entry fee none), escrowed $250 on Solana.
