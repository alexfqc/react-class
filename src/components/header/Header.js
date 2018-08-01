import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="Header">
    <Link className="Header-link" to="/">
      Home
    </Link>
    <Link className="Header-link" to="/list">
      List
    </Link>
  </header>
);

export default Header;
