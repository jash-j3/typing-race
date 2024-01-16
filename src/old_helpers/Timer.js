import React from 'react';

const Timer = ({ elapsedTime }) => {
  return (
    <div>
      {elapsedTime === 0 ? "0.0" : (elapsedTime / 1000).toFixed(1)} seconds
    </div>
  );
};

export default Timer;
