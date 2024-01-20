import { useContext, useState } from 'react';
import './styles/ProductCard.styles.css';
import { CartContext } from '../../pages/CartPage/type/CartContex';

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
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

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
        <>
          <button className='product-btn' onClick={handleDecrement}>-</button>
          <span className='quantity-text'>{quantity}</span>
          <button className='product-btn' onClick={handleIncrement}>+</button>
        </>
      ) : (
        <button className='product-btn' onClick={handleAddClick}>
          Добавить в корзину
        </button>
      )}
      </div>
    </div>
  );
};

export default ProductCard;
