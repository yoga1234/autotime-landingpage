import React from "react";
import "./Lineup.css";

const LineupCar = () => {
  return (
    <div className="lineup-container">
      <h2>Our Best Lineup</h2>
      <div className="lineup-content">
        <div className="top">
          <div className="left">{/* image goes here */}</div>
          <div className="right">
            <h3 className="lineup-car-name">Ferrari</h3>
            <p className="lineup-car-type">LaFerrari</p>
            <p className="lineup-car-desc">
              LaFerrari, project name F150[4] is a limited production mid-engine
              mild hybrid sports car built by Italian automotive manufacturer
              Ferrari
            </p>
            <button className="lineup-see-more">See More</button>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default LineupCar;
