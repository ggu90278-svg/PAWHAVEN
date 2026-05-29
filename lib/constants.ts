const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}

export const SITE_NAME = "PAWHAVEN";
export const SITE_URL = "https://pawhaven.com";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "OEM / ODM", href: "#oem-odm" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_FEATURES = [
  { label: "Safe Materials", icon: "Shield" },
  { label: "Premium Quality", icon: "Award" },
  { label: "Private Label", icon: "Tag" },
  { label: "Custom Packaging", icon: "Package" },
] as const;

export const TRUST_BADGES = [
  { title: "OEM / ODM Support", description: "Full manufacturing & development partnership", icon: "Factory" },
  { title: "Low MOQ", description: "Flexible minimum order quantities for growing brands", icon: "Layers" },
  { title: "Global Supply", description: "Reliable export logistics to markets worldwide", icon: "Globe" },
  { title: "Premium Quality", description: "Rigorous quality control at every production stage", icon: "Gem" },
  { title: "Custom Packaging", description: "Branded packaging tailored to your market", icon: "Box" },
  { title: "Fast Response", description: "Dedicated team for quick inquiries & samples", icon: "Zap" },
] as const;

export const FEATURED_PRODUCTS = [
  {
    title: "Adjustable Dog Harness",
    category: "Pet Harness",
    image: asset("/images/products/harness.png"),
  },
  {
    title: "De-shedding Grooming Brush",
    category: "Grooming Tools",
    image: asset("/images/products/grooming-brush.png"),
  },
  {
    title: "Wooden Scratching Post & Toy",
    category: "Cat Furniture",
    image: asset("/images/products/scratching-post.png"),
  },
  {
    title: "Pet Dental Care Brushes",
    category: "Grooming Tools",
    image: asset("/images/products/toothbrush.png"),
  },
  {
    title: "Auto Feeder & Water Station",
    category: "Pet Bowls",
    image: asset("/images/products/feeder.png"),
  },
  {
    title: "Plush Donut Pet Toys",
    category: "Pet Toys",
    image: asset("/images/products/plush-toys.png"),
  },
  {
    title: "Elevated Pet Bed",
    category: "Pet Beds",
    image: asset("/images/products/pet-bed.png"),
  },
  {
    title: "Cat Collar with Bow Tie",
    category: "Pet Collars",
    image: asset("/images/products/cat-collar.png"),
  },
  {
    title: "L-Shaped Cat Tunnel Bed",
    category: "Pet Beds",
    image: asset("/images/products/tunnel-bed.png"),
  },
] as const;

export const WHY_CHOOSE_US = [
  "High-quality materials",
  "Comfortable design",
  "Easy to clean",
  "Durable structure",
  "OEM customization",
  "Strict quality control",
  "Flexible packaging",
  "Reliable export service",
] as const;

export const OEM_SERVICES = [
  {
    title: "OEM Manufacturing",
    description: "Produce products to your exact specifications with our advanced manufacturing capabilities.",
    icon: "Factory",
  },
  {
    title: "ODM Development",
    description: "Collaborate on product design and development from concept to finished product.",
    icon: "Lightbulb",
  },
  {
    title: "Logo Printing",
    description: "High-quality logo application on products and packaging for brand consistency.",
    icon: "Stamp",
  },
  {
    title: "Custom Packaging",
    description: "Tailored packaging solutions that elevate your brand on retail shelves.",
    icon: "Package",
  },
  {
    title: "Product Customization",
    description: "Materials, colors, sizes, and features customized to your market needs.",
    icon: "Palette",
  },
  {
    title: "Private Label Service",
    description: "Complete private label programs for distributors and retail brands.",
    icon: "Tag",
  },
] as const;

export const FOOTER_LINKS = [
  { label: "OEM / ODM Support", href: "#oem-odm" },
  { label: "Private Label Service", href: "#oem-odm" },
  { label: "Quality Assurance", href: "#why-us" },
  { label: "Global Export", href: "#contact" },
] as const;

export const WHATSAPP_NUMBER = "+8613523697447";
export const WHATSAPP_DISPLAY = "+86 13523697447";
export const CONTACT_EMAIL = "ggu97208@gmail.com";
