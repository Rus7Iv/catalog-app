import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from './pages/HomePage/index';
import ProductList from './pages/ProductList';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/CartPage';
import CartManager from './components/CartManager/CartManager';

const App = () => {
  return (
    <CartManager>
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
    </CartManager>
  );
};

export default App;
