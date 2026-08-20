(function () {
  var CART_KEY = "chez-kura-cart";

  function loadCart() {
    try {
      var data = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(data) ? data : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    renderCart();
  }

  function countItems(items) {
    return items.reduce(function (n, item) { return n + item.qty; }, 0);
  }

  function subtotal(items) {
    return items.reduce(function (n, item) { return n + item.price * item.qty; }, 0);
  }

  function addItem(item) {
    var items = loadCart();
    var found = items.find(function (row) { return row.id === item.id; });
    var qty = item.qty || 1;
    if (found) found.qty += qty;
    else {
      items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image || "",
        qty: qty
      });
    }
    saveCart(items);
    openCart();
  }

  function setQty(id, qty) {
    var items = loadCart();
    if (qty < 1) items = items.filter(function (row) { return row.id !== id; });
    else {
      items.forEach(function (row) {
        if (row.id === id) row.qty = qty;
      });
    }
    saveCart(items);
  }

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function injectChrome() {
    if (qs("[data-cart-drawer]")) return;
    var wrap = document.createElement("div");
    wrap.innerHTML =
      '<div class="backdrop" data-backdrop hidden></div>' +
      '<aside class="drawer cart-drawer" data-cart-drawer hidden aria-label="Cart">' +
        '<div class="drawer-head">' +
          '<h2>Cart</h2>' +
          '<button class="icon-btn" type="button" data-close-ui aria-label="Close">Close</button>' +
        "</div>" +
        '<div class="drawer-body" data-cart-body></div>' +
      "</aside>" +
      '<div class="search-overlay" data-search hidden>' +
        '<div class="search-panel">' +
          '<div class="drawer-head">' +
            "<h2>Search</h2>" +
            '<button class="icon-btn" type="button" data-close-ui aria-label="Close">Close</button>' +
          "</div>" +
          '<input class="search-input" type="search" data-search-input placeholder="Cushion, rug, portrait…" autocomplete="off">' +
          '<div class="search-results" data-search-results></div>' +
        "</div>" +
      "</div>" +
      '<div class="nav-mobile" data-mobile-nav hidden>' +
        '<a href="index.html">Home</a>' +
        '<a href="index.html#home-accessories">Home Accessories</a>' +
        '<a href="index.html#bundles">Bundles</a>' +
        '<a href="index.html#pets">For Your Pet</a>' +
        '<a href="index.html#about">About</a>' +
        '<a href="shipping.html">Shipping</a>' +
        '<a href="returns.html">Returns policy</a>' +
        '<a href="contact.html">Contact</a>' +
      "</div>";
    document.body.appendChild(wrap);
  }

  function closeUi() {
    qsa("[data-cart-drawer], [data-search], [data-mobile-nav], [data-backdrop]").forEach(function (el) {
      el.hidden = true;
    });
    document.body.classList.remove("drawer-open");
  }

  function openCart() {
    injectChrome();
    renderCart();
    qs("[data-backdrop]").hidden = false;
    qs("[data-cart-drawer]").hidden = false;
    qs("[data-search]").hidden = true;
    qs("[data-mobile-nav]").hidden = true;
    document.body.classList.add("drawer-open");
  }

  function openSearch() {
    injectChrome();
    qs("[data-backdrop]").hidden = false;
    qs("[data-search]").hidden = false;
    qs("[data-cart-drawer]").hidden = true;
    qs("[data-mobile-nav]").hidden = true;
    document.body.classList.add("drawer-open");
    renderSearch(qs("[data-search-input]").value || "");
    setTimeout(function () { qs("[data-search-input]").focus(); }, 20);
  }

  function openMenu() {
    injectChrome();
    var menu = qs("[data-mobile-nav]");
    var open = menu.hidden;
    closeUi();
    if (open) {
      menu.hidden = false;
      document.body.classList.add("drawer-open");
    }
  }

  function renderCart() {
    var items = loadCart();
    qsa("[data-cart-count]").forEach(function (el) {
      el.textContent = String(countItems(items));
    });
    var body = qs("[data-cart-body]");
    if (!body) return;
    if (!items.length) {
      body.innerHTML = '<p class="cart-empty">Your cart is waiting for a first piece.</p>';
      return;
    }
    var sum = subtotal(items);
    var shipNote = sum >= CK.FREE_SHIPPING
      ? "Shipping is on us."
      : CK.money(CK.FREE_SHIPPING - sum) + " more for free shipping.";
    var shipPct = Math.min(100, Math.round((sum / CK.FREE_SHIPPING) * 100));
    body.innerHTML =
      '<div class="ship-bar"><div class="ship-bar-fill" style="width:' + shipPct + '%"></div></div>' +
      '<p class="ship-note">' + escapeHtml(shipNote) + "</p>" +
      '<ul class="cart-list">' + items.map(function (item) {
        return '<li class="cart-row">' +
          (item.image ? '<img src="' + escapeHtml(item.image) + '" alt="">' : '<div class="cart-ph"></div>') +
          '<div class="cart-info"><h3>' + escapeHtml(item.name) + "</h3>" +
          '<p>' + CK.money(item.price) + "</p>" +
          '<div class="qty">' +
            '<button type="button" data-qty="' + escapeHtml(item.id) + '" data-delta="-1" aria-label="Fewer">−</button>' +
            "<span>" + item.qty + "</span>" +
            '<button type="button" data-qty="' + escapeHtml(item.id) + '" data-delta="1" aria-label="More">+</button>' +
          "</div></div>" +
          '<button class="icon-btn" type="button" data-remove="' + escapeHtml(item.id) + '">Remove</button>' +
        "</li>";
      }).join("") + "</ul>" +
      '<div class="cart-foot">' +
        '<div class="cart-total"><span>Subtotal</span><strong>' + CK.money(sum) + "</strong></div>" +
        '<p class="cart-note">Made to order. Final sale once production begins.</p>' +
        '<button class="btn" type="button" data-checkout>Continue to checkout</button>' +
      "</div>";
  }

  function renderSearch(query) {
    var box = qs("[data-search-results]");
    if (!box || !CK.products) return;
    var q = (query || "").trim().toLowerCase();
    var hits = CK.products.filter(function (p) {
      if (!q) return true;
      return (p.name + " " + p.type + " " + p.lead + " " + p.collection).toLowerCase().indexOf(q) !== -1;
    });
    if (!hits.length) {
      box.innerHTML = "<p>Nothing matches that yet.</p>";
      return;
    }
    box.innerHTML = hits.map(function (p) {
      return '<a class="search-hit" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
        '<img src="' + escapeHtml(p.image) + '" alt="">' +
        "<div><strong>" + escapeHtml(p.name) + "</strong><span>" + CK.money(p.price) + "</span></div>" +
      "</a>";
    }).join("");
  }

  function renderProductPage() {
    var root = qs("[data-product]");
    if (!root) return;
    var id = new URLSearchParams(location.search).get("id");
    var product = CK.productById(id);
    if (!product || !product.sku) {
      root.innerHTML = '<div class="wrap page-copy"><h1>This piece is not here.</h1><p><a href="index.html#home-accessories">Back to the shop</a></p></div>';
      return;
    }
    document.title = product.name + " | Chez Kura";
    var collectionLabel = product.collection === "pet" ? "For Your Pet" : "Home Accessories";
    var collectionHref = product.collection === "pet" ? "index.html#pets" : "index.html#home-accessories";
    var related = (product.related || []).map(CK.productById).filter(Boolean);
    root.innerHTML =
      '<div class="wrap">' +
        '<p class="crumb"><a href="index.html">Home</a> / <a href="' + collectionHref + '">' + collectionLabel + "</a> / " + escapeHtml(product.name) + "</p>" +
        '<div class="pdp">' +
          '<div class="pdp-media"><img src="' + escapeHtml(product.image) + '" alt="' + escapeHtml(product.name) + '"></div>' +
          '<div class="pdp-info">' +
            '<div class="eyebrow">' + escapeHtml(product.type) + " · " + escapeHtml(product.size) + "</div>" +
            "<h1>" + escapeHtml(product.name) + "</h1>" +
            '<p class="pdp-lead">' + escapeHtml(product.lead) + "</p>" +
            '<div class="price">' + CK.money(product.price) + "</div>" +
            "<p>" + escapeHtml(product.body) + "</p>" +
            "<ul>" + product.bullets.map(function (b) { return "<li>" + escapeHtml(b) + "</li>"; }).join("") + "</ul>" +
            (product.photo ? "<p class=\"photo-note\">Send the photo after checkout. Portraits take a few days longer than the rest of the shop. Worth the wait.</p>" : "") +
            '<div class="pdp-actions">' +
              '<div class="qty">' +
                '<button type="button" data-pdp-delta="-1" aria-label="Fewer">−</button>' +
                '<span data-pdp-qty>1</span>' +
                '<button type="button" data-pdp-delta="1" aria-label="More">+</button>' +
              "</div>" +
              '<button class="btn" type="button" data-add-product="' + escapeHtml(product.id) + '">Add to cart</button>' +
            "</div>" +
            '<p class="sku">SKU ' + escapeHtml(product.sku) + "</p>" +
          "</div>" +
        "</div>" +
        (related.length ? '<div class="related"><div class="sec-head"><div class="rule' + (product.collection === "pet" ? " sage" : "") + '"></div><h2>You may also like</h2></div><div class="grid three">' +
          related.map(function (p) {
            return '<a class="card" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
              '<div class="thumb"><img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.name) + '"></div>' +
              "<h3>" + escapeHtml(p.name) + "</h3>" +
              '<p class="desc">' + escapeHtml(p.cardDesc) + "</p>" +
              '<div class="price">' + CK.money(p.price) + "</div></a>";
          }).join("") + "</div></div>" : "") +
      "</div>";
  }

  function bind() {
    injectChrome();
    renderCart();
    renderProductPage();

    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-open-cart], [data-open-search], [data-open-menu], [data-close-ui], [data-backdrop], [data-add-product], [data-add-bundle], [data-qty], [data-remove], [data-pdp-delta], [data-checkout]");
      if (!t) return;

      if (t.hasAttribute("data-open-cart")) { e.preventDefault(); openCart(); }
      else if (t.hasAttribute("data-open-search")) { e.preventDefault(); openSearch(); }
      else if (t.hasAttribute("data-open-menu")) { e.preventDefault(); openMenu(); }
      else if (t.hasAttribute("data-close-ui") || t.hasAttribute("data-backdrop")) { e.preventDefault(); closeUi(); }
      else if (t.hasAttribute("data-add-product")) {
        var product = CK.productById(t.getAttribute("data-add-product"));
        var qtyEl = qs("[data-pdp-qty]");
        var qty = qtyEl ? parseInt(qtyEl.textContent, 10) || 1 : 1;
        if (product) addItem({ id: product.id, name: product.name, price: product.price, image: product.image, qty: qty });
      } else if (t.hasAttribute("data-add-bundle")) {
        var bundle = CK.productById(t.getAttribute("data-add-bundle"));
        if (bundle) addItem({ id: bundle.id, name: bundle.name, price: bundle.price, qty: 1 });
      } else if (t.hasAttribute("data-qty")) {
        var row = loadCart().find(function (item) { return item.id === t.getAttribute("data-qty"); });
        if (row) setQty(row.id, row.qty + Number(t.getAttribute("data-delta")));
      } else if (t.hasAttribute("data-remove")) {
        setQty(t.getAttribute("data-remove"), 0);
      } else if (t.hasAttribute("data-pdp-delta")) {
        var holder = qs("[data-pdp-qty]");
        var next = Math.max(1, (parseInt(holder.textContent, 10) || 1) + Number(t.getAttribute("data-pdp-delta")));
        holder.textContent = String(next);
      } else if (t.hasAttribute("data-checkout")) {
        var note = qs("[data-checkout-note]");
        if (!note) {
          note = document.createElement("p");
          note.setAttribute("data-checkout-note");
          note.className = "cart-note";
          t.insertAdjacentElement("afterend", note);
        }
        note.textContent = "Checkout will open here when the shop is live. Your selection is saved in this browser.";
      }
    });

    document.addEventListener("input", function (e) {
      if (e.target.matches("[data-search-input]")) renderSearch(e.target.value);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeUi();
    });

    var form = qs("[data-contact-form]");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        form.hidden = true;
        qs("[data-contact-thanks]").hidden = false;
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
  else bind();
})();
