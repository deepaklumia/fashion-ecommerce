import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-cream-200/60 border-t border-luxury-border/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-300/80 text-[10px] uppercase tracking-[0.25em] font-semibold text-terracotta-600 mb-4">
          <Sparkles className="w-3 h-3" /> Privé Club
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-luxury-black tracking-tight uppercase mb-4">
          JOIN OUR FASHION COMMUNITY
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-luxury-muted font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Get exclusive offers, early access to new runway collections, and private styling inspiration delivered directly to your inbox.
        </p>

        {/* Email Form */}
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white border border-luxury-border text-sm text-luxury-black placeholder:text-luxury-muted/70 focus:outline-none focus:border-terracotta-500 shadow-sm transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-luxury-black text-white hover:bg-terracotta-600 font-medium text-xs uppercase tracking-wider transition-colors duration-200 shadow-md flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium border border-emerald-200"
            >
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Thank you for subscribing. Check your inbox for 15% off your first acquisition.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-[11px] text-luxury-muted/80 mt-4 tracking-wide font-light">
          By subscribing, you agree to our Privacy Policy and Terms of Service. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
};
