import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1
    };
    setCartItems([...cartItems, cartItem]);
  };

  const updateCartItemQuantity = (id, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      } else {
        return item;
      }
    });
    setCartItems(updatedCartItems);
  };

  const removeCartItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} updateCartItemQuantity={updateCartItemQuantity} removeCartItem={removeCartItem} clearCart={clearCart} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;