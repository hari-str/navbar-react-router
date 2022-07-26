import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      {/* v6 - switch to Routes */}
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
