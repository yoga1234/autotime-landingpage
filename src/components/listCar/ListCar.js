import React from "react";
import "./ListCar.css";

import { dummyList } from "../../assets";

const ListCar = () => {
  return (
    <div className="listcar-container">
      <div className="left">
        <div>
          <p>Ferrari</p>
          <hr className="list-border" />
          <p>Porsche</p>
          <hr className="list-border" />
          <p>Lamborghini</p>
          <hr className="list-border" />
          <p>Mercedes</p>
          <hr className="list-border" />
          <p>Audi</p>
        </div>
      </div>
      <div className="middle">
        <h3>Ferrari</h3>
        <p>
          Italian luxury sports car manufacturer based in Maranello, Italy.
          Founded by Enzo Ferrari in 1939 from the Alfa Romeo racing division as
          Auto Avio Costruzioni, the company built its first car in 1940, and
          produced its first Ferrari-badged car in 1947.
        </p>
      </div>
      <div className="right">
        <img src={dummyList} alt="" />
      </div>
    </div>
  );
};

export default ListCar;
