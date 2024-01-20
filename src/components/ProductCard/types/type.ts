export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity?: number;
};

export type ProductProps = {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onRemoveFromCart: (product: Product) => void;
  inCart: boolean;
};