/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <nav className="nav-main">
      <div className="nav-links">
        <Link to="/collages" className="nav-item-collages">
          Collages
        </Link>
        <Link to="/poems" className="nav-item-poems">
          Poems
        </Link>
        <Link to="/about" className="nav-item-about">
          About
        </Link>
        <Link to="/contact" className="nav-item-contact">
          Contact
        </Link>
      </div>
      <div className="nav-title">
        <Link to="/" className="nav-item-title">Anna Bakogeorgou</Link>
      </div>
      <div className="nav-empty-cell" />
    </nav>
  </div>
);

export default NavBar;
