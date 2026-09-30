import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  ChevronDown,
} from 'lucide-react';
import { AnnouncementBar } from './AnnouncementBar';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from './SearchOverlay';
import { ScrollProgress } from './ScrollProgress';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { Product } from '../types';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSelectProduct?: (product: Product) => void;
  onNavigateSection?: (sectionId: string) => void;
}

type MegaMenuKey = 'Women' | 'Dresses' | 'Accessories' | null;

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSelectProduct,
  onNavigateSection,
}) => {
  const { scrollingDown, atTop, isPastThreshold } = useScrollDirection(80);

  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuKey>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine if navbar should be hidden when scrolling down
  // Near page top (atTop) it's ALWAYS visible.
  // When scrolling down past threshold, hide gently. When scrolling up, glide back in.
  const shouldHideNavbar = !atTop && scrollingDown && !activeMegaMenu && !isSearchOpen;

  const navItems: { label: string; key: MegaMenuKey | 'New' | 'Tops' | 'Bottoms'; hasMega: boolean }[] = [
    { label: 'New In', key: 'New', hasMega: false },
    { label: 'Women', key: 'Women', hasMega: true },
    { label: 'Dresses', key: 'Dresses', hasMega: true },
    { label: 'Tops', key: 'Tops', hasMega: false },
    { label: 'Bottoms', key: 'Bottoms', hasMega: false },
    { label: 'Accessories', key: 'Accessories', hasMega: true },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-transform">
        {/* Top Announcement Bar - visible only when near top */}
        <AnnouncementBar isVisible={atTop} />

        {/* Main Sticky Navbar with Motion */}
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: shouldHideNavbar ? '-100%' : '0%',
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          onMouseLeave={() => setActiveMegaMenu(null)}
          className={`relative w-full transition-all duration-300 ${
            isPastThreshold
              ? 'bg-cream-100/90 backdrop-blur-xl border-b border-luxury-border/80 shadow-luxury'
              : 'bg-cream-100/70 backdrop-blur-md border-b border-transparent'
          }`}
        >
          {/* Scroll progress bar attached to navbar */}
          <ScrollProgress />

          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
              isPastThreshold ? 'h-[60px]' : 'h-[76px]'
            }`}
          >
            {/* Mobile: Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 rounded-full text-luxury-black hover:bg-cream-200 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* LEFT / LOGO: Luxury fashion wordmark */}
            <div className="flex items-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex flex-col items-center lg:items-start select-none"
              >
                <motion.span
                  animate={{
                    fontSize: isPastThreshold ? '1.35rem' : '1.65rem',
                    letterSpacing: isPastThreshold ? '0.22em' : '0.28em',
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-serif font-semibold text-luxury-black leading-none uppercase group-hover:text-terracotta-600 transition-colors"
                >
                  AURELIA
                </motion.span>
                <span className="text-[8.5px] uppercase tracking-[0.38em] text-luxury-muted font-sans font-medium mt-0.5">
                  Haute Époque
                </span>
              </a>
            </div>

            {/* CENTER: Navigation Links */}
            <nav className="hidden lg:flex items-center justify-center space-x-1">
              <div
                className={`flex items-center transition-all duration-300 ${
                  isPastThreshold ? 'space-x-5' : 'space-x-8'
                }`}
              >
                {navItems.map((item) => {
                  const isMega = item.hasMega;
                  const isActive = activeMegaMenu === item.key;

                  return (
                    <div
                      key={item.label}
                      className="relative py-2"
                      onMouseEnter={() => {
                        if (isMega) {
                          setActiveMegaMenu(item.key as MegaMenuKey);
                        } else {
                          setActiveMegaMenu(null);
                        }
                      }}
                    >
                      <button
                        onClick={() => {
                          if (isMega) {
                            setActiveMegaMenu(isActive ? null : (item.key as MegaMenuKey));
                          } else {
                            onNavigateSection?.(item.label.toLowerCase());
                          }
                        }}
                        className={`group relative text-[13px] uppercase tracking-[0.16em] font-medium transition-colors flex items-center gap-1 py-1 ${
                          isActive ? 'text-terracotta-600 font-semibold' : 'text-luxury-black/90 hover:text-black'
                        }`}
                      >
                        <span className="relative">
                          {item.label}
                          {/* Animated underline */}
                          <span
                            className={`absolute left-0 -bottom-1 h-[1.5px] bg-terracotta-600 transition-all duration-300 origin-left ${
                              isActive ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}
                          />
                        </span>
                        {isMega && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-300 opacity-60 group-hover:opacity-100 ${
                              isActive ? 'rotate-180 text-terracotta-600' : ''
                            }`}
                          />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* RIGHT: Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Rounded search bar trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-cream-200/70 hover:bg-cream-200 text-luxury-muted hover:text-luxury-black border border-luxury-border/60 transition-all duration-200 ${
                  isPastThreshold ? 'text-xs' : 'text-xs'
                }`}
                aria-label="Search collection"
              >
                <Search className="w-3.5 h-3.5 text-luxury-muted" />
                <span className="hidden md:inline font-sans tracking-wide text-luxury-muted/90 pr-2">
                  Search...
                </span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.2 text-[9px] bg-white rounded border border-luxury-border text-luxury-muted font-sans shadow-2xs">
                  ⌘K
                </kbd>
              </button>

              {/* Account icon */}
              <button
                onClick={() => alert('Account portal: Welcome to Aurelia Privilege Members.')}
                className="p-2 rounded-full text-luxury-black hover:bg-cream-200 transition-colors"
                aria-label="Account"
              >
                <User className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>

              {/* Wishlist icon with badge */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2 rounded-full text-luxury-black hover:bg-cream-200 transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                {wishlistCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 w-4 h-4 rounded-full bg-terracotta-500 text-white text-[9px] font-bold flex items-center justify-center shadow-xs"
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </button>

              {/* Shopping bag icon with small cart-count badge */}
              <button
                onClick={onOpenCart}
                className="relative p-2 rounded-full text-luxury-black hover:bg-cream-200 transition-colors"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-luxury-black text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>

          {/* Active Mega Menu Dropdown */}
          <AnimatePresence>
            {activeMegaMenu && (
              <MegaMenu
                category={activeMegaMenu}
                onClose={() => setActiveMegaMenu(null)}
                onNavigate={(cat) => onNavigateSection?.(cat)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={onSelectProduct}
      />

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={(cat) => onNavigateSection?.(cat)}
        onOpenWishlist={onOpenWishlist}
        wishlistCount={wishlistCount}
      />
    </>
  );
};
