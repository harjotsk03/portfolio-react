import React from 'react';

const ProgressBar = ({ progressWidth }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
    </div>
  );
};

export default ProgressBar;
