import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import boom from './boom.jpg';

const DateCounter = () => {
  const day = '2020/12/31';
  // getMonth() returns month - 1
  //console.log(new Date().getMonth());

  const currentYear = new Date().getFullYear();
  const currentMon = new Date().getMonth() + 1;
  const currentDate = new Date().getDate();
  const newMinutes = new Date().getMinutes();
  const newSeconds = new Date().getSeconds();
  const newHours = new Date().getHours();

  // calculate the left time up from current Date to 'userinput'-date

  const calculateLeftTime = () => {
    const difference = new Date('2020/12/31') - new Date();

    let leftTime = {};

    if (difference > 0) {
      leftTime = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return leftTime;
  };

  // define timeLeft as the calculateTimeLeft function call which returns an Object with Objects
  //keys {'','','hours'} {'','','minutes'} {'','','seconds'}

  const [leftTime, setLeftTime] = useState(calculateLeftTime());

  useEffect(() => {
    setInterval(() => {
      setLeftTime(calculateLeftTime());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(leftTime).forEach((value) => {
    if (!leftTime[value]) {
      return;
    }
    //console.log(Object.keys(leftTime));  => ["days", "hours", "minutes", "seconds"]

    timerComponents.push(
      <h3>
        {leftTime[value]} <span>{value}</span>
      </h3>,
    );
  });

  // an Array with 3 Objects
  //{'','','hours'} {'','','minutes'} {'','','seconds'}

  //console.log(timerComponents);

  // User should have posibility to input date
  //const handleChange = (event) => {
  //  setDay(event.target.value);
  //};
  //
  //const stop = () => {
  //  setLeftTime(0);
  //};

  return (
    <div className="datecounter">
      <h1>
        Today: {currentDate}.{currentMon}.{currentYear} {newHours}:{newMinutes}:
        {newSeconds}
      </h1>

      <p>
        {timerComponents.length ? (
          timerComponents
        ) : (
          <img src={boom} alt="boom" />
        )}
        <span style={{ fontSize: '2em', color: 'red' }}>
          <span role="img" aria-label="drink">
            🏄‍♂️➡️
          </span>
          {day}
        </span>
      </p>

      <br />
      {/*<button onClick={stop}>Stop Counter<button/>*/}
      <Link to="/NewYearCounter">
        <button id="reset">Go Back!</button>
      </Link>
    </div>
  );
};

export default DateCounter;
