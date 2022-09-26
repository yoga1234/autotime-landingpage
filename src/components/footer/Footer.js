import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="subscribe">
        <h3>Don't Miss Out</h3>
        <p>Sign up for the latest car release and updates</p>
        <input type="text" />
        <button>SIGN UP</button>
      </div>
      <div className="overview">
        <h4>Overview</h4>
        <ul>
          <li>About</li>
          <li>Carrers</li>
          <li>Team Up</li>
        </ul>
      </div>
      <div className="customer-service">
        <h4>Customer Service</h4>
        <ul>
          <li>Contact Us</li>
          <li>My Account</li>
          <li>FAQ</li>
          <li>Support</li>
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
