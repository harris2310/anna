import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div className="nav-vertical-main">
    <Link to="/collages" className="menu-item-link">
      Collages
    </Link>
    <Link to="/poems" className="menu-item-link">
      Poems
    </Link>
    <Link to="/about" className="menu-item-link">
      About
    </Link>
    <Link to="/contact" className="menu-item-link">
      Contact
    </Link>
  </div>
);

export default Menu;
