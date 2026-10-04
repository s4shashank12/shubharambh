/* Shop page: search + filters + sort, synced to the URL */
SR.onReady(function () {
  var S = {
    q: SR.param("q") || "",
    type: SR.param("type") || "all",
    cats: (SR.param("cat") || "").split(",").filter(Boolean),
    states: (SR.param("state") || "").split(",").filter(Boolean),
    min: SR.param("min") || "",
    max: SR.param("max") || "",
    live: SR.param("live") === "1",
    gi: SR.param("gi") === "1",
    sale: SR.param("sale") === "1",
    sort: SR.param("sort") || "relevance"
  };
  // a category implies its type
  if (S.cats.length === 1 && SR.catByKey[S.cats[0]]) S.type = SR.catByKey[S.cats[0]].type;

  var $q = SR.$("#q"), $sort = SR.$("#sort"), $min = SR.$("#min-price"), $max = SR.$("#max-price");
  $q.value = S.q; $sort.value = S.sort; $min.value = S.min; $max.value = S.max;
  SR.$("#f-live").checked = S.live; SR.$("#f-gi").checked = S.gi; SR.$("#f-sale").checked = S.sale;

  function stateOf(p) { return p.craft ? p.craft.state.split("/")[0].trim() : ""; }
  function minPrice(p) { return Math.min.apply(null, p.variants.map(function (v) { return v.price; })); }
  function maxOff(p) { return Math.max.apply(null, p.variants.map(function (v) { return SR.off(v.price, v.mrp); })); }

  function base() {
    return SR.products.filter(function (p) { return S.type === "all" || p.type === S.type; });
  }

  function apply() {
    var list = base();
    if (S.cats.length) list = list.filter(function (p) { return S.cats.indexOf(p.cat) > -1; });
    if (S.states.length) list = list.filter(function (p) { return S.states.indexOf(stateOf(p)) > -1; });
    var mn = parseFloat(S.min), mx = parseFloat(S.max);
    if (!isNaN(mn)) list = list.filter(function (p) { return p.variants.some(function (v) { return v.price >= mn; }); });
    if (!isNaN(mx)) list = list.filter(function (p) { return minPrice(p) <= mx; });
    if (S.live) list = list.filter(function (p) { return p.nisa && p.nisa.status === "live"; });
    if (S.gi) list = list.filter(function (p) { return p.craft && p.craft.gi; });
    if (S.sale) list = list.filter(function (p) { return maxOff(p) > 0; });

    var res = SR.search(S.q, list);
    var sorters = {
      "price-asc": function (a, b) { return minPrice(a.p) - minPrice(b.p); },
      "price-desc": function (a, b) { return minPrice(b.p) - minPrice(a.p); },
      discount: function (a, b) { return maxOff(b.p) - maxOff(a.p); },
      name: function (a, b) { return a.p.name.localeCompare(b.p.name); }
    };
    if (sorters[S.sort]) res.sort(sorters[S.sort]);
    else if (!S.q) res.sort(function (a, b) { return (b.p.featured ? 1 : 0) - (a.p.featured ? 1 : 0); });
    return res;
  }

  function renderFacets() {
    SR.$$("#type-seg button").forEach(function (b) { b.classList.toggle("active", b.dataset.type === S.type); });
    var cats = SR.categories.filter(function (c) { return S.type === "all" || c.type === S.type; });
    var pool = base();
    SR.$("#cat-list").innerHTML = cats.map(function (c) {
      var n = pool.filter(function (p) { return p.cat === c.key; }).length;
      return '<li><label><input type="checkbox" value="' + c.key + '"' + (S.cats.indexOf(c.key) > -1 ? " checked" : "") + "> " + SR.esc(c.name) + '<span class="count">' + n + "</span></label></li>";
    }).join("");
    var states = {};
    SR.products.forEach(function (p) { var s = stateOf(p); if (s) states[s] = (states[s] || 0) + 1; });
    var showStates = S.type !== "organic";
    SR.$("#state-wrap").classList.toggle("hidden", !showStates);
    SR.$("#state-list").innerHTML = Object.keys(states).sort().map(function (s) {
      return '<li><label><input type="checkbox" value="' + SR.esc(s) + '"' + (S.states.indexOf(s) > -1 ? " checked" : "") + "> " + SR.esc(s) + '<span class="count">' + states[s] + "</span></label></li>";
    }).join("");
  }

  function renderChips() {
    var chips = [];
    if (S.q) chips.push(["q", "“" + S.q + "”"]);
    S.cats.forEach(function (c) { chips.push(["cat:" + c, (SR.catByKey[c] || {}).name || c]); });
    S.states.forEach(function (s) { chips.push(["state:" + s, s]); });
    if (S.min) chips.push(["min", "Min " + SR.fmt(S.min)]);
    if (S.max) chips.push(["max", "Max " + SR.fmt(S.max)]);
    if (S.live) chips.push(["live", "ICAR-NISA live"]);
    if (S.gi) chips.push(["gi", "GI craft"]);
    if (S.sale) chips.push(["sale", "On offer"]);
    SR.$("#active-filters").innerHTML = chips.map(function (c) {
      return '<button class="chip" type="button" data-rm="' + SR.esc(c[0]) + '">' + SR.esc(c[1]) + " ✕</button>";
    }).join("");
  }

  function syncURL() {
    var u = new URLSearchParams();
    if (S.q) u.set("q", S.q);
    if (S.type !== "all") u.set("type", S.type);
    if (S.cats.length) u.set("cat", S.cats.join(","));
    if (S.states.length) u.set("state", S.states.join(","));
    if (S.min) u.set("min", S.min);
    if (S.max) u.set("max", S.max);
    if (S.live) u.set("live", "1");
    if (S.gi) u.set("gi", "1");
    if (S.sale) u.set("sale", "1");
    if (S.sort !== "relevance") u.set("sort", S.sort);
    var qs = u.toString();
    try { history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "")); } catch (e) { /* file:// in some browsers */ }
  }

  function titles() {
    var t = "All products", sub = "Organic products from Indian farms and forests, tested with ICAR-NISA, and handicrafts from Indian MSMEs.", crumb = "Shop";
    if (S.cats.length === 1 && SR.catByKey[S.cats[0]]) {
      var c = SR.catByKey[S.cats[0]];
      t = c.name + ' <span class="deva" style="color:var(--saffron-dark);font-size:.7em">' + SR.esc(c.hi) + "</span>"; sub = c.desc; crumb = c.type === "organic" ? "Organic" : "Handicrafts";
    } else if (S.type === "organic") { t = "Organic range"; sub = "Kapoor, dhoop and sacred resins, puja essentials, home shuddhi, 17 single-flower honeys, bee products, edible gums, salts, hing and A2 ghee. Each one has an ICAR-NISA certification placeholder."; crumb = "Organic"; }
    else if (S.type === "handicraft") { t = "Indian handicrafts"; sub = "Minakari, marble, wooden, glass, mitti, iron, chini mitti and bamboo, handmade by MSME artisans across India."; crumb = "Handicrafts"; }
    SR.$("#shop-title").innerHTML = t;
    SR.$("#shop-sub").textContent = sub;
    SR.$("#crumb-type").textContent = crumb;
    document.title = (S.q ? "“" + S.q + "” · " : "") + crumb + " | Shubharambh";
  }

  function render() {
    renderFacets(); renderChips(); titles(); syncURL();
    var res = apply();
    SR.$("#grid").innerHTML = res.map(function (r) { return SR.card(r.p, S.q); }).join("");
    SR.$("#result-meta").textContent = res.length + (res.length === 1 ? " product" : " products") + (S.q ? " for “" + S.q + "”" : "");
    SR.$("#empty").classList.toggle("hidden", res.length > 0);
    if (!res.length) {
      var sugg = ["kapoor", "honey", "guggul", "roli", "bangles", "marble", "bamboo", "gift"];
      SR.$("#empty-sugg").innerHTML = sugg.map(function (s) { return '<button class="chip" type="button" data-sugg="' + s + '">' + s + "</button>"; }).join("");
    }
  }

  var tmr;
  $q.addEventListener("input", function () { clearTimeout(tmr); tmr = setTimeout(function () { S.q = $q.value.trim(); if (S.q && S.sort === "relevance") $sort.value = "relevance"; render(); }, 160); });
  $sort.addEventListener("change", function () { S.sort = $sort.value; render(); });
  $min.addEventListener("change", function () { S.min = $min.value; render(); });
  $max.addEventListener("change", function () { S.max = $max.value; render(); });
  SR.$("#f-live").addEventListener("change", function (e) { S.live = e.target.checked; render(); });
  SR.$("#f-gi").addEventListener("change", function (e) { S.gi = e.target.checked; render(); });
  SR.$("#f-sale").addEventListener("change", function (e) { S.sale = e.target.checked; render(); });
  SR.$("#type-seg").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    S.type = b.dataset.type;
    S.cats = S.cats.filter(function (c) { return S.type === "all" || (SR.catByKey[c] && SR.catByKey[c].type === S.type); });
    if (S.type === "organic") S.states = [];
    render();
  });
  SR.$("#cat-list").addEventListener("change", function (e) {
    var v = e.target.value;
    if (e.target.checked) S.cats.push(v); else S.cats = S.cats.filter(function (c) { return c !== v; });
    render();
  });
  SR.$("#state-list").addEventListener("change", function (e) {
    var v = e.target.value;
    if (e.target.checked) S.states.push(v); else S.states = S.states.filter(function (c) { return c !== v; });
    render();
  });
  SR.$("#price-chips").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    S.min = b.dataset.min || ""; S.max = b.dataset.max || "";
    $min.value = S.min; $max.value = S.max; render();
  });
  SR.$("#active-filters").addEventListener("click", function (e) {
    var b = e.target.closest("[data-rm]"); if (!b) return;
    var k = b.dataset.rm;
    if (k === "q") { S.q = ""; $q.value = ""; }
    else if (k.indexOf("cat:") === 0) S.cats = S.cats.filter(function (c) { return c !== k.slice(4); });
    else if (k.indexOf("state:") === 0) S.states = S.states.filter(function (c) { return c !== k.slice(6); });
    else if (k === "min") { S.min = ""; $min.value = ""; }
    else if (k === "max") { S.max = ""; $max.value = ""; }
    else { S[k] = false; SR.$("#f-" + k).checked = false; }
    render();
  });
  SR.$("#empty").addEventListener("click", function (e) {
    var b = e.target.closest("[data-sugg]"); if (!b) return;
    S = { q: b.dataset.sugg, type: "all", cats: [], states: [], min: "", max: "", live: false, gi: false, sale: false, sort: "relevance" };
    $q.value = S.q; $min.value = ""; $max.value = ""; render();
  });
  SR.$("#clear-all").addEventListener("click", function () {
    S = { q: "", type: "all", cats: [], states: [], min: "", max: "", live: false, gi: false, sale: false, sort: "relevance" };
    $q.value = ""; $min.value = ""; $max.value = ""; $sort.value = "relevance";
    ["live", "gi", "sale"].forEach(function (k) { SR.$("#f-" + k).checked = false; });
    render();
  });
  var F = SR.$("#filters");
  SR.$("#open-filters").addEventListener("click", function () { F.classList.add("open"); });
  SR.$("#close-filters").addEventListener("click", function () { F.classList.remove("open"); });

  render();
});
