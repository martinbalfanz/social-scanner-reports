# Social Scanner — WebCompat dashboard

Auto-generated WebCompat signal from Reddit (submissions + r/firefox comments), Hacker News, Bluesky, Mastodon, and support.mozilla.org. Posts are classified via Claude Haiku into site-specific webcompat issues and Firefox-platform issues, cross-referenced against Bugzilla and webcompat/web-bugs to surface what's already on file.

_Generated: 2026-05-15T19:05:47.715911+00:00 · Last scan: 2026-05-15T19:05:00.791219+00:00_

## Headlines

| | Count |
|---|---:|
| Posts pulled across all sources | 7,912 |
| Posts classified relevant | **311** |
| ↳ Webcompat with a domain | 112 |
| ↳ Webcompat without a clear domain | 25 |
| ↳ Firefox platform issues | 171 |

### Bugs on file vs potentially new

| Bucket | Items | With likely match | Potentially new |
|---|---:|---:|---:|
| Webcompat (with domain) | 112 | 25 | **87** |
| Firefox platform | 171 | 9 | **162** |

**274 actionable items** (no clear matching bug filed): 87 webcompat-with-domain, 25 webcompat-no-domain, 162 platform.

## Charts

### Daily relevant items (last 14 days)

```mermaid
xychart-beta
    title "Relevant items per day"
    x-axis ["05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08", "05-09", "05-10", "05-11", "05-12", "05-13", "05-14", "05-15"]
    y-axis "Items" 0 --> 33
    bar [9, 5, 2, 11, 18, 11, 12, 2, 5, 32, 12, 15, 24, 9]
```

### Bugs on file vs potentially new

```mermaid
pie showData title Likely on file vs potentially new
    "Likely on file" : 34
    "Potentially new" : 249
```

### Relevant items by source

```mermaid
xychart-beta
    title "Relevant items per source"
    x-axis ["bluesky", "reddit_comments", "reddit", "sumo", "github", "mastodon"]
    y-axis "Items" 0 --> 110
    bar [109, 85, 71, 30, 9, 7]
```

### Top domains by report volume

```mermaid
xychart-beta
    title "Posts per domain"
    x-axis ["youtube", "bsky", "reddit", "facebook", "twitch", "google", "netflix", "drive.google", "claude", "wix"]
    y-axis "Posts" 0 --> 25
    bar [24, 16, 12, 5, 4, 4, 3, 2, 2, 1]
```

## Trends (week over week)

**111** relevant items this week vs **62** last week (+49, up).

**Escalating domains** (≥2 more reports this week):
- `youtube.com`: 1 → 14 (+13)
- `reddit.com`: 1 → 11 (+10)

**New domains** (no reports last week, ≥2 this week):
- `netflix.com`: 2 reports

## Top clusters

Domains by report volume across the entire dataset:

| Domain | Posts | Likely match on file | Potentially new |
|---|---:|---:|---:|
| `youtube.com` | 24 | 12 | **12** |
| `bsky.app` | 16 | 6 | **10** |
| `reddit.com` | 12 | 1 | **11** |
| `facebook.com` | 5 | 0 | **5** |
| `twitch.tv` | 4 | 0 | **4** |
| `google.com` | 4 | 0 | **4** |
| `netflix.com` | 3 | 2 | **1** |
| `drive.google.com` | 2 | 1 | **1** |
| `claude.ai` | 2 | 2 | **0** |
| `wix.com` | 1 | 0 | **1** |

## High-urgency items with no matching bug

Top webcompat reports by urgency where the matcher found no likely match in Bugzilla or webcompat/web-bugs. These are the candidates for a new filing:

