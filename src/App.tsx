import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { CategoryCarousel } from './components/CategoryCarousel';
import { EditorialGrid } from './components/EditorialGrid';
import { ProductCarousel } from './components/ProductCarousel';
import { CampaignBanner } from './components/CampaignBanner';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { PRODUCTS } from './data/mockData';
import { Product, CartItem } from './types';

export function App() {
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 1,
      selectedColor: 'Terracotta',
      selectedSize: 'S',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>([PRODUCTS[1].id, PRODUCTS[3].id]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Quick view modal
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product, color?: string, size?: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedColor === color
      );
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedColor: color || product.colors[0]?.name,
          selectedSize: size || (product.sizes ? product.sizes[0] : undefined),
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const handleMoveWishlistToBag = (product: Product) => {
    handleAddToCart(product);
    setWishlist((prev) => prev.filter((id) => id !== product.id));
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'new') {
      const el = document.getElementById('featured-products');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'categories' || sectionId === 'women' || sectionId === 'dresses') {
      const el = document.getElementById('categories');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('editorial-grid');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream-100 flex flex-col selection:bg-terracotta-500 selection:text-white">
      {/* Scroll-Responsive Luxury Navbar */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectProduct={(prod) => setQuickViewProduct(prod)}
        onNavigateSection={scrollToSection}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (Terracotta background with stacked modern style title and model) */}
        <HeroSection
          onShopClick={() => {
            const el = document.getElementById('featured-products');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Trust Strip (4 Minimal USPs) */}
        <TrustStrip />

        {/* 3. Shop By Category (Circular Cards Carousel) */}
        <CategoryCarousel
          onSelectCategory={(category) => {
            scrollToSection(category);
          }}
        />

        {/* 4. Editorial Promo Grid (Dual Large Rounded Cards: Women's & Accessories) */}
        <EditorialGrid
          onShopCategory={(cat) => {
            scrollToSection(cat);
          }}
        />

        {/* 5. Featured Products (Iconic Pieces with Wishlist, Color Swatches, Quick-Add) */}
        <ProductCarousel
          products={PRODUCTS}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onQuickAdd={(prod, color) => handleAddToCart(prod, color)}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />

        {/* 6. Large Campaign Banner (Burnt Orange Handbag & Objects Campaign) */}
        <CampaignBanner
          onExplore={() => {
            const el = document.getElementById('featured-products');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 7. Newsletter Section (Minimal Ivory Section) */}
        <NewsletterSection />
      </main>

      {/* 8. Dark Premium Footer */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Interactive Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={PRODUCTS.filter((p) => wishlist.includes(p.id))}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToBag={handleMoveWishlistToBag}
      />

      {/* Quick View Editorial Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
