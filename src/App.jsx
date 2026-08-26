import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.jsx';
import YusufAlemdarInfo from "./components/YusufAlemdarInfo.jsx";
import Hero from './components/Hero.jsx';
import Mudurlukler from './components/Mudurlukler.jsx';
import Projeler from './components/Projeler.jsx';
import Ekip from './components/Ekip.jsx';
import Iletisim from './components/Iletisim.jsx';
import Footer from './components/Footer.jsx';
import Bagimlilik from './components/Bagimlilik.jsx';


export default function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={
          <> 
            <Hero />
            <YusufAlemdarInfo />
            <Mudurlukler />
            <Projeler />
            <Ekip />
            <Iletisim />
          </>
        } />

        {/* Bağımlılık Test Sayfası */}
        <Route path="/bagimlilik-testi" element={<Bagimlilik />} />
      </Routes>

      <Footer />
    </div>
  );
}