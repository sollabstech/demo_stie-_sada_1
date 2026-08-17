// TODO: Replace all placeholder text and product data with your
// client's real content before the live demo.
// Images below are royalty-free from Unsplash — safe for demo use.
// Swap each `image:` value with the client's real photography for production.

export const BRAND_NAME = "TECHSKIN"; // TODO: client brand name
export const ACCENT_COLOR = "#ff6a00"; // TODO: client accent color

// Unsplash base helper — keeps URLs DRY
const up = (id: string, w = 1400, h = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=85&fit=crop&auto=format`;

// ─── Hero Carousel Slides ──────────────────────────────────────────────────
export const heroSlides = [
  {
    id: 1,
    eyebrow: "New Drop — Limited Run",
    headline: "PROTECTION\nUNLEASHED.",
    description:
      "Precision-cut skins & cases built for your exact device. Bold. Precise. Made for the gadgets you refuse to baby.",
    ctaText: "SHOP NOW",
    ctaHref: "#",
    // Black iPhone on dark studio background — Unsplash @tata186
    image: up("1511707171634-5f897ff02aa9", 1400, 900),
    accentTag: "NEW",
  },
  {
    id: 2,
    eyebrow: "Best Seller — Over 2M Sold",
    headline: "THE SKIN\nTHAT FITS.",
    description:
      "Precision-cut for your exact model. No bubbles. No nonsense. Just an impossibly satisfying fit.",
    ctaText: "EXPLORE SKINS",
    ctaHref: "#",
    // Sleek black iPhone matte finish — Unsplash dark product
    image: up("1592899677977-9c10002761d5", 1400, 900),
    accentTag: "BEST SELLER",
  },
  {
    id: 3,
    eyebrow: "Grip. Protect. Flex.",
    headline: "CASES BUILT\nDIFFERENT.",
    description:
      "Drop protection that doesn't compromise style. Because 'functional ugly' was never a vibe.",
    ctaText: "VIEW CASES",
    ctaHref: "#",
    // OnePlus/Android phone product shot dark
    image: up("1601784551446-20c9e07cdbdb", 1400, 900),
    accentTag: "TRENDING",
  },
];

// ─── Category Grid ─────────────────────────────────────────────────────────
export const categories = [
  {
    id: 1,
    name: "DEVICE SKINS",
    blurb: "Precision-cut wrap for every gadget.",
    href: "#",
    // Minimalist black iPhone on dark surface
    image: up("1511707171634-5f897ff02aa9", 600, 450),
  },
  {
    id: 2,
    name: "PHONE CASES",
    blurb: "Drop protection, zero compromise.",
    href: "#",
    // OnePlus 9 Pro on black surface
    image: up("1601784551446-20c9e07cdbdb", 600, 450),
  },
  {
    id: 3,
    name: "SCREEN PROTECTORS",
    blurb: "Tempered glass meets ultra-clarity.",
    href: "#",
    // iPhone on dark table closeup
    image: up("1592899677977-9c10002761d5", 600, 450),
  },
  {
    id: 4,
    name: "LAPTOP WRAPS",
    blurb: "Your setup, your style.",
    href: "#",
    // Sleek laptop on gradient surface
    image: up("1593642632559-0c6d3fc62b89", 600, 450),
  },
  {
    id: 5,
    name: "CONTROLLER SKINS",
    blurb: "Console or PC — we got you.",
    href: "#",
    // Hands on dark game controller
    image: up("1542751371-adc38448a05e", 600, 450),
  },
  {
    id: 6,
    name: "ACCESSORIES",
    blurb: "MagSafe, grips, stands & more.",
    href: "#",
    // MacBook with neon accents on desk
    image: up("1496181133206-80ce9b88a853", 600, 450),
  },
];

// ─── Promo Sections ────────────────────────────────────────────────────────
export const promoSections = [
  {
    id: 1,
    eyebrow: "PRECISION MATTERS",
    headline: "Fits Your Device.\nNot Someone Else's.",
    description:
      "Every skin is cut with 0.1mm tolerance. We scan the exact model — not a generic template — so you get zero overhang, zero cutoff. It either fits perfectly or we re-cut it.",
    ctaText: "HOW IT'S MADE",
    ctaHref: "#",
    // Black iPhone product — tight fit theme
    image: up("1511707171634-5f897ff02aa9", 900, 700),
    imageLeft: true,
  },
  {
    id: 2,
    eyebrow: "TEXTURE & COLOR",
    headline: "Pick a Finish.\nOwn the Room.",
    description:
      "Matte black, carbon fiber, brushed metal, neon wrap — over 200 textures, all made to outlast whatever life throws at your gear.",
    ctaText: "BROWSE TEXTURES",
    ctaHref: "#",
    // MacBook laptop wrap — texture theme
    image: up("1593642632559-0c6d3fc62b89", 900, 700),
    imageLeft: false,
  },
  {
    id: 3,
    eyebrow: "ZERO RESIDUE REMOVAL",
    headline: "Change Your Mind.\nNot Your Device.",
    description:
      "Peels clean every time. No gunk, no sticky ghost, no regret. Upgrade your look whenever the mood strikes.",
    ctaText: "SHOP SKINS",
    ctaHref: "#",
    // Phone closeup dark
    image: up("1601784551446-20c9e07cdbdb", 900, 700),
    imageLeft: true,
  },
  {
    id: 4,
    eyebrow: "SCREEN PROTECTION",
    headline: "Glass So Clear,\nYou'll Forget It's There.",
    description:
      "Anti-glare, anti-smudge, anti-shatter. 9H hardness means one thing: whatever scratches it probably scratched your face first.",
    ctaText: "GET SCREEN SHIELD",
    ctaHref: "#",
    // Gaming controller — console protection
    image: up("1542751371-adc38448a05e", 900, 700),
    imageLeft: false,
  },
];

// ─── Testimonials ──────────────────────────────────────────────────────────
export const testimonials = [
  { id: 1, handle: "@techwithtara",   avatar: "TT", quote: "Fitted perfectly, no bubbles. Literally perfect." },
  { id: 2, handle: "@marcobuilds",    avatar: "MB", quote: "The carbon fiber skin is insane in person." },
  { id: 3, handle: "@jas_reviews",    avatar: "JR", quote: "Applied it in 3 minutes. Zero issues. 10/10." },
  { id: 4, handle: "@patchytech",     avatar: "PT", quote: "Setup looks completely different. 100% recommend." },
  { id: 5, handle: "@nomadnora",      avatar: "NN", quote: "Peeled off my old skin with no residue. Impressed." },
  { id: 6, handle: "@devsetup_king",  avatar: "DK", quote: "My desk setup — people keep asking about the wrap." },
  { id: 7, handle: "@thelunalab",     avatar: "LL", quote: "Finally a case that looks as good as it protects." },
  { id: 8, handle: "@codeflex_dan",   avatar: "CD", quote: "Fast ship, perfect fit. No notes. None." },
];

// ─── Category Mega Section ─────────────────────────────────────────────────
export const megaCategories = [
  {
    id: 1,
    title: "CASES",
    items: [
      { name: "SLIM ARMOR CASE", sub: "iPhone 15 Pro / Ultra-Slim", href: "#", image: up("1601784551446-20c9e07cdbdb", 600, 400) },
      { name: "GRIP CASE PRO",   sub: "Samsung S24 / Drop-Proof",  href: "#", image: up("1511707171634-5f897ff02aa9", 600, 400) },
      { name: "MAGSAFE CASE",    sub: "iPhone 14 & 15 / Magnetic", href: "#", image: up("1592899677977-9c10002761d5", 600, 400) },
    ],
  },
  {
    id: 2,
    title: "SCREEN PROTECTORS",
    items: [
      { name: "TEMPERED GLASS",  sub: "iPhone 15 Series / 9H",       href: "#", image: up("1601784551446-20c9e07cdbdb", 600, 400) },
      { name: "ANTI-GLARE FILM", sub: "Samsung / Matte Finish",       href: "#", image: up("1593642632559-0c6d3fc62b89", 600, 400) },
      { name: "PRIVACY SHIELD",  sub: "MacBook / 180° Privacy",       href: "#", image: up("1496181133206-80ce9b88a853", 600, 400) },
    ],
  },
  {
    id: 3,
    title: "SKINS",
    items: [
      { name: "CARBON FIBER SKIN", sub: "PS5 / Full Console Wrap",        href: "#", image: up("1542751371-adc38448a05e", 600, 400) },
      { name: "MATTE BLACK SKIN",  sub: "MacBook Air / Zero-Residue",      href: "#", image: up("1593642632559-0c6d3fc62b89", 600, 400) },
      { name: "BRUSHED METAL",     sub: "Steam Deck / Precision-Cut",      href: "#", image: up("1496181133206-80ce9b88a853", 600, 400) },
    ],
  },
];

// ─── Mock Cart Items ───────────────────────────────────────────────────────
export const mockCartItems = [
  {
    id: 1,
    name: "SLIM ARMOR CASE",
    variant: "Matte Black / iPhone 15 Pro",
    price: 29.95,
    qty: 1,
    image: up("1601784551446-20c9e07cdbdb", 120, 120),
  },
  {
    id: 2,
    name: "CARBON FIBER SKIN",
    variant: "PS5 / Full Console Wrap",
    price: 14.95,
    qty: 2,
    image: up("1542751371-adc38448a05e", 120, 120),
  },
];

// ─── Nav Links ─────────────────────────────────────────────────────────────
export const navLinks = [
  {
    label: "SKINS",
    href: "#",
    mega: [
      { col: "PHONE SKINS",     links: ["iPhone", "Samsung", "Google Pixel", "OnePlus"] },
      { col: "LAPTOP SKINS",    links: ["MacBook", "Dell XPS", "Surface", "ASUS ROG"] },
      { col: "CONSOLE SKINS",   links: ["PS5", "Xbox Series X", "Nintendo Switch", "Steam Deck"] },
    ],
  },
  {
    label: "CASES",
    href: "#",
    mega: [
      { col: "PHONE CASES",     links: ["iPhone Cases", "Samsung Cases", "Pixel Cases"] },
      { col: "FEATURES",        links: ["MagSafe", "Drop Protection", "Ultra-Slim", "Wallet Case"] },
    ],
  },
  {
    label: "SCREEN",
    href: "#",
    mega: [
      { col: "PROTECTORS",      links: ["Tempered Glass", "Anti-Glare", "Privacy Filter", "Full Coverage"] },
    ],
  },
  { label: "ACCESSORIES", href: "#", mega: [] },
  { label: "SALE",        href: "#", mega: [] },
];
