import React from 'react';
import './Navbar.css';
import Tesla from './assets/tesla_logo.png';

export default function Navbar() {
  return (
    <div className='Navibar'>
      <div className='Logo'>
        <img src={Tesla} alt="Tesla Logo"></img>
      </div>

      <div className='Center'>
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
      </div>

      <div className='Right'>
        <p>Shop</p>
        <p>Account</p>
        <p>Menu</p>
      </div>
    </div>
  )
}

