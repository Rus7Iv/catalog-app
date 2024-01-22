import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from './pages/HomePage/index';
import ProductList from './pages/ProductList';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/CartPage';
import { CartContext } from './pages/CartPage/type/CartContex';
import { Product } from './components/ProductCard/types/type';

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    const existingProduct = cart.find(item => item.id === product.id);
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map(item => item.id === product.id ? { ...item, quantity: (item.quantity || 0) + quantity } : item);
    } else {
      updatedCart = [...cart, { ...product, quantity }];
    }
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  
  const removeFromCart = (product: Product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
};

export default App;