import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, User, Heart, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { MEGA_MENU_DATA } from '../data/mockData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (item: string) => void;
  onOpenWishlist?: () => void;
  wishlistCount?: number;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenWishlist,
  wishlistCount = 0,
}) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (cat: string) => {
    setExpandedCategory(expandedCategory === cat ? null : cat);
  };

  const navLinks = [
    { name: 'New Arrivals', key: 'New', expandable: false },
    { name: 'Women', key: 'Women', expandable: true },
    { name: 'Dresses', key: 'Dresses', expandable: true },
    { name: 'Tops', key: 'Tops', expandable: false },
    { name: 'Bottoms', key: 'Bottoms', expandable: false },
    { name: 'Accessories', key: 'Accessories', expandable: true },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 bottom-0 left-0 w-full max-w-sm bg-cream-50 z-50 flex flex-col justify-between shadow-2xl overflow-y-auto"
          >
            <div>
              {/* Top header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-luxury-border">
                <span className="font-serif text-xl tracking-[0.15em] font-semibold text-luxury-black">
                  AURELIA
                </span>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-full text-luxury-black hover:bg-cream-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="px-6 py-6 space-y-2">
                <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-terracotta-600 mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> Navigation
                </div>

                {navLinks.map((item) => {
                  const hasSub = item.expandable && (MEGA_MENU_DATA as any)[item.key];
                  const isExpanded = expandedCategory === item.key;

                  return (
                    <div key={item.key} className="border-b border-luxury-border/40 pb-2">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            if (!hasSub) {
                              onNavigate?.(item.key);
                              onClose();
                            } else {
                              toggleCategory(item.key);
                            }
                          }}
                          className="font-serif text-2xl py-2 text-luxury-black hover:text-terracotta-600 transition-colors tracking-wide text-left flex-1"
                        >
                          {item.name}
                        </button>
                        {hasSub && (
                          <button
                            onClick={() => toggleCategory(item.key)}
                            className="p-2 text-luxury-muted hover:text-luxury-black"
                            aria-label={`Expand ${item.name}`}
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180 text-terracotta-600' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Expandable sub-items */}
                      {hasSub && isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 py-2 space-y-2.5 overflow-hidden"
                        >
                          {(MEGA_MENU_DATA as any)[item.key].categories.map(
                            (sub: any, sIdx: number) => (
                              <button
                                key={sIdx}
                                onClick={() => {
                                  onNavigate?.(sub.name);
                                  onClose();
                                }}
                                className="block w-full text-left text-sm text-luxury-muted hover:text-luxury-black py-1 transition-colors"
                              >
                                {sub.name}
                              </button>
                            )
                          )}
                          <button
                            onClick={() => {
                              onNavigate?.(item.key);
                              onClose();
                            }}
                            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-terracotta-600 pt-2"
                          >
                            <span>Explore All {item.name}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="p-6 bg-cream-100 border-t border-luxury-border space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <button
                  onClick={() => {
                    onClose();
                  }}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-luxury-border hover:border-terracotta-500 transition-colors"
                >
                  <User className="w-5 h-5 text-luxury-black mb-1" />
                  <span className="text-[11px] font-medium text-luxury-black">Account</span>
                </button>
                <button
                  onClick={() => {
                    onOpenWishlist?.();
                    onClose();
                  }}
                  className="relative flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-luxury-border hover:border-terracotta-500 transition-colors"
                >
                  <Heart className="w-5 h-5 text-luxury-black mb-1" />
                  <span className="text-[11px] font-medium text-luxury-black">Wishlist</span>
                  {wishlistCount > 0 && (
                    <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-terracotta-500 text-white text-[9px] font-bold flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-luxury-border hover:border-terracotta-500 transition-colors"
                >
                  <HelpCircle className="w-5 h-5 text-luxury-black mb-1" />
                  <span className="text-[11px] font-medium text-luxury-black">Help</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-luxury-muted font-serif italic">
                Aurelia & Co. • Maison de Haute Couture
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
