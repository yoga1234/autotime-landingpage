import React from "react";
import "./SpecialOrder.css";

import { dummySpecialOrder } from "../../assets";

const SpecialOrder = () => {
  return (
    <div className="specialorder-container">
      <div className="top">
        <img src={dummySpecialOrder} alt="" />
        <h3>Special Order</h3>
        <button>See Details</button>
      </div>
      <div className="bottom">
        <h3>Special Order</h3>
        <div>
          <p>
            With all the flexibility, we can help you create your own custom
            style with your preferred style guides.
          </p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOrder;
