/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
  <div>
    <nav className="nav-main">
      <div>
        <Link to="/" className="ham-menu" onClick={props.handleHamClick} />
        <Link to="/collages" className="nav-item-link">
          Art
        </Link>
        <Link to="/poems" className="nav-item-link">
          Poems
        </Link>
        <Link to="/about" className="nav-item-link">
          About
        </Link>
        <Link to="/contact" className="nav-item-link">
          Contact
        </Link>
      </div>
      <div className="nav-title">
        <Link to="/" className="nav-item-title" onClick={props.handleTitleClick}>Anna Bakogeorgou</Link>
      </div>
      <div className="nav-empty-cell" />
    </nav>
  </div>
);

export default NavBar;
