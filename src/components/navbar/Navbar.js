import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left">AUTOTIME</div>
      <div className="middle">
        <ul>
          <li>Service</li>
          <li>Cars</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="right">
        <button>Get a Car</button>
      </div>
    </div>
  );
};

export default Navbar;
