/* Checkout: validation, simulated payment, order creation (localStorage) */
SR.onReady(function () {
  var t = SR.t;
  var STATES = window.SR_STATES_HI || {}; /* English value → Hindi label */
  var root = SR.$("#co-root"), form = SR.$("#co-form");
  if (!SR.cart.items().length) {
    root.style.display = "block";
    root.innerHTML = '<div class="empty-state"><h2>' + t("cart.empty") + '</h2><p class="muted">' + t("co.emptyMsg") + '</p><a class="btn btn-primary" href="products.html">' + t("co.browse") + "</a></div>";
    return;
  }
  SR.$("#state").innerHTML += Object.keys(STATES).map(function (s) { return '<option value="' + s + '">' + (SR.isHi ? STATES[s] : s) + "</option>"; }).join("");

  // restore saved address (per-browser convenience)
  var saved = SR.load("sr_addr", null);
  if (saved) Object.keys(saved).forEach(function (k) { var el = SR.$("#" + k); if (el) el.value = saved[k]; });

  function pay() { return (SR.$('input[name="pay"]:checked') || {}).value || "upi"; }
  function extras() {
    return { gift: SR.$("#gift").checked ? 49 : 0, express: SR.$("#delivery").value === "express" ? 99 : 0 };
  }
  function totals() {
    var tt = SR.cart.totals({ payment: pay() }), x = extras();
    tt.gift = x.gift; tt.express = x.express; tt.total += x.gift + x.express;
    return tt;
  }
  function renderSummary() {
    var tt = totals();
    SR.$("#co-summary").innerHTML = "<h3>" + t("cart.summary") + "</h3>" + tt.lines.map(function (l) {
      return '<div class="mini-line"><img src="' + SR.esc(SR.cover(l.p)) + '" alt=""><div class="ml-name">' + SR.esc(l.p.name) + "<small>" + SR.esc(l.variant.label) + " × " + l.qty + "</small></div><b>" + SR.fmt(l.total) + "</b></div>";
    }).join("") +
      '<div style="height:10px"></div><div class="sum-row"><span>' + t("co.subtotal") + "</span><span>" + SR.fmt(tt.sub) + "</span></div>" +
      (tt.disc ? '<div class="sum-row"><span>' + t("cart.coupon") + " " + SR.esc(tt.code) + '</span><span class="green">− ' + SR.fmt(tt.disc) + "</span></div>" : "") +
      '<div class="sum-row"><span>' + t("cart.delivery") + "</span><span>" + (tt.ship ? SR.fmt(tt.ship) : '<span class="green">' + t("cart.free") + "</span>") + "</span></div>" +
      (tt.express ? '<div class="sum-row"><span>' + t("co.express") + "</span><span>" + SR.fmt(tt.express) + "</span></div>" : "") +
      (tt.gift ? '<div class="sum-row"><span>' + t("co.giftWrap") + "</span><span>" + SR.fmt(tt.gift) + "</span></div>" : "") +
      (tt.cod ? '<div class="sum-row"><span>' + t("co.codFee") + "</span><span>" + SR.fmt(tt.cod) + "</span></div>" : "") +
      '<div class="sum-row total"><span>' + t("co.toPay") + "</span><span>" + SR.fmt(tt.total) + "</span></div>" +
      (tt.savings + tt.disc ? '<p class="small" style="color:var(--tulsi);margin:8px 0 0">' + t("co.youSave", { amt: SR.fmt(tt.savings + tt.disc) }) + "</p>" : "") +
      '<a class="small" href="cart.html" style="display:inline-block;margin-top:10px">← ' + t("co.editCart") + "</a>";
    SR.$("#place").textContent = t("co.place", { amt: SR.fmt(tt.total) });
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
    ok = setErr("name", v("name").length < 2 ? t("err.name") : "") && ok;
    ok = setErr("phone", /^[6-9]\d{9}$/.test(v("phone")) ? "" : t("err.phone")) && ok;
    ok = setErr("email", !v("email") || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email")) ? "" : t("err.email")) && ok;
    ok = setErr("addr1", v("addr1").length < 5 ? t("err.addr") : "") && ok;
    ok = setErr("city", v("city").length < 2 ? t("err.city") : "") && ok;
    ok = setErr("state", v("state") ? "" : t("err.state")) && ok;
    ok = setErr("pin", /^[1-9]\d{5}$/.test(v("pin")) ? "" : t("err.pin")) && ok;
    var p = pay();
    if (p === "upi") ok = setErr("upi", /^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(v("upi")) ? "" : t("err.upi")) && ok;
    if (p === "card") {
      ok = setErr("cardno", luhn(v("cardno").replace(/\s/g, "")) ? "" : t("err.card")) && ok;
      var m = v("exp").match(/^(\d{2})\/(\d{2})$/), expOk = false;
      if (m) { var mm = +m[1], yy = 2000 + +m[2], now = new Date(); expOk = mm >= 1 && mm <= 12 && (yy > now.getFullYear() || (yy === now.getFullYear() && mm >= now.getMonth() + 1)); }
      ok = setErr("exp", expOk ? "" : t("err.exp")) && ok;
      ok = setErr("cvv", /^\d{3,4}$/.test(v("cvv")) ? "" : t("err.cvv")) && ok;
    }
    if (p === "netbanking") ok = setErr("bank", v("bank") ? "" : t("err.bank")) && ok;
    return ok;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) {
      var first = SR.$(".field.invalid input, .field.invalid select");
      if (first) first.focus();
      SR.toast(t("err.fix"));
      return;
    }
    var btn = SR.$("#place");
    btn.disabled = true; btn.textContent = pay() === "cod" ? t("co.placing") : t("co.processing");
    var tt = totals();
    var addr = {};
    ["name", "phone", "email", "addr1", "addr2", "city", "state", "pin"].forEach(function (k) { addr[k] = SR.$("#" + k).value.trim(); });
    SR.save("sr_addr", addr);
    var now = new Date();
    var id = "SR" + now.getFullYear().toString().slice(2) + ("0" + (now.getMonth() + 1)).slice(-2) + ("0" + now.getDate()).slice(-2) + "-" + Math.floor(1000 + Math.random() * 9000);
    var p = pay();
    /* payment + status are stored as codes so the order reads correctly in either language */
    var payInfo = { upi: SR.$("#upi").value.trim(), card: SR.$("#cardno").value.replace(/\s/g, "").slice(-4), netbanking: SR.$("#bank").value, cod: "" }[p];
    var order = {
      id: id, date: now.toISOString(), status: p === "cod" ? "cod" : "paid",
      items: tt.lines.map(function (l) { return { id: l.id, v: l.v, name: l.p.name_en, label: l.variant.label_en, qty: l.qty, price: l.price, img: SR.cover(l.p) }; }),
      sub: tt.sub, disc: tt.disc, code: tt.code, ship: tt.ship, express: tt.express, gift: tt.gift, giftMsg: tt.gift ? SR.$("#gift-msg").value.trim() : "", cod: tt.cod, total: tt.total,
      address: addr, pay: p, payInfo: payInfo, delivery: SR.$("#delivery").value,
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
