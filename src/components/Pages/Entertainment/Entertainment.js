// Dependencies
import React from 'react';

// Import Entertainment CSS
import './Entertainment.css';

const Entertainment = () => {
  return (
    <div className='entertainment'>
      <div className='ent-header container text-center'>
        <h1>Meet our local live Musicians</h1>
        <p>
          We are very proud to have such great talent perform under our roof.
          Stop by and enjoy, you will have a great time! As always, no cover.
        </p>
      </div>
      <div className='ent-body container'>
        <a
          href='https://www.facebook.com/CopperSunrise/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='ent-band hvr-grow'>
            <div className='band-img'>
              <img
                src='/static/img/copperSunrise.jpg'
                alt='Copper Sunrise band'
              />
            </div>
            <div className='band-info'>
              <h5 className='band-name'>Copper Sunrise</h5>
              <p>
                Keith Weaver and Greg Drejza are Copper Sunrise, the perfect mix
                of vocals, drums and guitar melodies. They love to play your
                requests and have over 450 songs to choose from!
              </p>
            </div>
          </div>
        </a>
        <a href='http://jeordie.com/' target='_blank' rel='noopener noreferrer'>
          <div className='ent-band hvr-grow'>
            <div className='band-img'>
              <img src='/static/img/Jeordie.jpg' alt='Jeordie band' />
            </div>
            <div className='band-info'>
              <h5 className='band-name'>Jeordie</h5>

              <p>
                Just like her mother, 60's musical artist, Melanie ("Brand New
                Key," "Lay Down," "Beautiful People"), Jeordie is an
                award-winning musician with an intensely hypnotic stage
                presence.
              </p>
            </div>
          </div>
        </a>
        <a
          href='https://www.facebook.com/Los-Gringos-423008704469060/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='ent-band hvr-grow'>
            <div className='band-img'>
              <img src='/static/img/losGringos.jpg' alt='Los Gringos band' />
            </div>
            <div className='band-info'>
              <h5 className='band-name'>Los Gringos</h5>

              <p>
                An acoustic rock, blues and country band located in Litchfield
                Park, Arizona. They play music from the 60s, 70s, 80s, 90s, 00s,
                and 10s.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Entertainment;
