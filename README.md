# Shubharambh (शुभारंभ): sample marketplace

A **static HTML prototype** (not production) of the Shubharambh website and marketplace. Content is based on the founder's pravachan recording and on web research.

- **Organic range:** 40 products, including all 21 items requested plus extra entries for hing, dhawda gond and beeswax. Honey is split into **17 single-flower varieties** from across the Indian subcontinent. Each product has an **ICAR-NISA certification placeholder** with a QR code and a sample certificate.
- **Handicrafts:** 33 products across Minakari, Marble, Wooden, Glass, Mitti, Iron, Chini Mitti and Bamboo.
- Every product page covers *what the Indian household is missing*, *what Shubharambh brings*, ICAR-NISA's role, how purity is tested, and home checks.
- **Hindi / English** switch (EN | हिं) in the header, mobile menu and footer. It translates the whole interface, every static page and all 73 product descriptions.
- Search with Hindi, alias and typo matching; filters; a cart with coupons; checkout with validation and simulated payment; order history. Cart and orders are stored in `localStorage`.

## Run it
No build step. Either open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Sample coupons: `SHUBH10`, `NEWBEGIN`, `PRAKRITI15`. Sample card: `4111 1111 1111 1111`.

Live site (GitHub Pages): https://s4shashank12.github.io/shubharambh/

## Deploying to GitHub Pages
`.github/workflows/pages.yml` publishes the HTML pages and `assets/` on every push to the default branch, and can also be run by hand from the Actions tab.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Every link is relative, so the site works under the `/shubharambh/` sub-path.

## Language (Hindi / English)
- The choice is saved in `localStorage` (`sr_lang`). `?lang=hi` or `?lang=en` in any URL overrides it. Switching reloads the page and keeps the scroll position.
- **UI strings**, such as buttons, cart and checkout text, errors and order statuses, live in `assets/js/i18n.js` (`SR_UI`, as `key: [english, hindi]`). This file also holds the Hindi category descriptions, state names and unit words.
- **Static page text** stays in English in the HTML. At runtime `app.js` hashes each text block and swaps in the Hindi from `assets/js/i18n-static.js`. That file is generated and should not be edited by hand. To change the text:
  1. Edit the English in the HTML.
  2. Re-run `node tools/i18n/extract_static.js` (needs Playwright and a local server) to refresh `tools/i18n/static_en.json`.
  3. Add or fix the Hindi in `tools/i18n/static_hi.py`.
  4. Run `python3 tools/i18n/build_static.py`.
  - Add `data-noi18n` to any element that should never be swapped.
- **Product text in Hindi** lives in `assets/js/data-organic.hi.js` and `assets/js/data-crafts.hi.js`, plus the `HV` table in `data-honey.js`. These are overlays keyed by product id. Any field left out falls back to English.
- In the browser console, `SR._missing` lists any key or text block that has no Hindi yet.

## Structure
| Path | What |
|---|---|
| `index.html` | Landing: mission, vision, environment & germ protection, ICAR-NISA MOU, categories |
| `products.html` | Shop: search, filters, sort (URL-synced) |
| `product.html?id=…` | Product detail |
| `purity.html` | How ICAR-NISA tests each product family, QR flow, home checks |
| `crafts.html`, `about.html` | Craft map and gifting; founder story |
| `cart.html`, `checkout.html`, `order-success.html`, `orders.html` | Marketplace flow |
| `assets/js/data-*.js` | Product catalogue (organic, honey, crafts); `*.hi.js` are the Hindi overlays |
| `assets/js/i18n.js`, `i18n-static.js` | Hindi UI strings and static page translations |
| `tools/i18n/` | Scripts to extract and rebuild the static translations |
| `assets/js/images.js` | Generated image library and credits |
| `credits.html` | Attribution for every third-party image |

## Notes before going live
- Certificates, QR codes and ICAR-NISA statuses are **placeholders**.
- Prices are indicative, based on 2026 Indian market research and the shelf MRPs in the store photos.
- Third-party images are openly licensed (Wikimedia Commons / Openverse), and several are **NC/ND** licensed. Replace them with Shubharambh's own photography before any commercial use.
- Health and air-purification statements are presented as tradition or research in progress, not as claims.
