import React from "react";
import "./LineupCar.css";
import {
  audiLineup,
  ferrariLineup,
  lamborghiniLineup,
  mercedesLineup,
  porscheLineup,
  dummyLineup,
} from "../../assets";
import data from "../../data.json";
import { useState } from "react";
import { useEffect } from "react";

const LineupCar = () => {
  const [lineupData, setLineupData] = useState({
    activeCar: "ferrari",
    carData: {},
  });
  const handleLineup = (car) => {
    let carTemp = {};
    carTemp.activeCar = car;
    carTemp.activeImage = imageHandler(car);
    for (var key in data.bestLineup) {
      if (key === car) {
        carTemp.carData = data.bestLineup[key];
      }
    }
    setLineupData(carTemp);
  };
  const imageHandler = (car) => {
    let img;
    if (car === "audi") {
      img = audiLineup;
    } else if (car === "ferrari") {
      img = ferrariLineup;
    } else if (car === "lamborghini") {
      img = lamborghiniLineup;
    } else if (car === "mercedes") {
      img = mercedesLineup;
    } else if (car === "porsche") {
      img = porscheLineup;
    } else {
      img = dummyLineup;
    }
    return img;
  };
  useEffect(() => {
    let carTemp = {};
    for (var key in data.bestLineup) {
      if (key === lineupData.activeCar) {
        carTemp = data.bestLineup[key];
      }
    }
    setLineupData((prevState) => ({
      ...prevState,
      carData: carTemp,
      activeImage: imageHandler(lineupData.activeCar),
    }));
  }, []);
  return (
    <div className="lineup-container">
      <h2 className="lineup-title">Our Best Lineup</h2>
      <div className="lineup-content">
        <div className="top">
          <div className="left">
            <img src={lineupData.activeImage} alt="" />
          </div>
          <div className="right">
            <h3 className="lineup-car-name">{lineupData.carData.name}</h3>
            <p className="lineup-car-type">{lineupData.carData.type}</p>
            <p className="lineup-car-desc">{lineupData.carData.description}</p>
            <button className="lineup-see-more">See More</button>
            <hr className="lineup-break" />
          </div>
        </div>
        <div className="bottom">
          <ul>
            <li
              className={lineupData.activeCar === "ferrari" ? "active" : ""}
              onClick={() => handleLineup("ferrari")}
            >
              Ferrari
            </li>
            <li
              className={lineupData.activeCar === "porsche" ? "active" : ""}
              onClick={() => handleLineup("porsche")}
            >
              Porsche
            </li>
            <li
              className={lineupData.activeCar === "lamborghini" ? "active" : ""}
              onClick={() => handleLineup("lamborghini")}
            >
              Lamborghini
            </li>
            <li
              className={lineupData.activeCar === "mercedes" ? "active" : ""}
              onClick={() => handleLineup("mercedes")}
            >
              Mercedes
            </li>
            <li
              className={lineupData.activeCar === "audi" ? "active" : ""}
              onClick={() => handleLineup("audi")}
            >
              Audi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LineupCar;
