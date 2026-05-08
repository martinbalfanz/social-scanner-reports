# Social Scanner — WebCompat dashboard

Auto-generated WebCompat signal from Reddit (submissions + r/firefox comments), Hacker News, Bluesky, Mastodon, and support.mozilla.org. Posts are classified via Claude Haiku into site-specific webcompat issues and Firefox-platform issues, cross-referenced against Bugzilla and webcompat/web-bugs to surface what's already on file.

_Generated: 2026-05-08T05:06:18.859746+00:00 · Last scan: 2026-05-08T05:05:06.168664+00:00_

## Headlines

| | Count |
|---|---:|
| Posts pulled across all sources | 4,466 |
| Posts classified relevant | **202** |
| ↳ Webcompat with a domain | 73 |
| ↳ Webcompat without a clear domain | 18 |
| ↳ Firefox platform issues | 108 |

### Bugs on file vs potentially new

| Bucket | Items | With likely match | Potentially new |
|---|---:|---:|---:|
| Webcompat (with domain) | 73 | 9 | **64** |
| Firefox platform | 108 | 7 | **101** |

**183 actionable items** (no clear matching bug filed): 64 webcompat-with-domain, 18 webcompat-no-domain, 101 platform.

## Charts

### Daily relevant items (last 14 days)

```mermaid
xychart-beta
    title "Relevant items per day"
    x-axis ["04-25", "04-26", "04-27", "04-28", "04-29", "04-30", "05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07", "05-08"]
    y-axis "Items" 0 --> 19
    bar [2, 11, 5, 8, 10, 10, 6, 9, 5, 2, 11, 18, 11, 3]
```

### Bugs on file vs potentially new

```mermaid
pie showData title Likely on file vs potentially new
    "Likely on file" : 16
    "Potentially new" : 165
```

### Relevant items by source

```mermaid
xychart-beta
    title "Relevant items per source"
    x-axis ["bluesky", "reddit", "sumo", "reddit_comments", "github", "mastodon"]
    y-axis "Items" 0 --> 104
    bar [103, 57, 14, 13, 8, 7]
```

### Top domains by report volume

```mermaid
xychart-beta
    title "Posts per domain"
    x-axis ["bsky", "youtube", "facebook", "twitch", "google", "drive.google", "claude", "wix", "w.struct", "threads"]
    y-axis "Posts" 0 --> 15
    bar [14, 10, 5, 4, 3, 2, 2, 1, 1, 1]
```

## Trends (week over week)

**65** relevant items this week vs **58** last week (+7, up).

**New domains** (no reports last week, ≥2 this week):
- `twitch.tv`: 2 reports

## Top clusters

Domains by report volume across the entire dataset:

| Domain | Posts | Likely match on file | Potentially new |
|---|---:|---:|---:|
| `bsky.app` | 14 | 6 | **8** |
| `youtube.com` | 10 | 0 | **10** |
| `facebook.com` | 5 | 0 | **5** |
| `twitch.tv` | 4 | 0 | **4** |
| `google.com` | 3 | 0 | **3** |
| `drive.google.com` | 2 | 1 | **1** |
| `claude.ai` | 2 | 2 | **0** |
| `wix.com` | 1 | 0 | **1** |
| `w.struct.ws` | 1 | 0 | **1** |
| `threads.net` | 1 | 0 | **1** |

## High-urgency items with no matching bug

Top webcompat reports by urgency where the matcher found no likely match in Bugzilla or webcompat/web-bugs. These are the candidates for a new filing:

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
- **`youtube.com`** · urgency 78 · reddit
  YouTube videos cause extreme RAM consumption (1.5-7.5GB) and CPU throttling in Firefox, appearing after recent browser u
  · [post](https://reddit.com/r/firefox/comments/1syx195/terrible_performance_while_watching_youtube/)

## High-urgency Firefox platform issues

Top platform-level reports by urgency. These don't tie to a single domain:

- urgency 85 · Firefox showing certificate errors on all pages including mozilla.org
  · [post](https://bsky.app/profile/lexomatic.bsky.social/post/3mkkxe3o3ws2h)
- urgency 85 · Firefox 150 silently fails HTTP Basic Auth, returning NS_ERROR_FAILURE instead of prompting for credentials.
  · [post](https://reddit.com/r/firefox/comments/1t2t005/firefox_150_silently_fails_http_basic_auth_ns/)
- urgency 85 · Firefox Android won't load any web pages after recent update
  · [post](https://reddit.com/r/firefox/comments/1t0hh6t/firefox_android_not_working_after_the_most_recent/)
- urgency 85 · Firefox 149.0 crashes repeatedly when moving tabs; assertion error "Unhandled external image format"
  · [post](https://reddit.com/r/firefox/comments/1szcli8/firefox_1490_64bit_crashing_but_i_dont_know_what/)
- urgency 85 · Firefox lagging and freezing with high memory usage after yesterday's update, causing BSOD on Windows 11.
  · [post](https://reddit.com/r/firefox/comments/1symm8w/massive_lagging_and_freezing_since_yesterdays/)

## Platform issues already on file

Platform reports the matcher confirmed against existing bugs:

- **Firefox vertical tabs sidebar gets stuck expanded, blocking page and settings access.** → [BMO#1987303](https://bugzilla.mozilla.org/show_bug.cgi?id=1987303)  _When Windows animations are disabled, sometimes the vertical tabs sidebar gets s_
- **Firefox Sync not syncing bookmarks across Android and Ubuntu devices.** → [BMO#1972182](https://bugzilla.mozilla.org/show_bug.cgi?id=1972182)  _Issue with syncing Bookmarks on Firefox Android_
- **Audio not working on video players in Firefox** → [BMO#1933319](https://bugzilla.mozilla.org/show_bug.cgi?id=1933319)  _not working video and audio playback in video players_
- **Firefox context menus broken on Wayland after monitor power-cycle.** → [BMO#1564076](https://bugzilla.mozilla.org/show_bug.cgi?id=1564076)  _[Wayland] context menus not shown once deactivating external monitors_
- **Firefox on Linux unable to play some videos with "no supported format and mime type" error** → [BMO#1935598](https://bugzilla.mozilla.org/show_bug.cgi?id=1935598)  _testbook.com - Unable to watch videos, firefox is not supported_

## Latest reports

- [2026-05-08](2026/2026-05/2026-05-08.md) — 3 items
- [2026-05-07](2026/2026-05/2026-05-07.md) — 11 items
- [2026-05-06](2026/2026-05/2026-05-06.md) — 18 items
- [2026-05-05](2026/2026-05/2026-05-05.md) — 11 items
- [2026-05-04](2026/2026-05/2026-05-04.md) — 2 items
- [2026-05-03](2026/2026-05/2026-05-03.md) — 5 items
- [2026-05-02](2026/2026-05/2026-05-02.md) — 9 items
- [2026-05-01](2026/2026-05/2026-05-01.md) — 6 items
- [2026-04-30](2026/2026-04/2026-04-30.md) — 10 items
- [2026-04-29](2026/2026-04/2026-04-29.md) — 10 items

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
