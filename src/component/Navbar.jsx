import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">InterCity Ride</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Booking">Booking</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

