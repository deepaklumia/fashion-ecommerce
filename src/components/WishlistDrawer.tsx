import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onRemoveFromWishlist: (product: Product) => void;
  onMoveToBag: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onMoveToBag,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-screen max-w-md bg-cream-50 flex flex-col justify-between shadow-2xl"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-luxury-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-terracotta-600 fill-terracotta-600" />
                  <span className="font-serif text-xl font-medium tracking-wide text-luxury-black">
                    Saved Pieces ({wishlistItems.length})
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 -mr-1 rounded-full text-luxury-black hover:bg-cream-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 no-scrollbar">
                {wishlistItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center text-luxury-muted mb-4">
                      <Heart className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-xl font-normal text-luxury-black mb-1">
                      Your wishlist is empty
                    </h4>
                    <p className="text-xs text-luxury-muted max-w-xs mb-6">
                      Click the heart on any garment or accessory to curate your personal runway collection.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full bg-luxury-black text-white text-xs uppercase tracking-wider font-medium hover:bg-terracotta-600 transition-colors"
                    >
                      Browse Collection
                    </button>
                  </div>
                ) : (
                  wishlistItems.map((prod) => (
                    <div
                      key={prod.id}
                      className="flex gap-4 p-3 rounded-2xl bg-white border border-luxury-border/60 shadow-2xs"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-20 h-24 object-cover rounded-xl"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h5 className="font-serif text-sm font-medium text-luxury-black line-clamp-1">
                              {prod.name}
                            </h5>
                            <button
                              onClick={() => onRemoveFromWishlist(prod)}
                              className="text-luxury-muted hover:text-red-600 p-1 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="text-xs font-serif font-semibold text-luxury-black mt-1 block">
                            ${prod.price}
                          </span>
                        </div>

                        <div className="mt-2">
                          <button
                            onClick={() => onMoveToBag(prod)}
                            className="w-full py-2 px-3 rounded-lg bg-luxury-black text-white hover:bg-terracotta-600 text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <ShoppingBag className="w-3 h-3" />
                            <span>Move to Bag</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom */}
              {wishlistItems.length > 0 && (
                <div className="p-6 bg-cream-100 border-t border-luxury-border">
                  <button
                    onClick={() => {
                      wishlistItems.forEach(i => onMoveToBag(i));
                      onClose();
                    }}
                    className="w-full py-4 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    <span>Move All Items to Bag</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
