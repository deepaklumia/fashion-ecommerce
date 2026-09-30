import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface EditorialGridProps {
  onShopCategory?: (cat: string) => void;
}

export const EditorialGrid: React.FC<EditorialGridProps> = ({ onShopCategory }) => {
  return (
    <section id="editorial-grid" className="py-12 sm:py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          
          {/* LEFT CARD: Burnt Orange Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onShopCategory?.('Women')}
            className="group relative rounded-3xl sm:rounded-4xl overflow-hidden bg-gradient-to-br from-terracotta-500 to-terracotta-700 text-white p-8 sm:p-12 lg:p-14 min-h-[520px] sm:min-h-[580px] flex flex-col justify-between shadow-luxury cursor-pointer"
          >
            {/* Background noise and gradient depth */}
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
            
            {/* Background Editorial Model */}
            <div className="absolute top-0 right-0 bottom-0 w-3/5 sm:w-1/2 overflow-hidden pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85"
                alt="Women's Collection Editorial"
                className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-terracotta-600 via-terracotta-600/60 to-transparent" />
            </div>

            {/* Top eyebrow */}
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-cream-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> WOMEN'S COLLECTION
              </span>
            </div>

            {/* Bottom Content & Headline */}
            <div className="relative z-10 max-w-sm mt-auto">
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[0.95] text-white uppercase mb-4">
                EFFORTLESS
                <br />
                <span className="font-serif italic text-cream-100 font-light">ELEGANCE</span>
              </h3>
              <p className="text-sm sm:text-base text-cream-100/90 font-light mb-8 max-w-xs">
                Modern styles for every moment. Tailored precision designed for everyday ease.
              </p>

              <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-luxury-black font-semibold text-xs uppercase tracking-wider group-hover:bg-cream-100 transition-colors shadow-lg">
                <span>SHOP WOMEN</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD: Soft Beige Editorial Still-Life */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onShopCategory?.('Accessories')}
            className="group relative rounded-3xl sm:rounded-4xl overflow-hidden bg-cream-200 text-luxury-black p-8 sm:p-12 lg:p-14 min-h-[520px] sm:min-h-[580px] flex flex-col justify-between shadow-luxury border border-luxury-border/60 cursor-pointer"
          >
            {/* Background Still Life Image */}
            <div className="absolute top-0 right-0 bottom-0 w-3/5 sm:w-1/2 overflow-hidden pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85"
                alt="Luxury Handbag & Accessories Editorial"
                className="w-full h-full object-cover object-center opacity-95 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cream-200 via-cream-200/70 to-transparent" />
            </div>

            {/* Top eyebrow */}
            <div className="relative z-10">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-terracotta-600 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> ACCESSORIES & LEATHER
              </span>
            </div>

            {/* Bottom Content & Headline */}
            <div className="relative z-10 max-w-sm mt-auto">
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[0.95] text-luxury-black uppercase mb-4">
                COMPLETE
                <br />
                <span className="font-serif italic text-terracotta-600 font-light">YOUR LOOK</span>
              </h3>
              <p className="text-sm sm:text-base text-luxury-muted font-light mb-8 max-w-xs">
                Details that make the difference. Italian calfskin, brushed brass, and refined eyewear.
              </p>

              <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-luxury-black text-white font-semibold text-xs uppercase tracking-wider group-hover:bg-terracotta-600 transition-colors shadow-lg">
                <span>SHOP ACCESSORIES</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
