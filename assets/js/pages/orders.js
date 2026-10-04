/* Order confirmation + order history (localStorage) */
SR.onReady(function () {
  var orders = SR.load("sr_orders", []);
  function d(iso) { return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }); }
  function itemsHTML(o) {
    return o.items.map(function (it) {
      var p = SR.byId[it.id];
      return '<div class="mini-line"><img src="' + SR.esc(p ? SR.cover(p) : it.img) + '" alt=""><div class="ml-name"><a href="product.html?id=' + it.id + '">' + SR.esc(it.name) + "</a><small>" + SR.esc(it.label) + " × " + it.qty + "</small></div><b>" + SR.fmt(it.price * it.qty) + "</b></div>";
    }).join("");
  }
  function totalsHTML(o) {
    return '<div class="sum-row"><span>Subtotal</span><span>' + SR.fmt(o.sub) + "</span></div>" +
      (o.disc ? '<div class="sum-row"><span>Coupon ' + SR.esc(o.code) + '</span><span class="green">− ' + SR.fmt(o.disc) + "</span></div>" : "") +
      '<div class="sum-row"><span>Delivery</span><span>' + (o.ship ? SR.fmt(o.ship) : "FREE") + "</span></div>" +
      (o.express ? '<div class="sum-row"><span>Express</span><span>' + SR.fmt(o.express) + "</span></div>" : "") +
      (o.gift ? '<div class="sum-row"><span>Gift wrap</span><span>' + SR.fmt(o.gift) + "</span></div>" : "") +
      (o.cod ? '<div class="sum-row"><span>COD handling</span><span>' + SR.fmt(o.cod) + "</span></div>" : "") +
      '<div class="sum-row total"><span>Total</span><span>' + SR.fmt(o.total) + "</span></div>";
  }

  var sroot = SR.$("#success-root");
  if (sroot) {
    var id = SR.param("id");
    var o = orders.filter(function (x) { return x.id === id; })[0];
    if (!o) {
      sroot.innerHTML = '<div class="success-box"><h2>Order not found</h2><p class="muted">We couldn’t find that order in this browser.</p><a class="btn btn-primary" href="orders.html">My orders</a></div>';
      return;
    }
    var hasOrganic = o.items.some(function (it) { return SR.byId[it.id] && SR.byId[it.id].type === "organic"; });
    sroot.innerHTML = '<div class="success-box"><div class="tick">' + SR.icons.check + "</div>" +
      '<span class="deva" style="color:var(--saffron-dark);font-size:1.2rem">शुभारंभ!</span><h1 style="font-size:2rem;margin:4px 0 6px">Thank you, ' + SR.esc(o.address.name.split(" ")[0]) + "!</h1>" +
      '<p>Your sample order <b>' + SR.esc(o.id) + "</b> has been placed. Status: <b>" + SR.esc(o.status) + "</b>.</p>" +
      '<p class="muted small">Estimated delivery by <b>' + d(o.eta) + "</b> to " + SR.esc(o.address.city) + ", " + SR.esc(o.address.state) + " " + SR.esc(o.address.pin) + " · Payment: " + SR.esc(o.payment) + "</p>" +
      '<div style="text-align:left;margin:22px 0">' + itemsHTML(o) + '<div style="height:8px"></div>' + totalsHTML(o) + "</div>" +
      (o.giftMsg ? '<p class="small" style="text-align:left;background:var(--haldi-soft);padding:10px 14px;border-radius:10px">🎁 Gift message: “' + SR.esc(o.giftMsg) + "”</p>" : "") +
      (hasOrganic ? '<p class="small" style="text-align:left;background:var(--tulsi-soft);padding:10px 14px;border-radius:10px;color:var(--tulsi)">Each organic pack will carry a QR code linking to its ICAR-NISA batch report (placeholder in this sample).</p>' : "") +
      '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:18px"><a class="btn btn-primary" href="products.html">Continue shopping</a><a class="btn btn-ghost" href="orders.html">View my orders</a></div>' +
      '<p class="small muted" style="margin-top:18px">This is a prototype: nothing will be shipped and no payment was taken.</p></div>';
    return;
  }

  var root = SR.$("#orders-root");
  if (!orders.length) {
    root.innerHTML = '<div class="empty-state"><h2>No orders yet</h2><p class="muted">Your sample orders will appear here after checkout.</p><a class="btn btn-primary" href="products.html">Start shopping</a></div>';
    return;
  }
  root.innerHTML = orders.map(function (o) {
    return '<article class="order-card"><div class="oc-head"><div><b>' + SR.esc(o.id) + '</b><div class="small muted">Placed ' + d(o.date) + " · " + SR.esc(o.payment) + '</div></div><div style="text-align:right"><span class="badge badge-green">' + SR.esc(o.status) + '</span><div class="small muted">Arriving by ' + d(o.eta) + "</div></div></div>" +
      itemsHTML(o) + '<div style="max-width:340px;margin-left:auto;margin-top:8px">' + totalsHTML(o) + "</div>" +
      '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn btn-ghost btn-sm" type="button" data-reorder="' + SR.esc(o.id) + '">Buy again</button></div></article>';
  }).join("") + '<button class="link-btn" type="button" id="clear-orders" style="margin-top:10px">Clear order history</button>';
  root.addEventListener("click", function (e) {
    var b = e.target.closest("[data-reorder]");
    if (b) {
      var o = orders.filter(function (x) { return x.id === b.dataset.reorder; })[0];
      if (o) { o.items.forEach(function (it) { if (SR.byId[it.id]) SR.cart.add(it.id, it.v, it.qty); }); location.href = "cart.html"; }
    }
    if (e.target.id === "clear-orders" && confirm("Clear all sample orders from this browser?")) { SR.save("sr_orders", []); location.reload(); }
  });
});
