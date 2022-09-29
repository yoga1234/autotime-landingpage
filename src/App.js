/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import data from "./data.json";
import {
  Blog,
  Footer,
  Hero,
  LineupCar,
  ListCar,
  Navbar,
  SpecialOrder,
  TheOrigin,
} from "./components";

const App = () => {
  const [defaultCarList, setDefaultCarList] = useState("ferrari");
  const [activeCarList, setActiveCarList] = useState({});
  // handling lineup change

  useEffect(() => {
    for (var key in data.carList) {
      if (key === defaultCarList) {
        setActiveCarList(data.carList[key]);
      }
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TheOrigin />
      <ListCar />
      <LineupCar />
      <SpecialOrder />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
