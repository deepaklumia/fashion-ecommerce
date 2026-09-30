import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CampaignBannerProps {
  onExplore?: () => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({ onExplore }) => {
  return (
    <section className="py-12 sm:py-20 bg-cream-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden bg-gradient-to-r from-terracotta-700 via-terracotta-600 to-terracotta-500 text-white shadow-2xl relative">
        
        {/* Subtle noise grain texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

        {/* Ambient lighting effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 right-10 w-96 h-96 rounded-full bg-black/25 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
          
          {/* Content Left (7 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-14 lg:p-18 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-[0.25em] uppercase w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cream-200" />
              <span>THE COUTURE ACCENT EDIT</span>
            </div>

            {/* Large Serif Stacked Text */}
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] font-normal leading-[0.94] tracking-tight uppercase mb-6">
              LOOK GOOD
              <br />
              <span className="font-serif italic font-light text-cream-100">
                FEEL CONFIDENT
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-cream-100/90 font-light max-w-md leading-relaxed mb-8">
              New styles. New stories. Always you. Sculptural leather, bespoke hardware, and timeless elegance for everyday presence.
            </p>

            {/* CTA */}
            <div>
              <button
                onClick={onExplore}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-luxury-black hover:bg-cream-100 transition-all duration-300 shadow-xl font-medium tracking-wider text-xs uppercase"
              >
                <span>EXPLORE NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Luxury Handbag / Objects Composition Right (6 cols) */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[580px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85"
              alt="Luxury Handbag, Sunglasses, and Lifestyle Objects Campaign"
              className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
            />
            {/* Gradient overlay to integrate smoothly on tablet and desktop */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-terracotta-700/80 via-transparent to-transparent pointer-events-none" />

            {/* Floating luxury credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-luxury-black shadow-2xl border border-white/60 hidden sm:block max-w-[220px]"
            >
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-terracotta-600 block mb-1">
                Edition 04
              </span>
              <p className="font-serif text-sm font-semibold leading-tight">
                Paloma Hand-Stitched Florentine Bag
              </p>
              <span className="text-xs text-luxury-muted mt-1 block">
                Limited to 250 numbered pieces
              </span>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
