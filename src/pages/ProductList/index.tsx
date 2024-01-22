import { useState, useEffect, useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './styles.css';
import { CartContext } from '../CartPage/type/CartContex';
import { Product } from '../../components/ProductCard/types/type';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Ошибка:', error);
      });
  }, []);

  return (
    <>
      <h1 className='productList-title'>Список товаров</h1>
      <div className="productList">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
              onRemoveFromCart={removeFromCart}
              inCart={cart.some(item => item.id === product.id)}
            />
          ))
        ) : (
          <div className="emptyMessage">Товары отсутствуют</div>
        )}
      </div>
    </>
  );
};

export default ProductList;