import { useEffect, useState } from 'react';
import { Product } from '../ProductCard/types/type';
import { CartContext } from '../../pages/CartPage/type/CartContex';
import { CartManagerProps } from './type/interface';

const CartManager = ({ children }: CartManagerProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    const existingProduct = cart.find(item => item.id === product.id);
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map(item => item.id === product.id ? { ...item, quantity: (item.quantity || 0) + quantity } : item);
    } else {
      updatedCart = [...cart, { ...product, quantity }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  
  const removeFromCart = (product: Product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartManager;
