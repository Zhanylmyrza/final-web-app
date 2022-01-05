import "./App.css";
import Header from "./components/Header/Header";
import Kitchens from "./components/Header/Kitchens/Kitchens";
import Food from "./components/Header/FoodItem/Food";

const App = () => {
  return (
    <div>
      <Header />
      <Kitchens />
      <Food />
    </div>
  );
};

export default App;
