import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
    <div className="nav">
      <img
      className='nav__logo'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
      alt='Netflix Logo'
      />

      <img
      className='nav__avatar'
      src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
      alt='Netflix Avatar'
      />
    </div>
  )
}

export default Navbar;