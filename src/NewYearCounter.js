import React, { useState } from 'react';
import Number from './Number';
import Text from './Text';

const NewYearCounter = () => {
  const [count, setCount] = useState(5);
  const [showImage, setShowImage] = useState(false);
  const [second, setSecond] = useState(55);
  const [hour, setHour] = useState(23);

  const countDown = () => {
    count === 0 ? setCount(count) : setCount(count - 1);
    if (count === 1) {
      setShowImage(true);
    }
    
    if(second.toString().length <= 2){
      
      setSecond(second + 1);
    }
    
    if(second === 59) {
      setHour('00');
      setSecond('00');
    }
    
  };
      const reset = () => {
        setShowImage(false);
        setCount(5);
        setHour('23');
        setSecond('55');
       
      };


  return (
    <div>
      <h1>New Year's CountDown</h1>

      <button onClick={countDown}>
        {hour}:{second}
      </button>

      <button onClick={reset}>Reset</button>

      <Number count={count} />

      <Text style={{ display: showImage ? 'block' : 'none' }} />
    </div>
  );
};

export default NewYearCounter;
