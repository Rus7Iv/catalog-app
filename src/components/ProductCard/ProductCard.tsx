import './styles/ProductCard.styles.css';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <div className="fluent-card">
      <div className="fluent-header">
        <h2>{product.name}</h2>
      </div>
      <p>{product.description}</p>
      <div className="fluent-footer">
        <h3>Цена: {product.price} руб.</h3>
        <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;
