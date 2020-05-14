import React from 'react';
import newyear from './newyear.jpg';

const Text = (props) => {
  return (
    <div style={props.style}>
      <p>
        Yeah!{' '}
        <span role="img" aria-label="drink ">
          * 🍭🥂🍾🍻🍺*
        </span>
      </p>
      <img className="newyear" src={newyear} alt="newyear" />
    </div>
  );
};

export default Text;
