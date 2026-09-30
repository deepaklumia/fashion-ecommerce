import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

interface CategoryCarouselProps {
  onSelectCategory?: (category: string) => void;
}

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ onSelectCategory }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-16 sm:py-24 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-terracotta-600 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Curated Silhouettes
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-luxury-black tracking-tight uppercase">
              SHOP BY CATEGORY
            </h2>
          </div>

          {/* Navigation Arrows for desktop/tablet */}
          <div className="hidden sm:flex items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-luxury-border hover:border-luxury-black bg-white hover:bg-cream-200 text-luxury-black transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-luxury-border hover:border-luxury-black bg-white hover:bg-cream-200 text-luxury-black transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories Row / Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
        >
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              onClick={() => onSelectCategory?.(cat.name)}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer"
            >
              {/* Circular ivory background container */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1.5 bg-cream-200 border border-luxury-border/60 group-hover:border-terracotta-500/50 shadow-sm group-hover:shadow-luxury transition-all duration-300 transform group-hover:-translate-y-1.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden bg-cream-300">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Label underneath */}
              <div className="mt-3.5 text-center transition-transform duration-200 group-hover:-translate-y-0.5">
                <h3 className="font-serif text-base sm:text-lg font-medium text-luxury-black group-hover:text-terracotta-600 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-luxury-muted font-light tracking-wider uppercase block">
                  {cat.itemCount}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
