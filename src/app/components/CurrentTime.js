"use client";

import { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const estTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
      setTime(estTime);
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  if (!time) {
    return null; // Render nothing until time is set
  }

  const isDST = () => {
    const jan = new Date(time.getFullYear(), 0, 1).getTimezoneOffset();
    const jul = new Date(time.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(jan, jul) !== time.getTimezoneOffset();
  };

  const hours = time.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  const timezone = isDST() ? 'EDT' : 'EST';

  return (
    <span className="time-display">
      {hours}:{minutes} {ampm} {timezone}
    </span>
  );
};

export default CurrentTime;
