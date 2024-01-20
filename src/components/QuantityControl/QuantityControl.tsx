import { QuantityProps } from './types/type';
import './styles/QuantityControl.styles.css';
import { MINUS_BTN, PLUS_BTN } from './types/constants';
  
const QuantityControl = ({ quantity, onIncrement, onDecrement }: QuantityProps) => (
  <>
      <button className='fluent-btn' onClick={onDecrement}>{MINUS_BTN}</button>
      <span className='quantity-text'>{quantity}</span>
      <button className='fluent-btn' onClick={onIncrement}>{PLUS_BTN}</button>
  </>
);

export default QuantityControl;
  