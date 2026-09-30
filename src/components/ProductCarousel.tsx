import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ProductCarouselProps {
  products: Product[];
  wishlist: string[];
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product, color: string) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  wishlist,
  onToggleWishlist,
  onQuickAdd,
  onQuickView,
}) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filterTabs = ['All', 'Dresses', 'Tops', 'Bags', 'Accessories'];

  const filteredProducts = activeTab === 'All'
    ? products
    : products.filter(p => p.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="featured-products" className="py-16 sm:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-terracotta-600 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Iconic Silhouettes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-luxury-black tracking-tight uppercase">
              FEATURED PIECES
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-4 md:pt-0">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-luxury-black text-white shadow-md'
                    : 'bg-cream-200/80 text-luxury-black hover:bg-cream-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid: 2 columns mobile, 3-4 columns desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickAdd={onQuickAdd}
                onQuickView={onQuickView}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-14 text-center">
          <a
            href="#categories"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-luxury-black hover:text-terracotta-600 border-b border-luxury-black/40 pb-1 hover:border-terracotta-600 transition-colors group"
          >
            <span>DISCOVER FULL AUTUMN LOOKBOOK (64 PIECES)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};
