// Dependencies
import React from 'react';

// Components
import Hero from '../../Presentational/Hero';
import Intro from '../../Presentational/Intro';

// Import Landing CSS
import './Landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <Hero />
      <Intro />
    </div>
  );
};
export default Landing;
