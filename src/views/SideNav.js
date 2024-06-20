import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sideNav.css';
import { FaHome } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { FaSms } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { LuPanelLeftClose } from "react-icons/lu";
import { LuPanelLeftOpen } from "react-icons/lu";





const SideNav = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className={isOpen ? 'sidebar open' : 'sidebar'}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <LuPanelLeftOpen /> : <LuPanelLeftClose /> }
      </button>
      <ul>
        <li>
          <Link to="/" onClick={toggleSidebar}><FaHome /> Home</Link>
        </li>
        {/* <li>
          <Link to="/login" onClick={toggleSidebar}>Login</Link>
        </li> */}
        <li>
          {/* <p>Profile</p> */}
          <Link to="/" ><FaRegAddressBook /> Profile</Link>
        </li>
        <li>
          {/* <p>Messages</p> */}
          <Link to="/" ><FaSms /> Messages</Link>
        </li>
        <li>
          {/* <p>Settings</p> */}
          <Link to="/" ><FaGear /> Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
