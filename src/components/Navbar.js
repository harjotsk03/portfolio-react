import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness4';

const Navbar = ({ onToggleTheme, theme }) => {
  const buttonLabel = theme === 'light' ? 'Dark' : 'Light';
  const icon = theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />;
  

  return (
    <nav className="navbar">
      <div className='navButtonContainer'>
        <Link className='navButton' to="/">Home</Link>
        <Link className='navButton' to="/">Projects</Link>
        <Link className='navButton' to="/">About</Link>
        <Link className='navButton' to="/">Contact</Link>
      </div>
      <div>
        <button className='modeButton' onClick={onToggleTheme}>
          {icon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
