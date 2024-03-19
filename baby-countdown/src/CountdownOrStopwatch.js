import React, { useState, useEffect } from 'react';
import './CountdownOrStopwatch.css'; // Assuming you've stored the CSS here

function CountdownOrStopwatch({ targetDateTime }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDateTime));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDateTime));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, targetDateTime]);

  function calculateTimeLeft(targetDateTime) {
    const difference = +new Date(targetDateTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Time since the target date/time
      const elapsed = -difference;
      timeLeft = {
        days: Math.floor(elapsed / (1000 * 60 * 60 * 24)),
        hours: Math.floor((elapsed / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((elapsed / 1000 / 60) % 60),
        seconds: Math.floor((elapsed / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="timer">
      <div className="timer-content">
        <h1>{timeLeft.days >= 0 ? 'Time Until Baby Arrives' : 'Baby’s Age'}</h1>
        <div className="countdown">
          <span className="time days">{Math.abs(timeLeft.days)} Days</span>
          <span className="time hours">{Math.abs(timeLeft.hours)} Hours</span>
          <span className="time minutes">{Math.abs(timeLeft.minutes)} Minutes</span>
          <span className="time seconds">{Math.abs(timeLeft.seconds)} Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownOrStopwatch;

