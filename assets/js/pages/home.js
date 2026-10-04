/* Landing page: "what households are missing" grid, category tiles, featured products */
SR.onReady(function () {
  var MISSING = [
    { then: "Bhimseni kapoor crystals in wardrobes", now: "Naphthalene balls", id: "bhimseni-kapoor" },
    { then: "Roli made from haldi + chuna", now: "Arrowroot or dolomite with synthetic red dye", id: "roli" },
    { then: "Guggul & dhuna on a cow-dung fire", now: "Charcoal-and-bamboo agarbatti", id: "dhuwan" },
    { then: "Sendha namak for vrat & health", now: "Children have never heard of it", id: "sendha-namak" },
    { then: "Gond katira in summer", now: "Sugary cold drinks", id: "gond-katira" },
    { then: "A grain of pure hing", now: "‘Compounded’ hing that is mostly flour", id: "hing-pure" },
    { then: "Honey named after its flower", now: "Syrup-blended honey that passes routine tests", id: "honey-litchi" },
    { then: "Bilona ghee from curd", now: "Cream ghee, sometimes cut with vanaspati", id: "a2-ghee" },
    { then: "Earthen diyas from the kumhar", now: "Imported plastic lights", id: "terracotta-diyas" },
    { then: "Chai in a kulhad", now: "Plastic-lined paper cups", id: "kulhad-set" },
    { then: "Pickle matured in a chini-mitti barni", now: "Plastic tubs", id: "khurja-achaar-barni" },
    { then: "Iron kadhai and tawa", now: "Coated pans replaced every two years", id: "cast-iron-kadhai" }
  ];
  var mg = SR.$("#missing-grid");
  if (mg) mg.innerHTML = MISSING.map(function (m) {
    var p = SR.byId[m.id];
    return '<a class="card reveal in" href="product.html?id=' + m.id + '" style="text-decoration:none;color:inherit;padding:0;overflow:hidden;display:flex;flex-direction:column">' +
      '<div style="aspect-ratio:16/10;overflow:hidden;background:#f6ede0"><img src="' + SR.esc(p ? SR.cover(p) : "") + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"></div>' +
      '<div style="padding:14px 16px 16px"><div class="small" style="color:var(--danger);font-weight:600">Now: ' + SR.esc(m.now) + "</div>" +
      '<div style="font-family:var(--font-display);font-size:1.05rem;color:var(--maroon-dark);margin-top:4px">Then: ' + SR.esc(m.then) + "</div>" +
      '<div class="small" style="color:var(--tulsi);font-weight:600;margin-top:6px">Shubharambh: ' + SR.esc(p ? p.name : "") + " →</div></div></a>";
  }).join("");

  function tiles(type) {
    return SR.categories.filter(function (c) { return c.type === type; }).map(function (c) {
      var n = SR.products.filter(function (p) { return p.cat === c.key; }).length;
      return '<a class="cat-tile reveal in" href="products.html?cat=' + c.key + '"><img src="' + SR.esc(SR.catImg(c.key)) + '" alt="" loading="lazy">' +
        '<span class="cat-label"><b>' + SR.esc(c.name) + ' <span class="deva" style="font-size:.85em;color:#ffd98a">' + SR.esc(c.hi) + "</span></b><span>" + n + " products · " + SR.esc(c.desc) + "</span></span></a>";
    }).join("");
  }
  var co = SR.$("#cat-organic"), ch = SR.$("#cat-handicraft");
  if (co) co.innerHTML = tiles("organic");
  if (ch) ch.innerHTML = tiles("handicraft");

  var feat = SR.products.filter(function (p) { return p.featured; });
  var order = ["bhimseni-kapoor", "gugul-cup", "dhuwan", "kapoor-freshener", "roli", "honey-litchi", "gond-katira", "a2-ghee", "samai-hathi-meenakari", "pietra-dura-plate", "channapatna-toy-set", "khurja-achaar-barni"];
  feat.sort(function (a, b) {
    var ia = order.indexOf(a.id), ib = order.indexOf(b.id);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  var fe = SR.$("#featured");
  if (fe) fe.innerHTML = feat.slice(0, 12).map(function (p) { return SR.card(p); }).join("");

  SR.$$("[data-count]").forEach(function (el) {
    el.textContent = SR.products.filter(function (p) { return p.type === el.dataset.count; }).length;
  });
});
