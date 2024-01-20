import './styles/ProductCard.styles.css';
import QuantityControl from '../QuantityControl/QuantityControl';
import { ProductProps } from './types/type';
import ProductHandlers from '../ProductHandlers/ProductHandlers';
import { ADD_TO_CART, CURRENCY, PRICE } from './types/constants';

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, inCart }: ProductProps) => {
  const handlers = ProductHandlers({ product, onAddToCart, onRemoveFromCart });

  return (
    <div className="fluent-card">
      <div className="fluent-header">
        <h2>{product.name}</h2>
      </div>
      <p>{product.description}</p>
      <div className="fluent-footer">
        <h3>{PRICE}: {product.price} {CURRENCY}</h3>
        {inCart ? (
          <QuantityControl quantity={handlers.quantity} onIncrement={handlers.handleIncrement} onDecrement={handlers.handleDecrement} />
        ) : (
          <button className='fluent-btn' onClick={handlers.handleAddClick}>
            {ADD_TO_CART}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
