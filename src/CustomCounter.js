import React, { useState, useEffect } from 'react';
import newyear from './newyear.jpg'

const CustomCounter = (props) => {
  const name = props.name
  const message = props.message
  const targetDate = props.targetDate

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [currentTime, setCurrentTime] = useState(Date.now())
  const [countdownReached, setCountdownReached] = useState(false)
  
  useEffect(() => {
    let difference = targetDate - currentTime
    let timeout = null
    if(difference > 0) {
      let days = Math.floor(difference / (1000 * 60 * 60 * 24))
      difference -= days * 1000 * 60 * 60 * 24
      let hours = Math.floor(difference / (1000 * 60 * 60))
      difference -= hours * 1000 * 60 * 60
      let minutes = Math.floor(difference / (1000 * 60))
      difference -= minutes * 1000 * 60
      let seconds = Math.floor(difference / 1000)

      setTimeRemaining({ days, hours, minutes, seconds })
      timeout = setTimeout(() => setCurrentTime(Date.now(), 1000))
    } else {
      setCountdownReached(true)
    }
    return () => { 
      if(timeout) {
        clearTimeout(timeout)
      }
    }
  }, [currentTime, targetDate])

  return (
    <div>
      <div>{name}</div>
      {countdownReached? (
        <div>
          <p>Countdown Complete!</p>
          <img src={newyear} alt='countdown complete' />
          <p>{message}</p>  
        </div>
      ) : (
        <div>
          <div>
            Time Remaining: 
          </div>
          <div>
            <span>{timeRemaining.days}</span> days : 
            <span>{timeRemaining.hours}</span> hours : 
            <span>{timeRemaining.minutes}</span> minutes : 
            <span>{timeRemaining.seconds}</span> seconds
          </div>
        </div>
      )}
      <button onClick={props.onClose}>Close Counter</button>
    </div>
  );
};

export default CustomCounter;