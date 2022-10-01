/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./ListCar.css";

import {
  audiList,
  ferrariList,
  lamborghiniList,
  mercedesList,
  porscheList,
  dummyList,
} from "../../assets";
import { useEffect, useState } from "react";
import data from "../../data.json";

const ListCar = () => {
  const [listcarData, setListcarData] = useState({
    activeCar: "ferrari",
    carData: {},
  });

  const handleLineup = (car) => {
    let carTemp = {};
    carTemp.activeCar = car;
    carTemp.activeImage = imageHandler(car);
    for (var key in data.carList) {
      if (key === car) {
        carTemp.carData = data.carList[key];
      }
    }
    setListcarData(carTemp);
  };
  const imageHandler = (car) => {
    let img;
    if (car === "audi") {
      img = audiList;
    } else if (car === "ferrari") {
      img = ferrariList;
    } else if (car === "lamborghini") {
      img = lamborghiniList;
    } else if (car === "mercedes") {
      img = mercedesList;
    } else if (car === "porsche") {
      img = porscheList;
    } else {
      img = dummyList;
    }
    return img;
  };

  useEffect(() => {
    let carTemp = {};
    for (var key in data.carList) {
      if (key === listcarData.activeCar) {
        carTemp = data.carList[key];
      }
    }
    setListcarData((prevState) => ({
      ...prevState,
      carData: carTemp,
      activeImage: imageHandler(listcarData.activeCar),
    }));
  }, []);

  return (
    <div className="listcar-container">
      <div className="left">
        <div>
          <p
            onClick={() => {
              handleLineup("ferrari");
            }}
            className={listcarData.activeCar === "ferrari" ? "active" : ""}
          >
            Ferrari
          </p>
          <hr className="list-border" />
          <p
            onClick={() => {
              handleLineup("porsche");
            }}
            className={listcarData.activeCar === "porsche" ? "active" : ""}
          >
            Porsche
          </p>
          <hr className="list-border" />
          <p
            onClick={() => {
              handleLineup("lamborghini");
            }}
            className={listcarData.activeCar === "lamborghini" ? "active" : ""}
          >
            Lamborghini
          </p>
          <hr className="list-border" />
          <p
            onClick={() => {
              handleLineup("mercedes");
            }}
            className={listcarData.activeCar === "mercedes" ? "active" : ""}
          >
            Mercedes
          </p>
          <hr className="list-border" />
          <p
            onClick={() => {
              handleLineup("audi");
            }}
            className={listcarData.activeCar === "audi" ? "active" : ""}
          >
            Audi
          </p>
        </div>
      </div>
      <div className="middle">
        <h3>{listcarData.carData.name}</h3>
        <p>{listcarData.carData.description}</p>
        <button>Get This Car</button>
      </div>
      <div className="right">
        <img src={listcarData.activeImage} alt="" />
      </div>
    </div>
  );
};

export default ListCar;
