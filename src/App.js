import './App.css';
import Header from './components/header/Header';
import { Products } from './components/products/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from './components/cart/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
