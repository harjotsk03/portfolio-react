import React, { useState } from 'react';

const BackToProjectsButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <div>
      <button
        style={{
          display: 'flex',
          fontFamily: 'icons',
          padding: '1vw 0.5vw',
          color: isHovered ? 'var(--hover2)' : 'var(--text-color)',
          background: 'transparent',
          border: 'none',
          transition: '0.3s ease-in-out'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span style={{ transform: 'rotate(180deg)' }}>:</span>
        <span style={{ fontFamily: 'main', marginLeft: '0.5vw' }}>Back to Projects</span>
      </button>
      <div className='line'></div>
    </div>
    </>
  );
};

export default BackToProjectsButton;
