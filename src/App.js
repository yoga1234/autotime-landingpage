import "./App.css";
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
