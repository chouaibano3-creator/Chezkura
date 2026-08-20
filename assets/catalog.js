window.CK = window.CK || {};

CK.FREE_SHIPPING = 90;

CK.products = [
  {
    id: "dune-cushion-cover",
    name: "Dune Cushion Cover",
    price: 49.99,
    collection: "home",
    type: "Cushion Cover",
    size: "18×18",
    image: "assets/images/dune.jpg",
    badge: null,
    cardDesc: "18×18. Soft sand tones that settle a room without shouting.",
    lead: "Soft sand tones that settle a room without shouting.",
    body: "Dune — made only for your space. A single design, never repeated, so this piece belongs to your home the way nothing off a shelf ever could.",
    bullets: ["18×18 in. cover", "Hidden zipper, insert not included", "Made to order — final sale"],
    sku: "CK-CUSH-DUNE-18",
    related: ["arche-cushion-cover", "solene-cushion-cover", "lin-accent-rug"]
  },
  {
    id: "arche-cushion-cover",
    name: "Arche Cushion Cover",
    price: 49.99,
    collection: "home",
    type: "Cushion Cover",
    size: "18×18",
    image: "assets/images/arche.jpg",
    badge: "Bestseller",
    cardDesc: "18×18. A single quiet curve — the shape of a doorway home.",
    lead: "A single quiet curve — the shape of a doorway home.",
    body: "Arche — made only for your space. A single design, never repeated, so this piece belongs to your home the way nothing off a shelf ever could.",
    bullets: ["18×18 in. cover", "Hidden zipper, insert not included", "Made to order — final sale"],
    sku: "CK-CUSH-ARCH-18",
    related: ["dune-cushion-cover", "solene-cushion-cover", "halo-accent-mat"]
  },
  {
    id: "brume-wall-art-small",
    name: "Brume Wall Art — Small",
    price: 69.99,
    collection: "home",
    type: "Wall Art",
    size: "16×16",
    image: "assets/images/brume.jpg",
    badge: null,
    cardDesc: "16×16 canvas. The kind of piece that makes a room feel finished.",
    lead: "The kind of piece that makes a room feel finished.",
    body: "Brume — the kind of piece that makes a room feel finished. Made once, for one home. Yours.",
    bullets: ["16×16 in. stretched canvas", "Ready to hang", "Made to order — final sale"],
    sku: "CK-ART-BRUM-16",
    related: ["ondee-wall-art-small", "terre-wall-art-large", "arche-cushion-cover"]
  },
  {
    id: "terre-wall-art-large",
    name: "Terre Wall Art — Large",
    price: 129.99,
    collection: "home",
    type: "Wall Art",
    size: "24×36",
    image: "assets/images/terre.jpg",
    badge: "Statement",
    cardDesc: "24×36 canvas. A statement piece for the wall that sets the tone of the room.",
    lead: "A statement piece for the wall that sets the tone of the room.",
    body: "Terre — the kind of piece that makes a room feel finished. Made once, for one home. Yours.",
    bullets: ["24×36 in. stretched canvas", "Ready to hang", "Made to order — final sale"],
    sku: "CK-ART-TERR-2436",
    related: ["brume-wall-art-small", "ondee-wall-art-small", "dune-cushion-cover"]
  },
  {
    id: "lin-accent-rug",
    name: "Lin Accent Rug",
    price: 59.99,
    collection: "home",
    type: "Rug",
    size: "Accent",
    image: "assets/images/lin.jpg",
    badge: null,
    cardDesc: "Underfoot, in every room that needs to feel a little more like home.",
    lead: "Underfoot, in every room that needs to feel a little more like home.",
    body: "Lin underfoot, in every room that needs to feel a little more like home.",
    bullets: ["Accent size", "Non-slip backing", "Made to order — final sale"],
    sku: "CK-RUG-LIN-ACC",
    related: ["halo-accent-mat", "dune-cushion-cover", "solene-cushion-cover"]
  },
  {
    id: "halo-accent-mat",
    name: "Halo Accent Mat",
    price: 59.99,
    collection: "home",
    type: "Rug",
    size: "Accent",
    image: "assets/images/halo.jpg",
    badge: null,
    cardDesc: "A soft landing by the door, the bed, the bath.",
    lead: "A soft landing by the door, the bed, the bath.",
    body: "Halo underfoot, in every room that needs to feel a little more like home.",
    bullets: ["Accent size", "Non-slip backing", "Made to order — final sale"],
    sku: "CK-RUG-HALO-ACC",
    related: ["lin-accent-rug", "arche-cushion-cover", "ondee-wall-art-small"]
  },
  {
    id: "solene-cushion-cover",
    name: "Solène Cushion Cover",
    price: 49.99,
    collection: "home",
    type: "Cushion Cover",
    size: "18×18",
    image: "assets/images/solene.jpg",
    badge: null,
    cardDesc: "18×18. Warm clay and light — the last hour of afternoon sun.",
    lead: "Warm clay and light — the last hour of afternoon sun.",
    body: "Solène — made only for your space. A single design, never repeated, so this piece belongs to your home the way nothing off a shelf ever could.",
    bullets: ["18×18 in. cover", "Hidden zipper, insert not included", "Made to order — final sale"],
    sku: "CK-CUSH-SOLE-18",
    related: ["dune-cushion-cover", "arche-cushion-cover", "terre-wall-art-large"]
  },
  {
    id: "ondee-wall-art-small",
    name: "Ondée Wall Art — Small",
    price: 69.99,
    collection: "home",
    type: "Wall Art",
    size: "16×16",
    image: "assets/images/ondee.jpg",
    badge: null,
    cardDesc: "16×16 canvas. Quiet movement, like light on a wall in the morning.",
    lead: "Quiet movement, like light on a wall in the morning.",
    body: "Ondée — the kind of piece that makes a room feel finished. Made once, for one home. Yours.",
    bullets: ["16×16 in. stretched canvas", "Ready to hang", "Made to order — final sale"],
    sku: "CK-ART-ONDE-16",
    related: ["brume-wall-art-small", "terre-wall-art-large", "halo-accent-mat"]
  },
  {
    id: "pet-portrait-canvas",
    name: "Pet Portrait Canvas",
    price: 79.99,
    collection: "pet",
    type: "Pet Portrait",
    size: "16×16",
    image: "assets/images/pet-portrait.jpg",
    badge: "Send us a photo",
    cardDesc: "16×16. Upload a photo — we turn it into a piece made only for your home.",
    lead: "Upload a photo — we turn it into a piece made only for your home.",
    body: "A piece of them, always in the room with you. Upload a photo, and we turn it into art made only for your home — because they're part of it too.",
    bullets: [
      "16×16 in. stretched canvas",
      "Ready to hang",
      "Made by hand from your photo — allow a few extra days",
      "Made to order — final sale"
    ],
    sku: "CK-PET-PORT-16",
    photo: true,
    related: ["pet-name-blanket", "pet-photo-mat", "arche-cushion-cover"]
  },
  {
    id: "pet-name-blanket",
    name: "Pet Name Blanket",
    price: 89.99,
    collection: "pet",
    type: "Pet Blanket",
    size: "50×60",
    image: "assets/images/pet-blanket.jpg",
    badge: "Send us a photo",
    cardDesc: "50×60 sherpa. Their name, their colours, the warmest corner of the couch.",
    lead: "Their name, their colours, the warmest corner of the couch.",
    body: "Send us a photo and their name after checkout — we'll make the rest.",
    bullets: [
      "50×60 in. sherpa blanket",
      "Made by hand from your photo — allow a few extra days",
      "Made to order — final sale"
    ],
    sku: "CK-PET-BLKT-5060",
    photo: true,
    related: ["pet-portrait-canvas", "pet-photo-mat", "dune-cushion-cover"]
  },
  {
    id: "pet-photo-mat",
    name: "Pet Photo Mat",
    price: 59.99,
    collection: "pet",
    type: "Pet Mat",
    size: "Accent",
    image: "assets/images/pet-mat.jpg",
    badge: null,
    cardDesc: "A soft place by the bowl, made just for them.",
    lead: "A soft place by the bowl, made just for them.",
    body: "Send us a photo after checkout and we'll take care of the rest.",
    bullets: [
      "Accent size",
      "Non-slip backing",
      "Made by hand from your photo — allow a few extra days",
      "Made to order — final sale"
    ],
    sku: "CK-PET-MAT-ACC",
    photo: true,
    related: ["pet-portrait-canvas", "pet-name-blanket", "halo-accent-mat"]
  }
];

CK.bundles = [
  {
    id: "the-pair",
    name: "The Pair",
    tag: "Set of two",
    price: 84.98,
    compare: 99.98,
    save: "Save 15%",
    desc: "Any two cushion covers. Matched, or deliberately not.",
    cta: "Build your pair",
    contents: "Two cushion covers"
  },
  {
    id: "complete-the-room",
    name: "Complete the Room",
    tag: "Most popular",
    price: 96.78,
    compare: 109.98,
    save: "Save 12%",
    desc: "One cushion cover, one accent rug. The fastest way a corner starts to feel finished.",
    cta: "Shop the set",
    contents: "One cushion cover and one accent rug"
  },
  {
    id: "for-you-and-them",
    name: "For You and Them",
    tag: "For the whole household",
    price: 114.38,
    compare: 129.98,
    save: "Save 12%",
    desc: "One piece for your space, one portrait of the one who never leaves your side.",
    cta: "Shop the set",
    contents: "One home piece and one pet portrait"
  }
];

CK.productById = function (id) {
  return CK.products.find(function (p) { return p.id === id; }) ||
    CK.bundles.find(function (b) { return b.id === id; });
};

CK.money = function (n) {
  return "$" + n.toFixed(2);
};
