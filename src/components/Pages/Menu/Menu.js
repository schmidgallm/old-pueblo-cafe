// Dependencies
import React, { useState, useEffect } from 'react';

// Import Menu CSS
import './Menu.css';

const Menu = () => {
  // set state for which menu option to choose
  const [menu, setMenu] = useState('');

  useEffect(() => setMenu('dinner'), []);

  return (
    <div className='menu-page container'>
      <div className='menu-header'>
        <h1>Menu</h1>
        <p className='menu-icon'>
          <span
            style={
              menu === 'dinner'
                ? { color: '#fff', backgroundColor: '#85d8d6', padding: '5px' }
                : null
            }
            onClick={() => setMenu('dinner')}
          >
            Dinner
          </span>{' '}
          |{' '}
          <span
            style={
              menu === 'lunch'
                ? { color: '#fff', backgroundColor: '#85d8d6', padding: '5px' }
                : null
            }
            onClick={() => setMenu('lunch')}
          >
            Lunch
          </span>
        </p>
      </div>
      <div className='menu-images'>
        <div className='menu-img'>
          {menu === 'dinner' ? (
            <img src='/static/img/dinnerMenu.png' alt='dinner menu' />
          ) : (
            <img src='/static/img/lunchMenu.png' alt='lunch menu' />
          )}
        </div>
      </div>
    </div>
  );
};
export default Menu;
