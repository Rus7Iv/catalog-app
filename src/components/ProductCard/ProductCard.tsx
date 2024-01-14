import './styles/ProductCard.styles.css';

type Product = {
  name: string;
  description: string;
  price: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="fluent-card">
      <div className="fluent-header">
        <h2>{product.name}</h2>
      </div>
      <p>{product.description}</p>
      <div className="fluent-footer">
        <h3>Цена: {product.price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
