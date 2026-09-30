export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage?: string;
  badge?: 'NEW' | 'BESTSELLER' | 'LIMITED' | 'RUNWAY';
  colors: { name: string; hex: string }[];
  sizes?: string[];
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}
