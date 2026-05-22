# Social Scanner — WebCompat dashboard

Auto-generated WebCompat signal from Reddit (submissions + r/firefox comments), Hacker News, Bluesky, Mastodon, and support.mozilla.org. Posts are classified via Claude Haiku into site-specific webcompat issues and Firefox-platform issues, cross-referenced against Bugzilla and webcompat/web-bugs to surface what's already on file.

_Generated: 2026-05-22T21:11:36.800237+00:00 · Last scan: 2026-05-22T19:25:08.459430+00:00_

## Headlines

| | Count |
|---|---:|
| Posts pulled across all sources | 12,915 |
| Posts classified relevant | **1745** |
| ↳ Webcompat with a domain | 614 |
| ↳ Webcompat without a clear domain | 32 |
| ↳ Firefox platform issues | 1099 |

### Bugs on file vs potentially new

| Bucket | Items | With likely match | Potentially new |
|---|---:|---:|---:|
| Webcompat (with domain) | 614 | 96 | **518** |
| Firefox platform | 1099 | 67 | **1032** |

**1582 actionable items** (no clear matching bug filed): 518 webcompat-with-domain, 32 webcompat-no-domain, 1032 platform.

## Charts

### Daily relevant items (last 14 days)

```mermaid
xychart-beta
    title "Relevant items per day"
    x-axis ["05-09", "05-10", "05-11", "05-12", "05-13", "05-14", "05-15", "05-16", "05-17", "05-18", "05-19", "05-20", "05-21", "05-22"]
    y-axis "Items" 0 --> 280
    bar [7, 18, 109, 84, 77, 68, 57, 42, 49, 93, 111, 141, 279, 78]
```

### Bugs on file vs potentially new

```mermaid
pie showData title Likely on file vs potentially new
    "Likely on file" : 163
    "Potentially new" : 1550
```

### Relevant items by source

```mermaid
xychart-beta
    title "Relevant items per source"
    x-axis ["reddit_comments", "sumo", "reddit", "bluesky", "github", "mastodon", "mozfr", "hackernews"]
    y-axis "Items" 0 --> 781
    bar [780, 440, 385, 84, 39, 12, 4, 1]
```

### Top domains by report volume

```mermaid
xychart-beta
    title "Posts per domain"
    x-axis ["google", "youtube", "facebook", "reddit", "twitch", "bsky", "web.whatsapp", "twitter", "netflix", "id"]
    y-axis "Posts" 0 --> 133
    bar [132, 123, 34, 31, 15, 14, 9, 7, 7, 7]
```

## Trends (week over week)

**850** relevant items this week vs **419** last week (+431, up).

**Escalating domains** (≥2 more reports this week):
- `google.com`: 10 → 107 (+97)
- `youtube.com`: 32 → 53 (+21)
- `twitch.tv`: 3 → 8 (+5)
- `twitter.com`: 1 → 6 (+5)
- `amazon.com`: 1 → 3 (+2)
- `docs.google.com`: 1 → 3 (+2)
- `netflix.com`: 2 → 4 (+2)
- `web.whatsapp.com`: 3 → 5 (+2)

**New domains** (no reports last week, ≥2 this week):
- `id.me`: 7 reports
- `maps.google.com`: 3 reports
- `protonmail.com`: 3 reports
- `chatgpt.com`: 2 reports
- `homedepot.com`: 2 reports
- `newgrounds.com`: 2 reports

## Top clusters

Domains by report volume across the entire dataset:

| Domain | Posts | Likely match on file | Potentially new |
|---|---:|---:|---:|
| `google.com` | 132 | 26 | **106** |
| `youtube.com` | 123 | 21 | **102** |
| `facebook.com` | 34 | 0 | **34** |
| `reddit.com` | 31 | 3 | **28** |
| `twitch.tv` | 15 | 7 | **8** |
| `bsky.app` | 14 | 6 | **8** |
| `web.whatsapp.com` | 9 | 2 | **7** |
| `twitter.com` | 7 | 0 | **7** |
| `netflix.com` | 7 | 4 | **3** |
| `id.me` | 7 | 0 | **7** |

## High-urgency items with no matching bug

Top webcompat reports by urgency where the matcher found no likely match in Bugzilla or webcompat/web-bugs. These are the candidates for a new filing:

