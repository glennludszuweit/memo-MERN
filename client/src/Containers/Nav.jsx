import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Nav() {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='links'>
        <Link to='/'>Posts</Link>
        <Link to='/add'>Add</Link>
      </div>
    </div>
  );
}

export default Nav;
