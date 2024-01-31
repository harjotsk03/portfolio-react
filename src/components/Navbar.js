// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness4';

const Navbar = ({ onToggleTheme, theme }) => {
  const buttonLabel = theme === 'light' ? 'Dark' : 'Light';
  const icon = theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />;

  return (
    <nav className='navbar'>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <button onClick={onToggleTheme}>
          {icon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
