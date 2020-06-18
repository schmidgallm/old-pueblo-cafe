// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import Navbar CSS / IMGS
import './Navbar.css';
import Logo from './logo.png';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <NavLink to='/' className='navbar-brand'>
          <img
            src={Logo}
            width='250'
            class='d-inline-block align-top'
            alt='old pueblo cafe logo'
            loading='lazy'
          />
        </NavLink>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item'>
              <NavLink to='/menu' className='nav-link'>
                Menu
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/entertainment' className='nav-link'>
                Entertainment
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/events' className='nav-link'>
                Events
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/photos' className='nav-link'>
                Photos
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact' className='nav-link'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
