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
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="productList">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} /> // Используйте ProductCard для отображения каждого товара
      ))}
    </div>
  );
};

export default ProductList;
