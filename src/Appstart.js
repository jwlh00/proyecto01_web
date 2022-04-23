import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

import './Appstart.css';

export default function Appstart() {
  return (
    <><div className='App'>
      <Navbar />

    </div><div className='homeContainer'>
      <Home />
      </div></>
  );
}
