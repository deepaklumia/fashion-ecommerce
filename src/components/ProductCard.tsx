import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Plus, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickAdd: (product: Product, color: string) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickAdd,
  onQuickView,
}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(product, selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(product)}
      className="group flex flex-col cursor-pointer select-none"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-200 mb-4 border border-luxury-border/50">
        
        {/* Main Product Image with subtle zoom & secondary image crossfade on hover */}
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badge: NEW / BESTSELLER / LIMITED */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-md ${
                product.badge === 'NEW'
                  ? 'bg-terracotta-500 text-white'
                  : product.badge === 'BESTSELLER'
                  ? 'bg-luxury-black text-white'
                  : 'bg-white/90 text-luxury-black border border-luxury-border'
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 ${
            isWishlisted
              ? 'bg-white text-terracotta-600 shadow-md scale-105'
              : 'bg-white/80 hover:bg-white text-luxury-black/70 hover:text-luxury-black hover:scale-110'
          }`}
          aria-label="Save to wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-terracotta-600 text-terracotta-600' : ''
            }`}
          />
        </button>

        {/* Quick Add Button sliding up on hover */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <motion.button
            initial={false}
            animate={{
              y: isHovered ? 0 : 20,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleAdd}
            className={`w-full py-3 px-4 rounded-xl font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl backdrop-blur-md transition-all duration-200 ${
              justAdded
                ? 'bg-emerald-700 text-white'
                : 'bg-luxury-black/95 text-white hover:bg-terracotta-600'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </motion.button>
        </div>

      </div>

      {/* Product Details */}
      <div className="flex flex-col space-y-1.5">
        {/* Name */}
        <h4 className="font-serif text-base sm:text-lg font-medium text-luxury-black group-hover:text-terracotta-600 transition-colors line-clamp-1">
          {product.name}
        </h4>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-1.5 text-xs text-luxury-muted">
          <div className="flex items-center text-amber-500">
            <Star className="w-3 h-3 fill-amber-500" />
          </div>
          <span className="font-medium text-luxury-black">{product.rating}</span>
          <span className="text-[11px] text-luxury-muted">({product.reviewsCount})</span>
        </div>

        {/* Price & Original Price */}
        <div className="flex items-center gap-2 pt-0.5">
          <span className="font-serif text-base sm:text-lg font-semibold text-luxury-black">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-luxury-muted line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div
            className="flex items-center gap-1.5 pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                title={c.name}
                style={{ backgroundColor: c.hex }}
                className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                  selectedColor === c.name
                    ? 'scale-125 ring-1 ring-offset-1 ring-luxury-black border-white'
                    : 'border-black/20 hover:scale-110'
                }`}
                aria-label={`Select ${c.name}`}
              />
            ))}
            <span className="text-[10px] text-luxury-muted ml-1 capitalize">
              {selectedColor}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
