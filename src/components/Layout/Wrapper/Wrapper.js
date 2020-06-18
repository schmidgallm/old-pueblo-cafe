// Dependencies
import React from 'react';

// import Wrapper CSS
import './Wrapper.css';

// Wrapper div to hold any children of that div to inherit its styling
const Wrapper = (props) => {
  return <div className='wrapper'>{props.children}</div>;
};

export default Wrapper;
