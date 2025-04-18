import React, { useEffect } from 'react';

const Timer = ({ time, setTime, isRunning, onTimeUp }) => {
  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev <= 10) {
            clearInterval(interval);
            onTimeUp();
            return 0;
          }
          return prev - 10;
        });
      }, 10);
    }
    return () => clearInterval(interval);
  }, [time, isRunning]);

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div className="digital-clock mb-3">
      ⏱️ {formatTime(time)}
    </div>
  );
};

export default Timer;
