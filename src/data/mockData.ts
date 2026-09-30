import { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'dresses',
    name: 'Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
    itemCount: '124 styles',
  },
  {
    id: 'tops',
    name: 'Tops',
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=600&q=80',
    itemCount: '86 styles',
  },
  {
    id: 'bottoms',
    name: 'Bottoms',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80',
    itemCount: '62 styles',
  },
  {
    id: 'bags',
    name: 'Bags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    itemCount: '48 styles',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
    itemCount: '95 styles',
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
    itemCount: '73 styles',
  },
  {
    id: 'beauty',
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    itemCount: '40 styles',
  },
  {
    id: 'footwear',
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80',
    itemCount: '55 styles',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Sienna Silk Pleated Midi Dress',
    category: 'Dresses',
    price: 490,
    originalPrice: 580,
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85',
    badge: 'NEW',
    description: 'Sculpted from luminous Mulberry silk with fluid micro-pleats and an asymmetric neckline tailored for evening movement.',
    colors: [
      { name: 'Terracotta', hex: '#D85A16' },
      { name: 'Cream Ivory', hex: '#F8F5EF' },
      { name: 'Midnight Black', hex: '#111111' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'prod-2',
    name: 'Sculpted Double-Breasted Blazer',
    category: 'Tops',
    price: 680,
    rating: 5.0,
    reviewsCount: 84,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85',
    badge: 'BESTSELLER',
    description: 'Architectural shoulder lines, horn button closure, and precision Italian wool flannel with satin inner lining.',
    colors: [
      { name: 'Oatmeal Tweed', hex: '#D9CDBF' },
      { name: 'Charcoal', hex: '#2B2B2B' },
      { name: 'Burnt Ochre', hex: '#C84A0A' },
    ],
    sizes: ['36', '38', '40', '42'],
  },
  {
    id: 'prod-3',
    name: 'Paloma Calfskin Structured Bag',
    category: 'Bags',
    price: 820,
    rating: 4.8,
    reviewsCount: 96,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
    badge: 'LIMITED',
    description: 'Hand-finished Tuscan calfskin leather with brushed gold hardware and signature arched handle silhouette.',
    colors: [
      { name: 'Warm Terracotta', hex: '#C84A0A' },
      { name: 'Desert Cognac', hex: '#8B4513' },
      { name: 'Noir', hex: '#111111' },
    ],
  },
  {
    id: 'prod-4',
    name: 'Aurelia Tortoiseshell Sunglasses',
    category: 'Accessories',
    price: 320,
    rating: 4.9,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=85',
    badge: 'RUNWAY',
    description: 'Custom Japanese acetate frame, beveled cat-eye edge, with 100% UV category 3 bronze tint lenses.',
    colors: [
      { name: 'Amber Tortoise', hex: '#7A481F' },
      { name: 'Pitch Black', hex: '#111111' },
      { name: 'Champagne Crystal', hex: '#EAD7BA' },
    ],
  },
  {
    id: 'prod-5',
    name: 'Pure Cashmere Relaxed Turtleneck',
    category: 'Tops',
    price: 540,
    originalPrice: 620,
    rating: 4.9,
    reviewsCount: 77,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85',
    badge: 'BESTSELLER',
    description: 'Spun from grade-A Mongolian cashmere with ribbed trims, dropped shoulders, and ultra-soft hand feel.',
    colors: [
      { name: 'Sand Dune', hex: '#E8DEC8' },
      { name: 'Espresso', hex: '#3B2F2F' },
      { name: 'Burnt Amber', hex: '#D85A16' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 'prod-6',
    name: 'Verona Pleated Wide-Leg Trouser',
    category: 'Bottoms',
    price: 420,
    rating: 4.7,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=85',
    badge: 'NEW',
    description: 'High-rise silhouette with deep front pleats, fluid drape virgin wool blend, and concealed zip pocketing.',
    colors: [
      { name: 'Ivory Cream', hex: '#F5EFE6' },
      { name: 'Charcoal Grey', hex: '#2F3136' },
      { name: 'Camel', hex: '#B8864E' },
    ],
    sizes: ['34', '36', '38', '40'],
  },
];

export const MEGA_MENU_DATA = {
  Women: {
    title: "Women's Universe",
    categories: [
      { name: 'New Arrivals', isNew: true },
      { name: 'Coats & Outerwear', isNew: false },
      { name: 'Tailoring & Suits', isNew: false },
      { name: 'Dresses & Gowns', isNew: false },
      { name: 'Cashmere & Knitwear', isNew: false },
      { name: 'Trousers & Skirts', isNew: false },
      { name: 'Silk Blouses', isNew: false },
    ],
    featured: [
      {
        title: 'Autumnal Elegance Edit',
        subtitle: 'Effortless silhouettes in warm ochre & terracotta',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'The Monolith Coat',
        subtitle: 'Italian double-faced virgin wool investment pieces',
        image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80',
      }
    ],
    campaign: {
      headline: 'RUNWAY LOOK 07',
      tagline: 'Sculpted minimalist tailoring for the bold feminine spirit.',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
      cta: 'Explore Collection'
    }
  },
  Dresses: {
    title: 'Curated Silhouettes',
    categories: [
      { name: 'Midi Dresses', isNew: false },
      { name: 'Pleated Evening Gowns', isNew: true },
      { name: 'Silk Slip Dresses', isNew: false },
      { name: 'Architectural Shirtdresses', isNew: false },
      { name: 'Cashmere Knit Dresses', isNew: false },
      { name: 'Occasion & Gala', isNew: false },
    ],
    featured: [
      {
        title: 'The Terracotta Slip',
        subtitle: '100% bias-cut Mulberry silk',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Draped Column Silhouettes',
        subtitle: 'Fluid movement from day to midnight',
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80',
      }
    ],
    campaign: {
      headline: 'THE SILK EDIT',
      tagline: 'Effortless grace crafted with time-honored couture techniques.',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      cta: 'Shop Evening'
    }
  },
  Accessories: {
    title: 'Objects of Desire',
    categories: [
      { name: 'Artisan Leather Bags', isNew: true },
      { name: 'Sculptural Jewelry', isNew: false },
      { name: 'Handcrafted Eyewear', isNew: false },
      { name: 'Fine Silk Scarves', isNew: false },
      { name: 'Belts & Small Leather Goods', isNew: false },
      { name: 'Fine Fragrance & Oils', isNew: true },
    ],
    featured: [
      {
        title: 'The Paloma Handbag',
        subtitle: 'Crafted in Florence, Italy',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
      },
      {
        title: '24k Vermeil Sculptures',
        subtitle: 'Wearable art inspired by Brâncuși',
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
      }
    ],
    campaign: {
      headline: 'LEATHER & GOLD',
      tagline: 'Details that define the aura of luxury.',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
      cta: 'View Accents'
    }
  }
};

export const SEARCH_SUGGESTIONS = [
  'Linen Dresses',
  'Shoulder Bags',
  'Sunglasses',
  'Summer Collection',
  'Double-Breasted Blazer',
  'Cashmere Knitwear',
  'Terracotta Slip Dress',
  'Calfskin Leather',
];
