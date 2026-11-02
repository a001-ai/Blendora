/**
 * BLENDORA HUB - Product Catalog Data
 * Resin Earrings, Necklaces & Keyholders
 */

const PRODUCTS = [
  // --- EARRINGS ---
  {
    id: "earring-01",
    name: "Gilded Rose Petal Dangles",
    category: "earrings",
    price: 24.99,
    rating: 4.9,
    reviewsCount: 38,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    description: "Delicate genuine crimson rose petals suspended in high-clarity UV-resistant resin with 24k gold leaf foil flakes. Fitted with nickel-free hypoallergenic 14k gold-plated hooks.",
    materials: "Eco-Epoxy Resin, Dried Rose Petals, 24K Gold Leaf, 14K Gold-Filled Hooks",
    dimensions: "4.5cm drop length × 1.8cm width",
    weight: "3.2 grams (ultra lightweight)",
    customizable: true
  },
  {
    id: "earring-02",
    name: "Oceanic Wave Teardrop Drops",
    category: "earrings",
    price: 22.50,
    rating: 4.8,
    reviewsCount: 24,
    badge: "Staff Pick",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Capturing the crest of a deep sea tide. Hand-poured with deep azure alcohol inks and micro-foaming white pigments to recreate authentic shoreline crests.",
    materials: "Jewelry Grade Epoxy, Metallic Azure Pigment, Stainless Steel Bezel",
    dimensions: "3.8cm drop length × 1.5cm width",
    weight: "2.8 grams",
    customizable: false
  },
  {
    id: "earring-03",
    name: "Pressed Daisy Meadow Hoops",
    category: "earrings",
    price: 26.00,
    rating: 5.0,
    reviewsCount: 42,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1611591470404-33230a13346e?auto=format&fit=crop&w=800&q=80",
    description: "Hand-picked and dehydrated wild miniature daisies frozen in time inside crystal clear circular resin discs, hung on gold huggie hoops.",
    materials: "Real Pressed Wild Daisies, Non-yellowing Resin, 18k Gold Plated Huggies",
    dimensions: "3.0cm diameter disc",
    weight: "3.0 grams",
    customizable: true
  },
  {
    id: "earring-04",
    name: "Emerald Forest Hexagon Studs",
    category: "earrings",
    price: 18.00,
    rating: 4.7,
    reviewsCount: 19,
    badge: "New",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description: "Minimalist geometric studs with moss green resin base, preserved baby's breath sprigs, and polished metallic brass frames.",
    materials: "Dried Gypsophila (Baby's breath), Forest Green Mica, Brass Hexagon",
    dimensions: "1.2cm × 1.2cm stud",
    weight: "1.5 grams",
    customizable: false
  },
  {
    id: "earring-05",
    name: "Sunset Shimmer Arch Earrings",
    category: "earrings",
    price: 23.50,
    rating: 4.9,
    reviewsCount: 31,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80",
    description: "Art deco modern arch design featuring warm sunset terracotta, amber translucency, and warm copper leaf embellishments.",
    materials: "Copper Flakes, Amber Resin Tint, Titanium Posts (Hypoallergenic)",
    dimensions: "5.0cm drop length × 2.2cm width",
    weight: "3.5 grams",
    customizable: true
  },
  {
    id: "earring-06",
    name: "Celestial Midnight Star Drops",
    category: "earrings",
    price: 25.00,
    rating: 4.9,
    reviewsCount: 29,
    badge: "Limited Edition",
    image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?auto=format&fit=crop&w=800&q=80",
    description: "Deep obsidian translucent resin infused with fine holographic cosmic dust and miniature iridescent gold stars that glimmer under any light.",
    materials: "Holographic Micro-glitter, Star Sequins, 14k Gold Plated Hooks",
    dimensions: "4.0cm drop length",
    weight: "2.9 grams",
    customizable: false
  },

  // --- NECKLACES ---
  {
    id: "necklace-01",
    name: "Botanical Teardrop Terrarium Necklace",
    category: "necklaces",
    price: 34.00,
    rating: 5.0,
    reviewsCount: 57,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80",
    description: "A wearable micro-garden. Preserved maidenhair fern leaf, dried pink hydrangeas, and Queen Anne's lace blossom inside a faceted teardrop crystal resin pendant.",
    materials: "Real Fern & Hydrangea, Crystal Poly-Epoxy, 925 Sterling Silver Chain (18 inch)",
    dimensions: "3.5cm × 2.0cm pendant, 45cm adjustable chain",
    weight: "6.2 grams",
    customizable: true
  },
  {
    id: "necklace-02",
    name: "Forget-Me-Not Solitaire Locket",
    category: "necklaces",
    price: 32.00,
    rating: 4.9,
    reviewsCount: 46,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Preserved baby blue forget-me-not florets placed by hand inside a polished oval bezel with delicate gold leaf specks. Symbol of everlasting affection.",
    materials: "Natural Myosotis (Forget-Me-Nots), 14K Gold Plated Oval Pendant & Chain",
    dimensions: "2.8cm × 1.8cm pendant, 50cm chain",
    weight: "5.5 grams",
    customizable: true
  },
  {
    id: "necklace-03",
    name: "Cosmic Galaxy Opal Sphere",
    category: "necklaces",
    price: 36.50,
    rating: 4.8,
    reviewsCount: 33,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80",
    description: "A 3D spherical orb capturing a miniature swirl of shimmering nebula colors, synthetic aurora opal flakes, and violet starlight reflection.",
    materials: "Optically Clear Resin, Aurora Opal Flakes, Stainless Steel Snake Chain",
    dimensions: "1.8cm diameter orb, 48cm chain",
    weight: "7.0 grams",
    customizable: false
  },
  {
    id: "necklace-04",
    name: "Coastal Shore Driftwood Pendant",
    category: "necklaces",
    price: 38.00,
    rating: 4.9,
    reviewsCount: 22,
    badge: "Artisan Craft",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    description: "A hybrid fusion of natural weathered olive driftwood and turquoise ocean resin with micro wave lacing. Each piece is uniquely shaped by nature.",
    materials: "Reclaimed Driftwood, Ocean Aqua Epoxy Resin, Waxed Cotton Cord / Silver Chain",
    dimensions: "4.5cm × 1.5cm pendant bar",
    weight: "8.5 grams",
    customizable: true
  },
  {
    id: "necklace-05",
    name: "Blushing Rose & Gold Bar Necklace",
    category: "necklaces",
    price: 30.00,
    rating: 4.8,
    reviewsCount: 18,
    badge: "New",
    image: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&w=800&q=80",
    description: "A sleek horizontal resin bar encasing dried pink petals and floating flakes of 24k gold. Understated luxury for everyday elegance.",
    materials: "Pressed Rose Petals, 24k Gold Foil, Rose Gold Plated Cable Chain",
    dimensions: "3.2cm × 0.8cm horizontal bar",
    weight: "4.8 grams",
    customizable: true
  },

  // --- KEYHOLDERS & KEYCHAINS ---
  {
    id: "keychain-01",
    name: "Custom Initial Monogram Letter Keyholder",
    category: "keyholders",
    price: 16.50,
    rating: 5.0,
    reviewsCount: 114,
    badge: "Top Seller",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description: "Bespoke uppercase resin initial keychain filled with real dried flowers, metallic foil flakes, and finished with a matching suede tassel & gold lobster clasp.",
    materials: "Hard-Cure Scratch Resistant Resin, Real Flora, Gold/Silver Hardware, Suede Tassel",
    dimensions: "4.0cm height × 3.5cm width (letter dependent)",
    weight: "18.0 grams",
    customizable: true
  },
  {
    id: "keychain-02",
    name: "Botanical Shaker Liquid Keyholder",
    category: "keyholders",
    price: 19.50,
    rating: 4.9,
    reviewsCount: 41,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    description: "Interactive hollow-heart resin shaker filled with mineral oil, dried forget-me-nots, star glitter, and floating pearls that drift gently when shaken.",
    materials: "Resin Shaker Chamber, Baby Oil, Floating Petals, Heavy-Duty Swivel Clasp",
    dimensions: "4.8cm × 4.5cm heart chamber",
    weight: "24.0 grams",
    customizable: true
  },
  {
    id: "keychain-03",
    name: "Vintage Motel Aesthetic Key Tag",
    category: "keyholders",
    price: 18.00,
    rating: 4.8,
    reviewsCount: 35,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80",
    description: "Retro diamond-shaped hotel key tag in semi-opaque pastel resin with dried lavender sprigs and custom gold foil lettering (e.g. 'ROOM 101', 'DREAMER', or your custom text).",
    materials: "Epoxy Resin, Dried French Lavender, Custom Gold Vinyl Inlay, Brass Key Ring",
    dimensions: "9.0cm × 4.5cm diamond tag",
    weight: "20.0 grams",
    customizable: true
  },
  {
    id: "keychain-04",
    name: "Tropical Beach Wave Keyholder Charm",
    category: "keyholders",
    price: 17.00,
    rating: 4.9,
    reviewsCount: 28,
    badge: "New",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    description: "Real fine white sand gathered from tropical shores layered with vivid turquoise and ocean blue epoxy resin waves, paired with a miniature starfish charm.",
    materials: "Real Natural Beach Sand, Ocean Tinted Resin, Zinc Alloy Starfish Charm",
    dimensions: "5.0cm round disc",
    weight: "16.5 grams",
    customizable: false
  },
  {
    id: "keychain-05",
    name: "Daisy Blossom Wristlet Keyring",
    category: "keyholders",
    price: 21.00,
    rating: 4.9,
    reviewsCount: 52,
    badge: "Staff Pick",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
    description: "Keep your keys securely on your wrist in style. Features a 2-inch transparent resin daisy disc paired with comfortable BPA-free food-grade silicone beaded bracelet.",
    materials: "Cast Resin Daisy, Silicone Beads, Elastic Cord, Gold Keyring & Clasp",
    dimensions: "7.5cm wristlet diameter + 5.0cm resin charm",
    weight: "35.0 grams",
    customizable: true
  }
];

