import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">UserPortal</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>About</NavLink>
        <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>Users</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;