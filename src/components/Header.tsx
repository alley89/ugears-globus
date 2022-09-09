import React from 'react';

import logo from '../../src/assets/logo.webp';
function Header() {

  return <header className="header">
    <img src={logo} alt="logo" />
    <h1>Globus makes the world go round</h1>
  </header>
}

export default Header;
