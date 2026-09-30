import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onShopClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onShopClick }) => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream-100">
      {/* Hero Canvas Container with rounded corners & burnt orange aesthetic */}
      <div className="max-w-7xl mx-auto rounded-3xl sm:rounded-4xl relative overflow-hidden bg-gradient-to-br from-terracotta-500 via-terracotta-600 to-terracotta-700 text-white min-h-[78vh] lg:min-h-[84vh] flex items-center shadow-2xl">
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-noise pointer-events-none opacity-40 mix-blend-overlay" />

        {/* Abstract decorative luxury elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-black/15 blur-2xl pointer-events-none" />
        
        {/* Arch geometric outline watermark */}
        <div className="absolute right-12 lg:right-1/4 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[480px] sm:h-[620px] rounded-t-full border border-white/15 pointer-events-none hidden sm:block" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center px-6 sm:px-12 lg:px-16 py-12 lg:py-8">
          
          {/* LEFT CONTENT (7 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center max-w-xl"
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-medium tracking-[0.25em] uppercase w-fit mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-cream-200" />
              <span>NEW COLLECTION • AUTUMN 2026</span>
            </motion.div>

            {/* Huge Stacked Title */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-normal leading-[0.92] tracking-tight text-white mb-6 uppercase">
              MODERN
              <br />
              <span className="font-serif italic font-light tracking-wide text-cream-100">
                STYLE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-cream-100/90 font-light leading-relaxed max-w-md mb-8">
              Fashion for a brighter you. Premium quality silhouettes and everyday confidence tailored to perfection.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <button
                onClick={onShopClick}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-luxury-black text-white hover:bg-white hover:text-luxury-black transition-all duration-300 shadow-xl font-medium tracking-wider text-xs uppercase"
              >
                <span>SHOP NEW COLLECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#editorial-grid"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cream-200 hover:text-white px-4 py-3 transition-colors"
              >
                <span>View Lookbook</span>
              </a>
            </div>

            {/* Under CTA: Customer Avatars + 10k+ Happy Customers + 5-star rating */}
            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Stacked avatars */}
              <div className="flex -space-x-3 items-center">
                <img
                  className="w-10 h-10 rounded-full border-2 border-terracotta-600 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Customer avatar"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-terracotta-600 object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Customer avatar"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-terracotta-600 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Customer avatar"
                />
                <div className="w-10 h-10 rounded-full bg-cream-100 text-luxury-black font-semibold text-xs flex items-center justify-center border-2 border-terracotta-600 shadow-md">
                  +10k
                </div>
              </div>

              {/* Rating text */}
              <div>
                <div className="flex items-center gap-1 text-cream-100 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-cream-100 text-cream-100" />
                  ))}
                  <span className="text-xs font-semibold text-white ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] uppercase tracking-wider text-cream-200/90 font-medium">
                  10,000+ Happy Customers Worldwide
                </p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT EDITORIAL MODEL (5 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Parallax floating model container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Decorative arch background card */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-t-[140px] sm:rounded-t-[200px] rounded-b-3xl transform rotate-1 scale-95 border border-white/20" />

              {/* Main Model Photo */}
              <div className="relative z-10 rounded-t-[130px] sm:rounded-t-[190px] rounded-b-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-terracotta-800">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
                  alt="Aurelia Autumn Luxury Collection Model"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Editorial Model Floating Tag */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/90 backdrop-blur-md text-luxury-black shadow-lg flex items-center justify-between border border-white/40">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-terracotta-600 block">
                      Runway Featured
                    </span>
                    <p className="font-serif text-sm font-semibold">
                      Sienna Silk Pleated Dress
                    </p>
                  </div>
                  <span className="font-serif text-base font-bold text-luxury-black">
                    $490
                  </span>
                </div>
              </div>

              {/* Floating pill badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-3 -left-3 sm:-left-6 z-20 px-4 py-2 rounded-full bg-cream-100 text-luxury-black font-serif italic text-xs shadow-xl border border-luxury-border flex items-center gap-1.5"
              >
                <span>✦ Crafted in Milan</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
