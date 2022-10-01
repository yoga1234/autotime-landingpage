/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./ListCar.css";

import { ferrariList } from "../../assets";
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
    for (var key in data.carList) {
      if (key === car) {
        carTemp.carData = data.carList[key];
      }
    }
    setListcarData(carTemp);
  };

  useEffect(() => {
    let carTemp = {};
    for (var key in data.carList) {
      if (key === listcarData.activeCar) {
        carTemp = data.carList[key];
      }
    }
    console.log(carTemp);
    setListcarData((prevState) => ({
      ...prevState,
      carData: carTemp,
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
        <button>Get A Car</button>
      </div>
      <div className="right">
        <img src={ferrariList} alt="" />
      </div>
    </div>
  );
};

export default ListCar;
