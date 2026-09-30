import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MEGA_MENU_DATA } from '../data/mockData';

interface MegaMenuProps {
  category: 'Women' | 'Dresses' | 'Accessories';
  onClose: () => void;
  onNavigate?: (category: string) => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ category, onClose, onNavigate }) => {
  const data = MEGA_MENU_DATA[category];
  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      onMouseLeave={onClose}
      className="absolute top-full left-0 right-0 w-full bg-[#F8F5EF] border-b border-luxury-border shadow-[0_35px_60px_-15px_rgba(0,0,0,0.25)] z-50 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Category Links (3 cols) */}
          <div className="col-span-3 pr-4 border-r border-luxury-border/60">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-terracotta-600 block mb-5">
              {data.title}
            </span>
            <ul className="space-y-3">
              {data.categories.map((cat, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onNavigate?.(cat.name);
                      onClose();
                    }}
                    className="group flex items-center justify-between w-full text-left text-sm text-luxury-black/80 hover:text-terracotta-600 transition-colors py-1"
                  >
                    <span className="font-normal tracking-wide group-hover:translate-x-1 transition-transform duration-200">
                      {cat.name}
                    </span>
                    {cat.isNew && (
                      <span className="text-[9px] uppercase tracking-wider font-semibold bg-terracotta-500/10 text-terracotta-600 px-2 py-0.5 rounded-full">
                        New
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-luxury-border/60">
              <button
                onClick={() => {
                  onNavigate?.(category);
                  onClose();
                }}
                className="text-xs uppercase font-medium tracking-widest text-luxury-black hover:text-terracotta-600 flex items-center gap-2 group"
              >
                <span>View All {category}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Column 2: Featured Collections (5 cols) */}
          <div className="col-span-5 px-4">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-luxury-muted">
                Curated Highlights
              </span>
              <span className="text-xs font-serif italic text-terracotta-500 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Selected by Stylists
              </span>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {data.featured.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onNavigate?.(item.title);
                    onClose();
                  }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-cream-200 relative mb-3 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                  <h4 className="font-serif text-base font-medium text-luxury-black group-hover:text-terracotta-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-luxury-muted line-clamp-1 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Editorial Campaign Image (4 cols) */}
          <div className="col-span-4 pl-4 border-l border-luxury-border/60">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-terracotta-500 text-white p-6 flex flex-col justify-end group cursor-pointer shadow-luxury">
              <img
                src={data.campaign.image}
                alt={data.campaign.headline}
                className="absolute inset-0 w-full h-full object-cover object-top mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="relative z-10">
                <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-cream-200 block mb-1">
                  Editorial Exclusive
                </span>
                <h3 className="font-serif text-2xl font-normal leading-tight text-white mb-2">
                  {data.campaign.headline}
                </h3>
                <p className="text-xs text-cream-200/90 font-light mb-4 line-clamp-2">
                  {data.campaign.tagline}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white border-b border-white/60 pb-0.5 group-hover:border-white transition-colors">
                  <span>{data.campaign.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
