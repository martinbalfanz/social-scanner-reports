// Alpine component for the dashboard. Loaded via <script src="dashboard.js">.
// The data payload is inlined into the page via <script type="application/json"
// id="dashboard-data">.

function dashboard() {
  return {
    data: { items: [], timeline: { buckets: [], older: { webcompat: 0, platform: 0 } }, sources: [], domains_top: [], generated_at: "" },
    filters: {
      sources: new Set(),
      category: "all",
      date: "7d",
      domains: new Set(),
      domainSearch: "",
      triage: new Set(["new", "triaged"]),
      match: "all",
    },
    sort: "newest",

    init() {
      const node = document.getElementById("dashboard-data");
      try {
        this.data = JSON.parse(node.textContent);
      } catch (e) {
        console.error("Failed to parse dashboard data:", e);
      }
      this.filters.sources = new Set(this.data.sources.map(s => s.name));
      this.applyHash();
      this.$watch("filters", () => this.rewriteHash(), { deep: true });
      this.$watch("sort", () => this.rewriteHash());
      window.addEventListener("hashchange", () => this.applyHash());
    },

    // -- filter helpers --

    toggleSet(name, value) {
      const s = this.filters[name];
      if (s.has(value)) s.delete(value); else s.add(value);
      this.filters[name] = new Set(s);
    },
    setFilter(name, value) { this.filters[name] = value; },
    resetFilters() {
      this.filters = {
        sources: new Set(this.data.sources.map(s => s.name)),
        category: "all",
        date: "7d",
        domains: new Set(),
        domainSearch: "",
        triage: new Set(["new", "triaged"]),
        match: "all",
      };
      this.sort = "newest";
    },

    // -- URL hash sync --

    rewriteHash() {
      const parts = [];
      const allSources = new Set(this.data.sources.map(s => s.name));
      if (!this._setEq(this.filters.sources, allSources)) {
        parts.push("sources=" + [...this.filters.sources].sort().join(","));
      }
      if (this.filters.category !== "all") parts.push("category=" + this.filters.category);
      if (this.filters.date !== "7d") parts.push("date=" + this.filters.date);
      if (this.filters.domains.size > 0) {
        parts.push("domain=" + [...this.filters.domains].sort().join(","));
      }
      const defTriage = new Set(["new", "triaged"]);
      if (!this._setEq(this.filters.triage, defTriage)) {
        parts.push("triage=" + [...this.filters.triage].sort().join(","));
      }
      if (this.filters.match !== "all") parts.push("match=" + this.filters.match);
      if (this.sort !== "newest") parts.push("sort=" + this.sort);
      const next = parts.length ? "#" + parts.join("&") : "";
      if (next !== location.hash) {
        history.replaceState(null, "", next || location.pathname);
      }
    },
    applyHash() {
      const hash = location.hash.replace(/^#/, "");
      if (!hash) return;
      const params = new URLSearchParams(hash);
      if (params.has("sources")) {
        this.filters.sources = new Set(params.get("sources").split(",").filter(Boolean));
      }
      if (params.has("category")) this.filters.category = params.get("category");
      if (params.has("date")) this.filters.date = params.get("date");
      if (params.has("domain")) {
        this.filters.domains = new Set(params.get("domain").split(",").filter(Boolean));
      }
      if (params.has("triage")) {
        this.filters.triage = new Set(params.get("triage").split(",").filter(Boolean));
      }
      if (params.has("match")) this.filters.match = params.get("match");
      if (params.has("sort")) this.sort = params.get("sort");
    },
    _setEq(a, b) {
      if (a.size !== b.size) return false;
      for (const x of a) if (!b.has(x)) return false;
      return true;
    },

    // -- computed --

    get filteredItems() {
      const cutoff = this._dateCutoff();
      return this.data.items.filter(it => {
        if (!this.filters.sources.has(it.source)) return false;
        if (this.filters.category !== "all" && it.category !== this.filters.category) return false;
        if (this.filters.domains.size > 0) {
          if (!it.domain || !this.filters.domains.has(it.domain)) return false;
        }
        if (!this.filters.triage.has(it.triage)) return false;
        if (this.filters.match === "with") {
          if (!it.bugs.some(b => b.verdict === "match")) return false;
        }
        if (this.filters.match === "none") {
          if (it.bugs.some(b => b.verdict === "match")) return false;
        }
        if (cutoff && new Date(it.posted_at) < cutoff) return false;
        return true;
      });
    },
    get sortedItems() {
      const items = [...this.filteredItems];
      const cmp = {
        newest:  (a, b) => b.posted_at.localeCompare(a.posted_at),
        oldest:  (a, b) => a.posted_at.localeCompare(b.posted_at),
        urgency: (a, b) => (b.urgency || 0) - (a.urgency || 0),
        domain:  (a, b) => (a.domain || "~platform").localeCompare(b.domain || "~platform"),
      };
      items.sort(cmp[this.sort] || cmp.newest);
      return items;
    },
    get topDomainsFiltered() {
      const q = this.filters.domainSearch.toLowerCase().trim();
      if (!q) return this.data.domains_top;
      return this.data.domains_top.filter(d => d.name.toLowerCase().includes(q));
    },

    _dateCutoff() {
      if (this.filters.date === "all") return null;
      const days = this.filters.date === "7d" ? 7 : this.filters.date === "30d" ? 30 : null;
      if (!days) return null;
      const c = new Date();
      c.setDate(c.getDate() - days);
      return c;
    },

    // -- timeline (inline SVG) --

    renderTimelineSvg() {
      const buckets = this.data.timeline.buckets;
      const older = this.data.timeline.older;
      if (!buckets || buckets.length === 0) return "";
      const olderTotal = older.webcompat + older.platform;
      const cellCount = buckets.length + (olderTotal > 0 ? 1 : 0);
      const w = 100;
      const h = 70;
      const padBottom = 12;
      const barW = w / cellCount;
      let max = 1;
      buckets.forEach(b => max = Math.max(max, b.webcompat + b.platform));
      if (olderTotal > max) max = olderTotal;
      const scale = (h - padBottom) / max;
      const cutoff = this._dateCutoff();
      const inWindow = (dateStr) => !cutoff || new Date(dateStr) >= cutoff;
      const cells = [];
      let x = 0;
      if (olderTotal > 0) {
        const wcH = older.webcompat * scale;
        const pH = older.platform * scale;
        cells.push(`<rect class="bar-platform bar-outside" x="${x.toFixed(2)}" y="${(h - padBottom - wcH - pH).toFixed(2)}" width="${(barW * 0.85).toFixed(2)}" height="${pH.toFixed(2)}"><title>older · webcompat ${older.webcompat} · platform ${older.platform}</title></rect>`);
        cells.push(`<rect class="bar-webcompat bar-outside" x="${x.toFixed(2)}" y="${(h - padBottom - wcH).toFixed(2)}" width="${(barW * 0.85).toFixed(2)}" height="${wcH.toFixed(2)}"></rect>`);
        x += barW;
      }
      buckets.forEach(b => {
        const wcH = b.webcompat * scale;
        const pH = b.platform * scale;
        const cls = inWindow(b.date) ? "" : " bar-outside";
        cells.push(`<rect class="bar-platform${cls}" x="${x.toFixed(2)}" y="${(h - padBottom - wcH - pH).toFixed(2)}" width="${(barW * 0.85).toFixed(2)}" height="${pH.toFixed(2)}"><title>${b.date} · webcompat ${b.webcompat} · platform ${b.platform}</title></rect>`);
        cells.push(`<rect class="bar-webcompat${cls}" x="${x.toFixed(2)}" y="${(h - padBottom - wcH).toFixed(2)}" width="${(barW * 0.85).toFixed(2)}" height="${wcH.toFixed(2)}"></rect>`);
        x += barW;
      });
      return `<svg viewBox="0 0 ${w} ${h - padBottom}" preserveAspectRatio="none">${cells.join("")}</svg>`;
    },

    get timelineAxisStart() {
      const older = this.data.timeline.older;
      if ((older.webcompat || 0) + (older.platform || 0) > 0) return "older";
      const b = this.data.timeline.buckets;
      return b.length ? b[0].date : "";
    },
    get timelineAxisEnd() {
      const b = this.data.timeline.buckets;
      return b.length ? b[b.length - 1].date : "";
    },

    // -- formatting --

    relativeTime(iso) {
      if (!iso) return "";
      const then = new Date(iso);
      const diffMs = Date.now() - then.getTime();
      const min = Math.round(diffMs / 60000);
      if (min < 1) return "just now";
      if (min < 60) return `${min}m ago`;
      const hrs = Math.round(min / 60);
      if (hrs < 24) return `${hrs}h ago`;
      const days = Math.round(hrs / 24);
      if (days < 30) return `${days}d ago`;
      const mo = Math.round(days / 30);
      return `${mo}mo ago`;
    },
  };
}
