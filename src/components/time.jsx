import React, { useState, useEffect } from 'react';
import './time.css';

export const Time = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://b6kjdmd73m.execute-api.us-east-1.amazonaws.com/Test/time')
        .then((response) => response.json())
        .then((data) => {
          setTime(data.time);
        })
        .catch((error) => console.log(error));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='time-widget'>
      <h2>Current Time:</h2>
      <h3>{time}</h3>
    </div>
  );
};