- **`youtube.com`** · urgency 85 · reddit
  YouTube won't load at all in Firefox for 5+ days, works in Edge
  · [post](https://reddit.com/r/firefox/comments/1tcx3ha/youtube_wont_load_at_all/)
- **`coingecko.com`** · urgency 85 · reddit_comments
  Firefox runs out of memory and becomes unresponsive on coingecko portfolio and lastminute.com search pages.
  · [post](https://reddit.com/r/firefox/comments/1t7uf0r/is_firefox_having_a_memory_leak_right_now/ol56wpe/)
- **`google.com`** · urgency 85 · mastodon
  Google Search broken on Firefox Android for hours; requests return malformed HTML.
  · [post](https://mastodon.cloud/@karlcow/111726266200532862)
- **`amazon.com`** · urgency 85 · sumo
  Firefox freezes during Amazon login/security interactions; purchase failures; Safari works fine.
  · [post](https://support.mozilla.org/en-US/questions/1580185)
- **`att.com`** · urgency 82 · reddit
  AT&T email login screen hangs and times out in Firefox only.
  · [post](https://reddit.com/r/firefox/comments/1t218fe/mozilla_user_for_20_years_ff_is_now_the_only/)

## High-urgency Firefox platform issues

Top platform-level reports by urgency. These don't tie to a single domain:

- urgency 95 · Firefox on Android freezes, locks up OS, has bookmark bugs, and causes site lockups.
  · [post](https://reddit.com/r/firefox/comments/1t9xssv/firefox_unusable_on_android_p9/)
- urgency 85 · Firefox showing certificate errors on all pages including mozilla.org
  · [post](https://bsky.app/profile/lexomatic.bsky.social/post/3mkkxe3o3ws2h)
- urgency 85 · Firefox 150 silently fails HTTP Basic Auth, returning NS_ERROR_FAILURE instead of prompting for credentials.
  · [post](https://reddit.com/r/firefox/comments/1t2t005/firefox_150_silently_fails_http_basic_auth_ns/)
- urgency 85 · Firefox Android won't load any web pages after recent update
  · [post](https://reddit.com/r/firefox/comments/1t0hh6t/firefox_android_not_working_after_the_most_recent/)
- urgency 85 · Firefox 149.0 crashes repeatedly when moving tabs; assertion error "Unhandled external image format"
  · [post](https://reddit.com/r/firefox/comments/1szcli8/firefox_1490_64bit_crashing_but_i_dont_know_what/)

## Platform issues already on file

Platform reports the matcher confirmed against existing bugs:

- **Firefox vertical tabs sidebar gets stuck expanded, blocking page and settings access.** → [BMO#1987303](https://bugzilla.mozilla.org/show_bug.cgi?id=1987303)  _When Windows animations are disabled, sometimes the vertical tabs sidebar gets s_
- **Firefox Sync not syncing bookmarks across Android and Ubuntu devices.** → [BMO#1972182](https://bugzilla.mozilla.org/show_bug.cgi?id=1972182)  _Issue with syncing Bookmarks on Firefox Android_
- **Right-click context menu not working in Firefox on NixOS** → [BMO#1762425](https://bugzilla.mozilla.org/show_bug.cgi?id=1762425)  _Firefox right click context menu not working properly in bspwm_
- **Audio not working on video players in Firefox** → [BMO#1933319](https://bugzilla.mozilla.org/show_bug.cgi?id=1933319)  _not working video and audio playback in video players_
- **Firefox context menus broken on Wayland after monitor power-cycle.** → [BMO#1564076](https://bugzilla.mozilla.org/show_bug.cgi?id=1564076)  _[Wayland] context menus not shown once deactivating external monitors_

## Latest reports

- [2026-05-15](2026/2026-05/2026-05-15.md) — 9 items
- [2026-05-14](2026/2026-05/2026-05-14.md) — 24 items
- [2026-05-13](2026/2026-05/2026-05-13.md) — 15 items
- [2026-05-12](2026/2026-05/2026-05-12.md) — 12 items
- [2026-05-11](2026/2026-05/2026-05-11.md) — 32 items
- [2026-05-10](2026/2026-05/2026-05-10.md) — 5 items
- [2026-05-09](2026/2026-05/2026-05-09.md) — 2 items
- [2026-05-08](2026/2026-05/2026-05-08.md) — 12 items
- [2026-05-07](2026/2026-05/2026-05-07.md) — 11 items
- [2026-05-06](2026/2026-05/2026-05-06.md) — 18 items

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
