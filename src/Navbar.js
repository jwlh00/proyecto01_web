import React from 'react';
import './Navbar.css';
import Tesla from './assets/tesla_logo.png';

export default function Navbar() {
  return (
    <div className='Navibar'>
      <div className='Logo'>
        <a href = 'index.html'><img src={Tesla} alt="Tesla Logo"></img></a>
      </div>

      <div className='Center'>
        <a href = 'index.html'>Model S</a>
        <a href = 'index.html'>Model 3</a>
        <a href = 'index.html'>Model X</a>
        <a href = 'index.html'>Model Y</a>
        <a href = 'index.html'>Solar Roof</a>
        <a href = 'index.html'>Solar Panels</a>
      </div>

      <div className='Right'>
        <a href = 'index.html'>Shop</a>
        <a href = 'index.html'>Account</a>
        <p>Menu</p>
      </div>
    </div>
  )
}

