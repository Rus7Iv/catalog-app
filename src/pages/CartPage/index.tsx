import { useContext } from 'react';
import { CartContext } from './type/CartContex';
import ProductCard from '../../components/ProductCard/ProductCard';
import './styles.css'

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext); 

  return (
    <>
      <h1 className='cart-title'>Корзина</h1>
      <div className="cart">
        {cart.length > 0 ? (
          cart.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
              onRemoveFromCart={removeFromCart}
              inCart={true}
            />
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
