/* =========================================================
   Shubharambh — core app script (no build step, works from file://)
   Cart + orders live in localStorage. This is a SAMPLE store:
   no real payments, no real orders.
   Language: English / Hindi (SR.lang), chosen in the header,
   remembered in localStorage, overridable with ?lang=hi|en.
   ========================================================= */
(function () {
  "use strict";

  var SR = (window.SR = window.SR || {});

  /* ---------------- Storage (safe) ---------------- */
  var mem = {};
  function load(k, d) {
    try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return mem[k] || d; }
  }
  function save(k, v) {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { mem[k] = v; }
  }
  SR.load = load;
  SR.save = save;

  SR.param = function (k) {
    try { return new URLSearchParams(location.search).get(k); } catch (e) { return null; }
  };

  /* ---------------- Language ---------------- */
  var qLang = SR.param("lang");
  if (qLang === "hi" || qLang === "en") save("sr_lang", qLang);
  SR.lang = load("sr_lang", "en") === "hi" ? "hi" : "en";
  SR.isHi = SR.lang === "hi";
  document.documentElement.lang = SR.lang;
  document.documentElement.classList.toggle("lang-hi", SR.isHi);

  var UI = window.SR_UI || {};
  SR._missing = {};
  /* t("key", {name: "x"}) → localized UI string with {placeholders} filled */
  SR.t = function (key, vars) {
    var e = UI[key], s;
    if (!e) { SR._missing[key] = 1; s = key; }
    else s = SR.isHi && e[1] != null ? e[1] : e[0];
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return s;
  };
  /* L(en, hi) → pick inline pair */
  SR.L = function (en, hi) { return SR.isHi && hi != null ? hi : en; };
  SR.setLang = function (lang) {
    save("sr_lang", lang);
    try { sessionStorage.setItem("sr_scroll", JSON.stringify({ p: location.pathname, y: window.scrollY })); } catch (e) { /* ignore */ }
    var u = location.href.replace(/([?&])lang=(hi|en)(&|$)/, function (m, a, b, c) { return c ? a : ""; });
    if (u === location.href) location.reload(); else location.href = u;
  };
  /* translate unit words inside variant labels (e.g. "50 g" → "50 ग्राम") */
  SR.unitsHi = function (s) {
    if (!SR.isHi) return s;
    var map = window.SR_UNITS_HI || [];
    map.forEach(function (m) { s = s.replace(m[0], m[1]); });
    return s;
  };

  /* ---------------- Config ---------------- */
  SR.cfg = {
    freeShipAt: 999,
    shipFee: 79,
    codFee: 40,
    coupons: {
      SHUBH10: { type: "pct", value: 10, min: 0 },
      PRAKRITI15: { type: "pct", value: 15, min: 1499 },
      NEWBEGIN: { type: "flat", value: 100, min: 799 }
    }
  };
  SR.couponLabel = function (code) {
    return SR.t("coupon." + code);
  };

  /* ---------------- Categories ---------------- */
  SR.categories = [
    { key: "kapoor", type: "organic", name: "Kapoor & Camphor", hi: "कपूर", desc: "Bhimseni and tikia kapoor, and kapur-gugal blends, all free of naphthalene." },
    { key: "dhoop", type: "organic", name: "Dhoop & Sacred Resins", hi: "धूप एवं राल", desc: "Guggul, sambrani, loban, sal-resin dhuwan, cones and bambooless sticks" },
    { key: "puja", type: "organic", name: "Puja Essentials", hi: "पूजन सामग्री", desc: "Haldi-ashtagandh and roli made from turmeric with lime, without synthetic dye" },
    { key: "shuddhi", type: "organic", name: "Home Shuddhi", hi: "गृह शुद्धि", desc: "Flavoured Bhimseni fresheners and gaumutra vaporizers to replace naphthalene and chemical sprays" },
    { key: "honey", type: "organic", name: "Monofloral Honey", hi: "एकपुष्पी शहद", desc: "17 single-flower honeys, each identified by pollen analysis" },
    { key: "bee", type: "organic", name: "Bee Products", hi: "मधुमक्खी उत्पाद", desc: "Bee pollen and pure beeswax, by-products that add to beekeepers' income" },
    { key: "gond", type: "organic", name: "Edible Gums", hi: "खाने योग्य गोंद", desc: "Gond katira and dhawda gond, the cooling and strengthening gums of Indian kitchens" },
    { key: "rasoi", type: "organic", name: "Rasoi: Salt, Hing & Ghee", hi: "रसोई: नमक, हींग और घी", desc: "Sendha namak, kala namak, pure hing and A2 bilona ghee" },
    { key: "minakari", type: "handicraft", name: "Minakari", hi: "मीनाकारी", desc: "Enamel and stone work on metal: samai hathi, boxes and thalis" },
    { key: "marble", type: "handicraft", name: "Marble", hi: "संगमरमर", desc: "Makrana marble and Agra pietra-dura inlay" },
    { key: "wooden", type: "handicraft", name: "Wooden", hi: "लकड़ी", desc: "Channapatna toys, Saharanpur carving and sheesham mandirs" },
    { key: "glass", type: "handicraft", name: "Glass", hi: "काँच", desc: "Firozabad bangles, glass diyas, mosaic lamps and reverse glass painting" },
    { key: "mitti", type: "handicraft", name: "Mitti (Terracotta)", hi: "मिट्टी (टेराकोटा)", desc: "Diyas, kulhads, matkas and Bankura horses" },
    { key: "iron", type: "handicraft", name: "Iron", hi: "लोहा", desc: "Bastar wrought iron, plus cast-iron kadhai and tawa" },
    { key: "chini", type: "handicraft", name: "Chini Mitti (Ceramic)", hi: "चीनी मिट्टी (सिरेमिक)", desc: "Khurja achaar barni, Jaipur blue pottery and glazed cups" },
    { key: "bamboo", type: "handicraft", name: "Bamboo", hi: "बाँस", desc: "Bamboo baskets, lamps, pankhas and bottles from the Northeast" }
  ];
  var CAT_HI = window.SR_CAT_DESC_HI || {};
  SR.catByKey = {};
  SR.categories.forEach(function (c) {
    c.name_en = c.name;
    if (SR.isHi) { c.name = c.hi; c.alt = c.name_en; if (CAT_HI[c.key]) c.desc = CAT_HI[c.key]; }
    else c.alt = c.hi;
    SR.catByKey[c.key] = c;
  });

  /* ---------------- Products (+ Hindi overlay) ---------------- */
  SR.products = (window.SR_PRODUCTS || []).slice();
  var HIP = window.SR_HI_PRODUCTS || {};
  function overlay(p, o) {
    Object.keys(o).forEach(function (k) {
      var v = o[k];
      if (k === "name") { p.name_hi = v; return; }
      if (k === "variants") { v.forEach(function (lab, i) { if (p.variants[i] && lab) p.variants[i].label = lab; }); }
      else if ((k === "nisa" || k === "craft" || k === "honey") && p[k] && v && typeof v === "object" && !Array.isArray(v)) {
        p[k] = Object.assign({}, p[k], v);
      } else p[k] = v;
    });
  }
  SR.byId = {};
  SR.products.forEach(function (p) {
    p.name_en = p.name;
    p.name_hi = p.hi || p.name;
    p.short_en = p.short;
    if (p.craft) p.craft.state_en = p.craft.state;
    p.variants.forEach(function (v) { v.label_en = v.label; });
    if (SR.isHi) {
      var o = HIP[p.id] || p.hiData;
      if (o) overlay(p, o);
      p.variants.forEach(function (v) { if (v.label === v.label_en) v.label = SR.unitsHi(v.label); });
      p.name = p.name_hi;
      p.alt = p.name_en;
    } else p.alt = p.hi;
    SR.byId[p.id] = p;
  });

  /* ---------------- Helpers ---------------- */
  SR.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  SR.fmt = function (n) {
    return "₹" + Math.round(n).toLocaleString("en-IN");
  };
  SR.date = function (iso) {
    return new Date(iso).toLocaleDateString(SR.isHi ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" });
  };
  SR.off = function (price, mrp) {
    return mrp && mrp > price ? Math.round((1 - price / mrp) * 100) : 0;
  };
  SR.$ = function (sel, root) { return (root || document).querySelector(sel); };
  SR.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* images: product.own (shop photos) first, then curated library images */
  SR.imgs = function (p) {
    var out = [];
    (p.own || []).forEach(function (src) { out.push({ src: src, own: true }); });
    var lib = window.SR_IMAGES || {};
    (lib[p.id] || []).forEach(function (im) { out.push(im); });
    if (!out.length) out.push({ src: "assets/img/brand/placeholder.svg" });
    return out;
  };
  SR.cover = function (p) { return SR.imgs(p)[0].src; };
  SR.catImg = function (key) {
    var lib = window.SR_IMAGES || {};
    var arr = lib["cat:" + key] || [];
    return arr.length ? arr[0].src : "assets/img/brand/placeholder.svg";
  };

  /* ---------------- Cart ---------------- */
  var CART = "sr_cart_v1";
  SR.cart = {
    items: function () {
      return load(CART, []).filter(function (it) { return SR.byId[it.id]; });
    },
    set: function (items) { save(CART, items); SR.cart.emit(); },
    add: function (id, v, qty) {
      var p = SR.byId[id];
      if (!p) return;
      v = v || 0; qty = Math.max(1, qty || 1);
      var items = SR.cart.items();
      var ex = items.filter(function (i) { return i.id === id && i.v === v; })[0];
      if (ex) ex.qty = Math.min(20, ex.qty + qty); else items.push({ id: id, v: v, qty: Math.min(20, qty) });
      SR.cart.set(items);
      var variant = p.variants[v];
      SR.toast(SR.t("toast.added", { name: "<b>" + SR.esc(p.name) + "</b>" + (p.variants.length > 1 ? " (" + SR.esc(variant.label) + ")" : "") }), "cart.html", SR.t("toast.viewCart"));
    },
    update: function (id, v, qty) {
      var items = SR.cart.items();
      items.forEach(function (i) { if (i.id === id && i.v === v) i.qty = Math.max(1, Math.min(20, qty)); });
      SR.cart.set(items);
    },
    remove: function (id, v) {
      SR.cart.set(SR.cart.items().filter(function (i) { return !(i.id === id && i.v === v); }));
    },
    clear: function () { SR.cart.set([]); },
    count: function () { return SR.cart.items().reduce(function (s, i) { return s + i.qty; }, 0); },
    lines: function () {
      return SR.cart.items().map(function (i) {
        var p = SR.byId[i.id], vr = p.variants[i.v] || p.variants[0];
        return { id: i.id, v: i.v, qty: i.qty, p: p, variant: vr, price: vr.price, mrp: vr.mrp || vr.price, total: vr.price * i.qty };
      });
    },
    coupon: function (c) {
      if (c === undefined) return load("sr_coupon", "");
      save("sr_coupon", c || ""); SR.cart.emit();
    },
    totals: function (opts) {
      opts = opts || {};
      var lines = SR.cart.lines();
      var sub = lines.reduce(function (s, l) { return s + l.total; }, 0);
      var mrp = lines.reduce(function (s, l) { return s + l.mrp * l.qty; }, 0);
      var code = ((opts.coupon !== undefined ? opts.coupon : SR.cart.coupon()) || "").toUpperCase();
      var cp = SR.cfg.coupons[code];
      var disc = 0, couponMsg = "";
      if (cp) {
        if (cp.min && sub < cp.min) couponMsg = SR.t("coupon.addMore", { amt: SR.fmt(cp.min - sub), code: code });
        else disc = cp.type === "pct" ? Math.round(sub * cp.value / 100) : cp.value;
      }
      var afterDisc = sub - disc;
      var ship = lines.length && afterDisc < SR.cfg.freeShipAt ? SR.cfg.shipFee : 0;
      var cod = opts.payment === "cod" && lines.length ? SR.cfg.codFee : 0;
      return {
        lines: lines, sub: sub, mrp: mrp, savings: mrp - sub, disc: disc, code: cp && !couponMsg ? code : "",
        couponMsg: couponMsg, ship: ship, cod: cod, total: afterDisc + ship + cod
      };
    },
    emit: function () {
      var n = SR.cart.count();
      SR.$$(".cart-count").forEach(function (el) { el.textContent = n ? n : ""; el.setAttribute("data-n", n); });
      document.dispatchEvent(new CustomEvent("sr:cart"));
    }
  };

  /* ---------------- Search (English + Hindi, typo tolerant) ---------------- */
  function norm(s) {
    return String(s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9ऀ-ॿ\s]/g, " ");
  }
  function lev1(a, b) {
    // true when edit distance <= 1
    if (Math.abs(a.length - b.length) > 1) return false;
    var i = 0, j = 0, e = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++e > 1) return false;
      if (a.length > b.length) i++; else if (b.length > a.length) j++; else { i++; j++; }
    }
    return e + (a.length - i) + (b.length - j) <= 1;
  }
  /* Hindi words searchable even in English mode (and vice versa) */
  function hiExtra(p) {
    var o = HIP[p.id] || p.hiData;
    if (!o) return "";
    return [o.short || "", o.craft ? (o.craft.state || "") + " " + (o.craft.cluster || "") : "", (SR.catByKey[p.cat] || {}).hi || ""].join(" ");
  }
  function haystack(p) {
    if (p._hay) return p._hay;
    var c = SR.catByKey[p.cat] || {};
    p._hay = {
      name: norm(p.name_en + " " + p.name_hi),
      aka: norm((p.aka || []).join(" ")),
      cat: norm((c.name_en || "") + " " + (c.hi || "") + " " + p.type + (p.type === "handicraft" ? " handicrafts craft gift हस्तशिल्प उपहार" : " organic natural जैविक प्राकृतिक")),
      rest: norm([p.short_en, p.short !== p.short_en ? p.short : "", hiExtra(p), p.region, (p.tags || []).join(" "), p.craft ? p.craft.state_en + " " + p.craft.state + " " + p.craft.cluster + " " + p.craft.material : "", p.sku].join(" "))
    };
    p._hay.words = (p._hay.name + " " + p._hay.aka + " " + p._hay.cat + " " + p._hay.rest).split(/\s+/).filter(Boolean);
    return p._hay;
  }
  SR.search = function (q, list) {
    list = list || SR.products;
    var terms = norm(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return list.map(function (p) { return { p: p, score: 0 }; });
    var out = [];
    list.forEach(function (p) {
      var h = haystack(p), score = 0, all = true;
      terms.forEach(function (t) {
        var s = 0;
        if (h.name.indexOf(t) > -1) s += (new RegExp("(^|\\s)" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(h.name) ? 12 : 8);
        if (h.aka.indexOf(t) > -1) s += 7;
        if (h.cat.indexOf(t) > -1) s += 4;
        if (h.rest.indexOf(t) > -1) s += 2;
        if (!s && t.length >= 4) {
          var fz = function (w) { return lev1(t, w) || (t.length >= 5 && w.indexOf(t.slice(0, -1)) === 0); };
          if (h.name.split(/\s+/).some(fz)) s += 6;
          else if (h.aka.split(/\s+/).some(fz)) s += 5;
          else if (h.cat.split(/\s+/).some(fz)) s += 3;
          else if (h.words.some(fz)) s += 1;
        }
        if (!s) all = false;
        score += s;
      });
      if (all && score) out.push({ p: p, score: score + (p.featured ? 0.5 : 0) });
    });
    return out.sort(function (a, b) { return b.score - a.score; });
  };
  SR.highlight = function (text, q) {
    var t = SR.esc(text);
    var terms = norm(q).split(/\s+/).filter(function (x) { return x.length > 1; });
    terms.forEach(function (w) {
      t = t.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
    });
    return t;
  };

  /* ---------------- Icons ---------------- */
  function sealSVG(top, bottom, inner) {
    return '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor"><circle cx="50" cy="50" r="46" stroke-width="3"/><circle cx="50" cy="50" r="38" stroke-width="1.5" stroke-dasharray="3 3"/>' + inner +
      '<text x="50" y="22" text-anchor="middle" font-size="9" font-weight="700" fill="currentColor" stroke="none" font-family="Mukta, sans-serif">' + top + "</text>" +
      '<text x="50" y="86" text-anchor="middle" font-size="8" font-weight="700" fill="currentColor" stroke="none" font-family="Mukta, sans-serif">' + bottom + "</text></svg>";
  }
  var I = (SR.icons = {
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 13H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15"/><path d="M5 19 13 11"/></svg>',
    flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7.5 15h9"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4.5 6v6c0 4.5 3.2 8 7.5 9 4.3-1 7.5-4.5 7.5-9V6L12 3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>',
    hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4.5a1.5 1.5 0 0 1 3 0V12M14 11V6a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7h-.5a6 6 0 0 1-4.6-2.2L3 16.5a1.6 1.6 0 0 1 2.4-2.1L8 16"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8S10.5 3 8 4s0 4 4 4ZM12 8s1.5-5 4-4 0 4-4 4Z"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4M12 17h.01"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    left: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m15 5-7 7 7 7"/></svg>',
    right: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m9 5 7 7-7 7"/></svg>',
    seal: sealSVG("ICAR-NISA", SR.t("seal.tested"), '<path d="M33 51l11 11 23-25" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'),
    sealProgress: sealSVG("ICAR-NISA", SR.t("seal.progress"), '<circle cx="50" cy="52" r="16" stroke-width="4"/><path d="M50 43v10l6 4" stroke-width="4" stroke-linecap="round"/>'),
    sealCraft: sealSVG(SR.t("seal.handmade"), SR.t("seal.msme"), '<path d="M35 60c0-10 6-18 15-18s15 8 15 18M42 42l8-10 8 10" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>')
  });

  SR.logo = function () {
    return '<svg viewBox="0 0 64 64" aria-hidden="true"><defs><radialGradient id="lg" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="#ffd54a"/><stop offset="1" stop-color="#e2711d"/></radialGradient></defs>' +
      '<g fill="#e2711d">' + [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(function (a) {
        return '<path transform="rotate(' + a + ' 32 32)" d="M32 1.5 35 10h-6z"/>';
      }).join("") + "</g>" +
      '<circle cx="32" cy="32" r="21" fill="url(#lg)"/><circle cx="32" cy="32" r="21" fill="none" stroke="#7a1f1f" stroke-width="1.5"/>' +
      '<text x="32" y="43" text-anchor="middle" font-size="28" font-family="Tiro Devanagari Hindi, serif" fill="#7a1f1f">ॐ</text></svg>';
  };

  /* QR-like placeholder (deterministic from a string — decorative only) */
  SR.fakeQR = function (seed) {
    var n = 21, cells = "", h = 0;
    for (var i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    function rnd() { h ^= h << 13; h >>>= 0; h ^= h >> 17; h ^= h << 5; h >>>= 0; return h / 4294967296; }
    function finder(x, y) {
      return '<rect x="' + x + '" y="' + y + '" width="7" height="7" fill="#2b1d14"/><rect x="' + (x + 1) + '" y="' + (y + 1) + '" width="5" height="5" fill="#fff"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="3" height="3" fill="#2b1d14"/>';
    }
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      var inF = (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12);
      if (!inF && rnd() > 0.52) cells += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>';
    }
    return '<svg viewBox="0 0 21 21" shape-rendering="crispEdges"><rect width="21" height="21" fill="#fff"/><g fill="#2b1d14">' + cells + "</g>" + finder(0, 0) + finder(14, 0) + finder(0, 14) + "</svg>";
  };

  /* ---------------- Language switch ---------------- */
  function langSwitchHTML(cls) {
    return '<div class="lang-switch ' + (cls || "") + '" role="group" aria-label="' + SR.t("lang.label") + '">' +
      '<button type="button" data-lang="en" lang="en" aria-pressed="' + !SR.isHi + '" title="English">EN</button>' +
      '<button type="button" data-lang="hi" lang="hi" aria-pressed="' + SR.isHi + '" title="हिन्दी">हिं</button></div>';
  }

  /* ---------------- Header / footer ---------------- */
  var NAV = [
    ["index.html", "nav.home", "home"],
    ["products.html?type=organic", "nav.organic", "organic"],
    ["products.html?type=handicraft", "nav.handicrafts", "handicraft"],
    ["purity.html", "nav.purity", "purity"],
    ["crafts.html", "nav.crafts", "crafts"],
    ["about.html", "nav.about", "about"]
  ];
  function headerHTML(active) {
    var nav = NAV.map(function (n) {
      return '<a href="' + n[0] + '"' + (n[2] === active ? ' class="active" aria-current="page"' : "") + ">" + SR.t(n[1]) + "</a>";
    }).join("");
    var search = '<form class="header-search" role="search" action="products.html" autocomplete="off">' +
      '<label class="sr-only" for="hs-q">' + SR.t("search.label") + "</label>" +
      '<input id="hs-q" name="q" type="search" placeholder="' + SR.t("search.ph") + '" aria-autocomplete="list">' +
      '<button type="submit" aria-label="' + SR.t("search.btn") + '">' + I.search.replace("<svg", '<svg width="18" height="18"') + "</button>" +
      '<div class="suggest hidden" role="listbox"></div></form>';
    return '<div class="sample-strip" data-noi18n>' + SR.t("strip") + "</div>" +
      '<header class="site-header" data-noi18n><div class="wrap header-row">' +
      '<a class="brand" href="index.html" aria-label="' + SR.t("brand.home") + '">' + SR.logo() +
      '<span class="brand-text"><span class="hi">शुभारंभ</span><span class="en">SHUBHARAMBH</span></span></a>' +
      '<nav class="main-nav" aria-label="Main">' + nav + "</nav>" + search +
      '<div class="header-icons">' + langSwitchHTML() +
      '<a class="icon-btn orders-icon" href="orders.html" aria-label="' + SR.t("nav.orders") + '" title="' + SR.t("nav.orders") + '">' + I.bag + "</a>" +
      '<a class="icon-btn" href="cart.html" aria-label="' + SR.t("nav.cart") + '" title="' + SR.t("nav.cart") + '">' + I.cart + '<span class="cart-count"></span></a>' +
      '<button class="icon-btn menu-toggle" aria-label="' + SR.t("nav.menu") + '" aria-expanded="false">' + I.menu + "</button>" +
      "</div></div>" +
      '<nav class="mobile-nav" aria-label="Mobile">' + search.replace(/hs-q/g, "hs-q2") + nav + '<a href="cart.html">' + SR.t("nav.cart") + '</a><a href="orders.html">' + SR.t("nav.orders") + "</a>" +
      '<div class="mobile-lang"><span>' + SR.t("lang.label") + "</span>" + langSwitchHTML() + "</div></nav>" +
      "</header>";
  }
  function footerHTML() {
    var org = SR.categories.filter(function (c) { return c.type === "organic"; });
    var hc = SR.categories.filter(function (c) { return c.type === "handicraft"; });
    function li(c) { return '<li><a href="products.html?cat=' + c.key + '">' + SR.esc(c.name) + "</a></li>"; }
    var more = [["about.html", "foot.mission"], ["purity.html", "foot.howTested"], ["purity.html#home-tests", "foot.homeChecks"], ["crafts.html", "foot.craftMap"], ["products.html", "foot.shopAll"], ["orders.html", "nav.orders"], ["credits.html", "foot.credits"]];
    return '<footer class="site-footer" data-noi18n><div class="wrap"><div class="foot-grid">' +
      '<div class="foot-brand"><a class="brand" href="index.html">' + SR.logo() + '<span class="brand-text"><span class="hi">शुभारंभ</span><span class="en">SHUBHARAMBH</span></span></a>' +
      '<p style="margin-top:14px">' + SR.t("foot.about") + "</p>" +
      '<p class="small">' + SR.t("foot.partner") + "</p>" +
      '<div class="foot-lang"><span>' + SR.t("lang.label") + "</span>" + langSwitchHTML("dark") + "</div></div>" +
      "<div><h4>" + SR.t("nav.organic") + "</h4><ul>" + org.map(li).join("") + "</ul></div>" +
      "<div><h4>" + SR.t("nav.handicrafts") + "</h4><ul>" + hc.map(li).join("") + "</ul></div>" +
      "<div><h4>" + SR.t("foot.knowMore") + "</h4><ul>" + more.map(function (m) { return '<li><a href="' + m[0] + '">' + SR.t(m[1]) + "</a></li>"; }).join("") + "</ul></div>" +
      "</div>" +
      '<p class="disclaimer">' + SR.t("foot.disclaimer") + "</p>" +
      '<div class="foot-bottom"><span>' + SR.t("foot.copy") + "</span><span>" + SR.t("foot.madeIn") + "</span></div>" +
      "</div></footer>" +
      '<div class="toast" role="status" aria-live="polite" data-noi18n></div>';
  }

  function bindSearch(form) {
    var input = form.querySelector("input"), box = form.querySelector(".suggest"), hl = -1;
    function close() { box.classList.add("hidden"); hl = -1; }
    function render() {
      var q = input.value.trim();
      if (q.length < 2) return close();
      var res = SR.search(q).slice(0, 6);
      if (!res.length) { box.innerHTML = '<a href="products.html?q=' + encodeURIComponent(q) + '" class="s-all">' + SR.t("search.noMatch", { q: SR.esc(q) }) + "</a>"; box.classList.remove("hidden"); return; }
      box.innerHTML = res.map(function (r) {
        var p = r.p, c = SR.catByKey[p.cat] || {};
        return '<a href="product.html?id=' + p.id + '" role="option"><img src="' + SR.esc(SR.cover(p)) + '" alt="" loading="lazy"><span><span class="s-name">' + SR.highlight(p.name, q) + '</span><br><span class="s-meta">' + SR.esc(c.name || "") + " · " + SR.fmt(p.variants[p.defaultVariant || 0].price) + "</span></span></a>";
      }).join("") + '<a class="s-all" href="products.html?q=' + encodeURIComponent(q) + '">' + SR.t("search.all", { q: SR.esc(q) }) + "</a>";
      box.classList.remove("hidden");
    }
    input.addEventListener("input", render);
    input.addEventListener("focus", render);
    input.addEventListener("keydown", function (e) {
      var links = box.querySelectorAll("a");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        hl = (hl + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
        links.forEach(function (a, i) { a.classList.toggle("hl", i === hl); });
      } else if (e.key === "Enter" && hl > -1 && links[hl]) {
        e.preventDefault(); location.href = links[hl].getAttribute("href");
      } else if (e.key === "Escape") close();
    });
    document.addEventListener("click", function (e) { if (!form.contains(e.target)) close(); });
    var q = SR.param("q");
    if (q && document.body.dataset.page === "shop") input.value = q;
  }

  SR.toast = function (html, href, label) {
    var t = SR.$(".toast");
    if (!t) return;
    t.innerHTML = "<span>" + html + "</span>" + (href ? '<a href="' + href + '">' + label + "</a>" : "");
    t.classList.add("show");
    clearTimeout(SR._tt);
    SR._tt = setTimeout(function () { t.classList.remove("show"); }, 3200);
  };

  /* ---------------- Static page translation ----------------
     Static HTML stays in English. In Hindi mode every "text block" (the outermost
     element that directly contains English text) is looked up by a hash of its
     text in window.SR_HI_STATIC and replaced with the Hindi HTML. */
  SR.hash = function (s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    return h.toString(36);
  };
  function normText(s) { return String(s || "").replace(/\s+/g, " ").trim(); }
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEMPLATE: 1, svg: 1, SVG: 1 };
  function hasDirectText(el) {
    for (var n = el.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && /[A-Za-z]/.test(n.nodeValue)) return true;
    return false;
  }
  function collectBlocks(root, out) {
    for (var c = root.firstElementChild; c; c = c.nextElementSibling) {
      if (SKIP[c.tagName] || c.hasAttribute("data-noi18n")) continue;
      if (hasDirectText(c)) out.push(c); else collectBlocks(c, out);
    }
    return out;
  }
  SR.i18nCollect = function () {
    var out = collectBlocks(document.body, []).map(function (el) {
      return { text: normText(el.textContent), html: el.innerHTML.replace(/\s+/g, " ").trim(), flag: el.querySelector("svg,input,select,textarea,img") ? "has-controls" : "" };
    });
    SR.$$("[placeholder]").forEach(function (el) { if (!el.closest("[data-noi18n]")) out.push({ text: el.getAttribute("placeholder"), html: "", flag: "placeholder" }); });
    out.push({ text: document.title, html: "", flag: "title" });
    return out;
  };
  SR.translateStatic = function (root) {
    if (!SR.isHi) return;
    var D = window.SR_HI_STATIC || {};
    collectBlocks(root || document.body, []).forEach(function (el) {
      var v = D[SR.hash(normText(el.textContent))];
      if (v != null) el.innerHTML = v; else SR._missing["static:" + normText(el.textContent).slice(0, 60)] = 1;
    });
    SR.$$("[placeholder]", root).forEach(function (el) {
      var v = D[SR.hash(el.getAttribute("placeholder"))];
      if (v != null) el.setAttribute("placeholder", v);
    });
    if (!root) { var tv = D[SR.hash(normText(document.title))]; if (tv) document.title = tv; }
  };

  /* ---------------- Product card ---------------- */
  SR.card = function (p, q) {
    var c = SR.catByKey[p.cat] || {}, v = p.variants[p.defaultVariant || 0], imgs = SR.imgs(p), off = SR.off(v.price, v.mrp);
    var tags = "";
    if (p.type === "organic") tags += p.nisa && p.nisa.status === "live" ? '<span class="badge badge-green">' + SR.t("badge.nisaTested") + "</span>" : '<span class="badge">' + SR.t("badge.organic") + "</span>";
    else tags += '<span class="badge badge-blue">' + SR.t("badge.handmade") + "</span>";
    if (p.craft && p.craft.gi) tags += '<span class="badge badge-maroon">' + SR.t("badge.gi") + "</span>";
    return '<article class="p-card">' +
      '<a class="p-img" href="product.html?id=' + p.id + '" aria-label="' + SR.esc(p.name) + '">' +
      '<img src="' + SR.esc(imgs[0].src) + '" alt="' + SR.esc(p.name) + '" loading="lazy">' +
      (imgs[1] ? '<img class="alt" src="' + SR.esc(imgs[1].src) + '" alt="" loading="lazy">' : "") +
      '<span class="p-tags">' + tags + "</span></a>" +
      '<div class="p-body"><span class="p-cat">' + SR.esc(c.name || "") + "</span>" +
      '<a class="p-name" href="product.html?id=' + p.id + '">' + (q ? SR.highlight(p.name, q) : SR.esc(p.name)) + "</a>" +
      (p.alt && p.alt !== p.name ? '<span class="p-hi"' + (SR.isHi ? ' lang="en"' : ' lang="hi"') + ">" + SR.esc(p.alt) + "</span>" : "") +
      '<p class="p-short">' + SR.esc(p.short) + "</p>" +
      '<div class="p-foot"><div class="price">' + SR.fmt(v.price) + (off ? '<span class="mrp">' + SR.fmt(v.mrp) + '</span><span class="off">' + SR.t("price.off", { n: off }) + "</span>" : "") +
      '<span class="price-unit">' + SR.esc(v.label) + (p.variants.length > 1 ? " · " + SR.t("card.options", { n: p.variants.length }) : "") + "</span></div>" +
      '<button class="add-mini" data-add="' + p.id + '" aria-label="' + SR.esc(SR.t("card.addAria", { name: p.name })) + '" title="' + SR.t("card.add") + '">' + I.plus + "</button></div>" +
      "</div></article>";
  };

  /* ---------------- Boot ---------------- */
  function boot() {
    var page = document.body.dataset.page || "";
    var activeNav = document.body.dataset.nav || page;
    var h = SR.$("#site-header"), f = SR.$("#site-footer");
    if (h) h.outerHTML = headerHTML(activeNav);
    if (f) f.outerHTML = footerHTML();
    SR.translateStatic();
    document.documentElement.classList.remove("i18n-wait");
    SR.$$(".header-search").forEach(bindSearch);
    var mt = SR.$(".menu-toggle"), mn = SR.$(".mobile-nav");
    if (mt) mt.addEventListener("click", function () {
      var open = mn.classList.toggle("open"); mt.setAttribute("aria-expanded", open);
    });
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-add]");
      if (b) { e.preventDefault(); var ap = SR.byId[b.getAttribute("data-add")]; SR.cart.add(ap.id, ap.defaultVariant || 0, 1); }
      var lb = e.target.closest("[data-lang]");
      if (lb && lb.closest(".lang-switch")) { e.preventDefault(); if (lb.dataset.lang !== SR.lang) SR.setLang(lb.dataset.lang); }
    });
    SR.cart.emit();
    // reveal on scroll
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -40px 0px" });
      SR.$$(".reveal").forEach(function (el) { io.observe(el); });
    } else SR.$$(".reveal").forEach(function (el) { el.classList.add("in"); });
    SR.ready = true;
    (SR._q || []).forEach(function (fn) { fn(); });
    SR._q = [];
    // restore scroll position after a language switch
    try {
      var sc = JSON.parse(sessionStorage.getItem("sr_scroll") || "null");
      sessionStorage.removeItem("sr_scroll");
      if (sc && sc.p === location.pathname) window.scrollTo({ top: sc.y, left: 0, behavior: "instant" });
    } catch (e) { /* ignore */ }
  }
  SR.onReady = function (fn) { if (SR.ready) fn(); else (SR._q = SR._q || []).push(fn); };
  SR.observeReveal = function (root) {
    SR.$$(".reveal", root).forEach(function (el) { el.classList.add("in"); });
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
