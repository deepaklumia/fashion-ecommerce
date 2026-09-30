import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size?: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : '');
  const [activeImage, setActiveImage] = useState(product.image);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-cream-50 rounded-3xl overflow-hidden shadow-2xl border border-luxury-border my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-luxury-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Image Gallery (6 cols) */}
            <div className="md:col-span-6 bg-cream-200 p-6 flex flex-col justify-between">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-cream-300 relative shadow-inner">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Thumbnail row */}
              {product.secondaryImage && (
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setActiveImage(product.image)}
                    className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === product.image ? 'border-terracotta-500 scale-105' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={product.image} alt="front" className="w-full h-full object-cover" />
                  </button>
                  <button
                    onClick={() => setActiveImage(product.secondaryImage!)}
                    className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === product.secondaryImage ? 'border-terracotta-500 scale-105' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={product.secondaryImage} alt="detail" className="w-full h-full object-cover" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Details (6 cols) */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-terracotta-600 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> {product.category}
                  </span>
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className="p-1.5 text-luxury-muted hover:text-terracotta-600 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isWishlisted ? 'fill-terracotta-600 text-terracotta-600' : ''
                      }`}
                    />
                  </button>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-luxury-black mb-3">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="text-xs font-semibold text-luxury-black">{product.rating}</span>
                  </div>
                  <span className="text-xs text-luxury-muted">
                    ({product.reviewsCount} verified reviews)
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-serif text-2xl font-bold text-luxury-black">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-luxury-muted line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed font-light mb-6">
                  {product.description ||
                    'Artisanal tailoring constructed with meticulous attention to line, balance, and tactile softness.'}
                </p>

                {/* Color Selector */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider font-semibold text-luxury-black block mb-2">
                    Color: <span className="font-normal text-luxury-muted">{selectedColor}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        style={{ backgroundColor: c.hex }}
                        className={`w-7 h-7 rounded-full border transition-all ${
                          selectedColor === c.name
                            ? 'scale-110 ring-2 ring-offset-2 ring-terracotta-500 border-white'
                            : 'border-black/20 hover:scale-105'
                        }`}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                {product.sizes && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-luxury-black">
                        Select Size
                      </span>
                      <button
                        onClick={() => alert('Size Guide: Standard European Couture Sizing.')}
                        className="text-[11px] text-terracotta-600 underline"
                      >
                        Size Guide
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                            selectedSize === s
                              ? 'bg-luxury-black text-white border-luxury-black'
                              : 'bg-white text-luxury-black border-luxury-border hover:border-black'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-luxury-border space-y-3">
                <button
                  onClick={handleAdd}
                  className={`w-full py-4 rounded-full font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all ${
                    added
                      ? 'bg-emerald-700 text-white'
                      : 'bg-luxury-black text-white hover:bg-terracotta-600'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Your Shopping Bag</span>
                    </>
                  ) : (
                    <>
                      <span>Add to Bag • ${product.price}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-luxury-muted">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-terracotta-600" />
                    <span>Complimentary Insured Courier</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
