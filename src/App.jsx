import { useState } from 'react';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Homme from './components/Homme';
import Femme from './components/Femme';
import Panier from './components/Panier';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="bg-black h-full">
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/Homme" element={<Homme />} />
        <Route path="/Femme" element={<Femme />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/Details" element={<ProductDetails />} />
      </Routes>
      <ToastContainer position="bottom-left" />
      <Footer />
    </div>
  );
}

export default App;
