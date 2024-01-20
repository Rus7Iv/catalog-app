import { Product } from "../../ProductCard/types/type";

export type HandlersProps = {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onRemoveFromCart: (product: Product) => void;
};