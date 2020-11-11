import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
      <div className='logo'>
        <Link to='/'>
          <h1>Brand</h1>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
