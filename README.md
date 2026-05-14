# Social Scanner — WebCompat dashboard

Auto-generated WebCompat signal from Reddit (submissions + r/firefox comments), Hacker News, Bluesky, Mastodon, and support.mozilla.org. Posts are classified via Claude Haiku into site-specific webcompat issues and Firefox-platform issues, cross-referenced against Bugzilla and webcompat/web-bugs to surface what's already on file.

_Generated: 2026-05-14T07:05:50.090426+00:00 · Last scan: 2026-05-14T07:05:00.609854+00:00_

## Headlines

| | Count |
|---|---:|
| Posts pulled across all sources | 7,120 |
| Posts classified relevant | **282** |
| ↳ Webcompat with a domain | 93 |
| ↳ Webcompat without a clear domain | 24 |
| ↳ Firefox platform issues | 162 |

### Bugs on file vs potentially new

| Bucket | Items | With likely match | Potentially new |
|---|---:|---:|---:|
| Webcompat (with domain) | 93 | 12 | **81** |
| Firefox platform | 162 | 9 | **153** |

**258 actionable items** (no clear matching bug filed): 81 webcompat-with-domain, 24 webcompat-no-domain, 153 platform.

## Charts

### Daily relevant items (last 14 days)

```mermaid
xychart-beta
    title "Relevant items per day"
    x-axis ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08", "05-09", "05-10", "05-11", "05-12", "05-13", "05-14"]
    y-axis "Items" 0 --> 33
    bar [6, 9, 5, 2, 11, 18, 11, 12, 2, 5, 32, 12, 15, 4]
```

### Bugs on file vs potentially new

```mermaid
pie showData title Likely on file vs potentially new
    "Likely on file" : 21
    "Potentially new" : 234
```

### Relevant items by source

```mermaid
xychart-beta
    title "Relevant items per source"
    x-axis ["bluesky", "reddit", "reddit_comments", "sumo", "github", "mastodon"]
    y-axis "Items" 0 --> 110
    bar [109, 68, 64, 25, 9, 7]
```

### Top domains by report volume

```mermaid
xychart-beta
    title "Posts per domain"
    x-axis ["bsky", "reddit", "youtube", "facebook", "twitch", "google", "netflix", "drive.google", "claude", "wix"]
    y-axis "Posts" 0 --> 17
    bar [16, 11, 10, 5, 4, 4, 2, 2, 2, 1]
```

## Trends (week over week)

**93** relevant items this week vs **61** last week (+32, up).

**Escalating domains** (≥2 more reports this week):
- `bsky.app`: 1 → 3 (+2)

**New domains** (no reports last week, ≥2 this week):
- `reddit.com`: 11 reports

## Top clusters

Domains by report volume across the entire dataset:

| Domain | Posts | Likely match on file | Potentially new |
|---|---:|---:|---:|
| `bsky.app` | 16 | 6 | **10** |
| `reddit.com` | 11 | 1 | **10** |
| `youtube.com` | 10 | 0 | **10** |
| `facebook.com` | 5 | 0 | **5** |
| `twitch.tv` | 4 | 0 | **4** |
| `google.com` | 4 | 0 | **4** |
| `netflix.com` | 2 | 1 | **1** |
| `drive.google.com` | 2 | 1 | **1** |
| `claude.ai` | 2 | 2 | **0** |
| `wix.com` | 1 | 0 | **1** |

## High-urgency items with no matching bug

Top webcompat reports by urgency where the matcher found no likely match in Bugzilla or webcompat/web-bugs. These are the candidates for a new filing:

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
- **`facebook.com`** · urgency 78 · reddit
  Firefox 149 stalling with 20+ second input lag on Facebook Marketplace; processes stuck at 100%+ CPU.
  · [post](https://reddit.com/r/firefox/comments/1sunto8/firefox_149_stalling_badly_on_facebook/)

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

- [2026-05-14](2026/2026-05/2026-05-14.md) — 4 items
- [2026-05-13](2026/2026-05/2026-05-13.md) — 15 items
- [2026-05-12](2026/2026-05/2026-05-12.md) — 12 items
- [2026-05-11](2026/2026-05/2026-05-11.md) — 32 items
- [2026-05-10](2026/2026-05/2026-05-10.md) — 5 items
- [2026-05-09](2026/2026-05/2026-05-09.md) — 2 items
- [2026-05-08](2026/2026-05/2026-05-08.md) — 12 items
- [2026-05-07](2026/2026-05/2026-05-07.md) — 11 items
- [2026-05-06](2026/2026-05/2026-05-06.md) — 18 items
- [2026-05-05](2026/2026-05/2026-05-05.md) — 11 items

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
