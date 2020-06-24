// Dependencies
import React from 'react';

// Import Events CSS
import './Events.css';

const Events = () => {
  return (
    <div className='events-page container'>
      <h1>Have an Event? We have plenty of space!</h1>
      <div className='cards'>
        <div className='card'>
          <h5 class='card-header'>Private Parties</h5>
          <div class='card-body'>
            <p class='card-text'>
              We can accommodate large groups up to 150 people at our
              restaurant, typically on our covered patio. Give us a call today
              to learn more about hosting your next event with us!
            </p>
          </div>
        </div>
        <div className='card'>
          <h5 class='card-header'>Catering</h5>
          <div class='card-body'>
            <p class='card-text'>
              Available for pick-up or delivery. Equipment, such as chafing
              dishes, available for rent.
            </p>
          </div>
        </div>
        <div className='card'>
          <h5 class='card-header'>Reservations </h5>
          <div class='card-body'>
            <p class='card-text'>Available for parties of 8 or more only.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
