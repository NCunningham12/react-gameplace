import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home.js'
import Store from './pages/Store';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/store' Component={Store} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
