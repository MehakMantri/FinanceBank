// src/Navbar.jsx
import React from 'react';
import '../index.css';
import Logo from "../assets/Group.png"
import Star from "../assets/Star 1.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#aboutUs">About Us</a>
        <a href="#pricing">Pricing</a>
        <a href="#Features">Features</a>
      </div>
      <div className="navbar-download">
        <a href="#download" className="download-btn">Download</a>
      </div>
      <img src={Star} className='star-image' />
    </nav>
  );
};
const NavLink = ({ to, activeClass, children }) => {
    const location = useLocation();
  
    return (
      <Link to={to} className={location.pathname === to ? activeClass : ''}>
        {children}
      </Link>
    );
  };
export default Navbar;
