/* Landing page: "what households are missing" grid, category tiles, featured products */
SR.onReady(function () {
  var t = SR.t, L = SR.L;
  var MISSING = [
    { then: ["Bhimseni kapoor crystals in wardrobes", "अलमारी में भीमसेनी कपूर के क्रिस्टल"], now: ["Naphthalene balls", "नेफ़्थलीन की गोलियाँ"], id: "bhimseni-kapoor" },
    { then: ["Roli made from haldi + chuna", "हल्दी + चूने से बनी रोली"], now: ["Arrowroot or dolomite with synthetic red dye", "अरारोट या डोलोमाइट पर सिंथेटिक लाल रंग"], id: "roli" },
    { then: ["Guggul & dhuna on a cow-dung fire", "गोबर के कंडे पर गुग्गुल और धूना"], now: ["Charcoal-and-bamboo agarbatti", "कोयले और बाँस वाली अगरबत्ती"], id: "dhuwan" },
    { then: ["Sendha namak for vrat & health", "व्रत और सेहत के लिए सेंधा नमक"], now: ["Children have never heard of it", "बच्चों ने इसका नाम तक नहीं सुना"], id: "sendha-namak" },
    { then: ["Gond katira in summer", "गर्मियों में गोंद कतीरा"], now: ["Sugary cold drinks", "मीठे कोल्ड ड्रिंक"], id: "gond-katira" },
    { then: ["A grain of pure hing", "शुद्ध हींग का एक दाना"], now: ["‘Compounded’ hing that is mostly flour", "‘कंपाउंडेड’ हींग, जिसमें ज़्यादातर आटा है"], id: "hing-pure" },
    { then: ["Honey named after its flower", "फूल के नाम से पहचाना गया शहद"], now: ["Syrup-blended honey that passes routine tests", "सिरप मिला शहद, जो साधारण जाँच में पास हो जाता है"], id: "honey-litchi" },
    { then: ["Bilona ghee from curd", "दही से बना बिलोना घी"], now: ["Cream ghee, sometimes cut with vanaspati", "मलाई का घी, कभी-कभी वनस्पति मिला हुआ"], id: "a2-ghee" },
    { then: ["Earthen diyas from the kumhar", "कुम्हार के मिट्टी के दीये"], now: ["Imported plastic lights", "आयातित प्लास्टिक की लाइटें"], id: "terracotta-diyas" },
    { then: ["Chai in a kulhad", "कुल्हड़ में चाय"], now: ["Plastic-lined paper cups", "प्लास्टिक परत वाले काग़ज़ के कप"], id: "kulhad-set" },
    { then: ["Pickle matured in a chini-mitti barni", "चीनी मिट्टी की बरनी में पका अचार"], now: ["Plastic tubs", "प्लास्टिक के डिब्बे"], id: "khurja-achaar-barni" },
    { then: ["Iron kadhai and tawa", "लोहे की कड़ाही और तवा"], now: ["Coated pans replaced every two years", "कोटिंग वाले पैन, जो हर दो साल में बदलने पड़ते हैं"], id: "cast-iron-kadhai" }
  ];
  var mg = SR.$("#missing-grid");
  if (mg) mg.innerHTML = MISSING.map(function (m) {
    var p = SR.byId[m.id];
    return '<a class="card reveal in" href="product.html?id=' + m.id + '" style="text-decoration:none;color:inherit;padding:0;overflow:hidden;display:flex;flex-direction:column">' +
      '<div style="aspect-ratio:16/10;overflow:hidden;background:#f6ede0"><img src="' + SR.esc(p ? SR.cover(p) : "") + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"></div>' +
      '<div style="padding:14px 16px 16px"><div class="small" style="color:var(--danger);font-weight:600">' + t("home.now") + " " + SR.esc(L(m.now[0], m.now[1])) + "</div>" +
      '<div style="font-family:var(--font-display);font-size:1.05rem;color:var(--maroon-dark);margin-top:4px">' + t("home.then") + " " + SR.esc(L(m.then[0], m.then[1])) + "</div>" +
      '<div class="small" style="color:var(--tulsi);font-weight:600;margin-top:6px">' + t("brand.name") + ": " + SR.esc(p ? p.name : "") + " →</div></div></a>";
  }).join("");

  function tiles(type) {
    return SR.categories.filter(function (c) { return c.type === type; }).map(function (c) {
      var n = SR.products.filter(function (p) { return p.cat === c.key; }).length;
      return '<a class="cat-tile reveal in" href="products.html?cat=' + c.key + '"><img src="' + SR.esc(SR.catImg(c.key)) + '" alt="" loading="lazy">' +
        '<span class="cat-label"><b>' + SR.esc(c.name) + ' <span class="deva" lang="' + (SR.isHi ? "en" : "hi") + '" style="font-size:.85em;color:#ffd98a">' + SR.esc(c.alt) + "</span></b><span>" + t("home.nProducts", { n: n }) + " · " + SR.esc(c.desc) + "</span></span></a>";
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
