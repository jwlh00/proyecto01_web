import React from 'react';

import model3Img from './assets/model_3.jpg';
import modelyImg from './assets/model_y.jpg';
import modelsImg from './assets/model_s.jpg';
import modelxImg from './assets/model_x.jpg';
import panelsImg from './assets/solar_panels.jpg';
import roofImg from './assets/solar_roof.jpg';
import accsImg from './assets/accessories.jpg';
import './Home.css';

export default function Home() {
  return (
    <div className='MainScreen'>
      <div className='model3Container' style={{backgroundImage: `url(${model3Img})`}}>
        <div className='model3Text'>
          <div className='model3Tittle'>
            <h1>Model 3</h1>
          </div>
          <div className='model3Subtittle'>
            <p>Order Online for <span><a href='google.com'>Touchless Delivery</a></span></p>
          </div>
        </div>
        
        <div className= 'model3Buttons'>
          <button className='model3Leftbtn'>CUSTOM ORDER</button>
          <button className='model3Rightbtn'>EXISTING INVENTORY</button>
        </div>
      </div>

      <div className='modelyContainer' style={{backgroundImage: `url(${modelyImg})`}}>
        <div className='modelyText'>
          <div className='modelyTittle'>
            <h1>Model Y</h1>
          </div>
          <div className='modelySubtittle'>
            <p>Order Online for <span><a href='google.com'>Touchless Delivery</a></span></p>
          </div>
        </div>
        
        <div className= 'modelyButtons'>
          <button className='modelyLeftbtn'>CUSTOM ORDER</button>
          <button className='modelyRightbtn'>EXISTING INVENTORY</button>
        </div>
      </div>

      <div className='modelsContainer' style={{backgroundImage: `url(${modelsImg})`}}>
        <div className='modelsText'>
          <div className='modelsTittle'>
            <h1>Model S</h1>
          </div>
          <div className='modelsSubtittle'>
            <p>Order Online for <span><a href='google.com'>Touchless Delivery</a></span></p>
          </div>
        </div>
        
        <div className= 'modelsButtons'>
          <button className='modelsLeftbtn'>CUSTOM ORDER</button>
          <button className='modelsRightbtn'>EXISTING INVENTORY</button>
        </div>
      </div>

      <div className='modelxContainer' style={{backgroundImage: `url(${modelxImg})`}}>
        <div className='modelxText'>
          <div className='modelxTittle'>
            <h1>Model X</h1>
          </div>
          <div className='modelxSubtittle'>
            <p>Order Online for <span><a href='google.com'>Touchless Delivery</a></span></p>
          </div>
        </div>
        
        <div className= 'modelxButtons'>
          <button className='modelxLeftbtn'>CUSTOM ORDER</button>
          <button className='modelxRightbtn'>EXISTING INVENTORY</button>
        </div>
      </div>

      <div className='panelsContainer' style={{backgroundImage: `url(${panelsImg})`}}>
        <div className='panelsText'>
          <div className='panelsTittle'>
            <h1>Solar Panels</h1>
          </div>
          <div className='panelsSubtittle'>
            <p>Lowest Cost Solar Panels in America</p>
          </div>
        </div>
        
        <div className= 'panelsButtons'>
          <button className='panelsLeftbtn'>ORDER NOW</button>
          <button className='panelsRightbtn'>LEARN MORE</button>
        </div>
      </div>

      <div className='roofContainer' style={{backgroundImage: `url(${roofImg})`}}>
        <div className='roofText'>
          <div className='roofTittle'>
            <h1>Solar Roof</h1>
          </div>
          <div className='roofSubtittle'>
            <p>Produce Clean Energy From Your Roof</p>
          </div>
        </div>
        
        <div className= 'roofButtons'>
          <button className='roofLeftbtn'>ORDER NOW</button>
          <button className='roofRightbtn'>LEARN MORE</button>
        </div>
      </div>
      
      <div className='accsContainer' style={{backgroundImage: `url(${accsImg})`}}>
        <div className='accsText'>
          <div className='accsTittle'>
            <h1>Accessories</h1>
          </div>
        </div>
        
        <div className= 'accsButtons'>
          <button className='accsLeftbtn'>SHOP NOW</button>
        </div>
      </div>

      <div className='Foot'>
        <div className='Container'>
          <a href = 'index.html'>Tesla @ 2022</a>
          <a href = 'index.html'>Privacy & Legal</a>
          <a href = 'index.html'>Vehicle Recalls</a>
          <a href = 'index.html'>Contact</a>
          <a href = 'index.html'>Careers</a>
          <a href = 'index.html'>News</a>
          <a href = 'index.html'>Engage</a>
          <a href = 'index.html'>Locations</a>
        </div>
      </div>
      
    </div>
  );
}
