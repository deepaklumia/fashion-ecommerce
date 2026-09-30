import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { SEARCH_SUGGESTIONS, PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (product: Product) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, onSelectProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearchTerm('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const filteredProducts = searchTerm.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Search Box Surface */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full bg-[#F8F5EF] border-b border-luxury-border shadow-2xl px-4 sm:px-8 py-8 sm:py-12"
          >
            <div className="max-w-4xl mx-auto">
              {/* Header & Close */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-terracotta-600 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Luxury Discovery
                </span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-cream-200 text-luxury-black transition-colors"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Big Editorial Search Input */}
              <div className="relative mb-8">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-luxury-muted pointer-events-none" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search silhouettes, blazers, calfskin bags..."
                  className="w-full pl-10 pr-12 py-3 bg-transparent border-b-2 border-luxury-black/30 focus:border-terracotta-500 text-xl sm:text-3xl font-serif text-luxury-black placeholder:text-luxury-muted/50 focus:outline-none transition-colors"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider text-luxury-muted hover:text-luxury-black"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Suggestions vs Results */}
              {searchTerm.trim().length === 0 ? (
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-luxury-muted mb-4 font-semibold">
                    Popular Searches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {SEARCH_SUGGESTIONS.map((tag, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSearchTerm(tag)}
                        className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream-200/80 hover:bg-terracotta-500 hover:text-white text-xs text-luxury-black tracking-wide transition-all duration-200"
                      >
                        <span>{tag}</span>
                        <ArrowUpRight className="w-3 h-3 text-luxury-muted group-hover:text-white transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs uppercase tracking-widest text-luxury-muted font-semibold">
                      Products Found ({filteredProducts.length})
                    </h4>
                  </div>
                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto pr-2 no-scrollbar">
                      {filteredProducts.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => {
                            onSelectProduct?.(prod);
                            onClose();
                          }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-cream-200/70 border border-luxury-border/50 cursor-pointer transition-colors group"
                        >
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-16 h-20 object-cover rounded-lg"
                          />
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-terracotta-600 font-semibold block">
                              {prod.category}
                            </span>
                            <h5 className="font-serif text-sm font-medium text-luxury-black group-hover:text-terracotta-600 transition-colors line-clamp-1">
                              {prod.name}
                            </h5>
                            <span className="text-xs font-semibold text-luxury-black mt-1 block">
                              ${prod.price}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center text-luxury-muted">
                      <p className="font-serif text-lg text-luxury-black">No matching pieces found</p>
                      <p className="text-xs mt-1">Try exploring "Dresses", "Blazers", or "Bags".</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
