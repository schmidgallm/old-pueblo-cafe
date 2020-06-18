// Dependencies
import React from 'react';

// Import Intro CSS
import './Intro.css';

const Intro = () => {
  return (
    <div className='intro'>
      <div className='container'>
        <h2>Our Story</h2>
        <div className='row'>
          <div className='col-sm-12 col-lg-4'>
            <div className='content content1 card'>
              <h4 className='content-title'>Who We Are</h4>
              <div className='content-copy'>
                The Old Pueblo Café and Pub is located directly west of the
                Wigwam Resort in historic downtown Litchfield Park. With our
                beautiful – climate controlled outdoor patio, it's hard to miss
                us.
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <div className='content content2 card'>
              <h4 className='content-title'>What Makes Us Special</h4>
              <div className='content-copy'>
                Our restaurant is known for its Sonoran style Mexican food
                created by Chef Ernestina Borquez. “Tina", as the locals refer
                to her, has been serving her secret family recipes in the West
                Valley for over 50 years.
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-lg-4'>
            <div className='content content3 card'>
              <h4 className='content-title'>We Serve The Best</h4>
              <div className='content-copy'>
                Everything we serve is proudly made from scratch each morning.
                Once you taste Tina's famous hot sauce, pico de gallo, enchilada
                sauce and homemade flan you will instantly understand why Old
                Pueblo is the local favorite.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
