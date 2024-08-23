// src/App.js
import React from 'react';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <div className=' bg-gradient-to-b from-green-50 to-green-100'>
        <Navbar></Navbar>
        <Pricing></Pricing>
      </div>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;
