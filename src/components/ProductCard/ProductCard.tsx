import { useContext, useEffect, useState } from 'react';
import './styles/ProductCard.styles.css';
import { CartContext } from '../../pages/CartPage/type/CartContex';
import QuantityControl from '../QuantityControl/QuantityControl';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity?: number;
};

type Props = {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onRemoveFromCart: (product: Product) => void;
  inCart: boolean;
};

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, inCart }: Props) => {
  const { cart } = useContext(CartContext);
  const cartItem = cart.find((item: Product) => item.id === product.id);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  useEffect(() => {
    const cartItemIndex = cart.findIndex((item: Product) => item.id === product.id);
  
    if (cartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[cartItemIndex] = { ...updatedCart[cartItemIndex], quantity };

      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  }, [cart, product.id, quantity]);  

  const handleAddClick = () => {
    if (quantity !== undefined) {
      onAddToCart(product, quantity);
    }
  };

  const handleRemoveClick = () => {
    onRemoveFromCart(product);
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

  return (
    <div className="fluent-card">
      <div className="fluent-header">
        <h2>{product.name}</h2>
      </div>
      <p>{product.description}</p>
      <div className="fluent-footer">
        <h3>Цена: {product.price} руб.</h3>
        {inCart ? (
          <QuantityControl quantity={quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
        ) : (
          <button className='fluent-btn' onClick={handleAddClick}>
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