// Custom studio options
const CUSTOM_OPTIONS = {
  products: [
    { id: "custom-letter-keychain", name: "Custom Initial Letter Keychain", basePrice: 16.50, category: "keyholders" },
    { id: "custom-botanical-pendant", name: "Custom Botanical Pendant Necklace", basePrice: 32.00, category: "necklaces" },
    { id: "custom-statement-earrings", name: "Custom Teardrop Resin Earrings", basePrice: 24.00, category: "earrings" },
    { id: "custom-motel-tag", name: "Custom Engraved Motel Key Tag", basePrice: 18.00, category: "keyholders" }
  ],
  florals: [
    { id: "pink-rose", name: "Pressed Rose Petals", color: "#E07A8B" },
    { id: "forget-me-not", name: "Forget-Me-Nots (Sky Blue)", color: "#7BA8D2" },
    { id: "daisy", name: "Wild Daisies (White & Yellow)", color: "#F7E37C" },
    { id: "lavender", name: "French Dried Lavender", color: "#9B8ABF" },
    { id: "baby-breath", name: "Preserved Baby's Breath", color: "#F3F1EC" },
    { id: "green-fern", name: "Natural Forest Fern", color: "#5E8D67" }
  ],
  inclusions: [
    { id: "gold-flakes", name: "24K Gold Leaf Flakes (+ $2.00)", extra: 2.00 },
    { id: "silver-leaf", name: "Silver Leaf Flakes (+ $2.00)", extra: 2.00 },
    { id: "rose-gold-leaf", name: "Rose Gold Foil (+ $2.00)", extra: 2.00 },
    { id: "cosmic-glitter", name: "Holographic Celestial Glitter (+ $1.50)", extra: 1.50 },
    { id: "ocean-pigment", name: "Ocean Wave Mica Swirl (+ $2.50)", extra: 2.50 },
    { id: "pure-clarity", name: "Crystal Pure Transparency", extra: 0.00 }
  ],
  hardware: [
    { id: "gold", name: "14K Gold Plated / Brass Finish" },
    { id: "silver", name: "Silver / Polished Rhodium Finish" },
    { id: "rose-gold", name: "Rose Gold Plated Finish" }
  ]
};

// Currency rates relative to USD (1.0)
const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0, format: (val) => `$${val.toFixed(2)}` },
  GBP: { symbol: "£", rate: 0.79, format: (val) => `£${val.toFixed(2)}` },
  EUR: { symbol: "€", rate: 0.92, format: (val) => `€${val.toFixed(2)}` },
  NGN: { symbol: "₦", rate: 1450.0, format: (val) => `₦${Math.round(val).toLocaleString()}` }
};
