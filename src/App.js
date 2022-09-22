import "./App.css";
import { Hero, LineupCar, ListCar, Navbar, TheOrigin } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TheOrigin />
      <ListCar />
      <LineupCar />
    </div>
  );
}

export default App;
