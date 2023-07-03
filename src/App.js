import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home.js'
import Store from './pages/Store';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart, item]);
    alert(`Added ${item.title} to cart`)
  }

  return (
    <>
      <Router>
        <Navbar size={cart.length} />
        <Routes>
          <Route path='/' Component={Home} handleClick={handleClick} />
          <Route path='/store' Component={Store} />
          <Route path='/cart' Component={CartPage} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
