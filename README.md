# Chez Kura

> A home you walk into and feel instantly at peace.

Storefront prototype + brand system + Shopify import data for **Chez Kura**, a
made-to-order home decor brand (cushions, wall art, rugs) with a secondary pet
portrait collection.

---

## Live site

https://chouaibano3-creator.github.io/Chezkura/

Enable it once in GitHub: **Settings → Pages → Source: GitHub Actions**.
The workflow in `.github/workflows/pages.yml` publishes the storefront.

## Run it locally

No build step. No dependencies. Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## What's in here

```
├── index.html              # homepage
├── product.html            # product page (opens with ?id=)
├── shipping.html
├── returns.html
├── contact.html
├── assets/
│   ├── styles.css
│   ├── catalog.js          # products, prices, copy
│   ├── site.js             # cart, search, mobile nav
│   └── images/             # prototype artwork (replace with Printful mockups)
├── .cursorrules            # project rules — read this first
├── brand/
│   ├── brand-guide.md
│   └── brand-board.png
├── content/
│   └── copy.md
└── shopify/
    ├── products.csv        # 11 products, ready to import into Shopify
    └── import-guide.md
```

---

## The brand in one paragraph

Chez Kura is about the feeling of home — walking in and being at peace. The main
line is home accessories: cushion covers, wall art, rugs. A secondary pet
collection (portraits, blankets, mats) exists because a pet is part of what makes
a house feel like home. Pets are visible but positioned second, never competing
with Home for attention.

Every piece is made to order — nothing is warehoused, nothing is repeated. That
is both the product promise and the reason returns are final sale.

## Page structure (do not reorder)

1. Announcement bar — free shipping over $90
2. Sticky nav — Home / Home Accessories / Bundles / For Your Pet / About
3. Hero — mission statement + single CTA
4. Overview strip — tells a first-time visitor what the store sells
5. **Home Accessories** — the main grid, most of the page
6. Bundles — three sets, real discounts
7. **For Your Pet** — smaller, quieter, sage-accented, below Home
8. Promise row — made only for you / free shipping / final sale
9. About — the mission, expanded
10. Footer

---

## Build status

| Piece | Status |
|---|---|
| Brand identity (name, palette, type, voice) | Done |
| Homepage design + copy | Done |
| Product catalog + pricing + margins | Done |
| Shopify product CSV | Done — ready to import |
| Prototype artwork | Done — 11 designs in the brand palette |
| Product pages, cart, search, policies | Done — static prototype only |
| Printful mockups on real products | **Not started** |
| Shopify store | **Not created** — needs account + domain |
| Ads / content strategy | **Not started** |

## Next steps

1. Create a dedicated business Gmail.
2. Create the Shopify account (free trial).
3. Buy `chezkurahome.com` **inside Shopify** so it auto-connects (no DNS work).
4. Install Printful from the Shopify App Store — it handles production and
   shipping; no inventory is ever held.
5. Run the prototype artwork through Printful's mockup generator and replace
   the tiles in `assets/images/` with photographed products.
6. Import `shopify/products.csv`, attach the mockups, publish.
7. Add a file-upload product option for the pet collection (customers submit
   their pet's photo at checkout).

## Economics (per unit, at listed prices)

Blended average order value ≈ **$80**, gross margin ≈ **51%**.
After a 25% ad-spend assumption, net margin ≈ **26%** (≈ $20–21 per order).

At $100k revenue that is roughly **$25–26k net profit** — ranging from ~$16k if
ads run expensive (35% of revenue) to ~$36k if they run efficient (15%).

Base costs come from published Printful production pricing. Verify current rates
in the Printful dashboard before finalizing retail prices — the rug base cost in
particular is a proxy from bath mat pricing and needs confirming for full-size
area rugs.
