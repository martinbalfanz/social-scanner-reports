# Social Scanner — WebCompat dashboard

Auto-generated WebCompat signal from Reddit (submissions + r/firefox comments), Hacker News, Bluesky, Mastodon, and support.mozilla.org. Posts are classified via Claude Haiku into site-specific webcompat issues and Firefox-platform issues, cross-referenced against Bugzilla and webcompat/web-bugs to surface what's already on file.

_Generated: 2026-05-26T19:02:39.922207+00:00 · Last scan: 2026-05-26T17:17:51.857843+00:00_

## Headlines

| | Count |
|---|---:|
| Posts pulled across all sources | 15,978 |
| Posts classified relevant | **2104** |
| ↳ Webcompat with a domain | 715 |
| ↳ Webcompat without a clear domain | 37 |
| ↳ Firefox platform issues | 1352 |

### Bugs on file vs potentially new

| Bucket | Items | With likely match | Potentially new |
|---|---:|---:|---:|
| Webcompat (with domain) | 715 | 106 | **609** |
| Firefox platform | 1352 | 75 | **1277** |

**1923 actionable items** (no clear matching bug filed): 609 webcompat-with-domain, 37 webcompat-no-domain, 1277 platform.

## Charts

### Daily relevant items (last 14 days)

```mermaid
xychart-beta
    title "Relevant items per day"
    x-axis ["05-13", "05-14", "05-15", "05-16", "05-17", "05-18", "05-19", "05-20", "05-21", "05-22", "05-23", "05-24", "05-25", "05-26"]
    y-axis "Items" 0 --> 280
    bar [77, 68, 57, 42, 49, 93, 111, 141, 279, 113, 111, 78, 57, 78]
```

### Bugs on file vs potentially new

```mermaid
pie showData title Likely on file vs potentially new
    "Likely on file" : 181
    "Potentially new" : 1886
```

### Relevant items by source

```mermaid
xychart-beta
    title "Relevant items per source"
    x-axis ["reddit_comments", "sumo", "reddit", "bluesky", "github", "mastodon", "mozfr", "hackernews"]
    y-axis "Items" 0 --> 968
    bar [967, 550, 435, 89, 40, 12, 10, 1]
```

### Top domains by report volume

```mermaid
xychart-beta
    title "Posts per domain"
    x-axis ["youtube", "google", "facebook", "reddit", "twitch", "bsky", "amazon", "netflix", "web.whatsapp", "gmail"]
    y-axis "Posts" 0 --> 153
    bar [152, 138, 38, 35, 16, 16, 14, 11, 10, 10]
```

## Trends (week over week)

**968** relevant items this week vs **470** last week (+498, up).

**Escalating domains** (≥2 more reports this week):
- `google.com`: 15 → 103 (+88)
- `amazon.com`: 2 → 11 (+9)
- `netflix.com`: 2 → 7 (+5)
- `id.me`: 2 → 5 (+3)
- `docs.google.com`: 1 → 3 (+2)
- `facebook.com`: 6 → 8 (+2)
- `youtube.com`: 51 → 53 (+2)

**New domains** (no reports last week, ≥2 this week):
- `twitter.com`: 7 reports
- `maps.google.com`: 3 reports
- `protonmail.com`: 3 reports
- `ebay.com`: 2 reports
- `linkedin.com`: 2 reports
- `qwant.com`: 2 reports
- `tiktok.com`: 2 reports

## Top clusters

Domains by report volume across the entire dataset:

| Domain | Posts | Likely match on file | Potentially new |
|---|---:|---:|---:|
| `youtube.com` | 152 | 21 | **131** |
| `google.com` | 138 | 27 | **111** |
| `facebook.com` | 38 | 0 | **38** |
| `reddit.com` | 35 | 3 | **32** |
| `twitch.tv` | 16 | 7 | **9** |
| `bsky.app` | 16 | 6 | **10** |
| `amazon.com` | 14 | 5 | **9** |
| `netflix.com` | 11 | 5 | **6** |
| `web.whatsapp.com` | 10 | 2 | **8** |
| `gmail.com` | 10 | 0 | **10** |

## High-urgency items with no matching bug

Top webcompat reports by urgency where the matcher found no likely match in Bugzilla or webcompat/web-bugs. These are the candidates for a new filing:

- **`youtube.com`** · urgency 95 · reddit_comments
  YouTube breaks after Firefox reboot until user profile is replaced; issue started with latest FF update, doesn't occur i
  · [post](https://reddit.com/r/firefox/comments/1th369d/youtube_again/omtxxhk/)
- **`youtube.com`** · urgency 85 · sumo
  YouTube freezes unresponsively in Firefox, blocking scrolling and interaction.
  · [post](https://support.mozilla.org/en-US/questions/1583872)
- **`intesasanpaolo.it`** · urgency 85 · sumo
  Firefox shows "400 Bad Request — Request Header Or Cookie Too Large" error when trying to access Intesa San Paolo home b
  · [post](https://support.mozilla.org/en-US/questions/1583690)
- **`netflix.com`** · urgency 85 · sumo
  Netflix video displays as full green screen after Firefox update
  · [post](https://support.mozilla.org/en-US/questions/1583466)
- **`youtube.com`** · urgency 85 · reddit_comments
  YouTube tab crashes after ~2 seconds in Firefox Nightly.
  · [post](https://reddit.com/r/firefox/comments/1tlrfrv/youtube_tab_crashes_after_2_seconds_with_nightly/onhrm1k/)

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

- [2026-05-26](2026/2026-05/2026-05-26.md) — 78 items
- [2026-05-25](2026/2026-05/2026-05-25.md) — 57 items
- [2026-05-24](2026/2026-05/2026-05-24.md) — 78 items
- [2026-05-23](2026/2026-05/2026-05-23.md) — 111 items
- [2026-05-22](2026/2026-05/2026-05-22.md) — 113 items
- [2026-05-21](2026/2026-05/2026-05-21.md) — 279 items
- [2026-05-20](2026/2026-05/2026-05-20.md) — 141 items
- [2026-05-19](2026/2026-05/2026-05-19.md) — 111 items
- [2026-05-18](2026/2026-05/2026-05-18.md) — 93 items
- [2026-05-17](2026/2026-05/2026-05-17.md) — 49 items

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
