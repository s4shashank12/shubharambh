/* Product detail page */
SR.onReady(function () {
  var t = SR.t;
  var id = SR.param("id");
  var p = SR.byId[id];
  var root = SR.$("#pd-root");
  var I = SR.icons;
  if (!p) {
    root.innerHTML = '<div class="empty-state" style="margin:60px 0"><h2>' + t("pd.notFound") + '</h2><p class="muted">' + t("pd.notFoundMsg") + '</p><a class="btn btn-primary" href="products.html">' + t("pd.browseAll") + "</a></div>";
    SR.$("#related-wrap").classList.add("hidden");
    return;
  }
  var c = SR.catByKey[p.cat] || {};
  var imgs = SR.imgs(p);
  var vIdx = parseInt(SR.param("v"), 10);
  if (isNaN(vIdx) || !p.variants[vIdx]) vIdx = p.defaultVariant || 0;
  var isOrg = p.type === "organic";
  document.title = p.name + " | " + t("brand.name");
  var md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", p.short);

  function list(arr, cls) { return '<ul class="' + (cls || "checklist") + '">' + (arr || []).map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }
  function paras(arr) { return (arr || []).map(function (x) { return "<p>" + x + "</p>"; }).join(""); }
  var batch = "B-2026-" + (p.sku.replace(/\D/g, "").slice(-3) || "001");

  /* ---------- certification card ---------- */
  function certCard() {
    if (!isOrg) {
      return '<div class="cert craft"><div class="seal">' + I.sealCraft + "</div><div>" +
        '<span class="status-pill craft"><i></i>' + t("cert.craftPill") + "</span>" +
        "<h4>" + t("cert.craftBy", { cluster: SR.esc(p.craft.cluster), state: SR.esc(p.craft.state) }) + "</h4>" +
        '<div class="cert-meta">' + t("cert.craft") + " <b>" + SR.esc(c.name) + "</b> · " + t("cert.material") + " <b>" + SR.esc(p.craft.material) + "</b><br>" +
        (p.craft.gi ? t("cert.gi") + " <b>" + SR.esc(p.craft.giNote) + "</b><br>" : "") +
        t("cert.cardNo") + " <b>SR-HC-" + SR.esc(p.sku) + "-2026</b> " + t("cert.samplePh") + "</div></div>" +
        '<div><div class="qr">' + SR.fakeQR(p.id + "craft") + '</div><div class="qr-cap">' + t("cert.artisanQr") + "</div></div></div>";
    }
    var live = p.nisa && p.nisa.status === "live";
    return '<div class="cert ' + (live ? "" : "progress") + '"><div class="seal">' + (live ? I.seal : I.sealProgress) + "</div><div>" +
      '<span class="status-pill ' + (live ? "" : "progress") + '"><i></i>' + (live ? t("cert.live") : t("cert.progress")) + "</span>" +
      "<h4>" + t("cert.inst") + "</h4>" +
      '<div class="cert-meta">' + t("cert.certNo") + " <b>ICAR-NISA/SR/" + SR.esc(p.sku) + "/2026</b> · " + t("cert.batch") + " <b>" + batch + "</b><br>" +
      t("cert.params") + " <b>" + t("cert.nTests", { n: (p.nisa.tests || []).length }) + "</b>" + (live ? t("cert.inclPollen") : t("cert.protocol")) + "<br>" +
      t("cert.report") + ' · <a href="#" data-cert>' + t("cert.viewSample") + "</a></div></div>" +
      '<div><div class="qr">' + SR.fakeQR(p.id + batch) + '</div><div class="qr-cap">' + t("cert.scanQr") + "</div></div></div>";
  }

  function certDoc() {
    var live = p.nisa.status === "live";
    var rows = (p.nisa.tests || []).map(function (x, i) {
      return "<tr><td>" + (i + 1) + "</td><td>" + x[0] + "</td><td>" + (live ? t("doc.complies") : t("doc.pending")) + "</td></tr>";
    }).join("");
    return '<div class="certdoc"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div style="width:70px;color:var(--tulsi)">' + I.seal + "</div>" +
      '<div style="text-align:right;font-size:.8rem;color:var(--muted)">' + t("doc.certNo") + " ICAR-NISA/SR/" + SR.esc(p.sku) + "/2026<br>" + t("doc.issued") + " " + (live ? SR.date("2026-09-12") : "—") + "</div></div>" +
      "<h3>" + t("doc.title") + '</h3><div class="ct-sub">' + t("doc.sub") + "</div>" +
      '<table><tr><th style="width:36%">' + t("doc.product") + "</th><td>" + SR.esc(p.name) + " (" + SR.esc(p.alt || "") + ")</td></tr>" +
      "<tr><th>" + t("doc.source") + "</th><td>" + SR.esc(p.region || "") + "</td></tr>" +
      "<tr><th>" + t("doc.batch") + "</th><td>" + batch + "</td></tr>" +
      "<tr><th>" + t("doc.status") + "</th><td>" + (live ? t("doc.statusLive") : t("doc.statusProg")) + "</td></tr></table>" +
      '<table style="margin-top:12px"><tr><th style="width:8%">#</th><th>' + t("doc.param") + '</th><th style="width:22%">' + t("doc.result") + "</th></tr>" + rows + "</table>" +
      '<p class="small muted" style="margin:12px 0 0">' + t("doc.note") + "</p></div>";
  }

  /* ---------- gallery ---------- */
  var gi = 0;
  function credit(im) {
    if (im.own) return t("img.own");
    if (!im.author && !im.license) return "";
    return t("img.photo") + " " + SR.esc(im.author || t("img.unknown")) + (im.license ? " · " + SR.esc(im.license) : "") + (im.url ? ' · <a href="' + SR.esc(im.url) + '" target="_blank" rel="noopener">' + t("img.source") + "</a>" : "");
  }
  function galleryHTML() {
    return '<div class="gallery"><div class="gallery-main">' +
      '<img id="g-img" src="' + SR.esc(imgs[0].src) + '" alt="' + SR.esc(p.name) + '">' +
      (imgs.length > 1 ? '<button class="g-nav g-prev" type="button" aria-label="' + t("img.prev") + '">' + I.left + '</button><button class="g-nav g-next" type="button" aria-label="' + t("img.next") + '">' + I.right + "</button>" : "") +
      '<span class="g-count" id="g-count">1 / ' + imgs.length + '</span><span class="g-credit" id="g-credit">' + credit(imgs[0]) + "</span></div>" +
      '<div class="thumbs" id="thumbs">' + imgs.map(function (im, i) {
        return '<button type="button" data-i="' + i + '" class="' + (i === 0 ? "active" : "") + '" aria-label="' + t("img.n", { n: i + 1 }) + '"><img src="' + SR.esc(im.src) + '" alt="" loading="lazy"></button>';
      }).join("") + "</div></div>";
  }
  function show(i) {
    gi = (i + imgs.length) % imgs.length;
    SR.$("#g-img").src = imgs[gi].src;
    SR.$("#g-count").textContent = gi + 1 + " / " + imgs.length;
    SR.$("#g-credit").innerHTML = credit(imgs[gi]);
    SR.$$("#thumbs button").forEach(function (b, k) { b.classList.toggle("active", k === gi); });
  }

  /* ---------- price block ---------- */
  function priceHTML() {
    var v = p.variants[vIdx], off = SR.off(v.price, v.mrp);
    return SR.fmt(v.price) + (off ? '<span class="mrp">' + t("price.mrp") + " " + SR.fmt(v.mrp) + '</span><span class="off">' + t("price.off", { n: off }) + "</span>" : '<span class="mrp" style="text-decoration:none">' + t("price.mrpIncl") + "</span>");
  }

  function rowsTable(rows, raw) {
    return '<table class="spec-table">' + rows.map(function (r) { return "<tr><th>" + r[0] + "</th><td>" + (raw ? r[1] : SR.esc(r[1])) + "</td></tr>"; }).join("") + "</table>";
  }

  /* ---------- sections ---------- */
  var sections = [];
  sections.push(["overview", t("pd.overview"), function () {
    var h = paras(p.about);
    if (p.honey) {
      var hn = p.honey;
      h += '<div class="variety-box" style="margin-top:14px"><h3 style="font-size:1.1rem">' + t("pd.variety") + "</h3>" +
        rowsTable([[t("hv.flower"), SR.esc(hn.flower)], [t("hv.bot"), "<i>" + SR.esc(hn.bot) + "</i>"], [t("hv.region"), SR.esc(hn.region)], [t("hv.season"), SR.esc(hn.season)], [t("hv.colour"), SR.esc(hn.colour)], [t("hv.taste"), SR.esc(hn.taste)], [t("hv.crystal"), SR.esc(hn.crystal)], [t("hv.bee"), SR.esc(hn.bee)], [t("hv.pair"), SR.esc(hn.pair)]], true) + "</div>";
    }
    if (p.craft) {
      h += '<div class="variety-box" style="margin-top:14px"><h3 style="font-size:1.1rem">' + t("pd.craftProfile") + "</h3>" +
        rowsTable([[t("cp.family"), c.name], [t("cp.madeIn"), p.craft.cluster + ", " + p.craft.state], [t("cp.material"), p.craft.material], [t("cp.size"), p.craft.size], [t("cp.gi"), p.craft.gi ? p.craft.giNote : "—"]]) + "</div>";
    }
    return h;
  }]);
  sections.push(["missing", t("pd.missingVs"), function () {
    return '<div class="desc-grid"><div class="desc-box missing"><h3>' + I.alert + t("pd.missing") + "</h3>" + list(p.missing, "crosslist") + "</div>" +
      '<div class="desc-box brings"><h3>' + I.leaf + t("pd.brings") + "</h3>" + list(p.brings) + "</div></div>";
  }]);
  if (isOrg) {
    sections.push(["purity", t("pd.purity"), function () {
      var n = p.nisa;
      var h = '<div class="desc-box full" style="margin-bottom:18px"><h3>' + I.shield + t("pd.nisaRole") + "</h3><p>" + n.role + "</p>" +
        '<p class="small muted" style="margin:0">' + t("pd.mouNote") + ' <a href="purity.html">' + t("pd.readTesting") + "</a></p></div>";
      h += '<h3 style="margin-top:8px">' + t("pd.howTested") + '</h3><table class="test-table"><thead><tr><th>' + t("pd.test") + "</th><th>" + t("pd.proves") + "</th></tr></thead><tbody>" +
        (n.tests || []).map(function (x) { return "<tr><td>" + x[0] + "</td><td>" + x[1] + "</td></tr>"; }).join("") + "</tbody></table>";
      if (n.home) h += '<div class="home-test" style="margin-top:20px"><h4>' + SR.esc(n.home.title) + "</h4>" + list(n.home.steps, "checklist") + "</div>";
      if (n.research) h += '<p class="note"><b>' + t("pd.researchNote") + "</b> " + n.research + "</p>";
      return h;
    }]);
  } else {
    sections.push(["quality", t("pd.craftCheck"), function () {
      return '<h3 style="margin-top:0">' + t("pd.craftCheckTitle") + '</h3><p class="small muted">' + t("pd.craftCheckNote") + "</p>" +
        '<table class="test-table"><thead><tr><th>' + t("pd.check") + "</th><th>" + t("pd.lookFor") + "</th></tr></thead><tbody>" +
        (p.qc || []).map(function (x) { return "<tr><td>" + x[0] + "</td><td>" + x[1] + "</td></tr>"; }).join("") + "</tbody></table>";
    }]);
  }
  sections.push(["use", isOrg ? t("pd.howToUse") : t("pd.useCare"), function () {
    var h = '<div class="desc-grid"><div class="desc-box"><h3>' + I.sun + (isOrg ? t("pd.howToUse") : t("pd.howToUseIt")) + "</h3>" + list(p.uses) + "</div>";
    if (isOrg) h += '<div class="desc-box"><h3>' + I.alert + t("pd.caution") + "</h3><p>" + (p.caution || "") + "</p></div></div>";
    else h += '<div class="desc-box"><h3>' + I.gift + t("pd.careGift") + "</h3>" + list(p.care) + '<p class="small" style="margin:10px 0 6px"><b>' + t("pd.perfectFor") + '</b></p><div class="occasions">' + (p.gifting || []).map(function (g) { return '<span class="small">' + SR.esc(g) + "</span>"; }).join("") + "</div></div></div>";
    return h;
  }]);
  sections.push(["specs", t("pd.specs"), function () {
    var rows = [[t("spec.sku"), p.sku], [t("spec.category"), c.name + " (" + (isOrg ? t("nav.organic") : t("spec.handicraft")) + ")"]].concat(p.specs || []);
    if (p.region) rows.push([t("spec.origin"), p.region]);
    return '<table class="spec-table" style="background:#fff;border:1px solid var(--line);border-radius:12px">' + rows.map(function (r) { return "<tr><th>" + SR.esc(r[0]) + "</th><td>" + r[1] + "</td></tr>"; }).join("") + "</table>" +
      '<p class="note">' + t("pd.priceNote") + "</p>";
  }]);

  /* ---------- page ---------- */
  var badges = "";
  if (isOrg) badges += p.nisa.status === "live" ? '<span class="badge badge-green">' + t("pd.badgeLive") + "</span>" : '<span class="badge">' + t("pd.badgeProg") + "</span>";
  else badges += '<span class="badge badge-blue">' + t("pd.badgeHand") + "</span>";
  if (p.craft && p.craft.gi) badges += '<span class="badge badge-maroon">' + t("pd.badgeGi") + "</span>";
  if (p.own) badges += '<span class="badge">' + t("img.own") + "</span>";

  root.innerHTML =
    '<div class="crumbs" style="padding-top:20px"><a href="index.html">' + t("nav.home") + '</a> / <a href="products.html?type=' + p.type + '">' + (isOrg ? t("nav.organic") : t("nav.handicrafts")) + '</a> / <a href="products.html?cat=' + p.cat + '">' + SR.esc(c.name) + "</a> / " + SR.esc(p.name) + "</div>" +
    '<div class="pd">' + galleryHTML() +
    '<div class="pd-info">' +
    '<span class="eyebrow" style="margin-bottom:4px">' + SR.esc(c.name) + "</span>" +
    "<h1>" + SR.esc(p.name) + "</h1>" + (p.alt && p.alt !== p.name ? '<div class="pd-hi" lang="' + (SR.isHi ? "en" : "hi") + '">' + SR.esc(p.alt) + "</div>" : "") +
    '<div class="pd-hero-meta"><span>' + t("pd.sku") + " " + SR.esc(p.sku) + "</span>" + (p.region ? "<span>" + SR.esc(p.region) + "</span>" : "") + "</div>" +
    '<div class="pd-badges">' + badges + "</div>" +
    '<p class="pd-tagline">' + SR.esc(p.tagline || p.short) + "</p>" +
    '<div class="pd-price" id="pd-price">' + priceHTML() + "</div>" +
    '<div class="tax-note">' + t("pd.taxNote", { amt: SR.fmt(SR.cfg.freeShipAt) }) + "</div>" +
    (p.variants.length > 1 ? '<div class="opt-label">' + (p.cat === "honey" ? t("pd.jarSize") : t("pd.chooseOpt")) + '</div><div class="variants" id="variants">' + p.variants.map(function (v, i) {
      return '<button type="button" data-v="' + i + '" class="' + (i === vIdx ? "active" : "") + '">' + SR.esc(v.label) + "<small>" + SR.fmt(v.price) + "</small></button>";
    }).join("") + "</div>" : '<div class="opt-label">' + t("pd.size") + " " + SR.esc(p.variants[0].label) + "</div>") +
    '<div class="buy-row"><div class="qty"><button type="button" data-q="-1" aria-label="' + t("qty.dec") + '">−</button><input id="qty" type="number" min="1" max="20" value="1" aria-label="' + t("qty.label") + '"><button type="button" data-q="1" aria-label="' + t("qty.inc") + '">+</button></div>' +
    '<button class="btn btn-primary" type="button" id="add">' + I.cart.replace("<svg", '<svg width="20" height="20"') + " " + t("card.add") + "</button>" +
    '<button class="btn btn-maroon" type="button" id="buy">' + t("pd.buyNow") + "</button></div>" +
    '<div class="assure"><div>' + I.shield + (isOrg ? t("pd.assureNisa") : t("pd.assureHand")) + "</div><div>" + I.truck + t("pd.assureShip") + "</div><div>" + I.hand + t("pd.assureCod") + "</div></div>" +
    certCard() +
    "</div></div>" +
    '<nav class="pd-nav" aria-label="' + t("pd.sections") + '"><div class="tab-bar">' + sections.map(function (s, i) { return '<a href="#' + s[0] + '"' + (i === 0 ? ' class="active"' : "") + ">" + s[1] + "</a>"; }).join("") + "</div></nav>" +
    sections.map(function (s) { return '<section class="pd-section" id="' + s[0] + '"><h2>' + s[1] + "</h2>" + s[2]() + "</section>"; }).join("") +
    '<div style="height:50px"></div>';

  /* ---------- events ---------- */
  if (imgs.length > 1) {
    SR.$(".g-prev").addEventListener("click", function () { show(gi - 1); });
    SR.$(".g-next").addEventListener("click", function () { show(gi + 1); });
  }
  SR.$("#thumbs").addEventListener("click", function (e) { var b = e.target.closest("[data-i]"); if (b) show(+b.dataset.i); });
  var lb = SR.$("#lightbox");
  SR.$("#g-img").addEventListener("click", function () { lb.querySelector("img").src = imgs[gi].src; lb.classList.add("open"); });
  lb.addEventListener("click", function () { lb.classList.remove("open"); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { lb.classList.remove("open"); SR.$("#cert-modal").classList.remove("open"); }
    if (lb.classList.contains("open") && (e.key === "ArrowRight" || e.key === "ArrowLeft")) { show(gi + (e.key === "ArrowRight" ? 1 : -1)); lb.querySelector("img").src = imgs[gi].src; }
  });
  var vb = SR.$("#variants");
  if (vb) vb.addEventListener("click", function (e) {
    var b = e.target.closest("[data-v]"); if (!b) return;
    vIdx = +b.dataset.v;
    SR.$$("#variants button").forEach(function (x) { x.classList.toggle("active", x === b); });
    SR.$("#pd-price").innerHTML = priceHTML();
  });
  var qty = SR.$("#qty");
  SR.$(".qty").addEventListener("click", function (e) {
    var b = e.target.closest("[data-q]"); if (!b) return;
    qty.value = Math.max(1, Math.min(20, (parseInt(qty.value, 10) || 1) + (+b.dataset.q)));
  });
  qty.addEventListener("change", function () { qty.value = Math.max(1, Math.min(20, parseInt(qty.value, 10) || 1)); });
  SR.$("#add").addEventListener("click", function () { SR.cart.add(p.id, vIdx, parseInt(qty.value, 10) || 1); });
  SR.$("#buy").addEventListener("click", function () { SR.cart.add(p.id, vIdx, parseInt(qty.value, 10) || 1); location.href = "checkout.html"; });
  var modal = SR.$("#cert-modal");
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-cert]")) { e.preventDefault(); SR.$("#cert-body").innerHTML = certDoc(); modal.classList.add("open"); }
  });
  modal.addEventListener("click", function (e) { if (e.target === modal || e.target.closest(".modal-close")) modal.classList.remove("open"); });

  // section nav highlight
  var links = SR.$$(".pd-nav a");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-140px 0px -60% 0px" });
    SR.$$(".pd-section").forEach(function (s) { io.observe(s); });
  }

  /* ---------- related ---------- */
  var rel = SR.products.filter(function (x) { return x.cat === p.cat && x.id !== p.id; });
  if (rel.length < 4) rel = rel.concat(SR.products.filter(function (x) { return x.type === p.type && x.cat !== p.cat && x.featured; }));
  SR.$("#related-title").textContent = rel.length ? t("pd.moreFrom", { cat: c.name }) : t("pd.moreProducts");
  SR.$("#related").innerHTML = rel.slice(0, 8).map(function (x) { return SR.card(x); }).join("");
});
