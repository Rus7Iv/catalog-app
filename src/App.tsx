import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from './pages/HomePage/index';
import ProductList from './pages/ProductList';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/CartPage';
import { CartContext } from './pages/CartPage/type/CartContex';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const App = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
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