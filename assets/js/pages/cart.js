/* Cart page */
SR.onReady(function () {
  var t = SR.t;
  var root = SR.$("#cart-root");

  function summaryHTML(tt) {
    var need = SR.cfg.freeShipAt - (tt.sub - tt.disc);
    var cmsg = tt.couponMsg ? SR.esc(tt.couponMsg) : tt.code ? t("cart.applied", { label: SR.esc(SR.couponLabel(tt.code)) }) : '<span class="muted">' + t("cart.tryCodes") + "</span>";
    return '<aside class="summary"><h3>' + t("cart.summary") + "</h3>" +
      (need > 0 ? '<div class="free-ship">' + t("cart.addForFree", { amt: "<b>" + SR.fmt(need) + "</b>" }) + '<div class="progress-bar"><i style="width:' + Math.min(100, ((tt.sub - tt.disc) / SR.cfg.freeShipAt) * 100) + '%"></i></div></div>' : '<div class="free-ship">🎉 ' + t("cart.freeYes") + "</div>") +
      '<div class="sum-row"><span>' + t("cart.items", { n: SR.cart.count() }) + "</span><span>" + SR.fmt(tt.mrp) + "</span></div>" +
      (tt.savings ? '<div class="sum-row"><span>' + t("cart.mrpDisc") + '</span><span class="green">− ' + SR.fmt(tt.savings) + "</span></div>" : "") +
      (tt.disc ? '<div class="sum-row"><span>' + t("cart.coupon") + " " + SR.esc(tt.code) + '</span><span class="green">− ' + SR.fmt(tt.disc) + "</span></div>" : "") +
      '<div class="sum-row"><span>' + t("cart.delivery") + "</span><span>" + (tt.ship ? SR.fmt(tt.ship) : '<span class="green">' + t("cart.free") + "</span>") + "</span></div>" +
      '<div class="sum-row total"><span>' + t("cart.total") + "</span><span>" + SR.fmt(tt.total) + "</span></div>" +
      '<form class="coupon" id="coupon-form"><label class="sr-only" for="coupon">' + t("cart.couponCode") + '</label><input id="coupon" placeholder="' + t("cart.couponCode") + '" value="' + SR.esc(SR.cart.coupon()) + '"><button class="btn btn-ghost btn-sm" type="submit">' + t("cart.apply") + "</button></form>" +
      '<div class="small" id="coupon-msg" style="min-height:1.2em;margin-bottom:8px;color:' + (tt.couponMsg ? "var(--danger)" : "var(--tulsi)") + '">' + cmsg + "</div>" +
      '<a class="btn btn-primary btn-block" href="checkout.html">' + t("cart.checkout") + "</a>" +
      '<p class="small muted" style="margin:12px 0 0">' + t("cart.sampleNote") + "</p></aside>";
  }

  function render() {
    var tt = SR.cart.totals();
    if (!tt.lines.length) {
      root.style.display = "block";
      root.innerHTML = '<div class="empty-state"><h2>' + t("cart.empty") + '</h2><p class="muted">' + t("cart.emptyMsg") + "</p>" +
        '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn btn-primary" href="products.html?type=organic">' + t("cart.shopOrg") + '</a><a class="btn btn-ghost" href="products.html?type=handicraft">' + t("cart.shopHc") + "</a></div></div>";
      return;
    }
    root.style.display = "";
    root.innerHTML = "<section>" + tt.lines.map(function (l) {
      var p = l.p, off = SR.off(l.price, l.mrp), key = p.id + "|" + l.v;
      return '<div class="cart-item"><a href="product.html?id=' + p.id + "&v=" + l.v + '"><img src="' + SR.esc(SR.cover(p)) + '" alt="' + SR.esc(p.name) + '"></a>' +
        '<div><a class="ci-name" href="product.html?id=' + p.id + "&v=" + l.v + '">' + SR.esc(p.name) + "</a>" +
        '<div class="ci-meta">' + SR.esc(l.variant.label) + " · " + t("pd.sku") + " " + SR.esc(p.sku) + "</div>" +
        '<div class="ci-meta">' + t("cart.each", { amt: SR.fmt(l.price) }) + (off ? " · <s>" + SR.fmt(l.mrp) + '</s> <span style="color:var(--tulsi);font-weight:600">' + t("price.off", { n: off }) + "</span>" : "") + "</div>" +
        (p.type === "organic" ? '<div class="ci-meta" style="color:var(--tulsi)">' + (p.nisa.status === "live" ? "✓ " + t("cart.nisaBatch") : t("pd.badgeProg")) + "</div>" : '<div class="ci-meta" style="color:var(--sky)">' + t("badge.handmade") + " · " + SR.esc(p.craft.state) + "</div>") +
        "</div>" +
        '<div class="ci-right"><div class="qty sm"><button type="button" data-dec="' + key + '" aria-label="' + t("qty.dec") + '">−</button><input type="number" value="' + l.qty + '" min="1" max="20" data-set="' + key + '" aria-label="' + t("qty.label") + '"><button type="button" data-inc="' + key + '" aria-label="' + t("qty.inc") + '">+</button></div>' +
        "<b>" + SR.fmt(l.total) + '</b><button class="link-btn" type="button" data-rm="' + key + '">' + t("cart.remove") + "</button></div></div>";
    }).join("") +
      '<div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:6px"><a class="btn btn-ghost btn-sm" href="products.html">← ' + t("cart.continue") + '</a><button class="link-btn" type="button" id="clear-cart">' + t("cart.emptyCart") + "</button></div></section>" +
      summaryHTML(tt);
  }

  root.addEventListener("click", function (e) {
    var b;
    function split(s) { var a = s.split("|"); return [a[0], +a[1]]; }
    function find(k) { var x = split(k); return SR.cart.items().filter(function (i) { return i.id === x[0] && i.v === x[1]; })[0]; }
    if ((b = e.target.closest("[data-inc]"))) { var it = find(b.dataset.inc); if (it) SR.cart.update(it.id, it.v, it.qty + 1); }
    else if ((b = e.target.closest("[data-dec]"))) { var it2 = find(b.dataset.dec); if (it2) { if (it2.qty <= 1) SR.cart.remove(it2.id, it2.v); else SR.cart.update(it2.id, it2.v, it2.qty - 1); } }
    else if ((b = e.target.closest("[data-rm]"))) { var x = split(b.dataset.rm); SR.cart.remove(x[0], x[1]); SR.toast(t("cart.removed")); }
    else if (e.target.id === "clear-cart") { if (confirm(t("cart.confirmEmpty"))) SR.cart.clear(); }
  });
  root.addEventListener("change", function (e) {
    var k = e.target.dataset.set; if (!k) return;
    var a = k.split("|"); SR.cart.update(a[0], +a[1], parseInt(e.target.value, 10) || 1);
  });
  root.addEventListener("submit", function (e) {
    if (e.target.id !== "coupon-form") return;
    e.preventDefault();
    var code = SR.$("#coupon").value.trim().toUpperCase();
    if (code && !SR.cfg.coupons[code]) { SR.$("#coupon-msg").innerHTML = '<span style="color:var(--danger)">' + t("cart.badCoupon", { code: SR.esc(code) }) + "</span>"; return; }
    SR.cart.coupon(code);
    SR.toast(code ? t("cart.couponApplied", { code: SR.esc(code) }) : t("cart.couponRemoved"));
  });
  document.addEventListener("sr:cart", render);
  render();
});
