import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../pages/CartPage/type/CartContex';
import { Product } from '../ProductCard/types/type';
import { HandlersProps } from './types/type';

const ProductHandlers = ({ product, onAddToCart, onRemoveFromCart }: HandlersProps) => {
  const { cart, setCart } = useContext(CartContext);
  const cartItem = cart.find((item: Product) => item.id === product.id);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

  useEffect(() => {
    const cartItemIndex = cart.findIndex((item: Product) => item.id === product.id);
  
    if (cartItemIndex !== -1) {
      const updatedCart = [...cart];
      const newCartItem = { ...updatedCart[cartItemIndex], quantity };

      if (updatedCart[cartItemIndex].quantity !== newCartItem.quantity) {
        updatedCart[cartItemIndex] = newCartItem;
  
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    }
  }, [cart, product.id, quantity, setCart]);
  

  const handleAddClick = () => {
    if (quantity !== undefined) {
      onAddToCart(product, quantity);
    }
  };

  const handleRemoveClick = () => {
    onRemoveFromCart(product);
    const updatedCart = cart.filter((item: Product) => item.id !== product.id);
    setCart(updatedCart); 
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncrement = () => {
    if (quantity !== undefined) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity !== undefined && quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      handleRemoveClick();
      setQuantity(1);
    }
  };

  return { quantity, handleAddClick, handleRemoveClick, handleIncrement, handleDecrement };
};

export default ProductHandlers;

