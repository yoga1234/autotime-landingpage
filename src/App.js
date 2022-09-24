import "./App.css";
import {
  Hero,
  LineupCar,
  ListCar,
  Navbar,
  SpecialOrder,
  TheOrigin,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TheOrigin />
      <ListCar />
      <LineupCar />
      <SpecialOrder />
    </div>
  );
}

export default App;
