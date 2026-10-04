/* Order confirmation + order history (localStorage) */
SR.onReady(function () {
  var t = SR.t;
  var orders = SR.load("sr_orders", []);
  function payLabel(o) {
    if (!o.pay) return SR.esc(o.payment || ""); // orders saved by an older version
    var info = o.payInfo ? " · " + SR.esc(o.payInfo) : "";
    return { upi: t("pay.upi") + info, card: t("pay.cardEnding", { n: SR.esc(o.payInfo) }), netbanking: t("pay.netbanking") + info, cod: t("pay.cod") }[o.pay];
  }
  function statusLabel(o) {
    if (o.status === "cod") return t("status.cod");
    if (o.status === "paid") return t("status.paid");
    return SR.esc(o.status);
  }
  function itemsHTML(o) {
    return o.items.map(function (it) {
      var p = SR.byId[it.id];
      var label = p && p.variants[it.v] ? p.variants[it.v].label : it.label;
      return '<div class="mini-line"><img src="' + SR.esc(p ? SR.cover(p) : it.img) + '" alt=""><div class="ml-name"><a href="product.html?id=' + it.id + '">' + SR.esc(p ? p.name : it.name) + "</a><small>" + SR.esc(label) + " × " + it.qty + "</small></div><b>" + SR.fmt(it.price * it.qty) + "</b></div>";
    }).join("");
  }
  function totalsHTML(o) {
    return '<div class="sum-row"><span>' + t("co.subtotal") + "</span><span>" + SR.fmt(o.sub) + "</span></div>" +
      (o.disc ? '<div class="sum-row"><span>' + t("cart.coupon") + " " + SR.esc(o.code) + '</span><span class="green">− ' + SR.fmt(o.disc) + "</span></div>" : "") +
      '<div class="sum-row"><span>' + t("cart.delivery") + "</span><span>" + (o.ship ? SR.fmt(o.ship) : t("cart.free")) + "</span></div>" +
      (o.express ? '<div class="sum-row"><span>' + t("co.express") + "</span><span>" + SR.fmt(o.express) + "</span></div>" : "") +
      (o.gift ? '<div class="sum-row"><span>' + t("co.giftWrap") + "</span><span>" + SR.fmt(o.gift) + "</span></div>" : "") +
      (o.cod ? '<div class="sum-row"><span>' + t("co.codFee") + "</span><span>" + SR.fmt(o.cod) + "</span></div>" : "") +
      '<div class="sum-row total"><span>' + t("cart.total") + "</span><span>" + SR.fmt(o.total) + "</span></div>";
  }

  var sroot = SR.$("#success-root");
  if (sroot) {
    var id = SR.param("id");
    var o = orders.filter(function (x) { return x.id === id; })[0];
    if (!o) {
      sroot.innerHTML = '<div class="success-box"><h2>' + t("ord.notFound") + '</h2><p class="muted">' + t("ord.notFoundMsg") + '</p><a class="btn btn-primary" href="orders.html">' + t("nav.orders") + "</a></div>";
      return;
    }
    var hasOrganic = o.items.some(function (it) { return SR.byId[it.id] && SR.byId[it.id].type === "organic"; });
    var stateName = SR.isHi && (window.SR_STATES_HI || {})[o.address.state] || o.address.state;
    sroot.innerHTML = '<div class="success-box"><div class="tick">' + SR.icons.check + "</div>" +
      '<span class="deva" style="color:var(--saffron-dark);font-size:1.2rem">शुभारंभ!</span><h1 style="font-size:2rem;margin:4px 0 6px">' + t("ord.thanks", { name: SR.esc(o.address.name.split(" ")[0]) }) + "</h1>" +
      "<p>" + t("ord.placed", { id: "<b>" + SR.esc(o.id) + "</b>", status: "<b>" + statusLabel(o) + "</b>" }) + "</p>" +
      '<p class="muted small">' + t("ord.eta", { date: "<b>" + SR.date(o.eta) + "</b>", place: SR.esc(o.address.city) + ", " + SR.esc(stateName) + " " + SR.esc(o.address.pin) }) + " · " + t("ord.payment") + " " + payLabel(o) + "</p>" +
      '<div style="text-align:left;margin:22px 0">' + itemsHTML(o) + '<div style="height:8px"></div>' + totalsHTML(o) + "</div>" +
      (o.giftMsg ? '<p class="small" style="text-align:left;background:var(--haldi-soft);padding:10px 14px;border-radius:10px">🎁 ' + t("ord.giftMsg") + " “" + SR.esc(o.giftMsg) + "”</p>" : "") +
      (hasOrganic ? '<p class="small" style="text-align:left;background:var(--tulsi-soft);padding:10px 14px;border-radius:10px;color:var(--tulsi)">' + t("ord.qrNote") + "</p>" : "") +
      '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:18px"><a class="btn btn-primary" href="products.html">' + t("ord.continue") + '</a><a class="btn btn-ghost" href="orders.html">' + t("ord.viewOrders") + "</a></div>" +
      '<p class="small muted" style="margin-top:18px">' + t("ord.protoNote") + "</p></div>";
    return;
  }

  var root = SR.$("#orders-root");
  if (!orders.length) {
    root.innerHTML = '<div class="empty-state"><h2>' + t("ord.none") + '</h2><p class="muted">' + t("ord.noneMsg") + '</p><a class="btn btn-primary" href="products.html">' + t("ord.start") + "</a></div>";
    return;
  }
  root.innerHTML = orders.map(function (o) {
    return '<article class="order-card"><div class="oc-head"><div><b>' + SR.esc(o.id) + '</b><div class="small muted">' + t("ord.placedOn", { date: SR.date(o.date) }) + " · " + payLabel(o) + '</div></div><div style="text-align:right"><span class="badge badge-green">' + statusLabel(o) + '</span><div class="small muted">' + t("ord.arriving", { date: SR.date(o.eta) }) + "</div></div></div>" +
      itemsHTML(o) + '<div style="max-width:340px;margin-left:auto;margin-top:8px">' + totalsHTML(o) + "</div>" +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn btn-ghost btn-sm" type="button" data-reorder="' + SR.esc(o.id) + '">' + t("ord.buyAgain") + "</button></div></article>";
  }).join("") + '<button class="link-btn" type="button" id="clear-orders" style="margin-top:10px">' + t("ord.clear") + "</button>";
  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-reorder]");
    if (b) {
      var o = orders.filter(function (x) { return x.id === b.dataset.reorder; })[0];
      if (o) { o.items.forEach(function (it) { if (SR.byId[it.id]) SR.cart.add(it.id, it.v, it.qty); }); location.href = "cart.html"; }
    }
    if (e.target.id === "clear-orders" && confirm(t("ord.confirmClear"))) { SR.save("sr_orders", []); location.reload(); }
  });
});
