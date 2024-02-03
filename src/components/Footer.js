import React from 'react';
import logo from '../images/logoWebsite2.svg';

export const Footer = () => {
  const toTop = () => {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="footerContainer">
      <div>
        <img onClick={toTop} className='footerLogo' src={logo} alt="Logo"></img>
        <div className='footerText2'>Harjot Kooner 2024 ©</div>
      </div>
      <div>
        <div className='footerText'>Created with React.js, deployed with Github and Firebase</div>
      </div>
    </div>
  );
};
