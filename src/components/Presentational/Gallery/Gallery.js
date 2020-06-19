// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Import Gallery CSS
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='container grid'>
      <Link className='food grid-item' to='/menu'>
        <div>
          <h3>Food</h3>
        </div>
      </Link>
      <Link className='drink grid-item' to='/menu'>
        <div>
          <h3>Drink</h3>
        </div>
      </Link>
      <Link className='photos grid-item' to='/photos'>
        <div>
          <h3>Photos</h3>
        </div>
      </Link>

      <Link className='events grid-item' to='/events'>
        <div>
          <h3>Events</h3>
        </div>
      </Link>
      <Link className='entertainment grid-item' to='/entertainment'>
        <div>
          <h3>Entertainment</h3>
        </div>
      </Link>
    </div>
  );
};

export default Gallery;
