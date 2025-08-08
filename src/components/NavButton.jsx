import React from 'react';
import { Link } from 'react-router-dom';

const NavButton = ({ to, text }) => {
  return (
    <li>
      <Link to={to} className="nav-link">{text}</Link>
    </li>
  );
};

export default NavButton;