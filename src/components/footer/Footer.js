/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="subscribe">
        <h3>Don't Miss Out</h3>
        <p>Sign up for the latest car release and updates</p>
        <input type="text" placeholder="Enter your email address" />
        <button>SIGN UP</button>
      </div>
      <div className="overview">
        <h4>Overview</h4>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
          <li>
            <a href="#">Team Up</a>
          </li>
        </ul>
      </div>
      <div className="customer-service">
        <h4>Customer Service</h4>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
      <div className="company-footer">
        <h3>AUTOTIME</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          vehicula nibh tortor, quis dapibus augue vestibulum ac.
        </p>
        <p>@2022 AUTOTIME</p>
      </div>
    </div>
  );
};

export default Footer;
