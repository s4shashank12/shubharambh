/* Product detail page */
SR.onReady(function () {
  var id = SR.param("id");
  var p = SR.byId[id];
  var root = SR.$("#pd-root");
  var I = SR.icons;
  if (!p) {
    root.innerHTML = '<div class="empty-state" style="margin:60px 0"><h2>Product not found</h2><p class="muted">The product you are looking for isn’t in our sample catalogue.</p><a class="btn btn-primary" href="products.html">Browse all products</a></div>';
    SR.$("#related-wrap").classList.add("hidden");
    return;
  }
  var c = SR.catByKey[p.cat] || {};
  var imgs = SR.imgs(p);
  var vIdx = parseInt(SR.param("v"), 10);
  if (isNaN(vIdx) || !p.variants[vIdx]) vIdx = p.defaultVariant || 0;
  var isOrg = p.type === "organic";
  document.title = p.name + " | Shubharambh";
  var md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", p.short);

  function list(arr, cls) { return '<ul class="' + (cls || "checklist") + '">' + (arr || []).map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; }
  function paras(arr) { return (arr || []).map(function (x) { return "<p>" + x + "</p>"; }).join(""); }

  /* ---------- certification card ---------- */
  function certCard() {
    var yr = 2026, batch = "B-" + yr + "-" + (p.sku.replace(/\D/g, "").slice(-3) || "001");
    if (!isOrg) {
      return '<div class="cert craft"><div class="seal">' + I.sealCraft + "</div><div>" +
        '<span class="status-pill craft"><i></i>Handmade authenticity card</span>' +
        "<h4>Handmade by " + SR.esc(p.craft.cluster) + ", " + SR.esc(p.craft.state) + "</h4>" +
        '<div class="cert-meta">Craft: <b>' + SR.esc(c.name) + "</b> · Material: <b>" + SR.esc(p.craft.material) + "</b><br>" +
        (p.craft.gi ? "GI status: <b>" + SR.esc(p.craft.giNote) + "</b><br>" : "") +
        "Card no.: <b>SR-HC-" + SR.esc(p.sku) + "-" + yr + "</b> (sample placeholder)</div></div>" +
        '<div><div class="qr">' + SR.fakeQR(p.id + "craft") + '</div><div class="qr-cap">Artisan details<br>(sample)</div></div></div>';
    }
    var live = p.nisa && p.nisa.status === "live";
    return '<div class="cert ' + (live ? "" : "progress") + '"><div class="seal">' + (live ? I.seal : I.sealProgress) + "</div><div>" +
      '<span class="status-pill ' + (live ? "" : "progress") + '"><i></i>' + (live ? "ICAR-NISA certified · report live" : "ICAR-NISA certification in progress") + "</span>" +
      "<h4>ICAR–National Institute of Secondary Agriculture, Namkum, Ranchi</h4>" +
      '<div class="cert-meta">Certificate no.: <b>ICAR-NISA/SR/' + SR.esc(p.sku) + "/" + yr + "</b> · Batch: <b>" + batch + "</b><br>" +
      "Parameters: <b>" + (p.nisa.tests || []).length + " tests</b>" + (live ? " incl. pollen analysis &amp; NMR" : " (protocol being finalised)") + "<br>" +
      'Report: published on ICAR-NISA website · <a href="#" data-cert>View sample certificate</a></div></div>' +
      '<div><div class="qr">' + SR.fakeQR(p.id + batch) + '</div><div class="qr-cap">Scan for batch report<br>(placeholder)</div></div></div>';
  }

  function certDoc() {
    var live = p.nisa.status === "live";
    var rows = (p.nisa.tests || []).map(function (t, i) {
      return "<tr><td>" + (i + 1) + "</td><td>" + t[0] + "</td><td>" + (live ? "Complies" : "Pending") + "</td></tr>";
    }).join("");
    return '<div class="certdoc"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div style="width:70px;color:var(--tulsi)">' + I.seal + '</div>' +
      '<div style="text-align:right;font-size:.8rem;color:var(--muted)">Cert. no. ICAR-NISA/SR/' + SR.esc(p.sku) + "/2026<br>Issued: " + (live ? "12 Sep 2026" : "—") + "</div></div>" +
      "<h3>Certificate of Quality Analysis</h3><div class=\"ct-sub\">ICAR–National Institute of Secondary Agriculture, Namkum, Ranchi – 834010 (Jharkhand)<br>Under MOU with Shubharambh · <b>sample layout, not a real certificate</b></div>" +
      '<table><tr><th style="width:36%">Product</th><td>' + SR.esc(p.name) + " (" + SR.esc(p.hi || "") + ")</td></tr>" +
      "<tr><th>Declared source</th><td>" + SR.esc(p.region || "") + "</td></tr>" +
      "<tr><th>Batch</th><td>B-2026-" + (p.sku.replace(/\D/g, "").slice(-3) || "001") + "</td></tr>" +
      "<tr><th>Status</th><td>" + (live ? "Tested: all parameters comply" : "Testing protocol in progress") + "</td></tr></table>" +
      '<table style="margin-top:12px"><tr><th style="width:8%">#</th><th>Parameter</th><th style="width:22%">Result</th></tr>' + rows + "</table>" +
      '<p class="small muted" style="margin:12px 0 0">On the live site, this report is hosted on ICAR-NISA’s official website and opened through the QR code on the pack. Batch reports are kept online rather than printed, to save paper.</p></div>';
  }

  /* ---------- gallery ---------- */
  var gi = 0;
  function credit(im) {
    if (im.own) return "Shubharambh store photo";
    if (!im.author && !im.license) return "";
    return "Photo: " + SR.esc(im.author || "unknown") + (im.license ? " · " + SR.esc(im.license) : "") + (im.url ? ' · <a href="' + SR.esc(im.url) + '" target="_blank" rel="noopener">source</a>' : "");
  }
  function galleryHTML() {
    return '<div class="gallery"><div class="gallery-main">' +
      '<img id="g-img" src="' + SR.esc(imgs[0].src) + '" alt="' + SR.esc(p.name) + '">' +
      (imgs.length > 1 ? '<button class="g-nav g-prev" type="button" aria-label="Previous image">' + I.left + '</button><button class="g-nav g-next" type="button" aria-label="Next image">' + I.right + "</button>" : "") +
      '<span class="g-count" id="g-count">1 / ' + imgs.length + '</span><span class="g-credit" id="g-credit">' + credit(imgs[0]) + "</span></div>" +
      '<div class="thumbs" id="thumbs">' + imgs.map(function (im, i) {
        return '<button type="button" data-i="' + i + '" class="' + (i === 0 ? "active" : "") + '" aria-label="Image ' + (i + 1) + '"><img src="' + SR.esc(im.src) + '" alt="" loading="lazy"></button>';
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
    return SR.fmt(v.price) + (off ? '<span class="mrp">MRP ' + SR.fmt(v.mrp) + '</span><span class="off">' + off + "% off</span>" : '<span class="mrp" style="text-decoration:none">MRP (incl. of all taxes)</span>');
  }

  /* ---------- sections ---------- */
  var sections = [];
  sections.push(["overview", "Overview", function () {
    var h = paras(p.about);
    if (p.honey) {
      var hn = p.honey;
      h += '<div class="variety-box" style="margin-top:14px"><h3 style="font-size:1.1rem">Variety profile</h3><table class="spec-table">' +
        [["Flower source", hn.flower], ["Botanical name", "<i>" + SR.esc(hn.bot) + "</i>"], ["Where the bees forage", hn.region], ["Bloom / harvest", hn.season], ["Colour", hn.colour], ["Taste", hn.taste], ["Crystallisation", hn.crystal], ["Bee species", hn.bee], ["Pairs well with", hn.pair]]
          .map(function (r) { return "<tr><th>" + r[0] + "</th><td>" + (r[0] === "Botanical name" ? r[1] : SR.esc(r[1])) + "</td></tr>"; }).join("") + "</table></div>";
    }
    if (p.craft) {
      h += '<div class="variety-box" style="margin-top:14px"><h3 style="font-size:1.1rem">Craft profile</h3><table class="spec-table">' +
        [["Craft family", c.name], ["Made in", p.craft.cluster + ", " + p.craft.state], ["Material", p.craft.material], ["Size", p.craft.size], ["GI status", p.craft.gi ? p.craft.giNote : "—"]]
          .map(function (r) { return "<tr><th>" + r[0] + "</th><td>" + SR.esc(r[1]) + "</td></tr>"; }).join("") + "</table></div>";
    }
    return h;
  }]);
  sections.push(["missing", "Missing vs Shubharambh", function () {
    return '<div class="desc-grid"><div class="desc-box missing"><h3>' + I.alert + "What the Indian household is missing</h3>" + list(p.missing, "crosslist") + "</div>" +
      '<div class="desc-box brings"><h3>' + I.leaf + "What Shubharambh brings to the table</h3>" + list(p.brings) + "</div></div>";
  }]);
  if (isOrg) {
    sections.push(["purity", "Purity & ICAR-NISA", function () {
      var n = p.nisa;
      var h = '<div class="desc-box full" style="margin-bottom:18px"><h3>' + I.shield + "ICAR-NISA’s role</h3><p>" + n.role + "</p>" +
        '<p class="small muted" style="margin:0">Division of work under the MOU: <b>ICAR-NISA</b> handles quality, testing and certification. <b>Shubharambh</b> handles source, production, packing, marketing and sales. <a href="purity.html">Read how testing works →</a></p></div>';
      h += '<h3 style="margin-top:8px">How purity is tested</h3><table class="test-table"><thead><tr><th>Test</th><th>What it proves</th></tr></thead><tbody>' +
        (n.tests || []).map(function (t) { return "<tr><td>" + t[0] + "</td><td>" + t[1] + "</td></tr>"; }).join("") + "</tbody></table>";
      if (n.home) h += '<div class="home-test" style="margin-top:20px"><h4>' + SR.esc(n.home.title) + "</h4>" + list(n.home.steps, "checklist") + "</div>";
      if (n.research) h += '<p class="note"><b>Research note:</b> ' + n.research + "</p>";
      return h;
    }]);
  } else {
    sections.push(["quality", "Craft check", function () {
      var h = '<h3 style="margin-top:0">Shubharambh craft check</h3><p class="small muted">ICAR-NISA certification applies to our organic range. Handicrafts go through Shubharambh’s own checks at the MSME workshop before listing.</p>' +
        '<table class="test-table"><thead><tr><th>Check</th><th>What we look for</th></tr></thead><tbody>' +
        (p.qc || []).map(function (t) { return "<tr><td>" + t[0] + "</td><td>" + t[1] + "</td></tr>"; }).join("") + "</tbody></table>";
      return h;
    }]);
  }
  sections.push(["use", isOrg ? "How to use" : "Use, care & gifting", function () {
    var h = '<div class="desc-grid"><div class="desc-box"><h3>' + I.sun + (isOrg ? "How to use" : "How to use it") + "</h3>" + list(p.uses) + "</div>";
    if (isOrg) h += '<div class="desc-box"><h3>' + I.alert + "Caution</h3><p>" + (p.caution || "") + "</p></div></div>";
    else h += '<div class="desc-box"><h3>' + I.gift + "Care &amp; gifting</h3>" + list(p.care) + '<p class="small" style="margin:10px 0 6px"><b>Perfect for:</b></p><div class="occasions">' + (p.gifting || []).map(function (g) { return '<span class="small">' + SR.esc(g) + "</span>"; }).join("") + "</div></div></div>";
    return h;
  }]);
  sections.push(["specs", "Specifications", function () {
    var rows = [["SKU / barcode", p.sku], ["Category", c.name + " (" + (isOrg ? "Organic" : "Handicraft") + ")"]].concat(p.specs || []);
    if (p.region) rows.push(["Source / origin", p.region]);
    return '<table class="spec-table" style="background:#fff;border:1px solid var(--line);border-radius:12px">' + rows.map(function (r) { return "<tr><th>" + SR.esc(r[0]) + "</th><td>" + r[1] + "</td></tr>"; }).join("") + "</table>" +
      '<p class="note">Prices are indicative samples based on 2026 Indian market research and Shubharambh shelf MRPs. This is a prototype store.</p>';
  }]);

  /* ---------- page ---------- */
  var badges = "";
  if (isOrg) badges += p.nisa.status === "live" ? '<span class="badge badge-green">ICAR-NISA certified (sample)</span>' : '<span class="badge">ICAR-NISA testing in progress</span>';
  else badges += '<span class="badge badge-blue">Handmade · MSME</span>';
  if (p.craft && p.craft.gi) badges += '<span class="badge badge-maroon">GI-registered craft</span>';
  if (p.own) badges += '<span class="badge">Shubharambh store photo</span>';

  root.innerHTML =
    '<div class="crumbs" style="padding-top:20px"><a href="index.html">Home</a> / <a href="products.html?type=' + p.type + '">' + (isOrg ? "Organic" : "Handicrafts") + '</a> / <a href="products.html?cat=' + p.cat + '">' + SR.esc(c.name) + "</a> / " + SR.esc(p.name) + "</div>" +
    '<div class="pd">' + galleryHTML() +
    '<div class="pd-info">' +
    '<span class="eyebrow" style="margin-bottom:4px">' + SR.esc(c.name) + "</span>" +
    "<h1>" + SR.esc(p.name) + "</h1>" + (p.hi ? '<div class="pd-hi">' + SR.esc(p.hi) + "</div>" : "") +
    '<div class="pd-hero-meta"><span>SKU ' + SR.esc(p.sku) + "</span>" + (p.region ? "<span>" + SR.esc(p.region) + "</span>" : "") + "</div>" +
    '<div class="pd-badges">' + badges + "</div>" +
    '<p class="pd-tagline">' + SR.esc(p.tagline || p.short) + "</p>" +
    '<div class="pd-price" id="pd-price">' + priceHTML() + "</div>" +
    '<div class="tax-note">Inclusive of all taxes · Free delivery above ' + SR.fmt(SR.cfg.freeShipAt) + "</div>" +
    (p.variants.length > 1 ? '<div class="opt-label">' + (p.cat === "honey" ? "Jar size" : "Choose option") + '</div><div class="variants" id="variants">' + p.variants.map(function (v, i) {
      return '<button type="button" data-v="' + i + '" class="' + (i === vIdx ? "active" : "") + '">' + SR.esc(v.label) + "<small>" + SR.fmt(v.price) + "</small></button>";
    }).join("") + "</div>" : '<div class="opt-label">Size: ' + SR.esc(p.variants[0].label) + "</div>") +
    '<div class="buy-row"><div class="qty"><button type="button" data-q="-1" aria-label="Decrease quantity">−</button><input id="qty" type="number" min="1" max="20" value="1" aria-label="Quantity"><button type="button" data-q="1" aria-label="Increase quantity">+</button></div>' +
    '<button class="btn btn-primary" type="button" id="add">' + I.cart.replace("<svg", '<svg width="20" height="20"') + " Add to cart</button>" +
    '<button class="btn btn-maroon" type="button" id="buy">Buy now</button></div>' +
    '<div class="assure"><div>' + I.shield + (isOrg ? "Purity tested with ICAR-NISA" : "Handmade, MSME verified") + "</div><div>" + I.truck + "Free shipping above ₹999</div><div>" + I.hand + "Cash on delivery available</div></div>" +
    certCard() +
    "</div></div>" +
    '<nav class="pd-nav" aria-label="Product sections"><div class="tab-bar">' + sections.map(function (s, i) { return '<a href="#' + s[0] + '"' + (i === 0 ? ' class="active"' : "") + ">" + s[1] + "</a>"; }).join("") + "</div></nav>" +
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
  SR.$("#related-title").textContent = rel.length ? "More from " + c.name : "More products";
  SR.$("#related").innerHTML = rel.slice(0, 8).map(function (x) { return SR.card(x); }).join("");
});
