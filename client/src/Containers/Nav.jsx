import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Nav() {
  return (
    <div className='nav'>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
