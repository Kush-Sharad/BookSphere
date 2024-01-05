// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'navbar-open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="logo-name">BookSphere</span>
        </div>
        <div className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/footerbar">Contact</Link>
        </div>
        <div className="navbar-toggle" onClick={handleToggle}>
          <div className={`bar ${isOpen ? 'bar1-open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'bar2-open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'bar3-open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

