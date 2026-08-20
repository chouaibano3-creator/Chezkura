# Shopify Setup & Product Import

## Order of operations

1. **Business Gmail** — you need an email before anything else. Keep it off your
   personal account.
2. **Shopify account** — free trial, no card required to start.
3. **Domain** — buy `chezkurahome.com` *inside Shopify*
   (Settings → Domains → Buy new domain). Bought there, it auto-connects: no DNS
   records, no nameservers. Buying it at an external registrar is a few dollars
   cheaper but means pointing DNS manually.
4. **Free email forwarding** — Settings → Domains. Shopify gives unlimited
   forwarding addresses free on domains bought through them, so
   `contact@chezkurahome.com` lands in your Gmail. Note: forwarding lets you
   *receive*, not *send*. To send from the branded address you need email hosting
   (Google Workspace, paid; or Zoho Mail, which has a free tier for one domain).
5. **Printful** — install from the Shopify App Store. Free. Printful owns its own
   print facilities, so orders route straight to them: they print, they ship, you
   never hold stock and never pay until after the customer pays you.

## Importing the products

Products → Import → upload `products.csv`.

- 11 products, all set to **draft** so nothing goes live before you review it.
- Titles, descriptions, SKUs, prices, tags, and SEO fields are pre-written.
- The `Image Src` column is intentionally empty — add real Printful mockups after
  the artwork exists, then flip products to active.

## Collections to create

| Collection | Rule | Order |
|---|---|---|
| Home Accessories | tag = `home-accessories` | First in nav |
| For Your Pet | tag = `pet` | Second in nav, below Home |

Navigation order matters: Home Accessories always precedes For Your Pet.

## Pet products need a photo upload

Pet items can't be produced without the customer's photo. Add a product-options
app that supports file upload at checkout (Shopify's own custom fields, or an app
such as Bold Product Options) and enable it on the three `photo-upload` tagged
products. Set expectations on the page: these ship a few days later than the rest
of the catalog.

## Policies

Write the refund policy to match the model: **made-to-order items are final sale
once production begins.** This is standard and expected for custom/personalized
goods — in several jurisdictions customized items are explicitly excluded from
standard return rights. Do not paste in a generic 30-day returns template.

## Before going live — verify

- [ ] Printful base costs match the prices in the CSV (rates change; the rug cost
      in the pricing model is a proxy from bath mat pricing and needs confirming
      for full-size area rugs)
- [ ] Shopify Payments rate matches the 2.9% + $0.30 used in the margin model
- [ ] Every product has a real mockup image
- [ ] Pet products have the file-upload field enabled and tested
- [ ] Free-shipping-over-$90 rule configured in Settings → Shipping
- [ ] Refund policy reflects final sale
