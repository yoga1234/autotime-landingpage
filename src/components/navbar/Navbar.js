import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left">AUTOTIME</div>
      <div className="middle">
        <ul>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Cars</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <button>Get a Car</button>
      </div>
    </div>
  );
};

export default Navbar;