- **`youtube.com`** · urgency 95 · reddit_comments
  YouTube breaks after Firefox reboot until user profile is replaced; issue started with latest FF update, doesn't occur i
  · [post](https://reddit.com/r/firefox/comments/1th369d/youtube_again/omtxxhk/)
- **`google.com`** · urgency 85 · reddit_comments
  Google Search shows CAPTCHA in Firefox but not in Chrome, blocking search access.
  · [post](https://reddit.com/r/firefox/comments/1tjgmli/google_search_tries_to_force_google_chrome_on_you/on2b8lb/)
- **`facebook.com`** · urgency 85 · sumo
  Facebook reCAPTCHA login broken in Firefox 151.0, works in 150.0.3
  · [post](https://support.mozilla.org/en-US/questions/1582718)
- **`jquery.com`** · urgency 85 · github
  jQuery animation promise gets stuck in infinite loop when `.then()` handler added in start callback, freezing browser
  · [post](https://github.com/jquery/jquery/issues/5534)
- **`amazon.com`** · urgency 85 · sumo
  Firefox freezes during Amazon login and security authentication, causing payment failures; works in Safari.
  · [post](https://support.mozilla.org/en-US/questions/1580185)

## High-urgency Firefox platform issues

Top platform-level reports by urgency. These don't tie to a single domain:

- urgency 95 · User lost their entire Firefox profile and years of bookmarks after a recent update.
  · [post](https://reddit.com/r/firefox/comments/1thtq98/just_lost_my_whole_profile_and_years_of_bookmark/ompi7kc/)
- urgency 95 · Firefox profile and years of bookmarks lost after an update
  · [post](https://reddit.com/r/firefox/comments/1thtq98/just_lost_my_whole_profile_and_years_of_bookmark/omqbi07/)
- urgency 95 · Firefox update caused loss of entire profile and bookmarks.
  · [post](https://reddit.com/r/firefox/comments/1thtq98/just_lost_my_whole_profile_and_years_of_bookmark/omq5me5/)
- urgency 95 · User lost entire profile and years of bookmarks after Firefox update
  · [post](https://reddit.com/r/firefox/comments/1thtq98/just_lost_my_whole_profile_and_years_of_bookmark/omxynl2/)
- urgency 95 · Firefox Mobile deleting downloaded files without user knowledge after update
  · [post](https://reddit.com/r/firefox/comments/1tj7qnk/warning_firefox_mobile_is_deleting_downloaded/omzuu8j/)

## Platform issues already on file

Platform reports the matcher confirmed against existing bugs:

- **Firefox 140.9.1esr and later show some PDFs as blank white pages while other browsers and ** → [BMO#1671854](https://bugzilla.mozilla.org/show_bug.cgi?id=1671854)  _pdf-viewer renders certain files incorrectly_
- **Bookmarks imported from Chrome are not visible in Firefox 150.0.1 after import.** → [BMO#2037345](https://bugzilla.mozilla.org/show_bug.cgi?id=2037345)  _Imported Bookmarks from Chrome, but nowhere it is visible in Firefox Browser_
- **All bookmarks disappeared after Firefox update.** → [BMO#2017721](https://bugzilla.mozilla.org/show_bug.cgi?id=2017721)  _all my bookmarks thumbnails disappeared (BIG POOF!)_
- **Firefox Mobile automatically deleted downloaded files after update due to auto-enabled set** → [BMO#1832721](https://bugzilla.mozilla.org/show_bug.cgi?id=1832721)  _Downloaded file automatically deleted when i unstall Firefox_
- **Firefox Mobile deletes downloaded files without user consent after update.** → [BMO#947536](https://bugzilla.mozilla.org/show_bug.cgi?id=947536)  _When Firefox restarts after crash, it deletes active downloaded files, and start_

## Latest reports

- [2026-05-22](2026/2026-05/2026-05-22.md) — 78 items
- [2026-05-21](2026/2026-05/2026-05-21.md) — 279 items
- [2026-05-20](2026/2026-05/2026-05-20.md) — 141 items
- [2026-05-19](2026/2026-05/2026-05-19.md) — 111 items
- [2026-05-18](2026/2026-05/2026-05-18.md) — 93 items
- [2026-05-17](2026/2026-05/2026-05-17.md) — 49 items
- [2026-05-16](2026/2026-05/2026-05-16.md) — 42 items
- [2026-05-15](2026/2026-05/2026-05-15.md) — 57 items
- [2026-05-14](2026/2026-05/2026-05-14.md) — 68 items
- [2026-05-13](2026/2026-05/2026-05-13.md) — 77 items

## Browse

- [Full reports index](index.md) — every dated report, by month

## How to read each report

Every relevant item carries:

- Source link (Reddit / HN / Bluesky / Mastodon / SUMO)
- Posted timestamp, score, comment count
- Sentiment, severity, urgency score (0-100)
- Gist (one-line summary)
- Reproduction steps when present
- Bug cross-references grouped by match verdict: **Likely match**, **Maybe related**, **Same domain different issue**

The triage round-trip lets you mark items `[x]` triaged or `` `[filed:: BMO#1234567]` `` directly in any report's markdown — the next sync picks up your edits and persists them.

---

_This README is regenerated on every sync from `social-scanner share`. To refresh manually: `uv run social-scanner share`._
