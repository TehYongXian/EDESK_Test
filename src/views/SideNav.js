import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sideNav.css';

const SideNav = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className={isOpen ? 'sidebar open' : 'sidebar'}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '=' : ''}
      </button>
      <ul>
        <li>
          <Link to="/" onClick={toggleSidebar}>Home</Link>
        </li>
        <li>
          <Link to="/login" onClick={toggleSidebar}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
