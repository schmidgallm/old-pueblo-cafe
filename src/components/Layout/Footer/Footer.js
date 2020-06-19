// Dependencies
import React from 'react';

// import Footer CSS and Image
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer bg-primary'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-4 col-lg-4'>
            <img src='static/img/logo.png' alt='old pueblo cafe logo' />
            <p id='copyright'>© 2018 Old Pueblo Cafe. All rights reserved.</p>
          </div>
          <div className='col-sm-12 col-md-4 col-lg-4'>
            <h5>Find Us</h5>
            <p>102 N Old Litchfield Rd</p>
            <p>​Litchfield Park, AZ 85340</p>
            <p>
              <a href='tel:623-935-5059'>623-935-5059</a>
            </p>
          </div>
          <div className='col-sm-12 col-md-4 col-lg-4 social'>
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
        </div>
      </div>
    </footer>
  );
};
export default Footer;
