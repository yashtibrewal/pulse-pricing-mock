// src/App.js
import React, { useState } from 'react';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {

  const [navbarClicked, setNavbarClicked] = useState(false);

  const handleNavbarClicked = () => {
    setNavbarClicked(!navbarClicked);
  }

  return (
    <div>
      <div className=' bg-gradient-to-b from-green-50 to-green-100'>
        <Navbar handleNavbarClicked={handleNavbarClicked} ></Navbar>
        {
          !navbarClicked && <Pricing></Pricing>
        }
      </div>
      {!navbarClicked &&  <FAQ></FAQ>}
      {!navbarClicked && <Footer></Footer>}
    </div>
  );
}

export default App;
