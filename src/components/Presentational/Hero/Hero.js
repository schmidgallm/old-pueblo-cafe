// Dependecies
import React from 'react';

// Import Hero CSS
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='img-container'></div>
      <div className='overlay'></div>
      <div className='copy-container'>
        <h1>Eat. Drink. Music.</h1>
        <p>Serving Litchfield Park Since 2000</p>
      </div>
    </div>
  );
};
export default Hero;
