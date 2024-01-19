import { useContext } from 'react';
import { CartContext } from './type/CartContex';
import './styles.css'

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <h1 className='cart-title'>Корзина</h1>
      <div className="cart">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div key={index} className="fluent-card">
              <div className="fluent-header">
                <h2>{product.name}</h2>
              </div>
              <p>{product.description}</p>
              <div className="fluent-footer">
                <h3>Цена: {product.price} руб.</h3>
              </div>
            </div>
          ))
        ) : (
          <div className='empty-cart-container'>
            <p>Корзина пуста</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;