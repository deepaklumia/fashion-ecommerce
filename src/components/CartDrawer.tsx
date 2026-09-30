import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 99;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

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
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-luxury-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-terracotta-600" />
                  <span className="font-serif text-xl font-medium tracking-wide text-luxury-black">
                    Your Shopping Bag ({items.reduce((acc, i) => acc + i.quantity, 0)})
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 -mr-1 rounded-full text-luxury-black hover:bg-cream-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free shipping progress bar */}
              <div className="px-6 py-3 bg-cream-100 border-b border-luxury-border">
                <div className="flex items-center justify-between text-xs text-luxury-black mb-1.5 font-medium">
                  {subtotal >= freeShippingThreshold ? (
                    <span className="text-emerald-700">✦ You unlocked Complimentary White-Glove Shipping!</span>
                  ) : (
                    <span>
                      Add <span className="font-semibold text-terracotta-600">${(freeShippingThreshold - subtotal).toFixed(0)}</span> more for Free Shipping
                    </span>
                  )}
                  <span className="text-[10px] text-luxury-muted">{Math.round(progressToFreeShipping)}%</span>
                </div>
                <div className="w-full h-1.5 bg-cream-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-terracotta-500 rounded-full transition-all duration-300"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 no-scrollbar">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center text-luxury-muted mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-xl font-normal text-luxury-black mb-1">
                      Your bag is empty
                    </h4>
                    <p className="text-xs text-luxury-muted max-w-xs mb-6">
                      Explore our Autumn runway collection to discover bespoke luxury garments.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full bg-luxury-black text-white text-xs uppercase tracking-wider font-medium hover:bg-terracotta-600 transition-colors"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.product.id + (item.selectedColor || '')}
                      className="flex gap-4 p-3 rounded-2xl bg-white border border-luxury-border/60 shadow-2xs"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover rounded-xl"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h5 className="font-serif text-sm font-medium text-luxury-black line-clamp-1">
                              {item.product.name}
                            </h5>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-luxury-muted hover:text-red-600 p-1 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="text-[11px] text-luxury-muted block">
                            Color: {item.selectedColor || 'Signature'}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-luxury-border rounded-lg bg-cream-100 text-xs">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="px-2.5 py-1 hover:bg-cream-200 rounded-l-lg"
                            >
                              -
                            </button>
                            <span className="px-2 font-medium">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="px-2.5 py-1 hover:bg-cream-200 rounded-r-lg"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-serif text-sm font-semibold text-luxury-black">
                            ${item.product.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {items.length > 0 && (
                <div className="p-6 bg-cream-100 border-t border-luxury-border space-y-4">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-luxury-muted">
                      <span>Subtotal</span>
                      <span className="font-serif text-sm text-luxury-black">${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-luxury-muted">
                      <span>Estimated Shipping</span>
                      <span>{subtotal >= freeShippingThreshold ? 'FREE' : '$15'}</span>
                    </div>
                    <div className="border-t border-luxury-border pt-2 flex justify-between font-serif text-base font-bold text-luxury-black">
                      <span>Total Due</span>
                      <span>${subtotal >= freeShippingThreshold ? subtotal : subtotal + 15}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => alert('Proceeding to Luxury Encrypted Checkout...')}
                    className="w-full py-4 rounded-full bg-luxury-black text-white hover:bg-terracotta-600 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xl group"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-luxury-muted">
                    <ShieldCheck className="w-3.5 h-3.5 text-terracotta-600" />
                    <span>256-Bit Encrypted Luxury Checkout</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
