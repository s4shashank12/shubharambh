/* Checkout: validation, simulated payment, order creation (localStorage) */
SR.onReady(function () {
  var STATES = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
  var root = SR.$("#co-root"), form = SR.$("#co-form");
  if (!SR.cart.items().length) {
    root.style.display = "block";
    root.innerHTML = '<div class="empty-state"><h2>Your cart is empty</h2><p class="muted">Add something before checking out.</p><a class="btn btn-primary" href="products.html">Browse products</a></div>';
    return;
  }
  SR.$("#state").innerHTML += STATES.map(function (s) { return "<option>" + s + "</option>"; }).join("");

  // restore saved address (per-browser convenience)
  var saved = SR.load("sr_addr", null);
  if (saved) Object.keys(saved).forEach(function (k) { var el = SR.$("#" + k); if (el) el.value = saved[k]; });

  function pay() { return (SR.$('input[name="pay"]:checked') || {}).value || "upi"; }
  function extras() {
    return { gift: SR.$("#gift").checked ? 49 : 0, express: SR.$("#delivery").value === "express" ? 99 : 0 };
  }
  function totals() {
    var t = SR.cart.totals({ payment: pay() }), x = extras();
    t.gift = x.gift; t.express = x.express; t.total += x.gift + x.express;
    return t;
  }
  function renderSummary() {
    var t = totals();
    SR.$("#co-summary").innerHTML = "<h3>Order summary</h3>" + t.lines.map(function (l) {
      return '<div class="mini-line"><img src="' + SR.esc(SR.cover(l.p)) + '" alt=""><div class="ml-name">' + SR.esc(l.p.name) + "<small>" + SR.esc(l.variant.label) + " × " + l.qty + "</small></div><b>" + SR.fmt(l.total) + "</b></div>";
    }).join("") +
      '<div style="height:10px"></div><div class="sum-row"><span>Subtotal</span><span>' + SR.fmt(t.sub) + "</span></div>" +
      (t.disc ? '<div class="sum-row"><span>Coupon ' + SR.esc(t.code) + '</span><span class="green">− ' + SR.fmt(t.disc) + "</span></div>" : "") +
      '<div class="sum-row"><span>Delivery</span><span>' + (t.ship ? SR.fmt(t.ship) : '<span class="green">FREE</span>') + "</span></div>" +
      (t.express ? '<div class="sum-row"><span>Express delivery</span><span>' + SR.fmt(t.express) + "</span></div>" : "") +
      (t.gift ? '<div class="sum-row"><span>Gift wrap</span><span>' + SR.fmt(t.gift) + "</span></div>" : "") +
      (t.cod ? '<div class="sum-row"><span>COD handling</span><span>' + SR.fmt(t.cod) + "</span></div>" : "") +
      '<div class="sum-row total"><span>To pay</span><span>' + SR.fmt(t.total) + "</span></div>" +
      (t.savings + t.disc ? '<p class="small" style="color:var(--tulsi);margin:8px 0 0">You save ' + SR.fmt(t.savings + t.disc) + " on this order</p>" : "") +
      '<a class="small" href="cart.html" style="display:inline-block;margin-top:10px">← Edit cart</a>';
    SR.$("#place").textContent = "Place order · " + SR.fmt(t.total);
  }

  form.addEventListener("change", function (e) {
    if (e.target.name === "pay") {
      SR.$$(".pay-extra").forEach(function (el) { el.classList.toggle("hidden", el.dataset.for !== pay()); });
    }
    if (e.target.id === "gift") SR.$("#gift-msg-wrap").classList.toggle("hidden", !e.target.checked);
    renderSummary();
  });
  SR.$("#cardno").addEventListener("input", function (e) {
    var d = e.target.value.replace(/\D/g, "").slice(0, 16);
    e.target.value = d.replace(/(.{4})/g, "$1 ").trim();
  });
  SR.$("#exp").addEventListener("input", function (e) {
    var d = e.target.value.replace(/\D/g, "").slice(0, 4);
    e.target.value = d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d;
  });
  ["phone", "pin", "cvv"].forEach(function (k) {
    SR.$("#" + k).addEventListener("input", function (e) { e.target.value = e.target.value.replace(/\D/g, ""); });
  });

  function luhn(num) {
    var s = 0, alt = false;
    for (var i = num.length - 1; i >= 0; i--) {
      var n = +num[i];
      if (alt) { n *= 2; if (n > 9) n -= 9; }
      s += n; alt = !alt;
    }
    return num.length >= 12 && s % 10 === 0;
  }
  function setErr(id, msg) {
    var el = SR.$("#" + id), f = el.closest(".field");
    f.classList.toggle("invalid", !!msg);
    f.querySelector(".err").textContent = msg || "";
    return !msg;
  }
  function validate() {
    var ok = true, v = function (id) { return SR.$("#" + id).value.trim(); };
    ok = setErr("name", v("name").length < 2 ? "Please enter your name" : "") && ok;
    ok = setErr("phone", /^[6-9]\d{9}$/.test(v("phone")) ? "" : "Enter a valid 10-digit Indian mobile number") && ok;
    ok = setErr("email", !v("email") || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email")) ? "" : "Enter a valid email") && ok;
    ok = setErr("addr1", v("addr1").length < 5 ? "Please enter your address" : "") && ok;
    ok = setErr("city", v("city").length < 2 ? "Please enter your city" : "") && ok;
    ok = setErr("state", v("state") ? "" : "Select your state") && ok;
    ok = setErr("pin", /^[1-9]\d{5}$/.test(v("pin")) ? "" : "Enter a valid 6-digit PIN code") && ok;
    var p = pay();
    if (p === "upi") ok = setErr("upi", /^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(v("upi")) ? "" : "Enter a valid UPI ID, e.g. name@okaxis") && ok;
    if (p === "card") {
      ok = setErr("cardno", luhn(v("cardno").replace(/\s/g, "")) ? "" : "Card number looks invalid (try 4111 1111 1111 1111)") && ok;
      var m = v("exp").match(/^(\d{2})\/(\d{2})$/), expOk = false;
      if (m) { var mm = +m[1], yy = 2000 + +m[2], now = new Date(); expOk = mm >= 1 && mm <= 12 && (yy > now.getFullYear() || (yy === now.getFullYear() && mm >= now.getMonth() + 1)); }
      ok = setErr("exp", expOk ? "" : "Enter a valid future expiry") && ok;
      ok = setErr("cvv", /^\d{3,4}$/.test(v("cvv")) ? "" : "3 or 4 digits") && ok;
    }
    if (p === "netbanking") ok = setErr("bank", v("bank") ? "" : "Select your bank") && ok;
    return ok;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) {
      var first = SR.$(".field.invalid input, .field.invalid select");
      if (first) first.focus();
      SR.toast("Please fix the highlighted fields");
      return;
    }
    var btn = SR.$("#place");
    btn.disabled = true; btn.textContent = pay() === "cod" ? "Placing order…" : "Processing payment (simulated)…";
    var t = totals();
    var addr = {};
    ["name", "phone", "email", "addr1", "addr2", "city", "state", "pin"].forEach(function (k) { addr[k] = SR.$("#" + k).value.trim(); });
    SR.save("sr_addr", addr);
    var now = new Date();
    var id = "SR" + now.getFullYear().toString().slice(2) + ("0" + (now.getMonth() + 1)).slice(-2) + ("0" + now.getDate()).slice(-2) + "-" + Math.floor(1000 + Math.random() * 9000);
    var p = pay(), payLabel = { upi: "UPI · " + SR.$("#upi").value.trim(), card: "Card ending " + SR.$("#cardno").value.replace(/\s/g, "").slice(-4), netbanking: "Net banking · " + SR.$("#bank").value, cod: "Cash on delivery" }[p];
    var order = {
      id: id, date: now.toISOString(), status: p === "cod" ? "Confirmed (pay on delivery)" : "Paid (simulated)",
      items: t.lines.map(function (l) { return { id: l.id, v: l.v, name: l.p.name, label: l.variant.label, qty: l.qty, price: l.price, img: SR.cover(l.p) }; }),
      sub: t.sub, disc: t.disc, code: t.code, ship: t.ship, express: t.express, gift: t.gift, giftMsg: t.gift ? SR.$("#gift-msg").value.trim() : "", cod: t.cod, total: t.total,
      address: addr, payment: payLabel, delivery: SR.$("#delivery").value,
      eta: new Date(now.getTime() + (SR.$("#delivery").value === "express" ? 3 : 7) * 864e5).toISOString()
    };
    setTimeout(function () {
      var orders = SR.load("sr_orders", []);
      orders.unshift(order);
      SR.save("sr_orders", orders.slice(0, 30));
      SR.cart.coupon("");
      SR.cart.clear();
      location.href = "order-success.html?id=" + encodeURIComponent(id);
    }, 900);
  });

  renderSummary();
});
