import './styles/ProductCard.styles.css';

type Product = {
  name: string;
  description: string;
  price: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="productCard">
      <div className="cardHeader">
        <h2>{product.name}</h2>
      </div>
      <p>{product.description}</p>
      <div className="cardFooter">
        <h3>Цена: {product.price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
