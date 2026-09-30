import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: Truck,
      title: 'FREE SHIPPING',
      subtitle: 'On all orders over $99',
    },
    {
      icon: ShieldCheck,
      title: 'SECURE PAYMENTS',
      subtitle: '100% safe & encrypted',
    },
    {
      icon: RefreshCw,
      title: 'EASY RETURNS',
      subtitle: 'Hassle-free 30-day returns',
    },
    {
      icon: Headphones,
      title: '24/7 SUPPORT',
      subtitle: "Dedicated luxury concierge",
    },
  ];

  return (
    <section className="bg-cream-100 py-6 sm:py-8 border-y border-luxury-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 group transition-transform duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-cream-200/90 flex items-center justify-center flex-shrink-0 text-terracotta-600 group-hover:bg-terracotta-500 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-luxury-black group-hover:text-terracotta-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-luxury-muted font-light mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
