import { QuantityProps } from './types/type';
import './styles/QuantityControl.styles.css';
  
const QuantityControl = ({ quantity, onIncrement, onDecrement }: QuantityProps) => (
  <>
      <button className='fluent-btn' onClick={onDecrement}>-</button>
      <span className='quantity-text'>{quantity}</span>
      <button className='fluent-btn' onClick={onIncrement}>+</button>
  </>
);

export default QuantityControl;
  