import React from 'react';

const Number = (props) => {
  //const date = Date();
  return (
    <>
      <h2>
        In <span style={{ fontSize: '2em', color: 'red' }}>{props.count}</span>{' '}
        Seconds!{' '}
      </h2>
    </>
  );
};

export default Number;
