import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './styles.css';

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
    <div className="productList">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="emptyMessage">Товары отсутствуют</div>
      )}
    </div>
  );
};

export default ProductList;
