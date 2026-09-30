import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  isVisible: boolean;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ isVisible }) => {
  const [currency, setCurrency] = useState('USD ($)');
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="bg-luxury-black text-cream-100 text-xs overflow-hidden border-b border-white/10 z-40 relative select-none"
          aria-label="Announcement"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between min-h-[32px]">
            {/* Left */}
            <div className="hidden sm:flex items-center gap-2 text-cream-200/80 tracking-wide font-light text-[11px] uppercase">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-terracotta-500 animate-pulse"></span>
              Free Shipping on All Orders Over $99
            </div>

            {/* Center */}
            <div className="flex-1 sm:flex-initial text-center sm:text-center">
              <span className="text-white font-medium tracking-wider text-[11px] uppercase inline-flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-terracotta-400 inline" />
                New Styles. Same Confidence.
                <span className="text-terracotta-400 font-serif italic text-xs capitalize ml-1">Automne 2026</span>
              </span>
            </div>

            {/* Right */}
            <div className="relative flex items-center gap-4 text-cream-200/80 text-[11px]">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="hover:text-white flex items-center gap-1 transition-colors py-0.5 tracking-wider uppercase"
                aria-expanded={showDropdown}
              >
                <Globe className="w-3 h-3 text-terracotta-400" />
                <span>{currency}</span>
                <span className="text-cream-400">• EN</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Currency Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 top-full mt-1 bg-luxury-black border border-white/15 rounded-md shadow-2xl py-1 w-32 z-50 text-[11px]">
                  {['USD ($)', 'EUR (€)', 'GBP (£)', 'CAD ($)'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setShowDropdown(false);
                      }}
                      className="block w-full text-left px-3 py-1.5 hover:bg-white/10 hover:text-white transition-colors text-cream-200"
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
