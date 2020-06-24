// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// import Footer CSS and Image
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer bg-primary'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <img src='static/img/logo.png' alt='old pueblo cafe logo' />
            <p id='copyright'>© 2018 Old Pueblo Cafe. All rights reserved.</p>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <h5>Find Us</h5>
            <p>102 N Old Litchfield Rd</p>
            <p>​Litchfield Park, AZ 85340</p>
            <p>
              <a href='tel:623-935-5059'>623-935-5059</a>
            </p>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3 social'>
            <h5>Social</h5>
            <div>
              <a className='social-links' href='/'>
                <i className='fa fa-facebook-square'></i>Facebook
              </a>
            </div>
            <div>
              <a className='social-links' href='/'>
                <i className='fa fa-twitter'></i>Twitter
              </a>
            </div>
            <div>
              <a
                className='social-links'
                href='mailto:oldpueblocafe@gmail.com?subject=New%20Website%20Inquiry'
              >
                <i className='fa fa-envelope'></i>Email Us
              </a>
            </div>
          </div>
          <div className='col-sm-12 col-md-3 col-lg-3'>
            <small>
              Visit our sister restaurant,{' '}
              <a
                href='https://www.facebook.com/parkcafelpaz/'
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                Park Cafe
              </a>
              . Located on the southeast corner of the same building we are
              located, in historic downtown Litchfield Park. Open for breakfast
              and lunch.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
