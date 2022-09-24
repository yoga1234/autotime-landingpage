import "./App.css";
import {
  Blog,
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
      <Blog />
    </div>
  );
}

export default App;
