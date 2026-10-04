/* Cart page */
SR.onReady(function () {
  var root = SR.$("#cart-root");

  function summaryHTML(t) {
    var need = SR.cfg.freeShipAt - (t.sub - t.disc);
    return '<aside class="summary"><h3>Order summary</h3>' +
      (need > 0 ? '<div class="free-ship">Add <b>' + SR.fmt(need) + '</b> more for free delivery<div class="progress-bar"><i style="width:' + Math.min(100, ((t.sub - t.disc) / SR.cfg.freeShipAt) * 100) + '%"></i></div></div>' : '<div class="free-ship">🎉 You get <b>free delivery</b></div>') +
      '<div class="sum-row"><span>Items (' + SR.cart.count() + ")</span><span>" + SR.fmt(t.mrp) + "</span></div>" +
      (t.savings ? '<div class="sum-row"><span>Discount on MRP</span><span class="green">− ' + SR.fmt(t.savings) + "</span></div>" : "") +
      (t.disc ? '<div class="sum-row"><span>Coupon ' + SR.esc(t.code) + '</span><span class="green">− ' + SR.fmt(t.disc) + "</span></div>" : "") +
      '<div class="sum-row"><span>Delivery</span><span>' + (t.ship ? SR.fmt(t.ship) : '<span class="green">FREE</span>') + "</span></div>" +
      '<div class="sum-row total"><span>Total</span><span>' + SR.fmt(t.total) + "</span></div>" +
      '<form class="coupon" id="coupon-form"><label class="sr-only" for="coupon">Coupon code</label><input id="coupon" placeholder="Coupon code" value="' + SR.esc(SR.cart.coupon()) + '"><button class="btn btn-ghost btn-sm" type="submit">Apply</button></form>' +
      '<div class="small" id="coupon-msg" style="min-height:1.2em;margin-bottom:8px;color:' + (t.couponMsg ? "var(--danger)" : "var(--tulsi)") + '">' + (t.couponMsg ? SR.esc(t.couponMsg) : t.code ? "Applied: " + SR.esc(SR.cfg.coupons[t.code].label) : '<span class="muted">Try <b>SHUBH10</b>, <b>NEWBEGIN</b> or <b>PRAKRITI15</b></span>') + "</div>" +
      '<a class="btn btn-primary btn-block" href="checkout.html">Proceed to checkout</a>' +
      '<p class="small muted" style="margin:12px 0 0">Sample store: no real payment will be taken.</p></aside>';
  }

  function render() {
    var t = SR.cart.totals();
    if (!t.lines.length) {
      root.style.display = "block";
      root.innerHTML = '<div class="empty-state"><h2>Your cart is empty</h2><p class="muted">Start with our bestsellers: Bhimseni kapoor, guggul cups or a jar of litchi honey.</p>' +
        '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn btn-primary" href="products.html?type=organic">Shop organic</a><a class="btn btn-ghost" href="products.html?type=handicraft">Shop handicrafts</a></div></div>';
      return;
    }
    root.style.display = "";
    root.innerHTML = "<section>" + t.lines.map(function (l) {
      var p = l.p, off = SR.off(l.price, l.mrp);
      return '<div class="cart-item"><a href="product.html?id=' + p.id + "&v=" + l.v + '"><img src="' + SR.esc(SR.cover(p)) + '" alt="' + SR.esc(p.name) + '"></a>' +
        '<div><a class="ci-name" href="product.html?id=' + p.id + "&v=" + l.v + '">' + SR.esc(p.name) + "</a>" +
        '<div class="ci-meta">' + SR.esc(l.variant.label) + " · SKU " + SR.esc(p.sku) + "</div>" +
        '<div class="ci-meta">' + SR.fmt(l.price) + " each" + (off ? ' · <s>' + SR.fmt(l.mrp) + '</s> <span style="color:var(--tulsi);font-weight:600">' + off + "% off</span>" : "") + "</div>" +
        (p.type === "organic" ? '<div class="ci-meta" style="color:var(--tulsi)">' + (p.nisa.status === "live" ? "✓ ICAR-NISA certified batch" : "ICAR-NISA testing in progress") + "</div>" : '<div class="ci-meta" style="color:var(--sky)">Handmade · ' + SR.esc(p.craft.state) + "</div>") +
        "</div>" +
        '<div class="ci-right"><div class="qty sm"><button type="button" data-dec="' + p.id + "|" + l.v + '" aria-label="Decrease">−</button><input type="number" value="' + l.qty + '" min="1" max="20" data-set="' + p.id + "|" + l.v + '" aria-label="Quantity"><button type="button" data-inc="' + p.id + "|" + l.v + '" aria-label="Increase">+</button></div>' +
        '<b>' + SR.fmt(l.total) + '</b><button class="link-btn" type="button" data-rm="' + p.id + "|" + l.v + '">Remove</button></div></div>';
    }).join("") +
      '<div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:6px"><a class="btn btn-ghost btn-sm" href="products.html">← Continue shopping</a><button class="link-btn" type="button" id="clear-cart">Empty cart</button></div></section>' +
      summaryHTML(t);
  }

  root.addEventListener("click", function (e) {
    var b;
    function split(s) { var a = s.split("|"); return [a[0], +a[1]]; }
    function find(k) { var x = split(k); return SR.cart.items().filter(function (i) { return i.id === x[0] && i.v === x[1]; })[0]; }
    if ((b = e.target.closest("[data-inc]"))) { var it = find(b.dataset.inc); if (it) SR.cart.update(it.id, it.v, it.qty + 1); }
    else if ((b = e.target.closest("[data-dec]"))) { var it2 = find(b.dataset.dec); if (it2) { if (it2.qty <= 1) SR.cart.remove(it2.id, it2.v); else SR.cart.update(it2.id, it2.v, it2.qty - 1); } }
    else if ((b = e.target.closest("[data-rm]"))) { var x = split(b.dataset.rm); SR.cart.remove(x[0], x[1]); SR.toast("Item removed from cart"); }
    else if (e.target.id === "clear-cart") { if (confirm("Remove all items from your cart?")) SR.cart.clear(); }
  });
  root.addEventListener("change", function (e) {
    var k = e.target.dataset.set; if (!k) return;
    var a = k.split("|"); SR.cart.update(a[0], +a[1], parseInt(e.target.value, 10) || 1);
  });
  root.addEventListener("submit", function (e) {
    if (e.target.id !== "coupon-form") return;
    e.preventDefault();
    var code = SR.$("#coupon").value.trim().toUpperCase();
    if (code && !SR.cfg.coupons[code]) { SR.$("#coupon-msg").innerHTML = '<span style="color:var(--danger)">“' + SR.esc(code) + "” is not a valid coupon</span>"; return; }
    SR.cart.coupon(code);
    SR.toast(code ? "Coupon " + SR.esc(code) + " applied" : "Coupon removed");
  });
  document.addEventListener("sr:cart", render);
  render();
});
