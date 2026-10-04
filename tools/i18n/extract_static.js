const { chromium } = require(process.env.PWPATH);
(async () => {
  const b = await chromium.launch(); const page = await b.newPage();
  const errs = []; page.on('pageerror', e => errs.push(page.url() + ' ' + e.message));
  const pages = ['index.html', 'about.html', 'purity.html', 'crafts.html', 'products.html', 'product.html?id=bhimseni-kapoor', 'cart.html', 'checkout.html', 'orders.html', 'order-success.html?id=x', 'credits.html'];
  const all = []; const seen = new Set();
  // put something in the cart so checkout renders its form
  await page.goto('http://localhost:8765/index.html?lang=en');
  await page.evaluate(() => localStorage.setItem('sr_cart_v1', JSON.stringify([{ id: 'roli', v: 0, qty: 1 }])));
  for (const p of pages) {
    await page.goto('http://localhost:8765/' + p, { waitUntil: 'domcontentloaded' });
    // collect BEFORE page scripts? collect static only: reload with scripts disabled is hard; use a fresh DOM parse of the raw HTML instead
    const items = await page.evaluate(async (url) => {
      const html = await (await fetch(url)).text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      // emulate SR.i18nCollect on the static document
      const SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEMPLATE: 1, svg: 1, SVG: 1 };
      const hasDirect = el => { for (let n = el.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && /[A-Za-z]/.test(n.nodeValue)) return true; return false; };
      const out = [];
      (function walk(r) { for (let c = r.firstElementChild; c; c = c.nextElementSibling) { if (SKIP[c.tagName] || c.hasAttribute('data-noi18n') || c.id === 'site-header' || c.id === 'site-footer') continue; if (hasDirect(c)) out.push(c); else walk(c); } })(doc.body);
      const norm = s => String(s || '').replace(/\s+/g, ' ').trim();
      const res = out.map(el => ({ text: norm(el.textContent), html: norm(el.innerHTML), flag: el.querySelector('svg,input,select,textarea,img') ? 'HAS-CONTROLS' : '' }));
      doc.querySelectorAll('[placeholder]').forEach(el => res.push({ text: el.getAttribute('placeholder'), html: '', flag: 'placeholder' }));
      res.push({ text: norm(doc.title), html: '', flag: 'title' });
      return res;
    }, 'http://localhost:8765/' + p.split('?')[0]);
    for (const it of items) { if (seen.has(it.text)) continue; seen.add(it.text); all.push(Object.assign({ page: p.split('?')[0] }, it)); }
  }
  require('fs').writeFileSync(process.env.SP + '/static_en.json', JSON.stringify(all, null, 1));
  console.log('unique blocks', all.length, 'flags', all.filter(x => x.flag === 'HAS-CONTROLS').length, 'errs', errs);
  all.filter(x => x.flag === 'HAS-CONTROLS').forEach(x => console.log('CTRL', x.page, x.html.slice(0, 160)));
  await b.close();
})();
