import { Provider } from "react-redux";
import PlanetList from "./pages/PlanetsHome";
import { Heading } from "./components/Heading";
import { store } from "./redux/store";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Heading />
        <PlanetList />
      </div>
    </Provider>
  );
}

export default App;
