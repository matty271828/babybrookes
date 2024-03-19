import React, { useState, useEffect } from 'react';

function CountdownOrStopwatch({ targetDateTime }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeDifference, setTimeDifference] = useState(currentTime - new Date(targetDateTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setTimeDifference(new Date() - new Date(targetDateTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateTime]);

  const formatTime = (time) => {
    const absoluteTime = Math.abs(time);
    const seconds = Math.floor((absoluteTime / 1000) % 60);
    const minutes = Math.floor((absoluteTime / (1000 * 60)) % 60);
    const hours = Math.floor((absoluteTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(absoluteTime / (1000 * 60 * 60 * 24));

    return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  };

  return (
    <div>
      <h1>{timeDifference < 0 ? 'Countdown to Baby’s Arrival' : 'Baby’s Age'}</h1>
      <h2>{formatTime(timeDifference)}</h2>
    </div>
  );
}

export default CountdownOrStopwatch;
