import React from "react";
import "./ListCar.css";

const ListCar = () => {
  return (
    <div className="listcar-container">
      <div className="left">
        <p>Ferrari</p>
        <p>Porsche</p>
        <p>Lamborghini</p>
        <p>Mercedes</p>
        <p>Audi</p>
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
        <p>here it is</p>
      </div>
    </div>
  );
};

export default ListCar;
