import { useState } from 'react';
import './styles/ProductCard.styles.css';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type Props = {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onRemoveFromCart: (product: Product) => void;
  inCart: boolean;
};

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, inCart }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = () => {
    onAddToCart(product, quantity);
  };

  const handleRemoveClick = () => {
    onRemoveFromCart(product);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
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
          <button className='add-to-cart' onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button className='add-to-cart' onClick={handleIncrement}>+</button>
        </>
      ) : (
        <button className='add-to-cart' onClick={handleAddClick}>
          Добавить в корзину
        </button>
      )}
      </div>
    </div>
  );
};

export default ProductCard;
