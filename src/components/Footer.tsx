import React, { useState } from 'react';
import { Instagram, Facebook, ArrowUp, ChevronDown, Smartphone } from 'lucide-react';

export const Footer: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shopLinks = ['New In', 'Women', 'Dresses', 'Tops', 'Bottoms', 'Accessories'];
  const helpLinks = ['Track Your Order', 'Shipping & Returns', 'Size Guide', 'FAQs', 'Contact Us'];
  const companyLinks = ['About Us', 'Careers', 'Sustainability', 'Press', 'Privacy Policy'];

  return (
    <footer className="bg-[#101010] text-white pt-16 sm:pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Wordmark & Scroll to Top */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-12 mb-12 sm:mb-16">
          <div>
            <span className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-[0.25em] font-light text-white block uppercase">
              AURELIA & CO.
            </span>
            <span className="text-[11px] uppercase tracking-[0.45em] text-cream-400/60 block mt-2 font-medium">
              Maison de Haute Époque • Paris • New York • Milan
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cream-200/80 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Main Footer Links Columns (Desktop grid, accordion on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: SHOP (3 cols) */}
          <div className="lg:col-span-3">
            <button
              onClick={() => toggleAccordion('shop')}
              className="flex items-center justify-between w-full md:pointer-events-none text-left mb-4 sm:mb-6"
            >
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta-400">
                SHOP
              </h4>
              <ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${
                  openAccordion === 'shop' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul
              className={`space-y-3 ${
                openAccordion === 'shop' ? 'block' : 'hidden md:block'
              }`}
            >
              {shopLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs sm:text-sm text-cream-200/70 hover:text-white transition-colors font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: HELP (3 cols) */}
          <div className="lg:col-span-3">
            <button
              onClick={() => toggleAccordion('help')}
              className="flex items-center justify-between w-full md:pointer-events-none text-left mb-4 sm:mb-6"
            >
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta-400">
                HELP
              </h4>
              <ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${
                  openAccordion === 'help' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul
              className={`space-y-3 ${
                openAccordion === 'help' ? 'block' : 'hidden md:block'
              }`}
            >
              {helpLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs sm:text-sm text-cream-200/70 hover:text-white transition-colors font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: COMPANY (3 cols) */}
          <div className="lg:col-span-3">
            <button
              onClick={() => toggleAccordion('company')}
              className="flex items-center justify-between w-full md:pointer-events-none text-left mb-4 sm:mb-6"
            >
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta-400">
                COMPANY
              </h4>
              <ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${
                  openAccordion === 'company' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ul
              className={`space-y-3 ${
                openAccordion === 'company' ? 'block' : 'hidden md:block'
              }`}
            >
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs sm:text-sm text-cream-200/70 hover:text-white transition-colors font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: DOWNLOAD OUR APP & SOCIALS (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-terracotta-400 mb-4 sm:mb-6">
                DOWNLOAD OUR APP
              </h4>
              <p className="text-xs text-cream-200/70 font-light mb-4">
                Unlock exclusive runway access, personalized styling, and augmented reality try-on.
              </p>

              {/* App store buttons */}
              <div className="space-y-2.5">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors group"
                >
                  <Smartphone className="w-5 h-5 text-terracotta-400" />
                  <div className="text-left">
                    <span className="text-[9px] uppercase tracking-wider text-cream-400 block leading-tight">
                      Download on the
                    </span>
                    <span className="text-xs font-semibold text-white tracking-wide">
                      Apple App Store
                    </span>
                  </div>
                </a>

                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors group"
                >
                  <Smartphone className="w-5 h-5 text-terracotta-400" />
                  <div className="text-left">
                    <span className="text-[9px] uppercase tracking-wider text-cream-400 block leading-tight">
                      Get it on
                    </span>
                    <span className="text-xs font-semibold text-white tracking-wide">
                      Google Play Store
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-cream-400 block mb-3">
                Follow Maison Aurelia
              </span>
              <div className="flex items-center gap-3">
                {[
                  { name: 'Instagram', icon: Instagram },
                  { name: 'Facebook', icon: Facebook },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-terracotta-500 flex items-center justify-center text-white transition-colors"
                      aria-label={s.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-terracotta-500 flex items-center justify-center text-white text-xs font-bold transition-colors"
                  aria-label="Pinterest"
                >
                  P
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-terracotta-500 flex items-center justify-center text-white text-xs font-bold transition-colors"
                  aria-label="TikTok"
                >
                  TT
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Line Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400/60 font-light gap-4">
          <p>© 2026 Aurelia & Co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-cream-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-cream-200 transition-colors">
              Terms of Purchase
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-cream-200 transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
