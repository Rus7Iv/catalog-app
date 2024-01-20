import React from 'react';
import { Product } from '../../../components/ProductCard/types/type';

type CartContextType = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});
