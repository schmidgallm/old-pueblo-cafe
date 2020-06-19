// Dependencies
import React from 'react';

// Components
import Hero from '../../Presentational/Hero';
import Intro from '../../Presentational/Intro';
import Gallery from '../../Presentational/Gallery';

// Import Landing CSS
import './Landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <Hero />
      <Intro />
      <Gallery />
    </div>
  );
};
export default Landing;
