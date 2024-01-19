import React from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity?: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
};

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});
